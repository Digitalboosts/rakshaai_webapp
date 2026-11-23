import {
  FETCH_DASHBOARD_DATA_REQUEST,
  FETCH_DASHBOARD_DATA_SUCCESS,
  FETCH_DASHBOARD_DATA_FAILURE,
  UPDATE_FILTER,
  INVALIDATE_CACHE,
  SET_CACHE_TIMESTAMP,
} from '../actionTypes';
import { DashboardState } from '../types';

const initialState: DashboardState = {
  data: null,
  isLoading: false,
  error: null,
  lastUpdated: null,
  filter: {
    dateRange: {
      start: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 30 days ago
      end: new Date().toISOString().split('T')[0], // today
    },
    sortBy: 'date',
    sortOrder: 'desc',
    page: 1,
    limit: 10,
  },
};

export const dashboardReducer = (state = initialState, action: any): DashboardState => {
  switch (action.type) {
    case FETCH_DASHBOARD_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case FETCH_DASHBOARD_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        lastUpdated: new Date().toISOString(),
        error: null,
      };

    case FETCH_DASHBOARD_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case UPDATE_FILTER:
      return {
        ...state,
        filter: {
          ...state.filter,
          ...action.payload,
        },
      };

    case INVALIDATE_CACHE:
      // Clear cache if no specific type or if dashboard cache is specified
      if (!action.payload || action.payload === 'dashboard') {
        return {
          ...state,
          data: null,
          lastUpdated: null,
          error: null,
        };
      }
      return state;

    case SET_CACHE_TIMESTAMP:
      // Update timestamp if this action is for dashboard
      if (action.payload.cacheType === 'dashboard') {
        return {
          ...state,
          lastUpdated: action.payload.timestamp,
        };
      }
      return state;

    default:
      return state;
  }
};