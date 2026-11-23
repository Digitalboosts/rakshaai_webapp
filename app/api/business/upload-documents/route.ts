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

    // Read the incoming FormData from the client
    const incoming = await req.formData();

    const coi = incoming.get('coi') as File | null;
    const pan = incoming.get('pan') as File | null;
    const aoa = incoming.get('aoa') as File | null;
    const moa = incoming.get('moa') as File | null;

    if (!coi && !pan && !aoa && !moa) {
      return NextResponse.json({ error: 'Please attach at least one document.' }, { status: 400 });
    }

    const url = `${backendBase.replace(/\/$/, '')}/trustfinder/api/v0/business/documents/upload/`;

    // Build a new FormData to forward to the backend
    const formData = new FormData();
    if (coi) formData.append('coi', coi);
    if (pan) formData.append('pan', pan);
    if (aoa) formData.append('aoa', aoa);
    if (moa) formData.append('moa', moa);

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        // Do NOT set Content-Type  fetch sets multipart/form-data with boundary automatically
        Authorization: `Bearer ${token}`,
      },
      body: formData,
      cache: 'no-store',
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: data?.detail || data?.message || data?.error || 'Document upload failed' },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error('upload-documents error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
