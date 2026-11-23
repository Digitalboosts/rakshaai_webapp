type AnyRecord = Record<string, unknown>;

export type ReportIndexability = {
  index: boolean;
  reason: string;
  issues: string[];
};

export type ReportRobots = {
  index: boolean;
  follow: boolean;
};

export type WebsiteReportSeoStatus = {
  titleStatus: string;
  descriptionStatus: string;
};

export type WebsiteTrustLevel = {
  score: number;
  percent: number;
  label: 'High trust' | 'Medium trust' | 'Low trust';
  riskLabel: 'likely safe' | 'verify carefully' | 'risky or suspicious';
};

function asRecord(value: unknown): AnyRecord {
  return value && typeof value === 'object' ? (value as AnyRecord) : {};
}

function asString(value: unknown): string | null {
  return typeof value === 'string' && value.trim() ? value.trim() : null;
}

function asNumber(value: unknown): number | null {
  return typeof value === 'number' && Number.isFinite(value) ? value : null;
}

function hasKeys(value: unknown): boolean {
  return Object.keys(asRecord(value)).length > 0;
}

export function normalizeWebsiteReportDomain(reportData: unknown, fallbackSlug?: string): string | null {
  const report = asRecord(reportData);
  const urlDetails = asRecord(report.url_details);
  const domainInfo = asRecord(report.domain_info);

  const candidates = [
    urlDetails.complete_domain,
    domainInfo.domain,
    urlDetails.domain,
    fallbackSlug,
  ];

  for (const candidate of candidates) {
    const value = asString(candidate);
    if (!value) continue;

    try {
      const hostname = value.startsWith('http://') || value.startsWith('https://')
        ? new URL(value).hostname
        : value.split('/')[0];
      return hostname.replace(/^www\./, '').toLowerCase();
    } catch {
      return value.split('/')[0].replace(/^www\./, '').toLowerCase();
    }
  }

  return null;
}

export function isValidPublicDomain(domain: string | null): boolean {
  if (!domain) return false;
  if (domain.length > 253) return false;
  if (domain.includes('..')) return false;
  if (!domain.includes('.')) return false;
  if (/[\s_]/.test(domain)) return false;
  if (/^(localhost|127\.|10\.|172\.(1[6-9]|2\d|3[01])\.|192\.168\.)/.test(domain)) return false;
  return /^[a-z0-9.-]+$/i.test(domain);
}

export function getWebsiteReportScore(reportData: unknown): WebsiteTrustLevel | null {
  const report = asRecord(reportData);
  const percent =
    asNumber(report.overall_trust_percentage) ??
    asNumber(report.trust_percentage) ??
    (() => {
      const trustScore = asNumber(report.trust_score);
      if (trustScore === null) return null;
      return trustScore > 10 ? trustScore : trustScore * 10;
    })();

  if (percent === null) return null;

  const boundedPercent = Math.max(0, Math.min(100, percent));
  const normalizedScore = Math.round(boundedPercent / 10);

  if (boundedPercent >= 80) {
    return {
      score: normalizedScore,
      percent: Math.round(boundedPercent),
      label: 'High trust',
      riskLabel: 'likely safe',
    };
  }

  if (boundedPercent >= 50) {
    return {
      score: normalizedScore,
      percent: Math.round(boundedPercent),
      label: 'Medium trust',
      riskLabel: 'verify carefully',
    };
  }

  return {
    score: normalizedScore,
    percent: Math.round(boundedPercent),
    label: 'Low trust',
    riskLabel: 'risky or suspicious',
  };
}

export function getWebsiteReportUpdatedAt(reportData: unknown): Date | undefined {
  const report = asRecord(reportData);
  const domainInfo = asRecord(report.domain_info);
  const relatedReports = Array.isArray(report.related_scam_reports) ? report.related_scam_reports : [];

  const candidates = [
    report.updated_at,
    report.last_checked_at,
    report.checked_at,
    domainInfo.updated,
    ...relatedReports.flatMap((item) => {
      const record = asRecord(item);
      return [record.updated_at, record.created_at];
    }),
  ];

  for (const candidate of candidates) {
    const value = asString(candidate);
    if (!value) continue;
    const date = new Date(value);
    if (!Number.isNaN(date.getTime())) return date;
  }

  return undefined;
}

function hasScoreStatusConflict(reportData: unknown, trustLevel: WebsiteTrustLevel | null): boolean {
  if (!trustLevel) return true;

  const report = asRecord(reportData);
  const actionItems = asRecord(report.action_items);
  const riskLevel = asString(actionItems.risk_level)?.toLowerCase();
  const trustStatus = [
    asString(report.status),
    asString(report.risk_status),
    asString(report.final_status),
  ].filter(Boolean).join(' ').toLowerCase();

  if (riskLevel) {
    if (trustLevel.percent >= 80 && /(high|critical|danger|risky|unsafe)/.test(riskLevel)) return true;
    if (trustLevel.percent < 50 && /(low|safe|trusted|clean)/.test(riskLevel)) return true;
  }

  if (trustStatus) {
    if (trustLevel.percent >= 80 && /(danger|unsafe|malicious|scam|critical)/.test(trustStatus)) return true;
    if (trustLevel.percent < 50 && /(safe|trusted|clean|verified)/.test(trustStatus)) return true;
  }

  return false;
}

function hasBlockedCategory(reportData: unknown): boolean {
  const report = asRecord(reportData);
  const maliciousWebsite = asRecord(report.malicious_website);
  const categories = [
    ...Object.values(asRecord(maliciousWebsite.categories)),
    ...Object.values(asRecord(report.categories)),
  ].map((value) => String(value).toLowerCase());

  // TODO: Replace this basic category screen with backend-owned publication flags such as
  // `indexable`, `content_policy_status`, `adult_content`, and `spam_subject` when available.
  return categories.some((category) => /(adult|porn|gambling|weapon|drug|hate)/.test(category));
}

function countUsefulSignalGroups(reportData: unknown): number {
  const report = asRecord(reportData);
  const maliciousWebsite = asRecord(report.malicious_website);
  const safeBrowsing = asRecord(report.is_malware);
  const relatedReports = Array.isArray(report.related_scam_reports) ? report.related_scam_reports : [];
  const actionItems = asRecord(report.action_items);
  const websiteReviews = asRecord(report.website_reviews);
  const googleReviews = asRecord(report.google_reviews_data);

  const signalGroups = [
    Boolean(asString(report.summary)),
    hasKeys(report.domain_info) || hasKeys(report.url_details),
    hasKeys(report.ssl_info),
    hasKeys(maliciousWebsite) && maliciousWebsite.success !== false,
    Array.isArray(safeBrowsing.matches) && safeBrowsing.matches.length > 0,
    relatedReports.length > 0 || asNumber(report.total_number_of_reviews) !== null,
    hasKeys(actionItems) && (Array.isArray(actionItems.reasons) || Array.isArray(actionItems.can_do)),
    hasKeys(websiteReviews) || hasKeys(googleReviews),
    hasKeys(report.fb_page_info),
    hasKeys(report.registered_business),
  ];

  return signalGroups.filter(Boolean).length;
}

function looksLikeFallbackReport(reportData: unknown): boolean {
  const report = asRecord(reportData);
  const summary = asString(report.summary) || '';
  const found = report.found;
  const signalCount = countUsefulSignalGroups(reportData);

  return found === false || (signalCount <= 1 && /no data|not available|unknown|fallback/i.test(summary));
}

export function shouldIndexWebsiteReport(
  reportData: unknown,
  fallbackSlug?: string,
  options?: { isSitemapReady?: boolean },
): ReportIndexability {
  const issues: string[] = [];
  const report = asRecord(reportData);
  const domain = normalizeWebsiteReportDomain(reportData, fallbackSlug);
  const trustLevel = getWebsiteReportScore(reportData);
  const signalCount = countUsefulSignalGroups(reportData);

  if (options?.isSitemapReady === false) issues.push('backend_is_sitemap_ready_false');
  if (!reportData || Object.keys(report).length === 0) issues.push('missing_report_data');
  if (report.detected_type === 'upi' || report.detected_type === 'phone') issues.push('not_a_website_report');
  if (!isValidPublicDomain(domain)) issues.push('invalid_or_missing_domain');
  if (!trustLevel) issues.push('missing_numeric_trust_score');
  if (hasScoreStatusConflict(reportData, trustLevel)) issues.push('score_status_conflict');
  if (looksLikeFallbackReport(reportData)) issues.push('fallback_or_empty_report');
  if (signalCount < 3) issues.push('insufficient_unique_signal_groups');
  if (hasBlockedCategory(reportData)) issues.push('blocked_or_sensitive_category');

  if (issues.length > 0) {
    return {
      index: false,
      reason: `Report is noindex because: ${issues.join(', ')}`,
      issues,
    };
  }

  return {
    index: true,
    reason: 'Report has a valid domain, numeric trust score, consistent status, and enough unique visible signal groups.',
    issues: [],
  };
}

export function getWebsiteReportRobots(reportData: unknown, fallbackSlug?: string): ReportRobots {
  return {
    index: shouldIndexWebsiteReport(reportData, fallbackSlug).index,
    follow: true,
  };
}

export function getWebsiteReportSeoStatus(reportData: unknown): WebsiteReportSeoStatus {
  const trustLevel = getWebsiteReportScore(reportData);

  if (!trustLevel) {
    return {
      titleStatus: 'Website Safety Check',
      descriptionStatus: 'risk signals',
    };
  }

  if (trustLevel.percent >= 80) {
    return {
      titleStatus: 'Website Safety Check',
      descriptionStatus: 'trust score, positive safety signals, scam indicators, and user guidance',
    };
  }

  if (trustLevel.percent >= 50) {
    return {
      titleStatus: 'Website Safety Review',
      descriptionStatus: 'medium-risk signals, trust score, scam indicators, and verification guidance',
    };
  }

  return {
    titleStatus: 'Safe or Fake?',
    descriptionStatus: 'low trust score, red flags, scam indicators, and safety guidance',
  };
}
