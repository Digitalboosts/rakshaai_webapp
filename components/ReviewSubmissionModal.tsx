"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Star, Send, CheckCircle, AlertCircle, MessageSquare, Paperclip, FileImage, FileText, Trash2, Globe, Phone, CreditCard } from "lucide-react";
// import MathCaptcha from "./MathCaptcha";
import Turnstile from 'react-turnstile';
import CountryPhoneInput from './CountryPhoneInput';
import { isValidPhoneNumber } from 'react-phone-number-input';


interface ReviewSubmissionModalProps {
    isOpen: boolean;
    onClose: () => void;
    websiteUrl?: string;
}

type SubmissionType = "website" | "phone" | "upi";
type UpiInputType = "id" | "qr";

export default function ReviewSubmissionModal({ isOpen, onClose, websiteUrl = "" }: ReviewSubmissionModalProps) {
    const [submissionType, setSubmissionType] = useState<SubmissionType>("website");
    const [upiInputType, setUpiInputType] = useState<UpiInputType>("id");
    const [isAnonymous, setIsAnonymous] = useState(false);
    const [isDragOver, setIsDragOver] = useState(false);
    const [formData, setFormData] = useState({
        // Website fields
        website: websiteUrl,
        name: "",
        phone: "",
        rating: 0,
        review: "",
        // Phone scam fields
        scammerPhone: "",
        reporterPhone: "",
        // UPI scam fields
        upiId: "",
        upiQr: undefined as File | undefined,
    });
    const [attachments, setAttachments] = useState<File[]>([]);
    const [hoveredStar, setHoveredStar] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");
    const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
    console.log("Turnstile Token:", turnstileToken);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage("");

        try {
            // Validate phone numbers according to country selection
            if (submissionType === 'phone') {
                const scammerValid = isValidPhoneNumber(formData.scammerPhone || '');
                const reporterValid = isValidPhoneNumber(formData.reporterPhone || '');
                if (!scammerValid || !reporterValid) {
                    setErrorMessage('Please enter valid phone numbers (including country code).');
                    setIsSubmitting(false);
                    return;
                }
            }

            if (submissionType === 'website' && !isAnonymous) {
                // if user provided a phone, ensure it's valid
                if (formData.phone && !isValidPhoneNumber(formData.phone || '')) {
                    setErrorMessage('Please enter a valid contact phone number (including country code).');
                    setIsSubmitting(false);
                    return;
                }
            }

            if (submissionType === 'upi' && !isAnonymous) {
                if (formData.reporterPhone && !isValidPhoneNumber(formData.reporterPhone || '')) {
                    setErrorMessage('Please enter a valid reporter phone number (including country code).');
                    setIsSubmitting(false);
                    return;
                }
            }
            // Validate CAPTCHA
            // if (!captchaVerified) {
            //     setErrorMessage("Please complete the CAPTCHA verification");
            //     setIsSubmitting(false);
            //     return;
            // }

            // Validate required attachments
            if (submissionType !== "upi" && attachments.length === 0) {
                setErrorMessage("Please upload at least one file");
                setIsSubmitting(false);
                return;
            }
            if (submissionType === 'upi') {
                if (upiInputType === 'id' && !formData.upiId.trim()) {
                    setErrorMessage("Please enter a valid UPI ID.");
                    setIsSubmitting(false);
                    return;
                }
                if (upiInputType === 'qr' && !formData.upiQr) {
                    setErrorMessage("Please upload a UPI QR code.");
                    setIsSubmitting(false);
                    return;
                }
            }

            // Prepare FormData
            const formDataToSend = new FormData();

            // helper to normalize phone for API: return plain local number (10 digits) when possible
            // Accepts inputs like '+91xxxxxxxxxx', '91xxxxxxxxxx', '0xxxxxxxxxx' or 'xxxxxxxxxx'
            const normalizePhone = (v?: string) => {
                if (!v) return '';
                // strip any non-digit characters
                const digits = v.replace(/[^0-9]/g, '');

                // If we have more than 10 digits (e.g. country code present), return the last 10 digits
                if (digits.length > 10) {
                    return digits.slice(-10);
                }

                // If exactly 10 digits, return as-is
                if (digits.length === 10) return digits;

                // Fallback: return whatever digits we have
                return digits;
            };

            // Add fields based on submission type
            if (submissionType === "website") {
                formDataToSend.append("submission_type", "phone");
                formDataToSend.append("phone_number", normalizePhone(formData.phone));
                formDataToSend.append("website_url", formData.website);
                formDataToSend.append("name", isAnonymous ? "Anonymous" : formData.name);
                formDataToSend.append("rating", formData.rating.toString());
                formDataToSend.append("review", formData.review);
            } else if (submissionType === "phone") {
                // formDataToSend.append("submission_type", "phone");
                formDataToSend.append("scammer_phone_number", normalizePhone(formData.scammerPhone));
                formDataToSend.append("reporter_phone_number", normalizePhone(formData.reporterPhone));
                formDataToSend.append("name", isAnonymous ? "Anonymous" : formData.name);
                formDataToSend.append("review", formData.review);
            } else if (submissionType === "upi") {
                // formDataToSend.append("submission_type", "upi");
                if (upiInputType === 'id') {
                    formDataToSend.append("upi_id", formData.upiId);
                } else {
                    formDataToSend.append("qr_scanner", formData.upiQr!);
                }
                formDataToSend.append("reporter_phone_number", normalizePhone(formData.reporterPhone));
                formDataToSend.append("name", isAnonymous ? "Anonymous" : formData.name);
                formDataToSend.append("review", formData.review);
            }

            // Add attachments
            attachments.forEach((file) => {
                formDataToSend.append("attachment", file);
            });

            // Add turnstile token for verification
            if (turnstileToken) {
                formDataToSend.append("turnstileToken", turnstileToken);
            }

            // Determine API endpoint - using internal Next.js API routes
            let apiUrl = "";
            if (submissionType === "website") {
                apiUrl = "/api/scam-report/web";
            } else if (submissionType === "phone") {
                apiUrl = "/api/scam-report/phone";
            } else if (submissionType === "upi") {
                apiUrl = "/api/scam-report/upi";
            }

            // Submit to API
            const response = await fetch(apiUrl, {
                method: "POST",
                body: formDataToSend,
            });

            if (!response.ok) {
                throw new Error(`Failed to submit: ${response.statusText}`);
            }

            setSubmitStatus("success");

            // Reset form after 2 seconds and close modal
            setTimeout(() => {
                setFormData({
                    website: "",
                    name: "",
                    phone: "",
                    rating: 0,
                    review: "",
                    scammerPhone: "",
                    reporterPhone: "",
                    upiId: "",
                    upiQr: undefined,
                });
                setAttachments([]);
                setSubmitStatus("idle");
                setIsAnonymous(false);
                setSubmissionType("website");
                setUpiInputType("id");
                onClose();
            }, 2000);
        } catch (error) {
            console.error("Error submitting review:", error);
            setSubmitStatus("error");
            setErrorMessage(error instanceof Error ? error.message : "Failed to submit review. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleStarClick = (rating: number) => {
        setFormData({ ...formData, rating });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const newFiles = Array.from(e.target.files);
            // Limit to 5 files and 10MB per file
            const validFiles = newFiles.filter(file => {
                if (file.size > 10 * 1024 * 1024) {
                    alert(`File ${file.name} is too large. Maximum size is 10MB.`);
                    return false;
                }
                return true;
            });

            if (attachments.length + validFiles.length > 5) {
                alert("Maximum 5 files allowed");
                setAttachments([...attachments, ...validFiles].slice(0, 5));
            } else {
                setAttachments([...attachments, ...validFiles]);
            }
        }
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragOver(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragOver(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragOver(false);
        const files = Array.from(e.dataTransfer.files);
        const supportedFiles = files.filter(file =>
            file.type.startsWith('image/') || file.type === 'application/pdf'
        );

        if (supportedFiles.length > 0) {
            const validFile = supportedFiles[0];
            if (validFile.size > 10 * 1024 * 1024) {
                setErrorMessage(`File ${validFile.name} is too large. Maximum size is 10MB.`);
                return;
            }
            setFormData({ ...formData, upiQr: validFile });
        }
    };

    const removeAttachment = (index: number) => {
        setAttachments(attachments.filter((_, i) => i !== index));
    };

    const getFileIcon = (file: File) => {
        if (file.type.startsWith('image/')) {
            return <FileImage className="h-5 w-5" />;
        }
        return <FileText className="h-5 w-5" />;
    };

    const formatFileSize = (bytes: number) => {
        if (bytes < 1024) return bytes + ' B';
        if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
        return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-md z-[60] flex items-center justify-center p-4"
                    >
                        {/* Modal */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white dark:bg-gray-900 rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200/50 dark:border-gray-700/50"
                        >
                            {submitStatus === "error" ? (
                                // Error State
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="text-center py-12"
                                >
                                    <div className="w-20 h-20 rounded-full bg-red-100 dark:bg-red-900/30 mx-auto mb-6 flex items-center justify-center">
                                        <AlertCircle className="h-10 w-10 text-red-600 dark:text-red-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                        Submission Failed
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                                        {errorMessage || "Something went wrong. Please try again."}
                                    </p>
                                    <button
                                        onClick={() => setSubmitStatus("idle")}
                                        className="gradient-primary text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
                                    >
                                        Try Again
                                    </button>
                                </motion.div>
                            ) : submitStatus === "success" ? (
                                // Success State
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="text-center py-12"
                                >
                                    <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 mx-auto mb-6 flex items-center justify-center">
                                        <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                        Review Submitted!
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Thank you for helping our community stay safe online.
                                    </p>
                                </motion.div>
                            ) : (
                                // Form State
                                <>
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                                                <MessageSquare className="h-6 w-6 text-white" />
                                            </div>
                                            <div>
                                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                                    Submit a Review
                                                </h2>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                                    Share your experience with this website
                                                </p>
                                            </div>
                                        </div>
                                        <button
                                            onClick={onClose}
                                            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                                        >
                                            <X className="h-6 w-6" />
                                        </button>
                                    </div>

                                    {/* Form */}
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        {/* Submission Type Selector */}
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                                Report Type <span className="text-red-500">*</span>
                                            </label>
                                            <div className="grid grid-cols-3 gap-2">
                                                <button
                                                    type="button"
                                                    onClick={() => setSubmissionType("website")}
                                                    className={`flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border-2 transition-all ${submissionType === "website"
                                                        ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/30"
                                                        : "border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-700"
                                                        }`}
                                                >
                                                    <Globe className={`h-4 w-4 ${submissionType === "website" ? "text-indigo-600 dark:text-indigo-400" : "text-gray-400"}`} />
                                                    <span className={`text-xs font-medium ${submissionType === "website" ? "text-indigo-600 dark:text-indigo-400" : "text-gray-600 dark:text-gray-400"}`}>
                                                        Website
                                                    </span>
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => setSubmissionType("phone")}
                                                    className={`flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border-2 transition-all ${submissionType === "phone"
                                                        ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/30"
                                                        : "border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-700"
                                                        }`}
                                                >
                                                    <Phone className={`h-4 w-4 ${submissionType === "phone" ? "text-indigo-600 dark:text-indigo-400" : "text-gray-400"}`} />
                                                    <span className={`text-xs font-medium ${submissionType === "phone" ? "text-indigo-600 dark:text-indigo-400" : "text-gray-600 dark:text-gray-400"}`}>
                                                        Phone
                                                    </span>
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => setSubmissionType("upi")}
                                                    className={`flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border-2 transition-all ${submissionType === "upi"
                                                        ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/30"
                                                        : "border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-700"
                                                        }`}
                                                >
                                                    <CreditCard className={`h-4 w-4 ${submissionType === "upi" ? "text-indigo-600 dark:text-indigo-400" : "text-gray-400"}`} />
                                                    <span className={`text-xs font-medium ${submissionType === "upi" ? "text-indigo-600 dark:text-indigo-400" : "text-gray-600 dark:text-gray-400"}`}>
                                                        UPI
                                                    </span>
                                                </button>
                                            </div>
                                        </div>

                                        {/* Website Type Fields */}
                                        {submissionType === "website" && (
                                            <>
                                                {/* Website URL */}
                                                <div>
                                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                                        Website URL <span className="text-red-500">*</span>
                                                    </label>
                                                    <input
                                                        type="url"
                                                        required
                                                        value={formData.website}
                                                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                                                        placeholder="https://example.com"
                                                        className="w-full px-4 py-3 rounded-xl glass border border-gray-200 dark:border-gray-700 focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-900/30 outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                                                    />
                                                </div>

                                                {/* Name and Phone Row - Only show for non-anonymous */}
                                                {!isAnonymous && (
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                        <div>
                                                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                                                Your Name <span className="text-red-500">*</span>
                                                            </label>
                                                            <input
                                                                type="text"
                                                                required
                                                                value={formData.name}
                                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                                placeholder="John Doe"
                                                                className="w-full px-4 py-3 rounded-xl glass border border-gray-200 dark:border-gray-700 focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-900/30 outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                                                            />
                                                        </div>
                                                        <div>
                                                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                                                Phone Number <span className="text-red-500">*</span>
                                                            </label>
                                                            <CountryPhoneInput
                                                                required
                                                                value={formData.phone}
                                                                onChange={(v) => setFormData({ ...formData, phone: v ?? "" })}
                                                                placeholder="1234567891"
                                                                className="w-full"
                                                            />
                                                            {!isValidPhoneNumber(formData.phone || '') && formData.phone && (
                                                                <p className="text-xs text-red-500 mt-1">Please enter a valid phone number including country code.</p>
                                                            )}
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Rating */}
                                                <div>
                                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                                        Your Rating <span className="text-red-500">*</span>
                                                    </label>
                                                    <div className="flex items-center space-x-2">
                                                        {[1, 2, 3, 4, 5].map((star) => (
                                                            <button
                                                                key={star}
                                                                type="button"
                                                                onClick={() => handleStarClick(star)}
                                                                onMouseEnter={() => setHoveredStar(star)}
                                                                onMouseLeave={() => setHoveredStar(0)}
                                                                className="transition-transform hover:scale-110 focus:outline-none"
                                                            >
                                                                <Star
                                                                    className={`h-8 w-8 transition-colors ${star <= (hoveredStar || formData.rating)
                                                                        ? "text-yellow-400 fill-yellow-400"
                                                                        : "text-gray-300 dark:text-gray-600"
                                                                        }`}
                                                                />
                                                            </button>
                                                        ))}
                                                        {formData.rating > 0 && (
                                                            <span className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                                                                {formData.rating}/5
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </>
                                        )}

                                        {/* Phone Type Fields */}
                                        {submissionType === "phone" && (
                                            <>
                                                <div>
                                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                                        Scammer Phone Number <span className="text-red-500">*</span>
                                                    </label>
                                                    <CountryPhoneInput
                                                        required
                                                        value={formData.scammerPhone}
                                                        onChange={(v) => setFormData({ ...formData, scammerPhone: v ?? "" })}
                                                        placeholder="9876543211"
                                                        className="w-full"
                                                    />
                                                    {!isValidPhoneNumber(formData.scammerPhone || '') && formData.scammerPhone && (
                                                        <p className="text-xs text-red-500 mt-1">Please enter a valid phone number including country code.</p>
                                                    )}
                                                </div>

                                                {!isAnonymous && (
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                        <div>
                                                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                                                Your Name <span className="text-red-500">*</span>
                                                            </label>
                                                            <input
                                                                type="text"
                                                                required
                                                                value={formData.name}
                                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                                placeholder="John Doe"
                                                                className="w-full px-4 py-3 rounded-xl glass border border-gray-200 dark:border-gray-700 focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-900/30 outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                                                            />
                                                        </div>
                                                        <div>
                                                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                                                Your Phone Number <span className="text-red-500">*</span>
                                                            </label>
                                                            <CountryPhoneInput
                                                                required
                                                                value={formData.reporterPhone}
                                                                onChange={(v) => setFormData({ ...formData, reporterPhone: v ?? "" })}
                                                                placeholder="9123456789"
                                                                className="w-full"
                                                            />
                                                            {!isValidPhoneNumber(formData.reporterPhone || '') && formData.reporterPhone && (
                                                                <p className="text-xs text-red-500 mt-1">Please enter a valid phone number including country code.</p>
                                                            )}
                                                        </div>
                                                    </div>
                                                )}
                                            </>
                                        )}

                                        {/* UPI Type Fields */}
                                        {submissionType === "upi" && (
                                            <>
                                                {/* UPI Input Type Toggle */}
                                                <div>
                                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                                                        UPI Payment Information <span className="text-red-500">*</span>
                                                    </label>

                                                    {/* Segmented Control */}
                                                    <div className="inline-flex rounded-xl bg-gray-100 dark:bg-gray-800 p-1 mb-4">
                                                        <button
                                                            type="button"
                                                            onClick={() => {
                                                                setUpiInputType("id");
                                                                setFormData({ ...formData, upiQr: undefined });
                                                            }}
                                                            className={`px-4 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${upiInputType === "id"
                                                                ? "bg-white dark:bg-gray-700 text-indigo-600 dark:text-indigo-400 shadow-sm"
                                                                : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                                                                }`}
                                                        >
                                                            UPI ID
                                                        </button>
                                                        <button
                                                            type="button"
                                                            onClick={() => {
                                                                setUpiInputType("qr");
                                                                setFormData({ ...formData, upiId: "" });
                                                            }}
                                                            className={`px-4 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${upiInputType === "qr"
                                                                ? "bg-white dark:bg-gray-700 text-indigo-600 dark:text-indigo-400 shadow-sm"
                                                                : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                                                                }`}
                                                        >
                                                            QR Code
                                                        </button>
                                                    </div>

                                                    {/* UPI ID Input */}
                                                    <motion.div
                                                        key="upi-id"
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{
                                                            opacity: upiInputType === "id" ? 1 : 0,
                                                            height: upiInputType === "id" ? "auto" : 0
                                                        }}
                                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                                        className="overflow-hidden"
                                                    >
                                                        {upiInputType === "id" && (
                                                            <div className="space-y-3">
                                                                <div className="relative">
                                                                    <input
                                                                        type="text"
                                                                        value={formData.upiId}
                                                                        onChange={(e) => setFormData({ ...formData, upiId: e.target.value })}
                                                                        placeholder="Enter a valid UPI ID (e.g., yourname@paytm, 9876543210@ybl)"
                                                                        className="w-full px-4 py-3 rounded-xl glass border border-gray-200 dark:border-gray-700 focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-900/30 outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                                                                    />
                                                                </div>

                                                            </div>
                                                        )}
                                                    </motion.div>

                                                    {/* QR Code Upload */}
                                                    <motion.div
                                                        key="qr-upload"
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{
                                                            opacity: upiInputType === "qr" ? 1 : 0,
                                                            height: upiInputType === "qr" ? "auto" : 0
                                                        }}
                                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                                        className="overflow-hidden"
                                                    >
                                                        {upiInputType === "qr" && (
                                                            <div className="space-y-3">
                                                                {!formData.upiQr ? (
                                                                    <label className="block cursor-pointer">
                                                                        <input
                                                                            type="file"
                                                                            accept="image/*,application/pdf"
                                                                            onChange={(e) => {
                                                                                if (e.target.files && e.target.files[0]) {
                                                                                    const file = e.target.files[0];
                                                                                    if (file.size > 10 * 1024 * 1024) {
                                                                                        setErrorMessage(`File ${file.name} is too large. Maximum size is 10MB.`);
                                                                                        return;
                                                                                    }
                                                                                    setFormData({ ...formData, upiQr: file });
                                                                                }
                                                                            }}
                                                                            className="hidden"
                                                                        />
                                                                        <div
                                                                            onDragOver={handleDragOver}
                                                                            onDragLeave={handleDragLeave}
                                                                            onDrop={handleDrop}
                                                                            className={`relative border-2 border-dashed rounded-lg p-2 text-center transition-all duration-200 ${isDragOver
                                                                                ? "border-indigo-400 bg-indigo-50 dark:bg-indigo-900/20"
                                                                                : "border-gray-300 dark:border-gray-600 hover:border-indigo-400 dark:hover:border-indigo-500 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                                                                                }`}
                                                                        >
                                                                            <div className="w-6 h-6 mx-auto mb-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                                                                                <FileImage className="h-3 w-3 text-indigo-600 dark:text-indigo-400" />
                                                                            </div>
                                                                            <h3 className="text-xs font-medium text-gray-900 dark:text-white mb-1">
                                                                                Upload QR Code
                                                                            </h3>
                                                                            <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                                                                                Click to browse
                                                                            </p>
                                                                            <div className="inline-flex items-center px-2 py-0.5 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded text-xs">
                                                                                <span>Images, PDF</span>
                                                                            </div>
                                                                        </div>
                                                                    </label>
                                                                ) : (
                                                                    <motion.div
                                                                        initial={{ opacity: 0, scale: 0.95 }}
                                                                        animate={{ opacity: 1, scale: 1 }}
                                                                        className="relative p-2 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
                                                                    >
                                                                        <div className="flex items-center gap-2">
                                                                            <div className="flex-shrink-0">
                                                                                <img
                                                                                    src={URL.createObjectURL(formData.upiQr)}
                                                                                    alt="UPI QR Preview"
                                                                                    className="h-10 w-10 rounded-lg object-cover border border-gray-300 dark:border-gray-600"
                                                                                />
                                                                            </div>
                                                                            <div className="flex-1 min-w-0">
                                                                                <h4 className="text-xs font-medium text-gray-900 dark:text-white truncate mb-0.5">
                                                                                    {formData.upiQr.name}
                                                                                </h4>
                                                                                <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                                                                                    {formatFileSize(formData.upiQr.size)}
                                                                                </p>
                                                                                <div className="flex items-center gap-1">
                                                                                    <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                                                                                        <CheckCircle className="h-2 w-2" />
                                                                                        <span className="text-xs font-medium">Uploaded</span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <button
                                                                                type="button"
                                                                                onClick={() => setFormData({ ...formData, upiQr: undefined })}
                                                                                className="flex-shrink-0 p-1 rounded hover:bg-red-100 dark:hover:bg-red-900/30 text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                                                                            >
                                                                                <Trash2 className="h-3 w-3" />
                                                                            </button>
                                                                        </div>
                                                                    </motion.div>
                                                                )}
                                                            </div>
                                                        )}
                                                    </motion.div>
                                                </div>
                                                {!isAnonymous && (
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                                                        <div>
                                                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                                                Your Name <span className="text-red-500">*</span>
                                                            </label>
                                                            <input
                                                                type="text"
                                                                required
                                                                value={formData.name}
                                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                                placeholder="John Doe"
                                                                className="w-full px-4 py-3 rounded-xl glass border border-gray-200 dark:border-gray-700 focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-900/30 outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                                                            />
                                                        </div>
                                                        <div>
                                                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                                                Your Phone Number <span className="text-red-500">*</span>
                                                            </label>
                                                            <CountryPhoneInput
                                                                required
                                                                value={formData.reporterPhone}
                                                                onChange={(v) => setFormData({ ...formData, reporterPhone: v ?? "" })}
                                                                placeholder="9123456789"
                                                                className="w-full"
                                                            />
                                                            {!isValidPhoneNumber(formData.reporterPhone || '') && formData.reporterPhone && (
                                                                <p className="text-xs text-red-500 mt-1">Please enter a valid phone number including country code.</p>
                                                            )}
                                                        </div>
                                                    </div>
                                                )}
                                            </>
                                        )}

                                        {/* Review Text */}
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                                Your Review <span className="text-red-500">*</span>
                                            </label>
                                            <textarea
                                                required
                                                rows={5}
                                                value={formData.review}
                                                onChange={(e) => setFormData({ ...formData, review: e.target.value })}
                                                placeholder="Share your experience with this website. Was it trustworthy? Did you encounter any issues?"
                                                className="w-full px-4 py-3 rounded-xl glass border border-gray-200 dark:border-gray-700 focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-900/30 outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 resize-none"
                                            />
                                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                                Minimum 20 characters. Be specific and helpful.
                                            </p>
                                        </div>

                                        {/* Attachments */}
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                                Attachments <span className="text-red-500">*</span>
                                            </label>

                                            {/* File List */}
                                            {attachments.length > 0 && (
                                                <div className="mb-3 space-y-2">
                                                    {attachments.map((file, index) => (
                                                        <motion.div
                                                            key={index}
                                                            initial={{ opacity: 0, scale: 0.95 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            className="flex items-center gap-3 p-3 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800/40"
                                                        >
                                                            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white dark:bg-gray-800 border border-indigo-200 dark:border-indigo-800 flex items-center justify-center">
                                                                <div className="text-indigo-600 dark:text-indigo-400">
                                                                    {getFileIcon(file)}
                                                                </div>
                                                            </div>
                                                            <div className="flex-1 min-w-0">
                                                                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                                                                    {file.name}
                                                                </p>
                                                                <p className="text-xs text-gray-600 dark:text-gray-400">
                                                                    {formatFileSize(file.size)}
                                                                </p>
                                                            </div>
                                                            <button
                                                                type="button"
                                                                onClick={() => removeAttachment(index)}
                                                                className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center hover:bg-red-100 dark:hover:bg-red-900/30 text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                                                            >
                                                                <X className="h-4 w-4" />
                                                            </button>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            )}

                                            {/* Upload Button */}
                                            {attachments.length < 5 && (
                                                <label className="block cursor-pointer">
                                                    <input
                                                        type="file"
                                                        multiple
                                                        accept="image/*,.pdf,.doc,.docx"
                                                        onChange={handleFileChange}
                                                        className="hidden"
                                                    />
                                                    <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 hover:border-indigo-400 dark:hover:border-indigo-500 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all group">
                                                        <Paperclip className="h-5 w-5 text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
                                                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                                            Add files (Images, PDF, DOC • Max 10MB)
                                                        </span>
                                                    </div>
                                                </label>
                                            )}
                                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                                                Please upload at least one file (screenshot or document) to support your review.
                                            </p>
                                        </div>

                                        {/* Anonymous Checkbox */}
                                        <div className="flex items-start space-x-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                                            <input
                                                type="checkbox"
                                                id="anonymous"
                                                checked={isAnonymous}
                                                onChange={(e) => setIsAnonymous(e.target.checked)}
                                                className="mt-0.5 h-5 w-5 rounded border-gray-300 dark:border-gray-600 text-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-400 cursor-pointer"
                                            />
                                            <label htmlFor="anonymous" className="flex-1 cursor-pointer">
                                                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                                                    Submit Anonymously
                                                </p>
                                                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                                                    Your review will be published without any identifying information
                                                </p>
                                            </label>
                                        </div>

                                        <Turnstile
                                            sitekey={'0x4AAAAAACIBnMhBtiE_K88D'}
                                            onVerify={(token) => setTurnstileToken(token)}
                                            onExpire={() => setTurnstileToken(null)}
                                        />

                                        {/* Submit Button */}
                                        <div className="flex items-center space-x-3 pt-2">
                                            <button
                                                type="submit"
                                                disabled={
                                                    isSubmitting ||
                                                    !turnstileToken ||
                                                    attachments.length === 0 ||
                                                    (submissionType === "website" && formData.rating === 0) ||
                                                    (submissionType === "phone" && (
                                                        !formData.scammerPhone || !formData.reporterPhone ||
                                                        !isValidPhoneNumber(formData.scammerPhone) || !isValidPhoneNumber(formData.reporterPhone)
                                                    )) ||
                                                    (submissionType === "upi" && (
                                                        (upiInputType === 'id' && !formData.upiId.trim()) ||
                                                        (upiInputType === 'qr' && !formData.upiQr) ||
                                                        (!isAnonymous && (!formData.reporterPhone || !isValidPhoneNumber(formData.reporterPhone)))
                                                    )) ||
                                                    (submissionType === "website" && !isAnonymous && formData.phone && !isValidPhoneNumber(formData.phone)) ||
                                                    (!isAnonymous && !formData.name.trim())
                                                }
                                                className="flex-1 gradient-primary text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                                                        <span>Submitting...</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <Send className="h-5 w-5" />
                                                        <span>Submit Report</span>
                                                    </>
                                                )}
                                            </button>
                                            <button
                                                type="button"
                                                onClick={onClose}
                                                className="px-6 py-3 rounded-xl glass border border-gray-200 dark:border-gray-700 font-medium text-gray-700 dark:text-gray-300 hover:shadow-lg transition-all"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </form>

                                    {/* Info Note */}
                                    <div className="mt-6 p-4 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/30">
                                        <div className="flex items-start space-x-3">
                                            <AlertCircle className="h-5 w-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-0.5" />
                                            <div className="text-sm text-indigo-800 dark:text-indigo-300">
                                                <p className="mb-1">
                                                    Your report will be verified and published within 24 hours. We moderate all submissions to ensure quality and authenticity.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
