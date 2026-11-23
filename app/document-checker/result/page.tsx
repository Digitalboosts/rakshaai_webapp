"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import DefaultLayout from "@/components/DefaultLayout";
import WebsiteTrustReportBody from "@/app/check/components/WebsiteTrustReportBody";
import {
    ShieldCheck,
    ShieldAlert,
    ArrowLeft,
    Loader2,
    CalendarDays,
    IndianRupee,
    User,
    Mail,
    Phone,
    MapPin,
    Briefcase,
    PenLine,
    Hash,
    Link as LinkIcon,
    FileText,
} from "lucide-react";

type DocumentAnalysis = {
    document_type?: string;
    issuing_authority_or_company?: string;
    primary_person_name?: string;
    logo_present?: boolean | null;
    branding_present?: boolean | null;
    signatures_present?: boolean | null;
    seal_or_stamp_present?: boolean | null;
    qr_codes_present?: boolean | null;
    extracted_fields?: Record<string, unknown>;
    email_addresses?: string[];
    phone_numbers?: string[];
    addresses?: string[];
    reference_or_document_numbers?: string[];
    important_dates?: string[];
    urls_and_domains?: string[];
    page_count_reviewed?: number;
    additional_information?: Record<string, unknown>;
    authenticity?: {
        is_suspicious?: boolean;
        confidence?: string;
        suspicious_indicators?: string[];
        logical_inconsistencies?: string[];
        visual_quality_notes?: string;
    };
};

// Mirrors the trust report shape returned by /api/trust-score  the `data`
// field is the full website report (reportData), `slug` is a sibling of
// `data`, not nested inside it.
type BusinessTrustResponse = {
    success?: boolean;
    created?: boolean;
    data?: any;
    slug?: string;
    total_count?: number;
    is_sitemap_ready?: boolean;
    created_at?: string;
    updated_at?: string;
};

type AnalyzeResponse = {
    success?: boolean;
    error?: string;
    document_analysis?: DocumentAnalysis;
    data?: BusinessTrustResponse;
    is_pdf?: boolean;
    metadata?: {
        file_name?: string | null;
        pdf_version?: string | null;
        title?: string | null;
        author?: string | null;
        subject?: string | null;
        keywords?: string | string[] | null;
        producer?: string | null;
        creator?: string | null;
        creation_date?: string | null;
        modification_date?: string | null;
        is_encrypted?: boolean | null;
        page_size?: {
            width_pt?: number | null;
            height_pt?: number | null;
        } | null;
        [key: string]: unknown;
    };
};

function humanizeKey(key: string) {
    // Nested backend fields (e.g. "Institute", "Father`s Name") already arrive
    // human-formatted — only snake_case / all-lowercase keys need reformatting,
    // otherwise re-title-casing would mangle things like "Father`s Name".
    const isSnakeOrLowercase = key.includes("_") || key === key.toLowerCase();
    if (!isSnakeOrLowercase) return key;
    return key
        .replace(/_/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());
}

// Cosmetic fix for backend quirks like "1st June2023"  inserts the missing
// space before a bare 4-digit year that got glued onto a word.
function formatFieldValue(value: unknown) {
    if (typeof value === "boolean") return value ? "Yes" : "No";
    const str = String(value);
    return str.replace(/([A-Za-z])(\d{4})\b/g, "$1 $2");
}

function removeUnavailableMetadata(value: unknown): unknown {
    if (value === null || value === undefined) return undefined;
    if (typeof value === "string" && value.trim() === "") return undefined;

    if (Array.isArray(value)) {
        const availableItems = value
            .map(removeUnavailableMetadata)
            .filter((item) => item !== undefined);
        return availableItems.length > 0 ? availableItems : undefined;
    }

    if (typeof value === "object") {
        const availableEntries = Object.entries(value as Record<string, unknown>)
            .map(([key, nestedValue]) => [key, removeUnavailableMetadata(nestedValue)] as const)
            .filter(([, nestedValue]) => nestedValue !== undefined);
        return availableEntries.length > 0 ? Object.fromEntries(availableEntries) : undefined;
    }

    return value;
}

// Best-effort icon per field based on its key name, so a dynamic bag of
// document fields (which vary by document type) still reads as a designed
// report instead of a raw key/value dump.
function FieldIcon({ label, className }: { label: string; className?: string }) {
    // Match whole words only (after turning "candidate_name" into "candidate name") so
    // "date" doesn't false-positive inside "candidate", "id" inside "provident", etc.
    const k = label.toLowerCase().replace(/_/g, " ");
    if (/\b(date|deadline|period|valid|expiry)\b/.test(k)) return <CalendarDays className={className} />;
    if (/\b(salary|bonus|amount|fee|price|cost|fund|pay|lpa|ctc)\b/.test(k)) return <IndianRupee className={className} />;
    if (/\bemail\b/.test(k)) return <Mail className={className} />;
    if (/\b(phone|mobile|contact)\b/.test(k)) return <Phone className={className} />;
    if (/\b(location|address|city|state)\b/.test(k)) return <MapPin className={className} />;
    if (/\b(signature|sign)\b/.test(k)) return <PenLine className={className} />;
    if (/\b(number|id|reference|ref)\b/.test(k)) return <Hash className={className} />;
    if (/\bname\b/.test(k)) return <User className={className} />;
    if (/\b(title|role|position|type|employment|designation)\b/.test(k)) return <Briefcase className={className} />;
    return <FileText className={className} />;
}

function getDocumentVerdictConfig(isSuspicious: boolean, confidence?: string) {
    if (isSuspicious) {
        return {
            verdict: "Suspicious Document",
            sub: "We found signs of manipulation or inconsistency  verify directly with the issuer before trusting this document.",
            color: "#ef4444",
            light: "#fee2e2",
            percent: 15,
        };
    }
    const conf = (confidence || "").toLowerCase();
    if (conf === "high") {
        return {
            verdict: "Looks Genuine",
            sub: "No signs of tampering or manipulation were detected. This document appears authentic based on our automated analysis.",
            color: "#10b981",
            light: "#d1fae5",
            percent: 95,
        };
    }
    if (conf === "medium") {
        return {
            verdict: "Likely Genuine",
            sub: "No major red flags found, but some details could not be fully verified. Cross-check with the issuer if unsure.",
            color: "#f59e0b",
            light: "#fef3c7",
            percent: 60,
        };
    }
    return {
        verdict: "Needs Manual Review",
        sub: "We couldn't confidently verify this document. Review it manually or confirm directly with the issuer before relying on it.",
        color: "#f59e0b",
        light: "#fef3c7",
        percent: 40,
    };
}

function FieldRow({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex items-start gap-3 py-3 first:pt-0 last:pb-0">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 flex items-center justify-center flex-shrink-0">
                <FieldIcon label={label} className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500">
                    {humanizeKey(label)}
                </p>
                <p className="mt-0.5 text-sm font-medium text-gray-800 dark:text-gray-200 break-words">
                    {formatFieldValue(value)}
                </p>
            </div>
        </div>
    );
}

// Recursively renders one extracted-field entry. Document fields come back as
// an arbitrary bag that can be a plain string, a list, or nested objects
// (e.g. educational_qualification -> per-school records, personal_information
// -> flat name/value pairs) — this walks any depth instead of stringifying
// objects into "[object Object]".
function FieldEntry({ label, value, depth = 0 }: { label: string; value: unknown; depth?: number }) {
    const fullWidth = depth === 0 ? "sm:col-span-2" : "";

    if (value === null || value === undefined || value === "") {
        return <FieldRow label={label} value="—" />;
    }

    if (Array.isArray(value)) {
        // Arrays of records (e.g. "certificates": [{ type, institute, ... }, ...])
        // get one nested card per item instead of a useless JSON-stringified chip.
        const isRecordList = value.length > 0 && value.every((item) => typeof item === "object" && item !== null && !Array.isArray(item));

        if (isRecordList) {
            return (
                <div className={fullWidth}>
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500 mb-2">
                        {humanizeKey(label)}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {value.map((item, i) => (
                            <div
                                key={i}
                                className="rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50/60 dark:bg-gray-800/30 p-4 space-y-3"
                            >
                                {Object.entries(item as Record<string, unknown>).map(([k, v]) => (
                                    <FieldEntry key={k} label={k} value={v} depth={depth + 1} />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            );
        }

        return (
            <div className={fullWidth}>
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500 mb-2">
                    {humanizeKey(label)}
                </p>
                <div className="flex flex-wrap gap-2">
                    {value.map((item, i) => (
                        <span
                            key={i}
                            className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                        >
                            {typeof item === "object" && item !== null ? JSON.stringify(item) : formatFieldValue(item)}
                        </span>
                    ))}
                </div>
            </div>
        );
    }

    if (typeof value === "object") {
        const entries = Object.entries(value as Record<string, unknown>);
        return (
            <div className={fullWidth}>
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500 mb-2">
                    {humanizeKey(label)}
                </p>
                <div className="rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50/60 dark:bg-gray-800/30 p-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                    {entries.map(([k, v]) => (
                        <FieldEntry key={k} label={k} value={v} depth={depth + 1} />
                    ))}
                </div>
            </div>
        );
    }

    const isLongText = typeof value === "string" && value.length > 70;
    return (
        <div className={isLongText ? fullWidth : ""}>
            <FieldRow label={label} value={String(value)} />
        </div>
    );
}

export default function DocumentCheckerResultPage() {
    const [result, setResult] = useState<AnalyzeResponse | null>(null);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        const stored = sessionStorage.getItem("document-analysis-result");
        if (!stored) {
            setNotFound(true);
            return;
        }
        try {
            setResult(JSON.parse(stored));
        } catch {
            setNotFound(true);
        }
    }, []);

    if (notFound) {
        return (
            <DefaultLayout>
                <div className="min-h-[60vh] flex items-center justify-center px-4">
                    <div className="max-w-md w-full text-center">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
                            <ShieldAlert className="w-8 h-8 text-yellow-500" />
                        </div>
                        <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-2">No Analysis Found</h1>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                            We couldn&apos;t find a document analysis result. Please upload a document first.
                        </p>
                        <Link
                            href="/document-checker"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Upload a Document
                        </Link>
                    </div>
                </div>
            </DefaultLayout>
        );
    }

    if (!result) {
        return (
            <DefaultLayout>
                <div className="min-h-[60vh] flex items-center justify-center">
                    <Loader2 className="h-8 w-8 text-indigo-500 animate-spin" />
                </div>
            </DefaultLayout>
        );
    }

    const doc = result.document_analysis || {};
    const businessResponse = result.data;
    const reportData = businessResponse?.data;
    const slug = businessResponse?.slug;
    const authenticity = doc.authenticity || {};
    const isSuspicious = !!authenticity.is_suspicious;

    const extractedFieldEntries = Object.entries(doc.extracted_fields || {});
    const additionalInfoEntries = Object.entries(doc.additional_information || {});
    const availableMetadata = removeUnavailableMetadata(result.metadata);
    const metadataEntries = availableMetadata && typeof availableMetadata === "object"
        ? Object.entries(availableMetadata as Record<string, unknown>)
        : [];

    const domain =
        slug ||
        doc.issuing_authority_or_company ||
        reportData?.url_details?.complete_domain ||
        "the issuing company";

    const docConfig = getDocumentVerdictConfig(isSuspicious, authenticity.confidence);
    const flagCount = (authenticity.suspicious_indicators?.length || 0) + (authenticity.logical_inconsistencies?.length || 0);
    const presenceFlags: { label: string; value?: boolean | null }[] = [
        { label: "Logo", value: doc.logo_present },
        { label: "Branding", value: doc.branding_present },
        { label: "Signatures", value: doc.signatures_present },
        { label: "Seal/Stamp", value: doc.seal_or_stamp_present },
        { label: "QR Code", value: doc.qr_codes_present },
    ];

    return (
        <DefaultLayout>
            {/* ═══════════════════════════════════════════════════
                HERO  Document verdict command panel
            ═══════════════════════════════════════════════════ */}
            <section className="relative overflow-hidden bg-slate-50 dark:bg-gray-950">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent dark:from-gray-900" />
                    <div
                        className="absolute -right-28 top-10 h-72 w-72 rounded-full blur-3xl opacity-30"
                        style={{ backgroundColor: docConfig.color }}
                    />
                    <div className="absolute left-0 top-0 h-full w-full opacity-[0.38] dark:opacity-[0.18] bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:44px_44px]" />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-50 to-transparent dark:from-gray-950" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
                    <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 lg:gap-8 items-stretch">
                        <div className="rounded-3xl bg-white/90 dark:bg-gray-900/75 border border-white dark:border-gray-800 shadow-xl shadow-slate-200/60 dark:shadow-black/20 p-6 sm:p-8 lg:p-10">
                            <div className="flex flex-wrap items-center gap-3 mb-7">
                                <span
                                    className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em]"
                                    style={{ color: docConfig.color, backgroundColor: `${docConfig.light}90` }}
                                >
                                    <span className="h-2 w-2 rounded-full" style={{ backgroundColor: docConfig.color }} />
                                    Document analysis result
                                </span>
                                {authenticity.confidence && (
                                    <span className="rounded-full bg-slate-100 dark:bg-gray-800 px-3 py-1.5 text-xs font-semibold text-slate-500 dark:text-gray-400 capitalize">
                                        Confidence: {authenticity.confidence}
                                    </span>
                                )}
                            </div>

                            {doc.issuing_authority_or_company && (
                                <p className="mb-3 max-w-full break-words text-sm font-semibold text-slate-500 dark:text-gray-400">
                                    Issued by {doc.issuing_authority_or_company}
                                    {doc.primary_person_name ? <> for {doc.primary_person_name}</> : null}
                                </p>
                            )}
                            <h1 className="max-w-2xl text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.05] text-slate-950 dark:text-white capitalize">
                                {doc.document_type || "Document"} Verification
                            </h1>

                            <div className="mt-5 flex flex-wrap items-center gap-3">
                                <span
                                    className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-base sm:text-lg font-extrabold text-white shadow-lg"
                                    style={{ backgroundColor: docConfig.color, boxShadow: `0 18px 35px ${docConfig.color}30` }}
                                >
                                    {isSuspicious ? <ShieldAlert className="h-5 w-5" /> : <ShieldCheck className="h-5 w-5" />}
                                    {docConfig.verdict}
                                </span>
                            </div>

                            <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600 dark:text-gray-300">
                                {docConfig.sub}
                            </p>
                            {authenticity.visual_quality_notes && (
                                <p className="mt-3 text-sm text-slate-500 dark:text-gray-400">{authenticity.visual_quality_notes}</p>
                            )}

                            <div className="mt-8 flex flex-col sm:flex-row gap-3">
                                <Link
                                    href="/document-checker"
                                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-gray-600"
                                >
                                    <ArrowLeft className="h-4 w-4" />
                                    Analyze Another Document
                                </Link>
                            </div>
                        </div>

                        <div className="relative overflow-hidden rounded-3xl border border-violet-100 bg-white p-5 sm:p-6 text-slate-950 shadow-xl shadow-violet-100/80 dark:border-violet-900/50 dark:bg-gray-900">
                            <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-violet-200/60 blur-3xl dark:bg-violet-900/30" />
                            <div className="absolute -bottom-24 left-8 h-56 w-56 rounded-full bg-orange-100/80 blur-3xl dark:bg-orange-900/20" />
                            <div className="mb-5">
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-500 dark:text-violet-300">Authenticity meter</p>
                                <p className="mt-1 text-lg font-bold text-slate-950 dark:text-white">Document integrity scan</p>
                            </div>

                            <div className="relative grid sm:grid-cols-[180px_1fr] gap-5 items-center">
                                <div className="mx-auto sm:mx-0">
                                    <div
                                        className="relative grid h-44 w-44 place-items-center rounded-full shadow-inner"
                                        style={{ background: `conic-gradient(${docConfig.color} ${docConfig.percent}%, #ede9fe ${docConfig.percent}% 100%)` }}
                                    >
                                        <div className="grid h-32 w-32 place-items-center rounded-full bg-white shadow-lg ring-1 ring-violet-100 dark:bg-gray-900 dark:ring-violet-900/50">
                                            <div className="text-center">
                                                {isSuspicious ? (
                                                    <ShieldAlert className="h-8 w-8 mx-auto mb-1" style={{ color: docConfig.color }} />
                                                ) : (
                                                    <ShieldCheck className="h-8 w-8 mx-auto mb-1" style={{ color: docConfig.color }} />
                                                )}
                                                <div className="text-sm font-bold text-slate-500 dark:text-gray-400 capitalize">
                                                    {authenticity.confidence || "Unknown"}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="rounded-2xl border border-violet-100 bg-violet-50/70 p-4 dark:border-violet-900/50 dark:bg-violet-950/30">
                                            <p className="text-xs font-semibold uppercase tracking-wider text-violet-500 dark:text-violet-300">Fields Found</p>
                                            <p className="mt-2 text-lg font-black text-slate-950 dark:text-white">{extractedFieldEntries.length}</p>
                                        </div>
                                        <div className="rounded-2xl border border-orange-100 bg-orange-50/70 p-4 dark:border-orange-900/50 dark:bg-orange-950/30">
                                            <p className="text-xs font-semibold uppercase tracking-wider text-orange-500 dark:text-orange-300">Flags Raised</p>
                                            <p className={`mt-2 text-lg font-black ${flagCount > 0 ? "text-red-600 dark:text-red-300" : "text-emerald-600 dark:text-emerald-300"}`}>
                                                {flagCount > 0 ? flagCount : "None"}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative mt-5 rounded-2xl border border-violet-100 bg-gradient-to-r from-violet-50 via-white to-orange-50 p-4 dark:border-violet-900/50 dark:from-violet-950/30 dark:via-gray-900 dark:to-orange-950/20">
                                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-violet-500 dark:text-violet-300">Visual checks</p>
                                <div className="grid grid-cols-3 gap-3 text-center">
                                    {presenceFlags.slice(0, 3).map((flag) => (
                                        <div key={flag.label}>
                                            <p className="text-xs text-slate-500 dark:text-gray-400">{flag.label}</p>
                                            <p className={`mt-1 text-sm font-bold ${flag.value == null ? "text-slate-400 dark:text-gray-500" : flag.value ? "text-emerald-600 dark:text-emerald-300" : "text-red-600 dark:text-red-300"}`}>
                                                {flag.value == null ? "" : flag.value ? "Present" : "Missing"}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                <div className="grid grid-cols-2 gap-3 text-center mt-3">
                                    {presenceFlags.slice(3).map((flag) => (
                                        <div key={flag.label}>
                                            <p className="text-xs text-slate-500 dark:text-gray-400">{flag.label}</p>
                                            <p className={`mt-1 text-sm font-bold ${flag.value == null ? "text-slate-400 dark:text-gray-500" : flag.value ? "text-emerald-600 dark:text-emerald-300" : "text-red-600 dark:text-red-300"}`}>
                                                {flag.value == null ? "" : flag.value ? "Present" : "Missing"}
                                            </p>
                                        </div>
                                    ))}
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
                            <p className="mt-2 text-lg font-black text-slate-950 dark:text-white">{docConfig.verdict}</p>
                        </div>
                        <div className="rounded-2xl bg-slate-50 p-4 dark:bg-gray-800/60">
                            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-gray-500">Fields Extracted</p>
                            <p className="mt-2 text-lg font-black text-slate-950 dark:text-white">{extractedFieldEntries.length}</p>
                        </div>
                        <div className="rounded-2xl bg-slate-50 p-4 dark:bg-gray-800/60">
                            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-gray-500">Pages Reviewed</p>
                            <p className="mt-2 text-lg font-black text-slate-950 dark:text-white">{doc.page_count_reviewed ?? ""}</p>
                        </div>
                        <div className="rounded-2xl bg-slate-50 p-4 dark:bg-gray-800/60">
                            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-gray-500">Next Step</p>
                            <Link href="/document-checker" className="mt-2 inline-flex items-center gap-2 text-lg font-black text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300">
                                Check another doc
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-slate-50 dark:bg-gray-950 pb-10 sm:pb-14">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Authenticity flags */}
                    {(authenticity.suspicious_indicators?.length || authenticity.logical_inconsistencies?.length) ? (
                        <div className="mt-6 rounded-2xl border border-red-200 dark:border-red-900/50 bg-red-50 dark:bg-red-950/20 p-6">
                            <h2 className="text-lg font-bold text-red-700 dark:text-red-400 mb-3">Flags Detected</h2>
                            <ul className="space-y-2 text-sm text-red-700 dark:text-red-300 list-disc list-inside">
                                {authenticity.suspicious_indicators?.map((item, i) => <li key={`si-${i}`}>{item}</li>)}
                                {authenticity.logical_inconsistencies?.map((item, i) => <li key={`li-${i}`}>{item}</li>)}
                            </ul>
                        </div>
                    ) : null}

                    {/* Extracted fields */}
                    {extractedFieldEntries.length > 0 && (
                        <div className="mt-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 sm:p-8">
                            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Extracted Details</h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                                {extractedFieldEntries.length} field{extractedFieldEntries.length === 1 ? "" : "s"} read directly from the document
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-8 gap-y-1">
                                {extractedFieldEntries.map(([key, value]) => (
                                    <FieldEntry key={key} label={key} value={value} />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Additional information (e.g. salary components, appendices) */}
                    {additionalInfoEntries.length > 0 && (
                        <div className="mt-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 sm:p-8">
                            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-5">Additional Information</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-8 gap-y-1">
                                {additionalInfoEntries.map(([key, value]) => (
                                    <FieldEntry key={key} label={key} value={value} />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Source file and PDF metadata */}
                    {metadataEntries.length > 0 && (
                        <div className="mt-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 sm:p-8">
                            <div className="mb-5">
                                <h2 className="text-lg font-bold text-gray-900 dark:text-white">Document Metadata</h2>
                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                    Technical properties read from the uploaded {result.is_pdf ? "PDF" : "document"}
                                </p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-8 gap-y-1">
                                {metadataEntries.map(([key, value]) => (
                                    <FieldEntry key={key} label={key} value={value} />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Contact / reference info */}
                    {(doc.email_addresses?.length || doc.phone_numbers?.length || doc.addresses?.length || doc.reference_or_document_numbers?.length || doc.important_dates?.length || doc.urls_and_domains?.length) ? (
                        <div className="mt-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 sm:p-8">
                            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Contact &amp; Reference Info</h2>
                            <div className="divide-y divide-gray-100 dark:divide-gray-800">
                                {!!doc.email_addresses?.length && (
                                    <div className="flex items-start gap-3 py-3 first:pt-0">
                                        <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 flex items-center justify-center flex-shrink-0">
                                            <Mail className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500">Emails</p>
                                            <p className="mt-0.5 text-sm font-medium text-gray-800 dark:text-gray-200 break-words">{doc.email_addresses.join(", ")}</p>
                                        </div>
                                    </div>
                                )}
                                {!!doc.phone_numbers?.length && (
                                    <div className="flex items-start gap-3 py-3 first:pt-0">
                                        <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 flex items-center justify-center flex-shrink-0">
                                            <Phone className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500">Phone Numbers</p>
                                            <p className="mt-0.5 text-sm font-medium text-gray-800 dark:text-gray-200 break-words">{doc.phone_numbers.join(", ")}</p>
                                        </div>
                                    </div>
                                )}
                                {!!doc.addresses?.length && (
                                    <div className="flex items-start gap-3 py-3 first:pt-0">
                                        <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500">Addresses</p>
                                            <p className="mt-0.5 text-sm font-medium text-gray-800 dark:text-gray-200 break-words">{doc.addresses.join(", ")}</p>
                                        </div>
                                    </div>
                                )}
                                {!!doc.reference_or_document_numbers?.length && (
                                    <div className="flex items-start gap-3 py-3 first:pt-0">
                                        <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 flex items-center justify-center flex-shrink-0">
                                            <Hash className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500">Reference Numbers</p>
                                            <p className="mt-0.5 text-sm font-medium text-gray-800 dark:text-gray-200 break-words">{doc.reference_or_document_numbers.join(", ")}</p>
                                        </div>
                                    </div>
                                )}
                                {!!doc.important_dates?.length && (
                                    <div className="flex items-start gap-3 py-3 first:pt-0">
                                        <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 flex items-center justify-center flex-shrink-0">
                                            <CalendarDays className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500">Important Dates</p>
                                            <p className="mt-0.5 text-sm font-medium text-gray-800 dark:text-gray-200 break-words">{doc.important_dates.map(formatFieldValue).join(", ")}</p>
                                        </div>
                                    </div>
                                )}
                                {!!doc.urls_and_domains?.length && (
                                    <div className="flex items-start gap-3 py-3 first:pt-0">
                                        <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 flex items-center justify-center flex-shrink-0">
                                            <LinkIcon className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500">URLs / Domains</p>
                                            <p className="mt-0.5 text-sm font-medium text-gray-800 dark:text-gray-200 break-words">{doc.urls_and_domains.join(", ")}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ) : null}

                    <div className="mt-8 flex justify-center">
                        <Link
                            href="/document-checker"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Analyze Another Document
                        </Link>
                    </div>
                </div>
            </section>

            {/* Full website trust report for the issuing company, when detected */}
            {reportData && (
                <WebsiteTrustReportBody
                    reportData={reportData}
                    domain={domain}
                    slug={slug}
                    createdAt={businessResponse?.created_at}
                    updatedAt={businessResponse?.updated_at}
                    totalCount={businessResponse?.total_count}
                    registeredBusiness={reportData?.registered_business}
                    analyzedUrl={slug}
                    pageTitle={`Is ${domain} Safe? Website Review, Trust Score & Scam Check | RakshaAI`}
                />
            )}
        </DefaultLayout>
    );
}
