import type { Metadata } from "next";
import Link from "next/link";
import DefaultLayout from "@/components/DefaultLayout";
import DocumentUploadInput from "./DocumentUploadInput";
import {
    ScanEye,
    FileWarning,
    Search,
    CheckCircle2,
    AlertTriangle,
    Zap,
    Lock,
    ChevronDown,
    ChevronRight,
    FileText,
    Briefcase,
    IdCard,
    Receipt,
    GraduationCap,
    Stamp,
    FileSearch,
    Landmark,
    Globe,
    Phone,
    Shield,
    Eye,
    Clock,
    FileCheck2,
} from "lucide-react";
import { faqPageSchema, jsonLd, softwareApplicationSchema, breadcrumbListSchema } from "@/lib/seo/schema";

// ── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
    title: "Document Scam Checker – Verify Offer Letters, Invoices & IDs Free",
    description:
        "Upload any offer letter, invoice, ID, or receipt and let RakshaAI's vision AI check it for forgery signals, fake logos, inconsistent details, and scam patterns. Free, instant, built for India.",
    keywords: [
        "document scam checker india",
        "fake offer letter checker",
        "verify job offer letter online",
        "check if invoice is fake",
        "fake id card checker india",
        "forged document detector",
        "fake certificate checker",
        "document forgery detection ai",
        "is this offer letter real",
        "check document authenticity free",
    ],
    alternates: {
        canonical: "https://rakshaai.co/document-checker",
    },
    robots: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
    },
    openGraph: {
        title: "Document Scam Checker – Verify Any Document Free | RakshaAI",
        description:
            "Upload a job offer letter, invoice, or ID to instantly check for forgery signals and scam patterns using AI document analysis.",
        url: "https://rakshaai.co/document-checker",
        type: "website",
        siteName: "RakshaAI",
        images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Document Scam Checker | RakshaAI" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Document Scam Checker – Verify Any Document Free | RakshaAI",
        description: "Upload a job offer letter, invoice, or ID to instantly check for forgery signals and scam patterns.",
        images: ["/opengraph-image"],
    },
    other: {
        "geo.region": "IN",
        language: "en-IN",
    },
};

// ── JSON-LD ─────────────────────────────────────────────────────────────────
const structuredData = softwareApplicationSchema({
    name: "RakshaAI Document Scam Checker",
    url: "/document-checker",
    description:
        "Free AI-powered document analysis to detect fake offer letters, invoices, IDs, and receipts. Extracts key fields, flags forgery signals, and cross-checks the issuing company's trust score. Built for India.",
    featureList: [
        "AI document field extraction",
        "Forgery and tampering detection",
        "Fake offer letter verification",
        "ID and certificate authenticity check",
        "Issuing company trust cross-check",
    ],
});

const breadcrumbSchema = breadcrumbListSchema([
    { name: "Home", url: "/" },
    { name: "Document Checker", url: "/document-checker" },
]);

const faqs = [
    {
        q: "What kind of documents can I check?",
        a: "You can upload employment offer letters, appointment letters, invoices, ID cards (Aadhaar, PAN, voter ID, passport), educational certificates and marksheets, and receipts. Accepted formats are JPG, PNG, WEBP, or PDF, up to 15MB.",
    },
    {
        q: "How does the document checker work?",
        a: "Our vision AI reads the document, extracts every key field (names, dates, amounts, addresses, signatures, stamps), and checks for logical inconsistencies, missing branding, mismatched fonts, or other forgery indicators. If the document references a company, we also cross-check that company's website trust signals against our database.",
    },
    {
        q: "Is my uploaded document stored?",
        a: "Your document is sent securely for one-time analysis and is not used to train models. Always avoid uploading documents containing highly sensitive personal data such as full ID numbers unless it is necessary for verification.",
    },
    {
        q: "Can this tool tell me for certain if a job offer letter is fake?",
        a: "The checker flags common forgery signals — inconsistent fonts, missing letterhead, illogical dates, digitally inserted signatures, and mismatched personal details across pages. It gives you a confidence-based verdict, not a legal certification. Always independently verify the offer with the company's official HR email or careers page before paying any fee or sharing sensitive documents.",
    },
    {
        q: "Does the checker verify Aadhaar, PAN, or voter ID cards?",
        a: "Yes. The AI extracts the fields present on ID documents (name, date of birth, ID number, issue/expiry dates) and looks for visual tampering signs such as inconsistent fonts, mismatched photos, or edited QR codes. It cannot query India's official Aadhaar/PAN databases directly — for legally binding verification, always use the issuing authority's official portal.",
    },
    {
        q: "Why did the tool flag my genuine document as suspicious?",
        a: "Low-resolution scans, photocopies, and documents photographed at an angle can sometimes trigger false positives because the AI can't clearly read fine details like signatures or stamps. Re-upload a clearer, well-lit scan or photo, and always use your own judgement alongside the tool's output.",
    },
    {
        q: "Is the document checker free?",
        a: "Yes, completely free with no sign-up. RakshaAI believes every Indian should have access to basic document verification tools, whether you're checking a job offer, a rental agreement, or an invoice from a new vendor.",
    },
    {
        q: "What should I do if the document turns out to be fake?",
        a: "Do not pay any fee, share OTPs, or hand over ID copies. Verify directly with the organisation using contact details from their official website (not the ones printed on the suspicious document). Report the fraud to the National Cybercrime Helpline 1930 or cybercrime.gov.in, and report it on RakshaAI so other people searching the same company or document type are warned.",
    },
];

const faqSchema = faqPageSchema(faqs.map(({ q, a }) => ({ question: q, answer: a })));

// ── Page Data ────────────────────────────────────────────────────────────────
const stats = [
    { value: "Instant", label: "AI Analysis", icon: Zap },
    { value: "6+", label: "Document Types", icon: FileText },
    { value: "8+", label: "Fields Extracted", icon: FileSearch },
    { value: "Free", label: "For Consumers", icon: Shield },
];

const scamTypes = [
    {
        type: "Fake Job Offer Letters",
        description:
            "Scammers copy a real company's logo and letterhead, run a fake interview over chat or a personal number, then send an appointment letter demanding a \"registration\" or \"security deposit\" fee. Major Indian IT employers, including TCS and Infosys, run official recruitment fraud alert pages confirming they never charge a fee at any stage of hiring — a fee request alone is enough to call the offer fake.",
        icon: Briefcase,
        color: "red",
    },
    {
        type: "Forged ID Cards",
        description:
            "Fraud rings sell computer-generated Aadhaar, PAN, and voter ID cards online. In one Delhi Police case, a site let users generate fake Aadhaar cards with a QR code that simply echoed the typed-in details instead of linking to the real UIDAI database.",
        icon: IdCard,
        color: "orange",
    },
    {
        type: "Fake GST & Vendor Invoices",
        description:
            "Shell firms issue invoices for goods or services that were never delivered, or genuine-looking vendor invoices are altered to redirect payment to a fraudster's account. India's tax authorities flagged over 15,000 fake-invoice ITC fraud cases worth ₹58,772 crore in a single year.",
        icon: Receipt,
        color: "yellow",
    },
    {
        type: "Forged Certificates & Marksheets",
        description:
            "Fake degree, diploma, and marksheet rackets produce convincing academic documents for a fee, often used to pad resumes or claim scholarships. Indian authorities have periodically busted forgery networks producing fake educational certificates at scale.",
        icon: GraduationCap,
        color: "purple",
    },
    {
        type: "Fake Rental & Property Documents",
        description:
            "Fraudsters present forged rent agreements, ownership papers, or NOC letters to collect advance deposits for properties they don't own or that don't exist. Mismatched stamps, missing registration numbers, and inconsistent dates are common tells.",
        icon: Landmark,
        color: "pink",
    },
    {
        type: "Fake Government Notices",
        description:
            "Fraudulent notices impersonating income tax, EPFO, courts, or police departments pressure victims into paying \"fines\" or sharing ID copies. This tactic underpins \"digital arrest\" scams, which the Ministry of Home Affairs attributes 9% of India's 2025 cyber-fraud losses to. Genuine government notices never demand instant UPI payment or threaten immediate arrest by phone.",
        icon: Stamp,
        color: "cyan",
    },
];

const verificationSteps = [
    {
        title: "Check the Letterhead & Branding",
        detail:
            "Compare the logo, font, and letterhead against the organisation's official website or previous genuine communication. Blurry logos, stretched proportions, and mismatched colour shades are common signs of a copy-pasted forgery.",
    },
    {
        title: "Check Formatting, Dates & Numbers",
        detail:
            "Look for inconsistent fonts within the same document, illogical date sequences (an issue date after an expiry date, for example), signatures or stamps with a different background than the page, and personal details that vary slightly between sections.",
    },
    {
        title: "Use RakshaAI's AI Document Checker",
        detail:
            "Upload the document above. Our AI extracts every field, flags inconsistencies a human eye can miss, and — when a company is named on the document — cross-checks that company's website trust signals in seconds.",
    },
];

const howItWorks = [
    {
        step: "01",
        title: "Upload the Document",
        detail: "Drag and drop or select a JPG, PNG, WEBP, or PDF file up to 15MB. No account or sign-up required.",
        icon: FileText,
        accent: "from-indigo-500 to-blue-500",
        bg: "from-indigo-50 to-blue-50/50 dark:from-indigo-950/40 dark:to-blue-950/20",
        border: "border-indigo-200/80 dark:border-indigo-800/40",
        wm: "text-indigo-100 dark:text-indigo-900/50",
    },
    {
        step: "02",
        title: "AI Extracts Every Field",
        detail: "Vision AI reads names, dates, amounts, addresses, ID numbers, and signatures directly from the document image.",
        icon: FileSearch,
        accent: "from-blue-500 to-cyan-500",
        bg: "from-blue-50 to-cyan-50/50 dark:from-blue-950/40 dark:to-cyan-950/20",
        border: "border-blue-200/80 dark:border-blue-800/40",
        wm: "text-blue-100 dark:text-blue-900/50",
    },
    {
        step: "03",
        title: "Forgery & Consistency Scan",
        detail: "The document is checked for logical inconsistencies, missing branding, digitally inserted signatures, and manipulation clues.",
        icon: ScanEye,
        accent: "from-violet-500 to-purple-600",
        bg: "from-violet-50 to-purple-50/50 dark:from-violet-950/40 dark:to-purple-950/20",
        border: "border-violet-200/80 dark:border-violet-800/40",
        wm: "text-violet-100 dark:text-violet-900/50",
    },
    {
        step: "04",
        title: "Company Trust Cross-Check",
        detail: "If a company is named, we cross-check its website trust score so you know who you're really dealing with.",
        icon: CheckCircle2,
        accent: "from-emerald-500 to-green-500",
        bg: "from-emerald-50 to-green-50/50 dark:from-emerald-950/40 dark:to-green-950/20",
        border: "border-emerald-200/80 dark:border-emerald-800/40",
        wm: "text-emerald-100 dark:text-emerald-900/50",
    },
];

const whatToDoSteps = [
    {
        step: "Step 1",
        title: "Don't Pay, Don't Share",
        body: "Stop immediately. Do not pay any \"registration,\" \"security deposit,\" or \"processing\" fee, and do not share OTPs, ID copies, or bank details based on the document alone — no legitimate employer, bank, or government office asks for money to issue a document.",
        color: "from-red-500 to-rose-500",
        bg: "bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800/50",
    },
    {
        step: "Step 2",
        title: "Verify Through an Official Channel",
        body: "Never call the phone number printed on the suspicious document. Instead, look up the organisation's official website or customer care number independently and confirm whether the offer, invoice, or notice is genuine.",
        color: "from-orange-500 to-amber-500",
        bg: "bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800/50",
    },
    {
        step: "Step 3",
        title: "Report to Cybercrime Helpline 1930",
        body: "Call India's National Cybercrime Reporting Helpline 1930 or file a complaint at cybercrime.gov.in. Provide the document, any payment details already shared, and communication records (calls, emails, messages) with the fraudster.",
        color: "from-yellow-500 to-orange-500",
        bg: "bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-800/50",
    },
    {
        step: "Step 4",
        title: "Alert the Impersonated Organisation",
        body: "If a real company or government body's name was used, inform their official grievance or HR email so they can warn other candidates or customers and, where relevant, pursue legal action against the fraudster.",
        color: "from-amber-500 to-yellow-500",
        bg: "bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800/50",
    },
    {
        step: "Step 5",
        title: "Report It on RakshaAI",
        body: "Report the fake document, phone number, or UPI ID through RakshaAI so it's added to our database, helping the next person who searches the same company or checks the same document.",
        color: "from-indigo-500 to-violet-500",
        bg: "bg-indigo-50 dark:bg-indigo-950/20 border-indigo-200 dark:border-indigo-800/50",
    },
];

const supportedDocs = [
    { icon: Briefcase, title: "Offer & Appointment Letters", detail: "Extracts company name, role, salary, joining date, and signatory details." },
    { icon: IdCard, title: "ID Cards", detail: "Aadhaar, PAN, voter ID, passport — reads name, DOB, ID number, and validity dates." },
    { icon: Receipt, title: "Invoices & Receipts", detail: "Reads vendor details, amounts, GST numbers, and transaction dates." },
    { icon: GraduationCap, title: "Certificates & Marksheets", detail: "Reads institute, board, result, and passing year for each qualification listed." },
];

const redFlagCategories = [
    {
        category: "Visual & Design Inconsistencies",
        icon: Eye,
        colorBg: "bg-red-100 dark:bg-red-950/50",
        colorIcon: "text-red-600 dark:text-red-400",
        tips: [
            "Blurry or stretched logo that doesn't match the official one",
            "Multiple fonts used for what should be uniform text",
            "Signatures or stamps that look digitally pasted with a different background",
        ],
    },
    {
        category: "Content & Logic Errors",
        icon: AlertTriangle,
        colorBg: "bg-orange-100 dark:bg-orange-950/50",
        colorIcon: "text-orange-600 dark:text-orange-400",
        tips: [
            "Issue date that comes after the expiry or joining date",
            "Personal details (name, address, DOB) that vary slightly across the same document",
            "Generic email domains (gmail.com, yahoo.com) used for official company communication",
        ],
    },
    {
        category: "Pressure & Payment Requests",
        icon: Clock,
        colorBg: "bg-yellow-100 dark:bg-yellow-950/50",
        colorIcon: "text-yellow-600 dark:text-yellow-400",
        tips: [
            "A fee demanded before you can \"activate\" the offer, certificate, or refund",
            "Urgency to pay or respond within a few hours to avoid \"losing\" the opportunity",
            "Payment requested via personal UPI ID rather than an official company account",
        ],
    },
    {
        category: "Verification Gaps",
        icon: FileCheck2,
        colorBg: "bg-purple-100 dark:bg-purple-950/50",
        colorIcon: "text-purple-600 dark:text-purple-400",
        tips: [
            "No way to independently confirm the document on the organisation's official website",
            "QR codes that don't scan to an official government or company page",
            "Reluctance from the sender to verify over a company-listed phone number or email",
        ],
    },
];

// ── Page ──────────────────────────────────────────────────────────────────────
export default function DocumentCheckerPage() {
    return (
        <DefaultLayout>
            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLd([structuredData, faqSchema, breadcrumbSchema]) }}
            />

            <div className="min-h-screen">
                {/* ── Hero ─────────────────────────────────────────────────── */}
                <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-indigo-50/40 dark:from-gray-950 dark:via-gray-900 dark:to-indigo-950/20 pt-16 pb-20 px-4">
                    {/* Background */}
                    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#6366f112_1px,transparent_1px),linear-gradient(to_bottom,#6366f112_1px,transparent_1px)] bg-[size:64px_64px] dark:bg-[linear-gradient(to_right,#6366f106_1px,transparent_1px),linear-gradient(to_bottom,#6366f106_1px,transparent_1px)]" />
                        <div className="absolute -top-32 -left-24 w-[520px] h-[520px] bg-indigo-400/10 rounded-full blur-3xl" />
                        <div className="absolute top-10 -right-24 w-[420px] h-[420px] bg-violet-400/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] bg-purple-300/8 rounded-full blur-3xl" />
                    </div>

                    <div className="max-w-4xl mx-auto text-center">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-semibold mb-7 border border-indigo-200/70 dark:border-indigo-800/50 shadow-sm">
                            <ScanEye className="h-3.5 w-3.5" />
                            India&apos;s #1 Free Document Scam Checker
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-gray-900 dark:text-white leading-[1.1] tracking-tight mb-5">
                            Is This Document{" "}
                            <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 bg-clip-text text-transparent">
                                Real or Fake?
                            </span>{" "}
                            <span className="block text-2xl sm:text-3xl font-semibold text-gray-500 dark:text-gray-400 mt-2">
                                Free AI Document Checker for India
                            </span>
                        </h1>

                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-6 leading-relaxed">
                            Received an offer letter, invoice, ID, or receipt that feels off? Before you pay a fee,
                            share your ID, or accept a job, run it through RakshaAI&apos;s{" "}
                            <strong className="text-indigo-700 dark:text-indigo-400">AI-powered document checker</strong>.
                            We extract every field, flag forgery signals, and cross-check the issuing company&apos;s
                            trust score — instantly.
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-4xl mx-auto mb-10 leading-relaxed">
                            Whether it&apos;s a fake job offer letter, a forged ID card, a manipulated invoice, or a
                            counterfeit certificate — our tool helps you verify any document and spot manipulation
                            before it costs you. Upload the file and get your result in seconds.
                        </p>

                        {/* Input card */}
                        <div className="max-w-3xl mx-auto mb-10">
                            <div className="relative bg-white dark:bg-gray-900/90 rounded-2xl px-6 pt-5 pb-4 border border-gray-200/80 dark:border-gray-700/60 shadow-[0_12px_48px_-8px_rgba(99,102,241,0.18)] dark:shadow-[0_12px_48px_-8px_rgba(99,102,241,0.07)]">
                                {/* Top shimmer accent */}
                                <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent rounded-full" />

                                <div className="flex items-start gap-3 mb-4 text-left">
                                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center flex-shrink-0 shadow-md shadow-indigo-500/25">
                                        <FileText className="h-4 w-4 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 leading-snug">
                                            Upload a document to get an instant forgery risk report
                                        </p>
                                        <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                                            ✓ Field extraction &nbsp;·&nbsp; ✓ Forgery signals &nbsp;·&nbsp; ✓ Company trust check
                                        </p>
                                    </div>
                                </div>

                                <DocumentUploadInput />

                                <p className="mt-3 text-xs text-gray-400 text-center flex items-center justify-center gap-2">
                                    <Lock className="h-3 w-3" /> Your data is secure. We never store or share the documents you check.
                                </p>
                            </div>
                        </div>

                        {/* Stats grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto mb-12">
                            {stats.map(({ value, label, icon: Icon }) => (
                                <div
                                    key={label}
                                    className="group flex flex-col items-center gap-1.5 px-4 py-4 rounded-xl bg-white dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                                >
                                    <Icon className="h-4 w-4 text-indigo-500/80 group-hover:text-indigo-500 transition-colors" />
                                    <span className="text-xl font-extrabold bg-gradient-to-br from-indigo-600 to-violet-600 bg-clip-text text-transparent tabular-nums">
                                        {value}
                                    </span>
                                    <span className="text-[11px] text-gray-500 dark:text-gray-400 leading-tight text-center">
                                        {label}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Scroll cue */}
                        <div className="flex flex-col items-center gap-1.5 text-gray-400 dark:text-gray-500 animate-bounce">
                            <span className="text-xs font-medium">Learn More</span>
                            <ChevronDown className="h-5 w-5" />
                        </div>
                    </div>
                </section>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

                    {/* ── How to Spot a Fake Document ──────────────────────── */}
                    <section aria-labelledby="verify-steps-heading">
                        <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
                            3-Step Verification
                        </span>
                        <h2
                            id="verify-steps-heading"
                            className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3"
                        >
                            How to Spot a Fake Document in 3 Steps
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl leading-relaxed">
                            Forging a document takes a scammer minutes with basic photo-editing software. Spotting one
                            takes even less time once you know what to look for.
                        </p>

                        <div className="space-y-5">
                            {verificationSteps.map(({ title, detail }, i) => (
                                <div
                                    key={title}
                                    className={
                                        i === verificationSteps.length - 1
                                            ? "rounded-2xl bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-950/20 dark:to-violet-950/20 border border-indigo-200 dark:border-indigo-800/50 p-6 sm:p-8"
                                            : "rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-6 sm:p-8 shadow-sm"
                                    }
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center flex-shrink-0 text-white font-extrabold text-sm">
                                            {i + 1}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">{detail}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── Document Fraud Statistics ─────────────────────────── */}
                    <section aria-labelledby="statistics-heading" className="bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-950/20 dark:to-violet-950/20 border border-indigo-100 dark:border-indigo-900/50 rounded-2xl p-8 sm:p-10">
                        <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
                            The Scale of the Problem
                        </span>
                        <h2
                            id="statistics-heading"
                            className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-2 mb-8"
                        >
                            Document Fraud in India
                        </h2>
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">India&apos;s Overall Cyber Fraud Picture (2025)</h3>
                                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                    India recorded{" "}
                                    <strong className="text-indigo-700 dark:text-indigo-300">28.15 lakh cybercrime cases in 2025 — a 24% jump from 22.68 lakh in 2024</strong>{" "}
                                    — with total reported losses of ₹22,495 crore, per Ministry of Home Affairs data
                                    presented to the Lok Sabha in February 2026. Investment fraud alone accounted for
                                    76% of financial losses, while &quot;digital arrest&quot; scams — which rely on forged
                                    legal notices, fake arrest warrants, and counterfeit police IDs — made up 9%. The
                                    government&apos;s Citizen Financial Cyber Fraud Reporting System has helped recover
                                    ₹7,130 crore across more than 23 lakh complaints since it launched in 2021.
                                </p>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                    {[
                                        { stat: "28.15 Lakh", label: "Cybercrime cases in 2025" },
                                        { stat: "24%", label: "Rise in cases vs 2024" },
                                        { stat: "₹22,495 Cr", label: "Reported losses in 2025" },
                                        { stat: "₹7,130 Cr", label: "Recovered via I4C since 2021" },
                                    ].map(({ stat, label }) => (
                                        <div key={label} className="bg-white dark:bg-gray-900 rounded-xl p-3 border border-indigo-100 dark:border-indigo-900/50 text-center">
                                            <div className="text-lg font-extrabold text-indigo-700 dark:text-indigo-400">{stat}</div>
                                            <div className="text-xs text-gray-500 dark:text-gray-400 leading-tight mt-0.5">{label}</div>
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-3 text-xs text-gray-400 dark:text-gray-600">
                                    Source:{" "}
                                    <a href="https://theprint.in/india/cybercrime-saw-24-spike-in-2025-indians-lost-rs-22495-crore-mainly-in-investment-scams/2859930/" target="_blank" rel="noopener noreferrer" className="underline hover:text-indigo-500">
                                        Ministry of Home Affairs data via The Print, February 2026
                                    </a>
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Fake Invoice &amp; GST Fraud</h3>
                                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                    India&apos;s tax authorities detected{" "}
                                    <strong className="text-indigo-700 dark:text-indigo-300">15,283 fake-invoice input tax credit (ITC) fraud cases worth ₹58,772 crore in FY 2024–25</strong>,
                                    and a further 24,109 cases worth ₹41,664 crore up to October 2025. The same forged-invoice
                                    tactics — mismatched vendor details, shell-company letterheads, and altered payment
                                    instructions — are used against individual businesses and freelancers every day.
                                </p>
                                <p className="text-xs text-gray-400 dark:text-gray-600">
                                    Source:{" "}
                                    <a href="https://theprobe.in/governance/gst-invoice-fraud-slipped-through-audits-11811767" target="_blank" rel="noopener noreferrer" className="underline hover:text-indigo-500">
                                        The Probe, GST invoice fraud audit report
                                    </a>
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Forged ID Cards</h3>
                                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                                    Delhi Police&apos;s cyber cell has busted online rackets selling computer-generated Aadhaar,
                                    PAN, and voter ID cards on demand — in one case, the QR code on the fake Aadhaar simply
                                    echoed whatever details the buyer typed in, rather than linking to the real UIDAI
                                    database. A separate raid on a single physical shop seized 121 fake Aadhaar cards, 73
                                    PAN cards (some with counterfeit holograms), and 181 voter ID cards, underlining how
                                    easily a convincing-looking document can be manufactured.
                                </p>
                                <p className="text-xs text-gray-400 dark:text-gray-600">
                                    Source:{" "}
                                    <a href="https://www.aninews.in/news/national/general-news/delhi-police-busts-fake-identity-card-racket-three-arrested-aadhaar-misuse-exposed20250429063604/" target="_blank" rel="noopener noreferrer" className="underline hover:text-indigo-500">
                                        ANI News, Delhi Police identity card racket bust
                                    </a>
                                    {" · "}
                                    <a href="https://www.freepressjournal.in/tech/cyber-racket-busted-in-delhi-for-selling-fake-aadhaar-pan-online-all-details" target="_blank" rel="noopener noreferrer" className="underline hover:text-indigo-500">
                                        Free Press Journal
                                    </a>
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Fake Job Offer Letters</h3>
                                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                                    Fake offer letters impersonating major Indian IT employers are common enough that
                                    companies now run dedicated warning pages. TCS states it{" "}
                                    <strong className="text-indigo-700 dark:text-indigo-300">never asks candidates for any payment or security deposit</strong>{" "}
                                    at any stage of recruitment, and Infosys maintains a similar official recruitment
                                    fraud alert. A fee request tied to an offer letter is, by the employer&apos;s own
                                    account, proof the letter is fake.
                                </p>
                                <p className="text-xs text-gray-400 dark:text-gray-600">
                                    Source:{" "}
                                    <a href="https://www.tcs.com/careers/india/recruitment-fraud-alert" target="_blank" rel="noopener noreferrer" className="underline hover:text-indigo-500">
                                        TCS Recruitment Fraud Alert
                                    </a>
                                    {" · "}
                                    <a href="https://www.infosys.com/careers/apply/recruitment-fraud-alert.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-indigo-500">
                                        Infosys Recruitment Fraud Alert
                                    </a>
                                </p>
                            </div>

                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                These figures make one thing clear: a convincing logo and letterhead are no longer
                                proof that a document is genuine. Verifying before you pay, sign, or share is common
                                sense, not paranoia.
                            </p>
                        </div>
                    </section>

                    {/* ── Common Document Scam Types ────────────────────────── */}
                    <section aria-labelledby="scam-types-heading">
                        <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
                            Understand the Threat
                        </span>
                        <h2
                            id="scam-types-heading"
                            className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3"
                        >
                            Common Document Scam Types in India
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-3xl">
                            From fake job offers to forged ID cards, document fraud takes many forms. Here are the six
                            types RakshaAI&apos;s users report most often.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {scamTypes.map((scam) => {
                                const colorMap: Record<string, string> = {
                                    red: "border-red-200 dark:border-red-800/50 bg-red-50 dark:bg-red-950/20",
                                    orange: "border-orange-200 dark:border-orange-800/50 bg-orange-50 dark:bg-orange-950/20",
                                    yellow: "border-yellow-200 dark:border-yellow-800/50 bg-yellow-50 dark:bg-yellow-950/20",
                                    purple: "border-purple-200 dark:border-purple-800/50 bg-purple-50 dark:bg-purple-950/20",
                                    pink: "border-pink-200 dark:border-pink-800/50 bg-pink-50 dark:bg-pink-950/20",
                                    cyan: "border-cyan-200 dark:border-cyan-800/50 bg-cyan-50 dark:bg-cyan-950/20",
                                };
                                return (
                                    <div key={scam.type} className={`rounded-xl border p-5 ${colorMap[scam.color]}`}>
                                        <div className="flex items-start gap-3 mb-3">
                                            <div className="w-9 h-9 rounded-lg bg-white dark:bg-gray-900 shadow-sm flex items-center justify-center flex-shrink-0 border border-gray-100 dark:border-gray-800">
                                                <scam.icon className="h-4 w-4 text-gray-700 dark:text-gray-300" />
                                            </div>
                                            <h3 className="font-bold text-gray-900 dark:text-white text-sm">
                                                {scam.type}
                                            </h3>
                                        </div>
                                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                                            {scam.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="mt-8 bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-800/50 rounded-xl p-6">
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center flex-shrink-0">
                                    <Lock className="h-4 w-4 text-white" />
                                </div>
                                <div>
                                    <p className="font-bold text-indigo-900 dark:text-indigo-100 mb-1">
                                        The Golden Rule — याद रखें
                                    </p>
                                    <p className="text-sm text-indigo-800 dark:text-indigo-200 leading-relaxed">
                                        <strong>No genuine employer, bank, or government office ever asks you to pay a fee to receive, activate, or process a document.</strong>{" "}
                                        If a document demands payment before you get something in return, treat it as fraud.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ── How It Works ─────────────────────────────────────── */}
                    <section aria-labelledby="how-it-works-heading" className="relative overflow-hidden rounded-3xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-violet-100 dark:from-gray-950 dark:via-gray-900 dark:to-indigo-950/40" />
                        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-200/30 dark:bg-indigo-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-72 h-72 bg-violet-200/30 dark:bg-violet-900/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                        <div className="relative p-8 sm:p-14">
                            <div className="text-center mb-14">
                                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-widest mb-4 border border-indigo-200 dark:border-indigo-800">
                                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                                    How It Works
                                </span>
                                <h2
                                    id="how-it-works-heading"
                                    className="text-2xl sm:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight"
                                >
                                    4 Steps From Document to Answer
                                </h2>
                                <p className="mt-3 text-gray-500 dark:text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
                                    Four simple steps — takes seconds to know if a document is safe to trust.
                                </p>
                            </div>

                            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                                <div className="hidden lg:block absolute top-[4.25rem] left-[14%] right-[14%] h-px bg-gradient-to-r from-transparent via-indigo-300/70 dark:via-indigo-700/40 to-transparent pointer-events-none" />

                                {howItWorks.map(({ step, title, detail, icon: Icon, accent, bg, border, wm }, idx) => (
                                    <div key={step} className="relative group h-full">
                                        <div className={`relative h-full bg-gradient-to-br ${bg} border ${border} rounded-3xl p-6 overflow-hidden hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col gap-5`}>
                                            <span className={`absolute -bottom-4 -right-1 text-[7.5rem] font-black leading-none select-none pointer-events-none ${wm}`}>
                                                {step}
                                            </span>

                                            <div className="flex items-center justify-between relative z-10">
                                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${accent} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                                    <Icon className="h-7 w-7 text-white" strokeWidth={1.75} />
                                                </div>
                                                <span className={`text-[10px] font-extrabold bg-gradient-to-r ${accent} bg-clip-text text-transparent uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/60 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700`}>
                                                    Step {step}
                                                </span>
                                            </div>

                                            <div className="relative z-10">
                                                <h3 className="font-bold text-gray-900 dark:text-white text-[15px] leading-snug mb-2">
                                                    {title}
                                                </h3>
                                                <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed">
                                                    {detail}
                                                </p>
                                            </div>

                                            <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                                        </div>

                                        {idx < howItWorks.length - 1 && (
                                            <div className="hidden lg:flex absolute -right-3.5 top-[3.25rem] z-20 w-7 h-7 rounded-full bg-white dark:bg-gray-900 border border-indigo-200 dark:border-indigo-800 shadow-md items-center justify-center">
                                                <ChevronRight className="h-3.5 w-3.5 text-indigo-500 dark:text-indigo-400" />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ── What Documents Can You Check ──────────────────────── */}
                    <section aria-labelledby="supported-docs-heading">
                        <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
                            Supported Documents
                        </span>
                        <h2
                            id="supported-docs-heading"
                            className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3"
                        >
                            What Documents Can You Check?
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl text-sm leading-relaxed">
                            RakshaAI reads whatever&apos;s on the page and adapts its field extraction to the document type.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {supportedDocs.map(({ icon: Icon, title, detail }) => (
                                <div key={title} className="flex items-start gap-4 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-5 shadow-sm">
                                    <div className="w-9 h-9 rounded-lg bg-indigo-100 dark:bg-indigo-950/50 flex items-center justify-center flex-shrink-0">
                                        <Icon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{title}</h3>
                                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
                            Accepted formats: JPG, PNG, WEBP, or PDF, up to 15MB. Multi-page documents and documents
                            with several sections (like a resume with education, experience, and ID details) are all
                            supported.
                        </p>
                    </section>

                    {/* ── Red Flags ────────────────────────────────────────── */}
                    <section aria-labelledby="red-flags-heading">
                        <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-widest">
                            Warning Signs
                        </span>
                        <h2
                            id="red-flags-heading"
                            className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3"
                        >
                            Red Flags That Signal a Forged Document
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl text-sm">
                            Even before running a document through the checker, these signs should make you pause.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {redFlagCategories.map(({ category, icon: Icon, colorBg, colorIcon, tips }) => (
                                <div key={category} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 shadow-sm">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className={`w-8 h-8 rounded-full ${colorBg} flex items-center justify-center`}>
                                            <Icon className={`h-4 w-4 ${colorIcon}`} />
                                        </div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{category}</h3>
                                    </div>
                                    <ul className="space-y-2">
                                        {tips.map((tip, i) => (
                                            <li key={i} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                                                <AlertTriangle className="h-3 w-3 text-red-400 flex-shrink-0 mt-0.5" />
                                                {tip}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── What to Do If You've Been Scammed ─────────────────── */}
                    <section aria-labelledby="emergency-heading">
                        <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-widest">
                            Emergency Guide
                        </span>
                        <h2
                            id="emergency-heading"
                            className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3"
                        >
                            What to Do If You Received a Fake Document
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl text-sm leading-relaxed">
                            Acting quickly limits the damage — here&apos;s exactly what to do.
                        </p>
                        <div className="space-y-4">
                            {whatToDoSteps.map(({ step, title, body, color, bg }) => (
                                <div key={step} className={`rounded-xl border p-6 ${bg}`}>
                                    <div className="flex items-start gap-4">
                                        <div className={`text-sm font-black bg-gradient-to-r ${color} bg-clip-text text-transparent flex-shrink-0 w-16`}>{step}</div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-2">{title}</h3>
                                            <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{body}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── FAQ ──────────────────────────────────────────────── */}
                    <section aria-labelledby="faq-heading">
                        <h2
                            id="faq-heading"
                            className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8"
                        >
                            Frequently Asked Questions
                        </h2>
                        <div className="space-y-3">
                            {faqs.map(({ q, a }) => (
                                <details key={q} className="group">
                                    <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                        <span className="text-sm font-semibold text-gray-900 dark:text-white pr-4">
                                            {q}
                                        </span>
                                        <svg
                                            className="ml-4 h-4 w-4 flex-shrink-0 text-gray-400 transition-transform duration-200 group-open:rotate-180"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            aria-hidden
                                        >
                                            <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </summary>
                                    <div className="px-4 pt-3 pb-4 text-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900 border-l border-r border-b border-gray-100 dark:border-gray-800 rounded-b-xl leading-relaxed">
                                        {a}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </section>

                    {/* ── Related Tools ─────────────────────────────────────── */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                            Check Another Safety Tool
                        </h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 max-w-2xl">
                            Document forgery is just one part of India&apos;s fraud problem. Use RakshaAI&apos;s full safety suite for comprehensive protection:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {[
                                {
                                    href: "/website-safety-checker",
                                    title: "Website Safety Checker",
                                    desc: "Check websites before shopping or sharing card details",
                                    icon: Globe,
                                    gradient: "from-blue-500 to-cyan-600",
                                },
                                {
                                    href: "/upi-id-checker",
                                    title: "UPI ID Checker",
                                    desc: "Verify a UPI ID before you send money",
                                    icon: Zap,
                                    gradient: "from-orange-500 to-amber-600",
                                },
                                {
                                    href: "/phone-number-checker",
                                    title: "Phone Number Checker",
                                    desc: "Verify if a phone number is linked to scam calls",
                                    icon: Phone,
                                    gradient: "from-cyan-500 to-sky-600",
                                },
                                {
                                    href: "/check",
                                    title: "Link Safety Checker",
                                    desc: "Paste suspicious links to check before clicking",
                                    icon: Search,
                                    gradient: "from-indigo-500 to-violet-600",
                                },
                            ].map((tool) => (
                                <Link
                                    key={tool.href}
                                    href={tool.href}
                                    className="group flex items-start gap-4 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-indigo-200 dark:hover:border-indigo-800 transition-all"
                                >
                                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${tool.gradient} flex items-center justify-center flex-shrink-0`}>
                                        <tool.icon className="h-5 w-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white text-sm group-hover:text-indigo-700 dark:group-hover:text-indigo-400 transition-colors">
                                            {tool.title}
                                        </h3>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                                            {tool.desc}
                                        </p>
                                    </div>
                                    <ChevronRight className="h-4 w-4 text-gray-300 dark:text-gray-600 ml-auto flex-shrink-0 self-center group-hover:translate-x-0.5 transition-transform" />
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* ── Internal scam links ───────────────────────────────── */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                            Learn About Document &amp; Job Scams
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {[
                                { href: "/scams/job-scams", label: "Job Scams Guide" },
                                { href: "/scams/loan-fraud", label: "Fake Loan Documents" },
                                { href: "/scams/fake-websites", label: "Fake Websites" },
                                { href: "/how-to-report-cybercrime-india", label: "How to Report Cybercrime" },
                                { href: "/got-scammed", label: "Got Scammed? Act Now" },
                                { href: "/emergency", label: "Emergency Helplines" },
                            ].map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="flex items-center gap-2 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-lg px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-indigo-400 hover:border-indigo-200 dark:hover:border-indigo-800 transition-all shadow-sm"
                                >
                                    <ChevronRight className="h-3.5 w-3.5 text-indigo-500" />
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* ── Final CTA ────────────────────────────────────────── */}
                    <section className="rounded-2xl bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-600 p-8 sm:p-12 text-white text-center shadow-2xl">
                        <FileWarning className="h-10 w-10 text-indigo-200 mx-auto mb-4" />
                        <h2 className="text-2xl sm:text-3xl font-extrabold mb-2">
                            About to Trust a Document?
                        </h2>
                        <p className="text-indigo-100 mb-8 text-sm sm:text-base max-w-xl mx-auto">
                            Spend 30 seconds verifying it first. It&apos;s free, instant, and could save you from a
                            costly scam.
                        </p>
                        <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur border border-white/20 rounded-xl p-5">
                            <DocumentUploadInput />
                        </div>
                        <p className="mt-5 text-indigo-200 text-xs flex items-center justify-center gap-2">
                            <Lock className="h-3 w-3" /> Your data is secure. Documents are analyzed once and never shared.
                        </p>
                        <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-indigo-200">
                            <Link href="/scam-alerts" className="hover:text-white transition-colors">
                                Live Scam Alerts
                            </Link>
                            <Link href="/prevention-tips" className="hover:text-white transition-colors">
                                Prevention Tips
                            </Link>
                            <Link href="/safety-guide" className="hover:text-white transition-colors">
                                Safety Guide
                            </Link>
                            <Link href="/data-sources" className="hover:text-white transition-colors">
                                Data Sources
                            </Link>
                        </div>
                    </section>
                </div>
            </div>
        </DefaultLayout>
    );
}
