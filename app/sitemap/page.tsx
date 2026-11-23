import type { Metadata } from 'next'
import Link from 'next/link'
import DefaultLayout from '@/components/DefaultLayout'
import { blogPosts } from '@/lib/blog/posts'
import { breadcrumbListSchema, webPageSchema, jsonLd } from '@/lib/seo/schema'
import {
    Shield,
    BookOpen,
    AlertTriangle,
    Globe,
    Info,
    ChevronRight,
    Database,
} from 'lucide-react'

export const revalidate = 3600

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://rakshaai.co'

export const metadata: Metadata = {
    title: 'Sitemap | RakshaAI  All Pages, Top Scammers & Fraud Reports',
    description:
        'Complete sitemap for RakshaAI  scam detection tools, fraud prevention guides, blog articles, and daily top scam reports for India.',
    alternates: {
        canonical: `${SITE_URL}/sitemap`,
    },
    openGraph: {
        title: 'Sitemap | RakshaAI  All Pages, Top Scammers & Fraud Reports',
        description: 'All RakshaAI pages  scam checkers, fraud guides, blog articles, and daily/weekly top scammer UPI IDs for India.',
        url: `${SITE_URL}/sitemap`,
        type: 'website',
        siteName: 'RakshaAI',
    },
    robots: { index: true, follow: true },
}

const schemas = [
    webPageSchema({
        name: 'RakshaAI Sitemap  All Pages and Guides',
        description: 'Complete sitemap for RakshaAI including scam detection tools, fraud prevention guides, and safety resources.',
        url: '/sitemap',
    }),
    breadcrumbListSchema([
        { name: 'Home', url: '/' },
        { name: 'Sitemap', url: '/sitemap' },
    ]),
]

// ── Static link data ──────────────────────────────────────────────────────────

const tools = [
    { href: '/website-safety-checker', label: 'Website Safety Checker', desc: 'Check if any website is a scam or safe' },
    { href: '/phone-number-checker', label: 'Phone Number Checker', desc: 'Verify if a phone number has fraud reports' },
    { href: '/upi-id-checker', label: 'UPI ID Checker', desc: 'Check if a UPI ID has been flagged for fraud' },
    { href: '/check', label: 'Trust Score Checker', desc: 'Get a full trust score for any website' },
]

const scamCategories = [
    { href: '/scams', label: 'All Scam Types' },
    { href: '/scams/upi-fraud', label: 'UPI Fraud' },
    { href: '/scams/upi-fraud/qr-code-scam', label: 'QR Code Scam' },
    { href: '/blog/wrong-transfer-refund-scam-india', label: 'Wrong Transfer Refund Scam' },
    { href: '/scams/upi-fraud/otp-fraud', label: 'OTP & UPI PIN Fraud' },
    { href: '/scams/upi-fraud/collect-request-scam', label: 'Collect Request Scam' },
    { href: '/scams/upi-fraud/fake-payment-screenshot', label: 'Fake UPI Payment Screenshot' },
    { href: '/scams/upi-fraud/digital-arrest-scam', label: 'Digital Arrest UPI Scam' },
    { href: '/scams/upi-fraud/fake-upi-link', label: 'Fake UPI Payment Link' },
    { href: '/scams/upi-fraud/investment-job-fraud', label: 'Investment & Job Fraud via UPI' },
    { href: '/scams/digital-arrest', label: 'Digital Arrest Scam' },
    { href: '/scams/digital-arrest/fake-cbi-scam', label: 'Fake CBI Scam' },
    { href: '/scams/digital-arrest/fake-ed-scam', label: 'Fake ED Scam' },
    { href: '/scams/digital-arrest/fake-trai-scam', label: 'Fake TRAI Scam' },
    { href: '/scams/digital-arrest/fake-customs-scam', label: 'Fake Customs Scam' },
    { href: '/scams/investment-scams', label: 'Investment Scams' },
    { href: '/scams/investment-scams/stock-trading-app-scam', label: 'Stock Trading App Scam' },
    { href: '/scams/investment-scams/telegram-investment-scam', label: 'Telegram Investment Scam' },
    { href: '/scams/phone-scams', label: 'Phone Scams' },
    { href: '/scams/phone-scams/kbc-lottery-scam', label: 'KBC Lottery Scam' },
    { href: '/scams/phone-scams/otp-fraud', label: 'OTP Fraud' },
    { href: '/scams/phone-scams/fake-bank-customer-care', label: 'Fake Bank Customer Care' },
    { href: '/scams/phishing', label: 'Phishing Scams' },
    { href: '/scams/fake-websites', label: 'Fake Websites' },
    { href: '/scams/e-commerce-fraud', label: 'E-Commerce Fraud' },
    { href: '/scams/e-commerce-fraud/fake-online-stores', label: 'Fake Shopping Website Fraud' },
    { href: '/scams/e-commerce-fraud/cod-fraud', label: 'COD Fraud' },
    { href: '/scams/e-commerce-fraud/advance-payment-trap', label: 'Advance Payment Trap' },
    { href: '/scams/e-commerce-fraud/counterfeit-products', label: 'Counterfeit Products Online' },
    { href: '/scams/e-commerce-fraud/social-commerce-scam', label: 'Social Media & WhatsApp Shopping Scam' },
    { href: '/scams/e-commerce-fraud/fake-marketplace-seller', label: 'Fake Seller on Marketplace Fraud' },
    { href: '/scams/e-commerce-fraud/phantom-delivery', label: 'Phantom Delivery Scam' },
    { href: '/scams/crypto-scams', label: 'Crypto Scams' },
    { href: '/scams/romance-scams', label: 'Romance Scams' },
    { href: '/scams/romance-scams/catfishing-india', label: 'Catfishing / Fake Dating Profile Scam' },
    { href: '/scams/romance-scams/army-officer-scam', label: 'Army Officer Romance Scam' },
    { href: '/scams/romance-scams/social-media-romance-scam', label: 'Instagram & Facebook Romance Scam' },
    { href: '/scams/romance-scams/sextortion-india', label: 'Sextortion India' },
    { href: '/scams/loan-fraud', label: 'Loan Fraud' },
    { href: '/scams/job-scams', label: 'Job Scams' },
    { href: '/scams/job-scams/whatsapp-job-scam', label: 'WhatsApp & Telegram Job Offer Scam' },
    { href: '/scams/job-scams/task-scam', label: "Task Scam / 'Like and Earn' Fraud" },
    { href: '/scams/job-scams/advance-fee-job-fraud', label: 'Advance Fee Job Registration Fraud' },
    { href: '/scams/job-scams/fake-job-portal', label: 'Fake Job Portal / Naukri Clone Scam' },
    { href: '/scams/job-scams/fake-company-portal', label: 'Fake Company / Fake HR Portal Scam' },
    { href: '/scams/job-scams/overseas-job-scam', label: 'Overseas Job Scam / Human Trafficking' },
    { href: '/scams/job-scams/influencer-scam', label: 'Influencer & Content Creator Scam' },
    { href: '/scams/job-scams/mlm-pyramid-scam', label: 'MLM / Pyramid Scheme Scam' },
    { href: '/scams/whatsapp-scams', label: 'WhatsApp Scams' },
    { href: '/scams/whatsapp-scams/investment-scam', label: 'WhatsApp Investment Scam' },
    { href: '/scams/whatsapp-scams/job-offer-scam', label: 'WhatsApp Job Offer Scam' },
    { href: '/scams/whatsapp-scams/lottery-scam', label: 'WhatsApp Lottery Scam' },
    { href: '/scams/whatsapp-scams/phishing-links', label: 'WhatsApp Phishing Links' },
]

const resources = [
    { href: '/scam-alerts', label: 'Scam Alerts' },
    { href: '/prevention-tips', label: 'Prevention Tips' },
    { href: '/safety-guide', label: 'Safety Guide' },
    { href: '/emergency', label: 'Emergency  Got Scammed?' },
    { href: '/scam-intelligence', label: 'Scam Intelligence Reports' },
    { href: '/compare/rakshaai-verified-vs-gstin', label: 'RakshaAI Verified vs GSTIN' },
]

const company = [
    { href: '/methodology', label: 'How RakshaAI Works' },
    { href: '/data-sources', label: 'Data Sources' },
    { href: '/editorial-policy', label: 'Editorial Policy' },
    { href: '/report-correction', label: 'Report a Correction' },
    { href: '/trust-certification', label: 'Trust Certification' },
    { href: '/trust-certification/apply', label: 'Apply for Trust Certification' },
    { href: '/trust-certification/how-it-works', label: 'How Trust Certification Works' },
    { href: '/trust-certification/verified-businesses', label: 'Verified Businesses Directory' },
    { href: '/trust-certification/badge-guide', label: 'Badge Display Guide' },
    { href: '/trust-certification/verification-standards', label: 'Verification Standards' },
    { href: '/author/rabinarayan-pradhan', label: 'Author: Rabinarayan Pradhan' },
    { href: '/about', label: 'About RakshaAI' },
    { href: '/contact', label: 'Contact Us' },
    { href: '/faq', label: 'FAQ' },
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms-of-service', label: 'Terms of Service' },
    { href: '/refund-policy', label: 'Refund Policy' },
]

// ── UI helpers ────────────────────────────────────────────────────────────────

function SectionHeading({ icon: Icon, title }: { icon: React.ElementType; title: string }) {
    return (
        <div className="flex items-center gap-3 mb-5 pb-3 border-b border-gray-200 dark:border-gray-700">
            <div className="p-2 bg-indigo-50 dark:bg-indigo-900/40 rounded-lg">
                <Icon className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h2 className="text-base font-bold text-gray-900 dark:text-white">{title}</h2>
        </div>
    )
}

function LinkItem({ href, label, desc }: { href: string; label: string; desc?: string }) {
    return (
        <li>
            <Link
                href={href}
                className="group flex items-start gap-2 text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors leading-snug py-1"
            >
                <ChevronRight className="h-3.5 w-3.5 flex-shrink-0 mt-0.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                <span>
                    <span className="font-medium">{label}</span>
                    {desc && <span className="block text-xs text-gray-500 dark:text-gray-400 mt-0.5">{desc}</span>}
                </span>
            </Link>
        </li>
    )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function SitemapPage() {
    const sortedPosts = [...blogPosts].sort(
        (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )

    const today = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLd(schemas) }}
            />
            <DefaultLayout>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

                    {/* Header */}
                    <div className="mb-12">
                        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-3">
                            Sitemap
                        </p>
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                            All Pages on RakshaAI
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400 text-base max-w-2xl">
                            Every tool, guide, scam category, and article on RakshaAI in one place. India&apos;s free scam detection and fraud prevention platform.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-3 text-xs text-gray-400 dark:text-gray-500">
                            <span>XML Sitemap:</span>
                            <a href="/sitemap.xml" className="text-indigo-500 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors">
                                /sitemap.xml
                            </a>
                            <span className="hidden sm:inline">|</span>
                            <a href="/sitemap_index.xml" className="text-indigo-500 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors">
                                /sitemap_index.xml
                            </a>
                        </div>
                    </div>

                    {/* Static nav grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
                            <SectionHeading icon={Shield} title="Free Safety Tools" />
                            <ul className="space-y-1">
                                {tools.map((t) => (
                                    <LinkItem key={t.href} href={t.href} label={t.label} desc={t.desc} />
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
                            <SectionHeading icon={AlertTriangle} title="Scam Categories" />
                            <ul className="space-y-1">
                                {scamCategories.map((s) => (
                                    <LinkItem key={s.href} href={s.href} label={s.label} />
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-8">
                            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
                                <SectionHeading icon={Globe} title="Safety Resources" />
                                <ul className="space-y-1">
                                    {resources.map((r) => (
                                        <LinkItem key={r.href} href={r.href} label={r.label} />
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
                                <SectionHeading icon={Info} title="Company" />
                                <ul className="space-y-1">
                                    {company.map((c) => (
                                        <LinkItem key={c.href} href={c.href} label={c.label} />
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Website Database card */}
                    <div className="mt-8">
                        <Link
                            href="/sitemap/websites"
                            className="group flex items-center justify-between bg-white dark:bg-gray-800 rounded-2xl border border-indigo-100 dark:border-indigo-800/50 p-6 hover:border-indigo-300 dark:hover:border-indigo-600 hover:shadow-md transition-all"
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-indigo-50 dark:bg-indigo-900/40 rounded-xl">
                                    <Database className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                                </div>
                                <div>
                                    <p className="text-base font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                        All Checked Websites
                                    </p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                                        Browse every website RakshaAI has ever scanned  with trust scores and fraud reports
                                    </p>
                                </div>
                            </div>
                            <ChevronRight className="flex-none h-5 w-5 text-gray-300 dark:text-gray-600 group-hover:text-indigo-500 transition-colors" />
                        </Link>
                    </div>

                    {/* Blog Articles */}
                    <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
                        <SectionHeading icon={BookOpen} title="Blog  Scam Prevention Guides" />
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8">
                            {sortedPosts.map((post) => (
                                <LinkItem
                                    key={post.slug}
                                    href={`/blog/${post.slug}`}
                                    label={post.title}
                                    desc={post.tags.slice(0, 2).join(' · ')}
                                />
                            ))}
                        </div>
                    </div>



                    {/* Bottom note */}
                    <p className="mt-10 text-center text-xs text-gray-400 dark:text-gray-600">
                        For search engines:{' '}
                        <a href="/sitemap.xml" className="hover:text-indigo-500 transition-colors">/sitemap.xml</a>
                        {' '}and{' '}
                        <a href="/sitemap_index.xml" className="hover:text-indigo-500 transition-colors">/sitemap_index.xml</a>
                        {' '}are available. Last updated: {today}
                    </p>

                </div>
            </DefaultLayout>
        </>
    )
}
