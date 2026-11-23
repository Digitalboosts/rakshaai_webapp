'use client'

import Link from 'next/link'
import { CreditCard, ExternalLink, Phone, Share2, ShieldCheck } from 'lucide-react'

interface Props {
    title: string
    description: string
}

export default function SidebarCreditCardFraud({ title, description }: Props) {
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
        ['Scale of card fraud', '#scale-of-card-fraud'],
        ['6 card fraud methods', '#six-card-fraud-methods'],
        ['Warning signs', '#warning-signs'],
        ['Lock a card in 60 seconds', '#how-to-lock-card'],
        ['Real Indian cases', '#real-card-fraud-cases'],
        ['Emergency response', '#fraudulent-card-use'],
        ['30 second reel script', '#instagram-reel-script'],
        ['Frequently asked questions', '#frequently-asked-questions'],
        ['Sources and credits', '#sources-and-credits'],
    ]

    return (
        <aside className="space-y-5">
            <div className="overflow-hidden rounded-2xl border-2 border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950/30">
                <div className="flex items-center gap-2 bg-gradient-to-r from-red-700 to-orange-600 px-4 py-3 text-white">
                    <CreditCard className="h-4 w-4" />
                    <p className="text-xs font-bold uppercase tracking-wider">Card charge you do not recognize?</p>
                </div>
                <div className="p-4">
                    <p className="mb-3 text-xs leading-relaxed text-gray-700 dark:text-gray-200">
                        Lock the card in the official bank app, call the number printed on the card, and call 1930 immediately if money was taken.
                    </p>
                    <a href="tel:1930" className="flex items-center justify-center gap-2 rounded-xl bg-red-600 py-2.5 text-sm font-bold text-white hover:bg-red-700">
                        <Phone className="h-4 w-4" />Call 1930 now
                    </a>
                </div>
            </div>

            <nav className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800" aria-label="Article contents">
                <p className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-400">Inside this card fraud guide</p>
                <ol className="space-y-3">
                    {sections.map(([label, href], index) => (
                        <li key={href}>
                            <a href={href} className="flex gap-2 text-xs text-gray-600 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400">
                                <span className="font-bold text-red-500">{index + 1}</span>
                                <span>{label}</span>
                            </a>
                        </li>
                    ))}
                </ol>
            </nav>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
                <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400">
                    <ShieldCheck className="h-4 w-4" />Official help
                </p>
                <div className="space-y-3">
                    {[
                        ['National Cyber Crime Reporting Portal', 'https://cybercrime.gov.in'],
                        ['RBI customer liability circular', 'https://www.rbi.org.in/commonman/Upload/English/Notification/PDFs/NOTI1506072017.PDF'],
                        ['RBI Complaint Management System', 'https://cms.rbi.org.in'],
                        ['RBI card issuance directions', 'https://systemhealth.rbi.org.in/Scripts/BS_ViewMasDirections.aspx_id%3D12300.html'],
                    ].map(([label, href]) => (
                        <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="flex gap-2 text-xs text-indigo-600 hover:text-indigo-800 dark:text-indigo-400">
                            <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                            {label}
                        </a>
                    ))}
                </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
                <p className="mb-2 flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white">
                    <Share2 className="h-4 w-4" />Share the card safety guide
                </p>
                <p className="mb-4 text-xs text-gray-500 dark:text-gray-400">Send the 60 second card lock steps to every card user in your family.</p>
                <div className="grid grid-cols-2 gap-2">
                    <a
                        href={`https://wa.me/?text=${encodeURIComponent(`${title} https://rakshaai.co/blog/credit-card-fraud-india`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg bg-green-500 px-3 py-2 text-center text-xs font-semibold text-white hover:bg-green-600"
                    >
                        WhatsApp
                    </a>
                    <button onClick={share} className="rounded-lg bg-gray-100 px-3 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200">
                        Share
                    </button>
                </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-red-700 to-slate-950 p-5 text-white">
                <p className="mb-2 text-sm font-bold">Check the payment website</p>
                <p className="mb-4 text-xs text-red-100">A professional payment page can still be a clone. Check an unfamiliar domain before entering card details.</p>
                <Link href="/website-safety-checker" className="inline-flex rounded-lg bg-white px-4 py-2 text-xs font-bold text-red-700">
                    Check the website
                </Link>
            </div>
        </aside>
    )
}
