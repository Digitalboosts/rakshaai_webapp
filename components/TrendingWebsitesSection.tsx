"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Globe, Shield, TrendingUp, Users } from "lucide-react";

interface TrendingWebsite {
  domain: string;
  slug: string;
  total_count: number;
  shareable_url: string;
}

export default function TrendingWebsitesSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<TrendingWebsite[]>([]);

  useEffect(() => {
    fetch("/api/trending-websites")
      .then((r) => r.json())
      .then((d) => { if (d?.success) setData(d.trending_websites || []); })
      .catch(() => {});
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    const scrollAmount = 320;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  if (!data?.length) return null;

  return (
    <section className="py-10 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Header  constrained width */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30 border border-purple-100 dark:border-purple-800">
              <TrendingUp className="h-4 w-4 text-purple-600 dark:text-purple-400" />
              <span className="text-sm font-semibold text-purple-700 dark:text-purple-300">
                Live Activity
              </span>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                People Are Checking Right Now
              </h2>
              <p className="text-gray-600 dark:text-gray-300">Real-time scam verification is happening across India</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">🔄 Updates every 10 seconds • 10,000+ checks per day</p>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="hidden sm:flex gap-3 flex-shrink-0">
            <button
              onClick={() => scroll("left")}
              className="group p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:scale-105"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="group p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:scale-105"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5 text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" />
            </button>
          </div>
        </div>
      </div>

      {/* Card Slider  aligned to the main content container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={sliderRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {data.map((item, index) => (
            <motion.a
              key={item.slug}
              href={`/check/${item.domain}`}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative flex-none w-[280px] sm:w-[320px] snap-start bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-700 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Decorative Background Element */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-full opacity-50 group-hover:opacity-70 transition-opacity duration-300" />

              {/* Live Indicator */}
              <div className="relative z-10 mb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 px-3 py-1 bg-emerald-50 dark:bg-emerald-900/30 rounded-full border border-emerald-100 dark:border-emerald-800">
                    <div className="w-2 h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-pulse"></div>
                    <span className="text-xs font-medium text-emerald-700 dark:text-emerald-300">Active</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400 dark:text-gray-500 group-hover:text-purple-600 dark:group-hover:text-purple-400 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>

              {/* Website Info */}
              <div className="relative z-10 space-y-4">
                <div className="flex items-start gap-4">
                  {/* Website Icon */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg">
                    <Globe className="h-6 w-6 text-white" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white truncate group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors duration-300">
                      {item.domain}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                      Website Safety Check
                    </p>
                  </div>
                </div>

                {/* Security Stats */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                      <Users className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">{item.total_count}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">checks</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg">
                      <Shield className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">Secure</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Scan</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30 rounded-xl border border-purple-100 dark:border-purple-800 group-hover:from-purple-100 group-hover:to-blue-100 dark:group-hover:from-purple-900/50 dark:group-hover:to-blue-900/50 transition-all duration-300">
                    <span className="text-sm font-semibold text-purple-700 dark:text-purple-300">
                      View Trust Report
                    </span>
                    <ArrowRight className="h-4 w-4 text-purple-600 dark:text-purple-400 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Mobile Scroll Indicator */}
      <div className="sm:hidden mt-6 text-center px-6">
        <p className="text-sm text-gray-500 dark:text-gray-400">Swipe to see more websites</p>
      </div>
    </section>
  );
}
