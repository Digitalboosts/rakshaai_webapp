import type { ScamReportKind, ScamReportPageData, CommunityScamReport } from '@/types/scam-report';

// ─── Public types ─────────────────────────────────────────────────────────────

export type IdentifierReportIndexability = {
  index: boolean;
  follow: boolean;
  reason: string;
  issues: string[];
  maskedIdentifier: string;
};

// ─── Identifier masking ───────────────────────────────────────────────────────

/**
 * Masks sensitive identifiers for use in metadata and schema on noindex pages.
 *
 * Phone: +91 98765 43210 → +91 98765 XXXXX
 *   Raw 10-digit:  9876543210 → 98765XXXXX
 *   With country:  +919876543210 → +91 98765 XXXXX
 *
 * UPI: name@okaxis → na**@okaxis
 *   Mask local part (before @) keeping first two chars; keep VPA suffix.
 *   If no @ present, mask last half of the string.
 */
export function maskIdentifier(value: string, type: ScamReportKind): string {
  if (!value || typeof value !== 'string') return '****';

  const trimmed = value.trim();

  if (type === 'phone') {
    // Strip non-digit prefix for matching
    const digits = trimmed.replace(/\D/g, '');

    // India 10-digit mobile: keep first 5, mask last 5
    if (digits.length === 10) {
      return digits.slice(0, 5) + 'XXXXX';
    }
    // With country code 91 (12 digits total)
    if (digits.length === 12 && digits.startsWith('91')) {
      return '+91 ' + digits.slice(2, 7) + ' XXXXX';
    }
    // International: keep country code + first 4, mask remainder
    if (digits.length >= 8) {
      const keepLen = Math.ceil(digits.length / 2);
      return digits.slice(0, keepLen) + 'X'.repeat(digits.length - keepLen);
    }
    return trimmed.slice(0, 2) + '****';
  }

  if (type === 'upi') {
    const atIdx = trimmed.indexOf('@');
    if (atIdx > 0) {
      const local = trimmed.slice(0, atIdx);
      const vpa = trimmed.slice(atIdx); // includes '@'
      const keepLen = Math.min(2, local.length);
      const masked = local.slice(0, keepLen) + '*'.repeat(Math.max(0, local.length - keepLen));
      return masked + vpa;
    }
    // No @  mask second half
    const keepLen = Math.ceil(trimmed.length / 2);
    return trimmed.slice(0, keepLen) + '*'.repeat(trimmed.length - keepLen);
  }

  return '****';
}

// ─── Internal helpers ─────────────────────────────────────────────────────────

function countApprovedReports(reports: CommunityScamReport[]): number {
  return reports.filter((r) => {
    const status = (r.status || '').toLowerCase();
    // Treat as approved when status is explicitly 'approved', 'active',
    // or omitted/empty (legacy backend that doesn't emit a status field).
    // Explicitly exclude pending-only and rejected.
    return status === 'approved' || status === 'active' || status === 'verified' ||
           (!status || status === '');
  }).length;
}

function countRejectedReports(reports: CommunityScamReport[]): number {
  return reports.filter((r) => (r.status || '').toLowerCase() === 'rejected').length;
}

function countPendingReports(reports: CommunityScamReport[]): number {
  return reports.filter((r) => (r.status || '').toLowerCase() === 'pending').length;
}

function hasRecentReport(reports: CommunityScamReport[]): boolean {
  const threeYearsAgo = Date.now() - 3 * 365 * 24 * 60 * 60 * 1000;
  return reports.some((r) => {
    const ts = Date.parse(r.updated_at || r.created_at);
    return !Number.isNaN(ts) && ts > threeYearsAgo;
  });
}

function hasEvidenceAttachment(reports: CommunityScamReport[]): boolean {
  return reports.some((r) => !!r.attachment);
}

function isValidPhoneSlug(slug: string): boolean {
  if (!slug) return false;
  const digits = slug.replace(/\D/g, '');
  // Accept 7–15 digit numbers (covers Indian mobile + international with country code)
  return digits.length >= 7 && digits.length <= 15;
}

function isValidUpiSlug(slug: string): boolean {
  if (!slug) return false;
  const trimmed = slug.trim();
  // A valid UPI VPA must contain exactly one '@' with non-empty local part and VPA suffix
  const atIdx = trimmed.indexOf('@');
  if (atIdx < 1) return false;
  const vpa = trimmed.slice(atIdx + 1);
  return vpa.length >= 2;
}

// ─── Main indexability gate ───────────────────────────────────────────────────

/**
 * Determines whether a phone or UPI identifier report page should be indexed.
 *
 * Index requirements (ALL must pass):
 *   1. Slug is a valid phone number / UPI VPA format.
 *   2. Backend returned data (not null/empty).
 *   3. `found` is true AND totalReports >= 1.
 *   4. At least one approved (or legacy unmoderated) report exists.
 *   5. Not all reports are pending-only.
 *   6. Not all reports are rejected.
 *   7. At least one report is dated within the last 3 years (freshness gate).
 *
 * The maskedIdentifier field is always populated and safe for metadata/schema.
 */
export function shouldIndexIdentifierReport(
  data: ScamReportPageData | null,
  type: ScamReportKind,
  slug?: string,
): IdentifierReportIndexability {
  const issues: string[] = [];
  const fallbackSlug = slug || '';
  const identifierValue = data?.value || fallbackSlug;
  const maskedIdentifier = maskIdentifier(identifierValue, type);

  // Gate 1: valid slug format
  if (type === 'phone' && !isValidPhoneSlug(fallbackSlug)) {
    issues.push('invalid_phone_slug_format');
  }
  if (type === 'upi' && !isValidUpiSlug(fallbackSlug)) {
    issues.push('invalid_upi_slug_format');
  }

  // Gate 2: backend returned data
  if (!data) {
    issues.push('no_backend_data');
    return {
      index: false,
      follow: true,
      reason: 'No backend data returned for this identifier.',
      issues,
      maskedIdentifier,
    };
  }

  // Gate 3: found + reports exist
  if (!data.found || data.totalReports < 1) {
    issues.push('no_reports_found');
  }

  const reports = data.reports || [];

  // Gate 4: approved reports exist
  const approvedCount = countApprovedReports(reports);
  if (data.totalReports >= 1 && approvedCount === 0) {
    issues.push('no_approved_reports');
  }

  // Gate 5: not pending-only
  const pendingCount = countPendingReports(reports);
  if (data.totalReports >= 1 && pendingCount > 0 && approvedCount === 0) {
    issues.push('pending_only_reports');
  }

  // Gate 6: not all rejected
  const rejectedCount = countRejectedReports(reports);
  if (reports.length > 0 && rejectedCount === reports.length) {
    issues.push('all_reports_rejected');
  }

  // Gate 7: freshness
  if (data.totalReports >= 1 && reports.length > 0 && !hasRecentReport(reports)) {
    issues.push('no_recent_reports_within_3_years');
  }

  if (issues.length > 0) {
    return {
      index: false,
      follow: true,
      reason: 'Report does not meet indexability requirements: ' + issues.join(', '),
      issues,
      maskedIdentifier,
    };
  }

  return {
    index: true,
    follow: true,
    reason:
      'Report has found=true, at least one approved report, and at least one recent report within 3 years.',
    issues: [],
    maskedIdentifier,
  };
}

// ─── Metadata text helpers ────────────────────────────────────────────────────

/**
 * Returns a safe <title> string for a phone/UPI report page.
 * Uses masked identifier when the page is noindex or data is weak.
 * Uses full identifier only for indexable pages with confirmed reports.
 */
export function getIdentifierReportTitle(
  data: ScamReportPageData | null,
  type: ScamReportKind,
  slug?: string,
): string {
  const fallbackSlug = slug || '';
  const indexability = shouldIndexIdentifierReport(data, type, fallbackSlug);
  const displayValue = indexability.index ? (data?.value || fallbackSlug) : indexability.maskedIdentifier;

  if (!data || !data.found) {
    if (type === 'phone') {
      return 'Phone Number Security Report';
    }
    return 'UPI ID Security Report';
  }

  const count = data.totalReports;
  if (type === 'phone') {
    return count > 0
      ? `${displayValue} - ${count} Scam Report${count !== 1 ? 's' : ''} | Phone Fraud Check`
      : `${displayValue} - Phone Number Report`;
  }

  return count > 0
    ? `${displayValue} - ${count} Scam Report${count !== 1 ? 's' : ''} | UPI Fraud Check`
    : `${displayValue} - UPI ID Report`;
}

/**
 * Returns a safe <meta name="description"> string for a phone/UPI report page.
 * Uses masked identifier when noindex to avoid exposing raw identifiers in
 * Google's index for weak or no-report pages.
 */
export function getIdentifierReportDescription(
  data: ScamReportPageData | null,
  type: ScamReportKind,
  slug?: string,
): string {
  const fallbackSlug = slug || '';
  const indexability = shouldIndexIdentifierReport(data, type, fallbackSlug);
  const displayValue = indexability.index ? (data?.value || fallbackSlug) : indexability.maskedIdentifier;
  const label = type === 'phone' ? 'phone number' : 'UPI ID';

  if (!data || !data.found || data.totalReports === 0) {
    return (
      `No scam reports found for this ${label} in the RakshaAI database. ` +
      'Absence of reports is not a guarantee of safety  always verify before transacting. ' +
      'India cybercrime helpline: 1930.'
    );
  }

  const count = data.totalReports;
  return (
    `${count} community scam report${count !== 1 ? 's' : ''} found for ${displayValue}. ` +
    `Check RakshaAI fraud signals, report details, and India cybercrime guidance before engaging. ` +
    'Call 1930 if money was already sent.'
  );
}
