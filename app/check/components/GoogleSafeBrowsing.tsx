import { AlertTriangle, ShieldX, Globe, Monitor, Clock, Link2 } from "lucide-react";
import InfoTooltip from "@/components/report/InfoTooltip";

interface GoogleSafeBrowsingProps {
  data: any;
}

const THREAT_LABELS: Record<string, { label: string; color: string; bg: string; border: string; darkBg: string; darkBorder: string }> = {
  MALWARE: {
    label: "Malware",
    color: "text-red-700 dark:text-red-400",
    bg: "bg-red-100",
    border: "border-red-200",
    darkBg: "dark:bg-red-900/30",
    darkBorder: "dark:border-red-800/40",
  },
  SOCIAL_ENGINEERING: {
    label: "Phishing / Social Engineering",
    color: "text-orange-700 dark:text-orange-400",
    bg: "bg-orange-100",
    border: "border-orange-200",
    darkBg: "dark:bg-orange-900/30",
    darkBorder: "dark:border-orange-800/40",
  },
  UNWANTED_SOFTWARE: {
    label: "Unwanted Software",
    color: "text-yellow-700 dark:text-yellow-400",
    bg: "bg-yellow-100",
    border: "border-yellow-200",
    darkBg: "dark:bg-yellow-900/30",
    darkBorder: "dark:border-yellow-800/40",
  },
  POTENTIALLY_HARMFUL_APPLICATION: {
    label: "Potentially Harmful App",
    color: "text-purple-700 dark:text-purple-400",
    bg: "bg-purple-100",
    border: "border-purple-200",
    darkBg: "dark:bg-purple-900/30",
    darkBorder: "dark:border-purple-800/40",
  },
};

const PLATFORM_LABELS: Record<string, string> = {
  ANY_PLATFORM: "All Platforms",
  WINDOWS: "Windows",
  LINUX: "Linux",
  ANDROID: "Android",
  OSX: "macOS",
  IOS: "iOS",
  CHROME: "Chrome",
};

const ENTRY_TYPE_LABELS: Record<string, string> = {
  URL: "URL",
  EXECUTABLE: "Executable File",
  IP_RANGE: "IP Range",
};

const TIPS = {
  section:
    "Google Safe Browsing actively scans billions of URLs for malware, phishing, and deceptive content. A match here means Google has confirmed this site is dangerous.",
  threatType:
    "The type of threat Google detected. SOCIAL_ENGINEERING includes phishing and fake sites designed to steal credentials or money.",
  platformType:
    "Which device platforms are at risk. ANY_PLATFORM means users on all devices are affected.",
  entryType:
    "The form of the threat  whether it's a URL link, a downloadable executable, or an IP address range.",
  cacheDuration:
    "How long this warning should be considered valid before re-checking. Shorter durations mean the threat may change quickly.",
};

function ThreatCard({ match }: { match: any }) {
  const type = match.threatType || "UNKNOWN";
  const platform = match.platformType || "";
  const entryType = match.threatEntryType || "";
  const cache = match.cacheDuration || "";

  const style = THREAT_LABELS[type] || {
    label: type.replace(/_/g, " "),
    color: "text-red-700 dark:text-red-400",
    bg: "bg-red-100",
    border: "border-red-200",
    darkBg: "dark:bg-red-900/30",
    darkBorder: "dark:border-red-800/40",
  };

  return (
    <div className={`rounded-xl border p-3 space-y-2.5 ${style.bg} ${style.darkBg} ${style.border} ${style.darkBorder}`}>
      {/* Threat type */}
      <div className="flex items-start gap-2">
        <AlertTriangle className={`h-4 w-4 mt-0.5 flex-shrink-0 ${style.color}`} />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1 flex-wrap">
            <span className={`text-xs font-bold ${style.color}`}>{style.label}</span>
            <InfoTooltip text={TIPS.threatType} />
          </div>
          <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-0.5">Threat Type</p>
        </div>
      </div>

      <div className="h-px bg-black/5 dark:bg-white/10" />

      {/* Row: Platform + Entry Type */}
      <div className="grid grid-cols-2 gap-2">
        <div>
          <div className="flex items-center gap-1">
            <Monitor className="h-3 w-3 text-gray-400 dark:text-gray-500 flex-shrink-0" />
            <span className="text-[10px] font-bold uppercase tracking-wide text-gray-400 dark:text-gray-500">
              Platform
            </span>
            <InfoTooltip text={TIPS.platformType} />
          </div>
          <p className="text-xs font-semibold text-gray-800 dark:text-gray-200 mt-0.5 truncate">
            {PLATFORM_LABELS[platform] || platform || "N/A"}
          </p>
        </div>
        <div>
          <div className="flex items-center gap-1">
            <Link2 className="h-3 w-3 text-gray-400 dark:text-gray-500 flex-shrink-0" />
            <span className="text-[10px] font-bold uppercase tracking-wide text-gray-400 dark:text-gray-500">
              Entry
            </span>
            <InfoTooltip text={TIPS.entryType} />
          </div>
          <p className="text-xs font-semibold text-gray-800 dark:text-gray-200 mt-0.5 truncate">
            {ENTRY_TYPE_LABELS[entryType] || entryType || "N/A"}
          </p>
        </div>
      </div>

      {/* Cache duration */}
      {cache && (
        <div className="flex items-center gap-1.5">
          <Clock className="h-3 w-3 text-gray-400 dark:text-gray-500 flex-shrink-0" />
          <span className="text-[10px] text-gray-500 dark:text-gray-400 flex items-center">
            Cache duration: <span className="font-semibold text-gray-700 dark:text-gray-300 ml-1">{cache}</span>
            <InfoTooltip text={TIPS.cacheDuration} />
          </span>
        </div>
      )}
    </div>
  );
}

export default function GoogleSafeBrowsing({ data }: GoogleSafeBrowsingProps) {
  if (!data) return null;
  if (data?.detected_type === "upi" || data?.detected_type === "phone") return null;

  const isMalware = data.is_malware;
  const matches: any[] = isMalware?.matches;

  // Only render when there are actual threat matches
  if (!Array.isArray(matches) || matches.length === 0) return null;

  return (
    <section>
      <div className="rounded-xl p-4 sm:p-6 bg-red-50/50 dark:bg-red-900/10">

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center shadow-md flex-shrink-0">
            <ShieldX className="h-5 w-5 text-white" />
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="text-base font-bold text-red-700 dark:text-red-400 leading-tight flex items-center gap-1">
              Google Safe Browsing Alert
              <InfoTooltip text={TIPS.section} />
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
              {matches.length} active threat{matches.length > 1 ? "s" : ""} detected by Google
            </p>
          </div>
        </div>

        {/* Warning banner */}
        <div className="flex items-start gap-2 px-3 py-2.5 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/40 mb-4">
          <AlertTriangle className="h-4 w-4 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-red-700 dark:text-red-300 font-medium leading-relaxed">
            Google has flagged this site as dangerous. Visiting it may expose you to fraud, stolen credentials, or malware installation.
          </p>
        </div>

        {/* Threat cards */}
        <div className="space-y-3">
          {matches.map((match, i) => (
            <ThreatCard key={i} match={match} />
          ))}
        </div>

        {/* Source attribution */}
        <div className="mt-4 flex items-center gap-1.5">
          <Globe className="h-3 w-3 text-gray-400 dark:text-gray-500 flex-shrink-0" />
          <p className="text-[10px] text-gray-400 dark:text-gray-500">
            Data sourced from{" "}
            <a
              href="https://safebrowsing.google.com"
              target="_blank"
              rel="noreferrer noopener"
              className="text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              Google Safe Browsing API
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
