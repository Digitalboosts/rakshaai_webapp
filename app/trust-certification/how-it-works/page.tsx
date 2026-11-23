import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import DefaultLayout from "@/components/DefaultLayout";
import ReportScamButton from "@/components/ReportScamButton";
import { faqPageSchema, jsonLd } from "@/lib/seo/schema";
import type { LucideIcon } from "lucide-react";
import {
    AlertTriangle,
    ArrowRight,
    BadgeCheck,
    Banknote,
    CheckCircle2,
    ChevronRight,
    Clock3,
    Database,
    FileText,
    Fingerprint,
    Globe,
    Landmark,
    Link2,
    RefreshCw,
    Search,
    Shield,
    ShieldCheck,
    Store,
} from "lucide-react";

const canonicalUrl = "https://www.rakshaai.co/trust-certification/how-it-works/";

export const metadata: Metadata = {
    title: {
        absolute: "How RakshaAI Business Verification Works - 5 Govt. Checks",
    },
    description:
        "Learn how RakshaAI verifies your business across 5 official Govt. databases - GST, Aadhaar KYC, PAN, Bank Account & MCA. 10-minute process. Badge in 2–3 days. No uploads.",
    alternates: {
        canonical: canonicalUrl,
    },
    robots: {
        index: true,
        follow: true,
        "max-snippet": -1,
    },
    openGraph: {
        title: "How RakshaAI Business Verification Works - 5 Govt. Checks",
        description:
            "See exactly how RakshaAI verifies GST, Aadhaar KYC, PAN, bank account and MCA records before issuing a trust badge.",
        url: canonicalUrl,
        type: "article",
        siteName: "RakshaAI",
        images: [
            {
                url: "/opengraph-image",
                width: 1200,
                height: 630,
                alt: "How RakshaAI Business Verification Works",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "How RakshaAI Business Verification Works",
        description: "5 government database checks, 10-minute application, badge in 2–3 business days.",
        images: ["/opengraph-image"],
    },
    other: {
        "geo.region": "IN",
        language: "en-IN",
    },
};

const faqs = [
    {
        q: "How does RakshaAI Verified work in simple terms?",
        a: "You enter your business registration numbers. RakshaAI checks five official or regulated sources: GSTN for GST, UIDAI for Aadhaar KYC, NSDL and Income Tax for PAN, RBI-regulated banking rails for bank account status, and MCA21 for company records. If applicable checks pass, we issue your Trust Certificate and badge.",
    },
    {
        q: "What is the KYC verification process for a business in India?",
        a: "Business KYC verifies identity, business existence and financial traceability. RakshaAI covers Aadhaar eKYC for identity, GSTN for registration, PAN for tax identity, bank account verification for financial traceability, and MCA21 for registered companies.",
    },
    {
        q: "How long does the RakshaAI verification process take?",
        a: "The application takes about 10 minutes. Automated GST, Aadhaar, PAN and bank checks usually complete within 60 seconds. MCA checks for Pvt Ltd, LLP and OPC businesses complete within 24 hours, and the badge package is delivered in 2–3 business days.",
    },
    {
        q: "What is the RakshaAI Trust Score and what does 4/5 mean?",
        a: "The Trust Score shows how many of the five verification layers passed. 5/5 Excellent means all five passed. 4/5 High is fully valid when MCA does not apply, typically for sole proprietors or partnership firms.",
    },
    {
        q: "What happens after my RakshaAI verification is complete?",
        a: "You receive a Trust Certificate PDF, badge PNG files, SVG badge, embed code and public verification URL. Your business profile also appears in the Verified Businesses directory.",
    },
    {
        q: "My RakshaAI verification was rejected - what do I do?",
        a: "We email the specific failed check and reason. Common issues include inactive GSTIN, PAN-Aadhaar linkage problems or bank name mismatch. You can fix the issue and reapply within 30 days.",
    },
    {
        q: "Can a sole proprietor apply for RakshaAI Verified?",
        a: "Yes. Sole proprietors need GSTIN, Aadhaar, PAN and a bank account in the business name. No CIN is required, and the badge is fully valid with a 4/5 High Trust Score.",
    },
    {
        q: "Is Udyam registration required to apply?",
        a: "No. Udyam or MSME registration is not part of RakshaAI's verification process. The five checks are GST, Aadhaar KYC, PAN, bank account and MCA for applicable companies.",
    },
    {
        q: "How does the badge renewal process work?",
        a: "You receive a renewal reminder before your plan expires. Renewal re-runs the verification checks against current government or regulated source data. If the checks pass, your badge renews for the same plan period.",
    },
    {
        q: "Is RakshaAI Verified a government certification?",
        a: "No. RakshaAI Verified is a private trust badge issued by RakshaAI after checking official government or regulated databases. It is not a government approval or government certification.",
    },
];

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How RakshaAI Business Verification Works",
    totalTime: "PT10M",
    step: [
        {
            "@type": "HowToStep",
            name: "Submit application",
            text: "Enter business details and registration numbers without uploading documents.",
        },
        {
            "@type": "HowToStep",
            name: "Verify GST",
            text: "RakshaAI checks GSTIN status, business name and return activity through GSTN.",
        },
        {
            "@type": "HowToStep",
            name: "Complete Aadhaar KYC",
            text: "UIDAI eKYC confirms identity using OTP sent to the Aadhaar-registered mobile number.",
        },
        {
            "@type": "HowToStep",
            name: "Verify PAN and bank account",
            text: "PAN is checked through NSDL and Income Tax records; bank account is checked through RBI-regulated penny drop.",
        },
        {
            "@type": "HowToStep",
            name: "Verify MCA where applicable",
            text: "Pvt Ltd, LLP and OPC businesses are checked through MCA21 for active company status and CIN match.",
        },
        {
            "@type": "HowToStep",
            name: "Issue badge",
            text: "After applicable checks pass, RakshaAI issues the certificate, badge files, embed code and public verification URL.",
        },
    ],
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
            name: "How It Works",
            item: canonicalUrl,
        },
    ],
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How RakshaAI Business Verification Works - 5 Government Database Checks",
    description:
        "A detailed explanation of RakshaAI's GST, Aadhaar KYC, PAN, bank account and MCA verification process for Indian businesses.",
    url: canonicalUrl,
    datePublished: "2026-07-02",
    dateModified: "2026-07-02",
    author: {
        "@type": "Organization",
        name: "RakshaAI",
        url: "https://www.rakshaai.co/",
    },
    publisher: {
        "@type": "Organization",
        name: "RakshaAI",
        url: "https://www.rakshaai.co/",
    },
};

const faqSchema = faqPageSchema(faqs.map((faq) => ({ question: faq.q, answer: faq.a })));

const heroStats = [
    { value: "5 Layers", label: "Govt. databases checked" },
    { value: "10 Min", label: "Application time" },
    { value: "2-3 Days", label: "Badge delivery" },
    { value: "₹299/mo", label: "Starting plan" },
];

const comparisonRows = [
    ["Business submits its own documents", "RakshaAI queries official government portals directly"],
    ["Verifier stores and reads your GST certificate", "RakshaAI calls GSTN so the result is live"],
    ["Consumers cannot check the badge", "Every badge links to rakshaai.co/verify/[id]"],
    ["Forged documents can mislead the verifier", "Forged GST numbers fail the GSTN check"],
    ["Badge reflects documents on issue day only", "Badge URL shows public verification status"],
];

const verificationLayers = [
    {
        layer: "Layer 1",
        title: "GST Registration",
        source: "GSTN Portal - GST Council of India",
        icon: FileText,
        summary: "GSTIN active, business name matches, returns filed",
        detail:
            "RakshaAI sends your GSTIN to the GSTN source and checks active or cancelled status, registered business name match and return filing activity. A lapsed GSTIN, inactive registration or name mismatch fails this layer.",
    },
    {
        layer: "Layer 2",
        title: "Aadhaar KYC",
        source: "UIDAI eKYC API - Aadhaar Authority",
        icon: Fingerprint,
        summary: "Identity via OTP, name and address confirmed",
        detail:
            "After you enter Aadhaar, UIDAI sends an OTP to the registered mobile. The eKYC check confirms identity. Aadhaar is used only for OTP and is not stored after verification.",
    },
    {
        layer: "Layer 3",
        title: "PAN Verification",
        source: "NSDL + Income Tax Department",
        icon: BadgeCheck,
        summary: "PAN valid, active and linked to correct entity",
        detail:
            "RakshaAI checks PAN status and entity linkage through authoritative PAN sources. PAN-Aadhaar linkage issues or entity mismatch can fail this layer.",
    },
    {
        layer: "Layer 4",
        title: "Bank Account",
        source: "RBI Regulated Network - Penny Drop",
        icon: Banknote,
        summary: "Account active, holder name matches business",
        detail:
            "A tiny penny-drop transaction confirms that the account exists and the account holder name matches business records. Only masked account details are retained for display.",
    },
    {
        layer: "Layer 5",
        title: "MCA / Company",
        source: "MCA21 - Ministry of Corporate Affairs",
        icon: Landmark,
        summary: "Company active, CIN valid for Pvt Ltd, LLP and OPC",
        detail:
            "Pvt Ltd, LLP and OPC businesses are checked through MCA21 for CIN, registered name, active status and incorporation details. Sole proprietors are exempt.",
    },
];

const trustScoreRows = [
    ["5/5 Excellent", "All 5 layers confirmed: GST, Aadhaar KYC, PAN, Bank Account and MCA", "Pvt Ltd, LLP and OPC with active MCA compliance", "Excellent"],
    ["4/5 High", "4 layers confirmed. MCA is not applicable or MCA is pending.", "Sole proprietors, partnerships and Pvt Ltd/LLP with pending MCA review", "High"],
    ["Below 4/5", "One or more critical checks failed. Badge is not issued until resolved.", "Inactive GSTIN, PAN mismatch or bank name mismatch", "Issue"],
];

const timeline = [
    {
        time: "Instant",
        title: "Payment confirmed",
        text: "You receive a payment confirmation email with your Application Reference Number within 60 seconds.",
    },
    {
        time: "Within 60 seconds",
        title: "Automated KYC checks run",
        text: "RakshaAI queries GSTN, UIDAI eKYC, NSDL and RBI-regulated bank verification in parallel.",
    },
    {
        time: "Within 24 hours",
        title: "MCA21 check",
        text: "Pvt Ltd, LLP and OPC businesses are checked through MCA21. Sole proprietors skip this step automatically.",
    },
    {
        time: "Within 2-3 business days",
        title: "Trust Certificate issued",
        text: "After applicable checks pass, your certificate PDF, badge files and embed code are delivered by email.",
    },
    {
        time: "Immediately after issue",
        title: "Public profile live",
        text: "Your verified business profile goes live and your badge links to its public verification page.",
    },
];

const packageItems = [
    { icon: ShieldCheck, title: "Trust Certificate PDF", text: "Business name, Trust Score, verified checks, dates and confirming sources." },
    { icon: BadgeCheck, title: "Verified Badge Files", text: "PNG files in 80px, 160px and 300px sizes plus scalable SVG." },
    { icon: Link2, title: "Embed Code", text: "One copy-paste HTML snippet linked to your public verification page." },
    { icon: Globe, title: "Public Verification URL", text: "Consumers click rakshaai.co/verify/[your-id] to see verification status." },
    { icon: Search, title: "Directory Listing", text: "Your business appears in the Verified Businesses directory." },
    { icon: RefreshCw, title: "Renewal Reminder", text: "Email reminder before expiry, with renewal checks against live source data." },
];

const placements = [
    ["Website - Homepage", "Place in header, footer or hero area so first-time visitors see it before they scroll."],
    ["Website - Checkout Page", "Place next to Pay Now, where buyer hesitation peaks. Businesses report 12-18% uplift."],
    ["WhatsApp Business", "Use badge imagery on the profile or catalogue cover and add the verification URL in your description."],
    ["Instagram Bio / Shop", "Use your verification URL as link-in-bio and add Verified by RakshaAI in the bio text."],
    ["Email Signature", "Add under your name and link the image to the verification URL for sales and proposals."],
    ["Marketplace Bio", "Add the badge and verification URL to seller profile descriptions where platform policy allows."],
];

const businessTypes = [
    ["Sole Proprietor", "Yes", "Yes", "Yes", "Yes", "MCA not required", "4/5 High"],
    ["Partnership Firm", "Yes", "Yes, all partners", "Yes", "Yes", "MCA not required", "4/5 High"],
    ["Pvt Ltd Company", "Yes", "Yes, director", "Yes", "Yes", "CIN required", "5/5 if MCA current"],
    ["LLP", "Yes", "Yes, designated partner", "Yes", "Yes", "CIN required", "5/5 if MCA current"],
    ["OPC", "Yes", "Yes", "Yes", "Yes", "CIN required", "5/5 if MCA current"],
];

const dataRows = [
    ["Aadhaar Number", "Used only to trigger UIDAI eKYC OTP. Never stored post-verification. Only masked value appears on profile."],
    ["GSTIN", "Queried against GSTN and stored encrypted for badge display. GST filings or return data are not stored."],
    ["PAN Number", "Used to query PAN status. Verification status is stored; PAN is not stored in readable form."],
    ["Bank Account + IFSC", "Used for penny-drop verification. Only the last 4 digits are retained for display."],
    ["MCA / CIN", "Queried against MCA21. Company active status and name are stored for badge display."],
];

const renewalRows = [
    ["Monthly", "30 days", "Reminder 7 days before expiry"],
    ["Quarterly", "90 days", "Reminder 14 days before expiry"],
    ["Yearly", "365 days", "Reminder 30 days before expiry"],
];

const relatedLinks = [
    { label: "Apply for Verified Badge", href: "/trust-certification/apply/", text: "Start your 10-minute application" },
    { label: "Pricing Plans", href: "/trust-certification/pricing/", text: "Compare monthly, quarterly and yearly plans" },
    { label: "Verified Businesses", href: "/trust-certification/verified-businesses/", text: "Browse all verified businesses" },
    { label: "Verification Standards", href: "/trust-certification/verification-standards/", text: "Full API-by-API technical details" },
    { label: "Website Safety Checker", href: "/website-safety-checker/", text: "Check any website before paying" },
    { label: "UPI ID Checker", href: "/upi-id-checker/", text: "Verify any UPI ID before sending money" },
];

export default function TrustCertificationHowItWorksPage() {
    return (
        <DefaultLayout>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLd([howToSchema, breadcrumbSchema, faqSchema, articleSchema]) }}
            />

            <main className="min-h-screen bg-white dark:bg-gray-950">
                <section className="border-b border-gray-200 bg-gradient-to-b from-emerald-50 via-white to-white px-4 pb-14 pt-16 dark:border-gray-800 dark:from-gray-900 dark:via-gray-950 dark:to-gray-950">
                    <div className="mx-auto max-w-6xl">
                        <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                            <Link href="/" className="hover:text-emerald-700 dark:hover:text-emerald-300">Home</Link>
                            <ChevronRight className="h-4 w-4" />
                            <Link href="/trust-certification/" className="hover:text-emerald-700 dark:hover:text-emerald-300">Trust Certification</Link>
                            <ChevronRight className="h-4 w-4" />
                            <span className="font-semibold text-gray-800 dark:text-gray-200">How It Works</span>
                        </nav>

                        <div className="mx-auto max-w-4xl text-center">
                            <div className="mb-6 inline-flex items-center gap-2 rounded-lg border border-emerald-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-emerald-700 shadow-sm dark:border-emerald-900 dark:bg-gray-900 dark:text-emerald-300">
                                <Database className="h-4 w-4" />
                                Government APIs, Not Photocopies
                            </div>

                            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-950 dark:text-white sm:text-5xl">
                                How RakshaAI Business Verification Works - 5 Government Database Checks, 10 Minutes
                            </h1>
                            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                                Most businesses want to know exactly what happens after they apply. This page walks through every stage, from application submission to the moment your badge appears on your website.
                            </p>
                            <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-gray-600 dark:text-gray-400">
                                The short answer: you enter registration numbers, and RakshaAI queries GSTN, UIDAI, NSDL, RBI-regulated banking rails and MCA21. No document uploads. No photocopies. The result comes from the official source.
                            </p>

                            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                                <Link href="/trust-certification/apply/" className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-700 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-700/20 hover:bg-emerald-800">
                                    Apply Now <ArrowRight className="h-4 w-4" />
                                </Link>
                                <Link href="/trust-certification/verification-standards/" className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-7 py-3.5 text-sm font-bold text-gray-800 hover:border-emerald-300 hover:text-emerald-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-emerald-700 dark:hover:text-emerald-300">
                                    Verification Standards <ChevronRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>

                        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
                            {heroStats.map(({ value, label }) => (
                                <div key={label} className="rounded-lg border border-gray-200 bg-white p-5 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900">
                                    <p className="text-2xl font-extrabold text-emerald-700 dark:text-emerald-300">{value}</p>
                                    <p className="mt-1 text-xs font-medium leading-tight text-gray-500 dark:text-gray-400">{label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="mx-auto max-w-6xl space-y-20 px-4 py-16 sm:px-6 lg:px-8">
                    <section aria-labelledby="apis-heading">
                        <SectionHeader
                            eyebrow="Trust Source"
                            title="Why Government APIs - Not Documents - Make Our Verification Trustworthy"
                            description="A trust badge is only useful if customers know who verified it, what data was used, and whether the result can be checked later."
                        />

                        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm dark:border-gray-800">
                            <table className="min-w-[760px] w-full text-sm">
                                <thead>
                                    <tr className="bg-gray-50 dark:bg-gray-900">
                                        <th className="px-5 py-4 text-left font-bold text-red-600 dark:text-red-400">Self-Declared Badge</th>
                                        <th className="px-5 py-4 text-left font-bold text-emerald-700 dark:text-emerald-300">RakshaAI Verified</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                                    {comparisonRows.map(([selfDeclared, raksha]) => (
                                        <tr key={selfDeclared} className="bg-white dark:bg-gray-950">
                                            <td className="px-5 py-4 text-gray-600 dark:text-gray-400">{selfDeclared}</td>
                                            <td className="px-5 py-4 text-gray-700 dark:text-gray-300">
                                                <span className="flex gap-2">
                                                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600 dark:text-emerald-300" />
                                                    {raksha}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section aria-labelledby="layers-heading">
                        <SectionHeader
                            eyebrow="5-Layer KYC"
                            title="The 5-Layer KYC Verification Process - What Each Check Confirms"
                            description="Every RakshaAI application goes through five verification layers, plus an internal fraud database check in parallel."
                        />

                        <div className="grid gap-5">
                            {verificationLayers.map(({ layer, title, source, icon: Icon, summary, detail }) => (
                                <div key={title} className="grid gap-5 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 md:grid-cols-[220px_1fr]">
                                    <div>
                                        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-700 text-white">
                                            <Icon className="h-5 w-5" />
                                        </div>
                                        <p className="text-xs font-black uppercase tracking-wide text-emerald-700 dark:text-emerald-300">{layer}</p>
                                        <h3 className="mt-1 font-extrabold text-gray-950 dark:text-white">{title}</h3>
                                        <p className="mt-2 text-xs font-semibold text-gray-500 dark:text-gray-400">{source}</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900 dark:text-white">{summary}</p>
                                        <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <InfoNote icon={Shield}>
                            RakshaAI also runs an internal fraud check against reported scam entities, suspicious websites, business phone numbers and UPI IDs. This does not appear as a certificate layer but runs on every application.
                        </InfoNote>
                    </section>

                    <section aria-labelledby="score-heading">
                        <SectionHeader
                            eyebrow="Trust Score"
                            title="Understanding Your Trust Score - What 4/5 and 5/5 Mean"
                            description="The Trust Score is the first number customers see when they click your badge. It shows how many applicable verification layers passed."
                        />

                        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm dark:border-gray-800">
                            <table className="min-w-[860px] w-full text-sm">
                                <thead>
                                    <tr className="bg-gray-50 dark:bg-gray-900">
                                        <th className="px-5 py-4 text-left font-bold text-gray-950 dark:text-white">Trust Score</th>
                                        <th className="px-5 py-4 text-left font-bold text-gray-950 dark:text-white">What It Means</th>
                                        <th className="px-5 py-4 text-left font-bold text-gray-950 dark:text-white">Who Gets It</th>
                                        <th className="px-5 py-4 text-left font-bold text-gray-950 dark:text-white">Badge Display</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                                    {trustScoreRows.map(([score, meaning, who, display]) => (
                                        <tr key={score} className="bg-white dark:bg-gray-950">
                                            <td className="px-5 py-4 font-extrabold text-emerald-700 dark:text-emerald-300">{score}</td>
                                            <td className="px-5 py-4 text-gray-600 dark:text-gray-400">{meaning}</td>
                                            <td className="px-5 py-4 text-gray-600 dark:text-gray-400">{who}</td>
                                            <td className="px-5 py-4 font-bold text-gray-800 dark:text-gray-200">{display}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section aria-labelledby="timeline-heading">
                        <SectionHeader
                            eyebrow="Timeline"
                            title="What Happens After You Submit - Complete Timeline"
                            description="From payment confirmation to public profile launch, this is the expected sequence for a standard application."
                        />

                        <div className="grid gap-4">
                            {timeline.map(({ time, title, text }) => (
                                <div key={title} className="flex gap-4 rounded-lg border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-700 text-white">
                                        <Clock3 className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                                            <h3 className="font-extrabold text-gray-950 dark:text-white">{title}</h3>
                                            <span className="rounded-md bg-emerald-50 px-2 py-1 text-xs font-bold text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300">{time}</span>
                                        </div>
                                        <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section aria-labelledby="package-heading">
                        <SectionHeader
                            eyebrow="Delivery Package"
                            title="What You Receive - Your Complete RakshaAI Trust Package"
                            description="When the certificate is issued, you receive everything needed to display your verification across every customer touchpoint."
                        />

                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {packageItems.map(({ icon: Icon, title, text }) => (
                                <div key={title} className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                                    <Icon className="mb-4 h-6 w-6 text-emerald-700 dark:text-emerald-300" />
                                    <h3 className="font-extrabold text-gray-950 dark:text-white">{title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{text}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section aria-labelledby="display-heading">
                        <SectionHeader
                            eyebrow="Badge Display"
                            title="Where and How to Display Your RakshaAI Verified Badge"
                            description="The highest-impact display moments are decision moments: when a customer is deciding whether to pay you."
                        />

                        <div className="grid gap-4 md:grid-cols-2">
                            {placements.map(([platform, text]) => (
                                <div key={platform} className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
                                    <h3 className="font-extrabold text-gray-950 dark:text-white">{platform}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{text}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-6 text-center dark:border-blue-900 dark:bg-blue-950/20">
                            <h3 className="font-extrabold text-gray-950 dark:text-white">Display Guide - Add Your Badge to Every Platform</h3>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Step-by-step screenshots for website, WhatsApp, Instagram, email, marketplace bios and more.</p>
                            <Link href="/trust-certification/badge-guide/" className="mt-4 inline-flex items-center gap-2 rounded-lg bg-blue-700 px-5 py-3 text-sm font-bold text-white hover:bg-blue-800">
                                Badge Display Guide <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </section>

                    <section aria-labelledby="business-type-heading">
                        <SectionHeader
                            eyebrow="Business Type"
                            title="Verification by Business Type - What Applies to You"
                            description="The five verification layers do not apply equally to every business structure. Here is what each type needs."
                        />

                        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm dark:border-gray-800">
                            <table className="min-w-[860px] w-full text-sm">
                                <thead>
                                    <tr className="bg-gray-50 dark:bg-gray-900">
                                        {["Business Type", "GST", "Aadhaar", "PAN", "Bank", "MCA / CIN", "Trust Score"].map((heading) => (
                                            <th key={heading} className="px-5 py-4 text-left font-bold text-gray-950 dark:text-white">{heading}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                                    {businessTypes.map(([type, gst, aadhaar, pan, bank, mca, score]) => (
                                        <tr key={type} className="bg-white dark:bg-gray-950">
                                            {[type, gst, aadhaar, pan, bank, mca, score].map((cell, index) => (
                                                <td key={`${type}-${index}`} className={`px-5 py-4 ${index === 0 || index === 6 ? "font-bold text-gray-950 dark:text-white" : "text-gray-600 dark:text-gray-400"}`}>
                                                    {cell}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <InfoNote icon={Store}>
                            Sole proprietors with GSTIN, Aadhaar, PAN and bank verification still qualify for a valid badge. Udyam registration is not required for RakshaAI Verified.
                        </InfoNote>
                    </section>

                    <section aria-labelledby="data-heading">
                        <SectionHeader
                            eyebrow="Data Security"
                            title="How We Handle Your Data - Security at Every Step"
                            description="RakshaAI stores verification status and masked display values, not raw sensitive data after checks are complete."
                        />

                        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm dark:border-gray-800">
                            <table className="min-w-[760px] w-full text-sm">
                                <thead>
                                    <tr className="bg-gray-50 dark:bg-gray-900">
                                        <th className="px-5 py-4 text-left font-bold text-gray-950 dark:text-white">Data Type</th>
                                        <th className="px-5 py-4 text-left font-bold text-gray-950 dark:text-white">How We Handle It</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                                    {dataRows.map(([type, handling]) => (
                                        <tr key={type} className="bg-white dark:bg-gray-950">
                                            <td className="px-5 py-4 font-extrabold text-emerald-700 dark:text-emerald-300">{type}</td>
                                            <td className="px-5 py-4 text-gray-600 dark:text-gray-400">{handling}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-6 grid gap-3 md:grid-cols-3">
                            <ChecklistNote>Aligned with India&apos;s Digital Personal Data Protection Act, 2023.</ChecklistNote>
                            <ChecklistNote>HTTPS and modern TLS encryption for data in transit.</ChecklistNote>
                            <ChecklistNote>No third-party data sales. Deletion requests are processed within 30 days.</ChecklistNote>
                        </div>
                    </section>

                    <section aria-labelledby="renewal-heading">
                        <SectionHeader
                            eyebrow="Renewal"
                            title="Badge Renewal - How Re-Verification Works"
                            description="Renewal re-runs the checks against current source data so the badge reflects current compliance, not just the first application date."
                        />

                        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm dark:border-gray-800">
                            <table className="min-w-[720px] w-full text-sm">
                                <thead>
                                    <tr className="bg-gray-50 dark:bg-gray-900">
                                        <th className="px-5 py-4 text-left font-bold text-gray-950 dark:text-white">Plan</th>
                                        <th className="px-5 py-4 text-left font-bold text-gray-950 dark:text-white">Validity</th>
                                        <th className="px-5 py-4 text-left font-bold text-gray-950 dark:text-white">Renewal Trigger</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                                    {renewalRows.map(([plan, validity, trigger]) => (
                                        <tr key={plan} className="bg-white dark:bg-gray-950">
                                            <td className="px-5 py-4 font-extrabold text-gray-950 dark:text-white">{plan}</td>
                                            <td className="px-5 py-4 text-gray-600 dark:text-gray-400">{validity}</td>
                                            <td className="px-5 py-4 text-gray-600 dark:text-gray-400">{trigger}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <InfoNote icon={RefreshCw}>
                            If you do not renew, the verification URL shows Certificate Expired and the embed code stops displaying a valid badge. This prevents expired checks from appearing current.
                        </InfoNote>
                    </section>

                    <section aria-labelledby="faq-heading">
                        <SectionHeader
                            eyebrow="FAQ"
                            title="Frequently Asked Questions"
                            description="Quick answers to the common questions businesses ask before applying for RakshaAI Verified."
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
                            <Link href="/trust-certification/faq/" className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:underline dark:text-emerald-300">
                                More questions? See full FAQ <ChevronRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </section>

                    <section aria-labelledby="related-heading">
                        <SectionHeader
                            eyebrow="Related Pages"
                            title="Related Pages & Free Safety Tools"
                            description="Continue through the trust certification cluster or use RakshaAI's free consumer safety tools."
                        />

                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {relatedLinks.map(({ label, href, text }) => (
                                <Link key={label} href={href} className="group rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition hover:border-emerald-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-emerald-800">
                                    <h3 className="font-extrabold text-gray-950 transition group-hover:text-emerald-700 dark:text-white dark:group-hover:text-emerald-300">{label}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{text}</p>
                                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-emerald-700 dark:text-emerald-300">
                                        Open <ArrowRight className="h-4 w-4" />
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </section>

                    <section>
                        <div className="grid gap-5 md:grid-cols-2">
                            <div className="rounded-lg bg-emerald-700 p-8 text-center text-white">
                                <ShieldCheck className="mx-auto mb-4 h-9 w-9 text-emerald-100" />
                                <h2 className="text-2xl font-extrabold">Understood How It Works? Start Your Application Now</h2>
                                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-emerald-50">
                                    5-layer government verification, 10-minute application and badge delivery in 2-3 business days.
                                </p>
                                <Link href="/trust-certification/apply/" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-bold text-emerald-700 hover:bg-emerald-50">
                                    Apply Now <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>

                            <div className="rounded-lg border border-red-200 bg-red-50 p-8 text-center dark:border-red-900 dark:bg-red-950/20">
                                <AlertTriangle className="mx-auto mb-4 h-9 w-9 text-red-600 dark:text-red-300" />
                                <h2 className="text-2xl font-extrabold text-gray-950 dark:text-white">Report a Fake RakshaAI Badge</h2>
                                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                                    Every genuine badge links to a verification page. If a badge fails to verify, report it so other users can be protected.
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
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-300">{eyebrow}</p>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-950 dark:text-white">{title}</h2>
            <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-400">{description}</p>
        </div>
    );
}

function InfoNote({ icon: Icon, children }: { icon: LucideIcon; children: ReactNode }) {
    return (
        <div className="mt-6 flex gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950/20">
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
