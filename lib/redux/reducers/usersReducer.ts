import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from '../actionTypes';
import { UsersState } from '../types';

const initialState: UsersState = {
  users: [],
  totalCount: 0,
  isLoading: false,
  error: null,
  lastUpdated: null,
  selectedUser: null,
  filter: {
    dateRange: {
      start: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      end: new Date().toISOString().split('T')[0],
    },
    sortBy: 'created_at',
    sortOrder: 'desc',
    page: 1,
    limit: 20,
  },
};

export const usersReducer = (state = initialState, action: any): UsersState => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: action.payload.users,
        totalCount: action.payload.totalCount,
        lastUpdated: new Date().toISOString(),
        error: null,
      };

    case FETCH_USERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};