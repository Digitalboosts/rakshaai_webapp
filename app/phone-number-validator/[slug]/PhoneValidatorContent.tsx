"use client";

import { useState } from "react";
import Link from "next/link";
import { faqPageSchema, jsonLd, softwareApplicationSchema } from "@/lib/seo/schema";
import {
    Phone, Shield, AlertTriangle, CheckCircle2, Users, Zap,
    TrendingUp, ChevronDown, PhoneCall, Globe, BellRing,
    CreditCard, RotateCcw, Info, Headphones
} from "lucide-react";

// ── Structured data (WebApplication + FAQ) ────────────────────────────────
const webAppSchema = softwareApplicationSchema({
    name: "RakshaAI Phone Number Checker",
    url: "/phone-number-checker",
    description: "Free India-focused phone number scam checker for unknown callers, spoofed numbers, OTP fraud, and Wangiri fraud signals.",
    featureList: [
        "Phone number scam lookup",
        "Reverse phone risk context",
        "Wangiri fraud guidance",
        "Cybercrime reporting steps",
    ],
});

const faqSchema = faqPageSchema([
    {
        question: "How do I check if a phone number is a scam in India?",
        answer: "Enter the full phone number, with country code if international, into RakshaAI's free phone number checker. Results appear in seconds, showing a scam probability score, complaint count, and known fraud patterns.",
    },
    {
        question: "Is this phone number checker really free?",
        answer: "Yes, 100% free. No login, no registration, no hidden charges. Use it as many times as you need.",
    },
    {
        question: "What is Wangiri fraud?",
        answer: "Wangiri is a one-ring scam where you receive a missed call from an international number. If you call back, you may be routed through premium-rate international lines and charged heavily per minute.",
    },
    {
        question: "Can scammers fake an Indian +91 number?",
        answer: "Yes. Scammers use VoIP services to spoof local +91 numbers or legitimate corporate numbers. Always run a reverse phone lookup before trusting any unknown caller.",
    },
    {
        question: "What should I do after identifying a scam number?",
        answer: "Do not call back. Report the number through RakshaAI's Report button on your result page. You can also file a complaint on the TRAI DND app or the National Cyber Crime portal at cybercrime.gov.in.",
    },
]);

// ── Step-by-step guide data ───────────────────────────────────────────────
const steps = [
    {
        n: "01",
        title: "Enter the full phone number",
        body: "Include the country code for international numbers (e.g., +1 for USA, +44 for UK). Our phone number checker supports all country codes.",
    },
    {
        n: "02",
        title: "Click 'Check Now'",
        body: "Our tool checks available threat signals and community reports to provide scam-risk context.",
    },
    {
        n: "03",
        title: "Read your result",
        body: "You'll see a scam probability score (0–100), the complaint count, known fraud call patterns, and carrier information from the reverse phone lookup.",
    },
    {
        n: "04",
        title: "Take action",
        body: "If the number scores above 60, do not call back. Above 80 means high spam risk report it using the button on your results page.",
    },
    {
        n: "05",
        title: "Report new scams",
        body: "If you've received a suspicious call not in our database, report it. Your report protects the next Indian from the same bogus number.",
    },
];

// ── Scam types data ───────────────────────────────────────────────────────
const scamTypes = [
    {
        icon: <CreditCard className="h-6 w-6" />,
        tag: "Most Reported",
        tagColor: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400",
        title: "Bank Verification Scams",
        body: `The most reported scam call type in India. You receive a fraud call from someone claiming to be from your bank's 'fraud prevention department.' They know your name, sometimes your partial account number (bought from data leaks), and they sound completely professional.\n\nTheir goal: trigger OTP fraud by convincing you your account is 'at risk.' Real banks never ask for OTPs, PINs, or passwords on the phone not SBI, not HDFC, not ICICI, not anyone. If an unknown caller asks for these details, hang up and run a reverse phone lookup immediately.`,
    },
    {
        icon: <Globe className="h-6 w-6" />,
        tag: "Wangiri Fraud",
        tagColor: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-400",
        title: "One-Ring Scams (Wangiri Fraud)",
        body: `You see a missed call from an international or unknown caller. It rings once and cuts. You call back out of curiosity that's the trap.\n\nThis one-ring scam routes your callback through premium-rate international numbers. You're billed ₹150–₹800 per minute. The call is automated and keeps you on hold until you hang up. Common Wangiri prefixes seen in India: +252 (Somalia), +269 (Comoros), +371 (Latvia). Paste any strange international missed call into our checker before calling back.`,
    },
    {
        icon: <BellRing className="h-6 w-6" />,
        tag: "OTP Fraud",
        tagColor: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-400",
        title: "OTP Fraud Calls",
        body: `You receive an OTP you didn't request. Then someone calls claiming to be from a delivery service, e-commerce platform, or government department. They say there's a 'verification issue' and ask you to share the OTP.\n\nThe moment you share the code, the scammer completes a transaction a UPI payment, a SIM swap, or a new credit card in your name. OTPs are one-time passwords meant only for you. No legitimate company will ever call and ask for an OTP. If you get a suspicious fraud call, run a phone number lookup immediately.`,
    },
    {
        icon: <Headphones className="h-6 w-6" />,
        tag: "Support Scam",
        tagColor: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-400",
        title: "Fake Customer Support Numbers",
        body: `Scammers list fake phone numbers on platforms like Justdial and Sulekha, targeting people searching for 'Amazon customer care,' 'IRCTC helpline,' or 'Paytm support.' Once you call, they ask you to install a remote access app to 'fix your problem.' The moment you give screen access, they drain your UPI or net banking.\n\nAlways verify customer support numbers on the official website. If someone gives you a contact number that doesn't match the official site, run it through our scam number lookup first.`,
    },
];

// ── Red flags data ────────────────────────────────────────────────────────
const redFlagSections = [
    {
        icon: <AlertTriangle className="h-5 w-5" />,
        title: "Urgent Pressure Tactics",
        body: "The unknown caller tells you your account will be frozen in 30 minutes, your Aadhaar is linked to illegal transactions, or your SIM will be disconnected unless you act 'right now.' This artificial urgency is designed to stop you from thinking clearly. Real government agencies never make first contact via scam call. If someone threatens immediate arrest, it is a scam.",
    },
    {
        icon: <CreditCard className="h-5 w-5" />,
        title: "Requests for OTP or Passwords",
        body: "No legitimate bank, telecom provider, or government body will ever call you to ask for your OTP, UPI PIN, CVV, or Aadhaar OTP. This is the defining hallmark of OTP fraud. Anyone asking for these credentials on a phone call is a scammer no exceptions.",
    },
    {
        icon: <Globe className="h-5 w-5" />,
        title: "Unknown International Numbers",
        body: "Scammers use VoIP services to generate numbers that appear local (+91) or appear to be legitimate corporate numbers. If you receive a call from an unknown caller with an odd international prefix, never call back without first running a reverse phone lookup through our tool.",
    },
    {
        icon: <PhoneCall className="h-5 w-5" />,
        title: "Robocalls with Pre-recorded Messages",
        body: "If you pick up a fraud call and hear a pre-recorded message claiming to be from your bank or a government department, hang up immediately. TRAI has prohibited robocalls in India. Any automated scam call threatening legal action against you is entirely fraudulent. Report bogus numbers directly through our phone number checker.",
    },
];

const redFlagBullets = [
    "Creates urgent pressure 'act in 30 minutes or account frozen'",
    "Unknown caller asks for OTP, PIN, CVV, or password (OTP fraud)",
    "International number you don't recognise check with reverse phone lookup first",
    "Automated robocall message threatening legal action",
    "Asks you to download an app to 'fix' your account",
    "Claims to be from CBI, ED, or police classic bogus number scam",
    "High spam risk score on our phone number checker",
];

// ── FAQ data ──────────────────────────────────────────────────────────────
const faqs = [
    {
        q: "How do I check if a phone number is a scam in India?",
        a: "Enter the full phone number (with country code if international) into RakshaAI's free phone number checker. Results appear in under 5 seconds, showing a scam probability score, complaint count, and known fraud patterns.",
    },
    {
        q: "Is this phone number checker really free?",
        a: "Yes, 100% free. No login, no registration, no hidden charges. Use it as many times as you need.",
    },
    {
        q: "What is Wangiri fraud?",
        a: "Wangiri is a one-ring scam where you receive a missed call from an international number. If you call back, you're routed through premium-rate international lines and charged ₹150–₹800 per minute.",
    },
    {
        q: "Can scammers fake an Indian +91 number?",
        a: "Yes. Scammers use VoIP services to spoof local +91 numbers or legitimate corporate numbers. Always run a reverse phone lookup before trusting any unknown caller.",
    },
    {
        q: "What should I do after identifying a scam number?",
        a: "Do not call back. Report the number through RakshaAI's Report button on your result page. You can also file a complaint on the TRAI DND app or the National Cyber Crime portal (cybercrime.gov.in).",
    },
];

// ─────────────────────────────────────────────────────────────────────────────
export default function PhoneValidatorContent() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [openScam, setOpenScam] = useState<number | null>(0);

    return (
        <>
            {/* JSON-LD Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLd(webAppSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema) }}
            />

            <div className="space-y-16">

                {/* ── H1 Hero Section ───────────────────────────────────────── */}
                <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-indigo-950 border border-indigo-100 dark:border-indigo-900/40 p-8 sm:p-12 shadow-xl">
                    {/* Background blobs */}
                    <div className="pointer-events-none absolute inset-0 -z-10">
                        <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-300/10 dark:bg-purple-500/5 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-indigo-300/10 dark:bg-indigo-500/5 rounded-full blur-3xl" />
                    </div>

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/40 dark:to-purple-900/40 text-indigo-700 dark:text-indigo-300 text-xs font-semibold mb-6 border border-indigo-200 dark:border-indigo-800">
                        <Shield className="h-4 w-4 animate-pulse" />
                        India-focused scam intelligence · Free for consumers
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
                        Is This Phone Number a Scam?{" "}
                        <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Free Checker for India
                        </span>
                    </h2>

                    <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mb-8 leading-relaxed">
                        Received a call from an unknown caller? Before you call back or share any information, use our free phone number checker to find out who is really calling. RakshaAI's phone fraud detector instantly runs a reverse phone lookup against a database of over{" "}
                        <strong className="text-gray-900 dark:text-white">10 million reported scam numbers</strong>, flagged by real users across India.
                    </p>
                    <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mb-8 leading-relaxed">
                        Whether it's a suspicious unknown caller, a one-ring{" "}
                        <strong className="text-gray-900 dark:text-white">Wangiri fraud</strong> scam, a fake bank verification call, or an OTP fraud attempt our tool helps you verify phone number details and identify dangerous numbers before it's too late. Enter the number and get your result in under 5 seconds.
                    </p>

                    {/* Feature checklist */}
                    <div className="bg-white/80 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-indigo-100 dark:border-indigo-900/40 p-6 mb-8 max-w-xl">
                        <p className="text-sm font-bold text-indigo-700 dark:text-indigo-400 mb-4 flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4" />
                            What You Get Instantly:
                        </p>
                        <ul className="space-y-2.5">
                            {[
                                "Scam probability score (0–100)",
                                "User-reported complaint count",
                                "Known fraud call patterns linked to the number",
                                "Caller ID verification & carrier details",
                                "Completely free. No login required. Built for Indians.",
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                                    <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CTA shortcut */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold transition-all duration-200 shadow-lg hover:shadow-indigo-200 dark:hover:shadow-indigo-900/50 group"
                        >
                            <RotateCcw className="h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
                            Check a Phone Number Now
                        </Link>
                        <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
                            <Shield className="h-3.5 w-3.5 text-green-500" />
                            Your data is secure. We never store or share the phone numbers you check.
                        </p>
                    </div>

                    {/* Stats strip */}
                    <div className="mt-10 flex flex-wrap gap-3">
                        {[
                            { icon: <TrendingUp className="h-4 w-4" />, value: "500,000+", label: "numbers checked daily" },
                            { icon: <CheckCircle2 className="h-4 w-4" />, value: "99.1%", label: "accuracy" },
                            { icon: <Zap className="h-4 w-4" />, value: "5 secs", label: "results" },
                        ].map(({ icon, value, label }) => (
                            <div
                                key={label}
                                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm"
                            >
                                <span className="text-indigo-500">{icon}</span>
                                <span>
                                    <span className="font-extrabold text-gray-900 dark:text-white text-sm">{value}</span>{" "}
                                    <span className="text-xs text-gray-500 dark:text-gray-400">{label}</span>
                                </span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── H2: How to Check ──────────────────────────────────────────── */}
                <section aria-labelledby="how-to-check-heading">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-md flex-shrink-0">
                            <Phone className="h-5 w-5 text-white" />
                        </div>
                        <h2 id="how-to-check-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                            How to Check If a Phone Number is Fraud
                        </h2>
                    </div>

                    <p className="text-base text-gray-600 dark:text-gray-300 mb-8 max-w-3xl leading-relaxed">
                        Checking a phone number for scam activity takes just a few seconds, but it can save you from losing thousands of rupees. Here's how to use our free reverse phone lookup tool:
                    </p>

                    <div className="relative">
                        {/* connector line */}
                        <div className="absolute left-7 top-10 bottom-10 w-0.5 bg-gradient-to-b from-indigo-200 via-purple-200 to-pink-200 dark:from-indigo-800 dark:via-purple-800 dark:to-pink-800 hidden sm:block" />

                        <div className="space-y-4">
                            {steps.map((step, i) => (
                                <div key={step.n} className="relative flex gap-4 sm:gap-6">
                                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-extrabold text-lg shadow-lg z-10">
                                        {step.n}
                                    </div>
                                    <div className="flex-1 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5 shadow-sm hover:shadow-md hover:border-indigo-200 dark:hover:border-indigo-800 transition-all duration-200 group">
                                        <h3 className="font-bold text-gray-900 dark:text-white mb-1.5 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                            {step.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{step.body}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RakshaAI vs Truecaller callout */}
                    <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/60 dark:to-purple-950/60 border border-indigo-100 dark:border-indigo-900/40">
                        <div className="flex gap-3">
                            <Info className="h-5 w-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                Unlike Truecaller, which relies primarily on crowdsourced name tags, RakshaAI's phone number checker combines community reports with{" "}
                                <strong className="text-gray-900 dark:text-white">AI-based fraud pattern detection trained specifically on Indian scam tactics</strong>. This means we catch newly registered bogus number lines and SIM-swapped scam calls that other tools miss during a standard reverse number lookup.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ── H2: Common Scam Types ─────────────────────────────────────── */}
                <section aria-labelledby="scam-types-heading">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center shadow-md flex-shrink-0">
                            <AlertTriangle className="h-5 w-5 text-white" />
                        </div>
                        <h2 id="scam-types-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                            Common Phone Scam Types in India
                        </h2>
                    </div>

                    <div className="bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/40 rounded-2xl p-4 mb-8 flex gap-3">
                        <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-red-800 dark:text-red-300 leading-relaxed">
                            India's telecom fraud landscape has exploded. In 2024, over{" "}
                            <strong>₹21,000 crore was lost to mobile fraud calls</strong> and the scammers are getting smarter every month. Understand what you're dealing with before you dismiss that unknown caller.
                        </p>
                    </div>

                    <div className="space-y-3">
                        {scamTypes.map((scam, i) => (
                            <div key={scam.title} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden">
                                <button
                                    className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-colors"
                                    onClick={() => setOpenScam(openScam === i ? null : i)}
                                    aria-expanded={openScam === i}
                                >
                                    <div className="flex items-center gap-4 min-w-0">
                                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/40 dark:to-purple-900/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400 flex-shrink-0">
                                            {scam.icon}
                                        </div>
                                        <div className="min-w-0">
                                            <span className={`inline-block text-xs font-bold px-2 py-0.5 rounded-full mb-1 ${scam.tagColor}`}>
                                                {scam.tag}
                                            </span>
                                            <h3 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">{scam.title}</h3>
                                        </div>
                                    </div>
                                    <ChevronDown
                                        className={`h-5 w-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${openScam === i ? "rotate-180" : ""}`}
                                    />
                                </button>

                                {openScam === i && (
                                    <div className="px-5 pb-5 border-t border-gray-50 dark:border-gray-800">
                                        {scam.body.split("\n\n").map((para, pi) => (
                                            <p key={pi} className={`text-sm text-gray-600 dark:text-gray-300 leading-relaxed ${pi > 0 ? "mt-4" : "mt-4"}`}>
                                                {para}
                                            </p>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── H2: Red Flags ─────────────────────────────────────────────── */}
                <section aria-labelledby="red-flags-heading">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-500 to-red-500 flex items-center justify-center shadow-md flex-shrink-0">
                            <Shield className="h-5 w-5 text-white" />
                        </div>
                        <h2 id="red-flags-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                            Red Flags: Signs of a Scam Phone Call
                        </h2>
                    </div>

                    <p className="text-base text-gray-600 dark:text-gray-300 mb-8 max-w-3xl leading-relaxed">
                        You don't always have time to run a phone number lookup before picking up. Train yourself to spot these warning signs during a live fraud call each is a reason to hang up immediately.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                        {redFlagSections.map((flag) => (
                            <div
                                key={flag.title}
                                className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5 shadow-sm hover:shadow-md hover:border-yellow-200 dark:hover:border-yellow-800 transition-all duration-200 group"
                            >
                                <div className="flex items-start gap-3 mb-3">
                                    <div className="w-9 h-9 rounded-lg bg-yellow-50 dark:bg-yellow-900/30 flex items-center justify-center text-yellow-600 dark:text-yellow-400 flex-shrink-0 group-hover:scale-110 transition-transform">
                                        {flag.icon}
                                    </div>
                                    <h3 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">{flag.title}</h3>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{flag.body}</p>
                            </div>
                        ))}
                    </div>

                    {/* Quick Reference Card */}
                    <div className="rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 dark:from-gray-900 dark:to-gray-900 border border-red-100 dark:border-red-900/40 p-6">
                        <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                            <AlertTriangle className="h-5 w-5 text-red-500" />
                            Scam Call Red Flags Quick Reference
                        </h3>
                        <ul className="space-y-2.5">
                            {redFlagBullets.map((bullet) => (
                                <li key={bullet} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                                    <span className="w-5 h-5 rounded-full bg-red-100 dark:bg-red-900/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                    </span>
                                    {bullet}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* ── FAQ Section ───────────────────────────────────────────────── */}
                <section aria-labelledby="faq-heading">
                    <h2 id="faq-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-3">
                        {faqs.map((faq, i) => (
                            <details
                                key={faq.q}
                                open={openFaq === i}
                                onToggle={(e) => setOpenFaq((e.target as HTMLDetailsElement).open ? i : null)}
                                className="group"
                            >
                                <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                    <span className="text-sm font-semibold text-gray-900 dark:text-white pr-4">{faq.q}</span>
                                    <ChevronDown className="h-4 w-4 text-gray-400 flex-shrink-0 transition-transform duration-200 group-open:rotate-180" />
                                </summary>
                                <div className="px-4 pt-3 pb-4 text-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900 border-l border-r border-b border-gray-100 dark:border-gray-800 rounded-b-xl leading-relaxed">
                                    {faq.a}
                                </div>
                            </details>
                        ))}
                    </div>
                </section>

                {/* ── Final CTA ─────────────────────────────────────────────────── */}
                <section className="rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-700 p-8 sm:p-10 text-white text-center shadow-2xl">
                    <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-4">
                        <Phone className="h-7 w-7 text-white" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
                        Protect Yourself from Phone Fraud Today
                    </h2>
                    <p className="text-indigo-100 mb-6 text-sm sm:text-base max-w-xl mx-auto">
                        Join 500,000+ Indians who check suspicious numbers before falling victim to scams. Every 5 seconds you spend verifying a caller could save you ₹45,000.
                    </p>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white text-indigo-700 font-bold hover:bg-indigo-50 transition-colors shadow-lg hover:shadow-xl group"
                    >
                        <RotateCcw className="h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
                        Check a Phone Number · Free for consumers
                    </Link>
                    <p className="mt-4 text-indigo-200 text-xs">
                        🇮🇳 Protecting India from the ₹21,000 Cr mobile fraud epidemic · No login required
                    </p>
                </section>

            </div>
        </>
    );
}
