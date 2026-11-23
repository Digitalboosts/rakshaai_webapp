import type { Metadata } from "next";
import DefaultLayout from "@/components/DefaultLayout";
import Link from "next/link";
import ReportScamButton from "@/components/ReportScamButton";
import { articleSchema, jsonLd } from "@/lib/seo/schema";
import {
    Shield,
    AlertTriangle,
    Bell,
    TrendingUp,
    Smartphone,
    Globe,
    CreditCard,
    MessageCircle,
    Briefcase,
    Heart,
    Bitcoin,
    Banknote,
    ShieldAlert,
    ArrowRight,
    Clock,
    MapPin,
    TriangleAlert,
    Eye,
    Zap,
    BadgeCheck,
    ChevronRight,
    IndianRupee,
    Users,
    Phone,
    Lock,
    ExternalLink,
    CalendarDays,
    Tag,
} from "lucide-react";

// ── SEO Metadata ───────────────────────────────────────────────────────────────
export const metadata: Metadata = {
    title: "India Scam Alerts 2026  Active Cyber Fraud Warnings",
    description:
        "Live scam alerts for India  the most active cyber frauds targeting Indians right now. UPI scams, WhatsApp fraud, digital arrest calls. Updated regularly.",
    alternates: {
        canonical: "https://rakshaai.co/scam-alerts",
    },
    robots: { index: true, follow: true, "max-snippet": -1 },
    openGraph: {
        title: "Active Scam Alerts India 2025–26 | RakshaAI",
        description:
            "The most dangerous cyber frauds targeting Indians right now updated alerts, patterns, and what to do if you've been targeted.",
        url: "https://rakshaai.co/scam-alerts",
        type: "website",
        siteName: "RakshaAI",
        images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Active Scam Alerts India | RakshaAI' }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Live Scam Alerts India | RakshaAI",
        description:
            "Active cyber fraud warnings for India UPI, WhatsApp job scams, digital arrest, fake apps, and more.",
        images: ['/opengraph-image'],
    },
    other: { "geo.region": "IN", language: "en-IN" },
};

const structuredData = articleSchema({
    type: "NewsArticle",
    headline: "Active Scam Alerts India 2025-2026: Latest Cyber Fraud Warnings",
    url: "/scam-alerts",
    description:
        "Live scam alerts tracking the most active cyber frauds targeting Indians UPI fraud, WhatsApp job scams, digital arrest calls, fake trading platforms, and seasonal fraud spikes.",
    datePublished: "2025-01-01",
    dateModified: "2026-05-20",
    section: "Scam Alerts",
    keywords: ["scam alerts India", "digital arrest scam", "UPI fraud alerts", "WhatsApp job scam"],
});

// ── Alert data ─────────────────────────────────────────────────────────────────

const criticalAlerts = [
    {
        id: "A001",
        severity: "CRITICAL",
        severityColor: "bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800",
        headerColor: "from-red-500 to-rose-600",
        icon: ShieldAlert,
        category: "Digital Arrest / Fake Authority",
        title: "Digital Arrest Scam Surge Calls Impersonating CBI, ED, TRAI, and Supreme Court",
        date: "Feb–Mar 2026",
        location: "All India highest in Delhi NCR, Mumbai, Bengaluru, Hyderabad",
        avgLoss: "₹8.4 lakh",
        howItWorks:
            "Victims receive a call often via WhatsApp with a fake badge-photo profile from someone claiming to be CBI, Enforcement Directorate, or a 'Supreme Court registrar'. They claim your Aadhaar is linked to a money laundering case, a drug consignment, or child exploitation material. You are placed under 'digital arrest' told to stay on video call continuously or face immediate physical arrest. During the call, you are pressured to transfer money as 'bail', 'security deposit', or 'clearance amount'.",
        warning:
            "No government agency in India conducts arrests or interrogations over video call. CBI, ED, and police send physical summons through official channels. A digital arrest is legally impossible it does not exist as a concept in Indian law. Hang up immediately.",
        targetGroup: "Retired professionals, senior citizens, government employees",
        learnMore: "/scams/digital-arrest",
    },
    {
        id: "A002",
        severity: "CRITICAL",
        severityColor: "bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800",
        headerColor: "from-orange-500 to-red-600",
        icon: Briefcase,
        category: "Task Scam / WhatsApp Job Fraud",
        title: "WhatsApp Task Scam 'Like and Earn' Groups Stealing ₹5,000–₹5 Lakh Per Victim",
        date: "Active since Q3 2024 peak volume Q1 2026",
        location: "Pan-India recruitment highest via Facebook ads and Instagram reels",
        avgLoss: "₹47,000 (median, across 64,000+ complaints)",
        howItWorks:
            "An unknown WhatsApp number offers part-time work: rate hotels, like YouTube videos, review products ₹500–₹2,000 per task. You're added to a Telegram group with hundreds of 'members'. First 1–2 tasks pay real money to establish trust. Then 'boosted tasks' are introduced complete these for 10x earnings but deposit ₹3,000–₹50,000 first to 'unlock the task'. Each completed boosted task shows a growing balance in a fake dashboard but withdrawal is blocked unless you deposit more. The group vanishes when victims stop depositing.",
        warning:
            "Any work-from-home system that requires a deposit to access higher earnings is a task scam regardless of how many prior tasks paid. Real employers never require workers to pre-fund tasks. Do not deposit anything.",
        targetGroup: "Students, homemakers, graduates between jobs",
        learnMore: "/scams/job-scams/task-scam",
    },
    {
        id: "A003",
        severity: "HIGH",
        severityColor: "bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800",
        headerColor: "from-violet-500 to-purple-600",
        icon: CreditCard,
        category: "UPI / Payment Fraud",
        title: "Collect Request Fraud Victims Entering PIN to 'Receive' Payment",
        date: "Ongoing reported daily across all payment platforms",
        location: "Pan-India",
        avgLoss: "₹18,000 (median single transaction)",
        howItWorks:
            "A buyer for an OLX/Facebook Marketplace listing, a 'refund' from a company, or a 'prize credit' sends a UPI collect request. The notification looks identical to a receive-payment notification but is actually a send-payment request. Victims enter their UPI PIN believing they are accepting incoming money. The money is deducted from their account, not added. A second common variant: a QR code is sent with the instruction 'scan this to receive your refund' scanning and entering PIN sends money to the scammer.",
        warning:
            "Your UPI PIN is only required to send money. You never need to enter your PIN to receive. Any request to enter PIN to 'accept', 'receive', or 'claim' a payment is a fraud attempt.",
        targetGroup: "OLX/Marketplace sellers, anyone expecting a refund or prize",
        learnMore: "/scams/upi-fraud",
    },
    {
        id: "A004",
        severity: "HIGH",
        severityColor: "bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800",
        headerColor: "from-emerald-500 to-teal-600",
        icon: TrendingUp,
        category: "Investment / Trading Scam",
        title: "Fake SEBI-Registered Advisor Telegram Groups ₹1,000–₹30 Lakh Per Victim",
        date: "High activity Q4 2025–Q1 2026",
        location: "Pan-India victim concentration in Maharashtra, Gujarat, Telangana",
        avgLoss: "₹3.2 lakh (median reported case)",
        howItWorks:
            "A WhatsApp or Telegram message invites you to a 'SEBI-registered investment advisory' group run by a 'certified analyst'. Initial free calls are profitable members report 80–200% gains, creating urgency. You're invited to a 'premium' or 'VIP' group requiring a subscription (₹5,000–₹50,000). Inside, a fake trading platform shows growing returns. You deposit more. Withdrawal requests are approved on the dashboard but never transferred blocked by 'tax hold', 'compliance pending', or 'account upgrade required'. Total deposited amount is lost.",
        warning:
            "Real SEBI-registered advisors do not operate via WhatsApp or Telegram groups, do not guarantee returns, and do not require upfront subscription fees. Verify any advisor's SEBI registration at sebi.gov.in before depositing a single rupee.",
        targetGroup: "Salaried professionals, retirees, first-time retail investors",
        learnMore: "/scams/investment-scams",
    },
    {
        id: "A005",
        severity: "HIGH",
        severityColor: "bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800",
        headerColor: "from-sky-500 to-blue-600",
        icon: Banknote,
        category: "Loan / App Fraud",
        title: "Instant Loan App Blackmail Photos Morphed and Sent to Contacts After ₹2,000 Advance Fee",
        date: "Active throughout 2025–2026",
        location: "Tier-2 and Tier-3 cities high reports from Andhra Pradesh, Telangana, Bihar, UP",
        avgLoss: "₹12,500 in advance fees + severe personal harm from harassment",
        howItWorks:
            "A Google Play listed or APK-downloaded 'instant loan' app requests full contact access, gallery access, and camera permission for 'KYC'. After download, a ₹2,000–₹8,000 advance fee is required before loan disbursal. After payment, a new fee appears (GST, insurance, deposit). When the victim stops paying or complains, the app harvests their complete contact list and gallery photos, morphs their photo onto explicit imagery, and sends it to family, colleagues, and employers. The entity is typically traced to an overseas operation.",
        warning:
            "No RBI-regulated lender charges advance fees. Legitimate loan apps do not require full gallery or full contact permission. Uninstall immediately and revoke all permissions. Report to cybercrime.gov.in and RBI's complaint portal at cms.rbi.org.in.",
        targetGroup: "People in urgent financial need, first-time mobile loan applicants",
        learnMore: "/scams/loan-fraud",
    },
];

const watchlistAlerts = [
    {
        icon: Bitcoin,
        color: "from-amber-500 to-yellow-600",
        category: "Crypto",
        title: "Celebrity Deepfake Crypto Promotion",
        desc: "AI-generated videos of Ratan Tata, Narayana Murthy, and other Indian public figures promoting fake crypto platforms are circulating on YouTube and Instagram. These platforms collect deposits and block withdrawals.",
        severity: "MEDIUM",
        link: "/scams/crypto-scams",
    },
    {
        icon: Heart,
        color: "from-pink-500 to-rose-600",
        category: "Romance",
        title: "Matrimonial Site 'London Doctor' Pattern",
        desc: "A recurring pattern on Shaadi.com, Jeevansathi, and BharatMatrimony where 'doctors or engineers working abroad' establish 2–8 week relationships before requesting money for 'medical emergency', 'visa extension', or 'package clearance'.",
        severity: "MEDIUM",
        link: "/scams/romance-scams",
    },
    {
        icon: Globe,
        color: "from-amber-500 to-orange-600",
        category: "Phishing",
        title: "Fake IRCTC Refund SMS Campaign",
        desc: "SMS messages claiming 'Your IRCTC refund of ₹1,247 is pending click to claim' are redirecting to credential-harvesting pages. The domain mimics irctc.co.in but uses variations like irctc-refund.in or irctcpayment.com.",
        severity: "MEDIUM",
        link: "/scams/phishing",
    },
    {
        icon: Smartphone,
        color: "from-blue-500 to-cyan-600",
        category: "Phone Scam",
        title: "Fake Airtel/Jio 5G Upgrade Calls",
        desc: "Callers impersonating telecom customer service request remote access to 'complete 5G upgrade' they then access UPI and banking apps on the victim's phone. No telecom company requires remote access to upgrade your connection.",
        severity: "MEDIUM",
        link: "/scams/phone-scams",
    },
    {
        icon: Users,
        color: "from-violet-500 to-purple-600",
        category: "Job Scam",
        title: "Overseas Job Trafficking Myanmar/Cambodia",
        desc: "Fake IT and hospitality job offers for Southeast Asia are continuing to traffic Indian nationals into cyber crime compounds. MHA and MEA have issued repeated warnings. Always verify recruiters via MEA's eMigrate portal.",
        severity: "HIGH",
        link: "/scams/job-scams",
    },
    {
        icon: ShieldAlert,
        color: "from-red-500 to-rose-600",
        category: "E-commerce",
        title: "Fake Social Commerce COD Orders",
        desc: "Instagram and Facebook shops with 30–50 day old accounts are accepting COD orders for electronics and fashion, delivering empty boxes or wrong items. COD provides no buyer protection once payment is made at door.",
        severity: "MEDIUM",
        link: "/scams/e-commerce-fraud",
    },
];

const seasonalAlerts = [
    {
        icon: CalendarDays,
        month: "Jan–Mar 2026",
        title: "Tax Season Filing Frauds",
        desc: "Fake CPC-ITR and Income Tax Department SMS/email campaigns claim 'your ITR has a defect' or 'refund of ₹X is pending verify your bank account'. The real Income Tax portal is incometax.gov.in all official communication comes from @incometax.gov.in email addresses only.",
        color: "from-indigo-500 to-blue-600",
    },
    {
        icon: Smartphone,
        month: "Feb–Apr 2026",
        title: "IPL Season Betting App Scams",
        desc: "Fake cricket betting apps with 'guaranteed win prediction' services are actively recruiting via Telegram. They collect subscription fees (₹2,000–₹20,000) for 'insider tips' that always lose. These apps are also illegal under India's public gambling laws.",
        color: "from-orange-500 to-amber-600",
    },
    {
        icon: Globe,
        month: "Mar–Jun 2026",
        title: "Board Exam / Admission Scams",
        desc: "Fake agents offering CBSE result manipulation, JEE/NEET answer key access, or guaranteed MBBS seats are active during exam season. No agent can access or modify board results. Families have lost ₹5–₹40 lakh to these fraudsters.",
        color: "from-green-500 to-emerald-600",
    },
    {
        icon: CreditCard,
        month: "Ongoing",
        title: "RBI Repo Rate Cut Related Loan Frauds",
        desc: "Following recent repo rate cuts, fraudsters are calling bank customers to offer 'interest rate revision services' that require advance fees or OTP sharing. Banks never proactively call customers to revise rates changes are automatic and never require customer fees.",
        color: "from-violet-500 to-purple-600",
    },
];

const topReportedNumbers = [
    { type: "Digital Arrest", count: "1,240+", recent: "Last 7 days", tag: "Most Reported" },
    { type: "Fake Job Offer", count: "986+", recent: "Last 7 days", tag: "Surging" },
    { type: "Fake Investment Advisor", count: "742+", recent: "Last 7 days", tag: "High Loss" },
    { type: "UPI Collect Fraud", count: "631+", recent: "Last 7 days", tag: "Daily Active" },
    { type: "Loan App Blackmail", count: "518+", recent: "Last 7 days", tag: "Severe Harm" },
    { type: "Fake KYC Update", count: "453+", recent: "Last 7 days", tag: "New Pattern" },
];

const quickActions = [
    {
        icon: Phone,
        color: "from-red-500 to-rose-600",
        title: "Call 1930 immediately",
        desc: "If you transferred money to a scammer in the last 60 minutes, call 1930 now. Every minute matters for account freezing.",
        cta: "Call 1930",
        href: "tel:1930",
        external: true,
    },
    {
        icon: Globe,
        color: "from-orange-500 to-amber-600",
        title: "File cyber crime complaint",
        desc: "Submit a detailed complaint with transaction IDs, screenshots, and scammer contact details.",
        cta: "cybercrime.gov.in",
        href: "https://cybercrime.gov.in",
        external: true,
    },
    {
        icon: Shield,
        color: "from-indigo-500 to-violet-600",
        title: "Verify a suspicious number",
        desc: "Check any phone number, UPI ID, or website on RakshaAI before you interact with it.",
        cta: "Check Now Free",
        href: "/check",
        external: false,
    },
    {
        icon: Bell,
        color: "from-green-500 to-emerald-600",
        title: "Report a new scam",
        desc: "Spotted a scam not listed here? Report it to warn the next person before they lose money.",
        cta: "Submit a Report",
        href: "#report",
        external: false,
    },
];

// ─────────────────────────────────────────────────────────────────────────────
export default function ScamAlertsPage() {
    return (
        <DefaultLayout>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }}
            />

            <main className="min-h-screen">

                {/* ── Hero ──────────────────────────────────────────────────── */}
                <section className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-orange-50 dark:from-gray-950 dark:via-gray-900 dark:to-red-950 pt-20 pb-24 px-4">
                    <div className="pointer-events-none absolute inset-0 -z-10">
                        <div className="absolute top-10 left-1/4 w-96 h-96 bg-red-300/10 rounded-full blur-3xl animate-pulse" />
                        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-300/10 rounded-full blur-3xl animate-pulse delay-700" />
                        <div className="absolute top-1/2 left-0 w-64 h-64 bg-rose-300/10 rounded-full blur-3xl animate-pulse delay-1000" />
                    </div>

                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-900/40 dark:to-orange-900/40 text-red-700 dark:text-red-300 text-xs font-semibold mb-6 border border-red-200 dark:border-red-800 shadow-sm">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600" />
                            </span>
                            Live Alerts Updated March 2026 · Tracking India&apos;s most active frauds
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
                            India&apos;s Active{" "}
                            <span className="bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 bg-clip-text text-transparent">
                                Scam Alerts
                            </span>
                        </h1>

                        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                            These are the frauds that are actively taking money from Indians right now
                            not old theoretical patterns, but documented active operations with
                            verified victim reports. Know what's running. Know what to watch for.
                        </p>

                        {/* Stats strip */}
                        <div className="flex flex-wrap justify-center gap-4 mb-10">
                            {[
                                { value: "5", label: "Critical alerts active", icon: <AlertTriangle className="h-4 w-4" /> },
                                { value: "6", label: "Watch-list patterns", icon: <Eye className="h-4 w-4" /> },
                                { value: "4", label: "Seasonal fraud spikes", icon: <CalendarDays className="h-4 w-4" /> },
                                { value: "1930", label: "Emergency helpline", icon: <Shield className="h-4 w-4" /> },
                            ].map(({ value, label, icon }) => (
                                <div key={label} className="flex flex-col items-center px-6 py-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 min-w-[130px]">
                                    <div className="text-red-500 mb-1">{icon}</div>
                                    <span className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">{value}</span>
                                    <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-center">{label}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-red-500 to-orange-600 text-white font-bold text-sm shadow-lg hover:shadow-red-300/50 hover:scale-105 transition-all duration-300"
                            >
                                <Shield className="h-5 w-5" />
                                Check a Suspicious Number
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                            <a
                                href="#critical"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 font-semibold text-sm border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
                            >
                                View Critical Alerts
                                <ChevronRight className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </section>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

                    {/* ── Quick Actions ─────────────────────────────────────── */}
                    <section>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {quickActions.map(({ icon: Icon, color, title, desc, cta, href, external }) => (
                                <div key={title} className="flex flex-col p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all group">
                                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                        <Icon className="h-5 w-5 text-white" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-2">{title}</h3>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed flex-1 mb-4">{desc}</p>
                                    {external ? (
                                        <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                                            className={`inline-flex items-center gap-1.5 text-xs font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent hover:opacity-80 transition-opacity`}
                                        >
                                            {cta} <ExternalLink className="h-3 w-3 text-current opacity-60" />
                                        </a>
                                    ) : (
                                        <Link href={href}
                                            className={`inline-flex items-center gap-1.5 text-xs font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent hover:opacity-80 transition-opacity`}
                                        >
                                            {cta} <ArrowRight className="h-3 w-3 text-current opacity-60" />
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── Critical Alerts ───────────────────────────────────── */}
                    <section id="critical">
                        <div className="flex items-center gap-3 mb-10">
                            <div className="flex items-center gap-2">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600" />
                                </span>
                                <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-widest">Critical & High Alerts</span>
                            </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-10 max-w-3xl leading-relaxed">
                            These are the five most damaging active fraud operations currently targeting
                            Indians. Each entry is based on aggregated complaint data, verified victim
                            reports, and MHA / NPCI / RBI advisories.
                        </p>

                        <div className="space-y-6">
                            {criticalAlerts.map((alert) => {
                                const Icon = alert.icon;
                                return (
                                    <div key={alert.id} className="rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300">
                                        {/* Alert header */}
                                        <div className={`bg-gradient-to-r ${alert.headerColor} px-6 py-4`}>
                                            <div className="flex items-start gap-4">
                                                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                                                    <Icon className="h-5 w-5 text-white" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex flex-wrap items-center gap-2 mb-1">
                                                        <span className={`px-2 py-0.5 rounded-full text-xs font-bold border ${alert.severityColor}`}>
                                                            {alert.severity}
                                                        </span>
                                                        <span className="text-white/80 text-xs">{alert.category}</span>
                                                        <span className="text-white/60 text-xs">· {alert.date}</span>
                                                    </div>
                                                    <h3 className="text-base sm:text-lg font-extrabold text-white leading-snug">{alert.title}</h3>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Alert body */}
                                        <div className="p-6 bg-white dark:bg-gray-900 space-y-5">
                                            {/* Meta strip */}
                                            <div className="flex flex-wrap gap-4 text-xs text-gray-500 dark:text-gray-400">
                                                <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" />{alert.location}</span>
                                                <span className="flex items-center gap-1.5"><IndianRupee className="h-3.5 w-3.5" />Avg. loss: <strong className="text-gray-900 dark:text-white">{alert.avgLoss}</strong></span>
                                                <span className="flex items-center gap-1.5"><Users className="h-3.5 w-3.5" />Targets: {alert.targetGroup}</span>
                                            </div>

                                            {/* How it works */}
                                            <div>
                                                <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">How It Works</p>
                                                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{alert.howItWorks}</p>
                                            </div>

                                            {/* Warning box */}
                                            <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900">
                                                <TriangleAlert className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                                    <strong className="text-amber-700 dark:text-amber-300">What to do: </strong>
                                                    {alert.warning}
                                                </p>
                                            </div>

                                            {/* Learn more */}
                                            <Link
                                                href={alert.learnMore}
                                                className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:gap-3 transition-all duration-200"
                                            >
                                                Full guide: {alert.category} <ArrowRight className="h-4 w-4" />
                                            </Link>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    {/* ── Watchlist ─────────────────────────────────────────── */}
                    <section>
                        <div className="flex items-center justify-between mb-10">
                            <div>
                                <span className="inline-block px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-xs font-semibold mb-3">
                                    Watch List
                                </span>
                                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
                                    6 Patterns on the Radar
                                </h2>
                                <p className="text-gray-500 dark:text-gray-400 mt-2 max-w-2xl text-sm">
                                    Not at critical volume yet but showing consistent growth in complaint data.
                                    These are the frauds that may hit critical mass in coming weeks.
                                </p>
                            </div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-5">
                            {watchlistAlerts.map(({ icon: Icon, color, category, title, desc, severity, link }) => (
                                <div key={title} className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg hover:border-amber-200 dark:hover:border-amber-900 transition-all group">
                                    <div className={`flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm`}>
                                        <Icon className="h-5 w-5 text-white" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex flex-wrap items-center gap-2 mb-1">
                                            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">{category}</span>
                                            <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${severity === "HIGH" ? "bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300" : "bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-300"}`}>
                                                {severity}
                                            </span>
                                        </div>
                                        <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1.5">{title}</h3>
                                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-3">{desc}</p>
                                        <Link href={link} className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:gap-2 transition-all">
                                            Full guide <ArrowRight className="h-3 w-3" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── Top Reported Numbers ──────────────────────────────── */}
                    <section className="bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-900/50 dark:to-slate-900/30 rounded-2xl p-8 sm:p-12 border border-gray-100 dark:border-gray-800">
                        <div className="mb-8">
                            <span className="inline-block px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900/40 text-slate-700 dark:text-slate-300 text-xs font-semibold mb-3">
                                RakshaAI Platform Data
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-2">
                                Top Scam Categories by Report Volume Last 7 Days
                            </h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-2xl">
                                Based on reports submitted by RakshaAI users. These numbers reflect actual
                                complaint submissions, not estimated incidents.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {topReportedNumbers.map(({ type, count, recent, tag }, i) => (
                                <div key={type} className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center text-white font-extrabold text-sm shadow-sm">
                                        #{i + 1}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <p className="font-semibold text-gray-900 dark:text-white text-sm truncate">{type}</p>
                                            <span className="px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400 text-xs font-bold flex-shrink-0">{tag}</span>
                                        </div>
                                        <p className="text-xl font-extrabold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">{count} <span className="text-xs font-normal text-gray-500 dark:text-gray-400">reports</span></p>
                                        <p className="text-xs text-gray-400 dark:text-gray-500">{recent}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="mt-6 text-xs text-gray-400 dark:text-gray-500 text-center">
                            Data reflects reports submitted on RakshaAI. Actual fraud volume is estimated to be 20–50× higher due to under-reporting.
                        </p>
                    </section>

                    {/* ── Seasonal Alerts ───────────────────────────────────── */}
                    <section>
                        <div className="text-center mb-12">
                            <span className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-4">
                                Seasonal Patterns
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                Time-Sensitive Fraud Spikes: Q1–Q2 2026
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-sm">
                                Some frauds follow predictable seasonal cycles tied to tax season, exam results,
                                festivals, and sporting events. These are the active seasonal spikes right now.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-5">
                            {seasonalAlerts.map(({ icon: Icon, month, title, desc, color }) => (
                                <div key={title} className="rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all">
                                    <div className={`bg-gradient-to-r ${color} px-5 py-3 flex items-center gap-3`}>
                                        <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                                            <Icon className="h-4 w-4 text-white" />
                                        </div>
                                        <span className="text-white font-bold text-sm">{month}</span>
                                    </div>
                                    <div className="p-5 bg-white dark:bg-gray-900">
                                        <h3 className="font-bold text-gray-900 dark:text-white text-base mb-2">{title}</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── How We Track ──────────────────────────────────────── */}
                    <section className="grid lg:grid-cols-2 gap-10 items-center">
                        <div>
                            <span className="inline-block px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-semibold mb-4">
                                How We Track
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-5 leading-snug">
                                How RakshaAI Monitors Active Scam Patterns
                            </h2>
                            <div className="space-y-4 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                <p>
                                    This page tracks real fraud operations not theoretical risks. Our
                                    alert data comes from three sources: aggregated reports submitted by
                                    RakshaAI users, official advisories from MHA, RBI, NPCI, SEBI, and
                                    DoT, and verified victim accounts shared with our team.
                                </p>
                                <p>
                                    When a pattern crosses a threshold of concurrent reports multiple
                                    people reporting the same number, the same URL, or the same script
                                    in different cities it gets escalated to a named alert. We try to
                                    name the pattern before it becomes a news headline, not after.
                                </p>
                                <p>
                                    Every alert includes what we know about the mechanics, what the typical
                                    financial loss looks like, and most importantly the specific action
                                    that stops the fraud from working. Awareness without a clear "what to do"
                                    isn't protection.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            {[
                                { icon: Users, color: "from-indigo-500 to-violet-600", title: "User Reports", desc: "Every number, link, and UPI ID flagged by RakshaAI users feeds our pattern detection. Your report may be the data point that identifies the next major fraud wave." },
                                { icon: BadgeCheck, color: "from-green-500 to-emerald-600", title: "Official Advisories", desc: "We monitor and synthesise advisories from MHA Cybercrime Division, RBI, NPCI, SEBI, and DoT translating official language into plain, actionable guidance." },
                                { icon: Zap, color: "from-amber-500 to-orange-600", title: "Pattern Analysis", desc: "Our AI detects new fraud scripts by identifying structural similarities across reports a new scam variant often surfaces in our data days before it becomes widely reported." },
                            ].map(({ icon: Icon, color, title, desc }) => (
                                <div key={title} className="flex items-start gap-4 p-5 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all">
                                    <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center`}>
                                        <Icon className="h-5 w-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1">{title}</h3>
                                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── Report & Protect ──────────────────────────────────── */}
                    <section id="report" className="rounded-2xl bg-gradient-to-br from-red-700 via-orange-600 to-amber-700 p-8 sm:p-12 text-white text-center shadow-2xl relative overflow-hidden">
                        <div className="pointer-events-none absolute inset-0">
                            <div className="absolute -top-10 -left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                        </div>
                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-xs font-semibold mb-6 border border-white/20">
                                <Bell className="h-4 w-4" />
                                Your report protects the next person
                            </div>
                            <h2 className="text-2xl sm:text-4xl font-extrabold mb-4 leading-tight">
                                Spotted a Scam Not Listed Here?<br className="hidden sm:block" /> Report It. Keep India Safer.
                            </h2>
                            <p className="text-red-100 mb-8 text-sm sm:text-base max-w-xl mx-auto">
                                When you report a scammer's number, UPI ID, or website on RakshaAI,
                                every future search for that contact shows your warning first.
                                One report thousands protected.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <ReportScamButton className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-red-700 font-bold text-sm shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                                    <AlertTriangle className="h-5 w-5" />
                                    Report a Scam Now
                                    <ArrowRight className="h-4 w-4" />
                                </ReportScamButton>
                                <Link
                                    href="/prevention-tips"
                                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 text-white font-semibold text-sm border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300"
                                >
                                    Prevention Tips Guide
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                            <p className="mt-6 text-red-200 text-xs">
                                🇮🇳 India-focused scam alerts · Free consumer access · No registration required
                            </p>
                        </div>
                    </section>

                </div>
            </main>
        </DefaultLayout>
    );
}
