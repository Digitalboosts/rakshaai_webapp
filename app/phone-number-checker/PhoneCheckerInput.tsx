"use client";

import dynamic from "next/dynamic";

const UrlInput = dynamic(() => import("@/components/UrlInput"), { ssr: false });

const phoneContent = {
    placeholder: "Enter phone number (e.g. 9876543210)",
    buttonText: "Check Number",
    analyzing: "Analyzing...",
    description: "We'll check this number against scam databases instantly",
    errors: {
        enterUrl: "Please enter a phone number",
        completeCaptcha: "Please complete the CAPTCHA verification",
        generalError: "We're having trouble checking this number right now. Please try again in a moment.",
        noSlug: "We're having trouble checking this number right now. Please try again in a moment.",
        suggestionError: "We couldn't analyze this suggestion. Please try selecting a different option.",
        suggestionGeneralError: "We're having trouble analyzing this suggestion. Please try again or select a different option.",
        captchaExpired: "CAPTCHA verification expired. Please complete it again.",
    },
    suggestions: {
        title: "Did you mean one of these numbers?",
        busyMessage: "Our system is temporarily busy due to high traffic. Please try again in a few moments.",
    },
};

export default function PhoneCheckerInput() {
    return <UrlInput content={phoneContent} initialType="is_phone" />;
}
