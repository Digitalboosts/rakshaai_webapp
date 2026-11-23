'use client'

import Link from 'next/link'
import { Shield, Phone, Share2, ChevronRight, ExternalLink, AlertTriangle, XCircle, CheckCircle } from 'lucide-react'

interface Props {
    title: string
    description: string
}

export default function SidebarSimSwap({ title, description }: Props) {
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

            {/* Phone lost signal? Act now */}
            <div className="rounded-2xl border-2 border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/40 overflow-hidden">
                <div className="bg-red-500 px-4 py-3 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-white flex-shrink-0" />
                    <p className="text-white text-xs font-bold uppercase tracking-wider">Phone Lost Signal Right Now?</p>
                </div>
                <div className="p-4 space-y-2.5">
                    {[
                        'Call Jio 198 / Airtel 121 / Vi 199 from another phone',
                        'Ask if a new SIM was issued for your number today',
                        'Call your bank  freeze UPI and internet banking now',
                        'Change your email password from a different device',
                        'Check bank statements for any transactions just now',
                        'Call 1930 and file at cybercrime.gov.in immediately',
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

            {/* Warning signs */}
            <div className="rounded-2xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-4">
                    5 Warning Signs of SIM Swap
                </p>
                <div className="space-y-2.5">
                    {[
                        'Phone suddenly shows No Service in a coverage area',
                        'SMS says your SIM was activated on a new device',
                        'UPI or banking apps stop receiving OTPs',
                        'Unexpected bank transaction alert arrives',
                        'Unknown caller pretended to be telecom support recently',
                    ].map((flag, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                            <XCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                            <span className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{flag}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Check a suspicious number */}
            <div className="rounded-2xl border border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/60 dark:to-purple-950/60 p-5">
                <div className="flex items-center gap-2 mb-3">
                    <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                        <Shield className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">Check a Suspicious Number</p>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    Received a call claiming to be from your telecom or bank? Check the number on RakshaAI before sharing any personal details. Free and instant.
                </p>
                <Link
                    href="/phone-number-checker"
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl transition-colors"
                >
                    Check a Phone Number
                    <ChevronRight className="h-4 w-4" />
                </Link>
                <Link
                    href="/website-safety-checker"
                    className="flex items-center justify-center gap-2 w-full py-2.5 mt-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 text-sm font-semibold rounded-xl transition-colors"
                >
                    Check a Suspicious Link
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
                    Anyone with UPI linked to their phone number is at risk. Share this with your family, especially parents who may not recognise the warning signs.
                </p>
                <div className="grid grid-cols-2 gap-2">
                    <a
                        href={`https://wa.me/?text=${encodeURIComponent('Important read: ' + title)}`}
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

            {/* Prevention checklist */}
            <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
                    SIM Swap Prevention Checklist
                </p>
                <div className="space-y-2.5">
                    {[
                        { ok: true,  text: 'Set a SIM lock PIN with your telecom operator' },
                        { ok: true,  text: 'Enable SIM change OTP authentication on Jio or Airtel' },
                        { ok: true,  text: 'Lock Aadhaar biometrics at myaadhaar.uidai.gov.in' },
                        { ok: true,  text: 'Use email 2FA for banking where possible, not SMS only' },
                        { ok: false, text: 'Never share personal details with unverified telecom callers' },
                        { ok: false, text: 'Never confirm your Aadhaar number over a cold call' },
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

            {/* Telecom helplines quick reference */}
            <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
                    Telecom Helplines (Save Now)
                </p>
                <div className="space-y-3">
                    {[
                        { op: 'Jio',   num: '198',           color: 'text-blue-600 dark:text-blue-400' },
                        { op: 'Airtel', num: '121',          color: 'text-red-600 dark:text-red-400' },
                        { op: 'Vi',    num: '199',           color: 'text-purple-600 dark:text-purple-400' },
                        { op: 'BSNL',  num: '1800-180-1503', color: 'text-green-600 dark:text-green-400' },
                    ].map((t) => (
                        <div key={t.op} className="flex items-center justify-between">
                            <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">{t.op}</span>
                            <a href={`tel:${t.num.replace(/-/g, '')}`} className={`text-sm font-bold ${t.color}`}>
                                {t.num}
                            </a>
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
                        { label: 'TRAI  SIM Porting Regulations',        href: 'https://www.trai.gov.in' },
                        { label: 'myAadhaar  Lock Your Biometrics',      href: 'https://myaadhaar.uidai.gov.in' },
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
