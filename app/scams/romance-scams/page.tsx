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
    Heart,
    HeartOff,
    Users,
    IndianRupee,
    ShieldAlert,
    ArrowRight,
    Info,
    BadgeCheck,
    MessageSquareWarning,
    Smartphone,
    Globe,
    Camera,
    UserX,
    ChevronDown,
    Lock,
    Eye,
    MessageCircle,
    Video,
    ImageOff,
    CreditCard,
    Plane,
    FileWarning,
    Search,
} from "lucide-react";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
    title: "Romance Scams India 2026: Types & Warning Signs",
    description:
        "Romance scams in India 2026: fake dating profiles, matrimonial fraud, pig butchering & military scams. Warning signs and recovery steps.",
    alternates: {
        canonical: "https://rakshaai.co/scams/romance-scams",
    },
    robots: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
    openGraph: {
        title: "Romance Scams India 2026: 7 Types, Warning Signs & How to Report | RakshaAI",
        description:
            "All 7 types of romance scams targeting Indians  fake dating profiles, matrimonial fraud, military impersonation, pig butchering, sextortion. How to spot, report and recover.",
        url: "https://rakshaai.co/scams/romance-scams",
        type: "website",
    siteName: 'RakshaAI',
        images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'RakshaAI' }],
  },
    twitter: {
        card: "summary_large_image",
        title: "Romance Scams in India 2026 | RakshaAI",
        description:
            "7 types of romance scams  fake profiles, matrimonial fraud, pig butchering and sextortion. Warning signs and reporting guide for India 2026.",
        images: ['/opengraph-image'],
  },
    other: { "geo.region": "IN", language: "en-IN" },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────
const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Romance Scams in India 2026: 7 Types, Warning Signs & How to Report",
    url: "https://rakshaai.co/scams/romance-scams",
    datePublished: "2024-01-15",
    dateModified: "2026-06-11",
    description:
        "A comprehensive guide to romance scams in India  all 7 types, how fraudsters build manufactured emotional relationships, and the exact steps to report and recover in 2026.",
    author: { "@type": "Organization", name: "RakshaAI", url: "https://rakshaai.co" },
    publisher: { "@type": "Organization", name: "RakshaAI", url: "https://rakshaai.co" },
    inLanguage: "en-IN",
};

const faqStructured = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What are the most common types of romance scams in India in 2026?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The seven most common are: (1) Fake dating profiles / catfishing  29% of complaints. (2) Matrimonial fraud india  22%, targeting users of Shaadi.com, Jeevansathi, and BharatMatrimony. (3) Military romance scams  15%, impersonating Indian Army officers. (4) Social media romance scams via Instagram and Facebook  14%. (5) Pig butchering scam india  8% of cases but 58% of total losses. (6) Oil rig romance scam  7%. (7) Sextortion via fake romance  5%. The NCRB recorded 2.1 lakh romance-related cybercrime complaints in 2025.",
            },
        },
        {
            "@type": "Question",
            name: "How do I know if someone I met online is a romance scammer?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Seven signs: (1) They refuse video calls or only allow brief, controlled calls. (2) They profess deep love within days or weeks. (3) Their photos appear under different names on Google Image Search. (4) They work in an occupation that prevents meetings: military, oil rig, medical mission abroad. (5) They immediately push conversations to WhatsApp or Telegram. (6) Any financial request, no matter how small. (7) They introduce a trading or investment platform.",
            },
        },
        {
            "@type": "Question",
            name: "What is the pig butchering scam and how does it work in India?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The pig butchering scam india is the most sophisticated romance fraud. A scammer builds a romantic relationship over weeks, then introduces a cryptocurrency or forex trading platform they claim to use successfully. They show the victim 'profits' accumulating on the platform dashboard. When the victim tries to withdraw, the platform imposes 'taxes' or 'release fees.' The platform is entirely fake. ₹580 crore was lost to pig butchering in India in 2025. Average loss per victim: ₹18.5 lakh.",
            },
        },
        {
            "@type": "Question",
            name: "What are military romance scams and how do they target Indians?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Military romance scams involve someone posing as an Indian Army officer, CRPF officer, or UN peacekeeper currently deployed. They use stolen photos of real military personnel, create convincing cover stories about deployment, and exploit the respect Indians feel for the military. After weeks of communication, they request money for 'leave travel,' medical treatment, or customs clearance for packages. The Indian Army does not allow personal WhatsApp or dating app use on active deployment.",
            },
        },
        {
            "@type": "Question",
            name: "Can I get my money back after being scammed in a romance scam?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Recovery depends entirely on speed. Call 1930 within 30 minutes of the transfer for the best chance. Within 24 hours: file cybercrime.gov.in complaint, raise a bank dispute, and report on the platform. Recovery within 24–48 hours has approximately 30–40% success; after 7 days the probability drops below 10% as money has moved through multiple accounts. Document everything: conversation screenshots, payment records, the scammer's phone number and profile details.",
            },
        },
        {
            "@type": "Question",
            name: "Is Tinder safe to use in India?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The platform itself has strong security infrastructure. The risk comes from users creating fake profiles using stolen photos. Tinder now has photo verification features  always check if a match is verified. Additional protection: run a reverse image search on their profile photos, insist on video calls before any emotional investment, and never share financial information with matches.",
            },
        },
        {
            "@type": "Question",
            name: "Why do scammers always want to move to WhatsApp or Telegram?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Two reasons: (1) Dating platforms and matrimonial sites have fraud detection algorithms that flag suspicious communication patterns. Moving off-platform avoids this monitoring. (2) WhatsApp and Telegram allow the scammer to continue contact even after the original platform account is reported and deleted. Always be suspicious when a new online contact immediately pushes to move the conversation to a private messaging app.",
            },
        },
        {
            "@type": "Question",
            name: "What can a scammer do with my phone number if I shared it?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "What scammers can do with your phone number: (1) SIM swap fraud  port your number to a new SIM to intercept your bank OTPs. (2) Targeted phishing calls impersonating your bank. (3) Sell your number to other scammer networks. (4) WhatsApp account takeover by requesting the verification OTP. (5) Correlate with other personal data to build a fraud profile. If you shared your number with a suspected romance scammer, enable two-step verification on WhatsApp and Telegram, and alert your bank about the potential SIM swap risk.",
            },
        },
        {
            "@type": "Question",
            name: "What are the dating red flags in online relationships?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Online dating red flags that specifically indicate romance scams: (1) Refusing video calls consistently. (2) Excessive flattery and declarations of love in the first week. (3) Profile photos that appear too professional  no candid everyday photos. (4) Vague or inconsistent personal details across conversations. (5) Any request to move to a different app. (6) Financial discussion of any kind before meeting in person. (7) Investment advice or platform recommendations. (8) Inconsistent timing of messages suggesting a different time zone than their claimed location.",
            },
        },
        {
            "@type": "Question",
            name: "How do I report a romance scam to the police in India?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "How to report a romance scam in India: (1) File on cybercrime.gov.in  select 'Financial Cyber Fraud' or 'Cyber Crime Against Women' depending on the type. (2) Call 1930 if money was involved. (3) Report the profile on the platform where you met the scammer. (4) Visit your nearest cybercrime police station with printed conversation screenshots, the scammer's phone number and profile details, and any payment records. For cases involving intimate content, the complaint category is 'Non-Consensual Intimate Image Sharing.' All romance scam complaints are handled with confidentiality.",
            },
        },
    ],
};

const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://rakshaai.co/" },
        { "@type": "ListItem", position: 2, name: "Scam Categories", item: "https://rakshaai.co/scams/" },
        { "@type": "ListItem", position: 3, name: "Romance Scams", item: "https://rakshaai.co/scams/romance-scams/" },
    ],
};

const itemListData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "7 Types of Romance Scams in India 2026",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Fake Dating Profile Scam  Catfishing India", url: "https://rakshaai.co/scams/romance-scams/catfishing-india/" },
        { "@type": "ListItem", position: 2, name: "Matrimonial Fraud India", url: "https://rakshaai.co/scams/romance-scams/matrimonial-fraud/" },
        { "@type": "ListItem", position: 3, name: "Military Romance Scam", url: "https://rakshaai.co/scams/romance-scams/army-officer-scam/" },
        { "@type": "ListItem", position: 4, name: "Oil Rig Romance Scam", url: "https://rakshaai.co/scams/romance-scams/oil-rig-scam/" },
        { "@type": "ListItem", position: 5, name: "Social Media Romance Scam", url: "https://rakshaai.co/scams/romance-scams/social-media-romance-scam/" },
        { "@type": "ListItem", position: 6, name: "Pig Butchering Scam  Crypto Romance Fraud India", url: "https://rakshaai.co/scams/romance-scams/pig-butchering-scam/" },
        { "@type": "ListItem", position: 7, name: "Sextortion via Fake Romance", url: "https://rakshaai.co/scams/romance-scams/sextortion-india/" },
    ],
};

// ── Scam types ────────────────────────────────────────────────────────────────
const scamTypes = [
    {
        icon: Search,
        emoji: "👤",
        color: "from-rose-500 to-pink-600",
        bg: "bg-rose-50 dark:bg-rose-950/30",
        border: "border-rose-200 dark:border-rose-900",
        title: "Fake Dating Profile Scam  Catfishing India",
        desc: "Scammer creates a convincing fake identity using stolen photos, fabricated professional background, and a carefully constructed personality. Deployed on Tinder, Bumble, Hinge, TrulyMadly, and Woo to build trust before requesting money.",
        risk: "Very High",
        riskColor: "text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/30",
        href: "/scams/romance-scams/catfishing-india/",
        available: true,
    },
    {
        icon: Heart,
        emoji: "💍",
        color: "from-pink-500 to-rose-600",
        bg: "bg-pink-50 dark:bg-pink-950/30",
        border: "border-pink-200 dark:border-pink-900",
        title: "Matrimonial Fraud India  Shaadi.com Impersonation",
        desc: "Scammer creates fake profiles on Shaadi.com, Jeevansathi, or BharatMatrimony impersonating well-settled professionals. After weeks of communication, fabricates a financial emergency requesting money transfer. A uniquely Indian scam category.",
        risk: "Very High",
        riskColor: "text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/30",
        href: "/scams/romance-scams/matrimonial-fraud/",
    },
    {
        icon: Shield,
        emoji: "🏷️",
        color: "from-slate-500 to-gray-600",
        bg: "bg-slate-50 dark:bg-slate-950/30",
        border: "border-slate-200 dark:border-slate-900",
        title: "Military Romance Scam  Army Officer Impersonation",
        desc: "Scammer poses as an Indian Army officer or UN peacekeeper deployed abroad. Builds deep emotional connection over weeks. Then requests money for 'leave travel', medical emergency, or to ship valuable items home. Average loss: ₹2.8 lakh.",
        risk: "Extreme",
        riskColor: "text-red-700 dark:text-red-300 bg-red-100 dark:bg-red-900/40",
        href: "/scams/romance-scams/army-officer-scam/",
        available: true,
    },
    {
        icon: Globe,
        emoji: "🛢️",
        color: "from-orange-500 to-amber-600",
        bg: "bg-orange-50 dark:bg-orange-950/30",
        border: "border-orange-200 dark:border-orange-900",
        title: "Oil Rig Romance Scam  Engineer Abroad Impersonation",
        desc: "Scammer poses as an engineer working on an offshore oil rig, research vessel, or overseas construction project. Profile photos stolen from real engineers on LinkedIn. The isolation excuse prevents video calls and delays in-person meetings indefinitely.",
        risk: "High",
        riskColor: "text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/30",
        href: "/scams/romance-scams/oil-rig-scam/",
    },
    {
        icon: Smartphone,
        emoji: "📲",
        color: "from-violet-500 to-purple-600",
        bg: "bg-violet-50 dark:bg-violet-950/30",
        border: "border-violet-200 dark:border-violet-900",
        title: "Social Media Romance Scam  Instagram and Facebook",
        desc: "Scammer sends unsolicited DMs on Instagram or Facebook posing as a successful NRI professional, entrepreneur, or model. Relationship develops entirely on social media before moving to WhatsApp. Financial requests or sextortion follows.",
        risk: "Very High",
        riskColor: "text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/30",
        href: "/scams/romance-scams/social-media-romance-scam/",
        available: true,
    },
    {
        icon: CreditCard,
        emoji: "💹",
        color: "from-indigo-500 to-violet-600",
        bg: "bg-indigo-50 dark:bg-indigo-950/30",
        border: "border-indigo-200 dark:border-indigo-900",
        title: "Pig Butchering Scam  Crypto Romance Fraud India",
        desc: "The most sophisticated and highest-loss romance scam type. Scammer builds a romantic relationship over weeks, then introduces a 'highly profitable' crypto or forex trading platform. Platform is fake. ₹580 Crore lost to pig butchering in India in 2025.",
        risk: "Extreme",
        riskColor: "text-red-700 dark:text-red-300 bg-red-100 dark:bg-red-900/40",
        href: "/scams/romance-scams/pig-butchering-scam/",
    },
    {
        icon: Camera,
        emoji: "📸",
        color: "from-red-500 to-rose-600",
        bg: "bg-red-50 dark:bg-red-950/30",
        border: "border-red-200 dark:border-red-900",
        title: "Sextortion via Fake Romance",
        desc: "Scammer builds fake romantic connection, obtains explicit photos or videos, then uses them to extort money. Alternatively initiates a WhatsApp video call using pre-recorded explicit content and uses screenshots for blackmail. Growing rapidly among Indian youth.",
        risk: "Very High",
        riskColor: "text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/30",
        href: "/scams/romance-scams/sextortion-india/",
        available: true,
    },
];

// ── How the scam unfolds ──────────────────────────────────────────────────────
const scamSteps = [
    {
        step: "01",
        color: "from-rose-400 to-pink-500",
        bg: "bg-rose-50 dark:bg-rose-950/30",
        border: "border-rose-200 dark:border-rose-900",
        title: "Contact Is Made",
        desc: "A connection request, a match on a dating app, a message that appears misdirected, or a comment reply. The profile is attractive, the bio impressive  often a doctor, engineer, military officer, or successful entrepreneur living abroad.",
        urgent: false,
    },
    {
        step: "02",
        color: "from-pink-500 to-rose-600",
        bg: "bg-pink-50 dark:bg-pink-950/30",
        border: "border-pink-200 dark:border-pink-900",
        title: "Intense Bond-Building",
        desc: "Daily messages, good morning texts, deep conversations about life, family, and the future. The scammer is attentive, emotionally intelligent, and moves the relationship to WhatsApp quickly. An 'exclusive' relationship is suggested within weeks.",
        urgent: false,
    },
    {
        step: "03",
        color: "from-violet-500 to-purple-600",
        bg: "bg-violet-50 dark:bg-violet-950/30",
        border: "border-violet-200 dark:border-violet-900",
        title: "The Future Is Painted",
        desc: "Talk turns to meeting in person, marriage, a shared life. The victim begins emotionally investing in this future. The scammer expresses deep, exclusive love  'I have never felt this way about anyone'. The emotional stake is high.",
        urgent: false,
    },
    {
        step: "04",
        color: "from-orange-500 to-amber-600",
        bg: "bg-orange-50 dark:bg-orange-950/30",
        border: "border-orange-200 dark:border-orange-900",
        title: "The First Request",
        desc: "An emergency surfaces  a medical crisis, airport detention, a seized package containing a 'gift' for you, a business deal that needs just ₹50,000 to close. The request is framed as temporary  'I'll return it the moment I land'.",
        urgent: true,
    },
    {
        step: "05",
        color: "from-red-500 to-rose-600",
        bg: "bg-red-50 dark:bg-red-950/30",
        border: "border-red-200 dark:border-red-900",
        title: "Escalation",
        desc: "The first transfer is repaid quickly  sometimes in full  to confirm reliability and build confidence. Then the requests increase in frequency and size. Each refusal is met with hurt feelings and guilt: 'I thought you loved me. I have no one else.'",
        urgent: true,
    },
    {
        step: "06",
        color: "from-gray-500 to-slate-600",
        bg: "bg-gray-50 dark:bg-gray-900/50",
        border: "border-gray-200 dark:border-gray-800",
        title: "Disappearance",
        desc: "When the victim can no longer send money  or begins asking too many questions  the scammer disappears without warning. All numbers are blocked. The profile vanishes. The photos were stolen years ago. The person never existed.",
        urgent: false,
    },
];

// ── Red flags ─────────────────────────────────────────────────────────────────
const redFlags = [
    "They refuse video calls consistently  or only agree to very brief, poor-quality calls they initiate, never allowing long face-to-face conversation",
    "They profess deep love or 'soulmate' feelings within days or weeks of first contact, long before any in-person meeting is possible",
    "Their profile photos appear on multiple different names when reverse-image searched on Google Images or TinEye  a clear sign of stolen identity",
    "They work in an occupation that explains permanent unavailability: military officer on deployment, engineer on oil rig, doctor on UN mission abroad",
    "They ask you to move the conversation off the dating platform to WhatsApp or Telegram immediately  this removes fraud monitoring from the conversation",
    "Any financial request, no matter how small  medical emergency, flight ticket, customs fee for a package, investment platform deposit  from someone you have never met in person",
    "They encourage you to invest on a trading platform they recommend, showing you 'impressive returns' that you can see but cannot withdraw",
];

// ── What to do ────────────────────────────────────────────────────────────────
const whatToDo = [
    {
        step: "01",
        title: "Call 1930 (National Cyber Crime Financial Helpline) if Money Was Transferred",
        desc: "If you transferred money to a romance scammer, call 1930 immediately. Even 24–48 hours after the transfer, the 1930 helpline can attempt to flag the receiving account. Provide: the scammer's phone number, their UPI ID or bank account details, the amount transferred, and the time of transfer. Every hour matters  recovery probability drops sharply after 24 hours.",
        urgent: true,
    },
    {
        step: "02",
        title: "File on cybercrime.gov.in",
        desc: "Go to cybercrime.gov.in and select 'Report Financial Cyber Crime' or 'Report Other Cyber Crime.' Attach: screenshots of all conversations, the scammer's profile photos, their phone number, any payment records, and the name they used. A case reference number is issued within 24 hours. For cases involving explicit content, select 'Cyber Crime Against Women/Children.'",
        urgent: true,
    },
    {
        step: "03",
        title: "Report on the Platform Where You Met",
        desc: "Tinder, Bumble, Instagram, Facebook, and all major matrimonial platforms have fraud reporting mechanisms. Reporting on the platform prevents the same scammer from victimising others using the same profile. Use every available report option: 'Fake Profile,' 'Scam or Fraud,' and 'Request for Money.' Platform reports feed into shared fraud databases used by Indian cybercrime units.",
        urgent: false,
    },
    {
        step: "04",
        title: "Attempt Financial Recovery",
        desc: "If money was transferred via UPI, contact your bank's 24/7 fraud helpline and request a dispute on the transaction. File a chargeback if a credit or debit card was used. Recovery within 24–48 hours has approximately 30–40% success; after 7 days the probability drops below 10% as money has typically moved through multiple accounts.",
        urgent: false,
    },
    {
        step: "05",
        title: "File an FIR at Your Nearest Cybercrime Police Station",
        desc: "A physical FIR strengthens your case for financial recovery. Bring your cybercrime.gov.in reference number, all conversation screenshots, payment records, and the scammer's complete contact information. For pig butchering scam india cases involving large amounts, engage a cybercrime lawyer  SEBI and ED can be involved where fake trading platforms are registered entities.",
        urgent: false,
    },
];

// ── FAQs ──────────────────────────────────────────────────────────────────────
const faqs = [
    {
        q: "What are the most common types of romance scams in India in 2026?",
        a: "The seven most common are: (1) Fake dating profiles / catfishing  29% of complaints. (2) Matrimonial fraud india  22%, targeting users of Shaadi.com, Jeevansathi, and BharatMatrimony. (3) Military romance scams  15%, impersonating Indian Army officers. (4) Social media romance scams via Instagram and Facebook  14%. (5) Pig butchering scam india  8% of cases but 58% of total losses. (6) Oil rig romance scam  7%. (7) Sextortion via fake romance  5%. The NCRB recorded 2.1 lakh romance-related cybercrime complaints in 2025.",
    },
    {
        q: "How do I know if someone I met online is a romance scammer?",
        a: "Seven signs: (1) They refuse video calls or only allow brief, controlled calls. (2) They profess deep love within days or weeks. (3) Their photos appear under different names on Google Image Search. (4) They work in an occupation that prevents meetings: military, oil rig, medical mission abroad. (5) They immediately push conversations to WhatsApp or Telegram. (6) Any financial request, no matter how small. (7) They introduce a trading or investment platform.",
    },
    {
        q: "What is the pig butchering scam and how does it work in India?",
        a: "The pig butchering scam india is the most sophisticated romance fraud. A scammer builds a romantic relationship over weeks, then introduces a cryptocurrency or forex trading platform they claim to use successfully. They show the victim 'profits' accumulating on the platform dashboard. When the victim tries to withdraw, the platform imposes 'taxes' or 'release fees.' The platform is entirely fake. ₹580 crore was lost to pig butchering in India in 2025. Average loss per victim: ₹18.5 lakh.",
    },
    {
        q: "What are military romance scams and how do they target Indians?",
        a: "Military romance scams involve someone posing as an Indian Army officer, CRPF officer, or UN peacekeeper currently deployed. They use stolen photos of real military personnel, exploit the respect Indians feel for the military, and after weeks of communication request money for 'leave travel,' medical treatment, or customs clearance. The Indian Army does not allow personal WhatsApp or dating app use on active deployment.",
    },
    {
        q: "Can I get my money back after being scammed in a romance scam?",
        a: "Recovery depends entirely on speed. Call 1930 within 30 minutes of the transfer for the best chance. Within 24 hours: file cybercrime.gov.in complaint, raise a bank dispute, and report on the platform. Recovery within 24–48 hours has approximately 30–40% success; after 7 days the probability drops below 10%. Document everything: conversation screenshots, payment records, the scammer's phone number and profile details.",
    },
    {
        q: "Is Tinder safe to use in India?",
        a: "The platform itself has strong security infrastructure. The risk comes from users creating fake profiles using stolen photos. Tinder now has photo verification features  always check if a match is verified. Additional protection: run a reverse image search on their profile photos, insist on video calls before any emotional investment, and never share financial information with matches.",
    },
    {
        q: "Why do scammers always want to move to WhatsApp or Telegram?",
        a: "Two reasons: (1) Dating platforms and matrimonial sites have fraud detection algorithms that flag suspicious communication patterns. Moving off-platform avoids this monitoring. (2) WhatsApp and Telegram allow the scammer to continue contact even after the original platform account is reported and deleted. Always be suspicious when a new online contact immediately pushes to move the conversation to a private messaging app.",
    },
    {
        q: "What can a scammer do with my phone number if I shared it?",
        a: "What scammers can do with your phone number: (1) SIM swap fraud  port your number to intercept bank OTPs. (2) Targeted phishing calls impersonating your bank. (3) Sell your number to other scammer networks. (4) WhatsApp account takeover by requesting the verification OTP. (5) Correlate with other personal data to build a fraud profile. If you shared your number with a suspected scammer, enable two-step verification on WhatsApp and Telegram, and alert your bank.",
    },
    {
        q: "What are the dating red flags in online relationships?",
        a: "Online dating red flags that specifically indicate romance scams: (1) Refusing video calls consistently. (2) Excessive flattery and declarations of love in the first week. (3) Profile photos that appear too professional  no candid everyday photos. (4) Vague or inconsistent personal details across conversations. (5) Any request to move to a different app. (6) Financial discussion of any kind before meeting in person. (7) Investment advice or platform recommendations. (8) Inconsistent timing of messages suggesting a different time zone than their claimed location.",
    },
    {
        q: "How do I report a romance scam to the police in India?",
        a: "How to report a romance scam in India: (1) File on cybercrime.gov.in  select 'Financial Cyber Fraud' or 'Cyber Crime Against Women' depending on the type. (2) Call 1930 if money was involved. (3) Report the profile on the platform where you met the scammer. (4) Visit your nearest cybercrime police station with printed conversation screenshots, the scammer's phone number and profile details, and any payment records. For cases involving intimate content, select 'Non-Consensual Intimate Image Sharing.'",
    },
];

// ─────────────────────────────────────────────────────────────────────────────
export default function RomanceScamsPage() {
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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLd(itemListData) }}
            />

            <main className="min-h-screen">

                {/* ── Hero ─────────────────────────────────────────────────── */}
                <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-pink-50 dark:from-gray-950 dark:via-gray-900 dark:to-rose-950 pt-20 pb-24 px-4">
                    <div className="pointer-events-none absolute inset-0 -z-10">
                        <div className="absolute top-10 left-1/4 w-96 h-96 bg-rose-300/10 rounded-full blur-3xl animate-pulse" />
                        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-300/10 rounded-full blur-3xl animate-pulse delay-700" />
                        <div className="absolute top-1/2 right-0 w-64 h-64 bg-violet-300/10 rounded-full blur-3xl animate-pulse delay-1000" />
                    </div>

                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-rose-100 to-pink-100 dark:from-rose-900/40 dark:to-pink-900/40 text-rose-700 dark:text-rose-300 text-xs font-semibold mb-6 border border-rose-200 dark:border-rose-800 shadow-sm">
                            <HeartOff className="h-4 w-4 animate-pulse" />
                            2026 India Report · 2.1 Lakh NCRB Complaints · Updated April 2026
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
                            Romance Scams in India 2026:{" "}
                            <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-violet-600 bg-clip-text text-transparent">
                                7 Types, Warning Signs & How to Report
                            </span>
                        </h1>

                        <div className="text-left max-w-2xl mx-auto mb-6 space-y-4 text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
                            <p>
                                Romance scams in India are any fraudulent relationship deliberately constructed online to extract money, personal data, or intimate content from the victim. A scammer creates a compelling fictional identity, invests weeks or months in building emotional intimacy, and then leverages that intimacy to make financial or other demands the victim would never have agreed to with a stranger.
                            </p>
                            <p>
                                Online dating scams in India have grown by 67% since 2022. The NCRB recorded 2.1 lakh romance-related cybercrime complaints in 2025. The average victim loses ₹1.2 lakh  but pig butchering scam victims lose an average of ₹18.5 lakh. The emotional cost is never captured in statistics.
                            </p>
                            <p>
                                This page covers all 7 types of romance scams active in India in 2026, the red flags that identify a scammer before money is requested, the exact steps to report and initiate financial recovery in India, and free tools to verify any suspicious profile or number immediately.
                            </p>
                        </div>

                        {/* CTA box */}
                        <div className="max-w-xl mx-auto mb-10 bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 rounded-xl p-4 flex flex-col sm:flex-row items-center gap-4">
                            <div className="text-sm text-rose-800 dark:text-rose-200 font-medium flex-1">
                                Not Sure If That Profile or Number Is Real?
                            </div>
                            <Link
                                href="/phone-number-checker/"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-sm font-bold transition-colors shrink-0"
                            >
                                <Shield className="h-4 w-4" />
                                Check Phone Number Free
                            </Link>
                        </div>

                        {/* Stats strip */}
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            {[
                                { value: "2.1 Lakh", label: "Romance Scam Complaints  India 2025 (NCRB)", icon: <AlertTriangle className="h-4 w-4" /> },
                                { value: "₹1.2 Lakh", label: "Average Loss Per Victim  Online Dating Scam", icon: <IndianRupee className="h-4 w-4" /> },
                                { value: "+67%", label: "Growth in Romance Fraud Complaints 2022–2025", icon: <Heart className="h-4 w-4" /> },
                                { value: "74%", label: "Victims Never Report to Police (NCPCR 2025)", icon: <Shield className="h-4 w-4" /> },
                            ].map(({ value, label, icon }, i) => (
                                <div
                                    key={label}
                                    className="group flex flex-col items-center px-6 py-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 min-w-[130px]"
                                    style={{ animationDelay: `${i * 100}ms` }}
                                >
                                    <div className="text-rose-500 mb-1 group-hover:scale-110 transition-transform">{icon}</div>
                                    <span className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">{value}</span>
                                    <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-center">{label}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <ReportScamButton className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold text-sm shadow-lg hover:shadow-rose-300/50 hover:scale-105 transition-all duration-300 cursor-pointer">
                                <ShieldAlert className="h-5 w-5" />
                                Report a Romance Scam
                                <ArrowRight className="h-4 w-4" />
                            </ReportScamButton>
                            <a
                                href="#scam-types"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 font-semibold text-sm border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
                            >
                                See All Scam Types
                                <ChevronDown className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </section>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

                    {/* ── Why Romance Scams Are Different ──────────────────── */}
                    <section>
                        <div className="grid lg:grid-cols-2 gap-10 items-center">
                            <div>
                                <span className="inline-block px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 text-xs font-semibold mb-4">
                                    Why It's So Uniquely Harmful
                                </span>
                                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-6 leading-snug">
                                    Why Romance Scams Cause More Damage Than Almost Any Other Fraud
                                </h2>
                                <div className="space-y-4 text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                                    <p>
                                        Most cyber frauds target your money. Romance scams target your heart first 
                                        and then your money. By the time any financial request is made, the victim
                                        has invested weeks or months of emotional energy into what feels like a
                                        genuine, meaningful relationship.
                                    </p>
                                    <p>
                                        This is deliberate. The emotional investment is the mechanism that makes the
                                        financial extraction possible. It overrides the rational scepticism that would
                                        stop most people from transferring large sums to someone they've never met.
                                        The heart has already committed; the bank transfer feels like an act of love,
                                        not a financial decision.
                                    </p>
                                    <p>
                                        Romance scam victims in India report a dual trauma  the financial loss and
                                        the grief of losing a relationship that felt real even though the other person
                                        never existed. Many describe it as a bereavement. The shame associated with
                                        this causes severe underreporting  experts estimate only 1 in 7 victims
                                        ever files a formal complaint.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/40 dark:to-pink-950/40 rounded-2xl p-8 border border-rose-100 dark:border-rose-900 space-y-5">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center">
                                        <Info className="h-5 w-5 text-white" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 dark:text-white text-lg">The Signals That Cut Through Emotion</h3>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                    These are facts about real relationships  not judgements. Use them as clear-eyed checkpoints.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        { icon: XCircle, color: "text-red-500", text: "Real people who develop feelings for you never ask you for money before meeting you in person. Full stop. Emergency or not." },
                                        { icon: XCircle, color: "text-red-500", text: "Real partners don't refuse video calls for weeks. A one-off technical issue is plausible  a persistent pattern is not." },
                                        { icon: XCircle, color: "text-red-500", text: "Falling deeply in love with someone within 2–3 weeks of text-only contact is a manufactured feeling, not a natural one." },
                                        { icon: CheckCircle2, color: "text-green-500", text: "A reverse image search of their photos takes 30 seconds and will definitively tell you if the face belongs to a real person with that name." },
                                        { icon: CheckCircle2, color: "text-green-500", text: "Any mention of an investment, trading app, or financial opportunity from a romantic partner is an immediate hard stop  this is pig butchering." },
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
                    {/* ── Romance Fraud Scale + Image ────────────────────────── */}
                    <section aria-labelledby="romance-scale-heading">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <span className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-widest">
                                    Official 2024 Data
                                </span>
                                <h2
                                    id="romance-scale-heading"
                                    className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-2 mb-4"
                                >
                                    How Big Is Romance Fraud in India Right Now?
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                    Romance scams are India's most emotionally destructive form of cyber fraud.
                                    Victims don't just lose money  they lose months of emotional investment
                                    in a relationship that was entirely manufactured. Experts estimate only
                                    1 in 7 victims ever files a complaint, meaning reported figures represent
                                    a fraction of the true scale.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { label: "Average financial loss per Indian romance scam victim", value: "₹2.3 Lakh", color: "from-rose-500 to-pink-600" },
                                        { label: "Romance fraud cases filed in India in 2024", value: "14,000+", color: "from-red-500 to-rose-600" },
                                        { label: "Average weeks before scammer makes the first money request", value: "6 Weeks", color: "from-orange-500 to-amber-600" },
                                        { label: "Victims who are aged 25–45 and employed", value: "Over 60%", color: "from-violet-500 to-purple-600" },
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
                                    src="/image/indian-woman-checking-suspicious-scam-call-rakshaai.jpg"
                                    alt="Indian woman identifying a suspicious romance scam call  how to spot fake dating profiles, pig butchering scams, and matrimonial fraud in India, RakshaAI"
                                    title="How to Identify Romance Scams and Fake Dating Profiles in India | RakshaAI"
                                    width={500}
                                    height={500}
                                    className="object-contain drop-shadow-2xl max-w-full h-auto rounded-3xl"
                                />
                            </div>
                        </div>
                    </section>
                    {/* ── 8 Scam Types ─────────────────────────────────────── */}
                    <section id="scam-types">
                        <div className="text-center mb-12">
                            <span className="inline-block px-3 py-1 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 text-xs font-semibold mb-4">
                                Every Variant
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                7 Types of Romance Scams in India 2026
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-base">
                                They arrive through dating apps, matrimonial sites, Instagram, and WhatsApp 
                                all exploit the same need: to be seen, valued, and loved.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-5">
                            {scamTypes.map(({ icon: Icon, color, bg, border, title, desc, risk, riskColor, href, emoji, available }) => (
                                <div
                                    key={title}
                                    className={`group flex items-start gap-5 p-6 rounded-2xl border ${bg} ${border} hover:shadow-lg transition-all duration-300`}
                                >
                                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm text-xl`}>
                                        {emoji}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-start justify-between gap-2 mb-1">
                                            <h3 className="font-bold text-gray-900 dark:text-white text-base">{title}</h3>
                                            <span className={`shrink-0 px-2 py-0.5 rounded-full text-xs font-semibold ${riskColor}`}>{risk}</span>
                                        </div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">{desc}</p>
                                        <Link href={available ? href : '/blog'} className="inline-flex items-center gap-1 text-xs font-semibold text-rose-600 dark:text-rose-400 hover:underline">
                                            Full Guide <ArrowRight className="h-3 w-3" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── How Romance Scams Work  The Psychology ────────────────── */}
                    <section>
                        <div className="text-center mb-12">
                            <span className="inline-block px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 text-xs font-semibold mb-4">
                                The Psychology
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                How Romance Scams Work in India  The Psychology of Manufactured Love
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-base">
                                Romance fraudsters don't improvise. They run a tested psychological script designed to bypass rational decision-making.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div className="p-6 sm:p-8 rounded-2xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Stage 1: Target Selection and the Perfect Profile</h3>
                                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                                    Romance fraudsters don't build one fake profile and send one message. They operate at industrial scale  a single organised group runs hundreds of simultaneous 'relationships.' Targets are specifically selected based on assessed vulnerability: recently divorced or widowed profiles on matrimonial sites, users who share emotional content publicly, and anyone who responds warmly to an unsolicited message. The profile they create is precisely calibrated to be maximally appealing to the target demographic: for Indian women in their 30s–50s, this is typically a widowed NRI professional or a military officer; for men, it is an attractive younger woman from a specific cultural background. Profile photos are stolen from real people  often minor social media influencers or fitness models  whose faces are not famous enough to be immediately recognisable but are conventionally attractive enough to be credible.
                                </p>
                            </div>
                            <div className="p-6 sm:p-8 rounded-2xl bg-pink-50 dark:bg-pink-950/30 border border-pink-200 dark:border-pink-900">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Stage 2: Love Bombing and the Script</h3>
                                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                                    Once contact is established, the fraudster initiates 'love bombing'  an overwhelming, intense experience of feeling seen, desired, and uniquely understood. Daily good morning messages. Long evening calls. Remembering small details from earlier conversations. Statements about destiny, soulmates, and a shared future arrive within the first two weeks. This is not accidental. Love bombing overloads the attachment system and triggers bonding hormones at an accelerated rate. The conversation is moved off the original platform to WhatsApp or Telegram almost immediately, removing fraud monitoring. Any suggestion of meeting in person is met with a plausible reason for delay: deployment, overseas posting, a critical project. The delay is always temporary, the excuse always sympathetic. The emotional investment deepens every day.
                                </p>
                            </div>
                            <div className="p-6 sm:p-8 rounded-2xl bg-violet-50 dark:bg-violet-950/30 border border-violet-200 dark:border-violet-900">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Stage 3: The Request, the Escalation, and the Disappearance</h3>
                                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                                    The first financial request arrives after the emotional investment has reached its maximum. It is always framed as an emergency  a medical crisis, a customs fee, a one-time investment opportunity, a visa payment. The amount is calibrated to be just within the victim's psychological threshold of risk. After the first payment, the requests escalate. Each subsequent request arrives within a 'crisis' that feels even more urgent. Refusing to help is framed as a betrayal of the relationship. Guilt, urgency, and shame are deployed systematically. When the victim can no longer pay  or begins to express suspicion  the scammer either vanishes completely or attempts one final high-pressure request before disappearing. The profile is deleted. The phone number is abandoned. The grief and financial damage remain.
                                </p>
                            </div>
                        </div>
                        {/* Inline CTA */}
                        <div className="mt-8 p-5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center gap-4">
                            <div className="flex-1 text-sm text-gray-700 dark:text-gray-300">
                                <span className="font-semibold">Suspicious about someone you met online?</span> Check their phone number against our scam database before going further.
                            </div>
                            <Link
                                href="/phone-number-checker/"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-sm font-bold transition-colors shrink-0"
                            >
                                <Search className="h-4 w-4" />
                                Check Phone Number Free
                            </Link>
                        </div>
                    </section>

                    {/* ── Real Story ────────────────────────────────────────── */}
                    <section className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8 sm:p-12 border border-gray-100 dark:border-gray-800">
                        <span className="inline-block px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 text-xs font-semibold mb-4">
                            A Real Account
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
                            "He Was a Doctor in London. We Talked Every Day for Four Months."  A Real Account
                        </h2>
                        <div className="grid lg:grid-cols-2 gap-8 text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                            <div className="space-y-4">
                                <p>
                                    Kavitha (name changed), a 41-year-old school teacher from Chennai, matched
                                    with a man on a matrimonial app in August 2024. His profile said he was
                                    a 44-year-old cardiologist based in London, Tamil origin, returning to India
                                    to settle down. His photos showed a handsome man in medical settings and at
                                    international locations.
                                </p>
                                <p>
                                    Their conversations moved to WhatsApp within three days. He called every
                                    evening, asked about her day, remembered details from earlier conversations,
                                    sent good morning messages. Four weeks in, he began speaking about their
                                    future together  where they would live, how many children they might have.
                                    He called her his 'destiny'.
                                </p>
                                <p>
                                    In week six, he messaged while distressed: a patient had died, he was
                                    suspended pending inquiry, and his UK bank account had been frozen as part
                                    of the investigation. He needed ₹80,000 to hire a solicitor for a hearing
                                    the following week. He would repay everything once the freeze was lifted.
                                    He was ashamed to ask but had no one else.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <p>
                                    Kavitha transferred ₹80,000. Two weeks later, his visa was expiring and he
                                    needed ₹1.2 lakh to renew it and complete his relocation to India  where
                                    he would repay her in person. She borrowed money from her sister.
                                    A month after that, a customs package with jewellery he'd bought for her
                                    was 'held at Heathrow'  requiring ₹55,000 for clearance. She sold a gold
                                    bangle. Total sent: ₹3,10,000 over 11 weeks.
                                </p>
                                <p>
                                    When she asked why they couldn't video call and why she'd never actually
                                    spoken to anyone who knew him, he became cold. The next day, his WhatsApp
                                    showed a single grey tick  he had blocked her. A reverse image search
                                    of his photos returned results from a Canadian Instagram account belonging
                                    to a real doctor who had no connection to the scam.
                                </p>
                                <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border border-rose-200 dark:border-rose-800">
                                    <p className="text-sm font-bold text-rose-700 dark:text-rose-300 mb-2">The 30-Second Check That Would Have Saved ₹3.1 Lakh:</p>
                                    <p className="text-sm text-gray-700 dark:text-gray-300">
                                        A Google reverse image search of his first profile photo would have returned
                                        the Canadian doctor's real Instagram within seconds  a different name, a
                                        different city, a different life. Every rupee was transferred after this
                                        check could have been done for free in half a minute.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ── Pig Butchering Deep Dive ──────────────────────────── */}
                    <section className="bg-gradient-to-br from-violet-50 to-indigo-50 dark:from-violet-950/30 dark:to-indigo-950/30 rounded-2xl p-8 sm:p-12 border border-violet-100 dark:border-violet-900">
                        <span className="inline-block px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300 text-xs font-semibold mb-4">
                            The Hybrid Scam
                        </span>
                        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6">
                            Pig Butchering  When the Romance Becomes an Investment Trap
                        </h2>
                        <div className="grid lg:grid-cols-2 gap-8 text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                            <div className="space-y-4">
                                <p>
                                    'Sha zhu pan'  literally 'pig butchering platter'  is the scam industry's
                                    own term for a specific variant of romance fraud that has become the
                                    dominant format in India since 2022. The 'pig' is the victim, fattened with
                                    emotional investment before being 'slaughtered' financially.
                                </p>
                                <p>
                                    It begins identically to a standard romance scam: a chance message, a
                                    growing connection, a sense of safety and intimacy. The difference is the
                                    pivot point. After 3–6 weeks, the romantic partner casually mentions an
                                    'exclusive' investment opportunity  a trading platform, a crypto exchange,
                                    or a stock app that their uncle manages. 'I've been making ₹40,000 every
                                    week. I wanted to share it with you.'
                                </p>
                                <p>
                                    The victim is shown impressive profits on a convincing platform. Small
                                    investments yield visible returns. The emotional relationship creates a
                                    context in which the investment feels personally endorsed, not commercially
                                    pitched. The victim puts in more and more  often far more than they would
                                    have given in a direct money request.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <p>
                                    When the victim attempts to withdraw, a 'tax fee', 'withdrawal unlock',
                                    or 'regulatory deposit' is demanded. After paying those, the account is
                                    frozen for 'compliance review'. Eventually, both the romantic persona and
                                    the platform disappear.
                                </p>
                                <div className="grid grid-cols-1 gap-3 mt-2">
                                    {[
                                        { phase: "Weeks 1–4", desc: "Romance, emotional bonding, daily contact" },
                                        { phase: "Weeks 4–6", desc: "Mention of an investment app, casual not pushy" },
                                        { phase: "Weeks 6–10", desc: "Small investments, visible profits, encouragement to invest more" },
                                        { phase: "Weeks 10+", desc: "Large deposits; withdrawal blocked; fees demanded; contact ends" },
                                    ].map(({ phase, desc }) => (
                                        <div key={phase} className="flex items-start gap-3 p-3 bg-white dark:bg-gray-900 rounded-xl border border-violet-100 dark:border-violet-900 text-sm">
                                            <span className="font-bold text-violet-700 dark:text-violet-300 min-w-[90px] flex-shrink-0">{phase}</span>
                                            <span className="text-gray-600 dark:text-gray-400">{desc}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="p-3 bg-white dark:bg-gray-900 rounded-xl border border-violet-200 dark:border-violet-800 text-sm">
                                    <p className="font-bold text-violet-700 dark:text-violet-300 mb-1">The rule:</p>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        Any romantic partner who introduces you to an investment opportunity  regardless of how
                                        genuine the relationship feels  is running a pig butchering operation. End all financial
                                        involvement immediately and report to 1930.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ── Fake Profile Identification ──────────────────────── */}
                    <section className="bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-950/50 dark:to-gray-950/30 rounded-2xl p-8 sm:p-12 border border-slate-100 dark:border-slate-800">
                        <span className="inline-block px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900/40 text-slate-700 dark:text-slate-300 text-xs font-semibold mb-4">
                            Practical Verification
                        </span>
                        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6">
                            How to Identify a Fake Dating Profile  In Under 5 Minutes
                        </h2>
                        <div className="grid lg:grid-cols-2 gap-8 text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                            <div className="space-y-4">
                                <p>
                                    Most fake profiles fail basic verification that takes less than five minutes.
                                    The reason victims don't run these checks is not naivety  it's that by the
                                    time suspicion arises, the emotional investment creates a strong psychological
                                    resistance to finding out the truth.
                                </p>
                                <p>
                                    Do these checks early  ideally before the emotional bond deepens. Frame it
                                    as sensible caution rather than distrust.
                                </p>
                            </div>
                            <div className="space-y-3">
                                {[
                                    {
                                        step: "1",
                                        title: "Reverse image search every photo",
                                        desc: "Save their main profile photo → go to images.google.com → click the camera icon → upload. If the face appears under a different name, you have the answer you need.",
                                    },
                                    {
                                        step: "2",
                                        title: "Check their online presence",
                                        desc: "Search their full name + city + profession on Google, LinkedIn, and Facebook. Real professionals in the fields scammers typically claim (doctors, engineers, military) are usually findable. An untraceable person is a significant flag.",
                                    },
                                    {
                                        step: "3",
                                        title: "Request an unscripted video call",
                                        desc: "Ask them to wave with their right hand, hold up a specific number of fingers, or write your name on paper and show it to camera. Pre-recorded video or deepfakes cannot respond to specific real-time requests.",
                                    },
                                    {
                                        step: "4",
                                        title: "Ask verifiable questions",
                                        desc: "Ask about specific street names in the city they claim to be from, current news there, or local landmarks. Inconsistency or reluctance to answer specific questions about their supposed location is revealing.",
                                    },
                                ].map(({ step, title, desc }) => (
                                    <div key={step} className="flex items-start gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 text-sm">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center text-white font-bold text-xs">
                                            {step}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900 dark:text-white mb-0.5">{title}</p>
                                            <p className="text-gray-600 dark:text-gray-400">{desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ── Real vs Fake Partner: Split Section ─────────────── */}
                    <section
                        aria-labelledby="real-vs-fake-heading"
                        className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-lg lg:min-h-[520px]"
                    >
                        {/* LEFT  content */}
                        <div className="p-8 sm:p-10 bg-white dark:bg-gray-900 flex flex-col justify-center">
                            <span className="inline-block px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 text-xs font-semibold mb-4 self-start">
                                Quick Reference
                            </span>
                            <h2
                                id="real-vs-fake-heading"
                                className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-6 leading-snug"
                            >
                                Genuine Online Connection vs. Romance Scammer  Know the Difference
                            </h2>
                            <div className="space-y-3 mb-6">
                                <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-xl border border-green-200 dark:border-green-900">
                                    <p className="text-xs font-bold text-green-700 dark:text-green-400 mb-2 uppercase tracking-wide">
                                        Genuine Person
                                    </p>
                                    <ul className="space-y-1.5 text-sm text-gray-700 dark:text-gray-300">
                                        {[
                                            "Agrees to a spontaneous unscripted video call  waves, holds up fingers, shows a note with your name",
                                            "Their full name, photo, and claimed profession are findable on LinkedIn, Google, or social media",
                                            "Never asks for money, gift cards, UPI transfers, or investments before meeting in person",
                                            "Feelings develop gradually over real conversations  not declarations of love within 2–3 weeks",
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
                                        Romance Scammer
                                    </p>
                                    <ul className="space-y-1.5 text-sm text-gray-700 dark:text-gray-300">
                                        {[
                                            "Refuses video calls or always has a 'camera problem'  consistently, not occasionally",
                                            "Profile photos reverse-search to a model, influencer, or real person with a different name",
                                            "Declares deep, exclusive love within the first few weeks of text-only contact",
                                            "First money request follows a sudden emergency  medical crisis, visa problem, seized package",
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
                                    The 30-Second Rule
                                </p>
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    Before sending any money to someone you met online: reverse image search their
                                    profile photo on Google Images. 30 seconds is all it takes to know if that face
                                    belongs to a real person with the name they gave you.
                                </p>
                            </div>
                        </div>
                        {/* RIGHT  full-height image */}
                        <div className="relative h-full min-h-[400px] overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-rose-500 via-pink-600 to-violet-600" />
                            <Image
                                src="/image/report-scam-number-steps-india-rakshaai.jpg"
                                alt="Steps to verify an online contact and report a romance scam in India  how to reverse image search a dating profile, report pig butchering fraud, check fake matrimonial profiles, RakshaAI"
                                title="Verify Online Contact and Report Romance Scam in India | RakshaAI"
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                    </section>

                    {/* ── Red Flags ─────────────────────────────────────────── */}
                    <section>
                        <div className="text-center mb-8">
                            <span className="inline-block px-3 py-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-xs font-semibold mb-4">
                                Warning Signs
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                7 Romance Scam Warning Signs You Should Never Ignore
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-base">
                                Any single one of these should prompt an immediate pause and independent verification before you go any further.
                            </p>
                        </div>
                        <div className="mb-8 p-4 rounded-xl bg-red-50 dark:bg-red-950/30 border-2 border-red-200 dark:border-red-800 flex items-center gap-3">
                            <span className="text-2xl">🛑</span>
                            <p className="text-sm font-semibold text-red-800 dark:text-red-200">Stop. Verify. These Are the Warning Signs of a Romance Scammer:</p>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {redFlags.map((flag, i) => (
                                <div
                                    key={flag}
                                    className="flex items-start gap-4 p-5 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md hover:border-rose-200 dark:hover:border-rose-800 transition-all duration-200"
                                >
                                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center text-white text-xs font-bold">
                                        {String(i + 1).padStart(2, "0")}
                                    </div>
                                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{flag}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── How to Protect Yourself  5 Rules ─────────────────── */}
                    <section>
                        <div className="text-center mb-12">
                            <span className="inline-block px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-xs font-semibold mb-4">
                                Protection
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                How to Protect Yourself from Romance Scams  5 Rules
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-base">
                                These five rules, applied consistently, will block the vast majority of romance scam attempts.
                            </p>
                        </div>
                        <div className="space-y-4">
                            {[
                                {
                                    num: "01",
                                    title: "Reverse Image Search Every Profile Photo",
                                    desc: "Before investing any emotional energy in an online relationship, save their profile photo and upload it to Google Images (images.google.com) and TinEye (tineye.com). If the photo appears under a different name, or belongs to a model or public figure, you have found a fake profile. Do this on the first day, not after weeks of conversation.",
                                },
                                {
                                    num: "02",
                                    title: "Insist on Live Video Calls in Controlled Conditions",
                                    desc: "A real person will be able to wave at you, hold up three fingers, write your name on paper, and do so spontaneously on demand. A deepfake video call or a pre-recorded loop cannot comply with unscripted real-time requests. If someone refuses all video calls, or only accepts calls where they control every parameter, this is a critical warning sign.",
                                },
                                {
                                    num: "03",
                                    title: "Never Transfer Money to Someone You Have Not Met In Person",
                                    desc: "This single rule prevents nearly all romance scam financial losses. The emotional narrative  emergency, trust, love, urgency  is designed specifically to override this rational boundary. There is no legitimate reason why someone you have never physically met needs a bank transfer, UPI payment, gift voucher, or cryptocurrency from you.",
                                },
                                {
                                    num: "04",
                                    title: "Never Share Personal Data That Enables Identity Theft",
                                    desc: "Aadhaar number, PAN card, bank account details, OTP codes, and copies of official documents must never be shared with someone you met online. This data is used for SIM swap fraud, loan fraud, and identity theft that can cause damage far exceeding the original romance scam.",
                                },
                                {
                                    num: "05",
                                    title: "Verify Any Recommended Investment Platform Independently",
                                    desc: "If someone you met online introduces you to a trading, crypto, or investment platform  regardless of how much they say they've earned  verify it independently before depositing anything. Check SEBI's registered broker list. Search the platform name + 'fraud' + 'India' on Google. Pig butchering platforms are entirely fake but appear professionally designed with convincing dashboards showing large returns.",
                                },
                            ].map(({ num, title, desc }) => (
                                <div key={num} className="flex items-start gap-5 p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md hover:border-teal-200 dark:hover:border-teal-800 transition-all">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-white font-extrabold text-sm shadow-sm">
                                        {num}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 dark:text-white text-base mb-2">{title}</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── How to Report ─────────────────────────────────────── */}
                    <section>
                        <div className="text-center mb-12">
                            <span className="inline-block px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-xs font-semibold mb-4">
                                Step by Step
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                How to Report a Romance Scam in India  Step by Step
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-base">
                                Speed is the most important variable. Each step below is listed in priority order.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="relative w-full rounded-2xl overflow-hidden mb-8 shadow-md">
                                <Image
                                    src="/image/emergency-steps-after-entering-data-scam-website-india-recovery-guide.jpg"
                                    alt="Emergency recovery steps after falling for a romance scam or pig butchering fraud in India  how to call 1930 cyber crime helpline, report to cybercrime.gov.in, stop payments, reverse image search, RakshaAI"
                                    title="Romance Scam Recovery Steps India  What To Do After Fake Dating Profile Fraud | RakshaAI"
                                    width={1200}
                                    height={480}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            <div className="hidden sm:block absolute left-[27px] top-10 bottom-10 w-0.5 bg-gradient-to-b from-red-300 via-amber-300 to-rose-300 dark:from-red-800 dark:via-amber-800 dark:to-rose-800" />
                            <div className="space-y-5">
                                {whatToDo.map(({ step, title, desc, urgent }) => (
                                    <div key={step} className="relative flex gap-6 items-start">
                                        <div className={`relative z-10 flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-white font-extrabold text-sm shadow-lg ${urgent ? "bg-gradient-to-br from-red-500 to-rose-600" : "bg-gradient-to-br from-rose-500 to-pink-600"}`}>
                                            {step}
                                            {urgent && <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-400 animate-ping" />}
                                        </div>
                                        <div className={`flex-1 p-6 rounded-2xl border hover:shadow-md transition-all ${urgent ? "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-900" : "bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800"}`}>
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

                        {/* Recovery Timeline */}
                        <div className="mt-8 p-6 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-xl">⏱️</span>
                                <h3 className="font-bold text-gray-900 dark:text-white text-base">Romance Scam Recovery Timeline</h3>
                            </div>
                            <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                {[
                                    { time: "Within 30 minutes", action: "Call 1930 + bank fraud helpline simultaneously" },
                                    { time: "Within 24 hours", action: "File cybercrime.gov.in complaint + platform report + initiate bank dispute" },
                                    { time: "Within 7 days", action: "File FIR at cybercrime police station + engage bank dispute formally" },
                                    { time: "After 7 days", action: "Financial recovery unlikely; focus on preventing further harm and document everything for the FIR" },
                                ].map(({ time, action }) => (
                                    <div key={time} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 py-2 border-b border-amber-100 dark:border-amber-900 last:border-0">
                                        <span className="font-semibold text-amber-700 dark:text-amber-400 shrink-0">{time}</span>
                                        <span className="text-gray-600 dark:text-gray-300">{action}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Report CTA */}
                        <div className="mt-8 rounded-2xl bg-gradient-to-r from-rose-600 to-pink-700 p-6 sm:p-8 text-center">
                            <h3 className="text-xl font-extrabold text-white mb-2">Report This Romance Scam Now</h3>
                            <p className="text-rose-100 text-sm mb-5">Reporting protects you and prevents the same scammer from victimising others. Takes under 5 minutes.</p>
                            <ReportScamButton className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-white text-rose-700 font-bold text-sm hover:bg-rose-50 transition-colors cursor-pointer shadow-lg">
                                <ShieldAlert className="h-5 w-5" />
                                Report a Romance Scam
                                <ArrowRight className="h-4 w-4" />
                            </ReportScamButton>
                        </div>
                    </section>

                    {/* ── Statistics Table ──────────────────────────────────── */}
                    <section>
                        <div className="text-center mb-8">
                            <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-semibold mb-4">
                                Data
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                Romance Scam Statistics India 2026
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-base">
                                Source: NCRB Cyber Crime Report 2025, I4C, MHA Romance Fraud Data
                            </p>
                        </div>
                        <div className="overflow-x-auto rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-rose-50 dark:bg-rose-950/30 border-b border-rose-100 dark:border-rose-900">
                                        <th className="text-left p-4 font-bold text-gray-900 dark:text-white">Scam Type</th>
                                        <th className="text-right p-4 font-bold text-gray-900 dark:text-white">% of Complaints</th>
                                        <th className="text-right p-4 font-bold text-gray-900 dark:text-white">Avg. Loss</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { type: "Fake Dating Profile / Catfishing", pct: "29%", loss: "₹68,000" },
                                        { type: "Matrimonial Fraud India", pct: "22%", loss: "₹1.1 Lakh" },
                                        { type: "Military Romance Scam", pct: "15%", loss: "₹2.8 Lakh" },
                                        { type: "Social Media Romance Scam", pct: "14%", loss: "₹54,000" },
                                        { type: "Pig Butchering Scam India", pct: "8%", loss: "₹18.5 Lakh" },
                                        { type: "Oil Rig Romance Scam", pct: "7%", loss: "₹1.6 Lakh" },
                                        { type: "Sextortion via Fake Romance", pct: "5%", loss: "₹42,000" },
                                    ].map(({ type, pct, loss }, i) => (
                                        <tr key={type} className={`border-b border-gray-50 dark:border-gray-800 ${i % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50/50 dark:bg-gray-900/50"}`}>
                                            <td className="p-4 text-gray-700 dark:text-gray-300">{type}</td>
                                            <td className="p-4 text-right font-semibold text-rose-600 dark:text-rose-400">{pct}</td>
                                            <td className="p-4 text-right font-semibold text-gray-900 dark:text-white">{loss}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* ── More Guides ───────────────────────────────────────── */}
                    <section>
                        <div className="text-center mb-8">
                            <span className="inline-block px-3 py-1 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 text-xs font-semibold mb-4">
                                Deep Dives
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                More Romance Scam Guides
                            </h2>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {[
                                { title: "Military Romance Scam India: Army Officer Impersonation Guide", href: "/blog/military-romance-scam-india/", desc: "How these scams work, the script they follow, and why the Indian Army's deployment rules debunk every excuse." },
                                { title: "Pig Butchering Scam India: Complete 2026 Guide", href: "/blog/pig-butchering-scam-india/", desc: "How ₹580 Crore was stolen through fake crypto trading platforms in India and how to identify them." },
                                { title: "Matrimonial Fraud India: Shaadi.com Scam Guide", href: "/blog/matrimonial-fraud-india/", desc: "How scammers exploit India's matrimonial culture on Shaadi.com, Jeevansathi, and BharatMatrimony." },
                                { title: "Reverse Image Search a Romance Scammer  Step by Step", href: "/blog/reverse-image-search-romance-scammer/", desc: "Exact steps to catch a catfish using Google Images and TinEye before you've invested any money." },
                                { title: "Instagram Romance Scam India: NRI Entrepreneur Fraud", href: "/blog/instagram-romance-scam-india/", desc: "How scammers pose as successful NRI professionals on Instagram and what happens after you respond to that DM." },
                                { title: "I Sent Money to a Romance Scammer  What Now?", href: "/blog/sent-money-to-romance-scammer-india/", desc: "Immediate steps, 1930 helpline guide, cybercrime.gov.in filing, and realistic recovery expectations." },
                            ].map(({ title, href, desc }) => (
                                <Link
                                    key={href}
                                    href={'/blog'}
                                    className="group flex flex-col p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md hover:border-rose-200 dark:hover:border-rose-800 transition-all"
                                >
                                    <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-2 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">{title}</h3>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed flex-1">{desc}</p>
                                    <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-rose-600 dark:text-rose-400">
                                        Read Guide <ArrowRight className="h-3 w-3" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* ── FAQ ───────────────────────────────────────────────── */}
                    <section>
                        <div className="mb-10">
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-3">
                                Frequently Asked Questions About Romance Scams in India
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400">
                                Honest answers to the most common questions about romance scams in India.
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

                    {/* ── Related Free Safety Tools ──────────────────────────── */}
                    <section>
                        <div className="text-center mb-8">
                            <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-semibold mb-4">
                                Free Tools
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                Related Free Safety Tools
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-base">
                                Use these free RakshaAI tools to verify a suspicious number, website, or UPI ID before you respond.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-3 gap-5">
                            {[
                                { title: "Phone Number Checker", desc: "Check if a phone number is linked to reported romance scammers, spam callers, or fraud cases across India.", href: "/phone-number-checker/", icon: "📞" },
                                { title: "Website Safety Checker", desc: "Verify if a website or trading platform is legitimate before entering personal details or making payments.", href: "/website-safety-checker/", icon: "🌐" },
                                { title: "UPI ID Checker", desc: "Check if a UPI ID has been flagged in fraud reports before sending any money or payment.", href: "/upi-id-checker/", icon: "💳" },
                            ].map(({ title, desc, href, icon }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    className="group flex flex-col items-start gap-3 p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md hover:border-emerald-200 dark:hover:border-emerald-800 transition-all"
                                >
                                    <span className="text-3xl">{icon}</span>
                                    <h3 className="font-bold text-gray-900 dark:text-white text-base group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">{title}</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1">{desc}</p>
                                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                                        Check Free <ArrowRight className="h-3 w-3" />
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* ── Recent Scam Alerts ─────────────────────────────────── */}
                    <section>
                        <div className="text-center mb-8">
                            <span className="inline-block px-3 py-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-xs font-semibold mb-4">
                                Live Alerts
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                Recent Romance Scam Alerts  Updated March 2026
                            </h2>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-5">
                            {[
                                {
                                    badge: "March 2026 · Active",
                                    title: "Pig Butchering via MetaTrader Pro  LinkedIn Targeting",
                                    desc: "Scammer connecting with Indian IT professionals on LinkedIn, posing as an overseas fund manager. Directing victims to MetaTrader Pro platform. Minimum investment ₹50,000. Platform is fake. Three FIRs filed in Bengaluru and Hyderabad.",
                                    color: "border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/30",
                                },
                                {
                                    badge: "Alert · Shaadi.com",
                                    title: "Fake Army Colonel  Shaadi.com Matrimonial Fraud",
                                    desc: "Profile posing as a retired Army Colonel (widowed, one son) active on Shaadi.com. Requests ₹4.2 lakh for 'leave travel' and customs clearance before a 'meeting that never happens.' Multiple complaints filed in Delhi, Lucknow, and Jaipur.",
                                    color: "border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-950/30",
                                },
                                {
                                    badge: "Alert · Instagram",
                                    title: "NRI Entrepreneur Romance Scam  Mumbai, Pune, Hyderabad",
                                    desc: "Unsolicited Instagram DMs from accounts posing as successful NRI entrepreneurs based in Dubai or the UK. After 2–3 weeks of conversation, requests to invest in a private business they are 'raising money for.' Reports from Mumbai, Pune, and Hyderabad.",
                                    color: "border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-950/30",
                                },
                                {
                                    badge: "February 2026 · Active",
                                    title: "AI Deepfake Video Call Scam  Sextortion",
                                    desc: "Scammer initiates WhatsApp video call using AI-generated face of an attractive young woman. Real-time deepfake appears convincing. Explicit pre-recorded content displayed during call. Screenshots used for blackmail. 47 cases reported across India in January–February 2026.",
                                    color: "border-rose-200 dark:border-rose-800 bg-rose-50 dark:bg-rose-950/30",
                                },
                            ].map(({ badge, title, desc, color }) => (
                                <div key={title} className={`p-5 rounded-2xl border ${color}`}>
                                    <span className="inline-block px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 text-xs font-bold mb-3">{badge}</span>
                                    <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-2">{title}</h3>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── Final CTA ─────────────────────────────────────────── */}
                    <section className="rounded-2xl bg-gradient-to-br from-rose-700 via-pink-700 to-violet-700 p-8 sm:p-12 text-white text-center shadow-2xl relative overflow-hidden">
                        <div className="pointer-events-none absolute inset-0">
                            <div className="absolute -top-10 -left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
                        </div>
                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-xs font-semibold mb-6 border border-white/20">
                                <Shield className="h-4 w-4" />
                                Free Number & Profile Verification
                            </div>
                            <h2 className="text-2xl sm:text-4xl font-extrabold mb-4 leading-tight">
                                Something Doesn't Feel Right?<br className="hidden sm:block" />
                                Check Before You Trust.
                            </h2>
                            <p className="text-rose-100 mb-8 text-sm sm:text-base max-w-xl mx-auto">
                                If you've matched with someone online and something feels off  check their phone number
                                on RakshaAI before going further. Or report a romance scam to protect the
                                next person from the same fraudster.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <ReportScamButton className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-rose-600 font-bold text-sm shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                                    <MessageSquareWarning className="h-5 w-5" />
                                    Report a Romance Scam
                                    <ArrowRight className="h-4 w-4" />
                                </ReportScamButton>
                                <Link
                                    href="/phone-number-checker/"
                                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 text-white font-semibold text-sm border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300"
                                >
                                    Check a Phone Number
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                            <p className="mt-6 text-rose-200 text-xs">
                                🇮🇳 India-focused romance scam guidance · Free consumer access · No registration required
                            </p>
                        </div>
                    </section>

                </div>
            </main>
        </DefaultLayout>
    );
}
