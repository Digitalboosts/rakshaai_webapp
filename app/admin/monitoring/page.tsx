'use client';

import React from 'react';
import { AdminRouteGuard } from '@/components/AdminRouteGuard';
import { AdminNavbar, AdminSidebar } from '@/components/AdminNavigation';
import { Card } from '@/components/ui/Card';
import { 
  Eye, 
  Server, 
  Database,
  Wifi,
  HardDrive,
  Cpu,
  Activity,
  AlertCircle,
  CheckCircle
} from 'lucide-react';

export default function AdminMonitoringPage() {
  // Dummy system status data
  const systemStatus = [
    { name: 'API Server', status: 'online', uptime: '99.9%', responseTime: '45ms' },
    { name: 'Database', status: 'online', uptime: '99.8%', responseTime: '12ms' },
    { name: 'Cache Server', status: 'warning', uptime: '98.2%', responseTime: '156ms' },
    { name: 'CDN', status: 'online', uptime: '100%', responseTime: '23ms' },
  ];

  const serverMetrics = [
    { name: 'CPU Usage', value: '23%', status: 'normal' },
    { name: 'Memory Usage', value: '67%', status: 'normal' },
    { name: 'Disk Usage', value: '45%', status: 'normal' },
    { name: 'Network I/O', value: '12 MB/s', status: 'normal' },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'online':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'warning':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      case 'offline':
        return <AlertCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Activity className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'online':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'warning':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'offline':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400';
    }
  };

  return (
    <AdminRouteGuard>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <AdminNavbar currentPage="monitoring" />
        <AdminSidebar currentPage="monitoring" />
        
        {/* Main Content */}
        <div className="md:pl-64 pt-16">
          <div className="px-4 sm:px-6 lg:px-8 py-8">
            {/* Page Header */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Site Monitoring
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                Monitor system health and performance metrics
              </p>
            </div>

            {/* System Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {serverMetrics.map((metric, index) => {
                const icons = [Cpu, HardDrive, Database, Wifi];
                const Icon = icons[index] || Activity;
                
                return (
                  <Card key={index} className="p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                      </div>
                      <div className="ml-4 flex-1">
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          {metric.name}
                        </p>
                        <div className="flex items-center justify-between">
                          <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                            {metric.value}
                          </p>
                          <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                            {metric.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Service Status */}
            <Card className="p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                Service Status
              </h3>
              <div className="space-y-4">
                {systemStatus.map((service, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center space-x-4">
                      {getStatusIcon(service.status)}
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                          {service.name}
                        </h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Uptime: {service.uptime} | Response: {service.responseTime}
                        </p>
                      </div>
                    </div>
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusBadge(service.status)}`}>
                      {service.status}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Performance Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Response Time Chart */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Response Time (24h)
                </h3>
                <div className="h-64 flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-center">
                    <Activity className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500 dark:text-gray-400">Chart placeholder</p>
                    <p className="text-sm text-gray-400">Response time trends</p>
                  </div>
                </div>
              </Card>

              {/* Error Rate Chart */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Error Rate (24h)
                </h3>
                <div className="h-64 flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-center">
                    <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500 dark:text-gray-400">Chart placeholder</p>
                    <p className="text-sm text-gray-400">Error rate monitoring</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </AdminRouteGuard>
  );
}