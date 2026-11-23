import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { plan_id,total_count,customer_notify, customer_email,businessName, customer_phone, notes } = await req.json();

    // Read the HttpOnly cookie set by business-auth/verify-otp
    const token = req.cookies.get('business_token')?.value;
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Use dedicated Razorpay backend URL (e.g. ngrok tunnel) or fall back to general backend
    const backendBase = process.env.RAZORPAY_BACKEND_URL || process.env.NEXT_PUBLIC_BACKEND_API_WITHOUT_VERSION;

    if (!backendBase) {
      return NextResponse.json(
        { error: 'Backend API not configured' },
        { status: 500 }
      );
    }

    const url = `${backendBase.replace(/\/$/, '')}/trustfinder/api/v0/razorpay/subscription/create/`;

    const payload = {
      plan_id: plan_id,
      total_count: total_count,
      customer_notify: typeof customer_notify === 'boolean' ? customer_notify : true,
      customer_email: customer_email,
      customer_name: businessName,
      customer_phone: customer_phone,
      notes: {
        user_id: notes.business_user_id,
        source: notes.source,
      },
    };
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    console.log('Subscription creation response:', data);
    if (!response.ok) {
      console.error('Subscription creation failed:', data);
      return NextResponse.json(
        { error: data?.message || data?.error || 'Failed to create subscription' },
        { status: response.status }
      );
    }

    // Backend returns the Razorpay subscription object  forward the id
    return NextResponse.json({
      subscriptionId: data.id ?? data.subscription_id ?? data.data?.id,
      status: data.status ?? data.data?.status,
    });
  } catch (err) {
    console.error('create-subscription error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
