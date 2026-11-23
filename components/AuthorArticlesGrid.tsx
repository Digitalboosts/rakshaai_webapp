'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef } from 'react'
import { Calendar, Clock, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import type { BlogPost } from '@/lib/blog/posts'

const POSTS_PER_PAGE = 10

function getPaginationRange(current: number, total: number): (number | '...')[] {
    if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1)
    if (current <= 4) return [1, 2, 3, 4, 5, '...', total]
    if (current >= total - 3) return [1, '...', total - 4, total - 3, total - 2, total - 1, total]
    return [1, '...', current - 1, current, current + 1, '...', total]
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
        <nav aria-label="Articles pagination" className="flex items-center justify-center gap-1 mt-10">
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

interface Props {
    posts: BlogPost[]
}

export default function AuthorArticlesGrid({ posts }: Props) {
    const [currentPage, setCurrentPage] = useState(1)
    const gridTopRef = useRef<HTMLDivElement>(null)

    const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)
    const pageStart = (currentPage - 1) * POSTS_PER_PAGE
    const pagePosts = posts.slice(pageStart, pageStart + POSTS_PER_PAGE)

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
        gridTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <div ref={gridTopRef} className="scroll-mt-8">
            <div className="flex items-end justify-between mb-10">
                <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">Writing</p>
                    <h2 id="articles-heading" className="text-2xl font-extrabold text-gray-900 dark:text-white">
                        Published articles
                    </h2>
                </div>
                <div className="flex items-center gap-4">
                    {totalPages > 1 && (
                        <span className="text-xs text-gray-400 dark:text-gray-500">
                            Page {currentPage} of {totalPages}
                        </span>
                    )}
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                    >
                        View all
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {pagePosts.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                        <article className="h-full rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden hover:border-indigo-200 dark:hover:border-indigo-800 hover:shadow-lg transition-all duration-200 flex flex-col">

                            <div className="relative h-48 overflow-hidden flex-shrink-0">
                                <Image
                                    src={post.heroImage}
                                    alt={post.heroImageAlt}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
                                    {post.tags.slice(0, 2).map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-[10px] font-semibold border border-white/20"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col flex-1 p-5">
                                <h3 className="text-sm font-bold text-gray-900 dark:text-white leading-snug mb-2 line-clamp-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3 flex-1">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 text-xs text-gray-400 dark:text-gray-500">
                                    <div className="flex items-center gap-3">
                                        <span className="inline-flex items-center gap-1">
                                            <Calendar className="h-3 w-3" aria-hidden="true" />
                                            {new Date(post.publishedAt).toLocaleDateString('en-IN', {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric',
                                            })}
                                        </span>
                                        <span className="inline-flex items-center gap-1">
                                            <Clock className="h-3 w-3" aria-hidden="true" />
                                            {post.readTime}
                                        </span>
                                    </div>
                                    <span className="inline-flex items-center gap-1 font-semibold text-indigo-600 dark:text-indigo-400 group-hover:gap-2 transition-all">
                                        Read
                                        <ArrowRight className="h-3 w-3" aria-hidden="true" />
                                    </span>
                                </div>
                            </div>
                        </article>
                    </Link>
                ))}
            </div>

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
    )
}
