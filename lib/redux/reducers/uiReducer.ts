import {
  SET_SIDEBAR_OPEN,
  SET_THEME,
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION,
} from '../actionTypes';
import { UIState } from '../types';

const initialState: UIState = {
  sidebarOpen: false,
  theme: 'light',
  notifications: [],
  isOnline: true,
};

export const uiReducer = (state = initialState, action: any): UIState => {
  switch (action.type) {
    case SET_SIDEBAR_OPEN:
      return {
        ...state,
        sidebarOpen: action.payload,
      };

    case SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };

    case SHOW_NOTIFICATION:
      return {
        ...state,
        notifications: [...state.notifications, action.payload],
      };

    case HIDE_NOTIFICATION:
      return {
        ...state,
        notifications: state.notifications.filter(
          notification => notification.id !== action.payload
        ),
      };

    default:
      return state;
  }
};