import React from 'react';
import { Shield } from 'lucide-react';
import { InfoRow } from '@/components/InfoCard';
import InfoTooltip from '@/components/report/InfoTooltip';

export default function SSLCertificate({ data, summary }: { data: any; summary?: string }) {
    if (!data || data.detected_type === 'upi' || data.detected_type === 'phone') return null;

    const ssl = data.ssl_info || {};
    const valid = Boolean(ssl.valid);
    const selfSigned = Boolean(ssl.self_signed);
    const issuer = ssl.issuer || {};
    const subject = ssl.subject || {};
    const daysLeft = typeof ssl.days_left === 'number' ? ssl.days_left : null;
    const san = Array.isArray(ssl.san) ? ssl.san : [];

    const defs = {
        status: 'Whether the certificate is valid and trusted by browsers.',
        selfSigned: 'Indicates whether the certificate is self-signed (may be less trustworthy).',
        issuerCountry: 'Country where the certificate issuer is registered.',
        issuerOrg: 'Organization that issued the certificate.',
        issuer: 'Common name of the issuer (CA).',
        commonName: 'Primary subject common name covered by the certificate.',
        daysLeft: 'Number of days until the certificate expires.',
        san: 'Additional hostnames covered by this certificate (Subject Alternative Names).',
    };

    return (
        <section>
            <div className="rounded-xl p-4 sm:p-6 bg-gray-50 dark:bg-gray-800/30">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center shadow-lg">
                            <Shield aria-hidden="true" className="h-5 w-5 text-white" />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-gray-900 dark:text-white">SSL Certificate</h2>
                            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">TLS &amp; certificate details</p>
                        </div>
                    </div>
                </div>

                {summary && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{summary}</p>
                )}

                <div className="space-y-3 text-sm text-gray-600">
                    <InfoRow
                        label="Status"
                        value={valid ? <span className="flex items-center space-x-1 text-green-600 dark:text-green-400">Valid &amp; Secure</span> : <span className="flex items-center space-x-1 text-red-600 dark:text-red-400">Invalid</span>}
                        tooltip={<InfoTooltip text={defs.status} />}
                    />

                    <InfoRow
                        label="Self-Signed"
                        value={selfSigned ? <span className="text-yellow-600 dark:text-yellow-400">Yes ⚠️</span> : <span className="text-green-600 dark:text-green-400">No ✓</span>}
                        tooltip={<InfoTooltip text={defs.selfSigned} />}
                    />
                    <InfoRow label="Issuer Country" value={<span>{issuer.countryName || 'N/A'}</span>} tooltip={<InfoTooltip text={defs.issuerCountry} />} />
                    <InfoRow label="Issuer Organization" value={<span>{issuer.organizationName || 'N/A'}</span>} tooltip={<InfoTooltip text={defs.issuerOrg} />} />
                    <InfoRow label="Issuer" value={<span>{issuer.commonName || 'N/A'}</span>} tooltip={<InfoTooltip text={defs.issuer} />} />
                    <InfoRow label="Common Name" value={<span>{subject.commonName || 'N/A'}</span>} tooltip={<InfoTooltip text={defs.commonName} />} />

                    <InfoRow
                        label="Days Until Expiry"
                        value={daysLeft !== null ? <span className={daysLeft > 30 ? 'text-green-600 dark:text-green-400' : 'text-yellow-600 dark:text-yellow-400'}>{`${daysLeft} days`}</span> : <span>N/A</span>}
                        tooltip={<InfoTooltip text={defs.daysLeft} />}
                    />

                    <InfoRow
                        label="Subject Alternative Names"
                        value={
                            san.length > 0 ? (
                                <div className="flex flex-wrap gap-1">
                                    {san.slice(0, 6).map((d: string, idx: number) => (
                                        <span key={idx} className="text-xs font-mono bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-2 py-1 rounded border">
                                            {d}
                                        </span>
                                    ))}
                                    {san.length > 6 && <div className="text-xs text-gray-500 mt-2">And {san.length - 6} more domains</div>}
                                </div>
                            ) : (
                                <span className="text-sm text-gray-500 dark:text-gray-400">None</span>
                            )
                        }
                        tooltip={<InfoTooltip text={defs.san} />}
                    />
                </div>
            </div>
        </section>
    );
}
