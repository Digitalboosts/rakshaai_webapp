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
    TrendingUp,
    Users,
    Phone,
    IndianRupee,
    ShieldAlert,
    ArrowRight,
    Info,
    BadgeCheck,
    ChevronDown,
    MessageSquareWarning,
    Smartphone,
    Globe,
    Lock,
    Eye,
    BarChart2,
    Percent,
    UserX,
    FileWarning,
    Radio,
    Briefcase,
    Clock,
    Star,
} from "lucide-react";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
    title: "Investment Scams India 2026: Types & Warning Signs",
    description:
        "Discover all 7 types of investment fraud in India 2026: ponzi schemes, fake trading apps, pyramid schemes. Warning signs and prevention.",
    alternates: {
        canonical: "https://rakshaai.co/scams/investment-scams",
    },
    robots: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
    openGraph: {
        title: "Investment Scams India 2026: 7 Types, Ponzi Schemes & How to Report | RakshaAI",
        description:
            "Discover all 7 types of investment fraud in India 2026. Learn how ponzi schemes, fake trading apps, pyramid schemes, binary options scams and pig butchering fraud work. Report free.",
        url: "https://rakshaai.co/scams/investment-scams",
        type: "website",
    siteName: 'RakshaAI',
        images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'RakshaAI' }],
  },
    twitter: {
        card: "summary_large_image",
        title: "Investment Scams India 2026: 7 Types | RakshaAI",
        description:
            "Ponzi schemes, fake trading apps, pyramid schemes  all 7 investment fraud types in India 2026.",
        images: ['/opengraph-image'],
  },
    other: { "geo.region": "IN", language: "en-IN" },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────
const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Investment Scams in India 2026: 7 Types, Ponzi Schemes & How to Report",
    url: "https://rakshaai.co/scams/investment-scams",
    description:
        "Comprehensive guide to investment fraud in India 2026  all 7 types: ponzi schemes, fake trading apps, pyramid schemes, binary options, forex scams, pump and dump, pig butchering crypto fraud.",
    publisher: { "@type": "Organization", name: "RakshaAI", url: "https://rakshaai.co" },
    inLanguage: "en-IN",
    datePublished: "2024-01-15",
    dateModified: "2026-06-11",
    author: { "@type": "Organization", name: "RakshaAI" },
};

const faqStructured = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What are the most common types of investment scams in India in 2026?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The seven most common investment fraud types in India in 2026: (1) Fake trading apps  34% of complaints, fake SEBI-mimicking platforms. (2) Ponzi scheme india  22%, fixed return promises paid from new investor deposits. (3) Pyramid scheme india / MLM  18%, income from recruitment not real returns. (4) Pig butchering scam india  10% of cases but highest per-victim losses at ₹18.5 lakh average. (5) Binary options scam india  6%, SEBI-banned but still operating via Telegram. (6) Forex scam india  6%, unregulated currency trading platforms. (7) Pump and dump india  4%, penny stock manipulation. NCRB 2025 recorded 1.8 lakh investment fraud complaints with total losses exceeding ₹22,845 crore.",
            },
        },
        {
            "@type": "Question",
            name: "How do I check if a trading platform or investment company is legitimate?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "How to check if an investment company is real in India: (1) Search the company name on SEBI's SIIP portal at sebi.gov.in  all authorised brokers, investment advisors, and mutual fund companies are listed. (2) Verify the SEBI registration number provided by the company independently on the same portal. (3) Check the platform's website using RakshaAI's Website Safety Checker  which cross-references SEBI's investor alert list. (4) Search the company name on SEBI SCORES portal (scores.sebi.gov.in) to see if any investor complaints have been filed. Fake SEBI registration documents are verifiable  the registration number will not match any real entity in the SEBI database.",
            },
        },
        {
            "@type": "Question",
            name: "What is a ponzi scheme and how do they operate in India?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A ponzi scheme is a fraudulent investment operation where the operator collects money from investors promising fixed returns from 'investment activities'  but no real investment takes place. Returns are paid to early investors from the deposits of new investors. India's biggest ponzi schemes include Saradha Chit Fund (₹2,500 crore, 1.7 crore victims), Rose Valley (₹17,000 crore), and NSEL (₹5,600 crore). All ponzi schemes collapse mathematically when new investment cannot cover redemption requests. Prosecution is under IPC Section 420, SEBI Act 1992, and PFUTP Regulations 2003.",
            },
        },
        {
            "@type": "Question",
            name: "What is the difference between a ponzi scheme and a pyramid scheme?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Ponzi vs pyramid: (1) Ponzi scheme: Victims invest money with an operator who promises returns from 'investment activities.' No recruiting required. Returns paid from new investor deposits. The operator controls all the money. (2) Pyramid scheme: Participants earn by recruiting new members, not from investment returns. Each participant recruits multiple people who each recruit more. Income from products is secondary or fabricated. Both are illegal in India  ponzi schemes under SEBI Act 1992 and IPC 420; pyramid schemes under the Prize Chits and Money Circulation Schemes (Banning) Act 1978.",
            },
        },
        {
            "@type": "Question",
            name: "Do banks refund money lost to investment scams in India?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Under RBI Circular RBI/2017-18/15 (Customer Protection), banks are liable for fraudulent transactions if reported within 3 working days  with zero liability to the customer. For UPI transactions, raise an immediate dispute through your bank's app. For NEFT/RTGS, contact the fraud team with your cybercrime.gov.in reference number within 24 hours. Recovery probability is approximately 40% within 48 hours, dropping to under 10% after 7 days.",
            },
        },
        {
            "@type": "Question",
            name: "How does a fake trading app scam work in India?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Fake trading app scams follow this 7-step pattern: (1) Recruitment via Telegram/WhatsApp investment tip group. (2) Introduction to a 'high-return' trading platform with convincing UI. (3) Platform shows real-time 'profits' accumulating in your portfolio. (4) Small initial withdrawals are processed to build confidence. (5) After larger deposits, withdrawal requests are blocked. (6) 'Tax deposits' or 'compliance fees' demanded before funds can be released. (7) After payment, platform goes offline. How to spot a fake trading platform: not listed on sebi.gov.in, shows guaranteed returns, recruited via social media tip group, and cannot withdraw without additional fees.",
            },
        },
        {
            "@type": "Question",
            name: "What are binary options scams and why is binary trading illegal in India?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Binary options trading was banned by SEBI in 2017 under SEBI Act 1992 because binary options are not securities and their trading characteristics make them effectively gambling instruments. All platforms offering binary options trading in India are operating illegally. Binary options scammers typically operate via Telegram 'trading tip' groups. The 'binary trading' interface shows trades entirely controlled by the operator  outcomes are predetermined. File complaints at cybercrime.gov.in and SEBI SCORES portal.",
            },
        },
        {
            "@type": "Question",
            name: "How do pump and dump schemes work in India?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Pump and dump schemes target illiquid penny stocks on NSE/BSE. Operators: (1) Accumulate a large position in a low-volume penny stock at low prices. (2) Create a Telegram/WhatsApp group promoting the stock as a 'hot tip' with fabricated research reports. (3) Retail investors buy in  demand drives the price up sharply. (4) Operators dump their entire position at the peak, crashing the price. (5) Retail investors are left with worthless shares. Red flags: unsolicited stock tips via messaging apps, sudden sharp price increases in obscure stocks, and 'limited time' urgency messaging.",
            },
        },
        {
            "@type": "Question",
            name: "What is the pig butchering scam and how does it target Indian investors?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Pig butchering scam is the most sophisticated investment fraud type. Phase 1: Scammer builds a genuine relationship (romantic or friendship-based) over weeks. Phase 2: They introduce a 'highly profitable' crypto or forex trading platform they personally use. Phase 3: Victim is shown growing portfolio returns and encouraged to invest more. Phase 4: When attempting large withdrawals, the platform freezes funds and demands 'tax deposits.' Phase 5: Both the relationship and platform disappear. India-specific pig butchering operations increasingly target professionals on LinkedIn. Average loss in India: ₹18.5 lakh.",
            },
        },
        {
            "@type": "Question",
            name: "How do I report an investment scam to SEBI in India?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "How to report investment fraud in India: (1) Call 1930 immediately if money was transferred  24/7 helpline that can freeze destination accounts. (2) File on SEBI SCORES portal at scores.sebi.gov.in for complaints against SEBI-regulated entities or illegal investment schemes. (3) File on cybercrime.gov.in under 'Financial Cyber Fraud.' (4) Contact your bank within 24–48 hours to raise a fraud dispute. (5) File a physical FIR at your nearest cybercrime police station with all evidence. (6) Report at rakshaai.co/report-a-scam/ to warn other Indians.",
            },
        },
    ],
};

// ── Breadcrumb Schema ─────────────────────────────────────────────────────────
const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://rakshaai.co/" },
        { "@type": "ListItem", position: 2, name: "Scam Categories", item: "https://rakshaai.co/scams/" },
        { "@type": "ListItem", position: 3, name: "Investment Scams", item: "https://rakshaai.co/scams/investment-scams/" },
    ],
};

// ── ItemList Schema ───────────────────────────────────────────────────────────
const itemListData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "7 Types of Investment Scams in India 2026",
    numberOfItems: 7,
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ponzi Scheme India", url: "https://rakshaai.co/scams/investment-scams/ponzi-scheme/" },
        { "@type": "ListItem", position: 2, name: "Fake Trading App India", url: "https://rakshaai.co/scams/investment-scams/fake-trading-platforms/" },
        { "@type": "ListItem", position: 3, name: "Pyramid Scheme India", url: "https://rakshaai.co/scams/investment-scams/pyramid-scheme/" },
        { "@type": "ListItem", position: 4, name: "Binary Options Scam India", url: "https://rakshaai.co/scams/investment-scams/binary-options-scam/" },
        { "@type": "ListItem", position: 5, name: "Forex Scam India", url: "https://rakshaai.co/scams/investment-scams/forex-scam/" },
        { "@type": "ListItem", position: 6, name: "Pump and Dump Scheme India", url: "https://rakshaai.co/scams/investment-scams/pump-and-dump/" },
        { "@type": "ListItem", position: 7, name: "Pig Butchering Scam India", url: "https://rakshaai.co/scams/investment-scams/pig-butchering/" },
    ],
};

// ── DefinedTerm Schema ────────────────────────────────────────────────────────
const definedTermData = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Pyramid vs Ponzi Scheme",
    description: "A Ponzi scheme pays returns from new investor deposits without recruiting; a pyramid scheme requires participants to recruit others to earn. Both are illegal in India under SEBI Act 1992 and the Prize Chits and Money Circulation Schemes (Banning) Act, 1978.",
    inDefinedTermSet: "https://rakshaai.co/scams/investment-scams/",
};

// ── Scam types ────────────────────────────────────────────────────────────────
const scamTypes = [
    {
        emoji: "📉",
        title: "Ponzi Scheme India  Fake Return Fraud",
        desc: "Operator promises fixed high returns (3–5% per month) and pays early investors using money from new investors. No real investment happens. Saradha (₹2,500 Cr) and Rose Valley (₹17,000 Cr) are India's largest documented ponzi frauds.",
        risk: "Extreme",
        riskColor: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300",
        href: "/scams/investment-scams/ponzi-scheme/",
    },
    {
        emoji: "📱",
        title: "Fake Trading App India  Fake Broker Platform",
        desc: "App mimics a real SEBI-registered broker with fake registration documents, fabricated P&L dashboards, and manufactured trade confirmations. Shows profits you cannot withdraw. When you try to exit, 'tax deposits' are demanded before funds that never come.",
        risk: "Extreme",
        riskColor: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300",
        href: "/scams/investment-scams/fake-trading-platforms/",
    },
    {
        emoji: "🔺",
        title: "Pyramid Scheme India  MLM and Chain Schemes",
        desc: "Recruits earn by enrolling new members rather than selling real products or generating real returns. Chit fund frauds, MLM scams, and network marketing pyramid schemes targeting tier-2 and tier-3 cities. Only the top 1–2% profit.",
        risk: "Very High",
        riskColor: "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300",
        href: "/scams/investment-scams/pyramid-scheme/",
    },
    {
        emoji: "📊",
        title: "Binary Options Scam India  Illegal Trading Platforms",
        desc: "Binary options trading was banned by SEBI in 2017. Platforms offering 'binary trading' in India are operating illegally. They use fake broker interfaces, manipulate trade outcomes, and disappear with deposits. Active via Telegram and WhatsApp groups.",
        risk: "Very High",
        riskColor: "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300",
        href: "/scams/investment-scams/binary-options-scam/",
    },
    {
        emoji: "💹",
        title: "Forex Scam India  Currency Trading Fraud",
        desc: "SEBI does not regulate retail forex trading in India. Platforms claiming to offer 'legal forex trading' are either operating outside RBI guidelines or are outright fraudulent. Victims are shown realistic-looking currency trading dashboards with fabricated profits.",
        risk: "High",
        riskColor: "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300",
        href: "/scams/investment-scams/forex-scam/",
    },
    {
        emoji: "📈",
        title: "Pump and Dump Scheme India  Stock Market Fraud",
        desc: "Operators buy large positions in illiquid penny stocks, then artificially inflate the price through coordinated Telegram/WhatsApp 'hot tip' messages. Once retail investors drive the price up, operators dump their shares, crashing the price.",
        risk: "High",
        riskColor: "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300",
        href: "/scams/investment-scams/pump-and-dump/",
    },
    {
        emoji: "🐷",
        title: "Pig Butchering Scam India  Crypto Romance Investment Fraud",
        desc: "The most sophisticated and highest-loss investment fraud type. Scammer builds a romantic or friendly relationship over weeks, then introduces a 'highly profitable' crypto or forex trading platform. Victim invests increasing amounts. Platform is fake. Average loss: ₹18.5 lakh.",
        risk: "Extreme",
        riskColor: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300",
        href: "/scams/investment-scams/pig-butchering/",
    },
];

// ── Red flags ─────────────────────────────────────────────────────────────────
const redFlags = [
    "Any promise of 'guaranteed' fixed returns  2%, 3%, or 5% per month. No SEBI-regulated instrument offers guaranteed returns. Markets carry risk. Any guarantee is fraud.",
    "The company, broker, or trading app is NOT listed on SEBI's registered broker list at sebi.gov.in  SEBI publishes a live list of authorised intermediaries. Check before depositing.",
    "They show you a SEBI registration certificate. Verify the registration number independently at sebi.gov.in  fake SEBI registration documents are routinely fabricated with real-looking seals.",
    "You are recruited into the scheme through a Telegram group, WhatsApp message, or social media post offering 'exclusive access' to a trading signal group or investment club.",
    "You can see your profits growing on a platform but cannot withdraw without paying additional fees, taxes, or deposits. Legitimate brokers never charge fees before releasing your own money.",
    "The scheme requires you to recruit others or invest larger amounts to 'unlock' higher return tiers. This is the signature structure of a pyramid scheme operation.",
    "The operator, broker, or platform cannot be contacted by phone on a landline registered to their stated company address. All contact is via WhatsApp, Telegram, or email only.",
    "Returns offered are dramatically above market rates for the asset class claimed  10% per month on 'forex trading,' '300% annual return on crypto,' '15% monthly guaranteed' on mutual funds.",
];

// ── How the fake app scam works ───────────────────────────────────────────────
const fakeAppSteps = [
    {
        step: "01",
        color: "from-blue-500 to-indigo-600",
        bg: "bg-blue-50 dark:bg-blue-950/30",
        border: "border-blue-200 dark:border-blue-900",
        title: "The Friendly Introduction",
        desc: "You receive a message from an unknown number  often a woman  claiming to have sent it by mistake. A friendly conversation follows over days. She mentions her successful investments casually.",
        urgent: false,
    },
    {
        step: "02",
        color: "from-violet-500 to-purple-600",
        bg: "bg-violet-50 dark:bg-violet-950/30",
        border: "border-violet-200 dark:border-violet-900",
        title: "The Invitation to a 'VIP Group'",
        desc: "She invites you to a WhatsApp or Telegram group run by an 'investment expert'  often impersonating a real SEBI analyst or a famous trader. The group shows extraordinary daily gains.",
        urgent: false,
    },
    {
        step: "03",
        color: "from-orange-500 to-amber-600",
        bg: "bg-orange-50 dark:bg-orange-950/30",
        border: "border-orange-200 dark:border-orange-900",
        title: "Small Wins to Build Trust",
        desc: "You're told to invest a small amount on a specific 'tip'. It works. You see real profit (this is engineered). Confidence rises. You invest more. Others in the group post screenshots of their profits.",
        urgent: false,
    },
    {
        step: "04",
        color: "from-red-500 to-rose-600",
        bg: "bg-red-50 dark:bg-red-950/30",
        border: "border-red-200 dark:border-red-900",
        title: "The Big Push",
        desc: "A 'once in a year' IPO or trade opportunity is announced. You're urged to invest your maximum amount  often ₹5–50 lakh  within 24 hours. The app shows spectacular profits building up.",
        urgent: true,
    },
    {
        step: "05",
        color: "from-rose-500 to-pink-600",
        bg: "bg-rose-50 dark:bg-rose-950/30",
        border: "border-rose-200 dark:border-rose-900",
        title: "Withdrawal Is Blocked",
        desc: "When you try to withdraw your profits, a message appears: 'Your account requires a GST deposit of 18% before release' or 'Tax clearance fee of 15% required by law.' This is a second layer of theft.",
        urgent: true,
    },
    {
        step: "06",
        color: "from-gray-500 to-slate-600",
        bg: "bg-gray-50 dark:bg-gray-900/50",
        border: "border-gray-200 dark:border-gray-800",
        title: "Complete Disappearance",
        desc: "After extracting maximum funds, the app stops working. The WhatsApp group is deleted. Phone numbers go silent. The 'friendly contact' who started it all is unreachable. The money is gone.",
        urgent: false,
    },
];

// ── What to do (5 Protection Rules) ──────────────────────────────────────────
const whatToDo = [
    { step: "01", title: "Verify Every Broker on SEBI's Official Registry", desc: "Go to sebi.gov.in and use the SEBI Intermediary Portal (SIIP) to verify any broker, investment advisor, or trading platform. Enter the company's name or claimed SEBI registration number. If not listed, the company is operating illegally. Also use RakshaAI's Website Safety Checker at rakshaai.co/website-safety-checker/ to check domain age and SEBI investor alert list status.", urgent: false },
    { step: "02", title: "Never Invest Based on a WhatsApp or Telegram Tip", desc: "SEBI's Research Analyst Regulations 2014 prohibit unlicensed persons from providing investment recommendations. Any 'trading tips,' 'hot stock' picks, or 'guaranteed profit signals' shared via WhatsApp or Telegram by unknown individuals is either illegal or fraudulent  or both. Always verify the source has a SEBI-registered Research Analyst licence number before acting on any recommendation.", urgent: false },
    { step: "03", title: "Understand What Guaranteed Returns Actually Mean", desc: "No SEBI-regulated equity, mutual fund, or stock market investment offers guaranteed returns. Fixed Deposits guarantee returns because they are RBI-regulated and insured up to ₹5 lakh by DICGC. Any investment promising guaranteed returns above bank FD rates  especially returns given as monthly percentages  is a ponzi scheme, pyramid scheme, or outright fraud. The get-rich-quick warning applies: if the return promise requires no explanation of where the money comes from, it comes from the next victim.", urgent: false },
    { step: "04", title: "Test Withdrawal Before Committing Large Amounts", desc: "Before depositing any significant amount on an unfamiliar trading platform, deposit the minimum amount and immediately attempt a full withdrawal to your bank account. If the platform delays, imposes conditions, requires 'verification deposits,' or shows your balance but cannot release it, it is a fraudulent platform. Legitimate SEBI-registered brokers process withdrawals within 24–48 hours with no additional fees. Any excuse before a withdrawal is processed is the signature behaviour of a fake trading app.", urgent: false },
    { step: "05", title: "Recognise the Pyramid vs Ponzi Recruiting Trap", desc: "Every pyramid scheme disguises the recruiting requirement as a 'business opportunity.' The test: if your income depends more on recruiting new members than on selling a genuine product at market price, you are in a pyramid scheme. The Prize Chits and Money Circulation Schemes (Banning) Act, 1978 specifically bans money circulation schemes  including WhatsApp money chain variants  with imprisonment up to three years.", urgent: false },
];

// ── Reporting Steps ───────────────────────────────────────────────────────────
const reportingSteps = [
    { step: "01", color: "from-red-500 to-rose-600", title: "Call 1930  National Cyber Crime Financial Helpline (If Money Was Transferred)", desc: "The 1930 helpline operates 24/7 and can initiate an account freeze request on the destination account within minutes. Call 1930 immediately if you transferred any money to a fake trading platform, ponzi scheme operator, or investment scammer. Provide: the UPI ID or bank account you paid, the amount, the time of transfer, and the platform name. Even for wire transfers, 1930 can coordinate with banks to attempt recovery within the golden window.", urgent: true },
    { step: "02", color: "from-orange-500 to-amber-600", title: "File on SEBI SCORES Portal + cybercrime.gov.in in Parallel", desc: "File your complaint on two portals simultaneously: (1) SEBI SCORES portal at scores.sebi.gov.in for investment fraud complaints against SEBI-regulated entities and illegal schemes claiming SEBI registration. (2) cybercrime.gov.in under 'Financial Cyber Fraud' for investment fraud involving digital platforms or apps. Both portals generate case reference numbers within 24 hours.", urgent: true },
    { step: "03", color: "from-blue-500 to-indigo-600", title: "Report the Platform to RakshaAI", desc: "Report the fraudulent trading platform, investment scheme, or broker at rakshaai.co/report-a-scam/. Your report appears in search results for the platform's name and phone number within 4–6 hours, preventing other Indians from losing money to the same scheme. Also verify the platform using RakshaAI's Website Safety Checker  the result can be preserved as evidence for your cybercrime complaint.", urgent: false },
    { step: "04", color: "from-violet-500 to-purple-600", title: "Contact Your Bank for Chargeback / Reversal", desc: "Under RBI Guidelines on Customer Protection (Circular RBI/2017-18/15), banks can initiate chargebacks for fraudulent transactions if reported within 3 days. For UPI transactions, raise a dispute immediately through your bank's app. For NEFT/RTGS/IMPS transfers, contact your bank's fraud team with your cybercrime.gov.in reference number  this activates a formal investigation protocol. Recovery probability is highest within the first 48 hours.", urgent: false },
    { step: "05", color: "from-teal-500 to-emerald-600", title: "File an FIR with Securities and Cybercrime Details", desc: "File a physical FIR at your nearest cybercrime police station with all evidence: platform screenshots, payment records, communication records, SEBI SCORES reference, and cybercrime.gov.in reference. Investment fraud violations include: SEBI Act 1992, PFUTP Regulations 2003, Prize Chits and Money Circulation Schemes (Banning) Act 1978, IT Act 2000 Sections 66C and 66D, and IPC Sections 420 and 406. For large amounts, the Enforcement Directorate handles cases involving money laundering.", urgent: false },
];

// ── FAQs ──────────────────────────────────────────────────────────────────────
const faqs = [
    {
        q: "What are the most common types of investment scams in India in 2026?",
        a: "The seven most common investment fraud types in India in 2026: (1) Fake trading apps  34% of all investment fraud complaints, fake SEBI-mimicking platforms. (2) Ponzi scheme india  22%, fixed return promises paid from new investor deposits. (3) Pyramid scheme india / MLM  18%, income from recruitment not real returns. (4) Pig butchering scam india  10% of cases but highest per-victim losses at ₹18.5 lakh average. (5) Binary options scam india  6%, SEBI-banned in 2017 but still operating via Telegram. (6) Forex scam india  6%, unregulated currency trading platforms. (7) Pump and dump india  4%, penny stock manipulation. NCRB 2025 recorded 1.8 lakh investment fraud complaints with total losses exceeding ₹22,845 crore.",
    },
    {
        q: "How do I check if a trading platform or investment company is legitimate?",
        a: "How to check if an investment company is real in India: (1) Search the company name on SEBI's SIIP portal at sebi.gov.in  all authorised brokers, investment advisors, and mutual fund companies are listed. (2) Verify the SEBI registration number provided by the company independently on the same portal. (3) Check the platform's website using RakshaAI's Website Safety Checker  which cross-references SEBI's investor alert list. (4) Search the company name on SEBI SCORES portal to see if any investor complaints have been filed. Fake SEBI registration documents are verifiable  the registration number will not match any real entity in the SEBI database.",
    },
    {
        q: "What is a ponzi scheme and how do they operate in India?",
        a: "A ponzi scheme is a fraudulent investment operation where the operator collects money from investors promising fixed returns  but no real investment takes place. Returns are paid to early investors from the deposits of new investors. India's biggest ponzi schemes include Saradha Chit Fund (₹2,500 crore, 1.7 crore victims), Rose Valley (₹17,000 crore), and NSEL (₹5,600 crore). All ponzi schemes collapse mathematically when new investment cannot cover redemption requests. Prosecution is under IPC Section 420, SEBI Act 1992, and PFUTP Regulations 2003.",
    },
    {
        q: "What is the difference between a ponzi scheme and a pyramid scheme?",
        a: "Ponzi vs pyramid: (1) Ponzi scheme  Victims invest money with an operator who promises returns from 'investment activities.' No recruiting required. Returns paid from new investor deposits. The operator controls all the money. (2) Pyramid scheme  Participants earn by recruiting new members, not from investment returns. Each participant recruits multiple people who each recruit more. Both are illegal in India  ponzi schemes under SEBI Act 1992 and IPC 420; pyramid schemes under the Prize Chits and Money Circulation Schemes (Banning) Act 1978.",
    },
    {
        q: "Do banks refund money lost to investment scams in India?",
        a: "Under RBI Circular RBI/2017-18/15, banks are liable for fraudulent transactions if reported within 3 working days  zero liability to the customer. For UPI transactions, raise an immediate dispute through your bank's app. For NEFT/RTGS, contact the fraud team with your cybercrime.gov.in reference number within 24 hours. Recovery probability is approximately 40% within 48 hours, dropping to under 10% after 7 days.",
    },
    {
        q: "How does a fake trading app scam work in India?",
        a: "Fake trading app scams follow this 7-step pattern: (1) Recruitment via Telegram/WhatsApp investment tip group. (2) Introduction to a 'high-return' trading platform with convincing UI. (3) Platform shows real-time 'profits' accumulating in your portfolio. (4) Small initial withdrawals processed to build confidence. (5) After larger deposits, withdrawal requests are blocked. (6) 'Tax deposits' or 'compliance fees' demanded before funds can be released. (7) After payment, platform goes offline. How to spot: not listed on sebi.gov.in, shows guaranteed returns, recruited via social media tip group, cannot withdraw without fees.",
    },
    {
        q: "What are binary options scams and why is binary trading illegal in India?",
        a: "Binary options trading was banned by SEBI in 2017 under SEBI Act 1992 because binary options are not securities and their trading characteristics make them effectively gambling instruments. All platforms offering binary options trading in India are operating illegally. Binary options scammers typically operate via Telegram 'trading tip' groups directing victims to offshore binary options platforms. Outcomes are predetermined by the operator. File complaints at cybercrime.gov.in and SEBI SCORES portal.",
    },
    {
        q: "How do pump and dump schemes work in India?",
        a: "Pump and dump schemes target illiquid penny stocks on NSE/BSE. Operators: (1) Accumulate a large position in a low-volume penny stock at low prices. (2) Create a Telegram/WhatsApp group promoting the stock as a 'hot tip' with fabricated research reports. (3) Retail investors buy in  demand drives the price up sharply. (4) Operators dump their entire position at the peak, crashing the price. (5) Retail investors are left with worthless shares. Red flags: unsolicited stock tips via messaging apps, sudden sharp price increases in obscure stocks, 'limited time' urgency messaging.",
    },
    {
        q: "What is the pig butchering scam and how does it target Indian investors?",
        a: "Pig butchering scam is the most sophisticated investment fraud type. Phase 1: Scammer builds a genuine relationship (romantic or friendship-based) over weeks. Phase 2: They introduce a 'highly profitable' crypto or forex trading platform they personally use. Phase 3: Victim is shown growing portfolio returns and encouraged to invest more. Phase 4: When attempting large withdrawals, the platform freezes funds and demands 'tax deposits.' Phase 5: Both the relationship and platform disappear. India-specific pig butchering operations increasingly target professionals on LinkedIn. Average loss in India: ₹18.5 lakh.",
    },
    {
        q: "How do I report an investment scam to SEBI in India?",
        a: "How to report investment fraud in India: (1) Call 1930 immediately if money was transferred  24/7 helpline that can freeze destination accounts in the golden window. (2) File on SEBI SCORES portal at scores.sebi.gov.in for complaints against SEBI-regulated entities or illegal investment schemes claiming SEBI registration. (3) File on cybercrime.gov.in under 'Financial Cyber Fraud.' (4) Contact your bank within 24–48 hours to raise a fraud dispute under RBI Circular RBI/2017-18/15. (5) File a physical FIR with all evidence. (6) Report at rakshaai.co/report-a-scam/ to warn other Indians.",
    },
];

// ─────────────────────────────────────────────────────────────────────────────
export default function InvestmentScamsPage() {
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
                dangerouslySetInnerHTML={{ __html: jsonLd(definedTermData) }}
            />

            <main className="min-h-screen">

                {/* ── Hero ─────────────────────────────────────────────────── */}
                <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 pt-20 pb-24 px-4">
                    <div className="pointer-events-none absolute inset-0 -z-10">
                        <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl animate-pulse" />
                        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-300/10 rounded-full blur-3xl animate-pulse delay-700" />
                        <div className="absolute top-1/2 right-0 w-64 h-64 bg-violet-300/10 rounded-full blur-3xl animate-pulse delay-1000" />
                    </div>

                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-6 border border-blue-200 dark:border-blue-800 shadow-sm">
                            <BarChart2 className="h-4 w-4 animate-pulse" />
                            2025 NCRB Data · 1.8 Lakh Complaints · Updated April 2026
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
                            Investment Scams in India 2026:{" "}
                            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                                7 Types, Ponzi Schemes & How to Report
                            </span>
                        </h1>

                        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-4 leading-relaxed">
                            Investment fraud is the single largest category of financial cybercrime in India. A ponzi scheme, fake trading app, pyramid scheme, or pig butchering scam all share one feature: they show you profits you can never access, then disappear with your savings.
                        </p>
                        <p className="text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-4 leading-relaxed">
                            In 2025, NCRB recorded <strong>1.8 lakh investment fraud complaints</strong>  equivalent to 493 new victims every single day. Total financial cybercrime losses reached <strong>₹22,845 crore</strong> with investment fraud dominating. SEBI issued 850 enforcement orders and warnings in 2025–26. Less than 5% of victims recover the full amount.
                        </p>
                        <p className="text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
                            This page covers all 7 confirmed investment fraud types active in India in 2026  how each operates, how to spot them before you invest, how to protect yourself, and how to report if you've been targeted.
                        </p>

                        {/* Website Safety Checker CTA */}
                        <div className="max-w-lg mx-auto mb-10 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 p-5 text-left">
                            <p className="text-xs font-bold text-amber-700 dark:text-amber-300 uppercase tracking-wide mb-1">Suspicious Investment Platform?</p>
                            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">Verify any trading platform or investment website against SEBI's investor alert list before you deposit a single rupee.</p>
                            <Link
                                href="/website-safety-checker/"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm transition-colors"
                            >
                                <Shield className="h-4 w-4" />
                                Check Website Safety Free
                                <ArrowRight className="h-3 w-3" />
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            {[
                                { value: "1.8 Lakh", label: "Investment Fraud Complaints (NCRB 2025)", icon: <AlertTriangle className="h-4 w-4" /> },
                                { value: "₹22,845 Cr", label: "Total Financial Cybercrime Losses 2025", icon: <IndianRupee className="h-4 w-4" /> },
                                { value: "+68%", label: "YoY Growth in Investment Fraud Cases", icon: <TrendingUp className="h-4 w-4" /> },
                                { value: "<5%", label: "Victims Recover Full Amount", icon: <Phone className="h-4 w-4" /> },
                            ].map(({ value, label, icon }, i) => (
                                <div
                                    key={label}
                                    className="group flex flex-col items-center px-6 py-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 min-w-[130px]"
                                    style={{ animationDelay: `${i * 100}ms` }}
                                >
                                    <div className="text-blue-500 mb-1 group-hover:scale-110 transition-transform">{icon}</div>
                                    <span className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{value}</span>
                                    <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-center">{label}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <ReportScamButton className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold text-sm shadow-lg hover:shadow-blue-300/50 hover:scale-105 transition-all duration-300 cursor-pointer">
                                <ShieldAlert className="h-5 w-5" />
                                Report Investment Fraud
                                <ArrowRight className="h-4 w-4" />
                            </ReportScamButton>
                            <a
                                href="#scam-types"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 font-semibold text-sm border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
                            >
                                See 7 Types of Investment Scams
                                <ChevronDown className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </section>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
 {/* ── Investment Fraud Scale + Image ───────────────────── */}
                    <section aria-labelledby="inv-scale-heading">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                                    Official 2025 / 2026 Data
                                </span>
                                <h2
                                    id="inv-scale-heading"
                                    className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-2 mb-4"
                                >
                                    Investment Fraud Scale in India  2025 / 2026 Data
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                    Investment fraud is now India's single largest financial cybercrime category. NCRB 2025 data shows 1.8 lakh complaints  up 68% year-on-year  with total losses reaching ₹22,845 crore. Fake trading apps account for 34% of all complaints. Less than 5% of victims recover the full amount lost.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { label: "Investment fraud complaints (NCRB 2025)", value: "1.8 Lakh", color: "from-blue-500 to-indigo-600" },
                                        { label: "Total financial cybercrime losses 2025", value: "₹22,845 Cr", color: "from-rose-500 to-pink-600" },
                                        { label: "Year-on-year growth in investment fraud", value: "+68%", color: "from-orange-500 to-amber-600" },
                                        { label: "Victims who recover the full amount", value: "< 5%", color: "from-red-500 to-rose-600" },
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
                                    alt="Indian woman examining a suspicious investment scam call  how to identify fake trading app fraud, Ponzi schemes, and WhatsApp investment groups in India, RakshaAI"
                                    title="How to Identify Investment Scam Calls and Fake Trading Apps in India | RakshaAI"
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
                            <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-semibold mb-4">
                                Know Every Variant
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                7 Types of Investment Scams in India 2026  Complete Guide
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-base">
                                Each operates through a different mechanism  but every one promises returns that are mathematically impossible and ultimately steals your savings.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-5">
                            {scamTypes.map(({ emoji, title, desc, risk, riskColor, href }) => (
                                <Link
                                    key={href}
                                    href={'/'}
                                    className="group flex flex-col gap-3 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300"
                                >
                                    <div className="flex items-start justify-between gap-3">
                                        <span className="text-3xl leading-none">{emoji}</span>
                                        <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${riskColor}`}>
                                            Risk: {risk}
                                        </span>
                                    </div>
                                    <h3 className="font-bold text-gray-900 dark:text-white text-base leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{title}</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
                                    <div className="flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 mt-auto pt-1">
                                        Full Guide <ArrowRight className="h-3 w-3" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
{/* ── How Investment Scams Work ─────────────────────────── */}
                    <section aria-labelledby="how-it-works-heading">
                        <div className="mb-10">
                            <span className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-4">
                                The Fraud Playbook
                            </span>
                            <h2 id="how-it-works-heading" className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 leading-snug">
                                How Investment Scams Work in India  The Fraud Playbook
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 max-w-3xl text-base leading-relaxed">
                                Every investment fraud in India  whether a ponzi scheme, fake trading app, pyramid scheme, or pig butchering scam  follows the same underlying architecture. Understanding this framework lets you recognise any variant before you lose a rupee.
                            </p>
                        </div>

                        <div className="space-y-10">
                            {/* H3: Ponzi vs Pyramid */}
                            <div className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-8">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                    What Is the Difference Between a Ponzi Scheme and a Pyramid Scheme?
                                </h3>
                                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                                    <div className="rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-100 dark:border-red-900 p-5">
                                        <p className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wide mb-2">📉 Ponzi Scheme</p>
                                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Operator collects investor deposits and promises fixed returns from 'investment activities'  but no real investment occurs. Early investors are paid from new investors' deposits. No recruiting required. The operator controls all the money. <strong>India examples:</strong> Saradha Chit Fund (₹2,500 Cr), Rose Valley (₹17,000 Cr), NSEL (₹5,600 Cr).</p>
                                    </div>
                                    <div className="rounded-xl bg-orange-50 dark:bg-orange-950/30 border border-orange-100 dark:border-orange-900 p-5">
                                        <p className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wide mb-2">🔺 Pyramid Scheme</p>
                                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Participants earn primarily by recruiting new members, not from selling real products or generating real returns. Each recruit must recruit more. The top 1–2% profit; 98% lose money. <strong>India examples:</strong> MLM chains, WhatsApp money chains, network marketing scams in tier-2 cities.</p>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                                    <strong>Key similarity:</strong> Both are mathematically guaranteed to collapse. Both are illegal in India  ponzi schemes under <strong>SEBI Act 1992</strong> and <strong>IPC Section 420</strong>; pyramid schemes under the <strong>Prize Chits and Money Circulation Schemes (Banning) Act, 1978</strong>.
                                </p>
                            </div>

                            {/* H3: Securities Fraud */}
                            <div className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-8">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                    What Is Securities Fraud? (SEBI Definition for India)
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                                    Under the <strong>SEBI (Prohibition of Fraudulent and Unfair Trade Practices) Regulations, 2003</strong> (PFUTP Regulations), securities fraud in India covers: fake trading platforms mimicking SEBI-registered brokers, pump-and-dump penny stock manipulation, fake Collective Investment Schemes (CIS), and impersonation of SEBI-registered entities.
                                </p>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                    SEBI penalties include fines up to <strong>₹25 crore or three times the profits</strong> from the fraud, plus criminal imprisonment under IPC Section 420. The Enforcement Directorate handles cases involving money laundering proceeds under PMLA.
                                </p>
                            </div>

                            {/* H3: Stage 1 */}
                            <div className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-8">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                    Stage 1  The Promise: Guaranteed Returns and FOMO Manufacturing
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                                    Investment fraud always begins with a guaranteed return promise  typically 2–5% per month (24–60% annually)  delivered through Telegram/WhatsApp groups, fake referral networks, or LinkedIn romance contacts. The promise is backed by fabricated SEBI registration certificates, doctored RBI licence documents, and manufactured testimonials from 'existing investors.'
                                </p>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                    FOMO is manufactured deliberately: limited-time IPO windows, exclusive VIP group invitations, and 'only 3 spots remaining' urgency messaging. This compressed decision-making window prevents the victim from verifying the platform on sebi.gov.in before depositing.
                                </p>
                            </div>

                            {/* H3: Stage 2 */}
                            <div className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-8">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                    Stage 2  Trust Building: Small Wins, Fake Profits, and Platform Addiction
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                                    Early withdrawals are processed without obstruction  this is intentional. Allowing the victim to withdraw a small profit (₹2,000–₹10,000) converts scepticism into conviction. The victim increases their deposit. The fake trading platform shows an ever-growing portfolio balance  built entirely from database entries, not real trades.
                                </p>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                    The pattern across documented cases: victims deposit 5–7x their initial amount before the withdrawal block occurs. This is because repeated small wins trigger the same dopamine response as gambling  and the scammers have studied this. The <strong>sunk cost effect</strong> keeps victims investing more after each small win.
                                </p>
                            </div>

                            {/* H3: Stage 3 */}
                            <div className="rounded-2xl border border-red-100 dark:border-red-900 bg-red-50 dark:bg-red-950/20 p-8">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                    Stage 3  The Trap: Withdrawal Blocks, Tax Demands, and Disappearance
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                                    When the victim attempts to withdraw a large amount, the platform generates a technical obstruction  'KYC verification required,' 'account under compliance review,' 'RBI tax hold on large withdrawals.' The next demand: a 20–30% 'tax deposit' or 'clearance fee' must be paid before the withdrawal can be released.
                                </p>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                    This second theft can equal or exceed the original deposit. After the victim pays, the excuses multiply  additional compliance fees, exchange rate lock-in charges, SEBI verification deposits. Eventually, the platform goes offline, the Telegram/WhatsApp groups are deleted, and the operator's phone numbers stop responding. The fake trading app disappears from any download source.
                                </p>
                            </div>
                        </div>
                    </section>
                    {/* ── How the Fake App Scam Unfolds ────────────────────── */}
                    <section>
                        <div className="text-center mb-12">
                            <span className="inline-block px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs font-semibold mb-4">
                                Step by Step
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                The 3-Stage Investment Fraud Playbook
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-base">
                                This is India's fastest-growing investment fraud format. Understanding the exact script
                                protects you from every variation of it.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="hidden sm:block absolute left-[27px] top-10 bottom-10 w-0.5 bg-gradient-to-b from-blue-300 via-red-300 to-gray-300 dark:from-blue-800 dark:via-red-800 dark:to-gray-800" />
                            <div className="space-y-5">
                                {fakeAppSteps.map(({ step, color, bg, border, title, desc, urgent }) => (
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
                                                        TRAP CLOSES HERE
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Inline Website Safety Checker CTA */}
                        <div className="mt-10 rounded-2xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div>
                                <p className="font-bold text-gray-900 dark:text-white mb-1">Suspicious Investment Platform? Verify It Before You Deposit.</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Check website age, blacklist status, and SEBI alert list in seconds  free.</p>
                            </div>
                            <Link
                                href="/website-safety-checker/"
                                className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-colors whitespace-nowrap"
                            >
                                <Shield className="h-4 w-4" />
                                Check Website Safety Free
                                <ArrowRight className="h-3 w-3" />
                            </Link>
                        </div>
                    </section>

                    {/* ── Real Story ────────────────────────────────────────── */}
                    <section className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8 sm:p-12 border border-gray-100 dark:border-gray-800">
                        <span className="inline-block px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 text-xs font-semibold mb-4">
                            It Could Be Anyone
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
                            "I Invested My Retirement Savings. I Thought I Was Finally Getting Ahead."  A Real Account
                        </h2>
                        <div className="grid lg:grid-cols-2 gap-8 text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                            <div className="space-y-4">
                                <p>
                                    Ramesh (name changed), a 58-year-old government employee from Hyderabad, received
                                    a WhatsApp message that appeared to come from a wrong number  a young woman
                                    who apologised warmly and started a friendly conversation. Over two weeks, she
                                    mentioned her uncle who was a 'certified stock analyst' and had helped her triple
                                    her savings in eight months.
                                </p>
                                <p>
                                    He was invited to a Telegram group with 340 members. Every morning, the 'analyst'
                                    posted trade calls. Members shared screenshots of profits  ₹40,000 here, ₹1.2 lakh
                                    there. Ramesh joined with ₹50,000. Three days later, following the group's advice
                                    on the provided app, his portfolio showed ₹78,000. He could see it clearly on screen.
                                </p>
                                <p>
                                    Over the next six weeks, guided by the group, he invested a total of ₹23 lakh 
                                    including ₹14 lakh from his PF savings that he'd planned for retirement.
                                    His on-screen portfolio showed ₹41 lakh.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <p>
                                    When he tried to withdraw ₹5 lakh for a family medical emergency, he received a
                                    message: "Your account has been flagged for income tax verification. Please deposit
                                    18% tax clearance  ₹7.38 lakh  to activate withdrawal."
                                </p>
                                <p>
                                    His son, scrolling through the app's Play Store listing, noticed it had been
                                    published 11 weeks ago with 12 reviews and a developer located in "Hong Kong".
                                    The official app of the broker they claimed to represent had 4.7 stars and 2 lakh
                                    reviews. Ramesh's app was a clone.
                                </p>
                                <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border border-rose-200 dark:border-rose-800">
                                    <p className="text-sm font-bold text-rose-700 dark:text-rose-300 mb-2">The Lesson:</p>
                                    <p className="text-sm text-gray-700 dark:text-gray-300">
                                        The profits you see in a fake trading app are a fiction  numbers in a database
                                        the scammer controls. No real trade has occurred. The moment you have to pay
                                        to access your own money, you already know the truth.
                                        <strong className="text-gray-900 dark:text-white"> Never pay a withdrawal fee.</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ── Ponzi Deep Dive ───────────────────────────────────── */}
                    <section className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-2xl p-8 sm:p-12 border border-emerald-100 dark:border-emerald-900">
                        <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 text-xs font-semibold mb-4">
                            Deep Dive
                        </span>
                        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6">
                            How a Ponzi Scheme Actually Works  And Why It Always Collapses
                        </h2>
                        <div className="grid lg:grid-cols-2 gap-8 text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                            <div className="space-y-4">
                                <p>
                                    Charles Ponzi ran his original scheme in 1920. Every Indian Ponzi fraud since 
                                    from the chit fund scandals of the 1980s to the multi-thousand-crore schemes
                                    exposed in 2022 and 2023  follows the identical mathematical structure.
                                </p>
                                <p>
                                    Month one: 100 investors put in ₹1 lakh each = ₹1 crore raised.
                                    The scheme promises 5% monthly returns. Month two: ₹5 lakh is paid out in
                                    'profits' to the first wave. The remaining ₹95 lakh is used to recruit more
                                    investors. But now month two's 'profit' obligation requires a new wave.
                                    The scheme demands geometric growth forever  which is mathematically impossible.
                                </p>
                                <p>
                                    The scheme works and looks profitable precisely as long as more money flows
                                    in than flows out. The moment growth slows  usually when market saturation
                                    hits or regulatory attention draws near  the founder must choose between
                                    a visible collapse and a quiet disappearance. They always choose to disappear.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <p>
                                    India's most notable recent Ponzi cases  IMA Jewels (₹2,000+ crore),
                                    Vihaan Direct Selling, and dozens of smaller crypto-adjacent schemes 
                                    all shared the same lifecycle: explosive early growth, impressive testimonials,
                                    legitimate-seeming office spaces and websites, then sudden total collapse.
                                </p>
                                <div className="grid grid-cols-1 gap-3 mt-2">
                                    {[
                                        { label: "Phase 1: Founding", desc: "Operator collects initial investments, pays generous early returns from capital" },
                                        { label: "Phase 2: Expansion", desc: "Word of mouth and referrals drive growth; early investors become unpaid recruiters" },
                                        { label: "Phase 3: Peak", desc: "Huge investor base; operator diverts funds to personal accounts abroad" },
                                        { label: "Phase 4: Collapse", desc: "Growth stalls; withdrawal requests exceed new money; operator disappears or is arrested" },
                                    ].map(({ label, desc }) => (
                                        <div key={label} className="flex items-start gap-3 p-3 bg-white dark:bg-gray-900 rounded-xl border border-emerald-100 dark:border-emerald-900 text-sm">
                                            <span className="font-bold text-emerald-700 dark:text-emerald-300 min-w-[80px] flex-shrink-0">{label}</span>
                                            <span className="text-gray-600 dark:text-gray-400">{desc}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ── Red Flags ─────────────────────────────────────────── */}
                    <section>
                        <div className="text-center mb-12">
                            <span className="inline-block px-3 py-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-xs font-semibold mb-4">
                                🚨 Stop. These Are Confirmed Investment Scam Red Flags.
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                8 Investment Scam Warning Signs You Must Never Ignore
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-base">
                                Even one of these signs means stop, step back, and verify independently on sebi.gov.in before investing a single rupee.
                            </p>
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

                    {/* ── SEBI Verification vs Fake Platform: Split Section ── */}
                    <section
                        aria-labelledby="legit-vs-fake-heading"
                        className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-lg lg:min-h-[520px]"
                    >
                        {/* LEFT  content */}
                        <div className="p-8 sm:p-10 bg-white dark:bg-gray-900 flex flex-col justify-center">
                            <span className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-4 self-start">
                                Quick Reference
                            </span>
                            <h2
                                id="legit-vs-fake-heading"
                                className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-6 leading-snug"
                            >
                                Legitimate SEBI-Registered Broker vs. Fake Trading App
                            </h2>
                            <div className="space-y-3 mb-6">
                                <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-xl border border-green-200 dark:border-green-900">
                                    <p className="text-xs font-bold text-green-700 dark:text-green-400 mb-2 uppercase tracking-wide">
                                        Legitimate SEBI-Registered Broker
                                    </p>
                                    <ul className="space-y-1.5 text-sm text-gray-700 dark:text-gray-300">
                                        {[
                                            "Listed on sebi.gov.in Intermediaries  verifiable in 60 seconds",
                                            "Available on official Google Play Store and Apple App Store",
                                            "Withdrawals processed within 1–3 business days, no fee",
                                            "Returns vary  never guaranteed, never 2–5% daily",
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
                                        Fake Trading App
                                    </p>
                                    <ul className="space-y-1.5 text-sm text-gray-700 dark:text-gray-300">
                                        {[
                                            "Not on SEBI list  APK shared via WhatsApp or Telegram",
                                            "Withdrawals blocked until you pay a \"tax\" or \"unlock fee\"",
                                            "Promises guaranteed daily returns of 2–5%",
                                            "Recruited by a stranger through a \"wrong number\" message",
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
                                    The 60-Second Rule
                                </p>
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    Before investing a single rupee, search the platform on sebi.gov.in → Intermediaries.
                                    If they don't appear, they are operating illegally  do not invest.
                                </p>
                            </div>
                        </div>
                        {/* RIGHT  full-height image */}
                        <div className="relative h-full min-h-[400px] overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-indigo-600 to-violet-600" />
                            <Image
                                src="/image/upi-payment-verification-security-check-rakshaai.jpg"
                                alt="UPI payment and investment verification security check  how to verify a legitimate SEBI registered trading platform versus a fake investment app in India, RakshaAI"
                                title="Investment Platform Verification  SEBI Check Before You Invest | RakshaAI"
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                    </section>

                    {/* ── The Psychology ────────────────────────────────────── */}
                    <section className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950/50 dark:to-blue-950/30 rounded-2xl p-8 sm:p-12 border border-slate-100 dark:border-slate-800">
                        <span className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-4">
                            The Psychology of Loss
                        </span>
                        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6">
                            Why Smart, Educated People Keep Falling for Investment Scams
                        </h2>
                        <div className="grid lg:grid-cols-2 gap-8 text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                            <div className="space-y-4">
                                <p>
                                    The overwhelming majority of investment fraud victims in India are not financially
                                    illiterate. They are often salaried professionals, retired government officers,
                                    small business owners  people who have managed money carefully their whole lives.
                                    Understanding why this is the case is deeply counterintuitive.
                                </p>
                                <p>
                                    First comes <strong className="text-gray-900 dark:text-white">social proof</strong>. Investment scams rarely approach
                                    you cold with an offer  they first show you other people succeeding. Screenshots,
                                    testimonials, group members sharing profits. Your brain reads this as evidence.
                                </p>
                                <p>
                                    Then comes <strong className="text-gray-900 dark:text-white">the sunk cost trap</strong>. Once you've invested ₹50,000
                                    and your portfolio shows ₹75,000, you feel heavily invested  emotionally and
                                    financially. Each escalation feels less like a new risk and more like protecting
                                    existing gains.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <p>
                                    Perhaps most insidiously, many investment scams use a technique called
                                    <strong className="text-gray-900 dark:text-white"> 'romance baiting'</strong>  building a genuine emotional
                                    connection over weeks before introducing the investment. This creates a loyalty
                                    that overrides financial judgement. Victims often describe knowing something felt
                                    wrong but not wanting to disappoint a person they'd come to trust.
                                </p>
                                <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border border-blue-200 dark:border-blue-800">
                                    <p className="text-sm font-bold text-blue-700 dark:text-blue-300 mb-1">
                                        The SEBI Check  60 Seconds That Can Save Lakhs:
                                    </p>
                                    <p className="text-sm text-gray-700 dark:text-gray-300">
                                        Before investing with any platform or advisor, search their name on
                                        sebi.gov.in → Intermediaries. If they don't appear, they are operating
                                        illegally. Close the app, block the contact, report to 1930.
                                    </p>
                                </div>
                                <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border border-blue-200 dark:border-blue-800">
                                    <p className="text-sm font-bold text-blue-700 dark:text-blue-300 mb-1">
                                        The Maths Check  5 Seconds That Can Save Lakhs:
                                    </p>
                                    <p className="text-sm text-gray-700 dark:text-gray-300">
                                        Promised daily return × 365 = annual return. If the answer exceeds 50%, you're
                                        looking at fraud. 3% daily = 1,095% annually. No market on earth
                                        delivers this. Warren Buffett's lifetime average is 20% per year.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ── Myth vs Reality ───────────────────────────────────── */}
                    <section>
                        <div className="text-center mb-12">
                            <span className="inline-block px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-xs font-semibold mb-4">
                                Myth Busting
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                Investment Fraud Myths vs. Reality
                            </h2>
                        </div>
                        <div className="space-y-4">
                            {[
                                {
                                    myth: "The profits showing in my account are real  I can see them clearly.",
                                    fact: "The balance displayed in a fake trading app is a number the scammer types into a database. No real trades occur. The real test is whether you can withdraw. If any obstruction appears at withdrawal, the profits were never real.",
                                },
                                {
                                    myth: "I was added to a group by a mistake or coincidence  the investment tips were genuine.",
                                    fact: "The 'wrong number' introduction is one of the most documented investment scam entry tactics in India. There are no coincidences here. The group, the analyst, the other 'members' posting profits  all are part of an orchestrated operation.",
                                },
                                {
                                    myth: "The platform must be legitimate  it showed me a SEBI certificate and company registration.",
                                    fact: "SEBI certificates can be faked in minutes with image editing software. Always verify directly on sebi.gov.in  not based on any document the platform shows you. A displayed certificate is not verification.",
                                },
                                {
                                    myth: "If I pay the withdrawal fee/tax, I'll finally get my money back.",
                                    fact: "Every 'clearance fee' paid goes directly to the fraudsters, with zero chance of unlocking any withdrawal. In most documented cases, additional fees are demanded after each payment. The only correct response is to stop paying immediately.",
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

                    {/* ── How to Protect Yourself  5 Rules ────────────────── */}
                    <section>
                        <div className="text-center mb-12">
                            <span className="inline-block px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-semibold mb-4">
                                Prevention First
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                How to Protect Yourself from Investment Scams  5 Rules
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-base">
                                Apply these five rules before depositing any money on an investment platform and you will never fall victim to any variant of investment fraud in India.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="relative w-full rounded-2xl overflow-hidden mb-8 shadow-md">
                                <Image
                                    src="/image/upi-scam-recovery-5-steps-emergency-guide-india.jpg"
                                    alt="How to protect yourself from investment scams in India  5 rules: verify SEBI registry, never invest from WhatsApp tips, test withdrawal, understand guaranteed returns, recognise pyramid scheme recruiting trap, RakshaAI"
                                    title="How to Protect Yourself from Investment Scams India  5 Rules | RakshaAI"
                                    width={1200}
                                    height={480}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            <div className="hidden sm:block absolute left-[27px] top-10 bottom-10 w-0.5 bg-gradient-to-b from-green-300 via-blue-300 to-indigo-300 dark:from-green-800 dark:via-blue-800 dark:to-indigo-800" />
                            <div className="space-y-5">
                                {whatToDo.map(({ step, title, desc, urgent }) => (
                                    <div key={step} className="relative flex gap-6 items-start">
                                        <div className={`relative z-10 flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-white font-extrabold text-sm shadow-lg ${urgent ? "bg-gradient-to-br from-red-500 to-rose-600" : "bg-gradient-to-br from-blue-500 to-indigo-600"}`}>
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
                    </section>

                    {/* ── How to Report Investment Fraud ────────────────────── */}
                    <section>
                        <div className="text-center mb-12">
                            <span className="inline-block px-3 py-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-xs font-semibold mb-4">
                                If You&apos;ve Been Targeted
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                How to Report Investment Fraud in India  Step by Step
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-base">
                                Speed is critical. Every hour matters for freezing fraudulent accounts and recovering funds.
                            </p>
                        </div>
                        <div className="space-y-5 mb-10">
                            {reportingSteps.map(({ step, color, title, desc, urgent }) => (
                                <div key={step} className="relative flex gap-6 items-start">
                                    <div className={`relative z-10 flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-white font-extrabold text-sm shadow-lg bg-gradient-to-br ${color}`}>
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
                        <div className="rounded-2xl border border-blue-100 dark:border-blue-900 bg-blue-50 dark:bg-blue-950/20 p-6">
                            <h3 className="font-bold text-gray-900 dark:text-white mb-4 text-lg">Recovery Timeline After Investment Fraud</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                {[
                                    { time: "Within 30 min", desc: "Call 1930  highest probability of account freeze", color: "from-green-500 to-emerald-600" },
                                    { time: "Within 24 hrs", desc: "~40% recovery probability via bank chargeback + SEBI SCORES", color: "from-blue-500 to-indigo-600" },
                                    { time: "Within 7 days", desc: "File FIR + cybercrime.gov.in  case formally opened", color: "from-orange-500 to-amber-600" },
                                    { time: "After 7 days", desc: "Recovery drops below 10%  ED involvement for laundering cases", color: "from-red-500 to-rose-600" },
                                ].map(({ time, desc, color }) => (
                                    <div key={time} className="text-center p-4 rounded-xl bg-white dark:bg-gray-900 border border-blue-100 dark:border-blue-900">
                                        <div className={`text-sm font-extrabold bg-gradient-to-r ${color} bg-clip-text text-transparent mb-2`}>{time}</div>
                                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ── SEBI & Official Resources ─────────────────────────── */}
                    <section className="rounded-2xl overflow-hidden border border-blue-100 dark:border-blue-900">
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                                    <BadgeCheck className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-extrabold text-white">Official Verification Resources</h2>
                                    <p className="text-blue-100 text-sm">Use these before investing with any platform or advisor</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-blue-50 dark:bg-blue-950/30 p-8">
                            <div className="grid sm:grid-cols-2 gap-6">
                                {[
                                    {
                                        label: "SEBI Registered Intermediaries",
                                        url: "sebi.gov.in",
                                        desc: "Verify brokers, advisors, mutual fund distributors, and portfolio managers",
                                    },
                                    {
                                        label: "SEBI Complaints (SCORES)",
                                        url: "scores.sebi.gov.in",
                                        desc: "File formal complaints against unregistered or fraudulent investment platforms",
                                    },
                                    {
                                        label: "Cyber Crime Portal",
                                        url: "cybercrime.gov.in",
                                        desc: "Report investment fraud with transaction history and app evidence",
                                    },
                                    {
                                        label: "National Consumer Helpline",
                                        url: "1800-11-4000",
                                        desc: "Toll-free helpline for financial and consumer fraud complaints",
                                    },
                                    {
                                        label: "RBI Sachet Portal",
                                        url: "sachet.rbi.org.in",
                                        desc: "Report unauthorised deposit-taking schemes and Ponzi-style schemes",
                                    },
                                    {
                                        label: "Cyber Crime Helpline",
                                        url: "1930",
                                        desc: "Call immediately after a fraud to freeze destination bank accounts",
                                    },
                                ].map(({ label, url, desc }) => (
                                    <div key={label} className="flex items-start gap-3 p-4 bg-white dark:bg-gray-900 rounded-xl border border-blue-100 dark:border-blue-900">
                                        <CheckCircle2 className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-semibold text-gray-900 dark:text-white text-sm mb-0.5">{label}</p>
                                            <p className="text-xs font-mono text-blue-600 dark:text-blue-400 mb-1">{url}</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">{desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ── Investment Fraud Stats Table ──────────────────────── */}
                    <section>
                        <div className="mb-8">
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-2">
                                Investment Fraud in India  Complaint & Loss Data by Type (2025–26)
                            </h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Source: NCRB Cyber Crime Report 2025 / SEBI Enforcement Report 2025–26</p>
                        </div>
                        <div className="overflow-x-auto rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-gray-50 dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
                                        <th className="text-left px-5 py-3 font-bold text-gray-900 dark:text-white">Fraud Type</th>
                                        <th className="text-right px-5 py-3 font-bold text-gray-900 dark:text-white">% of Complaints</th>
                                        <th className="text-right px-5 py-3 font-bold text-gray-900 dark:text-white">Avg. Loss per Victim</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { type: "Fake Trading App India", pct: "34%", loss: "₹1,85,000" },
                                        { type: "Ponzi Scheme India", pct: "22%", loss: "₹3,40,000" },
                                        { type: "Pyramid Scheme / MLM", pct: "18%", loss: "₹65,000" },
                                        { type: "Pig Butchering Scam India", pct: "10%", loss: "₹18,50,000" },
                                        { type: "Binary Options Scam India", pct: "6%", loss: "₹1,20,000" },
                                        { type: "Forex Scam India", pct: "6%", loss: "₹1,80,000" },
                                        { type: "Pump and Dump India", pct: "4%", loss: "₹55,000" },
                                    ].map(({ type, pct, loss }, i) => (
                                        <tr key={type} className={`border-b border-gray-50 dark:border-gray-800 ${i % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50/50 dark:bg-gray-900/50"}`}>
                                            <td className="px-5 py-4 font-medium text-gray-900 dark:text-white">{type}</td>
                                            <td className="px-5 py-4 text-right text-gray-600 dark:text-gray-400">{pct}</td>
                                            <td className="px-5 py-4 text-right font-semibold text-red-600 dark:text-red-400">{loss}</td>
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
                                More Investment Fraud Guides for India
                            </h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Deep-dive guides for each specific investment fraud type active in India 2026.</p>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[
                                { title: "Stock Market Tip Scam India 2026: How Fake Tips Steal Your Money", href: "/blog/stock-market-tip-scam-india", emoji: "📉", desc: "How fraudsters pose as SEBI analysts on WhatsApp and Telegram to push pump-and-dump schemes and steal crores from retail investors." },
                                { title: "Crypto Investment Scam India 2026: Fake Apps & Rug Pulls", href: "/blog/crypto-investment-scam-india-2026", emoji: "📱", desc: "India's most common crypto fraud patterns in 2026  fake exchanges, celebrity deepfake ads, and Telegram investment groups." },
                                { title: "Telegram Task Scam India: Fake Jobs Stealing Money", href: "/blog/telegram-task-scam-india", emoji: "💬", desc: "How scammers recruit victims via Telegram for 'easy online tasks', extract initial earnings to build trust, then drain wallets." },
                                { title: "Fake Loan App India 2026: Illegal Lenders & Harassment Tactics", href: "/blog/fake-loan-app-india-2026", emoji: "📊", desc: "Unregulated lending apps that charge illegal fees, harvest contacts, and harass borrowers. How to identify RBI-registered lenders." },
                                { title: "AI Voice Cloning Scam India: When Criminals Clone Your Family", href: "/blog/ai-voice-cloning-scam-india", emoji: "🤖", desc: "Fraudsters clone voices of relatives to demand emergency money transfers. How the scam works and how to set a family code word." },
                                { title: "Got Scammed Online? Here's Exactly What to Do", href: "/blog/got-scammed-online-india-what-to-do", emoji: "✅", desc: "Step-by-step recovery guide  call 1930, freeze transactions, file on cybercrime.gov.in, and escalate to RBI Ombudsman." },
                            ].map(({ title, href, emoji, desc }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    className="group p-5 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-md hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-200"
                                >
                                    <span className="text-2xl mb-3 block">{emoji}</span>
                                    <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 leading-snug transition-colors">{title}</h3>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{desc}</p>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* ── FAQ ───────────────────────────────────────────────── */}
                    <section>
                        <div className="mb-10">
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-3">
                                Frequently Asked Questions About Investment Scams in India
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400">
                                Everything you need to know about investment fraud in India  answered plainly.
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

                    {/* ── Related Tools ─────────────────────────────────────── */}
                    <section>
                        <div className="mb-8">
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-2">
                                Free Tools to Protect Yourself from Investment Fraud in India
                            </h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Check any platform, phone number, or UPI ID for free before you invest.</p>
                        </div>
                        <div className="grid sm:grid-cols-3 gap-5">
                            {[
                                { emoji: "🌐", title: "Website Safety Checker", desc: "Verify any trading platform or investment website against SEBI's investor alert list and RakshaAI's scam database.", href: "/website-safety-checker/", cta: "Check a Website →" },
                                { emoji: "📞", title: "Phone Number Checker", desc: "Check if a phone number has been reported in connection with investment fraud, fake trading calls, or scam Telegram groups.", href: "/phone-number-checker/", cta: "Check a Number →" },
                                { emoji: "💸", title: "UPI ID Checker", desc: "Verify if a UPI ID or payment address has been flagged in investment fraud or fake broker transactions.", href: "/upi-id-checker/", cta: "Check a UPI ID →" },
                            ].map(({ emoji, title, desc, href, cta }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    className="group p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-md hover:border-indigo-200 dark:hover:border-indigo-800 transition-all duration-200"
                                >
                                    <span className="text-3xl mb-4 block">{emoji}</span>
                                    <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{title}</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-3">{desc}</p>
                                    <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">{cta}</span>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* ── Live Scam Alerts ──────────────────────────────────── */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-xs font-bold">
                                🚨 Live Alerts
                            </span>
                            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">
                                Active Investment Scam Alerts  India 2026
                            </h2>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                { date: "March 2026", badge: "SEBI Alert", badgeColor: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300", title: "12 Fake Platforms Mimicking Angel One and Zerodha", body: "SEBI issued an investor alert for 12 fraudulent trading platforms using interface clones of Angel One and Zerodha. All 12 were distributed via APK download links on Telegram groups. SEBI has referred 6 operators to cybercrime authorities." },
                                { date: "February 2026", badge: "Ponzi Alert", badgeColor: "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300", title: "'National Investment Club India'  4% Monthly  ₹8.2 Crore Collected", body: "A network operating under this name has collected ₹8.2 crore from approximately 2,400 investors across UP, Bihar, and Delhi. Not registered with SEBI, RBI, or MCA. Investors are advised not to make any further payments." },
                                { date: "January 2026", badge: "SEBI Order", badgeColor: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300", title: "Fake Options Trading Telegram Group  ₹180 Crore Frozen", body: "SEBI froze ₹180 crore in assets linked to a Telegram group offering fake options trading signals with 2.4 lakh Indian subscribers. Platform operated from Cambodia. All operators are named in SEBI enforcement proceedings." },
                                { date: "February 2026", badge: "Pig Butchering", badgeColor: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300", title: "LinkedIn IT Professional Targeting  Avg Loss ₹24 Lakh", body: "A coordinated pig butchering operation targeting Indian IT professionals on LinkedIn. Average loss per victim: ₹24 lakh. Operation was tracked to South-East Asia. 140+ cases filed across Mumbai, Bengaluru, Hyderabad Cyber Cells." },
                            ].map(({ date, badge, badgeColor, title, body }) => (
                                <div key={title} className="p-5 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-md transition-all">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${badgeColor}`}>{badge}</span>
                                        <span className="text-xs text-gray-400 dark:text-gray-500">{date}</span>
                                    </div>
                                    <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{body}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── Final CTA ─────────────────────────────────────────── */}
                    <section className="rounded-2xl bg-gradient-to-br from-blue-700 via-indigo-700 to-violet-700 p-8 sm:p-12 text-white text-center shadow-2xl relative overflow-hidden">
                        <div className="pointer-events-none absolute inset-0">
                            <div className="absolute -top-10 -left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
                        </div>
                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-xs font-semibold mb-6 border border-white/20">
                                <Shield className="h-4 w-4" />
                                Free Fraud Verification
                            </div>
                            <h2 className="text-2xl sm:text-4xl font-extrabold mb-4 leading-tight">
                                Protect Your Savings.<br className="hidden sm:block" />
                                Report Investment Fraud.
                            </h2>
                            <p className="text-blue-100 mb-8 text-sm sm:text-base max-w-xl mx-auto">
                                If you&apos;ve been approached by a suspicious investment platform, received an
                                unsolicited trading tip, or already fallen victim  report it now.
                                Your report can prevent the same fraud from reaching thousands of other families.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <ReportScamButton className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-indigo-600 font-bold text-sm shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                                    <MessageSquareWarning className="h-5 w-5" />
                                    Report Investment Fraud
                                    <ArrowRight className="h-4 w-4" />
                                </ReportScamButton>
                                <Link
                                    href="/website-safety-checker/"
                                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 text-white font-semibold text-sm border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300"
                                >
                                    Check a Suspicious Website
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                            <p className="mt-6 text-blue-200 text-xs">
                                🇮🇳 India-focused investment scam guidance · Free consumer access · No registration required
                            </p>
                        </div>
                    </section>

                </div>
            </main>
        </DefaultLayout>
    );
}
