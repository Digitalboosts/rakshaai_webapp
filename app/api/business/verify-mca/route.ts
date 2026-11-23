import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const token = req.cookies.get('business_token')?.value;

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const backendBase = process.env.NEXT_PUBLIC_BACKEND_API_WITHOUT_VERSION;

    if (!backendBase) {
      return NextResponse.json({ error: 'Backend API not configured' }, { status: 500 });
    }

    const body = await req.json();
    const { cin } = body;

    if (!cin || cin.trim().length < 21) {
      return NextResponse.json({ error: 'Invalid CIN. Must be 21 characters.' }, { status: 400 });
    }

    const url = `${backendBase.replace(/\/$/, '')}/trustfinder/api/v0/business/verify/mca/`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ cin: cin.trim().toUpperCase() }),
      cache: 'no-store',
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: data?.detail || data?.message || data?.error || 'MCA verification failed' },
        { status: response.status }
      );
    }

    // If backend returns success:false or an error inside the response, surface it
    if (!data.success) {
      const backendError =
        data?.response?.error ||
        data?.response?.message ||
        data?.message ||
        'MCA verification could not be completed.';
      return NextResponse.json({ error: backendError }, { status: 502 });
    }

    // Normalize  the MCA master-data shape varies; forward what we have
    const inner = data?.response?.data ?? {};

    return NextResponse.json({
      success:         true,
      verified:        data.verified ?? true,
      cin:             data.cin ?? cin.trim().toUpperCase(),
      companyName:     inner.company_name || inner.companyName || '',
      companyStatus:   inner.company_status || inner.status || '',
      companyClass:    inner.company_class || '',
      companyCategory: inner.company_category || '',
      companySubCategory: inner.company_sub_category || '',
      dateOfIncorporation: inner.date_of_incorporation || inner.incorporationDate || '',
      rocCode:         inner.roc_code || '',
      registeredState: inner.registered_state || inner.state || '',
      email:           inner.email_id || inner.email || '',
      paidUpCapital:   inner.paid_up_capital || '',
      authorisedCapital: inner.authorised_capital || '',
      registeredAddress: inner.registered_address || inner.address || '',
    });
  } catch (err) {
    console.error('[verify-mca]', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
