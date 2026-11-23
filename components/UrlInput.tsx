"use client";

import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { Search, Shield, CheckCircle, Globe2, Lock, Zap, Brain, Database, Wifi, FileCheck2, Paperclip, X, PhoneCall, IndianRupee } from "lucide-react";
import { motion, AnimatePresence } from "@/components/ui/NoMotion";
import { getUserId } from "@/lib/userId";
import { useToast } from "./ui/Toast";

const DOCUMENT_MAX_FILE_SIZE = 15 * 1024 * 1024; // 15MB
const DOCUMENT_ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp", "application/pdf"];

class TrustScoreRequestError extends Error {
    code?: string;

    constructor(message: string, code?: string) {
        super(message);
        this.name = "TrustScoreRequestError";
        this.code = code;
    }
}

interface UrlInputProps {
    initialType?: "is_website" | "is_phone" | "is_upi" | "is_document";
    content?: {
        placeholder: string;
        buttonText: string;
        analyzing: string;
        description: string;
        errors: {
            enterUrl: string;
            generalError: string;
            noSlug: string;
            suggestionError: string;
            suggestionGeneralError: string;
        };
        suggestions: {
            title: string;
            busyMessage: string;
        };
    };
}

export default function UrlInput({ content, initialType = "is_website" }: UrlInputProps) {
    // Default English content
    const defaultContent = {
        placeholder: "Paste a link, UPI ID, or phone number  we'll check it for you",
        buttonText: "Check Now",
        analyzing: "Analyzing...",
        description: "We check if it's safe before you click or pay  free, instant, no login needed",
        errors: {
            enterUrl: "Please enter a URL or text",
            generalError: "We're having trouble analyzing this website right now. Please try again in a moment.",
            noSlug: "We're having trouble analyzing this website right now. Please try again in a moment.",
            suggestionError: "We couldn't analyze this suggestion. Please try selecting a different option.",
            suggestionGeneralError: "We're having trouble analyzing this suggestion. Please try again or select a different option."
        },
        suggestions: {
            title: "Did you mean one of these websites?",
            busyMessage: "Our system is temporarily busy due to high traffic. Please try again in a few moments."
        }
    };
    const { addToast } = useToast();

    const t = content || defaultContent;
    const [url, setUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [suggestions, setSuggestions] = useState<Array<{ link: string; title: string; snippet?: string }>>([]);
    const [showNoSuggestions, setShowNoSuggestions] = useState(false);
    const [safeSignal, setSafeSignal] = useState<{ type: 'phone' | 'upi'; value: string } | null>(null);
    const [suggestionLoading, setSuggestionLoading] = useState(false);
    const [inputType, setInputType] = useState<string>(initialType);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const textInputRef = useRef<HTMLInputElement>(null);

    const handleFileSelect = (selected: File | null) => {
        setError("");
        if (!selected) return;
        if (!DOCUMENT_ACCEPTED_TYPES.includes(selected.type)) {
            setError("Please upload a JPG, PNG, WEBP image or a PDF file.");
            return;
        }
        if (selected.size > DOCUMENT_MAX_FILE_SIZE) {
            setError("File is too large. Maximum size is 15MB.");
            return;
        }
        setSelectedFile(selected);
    };
    // Regex-based input type detection
    const detectInputType = (input: string): string | null => {
        const trimmed = input.trim();
        // UPI regex (simple): something@bank
        const upiRegex = /^[\w.-]+@[\w.-]+$/i;
        // Indian phone number: 10 digits, starts with 6-9
        const phoneRegex = /^(\+91[\-\s]?)?[6-9]\d{9}$/;
        // URL regex (basic)
        const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$/i;

        if (upiRegex.test(trimmed)) return "is_upi";
        if (phoneRegex.test(trimmed)) return "is_phone";
        if (urlRegex.test(trimmed)) return "is_website";
        return null;
    };

    // Keep the selected mode visible while the field is empty or incomplete, but
    // switch automatically when a complete URL, phone number, or UPI ID is pasted.
    useEffect(() => {
        const detectedType = url ? detectInputType(url) : null;
        if (detectedType) setInputType(detectedType);
    }, [url]);

    // Tab options and small subcomponent for clarity
    type TabOption = { label: string; type: string; icon: React.ReactElement };

    const tabOptions: TabOption[] = [
        {
            label: "Website",
            type: "is_website",
            icon: <Globe2 className="h-[18px] w-[18px] transition-colors duration-200" strokeWidth={2.15} />
        },
        {
            label: "Phone",
            type: "is_phone",
            icon: <PhoneCall className="h-[18px] w-[18px] transition-colors duration-200" strokeWidth={2.15} />
        },
        {
            label: "UPI",
            type: "is_upi",
            icon: <IndianRupee className="h-[18px] w-[18px] transition-colors duration-200" strokeWidth={2.2} />
        },
        {
            label: "Document",
            type: "is_document",
            icon: <FileCheck2 className="h-[18px] w-[18px] transition-colors duration-200" strokeWidth={2.15} />
        },
    ];

    const TabButton = ({ tab }: { tab: TabOption }) => {
        const isActive = inputType === tab.type;

        return (
            <button
                type="button"
                aria-pressed={isActive}
                onClick={() => {
                    setInputType(tab.type);
                    setError("");
                    if (tab.type !== "is_document") {
                        setSelectedFile(null);
                        if (fileInputRef.current) fileInputRef.current.value = "";
                        requestAnimationFrame(() => textInputRef.current?.focus());
                    }
                }}
                className={`
                    group flex min-w-0 items-center justify-center gap-1.5 rounded-xl border px-2 py-2
                    text-xs font-bold transition-all duration-200 cursor-pointer select-none sm:px-3
                    ${isActive
                        ? 'border-violet-600 bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-200/80 dark:border-violet-500 dark:shadow-none'
                        : 'border-gray-200 bg-white text-gray-600 shadow-sm hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-violet-700 dark:hover:bg-violet-950/40'
                    }
                `}
            >
                <span className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg transition-colors ${
                    isActive
                        ? "bg-white/15 text-white"
                        : "bg-gray-100 text-gray-500 group-hover:bg-violet-100 group-hover:text-violet-700 dark:bg-gray-800 dark:text-gray-300"
                }`}>
                    {tab.icon}
                </span>
                <span className="truncate">
                    {tab.label}
                </span>
            </button>
        );
    };

    const modeCopy: Record<string, { label: string; placeholder: string; hint: string }> = {
        is_website: {
            label: "Website address",
            placeholder: "Paste a website link, e.g. example.com",
            hint: "Paste the full link or domain name",
        },
        is_phone: {
            label: "Phone number",
            placeholder: "Enter a 10-digit phone number",
            hint: "Indian mobile numbers, with or without +91",
        },
        is_upi: {
            label: "UPI ID",
            placeholder: "Enter a UPI ID, e.g. name@bank",
            hint: "Enter the exact payment ID before sending money",
        },
        is_document: {
            label: "Document",
            placeholder: "Choose a document to upload",
            hint: "JPG, PNG, WEBP or PDF · Maximum 15 MB",
        },
    };

    const activeMode = modeCopy[inputType] || modeCopy.is_website;
    const activeInputIcon = inputType === "is_phone"
        ? <PhoneCall className="h-[18px] w-[18px]" strokeWidth={2.15} />
        : inputType === "is_upi"
            ? <IndianRupee className="h-[18px] w-[18px]" strokeWidth={2.2} />
            : <Globe2 className="h-[18px] w-[18px]" strokeWidth={2.15} />;

    const router = useRouter();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const query = params.get('query') || params.get('q');
        if (query) {
            setUrl(query);
        }
    }, []);

    useEffect(() => {
        localStorage.removeItem("trust-score-result");
    }, []);

    // API call helper with proper error handling
    const redirectToLogin = () => {
        const next = `${window.location.pathname}${window.location.search}`;
        router.push(`/login?next=${encodeURIComponent(next)}`);
    };

    const performApiCall = async (urlToCheck: string, inputType: string | null) => {
        const userId = getUserId();

        // Build inputType object: { is_website: true } or { is_upi: true } or { is_phone: true }
        const inputTypeObj = inputType ? { [inputType]: true } : {};
        const response = await fetch("/api/trust-score", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                url: urlToCheck,
                ...inputTypeObj,
                userId
            }),
        });

        const result = await response.json();
        if (response.status === 401 || result?.code === "AUTH_REQUIRED") {
            redirectToLogin();
            throw new TrustScoreRequestError("Please log in to continue.", "AUTH_REQUIRED");
        }
        if (result?.found === false) {
            return result;
        }

        if (result?.error_code === "SITE_NOT_LIVE") {
            throw new TrustScoreRequestError(
                "This website appears to be offline or unreachable right now.",
                "SITE_NOT_LIVE"
            );
        }

        if (!response.ok) {
            throw new TrustScoreRequestError(
                result.error || result.message || t.errors.generalError,
                result.error_code
            );
        }

        return result;
    };

    const handleDocumentSubmit = async () => {
        setError("");

        if (!selectedFile) {
            setError("Please attach a document to check");
            return;
        }

        setLoading(true);

        try {
            const formData = new FormData();
            formData.append("document", selectedFile);

            const response = await fetch("/api/document-analyze", {
                method: "POST",
                body: formData,
            });

            const result = await response.json();

            // AUTH_REQUIRED is added by our proxy only when the RakshaAI user
            // session is invalid. Do not treat a document-service 401 as a
            // reason to discard an otherwise valid app session.
            if (result?.code === "AUTH_REQUIRED") {
                redirectToLogin();
                return;
            }

            if (!response.ok) {
                throw new Error(result?.error || t.errors.generalError);
            }

            sessionStorage.setItem("document-analysis-result", JSON.stringify(result));
            router.push("/document-checker/result");
        } catch (err) {
            const message = err instanceof Error ? err.message : t.errors.generalError;
            setError(message);
            addToast("error", message);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault();

        if (inputType === "is_document") {
            await handleDocumentSubmit();
            return;
        }

        const trimmedUrl = url.trim(); // 👈 ADD THIS

        setError("");
        setSuggestions([]);
        setShowNoSuggestions(false);
        setSafeSignal(null);

        // Validation
        if (!trimmedUrl) {
            setError(t.errors.enterUrl);
            return;
        }

        setLoading(true);

        try {
            const result = await performApiCall(trimmedUrl, inputType);
            if (result?.found === false) {
                const detectedType = result.detected_type === 'upi' ? 'upi' : 'phone';
                setSafeSignal({ type: detectedType, value: trimmedUrl });
                return;
            }
            // Handle suggestions
            if (result.related_urls && Array.isArray(result.related_urls)) {
                setSuggestions(result.related_urls);
                if (result.related_urls.length === 0) {
                    setShowNoSuggestions(true);
                }
                return;
            }

            // Handle successful analysis
            let data, slug;

            if (result.detected_type === 'upi') {
                // For UPI responses, the data structure is different
                data = {
                    trust_score: 5, // UPI reports use neutral score of 5 (moderate)
                    total_number_of_reviews: result.total_reports || 0
                };
                slug = result.slug;
            } else if (result.detected_type === 'phone') {
                // For Phone responses, the data structure is different
                data = {
                    trust_score: 5, // Phone reports use neutral score of 5 (moderate)
                    total_number_of_reviews: result.total_reports || 0
                };
                slug = result.slug;
            } else {
                // For website responses
                data = result.data;
                slug = result.slug;
            }

            // Save to history - only for website searches, not UPI or phone
            if (typeof window !== "undefined" && data && result.detected_type !== 'upi' && result.detected_type !== 'phone') {
                const history = JSON.parse(localStorage.getItem("scam-detector-history") || "[]") as Array<{ url: string }>;
                let trustLevel = "";
                if (data.trust_score >= 8) {
                    trustLevel = "trusted";
                } else if (data.trust_score >= 5) {
                    trustLevel = "caution";
                } else {
                    trustLevel = "risky";
                }

                const newEntry = {
                    url: trimmedUrl,
                    score: data.trust_percentage,
                    timestamp: Date.now(),
                    trustLevel: trustLevel,
                    slug: slug,
                    detected_type: result.detected_type
                };
                const updatedHistory = [newEntry, ...history.filter((item) => item.url !== url)].slice(0, 20);
                localStorage.setItem("scam-detector-history", JSON.stringify(updatedHistory));
                window.dispatchEvent(new CustomEvent("historyUpdated"));
            }

            // Navigate to results
            if (slug) {
                if (result.detected_type === 'phone') {
                    localStorage.setItem("phone-report-result", JSON.stringify(result));
                    router.push(`/phone-number-validator/${slug}`);
                } else if (result.detected_type === 'upi') {
                    localStorage.setItem("upi-report-result", JSON.stringify(result));
                    router.push(`/upi-id-checker/${slug}`);
                } else {
                    localStorage.setItem("trust-score-result", JSON.stringify(result));
                    router.push(`/check/${slug}`);
                }
            } else {
                setError(t.errors.noSlug);
            }
        } catch (err) {
            if (err instanceof TrustScoreRequestError && err.code === "SITE_NOT_LIVE") {
                addToast(
                    "warning",
                    "This website is currently offline or unreachable. Check the URL for typing mistakes and try again later.",
                    7000
                );
            } else {
                setError(err instanceof Error ? err.message : t.errors.generalError);
            }
        } finally {
            setLoading(false);
        }
    };

    // Handle suggestion click
    const handleSuggestionClick = async (suggestionUrl: string) => {
        setLoading(true);
        setSuggestionLoading(true);
        setError("");
        setSuggestions([]);
        setUrl(suggestionUrl);

        try {
            const result = await performApiCall(suggestionUrl, inputType);
            let data, slug;

            if (result.detected_type === 'upi') {
                // For UPI responses, the data structure is different
                data = {
                    trust_score: 5, // UPI reports use neutral score of 5 (moderate)
                    total_number_of_reviews: result.total_reports || 0
                };
                slug = result.slug;
            } else if (result.detected_type === 'phone') {
                // For Phone responses, the data structure is different
                data = {
                    trust_score: 5, // Phone reports use neutral score of 5 (moderate)
                    total_number_of_reviews: result.total_reports || 0
                };
                slug = result.slug;
            } else {
                // For website responses
                data = result.data;
                slug = result.slug;
            }

            // Save to history - only for website searches, not UPI or phone
            if (typeof window !== "undefined" && data && result.detected_type !== 'upi' && result.detected_type !== 'phone') {
                const history = JSON.parse(localStorage.getItem("scam-detector-history") || "[]") as Array<{ url: string }>;
                const newEntry = {
                    url: suggestionUrl,
                    score: data.trust_percentage,
                    timestamp: Date.now(),
                    trustLevel: data.trust_score >= 8 ? "trusted" : data.trust_score >= 5 ? "caution" : "risky",
                    slug: slug,
                    detected_type: result.detected_type
                };
                const updatedHistory = [newEntry, ...history.filter((item) => item.url !== suggestionUrl)].slice(0, 20);
                localStorage.setItem("scam-detector-history", JSON.stringify(updatedHistory));
                window.dispatchEvent(new CustomEvent("historyUpdated"));
            }

            // Navigate to results
            if (slug) {
                if (result.detected_type === 'phone') {
                    localStorage.setItem("phone-report-result", JSON.stringify(result));
                    router.push(`/phone-number-validator/${slug}`);
                } else if (result.detected_type === 'upi') {
                    localStorage.setItem("upi-report-result", JSON.stringify(result));
                    router.push(`/upi-id-checker/${slug}`);
                } else {
                    localStorage.setItem("trust-score-result", JSON.stringify(result));
                    router.push(`/check/${slug}`);
                }
            } else {
                setError(t.errors.suggestionError);
            }
        } catch (err) {
            if (err instanceof TrustScoreRequestError && err.code === "SITE_NOT_LIVE") {
                addToast(
                    "warning",
                    "This website is currently offline or unreachable. Check the URL for typing mistakes and try again later.",
                    7000
                );
            } else {
                setError(err instanceof Error ? err.message : t.errors.suggestionGeneralError);
            }
        } finally {
            setSuggestionLoading(false);
            setLoading(false);
        }
    };

    // ─── Analyzing Overlay State ───────────────────────────────────────────────
    const analysisSteps = [
        { id: 0, icon: Globe2, label: "Resolving domain & DNS records", color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-950/40", border: "border-blue-200 dark:border-blue-800" },
        { id: 1, icon: Lock, label: "Verifying SSL certificate", color: "text-emerald-500", bg: "bg-emerald-50 dark:bg-emerald-950/40", border: "border-emerald-200 dark:border-emerald-800" },
        { id: 2, icon: Database, label: "Cross-referencing scam database", color: "text-purple-500", bg: "bg-purple-50 dark:bg-purple-950/40", border: "border-purple-200 dark:border-purple-800" },
        { id: 3, icon: Wifi, label: "Scanning network reputation", color: "text-orange-500", bg: "bg-orange-50 dark:bg-orange-950/40", border: "border-orange-200 dark:border-orange-800" },
        { id: 4, icon: Brain, label: "Running AI trust analysis", color: "text-pink-500", bg: "bg-pink-50 dark:bg-pink-950/40", border: "border-pink-200 dark:border-pink-800" },
        { id: 5, icon: Zap, label: "Generating safety report", color: "text-indigo-500", bg: "bg-indigo-50 dark:bg-indigo-950/40", border: "border-indigo-200 dark:border-indigo-800" },
    ];

    const [activeStep, setActiveStep] = useState(0);
    const [completedSteps, setCompletedSteps] = useState<number[]>([]);
    const [progress, setProgress] = useState(0);
    const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const stepRef = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        if (loading && suggestions.length === 0 && inputType !== "is_document") {
            setActiveStep(0);
            setCompletedSteps([]);
            setProgress(0);

            // Advance through steps
            let step = 0;
            stepRef.current = setInterval(() => {
                setCompletedSteps(prev => [...prev, step]);
                step += 1;
                setActiveStep(Math.min(step, analysisSteps.length - 1));
                if (step >= analysisSteps.length) clearInterval(stepRef.current!);
            }, 900);

            // Smooth progress bar (caps at 92% until real finish)
            let p = 0;
            progressRef.current = setInterval(() => {
                p += Math.random() * 3 + 1;
                if (p >= 92) { p = 92; clearInterval(progressRef.current!); }
                setProgress(Math.min(p, 92));
            }, 180);
        } else {
            if (stepRef.current) clearInterval(stepRef.current);
            if (progressRef.current) clearInterval(progressRef.current);
            if (!loading) { setProgress(100); setTimeout(() => setProgress(0), 400); }
        }
        return () => {
            if (stepRef.current) clearInterval(stepRef.current);
            if (progressRef.current) clearInterval(progressRef.current);
        };
    }, [loading, suggestions.length, inputType, analysisSteps.length]);

    return (
        <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-3xl mx-auto relative"
        >
            {/* ── Modern Analyzing Overlay ───────────────────────────────────── */}
            {typeof document !== "undefined" && createPortal(
                <AnimatePresence>
                    {loading && suggestions.length === 0 && inputType !== "is_document" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto p-4"
                        style={{ backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", backgroundColor: "rgba(255,255,255,0.55)" }}
                    >
                        {/* Dark mode backdrop */}
                        <div className="absolute inset-0 dark:bg-gray-950/70 pointer-events-none" />

                        <motion.div
                            initial={{ scale: 0.88, opacity: 0, y: 24 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.92, opacity: 0, y: -16 }}
                            transition={{ type: "spring", stiffness: 280, damping: 22 }}
                            className="relative w-full max-w-md bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden"
                        >
                            {/* Decorative top gradient strip */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-t-3xl" />
                            {/* Animated progress bar just below strip */}
                            <div className="absolute top-1 left-0 h-0.5 bg-indigo-400/30 w-full" />
                            <motion.div
                                className="absolute top-1 left-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500"
                                animate={{ width: `${progress}%` }}
                                transition={{ ease: "linear", duration: 0.3 }}
                                style={{ width: `${progress}%` }}
                            />

                            <div className="px-8 pt-8 pb-7">
                                {/* Header */}
                                <div className="flex items-center gap-4 mb-6">
                                    {/* Pulsing shield orb */}
                                    <div className="relative flex-shrink-0">
                                        <motion.div
                                            className="absolute inset-0 rounded-2xl bg-indigo-500/20 animate-pulse"
                                            animate={{ scale: [1, 1.35, 1] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                        />
                                        <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-200 dark:shadow-indigo-900/50">
                                            <Shield className="w-7 h-7 text-white" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                                            Analyzing Security
                                        </h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                                            Powered by RakshaAI Intelligence
                                        </p>
                                    </div>
                                </div>

                                {/* URL chip */}
                                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 mb-6 min-w-0">
                                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0 animate-pulse" />
                                    <span className="text-xs font-medium text-gray-600 dark:text-gray-300 truncate">{url}</span>
                                </div>

                                {/* Steps */}
                                <div className="space-y-2.5">
                                    {analysisSteps.map((step, idx) => {
                                        const Icon = step.icon;
                                        const isDone = completedSteps.includes(idx);
                                        const isActive = activeStep === idx && !isDone;
                                        const isPending = !isDone && !isActive;
                                        return (
                                            <motion.div
                                                key={step.id}
                                                initial={{ opacity: 0, x: -12 }}
                                                animate={{ opacity: isPending ? 0.38 : 1, x: 0 }}
                                                transition={{ delay: idx * 0.06, duration: 0.3 }}
                                                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl border transition-all duration-300 ${isDone
                                                    ? "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800"
                                                    : isActive
                                                        ? `${step.bg} ${step.border}`
                                                        : "bg-gray-50 dark:bg-gray-800/30 border-gray-200 dark:border-gray-700"
                                                    }`}
                                            >
                                                {/* Icon container */}
                                                <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${isDone ? "bg-emerald-100 dark:bg-emerald-900/50" :
                                                    isActive ? `${step.bg}` : "bg-gray-100 dark:bg-gray-800"
                                                    }`}>
                                                    {isDone ? (
                                                        <motion.div
                                                            initial={{ scale: 0 }}
                                                            animate={{ scale: 1 }}
                                                            transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                                        >
                                                            <CheckCircle className="w-4 h-4 text-emerald-500" />
                                                        </motion.div>
                                                    ) : isActive ? (
                                                        <motion.div
                                                            animate={{ rotate: 360 }}
                                                            transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                                                            className="w-4 h-4 animate-spin"
                                                        >
                                                            <div className={`w-4 h-4 border-2 rounded-full border-t-transparent ${step.color.replace("text-", "border-")}`} />
                                                        </motion.div>
                                                    ) : (
                                                        <Icon className="w-3.5 h-3.5 text-gray-400" />
                                                    )}
                                                </div>
                                                {/* Label */}
                                                <span className={`text-xs font-medium leading-tight ${isDone ? "text-emerald-700 dark:text-emerald-400" :
                                                    isActive ? `${step.color}` : "text-gray-400 dark:text-gray-500"
                                                    }`}>
                                                    {step.label}
                                                </span>
                                                {/* Active pulse dot */}
                                                {isActive && (
                                                    <motion.div
                                                        className={`ml-auto w-1.5 h-1.5 rounded-full animate-pulse ${step.color.replace("text-", "bg-")}`}
                                                        animate={{ opacity: [1, 0.2, 1] }}
                                                        transition={{ duration: 0.9, repeat: Infinity }}
                                                    />
                                                )}
                                            </motion.div>
                                        );
                                    })}
                                </div>

                                {/* Bottom progress row */}
                                <div className="mt-5 flex items-center justify-between">
                                    <span className="text-xs text-gray-400 dark:text-gray-500">
                                        {completedSteps.length} / {analysisSteps.length} checks done
                                    </span>
                                    <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 tabular-nums">
                                        {Math.round(progress)}%
                                    </span>
                                </div>
                                {/* Full width bar */}
                                <div className="mt-1.5 w-full h-1.5 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
                                    <motion.div
                                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                                        animate={{ width: `${progress}%` }}
                                        transition={{ ease: "linear", duration: 0.3 }}
                                        style={{ width: `${progress}%` }}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
            <form onSubmit={handleSubmit} className="relative z-10">
                <div className="relative z-10 rounded-2xl border border-violet-200/90 bg-white/95 p-3 shadow-[0_14px_35px_-16px_rgba(79,70,229,0.55)] dark:border-violet-900/70 dark:bg-gray-950/95 sm:p-4">
                    <div className="mb-3">
                        <p className="text-sm font-extrabold text-gray-950 dark:text-white sm:text-base">
                            What would you like to check?
                        </p>
                        <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
                            Choose a type, then enter or upload it below.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-4 sm:gap-2" role="group" aria-label="Choose what to check">
                        {tabOptions.map((tab) => (
                            <TabButton key={tab.label} tab={tab} />
                        ))}
                    </div>

                    <div className="mb-1.5 mt-3 flex items-end justify-between gap-3 px-0.5">
                        <label
                            htmlFor={inputType === "is_document" ? "scam-document-input" : "scam-text-input"}
                            className="text-xs font-bold text-gray-800 dark:text-gray-200"
                        >
                            {activeMode.label}
                        </label>
                        <span className="hidden truncate text-[11px] text-gray-400 dark:text-gray-500 sm:block">
                            {activeMode.hint}
                        </span>
                    </div>

                    <div className="flex flex-row items-center gap-1.5 rounded-xl border-2 border-violet-300 bg-white p-1 shadow-sm transition-all duration-200 focus-within:border-violet-600 focus-within:ring-4 focus-within:ring-violet-100 dark:border-violet-700 dark:bg-gray-900 dark:focus-within:border-violet-400 dark:focus-within:ring-violet-950/70 sm:gap-2">
                        {inputType === "is_document" ? (
                            <div className="flex items-center flex-1 min-w-0">
                                <input
                                    id="scam-document-input"
                                    ref={fileInputRef}
                                    type="file"
                                    accept={DOCUMENT_ACCEPTED_TYPES.join(",")}
                                    className="hidden"
                                    disabled={loading}
                                    onChange={(e) => handleFileSelect(e.target.files?.[0] || null)}
                                />
                                {selectedFile ? (
                                    <div className="flex items-center flex-1 min-w-0 gap-2 py-2.5 sm:py-3 lg:py-3.5 px-2">
                                    <FileCheck2 className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-500 flex-shrink-0" />
                                        <span className="flex-1 min-w-0 truncate text-sm sm:text-base text-gray-900 dark:text-white">
                                            {selectedFile.name}
                                        </span>
                                        {!loading && (
                                            <button
                                                type="button"
                                                aria-label="Remove file"
                                                onClick={() => {
                                                    setSelectedFile(null);
                                                    if (fileInputRef.current) fileInputRef.current.value = "";
                                                }}
                                                className="flex-shrink-0 text-gray-400 hover:text-red-500 transition-colors"
                                            >
                                                <X className="h-4 w-4" />
                                            </button>
                                        )}
                                    </div>
                                ) : (
                                    <button
                                        type="button"
                                        disabled={loading}
                                        onClick={() => fileInputRef.current?.click()}
                                        className="flex-1 min-w-0 flex items-center gap-2 text-left py-2.5 sm:py-3 lg:py-3.5 px-2 pl-3 sm:pl-4 text-sm sm:text-base font-medium text-gray-600 dark:text-gray-300 disabled:cursor-not-allowed"
                                    >
                                        <Paperclip className="h-4 w-4 sm:h-5 sm:w-5 text-violet-600 dark:text-violet-400 flex-shrink-0" />
                                        <span className="truncate">Choose an offer letter, invoice, ID, or receipt</span>
                                    </button>
                                )}
                            </div>
                        ) : (
                            <div className="flex items-center flex-1 min-w-0">
                                <div className="ml-1.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-violet-50 text-violet-600 dark:bg-violet-950/70 dark:text-violet-300">
                                    {activeInputIcon}
                                </div>
                                <input
                                    id="scam-text-input"
                                    ref={textInputRef}
                                    type="text"
                                    value={url}
                                    onChange={(e) => {
                                        setUrl(e.target.value);
                                        setError("");
                                    }}
                                    placeholder={activeMode.placeholder || t.placeholder}
                                    aria-label={activeMode.label}
                                    className="flex-1 min-w-0 bg-transparent outline-none text-sm sm:text-base font-medium text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 py-2.5 sm:py-3 lg:py-3.5 px-2 truncate"
                                    disabled={loading}
                                />
                            </div>
                        )}
                        <button
                            type="submit"
                            disabled={loading || (inputType === "is_document" && !selectedFile)}
                            aria-label={loading ? "Analyzing" : "Check"}
                            className="gradient-primary flex-shrink-0 text-white px-3 py-2.5 sm:px-5 sm:py-3 lg:px-6 lg:py-3.5 rounded-xl font-semibold text-sm sm:text-base whitespace-nowrap hover:shadow-lg hover:brightness-105 active:scale-95 transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer relative z-20"
                        >
                            <div className="flex items-center justify-center gap-2">
                                {loading ? (
                                    <>
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                            className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
                                        />
                                        <span className="text-sm sm:text-base">{t.analyzing}</span>
                                    </>
                                ) : (
                                    <>
                                        <Search className="h-4 w-4 sm:h-5 sm:w-5" />
                                        <span className="text-sm sm:text-base">{t.buttonText}</span>
                                    </>
                                )}
                            </div>
                        </button>
                    </div>

                    <p className="mt-1.5 px-0.5 text-[11px] text-gray-500 dark:text-gray-400 sm:hidden">
                        {activeMode.hint}
                    </p>
                </div>
                {/* Error Message */}
                <AnimatePresence>
                    {error && (
                        <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="mt-3 text-red-600 dark:text-red-400 text-sm text-center relative z-10"
                        >
                            {error}
                        </motion.p>
                    )}
                </AnimatePresence>
                {/* Safe / Not Reported Signal */}
                <AnimatePresence>
                    {safeSignal && (
                        <motion.div
                            initial={{ opacity: 0, y: 12, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -8, scale: 0.97 }}
                            transition={{ type: "spring", stiffness: 320, damping: 24 }}
                            className="mt-4 relative overflow-hidden rounded-2xl border border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/40 shadow-lg shadow-emerald-100/60 dark:shadow-emerald-900/20 p-5"
                        >
                            {/* Decorative top strip */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400 rounded-t-2xl" />
                            <div className="flex items-start gap-4">
                                {/* Icon */}
                                <div className="relative flex-shrink-0 mt-0.5">
                                    <motion.div
                                        className="absolute inset-0 rounded-xl bg-emerald-400/20 animate-pulse"
                                        animate={{ scale: [1, 1.4, 1] }}
                                        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                                    />
                                    <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-md shadow-emerald-200 dark:shadow-emerald-900/50">
                                        <CheckCircle className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                                {/* Text */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <span className="text-sm font-bold text-emerald-700 dark:text-emerald-300 uppercase tracking-wide">
                                            No Reports Found
                                        </span>
                                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/50 border border-emerald-200 dark:border-emerald-700 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                            Safe
                                        </span>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                        <span className="font-medium text-gray-900 dark:text-white break-all">{safeSignal.value}</span>{" "}
                                        has <span className="font-semibold text-emerald-600 dark:text-emerald-400">not been reported</span> by anyone in our database.
                                    </p>
                                    <p className="mt-1.5 text-xs text-gray-500 dark:text-gray-400">
                                        This {safeSignal.type === 'upi' ? 'UPI ID' : 'phone number'} appears safe to use. No scam or fraud reports found.
                                    </p>
                                </div>
                                {/* Dismiss */}
                                <button
                                    type="button"
                                    onClick={() => setSafeSignal(null)}
                                    aria-label="Dismiss"
                                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-colors"
                                >
                                    <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path d="M18 6 6 18M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* No suggestions found message */}
                {showNoSuggestions && suggestions.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 rounded-xl  p-4 text-center"
                    >
                        {/* <span className="text-base text-red-600 dark:text-red-400 font-semibold">Our system is temporarily busy due to high traffic. Please try again in a few moments.</span> */}
                        <span className="text-base text-amber-600 dark:text-amber-400 font-semibold">{t.suggestions.busyMessage}</span>
                    </motion.div>
                )}
                {/* Suggestions for related URLs */}
                {suggestions.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-4"
                    >
                        <div className="mb-2 font-semibold text-gray-800 dark:text-gray-100">{t.suggestions.title}</div>
                        <ul className="space-y-2 max-h-[25rem] overflow-y-auto pr-2">
                            {suggestions.map((item, idx) => (
                                <li key={item.link || idx} className="">
                                    <button
                                        type="button"
                                        className="w-full text-left p-3 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900 transition flex flex-col gap-1 border border-transparent hover:border-indigo-300 dark:hover:border-indigo-600"
                                        onClick={() => handleSuggestionClick(item.link)}
                                        disabled={suggestionLoading}
                                    >
                                        <span className="font-medium text-indigo-700 dark:text-indigo-300">{item.title}</span>
                                        <span className="text-xs text-gray-500 dark:text-gray-400 break-all">{item.link}</span>
                                        {item.snippet && <span className="text-xs text-gray-600 dark:text-gray-300">{item.snippet}</span>}
                                        {suggestionLoading && (
                                            <span className="ml-2 text-xs text-indigo-500">Analyzing...</span>
                                        )}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-purple-400/20 rounded-full blur-2xl -z-10" />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-indigo-400/20 rounded-full blur-2xl -z-10" />
            </form>

            {/* Helper Text */}
            {/* <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-4 sm:mt-6 text-center text-xs sm:text-sm text-gray-600 dark:text-gray-400"
            >
                {t.description}
            </motion.p> */}
        </motion.div>
    );
}
