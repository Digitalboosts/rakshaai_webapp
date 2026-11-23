"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Shield,
    AlertTriangle,
    CheckCircle,
    XCircle,
    ExternalLink,
    Calendar,
    Globe,
    Lock,
    Star,
    Users,
    TrendingUp,
    TrendingDown,
    Eye,
    Filter,
    Search,
    ChevronLeft,
    ChevronRight,
    RefreshCw,
    Info,
    Clock,
    MoreHorizontal,
    Edit,
    Trash2,
    Download,
    Flag,
    User
} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface DomainInfo {
    domain: string;
    status: string;
    created: string;
    updated: string;
    expires: string;
    domain_age_days: number | null;
    registrar: string;
    privacy_enabled: boolean;
    ip: string;
    ip_reputation: {
        abuse_score: number;
        usage_type: string;
        last_reported: string | null;
    };
}

interface SSLInfo {
    valid: boolean;
    self_signed: boolean;
    issuer: {
        organizationName: string;
        commonName: string;
    };
    subject: {
        commonName: string;
    };
    not_before: string;
    not_after: string;
    days_left: number;
}

interface WebsiteReview {
    title: string;
    link: string;
    snippet: string;
    date?: string;
    position: number;
    sentiment: string;
    rating?: number;
    ratingCount?: number;
    isrelated: boolean;
}

interface ActionItems {
    risk_level: string;
    can_do: string[];
    should_avoid: string[];
    payment_advice: string;
    reasons: string[];
}

interface ScannedData {
    trust_score: number;
    total_number_of_reviews: number;
    url_details: {
        scheme: string;
        subdomain: string;
        domain: string;
        tld: string;
        port: string;
        business_name: string;
        complete_domain: string;
        url: string;
    };
    domain_info: DomainInfo;
    ssl_info: SSLInfo;
    website_reviews: {
        reviews: WebsiteReview[];
        total_negative_sentiment_reviews: number;
        total_reviews_checked: number;
        related_reviews_found: number;
    };
    action_items: ActionItems;
    trust_percentage: number;
}

interface ScanResult {
    id: number;
    user: string;
    slug: string;
    domain: string;
    data: ScannedData;
    created_at: string;
    updated_at: string;
}

interface ScannedDataResponse {
    success: boolean;
    total_data_count: number;
    filtered_count: number;
    page: number;
    page_size: number;
    total_pages: number;
    has_next: boolean;
    has_previous: boolean;
    results: ScanResult[];
}

interface AdminScannedDataListProps {
    initialData?: ScannedDataResponse;
    showPagination?: boolean;
    pageSize?: number;
    onSelectionChange?: (selectedIds: Set<number>) => void;
    enableSelection?: boolean;
}

export default function AdminScannedDataList({
    initialData,
    showPagination = true,
    pageSize = 20,
    onSelectionChange,
    enableSelection = false
}: AdminScannedDataListProps) {
    const [data, setData] = useState<ScannedDataResponse | null>(initialData || null);
    const [loading, setLoading] = useState(!initialData);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
    const [riskFilter, setRiskFilter] = useState<"all" | "low" | "medium" | "high" | "very-high">("all");
    const [sslFilter, setSslFilter] = useState<"all" | "valid" | "invalid">("all");
    const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set());
    const [showActions, setShowActions] = useState<number | null>(null);
    const router = useRouter();

    // Debounce search term
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
            setCurrentPage(1);
        }, 500);

        return () => clearTimeout(timer);
    }, [searchTerm]);

    useEffect(() => {
        if (!initialData) {
            fetchScannedData();
        }
    }, [currentPage, debouncedSearchTerm, riskFilter, sslFilter, initialData]);

    useEffect(() => {
        if (onSelectionChange) {
            onSelectionChange(selectedItems);
        }
    }, [selectedItems, onSelectionChange]);

    const fetchScannedData = async () => {
        try {
            setLoading(true);
            const params = new URLSearchParams({
                page: currentPage.toString(),
                page_size: pageSize.toString(),
            });

            if (debouncedSearchTerm) {
                params.append('search', debouncedSearchTerm);
            }

            if (riskFilter !== 'all') {
                params.append('risk_level', riskFilter);
            }

            if (sslFilter !== 'all') {
                params.append('ssl_filter', sslFilter);
            }

            const response = await fetch(`/api/scanned-data?${params}`);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error('Error fetching scanned data:', error);
        } finally {
            setLoading(false);
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
                dotColor: "bg-green-500"
            };
        } else if (score >= 6) {
            return {
                icon: Shield,
                text: "Good",
                level: "good",
                color: "text-blue-600 dark:text-blue-400",
                bgColor: "bg-blue-50 dark:bg-blue-900/20",
                borderColor: "border-blue-200 dark:border-blue-800",
                dotColor: "bg-blue-500"
            };
        } else if (score >= 4) {
            return {
                icon: AlertTriangle,
                text: "Caution",
                level: "caution",
                color: "text-yellow-600 dark:text-yellow-400",
                bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
                borderColor: "border-yellow-200 dark:border-yellow-800",
                dotColor: "bg-yellow-500"
            };
        } else {
            return {
                icon: XCircle,
                text: "Risky",
                level: "risky",
                color: "text-red-600 dark:text-red-400",
                bgColor: "bg-red-50 dark:bg-red-900/20",
                borderColor: "border-red-200 dark:border-red-800",
                dotColor: "bg-red-500"
            };
        }
    };

    const getRiskLevelColor = (riskLevel: string) => {
        switch (riskLevel.toLowerCase()) {
            case "low":
                return "text-green-600 dark:text-green-400";
            case "medium":
                return "text-yellow-600 dark:text-yellow-400";
            case "high":
                return "text-orange-600 dark:text-orange-400";
            case "very high":
                return "text-red-600 dark:text-red-400";
            default:
                return "text-gray-600 dark:text-gray-400";
        }
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        });
    };

    const handleViewDetails = (result: ScanResult) => {
        router.push(`/history/${result.slug}`);
    };

    const handleSelectItem = (id: number) => {
        const newSelected = new Set(selectedItems);
        if (newSelected.has(id)) {
            newSelected.delete(id);
        } else {
            newSelected.add(id);
        }
        setSelectedItems(newSelected);
    };

    const handleSelectAll = () => {
        if (!data) return;

        if (selectedItems.size === data.results.length) {
            setSelectedItems(new Set());
        } else {
            setSelectedItems(new Set(data.results.map(r => r.id)));
        }
    };

    const filteredResults = data?.results.filter((result) => {
        let matchesSearch = true;
        let matchesRisk = true;
        let matchesSSL = true;

        if (debouncedSearchTerm) {
            matchesSearch = result.domain.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
                result.data.url_details.business_name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
                result.user.toLowerCase().includes(debouncedSearchTerm.toLowerCase());
        }

        if (riskFilter !== "all") {
            const riskLevel = result.data.action_items.risk_level.toLowerCase().replace(" ", "-");
            matchesRisk = riskLevel === riskFilter;
        }

        if (sslFilter !== "all") {
            matchesSSL = sslFilter === "valid" ? result.data.ssl_info.valid : !result.data.ssl_info.valid;
        }

        return matchesSearch && matchesRisk && matchesSSL;
    }) || [];

    const handleDeleteItem = async (id: number) => {
        if (confirm('Are you sure you want to delete this scan result?')) {
            try {
                await fetch('/api/scanned-data', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        action: 'delete',
                        ids: [id]
                    })
                });

                // Refresh data
                await fetchScannedData();
            } catch (error) {
                console.error('Delete failed:', error);
                alert('Delete failed. Please try again.');
            }
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-96">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                    <RefreshCw className="h-8 w-8 text-indigo-600" />
                </motion.div>
            </div>
        );
    }

    if (!data) {
        return (
            <div className="text-center py-12">
                <AlertTriangle className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <p className="text-gray-600 dark:text-gray-400">Failed to load scanned data</p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Advanced Filters */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="flex-1">
                        <div className="relative">
                            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search by domain, business name, or user..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            />
                        </div>
                    </div>
                    <div className="flex gap-3 flex-wrap">
                        <select
                            value={riskFilter}
                            onChange={(e) => setRiskFilter(e.target.value as any)}
                            className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
                        >
                            <option value="all">All Risk Levels</option>
                            <option value="low">Low Risk</option>
                            <option value="medium">Medium Risk</option>
                            <option value="high">High Risk</option>
                            <option value="very-high">Very High Risk</option>
                        </select>
                        <select
                            value={sslFilter}
                            onChange={(e) => setSslFilter(e.target.value as any)}
                            className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
                        >
                            <option value="all">All SSL Status</option>
                            <option value="valid">Valid SSL</option>
                            <option value="invalid">Invalid SSL</option>
                        </select>
                        {enableSelection && filteredResults.length > 0 && (
                            <button
                                onClick={handleSelectAll}
                                className="px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                            >
                                {selectedItems.size === filteredResults.length ? 'Deselect All' : 'Select All'}
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Results List */}
            <AnimatePresence>
                <div className="space-y-4">
                    {filteredResults.map((result, index) => {
                        const trustBadge = getTrustBadge(result.data.trust_score);
                        const riskColor = getRiskLevelColor(result.data.action_items.risk_level);
                        const isSelected = selectedItems.has(result.id);

                        return (
                            <motion.div
                                key={result.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05, duration: 0.3 }}
                                className={`bg-white dark:bg-gray-800 rounded-xl p-6 border-2 transition-all hover:shadow-xl group ${isSelected
                                        ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20'
                                        : trustBadge.borderColor + ' hover:border-indigo-300 dark:hover:border-indigo-600'
                                    }`}
                            >
                                <div className="flex items-start gap-4">
                                    {enableSelection && (
                                        <div className="flex-shrink-0 pt-1">
                                            <input
                                                type="checkbox"
                                                checked={isSelected}
                                                onChange={() => handleSelectItem(result.id)}
                                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                            />
                                        </div>
                                    )}

                                    <div className="flex-1 min-w-0 space-y-4">
                                        {/* Header */}
                                        <div className="flex items-start justify-between">
                                            <div className="min-w-0 flex-1">
                                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1 truncate">
                                                    {result.data.url_details.business_name || result.domain}
                                                </h3>
                                                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 flex-wrap">
                                                    <span className="flex items-center gap-1">
                                                        <Globe className="h-4 w-4" />
                                                        {result.data.url_details.complete_domain}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <User className="h-4 w-4" />
                                                        {result.user}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <Clock className="h-4 w-4" />
                                                        {formatDate(result.created_at)}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 flex-shrink-0">
                                                <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${trustBadge.bgColor} border ${trustBadge.borderColor}`}>
                                                    <div className={`w-2 h-2 rounded-full ${trustBadge.dotColor}`}></div>
                                                    <trustBadge.icon className={`h-4 w-4 ${trustBadge.color}`} />
                                                    <span className={`text-sm font-medium ${trustBadge.color}`}>
                                                        {trustBadge.text}
                                                    </span>
                                                </div>

                                                <div className="relative">
                                                    <button
                                                        onClick={() => setShowActions(showActions === result.id ? null : result.id)}
                                                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                                                    >
                                                        <MoreHorizontal className="h-4 w-4" />
                                                    </button>

                                                    {showActions === result.id && (
                                                        <div className="absolute right-0 top-full mt-1 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-10">
                                                            <button
                                                                onClick={() => handleViewDetails(result)}
                                                                className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center gap-2"
                                                            >
                                                                <Eye className="h-4 w-4" />
                                                                View Details
                                                            </button>
                                                            <button
                                                                onClick={() => window.open(result.data.url_details.url, '_blank')}
                                                                className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center gap-2"
                                                            >
                                                                <ExternalLink className="h-4 w-4" />
                                                                Visit Site
                                                            </button>
                                                            <hr className="border-gray-200 dark:border-gray-700" />
                                                            <button
                                                                onClick={() => handleDeleteItem(result.id)}
                                                                className="w-full px-4 py-2 text-left text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 flex items-center gap-2"
                                                            >
                                                                <Trash2 className="h-4 w-4" />
                                                                Delete
                                                            </button>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Key Metrics */}
                                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                                            <div className="text-center">
                                                <div className={`text-2xl font-bold ${trustBadge.color}`}>
                                                    {result.data.trust_score}/10
                                                </div>
                                                <div className="text-xs text-gray-600 dark:text-gray-400">Trust Score</div>
                                            </div>
                                            <div className="text-center">
                                                <div className={`text-lg font-bold ${riskColor}`}>
                                                    {result.data.action_items.risk_level}
                                                </div>
                                                <div className="text-xs text-gray-600 dark:text-gray-400">Risk Level</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-lg font-bold text-gray-900 dark:text-white">
                                                    {result.data.website_reviews.total_reviews_checked}
                                                </div>
                                                <div className="text-xs text-gray-600 dark:text-gray-400">Reviews</div>
                                            </div>
                                            <div className="text-center">
                                                <div className={`flex items-center justify-center gap-1 ${result.data.ssl_info.valid ? 'text-green-600' : 'text-red-600'}`}>
                                                    <Lock className="h-4 w-4" />
                                                    <span className="text-sm font-medium">
                                                        {result.data.ssl_info.valid ? 'Valid' : 'Invalid'}
                                                    </span>
                                                </div>
                                                <div className="text-xs text-gray-600 dark:text-gray-400">
                                                    SSL ({result.data.ssl_info.days_left}d left)
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-lg font-bold text-gray-900 dark:text-white">
                                                    {result.data.domain_info.domain_age_days || 'Unknown'}
                                                </div>
                                                <div className="text-xs text-gray-600 dark:text-gray-400">Age (days)</div>
                                            </div>
                                        </div>

                                        {/* Action Items Preview */}
                                        {result.data.action_items.should_avoid.length > 0 && (
                                            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3">
                                                <h4 className="text-sm font-semibold text-red-800 dark:text-red-200 mb-2">
                                                    ⚠️ Security Concerns:
                                                </h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {result.data.action_items.should_avoid.slice(0, 3).map((item, idx) => (
                                                        <span key={idx} className="text-xs px-2 py-1 bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 rounded">
                                                            {item}
                                                        </span>
                                                    ))}
                                                    {result.data.action_items.should_avoid.length > 3 && (
                                                        <span className="text-xs text-red-600 dark:text-red-400">
                                                            +{result.data.action_items.should_avoid.length - 3} more
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </AnimatePresence>

            {/* Pagination */}
            {showPagination && data.total_pages > 1 && (
                <div className="flex items-center justify-between mt-8">
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                        Showing {(data.page - 1) * data.page_size + 1} to {Math.min(data.page * data.page_size, data.filtered_count)} of {data.filtered_count} results
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                            disabled={!data.has_previous}
                            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </button>

                        {Array.from({ length: Math.min(5, data.total_pages) }, (_, i) => {
                            const page = Math.max(1, Math.min(data.total_pages - 4, currentPage - 2)) + i;
                            return (
                                <button
                                    key={page}
                                    onClick={() => setCurrentPage(page)}
                                    className={`px-3 py-2 border rounded-lg ${currentPage === page
                                        ? 'bg-indigo-600 border-indigo-600 text-white'
                                        : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                                        }`}
                                >
                                    {page}
                                </button>
                            );
                        })}

                        <button
                            onClick={() => setCurrentPage(Math.min(data.total_pages, currentPage + 1))}
                            disabled={!data.has_next}
                            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <ChevronRight className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            )}

            {filteredResults.length === 0 && !loading && (
                <div className="text-center py-12">
                    <Search className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <p className="text-gray-600 dark:text-gray-400 text-lg">No scan results found</p>
                    <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">
                        Try adjusting your search terms or filters
                    </p>
                </div>
            )}

            {/* Click outside handler */}
            {showActions && (
                <div
                    className="fixed inset-0 z-0"
                    onClick={() => setShowActions(null)}
                />
            )}
        </div>
    );
}