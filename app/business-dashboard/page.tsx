'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  CheckCircle,
  AlertCircle,
  Building2,
  Globe,
  CreditCard,
  Fingerprint,
  ShieldCheck,
  FileText,
  Award,
  Crown,
  LogOut,
  User,
  LayoutDashboard,
  RefreshCw,
  Clock,
  Lock,
  ChevronRight,
  Loader2,
  BadgeCheck,
  Zap,
  Phone,
  Mail,
  ArrowRight,
  Calendar,
  Activity,
  ChevronDown,
  ExternalLink,
  Sparkles,
  Home,
  Eye,
  X,
  TrendingUp,
  Star,
  Users,
  ThumbsUp,
  ThumbsDown,
  MapPin,
  Info,
  Copy,
  Download,
  Upload,
  Menu,
} from 'lucide-react';
import QRCode from 'react-qr-code';

// ─── Types ────────────────────────────────────────────────────────────────────

interface BusinessProfile {
  id?: number;
  business_user_id?: string;
  email?: string;
  website?: string;
  created_at?: string;
  business_name?: string;
  phone?: string;
  business_info?: boolean;
}

interface VerifyStatus {
  verifications: { gst: boolean; pan: boolean; aadhaar: boolean; mca: boolean; bankAccount: boolean };
  documents?: { coiUrl: string | null; panUrl: string | null; aoaUrl: string | null; moaUrl: string | null };
  hasDocuments?: boolean;
  details: {
    gst: { gstin?: string; verifiedAt?: string; businessName?: string; tradeName?: string; status?: string; businessType?: string; registrationDate?: string; lastUpdated?: string; natureOfBusiness?: string[]; address?: string; state?: string; stateCode?: string } | null;
    pan: { panNumber?: string; verifiedAt?: string; status?: string; remarks?: string; nameMatch?: boolean; dobMatch?: boolean; category?: string; aadhaarSeedingStatus?: string } | null;
    aadhaar: { aadhaarNumber?: string; verifiedAt?: string; name?: string; gender?: string; dateOfBirth?: string; yearOfBirth?: string; careOf?: string; fullAddress?: string; address?: { house?: string; landmark?: string; vtc?: string; postOffice?: string; district?: string; state?: string; country?: string; pincode?: string }; photo?: string; status?: string } | null;
    mca: { cin?: string; verifiedAt?: string; verified?: boolean; companyName?: string; companyStatus?: string; companyClass?: string; companyCategory?: string; companySubCategory?: string; dateOfIncorporation?: string; rocCode?: string; registeredState?: string; email?: string; paidUpCapital?: string; authorisedCapital?: string; registeredAddress?: string; error?: string } | null;
    bankAccount: { accountNumber?: string; ifsc?: string; verifiedAt?: string; accountExists?: boolean; nameAtBank?: string; message?: string } | null;
  };
}

interface SubscriptionStatus {
  hasActiveSubscription: boolean;
  plan: 'monthly' | 'quarterly' | 'annually' | null;
  planId?: number | string | null;
  subscriptionId: string | null;
  status: string | null;
  count: number | null;
  subscriptions?: SubscriptionHistoryItem[];
}

interface SubscriptionHistoryItem {
  plan_id?: number | string;
  subscription_id: string;
  status: string;
  paid_count: number;
  remaining_count: number;
  total_count: number;
  customer_email?: string;
  customer_name?: string;
  customer_phone?: string;
  created_at: string;
  updated_at: string;
}

type BillingCycle = 'monthly' | 'quarterly' | 'annually';

const normalizeBillingCycle = (cycle?: string | null): BillingCycle | null => {
  if (cycle === 'monthly') return 'monthly';
  if (cycle === 'quarterly') return 'quarterly';
  if (cycle === 'annually' || cycle === 'annual' || cycle === 'yearly') return 'annually';
  return null;
};

interface PlanData {
  id: number;
  plan_id: string;
  name: string;
  description: string;
  amount: number;
  currency: string;
  interval: string;
  interval_count: number;
  price_excluding_gst: string;
  gst_percentage: string;
  gst_amount: string;
  total_price: string;
  billing_cycle: string;
  total_count: number;
  is_active: boolean;
}

type PageId = 'dashboard' | 'verifications' | 'subscription' | 'profile' | 'documents' | 'reports';

type ReportStatus = 'pending' | 'resolved' | 'dismissed' | 'under_review' | 'closed';

interface BusinessReport {
  id: number | string;
  name?: string;
  submission_type?: 'phone' | 'upi' | 'web' | string;
  phone_number?: string;
  website_url?: string;
  website_slug?: string;
  review?: string;
  attachment?: string | null;
  created_at?: string;
  status?: ReportStatus;
  status_updated_at?: string | null;
  business_owner_response?: string | null;
  business_owner_document?: string | null;
  business_owner_responded_at?: string | null;
}

const REPORT_STATUS_OPTIONS: { value: ReportStatus; label: string }[] = [
  { value: 'pending',      label: 'Pending' },
  { value: 'resolved',     label: 'Resolved' },
  { value: 'dismissed',    label: 'Dismissed' },
];

function reportStatusStyle(status?: ReportStatus): string {
  switch (status) {
    case 'resolved':     return 'bg-emerald-50 text-emerald-700 border-emerald-200';
    case 'under_review': return 'bg-blue-50 text-blue-700 border-blue-200';
    case 'dismissed':
    case 'closed':       return 'bg-gray-100 text-gray-700 border-gray-200';
    case 'pending':
    default:             return 'bg-amber-50 text-amber-700 border-amber-200';
  }
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function fmt(dateStr?: string): string {
  if (!dateStr) return '';
  try { return new Date(dateStr).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }); }
  catch { return dateStr; }
}

function mask(str?: string, keep = 4): string {
  if (!str) return '';
  if (str.length <= keep) return str;
  return '•••• ' + str.slice(-keep);
}

// ─── Small Components ─────────────────────────────────────────────────────────

function VerificationBadge({ verified }: { verified: boolean }) {
  return verified ? (
    <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
      <CheckCircle className="w-3 h-3" /> Verified
    </span>
  ) : (
    <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
      <AlertCircle className="w-3 h-3" /> Pending
    </span>
  );
}

function DataGrid({ items }: { items: { label: string; value?: string | null }[] }) {
  const filtered = items.filter((f) => f.value);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {filtered.map((f) => (
        <div key={f.label}>
          <p className="text-xs text-gray-400 mb-0.5">{f.label}</p>
          <p className="text-sm font-semibold text-gray-800">{f.value}</p>
        </div>
      ))}
    </div>
  );
}

function NotVerifiedPrompt({ label }: { label: string }) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
      <div className="flex items-center gap-2 text-gray-500">
        <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
        <p className="text-sm">{label} has not been completed yet.</p>
      </div>
      <Link href="/business-onboarding" className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors flex-shrink-0">
        Verify now <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </div>
  );
}

interface ExpandableSectionProps {
  title: string;
  icon: React.ReactNode;
  verified: boolean;
  children: React.ReactNode;
  defaultOpen?: boolean;
}
function ExpandableSection({ title, icon, verified, children, defaultOpen = false }: ExpandableSectionProps) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button onClick={() => setOpen((o) => !o)} className="w-full flex items-center justify-between px-4 py-3 bg-white hover:bg-gray-50 transition-colors">
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${verified ? 'bg-emerald-50' : 'bg-gray-100'}`}>{icon}</div>
          <span className="text-sm font-semibold text-gray-900">{title}</span>
        </div>
        <div className="flex items-center gap-3">
          <VerificationBadge verified={verified} />
          <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${open ? 'rotate-180' : ''}`} />
        </div>
      </button>
      {open && <div className="px-4 py-4 bg-gray-50 border-t border-gray-100">{children}</div>}
    </div>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

interface NavbarProps { profile: BusinessProfile | null; onLogout: () => void; currentPage: PageId; onOpenMobileSidebar: () => void }
function BusinessNavbar({ profile, onLogout, currentPage, onOpenMobileSidebar }: NavbarProps) {
  const pageLabels: Record<PageId, string> = { dashboard: 'Dashboard', verifications: 'Verifications', subscription: 'Subscription', profile: 'Profile', documents: 'Documents', reports: 'Reports' };
  const displayName = profile?.email || profile?.business_user_id || 'Business';
  return (
    <nav className="fixed top-0 left-0 right-0 z-30 bg-white shadow-sm border-b border-gray-200">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <div className="flex items-center gap-2 min-w-0">
            <button
              type="button"
              onClick={onOpenMobileSidebar}
              className="md:hidden inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
              aria-label="Open dashboard menu"
            >
              <Menu className="h-5 w-5" />
            </button>

            {/* Logo */}
            <Link href="/business-dashboard" className="flex items-center space-x-2 group min-w-0">
              <div className="p-1.5 bg-indigo-100 rounded-lg group-hover:bg-indigo-200 transition-all flex-shrink-0">
                <Image src="/rakshaai-logo.svg" alt="RakshaAI" width={30} height={30} className="flex-shrink-0" />
              </div>
              <div className="min-w-0">
                <h1 className="text-sm sm:text-base font-semibold text-gray-900 truncate">RakshaAI Business</h1>
                <p className="hidden sm:block text-xs text-gray-500 truncate">Business Portal</p>
              </div>
            </Link>
          </div>

          {/* Page indicator */}
          <div className="hidden md:flex items-center">
            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-md">{pageLabels[currentPage]}</span>
          </div>

          {/* Right */}
          <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
            <div className="hidden sm:flex items-center space-x-2 text-sm">
              <User className="h-4 w-4 text-gray-500 flex-shrink-0" />
              <span className="text-gray-700 font-medium truncate max-w-[160px]">{displayName}</span>
              <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full whitespace-nowrap">business</span>
            </div>
            <button
              onClick={onLogout}
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-red-600 border border-red-300 rounded-lg hover:bg-red-50 transition-colors"
            >
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

// ─── Sidebar ──────────────────────────────────────────────────────────────────

interface SidebarProps {
  currentPage: PageId;
  onNavigate: (p: PageId) => void;
  verifiedCount: number;
  hasSubscription: boolean;
  isFreeUser: boolean;
  isMobileOpen: boolean;
  onClose: () => void;
}
function BusinessSidebar({ currentPage, onNavigate, verifiedCount, hasSubscription, isFreeUser, isMobileOpen, onClose }: SidebarProps) {
  const navItems: { id: PageId; label: string; icon: React.ElementType; badge?: string }[] = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'verifications', label: 'Verifications', icon: ShieldCheck, badge: isFreeUser ? `${verifiedCount}/2` : `${verifiedCount}/5` },
    { id: 'documents', label: 'Documents', icon: FileText },
    { id: 'reports', label: 'Reports', icon: AlertCircle },
    { id: 'subscription', label: 'Subscription', icon: Crown },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  useEffect(() => {
    if (!isMobileOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileOpen, onClose]);

  const handleNavigate = (page: PageId) => {
    onNavigate(page);
    onClose();
  };

  const SidebarContent = ({ mobile = false }: { mobile?: boolean }) => (
    <div className={`flex flex-col flex-grow bg-white overflow-y-auto ${mobile ? '' : 'pt-14 shadow-sm border-r border-gray-200'}`}>
      <div className="flex flex-col flex-grow px-3 pb-4">
        <nav className="flex-1 space-y-1 pt-4" aria-label="Business dashboard">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                aria-current={active ? 'page' : undefined}
                className={`group flex items-center w-full px-3 py-2.5 md:py-2 text-sm font-medium rounded-lg transition-colors duration-150 ${
                  active ? 'bg-indigo-50 text-indigo-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <Icon className={`mr-2.5 h-4 w-4 flex-shrink-0 ${active ? 'text-indigo-600' : 'text-gray-400 group-hover:text-gray-500'}`} />
                <span className="truncate flex-1 text-left">{item.label}</span>
                {item.badge && (
                  <span className={`text-xs font-semibold px-1.5 py-0.5 rounded-full ${active ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-500'}`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Footer links */}
      <div className="p-3 border-t border-gray-200 space-y-1">
        <Link
          href="/business-onboarding"
          onClick={onClose}
          className="flex items-center text-sm text-gray-500 hover:text-gray-700 transition-colors p-2 rounded-lg hover:bg-gray-50"
        >
          <ArrowRight className="h-4 w-4 mr-2" /> Continue Onboarding
        </Link>
        <Link
          href="/"
          onClick={onClose}
          className="flex items-center text-sm text-gray-500 hover:text-gray-700 transition-colors p-2 rounded-lg hover:bg-gray-50"
        >
          <Eye className="h-4 w-4 mr-2" /> View Main Site
        </Link>
      </div>
    </div>
  );

  return (
    <>
      <div className="hidden md:flex md:flex-col md:w-60 md:fixed md:inset-y-0 md:z-20">
        <SidebarContent />
      </div>

      {isMobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden" role="dialog" aria-modal="true" aria-label="Business dashboard menu">
          <button
            type="button"
            className="absolute inset-0 bg-gray-900/45"
            onClick={onClose}
            aria-label="Close dashboard menu"
          />
          <aside className="relative flex h-full w-[min(20rem,calc(100vw-3rem))] flex-col bg-white shadow-2xl">
            <div className="flex h-14 items-center justify-between border-b border-gray-200 px-4">
              <div className="flex items-center gap-2 min-w-0">
                <div className="p-1.5 bg-indigo-100 rounded-lg flex-shrink-0">
                  <Image src="/rakshaai-logo.svg" alt="RakshaAI" width={28} height={28} className="flex-shrink-0" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-gray-900 truncate">Business Portal</p>
                  <p className="text-xs text-gray-500 truncate">{hasSubscription ? 'Verified dashboard' : 'Dashboard menu'}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                aria-label="Close dashboard menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <SidebarContent mobile />
          </aside>
        </div>
      )}
    </>
  );
}

// ─── Trust Score Types ───────────────────────────────────────────────────────

interface TrustScoreData {
  trust_score: number;
  overall_trust_percentage: number;
  overall_trust_level: string;
  total_number_of_reviews: number;
  is_live: boolean;
  url_details?: { business_name?: string; complete_domain?: string; url?: string };
  domain_info?: {
    domain?: string; domain_age_days?: number; registrar?: string; registrar_iana_id?: string;
    status?: string; created?: string; updated?: string; expires?: string; ip?: string;
    nameservers?: string[]; privacy_enabled?: boolean;
    ip_reputation?: { abuse_score?: number; usage_type?: string; last_reported?: string | null };
  };
  ssl_info?: {
    valid?: boolean; self_signed?: boolean; days_left?: number;
    subject?: { commonName?: string };
    issuer?: { organizationName?: string; commonName?: string; countryName?: string };
    san?: string[]; not_before?: string; not_after?: string;
  };
  action_items?: { trust_level?: string; risk_level?: string; payment_advice?: string; can_do?: string[]; should_avoid?: string[] };
  summary?: string;
  website_legitimacy_info?: {
    result?: string; pages_found?: Record<string, string>;
    contact_info_present?: boolean; legal_identifiers_present?: boolean; pages_count?: number;
  };
  website_publishing_date?: { result?: string; is_safe?: boolean; publish_date?: string; publish_year?: number };
  pages_summary?: {
    about_summary?: { available?: boolean; summary?: string };
    privacy_summary?: { available?: boolean; summary?: string };
    contact_details?: { phones?: string[]; emails?: string[]; addresses?: string[] };
  };
  google_reviews_data?: {
    reviews?: Array<{ displayname?: string; Review?: string; Rating?: number; Sentiment?: string; publishTime?: string; source_place?: string; source_place_id?: string }>;
    positive_count?: number; negative_count?: number; total_reviews?: number;
    average_rating?: number; negative_ratio?: number;
    google_maps_links?: string[]; website_links?: string[];
    places_used?: Array<{ place_id?: string; name?: string; reviews_count?: number; google_maps_link?: string }>;
  };
  fb_page_info?: {
    name?: string; id?: string; url?: string; verified?: boolean | null;
    profile_picture?: string; cover_photo?: string; followers?: string; following?: string;
    category?: string; email?: string; profile_intro_text?: string; managed_by?: string; profile_type?: string;
  };
  website_reviews?: { message?: string };
  related_scam_reports?: unknown[];
  trust_percentage?: number;
  sectional_status?: {
    technical_trust?: { trust_score?: number; total_number_of_reviews?: number; trust_percentage: number; trust_level: string };
    public_reputation_trust?: { trust_score?: number; total_number_of_reviews?: number; trust_percentage: number; trust_level: string };
    unclear_business_legitimacy?: { trust_score?: number; total_number_of_reviews?: number; trust_percentage: number; trust_level: string };
    google_business_profile_trust?: { trust_score?: number; total_number_of_reviews?: number; trust_percentage: number; trust_level: string };
  };
}

// Strip markdown bold/italic markers → plain text
function stripMd(text: string): string {
  return text.replace(/\*\*(.+?)\*\*/g, '$1').replace(/\*(.+?)\*/g, '$1').replace(/`(.+?)`/g, '$1');
}

function TrustScorePanel({ website, businessName }: { website?: string; businessName?: string }) {
  const [data, setData] = useState<TrustScoreData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!website) return;
    setLoading(true);
    fetch('/api/trust-score', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: website }),
    })
      .then((r) => r.json())
      .then((res) => { if (res?.data) setData(res.data); else setError('Could not load trust score.'); })
      .catch(() => setError('Failed to fetch trust score.'))
      .finally(() => setLoading(false));
  }, [website]);

  if (!website) return null;

  const Sk = ({ className }: { className: string }) => <div className={`bg-gray-200 rounded-lg animate-pulse ${className}`} />;

  const levelColor = (level?: string) => {
    if (!level) return { dot: 'bg-gray-400', text: 'text-gray-500', bg: 'bg-gray-50', border: 'border-gray-200', bar: 'bg-gray-400' };
    if (level.includes('HIGHLY')) return { dot: 'bg-emerald-500', text: 'text-emerald-700', bg: 'bg-emerald-50', border: 'border-emerald-200', bar: 'bg-emerald-500' };
    if (level.includes('TRUSTED')) return { dot: 'bg-green-500', text: 'text-green-700', bg: 'bg-green-50', border: 'border-green-200', bar: 'bg-green-500' };
    if (level.includes('NEUTRAL')) return { dot: 'bg-amber-500', text: 'text-amber-700', bg: 'bg-amber-50', border: 'border-amber-200', bar: 'bg-amber-500' };
    return { dot: 'bg-red-500', text: 'text-red-700', bg: 'bg-red-50', border: 'border-red-200', bar: 'bg-red-500' };
  };

  const scoreGradient = (score: number) =>
    score >= 7 ? 'from-emerald-500 to-green-600' :
    score >= 4 ? 'from-amber-500 to-orange-500' :
    'from-red-500 to-rose-600';

  const labelMap: Record<string, string> = {
    HIGHLY_TRUSTED: 'Highly Trusted', TRUSTED: 'Trusted', NEUTRAL: 'Neutral', RISKY: 'Risky', DANGEROUS: 'Dangerous',
  };

  if (loading) return (
    <div className="space-y-4">
      <div className="rounded-2xl bg-gradient-to-br from-indigo-400 to-violet-500 p-6 space-y-3">
        <Sk className="h-3 w-24 bg-white/20" />
        <Sk className="h-14 w-20 bg-white/20" />
        <Sk className="h-3 w-32 bg-white/20" />
        <Sk className="h-2 w-full bg-white/20" />
      </div>
      <div className="grid grid-cols-2 gap-3">{[0,1,2,3].map(i=><Sk key={i} className="h-24"/>)}</div>
      <Sk className="h-28" /><Sk className="h-40" /><div className="grid grid-cols-2 gap-3"><Sk className="h-32"/><Sk className="h-32"/></div>
      <Sk className="h-48" /><Sk className="h-28" /><Sk className="h-20" />
    </div>
  );

  if (error) return (
    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-center gap-3">
      <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
      <p className="text-sm text-amber-700">{error}</p>
    </div>
  );

  if (!data) return null;

  const score = data.trust_percentage ?? 0;
  const level = data.overall_trust_level ?? '';
  const lc = levelColor(level);
  const stars = Math.round((score / 100) * 5);

  return (
    <div className="space-y-5">

      {/* ── Score Hero ── */}
      <div className={`bg-gradient-to-br ${scoreGradient(Math.floor((data.overall_trust_percentage ?? 0) / 10))} rounded-2xl p-6 text-white shadow-lg`}>
        <div className="flex items-start justify-between mb-3">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest opacity-60 mb-1">Trust Score</p>
            <p className="text-6xl font-black leading-none">{Math.floor((data.overall_trust_percentage ?? 0) / 10)}</p>
            <p className="text-xs opacity-60 mt-1">out of 10</p>
          </div>
          <div className="text-right flex flex-col items-end gap-2">
            {data.is_live && (
              <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-white/20 border border-white/30 px-2 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse" /> LIVE
              </span>
            )}
            <span className="text-xs opacity-70">{data.total_number_of_reviews} reviews</span>
          </div>
        </div>
        <div className="flex items-center gap-1 mb-3">
          {Array.from({length:5}).map((_,i)=>(
            <Star key={i} className={`w-4 h-4 ${i<stars?'fill-yellow-400 text-yellow-400':'text-white/30'}`}/>
          ))}
          <span className="ml-2 text-sm font-semibold">{labelMap[level] ?? level}</span>
        </div>
        <div className="bg-white/20 rounded-full h-2 overflow-hidden mb-4">
          <div className="h-full bg-white rounded-full" style={{width:`${data.overall_trust_percentage ?? 0}%`}}/>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[
            {label:'Overall',value:`${data.overall_trust_percentage ?? score}%`},
            {label:'Risk',value:data.action_items?.risk_level??''},
            {label:'Payments',value:data.action_items?.payment_advice??''},
          ].map(({label,value})=>(
            <div key={label} className="bg-white/15 rounded-xl p-2 text-center">
              <p className="text-[10px] opacity-60 mb-0.5">{label}</p>
              <p className="text-xs font-bold">{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Summary ── */}
      {data.summary && (
        <div className="bg-white border border-gray-200 rounded-xl p-4">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-indigo-500"/>Summary
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">{stripMd(data.summary)}</p>
        </div>
      )}

      {/* ── Safety Recommendations ── */}
      {data.action_items && (
        <div className={`rounded-xl border ${lc.bg} ${lc.border} overflow-hidden`}>
          <div className="flex items-center justify-between px-4 py-3 border-b border-current/10">
            <div className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-white border ${lc.border}`}>
                <ShieldCheck className={`w-4 h-4 ${lc.text}`}/>
              </div>
              <p className="text-sm font-bold text-gray-800">Safety Recommendations</p>
            </div>
            <span className={`text-xs font-bold uppercase tracking-wide px-2 py-1 rounded-full bg-white border ${lc.border} ${lc.text}`}>
              {data.action_items.risk_level} Risk
            </span>
          </div>
          <div className="p-4 space-y-3">
            {data.action_items.can_do && data.action_items.can_do.length > 0 && (
              <div>
                <p className="text-xs font-semibold text-gray-500 mb-2 flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500"/>Can Do
                </p>
                <div className="space-y-1.5">
                  {data.action_items.can_do.map(a=>(
                    <div key={a} className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 border border-emerald-100">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0"/>
                      <span className="text-sm text-gray-700">{a}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {data.action_items.should_avoid && data.action_items.should_avoid.length > 0 && (
              <div>
                <p className="text-xs font-semibold text-gray-500 mb-2 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 text-red-500"/>Should Avoid
                </p>
                <div className="space-y-1.5">
                  {data.action_items.should_avoid.map(a=>(
                    <div key={a} className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 border border-red-100">
                      <AlertCircle className="w-3.5 h-3.5 text-red-500 flex-shrink-0"/>
                      <span className="text-sm text-gray-700">{a}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="bg-white rounded-lg px-3 py-2 border border-gray-100 flex items-center gap-2">
              <CreditCard className="w-3.5 h-3.5 text-gray-400 flex-shrink-0"/>
              <span className="text-sm text-gray-700">{data.action_items.payment_advice}</span>
            </div>
          </div>
        </div>
      )}

      {/* ── Sectional Analysis ── */}
      {data.sectional_status && (
        <div className="bg-white border border-gray-200 rounded-xl p-4">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">Sectional Analysis</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {([
              {key:'technical_trust',label:'Technical Trust',icon:Lock},
              {key:'public_reputation_trust',label:'Public Reputation',icon:Users},
              {key:'unclear_business_legitimacy',label:'Business Legitimacy',icon:ShieldCheck},
              {key:'google_business_profile_trust',label:'Google Profile',icon:Star},
            ] as const).map(({key,label,icon:Icon})=>{
              const s = data.sectional_status![key];
              if(!s) return null;
              const c = levelColor(s.trust_level);
              return (
                <div key={key} className={`rounded-xl p-3 border ${c.bg} ${c.border}`}>
                  <div className="flex items-center gap-1.5 mb-2">
                    <Icon className={`w-3.5 h-3.5 ${c.text}`}/>
                    <p className="text-xs font-semibold text-gray-600">{label}</p>
                    {s.total_number_of_reviews != null && <span className="ml-auto text-[10px] text-gray-400">{s.total_number_of_reviews} reviews</span>}
                  </div>
                  <p className={`text-2xl font-black ${c.text}`}>{Math.round(s.trust_percentage)}%</p>
                  <div className="mt-1.5 bg-white/60 rounded-full h-1.5 overflow-hidden">
                    <div className={`h-full rounded-full ${c.bar}`} style={{width:`${s.trust_percentage}%`}}/>
                  </div>
                  <p className={`text-[10px] mt-1 font-semibold ${c.text}`}>{labelMap[s.trust_level]??s.trust_level}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ── Domain Info ── */}
      {data.domain_info && (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100">
            <Globe className="w-4 h-4 text-indigo-500"/>
            <p className="text-sm font-bold text-gray-800">Domain Information</p>
            {data.website_publishing_date?.publish_year && (
              <span className="ml-auto text-xs font-semibold text-gray-500 bg-gray-50 border border-gray-200 px-2 py-0.5 rounded-full">
                Since {data.website_publishing_date.publish_year}
              </span>
            )}
          </div>
          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
            {[
              {label:'Domain',value:data.domain_info.domain},
              {label:'Age',value:data.domain_info.domain_age_days!=null?`${Math.round(data.domain_info.domain_age_days/365.25)} years (${data.domain_info.domain_age_days.toLocaleString()} days)`:undefined},
              {label:'Status',value:data.domain_info.status},
              {label:'Registrar',value:data.domain_info.registrar},
              {label:'Created',value:data.domain_info.created?new Date(data.domain_info.created).toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'}):undefined},
              {label:'Expires',value:fmt(data.domain_info.expires)},
              {label:'IP Address',value:data.domain_info.ip},
              {label:'IP Type',value:data.domain_info.ip_reputation?.usage_type},
              {label:'Abuse Score',value:data.domain_info.ip_reputation?.abuse_score!=null?String(data.domain_info.ip_reputation.abuse_score):undefined},
              {label:'Privacy Protected',value:data.domain_info.privacy_enabled!=null?(data.domain_info.privacy_enabled?'Yes':'No'):undefined},
            ].filter(r=>r.value).map(({label,value})=>(
              <div key={label} className="flex flex-col">
                <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide">{label}</span>
                <span className="text-sm font-medium text-gray-800 mt-0.5">{value}</span>
              </div>
            ))}
          </div>
          {data.domain_info.nameservers && data.domain_info.nameservers.length > 0 && (
            <div className="px-4 pb-4">
              <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mb-1.5">Nameservers</p>
              <div className="flex flex-wrap gap-1.5">
                {data.domain_info.nameservers.map(ns=>(
                  <span key={ns} className="text-[11px] font-mono bg-gray-50 border border-gray-200 text-gray-600 px-2 py-0.5 rounded">{ns}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ── SSL Certificate ── */}
      {data.ssl_info && (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100">
            <Lock className="w-4 h-4 text-indigo-500"/>
            <p className="text-sm font-bold text-gray-800">SSL Certificate</p>
            <span className={`ml-auto inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full ${data.ssl_info.valid?'bg-emerald-50 text-emerald-700 border border-emerald-200':'bg-red-50 text-red-700 border border-red-200'}`}>
              {data.ssl_info.valid?<CheckCircle className="w-3 h-3"/>:<AlertCircle className="w-3 h-3"/>}
              {data.ssl_info.valid?'Valid':'Invalid'}
            </span>
          </div>
          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
            {[
              {label:'Issued For',value:data.ssl_info.subject?.commonName},
              {label:'Issuer',value:data.ssl_info.issuer?.organizationName},
              {label:'Issuer CN',value:data.ssl_info.issuer?.commonName},
              {label:'Country',value:data.ssl_info.issuer?.countryName},
              {label:'Days Left',value:data.ssl_info.days_left!=null?`${data.ssl_info.days_left} days`:undefined},
              {label:'Expires',value:data.ssl_info.not_after?new Date(data.ssl_info.not_after).toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'}):undefined},
              {label:'Self Signed',value:data.ssl_info.self_signed!=null?(data.ssl_info.self_signed?'Yes':'No'):undefined},
            ].filter(r=>r.value).map(({label,value})=>(
              <div key={label} className="flex flex-col">
                <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide">{label}</span>
                <span className={`text-sm font-medium mt-0.5 ${label==='Days Left'?(data.ssl_info!.days_left!>30?'text-emerald-700':'text-red-700'):'text-gray-800'}`}>{value}</span>
              </div>
            ))}
          </div>
          {data.ssl_info.san && data.ssl_info.san.length > 0 && (
            <div className="px-4 pb-4">
              <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mb-1.5">Covered Domains (SAN)</p>
              <div className="flex flex-wrap gap-1.5">
                {data.ssl_info.san.map(s=>(
                  <span key={s} className="text-[11px] font-mono bg-gray-50 border border-gray-200 text-gray-600 px-2 py-0.5 rounded">{s}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ── Website Legitimacy ── */}
      {data.website_legitimacy_info && (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100">
            <BadgeCheck className="w-4 h-4 text-indigo-500"/>
            <p className="text-sm font-bold text-gray-800">Website Legitimacy</p>
            {data.website_legitimacy_info.pages_count != null && (
              <span className="ml-auto text-xs text-gray-400">{data.website_legitimacy_info.pages_count} pages found</span>
            )}
          </div>
          <div className="p-4">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full border ${data.website_legitimacy_info.contact_info_present?'bg-emerald-50 text-emerald-700 border-emerald-200':'bg-red-50 text-red-700 border-red-200'}`}>
                {data.website_legitimacy_info.contact_info_present?<CheckCircle className="w-3 h-3"/>:<AlertCircle className="w-3 h-3"/>} Contact Info
              </span>
              <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full border ${data.website_legitimacy_info.legal_identifiers_present?'bg-emerald-50 text-emerald-700 border-emerald-200':'bg-amber-50 text-amber-700 border-amber-200'}`}>
                {data.website_legitimacy_info.legal_identifiers_present?<CheckCircle className="w-3 h-3"/>:<AlertCircle className="w-3 h-3"/>} Legal Identifiers
              </span>
            </div>
            {data.website_legitimacy_info.pages_found && Object.keys(data.website_legitimacy_info.pages_found).length > 0 && (
              <div>
                <p className="text-xs font-semibold text-gray-400 mb-2">Pages Found</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {Object.entries(data.website_legitimacy_info.pages_found).map(([key,url])=>(
                    <a key={key} href={url} target="_blank" rel="noopener noreferrer"
                      className="flex flex-col items-center gap-1.5 p-2.5 rounded-xl border border-indigo-100 bg-indigo-50 hover:bg-indigo-100 transition-colors text-center">
                      <ExternalLink className="w-3.5 h-3.5 text-indigo-600"/>
                      <span className="text-xs font-semibold text-indigo-700 capitalize">{key}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── Contact Details ── */}
      {data.pages_summary?.contact_details && (() => {
        const c = data.pages_summary!.contact_details!;
        const hasAny = (c.phones?.length??0)>0||(c.emails?.length??0)>0||(c.addresses?.length??0)>0;
        if (!hasAny) return null;
        return (
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100">
              <Phone className="w-4 h-4 text-indigo-500"/><p className="text-sm font-bold text-gray-800">Contact Details</p>
            </div>
            <div className="p-4 space-y-3">
              {c.phones && c.phones.length > 0 && (
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 bg-green-50 border border-green-200 rounded-lg flex items-center justify-center flex-shrink-0"><Phone className="w-3.5 h-3.5 text-green-600"/></div>
                  <div className="flex flex-wrap gap-2">{c.phones.map(p=><span key={p} className="text-sm font-semibold text-gray-800">{p}</span>)}</div>
                </div>
              )}
              {c.emails && c.emails.length > 0 && (
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 bg-blue-50 border border-blue-200 rounded-lg flex items-center justify-center flex-shrink-0"><Mail className="w-3.5 h-3.5 text-blue-600"/></div>
                  <div className="flex flex-wrap gap-2">{c.emails.map(e=><span key={e} className="text-sm font-semibold text-gray-800">{e}</span>)}</div>
                </div>
              )}
              {c.addresses && c.addresses.length > 0 && (
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 bg-orange-50 border border-orange-200 rounded-lg flex items-center justify-center flex-shrink-0"><MapPin className="w-3.5 h-3.5 text-orange-600"/></div>
                  <div>{c.addresses.map(a=><p key={a} className="text-sm text-gray-700">{a}</p>)}</div>
                </div>
              )}
            </div>
          </div>
        );
      })()}

      {/* ── Google Reviews ── */}
      {data.google_reviews_data && (data.google_reviews_data.total_reviews??0) > 0 && (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 flex-wrap">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500"/>
            <p className="text-sm font-bold text-gray-800">Google Reviews</p>
            <div className="flex items-center gap-1 ml-1">
              {Array.from({length:5}).map((_,i)=>(
                <Star key={i} className={`w-3.5 h-3.5 ${i<Math.round(data.google_reviews_data!.average_rating??0)?'fill-yellow-400 text-yellow-400':'text-gray-200'}`}/>
              ))}
              <span className="text-sm font-black text-gray-800 ml-1">{data.google_reviews_data.average_rating?.toFixed(1)}</span>
            </div>
            <span className="text-xs text-gray-400">({data.google_reviews_data.total_reviews} reviews)</span>
            <div className="flex items-center gap-1.5 ml-auto">
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full">
                <ThumbsUp className="w-3 h-3"/> {data.google_reviews_data.positive_count}
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-red-700 bg-red-50 border border-red-100 px-2 py-0.5 rounded-full">
                <ThumbsDown className="w-3 h-3"/> {data.google_reviews_data.negative_count}
              </span>
            </div>
            {data.google_reviews_data.google_maps_links?.[0] && (
              <a href={data.google_reviews_data.google_maps_links[0]} target="_blank" rel="noopener noreferrer"
                className="text-xs text-indigo-600 hover:underline flex items-center gap-1">
                <MapPin className="w-3 h-3"/> Maps
              </a>
            )}
          </div>
          <div className="divide-y divide-gray-50">
            {data.google_reviews_data.reviews?.slice(0,5).map((review,i)=>(
              <div key={i} className="p-4">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-indigo-100 flex items-center justify-center text-xs font-bold text-indigo-700 flex-shrink-0">
                      {(review.displayname??'?').charAt(0).toUpperCase()}
                    </div>
                    <p className="text-sm font-semibold text-gray-800">{review.displayname}</p>
                  </div>
                  <div className="flex items-center gap-0.5 flex-shrink-0">
                    {Array.from({length:5}).map((_,j)=>(
                      <Star key={j} className={`w-3 h-3 ${j<(review.Rating??0)?'fill-yellow-400 text-yellow-400':'text-gray-200'}`}/>
                    ))}
                  </div>
                </div>
                {review.Review && <p className="text-sm text-gray-600 leading-relaxed ml-9">{review.Review}</p>}
                <div className="flex items-center gap-2 mt-1.5 ml-9">
                  {review.Sentiment && (
                    <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${review.Sentiment.includes('Positive')?'bg-emerald-50 text-emerald-700':'bg-red-50 text-red-700'}`}>
                      {review.Sentiment}
                    </span>
                  )}
                  {review.publishTime && (
                    <span className="text-[10px] text-gray-400">
                      {new Date(review.publishTime).toLocaleDateString('en-IN',{month:'short',year:'numeric'})}
                    </span>
                  )}
                  {review.source_place && <span className="text-[10px] text-gray-400 truncate">{review.source_place}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Facebook Page ── */}
      {data.fb_page_info?.name && (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          {data.fb_page_info.cover_photo && (
            // eslint-disable-next-line @next/next/no-img-element
            <div className="h-24 bg-gray-100 overflow-hidden">
              <img src={data.fb_page_info.cover_photo} alt="Cover" className="w-full h-full object-cover"/>
            </div>
          )}
          <div className="p-4">
            <div className="flex items-start gap-3">
              {data.fb_page_info.profile_picture && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={data.fb_page_info.profile_picture} alt={data.fb_page_info.name}
                  className={`w-12 h-12 rounded-full border-2 border-white shadow flex-shrink-0 ${data.fb_page_info.cover_photo?'-mt-8':''}`}/>
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="text-sm font-bold text-gray-800">{data.fb_page_info.name}</p>
                  {data.fb_page_info.category && <span className="text-xs text-gray-400">{data.fb_page_info.category}</span>}
                  {data.fb_page_info.url && (
                    <a href={data.fb_page_info.url} target="_blank" rel="noopener noreferrer"
                      className="ml-auto text-xs text-indigo-600 hover:underline flex items-center gap-1 flex-shrink-0">
                      <ExternalLink className="w-3 h-3"/> View Page
                    </a>
                  )}
                </div>
                {data.fb_page_info.profile_intro_text && (
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">{data.fb_page_info.profile_intro_text}</p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3">
              {data.fb_page_info.followers && (
                <div className="bg-gray-50 rounded-lg p-2 text-center">
                  <p className="text-sm font-black text-gray-800">{data.fb_page_info.followers}</p>
                  <p className="text-[10px] text-gray-400">Followers</p>
                </div>
              )}
              {data.fb_page_info.email && (
                <div className="bg-gray-50 rounded-lg p-2 text-center col-span-2">
                  <p className="text-xs font-semibold text-gray-700 truncate">{data.fb_page_info.email}</p>
                  <p className="text-[10px] text-gray-400">Email</p>
                </div>
              )}
              {data.fb_page_info.managed_by && (
                <div className="bg-gray-50 rounded-lg p-2 text-center">
                  <p className="text-xs font-semibold text-gray-700 truncate">{data.fb_page_info.managed_by}</p>
                  <p className="text-[10px] text-gray-400">Managed by</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── About the Business ── */}
      {data.pages_summary?.about_summary?.available && data.pages_summary.about_summary.summary && (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100">
            <Info className="w-4 h-4 text-indigo-500"/><p className="text-sm font-bold text-gray-800">About the Business</p>
          </div>
          <div className="p-4">
            <p className="text-sm text-gray-700 leading-relaxed">{data.pages_summary.about_summary.summary}</p>
          </div>
        </div>
      )}

      {/* ── Privacy Policy Summary ── */}
      {data.pages_summary?.privacy_summary?.available && data.pages_summary.privacy_summary.summary && (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100">
            <Lock className="w-4 h-4 text-indigo-500"/><p className="text-sm font-bold text-gray-800">Privacy Policy</p>
          </div>
          <div className="p-4">
            <p className="text-sm text-gray-700 leading-relaxed">{data.pages_summary.privacy_summary.summary}</p>
          </div>
        </div>
      )}

    </div>
  );
}

// ─── Page: Dashboard Overview ─────────────────────────────────────────────────

function DashboardOverview({ profile, verifyStatus, subscription, onNavigate, isFreeUser }: {
  profile: BusinessProfile | null;
  verifyStatus: VerifyStatus | null;
  subscription: SubscriptionStatus | null;
  onNavigate: (p: PageId) => void;
  isFreeUser: boolean;
}) {
  const planName = subscription?.plan === 'annually' ? 'Annual' : subscription?.plan === 'quarterly' ? 'Quarterly' : 'Monthly';
  const verifications = verifyStatus?.verifications;
  const details = verifyStatus?.details;
  const allVerifiedCount = verifications ? [verifications.gst, verifications.pan, verifications.aadhaar, verifications.mca, verifications.bankAccount].filter(Boolean).length : 0;
  const freeVerifiedCount = verifications?.gst ? 1 : 0;
  const verifiedCount = isFreeUser ? freeVerifiedCount : allVerifiedCount;
  const trustScore = isFreeUser
    ? Math.round((freeVerifiedCount / 1) * 40) // free max is 40% (GST only)
    : Math.round((allVerifiedCount / 5) * 100);

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
          <p className="text-gray-500 mt-1 text-sm">Welcome back here's the status of your business verification.</p>
        </div>
        {isFreeUser && (
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-600 bg-gray-100 border border-gray-200 px-3 py-1.5 rounded-full">
            Free Plan
          </span>
        )}
      </div>

      {/* Free plan upgrade banner */}
      {isFreeUser && (
        <div className="bg-gradient-to-r from-indigo-600 to-violet-600 rounded-xl p-4 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Crown className="w-5 h-5 text-yellow-300 flex-shrink-0" />
            <div>
              <p className="text-sm font-bold">Upgrade to Verified ₹299/month</p>
              <p className="text-xs text-indigo-200 mt-0.5">Unlock Aadhaar KYC, PAN, Bank, MCA verification, trust badge &amp; priority ranking.</p>
            </div>
          </div>
          <Link href="/business-onboarding" className="flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2 bg-white text-indigo-700 font-bold text-xs rounded-lg hover:bg-indigo-50 transition-colors whitespace-nowrap">
            Upgrade Now <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: 'Trust Score', value: `${trustScore}%`, icon: Award, color: 'text-amber-600', bg: 'bg-amber-50', sub: isFreeUser ? 'GST verified' : (trustScore >= 80 ? 'Excellent' : trustScore >= 60 ? 'Good' : 'Needs work') },
          { title: 'Verifications', value: isFreeUser ? `${verifiedCount} / 2` : `${verifiedCount} / 5`, icon: ShieldCheck, color: 'text-indigo-600', bg: 'bg-indigo-50', sub: isFreeUser ? (verifiedCount === 2 ? 'GST + Aadhaar complete' : verifiedCount === 1 ? 'GST complete' : 'GST pending') : (verifiedCount === 5 ? 'All complete' : `${5 - verifiedCount} remaining`) },
          { title: 'Subscription', value: isFreeUser ? 'Free' : (subscription?.hasActiveSubscription ? planName : 'None'), icon: Crown, color: 'text-purple-600', bg: 'bg-purple-50', sub: isFreeUser ? 'Basic listing' : (subscription?.hasActiveSubscription ? 'Active' : 'No active plan') },
          { title: 'Member Since', value: profile?.created_at ? new Date(profile.created_at).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' }) : '', icon: Calendar, color: 'text-green-600', bg: 'bg-green-50', sub: 'Registration date' },
        ].map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.title} className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex items-center">
                <div className={`w-10 h-10 ${stat.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <div className="ml-3 flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-500 truncate">{stat.title}</p>
                  <p className="text-xl font-semibold text-gray-900">{stat.value}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{stat.sub}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Verification status cards */}
      <div>
        <h2 className="text-base font-semibold text-gray-900 mb-3">Verification Status</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { label: 'GST Verification', icon: CreditCard, iconColor: 'text-blue-600', bg: 'bg-blue-50', verified: verifications?.gst, detail: details?.gst ? `GSTIN: ${mask(details.gst.gstin)}` : undefined, date: details?.gst?.verifiedAt, nav: 'verifications' as PageId, paidOnly: false },
            { label: 'PAN Verification', icon: FileText, iconColor: 'text-orange-600', bg: 'bg-orange-50', verified: verifications?.pan, detail: details?.pan?.panNumber ? `PAN: ${mask(details.pan.panNumber)}` : undefined, date: details?.pan?.verifiedAt, nav: 'verifications' as PageId, paidOnly: true },
            { label: 'Aadhaar KYC', icon: Fingerprint, iconColor: 'text-indigo-600', bg: 'bg-indigo-50', verified: verifications?.aadhaar, detail: details?.aadhaar?.name, date: details?.aadhaar?.verifiedAt, nav: 'verifications' as PageId, paidOnly: false },
            { label: 'MCA / Company', icon: Building2, iconColor: 'text-violet-600', bg: 'bg-violet-50', verified: verifications?.mca, detail: details?.mca?.companyName, date: details?.mca?.verifiedAt, nav: 'verifications' as PageId, paidOnly: true },
            { label: 'Bank Account', icon: Activity, iconColor: 'text-emerald-600', bg: 'bg-emerald-50', verified: verifications?.bankAccount, detail: details?.bankAccount?.nameAtBank ? `Name: ${details.bankAccount.nameAtBank}` : undefined, date: details?.bankAccount?.verifiedAt, nav: 'verifications' as PageId, paidOnly: true },
            { label: 'Subscription', icon: Crown, iconColor: 'text-purple-600', bg: 'bg-purple-50', verified: subscription?.hasActiveSubscription ?? isFreeUser, detail: isFreeUser ? 'Free Plan · Basic listing' : (subscription?.hasActiveSubscription ? `${planName} plan` : undefined), date: undefined, nav: 'subscription' as PageId, paidOnly: false },
          ].map((card) => {
            const Icon = card.icon;
            const isLocked = isFreeUser && card.paidOnly;
            return isLocked ? (
              <div key={card.label} className="relative text-left bg-white rounded-lg border border-gray-200 p-4 opacity-60">
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-9 h-9 rounded-lg ${card.bg} flex items-center justify-center`}>
                    <Icon className={`w-4 h-4 ${card.iconColor}`} />
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-gray-500 bg-gray-100 border border-gray-200 px-2 py-0.5 rounded-full">
                    <Lock className="w-3 h-3" /> Paid only
                  </span>
                </div>
                <p className="text-sm font-semibold text-gray-400">{card.label}</p>
                <p className="text-xs text-gray-400 mt-1">Available on Verified plan</p>
              </div>
            ) : (
              <button key={card.label} onClick={() => onNavigate(card.nav)} className="text-left bg-white rounded-lg border border-gray-200 p-4 hover:border-indigo-300 hover:shadow-sm transition-all group">
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-9 h-9 rounded-lg ${card.bg} flex items-center justify-center`}>
                    <Icon className={`w-4 h-4 ${card.iconColor}`} />
                  </div>
                  <VerificationBadge verified={card.verified ?? false} />
                </div>
                <p className="text-sm font-semibold text-gray-900 group-hover:text-indigo-700 transition-colors">{card.label}</p>
                {card.detail && <p className="text-xs text-gray-500 mt-1 truncate">{card.detail}</p>}
                {card.date && <p className="text-xs text-gray-400 mt-1 flex items-center gap-1"><Clock className="w-3 h-3" />{fmt(card.date)}</p>}
              </button>
            );
          })}
        </div>
      </div>
      {/* Website Trust Score */}
      {profile?.website && (
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck className="w-5 h-5 text-indigo-600" />
            <h2 className="text-base font-semibold text-gray-900">Website Trust Score</h2>
            {profile.website && <span className="ml-auto text-xs text-gray-400 truncate max-w-[160px]">{profile.website}</span>}
          </div>
          <TrustScorePanel website={profile.website} businessName={profile.business_name} />
        </div>
      )}
    </div>
  );
}

function VerificationsPage({ verifyStatus, isFreeUser }: { verifyStatus: VerifyStatus | null; isFreeUser: boolean }) {
  const verifications = verifyStatus?.verifications;
  const details = verifyStatus?.details;
  const allVerifiedCount = verifications ? [verifications.gst, verifications.pan, verifications.aadhaar, verifications.mca, verifications.bankAccount].filter(Boolean).length : 0;
  const verifiedCount = isFreeUser ? [verifications?.gst, verifications?.aadhaar].filter(Boolean).length : allVerifiedCount;
  const totalCount = isFreeUser ? 2 : 5;

  const PaidOnlyRow = ({ title, icon }: { title: string; icon: React.ReactNode }) => (
    <div className="border border-gray-200 rounded-lg overflow-hidden opacity-60">
      <div className="w-full flex items-center justify-between px-4 py-3 bg-white">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">{icon}</div>
          <span className="text-sm font-semibold text-gray-400">{title}</span>
        </div>
        <span className="inline-flex items-center gap-1 text-xs font-semibold text-gray-500 bg-gray-100 border border-gray-200 px-2 py-0.5 rounded-full">
          <Lock className="w-3 h-3" /> Paid plan only
        </span>
      </div>
    </div>
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">KYC &amp; Verifications</h1>
          <p className="text-gray-500 mt-1 text-sm">{verifiedCount} of {totalCount} verification{totalCount > 1 ? 's' : ''} complete{isFreeUser ? ' · Free plan' : ''}</p>
        </div>
        {isFreeUser ? (
          <Link href="/business-onboarding" className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-lg hover:bg-indigo-700 transition-colors">
            <Crown className="w-4 h-4" /> Upgrade to Unlock All
          </Link>
        ) : verifiedCount < 5 ? (
          <Link href="/business-onboarding" className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-lg hover:bg-indigo-700 transition-colors">
            <ShieldCheck className="w-4 h-4" /> Complete Verifications
          </Link>
        ) : null}
      </div>

      {/* Progress bar */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Verification Progress</span>
          <span className="text-sm font-semibold text-indigo-600">{verifiedCount}/{totalCount}</span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-2">
          <div className="bg-indigo-600 h-2 rounded-full transition-all duration-700" style={{ width: `${(verifiedCount / totalCount) * 100}%` }} />
        </div>
        {isFreeUser && (
          <p className="text-xs text-gray-400 mt-2">Free plan includes GST and Aadhaar verification. <Link href="/business-onboarding" className="text-indigo-600 font-semibold hover:underline">Upgrade</Link> to unlock PAN, Bank, MCA, and documents.</p>
        )}
      </div>

      {/* GST available on all plans */}
      <ExpandableSection title="GST Verification" icon={<CreditCard className="w-4 h-4 text-blue-600" />} verified={verifications?.gst ?? false} defaultOpen={verifications?.gst}>
        {details?.gst ? (
          <DataGrid items={[
            { label: 'GSTIN', value: details.gst.gstin },
            { label: 'Business Name', value: details.gst.businessName },
            { label: 'Trade Name', value: details.gst.tradeName },
            { label: 'Status', value: details.gst.status },
            { label: 'Business Type', value: details.gst.businessType },
            { label: 'Registration Date', value: details.gst.registrationDate },
            { label: 'Last Updated', value: details.gst.lastUpdated },
            { label: 'State', value: details.gst.state },
            { label: 'State Code', value: details.gst.stateCode },
            { label: 'Address', value: details.gst.address },
            { label: 'Nature of Business', value: details.gst.natureOfBusiness?.join(', ') },
            { label: 'Verified At', value: fmt(details.gst.verifiedAt) },
          ]} />
        ) : <NotVerifiedPrompt label="GST Verification" />}
      </ExpandableSection>

      {/* PAN  paid only */}
      {isFreeUser ? <PaidOnlyRow title="PAN Verification" icon={<FileText className="w-4 h-4 text-orange-600" />} /> : (
      <ExpandableSection title="PAN Verification" icon={<FileText className="w-4 h-4 text-orange-600" />} verified={verifications?.pan ?? false} defaultOpen={verifications?.pan}>
        {details?.pan ? (
          <DataGrid items={[
            { label: 'PAN Number', value: details.pan.panNumber },
            { label: 'Status', value: details.pan.status },
            { label: 'Remarks', value: details.pan.remarks },
            { label: 'Category', value: details.pan.category },
            { label: 'Aadhaar Seeding', value: details.pan.aadhaarSeedingStatus },
            { label: 'Name Match', value: details.pan.nameMatch !== undefined ? (details.pan.nameMatch ? '✓ Matched' : '✗ Not matched') : undefined },
            { label: 'DOB Match', value: details.pan.dobMatch !== undefined ? (details.pan.dobMatch ? '✓ Matched' : '✗ Not matched') : undefined },
            { label: 'Verified At', value: fmt(details.pan.verifiedAt) },
          ]} />
        ) : <NotVerifiedPrompt label="PAN Verification" />}
      </ExpandableSection>
      )}

      {/* Aadhaar available on all plans */}
      <ExpandableSection title="Aadhaar KYC" icon={<Fingerprint className="w-4 h-4 text-indigo-600" />} verified={verifications?.aadhaar ?? false} defaultOpen={verifications?.aadhaar}>
        {details?.aadhaar ? (
          <div className="flex flex-col sm:flex-row gap-5">
            {details.aadhaar.photo && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={`data:image/jpeg;base64,${details.aadhaar.photo}`} alt="Aadhaar Photo" className="w-24 h-28 object-cover rounded-xl border-2 border-indigo-100 shadow-md flex-shrink-0" />
            )}
            <div className="flex-1">
              <DataGrid items={[
                { label: 'Full Name', value: details.aadhaar.name },
                { label: 'Gender', value: details.aadhaar.gender },
                { label: 'Date of Birth', value: details.aadhaar.dateOfBirth },
                { label: 'Year of Birth', value: details.aadhaar.yearOfBirth },
                { label: 'Care Of', value: details.aadhaar.careOf },
                { label: 'Full Address', value: details.aadhaar.fullAddress },
                { label: 'District', value: details.aadhaar.address?.district },
                { label: 'State', value: details.aadhaar.address?.state },
                { label: 'Pincode', value: details.aadhaar.address?.pincode },
                { label: 'Status', value: details.aadhaar.status },
                { label: 'Verified At', value: fmt(details.aadhaar.verifiedAt) },
              ]} />
            </div>
          </div>
        ) : <NotVerifiedPrompt label="Aadhaar KYC" />}
      </ExpandableSection>

      {/* MCA paid only */}
      {isFreeUser ? <PaidOnlyRow title="MCA / Company Verification" icon={<Building2 className="w-4 h-4 text-violet-600" />} /> : (
      <ExpandableSection title="MCA / Company Verification" icon={<Building2 className="w-4 h-4 text-violet-600" />} verified={verifications?.mca ?? false} defaultOpen={verifications?.mca}>
        {details?.mca ? (
          details.mca.error ? (
            <div className="flex items-start gap-2 text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3">
              <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <p className="text-sm">{details.mca.error}</p>
            </div>
          ) : (
            <DataGrid items={[
              { label: 'CIN', value: details.mca.cin },
              { label: 'Company Name', value: details.mca.companyName },
              { label: 'Company Status', value: details.mca.companyStatus },
              { label: 'Company Class', value: details.mca.companyClass },
              { label: 'Company Category', value: details.mca.companyCategory },
              { label: 'Sub-Category', value: details.mca.companySubCategory },
              { label: 'Incorporation Date', value: details.mca.dateOfIncorporation },
              { label: 'ROC Code', value: details.mca.rocCode },
              { label: 'Registered State', value: details.mca.registeredState },
              { label: 'Email', value: details.mca.email },
              { label: 'Paid-up Capital', value: details.mca.paidUpCapital },
              { label: 'Authorised Capital', value: details.mca.authorisedCapital },
              { label: 'Registered Address', value: details.mca.registeredAddress },
              { label: 'Verified At', value: fmt(details.mca.verifiedAt) },
            ]} />
          )
        ) : <NotVerifiedPrompt label="MCA Verification" />}
      </ExpandableSection>
      )}

      {/* Bank Account paid only */}
      {isFreeUser ? <PaidOnlyRow title="Bank Account Verification" icon={<Activity className="w-4 h-4 text-emerald-600" />} /> : (
      <ExpandableSection title="Bank Account Verification" icon={<Activity className="w-4 h-4 text-emerald-600" />} verified={verifications?.bankAccount ?? false} defaultOpen={verifications?.bankAccount}>
        {details?.bankAccount ? (
          <DataGrid items={[
            { label: 'Account Number', value: mask(details.bankAccount.accountNumber) },
            { label: 'IFSC Code', value: details.bankAccount.ifsc },
            { label: 'Account Exists', value: details.bankAccount.accountExists ? '✓ Yes' : '✗ No' },
            { label: 'Name at Bank', value: details.bankAccount.nameAtBank },
            { label: 'Message', value: details.bankAccount.message },
            { label: 'Verified At', value: fmt(details.bankAccount.verifiedAt) },
          ]} />
        ) : <NotVerifiedPrompt label="Bank Account Verification" />}
      </ExpandableSection>
      )}

      {/* Documents paid only */}
      {isFreeUser ? <PaidOnlyRow title="Uploaded Documents" icon={<FileText className="w-4 h-4 text-teal-600" />} /> : (
      <ExpandableSection title="Uploaded Documents" icon={<FileText className="w-4 h-4 text-teal-600" />} verified={verifyStatus?.hasDocuments ?? false} defaultOpen={verifyStatus?.hasDocuments}>
        {verifyStatus?.hasDocuments && verifyStatus.documents ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {([
              { label: 'Certificate of Incorporation', key: 'coiUrl', abbr: 'COI', color: 'indigo' },
              { label: 'PAN Card', key: 'panUrl', abbr: 'PAN', color: 'orange' },
              { label: 'Articles of Association', key: 'aoaUrl', abbr: 'AOA', color: 'violet' },
              { label: 'Memorandum of Association', key: 'moaUrl', abbr: 'MOA', color: 'emerald' },
            ] as const).map(({ label, key, abbr, color }) => {
              const url = verifyStatus.documents![key];
              const colorMap = {
                indigo: 'bg-indigo-50 text-indigo-700 border-indigo-200',
                orange: 'bg-orange-50 text-orange-700 border-orange-200',
                violet: 'bg-violet-50 text-violet-700 border-violet-200',
                emerald: 'bg-emerald-50 text-emerald-700 border-emerald-200',
              };
              return url ? (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 p-3 rounded-lg border ${colorMap[color]} hover:opacity-80 transition-opacity`}
                >
                  <span className="text-xs font-bold w-9 text-center flex-shrink-0">{abbr}</span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold truncate">{label}</p>
                    <p className="text-xs opacity-70 mt-0.5">Click to view document</p>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 flex-shrink-0 opacity-60" />
                </a>
              ) : (
                <div key={key} className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 bg-gray-50 opacity-50">
                  <span className="text-xs font-bold w-9 text-center text-gray-400 flex-shrink-0">{abbr}</span>
                  <p className="text-sm text-gray-400">{label} not uploaded</p>
                </div>
              );
            })}
          </div>
        ) : (
          <NotVerifiedPrompt label="Document Upload" />
        )}
      </ExpandableSection>
      )}
    </div>
  );
}

// ─── Page: Documents ─────────────────────────────────────────────────────────

function DocumentsPage({ verifyStatus, onNavigate, isFreeUser }: { verifyStatus: VerifyStatus | null; onNavigate: (p: PageId) => void; isFreeUser: boolean }) {
  const docs = verifyStatus?.documents;
  const hasDocuments = verifyStatus?.hasDocuments ?? false;

  const slots = [
    { key: 'coiUrl' as const, abbr: 'COI', label: 'Certificate of Incorporation', desc: 'Official document proving company registration with MCA.', color: 'indigo' as const },
    { key: 'panUrl' as const, abbr: 'PAN', label: 'PAN Card', desc: 'Permanent Account Number issued by Income Tax Department.', color: 'orange' as const },
    { key: 'aoaUrl' as const, abbr: 'AOA', label: 'Articles of Association', desc: 'Defines internal rules and management structure of the company.', color: 'violet' as const },
    { key: 'moaUrl' as const, abbr: 'MOA', label: 'Memorandum of Association', desc: "Defines company's objectives, scope, and external relationships.", color: 'emerald' as const },
  ];

  const colorMap = {
    indigo:  { badge: 'bg-indigo-100 text-indigo-700 border-indigo-200',  card: 'border-indigo-200 bg-indigo-50/40',  icon: 'text-indigo-600',  dot: 'bg-indigo-500' },
    orange:  { badge: 'bg-orange-100 text-orange-700 border-orange-200',  card: 'border-orange-200 bg-orange-50/40',  icon: 'text-orange-600',  dot: 'bg-orange-500' },
    violet:  { badge: 'bg-violet-100 text-violet-700 border-violet-200',  card: 'border-violet-200 bg-violet-50/40',  icon: 'text-violet-600',  dot: 'bg-violet-500' },
    emerald: { badge: 'bg-emerald-100 text-emerald-700 border-emerald-200', card: 'border-emerald-200 bg-emerald-50/40', icon: 'text-emerald-600', dot: 'bg-emerald-500' },
  };

  const uploadedCount = docs ? slots.filter((s) => !!docs[s.key]).length : 0;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Business Documents</h1>
          <p className="text-gray-500 mt-1 text-sm">View and manage your uploaded verification documents.</p>
        </div>
        {isFreeUser ? (
          <Link href="/business-onboarding" className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-lg hover:bg-indigo-700 transition-colors">
            <Crown className="w-4 h-4" /> Upgrade to Upload
          </Link>
        ) : !hasDocuments ? (
          <Link href="/business-onboarding" className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-lg hover:bg-indigo-700 transition-colors">
            <FileText className="w-4 h-4" /> Upload Documents
          </Link>
        ) : null}
      </div>

      {isFreeUser ? (
        <div className="bg-white rounded-xl border-2 border-dashed border-gray-200 p-10 text-center">
          <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center mx-auto mb-4">
            <Lock className="w-7 h-7 text-gray-400" />
          </div>
          <h2 className="text-lg font-bold text-gray-700 mb-2">Documents Paid Plan Only</h2>
          <p className="text-sm text-gray-500 max-w-sm mx-auto mb-5">Document upload (COI, PAN, AOA, MOA) is available on the Verified plan. Upgrade to submit your business documents for full verification.</p>
          <Link href="/business-onboarding" className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white text-sm font-semibold rounded-lg hover:bg-indigo-700 transition-colors">
            <Crown className="w-4 h-4" /> Upgrade to Verified ₹299/month
          </Link>
        </div>
      ) : (
        <>
        {/* Summary bar */}
      <div className="bg-white rounded-lg border border-gray-200 p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${hasDocuments ? 'bg-emerald-50' : 'bg-gray-100'}`}>
            <FileText className={`w-5 h-5 ${hasDocuments ? 'text-emerald-600' : 'text-gray-400'}`} />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">{uploadedCount} of 4 documents uploaded</p>
            <p className="text-xs text-gray-400 mt-0.5">{hasDocuments ? 'Documents submitted for verification' : 'No documents uploaded yet'}</p>
          </div>
        </div>
        {hasDocuments && (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
            <CheckCircle className="w-3.5 h-3.5" /> Submitted
          </span>
        )}
      </div>

      {/* Document cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {slots.map((slot) => {
          const url = docs?.[slot.key];
          const c = colorMap[slot.color];
          return url ? (
            <a
              key={slot.key}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col gap-3 p-4 rounded-xl border-2 ${c.card} hover:shadow-md transition-all`}
            >
              <div className="flex items-start justify-between">
                <div className={`px-2.5 py-1 rounded-lg border text-xs font-bold ${c.badge}`}>{slot.abbr}</div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                  <CheckCircle className="w-3 h-3" /> Uploaded
                </span>
              </div>
              <div>
                <p className={`text-sm font-semibold ${c.icon}`}>{slot.label}</p>
                <p className="text-xs text-gray-500 mt-0.5">{slot.desc}</p>
              </div>
              <div className="flex items-center gap-1.5 mt-auto pt-2 border-t border-white/60">
                <ExternalLink className={`w-3.5 h-3.5 ${c.icon}`} />
                <span className={`text-xs font-semibold ${c.icon} group-hover:underline`}>View Document</span>
              </div>
            </a>
          ) : (
            <div key={slot.key} className="flex flex-col gap-3 p-4 rounded-xl border-2 border-dashed border-gray-200 bg-gray-50">
              <div className="flex items-start justify-between">
                <div className="px-2.5 py-1 rounded-lg border text-xs font-bold bg-gray-100 text-gray-400 border-gray-200">{slot.abbr}</div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-gray-400 bg-gray-100 border border-gray-200 px-2 py-0.5 rounded-full">
                  <AlertCircle className="w-3 h-3" /> Not uploaded
                </span>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-400">{slot.label}</p>
                <p className="text-xs text-gray-400 mt-0.5">{slot.desc}</p>
              </div>
              <Link
                href="/business-onboarding"
                className="flex items-center gap-1.5 mt-auto pt-2 border-t border-gray-200 text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
              >
                <ArrowRight className="w-3.5 h-3.5" /> Upload now
              </Link>
            </div>
          );
        })}
      </div>

      {isFreeUser ? null : hasDocuments && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-amber-800">Need to replace a document?</p>
            <p className="text-xs text-amber-700 mt-1">Go to the onboarding flow to upload new versions. Re-uploading will replace the existing files.</p>
            <Link href="/business-onboarding" className="inline-flex items-center gap-1.5 mt-2 text-xs font-semibold text-amber-700 hover:text-amber-900 transition-colors">
              Go to Onboarding <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
        </>
      )}
    </div>
  );
}

// ─── Page: Subscription ───────────────────────────────────────────────────────

function SubscriptionPage({
  subscription,
  profile,
  onSubscriptionChanged,
}: {
  subscription: SubscriptionStatus | null;
  profile: BusinessProfile | null;
  onSubscriptionChanged: () => Promise<void>;
}) {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [cancelProcessing, setCancelProcessing] = useState(false);
  const [showCancelConfirm, setShowCancelConfirm] = useState(false);
  const [cancelError, setCancelError] = useState('');
  const [cancelSuccess, setCancelSuccess] = useState('');
  const [paid, setPaid] = useState(false);
  const [plans, setPlans] = useState<PlanData[]>([]);
  const currentPlanName = subscription?.plan === 'annually' ? 'Annual' : subscription?.plan === 'quarterly' ? 'Quarterly' : 'Monthly';

  useEffect(() => {
    fetch('/api/razorpay/plans')
      .then((res) => res.ok ? res.json() : null)
      .then((data) => {
        const fetchedPlans = Array.isArray(data) ? data : data?.plans;
        if (Array.isArray(fetchedPlans)) setPlans(fetchedPlans);
      })
      .catch(() => { /* dashboard can still use fallback prices */ });
  }, []);

  const freePlan = plans.find(p => p.amount === 0 || p.plan_id.toLowerCase().includes('free'));
  const monthlyPlan = plans.find(p => normalizeBillingCycle(p.billing_cycle) === 'monthly' && p.amount > 0);
  const quarterlyPlan = plans.find(p => normalizeBillingCycle(p.billing_cycle) === 'quarterly' && p.amount > 0);
  const annualPlan = plans.find(p => normalizeBillingCycle(p.billing_cycle) === 'annually' && p.amount > 0);

  const freePrice = freePlan ? Math.round(parseFloat(freePlan.price_excluding_gst)) : 0;
  const freeTitle = freePlan?.name?.replace(/\s*Plan$/i, '') || 'Free';
  const freeDescription = freePlan?.description || 'Basic listing with no verification badge';
  const monthlyPrice = monthlyPlan ? Math.round(parseFloat(monthlyPlan.price_excluding_gst)) : 349;
  const monthlyTotal = monthlyPlan ? Math.round(parseFloat(monthlyPlan.total_price)) : 412;
  const quarterlyPrice = quarterlyPlan ? Math.round(parseFloat(quarterlyPlan.price_excluding_gst)) : monthlyPrice * 3;
  const quarterlyTotal = quarterlyPlan ? Math.round(parseFloat(quarterlyPlan.total_price)) : 1058;
  const quarterlyPerMonth = Math.round(quarterlyPrice / 3);
  const annualPrice = annualPlan ? Math.round(parseFloat(annualPlan.price_excluding_gst)) : 2999;
  const annualTotal = annualPlan ? Math.round(parseFloat(annualPlan.total_price)) : 3539;
  const annualPerMonth = Math.round(annualPrice / 12);
  const savingsPerQuarter = (monthlyPrice * 3) - quarterlyPrice;
  const savingsPerYear = (monthlyPrice * 12) - annualPrice;
  const activePlan = subscription?.hasActiveSubscription
    ? subscription.plan
    : paid
      ? billingCycle
      : null;
  const activePlanId = subscription?.hasActiveSubscription && subscription.planId !== null && subscription.planId !== undefined
    ? String(subscription.planId)
    : null;
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
  const subscriptionHistory = subscription?.subscriptions ?? [];
  const activeHistoryItem = subscriptionHistory.find((item) => item.status === 'active');
  const getPlanNameByDbId = (planId?: number | string) => {
    const matchedPlan = plans.find((plan) => String(plan.id) === String(planId));
    return matchedPlan?.name?.replace(/\s*Plan$/i, '') || 'Unknown Plan';
  };
  const formatHistoryDate = (value?: string) => {
    if (!value) return 'Not available';
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return 'Not available';
    return date.toLocaleString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    });
  };

  const getPlanForCycle = (selectedCycle: BillingCycle) => (
    plans.find(p => normalizeBillingCycle(p.billing_cycle) === selectedCycle && p.amount > 0)
    ?? plans.find(p => normalizeBillingCycle(p.billing_cycle) === selectedCycle)
  );

  const handleRazorpayPayment = async (selectedCycle: BillingCycle) => {
    setBillingCycle(selectedCycle);
    setPaymentProcessing(true);
    setCancelError('');
    setCancelSuccess('');

    try {
      const selectedPlan = getPlanForCycle(selectedCycle);
      if (!selectedPlan) {
        setPaymentProcessing(false);
        alert('Selected plan is not available right now. Please try again shortly.');
        return;
      }

      const loadScript = () =>
        new Promise<boolean>((resolve) => {
          if ((window as any).Razorpay) { resolve(true); return; }
          const script = document.createElement('script');
          script.src = 'https://checkout.razorpay.com/v1/checkout.js';
          script.onload = () => resolve(true);
          script.onerror = () => resolve(false);
          document.body.appendChild(script);
        });
      const loaded = await loadScript();
      if (!loaded) { setPaymentProcessing(false); alert('Failed to load payment gateway. Please try again.'); return; }

      const customerName = profile?.business_name || '';
      const customerEmail = profile?.email || '';
      const customerPhone = profile?.phone || '';
      const notes = {
        business_user_id: profile?.business_user_id,
        source: 'rakshaai_website',
      };
      const hasExistingSubscription = Boolean(subscription?.hasActiveSubscription && subscription.subscriptionId);
      const previousSubscriptionId = hasExistingSubscription ? subscription?.subscriptionId : null;

      const res = await fetch(hasExistingSubscription ? '/api/razorpay/upgrade-subscription' : '/api/razorpay/create-subscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(hasExistingSubscription
          ? {
            plan_id: selectedPlan.plan_id,
            subscription_id: subscription?.subscriptionId,
            total_count: selectedPlan.total_count,
            customer_notify: 1,
            customer_email: customerEmail,
            customer_name: customerName,
            customer_phone: customerPhone,
            notes,
          }
          : {
            plan_id: selectedPlan.plan_id,
            total_count: selectedPlan.total_count,
            customer_notify: true,
            customer_email: customerEmail,
            businessName: customerName,
            customer_phone: customerPhone,
            notes,
          }),
      });
      const { subscriptionId, shortUrl, error } = await res.json();
      if (!res.ok || (!subscriptionId && !shortUrl)) {
        setPaymentProcessing(false);
        alert(error || (hasExistingSubscription ? 'Could not change plan. Please try again.' : 'Could not create subscription. Please try again.'));
        return;
      }

      const selectedPlanPrice = Math.round(parseFloat(selectedPlan.price_excluding_gst));
      const checkoutDescription = selectedCycle === 'annually'
        ? `Business Verification Certificate ₹${selectedPlanPrice}/year`
        : selectedCycle === 'quarterly'
          ? `Business Verification Certificate ₹${selectedPlanPrice}/quarter`
          : `Business Verification Certificate ₹${selectedPlanPrice}/month`;

      if (!subscriptionId && shortUrl) {
        window.location.href = shortUrl;
        return;
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        subscription_id: subscriptionId,
        name: 'RakshaAI',
        description: checkoutDescription,
        image: '/rakshaai-logo.svg',
        handler: async (response: any) => {
          try {
            await fetch('/api/razorpay/verify-payment', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_subscription_id: response.razorpay_subscription_id,
                razorpay_signature: response.razorpay_signature,
                ...(previousSubscriptionId ? { previous_subscription_id: previousSubscriptionId } : {}),
              }),
            });
          } catch { /* backend reconciles */ }
          setPaid(true);
          await onSubscriptionChanged();
        },
        prefill: { name: customerName, email: customerEmail, contact: customerPhone },
        theme: { color: '#4F46E5' },
        modal: { ondismiss: () => setPaymentProcessing(false) },
      };
      if ((window as any).Razorpay) {
        const rzp = new (window as any).Razorpay(options);
        rzp.open();
      } else if (shortUrl) {
        window.location.href = shortUrl;
      }
    } catch { alert('Something went wrong. Please try again.'); }
    finally { setPaymentProcessing(false); }
  };

  const formatSubscriptionEnd = (value: unknown) => {
    if (typeof value !== 'string' && typeof value !== 'number') return '';
    const raw = typeof value === 'number' && value < 10_000_000_000 ? value * 1000 : value;
    const date = new Date(raw);
    if (Number.isNaN(date.getTime())) return '';
    return date.toLocaleString('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short',
    });
  };

  const getSubscriptionEndTime = (payload: unknown): string => {
    const endKeys = new Set(['end_at', 'ended_at', 'current_end', 'charge_at', 'expire_by']);
    const visit = (value: unknown, depth = 0): string => {
      if (!value || typeof value !== 'object' || depth > 3) return '';
      for (const [key, child] of Object.entries(value as Record<string, unknown>)) {
        if (endKeys.has(key)) {
          const formatted = formatSubscriptionEnd(child);
          if (formatted) return formatted;
        }
        const nested = visit(child, depth + 1);
        if (nested) return nested;
      }
      return '';
    }
    return visit(payload);
  };

  const handleCancelSubscription = async () => {
    if (!subscription?.subscriptionId) {
      setCancelError('Subscription ID is missing. Please refresh and try again.');
      return;
    }

    setCancelProcessing(true);
    setCancelError('');
    setCancelSuccess('');

    try {
      const res = await fetch('/api/razorpay/cancel-subscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subscription_id: subscription.subscriptionId,
          cancel_at_cycle_end: false,
        }),
      });
      const data = await res.json();

      if (!res.ok) {
        setCancelError(data?.error || 'Could not cancel subscription. Please try again.');
        return;
      }

      const endTime = getSubscriptionEndTime(data);
      setCancelSuccess(endTime
        ? `Your subscription has been cancelled. Your plan access will end on ${endTime}.`
        : 'Your subscription has been cancelled. Your plan access will end at the end of the current billing period.'
      );
      setShowCancelConfirm(false);
      setPaid(false);
      await onSubscriptionChanged();
    } catch {
      setCancelError('Network error while cancelling subscription. Please try again.');
    } finally {
      setCancelProcessing(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Subscription &amp; Billing</h1>
        <p className="text-gray-500 mt-1 text-sm">Manage your plan and view payment details.</p>
      </div>

      {cancelSuccess && (
        <div className="flex items-start gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
          <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <span>{cancelSuccess}</span>
        </div>
      )}

      {cancelError && !showCancelConfirm && (
        <div className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <span>{cancelError}</span>
        </div>
      )}

      <div className="space-y-5">
        <div className="flex items-center gap-3 p-4 bg-indigo-50 border border-indigo-100 rounded-xl">
          <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center flex-shrink-0">
            <Crown className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-sm font-bold text-indigo-900">Activate Verification</p>
            <p className="text-xs text-indigo-600">Subscribe at ₹299/month and unlock your certificate</p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-xl font-extrabold text-gray-900">Choose Your Plan</h2>
          <p className="text-sm text-gray-500 mt-1">Start free or unlock full verification with a paid plan</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          <div className={`rounded-2xl p-5 bg-white flex flex-col ${activePlan === null ? 'border-2 border-green-500 shadow-lg shadow-green-100' : 'border border-gray-200'}`}>
            <p className="text-base font-bold text-gray-900 mb-0.5">{freeTitle}</p>
            <p className="text-xs text-gray-500 mb-4 leading-snug">{freeDescription}</p>
            <div className="mb-4">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black text-gray-900">₹{freePrice}</span>
              </div>
              <p className="text-xs text-gray-400 mt-0.5">
                {freePlan?.total_count === 0 ? 'Forever free' : `${freePlan?.interval_count ?? 1} ${freePlan?.interval ?? 'month'}`}
              </p>
            </div>
            <div className="space-y-2 mb-5 flex-1">
              {freeFeatures.map(({ text, included }) => (
                <div key={text} className="flex items-center gap-2">
                  {included
                    ? <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                    : <X className="w-3.5 h-3.5 text-gray-300 flex-shrink-0" />}
                  <span className={`text-xs ${included ? 'text-gray-700' : 'text-gray-400'}`}>{text}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mb-3">No payment required</p>
            <div className={`w-full py-2.5 text-center text-sm font-semibold border-2 rounded-xl select-none ${activePlan === null ? 'border-green-200 bg-green-50 text-green-700' : 'border-gray-200 bg-gray-50 text-gray-500'}`}>
              {activePlan === null ? 'Current Plan' : 'Free Plan'}
            </div>
          </div>

          {paidPlans.map((plan) => {
            const isCurrentPlan = activePlanId && plan.planDbId !== undefined
              ? activePlanId === String(plan.planDbId)
              : activePlan === plan.cycle;

            return (
              <div
                key={plan.cycle}
                className={`relative rounded-2xl p-5 bg-white flex flex-col ${isCurrentPlan
                  ? 'border-2 border-green-500 shadow-lg shadow-green-100'
                  : plan.highlighted
                    ? 'border-2 border-indigo-500 shadow-lg shadow-indigo-100'
                    : 'border border-gray-200'
                  }`}
              >
                {(isCurrentPlan || plan.badge) && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className={`${isCurrentPlan ? 'bg-green-600 text-white' : plan.highlighted ? 'bg-indigo-600 text-white' : 'bg-green-50 text-green-700 border border-green-200'} text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap`}>
                      {isCurrentPlan ? 'Current Plan' : plan.badge}
                    </span>
                  </div>
                )}
                <p className={`text-base font-bold text-gray-900 mb-0.5 ${(isCurrentPlan || plan.badge) ? 'mt-2' : ''}`}>{plan.title}</p>
                <p className="text-xs text-gray-500 mb-4 leading-snug">{plan.description}</p>
                <div className="mb-4">
                  {plan.cycle === 'annually' && <p className="text-xs text-gray-400 line-through">₹{monthlyPrice}/mo</p>}
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-gray-900">₹{plan.price}</span>
                    <span className="text-gray-400 text-sm">{plan.priceSuffix}</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-0.5">{plan.billingNote}</p>
                </div>
                <div className="space-y-2 mb-5 flex-1">
                  {paidFeatures.map((text) => (
                    <div key={text} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                      <span className="text-xs text-gray-700">{text}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mb-3">Wallet charges may apply as per Paid API</p>
                <button
                  onClick={() => handleRazorpayPayment(plan.cycle)}
                  disabled={paymentProcessing || isCurrentPlan}
                  className={`w-full flex items-center justify-center gap-2 py-2.5 text-sm font-bold rounded-xl transition-colors disabled:cursor-not-allowed ${isCurrentPlan
                    ? 'bg-green-50 text-green-700 border border-green-200'
                    : 'bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white'
                    }`}
                >
                  {isCurrentPlan
                    ? <><CheckCircle className="w-3.5 h-3.5" />Current Plan</>
                    : paymentProcessing && billingCycle === plan.cycle
                      ? <><Loader2 className="w-3.5 h-3.5 animate-spin" />Processing...</>
                      : activePlan
                        ? 'Upgrade Plan'
                        : 'Select'}
                </button>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
          <Lock className="w-3.5 h-3.5" />
          <span>256-bit SSL secured · Powered by Razorpay · Cancel anytime</span>
        </div>

        {(subscription?.hasActiveSubscription || paid) && (
          <>
            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h3 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2"><Sparkles className="w-4 h-4 text-amber-500" /> What&apos;s Included</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {['GST Verification', 'PAN Verification', 'Aadhaar KYC with OTP', 'Bank Account Verification', 'MCA / Company Lookup', 'Trust Badge on Profile', 'Priority Support', 'Anti-Scam Protection'].map((b) => (
                  <div key={b} className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center flex-shrink-0">
                  <CreditCard className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Plan actions</p>
                  <p className="text-xs text-gray-500 mt-1 max-w-xl">
                    Manage billing changes for your current {currentPlanName.toLowerCase()} plan.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={() => {
                    setShowCancelConfirm(true);
                    setCancelError('');
                    setCancelSuccess('');
                  }}
                  disabled={!subscription?.subscriptionId || cancelProcessing}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-2.5 text-sm font-bold text-red-700 hover:bg-red-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <X className="w-4 h-4" /> Cancel plan
                </button>
              </div>
            </div>

            {cancelError && (
              <div className="mt-4 flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{cancelError}</span>
              </div>
            )}
          </div>

          {showCancelConfirm && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/50 px-4 py-6">
              <div className="w-full max-w-lg rounded-2xl bg-white shadow-2xl border border-gray-200 overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center flex-shrink-0">
                      <AlertCircle className="w-5 h-5 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900">Cancel {currentPlanName} Plan?</h3>
                      <p className="text-sm text-gray-500 mt-1">
                        Your subscription will be cancelled now. You can subscribe again later from this page.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowCancelConfirm(false)}
                      disabled={cancelProcessing}
                      className="text-gray-400 hover:text-gray-600 disabled:opacity-50"
                      aria-label="Close cancellation dialog"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="rounded-xl border border-red-100 bg-red-50 p-4">
                    <p className="text-sm font-bold text-gray-900">Confirm cancellation</p>
                    <p className="text-xs text-gray-600 mt-1">
                      After confirmation, we will cancel your subscription and show when your plan access ends.
                    </p>
                  </div>

                  {cancelError && (
                    <div className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{cancelError}</span>
                    </div>
                  )}
                </div>

                <div className="flex flex-col-reverse gap-2 bg-gray-50 px-6 py-4 sm:flex-row sm:justify-end">
                  <button
                    type="button"
                    onClick={() => setShowCancelConfirm(false)}
                    disabled={cancelProcessing}
                    className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                  >
                    Keep subscription
                  </button>
                  <button
                    type="button"
                    onClick={handleCancelSubscription}
                    disabled={cancelProcessing}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {cancelProcessing ? <><Loader2 className="w-4 h-4 animate-spin" />Cancelling...</> : 'Confirm cancellation'}
                  </button>
                </div>
              </div>
            </div>
          )}
          </>
        )}

        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
          <div className="flex flex-col gap-3 border-b border-gray-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900">Billing Activity</h3>
                  <p className="text-xs text-gray-500 mt-0.5">A timeline of current and previous subscriptions.</p>
                </div>
              </div>
            </div>
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-600 border border-gray-200 shadow-sm">
              <Clock className="w-3.5 h-3.5" /> {subscriptionHistory.length} record{subscriptionHistory.length === 1 ? '' : 's'}
            </span>
          </div>

          {subscriptionHistory.length > 0 ? (
            <div className="p-5">
              {activeHistoryItem && (
                <div className="mb-5 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">Current subscription</p>
                      <div className="mt-1 flex flex-wrap items-center gap-2">
                        <h4 className="text-base font-extrabold text-gray-900">{getPlanNameByDbId(activeHistoryItem.plan_id)} Plan</h4>
                        <span className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[11px] font-bold text-emerald-700 border border-emerald-200">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Active
                        </span>
                      </div>
                      <p className="mt-1 truncate font-mono text-xs text-emerald-800/70">{activeHistoryItem.subscription_id}</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="relative">
                <div className="absolute left-[13px] top-3 bottom-3 w-px bg-gray-200" />
                <div className="space-y-4">
                  {subscriptionHistory.map((item, index) => {
                const status = item.status || 'unknown';
                const isActive = status === 'active';
                const planName = getPlanNameByDbId(item.plan_id);

                return (
                  <div key={item.subscription_id} className="relative pl-10">
                    <div className={`absolute left-0 top-5 h-7 w-7 rounded-full border-4 border-white flex items-center justify-center ${isActive ? 'bg-emerald-500' : 'bg-gray-300'}`}>
                      {isActive ? <CheckCircle className="w-3.5 h-3.5 text-white" /> : <Clock className="w-3.5 h-3.5 text-white" />}
                    </div>
                    <div className={`rounded-xl border p-4 transition-colors ${isActive ? 'border-emerald-200 bg-white shadow-sm' : 'border-gray-200 bg-gray-50/60'}`}>
                      <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <p className="text-sm font-bold text-gray-900">{planName} Plan</p>
                            <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-bold capitalize ${isActive ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-white text-gray-600 border border-gray-200'}`}>
                              {status}
                            </span>
                            {index === 0 && (
                              <span className="inline-flex items-center rounded-full bg-indigo-50 px-2.5 py-1 text-[11px] font-bold text-indigo-700 border border-indigo-100">
                                Latest
                              </span>
                            )}
                          </div>
                          <p className="mt-1 truncate font-mono text-xs text-gray-500">{item.subscription_id}</p>
                          <div className="mt-3 grid gap-1 text-xs text-gray-500 sm:grid-cols-2">
                            <p><span className="text-gray-400">Started</span> {formatHistoryDate(item.created_at)}</p>
                            <p><span className="text-gray-400">Updated</span> {formatHistoryDate(item.updated_at)}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
                  })}
                </div>
              </div>
            </div>
          ) : (
            <div className="px-5 py-8 text-center">
              <p className="text-sm font-semibold text-gray-700">No subscription history yet</p>
              <p className="text-xs text-gray-500 mt-1">Your subscription records will appear here after you activate a plan.</p>
            </div>
          )}
        </div>

          {/* Benefits section */}
          <div className="border-t border-gray-100 pt-6 space-y-8">
            <div>
              <p className="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-1">Why go Verified?</p>
              <h4 className="text-lg font-extrabold text-gray-900 leading-tight">Everything a verified business owner gets explained</h4>
              <p className="text-sm text-gray-500 mt-1 leading-relaxed">The RakshaAI Verified plan is more than a badge. Here is a complete breakdown of what you unlock and why it matters for your business.</p>
            </div>

            {[
              { color: 'indigo', Icon: BadgeCheck, title: '1. RakshaAI Verified Badge', body: 'Once verified, your business profile, search result card, and public listing all display the official RakshaAI Verified badge a visual trust signal that instantly tells customers you are a legitimate, fraud-free business.', points: ['Customers can see at a glance that your business is safe to deal with', 'Reduces customer hesitation especially for first-time buyers', 'Badge appears on every RakshaAI page that lists your business'] },
              { color: 'green', Icon: TrendingUp, title: '3. Priority Search Ranking', body: 'RakshaAI search results rank verified businesses above unverified ones. When someone searches for a business in your category or by name, your profile appears higher putting you in front of more potential customers every day.', points: ['Featured in "Trusted Businesses" on the RakshaAI homepage', 'Visible on scam alerts and city-level safety pages', 'Organic visibility that unverified businesses cannot get'] },
              { color: 'violet', Icon: Star, title: '4. Monthly Trust Score Analytics', body: 'Every month you receive a detailed report showing how your trust score has changed, what customers are saying, how many profile visits you received, and whether any new signals have been detected.', points: ['Profile views & monthly search counts', 'Review sentiment breakdown', 'Trust score change history and scam signal monitoring'] },
              { color: 'red', Icon: ShieldCheck, title: '5. Scam Protection & Real-Time Alerts', body: 'As a verified business, you get real-time alerts if someone files a false scam report so you can respond quickly and protect your reputation before it spreads.', points: ['False or malicious scam reports by competitors', 'Impersonation attempts using your business name', 'Unverified negative reviews that hurt your score'] },
            ].map(({ color, Icon, title, body, points }) => (
              <div key={title} className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-xl bg-${color}-100 flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-4 h-4 text-${color}-600`} />
                  </div>
                  <h5 className="text-sm font-bold text-gray-900">{title}</h5>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed pl-10">{body}</p>
                <div className={`ml-10 bg-${color}-50 border border-${color}-100 rounded-xl p-3.5`}>
                  <ul className="space-y-1.5">
                    {points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2">
                        <CheckCircle className={`w-3.5 h-3.5 text-${color}-400 mt-0.5 flex-shrink-0`} />
                        <span className={`text-xs text-${color}-700`}>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* Stats bar */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              {[
                { value: '10K+', label: 'Verified Businesses', color: 'indigo' },
                { value: '3×', label: 'Avg. Conversion Lift', color: 'green' },
                { value: '4.9★', label: 'Avg. Trust Score', color: 'amber' },
              ].map(({ value, label, color }) => (
                <div key={label} className={`text-center p-3 rounded-xl bg-${color}-50 border border-${color}-100`}>
                  <p className={`text-xl font-black text-${color}-600`}>{value}</p>
                  <p className={`text-xs text-${color}-700 mt-0.5 leading-tight`}>{label}</p>
                </div>
              ))}
            </div>

            {!activePlan && (
              <div className="bg-gradient-to-br from-indigo-600 to-violet-600 rounded-2xl p-5 text-white text-center space-y-3">
                <p className="text-base font-extrabold">Ready to get verified?</p>
                <p className="text-xs text-indigo-200 leading-relaxed">Join 10,000+ businesses that trust RakshaAI to grow faster, win more customers, and stay protected.</p>
                <button
                  onClick={() => handleRazorpayPayment('monthly')}
                  disabled={paymentProcessing}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-white hover:bg-indigo-50 disabled:opacity-50 text-indigo-700 text-sm font-extrabold rounded-xl transition-colors"
                >
                  {paymentProcessing
                    ? <><Loader2 className="w-4 h-4 animate-spin" />Processing...</>
                    : <><CreditCard className="w-4 h-4" />Pay ₹{monthlyPrice}/month &amp; Get Verified</>}
                </button>
                <p className="text-xs text-indigo-300">Cancel anytime · 256-bit SSL secured</p>
              </div>
            )}
          </div>

        </div>
    </div>
  );
}

// ─── Page: Profile ────────────────────────────────────────────────────────────

function ShareProfileButton({ businessId }: { businessId?: string }) {
  const [copied, setCopied] = React.useState(false);
  if (!businessId) return null;
  const url = typeof window !== 'undefined'
    ? `${window.location.origin}/business-profile/${businessId}`
    : `/business-profile/${businessId}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadQR = () => {
    const svg = document.getElementById('business-profile-qr');
    if (!svg) return;
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement('canvas');
    const size = 300;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const img = new window.Image();
    img.onload = () => {
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, size, size);
      ctx.drawImage(img, 0, 0, size, size);
      const a = document.createElement('a');
      a.download = `RakshaAI-${businessId}-QRCode.png`;
      a.href = canvas.toDataURL('image/png');
      a.click();
    };
    img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)));
  };

  return (
    <div className="bg-gradient-to-r from-indigo-50 to-violet-50 border border-indigo-200 rounded-xl p-4 space-y-3">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0">
            <ExternalLink className="w-4 h-4 text-indigo-600" />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-900">Public Business Profile</p>
            <p className="text-xs text-gray-500 mt-0.5">Share this link with anyone to showcase your verified business identity.</p>
            <p className="text-xs font-mono text-indigo-500 mt-1 truncate max-w-xs">{url}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 border border-indigo-300 bg-white hover:bg-indigo-50 px-3 py-2 rounded-lg transition-colors"
          >
            <Eye className="w-3.5 h-3.5" /> Preview
          </a>
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 px-3 py-2 rounded-lg transition-colors"
          >
            {copied ? <CheckCircle className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? 'Copied!' : 'Copy Link'}
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center gap-3 pt-2 border-t border-indigo-200">
        <div className="text-center space-y-1 max-w-md">
          <p className="text-xs font-semibold text-gray-700">Download this QR code and place it on your website so customers can scan it anytime.</p>
          <p className="text-xs text-gray-500">They’ll be taken to your public business profile page, where they can view your verified business details and documents.</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-indigo-100">
          <QRCode
            id="business-profile-qr"
            value={url}
            size={160}
            bgColor="#ffffff"
            fgColor="#3730a3"
            level="M"
          />
        </div>
        <button
          onClick={handleDownloadQR}
          className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-violet-600 hover:bg-violet-700 px-4 py-2 rounded-lg transition-colors"
        >
          <Download className="w-3.5 h-3.5" />
          Download QR Code
        </button>
      </div>
    </div>
  );
}

function ReportsPage() {
  const [reports, setReports] = useState<BusinessReport[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [savingId, setSavingId] = useState<string | number | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [proofModal, setProofModal] = useState<{
    reportId: BusinessReport['id'];
    currentStatus: ReportStatus;
    nextStatus: ReportStatus;
    reportName: string;
  } | null>(null);
  const [responseText, setResponseText] = useState('');
  const [proofFile, setProofFile] = useState<File | null>(null);
  const [proofError, setProofError] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    setLoadError(null);
    try {
      const res = await fetch('/api/business/reports', { cache: 'no-store' });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setReports(null);
        setLoadError(data?.error || 'Failed to load reports.');
        return;
      }
      const list: BusinessReport[] = Array.isArray(data?.reports)
        ? data.reports
        : Array.isArray(data?.results)
        ? data.results
        : Array.isArray(data)
        ? data
        : [];
      setReports(list.map((report) => ({
        ...report,
        submission_type: report.submission_type === 'website' ? 'web' : report.submission_type,
      })));
    } catch {
      setReports(null);
      setLoadError('Network error. Failed to load reports.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const closeProofModal = () => {
    setProofModal(null);
    setResponseText('');
    setProofFile(null);
    setProofError(null);
  };

  const updateStatus = async (id: BusinessReport['id'], status: ReportStatus, responsePayload: { responseText: string; proofFile: File }) => {
    setSavingId(id);
    const prev = reports;

    try {
      const proofFormData = new FormData();
      proofFormData.append('response_text', responsePayload.responseText);
      proofFormData.append('document', responsePayload.proofFile);
      proofFormData.append('status', status);

      const proofRes = await fetch(`/api/business/reports/${encodeURIComponent(String(id))}/respond`, {
        method: 'POST',
        body: proofFormData,
      });

      const proofData = await proofRes.json().catch(() => ({}));
      if (!proofRes.ok) {
        alert(proofData?.error || 'Failed to submit proof');
        return;
      }

      setReports((cur) => cur?.map((report) => (
        report.id === id
          ? {
              ...report,
              status: (proofData?.status as ReportStatus | undefined) || status,
              business_owner_response: proofData?.business_owner_response || responsePayload.responseText,
              business_owner_document: proofData?.business_owner_document || report.business_owner_document,
              business_owner_responded_at: proofData?.business_owner_responded_at || new Date().toISOString(),
            }
          : report
      )) ?? prev);
      closeProofModal();
    } catch {
      alert('Network error. Please try again.');
    } finally {
      setSavingId(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
          <p className="text-gray-500 mt-1 text-sm">Reports submitted by users about your business. Update the status so reporters know what&apos;s happening.</p>
        </div>
        <button
          onClick={load}
          disabled={loading}
          className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
          Refresh
        </button>
      </div>

      {loadError && !loading && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-xs text-red-800 flex items-start gap-2">
          <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <span>{loadError}</span>
        </div>
      )}

      {loading ? (
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-lg p-5 animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-1/3 mb-3" />
              <div className="h-3 bg-gray-100 rounded w-2/3 mb-2" />
              <div className="h-3 bg-gray-100 rounded w-1/2" />
            </div>
          ))}
        </div>
      ) : !reports || reports.length === 0 ? (
        <div className="bg-white border border-gray-200 rounded-lg p-10 text-center">
          <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gray-100 flex items-center justify-center">
            <AlertCircle className="w-5 h-5 text-gray-400" />
          </div>
          <p className="text-sm font-semibold text-gray-700">No reports yet</p>
          <p className="text-xs text-gray-500 mt-1">When users report your business, you&apos;ll see them here.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {reports.map((r) => {
            const status = r.status ?? 'pending';
            const submission = String(r.submission_type || '').toLowerCase();
            const submissionStyle =
              submission === 'upi'   ? 'bg-blue-100 text-blue-800' :
              submission === 'phone' ? 'bg-green-100 text-green-800' :
                                       'bg-purple-100 text-purple-800';
            const isSaving = savingId === r.id;
            return (
              <div key={r.id} className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                <div className="flex items-start justify-between gap-3 mb-3 flex-wrap">
                  <div className="flex items-center gap-2 min-w-0">
                    <h3 className="font-semibold text-gray-900 truncate">{r.name || 'Anonymous'}</h3>
                    {r.submission_type && (
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${submissionStyle}`}>
                        {String(r.submission_type).toUpperCase()}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Clock className="w-3 h-3 text-gray-400" />
                    <time dateTime={r.created_at}>{fmt(r.created_at)}</time>
                  </div>
                </div>

                {r.review && (
                  <div className="mb-4 p-3 bg-gray-50 rounded-lg border-l-4 border-indigo-300">
                    <p className="text-sm text-gray-700 leading-relaxed">{r.review}</p>
                  </div>
                )}

                {(r.phone_number || r.website_url || r.website_slug) && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {r.phone_number && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-600 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-full">
                        <Phone className="w-3 h-3 text-gray-400" /> {r.phone_number}
                      </span>
                    )}
                    {r.website_url && (
                      <a
                        href={r.website_url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-700 bg-indigo-50 border border-indigo-200 px-2.5 py-1 rounded-full hover:bg-indigo-100"
                      >
                        <Globe className="w-3 h-3" /> {r.website_slug || r.website_url}
                      </a>
                    )}
                  </div>
                )}

                {r.business_owner_response && (
                  <div className="mb-4 rounded-lg border border-emerald-200 bg-emerald-50/70 p-3">
                    <div className="flex items-center justify-between gap-3 mb-2 flex-wrap">
                      <p className="text-xs font-bold uppercase tracking-wide text-emerald-700">Your Submitted Response</p>
                      {r.business_owner_responded_at && (
                        <span className="text-[11px] text-emerald-700/80">{fmt(r.business_owner_responded_at)}</span>
                      )}
                    </div>
                    <p className="text-sm text-emerald-900 leading-relaxed">{r.business_owner_response}</p>
                    {r.business_owner_document && (
                      <a
                        href={r.business_owner_document}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-white border border-emerald-200 px-3 py-1.5 rounded-lg hover:bg-emerald-100"
                      >
                        <ExternalLink className="w-3 h-3" /> View Submitted Proof
                      </a>
                    )}
                  </div>
                )}

                <div className="flex flex-wrap items-center gap-3">
                  {r.attachment && typeof r.attachment === 'string' && /^https?:\/\//.test(r.attachment) && (
                    <a
                      href={r.attachment}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs inline-flex items-center gap-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 px-3 py-1.5 rounded-lg font-medium border border-indigo-200"
                    >
                      <ExternalLink className="w-3 h-3" /> View Evidence
                    </a>
                  )}

                  <div className="flex items-center gap-2 ml-auto">
                    <span className={`inline-flex items-center text-xs px-2 py-1 rounded-full border font-medium ${reportStatusStyle(status)}`}>
                      {REPORT_STATUS_OPTIONS.find((o) => o.value === status)?.label ?? status}
                    </span>
                    <select
                      value={status}
                      disabled={isSaving}
                      onChange={(e) => {
                        const nextStatus = e.target.value as ReportStatus;
                        if (nextStatus === status) return;
                        setProofModal({
                          reportId: r.id,
                          currentStatus: status,
                          nextStatus,
                          reportName: r.name || 'Anonymous',
                        });
                        setResponseText(r.business_owner_response || '');
                        setProofFile(null);
                        setProofError(null);
                      }}
                      className="text-sm border border-gray-200 rounded-lg px-2 py-1.5 bg-white hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-200 disabled:opacity-60"
                    >
                      {REPORT_STATUS_OPTIONS.map((o) => (
                        <option key={o.value} value={o.value}>{o.label}</option>
                      ))}
                    </select>
                    {isSaving && <Loader2 className="w-3.5 h-3.5 animate-spin text-gray-400" />}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {proofModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-slate-900/40 backdrop-blur-sm">
          <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
            <div className="flex items-start justify-between gap-4 px-6 py-5 border-b border-gray-100 bg-gradient-to-r from-indigo-50 to-violet-50">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-indigo-500">Submit Proof</p>
                <h3 className="text-lg font-bold text-gray-900 mt-1">Update report status to {REPORT_STATUS_OPTIONS.find((option) => option.value === proofModal.nextStatus)?.label}</h3>
                <p className="text-sm text-gray-500 mt-1">Add a short response and upload an image or PDF showing how you worked on this report for {proofModal.reportName}.</p>
              </div>
              <button
                onClick={closeProofModal}
                className="w-9 h-9 rounded-lg border border-gray-200 bg-white text-gray-400 hover:text-gray-600 hover:bg-gray-50 flex items-center justify-center flex-shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">Response details</label>
                <textarea
                  value={responseText}
                  onChange={(event) => setResponseText(event.target.value)}
                  rows={4}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 outline-none focus:border-indigo-300 focus:ring-4 focus:ring-indigo-100 resize-none"
                  placeholder="Explain what action you took to resolve or review this report..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">Upload proof</label>
                <label className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-indigo-200 bg-indigo-50/60 px-5 py-6 text-center cursor-pointer hover:bg-indigo-50 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-white border border-indigo-100 flex items-center justify-center text-indigo-500 shadow-sm">
                    <Upload className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">Upload image or PDF proof</p>
                    <p className="text-xs text-gray-500 mt-1">Accepted: JPG, JPEG, PNG, WEBP, PDF</p>
                  </div>
                  <input
                    type="file"
                    accept="image/jpeg,image/jpg,image/png,image/webp,application/pdf"
                    className="hidden"
                    onChange={(event) => {
                      const selectedFile = event.target.files?.[0] || null;
                      setProofFile(selectedFile);
                    }}
                  />
                </label>
                {proofFile && (
                  <p className="mt-2 text-xs font-medium text-gray-600">Selected file: {proofFile.name}</p>
                )}
              </div>

              {proofError && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700">
                  {proofError}
                </div>
              )}
            </div>

            <div className="px-6 py-4 border-t border-gray-100 bg-gray-50 flex items-center justify-end gap-3">
              <button
                onClick={closeProofModal}
                disabled={savingId === proofModal.reportId}
                className="px-4 py-2 text-sm font-semibold text-gray-600 border border-gray-200 rounded-xl bg-white hover:bg-gray-50 disabled:opacity-60"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  if (!responseText.trim()) {
                    setProofError('Please enter a response before updating the status.');
                    return;
                  }
                  if (!proofFile) {
                    setProofError('Please upload an image or PDF proof file before updating the status.');
                    return;
                  }
                  setProofError(null);
                  void updateStatus(proofModal.reportId, proofModal.nextStatus, {
                    responseText: responseText.trim(),
                    proofFile,
                  });
                }}
                disabled={savingId === proofModal.reportId}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl disabled:opacity-60"
              >
                {savingId === proofModal.reportId ? <Loader2 className="w-4 h-4 animate-spin" /> : <ShieldCheck className="w-4 h-4" />}
                Submit Proof & Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ProfilePage({ profile }: { profile: BusinessProfile | null }) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Business Profile</h1>
        <p className="text-gray-500 mt-1 text-sm">Your registered business information.</p>
      </div>

      <ShareProfileButton businessId={profile?.business_user_id} />

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        {/* Avatar */}
        <div className="flex items-center gap-4 pb-5 mb-5 border-b border-gray-100">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white text-xl font-extrabold flex-shrink-0">
            {(profile?.email ?? 'B').slice(0, 2).toUpperCase()}
          </div>
          <div>
            <p className="text-base font-bold text-gray-900">{profile?.business_name || profile?.email || 'Business'}</p>
            {profile?.business_user_id && <p className="text-xs text-gray-400 font-mono mt-0.5">ID: {profile.business_user_id}</p>}
          </div>
        </div>

        {/* Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            { label: 'Email Address', value: profile?.email, icon: Mail, iconColor: 'text-blue-500', bg: 'bg-blue-50' },
            { label: 'Business Name', value: profile?.business_name, icon: Building2, iconColor: 'text-violet-500', bg: 'bg-violet-50' },
            { label: 'Website', value: profile?.website, icon: Globe, iconColor: 'text-green-500', bg: 'bg-green-50' },
            { label: 'Phone', value: profile?.phone, icon: Phone, iconColor: 'text-orange-500', bg: 'bg-orange-50' },
            { label: 'Business ID', value: profile?.business_user_id, icon: BadgeCheck, iconColor: 'text-indigo-500', bg: 'bg-indigo-50', mono: true },
            { label: 'Member Since', value: fmt(profile?.created_at), icon: Calendar, iconColor: 'text-rose-500', bg: 'bg-rose-50' },
          ]
            .filter((f) => f.value)
            .map((field) => {
              const Icon = field.icon;
              return (
                <div key={field.label} className="flex items-start gap-3">
                  <div className={`w-9 h-9 rounded-lg ${field.bg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                    <Icon className={`w-4 h-4 ${field.iconColor}`} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-400">{field.label}</p>
                    <p className={`text-sm font-semibold text-gray-800 truncate ${(field as { mono?: boolean }).mono ? 'font-mono' : ''}`}>{field.value}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-start gap-3">
        <AlertCircle className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-gray-500">To update your business profile details, please contact support.</p>
      </div>
    </div>
  );
}

// ─── Dashboard Skeleton ───────────────────────────────────────────────────────

function DashboardSkeleton() {
  return (
    <div className="space-y-6">
      {/* Title */}
      <div className="space-y-2">
        <div className="h-7 w-64 bg-gray-200 rounded animate-pulse" />
        <div className="h-4 w-96 max-w-full bg-gray-100 rounded animate-pulse" />
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-100 rounded-lg animate-pulse flex-shrink-0" />
              <div className="ml-3 flex-1 min-w-0 space-y-1.5">
                <div className="h-3 w-20 bg-gray-200 rounded animate-pulse" />
                <div className="h-5 w-16 bg-gray-200 rounded animate-pulse" />
                <div className="h-2.5 w-24 bg-gray-100 rounded animate-pulse" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Verification status header */}
      <div>
        <div className="h-5 w-40 bg-gray-200 rounded animate-pulse mb-3" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 bg-gray-100 rounded-lg animate-pulse" />
                <div className="h-5 w-16 bg-gray-100 rounded-full animate-pulse" />
              </div>
              <div className="h-3.5 w-32 bg-gray-200 rounded animate-pulse" />
              <div className="h-3 w-40 bg-gray-100 rounded animate-pulse mt-2" />
              <div className="h-3 w-24 bg-gray-100 rounded animate-pulse mt-1.5" />
            </div>
          ))}
        </div>
      </div>

      {/* Trust score panel */}
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-5 h-5 bg-indigo-100 rounded animate-pulse" />
          <div className="h-4 w-44 bg-gray-200 rounded animate-pulse" />
          <div className="ml-auto h-3 w-32 bg-gray-100 rounded animate-pulse" />
        </div>
        <div className="space-y-3">
          <div className="h-32 bg-gray-100 rounded-lg animate-pulse" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="h-20 bg-gray-100 rounded-lg animate-pulse" />
            <div className="h-20 bg-gray-100 rounded-lg animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Paywall Lock ─────────────────────────────────────────────────────────────

function DashboardPaywall({ pageLabel, onSubscribe }: { pageLabel: string; onSubscribe: () => void }) {
  const benefits = [
    'Full business verification suite',
    'PAN, MCA & Bank account checks',
    'Verified badge on public profile',
    'Priority search ranking',
    'Trust analytics & monthly reports',
    'Downloadable verification certificate',
  ];

  return (
    <div className="relative">
      {/* Blurred preview backdrop */}
      <div aria-hidden className="pointer-events-none select-none absolute inset-0 -z-10 opacity-40 blur-md">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="h-28 bg-white border border-gray-200 rounded-xl" />
          ))}
        </div>
        <div className="h-64 bg-white border border-gray-200 rounded-xl" />
      </div>

      <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 p-8 text-white text-center">
          <div className="w-16 h-16 mx-auto bg-white/15 border border-white/25 rounded-2xl flex items-center justify-center mb-4">
            <Lock className="w-8 h-8 text-white" />
          </div>
          <p className="text-[11px] font-bold uppercase tracking-widest text-indigo-200 mb-2">{pageLabel} Locked</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight">Subscribe to unlock your dashboard</h2>
          <p className="text-sm text-indigo-100 mt-2 max-w-md mx-auto">
            The business dashboard is available to verified subscribers only. Activate a plan to access verifications, reports, documents, and your trust score.
          </p>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {benefits.map((b) => (
              <div key={b} className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span className="text-sm text-gray-700">{b}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            <button
              onClick={onSubscribe}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-xl transition-colors"
            >
              <Crown className="w-4 h-4" /> View plans &amp; subscribe
            </button>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-gray-200 text-gray-700 hover:bg-gray-50 text-sm font-semibold rounded-xl transition-colors"
            >
              Back to main site
            </Link>
          </div>

          <p className="text-[11px] text-gray-400 text-center flex items-center justify-center gap-1.5">
            <Lock className="w-3 h-3" /> 256-bit SSL secured · Powered by Razorpay · Cancel anytime
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────

export default function BusinessDashboardPage() {
  const router = useRouter();
  const [profile, setProfile] = useState<BusinessProfile | null>(null);
  const [verifyStatus, setVerifyStatus] = useState<VerifyStatus | null>(null);
  const [subscription, setSubscription] = useState<SubscriptionStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [currentPage, setCurrentPage] = useState<PageId>('dashboard');
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const fetchAll = async (showRefreshing = false) => {
    if (showRefreshing) setRefreshing(true);
    try {
      const [profileRes, statusRes, subRes] = await Promise.all([
        fetch('/api/business-auth/profile'),
        fetch('/api/business/verify-status'),
        fetch('/api/razorpay/subscription-status'),
      ]);

      const profileData = await profileRes.json();
      if (profileData.business) setProfile(profileData.business);
      else if (profileRes.status === 401) { router.replace('/business-login'); return; }

      if (statusRes.ok) setVerifyStatus(await statusRes.json());
      if (subRes.ok) setSubscription(await subRes.json());
    } catch (err) {
      console.error('Dashboard fetch error:', err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => { fetchAll(); }, []);

  const handleLogout = async () => {
    await fetch('/api/business-auth/logout', { method: 'POST' }).catch(() => {});
    router.replace('/');
  };

  const verifications = verifyStatus?.verifications;
  const verifiedCount = verifications ? [verifications.gst, verifications.pan, verifications.aadhaar, verifications.mca, verifications.bankAccount].filter(Boolean).length : 0;
  const isFreeUser = !(subscription?.hasActiveSubscription ?? false);

  return (
    <div className="min-h-screen bg-gray-50">
      <BusinessNavbar
        profile={profile}
        onLogout={handleLogout}
        currentPage={currentPage}
        onOpenMobileSidebar={() => setMobileSidebarOpen(true)}
      />
      <BusinessSidebar
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        verifiedCount={verifiedCount}
        hasSubscription={subscription?.hasActiveSubscription ?? false}
        isFreeUser={isFreeUser}
        isMobileOpen={mobileSidebarOpen}
        onClose={() => setMobileSidebarOpen(false)}
      />

      {/* Main Content matches admin: md:pl-60 pt-14 */}
      <div className="md:pl-60 pt-14">
        <div className="px-4 sm:px-6 lg:px-8 py-6 max-w-7xl mx-auto">
          {/* Refresh bar  hidden on Reports (it has its own refresh) */}
          {currentPage !== 'reports' && (
            <div className="flex justify-end mb-4">
              <button
                onClick={() => fetchAll(true)}
                disabled={refreshing || loading}
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${refreshing || loading ? 'animate-spin' : ''}`} />
                Refresh
              </button>
            </div>
          )}

          {loading ? (
            <DashboardSkeleton />
          ) : isFreeUser && currentPage !== 'subscription' ? (
            <DashboardPaywall
              pageLabel={({ dashboard: 'Dashboard', verifications: 'Verifications', documents: 'Documents', reports: 'Reports', profile: 'Profile', subscription: 'Subscription' } as Record<PageId, string>)[currentPage]}
              onSubscribe={() => setCurrentPage('subscription')}
            />
          ) : (
            <>
              {currentPage === 'dashboard' && (
                <DashboardOverview profile={profile} verifyStatus={verifyStatus} subscription={subscription} onNavigate={setCurrentPage} isFreeUser={isFreeUser} />
              )}
              {currentPage === 'verifications' && <VerificationsPage verifyStatus={verifyStatus} isFreeUser={isFreeUser} />}
              {currentPage === 'documents' && <DocumentsPage verifyStatus={verifyStatus} onNavigate={setCurrentPage} isFreeUser={isFreeUser} />}
              {currentPage === 'reports' && <ReportsPage />}
              {currentPage === 'subscription' && <SubscriptionPage subscription={subscription} profile={profile} onSubscriptionChanged={() => fetchAll(true)} />}
              {currentPage === 'profile' && <ProfilePage profile={profile} />}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
