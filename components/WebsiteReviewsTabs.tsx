"use client";

import React, { useState } from "react";
import WebsiteReviewCard from "./WebsiteReviewCard";
import {
  AlertCircle,
  ThumbsUp,
  ThumbsDown,
  List,
  Search,
} from "lucide-react";

/* ------------------ Types ------------------ */

type Sentiment = "positive" | "negative" | string;

export interface Review {
  title: string;
  link: string;
  snippet: string;
  date?: string;
  position: number;
  sentiment: string;
  rating?: number;
  ratingCount?: number;
}

interface WebsiteReviewsTabsProps {
  reviews?: Review[];
  data?: {
    reviews?: Review[];
  };
}

type TabKey = "all" | "positive" | "negative";

/* ------------------ Helpers ------------------ */

function getSentimentCounts(reviews: Review[]) {
  let positive = 0;
  let negative = 0;

  reviews.forEach((r) => {
    const sentiment = (r.sentiment ?? "").toLowerCase();
    if (sentiment.includes("positive")) positive++;
    else if (sentiment.includes("negative")) negative++;
  });

  return { positive, negative };
}

/* ------------------ Component ------------------ */

export default function WebsiteReviewsTabs({
  reviews = [],
  data,
}: WebsiteReviewsTabsProps) {
  const [tab, setTab] = useState<TabKey>("all");

  const { positive, negative } = getSentimentCounts(reviews);

  const filtered =
    tab === "positive"
      ? reviews.filter((r) =>
        (r.sentiment ?? "").toLowerCase().includes("positive")
      )
      : tab === "negative"
        ? reviews.filter((r) =>
          (r.sentiment ?? "").toLowerCase().includes("negative")
        )
        : reviews;

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col gap-3 sm:gap-4 md:flex-row md:items-center md:justify-between mb-4 sm:mb-6">
        {/* <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
            <Search className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white" />
          </div>

          <div>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white leading-tight">
              Online Reviews Across Web
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              Found {data?.reviews?.length ?? 0} reviews from various platforms
            </p>
          </div>
        </div> */}

        {/* Tabs */}
        <div className="flex gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar pb-1">
          <button
            onClick={() => setTab("all")}
            className={`flex items-center gap-1.5 sm:gap-2 whitespace-nowrap rounded-lg font-semibold transition-colors
              px-3 py-2 text-xs sm:px-4 sm:py-2.5 sm:text-sm
              ${tab === "all"
                ? "bg-indigo-600 text-white shadow-lg"
                : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
          >
            <List className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span>All</span>
            <span className="ml-0.5 px-1.5 py-0.5 text-[10px] sm:text-xs font-bold bg-black/10 dark:bg-white/10 rounded-full">
              {reviews.length}
            </span>
          </button>

          <button
            onClick={() => setTab("positive")}
            className={`flex items-center gap-1.5 sm:gap-2 whitespace-nowrap rounded-lg font-semibold transition-colors
              px-3 py-2 text-xs sm:px-4 sm:py-2.5 sm:text-sm
              ${tab === "positive"
                ? "bg-green-600 text-white shadow-lg"
                : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
          >
            <ThumbsUp className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span>Positive</span>
            <span className="ml-0.5 px-1.5 py-0.5 text-[10px] sm:text-xs font-bold bg-black/10 dark:bg-white/10 rounded-full">
              {positive}
            </span>
          </button>

          <button
            onClick={() => setTab("negative")}
            className={`flex items-center gap-1.5 sm:gap-2 whitespace-nowrap rounded-lg font-semibold transition-colors
              px-3 py-2 text-xs sm:px-4 sm:py-2.5 sm:text-sm
              ${tab === "negative"
                ? "bg-red-600 text-white shadow-lg"
                : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
          >
            <ThumbsDown className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span>Negative</span>
            <span className="ml-0.5 px-1.5 py-0.5 text-[10px] sm:text-xs font-bold bg-black/10 dark:bg-white/10 rounded-full">
              {negative}
            </span>
          </button>
        </div>
      </div>

      {/* Reviews Grid */}
      {filtered.length === 0 ? (
        <div className="text-center text-gray-500 dark:text-gray-400 py-6 sm:py-8">
          <AlertCircle className="mx-auto mb-2 h-5 w-5 sm:h-6 sm:w-6 text-red-400" />
          <p className="text-sm sm:text-base">
            No reviews found for this tab.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
          {filtered.map((review, idx) => (
            <WebsiteReviewCard key={idx} review={review} index={idx} />
          ))}
        </div>
      )}
    </div>
  );
}
