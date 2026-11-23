'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { AlertCircle, RefreshCw } from 'lucide-react'

interface ErrorProps {
    error: Error & { digest?: string }
    reset: () => void
}

export default function GlobalError({ error, reset }: ErrorProps) {
    useEffect(() => {
        if (process.env.NODE_ENV === 'development') {
            console.error('[RakshaAI error boundary]', error)
        }
    }, [error])

    return (
        <div className="min-h-screen flex items-start justify-center px-4 py-16 sm:py-24 bg-gray-50 dark:bg-gray-900">
            <div className="w-full max-w-lg text-center">

                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/40 mb-6">
                    <AlertCircle className="h-8 w-8 text-red-500 dark:text-red-400" />
                </div>

                <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-3">
                    Something went wrong
                </h1>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-8 max-w-sm mx-auto">
                    RakshaAI could not load this page correctly. Please try again or use one of the safety tools below.
                </p>

                <button
                    onClick={reset}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-colors text-sm mb-8"
                >
                    <RefreshCw className="h-4 w-4" />
                    Try again
                </button>

                <div className="flex flex-wrap justify-center gap-3 text-sm">
                    {[
                        { href: '/check', label: 'Scam Checker' },
                        { href: '/website-safety-checker', label: 'Website Checker' },
                        { href: '/upi-id-checker', label: 'UPI Checker' },
                        { href: '/phone-number-checker', label: 'Phone Checker' },
                        { href: '/contact', label: 'Contact Support' },
                    ].map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:border-indigo-300 dark:hover:border-indigo-700 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
