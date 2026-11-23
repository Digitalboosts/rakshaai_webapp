'use client';

import React, { useEffect } from 'react';
import { useUI, useAppDispatch } from '@/lib/redux/hooks';
import { hideNotification } from '@/lib/redux/actions';
import { X, CheckCircle, XCircle, AlertTriangle, Info } from 'lucide-react';

export function NotificationManager() {
  const { notifications } = useUI();
  const dispatch = useAppDispatch();

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'error':
        return <XCircle className="h-5 w-5 text-red-500" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case 'info':
        return <Info className="h-5 w-5 text-blue-500" />;
      default:
        return <Info className="h-5 w-5 text-gray-500" />;
    }
  };

  const getNotificationStyles = (type: string) => {
    switch (type) {
      case 'success':
        return 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800';
      case 'error':
        return 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800';
      case 'warning':
        return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800';
      case 'info':
        return 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800';
      default:
        return 'bg-gray-50 dark:bg-gray-900/20 border-gray-200 dark:border-gray-800';
    }
  };

  const handleDismiss = (notificationId: string) => {
    dispatch(hideNotification(notificationId));
  };

  // Auto-dismiss notifications after 5 seconds
  useEffect(() => {
    notifications.forEach((notification) => {
      if (!notification.read) {
        const timer = setTimeout(() => {
          handleDismiss(notification.id);
        }, 5000);
        
        return () => clearTimeout(timer);
      }
    });
  }, [notifications]);

  if (notifications.length === 0) {
    return null;
  }

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2 max-w-sm w-full">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`
            ${getNotificationStyles(notification.type)}
            border rounded-lg p-4 shadow-lg transform transition-all duration-300
            animate-in slide-in-from-right-full
          `}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-3 flex-1">
              <div className="flex-shrink-0 mt-0.5">
                {getNotificationIcon(notification.type)}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  {notification.title}
                </h4>
                {notification.message && (
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                    {notification.message}
                  </p>
                )}
              </div>
            </div>
            <button
              onClick={() => handleDismiss(notification.id)}
              className="flex-shrink-0 ml-2 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Dismiss notification"
            >
              <X className="h-4 w-4 text-gray-400" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}