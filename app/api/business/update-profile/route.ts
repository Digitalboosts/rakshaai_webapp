import { NextRequest, NextResponse } from 'next/server';

export async function PUT(req: NextRequest) {
  try {
    // Read the HttpOnly cookie set by verify-otp
    const token = req.cookies.get('business_token')?.value;

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const backendBase = process.env.NEXT_PUBLIC_BACKEND_API_WITHOUT_VERSION;

    if (!backendBase) {
      return NextResponse.json({ error: 'Backend API not configured' }, { status: 500 });
    }

    const body = await req.json();
    // Expected: { business_name, product_name, phone, website }

    const url = `${backendBase.replace(/\/$/, '')}/trustfinder/api/v0/business/profile/update/`;

    const res = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json(
        { error: data?.detail || data?.message || data?.error || 'Profile update failed' },
        { status: res.status }
      );
    }

    return NextResponse.json({ success: true, ...data });
  } catch (err) {
    console.error('business update-profile error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
