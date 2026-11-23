'use client';

import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/Card';
import { 
  TrendingUp, 
  TrendingDown, 
  Activity, 
  Users, 
  Shield, 
  AlertCircle,
  CheckCircle,
  Clock
} from 'lucide-react';

interface RealTimeMetric {
  id: string;
  title: string;
  value: string;
  change: number;
  changeType: 'positive' | 'negative' | 'neutral';
  icon: React.ElementType;
  color: string;
  bgColor: string;
  lastUpdated: string;
}

interface RealTimeMetricsProps {
  className?: string;
}

const useRealTimeMetrics = (): RealTimeMetric[] => {
  const [metrics, setMetrics] = useState<RealTimeMetric[]>([
    {
      id: 'active-users',
      title: 'Active Users',
      value: '1,247',
      change: 8.2,
      changeType: 'positive',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100 dark:bg-blue-900/20',
      lastUpdated: new Date().toLocaleTimeString()
    },
    {
      id: 'threat-detection',
      title: 'Threats Detected',
      value: '23',
      change: -12.5,
      changeType: 'positive', // Less threats is positive
      icon: Shield,
      color: 'text-green-600',
      bgColor: 'bg-green-100 dark:bg-green-900/20',
      lastUpdated: new Date().toLocaleTimeString()
    },
    {
      id: 'response-time',
      title: 'Avg Response Time',
      value: '0.8s',
      change: -5.3,
      changeType: 'positive', // Lower response time is better
      icon: Activity,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100 dark:bg-purple-900/20',
      lastUpdated: new Date().toLocaleTimeString()
    },
    {
      id: 'system-health',
      title: 'System Health',
      value: '98.7%',
      change: 0.2,
      changeType: 'positive',
      icon: CheckCircle,
      color: 'text-green-600',
      bgColor: 'bg-green-100 dark:bg-green-900/20',
      lastUpdated: new Date().toLocaleTimeString()
    }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prevMetrics => 
        prevMetrics.map(metric => ({
          ...metric,
          value: generateRandomValue(metric.id),
          change: generateRandomChange(),
          lastUpdated: new Date().toLocaleTimeString()
        }))
      );
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return metrics;
};

const generateRandomValue = (metricId: string): string => {
  switch (metricId) {
    case 'active-users':
      return (Math.floor(Math.random() * 500) + 1000).toLocaleString();
    case 'threat-detection':
      return (Math.floor(Math.random() * 50) + 10).toString();
    case 'response-time':
      return `${(Math.random() * 0.5 + 0.5).toFixed(1)}s`;
    case 'system-health':
      return `${(Math.random() * 5 + 95).toFixed(1)}%`;
    default:
      return '0';
  }
};

const generateRandomChange = (): number => {
  return Math.random() * 20 - 10; // Random number between -10 and 10
};

export const RealTimeMetrics: React.FC<RealTimeMetricsProps> = ({ className }) => {
  const metrics = useRealTimeMetrics();

  return (
    <Card className={`p-6 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Real-Time Metrics
        </h3>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
          Live
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          const isPositiveChange = metric.changeType === 'positive';
          const changeColor = isPositiveChange ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400';
          const ChangeIcon = Math.abs(metric.change) > 0 ? (isPositiveChange ? TrendingUp : TrendingDown) : Activity;

          return (
            <div key={metric.id} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <div className={`p-2 rounded-lg ${metric.bgColor}`}>
                  <Icon className={`w-4 h-4 ${metric.color}`} />
                </div>
                <div className={`flex items-center text-xs ${changeColor}`}>
                  <ChangeIcon className="w-3 h-3 mr-1" />
                  {Math.abs(metric.change).toFixed(1)}%
                </div>
              </div>
              
              <div className="mb-1">
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {metric.value}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {metric.title}
                </p>
              </div>
              
              <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                <Clock className="w-3 h-3 mr-1" />
                {metric.lastUpdated}
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

// Alert Component for Dashboard
interface DashboardAlert {
  id: string;
  type: 'info' | 'warning' | 'error' | 'success';
  title: string;
  message: string;
  timestamp: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

interface AlertsPanelProps {
  className?: string;
}

export const AlertsPanel: React.FC<AlertsPanelProps> = ({ className }) => {
  const [alerts] = useState<DashboardAlert[]>([
    {
      id: '1',
      type: 'warning',
      title: 'High Scam Activity Detected',
      message: 'Unusual spike in UPI scam reports in the last hour. Consider reviewing security measures.',
      timestamp: '5 minutes ago'
    },
    {
      id: '2',
      type: 'success',
      title: 'System Backup Completed',
      message: 'Daily backup process completed successfully. All data is secure.',
      timestamp: '1 hour ago'
    },
    {
      id: '3',
      type: 'info',
      title: 'New Feature Available',
      message: 'Enhanced threat detection algorithms are now active and improving accuracy.',
      timestamp: '3 hours ago'
    }
  ]);

  const getAlertIcon = (type: DashboardAlert['type']) => {
    switch (type) {
      case 'error':
        return <AlertCircle className="w-4 h-4 text-red-500" />;
      case 'warning':
        return <AlertCircle className="w-4 h-4 text-yellow-500" />;
      case 'success':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      default:
        return <Activity className="w-4 h-4 text-blue-500" />;
    }
  };

  const getAlertBgColor = (type: DashboardAlert['type']) => {
    switch (type) {
      case 'error':
        return 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800';
      case 'warning':
        return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800';
      case 'success':
        return 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800';
      default:
        return 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800';
    }
  };

  return (
    <Card className={`p-6 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          System Alerts
        </h3>
        <button className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300">
          View All
        </button>
      </div>
      
      <div className="space-y-3">
        {alerts.map((alert) => (
          <div key={alert.id} className={`p-3 rounded-lg border ${getAlertBgColor(alert.type)}`}>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 mt-0.5">
                {getAlertIcon(alert.type)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {alert.title}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {alert.message}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                  {alert.timestamp}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};