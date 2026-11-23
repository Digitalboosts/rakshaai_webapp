"use client";

import dynamic from "next/dynamic";

const UrlInput = dynamic(() => import("@/components/UrlInput"), { ssr: false });

const upiContent = {
    placeholder: "Enter UPI ID (e.g. name@okaxis, 9876543210@upi)",
    buttonText: "Check UPI ID",
    analyzing: "Analyzing...",
    description: "We'll check this UPI ID against fraud databases instantly",
    errors: {
        enterUrl: "Please enter a UPI ID",
        completeCaptcha: "Please complete the CAPTCHA verification",
        generalError: "We're having trouble checking this UPI ID right now. Please try again in a moment.",
        noSlug: "We're having trouble checking this UPI ID right now. Please try again in a moment.",
        suggestionError: "We couldn't analyze this suggestion. Please try selecting a different option.",
        suggestionGeneralError: "We're having trouble analyzing this suggestion. Please try again or select a different option.",
        captchaExpired: "CAPTCHA verification expired. Please complete it again.",
    },
    suggestions: {
        title: "Did you mean one of these UPI IDs?",
        busyMessage: "Our system is temporarily busy due to high traffic. Please try again in a few moments.",
    },
};

export default function UpiCheckerInput() {
    return <UrlInput content={upiContent} initialType="is_upi" />;
}
