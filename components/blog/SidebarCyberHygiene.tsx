'use client'

import Link from 'next/link'
import { ExternalLink, Phone, Share2, ShieldCheck } from 'lucide-react'

interface Props { title: string; description: string }

export default function SidebarCyberHygiene({ title, description }: Props) {
    const share = async () => {
        if (typeof window === 'undefined') return
        if (navigator.share) {
            try { await navigator.share({ title, text: description, url: window.location.href }) } catch { /* Share dismissed. */ }
        } else {
            await navigator.clipboard.writeText(window.location.href)
        }
    }

    const sections = [
        ['Why habits beat awareness', '#awareness-needs-habits'],
        ['10 daily cyber habits', '#ten-daily-habits'],
        ['Real Indian cases', '#real-indian-cases'],
        ['5-minute weekly routine', '#five-minute-weekly-routine'],
        ['Teach your family', '#teaching-family'],
        ['30 second Reel script', '#instagram-reel-script'],
        ['Frequently asked questions', '#frequently-asked-questions'],
        ['Sources and credits', '#sources-and-credits'],
    ]

    return (
        <aside className="space-y-5">
            <div className="overflow-hidden rounded-2xl border-2 border-teal-200 bg-teal-50 dark:border-teal-900 dark:bg-teal-950/30">
                <div className="flex items-center gap-2 bg-gradient-to-r from-teal-700 to-indigo-700 px-4 py-3 text-white">
                    <ShieldCheck className="h-4 w-4" /><p className="text-xs font-bold uppercase tracking-wider">The daily rule</p>
                </div>
                <p className="p-4 text-xs leading-relaxed text-gray-700 dark:text-gray-200">Stop, open the official app yourself, verify the person or destination, then act. Urgency never removes the need to check.</p>
            </div>

            <nav className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800" aria-label="Article contents">
                <p className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-400">Inside this cyber hygiene guide</p>
                <ol className="space-y-3">
                    {sections.map(([label, href], index) => <li key={href}><a href={href} className="flex gap-2 text-xs text-gray-600 hover:text-teal-700 dark:text-gray-300 dark:hover:text-teal-400"><span className="font-bold text-teal-600">{index + 1}</span><span>{label}</span></a></li>)}
                </ol>
            </nav>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
                <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400"><ExternalLink className="h-4 w-4" />Official safety checks</p>
                <div className="space-y-3">
                    {[
                        ['Report cybercrime or a suspect', 'https://cybercrime.gov.in'],
                        ['Check Aadhaar authentication history', 'https://myaadhaar.uidai.gov.in'],
                        ['Check mobile connections and use Chakshu', 'https://sancharsaathi.gov.in'],
                    ].map(([label, href]) => <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="flex gap-2 text-xs text-indigo-600 hover:text-indigo-800 dark:text-indigo-400"><ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0" />{label}</a>)}
                </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
                <p className="mb-2 flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white"><Share2 className="h-4 w-4" />Build the habit together</p>
                <p className="mb-4 text-xs text-gray-500 dark:text-gray-400">Send the 10-habit checklist to your family group.</p>
                <div className="grid grid-cols-2 gap-2">
                    <a href={`https://wa.me/?text=${encodeURIComponent(`${title} https://rakshaai.co/blog/cyber-hygiene-india`)}`} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-green-500 px-3 py-2 text-center text-xs font-semibold text-white hover:bg-green-600">WhatsApp</a>
                    <button onClick={share} className="rounded-lg bg-gray-100 px-3 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200">Share</button>
                </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-teal-700 to-slate-950 p-5 text-white">
                <p className="mb-2 text-sm font-bold">Money already transferred?</p>
                <p className="mb-4 text-xs text-teal-100">Call 1930 immediately, contact your bank and save the transaction reference, messages, number and URL.</p>
                <a href="tel:1930" className="mb-2 flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-2 text-xs font-bold text-teal-700"><Phone className="h-3.5 w-3.5" />Call 1930</a>
                <Link href="/blog/recover-money-online-fraud-india" className="block text-center text-xs font-semibold text-white underline">Open the money recovery guide</Link>
            </div>
        </aside>
    )
}
