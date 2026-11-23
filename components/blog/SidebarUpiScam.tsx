'use client'

import Link from 'next/link'
import { Shield, Phone, Share2, ChevronRight, ExternalLink, AlertTriangle, CheckCircle, XCircle } from 'lucide-react'

interface Props {
    title: string
    description: string
}

export default function SidebarUpiScam({ title, description }: Props) {
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

            {/* ── Got scammed? Act NOW ──────────────────────────── */}
            <div className="rounded-2xl border-2 border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/40 overflow-hidden">
                <div className="bg-red-500 px-4 py-3 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-white flex-shrink-0" />
                    <p className="text-white text-xs font-bold uppercase tracking-wider">Got UPI scammed? Act NOW</p>
                </div>
                <div className="p-4 space-y-2.5">
                    {[
                        'Call 1930 within 30 minutes',
                        'Call your bank and freeze account',
                        'Open UPI app → Help → Report fraud',
                        'Note transaction ID, amount, time',
                        'File at cybercrime.gov.in',
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

            {/* ── UPI Safety Rules ─────────────────────────────── */}
            <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
                    UPI Safety Rules
                </p>
                <div className="space-y-2.5">
                    {[
                        { ok: false, text: 'Never share your UPI PIN  not even with your bank' },
                        { ok: false, text: 'Scanning a QR code means YOU pay, not receive' },
                        { ok: false, text: 'Collecting requests from strangers  always reject' },
                        { ok: true,  text: 'Verify the receiver name before confirming payment' },
                        { ok: true,  text: 'Enable UPI transaction limits in your bank app' },
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

            {/* ── Free Scam Checker ────────────────────────────── */}
            <div className="rounded-2xl border border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/60 dark:to-purple-950/60 p-5">
                <div className="flex items-center gap-2 mb-3">
                    <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                        <Shield className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">Check Any UPI ID</p>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    Verify a UPI ID or phone number before sending money. Free, instant, no sign-up.
                </p>
                <Link
                    href="/upi-id-checker"
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl transition-colors"
                >
                    Check a UPI ID
                    <ChevronRight className="h-4 w-4" />
                </Link>
            </div>

            {/* ── Share ────────────────────────────────────────── */}
            <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5">
                <p className="text-sm font-bold text-gray-900 dark:text-white mb-1.5 flex items-center gap-2">
                    <Share2 className="h-4 w-4 text-gray-500" />
                    Share this article
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                    Your parents and family need to read this.
                </p>
                <div className="grid grid-cols-2 gap-2">
                    <a
                        href={`https://wa.me/?text=${encodeURIComponent('Important: ' + title + '  Read this now')}`}
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

            {/* ── UPI App Helplines ────────────────────────────── */}
            <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
                    UPI App Helplines
                </p>
                <div className="space-y-3">
                    {[
                        { app: 'PhonePe',    number: '080-68727374' },
                        { app: 'Google Pay', number: '1800-419-0157' },
                        { app: 'Paytm',      number: '0120-4456-456' },
                        { app: 'BHIM / NPCI',number: '1800-120-1740' },
                    ].map((item) => (
                        <div key={item.app} className="flex items-center justify-between">
                            <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">{item.app}</span>
                            <a
                                href={`tel:${item.number.replace(/-/g, '')}`}
                                className="text-xs text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
                            >
                                {item.number}
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Stats ────────────────────────────────────────── */}
            <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
                    UPI Fraud in Numbers
                </p>
                <div className="space-y-4">
                    {[
                        { value: '₹485 Cr', label: 'Lost to UPI fraud in India in 2024' },
                        { value: '95,000+', label: 'UPI fraud cases filed in 2024' },
                        { value: '30 min',  label: 'Recovery window after fraudulent transfer' },
                    ].map((stat, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <div className="text-base font-extrabold text-indigo-600 dark:text-indigo-400 leading-none mt-0.5 min-w-[68px]">
                                {stat.value}
                            </div>
                            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Official Links ───────────────────────────────── */}
            <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3">
                    Official Resources
                </p>
                <div className="space-y-2.5">
                    {[
                        { label: 'cybercrime.gov.in  File Complaint', href: 'https://cybercrime.gov.in' },
                        { label: 'NPCI  Report UPI Fraud',            href: 'https://www.npci.org.in' },
                        { label: 'RBI Ombudsman',                      href: 'https://rbi.org.in' },
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
