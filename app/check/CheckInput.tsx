"use client";

import dynamic from "next/dynamic";

const UrlInput = dynamic(() => import("@/components/UrlInput"), { ssr: false });

const checkContent = {
    placeholder: "Enter website URL, phone number, or UPI ID",
    buttonText: "Check Now",
    analyzing: "Analyzing...",
    description: "Instant fraud check across websites, phone numbers & UPI IDs",
    errors: {
        enterUrl: "Please enter a website URL, phone number, or UPI ID",
        completeCaptcha: "Please complete the CAPTCHA verification",
        generalError: "We're having trouble analyzing this right now. Please try again in a moment.",
        noSlug: "We're having trouble analyzing this right now. Please try again in a moment.",
        suggestionError: "We couldn't analyze this suggestion. Please try selecting a different option.",
        suggestionGeneralError: "We're having trouble analyzing this suggestion. Please try again or select a different option.",
        captchaExpired: "CAPTCHA verification expired. Please complete it again.",
    },
    suggestions: {
        title: "Did you mean one of these?",
        busyMessage: "Our system is temporarily busy due to high traffic. Please try again in a few moments.",
    },
};

export default function CheckInput() {
    return <UrlInput content={checkContent} />;
}
