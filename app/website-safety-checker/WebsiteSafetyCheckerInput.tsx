"use client";

import dynamic from "next/dynamic";

// Lazy import to keep the main page server-rendered; only this tiny island is client-side
const UrlInput = dynamic(() => import("@/components/UrlInput"), { ssr: false });

const defaultContent = {
    placeholder: "Enter website URL (e.g. example.com)",
    buttonText: "Check Safety",
    analyzing: "Analyzing...",
    description: "Free instant safety check",
    errors: {
        enterUrl: "Please enter a URL",
        completeCaptcha: "Please complete the CAPTCHA verification",
        generalError: "We're having trouble analyzing this website right now. Please try again in a moment.",
        noSlug: "We're having trouble analyzing this website right now. Please try again in a moment.",
        suggestionError: "We couldn't analyze this suggestion. Please try selecting a different option.",
        suggestionGeneralError: "We're having trouble analyzing this suggestion. Please try again or select a different option.",
        captchaExpired: "CAPTCHA verification expired. Please complete it again."
    },
    suggestions: {
        title: "Did you mean one of these websites?",
        busyMessage: "Our system is temporarily busy due to high traffic. Please try again in a few moments."
    }
};

export default function WebsiteSafetyCheckerInput({ dark }: { dark?: boolean }) {
    return (
        <div className={dark ? "website-checker-dark" : ""}>
            <UrlInput content={defaultContent} initialType="is_website" />
        </div>
    );
}
