"use client";

import { motion } from "framer-motion";
import { getTrustLevel } from "@/lib/utils";

interface TrustGaugeProps {
    data: any;
    score: number; // 0-10 scale
    total_number_of_reviews?: number;
    isUpiReport?: boolean; // Add flag for UPI reports
}

export default function TrustGauge({ data,score, total_number_of_reviews, isUpiReport }: TrustGaugeProps) {
    const trustInfo = isUpiReport
        ? {
            label: "Report Status",
            color: "text-blue-600 dark:text-blue-400",
            bgColor: "bg-blue-50 dark:bg-blue-950/30",
            borderColor: "border-blue-200 dark:border-blue-800",
        }
        : getTrustLevel(score);

    // Calculate the percentage for the circular progress (score out of 10)
    // For UPI reports, show number of reports instead
    const progressPercentage = isUpiReport
        ? Math.min(1, (total_number_of_reviews || 0) / 10) // Scale based on number of reports
        : Math.max(0, Math.min(10, score)) / 10;

    // SVG circle calculations
    const radius = 45;
    const strokeWidth = 8;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference * (1 - progressPercentage);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full max-w-sm mx-auto"
        >
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
                <div className="flex flex-col items-center space-y-6">
                    {/* Clean Circular Gauge */}
                    <div className="relative w-44 h-44">
                        <svg
                            className="w-full h-full transform -rotate-90"
                            viewBox="0 0 120 120"
                        >
                            {/* Background Circle */}
                            <circle
                                cx="60"
                                cy="60"
                                r="52"
                                stroke="#E5E7EB"
                                strokeWidth="12"
                                fill="none"
                                className="dark:stroke-gray-600"
                            />

                            {/* Progress Circle */}
                            <motion.circle
                                cx="60"
                                cy="60"
                                r="52"
                                stroke={score >= 7 ? "#10B981" : score >= 4 ? "#F59E0B" : "#EF4444"}
                                strokeWidth="12"
                                fill="none"
                                strokeLinecap="round"
                                strokeDasharray={326.73} // 2 * PI * 52
                                initial={{ strokeDashoffset: 326.73 }}
                                animate={{ strokeDashoffset: 326.73 * (1 - progressPercentage) }}
                                transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                            />
                        </svg>

                        {/* Center Content */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                                className="text-6xl font-bold"
                                style={{
                                    color: isUpiReport
                                        ? "#3B82F6"
                                        : score >= 7 ? "#10B981" : score >= 4 ? "#F59E0B" : "#EF4444"
                                }}
                            >
                                {isUpiReport ? (total_number_of_reviews || 0) : score}
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1, duration: 0.5 }}
                                className="text-base text-gray-500 dark:text-gray-400 font-medium"
                            >
                                {isUpiReport ? "reports" : "out of 10"}
                            </motion.div>
                        </div>
                    </div>

                    {/* Clean Trust Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.4 }}
                        className="w-full"
                    >
                        <div
                            className="w-full text-center px-6 py-4 rounded-2xl border-2 font-semibold text-lg"
                            style={{
                                backgroundColor: score >= 7
                                    ? "rgba(16, 185, 129, 0.1)"
                                    : score >= 4
                                        ? "rgba(245, 158, 11, 0.1)"
                                        : "rgba(239, 68, 68, 0.1)",
                                borderColor: score >= 7 ? "#10B981" : score >= 4 ? "#F59E0B" : "#EF4444",
                                color: score >= 7 ? "#059669" : score >= 4 ? "#D97706" : "#DC2626",
                            }}
                        >
                            {data.overall_trust_level}
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}
