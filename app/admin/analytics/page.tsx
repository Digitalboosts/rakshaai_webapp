'use client';

import React from 'react';
import { AdminRouteGuard } from '@/components/AdminRouteGuard';
import { AdminNavbar, AdminSidebar } from '@/components/AdminNavigation';
import { Card } from '@/components/ui/Card';
import { 
  TrendingUp, 
  Users, 
  Globe, 
  BarChart3,
  Calendar,
  ArrowUp,
  ArrowDown
} from 'lucide-react';

export default function AdminAnalyticsPage() {
  // Dummy analytics data
  const metrics = [
    { name: 'Daily Active Users', value: '2,847', change: '+12.5%', positive: true },
    { name: 'Trust Score Checks', value: '18,294', change: '+8.2%', positive: true },
    { name: 'Scam Reports', value: '342', change: '-3.1%', positive: true },
    { name: 'Website Reviews', value: '1,529', change: '+15.7%', positive: true },
  ];

  const topWebsites = [
    { domain: 'amazon.in', checks: 2847, trustScore: 95 },
    { domain: 'flipkart.com', checks: 2134, trustScore: 92 },
    { domain: 'myntra.com', checks: 1856, trustScore: 89 },
    { domain: 'zomato.com', checks: 1642, trustScore: 91 },
    { domain: 'paytm.com', checks: 1439, trustScore: 88 },
  ];

  return (
    <AdminRouteGuard>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <AdminNavbar currentPage="analytics" />
        <AdminSidebar currentPage="analytics" />
        
        {/* Main Content */}
        <div className="md:pl-64 pt-16">
          <div className="px-4 sm:px-6 lg:px-8 py-8">
            {/* Page Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Analytics & Insights
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  Track platform performance and user engagement
                </p>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                <Calendar className="w-4 h-4" />
                <span>Last 30 days</span>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {metrics.map((metric, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {metric.name}
                      </p>
                      <p className="text-2xl font-semibold text-gray-900 dark:text-white mt-1">
                        {metric.value}
                      </p>
                    </div>
                    <div className={`flex items-center text-sm font-medium ${
                      metric.positive ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {metric.positive ? (
                        <ArrowUp className="w-4 h-4 mr-1" />
                      ) : (
                        <ArrowDown className="w-4 h-4 mr-1" />
                      )}
                      {metric.change}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Traffic Chart */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Daily Traffic
                </h3>
                <div className="h-64 flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-center">
                    <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500 dark:text-gray-400">Chart placeholder</p>
                    <p className="text-sm text-gray-400">Traffic trends visualization</p>
                  </div>
                </div>
              </Card>

              {/* User Growth Chart */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  User Growth
                </h3>
                <div className="h-64 flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-center">
                    <TrendingUp className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500 dark:text-gray-400">Chart placeholder</p>
                    <p className="text-sm text-gray-400">User growth over time</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Top Websites Table */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                Most Checked Websites
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Website
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Checks
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Trust Score
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                    {topWebsites.map((website, index) => (
                      <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <Globe className="w-5 h-5 text-gray-400 mr-3" />
                            <div>
                              <div className="text-sm font-medium text-gray-900 dark:text-white">
                                {website.domain}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900 dark:text-white">
                            {website.checks.toLocaleString()}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="text-sm font-medium text-gray-900 dark:text-white">
                              {website.trustScore}%
                            </div>
                            <div className="ml-2 w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                              <div
                                className="bg-green-500 h-2 rounded-full"
                                style={{ width: `${website.trustScore}%` }}
                              />
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                            Trusted
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </AdminRouteGuard>
  );
}