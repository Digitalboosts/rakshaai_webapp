'use client'

import Link from 'next/link'
import { BookOpenCheck, ExternalLink, Phone, Share2, ShieldCheck } from 'lucide-react'

interface Props {
    title: string
    description: string
}

export default function SidebarStudentCyberSafety({ title, description }: Props) {
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
        ['Why students are vulnerable', '#why-students-vulnerable'],
        ['7 student scams in 2026', '#seven-student-scams'],
        ['Real cases reported in India', '#real-student-cases'],
        ['8 digital safety rules', '#eight-safety-rules'],
        ['If you are afraid to tell anyone', '#tell-someone'],
        ['Frequently asked questions', '#frequently-asked-questions'],
        ['30 second reel script', '#instagram-reel-script'],
        ['Sources and methodology', '#sources'],
    ]

    return (
        <aside className="space-y-5">
            <div className="overflow-hidden rounded-2xl border-2 border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950/30">
                <div className="flex items-center gap-2 bg-red-600 px-4 py-3 text-white">
                    <Phone className="h-4 w-4" />
                    <p className="text-xs font-bold uppercase tracking-wider">Paid a scammer? Act now</p>
                </div>
                <div className="space-y-3 p-4">
                    <p className="text-xs leading-relaxed text-gray-700 dark:text-gray-200">Call 1930, contact your bank, preserve every chat and payment record, then file at cybercrime.gov.in.</p>
                    <a href="tel:1930" className="flex w-full items-center justify-center rounded-lg bg-red-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-red-700">Call 1930</a>
                </div>
            </div>

            <nav className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800" aria-label="Article contents">
                <p className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-400">Inside this student safety guide</p>
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
                <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400"><BookOpenCheck className="h-4 w-4" />Student verification links</p>
                <div className="space-y-3">
                    {[
                        ['National Cyber Crime Reporting Portal', 'https://cybercrime.gov.in'],
                        ['Internshala applicant safety tips', 'https://internshala.com/safety_tips'],
                        ['Prime Minister Internship Scheme', 'https://pminternship.mca.gov.in'],
                        ['National Scholarship Portal', 'https://scholarships.gov.in'],
                        ['Tele MANAS mental health support', 'https://telemanas.mohfw.gov.in'],
                    ].map(([label, href]) => (
                        <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="flex gap-2 text-xs text-indigo-600 hover:text-indigo-800 dark:text-indigo-400">
                            <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                            {label}
                        </a>
                    ))}
                </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
                <p className="mb-2 flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white"><Share2 className="h-4 w-4" />Share with your college group</p>
                <p className="mb-4 text-xs text-gray-500 dark:text-gray-400">Send the seven scams and eight rules to students, parents, mentors, and placement cells.</p>
                <div className="grid grid-cols-2 gap-2">
                    <a href={`https://wa.me/?text=${encodeURIComponent(`${title} https://rakshaai.co/blog/cyber-safety-students-india`)}`} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-green-500 px-3 py-2 text-center text-xs font-semibold text-white hover:bg-green-600">WhatsApp</a>
                    <button onClick={share} className="rounded-lg bg-gray-100 px-3 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200">Share</button>
                </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-indigo-700 to-slate-950 p-5 text-white">
                <p className="mb-2 flex items-center gap-2 text-sm font-bold"><ShieldCheck className="h-4 w-4" />Check before you reply</p>
                <p className="mb-4 text-xs text-indigo-100">Search a suspicious recruiter, landlord, task sender, or placement caller before you call back or pay.</p>
                <Link href="/phone-number-checker" className="inline-flex rounded-lg bg-white px-4 py-2 text-xs font-bold text-indigo-700">Check the phone number</Link>
            </div>
        </aside>
    )
}
