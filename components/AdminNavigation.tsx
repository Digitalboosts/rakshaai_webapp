'use client';

import React, { useState } from 'react';
import { useAuth, useAppDispatch } from '@/lib/redux/hooks';
import { logout, showNotification } from '@/lib/redux/actions';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';
import {
  LogOut,
  User,
  Settings,
  BarChart3,
  Users,
  MessageSquare,
  TrendingUp,
  AlertTriangle,
  Eye,
  XCircle,
  Database,
  Shield,
  Briefcase
} from 'lucide-react';

interface AdminNavbarProps {
  currentPage?: string;
}

export function AdminNavbar({ currentPage }: AdminNavbarProps) {
  const { user } = useAuth();
  const dispatch = useAppDispatch();
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);

  const handleLogout = () => {
    setShowLogoutDialog(true);
  };

  const confirmLogout = () => {
    dispatch(logout());
    dispatch(showNotification({
      type: 'success',
      title: 'Logged Out',
      message: 'You have been successfully logged out.',
    }));
    setShowLogoutDialog(false);
  };

  const cancelLogout = () => {
    setShowLogoutDialog(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-30 bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo & Brand */}
          <div className="flex items-center space-x-3 min-w-0">
            <Link href="/admin/dashboard" className="flex items-center space-x-2 min-w-0 group">
              <div className="p-1.5 bg-indigo-100 dark:bg-indigo-900/20 rounded-lg group-hover:bg-indigo-200 dark:group-hover:bg-indigo-900/30 transition-all duration-200">
                <Image
                  src="/rakshaai-logo.svg"
                  alt="RakshaAI Logo"
                  width={30}
                  height={30}
                  className="flex-shrink-0"
                />
              </div>
              <div className="min-w-0">
                <h1 className="text-base font-semibold text-gray-900 dark:text-white whitespace-nowrap">
                  RakshaAI Admin
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
                  Management Panel
                </p>
              </div>
            </Link>
          </div>

          {/* Current Page Indicator */}
          {currentPage && (
            <div className="hidden md:flex items-center">
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-sm rounded-md capitalize">
                {currentPage}
              </span>
            </div>
          )}

          {/* User Menu */}
          <div className="flex items-center space-x-3 min-w-0">
            <div className="hidden sm:flex items-center space-x-2 text-sm min-w-0">
              <User className="h-4 w-4 text-gray-500 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300 font-medium truncate">
                {user?.username}
              </span>
              <span className="text-xs bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-2 py-1 rounded-full whitespace-nowrap">
                {user?.role}
              </span>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
              className="text-red-600 border-red-300 hover:bg-red-50 dark:text-red-400 dark:border-red-600 dark:hover:bg-red-900/20"
            >
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:inline ml-1">Logout</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Modern Logout Confirmation Dialog */}
      {showLogoutDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Semi-transparent backdrop overlay */}
          <div
            className="fixed inset-0 transition-opacity duration-300 ease-out"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            onClick={cancelLogout}
          />

          {/* Dialog */}
          <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-md w-full mx-4 p-6 transform transition-all duration-300 ease-out scale-100 animate-in fade-in zoom-in">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-red-100 dark:bg-red-900/30 rounded-full">
              <LogOut className="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>

            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Confirm Logout
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Are you sure you want to logout from the admin panel? You'll need to login again to access the dashboard.
              </p>
            </div>

            <div className="flex space-x-3">
              <Button
                variant="outline"
                onClick={cancelLogout}
                className="flex-1 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                Cancel
              </Button>
              <Button
                onClick={confirmLogout}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white"
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

interface AdminSidebarProps {
  currentPage?: string;
}

export function AdminSidebar({ currentPage }: AdminSidebarProps) {
  const navItems = [
    {
      name: 'Dashboard',
      href: '/admin/dashboard',
      icon: BarChart3,
      current: currentPage === 'dashboard',
    },
    {
      name: 'Pending Reports',
      href: '/admin/reports',
      icon: AlertTriangle,
      current: currentPage === 'reports',
    },
    {
      name: 'Approved Reports',
      href: '/admin/approved-reports',
      icon: Eye,
      current: currentPage === 'approved-reports',
    },
    {
      name: 'Rejected Reports',
      href: '/admin/rejected-reports',
      icon: XCircle,
      current: currentPage === 'rejected-reports',
    },
    // {
    //   name: 'Users Management',
    //   href: '/admin/users',
    //   icon: Users,
    //   current: currentPage === 'users',
    // },
    // {
    //   name: 'Website Reviews',
    //   href: '/admin/reviews',
    //   icon: MessageSquare,
    //   current: currentPage === 'reviews',
    // },
    {
      name: 'Business Applications',
      href: '/admin/business-applications',
      icon: Briefcase,
      current: currentPage === 'business-applications',
    },
    {
      name: 'Scanned Data',
      href: '/admin/scanned-data',
      icon: Database,
      current: currentPage === 'scanned-data',
    },
    // {
    //   name: 'Analytics',
    //   href: '/admin/analytics',
    //   icon: TrendingUp,
    //   current: currentPage === 'analytics',
    // },
    {
      name: 'Site Monitoring',
      href: '/admin/monitoring',
      icon: Eye,
      current: currentPage === 'monitoring',
    },
    {
      name: 'Settings',
      href: '/admin/settings',
      icon: Settings,
      current: currentPage === 'settings',
    },
  ];

  return (
    <div className="hidden md:flex md:flex-col md:w-60 md:fixed md:inset-y-0 md:z-20">
      <div className="flex flex-col flex-grow pt-14 bg-white dark:bg-gray-900 shadow-sm border-r border-gray-200 dark:border-gray-700 overflow-y-auto">
        <div className="flex flex-col flex-grow px-3 pb-4">
          <nav className="flex-1 space-y-1 pt-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-150 ${item.current
                    ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'
                    }`}
                >
                  <Icon
                    className={`mr-2.5 h-4 w-4 flex-shrink-0 ${item.current
                      ? 'text-indigo-600 dark:text-indigo-400'
                      : 'text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300'
                      }`}
                  />
                  <span className="truncate">{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-gray-200 dark:border-gray-700">
          <Link
            href="/"
            className="flex items-center text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            <Eye className="h-4 w-4 mr-2" />
            View Main Site
          </Link>
        </div>
      </div>
    </div>
  );
}