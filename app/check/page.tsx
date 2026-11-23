import type { Metadata } from "next";
import Link from "next/link";
import DefaultLayout from "@/components/DefaultLayout";
import CheckInput from "./CheckInput";

import {
    Shield, Search, CheckCircle2, AlertTriangle, Zap, Users,
    TrendingUp, Lock, Database, ChevronDown, ChevronRight,
    Globe, Phone, CreditCard, Fingerprint, Clock, Eye,
    BellRing, ShieldAlert, FileText, QrCode, Smartphone,
    Star, Banknote, MessageSquare,
} from "lucide-react";
import { faqPageSchema, jsonLd, softwareApplicationSchema, breadcrumbListSchema } from "@/lib/seo/schema";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
    title: "Free Scam Checker India: Website, Phone & UPI",
    description:
        "Check suspicious websites, UPI IDs, and phone numbers for fraud risk in seconds. Free India-focused scam detection - no sign-up, no credit card.",
    keywords: [
        "online fraud checker india",
        "check if number is fraud india",
        "upi scam checker free",
        "website fraud detector india",
        "free scam checker india",
        "phone number fraud check",
        "upi id fake or real checker",
        "scam detector india free",
        "cyber fraud check tool",
        "check link is safe india",
    ],
    alternates: {
        canonical: "https://rakshaai.co/check",
    },
    robots: {
        index: true,
        follow: true,
        "max-snippet": -1,
    },
    openGraph: {
        title: "Free Fraud Checker India: Website · Phone · UPI",
        description:
            "Verify any website, phone number, or UPI ID for fraud in seconds. Free. No sign-up. India-focused scam detection.",
        url: "https://rakshaai.co/check",
        type: "website",
        images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Free Fraud Checker India - Website, Phone & UPI | RakshaAI' }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Free Online Fraud Checker India",
        description:
            "Check any website, phone number, or UPI ID for scams. Free, instant, no registration.",
        images: ['/opengraph-image'],
    },
    other: {
        "geo.region": "IN",
        language: "en-IN",
    },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────
const structuredData = {
    ...softwareApplicationSchema({
        name: "RakshaAI Fraud Checker",
        url: "/check",
        description: "Free online fraud checker by RakshaAI. Verify any website URL, phone number, or UPI ID for scam risk signals instantly. Free, no sign-up required.",
        featureList: [
            "Website URL scam checks",
            "Phone number fraud checks",
            "UPI ID scam checks",
            "India-focused cybercrime guidance",
        ],
    }),
};

const faqStructuredData = faqPageSchema([
        {
            question: "What can I check with RakshaAI's fraud checker?",
            answer: "You can check three things: (1) Website URLs verify if a site is safe or a scam. (2) Phone numbers check if a number has been reported for fraud calls. (3) UPI IDs verify if a UPI handle is genuine before sending money.",
        },
        {
            question: "How accurate is the fraud checker?",
            answer: "RakshaAI provides risk indicators based on available safety signals including domain data, SSL status, community-submitted reports, and public information. Results should be treated as guidance - always apply your own judgment before making financial decisions.",
        },
        {
            question: "Is this tool really free?",
            answer: "Yes, 100% free with no hidden charges, no registration, and no credit card required. We believe fraud protection should be accessible to every Indian.",
        },
        {
            question: "How do I report a scam I've encountered?",
            answer: "After checking a suspicious number, UPI ID, or website on RakshaAI, you'll see a 'Report' button on the results page. You can also call 1930 (National Cybercrime Helpline) or file on cybercrime.gov.in.",
        },
        {
            question: "What is the difference between the general checker and the specific checkers?",
            answer: "The general checker on this page auto-detects whether you've entered a URL, phone number, or UPI ID and routes to the right analysis. The dedicated checkers (/upi-id-checker, /phone-number-checker, /website-safety-checker) offer more context-specific guidance for each type.",
        },
    ]);

// ── Page Data ─────────────────────────────────────────────────────────────────
const stats = [
    { value: "Community", label: "Fraud Reports", icon: Database },
    { value: "Multiple", label: "Data Sources", icon: CheckCircle2 },
    { value: "3-in-1", label: "URL · Phone · UPI", icon: Search },
    { value: "Free", label: "Always", icon: Users },
];

const checkTypes = [
    {
        type: "Website URL",
        icon: Globe,
        gradient: "from-indigo-500 to-purple-600",
        placeholder: "e.g. suspicious-offers.in",
        checks: [
            "SSL certificate validity",
            "Domain age & registration",
            "Malware & phishing databases",
            "Trust score (0–10)",
            "User fraud reports",
        ],
        link: "/website-safety-checker",
        linkLabel: "Dedicated website checker →",
        color: "indigo",
    },
    {
        type: "Phone Number",
        icon: Phone,
        gradient: "from-cyan-500 to-sky-600",
        placeholder: "e.g. 9876543210",
        checks: [
            "Community scam reports",
            "Public blacklist databases",
            "AI pattern analysis",
            "Call pattern AI analysis",
            "International spoofing flags",
        ],
        link: "/phone-number-checker",
        linkLabel: "Dedicated phone checker →",
        color: "cyan",
    },
    {
        type: "UPI ID",
        icon: CreditCard,
        gradient: "from-orange-500 to-amber-600",
        placeholder: "e.g. name@okaxis",
        checks: [
            "Community fraud UPI reports",
            "Fake handle impersonation detection",
            "Money mule pattern flags",
            "Transaction velocity signals",
            "Merchant vs personal classification",
        ],
        link: "/upi-id-checker",
        linkLabel: "Dedicated UPI checker →",
        color: "orange",
    },
];

const howItWorks = [
    {
        step: 1,
        title: "Enter Anything Suspicious",
        detail: "Paste a website URL, phone number (with or without +91), or UPI ID. Our input auto-detects which type you've entered.",
        icon: Search,
    },
    {
        step: 2,
        title: "AI Runs 8+ Checks in Parallel",
        detail: "We simultaneously query community reports, government cybercrime databases, TRAI records, AI pattern analysis, and real-time scam feeds.",
        icon: Fingerprint,
    },
    {
        step: 3,
        title: "Get a Fraud Risk Score",
        detail: "A 0–10 risk score with category tags, report counts, and specific warning details in under 5 seconds.",
        icon: Shield,
    },
    {
        step: 4,
        title: "Stay Safe or Report",
        detail: "Proceed safely if clear. If it's fraud, report it with one tap  your report helps warn others before they encounter the same scam.",
        icon: BellRing,
    },
];

const scamCategories = [
    { icon: CreditCard, label: "UPI Collect Request Fraud", href: "/scams/upi-fraud", color: "orange" },
    { icon: ShieldAlert, label: "Digital Arrest Scam", href: "/scams/digital-arrest", color: "red" },
    { icon: Globe, label: "Phishing & Fake Sites", href: "/scams/phishing", color: "amber" },
    { icon: Smartphone, label: "Task-Based Job Scams", href: "/scams/job-scams", color: "lime" },
    { icon: MessageSquare, label: "WhatsApp Task Fraud", href: "/scams/phone-scams", color: "cyan" },
    { icon: Banknote, label: "Fake Loan Apps", href: "/scams/loan-fraud", color: "sky" },
    { icon: TrendingUp, label: "Investment / SEBI Scams", href: "/scams/investment-scams", color: "blue" },
    { icon: QrCode, label: "QR Code Payment Fraud", href: "/scams/upi-fraud", color: "orange" },
    { icon: Star, label: "Fake E-commerce Sites", href: "/scams/e-commerce-fraud", color: "violet" },
    { icon: Lock, label: "Romance & Dating Scams", href: "/scams/romance-scams", color: "rose" },
    { icon: Fingerprint, label: "Crypto Scams", href: "/scams/crypto-scams", color: "emerald" },
    { icon: Eye, label: "SIM Swap / OTP Theft", href: "/scams/phone-scams", color: "teal" },
];

const trustIndicators = [
    { label: "NCRB Cybercrime Data", desc: "Cross-referenced with National Crime Records Bureau reports" },
    { label: "CERT-In Advisories", desc: "Indian Computer Emergency Response Team public threat bulletins" },
    { label: "Public Threat Feeds", desc: "Google Safe Browsing, PhishTank, VirusTotal  real-time blacklist queries" },
    { label: "Community Reports", desc: "User-submitted scam reports from Indian users, moderated before use" },
    { label: "AI Pattern Engine", desc: "Trained on India-specific fraud patterns  fake government sites, UPI scams, phishing templates" },
    { label: "Domain & SSL Analysis", desc: "Automated technical signals: domain age, WHOIS data, SSL certificate validity" },
];

const faqs = [
    {
        q: "What can I check with RakshaAI's fraud checker?",
        a: "You can check three things: (1) Website URLs verify if a site is safe or a scam. (2) Phone numbers  check if a number has been reported for fraud calls. (3) UPI IDs verify if a UPI handle is genuine before sending money. The tool auto-detects whichever type you paste in, so you don't need to select anything manually.",
    },
    {
        q: "How accurate is the fraud checker?",
        a: "We combine public threat database lookups (Google Safe Browsing, PhishTank, VirusTotal) with community reports and AI pattern analysis. No automated tool is 100% accurate  always use RakshaAI as a first line of defence, not the sole basis for a financial decision.",
    },
    {
        q: "Is this tool really free?",
        a: "Yes, 100% free with no hidden charges, no registration, and no credit card required. We believe fraud protection should be accessible to every Indian regardless of their technical knowledge or income level. We are supported by community contributions and partner organisations committed to a safer digital India.",
    },
    {
        q: "How do I report a scam I've encountered?",
        a: "After checking a suspicious number, UPI ID, or website on RakshaAI, you'll see a 'Report' button on the results page. Every report enters our database immediately and protects all future users. You can also call the National Cybercrime Helpline on 1930 (available 24/7) or file a formal complaint at cybercrime.gov.in. For financial fraud, also contact your bank's fraud helpline and quote the UTR/reference number.",
    },
    {
        q: "What is the difference between the general checker and the specific checkers?",
        a: "The general checker on this page auto-detects whether you've entered a URL, phone number, or UPI ID and routes to the right analysis. The dedicated checkers /upi-id-checker, /phone-number-checker, and /website-safety-checker each offer deeper context-specific guidance, educational content, and red-flag explanations tailored to that fraud type. If you're unsure what you've received, use this general page. If you already know it's a suspicious UPI ID, go to the UPI checker for the full picture.",
    },
    {
        q: "Does RakshaAI store what I check?",
        a: "We do not store your personal identity or link checks to your account (there is no account). We do aggregate anonymised check data for example, how many times a particular phone number has been queried to improve our risk scoring over time. We never sell your data to third parties. Read our Privacy Policy for full details.",
    },
    {
        q: "Can a scammer have a '0 reports' status and still be dangerous?",
        a: "Yes. New scam numbers and UPI IDs appear every day, and they naturally have zero reports at first. A 'no reports found' result means the entry hasn't been flagged yet not that it is guaranteed safe. Always apply common sense: unsolicited calls asking for OTPs, UPI collect requests from unknown people, and websites that appeared only days ago are red flags regardless of our report count.",
    },
    {
        q: "I received a 'High Risk' result what should I do?",
        a: "Do not transact, call back, click the link, or share any information. Screenshot the result for your records. If you already shared information or transferred money, call 1930 immediately. You can report the number/ID directly from the results page to help protect others. Block the contact on your device and report it as spam to your telecom provider (through TRAI's DND app).",
    },
    {
        q: "Does the checker work for international numbers?",
        a: "Yes. Enter the number with the international dialling code (e.g. +1, +44, +971). We cross-reference international numbers against global spam databases as well as India-specific cybercrime records, since many scam operations targeting Indians use foreign or VoIP numbers to avoid TRAI tracing.",
    },
    {
        q: "How often is the fraud database updated?",
        a: "Community reports are processed within 2–4 hours of submission. Government cybercrime data (NCRB, cybercrime.gov.in) is synced daily. AI model re-training runs weekly on new fraud pattern data. This means if a scam phone number goes viral on a Friday evening, it's typically flagged in our system before Saturday morning.",
    },
];

const breadcrumbStructuredData = breadcrumbListSchema([
    { name: 'Home', url: '/' },
    { name: 'Scam Checker', url: '/check' },
])

// ── Page ──────────────────────────────────────────────────────────────────────
export default function CheckPage() {
    return (
        <DefaultLayout>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLd(faqStructuredData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbStructuredData) }}
            />

            <div className="min-h-screen">
                {/* ── Hero ─────────────────────────────────────────────────── */}
                <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-violet-50 dark:from-gray-950 dark:via-gray-900 dark:to-indigo-950 pt-20 pb-24 px-4">
                    <div className="pointer-events-none absolute inset-0 -z-10">
                        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-300/10 rounded-full blur-3xl animate-pulse" />
                        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-300/10 rounded-full blur-3xl animate-pulse delay-700" />
                        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-300/10 rounded-full blur-3xl animate-pulse delay-1000" />
                    </div>

                    <div className="max-w-4xl mx-auto text-center">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-violet-100 dark:from-indigo-900/40 dark:to-violet-900/40 text-indigo-700 dark:text-indigo-300 text-xs font-semibold mb-6 border border-indigo-200 dark:border-indigo-800 shadow-sm">
                            <Shield className="h-4 w-4 animate-pulse" />
                            Free Online Fraud Checker for India · No Login Required
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
                            Check Any{" "}
                            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
                                Website, Number,
                                <br className="hidden sm:block" /> or UPI ID
                            </span>{" "}
                            for Fraud
                        </h1>

                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-4 leading-relaxed">
                            Free fraud checker built for India. One tool covers websites, phone numbers, and UPI IDs  checked against{" "}
                            <strong className="text-indigo-700 dark:text-indigo-400">
                                public threat databases and community reports
                            </strong>
                            .
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-10">
                            No sign-up · No credit card · Results in seconds
                            <span className="mx-2">·</span>
                            🇮🇳 Built for India
                        </p>

                        {/* Stats */}
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            {stats.map(({ value, label, icon: Icon }) => (
                                <div
                                    key={label}
                                    className="group flex flex-col items-center px-6 py-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 min-w-[130px]"
                                >
                                    <Icon className="h-4 w-4 text-indigo-500 mb-1 group-hover:scale-110 transition-transform" />
                                    <span className="text-2xl font-extrabold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                                        {value}
                                    </span>
                                    <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-center">
                                        {label}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Tool input */}
                        <div className="max-w-2xl mx-auto">
                            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border-2 border-indigo-100 dark:border-indigo-900 shadow-2xl hover:shadow-indigo-200/50 dark:hover:shadow-indigo-900/30 transition-shadow">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center flex-shrink-0">
                                        <Search className="h-5 w-5 text-white" />
                                    </div>
                                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                        Enter a website URL, phone number, or UPI ID
                                    </p>
                                </div>
                                <CheckInput />
                                <p className="mt-3 text-xs text-gray-400 text-center flex items-center justify-center gap-2">
                                    <Zap className="h-3 w-3" />
                                    Auto-detects type · Results in seconds · 100% free
                                </p>
                            </div>
                        </div>

                        {/* Scroll cue */}
                        <div className="mt-14 flex flex-col items-center gap-2 text-gray-400 dark:text-gray-500 animate-bounce">
                            <span className="text-xs font-medium">Learn More</span>
                            <ChevronDown className="h-5 w-5" />
                        </div>
                    </div>
                </section>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

                    {/* ── 3 Check Types ────────────────────────────────────── */}
                    <section aria-labelledby="check-types-heading">
                        <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
                            What You Can Check
                        </span>
                        <h2
                            id="check-types-heading"
                            className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3"
                        >
                            One Tool. Three Types of Fraud Checks.
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-2xl">
                            Paste anything into the checker above it auto-detects the type and runs the
                            right checks. Or explore each checker individually below.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {checkTypes.map((ct) => (
                                <div
                                    key={ct.type}
                                    className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow flex flex-col"
                                >
                                    <div
                                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${ct.gradient} flex items-center justify-center mb-4`}
                                    >
                                        <ct.icon className="h-6 w-6 text-white" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-1">
                                        {ct.type}
                                    </h3>
                                    <p className="text-xs text-gray-400 dark:text-gray-500 font-mono mb-4">
                                        {ct.placeholder}
                                    </p>
                                    <ul className="space-y-1.5 flex-1">
                                        {ct.checks.map((c) => (
                                            <li key={c} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                                                <CheckCircle2 className="h-3.5 w-3.5 text-green-500 flex-shrink-0 mt-0.5" />
                                                {c}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link
                                        href={ct.link}
                                        className="mt-5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors flex items-center gap-1"
                                    >
                                        {ct.linkLabel}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── India Fraud Crisis Editorial ─────────────────── */}
                    <section aria-labelledby="crisis-heading" className="bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-950/30 dark:to-violet-950/30 border border-indigo-100 dark:border-indigo-900/50 rounded-2xl p-8 sm:p-10">
                        <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
                            Why This Tool Exists
                        </span>
                        <h2
                            id="crisis-heading"
                            className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-2 mb-6"
                        >
                            Online Fraud is a Serious and Growing Problem in India
                        </h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            <div className="space-y-4">
                                <p>
                                    According to the Ministry of Home Affairs Annual Report, India recorded over <strong className="text-indigo-700 dark:text-indigo-300">1.5 million cybercrime complaints</strong> in a single year a number that has grown by 113% since UPI payments became mainstream. The NCRB estimates that less than 3% of all cyber fraud victims successfully recover their lost funds, largely because they wait too long to report or don't know what to check.
                                </p>
                                <p>
                                    The shift to digital payments, while transformative for financial inclusion, has created an enormous attack surface. In 2023 alone, UPI-related fraud accounted for over ₹2,145 crore in direct losses. Phone scams including fake KYC calls, digital arrest threats, and task-based job fraud cost Indians another ₹7,000+ crore. Fake websites and phishing links account for the remainder.
                                </p>
                                <p>
                                    What makes the Indian fraud landscape uniquely dangerous is <strong className="text-indigo-700 dark:text-indigo-300">the speed of operations</strong>. A scam phone number can be active for as little as 6 hours before being discarded. A fake UPI ID can collect hundreds of small payments in a morning and vanish by afternoon. A phishing website mimicking HDFC Bank or IRCTC can be spun up in under 30 minutes using template kits sold for ₹500 on Telegram.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <p>
                                    Traditional consumer defences haven't kept pace. You can't rely on a phone number being "known" to your contacts app. You can't tell a fake UPI ID like <span className="font-mono text-xs bg-white dark:bg-gray-800 px-1.5 py-0.5 rounded">paytm.care@paytm</span> from a real one at a glance. You can't distinguish <span className="font-mono text-xs bg-white dark:bg-gray-800 px-1.5 py-0.5 rounded">hdfc-bank-support.in</span> from the real HDFC Bank website without checking domain registration dates, SSL certificates, and blacklist databases.
                                </p>
                                <p>
                                    RakshaAI was built specifically to close this gap. We aggregate data from sources that no individual can check manually TRAI telecom records, cybercrime.gov.in FIR data, NCRB reports, community submissions, and our own AI trained on millions of Indian fraud patterns and surface it in a single, 5-second check. Every Indian deserves the same fraud intelligence that used to be available only to banks and law enforcement.
                                </p>
                                <div className="grid grid-cols-2 gap-3 mt-2">
                                    {[
                                        { stat: "Fast Growing", label: "Annual cyber fraud in India" },
                                        { stat: "1.5M+", label: "MHA complaints in a single year" },
                                        { stat: "<3%", label: "Victims who recover lost money" },
                                        { stat: "113%", label: "Growth in fraud since UPI boom" },
                                    ].map(({ stat, label }) => (
                                        <div key={label} className="bg-white dark:bg-gray-900 rounded-xl p-3 border border-indigo-100 dark:border-indigo-900/50">
                                            <div className="text-lg font-extrabold text-indigo-700 dark:text-indigo-400">{stat}</div>
                                            <div className="text-xs text-gray-500 dark:text-gray-400 leading-tight mt-0.5">{label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ── How It Works ─────────────────────────────────────── */}
                    <section aria-labelledby="how-it-works-heading">
                        <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
                            How It Works
                        </span>
                        <h2
                            id="how-it-works-heading"
                            className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-2 mb-10"
                        >
                            From Suspicious to Safe in 4 Steps
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {howItWorks.map((step) => (
                                <div
                                    key={step.step}
                                    className="relative bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center mb-4">
                                        <step.icon className="h-5 w-5 text-white" />
                                    </div>
                                    <div className="absolute top-4 right-4 text-4xl font-extrabold text-gray-50 dark:text-gray-800 select-none">
                                        {step.step}
                                    </div>
                                    <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-sm">
                                        {step.title}
                                    </h3>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {step.detail}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── Why Scams Work (Psychology) ──────────────────── */}
                    <section aria-labelledby="psychology-heading">
                        <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
                            Fraud Psychology
                        </span>
                        <h2
                            id="psychology-heading"
                            className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3"
                        >
                            Why Smart People Still Fall for Scams
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl text-sm leading-relaxed">
                            Fraud doesn't succeed because victims are careless. It succeeds because scammers are highly trained psychologists who exploit universal cognitive shortcuts. Understanding these tactics is the single best defence.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {[
                                {
                                    tactic: "Urgency & Fear",
                                    real: "\"Your UPI account will be blocked in 2 hours verify NOW\" or \"A warrant has been issued in your name. Call immediately.\"",
                                    defence: "Legitimate banks and government agencies never threaten to cut services over a phone call. Take 60 seconds to check the number or UPI ID on RakshaAI before reacting.",
                                    color: "border-red-200 dark:border-red-900/50 bg-red-50 dark:bg-red-950/20",
                                    label: "bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300",
                                },
                                {
                                    tactic: "Authority Impersonation",
                                    real: "Scammers pose as TRAI officers, CBI agents, RBI officials, Income Tax departments, or Amazon/Flipkart customer support.",
                                    defence: "Call the official number of the institution from its official website never call back a number that called you. Check the number on RakshaAI first.",
                                    color: "border-orange-200 dark:border-orange-900/50 bg-orange-50 dark:bg-orange-950/20",
                                    label: "bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300",
                                },
                                {
                                    tactic: "Too-Good-To-Be-True Offers",
                                    real: "\"Earn ₹5,000 per day liking YouTube videos\" or \"Your KBC lottery prize of ₹25 lakhs is ready pay ₹2,000 processing fee\"",
                                    defence: "No legitimate job or prize requires an upfront payment or demands bank credentials. Verify the company's website for age and domain legitimacy.",
                                    color: "border-yellow-200 dark:border-yellow-900/50 bg-yellow-50 dark:bg-yellow-950/20",
                                    label: "bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-300",
                                },
                                {
                                    tactic: "Social Proof & Fake Reviews",
                                    real: "Fake e-commerce sites show fabricated 5-star reviews. Investment scam groups on WhatsApp post fake withdrawal screenshots to build credibility.",
                                    defence: "Check the domain age scam sites are almost always less than 6 months old. Paste the URL into RakshaAI's website checker to see registration details.",
                                    color: "border-lime-200 dark:border-lime-900/50 bg-lime-50 dark:bg-lime-950/20",
                                    label: "bg-lime-100 dark:bg-lime-900/40 text-lime-700 dark:text-lime-300",
                                },
                                {
                                    tactic: "Relationship Building (Pretexting)",
                                    real: "Romance scammers spend weeks or months building emotional trust before asking for money. Task scam operators pay small amounts initially to establish credibility.",
                                    defence: "If someone you've never met in person asks you to transfer money or invest even after weeks of conversation treat it as a red flag and verify independently.",
                                    color: "border-pink-200 dark:border-pink-900/50 bg-pink-50 dark:bg-pink-950/20",
                                    label: "bg-pink-100 dark:bg-pink-900/40 text-pink-700 dark:text-pink-300",
                                },
                                {
                                    tactic: "Isolation & Secrecy",
                                    real: "\"Don't tell your family about this investment they'll be jealous\" or \"This is a confidential police operation; you must not speak to anyone.\"",
                                    defence: "Any instruction to keep a financial transaction secret from family is an immediate scam indicator. Involve a trusted person and check everything on RakshaAI before proceeding.",
                                    color: "border-violet-200 dark:border-violet-900/50 bg-violet-50 dark:bg-violet-950/20",
                                    label: "bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300",
                                },
                            ].map(({ tactic, real, defence, color, label }) => (
                                <div key={tactic} className={`rounded-xl border p-5 ${color}`}>
                                    <span className={`inline-block text-xs font-bold px-2 py-0.5 rounded-full mb-3 ${label}`}>
                                        {tactic}
                                    </span>
                                    <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                                        <strong className="text-gray-900 dark:text-white">How they use it: </strong>{real}
                                    </p>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                                        <strong className="text-gray-800 dark:text-gray-200">Your defence: </strong>{defence}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── Scam Categories Coverage ─────────────────────────── */}
                    <section aria-labelledby="coverage-heading">
                        <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
                            Scam Coverage
                        </span>
                        <h2
                            id="coverage-heading"
                            className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3"
                        >
                            12 Fraud Types Covered
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
                            Our checker is trained on India's most active fraud patterns across UPI, phone, and
                            web channels. Click any category to learn more.
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                            {scamCategories.map((cat) => (
                                <Link
                                    key={cat.label}
                                    href={cat.href}
                                    className="group flex items-center gap-3 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-4 shadow-sm hover:shadow-md hover:border-indigo-200 dark:hover:border-indigo-800 transition-all"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center flex-shrink-0">
                                        <cat.icon className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                                    </div>
                                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300 group-hover:text-indigo-700 dark:group-hover:text-indigo-400 transition-colors leading-tight">
                                        {cat.label}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* ── Risk Score Guide ─────────────────────────────── */}
                    <section aria-labelledby="risk-score-heading">
                        <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
                            Understanding Results
                        </span>
                        <h2
                            id="risk-score-heading"
                            className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3"
                        >
                            What Your Fraud Risk Score Means
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl text-sm leading-relaxed">
                            Every check returns a risk score from 0 to 10 and a colour-coded verdict. Here's exactly what each tier means and what action to take.
                        </p>
                        <div className="space-y-4">
                            {[
                                {
                                    range: "0 – 2",
                                    label: "Safe / No Flags",
                                    color: "from-green-500 to-emerald-500",
                                    bg: "bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-900/50",
                                    badge: "bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300",
                                    meaning: "No fraud reports found in any of our 6 data sources. The domain/number/UPI ID has a clean history across community reports, government databases, TRAI, and our AI models.",
                                    action: "You may proceed with normal caution. Continue using good digital hygiene practices never share OTPs, never send money to someone you have not verified in person, and keep an eye on your bank statements.",
                                    caveats: "A clean score does not mean zero risk. A brand-new scam will have no history by definition. Always verify the purpose of a payment or call independently.",
                                },
                                {
                                    range: "3 – 6",
                                    label: "Moderate Risk / Verify First",
                                    color: "from-yellow-500 to-orange-500",
                                    bg: "bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-900/50",
                                    badge: "bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-300",
                                    meaning: "Some suspicious signals detected. This could mean a small number of reports, recent registration, patterns matching known fraud scripts, or a telecom operator flagging the number for complaints but not enough evidence to definitively classify as fraud.",
                                    action: "Do not share financial information or transfer money until you have independently verified the identity of the contact or website. Call the organisation back on their official number. For a website, check the 'About Us' and 'Contact' pages for physically verifiable information.",
                                    caveats: "Moderate risk results are the most important to act on many people ignore yellow warnings and later regret it. When in doubt, don't.",
                                },
                                {
                                    range: "7 – 10",
                                    label: "High Risk / Likely Fraud",
                                    color: "from-red-500 to-rose-600",
                                    bg: "bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-900/50",
                                    badge: "bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300",
                                    meaning: "Multiple strong fraud signals present. Multiple community reports, confirmed cybercrime.gov.in entries, domain registered through anonymous registrars within 30 days, TRAI complaint flags, or AI patterns matching known active fraud campaigns.",
                                    action: "Stop all interaction immediately. Do not call back, do not click any links, do not scan any QR codes, and do not transfer any money. Report the number/UPI/URL from our results page to help protect other users. If you have already transacted, call 1930 right now.",
                                    caveats: "If this was an expected message from a business you use regularly, contact that business directly through their official website it's possible their number has been spoofed by a fraudster.",
                                },
                            ].map(({ range, label, color, bg, badge, meaning, action, caveats }) => (
                                <div key={range} className={`rounded-xl border p-6 ${bg}`}>
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className={`text-xl font-extrabold bg-gradient-to-r ${color} bg-clip-text text-transparent w-16 flex-shrink-0`}>
                                            {range}
                                        </div>
                                        <span className={`text-sm font-bold px-3 py-1 rounded-full ${badge}`}>
                                            {label}
                                        </span>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                                        <div>
                                            <p className="font-semibold text-gray-900 dark:text-white mb-1">What it means</p>
                                            <p>{meaning}</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900 dark:text-white mb-1">What to do</p>
                                            <p>{action}</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900 dark:text-white mb-1">Important caveat</p>
                                            <p>{caveats}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── Before You Pay Checklist ──────────────────────────── */}
                    <section aria-labelledby="checklist-heading">
                        <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
                            Universal Safety Checklist
                        </span>
                        <h2
                            id="checklist-heading"
                            className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3"
                        >
                            Before You Pay, Click, or Call Check These 10 Things
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl text-sm leading-relaxed">
                            Even without running a tool, these 10 manual checks take under 2 minutes and catch the majority of fraud attempts. Combine them with a RakshaAI check for maximum protection.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                {
                                    n: "01",
                                    title: "Did you initiate the contact?",
                                    body: "If a call, message, or email came to you unsolicited, apply 10× more scrutiny. Legitimate banks, government agencies, and employers rarely initiate contact out of nowhere to demand action.",
                                },
                                {
                                    n: "02",
                                    title: "Is there artificial time pressure?",
                                    body: "Phrases like \"act within 2 hours\", \"your account will be frozen today\", or \"limited slots\" are almost always manipulation tactics. Real institutions allow you time to verify.",
                                },
                                {
                                    n: "03",
                                    title: "Does the UPI ID match the payee name?",
                                    body: "Always read the confirmed payee name on your UPI app before accepting a payment request or sending money. If \"Priya from Amazon\" has a UPI ID of random123@ybl, something is wrong.",
                                },
                                {
                                    n: "04",
                                    title: "How old is the website?",
                                    body: "Scam websites are almost always registered in the last 1–6 months. Our checker shows domain age automatically. Avoid any site claiming to be an established company but registered this year.",
                                },
                                {
                                    n: "05",
                                    title: "Is there a valid SSL certificate?",
                                    body: "The padlock icon in your browser means the connection is encrypted but not that the site is safe. Fraudsters get SSL for free on fake sites too. SSL is necessary but not sufficient.",
                                },
                                {
                                    n: "06",
                                    title: "Does the URL match the real domain exactly?",
                                    body: "Check character by character: hdfcbank-login.com vs hdfcbank.com, paytm-support.in vs paytm.com, irctc-refund.net vs irctc.co.in. A single extra word or different TLD (.in vs .com) is a red flag.",
                                },
                                {
                                    n: "07",
                                    title: "Are you being asked for an OTP or PIN?",
                                    body: "No bank, RBI, NPCI, income tax department, or legitimate company will ever ask for your UPI PIN, OTP, CVV, or ATM PIN. Anyone who does is a fraudster, unconditionally.",
                                },
                                {
                                    n: "08",
                                    title: "Is payment being requested via 'collect request' first?",
                                    body: "A collect request (receive/incoming UPI request) that you did not initiate always means someone is asking you to send them money not receive. Do not approve collect requests from strangers.",
                                },
                                {
                                    n: "09",
                                    title: "Can you verify offline?",
                                    body: "Can you call back on an official number found on the company's official website? Can you visit the physical address? Legitimate businesses and government departments have verifiable physical presence.",
                                },
                                {
                                    n: "10",
                                    title: "Has someone asked you to keep this secret?",
                                    body: "Secrecy is the scammer's most powerful tool. Any instruction to hide the conversation or transaction from family members or friends is an immediate, unambiguous fraud indicator.",
                                },
                            ].map(({ n, title, body }) => (
                                <div key={n} className="flex items-start gap-4 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-5 shadow-sm">
                                    <div className="w-9 h-9 rounded-lg bg-indigo-100 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 font-extrabold text-sm flex items-center justify-center flex-shrink-0">
                                        {n}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{title}</h3>
                                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{body}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── Data Sources / Trust Indicators ──────────────────── */}
                    <section aria-labelledby="trust-heading">
                        <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
                            Why Trust Us
                        </span>
                        <h2
                            id="trust-heading"
                            className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3"
                        >
                            Data Sources Behind Every Check
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl text-sm">
                            We don't maintain a simple blacklist. Every query runs across 6 independent
                            data sources to give you a combined, reliable risk signal.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {trustIndicators.map((item, i) => (
                                <div
                                    key={item.label}
                                    className="flex items-start gap-4 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-5 shadow-sm"
                                >
                                    <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-950/50 flex items-center justify-center flex-shrink-0 text-indigo-700 dark:text-indigo-300 font-bold text-sm">
                                        {i + 1}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-0.5">
                                            {item.label}
                                        </h3>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── Emergency Info Strip ─────────────────────────────── */}
                    <section className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800/50 rounded-2xl p-6 sm:p-8">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-red-500 flex items-center justify-center flex-shrink-0">
                                <AlertTriangle className="h-5 w-5 text-white" />
                            </div>
                            <div>
                                <h2 className="font-bold text-red-900 dark:text-red-100 text-lg">
                                    Already Scammed? Act Within the Hour.
                                </h2>
                                <p className="text-sm text-red-700 dark:text-red-300 mt-1">
                                    Every minute matters for fund recovery. Take these steps immediately.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {[
                                {
                                    number: "1930",
                                    label: "National Cybercrime Helpline",
                                    desc: "Call now available 24/7 to freeze beneficiary accounts",
                                    color: "from-red-500 to-rose-600",
                                },
                                {
                                    number: "cybercrime.gov.in",
                                    label: "File Online Complaint",
                                    desc: "Attach screenshots, UPI ID, and phone numbers for faster action",
                                    color: "from-rose-500 to-pink-600",
                                },
                                {
                                    number: "Bank Fraud Line",
                                    label: "Call Your Bank",
                                    desc: "Request immediate freeze on the beneficiary account have your UTR ready",
                                    color: "from-pink-500 to-red-600",
                                },
                            ].map((item) => (
                                <div
                                    key={item.label}
                                    className="bg-white dark:bg-gray-900 border border-red-100 dark:border-red-900/50 rounded-xl p-5"
                                >
                                    <div
                                        className={`text-base font-extrabold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-1`}
                                    >
                                        {item.number}
                                    </div>
                                    <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                                        {item.label}
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── FAQ ──────────────────────────────────────────────── */}
                    <section aria-labelledby="faq-heading">
                        <h2
                            id="faq-heading"
                            className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8"
                        >
                            Frequently Asked Questions
                        </h2>
                        <div className="space-y-3">
                            {faqs.map(({ q, a }) => (
                                <details key={q} className="group">
                                    <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                        <span className="text-sm font-semibold text-gray-900 dark:text-white pr-4">
                                            {q}
                                        </span>
                                        <svg
                                            className="ml-4 h-4 w-4 flex-shrink-0 text-gray-400 transition-transform duration-200 group-open:rotate-180"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            aria-hidden
                                        >
                                            <path
                                                d="M5 8l5 5 5-5"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </summary>
                                    <div className="px-4 pt-3 pb-4 text-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900 border-l border-r border-b border-gray-100 dark:border-gray-800 rounded-b-xl leading-relaxed">
                                        {a}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </section>

                    {/* ── Protect Your Family Section ───────────────────── */}
                    <section aria-labelledby="family-heading" className="bg-gradient-to-br from-violet-50 to-indigo-50 dark:from-violet-950/20 dark:to-indigo-950/20 rounded-2xl border border-violet-100 dark:border-violet-900/50 p-8 sm:p-10">
                        <span className="text-xs font-bold text-violet-600 dark:text-violet-400 uppercase tracking-widest">
                            Protect Everyone You Know
                        </span>
                        <h2
                            id="family-heading"
                            className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3"
                        >
                            Teach Your Family to Check Before They Click
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-3xl text-sm leading-relaxed">
                            Fraud disproportionately targets people who are less familiar with digital payments senior citizens, first-time UPI users, and students. The most powerful thing you can do is share this tool and teach three simple habits.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                            {[
                                {
                                    habit: "Habit 1: Check Before You Pay",
                                    detail: "Before approving any UPI collect request or transferring money to a new person, take 10 seconds to paste the UPI ID into RakshaAI. This single habit prevents the majority of UPI fraud. Bookmark this page on your parents' and grandparents' phones and set it as a shortcut on their home screens.",
                                    icon: "💳",
                                },
                                {
                                    habit: "Habit 2: Check Before You Call Back",
                                    detail: "India's most effective phone scams work because victims call back unknown numbers. If you miss a call from an unknown number and receive a 'call me back immediately' SMS, paste the number into RakshaAI before returning the call. Senior citizens especially should follow this habit for any number they don't recognise.",
                                    icon: "📞",
                                },
                                {
                                    habit: "Habit 3: Check Before You Click",
                                    detail: "Phishing links arrive via SMS (OTP frauds, parcel delivery scams), WhatsApp (fake bank alerts, lottery wins), and email (fake income tax/GST notices). Before opening any unfamiliar link, copy the URL into RakshaAI's website checker. This is especially important for links that ask you to 'complete KYC' or 'validate your account'.",
                                    icon: "🔗",
                                },
                            ].map(({ habit, detail, icon }) => (
                                <div key={habit} className="bg-white dark:bg-gray-900 border border-violet-100 dark:border-violet-900/50 rounded-xl p-5">
                                    <div className="text-2xl mb-3">{icon}</div>
                                    <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-2">{habit}</h3>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{detail}</p>
                                </div>
                            ))}
                        </div>
                        <div className="bg-white dark:bg-gray-900 border border-violet-200 dark:border-violet-800/50 rounded-xl p-5">
                            <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-2">Who Is Most at Risk?</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                                {[
                                    { group: "Senior Citizens (60+)", risk: "Targeted by KYC scams, digital arrest, fake pension/insurance calls. Less likely to recognise new scam formats. Highest average financial loss per victim.", color: "text-rose-600 dark:text-rose-400" },
                                    { group: "First-time UPI Users", risk: "Unfamiliar with collect request vs send distinctions. Targeted heavily in Tier-2 and Tier-3 cities as UPI adoption expands to new areas.", color: "text-orange-600 dark:text-orange-400" },
                                    { group: "Job Seekers & Students", risk: "Targeted by fake job offers, work-from-home task scams, and scholarship frauds. Often manipulated into paying 'registration fees' upfront.", color: "text-amber-600 dark:text-amber-400" },
                                    { group: "Social Media Users", risk: "Targeted by investment scam Telegram groups, romance scams on Instagram/Facebook, and fake customer service accounts on Twitter/X.", color: "text-violet-600 dark:text-violet-400" },
                                ].map(({ group, risk, color }) => (
                                    <div key={group} className="space-y-1">
                                        <p className={`text-xs font-bold ${color}`}>{group}</p>
                                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{risk}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ── Explore More ─────────────────────────────────────── */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                            Explore Safety Resources
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {[
                                {
                                    href: "/scam-alerts",
                                    title: "Live Scam Alerts",
                                    desc: "Active fraud campaigns being reported right now",
                                    icon: BellRing,
                                    gradient: "from-red-500 to-orange-600",
                                },
                                {
                                    href: "/prevention-tips",
                                    title: "Prevention Tips",
                                    desc: "60+ actionable tips across UPI, calls, apps, and social",
                                    icon: Shield,
                                    gradient: "from-indigo-500 to-violet-600",
                                },
                                {
                                    href: "/safety-guide",
                                    title: "Safety Guide (Hindi)",
                                    desc: "Complete सुरक्षा गाइड for you and your family",
                                    icon: FileText,
                                    gradient: "from-fuchsia-500 to-pink-600",
                                },
                                {
                                    href: "/blog",
                                    title: "Scam News & Blog",
                                    desc: "Latest fraud news, deep dives, and India-specific alerts",
                                    icon: Eye,
                                    gradient: "from-violet-500 to-indigo-600",
                                },
                            ].map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="group flex items-start gap-4 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-indigo-200 dark:hover:border-indigo-800 transition-all"
                                >
                                    <div
                                        className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0`}
                                    >
                                        <item.icon className="h-5 w-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white text-sm group-hover:text-indigo-700 dark:group-hover:text-indigo-400 transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-tight">
                                            {item.desc}
                                        </p>
                                    </div>
                                    <ChevronRight className="h-4 w-4 text-gray-300 dark:text-gray-600 ml-auto flex-shrink-0 self-center group-hover:translate-x-0.5 transition-transform" />
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* ── Final CTA ────────────────────────────────────────── */}
                    <section className="rounded-2xl bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 p-8 sm:p-12 text-white text-center shadow-2xl">
                        <Shield className="h-10 w-10 text-indigo-200 mx-auto mb-4" />
                        <h2 className="text-2xl sm:text-3xl font-extrabold mb-2">
                            Something Looks Suspicious?
                        </h2>
                        <p className="text-indigo-100 mb-8 text-sm sm:text-base max-w-xl mx-auto">
                            Check it before you click, call, or pay. 5 seconds of verification can save
                            you from losing thousands of rupees.
                        </p>
                        <div className="max-w-xl mx-auto bg-white/10 backdrop-blur border border-white/20 rounded-xl p-5">
                            <CheckInput />
                        </div>
                        <p className="mt-5 text-indigo-200 text-xs">
                            🇮🇳 Free for all Indians · No login required · Built by Ehatech Services Pvt. Ltd.
                        </p>
                        <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-indigo-200">
                            <Link href="/upi-id-checker" className="hover:text-white transition-colors">
                                Check UPI ID
                            </Link>
                            <Link href="/phone-number-checker" className="hover:text-white transition-colors">
                                Check Phone Number
                            </Link>
                            <Link href="/website-safety-checker" className="hover:text-white transition-colors">
                                Check Website
                            </Link>
                            <Link href="/data-sources" className="hover:text-white transition-colors">
                                Data Sources
                            </Link>
                            <Link href="/methodology" className="hover:text-white transition-colors">
                                How It Works
                            </Link>
                            <Link href="/report-correction" className="hover:text-white transition-colors">
                                Report Correction
                            </Link>
                        </div>
                    </section>
                </div>
            </div>
        </DefaultLayout>
    );
}
