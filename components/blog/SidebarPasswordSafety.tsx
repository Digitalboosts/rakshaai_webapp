'use client'

import Link from 'next/link'
import { ExternalLink, KeyRound, Phone, Share2, ShieldCheck } from 'lucide-react'

interface Props {
    title: string
    description: string
}

export default function SidebarPasswordSafety({ title, description }: Props) {
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
        ['India password problem', '#password-problem-india'],
        ['Passwords attackers try first', '#common-indian-passwords'],
        ['How passwords are stolen', '#how-passwords-stolen'],
        ['Real Indian cases', '#real-password-cases-india'],
        ['Build a strong password', '#strong-password-india'],
        ['Enable two-factor authentication', '#two-factor-authentication-india'],
        ['Free password managers', '#password-managers-india'],
        ['Account hacked response', '#account-hacked-response'],
        ['30 second Reel script', '#instagram-reel-script'],
        ['Frequently asked questions', '#frequently-asked-questions'],
        ['Sources and credits', '#sources-and-credits'],
    ]

    return (
        <aside className="space-y-5">
            <div className="overflow-hidden rounded-2xl border-2 border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950/30">
                <div className="flex items-center gap-2 bg-gradient-to-r from-red-700 to-slate-900 px-4 py-3 text-white">
                    <KeyRound className="h-4 w-4" />
                    <p className="text-xs font-bold uppercase tracking-wider">Secure email first</p>
                </div>
                <div className="p-4">
                    <p className="text-xs leading-relaxed text-gray-700 dark:text-gray-200">Your email can reset many other accounts. Give it a long unique password, strong 2FA and current recovery details.</p>
                </div>
            </div>

            <nav className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800" aria-label="Article contents">
                <p className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-400">Inside this password safety guide</p>
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
                <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400"><ShieldCheck className="h-4 w-4" />Trusted security tools</p>
                <div className="space-y-3">
                    {[
                        ['Check an email breach', 'https://haveibeenpwned.com/'],
                        ['Bitwarden free plan', 'https://bitwarden.com/pricing/'],
                        ['CERT-In password advisory', 'https://www.cert-in.org.in/s2cMainServlet?VLCODE=CIAD-2022-0026&pageid=PUBVLNOTES02'],
                        ['NIST password guidance', 'https://www.nist.gov/cybersecurity-and-privacy/how-do-i-create-good-password'],
                    ].map(([label, href]) => (
                        <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="flex gap-2 text-xs text-indigo-600 hover:text-indigo-800 dark:text-indigo-400">
                            <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0" />{label}
                        </a>
                    ))}
                </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
                <p className="mb-2 flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white"><Share2 className="h-4 w-4" />Share the password checklist</p>
                <p className="mb-4 text-xs text-gray-500 dark:text-gray-400">Send this guide to every family member with an email account.</p>
                <div className="grid grid-cols-2 gap-2">
                    <a href={`https://wa.me/?text=${encodeURIComponent(`${title} https://rakshaai.co/blog/password-safety-india`)}`} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-green-500 px-3 py-2 text-center text-xs font-semibold text-white hover:bg-green-600">WhatsApp</a>
                    <button onClick={share} className="rounded-lg bg-gray-100 px-3 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200">Share</button>
                </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-indigo-700 to-slate-950 p-5 text-white">
                <p className="mb-2 text-sm font-bold">Money or bank access affected?</p>
                <p className="mb-4 text-xs text-indigo-100">Call 1930 quickly, contact the bank and save login alerts, messages, transaction references and device details.</p>
                <a href="tel:1930" className="mb-2 flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-2 text-xs font-bold text-indigo-700"><Phone className="h-3.5 w-3.5" />Call 1930</a>
                <Link href="/blog/bank-account-fraud-india" className="block text-center text-xs font-semibold text-white underline">Open the bank fraud response guide</Link>
            </div>
        </aside>
    )
}
