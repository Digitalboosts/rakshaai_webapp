import { useAppSelector } from '@/lib/redux/hooks';
import { getAccessToken } from '@/lib/api/adminApi';

/**
 * Custom hook to get access token from Redux or localStorage
 */
export function useAccessToken() {
  // Get token from Redux state
  const reduxToken = useAppSelector((state) => state.auth.token);
  
  // If Redux token is not available, fallback to localStorage
  if (!reduxToken) {
    return getAccessToken();
  }
  
  return reduxToken;
}

/**
 * Custom hook to check if user has valid access token
 */
export function useHasValidToken() {
  const token = useAccessToken();
  return !!token;
}