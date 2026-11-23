import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { subscription_id, cancel_at_cycle_end = false } = await req.json();

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

    const url = `${backendBase.replace(/\/$/, '')}/trustfinder/api/v0/razorpay/subscription/cancel/`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        subscription_id,
        cancel_at_cycle_end: Boolean(cancel_at_cycle_end),
      }),
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      return NextResponse.json(
        { error: data?.detail || data?.message || data?.error || 'Failed to cancel subscription' },
        { status: response.status }
      );
    }

    return NextResponse.json({
      success: true,
      message: data?.message || 'Subscription cancelled successfully',
      data,
    });
  } catch (err) {
    console.error('cancel-subscription error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
