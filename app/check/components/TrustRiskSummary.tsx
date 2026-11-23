import React from 'react';
import { AlertTriangle, CheckCircle, ShieldCheck, ShieldAlert, Info } from 'lucide-react';
import { getWebsiteReportScore } from '@/lib/seo/report-indexability';

export default function TrustRiskSummary({ data }: { data: any }) {
    const trustLevel = getWebsiteReportScore(data);
    const trustScore = trustLevel?.score ?? 0;
    const overallPercent = trustLevel?.percent ?? null;

    // Domain age (days) -> newly registered if < 365 days
    const domainAgeDays = data?.domain_info?.domain_age_days ?? data?.website_publishing_date?.publish_year ? (() => {
        if (data?.domain_info?.domain_age_days) return data.domain_info.domain_age_days;
        if (data?.website_publishing_date?.publish_year) {
            const now = new Date().getFullYear();
            return Math.max(0, (now - data.website_publishing_date.publish_year) * 365);
        }
        return null;
    })() : null;
    const newlyRegistered = typeof domainAgeDays === 'number' ? domainAgeDays < 365 : false;

    // WHOIS privacy
    const hiddenWhois = Boolean(data?.domain_info?.privacy_enabled);

    // IP / reputation signals
    const abuseScore = Number(data?.domain_info?.ip_reputation?.abuse_score ?? 0);
    const highRiskIp = abuseScore > 50;

    // Reputation signals
    const negativeReviews = Number(data?.website_reviews?.total_negative_sentiment_reviews ?? 0);
    const totalChecked = Number(data?.website_reviews?.total_reviews_checked ?? 0);
    const avgRating = Number(data?.website_reviews?.average_rating ?? 0);
    const poorReputation = (negativeReviews > 3) || (totalChecked > 0 && (negativeReviews / Math.max(1, totalChecked) > 0.3)) || (avgRating > 0 && avgRating < 3.5);

    const isRiskyPrimary = overallPercent !== null ? overallPercent < 50 : true;
    const caveatFlags = { newlyRegistered, hiddenWhois, highRiskIp, poorReputation };
    const hasCaveats = Object.values(caveatFlags).some(Boolean);
    const yearsOld = typeof domainAgeDays === 'number' ? Math.round(domainAgeDays / 365.25) : null;

    const hasCriticalCaveats = highRiskIp || poorReputation;
    const isMixed = !isRiskyPrimary && hasCriticalCaveats;
    const isRisky = isRiskyPrimary || isMixed;
    const gradientFrom = isRisky ? 'from-white to-red-50 dark:from-gray-900 dark:to-gray-800/80' : 'from-white to-green-50 dark:from-gray-900 dark:to-gray-800/80';
    const iconGradient = isRisky ? 'from-red-500 to-orange-600' : 'from-green-500 to-emerald-600';
    const badgeBg = isRisky ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300' : 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300';
    const scoreColor = isRisky ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400';
    const heading = isMixed ? 'Mixed Signals Found' : isRisky ? 'Why This Site Might Be Risky' : 'Why This Site May Be Lower Risk';
    const subtitle = isMixed ? 'Positive score with important caveats to verify' : isRisky ? 'Risk signals detected by RakshaAI automated analysis' : 'Positive signals found by RakshaAI automated analysis';

    return (
        <section>
            <div className={`bg-gradient-to-br ${gradientFrom} rounded-xl p-3 sm:p-6`}>

                {/* Header */}
                <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                    <div className={`w-7 h-7 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${iconGradient} flex items-center justify-center flex-shrink-0`}>
                        {isRisky
                            ? <ShieldAlert className="h-3.5 w-3.5 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white" />
                            : <ShieldCheck className="h-3.5 w-3.5 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white" />
                        }
                    </div>
                    <div>
                        <h2 className="text-base sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white leading-tight">
                            {heading}
                        </h2>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{subtitle}</p>
                    </div>
                    {/* Score badge */}
                    {overallPercent !== null && (
                        <div className={`ml-auto flex-shrink-0 px-3 py-1 rounded-full text-sm font-bold ${badgeBg}`}>
                            {overallPercent}% trust
                        </div>
                    )}
                </div>

                {/* Summary sentence */}
                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    RakshaAI scored this site{' '}
                    <strong className={`text-base ${scoreColor}`}>{trustScore}</strong>
                    {overallPercent !== null && <span> ({overallPercent}% trust)</span>}
                    {isMixed
                        ? ' but important caveats were found. Verify these signals before making payments or sharing sensitive information.'
                        : isRisky
                        ? ' our automated analysis found multiple signals that could indicate higher risk for online transactions.'
                        : ' our checks found several positive signals. This is still a risk indicator, so verify independently before payment or signup.'}
                </p>

                {/* Signal cards */}
                <div className="space-y-2 mb-4">
                    {isRisky ? (
                        <>
                            {newlyRegistered && (
                                <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800/40">
                                    <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">Newly registered domain only {yearsOld === 0 ? '<1' : yearsOld} year(s) old ({domainAgeDays ?? 'N/A'} days)</span>
                                </div>
                            )}
                            {hiddenWhois && (
                                <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800/40">
                                    <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">WHOIS privacy enabled registrant details are hidden</span>
                                </div>
                            )}
                            {highRiskIp && (
                                <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800/40">
                                    <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">High IP abuse score ({abuseScore}) hosting/IP may have past abuse reports</span>
                                </div>
                            )}
                            {poorReputation && (
                                <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800/40">
                                    <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">Poor public reputation {negativeReviews} negative review(s) out of {totalChecked} checked (avg rating: {avgRating || 'N/A'})</span>
                                </div>
                            )}
                            {!newlyRegistered && !hiddenWhois && !highRiskIp && !poorReputation && (
                                <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800/40">
                                    <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">Automated trust heuristics indicate elevated risk despite a low explicit signal exercise caution</span>
                                </div>
                            )}
                        </>
                    ) : (
                        <>
                            {data?.ssl_info?.valid && (
                                <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800/40">
                                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">Active SSL certificate (valid until {data?.ssl_info?.not_after ? new Date(data.ssl_info.not_after).toLocaleDateString() : 'N/A'})</span>
                                </div>
                            )}
                            {!newlyRegistered && typeof yearsOld === 'number' && (
                                <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800/40">
                                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">Established domain roughly {yearsOld} year(s) online</span>
                                </div>
                            )}
                            {!hiddenWhois && (
                                <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800/40">
                                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">Registrant information available</span>
                                </div>
                            )}
                            {(avgRating >= 3.5 || (totalChecked > 0 && (negativeReviews / Math.max(1, totalChecked) < 0.3))) && (
                                <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800/40">
                                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">Generally positive public reviews (avg rating: {avgRating || 'N/A'})</span>
                                </div>
                            )}
                        </>
                    )}
                </div>

                {/* Caveats block */}
                {!isRisky && hasCaveats && (
                    <div className="mb-4 p-3 sm:p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800/40">
                        <h3 className="text-xs sm:text-sm font-bold text-yellow-700 dark:text-yellow-300 mb-2 uppercase tracking-wide">Caveats</h3>
                        <div className="space-y-1.5">
                            {newlyRegistered && (
                                <div className="flex items-start gap-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                                    <AlertTriangle className="h-3.5 w-3.5 text-yellow-500 mt-0.5 flex-shrink-0" />
                                    <span>Newly registered domain</span>
                                </div>
                            )}
                            {hiddenWhois && (
                                <div className="flex items-start gap-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                                    <AlertTriangle className="h-3.5 w-3.5 text-yellow-500 mt-0.5 flex-shrink-0" />
                                    <span>WHOIS privacy enabled</span>
                                </div>
                            )}
                            {highRiskIp && (
                                <div className="flex items-start gap-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                                    <AlertTriangle className="h-3.5 w-3.5 text-yellow-500 mt-0.5 flex-shrink-0" />
                                    <span>High IP abuse score</span>
                                </div>
                            )}
                            {poorReputation && (
                                <div className="flex items-start gap-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                                    <AlertTriangle className="h-3.5 w-3.5 text-yellow-500 mt-0.5 flex-shrink-0" />
                                    <span>Some negative public reviews detected</span>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Tip / advice */}
                <div className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/40">
                    <Info className="h-4 w-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                    <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                        {isRisky
                            ? 'Advice: If you plan to transact, verify shipping & returns policy, contact support, and prefer secure payment methods (card/UPI with buyer protection). Consider searching independent review sites before giving payment details.'
                            : 'Tip: For higher-value purchases verify business registration and payment channels; use buyer protection where possible. Use this report to compare key trust signals with other sellers before deciding.'}
                    </p>
                </div>
            </div>
        </section>
    );
}
