'use client'

import Link from 'next/link'
import { ExternalLink, MapPin, Share2, ShieldAlert } from 'lucide-react'

interface Props {
    title: string
    description: string
}

export default function SidebarCyberFraudHotspots({ title, description }: Props) {
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
        ['The geography', '#geography'],
        ['Jamtara, Jharkhand', '#jamtara'],
        ['The operation model', '#operation-model'],
        ['Mewat and Bharatpur', '#mewat'],
        ['Southeast Asian compounds', '#southeast-asia'],
        ['How this protects you', '#protection'],
        ['India crackdown', '#crackdown'],
        ['Real cases and sources', '#real-cases'],
        ['FAQs', '#frequently-asked-questions'],
        ['30 second reel script', '#instagram-reel-script'],
    ]

    return (
        <aside className="space-y-5">
            <div className="overflow-hidden rounded-2xl border-2 border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950/30">
                <div className="flex items-center gap-2 bg-red-600 px-4 py-3 text-white">
                    <ShieldAlert className="h-4 w-4" />
                    <p className="text-xs font-bold uppercase tracking-wider">One pattern exposes most calls</p>
                </div>
                <div className="p-4">
                    <p className="text-xs leading-relaxed text-gray-700 dark:text-gray-200">A bank, police officer, courier, or employer will not need your OTP, UPI PIN, screen sharing access, or a secret payment. End the call and verify independently.</p>
                </div>
            </div>

            <nav className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800" aria-label="Article contents">
                <p className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-400">Inside this investigation</p>
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
                <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400"><MapPin className="h-4 w-4" />Official resources</p>
                <div className="space-y-3">
                    {[
                        ['National Cybercrime Portal', 'https://cybercrime.gov.in'],
                        ['Indian Cybercrime Coordination Centre', 'https://i4c.mha.gov.in'],
                        ['MEA overseas employment advice', 'https://www.mea.gov.in/combodia-travel-advisory.htm'],
                    ].map(([label, href]) => (
                        <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="flex gap-2 text-xs text-indigo-600 hover:text-indigo-800 dark:text-indigo-400">
                            <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0" />{label}
                        </a>
                    ))}
                </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
                <p className="mb-2 flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white"><Share2 className="h-4 w-4" />Share the warning</p>
                <p className="mb-4 text-xs text-gray-500 dark:text-gray-400">Help someone recognize a scripted fraud call before they respond.</p>
                <div className="grid grid-cols-2 gap-2">
                    <a href={`https://wa.me/?text=${encodeURIComponent(`${title} https://rakshaai.co/blog/cyber-fraud-hotspots-india`)}`} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-green-500 px-3 py-2 text-center text-xs font-semibold text-white hover:bg-green-600">WhatsApp</a>
                    <button onClick={share} className="rounded-lg bg-gray-100 px-3 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200">Share</button>
                </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-red-700 to-slate-950 p-5 text-white">
                <p className="mb-2 text-sm font-bold">Check before you trust</p>
                <p className="mb-4 text-xs text-red-100">Check a suspicious phone number, website, or UPI ID with RakshaAI.</p>
                <Link href="/" className="inline-flex rounded-lg bg-white px-4 py-2 text-xs font-bold text-red-700">Open RakshaAI</Link>
            </div>
        </aside>
    )
}
