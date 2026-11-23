'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AdminRouteGuard } from '@/components/AdminRouteGuard';
import { AdminNavbar, AdminSidebar } from '@/components/AdminNavigation';
import { Card } from '@/components/ui/Card';
import { motion } from 'framer-motion';
import {
    fetchScannedData as fetchScannedDataAction
} from '@/lib/redux/actions';
import { RootState } from '@/lib/redux/reducers';
import { AppDispatch } from '@/lib/redux/store';
import { ScannedData } from '@/lib/redux/types';
import {
    Database,
    TrendingUp,
    Shield,
    AlertTriangle,
    BarChart3,
    RefreshCw,
    Download,
    Filter,
    Search,
    Globe,
    CheckCircle,
    XCircle,
    Eye,
    MoreHorizontal,
    Calendar,
    Users,
    Lock,
    ExternalLink,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    Monitor,
    Server,
    Activity,
    Zap,
    FileText
} from 'lucide-react';

interface ScannedDataItem {
    id: number;
    domain: string;
    user: string;
    slug: string;
    total_count: number;
    created_at: string;
    data: {
        overall_trust_percentage: number;
        overall_trust_level: string;
        total_number_of_reviews: number;
        is_live?: boolean;
        summary?: string;
        action_items: {
            risk_level: string;
            trust_level: string;
            should_avoid?: string[];
            can_do?: string[];
            payment_advice?: string;
        };
        ssl_info: {
            valid?: boolean;
            days_left?: number;
        };
        url_details: {
            business_name?: string;
            final_url?: string;
            status_code?: number;
            response_time?: number;
        };
        website_reviews?: {
            message?: string;
        };
        domain_info: {
            domain_age_days?: number;
            registrar?: string;
            ip?: string;
            ip_reputation?: {
                abuse_score?: number;
                usage_type?: string;
            };
        };
    };
}

export default function AdminScannedDataPage() {
    const dispatch = useDispatch<AppDispatch>();
    const { 
        scannedData,
        totalCount,
        isLoading: loading,
        error 
    } = useSelector((state: RootState) => state.scannedData);
    
    const [searchTerm, setSearchTerm] = useState('');
    const [expandedCard, setExpandedCard] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [refreshing, setRefreshing] = useState(false);
    const pageSize = 10;
    
    // Convert Redux scannedData to local format for compatibility
    const data = {
        results: scannedData as any[],
        total_data_count: totalCount
    };
    
    const totalPages = Math.ceil(totalCount / pageSize);

    // Fetch scanned data using Redux
    const handleFetchData = useCallback(
        (pageNumber: number, force: boolean = false) => {
            const filter = {
                page: pageNumber,
                page_size: pageSize
            };
            console.log('🔄 Fetching data for page:', pageNumber, 'Filter:', filter);
            dispatch(fetchScannedDataAction(filter, force));
        },
        [dispatch, pageSize]
    );

    // Initial load
    useEffect(() => {
        console.log('📱 Initial load - Page:', currentPage);
        handleFetchData(currentPage, false);
    }, [handleFetchData, currentPage]);

    // Reset to first page when search term changes
    useEffect(() => {
        if (currentPage !== 1) {
            console.log('🔍 Search changed, resetting to page 1');
            setCurrentPage(1);
        }
    }, [searchTerm]);

    // Add debugging to track Redux state changes
    useEffect(() => {
        console.log('📊 Redux state updated - Total items:', totalCount, 'Loading:', loading, 'Data length:', scannedData.length);
    }, [totalCount, loading, scannedData]);

    // Add debugging to track currentPage changes
    useEffect(() => {
        console.log('📄 Current page changed to:', currentPage, 'Total pages:', totalPages);
    }, [currentPage, totalPages]);

    const calculateStats = (results: any[]) => {
        const total = results.length;
        const safe = results.filter(r => r.data?.overall_trust_percentage >= 60).length;
        const caution = results.filter(r => r.data?.overall_trust_percentage >= 40 && r.data?.overall_trust_percentage < 60).length;
        const risky = results.filter(r => (r.data?.overall_trust_percentage ?? 0) < 40).length;
        const avgTrustScore = total > 0 ? Math.round(results.reduce((acc, r) => acc + (r.data?.overall_trust_percentage || 0), 0) / total / 10) : 0;

        return { total, safe, caution, risky, avgTrustScore };
    };
    
    const filterStats = calculateStats(data.results || []);

    const refreshData = async () => {
        setRefreshing(true);
        try {
            console.log('🔄 Refreshing data for current page:', currentPage);
            handleFetchData(currentPage, true); // Force refresh
        } catch (error) {
            console.error('Error refreshing data:', error);
        } finally {
            setRefreshing(false);
        }
    };

    const exportAllData = async () => {
        try {
            // Use the data from Redux state
            const dataToExport = filteredScannedData;
            
            if (dataToExport.length === 0) {
                alert('No data available to export.');
                return;
            }

            const exportData = dataToExport.map((item: any) => ({
                id: item.id,
                domain: item.domain,
                business_name: item.data?.url_details?.business_name,
                trust_percentage: item.data?.trust_percentage,
                risk_level: item.data?.action_items?.risk_level,
                ssl_valid: item.data?.ssl_info?.valid,
                ssl_days_left: item.data?.ssl_info?.days_left,
                total_reviews: item.data?.website_reviews?.total_reviews_checked,
                negative_reviews: item.data?.website_reviews?.total_negative_sentiment_reviews,
                domain_age_days: item.data?.domain_info?.domain_age_days,
                registrar: item.data?.domain_info?.registrar,
                ip_address: item.data?.domain_info?.ip,
                abuse_score: item.data?.domain_info?.ip_reputation?.abuse_score,
                usage_type: item.data?.domain_info?.ip_reputation?.usage_type,
                scan_date: item.created_at,
                user: item.user,
                slug: item.slug
            }));

            const blob = new Blob([JSON.stringify(exportData, null, 2)], {
                type: 'application/json'
            });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `admin-scanned-data-${new Date().toISOString().split('T')[0]}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Export failed:', error);
            alert('Export failed. Please try again.');
        }
    };



    const goToNextPage = () => {
        if (currentPage < totalPages && !loading) {
            const nextPage = currentPage + 1;
            console.log('➡️ Going to next page:', nextPage);
            setCurrentPage(nextPage);
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 1 && !loading) {
            const prevPage = currentPage - 1;
            console.log('⬅️ Going to previous page:', prevPage);
            setCurrentPage(prevPage);
        }
    };

    const toggleCardExpansion = (cardId: string) => {
        setExpandedCard(prev => prev === cardId ? null : cardId);
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const getRiskLevel = (trustPercentage: number) => {
        if (trustPercentage >= 60) return { level: 'safe', color: 'emerald', label: 'Safe' };
        if (trustPercentage >= 40) return { level: 'caution', color: 'yellow', label: 'Caution' };
        return { level: 'risky', color: 'red', label: 'High Risk' };
    };

    const filteredScannedData = data?.results?.filter((item: ScannedDataItem) => {
        if (!searchTerm) return true;
        const searchLower = searchTerm.toLowerCase();
        return (
            item.domain?.toLowerCase().includes(searchLower) ||
            item.user?.toLowerCase().includes(searchLower) ||
            item.data?.url_details?.business_name?.toLowerCase().includes(searchLower) ||
            item.data?.action_items?.risk_level?.toLowerCase().includes(searchLower)
        );
    }) || [];

    return (
        <AdminRouteGuard>
            <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
                <AdminSidebar currentPage="scanned-data" />

                <div className="flex-1 flex flex-col md:ml-60">
                    <AdminNavbar currentPage="Scanned Data Management" />

                    <main className="flex-1 overflow-auto pt-14">
                        <div className="p-6 space-y-6">
                            {/* Header */}
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="p-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600">
                                        <Database className="h-8 w-8 text-white" />
                                    </div>
                                    <div>
                                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                                            Scanned Data Management
                                        </h1>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            Monitor and manage all website security scans
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={refreshData}
                                        disabled={refreshing}
                                        className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white rounded-lg transition-colors"
                                    >
                                        <RefreshCw className={`h-4 w-4 ${refreshing ? 'animate-spin' : ''}`} />
                                        {refreshing ? 'Refreshing...' : 'Refresh'}
                                    </button>

                                    <button
                                        onClick={exportAllData}
                                        className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                                    >
                                        <Download className="h-4 w-4" />
                                        Export All
                                    </button>
                                </div>
                            </motion.div>

                            {/* Premium Stats Bar */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="flex items-center justify-between py-3 px-4 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl border border-gray-200 dark:border-gray-600"
                            >
                                <div className="flex items-center space-x-6">
                                    <div className="text-center">
                                        <div className="text-lg font-bold text-gray-900 dark:text-white">
                                            {loading ? '-' : (data?.total_data_count || 0)}
                                        </div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">Total Scans</div>
                                    </div>
                                    <div className="w-px h-8 bg-gray-300 dark:bg-gray-600"></div>
                                    <div className="text-center">
                                        <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                                            {filteredScannedData.length}
                                        </div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">Filtered</div>
                                    </div>
                                    <div className="w-px h-8 bg-gray-300 dark:bg-gray-600"></div>
                                    <div className="text-center">
                                        <div className="text-lg font-bold text-green-600 dark:text-green-400">
                                            {filterStats.safe}
                                        </div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">Safe Sites</div>
                                    </div>
                                    <div className="w-px h-8 bg-gray-300 dark:bg-gray-600"></div>
                                    <div className="text-center">
                                        <div className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                                            {filterStats.avgTrustScore}
                                        </div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">Avg Score</div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <span>Live updates</span>
                                </div>
                            </motion.div>

                            {/* Premium Search & Filters */}
                            <Card className="p-5 mb-5 border-0 shadow-lg bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                                <div className="space-y-4">
                                    {/* Enhanced Search Bar */}
                                    <div className="relative group">
                                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-500 w-4 h-4 transition-colors duration-200" />
                                        <input
                                            type="text"
                                            placeholder="Search scans by domain, user, business name, or risk level..."
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            className="w-full pl-11 pr-24 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 placeholder-gray-400 text-sm font-medium shadow-sm hover:shadow-md"
                                        />
                                        {searchTerm && (
                                            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                                                <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 rounded-full">
                                                    {filteredScannedData.length} found
                                                </div>
                                                <button
                                                    onClick={() => setSearchTerm('')}
                                                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                                                >
                                                    <XCircle className="h-4 w-4" />
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </Card>

                            {/* Loading State */}
                            {loading && (
                                <Card className="p-12 text-center">
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                    >
                                        <RefreshCw className="h-8 w-8 text-indigo-600 mx-auto mb-4" />
                                    </motion.div>
                                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Loading scanned data...</h3>
                                    <p className="text-gray-500 dark:text-gray-400">Please wait while we fetch the latest scan results</p>
                                </Card>
                            )}

                            {/* Scanned Data Accordion */}
                            {!loading && (
                                <div>
                                    {filteredScannedData.length === 0 ? (
                                        <Card className="p-12 text-center">
                                            <Database className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                                            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No scanned data found</h3>
                                            <p className="text-gray-500 dark:text-gray-400">
                                                {searchTerm
                                                    ? "Try adjusting your search terms"
                                                    : "No website scans match the current filters"
                                                }
                                            </p>
                                        </Card>
                                    ) : (
                                        <div className="space-y-4">
                                            {filteredScannedData.map((item: ScannedDataItem) => {
                                                const cardId = `scan-${item.id}`;
                                                const isExpanded = expandedCard === cardId;
                                                const riskInfo = getRiskLevel(item?.data?.overall_trust_percentage ?? 0);

                                                return (
                                                    <div
                                                        key={cardId}
                                                        className={`group border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden ${isExpanded
                                                            ? 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 shadow-md'
                                                            : 'bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800/80 hover:border-gray-300 dark:hover:border-gray-600'
                                                            }`}
                                                    >
                                                        {/* Header */}
                                                        <div
                                                            onClick={() => toggleCardExpansion(cardId)}
                                                            className="p-4 cursor-pointer hover:bg-gray-50/50 dark:hover:bg-gray-700/30 transition-all duration-200"
                                                        >
                                                            <div className="flex items-start gap-3">
                                                                {/* Enhanced Icon & Main Content */}
                                                                <div className="flex items-start gap-3 flex-1 min-w-0">
                                                                    <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center shadow-sm transition-all duration-200 group-hover:scale-105 ${riskInfo.level === 'safe' ? 'bg-gradient-to-br from-emerald-100 to-emerald-200 text-emerald-600 dark:from-emerald-900/40 dark:to-emerald-800/40 dark:text-emerald-400' :
                                                                        riskInfo.level === 'caution' ? 'bg-gradient-to-br from-yellow-100 to-yellow-200 text-yellow-600 dark:from-yellow-900/40 dark:to-yellow-800/40 dark:text-yellow-400' :
                                                                            'bg-gradient-to-br from-red-100 to-red-200 text-red-600 dark:from-red-900/40 dark:to-red-800/40 dark:text-red-400'
                                                                        }`}>
                                                                        <Globe className="h-5 w-5" />
                                                                    </div>

                                                                    <div className="flex-1 min-w-0">
                                                                        {/* Primary identifier - prominently displayed */}
                                                                        <div className="flex items-center gap-2 mb-1">
                                                                            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                                                                DOMAIN SCAN
                                                                            </span>
                                                                            <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-700 text-xs font-medium text-gray-600 dark:text-gray-300">#{item.id}</span>
                                                                        </div>
                                                                        <div className="font-mono text-lg font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
                                                                            {item.domain}
                                                                        </div>
                                                                        <div className="text-sm text-gray-600 dark:text-gray-400 truncate">
                                                                            Scanned by: <span className="font-medium text-gray-800 dark:text-gray-200">{item.user}</span>
                                                                            {item.data.url_details.business_name && (
                                                                                <span className="ml-2">• {item.data.url_details.business_name}</span>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                {/* Status & Actions */}
                                                                <div className="flex items-center gap-2">
                                                                    <div className="text-right hidden sm:block">
                                                                        <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                                                                            {formatDate(item.created_at)}
                                                                        </div>
                                                                        <div className="flex items-center gap-2">
                                                                            <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold shadow-sm ${riskInfo.level === 'safe' ? 'bg-gradient-to-r from-emerald-100 to-emerald-200 text-emerald-800 dark:from-emerald-900/40 dark:to-emerald-800/40 dark:text-emerald-300' :
                                                                                riskInfo.level === 'caution' ? 'bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 dark:from-yellow-900/40 dark:to-yellow-800/40 dark:text-yellow-300' :
                                                                                    'bg-gradient-to-r from-red-100 to-red-200 text-red-800 dark:from-red-900/40 dark:to-red-800/40 dark:text-red-300'
                                                                                }`}>
                                                                                <div className={`w-1.5 h-1.5 rounded-full mr-1.5 ${riskInfo.level === 'safe' ? 'bg-emerald-500' :
                                                                                    riskInfo.level === 'caution' ? 'bg-yellow-500' : 'bg-red-500'
                                                                                    }`}></div>
                                                                                {riskInfo.label}
                                                                            </span>
                                                                            <div className="text-lg font-bold text-gray-900 dark:text-white">
                                                                                {Math.round((item.data.overall_trust_percentage ?? 0) / 10)}/10
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    {/* Quick Actions */}
                                                                    <div className="flex items-center gap-1">
                                                                        <button
                                                                            onClick={(e) => {
                                                                                e.stopPropagation();
                                                                                const websiteUrl = item.domain.startsWith('http') ? item.domain : `https://${item.domain}`;
                                                                                window.open(websiteUrl, '_blank');
                                                                            }}
                                                                            className="p-2.5 text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg transition-colors"
                                                                            title="Visit Website"
                                                                        >
                                                                            <Eye className="h-4 w-4" />
                                                                        </button>

                                                                        <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* Expanded Content */}
                                                        {isExpanded && (
                                                            <motion.div
                                                                initial={{ opacity: 0, height: 0 }}
                                                                animate={{ opacity: 1, height: 'auto' }}
                                                                exit={{ opacity: 0, height: 0 }}
                                                                transition={{ duration: 0.3 }}
                                                                className="border-t border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50"
                                                            >
                                                                <div className="p-6">
                                                                    {/* Detailed Information Grid */}
                                                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                                                        {/* Security Details */}
                                                                        <div className="space-y-6">
                                                                            <span className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider block flex items-center">
                                                                                <Shield className="w-3 h-3 mr-2" />
                                                                                Security Details
                                                                            </span>
                                                                            <div className="space-y-4">
                                                                                <div className="flex items-center justify-between">
                                                                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">SSL Status</span>
                                                                                    <div className="flex items-center gap-2">
                                                                                        {item.data.ssl_info.valid ? (
                                                                                            <Lock className="h-4 w-4 text-green-600" />
                                                                                        ) : (
                                                                                            <AlertTriangle className="h-4 w-4 text-red-600" />
                                                                                        )}
                                                                                        <span className={`text-sm font-semibold ${item.data.ssl_info.valid ? 'text-green-600' : 'text-red-600'}`}>
                                                                                            {item.data.ssl_info.valid ? 'Valid' : 'Invalid'}
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                                {item.data.ssl_info.valid && item.data.ssl_info.days_left && (
                                                                                    <div className="flex items-center justify-between">
                                                                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">SSL Expires In</span>
                                                                                        <span className="text-sm font-semibold text-gray-900 dark:text-white">
                                                                                            {item.data.ssl_info.days_left} days
                                                                                        </span>
                                                                                    </div>
                                                                                )}
                                                                                <div className="flex items-center justify-between">
                                                                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Trust Score</span>
                                                                                    <div className="flex items-center gap-2">
                                                                                        <div className={`w-3 h-3 rounded-full ${riskInfo.level === 'safe' ? 'bg-green-500' :
                                                                                            riskInfo.level === 'caution' ? 'bg-yellow-500' : 'bg-red-500'
                                                                                            }`}></div>
                                                                                        <span className="text-lg font-bold text-gray-900 dark:text-white">
                                                                                            {((item?.data?.overall_trust_percentage ?? 0) / 10).toFixed(1)}/10
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        {/* Domain Information */}
                                                                        <div className="space-y-6">
                                                                            <span className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider block flex items-center">
                                                                                <Server className="w-3 h-3 mr-2" />
                                                                                Domain Information
                                                                            </span>
                                                                            <div className="space-y-4">
                                                                                <div className="flex items-center justify-between">
                                                                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Domain Age</span>
                                                                                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                                                                                        {item.data.domain_info.domain_age_days != null
                                                                                            ? `${Math.round(item.data.domain_info.domain_age_days / 365.25)} years`
                                                                                            : 'Unknown'}
                                                                                    </span>
                                                                                </div>
                                                                                <div className="flex items-center justify-between">
                                                                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Registrar</span>
                                                                                    <span className="text-sm font-semibold text-gray-900 dark:text-white truncate ml-2">
                                                                                        {item.data.domain_info.registrar || 'Unknown'}
                                                                                    </span>
                                                                                </div>
                                                                                <div className="flex items-center justify-between">
                                                                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">IP Address</span>
                                                                                    <span className="text-sm font-mono font-semibold text-gray-900 dark:text-white">
                                                                                        {item.data.domain_info.ip || 'Unknown'}
                                                                                    </span>
                                                                                </div>
                                                                                {item.data.domain_info.ip_reputation && (
                                                                                <div className="flex items-center justify-between">
                                                                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Abuse Score</span>
                                                                                    <span className={`text-sm font-semibold ${(item.data.domain_info.ip_reputation.abuse_score ?? 0) > 50 ? 'text-red-600' :
                                                                                        (item.data.domain_info.ip_reputation.abuse_score ?? 0) > 25 ? 'text-yellow-600' : 'text-green-600'
                                                                                        }`}>
                                                                                        {item.data.domain_info.ip_reputation.abuse_score ?? 0}%
                                                                                    </span>
                                                                                </div>
                                                                                )}
                                                                            </div>
                                                                        </div>

                                                                        {/* Reviews & Actions */}
                                                                        <div className="space-y-6">
                                                                            <span className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider block flex items-center">
                                                                                <Activity className="w-3 h-3 mr-2" />
                                                                                Reviews & Actions
                                                                            </span>
                                                                            <div className="space-y-4">
                                                                                <div className="flex items-center justify-between">
                                                                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Total Reviews</span>
                                                                                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                                                                                        {item.data.total_number_of_reviews ?? 0}
                                                                                    </span>
                                                                                </div>
                                                                                <div className="flex items-center justify-between">
                                                                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Trust Level</span>
                                                                                    <span className={`text-sm font-semibold ${item.data.overall_trust_level === 'TRUSTED' ? 'text-green-600' :
                                                                                        item.data.overall_trust_level === 'MODERATE_RISK' ? 'text-yellow-600' : 'text-red-600'}`}>
                                                                                        {item.data.overall_trust_level?.replace(/_/g, ' ')}
                                                                                    </span>
                                                                                </div>
                                                                                <div className="pt-4 space-y-3">
                                                                                    <button
                                                                                        onClick={() => window.open(`/check/${item.slug}`, '_blank')}
                                                                                        className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white rounded-lg font-semibold text-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-md"
                                                                                    >
                                                                                        <ExternalLink className="h-4 w-4 mr-2" />
                                                                                        View Full Report
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </motion.div>
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Pagination */}
                            {!loading && filteredScannedData.length > 0 && totalPages > 1 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg"
                                >
                                    <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                                        <span>Page {currentPage} of {totalPages}</span>
                                        <span>•</span>
                                        <span>{data?.total_data_count || 0} total items</span>
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <button
                                            onClick={goToPreviousPage}
                                            disabled={currentPage === 1 || loading}
                                            className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                        >
                                            <ChevronLeft className="h-4 w-4 mr-1" />
                                            Previous
                                        </button>

                                        <button
                                            onClick={goToNextPage}
                                            disabled={currentPage === totalPages || loading}
                                            className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                        >
                                            Next
                                            <ChevronRight className="h-4 w-4 ml-1" />
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </main>
                </div>
            </div>
        </AdminRouteGuard>
    );
}