import Link from 'next/link'
import DefaultLayout from '@/components/DefaultLayout'
import { AlertTriangle, Home, Shield, Phone, CreditCard, Globe, BookOpen, FileText } from 'lucide-react'

export default function NotFound() {
    return (
        <DefaultLayout>
            <div className="min-h-screen flex items-start justify-center px-4 py-16 sm:py-24">
                <div className="w-full max-w-2xl">

                    <div className="text-center mb-10">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-900/40 mb-6">
                            <AlertTriangle className="h-8 w-8 text-amber-600 dark:text-amber-400" />
                        </div>
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-3">
                            Page not found
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-md mx-auto">
                            The page you are looking for may have moved, expired, or the link may be incorrect.
                        </p>
                    </div>

                    <div className="rounded-xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30 p-4 mb-8 text-sm text-amber-800 dark:text-amber-300 leading-relaxed">
                        <strong>Safety note:</strong> If you reached this page from a suspicious link, avoid entering personal details and verify the website before paying.
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                        {[
                            { href: '/', icon: Home, label: 'Home', desc: 'Return to the homepage' },
                            { href: '/check', icon: Shield, label: 'Scam checker', desc: 'Check any website, UPI, or number' },
                            { href: '/website-safety-checker', icon: Globe, label: 'Website safety checker', desc: 'Verify a website before you pay' },
                            { href: '/upi-id-checker', icon: CreditCard, label: 'UPI ID checker', desc: 'Check a UPI ID for fraud reports' },
                            { href: '/phone-number-checker', icon: Phone, label: 'Phone number checker', desc: 'Check a number for scam reports' },
                            { href: '/blog', icon: BookOpen, label: 'Scam prevention guides', desc: 'Learn how Indian scams work' },
                            { href: '/report-correction', icon: FileText, label: 'Report correction', desc: 'Dispute an incorrect report' },
                        ].map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-sm transition-all group"
                            >
                                <div className="flex-shrink-0 p-2 rounded-lg bg-indigo-50 dark:bg-indigo-900/40 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/70 transition-colors">
                                    <item.icon className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                                </div>
                                <div className="min-w-0">
                                    <div className="text-sm font-semibold text-gray-900 dark:text-white truncate">{item.label}</div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400 truncate">{item.desc}</div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <p className="text-center text-xs text-gray-400 dark:text-gray-500">
                        RakshaAI is a private platform by Ehatech Services Pvt. Ltd.  not affiliated with any government body.
                    </p>
                </div>
            </div>
        </DefaultLayout>
    )
}
