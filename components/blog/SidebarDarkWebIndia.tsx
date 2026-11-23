'use client'

import Link from 'next/link'
import { ExternalLink, Search, Share2, ShieldCheck, Siren } from 'lucide-react'

interface Props {
    title: string
    description: string
}

export default function SidebarDarkWebIndia({ title, description }: Props) {
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
        ['Why India is targeted', '#why-india-is-targeted'],
        ['Recent Indian exposures', '#recent-indian-data-breaches'],
        ['What stolen data looks like', '#what-indian-data-looks-like'],
        ['Free personal data checks', '#how-to-check-your-data'],
        ['Real cases and consequences', '#real-cases'],
        ['What to do if exposed', '#what-to-do-if-exposed'],
        ['Frequently asked questions', '#frequently-asked-questions'],
        ['30 second reel script', '#instagram-reel-script'],
        ['Sources and methodology', '#sources'],
    ]

    return (
        <aside className="space-y-5">
            <div className="overflow-hidden rounded-2xl border-2 border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950/30">
                <div className="flex items-center gap-2 bg-red-600 px-4 py-3 text-white">
                    <Siren className="h-4 w-4" />
                    <p className="text-xs font-bold uppercase tracking-wider">Money moved? Act now</p>
                </div>
                <div className="space-y-3 p-4">
                    <p className="text-xs leading-relaxed text-gray-700 dark:text-gray-200">Call 1930, notify your bank, save every message and transaction ID, then complete a report at cybercrime.gov.in.</p>
                    <a href="tel:1930" className="flex w-full items-center justify-center rounded-lg bg-red-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-red-700">Call 1930</a>
                </div>
            </div>

            <nav className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800" aria-label="Article contents">
                <p className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-400">Inside this dark web guide</p>
                <ol className="space-y-3">
                    {sections.map(([label, href], index) => (
                        <li key={href}>
                            <a href={href} className="flex gap-2 text-xs text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">
                                <span className="font-bold text-indigo-500">{index + 1}</span>
                                <span>{label}</span>
                            </a>
                        </li>
                    ))}
                </ol>
            </nav>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
                <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400"><Search className="h-4 w-4" />Free exposure checks</p>
                <div className="space-y-3">
                    {[
                        ['Check an email at Have I Been Pwned', 'https://haveibeenpwned.com'],
                        ['Review Aadhaar authentication history', 'https://myaadhaar.uidai.gov.in'],
                        ['Get a free annual CIBIL report', 'https://www.cibil.com/freecibilscore'],
                        ['Report cybercrime officially', 'https://cybercrime.gov.in'],
                    ].map(([label, href]) => (
                        <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="flex gap-2 text-xs text-indigo-600 hover:text-indigo-800 dark:text-indigo-400">
                            <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                            {label}
                        </a>
                    ))}
                </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
                <p className="mb-2 flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white"><Share2 className="h-4 w-4" />Warn your family</p>
                <p className="mb-4 text-xs text-gray-500 dark:text-gray-400">Share the free checks and six response steps before a targeted call arrives.</p>
                <div className="grid grid-cols-2 gap-2">
                    <a href={`https://wa.me/?text=${encodeURIComponent(`${title} https://rakshaai.co/blog/dark-web-india`)}`} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-green-500 px-3 py-2 text-center text-xs font-semibold text-white hover:bg-green-600">WhatsApp</a>
                    <button onClick={share} className="rounded-lg bg-gray-100 px-3 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200">Share</button>
                </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-emerald-700 to-slate-950 p-5 text-white">
                <p className="mb-2 flex items-center gap-2 text-sm font-bold"><ShieldCheck className="h-4 w-4" />Check a suspicious caller</p>
                <p className="mb-4 text-xs text-emerald-100">Leaked details can make a fake bank or police call sound real. Check the number before you respond.</p>
                <Link href="/phone-number-checker" className="inline-flex rounded-lg bg-white px-4 py-2 text-xs font-bold text-emerald-800">Open Phone Number Checker</Link>
            </div>
        </aside>
    )
}
