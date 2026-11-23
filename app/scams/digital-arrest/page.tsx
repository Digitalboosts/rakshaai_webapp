import type { Metadata } from "next";
import Image from "next/image";
import DefaultLayout from "@/components/DefaultLayout";
import { jsonLd } from "@/lib/seo/schema";
import Link from "next/link";
import ReportScamButton from "@/components/ReportScamButton";
import {
    Shield, AlertTriangle, CheckCircle2, XCircle,
    Users, Phone, Lock, Eye,
    IndianRupee, ShieldAlert,
    ArrowRight, Info, BadgeCheck, Video,
    Gavel, UserX, Radio, FileText, Clock, HeartHandshake,
    ChevronDown, MessageSquareWarning, Fingerprint, Siren,
} from "lucide-react";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
    title: "Digital Arrest India 2026: Types & How to Report",
    description:
        "What is digital arrest? Meaning, all types (fake CBI, ED, NCB calls), warning signs, and how to report in India 2026. Free guide.",
    alternates: {
        canonical: "https://rakshaai.co/scams/digital-arrest",
    },
    robots: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
    openGraph: {
        title: "Digital Arrest India 2026: Meaning, All Types & How to Report | RakshaAI",
        description:
            "Fake CBI, ED, NCB officials threatening you on video calls  all 7 types of digital arrest scams in India 2026. Know the warning signs before it's too late.",
        url: "https://rakshaai.co/scams/digital-arrest",
        type: "website",
    siteName: 'RakshaAI',
        images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'RakshaAI' }],
  },
    twitter: {
        card: "summary_large_image",
        title: "Digital Arrest India 2026 Guide | RakshaAI",
        description:
            "7 types of digital arrest scams in India 2026, warning signs and how to report. Free guide.",
        images: ['/opengraph-image'],
  },
    other: { "geo.region": "IN", language: "en-IN" },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────
const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Digital Arrest in India 2026: Meaning, 7 Types, Warning Signs & How to Report",
    url: "https://rakshaai.co/scams/digital-arrest",
    description:
        "Comprehensive guide to India's digital arrest scam in 2026  meaning, all 7 types, how fake CBI/ED/NCB calls work, warning signs, and step-by-step reporting guide.",
    datePublished: "2024-01-15",
    dateModified: "2026-06-11",
    author: { "@type": "Organization", name: "RakshaAI" },
    publisher: { "@type": "Organization", name: "RakshaAI", url: "https://rakshaai.co" },
    inLanguage: "en-IN",
};

const faqStructured = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What is the meaning of digital arrest in India?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Digital arrest meaning: Digital arrest is a fraud scheme where criminals impersonate government officials (CBI, ED, police, NCB, income tax, TRAI, customs) and tell victims they are under digital arrest  confined to their location, ordered to remain on a video call, and threatened with physical arrest unless they pay money to clear their name. It is not a real legal concept. No Indian law gives any authority the power to arrest someone digitally or over a phone call.",
            },
        },
        {
            "@type": "Question",
            name: "Is digital arrest a real law in India?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No. Digital arrest is not a real legal concept in India. There is no provision in the IPC, CrPC, IT Act 2000, or any state law that allows any government authority to arrest a citizen digitally or over a phone call. Any call claiming you are under digital arrest is fraud.",
            },
        },
        {
            "@type": "Question",
            name: "What should I do if I get a digital arrest scam call?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Five immediate actions: (1) Hang up immediately. (2) Tell a family member right away. (3) Do not transfer any money. (4) Do not share your screen or install any app. (5) Report: call 1930 if money was involved, file on cybercrime.gov.in, and report the number at rakshaai.co.",
            },
        },
        {
            "@type": "Question",
            name: "What is digital arrest for UPSC aspirants?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Digital arrest is covered in GS Paper 3 (Internal Security/Cybercrime). Key exam points: extortion scam impersonating law enforcement via video call; first formal recognition: MHA advisory October 2024; PM Modi Mann ki Baat October 27 2024; Scale: 92,000+ complaints, ₹2,140 crore losses in 2025; Legal violations: IPC 419, 420, 384 + IT Act Sections 66C, 66D; Nodal agency: I4C (Indian Cyber Crime Coordination Centre, MHA).",
            },
        },
        {
            "@type": "Question",
            name: "How do I report a digital arrest scam in India?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "How to report digital arrest scam India: (1) Call 1930 immediately if money was transferred  operates 24/7. (2) File online at cybercrime.gov.in. (3) Report the scammer's number at rakshaai.co. (4) Report to Sanchar Sathi Chakshu portal. (5) File a physical FIR at your nearest cybercrime police station.",
            },
        },
        {
            "@type": "Question",
            name: "How do fake CBI officer calls work?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Unexpected call claiming your number or Aadhaar is linked to criminal investigation; transfer to senior CBI officer via WhatsApp video; fake arrest warrant shown; digital arrest declared; money demanded to clear the case. Real CBI investigations begin with written notices served at your address  CBI never calls individuals to inform them of investigations.",
            },
        },
        {
            "@type": "Question",
            name: "What is a cyber arrest  is it the same as digital arrest?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Cyber arrest is the informal media term for the same fraud officially classified as digital arrest by the Ministry of Home Affairs. The terms are interchangeable. If someone claims you are under cyber arrest or digital arrest, the response is identical: hang up, tell a family member, call 1930, file on cybercrime.gov.in.",
            },
        },
        {
            "@type": "Question",
            name: "Can I recover money lost in a digital arrest scam?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Recovery is possible but requires immediate action. Within 30 minutes: call 1930  best success rate. Within 1 hour: file cybercrime.gov.in and alert bank for UPI dispute. Recovery probability drops significantly after 24 hours. Less than 2% of digital arrest victims currently recover the full amount.",
            },
        },
        {
            "@type": "Question",
            name: "Which government agencies do digital arrest scammers impersonate?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "CBI (31% of cases), ED/Enforcement Directorate (24%), NCB/Narcotics Control Bureau (12%), Customs/CBIC (8%), Income Tax Department/CBDT (4%), TRAI (3%), and local police/crime branch (remaining). None of these agencies conduct investigations, arrests, or collect payments via phone or video calls.",
            },
        },
        {
            "@type": "Question",
            name: "What are the laws against digital arrest scammers in India?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Digital arrest scammers violate: IPC Section 419 (cheating by impersonation  up to 3 years), IPC Section 420 (cheating  up to 7 years), IPC Section 384 (extortion  up to 3 years), IT Act 2000 Section 66C (identity theft  up to 3 years + ₹1 lakh fine), IT Act 2000 Section 66D (cheating by impersonation using computer  up to 3 years + ₹1 lakh fine).",
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
        { "@type": "ListItem", position: 3, name: "Digital Arrest", item: "https://rakshaai.co/scams/digital-arrest/" },
    ],
};

const itemListData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Types of Digital Arrest Scams in India 2026",
    numberOfItems: 7,
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Fake CBI Officer Scam", url: "https://rakshaai.co/scams/digital-arrest/fake-cbi-scam/" },
        { "@type": "ListItem", position: 2, name: "Fake ED / Income Tax Officer Digital Arrest", url: "https://rakshaai.co/scams/digital-arrest/fake-ed-scam/" },
        { "@type": "ListItem", position: 3, name: "Fake NCB / Narcotics Bureau Digital Arrest", url: "https://rakshaai.co/scams/digital-arrest/fake-ncb-scam/" },
        { "@type": "ListItem", position: 4, name: "Fake Customs / DHL Package Scam", url: "https://rakshaai.co/scams/digital-arrest/fake-customs-scam/" },
        { "@type": "ListItem", position: 5, name: "Fake TRAI Escalated to Digital Arrest", url: "https://rakshaai.co/scams/phone-scams/fake-trai-calls/" },
        { "@type": "ListItem", position: 6, name: "Fake Income Tax Raid / GST Audit Digital Arrest", url: "https://rakshaai.co/scams/digital-arrest/fake-income-tax-scam/" },
        { "@type": "ListItem", position: 7, name: "WhatsApp Video Call Digital Arrest", url: "https://rakshaai.co/scams/digital-arrest/whatsapp-video-arrest/" },
    ],
};

const definedTermData = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Digital Arrest",
    description: "Digital arrest is a cyber extortion scam in which criminals impersonate CBI, ED, NCB, police, income tax, or customs officials and tell the victim they are under digital arrest  confined to their location, forced to remain on a video call, and threatened with immediate physical arrest unless they pay to clear their name. Digital arrest has no legal basis in Indian law.",
    inDefinedTermSet: {
        "@type": "DefinedTermSet",
        name: "Indian Cybercrime Terminology",
    },
};

// ── How it works steps (3-stage playbook) ────────────────────────────────────
const howItWorks = [
    {
        step: "01",
        color: "from-blue-500 to-indigo-600",
        bg: "bg-blue-50 dark:bg-blue-950/30",
        border: "border-blue-200 dark:border-blue-900",
        title: "Stage 1  The Cold Call and Urgency Manufacturing",
        desc: "Digital arrest scams begin with an unexpected call  never a scheduled appointment. The caller claims to be from a government authority (CBI, ED, TRAI, customs, income tax, NCB) and states a matter of serious legal consequence requires your immediate attention. The caller knows your name, sometimes your approximate location, and occasionally your Aadhaar number  data purchased from compromised databases. The caller ID may match a real government office number through caller ID spoofing technology. This first call screens victims: if you challenge their claims, they disconnect. If you show fear or compliance, the scam escalates immediately.",
    },
    {
        step: "02",
        color: "from-red-500 to-rose-600",
        bg: "bg-red-50 dark:bg-red-950/30",
        border: "border-red-200 dark:border-red-900",
        title: "Stage 2  The Video Call, Fake Documents, and Digital Arrest Declaration",
        desc: "The victim is transferred to a WhatsApp video call where a 'senior officer' takes over. The scammer appears in a police or government uniform in front of a background designed to resemble a police station  often a pre-recorded video on loop. They display fake arrest warrants, court summons, and FIR documents bearing official seals. The victim is formally told they are 'under digital arrest' and must remain on the call. They are instructed not to speak to family members, not to disconnect, and not to contact anyone outside the call. This isolation prevents the victim from seeking advice that would immediately expose the fraud.",
        urgent: true,
    },
    {
        step: "03",
        color: "from-purple-500 to-violet-600",
        bg: "bg-purple-50 dark:bg-purple-950/30",
        border: "border-purple-200 dark:border-purple-900",
        title: "Stage 3  The Ransom Demand and Psychological Coercion",
        desc: "Once the victim is isolated and in fear, the money demand begins. Payment is demanded to 'post bail digitally,' 'clear the investigation,' 'pay a security deposit,' or 'prove innocence.' Payments go to UPI accounts presented as 'government escrow' or 'court clearance accounts.' The psychological pressure is extreme: any delay means physical police will arrive at your address. One documented case in Pune involved a victim held on a video call for 4 consecutive days, losing ₹78 lakh. Once you pay once, they don't stop  they use the shame of payment as leverage to demand more.",
    },
];

// ── Red flags ─────────────────────────────────────────────────────────────────
const redFlags = [
    "Any government authority  CBI, ED, police, TRAI, income tax, NCB, customs  conducting an investigation or arrest via phone or video call. Real agencies do not work this way.",
    "You are told you are 'under digital arrest' and must remain on the call. This legal concept does not exist in India. No Indian law permits digital arrest of any kind.",
    "You are told NOT to tell your family members, not to contact anyone, and not to disconnect. Real law enforcement never demands secrecy from your own family.",
    "A money payment is demanded to 'clear your name', 'post digital bail', 'settle the investigation', or 'prove innocence'. No real government body collects money via phone or UPI.",
    "You are shown documents, warrants, or court orders on screen during the call. Real legal documents are served by post via registered mail  not shared on WhatsApp video calls.",
    "The call demands you share your screen, install a remote access app, or conduct a UPI transaction while the caller watches. This gives scammers access to your banking credentials.",
    "The caller claims your phone number, Aadhaar, or bank account is 'linked to a crime' and that accounts will be 'frozen' or 'confiscated' unless you act immediately. This is a manufactured threat.",
];

// ── Who is targeted ───────────────────────────────────────────────────────────
const targetProfiles = [
    {
        icon: Fingerprint,
        color: "from-blue-500 to-indigo-600",
        title: "Professionals & Executives",
        desc: "Doctors, CAs, engineers, corporate employees  people who fear reputational damage and are more likely to pay quietly to 'clear their name' rather than risk career exposure.",
    },
    {
        icon: Users,
        color: "from-purple-500 to-violet-600",
        title: "Senior Citizens",
        desc: "Retired government employees, pensioners  they have savings, are less familiar with digital scam patterns, and have an ingrained respect for authority that scammers exploit ruthlessly.",
    },
    {
        icon: IndianRupee,
        color: "from-emerald-500 to-teal-600",
        title: "Business Owners",
        desc: "Scammers target GST-registered businesses, linking stock market transactions or import records to supposed money-laundering probes to inflate the 'stakes' and demand larger sums.",
    },
    {
        icon: Video,
        color: "from-orange-500 to-amber-600",
        title: "NRIs & Expats",
        desc: "People with Indian financial accounts but living abroad are ideal targets  they're distanced from local support, unfamiliar with current Indian law enforcement procedures, and often have higher financial capacity.",
    },
];

// ── Scam types ────────────────────────────────────────────────────────────────
const scamTypes = [
    {
        emoji: "👮",
        title: "Fake CBI Officer Scam  Criminal Investigation Threat",
        desc: "Caller impersonates a CBI officer, claiming your phone number or bank account is linked to a serious criminal investigation  money laundering, terrorism, or drug trafficking. Average loss: ₹18 lakh.",
        risk: "Extreme",
        riskColor: "bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300",
        href: "/scams/digital-arrest/fake-cbi-scam/",
    },
    {
        emoji: "📊",
        title: "Fake ED / Income Tax Officer Digital Arrest",
        desc: "Scammer poses as Enforcement Directorate or Income Tax Department officer, accusing you of undisclosed foreign assets, GST evasion, or FEMA violations. A fake 'warrant' is displayed via screen share.",
        risk: "Extreme",
        riskColor: "bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300",
        href: "/scams/digital-arrest/fake-ed-scam/",
    },
    {
        emoji: "💊",
        title: "Fake NCB / Narcotics Bureau Digital Arrest",
        desc: "Caller claims a package in your name was intercepted containing narcotics, or that your phone number was used to order controlled substances. An arrest warrant is displayed, 'security deposit' demanded.",
        risk: "Extreme",
        riskColor: "bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300",
        href: "/scams/digital-arrest/fake-ncb-scam/",
    },
    {
        emoji: "📦",
        title: "Fake Customs / DHL Package Scam  Digital Arrest Entry",
        desc: "You receive a call that a parcel addressed to you has been seized at customs containing illegal items. The scammer offers to resolve the matter for a clearance fee, then escalates to a digital arrest scenario.",
        risk: "Very High",
        riskColor: "bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300",
        href: "/scams/digital-arrest/fake-customs-scam/",
    },
    {
        emoji: "📞",
        title: "Fake TRAI Disconnect Escalated to Digital Arrest",
        desc: "Starts as a fake TRAI number disconnection threat. When the victim refuses to pay, the scammer transfers the call to a 'cybercrime officer' who then initiates a digital arrest scenario.",
        risk: "High",
        riskColor: "bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300",
        href: "/scams/phone-scams/fake-trai-calls/",
    },
    {
        emoji: "💼",
        title: "Fake Income Tax Raid / GST Audit Digital Arrest",
        desc: "Scammer poses as an Income Tax officer conducting a 'virtual audit' or 'online raid.' Targets professionals, business owners, and salaried taxpayers with fake court orders and tax notices.",
        risk: "Very High",
        riskColor: "bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300",
        href: "/scams/digital-arrest/fake-income-tax-scam/",
    },
    {
        emoji: "📹",
        title: "WhatsApp Video Call Digital Arrest  Fake Courtroom",
        desc: "The most elaborate variant. The entire digital arrest is conducted via WhatsApp video call, with the scammer in a police uniform against a background designed to look like a police station or courtroom.",
        risk: "Extreme",
        riskColor: "bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300",
        href: "/scams/digital-arrest/whatsapp-video-arrest/",
    },
];

// ── What to do (5 protection rules) ──────────────────────────────────────────
const whatToDo = [
    {
        step: "01",
        title: "Hang Up Immediately  Digital Arrest Is Not Real",
        desc: "The single most effective protection: hang up the moment anyone on an unexpected call claims to be from a government agency and says you are under investigation or under arrest. You do not need to verify, explain, or justify yourself. Real CBI, ED, police, or income tax investigations begin with written notices, not phone calls. If you receive such a call, end it immediately.",
        urgent: true,
    },
    {
        step: "02",
        title: "Tell Your Family Immediately If a Caller Demands Secrecy",
        desc: "The instruction not to tell your family is the most critical scam signal. Real law enforcement never demands secrecy from your family as a condition of an investigation. The moment a caller tells you not to speak to your spouse, children, or parents, you are being psychologically isolated for manipulation. Immediately tell a family member  a second perspective breaks the fraud in 30 seconds.",
        urgent: true,
    },
    {
        step: "03",
        title: "Never Transfer Any Money  No Real Agency Asks for Money on the Phone",
        desc: "This rule eliminates digital arrest scams financially. As PM Modi stated in Mann ki Baat: no agency of the Government of India asks for money via phone or video call. Every payment demand from a caller claiming to be a government official  regardless of how official they appear or what threats they make  is fraud. Zero exceptions.",
        urgent: false,
    },
    {
        step: "04",
        title: "Check the Caller's Number on RakshaAI Before Engaging",
        desc: "If you receive a suspicious call before it escalates, check the number on RakshaAI's Phone Number Checker immediately. Real government agencies in India do not call from mobile numbers  CBI, ED, police stations, TRAI, NCB, and income tax offices use landline numbers registered to their offices. Any claim coming from a WhatsApp number, mobile number, or international number is confirmed fraud.",
        urgent: false,
    },
    {
        step: "05",
        title: "Never Share Your Screen or Install Any Remote Access App",
        desc: "Digital arrest scammers increasingly demand that victims share their phone screen or install apps like AnyDesk, TeamViewer, or QuickSupport under the guise of 'verification.' Screen sharing gives the scammer real-time visibility of your banking apps, OTPs, and personal documents. Remote access apps give them direct control of your device. Never share your screen with an incoming caller.",
        urgent: false,
    },
];

// ── FAQs ──────────────────────────────────────────────────────────────────────
const faqs = [
    {
        q: "What is the meaning of digital arrest in India?",
        a: "Digital arrest meaning: Digital arrest is a fraud scheme where criminals impersonate government officials (CBI, ED, police, NCB, income tax, TRAI, customs) and tell victims they are 'under digital arrest'  confined to their location, ordered to remain on a video call, and threatened with physical arrest unless they pay money to 'clear their name.' It is not a real legal concept. No Indian law  not the IPC, CrPC, or IT Act 2000  gives any authority the power to arrest someone digitally or over a phone call. Prime Minister Modi addressed this specifically in October 2024: 'No government agency conducts investigations via phone or video call, and no agency asks for money on the phone.'",
    },
    {
        q: "Is digital arrest a real law in India?",
        a: "No. Digital arrest is not a real legal concept in India. There is no provision in the IPC, CrPC, IT Act 2000, or any state law that allows any government authority to 'arrest' a citizen digitally or over a phone call. Any call claiming you are 'under digital arrest' is fraud. The crime is committed by the caller, not the recipient. Applicable laws scammers violate include IPC Section 419 (cheating by impersonation), IPC Section 420 (fraud), IPC Section 384 (extortion), IT Act 2000 Section 66C (identity theft), and Section 66D (impersonation using computer resources).",
    },
    {
        q: "What should I do if I get a digital arrest scam call?",
        a: "Five immediate actions: (1) Hang up immediately  do not engage with the caller's claims. (2) Tell a family member right away  scammers rely on isolation. (3) Do not transfer any money under any circumstances. (4) Do not share your screen or install any app. (5) Report immediately: call 1930 if money was involved, file on cybercrime.gov.in, and report the number at rakshaai.co. The panic you feel during the call is manufactured. Real government agencies communicate via written registered notices, not unexpected phone calls.",
    },
    {
        q: "What is digital arrest for UPSC? How is it covered in exams?",
        a: "Digital arrest is a topic in GS Paper 3 (Internal Security / Cybercrime). Key exam points: (1) Definition: extortion scam impersonating law enforcement via video call. (2) First formal recognition: MHA advisory October 2024. (3) PM Modi's statement: Mann ki Baat, October 27, 2024. (4) Scale: 92,000+ complaints, ₹2,140 crore losses in 2025. (5) Legal violations: IPC 419, 420, 384 + IT Act 2000 Sections 66C, 66D. (6) Nodal agency: I4C (Indian Cyber Crime Coordination Centre, under MHA). (7) Reporting: 1930 helpline + cybercrime.gov.in.",
    },
    {
        q: "How do I report a digital arrest scam in India?",
        a: "How to report digital arrest scam india: (1) Call 1930 immediately if money was transferred  operates 24/7, fastest route to account freeze. (2) File online at cybercrime.gov.in  select 'Financial Cyber Crime'  attach all screenshots and call records. (3) Report the scammer's number at rakshaai.co  appears in search results within hours. (4) Report to Sanchar Sathi Chakshu portal at sancharsaathi.gov.in. (5) File a physical FIR at your nearest cybercrime police station. (6) Alert your bank if any payment was made  request UPI dispute and account hold.",
    },
    {
        q: "How do fake CBI officer calls work?",
        a: "The fake CBI officer call follows a standard script: (1) Unexpected call from a number displaying a CBI office caller ID (spoofed). (2) Caller claims your phone number, bank account, or Aadhaar is linked to a criminal investigation. (3) Transfer to a 'senior CBI officer' via WhatsApp video call. (4) Fake arrest warrant and case file shown on screen. (5) Digital arrest declared  victim told to remain on the call. (6) Money demanded to 'clear the case.' Reality check: Real CBI investigations begin with written notices served at your address by uniformed officers with proper ID. CBI never calls individuals to inform them of investigations or asks for money.",
    },
    {
        q: "What is a cyber arrest? Is it the same as digital arrest?",
        a: "Cyber arrest is the informal media term for the same fraud officially classified as digital arrest by the Ministry of Home Affairs. The terms are used interchangeably in news coverage. If someone claims you are 'under cyber arrest' or 'under digital arrest,' the situation is identical  it is a fraud. The same response applies: hang up, tell a family member, call 1930, file on cybercrime.gov.in.",
    },
    {
        q: "Can I recover money lost in a digital arrest scam?",
        a: "Recovery is possible but requires immediate action. Within 30 minutes: call 1930  the helpline's account freeze request has the best success rate at this stage. Within 1 hour: file cybercrime.gov.in complaint and alert your bank for UPI dispute. Recovery probability drops significantly after 24 hours as money moves through multiple accounts. Less than 2% of digital arrest victims currently recover the full amount.",
    },
    {
        q: "Which government agencies do digital arrest scammers impersonate?",
        a: "Digital arrest scammers in India impersonate seven main agencies: (1) CBI  31% of cases. (2) ED (Enforcement Directorate)  24%. (3) NCB (Narcotics Control Bureau)  12%. (4) Customs / CBIC  8%. (5) Income Tax Department / CBDT  4%. (6) TRAI  3%. (7) Local police / crime branch  remaining cases. All of these agencies share one common trait: none conduct investigations, arrests, or collect payments via phone calls or video calls.",
    },
    {
        q: "What are the laws against digital arrest scammers in India?",
        a: "Digital arrest scammers violate multiple laws: IPC Section 419 (cheating by impersonation  up to 3 years imprisonment), IPC Section 420 (cheating  up to 7 years), IPC Section 384 (extortion  up to 3 years), IT Act 2000 Section 66C (identity theft  up to 3 years + ₹1 lakh fine), IT Act 2000 Section 66D (cheating by impersonation using computer  up to 3 years + ₹1 lakh fine). Criminal conspiracy under IPC Section 120B also applies when multiple people are involved.",
    },
];

// ─────────────────────────────────────────────────────────────────────────────
export default function DigitalArrestScamPage() {
    return (
        <DefaultLayout>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(faqStructured) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbData) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(itemListData) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(definedTermData) }} />

            <main className="min-h-screen">

                {/* ── Hero ─────────────────────────────────────────────────── */}
                <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-red-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-950 pt-20 pb-24 px-4">
                    <div className="pointer-events-none absolute inset-0 -z-10">
                        <div className="absolute top-10 left-1/4 w-96 h-96 bg-red-300/10 rounded-full blur-3xl animate-pulse" />
                        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-300/10 rounded-full blur-3xl animate-pulse delay-700" />
                        <div className="absolute top-1/2 right-0 w-64 h-64 bg-orange-300/10 rounded-full blur-3xl animate-pulse delay-1000" />
                    </div>

                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-100 to-slate-100 dark:from-red-900/40 dark:to-slate-900/40 text-red-700 dark:text-red-300 text-xs font-semibold mb-6 border border-red-200 dark:border-red-800 shadow-sm">
                            <Siren className="h-4 w-4 animate-pulse" />
                            2026 India Report · 92,000+ MHA/NCRB Complaints · Updated April 2026
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
                            Digital Arrest in India 2026:{" "}
                            <span className="bg-gradient-to-r from-red-600 via-rose-600 to-orange-600 bg-clip-text text-transparent">
                                Meaning, 7 Types, Warning Signs
                            </span>{" "}
                            &amp; How to Report
                        </h1>

                        <div className="max-w-2xl mx-auto text-left mb-8 space-y-4">
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                <strong className="text-gray-900 dark:text-white">Digital arrest</strong> is a form of cyber extortion in which scammers impersonate CBI, ED, NCB, police, income tax, or customs officials and tell the victim they are &lsquo;under digital arrest&rsquo;  confined to their home, forced to remain on a video call, and threatened with immediate physical arrest unless they pay to &lsquo;clear their name.’
                            </p>
                            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                                India recorded over <strong className="text-gray-900 dark:text-white">92,000 digital arrest complaints</strong> in 2025, with the Ministry of Home Affairs estimating total losses exceeding <strong className="text-gray-900 dark:text-white">₹2,140 crore</strong>  making digital arrest the highest per-victim-loss scam type in the country, with average losses of <strong className="text-gray-900 dark:text-white">₹23 lakh per victim</strong>. PM Narendra Modi addressed the nation on digital arrest in Mann ki Baat in October 2024, calling it the biggest online threat facing Indians today.
                            </p>
                            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                                This page explains the digital arrest meaning in full, covers all 7 variants operating in India in 2026, gives the exact psychological tactics scammers use, and provides a step-by-step guide to reporting  including the fastest route to financial recovery if you have already paid.
                            </p>
                        </div>
                        {/* Phone Checker CTA */}
                        <div className="max-w-xl mx-auto mb-10 p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 flex flex-col sm:flex-row items-center gap-4">
                            <div className="flex-1 text-left">
                                <p className="text-sm font-bold text-amber-800 dark:text-amber-300 mb-1">Received a Threatening Call?</p>
                                <p className="text-xs text-amber-700 dark:text-amber-400">Check the number before you pay anything. Most scammer numbers appear in our database within hours of the first report.</p>
                            </div>
                            <Link
                                href="/phone-number-checker/"
                                className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm transition-colors whitespace-nowrap"
                            >
                                <Phone className="h-4 w-4" />
                                Check Phone Number
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            {[
                                { value: "92,000+", label: "Digital Arrest Complaints 2025 (MHA)", icon: <AlertTriangle className="h-4 w-4" /> },
                                { value: "₹23 Lakh", label: "Average Loss Per Victim  Highest of Any Scam", icon: <IndianRupee className="h-4 w-4" /> },
                                { value: "+300%", label: "YoY Growth in Complaints 2023–2025", icon: <ShieldAlert className="h-4 w-4" /> },
                                { value: "<2%", label: "Victims Who Recover Full Amount", icon: <Lock className="h-4 w-4" /> },
                            ].map(({ value, label, icon }, i) => (
                                <div
                                    key={label}
                                    className="group flex flex-col items-center px-6 py-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 min-w-[130px]"
                                    style={{ animationDelay: `${i * 100}ms` }}
                                >
                                    <div className="text-red-500 mb-1 group-hover:scale-110 transition-transform">{icon}</div>
                                    <span className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">{value}</span>
                                    <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-center">{label}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <ReportScamButton className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-red-500 to-rose-600 text-white font-bold text-sm shadow-lg hover:shadow-red-300/50 hover:scale-105 transition-all duration-300 cursor-pointer">
                                <ShieldAlert className="h-5 w-5" />
                                Report a Digital Arrest Scam
                                <ArrowRight className="h-4 w-4" />
                            </ReportScamButton>
                            <a
                                href="#types"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 font-semibold text-sm border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
                            >
                                See 7 Types of Digital Arrest
                                <ChevronDown className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </section>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
  <section aria-labelledby="da-scale-heading">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-widest">
                                    2026 Official Data (MHA / NCRB)
                                </span>
                                <h2
                                    id="da-scale-heading"
                                    className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-2 mb-4"
                                >
                                    Digital Arrest Scam Scale in India  2026 Data
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                    India recorded over 92,000 digital arrest complaints in 2025 alone. The Ministry of Home Affairs estimates total losses of ₹2,140 crore  with the average victim losing ₹23 lakh. Complaint growth has exceeded 300% year-on-year from 2023 to 2025, making digital arrest the fastest-growing high-value cyber fraud in India.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { label: "Digital Arrest Complaints (2025)", value: "92,000+", color: "from-red-500 to-rose-600" },
                                        { label: "Average Loss Per Victim (Highest of Any Scam)", value: "₹23 Lakh", color: "from-orange-500 to-red-500" },
                                        { label: "YoY Complaint Growth 2023–2025", value: "+300%", color: "from-rose-500 to-pink-600" },
                                        { label: "Victims Who Recover Full Amount", value: "<2%", color: "from-slate-600 to-gray-700" },
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
                                    alt="Indian woman receiving a suspicious digital arrest scam call  how to identify and hang up on fake CBI police video call fraud in India, RakshaAI cyber fraud prevention"
                                    title="Digital Arrest Scam India  Recognise and Hang Up | RakshaAI"
                                    width={500}
                                    height={500}
                                    className="object-contain drop-shadow-2xl max-w-full h-auto rounded-3xl"
                                />
                            </div>
                        </div>
                    </section>
                    {/* ── 7 Types of Digital Arrest Scams ─────────────────── */}
                    <section id="types" aria-labelledby="types-heading">
                        <div className="text-center mb-10">
                            <span className="inline-block px-3 py-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-xs font-semibold mb-4">
                                Complete 2026 Guide
                            </span>
                            <h2 id="types-heading" className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                7 Types of Digital Arrest Scams in India 2026
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-base">
                                Digital arrest is not a single fraud  it is seven distinct impersonation variants, each exploiting a different government authority to manufacture fear.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {scamTypes.map(({ emoji, title, desc, risk, riskColor, href }) => (
                                <Link
                                    key={href}
                                    href={'/'}
                                    className="group block p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                >
                                    <div className="flex items-start justify-between mb-3">
                                        <span className="text-3xl">{emoji}</span>
                                        <span className={`px-2 py-1 rounded-lg text-xs font-bold ${riskColor}`}>
                                            {risk}
                                        </span>
                                    </div>
                                    <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                                        {title}
                                    </h3>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-3">{desc}</p>
                                    <div className="flex items-center gap-1 text-xs font-semibold text-red-600 dark:text-red-400 group-hover:gap-2 transition-all">
                                        Read Full Guide <ArrowRight className="h-3 w-3" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* ── What Is Digital Arrest ────────────────────────────── */}
                    <section>
                        <div className="grid lg:grid-cols-2 gap-10 items-center">
                            <div>
                                <span className="inline-block px-3 py-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-xs font-semibold mb-4">
                                    Official Definition
                                </span>
                                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-6 leading-snug">
                                    What Is Digital Arrest? Meaning, Definition &amp; How It Works in India
                                </h2>
                                <div className="space-y-4 text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                                    <p>
                                        In October 2024, Prime Minister Narendra Modi dedicated an entire episode of
                                        <em className="text-gray-900 dark:text-white"> Mann Ki Baat</em> to warning Indians about
                                        digital arrest scams. He called it one of the biggest cyber threats facing the country.
                                        The RBI, MHA, and TRAI have all issued repeated public advisories. And yet,
                                        thousands of educated, aware people fall for it every month.
                                    </p>
                                    <p>
                                        Why? Because the scam is engineered with terrifying precision. The callers know your
                                        full name, your Aadhaar number, your bank name, sometimes even your recent transactions.
                                        They appear on video in crisp police uniforms in front of backdrops with government
                                        seals. They use proper legal terminology, reference real laws, and send documents that
                                        look genuinely official. Your brain, overwhelmed with fear and confusion, starts
                                        treating the situation as real.
                                    </p>
                                    <p>
                                        The fundamental lie at the heart of this scam is a legal impossibility:
                                        <strong className="text-gray-900 dark:text-white"> "digital arrest" does not exist in Indian law.</strong> Not
                                        in the CrPC, not in the IT Act, not anywhere. No government official  CBI, police, ED,
                                        TRAI, customs  can arrest or detain you via a phone or video call.
                                        If someone tells you otherwise, they are a criminal.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-red-50 to-slate-50 dark:from-red-950/40 dark:to-slate-950/40 rounded-2xl p-8 border border-red-100 dark:border-red-900 space-y-5">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center">
                                        <Info className="h-5 w-5 text-white" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 dark:text-white text-lg">Key Facts to Memorise</h3>
                                </div>
                                <ul className="space-y-4">
                                    {[
                                        { icon: XCircle, color: "text-red-500", text: "\"Digital arrest\" has zero legal basis in India. It is a made-up term used only by fraudsters." },
                                        { icon: XCircle, color: "text-red-500", text: "CBI, police, ED, and TRAI never initiate investigations over WhatsApp or video call." },
                                        { icon: XCircle, color: "text-red-500", text: "No legitimate authority will ever ask you to stay on a video call for hours or overnight." },
                                        { icon: CheckCircle2, color: "text-green-500", text: "You have the right to end any call and immediately contact your local police station to verify." },
                                        { icon: CheckCircle2, color: "text-green-500", text: "Real investigations always happen in person, with proper written notices served physically." },
                                    ].map(({ icon: Icon, color, text }) => (
                                        <li key={text} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                                            <Icon className={`h-4 w-4 ${color} flex-shrink-0 mt-0.5`} />
                                            {text}
                                        </li>
                                    ))}
                                </ul>
                                <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border border-red-100 dark:border-red-900">
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                        <strong className="text-red-600 dark:text-red-400">PM Modi's exact words:</strong>{" "}
                                        "No government agency conducts inquiry like this through video call. This is a big lie."
                                         Mann Ki Baat, October 2024
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* UPSC Subsection */}
                        <div className="mt-10 p-6 rounded-2xl bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-2xl">📚</span>
                                <div>
                                    <h3 className="font-bold text-gray-900 dark:text-white text-base">Digital Arrest for UPSC Aspirants  GS Paper 3</h3>
                                    <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">Internal Security / Cybercrime  Exam-Ready Summary</p>
                                </div>
                            </div>
                            <ul className="grid sm:grid-cols-2 gap-3">
                                {[
                                    "Definition: Cyber extortion scam where criminals impersonate CBI/ED/police to conduct 'digital arrest' via video call and demand money.",
                                    "First formal recognition: MHA advisory, October 2024. Term coined and popularised after PM Modi's Mann ki Baat on October 27, 2024.",
                                    "Scale (2025): 92,000+ complaints filed with I4C; estimated losses ₹2,140 crore; average loss per victim ₹23 lakh.",
                                    "Legal status: No legal basis in India. Digital arrest does not exist in IPC, CrPC, or IT Act 2000.",
                                    "Laws violated by scammers: IPC 419 (impersonation), IPC 420 (cheating), IPC 384 (extortion), IT Act 66C (identity theft), IT Act 66D (computer impersonation).",
                                    "Nodal agency: I4C (Indian Cyber Crime Coordination Centre) under Ministry of Home Affairs.",
                                    "Reporting mechanism: 1930 helpline (24/7) + cybercrime.gov.in national portal.",
                                    "Key PM statement: \"No government agency conducts inquiry through video call. This is a big lie.\"  Mann ki Baat, Oct 27 2024.",
                                ].map((point) => (
                                    <li key={point} className="flex items-start gap-2 text-xs text-gray-700 dark:text-gray-300">
                                        <CheckCircle2 className="h-4 w-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    {/* ── How It Works Step by Step ─────────────────────────── */}
                    <section id="how-it-works">
                        <div className="text-center mb-12">
                            <span className="inline-block px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs font-semibold mb-4">
                                The 3-Stage Playbook
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                How Digital Arrest Scams Work in India  3-Stage Playbook
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-base">
                                Understanding the exact playbook is your best defense. Every digital arrest scam follows the same three stages.
                            </p>
                        </div>

                        <div className="relative">
                            <div className="hidden sm:block absolute left-[27px] top-10 bottom-10 w-0.5 bg-gradient-to-b from-blue-300 via-red-300 to-teal-300 dark:from-blue-800 dark:via-red-800 dark:to-teal-800" />
                            <div className="space-y-5">
                                {howItWorks.map(({ step, color, bg, border, title, desc, urgent }) => (
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
                                                        PSYCHOLOGICAL PEAK
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

                    {/* ── Inline Phone Checker CTA ───────────────────────────────── */}
                    <div className="rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border border-amber-200 dark:border-amber-800 p-6 flex flex-col sm:flex-row items-center gap-5">
                        <div className="flex-1">
                            <p className="font-bold text-gray-900 dark:text-white text-base mb-1">Got a &lsquo;Digital Arrest&rsquo; Call? Check the Number Immediately.</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Before you panic, enter the caller's number in RakshaAI's free Phone Number Checker. Most scammer numbers are reported within hours of the first victim call.</p>
                        </div>
                        <Link
                            href="/phone-number-checker/"
                            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm transition-colors"
                        >
                            <Phone className="h-4 w-4" />
                            Check Number Free →
                        </Link>
                    </div>
                  

                    {/* ── Real Story Deep Dive ──────────────────────────────── */}
                    <section className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8 sm:p-12 border border-gray-100 dark:border-gray-800">
                        <span className="inline-block px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 text-xs font-semibold mb-4">
                            It Could Happen to Anyone
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
                            "I'm a Doctor. I Thought I Was Smarter Than This."  A Real Account
                        </h2>
                        <div className="grid lg:grid-cols-2 gap-8 text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                            <div className="space-y-4">
                                <p>
                                    Dr. Meera (name changed), a 51-year-old cardiologist from Bengaluru, received a call on a
                                    Tuesday afternoon claiming to be from TRAI. A parcel booked under her Aadhaar had been
                                    seized at Mumbai airport. It contained forged passports and 150 grams of MDMA. Her mobile
                                    number was being deactivated within the hour.
                                </p>
                                <p>
                                    Then came the "transfer" to a fake Mumbai Crime Branch officer on video. He was in uniform,
                                    sitting at what looked like a police station. He had her full name, residential address,
                                    PAN number, and the name of the hospital she worked at. He showed her a digital "FIR" with
                                    her photo embedded in it.
                                </p>
                                <p>
                                    "I'm a rational person. I've seen scam forwards on WhatsApp dozens of times. But when
                                    someone in a police uniform is looking you in the eye, saying your name, your address, your
                                    hospital  something in your brain just freezes. You stop being a doctor. You become a
                                    terrified person trying to prove your innocence."
                                </p>
                            </div>
                            <div className="space-y-4">
                                <p>
                                    Over the next 19 hours  yes, hours  Dr. Meera remained on the video call, alone in her
                                    bedroom, forbidden from telling her husband or children. She transferred ₹24 lakh across
                                    three transactions, each time believing it was a "refundable security deposit." The demands
                                    kept growing.
                                </p>
                                <p>
                                    It was her 18-year-old son, noticing she hadn't come out of her room, who knocked and
                                    gently broke the spell. Within five minutes of talking to a real person  someone she
                                    trusted  the illusion collapsed. She filed a complaint within the hour.
                                </p>
                                <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border border-rose-200 dark:border-rose-800">
                                    <p className="text-sm font-bold text-rose-700 dark:text-rose-300 mb-2">The Lesson:</p>
                                    <p className="text-sm text-gray-700 dark:text-gray-300">
                                        The scam's most powerful weapon is isolation. The moment you talk to a trusted person
                                         a family member, a friend, a colleague  the psychological grip breaks instantly.
                                        That's exactly why scammers forbid it. Break the isolation. Always.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ── Who Gets Targeted ─────────────────────────────────── */}
                    <section>
                        <div className="text-center mb-12">
                            <span className="inline-block px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-semibold mb-4">
                                Know Your Risk
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                Who Do Digital Arrest Scammers Target?
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-base">
                                No one is immune, but scammers do research their targets before calling to maximise
                                their leverage and the amount they can demand.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {targetProfiles.map(({ icon: Icon, color, title, desc }) => (
                                <div key={title} className="group p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                                        <Icon className="h-6 w-6 text-white" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 dark:text-white text-base mb-2">{title}</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── Red Flags ─────────────────────────────────────────── */}
                    <section>
                        <div className="text-center mb-12">
                            <span className="inline-block px-3 py-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-xs font-semibold mb-4">
                                🚨 Warning Signs
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                7 Digital Arrest Warning Signs  How to Spot the Scam Immediately
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-base">
                                If any of these apply to your call, you are being scammed. Hang up immediately.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {redFlags.map((flag, i) => (
                                <div key={flag} className="flex items-start gap-4 p-5 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md hover:border-red-200 dark:hover:border-red-800 transition-all duration-200">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center text-white text-xs font-bold">
                                        {String(i + 1).padStart(2, "0")}
                                    </div>
                                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{flag}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── The Psychology Section ────────────────────────────── */}
                    <section className="bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-950/50 dark:to-indigo-950/30 rounded-2xl p-8 sm:p-12 border border-slate-100 dark:border-slate-800">
                        <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-semibold mb-4">
                            Inside the Trap
                        </span>
                        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6">
                            Why Your Brain Cooperates With the Scammer
                        </h2>
                        <div className="grid lg:grid-cols-2 gap-8 text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                            <div className="space-y-4">
                                <p>
                                    You might think: "I would never fall for this." And this is exactly what the scam preys on.
                                    Most victims are confident, educated people  which means they also have more to lose
                                    reputationally, more shame around the idea of being involved in a "crime," and a
                                    stronger psychological need to prove their innocence.
                                </p>
                                <p>
                                    The scam uses a forensic understanding of human psychology. First comes <strong className="text-gray-900 dark:text-white">fear</strong> 
                                    the idea that your name is linked to drugs, trafficking, or terrorism creates immediate
                                    panic. Then comes <strong className="text-gray-900 dark:text-white">authority</strong>  a uniformed official with
                                    deep knowledge of your personal details signals legitimacy. Then comes
                                    <strong className="text-gray-900 dark:text-white"> isolation</strong>  cutting you off from anyone who could
                                    offer perspective. Finally comes <strong className="text-gray-900 dark:text-white">urgency</strong> 
                                    "pay now or be arrested tonight."
                                </p>
                            </div>
                            <div className="space-y-4">
                                <p>
                                    These four levers  fear, authority, isolation, urgency  fire simultaneously and
                                    overwhelm the prefrontal cortex's ability to reason. Your brain enters a survival state.
                                    Logic becomes secondary to the primal need to make the threat go away.
                                </p>
                                <p>
                                    The single most effective counter to all four levers is one sentence, spoken aloud to
                                    another human being: <em className="text-indigo-700 dark:text-indigo-300 font-semibold">"I just got a call saying I'm under digital arrest."</em>{" "}
                                    Just saying it out loud  to your spouse, child, a colleague, a neighbour  immediately
                                    introduces a second perspective. And a second perspective is all it takes to break
                                    the spell. Every. Single. Time.
                                </p>
                                <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border border-indigo-200 dark:border-indigo-800">
                                    <p className="text-sm font-bold text-indigo-700 dark:text-indigo-300 mb-1">
                                        The 3-Second Rule:
                                    </p>
                                    <p className="text-sm text-gray-700 dark:text-gray-300">
                                        If any call makes you feel fear, urgency, and secrecy all at once  pause for
                                        3 seconds, hang up, and call someone you trust. That's the entire defense.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
  {/* ── Real vs Fake: Split Section with Image ────────────── */}
                    <section
                        aria-labelledby="real-vs-fake-heading"
                        className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-lg lg:min-h-[520px]"
                    >
                        {/* LEFT  content */}
                        <div className="p-8 sm:p-10 bg-white dark:bg-gray-900 flex flex-col justify-center">
                            <span className="inline-block px-3 py-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-xs font-semibold mb-4 self-start">
                                Quick Reference
                            </span>
                            <h2
                                id="real-vs-fake-heading"
                                className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-6 leading-snug"
                            >
                                What Real Investigations Look Like vs. Digital Arrest Scams
                            </h2>
                            <div className="space-y-3 mb-6">
                                <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-xl border border-green-200 dark:border-green-900">
                                    <p className="text-xs font-bold text-green-700 dark:text-green-400 mb-2 uppercase tracking-wide">
                                        Real Government Investigation
                                    </p>
                                    <ul className="space-y-1.5 text-sm text-gray-700 dark:text-gray-300">
                                        {[
                                            "Physical written notice served at your address",
                                            "You are given time to consult a lawyer",
                                            "You can call the police station to verify any officer",
                                            "You are never asked to transfer money as 'bail'",
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
                                        Digital Arrest Scam
                                    </p>
                                    <ul className="space-y-1.5 text-sm text-gray-700 dark:text-gray-300">
                                        {[
                                            "Contact only via phone or WhatsApp video call",
                                            "You are told to stay on call and not inform anyone",
                                            "Fake FIRs and warrants sent over WhatsApp",
                                            "Demands money as 'security deposit' or 'bail'",
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
                                    Any "investigation" that happens entirely over a video call with a demand for money
                                    is a scam  without exception.
                                </p>
                            </div>
                        </div>
                        {/* RIGHT  full-height image */}
                        <div className="relative h-full min-h-[400px] overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-rose-600 to-slate-700" />
                            <Image
                                src="/image/step-1-enter-phone-number-scam-checks-rakshaai.jpg"
                                alt="Scam awareness  recognise the difference between real government investigation and digital arrest fraud in India"
                                title="Real Police vs Fake Digital Arrest Scammer | RakshaAI"
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                    </section>
                    

                    {/* ── Government & Law Enforcement Stand ───────────────── */}
                    <section className="rounded-2xl overflow-hidden border border-blue-100 dark:border-blue-900">
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                                    <BadgeCheck className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-extrabold text-white">Official Government Position</h2>
                                    <p className="text-blue-100 text-sm">What India's agencies and courts have formally stated</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-blue-50 dark:bg-blue-950/30 p-8">
                            <div className="grid sm:grid-cols-2 gap-6 text-sm text-gray-700 dark:text-gray-300">
                                {[
                                    {
                                        title: "Ministry of Home Affairs (MHA)",
                                        desc: "The MHA has issued multiple public advisories stating that no government agency conducts investigations via video call. Citizens are directed to report such calls to 1930 immediately.",
                                    },
                                    {
                                        title: "Telecom Regulatory Authority (TRAI)",
                                        desc: "TRAI has officially clarified it does not contact individuals about SIM deactivation or criminal activity. Any call claiming to be from TRAI about a 'scam' against your number is fraud.",
                                    },
                                    {
                                        title: "Reserve Bank of India (RBI)",
                                        desc: "RBI has warned that it has no 'clearance accounts' or 'escrow wallets' that individuals are ever asked to transfer money into. Any such request is fraudulent.",
                                    },
                                    {
                                        title: "Indian Courts",
                                        desc: "Multiple High Courts have confirmed there are zero provisions in Indian law for 'digital house arrest.' Any attempt to enforce it is itself a criminal act under the IT Act and IPC.",
                                    },
                                ].map(({ title, desc }) => (
                                    <div key={title} className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <strong className="text-gray-900 dark:text-white block mb-1">{title}</strong>
                                            {desc}
                                        </div>
                                    </div>
                                ))}
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
                                Digital Arrest Myths vs. Reality
                            </h2>
                        </div>
                        <div className="space-y-4">
                            {[
                                {
                                    myth: "The caller knew my Aadhaar and bank details, so they must be real officials.",
                                    fact: "Your personal data is available on dark web databases from multiple large-scale leaks. Scammers purchase this data cheaply. Knowing your details is not proof of legitimacy  it's proof of preparation.",
                                },
                                {
                                    myth: "I can verify if the case against me is real by cooperating first.",
                                    fact: "You can verify instantly and for free by simply calling your local police station or checking with a lawyer. You don't need to 'cooperate' with an unknown caller to find out if a case exists against you.",
                                },
                                {
                                    myth: "Hanging up will make the situation worse and result in immediate arrest.",
                                    fact: "Hanging up on a scam call cannot result in any consequence. There is no legal mechanism in India for a phone call to initiate an arrest or summons. The threat of 'immediate arrest' is a pressure tactic.",
                                },
                                {
                                    myth: "Paying the 'security deposit' will end the call and the problem.",
                                    fact: "The first payment proves you're willing to pay. In most documented cases, victims who paid once were approached multiple times  same scammers or new ones who purchased the victim's profile as a 'confirmed payer'.",
                                },
                            ].map(({ myth, fact }) => (
                                <div key={myth} className="grid sm:grid-cols-2 gap-px rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm">
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

                    {/* ── How Scammers Operate ──────────────────────────────── */}
                    <section className="bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-900/50 dark:to-slate-900/50 rounded-2xl p-8 sm:p-12 border border-gray-100 dark:border-gray-800">
                        <span className="inline-block px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 text-xs font-semibold mb-4">
                            Behind the Curtain
                        </span>
                        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6">
                            How Are These Scam Operations Actually Run?
                        </h2>
                        <div className="grid lg:grid-cols-2 gap-8 text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                            <div className="space-y-4">
                                <p>
                                    Indian law enforcement agencies  the CBI, state cyber cells, and the MHA's I4C division 
                                    have busted dozens of digital arrest scam operations. The picture that emerges is
                                    organised, sophisticated, and often cross-border.
                                </p>
                                <p>
                                    Most operations are run from countries like Cambodia, Myanmar, and Dubai, where Indian
                                    nationals are sometimes trafficked and forced to work as scam callers. Others operate
                                    from within India  in rented flats in tier-2 cities, equipped with ring lights,
                                    government seal backdrops, and wardrobes of police/CBI uniforms.
                                </p>
                                <p>
                                    These are not amateur operations. They have HR teams for caller training, technical
                                    teams who create fake video call setups that loop on screen (the "police station backdrop"
                                    can be a pre-recorded video playing behind the caller), and identity research teams who
                                    compile target dossiers from data leaks, LinkedIn profiles, and property records.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { icon: UserX, label: "Caller Research Teams", desc: "Compile target profiles from dark web data and social media before calling" },
                                        { icon: Video, label: "Fake Studio Setups", desc: "Pre-recorded police station backgrounds on loop during video calls" },
                                        { icon: FileText, label: "Forged Document Teams", desc: "Create fake FIRs, warrants and court notices in under 5 minutes" },
                                        { icon: Radio, label: "Money Mule Networks", desc: "Funds moved through dozens of shell accounts across states within minutes" },
                                    ].map(({ icon: Icon, label, desc }) => (
                                        <div key={label} className="p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800">
                                            <Icon className="h-5 w-5 text-slate-500 mb-2" />
                                            <p className="font-semibold text-gray-900 dark:text-white text-xs mb-1">{label}</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">{desc}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800">
                                    <p className="text-xs font-bold text-amber-700 dark:text-amber-300 mb-1">Why is it so hard to catch them?</p>
                                    <p className="text-xs text-gray-700 dark:text-gray-300">
                                        Funds are immediately dispersed across multiple mule accounts in different states.
                                        By the time a complaint is filed and banks are notified, the cash has already been
                                        withdrawn via ATMs or converted to cryptocurrency. Speed of reporting is everything.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ── Stats Table ───────────────────────────────────────── */}
                    <section aria-labelledby="stats-table-heading">
                        <div className="text-center mb-8">
                            <span className="inline-block px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 text-xs font-semibold mb-4">
                                NCRB / MHA I4C Data 2025–26
                            </span>
                            <h2 id="stats-table-heading" className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                Digital Arrest Fraud  Breakdown by Type (India 2026)
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-base">
                                NCB / narcotics impersonation scams have the highest average loss. Fake CBI calls account for nearly a third of all digital arrest complaints.
                            </p>
                        </div>
                        <div className="overflow-x-auto rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                                        <th className="text-left px-5 py-4 font-semibold text-gray-700 dark:text-gray-300">Fraud Type</th>
                                        <th className="text-center px-4 py-4 font-semibold text-gray-700 dark:text-gray-300">% of Complaints</th>
                                        <th className="text-right px-5 py-4 font-semibold text-gray-700 dark:text-gray-300">Avg Loss Per Victim</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
                                    {[
                                        { type: "👮 Fake CBI Officer", pct: "31%", loss: "₹18 Lakh" },
                                        { type: "📊 Fake ED / Income Tax", pct: "24%", loss: "₹22 Lakh" },
                                        { type: "📹 WhatsApp Video Arrest", pct: "18%", loss: "₹28 Lakh" },
                                        { type: "💊 Fake NCB / Narcotics", pct: "12%", loss: "₹31 Lakh" },
                                        { type: "📦 Fake Customs / DHL", pct: "8%", loss: "₹4.5 Lakh" },
                                        { type: "💼 Fake Income Tax Raid / GST", pct: "4%", loss: "₹12 Lakh" },
                                        { type: "📞 Fake TRAI Escalated", pct: "3%", loss: "₹2.1 Lakh" },
                                    ].map(({ type, pct, loss }) => (
                                        <tr key={type} className="bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                            <td className="px-5 py-4 font-medium text-gray-900 dark:text-white">{type}</td>
                                            <td className="px-4 py-4 text-center">
                                                <span className="inline-block px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold">{pct}</span>
                                            </td>
                                            <td className="px-5 py-4 text-right font-bold text-gray-900 dark:text-white">{loss}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="mt-3 text-xs text-gray-400 dark:text-gray-600 text-center">
                            Source: NCRB / MHA I4C Annual Report 2025–26. Percentages rounded to nearest integer.
                        </p>
                    </section>

                    {/* ── More Guides ───────────────────────────────────────── */}
                    <section aria-labelledby="more-guides-heading">
                        <div className="text-center mb-10">
                            <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-semibold mb-4">
                                Deep-Dive Guides
                            </span>
                            <h2 id="more-guides-heading" className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                Related Guides on Digital Arrest Scams
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-base">
                                Detailed breakdowns of each digital arrest scam type  real cases, scripts used, and how to respond.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {[
                                { emoji: "👮", title: "How Fake CBI Officer Scams Work  Real Call Scripts & Cases", desc: "The most common digital arrest variant. Read the exact scripts scammers use and the 3 phrases that unmask a fake CBI officer immediately.", href: "/scams/digital-arrest/fake-cbi-scam/", tag: "Most Common" },
                                { emoji: "📊", title: "Fake ED / Enforcement Directorate Digital Arrest Scams 2026", desc: "In-depth guide to ED impersonation scams  how fake money laundering cases are constructed and why victims comply.", href: "/scams/digital-arrest/fake-ed-scam/", tag: "High Loss" },
                                { emoji: "📹", title: "WhatsApp Video Call Digital Arrest  How It Works & Real Cases", desc: "WhatsApp video is used to create 'visual authority.' Learn why the video call is the most psychologically effective part of the scam.", href: "/scams/digital-arrest/whatsapp-video-arrest/", tag: "Extreme Risk" },
                                { emoji: "🗣️", title: "PM Modi Warns About Digital Arrest  Mann ki Baat Summary", desc: "PM Modi's October 27, 2024 Mann ki Baat warning on digital arrest: key quotes, MHA advisory, and what changed after the national address.", href: "/blog/pm-modi-warns-digital-arrest/", tag: "Official Statement" },
                                { emoji: "📦", title: "Fake Customs / DHL Parcel Digital Arrest Scams  Complete Guide", desc: "The 'your parcel contains drugs' variant  how fake customs officers create international urgency and demand clearance fees.", href: "/scams/digital-arrest/fake-customs-scam/", tag: "Growing Fast" },
                                { emoji: "📝", title: "How to File a Cybercrime Complaint in India  Step-by-Step", desc: "Complete guide to reporting cybercrime: cybercrime.gov.in walkthrough, 1930 helpline, FIR filing, and what happens after you report.", href: "/blog/file-cybercrime-complaint-india/", tag: "Practical Guide" },
                            ].map(({ emoji, title, desc, href, tag }) => (
                                <Link key={href} href={'/blog'} className="group flex flex-col bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
                                    <div className="flex items-start justify-between mb-3">
                                        <span className="text-2xl">{emoji}</span>
                                        <span className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-semibold">{tag}</span>
                                    </div>
                                    <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors line-clamp-2">{title}</h3>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed flex-1 line-clamp-3">{desc}</p>
                                    <div className="mt-4 text-xs font-semibold text-red-600 dark:text-red-400 flex items-center gap-1">
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
                                Frequently Asked Questions About Digital Arrest in India
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400">Everything you need to know about digital arrest scams  answered clearly.</p>
                        </div>
                        <div className="space-y-3">
                            {faqs.map(({ q, a }) => (
                                <details key={q} className="group rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
                                    <summary className="cursor-pointer list-none flex items-center justify-between p-5 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                        <span className="text-sm font-semibold text-gray-900 dark:text-white pr-4">{q}</span>
                                        <svg className="ml-4 h-4 w-4 flex-shrink-0 text-gray-400 transition-transform duration-200 group-open:rotate-180" viewBox="0 0 20 20" fill="none" aria-hidden>
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
                    <section aria-labelledby="tools-heading">
                        <div className="text-center mb-10">
                            <span className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-4">
                                Free Tools
                            </span>
                            <h2 id="tools-heading" className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                RakshaAI Free Safety Tools
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-base">
                                Check numbers, websites, and UPI IDs before you respond  it takes under 10 seconds.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-3 gap-5">
                            {[
                                { emoji: "📞", title: "Phone Number Checker", desc: "Check if a phone number has been reported as a scam number by other Indians. Instant result, no registration.", href: "/phone-number-checker/", cta: "Check Number →" },
                                { emoji: "🌐", title: "Website Safety Checker", desc: "Verify if a website is safe before clicking a link. Checks for phishing, malware, and fake government sites.", href: "/website-safety-checker/", cta: "Check Website →" },
                                { emoji: "💸", title: "UPI ID Checker", desc: "Check if a UPI ID has been flagged for fraud before making any payment. Prevent digital arrest scam payments.", href: "/upi-id-checker/", cta: "Check UPI ID →" },
                            ].map(({ emoji, title, desc, href, cta }) => (
                                <Link key={href} href={href} className="group flex flex-col items-start bg-gradient-to-br from-slate-50 to-white dark:from-slate-900/50 dark:to-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
                                    <div className="text-3xl mb-3">{emoji}</div>
                                    <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{title}</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1">{desc}</p>
                                    <div className="mt-4 text-sm font-bold text-blue-600 dark:text-blue-400">{cta}</div>
                                </Link>
                            ))}
                        </div>
                    </section>
{/* ── What To Do ────────────────────────────────────────── */}
                    <section>
                        <div className="text-center mb-12">
                            <span className="inline-block px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-xs font-semibold mb-4">
                                Protection Guide
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                How to Protect Yourself from Digital Arrest Scams  5 Rules
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-base">
                                These five rules, if memorised, make you completely immune to digital arrest fraud.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="relative w-full rounded-2xl overflow-hidden mb-8 shadow-md">
                                <Image
                                    src="/image/report-scam-number-steps-india-rakshaai.jpg"
                                    alt="Step-by-step guide to reporting a digital arrest scam in India  dial 1930 cyber crime helpline, file complaint on cybercrime.gov.in, contact local police, RakshaAI"
                                    title="How to Report a Digital Arrest Scam in India | RakshaAI"
                                    width={1200}
                                    height={480}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            <div className="hidden sm:block absolute left-[27px] top-10 bottom-10 w-0.5 bg-gradient-to-b from-red-300 via-amber-300 to-green-300 dark:from-red-800 dark:via-amber-800 dark:to-green-800" />
                            <div className="space-y-5">
                                {whatToDo.map(({ step, title, desc, urgent }) => (
                                    <div key={step} className="relative flex gap-6 items-start">
                                        <div className={`relative z-10 flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-white font-extrabold text-sm shadow-lg ${urgent ? "bg-gradient-to-br from-red-500 to-rose-600" : "bg-gradient-to-br from-amber-500 to-orange-500"}`}>
                                            {step}
                                            {urgent && <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-400 animate-ping" />}
                                        </div>
                                        <div className={`flex-1 p-6 rounded-2xl border hover:shadow-md transition-all ${urgent ? "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-900" : "bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800"}`}>
                                            <div className="flex items-center gap-3 mb-2">
                                                <h3 className="font-bold text-gray-900 dark:text-white text-base">{title}</h3>
                                                {urgent && <span className="px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400 text-xs font-bold">DO THIS FIRST</span>}
                                            </div>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                    {/* ── Scam Alerts ────────────────────────────────────────── */}
                    <section aria-labelledby="alerts-heading">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="flex-1 h-px bg-gray-100 dark:bg-gray-800" />
                            <span id="alerts-heading" className="px-4 py-1.5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-xs font-bold">
                                🚨 Latest Scam Alerts  2026
                            </span>
                            <div className="flex-1 h-px bg-gray-100 dark:bg-gray-800" />
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                { date: "March 2026", tag: "AI Voice", title: "AI Voice Clone Digital Arrest Scams Surge in Q1 2026", desc: "Scammers now using AI-generated voice cloning to impersonate real IPS officers by name. Victims report hearing voices 'identical' to known officers. MHA advisory issued March 2026.", color: "from-red-500 to-rose-600" },
                                { date: "Feb 2026", tag: "Fake ED", title: "Fake Enforcement Directorate Digital Arrest Wave  Q1 2026", desc: "I4C reports a 340% surge in fake ED digital arrest calls targeting business owners. Average loss: ₹22 lakh. Callers claim PMLA violations and demand 'compliance fees.'", color: "from-orange-500 to-amber-600" },
                                { date: "Feb 2026", tag: "Fake NCB", title: "Fake NCB / Narcotics Digital Arrest Cases Rise 280% (Feb 2026)", desc: "WhatsApp video calls impersonating Narcotics Control Bureau officers. Scammers show fake 'drug seizure' documents and demand bail amounts. Highest avg loss of all digital arrest variants.", color: "from-violet-500 to-purple-600" },
                                { date: "Jan 2026", tag: "Deepfake", title: "MHA Reports Deepfake Officers Used in Digital Arrest Scams", desc: "Ministry of Home Affairs warns of deepfake video technology being used to create 'live' video calls featuring AI-generated uniformed officers. Real police officers' faces used without consent.", color: "from-blue-500 to-indigo-600" },
                            ].map(({ date, tag, title, desc, color }) => (
                                <div key={title} className="flex gap-4 p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow">
                                    <div className={`flex-shrink-0 w-1.5 rounded-full bg-gradient-to-b ${color}`} />
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className={`px-2 py-0.5 rounded-full bg-gradient-to-r ${color} text-white text-xs font-bold`}>{tag}</span>
                                            <span className="text-xs text-gray-400">{date}</span>
                                        </div>
                                        <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1">{title}</h3>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── Final CTA ─────────────────────────────────────────── */}
                    <section className="rounded-2xl bg-gradient-to-br from-slate-700 via-red-700 to-rose-700 p-8 sm:p-12 text-white text-center shadow-2xl relative overflow-hidden">
                        <div className="pointer-events-none absolute inset-0">
                            <div className="absolute -top-10 -left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                        </div>
                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-xs font-semibold mb-6 border border-white/20">
                                <Shield className="h-4 w-4" />
                                Free Protection Tools
                            </div>
                            <h2 className="text-2xl sm:text-4xl font-extrabold mb-4 leading-tight">
                                Stay One Step Ahead.<br className="hidden sm:block" />
                                Report Scams. Protect India.
                            </h2>
                            <p className="text-red-100 mb-8 text-sm sm:text-base max-w-xl mx-auto">
                                If you've received a digital arrest call  or know someone who has  report it now.
                                Every report helps RakshaAI and law enforcement track scammer networks, warn others,
                                and make it harder for these criminal syndicates to operate.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <ReportScamButton className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-red-600 font-bold text-sm shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                                    <MessageSquareWarning className="h-5 w-5" />
                                    Report a Digital Arrest Scam
                                    <ArrowRight className="h-4 w-4" />
                                </ReportScamButton>
                                <Link
                                    href="/phone-number-checker/"
                                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 text-white font-semibold text-sm border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300"
                                >
                                    Check a Suspicious Number
                                </Link>
                            </div>
                            <p className="mt-6 text-red-200 text-xs">
                                🇮🇳 India-focused digital arrest guidance · Free consumer access · No registration required
                            </p>
                        </div>
                    </section>

                </div>
            </main>
        </DefaultLayout>
    );
}
