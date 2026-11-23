'use client'

import Link from 'next/link'
import { Shield, Phone, Share2, ChevronRight, ExternalLink, AlertTriangle, XCircle, CheckCircle, FileCheck } from 'lucide-react'

interface Props {
    title: string
    description: string
}

export default function SidebarUpiIdChecker({ title, description }: Props) {
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

            {/* Already paid a fraudulent UPI ID? */}
            <div className="rounded-2xl border-2 border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/40 overflow-hidden">
                <div className="bg-red-500 px-4 py-3 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-white flex-shrink-0" />
                    <p className="text-white text-xs font-bold uppercase tracking-wider">Paid a Fraudulent UPI ID?</p>
                </div>
                <div className="p-4 space-y-2.5">
                    {[
                        'Do not make any further payment to that UPI ID',
                        'Screenshot the UPI ID, transaction reference, and chat',
                        'Call 1930 (National Cybercrime Helpline) within 30 minutes',
                        'Raise a dispute on the transaction in your UPI app',
                        'File a complaint at cybercrime.gov.in',
                        'Report the UPI ID at rakshaai.co',
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

            {/* Check any UPI ID */}
            <div className="rounded-2xl border border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/60 dark:to-purple-950/60 p-5">
                <div className="flex items-center gap-2 mb-3">
                    <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                        <Shield className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">Check Any UPI ID Free</p>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    Paste any UPI ID into RakshaAI before you pay. Results in under 5 seconds, no sign-up required.
                </p>
                <Link
                    href="/upi-id-checker"
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl transition-colors"
                >
                    Check a UPI ID Now
                    <ChevronRight className="h-4 w-4" />
                </Link>
            </div>

            {/* Verification contacts */}
            <div className="rounded-2xl border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/30 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-green-700 dark:text-green-400 mb-4">
                    Verification &amp; Reporting Contacts
                </p>
                <div className="space-y-2.5">
                    {[
                        { label: 'National Cybercrime Helpline', url: '1930' },
                        { label: 'Complaint Portal', url: 'cybercrime.gov.in' },
                        { label: 'UPI ID Checker', url: 'rakshaai.co' },
                        { label: 'NPCI Guidelines', url: 'npci.org.in' },
                    ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between gap-2">
                            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{item.label}</span>
                            <span className="text-[10px] font-mono text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/40 px-2 py-0.5 rounded">{item.url}</span>
                        </div>
                    ))}
                </div>
                <p className="text-[10px] text-green-700 dark:text-green-500 mt-3 font-semibold border-t border-green-200 dark:border-green-800 pt-3">
                    Since June 2025, every UPI app must show the bank-registered receiver name, not a nickname.
                </p>
            </div>

            {/* Red flags */}
            <div className="rounded-2xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-4">
                    6 Signs of a Fraudulent UPI ID
                </p>
                <div className="space-y-2.5">
                    {[
                        'Sent to you in an SMS, email, or WhatsApp link',
                        'Receiver name does not match who you expected',
                        'An unusual random string, not a recognisable name',
                        'Asked to pay by UPI instead of an official gateway',
                        'A charity or NGO ID you cannot verify independently',
                        'Flagged as risky on rakshaai.co',
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
                    Anyone who uses UPI can be targeted. Share this before the next unknown UPI ID gets paid.
                </p>
                <div className="grid grid-cols-2 gap-2">
                    <a
                        href={`https://wa.me/?text=${encodeURIComponent('Important: ' + title + '. Check this before you pay any UPI ID')}`}
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
                    Before You Pay Any UPI ID
                </p>
                <div className="space-y-2.5">
                    {[
                        { ok: true, text: 'Check the UPI ID at rakshaai.co/upi-id-checker' },
                        { ok: true, text: 'Confirm the bank-registered name shown in your UPI app' },
                        { ok: true, text: 'Verify charity or vendor UPI IDs on their official site' },
                        { ok: false, text: 'Never pay a UPI ID sent only in a chat or SMS link' },
                        { ok: false, text: 'Never trust a name typed into a QR code or contact label' },
                        { ok: false, text: 'Never skip the receiver-name check to save a few seconds' },
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
                    UPI Fraud in India
                </p>
                <div className="space-y-4">
                    {[
                        { value: '981 Cr', label: 'Lost to UPI fraud in FY 2024-25 across 12.64 lakh cases (Lok Sabha data)' },
                        { value: '1 in 5', label: 'Families with a UPI user hit by fraud at least once in 3 years (LocalCircles survey)' },
                        { value: '1930', label: 'National Cybercrime Helpline. Call within 30 minutes for the best recovery odds.' },
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
                        { label: 'rakshaai.co/upi-id-checker - Check a UPI ID', href: '/upi-id-checker' },
                        { label: 'cybercrime.gov.in - Report Fraud', href: 'https://cybercrime.gov.in' },
                        { label: 'npci.org.in - Official UPI Guidelines', href: 'https://www.npci.org.in' },
                    ].map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            target={link.href.startsWith('http') ? '_blank' : undefined}
                            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
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
