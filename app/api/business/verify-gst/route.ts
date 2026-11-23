import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    // Read the HttpOnly cookie set by business-auth/verify-otp
    const token = req.cookies.get('business_token')?.value;

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const backendBase = process.env.NEXT_PUBLIC_BACKEND_API_WITHOUT_VERSION;

    if (!backendBase) {
      return NextResponse.json({ error: 'Backend API not configured' }, { status: 500 });
    }

    const body = await req.json();
    const { gstin } = body;

    if (!gstin || gstin.trim().length < 15) {
      return NextResponse.json({ error: 'Invalid GSTIN. Must be 15 characters.' }, { status: 400 });
    }

    const url = `${backendBase.replace(/\/$/, '')}/trustfinder/api/v0/business/verify/gst/`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ gstin: gstin.trim().toUpperCase() }),
      cache: 'no-store',
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: data?.detail || data?.message || data?.error || 'GST verification failed' },
        { status: response.status }
      );
    }

    // data shape:
    // { success, verified, gstin, response: { code, data: { data: { lgnm, tradeNam, sts, ctb, rgdt, pradr, ... } } } }
    const inner = data?.response?.data?.data ?? {};

    return NextResponse.json({
      success: data.success ?? true,
      verified: data.verified ?? false,
      gstin: data.gstin ?? gstin,
      businessName: inner.lgnm || inner.tradeNam || '',
      tradeName: inner.tradeNam || '',
      status: inner.sts || '',
      businessType: inner.ctb || '',
      registrationDate: inner.rgdt || '',
      lastUpdated: inner.lstupdt || '',
      natureOfBusiness: inner.nba ?? [],
      address: inner.pradr?.addr
        ? [
            inner.pradr.addr.flno,
            inner.pradr.addr.bnm,
            inner.pradr.addr.bno,
            inner.pradr.addr.st,
            inner.pradr.addr.locality,
            inner.pradr.addr.loc,
            inner.pradr.addr.dst,
            inner.pradr.addr.stcd,
            inner.pradr.addr.pncd,
          ]
            .filter(Boolean)
            .join(', ')
        : '',
      state: inner.pradr?.addr?.stcd || '',
      stateCode: inner.stjCd || '',
      raw: inner,
    });
  } catch (err) {
    console.error('verify-gst error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
