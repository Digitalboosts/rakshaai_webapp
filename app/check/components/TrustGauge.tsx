'use client';

import React, { useState, useEffect, useId, useRef } from 'react';
import { getWebsiteReportScore } from '@/lib/seo/report-indexability';

interface TrustGaugeProps {
    data: any;
    score: number; // 0–10
    total_number_of_reviews?: number;
    isUpiReport?: boolean;
    loading?: boolean;
}

interface TrustLevel {
    label: string;
    description: string;
    badge: string;
    icon: string;
    gradient: string;
}

const getTrustLevel = (score: number, isUpiReport: boolean): TrustLevel => {
    if (isUpiReport) {
        return {
            label: "UPI CHECK",
            description: "Security verification completed",
            badge: "VERIFIED",
            icon: "🔍",
            gradient: "from-blue-500 to-blue-600"
        };
    }

    if (score >= 8) {
        return {
            label: "HIGHLY TRUSTED",
            description: "Excellent reputation and reliability",
            badge: "TRUSTED",
            icon: "🛡️",
            gradient: "from-emerald-500 to-green-600"
        };
    } else if (score >= 5) {
        return {
            label: "MODERATELY TRUSTED",
            description: "Mixed signals; verify carefully",
            badge: "CAUTION",
            icon: "⚠️",
            gradient: "from-amber-500 to-orange-500"
        };
    } else {
        return {
            label: "LOW TRUST",
            description: "Risky or suspicious signals detected",
            badge: "DANGER",
            icon: "🚨",
            gradient: "from-red-500 to-red-700"
        };
    }
};

export default function TrustGauge({
    data,
    score,
    total_number_of_reviews,
    isUpiReport = false,
    loading = false
}: TrustGaugeProps) {
    const [animatedProgress, setAnimatedProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [isCertifiedTooltipOpen, setIsCertifiedTooltipOpen] = useState(false);
    const certifiedTooltipRef = useRef<HTMLDivElement>(null);
    const certifiedTooltipId = useId();

    // Determine percentage value (0-100) from the same shared SEO/report helper used for metadata.
    const reportScore = getWebsiteReportScore(data) ?? getWebsiteReportScore({ trust_score: score });
    const percent = reportScore?.percent ?? 0;
    // Normalized 0-10 score for display
    const normalizedScore = Math.floor(percent / 10);
    const finalProgressPercentage = Math.max(0, Math.min(10, normalizedScore)) / 10;

    const radius = 50;
    const strokeWidth = 8;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference * (1 - animatedProgress);

    const trustLevel = getTrustLevel(normalizedScore, isUpiReport);

    // Animation effect
    useEffect(() => {
        setIsVisible(true);
        const timer = setTimeout(() => {
            setAnimatedProgress(finalProgressPercentage);
        }, 300);
        return () => clearTimeout(timer);
    }, [finalProgressPercentage]);

    useEffect(() => {
        if (!isCertifiedTooltipOpen) return;

        const handlePointerDown = (event: PointerEvent) => {
            const target = event.target;

            if (target instanceof Node && certifiedTooltipRef.current?.contains(target)) {
                return;
            }

            setIsCertifiedTooltipOpen(false);
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsCertifiedTooltipOpen(false);
            }
        };

        document.addEventListener('pointerdown', handlePointerDown);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('pointerdown', handlePointerDown);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isCertifiedTooltipOpen]);

    const reviewCount = total_number_of_reviews ?? data?.total_number_of_reviews ?? 0;

    if (loading) {
        return (
            <section className="w-full max-w-sm mx-auto">
                <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700 animate-pulse">
                    <div className="flex flex-col items-center space-y-6">
                        <div className="w-44 h-44 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                        <div className="w-32 h-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
                        <div className="space-y-2 w-full">
                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section
            aria-labelledby="trust-gauge-heading"
            className={`w-full max-w-sm mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
            <div className="bg-white/80 dark:bg-gray-900/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-3xl transition-all duration-500 group">
                <div className="flex flex-col items-center space-y-8">
                    <h2 id="trust-gauge-heading" className="sr-only">Trust Score Overview</h2>

                    {/* Circular Gauge with Enhanced Design */}
                    <div className="relative w-48 h-48 group-hover:scale-105 transition-transform duration-300">
                        {/* Outer glow effect */}
                        <div className="absolute inset-0 rounded-full opacity-50 blur-2xl bg-gradient-to-r from-blue-400/20 to-purple-400/20 dark:from-blue-600/30 dark:to-purple-600/30"></div>

                        <svg
                            className="w-full h-full -rotate-90 drop-shadow-lg"
                            viewBox="0 0 140 140"
                            preserveAspectRatio="xMidYMid meet"
                            role="img"
                            aria-label={`Trust score ${normalizedScore} out of 10`}
                        >
                            {/* Shadow circle */}
                            <circle
                                cx="70"
                                cy="70"
                                r={radius + 1}
                                stroke="rgba(0,0,0,0.08)"
                                strokeWidth={strokeWidth}
                                fill="none"
                            />

                            {/* Background circle with gradient */}
                            <defs>
                                <linearGradient id="backgroundGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#f1f5f9" className="dark:stop-color-gray-700" />
                                    <stop offset="100%" stopColor="#e2e8f0" className="dark:stop-color-gray-800" />
                                </linearGradient>
                                <linearGradient id={`trustGradient-${normalizedScore}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor={isUpiReport ? "#3B82F6" : normalizedScore >= 7 ? "#10B981" : normalizedScore >= 4 ? "#F59E0B" : "#EF4444"} />
                                    <stop offset="100%" stopColor={isUpiReport ? "#1D4ED8" : normalizedScore >= 7 ? "#059669" : normalizedScore >= 4 ? "#D97706" : "#DC2626"} />
                                </linearGradient>
                            </defs>

                            <circle
                                cx="70"
                                cy="70"
                                r={radius}
                                stroke="url(#backgroundGradient)"
                                strokeWidth={strokeWidth}
                                fill="none"
                                opacity="0.3"
                            />

                            {/* Progress circle with animation */}
                            <circle
                                cx="70"
                                cy="70"
                                r={radius}
                                stroke={`url(#trustGradient-${normalizedScore})`}
                                strokeWidth={strokeWidth}
                                fill="none"
                                strokeLinecap="round"
                                strokeDasharray={circumference}
                                strokeDashoffset={strokeDashoffset}
                                className="transition-all duration-1000 ease-out filter drop-shadow-sm"
                                style={{
                                    filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.3))'
                                }}
                            />
                        </svg>

                        {/* Center Content */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <div className="text-center space-y-1 group-hover:scale-110 transition-transform duration-300">
                                <div className="text-5xl font-black tracking-tight">
                                    <span className={`bg-gradient-to-br ${trustLevel.gradient} bg-clip-text text-transparent drop-shadow-sm`}>
                                        {normalizedScore}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">
                                    {isUpiReport ? "reports" : "out of 10"}
                                </p>
                            </div>
                        </div>

                        {/* Trust level icon / Verified badge in corner */}
                        <div className="absolute -top-3 -right-3">
                            {data?.has_subscription === true ? (
                                <div ref={certifiedTooltipRef} className="relative group/verified">
                                    {/* Pulse ring */}
                                    <span className="absolute inset-0 rounded-full bg-blue-400 opacity-30 animate-ping pointer-events-none"></span>
                                    {/* Badge */}
                                    <button
                                        type="button"
                                        aria-label="Show RakshaAI certification details"
                                        aria-expanded={isCertifiedTooltipOpen}
                                        aria-controls={certifiedTooltipId}
                                        aria-describedby={isCertifiedTooltipOpen ? certifiedTooltipId : undefined}
                                        onClick={() => setIsCertifiedTooltipOpen((isOpen) => !isOpen)}
                                        className="relative w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-[2.5px] border-white dark:border-gray-900 flex items-center justify-center shadow-[0_0_12px_rgba(59,130,246,0.6)] cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900"
                                    >
                                        {/* Verified seal icon */}
                                        <svg className="w-5 h-5 text-white drop-shadow" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" />
                                        </svg>
                                    </button>

                                    {/* Premium Tooltip */}
                                    <div
                                        id={certifiedTooltipId}
                                        role="tooltip"
                                        className={`absolute right-0 top-full mt-3 w-56 origin-top-right transition-all duration-200 sm:top-auto sm:bottom-full sm:mt-0 sm:mb-3 sm:origin-bottom-right group-hover/verified:opacity-100 group-hover/verified:scale-100 group-hover/verified:pointer-events-auto ${isCertifiedTooltipOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'} z-50`}
                                    >
                                        <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-blue-100 dark:border-blue-900/60 overflow-hidden">
                                            {/* Top accent bar */}
                                            <div className="h-1 w-full bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500"></div>
                                            <div className="px-4 py-3">
                                                {/* Header */}
                                                <div className="flex items-center gap-2 mb-2">
                                                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center flex-shrink-0 shadow">
                                                        <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </div>
                                                    <span className="text-sm font-bold text-gray-900 dark:text-white tracking-tight">RakshaAI Certified</span>
                                                </div>
                                                {/* Divider */}
                                                <div className="border-t border-gray-100 dark:border-gray-800 mb-2"></div>
                                                {/* Trust points */}
                                                <ul className="space-y-1.5">
                                                    {[
                                                        { icon: "🛡️", text: "Identity verified & authentic" },
                                                        { icon: "✅", text: "Safe & legitimate business" },
                                                        { icon: "🔒", text: "Meets RakshaAI trust standards" },
                                                    ].map((item, i) => (
                                                        <li key={i} className="flex items-center gap-2 text-[11px] text-gray-600 dark:text-gray-300">
                                                            <span className="text-xs">{item.icon}</span>
                                                            <span>{item.text}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        {/* Arrow */}
                                        <div className="absolute bottom-full right-3.5 translate-y-px border-[6px] border-transparent border-b-white drop-shadow-sm dark:border-b-gray-900 sm:hidden"></div>
                                        <div className="absolute top-full right-3.5 -translate-y-px hidden border-[6px] border-transparent border-t-white drop-shadow-sm dark:border-t-gray-900 sm:block"></div>
                                    </div>
                                </div>
                            ) : (
                                <div ref={certifiedTooltipRef} className="relative group/unverified">
                                    <button
                                        type="button"
                                        aria-label="Show not verified details"
                                        aria-expanded={isCertifiedTooltipOpen}
                                        aria-controls={certifiedTooltipId}
                                        aria-describedby={isCertifiedTooltipOpen ? certifiedTooltipId : undefined}
                                        onClick={() => setIsCertifiedTooltipOpen((isOpen) => !isOpen)}
                                        className="relative w-9 h-9 rounded-full bg-white dark:bg-gray-900 border-[2.5px] border-rose-200 dark:border-rose-800 flex items-center justify-center text-rose-600 dark:text-rose-400 shadow-lg cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900"
                                    >
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
                                        </svg>
                                    </button>

                                    <div
                                        id={certifiedTooltipId}
                                        role="tooltip"
                                        className={`absolute right-0 top-full mt-3 w-60 origin-top-right transition-all duration-200 sm:top-auto sm:bottom-full sm:mt-0 sm:mb-3 sm:origin-bottom-right group-hover/unverified:opacity-100 group-hover/unverified:scale-100 group-hover/unverified:pointer-events-auto ${isCertifiedTooltipOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'} z-50`}
                                    >
                                        <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-rose-100 dark:border-rose-900/60 overflow-hidden">
                                            <div className="h-1 w-full bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500"></div>
                                            <div className="px-4 py-3">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <div className="w-6 h-6 rounded-full bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800 flex items-center justify-center flex-shrink-0">
                                                        <svg className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} aria-hidden="true">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="m6 6 12 12M18 6 6 18" />
                                                        </svg>
                                                    </div>
                                                    <span className="text-sm font-bold text-gray-900 dark:text-white tracking-tight">Not RakshaAI Trusted</span>
                                                </div>
                                                <div className="border-t border-gray-100 dark:border-gray-800 mb-2"></div>
                                                <p className="text-[11px] leading-relaxed text-gray-600 dark:text-gray-300">
                                                    This business has not completed all required business information and legal document checks on RakshaAI.
                                                </p>
                                                <p className="mt-2 text-[11px] leading-relaxed text-gray-500 dark:text-gray-400">
                                                    Because the verification details are incomplete, RakshaAI has not marked this business as trusted. Verify details carefully before paying or sharing sensitive information.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="absolute bottom-full right-3.5 translate-y-px border-[6px] border-transparent border-b-white drop-shadow-sm dark:border-b-gray-900 sm:hidden"></div>
                                        <div className="absolute top-full right-3.5 -translate-y-px hidden border-[6px] border-transparent border-t-white drop-shadow-sm dark:border-t-gray-900 sm:block"></div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Trust Level Badge */}
                    <div className="text-center space-y-3">
                        <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${trustLevel.gradient} shadow-lg`}>
                            <span className="text-white font-bold text-sm tracking-wide">
                                {trustLevel.badge}
                            </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {trustLevel.label}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 max-w-xs leading-relaxed">
                            {trustLevel.description}
                        </p>
                    </div>

                    {/* Enhanced Metrics */}
                    <div className="w-full bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-4 space-y-3">
                        <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                            Trust Metrics
                        </h3>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                                    {normalizedScore}
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                                    Score
                                </div>
                            </div>
                            <div className="text-center border-x border-gray-200 dark:border-gray-600">
                                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                                    {Math.round(percent)}%
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                                    Trust Level
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                                    {reviewCount.toLocaleString()}
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                                    {reviewCount === 1 ? 'Review' : 'Reviews'}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
