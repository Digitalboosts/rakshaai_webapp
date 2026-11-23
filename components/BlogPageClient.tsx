'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef } from 'react'
import DefaultLayout from '@/components/DefaultLayout'
import { Calendar, ArrowUpRight, Shield, Clock, ChevronLeft, ChevronRight } from 'lucide-react'
import { blogPosts, type BlogPost } from '@/lib/blog/posts'

const POSTS_PER_PAGE = 10
const PINNED_POST_SLUG = 'cyber-hygiene-india'

const sortPostsForDisplay = (posts: BlogPost[]) =>
    [...posts].sort((a, b) => {
        if (a.slug === PINNED_POST_SLUG) return -1
        if (b.slug === PINNED_POST_SLUG) return 1
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    })

const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return `${months[date.getUTCMonth()]} ${date.getUTCDate()}, ${date.getUTCFullYear()}`
}

function getPaginationRange(current: number, total: number): (number | '...')[] {
    if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1)
    if (current <= 4) return [1, 2, 3, 4, 5, '...', total]
    if (current >= total - 3) return [1, '...', total - 4, total - 3, total - 2, total - 1, total]
    return [1, '...', current - 1, current, current + 1, '...', total]
}

function HeroCard({ post }: { post: BlogPost }) {
    return (
        <Link href={`/blog/${post.slug}`} className="group block">
            <article className="relative w-full h-[420px] sm:h-[480px] rounded-2xl overflow-hidden cursor-pointer">
                <Image
                    src={post.heroImage}
                    alt={post.heroImageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 100vw, 900px"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/5" />

                <div className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <ArrowUpRight className="h-4 w-4 text-white" />
                </div>

                <div className="absolute top-5 left-5">
                    <span className="px-3 py-1 bg-indigo-600 text-white rounded-full text-[11px] font-bold uppercase tracking-wider">
                        Latest
                    </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.slice(0, 2).map((tag, i) => (
                            <span key={i} className="px-2.5 py-0.5 bg-white/15 backdrop-blur-sm text-white rounded-full text-[11px] font-medium border border-white/20">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-snug mb-4 max-w-2xl group-hover:text-indigo-200 transition-colors">
                        {post.title}
                    </h2>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0">
                            <Shield className="h-3.5 w-3.5 text-white" />
                        </div>
                        <div className="flex items-center gap-3 text-xs text-white/70">
                            <span className="font-medium text-white/90">{post.author}</span>
                            <span className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {formatDate(post.publishedAt)}
                            </span>
                            <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {post.readTime} read
                            </span>
                        </div>
                    </div>
                </div>
            </article>
        </Link>
    )
}

function SmallCard({ post }: { post: BlogPost }) {
    return (
        <Link href={`/blog/${post.slug}`} className="group block">
            <article className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200 h-full flex flex-col">
                <div className="relative h-44 overflow-hidden flex-shrink-0">
                    <Image
                        src={post.heroImage}
                        alt={post.heroImageAlt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="p-4 sm:p-5 flex flex-col flex-1">
                    <div className="mb-2.5">
                        <span className="px-2 py-0.5 bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 rounded-full text-[11px] font-semibold border border-indigo-100 dark:border-indigo-800/60">
                            {post.tags[0]}
                        </span>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white leading-snug mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2 flex-1">
                        {post.title}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2 mb-4">
                        {post.description}
                    </p>
                    <div className="flex items-center gap-2 mt-auto pt-3 border-t border-gray-100 dark:border-gray-700/60">
                        <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0">
                            <Shield className="h-3 w-3 text-white" />
                        </div>
                        <div className="flex items-center gap-2 text-[11px] text-gray-400 dark:text-gray-500 min-w-0">
                            <span className="font-medium text-gray-600 dark:text-gray-400 truncate">{post.author}</span>
                            <span>·</span>
                            <span className="flex items-center gap-0.5 flex-shrink-0">
                                <Calendar className="h-2.5 w-2.5" />
                                {formatDate(post.publishedAt)}
                            </span>
                        </div>
                        <ArrowUpRight className="h-3.5 w-3.5 text-gray-300 dark:text-gray-600 group-hover:text-indigo-500 transition-colors ml-auto flex-shrink-0" />
                    </div>
                </div>
            </article>
        </Link>
    )
}

function Pagination({
    currentPage,
    totalPages,
    onPageChange,
}: {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
}) {
    if (totalPages <= 1) return null
    const pages = getPaginationRange(currentPage, totalPages)

    return (
        <nav aria-label="Blog pagination" className="flex items-center justify-center gap-1 mt-8">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center gap-1 px-3 py-2 text-xs font-semibold rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                aria-label="Previous page"
            >
                <ChevronLeft className="h-3.5 w-3.5" />
                Prev
            </button>

            <div className="flex items-center gap-1">
                {pages.map((page, i) =>
                    page === '...' ? (
                        <span key={`ellipsis-${i}`} className="w-8 text-center text-xs text-gray-400 dark:text-gray-500">
                            ...
                        </span>
                    ) : (
                        <button
                            key={page}
                            onClick={() => onPageChange(page as number)}
                            aria-label={`Page ${page}`}
                            aria-current={page === currentPage ? 'page' : undefined}
                            className={`w-8 h-8 flex items-center justify-center rounded-lg text-xs font-semibold transition-colors ${
                                page === currentPage
                                    ? 'bg-indigo-600 text-white'
                                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                            }`}
                        >
                            {page}
                        </button>
                    )
                )}
            </div>

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center gap-1 px-3 py-2 text-xs font-semibold rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                aria-label="Next page"
            >
                Next
                <ChevronRight className="h-3.5 w-3.5" />
            </button>
        </nav>
    )
}

export default function BlogPageClient() {
    const [currentPage, setCurrentPage] = useState(1)
    const postsTopRef = useRef<HTMLDivElement>(null)

    const sorted = sortPostsForDisplay(blogPosts)
    const totalPages = Math.ceil(sorted.length / POSTS_PER_PAGE)

    const pageStart = (currentPage - 1) * POSTS_PER_PAGE
    const pagePosts = sorted.slice(pageStart, pageStart + POSTS_PER_PAGE)
    const heroPost = currentPage === 1 ? pagePosts[0] : null
    const gridPosts = currentPage === 1 ? pagePosts.slice(1) : pagePosts

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
        postsTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <DefaultLayout>
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">

                <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
                        <p className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-1">RakshaAI Blog</p>
                        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-2">
                            Scam Prevention and Trust Intelligence
                        </h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-2xl">
                            Consumer safety guides remain at the heart of the blog. A second technology and business track explains the infrastructure behind modern fraud detection.
                        </p>
                        <div className="mt-6 grid gap-4 md:grid-cols-2">
                            <section className="rounded-2xl border border-indigo-100 bg-indigo-50/70 p-5 dark:border-indigo-900 dark:bg-indigo-950/30">
                                <p className="text-xs font-black uppercase tracking-widest text-indigo-700 dark:text-indigo-300">Consumer SEO</p>
                                <h2 className="mt-2 text-lg font-extrabold text-gray-950 dark:text-white">Scam safety guides</h2>
                                <p className="mt-2 text-xs leading-5 text-gray-600 dark:text-gray-300">Practical help for fake websites, UPI fraud, digital arrest, job scams, WhatsApp scams and recovery.</p>
                                <div className="mt-4 flex flex-wrap gap-2">{[
                                    { label: 'Fake Websites', href: '/blog/how-to-check-fake-website-india' },
                                    { label: 'UPI Fraud', href: '/blog/upi-scam-india-2026' },
                                    { label: 'WhatsApp Scams', href: '/blog/whatsapp-scam-india' },
                                    { label: 'Recovery', href: '/blog/recover-money-online-fraud-india' },
                                ].map((cluster) => <Link key={cluster.href} href={cluster.href} className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-indigo-700 shadow-sm dark:bg-gray-900 dark:text-indigo-300">{cluster.label}</Link>)}</div>
                            </section>
                            <section className="rounded-2xl border border-cyan-100 bg-cyan-50/70 p-5 dark:border-cyan-900 dark:bg-cyan-950/20">
                                <p className="text-xs font-black uppercase tracking-widest text-cyan-800 dark:text-cyan-300">Technology and B2B</p>
                                <h2 className="mt-2 text-lg font-extrabold text-gray-950 dark:text-white">Fraud intelligence research</h2>
                                <p className="mt-2 text-xs leading-5 text-gray-600 dark:text-gray-300">Explore domain intelligence, document detection, evaluation, APIs and trust infrastructure as this research track grows.</p>
                                <div className="mt-4 flex flex-wrap gap-2">{[
                                    { label: 'Trust Engine', href: '/technology' },
                                    { label: 'Methodology', href: '/methodology' },
                                    { label: 'Detection Benchmark', href: '/technology#benchmark' },
                                    { label: 'API', href: '/api' },
                                ].map((cluster) => <Link key={cluster.href} href={cluster.href} className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-cyan-800 shadow-sm dark:bg-gray-900 dark:text-cyan-300">{cluster.label}</Link>)}</div>
                            </section>
                        </div>
                    </div>
                </div>

                <div ref={postsTopRef} className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-10 space-y-8 scroll-mt-4">

                    {heroPost && <HeroCard post={heroPost} />}

                    {gridPosts.length > 0 && (
                        <div>
                            <div className="flex items-center justify-between mb-5">
                                <div className="flex items-center gap-3">
                                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                                        {currentPage === 1 ? 'More Articles' : `Page ${currentPage} of ${totalPages}`}
                                    </span>
                                    <div className="h-px bg-gray-200 dark:bg-gray-700 w-16" />
                                </div>
                                {totalPages > 1 && (
                                    <span className="text-xs text-gray-400 dark:text-gray-500">
                                        {sorted.length} articles total
                                    </span>
                                )}
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                                {gridPosts.map((post) => (
                                    <SmallCard key={post.slug} post={post} />
                                ))}
                            </div>
                        </div>
                    )}

                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />

                    {/* Full article index: every post gets a server-rendered link,
                        independent of the client-side pagination state */}
                    <section aria-labelledby="all-guides-heading" className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 sm:p-7">
                        <h2 id="all-guides-heading" className="text-sm font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
                            All Scam Prevention Guides
                        </h2>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 list-none m-0 p-0">
                            {sorted.map((post) => (
                                <li key={post.slug} className="m-0 p-0">
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="block text-sm text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors py-1 leading-snug"
                                    >
                                        {post.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 p-7 sm:p-8 text-center">
                        <h3 className="text-xl font-bold text-white mb-2">
                            Got a suspicious call, link, or payment request?
                        </h3>
                        <p className="text-indigo-100 text-sm mb-5 max-w-md mx-auto">
                            Check any phone number, website, or UPI ID instantly. Free, no sign-up, results in under 5 seconds.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Link
                                href="/phone-number-checker"
                                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white hover:bg-gray-50 text-indigo-600 font-semibold rounded-xl transition-colors text-sm"
                            >
                                <Shield className="h-4 w-4" />
                                Check a Phone Number
                            </Link>
                            <Link
                                href="/website-safety-checker"
                                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white hover:bg-gray-50 text-indigo-600 font-semibold rounded-xl transition-colors text-sm"
                            >
                                <Shield className="h-4 w-4" />
                                Check a Website
                            </Link>
                            <Link
                                href="/upi-id-checker"
                                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-white/30 hover:bg-white/10 text-white font-semibold rounded-xl transition-colors text-sm"
                            >
                                Check a UPI ID
                                <ArrowUpRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </DefaultLayout>
    )
}
