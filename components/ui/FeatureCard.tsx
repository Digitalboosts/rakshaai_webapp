"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    index: number;
}

export default function FeatureCard({ title, description, icon: Icon, index }: FeatureCardProps) {
    return (
        <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{
                y: -8,
                transition: { duration: 0.3 }
            }}
            className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 cursor-pointer"
        >
            <div className="space-y-4">
                {/* Icon Container */}
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 group-hover:from-purple-500 group-hover:to-blue-500 transition-all duration-300">
                    <Icon className="h-8 w-8 text-purple-600 dark:text-purple-400 group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                        {title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Hover Arrow */}
                <motion.div
                    initial={{ x: -5, opacity: 0 }}
                    whileHover={{ x: 0, opacity: 1 }}
                    className="flex items-center text-purple-600 dark:text-purple-400 font-medium text-sm"
                >
                    Learn More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </motion.div>
            </div>

            {/* Background Decoration */}
            <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-purple-300/20 to-blue-300/20 dark:from-purple-600/20 dark:to-blue-600/20 rounded-2xl -z-10 group-hover:scale-110 transition-transform duration-300" />
        </motion.div>
    );
}