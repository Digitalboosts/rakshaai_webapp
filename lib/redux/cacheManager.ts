import { useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAppDispatch } from './hooks';
import { invalidateCache, showNotification } from './actions';

/**
 * Hook for managing cache invalidation and navigation
 * Provides utilities to clear cache when needed and navigate between admin routes
 */
export const useCacheManager = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const pathname = usePathname();

  /**
   * Invalidate specific cache or all caches
   */
  const clearCache = useCallback((cacheType?: 'dashboard' | 'users' | 'reports' | 'scannedData' | 'reviews') => {
    dispatch(invalidateCache(cacheType));
    
    const message = cacheType 
      ? `${cacheType.charAt(0).toUpperCase() + cacheType.slice(1)} cache cleared`
      : 'All caches cleared';
    
    dispatch(showNotification({
      type: 'info',
      title: 'Cache Cleared',
      message,
    }));
  }, [dispatch]);

  /**
   * Navigate to admin route and optionally clear cache
   */
  const navigateWithCacheControl = useCallback((
    path: string, 
    clearCacheOnNavigate: boolean = false,
    cacheType?: 'dashboard' | 'users' | 'reports' | 'scannedData' | 'reviews'
  ) => {
    if (clearCacheOnNavigate) {
      dispatch(invalidateCache(cacheType));
    }
    router.push(path);
  }, [dispatch, router]);

  /**
   * Get current admin section from pathname
   */
  const getCurrentSection = useCallback(() => {
    const pathParts = pathname.split('/');
    if (pathParts[1] === 'admin' && pathParts[2]) {
      return pathParts[2];
    }
    return 'dashboard';
  }, [pathname]);

  /**
   * Check if we're on a specific admin route
   */
  const isCurrentRoute = useCallback((route: string) => {
    return getCurrentSection() === route;
  }, [getCurrentSection]);

  return {
    clearCache,
    navigateWithCacheControl,
    getCurrentSection,
    isCurrentRoute,
    currentPath: pathname,
  };
};

/**
 * Hook for auto-refresh functionality
 * Manages automatic data refresh intervals
 */
export const useAutoRefresh = () => {
  const dispatch = useAppDispatch();

  /**
   * Set up auto-refresh for specific data type
   */
  const setupAutoRefresh = useCallback((
    refreshFunction: () => Promise<any>, 
    intervalMs: number = 30000 // 30 seconds default
  ) => {
    const interval = setInterval(() => {
      refreshFunction();
    }, intervalMs);

    return () => clearInterval(interval);
  }, []);

  return {
    setupAutoRefresh,
  };
};