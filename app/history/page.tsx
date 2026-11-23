"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
    History,
    Clock,
    Shield,
    AlertTriangle,
    CheckCircle,
    XCircle,
    Trash2,
    ExternalLink,
    Calendar,
    TrendingUp,
    Search,
    BarChart3,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import DefaultLayout from "@/components/DefaultLayout";

interface HistoryEntry {
    url: string;
    score: number;
    timestamp: number;
    trustLevel?: string;
    slug?: string;
}

export default function HistoryPage() {
    const [history, setHistory] = useState<HistoryEntry[]>([]);
    const [filter, setFilter] = useState<"all" | "trusted" | "caution" | "risky">("all");
    const [searchTerm, setSearchTerm] = useState("");
    const router = useRouter();
    console.log("Rendering HistoryPage with history:", history);

    useEffect(() => {
        loadHistory();

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

        window.addEventListener("storage", handleStorageChange);
        window.addEventListener("historyUpdated", handleHistoryUpdate);

        return () => {
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
        if (confirm("Are you sure you want to clear all history?")) {
            if (typeof window !== "undefined") {
                localStorage.removeItem("scam-detector-history");
                setHistory([]);
            }
        }
    };

    const deleteEntry = (timestamp: number) => {
        if (typeof window !== "undefined") {
            const updatedHistory = history.filter((entry) => entry.timestamp !== timestamp);
            localStorage.setItem("scam-detector-history", JSON.stringify(updatedHistory));
            setHistory(updatedHistory);
        }
    };

    const viewResult = (entry: HistoryEntry) => {
        if (entry.slug) {
            router.push(`/check/${entry.slug}`);
        }
    };

    const getTrustBadge = (score: number) => {
        if (score >= 8) {
            return {
                icon: CheckCircle,
                text: "Trusted",
                level: "trusted",
                color: "text-green-600 dark:text-green-400",
                bgColor: "bg-green-50 dark:bg-green-900/20",
                borderColor: "border-green-200 dark:border-green-800",
            };
        } else if (score >= 5) {
            return {
                icon: AlertTriangle,
                text: "Caution",
                level: "caution",
                color: "text-yellow-600 dark:text-yellow-400",
                bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
                borderColor: "border-yellow-200 dark:border-yellow-800",
            };
        } else {
            return {
                icon: XCircle,
                text: "Risky",
                level: "risky",
                color: "text-red-600 dark:text-red-400",
                bgColor: "bg-red-50 dark:bg-red-900/20",
                borderColor: "border-red-200 dark:border-red-800",
            };
        }
    };

    const formatTimestamp = (timestamp: number) => {
        return new Date(timestamp).toLocaleString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    const formatUrl = (url: string) => {
        try {
            const urlObj = new URL(url.startsWith("http") ? url : `https://${url}`);
            return urlObj.hostname;
        } catch {
            return url;
        }
    };

    const filteredHistory = history.filter((entry) => {
        const badge = getTrustBadge(entry.score);
        const matchesFilter = filter === "all" || badge.level === filter;
        const matchesSearch = entry.url.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    const stats = {
        total: history.length,
        trusted: history.filter((e) => e.score >= 8).length,
        caution: history.filter((e) => e.score >= 5 && e.score < 8).length,
        risky: history.filter((e) => e.score < 5).length,
        avgScore: history.length > 0 ? Math.round(history.reduce((acc, e) => acc + (e.score || 0), 0) / history.length) : 0,
    };

    return (
        <DefaultLayout>
            <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900 py-8 sm:py-12 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6 sm:mb-8"
                    >
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => router.back()}
                                    className="flex items-center px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors text-sm font-medium shadow-sm"
                                    aria-label="Go back"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                    </svg>
                                    Back
                                </button>
                                <div>
                                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                                        Search History
                                    </h1>
                                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                                        Track all your website security checks in one place
                                    </p>
                                </div>
                            </div>
                            {history.length > 0 && (
                                <button
                                    onClick={clearHistory}
                                    className="flex items-center justify-center space-x-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg sm:rounded-xl bg-red-500 hover:bg-red-600 text-white text-sm sm:text-base font-semibold transition-colors self-start sm:self-auto shadow-sm hover:shadow-md"
                                >
                                    <Trash2 className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                                    <span className="hidden xs:inline sm:inline">Clear All</span>
                                    <span className="xs:hidden sm:hidden">Clear</span>
                                </button>
                            )}
                        </div>
                    </motion.div>

                    {/* Stats Cards */}
                    {history.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 mb-6 sm:mb-8"
                        >
                            <div className="glass rounded-xl sm:rounded-2xl p-3 sm:p-4 border-2 border-indigo-200 dark:border-indigo-800">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-1">Total</p>
                                        <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">{stats.total}</p>
                                    </div>
                                    <BarChart3 className="h-6 w-6 sm:h-8 sm:w-8 text-indigo-500" />
                                </div>
                            </div>

                            <div className="glass rounded-xl sm:rounded-2xl p-3 sm:p-4 border-2 border-green-200 dark:border-green-800">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-1">Trusted</p>
                                        <p className="text-xl sm:text-2xl font-bold text-green-600 dark:text-green-400">{stats.trusted}</p>
                                    </div>
                                    <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-green-500" />
                                </div>
                            </div>

                            <div className="glass rounded-xl sm:rounded-2xl p-3 sm:p-4 border-2 border-yellow-200 dark:border-yellow-800">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-1">Caution</p>
                                        <p className="text-xl sm:text-2xl font-bold text-yellow-600 dark:text-yellow-400">{stats.caution}</p>
                                    </div>
                                    <AlertTriangle className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-500" />
                                </div>
                            </div>

                            <div className="glass rounded-xl sm:rounded-2xl p-3 sm:p-4 border-2 border-red-200 dark:border-red-800">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-1">Risky</p>
                                        <p className="text-xl sm:text-2xl font-bold text-red-600 dark:text-red-400">{stats.risky}</p>
                                    </div>
                                    <XCircle className="h-6 w-6 sm:h-8 sm:w-8 text-red-500" />
                                </div>
                            </div>

                            <div className="glass rounded-xl sm:rounded-2xl p-3 sm:p-4 border-2 border-purple-200 dark:border-purple-800">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-1">Avg Score</p>
                                        <p className="text-xl sm:text-2xl font-bold text-purple-600 dark:text-purple-400">{stats.avgScore}</p>
                                    </div>
                                    <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-purple-500" />
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Filters and Search */}
                    {history.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="glass rounded-xl sm:rounded-2xl p-3 sm:p-4 mb-4 sm:mb-6"
                        >
                            <div className="flex flex-col gap-3 sm:gap-4">
                                {/* Search */}
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 sm:h-5 w-4 sm:w-5 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Search by URL..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full pl-9 sm:pl-10 pr-4 py-2 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base text-gray-900 dark:text-white"
                                    />
                                </div>

                                {/* Filter Buttons */}
                                <div className="flex flex-wrap gap-2">
                                    <button
                                        onClick={() => setFilter("all")}
                                        className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium transition-all ${filter === "all"
                                            ? "bg-indigo-600 text-white"
                                            : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                            }`}
                                    >
                                        All
                                    </button>
                                    <button
                                        onClick={() => setFilter("trusted")}
                                        className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium transition-all ${filter === "trusted"
                                            ? "bg-green-600 text-white"
                                            : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                            }`}
                                    >
                                        Trusted
                                    </button>
                                    <button
                                        onClick={() => setFilter("caution")}
                                        className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium transition-all ${filter === "caution"
                                            ? "bg-yellow-600 text-white"
                                            : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                            }`}
                                    >
                                        Caution
                                    </button>
                                    <button
                                        onClick={() => setFilter("risky")}
                                        className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium transition-all ${filter === "risky"
                                            ? "bg-red-600 text-white"
                                            : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                            }`}
                                    >
                                        Risky
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* History List */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        {filteredHistory.length === 0 ? (
                            <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-center">
                                <History className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 text-gray-300 dark:text-gray-600 mx-auto mb-3 sm:mb-4" />
                                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                    {history.length === 0 ? "No Search History" : "No Results Found"}
                                </h3>
                                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">
                                    {history.length === 0
                                        ? "Your analyzed websites will appear here"
                                        : "Try adjusting your filters or search term"}
                                </p>
                                <Link
                                    href="/"
                                    className="inline-flex items-center space-x-2 px-4 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 rounded-lg sm:rounded-xl gradient-primary text-white text-sm sm:text-base font-semibold hover:shadow-xl transition-all transform hover:scale-105"
                                >
                                    <Shield className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                                    <span>Check a Website</span>
                                </Link>
                            </div>
                        ) : (
                            <div className="space-y-3 sm:space-y-4">
                                {filteredHistory.map((entry, index) => {
                                    const badge = getTrustBadge(entry.score);
                                    const BadgeIcon = badge.icon;

                                    return (
                                        <motion.div
                                            key={entry.timestamp}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            className={`glass rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 border-2 ${badge.borderColor} hover:shadow-xl transition-all cursor-pointer group`}
                                            onClick={() => viewResult(entry)}
                                        >
                                            <div className="flex flex-col gap-3 sm:gap-4">
                                                {/* Left Side */}
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2 sm:gap-3 mb-3">
                                                        <div className={`p-1.5 sm:p-2 lg:p-3 rounded-lg sm:rounded-xl ${badge.bgColor} flex-shrink-0`}>
                                                            <Shield className={`h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 ${badge.color}`} />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 dark:text-white truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                                                {formatUrl(entry.url)}
                                                            </h3>
                                                            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 truncate">
                                                                {entry.url}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-col xs:flex-row xs:items-center gap-2 sm:gap-3">
                                                        {/* Trust Badge */}
                                                        <div className={`inline-flex items-center gap-1 sm:gap-1.5 px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl ${badge.bgColor} ${badge.color} text-xs sm:text-sm font-semibold w-fit`}>
                                                            <BadgeIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                                                            <span>{badge.text}</span>
                                                        </div>

                                                        <div className="flex items-center gap-2 sm:gap-3">
                                                            {/* Score */}
                                                            <div className="inline-flex items-center gap-1 sm:gap-1.5 px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl bg-gray-100 dark:bg-gray-800">
                                                                <TrendingUp className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-gray-600 dark:text-gray-400" />
                                                                <span className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                                                                    {entry.score}/10
                                                                </span>
                                                            </div>

                                                            {/* Timestamp */}
                                                            <div className="inline-flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                                                                <Calendar className="h-3 w-3 sm:h-3.5 sm:w-3.5 flex-shrink-0" />
                                                                <span className="hidden sm:inline truncate">{formatTimestamp(entry.timestamp)}</span>
                                                                <span className="sm:hidden">{new Date(entry.timestamp).toLocaleDateString()}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Right Side - Actions */}
                                                <div className="flex items-center gap-1.5 sm:gap-2 self-end sm:self-start mt-2 sm:mt-0">
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            viewResult(entry);
                                                        }}
                                                        className="p-1.5 sm:p-2 lg:p-3 rounded-lg sm:rounded-xl bg-indigo-50 dark:bg-indigo-900/20 hover:bg-indigo-100 dark:hover:bg-indigo-900/40 transition-all group/btn shadow-sm hover:shadow-md"
                                                        aria-label="View details"
                                                    >
                                                        <ExternalLink className="h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-indigo-600 dark:text-indigo-400 group-hover/btn:scale-110 transition-transform" />
                                                    </button>
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            deleteEntry(entry.timestamp);
                                                        }}
                                                        className="p-1.5 sm:p-2 lg:p-3 rounded-lg sm:rounded-xl bg-red-50 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/40 transition-all group/btn shadow-sm hover:shadow-md"
                                                        aria-label="Delete entry"
                                                    >
                                                        <Trash2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-red-600 dark:text-red-400 group-hover/btn:scale-110 transition-transform" />
                                                    </button>
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </DefaultLayout>
    );
}
