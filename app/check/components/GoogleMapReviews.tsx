import React from 'react';
import { Star, ThumbsUp, ThumbsDown, User } from 'lucide-react';

export default function GoogleMapReviews({ data, summaryPoints }: { data: any; summaryPoints?: { positive?: string | string[]; negative?: string | string[] } }) {
    const reviewsData = data?.google_reviews_data || data?.google_reviews || null;
    const reviews = Array.isArray(reviewsData?.reviews) ? reviewsData.reviews : (Array.isArray(reviewsData) ? reviewsData : []);
    if (!reviews || reviews.length === 0) return null;

    const trust = data?.sectional_status?.google_business_profile_trust;
    const positiveCount = reviewsData?.positive_count || 0;
    const negativeCount = reviewsData?.negative_count || 0;
    const totalReviews = reviewsData?.total_reviews || reviews.length;
    const averageRating = reviewsData?.average_rating || 0;
    const placesUsed = reviewsData?.places_used || [];

    return (
        <section>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-4 sm:p-6">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>

                    <div className='flex flex-row items-center justify-between w-full'>
                        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white leading-tight">
                            Google Map Reviews
                        </h2>
                        {/* Trust badge */}
                        {trust ? (
                            <div className="inline-flex items-center gap-2 ml-4">
                                <span className="px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-semibold">{trust.trust_level ?? '-'}</span>
                                <div className="text-sm text-gray-500">{typeof trust.trust_percentage === 'number' ? `${Math.round(trust.trust_percentage)}% Trust` : '-'}</div>
                            </div>
                        ) : null}
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

                {/* Stats Grid - Compact Responsive Layout */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-0">

                    {/* Sample Negative Tab (non-interactive) */}
                    <div className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-2 rounded-xl bg-red-100 dark:bg-red-900/30">
                        <div className="p-1 sm:p-1.5 bg-red-500 rounded-full flex-shrink-0">
                            <ThumbsDown className="h-3 w-3 text-white" />
                        </div>
                        <div className="min-w-0 flex-1 text-center">
                            <div className="text-xs text-red-600 dark:text-red-500 font-medium leading-tight">
                                <div>Sample</div>
                                <div>Negative</div>
                            </div>
                        </div>
                        <div className="font-bold text-red-700 ml-2">{negativeCount}</div>
                    </div>

                    {/* Sample Positive Tab (non-interactive) */}
                    <div className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-2 rounded-xl bg-green-100 dark:bg-green-900/30">
                        <div className="p-1 sm:p-1.5 bg-green-500 rounded-full flex-shrink-0">
                            <ThumbsUp className="h-3 w-3 text-white" />
                        </div>
                        <div className="min-w-0 flex-1 text-center">
                            <div className="text-xs text-green-600 dark:text-green-500 font-medium leading-tight">
                                <div>Sample</div>
                                <div>Positive</div>
                            </div>
                        </div>
                        <div className="font-bold text-green-700 ml-2">{positiveCount}</div>
                    </div>

                    {/* Average Rating */}
                    <div className="px-3 py-2 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                        <div className="text-xs text-gray-600 dark:text-gray-400 truncate">Average Rating</div>
                        <div className="flex items-center space-x-2">
                            <div className="font-bold text-gray-900 dark:text-white text-lg">
                                {averageRating ? averageRating.toFixed(1) : 'N/A'}
                            </div>
                            {averageRating && (
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`h-3 w-3 ${i < Math.round(averageRating)
                                                ? 'text-yellow-400 fill-current'
                                                : 'text-gray-300 dark:text-gray-600'
                                                }`}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Google Maps Places */}
                    {placesUsed && placesUsed.length > 0 && (
                        <div className="col-span-2 sm:col-span-1 flex flex-col gap-2 max-w-sm">
                            {placesUsed.length === 1 ? (
                                <div className="flex flex-col gap-1">
                                    <a
                                        key={placesUsed[0].place_id}
                                        href={placesUsed[0].google_maps_link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors shadow-sm hover:shadow-md text-sm"
                                        title={`View ${placesUsed[0].name} on Google Maps`}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span className="truncate">View Maps</span>
                                    </a>
                                    <div className="text-xs text-center text-gray-500 dark:text-gray-400 px-1 truncate font-medium">
                                        {placesUsed[0].name}
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    )}
                </div>

                {/* Reviews List */}
                <div className="space-y-3 sm:space-y-4 mt-6">
                    {reviews.slice(0, 6).map((review: any, idx: number) => (
                        <div key={idx} className="relative bg-white dark:bg-gray-800/50 rounded-2xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
                                <div className="flex items-start space-x-3 sm:space-x-4 min-w-0 flex-1">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                                        <User className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-bold text-gray-900 dark:text-white text-base sm:text-lg mb-2 truncate">{review.displayname}</h4>
                                        <div className="flex flex-col xs:flex-row xs:items-center space-y-2 xs:space-y-0 xs:space-x-3">
                                            <div className="flex items-center space-x-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className={`h-4 w-4 sm:h-5 sm:w-5 ${i < review.Rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300 dark:text-gray-600"}`}
                                                    />
                                                ))}
                                            </div>
                                            <span className="px-2 sm:px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 w-fit">
                                                {review.Rating}/5
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <span className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold shadow-sm w-fit sm:flex-shrink-0 ${review.Sentiment.includes("Positive")
                                    ? "bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 dark:from-green-900/30 dark:to-emerald-900/30 dark:text-green-400 border border-green-200 dark:border-green-800"
                                    : "bg-gradient-to-r from-red-100 to-rose-100 text-red-800 dark:from-red-900/30 dark:to-rose-900/30 dark:text-red-400 border border-red-200 dark:border-red-800"
                                    }`}>
                                    {review.Sentiment}
                                </span>
                            </div>
                            <div className="sm:pl-16">
                                <blockquote className="text-gray-700 dark:text-gray-300 leading-relaxed italic border-l-4 border-blue-200 dark:border-blue-800 pl-3 sm:pl-4 bg-gray-50 dark:bg-gray-800/30 rounded-r-lg p-3 sm:p-4 text-sm sm:text-base">
                                    {review.Review && review.Review.trim() ? (
                                        `${review.Review}`
                                    ) : (
                                        <span className="text-gray-500 dark:text-gray-400 not-italic">
                                            No written review - Rating only
                                        </span>
                                    )}
                                </blockquote>
                            </div>
                        </div>
                    ))}
                    {reviews.length > 6 && <div className="text-xs text-gray-500">And {reviews.length - 6} more reviews</div>}
                </div>
            </div>
        </section>
    );
}
