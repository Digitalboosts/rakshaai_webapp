import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import DefaultLayout from "@/components/DefaultLayout";
import ReportScamButton from "@/components/ReportScamButton";
import { faqPageSchema, jsonLd } from "@/lib/seo/schema";
import {
    AlertTriangle,
    ArrowRight,
    BadgeCheck,
    Banknote,
    Building2,
    CheckCircle2,
    ChevronRight,
    Clock3,
    CreditCard,
    ExternalLink,
    FileCheck2,
    FileText,
    Fingerprint,
    Globe,
    Lock,
    Mail,
    MonitorSmartphone,
    ReceiptText,
    Search,
    Shield,
    ShieldCheck,
    Smartphone,
    Sparkles,
} from "lucide-react";

const canonicalUrl = "https://www.rakshaai.co/trust-certification/apply/";

export const metadata: Metadata = {
    title: {
        absolute: "Apply for RakshaAI Verified Badge - Business Verification India",
    },
    description:
        "Apply for RakshaAI Trust Certificate in 10 minutes. GST, Aadhaar KYC, PAN, bank account & MCA verified against official Govt. of India databases. 100% online. No uploads.",
    alternates: {
        canonical: canonicalUrl,
    },
    robots: {
        index: true,
        follow: true,
        "max-snippet": -1,
    },
    openGraph: {
        title: "Apply for RakshaAI Verified Badge - Business Verification India",
        description:
            "Apply for RakshaAI Trust Certificate in 10 minutes. GST, Aadhaar KYC, PAN, bank account and MCA checks. No uploads.",
        url: canonicalUrl,
        type: "website",
        siteName: "RakshaAI",
        images: [
            {
                url: "/opengraph-image",
                width: 1200,
                height: 630,
                alt: "Apply for RakshaAI Verified Badge",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Apply for RakshaAI Verified Badge",
        description:
            "Apply in 10 minutes. GST, Aadhaar KYC, PAN, bank account and MCA verified against official databases.",
        images: ["/opengraph-image"],
    },
    other: {
        "geo.region": "IN",
        language: "en-IN",
    },
};

const faqs = [
    {
        q: "What documents do I need to apply for RakshaAI Verified?",
        a: "You do not upload any documents. You only enter registration numbers: GSTIN, Aadhaar number for OTP KYC, PAN, bank account number with IFSC, and CIN if your business is a Pvt Ltd, LLP or OPC.",
    },
    {
        q: "I do not have a Udyam registration - can I still apply?",
        a: "Yes. RakshaAI Trust Certification does not require Udyam registration. The five checks are GST, Aadhaar KYC, PAN, bank account and MCA for applicable companies.",
    },
    {
        q: "My Aadhaar-registered mobile number is different from my business number - is that a problem?",
        a: "No, but you must have access to the mobile number registered with UIDAI. Aadhaar OTP is sent to that number, not your business phone number.",
    },
    {
        q: "What is the Trust Score and what does 4/5 mean?",
        a: "Your Trust Score shows how many of the five verification layers passed. 5/5 means every layer passed. 4/5 commonly means MCA is not applicable, such as for sole proprietors, and the badge can still be fully valid.",
    },
    {
        q: "Can a sole proprietor apply?",
        a: "Yes. Sole proprietors apply with GSTIN, Aadhaar, PAN and bank account details. MCA/CIN does not apply, so their Trust Score is usually 4/5 High.",
    },
    {
        q: "How much does it cost?",
        a: "RakshaAI offers monthly, quarterly and yearly plans. Current plan details are listed on the pricing page at rakshaai.co/trust-certification/pricing/.",
    },
    {
        q: "How long does the certificate last?",
        a: "Your plan determines validity: monthly, quarterly or yearly. Renewal re-verifies your documents against current government portal data before the badge continues.",
    },
    {
        q: "What happens if one of my checks fails?",
        a: "You receive an email explaining the failed check and reason. Common causes include inactive GSTIN, PAN mismatch, Aadhaar linkage issues or bank account name mismatch. You can fix the issue and reapply within 30 days.",
    },
    {
        q: "Is my Aadhaar number safe with RakshaAI?",
        a: "Yes. Aadhaar is used for UIDAI OTP-based eKYC and is not stored after verification. Only verification status and masked display values are retained.",
    },
    {
        q: "Can I apply for multiple businesses?",
        a: "Yes, but each business needs a separate application with its own GSTIN, PAN, bank account and applicable identity details. Platforms with bulk verification needs can contact support@rakshaai.co.",
    },
];

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Apply for RakshaAI Trust Certificate",
    totalTime: "PT10M",
    step: [
        {
            "@type": "HowToStep",
            name: "Enter business details",
            text: "Enter your legal business name, business type, category, website and contact email.",
        },
        {
            "@type": "HowToStep",
            name: "Submit verification numbers",
            text: "Provide GSTIN, PAN, bank account details and CIN where applicable.",
        },
        {
            "@type": "HowToStep",
            name: "Complete Aadhaar OTP",
            text: "Enter the OTP sent to the mobile number registered with UIDAI.",
        },
        {
            "@type": "HowToStep",
            name: "Choose plan and pay",
            text: "Choose monthly, quarterly or yearly billing and complete secure online payment.",
        },
        {
            "@type": "HowToStep",
            name: "Receive badge",
            text: "After successful verification, receive your certificate, badge files, embed code and public profile.",
        },
    ],
};

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Apply for RakshaAI Verified Badge",
    url: canonicalUrl,
    mainEntity: howToSchema,
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.rakshaai.co/",
        },
        {
            "@type": "ListItem",
            position: 2,
            name: "Trust Certification",
            item: "https://www.rakshaai.co/trust-certification/",
        },
        {
            "@type": "ListItem",
            position: 3,
            name: "Apply",
            item: canonicalUrl,
        },
    ],
};

const faqSchema = faqPageSchema(faqs.map((faq) => ({ question: faq.q, answer: faq.a })));

const heroStats = [
    { value: "10 Min", label: "Application time" },
    { value: "5 Sources", label: "Govt. databases checked" },
    { value: "2-3 Days", label: "Certificate delivery" },
    { value: "No Uploads", label: "100% online process" },
];

const verificationChecks = [
    {
        icon: FileText,
        title: "GST Registration",
        source: "GSTN Portal - GST Council of India",
        checks: "GSTIN active, business name matches, returns filed",
    },
    {
        icon: Fingerprint,
        title: "Aadhaar KYC (eKYC)",
        source: "UIDAI - Aadhaar Authority of India",
        checks: "Identity confirmed via OTP, name and address verified",
    },
    {
        icon: BadgeCheck,
        title: "PAN Verification",
        source: "NSDL + Income Tax Department",
        checks: "PAN valid and active, linked to correct entity name",
    },
    {
        icon: Banknote,
        title: "Bank Account",
        source: "RBI regulated network - penny drop",
        checks: "Account exists and is active, holder name matches",
    },
    {
        icon: Building2,
        title: "MCA / Company Docs",
        source: "MCA21 - Ministry of Corporate Affairs",
        checks: "Company active, CIN valid, incorporation confirmed",
    },
];

const readinessItems = [
    {
        item: "GSTIN (GST Number)",
        required: "Yes - all",
        detail: "15-digit GST Identification Number. Must be active.",
        source: "gst.gov.in dashboard",
    },
    {
        item: "Aadhaar Number",
        required: "Yes - all",
        detail: "12-digit Aadhaar. OTP sent to your UIDAI-registered mobile.",
        source: "Aadhaar card or mAadhaar app",
    },
    {
        item: "PAN Number",
        required: "Yes - all",
        detail: "10-character Permanent Account Number of owner or entity.",
        source: "PAN card or incometax.gov.in",
    },
    {
        item: "Bank Account + IFSC",
        required: "Yes - all",
        detail: "Current or savings account in the business name.",
        source: "Passbook, cheque book or statement",
    },
    {
        item: "CIN (Company ID)",
        required: "Pvt Ltd / LLP only",
        detail: "21-character Company Identification Number from MCA21.",
        source: "Certificate of Incorporation or mca.gov.in",
    },
    {
        item: "Business Website URL",
        required: "Yes - all",
        detail: "Where your badge will be displayed. Social page accepted if no website.",
        source: "Website, seller profile or social shop",
    },
];

const formSections = [
    {
        title: "Section A - Business Identity",
        icon: Building2,
        points: [
            "Business name exactly as it appears on your GST registration",
            "Business type: Sole Proprietor, Partnership, Pvt Ltd, LLP or OPC",
            "Year established and primary business category",
            "Brief business description for your public verification profile",
        ],
    },
    {
        title: "Section B - Contact & Online Presence",
        icon: Globe,
        points: [
            "Primary website URL where your badge will be displayed",
            "Instagram shop, WhatsApp Business number or marketplace page if applicable",
            "Registered business email where your certificate and badge are delivered",
        ],
    },
    {
        title: "Section C - Verification Numbers",
        icon: FileCheck2,
        points: [
            "GSTIN checked against GSTN",
            "Aadhaar number for UIDAI OTP eKYC",
            "PAN checked against NSDL and Income Tax records",
            "Bank account number and IFSC checked through regulated banking rails",
            "CIN checked against MCA21 for Pvt Ltd, LLP and OPC entities",
        ],
    },
    {
        title: "Section D - Payment",
        icon: CreditCard,
        points: [
            "UPI through PhonePe, Google Pay, Paytm, BHIM or any UPI app",
            "Credit and debit cards including Visa, Mastercard and RuPay",
            "Net banking across major Indian banks",
            "Monthly, quarterly or yearly plans",
        ],
    },
];

const afterSubmitSteps = [
    {
        step: "1",
        title: "Payment Confirmed",
        time: "Instant",
        text: "Your payment confirmation email arrives with an application reference number. Keep it for tracking or support.",
    },
    {
        step: "2",
        title: "Automated Checks Begin",
        time: "Within 60 seconds",
        text: "GSTN, UIDAI eKYC, PAN and bank account checks run in parallel. Most applications pass these checks automatically.",
    },
    {
        step: "3",
        title: "MCA Check",
        time: "Within 24 hours",
        text: "For Pvt Ltd, LLP and OPC businesses, MCA21 records are checked for CIN, active status and incorporation details.",
    },
    {
        step: "4",
        title: "Trust Certificate Issued",
        time: "2-3 business days",
        text: "Your personalised certificate, Trust Score, verified date, badge files and embed code are generated.",
    },
    {
        step: "5",
        title: "Public Profile Goes Live",
        time: "After issuance",
        text: "Your profile appears in the verified business directory and your badge links to a public verification page.",
    },
];

const receiveItems = [
    { icon: ShieldCheck, title: "RakshaAI Trust Certificate", text: "Digital PDF showing business name, Trust Score and verified checks with dates." },
    { icon: BadgeCheck, title: "RakshaAI Verified Badge", text: "PNG in multiple sizes plus SVG for scalable website and social display." },
    { icon: MonitorSmartphone, title: "Embed Code", text: "Copy-paste HTML snippet for your website, linked to your public verification profile." },
    { icon: FileText, title: "Verification Profile URL", text: "Public page at rakshaai.co/verify/[your-id] showing what was checked." },
    { icon: Search, title: "Directory Listing", text: "Listing in the Verified Businesses Directory with your verification status." },
    { icon: ReceiptText, title: "Badge Display Guide", text: "Step-by-step display guidance for website, WhatsApp, Instagram and email." },
];

const placements = [
    { title: "Website Homepage", text: "Header or footer placement gives new visitors an immediate trust signal.", icon: Globe },
    { title: "Checkout / Payment Page", text: "Next to Pay Now is the highest-impact placement because buyer hesitation peaks there.", icon: CreditCard },
    { title: "WhatsApp Business", text: "Use the badge on profile imagery or catalogue cover and add the verification URL in the description.", icon: Smartphone },
    { title: "Instagram Bio", text: "Add the verification URL to your bio and use a clear line such as Verified by RakshaAI.", icon: Sparkles },
    { title: "Email Signature", text: "Useful for B2B sales, procurement conversations and advance payment requests.", icon: Mail },
    { title: "Invoices & Proposals", text: "Place the badge on client invoices and proposals where trust questions often arise.", icon: ReceiptText },
];

const sourceRows = [
    ["MCA21", "Ministry of Corporate Affairs", "Company incorporation, active status and CIN for Pvt Ltd, LLP and OPC"],
    ["GSTN", "GST Council of India", "GSTIN active status, business name and return filing history"],
    ["UIDAI", "Aadhaar Authority of India", "Identity via Aadhaar eKYC OTP"],
    ["NSDL", "NSDL + Income Tax Department", "PAN validity and linkage to correct entity"],
    ["RBI Network", "Reserve Bank of India regulated network", "Bank account active status and holder name match"],
    ["RakshaAI", "RakshaAI Trust Engine", "Internal fraud database cross-checks for reports and flagged signals"],
];

const securityItems = [
    "Aadhaar triggers UIDAI OTP but is never stored after verification.",
    "PAN verification status is retained; raw PAN is not stored after the check.",
    "Bank account and IFSC are encrypted during transmission; only masked display values are retained.",
    "GSTIN is stored in encrypted form for badge display and verification purposes.",
    "Data handling is aligned with India's Digital Personal Data Protection Act, 2023.",
    "All transmission uses HTTPS and modern TLS encryption.",
    "RakshaAI does not sell application data to third parties.",
    "Deletion requests can be sent to support@rakshaai.co and are processed within 30 days.",
];

const relatedTools = [
    { name: "Website Safety Checker", href: "/website-safety-checker/", text: "Check any website for scams before entering payment details." },
    { name: "UPI ID Checker", href: "/upi-id-checker/", text: "Verify any UPI ID before sending money." },
    { name: "Phone Number Checker", href: "/phone-number-checker/", text: "Check if a number has fraud complaints." },
    { name: "Report a Scam", href: "/got-scammed/", text: "Report a fraudulent business, website or number." },
];

export default function TrustCertificationApplyPage() {
    return (
        <DefaultLayout>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLd([webPageSchema, breadcrumbSchema, howToSchema, faqSchema]) }}
            />

            <main className="min-h-screen bg-white dark:bg-gray-950">
                <section className="border-b border-gray-200 bg-gradient-to-b from-blue-50 via-white to-white px-4 pb-14 pt-16 dark:border-gray-800 dark:from-gray-900 dark:via-gray-950 dark:to-gray-950">
                    <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                        <div>
                            <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                <Link href="/" className="hover:text-blue-700 dark:hover:text-blue-300">Home</Link>
                                <ChevronRight className="h-4 w-4" />
                                <Link href="/trust-certification/" className="hover:text-blue-700 dark:hover:text-blue-300">Trust Certification</Link>
                                <ChevronRight className="h-4 w-4" />
                                <span className="font-semibold text-gray-800 dark:text-gray-200">Apply</span>
                            </nav>

                            <div className="mb-5 inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-blue-700 shadow-sm dark:border-blue-900 dark:bg-gray-900 dark:text-blue-300">
                                <BadgeCheck className="h-4 w-4" />
                                5-Layer Government Verification
                            </div>

                            <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-gray-950 dark:text-white sm:text-5xl">
                                Apply for RakshaAI Verified Badge
                            </h1>
                            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                                Getting your RakshaAI Trust Certificate takes 10 minutes. You enter your business details and registration numbers; RakshaAI checks GST registration, Aadhaar KYC, PAN, bank account and MCA documents against official Government of India or regulated sources.
                            </p>
                            <p className="mt-4 max-w-3xl leading-relaxed text-gray-600 dark:text-gray-400">
                                No document uploads. No physical visits. Once verified, you receive your certificate and verified badge by email within 2-3 business days for your website, WhatsApp Business, Instagram bio and customer-facing documents.
                            </p>

                            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                <Link
                                    href="#before-you-start"
                                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800"
                                >
                                    Start Your Application
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                                <Link
                                    href="/trust-certification/pricing/"
                                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-7 py-3.5 text-sm font-bold text-gray-800 transition hover:border-blue-300 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-blue-700 dark:hover:text-blue-300"
                                >
                                    Compare Plans
                                    <ExternalLink className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>

                        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-800 dark:bg-gray-900">
                            <div className="rounded-lg border border-blue-200 bg-blue-50 p-5 dark:border-blue-900 dark:bg-blue-950/20">
                                <div className="mb-5 flex items-center gap-3">
                                    <Image src="/rakshaai-logo.svg" alt="RakshaAI" width={42} height={42} />
                                    <div>
                                        <p className="text-sm font-black uppercase tracking-wide text-blue-700 dark:text-blue-300">RakshaAI Trust Certificate</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">Preview of what businesses receive</p>
                                    </div>
                                </div>
                                <div className="space-y-3 rounded-lg bg-white p-5 dark:bg-gray-950">
                                    <div className="flex items-center justify-between gap-4 border-b border-gray-100 pb-3 dark:border-gray-800">
                                        <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">Business</span>
                                        <span className="text-sm font-bold text-gray-950 dark:text-white">Your Business Name</span>
                                    </div>
                                    <div className="flex items-center justify-between gap-4 border-b border-gray-100 pb-3 dark:border-gray-800">
                                        <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">Trust Score</span>
                                        <span className="text-sm font-bold text-emerald-700 dark:text-emerald-300">5/5 Verified</span>
                                    </div>
                                    <div className="grid grid-cols-5 gap-2 pt-1">
                                        {["GST", "KYC", "PAN", "Bank", "MCA"].map((item) => (
                                            <div key={item} className="rounded-lg bg-emerald-50 px-2 py-3 text-center dark:bg-emerald-950/30">
                                                <CheckCircle2 className="mx-auto mb-1 h-4 w-4 text-emerald-600 dark:text-emerald-300" />
                                                <p className="text-[10px] font-bold text-emerald-800 dark:text-emerald-200">{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-5 grid grid-cols-2 gap-3">
                                {heroStats.map(({ value, label }) => (
                                    <div key={label} className="rounded-lg border border-gray-200 p-4 text-center dark:border-gray-800">
                                        <p className="text-xl font-extrabold text-blue-700 dark:text-blue-300">{value}</p>
                                        <p className="mt-1 text-xs leading-tight text-gray-500 dark:text-gray-400">{label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <div className="mx-auto max-w-6xl space-y-20 px-4 py-16 sm:px-6 lg:px-8">
                    <section aria-labelledby="verifies-heading">
                        <SectionHeader
                            eyebrow="Verification Checks"
                            title="What RakshaAI Verifies - 5 Government Database Checks"
                            description="Unlike trust seals that rely on self-declared information, RakshaAI verifies each detail against official Government of India portals or regulated networks in real time."
                        />

                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
                            {verificationChecks.map(({ icon: Icon, title, source, checks }) => (
                                <div key={title} className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700 text-white">
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <h3 className="text-sm font-extrabold text-gray-950 dark:text-white">{title}</h3>
                                    <p className="mt-2 text-xs font-semibold text-blue-700 dark:text-blue-300">{source}</p>
                                    <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{checks}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 grid gap-3 md:grid-cols-2">
                            <InfoNote icon={AlertTriangle}>
                                MCA applies to Pvt Ltd, LLP and OPC businesses only. Sole proprietors are exempt and can still receive a valid 4/5 High Trust Score.
                            </InfoNote>
                            <InfoNote icon={Shield}>
                                Your Trust Score appears on your public verification profile and shows how many of the five checks passed.
                            </InfoNote>
                        </div>

                        <div className="mt-5 text-center">
                            <Link href="/trust-certification/verification-standards/" className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:underline dark:text-blue-300">
                                What each check verifies <ChevronRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </section>

                    <section id="before-you-start" aria-labelledby="ready-heading">
                        <SectionHeader
                            eyebrow="Before You Start"
                            title="What to Keep Ready"
                            description="The entire application runs on registration numbers. Keep these details open before you begin so you can finish in one sitting."
                        />

                        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm dark:border-gray-800">
                            <table className="min-w-[860px] w-full text-sm">
                                <thead>
                                    <tr className="bg-gray-50 dark:bg-gray-900">
                                        <th className="px-5 py-4 text-left font-bold text-gray-950 dark:text-white">Detail</th>
                                        <th className="px-5 py-4 text-left font-bold text-gray-950 dark:text-white">Required</th>
                                        <th className="px-5 py-4 text-left font-bold text-gray-950 dark:text-white">What It Means</th>
                                        <th className="px-5 py-4 text-left font-bold text-gray-950 dark:text-white">Where to Find It</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                                    {readinessItems.map((row) => (
                                        <tr key={row.item} className="bg-white dark:bg-gray-950">
                                            <td className="px-5 py-4 font-bold text-gray-950 dark:text-white">{row.item}</td>
                                            <td className="px-5 py-4 text-blue-700 dark:text-blue-300">{row.required}</td>
                                            <td className="px-5 py-4 text-gray-600 dark:text-gray-400">{row.detail}</td>
                                            <td className="px-5 py-4 text-gray-600 dark:text-gray-400">{row.source}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-6 grid gap-3 md:grid-cols-3">
                            <ChecklistNote>No document uploads needed. You enter numbers and RakshaAI fetches verification results directly.</ChecklistNote>
                            <ChecklistNote>Aadhaar OTP goes to the mobile number registered with UIDAI, so keep that SIM active.</ChecklistNote>
                            <ChecklistNote>Verification status is stored; Aadhaar and full bank details are not retained after checks.</ChecklistNote>
                        </div>
                    </section>

                    <section id="application-sections" aria-labelledby="form-heading">
                        <SectionHeader
                            eyebrow="Application Form"
                            title="How the Application Form Works - 4 Simple Sections"
                            description="Most businesses complete the application in 8 to 12 minutes. These are the four sections you will move through."
                        />

                        <div className="grid gap-5 md:grid-cols-2">
                            {formSections.map(({ title, icon: Icon, points }) => (
                                <div key={title} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                                    <div className="mb-4 flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700 text-white">
                                            <Icon className="h-5 w-5" />
                                        </div>
                                        <h3 className="font-extrabold text-gray-950 dark:text-white">{title}</h3>
                                    </div>
                                    <ul className="space-y-3">
                                        {points.map((point) => (
                                            <li key={point} className="flex gap-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                                                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600 dark:text-emerald-300" />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 grid gap-3 md:grid-cols-2">
                            <InfoNote icon={Clock3}>
                                Aadhaar OTP is valid for 10 minutes. If the UIDAI-registered mobile is different from your business number, keep that phone with you.
                            </InfoNote>
                            <InfoNote icon={AlertTriangle}>
                                Your business name must match GST records exactly. Even minor spacing or spelling differences can trigger manual review.
                            </InfoNote>
                        </div>
                    </section>

                    <section aria-labelledby="after-submit-heading">
                        <SectionHeader
                            eyebrow="After Submission"
                            title="What Happens After You Submit - Step by Step"
                            description="Once payment is complete, RakshaAI starts automated verification and then issues the certificate package after all applicable checks pass."
                        />

                        <div className="grid gap-4">
                            {afterSubmitSteps.map(({ step, title, time, text }) => (
                                <div key={step} className="flex gap-4 rounded-lg border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-700 text-sm font-extrabold text-white">
                                        {step}
                                    </div>
                                    <div>
                                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                                            <h3 className="font-extrabold text-gray-950 dark:text-white">{title}</h3>
                                            <span className="rounded-md bg-blue-50 px-2 py-1 text-xs font-bold text-blue-700 dark:bg-blue-950/30 dark:text-blue-300">{time}</span>
                                        </div>
                                        <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section aria-labelledby="receive-heading">
                        <SectionHeader
                            eyebrow="Certificate Package"
                            title="What You Receive With Your RakshaAI Trust Certificate"
                            description="When your certificate is issued, the complete trust package is sent to your registered email."
                        />

                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {receiveItems.map(({ icon: Icon, title, text }) => (
                                <div key={title} className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                                    <Icon className="mb-4 h-6 w-6 text-blue-700 dark:text-blue-300" />
                                    <h3 className="font-extrabold text-gray-950 dark:text-white">{title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{text}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 text-center">
                            <Link href="/trust-certification/verified-businesses/" className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:underline dark:text-blue-300">
                                See who is already verified <ChevronRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </section>

                    <section aria-labelledby="display-heading">
                        <SectionHeader
                            eyebrow="Badge Placement"
                            title="Where to Display Your RakshaAI Verified Badge"
                            description="Your badge works on any platform that allows images or public links. These placements create the strongest trust signal."
                        />

                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {placements.map(({ title, text, icon: Icon }) => (
                                <div key={title} className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
                                    <Icon className="mb-4 h-6 w-6 text-emerald-700 dark:text-emerald-300" />
                                    <h3 className="font-extrabold text-gray-950 dark:text-white">{title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{text}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 text-center">
                            <Link href="/trust-certification/badge-guide/" className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:underline dark:text-blue-300">
                                How to display your badge <ChevronRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </section>

                    <section aria-labelledby="sources-heading">
                        <SectionHeader
                            eyebrow="Official Sources"
                            title="Government Database Sources - Where Your Data Is Verified"
                            description="The key difference from self-declared badges: RakshaAI does not just accept what a business submits. It verifies independently from the original source."
                        />

                        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm dark:border-gray-800">
                            <table className="min-w-[760px] w-full text-sm">
                                <thead>
                                    <tr className="bg-gray-50 dark:bg-gray-900">
                                        <th className="px-5 py-4 text-left font-bold text-gray-950 dark:text-white">Source</th>
                                        <th className="px-5 py-4 text-left font-bold text-gray-950 dark:text-white">Authority</th>
                                        <th className="px-5 py-4 text-left font-bold text-gray-950 dark:text-white">What It Confirms</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                                    {sourceRows.map(([source, authority, confirms]) => (
                                        <tr key={source} className="bg-white dark:bg-gray-950">
                                            <td className="px-5 py-4 font-extrabold text-blue-700 dark:text-blue-300">{source}</td>
                                            <td className="px-5 py-4 text-gray-700 dark:text-gray-300">{authority}</td>
                                            <td className="px-5 py-4 text-gray-600 dark:text-gray-400">{confirms}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section aria-labelledby="security-heading" className="rounded-lg border border-emerald-200 bg-emerald-50 p-8 dark:border-emerald-900 dark:bg-emerald-950/20">
                        <div className="mx-auto max-w-4xl">
                            <div className="mb-6 flex items-center gap-3">
                                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-700 text-white">
                                    <Lock className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-300">Data Security</p>
                                    <h2 id="security-heading" className="text-2xl font-extrabold text-gray-950 dark:text-white">How We Handle Sensitive Information</h2>
                                </div>
                            </div>

                            <div className="grid gap-3 md:grid-cols-2">
                                {securityItems.map((item) => (
                                    <div key={item} className="flex gap-3 rounded-lg bg-white p-4 dark:bg-gray-900">
                                        <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-700 dark:text-emerald-300" />
                                        <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">{item}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                                <Link href="/privacy-policy/" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-emerald-800 hover:bg-emerald-100 dark:bg-gray-900 dark:text-emerald-300 dark:hover:bg-gray-800">
                                    Full Privacy Policy <ChevronRight className="h-4 w-4" />
                                </Link>
                                <Link href="/trust-certification/verification-standards/" className="inline-flex items-center justify-center gap-2 rounded-lg border border-emerald-300 px-5 py-3 text-sm font-bold text-emerald-800 hover:bg-emerald-100 dark:border-emerald-800 dark:text-emerald-300 dark:hover:bg-emerald-950/30">
                                    Data Handling Standards <ChevronRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </section>

                    <section aria-labelledby="faq-heading">
                        <SectionHeader
                            eyebrow="FAQ"
                            title="Frequently Asked Questions About the Application"
                            description="The most common questions businesses ask before starting RakshaAI Trust Certification."
                        />

                        <div className="mx-auto grid max-w-4xl gap-4">
                            {faqs.map(({ q, a }) => (
                                <div key={q} className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                                    <h3 className="font-extrabold text-gray-950 dark:text-white">Q: {q}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">A: {a}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 text-center">
                            <Link href="/trust-certification/faq/" className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:underline dark:text-blue-300">
                                More questions? See full FAQ <ChevronRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </section>

                    <section aria-labelledby="tools-heading">
                        <SectionHeader
                            eyebrow="For Consumers"
                            title="Related Free Safety Tools"
                            description="If you landed here as a consumer trying to check a business before paying, these free tools are for you."
                        />

                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            {relatedTools.map(({ name, href, text }) => (
                                <Link key={name} href={href} className="group rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition hover:border-blue-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-800">
                                    <h3 className="font-extrabold text-gray-950 transition group-hover:text-blue-700 dark:text-white dark:group-hover:text-blue-300">{name}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{text}</p>
                                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-blue-700 dark:text-blue-300">
                                        Open tool <ArrowRight className="h-4 w-4" />
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </section>

                    <section>
                        <div className="grid gap-5 md:grid-cols-2">
                            <div className="rounded-lg bg-blue-700 p-8 text-center text-white">
                                <ShieldCheck className="mx-auto mb-4 h-9 w-9 text-blue-100" />
                                <h2 className="text-2xl font-extrabold">Apply Now - Get Your RakshaAI Trust Certificate</h2>
                                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-blue-50">
                                    Keep GSTIN, Aadhaar, PAN and bank details ready. Your badge package is delivered after applicable verification checks pass.
                                </p>
                                <Link href="#before-you-start" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-bold text-blue-700 hover:bg-blue-50">
                                    Review Checklist <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>

                            <div className="rounded-lg border border-red-200 bg-red-50 p-8 text-center dark:border-red-900 dark:bg-red-950/20">
                                <AlertTriangle className="mx-auto mb-4 h-9 w-9 text-red-600 dark:text-red-300" />
                                <h2 className="text-2xl font-extrabold text-gray-950 dark:text-white">Looking to Report a Fraudulent Business?</h2>
                                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                                    If you are not a business applicant and need to report a scam, submit a report so other Indians can be warned.
                                </p>
                                <ReportScamButton className="mt-6 inline-flex cursor-pointer items-center gap-2 rounded-lg bg-red-600 px-6 py-3 text-sm font-bold text-white hover:bg-red-700">
                                    Report a Scam <ArrowRight className="h-4 w-4" />
                                </ReportScamButton>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </DefaultLayout>
    );
}

function SectionHeader({
    eyebrow,
    title,
    description,
}: {
    eyebrow: string;
    title: string;
    description: string;
}) {
    return (
        <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-700 dark:text-blue-300">{eyebrow}</p>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-950 dark:text-white">{title}</h2>
            <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-400">{description}</p>
        </div>
    );
}

function InfoNote({ icon: Icon, children }: { icon: typeof Shield; children: ReactNode }) {
    return (
        <div className="flex gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950/20">
            <Icon className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-600 dark:text-amber-300" />
            <p className="text-sm leading-relaxed text-amber-900 dark:text-amber-200">{children}</p>
        </div>
    );
}

function ChecklistNote({ children }: { children: ReactNode }) {
    return (
        <div className="flex gap-3 rounded-lg border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-900 dark:bg-emerald-950/20">
            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-700 dark:text-emerald-300" />
            <p className="text-sm leading-relaxed text-emerald-900 dark:text-emerald-200">{children}</p>
        </div>
    );
}
