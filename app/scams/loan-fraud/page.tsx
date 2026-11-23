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
    IndianRupee,
    ShieldAlert,
    ArrowRight,
    Info,
    BadgeCheck,
    MessageSquareWarning,
    ChevronDown,
    Smartphone,
    FileText,
    Lock,
    Unlock,
    UserX,
    CreditCard,
    Phone,
    MessageCircle,
    Camera,
    Contact,
    Ban,
    Clock,
    Search,
    Star,
    Globe,
    Zap,
    TriangleAlert,
} from "lucide-react";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
    title: "Loan Fraud India 2026: Fake Apps, Types & Prevention",
    description:
        "Types of loan fraud in India 2026: advance fee scams, illegal loan recovery and housing loan fraud. Check any lender free and report instantly.",
    alternates: {
        canonical: "https://rakshaai.co/scams/loan-fraud",
    },
    robots: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
    openGraph: {
        title: "Loan Fraud in India 2026: All Types, Fake Loan Apps & How to Report | RakshaAI",
        description:
            "Types of loan fraud in India 2026: advance fee scams, illegal loan recovery and housing loan fraud. Check any lender free and report instantly.",
        url: "https://rakshaai.co/scams/loan-fraud",
        type: "website",
    siteName: 'RakshaAI',
        images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'RakshaAI' }],
  },
    twitter: {
        card: "summary_large_image",
        title: "Loan Fraud in India 2026: All Types, Fake Loan Apps & How to Report | RakshaAI",
        description:
            "Types of loan fraud in India 2026: advance fee scams, illegal loan recovery and housing loan fraud. Check any lender free and report instantly.",
        images: ['/opengraph-image'],
  },
    other: { "geo.region": "IN", language: "en-IN" },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────
const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Loan Fraud in India 2026: 7 Types, Fake Loan Apps & How to Report",
    url: "https://rakshaai.co/scams/loan-fraud",
    description:
        "Types of loan fraud in India 2026  fake loan apps, advance fee scams, illegal loan recovery harassment, housing loan fraud, and how to report each type. 2.4 lakh NCRB complaints tracked.",
    datePublished: "2024-01-15",
    dateModified: "2026-06-11",
    author: { "@type": "Organization", name: "RakshaAI" },
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
            name: "What are the most common types of loan fraud in India in 2026?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The seven most common are: (1) Fake loan apps india  38% of complaints, illegal apps that access your contacts before threatening harassment. (2) Advance fee scam  24%, collecting processing fees before a loan that never arrives. (3) Loan recovery harassment india  18%, threatening calls from illegal recovery agents. (4) Housing loan fraud india  8%, fake DSAs collecting fees for home loans. (5) Education loan scams  5%, targeting students and families. (6) Fake debt collector scam  4%, claiming you owe money you don't. (7) Loan spam calls  3%. NCRB 2025 recorded 2.4 lakh complaints with total losses of ₹9,200 crore.",
            },
        },
        {
            "@type": "Question",
            name: "How to check if a loan company is legitimate in India?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Three steps to verify any lender: (1) Search the company name on RBI's NBFC registry at rbi.org.in/Scripts/BS_NBFCList.aspx  if they are not listed and are not a scheduled bank, they cannot legally lend. (2) Check their website on RakshaAI's Website Safety Checker  fraudulent lenders typically have domains registered within the last 6 months. (3) Search their CIN (Company Identification Number) on MCA21 at mca.gov.in  if the company is not registered, no fee or document submission is safe.",
            },
        },
        {
            "@type": "Question",
            name: "What should I do if a loan app is harassing me with threatening calls?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Loan recovery harassment from illegal apps is a criminal offence. Immediately: (1) Stop all payments  paying does not stop illegal harassment. (2) Document everything: screenshot all messages, record calls if possible. (3) File on cybercrime.gov.in  select 'Cyber Crime Against Women/Children' if intimate content was threatened. (4) Call 1930 if any money was transferred under coercion. (5) File an FIR at your nearest cybercrime police station. Under IT Act 2000 Sections 66C and 66D, illegal recovery agents face criminal prosecution.",
            },
        },
        {
            "@type": "Question",
            name: "How do I identify a fake loan app in India?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Signs of a fake loan app: (1) It requests access to your contacts, photos, or microphone  legitimate lending apps do not require these permissions. (2) The parent company is not listed on the RBI NBFC registry. (3) It promises disbursement in under 10 minutes with no physical documentation. (4) App reviews show a sudden burst of 5-star ratings with generic text. (5) The app is downloaded from a link sent via WhatsApp or SMS rather than directly from the Play Store. (6) Interest rates are not disclosed upfront or are presented as 'service charges.'",
            },
        },
        {
            "@type": "Question",
            name: "What is an advance fee scam and how does it work?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "An advance fee scam involves a fraudster posing as a bank, NBFC, or government lending scheme offering a pre-approved loan. Before disbursement, they request an upfront payment described as a 'processing fee,' 'GST deposit,' 'insurance premium,' or 'loan activation charge.' Once you transfer this amount, the scammer disappears and the loan never arrives. The advance fee fraud model works because the requested amount seems small relative to the promised loan. Legitimate Indian lenders never collect fees before disbursement  this is explicitly prohibited by RBI guidelines.",
            },
        },
        {
            "@type": "Question",
            name: "How do I verify if a debt collector calling me is legitimate?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "To verify a debt collector: (1) Ask for their full name, employer company name, and the original lender's name. (2) Demand written verification of the debt  a legitimate collector must provide this. (3) Search the caller's number on RakshaAI's Phone Number Checker to see if it has been reported. (4) Contact your original lender directly  call the number on their official website. Fake debt collector operations typically cannot provide original lender confirmation because the debt does not exist.",
            },
        },
        {
            "@type": "Question",
            name: "Can I get my money back after paying a loan scammer?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Recovery is possible if you act quickly. Call 1930 within 30 minutes of the transfer for the best chance  the helpline can initiate an account freeze request before money is moved. Within 24 hours: file on cybercrime.gov.in, raise a UPI dispute with your bank, and report the company on RBI's Sachet portal. After 48 hours, recovery drops below 15% as money has moved through multiple accounts. Document everything from day one  conversation records, payment receipts, and the company's claimed details are all required for recovery proceedings.",
            },
        },
        {
            "@type": "Question",
            name: "What are education loan scams in India and who do they target?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Education loan scams in India primarily target Class 12 pass-outs, undergraduate students, and families preparing to finance higher education. Scammers pose as representatives of government scholarship programmes, banks offering student loan schemes, or private NBFC education loan providers. They collect advance fees described as 'application processing charges,' 'security deposits,' or 'scholarship registration fees.' Warning signs: unsolicited calls about government education loans, requests for advance payment, and pressure to act before a deadline.",
            },
        },
        {
            "@type": "Question",
            name: "What is predatory lending and which loan apps in India practice it?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Predatory lending refers to lending practices that exploit borrowers through hidden fees, usurious interest rates, unclear terms, and coercive collection tactics. Typical patterns in India: loan apps that present an ₹10,000 loan but disburse only ₹7,200 after deducting undisclosed charges; apps that charge effective annual interest rates above 100% while advertising low 'daily rates'; lenders who access your contact list immediately on app installation and begin threatening messages within days of any payment delay. Any lender not registered with RBI is operating outside the regulatory framework entirely.",
            },
        },
        {
            "@type": "Question",
            name: "How do I report a fake loan company to the RBI and cybercrime authorities?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "For reporting fake loan companies and fraudulent lenders: (1) Call 1930 if money was transferred. (2) File on cybercrime.gov.in under 'Financial Cyber Fraud.' (3) Report to RBI's Sachet portal at sachet.rbi.org.in  specifically designed for unauthorised lending complaints. (4) File a complaint with the RBI NBFC Ombudsman for registered but misbehaving NBFCs. (5) Report the app on Google Play Store under 'Financial fraud.' (6) File a physical FIR at your nearest cybercrime police station with all documentation.",
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
        { "@type": "ListItem", position: 3, name: "Loan Fraud", item: "https://rakshaai.co/scams/loan-fraud/" },
    ],
};

const itemListData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Types of Loan Fraud in India 2026",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Fake Loan Apps India", url: "https://rakshaai.co/scams/loan-fraud/fake-loan-apps/" },
        { "@type": "ListItem", position: 2, name: "Advance Fee Scam", url: "https://rakshaai.co/scams/loan-fraud/advance-fee-scam/" },
        { "@type": "ListItem", position: 3, name: "Loan Recovery Harassment India", url: "https://rakshaai.co/scams/loan-fraud/loan-recovery-harassment/" },
        { "@type": "ListItem", position: 4, name: "Housing Loan Fraud India", url: "https://rakshaai.co/scams/loan-fraud/home-loan-fraud/" },
        { "@type": "ListItem", position: 5, name: "Education Loan Scams", url: "https://rakshaai.co/scams/loan-fraud/education-loan-scam/" },
        { "@type": "ListItem", position: 6, name: "Fake Debt Collector Scam", url: "https://rakshaai.co/scams/loan-fraud/fake-debt-collectors/" },
        { "@type": "ListItem", position: 7, name: "Loan Spam Calls", url: "https://rakshaai.co/scams/phone-scams/" },
    ],
};

const lenderVerificationSteps = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": "https://rakshaai.co/scams/loan-fraud#verification-steps",
    name: "How to Check If a Loan Company Is Legitimate in India",
    description: "3-step verification to confirm if a lender is RBI-registered before submitting documents or paying any fee.",
    numberOfItems: 3,
    itemListElement: [
        {
            "@type": "ListItem",
            position: 1,
            name: "Check the RBI NBFC Registry",
            description: "Search the company name on RBI's official NBFC registry at rbi.org.in. Any lending company not listed here is operating illegally.",
        },
        {
            "@type": "ListItem",
            position: 2,
            name: "Run the Website Through RakshaAI",
            description: "Check the lender's website at rakshaai.co/website-safety-checker  this verifies domain age, registration details, and RBI blacklist status.",
        },
        {
            "@type": "ListItem",
            position: 3,
            name: "Verify the CIN on MCA21",
            description: "Search the company's CIN (Company Identification Number) on MCA21 at mca.gov.in. If the company is not registered, no fee or document submission is safe.",
        },
    ],
};

// ── Scam types ────────────────────────────────────────────────────────────────
const scamTypes = [
    {
        emoji: "📱",
        title: "Fake Loan Apps India  Illegal Instant Loan Apps",
        desc: "RBI-unlicensed apps offer instant loans with no documentation through the Play Store or direct APK downloads. After collecting Aadhaar, PAN, and contact list access, they disburse a partial amount then demand hidden fees, threatening to share manipulated photos with the victim's contacts.",
        risk: "Extreme",
        riskColor: "bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300",
        href: "/scams/loan-fraud/fake-loan-apps/",
    },
    {
        emoji: "💰",
        title: "Advance Fee Scam  Processing Fee Before Loan",
        desc: "Scammer poses as a legitimate NBFC or bank offering a pre-approved loan. Before disbursement, they demand an upfront 'processing fee', 'insurance premium', or 'GST deposit'. Once paid, the loan never arrives and the scammer disappears. Average loss: ₹24,000.",
        risk: "Very High",
        riskColor: "bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300",
        href: "/scams/loan-fraud/advance-fee-scam/",
    },
    {
        emoji: "📞",
        title: "Loan Recovery Harassment India  Illegal Agents",
        desc: "Illegal loan apps use threatening calls, abusive messages, and contact-list shaming to recover money from borrowers  or from people who never borrowed at all. Agents impersonate police or lawyers. These recovery tactics are criminal offences under the IT Act 2000.",
        risk: "Very High",
        riskColor: "bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300",
        href: "/scams/loan-fraud/loan-recovery-harassment/",
    },
    {
        emoji: "🏠",
        title: "Housing Loan Fraud India  Fake Builder Loans",
        desc: "Fraudsters pose as DSAs (direct selling agents) for legitimate banks, collect processing fees and document charges for home loans that are never processed. Fake NBFC impersonation is common in this category, particularly targeting first-time home buyers in Tier-2 and Tier-3 cities.",
        risk: "High",
        riskColor: "bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300",
        href: "/scams/loan-fraud/home-loan-fraud/",
    },
    {
        emoji: "🎓",
        title: "Education Loan Scams  Fake Scholarship and Loan Offers",
        desc: "Scammers contact students offering instant education loans or government scholarship disbursements. They collect advance fees, Aadhaar details, and banking credentials under the pretence of processing loan applications. Targets recently appeared students and families of Class 12 pass-outs.",
        risk: "High",
        riskColor: "bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300",
        href: "/scams/loan-fraud/education-loan-scam/",
    },
    {
        emoji: "🧑‍⚖️",
        title: "Fake Debt Collector Scam  Phantom Debt Recovery",
        desc: "Scammer calls posing as a recovery agent for a bank or NBFC, claiming the victim has an outstanding loan they have no knowledge of. They demand immediate payment to 'prevent legal action' or 'clear the record'. Debt collector scams prey on fear of financial consequences.",
        risk: "High",
        riskColor: "bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300",
        href: "/scams/loan-fraud/fake-debt-collectors/",
    },
    {
        emoji: "📣",
        title: "Loan Spam Calls  Pre-Approved Loan Telemarketing Fraud",
        desc: "Victims receive calls claiming their 'pre-approved' loan is ready for collection. The call collects banking details, OTPs, or advance fees. This is the phone-based entry point for multiple loan fraud types. See the full guide on spam loan calls at the Phone Scams Hub.",
        risk: "Medium",
        riskColor: "bg-yellow-100 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-300",
        href: "/scams/phone-scams/",
    },
];

// ── How the scam unfolds ──────────────────────────────────────────────────────
const scamSteps = [
    {
        step: "01",
        color: "from-sky-400 to-blue-500",
        bg: "bg-sky-50 dark:bg-sky-950/30",
        border: "border-sky-200 dark:border-sky-900",
        title: "The Offer Arrives",
        desc: "A Google Ad, Play Store listing, WhatsApp message, or SMS: '₹1 lakh loan  instant approval, no CIBIL, no documents, no collateral. Just download the app.' The offer targets people in financial distress who urgently need funds.",
        urgent: false,
    },
    {
        step: "02",
        color: "from-blue-500 to-indigo-600",
        bg: "bg-blue-50 dark:bg-blue-950/30",
        border: "border-blue-200 dark:border-blue-900",
        title: "App Installed  Permissions Granted",
        desc: "The app requests access to contacts, gallery, SMS, location, and call logs 'for loan processing'. Most users accept without reading. Once granted, the contact list and photos are immediately uploaded to the scammer's servers  creating leverage.",
        urgent: false,
    },
    {
        step: "03",
        color: "from-indigo-500 to-violet-600",
        bg: "bg-indigo-50 dark:bg-indigo-950/30",
        border: "border-indigo-200 dark:border-indigo-900",
        title: "Loan 'Approved'  Fee Required",
        desc: "The loan is approved in principle within minutes. But before the amount is transferred, a fee is required: 'Processing fee: ₹2,500', 'Insurance premium: ₹1,800', 'GST advance: ₹1,200'. The fee is always under 5% of the loan amount to seem reasonable.",
        urgent: false,
    },
    {
        step: "04",
        color: "from-orange-500 to-amber-500",
        bg: "bg-orange-50 dark:bg-orange-950/30",
        border: "border-orange-200 dark:border-orange-900",
        title: "Fee Paid  New Obstacle Appears",
        desc: "After the first fee is paid, the loan is 'almost ready'. A new requirement appears: 'Stamp duty deposit', 'Security deposit (refundable)', 'RBI compliance fee'. Each payment unlocks a new blockage. The loan never arrives.",
        urgent: true,
    },
    {
        step: "05",
        color: "from-red-500 to-rose-600",
        bg: "bg-red-50 dark:bg-red-950/30",
        border: "border-red-200 dark:border-red-900",
        title: "Harassment Begins",
        desc: "If the victim stops paying fees or had already taken a small loan and misses a repayment  even by one day  the app operator contacts people in the harvested contact list. Morphed photos, 'defaulter' notices, and threatening calls go to family, friends, and employers.",
        urgent: true,
    },
    {
        step: "06",
        color: "from-gray-500 to-slate-600",
        bg: "bg-gray-50 dark:bg-gray-900/50",
        border: "border-gray-200 dark:border-gray-800",
        title: "Communication Cut Off",
        desc: "Once the victim either stops paying or is financially exhausted, the app number goes unreachable. The UPI IDs used to collect fees were temporary. The company registration number, if any, is fake or belongs to a dissolved entity. The app may still operate under a new name.",
        urgent: false,
    },
];

// ── Red flags ─────────────────────────────────────────────────────────────────
const redFlags = [
    "Any request for an upfront fee BEFORE the loan is disbursed  no legitimate lender, NBFC, or bank asks for processing fees, insurance, GST, or any other payment before releasing funds",
    "The lender is not listed on the RBI NBFC registry at rbi.org.in or is not a scheduled commercial bank  check before submitting any documents or payments",
    "The loan app requests access to your contact list, photos, or microphone  legitimate financial apps do not require these permissions to process a loan application",
    "You receive a call claiming you have a 'pre-approved' loan you never applied for  pre-approval calls from unknown numbers are the standard entry point for advance fee fraud",
    "Recovery agents contact you with threats, abusive language, or say they will share content with your contacts  illegal loan recovery tactics are a criminal offence under IT Act 2000",
    "Debt collectors claim you owe money on a loan you have no record of  always demand written proof of debt before making any payment to any debt collector",
    "The interest rate quoted is dramatically below market  10% flat rate, 0% personal loan, or 'government-backed' rates  these are bait for advance fee and fake loan traps",
    "You are asked to transfer money via UPI to a personal account or an account not matching the lender's official company name  all legitimate lenders collect payments to named company accounts only",
];

// ── Report steps ──────────────────────────────────────────────────────────────
const reportSteps = [
    {
        step: "01",
        title: "Call 1930 if Money Was Transferred",
        desc: "The 1930 helpline can initiate an account freeze request within minutes. Call immediately if you transferred any money  processing fee, insurance, GST deposit, or loan repayment to an unofficial account. Provide the recipient's UPI ID, amount, time of transfer, and company name. The 1930 helpline operates 24/7 and is the fastest route to a temporary hold on the destination account.",
        urgent: true,
    },
    {
        step: "02",
        title: "File on cybercrime.gov.in",
        desc: "Select 'Report Financial Cyber Crime.' Attach screenshots of all conversation records (WhatsApp, SMS, calls), the lender's website or app screenshots, payment receipts, and the company's claimed details. For loan recovery harassment cases, select 'Cyber Crime Against Women/Children' if intimate content was threatened or shared. A reference number is issued within 24 hours.",
        urgent: true,
    },
    {
        step: "03",
        title: "Report the App to Play Store and RBI",
        desc: "For fake loan apps: report immediately on Google Play Store ('Flag as inappropriate' > 'Financial fraud'). File a complaint with RBI's Sachet portal at sachet.rbi.org.in  specifically designed for reporting unauthorised lending entities. RBI's NBFC Ombudsman can be reached at rbi.org.in for complaints against registered but misbehaving NBFCs.",
        urgent: false,
    },
    {
        step: "04",
        title: "Dispute Payment with Your Bank",
        desc: "If money was transferred via UPI, raise a dispute immediately through your bank's app or by calling the bank's 24/7 fraud line. Act within 24 hours for the best recovery chance. Provide your cybercrime.gov.in reference number to the bank  this activates a formal investigation protocol. Under RBI guidelines, banks must respond to fraud disputes within 48 hours.",
        urgent: false,
    },
    {
        step: "05",
        title: "File an FIR at Your Nearest Cybercrime Police Station",
        desc: "A physical FIR strengthens your case for financial recovery and activates police investigation. Bring printed copies of all conversation screenshots, the company's details, payment receipts, and your cybercrime.gov.in reference number. For loan recovery harassment cases, bring call logs showing the number and nature of threatening calls.",
        urgent: false,
    },
];

// ── FAQs ──────────────────────────────────────────────────────────────────────
const faqs = [
    {
        q: "What are the most common types of loan fraud in India in 2026?",
        a: "The seven most common types are: (1) Fake loan apps india  38% of complaints, illegal apps that access your contacts before threatening harassment. (2) Advance fee scam  24%, collecting processing fees before a loan that never arrives. (3) Loan recovery harassment india  18%, threatening calls from illegal recovery agents. (4) Housing loan fraud india  8%, fake DSAs collecting fees for home loans. (5) Education loan scams  5%, targeting students and families. (6) Fake debt collector scam  4%, claiming you owe money you don't. (7) Loan spam calls  3%. NCRB 2025 recorded 2.4 lakh complaints with total losses of ₹9,200 crore.",
    },
    {
        q: "How to check if a loan company is legitimate in India?",
        a: "Three steps: (1) Search the company name on RBI's NBFC registry at rbi.org.in/Scripts/BS_NBFCList.aspx  if not listed and not a scheduled bank, they cannot legally lend. (2) Check their website on RakshaAI's Website Safety Checker  fraudulent lenders typically have domains registered within the last 6 months. (3) Search their CIN (Company Identification Number) on MCA21 at mca.gov.in  if the company is not registered, no fee or document submission is safe. Also search Google for the company name followed by 'complaint', 'fraud', or 'scam' to find victim reports before you engage.",
    },
    {
        q: "What should I do if a loan app is harassing me with threatening calls?",
        a: "Loan recovery harassment from illegal apps is a criminal offence. Immediately: (1) Stop all payments  paying does not stop illegal harassment. (2) Document everything: screenshot all messages, record calls if possible. (3) File on cybercrime.gov.in  select 'Cyber Crime Against Women/Children' if intimate content was threatened. (4) Call 1930 if any money was transferred under coercion. (5) File an FIR at your nearest cybercrime police station. Under IT Act 2000 Sections 66C and 66D, illegal recovery agents face criminal prosecution. The loan app threatening calls pattern  where agents threaten to send messages to your contacts  is specifically classified as extortion under Section 384 IPC.",
    },
    {
        q: "How do I identify a fake loan app in India?",
        a: "Signs of a fake loan app: (1) It requests access to your contacts, photos, or microphone  legitimate lending apps do not require these permissions. (2) The parent company is not listed on the RBI NBFC registry. (3) It promises disbursement in under 10 minutes with no physical documentation. (4) App reviews show a sudden burst of 5-star ratings with generic text. (5) The app is downloaded from a link sent via WhatsApp or SMS rather than directly from the Play Store. (6) Interest rates are not disclosed upfront or are presented as 'service charges.' The RBI list of registered entities is available at rbi.org.in  check before downloading any lending app.",
    },
    {
        q: "What is an advance fee scam and how does it work?",
        a: "An advance fee scam involves a fraudster posing as a bank, NBFC, or government lending scheme offering a pre-approved loan. Before disbursement, they request an upfront payment described as a 'processing fee,' 'GST deposit,' 'insurance premium,' or 'loan activation charge.' Once you transfer this amount, the scammer disappears and the loan never arrives. The advance fee fraud model works because the requested amount seems small relative to the promised loan  if someone offers you a ₹10 lakh loan and asks for ₹25,000 as processing fee, the fee appears proportionate. It is not. Legitimate Indian lenders never collect fees before disbursement.",
    },
    {
        q: "How do I verify if a debt collector calling me is legitimate?",
        a: "To verify a debt collector: (1) Ask for their full name, employer company name, and the original lender's name. (2) Demand written verification of the debt  a legitimate collector must provide this. (3) Search the caller's number on RakshaAI's Phone Number Checker to see if it has been reported. (4) Contact your original lender directly  call the number on their official website, not the number the collector gave you. Fake debt collector operations typically cannot provide original lender confirmation because the debt does not exist.",
    },
    {
        q: "Can I get my money back after paying a loan scammer?",
        a: "Recovery is possible if you act quickly. Call 1930 within 30 minutes of the transfer for the best chance  the helpline can initiate an account freeze request before money is moved. Within 24 hours: file on cybercrime.gov.in, raise a UPI dispute with your bank, and report the company on RBI's Sachet portal. After 48 hours, recovery drops below 15% as money has moved through multiple accounts. Document everything from day one.",
    },
    {
        q: "What are education loan scams in India and who do they target?",
        a: "Education loan scams primarily target Class 12 pass-outs, undergraduate students, and families preparing to finance higher education. Scammers pose as representatives of government scholarship programmes, banks offering student loan schemes, or private NBFC education loan providers. They collect advance fees described as 'application processing charges,' 'security deposits,' or 'scholarship registration fees.' They also harvest Aadhaar, PAN, and bank details under the pretence of loan KYC, then use these for identity fraud. Warning signs: unsolicited calls about government education loans, requests for advance payment, and pressure to act before a deadline.",
    },
    {
        q: "What is predatory lending and which loan apps in India practice it?",
        a: "Predatory lending refers to lending practices that exploit borrowers through hidden fees, usurious interest rates, unclear terms, and coercive collection tactics. Typical predatory lending patterns in India: loan apps that present a ₹10,000 loan but disburse only ₹7,200 after deducting undisclosed charges; apps that charge effective annual interest rates above 100% while advertising low 'daily rates'; lenders who access your contact list immediately on app installation and begin threatening messages within days of any payment delay. Loan fraud protection starts with the RBI NBFC registry check before any financial engagement.",
    },
    {
        q: "How do I report a fake loan company to the RBI and cybercrime authorities?",
        a: "For reporting fake loan companies: (1) Call 1930 if money was transferred. (2) File on cybercrime.gov.in under 'Financial Cyber Fraud.' (3) Report to RBI's Sachet portal at sachet.rbi.org.in  specifically designed for unauthorised lending complaints. (4) File a complaint with the RBI NBFC Ombudsman at rbi.org.in for registered but misbehaving NBFCs. (5) Report the app on Google Play Store under 'Financial fraud.' (6) File a physical FIR at your nearest cybercrime police station. Provide all documentation: the company's name, claimed registration number, contact details, payment records, and all communication records.",
    },
];

// ─────────────────────────────────────────────────────────────────────────────
export default function LoanFraudPage() {
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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLd(lenderVerificationSteps) }}
            />

            <main className="min-h-screen">

                {/* ── Hero ─────────────────────────────────────────────────── */}
                <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-sky-950 pt-20 pb-24 px-4">
                    <div className="pointer-events-none absolute inset-0 -z-10">
                        <div className="absolute top-10 left-1/4 w-96 h-96 bg-sky-300/10 rounded-full blur-3xl animate-pulse" />
                        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl animate-pulse delay-700" />
                        <div className="absolute top-1/2 right-0 w-64 h-64 bg-indigo-300/10 rounded-full blur-3xl animate-pulse delay-1000" />
                    </div>

                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-sky-100 to-blue-100 dark:from-sky-900/40 dark:to-blue-900/40 text-sky-700 dark:text-sky-300 text-xs font-semibold mb-6 border border-sky-200 dark:border-sky-800 shadow-sm">
                            <TriangleAlert className="h-4 w-4 animate-pulse" />
                            2026 India Report · 2.4 Lakh NCRB Complaints · Updated April 2026
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
                            Loan Fraud in India 2026:{" "}
                            <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                7 Types, Fake Loan Apps &amp; How to Report
                            </span>
                        </h1>

                        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-5 leading-relaxed">
                            Loan fraud in India is any scheme where a fraudster obtains money or personal data by
                            posing as a legitimate lender, loan recovery agent, or debt collector. It spans fake
                            loan apps, advance fee scams, illegal loan recovery harassment, housing loan fraud,
                            education loan scams, fake debt collector calls, and pre-approved loan spam calls.
                        </p>
                        <p className="text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-5 leading-relaxed">
                            Indians filed over 2.4 lakh cybercrime complaints related to loan fraud in 2025  a
                            58% increase from 2024  with total losses estimated at ₹9,200 crore. Fake loan apps
                            alone accounted for 38% of all financial cybercrime complaints recorded by NCRB.
                        </p>
                        <p className="text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
                            This page covers all 7 types of loan fraud active in India in 2026, how to identify
                            a fake loan company before you lose money, and the exact steps to report and recover
                            funds if you have already been targeted.
                        </p>

                        {/* Hero CTA box */}
                        <div className="max-w-xl mx-auto mb-10 p-5 rounded-2xl bg-white dark:bg-gray-900 border-2 border-sky-300 dark:border-sky-700 shadow-md text-center">
                            <p className="text-sm font-bold text-gray-800 dark:text-gray-100 mb-3">
                                Getting Calls From a Loan Company? Check If They&apos;re Legitimate First
                            </p>
                            <Link
                                href="/website-safety-checker/"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold text-sm shadow-lg hover:shadow-sky-300/50 hover:scale-105 transition-all duration-300"
                            >
                                <Shield className="h-4 w-4" />
                                CHECK WEBSITE SAFETY FREE
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>

                        {/* Stats strip */}
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            {[
                                { value: "2.4 Lakh", label: "Loan Fraud Complaints · India 2025 (NCRB)", icon: <AlertTriangle className="h-4 w-4" /> },
                                { value: "₹9,200 Cr", label: "Total Losses to Loan Fraud · India 2025", icon: <IndianRupee className="h-4 w-4" /> },
                                { value: "+58%", label: "Year-on-Year Growth in Fake Loan App Complaints", icon: <Smartphone className="h-4 w-4" /> },
                                { value: "78%", label: "Victims Never Recover Money (MHA Data 2025)", icon: <Shield className="h-4 w-4" /> },
                            ].map(({ value, label, icon }, i) => (
                                <div
                                    key={label}
                                    className="group flex flex-col items-center px-6 py-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 min-w-[130px]"
                                    style={{ animationDelay: `${i * 100}ms` }}
                                >
                                    <div className="text-sky-500 mb-1 group-hover:scale-110 transition-transform">{icon}</div>
                                    <span className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">{value}</span>
                                    <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-center">{label}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <ReportScamButton className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold text-sm shadow-lg hover:shadow-sky-300/50 hover:scale-105 transition-all duration-300 cursor-pointer">
                                <ShieldAlert className="h-5 w-5" />
                                Report Loan Fraud
                                <ArrowRight className="h-4 w-4" />
                            </ReportScamButton>
                            <a
                                href="#scam-types"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 font-semibold text-sm border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
                            >
                                See All Loan Scam Types
                                <ChevronDown className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </section>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

                    {/* ── The Golden Rule ───────────────────────────────────── */}
                    <section>
                        <div className="grid lg:grid-cols-2 gap-10 items-center">
                            <div>
                                <span className="inline-block px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 text-xs font-semibold mb-4">
                                    The One Rule That Stops All Loan Fraud
                                </span>
                                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-6 leading-snug">
                                    Why Loan Fraud Targets India's Most Financially Vulnerable  and the One Rule That Stops It
                                </h2>
                                <div className="space-y-4 text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                                    <p>
                                        Loan fraud is uniquely predatory because it targets people in financial
                                        distress  people who urgently need money and may be repeatedly rejected
                                        by legitimate lenders due to low CIBIL scores, no credit history, or
                                        informal employment. The promise of 'no CIBIL, instant approval' is
                                        specifically calibrated to reach the most vulnerable.
                                    </p>
                                    <p>
                                        The advance fee model is psychologically powerful: paying ₹2,000 to
                                        receive ₹50,000 seems rational. The victim has mentally already received
                                        the loan  the fee is a small final step. Each subsequent fee follows
                                        the same logic, and the sunk cost of prior payments makes stopping harder.
                                    </p>
                                    <p>
                                        The contact harvesting component adds a second layer of harm  the victim
                                        is not just financially damaged but exposed to social and professional
                                        humiliation, with family and employers receiving threatening messages.
                                        Multiple victims of loan app harassment in India have died by suicide.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-950/40 dark:to-blue-950/40 rounded-2xl p-8 border border-sky-100 dark:border-sky-900 space-y-5">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center">
                                        <Info className="h-5 w-5 text-white" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 dark:text-white text-lg">The One Rule That Cannot Be Broken</h3>
                                </div>
                                <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border-2 border-sky-400 dark:border-sky-600 text-center">
                                    <p className="text-base font-extrabold text-sky-700 dark:text-sky-300">
                                        No legitimate lender in India  bank, NBFC, or microfinance institution  ever charges any fee before disbursing a loan.
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                                        Processing fees, GST, insurance, and all legitimate charges are deducted from the loan amount after disbursal  never collected in advance.
                                    </p>
                                </div>
                                <ul className="space-y-4">
                                    {[
                                        { icon: XCircle, color: "text-red-500", text: "Any lender asking for money from you before the loan is credited to your account is committing fraud." },
                                        { icon: XCircle, color: "text-red-500", text: "Any app that requires access to your full contact list has no legitimate lending purpose  uninstall immediately." },
                                        { icon: XCircle, color: "text-red-500", text: "No government scheme  MUDRA, PM SVANidhi, Kisan Credit Card  requires advance fees or app downloads from unofficial sources." },
                                        { icon: CheckCircle2, color: "text-green-500", text: "RBI registration is publicly verifiable at rbi.org.in in under 2 minutes  the single most reliable safety check." },
                                        { icon: CheckCircle2, color: "text-green-500", text: "Legitimate EMI collection always uses NACH bank mandates or official payment gateways  never personal UPI IDs." },
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

                    {/* ── Loan Fraud Scale + Image ───────────────────────────────────────────── */}
                    <section aria-labelledby="loan-scale-heading">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-widest">
                                    Official 2024 Data
                                </span>
                                <h2
                                    id="loan-scale-heading"
                                    className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-2 mb-4"
                                >
                                    How Big Is Fake Loan App Fraud in India Right Now?
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                    Fake loan apps are India's fastest-growing category of cyber fraud in 2024.
                                    They target people in genuine financial distress  the most vulnerable moment
                                    in someone's financial life. Beyond the money, victims face data theft, contact
                                    harassment, and blackmail that can destroy careers and relationships.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { label: "Estimated total stolen by fake loan apps in India in 2024", value: "₹3,500+ Cr", color: "from-sky-500 to-blue-600" },
                                        { label: "Predatory and fake loan apps removed from Google Play Store in 2023–24", value: "14,000+", color: "from-red-500 to-rose-600" },
                                        { label: "Effective annualised interest rate charged by predatory instant loan apps", value: "300–1000%", color: "from-orange-500 to-amber-600" },
                                        { label: "Victims who never file any complaint  fearing embarrassment or harassment", value: "Over 70%", color: "from-violet-500 to-purple-600" },
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
                                    alt="UPI payment verification and loan fraud security check  how to identify fake loan apps, advance fee fraud, and predatory instant loan scams in India, RakshaAI"
                                    title="How to Identify Fake Loan Apps and Loan Fraud in India | RakshaAI"
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
                            <span className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-4">
                                Complete 2026 Guide
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                Types of Loan Fraud in India 2026  Complete Guide
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-base">
                                Seven active loan fraud types targeting Indians in 2026, ranked by complaint volume and financial risk.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-5">
                            {scamTypes.map(({ emoji, title, desc, risk, riskColor, href }) => (
                                <div
                                    key={title}
                                    className="group flex flex-col gap-3 p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300"
                                >
                                    <div className="flex items-start justify-between gap-3">
                                        <div className="flex items-center gap-3">
                                            <span className="text-3xl leading-none">{emoji}</span>
                                            <h3 className="font-bold text-gray-900 dark:text-white text-sm leading-snug">{title}</h3>
                                        </div>
                                        <span className={`flex-shrink-0 px-2 py-0.5 rounded-full text-xs font-bold ${riskColor}`}>
                                            {risk}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
                                    <Link href={'/blog'} className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 dark:text-sky-400 hover:gap-2 transition-all">
                                        Full Guide <ArrowRight className="h-3 w-3" />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── How Loan Fraud Works  3-Stage Playbook ──────────── */}
                    <section>
                        <div className="text-center mb-12">
                            <span className="inline-block px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 text-xs font-semibold mb-4">
                                The Full Playbook
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                How Loan Fraud Works in India  The 3-Stage Playbook
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-base">
                                Every loan fraud type  from fake loan apps to advance fee scams  follows the same three-stage psychological sequence.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-sky-100 dark:border-sky-900 shadow-sm">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white font-extrabold text-sm">01</span>
                                    <h3 className="font-bold text-gray-900 dark:text-white text-lg">Stage 1  Target Selection: Who Scammers Go After</h3>
                                </div>
                                <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Loan fraudsters in India specifically target people in financial distress  those recently rejected by banks due to low CIBIL scores, people with informal employment, first-time borrowers, students awaiting education loans, and small business owners seeking working capital. Scammers reach these targets through Google Ads for terms like &quot;instant loan no CIBIL,&quot; WhatsApp and Telegram groups for financial advice, SMS blasts to phone numbers purchased in bulk, and search results for government lending schemes like MUDRA and PM SVANidhi. The targeting is precise: someone searching for a loan at 11 PM on a mobile phone is in a different psychological state than a bank customer walking into a branch during business hours.
                                </p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-orange-100 dark:border-orange-900 shadow-sm">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white font-extrabold text-sm">02</span>
                                    <h3 className="font-bold text-gray-900 dark:text-white text-lg">Stage 2  The Fake Loan Offer and the Trust-Building Pretext</h3>
                                </div>
                                <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                                    The fraudulent offer is designed to appear as legitimate as possible. Fake loan apps mimic the design of genuine fintech apps  professional UI, RBI compliance claims, and customer support chat. Advance fee scammers produce fake sanction letters on professional letterhead with copied logos of real banks. Housing loan fraudsters impersonate actual bank DSAs. Fake debt collectors read out personal details (often obtained from data breaches) to establish credibility. Education loan scammers reference real government scheme names and timelines. The common thread: enough specific, correct-looking detail to suspend the target&apos;s normal scepticism at a moment when they urgently want the scam to be real.
                                </p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-red-100 dark:border-red-900 shadow-sm">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center text-white font-extrabold text-sm">03</span>
                                    <h3 className="font-bold text-gray-900 dark:text-white text-lg">Stage 3  Execution: Fee Collection, Data Theft, and Harassment</h3>
                                </div>
                                <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                                    The execution phase varies by fraud type. In advance fee scams, each payment unlocks a new &quot;mandatory fee&quot;  processing charge, GST deposit, insurance premium, security deposit  until the victim stops paying or runs out of money. In fake loan app fraud, data theft happens at the moment of app installation: contacts, gallery, SMS, and location are uploaded to remote servers. The disbursement is either withheld entirely or a partial amount is sent to create legitimacy before escalating interest and fees are extracted. In loan recovery harassment, the data already collected is weaponised  threatening calls begin using personal information from the victim&apos;s contact list, and bulk messages are sent to family members and employers. The harassment is typically automated and continues regardless of payment made.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* ── Inline CTA ────────────────────────────────────────── */}
                    <section className="py-2">
                        <div className="rounded-2xl bg-gradient-to-r from-sky-50 to-blue-50 dark:from-sky-950/40 dark:to-blue-950/40 border border-sky-200 dark:border-sky-800 p-8 text-center">
                            <p className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                Not Sure If a Loan Company Is Legitimate? Check in 5 Seconds
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-5 max-w-lg mx-auto">
                                Paste the lender&apos;s website URL into RakshaAI&apos;s free Website Safety Checker  domain age, registration data, and blacklist status checked instantly.
                            </p>
                            <Link
                                href="/website-safety-checker/"
                                className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold text-sm shadow-lg hover:shadow-sky-300/50 hover:scale-105 transition-all duration-300"
                            >
                                <Shield className="h-4 w-4" />
                                CHECK WEBSITE FREE
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </section>

                    {/* ── Real Story ────────────────────────────────────────── */}
                    <section className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8 sm:p-12 border border-gray-100 dark:border-gray-800">
                        <span className="inline-block px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 text-xs font-semibold mb-4">
                            A Real Account
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
                            "They Sent My Edited Photos to My Mother and My Office HR."  A Real Account
                        </h2>
                        <div className="grid lg:grid-cols-2 gap-8 text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                            <div className="space-y-4">
                                <p>
                                    Deepa (name changed), a 27-year-old private sector employee from Hyderabad,
                                    needed ₹40,000 urgently in October 2024 to pay for a family medical emergency.
                                    Her bank application was rejected due to low CIBIL score. A Google Ad
                                    showed an app called 'QuickRupee Loans'  ₹50,000 in 5 minutes,
                                    no documents required. She downloaded it.
                                </p>
                                <p>
                                    The app requested access to contacts, gallery, location, and SMS at install.
                                    She accepted all permissions. Her loan of ₹50,000 was approved within
                                    3 minutes. Before transfer, she needed to pay a 'processing fee' of ₹2,200.
                                    She paid via UPI. The app then showed a 'GST advance deposit' of ₹1,800
                                    required within 30 minutes or the application would expire.
                                </p>
                                <p>
                                    She paid this too. A 'loan insurance premium' of ₹3,500 followed, this time
                                    citing 'RBI mandate'. After paying  total fees so far: ₹7,500  she was
                                    told a 'security deposit of ₹5,000 (fully refundable on first EMI)' was
                                    required. She paid. Total paid: ₹12,500.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <p>
                                    When she asked for the loan to be cancelled and her fees refunded,
                                    the phone number stopped responding. Three days later, her mother
                                    received a WhatsApp message containing a morphed image claiming Deepa
                                    was a loan defaulter. Her company's HR department received a similar
                                    message with her employee ID number.
                                </p>
                                <p>
                                    Deepa filed an FIR at the cyber crime police station. The app was traced
                                    to an entity registered in a different name in Gujarat, operating from
                                    Myanmar. The UPI IDs used to collect fees had already been closed.
                                    Google removed the app within 48 hours of the complaint. Deepa did not
                                    recover the ₹12,500 in fees but the harassment stopped after the FIR
                                    was filed and her employer was informed of the fraud context.
                                </p>
                                <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border border-sky-200 dark:border-sky-800">
                                    <p className="text-sm font-bold text-sky-700 dark:text-sky-300 mb-2">The Check That Would Have Cost Nothing and Saved ₹12,500:</p>
                                    <p className="text-sm text-gray-700 dark:text-gray-300">
                                        'QuickRupee Loans' had no entry on the RBI's NBFC list. A 2-minute search
                                        at rbi.org.in would have confirmed this before the first payment.
                                        The permission request for full gallery access during installation was also
                                        a clear disqualifying flag that no legitimate lender would ever require.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ── App Permissions Deep Dive ─────────────────────────── */}
                    <section className="bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-950/50 dark:to-gray-950/30 rounded-2xl p-8 sm:p-12 border border-slate-100 dark:border-slate-800">
                        <span className="inline-block px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900/40 text-slate-700 dark:text-slate-300 text-xs font-semibold mb-4">
                            App Permission Safety
                        </span>
                        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6">
                            What Loan App Permissions Are Legitimate  and Which Are Not
                        </h2>
                        <div className="grid lg:grid-cols-2 gap-8">
                            <div className="space-y-4 text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                                <p>
                                    RBI guidelines (August 2022) require all lending apps to collect only
                                    the data strictly necessary for the credit product, with explicit user
                                    consent for each data type. The following table shows what is and isn't
                                    legitimate for a regulated Indian lender to request.
                                </p>
                                <p>
                                    The single most reliable indicator of a fake loan app is a request for
                                    full contact list access. This has zero legitimate credit assessment
                                    use  its only purpose is building a list of people who can be contacted
                                    for harassment leverage.
                                </p>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800">
                                    <thead>
                                        <tr className="bg-gray-100 dark:bg-gray-800">
                                            <th className="px-4 py-3 text-left font-bold text-gray-700 dark:text-gray-200">Permission</th>
                                            <th className="px-4 py-3 text-left font-bold text-green-600 dark:text-green-400">Legitimate?</th>
                                            <th className="px-4 py-3 text-left font-bold text-gray-600 dark:text-gray-300">Legitimate Purpose</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                                        {[
                                            { perm: "Camera", legit: "✓ Sometimes", note: "KYC selfie / document capture only" },
                                            { perm: "Location", legit: "✓ Limited", note: "Address verification only, not continuous tracking" },
                                            { perm: "Full Contacts", legit: "✗ Never", note: "No legitimate credit use  harassment tool" },
                                            { perm: "SMS Inbox", legit: "✗ Avoid", note: "No RBI-mandated credit use; can capture OTPs" },
                                            { perm: "Photo Gallery", legit: "✗ Never", note: "No legitimate use  harvested for blackmail" },
                                            { perm: "Call Logs", legit: "✗ Never", note: "Prohibited by RBI 2022 guidelines for lenders" },
                                            { perm: "Microphone", legit: "✗ Never", note: "No legitimate lending purpose" },
                                        ].map(({ perm, legit, note }) => (
                                            <tr key={perm} className="bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                                                <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">{perm}</td>
                                                <td className={`px-4 py-3 font-bold text-xs ${legit.startsWith("✓") ? "text-green-600 dark:text-green-400" : "text-red-500 dark:text-red-400"}`}>{legit}</td>
                                                <td className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400">{note}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    {/* ── Legitimate vs Fake Lender: Split Section ────────────────────────────── */}
                    <section
                        aria-labelledby="legit-vs-fake-heading"
                        className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-lg lg:min-h-[520px]"
                    >
                        {/* LEFT  content */}
                        <div className="p-8 sm:p-10 bg-white dark:bg-gray-900 flex flex-col justify-center">
                            <span className="inline-block px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 text-xs font-semibold mb-4 self-start">
                                Quick Reference
                            </span>
                            <h2
                                id="legit-vs-fake-heading"
                                className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-6 leading-snug"
                            >
                                Legitimate Lender vs. Fake Loan App  Know the Difference
                            </h2>
                            <div className="space-y-3 mb-6">
                                <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-xl border border-green-200 dark:border-green-900">
                                    <p className="text-xs font-bold text-green-700 dark:text-green-400 mb-2 uppercase tracking-wide">
                                        Legitimate Lender
                                    </p>
                                    <ul className="space-y-1.5 text-sm text-gray-700 dark:text-gray-300">
                                        {[
                                            "Registered with RBI as an NBFC or bank  verifiable at rbi.org.in within 30 seconds",
                                            "Never asks for any fee, deposit, insurance, or GST payment before the loan is disbursed",
                                            "Loan app only requests permissions genuinely needed  no access to contacts, gallery, or SMS",
                                            "Interest rate disclosed clearly as APR (annual percentage rate) in the loan agreement",
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
                                        Fake Loan App
                                    </p>
                                    <ul className="space-y-1.5 text-sm text-gray-700 dark:text-gray-300">
                                        {[
                                            "Not in RBI's authorised list  uses fake registration numbers or vague 'RBI compliance' language",
                                            "Demands processing fee, GST advance, or security deposit before any money is disbursed",
                                            "Requests full access to contacts, photos, and SMS at install  uploads data immediately",
                                            "Loan is never disbursed  or a tiny amount is sent, then massive undisclosed fees are charged",
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
                                    The 60-Second Check
                                </p>
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    Before paying any fee or granting any app permission: open rbi.org.in and search
                                    for the lender's name in the list of authorised NBFCs. If they're not there,
                                    stop immediately  the loan will never arrive.
                                </p>
                            </div>
                        </div>
                        {/* RIGHT  full-height image */}
                        <div className="relative h-full min-h-[400px] overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-600" />
                            <Image
                                src="/image/indian-woman-checking-suspicious-scam-call-rakshaai.jpg"
                                alt="Indian woman identifying a suspicious fake loan app call  how to spot advance fee fraud, fake NBFC impersonation, and predatory instant loan scams in India, RakshaAI"
                                title="Identify Fake Loan Apps and Advance Fee Fraud in India | RakshaAI"
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                    </section>

                    {/* ── Red Flags ─────────────────────────────────────────── */}
                    <section>
                        <div className="text-center mb-10">
                            <span className="inline-block px-3 py-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-xs font-semibold mb-4">
                                Warning Signs
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                8 Loan Fraud Warning Signs You Should Never Ignore
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-base">
                                Any single one of these is sufficient reason to stop and verify before proceeding.
                            </p>
                        </div>
                        <div className="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 text-center">
                            <p className="text-sm font-bold text-red-700 dark:text-red-300">
                                🚨 Stop Immediately If Any of These Apply to Your Loan Application:
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {redFlags.map((flag, i) => (
                                <div
                                    key={flag}
                                    className="flex items-start gap-4 p-5 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md hover:border-sky-200 dark:hover:border-sky-800 transition-all duration-200"
                                >
                                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center text-white text-xs font-bold">
                                        {String(i + 1).padStart(2, "0")}
                                    </div>
                                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{flag}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── 5 Protection Rules ───────────────────────────────── */}
                    <section>
                        <div className="text-center mb-12">
                            <span className="inline-block px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-semibold mb-4">
                                Protection Guide
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                How to Protect Yourself from Loan Fraud  5 Rules
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-base">
                                Five actionable rules that block every type of loan fraud covered on this page.
                            </p>
                        </div>
                        <div className="space-y-5">
                            {[
                                {
                                    num: "01",
                                    title: "Rule 1: How to Check If a Loan Company Is Legitimate  3 Ways",
                                    desc: "Before submitting any documents or paying any fee: (a) Search the lender's name on the RBI NBFC registry at rbi.org.in/Scripts/BS_NBFCList.aspx  if they are not listed and not a scheduled bank, stop immediately. (b) Run the lender's website through RakshaAI's free Website Safety Checker  domain age under 12 months is a critical warning sign for fraudulent lending entities. (c) Search their Company Identification Number (CIN) on MCA21 at mca.gov.in  unregistered entities have no legal standing to offer loans.",
                                    color: "from-sky-500 to-blue-600",
                                },
                                {
                                    num: "02",
                                    title: "Rule 2: Never Pay Any Fee Before Loan Disbursement",
                                    desc: "This is the single rule that blocks all advance fee fraud. No legitimate lender in India  no scheduled bank, no RBI-registered NBFC, no microfinance institution  collects any payment from a borrower before the loan is credited to their account. Processing fees, insurance charges, and GST are all deducted from the disbursed loan amount. Any entity requesting money from you before disbursing a loan is operating a fraud.",
                                    color: "from-red-500 to-rose-600",
                                },
                                {
                                    num: "03",
                                    title: "Rule 3: Use Only RBI-Approved Loan Apps",
                                    desc: "Before downloading any loan app: (a) Verify the parent company on the RBI NBFC registry. (b) Read the permissions the app requests at install  any app that requires contacts, gallery, or microphone access should be immediately rejected. (c) Read reviews beyond the first page  fake apps often have a suspicious burst of 5-star ratings. The RBI has published multiple advisories warning against loan apps not linked to a regulated entity. The Play Store presence of an app does not confirm its legitimacy.",
                                    color: "from-orange-500 to-amber-600",
                                },
                                {
                                    num: "04",
                                    title: "Rule 4: Know Your Rights Against Illegal Loan Recovery",
                                    desc: "Under RBI's Fair Practices Code and IT Act 2000, loan recovery agents cannot: make calls before 8 AM or after 7 PM; use abusive or threatening language; contact your family, employer, or contacts; share any personal information with third parties; or threaten legal action without initiating actual proceedings. If any of these happen, immediately file on cybercrime.gov.in, call 1930, and file an FIR. The harassment is a criminal offence carrying potential imprisonment under IT Act Sections 66C and 66D.",
                                    color: "from-violet-500 to-purple-600",
                                },
                                {
                                    num: "05",
                                    title: "Rule 5: Verify Debt Before Paying Any Debt Collector",
                                    desc: "If you receive a call from someone claiming you have an outstanding loan: (a) Request written confirmation of the debt, the original lender's name, and the caller's employee ID. (b) Contact the original lender directly using the number on their official website  not the number provided by the caller. (c) Check the caller's number on RakshaAI's Phone Number Checker to see if it has been reported as a scam. Never pay any debt collector who cannot or will not provide written proof of the debt and original lender confirmation.",
                                    color: "from-teal-500 to-emerald-600",
                                },
                            ].map(({ num, title, desc, color }) => (
                                <div key={num} className="flex gap-5 p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all">
                                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white font-extrabold text-sm`}>{num}</div>
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
                                Report & Recover
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                How to Report Loan Fraud in India  Step by Step
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-base">
                                If you have paid money to a fake loan company, follow these five steps in order. Speed is critical  recovery probability drops with every hour.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="hidden sm:block absolute left-[27px] top-10 bottom-10 w-0.5 bg-gradient-to-b from-red-300 via-sky-300 to-blue-300 dark:from-red-800 dark:via-sky-800 dark:to-blue-800" />
                            <div className="space-y-5">
                                {reportSteps.map(({ step, title, desc, urgent }) => (
                                    <div key={step} className="relative flex gap-6 items-start">
                                        <div className={`relative z-10 flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-white font-extrabold text-sm shadow-lg ${urgent ? "bg-gradient-to-br from-red-500 to-rose-600" : "bg-gradient-to-br from-sky-500 to-blue-600"}`}>
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
                        <div className="mt-10 p-6 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700">
                            <h3 className="font-bold text-gray-900 dark:text-white text-base mb-4">Recovery Timeline  Act Fast</h3>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {[
                                    { time: "Within 30 min", action: "Call 1930  highest recovery chance", color: "border-red-300 dark:border-red-700" },
                                    { time: "Within 1 hour", action: "File on cybercrime.gov.in", color: "border-orange-300 dark:border-orange-700" },
                                    { time: "Within 24 hours", action: "Bank dispute + Sachet RBI complaint", color: "border-yellow-300 dark:border-yellow-700" },
                                    { time: "After 48 hours", action: "FIR  recovery drops below 15%", color: "border-gray-300 dark:border-gray-600" },
                                ].map(({ time, action, color }) => (
                                    <div key={time} className={`p-4 rounded-xl bg-white dark:bg-gray-800 border-l-4 ${color}`}>
                                        <p className="text-xs font-bold text-gray-500 dark:text-gray-400 mb-1">{time}</p>
                                        <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{action}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Report CTA Banner */}
                        <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-sky-600 to-blue-700 text-white text-center">
                            <p className="font-bold text-base mb-2">Report This Loan Scam and Warn 2 Million+ Indian Users</p>
                            <p className="text-sky-100 text-sm mb-4">Your report helps us block this lender for every future victim who checks it on RakshaAI.</p>
                            <ReportScamButton className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-sky-700 font-bold text-sm shadow-lg hover:scale-105 transition-all cursor-pointer">
                                <ShieldAlert className="h-4 w-4" />
                                Report Loan Fraud Now
                                <ArrowRight className="h-4 w-4" />
                            </ReportScamButton>
                        </div>
                    </section>

                    {/* ── Loan Fraud Stats Table ────────────────────────────── */}
                    <section>
                        <div className="text-center mb-8">
                            <span className="inline-block px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-semibold mb-4">
                                NCRB Data 2025 · Updated April 2026
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-3">
                                Loan Fraud in India  2026 Statistics by Type
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-sm">
                                Based on NCRB cybercrime data, RBI enforcement reports, and complaint volumes on the National Cyber Crime Portal.
                            </p>
                        </div>
                        <div className="overflow-x-auto rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-gray-50 dark:bg-gray-800 text-left">
                                        <th className="px-5 py-3 font-bold text-gray-700 dark:text-gray-300">Fraud Type</th>
                                        <th className="px-5 py-3 font-bold text-gray-700 dark:text-gray-300 text-center">% of Complaints</th>
                                        <th className="px-5 py-3 font-bold text-gray-700 dark:text-gray-300 text-right">Avg. Loss per Victim</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
                                    {[
                                        { type: "Fake Loan Apps India", pct: "38%", loss: "₹18,400" },
                                        { type: "Advance Fee Scam", pct: "24%", loss: "₹24,000" },
                                        { type: "Loan Recovery Harassment", pct: "18%", loss: "₹9,200" },
                                        { type: "Housing Loan Fraud", pct: "8%", loss: "₹82,000" },
                                        { type: "Education Loan Scams", pct: "5%", loss: "₹31,000" },
                                        { type: "Fake Debt Collector Scam", pct: "4%", loss: "₹14,500" },
                                        { type: "Loan Spam & Phone Scams", pct: "3%", loss: "₹6,800" },
                                    ].map(({ type, pct, loss }) => (
                                        <tr key={type} className="bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                            <td className="px-5 py-3 font-medium text-gray-800 dark:text-gray-200">{type}</td>
                                            <td className="px-5 py-3 text-center text-gray-600 dark:text-gray-400">{pct}</td>
                                            <td className="px-5 py-3 text-right font-semibold text-red-600 dark:text-red-400">{loss}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* ── More Guides ───────────────────────────────────────── */}
                    <section>
                        <div className="mb-8">
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-2">
                                More Loan Fraud Guides for India
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">Deep-dive pages on each fraud type covered in this guide.</p>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {[
                                { title: "Fake Loan Apps India  Complete 2026 Guide", href: "/blog/fake-loan-apps-india/", tag: "Extreme Risk" },
                                { title: "Advance Fee Scam India  How to Spot & Avoid", href: "/blog/advance-fee-scam-india/", tag: "Very High Risk" },
                                { title: "Loan Recovery Harassment  Know Your Rights", href: "/blog/loan-recovery-harassment-india/", tag: "Very High Risk" },
                                { title: "How to Check If a Loan Company Is Legitimate", href: "/blog/how-to-check-loan-company/", tag: "Protection Guide" },
                                { title: "Housing Loan Fraud India  Buyer&apos;s Checklist", href: "/blog/housing-loan-fraud-india/", tag: "High Risk" },
                                { title: "Education Loan Scams India 2026", href: "/blog/education-loan-scams-india/", tag: "High Risk" },
                            ].map(({ title, href, tag }) => (
                                <Link
                                    key={href}
                                    href={'/blog'}
                                    className="group flex flex-col gap-3 p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
                                >
                                    <span className="inline-block px-2 py-0.5 rounded-full bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 text-xs font-semibold">{tag}</span>
                                    <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors leading-snug">{title}</span>
                                    <span className="text-xs text-sky-600 dark:text-sky-400 font-medium flex items-center gap-1">Read guide <ArrowRight className="h-3 w-3" /></span>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* ── FAQ ───────────────────────────────────────────────── */}
                    <section>
                        <div className="mb-10">
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-3">
                                Frequently Asked Questions About Loan Fraud in India
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400">
                                Honest answers to the most common questions about fake loan apps and loan fraud in India.
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

                    {/* ── Related Free Tools ────────────────────────────────── */}
                    <section>
                        <div className="mb-8">
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-2">
                                Free Safety Tools  Check Before You Pay
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">Verify any lender, number, or UPI ID instantly. All tools free, no registration required.</p>
                        </div>
                        <div className="grid sm:grid-cols-3 gap-5">
                            {[
                                { icon: "🌐", title: "Website Safety Checker", desc: "Check if a loan company website is legitimate before submitting any documents.", href: "/website-safety-checker/", cta: "Check a Website →" },
                                { icon: "📞", title: "Phone Number Checker", desc: "Check if a lender's number or recovery agent's number has been reported as fraud.", href: "/phone-number-checker/", cta: "Check a Number →" },
                                { icon: "💳", title: "UPI ID Checker", desc: "Verify any UPI ID before transferring loan fees or payments to an unknown account.", href: "/upi-id-checker/", cta: "Check a UPI ID →" },
                            ].map(({ icon, title, desc, href, cta }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    className="group flex flex-col gap-4 p-6 rounded-2xl bg-gradient-to-br from-white to-sky-50/50 dark:from-gray-900 dark:to-sky-950/20 border border-sky-100 dark:border-sky-900 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
                                >
                                    <div className="text-3xl">{icon}</div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 dark:text-white text-base mb-1 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">{title}</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-3">{desc}</p>
                                        <span className="text-sm font-semibold text-sky-600 dark:text-sky-400">{cta}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* ── Recent Loan Fraud Alerts ──────────────────────────── */}
                    <section>
                        <div className="mb-8">
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-2">
                                Recent Loan Fraud Alerts  India 2026
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">Active scam patterns flagged by RakshaAI users in the last 90 days.</p>
                        </div>
                        <div className="space-y-4">
                            {[
                                {
                                    date: "April 2026",
                                    title: "Fake RBI Pre-Approved Loan SMS Campaigns",
                                    desc: "Fraudsters sending bulk SMS claiming to be from RBI offering pre-approved limits up to ₹10 lakh. The RBI never directly disburses loans to individuals  any such claim is an advance fee fraud.",
                                    severity: "Critical",
                                    color: "border-red-400 dark:border-red-700 bg-red-50 dark:bg-red-950/20",
                                    tagColor: "bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300",
                                },
                                {
                                    date: "March 2026",
                                    title: "New Loan App Category: &quot;Salary Advance&quot; Apps",
                                    desc: "New category of fake loan apps posing as employer-linked salary advance schemes. Apps request payslip uploads to steal employer credentials and commit identity fraud at the workplace.",
                                    severity: "High",
                                    color: "border-orange-400 dark:border-orange-700 bg-orange-50 dark:bg-orange-950/20",
                                    tagColor: "bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300",
                                },
                                {
                                    date: "February 2026",
                                    title: "Loan Recovery Harassment via WhatsApp Profile Abuse",
                                    desc: "Victims report recovery agents downloading their contact list via harvested app permissions, then sending derogatory messages to all contacts. If this happens, file a cybercrime complaint under IT Act Section 67 immediately.",
                                    severity: "High",
                                    color: "border-yellow-400 dark:border-yellow-700 bg-yellow-50 dark:bg-yellow-950/20",
                                    tagColor: "bg-yellow-100 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-300",
                                },
                                {
                                    date: "January 2026",
                                    title: "Fake NBFC Registration Certificates in Circulation",
                                    desc: "Multiple fraudulent lending companies found using forged RBI NBFC registration certificates. Always verify the NBFC registration number directly on RBI's official portal at rbi.org.in, not from a certificate provided by the company.",
                                    severity: "Medium",
                                    color: "border-sky-400 dark:border-sky-700 bg-sky-50 dark:bg-sky-950/20",
                                    tagColor: "bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-300",
                                },
                            ].map(({ date, title, desc, severity, color, tagColor }) => (
                                <div key={title} className={`p-5 rounded-2xl border-l-4 ${color}`}>
                                    <div className="flex flex-wrap items-center gap-3 mb-2">
                                        <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${tagColor}`}>{severity}</span>
                                        <span className="text-xs text-gray-400 dark:text-gray-500">{date}</span>
                                    </div>
                                    <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1" dangerouslySetInnerHTML={{ __html: title }} />
                                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed" dangerouslySetInnerHTML={{ __html: desc }} />
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── Final CTA ─────────────────────────────────────────── */}
                    <section className="rounded-2xl bg-gradient-to-br from-sky-700 via-blue-700 to-indigo-800 p-8 sm:p-12 text-white text-center shadow-2xl relative overflow-hidden">
                        <div className="pointer-events-none absolute inset-0">
                            <div className="absolute -top-10 -left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
                        </div>
                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-xs font-semibold mb-6 border border-white/20">
                                <Shield className="h-4 w-4" />
                                Free Phone Number & Website Verification
                            </div>
                            <h2 className="text-2xl sm:text-4xl font-extrabold mb-4 leading-tight">
                                Got a Loan Offer You're Unsure About?<br className="hidden sm:block" />
                                Check It Before You Pay Anything.
                            </h2>
                            <p className="text-sky-100 mb-8 text-sm sm:text-base max-w-xl mx-auto">
                                Check any loan company's phone number or website on RakshaAI before
                                transferring a single rupee. Or report a loan scam to protect the
                                next person from the same app.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <ReportScamButton className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-sky-700 font-bold text-sm shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                                    <MessageSquareWarning className="h-5 w-5" />
                                    Report Loan Fraud
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
                            <p className="mt-6 text-sky-200 text-xs">
                                🇮🇳 India-focused loan fraud guidance · Free consumer access · No registration required
                            </p>
                        </div>
                    </section>

                </div>
            </main>
        </DefaultLayout>
    );
}
