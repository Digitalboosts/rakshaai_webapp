"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "@/components/ui/NoMotion";
import { MessageSquare } from "lucide-react";

const ReviewSubmissionModal = dynamic(() => import("./ReviewSubmissionModal"), {
    ssr: false,
    loading: () => null,
});

interface ReviewSubmissionFABProps {
    websiteUrl?: string;
}

export default function ReviewSubmissionFAB({ websiteUrl }: ReviewSubmissionFABProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <>
            {/* Floating Action Button */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
                className="fixed bottom-6 right-6 z-40 no-print"
                onMouseEnter={() => setIsExpanded(true)}
                onMouseLeave={() => setIsExpanded(false)}
            >
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsModalOpen(true)}
                    className="group relative flex items-center space-x-3 gradient-primary text-white px-4 py-4 rounded-full shadow-2xl hover:shadow-indigo-500/50 transition-all overflow-hidden"
                >
                    <MessageSquare className="h-6 w-6 flex-shrink-0" />

                    <AnimatePresence>
                        {isExpanded && (
                            <motion.span
                                initial={{ width: 0, opacity: 0 }}
                                animate={{ width: "auto", opacity: 1 }}
                                exit={{ width: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="font-semibold text-sm whitespace-nowrap overflow-hidden"
                            >
                                Report a Scam
                            </motion.span>
                        )}
                    </AnimatePresence>
                </motion.button>

                {/* Tooltip for mobile */}
                <div className="md:hidden absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="glass rounded-lg px-3 py-2 text-sm font-medium text-gray-900 dark:text-white whitespace-nowrap shadow-lg">
                        Report a Scam
                    </div>
                </div>
            </motion.div>

            {/* Modal */}
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
