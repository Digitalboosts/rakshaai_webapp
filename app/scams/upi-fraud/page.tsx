import type { Metadata } from "next";
import Image from "next/image";
import DefaultLayout from "@/components/DefaultLayout";
import { jsonLd, articleSchema, organizationRef } from "@/lib/seo/schema";
import {
    Shield, AlertTriangle, CheckCircle2, XCircle, TrendingUp,
    Users, Zap, ChevronDown, Phone, Lock, Eye, Ban,
    MessageSquare, IndianRupee, FileWarning, ShieldAlert,
    ArrowRight, Info, BadgeCheck, Smartphone, Heart, Clock, Wifi,
    Globe, BellRing,
} from "lucide-react";
import Link from "next/link";
import ReportScamButton from "@/components/ReportScamButton";

// ── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
    title: "UPI Fraud India 2026: Types & Warning Signs",
    description:
        "Learn about types of UPI fraud in India. Spot the warning signs early and know exactly how to report UPI fraud to recover your money. Free checker tool.",
    alternates: {
        canonical: "https://rakshaai.co/scams/upi-fraud",
    },
    robots: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
    },
    openGraph: {
        title: "UPI Fraud India 2026: Fraud Types, Warning Signs & How to Report",
        description:
            "Learn about types of UPI fraud in India. Spot the warning signs early and know exactly how to report UPI fraud to recover your money. Free checker tool.",
        url: "https://rakshaai.co/scams/upi-fraud",
        type: "website",
        siteName: 'RakshaAI',
        images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'RakshaAI UPI Fraud Guide' }],
    },
    twitter: {
        card: "summary_large_image",
        title: "UPI Fraud India 2026: Fraud Types, Warning Signs & How to Report",
        description:
            "Learn about types of UPI fraud in India. Spot the warning signs early and know exactly how to report UPI fraud to recover your money.",
        images: ['/opengraph-image'],
    },
    other: {
        "geo.region": "IN",
        language: "en-IN",
    },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const structuredData = articleSchema({
    type: 'Article',
    headline: "UPI Fraud India 2026: Fraud Types, Warning Signs & How to Report",
    url: "/scams/upi-fraud",
    description:
        "Learn about types of UPI fraud in India. Spot the warning signs early and know exactly how to report UPI fraud to recover your money. Free checker tool.",
    datePublished: "2026-03-23T00:00:00.000Z",
    dateModified: "2026-06-11T00:00:00.000Z",
    author: organizationRef(),
    section: "UPI Fraud",
    keywords: ["UPI fraud India", "UPI scam India 2026", "how to report UPI fraud", "fake UPI collect request", "QR code scam India"],
});

const faqStructured = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What is the first thing to do if I have been a UPI fraud victim in 2026?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Call 1930 immediately. The CFCFRMS system behind the 1930 helpline has already helped save ₹5,489 crore across 17.82 lakh complaints since launch  but only when victims act fast. Call with your transaction ID, amount, and the scammer's UPI ID. The helpline can freeze the receiving account in real time. Simultaneously call your bank's fraud line, then file on cybercrime.gov.in. Government data confirms that only 6% of lost money is recovered overall  your 30-minute window is the only realistic chance.",
            },
        },
        {
            "@type": "Question",
            name: "Can I get my money back after falling for a UPI scam in 2026?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Government data tabled in Parliament in December 2025 confirms only 6% of money lost to UPI fraud is actually recovered. Recovery is still possible if you act in the first 30 minutes. File simultaneously with 1930, your bank's fraud helpline, and cybercrime.gov.in. The RBI's bank dispute process gives your bank 48 hours to respond. After 24 hours, funds typically move through too many mule account layers to trace.",
            },
        },
        {
            "@type": "Question",
            name: "What is the digital arrest scam in India?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Digital arrest scam India involves callers posing as CBI, ED, or police using AI deepfake video to create fake virtual courtrooms and demanding UPI payment to avoid fabricated charges. Cumulative losses crossed ₹3,000 crore by early 2026. The Supreme Court described it as 'digital dacoity' and ordered the CBI to launch a pan-India probe. Prime Minister Modi addressed the nation about it in Mann Ki Baat. No real government authority conducts arrests over video call. Hang up and call 1930.",
            },
        },
        {
            "@type": "Question",
            name: "What is the 1930 helpline and how effective is it in 2026?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "1930 is India's National Cyber Crime Financial Helpline, operated 24/7 by MHA under I4C. As of 2026 it has processed 17.82 lakh complaints and helped save and recover ₹5,489 crore. Call with your transaction ID, amount, time, and the scammer's UPI ID. Then file a formal complaint on cybercrime.gov.in within 24 hours.",
            },
        },
        {
            "@type": "Question",
            name: "Is UPI safe for everyday transactions in 2026?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. UPI now processes over 16 billion transactions per month in India and the vast majority complete safely. Risk concentrates in four situations: unsolicited calls asking for your UPI PIN or OTP, QR codes from strangers to 'receive' money, payment links via WhatsApp or SMS, and video calls from people claiming to be officials. Avoid those and you eliminate over 95% of UPI fraud risk.",
            },
        },
        {
            "@type": "Question",
            name: "Which type of UPI fraud is most common in 2026?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "By complaint volume (FY 2024–25): (1) Wrong transfer refund scam  31%. (2) OTP and UPI PIN fraud via fake bank calls  27%. (3) QR code UPI fraud  19%. (4) Fake UPI payment screenshot  14%. (5) Digital arrest scam India  6% of cases but cumulative losses exceeded ₹3,000 crore by 2026. (6) Fake payment links  2%. (7) Investment and job fraud via UPI  1%.",
            },
        },
        {
            "@type": "Question",
            name: "How do I report UPI fraud on PhonePe, Google Pay, or Paytm?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "PhonePe: open the app → tap the transaction → Raise Concern → Fraudulent transaction. Google Pay: tap transaction → Report a Problem → Unauthorized transaction. Paytm: Help & Support → Report Fraud. BHIM: call 18001201740. Always save the complaint reference number from each app.",
            },
        },
        {
            "@type": "Question",
            name: "What new government tools are protecting UPI users in 2026?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Five major systems now operate: (1) RBI's MuleHunter.AI  launched December 2024, uses AI to identify and block mule bank accounts in real time. (2) DoT's Financial Fraud Risk Indicator (FRI)  classifies suspicious phone numbers as Medium, High, or Very High risk before a call even connects. (3) MHA's Pratibimb module  has identified 1.5 lakh criminal connections and blacklisted 2.63 lakh IMEI numbers. (4) DoT has blocked 2.29 lakh fraudulent handsets. (5) NPCI's AI-based fraud monitoring runs across all UPI apps in real time.",
            },
        },
        {
            "@type": "Question",
            name: "How does UPI fraud happen on trusted apps like PhonePe and Google Pay?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "PhonePe fraud and Google Pay fraud do not happen because the apps are insecure. They happen because users are socially engineered into approving payments themselves. Fake bank calls steal the UPI PIN, QR codes are sent to trick users into sending money, and fake payment screenshots deceive sellers. The apps are technically secure  the attacks target the person, not the platform.",
            },
        },
        {
            "@type": "Question",
            name: "What is QR code UPI fraud and why is it still the third most common type in 2026?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "In QR code UPI fraud, a scammer sends a QR code claiming you need to scan it to receive a refund, prize, or payment. In UPI, scanning a QR code always initiates an outgoing payment from your account  it can never deposit money. This knowledge gap is exactly what scammers exploit. It accounted for 19% of all UPI fraud complaints in FY 2024–25. The defence is absolute: never scan any QR code sent to you for the purpose of receiving money.",
            },
        },
        {
            "@type": "Question",
            name: "What evidence should I collect immediately after UPI fraud?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Act within minutes: screenshot the fraudulent transaction from your UPI app (transaction ID, amount, recipient UPI ID, timestamp). Save all WhatsApp, SMS, or call records from the scammer. Note every phone number and UPI ID involved. Write down the exact sequence of events while memory is fresh. Do not delete anything  even a two-word message may support the police investigation, FIR, cybercrime.gov.in complaint, and bank dispute.",
            },
        },
        {
            "@type": "Question",
            name: "How much UPI fraud has India seen in FY 2025–26 so far?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "In FY 2024–25, UPI fraud totalled ₹981 crore across 12.64 lakh incidents  data tabled in the Lok Sabha in December 2025. In the first eight months of FY 2025–26 alone (April to November 2025), losses already reached ₹805 crore across 10.64 lakh incidents. The full-year projection for FY 2025–26 is approximately ₹960–1,000 crore. Despite government countermeasures reducing the peak from ₹1,087 crore in FY 2023–24, recovery remains critically low at just 6% of total losses.",
            },
        },
    ],
};

// ── BreadcrumbList Structured Data ───────────────────────────────────────────
const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://rakshaai.co/",
        },
        {
            "@type": "ListItem",
            position: 2,
            name: "Scam Categories",
            item: "https://rakshaai.co/scams/",
        },
        {
            "@type": "ListItem",
            position: 3,
            name: "UPI Fraud",
            item: "https://rakshaai.co/scams/upi-fraud",
        },
    ],
};

// ── ItemList Structured Data ──────────────────────────────────────────────────
const itemListData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "7 Types of UPI Fraud in India 2026",
    url: "https://rakshaai.co/scams/upi-fraud",
    numberOfItems: 7,
    itemListElement: [
        {
            "@type": "ListItem",
            position: 1,
            name: "QR Code UPI Fraud",
            url: "https://rakshaai.co/scams/upi-fraud/qr-code-scam/",
        },
        {
            "@type": "ListItem",
            position: 2,
            name: "Wrong Transfer Refund Scam",
            url: "https://rakshaai.co/blog/wrong-transfer-refund-scam-india/",
        },
        {
            "@type": "ListItem",
            position: 3,
            name: "OTP & PIN Fraud via Fake Bank Calls",
            url: "https://rakshaai.co/scams/upi-fraud/otp-fraud/",
        },
        {
            "@type": "ListItem",
            position: 4,
            name: "Fake UPI Payment Screenshot",
            url: "https://rakshaai.co/scams/upi-fraud/fake-payment-screenshot/",
        },
        {
            "@type": "ListItem",
            position: 5,
            name: "Digital Arrest Scam India",
            url: "https://rakshaai.co/scams/upi-fraud/digital-arrest-scam/",
        },
        {
            "@type": "ListItem",
            position: 6,
            name: "Fake UPI Payment Links",
            url: "https://rakshaai.co/scams/upi-fraud/fake-upi-link/",
        },
        {
            "@type": "ListItem",
            position: 7,
            name: "Investment & Job Fraud via UPI",
            url: "https://rakshaai.co/scams/upi-fraud/investment-job-fraud/",
        },
    ],
};

// ── Scam types data ───────────────────────────────────────────────────────────
const scamTypes = [
    {
        emoji: "📷",
        href: "/scams/upi-fraud/qr-code-scam/",
        title: "QR Code UPI Fraud",
        description: "Scammers send a QR code claiming it will deposit money into your account. The moment you scan and enter your PIN, money leaves your wallet instead.",
        risk: "Very High",
        riskColor: "text-red-600 dark:text-red-400",
        riskBg: "bg-red-100 dark:bg-red-900/40",
    },
    {
        emoji: "↩️",
        href: "/blog/wrong-transfer-refund-scam-india/",
        title: "Wrong Transfer Refund Scam",
        description: "Someone 'accidentally' sends you money, then pressures you to refund it to a different UPI ID. The original credit reverses, your refund does not.",
        risk: "Very High",
        riskColor: "text-red-600 dark:text-red-400",
        riskBg: "bg-red-100 dark:bg-red-900/40",
    },
    {
        emoji: "📞",
        href: "/scams/upi-fraud/otp-fraud/",
        title: "OTP & PIN Fraud via Fake Bank Calls",
        description: "A caller posing as your bank officer asks for your UPI PIN or OTP to 'verify your account.' Once shared, the account is emptied within seconds.",
        risk: "Very High",
        riskColor: "text-red-600 dark:text-red-400",
        riskBg: "bg-red-100 dark:bg-red-900/40",
    },
    {
        emoji: "🖼️",
        href: "/scams/upi-fraud/fake-payment-screenshot/",
        title: "Fake UPI Payment Screenshot",
        description: "A buyer sends an edited screenshot showing a completed payment. No money was transferred. Always verify in your own UPI app before releasing goods.",
        risk: "High",
        riskColor: "text-orange-600 dark:text-orange-400",
        riskBg: "bg-orange-100 dark:bg-orange-900/40",
    },
    {
        emoji: "🚨",
        href: "/scams/upi-fraud/digital-arrest-scam/",
        title: "Digital Arrest Scam India",
        description: "Fake CBI or police officers demand UPI payment to avoid a fabricated arrest warrant. Average victim loss: ₹3.5 lakh. The fastest-growing scam in 2025.",
        risk: "Extreme",
        riskColor: "text-red-700 dark:text-red-300",
        riskBg: "bg-red-200 dark:bg-red-800/40",
    },
    {
        emoji: "🔗",
        href: "/scams/upi-fraud/fake-upi-link/",
        title: "Fake UPI Payment Links",
        description: "A suspicious link via WhatsApp or SMS mimics a legitimate UPI page. Entering your details hands your credentials directly to the scammer.",
        risk: "High",
        riskColor: "text-orange-600 dark:text-orange-400",
        riskBg: "bg-orange-100 dark:bg-orange-900/40",
    },
    {
        emoji: "💼",
        href: "/scams/upi-fraud/investment-job-fraud/",
        title: "Investment & Job Fraud via UPI",
        description: "Fake investment schemes or work-from-home jobs require a UPI deposit to start. Early small payouts build trust. The big deposit disappears overnight.",
        risk: "High",
        riskColor: "text-orange-600 dark:text-orange-400",
        riskBg: "bg-orange-100 dark:bg-orange-900/40",
    },
];

// ── Red flags ─────────────────────────────────────────────────────────────────
const redFlags = [
    "Any caller asking for your UPI PIN or OTP  no legitimate bank, business, or official ever needs these",
    "A QR code sent to you 'to receive money'  QR codes in UPI can only send money, they can never receive it",
    "Urgency language: 'your account will be blocked,' 'warrant issued,' 'act in the next 10 minutes'",
    "A request to refund a wrong transfer to a different UPI ID than it came from",
    "Payment confirmation shown only as a screenshot  not visible inside your own app's transaction history",
    "An official-sounding caller demanding immediate UPI payment to avoid legal action or police arrest",
    "Any investment or job offer requiring an upfront UPI deposit before you can earn anything",
];

// ── Safety tips ───────────────────────────────────────────────────────────────
const safetyTips = [
    {
        rule: "Rule 1",
        title: "Receiving money never requires your UPI PIN",
        desc: "Your UPI PIN is a sending credential only. No bank, NPCI official, customer care agent, or government officer will ever ask for your PIN to process a refund or verify your account. The moment someone asks for your PIN on a call you did not initiate, hang up  regardless of what number appeared on your screen.",
    },
    {
        rule: "Rule 2",
        title: "Verify every new UPI ID before sending money",
        desc: "When you enter a UPI ID in PhonePe, Google Pay, Paytm, or BHIM, the registered name appears before you approve. If the name does not match who you expect to pay, stop. For extra certainty, cross-check against RakshaAI's free UPI ID checker before sending any amount above ₹500 to a new contact.",
    },
    {
        rule: "Rule 3",
        title: "QR codes always debit  they can never credit",
        desc: "A QR code in UPI represents a payment request. Scanning it means money leaves your account. No QR code in existence can deposit money into your account. If anyone sends you a QR code claiming you need to scan it to receive a refund, prize, or incoming payment, it is a scam without exception. Do not scan it.",
    },
    {
        rule: "Rule 4",
        title: "A screenshot is never proof of payment",
        desc: "A fake UPI payment screenshot can be created in under two minutes using any free image editor on a smartphone. The only valid proof of payment is a transaction entry inside your own UPI app's history. Check PhonePe, Google Pay, Paytm, or your bank app directly. If it is not there, no money was received.",
    },
    {
        rule: "Rule 5",
        title: "Urgency is a manipulation tactic, not a real emergency",
        desc: "Every high-loss UPI fraud case involves manufactured time pressure. Real banks, real government agencies, and real businesses never demand immediate UPI payments under threat of arrest, account suspension, or legal consequences. When a financial interaction feels rushed, that feeling is the warning signal. Slow down. Hang up. Call the institution back on the verified number printed on your bank card.",
    },
];

// ── Steps after scam ──────────────────────────────────────────────────────────
const afterScamSteps = [
    {
        step: "01",
        title: "Call 1930 Immediately  National Cyber Crime Helpline",
        desc: "1930 is India's dedicated financial cyber fraud helpline operated 24/7 by MHA under I4C. Call the moment you realise you've been scammed. Provide your name, the fraudulent UPI ID, transaction ID, amount, and exact time. The 1930 operator can flag the receiving account in real time  potentially freezing funds before they're withdrawn.",
        urgent: true,
    },
    {
        step: "02",
        title: "Call Your Bank's Fraud Helpline",
        desc: "Call your bank's 24-hour fraud line simultaneously or immediately after 1930. Key numbers: SBI 1800-11-2211 | HDFC 1800-202-6161 | ICICI 1800-1080 | Axis 1800-419-5959 | Kotak 1800-209-0000. Ask the agent to flag the transaction, log a dispute, and issue a reference number  note it carefully for all future escalations.",
        urgent: true,
    },
    {
        step: "03",
        title: "File a Report on cybercrime.gov.in",
        desc: "Visit cybercrime.gov.in and select 'Report Financial Cyber Crime.' Upload: a screenshot of the fraudulent transaction from your UPI app, the scammer's UPI ID and phone number, and any supporting chat screenshots. The case number you receive activates formal inter-bank investigation protocols and is essential for bank dispute escalations.",
        urgent: false,
    },
    {
        step: "04",
        title: "Report Inside Your UPI App",
        desc: "PhonePe: tap transaction → Raise Concern → Fraudulent transaction. Google Pay: tap transaction → Report a Problem → Unauthorized transaction. Paytm: Help & Support → Report Fraud. BHIM: 18001201740. App-level reports feed directly into NPCI's fraud monitoring and can accelerate the chargeback process.",
        urgent: false,
    },
    {
        step: "05",
        title: "File an FIR at Your Local Police Station",
        desc: "A physical FIR strengthens your bank recovery claim and is mandatory for insurance or legal proceedings. Bring printed copies of all transaction records, your cybercrime.gov.in case number, and your 1930 complaint reference. This step is especially important for digital arrest scam cases where larger amounts are involved.",
        urgent: false,
    },
];

// ── FAQ data ──────────────────────────────────────────────────────────────────
const faqs = [
    {
        q: "What is the first thing to do if I have been a UPI fraud victim in 2026?",
        a: "Call 1930 immediately. The CFCFRMS system behind the 1930 helpline has already helped save ₹5,489 crore across 17.82 lakh complaints since launch  but only when victims act fast. Call with your transaction ID, amount, and the scammer's UPI ID. The helpline can freeze the receiving account in real time. Simultaneously call your bank's fraud line, then file on cybercrime.gov.in. Government data confirms that only 6% of lost money is recovered overall  your 30-minute window is the only realistic chance.",
    },
    {
        q: "How does UPI fraud happen on trusted apps like PhonePe and Google Pay?",
        a: "PhonePe fraud and Google Pay fraud do not happen because the apps are insecure. They happen because users are socially engineered into approving payments themselves. Fake bank calls steal the UPI PIN, QR codes are sent to trick users into sending money, and fake payment screenshots deceive sellers. The apps are technically secure  the attacks target the person, not the platform.",
    },
    {
        q: "Can I get my money back after falling for a UPI scam in 2026?",
        a: "Government data tabled in Parliament in December 2025 confirms only 6% of money lost to UPI fraud is actually recovered. Recovery is still possible if you act in the first 30 minutes. File simultaneously with 1930, your bank's fraud helpline, and cybercrime.gov.in. The RBI's bank dispute process gives your bank 48 hours to respond. After 24 hours, funds typically move through too many mule account layers to trace. Always collect a complaint reference number from every channel you contact.",
    },
    {
        q: "What is the digital arrest scam in India and what has the government done about it in 2026?",
        a: "Digital arrest scam India involves callers posing as CBI, ED, or police using AI deepfake video to create fake virtual courtrooms and demanding UPI payment to avoid fabricated charges. Cumulative losses crossed ₹3,000 crore by early 2026. The Supreme Court described it as 'digital dacoity' and ordered the CBI to launch a pan-India probe in late 2025. Prime Minister Modi addressed the nation about it in Mann Ki Baat. DoT's new Financial Fraud Risk Indicator now flags such numbers before they connect. No real government authority conducts arrests over video call. Hang up and call 1930.",
    },
    {
        q: "What is the 1930 helpline and how effective is it in 2026?",
        a: "1930 is India's National Cyber Crime Financial Helpline, operated 24/7 by MHA under I4C. The CFCFRMS system it runs connects directly to banks and UPI platforms to freeze suspicious accounts in real time. As of 2026 it has processed 17.82 lakh complaints and helped save and recover ₹5,489 crore. Call with your transaction ID, amount, time, and the scammer's UPI ID. Then file a formal complaint on cybercrime.gov.in within 24 hours. Both steps together maximise your recovery chance.",
    },
    {
        q: "Is UPI safe for everyday transactions in 2026?",
        a: "Yes. UPI now processes over 16 billion transactions per month in India and the vast majority complete safely. NPCI uses bank-grade encryption, device binding, and two-factor authentication. RBI's MuleHunter.AI and DoT's Financial Fraud Risk Indicator add further real-time protection layers in 2026. Risk concentrates in four situations: unsolicited calls asking for your UPI PIN or OTP, QR codes from strangers to 'receive' money, payment links via WhatsApp or SMS, and video calls from people claiming to be officials. Avoid those and you have eliminated over 95% of UPI fraud risk.",
    },
    {
        q: "How do I report UPI fraud on PhonePe, Google Pay, or Paytm?",
        a: "PhonePe: open the app → tap the transaction → Raise Concern → Fraudulent transaction. Google Pay: tap transaction → Report a Problem → Unauthorized transaction. Paytm: Help & Support → Report Fraud. BHIM: call 18001201740. Always save the complaint reference number from each app. These reports feed into NPCI's fraud monitoring and can accelerate fund recovery.",
    },
    {
        q: "What is QR code UPI fraud and why is it still the third most common type in 2026?",
        a: "In QR code UPI fraud, a scammer sends a QR code claiming you need to scan it to receive a refund, prize, or payment. In UPI, scanning a QR code always initiates an outgoing payment from your account  it can never deposit money. This knowledge gap is exactly what scammers exploit. It accounted for 19% of all UPI fraud complaints in FY 2024–25. The defence is absolute: never scan any QR code sent to you for the purpose of receiving money. No legitimate UPI transaction requires this.",
    },
    {
        q: "What evidence should I collect immediately after UPI fraud?",
        a: "Act within minutes: screenshot the fraudulent transaction from your UPI app (transaction ID, amount, recipient UPI ID, timestamp). Save all WhatsApp, SMS, or call records from the scammer. Note every phone number and UPI ID involved. Write down the exact sequence of events while memory is fresh. Do not delete anything  even a two-word message may support the police investigation, FIR, cybercrime.gov.in complaint, and bank dispute. Victims who file with complete documentation have a measurably higher recovery rate within that critical 6% window.",
    },
    {
        q: "Which type of UPI fraud is most common and what does 2026 data say?",
        a: "By complaint volume (FY 2024–25, tabled in Lok Sabha Dec 2025): (1) Wrong transfer refund scam  31%. (2) OTP and UPI PIN fraud via fake bank calls  27%. (3) QR code UPI fraud  19%. (4) Fake UPI payment screenshot  14%. (5) Digital arrest scam India  6% of cases but cumulative losses exceeded ₹3,000 crore by 2026. (6) Fake payment links  2%. (7) Investment and job fraud via UPI  1%. Total FY 2024–25: ₹981 crore across 12.64 lakh incidents. In just the first 8 months of FY 2025–26, ₹805 crore was lost across 10.64 lakh incidents.",
    },
    {
        q: "What new government tools are protecting UPI users in 2026?",
        a: "Five major systems now operate: (1) RBI's MuleHunter.AI  launched December 2024, uses AI to identify and block mule bank accounts in real time. (2) DoT's Financial Fraud Risk Indicator (FRI)  classifies suspicious phone numbers as Medium, High, or Very High risk before a call even connects. (3) MHA's Pratibimb module under Samanvaya  has identified 1.5 lakh criminal connections and blacklisted 2.63 lakh IMEI numbers. (4) DoT has blocked 2.29 lakh fraudulent handsets and re-verified 1.66 crore suspicious mobile connections. (5) NPCI's AI-based fraud monitoring runs across all UPI apps in real time.",
    },
    {
        q: "How much UPI fraud has India seen in FY 2025–26 so far?",
        a: "In FY 2024–25, UPI fraud totalled ₹981 crore across 12.64 lakh incidents  data tabled in the Lok Sabha in December 2025. In the first eight months of FY 2025–26 alone (April to November 2025), losses already reached ₹805 crore across 10.64 lakh incidents. The full-year projection for FY 2025–26 is approximately ₹960–1,000 crore. Despite government countermeasures reducing the peak from ₹1,087 crore in FY 2023–24, recovery remains critically low at just 6% of total losses.",
    },
];

// ─────────────────────────────────────────────────────────────────────────────
export default function UPIFraudDetectionPage() {
    return (
        <DefaultLayout>
            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLd([structuredData, faqStructured, breadcrumbData, itemListData]) }}
            />

            <main className="min-h-screen">

                {/* ── Hero ──────────────────────────────────────────────────── */}
                <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-red-50 dark:from-gray-950 dark:via-gray-900 dark:to-red-950 pt-20 pb-24 px-4">
                    <div className="pointer-events-none absolute inset-0 -z-10">
                        <div className="absolute top-10 left-1/4 w-96 h-96 bg-orange-300/10 rounded-full blur-3xl animate-pulse" />
                        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-300/10 rounded-full blur-3xl animate-pulse delay-700" />
                        <div className="absolute top-1/2 left-0 w-64 h-64 bg-yellow-300/10 rounded-full blur-3xl animate-pulse delay-1000" />
                    </div>

                    <div className="max-w-4xl mx-auto text-center">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/40 dark:to-red-900/40 text-orange-700 dark:text-orange-300 text-xs font-semibold mb-6 border border-orange-200 dark:border-orange-800 shadow-sm">
                            <ShieldAlert className="h-4 w-4 animate-pulse" />
                            India&apos;s most reported financial crime &#x2014; &#x20B9;981 Cr lost in FY 2024&#x2013;25
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
                            UPI Fraud in India 2026:{" "}
                            <span className="bg-gradient-to-r from-orange-600 via-red-600 to-rose-600 bg-clip-text text-transparent">
                                Fraud Types, Warning Signs
                            </span>{" "}
                            &amp; How to Protect Yourself
                        </h1>

                        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
                            UPI fraud is any criminal trick that exploits India&apos;s Unified Payments Interface to steal money from ordinary people &mdash; and it remains India&apos;s most reported financial crime heading into 2026. In FY 2024&ndash;25, Indians lost &#x20B9;981 crore to UPI fraud across 12.64 lakh incidents &mdash; and in the first eight months of FY 2025&ndash;26 alone, losses have already reached &#x20B9;805 crore. With 51% of victims never filing a report, the real figure is estimated to be three to four times higher.
                        </p>

                        {/* Inline UPI ID checker CTA */}
                        <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-white dark:bg-gray-900 border border-orange-200 dark:border-orange-800 rounded-2xl px-6 py-4 shadow-md mb-10">
                            <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">Verify a UPI ID before sending money &#x2192;</span>
                            <Link
                                href="/upi-id-checker/"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-sm shadow hover:shadow-orange-300/50 hover:scale-105 transition-all duration-300"
                            >
                                <Shield className="h-4 w-4" />
                                Check UPI ID Free
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>

                        {/* Stats strip */}
                        <div className="flex flex-wrap justify-center gap-4">
                            {[
                                { value: "\u20B91,087 Cr", label: "Lost to UPI Fraud in 2025", icon: <IndianRupee className="h-4 w-4" /> },
                                { value: "15+ Lakh", label: "Complaints Filed Nationwide", icon: <Users className="h-4 w-4" /> },
                                { value: "+34%", label: "Year-on-Year Rise in Cases", icon: <TrendingUp className="h-4 w-4" /> },
                                { value: "Act in 30 Min", label: "Best Window for Recovery", icon: <Clock className="h-4 w-4" /> },
                            ].map(({ value, label, icon }, i) => (
                                <div
                                    key={label}
                                    className="group flex flex-col items-center px-6 py-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 min-w-[130px]"
                                    style={{ animationDelay: `${i * 100}ms` }}
                                >
                                    <div className="text-orange-500 mb-1 group-hover:scale-110 transition-transform">{icon}</div>
                                    <span className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">{value}</span>
                                    <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
{/* ── UPI Fraud Scale  Stats + Image ───────────────────── */}
                    <section aria-labelledby="fraud-scale-heading">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <span className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-widest">
                                    Official 2026 Data
                                </span>
                                <h2
                                    id="fraud-scale-heading"
                                    className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-2 mb-4"
                                >
                                    The Scale of UPI Fraud in India
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                    UPI fraud is not a rare event. Over 12 lakh Indians lost money to UPI scams in FY 2024–25 alone  roughly one victim every 25 seconds. Knowing the scale is the first step toward protection.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { label: "Lost to UPI Fraud in 2025", value: "₹1,087 Cr", color: "from-orange-500 to-amber-600" },
                                        { label: "Complaints Filed Nationwide", value: "15+ Lakh", color: "from-red-500 to-orange-600" },
                                        { label: "Year-on-Year Rise in Cases", value: "+34%", color: "from-amber-500 to-yellow-600" },
                                        { label: "Best Window for Recovery", value: "Act in 30 Min", color: "from-rose-500 to-red-600" },
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
                                    alt="UPI fraud prevention and payment verification in India  Indian woman checking UPI ID on smartphone, RakshaAI security interface showing fraud risk score, ₹981 crore lost to UPI scams"
                                    title="UPI Fraud Scale India 2026 | Verify Before You Pay"
                                    width={500}
                                    height={500}
                                    className="object-contain drop-shadow-2xl max-w-full h-auto rounded-3xl"
                                    priority={false}
                                />
                            </div>
                        </div>
                    </section>
                    {/* ── 7 Types of UPI Fraud ──────────────────────────────── */}
                    <section>
                        <div className="text-center mb-12">
                            <span className="inline-block px-3 py-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-xs font-semibold mb-4">
                                Complete 2026 Guide
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                7 Types of UPI Fraud in India
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                Based on FY 2024&#x2013;25 incident data tabled in Lok Sabha, December 2025. Click any type for a full explanation, real examples, and protection steps.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {scamTypes.map((scam) => (
                                <Link
                                    key={scam.href}
                                    href={scam.href}
                                    className="group relative flex flex-col gap-3 p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                >
                                    <div className="flex items-start justify-between gap-3">
                                        <span className="text-3xl">{scam.emoji}</span>
                                        <span className={`text-xs font-bold px-2 py-1 rounded-full ${scam.riskBg} ${scam.riskColor}`}>
                                            {scam.risk}
                                        </span>
                                    </div>
                                    <h3 className="text-base font-bold text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                                        {scam.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
                                        {scam.description}
                                    </p>
                                    <div className="flex items-center gap-1 text-orange-600 dark:text-orange-400 text-xs font-semibold mt-auto">
                                        Full guide <ArrowRight className="h-3 w-3" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* ── How UPI Fraud Actually Works ─────────────────────── */}
                    <section className="bg-gray-50 dark:bg-gray-900/60 rounded-3xl p-8 sm:p-12">
                        <div className="text-center mb-10">
                            <span className="inline-block px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs font-semibold mb-4">
                                2026 Playbook
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                How UPI Fraud Actually Works In India
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                Every UPI scam follows the same three-stage structure. Understanding each stage is how you break the chain.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                {
                                    stage: "Stage 1",
                                    title: "Target Selection",
                                    color: "from-yellow-500 to-orange-500",
                                    bg: "bg-yellow-50 dark:bg-yellow-900/20",
                                    border: "border-yellow-200 dark:border-yellow-800",
                                    points: [
                                        "Scammers work from stolen data \u2014 leaked databases, OLX and Quikr seller listings, dark web phone dumps, and Truecaller-scraped numbers help them build target profiles.",
                                        "By 2026, transnational fraud syndicates operating from compounds in Cambodia, Myanmar, and Laos \u2014 confirmed by MHA \u2014 buy and sell Indian data in bulk.",
                                        "MHA\u2019s Pratibimb module, launched in 2025 as part of the Samanvaya platform, has identified over 1.5 lakh criminal connections and blacklisted 2.63 lakh IMEI numbers to disrupt these networks.",
                                    ],
                                },
                                {
                                    stage: "Stage 2",
                                    title: "Approach & Trust Building",
                                    color: "from-orange-500 to-red-500",
                                    bg: "bg-orange-50 dark:bg-orange-900/20",
                                    border: "border-orange-200 dark:border-orange-800",
                                    points: [
                                        "Contact arrives through WhatsApp, phone, or SMS. The scammer builds a believable pretext: a wrong bank transfer, an urgent customs clearance, a government summons, or a high-paying job offer.",
                                        "In 2026, AI voice cloning replicates a family member\u2019s voice in under 10 seconds. AI deepfake video overlays create complete virtual police stations and courtrooms on video calls \u2014 the Supreme Court of India in late 2025 likened this to \u2018digital dacoity.\u2019",
                                        "DoT\u2019s new Financial Fraud Risk Indicator (FRI) now classifies suspicious numbers as Medium, High, or Very High risk before a call even connects.",
                                    ],
                                },
                                {
                                    stage: "Stage 3",
                                    title: "Execution & Disappearance",
                                    color: "from-red-500 to-rose-600",
                                    bg: "bg-red-50 dark:bg-red-900/20",
                                    border: "border-red-200 dark:border-red-800",
                                    points: [
                                        "The fraud completes in seconds \u2014 a UPI PIN entered once, a QR code scanned, a payment link clicked. UPI\u2019s irreversibility is the scammer\u2019s core weapon: money moves instantly through a chain of mule accounts.",
                                        "RBI\u2019s MuleHunter.AI, launched December 2024, uses AI/ML to identify and block mule accounts in real time \u2014 but scammers adapt by using newly issued SIMs abandoned within hours.",
                                        "Call 1930 immediately: the CFCFRMS has so far recovered and saved \u20B95,489 crore across 17.82 lakh complaints \u2014 but only when victims act fast.",
                                    ],
                                },
                            ].map((s) => (
                                <div key={s.stage} className={`rounded-2xl border p-6 ${s.bg} ${s.border}`}>
                                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${s.color} text-white text-xs font-bold mb-4`}>
                                        {s.stage}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">{s.title}</h3>
                                    <ul className="space-y-3">
                                        {s.points.map((pt, i) => (
                                            <li key={i} className="flex gap-2 text-sm text-gray-700 dark:text-gray-300">
                                                <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500" />
                                                {pt}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── Mid-page Verify CTA ───────────────────────────────── */}
                    <section className="rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 p-8 text-center text-white">
                        <Shield className="h-10 w-10 mx-auto mb-4 opacity-90" />
                        <h2 className="text-2xl font-extrabold mb-2">Always Verify Before You Send</h2>
                        <p className="text-orange-100 mb-6 max-w-xl mx-auto text-sm">
                            Run a UPI ID through RakshaAI before sending money. Free for consumers, with clear risk context.
                        </p>
                        <Link
                            href="/upi-id-checker/"
                            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-white text-orange-600 font-bold text-sm shadow hover:shadow-lg hover:scale-105 transition-all duration-300"
                        >
                            <Shield className="h-4 w-4" />
                            Check UPI ID &#x2014; Free
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </section>

                    

                    {/* ── 7 UPI Fraud Warning Signs ─────────────────────────── */}
                    <section id="red-flags">
                        <div className="text-center mb-12">
                            <span className="inline-block px-3 py-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-xs font-semibold mb-4">
                                Instant Recognition
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                7 UPI Fraud Warning Signs
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                If you see any of these seven signals during a financial interaction, stop immediately &#x2014; regardless of how convincing the other person sounds.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {redFlags.map((flag, i) => (
                                <div
                                    key={i}
                                    className="flex items-start gap-4 p-5 rounded-2xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900"
                                >
                                    <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white text-xs font-extrabold">
                                        {i + 1}
                                    </div>
                                    <p className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed">{flag}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── How to Protect  5 Rules ──────────────────────────── */}
                    <section>
                        <div className="text-center mb-12">
                            <span className="inline-block px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-semibold mb-4">
                                Protection
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                How to Protect Yourself from UPI Fraud &#x2014; 5 Rules
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                These five rules eliminate over 95% of UPI fraud risk when followed consistently.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {safetyTips.map((tip, i) => (
                                <div
                                    key={i}
                                    className="flex flex-col gap-3 p-6 rounded-2xl bg-white dark:bg-gray-900 border border-green-100 dark:border-green-900/50 shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded-full w-fit">
                                        <CheckCircle2 className="h-3.5 w-3.5" />
                                        {tip.rule}
                                    </span>
                                    <h3 className="text-base font-bold text-gray-900 dark:text-white">{tip.title}</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{tip.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── UPI ID vs PIN  Split Section ─────────────────────── */}
                    <section aria-labelledby="upi-id-vs-pin-heading" className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-lg lg:min-h-[520px]">

                        {/* LEFT: Content */}
                        <div className="flex flex-col justify-center p-8 sm:p-12 bg-white dark:bg-gray-900">
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300 text-[10px] font-extrabold uppercase tracking-widest mb-5 self-start border border-orange-200 dark:border-orange-800/60">
                                <Lock className="h-3 w-3" />
                                Most Misunderstood UPI Fact
                            </span>
                            <h2
                                id="upi-id-vs-pin-heading"
                                className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white leading-tight mb-3"
                            >
                                UPI ID vs UPI PIN {" "}
                                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                                    The Difference That Saves You
                                </span>
                            </h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-7">
                                Most UPI scams exploit one universal confusion: people don&apos;t know the difference between a UPI ID and a UPI PIN. Understanding this is your single most important fraud defence.
                            </p>
                            <div className="space-y-3 mb-7">
                                <div className="flex gap-4 p-4 rounded-2xl bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800/50">
                                    <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-green-100 dark:bg-green-900/40 flex items-center justify-center">
                                        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-green-800 dark:text-green-300 mb-1">UPI ID  Public Address</p>
                                        <ul className="space-y-0.5 text-xs text-green-700 dark:text-green-400">
                                            <li>✓ Safe to share with anyone sending you money</li>
                                            <li>✓ Cannot be used to withdraw from your account</li>
                                            <li>✓ Like your bank account number  just an address</li>
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
                                            <li>✗ Never share  treat exactly like your ATM PIN</li>
                                            <li>✗ Anyone asking for your PIN is a scammer, always</li>
                                            <li>✗ Only needed when <em>sending</em> money  never to receive</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
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

                        {/* RIGHT: Image */}
                        <div className="relative h-full min-h-[400px] overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-red-500 to-rose-600" />
                            <Image
                                src="/image/step-1-enter-phone-number-scam-checks-rakshaai.jpg"
                                alt="UPI ID public address vs UPI PIN private password  the critical difference that prevents UPI fraud in India. Never share your UPI PIN with anyone."
                                title="UPI ID vs UPI PIN  Never Share Your PIN | RakshaAI"
                                fill
                                className="object-cover object-center"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    </section>

                   

                    {/* ── Report CTA ────────────────────────────────────────── */}
                    <section className="rounded-2xl bg-gray-900 dark:bg-gray-800 p-8 text-center text-white">
                        <BellRing className="h-10 w-10 mx-auto mb-4 text-orange-400" />
                        <h2 className="text-2xl font-extrabold mb-2">Report a UPI Scam</h2>
                        <p className="text-gray-400 mb-6 max-w-xl mx-auto text-sm">
                            Help protect other Indians by reporting a UPI ID, phone number, or fraud attempt. Every report strengthens our database.
                        </p>
                        <ReportScamButton className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-sm shadow hover:shadow-orange-400/40 hover:scale-105 transition-all duration-300">
                            Report UPI Fraud
                        </ReportScamButton>
                    </section>

                    {/* ── UPI Fraud Statistics ──────────────────────────────── */}
                    <section>
                        <div className="text-center mb-10">
                            <span className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-4">
                                Official Data
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                UPI Fraud Statistics &#x2014; India 2026
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                Source: Lok Sabha unstarred questions, December 2025. RBI Annual Report 2024&#x2013;25. Ministry of Finance data.
                            </p>
                        </div>

                        {/* Year-over-year table */}
                        <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm mb-8">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-orange-50 dark:bg-orange-900/20">
                                        <th className="text-left px-4 py-3 font-bold text-gray-900 dark:text-white">Financial Year</th>
                                        <th className="text-right px-4 py-3 font-bold text-gray-900 dark:text-white">Incidents</th>
                                        <th className="text-right px-4 py-3 font-bold text-gray-900 dark:text-white">Amount Lost</th>
                                        <th className="text-right px-4 py-3 font-bold text-gray-900 dark:text-white">YoY Change</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { year: "FY 2021\u201322", incidents: "Not separately disclosed", amount: "\u20B9242 Cr", change: "Baseline", changeColor: "text-gray-500" },
                                        { year: "FY 2022\u201323", incidents: "\u2191 Rising adoption", amount: "\u20B9573 Cr", change: "+137%", changeColor: "text-red-600 dark:text-red-400" },
                                        { year: "FY 2023\u201324 (Peak)", incidents: "13.42 Lakh cases", amount: "\u20B91,087 Cr", change: "+90%", changeColor: "text-red-600 dark:text-red-400" },
                                        { year: "FY 2024\u201325", incidents: "12.64 Lakh cases", amount: "\u20B9981 Cr", change: "\u22129%", changeColor: "text-green-600 dark:text-green-400" },
                                        { year: "FY 2025\u201326 (Apr\u2013Nov)", incidents: "10.64 Lakh cases", amount: "\u20B9805 Cr", change: "In Progress", changeColor: "text-amber-600 dark:text-amber-400" },
                                        { year: "FY 2025\u201326 Full Year (proj.)", incidents: "~13 Lakh estimated", amount: "~\u20B9960\u20131,000 Cr", change: "Projected", changeColor: "text-amber-600 dark:text-amber-400" },
                                    ].map((row, i) => (
                                        <tr key={row.year} className={i % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50 dark:bg-gray-800/50"}>
                                            <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">{row.year}</td>
                                            <td className="px-4 py-3 text-right text-gray-700 dark:text-gray-300">{row.incidents}</td>
                                            <td className="px-4 py-3 text-right font-bold text-gray-900 dark:text-white">{row.amount}</td>
                                            <td className={`px-4 py-3 text-right font-semibold ${row.changeColor}`}>{row.change}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* By fraud type table */}
                        <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-red-50 dark:bg-red-900/20">
                                        <th className="text-left px-4 py-3 font-bold text-gray-900 dark:text-white">Fraud Type</th>
                                        <th className="text-right px-4 py-3 font-bold text-gray-900 dark:text-white">% of Cases</th>
                                        <th className="text-right px-4 py-3 font-bold text-gray-900 dark:text-white">Avg Loss / Case</th>
                                        <th className="text-left px-4 py-3 font-bold text-gray-900 dark:text-white">Primary Target</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { type: "Wrong Transfer / Refund Scam", pct: "31%", avg: "\u20B93,200", target: "General public" },
                                        { type: "OTP / PIN via Fake Bank Call", pct: "27%", avg: "\u20B928,000", target: "Bank account holders" },
                                        { type: "QR Code UPI Fraud", pct: "19%", avg: "\u20B97,500", target: "Marketplace sellers" },
                                        { type: "Fake UPI Payment Screenshot", pct: "14%", avg: "\u20B98,400", target: "Small merchants" },
                                        { type: "Digital Arrest Scam India", pct: "6%", avg: "\u20B95\u201310 Lakh (avg, rising)", target: "Professionals 35+" },
                                        { type: "Fake Payment Links", pct: "2%", avg: "\u20B912,000", target: "Online shoppers" },
                                        { type: "Investment & Job Fraud via UPI", pct: "1%", avg: "\u20B985,000", target: "Job seekers, investors" },
                                    ].map((row, i) => (
                                        <tr key={row.type} className={i % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50 dark:bg-gray-800/50"}>
                                            <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">{row.type}</td>
                                            <td className="px-4 py-3 text-right text-gray-700 dark:text-gray-300">{row.pct}</td>
                                            <td className="px-4 py-3 text-right font-bold text-red-700 dark:text-red-400">{row.avg}</td>
                                            <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{row.target}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* ── More UPI Fraud Guides & Articles ─────────────────── */}
                    <section>
                        <div className="text-center mb-10">
                            <span className="inline-block px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-semibold mb-4">
                                Deep Dives
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                More UPI Fraud Guides &amp; Articles
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                In-depth guides on each fraud type, with real Indian case studies and step-by-step protection.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    href: "/blog/upi-scam-india-2026",
                                    tag: "UPI Scams 2026",
                                    tagColor: "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300",
                                    title: "UPI Scam India 2026: Types, Red Flags & How to Stay Safe",
                                    desc: "Complete guide to every type of UPI scam active in India in 2026  from fake collect requests to QR code fraud  with step-by-step protection tips.",
                                    readTime: "7 min read",
                                },
                                {
                                    href: "/blog/digital-arrest-scam-india",
                                    tag: "Digital Arrest",
                                    tagColor: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300",
                                    title: "Digital Arrest Scam India: How Fake CBI Officers Steal Crores",
                                    desc: "Fraudsters impersonating CBI, ED, and police officers via video call have stolen thousands of crores. Learn the warning signs and what to do if you get the call.",
                                    readTime: "9 min read",
                                },
                                {
                                    href: "/blog/got-scammed-online-india-what-to-do",
                                    tag: "Recovery Guide",
                                    tagColor: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
                                    title: "Got Scammed Online in India? Here's Exactly What to Do",
                                    desc: "Step-by-step recovery guide  from calling 1930 to filing on cybercrime.gov.in and initiating a bank dispute. Act within 24 hours for best results.",
                                    readTime: "6 min read",
                                },
                                {
                                    href: "/blog/fake-customer-care-number-scam-india",
                                    tag: "Phone Scam",
                                    tagColor: "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300",
                                    title: "Fake Customer Care Number Scam India: How to Spot & Avoid",
                                    desc: "Scammers rank fake helpline numbers above official ones on Google. Know how to find the real number and what to do if you called a fake one.",
                                    readTime: "5 min read",
                                },
                                {
                                    href: "/blog/kyc-update-scam-india",
                                    tag: "KYC Fraud",
                                    tagColor: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300",
                                    title: "KYC Update Scam India: Fake Bank & Wallet Alerts Explained",
                                    desc: "\"Your UPI will be blocked  update KYC now.\" This message steals bank access in minutes. Here's exactly how the scam works and how to verify legitimate KYC requests.",
                                    readTime: "5 min read",
                                },
                                {
                                    href: "/blog/how-to-check-fake-website-india",
                                    tag: "Website Safety",
                                    tagColor: "bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300",
                                    title: "How to Check If a Website Is Fake in India (2026 Guide)",
                                    desc: "7 checks anyone can run in under 60 seconds  domain age, SSL, blacklist status, WHOIS  before paying or entering any personal details on an unknown site.",
                                    readTime: "6 min read",
                                },
                            ].map((article) => (
                                <Link
                                    key={article.href}
                                    href={article.href}
                                    className="group flex flex-col gap-3 p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                >
                                    <div className="flex items-center justify-between">
                                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${article.tagColor}`}>{article.tag}</span>
                                        <span className="text-xs text-gray-400">{article.readTime}</span>
                                    </div>
                                    <h3 className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors leading-snug">
                                        {article.title}
                                    </h3>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed flex-1">{article.desc}</p>
                                    <div className="flex items-center gap-1 text-orange-600 dark:text-orange-400 text-xs font-semibold mt-auto">
                                        Read article <ArrowRight className="h-3 w-3" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* ── FAQ ───────────────────────────────────────────────── */}
                    <section>
                        <div className="text-center mb-10">
                            <span className="inline-block px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-semibold mb-4">
                                FAQ
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                UPI Fraud Questions &#x2014; 2026 Answers
                            </h2>
                        </div>
                        <div className="max-w-3xl mx-auto divide-y divide-gray-200 dark:divide-gray-700 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
                            {faqs.map((faq, i) => (
                                <details key={i} className="group bg-white dark:bg-gray-900">
                                    <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none select-none hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                        <span className="font-semibold text-gray-900 dark:text-white text-sm leading-snug">{faq.q}</span>
                                        <ChevronDown className="h-5 w-5 shrink-0 text-gray-400 group-open:rotate-180 transition-transform duration-200" />
                                    </summary>
                                    <div className="px-6 pb-5 pt-1 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {faq.a}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </section>
 {/* ── How to Report UPI Fraud ───────────────────────────── */}
                    <section>
                        <div className="text-center mb-12">
                            <span className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-4">
                                Step by Step
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                How to Report UPI Fraud in 2026
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                Complete these five steps in order. Your first 30 minutes determine whether any money is recovered.
                            </p>
                        </div>
                        {/* Banner image */}
                        <div className="relative w-full rounded-2xl overflow-hidden mb-8 shadow-md">
                            <Image
                                src="/image/upi-scam-recovery-5-steps-emergency-guide-india.jpg"
                                alt="UPI scam recovery 5 steps India  call 1930 helpline, report to bank fraud line, file cybercrime.gov.in complaint, report in UPI app, file FIR at police station"
                                title="How to Report UPI Fraud in India | 5-Step Recovery Guide"
                                width={1200}
                                height={480}
                                className="w-full h-auto object-cover"
                                priority={false}
                            />
                        </div>
                        <div className="space-y-4">
                            {afterScamSteps.map((step) => (
                                <div
                                    key={step.step}
                                    className={`relative flex gap-6 p-6 rounded-2xl border transition-all ${step.urgent
                                        ? "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-900"
                                        : "bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800"
                                        }`}
                                >
                                    {step.urgent && (
                                        <div className="absolute top-4 right-4 flex items-center gap-1 text-xs font-bold text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/40 px-2 py-0.5 rounded-full">
                                            <Zap className="h-3 w-3" /> URGENT
                                        </div>
                                    )}
                                    <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-600 text-white font-extrabold text-sm shadow">
                                        {step.step}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Recovery timeline callout */}
                        <div className="mt-8 rounded-2xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 p-6">
                            <div className="flex items-start gap-4">
                                <Clock className="h-6 w-6 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                                <div>
                                    <h3 className="font-bold text-amber-900 dark:text-amber-200 mb-4">Recovery Timeline Reality</h3>
                                    <div className="grid sm:grid-cols-3 gap-4 text-sm">
                                        {[
                                            { window: "0\u201330 min", chance: "Possible", color: "text-green-700 dark:text-green-400", detail: "CFCFRMS can freeze receiving account in real time if 1930 is called with transaction details" },
                                            { window: "30 min\u201324 hrs", chance: "Unlikely", color: "text-amber-700 dark:text-amber-400", detail: "Funds typically routed through multiple mule accounts \u2014 partial recovery rare, requires court order" },
                                            { window: "24+ hrs", chance: "Very rare", color: "text-red-700 dark:text-red-400", detail: "Only 6% overall recovery rate (Parliament data, Dec 2025) \u2014 crypto off-ramps make tracing nearly impossible" },
                                        ].map((t) => (
                                            <div key={t.window} className="flex flex-col gap-1">
                                                <span className="font-bold text-amber-800 dark:text-amber-300">{t.window}</span>
                                                <span className={`font-semibold ${t.color}`}>{t.chance}</span>
                                                <span className="text-gray-600 dark:text-gray-400 text-xs">{t.detail}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* ── Related Tools ─────────────────────────────────────── */}
                    <section>
                        <div className="text-center mb-10">
                            <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-semibold mb-4">
                                Free Tools
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                Related Fraud Detection Tools
                            </h2>
                        </div>
                        <div className="grid sm:grid-cols-3 gap-6">
                            {[
                                {
                                    href: "/upi-id-checker/",
                                    icon: <IndianRupee className="h-6 w-6" />,
                                    iconBg: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
                                    title: "UPI ID Checker",
                                    desc: "Instantly verify if a UPI ID is genuine or linked to known fraud reports before sending any amount.",
                                    cta: "Check UPI ID",
                                },
                                {
                                    href: "/website-safety-checker/",
                                    icon: <Globe className="h-6 w-6" />,
                                    iconBg: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
                                    title: "Website Safety Checker",
                                    desc: "Verify if a website is safe before entering your UPI credentials or card details on it.",
                                    cta: "Check Website",
                                },
                                {
                                    href: "/phone-number-checker/",
                                    icon: <Phone className="h-6 w-6" />,
                                    iconBg: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
                                    title: "Phone Number Checker",
                                    desc: "Verify phone numbers linked to suspicious UPI transactions or unsolicited calls claiming to be from your bank.",
                                    cta: "Check Number",
                                },
                            ].map((tool) => (
                                <Link
                                    key={tool.href}
                                    href={tool.href}
                                    className="group flex flex-col gap-4 p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                >
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${tool.iconBg}`}>
                                        {tool.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 dark:text-white mb-1 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                                            {tool.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">{tool.desc}</p>
                                    </div>
                                    <div className="flex items-center gap-1 text-orange-600 dark:text-orange-400 text-xs font-semibold mt-auto">
                                        {tool.cta} <ArrowRight className="h-3 w-3" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* ── Recent UPI Scam Alerts ────────────────────────────── */}
                    <section>
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <span className="inline-block px-3 py-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-xs font-semibold mb-3">
                                    Live Alerts
                                </span>
                                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
                                    Recent UPI Scam Alerts
                                </h2>
                            </div>
                            <span className="text-xs text-green-600 dark:text-green-400 font-semibold bg-green-100 dark:bg-green-900/30 px-3 py-1.5 rounded-full">
                                Updated Today
                            </span>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                {
                                    severity: "CRITICAL",
                                    severityColor: "bg-red-600 text-white",
                                    date: "March 2026",
                                    title: "AI Deepfake 'CBI Video Call' Scam Surges Across Delhi-NCR  Losses: ₹6.8 Crore in 11 Days",
                                    desc: "Scammers are using AI deepfake video of fake senior police officers to target residents across Delhi-NCR. Average loss: ₹4.2 lakh per victim. MHA has issued a national alert. Never comply with demands from any video call impersonating law enforcement.",
                                },
                                {
                                    severity: "HIGH",
                                    severityColor: "bg-orange-500 text-white",
                                    date: "February 2026",
                                    title: "New PhonePe QR Code Script Targeting OLX Car Sellers in Mumbai and Pune",
                                    desc: "Buyers on OLX send a QR code claiming to transfer a token amount. Scanning it initiates an outgoing payment instead of a credit. Over 800 complaints filed in 30 days. Never scan a QR code sent by a buyer to 'receive' payment.",
                                },
                                {
                                    severity: "HIGH",
                                    severityColor: "bg-orange-500 text-white",
                                    date: "March 2026",
                                    title: "Fake TRAI Disconnection Calls Demanding UPI 'Security Deposit'  DoT Advisory Issued",
                                    desc: "Callers impersonating TRAI officials claim your mobile number will be disconnected for illegal use and demand a UPI 'security deposit' to prevent it. DoT has issued an official advisory. TRAI never demands payments via UPI calls.",
                                },
                                {
                                    severity: "MEDIUM",
                                    severityColor: "bg-amber-500 text-white",
                                    date: "January 2026",
                                    title: "Wrong Transfer WhatsApp Script Now Uses Fake Cybercrime.gov.in Screenshots as 'Proof'  Bengaluru",
                                    desc: "Scammers in the wrong-transfer refund scam are now sending forged cybercrime.gov.in complaint screenshots to pressure victims into immediate refunds. Always verify directly on the official website. Do not act on screenshots alone.",
                                },
                            ].map((alert, i) => (
                                <div
                                    key={i}
                                    className="flex flex-col gap-3 p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm"
                                >
                                    <div className="flex items-center justify-between gap-3">
                                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${alert.severityColor}`}>
                                            {alert.severity}
                                        </span>
                                        <span className="text-xs text-gray-400">{alert.date}</span>
                                    </div>
                                    <h3 className="text-sm font-bold text-gray-900 dark:text-white leading-snug">{alert.title}</h3>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{alert.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── Final CTA ─────────────────────────────────────────── */}
                    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-600 via-red-600 to-rose-700 px-8 py-14 text-center text-white shadow-2xl">
                        <div className="pointer-events-none absolute inset-0 -z-10">
                            <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
                            <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
                        </div>
                        <Shield className="h-14 w-14 mx-auto mb-5 opacity-90" />
                        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
                            Verify Any UPI ID Before You Send
                        </h2>
                        <p className="text-orange-100 text-base mb-8 max-w-xl mx-auto">
                            Free consumer access with no registration. Check UPI IDs against available fraud signals and community reports.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/upi-id-checker/"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-orange-600 font-bold text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                            >
                                <Shield className="h-5 w-5" />
                                Check UPI ID &#x2014; Free
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                            <ReportScamButton className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 text-white font-semibold text-sm border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300">
                                Report a Scam
                            </ReportScamButton>
                        </div>
                        <p className="mt-6 text-orange-200 text-xs">
                            &#x1F1EE;&#x1F1F3; India-focused UPI fraud guidance &middot; Free consumer access &middot; No registration required
                        </p>
                    </section>

                </div>
            </main>
        </DefaultLayout>
    );
}
