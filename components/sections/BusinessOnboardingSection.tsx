import Link from "next/link";
import SectionContainerServer from "@/components/ui/SectionContainerServer";
import { SITE_STATS } from "@/lib/config/siteStats";
import {
  Building2,
  BadgeCheck,
  ShieldCheck,
  CreditCard,
  Fingerprint,
  FileText,
  ArrowRight,
  Star,
  TrendingUp,
  Globe,
  Award,
  Crown,
  CheckCircle,
  Zap,
  Users,
  Lock,
  ExternalLink,
} from "lucide-react";

const steps = [
  { num: 1, label: "Business Info", icon: Building2, color: "from-blue-500 to-cyan-500" },
  { num: 2, label: "Subscribe", icon: Crown, color: "from-purple-500 to-violet-500" },
  { num: 3, label: "GST Verify", icon: CreditCard, color: "from-emerald-500 to-green-500" },
  { num: 4, label: "Aadhaar KYC", icon: Fingerprint, color: "from-orange-500 to-amber-500" },
  { num: 5, label: "Documents", icon: FileText, color: "from-pink-500 to-rose-500" },
  { num: 6, label: "Verified ✓", icon: Award, color: "from-yellow-500 to-orange-500" },
];

const benefits = [
  {
    icon: BadgeCheck,
    title: "Raksha Trust Badge",
    description:
      "Display India's most recognised verification badge on your website. Customers see it before they transact  instant, visible credibility.",
    gradient: "from-purple-500 to-blue-500",
    bg: "bg-purple-50 dark:bg-purple-900/20",
  },
  {
    icon: ShieldCheck,
    title: "GST & Aadhaar Verified",
    description:
      "We verify your GST registration and owner identity via Aadhaar OTP so customers know they're dealing with a real, registered Indian business.",
    gradient: "from-emerald-500 to-teal-500",
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
  },
  {
    icon: TrendingUp,
    title: "Higher Conversion Rates",
    description:
      "Verified businesses see up to 3× more trust from first-time visitors, reducing cart abandonment and increasing completed payments.",
    gradient: "from-blue-500 to-indigo-500",
    bg: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    icon: Globe,
    title: "Public Trust Profile",
    description:
      "Your verified business profile is searchable on RakshaAI. When users check your URL, they instantly see you are government-verified.",
    gradient: "from-orange-500 to-amber-500",
    bg: "bg-orange-50 dark:bg-orange-900/20",
  },
  {
    icon: Lock,
    title: "Fraud-Proof Identity",
    description:
      "Multi-layer verification  GST, Aadhaar, PAN, MCA, and bank account  makes it impossible for scammers to impersonate your business.",
    gradient: "from-red-500 to-rose-500",
    bg: "bg-red-50 dark:bg-red-900/20",
  },
  {
    icon: Users,
    title: "Customer Confidence",
    description:
      `${SITE_STATS.usersProtected} Indians check URLs on RakshaAI before buying online. Being verified means they get the green light  and you get the sale.`,
    gradient: "from-pink-500 to-purple-500",
    bg: "bg-pink-50 dark:bg-pink-900/20",
  },
];

const highlights = [
  { label: "Verified Businesses", value: SITE_STATS.businessesVerified, icon: BadgeCheck },
  { label: "Trust Score Boost", value: "3×", icon: TrendingUp },
  { label: "Checks Per Month", value: SITE_STATS.checksPerMonth, icon: Globe },
  { label: "Verification Steps", value: "5-Layer", icon: ShieldCheck },
];

export default function BusinessOnboardingSection() {
  return (
    <SectionContainerServer
      id="business-onboarding"
      background="gradient"
      className="py-20 sm:py-28"
    >
      {/* ── Header ───────────────────────────────────────────────────── */}
      <div className="text-center space-y-6 mb-16 sm:mb-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/40 dark:to-blue-900/40 border border-purple-200 dark:border-purple-700/50 shadow-sm">
          <Crown className="h-4 w-4 text-purple-600 dark:text-purple-400" />
          <span className="text-sm font-semibold text-purple-700 dark:text-purple-300 tracking-wide uppercase">
            For Business Owners
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight">
          <span className="text-gray-900 dark:text-white">Earn India&apos;s </span>
          <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 dark:from-purple-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
            Raksha Trust Badge
          </span>
        </h2>

        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Get your business GST-verified and Aadhaar-KYC confirmed. Display a trusted verification
          badge that customers see before they transact  turning sceptics into buyers.
        </p>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-8 pt-4">
          {highlights.map(({ label, value, icon: Icon }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-1.5">
                <Icon className="h-5 w-5 text-purple-500 dark:text-purple-400" />
                <span className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
                  {value}
                </span>
              </div>
              <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* View All link */}
        <div className="pt-2">
          <Link
            href="/business-verification"
            className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-200 transition-colors group"
            aria-label="View all business verification information"
          >
            View all details about Business Verification
            <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>

      {/* ── Benefits Grid ─────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <div
              key={index}
              className={`group relative ${benefit.bg} rounded-2xl p-7 border border-white/60 dark:border-gray-700/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 overflow-hidden`}
            >
              {/* Hover glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}
              />
              <div className="relative z-10 space-y-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center shadow-md`}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── How It Works ─────────────────────────────────────────────── */}
      <div className="mb-16 sm:mb-20">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
            Simple 6-Step Process
          </span>
          <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            Get Verified in Minutes
          </h3>
        </div>

        {/* Desktop: horizontal stepper */}
        <div className="hidden sm:flex items-center justify-between gap-2">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.num} className="flex items-center gap-2 flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg mb-3`}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 text-center leading-tight">
                    {step.label}
                  </span>
                  <span className="text-xs text-gray-400 dark:text-gray-500 font-medium mt-0.5">
                    Step {step.num}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className="flex-shrink-0 w-6">
                    <ArrowRight className="h-5 w-5 text-gray-300 dark:text-gray-600" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile: 2-column grid */}
        <div className="grid grid-cols-2 gap-4 sm:hidden">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="flex items-center gap-3 bg-white dark:bg-gray-800/60 rounded-xl p-4 border border-gray-100 dark:border-gray-700/50 shadow-sm"
              >
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0 shadow`}
                >
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-800 dark:text-gray-200 leading-tight">
                    {step.label}
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">Step {step.num}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Pricing + CTA Card ───────────────────────────────────────── */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 p-1 shadow-2xl shadow-purple-500/25">
        <div className="rounded-[22px] bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 p-8 sm:p-12">
          {/* Decorative blobs */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Left: Copy */}
            <div className="text-white space-y-5 text-center lg:text-left max-w-xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 rounded-full">
                <Zap className="h-4 w-4 text-yellow-300" />
                <span className="text-sm font-semibold text-white">Flat ₹299 / month</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold leading-tight">
                Ready to build trust
                <br />
                <span className="text-yellow-300">from day one?</span>
              </h3>
              <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                Join hundreds of verified Indian businesses. No hidden fees, no long contracts.
                Cancel anytime.
              </p>

              {/* Checklist */}
              <ul className="space-y-2 text-sm sm:text-base">
                {[
                  "5-layer identity & business verification",
                  "Raksha Trust Badge on your website",
                  "Public verified business profile",
                  "Priority support from RakshaAI team",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-white/90">
                    <CheckCircle className="h-4 w-4 text-green-300 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: CTA */}
            <div className="flex flex-col items-center gap-5 flex-shrink-0">
              {/* Pricing pill */}
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl px-8 py-6 text-center border border-white/20">
                <div className="flex items-end justify-center gap-1 mb-1">
                  <span className="text-white/70 text-lg font-semibold">₹</span>
                  <span className="text-5xl font-extrabold text-white">299</span>
                  <span className="text-white/70 text-base self-end mb-1">/mo</span>
                </div>
                <p className="text-white/60 text-xs">GST extra · Cancel anytime</p>
                {/* Stars */}
                <div className="flex items-center justify-center gap-0.5 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-yellow-300 text-yellow-300" />
                  ))}
                  <span className="text-white/70 text-xs ml-1">4.9/5</span>
                </div>
              </div>

              <Link
                href="/business-onboarding"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-purple-700 font-bold text-base rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <BadgeCheck className="h-5 w-5 text-purple-600" />
                  Get Verified Now
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              <p className="text-white/50 text-xs text-center max-w-[200px]">
                Setup takes under 10 minutes. No technical knowledge required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionContainerServer>
  );
}
