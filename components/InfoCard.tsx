"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface InfoCardProps {
    title: string;
    icon: LucideIcon;
    children: ReactNode;
    delay?: number;
    extra?: ReactNode;
}

export default function InfoCard({ title, icon: Icon, children, delay = 0, extra }: InfoCardProps) {
    return (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay, duration: 0.5 }}
            className="glass rounded-2xl p-4 sm:p-6 card-hover"
        >
            <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="p-1.5 sm:p-2 rounded-xl gradient-primary">
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">{title}</h3>
                </div>
                {extra && <div className="ml-4">{extra}</div>}
            </div>
            <div className="space-y-2 sm:space-y-3">{children}</div>
        </motion.div>
    );
}

export function InfoRow({ label, value, highlight = false, tooltip }: { label: string; value: string | ReactNode; highlight?: boolean; tooltip?: ReactNode }) {
    return (
        <div className="flex justify-between items-start py-1.5 sm:py-2 border-b border-gray-100 dark:border-gray-800 last:border-0">
            <div className="flex items-center">
                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">{label}</span>
                {tooltip && tooltip}
            </div>
            <span className={`text-xs sm:text-sm font-semibold text-right max-w-[60%] ${highlight ? "text-indigo-600 dark:text-indigo-400" : "text-gray-900 dark:text-white"}`}>
                {value}
            </span>
        </div>
    );
}
