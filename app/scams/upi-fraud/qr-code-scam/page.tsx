import type { Metadata } from "next";
import Image from "next/image";
import DefaultLayout from "@/components/DefaultLayout";
import { jsonLd } from "@/lib/seo/schema";
import {
    Shield, AlertTriangle, CheckCircle2, XCircle, Phone,
    ArrowRight, ShieldAlert, IndianRupee, Clock, QrCode,
    MessageSquare, TrendingUp, Ban, BellRing,
    ExternalLink, ChevronRight,
} from "lucide-react";
import Link from "next/link";
import ReportScamButton from "@/components/ReportScamButton";

// ── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
    title: "QR Code UPI Fraud India 2026: How It Works & How to Report",
    description:
        "QR code UPI fraud in India: how scammers trick you into scanning fake QR codes to steal money via PhonePe, Google Pay & Paytm. Warning signs, real examples & how to report.",
    alternates: {
        canonical: "https://rakshaai.co/scams/upi-fraud/qr-code-scam",
    },
    robots: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
    },
    openGraph: {
        title: "QR Code UPI Fraud India 2026: How It Works & How to Report",
        description:
            "How scammers use fake QR codes to steal money via PhonePe, Google Pay & Paytm. Warning signs, real examples & step-by-step reporting guide.",
        url: "https://rakshaai.co/scams/upi-fraud/qr-code-scam",
        type: "article",
        siteName: "RakshaAI",
        locale: "en_IN",
        images: [{ url: "/blog/upi-scam-india-2026/qr-code-scam-explainer.webp", width: 1400, height: 788, alt: "QR Code UPI fraud explainer showing scan-to-receive scam flow" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "QR Code UPI Fraud India 2026: How It Works & How to Report",
        description:
            "Fake QR codes steal money. Know the warning signs, real examples, and what to report first.",
        images: ["/blog/upi-scam-india-2026/qr-code-scam-explainer.webp"],
    },
    other: {
        "geo.region": "IN",
        language: "en-IN",
    },
};

// ── Article Schema ────────────────────────────────────────────────────────────
const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "QR Code UPI Fraud India 2026: How It Works & How to Report",
    author: { "@type": "Organization", name: "RakshaAI" },
    publisher: {
        "@type": "Organization",
        name: "RakshaAI",
        url: "https://rakshaai.co",
    },
    datePublished: "2026-03-01",
    dateModified: "2026-03-01",
    url: "https://rakshaai.co/scams/upi-fraud/qr-code-scam",
    image: "https://rakshaai.co/blog/upi-scam-india-2026/qr-code-scam-explainer.webp",
    description: "Complete guide to QR code UPI fraud in India 2026.",
};

// ── BreadcrumbList Schema ─────────────────────────────────────────────────────
const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://rakshaai.co/" },
        { "@type": "ListItem", position: 2, name: "Scam Categories", item: "https://rakshaai.co/scams" },
        { "@type": "ListItem", position: 3, name: "UPI Fraud", item: "https://rakshaai.co/scams/upi-fraud" },
        { "@type": "ListItem", position: 4, name: "QR Code UPI Fraud", item: "https://rakshaai.co/scams/upi-fraud/qr-code-scam" },
    ],
};

// ── FAQPage Schema ────────────────────────────────────────────────────────────
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "How does QR code UPI fraud work in India?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "QR code UPI fraud india works by exploiting a common misunderstanding: that QR codes can be used to receive money. A scammer creates a standard UPI payment QR code with their UPI ID pre-filled as the recipient, then sends it to you with a false claim that scanning it will deposit money into your account. When you scan the code on your PhonePe, Google Pay, or Paytm app and enter your UPI PIN, you authorise a payment out of your account to the scammer. The transaction is instant and irreversible.",
            },
        },
        {
            "@type": "Question",
            name: "Can a QR code be used to receive money on UPI?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No. A QR code on UPI is always a payment instruction  it directs your UPI app to send money to the QR code's creator. To receive money on UPI, you share your own UPI ID (like yourname@upi) or show your own QR code from your UPI app profile. The recipient never needs to scan anything or enter their UPI PIN to receive money. If anyone tells you to scan their QR code to receive money, it is a qr code scam india.",
            },
        },
        {
            "@type": "Question",
            name: "I scanned a QR code and money was debited. What should I do immediately?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "If you have lost money to a qr code upi fraud india: (1) Call 1930 immediately  this is the National Cyber Crime Financial Helpline, available 24/7. (2) Raise a dispute within your UPI app on the fraudulent transaction. (3) File a complaint on cybercrime.gov.in under Financial Cyber Fraud. (4) Contact your bank's fraud department with your cybercrime.gov.in reference number. (5) Report the scammer's number and UPI ID at rakshaai.co/report-a-scam/. Speed is critical.",
            },
        },
        {
            "@type": "Question",
            name: "How do I identify a fake QR code in India?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "How to identify fake qr code india: (1) Any QR code sent to you by a stranger claiming it will deposit money is fake  there is no technology that makes this possible on UPI. (2) Before scanning any QR code, check what UPI app shows after the scan: the recipient's name and UPI ID will appear. If you don't recognise the recipient, do not enter your PIN. (3) Legitimate bank refunds are never sent as QR codes on WhatsApp. (4) Run the sender's number through RakshaAI's Phone Number Checker before responding.",
            },
        },
        {
            "@type": "Question",
            name: "What is the '1930 helpline' and how does it help with QR code fraud?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The 1930 helpline is India's National Cyber Crime Financial Helpline, operated by the Ministry of Home Affairs I4C. When you call 1930 after a qr code upi fraud india incident, the helpline team logs your complaint and initiates a freeze request on the destination UPI account through NPCI and the beneficiary bank. The 1930 helpline operates 24/7 and is the single most time-critical step in recovery. Call within 30 minutes for the best results.",
            },
        },
        {
            "@type": "Question",
            name: "Are banks responsible for QR code UPI fraud losses?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Under RBI's Customer Protection Circular (RBI/2017-18/15), the liability framework for unauthorised UPI transactions depends on when you report: reporting within 3 working days means the bank must investigate and may offer zero or limited liability. However, in qr code upi fraud india cases, the customer technically authorised the payment by scanning the QR and entering their own UPI PIN. Banks typically argue this constitutes customer-side authorisation. Your strongest recovery path remains the 1930 helpline and cybercrime.gov.in.",
            },
        },
        {
            "@type": "Question",
            name: "How does the QR code scam work on OLX and Facebook Marketplace in India?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The OLX / Facebook Marketplace variant of qr code upi fraud india targets sellers. A fake 'buyer' contacts you about your listed item and claims they want to pay an advance. They send a QR code saying 'scan this to receive the advance payment.' The QR code is a payment request from the scammer  scanning it and entering your PIN sends them money instead of receiving any. Documented cases show average losses of ₹15,000–35,000 per incident. Never scan a QR code sent by a buyer  instead share your own UPI ID.",
            },
        },
        {
            "@type": "Question",
            name: "Can I get my money back after a UPI QR code scam?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Full recovery is difficult but possible if acted on quickly. Reporting to 1930 within 30 minutes yields approximately 12–18% full recovery rate. After 2 hours, the rate drops below 5% as scammers immediately withdraw funds to mule accounts. Partial recovery through cybercrime investigation is possible in 15–20% of cases, typically over 3–6 months. The strongest case for recovery is when: (1) the 1930 helpline was called within 30 minutes, (2) a cybercrime.gov.in complaint was filed same day, and (3) a police FIR was filed with all transaction evidence within 7 days.",
            },
        },
        {
            "@type": "Question",
            name: "What is the 'army scam' variant of QR code fraud in India?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The army scam variant of qr code upi fraud india involves a scammer posing as an Indian Army or defence services officer on social media (Facebook, Instagram, Shaadi.com). After establishing trust over days or weeks, they send a QR code claiming it is for sending money to the victim for 'help.' When the victim scans and enters their PIN, money is taken. This variant disproportionately targets women on matrimonial and social media platforms. The MHA I4C issued a specific advisory about this variant in 2024.",
            },
        },
        {
            "@type": "Question",
            name: "How do I report a QR code scam to NPCI or my UPI app?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Reporting channels for qr code upi fraud india: (1) PhonePe: Help → Transaction dispute → Report fraud. (2) Google Pay: transaction → Report a problem. (3) Paytm: Transaction history → Need Help → Report fraud. (4) NPCI: pgrsecure.npci.org.in for UPI complaints. (5) cybercrime.gov.in: File under Financial Cyber Fraud. (6) 1930: National helpline for immediate intervention. (7) rakshaai.co/report-a-scam/: Report the UPI ID and scammer's number to warn other Indians.",
            },
        },
    ],
};

// ── Page data ─────────────────────────────────────────────────────────────────
const stats = [
    { value: "₹1,087 Cr", label: "Total UPI Fraud Losses  India 2025 (NPCI)", icon: IndianRupee },
    { value: "#1 Type", label: "QR Code Fraud = Most Reported UPI Scam 2025", icon: QrCode },
    { value: "₹42,000", label: "Average Loss Per QR Code Fraud Victim India 2025", icon: TrendingUp },
    { value: "<30 Sec", label: "Time for Money to Leave Account After PIN Entry", icon: Clock },
];

const scamSetups = [
    { emoji: "🛍️", title: "OLX / Quikr / Facebook Marketplace", desc: "\"I want to buy your item. I'll send you the advance payment via QR code right now.\"" },
    { emoji: "💂", title: "Military / Army Scam", desc: "\"I'm posted abroad and want to send you money for XYZ reason. Scan this QR.\"" },
    { emoji: "🏆", title: "Lottery / Cashback", desc: "\"Congratulations! You won ₹20,000. Scan this QR code to receive your prize.\"" },
    { emoji: "🏦", title: "Bank Refund", desc: "\"Your UPI refund of ₹2,340 is ready. Scan this code to receive it.\"" },
    { emoji: "📞", title: "Job Offer", desc: "\"We're sending your advance salary. Scan this QR for immediate credit.\"" },
    { emoji: "📱", title: "Customer Care Impersonation", desc: "\"I'm from PhonePe support. Scan this QR to reverse your failed transaction.\"" },
];

const realCases = [
    { scenario: "OLX Seller Targeted  ₹18,000 Lost", detail: "Victim listed a refrigerator for sale. Buyer sent a QR code saying 'scan to receive ₹18,000 advance.' Victim scanned and entered PIN. ₹18,000 debited instantly." },
    { scenario: "Army Officer Scam  ₹35,000 Lost", detail: "Scammer posing as army officer on Facebook said 'I want to send you money for storing my goods.' Sent a QR code. Victim entered PIN thinking they were receiving." },
    { scenario: "PhonePe 'Support' QR  ₹12,500 Lost", detail: "Caller claimed to be PhonePe customer support fixing a transaction error. Asked victim to scan a QR to 'reverse' a failed payment. Victim lost ₹12,500." },
    { scenario: "Lottery Prize QR  ₹50,000 Lost", detail: "SMS said 'You won ₹50,000 cashback. Scan QR to claim.' Victim scanned the QR on Google Pay, entered PIN, and lost entire amount." },
    { scenario: "Rent Deposit QR  ₹25,000 Lost", detail: "Landlord impersonator sent a QR code claiming to send the rental deposit back. Tenant scanned and entered PIN. ₹25,000 debited." },
];

const warningSigns = [
    "Anyone asks you to scan a QR code to RECEIVE money. This is impossible. QR codes on UPI are payment requests  scanning one sends money out of your account. Always.",
    "The QR code was sent to you via WhatsApp, SMS, or email by someone you do not know personally. Legitimate refunds, prizes, and salaries are never delivered as QR codes sent to your phone.",
    "The UPI app shows a recipient name or UPI ID you don't recognise when you scan the code. Before entering your PIN, always read the recipient details on your UPI app screen.",
    "A caller claiming to be from your bank, PhonePe, Google Pay, or Paytm asks you to scan a QR code. Legitimate banking customer service never requests QR code scans.",
    "The QR code arrives with urgency: 'scan in the next 10 minutes or the offer expires.' Urgency is a manufactured psychological pressure tactic used in every case.",
    "The person requesting the scan cannot or will not show their face on a live video call when asked. Scammers always avoid live video verification.",
    "The stated amount on the QR code is different from the amount the sender mentioned. A common variation used to confuse victims about what the transaction is doing.",
];

const platformData = [
    { platform: "WhatsApp", delivery: "Scammer sends QR as image + calls to guide scanning", profile: "All age groups  #1 delivery channel" },
    { platform: "OLX / Quikr / Facebook Marketplace", delivery: "Fake buyer sends QR as 'advance payment'", profile: "Sellers of second-hand goods" },
    { platform: "SMS", delivery: "Lottery/cashback QR code text from unknown number", profile: "Older users less familiar with UPI" },
    { platform: "Phone Call", delivery: "'Bank support' caller guides victim to scan QR", profile: "Any active UPI user" },
    { platform: "Facebook / Instagram DMs", delivery: "Army/NRI scammer sends QR for goods storage/transfer", profile: "People who accept unknown social media contacts" },
    { platform: "Email", delivery: "Fake bank refund notification with QR code attachment", profile: "Corporate users, professionals" },
    { platform: "Telegram", delivery: "Investment group scam with 'profit withdrawal QR'", profile: "Crypto/investment scam victims" },
];

const protectionRules = [
    {
        rule: "Rule 1",
        title: "Repeat This Every Time Before Scanning Any QR Code",
        desc: "Before scanning any QR code on any UPI app: say out loud or mentally: \"Scanning this QR code will SEND money from MY account.\" This single mental habit breaks the scam's psychological mechanism. The entire qr code upi fraud india playbook depends on the victim believing they are receiving money. The moment you internalise that scanning = sending, the fraud collapses. Then ask: do I know this person? Did I initiate this transaction? Is there a legitimate reason to send money here?",
    },
    {
        rule: "Rule 2",
        title: "Always Read the Recipient Details Before Entering Your PIN",
        desc: "Every UPI app  PhonePe, Google Pay, Paytm, BHIM  shows the recipient's name and UPI ID on screen before asking for your PIN. This is your last checkpoint. If the name shown is not someone you know and trust, or if it is an unfamiliar UPI ID, do not enter your PIN. Scammers sometimes use UPI IDs that look official  such as names containing 'refund,' 'cashback,' or bank names  but a closer look reveals they are personal UPI IDs, not official bank or company IDs.",
    },
    {
        rule: "Rule 3",
        title: "Verify Any Business or Merchant via Their Official Website",
        desc: "If you receive a QR code claiming to be from a bank, e-commerce company, or government agency: do not scan it. Instead, go directly to that organisation's official website and call their published customer care number. Check the organisation's official website using RakshaAI's Website Safety Checker before proceeding. Legitimate organisations never initiate contact via WhatsApp or SMS asking you to scan a QR code.",
    },
    {
        rule: "Rule 4",
        title: "Check the Sender's Number Before Responding",
        desc: "Before responding to any WhatsApp message or phone call that mentions sending you money via QR code: check the sender's number on RakshaAI's Phone Number Checker. Documented qr code upi fraud india scammer numbers are reported to RakshaAI by victims and appear in search results within hours of the first complaint. A quick check takes 30 seconds and can save you from losing thousands of rupees.",
    },
    {
        rule: "Rule 5",
        title: "Enable UPI Transaction Limits and Alerts on Your App",
        desc: "All major UPI apps in India allow you to set per-transaction limits and enable instant SMS/push notification alerts for every debit. Setting a daily UPI transaction limit means that even if a scan-to-pay fraud succeeds, the maximum loss is capped at your set limit. Enable transaction alerts so you see every debit in real time  allowing you to call 1930 within the critical 30-minute window where account freezes are still possible.",
    },
];

const recoverySteps = [
    {
        step: "Step 1",
        urgent: true,
        title: "Call 1930 Immediately (Within 30 Minutes)",
        desc: "Call the National Cyber Crime Financial Helpline on 1930 within 30 minutes of the fraudulent transaction. This helpline operates 24/7 and can initiate an account freeze request on the destination UPI account. Provide: the exact amount debited, the time of the transaction, the recipient's UPI ID (shown on your UPI app transaction history), your own UPI ID, and your phone number. Recovery probability is highest within this 30-minute window.",
    },
    {
        step: "Step 2",
        urgent: true,
        title: "Report Within the UPI App",
        desc: "Open your UPI app and immediately raise a dispute on the fraudulent transaction. In PhonePe: Go to History → select the transaction → Raise a Dispute. In Google Pay: Go to the transaction → Report a Problem. In Paytm: Transaction history → Need Help. The in-app dispute system notifies the UPI app's fraud team and initiates an internal investigation, creating an official record within the UPI system.",
    },
    {
        step: "Step 3",
        urgent: false,
        title: "File on cybercrime.gov.in",
        desc: "File a detailed complaint on cybercrime.gov.in under 'Financial Cyber Fraud.' Attach: a screenshot of the fraudulent UPI transaction, the QR code image that was sent to you, all WhatsApp or SMS communication from the scammer, and the scammer's phone number or UPI ID. The cybercrime.gov.in reference number activates a formal investigation and is required for your bank dispute and FIR proceedings.",
    },
    {
        step: "Step 4",
        urgent: false,
        title: "Contact Your Bank's Fraud Department",
        desc: "Call your bank's 24/7 customer care with your cybercrime.gov.in reference number. Under RBI's Customer Protection Guidelines (RBI Circular 2017), unauthorised electronic transactions reported within 3 working days qualify for zero liability or limited liability to the customer. Present your 1930 case reference number, cybercrime.gov.in reference, and all transaction evidence.",
    },
    {
        step: "Step 5",
        urgent: false,
        title: "Report to RakshaAI and File an FIR",
        desc: "Report the scammer's phone number and UPI ID at rakshaai.co/report-a-scam/. Your report appears in search results for that UPI ID and phone number within 4–6 hours, warning other potential victims in India. File a physical FIR at your nearest cybercrime police station with all evidence and your cybercrime.gov.in reference. Under IT Act 2000 Sections 66C and 66D, QR code payment fraud is a cognizable offence.",
    },
];

const fraudStats = [
    { metric: "Total UPI fraud losses India 2025", data: "₹1,087 crore", source: "NPCI Annual Report 2025" },
    { metric: "QR code fraud share of UPI complaints", data: "38% of all UPI fraud cases", source: "cybercrime.gov.in 2025 data" },
    { metric: "Average loss per QR code fraud victim", data: "₹42,000", source: "MHA I4C 2025" },
    { metric: "Recovery rate for QR code fraud victims", data: "~12% (when reported within 30 min)", source: "1930 helpline data 2025" },
    { metric: "Most common delivery channel", data: "WhatsApp (68% of cases)", source: "CERT-In 2025" },
    { metric: "Most impersonated entity in QR scams", data: "Bank customer service (44%)", source: "cybercrime.gov.in analysis" },
    { metric: "Fastest growing QR fraud variant", data: "Army/NRI scam via OLX (+340% 2024-25)", source: "I4C Cyber Crime Report 2025" },
];

const relatedScams = [
    { emoji: "↩️", title: "Wrong Transfer Refund Scam", desc: "Someone 'accidentally' sends money, asks for a refund to a different UPI ID, then reverses the original credit.", href: "/blog/wrong-transfer-refund-scam-india/" },
    { emoji: "📞", title: "OTP & PIN Fraud", desc: "Caller pretends to be bank or UPI support and asks for OTP or PIN to 'verify' or 'fix' your account.", href: "/scams/upi-fraud/otp-fraud/" },
    { emoji: "🖼️", title: "Fake Payment Screenshot", desc: "Scammer sends a fabricated PhonePe or Google Pay screenshot claiming payment was made, but no credit arrives.", href: "/scams/upi-fraud/fake-payment-screenshot/" },
    { emoji: "🚨", title: "Digital Arrest Scam", desc: "Fake police, CBI, or ED officer threatens arrest and demands UPI payment to 'clear your name'.", href: "/scams/upi-fraud/digital-arrest-scam/" },
    { emoji: "🔗", title: "Fake UPI Payment Link", desc: "WhatsApp, SMS, or Telegram links mimic UPI apps and steal PINs or bank credentials.", href: "/scams/upi-fraud/fake-upi-link/" },
    { emoji: "💼", title: "Investment & Job UPI Fraud", desc: "Fake jobs and investment schemes demand UPI deposits, pay small amounts first, then steal the big deposit.", href: "/scams/upi-fraud/investment-job-fraud/" },
];

const imageGuides = {
    qrFlow: {
        src: "/blog/upi-scam-india-2026/qr-code-scam-explainer.webp",
        width: 1400,
        height: 788,
        alt: "QR code UPI fraud visual showing a fake scan-to-receive QR code and money moving from victim to scammer",
        caption: "Visual explainer: the QR code is framed as 'receive money', but the app processes it as an outgoing payment.",
    },
    upiPin: {
        src: "/images/upi-id-vs-pin-explainer.png",
        width: 928,
        height: 1152,
        alt: "UPI ID is a public address while UPI PIN must never be shared or entered to receive money",
        caption: "UPI ID can be shared to receive money. UPI PIN is only for authorising money going out.",
    },
    recovery: {
        src: "/image/upi-scam-recovery-5-steps-emergency-guide-india.jpg",
        width: 1200,
        height: 509,
        alt: "UPI scam recovery timeline showing bank contact, 1930 helpline, cybercrime complaint, UPI ID block, and community warning",
        caption: "Keep evidence ready and report in the first 30 minutes. The account-freeze window closes fast.",
    },
    safety: {
        src: "/blog/upi-scam-india-2026/upi-safety-rules.webp",
        width: 900,
        height: 1599,
        alt: "UPI safety rules infographic including scan QR equals you pay and report scams at 1930 within 30 minutes",
        caption: "Safety poster: scan QR means you pay; share your own QR or UPI ID when you need to receive money.",
    },
};

const faqs = [
    {
        q: "How does QR code UPI fraud work in India?",
        a: "QR code UPI fraud india works by exploiting a common misunderstanding: that QR codes can be used to receive money. A scammer creates a standard UPI payment QR code with their UPI ID pre-filled as the recipient, then sends it to you with a false claim that scanning it will deposit money into your account. When you scan the code on your PhonePe, Google Pay, or Paytm app and enter your UPI PIN, you authorise a payment out of your account to the scammer. The transaction is instant and irreversible. The scam works because the act of 'scanning a QR and entering PIN' looks the same regardless of direction  the direction is always out.",
    },
    {
        q: "Can a QR code be used to receive money on UPI?",
        a: "No. A QR code on UPI is always a payment instruction  it directs your UPI app to send money to the QR code's creator. To receive money on UPI, you share your own UPI ID (like yourname@upi) or show your own QR code from your UPI app profile. The recipient never needs to scan anything or enter their UPI PIN to receive money. If anyone tells you to scan their QR code to receive money, it is a qr code scam india. No amount, no claimed refund, no stated prize changes this fact.",
    },
    {
        q: "I scanned a QR code and money was debited. What should I do immediately?",
        a: "If you have lost money to a qr code upi fraud india: (1) Call 1930 immediately  this is the National Cyber Crime Financial Helpline, available 24/7. The earlier you call, the higher the chance of an account freeze on the scammer's account. (2) Raise a dispute within your UPI app on the fraudulent transaction. (3) File a complaint on cybercrime.gov.in under Financial Cyber Fraud. (4) Contact your bank's fraud department with your cybercrime.gov.in reference number. (5) Report the scammer's number and UPI ID at rakshaai.co/report-a-scam/. Speed is critical: qr code scam recovery india probability drops sharply after 2 hours.",
    },
    {
        q: "How do I identify a fake QR code in India?",
        a: "How to identify fake qr code india: (1) Any QR code sent to you by a stranger claiming it will deposit money into your account is fake  there is no technology that makes this possible on UPI. (2) Before scanning any QR code, check what UPI app shows after the scan: the recipient's name and UPI ID will appear. If you don't recognise the recipient, do not enter your PIN. (3) Legitimate bank refunds are never sent as QR codes on WhatsApp. (4) Run the sender's number through RakshaAI's Phone Number Checker before responding to any QR code message. (5) Check the UPI ID from the scanned QR code on RakshaAI's UPI ID Checker at rakshaai.co/upi-id-checker/.",
    },
    {
        q: "What is the '1930 helpline' and how does it help with QR code fraud?",
        a: "The 1930 helpline is India's National Cyber Crime Financial Helpline, operated by the Ministry of Home Affairs I4C. When you call 1930 after a qr code upi fraud india incident, the helpline team logs your complaint and initiates a freeze request on the destination UPI account through NPCI and the beneficiary bank. If the scammer has not yet withdrawn the money, the freeze prevents further withdrawals and preserves the funds for investigation. The 1930 helpline operates 24/7 and is the single most time-critical step in qr code scam recovery india. Call within 30 minutes for the best results.",
    },
    {
        q: "Are banks responsible for QR code UPI fraud losses?",
        a: "Under RBI's Customer Protection Circular (RBI/2017-18/15), the liability framework for unauthorised UPI transactions depends on when you report: reporting within 3 working days means the bank must investigate and may offer zero or limited liability. However, this protection applies to transactions where the customer did not authorise the payment  in qr code upi fraud india cases, the customer technically authorised the payment by scanning the QR and entering their own UPI PIN. Banks typically argue this constitutes customer-side authorisation. Your strongest recovery path remains the 1930 helpline (for account freeze) and cybercrime.gov.in (for formal investigation), not bank liability.",
    },
    {
        q: "How does the QR code scam work on OLX and Facebook Marketplace in India?",
        a: "The OLX / Facebook Marketplace variant of qr code upi fraud india targets sellers. A fake 'buyer' contacts you about your listed item and claims they want to pay an advance. They send a QR code saying 'scan this to receive the advance payment.' The QR code is a payment request from the scammer  scanning it and entering your PIN sends them money instead of receiving any. This variant is particularly effective because the context (selling something) makes the victim expect to receive money, lowering their guard. Documented cases show average losses of ₹15,000–35,000 per incident. Never scan a QR code sent by a buyer  instead share your own UPI ID with them.",
    },
    {
        q: "Can I get my money back after a UPI QR code scam?",
        a: "Full recovery is difficult but possible if acted on quickly. The realistic recovery rates: reporting to 1930 within 30 minutes yields approximately 12–18% full recovery rate (account freeze before withdrawal). After 2 hours, the rate drops below 5% as scammers immediately withdraw funds to mule accounts. Partial recovery through cybercrime investigation is possible in 15–20% of cases, typically over 3–6 months. The strongest case for recovery is when: (1) the 1930 helpline was called within 30 minutes, (2) a cybercrime.gov.in complaint was filed same day, and (3) a police FIR was filed with all transaction evidence within 7 days.",
    },
    {
        q: "What is the 'army scam' variant of QR code fraud in India?",
        a: "The army scam variant of qr code upi fraud india involves a scammer posing as an Indian Army or defence services officer on social media (Facebook, Instagram, Shaadi.com). After establishing trust over days or weeks, they tell a story about needing a civilian to help them receive or store money, salary, or goods. They send a QR code claiming it is for sending money to the victim for this 'help.' When the victim scans and enters their PIN, money is taken. This variant disproportionately targets women on matrimonial and social media platforms. It is categorised as a hybrid qr code scam and romance scam. The MHA I4C issued a specific advisory about this variant in 2024.",
    },
    {
        q: "How do I report a QR code scam to NPCI or my UPI app?",
        a: "Reporting channels for qr code upi fraud india: (1) PhonePe: Help → Transaction dispute → Report fraud. (2) Google Pay: transaction → Report a problem. (3) Paytm: Transaction history → Need Help → Report fraud. (4) NPCI: pgrsecure.npci.org.in for UPI complaints. (5) cybercrime.gov.in: File under Financial Cyber Fraud with all transaction details. (6) 1930: National helpline for immediate financial fraud intervention. (7) rakshaai.co/report-a-scam/: Report the UPI ID and scammer's number to warn other Indians in search results. Always keep the original QR code image and all communication with the scammer as evidence.",
    },
];

// ─────────────────────────────────────────────────────────────────────────────
export default function QRCodeScamPage() {
    return (
        <DefaultLayout>
            {/* JSON-LD */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd([articleSchema, breadcrumbSchema, faqSchema]) }} />

            <main className="min-h-screen">

                {/* ── Hero ──────────────────────────────────────────────────── */}
                <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-red-50 dark:from-gray-950 dark:via-gray-900 dark:to-red-950 pt-20 pb-24 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Breadcrumb */}
                        <nav aria-label="breadcrumb" className="flex items-center justify-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 mb-6 flex-wrap">
                            <Link href="/" className="hover:text-orange-600 transition-colors">Home</Link>
                            <ChevronRight className="h-3 w-3" />
                            <Link href="/scams" className="hover:text-orange-600 transition-colors">Scam Categories</Link>
                            <ChevronRight className="h-3 w-3" />
                            <Link href="/scams/upi-fraud" className="hover:text-orange-600 transition-colors">UPI Fraud</Link>
                            <ChevronRight className="h-3 w-3" />
                            <span className="text-gray-700 dark:text-gray-300 font-medium">QR Code Scam</span>
                        </nav>

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/40 dark:to-red-900/40 text-orange-700 dark:text-orange-300 text-xs font-semibold mb-6 border border-orange-200 dark:border-orange-800 shadow-sm">
                            <ShieldAlert className="h-4 w-4 animate-pulse" />
                            #1 Most Reported UPI Scam Type in India 2025
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
                            QR Code UPI Fraud in India 2026{" "}
                            <span className="block mt-2 bg-gradient-to-r from-orange-600 via-red-600 to-rose-600 bg-clip-text text-transparent">
                                How the &ldquo;Scan to Receive&rdquo; Scam Steals Your Money
                            </span>
                        </h1>

                        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6 leading-relaxed">
                            QR code UPI fraud is a scam where a fraudster sends you a QR code claiming it will deposit money into your account &mdash; as a refund, prize payment, or cashback. The moment you scan that code and enter your UPI PIN, money <strong>leaves</strong> your account instead. This is called the &ldquo;scan to receive&rdquo; scam and it is one of the most common UPI fraud types in India in 2026, reported by lakhs of victims across PhonePe, Google Pay, Paytm, and BHIM.
                        </p>

                        {/* Critical fact callout */}
                        <div className="inline-block text-left bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 rounded-2xl px-6 py-4 mb-8 max-w-2xl mx-auto shadow-sm">
                            <p className="text-sm font-bold text-red-700 dark:text-red-300 mb-1">Critical fact every UPI user in India must know:</p>
                            <p className="text-sm text-red-600 dark:text-red-400">
                                Scanning a QR code and entering your PIN <strong>always sends money</strong>. There is no such thing as a &ldquo;receive money QR code&rdquo; on any UPI platform.
                            </p>
                        </div>

                        <figure className="mx-auto mb-8 overflow-hidden rounded-2xl border border-orange-200 dark:border-orange-900 bg-white dark:bg-gray-900 shadow-lg">
                            <Image
                                src={imageGuides.qrFlow.src}
                                width={imageGuides.qrFlow.width}
                                height={imageGuides.qrFlow.height}
                                alt={imageGuides.qrFlow.alt}
                                className="h-auto w-full object-cover"
                                priority
                            />
                            <figcaption className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400">
                                {imageGuides.qrFlow.caption}
                            </figcaption>
                        </figure>

                        {/* CTA */}
                        <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-white dark:bg-gray-900 border border-orange-200 dark:border-orange-800 rounded-2xl px-6 py-4 shadow-md mb-10">
                            <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">Received a Suspicious UPI QR Code? Verify Before You Scan.</span>
                            <Link
                                href="/upi-id-checker/"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-sm shadow hover:shadow-orange-300/50 hover:scale-105 transition-all duration-300"
                            >
                                <Shield className="h-4 w-4" />
                                Check UPI ID Free
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                        <p className="text-xs text-gray-400 dark:text-gray-500 mb-10">Free &middot; No login &middot; Checks UPI ID against 10M+ fraud reports &middot; Built for India</p>

                        {/* Stats strip */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
                            {stats.map(({ value, label, icon: Icon }) => (
                                <div key={label} className="flex flex-col items-center px-4 py-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
                                    <Icon className="h-4 w-4 text-orange-500 mb-1" />
                                    <span className="text-lg sm:text-xl font-extrabold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">{value}</span>
                                    <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-center leading-tight">{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

                    {/* ── The One Rule ──────────────────────────────────────── */}
                    <section aria-labelledby="one-rule-heading">
                        <h2 id="one-rule-heading" className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-6">
                            The One Rule That Eliminates QR Code UPI Fraud Completely
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                            Before diving into how qr code upi fraud works, the single most important fact to understand about UPI and QR codes in India:
                        </p>

                        <div className="bg-red-50 dark:bg-red-950/40 border-2 border-red-400 dark:border-red-700 rounded-2xl p-6 sm:p-8 mb-8">
                            <div className="flex items-start gap-3 mb-4">
                                <Ban className="h-6 w-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                                <p className="text-base font-bold text-red-700 dark:text-red-300">The Rule Every UPI User in India Must Know:</p>
                            </div>
                            <p className="text-xl sm:text-2xl font-extrabold text-red-800 dark:text-red-200 mb-4">
                                QR codes are for SENDING money. Never for receiving.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                When you scan a QR code on any UPI app  PhonePe, Google Pay, Paytm, BHIM, or any other  and enter your UPI PIN, you are <strong>AUTHORISING a PAYMENT OUT</strong> of your account.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                The UPI PIN is your payment authorisation. It is never required to receive money. If someone tells you to &ldquo;just scan this QR and enter your PIN to receive ₹5,000&rdquo;  they are stealing ₹5,000 from you.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="flex items-start gap-3 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-xl p-4">
                                    <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-sm font-bold text-green-700 dark:text-green-300 mb-1">To RECEIVE money on UPI:</p>
                                        <p className="text-sm text-green-700 dark:text-green-400">Share your UPI ID (like yourname@upi) or your own QR code. Nothing else required. <strong>No PIN entry. No QR scanning.</strong></p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-xl p-4">
                                    <XCircle className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-sm font-bold text-red-700 dark:text-red-300 mb-1">To SEND money on UPI:</p>
                                        <p className="text-sm text-red-700 dark:text-red-400">Scan recipient QR code + enter amount + enter your UPI PIN.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
                            <figure className="overflow-hidden rounded-2xl border border-orange-200 dark:border-orange-900 bg-white dark:bg-gray-900 shadow-sm">
                                <Image
                                    src={imageGuides.upiPin.src}
                                    width={imageGuides.upiPin.width}
                                    height={imageGuides.upiPin.height}
                                    alt={imageGuides.upiPin.alt}
                                    className="h-auto w-full object-cover"
                                />
                                <figcaption className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400">
                                    {imageGuides.upiPin.caption}
                                </figcaption>
                            </figure>
                            <div className="space-y-4">
                                {[
                                    { label: "Share to receive", text: "Your UPI ID or your own QR code is enough for someone to pay you." },
                                    { label: "PIN means debit", text: "Any screen asking for your UPI PIN is asking you to authorise money leaving your account." },
                                    { label: "Check before confirming", text: "Read the recipient name, UPI ID, and amount before touching the final pay button." },
                                ].map((item) => (
                                    <div key={item.label} className="flex items-start gap-3 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 shadow-sm">
                                        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="text-sm font-bold text-gray-900 dark:text-white">{item.label}</p>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ── How It Works ──────────────────────────────────────── */}
                    <section aria-labelledby="how-it-works-heading">
                        <h2 id="how-it-works-heading" className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
                            How QR Code UPI Fraud Works in India  The Exact Scam Playbook
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
                            Understanding how qr code scam india operates at each step allows you to identify it at the first contact and before any money is lost. The scam follows a consistent three-stage pattern regardless of which platform  WhatsApp, Facebook Marketplace, OLX, or phone call  is used to deliver it.
                        </p>

                        {/* Stage 1 */}
                        <div className="mb-10">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300 text-sm font-extrabold flex items-center justify-center">1</span>
                                Stage 1  The Setup: Creating a Reason to Send You Money
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                                The scammer creates a believable reason why they need to send you money and why a QR code is involved. Common setups used in qr code upi fraud india cases documented by cybercrime.gov.in in 2025:
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {scamSetups.map(({ emoji, title, desc }) => (
                                    <div key={title} className="flex items-start gap-3 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-4 shadow-sm">
                                        <span className="text-2xl flex-shrink-0">{emoji}</span>
                                        <div>
                                            <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">{title}</p>
                                            <p className="text-sm text-gray-500 dark:text-gray-400 italic">{desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Stage 2 */}
                        <div className="mb-10">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 text-sm font-extrabold flex items-center justify-center">2</span>
                                Stage 2  The QR Code: What It Actually Does
                            </h3>
                            <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 shadow-sm space-y-4">
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    The scammer sends a QR code  via WhatsApp, SMS, email, or a screen share. This QR code is a standard UPI payment request QR code with the scammer&apos;s UPI ID pre-filled as the recipient, and an amount pre-loaded (or left blank for the victim to fill).
                                </p>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    When you open your PhonePe, Google Pay, or Paytm app and scan this code, the app recognises it as a payment instruction. It asks you to confirm the amount and enter your UPI PIN. The moment you enter your PIN  the transaction is processed. Money moves instantly and irreversibly from your account to the scammer&apos;s UPI ID. The entire transfer takes under 30 seconds.
                                </p>
                                <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-4">
                                    <p className="text-sm text-amber-800 dark:text-amber-300 leading-relaxed">
                                        <strong>Why fake qr code india fraud is particularly effective:</strong> victims believe they are completing a &lsquo;receive money&rsquo; action. Scammers sometimes use UPI IDs that appear official, such as &lsquo;refund@hdfcbank&rsquo; or &lsquo;cashback@phonepe&rsquo;  fake UPI IDs designed to look like legitimate refund sources.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Stage 3 */}
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-300 text-sm font-extrabold flex items-center justify-center">3</span>
                                Stage 3  The Disappearance: No Refund, No Recovery
                            </h3>
                            <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 shadow-sm">
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    Once the PIN is entered and the transaction confirmed, the scammer disconnects immediately. The phone number is switched off. WhatsApp messages are deleted. The UPI transaction is irreversible  NPCI&apos;s UPI system does not have a &lsquo;recall&rsquo; mechanism for completed, authorised transfers. The only recovery route is reporting to the <strong>1930 helpline within 30 minutes</strong> in the hope that the receiving account can be frozen before the scammer withdraws the funds.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* ── Real Examples ─────────────────────────────────────── */}
                    <section aria-labelledby="real-examples-heading">
                        <h2 id="real-examples-heading" className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
                            Real QR Code Scam India Examples  How Victims Were Deceived
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                            These documented case patterns are from cybercrime.gov.in complaint data and NPCI fraud reports for 2024–2025. All names are generalised.
                        </p>
                        <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-orange-50 dark:bg-orange-950/30 border-b border-gray-200 dark:border-gray-700">
                                        <th className="text-left px-5 py-3 font-bold text-gray-800 dark:text-gray-200 w-1/3">Scam Scenario</th>
                                        <th className="text-left px-5 py-3 font-bold text-gray-800 dark:text-gray-200">How It Happened</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {realCases.map(({ scenario, detail }, i) => (
                                        <tr key={scenario} className={i % 2 === 0 ? "bg-white dark:bg-gray-950" : "bg-gray-50 dark:bg-gray-900"}>
                                            <td className="px-5 py-4 font-semibold text-red-700 dark:text-red-400 border-r border-gray-100 dark:border-gray-800">{scenario}</td>
                                            <td className="px-5 py-4 text-gray-600 dark:text-gray-400">{detail}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* ── Warning Signs ─────────────────────────────────────── */}
                    <section aria-labelledby="warning-signs-heading">
                        <h2 id="warning-signs-heading" className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-6">
                            7 QR Code Scam Warning Signs  How to Identify Fake QR Codes
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                            These warning signs cover every variant of qr code upi fraud india documented in 2025–2026 complaints. If any one of these applies, do not scan.
                        </p>

                        <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-2xl p-6 mb-4">
                            <div className="flex items-center gap-2 mb-5">
                                <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400" />
                                <p className="font-bold text-red-700 dark:text-red-300">Stop. These Are Confirmed QR Code Fraud Red Flags:</p>
                            </div>
                            <ol className="space-y-4">
                                {warningSigns.map((sign, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-200 dark:bg-red-800 text-red-800 dark:text-red-200 text-xs font-extrabold flex items-center justify-center mt-0.5">
                                            {i + 1}
                                        </span>
                                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{sign}</p>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </section>

                    {/* ── Why Never Enter PIN to Receive ────────────────────── */}
                    <section aria-labelledby="never-pin-heading">
                        <h2 id="never-pin-heading" className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-6">
                            Why You Should Never Enter Your UPI PIN to &lsquo;Receive&rsquo; Money
                        </h2>
                        <div className="space-y-6">
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                Every UPI transaction in India follows the same rule enforced by NPCI&apos;s UPI protocol: your UPI PIN is a payment authorisation credential. It functions identically to your debit card PIN at an ATM  entering it approves a debit from your account. There is no UPI function that uses your PIN to credit your account.
                            </p>

                            <div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">What Happens Technically When You Scan a QR and Enter PIN</h3>
                                <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 shadow-sm">
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                                        When a scammer generates a QR code using any UPI app, they are creating a &lsquo;pay QR&rsquo;  a payment instruction pre-filled with their UPI ID as the beneficiary. When you scan this with your PhonePe, Google Pay, or Paytm, your app reads the payment instruction and pre-fills:
                                    </p>
                                    <ul className="space-y-2 mb-3">
                                        <li className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                                            <XCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                                            The recipient&apos;s UPI ID (the scammer)
                                        </li>
                                        <li className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                                            <XCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                                            The amount (pre-loaded or blank)
                                        </li>
                                    </ul>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                                        When you enter your UPI PIN to &lsquo;confirm&rsquo;  you are signing an outgoing payment order. The UPI system processes this identically to any other payment you make. The transaction is authorised, timestamped, and irreversible within milliseconds.
                                    </p>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Does Any Legitimate Organisation Send Money via QR Code?</h3>
                                <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-2xl p-5">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                                        <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                            <p><strong>No.</strong> Legitimate refunds in India are processed through the original payment method (bank reversal, UPI reversal initiated by the merchant side).</p>
                                            <p>Legitimate salaries, prizes, and cashbacks are credited directly to your account  you receive an SMS notification, not a QR code to scan.</p>
                                            <p>Legitimate customer service at PhonePe, Google Pay, Paytm, or any Indian bank will <strong>never</strong> ask you to scan a QR code as part of resolving a complaint or processing a refund.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mid-page CTA */}
                        <div className="mt-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-6 text-white text-center shadow-lg">
                            <p className="font-bold text-lg mb-2">Got a Suspicious QR Code? Check the UPI ID Behind It First</p>
                            <Link
                                href="/upi-id-checker/"
                                className="inline-flex items-center gap-2 mt-2 px-6 py-3 bg-white text-orange-600 font-bold rounded-xl hover:scale-105 transition-all shadow"
                            >
                                <Shield className="h-4 w-4" />
                                Check UPI ID Free  rakshaai.co/upi-id-checker/
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </section>

                    {/* ── Platform Guide ────────────────────────────────────── */}
                    <section aria-labelledby="platform-guide-heading">
                        <h2 id="platform-guide-heading" className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
                            Where QR Code UPI Fraud Happens in India  Platform-by-Platform Guide
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                            Fake qr code india fraud is delivered across multiple platforms. Each has a different scam entry script and a different victim profile. Knowing which platform the fraud arrives on helps identify it faster.
                        </p>
                        <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-orange-50 dark:bg-orange-950/30 border-b border-gray-200 dark:border-gray-700">
                                        <th className="text-left px-4 py-3 font-bold text-gray-800 dark:text-gray-200">Platform</th>
                                        <th className="text-left px-4 py-3 font-bold text-gray-800 dark:text-gray-200">How QR Fraud Arrives</th>
                                        <th className="text-left px-4 py-3 font-bold text-gray-800 dark:text-gray-200">Victim Profile</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {platformData.map(({ platform, delivery, profile }, i) => (
                                        <tr key={platform} className={i % 2 === 0 ? "bg-white dark:bg-gray-950" : "bg-gray-50 dark:bg-gray-900"}>
                                            <td className="px-4 py-3 font-semibold text-gray-800 dark:text-gray-200 border-r border-gray-100 dark:border-gray-800">{platform}</td>
                                            <td className="px-4 py-3 text-gray-600 dark:text-gray-400 border-r border-gray-100 dark:border-gray-800">{delivery}</td>
                                            <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{profile}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* ── 5 Protection Rules ────────────────────────────────── */}
                    <section aria-labelledby="protection-rules-heading">
                        <h2 id="protection-rules-heading" className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
                            5 Rules to Protect Yourself from QR Code UPI Fraud
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                            These five rules permanently eliminate the risk of falling victim to qr code payment fraud india. Each addresses a specific psychological or technical mechanism the scammers exploit.
                        </p>
                        <div className="grid lg:grid-cols-[1fr_340px] gap-8 items-start mb-8">
                            <div className="rounded-2xl border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/30 p-6">
                                <div className="flex items-start gap-3">
                                    <Shield className="h-6 w-6 text-green-700 dark:text-green-300 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="text-base font-bold text-green-900 dark:text-green-200 mb-2">Save This Mental Shortcut</h3>
                                        <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed">
                                            Share your UPI ID or your own QR code when money should come in. Scan someone else&apos;s QR only when you intentionally want to pay them.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <figure className="overflow-hidden rounded-2xl border border-orange-200 dark:border-orange-900 bg-white dark:bg-gray-900 shadow-sm">
                                <Image
                                    src={imageGuides.safety.src}
                                    width={imageGuides.safety.width}
                                    height={imageGuides.safety.height}
                                    alt={imageGuides.safety.alt}
                                    className="h-auto w-full object-cover"
                                />
                                <figcaption className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400">
                                    {imageGuides.safety.caption}
                                </figcaption>
                            </figure>
                        </div>
                        <div className="space-y-6">
                            {protectionRules.map(({ rule, title, desc }) => (
                                <div key={rule} className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 shadow-sm">
                                    <div className="flex items-start gap-4">
                                        <span className="flex-shrink-0 px-3 py-1 rounded-full bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/40 dark:to-red-900/40 text-orange-700 dark:text-orange-300 text-xs font-extrabold border border-orange-200 dark:border-orange-800">
                                            {rule}
                                        </span>
                                        <div>
                                            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
                                            {rule === "Rule 3" && (
                                                <Link href="/website-safety-checker/" className="inline-flex items-center gap-1 text-xs text-orange-600 dark:text-orange-400 font-semibold mt-2 hover:underline">
                                                    Website Safety Checker <ExternalLink className="h-3 w-3" />
                                                </Link>
                                            )}
                                            {rule === "Rule 4" && (
                                                <Link href="/phone-number-checker/" className="inline-flex items-center gap-1 text-xs text-orange-600 dark:text-orange-400 font-semibold mt-2 hover:underline">
                                                    Phone Number Checker <ExternalLink className="h-3 w-3" />
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── Recovery Guide ────────────────────────────────────── */}
                    <section aria-labelledby="recovery-heading">
                        <h2 id="recovery-heading" className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
                            What to Do If You Fell for a QR Code UPI Scam  Step-by-Step Recovery Guide
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                            If you have already scanned a fake QR code, entered your UPI PIN, and seen money debited from your account: act in the next 30 minutes. Speed is the single most important factor in qr code scam recovery india.
                        </p>

                        <figure className="mb-8 overflow-hidden rounded-2xl border border-red-200 dark:border-red-900 bg-white dark:bg-gray-900 shadow-sm">
                            <Image
                                src={imageGuides.recovery.src}
                                width={imageGuides.recovery.width}
                                height={imageGuides.recovery.height}
                                alt={imageGuides.recovery.alt}
                                className="h-auto w-full object-cover"
                            />
                            <figcaption className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400">
                                {imageGuides.recovery.caption}
                            </figcaption>
                        </figure>

                        <div className="space-y-5">
                            {recoverySteps.map(({ step, urgent, title, desc }) => (
                                <div key={step} className={`rounded-2xl p-6 border shadow-sm ${urgent ? "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800" : "bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800"}`}>
                                    <div className="flex items-start gap-4">
                                        <span className={`flex-shrink-0 w-10 h-10 rounded-full text-sm font-extrabold flex items-center justify-center ${urgent ? "bg-red-600 text-white" : "bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300"}`}>
                                            {step.replace("Step ", "")}
                                        </span>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2">
                                                <h3 className={`text-base font-bold ${urgent ? "text-red-800 dark:text-red-200" : "text-gray-900 dark:text-white"}`}>{title}</h3>
                                                {urgent && (
                                                    <span className="px-2 py-0.5 bg-red-600 text-white text-xs font-bold rounded-full">URGENT</span>
                                                )}
                                            </div>
                                            <p className={`text-sm leading-relaxed ${urgent ? "text-red-700 dark:text-red-300" : "text-gray-600 dark:text-gray-400"}`}>{desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Timeline */}
                        <div className="mt-8 bg-gray-900 dark:bg-gray-950 rounded-2xl p-6 text-white font-mono text-sm space-y-2 border border-gray-700">
                            <p className="text-orange-400 font-bold mb-3">⏱️ QR Code Scam Recovery Timeline  Every Minute Matters:</p>
                            <p><span className="text-green-400">Within 30 minutes</span> → Call 1930. Account freeze on scammer&apos;s UPI account  best chance.</p>
                            <p><span className="text-yellow-400">Within 1 hour</span> &nbsp;&nbsp;&nbsp;&nbsp;→ In-app dispute. cybercrime.gov.in complaint.</p>
                            <p><span className="text-orange-400">Within 24 hours</span> &nbsp;&nbsp;&nbsp;→ Bank fraud department. RBI complaint if needed.</p>
                            <p><span className="text-red-400">Within 7 days</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ FIR at cybercrime police station.</p>
                        </div>

                        {/* Report CTA */}
                        <div className="mt-8 bg-gradient-to-r from-red-600 to-rose-600 rounded-2xl p-6 text-white text-center shadow-lg">
                            <p className="font-bold text-lg mb-1">Report This QR Code Scam and Protect Other Indians</p>
                            <p className="text-sm text-red-100 mb-4">Your report appears in search results for the scammer&apos;s UPI ID within 4–6 hours.</p>
                            <ReportScamButton className="inline-flex items-center gap-2 px-6 py-3 bg-white text-red-600 font-bold rounded-xl hover:scale-105 transition-all shadow">
                                Report This Scam →
                            </ReportScamButton>
                        </div>
                    </section>

                    {/* ── Statistics ────────────────────────────────────────── */}
                    <section aria-labelledby="stats-heading">
                        <h2 id="stats-heading" className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
                            QR Code UPI Fraud Statistics India 2026
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">
                            These figures are from NPCI&apos;s UPI Fraud Report 2025, cybercrime.gov.in complaint data, the Ministry of Home Affairs I4C operational report, and RBI&apos;s Payment Systems Fraud data published January 2026.
                        </p>
                        <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm mb-6">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-orange-50 dark:bg-orange-950/30 border-b border-gray-200 dark:border-gray-700">
                                        <th className="text-left px-5 py-3 font-bold text-gray-800 dark:text-gray-200">Metric</th>
                                        <th className="text-left px-5 py-3 font-bold text-gray-800 dark:text-gray-200">Data</th>
                                        <th className="text-left px-5 py-3 font-bold text-gray-800 dark:text-gray-200">Source</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {fraudStats.map(({ metric, data, source }, i) => (
                                        <tr key={metric} className={i % 2 === 0 ? "bg-white dark:bg-gray-950" : "bg-gray-50 dark:bg-gray-900"}>
                                            <td className="px-5 py-3 font-medium text-gray-800 dark:text-gray-200 border-r border-gray-100 dark:border-gray-800">{metric}</td>
                                            <td className="px-5 py-3 text-orange-700 dark:text-orange-400 font-semibold border-r border-gray-100 dark:border-gray-800">{data}</td>
                                            <td className="px-5 py-3 text-gray-500 dark:text-gray-500 text-xs">{source}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-2xl p-5 text-sm text-amber-800 dark:text-amber-300 leading-relaxed">
                            NPCI&apos;s 2025 UPI fraud data shows that qr code upi fraud india has become the single largest reported UPI fraud category, overtaking OTP fraud for the first time in 2025. The MHA&apos;s I4C has issued three formal advisories specifically about the &lsquo;scan to receive&rsquo; scam variant in 2024–2025, highlighting that awareness  not technology  remains the most effective defence.
                        </div>
                    </section>

                    {/* ── Related Scams ─────────────────────────────────────── */}
                    <section aria-labelledby="related-scams-heading">
                        <h2 id="related-scams-heading" className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
                            Other UPI Scam Types to Know About
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                            QR code UPI fraud is one of several UPI fraud types active in India in 2026. Understanding the full UPI fraud landscape ensures you are protected against all variants.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4 mb-6">
                            {relatedScams.map(({ emoji, title, desc, href }) => (
                                <Link key={title} href={href} className="group flex items-start gap-3 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-orange-200 dark:hover:border-orange-700 transition-all">
                                    <span className="text-2xl flex-shrink-0">{emoji}</span>
                                    <div>
                                        <p className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">{title}</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{desc}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            For the complete guide to all UPI fraud types in India:{" "}
                            <Link href="/scams/upi-fraud" className="text-orange-600 dark:text-orange-400 hover:underline font-semibold">
                                rakshaai.co/scams/upi-fraud/
                            </Link>
                        </p>

                        {/* Free tools */}
                        <div className="mt-8">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Free Tools to Protect Your UPI Account</h3>
                            <div className="grid sm:grid-cols-3 gap-4">
                                {[
                                    { emoji: "🔍", title: "UPI ID Checker", desc: "Verify any UPI ID before making a payment or approving a collect request.", href: "/upi-id-checker/" },
                                    { emoji: "📱", title: "Phone Number Checker", desc: "Check if the number that sent you a QR code has been reported as fraud.", href: "/phone-number-checker/" },
                                    { emoji: "🌐", title: "Website Safety Checker", desc: "Verify any website or link claiming to send you a refund or prize.", href: "/website-safety-checker/" },
                                ].map(({ emoji, title, desc, href }) => (
                                    <Link key={title} href={href} className="group flex flex-col items-center text-center bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 border border-orange-200 dark:border-orange-800 rounded-2xl p-5 hover:shadow-md transition-all">
                                        <span className="text-3xl mb-2">{emoji}</span>
                                        <p className="font-bold text-gray-900 dark:text-white mb-1 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors text-sm">{title}</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{desc}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ── Scam Alerts ───────────────────────────────────────── */}
                    <section aria-labelledby="alerts-heading">
                        <h2 id="alerts-heading" className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-6">
                            Recent QR Code UPI Fraud Alerts India  Updated March 2026
                        </h2>
                        <div className="space-y-3 mb-6">
                            {[
                                { tag: "I4C Advisory", text: "New 'Bank Refund QR' Wave Active on WhatsApp  Scammers Using Spoofed SBI Sender ID", date: "March 2026" },
                                { tag: "OLX Alert", text: "OLX QR Scam Surge: 340 New Cases Reported in February 2026  Fake Buyers Targeting Furniture and Electronics Sellers", date: "Feb 2026" },
                                { tag: "Google Pay", text: "Fake 'Google Pay Support' WhatsApp Accounts Sending QR Codes to Reverse 'Failed' Transactions", date: "Feb 2026" },
                                { tag: "MHA Advisory", text: "Army Romance QR Scam: MHA Advisory on Facebook 'Defence Officer' QR Code Fraud Targeting Women on Matrimonial Apps", date: "Feb 2026" },
                            ].map(({ tag, text, date }) => (
                                <div key={text} className="flex items-start gap-3 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-4 shadow-sm">
                                    <BellRing className="h-4 w-4 text-orange-500 flex-shrink-0 mt-0.5" />
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                                            <span className="px-2 py-0.5 bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300 text-xs font-bold rounded-full">{tag}</span>
                                            <span className="text-xs text-gray-400 dark:text-gray-500">{date}</span>
                                        </div>
                                        <p className="text-sm text-gray-700 dark:text-gray-300">{text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Link href="/scam-alerts/" className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 dark:text-orange-400 hover:underline">
                            View All UPI Fraud Alerts  rakshaai.co/scam-alerts/
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </section>

                    {/* ── FAQ ───────────────────────────────────────────────── */}
                    <section aria-labelledby="faq-heading">
                        <h2 id="faq-heading" className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-8">
                            Frequently Asked Questions About QR Code UPI Fraud India
                        </h2>
                        <div className="space-y-5">
                            {faqs.map(({ q, a }) => (
                                <div key={q} className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 shadow-sm">
                                    <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3 flex items-start gap-2">
                                        <MessageSquare className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                                        {q}
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed pl-7">{a}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── Final CTA ─────────────────────────────────────────── */}
                    <section className="text-center py-8">
                        <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-3xl p-8 sm:p-12 text-white shadow-xl">
                            <Shield className="h-10 w-10 mx-auto mb-4 opacity-90" />
                            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">Stay Protected from QR Code UPI Fraud</h2>
                            <p className="text-orange-100 mb-6 max-w-xl mx-auto text-sm leading-relaxed">
                                Verify any suspicious UPI ID before scanning. Check any number that sent you a QR code. Report scammers to protect other Indians.
                            </p>
                            <div className="flex flex-wrap justify-center gap-3">
                                <Link
                                    href="/upi-id-checker/"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-orange-600 font-bold rounded-xl hover:scale-105 transition-all shadow"
                                >
                                    <Shield className="h-4 w-4" />
                                    Check UPI ID Free
                                </Link>
                                <Link
                                    href="/phone-number-checker/"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600/30 border border-white/30 text-white font-bold rounded-xl hover:bg-orange-600/50 transition-all"
                                >
                                    <Phone className="h-4 w-4" />
                                    Check Phone Number
                                </Link>
                            </div>
                        </div>
                    </section>

                </div>
            </main>
        </DefaultLayout>
    );
}
