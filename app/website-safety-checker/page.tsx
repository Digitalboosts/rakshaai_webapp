import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import DefaultLayout from "@/components/DefaultLayout";
import { SITE_STATS, SITE_STATS_TEXT } from "@/lib/config/siteStats";
import {
    Shield, Search, Users, Zap, TrendingUp, CheckCircle2, ChevronDown, AlertTriangle,
    Database, Lock, Globe, Fingerprint, FileText, Phone, BellRing, ChevronRight,
    Clock, Smartphone, ShieldAlert, MessageSquare,
} from "lucide-react";
import WebsiteSafetyCheckerInput from "./WebsiteSafetyCheckerInput";
import WebsiteSafetyContent from "./WebsiteSafetyContent";
import { faqPageSchema, jsonLd, webPageSchema, softwareApplicationSchema } from "@/lib/seo/schema";

// ── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
    title: "Is This Website Safe? Free Safety Checker India 2026",
    description:
        "Check if any website is safe or a scam in India. 15+ security tests  SSL, domain age, phishing blacklists, malware. Free, no sign-up, results in 5 seconds.",
    alternates: {
        canonical: "https://rakshaai.co/website-safety-checker",
    },
    robots: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
    },
    openGraph: {
        title: "Is This Website Safe? Free Checker for India  RakshaAI",
        description:
            "Paste any URL. 15+ security tests  SSL, phishing, malware, domain age. Free, no sign-up, results in 5 seconds. India's scam detection platform.",
        url: "https://rakshaai.co/website-safety-checker",
        type: "website",
        siteName: "RakshaAI",
        images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Free Website Safety Checker India | RakshaAI' }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Is This Website Safe? Free Checker India  RakshaAI",
        description: "Paste any URL. SSL, phishing, malware checks. Free & instant. No sign-up needed.",
        images: ['/opengraph-image'],
    },
    other: {
        "geo.region": "IN",
        language: "en-IN",
    },
};

// ── JSON-LD Structured Data ──────────────────────────────────────────────────
const structuredData = webPageSchema({
    name: "Website Safety Checker  Is This Website Safe?",
    url: "/website-safety-checker",
    description: "Free website safety checker by RakshaAI. Verify SSL, domain age, phishing, malware, and trust score of any website instantly. Built for India.",
});

const softwareSchema = softwareApplicationSchema({
    name: "RakshaAI Website Safety Checker",
    url: "/website-safety-checker",
    description: "Free website safety checker for India. Runs 15+ security tests  SSL, domain age, phishing blacklists, malware  in under 5 seconds. No sign-up required.",
    featureList: [
        "SSL certificate verification",
        "Domain age and registration analysis",
        "Phishing blacklist lookup",
        "Malware and threat detection",
        "Shortened URL expansion",
        "Community scam report integration",
        "India-specific fraud database",
        "Trust score 0-10",
    ],
});

const faqStructured = faqPageSchema([
    {
        question: "How accurate is the website safety checker?",
        answer: "RakshaAI evaluates websites using multiple risk signals  SSL status, domain age, community reports, and public reputation data  and returns a trust score as guidance. No automated tool is fully reliable; always use your judgment alongside the result.",
    },
    {
        question: "Is this really free forever?",
        answer: "Yes. 100% free, no credit card, no registration, no hidden charges. We believe website safety verification should be accessible to every Indian.",
    },
    {
        question: "Can I check shortened URLs (bit.ly, etc.)?",
        answer: "Yes. Our checker automatically expands shortened URLs and analyzes the actual destination website. You see where the link really goes before clicking.",
    },
    {
        question: "What does the trust score mean?",
        answer: "8-10 = Low risk (positive safety signals). 5-7 = Use caution (verify before transacting). 0-4 = High risk (significant scam signals, avoid).",
    },
    {
        question: "How often is your database updated?",
        answer: "Our signal database is updated regularly. New community reports are reviewed and processed on an ongoing basis. Indian-specific scam patterns receive dedicated monitoring.",
    },
]);

// ── FAQ data ──────────────────────────────────────────────────────────────────
const faqs = [
    {
        q: "How accurate is the website safety checker?",
        a: "Our checker combines public threat database lookups, domain technical analysis, and community-submitted scam reports. The system cross-references multiple signals  SSL validity, domain age, WHOIS data, blacklist databases, and community report counts  before generating a trust score. No automated tool is 100% accurate. Always complement our tool with your own common sense  if an offer feels too good after we rate it safe, trust your instincts.",
    },
    {
        q: "Is this really free forever?",
        a: "Yes, completely free  no credit card, no registration, no hidden charges or premium tiers. We believe every Indian should have access to fraud protection tools regardless of income or technical ability. We sustain the platform through non-intrusive advertising and voluntary donations  never by charging users for safety checks.",
    },
    {
        q: "Can I check shortened URLs (bit.ly, t.co, etc.)?",
        a: "Yes  our checker automatically expands shortened URLs using multiple URL-unshortening services before performing any analysis. When you paste a bit.ly, t.co, TinyURL, or any other shortened link, our system first resolves the final destination URL, then runs the full 15-point safety analysis on that actual destination. You see both where you thought the link would go and where it actually leads. This is critically important because scammers routinely use shortened URLs in WhatsApp messages, SMS, and emails to disguise obviously suspicious domain names like 'hdfc-account-verify-login.com'.",
    },
    {
        q: "What does the trust score mean?",
        a: "Our trust score is a 0–10 scale calculated from 15+ data signals. Score 8–10 means Safe: the site is verified as legitimate with good domain history, valid SSL, no blacklist entries, and positive community reports  proceed normally but stay alert. Score 5–7 means Caution: some signals are unclear or mixed; the site may be new, have limited history, or have a few unverified reports  verify independently before entering payment details. Score 0–4 means Dangerous: multiple strong fraud indicators present  high probability of scam. Do not enter any personal data, do not make payments, close the tab immediately and report it to us.",
    },
    {
        q: "How often is your database updated?",
        a: "Public threat databases (Google Safe Browsing, VirusTotal, PhishTank) are queried in real time. Community reports are moderated and processed regularly. When a new scam URL is reported by our community, it is analysed and reviewed before being added to our active reports.",
    },
    {
        q: "Does HTTPS (the padlock icon) mean a website is safe?",
        a: "No  and this is one of the most dangerous misconceptions in online safety. HTTPS only means the connection between your browser and the website is encrypted in transit. It says absolutely nothing about whether the website owner is honest or the site is legitimate. In 2025, more than 80% of phishing websites use HTTPS because SSL certificates are free and take minutes to obtain. A perfectly crafted fake HDFC Bank phishing page will show the padlock symbol just as a real bank page would. Always verify the full domain name and run a safety check  never judge a website safe based on the padlock alone.",
    },
    {
        q: "What is domain spoofing and how do I spot it?",
        a: "Domain spoofing is when scammers register domains that look nearly identical to legitimate brands to trick users. Common techniques include: character substitution (using '0' for 'o'  amaz0n.com), adding words (hdfc-bank-login.com versus hdfcbank.com), changing the TLD (flipkart.net instead of flipkart.com), adding hyphens (icici-bank-service.in), or using homograph attacks (replacing letters with visually identical Unicode characters). To spot spoofed domains: read every character of the URL carefully in your browser's address bar, hover over links before clicking, and always type important banking/payment URLs manually rather than clicking links from messages.",
    },
    {
        q: "Can fake websites steal my information even if I don't type anything?",
        a: "In some cases, yes. Visiting a website can expose you to 'drive-by download' attacks where malware is silently installed by exploiting vulnerabilities in your browser or browser plugins. Scripts on rogue sites can also fingerprint your device (collect browser information, screen resolution, installed fonts) which can be sold for targeted attacks. However, for most users, the main risk comes from actively entering data  login credentials, card numbers, UPI PINs, OTPs, Aadhaar  on fake sites. Keep your browser updated, avoid unknown browser extensions, and run our check before visiting any unfamiliar URL.",
    },
    {
        q: "What should I do if my bank account was compromised through a fake website?",
        a: "Act immediately within the first hour  every minute matters. First, call your bank's 24x7 toll-free number to block your card and freeze transactions (SBI: 1800-11-2211, HDFC: 1800-202-6161, ICICI: 1800-102-4242, Kotak: 1860-266-0811). Second, file a complaint on the National Cyber Crime Reporting Portal at cybercrime.gov.in  you can report and request transaction freeze there. Third, change all passwords associated with your email and banking accounts from a clean device. Fourth, file a police complaint (FIR) at your nearest cyber cell  required for insurance claims and bank's fraud reversal process. Banks are legally required to investigate fraud complaints filed within 30 days.",
    },
    {
        q: "How do I report a suspicious website I found?",
        a: "You can report suspicious websites through multiple channels: (1) Use our in-built 'Report as Scam' button that appears on every check result page  takes 10 seconds. (2) Report to the National Cyber Crime Reporting Portal at cybercrime.gov.in. (3) Report phishing sites to CERT-In (Computer Emergency Response Team) at incident@cert-in.org.in. (4) Report to Google Safe Browsing at safebrowsing.google.com/safebrowsing/report_phish/. (5) Report to PhishTank at phishtank.org. Your report protects not just you but every Indian who might receive the same fake link in a WhatsApp message or email.",
    },
];

// ─────────────────────────────────────────────────────────────────────────────
// ── Page Data ─────────────────────────────────────────────────────────────────
const stats = [
    { value: "Multiple", label: "Threat Sources Checked", icon: Database },
    { value: "7", label: "Detection Factors", icon: CheckCircle2 },
    { value: "Growing", label: "Community Reports", icon: TrendingUp },
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
        imageLabel: "Step 1  Enter the Full Number",
        imageCaption: "Type the suspicious phone number including country code to begin the scam check.",
    },
    {
        step: "02",
        title: "Click \"Check Now\"",
        detail:
            `Our tool checks community fraud reports and public blacklists  results in ${SITE_STATS.resultSpeedText}.`,
        image: "/image/step-2-check-now-phone-number-fraud-lookup-rakshaai.jpg",
        imageAlt: `Step 2 - RakshaAI scans phone number against community reports and public blacklists in ${SITE_STATS.resultSpeedText}`,
        imageTitle: "Step 2: Click Check Now - Instant Phone Number Fraud Lookup India",
        imageLabel: "Step 2 - Click Check Now",
        imageCaption: `RakshaAI checks community fraud reports and public blacklists in ${SITE_STATS.resultSpeedText}.`,
    },
    {
        step: "03",
        title: "Read Your Result",
        detail:
            "You see a trust score (0–10), domain age, SSL status, malware checks, and community reports from the website safety lookup.",
        image: "/image/step-3-scam-probability-score-result-rakshaai.jpg",
        imageAlt: "Step 3 - RakshaAI displays scam probability score from 0 to 100 with fraud risk meter and complaint count",
        imageTitle: "Step 3: Read Scam Risk Score - Phone Number Fraud Result RakshaAI India",
        imageLabel: "Step 3  Read Your Result (Trust Score)",
        imageCaption: "See the trust score, domain age, SSL status, malware checks, and community reports from the website safety lookup.",
    },
    {
        step: "04",
        title: "Take Action & Report",
        detail:
            "If the site scores below 5, do not enter any data. Report new scam sites to protect the next Indian from the same fraud website.",
        image: "/image/step-4-block-report-scam-number-rakshaai-india.jpg",
        imageAlt: "Step 4 - Block and report a scam phone number on RakshaAI to protect other Indians from the same fraud caller",
        imageTitle: "Step 4: Block and Report Scam Number - RakshaAI India",
        imageLabel: "Step 4  Take Action & Report",
        imageCaption: "If the site scores below 5, do not enter any data. Report new scam sites to protect the next Indian from the same fraud website.",
    },
];

const websiteScamTypes = [
    {
        type: "Fake E-commerce Sites",
        description:
            "Clones of Amazon, Flipkart, and Meesho offering iPhone at ₹4,999. Professional design, working cart, no fulfilment. Victims pay and receive nothing  or receive counterfeits.",
        frequency: "Most reported",
        avgLoss: "₹8,500",
        icon: ShieldAlert,
        color: "red",
    },
    {
        type: "Phishing Banking Sites",
        description:
            "Pixel-perfect replicas of SBI, HDFC, ICICI login pages. URLs like 'sbi-secure-login.com' instead of 'onlinesbi.sbi'. Goal: steal net banking credentials for instant fund transfer.",
        frequency: "Very common",
        avgLoss: "₹42,000",
        icon: Lock,
        color: "orange",
    },
    {
        type: "Fake Loan Apps",
        description:
            "Sites offering 'instant RBI-approved loans' with Aadhaar-only verification. Collect KYC data and processing fees, disburse nothing. Data used for ongoing identity fraud.",
        frequency: "High volume",
        avgLoss: "₹18,000",
        icon: Database,
        color: "yellow",
    },
    {
        type: "UPI Payment Phishing",
        description:
            "Fake 'payment failed' or 'cashback pending' pages that ask you to re-enter your UPI PIN. The moment you submit, the fraudster completes an outgoing transfer from your account.",
        frequency: "Very common",
        avgLoss: "₹24,000",
        icon: MessageSquare,
        color: "purple",
    },
    {
        type: "Job & Investment Scams",
        description:
            "Fake work-from-home portals and 'guaranteed returns' investment platforms. Ask for registration fees or initial investment. Disappear after collecting funds.",
        frequency: "Fastest growing",
        avgLoss: "₹1,20,000",
        icon: TrendingUp,
        color: "pink",
    },
    {
        type: "Fake Government Portals",
        description:
            "Fraudulent sites mimicking IRCTC, income tax, passport, and Aadhaar portals. Collect fees, personal data, and OTPs under the guise of official government services.",
        frequency: "Common",
        avgLoss: "₹6,500",
        icon: Globe,
        color: "cyan",
    },
];

const whatWeCheck = [
    {
        label: "SSL/HTTPS Certificate",
        desc: "Valid, expired, or missing? Full certificate authority and encryption strength analysis.",
        icon: Lock,
    },
    {
        label: "Malware & Blacklists",
        desc: "Scans against Google Safe Browsing, VirusTotal, and Indian security databases.",
        icon: ShieldAlert,
    },
    {
        label: "Domain Age & WHOIS",
        desc: "Registration date, ownership transparency, and hidden registrant detection.",
        icon: Database,
    },
    {
        label: "Phishing Pattern Analysis",
        desc: "URL pattern matching against known phishing templates and community-reported scam domains.",
        icon: Fingerprint,
    },
    {
        label: "Community Scam Reports",
        desc: "Community-submitted fraud reports from Indian users who reported this website.",
        icon: Users,
    },
    {
        label: "Contact Verification",
        desc: "Does the site provide a legitimate, verifiable Indian business address?",
        icon: Phone,
    },
    {
        label: "Typosquatting Detection",
        desc: "Detects domains designed to look like trusted brands (amaz0n, fllipkart, etc.).",
        icon: FileText,
    },
    {
        label: "Report Velocity",
        desc: "How quickly this site is being newly reported  a spike = active fraud campaign.",
        icon: TrendingUp,
    },
];

const redFlags = [
    {
        flag: "Domain less than 6 months old with professional-looking site",
        action: "Treat a recently registered domain as one risk signal, especially when it is paired with unrealistic discounts or impersonation.",
        icon: Clock,
    },
    {
        flag: "Missing HTTPS or SSL certificate",
        action: "Any site asking for personal data or payments without valid HTTPS is immediately dangerous  close it.",
        icon: Lock,
    },
    {
        flag: "Price too good to be true",
        action: "iPhone 15 at ₹4,999? MacBook at ₹8,000? If the price defies logic, the site is the trap.",
        icon: Globe,
    },
    {
        flag: "Only UPI or crypto as payment methods",
        action: "Scammers demand untraceable payment methods. Legitimate Indian e-commerce always offers card payments with chargeback protection.",
        icon: BellRing,
    },
    {
        flag: "Site asks for Aadhaar, UPI PIN, or OTP",
        action: "No legitimate shopping or loan site needs your OTP or PIN. This is the hallmark of phishing  leave immediately.",
        icon: Smartphone,
    },
    {
        flag: "Suspicious domain name with slight brand misspelling",
        action: "Read every character of the URL. One zero instead of 'o', one extra letter, or a hyphen = a fake site designed to deceive.",
        icon: ShieldAlert,
    },
];

// ─────────────────────────────────────────────────────────────────────────────
export default function WebsiteSafetyCheckerPage() {
    return (
        <DefaultLayout>
            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLd([structuredData, softwareSchema, faqStructured]) }}
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
                            India&apos;s #1 Free Website Safety Checker
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-gray-900 dark:text-white leading-[1.1] tracking-tight mb-5">
                            How to Check If a Website is Safe:{" "}
                            <span className="bg-gradient-to-r from-cyan-500 via-sky-500 to-teal-500 bg-clip-text text-transparent">
                                Complete Guide + Free Checker Tool
                            </span>
                        </h1>

                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-6 leading-relaxed">
                            Every day, thousands of Indians lose money to fake websites. Before you enter your credit card details, share your UPI PIN, or click that{" "}
                            <strong className="text-cyan-700 dark:text-cyan-400">&quot;90% off iPhone&quot;</strong>{" "}
                            deal, take 5 seconds to verify the website&apos;s safety.
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-4xl mx-auto mb-10 leading-relaxed">
                            Our free website safety checker helps you spot scam sites instantly. Whether you&apos;re shopping online, checking out a new loan app, or investigating a suspicious link someone sent you on WhatsApp  we&apos;ve got you covered.
                        </p>

                        {/* Input card */}
                        <div className="max-w-3xl mx-auto mb-10">
                            <div className="relative bg-white dark:bg-gray-900/90 rounded-2xl px-6 pt-5 pb-4 border border-gray-200/80 dark:border-gray-700/60 shadow-[0_12px_48px_-8px_rgba(14,165,233,0.18)] dark:shadow-[0_12px_48px_-8px_rgba(14,165,233,0.07)]">
                                {/* Top shimmer accent */}
                                <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent rounded-full" />

                                <div className="flex items-start gap-3 mb-4 text-left">
                                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-sky-600 flex items-center justify-center flex-shrink-0 shadow-md shadow-cyan-500/25">
                                        <Search className="h-4 w-4 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 leading-snug">
                                            Enter any website URL for an instant safety report
                                        </p>
                                        <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                                            ✓ Trust score (0–10) &nbsp;·&nbsp; ✓ SSL &amp; domain age &nbsp;·&nbsp; ✓ Malware &amp; phishing check
                                        </p>
                                    </div>
                                </div>

                                <WebsiteSafetyCheckerInput />

                                <p className="mt-3 text-xs text-gray-400 text-center flex items-center justify-center gap-2">
                                    <Lock className="h-3 w-3" /> Your data is secure. We never store or share the URLs you check.
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

                {/* AI-extraction answer block  optimized for Google AI Overviews and featured snippets */}
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <div className="rounded-2xl border-2 border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950/40 p-6">
                        <p className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-3">
                            How to check if a website is safe in India
                        </p>
                        <ol className="space-y-2.5 list-none">
                            {[
                                ["1", "Paste the full URL into RakshaAI  never click a suspicious link without checking first"],
                                ["2", "Check the domain name carefully  scammers use look-alike domains like \"hdfc-bank-login.com\""],
                                ["3", "Look at the trust score  8 to 10 is safe, 5 to 7 is caution, 0 to 4 is high risk"],
                                ["4", "Verify the SSL certificate exists AND the domain matches  HTTPS alone does not mean safe"],
                                ["5", "Check domain age  scam sites are usually less than 6 months old"],
                                ["6", "Never enter OTP, UPI PIN, or Aadhaar on any site before verifying it here"],
                            ].map(([num, text]) => (
                                <li key={num} className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500 text-white text-[11px] font-bold flex items-center justify-center mt-0.5">
                                        {num}
                                    </span>
                                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{text}</span>
                                </li>
                            ))}
                        </ol>
                        <p className="text-xs text-indigo-700 dark:text-indigo-400 mt-4 font-semibold">
                            Report any scam website: cybercrime.gov.in | Cybercrime helpline: 1930
                        </p>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

                    {/* Interactive Content Component */}
                    <WebsiteSafetyContent />

                    {/* ── What Is a Website Safety Checker ──────────────────── */}
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
                                    What is Website Safety and Why Does It Matter?
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                                    Website safety isn&apos;t just about viruses anymore. It&apos;s about protecting your money, your identity, and your personal information from sophisticated scammers who&apos;ve perfected the art of creating fake websites that look exactly like the real thing.
                                </p>
                                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                                    Think about it: when was the last time you actually checked if a website was legitimate before entering your card details? Most of us don&apos;t. We see a professional-looking site, familiar logos, and we trust it. That&apos;s exactly what scammers count on.
                                </p>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                                    Online fraud is a major and growing problem in India. Most victims are tricked by fake websites designed to look legitimate. Checking first costs nothing. Not checking can cost everything.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { label: "Fake e-commerce sites", value: "Common", color: "from-cyan-500 to-sky-600" },
                                        { label: "Community data sources", value: "Multiple", color: "from-sky-500 to-teal-600" },
                                        { label: "Result time", value: "<5 sec", color: "from-teal-500 to-cyan-600" },
                                        { label: "Cost to check", value: "Free", color: "from-cyan-600 to-sky-500" },
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
                                <figure aria-label="Section Image  Website Safety Checker - Woman Examining Suspicious Website" className="flex flex-col items-center gap-3 m-0">
                                    <Image
                                        src="/image/website-safety-check-indian-woman-examining-suspicious-site-rakshaai.jpg"
                                        alt="Website Safety Checker - Woman Examining Suspicious Website"
                                        title="Website Safety Check | How to Verify Legitimate Sites Before Payment"
                                        width={500}
                                        height={500}
                                        className="object-contain drop-shadow-2xl max-w-full h-auto rounded-3xl"
                                        priority
                                    />
                                    <figcaption className="text-xs text-gray-500 dark:text-gray-400 text-center max-w-xs leading-relaxed italic">
                                        Always verify website safety before entering payment details. Check for HTTPS, suspicious URLs, and trust scores using RakshaAI&apos;s free website checker.
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </section>

                    {/* ── India Website Fraud Epidemic ─────────────────────── */}
                    <section aria-labelledby="epidemic-heading" className="bg-gradient-to-br from-cyan-50 to-sky-50 dark:from-cyan-950/20 dark:to-sky-950/20 border border-cyan-100 dark:border-cyan-900/50 rounded-2xl p-8 sm:p-10">
                        <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest">
                            The Scale of the Problem
                        </span>
                        <h2
                            id="epidemic-heading"
                            className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-2 mb-6"
                        >
                            Why You Should Check Every Website Before Sharing Data
                        </h2>
                        <div className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            <div className="space-y-4">
                                <p>
                                    During Diwali 2024, a website called <strong className="text-cyan-700 dark:text-cyan-300 font-mono">amaz0n-india-sale.com</strong> (notice the zero instead of &apos;o&apos;) ran for exactly 14 days. In those two weeks, <strong className="text-cyan-700 dark:text-cyan-300">1,247 people lost a combined ₹3.2 crore</strong>. The site looked identical to Amazon  same logo, same layout, same product images.
                                </p>
                                <p>
                                    <strong className="text-cyan-700 dark:text-cyan-300">Typosquatting domains</strong> let scammers clone any brand in hours. <strong className="text-cyan-700 dark:text-cyan-300">Free SSL certificates</strong> mean even fake sites show the &quot;padlock&quot; symbol. <strong className="text-cyan-700 dark:text-cyan-300">WhatsApp forwarding</strong> spreads malicious links to millions within minutes.
                                </p>
                                <p>
                                    <strong className="text-cyan-700 dark:text-cyan-300">Low digital literacy</strong> in Tier 2 and Tier 3 cities means first-time internet users are unfamiliar with website fraud tactics  making a free website safety checker like RakshaAI essential for every Indian.
                                </p>
                                <div className="grid grid-cols-2 gap-3 mt-4">
                                    {[
                                        { stat: "Growing", label: "Online fraud in India" },
                                        { stat: "Common", label: "Fake e-commerce sites" },
                                        { stat: "Free", label: "RakshaAI safety check" },
                                        { stat: "<5 sec", label: "Time to check a site" },
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

                    {/* ── Website Scam Types ───────────────────────────────── */}
                    <section aria-labelledby="scam-types-heading">
                        <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest">
                            Understand the Threat
                        </span>
                        <h2
                            id="scam-types-heading"
                            className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3"
                        >
                            Common Website Scam Types in India
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-3xl">
                            Online fraud through fake websites is a significant and growing problem in India. Before you dismiss that suspicious link, understand what you&apos;re dealing with.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {websiteScamTypes.map((scam) => {
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
                                    Unlike basic URL checkers that only verify SSL, RakshaAI&apos;s website safety checker combines community reports with AI-based fraud pattern detection trained specifically on Indian scam tactics. This means we catch newly registered fake sites and phishing domains that other tools miss.
                                </span>
                            </p>
                        </div>
                    </section>
 {/* ── What To Do After a Scam Website ─────────────────── */}
                    <section aria-labelledby="after-scam-heading">
                        <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-widest">
                            Emergency Guide
                        </span>
                        <h2
                            id="after-scam-heading"
                            className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3"
                        >
                            What To Do If You Entered Data on a Scam Website
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl text-sm leading-relaxed">
                            Identifying a scam website is only step one. Acting fast protects you. Reporting it protects every other Indian who receives the same link.
                        </p>
                        <figure aria-label="Supporting Infographic  Emergency Steps After Scam Website Data Entry" className="relative w-full rounded-2xl overflow-hidden mb-8 shadow-md m-0">
                            <Image
                                src="/image/emergency-steps-after-entering-data-scam-website-india-recovery-guide.jpg"
                                alt="Emergency Steps After Scam Website Data Entry"
                                title="What to Do After Entering Data on Scam Website | Emergency Recovery Steps India"
                                width={1200}
                                height={480}
                                className="w-full h-auto object-cover"
                                priority={false}
                            />
                            <figcaption className="text-xs text-gray-500 dark:text-gray-400 text-center leading-relaxed italic px-4 py-2">
                                Act fast if you&apos;ve entered data on a scam website. Follow these 5 steps immediately: (1) Contact bank within 5 minutes, (2) Change all passwords from secure device, (3) File complaint at cybercrime.gov.in or call 1930.
                            </figcaption>
                        </figure>
                        <div className="space-y-4">
                            {[
                                {
                                    step: "Call Your Bank",
                                    title: "Contact your bank's fraud helpline immediately",
                                    body: "Call your bank's 24x7 toll-free number to block your card and freeze transactions (SBI: 1800-11-2211, HDFC: 1800-202-6161, ICICI: 1800-102-4242, Kotak: 1860-266-0811). Speed matters  every minute counts. If you shared UPI PIN or OTP, ask for an account freeze or PIN reset immediately.",
                                    color: "from-red-500 to-rose-600",
                                    bg: "bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800/50",
                                },
                                {
                                    step: "Change Passwords",
                                    title: "Change all associated passwords from a secure device",
                                    body: "From a clean device (not the one you used on the scam site), change your banking passwords, UPI PIN, and email password. Scam websites may have installed tracking scripts. Use a different browser or incognito mode on a trusted device.",
                                    color: "from-orange-500 to-amber-600",
                                    bg: "bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800/50",
                                },
                                {
                                    step: "File Cyber Crime Report",
                                    title: "File a complaint at the Cyber Crime Portal",
                                    body: "File a complaint at cybercrime.gov.in or call the National Cyber Crime Helpline: 1930. You can also report to CERT-In at incident@cert-in.org.in. Include the URL, screenshots, and any transaction IDs if money was lost. Speed is critical for recovering funds.",
                                    color: "from-yellow-500 to-orange-500",
                                    bg: "bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-800/50",
                                },
                                {
                                    step: "Report to Google",
                                    title: "Report the phishing site to Google Safe Browsing",
                                    body: "Report the site at safebrowsing.google.com/safebrowsing/report_phish/  this gets it blacklisted for all Chrome users globally within hours. Also report to PhishTank.org for broader protection.",
                                    color: "from-cyan-500 to-sky-600",
                                    bg: "bg-cyan-50 dark:bg-cyan-950/20 border-cyan-200 dark:border-cyan-800/50",
                                },
                                {
                                    step: "Report on RakshaAI",
                                    title: "Report the scam website on RakshaAI",
                                    body: "After handling the emergency, report the scam site on our platform. Your report is processed within 4–6 hours and immediately begins protecting other Indians from the same URL. Include what type of scam it was and how you discovered it so our AI can correlate with active fraud campaigns.",
                                    color: "from-indigo-500 to-violet-600",
                                    bg: "bg-indigo-50 dark:bg-indigo-950/20 border-indigo-200 dark:border-indigo-800/50",
                                },
                            ].map(({ step, title, body, color, bg }) => (
                                <div key={step} className={`rounded-xl border p-6 ${bg}`}>
                                    <div className="flex items-start gap-4">
                                        <div className={`text-sm font-black bg-gradient-to-r ${color} bg-clip-text text-transparent flex-shrink-0 w-20`}>{step}</div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-2">{title}</h3>
                                            <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{body}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                    {/* ── 10 Red Flags ─────────────────────────────────────── */}
                    <section aria-labelledby="ten-red-flags-heading">
                        <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest">
                            Spot It Yourself
                        </span>
                        <h2
                            id="ten-red-flags-heading"
                            className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3"
                        >
                            10 Red Flags: How to Spot a Fake Website Instantly
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-3xl">
                            Before you use our automated checker, know the warning signs you can spot with your own eyes. Think of these as flashing red lights that should make you close that browser tab immediately.
                        </p>
                        <div className="space-y-4">
                            {[
                                {
                                    num: "01",
                                    title: "Missing HTTPS or SSL Certificate",
                                    body: "Look at your browser's address bar. If a website starts with 'http://' (no 's'), your data travels in plain text  anyone can intercept it. If a website asks for ANY personal information or payment details without HTTPS, close it immediately. No legitimate business operates without SSL certificates in 2025.",
                                    color: "red",
                                },
                                {
                                    num: "02",
                                    title: "Brand New Domain (Less Than 6 Months Old)",
                                    body: "Scammers often create disposable domains and abandon them after a campaign. A recently registered store paired with unrealistic discounts deserves additional verification, but domain age alone does not prove fraud.",
                                    color: "orange",
                                },
                                {
                                    num: "03",
                                    title: "Suspicious Domain Names",
                                    body: "Scammers use typosquatting: amaz0n.com (zero instead of 'o'), fllipkart.com (double 'l'), paytmm.in (extra 'm'), sbi-secure-login.com (adding words to real brand names). Always read the full URL character by character. One wrong character means you're on a fake site.",
                                    color: "yellow",
                                },
                                {
                                    num: "04",
                                    title: "Deals That Are Too Good to Be True",
                                    body: "iPhone 15 for ₹4,999. MacBook at ₹8,000. Gold jewellery at 90% off. If a price defies logic, it's a scam. Legitimate retailers cannot offer products at 90% below market price. The 'deal' is the trap, designed to override your rational judgment.",
                                    color: "green",
                                },
                                {
                                    num: "05",
                                    title: "No Legitimate Contact Information",
                                    body: "Scam sites either have no contact page at all, or list a Gmail address and a mobile number with no physical address, CIN, or GST number. A legitimate Indian business will have a registered address and verifiable contact details. Try calling the listed number  scam sites often use fake or disconnected numbers.",
                                    color: "cyan",
                                },
                                {
                                    num: "06",
                                    title: "Suspicious Payment Methods Only",
                                    body: "If the only payment options are direct UPI ID transfer, Paytm wallet-to-wallet, or cryptocurrency  walk away. Legitimate e-commerce platforms offer card payments with chargeback protection. Scammers demand untraceable payment methods because they cannot be reversed once stolen.",
                                    color: "indigo",
                                },
                                {
                                    num: "07",
                                    title: "Poor Website Quality",
                                    body: "Broken images, spelling mistakes in product descriptions, misaligned layouts, inconsistent fonts, and placeholder text are dead giveaways. Scam sites are built quickly and cheaply. Most legitimate Indian brands have professional UI/UX standards. If a site looks like it was made in an afternoon, it probably was.",
                                    color: "purple",
                                },
                                {
                                    num: "08",
                                    title: "Requests for Unnecessary Personal Information",
                                    body: "A shopping site asking for your Aadhaar number, a loan comparison site asking for your banking password, a ticket booking site asking for your UPI PIN  none of these are normal. Legitimate services request only what they need. If a site asks for information with no logical connection to the service, it's harvesting data for fraud.",
                                    color: "pink",
                                },
                                {
                                    num: "09",
                                    title: "No Social Media Presence",
                                    body: "Search the brand name on Facebook, Instagram, and Twitter/X. A legitimate business selling products worth thousands of rupees will have an active social media presence with real customer interactions. Zero presence, or a presence created in the last 30 days with only promotional posts, is a strong signal the 'brand' was created purely for fraud.",
                                    color: "teal",
                                },
                                {
                                    num: "10",
                                    title: "Negative Reviews and Scam Complaints",
                                    body: "Search '[site name] review scam complaints' on Google. Check Reddit India, consumer complaint sites, and Google Maps reviews. Even one month of complaints from victims who 'paid and received nothing' is enough to walk away. Our tool also surfaces community-submitted scam reports.",
                                    color: "gray",
                                },
                            ].map(({ num, title, body, color }) => (
                                <div key={num} className={`flex gap-4 p-5 rounded-2xl bg-white dark:bg-gray-900 border border-${color}-100 dark:border-${color}-900/30 shadow-sm hover:shadow-md transition-shadow`}>
                                    <div className={`text-2xl font-black text-${color}-300 dark:text-${color}-800 flex-shrink-0 w-8 pt-0.5`}>{num}</div>
                                    <div>
                                        <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-1">{title}</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{body}</p>
                                    </div>
                                </div>
                            ))}
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
                                    How to Check If a Website is Safe
                                </h2>
                                <p className="mt-3 text-gray-500 dark:text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
                                    Four simple steps  takes less than 30 seconds to know if a site is safe.
                                </p>
                            </div>

                            {/* Steps  icon-only cards */}
                            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                                {/* Connector line  desktop only */}
                                <div className="hidden lg:block absolute top-[4.25rem] left-[14%] right-[14%] h-px bg-gradient-to-r from-transparent via-cyan-300/70 dark:via-cyan-700/40 to-transparent pointer-events-none" />

                                {[
                                    {
                                        step: "01",
                                        title: howItWorks[0].title,
                                        detail: howItWorks[0].detail,
                                        icon: Globe,
                                        accent: "from-cyan-500 to-sky-500",
                                        bg: "from-cyan-50 to-sky-50/50 dark:from-cyan-950/40 dark:to-sky-950/20",
                                        border: "border-cyan-200/80 dark:border-cyan-800/40",
                                        wm: "text-cyan-100 dark:text-cyan-900/50",
                                        ring: "group-hover:border-cyan-400 dark:group-hover:border-cyan-600",
                                        shadow: "group-hover:shadow-cyan-200/60 dark:group-hover:shadow-cyan-900/40",
                                    },
                                    {
                                        step: "02",
                                        title: howItWorks[1].title,
                                        detail: howItWorks[1].detail,
                                        icon: Database,
                                        accent: "from-blue-500 to-indigo-500",
                                        bg: "from-blue-50 to-indigo-50/50 dark:from-blue-950/40 dark:to-indigo-950/20",
                                        border: "border-blue-200/80 dark:border-blue-800/40",
                                        wm: "text-blue-100 dark:text-blue-900/50",
                                        ring: "group-hover:border-blue-400 dark:group-hover:border-blue-600",
                                        shadow: "group-hover:shadow-blue-200/60 dark:group-hover:shadow-blue-900/40",
                                    },
                                    {
                                        step: "03",
                                        title: howItWorks[2].title,
                                        detail: howItWorks[2].detail,
                                        icon: ShieldAlert,
                                        accent: "from-violet-500 to-purple-600",
                                        bg: "from-violet-50 to-purple-50/50 dark:from-violet-950/40 dark:to-purple-950/20",
                                        border: "border-violet-200/80 dark:border-violet-800/40",
                                        wm: "text-violet-100 dark:text-violet-900/50",
                                        ring: "group-hover:border-violet-400 dark:group-hover:border-violet-600",
                                        shadow: "group-hover:shadow-violet-200/60 dark:group-hover:shadow-violet-900/40",
                                    },
                                    {
                                        step: "04",
                                        title: howItWorks[3].title,
                                        detail: howItWorks[3].detail,
                                        icon: CheckCircle2,
                                        accent: "from-emerald-500 to-teal-500",
                                        bg: "from-emerald-50 to-teal-50/50 dark:from-emerald-950/40 dark:to-teal-950/20",
                                        border: "border-emerald-200/80 dark:border-emerald-800/40",
                                        wm: "text-emerald-100 dark:text-emerald-900/50",
                                        ring: "group-hover:border-emerald-400 dark:group-hover:border-emerald-600",
                                        shadow: "group-hover:shadow-emerald-200/60 dark:group-hover:shadow-emerald-900/40",
                                    },
                                ].map(({ step, title, detail, icon: Icon, accent, bg, border, wm, ring, shadow }, idx) => (
                                    <div key={step} className="relative group">
                                        <div className={`relative bg-gradient-to-br ${bg} border ${border} ${ring} ${shadow} rounded-3xl p-6 overflow-hidden hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col gap-5`}>
                                            {/* Watermark step number */}
                                            <span className={`absolute -bottom-4 -right-1 text-[7.5rem] font-black leading-none select-none pointer-events-none ${wm}`}>
                                                {step}
                                            </span>

                                            {/* Icon badge + step pill */}
                                            <div className="flex items-center justify-between relative z-10">
                                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${accent} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                                    <Icon className="h-7 w-7 text-white" strokeWidth={1.75} />
                                                </div>
                                                <span className={`text-[10px] font-extrabold bg-gradient-to-r ${accent} bg-clip-text text-transparent uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/60 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700`}>
                                                    Step {step}
                                                </span>
                                            </div>

                                            {/* Text */}
                                            <div className="relative z-10">
                                                <h3 className="font-bold text-gray-900 dark:text-white text-[15px] leading-snug mb-2">
                                                    {title}
                                                </h3>
                                                <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed">
                                                    {detail}
                                                </p>
                                            </div>

                                            {/* Bottom accent bar  reveals on hover */}
                                            <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                                        </div>

                                        {/* Chevron connector badge  desktop */}
                                        {idx < 3 && (
                                            <div className="hidden lg:flex absolute -right-3.5 top-[3.25rem] z-20 w-7 h-7 rounded-full bg-white dark:bg-gray-900 border border-cyan-200 dark:border-cyan-800 shadow-md items-center justify-center">
                                                <ChevronRight className="h-3.5 w-3.5 text-cyan-500 dark:text-cyan-400" />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Pipeline flow strip */}
                            <div className="mt-8 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm">
                                <div className="h-1 w-full bg-gradient-to-r from-cyan-500 via-blue-500 via-violet-500 to-emerald-500" />
                                <div className="px-6 sm:px-10 py-5 flex flex-wrap items-center justify-between gap-y-3 gap-x-2">
                                    {[
                                        { label: "Input", sub: "Paste website URL", color: "text-cyan-600 dark:text-cyan-400", dot: "bg-cyan-500" },
                                        { label: "AI Scan", sub: "15+ signals checked", color: "text-blue-600 dark:text-blue-400", dot: "bg-blue-500" },
                                        { label: "Trust Score", sub: "0–10 result", color: "text-violet-600 dark:text-violet-400", dot: "bg-violet-500" },
                                        { label: "Result", sub: "Safe or Scam alert", color: "text-emerald-600 dark:text-emerald-400", dot: "bg-emerald-500" },
                                    ].map(({ label, sub, color, dot }, i, arr) => (
                                        <div key={label} className="flex items-center gap-3">
                                            <div className="flex flex-col gap-0.5">
                                                <div className="flex items-center gap-1.5">
                                                    <span className={`w-2 h-2 rounded-full flex-shrink-0 ${dot}`} />
                                                    <span className={`text-sm font-bold ${color}`}>{label}</span>
                                                </div>
                                                <span className="text-[11px] text-gray-400 dark:text-gray-500 pl-3.5">{sub}</span>
                                            </div>
                                            {i < arr.length - 1 && (
                                                <ChevronRight className="h-4 w-4 text-gray-300 dark:text-gray-600 ml-1 flex-shrink-0" />
                                            )}
                                        </div>
                                    ))}
                                </div>
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
                            What Our Website Checker Actually Looks At
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
                            We don&apos;t just check SSL. We run 8 parallel checks and combine the signals into a single trust score (0–10).
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
                            Red Flags: Signs of a Scam Website
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl text-sm">
                            You don&apos;t always have time to run a website check before clicking. Train yourself to spot these warning signs on any suspicious site  each is a reason to close the tab immediately.
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

                    {/* ── HTTPS vs Safe Website  Split Section ────────────── */}
                    <section aria-labelledby="https-vs-safe-heading" className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-lg lg:min-h-[560px]">

                        {/* ── LEFT: Content ── */}
                        <div className="flex flex-col justify-center p-8 sm:p-12 bg-white dark:bg-gray-900">
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-300 text-[10px] font-extrabold uppercase tracking-widest mb-5 self-start border border-cyan-200 dark:border-cyan-800/60">
                                <Lock className="h-3 w-3" />
                                Website Basics
                            </span>
                            <h2
                                id="https-vs-safe-heading"
                                className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white leading-tight mb-3"
                            >
                                HTTPS Padlock vs Website Safety {" "}
                                <span className="bg-gradient-to-r from-cyan-500 to-sky-500 bg-clip-text text-transparent">
                                    Know the Difference
                                </span>
                            </h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-7">
                                The padlock icon only means your connection is encrypted. It says absolutely nothing about whether the website owner is honest. In 2025, over 80% of phishing sites use HTTPS  always check the trust score before entering data.
                            </p>

                            {/* Comparison cards */}
                            <div className="space-y-3 mb-7">
                                <div className="flex gap-4 p-4 rounded-2xl bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800/50">
                                    <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-green-100 dark:bg-green-900/40 flex items-center justify-center">
                                        <Lock className="h-5 w-5 text-green-600 dark:text-green-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-green-800 dark:text-green-300 mb-1">HTTPS Padlock  What It Means</p>
                                        <ul className="space-y-0.5 text-xs text-green-700 dark:text-green-400">
                                            <li>✓ Your connection to the site is encrypted</li>
                                            <li>✓ Data cannot be intercepted in transit</li>
                                            <li>✓ Free to get  any site can have it in minutes</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-4 rounded-2xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800/50">
                                    <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-red-100 dark:bg-red-900/40 flex items-center justify-center">
                                        <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-red-800 dark:text-red-300 mb-1">HTTPS Padlock  What It Does NOT Mean</p>
                                        <ul className="space-y-0.5 text-xs text-red-700 dark:text-red-400">
                                            <li>✗ The site owner is legitimate or trustworthy</li>
                                            <li>✗ The site won&apos;t steal your card or UPI details</li>
                                            <li>✗ The site is registered, real, or safe to buy from</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Golden Rule */}
                            <div className="flex items-start gap-3 p-4 rounded-2xl bg-cyan-50 dark:bg-cyan-950/20 border border-cyan-200 dark:border-cyan-800/50">
                                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center">
                                    <Shield className="h-4 w-4 text-white" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-cyan-900 dark:text-cyan-100 mb-0.5">The Golden Rule  याद रखें</p>
                                    <p className="text-xs text-cyan-800 dark:text-cyan-200 leading-relaxed">
                                        <strong>A padlock means your data is encrypted  not that the recipient is honest.</strong>{" "}
                                        Always check the trust score before entering your card, UPI, or personal details on any website.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* ── RIGHT: Image ── */}
                        <div className="relative h-full min-h-[420px] overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-sky-500 to-teal-400" />
                            <Image
                                src="/image/https-padlock-vs-website-safety-encryption-trust-comparison-india.jpg"
                                alt="HTTPS Padlock vs Website Safety Comparison"
                                title="HTTPS Padlock vs Website Safety - Encryption ≠ Trust | Security Guide"
                                fill
                                className="object-cover object-center"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            {/* Overlay cards on the image */}
                            <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/60 via-transparent to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2">
                                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2.5">
                                    <Lock className="h-4 w-4 text-green-300 flex-shrink-0" />
                                    <span className="text-xs text-white font-semibold">https://fake-hdfc-bank-login.com</span>
                                    <span className="ml-auto text-[10px] bg-green-500/30 text-green-200 px-1.5 py-0.5 rounded-full font-bold border border-green-400/30">SSL ✓</span>
                                </div>
                                <div className="flex items-center gap-2 bg-red-500/20 backdrop-blur-sm border border-red-400/30 rounded-xl px-4 py-2.5">
                                    <AlertTriangle className="h-4 w-4 text-red-300 flex-shrink-0" />
                                    <span className="text-xs text-white font-semibold">Trust Score: 1.2 / 10  SCAM</span>
                                    <span className="ml-auto text-[10px] bg-red-500/40 text-red-200 px-1.5 py-0.5 rounded-full font-bold border border-red-400/30">Danger</span>
                                </div>
                            </div>
                        </div>
                    </section>

                   

                    {/* ── SSL & Domain Age Deep Dive ────────────────────────── */}
                    <section aria-labelledby="ssl-domain-heading">
                        <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest">
                            Know Your Signals
                        </span>
                        <h2
                            id="ssl-domain-heading"
                            className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3"
                        >
                            SSL Certificates, Domain Age &amp; Phishing: What to Check
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl text-sm leading-relaxed">
                            These three signals  SSL status, domain age, and phishing patterns  give you the fastest read on whether a website is legitimate before you enter any data.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                {
                                    pattern: "Check HTTPS before entering data",
                                    label: "Non-negotiable rule",
                                    risk: "Essential",
                                    detail: "If the URL starts with http:// (no 's'), never enter a password, card number, or OTP. HTTPS encrypts your data in transit. Without it, anyone on the same Wi-Fi can intercept it.",
                                    riskColor: "text-cyan-600 dark:text-cyan-400",
                                    tagColor: "bg-cyan-100 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-300",
                                },
                                {
                                    pattern: "Domain under 6 months = danger",
                                    label: "Most reliable scam signal",
                                    risk: "Critical",
                                    detail: "Our checker can surface available domain-registration context. Treat a recently launched site with aggressive discounts as higher risk and verify it independently before paying.",
                                    riskColor: "text-red-600 dark:text-red-400",
                                    tagColor: "bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300",
                                },
                                {
                                    pattern: "Read the full URL character by character",
                                    label: "Typosquatting defence",
                                    risk: "Important",
                                    detail: "Look for zero instead of 'o', extra hyphens, added words before or after the brand name, or a different TLD (.net instead of .com). One character difference = confirmed fake site.",
                                    riskColor: "text-orange-600 dark:text-orange-400",
                                    tagColor: "bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300",
                                },
                                {
                                    pattern: "Never enter OTP on any website",
                                    label: "UPI phishing defence",
                                    risk: "Critical",
                                    detail: "UPI and banking OTPs are for SMS verification only. No legitimate website should ever ask you to type your OTP into a web form. This is always phishing  close the tab.",
                                    riskColor: "text-red-600 dark:text-red-400",
                                    tagColor: "bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300",
                                },
                                {
                                    pattern: "Verify payment gateway before checkout",
                                    label: "Safe payment check",
                                    risk: "Recommended",
                                    detail: "Legitimate Indian e-commerce uses Razorpay, PayU, CCAvenue, or Stripe. If checkout redirects to a random bank transfer page or only offers UPI to an individual ID  it's a scam.",
                                    riskColor: "text-green-600 dark:text-green-400",
                                    tagColor: "bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300",
                                },
                                {
                                    pattern: "Educate your family",
                                    label: "Senior citizens most at risk",
                                    risk: "Important",
                                    detail: "Senior citizens are disproportionately targeted by fake website scammers. Share this page and the RakshaAI website checker with your parents and grandparents before their next online purchase.",
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

                    {/* ── Case Study ───────────────────────────────────────── */}
                    <section aria-labelledby="case-study-heading">
                        <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-widest">
                            Real Scam Example
                        </span>
                        <h2
                            id="case-study-heading"
                            className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-2 mb-4"
                        >
                            Real Scam Website Examples: Learn from Others&apos; Mistakes
                        </h2>
                        <div className="rounded-2xl bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/40 dark:to-orange-950/40 border border-red-200 dark:border-red-900/40 p-8">
                            <div className="inline-block px-3 py-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-xs font-bold uppercase tracking-widest mb-4">
                                Case Study: The Fake Loan App Epidemic
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 mb-2 leading-relaxed">
                                In March–June 2024, a website called <strong className="font-mono">&apos;instant-loan-india.com&apos;</strong> promised RBI-licensed instant loans up to ₹5 lakhs with <em>&apos;Aadhaar only  no credit check required.&apos;</em>
                            </p>
                            <p className="text-red-700 dark:text-red-400 font-semibold mb-6">The damage: 847 victims, ₹1.8 crore stolen, plus massive identity theft.</p>
                            <div className="grid lg:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-sm">How it worked</h3>
                                    <ol className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                        {[
                                            "Users downloaded an app from the site (not from Play Store)",
                                            "Entered Aadhaar, PAN, and bank details for 'verification'",
                                            "App showed 'loan approved'  money never arrived",
                                            "Scammers used stolen data for ongoing identity fraud",
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="w-5 h-5 rounded-full bg-red-200 dark:bg-red-900/40 text-red-700 dark:text-red-300 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-sm">What our checker revealed</h3>
                                    <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                        {[
                                            "Domain age: 3 months",
                                            "WHOIS privacy enabled (hidden owner)",
                                            "Registered in Cyprus (not India)",
                                            "23 user scam reports in our database",
                                            "Blacklisted by Indian CERT",
                                        ].map(item => (
                                            <li key={item} className="flex items-start gap-2">
                                                <span className="text-red-500 font-bold mt-0.5 flex-shrink-0">✗</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
                                <p className="text-sm font-semibold text-gray-900 dark:text-white">The lesson:</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Before downloading ANY app or entering personal information, paste the website URL into our checker. Those 5 seconds could save you ₹45,000 and years of identity theft headaches.</p>
                            </div>
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
                            Fake websites are just one part of India&apos;s cyber fraud problem. Use RakshaAI&apos;s full safety suite for comprehensive protection:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {[
                                {
                                    href: "/phone-number-checker",
                                    title: "Phone Number Checker",
                                    desc: "Check phone numbers against community scam reports. Detect fraud callers before you call back.",
                                    icon: Phone,
                                    gradient: "from-cyan-500 to-sky-600",
                                },
                                {
                                    href: "/upi-id-checker",
                                    title: "UPI ID Checker",
                                    desc: "Verify UPI IDs before sending money. Checks registration status, account age, and scam reports.",
                                    icon: Search,
                                    gradient: "from-teal-500 to-green-600",
                                },
                                {
                                    href: "/check",
                                    title: "Link Safety Checker",
                                    desc: "Paste any suspicious link to see where it actually goes and whether it has been reported as a scam redirect.",
                                    icon: Shield,
                                    gradient: "from-indigo-500 to-purple-600",
                                },
                                {
                                    href: "/scam-alerts",
                                    title: "Live Scam Alerts",
                                    desc: "Latest alerts about active scam websites and fraud links targeting Indians  updated daily.",
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
                            Report a Scam Website
                        </h2>
                        <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-6">
                            Every scam website you report protects thousands of other Indians. If you&apos;ve found a fraudulent site that isn&apos;t flagged in our checker, take 30 seconds to report it. Your report goes live within 4–6 hours after verification.
                        </p>
                        <Link
                            href="/check"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-md"
                        >
                            <BellRing className="h-4 w-4" />
                            Report a Scam Website
                        </Link>
                        <p className="mt-4 text-xs text-gray-400 dark:text-gray-500">
                            Together, Indian users are building a community scam database that helps warn others before they fall victim.
                        </p>
                    </section>

                    {/* ── Final CTA ────────────────────────────────────────── */}
                    <section className="rounded-2xl bg-gradient-to-br from-cyan-600 via-sky-600 to-teal-600 p-8 sm:p-12 text-white text-center shadow-2xl">
                        <Globe className="h-10 w-10 text-cyan-200 mx-auto mb-4" />
                        <h2 className="text-2xl sm:text-3xl font-extrabold mb-2">
                            Got a Suspicious Website?
                        </h2>
                        <p className="text-cyan-100 mb-8 text-sm sm:text-base max-w-xl mx-auto">
                            Don&apos;t enter your data without checking first. Paste the URL below and get an
                            instant safety report. Free. No sign-up. Always.
                        </p>
                        <div className="max-w-xl mx-auto bg-white/10 backdrop-blur border border-white/20 rounded-xl p-5">
                            <WebsiteSafetyCheckerInput />
                        </div>
                        <p className="mt-5 text-cyan-200 text-xs">
                            🇮🇳 Free, no login, built for India · Multiple threat data sources · Community-powered reports
                        </p>
                        <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-cyan-200">
                            <Link href="/scam-alerts" className="hover:text-white transition-colors">
                                → Live Scam Alerts
                            </Link>
                            <Link href="/prevention-tips" className="hover:text-white transition-colors">
                                → Prevention Tips
                            </Link>
                            <Link href="/safety-guide" className="hover:text-white transition-colors">
                                → Safety Guide
                            </Link>
                        </div>
                    </section>
                </div>
            </div>
        </DefaultLayout>
    );
}
