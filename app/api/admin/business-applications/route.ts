import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const backendBase = process.env.NEXT_PUBLIC_BACKEND_API_WITHOUT_VERSION;

    // Token is forwarded from the client (admin session token from AdminContext)
    const authHeader = req.headers.get('authorization');
    if (!backendBase || !authHeader) {
      return NextResponse.json({ error: 'Unauthorized or server misconfiguration' }, { status: 401 });
    }
    const dashboardToken = authHeader.replace(/^Bearer\s+/i, '');

    const url = `${backendBase.replace(/\/$/, '')}/trustfinder/api/v0/business/dashboard/`;

    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${dashboardToken}`,
      },
      cache: 'no-store',
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json(
        { error: data?.detail || data?.message || data?.error || 'Failed to fetch applications' },
        { status: res.status }
      );
    }

    return NextResponse.json(data);
  } catch (err) {
    console.error('business-applications GET error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
