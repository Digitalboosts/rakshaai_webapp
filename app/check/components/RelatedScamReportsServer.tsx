import React from 'react';
import { AlertCircle, CheckCircle2, Clock, ExternalLink, Globe, Info, MessageSquareQuote, Phone, ShieldCheck, UserCheck } from 'lucide-react';

function TrustLevelBadge({ level, percentage, score, total }: { level?: string; percentage?: number; score?: number; total?: number }) {
    if (!level && typeof percentage !== 'number') return null;
    return (
        <div className="inline-flex items-center gap-3 text-xs">
            <div className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200">
                <h3 className="font-medium m-0">{level ?? '-'}</h3>
            </div>
            <div className="px-2 py-1 rounded bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-300">
                <p className="m-0">{typeof percentage === 'number' ? `${Math.round(percentage)}%` : '-'}</p>
            </div>
            {typeof score === 'number' && (
                <div className="px-2 py-1 rounded bg-white dark:bg-gray-800 text-xs text-gray-600 dark:text-gray-300">Score: {Math.round(score)}</div>
            )}
            {typeof total === 'number' && (
                <div className="px-2 py-1 rounded bg-white dark:bg-gray-800 text-xs text-gray-600 dark:text-gray-300">Total: {total}</div>
            )}
        </div>
    );
}

function formatDate(d?: string | number) {
    if (!d) return '';
    try {
        const date = new Date(d);
        return date.toLocaleDateString();
    } catch {
        return String(d);
    }
}

function statusBadgeClass(status?: string) {
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
}

export default function RelatedScamReportsServer({ reports, status }: { reports?: any[]; status?: any }) {
    if (!Array.isArray(reports) || reports.length === 0) return null;

    return (
        <section>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
                            <AlertCircle aria-hidden="true" className="h-5 w-5 text-white" />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Community Reports ({reports.length})</h2>
                            <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">{reports.length} user report{reports.length > 1 ? 's' : ''} found</p>
                        </div>
                    </div>
                </div>

                {status && (
                    <div className="mb-6">
                        <TrustLevelBadge
                            level={status.trust_level}
                            percentage={status.trust_percentage}
                            score={status.trust_score}
                            total={status.total_number_of_reviews}
                        />
                    </div>
                )}

                <div className="space-y-4">
                    {reports.map((report: any, index: number) => (
                        <div key={report.id ?? index} className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 group hover:border-blue-300 dark:hover:border-blue-600">
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex-1">
                                            <div className="flex items-center space-x-2 mb-2">
                                                <h3 className="font-bold text-gray-900 dark:text-white m-0">{report.name}</h3>
                                                <span className={`text-xs px-2 py-1 rounded-full font-medium ${report.submission_type === 'upi'
                                            ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                                            : report.submission_type === 'phone'
                                                ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                                                : 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
                                            }`}
                                        >
                                            {String(report.submission_type || '').toUpperCase()}
                                        </span>
                                        {report.status && (
                                            <span className={`text-xs px-2 py-1 rounded-full font-medium ${statusBadgeClass(report.status)}`}>
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
                                                <ShieldCheck className="h-3 w-3" /> {report.upi_id}
                                            </span>
                                        )}
                                        {(report.website_slug || report.website_url) && (
                                            <span className="inline-flex items-center gap-1 rounded-full bg-gray-50 dark:bg-gray-700 px-2 py-1 border border-gray-200 dark:border-gray-600">
                                                <Globe className="h-3 w-3" /> {report.website_slug || report.website_url}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2 text-xs text-gray-500">
                                    <Clock aria-hidden="true" className="h-3 w-3 text-gray-400" />
                                    <time dateTime={report.created_at}>{formatDate(report.created_at)}</time>
                                </div>
                            </div>

                            <div className="mb-4 p-4 bg-gray-50 dark:bg-gray-700/40 rounded-lg border-l-4 border-blue-400">
                                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{report.review}</p>
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
                                    <div className="flex items-start gap-2">
                                        <MessageSquareQuote className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                                        <p className="text-sm text-emerald-900 dark:text-emerald-100 leading-relaxed m-0">{report.business_owner_response}</p>
                                    </div>
                                    {report.business_owner_document && (
                                        <div className="mt-3">
                                            <a
                                                href={report.business_owner_document}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center gap-1.5 text-xs bg-white hover:bg-emerald-100 dark:bg-emerald-900/20 dark:hover:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 px-3 py-1.5 rounded-lg font-medium transition-colors border border-emerald-200 dark:border-emerald-800"
                                            >
                                                <ExternalLink className="h-3 w-3" /> View Business Proof
                                            </a>
                                        </div>
                                    )}
                                </div>
                            )}

                            <div className="flex flex-wrap items-center gap-4">
                                {report.attachment ? (
                                    // If attachment is a URL, provide a link; otherwise render a disabled label
                                    typeof report.attachment === 'string' && (report.attachment.startsWith('http://') || report.attachment.startsWith('https://')) ? (
                                        <a href={report.attachment} target="_blank" rel="noreferrer" className="text-xs bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/40 text-blue-600 dark:text-blue-400 px-3 py-1.5 rounded-lg font-medium transition-colors border border-blue-200 dark:border-blue-800">View Evidence</a>
                                    ) : (
                                        <span className="text-xs bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-lg text-gray-600">Evidence attached</span>
                                    )
                                ) : null}

                                {report.resolution_details && (
                                    <div className="text-xs flex items-center">
                                        <h3 className="text-green-600 dark:text-green-400 font-medium m-0 mr-1 text-xs inline-flex items-center gap-1"><CheckCircle2 className="h-3 w-3" /> Resolution:</h3>
                                        <p className="text-gray-600 dark:text-gray-400 m-0 text-xs">{report.resolution_details}</p>
                                    </div>
                                )}

                                {report.resolved_at && (
                                    <span className="text-xs text-gray-500 dark:text-gray-400">Resolved on {formatDate(report.resolved_at)}</span>
                                )}

                                {report.updated_at && (
                                    <span className="text-xs text-gray-400 dark:text-gray-500">Updated {formatDate(report.updated_at)}</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
                    <div className="flex items-start space-x-2">
                        <Info aria-hidden="true" className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                        <div>
                            <p className="text-sm font-medium text-blue-900 dark:text-blue-100 mb-1">Community Safety Initiative</p>
                            <p className="text-xs text-blue-700 dark:text-blue-300 leading-relaxed">These reports are voluntarily submitted by users to help identify potential security threats and protect the community from fraudulent activities.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
