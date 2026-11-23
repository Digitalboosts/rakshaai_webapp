'use client';

import React from 'react';
import { Clock, Zap, Database } from 'lucide-react';

interface CacheStatusProps {
  lastUpdated: string | null;
  dataType: string;
  className?: string;
}

export function CacheStatus({ lastUpdated, dataType, className = '' }: CacheStatusProps) {
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
    if (!lastUpdated) return 'Never loaded';
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

  const isFresh = isDataFresh();
  const formattedTime = formatLastUpdated();

  return (
    <div className={`flex items-center space-x-2 text-sm ${className}`}>
      <div className="flex items-center space-x-1">
        {isFresh ? (
          <Zap className="w-3 h-3 text-green-500" />
        ) : lastUpdated ? (
          <Database className="w-3 h-3 text-blue-500" />
        ) : (
          <Clock className="w-3 h-3 text-gray-400" />
        )}
        <span className={`text-xs ${
          isFresh 
            ? 'text-green-600 dark:text-green-400' 
            : lastUpdated 
              ? 'text-blue-600 dark:text-blue-400'
              : 'text-gray-500 dark:text-gray-400'
        }`}>
          {isFresh ? 'Fresh' : 'Cached'}
        </span>
      </div>
      <div className={`w-2 h-2 rounded-full ${
        isFresh 
          ? 'bg-green-500 animate-pulse' 
          : lastUpdated 
            ? 'bg-blue-500' 
            : 'bg-gray-400'
      }`}></div>
      <span className="text-xs text-gray-500 dark:text-gray-400">
        {dataType} • {formattedTime}
      </span>
    </div>
  );
}

interface CacheInfoBadgeProps {
  lastUpdated: string | null;
  dataType: string;
  size?: 'sm' | 'md' | 'lg';
}

export function CacheInfoBadge({ lastUpdated, dataType, size = 'md' }: CacheInfoBadgeProps) {
  const isDataFresh = () => {
    if (!lastUpdated) return false;
    const lastUpdatedTime = new Date(lastUpdated).getTime();
    const currentTime = new Date().getTime();
    const fiveMinutes = 5 * 60 * 1000; // 5 minutes
    return (currentTime - lastUpdatedTime) < fiveMinutes;
  };

  const formatTime = () => {
    if (!lastUpdated) return 'No data';
    const diffMs = new Date().getTime() - new Date(lastUpdated).getTime();
    const diffMins = Math.floor(diffMs / 60000);
    
    if (diffMins === 0) return 'Just now';
    if (diffMins === 1) return '1 min ago';
    if (diffMins < 60) return `${diffMins} mins ago`;
    return new Date(lastUpdated).toLocaleTimeString();
  };

  const isFresh = isDataFresh();
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base'
  };

  return (
    <div className={`inline-flex items-center space-x-1 rounded-full ${sizeClasses[size]} ${
      isFresh 
        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' 
        : lastUpdated
          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
          : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
    }`}>
      {isFresh ? (
        <Zap className="w-3 h-3" />
      ) : lastUpdated ? (
        <Database className="w-3 h-3" />
      ) : (
        <Clock className="w-3 h-3" />
      )}
      <span className="font-medium">
        {dataType}
      </span>
      <span className="opacity-75">
        {formatTime()}
      </span>
    </div>
  );
}