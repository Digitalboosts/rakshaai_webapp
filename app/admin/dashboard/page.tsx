 'use client';

import React, { useState, useEffect } from 'react';
import { AdminRouteGuard } from '@/components/AdminRouteGuard';
import { AdminNavbar, AdminSidebar } from '@/components/AdminNavigation';
import { Card } from '@/components/ui/Card';
import { useSmartDashboard, useAppDispatch } from '@/lib/redux/hooks';
import { showNotification } from '@/lib/redux/actions';
import {
  Users,
  MessageSquare,
  AlertTriangle,
  TrendingUp,
  Eye,
  Shield,
  Globe,
  Clock,
  Phone,
  CreditCard,
  Mail,
  RefreshCw,
  BarChart3,
  PieChart,
  Activity
} from 'lucide-react';
import {
  UrlProcessingChart,
  ScamTypesChart,
  ActivityDistributionChart,
  WeeklyTrendsChart,
  AnalyticsSummary
} from '@/components/DashboardCharts';
import { RealTimeMetrics, AlertsPanel } from '@/components/RealTimeMetrics';
import { CacheInfoBadge } from '@/components/CacheStatus';

type FilterType = 'today' | 'last_7_days' | 'last_30_days' | 'last_month' | 'this_year';

const filterOptions = [
  { value: 'today' as FilterType, label: 'Today' },
  { value: 'last_7_days' as FilterType, label: 'Last 7 Days' },
  { value: 'last_30_days' as FilterType, label: 'Last 30 Days' },
  { value: 'last_month' as FilterType, label: 'Last Month' },
  { value: 'this_year' as FilterType, label: 'This Year' },
];

export default function AdminDashboardPage() {
  const { data: dashboardData, isLoading: loading, error, loadData, refreshData, lastUpdated } = useSmartDashboard();
  const dispatch = useAppDispatch();
  console.log('Dashboard Data:', dashboardData);
  const [selectedFilter, setSelectedFilter] = useState<FilterType>('today');

  const fetchData = async (filter: FilterType) => {
    try {
      await loadData(false, {
        type: filter, // Send the filter type directly to match backend filter_type parameter
        dateRange: getDateRangeForFilter(filter),
      });
    } catch (err) {
      dispatch(showNotification({
        type: 'error',
        title: 'Data Loading Failed',
        message: 'Failed to load dashboard data. Please try again.',
      }));
    }
  };

  // Helper function to determine if data is fresh (less than 1 minute old)
  const isDataFresh = () => {
    if (!lastUpdated) return false;
    const lastUpdatedTime = new Date(lastUpdated).getTime();
    const currentTime = new Date().getTime();
    const oneMinute = 60 * 1000;
    return (currentTime - lastUpdatedTime) < oneMinute;
  };

  // Format last updated time for display
  const formatLastUpdated = () => {
    if (!lastUpdated) return 'Never';
    const lastUpdatedTime = new Date(lastUpdated);
    const now = new Date();
    const diffMs = now.getTime() - lastUpdatedTime.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffSecs = Math.floor((diffMs % 60000) / 1000);

    if (diffMins === 0) {
      return `${diffSecs}s ago`;
    } else if (diffMins < 60) {
      return `${diffMins}m ago`;
    } else {
      return lastUpdatedTime.toLocaleTimeString();
    }
  };

  const getDateRangeForFilter = (filter: FilterType) => {
    const today = new Date();
    const start = new Date();
    
    switch (filter) {
      case 'today':
        start.setHours(0, 0, 0, 0);
        break;
      case 'last_7_days':
        start.setDate(today.getDate() - 7);
        break;
      case 'last_30_days':
        start.setDate(today.getDate() - 30);
        break;
      case 'last_month':
        start.setMonth(today.getMonth() - 1, 1);
        start.setHours(0, 0, 0, 0);
        break;
      case 'this_year':
        start.setMonth(0, 1);
        start.setHours(0, 0, 0, 0);
        break;
    }

    return {
      start: start.toISOString().split('T')[0],
      end: today.toISOString().split('T')[0],
    };
  };

  useEffect(() => {
    fetchData(selectedFilter);
  }, [selectedFilter]);

  const handleFilterChange = (filter: FilterType) => {
    setSelectedFilter(filter);
  };

  const handleRefresh = () => {
    refreshData({
      type: selectedFilter, // Send the filter type directly to match backend filter_type parameter
      dateRange: getDateRangeForFilter(selectedFilter),
    });
  };

  const getDashboardStats = () => {
    if (!dashboardData) return [];

    return [
      {
        title: 'URLs Processed',
        value: dashboardData.total_urls_processed?.toLocaleString() || '0',
        icon: Globe,
      },
      {
        title: 'Website Scams',
        value: dashboardData.total_website_scams?.toLocaleString() || '0',
        icon: AlertTriangle,
      },
      {
        title: 'Phone Scams',
        value: dashboardData.total_phone_scams?.toLocaleString() || '0',
        icon: Phone,
      },
      {
        title: 'UPI Scams',
        value: dashboardData.total_upi_scams?.toLocaleString() || '0',
        icon: CreditCard,
      },
      {
        title: 'Total Scam Reports',
        value: dashboardData.total_scam_reports?.toLocaleString() || '0',
        icon: Shield,
      },
      {
        title: 'Contact Submissions',
        value: dashboardData.total_contact_us_submissions?.toLocaleString() || '0',
        icon: Mail,
      },
    ];
  };

  // Helper function to get icon and color based on activity type
  const getActivityIconAndColor = (type: string) => {
    switch (type) {
      case 'scan':
      case 'trust_check':
        return { icon: Shield, color: 'text-indigo-500' };
      case 'report':
      case 'scam_report':
        return { icon: AlertTriangle, color: 'text-red-500' };
      case 'review':
        return { icon: MessageSquare, color: 'text-blue-500' };
      case 'user':
      case 'registration':
        return { icon: Users, color: 'text-green-500' };
      case 'system':
      case 'backup':
        return { icon: Globe, color: 'text-gray-500' };
      default:
        return { icon: Activity, color: 'text-gray-500' };
    }
  };

  // Helper function to format activity timestamp
  const formatActivityTime = (timestamp: string) => {
    const activityTime = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - activityTime.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins} minutes ago`;
    if (diffHours < 24) return `${diffHours} hours ago`;
    if (diffDays < 7) return `${diffDays} days ago`;
    return activityTime.toLocaleDateString();
  };

  const dashboardStats = getDashboardStats();
  return (
    <AdminRouteGuard>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <AdminNavbar currentPage="dashboard" />
        <AdminSidebar currentPage="dashboard" />

        {/* Main Content */}
        <div className="md:pl-60 pt-14">
          <div className="px-4 sm:px-6 lg:px-8 py-6 max-w-7xl mx-auto">
            {/* Page Header */}
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Dashboard Overview
                  </h1>
                  <div className="flex items-center space-x-3 mt-1">
                    <p className="text-gray-600 dark:text-gray-400">
                      Real-time analytics and insights for platform monitoring
                    </p>
                    <CacheInfoBadge 
                      lastUpdated={lastUpdated} 
                      dataType="Dashboard" 
                      size="sm"
                    />
                  </div>
                </div>
                <div className="mt-4 sm:mt-0 flex items-center space-x-3">
                  {/* Auto Refresh Toggle */}
                  {/* <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="autoRefresh"
                      className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    <label htmlFor="autoRefresh" className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                      Auto-refresh
                    </label>
                  </div> */}
                  
                  {/* Filter Dropdown */}
                  <select
                    value={selectedFilter}
                    onChange={(e) => handleFilterChange(e.target.value as FilterType)}
                    className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
                    disabled={loading}
                  >
                    {filterOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>

                  {/* Refresh Button */}
                  <button
                    onClick={handleRefresh}
                    disabled={loading}
                    className="px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                    title="Force Fresh Data Refresh (bypasses cache)"
                  >
                    <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                  </button>

                  {/* Export Button */}
                  {/* <button
                    className="px-3 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 flex items-center"
                    title="Export Dashboard"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Export
                  </button> */}
                </div>
              </div>
            </div>

            {/* Error State */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                <div className="flex items-center">
                  <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
                  <p className="text-red-700 dark:text-red-300">
                    {error}. Please try again.
                  </p>
                </div>
              </div>
            )}

            {/* Loading State */}
            {loading && (
              <div className="mb-6 flex items-center justify-center p-8">
                <RefreshCw className="w-6 h-6 animate-spin text-indigo-600" />
                <span className="ml-2 text-gray-600 dark:text-gray-400">Loading dashboard data...</span>
              </div>
            )}

            {/* Stats Grid */}
            {!loading && dashboardData && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {dashboardStats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <Card key={index} className="p-4">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/20 rounded-lg flex items-center justify-center">
                            <Icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                          </div>
                        </div>
                        <div className="ml-3 flex-1">
                          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            {stat.title}
                          </p>
                          <div className="flex items-baseline">
                            <p className="text-xl font-semibold text-gray-900 dark:text-white">
                              {stat.value}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            )}

            {/* Content Grid */}
            {!loading && dashboardData && (
              <>
                {/* Real-Time Metrics */}
                {/* <div className="mb-6">
                  <RealTimeMetrics />
                </div> */}

                {/* Analytics Summary */}
                {/* <div className="mb-6">
                  <AnalyticsSummary data={dashboardData} />
                </div> */}

                {/* Charts Grid - Primary Analytics */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  <ActivityDistributionChart data={dashboardData} />

                  {/* <UrlProcessingChart data={dashboardData} /> */}
                  <ScamTypesChart data={dashboardData} />
                </div>

                {/* Charts Grid - Secondary Analytics */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  {/* <ActivityDistributionChart data={dashboardData} /> */}
                  {/* <WeeklyTrendsChart data={dashboardData} /> */}
                </div>

                {/* Bottom Grid - Activity, Alerts and Actions */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Recent Activity */}
                  {/* <Card className="p-5">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Recent Activity
                      </h3>
                      <Clock className="w-5 h-5 text-gray-400" />
                    </div>
                    <div className="space-y-4">
                      {dashboardData?.recent_activity && dashboardData.recent_activity.length > 0 ? (
                        dashboardData.recent_activity.slice(0, 4).map((activity, index) => {
                          const { icon: Icon, color } = getActivityIconAndColor(activity.type);
                          return (
                            <div key={activity.id || index} className="flex items-start space-x-3">
                              <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center`}>
                                <Icon className={`w-4 h-4 ${color}`} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm text-gray-900 dark:text-white">
                                  {activity.description}
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                  {formatActivityTime(activity.timestamp)}
                                </p>
                              </div>
                            </div>
                          );
                        })
                      ) : (
                        <div className="text-center py-4">
                          <Clock className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            No recent activity
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <button className="w-full text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium">
                        View All Activities
                      </button>
                    </div>
                  </Card> */}

                  {/* System Alerts */}
                  {/* <AlertsPanel /> */}

                  {/* Enhanced Quick Actions */}
                  {/* <Card className="p-5">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Quick Actions & Analytics
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      <button className="flex items-center p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors group">
                        <BarChart3 className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-3 group-hover:scale-110 transition-transform" />
                        <div className="text-left">
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            Advanced Analytics
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            Detailed insights
                          </p>
                        </div>
                      </button>

                      <button className="flex items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors group">
                        <PieChart className="w-5 h-5 text-green-600 dark:text-green-400 mr-3 group-hover:scale-110 transition-transform" />
                        <div className="text-left">
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            Data Export
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            Export reports
                          </p>
                        </div>
                      </button>

                      <button className="flex items-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors group">
                        <Activity className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3 group-hover:scale-110 transition-transform" />
                        <div className="text-left">
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            Real-time Monitor
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            Live dashboard
                          </p>
                        </div>
                      </button>

                      <button className="flex items-center p-3 bg-red-50 dark:bg-red-900/20 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors group">
                        <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400 mr-3 group-hover:scale-110 transition-transform" />
                        <div className="text-left">
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            Alert Management
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            Configure alerts
                          </p>
                        </div>
                      </button>
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                        Key Performance Indicators
                      </h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-500 dark:text-gray-400">Detection Accuracy</span>
                          <div className="flex items-center">
                            <div className="w-16 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full mr-2">
                              <div className="w-14 h-1.5 bg-green-500 rounded-full"></div>
                            </div>
                            <span className="text-xs font-medium text-gray-900 dark:text-white">87.5%</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-500 dark:text-gray-400">Response Time</span>
                          <div className="flex items-center">
                            <div className="w-16 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full mr-2">
                              <div className="w-12 h-1.5 bg-blue-500 rounded-full"></div>
                            </div>
                            <span className="text-xs font-medium text-gray-900 dark:text-white">0.8s</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-500 dark:text-gray-400">User Satisfaction</span>
                          <div className="flex items-center">
                            <div className="w-16 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full mr-2">
                              <div className="w-15 h-1.5 bg-indigo-500 rounded-full"></div>
                            </div>
                            <span className="text-xs font-medium text-gray-900 dark:text-white">94.2%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card> */}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </AdminRouteGuard>
  );
}