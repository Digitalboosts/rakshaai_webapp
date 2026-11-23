import type { Metadata } from "next";
import Image from "next/image";
import DefaultLayout from "@/components/DefaultLayout";
import { jsonLd } from "@/lib/seo/schema";
import Link from "next/link";
import ReportScamButton from "@/components/ReportScamButton";
import {
    Shield,
    AlertTriangle,
    CheckCircle2,
    XCircle,
    Bitcoin,
    TrendingUp,
    TrendingDown,
    IndianRupee,
    ShieldAlert,
    ArrowRight,
    Info,
    BadgeCheck,
    MessageSquareWarning,
    Globe,
    Lock,
    Unlock,
    Zap,
    Users,
    UserX,
    ChevronDown,
    Star,
    Copy,
    ExternalLink,
    Wallet,
    Ban,
    RefreshCw,
    QrCode,
    Phone,
    MessageCircle,
} from "lucide-react";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
    title: "Crypto Scams India 2026: Bitcoin Fraud & How to Avoid",
    description:
        "Cryptocurrency scams stole ₹1,800+ crore from Indians in 2024. Fake exchanges, rug pulls, Bitcoin doubling scams. How to stay safe.",
    alternates: {
        canonical: "https://rakshaai.co/scams/crypto-scams",
    },
    robots: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
    openGraph: {
        title: "Cryptocurrency Scams India: Bitcoin Fraud & Fake Exchanges | RakshaAI",
        description:
            "Fake crypto exchanges, rug pulls, Bitcoin doubling scams a complete guide to cryptocurrency fraud targeting Indians in 2024–25.",
        url: "https://rakshaai.co/scams/crypto-scams",
        type: "website",
    siteName: 'RakshaAI',
        images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'RakshaAI' }],
  },
    twitter: {
        card: "summary_large_image",
        title: "Crypto Scams in India | RakshaAI",
        description:
            "Bitcoin fraud, fake exchanges, rug pulls everything you need to know about cryptocurrency scams targeting Indians.",
        images: ['/opengraph-image'],
  },
    other: { "geo.region": "IN", language: "en-IN" },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────
const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
        "Cryptocurrency Scams in India: Bitcoin Fraud, Fake Exchanges & How to Stay Safe",
    url: "https://rakshaai.co/scams/crypto-scams",
    description:
        "A comprehensive guide to cryptocurrency scams in India fake exchanges, Bitcoin doubling schemes, rug pulls, pump-and-dump, and fake wallet apps that have stolen thousands of crores from Indian investors.",
    datePublished: "2025-01-01",
    dateModified: "2026-06-11",
    publisher: {
        "@type": "Organization",
        name: "RakshaAI",
        url: "https://rakshaai.co",
    },
    inLanguage: "en-IN",
};

const faqStructured = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What are the most common cryptocurrency scams in India?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The most common crypto scams in India are: fake exchange websites that look like Binance or WazirX clones, rug pull schemes where developers abandon a project after raising funds, Bitcoin doubling scams ('send 1 BTC, receive 2 BTC'), pump-and-dump groups on Telegram, fake wallet apps on third-party app stores, and romance-linked pig butchering scams that route victims into fake trading platforms.",
            },
        },
        {
            "@type": "Question",
            name: "Is it safe to buy Bitcoin in India?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Buying Bitcoin through SEBI-aware, India-registered exchanges like CoinDCX, WazirX, or ZebPay is generally considered safe for the exchange custody risk. The risks are: phishing sites spoofing these exchanges, fake mobile apps posing as these exchanges, and unsolicited investment advice that routes you to fraudulent platforms. Always access exchanges directly through official URLs bookmarked by you never URLs shared in messages.",
            },
        },
        {
            "@type": "Question",
            name: "What is a rug pull in cryptocurrency?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A rug pull is a crypto exit scam where developers launch a new token, attract investors (often through social media hype and influencer promotion), pump the price, then suddenly withdraw all the liquidity from the trading pool and abandon the project. The token price collapses to near zero, and the developers disappear with the collected funds. Rug pulls are common with small-cap altcoins promoted aggressively in Telegram and WhatsApp groups.",
            },
        },
        {
            "@type": "Question",
            name: "How do I verify if a crypto exchange is legitimate?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Check if the exchange is registered with the Financial Intelligence Unit (FIU-IND) under India's PMLA framework all Indian crypto exchanges must register with FIU-IND. Verify the exact domain spelling (fraudsters use lookalike domains like 'waz1rx.com' or 'binance-india.net'). Check if they have a verifiable physical address in India, a listed management team, and regulatory disclosures. Never use an exchange recommended solely via WhatsApp, Telegram, or unsolicited messages.",
            },
        },
        {
            "@type": "Question",
            name: "Can I recover crypto stolen from a fake exchange?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Crypto transactions are largely irreversible on-chain once sent to a scammer's wallet, direct recovery is extremely difficult. However, report immediately to 1930 (Cyber Crime Helpline) and cybercrime.gov.in, as Indian cyber cells have in some cases coordinated with exchanges to freeze accounts if the funds went to a KYC-linked Indian account. Blockchain analysis firms have also traced stolen funds in documented cases. The faster you report, the better the chance of any intervention.",
            },
        },
        {
            "@type": "Question",
            name: "What is the cryptocurrency doubling scam?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The Bitcoin or crypto doubling scam claims that sending any amount of cryptocurrency to a given wallet address will return double the amount. It often uses fabricated celebrity endorsements Elon Musk, Ratan Tata, or popular crypto YouTubers and fake on-screen 'live transaction' feeds showing money being doubled. Nothing is ever returned. In a variant, a small test amount is returned once to build trust before the victim sends a large amount that is never returned.",
            },
        },
    ],
};

// ── Scam types ────────────────────────────────────────────────────────────────
const scamTypes = [
    {
        icon: Globe,
        color: "from-emerald-500 to-green-600",
        bg: "bg-emerald-50 dark:bg-emerald-950/30",
        border: "border-emerald-200 dark:border-emerald-900",
        title: "Fake Crypto Exchange Websites",
        desc: "Domain-spoofing sites that clone the UI of WazirX, CoinDCX, Binance, or Coinbase. Users deposit funds which are credited as balance on the fake dashboard but withdrawal is always blocked by a 'tax fee', 'verification hold', or 'network upgrade'. The funds were never on a real blockchain.",
    },
    {
        icon: TrendingDown,
        color: "from-red-500 to-rose-600",
        bg: "bg-red-50 dark:bg-red-950/30",
        border: "border-red-200 dark:border-red-900",
        title: "Rug Pull New Token Exit Scam",
        desc: "Developers launch a new token with aggressive Telegram/WhatsApp promotion, often with a compelling 'use case' story. Once enough retail investors buy in and the price pumps, the developers drain the liquidity pool and vanish. The token crashes to zero within minutes.",
    },
    {
        icon: RefreshCw,
        color: "from-yellow-500 to-amber-600",
        bg: "bg-yellow-50 dark:bg-yellow-950/30",
        border: "border-yellow-200 dark:border-yellow-900",
        title: "Bitcoin / Crypto Doubling Scam",
        desc: "'Send 0.1 BTC, receive 0.2 BTC back within 24 hours.' Uses fake celebrity endorsements (Elon Musk deepfakes, Ratan Tata lookalikes, popular crypto YouTubers) and fabricated live transaction feeds. The test repayment trick: small first amounts are returned to build trust before the large transfer that is never returned.",
    },
    {
        icon: TrendingUp,
        color: "from-violet-500 to-purple-600",
        bg: "bg-violet-50 dark:bg-violet-950/30",
        border: "border-violet-200 dark:border-violet-900",
        title: "Pump-and-Dump Telegram Groups",
        desc: "Paid Telegram 'alpha' groups hype low-cap altcoins to their members. The organisers have pre-bought cheap tokens and sell at the peak of the manufactured excitement, leaving late buyers with worthless holdings. Victims are told the group 'insiders' have market intelligence.",
    },
    {
        icon: Wallet,
        color: "from-teal-500 to-cyan-600",
        bg: "bg-teal-50 dark:bg-teal-950/30",
        border: "border-teal-200 dark:border-teal-900",
        title: "Fake Crypto Wallet Apps",
        desc: "Malicious apps on third-party stores or sideloaded via Telegram mimic MetaMask, Trust Wallet, or hardware wallet apps. When you enter your seed phrase during 'setup', the app transmits it to the scammer who drains your real wallet immediately.",
    },
    {
        icon: Users,
        color: "from-indigo-500 to-blue-600",
        bg: "bg-indigo-50 dark:bg-indigo-950/30",
        border: "border-indigo-200 dark:border-indigo-900",
        title: "Pig Butchering Crypto Investment Romance",
        desc: "A romantic connection (via WhatsApp, Hinge, or LinkedIn) introduces a 'personal trading tip' a fake exchange whose dashboard shows extraordinary daily returns. The victim deposits more and more. Withdrawal is always blocked by a new fee. Full account draining follows.",
    },
    {
        icon: Star,
        color: "from-orange-500 to-amber-600",
        bg: "bg-orange-50 dark:bg-orange-950/30",
        border: "border-orange-200 dark:border-orange-900",
        title: "Celebrity Deepfake Crypto Promotions",
        desc: "AI-generated videos of Elon Musk, Narayana Murthy, or Indian crypto influencers promote a 'limited access' investment platform. Deepfake quality is now high enough that casual viewers cannot distinguish them from authentic videos. QR codes and URLs overlaid on the video lead to scam sites.",
    },
    {
        icon: QrCode,
        color: "from-slate-500 to-gray-600",
        bg: "bg-slate-50 dark:bg-slate-950/30",
        border: "border-slate-200 dark:border-slate-900",
        title: "Crypto Recovery / Refund Scam",
        desc: "Targets people who have already been scammed. A 'blockchain recovery specialist' or 'crypto legal firm' offers to trace and recover lost crypto for an upfront fee. After the fee is paid (often demanded in crypto), the 'firm' disappears. Victims are scammed twice.",
    },
];

// ── Fake exchange walkthrough ─────────────────────────────────────────────────
const exchangeSteps = [
    {
        step: "01",
        color: "from-emerald-400 to-green-500",
        bg: "bg-emerald-50 dark:bg-emerald-950/30",
        border: "border-emerald-200 dark:border-emerald-900",
        title: "Spoofed Domain Launched",
        desc: "The site looks pixel-perfect: WazirX's exact layout, logos, and colour scheme. The URL is 'wazirx-pro.com' or 'wazirxindia.net' close enough to miss on mobile. SSL certificate is present (the padlock means nothing about legitimacy).",
        urgent: false,
    },
    {
        step: "02",
        color: "from-teal-500 to-emerald-600",
        bg: "bg-teal-50 dark:bg-teal-950/30",
        border: "border-teal-200 dark:border-teal-900",
        title: "Victim Is Directed Here",
        desc: "Via a Telegram group, a WhatsApp message, a romantic partner, a Google Ad (scammers buy paid search ads for 'buy bitcoin india'), or a YouTube comment. Many victims arrive believing they are accessing the real exchange.",
        urgent: false,
    },
    {
        step: "03",
        color: "from-yellow-500 to-amber-600",
        bg: "bg-yellow-50 dark:bg-yellow-950/30",
        border: "border-yellow-200 dark:border-yellow-900",
        title: "Deposit Credited, Fake Profits Shown",
        desc: "The first deposit appears in the dashboard and may even show profitable trades  the numbers are fabricated. Occasionally a small withdrawal succeeds to build confidence. The victim deposits larger amounts.",
        urgent: false,
    },
    {
        step: "04",
        color: "from-orange-500 to-red-500",
        bg: "bg-orange-50 dark:bg-orange-950/30",
        border: "border-orange-200 dark:border-orange-900",
        title: "Withdrawal Blocked",
        desc: "When the victim attempts to withdraw, a new requirement appears: 'Tax clearance fee (30% of holdings)', 'KYC verification deposit', 'Anti-money laundering hold', 'Network upgrade pause'. Each payment unlocks a new block.",
        urgent: true,
    },
    {
        step: "05",
        color: "from-red-500 to-rose-600",
        bg: "bg-red-50 dark:bg-red-950/30",
        border: "border-red-200 dark:border-red-900",
        title: "Total Loss",
        desc: "After exhausting savings paying fees, support goes silent. The domain may still work for new victims for weeks. The original deposits, 'profits', and fee payments are all gone. Nothing was on a real blockchain.",
        urgent: true,
    },
];

// ── Red flags ─────────────────────────────────────────────────────────────────
const redFlags = [
    "Exchange URL doesn't exactly match the real domain  check letter by letter on desktop, not mobile",
    "Platform was shared via Telegram, WhatsApp, a romantic contact, or an unsolicited message  not found via your own search",
    "Profits appear within hours of depositing  real trading always involves risk and volatility, not guaranteed daily gains",
    "Withdrawal triggers a new 'fee', 'tax clearance', or 'verification requirement' every time it's attempted",
    "Customer 'support' is only on Telegram  no verifiable phone number, registered address, or official email domain",
    "Token or project is promoted exclusively by paid influencers or anonymous 'insiders'  no verifiable team or whitepaper audited by a third party",
    "You're being offered a 'guaranteed return' on crypto  crypto has no guaranteed returns by its nature",
    "The investment tip came from someone you met romantically online and they refuse to video call",
    "You're asked to pay recovery fees to get back funds already lost  this is the second scam",
    "The platform app was downloaded from a link, not from the official App Store or Google Play",
];

// ── Myth vs Reality ───────────────────────────────────────────────────────────
const myths = [
    {
        myth: "The site has a padlock (HTTPS), so it must be safe.",
        fact: "HTTPS only encrypts the connection between your browser and the server  it says nothing about who owns that server or whether the site is fraudulent. As of 2024, over 80% of phishing and scam sites use HTTPS. A padlock on a fake exchange URL is standard, not reassuring.",
    },
    {
        myth: "I can verify a real exchange by seeing my balance grow on the dashboard.",
        fact: "Dashboard balances on fake exchanges are entirely fabricated numbers. The deposits you made went directly to the scammer the moment you transferred them. The 'balance' and 'profits' are a user interface designed to keep you depositing more.",
    },
    {
        myth: "Crypto transactions are traceable, so authorities can always recover stolen funds.",
        fact: "While blockchain transactions are publicly visible, tracing them requires expertise, and scammers use mixers, chain-hopping, and immediate conversion to fiat through unregulated exchanges in jurisdictions that don't cooperate with Indian authorities. Recovery is possible in a minority of domestic cases but rare for international operations.",
    },
    {
        myth: "Only technically naive people get scammed on crypto  I understand the technology.",
        fact: "Technical understanding of how Bitcoin works does not protect against social engineering, domain spoofing, or a fake trading platform with a professional UI. Many documented Indian crypto fraud victims are software engineers and IT professionals. The scam targets human psychology, not technical ignorance.",
    },
];

// ── Recovery steps ────────────────────────────────────────────────────────────
const recoverySteps = [
    {
        step: "01",
        title: "Stop all further transfers immediately",
        desc: "Do not pay any 'tax clearance', 'withdrawal unlock', or 'verification fee'. Every additional payment is additional money lost. The original funds will not be released regardless of what fees are paid.",
        urgent: true,
    },
    {
        step: "02",
        title: "Document everything before the site vanishes",
        desc: "Screenshot the exchange URL, your dashboard, all transaction confirmations, every communication with 'support', and any profile that directed you there. Fake sites frequently disappear within days of complaints.",
        urgent: true,
    },
    {
        step: "03",
        title: "Call 1930 immediately",
        desc: "If Indian bank accounts or UPI were used to fund the crypto purchase, the Cyber Crime Financial Helpline can attempt to freeze those accounts. Speed is critical  the window for effective intervention closes quickly.",
        urgent: false,
    },
    {
        step: "04",
        title: "File at cybercrime.gov.in",
        desc: "Submit your complaint with transaction hashes (if on-chain), wallet addresses funds were sent to, exchange URLs, screenshots of all communications, and bank transaction references. A complaint number is issued immediately.",
        urgent: false,
    },
    {
        step: "05",
        title: "Report to FIU-IND and SEBI if applicable",
        desc: "If the exchange claimed to be SEBI-registered or FIU-IND compliant without being so, report this specifically to FIU-IND (fiuindia.gov.in) and SEBI's SCORES portal for potential legal action against fraudulent claims.",
        urgent: false,
    },
    {
        step: "06",
        title: "Report the domain and wallet addresses",
        desc: "Report the fake exchange domain to Google Safe Browsing (safebrowsing.google.com/safebrowsing/report_phish/) and the fraudulent wallet addresses to Chainabuse (chainabuse.com). This protects future victims and assists global law enforcement tracking.",
        urgent: false,
    },
];

// ── FAQs ──────────────────────────────────────────────────────────────────────
const faqs = [
    {
        q: "What are the most common cryptocurrency scams in India?",
        a: "The most common crypto scams in India are: fake exchange websites that look like Binance or WazirX clones, rug pull schemes where developers abandon a project after raising funds, Bitcoin doubling scams ('send 1 BTC, receive 2 BTC'), pump-and-dump groups on Telegram, fake wallet apps on third-party app stores, and romance-linked pig butchering scams that route victims into fake trading platforms.",
    },
    {
        q: "Is it safe to buy Bitcoin in India?",
        a: "Buying Bitcoin through SEBI-aware, India-registered exchanges like CoinDCX, WazirX, or ZebPay is generally considered safe for the exchange custody risk. The risks are: phishing sites spoofing these exchanges, fake mobile apps posing as these exchanges, and unsolicited investment advice that routes you to fraudulent platforms. Always access exchanges directly through official URLs bookmarked by you  never URLs shared in messages.",
    },
    {
        q: "What is a rug pull in cryptocurrency?",
        a: "A rug pull is a crypto exit scam where developers launch a new token, attract investors (often through social media hype and influencer promotion), pump the price, then suddenly withdraw all the liquidity from the trading pool and abandon the project. The token price collapses to near zero, and the developers disappear with the collected funds. Rug pulls are common with small-cap altcoins promoted aggressively in Telegram and WhatsApp groups.",
    },
    {
        q: "How do I verify if a crypto exchange is legitimate?",
        a: "Check if the exchange is registered with the Financial Intelligence Unit (FIU-IND) under India's PMLA framework  all Indian crypto exchanges must register with FIU-IND. Verify the exact domain spelling (fraudsters use lookalike domains like 'waz1rx.com' or 'binance-india.net'). Check if they have a verifiable physical address in India, a listed management team, and regulatory disclosures. Never use an exchange recommended solely via WhatsApp, Telegram, or unsolicited messages.",
    },
    {
        q: "Can I recover crypto stolen from a fake exchange?",
        a: "Crypto transactions are largely irreversible on-chain  once sent to a scammer's wallet, direct recovery is extremely difficult. However, report immediately to 1930 and cybercrime.gov.in, as Indian cyber cells have in some cases coordinated with exchanges to freeze accounts if the funds went to a KYC-linked Indian account. Blockchain analysis firms have also traced stolen funds in documented cases. The faster you report, the better the chance of any intervention.",
    },
    {
        q: "What is the cryptocurrency doubling scam?",
        a: "The Bitcoin or crypto doubling scam claims that sending any amount of cryptocurrency to a given wallet address will return double the amount. It often uses fabricated celebrity endorsements  Elon Musk, Ratan Tata, or popular crypto YouTubers  and fake on-screen 'live transaction' feeds showing money being doubled. Nothing is ever returned. In a variant, a small test amount is returned once to build trust before the victim sends a large amount that is never returned.",
    },
];

// ─────────────────────────────────────────────────────────────────────────────
export default function CryptoScamsPage() {
    return (
        <DefaultLayout>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLd(faqStructured) }}
            />

            <main className="min-h-screen overflow-x-hidden">

                {/* ── Hero ─────────────────────────────────────────────────── */}
                <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-gray-950 dark:via-gray-900 dark:to-emerald-950 pt-16 pb-20 sm:pt-20 sm:pb-24 px-3 sm:px-4">
                    <div className="pointer-events-none absolute inset-0 -z-10">
                        <div className="absolute top-10 left-1/4 w-96 h-96 bg-emerald-300/10 rounded-full blur-3xl animate-pulse" />
                        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-300/10 rounded-full blur-3xl animate-pulse delay-700" />
                        <div className="absolute top-1/2 right-0 w-64 h-64 bg-green-300/10 rounded-full blur-3xl animate-pulse delay-1000" />
                    </div>

                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex max-w-full items-start sm:items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/40 dark:to-teal-900/40 text-emerald-700 dark:text-emerald-300 text-xs font-semibold mb-6 border border-emerald-200 dark:border-emerald-800 shadow-sm text-left">
                            <Bitcoin className="h-4 w-4 animate-pulse flex-shrink-0 mt-0.5 sm:mt-0" />
                            <span className="min-w-0">Crypto fraud stole ₹1,800+ crore from Indians in 2024  and 70% of victims never recover anything</span>
                        </div>

                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
                            Cryptocurrency Scams in India:{" "}
                            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 bg-clip-text text-transparent">
                                Bitcoin Fraud, Fake Exchanges & the Tricks Stealing Crores Every Month
                            </span>
                        </h1>

                        <p className="text-base sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                            The dashboard shows profits. The support team says one more fee
                            will unlock your withdrawal. The influencer looks exactly like the
                            real one. And the exchange URL is almost identical to the original.
                            Crypto fraud is sophisticated, fast-moving, and almost always
                            irreversible once funds are transferred. Here's exactly how every
                            variant works  and what stops each one.
                        </p>

                        {/* Stats strip */}
                        <div className="grid grid-cols-1 min-[420px]:grid-cols-2 lg:flex lg:flex-wrap justify-center gap-3 sm:gap-4 mb-12">
                            {[
                                { value: "₹1,800 Cr+", label: "Crypto fraud losses in India (2024)", icon: <IndianRupee className="h-4 w-4" /> },
                                { value: "27,000+", label: "Crypto-linked FIR cases in 2024", icon: <AlertTriangle className="h-4 w-4" /> },
                                { value: "70%", label: "Victims who recover nothing", icon: <TrendingDown className="h-4 w-4" /> },
                                { value: "1930", label: "Cyber Crime Helpline", icon: <Shield className="h-4 w-4" /> },
                            ].map(({ value, label, icon }, i) => (
                                <div
                                    key={label}
                                    className="group flex flex-col items-center px-4 sm:px-6 py-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 lg:min-w-[130px]"
                                    style={{ animationDelay: `${i * 100}ms` }}
                                >
                                    <div className="text-emerald-500 mb-1 group-hover:scale-110 transition-transform">{icon}</div>
                                    <span className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">{value}</span>
                                    <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-center">{label}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <ReportScamButton className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-5 sm:px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-sm shadow-lg hover:shadow-emerald-300/50 hover:scale-105 transition-all duration-300 cursor-pointer">
                                <ShieldAlert className="h-5 w-5" />
                                Report Crypto Fraud
                                <ArrowRight className="h-4 w-4" />
                            </ReportScamButton>
                            <a
                                href="#scam-types"
                                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-5 sm:px-8 py-4 rounded-xl bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 font-semibold text-sm border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
                            >
                                See All Scam Types
                                <ChevronDown className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </section>

                <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16 sm:space-y-20">

                    {/* ── Why Crypto Fraud Is Uniquely Dangerous ──────────── */}
                    <section>
                        <div className="grid lg:grid-cols-2 gap-10 items-center">
                            <div>
                                <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-semibold mb-4">
                                    Why It's So Hard to Recover From
                                </span>
                                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-6 leading-snug">
                                    Why Crypto Fraud Is the Hardest Form of Financial Crime to Reverse
                                </h2>
                                <div className="space-y-4 text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                                    <p>
                                        Most financial fraud  UPI, bank transfer, credit card  benefits from
                                        chargeback mechanisms, freezeable bank accounts, and a domestic
                                        regulatory structure that can intervene. Cryptocurrency removes most of
                                        these protections by design.
                                    </p>
                                    <p>
                                        On-chain transfers are final within minutes. Scammers route funds through
                                        crypto mixers (tumbling services that break the transaction trail),
                                        convert to multiple other coins (chain-hopping), and cash out through
                                        unregulated peer-to-peer exchanges in jurisdictions that share no data
                                        with Indian authorities. The technical irreversibility is the scam's
                                        primary advantage over other fraud types.
                                    </p>
                                    <p>
                                        Additionally, crypto's association with complexity and volatility creates
                                        a psychological cover  victims sometimes blame market movements rather
                                        than fraud, delaying the report that might have enabled recovery.
                                        India's 30% crypto tax and TDS framework also means many victims are
                                        reluctant to report because they never declared the original holdings.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/40 rounded-2xl p-5 sm:p-8 border border-emerald-100 dark:border-emerald-900 space-y-5">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                                        <Info className="h-5 w-5 text-white" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 dark:text-white text-lg">The Rules That Never Change in Crypto</h3>
                                </div>
                                <ul className="space-y-4">
                                    {[
                                        { icon: XCircle, color: "text-red-500", text: "No legitimate exchange, platform, or person can double your Bitcoin. 'Send BTC, get 2x back' is always a scam  with no exceptions." },
                                        { icon: XCircle, color: "text-red-500", text: "Legitimate exchanges never charge a 'tax clearance fee' or 'KYC hold fee' before allowing withdrawals. Withdrawal fees (gas, network fees) are deducted automatically  never charged in advance." },
                                        { icon: XCircle, color: "text-red-500", text: "No real crypto investment guarantees fixed daily or weekly returns. Guaranteed returns in crypto are the defining signature of a scam." },
                                        { icon: CheckCircle2, color: "text-green-500", text: "FIU-IND registration is publicly verifiable. Before using any Indian crypto exchange, check the FIU-IND registered entity list at fiuindia.gov.in." },
                                        { icon: CheckCircle2, color: "text-green-500", text: "Always access exchanges by typing the exact URL yourself or from a bookmarked link  never from a URL in a Telegram, WhatsApp, or SMS message." },
                                    ].map(({ icon: Icon, color, text }) => (
                                        <li key={text} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                                            <Icon className={`h-4 w-4 ${color} flex-shrink-0 mt-0.5`} />
                                            {text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* ── Crypto Scam Scale + Image ────────────────────────────────────────────── */}
                    <section aria-labelledby="crypto-scale-heading">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                                    Official 2024 Data
                                </span>
                                <h2
                                    id="crypto-scale-heading"
                                    className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-2 mb-4"
                                >
                                    How Big Is Cryptocurrency Fraud in India Right Now?
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                    Crypto fraud is the fastest-growing category of investment fraud in India.
                                    The irreversible nature of on-chain transactions  combined with the complexity
                                    of the technology  makes it uniquely devastating. Unlike UPI fraud, there is
                                    no bank to call and no chargeback mechanism. Speed of reporting is everything.
                                </p>
                                <div className="grid grid-cols-1 min-[420px]:grid-cols-2 gap-4">
                                    {[
                                        { label: "Estimated total stolen by cryptocurrency scams in India in 2024", value: "₹1,800+ Cr", color: "from-emerald-500 to-teal-600" },
                                        { label: "Crypto fraud cases registered by Indian law enforcement in 2024", value: "8,600+", color: "from-red-500 to-rose-600" },
                                        { label: "Average financial loss per Indian crypto fraud victim", value: "₹21 Lakh", color: "from-orange-500 to-amber-600" },
                                        { label: "Crypto transactions on-chain are irreversible once confirmed", value: "100%", color: "from-violet-500 to-purple-600" },
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
                                    alt="Cryptocurrency investment verification and fraud security check  how to identify fake crypto exchanges, rug pull scams, Bitcoin doubling fraud, and pig butchering crypto investment scams in India, RakshaAI"
                                    title="How to Identify Cryptocurrency Scams and Fake Exchanges in India | RakshaAI"
                                    width={500}
                                    height={500}
                                    className="object-contain drop-shadow-2xl max-w-full h-auto rounded-3xl"
                                />
                            </div>
                        </div>
                    </section>

                    {/* ── Checker CTA Bridge ───────────────────────────────── */}
                    <section aria-label="Verify before you invest">
                        <div className="rounded-2xl border border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-950/40 p-6 sm:p-8">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-900 flex items-center justify-center">
                                    <Shield className="h-5 w-5 text-teal-700 dark:text-teal-300" />
                                </div>
                                <div>
                                    <h2 className="text-lg font-extrabold text-gray-900 dark:text-white">Check a crypto platform before you deposit a single rupee.</h2>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Paste the platform URL or the sender&apos;s phone number into RakshaAI. Instant scam check  no login, completely free.</p>
                                </div>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-3">
                                <Link href="/website-safety-checker" className="group flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-teal-400 dark:hover:border-teal-600 hover:shadow-md transition-all duration-200">
                                    <span className="text-xl">🌐</span>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-bold text-gray-900 dark:text-white">Website Safety Checker</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">Check if a crypto exchange URL is legitimate or a phishing clone</p>
                                    </div>
                                    <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-teal-600 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                                </Link>
                                <Link href="/phone-number-checker" className="group flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-teal-400 dark:hover:border-teal-600 hover:shadow-md transition-all duration-200">
                                    <span className="text-xl">📞</span>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-bold text-gray-900 dark:text-white">Phone Number Checker</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">Check if the person who sent you this investment tip is a known scammer</p>
                                    </div>
                                    <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-teal-600 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* ── 8 Scam Types ─────────────────────────────────────── */}
                    <section id="scam-types">
                        <div className="text-center mb-12">
                            <span className="inline-block px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-xs font-semibold mb-4">
                                Every Variant
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                8 Types of Cryptocurrency Scams Targeting Indians Right Now
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-base">
                                From polished exchange spoofs to anonymous Telegram pump-and-dump rooms 
                                each uses a different entry point to reach the same outcome.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-5">
                            {scamTypes.map(({ icon: Icon, color, bg, border, title, desc }) => (
                                <div
                                    key={title}
                                    className={`group flex flex-col min-[420px]:flex-row items-start gap-4 sm:gap-5 p-5 sm:p-6 rounded-2xl border ${bg} ${border} hover:shadow-lg transition-all duration-300`}
                                >
                                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                                        <Icon className="h-6 w-6 text-white" />
                                    </div>
                                    <div className="min-w-0">
                                        <h3 className="font-bold text-gray-900 dark:text-white text-base mb-1">{title}</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── Fake Exchange Step-by-Step ───────────────────────── */}
                    <section>
                        <div className="text-center mb-12">
                            <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-semibold mb-4">
                                The Full Playbook
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                How a Fake Crypto Exchange Scam Works  Phase by Phase
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-base">
                                The same five-phase cycle repeats across hundreds of fake exchanges simultaneously.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="hidden sm:block absolute left-[27px] top-10 bottom-10 w-0.5 bg-gradient-to-b from-emerald-300 via-orange-300 to-red-300 dark:from-emerald-800 dark:via-orange-800 dark:to-red-800" />
                            <div className="space-y-5">
                                {exchangeSteps.map(({ step, color, bg, border, title, desc, urgent }) => (
                                    <div key={step} className="relative flex gap-3 sm:gap-6 items-start">
                                        <div className={`relative z-10 flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center text-white font-extrabold text-sm shadow-lg`}>
                                            {step}
                                            {urgent && <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-400 animate-ping" />}
                                        </div>
                                        <div className={`min-w-0 flex-1 p-4 sm:p-6 rounded-2xl border ${bg} ${border} hover:shadow-md transition-all`}>
                                            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                                                <h3 className="font-bold text-gray-900 dark:text-white text-base">{title}</h3>
                                                {urgent && (
                                                    <span className="px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400 text-xs font-bold">
                                                        TRAP ACTIVATED
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ── Real Story ────────────────────────────────────────── */}
                    <section className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-5 sm:p-12 border border-gray-100 dark:border-gray-800">
                        <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-semibold mb-4">
                            A Real Account
                        </span>
                        <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
                            "The Dashboard Showed ₹9 Lakh in Profit. Then They Asked for ₹1.8 Lakh in Tax."  A Real Account
                        </h2>
                        <div className="grid lg:grid-cols-2 gap-8 text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                            <div className="space-y-4">
                                <p>
                                    Rahul (name changed), a 33-year-old IT engineer from Pune, joined a
                                    Telegram group in November 2024 called 'Crypto India Alpha Signals'.
                                    The group had 12,000 members, regular price-call posts, and testimonials
                                    from people claiming large gains. After following some free signals that
                                    appeared to be accurate, Rahul trusted the group.
                                </p>
                                <p>
                                    A group admin privately messaged him about a 'private exchange with
                                    institutional pricing  not available to the public'. The site looked
                                    exactly like a major international exchange and had an SSL certificate.
                                    Rahul deposited ₹2 lakh in USDT (converted from INR via a domestic
                                    exchange and transferred out). The dashboard immediately showed trading
                                    activity and profits.
                                </p>
                                <p>
                                    Over six weeks, following the admin's 'exclusive signals', Rahul's
                                    dashboard balance grew to ₹11 lakh. He deposited an additional ₹3 lakh
                                    impressed by the returns. When he attempted his first withdrawal  ₹50,000
                                     he was told a 30% 'profit tax clearance' of ₹3.3 lakh was required
                                    before any withdrawal could be processed under 'Indian PMLA compliance'.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <p>
                                    He paid ₹1.8 lakh from savings, expecting the full balance to be released.
                                    The withdrawal was then blocked pending 'anti-money laundering verification'
                                     requiring another ₹2 lakh deposit. At this point Rahul typed the exchange
                                    name into Google directly and found the real exchange's domain  it was
                                    entirely different from the URL he had been using. The site he had used had
                                    been registered 49 days earlier.
                                </p>
                                <p>
                                    Total money deposited and lost: ₹6.8 lakh. Reported to 1930  a freeze was
                                    placed on one domestic account linked to the initial INR transfer but the
                                    funds had already moved. Cybercrime.gov.in complaint filed; investigation
                                    ongoing. The Telegram group vanished within 12 hours of Rahul's report.
                                </p>
                                <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border border-emerald-200 dark:border-emerald-800">
                                    <p className="text-sm font-bold text-emerald-700 dark:text-emerald-300 mb-2">The Check That Would Have Protected ₹6.8 Lakh:</p>
                                    <p className="text-sm text-gray-700 dark:text-gray-300">
                                        The exchange domain's WHOIS registration date (49 days old) and the exact URL
                                        mismatch with the real platform would have been visible in under 60 seconds.
                                        Any platform shared via a Telegram private message should be independently
                                        verified against the official URL before a single rupee is deposited.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ── Domain Spoofing Deep Dive ─────────────────────────── */}
                    <section className="bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-950/50 dark:to-gray-950/30 rounded-2xl p-5 sm:p-12 border border-slate-100 dark:border-slate-800">
                        <span className="inline-block px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900/40 text-slate-700 dark:text-slate-300 text-xs font-semibold mb-4">
                            Spotting Fake Exchanges
                        </span>
                        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6">
                            How to Tell a Fake Crypto Exchange from a Real One  Verified Checks
                        </h2>
                        <div className="grid lg:grid-cols-2 gap-8 text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                            <div className="space-y-4">
                                <p>
                                    Fake exchanges invest heavily in visual cloning  the layout, fonts, colours,
                                    and even the API-linked price tickers are copied precisely. What they cannot
                                    fake is the domain registration date, the FIU-IND entry, and their own
                                    behaviour under independent scrutiny.
                                </p>
                                <p>
                                    These checks take 3–5 minutes and are the most reliable protection against
                                    fake exchange fraud. Run them before any first deposit, regardless of who
                                    referred you to the platform.
                                </p>
                            </div>
                            <div className="space-y-3">
                                {[
                                    {
                                        step: "1",
                                        title: "Check domain WHOIS registration date",
                                        desc: "Go to who.is or whois.domaintools.com and enter the exchange URL. Legitimate exchanges like WazirX, CoinDCX, and ZebPay have registration dates from 2017–2019. Any 'established exchange' registered within the last 6–12 months is a red flag.",
                                    },
                                    {
                                        step: "2",
                                        title: "Verify FIU-IND registration",
                                        desc: "Go to fiuindia.gov.in and check the list of registered Virtual Digital Asset Service Providers under PMLA. Every legitimate Indian crypto exchange must appear here. If the exchange you're evaluating does not appear, do not use it.",
                                    },
                                    {
                                        step: "3",
                                        title: "Cross-check the exact URL character by character",
                                        desc: "On a desktop browser, examine the full URL: 'wazirx.com' vs 'wazirx-pro.com' vs 'waz1rx.com'. Scammers exploit mobile screen limitations where only the first part of the URL is visible. Always use desktop for URL verification.",
                                    },
                                    {
                                        step: "4",
                                        title: "Test the withdrawal process with a trivial amount first",
                                        desc: "Before depositing any significant amount, test if you can withdraw a small amount (₹100 equivalent) without being asked to pay a fee. Any exchange that demands upfront fees before processing a withdrawal is fraudulent.",
                                    },
                                ].map(({ step, title, desc }) => (
                                    <div key={step} className="flex items-start gap-3 sm:gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 text-sm">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold text-xs">
                                            {step}
                                        </div>
                                        <div className="min-w-0">
                                            <p className="font-semibold text-gray-900 dark:text-white mb-0.5">{title}</p>
                                            <p className="text-gray-600 dark:text-gray-400">{desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* URL comparison table */}
                        <div className="mt-8 overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800">
                            <table className="min-w-[680px] w-full text-sm overflow-hidden">
                                <thead>
                                    <tr className="bg-gray-100 dark:bg-gray-800">
                                        <th className="px-4 py-3 text-left font-bold text-gray-700 dark:text-gray-200">Real Exchange</th>
                                        <th className="px-4 py-3 text-left font-bold text-gray-700 dark:text-gray-200">Real Domain</th>
                                        <th className="px-4 py-3 text-left font-bold text-red-600 dark:text-red-400">Common Fake Domains Used by Scammers</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                                    {[
                                        { real: "WazirX", domain: "wazirx.com", fakes: "wazirx-pro.com / waz1rx.com / wazirxindia.net" },
                                        { real: "CoinDCX", domain: "coindcx.com", fakes: "coindcx-pro.in / coin-dcx.com / coindcxindia.net" },
                                        { real: "Binance", domain: "binance.com", fakes: "binance-india.net / binancepro.in / binance-global.co" },
                                        { real: "ZebPay", domain: "zebpay.com", fakes: "zebpay-india.com / zeb-pay.in / zebpayindia.net" },
                                        { real: "CoinSwitch", domain: "coinswitch.co", fakes: "coinswitch-pro.com / coin-switch.in / coinswitchindia.net" },
                                    ].map(({ real, domain, fakes }) => (
                                        <tr key={real} className="bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                                            <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">{real}</td>
                                            <td className="px-4 py-3 font-mono text-emerald-600 dark:text-emerald-400">{domain}</td>
                                            <td className="px-4 py-3 font-mono text-red-500 dark:text-red-400 text-xs">{fakes}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <p className="text-xs text-gray-400 mt-2">These fake domains are documented scam examples  never use them.</p>
                        </div>
                    </section>

                    {/* ── Legitimate Exchange vs. Crypto Scam: Split Section ───────────────────────── */}
                    <section
                        aria-labelledby="legit-vs-scam-crypto-heading"
                        className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-lg lg:min-h-[520px]"
                    >
                        {/* LEFT  content */}
                        <div className="p-5 sm:p-10 bg-white dark:bg-gray-900 flex flex-col justify-center">
                            <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-semibold mb-4 self-start">
                                Quick Reference
                            </span>
                            <h2
                                id="legit-vs-scam-crypto-heading"
                                className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-6 leading-snug"
                            >
                                Legitimate Crypto Exchange vs. Fake Platform  Know the Difference
                            </h2>
                            <div className="space-y-3 mb-6">
                                <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-xl border border-green-200 dark:border-green-900">
                                    <p className="text-xs font-bold text-green-700 dark:text-green-400 mb-2 uppercase tracking-wide">
                                        Legitimate Exchange
                                    </p>
                                    <ul className="space-y-1.5 text-sm text-gray-700 dark:text-gray-300">
                                        {[
                                            "Registered with FIU-IND under India's PMLA framework  verifiable on the FIU-IND website",
                                            "Withdrawals process without any 'tax clearance fee', 'KYC deposit', or 'network upgrade hold'",
                                            "Exact domain matches official URL  e.g. coindcx.com, not coindcx-pro.com or coindcx.net",
                                            "No guaranteed returns or daily profit promises  real crypto trading always carries risk",
                                        ].map((item) => (
                                            <li key={item} className="flex items-start gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-xl border border-red-200 dark:border-red-900">
                                    <p className="text-xs font-bold text-red-700 dark:text-red-400 mb-2 uppercase tracking-wide">
                                        Fake Crypto Platform
                                    </p>
                                    <ul className="space-y-1.5 text-sm text-gray-700 dark:text-gray-300">
                                        {[
                                            "Shared exclusively via Telegram, WhatsApp, or a romantic contact  never independently discoverable",
                                            "Dashboard shows extraordinary daily gains  numbers are fabricated, no real blockchain transaction exists",
                                            "Every withdrawal attempt triggers a new fee: tax clearance, KYC deposit, anti-money laundering hold",
                                            "Support is only a Telegram handle  no verifiable phone number, registered address, or official email",
                                        ].map((item) => (
                                            <li key={item} className="flex items-start gap-2">
                                                <XCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-900">
                                <p className="text-xs font-bold text-amber-700 dark:text-amber-400 mb-1 uppercase tracking-wide">
                                    The URL Check
                                </p>
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    Before depositing on any exchange: copy the URL and compare it letter-by-letter
                                    against the official domain on a desktop browser. On mobile, the full URL is often
                                    truncated  this is exactly what scammers rely on.
                                </p>
                            </div>
                        </div>
                        {/* RIGHT  full-height image */}
                        <div className="relative h-full min-h-[260px] sm:min-h-[400px] overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-600" />
                            <Image
                                src="/image/indian-woman-checking-suspicious-scam-call-rakshaai.jpg"
                                alt="Indian person verifying a suspicious cryptocurrency exchange website  how to identify fake crypto exchanges, rug pull tokens, Bitcoin doubling scams, and pig butchering investment fraud in India, RakshaAI"
                                title="Verify Crypto Exchange and Identify Bitcoin Scams in India | RakshaAI"
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                    </section>

                    {/* ── Red Flags ─────────────────────────────────────────── */}
                    <section>
                        <div className="text-center mb-12">
                            <span className="inline-block px-3 py-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-xs font-semibold mb-4">
                                Warning Signs
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                10 Red Flags of a Cryptocurrency Scam
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-base">
                                Any single one of these warrants full stop and independent verification before proceeding.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {redFlags.map((flag, i) => (
                                <div
                                    key={flag}
                                    className="flex items-start gap-4 p-5 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md hover:border-emerald-200 dark:hover:border-emerald-800 transition-all duration-200"
                                >
                                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center text-white text-xs font-bold">
                                        {String(i + 1).padStart(2, "0")}
                                    </div>
                                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{flag}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── Myth vs Reality ───────────────────────────────────── */}
                    <section>
                        <div className="text-center mb-12">
                            <span className="inline-block px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-xs font-semibold mb-4">
                                Myth Busting
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                Crypto Scam Myths vs. Reality
                            </h2>
                        </div>
                        <div className="space-y-4">
                            {myths.map(({ myth, fact }) => (
                                <div
                                    key={myth}
                                    className="grid sm:grid-cols-2 gap-px rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm"
                                >
                                    <div className="flex items-start gap-3 p-5 bg-red-50 dark:bg-red-950/30">
                                        <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="text-xs font-bold text-red-600 dark:text-red-400 mb-1 uppercase tracking-wide">Myth</p>
                                            <p className="text-sm text-gray-700 dark:text-gray-300">{myth}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3 p-5 bg-green-50 dark:bg-green-950/30">
                                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="text-xs font-bold text-green-600 dark:text-green-400 mb-1 uppercase tracking-wide">Reality</p>
                                            <p className="text-sm text-gray-700 dark:text-gray-300">{fact}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── Recovery Steps ────────────────────────────────────── */}
                    <section>
                        <div className="text-center mb-12">
                            <span className="inline-block px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-xs font-semibold mb-4">
                                What To Do Now
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                Think You've Been Scammed? Do This in the Next 60 Minutes.
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-base">
                                Speed matters more in crypto fraud than almost any other financial crime. Every step below should be taken as fast as possible.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="relative w-full rounded-2xl overflow-hidden mb-8 shadow-md">
                                <Image
                                    src="/image/upi-scam-recovery-5-steps-emergency-guide-india.jpg"
                                    alt="Emergency recovery steps after falling victim to a cryptocurrency scam or fake exchange fraud in India  how to call 1930 cyber crime helpline, report to cybercrime.gov.in, freeze accounts, and contact blockchain analysis firms, RakshaAI"
                                    title="Cryptocurrency Scam Recovery Steps India  What To Do After Bitcoin Fraud | RakshaAI"
                                    width={1200}
                                    height={480}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            <div className="hidden sm:block absolute left-[27px] top-10 bottom-10 w-0.5 bg-gradient-to-b from-red-300 via-amber-300 to-emerald-300 dark:from-red-800 dark:via-amber-800 dark:to-emerald-800" />
                            <div className="space-y-5">
                                {recoverySteps.map(({ step, title, desc, urgent }) => (
                                    <div key={step} className="relative flex gap-3 sm:gap-6 items-start">
                                        <div className={`relative z-10 flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-white font-extrabold text-sm shadow-lg ${urgent ? "bg-gradient-to-br from-red-500 to-rose-600" : "bg-gradient-to-br from-emerald-500 to-teal-600"}`}>
                                            {step}
                                            {urgent && <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-400 animate-ping" />}
                                        </div>
                                        <div className={`min-w-0 flex-1 p-4 sm:p-6 rounded-2xl border hover:shadow-md transition-all ${urgent ? "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-900" : "bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800"}`}>
                                            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                                                <h3 className="font-bold text-gray-900 dark:text-white text-base">{title}</h3>
                                                {urgent && <span className="px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400 text-xs font-bold">DO FIRST</span>}
                                            </div>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ── Official Resources ────────────────────────────────── */}
                    <section className="rounded-2xl overflow-hidden border border-emerald-100 dark:border-emerald-900">
                        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 px-5 sm:px-8 py-6">
                            <div className="flex items-start sm:items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                                    <BadgeCheck className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-extrabold text-white">Report Crypto Fraud  Official Channels</h2>
                                    <p className="text-emerald-100 text-sm">Where to report and how to verify exchange legitimacy</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-emerald-50 dark:bg-emerald-950/30 p-5 sm:p-8">
                            <div className="grid sm:grid-cols-2 gap-6">
                                {[
                                    {
                                        label: "National Cyber Crime Portal",
                                        url: "cybercrime.gov.in",
                                        desc: "File your complaint with wallet addresses, exchange URLs, transaction hashes, and communication screenshots",
                                    },
                                    {
                                        label: "Cyber Crime Helpline",
                                        url: "1930",
                                        desc: "Call immediately if INR was transferred via bank or UPI to fund a crypto purchase  account freeze window is 30–60 minutes",
                                    },
                                    {
                                        label: "FIU-IND  Registered Exchanges List",
                                        url: "fiuindia.gov.in",
                                        desc: "Verify any Indian crypto exchange is PMLA-registered before depositing funds",
                                    },
                                    {
                                        label: "SEBI SCORES Portal",
                                        url: "scores.sebi.gov.in",
                                        desc: "Report if the platform falsely claimed SEBI registration or offered regulated securities as part of crypto fraud",
                                    },
                                    {
                                        label: "Chainabuse",
                                        url: "chainabuse.com",
                                        desc: "Report fraudulent wallet addresses  used by global law enforcement and blockchain analytics firms",
                                    },
                                    {
                                        label: "Google Safe Browsing Report",
                                        url: "safebrowsing.google.com/safebrowsing/report_phish",
                                        desc: "Report fake exchange domains to trigger browser warnings for future users who visit the same URL",
                                    },
                                ].map(({ label, url, desc }) => (
                                    <div key={label} className="flex items-start gap-3 p-4 bg-white dark:bg-gray-900 rounded-xl border border-emerald-100 dark:border-emerald-900">
                                        <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                        <div className="min-w-0">
                                            <p className="font-semibold text-gray-900 dark:text-white text-sm mb-0.5">{label}</p>
                                            <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400 mb-1 break-all">{url}</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">{desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ── From the RakshaAI Blog ─────────────────────────────── */}
                    <section>
                        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-3">
                            Recent Crypto Fraud Cases &amp; Deep Dives
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
                            Time-stamped guides from the RakshaAI blog covering the latest crypto and investment fraud patterns in India.
                        </p>
                        <div className="grid sm:grid-cols-3 gap-4">
                            {[
                                { href: '/blog/crypto-investment-scam-india-2026', title: 'Crypto Investment Scam India 2026: 8 Red Flags of Fake Platforms', desc: 'How fake exchanges and Telegram trading groups take Indian investors for lakhs.' },
                                { href: '/blog/stock-market-tip-scam-india', title: 'Stock Market Tip Scam: Fake SEBI Advisors and Pump-and-Dump', desc: 'The WhatsApp and Telegram stock tip playbook that feeds crypto fraud too.' },
                                { href: '/blog/got-scammed-online-india-what-to-do', title: 'Got Scammed Online? Do These 5 Things in 30 Minutes', desc: 'The exact recovery steps, from calling 1930 to filing at cybercrime.gov.in.' },
                            ].map((a) => (
                                <Link key={a.href} href={a.href} className="group flex flex-col gap-2 p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all">
                                    <h3 className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug">{a.title}</h3>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed flex-1">{a.desc}</p>
                                    <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">Read article &rarr;</span>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* ── FAQ ───────────────────────────────────────────────── */}
                    <section>
                        <div className="mb-10">
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-3">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400">
                                Honest answers to the most common questions about cryptocurrency fraud in India.
                            </p>
                        </div>
                        <div className="space-y-3">
                            {faqs.map(({ q, a }) => (
                                <details
                                    key={q}
                                    className="group rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm"
                                >
                                    <summary className="cursor-pointer list-none flex items-center justify-between p-5 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                        <span className="text-sm font-semibold text-gray-900 dark:text-white pr-4">{q}</span>
                                        <svg
                                            className="ml-4 h-4 w-4 flex-shrink-0 text-gray-400 transition-transform duration-200 group-open:rotate-180"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            aria-hidden
                                        >
                                            <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </summary>
                                    <div className="px-5 pb-5 text-sm text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-50 dark:border-gray-800">
                                        <div className="pt-4">{a}</div>
                                    </div>
                                </details>
                            ))}
                        </div>
                    </section>

                    {/* ── Final CTA ─────────────────────────────────────────── */}
                    <section className="rounded-2xl bg-gradient-to-br from-emerald-700 via-teal-700 to-green-800 p-5 sm:p-12 text-white text-center shadow-2xl relative overflow-hidden">
                        <div className="pointer-events-none absolute inset-0">
                            <div className="absolute -top-10 -left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
                        </div>
                        <div className="relative z-10">
                            <div className="inline-flex max-w-full items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/10 text-white text-xs font-semibold mb-6 border border-white/20">
                                <Shield className="h-4 w-4 flex-shrink-0" />
                                <span className="min-w-0">Free Phone Number & Website Verification</span>
                            </div>
                            <h2 className="text-2xl sm:text-4xl font-extrabold mb-4 leading-tight">
                                Suspicious Exchange or Crypto Tip?<br className="hidden sm:block" />
                                Check It Before You Transfer.
                            </h2>
                            <p className="text-emerald-100 mb-8 text-sm sm:text-base max-w-xl mx-auto">
                                Check any website or phone number on RakshaAI before trusting it with
                                your crypto. Or report a crypto scam to protect the next investor from
                                the same platform.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <ReportScamButton className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-5 sm:px-8 py-4 rounded-xl bg-white text-emerald-700 font-bold text-sm shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                                    <MessageSquareWarning className="h-5 w-5" />
                                    Report Crypto Fraud
                                    <ArrowRight className="h-4 w-4" />
                                </ReportScamButton>
                                <Link
                                    href="/website-safety-checker"
                                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-5 sm:px-8 py-4 rounded-xl bg-white/10 text-white font-semibold text-sm border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300"
                                >
                                    Check an Exchange URL
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                            <p className="mt-6 text-emerald-200 text-xs">
                                🇮🇳 India-focused crypto scam guidance · Free consumer access · No registration required
                            </p>
                        </div>
                    </section>

                    {/* Related guide  investment scams parent hub */}
                    <section className="py-8 px-4 border-t border-gray-200 dark:border-gray-800">
                        <div className="max-w-4xl mx-auto">
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 font-semibold uppercase tracking-wide">Related Guide</p>
                            <Link
                                href="/scams/investment-scams"
                                className="group flex items-center justify-between p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-400 dark:hover:border-emerald-600 hover:shadow-md bg-white dark:bg-gray-900 transition-all duration-200"
                            >
                                <div>
                                    <p className="font-semibold text-gray-900 dark:text-white text-sm group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                                        Investment Scams India  Complete Guide
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                                        Crypto scams are a subset of investment fraud. See all investment scam types, red flags, and prevention.
                                    </p>
                                </div>
                                <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 flex-shrink-0 ml-3 transition-colors" />
                            </Link>
                        </div>
                    </section>

                </div>
            </main>
        </DefaultLayout>
    );
}
