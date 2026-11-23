import { NextRequest, NextResponse } from 'next/server';

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const token = req.cookies.get('business_token')?.value;

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const backendBase = process.env.NEXT_PUBLIC_BACKEND_API_WITHOUT_VERSION;

    if (!backendBase) {
      return NextResponse.json({ error: 'Backend API not configured' }, { status: 500 });
    }

    const { id } = await params;
    if (!id) {
      return NextResponse.json({ error: 'Report id is required' }, { status: 400 });
    }

    const body = await req.json();
    const { status } = body || {};
    const allowed = ['pending', 'under_review', 'resolved', 'closed'];
    if (!status || !allowed.includes(status)) {
      return NextResponse.json(
        { error: `Invalid status. Allowed: ${allowed.join(', ')}` },
        { status: 400 }
      );
    }

    const url = `${backendBase.replace(/\/$/, '')}/trustfinder/api/v0/business/scam-reports/${encodeURIComponent(id)}/`;

    const response = await fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ status }),
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      return NextResponse.json(
        { error: data?.detail || data?.message || data?.error || 'Failed to update report' },
        { status: response.status }
      );
    }

    return NextResponse.json(data);
  } catch (err) {
    console.error('[business/reports/:id] PATCH error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
