import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    // Read the HttpOnly cookie set by business-auth/verify-otp
    const token = req.cookies.get('business_token')?.value;

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const backendBase = process.env.NEXT_PUBLIC_BACKEND_API_WITHOUT_VERSION;

    if (!backendBase) {
      return NextResponse.json({ error: 'Backend API not configured' }, { status: 500 });
    }

    const url = `${backendBase.replace(/\/$/, '')}/trustfinder/api/v0/razorpay/subscription/status/`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      cache: 'no-store',
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: data?.detail || data?.message || data?.error || 'Failed to fetch subscription status' },
        { status: response.status }
      );
    }

    // Normalize and return
    // data shape: { success, business_user_id, count, subscriptions: [...] }
    const subscriptions: Array<{
      plan_id?: number | string;
      subscription_id: string;
      status: string;
      paid_count: number;
      remaining_count: number;
      total_count: number;
      customer_email: string;
      customer_name: string;
      customer_phone: string;
      created_at: string;
      updated_at: string;
    }> = data.subscriptions ?? [];

    // Find the most recent active subscription (or any subscription)
    const active = subscriptions.find((s) => s.status === 'active');
    const latest = active ?? subscriptions[0] ?? null;

    // Determine plan type from total_count
    // 12 cycles = monthly plan, 4 cycles = quarterly plan, 1 cycle = annual plan
    let plan: 'monthly' | 'quarterly' | 'annually' | null = null;
    if (latest) {
      plan = latest.total_count === 1 ? 'annually' : latest.total_count === 4 ? 'quarterly' : 'monthly';
    }

    return NextResponse.json({
      success: true,
      hasActiveSubscription: !!active,
      plan,
      planId: latest?.plan_id ?? null,
      subscriptionId: latest?.subscription_id ?? null,
      status: latest?.status ?? null,
      count: data.count ?? subscriptions.length,
      subscriptions,
    });
  } catch (err) {
    console.error('subscription-status error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
