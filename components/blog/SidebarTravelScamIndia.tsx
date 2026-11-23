'use client'

import Link from 'next/link'
import { AlertTriangle, ExternalLink, MapPinned, Phone, Share2, ShieldCheck } from 'lucide-react'

interface Props { title: string }

export default function SidebarTravelScamIndia({ title }: Props) {
    const copyLink = async () => {
        if (typeof window !== 'undefined') await navigator.clipboard.writeText(window.location.href)
    }

    const sections = [
        ['Why travel season is risky', '#why-travel-season-is-peak-scam-season'],
        ['Seven active scams', '#seven-active-travel-scams'],
        ['Verify a booking', '#how-to-verify-travel-booking'],
        ['Safe payment rules', '#safe-travel-payment-rules'],
        ['Real cases', '#real-travel-scam-cases'],
        ['After travel fraud', '#what-to-do-after-travel-fraud'],
        ['30 second reel script', '#instagram-reel-script'],
        ['FAQs', '#frequently-asked-questions'],
        ['Sources', '#sources-and-credits'],
    ]

    return (
        <aside className="space-y-5">
            <nav className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800" aria-label="Article contents">
                <p className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-400">In this travel safety guide</p>
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
                <p className="mb-2 flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white"><MapPinned className="h-4 w-4 text-indigo-600" />Verify the booking URL</p>
                <p className="mb-4 text-xs text-gray-600 dark:text-gray-300">Check an unfamiliar hotel, yatra or travel package website before entering payment details.</p>
                <Link href="/website-safety-checker" className="block rounded-xl bg-indigo-600 py-2.5 text-center text-sm font-bold text-white hover:bg-indigo-700">Check the website</Link>
            </div>

            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-900 dark:bg-emerald-950/30">
                <p className="mb-2 flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white"><ShieldCheck className="h-4 w-4 text-emerald-600" />Official Char Dham routes</p>
                <div className="space-y-3 text-xs">
                    <a href="https://registrationandtouristcare.uk.gov.in" target="_blank" rel="noopener noreferrer" className="flex gap-2 text-emerald-700 dark:text-emerald-300"><ExternalLink className="h-3.5 w-3.5 shrink-0" />Free yatra registration</a>
                    <a href="https://www.heliyatra.irctc.co.in" target="_blank" rel="noopener noreferrer" className="flex gap-2 text-emerald-700 dark:text-emerald-300"><ExternalLink className="h-3.5 w-3.5 shrink-0" />IRCTC Heli booking</a>
                </div>
            </div>

            <div className="rounded-2xl border-2 border-red-200 bg-red-50 p-5 dark:border-red-900 dark:bg-red-950/30">
                <p className="mb-2 flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white"><AlertTriangle className="h-4 w-4 text-red-600" />Already paid a fake agent?</p>
                <p className="mb-4 text-xs text-gray-600 dark:text-gray-300">Call 1930, contact the bank, preserve the booking evidence, and file at cybercrime.gov.in.</p>
                <a href="tel:1930" className="flex items-center justify-center gap-2 rounded-xl bg-red-600 py-2.5 text-sm font-bold text-white hover:bg-red-700"><Phone className="h-4 w-4" />Call 1930 now</a>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
                <p className="mb-3 flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white"><Share2 className="h-4 w-4" />Warn fellow travellers</p>
                <div className="grid grid-cols-2 gap-2">
                    <a href={`https://wa.me/?text=${encodeURIComponent(title + ' https://rakshaai.co/blog/travel-scam-india')}`} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-green-500 py-2 text-center text-xs font-bold text-white">WhatsApp</a>
                    <button onClick={copyLink} className="rounded-lg bg-gray-100 py-2 text-xs font-bold text-gray-700 dark:bg-gray-700 dark:text-gray-200">Copy link</button>
                </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
                <p className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">Official help and verification</p>
                <div className="space-y-3">
                    <a href="https://www.nidhi.tourism.gov.in/home/classified?categoryCode=02&subcategory=TA" target="_blank" rel="noopener noreferrer" className="flex gap-2 text-xs text-indigo-600 dark:text-indigo-400"><ExternalLink className="h-3.5 w-3.5 shrink-0" />NIDHI+ travel providers</a>
                    <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="flex gap-2 text-xs text-indigo-600 dark:text-indigo-400"><ExternalLink className="h-3.5 w-3.5 shrink-0" />National cybercrime portal</a>
                    <a href="https://consumerhelpline.gov.in" target="_blank" rel="noopener noreferrer" className="flex gap-2 text-xs text-indigo-600 dark:text-indigo-400"><ExternalLink className="h-3.5 w-3.5 shrink-0" />National Consumer Helpline</a>
                </div>
            </div>
        </aside>
    )
}
