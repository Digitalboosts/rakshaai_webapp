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
    const { aadhaar_number, reference_id, otp } = body;

    if (!aadhaar_number || !reference_id || !otp) {
      return NextResponse.json(
        { error: 'aadhaar_number, reference_id and otp are required' },
        { status: 400 }
      );
    }

    const url = `${backendBase.replace(/\/$/, '')}/trustfinder/api/v0/business/verify/aadhaar/verify-otp/`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        aadhaar_number: String(aadhaar_number).replace(/\s/g, ''),
        reference_id: String(reference_id),
        otp: String(otp),
      }),
      cache: 'no-store',
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      return NextResponse.json(
        { error: data?.detail || data?.message || data?.error || 'OTP verification failed' },
        { status: response.status || 400 }
      );
    }

    // Normalize the nested response
    const inner = data?.response?.data ?? {};

    return NextResponse.json({
      success: true,
      verified: data.verified ?? true,
      reference_id: data.reference_id,
      name:           inner.name         || '',
      gender:         inner.gender       || '',
      dateOfBirth:    inner.date_of_birth || '',
      yearOfBirth:    inner.year_of_birth || null,
      careOf:         inner.care_of      || '',
      fullAddress:    inner.full_address  || '',
      address: {
        house:       inner.address?.house        || '',
        landmark:    inner.address?.landmark     || '',
        vtc:         inner.address?.vtc          || '',
        postOffice:  inner.address?.post_office  || '',
        district:    inner.address?.district     || '',
        state:       inner.address?.state        || '',
        country:     inner.address?.country      || '',
        pincode:     inner.address?.pincode      || '',
      },
      photo:      inner.photo       || null,
      shareCode:  inner.share_code  || '',
      status:     inner.status      || '',
      message:    inner.message     || '',
    });
  } catch (err) {
    console.error('aadhaar verify-otp error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
