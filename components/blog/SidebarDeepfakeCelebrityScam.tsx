'use client'

import Link from 'next/link'
import { AlertTriangle, ExternalLink, Phone, Share2, ShieldCheck } from 'lucide-react'

interface Props { title: string }

export default function SidebarDeepfakeCelebrityScam({ title }: Props) {
    const copyLink = async () => {
        if (typeof window !== 'undefined') await navigator.clipboard.writeText(window.location.href)
    }

    const sections = [
        ['What is a deepfake?', '#what-is-a-deepfake'],
        ['How the scam works', '#how-it-works'],
        ['Impersonated celebrities', '#most-impersonated'],
        ['Detect one in 60 seconds', '#how-to-detect'],
        ['Platform red flags', '#platform-red-flags'],
        ['If you invested', '#if-you-invested'],
        ['Real cases and sources', '#real-cases'],
        ['FAQs', '#frequently-asked-questions'],
    ]

    return (
        <aside className="space-y-5">
            <nav className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800" aria-label="Article contents">
                <p className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-400">In this warning</p>
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

            <div className="rounded-2xl border-2 border-red-200 bg-red-50 p-5 dark:border-red-900 dark:bg-red-950/30">
                <p className="mb-2 flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white"><AlertTriangle className="h-4 w-4 text-red-600" />Already sent money?</p>
                <p className="mb-4 text-xs text-gray-600 dark:text-gray-300">Call 1930, contact your bank, preserve every message, and report immediately.</p>
                <a href="tel:1930" className="flex items-center justify-center gap-2 rounded-xl bg-red-600 py-2.5 text-sm font-bold text-white hover:bg-red-700"><Phone className="h-4 w-4" />Call 1930 now</a>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
                <p className="mb-2 flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white"><ShieldCheck className="h-4 w-4 text-indigo-600" />Check the platform</p>
                <p className="mb-4 text-xs text-gray-600 dark:text-gray-400">Scan the investment website before entering details or sending money.</p>
                <Link href="/website-safety-checker" className="block rounded-xl bg-indigo-600 py-2.5 text-center text-sm font-bold text-white hover:bg-indigo-700">Check website safety</Link>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
                <p className="mb-3 flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white"><Share2 className="h-4 w-4" />Warn family and friends</p>
                <div className="grid grid-cols-2 gap-2">
                    <a href={`https://wa.me/?text=${encodeURIComponent(title + ' https://rakshaai.co/blog/deepfake-celebrity-scam-india')}`} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-green-500 py-2 text-center text-xs font-bold text-white">WhatsApp</a>
                    <button onClick={copyLink} className="rounded-lg bg-gray-100 py-2 text-xs font-bold text-gray-700 dark:bg-gray-700 dark:text-gray-200">Copy link</button>
                </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
                <p className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">Verify and report</p>
                <div className="space-y-3">
                    <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="flex gap-2 text-xs text-indigo-600 dark:text-indigo-400"><ExternalLink className="h-3.5 w-3.5" />National cybercrime portal</a>
                    <a href="https://www.boomlive.in/fact-check" target="_blank" rel="noopener noreferrer" className="flex gap-2 text-xs text-indigo-600 dark:text-indigo-400"><ExternalLink className="h-3.5 w-3.5" />BOOM fact checks</a>
                    <a href="https://www.altnews.in" target="_blank" rel="noopener noreferrer" className="flex gap-2 text-xs text-indigo-600 dark:text-indigo-400"><ExternalLink className="h-3.5 w-3.5" />Alt News fact checks</a>
                </div>
            </div>
        </aside>
    )
}
