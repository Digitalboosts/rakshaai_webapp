'use client'

import Link from 'next/link'
import { Shield, Phone, Share2, ChevronRight, ExternalLink, AlertTriangle, XCircle, CheckCircle } from 'lucide-react'

interface Props {
    title: string
    description: string
}

export default function SidebarGamingAppScam({ title, description }: Props) {
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

            {/* Already paid? Act now */}
            <div className="rounded-2xl border-2 border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/40 overflow-hidden">
                <div className="bg-red-500 px-4 py-3 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-white flex-shrink-0" />
                    <p className="text-white text-xs font-bold uppercase tracking-wider">Already Paid a Gaming App?</p>
                </div>
                <div className="p-4 space-y-2.5">
                    {[
                        'Stop all further deposits immediately',
                        'Screenshot all payment receipts now',
                        'Note down the app name and UPI IDs used',
                        'Call 1930 to report the fraud right away',
                        'File at cybercrime.gov.in within 24 hours',
                        'Report the app link at rakshaai.co',
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

            {/* 7 red flags */}
            <div className="rounded-2xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-4">
                    7 Red Flags of a Fake Gaming App
                </p>
                <div className="space-y-2.5">
                    {[
                        'Promises guaranteed cash withdrawals daily',
                        'Requires a deposit to unlock earnings',
                        'Withdrawal blocked until you "complete tasks"',
                        'App not available on official Play Store',
                        'Customer care only reachable on WhatsApp',
                        'Refers you for a commission on deposits',
                        'Winners shown are always fresh accounts',
                    ].map((flag, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                            <XCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                            <span className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{flag}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Check the app link */}
            <div className="rounded-2xl border border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/60 dark:to-purple-950/60 p-5">
                <div className="flex items-center gap-2 mb-3">
                    <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                        <Shield className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">Check the App Link First</p>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    Got a link to a gaming or earning app? Check the website on RakshaAI before downloading or paying anything. Free, no sign-up required.
                </p>
                <Link
                    href="/website-safety-checker"
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl transition-colors"
                >
                    Check the App Website
                    <ChevronRight className="h-4 w-4" />
                </Link>
                <Link
                    href="/phone-number-checker"
                    className="flex items-center justify-center gap-2 w-full py-2.5 mt-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 text-sm font-semibold rounded-xl transition-colors"
                >
                    Check a Recruiter Number
                    <ChevronRight className="h-4 w-4" />
                </Link>
            </div>

            {/* Share */}
            <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5">
                <p className="text-sm font-bold text-gray-900 dark:text-white mb-1.5 flex items-center gap-2">
                    <Share2 className="h-4 w-4 text-gray-500" />
                    Share this article
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                    Fake gaming apps target young Indians who need extra income. Share this with someone before they download and pay.
                </p>
                <div className="grid grid-cols-2 gap-2">
                    <a
                        href={`https://wa.me/?text=${encodeURIComponent('Important: ' + title + ' — Read this before installing any earning app')}`}
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

            {/* Safe gaming checklist */}
            <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
                    Safe Gaming App Checklist
                </p>
                <div className="space-y-2.5">
                    {[
                        { ok: true,  text: 'Download apps only from the official Google Play Store' },
                        { ok: true,  text: 'Read reviews for mentions of blocked withdrawals' },
                        { ok: true,  text: 'Check the app link at rakshaai.co before installing' },
                        { ok: true,  text: 'Verify the company has a registered Indian business address' },
                        { ok: false, text: 'Never pay any deposit to "unlock" your earnings' },
                        { ok: false, text: 'Never share banking credentials inside a gaming app' },
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

            {/* Stats */}
            <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
                    Gaming Fraud in Numbers
                </p>
                <div className="space-y-4">
                    {[
                        { value: '568M+', label: 'Mobile gamers in India — the world\'s largest gaming market by users' },
                        { value: '7 Signs', label: 'Red flags that identify every fake earn-to-play app before you deposit' },
                        { value: '1930',   label: 'National Cybercrime Helpline — file a complaint within 60 minutes of fraud' },
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

            {/* Official Links */}
            <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3">
                    Official Resources
                </p>
                <div className="space-y-2.5">
                    {[
                        { label: 'cybercrime.gov.in — File a Complaint', href: 'https://cybercrime.gov.in' },
                        { label: 'MeitY — Report an Illegal App',        href: 'https://www.meity.gov.in' },
                        { label: 'CERT-In — Report Cyber Incident',      href: 'https://www.cert-in.org.in' },
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
