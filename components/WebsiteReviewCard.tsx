"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Star, Calendar, TrendingUp, ThumbsUp, ThumbsDown, Minus } from "lucide-react";

interface WebsiteReview {
    title: string;
    link: string;
    snippet: string;
    date?: string;
    position: number;
    sentiment: string;
    rating?: number;
    ratingCount?: number;
}

interface WebsiteReviewCardProps {
    review: WebsiteReview;
    index: number;
}

// Extract platform from URL
const getPlatform = (url: string): { name: string; icon: string; color: string } => {
    const urlLower = url.toLowerCase();

    if (urlLower.includes("reddit.com")) {
        return { name: "Reddit", icon: "🤖", color: "from-orange-500 to-red-600" };
    } else if (urlLower.includes("trustpilot.com")) {
        return { name: "Trustpilot", icon: "⭐", color: "from-green-500 to-teal-600" };
    } else if (urlLower.includes("facebook.com")) {
        return { name: "Facebook", icon: "👥", color: "from-blue-500 to-blue-700" };
    } else if (urlLower.includes("quora.com")) {
        return { name: "Quora", icon: "❓", color: "from-red-500 to-red-700" };
    } else if (urlLower.includes("youtube.com")) {
        return { name: "YouTube", icon: "▶️", color: "from-red-600 to-red-800" };
    } else if (urlLower.includes("twitter.com") || urlLower.includes("x.com")) {
        return { name: "Twitter/X", icon: "🐦", color: "from-sky-500 to-blue-600" };
    } else if (urlLower.includes("instagram.com")) {
        return { name: "Instagram", icon: "📸", color: "from-pink-500 to-purple-600" };
    } else if (urlLower.includes("linkedin.com")) {
        return { name: "LinkedIn", icon: "💼", color: "from-blue-600 to-blue-800" };
    } else if (urlLower.includes("zomato.com")) {
        return { name: "Zomato", icon: "🍽️", color: "from-red-500 to-pink-600" };
    } else if (urlLower.includes("justdial.com")) {
        return { name: "JustDial", icon: "📞", color: "from-yellow-500 to-orange-600" };
    } else if (urlLower.includes("mouthshut.com")) {
        return { name: "MouthShut", icon: "💬", color: "from-purple-500 to-indigo-600" };
    } else if (urlLower.includes("reviews.io")) {
        return { name: "Reviews.io", icon: "📝", color: "from-indigo-500 to-purple-600" };
    } else if (urlLower.includes("sitejabber.com")) {
        return { name: "Sitejabber", icon: "⚡", color: "from-blue-500 to-cyan-600" };
    } else if (urlLower.includes("consumercomplaints")) {
        return { name: "Consumer Forum", icon: "⚖️", color: "from-gray-600 to-gray-800" };
    } else if (urlLower.includes("news") || urlLower.includes("times")) {
        return { name: "News", icon: "📰", color: "from-slate-600 to-slate-800" };
    } else if (urlLower.includes("apps.apple.com")) {
        return { name: "App Store", icon: "🍎", color: "from-gray-700 to-gray-900" };
    } else {
        return { name: "Web", icon: "🌐", color: "from-gray-500 to-gray-700" };
    }
};

// Get sentiment color and icon
const getSentimentStyle = (sentiment: string): { color: string; icon: React.ReactElement; bgColor: string } => {
    const sentLower = sentiment.toLowerCase();

    if (sentLower.includes("positive") || sentLower.includes("😊")) {
        return {
            color: "text-green-600 dark:text-green-400",
            icon: <ThumbsUp className="h-4 w-4" />,
            bgColor: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800"
        };
    } else if (sentLower.includes("negative") || sentLower.includes("😡")) {
        return {
            color: "text-red-600 dark:text-red-400",
            icon: <ThumbsDown className="h-4 w-4" />,
            bgColor: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800"
        };
    } else {
        return {
            color: "text-yellow-600 dark:text-yellow-400",
            icon: <Minus className="h-4 w-4" />,
            bgColor: "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800"
        };
    }
};

export default function WebsiteReviewCard({ review, index }: WebsiteReviewCardProps) {
    const platform = getPlatform(review.link);
    const sentimentStyle = getSentimentStyle(review.sentiment);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            className="glass rounded-xl p-3 sm:p-5 border-2 border-gray-100 dark:border-gray-800 hover:border-indigo-200 dark:hover:border-indigo-800 transition-all hover:shadow-xl group"
        >
            {/* Header - Platform & Sentiment */}
            <div className="flex items-start justify-between mb-2 sm:mb-3 gap-2 sm:gap-3">
                {/* Platform Badge */}
                <div className="flex items-center space-x-2 flex-1 min-w-0">
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br ${platform.color} flex items-center justify-center text-lg sm:text-xl flex-shrink-0`}>
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
                <div className={`flex items-center space-x-1 sm:space-x-1.5 px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg border ${sentimentStyle.bgColor} ${sentimentStyle.color} flex-shrink-0`}>
                    <div className="w-3 h-3 sm:w-4 sm:h-4">
                        {React.cloneElement(sentimentStyle.icon as React.ReactElement<any>, { className: "w-full h-full" })}
                    </div>
                    <span className="text-[10px] sm:text-xs font-semibold whitespace-nowrap hidden min-[380px]:inline">{review.sentiment}</span>
                    <span className="text-[10px] sm:text-xs font-semibold whitespace-nowrap min-[380px]:hidden">
                        {review.sentiment.includes('Positive') ? '😊' : review.sentiment.includes('Negative') ? '😞' : '😐'}
                    </span>
                </div>
            </div>

            {/* Title */}
            <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {review.title}
            </h3>

            {/* Snippet */}
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2 sm:mb-3 line-clamp-2 sm:line-clamp-3">
                {review.snippet}
            </p>

            {/* Footer - Rating & Link */}
            <div className="flex items-center justify-between pt-2 sm:pt-3 border-t border-gray-200 dark:border-gray-700">
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
        </motion.div>
    );
}
