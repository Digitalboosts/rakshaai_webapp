"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, History, LogIn, LogOut, Menu, UserRound, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ReviewSubmissionModal = dynamic(() => import("./ReviewSubmissionModal"), {
  ssr: false,
  loading: () => null,
});

interface NavbarProps {
  content?: {
    logo: { name: string; tagline: string };
    navigation: { home: string; about: string; blog: string; faq: string; contact: string };
    actions: { reportScam: string };
  };
}

interface UserProfile {
  full_name?: string;
  name?: string;
  email?: string;
  phone?: string;
}

const navGroups = [
  {
    label: "Platform",
    items: [
      ["Website Intelligence", "/website-safety-checker", "Live"],
      ["Document Intelligence", "/document-checker", "Live"],
      ["Mobile App", "/app", "iOS + Android"],
      ["Message Intelligence", "/technology", "Expanding"],
      ["Trust Intelligence API", "/api", "Early access"],
    ],
  },
  {
    label: "Solutions",
    items: [
      ["Fintech", "/business#fintech", ""],
      ["HR & Recruitment", "/business#hr-recruitment", ""],
      ["E-commerce", "/business#ecommerce", ""],
      ["Enterprises", "/business#enterprises", ""],
    ],
  },
  {
    label: "Resources",
    items: [
      ["Scam Alerts", "/scam-alerts", ""],
      ["Research", "/technology#benchmark", ""],
      ["Blog", "/blog", ""],
      ["Guides", "/safety-guide", ""],
    ],
  },
  {
    label: "Developers",
    items: [
      ["API Overview", "/api", "Early access"],
      ["Request API Access", "/contact?subject=API%20Access%20Request", "Open"],
      ["API Status", "/trust", "Planned"],
    ],
  },
  {
    label: "Company",
    items: [
      ["About", "/about", ""],
      ["Security", "/trust", ""],
      ["Trust Center", "/trust", ""],
    ],
  },
] as const;

export default function Navbar({ content }: NavbarProps) {
  const t = content || {
    logo: { name: "RakshaAI", tagline: "SAFER INDIA" },
    navigation: { home: "Home", about: "About", blog: "Blog", faq: "FAQ", contact: "Contact" },
    actions: { reportScam: "Report a Scam" },
  };
  const [mobileOpen, setMobileOpen] = useState(false);
  const [reportOpen, setReportOpen] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [profileLoading, setProfileLoading] = useState(true);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let active = true;
    fetch("/api/user-auth/profile", { cache: "no-store" })
      .then(async (response) => (response.ok ? response.json() : null))
      .then((data) => { if (active) setUserProfile(data?.profile ?? null); })
      .catch(() => { if (active) setUserProfile(null); })
      .finally(() => { if (active) setProfileLoading(false); });
    return () => { active = false; };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [mobileOpen]);

  useEffect(() => {
    const close = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) setUserMenuOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const logout = async () => {
    await fetch("/api/user-auth/logout", { method: "POST" }).catch(() => undefined);
    setUserProfile(null);
    setUserMenuOpen(false);
    setMobileOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/90">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label="RakshaAI home">
            <Image src="/rakshaai-logo.svg" alt="" width={38} height={38} />
            <span className="leading-tight">
              <span className="block text-lg font-bold text-gradient">{t.logo.name}</span>
              <span className="block text-[10px] font-bold tracking-wider text-orange-600">{t.logo.tagline}</span>
            </span>
          </Link>

          <nav className="hidden min-w-0 flex-1 items-center justify-center xl:flex" aria-label="Main navigation">
            {navGroups.map((group) => (
              <div key={group.label} className="group relative">
                <button className="flex items-center gap-1 rounded-lg px-2 py-2 text-[13px] font-semibold text-slate-700 hover:bg-slate-50 hover:text-indigo-700 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-indigo-300 2xl:px-2.5 2xl:text-sm">
                  {group.label}<ChevronDown className="h-3.5 w-3.5 transition group-hover:rotate-180" />
                </button>
                <div className="invisible absolute left-1/2 top-full w-64 -translate-x-1/2 translate-y-1 rounded-2xl border border-slate-200 bg-white p-2 opacity-0 shadow-2xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 dark:border-slate-700 dark:bg-slate-900">
                  {group.items.map(([label, href, badge]) => (
                    <Link key={label} href={href} className="flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-700 dark:text-slate-200 dark:hover:bg-indigo-950/40 dark:hover:text-indigo-300">
                      {label}{badge && <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] text-slate-500 dark:bg-slate-800 dark:text-slate-400">{badge}</span>}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-2">
            <Link href="/website-safety-checker" className="hidden rounded-xl bg-indigo-600 px-3.5 py-2.5 text-[13px] font-bold text-white transition hover:bg-indigo-700 sm:inline-flex 2xl:px-4 2xl:text-sm">Check a Website</Link>
            <Link href="/business" className="hidden rounded-xl border border-slate-300 px-3.5 py-2.5 text-[13px] font-bold text-slate-800 transition hover:border-indigo-400 hover:text-indigo-700 dark:border-slate-700 dark:text-white lg:inline-flex 2xl:px-4 2xl:text-sm">Talk to Sales</Link>
            {!profileLoading && (userProfile ? (
              <div ref={userMenuRef} className="relative hidden sm:block">
                <button onClick={() => setUserMenuOpen((open) => !open)} aria-label="Open account menu" className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200"><UserRound className="h-5 w-5" /></button>
                {userMenuOpen && <div className="absolute right-0 top-full mt-2 w-56 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl dark:border-slate-700 dark:bg-slate-900"><p className="truncate border-b border-slate-100 px-3 py-2 text-sm font-bold dark:border-slate-800">{userProfile.full_name || userProfile.name || userProfile.email || "RakshaAI User"}</p><Link href="/history" onClick={() => setUserMenuOpen(false)} className="mt-1 flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-800"><History className="h-4 w-4" />My history</Link><button onClick={logout} className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30"><LogOut className="h-4 w-4" />Logout</button></div>}
              </div>
            ) : <Link href="/login" aria-label="Log in" className="hidden h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 sm:flex dark:bg-slate-800 dark:text-slate-200"><LogIn className="h-5 w-5" /></Link>)}
            <button onClick={() => setMobileOpen(true)} aria-label="Open navigation" className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 xl:hidden dark:bg-slate-800 dark:text-slate-200"><Menu className="h-5 w-5" /></button>
          </div>
        </div>
      </header>

      {mobileOpen && <div className="fixed inset-0 z-50 bg-black/50 xl:hidden" onClick={() => setMobileOpen(false)}><aside role="dialog" aria-modal="true" aria-label="Navigation menu" className="ml-auto flex h-full w-[340px] max-w-[90vw] flex-col overflow-y-auto bg-white p-5 dark:bg-slate-950" onClick={(event) => event.stopPropagation()}><div className="mb-5 flex items-center justify-between"><span className="text-lg font-bold">RakshaAI</span><button onClick={() => setMobileOpen(false)} aria-label="Close navigation" className="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-800"><X className="h-5 w-5" /></button></div>{navGroups.map((group) => <div key={group.label} className="mb-5"><p className="mb-1 px-2 text-xs font-bold uppercase tracking-wider text-slate-400">{group.label}</p>{group.items.map(([label, href, badge]) => <Link key={label} href={href} onClick={() => setMobileOpen(false)} className="flex items-center justify-between rounded-xl px-2 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-900"><span>{label}</span>{badge && <span className="text-[10px] text-slate-400">{badge}</span>}</Link>)}</div>)}<div className="mt-auto grid gap-2 border-t border-slate-200 pt-5 dark:border-slate-800"><Link href="/website-safety-checker" onClick={() => setMobileOpen(false)} className="rounded-xl bg-indigo-600 px-4 py-3 text-center text-sm font-bold text-white">Check a Website</Link><Link href="/business" onClick={() => setMobileOpen(false)} className="rounded-xl border border-slate-300 px-4 py-3 text-center text-sm font-bold dark:border-slate-700">Talk to Sales</Link><button onClick={() => { setMobileOpen(false); setReportOpen(true); }} className="rounded-xl px-4 py-2 text-sm font-semibold text-red-600">{t.actions.reportScam}</button>{userProfile ? <button onClick={logout} className="flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-slate-600"><LogOut className="h-4 w-4" />Logout</button> : <Link href="/login" onClick={() => setMobileOpen(false)} className="flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-slate-600"><LogIn className="h-4 w-4" />Login</Link>}</div></aside></div>}

      <ReviewSubmissionModal isOpen={reportOpen} onClose={() => setReportOpen(false)} />
    </>
  );
}
