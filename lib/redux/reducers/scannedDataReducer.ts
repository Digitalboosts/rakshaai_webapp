import {
  FETCH_SCANNED_DATA_REQUEST,
  FETCH_SCANNED_DATA_SUCCESS,
  FETCH_SCANNED_DATA_FAILURE,
} from '../actionTypes';
import { ScannedDataState } from '../types';

const initialState: ScannedDataState = {
  scannedData: [],
  totalCount: 0,
  isLoading: false,
  error: null,
  lastUpdated: null,
  lastCacheKey: undefined,
  filter: {
    dateRange: {
      start: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      end: new Date().toISOString().split('T')[0],
    },
    sortBy: 'scanned_at',
    sortOrder: 'desc',
    page: 1,
    limit: 50,
  },
};

export const scannedDataReducer = (state = initialState, action: any): ScannedDataState => {
  switch (action.type) {
    case FETCH_SCANNED_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case FETCH_SCANNED_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        scannedData: action.payload.scannedData,
        totalCount: action.payload.totalCount,
        lastUpdated: new Date().toISOString(),
        lastCacheKey: action.payload.cacheKey,
        error: null,
      };

    case FETCH_SCANNED_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};