"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { UploadCloud, FileText, X, Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/Toast";

const MAX_FILE_SIZE = 15 * 1024 * 1024; // 15MB
const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp", "application/pdf"];

export default function DocumentUploadInput() {
    const { addToast } = useToast();
    const router = useRouter();
    const inputRef = useRef<HTMLInputElement>(null);

    const [file, setFile] = useState<File | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const validateAndSetFile = (selected: File | null) => {
        setError("");
        if (!selected) return;

        if (!ACCEPTED_TYPES.includes(selected.type)) {
            setError("Please upload a JPG, PNG, WEBP image or a PDF file.");
            return;
        }
        if (selected.size > MAX_FILE_SIZE) {
            setError("File is too large. Maximum size is 15MB.");
            return;
        }
        setFile(selected);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
        validateAndSetFile(e.dataTransfer.files?.[0] || null);
    };

    const handleAnalyze = async () => {
        if (!file) {
            setError("Please select a document to analyze.");
            return;
        }

        setLoading(true);
        setError("");

        try {
            const formData = new FormData();
            formData.append("document", file);

            const response = await fetch("/api/document-analyze", {
                method: "POST",
                body: formData,
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result?.error || "We're having trouble analyzing this document right now. Please try again.");
            }

            sessionStorage.setItem("document-analysis-result", JSON.stringify(result));
            router.push("/document-checker/result");
        } catch (err) {
            const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
            setError(message);
            addToast("error", message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto">
            <div
                onDragOver={(e) => {
                    e.preventDefault();
                    setIsDragging(true);
                }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
                onClick={() => !loading && inputRef.current?.click()}
                className={`relative cursor-pointer rounded-2xl border-2 border-dashed p-8 sm:p-12 text-center transition-all duration-200 ${
                    isDragging
                        ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-950/30"
                        : "border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-gray-900/60 hover:border-indigo-400 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20"
                }`}
            >
                <input
                    ref={inputRef}
                    type="file"
                    accept={ACCEPTED_TYPES.join(",")}
                    className="hidden"
                    disabled={loading}
                    onChange={(e) => validateAndSetFile(e.target.files?.[0] || null)}
                />

                {file ? (
                    <div className="flex items-center justify-center gap-3">
                        <FileText className="h-8 w-8 text-indigo-500 flex-shrink-0" />
                        <div className="text-left min-w-0">
                            <p className="text-sm font-semibold text-gray-900 dark:text-white truncate max-w-[16rem] sm:max-w-xs">
                                {file.name}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                {(file.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                        </div>
                        {!loading && (
                            <button
                                type="button"
                                aria-label="Remove file"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setFile(null);
                                    if (inputRef.current) inputRef.current.value = "";
                                }}
                                className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        )}
                    </div>
                ) : (
                    <div className="flex flex-col items-center gap-3">
                        <div className="w-14 h-14 rounded-2xl bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center">
                            <UploadCloud className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-gray-900 dark:text-white">
                                Drag & drop your document, or click to browse
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                Offer letters, invoices, IDs, or receipts  JPG, PNG, WEBP or PDF, up to 15MB
                            </p>
                        </div>
                    </div>
                )}
            </div>

            {error && (
                <p className="mt-3 text-sm text-red-600 dark:text-red-400 text-center">{error}</p>
            )}

            <button
                type="button"
                onClick={handleAnalyze}
                disabled={!file || loading}
                className="gradient-primary w-full mt-5 text-white py-3.5 rounded-xl font-semibold text-sm sm:text-base hover:shadow-lg hover:brightness-105 active:scale-[0.99] transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-2"
            >
                {loading ? (
                    <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Analyzing Document...
                    </>
                ) : (
                    "Analyze Document"
                )}
            </button>
        </div>
    );
}
