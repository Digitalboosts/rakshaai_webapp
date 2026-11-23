import Link from "next/link";
import ReactMarkdown from "react-markdown";
import ShareButton from "@/components/ShareButton";
import ReportScamButton from "@/components/ReportScamButton";
import ReviewCTASection from "@/components/ReviewCTASection";
import ActionButtonsClient from "@/components/ActionButtonsClient";
import ActionItemsServer from "./ActionItemsServer";
import DomainInformation from "./DomainInformation";
import SSLCertificate from "./SSLCertificate";
import FAQSection from "./FAQSection";
import GoogleMapReviews from "./GoogleMapReviews";
import OnlineReviewsAcrossWeb from "./OnlineReviewsAcrossWeb";
import FacebookPageCardServer from "./FacebookPageCardServer";
import RelatedScamReportsServer from "./RelatedScamReportsServer";
import RegisteredBusinessServer from "./RegisteredBusinessServer";
import MaliciousWebsiteCheck from "./MaliciousWebsiteCheck";
import AnimatedScoreBar from "./AnimatedScoreBar";
import GoogleSafeBrowsing from "./GoogleSafeBrowsing";
import WebsiteAge from "./WebsiteAge";
import URLStructure from "./URLStructure";
import { getWebsiteReportScore } from "@/lib/seo/report-indexability";
import {
  timeAgo,
  getVerdictConfig,
  getDomainAge,
  getSSLStatus,
  getRiskSignalCount,
  getScoreBreakdownItems,
} from "@/lib/website-trust-report";

export interface WebsiteTrustReportBodyProps {
  reportData: any;
  domain: string;
  slug?: string;
  createdAt?: string;
  updatedAt?: string;
  totalCount?: number;
  registeredBusiness?: any;
  analyzedUrl?: string;
  pageTitle?: string;
  emitFaqSchema?: boolean;
  showReviewCta?: boolean;
  showActionButtons?: boolean;
}

/**
 * The full website trust report body (hero, evidence strip, and the detailed
 * report article). Shared between the SEO-indexed /check/[slug] page (server
 * component, fetched by slug) and the document-checker result page (client
 * component, hydrated from a one-shot API response) so both surfaces render
 * an identical report from the same reportData shape.
 */
export default function WebsiteTrustReportBody({
  reportData,
  domain,
  slug,
  createdAt,
  updatedAt,
  totalCount,
  registeredBusiness,
  analyzedUrl,
  pageTitle,
  emitFaqSchema = false,
  showReviewCta = true,
  showActionButtons = true,
}: WebsiteTrustReportBodyProps) {
  const trustLevel = getWebsiteReportScore(reportData);
  const verdictConfig = getVerdictConfig(trustLevel);
  const percent = trustLevel?.percent ?? 0;
  const score10 = Math.round(percent / 10);
  const gaugePercent = score10 * 10;
  const sslStatus = getSSLStatus(reportData);
  const domainAgeStr = getDomainAge(reportData);
  const riskSignals = getRiskSignalCount(reportData);
  const breakdownItems = getScoreBreakdownItems(reportData);
  const resolvedAnalyzedUrl = analyzedUrl || reportData?.url_details?.complete_domain || domain;
  const resolvedTitle = pageTitle || `Is ${domain} Safe? Website Review, Trust Score & Scam Check | RakshaAI`;

  return (
    <>
      {/* ═══════════════════════════════════════════════════
          HERO  Distinct trust command panel
      ═══════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-slate-50 dark:bg-gray-950">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent dark:from-gray-900" />
          <div
            className="absolute -right-28 top-10 h-72 w-72 rounded-full blur-3xl opacity-30"
            style={{ backgroundColor: verdictConfig.color }}
          />
          <div className="absolute left-0 top-0 h-full w-full opacity-[0.38] dark:opacity-[0.18] bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:44px_44px]" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-50 to-transparent dark:from-gray-950" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-6 lg:gap-10 items-stretch">
            <div className="rounded-3xl bg-white/90 dark:bg-gray-900/75 border border-white dark:border-gray-800 shadow-xl shadow-slate-200/60 dark:shadow-black/20 p-6 sm:p-8 lg:p-10">
              <div className="flex flex-wrap items-center gap-3 mb-7">
                <span
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em]"
                  style={{
                    color: verdictConfig.color,
                    backgroundColor: `${verdictConfig.colorLight}90`,
                  }}
                >
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: verdictConfig.color }}
                  />
                  Website safety result
                </span>
                <span className="rounded-full bg-slate-100 dark:bg-gray-800 px-3 py-1.5 text-xs font-semibold text-slate-500 dark:text-gray-400">
                  Updated {timeAgo(updatedAt)}
                </span>
              </div>

              <p className="mb-3 max-w-full break-words text-sm font-semibold text-slate-500 dark:text-gray-400">
                {domain}
              </p>
              <h1 className="max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.05] text-slate-950 dark:text-white">
                Is {domain} Safe?
              </h1>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <span
                  className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-base sm:text-lg font-extrabold text-white shadow-lg"
                  style={{
                    backgroundColor: verdictConfig.color,
                    boxShadow: `0 18px 35px ${verdictConfig.color}30`,
                  }}
                >
                  {trustLevel && trustLevel.percent >= 80 ? (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  ) : trustLevel && trustLevel.percent >= 50 ? (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0 3.75h.008v.008H12v-.008ZM10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
                    </svg>
                  ) : (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 4.5h.008v.008H12v-.008Z" />
                    </svg>
                  )}
                  {verdictConfig.verdict}
                </span>
                <span className="text-sm sm:text-base text-slate-600 dark:text-gray-300">
                  RakshaAI trust score: <strong>{score10}/10</strong>
                </span>
              </div>

              <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600 dark:text-gray-300">
                {verdictConfig.verdictSub}. We checked technical, reputation, safety, and community signals before assigning this result.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://${domain}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-gray-600"
                >
                  Visit Website
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H18m0 0v4.5M18 6 10.5 13.5M6 8.25v9.75h9.75" />
                  </svg>
                </a>
                <ReportScamButton
                  websiteUrl={domain}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-red-500 to-orange-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition-all hover:-translate-y-0.5 hover:from-red-600 hover:to-orange-600"
                >
                  Report a Scam
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                  </svg>
                </ReportScamButton>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-violet-100 bg-white p-5 sm:p-6 text-slate-950 shadow-xl shadow-violet-100/80 dark:border-violet-900/50 dark:bg-gray-900">
              <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-violet-200/60 blur-3xl dark:bg-violet-900/30" />
              <div className="absolute -bottom-24 left-8 h-56 w-56 rounded-full bg-orange-100/80 blur-3xl dark:bg-orange-900/20" />
              <div className="flex items-center justify-between gap-4 mb-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-500 dark:text-violet-300">Trust meter</p>
                  <p className="mt-1 text-lg font-bold text-slate-950 dark:text-white">Live risk snapshot</p>
                </div>
                {slug && <ShareButton slug={slug} title={resolvedTitle} />}
              </div>

              <div className="relative grid sm:grid-cols-[180px_1fr] gap-5 items-center">
                <div className="mx-auto sm:mx-0">
                  <div
                    className="relative grid h-44 w-44 place-items-center rounded-full shadow-inner"
                    style={{
                      background: `conic-gradient(${verdictConfig.color} ${gaugePercent}%, #ede9fe ${gaugePercent}% 100%)`,
                    }}
                  >
                    <div className="grid h-32 w-32 place-items-center rounded-full bg-white shadow-lg ring-1 ring-violet-100 dark:bg-gray-900 dark:ring-violet-900/50">
                      <div className="text-center">
                        <div className="text-5xl font-black tabular-nums text-slate-950 dark:text-white">{score10}</div>
                        <div className="text-sm font-bold text-slate-500 dark:text-gray-400">out of 10</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="rounded-2xl border border-violet-100 bg-white/85 p-4 shadow-sm dark:border-violet-900/50 dark:bg-gray-800/70">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <span className="text-sm font-semibold text-slate-600 dark:text-gray-300">Overall confidence</span>
                      <span className="text-sm font-black text-slate-950 dark:text-white">{percent}%</span>
                    </div>
                    <AnimatedScoreBar percent={percent} barColorClass={verdictConfig.barColor} />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-violet-100 bg-violet-50/70 p-4 dark:border-violet-900/50 dark:bg-violet-950/30">
                      <p className="text-xs font-semibold uppercase tracking-wider text-violet-500 dark:text-violet-300">Status</p>
                      <p className={`mt-2 text-lg font-black ${reportData?.is_live ? "text-emerald-600 dark:text-emerald-300" : "text-red-600 dark:text-red-300"}`}>
                        {reportData?.is_live ? "Live" : "Offline"}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-orange-100 bg-orange-50/70 p-4 dark:border-orange-900/50 dark:bg-orange-950/30">
                      <p className="text-xs font-semibold uppercase tracking-wider text-orange-500 dark:text-orange-300">Risk Signals</p>
                      <p className={`mt-2 text-lg font-black ${riskSignals > 0 ? "text-red-600 dark:text-red-300" : "text-emerald-600 dark:text-emerald-300"}`}>
                        {riskSignals > 0 ? riskSignals : "None"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative mt-5 rounded-2xl border border-violet-100 bg-gradient-to-r from-violet-50 via-white to-orange-50 p-4 dark:border-violet-900/50 dark:from-violet-950/30 dark:via-gray-900 dark:to-orange-950/20">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-violet-500 dark:text-violet-300">Primary checks</p>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div>
                    <p className="text-xs text-slate-500 dark:text-gray-400">Domain Age</p>
                    <p className="mt-1 break-words text-sm font-bold text-slate-950 dark:text-white">{domainAgeStr}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-gray-400">SSL</p>
                    <p className={`mt-1 break-words text-sm font-bold ${sslStatus.ok ? "text-emerald-600 dark:text-emerald-300" : "text-red-600 dark:text-red-300"}`}>
                      {sslStatus.label}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-gray-400">Searches</p>
                    <p className="mt-1 text-sm font-bold text-slate-950 dark:text-white">
                      {totalCount != null ? totalCount.toLocaleString() : "0"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          EVIDENCE STRIP
      ═══════════════════════════════════════════════════ */}
      <section className="bg-slate-50 dark:bg-gray-950 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-3 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-slate-50 p-4 dark:bg-gray-800/60">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-gray-500">Verdict</p>
              <p className="mt-2 text-lg font-black text-slate-950 dark:text-white">{verdictConfig.verdict}</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4 dark:bg-gray-800/60">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-gray-500">Score Basis</p>
              <p className="mt-2 text-lg font-black text-slate-950 dark:text-white">
                {breakdownItems.length > 0 ? `${breakdownItems.length} checks` : "Multiple checks"}
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4 dark:bg-gray-800/60">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-gray-500">First Checked</p>
              <p className="mt-2 text-lg font-black text-slate-950 dark:text-white">{timeAgo(createdAt)}</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4 dark:bg-gray-800/60">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-gray-500">Next Step</p>
              <Link href="/" className="mt-2 inline-flex items-center gap-2 text-lg font-black text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300">
                Check another site
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          REPORT BODY  Single flowing container
      ═══════════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* SEO intro paragraph  visible, unique, SSR'd content for Google */}
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          RakshaAI analysed <strong>{domain}</strong> across {breakdownItems.length > 0 ? breakdownItems.length : 'multiple'} trust signal categories including SSL certificate validity, domain age, malware blacklists, phishing databases, community scam reports, and payment safety indicators. Based on this analysis, {domain} received a RakshaAI Trust Score of <strong>{score10}/10</strong>{trustLevel ? ` (${trustLevel.percent}%)` : ''} and is classified as <strong>&ldquo;{verdictConfig.verdict}&rdquo;</strong>. Read the full safety report below before making payments or sharing personal information.
        </p>

        {/* Disclaimer */}
        <div className="rounded-xl bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800/40 p-5 text-sm sm:text-base text-yellow-800 dark:text-yellow-300 mb-8">
          <strong>Disclaimer:</strong> RakshaAI reports are automated risk indicators, not government notices, legal findings, or guarantees of safety. Always verify important information independently before paying or sharing sensitive details.
        </div>

        {/* ── Main report card  one continuous white container ── */}
        <article className="bg-white dark:bg-gray-900/60 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">

          {/* Summary */}
          {reportData?.summary && (
            <div className="px-6 sm:px-10 pt-8 pb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {domain} Safety Summary
              </h2>
              <div className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed prose prose-base dark:prose-invert max-w-none">
                <ReactMarkdown components={{ p: ({ node, ...props }) => <p className="mb-2 last:mb-0" {...props} /> }}>
                  {reportData.summary}
                </ReactMarkdown>
              </div>
            </div>
          )}

          {/* Website Legitimacy */}
          {reportData?.website_legitimacy_info && (
            <>
              <hr className="border-gray-200 dark:border-gray-700 mx-6 sm:mx-10" />
              <div className="px-6 sm:px-10 py-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">Is {domain} a Legitimate Website?</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                  {['about', 'terms', 'contact', 'privacy'].map((page) => {
                    const url = reportData.website_legitimacy_info?.pages_found?.[page];
                    const cardContent = (
                      <>
                        <div className={`text-lg mb-1 ${url ? 'text-emerald-600' : 'text-red-500'}`}>
                          {url ? '✓' : '✗'}
                        </div>
                        <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 capitalize">{page} Page</p>
                        <p className={`text-xs mt-0.5 ${url ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-500 dark:text-red-400'}`}>
                          {url ? 'Found' : 'Not Found'}
                        </p>
                      </>
                    );
                    return url ? (
                      <a key={page} href={url} target="_blank" rel="noopener noreferrer" className={`rounded-xl p-4 text-center bg-emerald-50 dark:bg-emerald-900/20 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 transition-colors cursor-pointer`}>
                        {cardContent}
                      </a>
                    ) : (
                      <div key={page} className="rounded-xl p-4 text-center bg-red-50 dark:bg-red-900/20">
                        {cardContent}
                      </div>
                    );
                  })}
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <span className="flex items-center gap-1.5">
                    <span className={reportData.website_legitimacy_info.contact_info_present ? 'text-emerald-500' : 'text-amber-500'}>
                      {reportData.website_legitimacy_info.contact_info_present ? '✓' : '⚠'}
                    </span>
                    Contact Info {reportData.website_legitimacy_info.contact_info_present ? 'Present' : 'Not Detected'}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className={reportData.website_legitimacy_info.legal_identifiers_present ? 'text-emerald-500' : 'text-amber-500'}>
                      {reportData.website_legitimacy_info.legal_identifiers_present ? '✓' : '⚠'}
                    </span>
                    Legal Identifiers {reportData.website_legitimacy_info.legal_identifiers_present ? 'Present' : 'Not Detected'}
                  </span>
                </div>
              </div>
            </>
          )}

          {/* Pages Summary  About / Contact / Privacy */}
          {reportData?.pages_summary && (
            (reportData.pages_summary.about_summary?.available && reportData.pages_summary.about_summary?.summary) ||
            (reportData.pages_summary.privacy_summary?.available && reportData.pages_summary.privacy_summary?.summary) ||
            (reportData.pages_summary.contact_details?.addresses?.length > 0 || reportData.pages_summary.contact_details?.emails?.length > 0 || reportData.pages_summary.contact_details?.phones?.length > 0)
          ) && (
            <>
              <hr className="border-gray-200 dark:border-gray-700 mx-6 sm:mx-10" />
              <div className="px-6 sm:px-10 py-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-5">{domain} Website Information</h2>
                <div className="space-y-5">
                  {reportData.pages_summary.about_summary?.available && reportData.pages_summary.about_summary?.summary && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">About</h3>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">{reportData.pages_summary.about_summary.summary}</p>
                    </div>
                  )}
                  {reportData.pages_summary.privacy_summary?.available && reportData.pages_summary.privacy_summary?.summary && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Privacy Policy</h3>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">{reportData.pages_summary.privacy_summary.summary}</p>
                    </div>
                  )}
                  {reportData.pages_summary.contact_details && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Contact Details</h3>
                      <div className="space-y-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                        {reportData.pages_summary.contact_details.addresses?.length > 0 && (
                          <div>
                            <span className="font-medium text-gray-800 dark:text-gray-300">Addresses: </span>
                            {reportData.pages_summary.contact_details.addresses.map((addr: string, i: number) => (
                              <p key={i} className="ml-4 mt-1">{addr}</p>
                            ))}
                          </div>
                        )}
                        {reportData.pages_summary.contact_details.emails?.length > 0 && (
                          <p><span className="font-medium text-gray-800 dark:text-gray-300">Emails: </span>{reportData.pages_summary.contact_details.emails.join(', ')}</p>
                        )}
                        {reportData.pages_summary.contact_details.phones?.length > 0 && (
                          <p><span className="font-medium text-gray-800 dark:text-gray-300">Phones: </span>{reportData.pages_summary.contact_details.phones.join(', ')}</p>
                        )}
                        {!reportData.pages_summary.contact_details.addresses?.length && !reportData.pages_summary.contact_details.emails?.length && !reportData.pages_summary.contact_details.phones?.length && (
                          <p className="text-gray-400 dark:text-gray-500 italic">No public contact details were detected by our automated scan. The website may provide contact options through other means such as help centres, chatbots, or in-app support.</p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}

          {/* Divider */}
          {breakdownItems.length > 0 && <hr className="border-gray-200 dark:border-gray-700 mx-6 sm:mx-10" />}

          {/* Why this trust score? */}
          {breakdownItems.length > 0 && (
            <div className="px-6 sm:px-10 py-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                Why does {domain} have this trust score?
              </h2>
              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mb-6">
                Score breakdown based on {breakdownItems.length} signal categories
              </p>
              <div className="space-y-5">
                {breakdownItems.map((item) => (
                  <div key={item.label} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <div className="w-full sm:w-48 flex-shrink-0 flex items-center justify-between sm:justify-start gap-2">
                      <span className="text-base font-medium text-gray-700 dark:text-gray-300">{item.label}</span>
                      <span className={`text-xs font-bold uppercase px-2.5 py-0.5 rounded-full ${
                        item.value >= 70
                          ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                          : item.value >= 40
                          ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                          : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="w-full h-2 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden mb-1">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            item.value >= 70
                              ? "bg-emerald-500"
                              : item.value >= 40
                              ? "bg-amber-500"
                              : "bg-red-500"
                          }`}
                          style={{ width: `${item.value}%` }}
                        />
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <hr className="border-gray-200 dark:border-gray-700 mx-6 sm:mx-10" />

          {/* Safety Recommendations */}
          <div className="px-6 sm:px-10 py-8">
            <ActionItemsServer action_items={reportData?.action_items} />
          </div>

          <hr className="border-gray-200 dark:border-gray-700 mx-6 sm:mx-10" />

          {/* Technical Checks */}
          <div className="px-6 sm:px-10 py-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6">{domain} Technical Details</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <SSLCertificate data={reportData} summary={reportData?.section_summaries?.ssl_info_summary} />
              <DomainInformation data={reportData} summary={reportData?.section_summaries?.domain_info_summary} />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
              <WebsiteAge data={reportData} />
              <URLStructure data={reportData} />
            </div>
          </div>

          <hr className="border-gray-200 dark:border-gray-700 mx-6 sm:mx-10" />

          {/* Google Web Risk */}
          {reportData?.risk_website && (
            <div className="px-6 sm:px-10 py-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">{domain} Google Web Risk Check</h2>
              <div className={`flex items-center gap-3 p-4 rounded-xl ${reportData.risk_website.is_safe ? 'bg-emerald-50 dark:bg-emerald-900/20' : 'bg-red-50 dark:bg-red-900/20'}`}>
                <span className={`text-2xl ${reportData.risk_website.is_safe ? 'text-emerald-500' : 'text-red-500'}`}>
                  {reportData.risk_website.is_safe ? '✓' : '✗'}
                </span>
                <div>
                  <p className={`text-base font-semibold ${reportData.risk_website.is_safe ? 'text-emerald-700 dark:text-emerald-300' : 'text-red-700 dark:text-red-300'}`}>
                    {reportData.risk_website.is_safe ? 'No threats detected by Google Web Risk' : 'Threats detected by Google Web Risk'}
                  </p>
                  {reportData.risk_website.threats?.length > 0 && (
                    <p className="text-sm text-red-600 dark:text-red-400 mt-1">
                      Threats: {reportData.risk_website.threats.join(', ')}
                    </p>
                  )}
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Source: {reportData.risk_website.source}</p>
                </div>
              </div>
            </div>
          )}

          <hr className="border-gray-200 dark:border-gray-700 mx-6 sm:mx-10" />

          {/* Malware & Safe Browsing */}
          <div className="px-6 sm:px-10 py-8 space-y-6">
            <MaliciousWebsiteCheck data={reportData} />
            <GoogleSafeBrowsing data={reportData} />
          </div>

          <hr className="border-gray-200 dark:border-gray-700 mx-6 sm:mx-10" />

          {/* User Feedback */}
          <div className="px-6 sm:px-10 py-8 space-y-6">
            <GoogleMapReviews data={reportData} summaryPoints={reportData?.section_summaries?.google_map_points} />
            <OnlineReviewsAcrossWeb data={reportData} summaryPoints={reportData?.section_summaries?.website_reviews_points} />
            <RelatedScamReportsServer
              reports={reportData?.related_scam_reports}
              status={reportData?.sectional_status?.related_scam_reports}
            />
            <FacebookPageCardServer fb={reportData?.fb_page_info} />
            <RegisteredBusinessServer registeredBusiness={registeredBusiness} />
          </div>

          <hr className="border-gray-200 dark:border-gray-700 mx-6 sm:mx-10" />

          {/* How RakshaAI Checks Websites */}
          <div className="px-6 sm:px-10 py-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-5">
              How RakshaAI Checks Websites
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418", title: "Domain Reputation", desc: "WHOIS data, domain age, registrar history, and hosting infrastructure." },
                { icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z", title: "Technical Security", desc: "SSL certificates, malware scans via VirusTotal, and Google Safe Browsing." },
                { icon: "M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5", title: "Public Scam Signals", desc: "Community reports, phishing databases, and fraud intelligence feeds." },
                { icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z", title: "User Reports", desc: "Verified scam reports from Indian users with evidence review." },
                { icon: "M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z", title: "Payment Risk", desc: "Payment safety signals, refund policies, and buyer protection indicators." },
                { icon: "M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75", title: "Safety Advice", desc: "Personalized do/don't recommendations based on combined risk profile." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/40">
                  <div className="w-11 h-11 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <hr className="border-gray-200 dark:border-gray-700 mx-6 sm:mx-10" />

          {/* How to use this report */}
          <div className="px-6 sm:px-10 py-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-5">
              How to Use This {domain} Safety Report
            </h2>
            <div className="grid gap-6 md:grid-cols-2 text-base text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Before payment or signup</h3>
                <p className="text-sm sm:text-base leading-relaxed">
                  Review the trust score, SSL details, domain age, public reputation, and any scam reports. If a signal is unavailable, verify the business through independent sources before sharing OTPs, UPI details, card details, or documents.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">If you already paid</h3>
                <p className="text-sm sm:text-base leading-relaxed">
                  Contact your bank or payment app immediately, preserve screenshots and transaction IDs, call 1930 for urgent financial cybercrime support in India, and file a complaint at cybercrime.gov.in.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-gray-200 dark:border-gray-700 mx-6 sm:mx-10" />

          {/* FAQ */}
          <div className="px-6 sm:px-10 py-8">
            <FAQSection
              data={reportData}
              domain={resolvedAnalyzedUrl || reportData?.url_details?.complete_domain}
              emitSchema={emitFaqSchema}
            />
          </div>

          <hr className="border-gray-200 dark:border-gray-700 mx-6 sm:mx-10" />

          {/* Related website checks */}
          <div className="px-6 sm:px-10 py-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-5">
              Related Website Safety Checks
            </h2>
            <div className="flex flex-wrap gap-3">
              <Link className="px-4 py-2 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/40 transition-colors text-sm sm:text-base" href="/website-safety-checker">Website Safety Checker</Link>
              <Link className="px-4 py-2 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/40 transition-colors text-sm sm:text-base" href="/scams/fake-websites">Fake Website Guide</Link>
              <Link className="px-4 py-2 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/40 transition-colors text-sm sm:text-base" href="/scams/e-commerce-fraud">E-commerce Fraud Guide</Link>
              <Link className="px-4 py-2 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/40 transition-colors text-sm sm:text-base" href="/methodology">How Trust Scores Work</Link>
              <Link className="px-4 py-2 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/40 transition-colors text-sm sm:text-base" href="/blog/how-to-check-fake-website-india">How to Check a Fake Website</Link>
              <Link className="px-4 py-2 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/40 transition-colors text-sm sm:text-base" href="/contact">Report or Correct Information</Link>
            </div>
          </div>
        </article>

        {/* These stay outside the main card */}
        <div className="mt-8 space-y-8">
          {showReviewCta && (
            <div className="no-print">
              <ReviewCTASection
                variant="result"
                websiteUrl={resolvedAnalyzedUrl || reportData?.url_details?.complete_domain || ""}
              />
            </div>
          )}
          {showActionButtons && (
            <ActionButtonsClient data={reportData} analyzedUrl={resolvedAnalyzedUrl} />
          )}
        </div>
      </div>
    </>
  );
}
