import { InfoRow } from "@/components/InfoCard";
import InfoTooltip from "@/components/report/InfoTooltip";
import { Server } from "lucide-react";

interface DomainInformationProps {
  data: any;
  summary?: string;
}





function formatDate(d?: string) {
  if (!d) return 'N/A';
  try {
    return new Date(d).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
  } catch {
    return String(d);
  }
}

function getDaysAgo(days?: number) {
  if (!days && days !== 0) return 'N/A';
  const yrs = Math.round((days || 0) / 365.25);
  if (yrs > 0) return `${yrs} years ago`;
  return `${days} days ago`;
}

function TrustLevelBadge({ level, percentage, score, total }: { level?: string; percentage?: number; score?: number; total?: number }) {
  if (!level) return null;
  return (
    <div className="inline-flex items-center space-x-3">
      <div className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-xs font-semibold">{level}</div>
      <div className="text-xs text-gray-500">{percentage ?? '--'}%</div>
      <div className="text-xs text-gray-500">{score ?? '--'}/{total ?? '--'}</div>
    </div>
  );
}

export default function DomainInformation({ data, summary }: DomainInformationProps) {
  if (!data) return null;
  if (data?.detected_type === 'upi' || data?.detected_type === 'phone') return null;

  const di = data.domain_info || {};

  const defs = {
    domain: 'Fully qualified domain name',
    domainAge: 'Domain age in days',
    created: 'Domain creation date',
    updated: 'Domain last updated date',
    expires: 'Domain expiry date',
    registrar: 'Registrar organization',
    privacyEnabled: 'Whether WHOIS privacy is enabled',
    ipAddress: 'Resolved IP address',
    ipUsage: 'IP usage type',
    abuseScore: 'Abuse score from IP reputation data',
  };

  const technical = data.sectional_status?.technical_trust || null;
  return (
    <section>
      <div className="rounded-xl p-4 sm:p-6 bg-gray-50 dark:bg-gray-800/30">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-3">
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center shadow-lg flex-shrink-0">
              <Server aria-hidden="true" className="h-5 w-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">Domain Information</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium truncate">Technical WHOIS & IP details</p>
            </div>
          </div>

          <div className="w-full sm:w-auto flex justify-start sm:justify-end">
            {technical ? (
              (() => {
                const pct = technical.trust_percentage;
                const pctLabel = typeof pct === 'number' ? `${pct.toFixed(1)}% Trust` : `${pct ?? '--'}% Trust`;
                return (
                  <div className="inline-flex items-center space-x-3">
                    <span className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/10 text-emerald-700 dark:text-emerald-300 font-semibold text-sm">{technical.trust_level}</span>
                    <span className="px-3 py-1 rounded-md bg-white dark:bg-gray-800 text-sm font-medium border border-gray-100 dark:border-gray-800">{pctLabel}</span>
                  </div>
                );
              })()
            ) : null}
          </div>
        </div>

        {summary && (
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{summary}</p>
        )}

        <div className="space-y-3">
          <InfoRow label="Domain" value={di.domain ? <a href={`https://${di.domain}`} target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline break-words">{di.domain}</a> : 'N/A'} highlight tooltip={<InfoTooltip text={defs.domain} />} />
          <InfoRow label="Status" value={<span className="break-words">{di.status || 'N/A'}</span>} />
          <InfoRow label="Domain Age" value={di.domain_age_days ? <span className="font-medium break-words">{`${di.domain_age_days} days (${getDaysAgo(di.domain_age_days)})`}</span> : 'N/A'} tooltip={<InfoTooltip text={defs.domainAge} />} />
          <InfoRow label="Created" value={di.created ? <span className="break-words">{formatDate(di.created)}</span> : 'N/A'} tooltip={<InfoTooltip text={defs.created} />} />
          <InfoRow label="Updated" value={di.updated ? <span className="break-words">{formatDate(di.updated)}</span> : 'N/A'} tooltip={<InfoTooltip text={defs.updated} />} />
          <InfoRow label="Expires" value={di.expires ? <span className="break-words">{formatDate(di.expires)}</span> : 'N/A'} tooltip={<InfoTooltip text={defs.expires} />} />
          <InfoRow label="Registrar" value={<span className="break-words">{di.registrar || 'N/A'}</span>} tooltip={<InfoTooltip text={defs.registrar} />} />
          <InfoRow
            label="Privacy Enabled"
            value={di.privacy_enabled ? <span className="text-green-600 dark:text-green-400">✓ Yes</span> : <span className="text-red-600 dark:text-red-400">✗ No</span>}
            tooltip={<InfoTooltip text={defs.privacyEnabled} />}
          />
          <InfoRow label="IP Address" value={<span className="break-words">{di.ip || 'N/A'}</span>} tooltip={<InfoTooltip text={defs.ipAddress} />} />
          <InfoRow label="IP Usage" value={<span className="break-words">{di.ip_reputation?.usage_type || 'N/A'}</span>} tooltip={<InfoTooltip text={defs.ipUsage} />} />
          <InfoRow label="Abuse Score" value={<span className={di.ip_reputation?.abuse_score === 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}>{di.ip_reputation?.abuse_score ?? 'N/A'}</span>} tooltip={<InfoTooltip text={defs.abuseScore} />} />
        </div>
      </div>
    </section>
  );
}
