'use client';

import React from 'react';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import { Card } from '@/components/ui/Card';

// Types
interface DashboardData {
  total_urls_processed: number;
  total_website_scams: number;
  total_phone_scams: number;
  total_upi_scams: number;
  total_scam_reports: number;
  total_contact_us_submissions: number;
}

interface ChartProps {
  data: DashboardData;
  className?: string;
}

// Sample time series data for demonstration
const generateTimeSeriesData = (days: number = 7) => {
  const data = [];
  const today = new Date();
  
  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    
    data.push({
      date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      urls: Math.floor(Math.random() * 500) + 100,
      reports: Math.floor(Math.random() * 50) + 10,
      contacts: Math.floor(Math.random() * 30) + 5,
    });
  }
  
  return data;
};

// Custom tooltip component
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600">
        <p className="font-medium text-gray-900 dark:text-white">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {`${entry.name}: ${entry.value.toLocaleString()}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

// Area Chart for URL Processing Trends
export const UrlProcessingChart: React.FC<ChartProps> = ({ data, className }) => {
  const timeSeriesData = generateTimeSeriesData(7);
  
  return (
    <Card className={`p-6 ${className}`}>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        URL Processing Trends
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={timeSeriesData}>
          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
          <XAxis 
            dataKey="date" 
            className="text-gray-600 dark:text-gray-400"
            tick={{ fontSize: 12 }}
          />
          <YAxis 
            className="text-gray-600 dark:text-gray-400"
            tick={{ fontSize: 12 }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="urls"
            stroke="#3B82F6"
            fill="#3B82F6"
            fillOpacity={0.3}
            name="URLs Processed"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
};

// Bar Chart for Scam Types Distribution
export const ScamTypesChart: React.FC<ChartProps> = ({ data, className }) => {
  const scamData = [
    {
      type: 'Website Scams',
      count: data.total_website_scams,
      color: '#EF4444'
    },
    {
      type: 'Phone Scams',
      count: data.total_phone_scams,
      color: '#F59E0B'
    },
    {
      type: 'UPI Scams',
      count: data.total_upi_scams,
      color: '#8B5CF6'
    }
  ];

  return (
    <Card className={`p-6 ${className}`}>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Scam Types Distribution
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={scamData}>
          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
          <XAxis 
            dataKey="type" 
            className="text-gray-600 dark:text-gray-400"
            tick={{ fontSize: 11 }}
          />
          <YAxis 
            className="text-gray-600 dark:text-gray-400"
            tick={{ fontSize: 12 }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="count" name="Reports">
            {scamData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

// Pie Chart for Activity Distribution
export const ActivityDistributionChart: React.FC<ChartProps> = ({ data, className }) => {
  const total = data.total_urls_processed + data.total_scam_reports + data.total_contact_us_submissions;
  
  const pieData = [
    {
      name: 'URL Checks',
      value: data.total_urls_processed,
      color: '#10B981',
      percentage: ((data.total_urls_processed / total) * 100).toFixed(1)
    },
    {
      name: 'Scam Reports',
      value: data.total_scam_reports,
      color: '#EF4444',
      percentage: ((data.total_scam_reports / total) * 100).toFixed(1)
    },
    {
      name: 'Contact Forms',
      value: data.total_contact_us_submissions,
      color: '#3B82F6',
      percentage: ((data.total_contact_us_submissions / total) * 100).toFixed(1)
    }
  ];

  const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text 
        x={x} 
        y={y} 
        fill="white" 
        textAnchor={x > cx ? 'start' : 'end'} 
        dominantBaseline="central"
        className="text-sm font-medium"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <Card className={`p-6 ${className}`}>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Activity Distribution
      </h3>
      <div className="flex flex-col lg:flex-row items-center">
        <ResponsiveContainer width="100%" height={250} className="lg:w-2/3">
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
        <div className="lg:w-1/3 lg:ml-4 mt-4 lg:mt-0">
          <div className="space-y-3">
            {pieData.map((item, index) => (
              <div key={index} className="flex items-center">
                <div 
                  className="w-3 h-3 rounded-full mr-3" 
                  style={{ backgroundColor: item.color }}
                />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {item.value.toLocaleString()} ({item.percentage}%)
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

// Line Chart for Weekly Activity Trends
export const WeeklyTrendsChart: React.FC<ChartProps> = ({ data, className }) => {
  const weeklyData = generateTimeSeriesData(7);
  
  return (
    <Card className={`p-6 ${className}`}>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Weekly Activity Trends
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={weeklyData}>
          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
          <XAxis 
            dataKey="date" 
            className="text-gray-600 dark:text-gray-400"
            tick={{ fontSize: 12 }}
          />
          <YAxis 
            className="text-gray-600 dark:text-gray-400"
            tick={{ fontSize: 12 }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line
            type="monotone"
            dataKey="urls"
            stroke="#10B981"
            strokeWidth={2}
            name="URLs Processed"
            dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="reports"
            stroke="#EF4444"
            strokeWidth={2}
            name="Scam Reports"
            dot={{ fill: '#EF4444', strokeWidth: 2, r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="contacts"
            stroke="#3B82F6"
            strokeWidth={2}
            name="Contact Forms"
            dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};

// Analytics Summary Component
export const AnalyticsSummary: React.FC<ChartProps> = ({ data, className }) => {
  const totalActivity = data.total_urls_processed + data.total_scam_reports + data.total_contact_us_submissions;
  const scamDetectionRate = totalActivity > 0 ? ((data.total_scam_reports / totalActivity) * 100).toFixed(2) : '0.00';
  const avgProcessingPerDay = Math.floor(data.total_urls_processed / 30); // Assuming 30 days
  
  const summaryStats = [
    {
      label: 'Total Platform Activity',
      value: totalActivity.toLocaleString(),
      description: 'All interactions combined',
      color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
    },
    {
      label: 'Scam Detection Rate',
      value: `${scamDetectionRate}%`,
      description: 'Percentage of scams detected',
      color: 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
    },
    {
      label: 'Daily Processing Average',
      value: avgProcessingPerDay.toLocaleString(),
      description: 'URLs processed per day',
      color: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
    }
  ];

  return (
    <Card className={`p-6 ${className}`}>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Analytics Summary
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {summaryStats.map((stat, index) => (
          <div key={index} className="text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
            <div className={`inline-flex px-3 py-1 rounded-full text-sm font-medium mb-2 ${stat.color}`}>
              {stat.label}
            </div>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {stat.value}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
};