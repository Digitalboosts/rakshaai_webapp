"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { useState, useEffect } from "react";

interface StatCardProps {
    title: string;
    value: number;
    suffix?: string;
    icon: LucideIcon;
    gradient: string;
    delay?: number;
}

export function StatCard({ title, value, suffix = "", icon: Icon, gradient, delay = 0 }: StatCardProps) {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            const increment = value / 50;
            let current = 0;

            const counter = setInterval(() => {
                current += increment;
                if (current >= value) {
                    setDisplayValue(value);
                    clearInterval(counter);
                } else {
                    setDisplayValue(Math.floor(current));
                }
            }, 20);

            return () => clearInterval(counter);
        }, delay);

        return () => clearTimeout(timer);
    }, [value, delay]);

    return (
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: delay * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center group"
        >
            <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="h-8 w-8 text-white" />
            </div>

            <div className="space-y-2">
                <div className="text-3xl font-bold text-gray-900 dark:text-white">
                    {displayValue.toLocaleString()}{suffix}
                </div>
                <h3 className="text-gray-600 dark:text-gray-300 font-medium">{title}</h3>
            </div>
        </motion.div>
    );
}

interface TestimonialCardProps {
    name: string;
    role: string;
    location: string;
    content: string;
    avatar: string;
    rating: number;
    index: number;
}

export function TestimonialCard({
    name,
    role,
    location,
    content,
    avatar,
    rating,
    index
}: TestimonialCardProps) {
    return (
        <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
        >
            <div className="space-y-6">
                {/* Rating */}
                <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: (index * 0.2) + (i * 0.1), duration: 0.3 }}
                        >
                            <svg
                                className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        </motion.div>
                    ))}
                </div>

                {/* Content */}
                <blockquote className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
                    "{content}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 flex items-center justify-center text-white font-bold text-lg">
                        {avatar}
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">{name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{role}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{location}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}