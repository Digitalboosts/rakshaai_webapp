'use client'

import Link from 'next/link'
import { AlertTriangle, ExternalLink, Phone, Share2, ShieldCheck } from 'lucide-react'

interface Props { title: string }

export default function SidebarJobScam({ title }: Props) {
    const copyLink = async () => {
        if (typeof window !== 'undefined') await navigator.clipboard.writeText(window.location.href)
    }

    const sections = [
        ['Why job seekers are targeted', '#why-job-seekers-are-targeted'],
        ['Six job scam types', '#six-job-scam-types'],
        ['Verify an offer in 5 minutes', '#verify-job-offer'],
        ['Job offer red flags', '#job-offer-red-flags'],
        ['Overseas trafficking risk', '#overseas-job-scam'],
        ['Real cases and sources', '#real-cases'],
        ['If you already paid', '#already-paid'],
        ['FAQs', '#frequently-asked-questions'],
    ]

    return (
        <aside className="space-y-5">
            <nav className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800" aria-label="Article contents">
                <p className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-400">In this job scam guide</p>
                <ol className="space-y-3">
                    {sections.map(([label, href], index) => (
                        <li key={href}><a href={href} className="flex gap-2 text-xs text-gray-600 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400"><span className="font-bold text-red-500">{index + 1}</span><span>{label}</span></a></li>
                    ))}
                </ol>
            </nav>

            <div className="rounded-2xl border-2 border-red-200 bg-red-50 p-5 dark:border-red-900 dark:bg-red-950/30">
                <p className="mb-2 flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white"><AlertTriangle className="h-4 w-4 text-red-600" />Already paid?</p>
                <p className="mb-4 text-xs text-gray-600 dark:text-gray-300">Stop paying, call 1930, contact your bank, and save the offer letter, chats, account details, and receipts.</p>
                <a href="tel:1930" className="flex items-center justify-center gap-2 rounded-xl bg-red-600 py-2.5 text-sm font-bold text-white hover:bg-red-700"><Phone className="h-4 w-4" />Call 1930 now</a>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
                <p className="mb-2 flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white"><ShieldCheck className="h-4 w-4 text-indigo-600" />Verify the recruiter</p>
                <p className="mb-4 text-xs text-gray-600 dark:text-gray-400">Check the phone number independently before sharing documents or money.</p>
                <Link href="/phone-number-checker" className="block rounded-xl bg-indigo-600 py-2.5 text-center text-sm font-bold text-white hover:bg-indigo-700">Check phone number</Link>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
                <p className="mb-3 flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white"><Share2 className="h-4 w-4" />Warn a job seeker</p>
                <div className="grid grid-cols-2 gap-2">
                    <a href={`https://wa.me/?text=${encodeURIComponent(title + ' https://rakshaai.co/blog/job-scam-india')}`} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-green-500 py-2 text-center text-xs font-bold text-white">WhatsApp</a>
                    <button onClick={copyLink} className="rounded-lg bg-gray-100 py-2 text-xs font-bold text-gray-700 dark:bg-gray-700 dark:text-gray-200">Copy link</button>
                </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
                <p className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">Official resources</p>
                <div className="space-y-3">
                    <a href="https://www.tcs.com/careers/india/recruitment-fraud-alert" target="_blank" rel="noopener noreferrer" className="flex gap-2 text-xs text-indigo-600 dark:text-indigo-400"><ExternalLink className="h-3.5 w-3.5" />TCS fraud alert and verification</a>
                    <a href="https://www.mca.gov.in" target="_blank" rel="noopener noreferrer" className="flex gap-2 text-xs text-indigo-600 dark:text-indigo-400"><ExternalLink className="h-3.5 w-3.5" />MCA company lookup</a>
                    <a href="https://emigrate.gov.in" target="_blank" rel="noopener noreferrer" className="flex gap-2 text-xs text-indigo-600 dark:text-indigo-400"><ExternalLink className="h-3.5 w-3.5" />eMigrate overseas recruitment</a>
                    <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="flex gap-2 text-xs text-indigo-600 dark:text-indigo-400"><ExternalLink className="h-3.5 w-3.5" />National cybercrime portal</a>
                </div>
            </div>
        </aside>
    )
}
