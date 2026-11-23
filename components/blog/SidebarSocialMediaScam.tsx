'use client'

import Link from 'next/link'
import { ExternalLink, Share2, ShieldAlert, ShieldCheck } from 'lucide-react'

interface Props {
    title: string
    description: string
}

export default function SidebarSocialMediaScam({ title, description }: Props) {
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
        ['Why social media attracts fraud', '#why-social-media'],
        ['8 active scam types', '#eight-scam-types'],
        ['Recent Indian cases', '#real-cases'],
        ['7 account verification checks', '#verify-account'],
        ['Report on each platform', '#report-platforms'],
        ['Frequently asked questions', '#frequently-asked-questions'],
        ['30 second reel script', '#instagram-reel-script'],
        ['Sources and methodology', '#sources'],
    ]

    return (
        <aside className="space-y-5">
            <div className="overflow-hidden rounded-2xl border-2 border-fuchsia-200 bg-fuchsia-50 dark:border-fuchsia-900 dark:bg-fuchsia-950/30">
                <div className="flex items-center gap-2 bg-gradient-to-r from-fuchsia-600 to-red-600 px-4 py-3 text-white">
                    <ShieldAlert className="h-4 w-4" />
                    <p className="text-xs font-bold uppercase tracking-wider">A paid ad is not a safety check</p>
                </div>
                <div className="p-4">
                    <p className="text-xs leading-relaxed text-gray-700 dark:text-gray-200">Verify the business, creator, website, and payment recipient outside the social media app before you buy, invest, or share credentials.</p>
                </div>
            </div>

            <nav className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800" aria-label="Article contents">
                <p className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-400">Inside this social media scam guide</p>
                <ol className="space-y-3">
                    {sections.map(([label, href], index) => (
                        <li key={href}>
                            <a href={href} className="flex gap-2 text-xs text-gray-600 hover:text-fuchsia-600 dark:text-gray-300 dark:hover:text-fuchsia-400">
                                <span className="font-bold text-fuchsia-500">{index + 1}</span>
                                <span>{label}</span>
                            </a>
                        </li>
                    ))}
                </ol>
            </nav>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
                <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400"><ShieldCheck className="h-4 w-4" />Official checks and reporting</p>
                <div className="space-y-3">
                    {[
                        ['National Cyber Crime Reporting Portal', 'https://cybercrime.gov.in'],
                        ['MCA company master data', 'https://www.mca.gov.in'],
                        ['SEBI Investor resources', 'https://investor.sebi.gov.in'],
                        ['CERT-In social account guidance', 'https://www.cert-in.org.in/s2cMainServlet?VLCODE=CIAD-2024-0006&pageid=PUBVLNOTES02'],
                    ].map(([label, href]) => (
                        <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="flex gap-2 text-xs text-indigo-600 hover:text-indigo-800 dark:text-indigo-400">
                            <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                            {label}
                        </a>
                    ))}
                </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
                <p className="mb-2 flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white"><Share2 className="h-4 w-4" />Share the eight warnings</p>
                <p className="mb-4 text-xs text-gray-500 dark:text-gray-400">Send this guide to anyone who shops, watches investment videos, or answers brand messages on social media.</p>
                <div className="grid grid-cols-2 gap-2">
                    <a href={`https://wa.me/?text=${encodeURIComponent(`${title} https://rakshaai.co/blog/social-media-scam-india`)}`} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-green-500 px-3 py-2 text-center text-xs font-semibold text-white hover:bg-green-600">WhatsApp</a>
                    <button onClick={share} className="rounded-lg bg-gray-100 px-3 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200">Share</button>
                </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-fuchsia-700 to-slate-950 p-5 text-white">
                <p className="mb-2 text-sm font-bold">Check a suspicious profile link</p>
                <p className="mb-4 text-xs text-fuchsia-100">Copy the website address from the bio, ad, comment, or message without opening it, then scan it with RakshaAI.</p>
                <Link href="/website-safety-checker" className="inline-flex rounded-lg bg-white px-4 py-2 text-xs font-bold text-fuchsia-700">Check the website</Link>
            </div>
        </aside>
    )
}
