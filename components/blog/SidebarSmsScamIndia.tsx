'use client'

import Link from 'next/link'
import { ExternalLink, MessageSquareWarning, Share2, ShieldCheck } from 'lucide-react'

interface Props {
    title: string
    description: string
}

export default function SidebarSmsScamIndia({ title, description }: Props) {
    const share = async () => {
        if (typeof window === 'undefined') return
        if (navigator.share) {
            try {
                await navigator.share({ title, text: description, url: window.location.href })
            } catch {
                // The visitor dismissed the share sheet.
            }
        } else {
            await navigator.clipboard.writeText(window.location.href)
        }
    }

    const sections = [
        ['BioCatch July 2026 data', '#numbers'],
        ['Why SMS scams work', '#why-dangerous'],
        ['7 common SMS scam types', '#seven-types'],
        ['30 second identification check', '#identify'],
        ['Real cases in India', '#real-cases'],
        ['How to report scam SMS', '#report'],
        ['Frequently asked questions', '#frequently-asked-questions'],
        ['30 second reel script', '#instagram-reel-script'],
        ['Sources and methodology', '#sources'],
    ]

    return (
        <aside className="space-y-5">
            <div className="overflow-hidden rounded-2xl border-2 border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950/30">
                <div className="flex items-center gap-2 bg-red-600 px-4 py-3 text-white">
                    <MessageSquareWarning className="h-4 w-4" />
                    <p className="text-xs font-bold uppercase tracking-wider">Stop before you tap</p>
                </div>
                <div className="p-4">
                    <p className="text-xs leading-relaxed text-gray-700 dark:text-gray-200">Do not use the link, phone number, or app named inside a suspicious SMS. Open the official app or type the official website yourself.</p>
                </div>
            </div>

            <nav className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800" aria-label="Article contents">
                <p className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-400">Inside this SMS scam guide</p>
                <ol className="space-y-3">
                    {sections.map(([label, href], index) => (
                        <li key={href}>
                            <a href={href} className="flex gap-2 text-xs text-gray-600 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400">
                                <span className="font-bold text-red-500">{index + 1}</span><span>{label}</span>
                            </a>
                        </li>
                    ))}
                </ol>
            </nav>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
                <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400"><ShieldCheck className="h-4 w-4" />Official reporting</p>
                <div className="space-y-3">
                    {[
                        ['Report financial cyber fraud', 'https://cybercrime.gov.in'],
                        ['Report suspected fraud communication', 'https://sancharsaathi.gov.in/sfc/'],
                        ['TRAI spam reporting guide', 'https://trai.gov.in/complain-or-report-against-ucc'],
                    ].map(([label, href]) => (
                        <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="flex gap-2 text-xs text-indigo-600 hover:text-indigo-800 dark:text-indigo-400">
                            <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0" />{label}
                        </a>
                    ))}
                </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
                <p className="mb-2 flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white"><Share2 className="h-4 w-4" />Share the warning</p>
                <p className="mb-4 text-xs text-gray-500 dark:text-gray-400">Send this 30 second SMS check to family members before the next fake alert arrives.</p>
                <div className="grid grid-cols-2 gap-2">
                    <a href={`https://wa.me/?text=${encodeURIComponent(`${title} https://rakshaai.co/blog/sms-scam-india`)}`} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-green-500 px-3 py-2 text-center text-xs font-semibold text-white hover:bg-green-600">WhatsApp</a>
                    <button onClick={share} className="rounded-lg bg-gray-100 px-3 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200">Share</button>
                </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-red-700 to-slate-950 p-5 text-white">
                <p className="mb-2 text-sm font-bold">Check an SMS link safely</p>
                <p className="mb-4 text-xs text-red-100">Copy the link without opening it, then scan it with RakshaAI&apos;s free website checker.</p>
                <Link href="/website-safety-checker" className="inline-flex rounded-lg bg-white px-4 py-2 text-xs font-bold text-red-700">Check the website</Link>
            </div>
        </aside>
    )
}
