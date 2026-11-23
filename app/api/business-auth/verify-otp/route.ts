import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { email, otp } = await req.json();

    if (!email || !otp) {
      return NextResponse.json(
        { error: 'Email and OTP are required' },
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

    const url = `${backendBase.replace(/\/$/, '')}/trustfinder/api/v0/business/register/verify-otp/`;

    const backendRes = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, otp }),
    });

    const data = await backendRes.json();

    if (!backendRes.ok) {
      return NextResponse.json(
        { error: data?.detail || data?.message || data?.error || 'Invalid OTP' },
        { status: backendRes.status }
      );
    }

    // Backend returns a JWT access token  set it as an HttpOnly cookie (never exposed to JS)
    const token =
      data?.access || data?.token || data?.data?.access || data?.data?.token;
    const user = data?.user || data?.data?.user || null;

    const isProduction = process.env.NODE_ENV === 'production';

    const response = NextResponse.json({ success: true, user });
    response.cookies.set('business_token', token ?? '', {
      httpOnly: true,
      secure: isProduction,
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });
    return response;
  } catch (err) {
    console.error('verify-otp error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
