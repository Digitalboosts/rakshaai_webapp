import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { dashboardReducer } from './dashboardReducer';
import { usersReducer } from './usersReducer';
import { reportsReducer } from './reportsReducer';
import { approvedReportsReducer } from './approvedReportsReducer';
import rejectedReportsReducer from './rejectedReportsReducer';
import { scannedDataReducer } from './scannedDataReducer';
import { reviewsReducer } from './reviewsReducer';
import { settingsReducer } from './settingsReducer';
import { uiReducer } from './uiReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  dashboard: dashboardReducer,
  users: usersReducer,
  reports: reportsReducer,
  approvedReports: approvedReportsReducer,
  rejectedReports: rejectedReportsReducer,
  scannedData: scannedDataReducer,
  reviews: reviewsReducer,
  settings: settingsReducer,
  ui: uiReducer,
});

export type RootState = ReturnType<typeof rootReducer>;