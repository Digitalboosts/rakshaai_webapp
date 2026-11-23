'use client';

import React, { useState, useEffect } from 'react';
import { useAuth, useAppDispatch } from '@/lib/redux/hooks';
import { initializeAuth } from '@/lib/redux/actions';
import { useRouter } from 'next/navigation';

interface AdminRouteGuardProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export function AdminRouteGuard({ children, fallback }: AdminRouteGuardProps) {
  const { isAuthenticated, isLoading } = useAuth();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [hasMounted, setHasMounted] = useState(false);

  // Initialize auth state from localStorage after component mounts to prevent hydration mismatch
  useEffect(() => {
    dispatch(initializeAuth());
    setHasMounted(true);
  }, [dispatch]);

  useEffect(() => {
    if (hasMounted && !isLoading && !isAuthenticated) {
      router.push('/control-people/hidden-login');
    }
  }, [isAuthenticated, isLoading, router, hasMounted]);

  // Show loading state until component has mounted and auth is initialized
  if (!hasMounted || isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return fallback || (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 dark:text-gray-400">Redirecting to login...</p>
      </div>
    );
  }

  return <>{children}</>;
}

export function PublicRouteGuard({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.push('/admin/dashboard');
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return <>{children}</>;
}