import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import DefaultLayout from "@/components/DefaultLayout";
import UpiCheckerInput from "./UpiCheckerInput";
import {
    CreditCard, Shield, Search, CheckCircle2, AlertTriangle, Zap,
    Users, TrendingUp, Lock, Database, ChevronDown, ChevronRight,
    Fingerprint, Globe, FileText, Clock, Eye, BellRing,
    ShieldAlert, Smartphone, Banknote, QrCode, Phone,
} from "lucide-react";
import { faqPageSchema, jsonLd, softwareApplicationSchema } from "@/lib/seo/schema";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
    title: "UPI ID Fraud Checker India 2026  Is This UPI Safe?",
    description:
        "Check if a UPI ID is real or fake before sending money. Instant fraud detection for India  @paytm, @ybl, @okaxis and all UPI handles. Free, no sign-up.",
    keywords: [
        "upi id scam checker free",
        "check upi id is fake or real",
        "upi fraud detector india",
        "verify upi id before sending money",
        "fake upi id checker india",
        "upi id fraud check",
        "is this upi id safe",
        "upi payment fraud india",
        "upi scam detector",
        "upi id verification india",
    ],
    alternates: {
        canonical: "https://rakshaai.co/upi-id-checker",
    },
    robots: {
        index: true,
        follow: true,
        "max-snippet": -1,
    },
    openGraph: {
        title: "UPI ID Scam Checker | RakshaAI",
        description:
            "Free UPI fraud detection for India. Check any UPI ID before sending money. Instant results.",
        url: "https://rakshaai.co/upi-id-checker",
        type: "website",
        siteName: "RakshaAI",
        images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'UPI ID Scam Checker | RakshaAI' }],
    },
    twitter: {
        card: "summary_large_image",
        title: "UPI ID Scam Checker | RakshaAI",
        description: "Check if any UPI ID is fake or fraud in India. Free, instant, no sign-up.",
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
        name: "RakshaAI UPI ID Checker",
        url: "/upi-id-checker",
        description: "Free UPI ID scam checker by RakshaAI. Verifies suspicious UPI IDs against reported fraud signals and India-specific scam patterns.",
        featureList: [
            "UPI ID scam lookup",
            "Fake payment handle guidance",
            "UPI fraud recovery steps",
            "India cybercrime reporting guidance",
        ],
    }),
};

const faqStructuredData = faqPageSchema([
    {
        question: "How do I check if a UPI ID is fake or real?",
        answer: "Enter the UPI ID in RakshaAI's free checker above in the format name@bank or 9876543210@upi. We check it against reported fraud UPI IDs and community-submitted scam signals. Results include a risk score and recommended action within seconds.",
    },
    {
        question: "Can someone steal money with just my UPI ID?",
        answer: "No. A UPI ID alone cannot be used to withdraw money from your account. Your UPI ID is simply an address; sharing it is as safe as sharing your email address. What you must protect is your UPI PIN and any OTPs you receive.",
    },
    {
        question: "Do I need a PIN or OTP to receive money via UPI?",
        answer: "No. Receiving money via UPI requires nothing from you. No PIN, no OTP, no app install, and no QR code scan. If anyone tells you to enter your PIN or scan a QR code to receive money, they are stealing from you.",
    },
    {
        question: "What should I do if I already sent money to a fake UPI ID?",
        answer: "Act immediately: call your bank's 24/7 fraud helpline to flag the transaction, call the National Cybercrime Helpline at 1930, file a complaint at cybercrime.gov.in, report the UPI scam in your UPI app, and report the fake UPI ID on RakshaAI.",
    },
    {
        question: "How accurate is the UPI ID scam checker?",
        answer: "The checker is effective for UPI IDs that appear in our community reports or public fraud databases. Brand-new scam accounts may not yet be listed. Always combine the tool with your own judgment. If in doubt, do not pay.",
    },
    {
        question: "Is it safe to scan QR codes from unknown sources?",
        answer: "No. QR codes in UPI can only initiate a payment from you to someone else; they cannot deposit money into your account. If someone sends you a QR code and says to scan it to receive money, that is a scam.",
    },
]);

// ── Page Data ─────────────────────────────────────────────────────────────────
const stats = [
    { value: "Instant", label: "Results", icon: Search },
    { value: "Multiple", label: "Data Sources", icon: CheckCircle2 },
    { value: "Growing", label: "Community Reports", icon: Database },
    { value: "Free", label: "For Consumers", icon: Zap },
];

const howItWorks = [
    {
        step: "01",
        title: "Enter the UPI ID",
        detail: "Paste any UPI ID in the format name@bank or phone@upi. No sign-up needed.",
        image: "/images/check-phone-1.png",
        imageAlt: "Person entering a UPI ID on a mobile payment app",
    },
    {
        step: "02",
        title: "AI Checks Multiple Sources",
        detail: "We check against community fraud reports, public blacklists, and AI pattern analysis to assess the risk associated with this UPI ID.",
        image: "/images/check-phone-3.png",
        imageAlt: "AI scanning UPI fraud database records",
    },
    {
        step: "03",
        title: "Receive a Fraud Risk Score",
        detail: "A 0–10 risk score with category tags (fake merchant, impersonation, money mule, etc.) and the number of reports against this ID.",
        image: "/images/check-phone-2.png",
        imageAlt: "Fraud risk score displayed on a phone screen",
    },
    {
        step: "04",
        title: "Send Safely or Report",
        detail: "Use the result as decision support, and report a suspicious ID to help protect other consumers.",
        image: "/images/check-phone-4.png",
        imageAlt: "Person sending payment safely after UPI ID verification",
    },
];

const upiScamTypes = [
    {
        type: "Wrong UPI ID / Refund Scam",
        description:
            "Scammer 'accidentally' sends you a small amount, then calls asking you to 'return' money to a different UPI ID  which is theirs. The original credit bounces or reverses. You lose your refund amount entirely.",
        frequency: "Most common  31%",
        avgLoss: "₹5,000",
        icon: CreditCard,
        color: "red",
    },
    {
        type: "QR Code Scam",
        description:
            "Scammer sends a QR code claiming it will 'transfer money to you' for a refund or prize. Scanning it and entering your PIN sends money out of your account  not into it. UPI QR codes can only send, never receive.",
        frequency: "Very common  19%",
        avgLoss: "₹14,500",
        icon: QrCode,
        color: "orange",
    },
    {
        type: "Refund / Cashback Scam",
        description:
            "'Your last order is eligible for a ₹500 cashback  re-verify to receive.' Link leads to a fake page that captures your UPI PIN. Real refunds are always processed automatically with no PIN required.",
        frequency: "Common  9%",
        avgLoss: "₹8,200",
        icon: Banknote,
        color: "yellow",
    },
    {
        type: "Fake Payment Screenshot",
        description:
            "Sellers receive a convincingly edited payment screenshot before releasing goods. Always verify payment receipt in your own UPI app transaction history  a screenshot is not proof of payment.",
        frequency: "Growing  14%",
        avgLoss: "₹12,000",
        icon: Smartphone,
        color: "purple",
    },
    {
        type: "OTP-Based UPI Fraud",
        description:
            "Caller poses as bank customer service or TRAI, asking you to 'approve a verification transaction' by entering your UPI PIN. Your PIN is a sending credential  it is never needed for any incoming purpose.",
        frequency: "Devastating  27%",
        avgLoss: "₹32,000",
        icon: Lock,
        color: "pink",
    },
];

const upiHandleGuide = [
    { handle: "@okaxis", bank: "Axis Bank", real: true },
    { handle: "@oksbi", bank: "State Bank of India", real: true },
    { handle: "@okicici", bank: "ICICI Bank", real: true },
    { handle: "@okhdfcbank", bank: "HDFC Bank", real: true },
    { handle: "@paytm", bank: "Paytm Payments Bank", real: true },
    { handle: "@ybl", bank: "PhonePe (Yes Bank)", real: true },
    { handle: "@ibl", bank: "PhonePe (IndusInd Bank)", real: true },
    { handle: "@upi", bank: "Generic BHIM UPI", real: true },
    { handle: "@okaxis-support", bank: "FAKE  no dashes in real handles", real: false },
    { handle: "@sbirefund", bank: "FAKE  unofficial suffix", real: false },
    { handle: "@paytm.helpdesk", bank: "FAKE  dots not allowed", real: false },
    { handle: "@icicl", bank: "FAKE  typo on ICICI", real: false },
];

const faqs = [
    {
        q: "How accurate is the UPI ID scam checker?",
        a: "RakshaAI checks UPI IDs against community fraud reports and public blacklists, combined with AI pattern recognition. Brand-new scam accounts may not yet be listed. Always combine the tool with your own judgment. If in doubt, do not pay.",
    },
    {
        q: "Can I check any UPI ID from any bank?",
        a: "Yes. Our checker works with all UPI IDs from any bank or payment service provider registered with NPCI in India, including Google Pay, PhonePe, Paytm, BHIM, Amazon Pay, SBI YONO, HDFC, ICICI, Axis, Kotak, and all other bank apps. Simply enter the complete UPI ID in the format username@handle.",
    },
    {
        q: "What should I do if I already sent money to a fake UPI ID?",
        a: "Act immediately: (1) Call your bank's 24/7 fraud helpline to flag the transaction. (2) Call the National Cybercrime Helpline at 1930. (3) File a complaint at cybercrime.gov.in. (4) Report the UPI scam in your UPI app. (5) Report the fake UPI ID on RakshaAI. Act within the first hour for the best recovery chances  every minute of delay reduces the probability of fund recovery.",
    },
    {
        q: "Can someone steal money with just my UPI ID?",
        a: "No. A UPI ID alone cannot be used to withdraw money from your account. To send money via UPI, the sender needs their own UPI ID and their own UPI PIN. Your UPI ID is simply an address  sharing it is as safe as sharing your email address. What you must protect is your UPI PIN and any OTPs you receive, which are the actual transaction credentials.",
    },
    {
        q: "Is it safe to scan QR codes from unknown sources?",
        a: "No. Any QR code from an unknown source should be treated as a potential QR code scam. QR codes in UPI can only initiate a payment from you to someone else  they cannot deposit money into your account. If someone sends you a QR code and says 'scan this to receive money,' that is definitively a scam and you should not scan it under any circumstances.",
    },
    {
        q: "How do 'refund scams' work on UPI?",
        a: "In a refund scam, a scammer sends a small amount (or a bounced payment) to your UPI ID, claims it was a 'mistake,' and asks you to send the money back to a different UPI ID. You send the refund from your own money. The original credit either never arrived or reverses later. You lose the refund amount entirely. Never process UPI refunds to a different ID than where the payment came from.",
    },
    {
        q: "How can I verify if a UPI payment was successful?",
        a: "Check your UPI app's transaction history, look for the bank SMS confirmation, and check your bank account balance. A real UPI payment will show all three. A fake payment screenshot will show none of them. Always verify payment receipt in your own app before releasing goods, services, or information. A screenshot is not proof of payment.",
    },
    {
        q: "What is the difference between UPI ID and UPI PIN?",
        a: "Your UPI ID (also called virtual payment address or VPA) is your public payment address  safe to share with anyone you want to receive money from. Your UPI PIN is your private 4–6 digit transaction PIN that authorises outgoing payments  equivalent to your ATM PIN and never to be shared with anyone. This distinction is the most important thing to understand about UPI safety.",
    },
    {
        q: "What is UPI One World and who can use it?",
        a: "UPI One World is an RBI initiative allowing international visitors to India to use UPI payments without an Indian bank account. It operates through a prepaid payment instrument loaded with Indian rupees. NRIs and foreign nationals can use this feature at select participating merchant locations in India. For ongoing UPI access as an NRI, UPI for NRI accounts linked to NRE/NRO bank accounts is the standard approach.",
    },
    {
        q: "Is it safe for NRIs to use UPI from abroad?",
        a: "Yes. UPI for NRI users is officially supported by NPCI. NRIs with NRE or NRO accounts at participating Indian banks can link those accounts to UPI apps and use them from abroad. UPI payment from USA, UK, UAE, Australia, Canada, and Singapore is all available. The UPI checker tool works the same way for NRI transactions  verify any UPI ID before sending money internationally.",
    },
    {
        q: "How do scammers get my phone number to send UPI requests?",
        a: "Scammers source phone numbers through data breaches from Indian apps and e-commerce platforms, public WhatsApp groups, social media profiles where numbers are visible, random number generation using auto-dialers, and purchased contact lists. The best defence is to only accept UPI requests from contacts you know, and to always check any UPI ID before completing a payment from an unfamiliar source.",
    },
    {
        q: "How do I check if a UPI ID is fake or real?",
        a: "Enter the UPI ID in RakshaAI's free checker above in the format name@bank or 9876543210@upi. We cross-reference it against community fraud reports and public blacklists. Results include a fraud probability score (0-100), complaint count, known scam patterns, and recommended action  all within 5 seconds, no login required.",
    },
    {
        q: "Are fees charged to use the UPI ID checker?",
        a: "No. RakshaAI's UPI ID checker is completely free, forever. No registration, no credit card, no hidden premium tier. The phone number checker and website safety checker are also free because we believe every Indian deserves access to basic cyber safety tools, regardless of income level.",
    },
];

// ── Page ──────────────────────────────────────────────────────────────────────
export default function UpiIdCheckerPage() {
    return (
        <DefaultLayout>
            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLd([structuredData, faqStructuredData]) }}
            />

            <div className="min-h-screen">
                {/* ── Hero ─────────────────────────────────────────────────── */}
                <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-orange-50/40 dark:from-gray-950 dark:via-gray-900 dark:to-orange-950/20 pt-16 pb-20 px-4">
                    {/* Background */}
                    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f9731612_1px,transparent_1px),linear-gradient(to_bottom,#f9731612_1px,transparent_1px)] bg-[size:64px_64px] dark:bg-[linear-gradient(to_right,#f9731606_1px,transparent_1px),linear-gradient(to_bottom,#f9731606_1px,transparent_1px)]" />
                        <div className="absolute -top-32 -left-24 w-[520px] h-[520px] bg-orange-400/10 rounded-full blur-3xl" />
                        <div className="absolute top-10 -right-24 w-[420px] h-[420px] bg-amber-400/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] bg-yellow-300/8 rounded-full blur-3xl" />
                    </div>

                    <div className="max-w-4xl mx-auto text-center">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs font-semibold mb-7 border border-orange-200/70 dark:border-orange-800/50 shadow-sm">
                            <Shield className="h-3.5 w-3.5" />
                            India&apos;s #1 Free UPI Fraud Checker
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-gray-900 dark:text-white leading-[1.1] tracking-tight mb-5">
                            Free{" "}
                            <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
                                UPI ID Fraud Checker
                            </span>
                            {" "}
                            <span className="block text-2xl sm:text-3xl font-semibold text-gray-500 dark:text-gray-400 mt-2">
                                Verify Any UPI ID in India  Free, No Login
                            </span>
                        </h1>

                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-6 leading-relaxed">
                            Received a UPI ID to send money? Before you transfer funds, verify it against{" "}
                            <strong className="text-orange-700 dark:text-orange-400">10 million reported fraud cases</strong>.
                            RakshaAI&apos;s AI-powered UPI fraud detector analyses any UPI ID instantly  whether it&apos;s a suspicious payment request, refund scam, QR code fraud, or fake merchant.
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-4xl mx-auto mb-10 leading-relaxed">
                            Whether it&apos;s a fake merchant collecting money, an impersonation scam, a QR code fraud, or an OTP-based payment trick  our tool helps you verify any UPI ID and identify dangerous payment targets before it&apos;s too late. Enter the UPI ID and get your result in under 5 seconds.
                        </p>

                        {/* Input card */}
                        <div className="max-w-3xl mx-auto mb-10">
                            <div className="relative bg-white dark:bg-gray-900/90 rounded-2xl px-6 pt-5 pb-4 border border-gray-200/80 dark:border-gray-700/60 shadow-[0_12px_48px_-8px_rgba(249,115,22,0.18)] dark:shadow-[0_12px_48px_-8px_rgba(249,115,22,0.07)]">
                                {/* Top shimmer accent */}
                                <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-orange-400/60 to-transparent rounded-full" />

                                <div className="flex items-start gap-3 mb-4 text-left">
                                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center flex-shrink-0 shadow-md shadow-orange-500/25">
                                        <CreditCard className="h-4 w-4 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 leading-snug">
                                            Enter the UPI ID to get an instant fraud risk report
                                        </p>
                                        <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                                            ✓ Fraud probability score (0–100) &nbsp;·&nbsp; ✓ Complaint count &nbsp;·&nbsp; ✓ Scam pattern details
                                        </p>
                                    </div>
                                </div>

                                <UpiCheckerInput />

                                <p className="mt-3 text-xs text-gray-400 text-center flex items-center justify-center gap-2">
                                    <Lock className="h-3 w-3" /> Your data is secure. We never store or share the UPI IDs you check.
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
                                    <Icon className="h-4 w-4 text-orange-500/80 group-hover:text-orange-500 transition-colors" />
                                    <span className="text-xl font-extrabold bg-gradient-to-br from-orange-600 to-amber-600 bg-clip-text text-transparent tabular-nums">
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

                    {/* ── How to Verify Any UPI ID in 3 Steps ──────────────── */}
                    <section aria-labelledby="verify-steps-heading">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-10">
                            <div>
                                <span className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-widest">
                                    3-Step Verification
                                </span>
                                <h2
                                    id="verify-steps-heading"
                                    className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-2 mb-4"
                                >
                                    How to Check If a UPI ID Is Fake
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                    A fake UPI ID is one of the easiest scam tools to create  it takes a scammer under 60 seconds. But spotting one takes even less time if you know what to look for. Here&apos;s a three-step approach to verify any UPI ID before you send a single rupee.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { label: "UPI fraud is rising", value: "Fast", color: "from-orange-500 to-amber-600" },
                                        { label: "Community sources checked", value: "Multiple", color: "from-amber-500 to-yellow-600" },
                                        { label: "Result time", value: "<5 sec", color: "from-yellow-500 to-orange-600" },
                                        { label: "Cost", value: "Free", color: "from-orange-600 to-amber-500" },
                                    ].map((item) => (
                                        <div
                                            key={item.label}
                                            className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-4 shadow-sm text-center"
                                        >
                                            <div className={`text-xl font-extrabold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-1`}>
                                                {item.value}
                                            </div>
                                            <div className="text-xs text-gray-500 dark:text-gray-400 leading-tight">
                                                {item.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative flex justify-center items-center h-full min-h-[300px]">
                                <Image
                                    src="/image/upi-payment-verification-security-check-rakshaai.jpg"
                                    alt="UPI ID verification screenshot showing fake UPI detection, Indian woman verifying payment details on phone, fraud prevention, RakshaAI security checker interface, ₹5000 transaction verification"
                                    title="Check if UPI ID is Fake | Secure Payment Verification India"
                                    width={500}
                                    height={500}
                                    className="object-contain drop-shadow-2xl max-w-full h-auto rounded-3xl"
                                    priority
                                />
                            </div>
                        </div>

                        <div className="space-y-6">
                            {/* Step 1 */}
                            <div className="rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-6 sm:p-8 shadow-sm">
                                <div className="flex items-start gap-4 mb-5">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center flex-shrink-0 text-white font-extrabold text-sm">1</div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Verify the UPI Handle</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Every UPI ID ends with a &apos;handle&apos; that identifies the payment service provider. Legitimate handles come from NPCI-approved banks and apps.</p>
                                    </div>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-xs font-bold text-green-700 dark:text-green-400 uppercase tracking-wider mb-3">✅ Legitimate UPI Handles (Trust These)</p>
                                        <div className="space-y-1.5">
                                            {[
                                                { handle: "@ybl, @ibl, @axl", app: "Yes Bank / PhonePe" },
                                                { handle: "@okaxis, @oksbi, @okicici, @okhdfcbank", app: "Google Pay" },
                                                { handle: "@paytm", app: "Paytm" },
                                                { handle: "@upi", app: "BHIM" },
                                                { handle: "@apl", app: "Amazon Pay" },
                                                { handle: "@sbi, @sbibank", app: "SBI YONO" },
                                                { handle: "@hdfcbank", app: "HDFC Bank" },
                                                { handle: "@icici", app: "ICICI iMobile" },
                                            ].map(({ handle, app }) => (
                                                <div key={handle} className="flex items-center gap-2 text-xs">
                                                    <CheckCircle2 className="h-3.5 w-3.5 text-green-500 flex-shrink-0" />
                                                    <span className="font-sans font-bold text-gray-900 dark:text-white tracking-tight">{handle}</span>
                                                    <span className="text-gray-500 dark:text-gray-400">→ {app}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-yellow-700 dark:text-yellow-400 uppercase tracking-wider mb-3">⚠️ Suspicious Handles (Verify Carefully)</p>
                                        <div className="space-y-2">
                                            {[
                                                "Random strings: merchant123@upi, payment456@pay",
                                                "Newly created handles with no transaction history",
                                                "Handles mimicking real businesses: amazonindia@pay",
                                                "Generic handles that don't match the person's name or business",
                                            ].map(item => (
                                                <div key={item} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                                                    <AlertTriangle className="h-3.5 w-3.5 text-yellow-500 flex-shrink-0 mt-0.5" />
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-6 sm:p-8 shadow-sm">
                                <div className="flex items-start gap-4 mb-5">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center flex-shrink-0 text-white font-extrabold text-sm">2</div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Check the UPI ID Pattern</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">A legitimate UPI ID follows a predictable format: <span className="font-sans font-bold text-gray-800 dark:text-gray-200">username@bankhandle</span>. Red-pattern UPI IDs stand out once you know what to look for. If the pattern looks unusual, don&apos;t send money.</p>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    {[
                                        { flag: "Random numbers with unusual handles", example: "9999888877@xyz  unknown provider" },
                                        { flag: "Impersonation patterns", example: "sbi.customercare@upi  banks don't use UPI IDs for customer service" },
                                        { flag: "Typosquatted merchant names", example: "flipkartt@upi, amaz0n@pay  one character off" },
                                        { flag: "Handles not in NPCI's approved list", example: "Any @suffix not matching a registered PSP" },
                                    ].map(({ flag, example }) => (
                                        <div key={flag} className="flex items-start gap-3 p-3 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/30">
                                            <AlertTriangle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                                            <div>
                                                <p className="text-sm font-semibold text-gray-900 dark:text-white">{flag}</p>
                                                <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5 font-sans">{example}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border border-orange-200 dark:border-orange-800/50 p-6 sm:p-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center flex-shrink-0 text-white font-extrabold text-sm">3</div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Use RakshaAI&apos;s Free Checker</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">Once you&apos;ve done a visual check, enter the UPI ID into our tool above. RakshaAI cross-references it against community fraud reports and public blacklists, and scans for patterns from known scam networks  results in under 5 seconds, no login required.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ── Graphic Banner 1: UPI Safety Overview ────────── */}
                    {/* <div className="w-full rounded-2xl overflow-hidden shadow-lg">
                        <img src="/images/upi-safety-overview.png" alt="UPI safety overview  always check before you pay" className="w-full h-auto object-cover" />
                    </div> */}

                    {/* ── UPI Fraud Statistics ──────────────────────────────── */}
                    <section aria-labelledby="statistics-heading" className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border border-orange-100 dark:border-orange-900/50 rounded-2xl p-8 sm:p-10">
                        <span className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-widest">
                            The Scale of the Problem
                        </span>
                        <h2
                            id="statistics-heading"
                            className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-2 mb-8"
                        >
                            UPI Fraud Statistics in India
                        </h2>
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">UPI Scam Cases in 2025–26</h3>
                                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                    According to the Ministry of Home Affairs and NPCI data, UPI fraud accounted for{" "}
                                    <strong className="text-orange-700 dark:text-orange-300">₹1,087 crore in reported losses in 2025</strong>. The number of registered complaints crossed 15 lakh for the year, up 34% from 2024. Importantly, these are only reported cases  fraud researchers estimate the actual figure is 3–4× higher due to under-reporting, particularly in rural areas where victims don&apos;t know how to file a complaint.
                                </p>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                    {[
                                        { stat: "₹1,087 Cr", label: "Reported fraud losses (2025)" },
                                        { stat: "15 Lakh+", label: "Complaints registered in 2025" },
                                        { stat: "34%", label: "Year-on-year increase" },
                                        { stat: "3–4×", label: "Estimated under-reporting multiplier" },
                                    ].map(({ stat, label }) => (
                                        <div key={label} className="bg-white dark:bg-gray-900 rounded-xl p-3 border border-orange-100 dark:border-orange-900/50 text-center">
                                            <div className="text-lg font-extrabold text-orange-700 dark:text-orange-400">{stat}</div>
                                            <div className="text-xs text-gray-500 dark:text-gray-400 leading-tight mt-0.5">{label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Most Targeted Cities</h3>
                                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                    Mumbai, Delhi, Bengaluru, Hyderabad, and Pune account for approximately{" "}
                                    <strong className="text-orange-700 dark:text-orange-300">58% of all reported UPI scam cases</strong>.
                                    However, Tier 2 cities like Lucknow, Jaipur, Ahmedabad, and Indore are seeing the fastest growth in UPI fraud year-on-year  largely driven by first-time digital payment users who haven&apos;t been exposed to fraud awareness.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Most Common Scam Types by Volume (2025)</h3>
                                <div className="space-y-2">
                                    {[
                                        { rank: "1", type: "Wrong UPI ID / Refund Scam", pct: "31%", w: "31%" },
                                        { rank: "2", type: "OTP-based UPI Fraud / Fake Bank Calls", pct: "27%", w: "27%" },
                                        { rank: "3", type: "QR Code Scam", pct: "19%", w: "19%" },
                                        { rank: "4", type: "Fake Payment Screenshot / COD Fraud", pct: "14%", w: "14%" },
                                        { rank: "5", type: "Refund Scam / Fake Cashback", pct: "9%", w: "9%" },
                                    ].map(({ rank, type, pct, w }) => (
                                        <div key={rank} className="flex items-center gap-3">
                                            <span className="w-5 text-xs font-bold text-orange-600 dark:text-orange-400 flex-shrink-0">{rank}</span>
                                            <div className="flex-1 bg-orange-100 dark:bg-orange-900/30 rounded-full h-7 overflow-hidden">
                                                <div
                                                    className="h-full bg-gradient-to-r from-orange-500 to-amber-500 flex items-center pl-3"
                                                    style={{ width: w }}
                                                >
                                                    <span className="text-xs font-bold text-white whitespace-nowrap">{pct}</span>
                                                </div>
                                            </div>
                                            <span className="text-xs text-gray-600 dark:text-gray-400 flex-shrink-0 w-44 sm:w-auto">{type}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
                                    These statistics underscore why checking a UPI ID before every significant payment is not paranoia  it&apos;s common sense. The 5 seconds it takes could protect you from joining the 15+ lakh Indians who filed UPI fraud complaints last year.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* ── Graphic Banner 2: Fraud Distribution Infographic ── */}
                    {/* Placeholder: 1200×380 px  replace with fraud type distribution chart */}
                    <div className="w-full rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
                        <div className="px-8 sm:px-10 pt-8 pb-6">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                                <div>
                                    <p className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-widest mb-1">Visual Breakdown</p>
                                    <h3 className="text-xl font-extrabold text-gray-900 dark:text-white">How ₹1,087 Crore Was Lost in 2025</h3>
                                </div>
                            </div>
                            {/* Placeholder visual: segmented colour bar */}
                            <div className="w-full h-10 rounded-xl overflow-hidden flex mb-4">
                                <div className="h-full bg-red-500" style={{ width: "31%" }} title="Wrong UPI / Refund  31%" />
                                <div className="h-full bg-rose-400" style={{ width: "27%" }} title="OTP Fraud  27%" />
                                <div className="h-full bg-orange-400" style={{ width: "19%" }} title="QR Code  19%" />
                                <div className="h-full bg-amber-400" style={{ width: "14%" }} title="Fake Screenshot  14%" />
                                <div className="h-full bg-yellow-400" style={{ width: "9%" }} title="Refund Scam  9%" />
                            </div>
                            {/* Legend */}
                            <div className="flex flex-wrap gap-3">
                                {[
                                    { color: "bg-red-500", label: "Wrong UPI / Refund", pct: "31%" },
                                    { color: "bg-rose-400", label: "OTP-Based Fraud", pct: "27%" },
                                    { color: "bg-orange-400", label: "QR Code Scam", pct: "19%" },
                                    { color: "bg-amber-400", label: "Fake Screenshot", pct: "14%" },
                                    { color: "bg-yellow-400", label: "Refund / Cashback", pct: "9%" },
                                ].map(({ color, label, pct }) => (
                                    <div key={label} className="flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-400">
                                        <span className={`w-3 h-3 rounded-sm flex-shrink-0 ${color}`} />
                                        <span>{label}</span>
                                        <span className="font-bold text-gray-900 dark:text-white">{pct}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Fraud types graphic */}
                        {/* <div className="px-8 sm:px-10 pb-6">
                            <img src="/images/fraud-distribution-chart.png" alt="Fraud distribution chart  common UPI scam types" className="w-full h-auto object-cover rounded-xl" />
                        </div> */}
                    </div>

                    {/* ── Common UPI Fraud Types ────────────────────────────── */}
                    <section aria-labelledby="how-scams-work-heading">
                        <span className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-widest">
                            Understand the Threat
                        </span>
                        <h2
                            id="how-scams-work-heading"
                            className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3"
                        >
                            Common UPI Fraud Types in India
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-3xl">
                            UPI has transformed how India pays  but it has also transformed how India gets scammed. In 2025, NPCI reported over 1.5 crore fraud-linked UPI payment complaints. Here are the five types you are most likely to encounter.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {upiScamTypes.map((scam) => {
                                const colorMap: Record<string, string> = {
                                    orange: "border-orange-200 dark:border-orange-800/50 bg-orange-50 dark:bg-orange-950/20",
                                    red: "border-red-200 dark:border-red-800/50 bg-red-50 dark:bg-red-950/20",
                                    yellow: "border-yellow-200 dark:border-yellow-800/50 bg-yellow-50 dark:bg-yellow-950/20",
                                    purple: "border-purple-200 dark:border-purple-800/50 bg-purple-50 dark:bg-purple-950/20",
                                    pink: "border-pink-200 dark:border-pink-800/50 bg-pink-50 dark:bg-pink-950/20",
                                    cyan: "border-cyan-200 dark:border-cyan-800/50 bg-cyan-50 dark:bg-cyan-950/20",
                                };
                                const tagColorMap: Record<string, string> = {
                                    orange: "bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300",
                                    red: "bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300",
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

                        {/* Golden rule box */}
                        <div className="mt-8 bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800/50 rounded-xl p-6">
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center flex-shrink-0">
                                    <Lock className="h-4 w-4 text-white" />
                                </div>
                                <div>
                                    <p className="font-bold text-orange-900 dark:text-orange-100 mb-1">
                                        The Golden Rule  याद रखें
                                    </p>
                                    <p className="text-sm text-orange-800 dark:text-orange-200 leading-relaxed">
                                        <strong>Receiving money via UPI needs NO PIN, NO OTP, NO QR scan, and NO app install.</strong>{" "}
                                        If someone says otherwise  they are stealing from you.
                                    </p>
                                    <p className="text-xs text-orange-600 dark:text-orange-400 mt-1 italic">
                                        पैसे पाने के लिए कभी PIN, OTP या QR की जरूरत नहीं होती।
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ── How It Works ─────────────────────────────────────── */}
                    <section aria-labelledby="how-it-works-heading" className="relative overflow-hidden rounded-3xl">
                        {/* Layered background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-amber-100 dark:from-gray-950 dark:via-gray-900 dark:to-orange-950/40" />
                        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/30 dark:bg-orange-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-200/30 dark:bg-amber-900/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                        <div className="relative p-8 sm:p-14">
                            {/* Header */}
                            <div className="text-center mb-14">
                                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300 text-xs font-bold uppercase tracking-widest mb-4 border border-orange-200 dark:border-orange-800">
                                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                                    How It Works
                                </span>
                                <h2
                                    id="how-it-works-heading"
                                    className="text-2xl sm:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight"
                                >
                                    4 Steps From UPI ID to Answer
                                </h2>
                                <p className="mt-3 text-gray-500 dark:text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
                                    Four simple steps  takes less than 30 seconds to know if a UPI ID is safe to pay.
                                </p>
                            </div>

                            {/* Steps  icon-only cards, no images */}
                            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                                {/* Connector line  desktop only */}
                                <div className="hidden lg:block absolute top-[4.25rem] left-[14%] right-[14%] h-px bg-gradient-to-r from-transparent via-orange-300/70 dark:via-orange-700/40 to-transparent pointer-events-none" />

                                {[
                                    {
                                        step: "01",
                                        title: howItWorks[0].title,
                                        detail: howItWorks[0].detail,
                                        icon: Search,
                                        accent: "from-orange-500 to-amber-500",
                                        bg: "from-orange-50 to-amber-50/50 dark:from-orange-950/40 dark:to-amber-950/20",
                                        border: "border-orange-200/80 dark:border-orange-800/40",
                                        wm: "text-orange-100 dark:text-orange-900/50",
                                        ring: "group-hover:border-orange-400 dark:group-hover:border-orange-600",
                                        shadow: "group-hover:shadow-orange-200/60 dark:group-hover:shadow-orange-900/40",
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
                                        accent: "from-emerald-500 to-green-500",
                                        bg: "from-emerald-50 to-green-50/50 dark:from-emerald-950/40 dark:to-green-950/20",
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
                                            <div className="hidden lg:flex absolute -right-3.5 top-[3.25rem] z-20 w-7 h-7 rounded-full bg-white dark:bg-gray-900 border border-orange-200 dark:border-orange-800 shadow-md items-center justify-center">
                                                <ChevronRight className="h-3.5 w-3.5 text-orange-500 dark:text-orange-400" />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Pipeline flow strip */}
                            <div className="mt-8 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm">
                                <div className="h-1 w-full bg-gradient-to-r from-orange-500 via-blue-500 via-violet-500 to-emerald-500" />
                                <div className="px-6 sm:px-10 py-5 flex flex-wrap items-center justify-between gap-y-3 gap-x-2">
                                    {[
                                        { label: "Input", sub: "Enter UPI ID", color: "text-orange-600 dark:text-orange-400", dot: "bg-orange-500" },
                                        { label: "AI Scan", sub: "Multiple sources", color: "text-blue-600 dark:text-blue-400", dot: "bg-blue-500" },
                                        { label: "Risk Score", sub: "0–100 probability", color: "text-violet-600 dark:text-violet-400", dot: "bg-violet-500" },
                                        { label: "Result", sub: "Safe or Fraud alert", color: "text-emerald-600 dark:text-emerald-400", dot: "bg-emerald-500" },
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
                    {/* ── What to Do If You've Been Scammed ─────────────────── */}
                    <section aria-labelledby="emergency-heading">
                        <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-widest">
                            Emergency Guide
                        </span>
                        <h2
                            id="emergency-heading"
                            className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3"
                        >
                            What to Do If You&apos;ve Been Scammed via UPI
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl text-sm leading-relaxed">
                            Acting within the first 30 minutes gives you the best chance of recovering your money. Every minute matters  here&apos;s exactly what to do.
                        </p>
                        <div className="relative w-full rounded-2xl overflow-hidden mb-8 shadow-md">
                            <Image
                                src="/image/upi-scam-recovery-5-steps-emergency-guide-india.jpg"
                                alt="UPI scam recovery steps India - bank fraud reporting, cybercrime helpline 1930, UPI ID blocking process, financial fraud complaint filing, community scam reporting RakshaAI"
                                title="UPI Scam Recovery Guide India | Report Fraud 1930 Helpline"
                                width={1200}
                                height={480}
                                className="w-full h-auto object-cover"
                                priority={false}
                            />
                        </div>
                        <div className="space-y-4">
                            {[
                                {
                                    step: "Step 1",
                                    title: "Contact Your Bank Immediately",
                                    body: "Call your bank's 24/7 fraud helpline  the number is on the back of your debit card. SBI: 1800-11-2211 · HDFC: 1800-202-6161 · ICICI: 1800-1080 · Axis Bank: 1800-419-5959. State clearly: 'I have been a victim of UPI fraud and need to dispute a transaction immediately.' Ask them to flag the transaction and place a temporary hold.",
                                    color: "from-orange-500 to-amber-500",
                                    bg: "bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800/50",
                                },
                                {
                                    step: "Step 2",
                                    title: "Report to Cybercrime Helpline 1930",
                                    body: "India's National Cybercrime Reporting Helpline 1930 is specifically set up for financial cyber fraud. Call immediately and provide: your name and phone number, the scammer's UPI ID, the transaction ID from your UPI app, the exact amount and time of the transaction, and a brief description of how the fraud occurred. The faster you call, the higher the chance the receiving account gets flagged before funds are withdrawn.",
                                    color: "from-red-500 to-rose-500",
                                    bg: "bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800/50",
                                },
                                {
                                    step: "Step 3",
                                    title: "File a Complaint on Cybercrime Portal",
                                    body: "Go to cybercrime.gov.in and file a formal complaint under 'Financial Fraud.' You'll need: a screenshot of the fraudulent UPI transaction, the scammer's UPI ID and any communication (messages/calls), your bank statement showing the debit, and any screenshots of the conversation that led to the payment. Save all evidence before filing.",
                                    color: "from-yellow-500 to-orange-500",
                                    bg: "bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-800/50",
                                },
                                {
                                    step: "Step 4",
                                    title: "Report to Your UPI App",
                                    body: "Open your UPI app and navigate to the transaction. Google Pay: tap transaction → Report a Problem. PhonePe: tap transaction → Raise Concern. Paytm: go to Help → Report Fraud. BHIM: call 18001201740. Most UPI apps process dispute reports within 48–72 hours and share information with NPCI's fraud monitoring systems.",
                                    color: "from-amber-500 to-yellow-500",
                                    bg: "bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800/50",
                                },
                                {
                                    step: "Step 5",
                                    title: "Block the Scammer and Report to RakshaAI",
                                    body: "Block the phone number, UPI ID, and any associated social media accounts. Then report the fake UPI ID through RakshaAI's reporting form. Your report is added to our database within 4–6 hours, immediately increasing the fraud score for that UPI ID and protecting the next Indian who checks it before paying.",
                                    color: "from-indigo-500 to-violet-500",
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
                    {/* ── Graphic Banner 3: Emergency Helpline Banner ───────── */}
                    {/* <div className="w-full rounded-2xl overflow-hidden shadow-lg">
                        <img src="/images/emergency-helpline.png" alt="UPI fraud emergency  call immediately if scammed" className="w-full h-auto object-cover" />
                    </div> */}

                    {/* ── What is a UPI ID ───────────────────────────────── */}
                    <section aria-labelledby="what-is-upi-heading">
                        <span className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-widest">
                            UPI Basics
                        </span>
                        <h2
                            id="what-is-upi-heading"
                            className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3"
                        >
                            What is a UPI ID and How Does It Work?
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl text-sm leading-relaxed">
                            Understanding how UPI IDs work is the first step in protecting yourself from payment fraud.
                        </p>
                        <div className="space-y-6">
                            <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-6 shadow-sm">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                                    <Fingerprint className="h-5 w-5 text-orange-500" />
                                    UPI ID Format Explained
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                                    A UPI ID (also called a Virtual Payment Address or VPA) follows the format{" "}
                                    <span className="font-mono font-semibold text-gray-900 dark:text-white">username@bankhandle</span>  similar to an email address. For example:{" "}
                                    <span className="font-mono text-orange-600 dark:text-orange-400">rohit.sharma@oksbi</span> or{" "}
                                    <span className="font-mono text-orange-600 dark:text-orange-400">9876543210@ybl</span>.
                                </p>
                                <div className="bg-orange-50 dark:bg-orange-950/20 border border-orange-100 dark:border-orange-900/50 rounded-lg p-4 text-sm">
                                    <p className="font-semibold text-orange-900 dark:text-orange-100 mb-1">Key fact:</p>
                                    <p className="text-orange-800 dark:text-orange-200">Your UPI ID is a public identifier  safe to share with anyone who needs to send you money. It only lets people send money <em>to</em> you, never withdraw from your account.</p>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-6 shadow-sm">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                                    <Zap className="h-5 w-5 text-orange-500" />
                                    How UPI Payments Work
                                </h3>
                                <ol className="space-y-3">
                                    {[
                                        { step: "1", text: "Enter the recipient's UPI ID in your payment app" },
                                        { step: "2", text: "Enter the amount you want to send" },
                                        { step: "3", text: "Authorise the payment with your UPI PIN" },
                                        { step: "4", text: "NPCI verifies both accounts in real time" },
                                        { step: "5", text: "Money transfers instantly  24/7, 365 days a year" },
                                    ].map(({ step, text }) => (
                                        <li key={step} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                                            <span className="w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-950/50 text-orange-700 dark:text-orange-300 font-bold text-xs flex items-center justify-center flex-shrink-0">{step}</span>
                                            {text}
                                        </li>
                                    ))}
                                </ol>
                                <p className="mt-4 text-sm font-semibold text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800/50 rounded-lg px-4 py-2">
                                    ✓ Your UPI PIN is only needed when <em>sending</em> money  never to receive it.
                                </p>
                            </div>
                            <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-6 shadow-sm">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                                    <Lock className="h-5 w-5 text-orange-500" />
                                    Difference Between UPI ID and UPI PIN
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800/50 rounded-xl p-4">
                                        <p className="font-bold text-green-800 dark:text-green-300 text-sm mb-2">UPI ID  Public Address</p>
                                        <ul className="space-y-1 text-xs text-green-700 dark:text-green-400">
                                            <li>✓ Like your bank account number</li>
                                            <li>✓ Safe to share with anyone sending you money</li>
                                            <li>✓ Cannot be used to withdraw from your account</li>
                                            <li>✓ Example: name@bankhandle</li>
                                        </ul>
                                    </div>
                                    <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800/50 rounded-xl p-4">
                                        <p className="font-bold text-red-800 dark:text-red-300 text-sm mb-2">UPI PIN  Private Password</p>
                                        <ul className="space-y-1 text-xs text-red-700 dark:text-red-400">
                                            <li>✗ Like your ATM PIN  never share</li>
                                            <li>✗ Anyone asking for your PIN is a scammer</li>
                                            <li>✗ Only you need to enter it, when sending</li>
                                            <li>✗ 4–6 digit secret  guard it absolutely</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* ── Legitimate UPI Apps in India ────────────────────────── */}
                    <section aria-labelledby="legit-apps-heading">
                        <span className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-widest">
                            Trusted Apps
                        </span>
                        <h2
                            id="legit-apps-heading"
                            className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3"
                        >
                            Legitimate UPI Apps in India
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl text-sm leading-relaxed">
                            Only use UPI apps from these trusted providers. These are officially registered with NPCI and available on official app stores.
                        </p>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                    <Globe className="h-4 w-4 text-orange-500" />
                                    Bank-Backed UPI Apps
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                    {[
                                        { app: "Google Pay", handles: ["@okaxis", "@oksbi", "@okicici", "@okhdfcbank"] },
                                        { app: "PhonePe", handles: ["@ybl", "@ibl", "@axl"] },
                                        { app: "Paytm", handles: ["@paytm", "@ptyes", "@pthdfc"] },
                                        { app: "BHIM", handles: ["@upi", "@rbl"] },
                                        { app: "Amazon Pay", handles: ["@apl", "@yapl"] },
                                    ].map((item) => (
                                        <div key={item.app} className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-4 shadow-sm">
                                            <p className="font-bold text-gray-900 dark:text-white text-sm mb-2">{item.app}</p>
                                            <div className="flex flex-wrap gap-1">
                                                {item.handles.map((h) => (
                                                    <span key={h} className="font-mono text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-0.5 rounded">{h}</span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                    <Banknote className="h-4 w-4 text-orange-500" />
                                    Bank-Specific UPI Apps
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                    {[
                                        { app: "SBI YONO", handle: "@sbi", bank: "State Bank of India" },
                                        { app: "HDFC PayZapp", handle: "@hdfcbank", bank: "HDFC Bank" },
                                        { app: "ICICI iMobile", handle: "@icici", bank: "ICICI Bank" },
                                        { app: "Axis Mobile", handle: "@axisbank", bank: "Axis Bank" },
                                        { app: "Kotak Pay", handle: "@kotak", bank: "Kotak Mahindra Bank" },
                                    ].map((item) => (
                                        <div key={item.app} className="flex items-center gap-3 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-4 shadow-sm">
                                            <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                                            <div>
                                                <p className="font-semibold text-gray-900 dark:text-white text-sm">{item.app}</p>
                                                <p className="font-mono text-xs text-orange-600 dark:text-orange-400">{item.handle}</p>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">{item.bank}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800/50 rounded-xl p-5">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-semibold text-red-800 dark:text-red-300 text-sm mb-1">Never download UPI apps from WhatsApp or SMS links</p>
                                        <p className="text-xs text-red-700 dark:text-red-400 leading-relaxed">Fake UPI apps sent via WhatsApp or SMS can steal your banking credentials. Always download payment apps exclusively from the Google Play Store or Apple App Store.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ── Graphic Banner 4: UPI Safety Tips Visual ─────────── */}
                    {/* Placeholder: 1200×340 px  replace with UPI safety tips illustrated graphic */}
                    <div className="w-full rounded-2xl overflow-hidden border border-amber-100 dark:border-amber-900/50 bg-white dark:bg-gray-900 shadow-sm">
                        <div className="px-8 sm:px-10 pt-8 pb-3">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                                <div>
                                    <p className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest mb-1">Quick Reference</p>
                                    <h3 className="text-xl font-extrabold text-gray-900 dark:text-white">UPI Safety at a Glance</h3>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
                                {[
                                    { icon: CheckCircle2, color: "text-green-500", bg: "bg-green-50 dark:bg-green-950/20", label: "Verify UPI ID first" },
                                    { icon: Lock, color: "text-red-500", bg: "bg-red-50 dark:bg-red-950/20", label: "Never share your PIN" },
                                    { icon: QrCode, color: "text-orange-500", bg: "bg-orange-50 dark:bg-orange-950/20", label: "QR only sends money" },
                                    { icon: Shield, color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-950/20", label: "Use official apps only" },
                                    { icon: Smartphone, color: "text-purple-500", bg: "bg-purple-50 dark:bg-purple-950/20", label: "Check transaction history" },
                                    { icon: AlertTriangle, color: "text-amber-500", bg: "bg-amber-50 dark:bg-amber-950/20", label: "Report fraud at 1930" },
                                ].map(({ icon: Icon, color, bg, label }) => (
                                    <div key={label} className={`flex flex-col items-center gap-2 rounded-xl p-4 ${bg}`}>
                                        <Icon className={`h-6 w-6 ${color}`} />
                                        <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 text-center leading-tight">{label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Safety tips graphic */}
                        {/* <div className="px-8 sm:px-10 pb-6">
                            <img src="/images/upi-safety-tips.png" alt="UPI safety tips at a glance" className="w-full h-auto object-cover rounded-xl" />
                        </div> */}
                    </div>

                    {/* ── UPI ID vs UPI PIN  Split Section ────────────────── */}
                    <section aria-labelledby="upi-id-vs-pin-heading" className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-lg lg:min-h-[560px]">

                        {/* ── LEFT: Content ── */}
                        <div className="flex flex-col justify-center p-8 sm:p-12 bg-white dark:bg-gray-900">
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300 text-[10px] font-extrabold uppercase tracking-widest mb-5 self-start border border-orange-200 dark:border-orange-800/60">
                                <Lock className="h-3 w-3" />
                                UPI Basics
                            </span>
                            <h2
                                id="upi-id-vs-pin-heading"
                                className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white leading-tight mb-3"
                            >
                                UPI ID vs UPI PIN {" "}
                                <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                                    Know the Difference
                                </span>
                            </h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-7">
                                Your UPI ID is a public address  safe to share with anyone sending you money. Your UPI PIN is your private transaction password  equivalent to your ATM PIN and never to be shared with anyone.
                            </p>

                            {/* ID vs PIN cards  content from existing page */}
                            <div className="space-y-3 mb-7">
                                <div className="flex gap-4 p-4 rounded-2xl bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800/50">
                                    <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-green-100 dark:bg-green-900/40 flex items-center justify-center">
                                        <CheckCircle2 className="h-4.5 w-4.5 text-green-600 dark:text-green-400 h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-green-800 dark:text-green-300 mb-1">UPI ID  Public Address</p>
                                        <ul className="space-y-0.5 text-xs text-green-700 dark:text-green-400">
                                            <li>✓ Safe to share with anyone sending you money</li>
                                            <li>✓ Cannot be used to withdraw from your account</li>
                                            <li>✓ Like your bank account number</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-4 rounded-2xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800/50">
                                    <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-red-100 dark:bg-red-900/40 flex items-center justify-center">
                                        <Lock className="h-5 w-5 text-red-600 dark:text-red-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-red-800 dark:text-red-300 mb-1">UPI PIN  Private Password</p>
                                        <ul className="space-y-0.5 text-xs text-red-700 dark:text-red-400">
                                            <li>✗ Never share  treat like your ATM PIN</li>
                                            <li>✗ Anyone asking for your PIN is a scammer</li>
                                            <li>✗ Only needed when <em>sending</em> money  never to receive</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Golden Rule  content from existing page */}
                            <div className="flex items-start gap-3 p-4 rounded-2xl bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800/50">
                                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center">
                                    <Shield className="h-4 w-4 text-white" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-orange-900 dark:text-orange-100 mb-0.5">The Golden Rule  याद रखें</p>
                                    <p className="text-xs text-orange-800 dark:text-orange-200 leading-relaxed">
                                        <strong>Receiving money via UPI needs NO PIN, NO OTP, NO QR scan.</strong>{" "}
                                        If someone says otherwise  they are stealing from you.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* ── RIGHT: Image ── */}
                        {/*
                          ┌─ IMAGE GENERATION PROMPT ──────────────────────────────────────────────────┐
                          │ Platform: Midjourney / DALL-E 3 / Adobe Firefly / Stable Diffusion XL      │
                          │                                                                              │
                          │ "Clean modern flat-design infographic illustration for an Indian fintech     │
                          │ security app. Split vertical composition on a warm orange-to-amber gradient  │
                          │ background. Left side: a glowing smartphone screen displaying 'rahul@oksbi'  │
                          │ in bold sans-serif with a green checkmark badge and outward-pointing share   │
                          │ arrows, labelled 'UPI ID  Public Address'. Right side: a dark ATM-style    │
                          │ numeric keypad with 4 masked dot inputs and a gold padlock icon, labelled    │
                          │ 'UPI PIN  Never Share' with a red warning badge. Both sides separated by a  │
                          │ thin white dividing line. Illustration uses a warm orange, amber, and cream  │
                          │ palette. No extra background clutter. Vector art style, soft shadows,        │
                          │ professional fintech aesthetic. Aspect ratio 4:5, 960×1200 px, PNG."         │
                          └──────────────────────────────────────────────────────────────────────────────┘
                          Save the generated image to: /public/images/upi-id-vs-pin-explainer.png
                        */}
                        <div className="relative h-full min-h-[480px] overflow-hidden">
                            {/* Gradient shown as fallback while the real image loads */}
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-amber-500 to-yellow-400" />
                            <Image
                                src="/image/step-1-enter-phone-number-scam-checks-rakshaai.jpg"
                                alt="UPI ID public address vs UPI PIN private password comparison, difference between UPI ID and PIN, UPI security basics India, safe to share UPI ID vs never share PIN educational infographic"
                                title="Check Phone Number Scam Online | RakshaAI Detection Tool"
                                fill
                                className="object-cover object-center"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    </section>

                    {/* ── How to Protect Yourself from UPI Scams ──────────────────────────────────── */}
                    <section aria-labelledby="protect-yourself-heading" className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20 border border-amber-100 dark:border-amber-900/50 rounded-2xl p-8 sm:p-10">
                        <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest">
                            Stay Safe
                        </span>
                        <h2
                            id="protect-yourself-heading"
                            className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3"
                        >
                            How to Protect Yourself from UPI Scams
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl text-sm leading-relaxed">
                            Five essential habits that eliminate the majority of UPI fraud risk. Share these with your family.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                {
                                    icon: Lock,
                                    title: "Never Share Your UPI PIN",
                                    body: "Your UPI PIN is the equivalent of your ATM PIN. No bank, NPCI official, payment app support agent, or government body will ever ask you for your PIN. Anyone who does is a scammer  hang up or block immediately.",
                                    colorBg: "bg-red-100 dark:bg-red-950/50",
                                    colorIcon: "text-red-600 dark:text-red-400",
                                },
                                {
                                    icon: Search,
                                    title: "Verify Before You Pay",
                                    body: "Check the registered name shown on your payment app before confirming any transaction. For anything above ₹1,000 or from an unknown contact, run the UPI ID through RakshaAI first. This one habit prevents most fraud.",
                                    colorBg: "bg-orange-100 dark:bg-orange-950/50",
                                    colorIcon: "text-orange-600 dark:text-orange-400",
                                },
                                {
                                    icon: CheckCircle2,
                                    title: "Check Payment Confirmations Yourself",
                                    body: "Never accept a screenshot as proof of payment. Always verify by checking your UPI app's transaction history, your bank's SMS alert, and your actual account balance. Fake payment screenshots look convincing but your bank records don't lie.",
                                    colorBg: "bg-green-100 dark:bg-green-950/50",
                                    colorIcon: "text-green-600 dark:text-green-400",
                                },
                                {
                                    icon: BellRing,
                                    title: "Report Suspicious UPI IDs",
                                    body: "If you encounter a suspicious UPI ID, report it in three places: (1) use the 'Report' option in your UPI app, (2) file a complaint at cybercrime.gov.in or call 1930, and (3) submit it to RakshaAI to protect other users in real time.",
                                    colorBg: "bg-blue-100 dark:bg-blue-950/50",
                                    colorIcon: "text-blue-600 dark:text-blue-400",
                                },
                                {
                                    icon: Smartphone,
                                    title: "Use Trusted Payment Apps Only",
                                    body: "Only download payment apps from the official Google Play Store or Apple App Store. Trusted apps: Google Pay, PhonePe, Paytm, BHIM, Amazon Pay. Never install a 'special' payment app sent to you via WhatsApp, SMS, or a link  these are always fraudulent.",
                                    colorBg: "bg-purple-100 dark:bg-purple-950/50",
                                    colorIcon: "text-purple-600 dark:text-purple-400",
                                },
                            ].map(({ icon: Icon, title, body, colorBg, colorIcon }) => (
                                <div key={title} className="flex items-start gap-4 bg-white dark:bg-gray-900 border border-amber-100 dark:border-amber-900/50 rounded-xl p-5">
                                    <div className={`w-9 h-9 rounded-lg ${colorBg} flex items-center justify-center flex-shrink-0`}>
                                        <Icon className={`h-5 w-5 ${colorIcon}`} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{title}</h3>
                                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{body}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                    {/* ── UPI Handle Recognition Guide ─────────────────────── */}
                    <section aria-labelledby="handle-guide-heading">
                        <span className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-widest">
                            Quick Reference
                        </span>
                        <h2
                            id="handle-guide-heading"
                            className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3"
                        >
                            Real vs Fake UPI Handle Guide
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl text-sm">
                            Fraudsters create UPI handles that look like official bank addresses. Here's how to
                            spot the difference at a glance.
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                            {upiHandleGuide.map((handle) => (
                                <div
                                    key={handle.handle}
                                    className={`rounded-xl border p-4 text-center ${handle.real
                                        ? "bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800/50"
                                        : "bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800/50"
                                        }`}
                                >
                                    <div className="flex items-center justify-center gap-1 mb-2">
                                        {handle.real ? (
                                            <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                                        ) : (
                                            <AlertTriangle className="h-4 w-4 text-red-600 dark:text-red-400" />
                                        )}
                                        <span
                                            className={`text-xs font-bold ${handle.real
                                                ? "text-green-700 dark:text-green-400"
                                                : "text-red-700 dark:text-red-400"
                                                }`}
                                        >
                                            {handle.real ? "REAL" : "FAKE"}
                                        </span>
                                    </div>
                                    <p className="font-sans text-sm font-bold tracking-tight text-gray-900 dark:text-white mb-1">
                                        {handle.handle}
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-tight font-medium">
                                        {handle.bank}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <p className="mt-4 text-xs text-gray-500 dark:text-gray-400 max-w-xl">
                            * Real UPI handles never contain dashes, dots, or extra words after the @bank suffix.
                            When in doubt  check on RakshaAI before sending money.
                        </p>
                    </section>

                    {/* ── Red Flags ────────────────────────────────────────── */}
                    <section aria-labelledby="red-flags-heading">
                        <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-widest">
                            Warning Signs
                        </span>
                        <h2
                            id="red-flags-heading"
                            className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3"
                        >
                            UPI Red Flags  Spot Them Before You Send
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl text-sm">
                            Even without checking the UPI ID, these scenarios should make you stop immediately.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            {[
                                {
                                    category: "Suspicious UPI Handles",
                                    icon: Fingerprint,
                                    colorBg: "bg-red-100 dark:bg-red-950/50",
                                    colorIcon: "text-red-600 dark:text-red-400",
                                    tips: [
                                        "Generic handles that cannot be traced to a real individual or business",
                                        "Merchant name shown in your app doesn't match the payment description",
                                        "Handle ends in an unusual suffix not from a recognised payment provider",
                                    ],
                                },
                                {
                                    category: "Urgency and Pressure Tactics",
                                    icon: Clock,
                                    colorBg: "bg-orange-100 dark:bg-orange-950/50",
                                    colorIcon: "text-orange-600 dark:text-orange-400",
                                    tips: [
                                        '"Limited time offer" or "transfer within 10 minutes"  this is psychological manipulation',
                                        '"Your account will be blocked unless you pay now"  no bank operates this way',
                                        "Any pressure to act before you can think, verify, or consult someone",
                                    ],
                                },
                                {
                                    category: "Unusual Payment Requests",
                                    icon: AlertTriangle,
                                    colorBg: "bg-yellow-100 dark:bg-yellow-950/50",
                                    colorIcon: "text-yellow-600 dark:text-yellow-400",
                                    tips: [
                                        "Large amount transfers requested by unknown contacts online",
                                        "Advance payment demanded before you can inspect goods or services",
                                        '"Test payment" requests  legitimate businesses never require these',
                                    ],
                                },
                                {
                                    category: "Grammar and Language Errors",
                                    icon: Eye,
                                    colorBg: "bg-purple-100 dark:bg-purple-950/50",
                                    colorIcon: "text-purple-600 dark:text-purple-400",
                                    tips: [
                                        "Obvious spelling mistakes in messages from supposed bank or government officials",
                                        "Poor Hindi transliteration or unusual character substitutions",
                                        "Inconsistent language mixing that professional organisations would not use",
                                    ],
                                },
                            ].map(({ category, icon: Icon, colorBg, colorIcon, tips }) => (
                                <div key={category} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 shadow-sm">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className={`w-8 h-8 rounded-full ${colorBg} flex items-center justify-center`}>
                                            <Icon className={`h-4 w-4 ${colorIcon}`} />
                                        </div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{category}</h3>
                                    </div>
                                    <ul className="space-y-2">
                                        {tips.map((tip, i) => (
                                            <li key={i} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                                                <AlertTriangle className="h-3 w-3 text-red-400 flex-shrink-0 mt-0.5" />
                                                {tip}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800/50 rounded-xl p-5">
                            <p className="font-bold text-red-800 dark:text-red-200 text-sm mb-3 flex items-center gap-2">
                                <ShieldAlert className="h-4 w-4" />
                                🚨 Fake UPI ID Red Flags  Quick Reference
                            </p>
                            <ul className="space-y-1.5 text-xs text-red-700 dark:text-red-300">
                                {[
                                    "Handle not from a recognised payment provider",
                                    "Urgent pressure to send money immediately",
                                    "QR code claiming to 'receive' money (always a scam  QR codes only send money)",
                                    "Request to enter UPI PIN for a 'refund' or 'verification'",
                                    "Payment request from unknown contacts for large amounts",
                                    "Fake payment screenshot  always verify in your own app",
                                    "Refund request that asks you to scan a QR code or enter PIN",
                                ].map((flag, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="text-red-500 flex-shrink-0">•</span>
                                        {flag}
                                    </li>
                                ))}
                            </ul>
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

                    {/* ── Related Tools ─────────────────────────────────────── */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                            Check Another Safety Tool
                        </h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 max-w-2xl">
                            UPI scams are just one part of India&apos;s cyber fraud problem. Use RakshaAI&apos;s full safety suite for comprehensive protection:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {[
                                {
                                    href: "/website-safety-checker",
                                    title: "Website Safety Checker",
                                    desc: "Check websites before shopping or sharing card details",
                                    icon: Globe,
                                    gradient: "from-blue-500 to-cyan-600",
                                },
                                {
                                    href: "/phone-number-checker",
                                    title: "Phone Number Checker",
                                    desc: "Verify if a phone number is linked to scam calls",
                                    icon: Phone,
                                    gradient: "from-cyan-500 to-sky-600",
                                },
                                {
                                    href: "/scams/upi-fraud",
                                    title: "UPI Fraud Deep Dive",
                                    desc: "Comprehensive guide to UPI fraud patterns in India",
                                    icon: Shield,
                                    gradient: "from-red-500 to-orange-600",
                                },
                                {
                                    href: "/check",
                                    title: "Link Safety Checker",
                                    desc: "Paste suspicious links to check before clicking",
                                    icon: Search,
                                    gradient: "from-orange-500 to-amber-600",
                                },
                            ].map((tool) => (
                                <Link
                                    key={tool.href}
                                    href={tool.href}
                                    className="group flex items-start gap-4 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-orange-200 dark:hover:border-orange-800 transition-all"
                                >
                                    <div
                                        className={`w-10 h-10 rounded-lg bg-gradient-to-br ${tool.gradient} flex items-center justify-center flex-shrink-0`}
                                    >
                                        <tool.icon className="h-5 w-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white text-sm group-hover:text-orange-700 dark:group-hover:text-orange-400 transition-colors">
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

                    {/* ── Internal scam links ───────────────────────────────── */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                            Learn About UPI & Payment Scams
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {[
                                { href: "/scams/upi-fraud", label: "UPI Fraud Guide" },
                                { href: "/scams/phone-scams", label: "Phone & SMS Scams" },
                                { href: "/scams/investment-scams", label: "Investment Scams" },
                                { href: "/scams/e-commerce-fraud", label: "Fake E-commerce" },
                                { href: "/scams/loan-fraud", label: "Fake Loan Apps" },
                                { href: "/prevention-tips", label: "UPI Safety Tips" },
                            ].map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="flex items-center gap-2 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-lg px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-orange-700 dark:hover:text-orange-400 hover:border-orange-200 dark:hover:border-orange-800 transition-all shadow-sm"
                                >
                                    <ChevronRight className="h-3.5 w-3.5 text-orange-500" />
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* ── Recent UPI Scam Alerts ─────────────────────────── */}
                    <section aria-labelledby="scam-alerts-heading">
                        <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-widest">
                            Latest Alerts
                        </span>
                        <h2
                            id="scam-alerts-heading"
                            className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3"
                        >
                            Recent UPI Scam Alerts
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl text-sm">
                            Stay updated on the latest UPI fraud patterns reported across India.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                            {[
                                {
                                    date: "March 2026",
                                    title: "New Wave of Fake Refund UPI IDs",
                                    desc: "Scammers impersonating e-commerce refund teams are sending fake UPI IDs via SMS. Over 4,200 cases reported this month alone.",
                                    severity: "high",
                                },
                                {
                                    date: "February 2026",
                                    title: "QR Code Scam Surge in Metro Cities",
                                    desc: "Fraudulent QR codes placed over legitimate payment stickers at shops in Mumbai, Delhi, and Bengaluru. Always verify before scanning.",
                                    severity: "high",
                                },
                                {
                                    date: "January 2026",
                                    title: "Fake Cashback Requests Rising",
                                    desc: "Victims receive calls about 'cashback' that require entering their UPI PIN to claim. Cashback never requires your PIN  this is always fraud.",
                                    severity: "medium",
                                },
                            ].map((alert) => (
                                <div
                                    key={alert.title}
                                    className={`bg-white dark:bg-gray-900 border rounded-xl p-5 shadow-sm ${alert.severity === "high" ? "border-red-200 dark:border-red-800/50" : "border-orange-200 dark:border-orange-800/50"}`}
                                >
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${alert.severity === "high" ? "bg-red-100 dark:bg-red-950/50 text-red-700 dark:text-red-300" : "bg-orange-100 dark:bg-orange-950/50 text-orange-700 dark:text-orange-300"}`}>
                                            {alert.severity === "high" ? "HIGH RISK" : "MEDIUM RISK"}
                                        </span>
                                        <span className="text-xs text-gray-400 dark:text-gray-500">{alert.date}</span>
                                    </div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-2">{alert.title}</h3>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{alert.desc}</p>
                                </div>
                            ))}
                        </div>
                        <div className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800/50 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <div className="flex-1">
                                <p className="font-semibold text-orange-900 dark:text-orange-100 text-sm mb-1">Spotted a new UPI scam?</p>
                                <p className="text-xs text-orange-800 dark:text-orange-200 leading-relaxed">Your report helps warn other Indians before they send money to the same scam UPI ID. Reports are reviewed and go live after moderation.</p>
                            </div>
                            <Link
                                href="/scam-alerts/"
                                className="flex-shrink-0 inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
                            >
                                <BellRing className="h-4 w-4" />
                                View All Scam Alerts
                            </Link>
                        </div>
                    </section>

                    {/* ── Final CTA ────────────────────────────────────────── */}
                    <section className="rounded-2xl bg-gradient-to-br from-orange-600 via-amber-600 to-yellow-600 p-8 sm:p-12 text-white text-center shadow-2xl">
                        <CreditCard className="h-10 w-10 text-orange-200 mx-auto mb-4" />
                        <h2 className="text-2xl sm:text-3xl font-extrabold mb-2">
                            About to Send Money?
                        </h2>
                        <p className="text-orange-100 mb-8 text-sm sm:text-base max-w-xl mx-auto">
                            Spend 5 seconds verifying the UPI ID first. It's free, instant, and could save
                            you from losing your savings.
                        </p>
                        <div className="max-w-xl mx-auto bg-white/10 backdrop-blur border border-white/20 rounded-xl p-5">
                            <UpiCheckerInput />
                        </div>
                        <p className="mt-5 text-orange-200 text-xs">
                            🇮🇳 India-focused UPI fraud guidance · Free consumer checks · No sign-up needed
                        </p>
                        <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-orange-200">
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
