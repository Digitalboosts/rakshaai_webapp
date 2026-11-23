'use client'

import Link from 'next/link'
import { Shield, Phone, Share2, ChevronRight, ExternalLink, AlertTriangle, XCircle, CheckCircle, Globe } from 'lucide-react'

interface Props {
    title: string
    description: string
}

export default function SidebarFakeGovWebsite({ title, description }: Props) {
    const handleShare = async () => {
        if (typeof window === 'undefined') return
        if (navigator.share) {
            try { await navigator.share({ title, text: description, url: window.location.href }) }
            catch { /* dismissed */ }
        } else {
            navigator.clipboard.writeText(window.location.href)
        }
    }

    return (
        <aside className="space-y-6">

            {/* ── Already paid? ─────────────────────────────────── */}
            <div className="rounded-2xl border-2 border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/40 overflow-hidden">
                <div className="bg-red-500 px-4 py-3 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-white flex-shrink-0" />
                    <p className="text-white text-xs font-bold uppercase tracking-wider">Paid a Fake Government Site?</p>
                </div>
                <div className="p-4 space-y-2.5">
                    {[
                        'Stop all payments immediately',
                        'Screenshot the site and all transactions',
                        'Call 1930 right now',
                        'Contact your bank for reversal',
                        'File a complaint at cybercrime.gov.in',
                        'Report the URL at rakshaai.co',
                    ].map((step, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center mt-0.5">
                                {i + 1}
                            </span>
                            <span className="text-sm font-medium text-gray-800 dark:text-gray-200 leading-snug">{step}</span>
                        </div>
                    ))}
                    <a
                        href="tel:1930"
                        className="mt-3 flex items-center justify-center gap-2 w-full py-2.5 bg-red-500 hover:bg-red-600 text-white text-sm font-bold rounded-xl transition-colors"
                    >
                        <Phone className="h-4 w-4" />
                        Call 1930 Now
                    </a>
                </div>
            </div>

            {/* ── Real Free Services ───────────────────────────── */}
            <div className="rounded-2xl border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/30 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-green-700 dark:text-green-400 mb-4">
                    Real Government Portals (Always Free)
                </p>
                <div className="space-y-2.5">
                    {[
                        { label: 'Aadhaar Update', url: 'myaadhaar.uidai.gov.in' },
                        { label: 'PAN Card', url: 'incometax.gov.in' },
                        { label: 'Driving Licence', url: 'parivahan.gov.in' },
                        { label: 'PF / EPFO', url: 'epfindia.gov.in' },
                        { label: 'Passport', url: 'passportindia.gov.in' },
                        { label: 'Voter ID', url: 'voters.eci.gov.in' },
                    ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between gap-2">
                            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{item.label}</span>
                            <span className="text-[10px] font-mono text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/40 px-2 py-0.5 rounded">.gov.in</span>
                        </div>
                    ))}
                </div>
                <p className="text-[10px] text-green-700 dark:text-green-500 mt-3 font-semibold border-t border-green-200 dark:border-green-800 pt-3">
                    Real government sites always end in .gov.in or .nic.in
                </p>
            </div>

            {/* ── Check Any Website ────────────────────────────── */}
            <div className="rounded-2xl border border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/60 dark:to-purple-950/60 p-5">
                <div className="flex items-center gap-2 mb-3">
                    <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                        <Globe className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">Verify Any Website Free</p>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    Paste any website URL into RakshaAI before you pay or submit personal documents. Results in under 5 seconds.
                </p>
                <Link
                    href="/website-safety-checker"
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl transition-colors"
                >
                    Check a Website Now
                    <ChevronRight className="h-4 w-4" />
                </Link>
            </div>

            {/* ── 6 Warning Signs ──────────────────────────────── */}
            <div className="rounded-2xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-4">
                    6 Signs a Govt Portal Is Fake
                </p>
                <div className="space-y-2.5">
                    {[
                        'Domain ends in .com, .net, .org, or just .in',
                        'Charges a "processing fee" for a free service',
                        'Asks for UPI payment to a personal number',
                        'Created less than 1 year ago (check whois)',
                        'Appears as a Google Ad, not an organic result',
                        'Has no official emblem from india.gov.in',
                    ].map((flag, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                            <XCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                            <span className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{flag}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Share ────────────────────────────────────────── */}
            <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5">
                <p className="text-sm font-bold text-gray-900 dark:text-white mb-1.5 flex items-center gap-2">
                    <Share2 className="h-4 w-4 text-gray-500" />
                    Share this article
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                    Parents and senior citizens are most targeted. Share before someone you know gets charged for a service that is free.
                </p>
                <div className="grid grid-cols-2 gap-2">
                    <a
                        href={`https://wa.me/?text=${encodeURIComponent('Important: ' + title + '  Read this before using any government website')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 py-2 px-3 bg-green-500 hover:bg-green-600 text-white text-xs font-semibold rounded-lg transition-colors"
                    >
                        WhatsApp
                    </a>
                    <button
                        onClick={handleShare}
                        className="flex items-center justify-center gap-1.5 py-2 px-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs font-semibold rounded-lg transition-colors"
                    >
                        Copy Link
                    </button>
                </div>
            </div>

            {/* ── Quick Domain Check ───────────────────────────── */}
            <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
                    Before Using Any Govt Site
                </p>
                <div className="space-y-2.5">
                    {[
                        { ok: true,  text: 'URL ends in .gov.in or .nic.in' },
                        { ok: true,  text: 'Service is listed at india.gov.in' },
                        { ok: true,  text: 'Payment goes to official MCA/UIDAI/NSDL portals only' },
                        { ok: false, text: 'Never pay via UPI to a personal number for govt services' },
                        { ok: false, text: 'Never trust Google Ads claiming to be govt portals' },
                        { ok: false, text: 'Never share Aadhaar OTP on any third-party site' },
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                            {item.ok
                                ? <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                                : <XCircle className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                            }
                            <span className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Stats ────────────────────────────────────────── */}
            <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
                    Fake Govt Portal Fraud in India
                </p>
                <div className="space-y-4">
                    {[
                        { value: '3,900+',  label: 'Fake government websites taken down since 2021 (CERT-In data)' },
                        { value: '₹500+',   label: 'Typical amount charged for a service that costs nothing' },
                        { value: '1930',    label: 'National Cybercrime Helpline. Call immediately if defrauded.' },
                    ].map((stat, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <div className="text-base font-extrabold text-indigo-600 dark:text-indigo-400 leading-none mt-0.5 min-w-[60px]">
                                {stat.value}
                            </div>
                            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Official Resources ───────────────────────────── */}
            <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3">
                    Official Resources
                </p>
                <div className="space-y-2.5">
                    {[
                        { label: 'cybercrime.gov.in  File a Complaint',     href: 'https://cybercrime.gov.in' },
                        { label: 'india.gov.in  All Official Portals',      href: 'https://india.gov.in' },
                        { label: 'uidai.gov.in  Official Aadhaar Portal',   href: 'https://uidai.gov.in' },
                        { label: 'CERT-In  Report Fake Websites',           href: 'https://www.cert-in.org.in' },
                    ].map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-start gap-2 text-xs text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors leading-snug"
                        >
                            <ExternalLink className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" />
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>

        </aside>
    )
}
