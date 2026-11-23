import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const {
      plan_id,
      subscription_id,
      total_count,
      customer_notify = 1,
      customer_email,
      customer_name,
      customer_phone,
      notes,
    } = await req.json();

    if (!plan_id || typeof plan_id !== 'string') {
      return NextResponse.json({ error: 'Plan ID is required' }, { status: 400 });
    }

    if (!subscription_id || typeof subscription_id !== 'string') {
      return NextResponse.json({ error: 'Subscription ID is required' }, { status: 400 });
    }

    const token = req.cookies.get('business_token')?.value;
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const backendBase = process.env.RAZORPAY_BACKEND_URL || process.env.NEXT_PUBLIC_BACKEND_API_WITHOUT_VERSION;
    if (!backendBase) {
      return NextResponse.json({ error: 'Backend API not configured' }, { status: 500 });
    }

    const url = `${backendBase.replace(/\/$/, '')}/trustfinder/api/v0/razorpay/subscription/upgrade/`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        plan_id,
        subscription_id,
        total_count,
        customer_notify,
        customer_email,
        customer_name,
        customer_phone,
        notes,
      }),
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      return NextResponse.json(
        { error: data?.detail || data?.message || data?.error || 'Failed to change subscription plan' },
        { status: response.status }
      );
    }

    const newSubscription = data?.new_subscription ?? {};

    return NextResponse.json({
      success: true,
      message: data?.message || 'Subscription plan changed successfully',
      subscriptionId: newSubscription.subscription_id ?? newSubscription.id ?? null,
      shortUrl: newSubscription.short_url ?? null,
      status: newSubscription.status ?? null,
      data,
    });
  } catch (err) {
    console.error('upgrade-subscription error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
