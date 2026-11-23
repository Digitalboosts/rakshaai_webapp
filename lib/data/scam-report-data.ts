import 'server-only';

import type { CommunityScamReport, ScamReportKind, ScamReportPageData } from '@/types/scam-report';

const BACKEND_BASE_URL =
  process.env.NEXT_PUBLIC_BACKEND_API_URL ||
  process.env.NEXT_PUBLIC_BACKEND_API_WITHOUT_VERSION ||
  process.env.BACKEND_API_URL ||
  '';

const API_KEY =
  process.env.TRUSTFINDER_API_KEY ||
  process.env.BACKEND_API_KEY ||
  process.env.API_SECRET_KEY ||
  '';

function getBackendUrl(slug: string) {
  const baseUrl = BACKEND_BASE_URL.replace(/^['"]+|['"]+$/g, '').replace(/\/?$/, '/');
  return `${baseUrl}trust/?slug=${encodeURIComponent(slug)}`;
}

function asRecord(value: unknown): Record<string, unknown> {
  return value && typeof value === 'object' ? (value as Record<string, unknown>) : {};
}

function normalizeReports(value: unknown): CommunityScamReport[] {
  if (!Array.isArray(value)) return [];

  return value
    .filter((report): report is Record<string, unknown> => !!report && typeof report === 'object')
    .map((report, index) => ({
      id: String(report.id ?? report.slug ?? report.created_at ?? index),
      name: String(report.name ?? 'Community reporter'),
      review: String(report.review ?? ''),
      created_at: String(report.created_at ?? new Date().toISOString()),
      updated_at: report.updated_at ? String(report.updated_at) : undefined,
      status: report.status ? String(report.status) : undefined,
      attachment: report.attachment ? String(report.attachment) : null,
      slug: report.slug ? String(report.slug) : undefined,
      scammer_phone_number: report.scammer_phone_number ? String(report.scammer_phone_number) : undefined,
      phone_number: report.phone_number ? String(report.phone_number) : undefined,
      upi_id: report.upi_id ? String(report.upi_id) : undefined,
      is_resolved: Boolean(report.is_resolved),
      resolution_details: report.resolution_details ? String(report.resolution_details) : null,
      resolved_at: report.resolved_at ? String(report.resolved_at) : null,
    }));
}

function normalizeReportData(raw: Record<string, unknown>, slug: string, expectedKind: ScamReportKind): ScamReportPageData | null {
  const data = asRecord(raw.data);
  const detectedType = String(raw.detected_type ?? data.detected_type ?? expectedKind);
  if (detectedType !== expectedKind) return null;

  const reports = normalizeReports(raw.reports ?? data.reports ?? data.related_scam_reports);
  const value =
    expectedKind === 'phone'
      ? String(raw.phone_number ?? data.phone_number ?? reports[0]?.scammer_phone_number ?? reports[0]?.phone_number ?? slug)
      : String(raw.upi_id ?? data.upi_id ?? reports[0]?.upi_id ?? slug);

  const totalReports = Number(raw.total_reports ?? data.total_reports ?? reports.length);
  const updatedAt =
    reports
      .map((report) => report.updated_at || report.created_at)
      .filter(Boolean)
      .sort()
      .at(-1) || undefined;

  return {
    kind: expectedKind,
    slug: String(raw.slug ?? data.slug ?? slug),
    value,
    found: Boolean(raw.found ?? data.found ?? totalReports > 0),
    totalReports,
    reports,
    updatedAt,
  };
}

export async function getScamReportBySlug(slug: string, expectedKind: ScamReportKind): Promise<ScamReportPageData | null> {
  if (!slug || !BACKEND_BASE_URL) return null;

  try {
    const headers: Record<string, string> = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    if (API_KEY) {
      headers['x-api-key'] = API_KEY.replace(/^['"]+|['"]+$/g, '');
    }

    const response = await fetch(getBackendUrl(slug), {
      method: 'GET',
      headers,
      next: { revalidate: 300 },
    });

    if (!response.ok) return null;

    const raw = await response.json();
    if (!raw || typeof raw !== 'object') return null;

    return normalizeReportData(raw as Record<string, unknown>, slug, expectedKind);
  } catch (error) {
    console.error(`Failed to fetch ${expectedKind} report for ${slug}:`, error);
    return null;
  }
}

export const getPhoneReportBySlug = (slug: string) => getScamReportBySlug(slug, 'phone');

export const getUpiReportBySlug = (slug: string) => getScamReportBySlug(slug, 'upi');
