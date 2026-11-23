import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const businessId = searchParams.get('business_id');

    if (!businessId) {
      return NextResponse.json({ error: 'business_id is required' }, { status: 400 });
    }

    const backendBase = process.env.NEXT_PUBLIC_BACKEND_API_WITHOUT_VERSION;

    if (!backendBase) {
      return NextResponse.json({ error: 'Backend API not configured' }, { status: 500 });
    }

    const url = `${backendBase.replace(/\/$/, '')}/trustfinder/api/v0/business/public-profile/?business_id=${encodeURIComponent(businessId)}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    const data = await response.json();
    console.log('Public profile response:', data);
    if (!response.ok) {
      return NextResponse.json(
        { error: data?.detail || data?.message || data?.error || 'Failed to fetch public profile' },
        { status: response.status }
      );
    }

    return NextResponse.json(data);
  } catch (err) {
    console.error('[public-profile] error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
