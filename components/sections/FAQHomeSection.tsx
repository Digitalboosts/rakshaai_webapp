'use client';

import { useState } from "react";
import Link from "next/link";
import SectionContainerServer from "@/components/ui/SectionContainerServer";
import { ChevronDownIcon, HelpCircle, Shield, Star, AlertTriangle, Database, FileText, AlertCircle } from "lucide-react";

interface FAQItem {
    id: string;
    question: string;
    answer: string;
    icon: React.ReactNode;
}

const faqItems: FAQItem[] = [
    {
        id: "free",
        question: "Are RakshaAI consumer checks free?",
        answer: "Yes. Individuals can currently run supported website, UPI ID, phone number and document checks without a paid subscription. Business verification and future enterprise services may be paid separately.",
        icon: <Star className="h-5 w-5" />
    },
    {
        id: "accuracy",
        question: "How accurate is your scam detection?",
        answer: "RakshaAI evaluates available signals such as domain information, threat intelligence and community-reported fraud context. Coverage varies by input, and no automated tool catches every scam. Treat the result as decision support and verify high-value decisions independently.",
        icon: <Shield className="h-5 w-5" />
    },
    {
        id: "account",
        question: "Do I need to create an account?",
        answer: "Yes. A free RakshaAI user account and secure login are required before running a website, UPI ID, phone number, or document check.",
        icon: <HelpCircle className="h-5 w-5" />
    },
    {
        id: "different",
        question: "What makes RakshaAI different from global tools like VirusTotal?",
        answer: "RakshaAI focuses on scam patterns and digital behaviours relevant to Indian users, including UPI fraud, digital-arrest impersonation and fake government or commercial portals. Different security tools serve different purposes, so RakshaAI should complement rather than replace specialist security products.",
        icon: <Star className="h-5 w-5" />
    },
    {
        id: "upi-scams",
        question: "What are the most common UPI scams in India?",
        answer: "The most common UPI fraud patterns are: fake collect requests disguised as 'cashback' or 'refund' (approving sends money out, not in), QR code scams where scanning initiates a payment rather than receiving one, and impersonation of banks or NPCI asking to 'verify' your UPI PIN. The golden rule: UPI can never be used to receive money by approving a collect request  you only ever send money that way.",
        icon: <AlertTriangle className="h-5 w-5" />
    },
    {
        id: "digital-arrest",
        question: "What is a digital arrest scam?",
        answer: "A digital arrest scam is when fraudsters call or video-call you while impersonating CBI, Narcotics Control Bureau, Enforcement Directorate, or Supreme Court officials. They claim you are implicated in a crime involving your Aadhaar, bank account, or a parcel in your name, then demand 'bail money' or 'security deposits' to avoid arrest. These calls are entirely fake  no Indian law enforcement agency conducts video-call arrests or demands payment. Hang up immediately.",
        icon: <AlertTriangle className="h-5 w-5" />
    },
    {
        id: "scammed",
        question: "What should I do if I've already been scammed?",
        answer: "Act immediately  time is critical for recovery. 1) Call Cybercrime Helpline 1930 right now (free, 24/7). 2) Call your bank to request a transaction hold. 3) File a complaint at cybercrime.gov.in. 4) Change your UPI PIN and mobile banking password. 5) Report the scammer's phone number or UPI ID on RakshaAI to protect other Indians. Complaints filed within one hour have the highest chance of transaction reversal.",
        icon: <AlertTriangle className="h-5 w-5" />
    },
    {
        id: "clicked-link",
        question: "What should I do if I clicked a suspicious link?",
        answer: "Don't panic  act quickly. Close the tab immediately. If the site asked you to log in, change that account's password right now. If you downloaded a file or APK, do not open it and delete it immediately. Run a malware scan if possible. If you entered any banking details, call your bank to flag the card or account. Report the URL to RakshaAI so others are warned.",
        icon: <Shield className="h-5 w-5" />
    },
    {
        id: "phone-safe",
        question: "Is it safe to enter my phone number or UPI ID on RakshaAI?",
        answer: "Yes. RakshaAI does not store, sell, or share the numbers or IDs you check. Your queries are processed in real time and not linked to your identity. We never contact you after a search, and we don't build marketing profiles from search data. Privacy is a core principle of how the platform is built.",
        icon: <Shield className="h-5 w-5" />
    },
    {
        id: "job-scam",
        question: "How do I spot a fake job offer scam?",
        answer: "Fake job scams typically arrive via WhatsApp from unknown numbers. Red flags include: payment required to 'unlock premium tasks', vague job descriptions involving liking social media posts or watching videos, requests for Aadhaar or bank details upfront, and guaranteed daily earnings that seem unrealistically high. No legitimate employer asks you to pay money to start working.",
        icon: <HelpCircle className="h-5 w-5" />
    },
    {
        id: "investment-scam",
        question: "How do investment scams work in India?",
        answer: "The most common pattern is 'pig butchering': scammers befriend you on WhatsApp, Telegram, or dating apps over weeks, then invite you to a fake investment platform that shows impressive fake returns. You're allowed to withdraw small amounts early to build trust, then pressured to invest large sums. When you try to withdraw, the platform disappears or demands 'tax clearance fees'. Always verify investment platforms at SEBI.gov.in and never invest based on unsolicited social media tips.",
        icon: <AlertTriangle className="h-5 w-5" />
    },
    {
        id: "report",
        question: "How do I report a scammer on RakshaAI?",
        answer: "Use the 'Report Scam' button on any page to submit a phone number, UPI ID, or website URL that you believe is fraudulent. Your report is reviewed and, if verified, added to our database to warn other users. You can also call 1930 and file at cybercrime.gov.in for formal government action. Every report you submit directly protects other Indians.",
        icon: <HelpCircle className="h-5 w-5" />
    },
    {
        id: "business",
        question: "Can my business get verified on RakshaAI?",
        answer: "Yes. RakshaAI offers a business verification program for legitimate Indian businesses. Verified businesses receive a trust badge displayed whenever their website, UPI ID, or phone number is checked by any user. This helps honest businesses build credibility and directly reduces fraud in their name. Visit our business verification page to apply.",
        icon: <Star className="h-5 w-5" />
    }
];

function FAQAccordionItem({ item, isOpen, onToggle }: {
    item: FAQItem;
    isOpen: boolean;
    onToggle: () => void;
}) {
    return (
        <div className="group">
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-600 transition-all duration-300 hover:shadow-lg group-hover:-translate-y-1"
            >
                <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white">
                        {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-left group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {item.question}
                    </h3>
                </div>
                <ChevronDownIcon
                    className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                        }`}
                />
            </button>

            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="p-6 pt-4 bg-gradient-to-r from-gray-50 to-purple-50 dark:from-gray-800 dark:to-purple-900/20 mx-6 rounded-b-xl border-l-4 border-purple-500">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {item.answer.split(/\d\)/).map((part, index) => {
                            if (index === 0 && !part.includes("1)")) {
                                return part;
                            }
                            if (part.trim()) {
                                return (
                                    <span key={index}>
                                        <strong className="text-purple-600 dark:text-purple-400">
                                            {index})
                                        </strong>
                                        {part}
                                        {index < item.answer.split(/\d\)/).length - 1 && <br />}
                                    </span>
                                );
                            }
                            return null;
                        })}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function FAQHomeSection() {
    const [openFAQ, setOpenFAQ] = useState<string | null>(null);

    const toggleFAQ = (id: string) => {
        setOpenFAQ(openFAQ === id ? null : id);
    };

    return (
        <SectionContainerServer background="gradient" id="faq" className="py-24">
            <div className="space-y-16">
                {/* Header */}
                <div className="text-center space-y-6">
                    <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Common questions about online scams in India, how RakshaAI detects fraud, and what to do if you get scammed.
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="max-w-4xl mx-auto space-y-4">
                    {faqItems.map((item) => (
                        <FAQAccordionItem
                            key={item.id}
                            item={item}
                            isOpen={openFAQ === item.id}
                            onToggle={() => toggleFAQ(item.id)}
                        />
                    ))}
                </div>

                {/* Resource Links */}
                <div className="max-w-4xl mx-auto">
                    <p className="text-center text-sm font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-5">Quick Resources</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <Link
                            href="/scam-intelligence"
                            className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-indigo-400 dark:hover:border-indigo-500 hover:shadow-sm transition-all group"
                        >
                            <Database className="h-5 w-5 text-indigo-500 flex-shrink-0" />
                            <div>
                                <p className="font-semibold text-gray-900 dark:text-white text-sm group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Scam Intelligence</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">India fraud database</p>
                            </div>
                        </Link>
                        <Link
                            href="/how-to-report-cybercrime-india"
                            className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-indigo-400 dark:hover:border-indigo-500 hover:shadow-sm transition-all group"
                        >
                            <FileText className="h-5 w-5 text-indigo-500 flex-shrink-0" />
                            <div>
                                <p className="font-semibold text-gray-900 dark:text-white text-sm group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Report Cybercrime</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">All reporting channels</p>
                            </div>
                        </Link>
                        <Link
                            href="/got-scammed"
                            className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 border border-red-200 dark:border-red-900/50 rounded-xl hover:border-red-400 dark:hover:border-red-600 hover:shadow-sm transition-all group"
                        >
                            <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                            <div>
                                <p className="font-semibold text-gray-900 dark:text-white text-sm group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">Got Scammed?</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Emergency recovery guide</p>
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
        </SectionContainerServer>
    );
}
