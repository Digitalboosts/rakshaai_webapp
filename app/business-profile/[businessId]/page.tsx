'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { AlertTriangle, Loader2, Shield, Lock } from 'lucide-react';
import RegisteredBusinessClassic, { ClassicProfileData } from '../components/RegisteredBusinessClassic';

// ─── Types ───────────────────────────────────────────────────────────────────

interface PublicProfileResponse {
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
    gst: { verified: boolean; gstin: string; details: unknown; verified_at: string | null };
    pan: { verified: boolean; pan_number: string; verified_at: string | null; details: unknown };
    aadhaar: { verified: boolean; aadhaar_number: string; verified_at: string | null; details: unknown };
    mca: { verified: boolean; cin_number: string; details: unknown; verified_at: string | null };
    bank_account: { verified: boolean; account_number: string; ifsc: string; verified_at: string | null; details: unknown };
  };
  documents: {
    coi_url: string | null;
    pan_url: string | null;
    aoa_url: string | null;
    moa_url: string | null;
  };
}

const DUMMY_HAS_ACTIVE_SUBSCRIPTION = true;
const SUBSCRIPTION_EXPIRED_ERROR =
  'Your subscription has expired. Please renew your plan to share your business profile.';

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BusinessPublicProfilePage() {
  const { businessId } = useParams<{ businessId: string }>();
  const [data, setData] = useState<PublicProfileResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [subscriptionActive, setSubscriptionActive] = useState(DUMMY_HAS_ACTIVE_SUBSCRIPTION);

  useEffect(() => {
    if (!businessId) return;
    (async () => {
      try {
        const res = await fetch(`/api/business/public-profile?business_id=${encodeURIComponent(businessId)}`);
        const json = await res.json();
        if (!res.ok || !json.success) {
          const nextError = json.error || 'Business profile not found.';
          setError(nextError);
          setData(null);
          setSubscriptionActive(nextError !== SUBSCRIPTION_EXPIRED_ERROR);
        } else {
          setError(null);
          setData(json);
          setSubscriptionActive(true);
        }
      } catch {
        setError('Failed to load profile. Please try again.');
        setSubscriptionActive(DUMMY_HAS_ACTIVE_SUBSCRIPTION);
      } finally {
        setLoading(false);
      }
    })();
  }, [businessId]);

  const isSubscriptionExpired = error === SUBSCRIPTION_EXPIRED_ERROR;

  // ── Loading ──────────────────────────────────────────────────────────────────
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center gap-5">
        <div className="relative">
          <div className="w-16 h-16 rounded-2xl bg-indigo-600 flex items-center justify-center shadow-xl shadow-indigo-200">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center">
            <Loader2 className="w-3.5 h-3.5 text-indigo-500 animate-spin" />
          </div>
        </div>
        <div className="text-center">
          <p className="text-gray-700 font-bold text-sm">Fetching Business Profile</p>
          <p className="text-gray-400 text-xs mt-1">Verifying identity data…</p>
        </div>
      </div>
    );
  }

  // ── Subscription expired (no data at all) ────────────────────────────────────
  if (isSubscriptionExpired && !data) {
    return (
      <div className="min-h-screen bg-[#f4f6fb] flex items-center justify-center px-4 py-6">
        <div className="max-w-md w-full overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-2xl sm:rounded-3xl">
          <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 px-6 py-7 text-center text-white sm:px-8">
            <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-8 right-0 w-32 h-32 rounded-full bg-fuchsia-300/20 blur-2xl" />
            <div className="relative z-10">
              <div className="w-14 h-14 mx-auto bg-white/20 border border-white/30 rounded-2xl flex items-center justify-center mb-4 backdrop-blur-md">
                <Lock className="w-7 h-7 text-white" />
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/70 mb-1">Profile Locked</p>
              <h2 className="text-2xl font-extrabold leading-tight">Subscription required</h2>
            </div>
          </div>
          <div className="p-5 text-center sm:p-7">
            <p className="text-sm text-gray-500 leading-relaxed mb-5">{SUBSCRIPTION_EXPIRED_ERROR}</p>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold px-6 py-3 rounded-xl transition-colors shadow-lg shadow-indigo-200"
            >
              <Shield className="w-4 h-4" /> Visit RakshaAI
            </Link>
            <p className="text-[11px] text-gray-400 mt-4">
              If this is your business,{' '}
              <Link href="/business-dashboard" className="text-indigo-500 font-semibold hover:underline">
                renew from your dashboard
              </Link>{' '}
              to publish this profile again.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // ── Generic error ────────────────────────────────────────────────────────────
  if (error || !data) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-6">
        <div className="max-w-md w-full rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-xl sm:rounded-3xl sm:p-10">
          <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-5">
            <AlertTriangle className="w-8 h-8 text-red-400" />
          </div>
          <h2 className="text-xl font-extrabold text-gray-900 mb-2">Profile Not Found</h2>
          <p className="text-gray-400 text-sm mb-7">
            {error || 'This business profile does not exist or has been removed.'}
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white text-sm font-bold px-6 py-3 rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
          >
            <Shield className="w-4 h-4" /> Go to RakshaAI
          </Link>
        </div>
      </div>
    );
  }

  const hasActiveSubscription = data.has_active_subscription ?? subscriptionActive;

  return (
    <div className="min-h-screen bg-[#f4f6fb] relative">
      {/* Subscription lock overlay */}
      {!hasActiveSubscription && (
        <div className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-slate-900/30 px-4 py-6 backdrop-blur-sm sm:items-center">
          <div className="max-w-md w-full overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-2xl sm:rounded-3xl">
            <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 px-6 py-7 text-center text-white sm:px-8">
              <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
              <div className="absolute -bottom-8 right-0 w-32 h-32 rounded-full bg-fuchsia-300/20 blur-2xl" />
              <div className="relative z-10">
                <div className="w-14 h-14 mx-auto bg-white/20 border border-white/30 rounded-2xl flex items-center justify-center mb-4 backdrop-blur-md">
                  <Lock className="w-7 h-7 text-white" />
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/70 mb-1">Profile Locked</p>
                <h2 className="text-2xl font-extrabold leading-tight">Subscription required</h2>
              </div>
            </div>
            <div className="p-5 text-center sm:p-7">
              <p className="text-sm text-gray-500 leading-relaxed mb-5">
                This business does not have an active RakshaAI subscription, so the verified profile is not publicly
                visible. Once the business activates a plan, the profile becomes available.
              </p>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold px-6 py-3 rounded-xl transition-colors shadow-lg shadow-indigo-200"
              >
                <Shield className="w-4 h-4" /> Visit RakshaAI
              </Link>
              <p className="text-[11px] text-gray-400 mt-4">
                If this is your business,{' '}
                <Link href="/business-dashboard" className="text-indigo-500 font-semibold hover:underline">
                  subscribe from your dashboard
                </Link>{' '}
                to publish this profile.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ── Design Comparison for Manager Review ───────────────────────────── */}
      <div
        className={!hasActiveSubscription ? 'pointer-events-none select-none blur-md filter' : ''}
        aria-hidden={!hasActiveSubscription}
      >
        <div>
          <RegisteredBusinessClassic data={data as unknown as ClassicProfileData} />
        </div>
        {/* <div className="py-10 bg-[#f4f6fb]">
          <RegisteredBusiness data={data as unknown as RegisteredBusinessData} />
        </div> */}
      </div>
    </div>
  );
}
