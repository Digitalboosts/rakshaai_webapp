'use client'

import Link from 'next/link'
import { AlertTriangle, ExternalLink, Phone, Share2, Shield } from 'lucide-react'

interface Props {
    title: string
}

export default function SidebarTopScams({ title }: Props) {
    const copyLink = async () => {
        if (typeof window !== 'undefined') await navigator.clipboard.writeText(window.location.href)
    }

    const sections = [
        ['The scale of cyber fraud', '#the-scale'],
        ['How to use this list', '#how-to-use-this-list'],
        ['The top 10 scams', '#top-10-scams'],
        ['Quick safety reference', '#quick-reference'],
        ['Real cases and sources', '#real-cases'],
        ['Frequently asked questions', '#frequently-asked-questions'],
    ]

    return (
        <aside className="space-y-5">
            <nav className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5" aria-label="Article contents">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">In this guide</p>
                <ol className="space-y-3">
                    {sections.map(([label, href], index) => (
                        <li key={href}>
                            <a href={href} className="flex gap-2 text-xs text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400">
                                <span className="font-bold text-red-500">{index + 1}</span>
                                <span>{label}</span>
                            </a>
                        </li>
                    ))}
                </ol>
            </nav>

            <div className="rounded-2xl border-2 border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/30 p-5">
                <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="h-4 w-4 text-red-600" />
                    <p className="text-sm font-bold text-gray-900 dark:text-white">Money just left your account?</p>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-300 mb-4">Call the National Cybercrime Helpline immediately. Fast reporting gives banks the best chance to hold the funds.</p>
                <a href="tel:1930" className="flex items-center justify-center gap-2 rounded-xl bg-red-600 py-2.5 text-sm font-bold text-white hover:bg-red-700">
                    <Phone className="h-4 w-4" /> Call 1930 now
                </a>
            </div>

            <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5">
                <div className="flex items-center gap-2 mb-2">
                    <Shield className="h-4 w-4 text-indigo-600" />
                    <p className="text-sm font-bold text-gray-900 dark:text-white">Check before you trust</p>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">Search a suspicious number, website, or UPI ID before responding or paying.</p>
                <Link href="/" className="block rounded-xl bg-indigo-600 py-2.5 text-center text-sm font-bold text-white hover:bg-indigo-700">Check free on RakshaAI</Link>
            </div>

            <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5">
                <p className="flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white mb-3"><Share2 className="h-4 w-4" /> Share this warning</p>
                <div className="grid grid-cols-2 gap-2">
                    <a href={`https://wa.me/?text=${encodeURIComponent(title + ' https://rakshaai.co/blog/top-scams-india-2026')}`} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-green-500 py-2 text-center text-xs font-bold text-white">WhatsApp</a>
                    <button onClick={copyLink} className="rounded-lg bg-gray-100 dark:bg-gray-700 py-2 text-xs font-bold text-gray-700 dark:text-gray-200">Copy link</button>
                </div>
            </div>

            <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Official help</p>
                <div className="space-y-3">
                    <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="flex gap-2 text-xs text-indigo-600 dark:text-indigo-400"><ExternalLink className="h-3.5 w-3.5" /> File a cybercrime complaint</a>
                    <a href="https://www.sancharsaathi.gov.in" target="_blank" rel="noopener noreferrer" className="flex gap-2 text-xs text-indigo-600 dark:text-indigo-400"><ExternalLink className="h-3.5 w-3.5" /> Report calls on Chakshu</a>
                </div>
            </div>
        </aside>
    )
}
