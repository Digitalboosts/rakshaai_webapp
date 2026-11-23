"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "@/components/ui/NoMotion";
import { MessageSquare, Star, Shield, Users } from "lucide-react";

const ReviewSubmissionModal = dynamic(() => import("./ReviewSubmissionModal"), {
    ssr: false,
    loading: () => null,
});

interface ReviewCTASectionProps {
    websiteUrl?: string;
    variant?: "home" | "result";
    content?: {
        title: string;
        description: string;
        benefits: string[];
        submitReview: {
            title: string;
            description: string;
            button: string;
            verification: string;
        };
        result: {
            title: string;
            description: string;
            stats: {
                reviewers: string;
                verified: string;
            };
            button: string;
        };
    };
}

export default function ReviewCTASection({ websiteUrl, variant = "home", content }: ReviewCTASectionProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Default English content
    const defaultContent = {
        title: "Help the Community",
        description: "Your experiences matter! Share reviews about websites you've used to help others make informed decisions and stay safe online.",
        benefits: [
            "Protect others from potential scams",
            "Share legitimate business experiences",
            "Build a trusted community database"
        ],
        submitReview: {
            title: "Submit Your Review",
            description: "Quick and easy. Your feedback helps millions of users stay secure.",
            button: "Report a Scam",
            verification: "All reviews are verified & moderated"
        },
        result: {
            title: "Share Your Experience",
            description: "Have you used {websiteUrl}? Help others by sharing your review.",
            stats: {
                reviewers: "500K+ reviewers",
                verified: "Verified & moderated"
            },
            button: "Write a Review"
        }
    };

    const t = content || defaultContent;

    if (variant === "result") {
        return (
            <>
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-6 glass rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border-2 border-indigo-200 dark:border-indigo-800/30"
                >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
                        <div className="flex-1 text-center md:text-left w-full">
                            <div className="flex items-center justify-center md:justify-start space-x-2 mb-3">
                                <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-600 dark:text-indigo-400" />
                                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
                                    {t.result.title}
                                </h3>
                            </div>
                            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-2">
                                {t.result.description.replace('{websiteUrl}', websiteUrl || '')}
                            </p>
                            <div className="flex items-center justify-center md:justify-start space-x-3 sm:space-x-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-3">
                                <div className="flex items-center space-x-1">
                                    <Users className="h-3 w-3 sm:h-4 sm:w-4" />
                                    <span>{t.result.stats.reviewers}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <Shield className="h-3 w-3 sm:h-4 sm:w-4" />
                                    <span>{t.result.stats.verified}</span>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="w-full sm:w-auto gradient-primary text-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-semibold hover:shadow-2xl transition-all flex items-center justify-center space-x-2 whitespace-nowrap"
                        >
                            <Star className="h-4 w-4 sm:h-5 sm:w-5" />
                            <span>{t.result.button}</span>
                        </button>
                    </div>
                </motion.div>

                {isModalOpen && (
                    <ReviewSubmissionModal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        websiteUrl={websiteUrl}
                    />
                )}
            </>
        );
    }

    // Home page variant
    return (
        <>
            <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-6xl mx-auto"
                >
                    <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border-2 border-indigo-200 dark:border-indigo-800/30">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                            {/* Left Side - Content */}
                            <div>
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl gradient-primary flex items-center justify-center flex-shrink-0">
                                        <MessageSquare className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                                    </div>
                                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                                        {t.title}
                                    </h2>
                                </div>
                                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6">
                                    {t.description}
                                </p>

                                {/* Benefits List */}
                                <div className="space-y-3">
                                    {t.benefits.map((benefit: any, index: any) => (
                                        <div key={index} className="flex items-start space-x-3">
                                            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <svg className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Side - Action */}
                            <div className="text-center md:text-left w-full">
                                <div className="neumorphic rounded-2xl p-6 sm:p-8 space-y-4">
                                    <div className="flex items-center justify-center space-x-1 mb-4">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star key={star} className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-yellow-400 fill-yellow-400" />
                                        ))}
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                                        {t.submitReview.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                                        {t.submitReview.description}
                                    </p>
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="w-full gradient-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-semibold hover:shadow-2xl transition-all"
                                    >
                                        {t.submitReview.button}
                                    </button>
                                    <div className="flex items-center justify-center space-x-2 text-xs text-gray-500 dark:text-gray-400 pt-2">
                                        <Shield className="h-3 w-3 sm:h-4 sm:w-4" />
                                        <span>{t.submitReview.verification}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {isModalOpen && (
                <ReviewSubmissionModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    websiteUrl={websiteUrl}
                />
            )}
        </>
    );
}
