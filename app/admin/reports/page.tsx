'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AdminRouteGuard } from '@/components/AdminRouteGuard';
import { AdminNavbar, AdminSidebar } from '@/components/AdminNavigation';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useToast } from '@/components/ui/Toast';
import { 
  fetchReports as fetchReportsAction,
  approveReport as approveReportAction,
  rejectReport as rejectReportAction,
  showNotification 
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

interface ScamReportsResponse {
  scam_type: string;
  status_filter: string;
  total_count: number;
  reports: ScamReport[];
}

type FilterType = 'all' | 'web' | 'phone' | 'upi';

export default function AdminReportsPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { 
    reports, 
    totalCount, 
    isLoading: loading, 
    error 
  } = useSelector((state: RootState) => state.reports);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<FilterType>('all');
  const [approvingIds, setApprovingIds] = useState<Set<number>>(new Set());
  const [rejectingIds, setRejectingIds] = useState<Set<number>>(new Set());
  const [confirmingReport, setConfirmingReport] = useState<ScamReport | null>(null);
  const [rejectingReport, setRejectingReport] = useState<ScamReport | null>(null);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const { addToast } = useToast();
    console.log('error:', error);
  const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL;

  // Approve a scam report using Redux
  const handleApproveReport = async (report: ScamReport) => {
    console.log('Approving report:', report?.scam_type);
    try {
      setApprovingIds(prev => new Set(prev).add(report.id));
      
      // Dispatch the approve action
      dispatch(approveReportAction(report.id.toString(), report?.scam_type));
      
      // Show success notification
      dispatch(showNotification({
        type: 'success',
        title: 'Report Approved',
        message: `${report.scam_type.charAt(0).toUpperCase() + report.scam_type.slice(1)} scam report from ${report.name} has been approved successfully!`
      }));
      
      // Also show toast for immediate user feedback
      addToast('success', `${report.scam_type.charAt(0).toUpperCase() + report.scam_type.slice(1)} scam report from ${report.name} has been approved successfully!`, 4000);
      
    } catch (err) {
      console.error('Error approving report:', err);
      dispatch(showNotification({
        type: 'error',
        title: 'Approval Failed',
        message: err instanceof Error ? err.message : 'Failed to approve report'
      }));
    } finally {
      setApprovingIds(prev => {
        const newSet = new Set(prev);
        newSet.delete(report.id);
        return newSet;
      });
    }
  };

  // Reject a scam report using Redux
  const handleRejectReport = async (report: ScamReport) => {
    try {
      setRejectingIds(prev => new Set(prev).add(report.id));
      
      // Dispatch the reject action
      dispatch(rejectReportAction(report.id.toString(), report?.scam_type));
      
      // Show success notification
      dispatch(showNotification({
        type: 'success',
        title: 'Report Rejected',
        message: `${report.scam_type.charAt(0).toUpperCase() + report.scam_type.slice(1)} scam report from ${report.name} has been rejected successfully!`
      }));
      
      // Also show toast for immediate user feedback
      addToast('success', `${report.scam_type.charAt(0).toUpperCase() + report.scam_type.slice(1)} scam report from ${report.name} has been rejected successfully!`, 4000);
      
    } catch (err) {
      console.error('Error rejecting report:', err);
      dispatch(showNotification({
        type: 'error',
        title: 'Rejection Failed',
        message: err instanceof Error ? err.message : 'Failed to reject report'
      }));
    } finally {
      setRejectingIds(prev => {
        const newSet = new Set(prev);
        newSet.delete(report.id);
        return newSet;
      });
    }
  };
const handleFetchReports = useCallback(
  (force: boolean = false) => {
    const filter = filterType !== 'all' ? { type: filterType } : undefined;
    dispatch(fetchReportsAction(filter, force));
  },
  [dispatch, filterType]
);


  // Fetch reports on component mount and when filters change
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

  const getShortDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return 'Today';
    if (diffDays === 2) return 'Yesterday';
    if (diffDays <= 7) return `${diffDays}d ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const toggleCardExpansion = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
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

  return (
    <AdminRouteGuard>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <AdminNavbar currentPage="reports" />
        <AdminSidebar currentPage="reports" />

        {/* Main Content */}
        <div className="md:pl-64 pt-16">
          <div className="px-4 sm:px-6 lg:px-8 py-8">
            {/* Premium Page Header */}
            <div className="mb-6">
              <div className="flex justify-between items-start mb-4">
                <div className="space-y-1">
                  <div className="flex items-center space-x-3">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Security Reports
                    </h1>
                    <div className="px-2.5 py-1 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-semibold rounded-full shadow-sm">
                      {totalCount}
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                    Review pending reports • Grid dashboard • Real-time updates
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2 text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 px-3 py-2 rounded-lg">
                    <div className={`w-2 h-2 rounded-full transition-colors duration-200 ${expandedCard ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
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
                    className="flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 px-4 py-2"
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
                    <div className="text-lg font-bold text-blue-600 dark:text-blue-400">{filteredReports.length}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">Filtered</div>
                  </div>
                  <div className="w-px h-8 bg-gray-300 dark:bg-gray-600"></div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600 dark:text-green-400">0</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">Processed Today</div>
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
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-500 w-4 h-4 transition-colors duration-200" />
                  <input
                    type="text"
                    placeholder="Search reports by name, content, phone, UPI, or website..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-11 pr-24 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 placeholder-gray-400 text-sm font-medium shadow-sm hover:shadow-md"
                  />
                  {searchTerm && (
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                      <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 rounded-full">
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
                          ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg'
                          : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600'
                          }`}
                      >
                        All Types
                      </button>
                      <button
                        onClick={() => setFilterType('web')}
                        className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:scale-105 hover:shadow-md flex items-center space-x-2 ${filterType === 'web'
                          ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white shadow-lg'
                          : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600'
                          }`}
                      >
                        <Globe className="h-3.5 w-3.5" />
                        <span>Website</span>
                      </button>
                      <button
                        onClick={() => setFilterType('phone')}
                        className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:scale-105 hover:shadow-md flex items-center space-x-2 ${filterType === 'phone'
                          ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg'
                          : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600'
                          }`}
                      >
                        <Phone className="h-3.5 w-3.5" />
                        <span>Phone</span>
                      </button>
                      <button
                        onClick={() => setFilterType('upi')}
                        className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:scale-105 hover:shadow-md flex items-center space-x-2 ${filterType === 'upi'
                          ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg'
                          : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600'
                          }`}
                      >
                        <CreditCard className="h-3.5 w-3.5" />
                        <span>UPI</span>
                      </button>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="flex items-center space-x-2">
                    <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                      {reports.length > 0 && `${filteredReports.length} of ${reports.length} shown`}
                    </div>
                  </div>
                </div>


              </div>
            </Card>

            {/* Premium Loading State */}
            {loading && (
              <div className="flex justify-center items-center py-16">
                <div className="text-center space-y-4">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 animate-pulse"></div>
                    <RefreshCw className="h-10 w-10 animate-spin mx-auto text-white relative z-10" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-600 dark:text-gray-300 font-semibold">Loading security reports...</p>
                    <div className="flex items-center justify-center space-x-1">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-1.5 h-1.5 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Error State */}
            {error && (
              <Card className="p-6 mb-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-red-600 dark:text-red-400">
                    <AlertTriangle className="h-5 w-5" />
                    <p className="font-medium">Error loading reports</p>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{error}</p>
                  <div className="text-xs text-gray-500 dark:text-gray-500">
                    {/* <p>API: /api/admin/scam-reports</p> */}
                    {/* <p>Backend: {process.env.NEXT_PUBLIC_BACKEND_API_URL}/trustfinder/api/v0/web/scam-reports/crud/</p> */}
                    <p>Status: pending, Type: {filterType}</p>
                  </div>
                  <Button onClick={() => handleFetchReports(true)} size="sm" className="mt-2">
                    Try Again
                  </Button>
                </div>
              </Card>
            )}

            {/* Reports Grid */}
            {!loading && !error && (
              <div>
                {filteredReports.length === 0 ? (
                  <Card className="p-12 text-center">
                    <AlertTriangle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No reports found</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      {searchTerm
                        ? "Try adjusting your search terms or filters"
                        : "No scam reports match the current filters"
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
                                  {/* Primary identifier - prominently displayed */}
                                  <div className="flex items-center gap-2 mb-1">
                                    <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                      {scamDetails.label}
                                    </span>
                                    <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-700 text-xs font-medium text-gray-600 dark:text-gray-300">#{report.id}</span>
                                  </div>
                                  <div className="font-mono text-lg font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
                                    {scamDetails.primary}
                                  </div>
                                  <div className="text-sm text-gray-600 dark:text-gray-400 truncate">
                                    Reported by: <span className="font-medium text-gray-800 dark:text-gray-200">{report.name}</span>
                                  </div>
                                </div>
                              </div>

                              {/* Status & Actions */}
                              <div className="flex items-center gap-2">
                                <div className="text-right hidden sm:block">
                                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                                    {formatDate(report.created_at)}
                                  </div>
                                  <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold shadow-sm ${report.status === 'pending' ? 'bg-gradient-to-r from-amber-100 to-amber-200 text-amber-800 dark:from-amber-900/40 dark:to-amber-800/40 dark:text-amber-300' :
                                    report.status === 'approved' ? 'bg-gradient-to-r from-emerald-100 to-emerald-200 text-emerald-800 dark:from-emerald-900/40 dark:to-emerald-800/40 dark:text-emerald-300' :
                                      'bg-gradient-to-r from-red-100 to-red-200 text-red-800 dark:from-red-900/40 dark:to-red-800/40 dark:text-red-300'
                                    }`}>
                                    <div className={`w-1.5 h-1.5 rounded-full mr-1.5 ${report.status === 'pending' ? 'bg-amber-500' :
                                      report.status === 'approved' ? 'bg-emerald-500' : 'bg-red-500'
                                      }`}></div>
                                    {report.status.charAt(0).toUpperCase() + report.status.slice(1)}
                                  </span>
                                </div>

                                {/* Quick Actions */}
                                <div className="flex items-center gap-1">
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setConfirmingReport(report);
                                    }}
                                    disabled={approvingIds.has(report.id)}
                                    className="p-2.5 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    title="Approve Report"
                                  >
                                    {approvingIds.has(report.id) ? (
                                      <RefreshCw className="h-4 w-4 animate-spin" />
                                    ) : (
                                      <CheckCircle className="h-4 w-4" />
                                    )}
                                  </button>
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setRejectingReport(report);
                                    }}
                                    disabled={rejectingIds.has(report.id)}
                                    className="p-2.5 text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    title="Reject Report"
                                  >
                                    {rejectingIds.has(report.id) ? (
                                      <RefreshCw className="h-4 w-4 animate-spin" />
                                    ) : (
                                      <XCircle className="h-4 w-4" />
                                    )}
                                  </button>
                                </div>

                                {/* Expand Indicator */}
                                <ChevronDown className={`h-5 w-5 text-gray-400 transition-all duration-200 ${isExpanded ? 'rotate-180 text-gray-600' : 'hover:text-gray-600'
                                  }`} />
                              </div>
                            </div>
                          </div>

                          {/* Expanded Content */}
                          {isExpanded && (
                            <div className="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                              <div className="p-4 space-y-4">
                                {/* Soft Report Content Section */}
                                <div className="relative">
                                  <div className="absolute -inset-4 bg-gradient-to-r from-slate-300/8 via-stone-300/8 to-gray-300/8 rounded-2xl blur-xl"></div>
                                  <div className="relative">
                                    <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-4 flex items-center">
                                      <div className="w-8 h-1 bg-gradient-to-r from-slate-400 to-stone-500 rounded-full mr-4 shadow-sm"></div>
                                      Complete Report Details
                                      <div className="ml-auto px-3 py-1 bg-gradient-to-r from-slate-100 to-stone-100 dark:from-slate-800/60 dark:to-stone-800/60 text-slate-700 dark:text-slate-300 text-xs font-bold rounded-full border border-slate-200 dark:border-slate-600/40">
                                        DETAILED VIEW
                                      </div>
                                    </h4>
                                    <div className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50/40 to-stone-50/30 dark:from-gray-800 dark:via-slate-800/30 dark:to-stone-800/20 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-600/40 shadow-md shadow-slate-300/10 dark:shadow-slate-700/20">
                                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-slate-200/20 to-stone-200/20 rounded-full blur-2xl"></div>
                                      <div className="relative text-base text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                                        {report.review}
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* Soft Details Grid */}
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                  {/* Primary Information Column */}
                                  <div className="space-y-6">
                                    <div className="group/detail">
                                      <span className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider block mb-3 flex items-center">
                                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-slate-400 to-stone-500 mr-2 shadow-sm"></div>
                                        {scamDetails.label}
                                      </span>
                                      <div className="relative overflow-hidden font-mono text-base font-bold p-4 bg-gradient-to-br from-slate-50 via-white to-stone-50 dark:from-slate-800/50 dark:via-gray-800 dark:to-stone-800/40 rounded-xl border-2 border-slate-200/80 dark:border-slate-600/50 shadow-sm shadow-slate-300/10 dark:shadow-slate-700/20 group-hover/detail:scale-105 transition-all duration-300 text-slate-800 dark:text-slate-200">
                                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-300 to-stone-400"></div>
                                        {scamDetails.primary}
                                      </div>
                                    </div>
                                    {scamDetails.secondary && (
                                      <div className="group/detail">
                                        <span className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider block mb-3 flex items-center">
                                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-slate-400 to-stone-500 mr-2 shadow-sm"></div>
                                          Additional Info
                                        </span>
                                        <div className="text-sm text-slate-700 dark:text-slate-300 bg-gradient-to-br from-slate-50 via-white to-stone-50 dark:from-slate-700 dark:via-slate-800 dark:to-stone-700 p-4 rounded-xl border border-slate-200 dark:border-slate-600 font-medium shadow-sm group-hover/detail:scale-105 transition-all duration-300">
                                          {scamDetails.secondary}
                                        </div>
                                      </div>
                                    )}
                                  </div>

                                  {/* Metadata Column */}
                                  <div className="space-y-6">
                                    <div className="group/detail">
                                      <span className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider block mb-3 flex items-center">
                                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-300 to-cyan-400 mr-2 shadow-sm"></div>
                                        Created Date
                                      </span>
                                      <div className="text-base text-slate-700 dark:text-slate-300 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-blue-900/10 dark:via-gray-800 dark:to-cyan-900/10 p-4 rounded-xl border border-blue-200/80 dark:border-blue-600/40 font-semibold shadow-sm group-hover/detail:scale-105 transition-all duration-300">
                                        {formatDate(report.created_at)}
                                      </div>
                                    </div>
                                    {report.rating && (
                                      <div className="group/detail">
                                        <span className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider block mb-3 flex items-center">
                                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-300 to-orange-400 mr-2 shadow-sm"></div>
                                          Rating
                                        </span>
                                        <div className="flex items-center space-x-4 bg-gradient-to-br from-amber-50 via-white to-orange-50 dark:from-amber-900/10 dark:via-gray-800 dark:to-orange-900/10 p-4 rounded-xl border border-amber-200/80 dark:border-amber-600/40 shadow-sm group-hover/detail:scale-105 transition-all duration-300">
                                          <div className="text-2xl text-amber-500 filter drop-shadow-sm">
                                            {'★'.repeat(report.rating)}{'☆'.repeat(5 - report.rating)}
                                          </div>
                                          <span className="text-lg font-bold text-amber-600 dark:text-amber-400">
                                            {report.rating}/5
                                          </span>
                                        </div>
                                      </div>
                                    )}
                                  </div>

                                  {/* Soft Actions Column */}
                                  <div className="space-y-6">
                                    <span className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider block flex items-center">
                                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-300 to-red-300 mr-2 shadow-sm"></div>
                                      Actions
                                    </span>
                                    <div className="space-y-4">
                                      <button
                                        onClick={() => setConfirmingReport(report)}
                                        disabled={approvingIds.has(report.id)}
                                        className="group/action w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-emerald-100 to-green-200 hover:from-emerald-200 hover:to-green-300 text-emerald-700 rounded-xl font-bold text-base transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-emerald-200/30 hover:scale-105 active:scale-95 focus:ring-4 focus:ring-emerald-300/30 relative overflow-hidden"
                                      >
                                        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/action:opacity-100 transition-opacity duration-300"></div>
                                        {approvingIds.has(report.id) ? (
                                          <>
                                            <RefreshCw className="h-5 w-5 animate-spin mr-3" />
                                            Processing...
                                          </>
                                        ) : (
                                          <>
                                            <CheckCircle className="h-5 w-5 mr-3 group-hover/action:rotate-12 transition-transform duration-300" />
                                            Approve Report
                                          </>
                                        )}
                                      </button>
                                      <button
                                        onClick={() => setRejectingReport(report)}
                                        disabled={rejectingIds.has(report.id)}
                                        className="group/action w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-red-100 to-rose-200 hover:from-red-200 hover:to-rose-300 text-red-700 rounded-xl font-bold text-base transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-red-200/30 hover:scale-105 active:scale-95 focus:ring-4 focus:ring-red-300/30 relative overflow-hidden"
                                      >
                                        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/action:opacity-100 transition-opacity duration-300"></div>
                                        {rejectingIds.has(report.id) ? (
                                          <>
                                            <RefreshCw className="h-5 w-5 animate-spin mr-3" />
                                            Processing...
                                          </>
                                        ) : (
                                          <>
                                            <XCircle className="h-5 w-5 mr-3 group-hover/action:rotate-12 transition-transform duration-300" />
                                            Reject Report
                                          </>
                                        )}
                                      </button>
                                    </div>
                                  </div>
                                </div>

                                {/* Resolution Status */}
                                {report.is_resolved && report.resolution_details && (
                                  <div className="p-3 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg">
                                    <div className="flex items-center text-sm font-semibold text-emerald-800 dark:text-emerald-400 mb-2">
                                      <CheckCircle className="h-4 w-4 mr-2" />
                                      Resolution Complete
                                    </div>
                                    <p className="text-sm text-emerald-700 dark:text-emerald-300 mb-2">
                                      {report.resolution_details}
                                    </p>
                                    {report.resolved_at && (
                                      <p className="text-xs text-emerald-600 dark:text-emerald-400">
                                        Resolved on {formatDate(report.resolved_at)}
                                      </p>
                                    )}
                                  </div>
                                )}

                                {/* Full-Width Premium Action Buttons */}
                                <div className="flex space-x-3 pt-2">
                                  <button
                                    onClick={() => setConfirmingReport(report)}
                                    disabled={approvingIds.has(report.id)}
                                    className="flex-1 flex items-center justify-center px-4 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white rounded-lg font-semibold text-sm transition-all duration-200 disabled:opacity-50 hover:scale-[1.02] hover:shadow-md active:scale-[0.98] focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                                  >
                                    {approvingIds.has(report.id) ? (
                                      <>
                                        <RefreshCw className="h-4 w-4 animate-spin mr-2" />
                                        Processing...
                                      </>
                                    ) : (
                                      <>
                                        <CheckCircle className="h-4 w-4 mr-2" />
                                        Approve Report
                                      </>
                                    )}
                                  </button>
                                  <button
                                    onClick={() => setRejectingReport(report)}
                                    disabled={rejectingIds.has(report.id)}
                                    className="flex-1 flex items-center justify-center px-4 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-lg font-semibold text-sm transition-all duration-200 disabled:opacity-50 hover:scale-[1.02] hover:shadow-md active:scale-[0.98] focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                                  >
                                    {rejectingIds.has(report.id) ? (
                                      <>
                                        <RefreshCw className="h-4 w-4 animate-spin mr-2" />
                                        Processing...
                                      </>
                                    ) : (
                                      <>
                                        <XCircle className="h-4 w-4 mr-2" />
                                        Reject Report
                                      </>
                                    )}
                                  </button>
                                </div>

                                {/* Attachment Section */}
                                {report.attachment && (
                                  <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                                    <a
                                      href={report.attachment}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors hover:underline"
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

        {/* Confirmation Dialog */}
        {confirmingReport && (
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-lg p-6 max-w-md w-full mx-4 border border-white/20 dark:border-gray-700/20 shadow-2xl">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Approve Scam Report
                </h3>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Are you sure you want to approve this {confirmingReport.scam_type} scam report from{' '}
                <span className="font-medium">{confirmingReport.name}</span>?
              </p>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 mb-4">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <span className="font-medium">Report:</span> {confirmingReport.review}
                </p>
              </div>

              <div className="flex justify-end space-x-3">
                <Button
                  variant="outline"
                  onClick={() => setConfirmingReport(null)}
                  disabled={approvingIds.has(confirmingReport.id)}
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => {
                    handleApproveReport(confirmingReport);
                    setConfirmingReport(null);
                  }}
                  disabled={approvingIds.has(confirmingReport.id)}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  {approvingIds.has(confirmingReport.id) ? (
                    <>
                      <RefreshCw className="h-4 w-4 animate-spin mr-2" />
                      Approving...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Approve Report
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Reject Confirmation Dialog */}
        {rejectingReport && (
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-lg p-6 max-w-md w-full mx-4 border border-white/20 dark:border-gray-700/20 shadow-2xl">
              <div className="flex items-center mb-4">
                <XCircle className="h-6 w-6 text-red-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Reject Scam Report
                </h3>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Are you sure you want to reject this {rejectingReport.scam_type} scam report from{' '}
                <span className="font-medium">{rejectingReport.name}</span>?
              </p>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 mb-4">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <span className="font-medium">Report:</span> {rejectingReport.review}
                </p>
              </div>

              <div className="flex justify-end space-x-3">
                <Button
                  variant="outline"
                  onClick={() => setRejectingReport(null)}
                  disabled={rejectingIds.has(rejectingReport.id)}
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => {
                    handleRejectReport(rejectingReport);
                    setRejectingReport(null);
                  }}
                  disabled={rejectingIds.has(rejectingReport.id)}
                  variant="danger"
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  {rejectingIds.has(rejectingReport.id) ? (
                    <>
                      <RefreshCw className="h-4 w-4 animate-spin mr-2" />
                      Rejecting...
                    </>
                  ) : (
                    <>
                      <XCircle className="h-4 w-4 mr-2" />
                      Reject Report
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminRouteGuard>
  );
}