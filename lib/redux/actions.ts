import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  SET_LOADING,
  FETCH_DASHBOARD_DATA_REQUEST,
  FETCH_DASHBOARD_DATA_SUCCESS,
  FETCH_DASHBOARD_DATA_FAILURE,
  UPDATE_FILTER,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  FETCH_REPORTS_REQUEST,
  FETCH_REPORTS_SUCCESS,
  FETCH_REPORTS_FAILURE,
  APPROVE_REPORT,
  REJECT_REPORT,
  FETCH_APPROVED_REPORTS_REQUEST,
  FETCH_APPROVED_REPORTS_SUCCESS,
  FETCH_APPROVED_REPORTS_FAILURE,
  FETCH_REJECTED_REPORTS_REQUEST,
  FETCH_REJECTED_REPORTS_SUCCESS,
  FETCH_REJECTED_REPORTS_FAILURE,
  FETCH_SCANNED_DATA_REQUEST,
  FETCH_SCANNED_DATA_SUCCESS,
  FETCH_SCANNED_DATA_FAILURE,
  FETCH_REVIEWS_REQUEST,
  FETCH_REVIEWS_SUCCESS,
  FETCH_REVIEWS_FAILURE,
  UPDATE_SETTINGS,
  RESET_SETTINGS,
  SET_SIDEBAR_OPEN,
  SET_THEME,
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION,
  INVALIDATE_CACHE,
  SET_CACHE_TIMESTAMP,
  FORCE_REFRESH_DATA,
} from './actionTypes';

import {
  AdminUser,
  DashboardData,
  User,
  ScamReport,
  ScannedData,
  Review,
  AdminSettings,
  FilterOptions,
  Notification,
} from './types';

// Auth Actions
export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (user: AdminUser, token?: string) => ({
  type: LOGIN_SUCCESS,
  payload: { user, token },
});

export const loginFailure = (error: string) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const logout = () => ({
  type: LOGOUT,
});

export const setLoading = (loading: boolean) => ({
  type: SET_LOADING,
  payload: loading,
});

// Dashboard Actions
export const fetchDashboardDataRequest = () => ({
  type: FETCH_DASHBOARD_DATA_REQUEST,
});

export const fetchDashboardDataSuccess = (data: DashboardData) => ({
  type: FETCH_DASHBOARD_DATA_SUCCESS,
  payload: data,
});

export const fetchDashboardDataFailure = (error: string) => ({
  type: FETCH_DASHBOARD_DATA_FAILURE,
  payload: error,
});

export const updateFilter = (filter: Partial<FilterOptions>) => ({
  type: UPDATE_FILTER,
  payload: filter,
});

// Users Actions
export const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST,
});

export const fetchUsersSuccess = (users: User[], totalCount: number) => ({
  type: FETCH_USERS_SUCCESS,
  payload: { users, totalCount },
});

export const fetchUsersFailure = (error: string) => ({
  type: FETCH_USERS_FAILURE,
  payload: error,
});

// Reports Actions - sync action creators
export const fetchReportsRequest = () => ({
  type: FETCH_REPORTS_REQUEST,
});

export const fetchReportsSuccess = (reports: ScamReport[], totalCount: number) => ({
  type: FETCH_REPORTS_SUCCESS,
  payload: { reports, totalCount },
});

export const fetchReportsFailure = (error: string) => ({
  type: FETCH_REPORTS_FAILURE,
  payload: error,
});

export const approveReportSuccess = (reportId: string) => ({
  type: APPROVE_REPORT,
  payload: reportId,
});

export const rejectReportSuccess = (reportId: string) => ({
  type: REJECT_REPORT,
  payload: reportId,
});

// Async thunk action creators for approve/reject with API calls
export const approveReport = (reportId: string, scamType: string) => {
  console.log('approveReport called with:', { reportId, scamType });
  return async (dispatch: any, getState: any) => {
    try {
      // Get the report from state to determine scam_type
      const state = getState();
      const report = state.reports.reports.find((r: any) => r.id.toString() === reportId);
      if (!report) {
        throw new Error('Report not found');
      }

      // Get auth token
      const authRaw = localStorage.getItem('rakshaai_admin_auth');
      if (!authRaw) throw new Error('Admin not authenticated');

      const { accessToken } = JSON.parse(authRaw);
      const BACKEND_API_URL = process.env.NEXT_PUBLIC_BACKEND_API_WITHOUT_VERSION || 'http://20.163.239.30:9090';
      const url = `${BACKEND_API_URL}trustfinder/api/v0/web/scam-reports/crud/?${scamType ? `scam_type=${scamType}` : ''}`;

      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          id: parseInt(reportId),
          scam_type: report.scam_type,
          status: 'approved'
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
        throw new Error(`Failed to approve report: ${errorData.error || response.statusText}`);
      }

      dispatch(approveReportSuccess(reportId));
      dispatch(setCacheTimestamp('reports'));

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to approve report';
      dispatch(showNotification({
        type: 'error',
        title: 'Approval Failed',
        message: errorMessage,
      }));
      throw error; // Re-throw so components can handle if needed
    }
  };
};

export const rejectReport = (reportId: string, scamType: string) => {
  return async (dispatch: any, getState: any) => {
    try {
      // Get the report from state to determine scam_type
      const state = getState();
      const report = state.reports.reports.find((r: any) => r.id.toString() === reportId);
      if (!report) {
        throw new Error('Report not found');
      }

      // Get auth token
      const authRaw = localStorage.getItem('rakshaai_admin_auth');
      if (!authRaw) throw new Error('Admin not authenticated');

      const { accessToken } = JSON.parse(authRaw);
      const BACKEND_API_URL = process.env.NEXT_PUBLIC_BACKEND_API_WITHOUT_VERSION || 'http://20.163.239.30:9090';
      const url = `${BACKEND_API_URL}trustfinder/api/v0/web/scam-reports/crud/?${scamType ? `scam_type=${scamType}` : ''}`;

      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          id: parseInt(reportId),
          scam_type: report.scam_type,
          status: 'rejected'
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
        throw new Error(`Failed to reject report: ${errorData.error || response.statusText}`);
      }

      dispatch(rejectReportSuccess(reportId));
      dispatch(setCacheTimestamp('reports'));

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to reject report';
      dispatch(showNotification({
        type: 'error',
        title: 'Rejection Failed',
        message: errorMessage,
      }));
      throw error; // Re-throw so components can handle if needed
    }
  };
};

// Approved Reports Actions - sync action creators
export const fetchApprovedReportsRequest = () => ({
  type: FETCH_APPROVED_REPORTS_REQUEST,
});

export const fetchApprovedReportsSuccess = (reports: ScamReport[], totalCount: number) => ({
  type: FETCH_APPROVED_REPORTS_SUCCESS,
  payload: { reports, totalCount },
});

export const fetchApprovedReportsFailure = (error: string) => ({
  type: FETCH_APPROVED_REPORTS_FAILURE,
  payload: error,
});

// Async thunk action creator for fetching approved reports
export const fetchApprovedReports = (filter?: Partial<FilterOptions>, forceRefresh: boolean = false) => {
  return async (dispatch: any, getState: any) => {
    const state = getState();
    
    // Check if we have valid cached data and don't force refresh
    if (!forceRefresh && state.approvedReports.reports.length > 0 && isCacheValid(state.approvedReports.lastUpdated, 5)) {
      // Return cached data without making API call
      return;
    }
    
    dispatch(fetchApprovedReportsRequest());
      const BACKEND_API_URL = process.env.NEXT_PUBLIC_BACKEND_API_WITHOUT_VERSION || 'http://20.163.239.30:9090';
    
    try {
      // Get auth token from local storage
      const authRaw = localStorage.getItem('rakshaai_admin_auth');
      if (!authRaw) throw new Error('Admin not authenticated');

      const { accessToken } = JSON.parse(authRaw);
      let url = `${BACKEND_API_URL}trustfinder/api/v0/web/scam-reports/crud/?status=approved`;

      // Apply filter if provided
      if (filter?.type && filter.type !== 'all') {
        url += `&scam_type=${filter.type}`;
      }

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.error || 'Failed to fetch approved reports');
      }

      const data = await response.json();

      dispatch(fetchApprovedReportsSuccess(data.reports || [], data.total_count || 0));
      dispatch(setCacheTimestamp('approvedReports'));
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to fetch approved reports';
      dispatch(fetchApprovedReportsFailure(errorMessage));
      dispatch(showNotification({
        type: 'error',
        title: 'Data Loading Failed',
        message: errorMessage,
      }));
    }
  };
};

// Rejected Reports Actions - sync action creators
export const fetchRejectedReportsRequest = () => ({
  type: FETCH_REJECTED_REPORTS_REQUEST,
});

export const fetchRejectedReportsSuccess = (reports: ScamReport[], totalCount: number) => ({
  type: FETCH_REJECTED_REPORTS_SUCCESS,
  payload: { reports, totalCount },
});

export const fetchRejectedReportsFailure = (error: string) => ({
  type: FETCH_REJECTED_REPORTS_FAILURE,
  payload: error,
});

// Async thunk action creator for fetching rejected reports
export const fetchRejectedReports = (filter?: Partial<FilterOptions>, forceRefresh: boolean = false) => {
  return async (dispatch: any, getState: any) => {
    const state = getState();
    
    // Check if we have valid cached data and don't force refresh
    if (!forceRefresh && state.rejectedReports.reports.length > 0 && isCacheValid(state.rejectedReports.lastUpdated, 5)) {
      // Return cached data without making API call
      return;
    }
    
    dispatch(fetchRejectedReportsRequest());
    
    try {
      // Get auth token from local storage
      const authRaw = localStorage.getItem('rakshaai_admin_auth');
      if (!authRaw) throw new Error('Admin not authenticated');
      const BACKEND_API_URL = process.env.NEXT_PUBLIC_BACKEND_API_WITHOUT_VERSION || 'http://20.163.239.30:9090';

      const { accessToken } = JSON.parse(authRaw);
      let url = `${BACKEND_API_URL}trustfinder/api/v0/web/scam-reports/crud/?status=rejected`;

      // Apply filter if provided
      if (filter?.type && filter.type !== 'all') {
        url += `&scam_type=${filter.type}`;
      }

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      dispatch(fetchRejectedReportsSuccess(data.reports || [], data.total_count || 0));
      dispatch(setCacheTimestamp('rejectedReports'));
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to fetch rejected reports';
      dispatch(fetchRejectedReportsFailure(errorMessage));
      dispatch(showNotification({
        type: 'error',
        title: 'Data Loading Failed',
        message: errorMessage,
      }));
    }
  };
};

// Scanned Data Actions
export const fetchScannedDataRequest = () => ({
  type: FETCH_SCANNED_DATA_REQUEST,
});

export const fetchScannedDataSuccess = (scannedData: ScannedData[], totalCount: number, cacheKey?: string) => ({
  type: FETCH_SCANNED_DATA_SUCCESS,
  payload: { scannedData, totalCount, cacheKey },
});

export const fetchScannedDataFailure = (error: string) => ({
  type: FETCH_SCANNED_DATA_FAILURE,
  payload: error,
});

// Reviews Actions
export const fetchReviewsRequest = () => ({
  type: FETCH_REVIEWS_REQUEST,
});

export const fetchReviewsSuccess = (reviews: Review[], totalCount: number) => ({
  type: FETCH_REVIEWS_SUCCESS,
  payload: { reviews, totalCount },
});

export const fetchReviewsFailure = (error: string) => ({
  type: FETCH_REVIEWS_FAILURE,
  payload: error,
});

// Settings Actions
export const updateSettings = (settings: Partial<AdminSettings>) => ({
  type: UPDATE_SETTINGS,
  payload: settings,
});

export const resetSettings = () => ({
  type: RESET_SETTINGS,
});

// UI Actions
export const setSidebarOpen = (open: boolean) => ({
  type: SET_SIDEBAR_OPEN,
  payload: open,
});

export const setTheme = (theme: 'light' | 'dark') => ({
  type: SET_THEME,
  payload: theme,
});

export const showNotification = (notification: Omit<Notification, 'id' | 'timestamp' | 'read'>) => ({
  type: SHOW_NOTIFICATION,
  payload: {
    ...notification,
    id: Date.now().toString(),
    timestamp: new Date().toISOString(),
    read: false,
  },
});

export const hideNotification = (notificationId: string) => ({
  type: HIDE_NOTIFICATION,
  payload: notificationId,
});

// Cache Management Actions
export const invalidateCache = (cacheType?: 'dashboard' | 'users' | 'reports' | 'scannedData' | 'reviews') => ({
  type: INVALIDATE_CACHE,
  payload: cacheType, // If no cacheType, invalidate all caches
});

export const setCacheTimestamp = (cacheType: string) => ({
  type: SET_CACHE_TIMESTAMP,
  payload: { cacheType, timestamp: new Date().toISOString() },
});

export const forceRefreshData = (dataType: 'dashboard' | 'users' | 'reports' | 'scannedData' | 'reviews') => ({
  type: FORCE_REFRESH_DATA,
  payload: dataType,
});

// Utility function to check cache validity
const isCacheValid = (lastUpdated: string | null, maxAgeMinutes: number = 5): boolean => {
  if (!lastUpdated) return false;
  const lastUpdatedTime = new Date(lastUpdated).getTime();
  const currentTime = new Date().getTime();
  const maxAge = maxAgeMinutes * 60 * 1000; // Convert to milliseconds
  return (currentTime - lastUpdatedTime) < maxAge;
};

// Hydration-safe auth initialization
export const initializeAuth = () => {
  return (dispatch: any) => {
    if (typeof window === 'undefined') return;
    
    const savedAuth = localStorage.getItem('rakshaai_admin_auth');
    if (savedAuth) {
      try {
        const authData = JSON.parse(savedAuth);
        // Check if token is still valid (simple timestamp check)
        const tokenAge = Date.now() - (authData.timestamp || 0);
        const maxAge = 24 * 60 * 60 * 1000; // 24 hours
        
        if (tokenAge < maxAge && authData.user && authData.accessToken) {
          dispatch(loginSuccess(authData.user, authData.accessToken));
        } else {
          // Token expired, remove from localStorage
          localStorage.removeItem('rakshaai_admin_auth');
        }
      } catch (error) {
        console.error('Error parsing saved auth:', error);
        localStorage.removeItem('rakshaai_admin_auth');
      }
    }
  };
};

// Async Action Creators (Thunks)
export const login = (username: string, password: string) => {
  return async (dispatch: any) => {
    dispatch(loginRequest());
    
    try {
      // Call the backend API directly
      const BACKEND_API_URL = process.env.NEXT_PUBLIC_BACKEND_API_WITHOUT_VERSION;
      const backendLoginUrl = `${BACKEND_API_URL}trustfinder/api/v0/auth/login/`;
      
      console.log('Calling backend login directly:', backendLoginUrl);
      
      const response = await fetch(backendLoginUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      console.log('Backend response status:', response);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Login failed' }));
        throw new Error(errorData.error || 'Invalid credentials');
      }

      const data = await response.json();
      console.log('Backend login successful:', data.access);

      // Extract backend token (try both refresh and access fields)
      const backendToken = data.access      
      if (!backendToken) {
        console.error('No backend token found in response:', data);
        throw new Error('Authentication failed - no token received');
      }

      // Create user object from backend response
      const user = {
        id: data.user?.id || data.id || '1',
        username: data.user?.username || data.username || username,
        email: data.user?.email || data.email || username,
        role: data.user?.role || data.role || 'admin',
      };

      // Store in localStorage (no need for JWT token, use backend token directly)
      localStorage.setItem('rakshaai_admin_auth', JSON.stringify({
        user: user,
        accessToken: backendToken,
        timestamp: Date.now(),
      }));

      dispatch(loginSuccess(user, backendToken));
      dispatch(showNotification({
        type: 'success',
        title: 'Login Successful',
        message: `Welcome back, ${user.username || user.email}!`,
      }));
      
      return true;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Login failed';
      dispatch(loginFailure(errorMessage));
      dispatch(showNotification({
        type: 'error',
        title: 'Login Failed',
        message: errorMessage,
      }));
      
      return false;
    }
  };
};

export const fetchDashboardData = (filter?: Partial<FilterOptions>, forceRefresh: boolean = false) => {
  return async (dispatch: any, getState: any) => {
    const state = getState();
    
    // Check if we have valid cached data and don't force refresh
    if (!forceRefresh && state.dashboard.data && isCacheValid(state.dashboard.lastUpdated, 5)) {
      // Return cached data without making API call
      return;
    }
    
    dispatch(fetchDashboardDataRequest());
    
    if (filter) {
      dispatch(updateFilter(filter));
    }
    
    try {
      // Get auth token from local storage
      const authRaw = localStorage.getItem('rakshaai_admin_auth');
      if (!authRaw) throw new Error('Admin not authenticated');

      const { accessToken } = JSON.parse(authRaw);
      const BACKEND_API_URL = process.env.NEXT_PUBLIC_BACKEND_API_WITHOUT_VERSION || 'http://20.163.239.30:9090';
      
      // Use the new dashboard overview endpoint
      let url = `${BACKEND_API_URL}trustfinder/api/v0/dashboard/overview/`;
      const queryParams = new URLSearchParams();
      
      // Handle filter_type parameter mapping
      if (filter?.type) {
        queryParams.append('filter_type', filter.type);
      }
      
      // Add date range if provided (though the backend will calculate based on filter_type)
      if (filter?.dateRange?.start) queryParams.append('start_date', filter.dateRange.start);
      if (filter?.dateRange?.end) queryParams.append('end_date', filter.dateRange.end);
      
      if (queryParams.toString()) {
        url += `?${queryParams.toString()}`;
      }

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.error || 'Failed to fetch dashboard data');
      }

      const responseData = await response.json();

      // Handle the new response format with success wrapper
      if (!responseData.success) {
        throw new Error('Dashboard API returned unsuccessful response');
      }

      // Transform API response to match DashboardData interface
      const dashboardData: DashboardData = {
        total_urls_processed: responseData.data.total_urls_processed || 0,
        total_website_scams: responseData.data.total_website_scams || 0,
        total_phone_scams: responseData.data.total_phone_scams || 0,
        total_upi_scams: responseData.data.total_upi_scams || 0,
        total_scam_reports: responseData.data.total_scam_reports || 0,
        total_contact_us_submissions: responseData.data.total_contact_us_submissions || 0,
        recent_activity: responseData.data.recent_activity || [],
        scam_trends: responseData.data.scam_trends || [],
      };

      dispatch(fetchDashboardDataSuccess(dashboardData));
      dispatch(setCacheTimestamp('dashboard'));
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to fetch dashboard data';
      dispatch(fetchDashboardDataFailure(errorMessage));
      dispatch(showNotification({
        type: 'error',
        title: 'Data Loading Failed',
        message: errorMessage,
      }));
    }
  };
};

export const fetchUsers = (filter?: Partial<FilterOptions>, forceRefresh: boolean = false) => {
  return async (dispatch: any, getState: any) => {
    const state = getState();
    
    // Check if we have valid cached data and don't force refresh
    if (!forceRefresh && state.users.users.length > 0 && isCacheValid(state.users.lastUpdated, 5)) {
      // Return cached data without making API call
      return;
    }
    
    dispatch(fetchUsersRequest());
    
    try {
      // Get auth token from local storage
      const authRaw = localStorage.getItem('rakshaai_admin_auth');
      if (!authRaw) throw new Error('Admin not authenticated');

      const { accessToken } = JSON.parse(authRaw);
      const BACKEND_API_URL = process.env.NEXT_PUBLIC_BACKEND_API_WITHOUT_VERSION || 'http://20.163.239.30:9090';
      
      // Build URL with filter parameters
      let url = `${BACKEND_API_URL}trustfinder/api/v0/admin/users/`;
      const queryParams = new URLSearchParams();
      
      if (filter?.dateRange?.start) queryParams.append('start_date', filter.dateRange.start);
      if (filter?.dateRange?.end) queryParams.append('end_date', filter.dateRange.end);
      if (filter?.status) queryParams.append('status', filter.status);
      if (filter?.search) queryParams.append('search', filter.search);
      
      if (queryParams.toString()) {
        url += `?${queryParams.toString()}`;
      }

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.error || 'Failed to fetch users');
      }

      const data = await response.json();

      dispatch(fetchUsersSuccess(data.users || [], data.total_count || 0));
      dispatch(setCacheTimestamp('users'));
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to fetch users';
      dispatch(fetchUsersFailure(errorMessage));
    }
  };
};

export const fetchReports = (filter?: Partial<FilterOptions>, forceRefresh: boolean = false) => {
  return async (dispatch: any, getState: any) => {
    const state = getState();
    
    // Check if we have valid cached data and don't force refresh
    if (!forceRefresh && state.reports.reports.length > 0 && isCacheValid(state.reports.lastUpdated, 5)) {
      // Return cached data without making API call
      return;
    }
    
    dispatch(fetchReportsRequest());
    
    try {
      // Get auth token from local storage
      const authRaw = localStorage.getItem('rakshaai_admin_auth');
      if (!authRaw) throw new Error('Admin not authenticated');

      const { accessToken } = JSON.parse(authRaw);
      const BACKEND_API_URL = process.env.NEXT_PUBLIC_BACKEND_API_WITHOUT_VERSION || 'http://20.163.239.30:9090';

      let url = `${BACKEND_API_URL}trustfinder/api/v0/web/scam-reports/crud/?status=pending`;

      // Apply filter if provided
      if (filter?.type && filter.type !== 'all') {
        url += `&scam_type=${filter.type}`;
      }

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.error || 'Failed to fetch reports');
      }

      const data = await response.json();

      dispatch(fetchReportsSuccess(data.reports || [], data.total_count || 0));
      dispatch(setCacheTimestamp('reports'));
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to fetch reports';
      dispatch(fetchReportsFailure(errorMessage));
      dispatch(showNotification({
        type: 'error',
        title: 'Data Loading Failed',
        message: errorMessage,
      }));
    }
  };
};

export const fetchScannedData = (filter?: Partial<FilterOptions>, forceRefresh: boolean = false) => {
  return async (dispatch: any, getState: any) => {
    const state = getState();
    
    // Create a cache key that includes pagination parameters
    const cacheKey = `page_${filter?.page || 1}_size_${filter?.page_size || filter?.limit || 10}`;
    const hasValidCache = state.scannedData.scannedData.length > 0 && 
                         state.scannedData.lastCacheKey === cacheKey && 
                         isCacheValid(state.scannedData.lastUpdated, 5);
    
    // Check if we have valid cached data for this specific page and don't force refresh
    if (!forceRefresh && hasValidCache) {
      console.log('📦 Using cached data for', cacheKey);
      return;
    }
    
    console.log('🌐 Making API call for', cacheKey, 'forceRefresh:', forceRefresh);
    dispatch(fetchScannedDataRequest());
    
    try {
      // Get auth token from local storage
      const authRaw = localStorage.getItem('rakshaai_admin_auth');
      if (!authRaw) throw new Error('Admin not authenticated');

      const { accessToken } = JSON.parse(authRaw);
      const BACKEND_API_URL = process.env.NEXT_PUBLIC_BACKEND_API_WITHOUT_VERSION || 'http://20.163.239.30:9090';
      
      // Build URL with filter parameters
      let url = `${BACKEND_API_URL}trustfinder/api/v0/trust-data/list/`;
      const queryParams = new URLSearchParams();
      
      // Add pagination parameters
      if (filter?.page) queryParams.append('page', filter.page.toString());
      if (filter?.page_size) queryParams.append('page_size', filter.page_size.toString());
      else if (filter?.limit) queryParams.append('page_size', filter.limit.toString());
      
      if (filter?.dateRange?.start) queryParams.append('start_date', filter.dateRange.start);
      if (filter?.dateRange?.end) queryParams.append('end_date', filter.dateRange.end);
      if (filter?.type && filter.type !== 'all') queryParams.append('type', filter.type);
      if (filter?.search) queryParams.append('search', filter.search);
      
      if (queryParams.toString()) {
        url += `?${queryParams.toString()}`;
      }

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.error || 'Failed to fetch scanned data');
      }

      const data = await response.json();

      // Handle different response formats
      const scannedData = data.results || data.scanned_data || [];
      const totalCount = data.total_data_count || data.total_count || 0;

      // Store the cache key with the data
      const cacheKey = `page_${filter?.page || 1}_size_${filter?.page_size || filter?.limit || 10}`;
      
      dispatch(fetchScannedDataSuccess(scannedData, totalCount, cacheKey));
      dispatch(setCacheTimestamp('scannedData'));
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to fetch scanned data';
      dispatch(fetchScannedDataFailure(errorMessage));
    }
  };
};

export const fetchReviews = (filter?: Partial<FilterOptions>, forceRefresh: boolean = false) => {
  return async (dispatch: any, getState: any) => {
    const state = getState();
    
    // Check if we have valid cached data and don't force refresh
    if (!forceRefresh && state.reviews.reviews.length > 0 && isCacheValid(state.reviews.lastUpdated, 5)) {
      // Return cached data without making API call
      return;
    }
    
    dispatch(fetchReviewsRequest());
    
    try {
      // Get auth token from local storage
      const authRaw = localStorage.getItem('rakshaai_admin_auth');
      if (!authRaw) throw new Error('Admin not authenticated');

      const { accessToken } = JSON.parse(authRaw);
      const BACKEND_API_URL = process.env.NEXT_PUBLIC_BACKEND_API_WITHOUT_VERSION || 'http://20.163.239.30:9090';
      
      // Build URL with filter parameters
      let url = `${BACKEND_API_URL}trustfinder/api/v0/admin/reviews/`;
      const queryParams = new URLSearchParams();
      
      if (filter?.dateRange?.start) queryParams.append('start_date', filter.dateRange.start);
      if (filter?.dateRange?.end) queryParams.append('end_date', filter.dateRange.end);
      if (filter?.status && filter.status !== 'all') queryParams.append('status', filter.status);
      if (filter?.search) queryParams.append('search', filter.search);
      
      if (queryParams.toString()) {
        url += `?${queryParams.toString()}`;
      }

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.error || 'Failed to fetch reviews');
      }

      const data = await response.json();

      dispatch(fetchReviewsSuccess(data.reviews || [], data.total_count || 0));
      dispatch(setCacheTimestamp('reviews'));
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to fetch reviews';
      dispatch(fetchReviewsFailure(errorMessage));
    }
  };
};