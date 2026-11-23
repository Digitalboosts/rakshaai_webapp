import {
  FETCH_APPROVED_REPORTS_REQUEST,
  FETCH_APPROVED_REPORTS_SUCCESS,
  FETCH_APPROVED_REPORTS_FAILURE,
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
    dateRange: {
      start: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      end: new Date().toISOString().split('T')[0],
    },
    sortBy: 'updated_at',
    sortOrder: 'desc',
    page: 1,
    limit: 20,
  },
};

export const approvedReportsReducer = (state = initialState, action: any): ReportsState => {
  switch (action.type) {
    case FETCH_APPROVED_REPORTS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case FETCH_APPROVED_REPORTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        reports: action.payload.reports,
        totalCount: action.payload.totalCount,
        lastUpdated: new Date().toISOString(),
        error: null,
      };

    case FETCH_APPROVED_REPORTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};