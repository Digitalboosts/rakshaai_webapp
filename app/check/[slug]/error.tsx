'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { AlertTriangle, RefreshCw } from 'lucide-react'

interface ErrorProps {
    error: Error & { digest?: string }
    reset: () => void
}

export default function CheckReportError({ error, reset }: ErrorProps) {
    useEffect(() => {
        if (process.env.NODE_ENV === 'development') {
            console.error('[check/[slug] error boundary]', error)
        }
    }, [error])

    return (
        <div className="min-h-screen flex items-start justify-center px-4 py-16 bg-gray-50 dark:bg-gray-900">
            <div className="w-full max-w-lg text-center">

                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-amber-100 dark:bg-amber-900/40 mb-5">
                    <AlertTriangle className="h-7 w-7 text-amber-600 dark:text-amber-400" />
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    Report could not be loaded
                </h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-2 max-w-sm mx-auto">
                    We could not load this report right now. This does not mean the website, phone number, or UPI ID is safe.
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-7 max-w-sm mx-auto">
                    Try again or verify independently before taking action.
                </p>

                <button
                    onClick={reset}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-colors text-sm mb-7"
                >
                    <RefreshCw className="h-4 w-4" />
                    Try again
                </button>

                <div className="flex flex-wrap justify-center gap-2 text-sm">
                    {[
                        { href: '/check', label: 'Scam Checker' },
                        { href: '/website-safety-checker', label: 'Website Checker' },
                        { href: '/upi-id-checker', label: 'UPI Checker' },
                        { href: '/phone-number-checker', label: 'Phone Checker' },
                        { href: '/report-correction', label: 'Report Correction' },
                        { href: '/contact', label: 'Contact' },
                    ].map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:border-indigo-300 dark:hover:border-indigo-700 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
