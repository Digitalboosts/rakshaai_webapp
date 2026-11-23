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
    const { aadhaar_number } = body;

    if (!aadhaar_number || String(aadhaar_number).replace(/\s/g, '').length !== 12) {
      return NextResponse.json({ error: 'Invalid Aadhaar number. Must be 12 digits.' }, { status: 400 });
    }

    const url = `${backendBase.replace(/\/$/, '')}/trustfinder/api/v0/business/verify/aadhaar/send-otp/`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ aadhaar_number: String(aadhaar_number).replace(/\s/g, '') }),
      cache: 'no-store',
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      return NextResponse.json(
        { error: data?.detail || data?.message || data?.error || 'Failed to send OTP' },
        { status: response.status || 400 }
      );
    }

    return NextResponse.json({
      success: true,
      reference_id: data.reference_id,
      message: data.message || 'OTP sent to Aadhaar-linked mobile.',
    });
  } catch (err) {
    console.error('aadhaar send-otp error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
