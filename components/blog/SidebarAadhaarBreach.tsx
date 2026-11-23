'use client'

import Link from 'next/link'
import { Shield, Phone, Share2, ChevronRight, ExternalLink, Lock, AlertTriangle, Eye } from 'lucide-react'

interface Props {
    title: string
    description: string
}

export default function SidebarAadhaarBreach({ title, description }: Props) {
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

            {/* Suspect your Aadhaar is misused? */}
            <div className="rounded-2xl border-2 border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/40 overflow-hidden">
                <div className="bg-red-500 px-4 py-3 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-white flex-shrink-0" />
                    <p className="text-white text-xs font-bold uppercase tracking-wider">Suspect Aadhaar Misuse?</p>
                </div>
                <div className="p-4 space-y-2.5">
                    {[
                        'Lock biometrics at myaadhaar.uidai.gov.in immediately',
                        'Check Authentication History for unknown logins',
                        'Call UIDAI helpline 1947 to report misuse',
                        'File at cybercrime.gov.in for identity theft',
                        'Check your CIBIL report for unauthorized loans',
                        'File an FIR at your local police station',
                    ].map((step, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center mt-0.5">
                                {i + 1}
                            </span>
                            <span className="text-sm font-medium text-gray-800 dark:text-gray-200 leading-snug">{step}</span>
                        </div>
                    ))}
                    <a
                        href="tel:1947"
                        className="mt-3 flex items-center justify-center gap-2 w-full py-2.5 bg-red-500 hover:bg-red-600 text-white text-sm font-bold rounded-xl transition-colors"
                    >
                        <Phone className="h-4 w-4" />
                        Call UIDAI 1947
                    </a>
                </div>
            </div>

            {/* 4-Step Aadhaar protection quick guide */}
            <div className="rounded-2xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/30 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-4 flex items-center gap-2">
                    <Lock className="h-3.5 w-3.5" />
                    Protect Your Aadhaar Now
                </p>
                <div className="space-y-3">
                    {[
                        { label: 'Lock Biometrics', sub: 'myaadhaar.uidai.gov.in' },
                        { label: 'Use Masked Aadhaar', sub: 'Only last 4 digits visible' },
                        { label: 'Generate Virtual ID', sub: '16-digit substitute number' },
                        { label: 'Check Auth History', sub: 'Spot misuse early' },
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500 text-white text-[10px] font-bold flex items-center justify-center mt-0.5">
                                {i + 1}
                            </span>
                            <div>
                                <p className="text-xs font-semibold text-gray-900 dark:text-gray-100">{item.label}</p>
                                <p className="text-[11px] text-gray-500 dark:text-gray-400">{item.sub}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <a
                    href="https://myaadhaar.uidai.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center justify-center gap-2 w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-colors"
                >
                    Go to myAadhaar Portal
                    <ChevronRight className="h-4 w-4" />
                </a>
            </div>

            {/* Check suspicious link */}
            <div className="rounded-2xl border border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/60 dark:to-purple-950/60 p-5">
                <div className="flex items-center gap-2 mb-3">
                    <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                        <Shield className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">Got a Suspicious Aadhaar Link?</p>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    Paste any UIDAI or bank link before clicking. RakshaAI checks it against phishing databases instantly.
                </p>
                <Link
                    href="/website-safety-checker"
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl transition-colors"
                >
                    Check the Link Now
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
                    Every Indian with an Aadhaar card needs to know this. Share with your family.
                </p>
                <div className="grid grid-cols-2 gap-2">
                    <a
                        href={`https://wa.me/?text=${encodeURIComponent('Important: ' + title + ' - Read this now: ')}`}
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

            {/* Data breach stats */}
            <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
                    Aadhaar Breach in Numbers
                </p>
                <div className="space-y-4">
                    {[
                        { value: '5th',    label: 'India ranked globally in breached accounts in 2024' },
                        { value: '81.5 Cr', label: 'Indian patient records exposed in a single 2023 breach' },
                        { value: '1947',   label: 'UIDAI helpline to report Aadhaar misuse' },
                    ].map((stat, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <div className="text-base font-extrabold text-indigo-600 dark:text-indigo-400 leading-none mt-0.5 min-w-[64px]">
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
                    <Eye className="h-3.5 w-3.5" />
                    Official Resources
                </p>
                <div className="space-y-2.5">
                    {[
                        { label: 'myaadhaar.uidai.gov.in - Lock Biometrics',        href: 'https://myaadhaar.uidai.gov.in' },
                        { label: 'cybercrime.gov.in - File Identity Theft Report',   href: 'https://cybercrime.gov.in' },
                        { label: 'haveibeenpwned.com - Check Email Breach',          href: 'https://haveibeenpwned.com' },
                        { label: 'cibil.com - Check for Unauthorized Loans',         href: 'https://www.cibil.com' },
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
