'use client'

import Link from 'next/link'
import { Building2, ExternalLink, Phone, Share2, ShieldCheck } from 'lucide-react'

interface Props {
    title: string
    description: string
}

export default function SidebarRealEstateScam({ title, description }: Props) {
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
        ['Why property fraud is high stakes', '#why-property-fraud-is-high-stakes'],
        ['6 real estate scam types', '#six-real-estate-scam-types'],
        ['Verify a property deal', '#how-to-verify-property-india'],
        ['RERA and buyer rights', '#rera-homebuyer-rights'],
        ['Real Indian cases', '#real-estate-scam-cases'],
        ['If you already paid', '#already-paid'],
        ['30 second reel script', '#instagram-reel-script'],
        ['Frequently asked questions', '#frequently-asked-questions'],
        ['Sources and credits', '#sources-and-credits'],
    ]

    return (
        <aside className="space-y-5">
            <div className="overflow-hidden rounded-2xl border-2 border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950/30">
                <div className="flex items-center gap-2 bg-gradient-to-r from-red-700 to-amber-600 px-4 py-3 text-white">
                    <Building2 className="h-4 w-4" />
                    <p className="text-xs font-bold uppercase tracking-wider">About to pay a property advance?</p>
                </div>
                <div className="p-4">
                    <p className="text-xs leading-relaxed text-gray-700 dark:text-gray-200">
                        Stop until the title, encumbrance record, approvals, seller identity and state RERA entry have been independently checked.
                    </p>
                </div>
            </div>

            <nav className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800" aria-label="Article contents">
                <p className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-400">Inside this property fraud guide</p>
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
                    <ShieldCheck className="h-4 w-4" />Official verification
                </p>
                <div className="space-y-3">
                    {[
                        ['MoHUA list of official state RERA portals', 'https://www.mohua.gov.in/documents/acts-and-policies/rera-YDM4EzMtQWa?pageTitle=Real-Estate-%28Regulation-and-Development%29-Act%2C-2016-%5BRERA%5D'],
                        ['India Code: RERA Act, 2016', 'https://www.indiacode.nic.in/handle/123456789/18875'],
                        ['Government land-record portal directory', 'https://dilrmp.gov.in/dilrmpold/State-RoR-Web'],
                        ['National Cyber Crime Reporting Portal', 'https://cybercrime.gov.in'],
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
                    <Share2 className="h-4 w-4" />Share the property checklist
                </p>
                <p className="mb-4 text-xs text-gray-500 dark:text-gray-400">Send these checks to anyone planning to book a flat or plot.</p>
                <div className="grid grid-cols-2 gap-2">
                    <a
                        href={`https://wa.me/?text=${encodeURIComponent(`${title} https://rakshaai.co/blog/real-estate-scam-india`)}`}
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
                <p className="mb-2 text-sm font-bold">Money already transferred?</p>
                <p className="mb-4 text-xs text-red-100">Call 1930 quickly for an online payment and preserve the agreement, receipt, listing, messages and bank proof.</p>
                <a href="tel:1930" className="mb-2 flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-2 text-xs font-bold text-red-700">
                    <Phone className="h-3.5 w-3.5" />Call 1930
                </a>
                <Link href="/blog/got-scammed-online-india-what-to-do" className="block text-center text-xs font-semibold text-white underline">
                    Open the recovery guide
                </Link>
            </div>
        </aside>
    )
}
