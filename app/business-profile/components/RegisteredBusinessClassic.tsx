'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  CheckCircle,
  XCircle,
  Building2,
  Globe,
  Phone,
  Mail,
  Calendar,
  ShieldCheck,
  FileText,
  Fingerprint,
  CreditCard,
  Landmark,
  BadgeCheck,
  MapPin,
  Hash,
  Copy,
  Check,
  ChevronDown,
  Shield,
  ExternalLink,
  ZoomIn,
  ZoomOut,
  Sparkles,
  Star,
} from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ClassicProfileData {
  success: boolean;
  business_user_id: string;
  has_active_subscription?: boolean;
  business_info: {
    business_name: string;
    product_name: string;
    website: string;
    phone: string;
    email: string;
    business_info_verified: boolean;
    member_since: string;
  };
  verification_summary: {
    gst_verified: boolean;
    pan_verified: boolean;
    aadhaar_verified: boolean;
    mca_verified: boolean;
    bank_account_verified: boolean;
  };
  kyc_details: {
    gst: {
      verified: boolean;
      gstin: string;
      details: {
        data?: {
          data?: {
            ctb?: string;
            sts?: string;
            lgnm?: string;
            rgdt?: string;
            lstupdt?: string;
            nba?: string[];
            tradeNam?: string;
            stjCd?: string;
            pradr?: {
              addr?: {
                flno?: string; bnm?: string; bno?: string; st?: string;
                locality?: string; loc?: string; dst?: string; stcd?: string; pncd?: string;
              };
            };
          };
        };
      } | null;
      verified_at: string | null;
    };
    pan: {
      verified: boolean;
      pan_number: string;
      verified_at: string | null;
      details: {
        data?: {
          pan?: string; status?: string; category?: string; remarks?: string | null;
          name_as_per_pan_match?: boolean; date_of_birth_match?: boolean; aadhaar_seeding_status?: string;
        };
      } | null;
    };
    aadhaar: {
      verified: boolean;
      aadhaar_number: string;
      verified_at: string | null;
      details: {
        data?: {
          name?: string; gender?: string; date_of_birth?: string; year_of_birth?: number;
          care_of?: string; full_address?: string; status?: string;
          address?: {
            house?: string; vtc?: string; subdistrict?: string; district?: string;
            state?: string; country?: string; pincode?: number; post_office?: string;
            landmark?: string; street?: string;
          };
        };
      } | null;
    };
    mca: { verified: boolean; cin_number: string; details: unknown; verified_at: string | null };
    bank_account: {
      verified: boolean; account_number: string; ifsc: string; verified_at: string | null;
      details: { data?: { message?: string; name_at_bank?: string; account_exists?: boolean } } | null;
    };
  };
  documents: {
    coi_url: string | null; pan_url: string | null; aoa_url: string | null; moa_url: string | null;
  };
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function fmt(dateStr?: string | null): string {
  if (!dateStr) return '';
  try { return new Date(dateStr).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }); }
  catch { return dateStr; }
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function InlinePDFViewer({ url, label }: { url: string; label: string }) {
  const [expanded, setExpanded] = useState(true);
  const [zoom, setZoom] = useState(100);
  return (
    <div className="rounded-2xl border-2 border-gray-100 overflow-hidden bg-white shadow-sm">
      <div className="flex flex-col gap-3 bg-gray-50 border-b border-gray-100 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-5 sm:py-3.5">
        <div className="flex min-w-0 items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center flex-shrink-0">
            <FileText className="w-4 h-4 text-rose-500" />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-bold text-gray-800 truncate">{label}</p>
            <p className="text-xs text-gray-400">PDF · Verified Document</p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-2 sm:justify-end">
          {expanded && (
            <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-lg p-1">
              <button onClick={() => setZoom(z => Math.max(50, z - 25))} className="w-6 h-6 rounded flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-500">
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="text-xs font-mono text-gray-500 w-8 text-center select-none">{zoom}%</span>
              <button onClick={() => setZoom(z => Math.min(200, z + 25))} className="w-6 h-6 rounded flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-500">
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
          <button
            onClick={() => { setExpanded(e => !e); setZoom(100); }}
            className={`min-h-8 text-xs font-bold px-3 py-1.5 rounded-lg border transition-colors ${expanded ? 'border-gray-200 bg-white text-gray-500 hover:bg-gray-50' : 'border-indigo-200 bg-indigo-50 text-indigo-600 hover:bg-indigo-100'}`}
          >
            {expanded ? 'Collapse' : 'View'}
          </button>
        </div>
      </div>
      {expanded && (
        <div className="bg-slate-100 overflow-auto" style={{ maxHeight: '580px' }}>
          <div style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'top center', transition: 'transform 0.2s ease' }}>
            <iframe src={`${url}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`} className="block h-[360px] w-full min-w-full border-0 blur-md sm:h-[560px]" title={label} />
          </div>
        </div>
      )}
    </div>
  );
}

function KYCBadge({ verified, label, icon }: { verified: boolean; label: string; icon: React.ReactNode }) {
  return (
    <div className={`relative flex min-h-[104px] min-w-0 flex-col items-center justify-between gap-2 rounded-2xl border-2 px-2.5 py-3 transition-all sm:gap-3 sm:px-3 sm:py-4 ${verified ? 'border-emerald-200 bg-gradient-to-b from-emerald-50/60 to-white' : 'border-gray-100 bg-gray-50/40'}`}>
      <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${verified ? 'bg-emerald-100 text-emerald-600' : 'bg-gray-100 text-gray-300'}`}>{icon}</div>
      <span className={`text-xs font-bold text-center leading-tight ${verified ? 'text-gray-700' : 'text-gray-300'}`}>{label}</span>
      <div className={`absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center shadow-sm ${verified ? 'bg-emerald-500' : 'bg-gray-200'}`}>
        {verified ? <Check className="w-2.5 h-2.5 text-white" strokeWidth={3.5} /> : <XCircle className="w-3 h-3 text-gray-400" />}
      </div>
    </div>
  );
}

function InfoField({ label, value, mono = false, fullWidth = false }: { label: string; value?: string | null; mono?: boolean; fullWidth?: boolean }) {
  if (!value) return null;
  return (
    <div className={fullWidth ? 'col-span-full min-w-0' : 'min-w-0'}>
      <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest mb-1">{label}</p>
      <p className={`text-sm font-semibold text-gray-800 break-words [overflow-wrap:anywhere] ${mono ? 'font-mono' : ''}`}>{value}</p>
    </div>
  );
}

function MatchPill({ label, matched }: { label: string; matched: boolean }) {
  return (
    <span className={`inline-flex min-w-0 items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-bold ${matched ? 'border-emerald-200 bg-emerald-50 text-emerald-700' : 'border-red-100 bg-red-50 text-red-600'}`}>
      {matched ? <CheckCircle className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
      {label}
    </span>
  );
}

function KYCSection({ icon, title, verified, verifiedAt, children }: { icon: React.ReactNode; title: string; verified: boolean; verifiedAt?: string | null; children?: React.ReactNode }) {
  const [open, setOpen] = useState(verified);
  return (
    <div className={`rounded-2xl border-2 overflow-hidden transition-all ${verified ? 'border-emerald-100 bg-white' : 'border-gray-100 bg-white'}`}>
      <button onClick={() => children && setOpen(o => !o)} className={`w-full flex items-start justify-between gap-3 px-4 py-4 text-left transition-colors sm:items-center sm:px-6 ${children ? 'hover:bg-gray-50/60' : 'cursor-default'}`}>
        <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
          <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm ${verified ? 'bg-gradient-to-br from-emerald-400 to-teal-500 text-white shadow-emerald-100' : 'bg-gray-100 text-gray-300'}`}>{icon}</div>
          <div className="min-w-0 text-left">
            <p className="text-sm font-bold text-gray-900 break-words">{title}</p>
            <p className="text-xs mt-0.5 font-medium text-gray-400">{verified && verifiedAt ? `Verified · ${fmt(verifiedAt)}` : 'Pending verification'}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          {verified
            ? <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full"><CheckCircle className="w-3 h-3" /> Verified</span>
            : <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-gray-400 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-full"><XCircle className="w-3 h-3" /> Not Verified</span>}
          {children && <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />}
        </div>
      </button>
      {open && children && (
        <div className="px-4 pb-5 pt-1 border-t border-gray-100 sm:px-6 sm:pb-6"><div className="pt-5">{children}</div></div>
      )}
    </div>
  );
}

function TrustArc({ score, total }: { score: number; total: number }) {
  const pct = total === 0 ? 0 : score / total;
  const r = 42, cx = 56, cy = 56, startDeg = -210, sweepDeg = 240;
  const toRad = (d: number) => (d * Math.PI) / 180;
  function arc(startD: number, sweepD: number, radius: number) {
    const s = toRad(startD), e = toRad(startD + sweepD);
    const x1 = cx + radius * Math.cos(s), y1 = cy + radius * Math.sin(s);
    const x2 = cx + radius * Math.cos(e), y2 = cy + radius * Math.sin(e);
    return `M${x1} ${y1} A${radius} ${radius} 0 ${sweepD > 180 ? 1 : 0} 1 ${x2} ${y2}`;
  }
  const filled = sweepDeg * pct;
  const color = pct >= 0.8 ? '#10b981' : pct >= 0.6 ? '#f59e0b' : '#ef4444';
  const label = pct >= 0.8 ? 'High Trust' : pct >= 0.6 ? 'Moderate' : 'Low Trust';
  return (
    <div className="flex flex-col items-center gap-1">
      <svg className="h-[82px] w-[102px] sm:h-[90px] sm:w-[112px]" viewBox="0 0 112 90">
        <path d={arc(startDeg, sweepDeg, r)} fill="none" stroke="#f1f5f9" strokeWidth="8" strokeLinecap="round" />
        {pct > 0 && <path d={arc(startDeg, filled, r)} fill="none" stroke={color} strokeWidth="8" strokeLinecap="round" />}
        <text x={cx} y={cy - 5} textAnchor="middle" fill={color} fontSize="18" fontWeight="800">{score}/{total}</text>
        <text x={cx} y={cy + 12} textAnchor="middle" fill="#9ca3af" fontSize="9.5" fontWeight="700" letterSpacing="0.3">{label}</text>
      </svg>
      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">KYC Score</p>
    </div>
  );
}

function CopyLinkBtn({ url }: { url: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(url); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
      className={`inline-flex w-full flex-shrink-0 items-center justify-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-bold transition-all sm:w-auto ${copied ? 'bg-emerald-50 border-emerald-200 text-emerald-600' : 'bg-white border-gray-200 text-gray-600 hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50'}`}
    >
      {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
      {copied ? 'Copied!' : 'Copy Link'}
    </button>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function RegisteredBusinessClassic({ data }: { data: ClassicProfileData }) {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const { business_info, verification_summary, kyc_details, documents } = data;
  const verifiedCount = Object.values(verification_summary).filter(Boolean).length;
  const totalChecks = Object.values(verification_summary).length;

  const gstAddr = (kyc_details.gst.details as { data?: { data?: { pradr?: { addr?: Record<string, string> } } } } | null)?.data?.data?.pradr?.addr;
  const gstAddressStr = gstAddr ? [gstAddr.flno, gstAddr.bnm, gstAddr.bno, gstAddr.st, gstAddr.locality, gstAddr.loc, gstAddr.dst, gstAddr.stcd, gstAddr.pncd].filter(Boolean).join(', ') : '';
  const gstData = (kyc_details.gst.details as { data?: { data?: Record<string, unknown> } } | null)?.data?.data as Record<string, unknown> | undefined;

  const ad = (kyc_details.aadhaar.details as { data?: Record<string, unknown> } | null)?.data as Record<string, unknown> | undefined;
  const adAddress = ad?.address as Record<string, unknown> | undefined;
  const aadhaarAddress = adAddress
    ? [adAddress.house, adAddress.vtc, adAddress.post_office, adAddress.subdistrict, adAddress.district, adAddress.state, adAddress.country, adAddress.pincode?.toString()].filter(Boolean).join(', ')
    : (ad?.full_address as string ?? '');

  const panDetails = (kyc_details.pan.details as { data?: Record<string, unknown> } | null)?.data;
  const bankDetails = (kyc_details.bank_account.details as { data?: Record<string, unknown> } | null)?.data;

  const docList = [
    { label: 'Certificate of Incorporation', url: documents.coi_url },
    { label: 'PAN Card', url: documents.pan_url },
    { label: 'Articles of Association (AOA)', url: documents.aoa_url },
    { label: 'Memorandum of Association (MOA)', url: documents.moa_url },
  ].filter(d => d.url);

  return (
    <div className="min-h-screen bg-[#f4f6fb]">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-[0_1px_0_0_rgba(0,0,0,0.04)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center shadow-md shadow-indigo-200">
              <Shield className="w-[18px] h-[18px] text-white" />
            </div>
            <span className="text-base font-extrabold text-gray-900 tracking-tight">RakshaAI</span>
          </Link>
          <div className="flex items-center gap-1.5 text-xs text-gray-400 font-semibold">
            <BadgeCheck className="w-3.5 h-3.5 text-indigo-400" />
            <span className="hidden sm:inline">Verified Business Profile</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto space-y-4 px-3 py-4 sm:space-y-5 sm:px-8 sm:py-8">

        {/* ── HERO CARD ─────────────────────────────────────────────────────── */}
        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm sm:rounded-3xl">
          <div className="relative h-48 overflow-hidden bg-gradient-to-br from-indigo-700 via-violet-600 to-fuchsia-600 sm:h-56">
            <svg className="absolute inset-0 w-full h-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
              <defs><pattern id="grid-classic" width="32" height="32" patternUnits="userSpaceOnUse"><path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="0.8"/></pattern></defs>
              <rect width="100%" height="100%" fill="url(#grid-classic)" />
            </svg>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_50%,rgba(255,255,255,0.22),transparent_55%)]" />
            <div className="absolute -top-16 -left-12 w-56 h-56 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-10 right-12 w-44 h-44 rounded-full bg-fuchsia-300/25 blur-3xl" />
            <Sparkles className="absolute top-6 right-28 w-4 h-4 text-white/40" />
            <Sparkles className="absolute top-16 left-1/2 w-3 h-3 text-white/30" />
            <Sparkles className="absolute bottom-10 left-1/3 w-3.5 h-3.5 text-white/35" />

            {business_info.business_info_verified && (() => {
              const tier = verifiedCount >= 5 ? 'Platinum Tier' : verifiedCount >= 4 ? 'Gold Tier' : verifiedCount >= 3 ? 'Silver Tier' : 'Verified';
              const sealClass = verifiedCount >= 5 ? 'bg-gradient-to-br from-slate-100 to-slate-300 ring-2 ring-white/60' : verifiedCount >= 4 ? 'bg-gradient-to-br from-amber-200 to-amber-400 ring-2 ring-amber-100/70' : verifiedCount >= 3 ? 'bg-gradient-to-br from-zinc-200 to-zinc-400 ring-2 ring-white/60' : 'bg-gradient-to-br from-white/35 to-white/15 ring-2 ring-white/40';
              const sealIconClass = verifiedCount >= 4 ? 'text-indigo-700' : 'text-white drop-shadow';
              return (
                <>
                  <div className="absolute top-3 right-3 z-10 sm:top-5 sm:right-6">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold text-white bg-white/15 border border-white/30 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm">
                      <CheckCircle className="w-3.5 h-3.5" />{verifiedCount}/{totalChecks} Verified
                    </span>
                  </div>
                  <div className="relative flex h-full items-end px-4 pb-6 pt-14 sm:items-center sm:px-8 sm:pb-10 sm:pt-0">
                    <div className="flex min-w-0 items-center gap-3 sm:gap-5">
                      <div className="relative flex-shrink-0">
                        <div className="absolute inset-0 rounded-3xl bg-white/15 blur-md scale-110" />
                        <div className={`relative flex h-14 w-14 items-center justify-center rounded-2xl shadow-[0_10px_32px_rgba(0,0,0,0.25)] sm:h-[72px] sm:w-[72px] ${sealClass}`}>
                          <BadgeCheck className={`h-8 w-8 sm:h-11 sm:w-11 ${sealIconClass}`} strokeWidth={2.5} />
                        </div>
                        <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-white flex items-center justify-center shadow-md">
                          <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                        </div>
                      </div>
                      <div className="text-white min-w-0">
                        <p className="mb-1 text-[10px] font-black uppercase tracking-[0.18em] text-white/70 sm:text-[11px] sm:tracking-[0.2em]">{tier}</p>
                        <p className="text-[1.6rem] font-black leading-none tracking-tight drop-shadow-sm sm:text-3xl">RakshaAI Verified</p>
                        <p className="hidden sm:block text-xs font-semibold text-white/80 mt-2">Identity &amp; KYC checks completed by RakshaAI</p>
                        <div className="flex items-center gap-1.5 mt-3">
                          {Array.from({ length: totalChecks }).map((_, i) => (
                            <div key={i} className={`rounded-full transition-all ${i < verifiedCount ? 'w-6 h-1.5 bg-white/85' : 'w-1.5 h-1.5 bg-white/25'}`} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })()}
          </div>

          <div className="px-4 pb-6 pt-5 sm:px-8 sm:pb-8 sm:pt-6">

            <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0 flex-1">
                <h1 className="break-words text-[1.7rem] font-extrabold leading-tight tracking-tight text-gray-900 sm:text-3xl">{business_info.business_name}</h1>
                {business_info.product_name && <p className="text-sm sm:text-base font-bold text-indigo-500 mt-1">{business_info.product_name}</p>}
                <div className="mt-2">
                  <span className="inline-flex max-w-full items-center gap-1.5 rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-1 font-mono text-xs text-gray-400">
                    <Hash className="h-3 w-3 flex-shrink-0" /><span className="truncate">{data.business_user_id}</span>
                  </span>
                </div>

                {/* Trust Score/Records Checked/DB Chip row (from new card) */}
                <div className="mt-4 flex flex-wrap items-stretch gap-2 sm:items-center sm:gap-3">
                  <span className="inline-flex w-full min-w-0 items-center gap-2 rounded-lg border border-violet-200 bg-violet-50 px-3 py-1.5 text-xs font-bold text-violet-700 sm:w-auto">
                    <ShieldCheck className="h-4 w-4 flex-shrink-0 text-violet-500" />
                    Trust Score · {verifiedCount}/{totalChecks || 5} High
                  </span>
                  <span className="inline-flex w-full min-w-0 items-center gap-2 rounded-lg border border-orange-200 bg-orange-50 px-3 py-1.5 text-xs font-bold text-orange-700 sm:w-auto">
                    <CheckCircle className="h-4 w-4 flex-shrink-0 text-orange-500" />
                    Govt. Records Checked · Trusted
                  </span>
                  <span className="inline-flex w-full min-w-0 items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-semibold text-gray-600 sm:w-auto">
                    MCA21 · GSTN · UIDAI · NSDL
                  </span>
                </div>
              </div>
              <div className="flex w-full flex-shrink-0 justify-center rounded-2xl border border-gray-100 bg-gray-50/60 py-3 sm:w-auto sm:border-0 sm:bg-transparent sm:py-0"><TrustArc score={verifiedCount} total={totalChecks} /></div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {business_info.website && (
                <a href={business_info.website} target="_blank" rel="noopener noreferrer" className="inline-flex max-w-full min-w-0 items-center gap-1.5 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-xs font-bold text-indigo-600 transition-colors hover:bg-indigo-100">
                  <Globe className="h-3.5 w-3.5 flex-shrink-0" /><span className="min-w-0 truncate">{business_info.website.replace(/https?:\/\//, '').replace(/\/$/, '')}</span><ExternalLink className="h-3 w-3 flex-shrink-0 opacity-50" />
                </a>
              )}
              {business_info.phone && <span className="inline-flex max-w-full min-w-0 items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-gray-600"><Phone className="h-3.5 w-3.5 flex-shrink-0 text-gray-400" /><span className="truncate">{business_info.phone}</span></span>}
              {business_info.email && <span className="inline-flex max-w-full min-w-0 items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-gray-600"><Mail className="h-3.5 w-3.5 flex-shrink-0 text-gray-400" /><span className="min-w-0 truncate">{business_info.email}</span></span>}
              {business_info.member_since && <span className="inline-flex max-w-full min-w-0 items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-gray-500"><Calendar className="h-3.5 w-3.5 flex-shrink-0 text-gray-400" /><span className="truncate">Member since {fmt(business_info.member_since)}</span></span>}
            </div>

            <div className="mt-5 flex flex-col gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 sm:flex-row sm:items-center">
              <span className="min-w-0 flex-1 truncate font-mono text-xs text-gray-400">{shareUrl}</span>
              <CopyLinkBtn url={shareUrl} />
            </div>
          </div>
        </div>

        {/* ── KYC SUMMARY ──────────────────────────────────────────────────── */}
        <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:rounded-3xl sm:p-7">
          <div className="mb-1 flex items-start justify-between gap-4 sm:items-center">
            <div className="min-w-0">
              <h2 className="text-base font-extrabold text-gray-900 flex items-center gap-2"><ShieldCheck className="w-[18px] h-[18px] text-indigo-500" />KYC Verification</h2>
              <p className="text-xs text-gray-400 mt-0.5 font-medium">Government-backed identity checks</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-extrabold text-gray-900 leading-none">{verifiedCount}<span className="text-base font-bold text-gray-300">/{totalChecks}</span></p>
              <p className="text-xs text-gray-400 mt-0.5">verified</p>
            </div>
          </div>
          <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden my-5">
            <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-indigo-500 via-violet-500 to-emerald-400 rounded-full transition-all duration-1000 ease-out" style={{ width: `${(verifiedCount / totalChecks) * 100}%` }} />
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
            {[
              { key: 'gst', label: 'GST', icon: <FileText className="w-4 h-4" />, v: verification_summary.gst_verified },
              { key: 'pan', label: 'PAN', icon: <CreditCard className="w-4 h-4" />, v: verification_summary.pan_verified },
              { key: 'aadhaar', label: 'Aadhaar', icon: <Fingerprint className="w-4 h-4" />, v: verification_summary.aadhaar_verified },
              { key: 'mca', label: 'MCA', icon: <Building2 className="w-4 h-4" />, v: verification_summary.mca_verified },
              { key: 'bank', label: 'Bank', icon: <Landmark className="w-4 h-4" />, v: verification_summary.bank_account_verified },
            ].map(({ key, label, icon, v }) => (
              <div key={key} className="min-w-0 last:col-span-2 sm:last:col-span-1"><KYCBadge verified={v} label={label} icon={icon} /></div>
            ))}
          </div>
        </div>

        {/* ── KYC DETAILS ──────────────────────────────────────────────────── */}
        <div className="space-y-3">
          <p className="px-1 pt-1 text-xs font-extrabold uppercase leading-snug tracking-[0.16em] text-gray-400 sm:text-[15px] sm:tracking-widest">Government database sources</p>
          <p className="px-1 pt-1 text-[10px] font-extrabold uppercase leading-relaxed tracking-[0.14em] text-gray-400 sm:tracking-widest">All data sourced from official Govt. of India databases  not self-declared</p>

          <KYCSection icon={<FileText className="w-5 h-5" />} title="GST Verification" verified={kyc_details.gst.verified} verifiedAt={kyc_details.gst.verified_at}>
            <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
              <InfoField label="GSTIN" value={kyc_details.gst.gstin} mono />
              <InfoField label="Business Name" value={gstData?.lgnm as string} />
              <InfoField label="Trade Name" value={gstData?.tradeNam as string} />
              <InfoField label="Status" value={gstData?.sts as string} />
              <InfoField label="Business Type" value={gstData?.ctb as string} />
              <InfoField label="Registration Date" value={gstData?.rgdt as string} />
              <InfoField label="Last Updated" value={gstData?.lstupdt as string} />
              <InfoField label="Nature of Business" value={(gstData?.nba as string[] | undefined)?.join(', ')} />
              <InfoField label="State Code" value={gstData?.stjCd as string} mono />
              {gstAddressStr && (
                <div className="col-span-full">
                  <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest mb-1 flex items-center gap-1"><MapPin className="w-3 h-3" /> Registered Address</p>
                  <p className="text-sm font-semibold text-gray-800 break-words [overflow-wrap:anywhere]">{gstAddressStr}</p>
                </div>
              )}
            </div>
          </KYCSection>

          <KYCSection icon={<CreditCard className="w-5 h-5" />} title="PAN Verification" verified={kyc_details.pan.verified} verifiedAt={kyc_details.pan.verified_at}>
            <div className="mb-4 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
              <InfoField label="PAN Number" value={kyc_details.pan.pan_number} mono />
              <InfoField label="Status" value={(panDetails?.status as string)?.toUpperCase()} />
              <InfoField label="Category" value={panDetails?.category as string} />
            </div>
            <div className="flex flex-wrap gap-2">
              {panDetails?.name_as_per_pan_match !== undefined && <MatchPill label="Name Match" matched={!!panDetails.name_as_per_pan_match} />}
              {panDetails?.date_of_birth_match !== undefined && <MatchPill label="Date of Birth Match" matched={!!panDetails.date_of_birth_match} />}
              {panDetails?.aadhaar_seeding_status !== undefined && <MatchPill label="Aadhaar Linked" matched={panDetails.aadhaar_seeding_status === 'y'} />}
            </div>
          </KYCSection>

          <KYCSection icon={<Fingerprint className="w-5 h-5" />} title="Aadhaar KYC" verified={kyc_details.aadhaar.verified} verifiedAt={kyc_details.aadhaar.verified_at}>
            <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
              <InfoField label="Aadhaar (masked)" value={kyc_details.aadhaar.aadhaar_number} mono />
              <InfoField label="Full Name" value={ad?.name as string} />
              <InfoField label="Gender" value={ad?.gender === 'M' ? 'Male' : ad?.gender === 'F' ? 'Female' : ad?.gender as string} />
              <InfoField label="Date of Birth" value={ad?.date_of_birth as string} />
              <InfoField label="Care Of" value={ad?.care_of as string} />
              <InfoField label="Status" value={ad?.status as string} />
              {aadhaarAddress && (
                <div className="col-span-full">
                  <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest mb-1 flex items-center gap-1"><MapPin className="w-3 h-3" /> Address</p>
                  <p className="text-sm font-semibold text-gray-800 break-words [overflow-wrap:anywhere]">{aadhaarAddress}</p>
                </div>
              )}
            </div>
          </KYCSection>

          <KYCSection icon={<Building2 className="w-5 h-5" />} title="MCA / Company Registration" verified={kyc_details.mca.verified} verifiedAt={kyc_details.mca.verified_at}>
            {kyc_details.mca.verified && (
              <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
                <InfoField label="CIN Number" value={kyc_details.mca.cin_number} mono />
              </div>
            )}
          </KYCSection>

          <KYCSection icon={<Landmark className="w-5 h-5" />} title="Bank Account Verification" verified={kyc_details.bank_account.verified} verifiedAt={kyc_details.bank_account.verified_at}>
            <div className="mb-4 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
              <InfoField label="Account Number" value={kyc_details.bank_account.account_number} mono />
              <InfoField label="IFSC Code" value={kyc_details.bank_account.ifsc} mono />
              <InfoField label="Name at Bank" value={bankDetails?.name_at_bank as string} />
            </div>
            {bankDetails?.account_exists !== undefined && <MatchPill label="Account Verified" matched={!!bankDetails.account_exists} />}
          </KYCSection>
        </div>

        <div className="mb-2 flex flex-col gap-3 rounded-2xl border border-violet-200 bg-violet-50 px-4 py-4 sm:flex-row sm:items-center sm:gap-4 sm:px-5">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#a78bfa" className="flex-shrink-0">
              <path d="M13 2.05v2.02c3.95.49 7 3.85 7 7.93 0 3.21-1.81 6-4.72 7.28L13 17v5h5l-1.22-1.22C19.91 19.07 22 15.76 22 12c0-5.18-3.95-9.45-9-9.95zM11 2.05C5.95 2.55 2 6.82 2 12c0 3.76 2.09 7.07 5.22 8.78L6 22h5v-5l-2.28 2.28C7.81 18 6 15.21 6 12c0-4.08 3.05-7.44 7-7.93V2.05z" />
            </svg>
            <div className="min-w-0 flex-1">
              <div className="mb-1 text-[13px] font-bold leading-snug text-violet-950">RakshaVerified by RakshaAI · Sourced from MCA21, GSTN, UIDAI & NSDL databases</div>
              <div className="text-[11px] leading-relaxed text-violet-700 opacity-80">RakshaAI queries official government APIs in real-time. Data is not submitted by the business.</div>
            </div>
            <div className="flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-emerald-700">Live</span>
            </div>
        </div>

        {/* ── DOCUMENTS ────────────────────────────────────────────────────── */}
        {docList.length > 0 && (
          <div className="space-y-3 relative">
            <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest px-1 pt-1">Business Documents</p>
            <div className="space-y-3">
              {docList.map(doc => (
                <div className="filter select-none" key={doc.label}>
                  <InlinePDFViewer url={doc.url!} label={doc.label} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── FOOTER ───────────────────────────────────────────────────────── */}
        <div className="flex flex-col items-center gap-2.5 py-10 text-center">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center shadow-md shadow-indigo-200 group-hover:scale-105 transition-transform">
              <Shield className="w-[18px] h-[18px] text-white" />
            </div>
            <span className="text-sm font-extrabold text-gray-600 group-hover:text-indigo-600 transition-colors">RakshaAI</span>
          </Link>
          <p className="text-xs text-gray-400 max-w-xs">
            RakshaVerified by <a href="https://rakshaai.co" className="text-indigo-400 hover:text-indigo-600 transition-colors font-semibold">rakshaai.co</a> · Sourced from MCA21, GSTN, UIDAI & NSDL databases
          </p>
        </div>
      </main>
    </div>
  );
}
