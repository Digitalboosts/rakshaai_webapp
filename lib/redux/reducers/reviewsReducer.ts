import {
  FETCH_REVIEWS_REQUEST,
  FETCH_REVIEWS_SUCCESS,
  FETCH_REVIEWS_FAILURE,
} from '../actionTypes';
import { ReviewsState } from '../types';

const initialState: ReviewsState = {
  reviews: [],
  totalCount: 0,
  isLoading: false,
  error: null,
  lastUpdated: null,
  filter: {
    dateRange: {
      start: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      end: new Date().toISOString().split('T')[0],
    },
    sortBy: 'submitted_at',
    sortOrder: 'desc',
    page: 1,
    limit: 20,
  },
};

export const reviewsReducer = (state = initialState, action: any): ReviewsState => {
  switch (action.type) {
    case FETCH_REVIEWS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case FETCH_REVIEWS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        reviews: action.payload.reviews,
        totalCount: action.payload.totalCount,
        lastUpdated: new Date().toISOString(),
        error: null,
      };

    case FETCH_REVIEWS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};