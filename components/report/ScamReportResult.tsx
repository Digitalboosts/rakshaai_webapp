"use client";

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import {
  AlertTriangle,
  ArrowLeft,
  CreditCard,
  FileText,
  Phone,
  RotateCcw,
  Shield,
  Users,
} from 'lucide-react';
import ReviewCTASection from '@/components/ReviewCTASection';
import AppStoreButtons from '@/components/AppStoreButtons';
import type { CommunityScamReport, ScamReportKind, ScamReportPageData } from '@/types/scam-report';

interface ScamReportResultProps {
  initialData: ScamReportPageData | null;
  kind: ScamReportKind;
  storageKey: string;
  checkerHref: string;
  slug: string;
}

function asRecord(value: unknown): Record<string, unknown> {
  return value && typeof value === 'object' ? (value as Record<string, unknown>) : {};
}

function formatDate(dateString?: string) {
  if (!dateString) return 'Recently reported';

  const timestamp = Date.parse(dateString);
  if (Number.isNaN(timestamp)) return 'Recently reported';

  return new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Asia/Kolkata',
  }).format(new Date(timestamp));
}

function getStatusColor(status?: string) {
  switch ((status || '').toLowerCase()) {
    case 'pending':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-200';
    case 'resolved':
      return 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-200';
    case 'rejected':
      return 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-200';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
  }
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
      status: report.status ? String(report.status) : 'pending',
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

function normalizeStoredReport(raw: unknown, kind: ScamReportKind, slug: string): ScamReportPageData | null {
  const root = asRecord(raw);
  const data = asRecord(root.data);
  const reports = normalizeReports(root.reports ?? data.reports ?? data.related_scam_reports);
  const value =
    kind === 'phone'
      ? String(root.phone_number ?? data.phone_number ?? reports[0]?.scammer_phone_number ?? reports[0]?.phone_number ?? '')
      : String(root.upi_id ?? data.upi_id ?? reports[0]?.upi_id ?? '');

  if (!value) return null;

  const totalReports = Number(root.total_reports ?? data.total_reports ?? reports.length);
  const updatedAt =
    reports
      .map((report) => report.updated_at || report.created_at)
      .filter(Boolean)
      .sort()
      .at(-1) || undefined;

  return {
    kind,
    slug: String(root.slug ?? data.slug ?? slug),
    value,
    found: Boolean(root.found ?? data.found ?? totalReports > 0),
    totalReports,
    reports,
    updatedAt,
  };
}

export default function ScamReportResult({
  initialData,
  kind,
  storageKey,
  checkerHref,
  slug,
}: ScamReportResultProps) {
  const [data, setData] = useState<ScamReportPageData | null>(initialData);
  const [hydrated, setHydrated] = useState(Boolean(initialData));

  useEffect(() => {
    if (initialData) {
      setHydrated(true);
      return;
    }

    try {
      const stored = window.localStorage.getItem(storageKey);
      setData(stored ? normalizeStoredReport(JSON.parse(stored), kind, slug) : null);
    } catch {
      setData(null);
    } finally {
      setHydrated(true);
    }
  }, [initialData, kind, slug, storageKey]);

  const pageCopy = useMemo(() => {
    const isPhone = kind === 'phone';

    return {
      label: isPhone ? 'Phone Number' : 'UPI ID',
      lowerLabel: isPhone ? 'phone number' : 'UPI ID',
      title: isPhone ? 'RakshaAI Phone Number Security Report' : 'RakshaAI UPI ID Security Report',
      checkerText: isPhone ? 'Check another phone number' : 'Check another UPI ID',
      notFoundText: isPhone ? 'No phone report data found.' : 'No UPI report data found.',
      Icon: isPhone ? Phone : CreditCard,
      ...(isPhone
        ? {
            soft: 'bg-purple-100 dark:bg-purple-900/40',
            text: 'text-purple-700 dark:text-purple-200',
            valueBox: 'bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800',
            valueText: 'text-blue-900 dark:text-blue-100',
            reportBadge: 'bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200',
          }
        : {
            soft: 'bg-indigo-100 dark:bg-indigo-900/40',
            text: 'text-indigo-700 dark:text-indigo-200',
            valueBox: 'bg-indigo-50 dark:bg-indigo-950/40 border-indigo-200 dark:border-indigo-800',
            valueText: 'text-indigo-900 dark:text-indigo-100',
            reportBadge: 'bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-200',
          }),
    };
  }, [kind]);

  const Icon = pageCopy.Icon;

  if (!hydrated && !data) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950" aria-busy="true">
        <div className="animate-spin w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full" />
      </main>
    );
  }

  if (!data) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center gap-4 bg-gray-50 dark:bg-gray-950 px-4 text-center">
        <p className="text-gray-700 dark:text-gray-200 text-lg">{pageCopy.notFoundText}</p>
        <Link href={checkerHref} className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
          Start a new check
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-3 py-5 sm:px-4 sm:py-8">
        <nav className="mb-6" aria-label="Report actions">
          <div className="w-full flex flex-col min-[420px]:flex-row min-[420px]:items-center justify-between p-2 sm:p-4 rounded-xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 shadow-sm gap-2">
            <Link
              href={checkerHref}
              className="flex w-full min-[420px]:w-auto items-center justify-center min-[420px]:justify-start gap-2 px-2 sm:px-4 py-2 sm:py-2.5 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600 hover:bg-gray-100/80 dark:hover:bg-gray-800/80 transition-all duration-200 group shadow-sm hover:shadow-md flex-shrink-0 text-xs sm:text-sm"
            >
              <ArrowLeft className="h-4 w-4 text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" aria-hidden="true" />
              <span className="font-medium text-gray-600 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                Go Back
              </span>
            </Link>

            <Link
              href={checkerHref}
              className="flex w-full min-[420px]:w-auto items-center justify-center gap-2 px-2 sm:px-5 py-2 sm:py-2.5 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white text-xs sm:text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md group flex-shrink-0"
            >
              <RotateCcw className="h-4 w-4 group-hover:rotate-180 transition-transform duration-300" aria-hidden="true" />
              <span>{pageCopy.checkerText}</span>
            </Link>
          </div>
        </nav>

        <article>
          <header className="bg-white dark:bg-gray-900 rounded-lg shadow-lg shadow-gray-200/70 dark:shadow-black/30 border border-gray-100 dark:border-gray-800 p-4 sm:p-6 lg:p-8 mb-8">
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
              <div className={`${pageCopy.soft} ${pageCopy.text} p-3 rounded-lg`} aria-hidden="true">
                <Shield className="h-7 w-7" />
              </div>
              <div className="flex-1">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                  {pageCopy.title}
                </h1>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800/60 rounded-lg p-4" role="note">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <p className="text-yellow-800 dark:text-yellow-200 font-medium">Safety disclaimer</p>
                      <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                        This report combines AI analysis and community signals. Always verify independently before sending money, sharing OTPs, or granting access.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <section aria-labelledby="reported-value-heading">
                <h2 id="reported-value-heading" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Analyzing {pageCopy.label}
                </h2>
                <div className={`flex items-start sm:items-center gap-2 p-3 border rounded-lg ${pageCopy.valueBox}`}>
                  <Icon className="h-5 w-5 flex-shrink-0 text-current" aria-hidden="true" />
                  <span className={`font-mono text-base sm:text-lg break-all min-w-0 ${pageCopy.valueText}`}>{data.value}</span>
                </div>
              </section>

              <section aria-labelledby="security-summary-heading">
                <h2 id="security-summary-heading" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Security Summary
                </h2>
                <div className={`p-3 rounded-lg ${data.found ? 'bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800' : 'bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700'}`}>
                  <div className={`flex items-center gap-2 font-medium text-sm sm:text-base ${data.found ? 'text-red-900 dark:text-red-100' : 'text-gray-700 dark:text-gray-200'}`}>
                    {data.found ? (
                      <AlertTriangle className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                    ) : (
                      <Shield className="h-5 w-5 flex-shrink-0 text-gray-400 dark:text-gray-500" aria-hidden="true" />
                    )}
                    <span>
                      {data.found
                        ? `${data.totalReports} scam report${data.totalReports !== 1 ? 's' : ''} found`
                        : 'No matching reports in the RakshaAI database'}
                    </span>
                  </div>
                  {!data.found && (
                    <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                      No reports found does not mean this {kind === 'phone' ? 'number' : 'UPI ID'} is safe. New scam identifiers appear daily. Verify independently before sending money or sharing details.
                    </p>
                  )}
                </div>
              </section>
            </div>

            <section className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 rounded-lg" aria-labelledby="emergency-guidance-heading">
              <div className="flex items-start gap-3">
                <FileText className="h-5 w-5 text-blue-600 dark:text-blue-300 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div className="text-blue-800 dark:text-blue-200">
                  <h2 id="emergency-guidance-heading" className="font-medium mb-1">India cybercrime guidance</h2>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    If you lost money or shared sensitive information, call 1930 immediately and file a complaint at cybercrime.gov.in. Report quickly for the best chance of blocking transactions.
                  </p>
                </div>
              </div>
            </section>
          </header>

          <section
            id="community-reports"
            aria-labelledby="community-reports-heading"
            className="bg-white dark:bg-gray-900 rounded-lg shadow-lg shadow-gray-200/70 dark:shadow-black/30 border border-gray-100 dark:border-gray-800 p-4 sm:p-6 lg:p-8 mb-8"
          >
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className={pageCopy.reportBadge.includes('red') ? 'bg-red-100 dark:bg-red-900/40 p-2 rounded-full' : 'bg-blue-100 dark:bg-blue-900/40 p-2 rounded-full'} aria-hidden="true">
                <Users className="h-5 w-5 text-current" />
              </div>
              <h2 id="community-reports-heading" className="text-xl font-bold text-gray-900 dark:text-white">
                Community Reports ({data.totalReports})
              </h2>
              <span className={`${pageCopy.reportBadge} px-2 py-1 rounded text-sm`}>
                {data.totalReports} user report{data.totalReports !== 1 ? 's' : ''} found
              </span>
            </div>

            {data.updatedAt && (
              <p className="mb-4 text-xs text-gray-500 dark:text-gray-400">
                Last report activity: <time dateTime={data.updatedAt}>{formatDate(data.updatedAt)}</time>
              </p>
            )}

            {data.reports.length > 0 ? (
              <div className="space-y-6">
                {data.reports.map((report) => (
                  <section key={report.id} className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 sm:p-6 bg-gray-50 dark:bg-gray-950/60" aria-label={`${pageCopy.label} community report`}>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-8 h-8 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
                          <span className="text-green-700 dark:text-green-300 font-medium text-sm">
                            {(report.name || 'R').charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-semibold text-gray-900 dark:text-white break-words">{report.name}</h3>
                          <div className="flex flex-wrap items-center gap-2 mt-1">
                            <span className={`${pageCopy.reportBadge} px-2 py-0.5 rounded text-xs`}>
                              {kind === 'phone' ? 'PHONE REPORT' : 'UPI SCAM REPORT'}
                            </span>
                            <time className="text-gray-500 dark:text-gray-400 text-xs" dateTime={report.created_at}>
                              {formatDate(report.created_at)}
                            </time>
                          </div>
                        </div>
                      </div>
                      <span className={`self-start px-2 py-1 rounded text-xs ${getStatusColor(report.status)}`}>
                        {(report.status || 'pending').toUpperCase()}
                      </span>
                    </div>

                    {report.review && (
                      <blockquote className="bg-white dark:bg-gray-900 border-l-4 border-gray-300 dark:border-gray-700 p-4 mb-4">
                        <p className="text-gray-700 dark:text-gray-300 italic break-words">{report.review}</p>
                      </blockquote>
                    )}

                    {report.attachment && (
                      <div className="mt-4">
                        <p className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Evidence attachment</p>
                        <a
                          href={report.attachment}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3 py-2 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors text-sm text-blue-700 dark:text-blue-200"
                        >
                          <FileText className="h-4 w-4" aria-hidden="true" />
                          View evidence
                        </a>
                      </div>
                    )}

                    {report.is_resolved && report.resolution_details && (
                      <div className="mt-4 p-3 bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-800 rounded-lg">
                        <p className="text-green-800 dark:text-green-200 font-medium text-sm">Resolution</p>
                        <p className="text-green-700 dark:text-green-300 text-sm mt-1 break-words">{report.resolution_details}</p>
                        {report.resolved_at && (
                          <p className="text-green-600 dark:text-green-400 text-xs mt-1">
                            Resolved on {formatDate(report.resolved_at)}
                          </p>
                        )}
                      </div>
                    )}
                  </section>
                ))}
              </div>
            ) : (
              <p className="text-gray-600 dark:text-gray-300">
                RakshaAI has not found community reports for this {pageCopy.lowerLabel}. Continue to verify payment requests, unknown links, and caller identity before taking action.
              </p>
            )}

            <div className="no-print mt-6">
              <ReviewCTASection variant="result" websiteUrl={data.value} />
            </div>
          </section>

          <section aria-labelledby="next-steps-heading" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg shadow-gray-200/70 dark:shadow-black/30 border border-gray-100 dark:border-gray-800 p-5 sm:p-6 text-center">
              <h2 id="next-steps-heading" className="font-bold text-gray-900 dark:text-white mb-2">Need More Information?</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                Check another {pageCopy.lowerLabel} or report new scam evidence to help protect other users.
              </p>
              <Link
                href={checkerHref}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-200"
              >
                <RotateCcw className="h-4 w-4" aria-hidden="true" />
                {pageCopy.checkerText}
              </Link>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg shadow-gray-200/70 dark:shadow-black/30 border border-gray-100 dark:border-gray-800 p-5 sm:p-6">
              <h2 className="font-bold text-gray-900 dark:text-white mb-2">Use RakshaAI on mobile</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                Install RakshaAI to check suspicious websites, UPI IDs, and phone numbers when a transaction or message looks risky.
              </p>
              <AppStoreButtons compact />
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
