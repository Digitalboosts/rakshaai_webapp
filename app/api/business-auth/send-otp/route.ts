import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { email, website } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    const backendBase = process.env.NEXT_PUBLIC_BACKEND_API_WITHOUT_VERSION;

    if (!backendBase) {
      return NextResponse.json(
        { error: 'Backend API not configured' },
        { status: 500 }
      );
    }

    const url = `${backendBase.replace(/\/$/, '')}/trustfinder/api/v0/business/register/send-otp/`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(website ? { email, website } : { email }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: data?.detail || data?.message || data?.error || 'Failed to send OTP' },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true, message: data?.message || 'OTP sent successfully' });
  } catch (err) {
    console.error('send-otp error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
