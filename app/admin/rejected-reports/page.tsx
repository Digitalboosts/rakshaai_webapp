'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@/lib/redux/reducers';
import type { AppDispatch } from '@/lib/redux/store';
import { fetchRejectedReports as fetchRejectedReportsAction } from '@/lib/redux/actions';
import { ScamReport } from '@/lib/redux/types';
import { AdminRouteGuard } from '@/components/AdminRouteGuard';
import { AdminNavbar, AdminSidebar } from '@/components/AdminNavigation';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import {
    AlertTriangle,
    Search,
    Filter,
    Phone,
    CreditCard,
    Globe,
    XCircle,
    Flag,
    Download,
    Clock,
    User,
    Calendar,
    ExternalLink,
    RefreshCw,
    ChevronDown
} from 'lucide-react';

type FilterType = 'all' | 'web' | 'phone' | 'upi';

export default function AdminRejectedReportsPage() {
    const dispatch = useDispatch<AppDispatch>();
    const { 
        reports, 
        totalCount, 
        isLoading: loading, 
        error 
    } = useSelector((state: RootState) => state.rejectedReports);
    
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState<FilterType>('all');
    const [expandedCard, setExpandedCard] = useState<string | null>(null);

    // Fetch rejected scam reports using Redux
    const handleFetchReports = useCallback(
        (force: boolean = false) => {
            const filter = filterType !== 'all' ? { type: filterType } : undefined;
            dispatch(fetchRejectedReportsAction(filter, force));
        },
        [dispatch, filterType]
    );

    // 1️⃣ First page load ONLY
    useEffect(() => {
        handleFetchReports(false);
    }, []);

    // 2️⃣ Filter change
    useEffect(() => {
        handleFetchReports(false);
    }, [filterType]);

    // Filter reports based on search term
    const filteredReports = reports.filter(report => {
        const searchLower = searchTerm.toLowerCase();
        return (
            report.name.toLowerCase().includes(searchLower) ||
            report.review.toLowerCase().includes(searchLower) ||
            report.scammer_phone_number?.toLowerCase().includes(searchLower) ||
            report.reporter_phone_number?.toLowerCase().includes(searchLower) ||
            report.upi_id?.toLowerCase().includes(searchLower) ||
            report.website_url?.toLowerCase().includes(searchLower)
        );
    });

    const getTypeIcon = (type: string) => {
        switch (type) {
            case 'phone': return <Phone className="h-5 w-5" />;
            case 'upi': return <CreditCard className="h-5 w-5" />;
            case 'web': return <Globe className="h-5 w-5" />;
            default: return <Flag className="h-5 w-5" />;
        }
    };

    const getTypeColor = (type: string) => {
        switch (type) {
            case 'phone': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
            case 'upi': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400';
            case 'web': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
            default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
        }
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

    const getScamDetails = (report: ScamReport) => {
        switch (report.scam_type) {
            case 'phone':
                return {
                    primary: report.scammer_phone_number || 'N/A',
                    secondary: `Reporter: ${report.reporter_phone_number || 'N/A'}`,
                    label: 'Scammer Phone'
                };
            case 'upi':
                return {
                    primary: report.upi_id || 'N/A',
                    secondary: null,
                    label: 'UPI ID'
                };
            case 'web':
                return {
                    primary: report.website_url || 'N/A',
                    secondary: report.slug ? `Slug: ${report.slug}` : null,
                    label: 'Website URL'
                };
            default:
                return {
                    primary: 'N/A',
                    secondary: null,
                    label: 'Details'
                };
        }
    };

    const toggleCardExpansion = (cardId: string) => {
        setExpandedCard(expandedCard === cardId ? null : cardId);
    };

    return (
        <AdminRouteGuard>
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
                <AdminNavbar currentPage="rejected-reports" />
                <AdminSidebar currentPage="rejected-reports" />

                {/* Main Content */}
                <div className="md:pl-64 pt-16">
                    <div className="px-4 sm:px-6 lg:px-8 py-8">
                        {/* Premium Page Header */}
                        <div className="mb-6">
                            <div className="flex justify-between items-start mb-4">
                                <div className="space-y-1">
                                    <div className="flex items-center space-x-3">
                                        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            Rejected Reports
                                        </h1>
                                        <div className="px-2.5 py-1 bg-gradient-to-r from-red-500 to-rose-600 text-white text-xs font-semibold rounded-full shadow-sm">
                                            {totalCount}
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                                        Review rejected security reports • Grid dashboard • Real-time updates
                                    </p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="flex items-center space-x-2 text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 px-3 py-2 rounded-lg">
                                        <div className={`w-2 h-2 rounded-full transition-colors duration-200 ${expandedCard ? 'bg-red-500' : 'bg-gray-300'}`}></div>
                                        <span>{expandedCard ? 'Card expanded' : 'Grid view'}</span>
                                    </div>
                                    {expandedCard && (
                                        <Button
                                            onClick={() => setExpandedCard(null)}
                                            size="sm"
                                            variant="outline"
                                            className="text-xs px-3 py-2 hover:scale-105 transition-transform duration-200"
                                        >
                                            Collapse All
                                        </Button>
                                    )}
                                    <Button
                                        onClick={() => handleFetchReports(true)}
                                        disabled={loading}
                                        className="flex items-center space-x-2 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 px-4 py-2"
                                    >
                                        <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
                                        <span>Refresh</span>
                                    </Button>
                                </div>
                            </div>

                            {/* Premium Stats Bar */}
                            <div className="flex items-center justify-between py-3 px-4 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl border border-gray-200 dark:border-gray-600">
                                <div className="flex items-center space-x-6">
                                    <div className="text-center">
                                        <div className="text-lg font-bold text-gray-900 dark:text-white">{totalCount}</div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">Total Reports</div>
                                    </div>
                                    <div className="w-px h-8 bg-gray-300 dark:bg-gray-600"></div>
                                    <div className="text-center">
                                        <div className="text-lg font-bold text-red-600 dark:text-red-400">{filteredReports.length}</div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">Rejected</div>
                                    </div>
                                    <div className="w-px h-8 bg-gray-300 dark:bg-gray-600"></div>
                                    <div className="text-center">
                                        <div className="text-lg font-bold text-rose-600 dark:text-rose-400">0</div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">Reviewed Today</div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
                                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                                    <span>Live updates</span>
                                </div>
                            </div>
                        </div>

                        {/* Premium Filters */}
                        <Card className="p-5 mb-5 border-0 shadow-lg bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                            <div className="space-y-4">
                                {/* Enhanced Search Bar */}
                                <div className="relative group">
                                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-red-500 w-4 h-4 transition-colors duration-200" />
                                    <input
                                        type="text"
                                        placeholder="Search rejected reports by name, content, phone, UPI, or website..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full pl-11 pr-24 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 placeholder-gray-400 text-sm font-medium shadow-sm hover:shadow-md"
                                    />
                                    {searchTerm && (
                                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                                            <div className="text-xs font-semibold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/30 px-2 py-1 rounded-full">
                                                {filteredReports.length} found
                                            </div>
                                            <button
                                                onClick={() => setSearchTerm('')}
                                                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                                            >
                                                <XCircle className="h-4 w-4" />
                                            </button>
                                        </div>
                                    )}
                                </div>

                                {/* Premium Filter Chips */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">Filter by type:</span>
                                        <div className="flex space-x-1.5">
                                            <button
                                                onClick={() => setFilterType('all')}
                                                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:scale-105 hover:shadow-md ${filterType === 'all'
                                                    ? 'bg-gradient-to-r from-red-500 to-rose-600 text-white shadow-lg'
                                                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600'
                                                    }`}
                                            >
                                                All Types
                                            </button>
                                            <button
                                                onClick={() => setFilterType('web')}
                                                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:scale-105 hover:shadow-md flex items-center space-x-2 ${filterType === 'web'
                                                    ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white shadow-lg'
                                                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600'
                                                    }`}
                                            >
                                                <Globe className="h-4 w-4" />
                                                <span>Website</span>
                                            </button>
                                            <button
                                                onClick={() => setFilterType('phone')}
                                                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:scale-105 hover:shadow-md flex items-center space-x-2 ${filterType === 'phone'
                                                    ? 'bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg'
                                                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600'
                                                    }`}
                                            >
                                                <Phone className="h-4 w-4" />
                                                <span>Phone</span>
                                            </button>
                                            <button
                                                onClick={() => setFilterType('upi')}
                                                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:scale-105 hover:shadow-md flex items-center space-x-2 ${filterType === 'upi'
                                                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg'
                                                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600'
                                                    }`}
                                            >
                                                <CreditCard className="h-4 w-4" />
                                                <span>UPI</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                                            {filteredReports.length} of {totalCount} reports
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* Loading State */}
                        {loading && (
                            <div className="flex justify-center items-center py-12">
                                <div className="text-center">
                                    <RefreshCw className="h-8 w-8 animate-spin mx-auto mb-4 text-red-600" />
                                    <p className="text-gray-500 dark:text-gray-400">Loading rejected reports...</p>
                                </div>
                            </div>
                        )}

                        {/* Error State */}
                        {error && (
                            <Card className="p-6 mb-6">
                                <div className="space-y-3">
                                    <div className="flex items-center space-x-3 text-red-600 dark:text-red-400">
                                        <AlertTriangle className="h-5 w-5" />
                                        <p className="font-medium">Error loading rejected reports</p>
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{error}</p>
                                    <div className="text-xs text-gray-500 dark:text-gray-500">
                                        {/* <p>API: /api/admin/scam-reports/rejected</p> */}
                                        {/* <p>Backend: {process.env.NEXT_PUBLIC_BACKEND_API_URL}trustfinder/api/v0/web/scam-reports/crud/</p> */}
                                        <p>Status: rejected, Type: {filterType}</p>
                                    </div>
                                    <Button onClick={() => handleFetchReports(true)} size="sm" className="mt-2">
                                        Try Again
                                    </Button>
                                </div>
                            </Card>
                        )}

                        {/* Reports List */}
                        {!loading && !error && (
                            <div className="space-y-6">
                                {filteredReports.length === 0 ? (
                                    <Card className="p-12 text-center">
                                        <XCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
                                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No rejected reports found</h3>
                                        <p className="text-gray-500 dark:text-gray-400">
                                            {searchTerm
                                                ? "Try adjusting your search terms or filters"
                                                : "No rejected scam reports match the current filters"
                                            }
                                        </p>
                                    </Card>
                                ) : (
                                    <div className="space-y-4">
                                        {filteredReports.map((report) => {
                                            const scamDetails = getScamDetails(report);
                                            const cardId = `${report.scam_type}-${report.id}`;
                                            const isExpanded = expandedCard === cardId;

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
                                                                <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center shadow-sm transition-all duration-200 group-hover:scale-105 ${report.scam_type === 'phone' ? 'bg-gradient-to-br from-emerald-100 to-emerald-200 text-emerald-600 dark:from-emerald-900/40 dark:to-emerald-800/40 dark:text-emerald-400' :
                                                                    report.scam_type === 'upi' ? 'bg-gradient-to-br from-violet-100 to-violet-200 text-violet-600 dark:from-violet-900/40 dark:to-violet-800/40 dark:text-violet-400' :
                                                                        'bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600 dark:from-blue-900/40 dark:to-blue-800/40 dark:text-blue-400'
                                                                    }`}>
                                                                    {getTypeIcon(report.scam_type)}
                                                                </div>

                                                                <div className="flex-1 min-w-0">
                                                                    {/* Enhanced header with better spacing */}
                                                                    <div className="flex items-center gap-2 mb-1">
                                                                        <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                                                            {scamDetails.label}
                                                                        </span>
                                                                        <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-700 text-xs font-medium text-gray-600 dark:text-gray-300">#{report.id}</span>
                                                                    </div>

                                                                    {/* Primary identifier with enhanced styling */}
                                                                    <div className="font-mono text-lg font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
                                                                        {scamDetails.primary}
                                                                    </div>

                                                                    {/* Reporter info with better styling */}
                                                                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                                                        <span className="mr-1">Reported by:</span>
                                                                        <span className="font-semibold text-gray-800 dark:text-gray-200">{report.name}</span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            {/* Enhanced Status & Actions */}
                                                            <div className="flex items-start gap-2">
                                                                {/* Enhanced date and status */}
                                                                <div className="text-right hidden sm:block">
                                                                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-1 font-medium">
                                                                        {formatDate(report.created_at)}
                                                                    </div>
                                                                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold shadow-sm bg-gradient-to-r from-red-100 to-red-200 text-red-800 dark:from-red-900/40 dark:to-red-800/40 dark:text-red-300">
                                                                        <div className="w-1.5 h-1.5 rounded-full mr-1.5 bg-red-500"></div>
                                                                        Rejected
                                                                    </span>
                                                                </div>

                                                                {/* Enhanced Expand Indicator */}
                                                                <ChevronDown className={`h-5 w-5 text-gray-400 transition-all duration-300 group-hover:text-gray-600 ${isExpanded ? 'rotate-180 text-gray-600 dark:text-gray-300' : 'hover:text-gray-600 dark:hover:text-gray-300'
                                                                    }`} />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Expanded Content */}
                                                    {isExpanded && (
                                                        <div className="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                                                            <div className="p-4 space-y-4">
                                                                {/* Report Content */}
                                                                <div>
                                                                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                                                        Complete Report Details
                                                                    </h4>
                                                                    <div className="bg-white dark:bg-gray-900 p-3 rounded border border-gray-200 dark:border-gray-700">
                                                                        <div className="text-gray-800 dark:text-gray-200">
                                                                            {report.review}
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                {/* Details Grid */}
                                                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                                                                    {/* Primary Information */}
                                                                    <div>
                                                                        <div className="mb-3">
                                                                            <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                                                                                {scamDetails.label}
                                                                            </span>
                                                                            <div className="mt-1 font-mono text-sm bg-white dark:bg-gray-900 p-2 rounded border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">
                                                                                {scamDetails.primary}
                                                                            </div>
                                                                        </div>
                                                                        {scamDetails.secondary && (
                                                                            <div>
                                                                                <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                                                                                    Additional Info
                                                                                </span>
                                                                                <div className="mt-1 text-sm bg-white dark:bg-gray-900 p-2 rounded border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">
                                                                                    {scamDetails.secondary}
                                                                                </div>
                                                                            </div>
                                                                        )}
                                                                    </div>

                                                                    {/* Metadata */}
                                                                    <div>
                                                                        <div className="mb-3">
                                                                            <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                                                                                Created Date
                                                                            </span>
                                                                            <div className="mt-1 text-sm bg-white dark:bg-gray-900 p-2 rounded border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">
                                                                                {formatDate(report.created_at)}
                                                                            </div>
                                                                        </div>
                                                                        <div>
                                                                            <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                                                                                Report Type
                                                                            </span>
                                                                            <div className="mt-1 flex items-center space-x-2 bg-white dark:bg-gray-900 p-2 rounded border border-gray-200 dark:border-gray-700">
                                                                                {getTypeIcon(report.scam_type)}
                                                                                <span className="text-sm font-medium text-gray-900 dark:text-gray-100 capitalize">
                                                                                    {report.scam_type}
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    {/* Additional Info */}
                                                                    <div>
                                                                        <div className="mb-3">
                                                                            <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                                                                                Last Updated
                                                                            </span>
                                                                            <div className="mt-1 text-sm bg-white dark:bg-gray-900 p-2 rounded border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">
                                                                                {formatDate(report.updated_at)}
                                                                            </div>
                                                                        </div>
                                                                        {report.slug && (
                                                                            <div>
                                                                                <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                                                                                    Slug
                                                                                </span>
                                                                                <div className="mt-1 font-mono text-xs bg-white dark:bg-gray-900 p-2 rounded border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">
                                                                                    {report.slug}
                                                                                </div>
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                </div>

                                                                {/* Rejection Status */}
                                                                <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded">
                                                                    <div className="flex items-center text-sm font-medium text-red-800 dark:text-red-400 mb-2">
                                                                        <XCircle className="h-4 w-4 mr-2" />
                                                                        Report Rejected
                                                                    </div>
                                                                    <p className="text-sm text-red-700 dark:text-red-300">
                                                                        This report has been reviewed and rejected. It does not meet the criteria for approval.
                                                                    </p>
                                                                </div>

                                                                {/* Attachment */}
                                                                {report.attachment && (
                                                                    <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                                                                        <a
                                                                            href={report.attachment}
                                                                            target="_blank"
                                                                            rel="noopener noreferrer"
                                                                            className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                                                                        >
                                                                            <Download className="h-4 w-4 mr-2" />
                                                                            View Attachment
                                                                        </a>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AdminRouteGuard>
    );
}