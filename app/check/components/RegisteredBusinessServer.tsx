import React from 'react';
import { BadgeCheck, Building2, CheckCircle2, XCircle, FileText, ShieldCheck, Mail, Phone, Globe, Calendar, MapPin, User } from 'lucide-react';

function maskPan(pan?: string) {
    if (!pan) return 'N/A';
    if (pan.length < 5) return pan;
    return `${pan.slice(0, 2)}${'*'.repeat(pan.length - 3)}${pan.slice(-1)}`;
}

function maskGstin(gstin?: string) {
    if (!gstin) return 'N/A';
    if (gstin.length < 6) return gstin;
    return `${gstin.slice(0, 2)}${'*'.repeat(gstin.length - 6)}${gstin.slice(-4)}`;
}

function maskCin(cin?: string) {
    if (!cin) return 'N/A';
    if (cin.length < 6) return cin;
    return `${cin.slice(0, 3)}${'*'.repeat(cin.length - 6)}${cin.slice(-3)}`;
}

function maskEmail(email?: string) {
    if (!email) return 'N/A';
    const [local, domain] = email.split('@');
    if (!domain) return email;
    if (local.length <= 2) return `${local[0]}*@${domain}`;
    return `${local.slice(0, 2)}${'*'.repeat(Math.max(local.length - 3, 1))}${local.slice(-1)}@${domain}`;
}

function maskPhone(phone?: string) {
    if (!phone) return 'N/A';
    if (phone.length < 6) return phone;
    return `${phone.slice(0, 3)}${'*'.repeat(phone.length - 6)}${phone.slice(-3)}`;
}

function formatDate(d?: string) {
    if (!d) return 'N/A';
    try {
        return new Date(d).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
    } catch {
        return String(d);
    }
}

function VerificationPill({ label, verified }: { label: string; verified: boolean }) {
    return (
        <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${verified
            ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/40'
            : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 border border-gray-200 dark:border-gray-700'
            }`}>
            {verified ? <CheckCircle2 className="h-3.5 w-3.5" /> : <XCircle className="h-3.5 w-3.5" />}
            <span>{label}</span>
        </div>
    );
}

function KycRow({ label, value, verifiedAt, verified }: { label: string; value: string; verifiedAt?: string | null; verified?: boolean }) {
    return (
        <div className="flex items-start justify-between gap-3 p-3 bg-white dark:bg-gray-800/60 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide m-0">{label}</h4>
                    {verified && <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0" />}
                </div>
                <p className="text-sm font-mono text-gray-900 dark:text-white m-0 break-all">{value}</p>
                {verifiedAt && (
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1 m-0">Verified on {formatDate(verifiedAt)}</p>
                )}
            </div>
        </div>
    );
}

function DocumentLink({ label, url }: { label: string; url?: string }) {
    if (!url) return null;
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-800/60 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-700 rounded-lg transition-all group"
        >
            <FileText className="h-4 w-4 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover:text-indigo-700 dark:group-hover:text-indigo-300">{label}</span>
        </a>
    );
}

function hasTruthyValue(value: any): boolean {
    if (value === null || value === undefined) return false;
    if (typeof value === 'string') return value.trim().length > 0;
    if (typeof value === 'number' || typeof value === 'boolean') return true;
    if (Array.isArray(value)) return value.some(hasTruthyValue);
    if (typeof value === 'object') return Object.values(value).some(hasTruthyValue);
    return false;
}

export default function RegisteredBusinessServer({ data, registeredBusiness }: { data?: any; registeredBusiness?: any }) {
    const source = registeredBusiness || data?.registered_business || data?.registeredBusiness;

    if (!source) return null;

    const normalizedRegisteredBusiness =
        source.registered_business ||
        source.data?.registered_business ||
        source.data ||
        source;

    const businessInfo = normalizedRegisteredBusiness.business_info || normalizedRegisteredBusiness.businessInfo || {
        business_name: normalizedRegisteredBusiness.business_name,
        product_name: normalizedRegisteredBusiness.product_name,
        website: normalizedRegisteredBusiness.website || normalizedRegisteredBusiness.website_url,
        email: normalizedRegisteredBusiness.email,
        phone: normalizedRegisteredBusiness.phone || normalizedRegisteredBusiness.phone_number,
        member_since: normalizedRegisteredBusiness.member_since,
        business_info_verified: normalizedRegisteredBusiness.business_info_verified,
    };

    const verification = normalizedRegisteredBusiness.verification_summary || normalizedRegisteredBusiness.verificationSummary || {
        gst_verified: normalizedRegisteredBusiness.gst_verified,
        pan_verified: normalizedRegisteredBusiness.pan_verified,
        aadhaar_verified: normalizedRegisteredBusiness.aadhaar_verified,
        mca_verified: normalizedRegisteredBusiness.mca_verified,
        bank_account_verified: normalizedRegisteredBusiness.bank_account_verified,
    };

    const kyc = normalizedRegisteredBusiness.kyc_details || normalizedRegisteredBusiness.kycDetails || {
        gst: normalizedRegisteredBusiness.gst,
        pan: normalizedRegisteredBusiness.pan,
        aadhaar: normalizedRegisteredBusiness.aadhaar,
        mca: normalizedRegisteredBusiness.mca,
        bank_account: normalizedRegisteredBusiness.bank_account || normalizedRegisteredBusiness.bankAccount,
    };

    const documents = normalizedRegisteredBusiness.documents || normalizedRegisteredBusiness.document_links || {
        coi_url: normalizedRegisteredBusiness.coi_url || normalizedRegisteredBusiness.coiUrl,
        pan_url: normalizedRegisteredBusiness.pan_url || normalizedRegisteredBusiness.panUrl,
        aoa_url: normalizedRegisteredBusiness.aoa_url || normalizedRegisteredBusiness.aoaUrl,
        moa_url: normalizedRegisteredBusiness.moa_url || normalizedRegisteredBusiness.moaUrl,
    };

    const hasAnyData =
        businessInfo.business_name ||
        businessInfo.product_name ||
        businessInfo.website ||
        businessInfo.email ||
        businessInfo.phone ||
        businessInfo.member_since ||
        businessInfo.business_info_verified ||
        hasTruthyValue(verification) ||
        hasTruthyValue(kyc) ||
        hasTruthyValue(documents);

    if (!hasAnyData) return null;

    const verifiedCount = Object.values(verification).filter(Boolean).length;
    const totalCount = Object.keys(verification).length;

    return (
        <section>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/10 dark:to-purple-900/10 rounded-xl p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
                    <div className="flex items-center space-x-3">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
                            <BadgeCheck aria-hidden="true" className="h-5 w-5 text-white" />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-gray-900 dark:text-white m-0">Verified Business Owner</h2>
                            <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium m-0">
                                {verifiedCount > 0 ? `${verifiedCount} of ${totalCount} verifications completed` : 'Business is registered on RakshaAI'}
                            </p>
                        </div>
                    </div>
                    {businessInfo.business_info_verified && (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/40">
                            <ShieldCheck className="h-4 w-4" />
                            <span>Verified Business</span>
                        </div>
                    )}
                </div>

                {/* Business Info */}
                <div className="bg-white dark:bg-gray-800/60 rounded-xl p-5 border border-gray-200 dark:border-gray-700 mb-5">
                    <div className="flex items-center gap-2 mb-4">
                        <Building2 className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                        <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wide m-0">Business Information</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {businessInfo.business_name && (
                            <div>
                                <p className="text-xs text-gray-500 dark:text-gray-400 m-0 mb-1">Business Name</p>
                                <p className="text-sm font-semibold text-gray-900 dark:text-white m-0">{businessInfo.business_name}</p>
                            </div>
                        )}
                        {businessInfo.product_name && (
                            <div>
                                <p className="text-xs text-gray-500 dark:text-gray-400 m-0 mb-1">Product Name</p>
                                <p className="text-sm font-semibold text-gray-900 dark:text-white m-0">{businessInfo.product_name}</p>
                            </div>
                        )}
                        {businessInfo.website && (
                            <div>
                                <p className="text-xs text-gray-500 dark:text-gray-400 m-0 mb-1 flex items-center gap-1"><Globe className="h-3 w-3" /> Website</p>
                                <a href={businessInfo.website} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline m-0 break-all">{businessInfo.website}</a>
                            </div>
                        )}
                        {businessInfo.email && (
                            <div>
                                <p className="text-xs text-gray-500 dark:text-gray-400 m-0 mb-1 flex items-center gap-1"><Mail className="h-3 w-3" /> Email</p>
                                <p className="text-sm font-semibold text-gray-900 dark:text-white m-0 font-mono">{maskEmail(businessInfo.email)}</p>
                            </div>
                        )}
                        {businessInfo.phone && (
                            <div>
                                <p className="text-xs text-gray-500 dark:text-gray-400 m-0 mb-1 flex items-center gap-1"><Phone className="h-3 w-3" /> Phone</p>
                                <p className="text-sm font-semibold text-gray-900 dark:text-white m-0 font-mono">{maskPhone(businessInfo.phone)}</p>
                            </div>
                        )}
                        {businessInfo.member_since && (
                            <div>
                                <p className="text-xs text-gray-500 dark:text-gray-400 m-0 mb-1 flex items-center gap-1"><Calendar className="h-3 w-3" /> Member Since</p>
                                <p className="text-sm font-semibold text-gray-900 dark:text-white m-0">{formatDate(businessInfo.member_since)}</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Verification Summary */}
                {totalCount > 0 && (
                    <div className="bg-white dark:bg-gray-800/60 rounded-xl p-5 border border-gray-200 dark:border-gray-700 mb-5">
                        <div className="flex items-center gap-2 mb-4">
                            <ShieldCheck className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                            <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wide m-0">Verification Summary</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {'gst_verified' in verification && <VerificationPill label="GST" verified={!!verification.gst_verified} />}
                            {'pan_verified' in verification && <VerificationPill label="PAN" verified={!!verification.pan_verified} />}
                            {'aadhaar_verified' in verification && <VerificationPill label="Aadhaar" verified={!!verification.aadhaar_verified} />}
                            {'mca_verified' in verification && <VerificationPill label="MCA" verified={!!verification.mca_verified} />}
                            {'bank_account_verified' in verification && <VerificationPill label="Bank Account" verified={!!verification.bank_account_verified} />}
                        </div>
                    </div>
                )}

                {/* KYC Details */}
                {Object.keys(kyc).length > 0 && (
                    <div className="bg-white dark:bg-gray-800/60 rounded-xl p-5 border border-gray-200 dark:border-gray-700 mb-5">
                        <div className="flex items-center gap-2 mb-4">
                            <User className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                            <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wide m-0">KYC Details</h3>
                            <span className="text-[11px] text-gray-500 dark:text-gray-400 ml-auto">Sensitive data is masked</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {kyc.gst?.gstin && (
                                <KycRow
                                    label="GSTIN"
                                    value={maskGstin(kyc.gst.gstin)}
                                    verifiedAt={kyc.gst.verified_at}
                                    verified={kyc.gst.verified}
                                />
                            )}
                            {kyc.pan?.pan_number && (
                                <KycRow
                                    label="PAN Number"
                                    value={maskPan(kyc.pan.pan_number)}
                                    verifiedAt={kyc.pan.verified_at}
                                    verified={kyc.pan.verified}
                                />
                            )}
                            {kyc.aadhaar?.aadhaar_number && (
                                <KycRow
                                    label="Aadhaar Number"
                                    value={kyc.aadhaar.aadhaar_number}
                                    verifiedAt={kyc.aadhaar.verified_at}
                                    verified={kyc.aadhaar.verified}
                                />
                            )}
                            {kyc.mca?.cin_number && (
                                <KycRow
                                    label="CIN Number"
                                    value={maskCin(kyc.mca.cin_number)}
                                    verifiedAt={kyc.mca.verified_at}
                                    verified={kyc.mca.verified}
                                />
                            )}
                            {kyc.bank_account?.account_number && (
                                <KycRow
                                    label="Bank Account"
                                    value={`${kyc.bank_account.account_number}${kyc.bank_account.ifsc ? ` • ${kyc.bank_account.ifsc}` : ''}`}
                                    verifiedAt={kyc.bank_account.verified_at}
                                    verified={kyc.bank_account.verified}
                                />
                            )}
                        </div>

                        {/* GST extra details */}
                        {kyc.gst?.verified && kyc.gst?.details?.data?.data && (
                            <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-900/40 rounded-lg border border-gray-200 dark:border-gray-700">
                                <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-3 m-0">GST Registered Entity</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                                    {kyc.gst.details.data.data.lgnm && (
                                        <div>
                                            <p className="text-xs text-gray-500 dark:text-gray-400 m-0 mb-0.5">Legal Name</p>
                                            <p className="text-gray-900 dark:text-white m-0">{kyc.gst.details.data.data.lgnm}</p>
                                        </div>
                                    )}
                                    {kyc.gst.details.data.data.ctb && (
                                        <div>
                                            <p className="text-xs text-gray-500 dark:text-gray-400 m-0 mb-0.5">Constitution</p>
                                            <p className="text-gray-900 dark:text-white m-0">{kyc.gst.details.data.data.ctb}</p>
                                        </div>
                                    )}
                                    {kyc.gst.details.data.data.sts && (
                                        <div>
                                            <p className="text-xs text-gray-500 dark:text-gray-400 m-0 mb-0.5">Status</p>
                                            <p className="text-gray-900 dark:text-white m-0 capitalize">{kyc.gst.details.data.data.sts}</p>
                                        </div>
                                    )}
                                    {kyc.gst.details.data.data.rgdt && (
                                        <div>
                                            <p className="text-xs text-gray-500 dark:text-gray-400 m-0 mb-0.5">Registration Date</p>
                                            <p className="text-gray-900 dark:text-white m-0">{kyc.gst.details.data.data.rgdt}</p>
                                        </div>
                                    )}
                                    {kyc.gst.details.data.data.pradr?.addr?.stcd && (
                                        <div className="sm:col-span-2">
                                            <p className="text-xs text-gray-500 dark:text-gray-400 m-0 mb-0.5 flex items-center gap-1"><MapPin className="h-3 w-3" /> Registered Address</p>
                                            <p className="text-gray-900 dark:text-white m-0">
                                                {[
                                                    kyc.gst.details.data.data.pradr.addr.loc,
                                                    kyc.gst.details.data.data.pradr.addr.dst,
                                                    kyc.gst.details.data.data.pradr.addr.stcd,
                                                    kyc.gst.details.data.data.pradr.addr.pncd,
                                                ].filter(Boolean).join(', ')}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* Documents */}
                {/* {Object.keys(documents).length > 0 && (
                    <div className="bg-white dark:bg-gray-800/60 rounded-xl p-5 border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-2 mb-4">
                            <FileText className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                            <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wide m-0">Verified Documents</h3>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            <DocumentLink label="Certificate of Incorporation" url={documents.coi_url} />
                            <DocumentLink label="PAN Document" url={documents.pan_url} />
                            <DocumentLink label="Articles of Association" url={documents.aoa_url} />
                            <DocumentLink label="Memorandum of Association" url={documents.moa_url} />
                        </div>
                    </div>
                )} */}
            </div>
        </section>
    );
}
