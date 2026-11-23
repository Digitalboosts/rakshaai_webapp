'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  Shield,
  CheckCircle,
  Upload,
  X,
  ArrowRight,
  Loader2,
  Building2,
  Globe,
  Phone,
  Mail,
  Award,
  FileText,
  CreditCard,
  Fingerprint,
  Clock,
  ChevronRight,
  Lock,
  Star,
  AlertCircle,
  RefreshCw,
  Sparkles,
  BadgeCheck,
  TrendingUp,
  Users,
  Zap,
  ShieldCheck,
  Crown,
  LogOut,
  User,
  LayoutDashboard,
} from 'lucide-react';
import CountryPhoneInput from '@/components/CountryPhoneInput';
import { isValidPhoneNumber } from 'react-phone-number-input';

interface BusinessApplication {
  id: string;
  step: number;
  status: 'pending' | 'awaiting_review' | 'approved' | 'rejected';
  businessName: string;
  businessUrl: string;
  phoneNumber: string;
  submittedAt: string;
  products?: string[];
  email?: string;
  phoneVerified?: boolean;
  emailVerified?: boolean;
  gstNumber?: string;
  gstVerified?: boolean;
  aadhaarNumber?: string;
  aadhaarVerified?: boolean;
  documents?: { name: string; size: string }[];
  docsVerified?: boolean;
  trustScore?: number;
  subscriptionPaid?: boolean;
  subscriptionId?: string;
}

type BillingCycle = 'monthly' | 'quarterly' | 'annually';

type RazorpayCheckoutResponse = {
  razorpay_payment_id: string;
  razorpay_subscription_id: string;
  razorpay_signature: string;
};

type RazorpayOptions = {
  key?: string;
  subscription_id: string;
  name: string;
  description: string;
  image: string;
  handler: (response: RazorpayCheckoutResponse) => void | Promise<void>;
  prefill: { name: string; email: string; contact: string };
  theme: { color: string };
  modal: { ondismiss: () => void };
  notes: { businessName: string; applicationId: string };
};

type RazorpayWindow = Window & {
  Razorpay?: new (options: RazorpayOptions) => { open: () => void };
};

const normalizeBillingCycle = (cycle?: string | null): BillingCycle | null => {
  if (cycle === 'monthly') return 'monthly';
  if (cycle === 'quarterly') return 'quarterly';
  if (cycle === 'annually' || cycle === 'annual' || cycle === 'yearly') return 'annually';
  return null;
};

const STEPS = [
  { num: 1, label: 'Business Info', icon: Building2, desc: 'Basic business details' },
  { num: 2, label: 'Subscribe', icon: Crown, desc: 'Choose your verification plan' },
  { num: 3, label: 'GST Verification', icon: CreditCard, desc: 'Verify GST registration' },
  { num: 4, label: 'Aadhaar KYC', icon: Fingerprint, desc: 'Identity verification via OTP' },
  { num: 5, label: 'Documents', icon: FileText, desc: 'Upload supporting docs' },
  { num: 6, label: 'Verified', icon: Award, desc: 'Verification complete' },
];

function OTPInput({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const slots = 6;
  const refs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (idx: number, char: string) => {
    if (!/^\d*$/.test(char)) return;
    const arr = value.padEnd(slots, ' ').split('');
    arr[idx] = char || ' ';
    const next = arr.join('').replace(/ /g, '');
    onChange(next);
    if (char && idx < slots - 1) refs.current[idx + 1]?.focus();
  };

  const handleKeyDown = (idx: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace') {
      const arr = value.padEnd(slots, ' ').split('');
      if (!arr[idx].trim() && idx > 0) {
        refs.current[idx - 1]?.focus();
      } else {
        arr[idx] = ' ';
        onChange(arr.join('').replace(/ /g, ''));
      }
    }
  };

  return (
    <div className="flex gap-2 sm:gap-3">
      {Array.from({ length: slots }, (_, idx) => (
        <input
          key={idx}
          ref={(el) => { refs.current[idx] = el; }}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={value[idx] || ''}
          onChange={(e) => handleChange(idx, e.target.value)}
          onKeyDown={(e) => handleKeyDown(idx, e)}
          className="text-center text-xl font-bold border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50 dark:focus:ring-indigo-900 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-all duration-150 flex-shrink-0"
          style={{ width: '40px', height: '40px' }}
        />
      ))}
    </div>
  );
}

interface BusinessProfile {
  id?: number;
  business_user_id?: string;
  email?: string;
  website?: string;
  created_at?: string;
  business_name?: string;
  phone?: string;
}

function OnboardingNavbar() {
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [profile, setProfile] = useState<BusinessProfile | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Cookie is HttpOnly  browser sends it automatically, no JS access needed
    fetch('/api/business-auth/profile')
      .then((r) => r.json())
      .then((data) => { if (data.business) setProfile(data.business); })
      .catch(() => { });
  }, []);

  useEffect(() => {
    function handle(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setOpen(false);
    }
    if (open) document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, [open]);

  const handleLogout = async () => {
    await fetch('/api/business-auth/logout', { method: 'POST' }).catch(() => { });
    router.replace('/');
  };

  const displayName = profile?.email || profile?.business_user_id || 'Business';
  const initials = (profile?.email ?? '').slice(0, 2).toUpperCase() || 'B';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9">
            <Image src="/rakshaai-logo.svg" alt="RakshaAI" width={36} height={36} className="object-contain" priority />
          </div>
          <div className="leading-tight">
            <span className="block text-lg font-bold text-gray-900 dark:text-gray-100">RakshaAI</span>
            <span className="block text-[10px] font-semibold tracking-wide" style={{ color: '#FF6600' }}>SAFER INDIA</span>
          </div>
        </Link>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-3 py-1.5 rounded-full">
            <Lock className="w-3.5 h-3.5 text-green-600" />
            <span>Secure &amp; Encrypted</span>
          </div>

          <Link href="/" className="hidden sm:block text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            ← Back to Home
          </Link>

          <Link
            href="/business-dashboard"
            className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-indigo-700 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-700 hover:bg-indigo-100 dark:hover:bg-indigo-950 px-3 py-2 rounded-lg transition-colors"
          >
            <LayoutDashboard className="w-4 h-4" />
            Dashboard
          </Link>

          {/* Profile dropdown */}
          {profile && (
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setOpen((o) => !o)}
                className="flex items-center gap-2 px-3 py-2 rounded-xl border border-indigo-200 dark:border-indigo-700 bg-indigo-50 dark:bg-indigo-900/30 hover:bg-indigo-100 dark:hover:bg-indigo-950 transition-all"
              >
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {initials || <User className="w-3.5 h-3.5" />}
                </div>
                <span className="hidden md:block text-xs font-semibold text-indigo-700 dark:text-indigo-300 max-w-[120px] truncate">
                  {displayName}
                </span>
                <ChevronRight className={`w-3.5 h-3.5 text-indigo-400 transition-transform ${open ? 'rotate-90' : ''}`} />
              </button>

              {open && (
                <div className="absolute right-0 top-full mt-2 w-72 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl shadow-indigo-100/60 dark:shadow-black/40 border border-gray-100 dark:border-gray-800 z-50 overflow-hidden">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-800 dark:to-violet-900 px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white text-lg font-extrabold flex-shrink-0">
                        {initials || <User className="w-5 h-5" />}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-bold text-white truncate">{displayName}</p>
                        {profile.business_user_id && <p className="text-xs text-indigo-200 dark:text-indigo-300 truncate">ID: {profile.business_user_id}</p>}
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="px-4 py-3 space-y-2.5 border-b border-gray-100 dark:border-gray-800">
                    {profile.website && (
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-950/40 flex items-center justify-center flex-shrink-0">
                          <Globe className="w-3.5 h-3.5 text-blue-500" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs text-gray-400 dark:text-gray-500">Website</p>
                          <p className="text-xs font-semibold text-gray-700 dark:text-gray-200 truncate">{profile.website}</p>
                        </div>
                      </div>
                    )}
                    {profile.business_user_id && (
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 flex items-center justify-center flex-shrink-0">
                          <ShieldCheck className="w-3.5 h-3.5 text-indigo-500" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 dark:text-gray-500">Business ID</p>
                          <p className="text-xs font-semibold text-gray-700 dark:text-gray-200 font-mono">{profile.business_user_id}</p>
                        </div>
                      </div>
                    )}
                    {profile.created_at && (
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-green-50 dark:bg-green-950/40 flex items-center justify-center flex-shrink-0">
                          <BadgeCheck className="w-3.5 h-3.5 text-green-500" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 dark:text-gray-500">Member Since</p>
                          <p className="text-xs font-semibold text-gray-700 dark:text-gray-200">{new Date(profile.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="px-3 py-2">
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-2.5 w-full px-3 py-2.5 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors group"
                    >
                      <LogOut className="w-4 h-4 text-gray-400 group-hover:text-red-500 dark:group-hover:text-red-400" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover:text-red-600 dark:group-hover:text-red-400">Sign Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

function TagInput({ value, onChange, placeholder }: { value: string[]; onChange: (v: string[]) => void; placeholder?: string }) {
  const [input, setInput] = useState('');

  const addTag = (tag: string) => {
    const t = tag.trim();
    if (!t) return;
    if (value.includes(t)) return;
    onChange([...value, t]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      if (input.trim()) { addTag(input); setInput(''); }
    } else if (e.key === 'Backspace' && !input && value.length) {
      e.preventDefault();
      onChange(value.slice(0, -1));
    }
  };

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {value.map((tag, i) => (
          <div key={i} className="flex items-center gap-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-2 py-1 rounded-full text-xs">
            <span className="truncate max-w-[160px]">{tag}</span>
            <button type="button" onClick={() => onChange(value.filter((t) => t !== tag))} className="p-0.5 rounded-full hover:bg-indigo-100">
              <X className="w-3 h-3" />
            </button>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        onBlur={() => { if (input.trim()) { addTag(input); setInput(''); } }}
        placeholder={placeholder}
        className="mt-2 w-full pl-3 pr-3 py-2 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-900 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
      />
      <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Press Enter or comma to add. You can add multiple products/brands.</p>
    </div>
  );
}

function OnboardingFooter() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <Shield className="w-4 h-4 text-indigo-500" />
            <span>© 2026 RakshaAI. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4 text-xs text-gray-400 dark:text-gray-500">
            <Link href="/privacy-policy" className="hover:text-gray-600 dark:hover:text-gray-200 transition-colors">Privacy Policy</Link>
            <span>·</span>
            <Link href="/terms-of-service" className="hover:text-gray-600 dark:hover:text-gray-200 transition-colors">Terms of Service</Link>
            <span>·</span>
            <Link href="/contact" className="hover:text-gray-600 dark:hover:text-gray-200 transition-colors">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function OnboardingSkeleton() {
  return (
    <div className="flex gap-8 xl:gap-12 items-start">
      {/* Sidebar skeleton */}
      <aside className="hidden lg:flex flex-col w-72 xl:w-80 flex-shrink-0">
        <div className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-700 rounded-2xl p-6 text-white mb-5 shadow-xl">
          <div className="w-12 h-12 bg-white/20 rounded-xl mb-4 animate-pulse" />
          <div className="h-5 w-48 bg-white/25 rounded mb-2 animate-pulse" />
          <div className="space-y-2">
            <div className="h-3 w-full bg-white/15 rounded animate-pulse" />
            <div className="h-3 w-5/6 bg-white/15 rounded animate-pulse" />
            <div className="h-3 w-2/3 bg-white/15 rounded animate-pulse" />
          </div>
          <div className="mt-4 pt-4 border-t border-indigo-500 grid grid-cols-2 gap-3">
            <div>
              <div className="h-6 w-16 bg-white/25 rounded mb-1.5 animate-pulse" />
              <div className="h-3 w-24 bg-white/15 rounded animate-pulse" />
            </div>
            <div>
              <div className="h-6 w-12 bg-white/25 rounded mb-1.5 animate-pulse" />
              <div className="h-3 w-20 bg-white/15 rounded animate-pulse" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:!bg-gray-900 rounded-2xl border border-gray-200 dark:!border-gray-800 p-5 shadow-sm flex-1">
          <div className="h-3 w-28 bg-gray-200 dark:!bg-gray-700 rounded mb-4 animate-pulse" />
          <ol className="space-y-1">
            {Array.from({ length: 6 }).map((_, idx) => (
              <li key={idx}>
                <div className="flex items-center gap-3 p-3">
                  <div className="w-9 h-9 rounded-xl bg-gray-100 dark:!bg-gray-800 animate-pulse flex-shrink-0" />
                  <div className="flex-1 min-w-0 space-y-1.5">
                    <div className="h-3 bg-gray-200 dark:!bg-gray-700 rounded animate-pulse" style={{ width: `${50 + ((idx * 7) % 30)}%` }} />
                    <div className="h-2.5 bg-gray-100 dark:!bg-gray-800 rounded animate-pulse" style={{ width: `${60 + ((idx * 11) % 25)}%` }} />
                  </div>
                </div>
                {idx < 5 && (
                  <div className="my-0.5 w-0.5 h-3 rounded-full bg-gray-200 dark:!bg-gray-700" style={{ marginLeft: '24px' }} />
                )}
              </li>
            ))}
          </ol>
          <div className="mt-5 pt-4 border-t border-gray-100 dark:!border-gray-800 space-y-2.5">
            {Array.from({ length: 3 }).map((_, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-3.5 h-3.5 rounded bg-gray-200 dark:!bg-gray-700 animate-pulse flex-shrink-0" />
                <div className="h-2.5 bg-gray-100 dark:!bg-gray-800 rounded animate-pulse" style={{ width: `${50 + ((idx * 13) % 30)}%` }} />
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* Main content skeleton */}
      <div className="flex-1 min-w-0 max-w-2xl mx-auto lg:mx-0">
        {/* Mobile step bar skeleton */}
        <div className="lg:hidden mb-5 bg-white dark:!bg-gray-900 rounded-2xl border border-gray-200 dark:!border-gray-800 p-4 shadow-sm">
          <div className="flex items-center justify-between gap-2">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div key={idx} className="w-8 h-8 rounded-full bg-gray-100 dark:!bg-gray-800 animate-pulse flex-shrink-0" />
            ))}
          </div>
        </div>

        <div className="bg-white dark:!bg-gray-900 rounded-2xl border border-gray-200 dark:!border-gray-800 shadow-sm overflow-hidden">
          {/* Header */}
          <div className="px-6 py-5 border-b border-gray-100 dark:!border-gray-800 bg-white dark:!bg-gray-900">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:!bg-indigo-900 animate-pulse flex-shrink-0 mt-0.5" />
              <div className="flex-1 space-y-2 pt-1">
                <div className="h-4 w-44 bg-gray-200 dark:!bg-gray-700 rounded animate-pulse" />
                <div className="h-3 w-72 bg-gray-100 dark:!bg-gray-800 rounded animate-pulse" />
              </div>
            </div>
          </div>

          {/* Form fields */}
          <div className="p-6 space-y-5">
            {Array.from({ length: 4 }).map((_, idx) => (
              <div key={idx} className="space-y-2">
                <div className="h-3 w-32 bg-gray-200 dark:!bg-gray-700 rounded animate-pulse" />
                <div className="h-12 bg-gray-100 dark:!bg-gray-800 rounded-xl animate-pulse" />
                <div className="h-2.5 w-2/3 bg-gray-100 dark:!bg-gray-800 rounded animate-pulse" />
              </div>
            ))}
            <div className="pt-2">
              <div className="h-12 bg-indigo-100 dark:!bg-indigo-900 rounded-xl animate-pulse" />
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-center">
          <div className="h-3 w-72 bg-gray-100 dark:!bg-gray-800 rounded animate-pulse" />
        </div>
      </div>

    </div>
  );
}

function StepSidebar({
  activeStep,
  maxReachedStep,
  onStepClick,
  stepSummaries,
  isFreeUser,
}: {
  activeStep: number;
  maxReachedStep: number;
  onStepClick: (stepNum: number) => void;
  stepSummaries: Record<number, string>;
  isFreeUser?: boolean;
}) {
  return (
    <aside className="hidden lg:flex flex-col w-72 xl:w-80 flex-shrink-0">
      <div className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-700 dark:from-indigo-800 dark:via-indigo-900 dark:to-violet-900 rounded-2xl p-6 text-white mb-5 shadow-xl">
        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
          <Shield className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-lg font-bold mb-1">Business Verification</h3>
        <p className="text-sm text-indigo-200 leading-relaxed">
          Get your business verified on RakshaAI and build trust with millions of users across India.
        </p>
        <div className="mt-4 pt-4 border-t border-indigo-500 grid grid-cols-2 gap-3">
          {[
            { value: '10K+', label: 'Verified Businesses' },
            { value: '4.9★', label: 'Avg Trust Score' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-xl font-bold">{stat.value}</p>
              <p className="text-xs text-indigo-200">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5 shadow-sm flex-1">
        <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">Verification Steps</p>
        <ol className="space-y-1">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            const isLockedForFree = isFreeUser && step.num === 5;
            const isCompleted = !isLockedForFree && step.num <= maxReachedStep && step.num !== activeStep;
            const isActive = !isLockedForFree && step.num === activeStep;
            const summary = stepSummaries[step.num];
            const isClickable = !isLockedForFree && step.num <= maxReachedStep && step.num !== activeStep;
            return (
              <li key={step.num}>
                <div
                  role={isClickable ? 'button' : undefined}
                  tabIndex={isClickable ? 0 : undefined}
                  onClick={() => isClickable && onStepClick(step.num)}
                  onKeyDown={(e) => { if (isClickable && (e.key === 'Enter' || e.key === ' ')) onStepClick(step.num); }}
                  className={[
                    'flex items-center gap-3 p-3 rounded-xl transition-all duration-200',
                    isActive ? 'bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-700' : '',
                    isCompleted ? 'cursor-pointer hover:bg-green-50 dark:hover:bg-green-900/30 hover:border hover:border-green-100 dark:hover:border-green-400 border border-transparent' : '',
                    isLockedForFree ? 'opacity-40 cursor-not-allowed' : (!isActive && !isCompleted ? 'opacity-50' : ''),
                  ].join(' ')}
                >
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${isLockedForFree ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600' :
                    isCompleted ? 'bg-green-500 text-white shadow-sm' :
                      isActive ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200 dark:shadow-indigo-900' :
                        'bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600'
                    }`}>
                    {isCompleted ? <CheckCircle className="w-4 h-4" /> : <Icon className="w-4 h-4" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-semibold leading-tight ${isLockedForFree ? 'text-gray-400 dark:text-gray-600' :
                      isActive ? 'text-indigo-700 dark:text-indigo-300' :
                        isCompleted ? 'text-gray-700 dark:text-gray-200' : 'text-gray-400 dark:text-gray-500'
                      }`}>{step.label}</p>
                    <p className={`text-xs mt-0.5 truncate ${isLockedForFree ? 'text-amber-500 font-medium' :
                      isCompleted ? 'text-green-600 dark:text-green-400 font-medium' :
                        isActive ? 'text-indigo-500 dark:text-indigo-400' : 'text-gray-400 dark:text-gray-500'
                      }`}>
                      {isLockedForFree ? '★ Paid plan only' : (isCompleted && summary ? summary : step.desc)}
                    </p>
                  </div>
                  {isActive && !isLockedForFree && <ChevronRight className="w-4 h-4 text-indigo-400 flex-shrink-0" />}
                  {isCompleted && (
                    <div className="flex-shrink-0 flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      {isClickable && (
                        <span className="text-[10px] text-green-500 dark:text-green-300 font-semibold bg-green-50 dark:bg-green-950/50 px-1.5 py-0.5 rounded-full">Edit</span>
                      )}
                    </div>
                  )}
                  {isLockedForFree && <Lock className="w-3.5 h-3.5 text-gray-300 flex-shrink-0" />}
                </div>
                {idx < STEPS.length - 1 && (
                  <div
                    className={`my-0.5 w-0.5 h-3 rounded-full ${step.num < maxReachedStep ? 'bg-green-300 dark:bg-green-700' : 'bg-gray-200 dark:bg-gray-700'}`}
                    style={{ marginLeft: '24px' }}
                  />
                )}
              </li>
            );
          })}
        </ol>
        <div className="mt-5 pt-4 border-t border-gray-100 dark:border-gray-800 space-y-2">
          {[
            { icon: Lock, text: '256-bit SSL Encrypted' },
            { icon: Shield, text: 'UIDAI Certified Process' },
            { icon: Star, text: 'Trusted by 10,000+ Businesses' },
          ].map((badge) => {
            const Icon = badge.icon;
            return (
              <div key={badge.text} className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                <Icon className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
                <span>{badge.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

function MobileStepBar({
  activeStep,
  maxReachedStep,
  onStepClick,
  stepSummaries,
}: {
  activeStep: number;
  maxReachedStep: number;
  onStepClick: (stepNum: number) => void;
  stepSummaries: Record<number, string>;
}) {
  const step = STEPS.find((s) => s.num === activeStep) || STEPS[0];
  const Icon = step.icon;
  const progress = ((activeStep - 1) / (STEPS.length - 1)) * 100;
  return (
    <div className="lg:hidden mb-6">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-indigo-600 dark:bg-indigo-800 flex items-center justify-center">
            <Icon className="w-3.5 h-3.5 text-white" />
          </div>
          <div>
            <span className="text-sm font-semibold text-gray-800 dark:text-gray-100">{step.label}</span>
            {stepSummaries[activeStep] && (
              <p className="text-xs text-indigo-500 dark:text-indigo-400 font-medium">{stepSummaries[activeStep]}</p>
            )}
          </div>
        </div>
        <span className="text-xs font-medium text-gray-400 dark:text-gray-500">Step {activeStep} of {STEPS.length}</span>
      </div>
      <div className="h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 dark:from-indigo-700 dark:to-violet-700 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
      </div>
      {/* Tappable step dots */}
      <div className="flex justify-between mt-2">
        {STEPS.map((s) => {
          const isCompleted = s.num <= maxReachedStep && s.num !== activeStep;
          const isActive = s.num === activeStep;
          return (
            <button
              key={s.num}
              onClick={() => isCompleted && onStepClick(s.num)}
              disabled={!isCompleted}
              title={isCompleted ? `Go back to ${s.label}` : s.label}
              className={[
                'flex flex-col items-center gap-1 transition-all',
                isCompleted ? 'cursor-pointer' : 'cursor-default',
              ].join(' ')}
            >
              <div className={[
                'w-5 h-5 rounded-full flex items-center justify-center transition-all',
                isCompleted ? 'bg-green-500 shadow-sm scale-110' :
                  isActive ? 'bg-indigo-600 dark:bg-indigo-800 scale-125 shadow-md' :
                    'bg-gray-300 dark:bg-gray-700',
              ].join(' ')}>
                {isCompleted
                  ? <CheckCircle className="w-3 h-3 text-white" />
                  : isActive
                    ? <div className="w-2 h-2 rounded-full bg-white" />
                    : null}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function FormInput({
  label, value, onChange, placeholder, type = 'text', required, hint, icon: Icon, readOnly, maxLength,
}: {
  label: string; value: string; onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string; type?: string; required?: boolean; hint?: string;
  icon?: React.ElementType; readOnly?: boolean; maxLength?: number;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1.5">
        {label}{required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      <div className="relative">
        {Icon && <div className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"><Icon className="w-4 h-4 text-gray-400 dark:text-gray-500" /></div>}
        <input
          type={type} value={value} onChange={onChange} placeholder={placeholder}
          required={required} readOnly={readOnly} maxLength={maxLength}
          className={`w-full ${Icon ? 'pl-10' : 'pl-4'} pr-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-900 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 text-sm transition-all duration-150 ${readOnly ? 'bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 cursor-not-allowed' : 'hover:border-gray-300 dark:hover:border-gray-500'}`}
        />
      </div>
      {hint && <p className="text-xs text-gray-400 dark:text-gray-500 mt-1.5">{hint}</p>}
    </div>
  );
}

export default function BusinessOnboardingPage() {
  const router = useRouter();
  const [application, setApplication] = useState<BusinessApplication | null>(null);
  const [currentDisplayStep, setCurrentDisplayStep] = useState(1);
  const [maxReachedStep, setMaxReachedStep] = useState(1);

  const [businessName, setBusinessName] = useState('');
  const [businessUrl, setBusinessUrl] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [products, setProducts] = useState<string[]>([]);
  const [email, setEmail] = useState('');
  const [phoneOtp, setPhoneOtp] = useState('');
  const [phoneOtpSent, setPhoneOtpSent] = useState(false);
  const [phoneVerified, setPhoneVerified] = useState(false);
  const [emailOtp, setEmailOtp] = useState('');
  const [emailOtpSent, setEmailOtpSent] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [subscriptionPaid, setSubscriptionPaid] = useState(false);
  const [isFreeUser, setIsFreeUser] = useState(false);
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');
  const [initialLoading, setInitialLoading] = useState(true);

  // Plans fetched from backend
  type PlanData = {
    id: number; plan_id: string; name: string; description: string;
    amount: number; currency: string; interval: string; interval_count: number;
    price_excluding_gst: string; gst_percentage: string; gst_amount: string;
    total_price: string; billing_cycle: string; total_count: number; is_active: boolean;
  };
  const [plans, setPlans] = useState<PlanData[]>([]);
  const [plansLoading, setPlansLoading] = useState(false);
  console.log('Available plans:', plans);
  // Subscription status from backend
  const [subStatusLoading, setSubStatusLoading] = useState(false);
  const [existingPlan, setExistingPlan] = useState<BillingCycle | null>(null);
  const [existingPlanId, setExistingPlanId] = useState<string | number | null>(null);
  const [existingSubId, setExistingSubId] = useState<string | null>(null);

  // Trust score data from API
  const [trustScoreData, setTrustScoreData] = useState<{
    trust_score?: number; overall_trust_percentage?: number; overall_trust_level?: string;
    total_number_of_reviews?: number; is_live?: boolean; summary?: string;
    url_details?: { business_name?: string; complete_domain?: string; url?: string };
    domain_info?: {
      domain?: string; domain_age_days?: number; registrar?: string; status?: string;
      created?: string; expires?: string; ip?: string; nameservers?: string[];
      privacy_enabled?: boolean;
      ip_reputation?: { abuse_score?: number; usage_type?: string; last_reported?: string | null };
    };
    ssl_info?: {
      valid?: boolean; self_signed?: boolean; days_left?: number;
      subject?: { commonName?: string };
      issuer?: { organizationName?: string; commonName?: string; countryName?: string };
      san?: string[]; not_before?: string; not_after?: string;
    };
    action_items?: {
      trust_level?: string; risk_level?: string; payment_advice?: string;
      can_do?: string[]; should_avoid?: string[];
      trust_badges?: string[];
      registered_business?: {
        business_name?: string;
        verified_since?: string;
        documents_uploaded?: string[];
        kyc_verified_count?: string;
        verification_details?: string[];
      };
    };
    website_legitimacy_info?: {
      pages_found?: Record<string, string>; contact_info_present?: boolean;
      legal_identifiers_present?: boolean; pages_count?: number;
    };
    website_publishing_date?: { publish_date?: string; publish_year?: number; is_safe?: boolean };
    pages_summary?: {
      about_summary?: { available?: boolean; summary?: string };
      privacy_summary?: { available?: boolean; summary?: string };
      contact_details?: { phones?: string[]; emails?: string[]; addresses?: string[] };
    };
    google_reviews_data?: {
      reviews?: Array<{ displayname?: string; Review?: string; Rating?: number; Sentiment?: string; publishTime?: string; source_place?: string }>;
      positive_count?: number; negative_count?: number; total_reviews?: number;
      average_rating?: number; google_maps_links?: string[];
    };
    fb_page_info?: {
      name?: string; url?: string; profile_picture?: string; cover_photo?: string;
      followers?: string; category?: string; email?: string;
      profile_intro_text?: string; managed_by?: string;
    };
    sectional_status?: {
      technical_trust?: { trust_percentage: number; trust_level: string; trust_score?: number; total_number_of_reviews?: number };
      related_scam_reports?: { trust_percentage: number; trust_level: string; trust_score?: number; total_number_of_reviews?: number };
      public_reputation_trust?: { trust_percentage: number; trust_level: string; trust_score?: number; total_number_of_reviews?: number };
      unclear_business_legitimacy?: { trust_percentage: number; trust_level: string; trust_score?: number; total_number_of_reviews?: number };
      google_business_profile_trust?: { trust_percentage: number; trust_level: string; trust_score?: number; total_number_of_reviews?: number };
    };
  } | null>(null);
  const [trustScoreLoading, setTrustScoreLoading] = useState(false);

  const [gstNumber, setGstNumber] = useState('');
  const [gstVerifying, setGstVerifying] = useState(false);
  const [gstVerified, setGstVerified] = useState(false);
  const [gstError, setGstError] = useState('');
  const [gstData, setGstData] = useState<{
    businessName: string;
    tradeName: string;
    status: string;
    businessType: string;
    registrationDate: string;
    lastUpdated: string;
    natureOfBusiness: string[];
    address: string;
    state: string;
    stateCode: string;
  } | null>(null);

  // ── Verification status from backend ────────────────────────
  type VerifyStatus = {
    verifications: { gst: boolean; pan: boolean; aadhaar: boolean; mca: boolean; bankAccount: boolean };
    documents?: { coiUrl: string | null; panUrl: string | null; aoaUrl: string | null; moaUrl: string | null };
    hasDocuments?: boolean;
    details: {
      gst: {
        gstin: string; verifiedAt: string;
        businessName: string; tradeName: string; status: string;
        businessType: string; registrationDate: string; lastUpdated: string;
        natureOfBusiness: string[]; address: string; state: string; stateCode: string;
      } | null;
      pan: {
        panNumber: string; verifiedAt: string; status: string;
        remarks: string | null; nameMatch: boolean | null; dobMatch: boolean | null;
        category: string; aadhaarSeedingStatus: string;
      } | null;
      aadhaar: {
        aadhaarNumber: string; verifiedAt: string;
        name: string; gender: string; dateOfBirth: string; yearOfBirth: number | null;
        careOf: string; fullAddress: string;
        address: {
          house: string; landmark: string; vtc: string; postOffice: string;
          district: string; state: string; country: string; pincode: string | number
        };
        photo: string | null; status: string;
      } | null;
      mca: {
        cin: string; verifiedAt: string; verified: boolean;
        companyName: string; companyStatus: string; companyClass: string;
        companyCategory: string; companySubCategory: string;
        dateOfIncorporation: string; rocCode: string; registeredState: string;
        email: string; paidUpCapital: string; authorisedCapital: string;
        registeredAddress: string; error: string | null;
      } | null;
      bankAccount: {
        accountNumber: string; ifsc: string; verifiedAt: string;
        accountExists: boolean; nameAtBank: string; message: string;
      } | null;
    };
  };
  const [verifyStatus, setVerifyStatus] = useState<VerifyStatus | null>(null);

  // ── KYC step state ───────────────────────────────────────────
  const [kycType, setKycType] = useState<'aadhaar' | 'pan' | 'bank' | 'mca'>('aadhaar');

  // Aadhaar
  const [aadhaarNumber, setAadhaarNumber] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [aadhaarVerified, setAadhaarVerified] = useState(false);
  const [sendingOtp, setSendingOtp] = useState(false);
  const [verifyingOtp, setVerifyingOtp] = useState(false);
  const [aadhaarReferenceId, setAadhaarReferenceId] = useState<string | number>('');
  const [aadhaarError, setAadhaarError] = useState('');
  const [aadhaarData, setAadhaarData] = useState<{
    name: string;
    gender: string;
    dateOfBirth: string;
    yearOfBirth: number | null;
    careOf: string;
    fullAddress: string;
    address: {
      house: string; landmark: string; vtc: string;
      postOffice: string; district: string; state: string;
      country: string; pincode: string | number;
    };
    photo: string | null;
    status: string;
  } | null>(null);

  // PAN
  const [panNumber, setPanNumber] = useState('');
  const [panName, setPanName] = useState('');
  const [panDob, setPanDob] = useState('');
  const [panVerifying, setPanVerifying] = useState(false);
  const [panVerified, setPanVerified] = useState(false);
  const [panError, setPanError] = useState('');
  const [panData, setPanData] = useState<{
    pan: string;
    status: string;
    remarks: string | null;
    nameMatch: boolean | null;
    dobMatch: boolean | null;
    category: string;
    aadhaarSeedingStatus: string;
  } | null>(null);

  // Bank Account
  const [bankAccount, setBankAccount] = useState('');
  const [bankIfsc, setBankIfsc] = useState('');
  const [bankVerifying, setBankVerifying] = useState(false);
  const [bankVerified, setBankVerified] = useState(false);
  const [bankError, setBankError] = useState('');
  const [bankData, setBankData] = useState<{
    accountNumber: string;
    ifsc: string;
    accountExists: boolean;
    nameAtBank: string;
    message: string;
  } | null>(null);

  // MCA
  const [mcaCin, setMcaCin] = useState('');
  const [mcaVerifying, setMcaVerifying] = useState(false);
  const [mcaVerified, setMcaVerified] = useState(false);
  const [mcaError, setMcaError] = useState('');
  const [mcaData, setMcaData] = useState<{
    cin: string;
    companyName: string;
    companyStatus: string;
    companyClass: string;
    companyCategory: string;
    companySubCategory: string;
    dateOfIncorporation: string;
    rocCode: string;
    registeredState: string;
    email: string;
    paidUpCapital: string;
    authorisedCapital: string;
    registeredAddress: string;
  } | null>(null);

  const [uploadedFiles, setUploadedFiles] = useState<{ name: string; size: string }[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // ── Document upload slots (step 5) ───────────────────────────────────────
  type DocSlot = { file: File | null; dataUrl: string | null; uploading: boolean; name: string; size: string };
  const emptySlot = (): DocSlot => ({ file: null, dataUrl: null, uploading: false, name: '', size: '' });
  const [coiDoc, setCoiDoc] = useState<DocSlot>(emptySlot());
  const [panDoc, setPanDoc] = useState<DocSlot>(emptySlot());
  const [aoaDoc, setAoaDoc] = useState<DocSlot>(emptySlot());
  const [moaDoc, setMoaDoc] = useState<DocSlot>(emptySlot());
  const [docsSubmitting, setDocsSubmitting] = useState(false);
  const [docsError, setDocsError] = useState('');
  const [docsSubmitted, setDocsSubmitted] = useState(false);
  const coiRef = useRef<HTMLInputElement>(null);
  const panDocRef = useRef<HTMLInputElement>(null);
  const aoaRef = useRef<HTMLInputElement>(null);
  const moaRef = useRef<HTMLInputElement>(null);

  const [profile, setProfile] = useState<BusinessProfile | null>(null);

  useEffect(() => {
    // Cookie is HttpOnly  browser sends it automatically, no JS access needed
    fetch('/api/business-auth/profile')
      .then((r) => r.json())
      .then((data) => { if (data.business) setProfile(data.business); })
      .catch(() => { });
  }, []);

  // ── Fetch verification status on mount + whenever step changes ───────────
  useEffect(() => {
    fetch('/api/business/verify-status')
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (!data?.verifications) return;

        setVerifyStatus({ verifications: data.verifications, details: data.details, documents: data.documents, hasDocuments: data.hasDocuments });

        // ─ Pre-fill document slots if already uploaded ───────────────────
        if (data.documents) {
          const docs = data.documents;
          const makeSlot = (url: string | null, label: string): DocSlot | null => {
            if (!url) return null;
            const fileName = url.split('/').pop()?.split('?')[0] ?? label;
            return { file: null, dataUrl: 'ready', uploading: false, name: fileName, size: 'Previously uploaded' };
          };
          const coi = makeSlot(docs.coiUrl, 'COI Document');
          const pan = makeSlot(docs.panUrl, 'PAN Document');
          const aoa = makeSlot(docs.aoaUrl, 'AOA Document');
          const moa = makeSlot(docs.moaUrl, 'MOA Document');
          if (coi) setCoiDoc(coi);
          if (pan) setPanDoc(pan);
          if (aoa) setAoaDoc(aoa);
          if (moa) setMoaDoc(moa);
        }

        const v = data.verifications;
        const d = data.details;

        // ─ GST ───────────────────────────────────────────────
        if (v.gst && d.gst) {
          setGstVerified(true);
          setGstNumber(d.gst.gstin);
          setGstData({
            businessName: d.gst.businessName,
            tradeName: d.gst.tradeName,
            status: d.gst.status,
            businessType: d.gst.businessType,
            registrationDate: d.gst.registrationDate,
            lastUpdated: d.gst.lastUpdated,
            natureOfBusiness: d.gst.natureOfBusiness,
            address: d.gst.address,
            state: d.gst.state,
            stateCode: d.gst.stateCode,
          });
        }

        // ─ PAN ───────────────────────────────────────────────
        if (v.pan && d.pan) {
          setPanVerified(true);
          setPanNumber(d.pan.panNumber);
          setPanData({
            pan: d.pan.panNumber,
            status: d.pan.status,
            remarks: d.pan.remarks,
            nameMatch: d.pan.nameMatch,
            dobMatch: d.pan.dobMatch,
            category: d.pan.category,
            aadhaarSeedingStatus: d.pan.aadhaarSeedingStatus,
          });
        }

        // ─ Aadhaar ──────────────────────────────────────────
        if (v.aadhaar && d.aadhaar) {
          setAadhaarVerified(true);
          setAadhaarNumber(d.aadhaar.aadhaarNumber);
          setAadhaarData({
            name: d.aadhaar.name,
            gender: d.aadhaar.gender,
            dateOfBirth: d.aadhaar.dateOfBirth,
            yearOfBirth: d.aadhaar.yearOfBirth,
            careOf: d.aadhaar.careOf,
            fullAddress: d.aadhaar.fullAddress,
            address: d.aadhaar.address,
            photo: d.aadhaar.photo,
            status: d.aadhaar.status,
          });
        }

        // ─ Bank ─────────────────────────────────────────────
        if (v.bankAccount && d.bankAccount) {
          setBankVerified(true);
          setBankAccount(d.bankAccount.accountNumber);
          setBankIfsc(d.bankAccount.ifsc);
          setBankData({
            accountNumber: d.bankAccount.accountNumber,
            ifsc: d.bankAccount.ifsc,
            accountExists: d.bankAccount.accountExists,
            nameAtBank: d.bankAccount.nameAtBank,
            message: d.bankAccount.message,
          });
        }

        // ─ MCA ─────────────────────────────────────────────
        if (d.mca?.cin) {
          setMcaCin(d.mca.cin);
          if (v.mca) {
            setMcaVerified(true);
            setMcaData({
              cin: d.mca.cin,
              companyName: d.mca.companyName,
              companyStatus: d.mca.companyStatus,
              companyClass: d.mca.companyClass,
              companyCategory: d.mca.companyCategory,
              companySubCategory: d.mca.companySubCategory,
              dateOfIncorporation: d.mca.dateOfIncorporation,
              rocCode: d.mca.rocCode,
              registeredState: d.mca.registeredState,
              email: d.mca.email,
              paidUpCapital: d.mca.paidUpCapital,
              authorisedCapital: d.mca.authorisedCapital,
              registeredAddress: d.mca.registeredAddress,
            });
          }
        }
      })
      .catch(() => {/* non-critical, page still works without it */ });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Auth guard + full step hydration from APIs (zero localStorage) ──────────
  useEffect(() => {
    // Wipe any stale data from old sessions immediately
    try { localStorage.removeItem('businessApplication'); } catch { /* noop */ }

    Promise.all([
      fetch('/api/business-auth/profile'),
      fetch('/api/razorpay/subscription-status'),
      fetch('/api/razorpay/plans'),
    ])
      .then(async ([profileRes, subRes, plansRes]) => {
        if (!profileRes.ok) { setInitialLoading(false); router.replace('/business-login'); return; }

        const profileData = await profileRes.json();
        const subData = subRes.ok ? await subRes.json() : null;
        if (plansRes.ok) {
          const plansData = await plansRes.json();
          const fetchedPlans = Array.isArray(plansData) ? plansData : plansData?.plans;
          if (Array.isArray(fetchedPlans)) setPlans(fetchedPlans);
        }
        const biz = profileData.business;

        // Pre-fill form fields from profile
        if (biz?.email) {
          setEmail(biz.email);
          // If the profile already contains an email from the backend, treat it as verified
          setEmailVerified(true);
        }
        if (biz?.website) setBusinessUrl(biz.website);
        if (biz?.business_name) setBusinessName(biz.business_name);
        if (biz?.phone) setPhoneNumber(biz.phone);
        if (biz?.product_name) setProducts([biz.product_name]);

        // ── Step 1: user has NOT yet filled in business info ─────────────────
        if (!biz?.business_name) {
          setInitialLoading(false);
          return; // stay at step 1
        }

        // ── Step 2: approved but no active subscription ──────────────────────
        const hasSub = subData?.hasActiveSubscription ?? false;
        if (hasSub) {
          setSubscriptionPaid(true);
          setExistingPlan(normalizeBillingCycle(subData.plan));
          setExistingPlanId(subData.planId);
          setExistingSubId(subData.subscriptionId);
        }

        const baseApp: BusinessApplication = {
          id: `BIZ-${biz.id ?? Date.now()}`,
          step: hasSub ? 3 : 2,
          status: 'approved',
          businessName: biz.business_name || '',
          businessUrl: biz.website || '',
          phoneNumber: biz.phone || '',
          submittedAt: biz.created_at || new Date().toISOString(),
          products: biz.product_name ? [biz.product_name] : [],
          email: biz.email || '',
          phoneVerified: true, emailVerified: true,
          subscriptionPaid: hasSub,
          subscriptionId: hasSub ? subData.subscriptionId : undefined,
        };

        // Ensure component state reflects backend-verified email when available
        if (biz?.email) setEmailVerified(true);

        if (!hasSub) {
          // Check verify-status to determine where to resume free flow
          fetch('/api/business/verify-status')
            .then((r) => r.ok ? r.json() : null)
            .then((vsData) => {
              const v = vsData?.verifications;
              setIsFreeUser(true);
              if ((v?.gst && v?.aadhaar) || (!v?.gst && v?.aadhaar)) {
                // Both GST+Aadhaar done, OR only Aadhaar done → finished
                const freeApp = { ...baseApp, step: 6, status: 'approved' as const };
                setApplication(freeApp);
                setMaxReachedStep(6);
                goToStep(6);
              } else if (v?.gst && !v?.aadhaar) {
                // GST done but Aadhaar not yet done → let them optionally do Aadhaar
                const freeApp = { ...baseApp, step: 4 };
                setApplication(freeApp);
                setMaxReachedStep(4);
                goToStep(4);
              } else {
                // Nothing done yet → start from subscription step
                setIsFreeUser(false);
                setApplication(baseApp);
                setMaxReachedStep(2);
                goToStep(2);
              }
            })
            .catch(() => {
              setApplication(baseApp);
              setMaxReachedStep(2);
              goToStep(2);
            })
            .finally(() => setInitialLoading(false));
          return;
        }

        // ── Step 3+: subscription paid  use verify-status to find exact step ─
        fetch('/api/business/verify-status')
          .then((r) => r.ok ? r.json() : null)
          .then((vsData) => {
            const v = vsData?.verifications;
            let targetStep = 3;
            if (v) {
              const kycDone = v.gst || v.pan || v.aadhaar || v.mca || v.bankAccount;
              if (vsData?.hasDocuments) targetStep = 6;
              else if (kycDone) targetStep = 5;
              else targetStep = 3;
            }
            const finalApp = { ...baseApp, step: targetStep };
            setApplication(finalApp);
            setMaxReachedStep(targetStep);
            goToStep(targetStep);
          })
          .catch(() => {
            setApplication(baseApp);
            setMaxReachedStep(3);
            goToStep(3);
          })
          .finally(() => setInitialLoading(false));
      })
      .catch(() => { setInitialLoading(false); router.replace('/business-login'); });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  // ── Fetch trust score when reaching step 6 (paid user) ──────────────────
  useEffect(() => {
    if (currentDisplayStep !== 6 || isFreeUser || !businessUrl || trustScoreData) return;
    setTrustScoreLoading(true);
    fetch('/api/trust-score', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: businessUrl }),
    })
      .then(r => r.json())
      .then(res => { if (res?.data) setTrustScoreData(res.data); })
      .catch(() => { })
      .finally(() => setTrustScoreLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentDisplayStep]);

  // ── Check subscription status whenever step 2 becomes active ───────────
  useEffect(() => {
    if (currentDisplayStep !== 2) return;
    setSubStatusLoading(true);
    fetch('/api/razorpay/subscription-status')
      .then((r) => r.json())
      .then((data) => {
        if (data.hasActiveSubscription) {
          setSubscriptionPaid(true);
          setExistingPlan(normalizeBillingCycle(data.plan));
          setExistingPlanId(data.planId);
          setExistingSubId(data.subscriptionId);
          // Auto-advance only if still at step 2 in local state
          if (application && application.step <= 2) {
            const updated = {
              ...application,
              step: 3,
              subscriptionPaid: true,
              subscriptionId: data.subscriptionId,
            };
            saveApplication(updated);
            goToStep(3);
          }
        }
      })
      .catch(() => { /* non-fatal user can still proceed manually */ })
      .finally(() => setSubStatusLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentDisplayStep]);

  const determineDisplayStep = (app: BusinessApplication) => {
    if (app.status === 'rejected') { setCurrentDisplayStep(1); setMaxReachedStep((p) => Math.max(p, 1)); return; }
    if (app.status === 'pending') { setCurrentDisplayStep(1); setMaxReachedStep((p) => Math.max(p, 1)); return; }
    if (app.status === 'awaiting_review') { setCurrentDisplayStep(1); setMaxReachedStep((p) => Math.max(p, 1)); return; }
    setCurrentDisplayStep(app.step);
    setMaxReachedStep((p) => Math.max(p, app.step));
  };

  const saveApplication = (app: BusinessApplication) => {
    setApplication(app);
  };

  const handleStep1Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName.trim() || !email.trim() || !phoneNumber || !isValidPhoneNumber(phoneNumber)) return;
    if (!emailVerified) return;
    setSubmitting(true);

    try {
      // Send business info to backend via the update-profile proxy
      // The cookie is automatically included by the browser
      const updateRes = await fetch('/api/business/update-profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          business_name: businessName,
          product_name: products.join(', '),
          phone: phoneNumber,
          website: businessUrl,
        }),
      });

      if (!updateRes.ok) {
        const err = await updateRes.json().catch(() => ({}));
        alert(err.error || 'Failed to save business info. Please try again.');
        return;
      }
    } catch {
      alert('Network error. Please check your connection and try again.');
      return;
    } finally {
      setSubmitting(false);
    }

    const newApp: BusinessApplication = {
      id: `BIZ-${Date.now()}`, step: 2, status: 'approved',
      businessName, businessUrl, phoneNumber, submittedAt: new Date().toISOString(),
      products, email, phoneVerified, emailVerified,
    };
    saveApplication(newApp);
    goToStep(2);
  };

  const handleRazorpayPayment = async (selectedBillingCycle: BillingCycle = billingCycle) => {
    setPaymentProcessing(true);
    setBillingCycle(selectedBillingCycle);

    try {
      // Step 1 Load Razorpay checkout script
      const loadScript = () =>
        new Promise<boolean>((resolve) => {
          if ((window as RazorpayWindow).Razorpay) { resolve(true); return; }
          const script = document.createElement('script');
          script.src = 'https://checkout.razorpay.com/v1/checkout.js';
          script.onload = () => resolve(true);
          script.onerror = () => resolve(false);
          document.body.appendChild(script);
        });
      const loaded = await loadScript();
      if (!loaded) {
        setPaymentProcessing(false);
        alert('Failed to load payment gateway. Please try again.');
        return;
      }
      const selectedPlan = plans.find(p => normalizeBillingCycle(p.billing_cycle) === selectedBillingCycle && p.amount > 0)
        ?? plans.find(p => normalizeBillingCycle(p.billing_cycle) === selectedBillingCycle);

      if (!selectedPlan) {
        setPaymentProcessing(false);
        alert('Selected plan is not available right now. Please try again shortly.');
        return;
      }

      const existingSubscriptionId = existingSubId ?? application?.subscriptionId ?? null;
      const hasExistingSubscription = Boolean(subscriptionPaid);
      if (hasExistingSubscription && !existingSubscriptionId) {
        setPaymentProcessing(false);
        alert('Could not find your current subscription ID. Please refresh and try again.');
        return;
      }

      const payload = {
        plan_id: selectedPlan.plan_id,
        // plan_id: "plan_SbLmuVh6kGd3IW",
        ...(hasExistingSubscription ? { subscription_id: existingSubscriptionId } : {}),
        total_count: selectedPlan.total_count,
        customer_notify: hasExistingSubscription ? 1 : true,
        customer_email: email,
        ...(hasExistingSubscription ? { customer_name: businessName } : { businessName: businessName }),
        customer_phone: phoneNumber,
        notes: {
          "business_user_id": profile?.business_user_id,
          "source": "rakshaai_website"
        }
      }
      console.log(hasExistingSubscription ? 'Upgrading subscription with payload:' : 'Creating subscription with payload:', payload);
      // Step 2 Create or upgrade subscription server-side (keeps Key Secret safe)
      const res = await fetch(hasExistingSubscription ? '/api/razorpay/upgrade-subscription' : '/api/razorpay/create-subscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },

        body: JSON.stringify(payload)
      });

      const { subscriptionId, shortUrl, error } = await res.json();

      if (!res.ok || (!subscriptionId && !shortUrl)) {
        setPaymentProcessing(false);
        alert(error || (hasExistingSubscription ? 'Could not change plan. Please try again.' : 'Could not create subscription. Please try again.'));
        return;
      }

      const selectedPlanPrice = Math.round(parseFloat(selectedPlan.price_excluding_gst));
      const checkoutDescription = selectedBillingCycle === 'annually'
        ? `Business Verification Certificate ₹${selectedPlanPrice}/year`
        : selectedBillingCycle === 'quarterly'
          ? `Business Verification Certificate ₹${selectedPlanPrice}/quarter`
          : `Business Verification Certificate ₹${selectedPlanPrice}/month`;

      // Step 3 Open Razorpay checkout with subscription_id (auto-pay enabled)
      const options: RazorpayOptions = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        subscription_id: subscriptionId,   // ← this activates recurring auto-debit
        name: 'RakshaAI',
        description: checkoutDescription,
        image: '/rakshaai-logo.svg',
        handler: async (response) => {
          // Called after the first payment is successfully authorised by Razorpay
          // Verify via server-side proxy keeps X-API-KEY off the browser
          try {
            const verifyRes = await fetch('/api/razorpay/verify-payment', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_subscription_id: response.razorpay_subscription_id,
                razorpay_signature: response.razorpay_signature,
                ...(hasExistingSubscription ? { previous_subscription_id: existingSubscriptionId } : {}),
              }),
            });

            const verifyData = await verifyRes.json();

            if (!verifyRes.ok) {
              console.error('Payment verification failed:', verifyData);
              alert('Payment received but verification failed. Please contact support with your payment ID: ' + response.razorpay_payment_id);
              return;
            }
          } catch (err) {
            console.error('Verification call error:', err);
            // Don't block the user payment was taken, backend can reconcile later
          }

          setSubscriptionPaid(true);
          const updated = application
            ? {
              ...application,
              step: 3,
              subscriptionPaid: true,
              subscriptionId: response.razorpay_subscription_id,
            }
            : {
              id: `BIZ-${Date.now()}`,
              step: 3,
              status: 'pending' as const,
              businessName, businessUrl, phoneNumber,
              submittedAt: new Date().toISOString(),
              products, email, phoneVerified, emailVerified,
              subscriptionPaid: true,
              subscriptionId: response.razorpay_subscription_id,
            };
          setExistingSubId(response.razorpay_subscription_id);
          setExistingPlan(selectedBillingCycle);
          setExistingPlanId(selectedPlan.id);
          saveApplication(updated);
          goToStep(3);
        },
        prefill: { name: businessName, email, contact: phoneNumber },
        theme: { color: '#4F46E5' },
        modal: { ondismiss: () => setPaymentProcessing(false) },
        notes: { businessName, applicationId: application?.id || '' },
      };

      if (subscriptionId) {
        const rzp = new (window as any).Razorpay(options);
        rzp.open();
      } else if (shortUrl) {
        window.location.href = shortUrl;
      }
    } catch (err) {
      console.error('Payment error:', err);
      alert('Something went wrong. Please try again.');
    } finally {
      setPaymentProcessing(false);
    }
  };

  const handleVerifyGST = async () => {
    if (!gstNumber.trim() || gstNumber.length < 15) return;
    setGstVerifying(true);
    setGstError('');
    setGstData(null);
    try {
      const res = await fetch('/api/business/verify-gst', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ gstin: gstNumber }),
      });
      const data = await res.json();
      if (!res.ok || !data.verified) {
        setGstError(data.error || 'GST verification failed. Please check the number and try again.');
        return;
      }
      setGstData({
        businessName: data.businessName,
        tradeName: data.tradeName,
        status: data.status,
        businessType: data.businessType,
        registrationDate: data.registrationDate,
        lastUpdated: data.lastUpdated,
        natureOfBusiness: data.natureOfBusiness,
        address: data.address,
        state: data.state,
        stateCode: data.stateCode,
      });
      setGstVerified(true);
    } catch {
      setGstError('Network error. Please check your connection and try again.');
    } finally {
      setGstVerifying(false);
    }
  };

  const handleStep2Continue = () => {
    if (!gstVerified || !application) return;
    const nextStep = 4;
    const updated = { ...application, gstNumber, gstVerified: true, step: nextStep };
    saveApplication(updated);
    goToStep(nextStep);
  };

  const handleSkipGst = () => {
    // Allow businesses without GST (below threshold) to skip this step and continue
    const nextStep = 4;
    const updated = application
      ? { ...application, gstNumber, gstVerified: false, step: nextStep }
      : {
        id: `BIZ-${Date.now()}`,
        step: nextStep,
        status: 'pending' as const,
        businessName,
        businessUrl,
        phoneNumber,
        submittedAt: new Date().toISOString(),
        products,
        email,
        phoneVerified,
        emailVerified,
        gstNumber,
        gstVerified: false,
      };
    saveApplication(updated);
    goToStep(nextStep);
  };

  const handleSendOTP = async () => {
    const raw = aadhaarNumber.replace(/\s/g, '');
    if (raw.length !== 12) return;
    setSendingOtp(true);
    setAadhaarError('');
    try {
      const res = await fetch('/api/business/verify-aadhaar/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ aadhaar_number: raw }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        setAadhaarError(data.error || 'Failed to send OTP. Please try again.');
        return;
      }
      setAadhaarReferenceId(data.reference_id);
      setOtpSent(true);
    } catch {
      setAadhaarError('Network error. Please check your connection.');
    } finally {
      setSendingOtp(false);
    }
  };

  const handleVerifyOTP = async () => {
    if (otp.length < 6) return;
    setVerifyingOtp(true);
    setAadhaarError('');
    try {
      const res = await fetch('/api/business/verify-aadhaar/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          aadhaar_number: aadhaarNumber.replace(/\s/g, ''),
          reference_id: String(aadhaarReferenceId),
          otp,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.verified) {
        setAadhaarError(data.error || 'Invalid OTP. Please try again.');
        return;
      }
      setAadhaarData({
        name: data.name,
        gender: data.gender,
        dateOfBirth: data.dateOfBirth,
        yearOfBirth: data.yearOfBirth,
        careOf: data.careOf,
        fullAddress: data.fullAddress,
        address: data.address,
        photo: data.photo,
        status: data.status,
      });
      setAadhaarVerified(true);
    } catch {
      setAadhaarError('Network error. Please check your connection.');
    } finally {
      setVerifyingOtp(false);
    }
  };

  const handleVerifyPAN = async () => {
    const rawPan = panNumber.replace(/\s/g, '').toUpperCase();
    if (rawPan.length !== 10 || !panName.trim() || !panDob.trim()) return;
    setPanVerifying(true);
    setPanError('');
    try {
      const res = await fetch('/api/business/verify-pan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pan: rawPan,
          name_as_per_pan: panName.trim(),
          date_of_birth: panDob.trim(),
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.verified) {
        setPanError(data.error || 'PAN verification failed. Please check your details.');
        return;
      }
      setPanData({
        pan: data.pan,
        status: data.status,
        remarks: data.remarks,
        nameMatch: data.nameMatch,
        dobMatch: data.dobMatch,
        category: data.category,
        aadhaarSeedingStatus: data.aadhaarSeedingStatus,
      });
      setPanVerified(true);
    } catch {
      setPanError('Network error. Please check your connection.');
    } finally {
      setPanVerifying(false);
    }
  };

  const handleVerifyBank = async () => {
    if (!bankAccount.trim() || bankIfsc.trim().length < 11) return;
    setBankVerifying(true);
    setBankError('');
    try {
      const res = await fetch('/api/business/verify-bank-account', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          account_number: bankAccount.trim(),
          ifsc: bankIfsc.trim().toUpperCase(),
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.accountExists) {
        setBankError(data.error || 'Bank account not found. Please check the details.');
        return;
      }
      setBankData({
        accountNumber: data.accountNumber,
        ifsc: data.ifsc,
        accountExists: data.accountExists,
        nameAtBank: data.nameAtBank,
        message: data.message,
      });
      setBankVerified(true);
    } catch {
      setBankError('Network error. Please check your connection.');
    } finally {
      setBankVerifying(false);
    }
  };

  const handleVerifyMCA = async () => {
    const raw = mcaCin.replace(/\s/g, '').toUpperCase();
    if (raw.length < 21) return;
    setMcaVerifying(true);
    setMcaError('');
    try {
      const res = await fetch('/api/business/verify-mca', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cin: raw }),
      });
      const data = await res.json();
      if (!res.ok || data.error) {
        setMcaError(data.error || 'MCA verification failed. Please check the CIN.');
        return;
      }
      setMcaData({
        cin: data.cin,
        companyName: data.companyName,
        companyStatus: data.companyStatus,
        companyClass: data.companyClass,
        companyCategory: data.companyCategory,
        companySubCategory: data.companySubCategory,
        dateOfIncorporation: data.dateOfIncorporation,
        rocCode: data.rocCode,
        registeredState: data.registeredState,
        email: data.email,
        paidUpCapital: data.paidUpCapital,
        authorisedCapital: data.authorisedCapital,
        registeredAddress: data.registeredAddress,
      });
      setMcaVerified(true);
    } catch {
      setMcaError('Network error. Please check your connection.');
    } finally {
      setMcaVerifying(false);
    }
  };

  const handleStep3Continue = () => {
    const kycDone = gstVerified || aadhaarVerified || panVerified || bankVerified || mcaVerified;
    if (!kycDone || !application) return;
    const nextStep = isFreeUser ? 6 : 5;
    const updated = { ...application, aadhaarNumber, aadhaarVerified, step: nextStep };
    saveApplication(updated);
    goToStep(nextStep);
  };

  const handleSkipAadhaar = () => {
    // Allow users to skip Aadhaar verification and continue to document upload
    const nextStep = isFreeUser ? 6 : 5;
    const updated = application
      ? { ...application, aadhaarNumber, aadhaarVerified: false, step: nextStep }
      : {
        id: `BIZ-${Date.now()}`,
        step: nextStep,
        status: 'pending' as const,
        businessName,
        businessUrl,
        phoneNumber,
        submittedAt: new Date().toISOString(),
        products,
        email,
        phoneVerified,
        emailVerified,
        aadhaarNumber,
        aadhaarVerified: false,
      };
    saveApplication(updated);
    goToStep(nextStep);
  };

  // Phone verification (simulated)
  const handleSendPhoneOtp = async () => {
    if (!phoneNumber || !isValidPhoneNumber(phoneNumber)) return;
    setPhoneOtpSent(true);
    setPhoneOtp('');
    // simulate send
    await new Promise((r) => setTimeout(r, 900));
  };
  const handleVerifyPhoneOtp = async () => {
    if (phoneOtp.length < 4) return;
    // simulate verify
    await new Promise((r) => setTimeout(r, 900));
    setPhoneVerified(true);
  };

  // Email verification (simulated)
  const handleSendEmailOtp = async () => {
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return;
    setEmailOtpSent(true);
    setEmailOtp('');
    await new Promise((r) => setTimeout(r, 900));
  };
  const handleVerifyEmailOtp = async () => {
    if (emailOtp.length < 4) return;
    await new Promise((r) => setTimeout(r, 900));
    setEmailVerified(true);
  };

  const processFiles = (files: File[]) => {
    const mapped = files.map((f) => ({
      name: f.name,
      size: f.size > 1024 * 1024 ? `${(f.size / 1024 / 1024).toFixed(1)} MB` : `${Math.round(f.size / 1024)} KB`,
    }));
    setUploadedFiles((prev) => {
      const existing = new Set(prev.map((x) => x.name));
      return [...prev, ...mapped.filter((m) => !existing.has(m.name))];
    });
  };

  const handleDocSlot = (
    file: File,
    setter: React.Dispatch<React.SetStateAction<{ file: File | null; dataUrl: string | null; uploading: boolean; name: string; size: string }>>,
  ) => {
    const sizeStr = file.size > 1024 * 1024 ? `${(file.size / 1024 / 1024).toFixed(1)} MB` : `${Math.round(file.size / 1024)} KB`;
    // Store the raw File we'll send it as FormData, no base64 needed
    setter({ file, dataUrl: 'ready', uploading: false, name: file.name, size: sizeStr });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => processFiles(Array.from(e.target.files || []));

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    processFiles(Array.from(e.dataTransfer.files));
  };

  const removeFile = (idx: number) => setUploadedFiles((prev) => prev.filter((_, i) => i !== idx));

  const handleStep4Continue = async () => {
    // A slot counts as ready if it has a new file OR was pre-filled from the server (dataUrl === 'ready')
    const isReady = (doc: { file: File | null; dataUrl: string | null }) => !!doc.file || doc.dataUrl === 'ready';
    const hasAny = isReady(coiDoc) || isReady(panDoc) || isReady(aoaDoc) || isReady(moaDoc);
    const hasNewFiles = coiDoc.file || panDoc.file || aoaDoc.file || moaDoc.file;
    if (!hasAny || !application) return;

    setDocsSubmitting(true);
    setDocsError('');

    try {
      // Only call upload API if there are new files to send
      if (hasNewFiles) {
        const formData = new FormData();
        if (coiDoc.file) formData.append('coi', coiDoc.file);
        if (panDoc.file) formData.append('pan', panDoc.file);
        if (aoaDoc.file) formData.append('aoa', aoaDoc.file);
        if (moaDoc.file) formData.append('moa', moaDoc.file);

        const res = await fetch('/api/business/upload-documents', {
          method: 'POST',
          body: formData,
        });
        const data = await res.json();

        if (!res.ok) {
          setDocsError(data?.error || 'Document upload failed. Please try again.');
          return;
        }
      }

      setDocsSubmitted(true);
      const fileSummary = [
        (coiDoc.file || coiDoc.dataUrl) && { name: coiDoc.name, size: coiDoc.size },
        (panDoc.file || panDoc.dataUrl) && { name: panDoc.name, size: panDoc.size },
        (aoaDoc.file || aoaDoc.dataUrl) && { name: aoaDoc.name, size: aoaDoc.size },
        (moaDoc.file || moaDoc.dataUrl) && { name: moaDoc.name, size: moaDoc.size },
      ].filter(Boolean) as { name: string; size: string }[];

      const trustScore = Math.floor(Math.random() * 10) + 88;
      const updated = { ...application, documents: fileSummary, docsVerified: true, step: 6, status: 'approved' as const, trustScore };
      saveApplication(updated);
      goToStep(6);
    } catch {
      setDocsError('Network error. Please check your connection and try again.');
    } finally {
      setDocsSubmitting(false);
    }
  };

  const handleSkipDocuments = () => {
    // Allow users to skip document upload and continue to final Verified step
    const trustScore = Math.floor(Math.random() * 10) + 80;
    const updated = application
      ? { ...application, documents: uploadedFiles, docsVerified: false, step: 6, trustScore }
      : {
        id: `BIZ-${Date.now()}`,
        step: 6,
        status: 'pending' as const,
        businessName,
        businessUrl,
        phoneNumber,
        submittedAt: new Date().toISOString(),
        products,
        email,
        phoneVerified,
        emailVerified,
        documents: uploadedFiles,
        docsVerified: false,
        trustScore,
      };
    saveApplication(updated);
    goToStep(6);
  };

  const handleStartOver = () => {
    try { localStorage.removeItem('businessApplication'); } catch { /* noop */ }
    setApplication(null);
    setSubmitSuccess(false);
    setBusinessName(''); setBusinessUrl(''); setPhoneNumber('');
    setProducts([]);
    setEmail(''); setPhoneOtp(''); setPhoneOtpSent(false); setPhoneVerified(false);
    setEmailOtp(''); setEmailOtpSent(false); setEmailVerified(false);
    setGstNumber(''); setGstVerified(false);
    setAadhaarNumber(''); setOtp(''); setOtpSent(false); setAadhaarVerified(false);
    setUploadedFiles([]);
    setSubscriptionPaid(false);
    setCurrentDisplayStep(1);
    setMaxReachedStep(1);
  };

  const renderStep1 = () => {
    if (application?.status === 'rejected') {
      return (
        <div className="text-center py-6">
          <div className="w-16 h-16 mx-auto mb-4 bg-red-100 dark:bg-red-950/60 rounded-2xl flex items-center justify-center">
            <X className="w-8 h-8 text-red-500" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Application Not Approved</h3>
          <p className="text-gray-500 dark:text-gray-300 text-sm mb-6 leading-relaxed">Your business application was not approved at this time. Please review your details and try again.</p>
          <button onClick={handleStartOver} className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-colors shadow-sm">
            <RefreshCw className="w-4 h-4" /> Start New Application
          </button>
        </div>
      );
    }

    if (application?.status === 'awaiting_review') {
      return (
        <div className="text-center py-8 px-2">
          {/* Animated pending icon */}
          <div className="relative w-20 h-20 mx-auto mb-5">
            <div className="w-20 h-20 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center">
              <Clock className="w-9 h-9 text-yellow-500 dark:text-yellow-300" />
            </div>
            <span className="absolute top-0 right-0 w-5 h-5 rounded-full bg-yellow-400 dark:bg-yellow-600 border-2 border-white dark:border-gray-900 animate-ping" />
            <span className="absolute top-0 right-0 w-5 h-5 rounded-full bg-yellow-400 dark:bg-yellow-600 border-2 border-white dark:border-gray-900" />
          </div>

          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Application Under Review</h3>
          <p className="text-gray-500 dark:text-gray-300 text-sm mb-6 leading-relaxed max-w-sm mx-auto">
            Your business information has been submitted successfully. Our team is reviewing your application.
            You&apos;ll be able to proceed to the next step once it&apos;s approved usually within 24 hours.
          </p>

          {/* Submitted details summary */}
          <div className="text-left bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 mb-6 space-y-3 max-w-sm mx-auto">
            {application.businessName && (
              <div className="flex items-center gap-3">
                <Building2 className="w-4 h-4 text-indigo-400 dark:text-indigo-300 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-400 dark:text-gray-500">Business Name</p>
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">{application.businessName}</p>
                </div>
              </div>
            )}
            {application.email && (
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-indigo-400 dark:text-indigo-300 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-400 dark:text-gray-500">Email</p>
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">{application.email}</p>
                </div>
              </div>
            )}
            {application.phoneNumber && (
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-indigo-400 dark:text-indigo-300 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-400 dark:text-gray-500">Phone</p>
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">{application.phoneNumber}</p>
                </div>
              </div>
            )}
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-indigo-400 dark:text-indigo-300 flex-shrink-0" />
              <div>
                <p className="text-xs text-gray-400 dark:text-gray-500">Submitted</p>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">{new Date(application.submittedAt).toLocaleString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-gray-400 dark:text-gray-500 mb-5">
            <RefreshCw className="w-3.5 h-3.5" />
            <span>This page will automatically update once your application is approved</span>
          </div>

          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-50 dark:bg-indigo-900 hover:bg-indigo-100 dark:hover:bg-indigo-800 text-indigo-700 dark:text-indigo-300 font-semibold rounded-xl text-sm transition-colors border border-indigo-200 dark:border-indigo-700"
          >
            <RefreshCw className="w-4 h-4" /> Check Status
          </button>
        </div>
      );
    }

    return (
      <form onSubmit={handleStep1Submit} className="space-y-5">
        <FormInput label="Business Name" value={businessName} onChange={(e) => setBusinessName(e.target.value)}
          placeholder="e.g. TechNova Solutions Pvt Ltd" required icon={Building2}
          hint="Enter your registered business or company name" />
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Products / Brand Names <span className="text-gray-400 dark:text-gray-500 text-xs">(optional)</span></label>
          <TagInput value={products} onChange={setProducts} placeholder="e.g. rakshaai.co, RakshaAI App" />
        </div>
        <FormInput label="Business Website" value={businessUrl} onChange={(e) => setBusinessUrl(e.target.value)}
          placeholder="https://yourbusiness.com" type="url" icon={Globe}
          hint="Your official business website or landing page (optional)" />

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1.5">Email Address <span className="text-red-500">*</span></label>
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => { if (!emailVerified) setEmail(e.target.value); }}
              placeholder="you@company.com"
              readOnly={emailVerified}
              className={`w-full pl-4 pr-28 py-3 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-900 ${emailVerified ? 'bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 cursor-not-allowed' : 'bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100'} placeholder-gray-400 dark:placeholder-gray-500 text-sm transition-all duration-150`}
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
              {emailVerified ? (
                <span className="text-sm px-3 py-1 rounded-full bg-green-50 dark:bg-green-900 text-green-700 dark:text-green-400">Verified</span>
              ) : (
                <button type="button" onClick={handleSendEmailOtp} disabled={emailOtpSent || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)}
                  className="px-3 py-1 text-sm bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl disabled:opacity-50">{emailOtpSent ? 'Code Sent' : 'Send Code'}</button>
              )}
            </div>
          </div>
          {emailOtpSent && !emailVerified && (
            <div className="mt-3">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1.5">Enter Email Code</label>
              <div className="flex items-center gap-3">
                <OTPInput value={emailOtp} onChange={setEmailOtp} />
                <button onClick={handleVerifyEmailOtp} disabled={emailOtp.length < 4}
                  className="px-3 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm">Verify</button>
              </div>
            </div>
          )}
          {!emailVerified && (
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">We&apos;ll send a verification code to this email.</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1.5">Contact Phone Number <span className="text-red-500">*</span></label>
          <CountryPhoneInput
            value={phoneNumber}
            onChange={(val) => setPhoneNumber(val || '')}
            placeholder="Enter phone number"
            defaultCountry="IN"
          />
          <div className="flex items-start gap-2 mt-2">
            <AlertCircle className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-amber-700 dark:text-amber-300 leading-relaxed">Please provide a valid phone number an incorrect number may hamper your business certification process.</p>
          </div>
        </div>
        <div className="flex items-start gap-2 p-3 bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900 rounded-xl">
          <AlertCircle className="w-4 h-4 text-blue-500 dark:text-blue-400 mt-0.5 flex-shrink-0" />
          <p className="text-xs text-blue-700 dark:text-blue-300 leading-relaxed">By submitting, you agree to our verification process. Your information is encrypted and securely stored.</p>
        </div>
        <button type="submit" disabled={submitting || !businessName.trim() || !email.trim() || !emailVerified || !phoneNumber || !isValidPhoneNumber(phoneNumber)}
          className="w-full flex items-center justify-center gap-2 py-3.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-sm">
          {submitting ? <><Loader2 className="w-4 h-4 animate-spin" />Submitting Application...</> : <>Submit Application <ArrowRight className="w-4 h-4" /></>}
        </button>
      </form>
    );
  };

  const renderSubscriptionStep = () => {
    // Derive prices from fetched plans, fall back to hardcoded defaults
    const freePlan = plans.find(p => p.amount === 0 || p.plan_id.toLowerCase().includes('free'));
    const monthlyPlan = plans.find(p => normalizeBillingCycle(p.billing_cycle) === 'monthly' && p.amount > 0);
    const quarterlyPlan = plans.find(p => normalizeBillingCycle(p.billing_cycle) === 'quarterly' && p.amount > 0);
    const annualPlan = plans.find(p => normalizeBillingCycle(p.billing_cycle) === 'annually' && p.amount > 0);

    const freePrice = freePlan ? Math.round(parseFloat(freePlan.price_excluding_gst)) : 0;
    const freeTitle = freePlan?.name?.replace(/\s*Plan$/i, '') || 'Free';
    const freeDescription = freePlan?.description || 'Basic listing with no verification badge';
    const monthlyPrice = monthlyPlan ? Math.round(parseFloat(monthlyPlan.price_excluding_gst)) : 299;
    const monthlyTotal = monthlyPlan ? Math.round(parseFloat(monthlyPlan.total_price)) : 353;
    const quarterlyPrice = quarterlyPlan ? Math.round(parseFloat(quarterlyPlan.price_excluding_gst)) : monthlyPrice * 3;
    const quarterlyTotal = quarterlyPlan ? Math.round(parseFloat(quarterlyPlan.total_price)) : monthlyTotal * 3;
    const quarterlyPerMonth = Math.round(quarterlyPrice / 3);
    const annualPrice = annualPlan ? Math.round(parseFloat(annualPlan.price_excluding_gst)) : 2999;
    const annualTotal = annualPlan ? Math.round(parseFloat(annualPlan.total_price)) : 3539;
    const annualPerMonth = Math.round(annualPrice / 12);
    const savingsPerQuarter = (monthlyPrice * 3) - quarterlyPrice;
    const savingsPerYear = (monthlyPrice * 12) - annualPrice;
    const freeFeatures = [
      { text: 'Basic business listing', included: true },
      { text: 'Public profile page', included: true },
      { text: 'Verified badge', included: false },
      { text: 'Priority search ranking', included: false },
      { text: 'Trust analytics report', included: false },
      { text: 'Certificate download', included: false },
    ];
    const paidFeatures = [
      'Basic business listing',
      'Public profile page',
      'Verified badge on profile',
      'Priority search ranking',
      'Monthly trust analytics',
      'Certificate download',
    ];
    const paidPlans: Array<{
      cycle: BillingCycle;
      planDbId?: number | string;
      title: string;
      description: string;
      price: number;
      priceSuffix: string;
      billingNote: string;
      badge?: string;
      highlighted?: boolean;
    }> = [
      {
        cycle: 'monthly',
        planDbId: monthlyPlan?.id,
        title: 'Monthly',
        description: 'Full verification with monthly billing',
        price: monthlyPrice,
        priceSuffix: 'per month',
        billingNote: `Billed ₹${monthlyTotal}/month incl. GST · Cancel anytime`,
      },
      {
        cycle: 'quarterly',
        planDbId: quarterlyPlan?.id,
        title: 'Quarterly',
        description: 'Full verification with quarterly billing',
        price: quarterlyPerMonth,
        priceSuffix: 'per month',
        billingNote: `Billed ₹${quarterlyTotal}/quarter incl. GST${savingsPerQuarter > 0 ? ` · Save ₹${savingsPerQuarter}/quarter` : ''}`,
        badge: savingsPerQuarter > 0 ? `Save ₹${savingsPerQuarter}` : undefined,
      },
      {
        cycle: 'annually',
        planDbId: annualPlan?.id,
        title: 'Annual',
        description: 'Full verification with yearly billing',
        price: annualPerMonth,
        priceSuffix: 'per month',
        billingNote: `Billed ₹${annualPrice}/year · Save ₹${savingsPerYear}/year (+ ₹${annualTotal - annualPrice} GST)`,
        badge: 'Most Popular',
        highlighted: true,
      },
    ];

    // ── Loading state while checking subscription ───────────────────────────
    if (subStatusLoading) {
      return (
        <div className="flex flex-col items-center justify-center py-16 gap-4">
          <Loader2 className="w-8 h-8 text-indigo-500 animate-spin" />
          <p className="text-sm text-gray-500 dark:text-gray-300 font-medium">Checking your subscription status…</p>
        </div>
      );
    }

    const activePaidPlan = subscriptionPaid ? existingPlan : null;
    const activePlanId = subscriptionPaid && existingPlanId !== null && existingPlanId !== undefined
      ? String(existingPlanId)
      : null;
    return (
      <div className="space-y-6">

        {/* ── Header ── */}
        <div className="text-center pb-1">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">Choose Your Plan</h3>
          <p className="text-sm text-gray-500 dark:text-gray-300">Start free or unlock full verification with a paid plan</p>
        </div>

        {/* ── Plan Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
          {/* Free */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-2xl p-4 bg-white dark:bg-gray-950 flex flex-col">
            <p className="text-base font-bold text-gray-900 dark:text-gray-100 mb-0.5">{freeTitle}</p>
            <p className="text-xs text-gray-500 dark:text-gray-300 mb-4 leading-snug">{freeDescription}</p>
            <div className="mb-4">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black text-gray-900 dark:text-gray-100">₹{freePrice}</span>
              </div>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                {freePlan?.total_count === 0 ? 'Forever free' : `${freePlan?.interval_count ?? 1} ${freePlan?.interval ?? 'month'}`}
              </p>
            </div>
            <div className="space-y-2 mb-5 flex-1">
              {freeFeatures.map(({ text, included }) => (
                <div key={text} className="flex items-center gap-2">
                  {included ? (
                    <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                  ) : (
                    <X className="w-3.5 h-3.5 text-gray-300 dark:text-gray-700 flex-shrink-0" />
                  )}
                  <span className={`text-xs ${included ? 'text-gray-700 dark:text-gray-200' : 'text-gray-400 dark:text-gray-500'}`}>{text}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 dark:text-gray-500 mb-3">No payment required</p>
            <button
              onClick={() => { setIsFreeUser(true); goToStep(3); }}
              className="w-full py-2.5 text-sm font-semibold border-2 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-200 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-xl transition-colors"
            >
              Continue Free
            </button>
          </div>

          {paidPlans.map((plan) => {
            const isCurrentPlan = activePlanId && plan.planDbId !== undefined
              ? activePlanId === String(plan.planDbId)
              : activePaidPlan === plan.cycle;

            return (
              <div
                key={plan.cycle}
                className={`relative rounded-2xl p-4 bg-white dark:bg-gray-950 flex flex-col ${isCurrentPlan
                  ? 'border-2 border-green-500 dark:border-green-600 shadow-lg shadow-green-100 dark:shadow-green-900/20'
                  : plan.highlighted
                    ? 'border-2 border-indigo-500 dark:border-indigo-700 shadow-lg shadow-indigo-100 dark:shadow-indigo-900/30'
                    : 'border border-gray-200 dark:border-gray-700'
                  }`}
              >
                {(isCurrentPlan || plan.badge) && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className={`${isCurrentPlan ? 'bg-green-600 text-white' : plan.highlighted ? 'bg-indigo-600 text-white' : 'bg-green-50 dark:bg-green-950/50 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800'} text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap`}>
                      {isCurrentPlan ? 'Current Plan' : plan.badge}
                    </span>
                  </div>
                )}
                <p className={`text-base font-bold text-gray-900 dark:text-gray-100 mb-0.5 ${(isCurrentPlan || plan.badge) ? 'mt-2' : ''}`}>{plan.title}</p>
                <p className="text-xs text-gray-500 dark:text-gray-300 mb-4 leading-snug">{plan.description}</p>
                <div className="mb-4">
                  {plan.cycle === 'annually' && <p className="text-xs text-gray-400 dark:text-gray-500 line-through">₹{monthlyPrice}/mo</p>}
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-gray-900 dark:text-gray-100">₹{plan.price}</span>
                    <span className="text-gray-400 dark:text-gray-500 text-sm">{plan.priceSuffix}</span>
                  </div>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{plan.billingNote}</p>
                </div>
                <div className="space-y-2 mb-5 flex-1">
                  {paidFeatures.map((text) => (
                    <div key={text} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                      <span className="text-xs text-gray-700 dark:text-gray-200">{text}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-400 dark:text-gray-500 mb-3">Wallet charges may apply as per Paid API</p>
                <button
                  onClick={() => handleRazorpayPayment(plan.cycle)}
                  disabled={paymentProcessing || isCurrentPlan}
                  className={`w-full flex items-center justify-center gap-2 py-2.5 text-sm font-bold rounded-xl transition-colors disabled:cursor-not-allowed ${isCurrentPlan
                    ? 'bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800'
                    : 'bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white'
                    }`}
                >
                  {isCurrentPlan
                    ? <><CheckCircle className="w-3.5 h-3.5" />Current Plan</>
                    : paymentProcessing && billingCycle === plan.cycle
                      ? <><Loader2 className="w-3.5 h-3.5 animate-spin" />Processing...</>
                      : activePaidPlan
                        ? 'Upgrade Plan'
                        : 'Select'}
                </button>
              </div>
            );
          })}
        </div>

        {/* ── SSL note ── */}
        <div className="flex items-center justify-center gap-2 text-xs text-gray-400 dark:text-gray-500">
          <Lock className="w-3.5 h-3.5" />
          <span>256-bit SSL secured · Powered by Razorpay · Cancel anytime</span>
        </div>

        {/* ════════════════════════════════════════
            BLOG-STYLE BENEFITS SECTION
        ════════════════════════════════════════ */}
        <div className="border-t border-gray-100 dark:border-gray-800 pt-6 space-y-8">

          {/* Section heading */}
          <div>
            <p className="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-1">Why go Verified?</p>
            <h4 className="text-lg font-extrabold text-gray-900 dark:text-gray-100 leading-tight">
              Everything a verified business owner gets explained
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-300 mt-1 leading-relaxed">
              The RakshaAI Verified plan is more than a badge. Here is a complete breakdown of what you unlock and why it matters for your business.
            </p>
          </div>

          {/* ── Benefit 1: Verified Badge ── */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center flex-shrink-0">
                <BadgeCheck className="w-4 h-4 text-indigo-600 dark:text-indigo-300" />
              </div>
              <h5 className="text-sm font-bold text-gray-900 dark:text-gray-100">1. RakshaAI Verified Badge</h5>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed pl-10">
              Once verified, your business profile, search result card, and public listing all display the official <strong className="text-indigo-600 dark:text-indigo-300">RakshaAI Verified</strong> badge a visual trust signal that instantly tells customers you are a legitimate, fraud-free business.
            </p>
            <div className="ml-10 bg-indigo-50 dark:bg-indigo-950 border border-indigo-100 dark:border-indigo-800 rounded-xl p-3.5">
              <p className="text-xs font-semibold text-indigo-700 dark:text-indigo-300 mb-2">What this means for you:</p>
              <ul className="space-y-1.5">
                {[
                  'Customers can see at a glance that your business is safe to deal with',
                  'Reduces customer hesitation especially for first-time buyers',
                  'Badge appears on every RakshaAI page that lists your business',
                ].map((pt) => (
                  <li key={pt} className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-indigo-400 dark:text-indigo-300 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-indigo-700 dark:text-indigo-200">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Benefit 2: Verified Certificate ── */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-amber-100 dark:bg-amber-950/60 flex items-center justify-center flex-shrink-0">
                <Award className="w-4 h-4 text-amber-600 dark:text-amber-300" />
              </div>
              <h5 className="text-sm font-bold text-gray-900 dark:text-gray-100">2. Digitally Signed Verified Certificate</h5>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed pl-10">
              After completing all verification steps, you receive a <strong>digitally signed RakshaAI Verified Certificate</strong> a legal-grade document that consolidates your GST registration, Aadhaar KYC, uploaded business documents, and your official trust score into one shareable PDF.
            </p>
            <div className="ml-10 grid grid-cols-2 gap-2">
              {[
                { icon: FileText, title: 'GST & KYC details', desc: 'Your verified registration and identity records are embedded in the certificate' },
                { icon: ShieldCheck, title: 'Official trust score', desc: 'Your RakshaAI trust score is printed and updated with every renewal' },
                { icon: Globe, title: 'Display on website', desc: 'Embed a live certificate widget or link directly on your own website' },
                { icon: Zap, title: 'Instant PDF download', desc: 'Download anytime from your dashboard and share in proposals or emails' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-amber-50 dark:bg-amber-950/40 border border-amber-100 dark:border-amber-800 rounded-xl p-3">
                  <div className="flex items-center gap-1.5 mb-1">
                    <Icon className="w-3.5 h-3.5 text-amber-600 dark:text-amber-300 flex-shrink-0" />
                    <p className="text-xs font-bold text-amber-900 dark:text-amber-200">{title}</p>
                  </div>
                  <p className="text-xs text-amber-700 dark:text-amber-300 leading-snug">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Benefit 3: Priority Search Ranking ── */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-green-100 dark:bg-green-950/60 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-300" />
              </div>
              <h5 className="text-sm font-bold text-gray-900 dark:text-gray-100">3. Priority Search Ranking</h5>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed pl-10">
              RakshaAI search results rank verified businesses above unverified ones. When someone searches for a business in your category or by name, your profile appears higher putting you in front of more potential customers every day.
            </p>
            <div className="ml-10 flex items-start gap-3 bg-green-50 dark:bg-green-950/40 border border-green-100 dark:border-green-800 rounded-xl p-3.5">
              <Sparkles className="w-4 h-4 text-green-500 dark:text-green-300 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-green-800 dark:text-green-200 leading-relaxed">
                <strong>Verified businesses are featured</strong> in the &quot;Trusted Businesses&quot; section on the RakshaAI homepage, scam alerts, and city-level safety pages giving you organic visibility that unverified businesses simply cannot get.
              </p>
            </div>
          </div>

          {/* ── Benefit 4: Monthly Trust Score Report ── */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-violet-100 dark:bg-violet-950/60 flex items-center justify-center flex-shrink-0">
                <Star className="w-4 h-4 text-violet-600 dark:text-violet-300" />
              </div>
              <h5 className="text-sm font-bold text-gray-900 dark:text-gray-100">4. Monthly Trust Score Analytics Report</h5>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed pl-10">
              Every month you receive a detailed report showing how your trust score has changed, what customers are saying, how many profile visits you received, and whether any new signals (positive or negative) have been detected about your business.
            </p>
            <div className="ml-10 space-y-2">
              {[
                { label: 'Profile views & searches', desc: 'See how many people looked up your business each month' },
                { label: 'Review sentiment breakdown', desc: 'Understand whether customer reviews are trending positively or negatively' },
                { label: 'Trust score change history', desc: 'Track your score over time and see what actions improved it' },
                { label: 'Scam signal monitoring', desc: 'Be alerted if any scam reports or suspicious patterns are detected' },
              ].map(({ label, desc }) => (
                <div key={label} className="flex items-start gap-2.5 p-3 bg-violet-50 dark:bg-violet-950/40 border border-violet-100 dark:border-violet-800 rounded-xl">
                  <CheckCircle className="w-3.5 h-3.5 text-violet-400 dark:text-violet-300 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-violet-900 dark:text-violet-200">{label}</p>
                    <p className="text-xs text-violet-700 dark:text-violet-300 mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Benefit 5: Scam Protection & Alerts ── */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-red-100 dark:bg-red-950/60 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-4 h-4 text-red-500 dark:text-red-300" />
              </div>
              <h5 className="text-sm font-bold text-gray-900 dark:text-gray-100">5. Scam Protection & Real-Time Alerts</h5>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed pl-10">
              Fraudsters sometimes impersonate legitimate businesses. As a verified business, you get real-time alerts if someone files a false scam report against your business so you can respond quickly and protect your reputation before it spreads.
            </p>
            <div className="ml-10 bg-red-50 dark:bg-red-950/40 border border-red-100 dark:border-red-800 rounded-xl p-3.5">
              <p className="text-xs font-semibold text-red-700 dark:text-red-300 mb-2">You are protected from:</p>
              <ul className="space-y-1.5">
                {[
                  'False or malicious scam reports filed by competitors',
                  'Impersonation attempts using your business name',
                  'Unverified negative reviews that hurt your score',
                ].map((pt) => (
                  <li key={pt} className="flex items-start gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-red-400 dark:text-red-300 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-red-700 dark:text-red-200">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Benefit 6: Website Trust Badge ── */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-blue-100 dark:bg-blue-950/60 flex items-center justify-center flex-shrink-0">
                <Globe className="w-4 h-4 text-blue-600 dark:text-blue-300" />
              </div>
              <h5 className="text-sm font-bold text-gray-900 dark:text-gray-100">6. Embeddable Website Trust Badge</h5>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed pl-10">
              Get a live embeddable badge widget to place on your own website so your customers can see your RakshaAI trust score and verified status without ever leaving your site. The badge updates in real time as your score changes.
            </p>
            <div className="ml-10 flex items-start gap-3 bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-800 rounded-xl p-3.5">
              <Zap className="w-4 h-4 text-blue-500 dark:text-blue-300 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-blue-800 dark:text-blue-200 leading-relaxed">
                Copy-paste one line of HTML to add the badge to any website works with Shopify, WordPress, Wix, and any custom-built site.
              </p>
            </div>
          </div>

          {/* ── Benefit 7: Dedicated Priority Support ── */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-teal-100 dark:bg-teal-950/60 flex items-center justify-center flex-shrink-0">
                <Users className="w-4 h-4 text-teal-600 dark:text-teal-300" />
              </div>
              <h5 className="text-sm font-bold text-gray-900 dark:text-gray-100">7. Dedicated Priority Support</h5>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed pl-10">
              Verified business owners get access to a dedicated support channel with faster response times. Whether it is a technical issue with your verification, a question about your trust score, or help disputing a false report you jump the queue.
            </p>
          </div>

          {/* ── Stats bar ── */}
          <div className="grid grid-cols-3 gap-3 pt-2">
            {[
              {
                value: '10K+',
                label: 'Verified Businesses',
                cardClass: 'bg-indigo-50 dark:bg-indigo-950/40 border-indigo-100 dark:border-indigo-800',
                valueClass: 'text-indigo-600 dark:text-indigo-300',
                labelClass: 'text-indigo-700 dark:text-indigo-200',
              },
              {
                value: '3×',
                label: 'Avg. Conversion Lift',
                cardClass: 'bg-green-50 dark:bg-green-950/40 border-green-100 dark:border-green-800',
                valueClass: 'text-green-600 dark:text-green-300',
                labelClass: 'text-green-700 dark:text-green-200',
              },
              {
                value: '4.9★',
                label: 'Avg. Trust Score',
                cardClass: 'bg-amber-50 dark:bg-amber-950/40 border-amber-100 dark:border-amber-800',
                valueClass: 'text-amber-600 dark:text-amber-300',
                labelClass: 'text-amber-700 dark:text-amber-200',
              },
            ].map(({ value, label, cardClass, valueClass, labelClass }) => (
              <div key={label} className={`text-center p-3 rounded-xl border ${cardClass}`}>
                <p className={`text-xl font-black ${valueClass}`}>{value}</p>
                <p className={`text-xs ${labelClass} mt-0.5 leading-tight`}>{label}</p>
              </div>
            ))}
          </div>

          {/* ── Bottom CTA repeat ── */}
          {/* <div className="bg-gradient-to-br from-indigo-600 to-violet-600 rounded-2xl p-5 text-white text-center space-y-3">
            <p className="text-base font-extrabold">Ready to get verified?</p>
            <p className="text-xs text-indigo-200 leading-relaxed">
              Join 10,000+ businesses that trust RakshaAI verification to grow faster, win more customers, and stay protected.
            </p>
            <button
              onClick={handleRazorpayPayment}
              disabled={paymentProcessing}
              className="w-full flex items-center justify-center gap-2 py-3 bg-white hover:bg-indigo-50 disabled:opacity-50 text-indigo-700 text-sm font-extrabold rounded-xl transition-colors"
            >
              {paymentProcessing ? (
                <><Loader2 className="w-4 h-4 animate-spin" />Processing...</>
              ) : (
                <><CreditCard className="w-4 h-4" />Pay ₹{displayPrice}/month &amp; Get Verified</>
              )}
            </button>
            <p className="text-xs text-indigo-300">Cancel anytime · 256-bit SSL secured</p>
          </div> */}

        </div>
        {/* ── END BLOG BENEFITS ── */}

        {/* ⚠️ TEMP TEST BUTTON remove before production */}
        {/* <button
          onClick={async () => {
            try {
              const res = await fetch('/api/razorpay/verify-payment', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  razorpay_payment_id: 'pay_SbNFA9E7AuLnXg',
                  razorpay_subscription_id: 'sub_SbNEqjpTW2V2Nc',
                  razorpay_signature: '5bd02ab789aaec47188a9647172d495840758f45a100b63be2b9ca8c02fc4c4f',
                }),
              });
              const data = await res.json();
              console.log('✅ verify-first-payment response:', data);
              alert(`Status: ${res.status}\n\n${JSON.stringify(data, null, 2)}`);
            } catch (err) {
              console.error('❌ verify-first-payment error:', err);
              alert('Error: ' + String(err));
            }
          }}
          className="w-full py-2.5 text-xs font-semibold border border-dashed border-orange-300 text-orange-500 bg-orange-50 hover:bg-orange-100 rounded-xl transition-colors"
        >
          🧪 [TEST] Verify First Payment
        </button> */}
      </div>
    );
  };

  const renderStep2 = () => (
    <div className="space-y-5">
      <div className="p-4 bg-indigo-50 dark:bg-indigo-950 border border-indigo-100 dark:border-indigo-800 rounded-xl">
        <p className="text-xs font-semibold text-indigo-700 dark:text-indigo-300 mb-0.5">Why GST Verification?</p>
        <p className="text-xs text-indigo-600 dark:text-indigo-200 leading-relaxed">GST verification confirms your business is legally registered in India, increasing your trust score significantly.</p>
      </div>

      {/* GST Input */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1.5">GST Number <span className="text-red-500">*</span></label>
        <div className="relative">
          <CreditCard className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500 pointer-events-none" />
          <input
            type="text"
            value={gstNumber}
            onChange={(e) => {
              setGstVerified(false);
              setGstData(null);
              setGstError('');
              setGstNumber(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 15));
            }}
            placeholder="22AAAAA0000A1Z5"
            maxLength={15}
            className="w-full pl-10 pr-10 py-3 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 font-mono text-sm tracking-wider transition-all hover:border-gray-300 dark:hover:border-gray-600"
          />
          {gstVerified && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <CheckCircle className="w-4 h-4 text-green-500" />
            </div>
          )}
        </div>
        <p className="text-xs text-gray-400 dark:text-gray-500 mt-1.5">15-character alphanumeric GST identification number</p>
      </div>

      {/* Error */}
      {gstError && (
        <div className="flex items-start gap-2.5 p-3.5 bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-700 rounded-xl">
          <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
          <p className="text-xs text-red-700 dark:text-red-300 leading-relaxed">{gstError}</p>
        </div>
      )}

      {/* Verify button */}
      <button
        onClick={handleVerifyGST}
        disabled={gstVerifying || gstVerified || gstNumber.length < 15}
        className={`w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${gstVerified
          ? 'bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-700 cursor-default'
          : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm disabled:opacity-40 disabled:cursor-not-allowed'
          }`}
      >
        {gstVerifying
          ? <span className="flex items-center justify-center gap-2"><Loader2 className="w-4 h-4 animate-spin" />Verifying with GSTIN...</span>
          : gstVerified
            ? <span className="flex items-center justify-center gap-2"><CheckCircle className="w-4 h-4" />GST Verified Successfully</span>
            : 'Verify GST Number'}
      </button>

      {/* Rich verification result card */}
      {gstVerified && gstData && (
        <div className="border border-green-200 dark:border-green-700 rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 dark:from-green-700 dark:to-emerald-800 px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-bold text-white truncate">{gstData.businessName || gstData.tradeName}</p>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="font-mono text-xs text-green-100">{gstNumber}</span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${gstData.status?.toLowerCase() === 'active'
                    ? 'bg-white/20 text-white'
                    : 'bg-red-400/30 text-red-100'
                    }`}>
                    {gstData.status || 'Unknown'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Details grid */}
          <div className="bg-white dark:bg-gray-950 p-4 grid grid-cols-2 gap-3">
            {[
              { label: 'Legal Name', value: gstData.businessName },
              { label: 'Trade Name', value: gstData.tradeName || gstData.businessName },
              { label: 'Business Type', value: gstData.businessType },
              { label: 'Registration Date', value: gstData.registrationDate },
              { label: 'Last Updated', value: gstData.lastUpdated },
              { label: 'State', value: gstData.state },
            ].filter(f => f.value).map(({ label, value }) => (
              <div key={label} className="bg-gray-50 dark:bg-gray-900 rounded-xl p-3">
                <p className="text-[10px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide">{label}</p>
                <p className="text-xs font-semibold text-gray-800 dark:text-gray-100 mt-0.5 leading-snug">{value}</p>
              </div>
            ))}
          </div>

          {/* Address */}
          {gstData.address && (
            <div className="px-4 pb-3">
              <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-3">
                <p className="text-[10px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide mb-1">Registered Address</p>
                <p className="text-xs text-gray-700 dark:text-gray-200 leading-relaxed">{gstData.address}</p>
              </div>
            </div>
          )}

          {/* Nature of business */}
          {gstData.natureOfBusiness?.length > 0 && (
            <div className="px-4 pb-4">
              <p className="text-[10px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide mb-2">Nature of Business</p>
              <div className="flex flex-wrap gap-1.5">
                {gstData.natureOfBusiness.map((n) => (
                  <span key={n} className="text-xs bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-200 px-2.5 py-1 rounded-full font-medium">{n}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      <div className="space-y-3">
        <button
          onClick={handleStep2Continue}
          disabled={!gstVerified}
          className="w-full flex items-center justify-center gap-2 py-3.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-sm"
        >
          Continue to Aadhaar KYC <ArrowRight className="w-4 h-4" />
        </button>

        <button
          onClick={handleSkipGst}
          className="w-full flex items-center justify-center gap-2 py-3.5 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-700 text-indigo-700 dark:text-indigo-300 hover:bg-gray-50 dark:hover:bg-gray-900 font-semibold rounded-xl transition-all duration-200 text-sm"
        >
          Skip GST &amp; Continue to Aadhaar KYC
        </button>

        <p className="text-xs text-gray-400 dark:text-gray-500">If your annual turnover is below ₹20 lakh and you do not have GST, you can skip this step.</p>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-5">

      {/* ── KYC Type Selector ── */}
      <div>
        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">Choose Verification Method</p>
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {([
            { key: 'aadhaar', label: 'Aadhaar', icon: Fingerprint, ready: true },
            { key: 'pan', label: 'PAN Card', icon: CreditCard, ready: true },
            { key: 'bank', label: 'Bank Account', icon: Building2, ready: true },
            { key: 'mca', label: 'MCA / CIN', icon: ShieldCheck, ready: true },
          ] as const).map(({ key, label, icon: Icon }) => {
            const isLockedForFree = isFreeUser && key !== 'aadhaar';
            return (
              <button
                key={key}
                type="button"
                disabled={isLockedForFree}
                onClick={() => { if (!isLockedForFree) setKycType(key); }}
                title={isLockedForFree ? 'Paid plan only' : label}
                className={[
                  'relative flex-shrink-0 flex flex-col items-center gap-1.5 px-3 py-2.5 rounded-xl border-2 transition-all duration-200 min-w-[72px]',
                  isLockedForFree ? 'opacity-45 cursor-not-allowed' : 'cursor-pointer',
                  kycType === key
                    ? 'border-indigo-500 dark:!border-indigo-500 bg-indigo-50 dark:!bg-indigo-950/80'
                    : 'border-gray-200 dark:!border-gray-600 hover:border-indigo-200 dark:hover:!border-indigo-600 hover:bg-gray-50 dark:!bg-gray-900 dark:hover:!bg-gray-800',
                ].join(' ')}
              >
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${kycType === key ? 'bg-indigo-600 dark:!bg-indigo-600' : 'bg-gray-100 dark:!bg-gray-800'
                  }`}>
                  <Icon className={`w-3.5 h-3.5 ${kycType === key ? 'text-white' : 'text-gray-500 dark:!text-gray-300'}`} />
                </div>
                <span className={`text-[11px] font-semibold leading-tight whitespace-nowrap ${kycType === key ? 'text-indigo-700 dark:!text-indigo-200' : 'text-gray-500 dark:!text-gray-400'
                  }`}>{label}</span>
                {kycType === key && (
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-[9px] font-bold bg-indigo-600 text-white px-1.5 py-0.5 rounded-full whitespace-nowrap">Selected</span>
                )}
                {isLockedForFree && (
                  <span className="absolute -top-2 right-1 text-[9px] font-bold bg-gray-800 text-white px-1.5 py-0.5 rounded-full whitespace-nowrap flex items-center gap-0.5">
                    <Lock className="w-2.5 h-2.5" /> Locked
                  </span>
                )}
              </button>
            );
          })}
        </div>
        {isFreeUser && (
          <p className="mt-2 text-[11px] text-gray-400 dark:text-gray-500 leading-relaxed">
            Free plan includes GST and Aadhaar verification. PAN, bank account, and MCA verification are available on the paid plan.
          </p>
        )}
      </div>

      {/* ── Aadhaar Panel ── */}
      {kycType === 'aadhaar' && (
        <div className="space-y-4">
          <div className="p-4 bg-indigo-50 dark:bg-indigo-950 border border-indigo-100 dark:border-indigo-800 rounded-xl">
            <p className="text-xs font-semibold text-indigo-700 dark:text-indigo-300 mb-0.5">Aadhaar KYC Secure &amp; Private</p>
            <p className="text-xs text-indigo-600 dark:text-indigo-200 leading-relaxed">Your Aadhaar details are processed via UIDAI’s secure infrastructure. We only verify identity no data is stored.</p>
          </div>

          {/* Aadhaar input */}
          {!aadhaarVerified && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1.5">Aadhaar Number <span className="text-red-500">*</span></label>
              <div className="relative">
                <Fingerprint className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500 pointer-events-none" />
                <input
                  type="text"
                  value={aadhaarNumber}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, '').slice(0, 12);
                    setAadhaarNumber(val.replace(/(\d{4})(?=\d)/g, '$1 ').trim());
                    if (otpSent) { setOtpSent(false); setOtp(''); setAadhaarError(''); }
                  }}
                  disabled={otpSent}
                  placeholder="XXXX XXXX XXXX"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 font-mono text-sm tracking-widest transition-all disabled:bg-gray-50 dark:disabled:bg-gray-900 disabled:text-gray-500 dark:disabled:text-gray-600"
                />
              </div>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-1.5">12-digit Aadhaar linked to your registered mobile number</p>
            </div>
          )}

          {/* Error */}
          {aadhaarError && (
            <div className="flex items-start gap-2.5 p-3.5 bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-700 rounded-xl">
              <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-xs text-red-700 dark:text-red-300 leading-relaxed">{aadhaarError}</p>
              </div>
              <button onClick={() => setAadhaarError('')} className="text-red-400 dark:text-red-500 hover:text-red-600 dark:hover:text-red-300">
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* Send OTP button */}
          {!otpSent && !aadhaarVerified && (
            <button
              onClick={handleSendOTP}
              disabled={sendingOtp || aadhaarNumber.replace(/\s/g, '').length < 12}
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold rounded-xl text-sm shadow-sm transition-all"
            >
              {sendingOtp
                ? <span className="flex items-center justify-center gap-2"><Loader2 className="w-4 h-4 animate-spin" />Sending OTP…</span>
                : 'Send OTP to Aadhaar-linked Mobile'}
            </button>
          )}

          {/* OTP sent confirmation */}
          {otpSent && !aadhaarVerified && (
            <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-700 rounded-xl px-4 py-2.5 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                <p className="text-sm text-green-700 dark:text-green-300 font-medium">OTP sent to Aadhaar-linked mobile</p>
              </div>
              <button
                onClick={() => { setOtpSent(false); setOtp(''); setAadhaarError(''); }}
                className="text-xs text-green-600 dark:text-green-400 hover:underline font-semibold"
              >
                Change
              </button>
            </div>
          )}

          {/* OTP input */}
          {otpSent && !aadhaarVerified && (
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200">Enter 6-digit OTP</label>
              <OTPInput value={otp} onChange={setOtp} />
              <p className="text-xs text-gray-400 dark:text-gray-500">
                OTP valid for 10 minutes.
                <button type="button" onClick={() => { setOtp(''); handleSendOTP(); }} className="ml-1 text-indigo-500 dark:text-indigo-300 hover:underline">Resend OTP</button>
              </p>
              <button
                onClick={handleVerifyOTP}
                disabled={verifyingOtp || otp.length < 6}
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold rounded-xl text-sm shadow-sm transition-all"
              >
                {verifyingOtp
                  ? <span className="flex items-center justify-center gap-2"><Loader2 className="w-4 h-4 animate-spin" />Verifying…</span>
                  : 'Verify OTP'}
              </button>
            </div>
          )}

          {/* Rich Aadhaar result card */}
          {aadhaarVerified && aadhaarData && (
            <div className="border border-green-200 dark:border-green-700 rounded-2xl overflow-hidden">
              {/* Header with photo */}
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 dark:from-green-700 dark:to-emerald-800 px-5 py-4">
                <div className="flex items-center gap-4">
                  {aadhaarData.photo ? (
                    <img
                      src={`data:image/jpeg;base64,${aadhaarData.photo}`}
                      alt="Aadhaar photo"
                      className="w-14 h-14 rounded-xl object-cover border-2 border-white/30 flex-shrink-0"
                    />
                  ) : (
                    <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                      <Fingerprint className="w-7 h-7 text-white" />
                    </div>
                  )}
                  <div className="min-w-0">
                    <p className="text-base font-bold text-white">{aadhaarData.name}</p>
                    {aadhaarData.careOf && <p className="text-xs text-green-100">C/O {aadhaarData.careOf}</p>}
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] font-bold bg-white/20 text-white px-2 py-0.5 rounded-full">
                        {aadhaarData.gender === 'M' ? 'Male' : aadhaarData.gender === 'F' ? 'Female' : aadhaarData.gender}
                      </span>
                      <span className="text-[10px] font-bold bg-white/20 text-white px-2 py-0.5 rounded-full">
                        DOB: {aadhaarData.dateOfBirth}
                      </span>
                      <span className="text-[10px] font-bold bg-green-400/40 text-white px-2 py-0.5 rounded-full uppercase">
                        {aadhaarData.status || 'VALID'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Details grid */}
              <div className="bg-white dark:bg-gray-950 p-4 grid grid-cols-2 gap-3">
                {[
                  { label: 'Full Name', value: aadhaarData.name },
                  { label: 'Year of Birth', value: aadhaarData.yearOfBirth ? String(aadhaarData.yearOfBirth) : '' },
                  { label: 'District', value: aadhaarData.address.district },
                  { label: 'State', value: aadhaarData.address.state },
                  { label: 'Pincode', value: String(aadhaarData.address.pincode || '') },
                  { label: 'Country', value: aadhaarData.address.country },
                ].filter(f => f.value).map(({ label, value }) => (
                  <div key={label} className="bg-gray-50 dark:bg-gray-900 rounded-xl p-3">
                    <p className="text-[10px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide">{label}</p>
                    <p className="text-xs font-semibold text-gray-800 dark:text-gray-100 mt-0.5">{value}</p>
                  </div>
                ))}
              </div>

              {/* Full address */}
              {aadhaarData.fullAddress && (
                <div className="px-4 pb-4">
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-3">
                    <p className="text-[10px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide mb-1">Registered Address</p>
                    <p className="text-xs text-gray-700 dark:text-gray-200 leading-relaxed">{aadhaarData.fullAddress}</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* ── PAN Panel ── */}
      {kycType === 'pan' && (
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 dark:!bg-blue-950/50 border border-blue-100 dark:!border-blue-800 rounded-xl">
            <p className="text-xs font-semibold text-blue-700 dark:!text-blue-200 mb-0.5">PAN Verification Quick &amp; Reliable</p>
            <p className="text-xs text-blue-600 dark:!text-blue-300 leading-relaxed">Enter your PAN number along with the name and date of incorporation / date of birth exactly as on the PAN card.</p>
          </div>

          {!panVerified && (
            <div className="space-y-4">
              {/* PAN number */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:!text-gray-200 mb-1.5">PAN Number <span className="text-red-500">*</span></label>
                <div className="relative">
                  <CreditCard className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:!text-gray-500 pointer-events-none" />
                  <input
                    type="text"
                    value={panNumber}
                    onChange={(e) => {
                      setPanNumber(e.target.value.replace(/[^a-zA-Z0-9]/g, '').slice(0, 10).toUpperCase());
                      if (panVerified) { setPanVerified(false); setPanData(null); setPanError(''); }
                    }}
                    placeholder="AAHCE0782H"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:!border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:!ring-blue-900 bg-white dark:!bg-gray-950 text-gray-900 dark:!text-gray-100 placeholder-gray-400 dark:placeholder:!text-gray-500 font-mono text-sm tracking-widest uppercase transition-all"
                  />
                </div>
                <p className="text-xs text-gray-400 dark:!text-gray-500 mt-1">10-character alphanumeric PAN (e.g. AAHCE0782H)</p>
              </div>

              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:!text-gray-200 mb-1.5">Name as per PAN <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  value={panName}
                  onChange={(e) => setPanName(e.target.value)}
                  placeholder="Full legal name exactly as on PAN card"
                  className="w-full px-4 py-3 border border-gray-200 dark:!border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:!ring-blue-900 bg-white dark:!bg-gray-950 text-gray-900 dark:!text-gray-100 placeholder-gray-400 dark:placeholder:!text-gray-500 text-sm transition-all"
                />
              </div>

              {/* DOB / Incorporation date */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:!text-gray-200 mb-1.5">Date of Birth / Incorporation <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  value={panDob}
                  onChange={(e) => setPanDob(e.target.value)}
                  placeholder="DD/MM/YYYY"
                  maxLength={10}
                  className="w-full px-4 py-3 border border-gray-200 dark:!border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:!ring-blue-900 bg-white dark:!bg-gray-950 text-gray-900 dark:!text-gray-100 placeholder-gray-400 dark:placeholder:!text-gray-500 font-mono text-sm transition-all"
                />
                <p className="text-xs text-gray-400 dark:!text-gray-500 mt-1">Format: DD/MM/YYYY use incorporation date for companies</p>
              </div>
            </div>
          )}

          {/* Error */}
          {panError && (
            <div className="flex items-start gap-2.5 p-3.5 bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-700 rounded-xl">
              <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
              <p className="flex-1 text-xs text-red-700 dark:text-red-300 leading-relaxed">{panError}</p>
              <button onClick={() => setPanError('')} className="text-red-400 dark:text-red-500 hover:text-red-600 dark:hover:text-red-300">
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* Verify button */}
          {!panVerified && (
            <button
              onClick={handleVerifyPAN}
              disabled={panVerifying || panNumber.length < 10 || !panName.trim() || !panDob.trim()}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold rounded-xl text-sm shadow-sm transition-all"
            >
              {panVerifying
                ? <span className="flex items-center justify-center gap-2"><Loader2 className="w-4 h-4 animate-spin" />Verifying PAN…</span>
                : 'Verify PAN'}
            </button>
          )}

          {/* Rich PAN result card */}
          {panVerified && panData && (
            <div className="border border-blue-200 dark:border-blue-700 rounded-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-700 dark:to-indigo-800 px-5 py-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <CreditCard className="w-7 h-7 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-base font-bold text-white">{panName}</p>
                    <p className="text-xs text-blue-100 font-mono mt-0.5">{panData.pan}</p>
                    <div className="flex flex-wrap items-center gap-2 mt-1.5">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${panData.status === 'valid' ? 'bg-green-400/30 text-white' : 'bg-red-400/30 text-white'
                        }`}>
                        {panData.status.toUpperCase()}
                      </span>
                      {panData.category && (
                        <span className="text-[10px] font-bold bg-white/20 text-white px-2 py-0.5 rounded-full capitalize">
                          {panData.category}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Details grid */}
              <div className="bg-white dark:bg-gray-950 p-4 grid grid-cols-2 gap-3">
                {[
                  { label: 'PAN Number', value: panData.pan },
                  { label: 'Category', value: panData.category ? panData.category.charAt(0).toUpperCase() + panData.category.slice(1) : '' },
                  { label: 'Name Match', value: panData.nameMatch === true ? '✓ Matched' : panData.nameMatch === false ? '✗ Mismatch' : 'N/A' },
                  { label: 'DOB Match', value: panData.dobMatch === true ? '✓ Matched' : panData.dobMatch === false ? '✗ Mismatch' : 'N/A' },
                  { label: 'Aadhaar Seeding', value: panData.aadhaarSeedingStatus ? panData.aadhaarSeedingStatus.toUpperCase() : '' },
                  { label: 'Remarks', value: panData.remarks || '-' },
                ].filter(f => f.value).map(({ label, value }) => (
                  <div key={label} className="bg-gray-50 dark:bg-gray-900 rounded-xl p-3">
                    <p className="text-[10px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide">{label}</p>
                    <p className={`text-xs font-semibold mt-0.5 ${value.startsWith('✓') ? 'text-green-700 dark:text-green-300' : value.startsWith('✗') ? 'text-red-600 dark:text-red-300' : 'text-gray-800 dark:text-gray-100'
                      }`}>{value}</p>
                  </div>
                ))}
              </div>

              {/* Re-verify link */}
              <div className="px-4 pb-4">
                <button
                  onClick={() => { setPanVerified(false); setPanData(null); setPanError(''); }}
                  className="text-xs text-blue-600 dark:text-blue-300 hover:underline font-semibold"
                >
                  Re-verify with different details
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ── Bank Account Panel ── */}
      {kycType === 'bank' && (
        <div className="space-y-4">
          <div className="p-4 bg-teal-50 dark:bg-teal-950/40 border border-teal-100 dark:border-teal-800 rounded-xl">
            <p className="text-xs font-semibold text-teal-700 dark:text-teal-300 mb-0.5">Bank Account Verification Penny-less Check</p>
            <p className="text-xs text-teal-600 dark:text-teal-200 leading-relaxed">We verify your bank account without any debit. Enter the account number and IFSC code linked to your business.</p>
          </div>

          {!bankVerified && (
            <div className="space-y-4">
              {/* Account number */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1.5">Account Number <span className="text-red-500">*</span></label>
                <div className="relative">
                  <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500 pointer-events-none" />
                  <input
                    type="text"
                    value={bankAccount}
                    onChange={(e) => {
                      setBankAccount(e.target.value.replace(/\D/g, ''));
                      if (bankVerified) { setBankVerified(false); setBankData(null); setBankError(''); }
                    }}
                    placeholder="e.g. 10125507527"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-900 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 font-mono text-sm transition-all"
                  />
                </div>
              </div>

              {/* IFSC */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1.5">IFSC Code <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  value={bankIfsc}
                  onChange={(e) => setBankIfsc(e.target.value.replace(/[^a-zA-Z0-9]/g, '').slice(0, 11).toUpperCase())}
                  placeholder="e.g. IDFB0043821"
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-900 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 font-mono text-sm uppercase transition-all"
                />
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">11-character IFSC code (e.g. IDFB0043821)</p>
              </div>
            </div>
          )}

          {/* Error */}
          {bankError && (
            <div className="flex items-start gap-2.5 p-3.5 bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-700 rounded-xl">
              <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
              <p className="flex-1 text-xs text-red-700 dark:text-red-300 leading-relaxed">{bankError}</p>
              <button onClick={() => setBankError('')} className="text-red-400 dark:text-red-500 hover:text-red-600 dark:hover:text-red-300">
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* Verify button */}
          {!bankVerified && (
            <button
              onClick={handleVerifyBank}
              disabled={bankVerifying || !bankAccount.trim() || bankIfsc.trim().length < 11}
              className="w-full py-3 bg-teal-600 hover:bg-teal-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold rounded-xl text-sm shadow-sm transition-all"
            >
              {bankVerifying
                ? <span className="flex items-center justify-center gap-2"><Loader2 className="w-4 h-4 animate-spin" />Verifying…</span>
                : 'Verify Bank Account'}
            </button>
          )}

          {/* Rich result card */}
          {bankVerified && bankData && (
            <div className="border border-teal-200 dark:border-teal-700 rounded-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-teal-500 to-emerald-600 dark:from-teal-700 dark:to-emerald-800 px-5 py-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-7 h-7 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-base font-bold text-white">{bankData.nameAtBank || 'Account Verified'}</p>
                    <p className="text-xs text-teal-100 font-mono mt-0.5">{bankData.ifsc}</p>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="text-[10px] font-bold bg-green-400/30 text-white px-2 py-0.5 rounded-full">
                        ACCOUNT EXISTS
                      </span>
                      <span className="text-[10px] font-bold bg-white/20 text-white px-2 py-0.5 rounded-full">
                        ✓ VERIFIED
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Details grid */}
              <div className="bg-white dark:bg-gray-950 p-4 grid grid-cols-2 gap-3">
                {[
                  { label: 'Account Number', value: bankData.accountNumber },
                  { label: 'IFSC Code', value: bankData.ifsc },
                  { label: 'Name at Bank', value: bankData.nameAtBank },
                  { label: 'Status', value: bankData.accountExists ? 'Account Found' : 'Not Found' },
                ].filter(f => f.value).map(({ label, value }) => (
                  <div key={label} className="bg-gray-50 dark:bg-gray-900 rounded-xl p-3">
                    <p className="text-[10px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide">{label}</p>
                    <p className="text-xs font-semibold text-gray-800 dark:text-gray-100 mt-0.5 break-all">{value}</p>
                  </div>
                ))}
              </div>

              {bankData.message && (
                <div className="px-4 pb-4">
                  <div className="bg-teal-50 dark:bg-teal-950/40 rounded-xl p-3">
                    <p className="text-[10px] font-semibold text-teal-600 dark:text-teal-300 uppercase tracking-wide mb-1">Bank Message</p>
                    <p className="text-xs text-teal-800 dark:text-teal-200">{bankData.message}</p>
                  </div>
                </div>
              )}

              <div className="px-4 pb-4">
                <button
                  onClick={() => { setBankVerified(false); setBankData(null); setBankError(''); }}
                  className="text-xs text-teal-600 dark:text-teal-300 hover:underline font-semibold"
                >
                  Re-verify with different details
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ── MCA / CIN Panel ── */}
      {kycType === 'mca' && (
        <div className="space-y-4">
          <div className="p-4 bg-violet-50 dark:bg-violet-950/40 border border-violet-100 dark:border-violet-800 rounded-xl">
            <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 mb-0.5">MCA Company Verification</p>
            <p className="text-xs text-violet-600 dark:text-violet-200 leading-relaxed">Enter the 21-character Corporate Identification Number (CIN) to verify your company with the Ministry of Corporate Affairs.</p>
          </div>

          {!mcaVerified && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1.5">Corporate Identification Number (CIN) <span className="text-red-500">*</span></label>
              <div className="relative">
                <ShieldCheck className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500 pointer-events-none" />
                <input
                  type="text"
                  value={mcaCin}
                  onChange={(e) => {
                    setMcaCin(e.target.value.replace(/[^a-zA-Z0-9]/g, '').slice(0, 21).toUpperCase());
                    if (mcaVerified) { setMcaVerified(false); setMcaData(null); setMcaError(''); }
                  }}
                  placeholder="e.g. U72900PN2022PTC211869"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 dark:focus:ring-violet-900 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 font-mono text-sm uppercase tracking-wider transition-all"
                />
              </div>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">21-character CIN (e.g. U72900PN2022PTC211869)</p>
            </div>
          )}

          {/* Error */}
          {mcaError && (
            <div className="flex items-start gap-2.5 p-3.5 bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-700 rounded-xl">
              <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
              <p className="flex-1 text-xs text-red-700 dark:text-red-300 leading-relaxed">{mcaError}</p>
              <button onClick={() => setMcaError('')} className="text-red-400 dark:text-red-500 hover:text-red-600 dark:hover:text-red-300">
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* Verify button */}
          {!mcaVerified && (
            <button
              onClick={handleVerifyMCA}
              disabled={mcaVerifying || mcaCin.replace(/\s/g, '').length < 21}
              className="w-full py-3 bg-violet-600 hover:bg-violet-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold rounded-xl text-sm shadow-sm transition-all"
            >
              {mcaVerifying
                ? <span className="flex items-center justify-center gap-2"><Loader2 className="w-4 h-4 animate-spin" />Verifying MCA…</span>
                : 'Verify MCA / CIN'}
            </button>
          )}

          {/* Rich result card */}
          {mcaVerified && mcaData && (
            <div className="border border-violet-200 dark:border-violet-700 rounded-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-violet-500 to-purple-600 dark:from-violet-700 dark:to-purple-800 px-5 py-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-7 h-7 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-base font-bold text-white leading-tight">{mcaData.companyName || mcaData.cin}</p>
                    <p className="text-xs text-violet-100 font-mono mt-0.5">{mcaData.cin}</p>
                    <div className="flex flex-wrap items-center gap-2 mt-1.5">
                      {mcaData.companyStatus && (
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${mcaData.companyStatus.toLowerCase() === 'active'
                          ? 'bg-green-400/30 text-white'
                          : 'bg-red-400/30 text-white'
                          }`}>
                          {mcaData.companyStatus.toUpperCase()}
                        </span>
                      )}
                      {mcaData.companyClass && (
                        <span className="text-[10px] font-bold bg-white/20 text-white px-2 py-0.5 rounded-full">
                          {mcaData.companyClass}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Details grid */}
              <div className="bg-white dark:bg-gray-950 p-4 grid grid-cols-2 gap-3">
                {[
                  { label: 'CIN', value: mcaData.cin },
                  { label: 'Company Category', value: mcaData.companyCategory },
                  { label: 'Sub-Category', value: mcaData.companySubCategory },
                  { label: 'Date of Incorp.', value: mcaData.dateOfIncorporation },
                  { label: 'ROC Code', value: mcaData.rocCode },
                  { label: 'Registered State', value: mcaData.registeredState },
                  { label: 'Paid-Up Capital', value: mcaData.paidUpCapital },
                  { label: 'Auth. Capital', value: mcaData.authorisedCapital },
                  { label: 'Email', value: mcaData.email },
                ].filter(f => f.value).map(({ label, value }) => (
                  <div key={label} className="bg-gray-50 dark:bg-gray-900 rounded-xl p-3">
                    <p className="text-[10px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide">{label}</p>
                    <p className="text-xs font-semibold text-gray-800 dark:text-gray-100 mt-0.5 break-all">{value}</p>
                  </div>
                ))}
              </div>

              {mcaData.registeredAddress && (
                <div className="px-4 pb-4">
                  <div className="bg-violet-50 dark:bg-violet-950/40 rounded-xl p-3">
                    <p className="text-[10px] font-semibold text-violet-600 dark:text-violet-300 uppercase tracking-wide mb-1">Registered Address</p>
                    <p className="text-xs text-violet-900 dark:text-violet-200 leading-relaxed">{mcaData.registeredAddress}</p>
                  </div>
                </div>
              )}

              <div className="px-4 pb-4">
                <button
                  onClick={() => { setMcaVerified(false); setMcaData(null); setMcaError(''); }}
                  className="text-xs text-violet-600 dark:text-violet-300 hover:underline font-semibold"
                >
                  Re-verify with different CIN
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ── Actions ── */}
      <div className="space-y-3 pt-1">
        <button
          onClick={handleStep3Continue}
          disabled={!(gstVerified || aadhaarVerified || panVerified || bankVerified || mcaVerified)}
          className="w-full flex items-center justify-center gap-2 py-3.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold rounded-xl shadow-sm hover:shadow-md transition-all text-sm"
        >
          {isFreeUser ? 'Finish & View Profile' : 'Continue to Document Upload'} <ArrowRight className="w-4 h-4" />
        </button>

        <button
          onClick={handleSkipAadhaar}
          className="w-full flex items-center justify-center gap-2 py-3.5 bg-white dark:!bg-gray-950 border border-gray-200 dark:!border-gray-700 text-indigo-700 dark:!text-indigo-300 hover:bg-gray-50 dark:hover:!bg-gray-900 font-semibold rounded-xl transition-all duration-200 text-sm"
        >
          {isFreeUser ? 'Skip & Finish' : 'Skip KYC & Continue'}
        </button>

        <p className="text-xs text-gray-400 dark:text-gray-500">If you cannot complete KYC, you may skip and continue to upload supporting documents.</p>
      </div>
    </div>
  );

  const renderStep4 = () => {
    const isSlotReady = (doc: { file: File | null; dataUrl: string | null }) => !!doc.file || doc.dataUrl === 'ready';
    const hasAny = isSlotReady(coiDoc) || isSlotReady(panDoc) || isSlotReady(aoaDoc) || isSlotReady(moaDoc);

    const docSlots = [
      {
        key: 'coi',
        label: 'COI',
        fullLabel: 'Certificate of Incorporation',
        desc: 'Official document issued when a company is legally registered.',
        ref: coiRef,
        state: coiDoc,
        setter: setCoiDoc,
        color: 'indigo',
      },
      {
        key: 'pan',
        label: 'PAN',
        fullLabel: 'PAN Card',
        desc: 'Permanent Account Number unique tax identification by Income Tax Dept.',
        ref: panDocRef,
        state: panDoc,
        setter: setPanDoc,
        color: 'orange',
      },
      {
        key: 'aoa',
        label: 'AOA',
        fullLabel: 'Articles of Association',
        desc: 'Defines internal rules, management structure, and operations of the company.',
        ref: aoaRef,
        state: aoaDoc,
        setter: setAoaDoc,
        color: 'violet',
      },
      {
        key: 'moa',
        label: 'MOA',
        fullLabel: 'Memorandum of Association',
        desc: "Defines the company's objectives, scope, and relationship with the outside world.",
        ref: moaRef,
        state: moaDoc,
        setter: setMoaDoc,
        color: 'emerald',
      },
    ] as const;

    const colorMap = {
      indigo: {
        bg: 'bg-indigo-50 dark:!bg-indigo-950/40',
        border: 'border-indigo-200 dark:!border-indigo-800',
        text: 'text-indigo-700 dark:!text-indigo-300',
        badge: 'bg-indigo-100 dark:!bg-indigo-900/60 text-indigo-700 dark:!text-indigo-200',
      },
      orange: {
        bg: 'bg-orange-50 dark:!bg-orange-950/40',
        border: 'border-orange-200 dark:!border-orange-800',
        text: 'text-orange-700 dark:!text-orange-300',
        badge: 'bg-orange-100 dark:!bg-orange-900/60 text-orange-700 dark:!text-orange-200',
      },
      violet: {
        bg: 'bg-violet-50 dark:!bg-violet-950/40',
        border: 'border-violet-200 dark:!border-violet-800',
        text: 'text-violet-700 dark:!text-violet-300',
        badge: 'bg-violet-100 dark:!bg-violet-900/60 text-violet-700 dark:!text-violet-200',
      },
      emerald: {
        bg: 'bg-emerald-50 dark:!bg-emerald-950/40',
        border: 'border-emerald-200 dark:!border-emerald-800',
        text: 'text-emerald-700 dark:!text-emerald-300',
        badge: 'bg-emerald-100 dark:!bg-emerald-900/60 text-emerald-700 dark:!text-emerald-200',
      },
    };

    return (
      <div className="space-y-5">
        {/* Info banner */}
        <div className="p-4 bg-indigo-50 dark:!bg-indigo-950/50 border border-indigo-100 dark:!border-indigo-800 rounded-xl">
          <p className="text-xs font-semibold text-indigo-700 dark:!text-indigo-200 mb-1">Business Documents</p>
          <p className="text-xs text-indigo-600 dark:!text-indigo-300 leading-relaxed">
            Upload your official business documents. All documents must be in <strong>PDF, JPG, or PNG</strong> format max 10 MB each. At least one document is required.
          </p>
        </div>

        {/* 4 document slots */}
        <div className="space-y-3">
          {docSlots.map((slot) => {
            const c = colorMap[slot.color];
            const uploaded = isSlotReady(slot.state);
            const loading = slot.state.uploading;

            return (
              <div
                key={slot.key}
                className={`rounded-xl border-2 transition-all duration-200 ${uploaded ? `${c.border} ${c.bg}` : 'border-gray-200 dark:!border-gray-700 bg-white dark:!bg-gray-950 hover:border-gray-300 dark:hover:!border-gray-600'
                  }`}
              >
                <div className="flex items-center gap-3 p-3.5">
                  {/* Badge */}
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-xs ${uploaded ? c.badge : 'bg-gray-100 dark:!bg-gray-800 text-gray-500 dark:!text-gray-400'}`}>
                    {slot.label}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-semibold ${uploaded ? c.text : 'text-gray-700 dark:!text-gray-200'}`}>{slot.fullLabel}</p>
                    {uploaded ? (
                      <p className="text-xs text-gray-500 dark:!text-gray-400 truncate">{slot.state.name} · {slot.state.size}</p>
                    ) : (
                      <p className="text-xs text-gray-400 dark:!text-gray-500 truncate">{slot.desc}</p>
                    )}
                  </div>

                  {/* Action */}
                  <div className="flex items-center gap-2 flex-shrink-0">
                    {loading ? (
                      <Loader2 className="w-4 h-4 animate-spin text-gray-400" />
                    ) : uploaded ? (
                      <>
                        <CheckCircle className={`w-4 h-4 ${c.text}`} />
                        <button
                          onClick={() => slot.setter({ file: null, dataUrl: null, uploading: false, name: '', size: '' })}
                          className="p-1 text-gray-300 dark:!text-gray-600 hover:text-red-500 dark:hover:!text-red-300 transition-colors rounded-md hover:bg-red-50 dark:hover:!bg-red-950/40"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => slot.ref.current?.click()}
                        className="px-3 py-1.5 text-xs font-semibold text-indigo-600 dark:!text-indigo-300 bg-indigo-50 dark:!bg-indigo-950/40 border border-indigo-200 dark:!border-indigo-800 rounded-lg hover:bg-indigo-100 dark:hover:!bg-indigo-900/60 transition-colors"
                      >
                        Attach
                      </button>
                    )}
                    <input
                      ref={slot.ref}
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      className="hidden"
                      onChange={(e) => {
                        const f = e.target.files?.[0];
                        if (f) handleDocSlot(f, slot.setter);
                        e.target.value = '';
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary of uploaded */}
        {hasAny && (
          <div className="flex items-center gap-2 px-3 py-2 bg-emerald-50 dark:!bg-emerald-950/40 border border-emerald-200 dark:!border-emerald-800 rounded-xl">
            <CheckCircle className="w-4 h-4 text-emerald-600 dark:!text-emerald-300 flex-shrink-0" />
            <p className="text-xs font-semibold text-emerald-700 dark:!text-emerald-200">
              {[coiDoc, panDoc, aoaDoc, moaDoc].filter((d) => isSlotReady(d)).length} document(s) ready to submit
            </p>
          </div>
        )}

        {/* Error */}
        {docsError && (
          <div className="flex items-start gap-2 px-3 py-3 bg-red-50 dark:!bg-red-950 border border-red-200 dark:!border-red-700 rounded-xl">
            <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-red-700 dark:!text-red-300">{docsError}</p>
          </div>
        )}

        <div className="space-y-3">
          <button
            onClick={handleStep4Continue}
            disabled={!hasAny || docsSubmitting}
            className="w-full flex items-center justify-center gap-2 py-3.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold rounded-xl shadow-sm hover:shadow-md transition-all text-sm"
          >
            {docsSubmitting ? (
              <><Loader2 className="w-4 h-4 animate-spin" /> Uploading Documents…</>
            ) : (
              <>Complete Verification <ArrowRight className="w-4 h-4" /></>
            )}
          </button>

          <button
            onClick={handleSkipDocuments}
            disabled={docsSubmitting}
            className="w-full flex items-center justify-center gap-2 py-3.5 bg-white dark:!bg-gray-950 border border-gray-200 dark:!border-gray-700 text-indigo-700 dark:!text-indigo-300 hover:bg-gray-50 dark:hover:!bg-gray-900 font-semibold rounded-xl transition-all duration-200 text-sm disabled:opacity-40"
          >
            Skip Documents &amp; Continue
          </button>

          <p className="text-xs text-gray-400 dark:!text-gray-500">If you cannot upload documents now, you may skip and finish later. Our team will review and may request supporting docs.</p>
        </div>
      </div>
    );
  };

  const renderStep5 = () => {
    // ── FREE USER: basic listing complete ──────────────────────────────────
    if (isFreeUser) {
      return (
        <div className="text-center py-2">
          <div className="relative w-24 h-24 mx-auto mb-6">
            <div className="absolute inset-0 bg-indigo-100 dark:bg-indigo-900 rounded-full animate-ping opacity-40" />
            <div className="relative w-24 h-24 bg-gradient-to-br from-indigo-400 to-indigo-600 dark:from-indigo-700 dark:to-indigo-900 rounded-full flex items-center justify-center shadow-lg shadow-indigo-200 dark:shadow-indigo-900/30">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">Basic Listing Active!</h2>
          <p className="text-gray-500 dark:text-gray-300 text-sm mb-6">Your business is now listed on RakshaAI</p>

          {/* What you get */}
          <div className="bg-indigo-50 dark:bg-indigo-950 border border-indigo-100 dark:border-indigo-800 rounded-2xl p-5 mb-5 text-left">
            <p className="text-sm font-bold text-indigo-800 dark:text-indigo-300 mb-3">What&apos;s included in your Free listing:</p>
            <ul className="space-y-2">
              {[
                'Basic business listing visible to RakshaAI users',
                'Public profile page with your business details',
                gstVerified ? `GST verified (${gstNumber})` : 'Business info recorded',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs text-indigo-700 dark:text-indigo-200">
                  <CheckCircle className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-300 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Upgrade CTA */}
          <div className="bg-gradient-to-br from-indigo-600 to-violet-600 dark:from-indigo-800 dark:to-violet-900 rounded-2xl p-5 mb-5 text-white text-left">
            <div className="flex items-center gap-2 mb-2">
              <Crown className="w-4 h-4 text-yellow-300" />
              <p className="text-sm font-bold">Upgrade to Verified ₹299/month</p>
            </div>
            <p className="text-xs text-indigo-200 dark:text-indigo-300 mb-4 leading-relaxed">
              Unlock the full verification process Aadhaar KYC, document upload, verified badge on your profile, priority search ranking, and a digitally signed certificate.
            </p>
            <ul className="space-y-1.5 mb-4">
              {['Verified badge on profile & search results', 'Aadhaar KYC + Document verification', 'Priority search ranking', 'Monthly trust analytics report', 'Downloadable verified certificate'].map((f) => (
                <li key={f} className="flex items-center gap-2 text-xs text-indigo-100 dark:text-indigo-200">
                  <CheckCircle className="w-3 h-3 text-indigo-300 dark:text-indigo-400 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <button
              onClick={() => { setIsFreeUser(false); goToStep(2); }}
              className="w-full py-2.5 bg-white dark:bg-gray-950 hover:bg-indigo-50 dark:hover:bg-indigo-900 text-indigo-700 dark:text-indigo-300 font-bold text-sm rounded-xl transition-colors"
            >
              Upgrade Now ₹299/month
            </button>
          </div>

          {application && (
            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-4 text-left mb-5">
              <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide mb-2">Your Business</p>
              <div className="flex items-center gap-2"><Building2 className="w-4 h-4 text-gray-400 dark:text-gray-500 flex-shrink-0" /><span className="text-sm font-semibold text-gray-800 dark:text-gray-100">{application.businessName}</span></div>
              {application.businessUrl && <div className="flex items-center gap-2 mt-1.5"><Globe className="w-4 h-4 text-gray-400 dark:text-gray-500 flex-shrink-0" /><span className="text-sm text-gray-500 dark:text-gray-300 truncate">{application.businessUrl}</span></div>}
              <div className="mt-2 pt-2 border-t border-gray-200 dark:border-gray-700">
                <p className="text-xs text-gray-400 dark:text-gray-500">Free Plan · Basic listing</p>
              </div>
            </div>
          )}

          <button onClick={() => router.push('/business-dashboard')}
            className="w-full flex items-center justify-center gap-2 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-sm hover:shadow-md transition-all text-sm mb-3">
            Go to Dashboard <ArrowRight className="w-4 h-4" />
          </button>
          <button onClick={handleStartOver}
            className="w-full py-3 text-sm text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 font-medium border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
            Register Another Business
          </button>
        </div>
      );
    }

    // ── PAID USER: full verification complete ─────────────────────────────
    return (
      <div className="text-center py-2">
        <div className="relative w-24 h-24 mx-auto mb-6">
          <div className="absolute inset-0 bg-green-100 dark:bg-green-900 rounded-full animate-ping opacity-40" />
          <div className="relative w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 dark:from-green-700 dark:to-emerald-800 rounded-full flex items-center justify-center shadow-lg shadow-green-200 dark:shadow-green-900/30">
            <Award className="w-12 h-12 text-white" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">Verification Complete!</h2>
        <p className="text-gray-500 dark:text-gray-300 text-sm mb-6">Your business has been successfully verified on RakshaAI</p>

        {/* Trust Score Card */}
        {trustScoreLoading ? (
          <div className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-700 dark:from-indigo-800 dark:via-indigo-900 dark:to-violet-900 rounded-2xl p-6 text-white mb-5 shadow-xl shadow-indigo-200 dark:shadow-indigo-900/30">
            <p className="text-xs font-semibold uppercase tracking-wider opacity-70 mb-4 text-center">Loading Trust Score…</p>
            <div className="flex justify-center mb-3">
              <Loader2 className="w-10 h-10 text-white/60 animate-spin" />
            </div>
            <div className="h-2 bg-white/20 rounded-full mt-4 overflow-hidden">
              <div className="h-full bg-white/40 rounded-full w-1/2 animate-pulse" />
            </div>
          </div>
        ) : (() => {
          const score = Math.floor((trustScoreData?.overall_trust_percentage ?? 0) / 10);
          const level = trustScoreData?.overall_trust_level ?? 'HIGHLY_TRUSTED';
          const labelMap: Record<string, string> = { HIGHLY_TRUSTED: 'Excellent Rating', TRUSTED: 'Good Rating', NEUTRAL: 'Neutral', RISKY: 'Risky', DANGEROUS: 'Dangerous' };
          const scoreGradient = score >= 7 ? 'from-indigo-600 via-indigo-700 to-violet-700' : score >= 40 ? 'from-amber-500 via-orange-600 to-amber-700' : 'from-red-600 via-rose-600 to-red-700';
          const stars = Math.round((score / 100) * 5);
          return (
            <div className={`bg-gradient-to-br ${scoreGradient} rounded-2xl p-6 text-white mb-5 shadow-xl shadow-indigo-200 dark:shadow-indigo-900/30`}>
              <p className="text-xs font-semibold uppercase tracking-wider opacity-70 mb-2">Your Trust Score</p>
              <p className="text-6xl font-black mb-1">{score}</p>
              <div className="flex items-center justify-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className={`w-4 h-4 ${i < stars ? 'fill-yellow-400 text-yellow-400' : 'text-white/30'}`} />)}
              </div>
              <p className="text-sm font-semibold opacity-80">{labelMap[level] ?? level}</p>
              <div className="mt-4 bg-white/20 rounded-full h-2 overflow-hidden">
                <div className="h-full bg-white rounded-full transition-all duration-1000" style={{ width: `${score * 10}%` }} />
              </div>
              {trustScoreData?.action_items && (
                <div className="mt-4 pt-4 border-t border-white/20 grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-white/10 rounded-lg p-2">
                    <p className="opacity-60 mb-0.5">Risk Level</p>
                    <p className="font-bold">{trustScoreData.action_items.risk_level}</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-2">
                    <p className="opacity-60 mb-0.5">Payments</p>
                    <p className="font-bold">{trustScoreData.action_items.payment_advice}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })()}

        {/* Extended Trust Data */}
        {trustScoreData && !trustScoreLoading && (() => {
          const ts = trustScoreData;
          console.log('Trust Score Data:', ts);
          const stripMd = (text: string) => text.replace(/\*\*(.+?)\*\*/g, '$1').replace(/\*(.+?)\*/g, '$1').replace(/`(.+?)`/g, '$1');
          const levelColor = (level?: string) => {
            if (!level) return { dot: 'bg-gray-400', text: 'text-gray-500 dark:text-gray-300', bg: 'bg-gray-50 dark:bg-gray-900', border: 'border-gray-200 dark:border-gray-700', bar: 'bg-gray-400' };
            if (level.includes('HIGHLY')) return { dot: 'bg-emerald-500', text: 'text-emerald-700 dark:text-emerald-300', bg: 'bg-emerald-50 dark:bg-emerald-950/40', border: 'border-emerald-200 dark:border-emerald-800', bar: 'bg-emerald-500' };
            if (level.includes('TRUSTED')) return { dot: 'bg-green-500', text: 'text-green-700 dark:text-green-300', bg: 'bg-green-50 dark:bg-green-950/40', border: 'border-green-200 dark:border-green-800', bar: 'bg-green-500' };
            if (level.includes('NEUTRAL')) return { dot: 'bg-amber-500', text: 'text-amber-700 dark:text-amber-300', bg: 'bg-amber-50 dark:bg-amber-950/40', border: 'border-amber-200 dark:border-amber-800', bar: 'bg-amber-500' };
            return { dot: 'bg-red-500', text: 'text-red-700 dark:text-red-300', bg: 'bg-red-50 dark:bg-red-950/40', border: 'border-red-200 dark:border-red-800', bar: 'bg-red-500' };
          };
          const labelMap: Record<string, string> = { HIGHLY_TRUSTED: 'Highly Trusted', TRUSTED: 'Trusted', NEUTRAL: 'Neutral', RISKY: 'Risky', DANGEROUS: 'Dangerous' };
          const lc = levelColor(ts.overall_trust_level);
          return (
            <div className="space-y-4 mb-5 text-left">

              {/* Summary */}
              {ts.summary && (
                <div className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl p-4">
                  <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-500" /> Summary
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{stripMd(ts.summary)}</p>
                </div>
              )}

              {/* Safety Recommendations */}
              {ts.action_items && (
                <div className={`rounded-xl border ${lc.bg} ${lc.border} overflow-hidden`}>
                  <div className="flex items-center justify-between px-4 py-3 border-b border-current/10">
                    <div className="flex items-center gap-2">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-white dark:bg-gray-950 border ${lc.border}`}>
                        <ShieldCheck className={`w-4 h-4 ${lc.text}`} />
                      </div>
                      <p className="text-sm font-bold text-gray-800 dark:text-gray-100">Safety Recommendations</p>
                    </div>
                    <span className={`text-xs font-bold uppercase tracking-wide px-2 py-1 rounded-full bg-white dark:bg-gray-950 border ${lc.border} ${lc.text}`}>
                      {ts.action_items.risk_level} Risk
                    </span>
                  </div>
                  <div className="p-4 space-y-3">
                    {ts.action_items.can_do && ts.action_items.can_do.length > 0 && (
                      <div>
                        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 flex items-center gap-1">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-500" /> Can Do
                        </p>
                        <div className="space-y-1.5">
                          {ts.action_items.can_do.map(a => (
                            <div key={a} className="flex items-center gap-2 bg-white dark:bg-gray-950 rounded-lg px-3 py-2 border border-emerald-100 dark:border-emerald-800">
                              <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                              <span className="text-sm text-gray-700 dark:text-gray-300">{a}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {ts.action_items.should_avoid && ts.action_items.should_avoid.length > 0 && (
                      <div>
                        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 text-red-500" /> Should Avoid
                        </p>
                        <div className="space-y-1.5">
                          {ts.action_items.should_avoid.map(a => (
                            <div key={a} className="flex items-center gap-2 bg-white dark:bg-gray-950 rounded-lg px-3 py-2 border border-red-100 dark:border-red-800">
                              <AlertCircle className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
                              <span className="text-sm text-gray-700 dark:text-gray-300">{a}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    <div className="bg-white dark:bg-gray-950 rounded-lg px-3 py-2 border border-gray-100 dark:border-gray-800 flex items-center gap-2">
                      <CreditCard className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{ts.action_items.payment_advice}</span>
                    </div>
                    {ts.action_items.trust_badges && ts.action_items.trust_badges.length > 0 && (
                      <div>
                        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 flex items-center gap-1">
                          <BadgeCheck className="w-3.5 h-3.5 text-indigo-500" /> Trust Badges
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {ts.action_items.trust_badges.map(badge => (
                            <span key={badge} className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300">
                              <BadgeCheck className="w-3 h-3" /> {badge}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {ts.action_items.registered_business && (() => {
                      const rb = ts.action_items.registered_business!;
                      return (
                        <div className="bg-white dark:bg-gray-950 rounded-xl border border-gray-100 dark:border-gray-800 overflow-hidden">
                          <div className="px-3 py-2 border-b border-gray-100 dark:border-gray-800 flex items-center gap-2">
                            <Building2 className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500" />
                            <p className="text-xs font-bold text-gray-700 dark:text-gray-200">{rb.business_name}</p>
                            {rb.verified_since && (
                              <span className="ml-auto text-[10px] text-gray-400 dark:text-gray-500">
                                Since {new Date(rb.verified_since).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                              </span>
                            )}
                          </div>
                          <div className="p-3 space-y-2.5">
                            {rb.kyc_verified_count && (
                              <div className="flex items-center gap-2">
                                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                                <span className="text-xs font-semibold text-gray-700 dark:text-gray-200">{rb.kyc_verified_count}</span>
                              </div>
                            )}
                            {rb.verification_details && rb.verification_details.length > 0 && (
                              <div>
                                <p className="text-[10px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide mb-1.5">Verification Details</p>
                                <div className="space-y-1">
                                  {rb.verification_details.map(d => {
                                    const verified = d.includes('✔');
                                    return (
                                      <div key={d} className={`flex items-center gap-2 text-xs px-2 py-1 rounded-lg ${verified ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300' : 'bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-300'}`}>
                                        {verified
                                          ? <CheckCircle className="w-3 h-3 flex-shrink-0" />
                                          : <AlertCircle className="w-3 h-3 flex-shrink-0" />}
                                        {d}
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            )}
                            {rb.documents_uploaded && rb.documents_uploaded.length > 0 && (
                              <div>
                                <p className="text-[10px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide mb-1.5">Documents Uploaded</p>
                                <div className="space-y-1">
                                  {rb.documents_uploaded.map(d => (
                                    <div key={d} className="flex items-center gap-2 text-xs px-2 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300">
                                      <FileText className="w-3 h-3 flex-shrink-0" />
                                      {d}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                </div>
              )}

              {/* Sectional Analysis */}
              {ts.sectional_status && (
                <div className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl p-4">
                  <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">Sectional Analysis</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {([
                      { key: 'technical_trust' as const, label: 'Technical Trust' },
                      { key: 'related_scam_reports' as const, label: 'Related Scam Reports' },
                      { key: 'public_reputation_trust' as const, label: 'Public Reputation' },
                      { key: 'unclear_business_legitimacy' as const, label: 'Business Legitimacy' },
                      { key: 'google_business_profile_trust' as const, label: 'Google Business Profile' },
                    ]).map(({ key, label }) => {
                      const s = ts.sectional_status![key];
                      if (!s) return null;
                      const c = levelColor(s.trust_level);
                      return (
                        <div key={key} className={`rounded-xl p-3 border ${c.bg} ${c.border}`}>
                          <div className="flex items-start justify-between gap-3 mb-2">
                            <p className="text-[11px] font-semibold text-gray-600 dark:text-gray-300 leading-snug">{label}</p>
                            <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold border bg-white dark:bg-gray-950 ${c.border} ${c.text}`}>
                              {labelMap[s.trust_level] ?? s.trust_level}
                            </span>
                          </div>
                          <div className="flex items-end justify-between gap-3">
                            <p className={`text-2xl font-black ${c.text}`}>{Math.round(s.trust_percentage)}%</p>
                            {typeof s.trust_score === 'number' && (
                              <p className={`text-xs font-bold ${c.text}`}>
                                Score {s.trust_score > 0 ? `+${s.trust_score}` : s.trust_score}
                              </p>
                            )}
                          </div>
                          <div className="mt-1.5 bg-white/60 dark:bg-gray-950/60 rounded-full h-1.5 overflow-hidden">
                            <div className={`h-full rounded-full ${c.bar}`} style={{ width: `${s.trust_percentage}%` }} />
                          </div>
                          <div className="mt-2 flex items-center justify-between gap-3 text-[10px] font-semibold">
                            <p className={`${c.text}`}>{labelMap[s.trust_level] ?? s.trust_level}</p>
                            <p className="text-gray-500 dark:text-gray-400">
                              {typeof s.total_number_of_reviews === 'number'
                                ? `${s.total_number_of_reviews} review${s.total_number_of_reviews === 1 ? '' : 's'}`
                                : 'No review count'}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Domain Info */}
              {ts.domain_info && (
                <div className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 dark:border-gray-800">
                    <Globe className="w-4 h-4 text-indigo-500" />
                    <p className="text-sm font-bold text-gray-800 dark:text-gray-100">Domain Information</p>
                    {ts.domain_info.domain_age_days != null && (
                      <span className="ml-auto text-xs font-semibold text-gray-500 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-2 py-0.5 rounded-full">
                        {Math.round(ts.domain_info.domain_age_days / 365.25)} yrs old
                      </span>
                    )}
                  </div>
                  <div className="p-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
                    {[
                      { label: 'Registrar', value: ts.domain_info.registrar },
                      { label: 'Status', value: ts.domain_info.status },
                      { label: 'Expires', value: ts.domain_info.expires ? new Date(ts.domain_info.expires).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }) : undefined },
                      { label: 'IP Address', value: ts.domain_info.ip },
                      { label: 'IP Type', value: ts.domain_info.ip_reputation?.usage_type },
                      { label: 'Abuse Score', value: ts.domain_info.ip_reputation?.abuse_score != null ? String(ts.domain_info.ip_reputation.abuse_score) : undefined },
                    ].filter(r => r.value).map(({ label, value }) => (
                      <div key={label} className="flex flex-col">
                        <span className="text-[10px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide">{label}</span>
                        <span className="text-sm font-medium text-gray-800 dark:text-gray-100 mt-0.5">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SSL Certificate */}
              {ts.ssl_info && (
                <div className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 dark:border-gray-800">
                    <Lock className="w-4 h-4 text-indigo-500" />
                    <p className="text-sm font-bold text-gray-800 dark:text-gray-100">SSL Certificate</p>
                    <span className={`ml-auto inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full ${ts.ssl_info.valid ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800' : 'bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800'}`}>
                      {ts.ssl_info.valid ? <CheckCircle className="w-3 h-3" /> : <AlertCircle className="w-3 h-3" />}
                      {ts.ssl_info.valid ? 'Valid' : 'Invalid'}
                    </span>
                  </div>
                  <div className="p-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
                    {[
                      { label: 'Issuer', value: ts.ssl_info.issuer?.organizationName },
                      { label: 'Days Left', value: ts.ssl_info.days_left != null ? `${ts.ssl_info.days_left} days` : undefined },
                      { label: 'Expires', value: ts.ssl_info.not_after ? new Date(ts.ssl_info.not_after).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }) : undefined },
                      { label: 'Self Signed', value: ts.ssl_info.self_signed != null ? (ts.ssl_info.self_signed ? 'Yes' : 'No') : undefined },
                    ].filter(r => r.value).map(({ label, value }) => (
                      <div key={label} className="flex flex-col">
                        <span className="text-[10px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide">{label}</span>
                        <span className={`text-sm font-medium mt-0.5 ${label === 'Days Left' ? (ts.ssl_info!.days_left! > 30 ? 'text-emerald-700 dark:text-emerald-300' : 'text-red-700 dark:text-red-300') : 'text-gray-800 dark:text-gray-100'}`}>{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Website Legitimacy */}
              {ts.website_legitimacy_info && (
                <div className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 dark:border-gray-800">
                    <BadgeCheck className="w-4 h-4 text-indigo-500" />
                    <p className="text-sm font-bold text-gray-800 dark:text-gray-100">Website Legitimacy</p>
                    {ts.website_legitimacy_info.pages_count != null && (
                      <span className="ml-auto text-xs text-gray-400 dark:text-gray-500">{ts.website_legitimacy_info.pages_count} pages found</span>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full border ${ts.website_legitimacy_info.contact_info_present ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800' : 'bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800'}`}>
                        {ts.website_legitimacy_info.contact_info_present ? <CheckCircle className="w-3 h-3" /> : <AlertCircle className="w-3 h-3" />} Contact Info
                      </span>
                      <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full border ${ts.website_legitimacy_info.legal_identifiers_present ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800' : 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800'}`}>
                        {ts.website_legitimacy_info.legal_identifiers_present ? <CheckCircle className="w-3 h-3" /> : <AlertCircle className="w-3 h-3" />} Legal Identifiers
                      </span>
                    </div>
                    {ts.website_legitimacy_info.pages_found && Object.keys(ts.website_legitimacy_info.pages_found).length > 0 && (
                      <div className="grid grid-cols-2 gap-2">
                        {Object.entries(ts.website_legitimacy_info.pages_found).map(([key, url]) => (
                          <a key={key} href={url} target="_blank" rel="noopener noreferrer"
                            className="flex items-center justify-center gap-1.5 p-2 rounded-xl border border-indigo-100 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950/40 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 transition-colors text-xs font-semibold text-indigo-700 dark:text-indigo-300 capitalize">
                            {key}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Contact Details */}
              {ts.pages_summary?.contact_details && (() => {
                const c = ts.pages_summary!.contact_details!;
                const hasAny = (c.phones?.length ?? 0) > 0 || (c.emails?.length ?? 0) > 0;
                if (!hasAny) return null;
                return (
                  <div className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 dark:border-gray-800">
                      <Phone className="w-4 h-4 text-indigo-500" />
                      <p className="text-sm font-bold text-gray-800 dark:text-gray-100">Contact Details</p>
                    </div>
                    <div className="p-4 space-y-3">
                      {c.phones && c.phones.length > 0 && (
                        <div className="flex items-center gap-3">
                          <div className="w-7 h-7 bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-800 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Phone className="w-3.5 h-3.5 text-green-600 dark:text-green-300" />
                          </div>
                          <div className="flex flex-wrap gap-2">{c.phones.map(p => <span key={p} className="text-sm font-semibold text-gray-800 dark:text-gray-100">{p}</span>)}</div>
                        </div>
                      )}
                      {c.emails && c.emails.length > 0 && (
                        <div className="flex items-center gap-3">
                          <div className="w-7 h-7 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Mail className="w-3.5 h-3.5 text-blue-600 dark:text-blue-300" />
                          </div>
                          <div className="flex flex-wrap gap-2">{c.emails.map(e => <span key={e} className="text-sm font-semibold text-gray-800 dark:text-gray-100">{e}</span>)}</div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })()}

              {/* Google Reviews */}
              {ts.google_reviews_data && (ts.google_reviews_data.total_reviews ?? 0) > 0 && (
                <div className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 dark:border-gray-800 flex-wrap">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <p className="text-sm font-bold text-gray-800 dark:text-gray-100">Google Reviews</p>
                    <div className="flex items-center gap-1 ml-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={`w-3.5 h-3.5 ${i < Math.round(ts.google_reviews_data!.average_rating ?? 0) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200 dark:text-gray-700'}`} />
                      ))}
                      <span className="text-sm font-black text-gray-800 dark:text-gray-100 ml-1">{ts.google_reviews_data.average_rating?.toFixed(1)}</span>
                    </div>
                    <span className="text-xs text-gray-400 dark:text-gray-500">({ts.google_reviews_data.total_reviews})</span>
                  </div>
                  <div className="divide-y divide-gray-50 dark:divide-gray-800">
                    {ts.google_reviews_data.reviews?.slice(0, 3).map((review, i) => (
                      <div key={i} className="p-4">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-full bg-indigo-100 dark:bg-indigo-950/60 flex items-center justify-center text-xs font-bold text-indigo-700 dark:text-indigo-300 flex-shrink-0">
                              {(review.displayname ?? '?').charAt(0).toUpperCase()}
                            </div>
                            <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">{review.displayname}</p>
                          </div>
                          <div className="flex items-center gap-0.5 flex-shrink-0">
                            {Array.from({ length: 5 }).map((_, j) => (
                              <Star key={j} className={`w-3 h-3 ${j < (review.Rating ?? 0) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200 dark:text-gray-700'}`} />
                            ))}
                          </div>
                        </div>
                        {review.Review && <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed ml-9">{review.Review}</p>}
                        {review.Sentiment && (
                          <span className={`ml-9 mt-1.5 inline-block text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${review.Sentiment.includes('Positive') ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300' : 'bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300'}`}>
                            {review.Sentiment}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Facebook Page */}
              {ts.fb_page_info?.name && (
                <div className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
                  {ts.fb_page_info.cover_photo && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <div className="h-20 bg-gray-100 dark:bg-gray-800 overflow-hidden">
                      <img src={ts.fb_page_info.cover_photo} alt="Cover" className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div className="p-4">
                    <div className="flex items-start gap-3">
                      {ts.fb_page_info.profile_picture && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={ts.fb_page_info.profile_picture} alt={ts.fb_page_info.name}
                          className={`w-10 h-10 rounded-full border-2 border-white dark:border-gray-950 shadow flex-shrink-0 ${ts.fb_page_info.cover_photo ? '-mt-6' : ''}`} />
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-gray-800 dark:text-gray-100">{ts.fb_page_info.name}</p>
                        {ts.fb_page_info.category && <p className="text-xs text-gray-400 dark:text-gray-500">{ts.fb_page_info.category}</p>}
                        {ts.fb_page_info.profile_intro_text && (
                          <p className="text-xs text-gray-600 dark:text-gray-300 mt-1 leading-relaxed">{ts.fb_page_info.profile_intro_text}</p>
                        )}
                      </div>
                      {ts.fb_page_info.url && (
                        <a href={ts.fb_page_info.url} target="_blank" rel="noopener noreferrer"
                          className="flex-shrink-0 text-xs text-indigo-600 dark:text-indigo-300 hover:underline flex items-center gap-1">
                          <ArrowRight className="w-3 h-3" /> View
                        </a>
                      )}
                    </div>
                    {ts.fb_page_info.followers && (
                      <div className="mt-2 inline-flex items-center gap-1 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg px-2.5 py-1">
                        <span className="text-sm font-black text-gray-800 dark:text-gray-100">{ts.fb_page_info.followers}</span>
                        <span className="text-xs text-gray-400 dark:text-gray-500">Followers</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* About the Business */}
              {ts.pages_summary?.about_summary?.available && ts.pages_summary.about_summary.summary && (
                <div className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 dark:border-gray-800">
                    <Sparkles className="w-4 h-4 text-indigo-500" />
                    <p className="text-sm font-bold text-gray-800 dark:text-gray-100">About the Business</p>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{ts.pages_summary.about_summary.summary}</p>
                  </div>
                </div>
              )}

            </div>
          );
        })()}

        {/* Verification Badges */}
        <div className="grid grid-cols-3 gap-3 mb-5">
          {([
            {
              key: 'gst',
              label: 'GST',
              sub: verifyStatus?.details.gst?.gstin || '',
              icon: CreditCard,
              done: verifyStatus?.verifications.gst ?? gstVerified,
            },
            {
              key: 'aadhaar',
              label: 'Aadhaar',
              sub: verifyStatus?.details.aadhaar?.aadhaarNumber || '',
              icon: Fingerprint,
              done: verifyStatus?.verifications.aadhaar ?? aadhaarVerified,
            },
            {
              key: 'pan',
              label: 'PAN',
              sub: verifyStatus?.details.pan?.panNumber || '',
              icon: CreditCard,
              done: verifyStatus?.verifications.pan ?? panVerified,
            },
            {
              key: 'bank',
              label: 'Bank',
              sub: verifyStatus?.details.bankAccount?.accountNumber || '',
              icon: Building2,
              done: verifyStatus?.verifications.bankAccount ?? bankVerified,
            },
            {
              key: 'mca',
              label: 'MCA / CIN',
              sub: verifyStatus?.details.mca?.cin || '',
              icon: ShieldCheck,
              done: verifyStatus?.verifications.mca ?? mcaVerified,
            },
            {
              key: 'docs',
              label: 'Documents',
              sub: uploadedFiles.length > 0 ? `${uploadedFiles.length} file(s)` : '',
              icon: FileText,
              done: (uploadedFiles.length > 0) || (application?.documents && application.documents.length > 0),
            },
          ]).map(({ key, label, sub, icon: Icon, done }) => (
            <div
              key={key}
              className={`border rounded-xl p-3 flex flex-col items-center gap-1.5 ${done ? 'bg-green-50 dark:bg-green-950/40 border-green-100 dark:border-green-800' : 'bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 opacity-50'
                }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${done ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-700'
                }`}>
                {done
                  ? <CheckCircle className="w-4 h-4 text-white" />
                  : <Icon className="w-4 h-4 text-white" />}
              </div>
              <span className={`text-xs font-semibold text-center leading-tight ${done ? 'text-green-700 dark:text-green-300' : 'text-gray-400 dark:text-gray-500'
                }`}>{label}</span>
              {sub && <span className="text-[10px] text-gray-400 dark:text-gray-500 font-mono text-center leading-tight">{sub}</span>}
            </div>
          ))}
        </div>

        {/* Certificate Banner */}
        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/40 dark:to-yellow-950/30 border-2 border-amber-200 dark:border-amber-800 rounded-2xl p-5 mb-5 text-left relative overflow-hidden">
          <div className="absolute top-2 right-3 text-4xl opacity-20">🏅</div>
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/60 rounded-xl flex items-center justify-center flex-shrink-0">
              <Award className="w-5 h-5 text-amber-600 dark:text-amber-300" />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-amber-900 dark:text-amber-200 mb-1">Your Certificate is Being Prepared</p>
              <p className="text-xs text-amber-700 dark:text-amber-300 leading-relaxed">
                Your <strong>RakshaAI Verified Business Certificate</strong> is being generated and will be emailed to <strong>{application?.email}</strong> within 24 hours. It includes:
              </p>
              <ul className="mt-2 space-y-1">
                {[
                  'Official RakshaAI digital signature & QR verification code',
                  'GST registration confirmation & Aadhaar KYC details',
                  'Business trust score with detailed breakdown',
                  'All uploaded verification documents reference',
                  'Certificate validity period & renewal info',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-1.5 text-xs text-amber-800 dark:text-amber-200">
                    <CheckCircle className="w-3 h-3 text-amber-600 dark:text-amber-300 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {application && (
          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-4 text-left mb-5">
            <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide mb-2">Verified Business</p>
            <div className="flex items-center gap-2"><Building2 className="w-4 h-4 text-gray-400 dark:text-gray-500 flex-shrink-0" /><span className="text-sm font-semibold text-gray-800 dark:text-gray-100">{application.businessName}</span></div>
            {application.businessUrl && <div className="flex items-center gap-2 mt-1.5"><Globe className="w-4 h-4 text-gray-400 dark:text-gray-500 flex-shrink-0" /><span className="text-sm text-gray-500 dark:text-gray-300 truncate">{application.businessUrl}</span></div>}
            <div className="mt-2 pt-2 border-t border-gray-200 dark:border-gray-700">
              <p className="text-xs text-gray-400 dark:text-gray-500">Subscription active · <span className="text-green-600 dark:text-green-400 font-medium">₹299/month</span> · Renews monthly</p>
            </div>
          </div>
        )}

        <button onClick={() => router.push('/business-dashboard')}
          className="w-full flex items-center justify-center gap-2 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-sm hover:shadow-md transition-all text-sm mb-3">
          Go to Dashboard <ArrowRight className="w-4 h-4" />
        </button>
        <button onClick={handleStartOver}
          className="w-full py-3 text-sm text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 font-medium border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
          Register Another Business
        </button>
      </div>
    );
  };

  const stepMeta: Record<number, { title: string; subtitle: string }> = {
    1: { title: 'Business Information', subtitle: 'Tell us about your business to get started' },
    2: { title: 'Activate Verification', subtitle: 'Subscribe at ₹299/month and unlock your certificate' },
    3: { title: 'GST Verification', subtitle: 'Confirm your business is GST-registered' },
    4: { title: 'Aadhaar KYC', subtitle: 'Verify your identity via Aadhaar OTP' },
    5: { title: 'Document Upload', subtitle: 'Upload business documents for verification' },
    6: isFreeUser
      ? { title: 'Basic Listing Active', subtitle: 'Your business is live on RakshaAI' }
      : { title: 'Verification Complete', subtitle: '' },
  };

  const activeStep = currentDisplayStep;
  const meta = stepMeta[activeStep] || stepMeta[1];

  // ── Per-step summary text shown in the sidebar once a step is completed ────
  const stepSummaries: Record<number, string> = {
    1: businessName || application?.businessName || '',
    2: existingPlan === 'annually'
      ? 'Annual Plan · ₹3,000/year'
      : existingPlan === 'quarterly'
        ? 'Quarterly Plan'
      : existingPlan === 'monthly' || application?.subscriptionPaid
        ? 'Monthly Plan · ₹299/month'
        : isFreeUser
          ? 'Free Plan · Basic listing'
          : '',
    3: (() => {
      if (verifyStatus?.verifications.gst && verifyStatus.details.gst?.gstin)
        return `GST ✓ · ${verifyStatus.details.gst.gstin}`;
      if (gstVerified) return `GST: ${gstNumber}`;
      if (application?.gstVerified) return `GST: ${application.gstNumber}`;
      return 'Skipped';
    })(),
    4: (() => {
      const v = verifyStatus?.verifications;
      const d = verifyStatus?.details;
      if (v?.aadhaar) return `Aadhaar ✓ · ${d?.aadhaar?.aadhaarNumber ?? ''}`;
      if (v?.pan) return `PAN ✓ · ${d?.pan?.panNumber ?? ''}`;
      if (v?.bankAccount) return `Bank ✓ · ${d?.bankAccount?.accountNumber ?? ''}`;
      if (v?.mca) return `MCA ✓ · ${d?.mca?.cin ?? ''}`;
      if (aadhaarVerified || panVerified || bankVerified || mcaVerified) return 'KYC verified ✓';
      if (application?.aadhaarVerified) return 'Aadhaar verified ✓';
      return 'Skipped';
    })(),
    5: uploadedFiles.length > 0
      ? `${uploadedFiles.length} doc${uploadedFiles.length > 1 ? 's' : ''} uploaded`
      : application?.documents?.length
        ? `${application.documents.length} doc${application.documents.length > 1 ? 's' : ''} uploaded`
        : 'Skipped',
  };

  // ── Navigate to any previously reached step ──────────────────────────────
  const handleStepClick = (stepNum: number) => {
    if (stepNum <= maxReachedStep) setCurrentDisplayStep(stepNum);
  };

  // ── Advance to a step (updates both display + max reached) ────────────────
  const goToStep = (stepNum: number) => {
    setCurrentDisplayStep(stepNum);
    setMaxReachedStep((prev) => Math.max(prev, stepNum));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950">
      <OnboardingNavbar />

      <main className="flex-1 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {initialLoading ? (
            <OnboardingSkeleton />
          ) : (
            <div className="flex gap-8 xl:gap-12 items-start">

              <StepSidebar
                activeStep={activeStep}
                maxReachedStep={maxReachedStep}
                onStepClick={handleStepClick}
                stepSummaries={stepSummaries}
                isFreeUser={isFreeUser}
              />

              <div className={`flex-1 min-w-0 mx-auto lg:mx-0 ${activeStep === 2 ? 'max-w-none' : 'max-w-2xl'}`}>
                <MobileStepBar
                  activeStep={activeStep}
                  maxReachedStep={maxReachedStep}
                  onStepClick={handleStepClick}
                  stepSummaries={stepSummaries}
                />

                <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
                  {activeStep !== 6 && (
                    <div className="px-6 py-5 border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          {(() => { const Icon = STEPS[activeStep - 1]?.icon || Shield; return <Icon className="w-5 h-5 text-white" />; })()}
                        </div>
                        <div>
                          <h1 className="text-lg font-bold text-gray-900 dark:text-gray-100">{meta.title}</h1>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{meta.subtitle}</p>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="p-6 dark:bg-gray-900">
                    {activeStep === 1 && renderStep1()}
                    {activeStep === 2 && renderSubscriptionStep()}
                    {activeStep === 3 && renderStep2()}
                    {activeStep === 4 && renderStep3()}
                    {activeStep === 5 && renderStep4()}
                    {activeStep === 6 && renderStep5()}
                  </div>
                </div>

                {activeStep < 6 && (
                  <p className="text-center text-xs text-gray-400 dark:text-gray-500 mt-4">
                    Need help?{' '}
                    <Link href="/contact" className="text-indigo-500 dark:text-indigo-400 hover:underline">Contact our support team</Link>
                    {' '} available Mon–Sat, 9 AM to 6 PM IST.
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </main>

      <OnboardingFooter />
    </div>
  );
}
