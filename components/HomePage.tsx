"use client";

import { Shield, Zap, Lock, TrendingUp, CheckCircle, Users } from "lucide-react";
import UrlInput from "@/components/UrlInput";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Lazy load all non-critical components
const TrendingWebsitesSection = dynamic(() => import("@/components/TrendingWebsitesSection"), { ssr: false });
const LowestTrustSlider = dynamic(() => import("@/components/LowestTrustSlider"), { ssr: false });
const ReviewCTASection = dynamic(() => import("@/components/ReviewCTASection"), { ssr: false });
const ReviewSubmissionFAB = dynamic(() => import("@/components/ReviewSubmissionFAB"), { ssr: false });

interface HomePageProps {
  content: any;
}

export default function HomePage({ content }: HomePageProps) {
  const { hero, stats, features, howItWorks, cta, urlInput, reviewCTA } = content;
  const [trending, setTrending] = useState([]);
  const [lowestTrust, setLowestTrust] = useState<any[]>([]);
  const BACKEND_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL;

  // Defer non-critical data fetching
  useEffect(() => {
    const timer = setTimeout(() => {
      fetch('/api/trending-websites')
        .then(res => res.json())
        .then(data => {
          if (data?.success) {
            setTrending(data.trending_websites || []);
          }
        })
        .catch(() => { });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetch('/api/lowest-trust-websites')
        .then(res => res.json())
        .then(data => {
          if (data?.success) {
            setLowestTrust(data.lowest_trust_websites || []);
          }
        })
        .catch(() => { });
    }, 1500);
    return () => clearTimeout(timer);
  }, []);


  const featureIcons = [Shield, Lock, TrendingUp, Users];

  return (
    <div className="relative overflow-hidden">
      {/* Background Effects - Simplified for performance */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-300/10 rounded-full blur-2xl" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-indigo-300/10 rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-300/10 rounded-full blur-2xl" />
      </div>

      {/* Hero Section */}
      <section className="relative py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className="text-center mb-16"
          >
            {/* Badge */}
            <div
              className="inline-flex items-center px-4 py-2 rounded-full glass border border-white/20 mb-6"
            >
              <Zap className="h-4 w-4 text-yellow-500 mr-2" />
              <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                {hero.badge}
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black mb-4 sm:mb-6">
              <span className="block text-gray-900 dark:text-white">{hero.title1}</span>
              <span className="block text-gradient">{hero.title2}</span>
            </h1>

            <p className="text-base sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8 sm:mb-12">
              {hero.subtitle}
            </p>

            {/* URL Input */}
            <UrlInput content={urlInput} />
          </div>

          {/* Stats */}
          {/* <div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
          >
            {(stats as any[]).map((stat: any, index: number) => (
              <div key={index} className="glass rounded-2xl p-4 sm:p-6 text-center card-hover">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient mb-1 sm:mb-2">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div> */}
        </div>
      </section>
      {/* Trending Websites */}
      <TrendingWebsitesSection />
      {lowestTrust.length > 0 && (
        <LowestTrustSlider />
      )}


      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              {features.title}
            </h2>
            <p className="text-base sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {features.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(features.items as any[]).map((feature: any, index: number) => {
              const IconComponent = featureIcons[index];
              return (
                <div
                  key={index}
                  className="glass rounded-2xl p-6 card-hover"
                >
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              {howItWorks.title}
            </h2>
            <p className="text-base sm:text-xl text-gray-600 dark:text-gray-400">
              {howItWorks.subtitle}
            </p>
          </div>

          <div className="space-y-8">
            {(howItWorks.steps as any[]).map((item: any, index: number) => (
              <div
                key={index}
                className="glass rounded-2xl p-4 sm:p-8 flex items-start space-x-4 sm:space-x-6 card-hover"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl gradient-primary flex items-center justify-center">
                    <span className="text-lg sm:text-2xl font-bold text-white">{item.step}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Review Section */}
      <ReviewCTASection variant="home" content={reviewCTA} />

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div
          className="max-w-4xl mx-auto glass rounded-3xl p-12 text-center"
        >
          <Shield className="h-12 w-12 sm:h-16 sm:w-16 mx-auto text-indigo-600 dark:text-indigo-400 mb-4 sm:mb-6" />
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            {cta.title}
          </h2>
          <p className="text-base sm:text-xl text-gray-600 dark:text-gray-400 mb-6 sm:mb-8">
            {cta.subtitle}
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top and check a website"
            className="gradient-primary text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:shadow-2xl transition-all"
          >
            {cta.button}
          </button>
        </div>
      </section>

      {/* Floating Action Button */}
      <ReviewSubmissionFAB />
    </div>
  );
}