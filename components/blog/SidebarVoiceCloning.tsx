'use client'

import Link from 'next/link'
import { Shield, Phone, Share2, ChevronRight, ExternalLink, AlertTriangle, Key, Video } from 'lucide-react'

interface Props {
    title: string
    description: string
}

export default function SidebarVoiceCloning({ title, description }: Props) {
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

            {/* ── Emergency: Received a suspicious call? ────────── */}
            <div className="rounded-2xl border-2 border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/40 overflow-hidden">
                <div className="bg-red-600 px-4 py-3 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-white flex-shrink-0" />
                    <p className="text-white text-xs font-bold uppercase tracking-wider">Got a suspicious call? Do this</p>
                </div>
                <div className="p-4 space-y-2.5">
                    {[
                        'Hang up immediately -- do not transfer money',
                        'Call the family member back on their saved number',
                        'Ask for the family code word',
                        'If money was sent, call 1930 right away',
                        'Report the number on RakshaAI',
                    ].map((step, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-600 text-white text-[10px] font-bold flex items-center justify-center mt-0.5">
                                {i + 1}
                            </span>
                            <span className="text-xs font-medium text-gray-800 dark:text-gray-200 leading-snug">{step}</span>
                        </div>
                    ))}
                    <a
                        href="tel:1930"
                        className="mt-3 flex items-center justify-center gap-2 w-full py-2.5 bg-red-600 hover:bg-red-700 text-white text-sm font-bold rounded-xl transition-colors"
                    >
                        <Phone className="h-4 w-4" />
                        Call 1930 -- Cybercrime Helpline
                    </a>
                </div>
            </div>

            {/* ── Family Code Word Setup ────────────────────────── */}
            <div className="rounded-2xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/40 p-5">
                <div className="flex items-center gap-2 mb-3">
                    <div className="p-2 bg-amber-100 dark:bg-amber-900 rounded-lg">
                        <Key className="h-4 w-4 text-amber-700 dark:text-amber-400" />
                    </div>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">Set Up Your Code Word</p>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                    Agree on a secret word with every family member today. Any emergency call must say the code word -- no word means hang up and call back.
                </p>
                <div className="space-y-2">
                    {[
                        'Choose a word only your family knows',
                        'Share with every family member in person',
                        'Any emergency call must say the word',
                        'No code word? Hang up and call back',
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                            <span className="flex-shrink-0 w-4 h-4 rounded-full bg-amber-500 text-white text-[9px] font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
                            <span className="text-xs text-gray-700 dark:text-gray-300 leading-snug">{item}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── 5 Detection Checks ───────────────────────────── */}
            <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
                    5 Checks to Spot a Cloned Voice
                </p>
                <div className="space-y-2.5">
                    {[
                        'Ask a question only they would know',
                        'Request the family code word',
                        'Listen for unnatural pauses or flat tone',
                        'Insist on live two-way video',
                        '"Don\'t tell anyone" is always a scam signal',
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-teal-500 text-white text-[10px] font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
                            <span className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{item}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Video Call Rule ───────────────────────────────── */}
            <div className="rounded-2xl border border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-950/40 p-4">
                <div className="flex items-center gap-2 mb-2">
                    <Video className="h-4 w-4 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                    <p className="text-sm font-bold text-teal-800 dark:text-teal-300">The Call-Back Rule</p>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    Before any money transfer in an emergency, hang up and call back on the person's saved number. This single rule defeats voice cloning fraud every single time.
                </p>
            </div>

            {/* ── Report the Number ─────────────────────────────── */}
            <div className="rounded-2xl border border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/60 dark:to-purple-950/60 p-5">
                <div className="flex items-center gap-2 mb-3">
                    <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                        <Shield className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">Check or Report a Number</p>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    Check any unknown number before calling back. Report scammers to warn other Indian families instantly.
                </p>
                <Link
                    href="/phone-number-checker"
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl transition-colors"
                >
                    Check on RakshaAI
                    <ChevronRight className="h-4 w-4" />
                </Link>
            </div>

            {/* ── Share ────────────────────────────────────────── */}
            <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5">
                <p className="text-sm font-bold text-gray-900 dark:text-white mb-1.5 flex items-center gap-2">
                    <Share2 className="h-4 w-4 text-gray-500" />
                    Share with your parents
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                    Your parents are the primary target of this scam. They need to read this before scammers call.
                </p>
                <div className="grid grid-cols-2 gap-2">
                    <a
                        href={`https://wa.me/?text=${encodeURIComponent('Important: AI scammers are cloning family voices to steal money. Read this before they call you -- ' + title)}`}
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

            {/* ── AI Scam Stats ─────────────────────────────────── */}
            <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
                    AI Voice Scam Facts
                </p>
                <div className="space-y-4">
                    {[
                        { value: '3 sec',    label: 'Audio needed to clone a voice in 2026' },
                        { value: '1 in 4',   label: 'Indians have received a fake emergency call' },
                        { value: '100%',     label: 'Call-back rule defeat rate for voice cloning' },
                    ].map((stat, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <div className="text-base font-extrabold text-indigo-600 dark:text-indigo-400 leading-none mt-0.5 min-w-[52px]">
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
                        { label: 'cybercrime.gov.in -- File Complaint',  href: 'https://cybercrime.gov.in' },
                        { label: 'IT Act Section 66D -- Impersonation',  href: 'https://cybercrime.gov.in' },
                        { label: 'TRAI -- Report Spam Calls',            href: 'https://www.trai.gov.in' },
                    ].map((link) => (
                        <a
                            key={link.href + link.label}
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
