'use client'

import Link from 'next/link'
import { Shield, Phone, Share2, ChevronRight, ExternalLink, AlertTriangle, XCircle, CheckCircle } from 'lucide-react'

interface Props {
    title: string
    description: string
}

export default function SidebarRentalScam({ title, description }: Props) {
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
                    <p className="text-white text-xs font-bold uppercase tracking-wider">Already Paid Advance?</p>
                </div>
                <div className="p-4 space-y-2.5">
                    {[
                        'Stop all further payments immediately',
                        'Screenshot every transaction receipt now',
                        'Note the scammer\'s phone number and UPI ID',
                        'Call 1930 to report the fraud right away',
                        'File at cybercrime.gov.in within 24 hours',
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

            {/* 6 red flags */}
            <div className="rounded-2xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-4">
                    6 Red Flags in a Rental Listing
                </p>
                <div className="space-y-2.5">
                    {[
                        'Price is 30 to 50% below all comparable listings',
                        'Landlord demands advance before any site visit',
                        'Photos look too professional or copied online',
                        'Landlord is always out of town and unavailable',
                        'Advance requested via personal UPI, not company',
                        'Extreme urgency: three others are interested today',
                    ].map((flag, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                            <XCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                            <span className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{flag}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Check landlord number */}
            <div className="rounded-2xl border border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/60 dark:to-purple-950/60 p-5">
                <div className="flex items-center gap-2 mb-3">
                    <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                        <Shield className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">Check Before You Pay</p>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    Got a landlord number or a listing link? Run both on RakshaAI before transferring any advance. Free, no sign-up required.
                </p>
                <Link
                    href="/phone-number-checker"
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl transition-colors"
                >
                    Check a Landlord Number
                    <ChevronRight className="h-4 w-4" />
                </Link>
                <Link
                    href="/website-safety-checker"
                    className="flex items-center justify-center gap-2 w-full py-2.5 mt-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 text-sm font-semibold rounded-xl transition-colors"
                >
                    Check a Listing Link
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
                    Anyone searching for a flat or PG in an Indian city is a potential target. Share this before someone you know pays advance for a listing that does not exist.
                </p>
                <div className="grid grid-cols-2 gap-2">
                    <a
                        href={`https://wa.me/?text=${encodeURIComponent('Read this before paying any rental advance: ' + title)}`}
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

            {/* Safe rental checklist */}
            <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
                    Safe Rental Checklist
                </p>
                <div className="space-y-2.5">
                    {[
                        { ok: true,  text: 'Visited the property in person before any payment' },
                        { ok: true,  text: 'Verified ownership with the building society or registry' },
                        { ok: true,  text: 'Signed a registered rental agreement before transfer' },
                        { ok: true,  text: 'Checked the landlord number at rakshaai.co' },
                        { ok: false, text: 'Never pay advance based on photos and phone calls only' },
                        { ok: false, text: 'Never share banking credentials with any landlord or agent' },
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
                    Rental Fraud in Numbers
                </p>
                <div className="space-y-4">
                    {[
                        { value: '3 Types', label: 'Active rental scam formats targeting Indian city migrants and students in 2026' },
                        { value: '6 Flags', label: 'Red flags visible in every fake listing before you visit or pay anything' },
                        { value: '1930',   label: 'National Cybercrime Helpline  call within 60 minutes to maximise recovery chances' },
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
                        { label: 'cybercrime.gov.in  File a Complaint',  href: 'https://cybercrime.gov.in' },
                        { label: '99acres  Check Market Rental Rates',   href: 'https://www.99acres.com' },
                        { label: 'CERT-In  Report Cyber Incident',       href: 'https://www.cert-in.org.in' },
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
