import type { Metadata } from 'next'
import Link from 'next/link'
import DefaultLayout from '@/components/DefaultLayout'
import WebsitesPageClient from '@/components/WebsitesPageClient'
import { breadcrumbListSchema, webPageSchema, jsonLd } from '@/lib/seo/schema'
import { ChevronLeft } from 'lucide-react'

export const revalidate = 3600

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://rakshaai.co'

export const metadata: Metadata = {
    title: 'All Checked Websites | RakshaAI Website Safety Database',
    description:
        'Browse every website RakshaAI has scanned for fraud. Daily and weekly top searches, trust scores, scam reports, and safety ratings.',
    alternates: { canonical: `${SITE_URL}/sitemap/websites` },
    openGraph: {
        title: 'All Checked Websites | RakshaAI',
        description: 'Complete list of websites scanned by RakshaAI  trust scores and fraud reports for every domain checked by Indian users.',
        url: `${SITE_URL}/sitemap/websites`,
        type: 'website',
        siteName: 'RakshaAI',
    },
    robots: { index: true, follow: true },
}

const schemas = [
    webPageSchema({
        name: 'All Checked Websites  RakshaAI Safety Database',
        description: 'Complete list of websites scanned by RakshaAI for fraud detection and safety rating.',
        url: '/sitemap/websites',
    }),
    breadcrumbListSchema([
        { name: 'Home', url: '/' },
        { name: 'Sitemap', url: '/sitemap' },
        { name: 'All Checked Websites', url: '/sitemap/websites' },
    ]),
]

async function fetchAllWebsites(): Promise<string[]> {
    const BASE = (process.env.NEXT_PUBLIC_BACKEND_API_URL || '').replace(/\/?$/, '/')
    const API_KEY = (process.env.TRUSTFINDER_API_KEY || process.env.BACKEND_API_KEY || '').replace(/^['"]+|['"]+$/g, '')
    if (!BASE) return []

    const headers: Record<string, string> = { 'Content-Type': 'application/json' }
    if (API_KEY) headers['X-API-KEY'] = API_KEY

    try {
        const res = await fetch(`${BASE}trust-data/slugs/`, {
            headers,
            next: { revalidate: 3600 },
        })
        if (!res.ok) return []
        const data = await res.json()
        return data?.slugs ?? []
    } catch {
        return []
    }
}

export default async function WebsitesDatabasePage() {
    const allSlugs = await fetchAllWebsites()

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLd(schemas) }}
            />
            <DefaultLayout>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

                    {/* Back link */}
                    <Link
                        href="/sitemap"
                        className="inline-flex items-center gap-1.5 text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors mb-8"
                    >
                        <ChevronLeft className="h-4 w-4" />
                        back to sitemap overview
                    </Link>

                    {/* Header */}
                    <div className="mb-10">
                        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-3">
                            Website Database
                        </p>
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                            All Checked Websites
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400 text-base max-w-2xl">
                            RakshaAI scans websites entered by users across India and runs them through our trust
                            algorithm to detect fraud, phishing, and scam patterns.
                            {allSlugs.length > 0 && (
                                <span className="ml-1 font-semibold text-indigo-600 dark:text-indigo-400">
                                    {allSlugs.length.toLocaleString('en-IN')} websites checked so far.
                                </span>
                            )}
                        </p>
                    </div>

                    {/* Tabs + list  client component */}
                    <WebsitesPageClient
                        initialSlugs={allSlugs}
                        initialCount={allSlugs.length}
                    />

                    <p className="mt-8 text-center text-xs text-gray-400 dark:text-gray-600">
                        Updated hourly.{' '}
                        <Link href="/website-safety-checker" className="hover:text-indigo-500 transition-colors">
                            Check any website
                        </Link>
                        {' '}to add it to this database.
                    </p>

                </div>
            </DefaultLayout>
        </>
    )
}
