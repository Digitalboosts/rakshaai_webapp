import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  SET_LOADING,
} from '../actionTypes';
import { AuthState } from '../types';

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
  token: undefined,
};

export const authReducer = (state = initialState, action: any): AuthState => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case SET_LOADING:
      return {
        ...state,
        isLoading: typeof action.payload === 'boolean' ? action.payload : true,
        error: null,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
        error: null,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        user: null,
        token: undefined,
        error: action.payload,
      };

    case LOGOUT:
      // Clear localStorage
      if (typeof window !== 'undefined') {
        localStorage.removeItem('rakshaai_admin_auth');
      }
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        user: null,
        token: undefined,
        error: null,
      };

    default:
      return state;
  }
};