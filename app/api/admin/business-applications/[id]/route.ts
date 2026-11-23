import { NextRequest, NextResponse } from 'next/server';

export async function PUT(req: NextRequest) {
  try {
    const backendBase = process.env.NEXT_PUBLIC_BACKEND_API_WITHOUT_VERSION;

    // Token is forwarded from the client (admin session token from AdminContext)
    const authHeader = req.headers.get('authorization');
    if (!backendBase || !authHeader) {
      return NextResponse.json({ error: 'Unauthorized or server misconfiguration' }, { status: 401 });
    }
    const dashboardToken = authHeader.replace(/^Bearer\s+/i, '');

    const body = await req.json();
    // body contains: { business_user_id, action: 'approve' | 'reject', business_info }
    const { business_user_id, action, business_info } = body;

    if (!business_user_id || !action) {
      return NextResponse.json(
        { error: 'business_user_id and action are required' },
        { status: 400 }
      );
    }

    const url = `${backendBase.replace(/\/$/, '')}/trustfinder/api/v0/business/profile/update/`;

    const res = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${dashboardToken}`,
      },
      body: JSON.stringify({ business_user_id, action, ...(business_info ? { business_info } : {}) }),
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json(
        { error: data?.detail || data?.message || data?.error || 'Action failed' },
        { status: res.status }
      );
    }

    return NextResponse.json(data);
  } catch (err) {
    console.error('business-applications PUT error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
