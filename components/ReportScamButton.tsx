"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import ReviewSubmissionModal from "./ReviewSubmissionModal";

interface ReportScamButtonProps {
    className?: string;
    children?: React.ReactNode;
    websiteUrl?: string;
}

export default function ReportScamButton({ className, children, websiteUrl }: ReportScamButtonProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <>
            <button
                type="button"
                onClick={() => setIsOpen(true)}
                className={className}
            >
                {children ?? "Report a Scam"}
            </button>

            {mounted && createPortal(
                <ReviewSubmissionModal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    websiteUrl={websiteUrl}
                />,
                document.body
            )}
        </>
    );
}
