'use client';

import React, { useState, useEffect } from 'react';
import { AdminRouteGuard } from '@/components/AdminRouteGuard';
import { AdminNavbar, AdminSidebar } from '@/components/AdminNavigation';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { adminFetch } from '@/lib/api/adminApi';
import { useAuth } from '@/lib/redux/hooks';

interface DebugInfo {
  localStorage?: any;
  authState?: any;
  testApiResult?: any;
  scamReportsResult?: any;
}

export default function AdminDebugPage() {
  const [debugInfo, setDebugInfo] = useState<DebugInfo>({});
  const [loading, setLoading] = useState(false);
  const authState = useAuth();

  useEffect(() => {
    // Get localStorage info
    if (typeof window !== 'undefined') {
      const storedAuth = localStorage.getItem('rakshaai_admin_auth');
      setDebugInfo(prev => ({
        ...prev,
        localStorage: storedAuth ? JSON.parse(storedAuth) : null,
        authState: authState
      }));
    }
  }, [authState]);

  const testAdminEndpoint = async () => {
    setLoading(true);
    try {
      // Test direct backend call
      const response = await adminFetch('/api/admin/scam-reports');
      const result = await response.json();
      setDebugInfo(prev => ({
        ...prev,
        testApiResult: {
          status: response.status,
          data: result
        }
      }));
    } catch (error) {
      setDebugInfo(prev => ({
        ...prev,
        testApiResult: {
          error: error instanceof Error ? error.message : 'Unknown error'
        }
      }));
    } finally {
      setLoading(false);
    }
  };

  const testScamReports = async () => {
    setLoading(true);
    try {
      const response = await adminFetch('/api/admin/scam-reports');
      const result = await response.json();
      setDebugInfo(prev => ({
        ...prev,
        scamReportsResult: {
          status: response.status,
          data: result
        }
      }));
    } catch (error) {
      setDebugInfo(prev => ({
        ...prev,
        scamReportsResult: {
          error: error instanceof Error ? error.message : 'Unknown error'
        }
      }));
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminRouteGuard>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        <AdminSidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <AdminNavbar />
          <main className="flex-1 overflow-auto p-6">
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Authentication Debug
                </h1>
              </div>

              {/* Auth State Info */}
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Authentication State</h2>
                <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm overflow-auto">
                  {JSON.stringify({
                    isAuthenticated: authState.isAuthenticated,
                    isLoading: authState.isLoading,
                    user: authState.user,
                    error: authState.error,
                    token: authState.token ? `${authState.token.slice(0, 15)}...` : null
                  }, null, 2)}
                </pre>
              </Card>

              {/* LocalStorage Info */}
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">LocalStorage Data (Access Token)</h2>
                <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm overflow-auto">
                  {JSON.stringify(debugInfo.localStorage ? {
                    ...debugInfo.localStorage,
                    accessToken: debugInfo.localStorage.accessToken ? 
                      `${debugInfo.localStorage.accessToken.slice(0, 20)}...` : null,
                    backendToken: debugInfo.localStorage.backendToken ? 
                      `${debugInfo.localStorage.backendToken.slice(0, 20)}...` : null
                  } : null, null, 2)}
                </pre>
              </Card>

              {/* API Test Buttons */}
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">API Tests</h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <Button 
                      onClick={testAdminEndpoint} 
                      disabled={loading}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      Test Direct Backend API
                    </Button>
                    <Button 
                      onClick={testScamReports} 
                      disabled={loading}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      Test Scam Reports (Direct)
                    </Button>
                  </div>

                  {debugInfo.testApiResult && (
                    <div>
                      <h3 className="font-medium mb-2">Admin Test Result:</h3>
                      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm overflow-auto">
                        {JSON.stringify(debugInfo.testApiResult, null, 2)}
                      </pre>
                    </div>
                  )}

                  {debugInfo.scamReportsResult && (
                    <div>
                      <h3 className="font-medium mb-2">Scam Reports Result:</h3>
                      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm overflow-auto">
                        {JSON.stringify(debugInfo.scamReportsResult, null, 2)}
                      </pre>
                    </div>
                  )}
                </div>
              </Card>

              {/* Environment Info */}
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Environment</h2>
                <div className="space-y-2 text-sm">
                  <div>Backend API URL: {process.env.NEXT_PUBLIC_BACKEND_API_WITHOUT_VERSION}</div>
                  <div>Environment: {process.env.NODE_ENV}</div>
                </div>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </AdminRouteGuard>
  );
}