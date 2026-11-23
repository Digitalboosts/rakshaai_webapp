'use client';

import React, { useState } from 'react';
import { Globe, Star, ExternalLink, Calendar, ThumbsUp, ThumbsDown, Search } from 'lucide-react';

export default function OnlineReviewsAcrossWeb({ data, summaryPoints }: { data: any; summaryPoints?: { positive?: string | string[]; negative?: string | string[] } }) {
    const websiteReviews = data?.website_reviews || {};
    const reviews = Array.isArray(websiteReviews.reviews) ? websiteReviews.reviews : [];
    if (!reviews || reviews.length === 0) return null;

    const trust = data?.sectional_status?.public_reputation_trust;
    const totalReviews = websiteReviews?.total_reviews_checked || 50;
    const relatedReviews = websiteReviews?.related_reviews_found || reviews.length;
    const averageRating = websiteReviews?.average_rating || 0;
    const totalNegativeSentiment = websiteReviews?.total_negative_sentiment_reviews || 0;

    // Count positive and negative sentiments
    const positiveCount = reviews.filter((r: any) => r.sentiment?.toLowerCase().includes('positive')).length;
    const negativeCount = reviews.filter((r: any) => r.sentiment?.toLowerCase().includes('negative')).length;

    const [activeTab, setActiveTab] = useState<'all' | 'positive' | 'negative'>('all');

    const filteredReviews = reviews.filter((r: any) => {
        if (activeTab === 'all') return true;
        if (activeTab === 'positive') return r.sentiment?.toLowerCase().includes('positive');
        if (activeTab === 'negative') return r.sentiment?.toLowerCase().includes('negative');
        return true;
    });

    // Helper functions
    const getPlatform = (url: string): { name: string; icon: string; color: string } => {
        const urlLower = url.toLowerCase();
        if (urlLower.includes("reddit.com")) return { name: "Reddit", icon: "🤖", color: "from-orange-500 to-red-600" };
        if (urlLower.includes("trustpilot.com")) return { name: "Trustpilot", icon: "⭐", color: "from-green-500 to-teal-600" };
        if (urlLower.includes("facebook.com")) return { name: "Facebook", icon: "👥", color: "from-blue-500 to-blue-700" };
        if (urlLower.includes("quora.com")) return { name: "Quora", icon: "❓", color: "from-red-500 to-red-700" };
        if (urlLower.includes("amazon.com")) return { name: "Amazon", icon: "📦", color: "from-yellow-500 to-orange-600" };
        if (urlLower.includes("mouthshut.com")) return { name: "MouthShut", icon: "💬", color: "from-purple-500 to-indigo-600" };
        if (urlLower.includes("flipkart.com")) return { name: "Flipkart", icon: "🛒", color: "from-blue-600 to-indigo-700" };
        if (urlLower.includes("scamadviser.com")) return { name: "ScamAdviser", icon: "🛡️", color: "from-green-600 to-emerald-700" };
        if (urlLower.includes("pissedconsumer.com")) return { name: "PissedConsumer", icon: "😠", color: "from-red-600 to-rose-700" };
        if (urlLower.includes("productreview.com")) return { name: "ProductReview", icon: "📊", color: "from-teal-500 to-cyan-600" };
        if (urlLower.includes("justanswer.com")) return { name: "JustAnswer", icon: "❔", color: "from-indigo-500 to-purple-600" };
        if (urlLower.includes("linustechtips.com")) return { name: "LinusTechTips", icon: "💻", color: "from-cyan-500 to-blue-600" };
        if (urlLower.includes("tomsguide.com")) return { name: "Tom's Guide", icon: "📱", color: "from-slate-500 to-gray-700" };
        return { name: "Web", icon: "🌐", color: "from-gray-500 to-gray-700" };
    };

    const getSentimentStyle = (sentiment: string): { color: string; icon: React.ReactNode; bgColor: string } => {
        const sentLower = sentiment.toLowerCase();
        if (sentLower.includes("positive")) {
            return {
                color: "text-green-600 dark:text-green-400",
                icon: <ThumbsUp className="h-4 w-4" />,
                bgColor: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800"
            };
        } else if (sentLower.includes("negative")) {
            return {
                color: "text-red-600 dark:text-red-400",
                icon: <ThumbsDown className="h-4 w-4" />,
                bgColor: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800"
            };
        }
        return {
            color: "text-yellow-600 dark:text-yellow-400",
            icon: <Star className="h-4 w-4" />,
            bgColor: "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800"
        };
    };

    return (
        <section>
            <div className="bg-gradient-to-br from-white to-indigo-50 dark:from-gray-900 dark:to-gray-950 rounded-xl p-3 sm:p-6">
                {/* Header with Statistics */}
                <div className="flex flex-col gap-2 sm:gap-4 md:flex-row md:items-center md:justify-between mb-3 sm:mb-6">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="w-7 h-7 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                            <Search className="h-3.5 w-3.5 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white" />
                        </div>

                        <div>
                            <h2 className="text-base sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white leading-tight">
                                Online Reviews Across Web
                            </h2>
                            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                                Found {relatedReviews} reviews from {totalReviews} sources checked
                            </p>
                        </div>
                    </div>

                    {/* Summary Statistics Badges / Tab Filters */}
                    <div className="flex gap-1 sm:gap-2 overflow-x-auto no-scrollbar pb-1">
                        <button
                            onClick={() => setActiveTab('all')}
                            className={`flex items-center gap-1 sm:gap-2 whitespace-nowrap rounded-lg font-semibold transition-colors px-2 py-1.5 text-xs sm:px-4 sm:py-2.5 sm:text-sm shadow-lg ${activeTab === 'all'
                                ? 'bg-indigo-600 text-white'
                                : 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300 hover:bg-indigo-200 dark:hover:bg-indigo-900/60'
                                }`}
                        >
                            <Globe className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span>All</span>
                            <span className="ml-0.5 px-1 py-0.5 text-[9px] sm:text-xs font-bold bg-black/10 dark:bg-white/10 rounded-full">
                                {reviews.length}
                            </span>
                        </button>

                        <button
                            onClick={() => setActiveTab('positive')}
                            className={`flex items-center gap-1 sm:gap-2 whitespace-nowrap rounded-lg font-semibold transition-colors px-2 py-1.5 text-xs sm:px-4 sm:py-2.5 sm:text-sm shadow-lg ${activeTab === 'positive'
                                ? 'bg-green-600 text-white'
                                : 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-900/60'
                                }`}
                        >
                            <ThumbsUp className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span>Positive</span>
                            <span className="ml-0.5 px-1 py-0.5 text-[9px] sm:text-xs font-bold bg-black/10 dark:bg-white/10 rounded-full">
                                {positiveCount}
                            </span>
                        </button>

                        <button
                            onClick={() => setActiveTab('negative')}
                            className={`flex items-center gap-1 sm:gap-2 whitespace-nowrap rounded-lg font-semibold transition-colors px-2 py-1.5 text-xs sm:px-4 sm:py-2.5 sm:text-sm shadow-lg ${activeTab === 'negative'
                                ? 'bg-red-600 text-white'
                                : 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-900/60'
                                }`}
                        >
                            <ThumbsDown className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span>Negative</span>
                            <span className="ml-0.5 px-1 py-0.5 text-[9px] sm:text-xs font-bold bg-black/10 dark:bg-white/10 rounded-full">
                                {negativeCount}
                            </span>
                        </button>
                    </div>
                </div>

                {(summaryPoints?.positive || summaryPoints?.negative) ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                        {summaryPoints?.positive && (
                            <div className="rounded-xl bg-emerald-50 dark:bg-emerald-900/20 p-4">
                                <p className="text-sm font-bold text-emerald-700 dark:text-emerald-400 mb-2">Positive Signals</p>
                                {Array.isArray(summaryPoints.positive) ? (
                                    <ul className="space-y-1.5">
                                        {summaryPoints.positive.map((p: string, i: number) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                                                <span className="text-emerald-500 mt-0.5">✓</span>{p}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{summaryPoints.positive}</p>
                                )}
                            </div>
                        )}
                        {summaryPoints?.negative && (
                            <div className="rounded-xl bg-red-50 dark:bg-red-900/20 p-4">
                                <p className="text-sm font-bold text-red-700 dark:text-red-400 mb-2">Negative Signals</p>
                                {Array.isArray(summaryPoints.negative) ? (
                                    <ul className="space-y-1.5">
                                        {summaryPoints.negative.map((n: string, i: number) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                                                <span className="text-red-500 mt-0.5">✗</span>{n}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{summaryPoints.negative}</p>
                                )}
                            </div>
                        )}
                    </div>
                ) : null}

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-4 lg:gap-6">
                    {filteredReviews.map((review: any, index: number) => {
                        const platform = getPlatform(review.link);
                        const sentimentStyle = getSentimentStyle(review.sentiment);

                        return (
                            <div
                                key={review.id || index}
                                className="glass rounded-xl p-2 sm:p-5 border-2 border-gray-100 dark:border-gray-800 hover:border-indigo-200 dark:hover:border-indigo-700 transition-all hover:shadow-xl group bg-white dark:bg-gray-900/80"
                            >
                                {/* Header - Platform & Sentiment */}
                                <div className="flex items-start justify-between mb-1.5 sm:mb-3 gap-1.5 sm:gap-3">
                                    <div className="flex items-center space-x-1.5 sm:space-x-2 flex-1 min-w-0">
                                        <div className={`w-7 h-7 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br ${platform.color} flex items-center justify-center text-base sm:text-xl flex-shrink-0`}>
                                            {platform.icon}
                                        </div>
                                        <div className="flex flex-col min-w-0">
                                            <span className="text-[10px] sm:text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide truncate">
                                                {platform.name}
                                            </span>
                                            {review.date && (
                                                <span className="text-[9px] sm:text-xs text-gray-400 dark:text-gray-500 flex items-center gap-1">
                                                    <Calendar className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                                                    <span className="truncate">{review.date}</span>
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Sentiment Badge */}
                                    <div className={`flex items-center space-x-1 sm:space-x-1.5 px-1.5 py-1 sm:px-3 sm:py-1.5 rounded-lg border ${sentimentStyle.bgColor} ${sentimentStyle.color} flex-shrink-0`}>
                                        <div className="w-3 h-3 sm:w-4 sm:h-4">
                                            {sentimentStyle.icon}
                                        </div>
                                        <span className="text-[10px] sm:text-xs font-semibold whitespace-nowrap hidden min-[380px]:inline">{review.sentiment}</span>
                                        <span className="text-[10px] sm:text-xs font-semibold whitespace-nowrap min-[380px]:hidden">
                                            {review.sentiment.includes('Positive') ? '😊' : review.sentiment.includes('Negative') ? '😞' : '😐'}
                                        </span>
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-2 line-clamp-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                    {review.title}
                                </h3>

                                {/* Snippet */}
                                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-1.5 sm:mb-3 line-clamp-2 sm:line-clamp-3">
                                    {review.snippet}
                                </p>

                                {/* Footer - Rating & Link */}
                                <div className="flex items-center justify-between pt-1.5 sm:pt-3 border-t border-gray-200 dark:border-gray-700">
                                    {/* Rating */}
                                    <div className="flex items-center space-x-2">
                                        {review.rating !== undefined && (
                                            <div className="flex items-center space-x-1 px-2 py-1 sm:px-2.5 sm:py-1 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
                                                <Star className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-amber-500 fill-amber-500" />
                                                <span className="text-[10px] sm:text-xs font-bold text-amber-700 dark:text-amber-400">
                                                    {review.rating}
                                                </span>
                                                {review.ratingCount !== undefined && (
                                                    <span className="text-[10px] sm:text-xs text-amber-600 dark:text-amber-500 hidden min-[400px]:inline">
                                                        ({review.ratingCount.toLocaleString()})
                                                    </span>
                                                )}
                                            </div>
                                        )}
                                    </div>

                                    {/* Link */}
                                    <a
                                        href={review.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-1 text-[10px] sm:text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors group-hover:translate-x-1 transition-transform"
                                    >
                                        <span className="hidden min-[350px]:inline">Read More</span>
                                        <span className="min-[350px]:hidden">Read</span>
                                        <ExternalLink className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
