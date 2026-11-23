import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import DefaultLayout from "@/components/DefaultLayout";
import PhoneCheckerInput from "./PhoneCheckerInput";
import { SITE_STATS, SITE_STATS_TEXT } from "@/lib/config/siteStats";
import {
    Phone, Shield, Search, CheckCircle2, AlertTriangle, Zap,
    Users, TrendingUp, Lock, Database, ChevronDown, ChevronRight,
    MessageSquare, Clock, Globe, Smartphone, ShieldAlert, Eye,
    FileText, PhoneOff, BellRing, Fingerprint,
} from "lucide-react";
import { faqPageSchema, jsonLd, softwareApplicationSchema } from "@/lib/seo/schema";

// ── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
    title: "Phone Number Scam Checker India 2026  Is This Safe?",
    description:
        "Check if a phone number is a scam in India. Reverse lookup against India's fraud database  OTP scams, fake helplines, digital arrest callers. Free, no sign-up.",
    keywords: [
        "phone number scam checker",
        "is this phone number a scam",
        "reverse phone lookup india",
        "scam number lookup india",
        "unknown caller checker india",
        "wangiri fraud checker",
        "otp fraud call detector",
        "phone number fraud check india",
        "bogus number checker",
        "cyber fraud phone check",
    ],
    alternates: {
        canonical: "https://rakshaai.co/phone-number-checker",
    },
    robots: {
        index: true,
        follow: true,
        "max-snippet": -1,
    },
    openGraph: {
        title: "Is This Phone Number a Scam? Free Checker | RakshaAI",
        description:
            `Reverse phone lookup against ${SITE_STATS_TEXT.reportedScamNumbers}. ${SITE_STATS_TEXT.trustScoreAccuracy}. Results in ${SITE_STATS.resultSpeed}. Free, no login.`,
        url: "https://rakshaai.co/phone-number-checker",
        type: "website",
        siteName: "RakshaAI",
        images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Free Phone Number Scam Checker India | RakshaAI' }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Is This Phone Number a Scam? Free Checker | RakshaAI",
        description: "Free reverse phone lookup for India. Check if an unknown caller is a scam in under 5 seconds.",
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
        name: "RakshaAI Phone Number Checker",
        url: "/phone-number-checker",
        description: "Free phone number scam checker by RakshaAI. Checks any Indian phone number against community-reported fraud signals instantly. Free, no sign-up required.",
        featureList: [
            "Phone number scam lookup",
            "Community fraud reports",
            "OTP fraud and fake bank call guidance",
            "India cybercrime emergency steps",
        ],
    }),
};

const faqStructuredData = faqPageSchema([
    {
        question: "How accurate is the phone number checker?",
        answer: "RakshaAI checks phone numbers against community-submitted fraud reports and known scam call patterns specific to India  including OTP fraud, Wangiri fraud, and fake bank call tactics. Results are risk indicators, not guarantees. Always apply your own judgment.",
    },
    {
        question: "Is the phone number checker really free?",
        answer: "Yes completely free, forever. No registration, no credit card, no hidden premium tier. Our reverse phone lookup, WhatsApp checker, website safety checker, and UPI ID checker are all 100% free.",
    },
    {
        question: "What should I do if I already shared my OTP with a scammer?",
        answer: "Act immediately. Call your bank's 24/7 fraud helpline and ask them to freeze your account. Call the National Cyber Crime Helpline at 1930. File a complaint at cybercrime.gov.in. Change your UPI PIN immediately. Speed matters the sooner you report, the higher the chance of recovery.",
    },
    {
        question: "What is the one-ring scam (Wangiri fraud)?",
        answer: "In a Wangiri fraud scam, scammers call once and hang up immediately. When you call back, you are connected to a premium-rate international number and billed heavily per minute. Never call back an unknown international number. Paste it into our phone number checker first.",
    },
    {
        question: "How do I report a new scam number that isn't in your database?",
        answer: "After running your phone number lookup, click the 'Report This Number' button on the results page. Select the scam type, add details, and submit. Your report is reviewed and added within 4-6 hours.",
    },
]);

// ── Page Data ─────────────────────────────────────────────────────────────────
const stats = [
    { value: SITE_STATS.fraudRecords, label: "Reported Fraud Numbers", icon: Database },
    { value: SITE_STATS.trustScoreAccuracy, label: "Detection Accuracy", icon: CheckCircle2 },
    { value: SITE_STATS.phoneNumbersCheckedDaily, label: "Numbers Checked Daily", icon: TrendingUp },
    { value: SITE_STATS.resultSpeed, label: "Results in Seconds", icon: Zap },
];

const howItWorks = [
    {
        step: "01",
        title: "Enter the Full Number",
        detail:
            "Include the country code for international numbers (e.g., +1 for USA, +44 for UK). Our reverse phone lookup supports all country codes.",
        image: "/image/step-1-enter-phone-number-scam-check-rakshaai.jpg",
        imageAlt: "Step 1 - Enter the suspicious phone number in RakshaAI scam checker tool to verify if it is fraud",
        imageTitle: "Step 1: Enter Phone Number - RakshaAI Scam Number Checker",
        imageLabel: "Step 1 Enter the Full Number",
        imageCaption: "Type the suspicious phone number including country code to begin the scam check.",
    },
    {
        step: "02",
        title: "Click \"Check Now\"",
        detail:
            `Our tool runs a scam number lookup across ${SITE_STATS_TEXT.reportedFraudRecords} and real-time user complaints results in ${SITE_STATS.resultSpeedText}.`,
        image: "/image/step-2-check-now-phone-number-fraud-lookup-rakshaai.jpg",
        imageAlt: `Step 2 - RakshaAI scans phone number across ${SITE_STATS_TEXT.fraudRecords} and real-time community reports in ${SITE_STATS.resultSpeedText}`,
        imageTitle: "Step 2: Click Check Now - Instant Phone Number Fraud Lookup India",
        imageLabel: "Step 2 Click Check Now",
        imageCaption: `RakshaAI instantly scans ${SITE_STATS_TEXT.fraudRecords} and live community reports in ${SITE_STATS.resultSpeedText}.`,
    },
    {
        step: "03",
        title: "Read Your Result",
        detail:
            "You see a scam probability score (0–100), complaint count, known fraud call patterns, and carrier information from the reverse phone lookup.",
        image: "/image/step-3-scam-probability-score-result-rakshaai.jpg",
        imageAlt: "Step 3 - RakshaAI displays scam probability score from 0 to 100 with fraud risk meter and complaint count",
        imageTitle: "Step 3: Read Scam Risk Score - Phone Number Fraud Result RakshaAI India",
        imageLabel: "Step 3 Read Your Result (Scam Probability Score)",
        imageCaption: "See the scam probability score, complaint count, known fraud call patterns, and carrier information from the reverse phone lookup.",
    },
    {
        step: "04",
        title: "Take Action & Report",
        detail:
            "If the number scores above 60, do not call back. Report new scams to protect the next Indian from the same bogus number.",
        image: "/image/step-4-block-report-scam-number-rakshaai-india.jpg",
        imageAlt: "Step 4 - Block and report a scam phone number on RakshaAI to protect other Indians from the same fraud caller",
        imageTitle: "Step 4: Block and Report Scam Number - RakshaAI India",
        imageLabel: "Step 4 Take Action & Report",
        imageCaption: "If the number scores above 60, do not call back. Report new scams to protect the next Indian from the same bogus number.",
    },
];

const phoneScamTypes = [
    {
        type: "Bank Verification Scams",
        description:
            "Caller claims to be from your bank's 'fraud prevention department.' Sounds professional, knows your name. Goal: trigger OTP fraud. Real banks never ask for OTPs on the phone.",
        frequency: "Most reported",
        avgLoss: "₹18,000",
        icon: Lock,
        color: "red",
    },
    {
        type: "One-Ring / Wangiri Fraud",
        description:
            "Single missed call from an international unknown caller. You call back out of curiosity routed to a premium-rate line billing ₹150–₹800/min. Common prefixes: +252, +269, +371.",
        frequency: "Very common",
        avgLoss: "₹2,500",
        icon: PhoneOff,
        color: "orange",
    },
    {
        type: "OTP Fraud Calls",
        description:
            "You receive an OTP you didn't request, then a caller asks you to share it for 'verification.' The moment you share it, they complete a UPI payment, SIM swap, or credit card in your name.",
        frequency: "High volume",
        avgLoss: "₹24,000",
        icon: MessageSquare,
        color: "yellow",
    },
    {
        type: "Fake Customer Support",
        description:
            "Fake helplines listed on Justdial/Sulekha for Amazon, IRCTC, Paytm. Ask you to install remote access apps, then drain your UPI or net banking.",
        frequency: "Very common",
        avgLoss: "₹12,500",
        icon: Smartphone,
        color: "purple",
    },
    {
        type: "Digital Arrest Scam",
        description:
            "Caller claims to be CBI/ED/police says illegal activity is linked to your name. Demands you stay on video call ('digital arrest') and transfer money to avoid arrest.",
        frequency: "Fastest growing",
        avgLoss: "₹8,40,000",
        icon: ShieldAlert,
        color: "pink",
    },
    {
        type: "Robocall / Automated Fraud",
        description:
            "Pre-recorded message claiming to be from a bank or government body threatens action. TRAI has prohibited robocalls any automated bogus number call threatening you is fraudulent.",
        frequency: "Common",
        avgLoss: "₹6,000",
        icon: TrendingUp,
        color: "cyan",
    },
];

const whatWeCheck = [
    {
        label: "Community Scam Reports",
        desc: `From ${SITE_STATS.usersProtected} RakshaAI users across India who reported this number`,
        icon: Users,
    },
    {
        label: "Cybercrime.gov.in Database",
        desc: "Cross-referenced against NCRB cybercrime complaint records",
        icon: Database,
    },
    {
        label: "TRAI DND Registry",
        desc: "Whether this number is registered as a promotional/commercial line",
        icon: Globe,
    },
    {
        label: "Call Pattern Analysis",
        desc: "AI detects high-frequency robo-call patterns linked to fraud campaigns",
        icon: Fingerprint,
    },
    {
        label: "Scam Keyword Matching",
        desc: "Phone numbers associated with known scam scripts and templates",
        icon: FileText,
    },
    {
        label: "Telecom Circle & Carrier",
        desc: "Origin circle, carrier, and whether the number has been recycled",
        icon: Phone,
    },
    {
        label: "International Routing Flags",
        desc: "Detects VoIP spoofing and +91 prefix abuse from overseas call centers",
        icon: Globe,
    },
    {
        label: "Report Velocity",
        desc: "How quickly this number is being newly reported a spike = active campaign",
        icon: TrendingUp,
    },
];

const redFlags = [
    {
        flag: "Urgent pressure 'act in 30 minutes or account frozen'",
        action: "Artificial urgency stops you from running a reverse phone lookup. Real agencies never make first contact via phone.",
        icon: Clock,
    },
    {
        flag: "Unknown caller asks for OTP, PIN, CVV, or password",
        action: "No bank, telecom, or government body will ever call to ask for these. This is the defining hallmark of OTP fraud hang up.",
        icon: Lock,
    },
    {
        flag: "International number you don't recognise",
        action: "Never call back without first running a reverse phone lookup. VoIP services let scammers generate any caller ID.",
        icon: Globe,
    },
    {
        flag: "Automated robocall message threatening legal action",
        action: "TRAI has prohibited robocalls. Any automated scam call threatening you is fraudulent. Report the bogus number immediately.",
        icon: BellRing,
    },
    {
        flag: "Caller asks you to download a remote access app",
        action: "This is the fake support scam playbook. The moment you grant screen access, they drain your UPI or net banking.",
        icon: Smartphone,
    },
    {
        flag: "Claims to be from CBI, ED, or police over the phone",
        action: "Classic bogus number scam Digital Arrest. No government authority can arrest you over a phone or video call.",
        icon: ShieldAlert,
    },
];

const faqs = [
    {
        q: "How accurate is the phone number checker?",
        a: `Our phone number checker is ${SITE_STATS.trustScoreAccuracy} accurate, based on cross-referencing ${SITE_STATS_TEXT.reportedScamNumbers} with real-time AI analysis. We combine community reports from ${SITE_STATS.usersProtected} Indians with pattern detection trained specifically on Indian OTP fraud, Wangiri fraud, and fake bank scam call tactics. Always use your judgment alongside the tool if something feels wrong about an unknown caller, trust your instinct.`,
    },
    {
        q: "Can I check international numbers?",
        a: "Yes. Our reverse phone lookup works for numbers from India (+91), USA (+1), UK (+44), UAE (+971), and all major international codes. Include the country code when entering the number. Wangiri fraud calls and VoIP-based scam calls from international unknown caller numbers are increasingly targeting Indian users, making international scam number lookup especially important.",
    },
    {
        q: "What should I do if I already shared my OTP with a scammer?",
        a: "Act immediately after an OTP fraud incident. (1) Call your bank's 24/7 fraud helpline the number is on the back of your debit card and ask them to freeze your account. (2) Call the National Cyber Crime Helpline at 1930. (3) File a complaint at cybercrime.gov.in. (4) Change your UPI PIN immediately. Speed matters the sooner you report the fraud call, the higher the chance of recovery.",
    },
    {
        q: "How is RakshaAI different from Truecaller?",
        a: "Truecaller is excellent at identifying unknown caller names from its global user database. RakshaAI focuses specifically on scam number lookup and fraud detection in the Indian context. Our phone number checker detects uniquely Indian scam call types fake Aadhaar calls, CBI impersonation, UPI OTP fraud, digital arrest bogus numbers that generic tools miss. We also offer a WhatsApp checker, website safety checker, and UPI ID checker. Many users use both tools together.",
    },
    {
        q: "How do I report a new scam number that isn't in your database?",
        a: "After running your phone number lookup, you'll see a 'Report This Number' button on the results page. Select the scam type (bank fraud, OTP fraud, Wangiri fraud, fake support, etc.), add any details you know, and submit. Your report is reviewed and added to our scam number lookup database within 4–6 hours, immediately increasing the spam risk score for that bogus number.",
    },
    {
        q: "Why do scammers keep changing phone numbers?",
        a: "Scammers create new bogus numbers frequently because once a number accumulates enough reports in our scam number lookup database, it gets flagged as high spam risk by carrier systems. With cheap SIMs readily available in India, switching to a new number costs almost nothing. This is why community reporting is critical the faster we collectively flag a scam call number, the faster it gets blocked.",
    },
    {
        q: "Can checking a number alert the scammer?",
        a: "No. When you run a reverse phone lookup through our phone number checker, you are querying our internal database only. We never contact the number, send notifications, or reveal who performed the lookup. The unknown caller has absolutely no way of knowing you checked their bogus number.",
    },
    {
        q: "What is the one-ring scam (Wangiri fraud)?",
        a: "In a Wangiri fraud scam, scammers call once and hang up immediately, knowing curiosity will prompt you to call back. When you do, you're connected to a premium-rate international number and billed heavily per minute. Protect yourself by never calling back an unknown caller with an unfamiliar international code. Paste the number into our phone number checker to check the spam risk before calling back.",
    },
    {
        q: "How do scammers get my phone number?",
        a: "Through several routes: (1) Data breaches your number was likely in at least one major Indian app breach. (2) Random auto-dialers these call millions of numbers daily looking for active lines. (3) Social media your number on Facebook or WhatsApp is visible to scrapers. (4) Dark web purchases stolen Indian data is sold in bulk for OTP fraud and scam call campaigns.",
    },
    {
        q: "Is the phone number checker really free?",
        a: "Yes completely free, forever. No registration, no credit card, no hidden premium tier. Our reverse phone lookup, WhatsApp checker, website safety checker, and UPI ID checker are all 100% free. RakshaAI is funded by enterprise cyber security products, not by charging individual users. We believe that a free scam number lookup should be accessible to every Indian.",
    },
];

// ── Page ──────────────────────────────────────────────────────────────────────
export default function PhoneNumberCheckerPage() {
    return (
        <DefaultLayout>
            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLd(faqStructuredData) }}
            />

            <div className="min-h-screen">
                {/* ── Hero ─────────────────────────────────────────────────── */}
                <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-cyan-50/40 dark:from-gray-950 dark:via-gray-900 dark:to-cyan-950/20 pt-16 pb-20 px-4">
                    {/* Background */}
                    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e912_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e912_1px,transparent_1px)] bg-[size:64px_64px] dark:bg-[linear-gradient(to_right,#0ea5e906_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e906_1px,transparent_1px)]" />
                        <div className="absolute -top-32 -left-24 w-[520px] h-[520px] bg-cyan-400/10 rounded-full blur-3xl" />
                        <div className="absolute top-10 -right-24 w-[420px] h-[420px] bg-sky-400/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] bg-teal-300/8 rounded-full blur-3xl" />
                    </div>

                    <div className="max-w-4xl mx-auto text-center">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 text-xs font-semibold mb-7 border border-cyan-200/70 dark:border-cyan-800/50 shadow-sm">
                            <Shield className="h-3.5 w-3.5" />
                            India&apos;s #1 Free Phone Scam Checker
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-gray-900 dark:text-white leading-[1.1] tracking-tight mb-5">
                            Is This Phone Number{" "}
                            <span className="bg-gradient-to-r from-cyan-500 via-sky-500 to-teal-500 bg-clip-text text-transparent">
                                a Scam?
                            </span>{" "}
                            <span className="block text-2xl sm:text-3xl font-semibold text-gray-500 dark:text-gray-400 mt-2">
                                Free Reverse Phone Lookup for India
                            </span>
                        </h1>

                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-6 leading-relaxed">
                            Received a call from an unknown caller? Before you call back or share any information, use our free phone number checker to find out who is really calling. RakshaAI's phone fraud detector instantly runs a{" "}
                            <strong className="text-cyan-700 dark:text-cyan-400">reverse phone lookup</strong>{" "}
                            against a database of {SITE_STATS.fraudRecordsLong} reported scam numbers, flagged by real users across India.
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-4xl mx-auto mb-10 leading-relaxed">
                            Whether it's a suspicious unknown caller, a one-ring Wangiri fraud scam, a fake bank verification call, or an OTP fraud attempt our tool helps you verify phone number details and identify dangerous numbers before it's too late. Enter the number and get your result in under 5 seconds.
                        </p>

                        {/* Input card */}
                        <div className="max-w-3xl mx-auto mb-10">
                            <div className="relative bg-white dark:bg-gray-900/90 rounded-2xl px-6 pt-5 pb-4 border border-gray-200/80 dark:border-gray-700/60 shadow-[0_12px_48px_-8px_rgba(14,165,233,0.18)] dark:shadow-[0_12px_48px_-8px_rgba(14,165,233,0.07)]">
                                {/* Top shimmer accent */}
                                <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent rounded-full" />

                                <div className="flex items-start gap-3 mb-4 text-left">
                                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-sky-600 flex items-center justify-center flex-shrink-0 shadow-md shadow-cyan-500/25">
                                        <Phone className="h-4 w-4 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 leading-snug">
                                            Enter the number to get an instant fraud risk report
                                        </p>
                                        <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                                            ✓ Scam probability score (0–100) &nbsp;·&nbsp; ✓ Complaint count &nbsp;·&nbsp; ✓ Carrier details
                                        </p>
                                    </div>
                                </div>

                                <PhoneCheckerInput />

                                <p className="mt-3 text-xs text-gray-400 text-center flex items-center justify-center gap-2">
                                    <Lock className="h-3 w-3" /> Your data is secure. We never store or share the phone numbers you check.
                                </p>
                            </div>
                        </div>

                        {/* Stats grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto mb-12">
                            {stats.map(({ value, label, icon: Icon }) => (
                                <div
                                    key={label}
                                    className="group flex flex-col items-center gap-1.5 px-4 py-4 rounded-xl bg-white dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                                >
                                    <Icon className="h-4 w-4 text-cyan-500/80 group-hover:text-cyan-500 transition-colors" />
                                    <span className="text-xl font-extrabold bg-gradient-to-br from-cyan-600 to-sky-600 bg-clip-text text-transparent tabular-nums">
                                        {value}
                                    </span>
                                    <span className="text-[11px] text-gray-500 dark:text-gray-400 leading-tight text-center">
                                        {label}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Scroll cue */}
                        <div className="flex flex-col items-center gap-1.5 text-gray-400 dark:text-gray-500 animate-bounce">
                            <span className="text-xs font-medium">Learn More</span>
                            <ChevronDown className="h-5 w-5" />
                        </div>
                    </div>
                </section>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

                    {/* ── What Is a Phone Scam Checker ──────────────────────── */}
                    <section aria-labelledby="what-is-heading">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest">
                                    About This Tool
                                </span>
                                <h2
                                    id="what-is-heading"
                                    className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-2 mb-4"
                                >
                                    What Is a Phone Number Scam Checker?
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                                    A phone number scam checker is a lookup tool that tells you whether a phone
                                    number has been reported for fraud, spam, or scam activity. Instead of calling
                                    back a suspicious missed call and risking a scam, you can verify the number
                                    first.
                                </p>
                                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                                    RakshaAI's checker goes beyond basic reverse lookup. We cross-reference each
                                    number against community fraud reports, NCRB cybercrime filings, TRAI DND data,
                                    and AI-driven call pattern analysis all in real time.
                                </p>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                                    Over <strong className="text-gray-900 dark:text-white">₹11,000 crore</strong> was
                                    lost to phone-initiated fraud in India in 2024. Most victims received
                                    calls from numbers they didn't recognize. Checking first costs nothing.
                                    Not checking can cost everything.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { label: "Phone fraud complaints in 2024", value: "1.1M+", color: "from-cyan-500 to-sky-600" },
                                        { label: "Avg. loss per victim", value: "₹18K", color: "from-sky-500 to-teal-600" },
                                        { label: "Fraud database", value: SITE_STATS.fraudRecords, color: "from-teal-500 to-cyan-600" },
                                        { label: "New scams daily", value: "4,000+", color: "from-cyan-600 to-sky-500" },
                                    ].map((item) => (
                                        <div
                                            key={item.label}
                                            className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-4 shadow-sm text-center"
                                        >
                                            <div
                                                className={`text-xl font-extrabold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-1`}
                                            >
                                                {item.value}
                                            </div>
                                            <div className="text-xs text-gray-500 dark:text-gray-400 leading-tight">
                                                {item.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative flex flex-col justify-center items-center h-full min-h-[300px] gap-3">
                                <figure aria-label="Section Image Indian woman checking suspicious call" className="flex flex-col items-center gap-3 m-0">
                                    <Image
                                        src="/image/indian-woman-checking-suspicious-scam-call-rakshaai.jpg"
                                        alt="Indian woman looking suspiciously at an unknown scam call alert on her phone before checking it on RakshaAI"
                                        title="Check Any Suspicious Phone Number for Scam Activity - RakshaAI Phone Number Checker India"
                                        width={500}
                                        height={500}
                                        className="object-contain drop-shadow-2xl max-w-full h-auto rounded-3xl"
                                        priority
                                    />
                                    <figcaption className="text-xs text-gray-500 dark:text-gray-400 text-center max-w-xs leading-relaxed italic">
                                        Received a suspicious call? Don&apos;t call back. Check the number on RakshaAI first &mdash; cross-referenced against NCRB, TRAI, and community fraud reports.
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </section>

                    {/* ── India Phone Fraud Epidemic ───────────────────────── */}
                    <section aria-labelledby="epidemic-heading" className="bg-gradient-to-br from-cyan-50 to-sky-50 dark:from-cyan-950/20 dark:to-sky-950/20 border border-cyan-100 dark:border-cyan-900/50 rounded-2xl p-8 sm:p-10">
                        <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest">
                            The Scale of the Problem
                        </span>
                        <h2
                            id="epidemic-heading"
                            className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-2 mb-6"
                        >
                            Why Phone Number Scams Are Increasing in India
                        </h2>
                        <div className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            <div className="space-y-4">
                                <p>
                                    India crossed <strong className="text-cyan-700 dark:text-cyan-300">1.2 billion mobile subscribers in 2024</strong>. For scammers, this is an enormous, largely unprotected target. In 2024, over <strong className="text-cyan-700 dark:text-cyan-300">₹21,000 crore</strong> was lost to cyber fraud including phone scam calls and 46 lakh+ cybercrime complaints were filed, the majority involving unknown caller fraud.
                                </p>
                                <p>
                                    <strong className="text-cyan-700 dark:text-cyan-300">Cheap SIM availability</strong> lets scammers burn through hundreds of bogus numbers before authorities catch up. <strong className="text-cyan-700 dark:text-cyan-300">VoIP technology</strong> lets them generate fake scam calls from anywhere in the world using any caller ID they choose.
                                </p>
                                <p>
                                    <strong className="text-cyan-700 dark:text-cyan-300">Data breaches</strong> give them millions of verified Indian numbers. <strong className="text-cyan-700 dark:text-cyan-300">Low digital literacy</strong> in Tier 2 and Tier 3 cities means first-time internet users are unfamiliar with fraud call tactics making a free phone number checker like RakshaAI essential.
                                </p>
                                <div className="grid grid-cols-2 gap-3 mt-4">
                                    {[
                                        { stat: "₹21,000+cr", label: "Lost to cyber fraud cases in 2024" },
                                        { stat: "46L+", label: "Cybercrime complaints filed" },
                                        { stat: "₹45,000", label: "Avg loss per victim" },
                                        { stat: "71%", label: "Calls originate via VoIP" },
                                    ].map(({ stat, label }) => (
                                        <div key={label} className="bg-white dark:bg-gray-900 rounded-xl p-3 border border-cyan-100 dark:border-cyan-900/50">
                                            <div className="text-lg font-extrabold text-cyan-700 dark:text-cyan-400">{stat}</div>
                                            <div className="text-xs text-gray-500 dark:text-gray-400 leading-tight mt-0.5">{label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ── How Phone Fraud Works ────────────────────────────── */}
                    <section aria-labelledby="how-fraud-works-heading">
                        <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest">
                            Understand the Threat
                        </span>
                        <h2
                            id="how-fraud-works-heading"
                            className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3"
                        >
                            Common Phone Scam Types in India
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-3xl">
                            India's telecom fraud landscape has exploded. In 2024, over ₹21,000 crore was lost to mobile fraud calls and the scammers are getting smarter every month. Before you dismiss that unknown caller, understand what you're dealing with.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {phoneScamTypes.map((scam) => {
                                const colorMap: Record<string, string> = {
                                    red: "border-red-200 dark:border-red-800/50 bg-red-50 dark:bg-red-950/20",
                                    orange: "border-orange-200 dark:border-orange-800/50 bg-orange-50 dark:bg-orange-950/20",
                                    yellow: "border-yellow-200 dark:border-yellow-800/50 bg-yellow-50 dark:bg-yellow-950/20",
                                    purple: "border-purple-200 dark:border-purple-800/50 bg-purple-50 dark:bg-purple-950/20",
                                    pink: "border-pink-200 dark:border-pink-800/50 bg-pink-50 dark:bg-pink-950/20",
                                    cyan: "border-cyan-200 dark:border-cyan-800/50 bg-cyan-50 dark:bg-cyan-950/20",
                                };
                                const tagColorMap: Record<string, string> = {
                                    red: "bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300",
                                    orange: "bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300",
                                    yellow: "bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-300",
                                    purple: "bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300",
                                    pink: "bg-pink-100 dark:bg-pink-900/40 text-pink-700 dark:text-pink-300",
                                    cyan: "bg-cyan-100 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-300",
                                };
                                return (
                                    <div
                                        key={scam.type}
                                        className={`rounded-xl border p-5 ${colorMap[scam.color]}`}
                                    >
                                        <div className="flex items-start gap-3 mb-3">
                                            <div className="w-9 h-9 rounded-lg bg-white dark:bg-gray-900 shadow-sm flex items-center justify-center flex-shrink-0 border border-gray-100 dark:border-gray-800">
                                                <scam.icon className="h-4 w-4 text-gray-700 dark:text-gray-300" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900 dark:text-white text-sm">
                                                    {scam.type}
                                                </h3>
                                                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${tagColorMap[scam.color]}`}>
                                                    {scam.frequency}
                                                </span>
                                            </div>
                                        </div>
                                        <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                                            {scam.description}
                                        </p>
                                        <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-500">
                                            <AlertTriangle className="h-3 w-3 text-orange-500" />
                                            Avg. loss:{" "}
                                            <span className="font-semibold text-gray-700 dark:text-gray-300">
                                                {scam.avgLoss}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="mt-8 bg-cyan-50 dark:bg-cyan-950/20 border border-cyan-200 dark:border-cyan-800/50 rounded-xl p-5">
                            <p className="text-sm text-cyan-800 dark:text-cyan-200 font-medium flex items-start gap-2">
                                <Shield className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                <span>
                                    Unlike Truecaller, which relies primarily on crowdsourced name tags, RakshaAI's phone number checker combines community reports with AI-based fraud pattern detection trained specifically on Indian scam tactics. This means we catch newly registered bogus number lines and SIM-swapped scam calls that other tools miss during a standard reverse number lookup.
                                </span>
                            </p>
                        </div>
                    </section>

                    {/* ── How Scammers Get Your Number ─────────────────────── */}
                    <section aria-labelledby="how-scammers-heading">
                        <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest">
                            Data Harvesting
                        </span>
                        <h2
                            id="how-scammers-heading"
                            className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3"
                        >
                            How Scammers Get Your Phone Number in the First Place
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl text-sm leading-relaxed">
                            Understanding how your number ends up on a scammer's list is the first step to protecting it and understanding why so many Indians receive unsolicited fraud calls.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {[
                                {
                                    source: "Data Broker Leaks",
                                    detail: "Millions of Indian mobile numbers are sold on Telegram channels and dark web forums, obtained from leaked databases of e-commerce sites, food delivery apps, and telecom providers. A 500MB database with 10 million Indian numbers can be bought for ₹2,000.",
                                    icon: "🗄️",
                                    severity: "Very High",
                                    color: "border-red-200 dark:border-red-900/50 bg-red-50 dark:bg-red-950/20",
                                    tag: "bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300",
                                },
                                {
                                    source: "KYC Form Phishing",
                                    detail: "Fake 'KYC update' websites that mimic SBI, HDFC, or Jio collect your phone number, name, and Aadhaar details. The number then enters a verified contact list more valuable to scammers since it's confirmed active and linked to a real financial account.",
                                    icon: "📋",
                                    severity: "High",
                                    color: "border-orange-200 dark:border-orange-900/50 bg-orange-50 dark:bg-orange-950/20",
                                    tag: "bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300",
                                },
                                {
                                    source: "Social Media Scraping",
                                    detail: "Publicly visible phone numbers on Facebook, Justdial, OLX, or Instagram business pages are scraped by bots. If you've ever listed a phone number on any public directory or marketplace listing, it's likely in multiple scammer databases.",
                                    icon: "📱",
                                    severity: "High",
                                    color: "border-yellow-200 dark:border-yellow-900/50 bg-yellow-50 dark:bg-yellow-950/20",
                                    tag: "bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-300",
                                },
                                {
                                    source: "Telecom Insider Leaks",
                                    detail: "Some telecom retail outlets and employees have been found selling subscriber lists. A list of numbers from a specific operator in a specific city is highly targeted scammers can impersonate that carrier for 'SIM upgrade' or 'DND registration' calls with high success rates.",
                                    icon: "📡",
                                    severity: "Medium",
                                    color: "border-purple-200 dark:border-purple-900/50 bg-purple-50 dark:bg-purple-950/20",
                                    tag: "bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300",
                                },
                                {
                                    source: "OTP Harvesting Sites",
                                    detail: "Some fake verification sites (e.g. fake ticket booking, loan application) collect your number, send you a genuine OTP to build trust, and then use your number for targeted fraud later. The initial interaction seems legitimate, making you less suspicious.",
                                    icon: "🔢",
                                    severity: "Medium",
                                    color: "border-cyan-200 dark:border-cyan-900/50 bg-cyan-50 dark:bg-cyan-950/20",
                                    tag: "bg-cyan-100 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-300",
                                },
                                {
                                    source: "Random Auto-Dialers",
                                    detail: "Many scam calls are simply random auto-dialers cycle through 10-digit sequences in known active number ranges (+91 98XXXXXXXX etc.) and mark which numbers answer. If you pick up, your number is flagged as active and added to a targeted list for follow-up scams.",
                                    icon: "🤖",
                                    severity: "Low",
                                    color: "border-gray-200 dark:border-gray-700/50 bg-gray-50 dark:bg-gray-800/20",
                                    tag: "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300",
                                },
                            ].map(({ source, detail, icon, severity, color, tag }) => (
                                <div key={source} className={`rounded-xl border p-5 ${color}`}>
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-2xl">{icon}</span>
                                        <div>
                                            <h3 className="font-bold text-gray-900 dark:text-white text-sm">{source}</h3>
                                            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${tag}`}>Risk: {severity}</span>
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{detail}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 bg-white dark:bg-gray-900 border border-cyan-100 dark:border-cyan-900/50 rounded-xl p-5">
                            <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-2">How to reduce your exposure</h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {[
                                    "Never share your primary number on public platforms use a secondary SIM for marketplace listings",
                                    "Use TRAI's DND (Do Not Disturb) registration via the Sanchar Saathi app to block promotional calls",
                                    "Don't pick up calls from unknown international numbers let them go to voicemail",
                                    "Avoid filling mobile forms on websites that you arrived at via an SMS or WhatsApp link",
                                    "Register on Truecaller with a privacy-protective name so scammers can't confirm your identity",
                                    "If you must list a number publicly, use a Google Voice or secondary number",
                                ].map((tip) => (
                                    <li key={tip} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                                        <CheckCircle2 className="h-3.5 w-3.5 text-cyan-500 flex-shrink-0 mt-0.5" />
                                        {tip}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    {/* ── How It Works (Step-by-Step) ──────────────────────── */}
                    <section aria-labelledby="how-it-works-heading" className="relative overflow-hidden rounded-3xl">
                        {/* Layered background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-sky-100 dark:from-gray-950 dark:via-gray-900 dark:to-cyan-950/40" />
                        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-200/30 dark:bg-cyan-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-72 h-72 bg-sky-200/30 dark:bg-sky-900/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                        <div className="relative p-8 sm:p-14">
                            {/* Header */}
                            <div className="text-center mb-14">
                                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300 text-xs font-bold uppercase tracking-widest mb-4 border border-cyan-200 dark:border-cyan-800">
                                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                                    How It Works
                                </span>
                                <h2
                                    id="how-it-works-heading"
                                    className="text-2xl sm:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight"
                                >
                                    How to Check If a Phone Number is Fraud
                                </h2>
                                <p className="mt-3 text-gray-500 dark:text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
                                    Four simple steps takes less than 30 seconds to know if a number is safe.
                                </p>
                            </div>

                            {/* Steps */}
                            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
                                {/* Connector line  desktop only */}
                                <div className="hidden lg:block absolute top-[6.75rem] left-[13%] right-[13%] h-px bg-gradient-to-r from-transparent via-cyan-300 dark:via-cyan-700 to-transparent pointer-events-none" />

                                {howItWorks.map((step, index) => (
                                    <div key={step.step} className="relative group flex flex-col">
                                        {/* Card */}
                                        <div className="flex-1 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-md group-hover:shadow-2xl group-hover:-translate-y-1.5 transition-all duration-400 border border-white dark:border-gray-800 group-hover:border-cyan-300 dark:group-hover:border-cyan-700 flex flex-col">
                                            {/* Top gradient accent */}
                                            <div className="h-1 w-full bg-gradient-to-r from-cyan-400 via-sky-500 to-cyan-400" />

                                            {/* Image area */}
                                            <div className="relative h-44 bg-gradient-to-br from-cyan-50/80 to-sky-100/80 dark:from-gray-800 dark:to-gray-800/60 flex items-center justify-center overflow-hidden px-4 pt-4 pb-2">
                                                {/* Watermark step number */}
                                                <span className="absolute bottom-0 right-1 text-[6rem] font-black leading-none select-none text-cyan-100 dark:text-gray-800/60 pointer-events-none">
                                                    {step.step}
                                                </span>
                                                <figure aria-label={step.imageLabel} className="relative z-10 flex flex-col items-center m-0">
                                                    <Image
                                                        src={step.image}
                                                        alt={step.imageAlt}
                                                        title={step.imageTitle}
                                                        width={150}
                                                        height={150}
                                                        className="object-contain h-36 w-auto drop-shadow-lg group-hover:scale-105 transition-transform duration-500"
                                                    />
                                                    <figcaption className="sr-only">{step.imageCaption}</figcaption>
                                                </figure>
                                            </div>

                                            {/* Content */}
                                            <div className="p-5 flex flex-col flex-1">
                                                <div className="flex items-start gap-3 mb-2.5">
                                                    <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-500 to-sky-600 flex items-center justify-center text-white text-[11px] font-extrabold shadow-lg shadow-cyan-300/40 dark:shadow-cyan-900/50 mt-0.5">
                                                        {step.step}
                                                    </span>
                                                    <h3 className="font-bold text-gray-900 dark:text-white text-sm leading-snug pt-1">
                                                        {step.title}
                                                    </h3>
                                                </div>
                                                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed pl-11">
                                                    {step.detail}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Chevron connector badge  desktop */}
                                        {index < 3 && (
                                            <div className="hidden lg:flex absolute -right-3.5 top-[5.75rem] z-20 w-7 h-7 rounded-full bg-white dark:bg-gray-900 border border-cyan-200 dark:border-cyan-800 shadow-md items-center justify-center">
                                                <ChevronRight className="h-3.5 w-3.5 text-cyan-500 dark:text-cyan-400" />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ── What Data We Check ───────────────────────────────── */}
                    <section aria-labelledby="what-we-check-heading">
                        <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest">
                            Data Sources
                        </span>
                        <h2
                            id="what-we-check-heading"
                            className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3"
                        >
                            What Our Phone Checker Actually Looks At
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
                            We don't just match your number to a list. We run 8 parallel checks and combine the signals
                            into a single fraud risk score.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {whatWeCheck.map((item) => (
                                <div
                                    key={item.label}
                                    className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-5 shadow-sm hover:border-cyan-300 dark:hover:border-cyan-700 hover:shadow-md transition-all"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-100 to-sky-100 dark:from-cyan-900/50 dark:to-sky-900/50 flex items-center justify-center mb-3">
                                        <item.icon className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
                                    </div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                                        {item.label}
                                    </h3>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── Red Flags to Watch ───────────────────────────────── */}
                    <section aria-labelledby="red-flags-heading">
                        <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-widest">
                            Warning Signs
                        </span>
                        <h2
                            id="red-flags-heading"
                            className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3"
                        >
                            Red Flags: Signs of a Scam Phone Call
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl text-sm">
                            You don't always have time to run a phone number lookup before picking up. Train yourself to spot these warning signs during a live fraud call each is a reason to hang up immediately.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {redFlags.map((item) => (
                                <div
                                    key={item.flag}
                                    className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 shadow-sm flex items-start gap-4"
                                >
                                    <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-950/50 flex items-center justify-center flex-shrink-0">
                                        <item.icon className="h-4 w-4 text-red-600 dark:text-red-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                                            {item.flag}
                                        </p>
                                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed flex items-start gap-1">
                                            <ChevronRight className="h-3 w-3 text-green-500 flex-shrink-0 mt-0.5" />
                                            {item.action}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── What To Do After a Scam Call ─────────────────────── */}
                    <section aria-labelledby="after-scam-heading">
                        <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-widest">
                            Emergency Guide
                        </span>
                        <h2
                            id="after-scam-heading"
                            className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3"
                        >
                            How to Block and Report Scam Numbers
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl text-sm leading-relaxed">
                            Identifying a scam call is only step one. Blocking it protects you. Reporting it protects every other Indian. Here's how to do both after you've run your phone number lookup.
                        </p>
                        <figure aria-label="Supporting Infographic 5 Steps to Report a Scam Number" className="relative w-full rounded-2xl overflow-hidden mb-8 shadow-md m-0">
                            <Image
                                src="/image/report-scam-number-steps-india-rakshaai.jpg"
                                alt="5 steps to report a scam number in India using RakshaAI - Enter number, Tap Report, Add Details, Submit, Stay Protected"
                                title="How to Report a Scam Phone Number in India - RakshaAI Simple Guide"
                                width={1200}
                                height={480}
                                className="w-full h-auto object-cover"
                                priority={false}
                            />
                            <figcaption className="text-xs text-gray-500 dark:text-gray-400 text-center leading-relaxed italic px-4 py-2">
                                Follow these 5 simple steps to report any suspicious number on RakshaAI and protect other Indians from fraud calls.
                            </figcaption>
                        </figure>
                        <div className="space-y-4">
                            {[
                                {
                                    step: "Block on Android",
                                    title: "Block scam numbers on Android",
                                    body: "Open your Phone app and go to Recent Calls. Long-press the scam number and select 'Block/Report Spam.' On Samsung: tap the three-dot menu and choose 'Block number.' On stock Android: tap 'Block and report spam' to simultaneously report the bogus number to Google. For persistent fraud call numbers: go to Settings > Blocked Numbers and add them manually. Enable the spam filter under Phone App Settings > Caller ID and Spam to auto-detect scam calls.",
                                    color: "from-red-500 to-rose-600",
                                    bg: "bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800/50",
                                },
                                {
                                    step: "Block on iPhone",
                                    title: "Block scam numbers on iPhone",
                                    body: "Open the Phone app, go to Recents, and tap the information icon (i) next to the scam number. Scroll down and tap 'Block this Caller.' All fraud calls from that bogus number immediately go to voicemail with no notification. For broader protection: Settings > Phone > Silence Unknown Callers sends all unknown caller calls to voicemail automatically.",
                                    color: "from-orange-500 to-amber-600",
                                    bg: "bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800/50",
                                },
                                {
                                    step: "Report to TAFCOP & TRAI",
                                    title: "Report to Telecom Authority (TAFCOP & TRAI)",
                                    body: "India's TAFCOP portal (tafcop.dgtelecom.gov.in) lets you check how many SIM cards are registered in your name and report fraudulent use. To report a scam call to TRAI: SMS 'COMP [number]' to 1909. To register for DND and block all spam calls: dial 1909.",
                                    color: "from-yellow-500 to-orange-500",
                                    bg: "bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-800/50",
                                },
                                {
                                    step: "Report to Cyber Crime Portal",
                                    title: "Report financial fraud to Cyber Crime Portal",
                                    body: "For financial fraud if you've already shared your OTP or lost money file a complaint immediately at cybercrime.gov.in or call the National Cyber Crime Helpline: 1930. Speed is critical. If you've fallen for an OTP fraud scam call, also call your bank's 24/7 fraud helpline to freeze your account.",
                                    color: "from-cyan-500 to-sky-600",
                                    bg: "bg-cyan-50 dark:bg-cyan-950/20 border-cyan-200 dark:border-cyan-800/50",
                                },
                                {
                                    step: "Report on RakshaAI",
                                    title: "Report the bogus number on RakshaAI",
                                    body: "After handling the emergency, report the scam number on our platform. Your report is processed within 4–6 hours and immediately begins protecting other Indians from the same number. Include what type of scam it was (OTP fraud, Wangiri fraud, fake support, etc.) and the approximate time of the call so our AI can correlate with active fraud campaigns.",
                                    color: "from-indigo-500 to-violet-600",
                                    bg: "bg-indigo-50 dark:bg-indigo-950/20 border-indigo-200 dark:border-indigo-800/50",
                                },
                            ].map(({ step, title, body, color, bg }) => (
                                <div key={step} className={`rounded-xl border p-6 ${bg}`}>
                                    <div className="flex items-start gap-4">
                                        <div className={`text-sm font-black bg-gradient-to-r ${color} bg-clip-text text-transparent flex-shrink-0 w-16`}>{step}</div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-2">{title}</h3>
                                            <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{body}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── Phone Number Types Guide ─────────────────────────── */}
                    <section aria-labelledby="number-types-heading">
                        <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest">
                            Know Your Caller
                        </span>
                        <h2
                            id="number-types-heading"
                            className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3"
                        >
                            What Different Number Formats Tell You About the Caller
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl text-sm leading-relaxed">
                            The format of a phone number before you even check it already provides valuable risk signals. Here's what to look for.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                {
                                    pattern: "Check before you call back",
                                    label: "Reverse lookup first",
                                    risk: "Essential",
                                    detail: "Never return a missed call from an unknown caller without first running a reverse phone lookup. If our scam number lookup shows spam risk above 60, don't call back.",
                                    riskColor: "text-cyan-600 dark:text-cyan-400",
                                    tagColor: "bg-cyan-100 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-300",
                                },
                                {
                                    pattern: "Never share OTPs",
                                    label: "Zero exceptions",
                                    risk: "Critical",
                                    detail: "Your OTP is a one-time password for you alone. No bank, no UPI app, no government body will ever call and ask for it. OTP fraud starts the moment you hand it over.",
                                    riskColor: "text-red-600 dark:text-red-400",
                                    tagColor: "bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300",
                                },
                                {
                                    pattern: "Verify numbers independently",
                                    label: "Use official channels",
                                    risk: "Important",
                                    detail: "If someone calls claiming to be from your bank, hang up and call back using the number on the back of your debit card. Never trust the number an unknown caller gives you.",
                                    riskColor: "text-orange-600 dark:text-orange-400",
                                    tagColor: "bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300",
                                },
                                {
                                    pattern: "Register for DND",
                                    label: "Dial 1909",
                                    risk: "Recommended",
                                    detail: "Dial 1909 or SMS to 1909 to register for India's Do Not Disturb registry. Significantly reduces promotional scam calls reaching you.",
                                    riskColor: "text-green-600 dark:text-green-400",
                                    tagColor: "bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300",
                                },
                                {
                                    pattern: "Enable call screening",
                                    label: "iOS & Android",
                                    risk: "Recommended",
                                    detail: "Enable Silence Unknown Callers on iPhone or your carrier's spam call filter on Android. Combine with our phone number checker for numbers that still get through.",
                                    riskColor: "text-green-600 dark:text-green-400",
                                    tagColor: "bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300",
                                },
                                {
                                    pattern: "Educate your family",
                                    label: "Senior citizens most at risk",
                                    risk: "Important",
                                    detail: "Senior citizens are disproportionately targeted by bogus number scammers. Share this page and the RakshaAI phone number checker with your parents and grandparents.",
                                    riskColor: "text-orange-600 dark:text-orange-400",
                                    tagColor: "bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300",
                                },
                            ].map(({ pattern, label, risk, detail, riskColor, tagColor }) => (
                                <div key={pattern} className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-5 shadow-sm">
                                    <div className="flex items-start justify-between gap-3 mb-3">
                                        <div>
                                            <p className="font-mono text-xs font-bold text-indigo-700 dark:text-indigo-300 mb-0.5">{pattern}</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">{label}</p>
                                        </div>
                                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${tagColor}`}>{risk}</span>
                                    </div>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{detail}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── FAQ ────────────────────────────────────────────────── */}
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

                    {/* ── Related Tools ─────────────────────────────────────── */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                            Check Another Safety Tool
                        </h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 max-w-2xl">
                            Phone scam calls are just one part of India's cyber fraud problem. Use RakshaAI's full safety suite for comprehensive protection:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {[
                                {
                                    href: "/website-safety-checker",
                                    title: "Website Safety Checker",
                                    desc: "Verify if any website is safe before entering your card details or UPI. Checks SSL, domain age, malware, and fraud patterns.",
                                    icon: Globe,
                                    gradient: "from-indigo-500 to-purple-600",
                                },
                                {
                                    href: "/upi-id-checker",
                                    title: "UPI ID Checker",
                                    desc: "Verify UPI IDs before sending money. Checks registration status, account age, and scam reports.",
                                    icon: Search,
                                    gradient: "from-cyan-500 to-sky-600",
                                },
                                {
                                    href: "/check",
                                    title: "Link Safety Checker",
                                    desc: "Paste any suspicious link to see where it actually goes and whether it has been reported as a scam redirect.",
                                    icon: Shield,
                                    gradient: "from-teal-500 to-green-600",
                                },
                                {
                                    href: "/scam-alerts",
                                    title: "Live Scam Alerts",
                                    desc: "Latest alerts about active scam calls and fraud calls targeting Indians updated daily with new bogus numbers.",
                                    icon: BellRing,
                                    gradient: "from-red-500 to-orange-600",
                                },
                            ].map((tool) => (
                                <Link
                                    key={tool.href}
                                    href={tool.href}
                                    className="group flex items-start gap-4 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-cyan-200 dark:hover:border-cyan-800 transition-all"
                                >
                                    <div
                                        className={`w-10 h-10 rounded-lg bg-gradient-to-br ${tool.gradient} flex items-center justify-center flex-shrink-0`}
                                    >
                                        <tool.icon className="h-5 w-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white text-sm group-hover:text-cyan-700 dark:group-hover:text-cyan-400 transition-colors">
                                            {tool.title}
                                        </h3>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                                            {tool.desc}
                                        </p>
                                    </div>
                                    <ChevronRight className="h-4 w-4 text-gray-300 dark:text-gray-600 ml-auto flex-shrink-0 self-center group-hover:translate-x-0.5 transition-transform" />
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* ── Report CTA ────────────────────────────────────────── */}
                    <section className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-8 sm:p-10 text-center">
                        <BellRing className="h-8 w-8 text-orange-500 mx-auto mb-4" />
                        <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white mb-2">
                            Report a Scam Number
                        </h2>
                        <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-6">
                            Every scam call you report protects thousands of other Indians. If you've received a bogus number fraud call that isn't flagged in our phone number checker, take 30 seconds to report it. Your report goes live within 4–6 hours after verification.
                        </p>
                        <Link
                            href="/check"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-md"
                        >
                            <BellRing className="h-4 w-4" />
                            Report a Scam Number
                        </Link>
                        <p className="mt-4 text-xs text-gray-400 dark:text-gray-500">
                            Together, {SITE_STATS.usersProtectedLong} Indians are building the most comprehensive scam number lookup database in the country.
                        </p>
                    </section>

                    {/* ── Final CTA ────────────────────────────────────────── */}
                    <section className="rounded-2xl bg-gradient-to-br from-cyan-600 via-sky-600 to-teal-600 p-8 sm:p-12 text-white text-center shadow-2xl">
                        <Phone className="h-10 w-10 text-cyan-200 mx-auto mb-4" />
                        <h2 className="text-2xl sm:text-3xl font-extrabold mb-2">
                            Got a Suspicious Number?
                        </h2>
                        <p className="text-cyan-100 mb-8 text-sm sm:text-base max-w-xl mx-auto">
                            Don't call back without checking first. Enter the number below and get an
                            instant fraud risk report from our reverse phone lookup. Free. No sign-up. Always.
                        </p>
                        <div className="max-w-xl mx-auto bg-white/10 backdrop-blur border border-white/20 rounded-xl p-5">
                            <PhoneCheckerInput />
                        </div>
                        <p className="mt-5 text-cyan-200 text-xs">
                            🇮🇳 Protecting India from the ₹21,000 Cr phone fraud epidemic · {SITE_STATS.phoneNumbersCheckedDaily} numbers checked daily · {SITE_STATS_TEXT.trustScoreAccuracy}
                        </p>
                        <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-cyan-200">
                            <Link href="/scam-alerts" className="hover:text-white transition-colors">
                                → Live Scam Alerts
                            </Link>
                            <Link href="/prevention-tips" className="hover:text-white transition-colors">
                                Prevention Tips
                            </Link>
                            <Link href="/safety-guide" className="hover:text-white transition-colors">
                                Safety Guide
                            </Link>
                            <Link href="/data-sources" className="hover:text-white transition-colors">
                                Data Sources
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
