'use client'

import Link from 'next/link'
import { Shield, Phone, Share2, ChevronRight, ExternalLink, AlertTriangle, XCircle, CheckCircle, FileCheck } from 'lucide-react'

interface Props {
    title: string
    description: string
}

export default function SidebarInsuranceScam({ title, description }: Props) {
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

            {/* Already paid a fake agent? */}
            <div className="rounded-2xl border-2 border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/40 overflow-hidden">
                <div className="bg-red-500 px-4 py-3 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-white flex-shrink-0" />
                    <p className="text-white text-xs font-bold uppercase tracking-wider">Paid a Fake Insurance Agent?</p>
                </div>
                <div className="p-4 space-y-2.5">
                    {[
                        'Stop all further premium payments now',
                        'Screenshot the agent chat and all receipts',
                        'Call 1930 (National Cybercrime Helpline)',
                        'File a complaint at IRDAI Bima Bharosa',
                        'File an FIR at your local police station',
                        'Report the number at rakshaai.co',
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

            {/* IRDAI verification helplines */}
            <div className="rounded-2xl border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/30 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-green-700 dark:text-green-400 mb-4">
                    IRDAI Verification Contacts
                </p>
                <div className="space-y-2.5">
                    {[
                        { label: 'IRDAI Bima Bharosa', url: '155255' },
                        { label: 'IRDAI Toll-Free', url: '1800-4254-732' },
                        { label: 'LIC Customer Care', url: '1800-225-5226' },
                        { label: 'Complaint Portal', url: 'igms.irda.gov.in' },
                        { label: 'Agent/Policy Check', url: 'irdai.gov.in' },
                    ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between gap-2">
                            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{item.label}</span>
                            <span className="text-[10px] font-mono text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/40 px-2 py-0.5 rounded">{item.url}</span>
                        </div>
                    ))}
                </div>
                <p className="text-[10px] text-green-700 dark:text-green-500 mt-3 font-semibold border-t border-green-200 dark:border-green-800 pt-3">
                    Every registered agent has an IRDAI license number. No exceptions.
                </p>
            </div>

            {/* Check any number */}
            <div className="rounded-2xl border border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/60 dark:to-purple-950/60 p-5">
                <div className="flex items-center gap-2 mb-3">
                    <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                        <Shield className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">Verify Any Agent Free</p>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    Paste the agent&apos;s phone number into RakshaAI before you pay a single premium. Results in under 5 seconds.
                </p>
                <Link
                    href="/phone-number-checker"
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl transition-colors"
                >
                    Check an Agent Number Now
                    <ChevronRight className="h-4 w-4" />
                </Link>
            </div>

            {/* 7 red flags */}
            <div className="rounded-2xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-4">
                    7 Signs of Insurance Fraud
                </p>
                <div className="space-y-2.5">
                    {[
                        'Agent asks for cash or a personal UPI account',
                        'No policy document within 72 hours',
                        'Agent cannot share an IRDAI license number',
                        '"Guaranteed" 15-20% returns',
                        'Pressure to sign before the day ends',
                        'Discourages calling the insurer directly',
                        'Asks for a fee to release your bonus',
                    ].map((flag, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                            <XCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                            <span className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{flag}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Share */}
            <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5">
                <p className="text-sm font-bold text-gray-900 dark:text-white mb-1.5 flex items-center gap-2">
                    <Share2 className="h-4 w-4 text-gray-500" />
                    Share this article
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                    Parents and retirees are the most targeted. Share this before someone you know pays their next premium in cash.
                </p>
                <div className="grid grid-cols-2 gap-2">
                    <a
                        href={`https://wa.me/?text=${encodeURIComponent('Important: ' + title + '. Read this before paying any insurance premium')}`}
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

            {/* Before you pay checklist */}
            <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
                    Before You Pay Any Premium
                </p>
                <div className="space-y-2.5">
                    {[
                        { ok: true, text: 'Agent shares an IRDAI license number on request' },
                        { ok: true, text: 'Policy document arrives on official email within 72 hours' },
                        { ok: true, text: 'Payment goes to the insurer\'s official account only' },
                        { ok: false, text: 'Never pay premiums in cash to an agent' },
                        { ok: false, text: 'Never pay a "fee" to release a bonus or maturity amount' },
                        { ok: false, text: 'Never skip calling the insurer\'s official customer care' },
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
                    Insurance Fraud in India
                </p>
                <div className="space-y-4">
                    {[
                        { value: '5', label: 'Common insurance scam formats active in India right now' },
                        { value: '72 hrs', label: 'Window for a genuine policy document to reach your email' },
                        { value: '1930', label: 'National Cybercrime Helpline. Call immediately if defrauded.' },
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

            {/* Official resources */}
            <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3 flex items-center gap-2">
                    <FileCheck className="h-3.5 w-3.5" />
                    Official Resources
                </p>
                <div className="space-y-2.5">
                    {[
                        { label: 'irdai.gov.in - Agent & Policy Check', href: 'https://irdai.gov.in' },
                        { label: 'igms.irda.gov.in - File a Complaint', href: 'https://igms.irda.gov.in' },
                        { label: 'cybercrime.gov.in - Report Fraud', href: 'https://cybercrime.gov.in' },
                        { label: 'licindia.in - Verify LIC Agents', href: 'https://licindia.in' },
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
