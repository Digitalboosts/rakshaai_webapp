'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Shield,
  Globe,
  Mail,
  ArrowRight,
  Loader2,
  CheckCircle,
  RefreshCw,
  Building2,
  Lock,
  ChevronLeft,
  UserPlus,
  BadgeCheck,
  BarChart3,
  Star,
  Zap,
} from 'lucide-react';

// ── OTP input (6 boxes) ──────────────────────────────────────────────────────
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
    if (e.key === 'Backspace' && !value[idx] && idx > 0) refs.current[idx - 1]?.focus();
  };

  return (
    <div className="flex gap-2 justify-center">
      {Array.from({ length: slots }).map((_, idx) => (
        <input
          key={idx}
          ref={(el) => { refs.current[idx] = el; }}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={value[idx] || ''}
          onChange={(e) => handleChange(idx, e.target.value)}
          onKeyDown={(e) => handleKeyDown(idx, e)}
          className="w-11 h-12 text-center text-xl font-bold border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100 dark:focus:border-indigo-400 dark:focus:ring-indigo-900 transition-all bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
        />
      ))}
    </div>
  );
}

// ── Main page ────────────────────────────────────────────────────────────────
// Flow:
//   'login'  → email only → Send OTP
//               ↳ existing user  → 'otp'
//               ↳ new user       → 'signup' (email prefilled + website)
//   'signup' → email + website → Send OTP → 'otp'
//   'otp'    → 6-digit OTP → verify → /business-onboarding

export default function BusinessLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [otp, setOtp] = useState('');

  type Step = 'login' | 'signup' | 'otp';
  const [step, setStep] = useState<Step>('login');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [resendCountdown, setResendCountdown] = useState(0);

  // Redirect if already logged in
  useEffect(() => {
    fetch('/api/business-auth/profile')
      .then((r) => { if (r.ok) router.replace('/business-onboarding'); })
      .catch(() => { });
  }, [router]);

  // Resend countdown
  useEffect(() => {
    if (resendCountdown <= 0) return;
    const t = setTimeout(() => setResendCountdown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [resendCountdown]);

  // ── Shared: call send-otp API ─────────────────────────────────────────────
  const callSendOtp = async (emailVal: string, websiteVal?: string) => {
    const body: Record<string, string> = { email: emailVal };
    if (websiteVal) {
      body.website = websiteVal.startsWith('http') ? websiteVal : `https://${websiteVal}`;
    }
    const res = await fetch('/api/business-auth/send-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    return { ok: res.ok, status: res.status, data };
  };

  // ── Step: Login email only ──────────────────────────────────────────────
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!email.trim()) { setError('Please enter your business email.'); return; }

    setLoading(true);
    try {
      const { ok, data } = await callSendOtp(email.trim());
      if (ok) {
        // Existing user OTP sent
        setStep('otp');
        setResendCountdown(60);
      } else {
        // Check if backend is telling us the user doesn't exist / needs registration
        const msg: string = (data?.error || data?.detail || data?.message || '').toLowerCase();
        const isNewUser =
          msg.includes('not found') ||
          msg.includes('not registered') ||
          msg.includes('no account') ||
          msg.includes('website') || // backend may say website required
          msg.includes('register');
        if (isNewUser) {
          // Transition to sign-up step
          setStep('signup');
          setError('');
        } else {
          setError(data?.error || data?.detail || data?.message || 'Failed to send OTP. Please try again.');
        }
      }
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  // ── Step: Signup email + website ───────────────────────────────────────
  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!email.trim()) { setError('Please enter your business email.'); return; }
    if (!website.trim()) { setError('Please enter your business website URL.'); return; }

    setLoading(true);
    try {
      const { ok, data } = await callSendOtp(email.trim(), website.trim());
      if (ok) {
        setStep('otp');
        setResendCountdown(60);
      } else {
        setError(data?.error || data?.detail || data?.message || 'Failed to send OTP. Please try again.');
      }
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  // ── Step: OTP verify ────────────────────────────────────────────────────
  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (otp.length < 6) { setError('Please enter the complete 6-digit OTP.'); return; }

    setLoading(true);
    try {
      const res = await fetch('/api/business-auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), otp }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error || 'Invalid OTP. Please try again.'); return; }
      router.replace('/business-onboarding');
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  // ── Resend OTP ────────────────────────────────────────────────────────────
  const handleResend = async () => {
    if (resendCountdown > 0) return;
    setError('');
    setOtp('');
    setLoading(true);
    try {
      const { ok, data } = await callSendOtp(email.trim(), website || undefined);
      if (!ok) { setError(data?.error || data?.detail || data?.message || 'Failed to resend OTP.'); return; }
      setResendCountdown(60);
    } catch {
      setError('Network error.');
    } finally {
      setLoading(false);
    }
  };

  const isOtp = step === 'otp';
  const isSignup = step === 'signup';

  const infoFeatures = [
    {
      icon: <BadgeCheck className="w-5 h-5 text-indigo-300" />,
      title: 'Verified Business Badge',
      desc: 'Get a trust badge displayed to millions of users who check your website.',
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-violet-300" />,
      title: 'Real-Time Analytics',
      desc: 'Monitor how users perceive your business and track trust score trends.',
    },
    {
      icon: <Zap className="w-5 h-5 text-sky-300" />,
      title: 'Instant Scam Alerts',
      desc: 'Be notified the moment any fraudulent activity is reported against your domain.',
    },
    {
      icon: <Star className="w-5 h-5 text-amber-300" />,
      title: 'Review Management',
      desc: 'Respond to user reviews and build stronger community trust.',
    },
  ];

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col">

      {/* Slim top nav */}

      <header className="h-14 flex items-center px-5 border-b border-gray-200/60 dark:border-gray-800 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-10">
        <Link href="/" className="flex items-center gap-2 select-none">
          <div className="w-8 h-8 flex items-center justify-center">
            <img src="/rakshaai-logo.svg" alt="RakshaAI Logo" className="w-8 h-8 object-contain" />
          </div>
          <div className="leading-none">
            <p className="text-sm font-extrabold text-gray-900 dark:text-gray-100 tracking-tight">RakshaAI</p>
            <p className="text-[9px] font-bold text-indigo-500 dark:text-indigo-400 uppercase tracking-widest">Safer India</p>
          </div>
        </Link>
        <div className="ml-auto">
          <Link href="/" className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
            <ChevronLeft className="w-3.5 h-3.5" /> Back to Home
          </Link>
        </div>
      </header>

      {/* ── 2-column layout ── */}
      <main className="flex-1 flex items-stretch">

        {/* ════════════════════════════════════════
            LEFT  Info / marketing panel
        ════════════════════════════════════════ */}

        <div className="hidden lg:flex w-[52%] xl:w-[55%] relative flex-col justify-between bg-gradient-to-br from-indigo-700 via-indigo-600 to-violet-700 dark:from-indigo-900 dark:via-indigo-800 dark:to-violet-900 overflow-hidden p-10 xl:p-14">
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 -left-24 w-80 h-80 bg-violet-400/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[80px]" />
            {/* subtle grid lines */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Logo mark top */}
          <div className="relative">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-10 h-10 bg-white/15 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-extrabold text-sm tracking-tight">Business Portal</p>
                <p className="text-indigo-200 text-[10px] uppercase tracking-widest font-semibold">RakshaAI</p>
              </div>
            </div>

            <h2 className="text-3xl xl:text-4xl font-extrabold text-white leading-tight mb-4">
              Build trust with<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-violet-300">
                every interaction.
              </span>
            </h2>
            <p className="text-indigo-200 text-sm leading-relaxed max-w-sm mb-10">
              Join thousands of verified Indian businesses on RakshaAI. Protect your brand, gain user confidence, and stay ahead of fraud.
            </p>

            {/* Feature list */}
            <div className="space-y-4">
              {infoFeatures.map((f) => (
                <div key={f.title} className="flex items-start gap-3.5 group">
                  <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors backdrop-blur-sm">
                    {f.icon}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{f.title}</p>
                    <p className="text-indigo-200 text-xs leading-relaxed mt-0.5">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats bar */}
          <div className="relative mt-12">
            <div className="h-px w-full bg-white/10 mb-6" />
            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                { value: '12K+', label: 'Businesses' },
                { value: '2.4M+', label: 'Users Trust Us' },
                { value: '99.9%', label: 'Uptime SLA' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-white font-extrabold text-xl xl:text-2xl">{s.value}</p>
                  <p className="text-indigo-300 text-[10px] font-semibold uppercase tracking-wider mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════
            RIGHT  Form panel
        ════════════════════════════════════════ */}
        <div className="flex-1 flex flex-col items-center justify-center px-5 py-10 sm:px-10 bg-white dark:bg-gray-950 overflow-y-auto">


          {/* Mobile brand banner (shown below lg) */}
          <div className="lg:hidden w-full max-w-md mb-8 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-5 flex items-center gap-4">
            <div className="w-11 h-11 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0">
              {isSignup ? <UserPlus className="w-5 h-5 text-white" /> : <Building2 className="w-5 h-5 text-white" />}
            </div>
            <div>
              <p className="text-white font-extrabold text-base leading-tight">
                {isSignup ? 'Create Business Account' : 'Business Owner Portal'}
              </p>
              <p className="text-indigo-200 text-xs mt-0.5">
                {step === 'otp' ? `OTP sent to ${email}` : 'Manage your business verification'}
              </p>
            </div>
          </div>

          <div className="w-full max-w-md">

            {/* Heading */}
            <div className="mb-7">
              <h1 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight">
                {step === 'login' && 'Welcome back'}
                {step === 'signup' && 'Create your account'}
                {step === 'otp' && 'Verify your email'}
              </h1>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                {step === 'login' && 'Sign in to your business dashboard with your email.'}
                {step === 'signup' && 'Enter your details to get started on RakshaAI.'}
                {step === 'otp' && `A 6-digit code was sent to ${email}.`}
              </p>
            </div>

            {/* Step indicator */}
            <div className="flex items-center gap-2 mb-7">
              <div className={`flex items-center gap-2 ${!isOtp ? 'opacity-100' : 'opacity-60'}`}>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${!isOtp ? 'bg-indigo-600 text-white' : 'bg-green-500 text-white'}`}>
                  {isOtp ? <CheckCircle className="w-4 h-4" /> : '1'}
                </div>
                <span className="text-xs font-semibold text-gray-600 dark:text-gray-400 hidden sm:inline">
                  {isSignup ? 'Your Details' : 'Your Email'}
                </span>
              </div>
              <div className="flex-1 h-0.5 rounded-full bg-gradient-to-r from-indigo-200 to-gray-200 dark:from-indigo-800 dark:to-gray-700 mx-1" />
              <div className={`flex items-center gap-2 ${isOtp ? 'opacity-100' : 'opacity-40'}`}>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${isOtp ? 'bg-indigo-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'}`}>
                  2
                </div>
                <span className="text-xs font-semibold text-gray-600 dark:text-gray-400 hidden sm:inline">Verify OTP</span>
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="mb-5 flex items-start gap-3 bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800 rounded-2xl p-4">
                <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-px">
                  <span className="text-white text-[10px] font-bold">!</span>
                </div>
                <p className="text-xs text-red-700 dark:text-red-300 leading-relaxed">{error}</p>
              </div>
            )}

            {/* ══════════════════════════════
                STEP: Login email only
            ══════════════════════════════ */}
            {step === 'login' && (
              <form onSubmit={handleLoginSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1.5">
                    Business Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500 pointer-events-none" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@yourbusiness.com"
                      autoFocus
                      required
                      className="w-full pl-10 pr-4 py-3.5 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:border-indigo-400 dark:focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900/50 transition-all bg-gray-50 dark:bg-gray-900 focus:bg-white dark:focus:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder:text-gray-400"
                    />
                  </div>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-1.5">Use the email associated with your business</p>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl text-sm shadow-lg shadow-indigo-200 dark:shadow-indigo-900/40 hover:shadow-xl transition-all"
                >
                  {loading ? <><Loader2 className="w-4 h-4 animate-spin" />Checking...</> : <>Send OTP <ArrowRight className="w-4 h-4" /></>}
                </button>

                <div className="flex items-center justify-center gap-2 text-xs text-gray-400 dark:text-gray-500">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Your data is encrypted &amp; secure</span>
                </div>

                <div className="flex items-center gap-3 py-1">
                  <div className="flex-1 h-px bg-gray-100 dark:bg-gray-800" />
                  <span className="text-xs text-gray-400 dark:text-gray-500 whitespace-nowrap">New to RakshaAI Business?</span>
                  <div className="flex-1 h-px bg-gray-100 dark:bg-gray-800" />
                </div>

                <button
                  type="button"
                  onClick={() => { setError(''); setStep('signup'); }}
                  className="w-full flex items-center justify-center gap-2 py-3 border-2 border-indigo-100 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 font-bold rounded-xl text-sm hover:bg-indigo-50 dark:hover:bg-indigo-950 hover:border-indigo-300 dark:hover:border-indigo-600 transition-all"
                >
                  <UserPlus className="w-4 h-4" /> Create Business Account
                </button>
              </form>
            )}

            {/* ══════════════════════════════
                STEP: Signup email + website
            ══════════════════════════════ */}
            {step === 'signup' && (
              <form onSubmit={handleSignupSubmit} className="space-y-5">
                <div className="flex items-start gap-3 bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800 rounded-2xl p-4">
                  <UserPlus className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-px" />
                  <p className="text-xs text-indigo-700 dark:text-indigo-300 leading-relaxed">
                    No account found for this email. Provide your business website to create a new account.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1.5">
                    Business Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500 pointer-events-none" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@yourbusiness.com"
                      required
                      className="w-full pl-10 pr-4 py-3.5 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:border-indigo-400 dark:focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900/50 transition-all bg-gray-50 dark:bg-gray-900 focus:bg-white dark:focus:bg-gray-900 text-gray-900 dark:text-gray-100"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1.5">
                    Business Website <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500 pointer-events-none" />
                    <input
                      type="text"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      placeholder="https://yourbusiness.com"
                      autoFocus
                      required
                      className="w-full pl-10 pr-4 py-3.5 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:border-indigo-400 dark:focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900/50 transition-all bg-gray-50 dark:bg-gray-900 focus:bg-white dark:focus:bg-gray-900 text-gray-900 dark:text-gray-100"
                    />
                  </div>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-1.5">Your official business website or landing page</p>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl text-sm shadow-lg shadow-indigo-200 dark:shadow-indigo-900/40 hover:shadow-xl transition-all"
                >
                  {loading ? <><Loader2 className="w-4 h-4 animate-spin" />Creating account...</> : <>Create Account &amp; Send OTP <ArrowRight className="w-4 h-4" /></>}
                </button>

                <button
                  type="button"
                  onClick={() => { setStep('login'); setError(''); setWebsite(''); }}
                  className="w-full flex items-center justify-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors py-1"
                >
                  <ChevronLeft className="w-3.5 h-3.5" /> Already have an account? Sign in
                </button>
              </form>
            )}

            {/* ══════════════════════════════
                STEP: OTP Verification
            ══════════════════════════════ */}
            {step === 'otp' && (
              <form onSubmit={handleVerifyOtp} className="space-y-6">
                <div className="text-center">
                  <div className="w-14 h-14 mx-auto bg-green-50 dark:bg-green-950/50 border border-green-200 dark:border-green-800 rounded-2xl flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">Check your inbox</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    We sent a 6-digit code to{' '}
                    <span className="font-semibold text-gray-700 dark:text-gray-300">{email}</span>.<br />
                    It expires in 10 minutes.
                  </p>
                </div>

                <OTPInput value={otp} onChange={setOtp} />

                <button
                  type="submit"
                  disabled={loading || otp.length < 6}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl text-sm shadow-lg shadow-indigo-200 dark:shadow-indigo-900/40 hover:shadow-xl transition-all"
                >
                  {loading ? <><Loader2 className="w-4 h-4 animate-spin" />Verifying...</> : <>Verify &amp; Continue <ArrowRight className="w-4 h-4" /></>}
                </button>

                <div className="flex items-center justify-between text-xs pt-1">
                  <button
                    type="button"
                    onClick={() => { setStep(website ? 'signup' : 'login'); setOtp(''); setError(''); }}
                    className="text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors flex items-center gap-1"
                  >
                    <ChevronLeft className="w-3 h-3" /> Change email
                  </button>
                  <button
                    type="button"
                    onClick={handleResend}
                    disabled={resendCountdown > 0 || loading}
                    className="flex items-center gap-1.5 text-indigo-500 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 disabled:text-gray-400 dark:disabled:text-gray-600 disabled:cursor-not-allowed transition-colors font-semibold"
                  >
                    <RefreshCw className={`w-3 h-3 ${loading ? 'animate-spin' : ''}`} />
                    {resendCountdown > 0 ? `Resend in ${resendCountdown}s` : 'Resend OTP'}
                  </button>
                </div>
              </form>
            )}

            {/* Bottom legal */}
            <p className="text-center text-xs text-gray-400 dark:text-gray-600 mt-8 leading-relaxed">
              By continuing, you agree to our{' '}
              <Link href="/terms-of-service" className="text-indigo-500 dark:text-indigo-400 hover:underline">Terms</Link>
              {' '}&amp;{' '}
              <Link href="/privacy-policy" className="text-indigo-500 dark:text-indigo-400 hover:underline">Privacy Policy</Link>.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
