'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AdminRouteGuard } from '@/components/AdminRouteGuard';
import { AdminNavbar, AdminSidebar } from '@/components/AdminNavigation';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { 
  fetchApprovedReports as fetchApprovedReportsAction
} from '@/lib/redux/actions';
import { RootState } from '@/lib/redux/reducers';
import { AppDispatch } from '@/lib/redux/store';
import { ScamReport } from '@/lib/redux/types';
import {
    AlertTriangle,
    Search,
    Filter,
    Phone,
    CreditCard,
    Globe,
    CheckCircle,
    XCircle,
    Flag,
    Eye,
    Download,
    Clock,
    User,
    Calendar,
    ExternalLink,
    RefreshCw,
    ChevronDown
} from 'lucide-react';

type FilterType = 'all' | 'web' | 'phone' | 'upi';

export default function ApprovedReportsPage() {
    const dispatch = useDispatch<AppDispatch>();
    const { 
        reports, 
        totalCount, 
        isLoading: loading, 
        error 
    } = useSelector((state: RootState) => state.approvedReports);
    
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState<FilterType>('all');
    const [expandedCard, setExpandedCard] = useState<string | null>(null);

    // Fetch approved scam reports using Redux
    const handleFetchReports = useCallback(
        (force: boolean = false) => {
            const filter = filterType !== 'all' ? { type: filterType } : undefined;
            dispatch(fetchApprovedReportsAction(filter, force));
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
        const matchesSearch = report.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            report.review.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (report.scammer_phone_number && report.scammer_phone_number.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (report.upi_id && report.upi_id.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (report.website_url && report.website_url.toLowerCase().includes(searchTerm.toLowerCase()));
        return matchesSearch;
    });

    const getStatusBadge = (status: string) => {
        switch (status.toLowerCase()) {
            case 'approved':
                return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
            case 'pending':
                return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
            case 'rejected':
                return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
            default:
                return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400';
        }
    };

    const getTypeIcon = (type: string) => {
        switch (type) {
            case 'phone':
                return <Phone className="h-5 w-5" />;
            case 'upi':
                return <CreditCard className="h-5 w-5" />;
            case 'web':
                return <Globe className="h-5 w-5" />;
            default:
                return <AlertTriangle className="h-5 w-5" />;
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
                    secondary: report.domain ? `Domain: ${report.domain}` : null,
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
                <AdminNavbar currentPage="approved-reports" />
                <AdminSidebar currentPage="approved-reports" />

                {/* Main Content */}
                <div className="md:pl-64 pt-16">
                    <div className="px-4 sm:px-6 lg:px-8 py-8">
                        {/* Premium Page Header */}
                        <div className="mb-6">
                            <div className="flex justify-between items-start mb-4">
                                <div className="space-y-1">
                                    <div className="flex items-center space-x-3">
                                        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            Approved Reports
                                        </h1>
                                        <div className="px-2.5 py-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-semibold rounded-full shadow-sm">
                                            {totalCount}
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                                        View approved security reports • Grid dashboard • Real-time updates
                                    </p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="flex items-center space-x-2 text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 px-3 py-2 rounded-lg">
                                        <div className={`w-2 h-2 rounded-full transition-colors duration-200 ${expandedCard ? 'bg-green-500' : 'bg-gray-300'}`}></div>
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
                                        className="flex items-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 px-4 py-2"
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
                                        <div className="text-lg font-bold text-green-600 dark:text-green-400">{filteredReports.length}</div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">Approved</div>
                                    </div>
                                    <div className="w-px h-8 bg-gray-300 dark:bg-gray-600"></div>
                                    <div className="text-center">
                                        <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">0</div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">Reviewed Today</div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <span>Live updates</span>
                                </div>
                            </div>
                        </div>

                        {/* Premium Filters */}
                        <Card className="p-5 mb-5 border-0 shadow-lg bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                            <div className="space-y-4">
                                {/* Enhanced Search Bar */}
                                <div className="relative group">
                                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-green-500 w-4 h-4 transition-colors duration-200" />
                                    <input
                                        type="text"
                                        placeholder="Search approved reports by name, content, phone, UPI, or website..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full pl-11 pr-24 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 placeholder-gray-400 text-sm font-medium shadow-sm hover:shadow-md"
                                    />
                                    {searchTerm && (
                                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                                            <div className="text-xs font-semibold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded-full">
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
                                            {(['all', 'web', 'phone', 'upi'] as FilterType[]).map((type) => (
                                                <button
                                                    key={type}
                                                    onClick={() => setFilterType(type)}
                                                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 hover:scale-105 ${
                                                        filterType === type
                                                            ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg'
                                                            : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                                                    }`}
                                                >
                                                    <div className="flex items-center space-x-1.5">
                                                        {type !== 'all' && getTypeIcon(type)}
                                                        <span>{type === 'all' ? 'All Types' : type.charAt(0).toUpperCase() + type.slice(1)}</span>
                                                        <div className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                                                            filterType === type
                                                                ? 'bg-white/20 text-white'
                                                                : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300'
                                                        }`}>
                                                            {type === 'all' ? reports.length : reports.filter(r => r.scam_type === type).length}
                                                        </div>
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                                            {filteredReports.length} of {reports.length} reports
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* Loading State */}
                        {loading && (
                            <div className="flex justify-center items-center py-12">
                                <div className="text-center">
                                    <RefreshCw className="h-8 w-8 animate-spin mx-auto mb-4 text-indigo-600" />
                                    <p className="text-gray-500 dark:text-gray-400">Loading approved reports...</p>
                                </div>
                            </div>
                        )}

                        {/* Error State */}
                        {error && (
                            <Card className="p-6 mb-6">
                                <div className="space-y-3">
                                    <div className="flex items-center space-x-3 text-red-600 dark:text-red-400">
                                        <AlertTriangle className="h-5 w-5" />
                                        <p className="font-medium">Error loading approved reports</p>
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{error}</p>
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
                                        <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No approved reports found</h3>
                                        <p className="text-gray-500 dark:text-gray-400">
                                            {searchTerm
                                                ? "Try adjusting your search terms or filters"
                                                : "No approved scam reports match the current filters"
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
                                                    className={`group border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden ${
                                                        isExpanded
                                                            ? 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 shadow-md'
                                                            : 'bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800/80 hover:border-gray-300 dark:hover:border-gray-600'
                                                    }`}
                                                >
                                                    {/* Card Header */}
                                                    <div className="p-5 pb-3">
                                                        <div className="flex items-start justify-between">
                                                            <div className="flex items-start space-x-4 flex-1">
                                                                {/* Type Icon & Status */}
                                                                <div className="flex flex-col items-center space-y-2 pt-1">
                                                                    <div className={`p-2.5 rounded-xl bg-gradient-to-br ${
                                                                        report.scam_type === 'phone' ? 'from-red-500 to-red-600' :
                                                                        report.scam_type === 'upi' ? 'from-orange-500 to-orange-600' :
                                                                        'from-blue-500 to-blue-600'
                                                                    } text-white shadow-lg group-hover:shadow-xl transition-shadow duration-200`}>
                                                                        {getTypeIcon(report.scam_type)}
                                                                    </div>
                                                                    <div className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusBadge(report.status)}`}>
                                                                        ✓ Approved
                                                                    </div>
                                                                </div>

                                                                {/* Main Content */}
                                                                <div className="flex-1 space-y-3">
                                                                    {/* Header Info */}
                                                                    <div className="flex items-center justify-between">
                                                                        <div className="flex items-center space-x-3">
                                                                            <h3 className="font-bold text-gray-900 dark:text-white text-lg tracking-tight">
                                                                                {report.name}
                                                                            </h3>
                                                                            <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
                                                                                <Calendar className="h-3 w-3" />
                                                                                <span>{formatDate(report.updated_at)}</span>
                                                                            </div>
                                                                        </div>
                                                                        <button
                                                                            onClick={() => toggleCardExpansion(cardId)}
                                                                            className="flex items-center space-x-2 px-3 py-1.5 text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-all duration-200"
                                                                        >
                                                                            <Eye className="h-3 w-3" />
                                                                            <span>{isExpanded ? 'Collapse' : 'Expand'}</span>
                                                                            <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                                                                        </button>
                                                                    </div>

                                                                    {/* Primary Details */}
                                                                    <div className="flex items-start space-x-6">
                                                                        <div className="flex-1">
                                                                            <div className="flex items-center space-x-2 mb-2">
                                                                                <span className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                                                                                    {scamDetails.label}
                                                                                </span>
                                                                            </div>
                                                                            <p className="text-sm font-mono text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800 px-3 py-2 rounded-lg break-all">
                                                                                {scamDetails.primary}
                                                                            </p>
                                                                            {scamDetails.secondary && (
                                                                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                                                                    {scamDetails.secondary}
                                                                                </p>
                                                                            )}
                                                                        </div>
                                                                    </div>

                                                                    {/* Review Preview */}
                                                                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                                                                        <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-2">
                                                                            {report.review}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Expanded Content */}
                                                    {isExpanded && (
                                                        <div className="px-5 pb-5 space-y-4 border-t border-gray-200 dark:border-gray-700 pt-4">
                                                            {/* Full Review */}
                                                            <div className="space-y-2">
                                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
                                                                    <Flag className="h-4 w-4" />
                                                                    <span>Full Report</span>
                                                                </h4>
                                                                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                                                                    <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap leading-relaxed">
                                                                        {report.review}
                                                                    </p>
                                                                </div>
                                                            </div>

                                                            {/* Additional Details */}
                                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                                <div className="space-y-3">
                                                                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
                                                                        <User className="h-4 w-4" />
                                                                        <span>Report Details</span>
                                                                    </h4>
                                                                    <div className="space-y-2 text-xs">
                                                                        <div className="flex justify-between">
                                                                            <span className="text-gray-500 dark:text-gray-400">Reported by:</span>
                                                                            <span className="font-medium text-gray-900 dark:text-white">{report.name}</span>
                                                                        </div>
                                                                        <div className="flex justify-between">
                                                                            <span className="text-gray-500 dark:text-gray-400">Report ID:</span>
                                                                            <span className="font-mono text-gray-700 dark:text-gray-300">#{report.id}</span>
                                                                        </div>
                                                                        <div className="flex justify-between">
                                                                            <span className="text-gray-500 dark:text-gray-400">Submitted:</span>
                                                                            <span className="text-gray-700 dark:text-gray-300">{formatDate(report.created_at)}</span>
                                                                        </div>
                                                                        <div className="flex justify-between">
                                                                            <span className="text-gray-500 dark:text-gray-400">Approved:</span>
                                                                            <span className="text-gray-700 dark:text-gray-300">{formatDate(report.updated_at)}</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
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