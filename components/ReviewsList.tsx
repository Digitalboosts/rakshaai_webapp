"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, ThumbsUp, ThumbsDown, User } from "lucide-react";

interface Review {
    displayname: string;
    Review: string;
    Rating: number;
    Sentiment: string;
}

interface PlaceUsed {
    place_id: string;
    name: string;
    reviews_count: number;
    google_maps_link: string;
    website_link: string;
}

interface ReviewsListProps {
    reviews: Review[];
    positiveCount: number;
    negativeCount: number;
    totalReviews: number;
    averageRating?: number;
    placesUsed?: PlaceUsed[];
}

export default function ReviewsList({ reviews, positiveCount, negativeCount, totalReviews, averageRating, placesUsed }: ReviewsListProps) {
    const [activeTab, setActiveTab] = useState<'positive' | 'negative' | 'all'>('all');

    // Filter reviews based on active tab
    const filteredReviews = activeTab === 'all'
        ? reviews
        : reviews.filter(review =>
            activeTab === 'positive'
                ? review.Sentiment.includes('Positive')
                : review.Sentiment.includes('Negative')
        );

    return (
        <div className="space-y-4 sm:space-y-6">
            {/* Enhanced Summary Section */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-4 sm:p-6 border border-blue-100 dark:border-blue-900/30">
                {/* Stats Grid - Compact Responsive Layout */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-0">
                    {/* Sample Negative Tab */}
                    <button
                        onClick={() => setActiveTab(activeTab === 'negative' ? 'all' : 'negative')}
                        className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-2 rounded-xl transition-all duration-200 cursor-pointer hover:shadow-md ${activeTab === 'negative'
                                ? 'bg-red-200 dark:bg-red-800/50 border-2 border-red-300 dark:border-red-700'
                                : 'bg-red-100 dark:bg-red-900/30 hover:bg-red-150 dark:hover:bg-red-900/40'
                            }`}
                    >
                        <div className="p-1 sm:p-1.5 bg-red-500 rounded-full flex-shrink-0">
                            <ThumbsDown className="h-3 w-3 text-white" />
                        </div>
                        <div className="min-w-0 flex-1 text-center">
                            <div className="text-xs text-red-600 dark:text-red-500 font-medium leading-tight">
                                <div>Sample</div>
                                <div>Negative</div>
                            </div>
                        </div>
                    </button>

                    {/* Sample Positive Tab */}
                    <button
                        onClick={() => setActiveTab(activeTab === 'positive' ? 'all' : 'positive')}
                        className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-2 rounded-xl transition-all duration-200 cursor-pointer hover:shadow-md ${activeTab === 'positive'
                                ? 'bg-green-200 dark:bg-green-800/50 border-2 border-green-300 dark:border-green-700'
                                : 'bg-green-100 dark:bg-green-900/30 hover:bg-green-150 dark:hover:bg-green-900/40'
                            }`}
                    >
                        <div className="p-1 sm:p-1.5 bg-green-500 rounded-full flex-shrink-0">
                            <ThumbsUp className="h-3 w-3 text-white" />
                        </div>
                        <div className="min-w-0 flex-1 text-center">
                            <div className="text-xs text-green-600 dark:text-green-500 font-medium leading-tight">
                                <div>Sample</div>
                                <div>Positive</div>
                            </div>
                        </div>
                    </button>

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
                        {/* <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">({totalReviews} reviews)</div> */}
                    </div>

                    {/* Google Maps Places with dropdown if multiple */}
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
                            ) : (
                                <GoogleMapsDropdown places={placesUsed} />
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Enhanced Reviews Section */}
            <div className="space-y-3 sm:space-y-4">
                {filteredReviews.length > 0 ? (
                    filteredReviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="relative bg-white dark:bg-gray-800/50 rounded-2xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 group"
                        >
                            {/* Profile Section */}
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
                                <div className="flex items-start space-x-3 sm:space-x-4 min-w-0 flex-1">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
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

                            {/* Review Content */}
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

                            {/* Decorative accent */}
                            <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-2 h-2 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </motion.div>
                    ))
                ) : (
                    <div className="text-center py-8">
                        <div className="text-gray-500 dark:text-gray-400">
                            {activeTab === 'positive' ? 'No positive reviews found' :
                                activeTab === 'negative' ? 'No negative reviews found' :
                                    'No reviews available'}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

// Dropdown component for multiple Google Maps places with compact UI
function GoogleMapsDropdown({ places }: { places: PlaceUsed[] }) {
    const [selected, setSelected] = useState(0);
    const handleOpen = () => {
        if (places[selected]) {
            window.open(places[selected].google_maps_link, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <div className="flex flex-col gap-2 w-full max-w-xs">
            {/* Compact place selector */}
            <div className="flex items-center w-full">
                <span className="inline-flex items-center px-2 py-2 bg-blue-50 dark:bg-blue-900/30 border border-r-0 border-blue-300 dark:border-blue-700 rounded-l-lg text-blue-600 dark:text-blue-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </span>
                <select
                    className="flex-1 min-w-0 border border-blue-300 dark:border-blue-700 border-l-0 border-r-0 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-2 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-none cursor-pointer"
                    value={selected}
                    onChange={e => setSelected(Number(e.target.value))}
                >
                    {places.map((place, idx) => {
                        // Truncate long place names for dropdown
                        const displayName = place.name.length > 25
                            ? `${place.name.substring(0, 25)}...`
                            : place.name;
                        return (
                            <option value={idx} key={place.place_id}>
                                {displayName} • {place.reviews_count}
                            </option>
                        );
                    })}
                </select>
                <button
                    type="button"
                    onClick={handleOpen}
                    className="inline-flex items-center px-3 py-2 rounded-r-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors shadow-sm hover:shadow-md text-sm border border-blue-600 border-l-0"
                    title={`View ${places[selected]?.name} on Google Maps`}
                >
                    <span className="hidden sm:inline mr-1">View</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </button>
            </div>

            {/* Compact selected place info */}
            <div className="text-xs text-center text-gray-500 dark:text-gray-400 px-2 truncate">
                <span className="font-medium">{places[selected]?.name}</span>
                <span className="text-blue-600 dark:text-blue-400 ml-1">• {places[selected]?.reviews_count} reviews</span>
            </div>
        </div>
    );
}
