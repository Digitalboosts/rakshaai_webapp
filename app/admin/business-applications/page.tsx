'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { AdminRouteGuard } from '@/components/AdminRouteGuard';
import { AdminNavbar, AdminSidebar } from '@/components/AdminNavigation';
import {
  Building2,
  Globe,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  XCircle,
  Eye,
  Search,
  RefreshCw,
  Briefcase,
  Loader2,
  AlertCircle,
} from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────────────
// Types shaped to match the backend business/dashboard/ response
// ─────────────────────────────────────────────────────────────────────────────
interface BusinessApplication {
  id: number;
  business_user_id: string;
  email: string;
  website: string;
  business_name?: string;
  product_name?: string;
  phone?: string;
  business_info: boolean;
  // normalized locally backend may use is_approved / is_verified / status
  status: 'pending' | 'approved' | 'rejected';
  created_at: string;
  [key: string]: unknown;
}

// Normalize whatever status shape the backend returns into our 3-value enum
function normalizeStatus(raw: Record<string, unknown>): BusinessApplication['status'] {
  if (raw.business_info === true) return 'approved';
  if (raw.business_info === false) return 'pending';
  if (raw.status === 'approved' || raw.is_approved === true || raw.verified === true) return 'approved';
  if (raw.status === 'rejected' || raw.is_rejected === true) return 'rejected';
  return 'pending';
}

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────
function StatusBadge({ status }: { status: string | undefined }) {
  const map: Record<string, string> = {
    pending:  'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
    approved: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
    rejected: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
  };
  const label = status || 'pending';
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold capitalize ${map[label] ?? map.pending}`}>
      {label}
    </span>
  );
}

function fmt(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
}

// ─────────────────────────────────────────────────────────────────────────────
// Detail modal
// ─────────────────────────────────────────────────────────────────────────────
function ApplicationModal({
  app,
  onClose,
  onApprove,
  onReject,
  actioning,
}: {
  app: BusinessApplication;
  onClose: () => void;
  onApprove: (app: BusinessApplication) => void;
  onReject: (app: BusinessApplication) => void;
  actioning: string | null;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-md overflow-y-auto max-h-[90vh] z-10">
        <div className="flex items-center justify-between p-5 border-b border-gray-100 dark:border-gray-700">
          <h3 className="text-base font-bold text-gray-900 dark:text-white">Application Detail</h3>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <XCircle className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        <div className="p-5 space-y-4">
          {/* Business name / ID */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center flex-shrink-0">
              <Building2 className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <p className="text-base font-bold text-gray-900 dark:text-white">
                {app.business_name || app.email}
              </p>
              <p className="text-xs text-gray-400 font-mono">{app.business_user_id}</p>
            </div>
          </div>

          {/* Fields */}
          <div className="space-y-3">
            {[
              { icon: Mail, label: 'Email', value: app.email },
              { icon: Globe, label: 'Website', value: app.website },
              ...(app.phone ? [{ icon: Phone, label: 'Phone', value: app.phone }] : []),
              ...(app.product_name ? [{ icon: Briefcase, label: 'Product', value: app.product_name }] : []),
              { icon: Clock, label: 'Registered', value: fmt(app.created_at) },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <Icon className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs text-gray-400">{label}</p>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200 truncate">{value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Status */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Status:</span>
            <StatusBadge status={app.status} />
          </div>

          {/* Actions */}
          {app.status !== 'approved' && app.status !== 'rejected' && (
            <div className="flex gap-3 pt-1">
              <button
                onClick={() => { onApprove(app); onClose(); }}
                disabled={actioning === app.business_user_id}
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-green-600 hover:bg-green-700 disabled:opacity-60 text-white font-semibold rounded-xl transition-colors"
              >
                {actioning === app.business_user_id
                  ? <Loader2 className="w-4 h-4 animate-spin" />
                  : <CheckCircle className="w-4 h-4" />}
                Approve
              </button>
              <button
                onClick={() => { onReject(app); onClose(); }}
                disabled={actioning === app.business_user_id}
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-red-600 hover:bg-red-700 disabled:opacity-60 text-white font-semibold rounded-xl transition-colors"
              >
                {actioning === app.business_user_id
                  ? <Loader2 className="w-4 h-4 animate-spin" />
                  : <XCircle className="w-4 h-4" />}
                Reject
              </button>
            </div>
          )}
          {app.status === 'approved' && (
            <div className="flex items-center justify-center gap-2 py-3 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-xl font-semibold">
              <CheckCircle className="w-4 h-4" /> Application Approved
            </div>
          )}
          {app.status === 'rejected' && (
            <div className="flex items-center justify-center gap-2 py-3 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded-xl font-semibold">
              <XCircle className="w-4 h-4" /> Application Rejected
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main content
// ─────────────────────────────────────────────────────────────────────────────
function getAdminToken(): string | null {
  try {
    const raw = localStorage.getItem('rakshaai_admin_auth');
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    // Redux auth stores { accessToken, user, timestamp }
    return parsed?.accessToken ?? null;
  } catch {
    return null;
  }
}

function BusinessApplicationsContent() {
  const [token, setToken] = useState<string | null>(null);
  const [tokenReady, setTokenReady] = useState(false);
  const [applications, setApplications] = useState<BusinessApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState('');
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'pending' | 'approved' | 'rejected'>('all');
  const [selectedApp, setSelectedApp] = useState<BusinessApplication | null>(null);
  const [actioning, setActioning] = useState<string | null>(null);
  const [actionError, setActionError] = useState('');

  // ── Read admin token from localStorage on mount ─────────────────────────────
  useEffect(() => {
    setToken(getAdminToken());
    setTokenReady(true);
  }, []);

  // ── Fetch from backend ──────────────────────────────────────────────────────
  const loadApplications = useCallback(async () => {
    if (!tokenReady) return;
    if (!token) {
      setFetchError('Admin session not found. Please log in again.');
      setLoading(false);
      return;
    }
    setLoading(true);
    setFetchError('');
    try {
      const res = await fetch('/api/admin/business-applications', {
        cache: 'no-store',
        headers: { 'Authorization': `Bearer ${token}` },
      });
      const data = await res.json();
      if (!res.ok) {
        setFetchError(data.error || 'Failed to load applications');
        return;
      }
      // Backend may return array directly, or wrapped in a key
      const raw: Record<string, unknown>[] = Array.isArray(data)
        ? data
        : data.results ?? data.data ?? data.businesses ?? [];
      const list: BusinessApplication[] = raw.map((item) => ({
        id: Number(item.id),
        business_user_id: String(item.business_user_id ?? ''),
        email: String(item.email ?? ''),
        website: String(item.website ?? ''),
        business_name: String(item.business_name ?? ''),
        product_name: String(item.product_name ?? ''),
        phone: String(item.phone ?? ''),
        business_info: Boolean(item.business_info),
        created_at: String(item.created_at ?? ''),
        status: normalizeStatus(item),
        ...item,
      } as BusinessApplication));
      setApplications(list);
    } catch {
      setFetchError('Network error. Could not reach the server.');
    } finally {
      setLoading(false);
    }
  }, [token, tokenReady]);

  useEffect(() => {
    loadApplications();
  }, [loadApplications]);

  // ── Approve / Reject ────────────────────────────────────────────
  const performAction = async (app: BusinessApplication, action: 'approve' | 'reject') => {
    const { business_user_id } = app;
    setActioning(business_user_id);
    setActionError('');
    const status = action === 'approve' ? true : false;
    try {
      const business_info = app.business_info;
      const res = await fetch(`/api/admin/business-applications/${business_user_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ business_user_id, action, "business_info":status }),
      });
      const data = await res.json();
      if (!res.ok) {
        setActionError(data.error || `Failed to ${action} application`);
        return;
      }
      // Optimistic local update
      const newStatus: BusinessApplication['status'] = action === 'approve' ? 'approved' : 'rejected';
      setApplications((prev) =>
        prev.map((a) => a.business_user_id === business_user_id ? { ...a, status: newStatus } : a)
      );
      // Refresh from server
      await loadApplications();
    } catch {
      setActionError('Network error. Please try again.');
    } finally {
      setActioning(null);
    }
  };

  const handleApprove = (app: BusinessApplication) => performAction(app, 'approve');
  const handleReject  = (app: BusinessApplication) => performAction(app, 'reject');

  // ── Filter ──────────────────────────────────────────────────────────────────
  const filtered = applications.filter((app) => {
    const q = search.toLowerCase();
    const matchesSearch =
      (app.business_name || '').toLowerCase().includes(q) ||
      app.email.toLowerCase().includes(q) ||
      app.website.toLowerCase().includes(q) ||
      app.business_user_id.toLowerCase().includes(q) ||
      (app.product_name || '').toLowerCase().includes(q);
    const matchesStatus = filterStatus === 'all' || app.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const counts = {
    all: applications.length,
    pending: applications.filter((a) => a.status === 'pending').length,
    approved: applications.filter((a) => a.status === 'approved').length,
    rejected: applications.filter((a) => a.status === 'rejected').length,
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <AdminSidebar currentPage="business-applications" />

      <div className="flex-1 flex flex-col overflow-hidden md:pl-60">
        <AdminNavbar currentPage="Business Applications" />

        <main className="flex-1 overflow-y-auto pt-14">
          <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto">

            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <Briefcase className="w-6 h-6 text-indigo-600" />
                  Business Applications
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Review and manage business onboarding requests
                </p>
              </div>
              <button
                onClick={loadApplications}
                disabled={loading}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                Refresh
              </button>
            </div>

            {/* Action error banner */}
            {actionError && (
              <div className="mb-4 flex items-center gap-2 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-sm text-red-700 dark:text-red-300">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                {actionError}
                <button onClick={() => setActionError('')} className="ml-auto text-xs underline">Dismiss</button>
              </div>
            )}

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              {(
                [
                  { key: 'all',      label: 'Total',    color: 'text-gray-700 dark:text-gray-200',       bg: 'bg-gray-100 dark:bg-gray-800' },
                  { key: 'pending',  label: 'Pending',  color: 'text-yellow-700 dark:text-yellow-300',   bg: 'bg-yellow-50 dark:bg-yellow-900/20' },
                  { key: 'approved', label: 'Approved', color: 'text-green-700 dark:text-green-300',     bg: 'bg-green-50 dark:bg-green-900/20' },
                  { key: 'rejected', label: 'Rejected', color: 'text-red-700 dark:text-red-300',         bg: 'bg-red-50 dark:bg-red-900/20' },
                ] as const
              ).map((stat) => (
                <div key={stat.key} className={`${stat.bg} rounded-xl p-4`}>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{counts[stat.key]}</p>
                  <p className={`text-sm font-medium ${stat.color}`}>{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-3 mb-5">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by name, email, URL, or ID..."
                  className="w-full pl-9 pr-4 py-2.5 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm"
                />
              </div>
              <div className="flex rounded-xl overflow-hidden border border-gray-200 dark:border-gray-600">
                {(['all', 'pending', 'approved', 'rejected'] as const).map((s) => (
                  <button
                    key={s}
                    onClick={() => setFilterStatus(s)}
                    className={`px-3 py-2 text-xs font-semibold capitalize transition-colors ${
                      filterStatus === s
                        ? 'bg-indigo-600 text-white'
                        : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Loading */}
            {loading && (
              <div className="flex items-center justify-center py-20 gap-3 text-gray-400">
                <Loader2 className="w-6 h-6 animate-spin" />
                <span className="text-sm">Loading applications…</span>
              </div>
            )}

            {/* Fetch error */}
            {!loading && fetchError && (
              <div className="flex flex-col items-center justify-center py-16 gap-3">
                <AlertCircle className="w-10 h-10 text-red-400" />
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{fetchError}</p>
                <button onClick={loadApplications} className="text-sm text-indigo-600 underline">
                  Try again
                </button>
              </div>
            )}

            {/* Empty */}
            {!loading && !fetchError && filtered.length === 0 && (
              <div className="text-center py-16">
                <Building2 className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-3" />
                <p className="text-gray-500 dark:text-gray-400 font-medium">No applications found</p>
                <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">
                  Business owner applications will appear here once submitted
                </p>
              </div>
            )}

            {/* Table */}
            {!loading && !fetchError && filtered.length > 0 && (
              <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                {/* Desktop */}
                <div className="hidden md:block overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Business</th>
                        <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Email</th>
                        <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Phone</th>
                        <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Business ID</th>
                        <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Status</th>
                        <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Registered</th>
                        <th className="text-right px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                      {filtered.map((app) => (
                        <tr key={app.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center flex-shrink-0">
                                <Building2 className="w-4 h-4 text-indigo-600" />
                              </div>
                              <div className="min-w-0">
                                <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                                  {app.business_name || app.email}
                                </p>
                                <p className="text-xs text-gray-400 truncate max-w-[180px]">{app.website}</p>
                                {app.product_name && (
                                  <span className="mt-1 inline-block text-xs bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 px-2 py-0.5 rounded-full">
                                    {app.product_name}
                                  </span>
                                )}
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300 max-w-[200px]">
                            <p className="truncate" title={app.email}>{app.email}</p>
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                            {app.phone || <span className="text-gray-300"></span>}
                          </td>
                          <td className="px-4 py-3">
                            <span className="text-xs font-mono text-gray-500 dark:text-gray-400">{app.business_user_id}</span>
                          </td>
                          <td className="px-4 py-3"><StatusBadge status={app.status} /></td>
                          <td className="px-4 py-3 text-xs text-gray-400">{fmt(app.created_at)}</td>
                          <td className="px-4 py-3">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                onClick={() => setSelectedApp(app)}
                                className="p-1.5 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                                title="View details"
                              >
                                <Eye className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                              </button>
                              {app.status !== 'approved' && app.status !== 'rejected' && (
                                <>
                                  <button
                                    onClick={() => handleApprove(app)}
                                    disabled={actioning === app.business_user_id}
                                    className="p-1.5 rounded-lg bg-green-100 dark:bg-green-900/30 hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors disabled:opacity-50"
                                    title="Approve"
                                  >
                                    {actioning === app.business_user_id
                                      ? <Loader2 className="w-4 h-4 text-green-600 animate-spin" />
                                      : <CheckCircle className="w-4 h-4 text-green-600" />}
                                  </button>
                                  <button
                                    onClick={() => handleReject(app)}
                                    disabled={actioning === app.business_user_id}
                                    className="p-1.5 rounded-lg bg-red-100 dark:bg-red-900/30 hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors disabled:opacity-50"
                                    title="Reject"
                                  >
                                    {actioning === app.business_user_id
                                      ? <Loader2 className="w-4 h-4 text-red-600 animate-spin" />
                                      : <XCircle className="w-4 h-4 text-red-600" />}
                                  </button>
                                </>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile cards */}
                <div className="md:hidden divide-y divide-gray-100 dark:divide-gray-700">
                  {filtered.map((app) => (
                    <div key={app.id} className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center flex-shrink-0">
                            <Building2 className="w-4 h-4 text-indigo-600" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-gray-900 dark:text-white">
                              {app.business_name || app.email}
                            </p>
                            <p className="text-xs font-mono text-gray-400">{app.business_user_id}</p>
                          </div>
                        </div>
                        <StatusBadge status={app.status} />
                      </div>
                      <p className="text-xs text-gray-500 mb-3 truncate">{app.website}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-400 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {fmt(app.created_at)}
                        </span>
                        <div className="flex gap-2">
                          <button onClick={() => setSelectedApp(app)} className="p-1.5 rounded-lg bg-gray-100 dark:bg-gray-700">
                            <Eye className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                          </button>
                          {app.status !== 'approved' && app.status !== 'rejected' && (
                            <>
                              <button
                                onClick={() => handleApprove(app)}
                                disabled={actioning === app.business_user_id}
                                className="p-1.5 rounded-lg bg-green-100 dark:bg-green-900/30 disabled:opacity-50"
                              >
                                {actioning === app.business_user_id
                                  ? <Loader2 className="w-4 h-4 text-green-600 animate-spin" />
                                  : <CheckCircle className="w-4 h-4 text-green-600" />}
                              </button>
                              <button
                                onClick={() => handleReject(app)}
                                disabled={actioning === app.business_user_id}
                                className="p-1.5 rounded-lg bg-red-100 dark:bg-red-900/30 disabled:opacity-50"
                              >
                                {actioning === app.business_user_id
                                  ? <Loader2 className="w-4 h-4 text-red-600 animate-spin" />
                                  : <XCircle className="w-4 h-4 text-red-600" />}
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Detail modal */}
      {selectedApp && (
        <ApplicationModal
          app={selectedApp}
          onClose={() => setSelectedApp(null)}
          onApprove={handleApprove}
          onReject={handleReject}
          actioning={actioning}
        />
      )}
    </div>
  );
}

export default function AdminBusinessApplicationsPage() {
  return (
    <AdminRouteGuard>
      <BusinessApplicationsContent />
    </AdminRouteGuard>
  );
}