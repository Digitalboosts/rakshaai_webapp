'use client'

import Link from 'next/link'
import { Shield, Phone, Share2, ChevronRight, ExternalLink, AlertTriangle, XCircle, Heart } from 'lucide-react'

interface Props {
    title: string
    description: string
}

export default function SidebarRomanceScam({ title, description }: Props) {
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

            {/* ── Sent Money to a Romance Scammer? ──────────────── */}
            <div className="rounded-2xl border-2 border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/40 overflow-hidden">
                <div className="bg-red-500 px-4 py-3 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-white flex-shrink-0" />
                    <p className="text-white text-xs font-bold uppercase tracking-wider">Sent Money to a Romance Scammer?</p>
                </div>
                <div className="p-4 space-y-2.5">
                    {[
                        'Stop all transfers immediately',
                        'Screenshot all chats and transaction records',
                        'Call 1930 within the first 30 minutes',
                        'Contact your bank to flag the transaction',
                        'File at cybercrime.gov.in with screenshots',
                        'Block the profile on every platform',
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

            {/* ── 7 Red Flags ──────────────────────────────────── */}
            <div className="rounded-2xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-4">
                    7 Romance Scam Red Flags
                </p>
                <div className="space-y-2.5">
                    {[
                        'Photos look too professional or perfect',
                        'Declares love within days of first contact',
                        'Always cancels video calls with excuses',
                        'Claims to be NRI, military, or doctor abroad',
                        'First money request comes with a crisis',
                        'Writing patterns feel scripted or inconsistent',
                        'Story details change over time',
                    ].map((flag, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                            <XCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                            <span className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{flag}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Free Profile Checker ──────────────────────────── */}
            <div className="rounded-2xl border border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/60 dark:to-purple-950/60 p-5">
                <div className="flex items-center gap-2 mb-3">
                    <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                        <Shield className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">Check Any Profile Free</p>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    Paste a phone number or profile link into RakshaAI for an instant scam check. No sign-up. Results in under 5 seconds.
                </p>
                <Link
                    href="/phone-number-checker"
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl transition-colors"
                >
                    Check a Profile Now
                    <ChevronRight className="h-4 w-4" />
                </Link>
            </div>

            {/* ── Romance Scam Stats ───────────────────────────── */}
            <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
                    Romance Scam in India
                </p>
                <div className="space-y-4">
                    {[
                        { value: '6-8 Weeks', label: 'Average grooming period before a money request appears' },
                        { value: '1930',       label: 'National Cybercrime Helpline. Call immediately if scammed' },
                        { value: '30 Min',     label: 'Critical window to call 1930 for best recovery chance' },
                    ].map((stat, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <div className="text-base font-extrabold text-rose-600 dark:text-rose-400 leading-none mt-0.5 min-w-[68px]">
                                {stat.value}
                            </div>
                            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{stat.label}</p>
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
                    Someone you know might be in a romance scam right now and not realise it. Share before it is too late.
                </p>
                <div className="grid grid-cols-2 gap-2">
                    <a
                        href={`https://wa.me/?text=${encodeURIComponent('Important: ' + title + '  Read this before you send money to anyone you met online')}`}
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

            {/* ── Verify Before You Trust ──────────────────────── */}
            <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4 flex items-center gap-2">
                    <Heart className="h-3.5 w-3.5 text-rose-400" />
                    Verify Before You Trust
                </p>
                <div className="space-y-2.5 text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    <p>Never send money to someone you have only met online, no matter how long you have been talking.</p>
                    <p>Always video call live before any financial involvement. Romance scammers almost always refuse or cancel.</p>
                    <p>Run a reverse image search at <strong className="text-gray-800 dark:text-gray-200">images.google.com</strong> on any profile photo before trusting the person.</p>
                </div>
            </div>

            {/* ── Official Resources ───────────────────────────── */}
            <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3">
                    Official Resources
                </p>
                <div className="space-y-2.5">
                    {[
                        { label: 'cybercrime.gov.in  File Complaint',             href: 'https://cybercrime.gov.in' },
                        { label: 'images.google.com  Reverse Image Search',       href: 'https://images.google.com' },
                        { label: 'CERT-In  Report Cyber Incident',                href: 'https://www.cert-in.org.in' },
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
