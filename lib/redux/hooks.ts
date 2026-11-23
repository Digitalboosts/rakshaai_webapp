import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { useCallback } from 'react';
import type { RootState } from './types';
import type { AppDispatch } from './store';
import { 
  fetchDashboardData,
  fetchUsers,
  fetchReports,
  fetchApprovedReports,
  fetchRejectedReports,
  fetchScannedData,
  fetchReviews
} from './actions';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Custom hooks for common selectors
export const useAuth = () => {
  return useAppSelector((state) => state.auth);
};

export const useAccessToken = () => {
  return useAppSelector((state) => state.auth.token);
};

export const useDashboard = () => {
  return useAppSelector((state) => state.dashboard);
};

export const useUsers = () => {
  return useAppSelector((state) => state.users);
};

export const useReports = () => {
  return useAppSelector((state) => state.reports);
};

export const useApprovedReports = () => {
  return useAppSelector((state) => state.approvedReports);
};

export const useRejectedReports = () => {
  return useAppSelector((state) => state.rejectedReports);
};

export const useScannedData = () => {
  return useAppSelector((state) => state.scannedData);
};

export const useReviews = () => {
  return useAppSelector((state) => state.reviews);
};

export const useSettings = () => {
  return useAppSelector((state) => state.settings);
};

export const useUI = () => {
  return useAppSelector((state) => state.ui);
};

// Enhanced hooks with smart data fetching
export const useSmartDashboard = () => {
  const dispatch = useAppDispatch();
  const dashboardState = useAppSelector((state) => state.dashboard);

  const loadData = useCallback((forceRefresh = false, filter?: any) => {
    return dispatch(fetchDashboardData(filter, forceRefresh));
  }, [dispatch]);

  const refreshData = useCallback((filter?: any) => {
    return dispatch(fetchDashboardData(filter, true));
  }, [dispatch]);

  return {
    ...dashboardState,
    loadData,
    refreshData,
  };
};

export const useSmartUsers = () => {
  const dispatch = useAppDispatch();
  const usersState = useAppSelector((state) => state.users);

  const loadData = useCallback((forceRefresh = false, filter = undefined) => {
    return dispatch(fetchUsers(filter, forceRefresh));
  }, [dispatch]);

  const refreshData = useCallback((filter = undefined) => {
    return dispatch(fetchUsers(filter, true));
  }, [dispatch]);

  return {
    ...usersState,
    loadData,
    refreshData,
  };
};

export const useSmartReports = () => {
  const dispatch = useAppDispatch();
  const reportsState = useAppSelector((state) => state.reports);

  const loadData = useCallback((forceRefresh = false, filter = undefined) => {
    return dispatch(fetchReports(filter, forceRefresh));
  }, [dispatch]);

  const refreshData = useCallback((filter = undefined) => {
    return dispatch(fetchReports(filter, true));
  }, [dispatch]);

  return {
    ...reportsState,
    loadData,
    refreshData,
  };
};

export const useSmartApprovedReports = () => {
  const dispatch = useAppDispatch();
  const approvedReportsState = useAppSelector((state) => state.approvedReports);

  const loadData = useCallback((forceRefresh = false, filter = undefined) => {
    return dispatch(fetchApprovedReports(filter, forceRefresh));
  }, [dispatch]);

  const refreshData = useCallback((filter = undefined) => {
    return dispatch(fetchApprovedReports(filter, true));
  }, [dispatch]);

  return {
    ...approvedReportsState,
    loadData,
    refreshData,
  };
};

export const useSmartRejectedReports = () => {
  const dispatch = useAppDispatch();
  const rejectedReportsState = useAppSelector((state) => state.rejectedReports);

  const loadData = useCallback((forceRefresh = false, filter = undefined) => {
    return dispatch(fetchRejectedReports(filter, forceRefresh));
  }, [dispatch]);

  const refreshData = useCallback((filter = undefined) => {
    return dispatch(fetchRejectedReports(filter, true));
  }, [dispatch]);

  return {
    ...rejectedReportsState,
    loadData,
    refreshData,
  };
};

export const useSmartScannedData = () => {
  const dispatch = useAppDispatch();
  const scannedDataState = useAppSelector((state) => state.scannedData);

  const loadData = useCallback((forceRefresh = false, filter = undefined) => {
    return dispatch(fetchScannedData(filter, forceRefresh));
  }, [dispatch]);

  const refreshData = useCallback((filter = undefined) => {
    return dispatch(fetchScannedData(filter, true));
  }, [dispatch]);

  return {
    ...scannedDataState,
    loadData,
    refreshData,
  };
};

export const useSmartReviews = () => {
  const dispatch = useAppDispatch();
  const reviewsState = useAppSelector((state) => state.reviews);

  const loadData = useCallback((forceRefresh = false, filter = undefined) => {
    return dispatch(fetchReviews(filter, forceRefresh));
  }, [dispatch]);

  const refreshData = useCallback((filter = undefined) => {
    return dispatch(fetchReviews(filter, true));
  }, [dispatch]);

  return {
    ...reviewsState,
    loadData,
    refreshData,
  };
};