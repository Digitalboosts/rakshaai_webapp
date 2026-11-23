// Example Redux integration for Reports Page
'use client';

import React, { useEffect } from 'react';
import { AdminRouteGuard } from '@/components/AdminRouteGuard';
import { AdminNavbar, AdminSidebar } from '@/components/AdminNavigation';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useReports, useAppDispatch } from '@/lib/redux/hooks';
import { fetchReports, approveReport, rejectReport, showNotification } from '@/lib/redux/actions';
import { 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  Eye, 
  RefreshCw,
  Globe,
  Phone,
  CreditCard
} from 'lucide-react';

export default function AdminReportsPage() {
  const { reports, totalCount, isLoading, error } = useReports();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchReports());
  }, [dispatch]);

  const handleApproveReport = async (reportId: string, scamType: string) => {
    try {
      dispatch(approveReport(reportId, scamType));
      dispatch(showNotification({
        type: 'success',
        title: 'Report Approved',
        message: 'The report has been approved successfully.',
      }));
    } catch (err) {
      dispatch(showNotification({
        type: 'error',
        title: 'Action Failed',
        message: 'Failed to approve the report. Please try again.',
      }));
    }
  };

  const handleRejectReport = async (reportId: string, scamType: string) => {
    try {
      dispatch(rejectReport(reportId, scamType));
      dispatch(showNotification({
        type: 'info',
        title: 'Report Rejected',
        message: 'The report has been rejected.',
      }));
    } catch (err) {
      dispatch(showNotification({
        type: 'error',
        title: 'Action Failed',
        message: 'Failed to reject the report. Please try again.',
      }));
    }
  };

  const handleRefresh = () => {
    dispatch(fetchReports());
    dispatch(showNotification({
      type: 'info',
      title: 'Reports Refreshed',
      message: 'Report data has been refreshed.',
    }));
  };

  const getReportTypeIcon = (type: string) => {
    switch (type) {
      case 'website':
        return <Globe className="w-5 h-5" />;
      case 'phone':
        return <Phone className="w-5 h-5" />;
      case 'upi':
        return <CreditCard className="w-5 h-5" />;
      default:
        return <AlertTriangle className="w-5 h-5" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
            <CheckCircle className="w-3 h-3 mr-1" />
            Approved
          </span>
        );
      case 'rejected':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">
            <XCircle className="w-3 h-3 mr-1" />
            Rejected
          </span>
        );
      case 'pending':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
            <AlertTriangle className="w-3 h-3 mr-1" />
            Pending
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <AdminRouteGuard>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <AdminNavbar currentPage="reports" />
        <AdminSidebar currentPage="reports" />
        
        <div className="md:pl-60 pt-14">
          <div className="px-4 sm:px-6 lg:px-8 py-6">
            {/* Page Header */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center space-x-2">
                  <AlertTriangle className="w-6 h-6" />
                  <span>Scam Reports</span>
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  Review and manage user-submitted scam reports ({totalCount} total reports)
                </p>
              </div>
              <Button
                variant="outline"
                onClick={handleRefresh}
                disabled={isLoading}
                className="flex items-center space-x-2"
              >
                <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
                <span>Refresh</span>
              </Button>
            </div>

            {/* Error State */}
            {error && (
              <Card className="p-4 mb-6 bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
                <div className="text-red-700 dark:text-red-300">
                  <h3 className="font-medium">Error loading reports</h3>
                  <p className="text-sm mt-1">{error}</p>
                </div>
              </Card>
            )}

            {/* Loading State */}
            {isLoading && reports.length === 0 ? (
              <Card className="p-8">
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
                  <span className="ml-3 text-gray-600 dark:text-gray-400">Loading reports...</span>
                </div>
              </Card>
            ) : (
              /* Reports List */
              <div className="space-y-4">
                {reports.map((report) => (
                  <Card key={report.id} className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3 flex-1">
                        <div className="flex-shrink-0 mt-1">
                          {getReportTypeIcon(report.type || report.scam_type || 'website')}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                              {(report.type || report.scam_type || 'website').charAt(0).toUpperCase() + (report.type || report.scam_type || 'website').slice(1)} Scam Report
                            </h3>
                            {getStatusBadge(report.status)}
                          </div>
                          
                          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                            {report.url && <p><strong>URL:</strong> {report.url}</p>}
                            {report.phone && <p><strong>Phone:</strong> {report.phone}</p>}
                            {report.upi_id && <p><strong>UPI ID:</strong> {report.upi_id}</p>}
                          </div>

                          <p className="text-gray-700 dark:text-gray-300 mb-3">
                            {report.description}
                          </p>

                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            Submitted: {new Date(report.submitted_at || report.created_at || '').toLocaleString()}
                            {report.reviewed_at && (
                              <span className="ml-4">
                                Reviewed: {new Date(report.reviewed_at).toLocaleString()}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      {/* Actions */}
                      {report.status === 'pending' && (
                        <div className="flex items-center space-x-2 ml-4">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleApproveReport(report.id.toString(), report?.scam_type)}
                            className="text-green-600 hover:text-green-700 border-green-300 hover:border-green-400"
                          >
                            <CheckCircle className="w-4 h-4 mr-1" />
                            Approve
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleRejectReport(report.id.toString(), report?.scam_type)}
                            className="text-red-600 hover:text-red-700 border-red-300 hover:border-red-400"
                          >
                            <XCircle className="w-4 h-4 mr-1" />
                            Reject
                          </Button>
                        </div>
                      )}
                    </div>
                  </Card>
                ))}

                {reports.length === 0 && !isLoading && (
                  <Card className="p-8">
                    <div className="text-center">
                      <AlertTriangle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                        No Reports Found
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        There are currently no scam reports to review.
                      </p>
                    </div>
                  </Card>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminRouteGuard>
  );
}