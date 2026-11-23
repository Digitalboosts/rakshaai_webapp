import { ShieldCheck, ShieldAlert, ShieldX, ExternalLink, ThumbsUp, ThumbsDown, Eye, AlertCircle } from "lucide-react";
import InfoTooltip from "@/components/report/InfoTooltip";

interface MaliciousWebsiteCheckProps {
  data: any;
}

const TIPS = {
  finalStatus:
    "The overall verdict after analysing this URL across dozens of security engines. SAFE means no engine raised a flag.",
  scannerResults:
    "This URL was submitted to multiple antivirus and threat-intelligence engines. The bars show how many engines classified it in each category.",
  harmless:
    "Engines that confirmed the URL is clean and poses no risk to visitors.",
  malicious:
    "Engines that actively identified this URL as harmful  e.g. phishing, malware distribution, or fraud.",
  suspicious:
    "Engines that found potentially dangerous signals but stopped short of a definitive malicious verdict. Proceed with caution.",
  undetected:
    "Engines that scanned the URL but did not have enough data to make a determination. Not a clean bill of health.",
  votes:
    "Real users on VirusTotal voted on whether this URL is safe or dangerous based on their personal experience.",
  safeVotes: "Number of community members who marked this URL as safe and harmless.",
  unsafeVotes:
    "Number of community members who flagged this URL as malicious or dangerous.",
  reputation:
    "A composite score calculated from community votes and engine results. Positive means generally trusted; negative means distrusted.",
  categories:
    "How major security vendors classify the content type of this website (e.g. shopping, banking, adult). Helps identify the site's purpose.",
  flaggedVendors:
    "Security engines that specifically labelled this URL as malicious. Even one flag here is worth investigating.",
};

function formatUnixDate(ts?: number) {
  if (!ts) return "N/A";
  try {
    return new Date(ts * 1000).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return "N/A";
  }
}

function StatusBanner({ status }: { status: string }) {
  const s = (status || "").toUpperCase();

  const config =
    s === "SAFE"
      ? {
          bg: "bg-emerald-50 dark:bg-emerald-900/20",
          border: "border-emerald-200 dark:border-emerald-800/40",
          icon: <ShieldCheck className="h-6 w-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />,
          title: "No Threats Detected",
          subtitle: "Security scanners found no malicious activity",
          titleColor: "text-emerald-700 dark:text-emerald-300",
          subtitleColor: "text-emerald-600 dark:text-emerald-400",
          badgeBg:
            "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700",
          label: "SAFE",
        }
      : s === "SUSPICIOUS"
      ? {
          bg: "bg-yellow-50 dark:bg-yellow-900/20",
          border: "border-yellow-200 dark:border-yellow-800/40",
          icon: <ShieldAlert className="h-6 w-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0" />,
          title: "Suspicious Activity",
          subtitle: "Some scanners flagged this site  proceed with caution",
          titleColor: "text-yellow-700 dark:text-yellow-300",
          subtitleColor: "text-yellow-600 dark:text-yellow-400",
          badgeBg:
            "bg-yellow-100 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-700",
          label: "SUSPICIOUS",
        }
      : {
          bg: "bg-red-50 dark:bg-red-900/20",
          border: "border-red-200 dark:border-red-800/40",
          icon: <ShieldX className="h-6 w-6 text-red-600 dark:text-red-400 flex-shrink-0" />,
          title: "Malicious Site Detected",
          subtitle: "Multiple scanners identified this site as dangerous",
          titleColor: "text-red-700 dark:text-red-300",
          subtitleColor: "text-red-600 dark:text-red-400",
          badgeBg:
            "bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 border-red-200 dark:border-red-700",
          label: "DANGEROUS",
        };

  return (
    <div className={`flex items-start gap-3 px-4 py-4 rounded-xl ${config.bg} border ${config.border}`}>
      <div className="mt-0.5">{config.icon}</div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <p className={`text-base font-bold ${config.titleColor}`}>{config.title}</p>
          <span className={`px-2.5 py-0.5 text-xs font-bold uppercase rounded-full border ${config.badgeBg}`}>
            {config.label}
          </span>
          <InfoTooltip text={TIPS.finalStatus} />
        </div>
        <p className={`text-sm mt-1 ${config.subtitleColor}`}>{config.subtitle}</p>
      </div>
    </div>
  );
}

function StatBar({
  label,
  count,
  total,
  color,
  tooltip,
}: {
  label: string;
  count: number;
  total: number;
  color: string;
  tooltip: string;
}) {
  const pct = total > 0 ? Math.round((count / total) * 100) : 0;
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center text-sm">
        <span className="flex items-center font-medium text-gray-600 dark:text-gray-400">
          {label}
          <InfoTooltip text={tooltip} />
        </span>
        <span className="font-bold text-gray-900 dark:text-white tabular-nums text-base">{count}</span>
      </div>
      <div className="h-2 w-full rounded-full bg-gray-100 dark:bg-gray-700 overflow-hidden">
        <div
          className={`h-full rounded-full ${color}`}
          style={{ width: `${Math.max(pct, count > 0 ? 2 : 0)}%` }}
        />
      </div>
    </div>
  );
}

export default function MaliciousWebsiteCheck({ data }: MaliciousWebsiteCheckProps) {
  if (!data) return null;
  if (data?.detected_type === "upi" || data?.detected_type === "phone") return null;

  const mw = data.malicious_website;
  if (!mw || !mw.success) return null;

  const stats = mw.analysis_stats || {};
  const totalStats =
    (stats.harmless || 0) +
    (stats.malicious || 0) +
    (stats.suspicious || 0) +
    (stats.undetected || 0) +
    (stats.timeout || 0);
  const votes = mw.total_votes || {};
  const categories: Record<string, string> = mw.categories || {};
  const categoryEntries = Object.entries(categories);
  const badVendors: { result: string; vendor: string; category: string }[] =
    (mw.bad_vendor_results || []).map((v: any) =>
      typeof v === "string" ? { result: v, vendor: v, category: "malicious" } : v
    );
  const reputation: number | null = typeof mw.reputation === "number" ? mw.reputation : null;

  const iconBg =
    (mw.final_status || "").toUpperCase() === "SAFE"
      ? "from-emerald-500 to-emerald-600"
      : (mw.final_status || "").toUpperCase() === "SUSPICIOUS"
      ? "from-yellow-500 to-orange-500"
      : "from-red-500 to-rose-600";

  return (
    <section>
      <div className="rounded-xl p-4 sm:p-6 bg-gray-50 dark:bg-gray-800/30">

        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div
            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${iconBg} flex items-center justify-center shadow-md flex-shrink-0`}
          >
            <ShieldCheck className="h-6 w-6 text-white" />
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white leading-tight">
              Malware &amp; Threat Scan
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
              Powered by{" "}
              <a
                href="https://www.virustotal.com"
                target="_blank"
                rel="noreferrer noopener"
                className="text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center gap-0.5"
              >
                VirusTotal <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </p>
          </div>
        </div>

        {/* Status banner */}
        <StatusBanner status={mw.final_status || ""} />

        {/* Scanner results */}
        <div className="mt-5 bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 sm:p-5 border border-gray-100 dark:border-gray-700/50">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4 flex items-center">
            Scanner Results &middot; {totalStats} engines
            <InfoTooltip text={TIPS.scannerResults} />
          </p>
          <div className="space-y-3.5">
            <StatBar label="Harmless"   count={stats.harmless   || 0} total={totalStats} color="bg-emerald-500" tooltip={TIPS.harmless}   />
            <StatBar label="Malicious"  count={stats.malicious  || 0} total={totalStats} color="bg-red-500"     tooltip={TIPS.malicious}  />
            <StatBar label="Suspicious" count={stats.suspicious || 0} total={totalStats} color="bg-yellow-500"  tooltip={TIPS.suspicious} />
            <StatBar label="Undetected" count={stats.undetected || 0} total={totalStats} color="bg-gray-400 dark:bg-gray-500" tooltip={TIPS.undetected} />
          </div>
        </div>

        {/* Community votes + Reputation */}
        <div className="mt-4 flex gap-4">
          {/* Votes */}
          <div className="flex-1 bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 border border-gray-100 dark:border-gray-700/50">
            <p className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3 flex items-center">
              Votes
              <InfoTooltip text={TIPS.votes} />
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-9 h-9 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center flex-shrink-0">
                  <ThumbsUp className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div className="min-w-0">
                  <p className="text-lg font-bold text-gray-900 dark:text-white leading-none tabular-nums">
                    {votes.harmless ?? 0}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center mt-0.5">
                    Safe <InfoTooltip text={TIPS.safeVotes} />
                  </p>
                </div>
              </div>
              <div className="w-px h-10 bg-gray-200 dark:bg-gray-700 flex-shrink-0" />
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-9 h-9 rounded-lg bg-red-100 dark:bg-red-900/40 flex items-center justify-center flex-shrink-0">
                  <ThumbsDown className="h-4 w-4 text-red-600 dark:text-red-400" />
                </div>
                <div className="min-w-0">
                  <p className="text-lg font-bold text-gray-900 dark:text-white leading-none tabular-nums">
                    {votes.malicious ?? 0}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center mt-0.5">
                    Unsafe <InfoTooltip text={TIPS.unsafeVotes} />
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Reputation score */}
          {reputation !== null && (
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 border border-gray-100 dark:border-gray-700/50 flex flex-col justify-between min-w-0">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1 flex items-center whitespace-nowrap">
                Reputation
                <InfoTooltip text={TIPS.reputation} />
              </p>
              <p
                className={`text-2xl font-black leading-none tabular-nums ${
                  reputation >= 0
                    ? "text-emerald-600 dark:text-emerald-400"
                    : "text-red-600 dark:text-red-400"
                }`}
              >
                {reputation >= 0 ? "+" : ""}
                {reputation}
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">score</p>
            </div>
          )}
        </div>

        {/* Vendor categories */}
        {categoryEntries.length > 0 && (
          <div className="mt-5">
            <div className="flex items-center gap-2 mb-3">
              <Eye className="h-4 w-4 text-gray-400 dark:text-gray-500 flex-shrink-0" />
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 flex items-center">
                Categorized by Vendors
                <InfoTooltip text={TIPS.categories} />
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {categoryEntries.map(([vendor, category]) => (
                <div
                  key={vendor}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/30"
                >
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400 truncate max-w-[100px]">
                    {vendor}:
                  </span>
                  <span className="text-xs font-bold text-indigo-700 dark:text-indigo-300 capitalize">
                    {category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bad vendor results */}
        {badVendors.length > 0 && (
          <div className="mt-5">
            <div className="flex items-center gap-2 mb-3">
              <AlertCircle className="h-4 w-4 text-red-500 flex-shrink-0" />
              <p className="text-xs font-bold uppercase tracking-wider text-red-500 flex items-center">
                Flagged by Vendors
                <InfoTooltip text={TIPS.flaggedVendors} />
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {badVendors.map((v, i) => (
                <span
                  key={i}
                  className="text-sm px-3 py-1.5 rounded-md bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 border border-red-100 dark:border-red-800/20 font-medium"
                >
                  {v.vendor}
                  {v.result && v.result !== "malicious" && (
                    <span className="ml-1 opacity-60 capitalize">· {v.result}</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Last scanned */}
        {mw.last_analysis_date && (
          <p className="mt-5 text-sm text-gray-400 dark:text-gray-500 text-right">
            Last scanned {formatUnixDate(mw.last_analysis_date)}
          </p>
        )}
      </div>
    </section>
  );
}
