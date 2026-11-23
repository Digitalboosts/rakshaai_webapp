'use client'

import Link from 'next/link'
import { Shield, Phone, Share2, ChevronRight, ExternalLink, AlertTriangle, CheckCircle, Clock } from 'lucide-react'

interface Props {
    title: string
    description: string
}

export default function SidebarScamRecovery({ title, description }: Props) {
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

            {/* ── Emergency Action Box ──────────────────────────── */}
            <div className="rounded-2xl border-2 border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/40 overflow-hidden">
                <div className="bg-red-600 px-4 py-3 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-white flex-shrink-0" />
                    <p className="text-white text-xs font-bold uppercase tracking-wider">Just got scammed? Do this NOW</p>
                </div>
                <div className="p-4 space-y-2.5">
                    {[
                        { time: '0–5 min',   step: 'Call 1930  National Cybercrime Helpline, 24/7' },
                        { time: '5–10 min',  step: 'Call your bank, request a transaction hold' },
                        { time: '10–20 min', step: 'File at cybercrime.gov.in with all details' },
                        { time: '20–25 min', step: 'Report the scammer on RakshaAI' },
                        { time: '25–30 min', step: 'Change all passwords and UPI PIN' },
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-600 text-white text-[10px] font-bold flex items-center justify-center mt-0.5">
                                {i + 1}
                            </span>
                            <div>
                                <p className="text-[10px] font-bold text-red-600 dark:text-red-400 uppercase tracking-wider leading-none mb-0.5">{item.time}</p>
                                <span className="text-xs font-medium text-gray-800 dark:text-gray-200 leading-snug">{item.step}</span>
                            </div>
                        </div>
                    ))}
                    <a
                        href="tel:1930"
                        className="mt-3 flex items-center justify-center gap-2 w-full py-2.5 bg-red-600 hover:bg-red-700 text-white text-sm font-bold rounded-xl transition-colors"
                    >
                        <Phone className="h-4 w-4" />
                        Call 1930 Now  Free 24/7
                    </a>
                </div>
            </div>

            {/* ── Recovery Window Warning ──────────────────────── */}
            <div className="rounded-2xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/40 p-4">
                <div className="flex items-center gap-2 mb-2">
                    <Clock className="h-4 w-4 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                    <p className="text-sm font-bold text-amber-800 dark:text-amber-300">Time is critical</p>
                </div>
                <div className="space-y-1.5">
                    {[
                        { label: '0–30 min', desc: 'Highest chance of money recovery' },
                        { label: '30–60 min', desc: 'Still possible but harder' },
                        { label: 'After 24 hrs', desc: 'Recovery drops dramatically' },
                    ].map((row, i) => (
                        <div key={i} className="flex items-start gap-2">
                            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded mt-0.5 flex-shrink-0 ${i === 0 ? 'bg-green-100 text-green-700 dark:bg-green-900/60 dark:text-green-400' : i === 1 ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/60 dark:text-amber-400' : 'bg-red-100 text-red-700 dark:bg-red-900/60 dark:text-red-400'}`}>
                                {row.label}
                            </span>
                            <span className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{row.desc}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Evidence Checklist ───────────────────────────── */}
            <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
                    Gather Before Filing
                </p>
                <div className="space-y-2">
                    {[
                        'Screenshots of all conversations',
                        "Scammer's phone number / UPI ID",
                        'Bank transaction reference number',
                        'Transaction amount and date/time',
                        'Website URL (if involved)',
                        'Your Aadhaar and address details',
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                            <CheckCircle className="h-4 w-4 text-teal-500 flex-shrink-0 mt-0.5" />
                            <span className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{item}</span>
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
                    <p className="text-sm font-bold text-gray-900 dark:text-white">Report the Scammer</p>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    Check and report any UPI ID, phone number, or website. Warn millions of other Indians instantly.
                </p>
                <Link
                    href="/phone-number-checker"
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl transition-colors"
                >
                    Report on RakshaAI
                    <ChevronRight className="h-4 w-4" />
                </Link>
            </div>

            {/* ── Share ────────────────────────────────────────── */}
            <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5">
                <p className="text-sm font-bold text-gray-900 dark:text-white mb-1.5 flex items-center gap-2">
                    <Share2 className="h-4 w-4 text-gray-500" />
                    Share this guide
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                    Someone you know may need this right now.
                </p>
                <div className="grid grid-cols-2 gap-2">
                    <a
                        href={`https://wa.me/?text=${encodeURIComponent('URGENT: If you or anyone you know got scammed online in India, read this immediately  ' + title)}`}
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

            {/* ── Key Helplines ────────────────────────────────── */}
            <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
                    Key Helplines
                </p>
                <div className="space-y-3">
                    {[
                        { label: 'Cybercrime Helpline',  number: '1930',         note: '24/7, free' },
                        { label: 'UIDAI (Aadhaar)',      number: '1947',         note: 'Lock biometrics' },
                        { label: 'RBI Ombudsman',        number: '14448',        note: 'Banking fraud' },
                        { label: 'National Police',      number: '112',          note: 'Emergency' },
                    ].map((item) => (
                        <div key={item.label} className="flex items-center justify-between">
                            <div>
                                <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">{item.label}</p>
                                <p className="text-[10px] text-gray-400 dark:text-gray-500">{item.note}</p>
                            </div>
                            <a
                                href={`tel:${item.number}`}
                                className="text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
                            >
                                {item.number}
                            </a>
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
                        { label: 'cybercrime.gov.in  File Complaint',      href: 'https://cybercrime.gov.in' },
                        { label: 'myaadhaar.uidai.gov.in  Lock Aadhaar',  href: 'https://myaadhaar.uidai.gov.in' },
                        { label: 'RBI  Report Banking Fraud',              href: 'https://rbi.org.in' },
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
