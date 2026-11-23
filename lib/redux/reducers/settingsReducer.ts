import {
  UPDATE_SETTINGS,
  RESET_SETTINGS,
} from '../actionTypes';
import { SettingsState, AdminSettings } from '../types';

const defaultSettings: AdminSettings = {
  notifications: {
    email: true,
    browser: true,
    reports_threshold: 10,
  },
  security: {
    session_timeout: 30, // minutes
    require_2fa: false,
  },
  system: {
    maintenance_mode: false,
    api_rate_limit: 1000,
  },
};

const initialState: SettingsState = {
  settings: defaultSettings,
  isLoading: false,
  error: null,
  hasUnsavedChanges: false,
};

export const settingsReducer = (state = initialState, action: any): SettingsState => {
  switch (action.type) {
    case UPDATE_SETTINGS:
      return {
        ...state,
        settings: {
          ...state.settings,
          ...action.payload,
        },
        hasUnsavedChanges: true,
      };

    case RESET_SETTINGS:
      return {
        ...state,
        settings: defaultSettings,
        hasUnsavedChanges: false,
      };

    default:
      return state;
  }
};