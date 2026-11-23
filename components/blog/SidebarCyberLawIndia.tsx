'use client'

import Link from 'next/link'
import { AlertTriangle, ExternalLink, FileText, Landmark, Phone, Share2 } from 'lucide-react'

interface Props { title: string }

export default function SidebarCyberLawIndia({ title }: Props) {
    const copyLink = async () => {
        if (typeof window !== 'undefined') await navigator.clipboard.writeText(window.location.href)
    }

    const sections = [
        ['Why legal rights matter', '#why-knowing-rights-matters'],
        ['Five key victim rights', '#five-key-rights'],
        ['Laws that protect you', '#laws-that-protect-you'],
        ['File a cyber fraud FIR', '#file-cyber-fraud-fir'],
        ['Charges scammers face', '#charges-scammers-face'],
        ['Real 2026 victim cases', '#real-cases-2026'],
        ['Source credits', '#source-credits'],
        ['FAQs', '#frequently-asked-questions'],
    ]

    return (
        <aside className="space-y-5">
            <nav className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800" aria-label="Article contents">
                <p className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-400">In this legal rights guide</p>
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

            <div className="rounded-2xl border-2 border-red-200 bg-red-50 p-5 dark:border-red-900 dark:bg-red-950/30">
                <p className="mb-2 flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white"><AlertTriangle className="h-4 w-4 text-red-600" />Money just left your account?</p>
                <p className="mb-4 text-xs text-gray-600 dark:text-gray-300">Call 1930, notify your bank through its official fraud channel, and save both acknowledgement numbers.</p>
                <a href="tel:1930" className="flex items-center justify-center gap-2 rounded-xl bg-red-600 py-2.5 text-sm font-bold text-white hover:bg-red-700"><Phone className="h-4 w-4" />Call 1930 now</a>
            </div>

            <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-5 dark:border-indigo-900 dark:bg-indigo-950/30">
                <p className="mb-2 flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white"><Landmark className="h-4 w-4 text-indigo-600" />Bank rejected your dispute?</p>
                <p className="mb-4 text-xs text-gray-600 dark:text-gray-300">Complain to the bank first. If it rejects the complaint or does not resolve it within 30 days, use RBI CMS.</p>
                <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="block rounded-xl bg-indigo-600 py-2.5 text-center text-sm font-bold text-white hover:bg-indigo-700">Open RBI CMS</a>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
                <p className="mb-2 flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white"><FileText className="h-4 w-4 text-emerald-600" />Prepare your evidence file</p>
                <p className="mb-4 text-xs text-gray-600 dark:text-gray-400">Keep statements, UTRs, screenshots, email headers, phone numbers, URLs, complaint IDs, and every bank response in one folder.</p>
                <Link href="/blog/recover-money-online-fraud-india" className="block rounded-xl bg-emerald-600 py-2.5 text-center text-sm font-bold text-white hover:bg-emerald-700">Open recovery guide</Link>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
                <p className="mb-3 flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white"><Share2 className="h-4 w-4" />Share these rights</p>
                <div className="grid grid-cols-2 gap-2">
                    <a href={`https://wa.me/?text=${encodeURIComponent(title + ' https://rakshaai.co/blog/cyber-law-india-victim-rights')}`} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-green-500 py-2 text-center text-xs font-bold text-white">WhatsApp</a>
                    <button onClick={copyLink} className="rounded-lg bg-gray-100 py-2 text-xs font-bold text-gray-700 dark:bg-gray-700 dark:text-gray-200">Copy link</button>
                </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
                <p className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">Official complaint routes</p>
                <div className="space-y-3">
                    <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="flex gap-2 text-xs text-indigo-600 dark:text-indigo-400"><ExternalLink className="h-3.5 w-3.5 shrink-0" />National Cybercrime Reporting Portal</a>
                    <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="flex gap-2 text-xs text-indigo-600 dark:text-indigo-400"><ExternalLink className="h-3.5 w-3.5 shrink-0" />RBI Complaint Management System</a>
                    <a href="https://consumerhelpline.gov.in" target="_blank" rel="noopener noreferrer" className="flex gap-2 text-xs text-indigo-600 dark:text-indigo-400"><ExternalLink className="h-3.5 w-3.5 shrink-0" />National Consumer Helpline</a>
                </div>
            </div>
        </aside>
    )
}
