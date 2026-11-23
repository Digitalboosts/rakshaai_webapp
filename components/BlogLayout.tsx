"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowLeft, Share2, ArrowUpRight, AlertTriangle, Phone, Shield, ChevronRight, ExternalLink, RefreshCw } from 'lucide-react'
import DefaultLayout from './DefaultLayout'
import { ReactNode } from 'react'
import { getRelatedPosts, blogPosts } from '@/lib/blog/posts'

const HUB_MAP: Record<string, { href: string; label: string }> = {
    'upi-fraud':            { href: '/scams/upi-fraud',        label: 'UPI Fraud Guide' },
    'digital-arrest':       { href: '/scams/digital-arrest',   label: 'Digital Arrest Guide' },
    'job-scams':            { href: '/scams/job-scams',        label: 'Job Scam Guide' },
    'fake-websites':        { href: '/scams/fake-websites',    label: 'Fake Website Guide' },
    'phone-scams':          { href: '/scams/phone-scams',      label: 'Phone Scam Guide' },
    'investment-scams':     { href: '/scams/investment-scams', label: 'Investment Scam Guide' },
    'e-commerce-fraud':     { href: '/scams/e-commerce-fraud', label: 'E-Commerce Fraud Guide' },
    'business-verification': { href: '/trust-certification',   label: 'Business Verification Guide' },
    'cybercrime-reporting': { href: '/safety-guide',           label: 'Online Safety Guide' },
}

function DefaultSidebar() {
    return (
        <aside className="space-y-6">
            <div className="rounded-2xl border-2 border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/40 overflow-hidden">
                <div className="bg-red-500 px-4 py-3 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-white flex-shrink-0" />
                    <p className="text-white text-xs font-bold uppercase tracking-wider">Got scammed? Act now</p>
                </div>
                <div className="p-4 space-y-2.5">
                    {['Call 1930 immediately', 'Contact your bank', 'Screenshot all evidence', 'Tell your family', 'File at cybercrime.gov.in'].map((step, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
                            <span className="text-sm font-medium text-gray-800 dark:text-gray-200 leading-snug">{step}</span>
                        </div>
                    ))}
                    <a href="tel:1930" className="mt-3 flex items-center justify-center gap-2 w-full py-2.5 bg-red-500 hover:bg-red-600 text-white text-sm font-bold rounded-xl transition-colors">
                        <Phone className="h-4 w-4" />
                        Call 1930 Now
                    </a>
                </div>
            </div>
            <div className="rounded-2xl border border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/60 dark:to-purple-950/60 p-5">
                <div className="flex items-center gap-2 mb-3">
                    <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                        <Shield className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">Free Scam Checker</p>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-4">Check any phone number, URL, or UPI ID instantly. No sign-up, results in under 5 seconds.</p>
                <Link href="/check" className="flex items-center justify-center gap-2 w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl transition-colors">
                    Check for Scams <ChevronRight className="h-4 w-4" />
                </Link>
            </div>
            <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3">Official Resources</p>
                <div className="space-y-2.5">
                    {[{ label: 'cybercrime.gov.in', href: 'https://cybercrime.gov.in' }, { label: 'MHA Cyber Safety', href: 'https://www.mha.gov.in' }].map((link) => (
                        <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-xs text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors leading-snug">
                            <ExternalLink className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" />{link.label}
                        </a>
                    ))}
                </div>
            </div>
        </aside>
    )
}

interface BlogLayoutProps {
    title: string
    description: string
    publishedAt: string
    lastUpdated?: string
    readTime: string
    author: string
    authorUrl?: string
    tags: string[]
    primaryTool?: { label: string; href: string }
    children: ReactNode
    slug: string
    sidebar?: ReactNode
}

const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

const formatDateShort = (dateString: string) => {
    const date = new Date(dateString)
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return `${months[date.getUTCMonth()]} ${date.getUTCDate()}, ${date.getUTCFullYear()}`
}

export default function BlogLayout({
    title,
    description,
    publishedAt,
    lastUpdated,
    readTime,
    author,
    authorUrl,
    primaryTool,
    tags,
    children,
    slug,
    sidebar,
}: BlogLayoutProps) {
    const relatedPosts = getRelatedPosts(slug)
    const postCluster = blogPosts.find(p => p.slug === slug)?.cluster
    const hub = postCluster ? HUB_MAP[postCluster] : undefined

    const handleShare = async () => {
        if (typeof window === 'undefined') return
        if (navigator.share) {
            try { await navigator.share({ title, text: description, url: window.location.href }) }
            catch { /* dismissed */ }
        } else {
            navigator.clipboard.writeText(window.location.href)
        }
    }

    return (
        <DefaultLayout>
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">

                {/* ── Full-width hero header ──────────────────────────────── */}
                <div className="bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border-b border-gray-200 dark:border-gray-700">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                        <div className="flex flex-wrap items-center gap-3 mb-7">
                            <Link
                                href="/blog"
                                className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors text-sm font-medium"
                            >
                                <ArrowLeft className="h-4 w-4" />
                                Back to Blog
                            </Link>
                            {hub && (
                                <>
                                    <span className="text-gray-300 dark:text-gray-600 text-sm">|</span>
                                    <Link
                                        href={hub.href}
                                        className="inline-flex items-center gap-1 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                    >
                                        Part of: {hub.label}
                                        <ChevronRight className="h-3.5 w-3.5" />
                                    </Link>
                                </>
                            )}
                        </div>

                        <header>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {tags.map((tag, i) => (
                                    <span key={i} className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-semibold">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight max-w-4xl">
                                {title}
                            </h1>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-5 leading-relaxed max-w-3xl">
                                {description}
                            </p>

                            <div className="flex flex-wrap items-center gap-5 text-sm text-gray-500 dark:text-gray-400">
                                <div className="flex items-center gap-1.5">
                                    <Calendar className="h-4 w-4" />
                                    <time dateTime={publishedAt}>{formatDate(publishedAt)}</time>
                                </div>
                                {lastUpdated && lastUpdated !== publishedAt && (
                                    <div className="flex items-center gap-1.5">
                                        <RefreshCw className="h-3.5 w-3.5" />
                                        <span>Updated <time dateTime={lastUpdated}>{formatDate(lastUpdated)}</time></span>
                                    </div>
                                )}
                                <div className="flex items-center gap-1.5">
                                    <Clock className="h-4 w-4" />
                                    <span>{readTime} read</span>
                                </div>
                                <span>By{' '}
                                    {authorUrl
                                        ? <Link href={authorUrl} className="font-semibold text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{author}</Link>
                                        : <strong className="text-gray-700 dark:text-gray-300">{author}</strong>
                                    }
                                </span>
                                <button
                                    onClick={handleShare}
                                    className="flex items-center gap-1.5 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                >
                                    <Share2 className="h-4 w-4" />
                                    Share
                                </button>
                            </div>
                        </header>
                    </div>
                </div>

                {/* ── Two-column body ─────────────────────────────────────── */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex flex-col lg:flex-row gap-10 items-start">

                        {/* ── Main article ─────────────────────────── */}
                        <article className="w-full lg:flex-1 min-w-0">
                            <div className="blog-prose">
                                {children}
                            </div>

                            {/* ── More from RakshaAI Blog ─────────────── */}
                            {relatedPosts.length > 0 && (
                                <div className="mt-14">
                                    <div className="flex items-center gap-3 mb-6">
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white whitespace-nowrap">
                                            More from RakshaAI Blog
                                        </h3>
                                        <div className="h-px bg-gradient-to-r from-indigo-400 to-purple-400 flex-1" />
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {relatedPosts.map((post) => (
                                            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                                                <article className="flex gap-4 p-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-md hover:border-indigo-200 dark:hover:border-indigo-800 transition-all duration-200">
                                                    {/* Thumbnail */}
                                                    <div className="relative w-24 h-20 rounded-xl overflow-hidden flex-shrink-0">
                                                        <Image
                                                            src={post.heroImage}
                                                            alt={post.heroImageAlt}
                                                            fill
                                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                            sizes="96px"
                                                        />
                                                    </div>
                                                    {/* Content */}
                                                    <div className="flex flex-col justify-between min-w-0 flex-1">
                                                        <div>
                                                            <span className="text-[10px] font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                                                                {post.tags[0]}
                                                            </span>
                                                            <h4 className="text-sm font-bold text-gray-900 dark:text-white leading-snug mt-0.5 line-clamp-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                                                {post.title}
                                                            </h4>
                                                        </div>
                                                        <div className="flex items-center justify-between mt-1.5">
                                                            <span className="text-[11px] text-gray-400 dark:text-gray-500 flex items-center gap-1">
                                                                <Calendar className="h-3 w-3" />
                                                                {formatDateShort(post.publishedAt)}
                                                            </span>
                                                            <ArrowUpRight className="h-3.5 w-3.5 text-gray-300 dark:text-gray-600 group-hover:text-indigo-500 transition-colors" />
                                                        </div>
                                                    </div>
                                                </article>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* ── Bottom CTA ───────────────────────────── */}
                            <div className="mt-10 rounded-2xl bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950 dark:to-blue-950 border border-indigo-200 dark:border-indigo-800 p-7">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                    Stay Protected Online
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mb-5">
                                    Use RakshaAI to check websites, phone numbers, and UPI IDs for scams  free, instant, no sign-up required.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <Link
                                        href={primaryTool?.href ?? '/check'}
                                        className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-colors text-sm"
                                    >
                                        {primaryTool?.label ?? 'Check for Scams Now'}
                                    </Link>
                                    <Link
                                        href="/data-sources"
                                        className="inline-flex items-center justify-center px-6 py-3 border border-indigo-300 dark:border-indigo-600 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950 font-semibold rounded-xl transition-colors text-sm"
                                    >
                                        How We Check
                                    </Link>
                                </div>
                                <p className="text-xs text-gray-400 dark:text-gray-500 mt-4">
                                    RakshaAI is a private platform by Ehatech Services Pvt. Ltd. Not affiliated with any government body.{' '}
                                    <Link href="/editorial-policy" className="hover:underline">Editorial policy</Link>
                                </p>
                            </div>
                        </article>

                        {/* ── Sticky sidebar ───────────────────────── */}
                        <div className="w-full lg:w-[340px] xl:w-[360px] flex-shrink-0 lg:sticky lg:top-24 lg:self-start">
                            {sidebar ?? <DefaultSidebar />}
                        </div>

                    </div>
                </div>

            </div>
        </DefaultLayout>
    )
}
