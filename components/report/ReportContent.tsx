"use client";

import { useState, useEffect, useMemo, memo } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import {
  Shield,
  Server,
  MessageSquare,
  Globe,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Info,
  Calendar,
  Clock,
  ExternalLink,
  Phone,
  UserCheck
} from "lucide-react";

import { TrustData } from "@/types/trust-data";
import InfoCard, { InfoRow } from "@/components/InfoCard";
import TrustGauge from "@/components/TrustGauge";
import ActionItems from "@/components/ActionItems";
import TrustLevelBadge from "./TrustLevelBadge";
import InfoTooltip from "./InfoTooltip";
import { definitions } from "@/lib/definitions";
import { formatDate, getDaysAgo } from "@/lib/utils/report-utils";
import { printWithWatermark } from "@/lib/utils";
import AppStoreButtons from "@/components/AppStoreButtons";

// Lazy load heavy components
const ReviewsList = dynamic(() => import("@/components/ReviewsList"), { ssr: false });
const WebsiteReviewsTabs = dynamic(() => import("@/components/WebsiteReviewsTabs"), { ssr: false });
const FBCard = dynamic(() => import("@/components/FBCard"), { ssr: false });
const ReviewCTASection = dynamic(() => import("@/components/ReviewCTASection"), { ssr: false });
const ReviewSubmissionFAB = dynamic(() => import("@/components/ReviewSubmissionFAB"), { ssr: false });
const TrendingWebsitesSection = dynamic(() => import("@/components/TrendingWebsitesSection"), { ssr: false });
const LowestTrustSlider = dynamic(() => import("@/components/LowestTrustSlider"), { ssr: false });
const QRCode = dynamic(() => import("react-qr-code"), { ssr: false });
const EvidenceGallery = dynamic(() => import("@/components/EvidenceGallery"), { ssr: false });

// Import motion only where needed - reduce initial bundle
const motion = {
  div: memo(({ children, className, initial, animate, transition }: any) => (
    <div className={className}>{children}</div>
  ))
};

interface ReportContentProps {
  initialData: TrustData;
  analyzedUrl: string;
  slug: string;
}

export default function ReportContent({ initialData, analyzedUrl, slug }: ReportContentProps) {
  const router = useRouter();
  const [data] = useState<TrustData>(initialData);
  const [isEvidenceGalleryOpen, setIsEvidenceGalleryOpen] = useState(false);
  const [evidenceItems, setEvidenceItems] = useState<Array<{
    id: string,
    url: string,
    type: 'pdf' | 'image',
    name: string,
    reportId?: number,
    reporterName?: string
  }>>([]);
  const [initialEvidenceIndex, setInitialEvidenceIndex] = useState(0);
  const [showAllSANs, setShowAllSANs] = useState(false);
  const [trending, setTrending] = useState([]);
  const [lowestTrust, setLowestTrust] = useState<any[]>([]);

  // ...existing state/hooks...
  const [downloadUrl, setDownloadUrl] = useState("");

  const relatedReportStatusClass = (status?: string) => {
    switch ((status || '').toLowerCase()) {
      case 'resolved':
        return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400';
      case 'dismissed':
      case 'closed':
        return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300';
      case 'under_review':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
      case 'pending':
      default:
        return 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400';
    }
  };

  // Memoize computed values
  const googleReviewData = useMemo(() => data?.google_reviews_data?.reviews, [data]);
  const isUpiOrPhone = useMemo(() => data.detected_type === 'upi' || data.detected_type === 'phone', [data.detected_type]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const origin = window.location.origin;
      const safeSlug = encodeURIComponent(slug || analyzedUrl || (initialData.url_details?.complete_domain ?? "report"));
      setDownloadUrl(`${origin}/api/qrdownload?slug=${safeSlug}`);
    }
  }, [slug, analyzedUrl, initialData]);

  // Defer non-critical data fetching
  useEffect(() => {
    const timer = setTimeout(() => {
      fetch('/api/trending-websites')
        .then(res => res.json())
        .then(data => {
          if (data?.success) {
            setTrending(data.trending_websites || []);
          }
        })
        .catch(() => { });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetch('/api/lowest-trust-websites')
        .then(res => res.json())
        .then(data => {
          if (data?.success) {
            setLowestTrust(data.lowest_trust_websites || []);
          }
        })
        .catch(() => { });
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Function to handle opening evidence gallery
  const handleEvidenceClick = (attachmentUrl: string, report: any, allReports: any[]) => {
    const items = allReports
      .filter(r => r.attachment)
      .map((r, idx) => ({
        id: `evidence-${r.id}`,
        url: r.attachment,
        type: r.attachment.toLowerCase().includes('.pdf') ? 'pdf' as const : 'image' as const,
        name: `Evidence from ${r.name} - ${r.submission_type}`,
        reportId: r.id,
        reporterName: r.name
      }));

    const initialIndex = items.findIndex(item => item.url === attachmentUrl);
    setEvidenceItems(items);
    setInitialEvidenceIndex(Math.max(0, initialIndex));
    setIsEvidenceGalleryOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Left Column - Trust Gauge */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-1"
        >
          <div className="lg:sticky lg:top-24 space-y-6">
            {/* Trust Gauge - Hidden for UPI and Phone */}
            {data.detected_type !== 'upi' && data.detected_type !== 'phone' && (
              <TrustGauge
                data={data}
                score={data.trust_percentage}
                total_number_of_reviews={data.total_number_of_reviews}
                isUpiReport={data.detected_type === 'upi'}
              />
            )}

            {/* Website Publishing Date - Hidden for UPI and Phone */}
            {data.website_publishing_date && data.detected_type !== 'upi' && data.detected_type !== 'phone' && (
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.25 }}
                className="mt-6"
              >
                {data.website_publishing_date.publish_date != null && (
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/10 dark:to-teal-900/10 rounded-2xl p-6 border border-emerald-200 dark:border-emerald-800/30 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg">
                          <Calendar className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white">Website Age</h3>
                          <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">Publishing Information</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <InfoRow
                        label="Publish Date"
                        value={formatDate(data.website_publishing_date.publish_date)}
                        tooltip={<InfoTooltip text={definitions.publishingDate} />}
                      />
                      <InfoRow
                        label="Publish Year"
                        value={data.website_publishing_date.publish_year}
                        tooltip={<InfoTooltip text={definitions.publishingYear} />}
                      />
                      <InfoRow
                        label="Website Age"
                        // {new Date().getFullYear() - data.website_publishing_date.publish_year} years
                        value={`${new Date().getFullYear() - data.website_publishing_date.publish_year} years`}
                      />
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* URL Details - Hidden for UPI and Phone */}
            {data.url_details && data.detected_type !== 'upi' && data.detected_type !== 'phone' && (
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-6"
              >
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/10 dark:to-indigo-900/10 rounded-2xl p-6 border border-purple-200 dark:border-purple-800/30 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg">
                        <Globe className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">URL Structure</h3>
                        <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">Address Components</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <InfoRow label="Business Name" value={data.url_details.business_name || "N/A"} tooltip={<InfoTooltip text={definitions.businessName} />} />
                    <InfoRow label="Complete Domain" value={data.url_details.complete_domain || "N/A"} highlight tooltip={<InfoTooltip text={definitions.completeDomain} />} />
                    <InfoRow label="Scheme" value={data.url_details.scheme || "N/A"} tooltip={<InfoTooltip text={definitions.scheme} />} />
                    <InfoRow label="Subdomain" value={data.url_details.subdomain || "None"} tooltip={<InfoTooltip text={definitions.subdomain} />} />
                    <InfoRow label="Domain" value={data.url_details.domain || "N/A"} tooltip={<InfoTooltip text={definitions.domain} />} />
                    <InfoRow label="TLD" value={data.url_details.tld || "N/A"} tooltip={<InfoTooltip text={definitions.tld} />} />
                    <InfoRow label="Port" value={data.url_details.port || "Default"} tooltip={<InfoTooltip text={definitions.port} />} />
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Right Column - Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Action Items */}
          {data.action_items && (
            <ActionItems action_items={data.action_items} />
          )}

          {/* Domain Information - Hidden for UPI and Phone */}
          {data.detected_type !== 'upi' && data.detected_type !== 'phone' && (
            <InfoCard
              title="Domain Information"
              icon={Server}
              delay={0.2}
              extra={data.sectional_status?.technical_trust ? (
                <TrustLevelBadge
                  level={data.sectional_status.technical_trust.trust_level}
                  percentage={data.sectional_status.technical_trust.trust_percentage}
                  score={data.sectional_status.technical_trust.trust_score}
                  total={data.sectional_status.technical_trust.total_number_of_reviews}
                />
              ) : null}
            >
              <InfoRow label="Domain" value={data.domain_info?.domain || "N/A"} highlight tooltip={<InfoTooltip text={definitions.domain} />} />
              <InfoRow label="Status" value={data.domain_info?.status || "N/A"} />
              <InfoRow
                label="Domain Age"
                value={data.domain_info?.domain_age_days ? `${data.domain_info.domain_age_days} days (${getDaysAgo(data.domain_info.domain_age_days)})` : "N/A"}
                tooltip={<InfoTooltip text={definitions.domainAge} />}
              />
              <InfoRow label="Created" value={data.domain_info?.created ? formatDate(data.domain_info.created) : "N/A"} tooltip={<InfoTooltip text={definitions.created} />} />
              <InfoRow label="Updated" value={data.domain_info?.updated ? formatDate(data.domain_info.updated) : "N/A"} tooltip={<InfoTooltip text={definitions.updated} />} />
              <InfoRow label="Expires" value={data.domain_info?.expires ? formatDate(data.domain_info.expires) : "N/A"} tooltip={<InfoTooltip text={definitions.expires} />} />
              <InfoRow label="Registrar" value={data.domain_info?.registrar || "N/A"} tooltip={<InfoTooltip text={definitions.registrar} />} />
              <InfoRow
                label="Privacy Enabled"
                value={
                  data.domain_info?.privacy_enabled ? (
                    <span className="text-green-600 dark:text-green-400">✓ Yes</span>
                  ) : (
                    <span className="text-red-600 dark:text-red-400">✗ No</span>
                  )
                }
                tooltip={<InfoTooltip text={definitions.privacyEnabled} />}
              />
              <InfoRow label="IP Address" value={data.domain_info?.ip || "N/A"} tooltip={<InfoTooltip text={definitions.ipAddress} />} />
              <InfoRow label="IP Usage" value={data.domain_info?.ip_reputation?.usage_type || "N/A"} tooltip={<InfoTooltip text={definitions.ipUsage} />} />
              <InfoRow
                label="Abuse Score"
                value={
                  <span className={data.domain_info?.ip_reputation?.abuse_score === 0 ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}>
                    {data.domain_info?.ip_reputation?.abuse_score ?? "N/A"}
                  </span>
                }
                tooltip={<InfoTooltip text={definitions.abuseScore} />}
              />
            </InfoCard>
          )}
        </div>
      </div>

      {/* Second Row - SSL Information - Hidden for UPI and Phone */}
      {data.detected_type !== 'upi' && data.detected_type !== 'phone' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mt-8">
          <InfoCard title="SSL Certificate" icon={Shield} delay={0.3}>
            <InfoRow
              label="Status"
              value={
                data.ssl_info?.valid ? (
                  <span className="flex items-center space-x-1 text-green-600 dark:text-green-400">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Valid & Secure</span>
                  </span>
                ) : (
                  <span className="flex items-center space-x-1 text-red-600 dark:text-red-400">
                    <XCircle className="h-4 w-4" />
                    <span>Invalid</span>
                  </span>
                )
              }
              tooltip={<InfoTooltip text={definitions.sslStatus} />}
            />
            <InfoRow
              label="Self-Signed"
              value={
                data.ssl_info?.self_signed ? (
                  <span className="text-yellow-600 dark:text-yellow-400">Yes ⚠️</span>
                ) : (
                  <span className="text-green-600 dark:text-green-400">No ✓</span>
                )
              }
              tooltip={<InfoTooltip text={definitions.selfSigned} />}
            />
            <InfoRow label="Issuer Country" value={data.ssl_info?.issuer?.countryName || "N/A"} tooltip={<InfoTooltip text={definitions.issuerCountry} />} />
            <InfoRow label="Issuer Organization" value={data.ssl_info?.issuer?.organizationName || "N/A"} tooltip={<InfoTooltip text={definitions.issuerOrg} />} />
            <InfoRow label="Issuer" value={data.ssl_info?.issuer?.commonName || "N/A"} tooltip={<InfoTooltip text={definitions.issuerOrg} />} />
            <InfoRow label="Common Name" value={data.ssl_info?.subject?.commonName || "N/A"} tooltip={<InfoTooltip text={definitions.commonName} />} />
            <InfoRow
              label="Days Until Expiry"
              value={
                data.ssl_info?.days_left !== undefined ? (
                  <span className={data.ssl_info.days_left > 30 ? "text-green-600 dark:text-green-400" : "text-yellow-600 dark:text-yellow-400"}>
                    {data.ssl_info.days_left} days
                  </span>
                ) : "N/A"
              }
              tooltip={<InfoTooltip text={definitions.daysUntilExpiry} />}
            />

            {/* Subject Alternative Names with expandable view */}
            <div className="py-3 border-b border-gray-100 dark:border-gray-800 last:border-0">
              <div className="flex flex-col gap-2">
                <div className="flex items-center">
                  <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                    Subject Alternative Names
                  </span>
                  <InfoTooltip text={definitions.sanDomains} />
                </div>
                <div className="w-full">
                  {data.ssl_info?.san && data.ssl_info.san.length > 0 ? (
                    <div className="space-y-2">
                      <div className="flex flex-wrap gap-1">
                        {(showAllSANs ? data.ssl_info.san : data.ssl_info.san.slice(0, 3)).map((domain, index) => (
                          <span
                            key={index}
                            className="text-xs font-mono bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-2 py-1 rounded border"
                          >
                            {domain}
                          </span>
                        ))}
                      </div>
                      {data.ssl_info.san.length > 3 && (
                        <button
                          onClick={() => setShowAllSANs(!showAllSANs)}
                          className="text-xs text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200 font-medium transition-colors"
                        >
                          {showAllSANs ? 'Show Less' : `Show All ${data.ssl_info.san.length} Domains`}
                        </button>
                      )}
                    </div>
                  ) : (
                    <span className="text-sm text-gray-500 dark:text-gray-400">None</span>
                  )}
                </div>
              </div>
            </div>
          </InfoCard>

          {/* Facebook Info */}
          {data.fb_page_info && (data.fb_page_info.name || data.fb_page_info.url) && (
            <div>
              {data.sectional_status?.unclear_business_legitimacy && (
                <div className="mb-4 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/10 dark:to-indigo-900/10 rounded-2xl p-4 border border-purple-200 dark:border-purple-800/30">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    <span>Business Legitimacy Check</span>
                  </h3>
                  <TrustLevelBadge
                    level={data.sectional_status.unclear_business_legitimacy.trust_level}
                    percentage={data.sectional_status.unclear_business_legitimacy.trust_percentage}
                    score={data.sectional_status.unclear_business_legitimacy.trust_score}
                    total={data.sectional_status.unclear_business_legitimacy.total_number_of_reviews}
                  />
                </div>
              )}
              <FBCard {...data.fb_page_info} />
            </div>
          )}
        </div>
      )}

      {/* Reviews Sections */}
      {googleReviewData && googleReviewData.length > 0 && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
          <InfoCard
            title="Google Maps Reviews"
            icon={MessageSquare}
            delay={0.4}
            extra={data.sectional_status?.google_business_profile_trust ? (
              <TrustLevelBadge
                level={data.sectional_status.google_business_profile_trust.trust_level}
                percentage={data.sectional_status.google_business_profile_trust.trust_percentage}
                score={data.sectional_status.google_business_profile_trust.trust_score}
                total={data.sectional_status.google_business_profile_trust.total_number_of_reviews}
              />
            ) : null}
          >
            <ReviewsList
              reviews={data.google_reviews_data?.reviews || []}
              positiveCount={data.google_reviews_data?.positive_count || 0}
              negativeCount={data.google_reviews_data?.negative_count || 0}
              totalReviews={data.google_reviews_data?.total_reviews || 0}
              averageRating={data.google_reviews_data?.average_rating}
              placesUsed={data.google_reviews_data?.places_used}
            />
          </InfoCard>
        </motion.div>
      )}

      {/* Website Reviews Section */}
      {data.website_reviews && data.website_reviews.reviews && data.website_reviews.reviews.length > 0 && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="mt-8"
        >
          <InfoCard
            title="Online Reviews Across Web"
            icon={Globe}
            delay={0}
            extra={data.sectional_status?.public_reputation_trust ? (
              <TrustLevelBadge
                level={data.sectional_status.public_reputation_trust.trust_level}
                percentage={data.sectional_status.public_reputation_trust.trust_percentage}
                score={data.sectional_status.public_reputation_trust.trust_score}
                total={data.sectional_status.public_reputation_trust.total_number_of_reviews}
              />
            ) : null}
          >
            {data.website_reviews?.reviews && (
              <WebsiteReviewsTabs reviews={data.website_reviews.reviews} />
            )}
          </InfoCard>
        </motion.div>
      )}

      {/* Related Scam Reports Section */}
      {data.related_scam_reports && data.related_scam_reports.length > 0 && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8"
        >
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 rounded-2xl p-6 border border-blue-200 dark:border-blue-800/30">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
                  <AlertCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Community Reports ({data.related_scam_reports.length})
                  </h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                    {data.related_scam_reports.length} user report{data.related_scam_reports.length > 1 ? 's' : ''} found
                  </p>
                </div>
              </div>
            </div>

            {data.sectional_status?.related_scam_reports && (
              <div className="mb-6">
                <TrustLevelBadge
                  level={data.sectional_status.related_scam_reports.trust_level}
                  percentage={data.sectional_status.related_scam_reports.trust_percentage}
                  score={data.sectional_status.related_scam_reports.trust_score}
                  total={data.sectional_status.related_scam_reports.total_number_of_reviews}
                />
              </div>
            )}

            <div className="space-y-4">
              {data.related_scam_reports.map((report, index) => (
                <motion.div
                  key={report.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 group hover:border-blue-300 dark:hover:border-blue-600"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="font-bold text-gray-900 dark:text-white">{report.name}</span>
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${report.submission_type === 'upi'
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                          : report.submission_type === 'phone'
                            ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                            : 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
                          }`}>
                          {report.submission_type.toUpperCase()}
                        </span>
                        {report.status && (
                          <span className={`text-xs px-2 py-1 rounded-full font-medium ${relatedReportStatusClass(report.status)}`}>
                            {String(report.status).replace(/_/g, ' ').toUpperCase()}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                        {report.phone_number && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-gray-50 dark:bg-gray-700 px-2 py-1 border border-gray-200 dark:border-gray-600">
                            <Phone className="h-3 w-3" /> {report.phone_number}
                          </span>
                        )}
                        {report.upi_id && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-gray-50 dark:bg-gray-700 px-2 py-1 border border-gray-200 dark:border-gray-600">
                            <Shield className="h-3 w-3" /> {report.upi_id}
                          </span>
                        )}
                        {(report.website_slug || report.website_url) && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-gray-50 dark:bg-gray-700 px-2 py-1 border border-gray-200 dark:border-gray-600">
                            <Globe className="h-3 w-3" /> {report.website_slug || report.website_url}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-3 w-3 text-gray-400" />
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {formatDate(report.created_at)}
                      </span>
                    </div>
                  </div>

                  <div className="mb-4 p-4 bg-gray-50 dark:bg-gray-700/40 rounded-lg border-l-4 border-blue-400">
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {report.review}
                    </p>
                  </div>

                  {report.business_owner_response && (
                    <div className="mb-4 p-4 bg-emerald-50 dark:bg-emerald-900/10 rounded-lg border border-emerald-200 dark:border-emerald-800/40">
                      <div className="flex items-center justify-between gap-3 mb-2 flex-wrap">
                        <div className="inline-flex items-center gap-2 text-emerald-700 dark:text-emerald-400">
                          <UserCheck className="h-4 w-4" />
                          <p className="text-xs font-bold uppercase tracking-wide m-0">Business Owner Response</p>
                        </div>
                        {report.business_owner_responded_at && (
                          <span className="text-[11px] text-emerald-700/80 dark:text-emerald-400/80">
                            Responded on {formatDate(report.business_owner_responded_at)}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-emerald-900 dark:text-emerald-100 leading-relaxed">{report.business_owner_response}</p>
                      {report.business_owner_document && (
                        <a
                          href={report.business_owner_document}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-3 inline-flex items-center gap-1.5 text-xs bg-white hover:bg-emerald-100 dark:bg-emerald-900/20 dark:hover:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 px-3 py-1.5 rounded-lg font-medium transition-colors border border-emerald-200 dark:border-emerald-800"
                        >
                          <ExternalLink className="h-3 w-3" /> View Business Proof
                        </a>
                      )}
                    </div>
                  )}

                  <div className="flex flex-wrap items-center gap-4">
                    {report.attachment && (
                      <button
                        onClick={() => handleEvidenceClick(report.attachment!, report, data.related_scam_reports!)}
                        className="text-xs bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/40 text-blue-600 dark:text-blue-400 px-3 py-1.5 rounded-lg font-medium transition-colors border border-blue-200 dark:border-blue-800"
                      >
                        View Evidence
                      </button>
                    )}

                    {report.resolution_details && (
                      <div className="text-xs">
                        <span className="text-green-600 dark:text-green-400 font-medium">Resolution:</span>
                        <span className="text-gray-600 dark:text-gray-400 ml-1">{report.resolution_details}</span>
                      </div>
                    )}

                    {report.resolved_at && (
                      <span className="text-xs text-gray-500 dark:text-gray-400">Resolved on {formatDate(report.resolved_at)}</span>
                    )}

                    {report.updated_at && (
                      <span className="text-xs text-gray-400 dark:text-gray-500">Updated {formatDate(report.updated_at)}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
              <div className="flex items-start space-x-2">
                <Info className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-blue-900 dark:text-blue-100 mb-1">
                    Community Safety Initiative
                  </p>
                  <p className="text-xs text-blue-700 dark:text-blue-300 leading-relaxed">
                    These reports are voluntarily submitted by users to help identify potential security threats and protect the community from fraudulent activities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Community Review CTA */}
      <div className="no-print">
        <ReviewCTASection variant="result" websiteUrl={analyzedUrl || data.url_details?.complete_domain || ""} />
      </div>

      {/* Action Buttons */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-10 mb-25 no-print"
      >
        <div className="glass flex justify-center gap-14 rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-gray-800">
          <div>
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Need More Information?</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Check another website or save this report for your records</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.href = "/"}
                className="flex items-center justify-center space-x-2 px-6 py-3.5 glass rounded-xl font-semibold text-gray-900 dark:text-white hover:shadow-xl hover:scale-105 transition-all border-2 border-indigo-200 dark:border-indigo-800 hover:border-indigo-400 dark:hover:border-indigo-600"
              >
                <Globe className="h-5 w-5" />
                <span>Check Another Website</span>
              </button>
              <button
                onClick={() => {
                  let domain = data?.url_details?.complete_domain || data?.url_details?.domain || analyzedUrl || "report";
                  if (domain.includes('://')) {
                    try {
                      domain = new URL(domain).hostname;
                    } catch { }
                  }
                  const safeDomain = domain.replace(/[^a-zA-Z0-9-_\.]/g, '_');
                  const pdfTitle = `RakshaAI-(${safeDomain})-Report`;
                  printWithWatermark(pdfTitle);
                }}
                className="flex items-center justify-center space-x-2 px-6 py-3.5 gradient-primary text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all"
              >
                <Shield className="h-5 w-5" />
                <span>Save Report (PDF)</span>
              </button>
            </div>
          </div>
          <div aria-hidden="true" className="self-stretch w-px bg-gray-200 dark:bg-gray-700" />
          {/* App download QR */}
          <div className="flex items-center space-x-4 bg-white rounded-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
            <div style={{ width: 160, height: 140 }}>
              <QRCode value="https://rakshaai.co/app" size={140} />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-gray-900 dark:text-white">Keep RakshaAI ready on your phone</p>
              <p className="mt-1 mb-3 text-xs text-gray-500 dark:text-gray-400">Scan the code or choose your official app store.</p>
              <AppStoreButtons compact />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Trending Websites */}
      <div className="from-zinc-50 to-white glass rounded-2xl  border-2 border-indigo-100 dark:border-indigo-900/30 mb-8 sm:pt-8">
        <TrendingWebsitesSection />
      </div>

      <div className="from-zinc-50 to-white glass rounded-2xl  border-2 border-indigo-100 dark:border-indigo-900/30  sm:py-8">
        {lowestTrust.length > 0 && (
          <LowestTrustSlider />
        )}
      </div>


      {/* Floating Action Button */}
      <ReviewSubmissionFAB websiteUrl={analyzedUrl || data.url_details?.complete_domain || ""} />

      {/* Evidence Gallery Modal */}
      <EvidenceGallery
        isOpen={isEvidenceGalleryOpen}
        onClose={() => setIsEvidenceGalleryOpen(false)}
        items={evidenceItems}
        initialIndex={initialEvidenceIndex}
      />
    </div>
  );
}
