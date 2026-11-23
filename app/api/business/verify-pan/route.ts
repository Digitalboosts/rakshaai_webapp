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
    const { pan, name_as_per_pan, date_of_birth } = body;

    if (!pan || pan.trim().length !== 10) {
      return NextResponse.json({ error: 'Invalid PAN. Must be 10 characters.' }, { status: 400 });
    }

    if (!name_as_per_pan || !name_as_per_pan.trim()) {
      return NextResponse.json({ error: 'Name as per PAN is required.' }, { status: 400 });
    }

    if (!date_of_birth || !date_of_birth.trim()) {
      return NextResponse.json({ error: 'Date of birth / incorporation is required.' }, { status: 400 });
    }

    const url = `${backendBase.replace(/\/$/, '')}/trustfinder/api/v0/business/verify/pan/`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        pan: pan.trim().toUpperCase(),
        name_as_per_pan: name_as_per_pan.trim(),
        date_of_birth: date_of_birth.trim(),
      }),
      cache: 'no-store',
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: data?.detail || data?.message || data?.error || 'PAN verification failed' },
        { status: response.status }
      );
    }

    // Normalize response
    // data shape: { success, verified, pan, response: { code, data: { pan, status, remarks,
    //   name_as_per_pan_match, date_of_birth_match, category, aadhaar_seeding_status }, transaction_id } }
    const inner = data?.response?.data ?? {};

    return NextResponse.json({
      success: data.success ?? true,
      verified: data.verified ?? false,
      pan: data.pan ?? pan.trim().toUpperCase(),
      status: inner.status || '',
      remarks: inner.remarks || null,
      nameMatch: inner.name_as_per_pan_match ?? null,
      dobMatch: inner.date_of_birth_match ?? null,
      category: inner.category || '',
      aadhaarSeedingStatus: inner.aadhaar_seeding_status || '',
      transactionId: data?.response?.transaction_id || '',
    });
  } catch (err) {
    console.error('[verify-pan]', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
