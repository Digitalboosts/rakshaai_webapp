import type { Metadata } from "next";
import DefaultLayout from "@/components/DefaultLayout";
import Link from "next/link";
import { articleSchema, jsonLd } from "@/lib/seo/schema";
import {
    Shield,
    AlertTriangle,
    CheckCircle2,
    XCircle,
    Smartphone,
    Globe,
    Lock,
    Eye,
    CreditCard,
    Wifi,
    Download,
    MessageSquare,
    Phone,
    Mail,
    Users,
    Key,
    Bell,
    RefreshCw,
    Search,
    ArrowRight,
    ShieldCheck,
    TriangleAlert,
    Fingerprint,
    Zap,
    BookOpen,
    Heart,
    Star,
    BadgeCheck,
    ChevronRight,
} from "lucide-react";

// ── SEO Metadata ───────────────────────────────────────────────────────────────
export const metadata: Metadata = {
    title: "Cyber Fraud Prevention Tips for Indians 2026",
    description:
        "Practical cyber safety tips for Indians: UPI safety, phone scam prevention, phishing detection, safe online shopping. Free guide by RakshaAI.",
    alternates: {
        canonical: "https://rakshaai.co/prevention-tips",
    },
    robots: { index: true, follow: true, "max-snippet": -1 },
    openGraph: {
        title: "Cyber Fraud Prevention Tips for Indians | RakshaAI",
        description:
            "Step-by-step prevention tips for UPI fraud, phone scams, phishing, fake apps, and more written for everyday Indians.",
        url: "https://rakshaai.co/prevention-tips",
        type: "website",
        siteName: "RakshaAI",
        images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Cyber Fraud Prevention Tips for Indians | RakshaAI' }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Cyber Fraud Prevention Tips | RakshaAI",
        description:
            "Practical cyber safety tips for Indians UPI, phone, phishing, online shopping, and more.",
        images: ['/opengraph-image'],
    },
    other: { "geo.region": "IN", language: "en-IN" },
};

const structuredData = articleSchema({
    headline: "Cyber Fraud Prevention Tips for Indians: How to Stay Safe Online in 2026",
    url: "/prevention-tips",
    description:
        "A comprehensive, practical guide to staying safe from cyber fraud in India covering UPI, phone scams, phishing, fake apps, online shopping, social media, and emergency response.",
    datePublished: "2025-01-01",
    dateModified: "2026-06-04",
    section: "Cyber Safety",
    keywords: ["cyber fraud prevention", "UPI safety", "phone scam prevention", "phishing detection"],
});

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Protect Yourself from Online Scams in India",
    "description": "A step-by-step guide to prevent cyber fraud in India  covering UPI safety, phishing detection, phone scam prevention, and what to do if you get scammed.",
    "totalTime": "PT5M",
    "tool": [
        { "@type": "HowToTool", "name": "RakshaAI Website Safety Checker" },
        { "@type": "HowToTool", "name": "RakshaAI UPI ID Checker" },
        { "@type": "HowToTool", "name": "RakshaAI Phone Number Checker" }
    ],
    "step": [
        {
            "@type": "HowToStep",
            "position": "1",
            "name": "Check any suspicious link before clicking",
            "text": "Before clicking any link received via SMS, WhatsApp, or email, paste it into RakshaAI's Website Safety Checker at rakshaai.co/check. This takes under 5 seconds and cross-references the URL against known phishing databases and India-specific scam patterns.",
            "url": "https://rakshaai.co/prevention-tips#phishing"
        },
        {
            "@type": "HowToStep",
            "position": "2",
            "name": "Verify UPI IDs before sending money",
            "text": "Check any UPI ID at rakshaai.co/upi-id-checker before transferring money. Never send money to collect a refund, prize, or cashback  UPI only sends money, it never receives it through a collect request you approve.",
            "url": "https://rakshaai.co/prevention-tips#upi"
        },
        {
            "@type": "HowToStep",
            "position": "3",
            "name": "Never share your OTP with anyone",
            "text": "Your bank, UPI app, or any legitimate company will never ask for your OTP, card PIN, or CVV over the phone. If someone asks for this information, hang up immediately  it is always a scam.",
            "url": "https://rakshaai.co/prevention-tips#upi"
        },
        {
            "@type": "HowToStep",
            "position": "4",
            "name": "Check phone numbers before trusting callers",
            "text": "If you receive an unexpected call from your 'bank' or 'government agency', hang up and call back on the official number from their website or the back of your card. Check any suspicious number at rakshaai.co/phone-number-checker.",
            "url": "https://rakshaai.co/prevention-tips#phone"
        },
        {
            "@type": "HowToStep",
            "position": "5",
            "name": "Act immediately if you are scammed",
            "text": "If you suspect you have been scammed: call 1930 (National Cyber Crime Helpline) immediately, contact your bank to freeze the transaction, file a complaint at cybercrime.gov.in, and report the scammer on RakshaAI to protect other Indians.",
            "url": "https://rakshaai.co/prevention-tips#emergency"
        }
    ]
};

// ── Data ───────────────────────────────────────────────────────────────────────

const pillars = [
    {
        icon: CreditCard,
        color: "from-violet-500 to-purple-600",
        bg: "bg-violet-50 dark:bg-violet-950/30",
        border: "border-violet-200 dark:border-violet-900",
        title: "UPI & Payment Safety",
        anchor: "upi",
    },
    {
        icon: Phone,
        color: "from-red-500 to-rose-600",
        bg: "bg-red-50 dark:bg-red-950/30",
        border: "border-red-200 dark:border-red-900",
        title: "Phone & Call Scams",
        anchor: "phone",
    },
    {
        icon: Globe,
        color: "from-amber-500 to-orange-600",
        bg: "bg-amber-50 dark:bg-amber-950/30",
        border: "border-amber-200 dark:border-amber-900",
        title: "Phishing & Fake Links",
        anchor: "phishing",
    },
    {
        icon: Smartphone,
        color: "from-blue-500 to-cyan-600",
        bg: "bg-blue-50 dark:bg-blue-950/30",
        border: "border-blue-200 dark:border-blue-900",
        title: "App & Device Safety",
        anchor: "apps",
    },
    {
        icon: Users,
        color: "from-pink-500 to-rose-600",
        bg: "bg-pink-50 dark:bg-pink-950/30",
        border: "border-pink-200 dark:border-pink-900",
        title: "Social Media Safety",
        anchor: "social",
    },
    {
        icon: Search,
        color: "from-emerald-500 to-teal-600",
        bg: "bg-emerald-50 dark:bg-emerald-950/30",
        border: "border-emerald-200 dark:border-emerald-900",
        title: "Online Shopping",
        anchor: "shopping",
    },
    {
        icon: Key,
        color: "from-indigo-500 to-blue-600",
        bg: "bg-indigo-50 dark:bg-indigo-950/30",
        border: "border-indigo-200 dark:border-indigo-900",
        title: "Passwords & Accounts",
        anchor: "passwords",
    },
    {
        icon: Zap,
        color: "from-orange-500 to-amber-600",
        bg: "bg-orange-50 dark:bg-orange-950/30",
        border: "border-orange-200 dark:border-orange-900",
        title: "If You Get Scammed",
        anchor: "emergency",
    },
];

const upiTips = [
    {
        icon: CheckCircle2,
        ok: true,
        text: "Always verify the recipient's name on the confirmation screen before entering your UPI PIN. The name shown is what your bank has registered if it says 'Unknown' or is blank, stop.",
    },
    {
        icon: XCircle,
        ok: false,
        text: "Never enter your UPI PIN to receive money. A PIN is only needed to send. Any screen asking for PIN to 'accept' a payment is a scam interface close it immediately.",
    },
    {
        icon: CheckCircle2,
        ok: true,
        text: "Enable transaction limits on your UPI app. Most apps (GPay, PhonePe, Paytm) let you set a per-transaction and daily cap keep it lower than your total balance.",
    },
    {
        icon: XCircle,
        ok: false,
        text: "Never share UPI QR codes via WhatsApp or SMS to 'receive' payment. QR codes send money, they don't receive it. Scammers generate QR codes that deduct money when scanned.",
    },
    {
        icon: CheckCircle2,
        ok: true,
        text: "Enable UPI transaction notifications via SMS not just in-app. If your phone is stolen or your account is compromised, SMS alerts to your registered mobile arrive independently of the app.",
    },
    {
        icon: XCircle,
        ok: false,
        text: "Never accept 'screen sharing' requests from anyone claiming to help you with a UPI issue. Remote access apps like AnyDesk and TeamViewer give full control of your payment apps.",
    },
    {
        icon: CheckCircle2,
        ok: true,
        text: "If you've sent money to a wrong number or a scammer call your bank's 24-hour helpline immediately and call 1930. The faster you report, the higher the chance of reversal.",
    },
    {
        icon: XCircle,
        ok: false,
        text: "Never re-enter your PIN after getting a 'transaction failed' message before confirming via your bank statement. Duplicate PIN entry is a common technique to trigger double deductions.",
    },
];

const phoneTips = [
    {
        title: "Block + Report don't just disconnect",
        desc: "When you receive a suspicious call, disconnect and immediately block the number. Then report it on Sanchar Saathi (sancharsaathi.gov.in) or directly through RakshaAI. Your report may save someone else.",
    },
    {
        title: "Verify 'government officials' independently",
        desc: "Police, CBI, ED, TRAI, and courts do not call to arrest you over the phone. If someone claims to be an official, hang up and call that department's official number (found on the government website). Real authorities send physical notices.",
    },
    {
        title: "Never read out OTPs on a call",
        desc: "No bank, telecom, or government agency will ask you to share an OTP verbally. OTPs sent to your phone are the last line of security sharing them hands control of your account to whoever you tell.",
    },
    {
        title: "Be cautious with 'missed call' callbacks",
        desc: "Premium-rate numbers and international numbers beginning with +92 (Pakistan), +1 (US), or unusual country codes can charge ₹100–₹300 per minute when called back. Do not return calls from unknown international numbers.",
    },
    {
        title: "Ignore 'your SIM will be deactivated' calls",
        desc: "TRAI does not call individuals about SIM deactivation. These calls collect your Aadhaar and account numbers to facilitate SIM swap fraud where your mobile number is ported to a new SIM under the fraudster's control.",
    },
    {
        title: "Trust caller ID sparingly",
        desc: "Caller ID can be spoofed scammers regularly call from numbers that appear to be your bank's real helpline. If a call from 'your bank' asks for your card number or CVV, hang up and call your bank's official number from the back of your card.",
    },
];

const phishingTips = [
    {
        step: "1",
        title: "Pause before you click",
        desc: "Phishing works by creating urgency 'Your account will be blocked in 2 hours', 'Your KYC expires today', 'Package could not be delivered'. The urgency is manufactured. Take 30 seconds before clicking any link in an SMS, WhatsApp message, or email.",
    },
    {
        step: "2",
        title: "Check the actual URL not just how it looks",
        desc: "Tap and hold any link on mobile to preview the full URL before opening. Fake URLs use tricks like 'sbi-online-login.com', 'hdfc-bank-update.in', or 'amazon-india.support' they look plausible but are not the real domain. The real SBI internet banking domain is onlinesbi.sbi.",
    },
    {
        step: "3",
        title: "Look for HTTPS but don't rely on it alone",
        desc: "HTTPS means the connection is encrypted, not that the site is legitimate. Thousands of phishing sites use HTTPS. Always verify the exact domain name, not just the padlock icon.",
    },
    {
        step: "4",
        title: "Use RakshaAI to check suspicious links",
        desc: "Before entering any credentials on an unfamiliar site, run the URL through RakshaAI's Website Safety Checker. Our AI cross-references domains against known phishing databases and analyses structural red flags in seconds.",
    },
    {
        step: "5",
        title: "Report phishing SMS to 1909",
        desc: "India's National Cyber Crime Reporting Portal accepts reports of phishing SMS and calls at 1909. Reporting doesn't just document your case DoT uses these reports to block numbers and take down phishing portals faster.",
    },
];

const appTips = [
    {
        icon: Download,
        title: "Download apps only from official stores",
        desc: "Install apps exclusively from Google Play Store or Apple App Store. Avoid APK files shared via WhatsApp, Telegram, or links in SMS these bypass security scanning entirely and frequently contain spyware.",
    },
    {
        icon: Eye,
        title: "Review permissions before granting them",
        desc: "When an app requests access to Contacts, Camera, Microphone, SMS, or Location ask why. A flashlight app doesn't need your contacts. A calculator doesn't need your location. Deny permissions that don't match the app's stated function.",
    },
    {
        icon: RefreshCw,
        title: "Keep your OS and apps updated",
        desc: "Most phone exploits target known vulnerabilities in older software versions. Security patches are released specifically to close these gaps. Enable automatic updates for your operating system and critical apps.",
    },
    {
        icon: Lock,
        title: "Use a screen lock always",
        desc: "Set a PIN, pattern, fingerprint, or face unlock on your phone. A lost or stolen unlocked phone gives immediate access to your UPI apps, banking apps, email essentially your entire financial life.",
    },
    {
        icon: Wifi,
        title: "Avoid public Wi-Fi for financial transactions",
        desc: "Open Wi-Fi networks in cafes, airports, and hotels can be monitored or spoofed. Never log into banking or payment apps on public Wi-Fi. If you must, use a trusted VPN. Your mobile data connection is significantly safer.",
    },
    {
        icon: Bell,
        title: "Enable 'Find My Device' and remote wipe",
        desc: "Both Android and iOS allow you to remotely locate, lock, and wipe your device if lost. Set this up now it takes 2 minutes. A wiped device loses your data; an unwiped stolen phone loses your money.",
    },
];

const socialTips = [
    {
        q: "How much personal information is visible on your profile?",
        a: "Check your Facebook, Instagram, and LinkedIn privacy settings right now. Your phone number, date of birth, home city, workplace, and relationship status give scammers enough to craft a convincing, personalised fraud attempt. Make personal details visible only to friends or connections.",
    },
    {
        q: "Is your profile photo being used without your knowledge?",
        a: "Periodically do a reverse image search of your profile photo (Google Lens or TinEye). Romance scammers and identity fraudsters regularly steal profile photos from Indian social media users to create fake profiles. If your photo appears on unknown accounts, report it immediately to the platform.",
    },
    {
        q: "Are you receiving unsolicited investment advice on social media?",
        a: "Any 'exclusive investment group', WhatsApp or Telegram channel promising high guaranteed returns, or unknown person offering investment tips on Instagram or Facebook is almost certainly a scam. SEBI-registered advisors do not solicit clients via social media DMs.",
    },
    {
        q: "Is someone you met online asking for money or gift cards?",
        a: "Once an online relationship romantic or otherwise reaches the point of a money request, it's a near-certain scam. Genuine people you've never met don't have financial emergencies that only you can solve. The money will not be returned.",
    },
];

const shoppingTips = [
    { icon: BadgeCheck, ok: true, tip: "Buy only from established platforms Amazon, Flipkart, Myntra, Nykaa. If you're trying a new seller, check their rating, number of reviews, and how long they've been active on the platform." },
    { icon: XCircle, ok: false, tip: "Never complete a purchase via WhatsApp, Instagram DM, or Telegram. Social commerce scams collect payment, send nothing, and block you. Always use platform checkout with buyer protection." },
    { icon: BadgeCheck, ok: true, tip: "Pay via UPI or card not bank transfer. UPI and card payments have dispute and chargeback mechanisms. Direct bank transfers to a seller's personal account have no protection." },
    { icon: XCircle, ok: false, tip: "Avoid websites with prices that seem too good to be true ₹500 iPhones, branded shoes at 90% off. These are either counterfeit goods or payment-collection fronts that ship nothing." },
    { icon: BadgeCheck, ok: true, tip: "Check the website's domain age before buying. A site selling 'official government emergency kits' or 'limited release products' registered 2 months ago is a red flag. Use RakshaAI's Website Safety Checker." },
    { icon: XCircle, ok: false, tip: "Never click 'payment links' sent by sellers outside the official app or website. These redirect to fake payment pages designed to harvest your card details." },
];

const passwordTips = [
    {
        priority: "Critical",
        color: "bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300",
        title: "Use a unique password for every financial account",
        desc: "If you use the same password everywhere and one site is breached, every account is compromised. At minimum, use unique passwords for your banking, UPI, and email accounts. A password manager (Google Password Manager, Bitwarden) makes this manageable.",
    },
    {
        priority: "Critical",
        color: "bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300",
        title: "Enable two-factor authentication (2FA) everywhere possible",
        desc: "2FA means even if someone gets your password, they can't log in without a second verification an OTP to your registered mobile or an authenticator app code. Enable this for email, banking, and all social media accounts.",
    },
    {
        priority: "Important",
        color: "bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300",
        title: "Check if your email has been compromised",
        desc: "Visit haveibeenpwned.com and enter your email address. This free service tells you if your email appeared in any known data breach. If it has, change your password for that email and any account using the same password immediately.",
    },
    {
        priority: "Important",
        color: "bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300",
        title: "Never save passwords in browsers on shared devices",
        desc: "Family computers, cyber cafes, or a colleague's laptop are not safe places to save passwords. Always log out completely and decline 'remember password' prompts on any device that isn't yours alone.",
    },
    {
        priority: "Good practice",
        color: "bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300",
        title: "Change critical passwords every 6 months",
        desc: "Set a calendar reminder to change your banking, email, and UPI PINs twice a year. This limits the window of exposure if a breach you're not aware of has already occurred.",
    },
];

const emergencySteps = [
    {
        step: "01",
        urgent: true,
        color: "from-red-500 to-rose-600",
        bg: "bg-red-50 dark:bg-red-950/30",
        border: "border-red-200 dark:border-red-900",
        title: "Call 1930 immediately",
        desc: "India's Cyber Crime Financial Helpline (1930) can attempt to freeze the destination account if you report within 30–60 minutes of a fraudulent transfer. Have your UPI transaction ID or bank reference number ready. This is the single most time-sensitive action.",
    },
    {
        step: "02",
        urgent: true,
        color: "from-orange-500 to-amber-600",
        bg: "bg-orange-50 dark:bg-orange-950/30",
        border: "border-orange-200 dark:border-orange-900",
        title: "Block your card / freeze your account",
        desc: "Call your bank's 24-hour helpline (number on the back of your debit card or on their official website) and ask them to flag or temporarily block your account. This prevents further unauthorised transactions while you report.",
    },
    {
        step: "03",
        urgent: false,
        color: "from-amber-500 to-yellow-600",
        bg: "bg-amber-50 dark:bg-amber-950/30",
        border: "border-amber-200 dark:border-amber-900",
        title: "File a complaint at cybercrime.gov.in",
        desc: "Submit a detailed complaint with all evidence: transaction IDs, contact details of the scammer, screenshots of all conversations, website URLs, and any offer letter or document received. A complaint number is issued immediately for police follow-up.",
    },
    {
        step: "04",
        urgent: false,
        color: "from-blue-500 to-indigo-600",
        bg: "bg-blue-50 dark:bg-blue-950/30",
        border: "border-blue-200 dark:border-blue-900",
        title: "Secure all your accounts",
        desc: "Change passwords for email, banking, and UPI apps immediately especially if you shared any credentials or OTPs. Revoke app permissions for any suspicious app you installed. Check your email account's 'connected apps' and remove anything unrecognised.",
    },
    {
        step: "05",
        urgent: false,
        color: "from-violet-500 to-purple-600",
        bg: "bg-violet-50 dark:bg-violet-950/30",
        border: "border-violet-200 dark:border-violet-900",
        title: "File an FIR at your nearest police station",
        desc: "Beyond the online complaint, file an FIR at your local police station especially for significant amounts. Bring your complaint number from cybercrime.gov.in, printed screenshots, and bank statements. The FIR creates an official record needed for insurance claims and bank dispute processes.",
    },
    {
        step: "06",
        urgent: false,
        color: "from-green-500 to-emerald-600",
        bg: "bg-green-50 dark:bg-green-950/30",
        border: "border-green-200 dark:border-green-900",
        title: "Report to RakshaAI to warn others",
        desc: "Share the scammer's phone number, website, or UPI ID on RakshaAI. Your report becomes part of our database the next person who checks that number or link will see your warning before they lose money. One report can protect thousands.",
    },
];

// ─────────────────────────────────────────────────────────────────────────────
export default function PreventionTipsPage() {
    return (
        <DefaultLayout>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLd([structuredData, howToSchema]) }}
            />

            <main className="min-h-screen">

                {/* ── Hero ──────────────────────────────────────────────────── */}
                <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-violet-50 dark:from-gray-950 dark:via-gray-900 dark:to-indigo-950 pt-20 pb-24 px-4">
                    <div className="pointer-events-none absolute inset-0 -z-10">
                        <div className="absolute top-10 left-1/4 w-96 h-96 bg-indigo-300/10 rounded-full blur-3xl animate-pulse" />
                        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-300/10 rounded-full blur-3xl animate-pulse delay-700" />
                        <div className="absolute top-1/2 right-0 w-64 h-64 bg-blue-300/10 rounded-full blur-3xl animate-pulse delay-1000" />
                    </div>

                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-violet-100 dark:from-indigo-900/40 dark:to-violet-900/40 text-indigo-700 dark:text-indigo-300 text-xs font-semibold mb-6 border border-indigo-200 dark:border-indigo-800 shadow-sm">
                            <ShieldCheck className="h-4 w-4" />
                            Prevention is free. Recovery from scams costs ₹1–₹50 lakh and months of your life.
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
                            Cyber Fraud{" "}
                            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-blue-600 bg-clip-text text-transparent">
                                Prevention Tips
                            </span>{" "}
                            for Indians
                        </h1>

                        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                            India reported <strong>₹22,845 crore</strong> in cyber fraud losses in 2024.
                            Almost every case followed a pattern that with the right knowledge
                            could have been stopped in under 30 seconds. These are the habits,
                            checks, and responses that keep you safe.
                        </p>

                        {/* Stats */}
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            {[
                                { value: "₹22,845 Cr", label: "Cyber fraud losses in India (2024)" },
                                { value: "15 lakh+", label: "Cyber crime complaints filed" },
                                { value: "30 sec", label: "Time a basic check takes" },
                                { value: "1930", label: "Emergency helpline" },
                            ].map(({ value, label }) => (
                                <div
                                    key={label}
                                    className="flex flex-col items-center px-6 py-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 min-w-[130px]"
                                >
                                    <span className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">{value}</span>
                                    <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-center">{label}</span>
                                </div>
                            ))}
                        </div>

                        {/* Jump links */}
                        <div className="flex flex-wrap justify-center gap-2">
                            {pillars.map(({ icon: Icon, color, title, anchor }) => (
                                <a
                                    key={anchor}
                                    href={`#${anchor}`}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-xs font-medium text-gray-700 dark:text-gray-300 hover:border-indigo-300 dark:hover:border-indigo-700 hover:text-indigo-600 dark:hover:text-indigo-400 hover:shadow-md transition-all duration-200"
                                >
                                    <div className={`w-5 h-5 rounded-md bg-gradient-to-br ${color} flex items-center justify-center`}>
                                        <Icon className="h-3 w-3 text-white" />
                                    </div>
                                    {title}
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">

                    {/* ── Intro ─────────────────────────────────────────────── */}
                    <section className="grid lg:grid-cols-2 gap-10 items-center">
                        <div>
                            <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-semibold mb-4">
                                Why Prevention Matters
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-5 leading-snug">
                                Most Scams Are Preventable.<br className="hidden sm:block" /> Here's the Honest Truth.
                            </h2>
                            <div className="space-y-4 text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                                <p>
                                    Cyber fraud doesn't target "unintelligent" people. It targets anyone
                                    who's busy, stressed, in a hurry, or simply doesn't know the specific
                                    trick being used. A senior doctor fell for a fake CBI call. An IIT
                                    engineer lost ₹6 lakh to a fake stock trading group. A homemaker
                                    was scammed via a morphed photo from a fake loan app she downloaded
                                    from Google Play.
                                </p>
                                <p>
                                    The patterns are learnable. Once you know what a 'collect money
                                    request' disguised as a payment looks like, you will never fall for
                                    it. Once you understand that no government official calls to arrest
                                    you, digital arrest scams lose all power. Knowledge is the only
                                    defence that scales.
                                </p>
                                <p>
                                    This guide doesn't patronise you with vague advice like "be careful
                                    online." It gives you specific, testable checks for the exact scams
                                    that are currently targeting people in India right now.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: ShieldCheck, color: "from-indigo-500 to-violet-600", stat: "94%", desc: "Scams are preventable with prior knowledge" },
                                { icon: Zap, color: "from-amber-500 to-orange-600", stat: "30 sec", desc: "Time needed to verify a suspicious link" },
                                { icon: Phone, color: "from-red-500 to-rose-600", stat: "78%", desc: "Job & investment scams start on WhatsApp" },
                                { icon: BookOpen, color: "from-green-500 to-emerald-600", stat: "1 report", desc: "On RakshaAI can protect 1,000+ people" },
                            ].map(({ icon: Icon, color, stat, desc }) => (
                                <div key={stat} className="p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all text-center flex flex-col items-center gap-2">
                                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center`}>
                                        <Icon className="h-5 w-5 text-white" />
                                    </div>
                                    <p className="text-2xl font-extrabold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">{stat}</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 text-center leading-tight">{desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── UPI Safety ───────────────────────────────────────── */}
                    <section id="upi">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg">
                                <CreditCard className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <span className="text-xs font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-wide">Section 01</span>
                                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">UPI &amp; Payment Safety</h2>
                            </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-3xl leading-relaxed">
                            UPI fraud is India's most common cyber crime category. The tricks are not
                            complicated they rely entirely on the victim not knowing one specific fact
                            about how UPI works. These eight rules eliminate the most common attack vectors.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {upiTips.map(({ icon: Icon, ok, text }) => (
                                <div
                                    key={text.slice(0, 30)}
                                    className={`flex items-start gap-4 p-5 rounded-xl border shadow-sm transition-all hover:shadow-md ${ok
                                        ? "bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-900"
                                        : "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-900"
                                        }`}
                                >
                                    <Icon className={`h-5 w-5 flex-shrink-0 mt-0.5 ${ok ? "text-green-600" : "text-red-500"}`} />
                                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{text}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 p-4 rounded-xl bg-violet-50 dark:bg-violet-950/30 border border-violet-200 dark:border-violet-900 flex items-start gap-3">
                            <TriangleAlert className="h-5 w-5 text-violet-600 flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-gray-700 dark:text-gray-300">
                                <strong>The single most important UPI rule:</strong> Your PIN is only needed to <em>send</em> money.
                                If any screen asks for your PIN to receive, accept, or claim money it is a scam, no exceptions.
                            </p>
                        </div>
                    </section>

                    {/* ── Phone Scams ───────────────────────────────────────── */}
                    <section id="phone">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center shadow-lg">
                                <Phone className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <span className="text-xs font-semibold text-red-600 dark:text-red-400 uppercase tracking-wide">Section 02</span>
                                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">Phone &amp; Call Scam Prevention</h2>
                            </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-3xl leading-relaxed">
                            Phone scams succeed because voices feel human and authoritative. A calm,
                            confident caller claiming to be CBI or TRAI creates panic and panic
                            bypasses rational thinking. Understanding what authorities actually do
                            (and never do) over the phone is the antidote.
                        </p>
                        <div className="space-y-4">
                            {phoneTips.map(({ title, desc }, i) => (
                                <div key={title} className="flex items-start gap-5 p-5 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md hover:border-red-200 dark:hover:border-red-900 transition-all">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center text-white font-bold text-xs">
                                        {String(i + 1).padStart(2, "0")}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1">{title}</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── Phishing ──────────────────────────────────────────── */}
                    <section id="phishing">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg">
                                <Globe className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <span className="text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wide">Section 03</span>
                                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">Phishing &amp; Fake Link Prevention</h2>
                            </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-3xl leading-relaxed">
                            Phishing is designed to look exactly like the real thing same logo, same
                            colours, same language. The one thing it can't perfectly replicate is the
                            actual domain name. Learning to check the URL is the single most effective
                            phishing prevention skill.
                        </p>
                        <div className="relative">
                            <div className="hidden sm:block absolute left-[27px] top-10 bottom-10 w-0.5 bg-gradient-to-b from-amber-300 to-orange-300 dark:from-amber-800 dark:to-orange-800" />
                            <div className="space-y-5">
                                {phishingTips.map(({ step, title, desc }) => (
                                    <div key={step} className="relative flex gap-6 items-start">
                                        <div className="relative z-10 flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-extrabold text-sm shadow-lg">{step}</div>
                                        <div className="flex-1 p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all">
                                            <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1">{title}</h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ── App & Device Safety ───────────────────────────────── */}
                    <section id="apps">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center shadow-lg">
                                <Smartphone className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">Section 04</span>
                                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">App &amp; Device Safety</h2>
                            </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-3xl leading-relaxed">
                            Your phone is the most powerful financial instrument you own. Most Indians
                            now manage banking, investments, payments, and identity documents entirely
                            on a single device. Protecting that device protects everything.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-5">
                            {appTips.map(({ icon: Icon, title, desc }) => (
                                <div key={title} className="flex items-start gap-4 p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-900 transition-all group">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Icon className="h-5 w-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1">{title}</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── Social Media ──────────────────────────────────────── */}
                    <section id="social">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center shadow-lg">
                                <Users className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <span className="text-xs font-semibold text-pink-600 dark:text-pink-400 uppercase tracking-wide">Section 05</span>
                                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">Social Media Safety</h2>
                            </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-3xl leading-relaxed">
                            Social media is where most romance scams, investment scams, and fake job
                            offers begin. The information you share publicly also reduces friction for
                            identity theft. Four questions to ask yourself about your current social media presence:
                        </p>
                        <div className="space-y-4">
                            {socialTips.map(({ q, a }) => (
                                <div key={q} className="rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm">
                                    <div className="flex items-start gap-3 p-5 bg-pink-50 dark:bg-pink-950/30">
                                        <MessageSquare className="h-5 w-5 text-pink-500 flex-shrink-0 mt-0.5" />
                                        <p className="text-sm font-semibold text-gray-900 dark:text-white">{q}</p>
                                    </div>
                                    <div className="px-5 pb-5 pt-3 bg-white dark:bg-gray-900">
                                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{a}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── Online Shopping ───────────────────────────────────── */}
                    <section id="shopping">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg">
                                <Search className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">Section 06</span>
                                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">Safe Online Shopping</h2>
                            </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-3xl leading-relaxed">
                            Fake online stores, social media sellers, and counterfeit product sites
                            cost Indians thousands of crores annually. The gap between a real product
                            page and a convincing fake has narrowed significantly these six rules
                            close it again.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {shoppingTips.map(({ icon: Icon, ok, tip }) => (
                                <div
                                    key={tip.slice(0, 30)}
                                    className={`flex items-start gap-4 p-5 rounded-xl border shadow-sm hover:shadow-md transition-all ${ok
                                        ? "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-900"
                                        : "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-900"
                                        }`}
                                >
                                    <Icon className={`h-5 w-5 flex-shrink-0 mt-0.5 ${ok ? "text-emerald-600" : "text-red-500"}`} />
                                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{tip}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── Passwords ─────────────────────────────────────────── */}
                    <section id="passwords">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center shadow-lg">
                                <Key className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide">Section 07</span>
                                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">Passwords &amp; Account Security</h2>
                            </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-3xl leading-relaxed">
                            Most people know passwords should be strong and unique but don't implement
                            it because it feels inconvenient. Here's the practical approach that
                            protects you without requiring you to memorise 40 different passwords.
                        </p>
                        <div className="space-y-4">
                            {passwordTips.map(({ priority, color, title, desc }) => (
                                <div key={title} className="flex items-start gap-4 p-5 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all">
                                    <span className={`flex-shrink-0 px-2 py-1 rounded-lg text-xs font-bold ${color}`}>{priority}</span>
                                    <div>
                                        <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1">{title}</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── If You Get Scammed ────────────────────────────────── */}
                    <section id="emergency" className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8 sm:p-12 border border-gray-100 dark:border-gray-800">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center shadow-lg">
                                <Zap className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <span className="text-xs font-semibold text-orange-600 dark:text-orange-400 uppercase tracking-wide">Section 08 Emergency</span>
                                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">If You've Been Scammed Do This Right Now</h2>
                            </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-10 max-w-3xl leading-relaxed">
                            The first 30–60 minutes after discovering a scam are the difference between
                            partial recovery and total loss. Shame or embarrassment slows people down
                            at exactly the moment speed matters most. Act first process later.
                        </p>
                        <div className="relative">
                            <div className="hidden sm:block absolute left-[27px] top-10 bottom-10 w-0.5 bg-gradient-to-b from-red-300 via-amber-300 to-green-300 dark:from-red-800 dark:via-amber-800 dark:to-green-800" />
                            <div className="space-y-5">
                                {emergencySteps.map(({ step, urgent, color, bg, border, title, desc }) => (
                                    <div key={step} className="relative flex gap-6 items-start">
                                        <div className={`relative z-10 flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center text-white font-extrabold text-sm shadow-lg`}>
                                            {step}
                                            {urgent && <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-400 animate-ping" />}
                                        </div>
                                        <div className={`flex-1 p-6 rounded-2xl border hover:shadow-md transition-all ${bg} ${border}`}>
                                            <div className="flex items-center gap-3 mb-2">
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

                    {/* ── Quick Reference Card ──────────────────────────────── */}
                    <section className="rounded-2xl overflow-hidden border border-indigo-100 dark:border-indigo-900">
                        <div className="bg-gradient-to-r from-indigo-600 to-violet-700 px-8 py-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                                    <Star className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-extrabold text-white">The 10-Second Safety Checklist</h2>
                                    <p className="text-indigo-100 text-sm">Run this before any payment, download, or credential entry</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-indigo-50 dark:bg-indigo-950/30 p-8">
                            <div className="grid sm:grid-cols-2 gap-3">
                                {[
                                    "Did this come to me unsolicited I didn't initiate this contact?",
                                    "Is there urgency pressure  'act in 2 hours or lose access'?",
                                    "Am I being asked to enter my UPI PIN, share an OTP, or download an app?",
                                    "Does the URL/domain match exactly the official website I know?",
                                    "Is this too good to be true  salary, returns, discount, or prize?",
                                    "Would a legitimate organisation actually work this way?",
                                    "Can I verify this independently by calling the real number?",
                                    "Is someone asking for money via WhatsApp or Telegram?",
                                ].map((q, i) => (
                                    <div key={i} className="flex items-start gap-3 p-3 bg-white dark:bg-gray-900 rounded-xl border border-indigo-100 dark:border-indigo-900 text-sm">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white text-xs font-bold">{i + 1}</div>
                                        <span className="text-gray-700 dark:text-gray-300 text-xs leading-relaxed">{q}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4 p-4 bg-white dark:bg-gray-900 rounded-xl border border-indigo-200 dark:border-indigo-800 text-sm text-center">
                                <p className="font-semibold text-gray-900 dark:text-white">If <em>any</em> answer is "yes" pause. Do not proceed until you've verified independently.</p>
                                <p className="text-gray-500 dark:text-gray-400 mt-1 text-xs">Feeling rushed = a deliberate psychological technique. The pressure is artificial. Slow down.</p>
                            </div>
                        </div>
                    </section>

                    {/* ── Final CTA ─────────────────────────────────────────── */}
                    <section className="rounded-2xl bg-gradient-to-br from-indigo-700 via-violet-700 to-blue-800 p-8 sm:p-12 text-white text-center shadow-2xl relative overflow-hidden">
                        <div className="pointer-events-none absolute inset-0">
                            <div className="absolute -top-10 -left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                        </div>
                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-xs font-semibold mb-6 border border-white/20">
                                <Heart className="h-4 w-4" />
                                Built by Indians, protecting Indians
                            </div>
                            <h2 className="text-2xl sm:text-4xl font-extrabold mb-4 leading-tight">
                                Got a Suspicious Message or Number?<br className="hidden sm:block" /> Check It for Free.
                            </h2>
                            <p className="text-indigo-100 mb-8 text-sm sm:text-base max-w-xl mx-auto">
                                Use RakshaAI to check a phone number, website, or UPI ID before you
                                interact with it. Our AI is trained on India-specific fraud patterns and
                                checks in seconds. Completely free, no sign-up needed.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    href="/"
                                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-indigo-700 font-bold text-sm shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                                >
                                    <Shield className="h-5 w-5" />
                                    Check a Number or Website
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                                <Link
                                    href="/scams/upi-fraud"
                                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 text-white font-semibold text-sm border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300"
                                >
                                    Browse Scam Guides
                                    <ChevronRight className="h-4 w-4" />
                                </Link>
                            </div>
                            <p className="mt-6 text-indigo-200 text-xs">
                                🇮🇳 India-focused cyber fraud guidance · Free consumer access · No registration required
                            </p>
                        </div>
                    </section>

                </div>
            </main>
        </DefaultLayout>
    );
}
