"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Shield, Users, Play, ChevronRight } from "lucide-react";

interface FraudDetectionSectionProps {
    content?: {
        header: {
            title: string;
            description: string;
        };
        testimonial: {
            quote: string;
            author: string;
            title: string;
            videoPlaceholder: string;
        };
        features: {
            title: string;
            description: string;
            icon: string;
        }[];
        excellence: {
            title: string;
            description: string;
        };
        stats: {
            value: string;
            label: string;
        }[];
    };
}

export default function FraudDetectionSection({ content }: FraudDetectionSectionProps) {
    // Default content matching the screenshot
    const defaultContent = {
        header: {
            title: "Confidently engage customers digitally and by phone.",
            description: "Our approach to ecommerce fraud detection is unmatched. We blend advanced indefinite technology with a large team of experienced fraud analysts for a balanced solution unlike any other."
        },
        testimonial: {
            quote: "Vvaud.io is enhancing our growth strategy by fulfilling our commitment to our customers.",
            author: "Herman Mavoe",
            title: "SVP of Application Solutions at Finish Line",
            videoPlaceholder: "Customer testimonial video"
        },
        features: [
            {
                title: "Improve conversion",
                description: "Enhance the ROI of customer acquisition campaigns, increase abandonment, and drive revenue expansion.",
                icon: "phone"
            },
            {
                title: "Reduce fraud losses",
                description: "Building and maintaining consumer trust is how every detail of their journey while reducing operational expenses.",
                icon: "shield"
            },
            {
                title: "Provide better experiences",
                description: "Improve customer contentment and allegiance by providing expedited checkouts, and secure",
                icon: "users"
            }
        ],
        excellence: {
            title: "We excel at detecting and stopping fraud.",
            description: "Develop strong and specific target audiences, backed by firsthand data, to enable individualized product customization."
        },
        stats: [
            { value: "99%", label: "Customer loyalty" },
            { value: "6,000+", label: "Clients worldwide" },
            { value: "20+", label: "Years in the market" },
            { value: "1500+", label: "Specialized analysts" },
            { value: "160+", label: "Countries" },
            { value: "24/7", label: "Availability" }
        ]
    };

    const sectionContent = content || defaultContent;

    const getIcon = (iconType: string) => {
        switch (iconType) {
            case "phone":
                return <Phone className="w-8 h-8 text-white" />;
            case "shield":
                return <Shield className="w-8 h-8 text-white" />;
            case "users":
                return <Users className="w-8 h-8 text-white" />;
            default:
                return <Shield className="w-8 h-8 text-white" />;
        }
    };

    const getIconBg = (iconType: string) => {
        switch (iconType) {
            case "phone":
                return "bg-green-500";
            case "shield":
                return "bg-yellow-500";
            case "users":
                return "bg-purple-500";
            default:
                return "bg-blue-500";
        }
    };

    return (
        <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                        {sectionContent.header.title}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
                        {sectionContent.header.description}
                    </p>
                </motion.div>

                {/* Testimonial Section */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-8 lg:p-12 shadow-lg mb-16"
                >
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Video Placeholder */}
                        <div className="relative">
                            <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-xl flex items-center justify-center group cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center mb-4 mx-auto transition-colors">
                                        <Play className="w-6 h-6 text-white ml-1" />
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                                        {sectionContent.testimonial.videoPlaceholder}
                                    </p>
                                </div>
                            </div>
                            {/* Video controls overlay */}
                            <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded flex items-center justify-between">
                                <span className="text-sm">0:35 / 2:30</span>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <div className="w-20 h-1 bg-gray-600 rounded">
                                        <div className="w-1/4 h-full bg-white rounded"></div>
                                    </div>
                                    <div className="w-4 h-4 bg-white bg-opacity-30 rounded flex items-center justify-center">
                                        <span className="text-xs">⚙️</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial Content */}
                        <div>
                            <div className="text-6xl text-gray-300 dark:text-gray-600 mb-4">"</div>
                            <blockquote className="text-xl lg:text-2xl text-gray-800 dark:text-gray-200 font-medium mb-6 leading-relaxed">
                                {sectionContent.testimonial.quote}
                            </blockquote>
                            <div>
                                <div className="font-bold text-gray-900 dark:text-white">
                                    {sectionContent.testimonial.author}
                                </div>
                                <div className="text-gray-600 dark:text-gray-400">
                                    {sectionContent.testimonial.title}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Customer feedback link */}
                    <div className="flex items-center justify-end mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                        <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium flex items-center gap-2 transition-colors">
                            See all customer feedback
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </motion.div>

                {/* Features Section */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="grid md:grid-cols-3 gap-8 mb-20"
                >
                    {sectionContent.features.map((feature, index) => (
                        <div key={index} className="text-center">
                            <div className={`w-16 h-16 ${getIconBg(feature.icon)} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                                {getIcon(feature.icon)}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </motion.div>

                {/* Excellence Section */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="bg-slate-800 dark:bg-slate-900 text-white py-16 px-8 rounded-2xl">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                            {sectionContent.excellence.title}
                        </h2>
                        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            {sectionContent.excellence.description}
                        </p>
                    </div>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-8 lg:p-12 shadow-lg"
                >
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                        {sectionContent.stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}