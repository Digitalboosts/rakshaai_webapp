import {
  FETCH_REJECTED_REPORTS_REQUEST,
  FETCH_REJECTED_REPORTS_SUCCESS,
  FETCH_REJECTED_REPORTS_FAILURE,
  SET_CACHE_TIMESTAMP,
} from '../actionTypes';
import { ReportsState } from '../types';

const initialState: ReportsState = {
  reports: [],
  totalCount: 0,
  isLoading: false,
  error: null,
  lastUpdated: null,
  selectedReport: null,
  filter: {
    type: 'all',
    status: 'rejected',
    dateRange: {
      start: '',
      end: '',
    },
    sortBy: 'created_at',
    sortOrder: 'desc',
    page: 1,
    limit: 50,
  },
};

const rejectedReportsReducer = (state = initialState, action: any): ReportsState => {
  switch (action.type) {
    case FETCH_REJECTED_REPORTS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case FETCH_REJECTED_REPORTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        reports: action.payload.reports,
        totalCount: action.payload.totalCount,
        error: null,
      };

    case FETCH_REJECTED_REPORTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case SET_CACHE_TIMESTAMP:
      if (action.payload.cacheType === 'rejectedReports') {
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

export default rejectedReportsReducer;