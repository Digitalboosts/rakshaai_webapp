// Admin User Interface
export interface AdminUser {
  id: string;
  username: string;
  role: string;
  email?: string;
  lastLogin?: string;
}

// Dashboard Data Interfaces
export interface DashboardData {
  total_urls_processed: number;
  total_website_scams: number;
  total_phone_scams: number;
  total_upi_scams: number;
  total_scam_reports: number;
  total_contact_us_submissions: number;
  recent_activity?: ActivityItem[];
  scam_trends?: TrendData[];
}

export interface ActivityItem {
  id: string;
  type: 'scan' | 'report' | 'contact';
  description: string;
  timestamp: string;
  severity?: 'low' | 'medium' | 'high';
}

export interface TrendData {
  date: string;
  scams: number;
  scans: number;
}

// Report Interfaces
export interface ScamReport {
  id: number;
  name: string;
  review: string;
  attachment?: string;
  status: string;
  created_at: string;
  updated_at: string;
  is_resolved: boolean;
  resolution_details?: string;
  resolved_at?: string;
  scam_type: 'phone' | 'upi' | 'web';
  slug?: string;

  // Phone specific fields
  scammer_phone_number?: string;
  reporter_phone_number?: string;

  // UPI specific fields
  upi_id?: string;

  // Web specific fields
  submission_type?: string;
  phone_number?: string;
  website_url?: string;
  rating?: number;
  domain?: string;

  // Additional fields for legacy compatibility
  type?: 'website' | 'phone' | 'upi';
  url?: string;
  phone?: string;
  description?: string;
  evidence?: string[];
  submitted_at?: string;
  reviewed_at?: string;
  reviewed_by?: string;
}

// User Management Interfaces
export interface User {
  id: string;
  email: string;
  username?: string;
  role?: string;
  created_at: string;
  last_active?: string;
  reports_count: number;
  scans_count: number;
  status: 'active' | 'suspended' | 'banned';
}

// Scanned Data Interfaces
export interface ScannedData {
  id: string;
  url?: string;
  phone?: string;
  upi_id?: string;
  result: 'safe' | 'suspicious' | 'scam';
  confidence_score: number;
  scanned_at: string;
  ip_address?: string;
  user_id?: string;
  details?: any;
}

// Reviews Interfaces
export interface Review {
  id: string;
  website_url: string;
  rating: number;
  comment: string;
  user_name?: string;
  submitted_at: string;
  status: 'pending' | 'approved' | 'rejected';
  moderated_by?: string;
}

// Settings Interfaces
export interface AdminSettings {
  notifications: {
    email: boolean;
    browser: boolean;
    reports_threshold: number;
  };
  security: {
    session_timeout: number;
    require_2fa: boolean;
  };
  system: {
    maintenance_mode: boolean;
    api_rate_limit: number;
  };
}

// Notification Interface
export interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
}

// Filter Interface
export interface FilterOptions {
  dateRange: {
    start: string;
    end: string;
  };
  type?: string;
  status?: string;
  sortBy?: string;
  sortOrder: 'asc' | 'desc';
  page: number;
  limit: number;
  page_size?: number; // Alias for limit for API compatibility
  search?: string;
}

// API Response Interfaces
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  total_count?: number;
  page?: number;
  limit?: number;
}

// Redux State Interfaces
export interface AuthState {
  user: AdminUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  token?: string;
}

export interface DashboardState {
  data: DashboardData | null;
  isLoading: boolean;
  error: string | null;
  lastUpdated: string | null;
  filter: FilterOptions;
}

export interface UsersState {
  users: User[];
  totalCount: number;
  isLoading: boolean;
  error: string | null;
  lastUpdated: string | null;
  selectedUser: User | null;
  filter: FilterOptions;
}

export interface ReportsState {
  reports: ScamReport[];
  totalCount: number;
  isLoading: boolean;
  error: string | null;
  lastUpdated: string | null;
  selectedReport: ScamReport | null;
  filter: FilterOptions;
}

export interface ScannedDataState {
  scannedData: ScannedData[];
  totalCount: number;
  isLoading: boolean;
  error: string | null;
  lastUpdated: string | null;
  lastCacheKey?: string;
  filter: FilterOptions;
}

export interface ReviewsState {
  reviews: Review[];
  totalCount: number;
  isLoading: boolean;
  error: string | null;
  lastUpdated: string | null;
  filter: FilterOptions;
}

export interface SettingsState {
  settings: AdminSettings;
  isLoading: boolean;
  error: string | null;
  hasUnsavedChanges: boolean;
}

export interface UIState {
  sidebarOpen: boolean;
  theme: 'light' | 'dark';
  notifications: Notification[];
  isOnline: boolean;
}

export interface RootState {
  auth: AuthState;
  dashboard: DashboardState;
  users: UsersState;
  reports: ReportsState;
  approvedReports: ReportsState;
  rejectedReports: ReportsState;
  scannedData: ScannedDataState;
  reviews: ReviewsState;
  settings: SettingsState;
  ui: UIState;
}