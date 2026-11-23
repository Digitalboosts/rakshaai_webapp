"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionContainerProps {
    children: ReactNode;
    className?: string;
    id?: string;
    background?: "default" | "gradient" | "subtle";
}

export default function SectionContainer({
    children,
    className = "",
    id,
    background = "default"
}: SectionContainerProps) {
    const backgroundClasses = {
        default: "",
        gradient: "bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20",
        subtle: "bg-gray-50/50 dark:bg-gray-800/30"
    };

    return (
        <section
            id={id}
            className={`py-20 px-6 lg:px-20 ${backgroundClasses[background]} ${className}`}
        >
            <div className="max-w-7xl mx-auto">
                {children}
            </div>
        </section>
    );
}