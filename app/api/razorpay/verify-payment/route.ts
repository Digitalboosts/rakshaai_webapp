import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const {
      razorpay_payment_id,
      razorpay_subscription_id,
      razorpay_signature,
      previous_subscription_id,
    } = await req.json();

    const backendBase = process.env.NEXT_PUBLIC_BACKEND_API_WITHOUT_VERSION;
    const apiKey      = process.env.TRUSTFINDER_API_KEY;

    if (!backendBase || !apiKey) {
      return NextResponse.json(
        { error: 'Backend API not configured' },
        { status: 500 }
      );
    }

    const url = `${backendBase.replace(/\/$/, '')}/trustfinder/api/v0/razorpay/subscription/verify-first-payment/`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': apiKey,
      },
      body: JSON.stringify({
        razorpay_payment_id,
        razorpay_subscription_id,
        razorpay_signature,
        ...(previous_subscription_id ? { previous_subscription_id } : {}),
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Payment verification failed:', data);
      return NextResponse.json(
        { error: data?.message || data?.error || 'Payment verification failed' },
        { status: response.status }
      );
    }

    return NextResponse.json({ verified: true, data });
  } catch (err) {
    console.error('verify-payment error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
