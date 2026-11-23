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
    Phone,
    PhoneOff,
    PhoneCall,
    Users,
    IndianRupee,
    ShieldAlert,
    ArrowRight,
    Info,
    BadgeCheck,
    MessageSquareWarning,
    Smartphone,
    Globe,
    Mic,
    Radio,
    UserX,
    Clock,
    FileWarning,
    Volume2,
    ChevronDown,
    Lock,
    Eye,
} from "lucide-react";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
    title: "Phone Scams India 2026: Types & How to Stop Them",
    description:
        "All types of phone scams in India: fake caller ID, vishing, SIM swap fraud, TRAI scam calls. Warning signs and how to stop spam calls.",
    alternates: {
        canonical: "https://rakshaai.co/scams/phone-scams",
    },
    robots: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
    openGraph: {
        title: "Phone Scams India 2026: All Types, Fake Caller ID & How to Stop Spam Calls | RakshaAI",
        description:
            "Caller ID spoofing, vishing, SIM swap fraud, fake TRAI calls  a complete 2026 guide to every phone scam type targeting Indians, and how to defend yourself.",
        url: "https://rakshaai.co/scams/phone-scams",
        type: "website",
    siteName: 'RakshaAI',
        images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'RakshaAI' }],
  },
    twitter: {
        card: "summary_large_image",
        title: "Phone Scams in India 2026 | RakshaAI",
        description:
            "All 7 phone scam types in India explained  fake caller ID, vishing, SIM swap, TRAI calls, missed call scam, and more.",
        images: ['/opengraph-image'],
  },
    other: { "geo.region": "IN", language: "en-IN" },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────
const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Phone Scams in India 2026: Types, Fake Caller ID & How to Stop Spam Calls",
    url: "https://rakshaai.co/scams/phone-scams",
    datePublished: "2024-01-15",
    dateModified: "2026-06-11",
    description:
        "A comprehensive 2026 guide to phone fraud in India  all 7 types including caller ID spoofing, vishing, SIM swap fraud, fake TRAI calls, missed call scam, and how to report every type.",
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
            name: "What are the most common types of phone scams in India in 2026?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The seven most common types are: (1) Fake bank caller ID calls that steal OTPs  38% of complaints. (2) Fake TRAI call india threatening number disconnection  22%. (3) SIM swap fraud india  14%, highest average loss at ₹95,000. (4) Vishing india  general voice phishing by impersonators. (5) Missed call scam india (wangiri fraud)  8%. (6) Fake police / digital arrest via phone. (7) WhatsApp call scam and video blackmail. India receives 1.35 crore scam calls every day according to TRAI 2026 data.",
            },
        },
        {
            "@type": "Question",
            name: "What is vishing and how does it target Indians?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Vishing india means voice phishing  a scam conducted entirely over a phone call. The caller impersonates a trusted authority: your bank's fraud department, a TRAI officer, a KYC compliance officer, or a government agency. They use caller ID spoofing india tools to display legitimate-looking numbers. The goal is to make you share OTPs, Aadhaar details, or UPI PINs. India-specific vishing scripts frequently reference RBI regulations, Aadhaar-linked services, and digital arrest threats to create urgency. The defence: hang up and call back on a number from the official website.",
            },
        },
        {
            "@type": "Question",
            name: "How does fake caller ID work and can I verify the real number?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Fake caller ID (caller ID spoofing) uses VoIP applications that allow the caller to set any number as the displayed outgoing caller ID. These apps are available for as little as ₹200/month on Telegram and require no technical skill. The displayed number may be identical to your bank's genuine customer care number. To verify the real origin, you cannot rely on the displayed number alone. Instead: hang up, call the official number from your bank's website or card, and mention that you just received a suspicious call. You can also check the number on RakshaAI's Phone Number Checker against our fraud database.",
            },
        },
        {
            "@type": "Question",
            name: "What is SIM swap fraud India and how do I know if I am a victim?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "SIM swap fraud india occurs when a fraudster uses your Aadhaar number, PAN, or other personal data to request a duplicate SIM from your telecom operator, claiming the original was lost or damaged. Once they receive the new SIM, all OTPs and banking SMSes route to them, allowing full account takeover. Warning signs: sudden complete loss of mobile signal while Wi-Fi works normally; SMS confirmations for OTPs or transactions you didn't initiate; inability to make calls or receive messages. If this happens: call your telecom operator immediately from another phone, report via Sanchar Saathi portal, and call 1930 if bank accounts were accessed.",
            },
        },
        {
            "@type": "Question",
            name: "How does the fake TRAI call India scam work?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The fake TRAI call india scam begins with a caller claiming to be from TRAI, DoT, or the 'Telecom Regulatory Authority' saying your SIM will be disconnected within hours due to 'illegal use' linked to your Aadhaar or complaints filed against your number. You are then transferred to a 'senior cyber officer.' The call escalates to demands for personal data or payment. Reality: TRAI never calls individual subscribers about disconnection. All TRAI communications are in writing. TRAI's complaint line is 1800-11-4000 and is inbound  they do not make outgoing disconnect threats.",
            },
        },
        {
            "@type": "Question",
            name: "What is the missed call scam in India and how do I avoid it?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The missed call scam india (internationally known as wangiri scam) involves a single ring from an international number. Calling back connects you to a premium-rate service that charges ₹300–₹1,000 per minute. To avoid it: never call back unknown international numbers you didn't expect, especially from unusual country codes. Check any missed call on RakshaAI's Phone Number Checker before returning it.",
            },
        },
        {
            "@type": "Question",
            name: "What should I do immediately if I shared my OTP with a phone scammer?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Act within the first 30 minutes: (1) Call your bank's 24/7 fraud line and say 'I shared my OTP with a suspected fraudster.' Request an emergency block. (2) Call 1930 from another phone. (3) Change your UPI PIN and internet banking password from a secure device. (4) Enable international transaction blocks. (5) File on cybercrime.gov.in with the scammer's number and call log. The 30-minute window is the most critical  money transferred from OTP authentication moves to mule accounts within minutes.",
            },
        },
        {
            "@type": "Question",
            name: "How do I register on TRAI DND 1909 to reduce spam calls?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "DND registration india via TRAI 1909: Method 1  SMS 'START DND' to 1909 from your mobile number. Method 2  Call 1909 and follow the IVR menu. Method 3  Visit tccms.gov.in and register online. Your number is added to the National Do Not Disturb Registry within 7 working days. For reporting fraud calls specifically, use the Sanchar Sathi Chakshu portal (sancharsaathi.gov.in) which is specifically for reporting suspected scam communications.",
            },
        },
        {
            "@type": "Question",
            name: "Can I trace the real location of a phone scammer in India?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Individual users cannot trace a caller's location directly. However, when you file a complaint on cybercrime.gov.in, the cybercrime cell can obtain call data records from telecom operators through legal process. Caller ID spoofing india tools route calls through VoIP networks, but telecom operators can still trace the originating gateway IP in most cases. For faster number intelligence, file via the Sanchar Sathi Chakshu portal  DoT's system cross-references the reported number with TRAI and all operators simultaneously.",
            },
        },
        {
            "@type": "Question",
            name: "What is the WhatsApp call scam and how does it work?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The WhatsApp call scam india typically takes two forms: (1) Video call blackmail  the scammer initiates a WhatsApp video call and uses deepfake software or pre-recorded explicit content to create screenshots appearing to show the victim in compromising situations. The victim is then threatened with sharing these to their contacts unless they pay. (2) Impersonation calls  callers pose as customer service for popular brands using WhatsApp Business profiles with fake logos. Report attempts immediately to cybercrime.gov.in and to WhatsApp via the in-app report function.",
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
        { "@type": "ListItem", position: 3, name: "Phone Scams", item: "https://rakshaai.co/scams/phone-scams/" },
    ],
};

const itemListData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "7 Types of Phone Scams in India 2026",
    url: "https://rakshaai.co/scams/phone-scams",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Fake Caller ID and Bank Impersonation", url: "https://rakshaai.co/scams/phone-scams/vishing/" },
        { "@type": "ListItem", position: 2, name: "Vishing India  Voice Phishing Attacks", url: "https://rakshaai.co/scams/phone-scams/vishing/" },
        { "@type": "ListItem", position: 3, name: "SIM Swap Fraud India", url: "https://rakshaai.co/scams/phone-scams/sim-swap-fraud/" },
        { "@type": "ListItem", position: 4, name: "Fake TRAI Call India  Disconnect Threat Scam", url: "https://rakshaai.co/scams/phone-scams/fake-trai-calls/" },
        { "@type": "ListItem", position: 5, name: "Missed Call Scam India  Wangiri Fraud", url: "https://rakshaai.co/scams/phone-scams/missed-call-scam/" },
        { "@type": "ListItem", position: 6, name: "Fake Police Call  Digital Arrest via Phone", url: "https://rakshaai.co/scams/upi-fraud/digital-arrest-scam/" },
        { "@type": "ListItem", position: 7, name: "WhatsApp Call Scam India  Video Blackmail", url: "https://rakshaai.co/scams/phone-scams/whatsapp-call-scam/" },
    ],
};

// ── Scam types ────────────────────────────────────────────────────────────────
const scamTypes = [
    {
        icon: PhoneCall,
        emoji: "📞",
        color: "from-cyan-500 to-teal-600",
        bg: "bg-cyan-50 dark:bg-cyan-950/30",
        border: "border-cyan-200 dark:border-cyan-900",
        title: "Fake Caller ID and Bank Impersonation",
        desc: "Scammers spoof your bank's official number using caller ID spoofing apps. They pose as your bank's fraud team and request your OTP to 'block a suspicious transaction.' Your account is drained once you share.",
        risk: "Very High",
        riskColor: "text-red-600 dark:text-red-400",
        href: "/scams/phone-scams/vishing/",
    },
    {
        icon: Mic,
        emoji: "🎤",
        color: "from-violet-500 to-purple-600",
        bg: "bg-violet-50 dark:bg-violet-950/30",
        border: "border-violet-200 dark:border-violet-900",
        title: "Vishing India  Voice Phishing Attacks",
        desc: "A scammer calls pretending to be a KYC officer, insurance agent, or bank representative. They extract account details, Aadhaar numbers, or PAN through a scripted, professional-sounding conversation.",
        risk: "Very High",
        riskColor: "text-red-600 dark:text-red-400",
        href: "/scams/phone-scams/vishing/",
    },
    {
        icon: Smartphone,
        emoji: "📱",
        color: "from-red-500 to-rose-600",
        bg: "bg-red-50 dark:bg-red-950/30",
        border: "border-red-200 dark:border-red-900",
        title: "SIM Swap Fraud India  The Silent Takeover",
        desc: "Fraudsters use your Aadhaar and personal data to request a SIM replacement from your telecom operator. Once the new SIM activates, all your OTPs and banking alerts route to them.",
        risk: "Extreme",
        riskColor: "text-red-700 dark:text-red-300",
        href: "/scams/phone-scams/sim-swap-fraud/",
    },
    {
        icon: Radio,
        emoji: "📡",
        color: "from-orange-500 to-amber-600",
        bg: "bg-orange-50 dark:bg-orange-950/30",
        border: "border-orange-200 dark:border-orange-900",
        title: "Fake TRAI Call India  Disconnect Threat Scam",
        desc: "Caller claims to be from TRAI or DoT and says your number will be disconnected in 2 hours due to 'illegal activity.' Victims are transferred to a 'cybercrime officer' who demands payment or personal data.",
        risk: "Very High",
        riskColor: "text-red-600 dark:text-red-400",
        href: "/scams/phone-scams/fake-trai-calls/",
    },
    {
        icon: PhoneOff,
        emoji: "📵",
        color: "from-pink-500 to-rose-600",
        bg: "bg-pink-50 dark:bg-pink-950/30",
        border: "border-pink-200 dark:border-pink-900",
        title: "Missed Call Scam India  Wangiri Fraud",
        desc: "You receive one ring from an international number. Calling back connects you to a premium-rate service. Charges accumulate in seconds. The wangiri scam is the world's oldest phone fraud, still growing in India.",
        risk: "Medium",
        riskColor: "text-orange-600 dark:text-orange-400",
        href: "/scams/phone-scams/missed-call-scam/",
    },
    {
        icon: UserX,
        emoji: "👮",
        color: "from-red-600 to-rose-700",
        bg: "bg-red-50 dark:bg-red-950/30",
        border: "border-red-200 dark:border-red-900",
        title: "Fake Police Call  Digital Arrest via Phone",
        desc: "Caller claims to be CBI, ED, or police. Says your number is linked to a crime. Demands payment to 'clear your name.' This is the phone-based version of digital arrest scam. Average victim loss: ₹3.5 lakh.",
        risk: "Extreme",
        riskColor: "text-red-700 dark:text-red-300",
        href: "/scams/upi-fraud/digital-arrest-scam/",
    },
    {
        icon: MessageSquareWarning,
        emoji: "💬",
        color: "from-teal-500 to-emerald-600",
        bg: "bg-teal-50 dark:bg-teal-950/30",
        border: "border-teal-200 dark:border-teal-900",
        title: "WhatsApp Call Scam India  Video Blackmail",
        desc: "Scammer initiates a WhatsApp video call and uses deepfake or pre-recorded explicit content to create screenshots. Victim is blackmailed into paying to prevent the content from being 'shared with contacts.'",
        risk: "Very High",
        riskColor: "text-red-600 dark:text-red-400",
        href: "/scams/phone-scams/whatsapp-call-scam/",
    },
];

// ── How caller ID spoofing works ──────────────────────────────────────────────
const spoofingSteps = [
    {
        step: "01",
        color: "from-cyan-500 to-teal-600",
        bg: "bg-cyan-50 dark:bg-cyan-950/30",
        border: "border-cyan-200 dark:border-cyan-900",
        title: "The Fraudster Picks a Target Number",
        desc: "They choose a number you're likely to trust  your bank's customer care, TRAI, CBI, or even a number in your own contact list. This takes seconds to set up using widely available VoIP services.",
        urgent: false,
    },
    {
        step: "02",
        color: "from-blue-500 to-indigo-600",
        bg: "bg-blue-50 dark:bg-blue-950/30",
        border: "border-blue-200 dark:border-blue-900",
        title: "Your Phone Displays the Fake Number",
        desc: "The call reaches you with the spoofed number prominently displayed. Standard smartphones have no mechanism to detect this mismatch  the display is entirely controlled by the caller's signalling data.",
        urgent: false,
    },
    {
        step: "03",
        color: "from-orange-500 to-amber-600",
        bg: "bg-orange-50 dark:bg-orange-950/30",
        border: "border-orange-200 dark:border-orange-900",
        title: "The Caller Builds Credibility Fast",
        desc: "They greet you by name, cite your partial account number, location, or recent transaction  data bought from data breaches or leaked customer databases. This shocks you into believing the call is genuine.",
        urgent: false,
    },
    {
        step: "04",
        color: "from-red-500 to-rose-600",
        bg: "bg-red-50 dark:bg-red-950/30",
        border: "border-red-200 dark:border-red-900",
        title: "Urgency and Fear Are Injected",
        desc: "A problem is announced  a suspicious transaction, an account about to be blocked, an arrest warrant. The urgency eliminates rational thinking and shortens the decision window dramatically.",
        urgent: true,
    },
    {
        step: "05",
        color: "from-rose-500 to-pink-600",
        bg: "bg-rose-50 dark:bg-rose-950/30",
        border: "border-rose-200 dark:border-rose-900",
        title: "Sensitive Information Is Extracted",
        desc: "OTP, full card number, CVV, PIN, UPI handle, Aadhaar  one piece at a time. Each question sounds routine. By the time the damage is obvious, enough information has been shared for complete account takeover.",
        urgent: true,
    },
    {
        step: "06",
        color: "from-gray-500 to-slate-600",
        bg: "bg-gray-50 dark:bg-gray-900/50",
        border: "border-gray-200 dark:border-gray-800",
        title: "Funds Are Drained and Contact Ends",
        desc: "With OTP and account access, funds are transferred within seconds. The call ends abruptly. Calling the same number back connects to the real bank  who knows nothing about the call. The spoofed number leaves no trace.",
        urgent: false,
    },
];

// ── Red flags ─────────────────────────────────────────────────────────────────
const redFlags = [
    "The caller says your phone number will be 'disconnected,' 'blocked,' or 'deactivated' in a set time  TRAI and DoT never call individuals for this reason",
    "The caller asks for your OTP to 'verify your identity,' 'complete KYC,' or 'prevent fraud'  no bank, government agency, or telecom operator ever needs your OTP",
    "You receive a single ring (one missed call) from an international number you don't recognise  calling back may connect you to a premium-rate service",
    "The displayed caller ID matches your bank's official number but the conversation involves urgency, OTP requests, or demand for payment",
    "The caller transfers you to a 'senior officer,' 'cyber cell officer,' or 'RBI representative'  this escalation is a social engineering tactic, not a real transfer",
    "Your phone suddenly loses network signal for 30 minutes or more while everything else works normally  this is the first sign of SIM swap fraud india",
    "Any caller claims your Aadhaar number, PAN, or bank account is 'involved in illegal activity' and demands immediate payment or personal data to 'resolve the case'",
];

// ── What to do ────────────────────────────────────────────────────────────────
const whatToDo = [
    {
        step: "01",
        title: "Call 1930  National Cyber Crime Financial Helpline",
        desc: "The 1930 helpline is operated by the Ministry of Home Affairs under I4C. Call immediately if you transferred money, shared an OTP that resulted in a transaction, or gave account credentials to a phone scammer. Provide: your name, the scammer's phone number, the amount lost, the time of the call, and your transaction reference. The 1930 helpline can flag the receiving account and initiate a freeze request within minutes.",
        urgent: true,
    },
    {
        step: "02",
        title: "Report via DoT's Sanchar Sathi Chakshu Portal",
        desc: "Visit sancharsaathi.gov.in and click 'Report Suspect Fraud Communication.' This portal is specifically designed for reporting fraudulent voice calls, SMS, and WhatsApp messages. Your report is automatically shared with TRAI, DoT, and all telecom operators simultaneously. For SIM swap fraud india cases, also use the CEIR mobile number fraud section to block the fraudulently obtained SIM.",
        urgent: true,
    },
    {
        step: "03",
        title: "File on cybercrime.gov.in",
        desc: "Go to cybercrime.gov.in and select 'Report Financial Cyber Crime.' Attach: a screenshot of the call log, any SMS or WhatsApp messages from the scammer, bank transaction records showing the unauthorised debit, and the case number from your 1930 call if available. This complaint generates an FIR-level reference that banks and courts recognise for phone scam recovery india proceedings.",
        urgent: false,
    },
    {
        step: "04",
        title: "Alert Your Bank Immediately for Financial Losses",
        desc: "Call your bank's 24/7 fraud line and request a 'dispute' on any transaction initiated during or immediately after the fraudulent call. Under RBI guidelines, your bank must respond to fraud disputes within 48 hours. For OTP fraud via phone cases, banks can review whether the OTP-authenticated transaction was consistent with your usual behaviour. Raise a chargeback if a debit card was used.",
        urgent: false,
    },
    {
        step: "05",
        title: "File an FIR at Your Local Cybercrime Police Station",
        desc: "A physical FIR strengthens your case for phone scam recovery india, particularly for losses above ₹10,000. Bring your cybercrime.gov.in complaint reference, 1930 case number, call logs, and bank statements. The Consumer Protection Act 2019 also provides a route to the National Consumer Helpline for telecom fraud complaints involving harassment or threats.",
        urgent: false,
    },
];

// ── FAQs ──────────────────────────────────────────────────────────────────────
const faqs = [
    {
        q: "What are the most common types of phone scams in India in 2026?",
        a: "The seven most common types are: (1) Fake bank caller ID calls that steal OTPs  38% of complaints. (2) Fake TRAI call india threatening number disconnection  22%. (3) SIM swap fraud india  14%, highest average loss at ₹95,000. (4) Vishing india  general voice phishing by impersonators. (5) Missed call scam india (wangiri fraud)  8%. (6) Fake police / digital arrest via phone. (7) WhatsApp call scam and video blackmail. India receives 1.35 crore scam calls every day according to TRAI 2026 data.",
    },
    {
        q: "What is vishing and how does it target Indians?",
        a: "Vishing india means voice phishing  a scam conducted entirely over a phone call. The caller impersonates a trusted authority: your bank's fraud department, a TRAI officer, a KYC compliance officer, or a government agency. They use caller ID spoofing india tools to display legitimate-looking numbers. The goal is to make you share OTPs, Aadhaar details, or UPI PINs. India-specific vishing scripts frequently reference RBI regulations, Aadhaar-linked services, and digital arrest threats to create urgency. The defence: hang up and call back on a number from the official website.",
    },
    {
        q: "How does fake caller ID work and can I verify the real number?",
        a: "Fake caller ID (caller ID spoofing) uses VoIP applications that allow the caller to set any number as the displayed outgoing caller ID. These apps are available for as little as ₹200/month on Telegram and require no technical skill. The displayed number may be identical to your bank's genuine customer care number. To verify the real origin, you cannot rely on the displayed number alone. Instead: hang up, call the official number from your bank's website or card, and mention that you just received a suspicious call. You can also check the number on RakshaAI's Phone Number Checker against our fraud database.",
    },
    {
        q: "What is SIM swap fraud India and how do I know if I am a victim?",
        a: "SIM swap fraud india occurs when a fraudster uses your Aadhaar number, PAN, or other personal data to request a duplicate SIM from your telecom operator, claiming the original was lost or damaged. Once they receive the new SIM, all OTPs and banking SMSes route to them, allowing full account takeover. Warning signs: sudden complete loss of mobile signal while Wi-Fi works normally; SMS confirmations for OTPs or transactions you didn't initiate; inability to make calls or receive messages. If this happens: call your telecom operator immediately from another phone, report via Sanchar Saathi portal, and call 1930 if bank accounts were accessed.",
    },
    {
        q: "How does the fake TRAI call India scam work?",
        a: "The fake TRAI call india scam begins with a caller claiming to be from TRAI, DoT, or the 'Telecom Regulatory Authority' saying your SIM will be disconnected within hours due to 'illegal use' linked to your Aadhaar. You are then transferred to a 'senior cyber officer.' The call escalates to demands for personal data or payment. Reality: TRAI never calls individual subscribers about disconnection. All TRAI communications are in writing. TRAI's complaint line is 1800-11-4000 and is inbound  they do not make outgoing disconnect threats. If you receive this call, hang up and report it via the Sanchar Sathi Chakshu portal.",
    },
    {
        q: "What is the missed call scam in India and how do I avoid it?",
        a: "The missed call scam india (internationally known as wangiri scam, from the Japanese for 'one ring and cut') involves a single ring from an international number. Calling back connects you to a premium-rate service that charges ₹300–₹1,000 per minute. The scam works in seconds. To avoid it: never call back unknown international numbers you didn't expect, especially from unusual country codes (+268 Swaziland, +269 Comoros, +60 Malaysia are commonly used). Check any missed call on RakshaAI's Phone Number Checker before returning it.",
    },
    {
        q: "What should I do immediately if I shared my OTP with a phone scammer?",
        a: "Act within the first 30 minutes: (1) Call your bank's 24/7 fraud line immediately and say 'I shared my OTP with a suspected fraudster.' Request an emergency block on your account. (2) Call 1930 simultaneously from another phone. (3) Change your UPI PIN and internet banking password from a secure device. (4) Enable international transaction blocks if your bank offers them. (5) File on cybercrime.gov.in with the scammer's number and call log. For phone scam recovery india, the 30-minute window is the most critical  money transferred from OTP authentication moves to mule accounts within minutes.",
    },
    {
        q: "How do I register on TRAI DND 1909 to reduce spam calls?",
        a: "DND registration india via TRAI 1909: Method 1  SMS 'START DND' to 1909 from your mobile number. Method 2  Call 1909 and follow the IVR menu. Method 3  Visit tccms.gov.in and register online. Your number is added to the National Do Not Disturb Registry within 7 working days. For reporting fraud calls specifically, use the Sanchar Sathi Chakshu portal (sancharsaathi.gov.in)  this is separate from DND registration india and is specifically for reporting suspected scam communications.",
    },
    {
        q: "Can I trace the real location of a phone scammer in India?",
        a: "Individual users cannot trace a caller's location directly. However, when you file a complaint on cybercrime.gov.in, the cybercrime cell can obtain call data records from telecom operators through legal process. Caller ID spoofing india tools route calls through VoIP networks, but telecom operators can still trace the originating gateway IP in most cases. For faster number intelligence, file via the Sanchar Sathi Chakshu portal  DoT's system cross-references the reported number with TRAI and all operators simultaneously. The more reports a number receives, the faster it is flagged and blocked network-wide.",
    },
    {
        q: "What is the WhatsApp call scam and how does it work?",
        a: "The WhatsApp call scam india typically takes two forms: (1) Video call blackmail  the scammer initiates a WhatsApp video call and uses deepfake software or pre-recorded explicit content to create screenshots appearing to show the victim in compromising situations. The victim is then threatened with sharing these to their contacts unless they pay. (2) Impersonation calls  callers pose as customer service for popular brands using WhatsApp Business profiles with fake logos. Both forms are rising sharply in 2025–26. Never accept WhatsApp video calls from unknown numbers. Report attempts immediately to cybercrime.gov.in and to WhatsApp via the in-app report function.",
    },
];

// ─────────────────────────────────────────────────────────────────────────────
export default function PhoneScamsPage() {
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
                <section className="relative overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-teal-50 dark:from-gray-950 dark:via-gray-900 dark:to-cyan-950 pt-20 pb-24 px-4">
                    <div className="pointer-events-none absolute inset-0 -z-10">
                        <div className="absolute top-10 left-1/4 w-96 h-96 bg-cyan-300/10 rounded-full blur-3xl animate-pulse" />
                        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-300/10 rounded-full blur-3xl animate-pulse delay-700" />
                        <div className="absolute top-1/2 right-0 w-64 h-64 bg-blue-300/10 rounded-full blur-3xl animate-pulse delay-1000" />
                    </div>

                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-100 to-teal-100 dark:from-cyan-900/40 dark:to-teal-900/40 text-cyan-700 dark:text-cyan-300 text-xs font-semibold mb-6 border border-cyan-200 dark:border-cyan-800 shadow-sm">
                            <PhoneOff className="h-4 w-4 animate-pulse" />
                            1.35 crore scam calls received in India every single day  TRAI 2026
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
                            Phone Scams in India 2026:{" "}
                            <span className="bg-gradient-to-r from-cyan-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
                                All Types, Fake Caller ID &amp; How to Stop Spam Calls
                            </span>
                        </h1>

                        <div className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed space-y-4 text-left">
                            <p>
                                Phone scams in India are the single largest entry point for financial cyber fraud in 2026. Every day, 1.35 crore scam calls are placed across Indian telecom networks  targeting bank customers, Aadhaar holders, UPI users, and anyone who answers an unknown call.
                            </p>
                            <p>
                                The tools driving this surge are cheap and accessible: caller ID spoofing apps cost as little as ₹200/month on Telegram and can display any number, including your bank's official helpline. Complaints to the 1930 helpline alone logged ₹4,200 crore in losses in the 12 months to February 2026, a 42% year-on-year rise in phone fraud complaints.
                            </p>
                            <p>
                                This page covers all 7 types of phone scams targeting Indians in 2026, how to recognise each one, the 7 warning signs to stop a call immediately, how to report to the right authority (1930, Chakshu portal, cybercrime.gov.in), and what to do if you've already been targeted.
                            </p>
                        </div>

                        {/* Not-sure CTA box */}
                        <div className="max-w-xl mx-auto mb-10 rounded-xl border border-cyan-200 dark:border-cyan-800 bg-cyan-50 dark:bg-cyan-950/30 p-5 flex flex-col sm:flex-row items-center gap-4">
                            <div className="flex-1 text-left">
                                <p className="text-sm font-semibold text-cyan-800 dark:text-cyan-200">Received a Suspicious Call?</p>
                                <p className="text-xs text-cyan-700 dark:text-cyan-300 mt-0.5">Check the number in 5 seconds  free fraud database lookup</p>
                            </div>
                            <Link
                                href="/phone-number-checker/"
                                className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-600 text-white text-xs font-bold shadow hover:shadow-cyan-300/50 hover:scale-105 transition-all duration-200"
                            >
                                CHECK PHONE NUMBER FREE
                                <ArrowRight className="h-3.5 w-3.5" />
                            </Link>
                        </div>

                        {/* Stats strip */}
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            {[
                                { value: "1.35 Crore", label: "Scam Calls Received in India Daily (TRAI 2026)", icon: <Phone className="h-4 w-4" /> },
                                { value: "₹4,200 Cr", label: "Losses Reported to 1930 Helpline  12M to Feb 2026", icon: <IndianRupee className="h-4 w-4" /> },
                                { value: "+42%", label: "Year-on-Year Growth in Phone Fraud Complaints", icon: <AlertTriangle className="h-4 w-4" /> },
                                { value: "45%", label: "Of Complaints Now From Tier-2/3 Cities (2026)", icon: <Users className="h-4 w-4" /> },
                            ].map(({ value, label, icon }, i) => (
                                <div
                                    key={label}
                                    className="group flex flex-col items-center px-6 py-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 min-w-[130px]"
                                    style={{ animationDelay: `${i * 100}ms` }}
                                >
                                    <div className="text-cyan-500 mb-1 group-hover:scale-110 transition-transform">{icon}</div>
                                    <span className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">{value}</span>
                                    <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-center">{label}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <ReportScamButton className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-600 text-white font-bold text-sm shadow-lg hover:shadow-cyan-300/50 hover:scale-105 transition-all duration-300 cursor-pointer">
                                <ShieldAlert className="h-5 w-5" />
                                Report a Spam Call
                                <ArrowRight className="h-4 w-4" />
                            </ReportScamButton>
                            <a
                                href="#scam-types"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 font-semibold text-sm border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
                            >
                                See All Phone Scam Types
                                <ChevronDown className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </section>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

                    {/* ── The Scale of the Problem ──────────────────────────── */}
                    <section>
                        <div className="grid lg:grid-cols-2 gap-10 items-center">
                            <div>
                                <span className="inline-block px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 text-xs font-semibold mb-4">
                                    Why Phone Is the Most Dangerous Channel
                                </span>
                                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-6 leading-snug">
                                    A Phone Call Is the Most Trusted Channel Scammers Have
                                </h2>
                                <div className="space-y-4 text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                                    <p>
                                        Email has spam filters. SMS has some limitations. But a phone call from
                                        what appears to be a known, trusted number triggers an almost instinctive
                                        response to engage, comply, and respond. Fraudsters understand this deeply.
                                    </p>
                                    <p>
                                        Phone fraud  or 'vishing' (voice phishing)  accounts for the initiation
                                        of nearly 87% of all cyber financial fraud in India according to MHA data.
                                        The caller doesn't need your username, password, or access to your device.
                                        All they need is your OTP  and a phone call is the easiest way to get it.
                                    </p>
                                    <p>
                                        India's telecom infrastructure serves 1.1 billion subscribers, and the cost
                                        of placing thousands of scam calls per day using VoIP is negligible. A
                                        single call that yields ₹5 lakh more than covers the cost of a scam call operation
                                        running thousands of attempts simultaneously from a single rented facility.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-950/40 dark:to-teal-950/40 rounded-2xl p-8 border border-cyan-100 dark:border-cyan-900 space-y-5">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center">
                                        <Info className="h-5 w-5 text-white" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 dark:text-white text-lg">Three Things No Legitimate Caller Ever Asks</h3>
                                </div>
                                <ul className="space-y-4">
                                    {[
                                        { icon: XCircle, color: "text-red-500", text: "Your OTP. Not your bank, not TRAI, not the police, not SEBI. An OTP is a one-time password  no institution ever needs to hear it read aloud." },
                                        { icon: XCircle, color: "text-red-500", text: "Your full debit/credit card number together with CVV and expiry. Partial numbers used for verification are a separate matter  full card details are never needed on a call." },
                                        { icon: XCircle, color: "text-red-500", text: "To dial a USSD code (*21*, *67*, ##) to 'verify' your SIM or 'secure' your account. These codes activate call forwarding to the scammer's number." },
                                        { icon: CheckCircle2, color: "text-green-500", text: "If a call makes you feel anxious or rushed, hang up immediately. Legitimate organisations do not mind when you say 'I will call back on the official number.'" },
                                        { icon: CheckCircle2, color: "text-green-500", text: "Caller ID is NOT proof of identity. The number on screen can be any number the caller chooses. Trust the content of the call, not the display." },
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

                    {/* ── Phone Scam Scale + Image ──────────────────────────────────────────────── */}
                    <section aria-labelledby="phone-scale-heading">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest">
                                    Official 2024 Data
                                </span>
                                <h2
                                    id="phone-scale-heading"
                                    className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-2 mb-4"
                                >
                                    How Big Is Phone Scam Fraud in India Right Now?
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                    Phone calls remain India's single most common fraud entry point in 2024.
                                    Caller ID spoofing means the number you see on your screen can never be
                                    trusted. Every year millions of Indians share OTPs, PINs, and banking
                                    details with scammers they genuinely believed were their bank or the police.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { label: "Phone call fraud cases reported in India in 2024", value: "11.3 Lakh+", color: "from-teal-500 to-cyan-600" },
                                        { label: "Of all cyber fraud complaints involve a phone call at some stage", value: "67%", color: "from-red-500 to-rose-600" },
                                        { label: "Average financial loss per phone scam victim in India", value: "₹1.2 Lakh", color: "from-orange-500 to-amber-600" },
                                        { label: "Spam calls blocked per day in India  world's highest volume", value: "1.5 Crore", color: "from-violet-500 to-purple-600" },
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
                                    alt="Indian woman identifying a suspicious phone scam call  how to spot caller ID spoofing, KYC fraud calls, OTP theft, and police impersonation scams in India, RakshaAI"
                                    title="How to Identify Phone Scams and Caller ID Spoofing in India | RakshaAI"
                                    width={500}
                                    height={500}
                                    className="object-contain drop-shadow-2xl max-w-full h-auto rounded-3xl"
                                />
                            </div>
                        </div>
                    </section>

                    {/* ── 7 Scam Types ─────────────────────────────────────── */}
                    <section id="scam-types">
                        <div className="text-center mb-12">
                            <span className="inline-block px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-xs font-semibold mb-4">
                                Every Variant Explained
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                7 Types of Phone Scams in India 2026  Complete Guide
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-base">
                                Phone fraud in India is not one crime  it is seven distinct scam types, each with its own script, target, and method. Recognise all seven to protect yourself and your family.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-5">
                            {scamTypes.map(({ icon: Icon, emoji, color, bg, border, title, desc, risk, riskColor, href }) => (
                                <div
                                    key={title}
                                    className={`group flex flex-col gap-4 p-6 rounded-2xl border ${bg} ${border} hover:shadow-lg transition-all duration-300`}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                                            <Icon className="h-6 w-6 text-white" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2 mb-1 flex-wrap">
                                                <h3 className="font-bold text-gray-900 dark:text-white text-base">{title}</h3>
                                            </div>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between pt-2 border-t border-gray-200 dark:border-gray-700">
                                        <span className={`text-xs font-semibold ${riskColor}`}>Risk: {risk}</span>
                                        <Link
                                            href={'/'}
                                            className="inline-flex items-center gap-1 text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:underline"
                                        >
                                            Full Guide <ArrowRight className="h-3 w-3" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── How Phone Scams Work  3-Stage Playbook ──────────── */}
                    <section className="bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900/60 dark:to-slate-900/60 rounded-2xl p-8 sm:p-12 border border-gray-200 dark:border-gray-800">
                        <div className="text-center mb-10">
                            <span className="inline-block px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs font-semibold mb-4">
                                How Scammers Operate
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                How Phone Scams Work in India  The 3-Stage Playbook
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-base">
                                Every phone scam in India follows the same three-stage structure. Knowing the playbook breaks the psychology before the call even begins.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-3 gap-6 mb-10">
                            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-blue-100 dark:border-blue-900 shadow-sm">
                                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mb-4">
                                    <span className="text-blue-700 dark:text-blue-300 font-extrabold text-sm">01</span>
                                </div>
                                <h3 className="font-bold text-gray-900 dark:text-white text-base mb-2">Stage 1  Target Selection</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                    Scammers buy or scrape lists of mobile numbers from data leaks, SIM dealer networks, or purchased KYC databases. Numbers linked to specific banks, recently issued credit cards, or UPI registrations are prioritised. Basic personal data (name, partial account number) is often bundled with the number to make the call appear more credible.
                                </p>
                            </div>
                            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-orange-100 dark:border-orange-900 shadow-sm">
                                <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/50 flex items-center justify-center mb-4">
                                    <span className="text-orange-700 dark:text-orange-300 font-extrabold text-sm">02</span>
                                </div>
                                <h3 className="font-bold text-gray-900 dark:text-white text-base mb-2">Stage 2  Fake Caller ID Trust Building</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                    Using a caller ID spoofing india app, the scammer sets the outgoing number to match your bank's official helpline, a government department, or sometimes a family member's number. The displayed number bypasses your instinct to screen unknown callers. The script opens with a detail you recognise (your name, your bank, the last four digits of your card) to establish instant credibility.
                                </p>
                            </div>
                            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-red-100 dark:border-red-900 shadow-sm">
                                <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/50 flex items-center justify-center mb-4">
                                    <span className="text-red-700 dark:text-red-300 font-extrabold text-sm">03</span>
                                </div>
                                <h3 className="font-bold text-gray-900 dark:text-white text-base mb-2">Stage 3  Execution and Disappearance</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                    The call creates urgency ('your account will be blocked in 10 minutes') and a simple ask ('just share the OTP to cancel the transaction'). Once the OTP, UPI PIN, or remote access is surrendered, the fraud is completed in under 90 seconds. The VoIP number is discarded, the scammer's SIM is replaced, and the money is routed through mule accounts within minutes. Recovery statistics fall sharply if you wait more than 30 minutes to report to 1930.
                                </p>
                            </div>
                        </div>
                        {/* Inline CTA box */}
                        <div className="rounded-xl border border-cyan-200 dark:border-cyan-800 bg-cyan-50 dark:bg-cyan-950/30 p-5 flex flex-col sm:flex-row items-center gap-4">
                            <div className="flex-1 text-left">
                                <p className="text-sm font-semibold text-cyan-800 dark:text-cyan-200">Suspicious Caller? Verify in 5 Seconds Before You Call Back</p>
                                <p className="text-xs text-cyan-700 dark:text-cyan-300 mt-0.5">Check any Indian phone number against our live fraud database  free, no sign-up</p>
                            </div>
                            <Link
                                href="/phone-number-checker/"
                                className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-600 text-white text-xs font-bold shadow hover:shadow-cyan-300/50 hover:scale-105 transition-all duration-200"
                            >
                                CHECK NUMBER NOW
                                <ArrowRight className="h-3.5 w-3.5" />
                            </Link>
                        </div>
                    </section>

                    {/* ── How Caller ID Spoofing Works ──────────────────────── */}
                    <section>
                        <div className="text-center mb-12">
                            <span className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-4">
                                The Core Deception
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                How a Fake Caller ID Call Unfolds  Step by Step
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-base">
                                Understanding this sequence in advance is the single most effective defence 
                                because once you recognise the pattern mid-call, the psychology loses its power.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="hidden sm:block absolute left-[27px] top-10 bottom-10 w-0.5 bg-gradient-to-b from-cyan-300 via-red-300 to-gray-300 dark:from-cyan-800 dark:via-red-800 dark:to-gray-800" />
                            <div className="space-y-5">
                                {spoofingSteps.map(({ step, color, bg, border, title, desc, urgent }) => (
                                    <div key={step} className="relative flex gap-6 items-start">
                                        <div className={`relative z-10 flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center text-white font-extrabold text-sm shadow-lg`}>
                                            {step}
                                            {urgent && <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-400 animate-ping" />}
                                        </div>
                                        <div className={`flex-1 p-6 rounded-2xl border ${bg} ${border} hover:shadow-md transition-all`}>
                                            <div className="flex items-center gap-3 mb-2">
                                                <h3 className="font-bold text-gray-900 dark:text-white text-base">{title}</h3>
                                                {urgent && (
                                                    <span className="px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400 text-xs font-bold">
                                                        DANGER ZONE
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
                    <section className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8 sm:p-12 border border-gray-100 dark:border-gray-800">
                        <span className="inline-block px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 text-xs font-semibold mb-4">
                            A Real Account
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
                            "The Number Matched My Bank. I Checked It Three Times."  A Real Account
                        </h2>
                        <div className="grid lg:grid-cols-2 gap-8 text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                            <div className="space-y-4">
                                <p>
                                    Priya (name changed), a 44-year-old school principal from Pune, received a call
                                    at 11 AM on a Tuesday. The number displayed on her screen matched exactly the
                                    customer care number printed on her bank card  she'd saved it as
                                    "HDFC Customer Care" months earlier after a previous call.
                                </p>
                                <p>
                                    The caller introduced himself as a senior fraud investigation officer, informed
                                    Priya of a suspicious transaction of ₹37,000 on her account at a Delhi merchant,
                                    and that her card was about to be temporarily blocked as a precaution. He then
                                    asked her to 'confirm her identity' by verifying her card number ending digits,
                                    account registered mobile number, and  lastly  the OTP that would arrive
                                    'to confirm the fraud block was applied correctly'.
                                </p>
                                <p>
                                    Priya received three OTPs. She read all three aloud because the caller explained
                                    each was for a different 'security step'. The call lasted nine minutes and
                                    sounded completely professional throughout.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <p>
                                    Within 12 minutes of the call ending, ₹1,87,000 had been transferred from her
                                    account across three transactions  each authorised by the OTPs she had read aloud.
                                    When she called the real HDFC customer care (the same number  the one that
                                    had appeared on her screen), they had no record of any outbound call to her.
                                </p>
                                <p>
                                    The number she saw was spoofed. The fraud investigation officer did not exist.
                                    The 'suspicious transaction' was invented to create the context in which handing
                                    over an OTP would feel logical  even prudent.
                                </p>
                                <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border border-rose-200 dark:border-rose-800">
                                    <p className="text-sm font-bold text-rose-700 dark:text-rose-300 mb-2">The Rule That Would Have Saved ₹1.87 Lakh:</p>
                                    <p className="text-sm text-gray-700 dark:text-gray-300">
                                        No bank, ever, sends you an OTP and then asks you to read it aloud on a phone
                                        call. An OTP is a password that only you should know. The moment anyone asks
                                        you to voice an OTP, the call is fraudulent  regardless of the number shown.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ── USSD Call Forwarding Deep Dive ───────────────────── */}
                    <section className="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30 rounded-2xl p-8 sm:p-12 border border-violet-100 dark:border-violet-900">
                        <span className="inline-block px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300 text-xs font-semibold mb-4">
                            The Silent Takeover
                        </span>
                        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6">
                            The USSD Call Forwarding Trap  OTP Theft Without Any App
                        </h2>
                        <div className="grid lg:grid-cols-2 gap-8 text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                            <div className="space-y-4">
                                <p>
                                    One of the most technically elegant phone scams requires no app installation,
                                    no link click, and no OTP from the victim. It just requires you to dial
                                    a USSD code the caller provides.
                                </p>
                                <p>
                                    The pretext varies: 'Dial this code to verify your SIM is not being cloned',
                                    'Enter this code to activate the fraud protection we're applying to your account',
                                    or 'Our system requires this to confirm your identity before unblocking your card.'
                                </p>
                                <p>
                                    What these codes actually do: USSD codes like <code className="text-sm font-mono bg-white dark:bg-gray-900 px-1 rounded">*21*[number]#</code>,
                                    <code className="text-sm font-mono bg-white dark:bg-gray-900 px-1 rounded">*67*[number]#</code>, or
                                    <code className="text-sm font-mono bg-white dark:bg-gray-900 px-1 rounded">*004*[number]#</code> silently activate call
                                    forwarding on your SIM  redirecting all incoming calls (and voice OTPs)
                                    to the scammer's number, without any visible notification.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <p>
                                    With call forwarding active, the scammer then initiates 'forgot password'
                                    flows on your banking apps and email accounts. The OTP that would ring to
                                    your phone goes instead to their device. Every account that relies on voice
                                    OTP is compromised without a single OTP ever reaching you.
                                </p>
                                <div className="grid grid-cols-1 gap-3 mt-2">
                                    {[
                                        { code: "*#21#", action: "Check active call forwarding status (safe  read only)" },
                                        { code: "##002#", action: "Deactivate ALL call forwarding on your SIM immediately" },
                                        { code: "#21#", action: "Deactivate unconditional call forwarding" },
                                        { code: "NEVER dial", action: "*21*, *67*, *004* as instructed by any caller  ever" },
                                    ].map(({ code, action }) => (
                                        <div key={code} className="flex items-start gap-3 p-3 bg-white dark:bg-gray-900 rounded-xl border border-violet-100 dark:border-violet-900 text-sm">
                                            <code className="font-bold text-violet-700 dark:text-violet-300 min-w-[90px] flex-shrink-0 text-xs">{code}</code>
                                            <span className="text-gray-600 dark:text-gray-400">{action}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ── Legitimate Caller vs. Scammer: Split Section ─────────────────────────── */}
                    <section
                        aria-labelledby="legit-vs-scammer-heading"
                        className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-lg lg:min-h-[520px]"
                    >
                        {/* LEFT  content */}
                        <div className="p-8 sm:p-10 bg-white dark:bg-gray-900 flex flex-col justify-center">
                            <span className="inline-block px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-xs font-semibold mb-4 self-start">
                                Quick Reference
                            </span>
                            <h2
                                id="legit-vs-scammer-heading"
                                className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-6 leading-snug"
                            >
                                Your Bank Calling vs. A Scammer  Know the Difference
                            </h2>
                            <div className="space-y-3 mb-6">
                                <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-xl border border-green-200 dark:border-green-900">
                                    <p className="text-xs font-bold text-green-700 dark:text-green-400 mb-2 uppercase tracking-wide">
                                        Your Real Bank
                                    </p>
                                    <ul className="space-y-1.5 text-sm text-gray-700 dark:text-gray-300">
                                        {[
                                            "Never asks for your full card number, CVV, PIN, or OTP on an incoming call  under any circumstances",
                                            "Never threatens immediate account blocking within minutes to pressure a fast decision",
                                            "Never asks you to install any app, dial any USSD code, or transfer money to a 'safe account'",
                                            "Sends official notices for KYC via registered mail, branch visit, or in-app notification  not phone calls",
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
                                        Phone Scammer
                                    </p>
                                    <ul className="space-y-1.5 text-sm text-gray-700 dark:text-gray-300">
                                        {[
                                            "Displays your bank's exact helpline number using caller ID spoofing  the display cannot be trusted",
                                            "Creates extreme urgency: 'your account will be blocked in 30 minutes unless you verify now'",
                                            "Asks you to dial a USSD code (*21*number#)  this silently redirects your OTPs to the scammer",
                                            "Knows your name and partial account details sourced from data breaches to seem legitimate",
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
                                    The Golden Rule
                                </p>
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    Hang up and call back yourself on the number printed on the back of your card
                                    or from the bank's official website. A real bank will always be reachable that
                                    way. A scammer will not.
                                </p>
                            </div>
                        </div>
                        {/* RIGHT  full-height image */}
                        <div className="relative h-full min-h-[400px] overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-teal-600 to-emerald-600" />
                            <Image
                                src="/image/report-scam-number-steps-india-rakshaai.jpg"
                                alt="Steps to verify a suspicious caller and report a phone scam in India  how to check caller ID spoofing, report KYC fraud calls, and stop OTP theft in India, RakshaAI"
                                title="Verify Caller and Report Phone Scam in India | RakshaAI"
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
                                7 Phone Scam Warning Signs You Should Never Ignore
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-base">
                                Any single one of these signals means you should end the call and verify independently through an official channel.
                            </p>
                        </div>
                        <div className="mb-6 flex items-center justify-center">
                            <div className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-sm font-semibold">
                                <AlertTriangle className="h-4 w-4 shrink-0" />
                                🚨 Stop the Call Immediately If You Experience Any of These:
                            </div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {redFlags.map((flag, i) => (
                                <div
                                    key={flag}
                                    className="flex items-start gap-4 p-5 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md hover:border-red-200 dark:hover:border-red-800 transition-all duration-200"
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
                                Phone Scam Myths vs. Reality
                            </h2>
                        </div>
                        <div className="space-y-4">
                            {[
                                {
                                    myth: "If the caller ID matches a number I already have saved, the call is definitely legitimate.",
                                    fact: "Caller ID is trivially faked. Any number can be displayed by any caller using freely available VoIP services. A matched display name only means the caller chose to spoof a number you trust  it is not identity verification.",
                                },
                                {
                                    myth: "I registered for DND, so I won't receive spam calls.",
                                    fact: "DND filters commercial promotional calls but does not protect against fraudulent calls, which use VoIP and constantly rotate numbers. DND is a useful reduction tool but not a security layer against scam calls.",
                                },
                                {
                                    myth: "Scam calls are obvious because they use poor audio quality or heavily accented voices.",
                                    fact: "Modern scam operations in India  especially those operating from call centres  use trained staff, scripted professionally in regional languages, with clear audio. Many victims describe the calls as indistinguishable from genuine customer service.",
                                },
                                {
                                    myth: "I'm safe because I never give away my password  I only shared the OTP.",
                                    fact: "An OTP is a one-time password. Sharing it is identical in consequence to sharing a password. Every OTP authorises a specific action  a transfer, a login, a password reset  the moment it is entered by anyone who has it.",
                                },
                            ].map(({ myth, fact }) => (
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

                    {/* ── How to Report ────────────────────────────────────── */}
                    <section>
                        <div className="text-center mb-12">
                            <span className="inline-block px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-xs font-semibold mb-4">
                                Step-by-Step Reporting
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                How to Report Phone Fraud in India  Step by Step
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-base">
                                Use all five channels for the best chance of freezing funds and preventing the scammer from targeting others. The first 30 minutes are critical.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="relative w-full rounded-2xl overflow-hidden mb-8 shadow-md">
                                <Image
                                    src="/image/emergency-steps-after-entering-data-scam-website-india-recovery-guide.jpg"
                                    alt="Emergency recovery steps after falling for a phone scam or OTP fraud in India  how to call 1930 cyber crime helpline, check call forwarding USSD codes, report to cybercrime.gov.in, and freeze bank accounts, RakshaAI"
                                    title="Phone Scam Recovery Steps India  What To Do After Caller ID Spoofing Fraud | RakshaAI"
                                    width={1200}
                                    height={480}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            <div className="hidden sm:block absolute left-[27px] top-10 bottom-10 w-0.5 bg-gradient-to-b from-red-300 via-amber-300 to-cyan-300 dark:from-red-800 dark:via-amber-800 dark:to-cyan-800" />
                            <div className="space-y-5">
                                {whatToDo.map(({ step, title, desc, urgent }) => (
                                    <div key={step} className="relative flex gap-6 items-start">
                                        <div className={`relative z-10 flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-white font-extrabold text-sm shadow-lg ${urgent ? "bg-gradient-to-br from-red-500 to-rose-600" : "bg-gradient-to-br from-cyan-500 to-teal-600"}`}>
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

                            {/* Recovery Timeline */}
                            <div className="mt-10 rounded-2xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30 p-6">
                                <h3 className="font-bold text-amber-800 dark:text-amber-200 text-base mb-4 flex items-center gap-2">
                                    <Clock className="h-4 w-4" />
                                    Phone Scam Recovery Timeline  Act Fast
                                </h3>
                                <div className="grid sm:grid-cols-4 gap-4 text-xs">
                                    {[
                                        { window: "0–30 min", action: "Call 1930 + bank fraud line", color: "text-red-600 dark:text-red-400", icon: "🔴" },
                                        { window: "30 min–2 hrs", action: "File Chakshu report + change UPI PIN", color: "text-orange-600 dark:text-orange-400", icon: "🟠" },
                                        { window: "2–24 hrs", action: "File cybercrime.gov.in complaint", color: "text-yellow-600 dark:text-yellow-400", icon: "🟡" },
                                        { window: "24–72 hrs", action: "File FIR at cybercrime police station", color: "text-green-600 dark:text-green-400", icon: "🟢" },
                                    ].map(({ window, action, color, icon }) => (
                                        <div key={window} className="text-center p-3 bg-white dark:bg-gray-900 rounded-xl border border-amber-100 dark:border-amber-900">
                                            <div className="text-lg mb-1">{icon}</div>
                                            <p className={`font-bold text-xs ${color}`}>{window}</p>
                                            <p className="text-gray-600 dark:text-gray-400 text-xs mt-1 leading-tight">{action}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Report CTA */}
                            <div className="mt-6 rounded-xl bg-gradient-to-r from-red-500 to-rose-600 p-5 flex flex-col sm:flex-row items-center gap-4 text-white">
                                <div className="flex-1 text-left">
                                    <p className="font-bold text-sm">Report This Phone Scam to Help Others</p>
                                    <p className="text-xs text-red-100 mt-0.5">Add this number to our database so other Indians are warned before answering</p>
                                </div>
                                <ReportScamButton className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-red-600 text-xs font-bold shadow hover:bg-red-50 hover:scale-105 transition-all duration-200 cursor-pointer">
                                    <ShieldAlert className="h-4 w-4" />
                                    REPORT PHONE SCAM
                                </ReportScamButton>
                            </div>
                        </div>
                    </section>

                    {/* ── 5 Protection Rules ────────────────────────────────── */}
                    <section>
                        <div className="text-center mb-10">
                            <span className="inline-block px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-xs font-semibold mb-4">
                                Your Defence Plan
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                How to Stop Phone Scams  5 Protection Rules
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-base">
                                Five rules that together block every type of phone scam in India. Apply all five for maximum protection.
                            </p>
                        </div>
                        <div className="space-y-5">
                            {[
                                {
                                    rule: "Rule 1",
                                    color: "from-cyan-500 to-teal-600",
                                    bg: "bg-cyan-50 dark:bg-cyan-950/30",
                                    border: "border-cyan-200 dark:border-cyan-900",
                                    title: "Register on TRAI DND 1909 and Report via Sanchar Sathi Chakshu",
                                    body: "SMS 'START DND' to 1909 or call 1909 to register for Do Not Disturb. This blocks unsolicited commercial calls within 7 working days. For fraud-specific reporting, visit sancharsaathi.gov.in and use the Chakshu portal to report suspected scam calls, SMS, or WhatsApp messages. Your reports are shared across all telecom operators simultaneously.",
                                },
                                {
                                    rule: "Rule 2",
                                    color: "from-violet-500 to-purple-600",
                                    bg: "bg-violet-50 dark:bg-violet-950/30",
                                    border: "border-violet-200 dark:border-violet-900",
                                    title: "Use Truecaller and RakshaAI Before Answering Unknown Calls",
                                    body: "Install Truecaller to see community-flagged spam identifiers for unknown callers. Before calling back any missed call, especially international numbers, check the number on RakshaAI's Phone Number Checker. This takes 5 seconds and can prevent you from connecting to a premium-rate scam number or a flagged fraud operation.",
                                },
                                {
                                    rule: "Rule 3",
                                    color: "from-red-500 to-rose-600",
                                    bg: "bg-red-50 dark:bg-red-950/30",
                                    border: "border-red-200 dark:border-red-900",
                                    title: "Never Share OTPs, UPI PINs, or Aadhaar Over Any Phone Call",
                                    body: "No bank, telecom operator, government agency, or OTP-required service will ever ask you for your OTP, UPI PIN, ATM PIN, or CVV over the phone. This is the single most important rule to prevent OTP fraud via phone india. Treat any such request as an immediate confirmation that the call is fraudulent  regardless of what the caller ID displays.",
                                },
                                {
                                    rule: "Rule 4",
                                    color: "from-orange-500 to-amber-600",
                                    bg: "bg-orange-50 dark:bg-orange-950/30",
                                    border: "border-orange-200 dark:border-orange-900",
                                    title: "Monitor Your SIM Signal  SIM Swap Sends an Early Warning",
                                    body: "If your phone loses all mobile signal for more than 20–30 minutes while Wi-Fi continues working normally, immediately call your operator's fraud line from another phone. This unexplained outage is the most reliable early warning of SIM swap fraud india in progress. Act before the new SIM fully activates to prevent OTP rerouting.",
                                },
                                {
                                    rule: "Rule 5",
                                    color: "from-teal-500 to-emerald-600",
                                    bg: "bg-teal-50 dark:bg-teal-950/30",
                                    border: "border-teal-200 dark:border-teal-900",
                                    title: "Always Hang Up and Verify Through the Official Channel Independently",
                                    body: "Never rely on information or numbers provided during a suspicious call. If a 'bank officer' calls you, hang up and call the number on the back of your card or from the bank's official website. If a 'TRAI officer' calls, hang up  TRAI does not call individuals. No legitimate authority will object to you calling them back independently. A scammer will object; a real official will not.",
                                },
                            ].map(({ rule, color, bg, border, title, body }) => (
                                <div key={rule} className={`flex items-start gap-5 p-6 rounded-2xl border ${bg} ${border} hover:shadow-md transition-all duration-200`}>
                                    <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white text-xs font-extrabold shadow-sm`}>
                                        {rule}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 dark:text-white text-base mb-1">{title}</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{body}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── Statistics Table ─────────────────────────────────── */}
                    <section>
                        <div className="text-center mb-8">
                            <span className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-4">
                                2026 Data
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                Phone Scam Statistics India 2026
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-base">
                                Data from TRAI, MHA I4C, and the 1930 helpline annual report (12 months to February 2026).
                            </p>
                        </div>
                        <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
                                        <th className="text-left px-5 py-3 font-semibold text-gray-700 dark:text-gray-300">Scam Type</th>
                                        <th className="text-center px-5 py-3 font-semibold text-gray-700 dark:text-gray-300">Share of Complaints</th>
                                        <th className="text-center px-5 py-3 font-semibold text-gray-700 dark:text-gray-300">Average Loss</th>
                                        <th className="text-center px-5 py-3 font-semibold text-gray-700 dark:text-gray-300">Risk Level</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                                    {[
                                        { type: "Fake Bank Caller ID / OTP Theft", share: "38%", loss: "₹42,000", risk: "Very High", riskClass: "text-red-600 dark:text-red-400" },
                                        { type: "Fake TRAI / DoT Disconnect Call", share: "22%", loss: "₹28,000", risk: "Very High", riskClass: "text-red-600 dark:text-red-400" },
                                        { type: "SIM Swap Fraud India", share: "14%", loss: "₹95,000", risk: "Extreme", riskClass: "text-red-700 dark:text-red-300 font-bold" },
                                        { type: "Fake Police / Digital Arrest", share: "11%", loss: "₹3.5 lakh", risk: "Extreme", riskClass: "text-red-700 dark:text-red-300 font-bold" },
                                        { type: "Missed Call Scam (Wangiri)", share: "8%", loss: "₹2,500", risk: "Medium", riskClass: "text-orange-600 dark:text-orange-400" },
                                        { type: "WhatsApp Call Blackmail", share: "5%", loss: "₹65,000", risk: "Very High", riskClass: "text-red-600 dark:text-red-400" },
                                        { type: "Vishing / KYC Impersonation", share: "2%", loss: "₹18,000", risk: "High", riskClass: "text-yellow-700 dark:text-yellow-400" },
                                    ].map(({ type, share, loss, risk, riskClass }) => (
                                        <tr key={type} className="bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                            <td className="px-5 py-3 text-gray-800 dark:text-gray-200 font-medium">{type}</td>
                                            <td className="px-5 py-3 text-center text-blue-700 dark:text-blue-300 font-semibold">{share}</td>
                                            <td className="px-5 py-3 text-center text-gray-600 dark:text-gray-400">{loss}</td>
                                            <td className={`px-5 py-3 text-center text-xs ${riskClass}`}>{risk}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* ── More Guides ───────────────────────────────────────── */}
                    <section>
                        <div className="text-center mb-8">
                            <span className="inline-block px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-xs font-semibold mb-4">
                                Deep Dive Guides
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                More Indian Phone Scam Guides
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-base">
                                Each scam type has its own complete guide with reported cases, tactics, and step-by-step defence.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {[
                                { href: "/scams/phone-scams/vishing/", title: "Vishing India 2026", desc: "How voice phishing works, scripts scammers use, and how to verify any caller's identity in under 60 seconds.", badge: "Vishing", badgeColor: "bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300" },
                                { href: "/scams/phone-scams/sim-swap-fraud/", title: "SIM Swap Fraud India", desc: "The silent takeover  how fraudsters get your SIM replaced without you knowing, OTP rerouting, and how to stop it.", badge: "SIM Swap", badgeColor: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300" },
                                { href: "/scams/phone-scams/fake-trai-calls/", title: "Fake TRAI Call India", desc: "Complete breakdown of the TRAI disconnect threat scam  what they say, how to verify, and the official TRAI stance.", badge: "TRAI Scam", badgeColor: "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300" },
                                { href: "/scams/phone-scams/missed-call-scam/", title: "Missed Call Scam India", desc: "The wangiri fraud explained  which country codes to never call back, and how charges accumulate in seconds.", badge: "Wangiri", badgeColor: "bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300" },
                                { href: "/scams/upi-fraud/digital-arrest-scam/", title: "Digital Arrest Scam India", desc: "Fake CBI, ED, and police calls  how the digital arrest phone scam works and why ₹3.5 lakh is the average victim loss.", badge: "Digital Arrest", badgeColor: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300" },
                                { href: "/scams/phone-scams/whatsapp-call-scam/", title: "WhatsApp Call Scam India", desc: "Video call blackmail and impersonation via WhatsApp  how deepfake screenshots are created and what to do if targeted.", badge: "WhatsApp", badgeColor: "bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300" },
                            ].map(({ href, title, desc, badge, badgeColor }) => (
                                <Link key={href} href={'/blog'} className="group flex flex-col p-5 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-lg hover:border-cyan-200 dark:hover:border-cyan-800 transition-all duration-200">
                                    <span className={`self-start text-xs font-semibold px-2 py-0.5 rounded-full ${badgeColor} mb-3`}>{badge}</span>
                                    <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">{title}</h3>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed flex-1">{desc}</p>
                                    <div className="flex items-center gap-1 mt-3 text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                                        Read Guide <ArrowRight className="h-3 w-3" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* ── Related Free Safety Tools ─────────────────────────── */}
                    <section>
                        <div className="text-center mb-8">
                            <span className="inline-block px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 text-xs font-semibold mb-4">
                                Free Tools
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                Related Free Safety Tools
                            </h2>
                        </div>
                        <div className="grid sm:grid-cols-3 gap-5">
                            {[
                                { href: "/phone-number-checker/", icon: <Phone className="h-6 w-6 text-white" />, iconBg: "bg-gradient-to-br from-cyan-500 to-teal-600", title: "Phone Number Checker", desc: "Check any Indian phone number against our fraud database. See if a number has been reported as a scam caller.", cta: "Check a Number Free" },
                                { href: "/website-safety-checker/", icon: <Globe className="h-6 w-6 text-white" />, iconBg: "bg-gradient-to-br from-violet-500 to-purple-600", title: "Website Safety Checker", desc: "Verify if a website linked to you in a suspicious call is a known fraud site.", cta: "Check a Website" },
                                { href: "/upi-id-checker/", icon: <IndianRupee className="h-6 w-6 text-white" />, iconBg: "bg-gradient-to-br from-orange-500 to-amber-600", title: "UPI ID Checker", desc: "Verify UPI IDs before sending money  essential if a caller provided a payment address.", cta: "Check a UPI ID" },
                            ].map(({ href, icon, iconBg, title, desc, cta }) => (
                                <Link key={href} href={href} className="group flex flex-col gap-4 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-lg hover:border-cyan-200 dark:hover:border-cyan-800 transition-all duration-200">
                                    <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center group-hover:scale-110 transition-transform`}>{icon}</div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 dark:text-white text-base mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">{title}</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{desc}</p>
                                    </div>
                                    <div className="flex items-center gap-1 text-xs font-bold text-cyan-600 dark:text-cyan-400 mt-auto">
                                        {cta} <ArrowRight className="h-3 w-3" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* ── Recent Phone Scam Alerts ──────────────────────────── */}
                    <section>
                        <div className="text-center mb-8">
                            <span className="inline-block px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 text-xs font-semibold mb-4">
                                Live Alerts
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                Recent Phone Scam Alerts in India
                            </h2>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                { date: "Apr 2026", title: "Fake TRAI Disconnect Call Surge  +91-960x numbers", desc: "TRAI issued a fresh advisory warning after a 300% spike in fake disconnect threat calls using spoofed 9600-prefix numbers. Never respond to disconnection threats  TRAI does not call individuals.", badge: "TRAI Advisory", color: "border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-950/20" },
                                { date: "Mar 2026", title: "WhatsApp Video Call Blackmail Targeting Professionals", desc: "DoT's Chakshu portal reported a 180% rise in WhatsApp video call blackmail reports in Q1 2026, with corporate employees and government staff the primary targets. Do not accept video calls from unknown numbers.", badge: "DoT Chakshu Alert", color: "border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-950/20" },
                                { date: "Feb 2026", title: "SIM Swap Fraud  14 Cases Filed in Mumbai Cybercrime in One Week", desc: "Mumbai cybercrime unit reported a coordinated SIM swap operation using leaked Aadhaar data. Watch for sudden unexplained signal loss. Call your operator immediately if you lose signal for 20+ minutes.", badge: "Cybercrime Alert", color: "border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/20" },
                                { date: "Jan 2026", title: "Fake CBI Officer Calls  Victims Transferred ₹8 Crore in Single Month", desc: "MHA's I4C unit flagged a 60% increase in fake CBI/ED calls in January 2026. Callers use badge numbers, case IDs, and court document references. Remember: no law enforcement agency collects money via phone.", badge: "MHA I4C Warning", color: "border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/20" },
                            ].map(({ date, title, desc, badge, color }) => (
                                <div key={title} className={`p-5 rounded-xl border ${color}`}>
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="px-2 py-0.5 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-xs font-semibold text-gray-600 dark:text-gray-400">{date}</span>
                                        <span className="text-xs font-semibold text-rose-600 dark:text-rose-400">{badge}</span>
                                    </div>
                                    <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-2">{title}</h3>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── From the RakshaAI Blog ─────────────────────────────── */}
                    <section>
                        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-3">
                            Recent Phone Scam Cases &amp; Deep Dives
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
                            Time-stamped guides from the RakshaAI blog covering the latest phone fraud patterns in India.
                        </p>
                        <div className="grid sm:grid-cols-3 gap-4">
                            {[
                                { href: '/blog/how-to-check-phone-number-scam-india', title: 'How to Check Any Phone Number for Scam Reports', desc: 'Free ways to verify an unknown caller before you call back or act on instructions.' },
                                { href: '/blog/fake-customer-care-number-scam-india', title: 'Fake Customer Care Number Scam: Google Results Lying to You', desc: 'Scammers rank fake helplines above official ones. How to find the real number.' },
                                { href: '/blog/ai-voice-cloning-scam-india', title: 'AI Voice Cloning Scam: Fake Emergency Calls Targeting Families', desc: 'A cloned voice of your child or parent asking for urgent money. How to verify.' },
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
                                Frequently Asked Questions About Phone Scams in India
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400">
                                Answers to the most common questions about phone scams and spam calls in India.
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
                    <section className="rounded-2xl bg-gradient-to-br from-cyan-700 via-teal-700 to-blue-700 p-8 sm:p-12 text-white text-center shadow-2xl relative overflow-hidden">
                        <div className="pointer-events-none absolute inset-0">
                            <div className="absolute -top-10 -left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
                        </div>
                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-xs font-semibold mb-6 border border-white/20">
                                <Shield className="h-4 w-4" />
                                Free Number Verification
                            </div>
                            <h2 className="text-2xl sm:text-4xl font-extrabold mb-4 leading-tight">
                                Got a Suspicious Call?<br className="hidden sm:block" />
                                Check It. Report It.
                            </h2>
                            <p className="text-cyan-100 mb-8 text-sm sm:text-base max-w-xl mx-auto">
                                Check any phone number against India's largest crowd-sourced fraud database
                                before you call back. Or report a scam call to protect the next person
                                from the same number.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <ReportScamButton className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-teal-600 font-bold text-sm shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                                    <MessageSquareWarning className="h-5 w-5" />
                                    Report a Spam Call
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
                            <p className="mt-6 text-cyan-200 text-xs">
                                🇮🇳 India-focused phone fraud guidance · Free consumer access · No registration required
                            </p>
                        </div>
                    </section>

                </div>
            </main>
        </DefaultLayout>
    );
}
