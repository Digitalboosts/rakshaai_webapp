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
    const { account_number, ifsc } = body;

    if (!account_number || !String(account_number).trim()) {
      return NextResponse.json({ error: 'Account number is required.' }, { status: 400 });
    }

    if (!ifsc || ifsc.trim().length < 11) {
      return NextResponse.json({ error: 'Invalid IFSC code. Must be 11 characters.' }, { status: 400 });
    }

    const url = `${backendBase.replace(/\/$/, '')}/trustfinder/api/v0/business/verify/bank-account/`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        account_number: String(account_number).trim(),
        ifsc: ifsc.trim().toUpperCase(),
      }),
      cache: 'no-store',
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: data?.detail || data?.message || data?.error || 'Bank account verification failed' },
        { status: response.status }
      );
    }

    // Normalize response
    // data shape: { success, verified, account_number, ifsc,
    //   response: { code, data: { message, account_exists, name_at_bank }, transaction_id } }
    const inner = data?.response?.data ?? {};

    return NextResponse.json({
      success:        data.success ?? true,
      verified:       data.verified ?? false,
      accountNumber:  data.account_number ?? account_number,
      ifsc:           data.ifsc ?? ifsc.trim().toUpperCase(),
      accountExists:  inner.account_exists ?? false,
      nameAtBank:     inner.name_at_bank || '',
      message:        inner.message || '',
      transactionId:  data?.response?.transaction_id || '',
    });
  } catch (err) {
    console.error('[verify-bank-account]', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
