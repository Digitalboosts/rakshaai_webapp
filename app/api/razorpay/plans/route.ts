import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get('business_token')?.value;
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const backendBase = process.env.RAZORPAY_BACKEND_URL || process.env.NEXT_PUBLIC_BACKEND_API_WITHOUT_VERSION;
    if (!backendBase) {
      return NextResponse.json({ error: 'Backend API not configured' }, { status: 500 });
    }

    const url = `${backendBase.replace(/\/$/, '')}/trustfinder/api/v0/razorpay/plans/`;

    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      // Revalidate every 10 minutes  plans rarely change
      next: { revalidate: 600 },
    });

    const contentType = response.headers.get('content-type') || '';
    const rawBody = await response.text();
    let data: any = null;
    if (contentType.includes('application/json')) {
      try { data = rawBody ? JSON.parse(rawBody) : null; } catch { data = null; }
    }

    if (!response.ok) {
      return NextResponse.json(
        { error: data?.detail || data?.message || data?.error || 'Failed to fetch plans' },
        { status: response.status }
      );
    }

    return NextResponse.json(data);
  } catch (err) {
    console.error('plans fetch error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
