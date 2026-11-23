import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get('business_token')?.value;

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const backendBase = process.env.NEXT_PUBLIC_BACKEND_API_WITHOUT_VERSION;

    if (!backendBase) {
      return NextResponse.json({ error: 'Backend API not configured' }, { status: 500 });
    }

    const url = `${backendBase.replace(/\/$/, '')}/trustfinder/api/v0/business/verify/status/`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      cache: 'no-store',
    });

    const data = await response.json();
    if (!response.ok) {
      return NextResponse.json(
        { error: data?.detail || data?.message || data?.error || 'Failed to fetch verification status' },
        { status: response.status }
      );
    }

    // ── Flat response shape ──────────────────────────────────────────────────
    // GST
    const gstInner = data.gst_response?.data?.data ?? {};
    const gstDetail = data.gst_verification
      ? {
          gstin:            data.gstin ?? '',
          verifiedAt:       data.gst_verified_at ?? '',
          businessName:     gstInner.lgnm || gstInner.tradeNam || '',
          tradeName:        gstInner.tradeNam || '',
          status:           gstInner.sts || '',
          businessType:     gstInner.ctb || '',
          registrationDate: gstInner.rgdt || '',
          lastUpdated:      gstInner.lstupdt || '',
          natureOfBusiness: gstInner.nba ?? [],
          address:          gstInner.pradr?.addr
            ? [
                gstInner.pradr.addr.flno, gstInner.pradr.addr.bnm, gstInner.pradr.addr.bno,
                gstInner.pradr.addr.st, gstInner.pradr.addr.locality,
                gstInner.pradr.addr.loc, gstInner.pradr.addr.dst,
                gstInner.pradr.addr.stcd, gstInner.pradr.addr.pncd,
              ].filter(Boolean).join(', ')
            : '',
          state:      gstInner.pradr?.addr?.stcd || '',
          stateCode:  gstInner.stjCd || '',
        }
      : null;

    // PAN
    const panInner = data.pan_response?.data ?? {};
    const panDetail = data.pan_verification
      ? {
          panNumber:            data.pan_number ?? '',
          verifiedAt:           data.pan_verified_at ?? '',
          status:               panInner.status || '',
          remarks:              panInner.remarks || null,
          nameMatch:            panInner.name_as_per_pan_match ?? null,
          dobMatch:             panInner.date_of_birth_match ?? null,
          category:             panInner.category || '',
          aadhaarSeedingStatus: panInner.aadhaar_seeding_status || '',
        }
      : null;

    // Aadhaar
    const aadhaarInner = data.aadhaar_response?.data ?? {};
    const aadhaarAddr  = aadhaarInner.address ?? {};
    const aadhaarDetail = data.aadhaar_verification
      ? {
          aadhaarNumber: data.aadhaar_number ?? '',
          verifiedAt:    data.aadhaar_verified_at ?? '',
          name:          aadhaarInner.name || '',
          gender:        aadhaarInner.gender || '',
          dateOfBirth:   aadhaarInner.date_of_birth || '',
          yearOfBirth:   aadhaarInner.year_of_birth ?? null,
          careOf:        aadhaarInner.care_of || '',
          fullAddress:   aadhaarInner.full_address || '',
          address: {
            house:       aadhaarAddr.house || '',
            landmark:    aadhaarAddr.landmark || '',
            vtc:         aadhaarAddr.vtc || '',
            postOffice:  aadhaarAddr.post_office || '',
            district:    aadhaarAddr.district || '',
            state:       aadhaarAddr.state || '',
            country:     aadhaarAddr.country || '',
            pincode:     aadhaarAddr.pincode || '',
          },
          photo:   aadhaarInner.photo || null,
          status:  aadhaarInner.status || '',
        }
      : null;

    // MCA
    const mcaInner  = data.mca_response?.data ?? {};
    const mcaDetail = {
      cin:                 data.cin_number ?? '',
      verifiedAt:          data.mca_verified_at ?? '',
      verified:            data.mca_verification ?? false,
      companyName:         mcaInner.company_name  || '',
      companyStatus:       mcaInner.company_status || '',
      companyClass:        mcaInner.company_class  || '',
      companyCategory:     mcaInner.company_category || '',
      companySubCategory:  mcaInner.company_sub_category || '',
      dateOfIncorporation: mcaInner.date_of_incorporation || '',
      rocCode:             mcaInner.roc_code || '',
      registeredState:     mcaInner.registered_state || '',
      email:               mcaInner.email_id || '',
      paidUpCapital:       mcaInner.paid_up_capital || '',
      authorisedCapital:   mcaInner.authorised_capital || '',
      registeredAddress:   mcaInner.registered_address || '',
      error:               data.mca_response?.error || null,
    };

    // Bank
    const bankInner  = data.bank_response?.data ?? {};
    const bankDetail = data.bank_account_verification
      ? {
          accountNumber: data.bank_account_number ?? '',
          ifsc:          data.bank_ifsc ?? '',
          verifiedAt:    data.bank_verified_at ?? '',
          accountExists: bankInner.account_exists ?? true,
          nameAtBank:    bankInner.name_at_bank || '',
          message:       bankInner.message || '',
        }
      : null;

    // Documents
    const docsRaw = data.documents ?? {};
    const documents = {
      coiUrl:  docsRaw.coi_url || null,
      panUrl:  docsRaw.pan_url || null,
      aoaUrl:  docsRaw.aoa_url || null,
      moaUrl:  docsRaw.moa_url || null,
    };
    const hasDocuments = !!(docsRaw.coi_url || docsRaw.pan_url || docsRaw.aoa_url || docsRaw.moa_url);

    return NextResponse.json({
      success:        data.success ?? true,
      businessUserId: data.business_user_id ?? '',
      verifications: {
        gst:         data.gst_verification          ?? false,
        pan:         data.pan_verification          ?? false,
        aadhaar:     data.aadhaar_verification      ?? false,
        mca:         data.mca_verification          ?? false,
        bankAccount: data.bank_account_verification ?? false,
      },
      details: {
        gst:         gstDetail,
        pan:         panDetail,
        aadhaar:     aadhaarDetail,
        mca:         mcaDetail,
        bankAccount: bankDetail,
      },
      documents,
      hasDocuments,
      updatedAt: data.updated_at ?? '',
    });
  } catch (err) {
    console.error('[verify-status]', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
