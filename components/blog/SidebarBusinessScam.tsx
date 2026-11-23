'use client'

import Link from 'next/link'
import { AlertTriangle, Building2, ExternalLink, Phone, Share2, ShieldCheck } from 'lucide-react'

interface Props { title: string }

export default function SidebarBusinessScam({ title }: Props) {
    const copyLink = async () => {
        if (typeof window !== 'undefined') await navigator.clipboard.writeText(window.location.href)
    }

    const sections = [
        ['Why SMEs are targeted', '#why-small-businesses-are-targeted'],
        ['Seven active scam types', '#seven-business-scams'],
        ['Verify a new client', '#how-to-verify-client'],
        ['Ten protection rules', '#business-protection-checklist'],
        ['Real cases and sources', '#real-business-scam-cases'],
        ['If money was sent', '#what-to-do-after-fraud'],
        ['FAQs', '#frequently-asked-questions'],
    ]

    return (
        <aside className="space-y-5">
            <nav className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800" aria-label="Article contents">
                <p className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-400">In this business guide</p>
                <ol className="space-y-3">
                    {sections.map(([label, href], index) => (
                        <li key={href}>
                            <a href={href} className="flex gap-2 text-xs text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">
                                <span className="font-bold text-indigo-600">{index + 1}</span><span>{label}</span>
                            </a>
                        </li>
                    ))}
                </ol>
            </nav>

            <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-5 dark:border-indigo-900 dark:bg-indigo-950/30">
                <p className="mb-2 flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white"><Building2 className="h-4 w-4 text-indigo-600" />Verify before onboarding</p>
                <p className="mb-4 text-xs text-gray-600 dark:text-gray-300">Check company registration, GST details, phone number, payment identity, and the written contract before work starts.</p>
                <Link href="/blog/how-to-verify-a-business-india" className="block rounded-xl bg-indigo-600 py-2.5 text-center text-sm font-bold text-white hover:bg-indigo-700">Open verification guide</Link>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
                <p className="mb-2 flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white"><ShieldCheck className="h-4 w-4 text-emerald-600" />Check payment details</p>
                <p className="mb-4 text-xs text-gray-600 dark:text-gray-400">Search a new client&apos;s UPI ID for available scam signals before accepting it as part of a deal.</p>
                <Link href="/upi-id-checker" className="block rounded-xl bg-emerald-600 py-2.5 text-center text-sm font-bold text-white hover:bg-emerald-700">Check a UPI ID</Link>
            </div>

            <div className="rounded-2xl border-2 border-red-200 bg-red-50 p-5 dark:border-red-900 dark:bg-red-950/30">
                <p className="mb-2 flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white"><AlertTriangle className="h-4 w-4 text-red-600" />Business money already sent?</p>
                <p className="mb-4 text-xs text-gray-600 dark:text-gray-300">Call 1930, alert your bank, preserve invoices and chats, and report immediately.</p>
                <a href="tel:1930" className="flex items-center justify-center gap-2 rounded-xl bg-red-600 py-2.5 text-sm font-bold text-white hover:bg-red-700"><Phone className="h-4 w-4" />Call 1930 now</a>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
                <p className="mb-3 flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white"><Share2 className="h-4 w-4" />Warn your business network</p>
                <div className="grid grid-cols-2 gap-2">
                    <a href={`https://wa.me/?text=${encodeURIComponent(title + ' https://rakshaai.co/blog/business-scam-india')}`} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-green-500 py-2 text-center text-xs font-bold text-white">WhatsApp</a>
                    <button onClick={copyLink} className="rounded-lg bg-gray-100 py-2 text-xs font-bold text-gray-700 dark:bg-gray-700 dark:text-gray-200">Copy link</button>
                </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
                <p className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">Official verification and help</p>
                <div className="space-y-3">
                    <a href="https://www.mca.gov.in" target="_blank" rel="noopener noreferrer" className="flex gap-2 text-xs text-indigo-600 dark:text-indigo-400"><ExternalLink className="h-3.5 w-3.5 shrink-0" />MCA company records</a>
                    <a href="https://www.gst.gov.in" target="_blank" rel="noopener noreferrer" className="flex gap-2 text-xs text-indigo-600 dark:text-indigo-400"><ExternalLink className="h-3.5 w-3.5 shrink-0" />GST taxpayer search</a>
                    <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="flex gap-2 text-xs text-indigo-600 dark:text-indigo-400"><ExternalLink className="h-3.5 w-3.5 shrink-0" />National cybercrime portal</a>
                </div>
            </div>
        </aside>
    )
}
