/**
 * Utility functions for admin API calls with authentication
 */

const TOKEN_KEY = 'rakshaai_admin_auth';
  const BACKEND_API_URL = process.env.NEXT_PUBLIC_BACKEND_API_WITHOUT_VERSION || 'http://20.163.239.30:9090';

// Import store to access Redux state
let store: any = null;

export function setStore(reduxStore: any) {
  store = reduxStore;
}

export function getAccessToken(): string | null {
  // Try to get from Redux first
  if (store) {
    const state = store.getState();
    if (state.auth.token) {
      return state.auth.token;
    }
  }
  
  // Fallback to localStorage
  if (typeof window === 'undefined') return null;
  
  try {
    const stored = localStorage.getItem(TOKEN_KEY);
    if (stored) {
      const data = JSON.parse(stored);
      return data.accessToken || data.backendToken || null;
    }
  } catch (error) {
    console.error('Error getting access token:', error);
  }
  
  return null;
}

export function getBackendToken(): string | null {
  return getAccessToken();
}

/**
 * Make authenticated API call directly to backend
 */
export async function adminFetch(
  endpoint: string,
  options: RequestInit = {}
): Promise<Response> {
  const accessToken = getAccessToken();
  
  if (!accessToken) {
    throw new Error('No access token available. Please login again.');
  }


  // Convert frontend endpoint to backend admin endpoint directly
  let backendEndpoint = endpoint;
  if (endpoint.startsWith('/api/admin/scam-reports')) {
    // Handle different scam report endpoints using ADMIN endpoints, not web endpoints
    const urlParts = endpoint.split('?');
    const basePath = urlParts[0];
    const queryString = urlParts[1] || '';
    
    if (basePath === '/api/admin/scam-reports') {
      backendEndpoint = 'trustfinder/api/v0/admin/scam-reports/';
      // For admin endpoints, convert status to query parameter
      const params = new URLSearchParams();
      params.set('status', 'pending');
      if (queryString) {
        const existingParams = new URLSearchParams(queryString);
        existingParams.forEach((value, key) => params.set(key, value));
      }
      backendEndpoint += '?' + params.toString();
    } else if (basePath === '/api/admin/scam-reports/approved') {
      backendEndpoint = 'trustfinder/api/v0/admin/scam-reports/';
      const params = new URLSearchParams();
      params.set('status', 'approved');
      if (queryString) {
        const existingParams = new URLSearchParams(queryString);
        existingParams.forEach((value, key) => params.set(key, value));
      }
      backendEndpoint += '?' + params.toString();
    } else if (basePath === '/api/admin/scam-reports/rejected') {
      backendEndpoint = 'trustfinder/api/v0/admin/scam-reports/';
      const params = new URLSearchParams();
      params.set('status', 'rejected');
      if (queryString) {
        const existingParams = new URLSearchParams(queryString);
        existingParams.forEach((value, key) => params.set(key, value));
      }
      backendEndpoint += '?' + params.toString();
    }
  }
  
  const url = `${BACKEND_API_URL}${backendEndpoint}`;
  
  // Debug logging
  console.log('Environment variables:', {
    NEXT_PUBLIC_BACKEND_API_WITHOUT_VERSION: process.env.NEXT_PUBLIC_BACKEND_API_WITHOUT_VERSION,
    BACKEND_API_URL,
    endpoint,
    backendEndpoint,
    finalUrl: url
  });
  
  const config: RequestInit = {
    ...options,
    credentials: 'include', // Include cookies for Django CSRF
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
      ...(options.headers || {}),
    },
  };

  console.log('Making direct backend API call:', {
    url,
    method: config.method || 'GET',
    hasToken: !!accessToken,
    token: accessToken ? `${accessToken.slice(0, 20)}...` : null
  });

  try {
    const response = await fetch(url, config);

    console.log('Backend API response:', {
      status: response.status,
      statusText: response.statusText,
      url: response.url
    });

    // If unauthorized, clear token and redirect to login
    if (response.status === 401) {
      console.error('Access token invalid or expired, clearing tokens');
      if (typeof window !== 'undefined') {
        localStorage.removeItem(TOKEN_KEY);
        window.location.href = '/control-people/hidden-login';
      }
    }

    return response;
  } catch (error) {
    console.error('Backend API call failed:', error);
    // If network error, could be CORS or server issue
    if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
      throw new Error('Backend API is unreachable. Please check your connection.');
    }
    throw error;
  }
}

/**
 * Approve or reject a scam report directly on backend
 */
export async function approveRejectReport(
  reportId: number,
  scamType: string,
  status: 'approved' | 'rejected'
): Promise<Response> {
  const accessToken = getAccessToken();
  
  if (!accessToken) {
    throw new Error('No access token available. Please login again.');
  }

  const url = `${BACKEND_API_URL}trustfinder/api/v0/admin/scam-reports/`;
  
  const config: RequestInit = {
    method: 'PUT',
    credentials: 'include', // Include cookies for Django CSRF
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      id: reportId,
      scam_type: scamType,
      status: status
    }),
  };

  console.log('Making approve/reject API call:', {
    url,
    reportId,
    scamType,
    status
  });

  try {
    const response = await fetch(url, config);

    console.log('Approve/reject API response:', {
      status: response.status,
      statusText: response.statusText
    });

    return response;
  } catch (error) {
    console.error('Approve/reject API call failed:', error);
    if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
      throw new Error('Backend API is unreachable for approve/reject operation.');
    }
    throw error;
  }
}
