import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
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

    const incomingFormData = await req.formData();
    const responseText = incomingFormData.get('response_text');
    const document = incomingFormData.get('document');
    const status = incomingFormData.get('status');

    if (typeof responseText !== 'string' || !responseText.trim()) {
      return NextResponse.json({ error: 'Response text is required' }, { status: 400 });
    }

    if (!(document instanceof File)) {
      return NextResponse.json({ error: 'A proof document is required' }, { status: 400 });
    }

    const allowedStatuses = ['pending', 'resolved', 'dismissed'];
    if (typeof status !== 'string' || !allowedStatuses.includes(status)) {
      return NextResponse.json(
        { error: `Invalid status. Allowed: ${allowedStatuses.join(', ')}` },
        { status: 400 }
      );
    }

    const formData = new FormData();
    formData.append('response_text', responseText.trim());
    formData.append('document', document, document.name);
    formData.append('status', status);

    const url = `${backendBase.replace(/\/$/, '')}/trustfinder/api/v0/business/scam-reports/${encodeURIComponent(id)}/respond/`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const contentType = response.headers.get('content-type') || '';
    const payload = contentType.includes('application/json')
      ? await response.json().catch(() => ({}))
      : await response.text().catch(() => '');

    if (!response.ok) {
      const errorMessage = typeof payload === 'string'
        ? payload
        : payload?.detail || payload?.message || payload?.error || 'Failed to submit proof';

      return NextResponse.json({ error: errorMessage }, { status: response.status });
    }

    return NextResponse.json(payload);
  } catch (err) {
    console.error('[business/reports/:id/respond] POST error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}