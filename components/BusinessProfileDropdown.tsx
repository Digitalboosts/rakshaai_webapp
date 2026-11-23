'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Briefcase,
  ChevronDown,
  LogOut,
  User,
  Building2,
  Globe,
  BadgeCheck,
  ShieldCheck,
  Loader2,
  AlertCircle,
} from 'lucide-react';

interface BusinessProfile {
  id?: number;
  business_user_id?: string;
  email?: string;
  website?: string;
  created_at?: string;
}

export default function BusinessProfileDropdown() {
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [profile, setProfile] = useState<BusinessProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [open, setOpen] = useState(false);

  // Fetch profile on mount browser sends HttpOnly cookie automatically
  useEffect(() => {
    fetch('/api/business-auth/profile')
      .then((r) => {
        if (!r.ok) return null; // Not logged in
        return r.json();
      })
      .then((data) => {
        if (data?.business) setProfile(data.business);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handle(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, [open]);

  const handleLogout = async () => {
    await fetch('/api/business-auth/logout', { method: 'POST' }).catch(() => {});
    setProfile(null);
    setOpen(false);
    router.push('/');
  };

  // ── Not logged in show standard button ──────────────────────────────────
  if (!loading && !profile) {
    return (
      <Link
        href="/business-verification"
        className="hidden sm:flex items-center space-x-1.5 sm:space-x-2 px-3 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 whitespace-nowrap"
      >
        <Briefcase className="h-4 w-4" />
        <span className="text-xs sm:text-sm">Business Owner</span>
      </Link>
    );
  }

  // ── Avatar initials helper ────────────────────────────────────────────────
  const displayName = profile?.email || profile?.business_user_id || 'Business';
  const initials = (profile?.email ?? '').slice(0, 2).toUpperCase() || 'B';

  return (
    <div ref={dropdownRef} className="relative hidden sm:block">
      {/* Trigger button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 px-3 py-2 rounded-xl border border-indigo-200 bg-indigo-50 hover:bg-indigo-100 transition-all duration-200"
      >
        {/* Avatar */}
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
          {loading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : initials || <User className="w-3.5 h-3.5" />}
        </div>
        <span className="text-xs font-semibold text-indigo-700 max-w-[100px] truncate hidden md:block">
          {loading ? 'Loading…' : displayName}
        </span>
        <ChevronDown className={`w-3.5 h-3.5 text-indigo-500 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown panel */}
      {open && (
        <div className="absolute right-0 top-full mt-2 w-72 bg-white rounded-2xl shadow-2xl shadow-indigo-100/60 border border-gray-100 z-50 overflow-hidden">

          {/* Profile header */}
          <div className="bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white text-lg font-extrabold flex-shrink-0">
                {initials || <User className="w-5 h-5" />}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-bold text-white truncate">{displayName}</p>
              </div>
            </div>
          </div>

          {/* Error state */}
          {error && (
            <div className="flex items-start gap-2 px-4 py-3 bg-red-50 border-b border-red-100">
              <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-red-600">{error}</p>
            </div>
          )}

          {/* Profile details */}
          {profile && !error && (
            <div className="px-4 py-3 space-y-2.5 border-b border-gray-100">
              {profile.website && (
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-3.5 h-3.5 text-blue-500" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-400">Website</p>
                    <p className="text-xs font-semibold text-gray-700 truncate">{profile.website}</p>
                  </div>
                </div>
              )}
              {profile.created_at && (
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
                    <BadgeCheck className="w-3.5 h-3.5 text-green-500" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Member Since</p>
                    <p className="text-xs font-semibold text-gray-700">{new Date(profile.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Actions */}
          <div className="px-3 py-2 space-y-0.5">
            <Link
              href="/business-onboarding"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2.5 w-full px-3 py-2.5 rounded-xl hover:bg-indigo-50 transition-colors group"
            >
              <Building2 className="w-4 h-4 text-indigo-400 group-hover:text-indigo-600" />
              <span className="text-sm font-medium text-gray-700 group-hover:text-indigo-700">Dashboard</span>
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2.5 w-full px-3 py-2.5 rounded-xl hover:bg-red-50 transition-colors group"
            >
              <LogOut className="w-4 h-4 text-gray-400 group-hover:text-red-500" />
              <span className="text-sm font-medium text-gray-700 group-hover:text-red-600">Sign Out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
