"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    History,
    Clock,
    Shield,
    AlertTriangle,
    CheckCircle,
    XCircle,
    Trash2,
    ExternalLink,
    ChevronDown,
} from "lucide-react";
import { useRouter } from "next/navigation";

interface HistoryEntry {
    url: string;
    score: number;
    timestamp: number;
    trustLevel?: string;
    slug?: string;
}

export default function SearchHistory() {
    const [isOpen, setIsOpen] = useState(false);
    const [history, setHistory] = useState<HistoryEntry[]>([]);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    useEffect(() => {
        loadHistory();

        // Close dropdown when clicking outside
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        // Listen for storage changes (from other tabs)
        const handleStorageChange = (e: StorageEvent) => {
            if (e.key === "scam-detector-history") {
                loadHistory();
            }
        };

        // Listen for custom history update events (from same tab)
        const handleHistoryUpdate = () => {
            loadHistory();
        };

        document.addEventListener("mousedown", handleClickOutside);
        window.addEventListener("storage", handleStorageChange);
        window.addEventListener("historyUpdated", handleHistoryUpdate);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener("storage", handleStorageChange);
            window.removeEventListener("historyUpdated", handleHistoryUpdate);
        };
    }, []);

    const loadHistory = () => {
        if (typeof window !== "undefined") {
            const savedHistory = localStorage.getItem("scam-detector-history");
            if (savedHistory) {
                setHistory(JSON.parse(savedHistory));
            }
        }
    };

    const clearHistory = () => {
        if (typeof window !== "undefined") {
            localStorage.removeItem("scam-detector-history");
            setHistory([]);
        }
    };

    const deleteEntry = (timestamp: number, e: React.MouseEvent) => {
        e.stopPropagation();
        if (typeof window !== "undefined") {
            const updatedHistory = history.filter((entry) => entry.timestamp !== timestamp);
            localStorage.setItem("scam-detector-history", JSON.stringify(updatedHistory));
            setHistory(updatedHistory);
        }
    };

    const viewResult = (entry: HistoryEntry) => {
        setIsOpen(false);
        if (entry.slug) {
            router.push(`/check/${entry.slug}`);
        } 
        // else {
        //     // Fallback for older entries without slug
        //     router.push(`/result?query=${encodeURIComponent(entry.url)}`);
        // }
    };

    const getTrustBadge = (score: number) => {
        if (score >= 80) {
            return {
                icon: CheckCircle,
                text: "Trusted",
                color: "text-green-500",
                bgColor: "bg-green-500/10",
            };
        } else if (score >= 50) {
            return {
                icon: AlertTriangle,
                text: "Caution",
                color: "text-yellow-500",
                bgColor: "bg-yellow-500/10",
            };
        } else {
            return {
                icon: XCircle,
                text: "Risky",
                color: "text-red-500",
                bgColor: "bg-red-500/10",
            };
        }
    };

    const formatTimestamp = (timestamp: number) => {
        const now = Date.now();
        const diff = now - timestamp;
        const minutes = Math.floor(diff / 60000);
        const hours = Math.floor(diff / 3600000);
        const days = Math.floor(diff / 86400000);

        if (minutes < 1) return "Just now";
        if (minutes < 60) return `${minutes}m ago`;
        if (hours < 24) return `${hours}h ago`;
        if (days < 7) return `${days}d ago`;
        return new Date(timestamp).toLocaleDateString();
    };

    const formatUrl = (url: string) => {
        try {
            const urlObj = new URL(url.startsWith("http") ? url : `https://${url}`);
            return urlObj.hostname;
        } catch {
            return url;
        }
    };

    return (
        <div className="relative" ref={dropdownRef}>
            {/* History Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-xl bg-gray-100/80 dark:bg-gray-800/80 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 group relative"
                aria-label="View search history"
            >
                <History className="h-5 w-5 text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
                <span className="hidden sm:inline text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    History
                </span>
                {history.length > 0 && (
                    <span className="absolute -top-1 -right-1 h-5 w-5 bg-indigo-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                        {history.length}
                    </span>
                )}
                <ChevronDown
                    className={`h-4 w-4 text-gray-500 dark:text-gray-400 transition-transform duration-200 hidden sm:block ${isOpen ? "rotate-180" : ""
                        }`}
                />
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed sm:absolute left-2 right-2 sm:left-auto sm:right-0 mt-2 sm:w-[420px] max-w-[calc(100vw-1rem)] bg-white/98 dark:bg-gray-900/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden z-50"
                    >
                        {/* Header */}
                        <div className="px-3 sm:px-4 py-3 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-indigo-500/10 to-purple-500/10">
                            <div className="flex items-center justify-between gap-2">
                                <div className="flex items-center space-x-2 min-w-0">
                                    <Clock className="h-4 sm:h-5 w-4 sm:w-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                                    <h3 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white truncate">
                                        Recent Searches
                                    </h3>
                                </div>
                                {history.length > 0 && (
                                    <button
                                        onClick={clearHistory}
                                        className="text-xs font-medium text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors flex items-center space-x-1 group flex-shrink-0"
                                    >
                                        <Trash2 className="h-3.5 w-3.5 group-hover:scale-110 transition-transform" />
                                        <span className="hidden xs:inline">Clear All</span>
                                        <span className="xs:hidden">Clear</span>
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* History List */}
                        <div className="max-h-[60vh] sm:max-h-[400px] overflow-y-auto custom-scrollbar">
                            {history.length === 0 ? (
                                <div className="px-4 sm:px-6 py-8 sm:py-12 text-center">
                                    <History className="h-10 sm:h-12 w-10 sm:w-12 text-gray-300 dark:text-gray-600 mx-auto mb-3" />
                                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                                        No search history yet
                                    </p>
                                    <p className="text-gray-400 dark:text-gray-500 text-xs mt-1">
                                        Your analyzed websites will appear here
                                    </p>
                                </div>
                            ) : (
                                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                                    {history.map((entry) => {
                                        const badge = getTrustBadge(entry.score);
                                        const BadgeIcon = badge.icon;

                                        return (
                                            <motion.div
                                                key={entry.timestamp}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                className="px-3 sm:px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors cursor-pointer group"
                                                onClick={() => viewResult(entry)}
                                            >
                                                <div className="flex items-start justify-between gap-2 sm:gap-3">
                                                    {/* Left Side - URL & Badge */}
                                                    <div className="flex-1 min-w-0">
                                                        <div className="flex items-center gap-2 mb-1.5">
                                                            <Shield className="h-3.5 sm:h-4 w-3.5 sm:w-4 text-gray-400 dark:text-gray-500 flex-shrink-0" />
                                                            <p className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                                                {formatUrl(entry.url)}
                                                            </p>
                                                        </div>

                                                        <div className="flex items-center gap-2 ml-5 sm:ml-6 flex-wrap">
                                                            {/* Trust Badge */}
                                                            <span
                                                                className={`inline-flex items-center gap-1 px-1.5 sm:px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-medium ${badge.bgColor} ${badge.color}`}
                                                            >
                                                                <BadgeIcon className="h-2.5 sm:h-3 w-2.5 sm:w-3" />
                                                                <span className="hidden xs:inline">{badge.text}</span>
                                                            </span>

                                                            {/* Score */}
                                                            <span className="text-[10px] sm:text-xs font-semibold text-gray-600 dark:text-gray-400">
                                                                {entry.score}/10
                                                            </span>
                                                        </div>
                                                    </div>

                                                    {/* Right Side - Time & Actions */}
                                                    <div className="flex flex-col sm:flex-row items-end sm:items-center gap-1 sm:gap-2">
                                                        <div className="text-right">
                                                            <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
                                                                {formatTimestamp(entry.timestamp)}
                                                            </p>
                                                        </div>

                                                        <div className="flex items-center gap-1 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                                                            <button
                                                                onClick={(e) => deleteEntry(entry.timestamp, e)}
                                                                className="p-1 sm:p-1.5 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/20 transition-colors"
                                                                aria-label="Delete entry"
                                                            >
                                                                <Trash2 className="h-3 sm:h-3.5 w-3 sm:w-3.5 text-red-500 dark:text-red-400" />
                                                            </button>
                                                            <ExternalLink className="h-3 sm:h-3.5 w-3 sm:w-3.5 text-gray-400 dark:text-gray-500" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        {history.length > 0 && (
                            <div className="px-3 sm:px-4 py-2.5 sm:py-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50">
                                <div className="flex items-center justify-between gap-2">
                                    <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">
                                        Showing last {history.length} {history.length === 1 ? "search" : "searches"}
                                    </p>
                                    <button
                                        onClick={() => {
                                            setIsOpen(false);
                                            router.push("/history");
                                        }}
                                        className="text-[10px] sm:text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors whitespace-nowrap"
                                    >
                                        View All →
                                    </button>
                                </div>
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
