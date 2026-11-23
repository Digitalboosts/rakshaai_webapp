"use client";

import { motion } from "framer-motion";

export default function Loader() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[400px]">
            <motion.div
                className="relative w-24 h-24"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
                <div className="absolute inset-0 rounded-full border-4 border-indigo-200 dark:border-indigo-900"></div>
                <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-indigo-600 dark:border-t-indigo-400"></div>
            </motion.div>

            <motion.p
                className="mt-6 text-lg font-medium text-gray-700 dark:text-gray-300"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                Analyzing website...
            </motion.p>

            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                This may take a few seconds
            </p>
        </div>
    );
}
