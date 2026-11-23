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
    Building2,
    CheckCircle2,
    ChevronRight,
    ClipboardCheck,
    Database,
    FileCheck2,
    Fingerprint,
    Landmark,
    LockKeyhole,
    RefreshCw,
    Search,
    Shield,
    ShieldCheck,
    Store,
    UserCheck,
    XCircle,
} from "lucide-react";

const canonicalUrl = "https://www.rakshaai.co/trust-certification/verification-standards/";

export const metadata: Metadata = {
    title: {
        absolute: "RakshaAI Verification Standards - 5 Govt. API Checks Explained",
    },
    description:
        "See exactly how RakshaAI verifies every business - GST via GSTN, Aadhaar via UIDAI eKYC, PAN via NSDL, bank account via RBI network, and MCA via MCA21. Full transparency.",
    alternates: {
        canonical: canonicalUrl,
    },
    robots: {
        index: true,
        follow: true,
        "max-snippet": -1,
    },
    openGraph: {
        title: "RakshaAI Verification Standards - 5 Govt. API Checks Explained",
        description:
            "A transparent explainer of RakshaAI's GSTN, UIDAI eKYC, PAN, bank account, MCA21 and internal fraud checks.",
        url: canonicalUrl,
        type: "article",
        siteName: "RakshaAI",
        images: [
            {
                url: "/opengraph-image",
                width: 1200,
                height: 630,
                alt: "RakshaAI Verification Standards",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "RakshaAI Verification Standards",
        description: "See the five verification layers behind every RakshaAI Verified business badge.",
        images: ["/opengraph-image"],
    },
    other: {
        "geo.region": "IN",
        language: "en-IN",
    },
};

const faqs = [
    {
        q: "What are the RakshaAI verification standards?",
        a: "RakshaAI verifies every business application across five official or regulated sources: GSTN for GST, UIDAI eKYC for Aadhaar identity, NSDL and Income Tax records for PAN, RBI-regulated bank verification, and MCA21 for company registration where applicable. A sixth internal fraud database check runs in parallel.",
    },
    {
        q: "How does RakshaAI verify my GST registration?",
        a: "RakshaAI queries the GSTN portal to confirm whether the GSTIN is active, whether the registered business name matches the application, and whether filing status is current for the required period.",
    },
    {
        q: "Is my Aadhaar data safe with RakshaAI?",
        a: "Yes. Your Aadhaar number is used only to trigger UIDAI eKYC OTP verification. After UIDAI confirms identity, the full Aadhaar number is purged. Only a masked display value and verification result are retained.",
    },
    {
        q: "What is penny drop bank verification?",
        a: "Penny drop is a regulated bank account verification method. A micro-transaction is sent to the bank account and the bank response confirms whether the account is active and whether the account holder name matches the business.",
    },
    {
        q: "Does the MCA check apply to sole proprietors?",
        a: "No. MCA21 applies to Private Limited companies, LLPs and OPCs. Sole proprietors and unregistered partnerships do not have a CIN, so Layers 1-4 are used and a 4/5 High Trust Score can still be fully valid.",
    },
    {
        q: "Is RakshaAI DPDP Act 2023 compliant?",
        a: "RakshaAI's data handling is aligned with India's Digital Personal Data Protection Act 2023. We collect only data needed for verification and badge issuance, retain it only for the plan duration plus 90 days, and process deletion requests within 30 days.",
    },
    {
        q: "How is the Trust Score calculated?",
        a: "The Trust Score reflects how many applicable verification layers passed. 5/5 Excellent means all five layers passed. 4/5 High commonly means GST, Aadhaar, PAN and bank checks passed while MCA is not applicable.",
    },
    {
        q: "Does RakshaAI store my PAN number?",
        a: "No readable PAN number is retained. RakshaAI stores the encrypted verification result, such as PAN Active: Yes or No, associated with the badge verification record.",
    },
    {
        q: "What is the RakshaAI Trust Engine?",
        a: "The Trust Engine is RakshaAI's internal fraud cross-check database containing user reports, flagged phone numbers, suspicious websites and scam intelligence. It runs silently on every application and can trigger manual review.",
    },
    {
        q: "Can the verification check my business after my plan expires?",
        a: "After expiry, consumers clicking your badge see Certificate Expired. Government checks are re-run at application and renewal, not after a plan has lapsed.",
    },
];

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.rakshaai.co/" },
        { "@type": "ListItem", position: 2, name: "Trust Certification", item: "https://www.rakshaai.co/trust-certification/" },
        { "@type": "ListItem", position: 3, name: "Verification Standards", item: canonicalUrl },
    ],
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    name: "RakshaAI Verification Standards",
    headline: "RakshaAI Verification Standards - How We Check Every Business, Layer by Layer",
    description:
        "A transparent explainer of RakshaAI's five verification layers, internal fraud cross-check, data safety controls and Trust Score calculation.",
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
    { value: "5 APIs", label: "Official source checks" },
    { value: "6th Check", label: "RakshaAI fraud database" },
    { value: "0", label: "Documents stored" },
    { value: "DPDP 2023", label: "Privacy-aligned handling" },
];

const comparisonRows = [
    ["You upload a copy of your GST certificate", "RakshaAI queries the live GSTN portal and receives the result from the source"],
    ["Verifier reads and stores your document", "Only the result is stored, such as Active or Not Active"],
    ["Forged documents can bypass manual checks", "A fake GSTIN fails a live GSTN check immediately"],
    ["Certificate reflects one historical issue date", "API result reflects current source data at verification or renewal"],
    ["Consumers cannot independently check the claim", "Every badge links to rakshaai.co/verify/[id] for one-click consumer verification"],
];

const layerOverview = [
    {
        id: "gst",
        layer: "Layer 1",
        title: "GST Verification via GSTN",
        icon: FileCheck2,
        source: "GSTN portal",
        description: "Checks GSTIN status, business name, return filing status, state and registration date.",
    },
    {
        id: "aadhaar",
        layer: "Layer 2",
        title: "Aadhaar KYC via UIDAI eKYC",
        icon: Fingerprint,
        source: "UIDAI eKYC",
        description: "Confirms identity ownership using OTP sent to the UIDAI-registered mobile number.",
    },
    {
        id: "pan",
        layer: "Layer 3",
        title: "PAN Verification",
        icon: UserCheck,
        source: "NSDL + Income Tax",
        description: "Confirms PAN validity, entity type, name linkage and PAN-Aadhaar linkage.",
    },
    {
        id: "bank",
        layer: "Layer 4",
        title: "Bank Account Verification",
        icon: Banknote,
        source: "RBI-regulated banking rails",
        description: "Uses penny drop to confirm account existence, active status and name match.",
    },
    {
        id: "mca",
        layer: "Layer 5",
        title: "Company Documents",
        icon: Building2,
        source: "MCA21",
        description: "Applies to Pvt Ltd, LLP and OPC entities using CIN and company records.",
    },
];

const gstRows = [
    ["GSTIN status", "Active / Cancelled / Suspended / Migrated", "GSTIN must be Active"],
    ["Business name", "Registered trade name as recorded on GSTN", "Name must match the application"],
    ["GST return filing status", "Filed / Pending / Not Due", "Required filings must be current"],
    ["State and taxpayer category", "State code and category such as Regular, Composition or SEZ", "State must match the application"],
    ["Date of registration", "GST registration effective date", "Confirms an actual registered business"],
];

const uidaiSteps = [
    "Applicant enters Aadhaar number in the secure application flow.",
    "UIDAI sends an OTP to the mobile number registered with Aadhaar.",
    "Applicant enters the OTP and RakshaAI sends it to UIDAI eKYC for confirmation.",
    "UIDAI confirms whether the identity and OTP are valid.",
    "RakshaAI stores the verification result and masked Aadhaar only.",
];

const uidaiConfirmations = [
    ["Identity verification", "Name, date of birth, gender and address are confirmed from UIDAI records."],
    ["Ownership verification", "OTP proves the applicant controls the Aadhaar-registered mobile number."],
    ["Active status", "Aadhaar must be active and usable for eKYC."],
    ["Mobile linkage", "OTP must be delivered and verified on the UIDAI-registered mobile number."],
];

const panRows = [
    ["PAN active status", "NSDL", "PAN is valid, active and not cancelled or suspended"],
    ["Entity type", "NSDL", "PAN belongs to the correct entity type: Individual, Firm, Company or HUF"],
    ["Name linkage", "Income Tax records", "Name on PAN matches the application"],
    ["PAN-Aadhaar linkage", "Income Tax portal", "PAN is linked to Aadhaar where required"],
];

const bankConfirmations = [
    ["Bank account name match", "The returned account holder name must match the business name, or the owner name for sole proprietors."],
    ["Account active status", "The account must be operational and not dormant, frozen or closed."],
    ["IFSC validity", "The IFSC must correspond to a real active bank branch."],
    ["Bank account, not UPI ID", "This verifies account number and IFSC directly, not a VPA or UPI handle."],
];

const mcaRows = [
    ["Company status", "Active / Strike Off / Under Liquidation / Under Process of Striking Off", "Must be Active"],
    ["Company name", "Registered company name as recorded on MCA21", "Must match the application, including Pvt Ltd or LLP suffix"],
    ["Date of incorporation", "Incorporation date and certificate information", "Confirms the company exists"],
    ["Registered office state", "Registered office state as on MCA21", "State should be consistent with the application"],
    ["Director details", "DINs and names of listed directors", "Cross-checked where applicable against Aadhaar identity"],
];

const fraudChecks = [
    ["Phone number", "Cross-checked against scam reports and flagged number intelligence."],
    ["Website URL", "Checked against RakshaAI reports, blacklisted domains and suspicious website history."],
    ["UPI IDs", "Compared with user-submitted fraud reports and internal risk signals."],
    ["Manual review", "A fraud database hit triggers review within 24 hours instead of automatic rejection."],
];

const dataRows = [
    ["Aadhaar number", "Not stored; purged after UIDAI OTP verification", "UIDAI guidelines prohibit storing Aadhaar numbers. Masked display only."],
    ["PAN number", "Encrypted verification status only", "The readable PAN number is not retained."],
    ["Bank account number", "Last 4 digits only", "Full account number is purged after penny drop completes."],
    ["GSTIN", "Encrypted", "Needed for badge display and public verification profile."],
    ["Company CIN", "Encrypted verification status", "Company name and active status are used for display."],
    ["UIDAI identity result", "Name confirmed / not confirmed", "RakshaAI stores the verification outcome, not full identity data."],
    ["Bank account name match", "Match / Not Match", "Only the match result is kept."],
    ["GSTN business name", "Business name for display", "Required on verification profile and directory listing."],
    ["Verification date", "Date of each check", "Needed for badge display and renewal records."],
    ["Trust Score", "4/5 or 5/5", "Calculated from passed verification layers."],
];

const complianceBullets = [
    "Aligned with India's Digital Personal Data Protection Act 2023.",
    "TLS 1.3 for data in transit and AES-256 for data at rest.",
    "Aadhaar retained only in masked display format after verification.",
    "Deletion requests can be sent to support@rakshaai.co and are processed within 30 days.",
    "No third-party data sales; RakshaAI's business model is subscriptions, not data resale.",
];

const trustScoreRows = [
    ["5/5 Excellent", "GST + Aadhaar + PAN + Bank + MCA all confirmed", "Pvt Ltd, LLP or OPC with current MCA compliance", "Issued"],
    ["4/5 High", "GST + Aadhaar + PAN + Bank confirmed; MCA not applicable", "Sole proprietor or partnership", "Issued"],
    ["4/5 High pending", "Four auto-checks pass and MCA21 check is still running", "Pvt Ltd with MCA check in progress", "Pending"],
    ["Below 4/5", "One or more critical layers failed", "Inactive GST, PAN mismatch or bank name mismatch", "Not issued"],
];

const afterPassCards = [
    {
        title: "Trust Certificate Generated",
        text: "A PDF certificate is generated with business name, Trust Score, verified layers, source portals, confirmation dates and unique badge ID.",
        icon: ClipboardCheck,
    },
    {
        title: "Badge Files Created",
        text: "PNG badge files at 80px, 160px and 300px are created, along with an SVG file, embed code and verification URL.",
        icon: BadgeCheck,
    },
    {
        title: "Public Verification Profile Created",
        text: "Your profile goes live at rakshaai.co/verify/[badge-id] with business name, Trust Score, checks and verification date.",
        icon: Search,
    },
    {
        title: "Directory Listing Published",
        text: "Your business appears in the Verified Businesses directory so customers can find and confirm your verification.",
        icon: Store,
    },
    {
        title: "Renewal Scheduled",
        text: "Renewal reminders are scheduled and each renewal re-runs applicable checks against current source data.",
        icon: RefreshCw,
    },
];

const relatedLinks = [
    { label: "How It Works", href: "/trust-certification/how-it-works/", text: "See the full application and verification process" },
    { label: "Apply for Badge", href: "/trust-certification/apply/", text: "Submit your application in about 10 minutes" },
    { label: "Badge Display Guide", href: "/trust-certification/badge-guide/", text: "Add your badge to website, WhatsApp and email" },
    { label: "Verified Businesses", href: "/trust-certification/verified-businesses/", text: "Browse businesses that passed verification" },
    { label: "Privacy Policy", href: "/privacy-policy/", text: "Read RakshaAI's full privacy practices" },
    { label: "Website Safety Checker", href: "/website-safety-checker/", text: "Check any website for scams" },
];

export default function VerificationStandardsPage() {
    return (
        <DefaultLayout>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLd([articleSchema, breadcrumbSchema, faqSchema]) }}
            />

            <main className="min-h-screen bg-white dark:bg-gray-950">
                <section className="border-b border-gray-200 bg-gradient-to-b from-slate-50 via-white to-white px-4 pb-14 pt-16 dark:border-gray-800 dark:from-gray-900 dark:via-gray-950 dark:to-gray-950">
                    <div className="mx-auto max-w-6xl">
                        <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                            <Link href="/" className="hover:text-blue-700 dark:hover:text-blue-300">Home</Link>
                            <ChevronRight className="h-4 w-4" />
                            <Link href="/trust-certification/" className="hover:text-blue-700 dark:hover:text-blue-300">Trust Certification</Link>
                            <ChevronRight className="h-4 w-4" />
                            <span className="font-semibold text-gray-800 dark:text-gray-200">Verification Standards</span>
                        </nav>

                        <div className="mx-auto max-w-4xl text-center">
                            <div className="mb-6 inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-blue-700 shadow-sm dark:border-blue-900 dark:bg-gray-900 dark:text-blue-300">
                                <ShieldCheck className="h-4 w-4" />
                                Technical Transparency
                            </div>
                            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-950 dark:text-white sm:text-5xl">
                                RakshaAI Verification Standards - How We Check Every Business, Layer by Layer
                            </h1>
                            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                                This page explains exactly how RakshaAI verifies business documents: which source systems are queried, what each source returns, how results are stored and how your data is protected.
                            </p>
                            <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-gray-600 dark:text-gray-400">
                                Transparency is fundamental to a trust badge. Businesses deserve to know what we check before they apply, and consumers deserve to know what verified means before they trust a badge.
                            </p>

                            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                                <Link href="/trust-certification/apply/" className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-700/20 hover:bg-blue-800">
                                    Ready to Get Verified? Apply Now <ArrowRight className="h-4 w-4" />
                                </Link>
                                <a href="#data-safety" className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-7 py-3.5 text-sm font-bold text-gray-800 hover:border-blue-300 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-blue-700 dark:hover:text-blue-300">
                                    See Data Safety <LockKeyhole className="h-4 w-4" />
                                </a>
                            </div>
                            <p className="mt-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                                From Rs. 299/month - Badge in 2-3 business days - No document uploads
                            </p>
                        </div>

                        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
                            {heroStats.map(({ value, label }) => (
                                <div key={label} className="rounded-lg border border-gray-200 bg-white p-5 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900">
                                    <p className="text-2xl font-extrabold text-blue-700 dark:text-blue-300">{value}</p>
                                    <p className="mt-1 text-xs font-medium leading-tight text-gray-500 dark:text-gray-400">{label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="mx-auto max-w-6xl space-y-20 px-4 py-16 sm:px-6 lg:px-8">
                    <section aria-labelledby="live-apis-heading">
                        <SectionHeader
                            id="live-apis-heading"
                            eyebrow="Live Source Checks"
                            title="Why We Use Live Source APIs - Not Document Uploads"
                            description="RakshaAI does not ask applicants to upload GST certificates, Aadhaar cards or PAN cards. We verify against source systems and store only the outcome needed for badge display and renewal."
                        />

                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="rounded-lg border border-red-200 bg-red-50 p-6 dark:border-red-900 dark:bg-red-950/20">
                                <div className="mb-4 flex items-center gap-3">
                                    <XCircle className="h-6 w-6 text-red-600 dark:text-red-300" />
                                    <h3 className="font-extrabold text-gray-950 dark:text-white">Document-Based Verification</h3>
                                </div>
                                <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                                    A business uploads a static document. A verifier reads it, stores it and trusts that it has not been forged or become outdated.
                                </p>
                            </div>
                            <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-900 dark:bg-emerald-950/20">
                                <div className="mb-4 flex items-center gap-3">
                                    <CheckCircle2 className="h-6 w-6 text-emerald-600 dark:text-emerald-300" />
                                    <h3 className="font-extrabold text-gray-950 dark:text-white">API-Based Verification</h3>
                                </div>
                                <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                                    RakshaAI queries the live source system. The result comes from the source database, and the badge links to a public verification page.
                                </p>
                            </div>
                        </div>

                        <Table className="mt-6" headers={["Document-Based Approach", "RakshaAI API-Based Approach"]} rows={comparisonRows} />
                    </section>

                    <section aria-labelledby="layers-heading">
                        <SectionHeader
                            id="layers-heading"
                            eyebrow="Five Verification Layers"
                            title="The Government and Regulated Source Checks Behind Every Badge"
                            description="Each layer checks a different risk area: business registration, identity, tax identity, bank traceability and company status."
                        />

                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
                            {layerOverview.map(({ id, layer, title, icon: Icon, source, description }) => (
                                <a key={id} href={`#${id}`} className="group rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition hover:border-blue-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-800">
                                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700 text-white">
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <p className="text-xs font-black uppercase tracking-wide text-blue-700 dark:text-blue-300">{layer}</p>
                                    <h3 className="mt-1 text-sm font-extrabold leading-snug text-gray-950 transition group-hover:text-blue-700 dark:text-white dark:group-hover:text-blue-300">{title}</h3>
                                    <p className="mt-2 text-xs font-semibold text-gray-500 dark:text-gray-400">{source}</p>
                                    <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{description}</p>
                                </a>
                            ))}
                        </div>
                    </section>

                    <LayerSection
                        id="gst"
                        eyebrow="Layer 1"
                        title="GST Verification via GSTN Portal"
                        icon={FileCheck2}
                        description="GSTN maintains the official database of GST registrations in India. When a GSTIN is submitted, RakshaAI checks live source status and name consistency."
                    >
                        <Table headers={["Data Point Checked", "What GSTN Returns", "Pass Condition"]} rows={gstRows} />
                        <InfoNote icon={AlertTriangle}>
                            A common fake GST pattern is submitting another business&apos;s GSTIN. RakshaAI cross-checks the GSTN business name against the application, and a mismatch fails this layer.
                        </InfoNote>
                    </LayerSection>

                    <LayerSection
                        id="aadhaar"
                        eyebrow="Layer 2"
                        title="Aadhaar KYC via UIDAI eKYC"
                        icon={Fingerprint}
                        description="UIDAI eKYC confirms applicant identity through OTP sent to the Aadhaar-registered mobile number. The full Aadhaar number is not retained after verification."
                    >
                        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                                <h3 className="font-extrabold text-gray-950 dark:text-white">How the UIDAI eKYC process works</h3>
                                <StepList steps={uidaiSteps} />
                            </div>
                            <Table headers={["What UIDAI Confirms", "Meaning"]} rows={uidaiConfirmations} />
                        </div>
                        <InfoNote icon={LockKeyhole}>
                            The OTP is sent to the mobile number registered with UIDAI, which can be different from the business phone number. Keep that SIM active during application.
                        </InfoNote>
                    </LayerSection>

                    <LayerSection
                        id="pan"
                        eyebrow="Layer 3"
                        title="PAN Verification via NSDL and Income Tax Department"
                        icon={UserCheck}
                        description="PAN confirms the tax identity behind the business or owner. RakshaAI checks validity, entity type, name linkage and Aadhaar linkage where applicable."
                    >
                        <Table headers={["Check", "Source", "What Is Confirmed"]} rows={panRows} />
                        <InfoNote icon={AlertTriangle}>
                            PAN-Aadhaar linkage is mandatory for many applicants. If your linkage is pending, complete it on the Income Tax portal before applying.
                        </InfoNote>
                    </LayerSection>

                    <LayerSection
                        id="bank"
                        eyebrow="Layer 4"
                        title="Bank Account Verification via RBI-Regulated Penny Drop"
                        icon={Banknote}
                        description="Penny drop is the standard account verification method used across RBI-regulated fintech and payment systems. It verifies the actual bank account number and IFSC."
                    >
                        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
                            <div className="rounded-lg border border-blue-200 bg-blue-50 p-6 dark:border-blue-900 dark:bg-blue-950/20">
                                <h3 className="font-extrabold text-gray-950 dark:text-white">How penny drop works</h3>
                                <p className="mt-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                                    RakshaAI sends a micro-transaction to the account number and IFSC provided. The bank response confirms the account exists, whether it is active and what account holder name is registered with the bank.
                                </p>
                                <p className="mt-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                                    The micro-transaction is reversed or has zero net financial effect. The purpose is verification, not payment.
                                </p>
                            </div>
                            <Table headers={["Confirmation", "What It Means"]} rows={bankConfirmations} />
                        </div>
                    </LayerSection>

                    <LayerSection
                        id="mca"
                        eyebrow="Layer 5"
                        title="Company Documents via MCA21 Portal"
                        icon={Building2}
                        description="MCA21 applies to Private Limited companies, LLPs and OPCs. It confirms company existence, active status, registered office state and director details where applicable."
                    >
                        <Table headers={["Data Point", "What MCA21 Returns", "Pass Condition"]} rows={mcaRows} />
                        <InfoNote icon={Shield}>
                            Layer 5 does not apply to sole proprietors and unregistered partnership firms. Those business types can receive a valid 4/5 High Trust Score when Layers 1-4 pass.
                        </InfoNote>
                    </LayerSection>

                    <section aria-labelledby="fraud-heading">
                        <SectionHeader
                            id="fraud-heading"
                            eyebrow="6th Parallel Check"
                            title="RakshaAI Internal Fraud Cross-Check"
                            description="Beyond source-system verification, RakshaAI checks every application against its own fraud intelligence database before issuing the badge."
                        />
                        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                                <Database className="mb-4 h-7 w-7 text-blue-700 dark:text-blue-300" />
                                <h3 className="font-extrabold text-gray-950 dark:text-white">What the Trust Engine checks</h3>
                                <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                                    The RakshaAI Trust Engine cross-references business phone number, website URL and associated payment identifiers against scam reports, flagged entities and risk signals from the RakshaAI user base.
                                </p>
                                <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                                    This is not shown as a labelled Layer 6 on the certificate because it is a fraud risk screen, not a government verification layer.
                                </p>
                            </div>
                            <Table headers={["Signal", "Action"]} rows={fraudChecks} />
                        </div>
                    </section>

                    <section id="data-safety" aria-labelledby="data-safety-heading">
                        <SectionHeader
                            id="data-safety-heading"
                            eyebrow="Data Safety"
                            title="What We Store, What We Do Not Store, and Why"
                            description="RakshaAI stores the minimum required to display verification status, renew a badge and let consumers verify a business. We do not store original document uploads."
                        />
                        <Table headers={["Data Item", "What We Store", "Why"]} rows={dataRows} />

                        <div className="mt-6 rounded-lg border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-900 dark:bg-emerald-950/20">
                            <div className="mb-4 flex items-center gap-3">
                                <LockKeyhole className="h-6 w-6 text-emerald-700 dark:text-emerald-300" />
                                <h3 className="font-extrabold text-gray-950 dark:text-white">Compliance and Encryption</h3>
                            </div>
                            <Checklist items={complianceBullets} />
                            <div className="mt-5 flex flex-wrap gap-4">
                                <Link href="/privacy-policy/" className="inline-flex items-center gap-2 text-sm font-bold text-emerald-800 hover:underline dark:text-emerald-300">
                                    Read Privacy Policy <ChevronRight className="h-4 w-4" />
                                </Link>
                                <Link href="/trust-certification/badge-guide/" className="inline-flex items-center gap-2 text-sm font-bold text-emerald-800 hover:underline dark:text-emerald-300">
                                    See Badge Display Guide <ChevronRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </section>

                    <section aria-labelledby="score-heading">
                        <SectionHeader
                            id="score-heading"
                            eyebrow="Trust Score"
                            title="How Your RakshaAI Trust Score Is Calculated"
                            description="After applicable layers complete, RakshaAI calculates the score based on how many verification layers passed."
                        />
                        <Table headers={["Score", "Layers Passed", "Typical Applicant", "Badge Status"]} rows={trustScoreRows} />
                        <InfoNote icon={RefreshCw}>
                            The public verification profile reflects the latest verification or renewal result. If a plan expires, the page clearly shows Certificate Expired instead of continuing to imply current verification.
                        </InfoNote>
                    </section>

                    <section aria-labelledby="after-pass-heading">
                        <SectionHeader
                            id="after-pass-heading"
                            eyebrow="After Approval"
                            title="What Happens After Your Verification Passes"
                            description="Once applicable checks pass and your Trust Score is calculated, these outputs are generated automatically."
                        />
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
                            {afterPassCards.map(({ title, text, icon: Icon }) => (
                                <div key={title} className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700 text-white">
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <h3 className="font-extrabold text-gray-950 dark:text-white">{title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{text}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <div className="rounded-lg bg-blue-700 p-8 text-center text-white">
                            <Landmark className="mx-auto mb-4 h-10 w-10 text-blue-100" />
                            <h2 className="text-2xl font-extrabold">Verified Against All Applicable Source Checks - Apply Now</h2>
                            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-blue-50">
                                Start your application in about 10 minutes. RakshaAI verifies from source systems and issues your badge package after approval.
                            </p>
                            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                                <Link href="/trust-certification/apply/" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-bold text-blue-700 hover:bg-blue-50">
                                    Apply for Verification <ArrowRight className="h-4 w-4" />
                                </Link>
                                <Link href="/trust-certification/how-it-works/" className="inline-flex items-center justify-center gap-2 rounded-lg border border-blue-200 px-6 py-3 text-sm font-bold text-white hover:bg-blue-800">
                                    See How It Works <ChevronRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </section>

                    <section aria-labelledby="faq-heading">
                        <SectionHeader
                            id="faq-heading"
                            eyebrow="FAQ"
                            title="Frequently Asked Questions About Verification Standards"
                            description="Quick answers about source checks, data storage, Trust Score calculation and renewal behavior."
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

                    <section aria-labelledby="related-heading">
                        <SectionHeader
                            id="related-heading"
                            eyebrow="Related Pages"
                            title="Continue Through the Trust Certification Cluster"
                            description="Use these pages to understand the application flow, display your badge or verify businesses already listed by RakshaAI."
                        />
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {relatedLinks.map(({ label, href, text }) => (
                                <Link key={label} href={href} className="group rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition hover:border-blue-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-800">
                                    <h3 className="font-extrabold text-gray-950 transition group-hover:text-blue-700 dark:text-white dark:group-hover:text-blue-300">{label}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{text}</p>
                                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-blue-700 dark:text-blue-300">
                                        Open <ArrowRight className="h-4 w-4" />
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </section>

                    <section>
                        <div className="grid gap-5 md:grid-cols-2">
                            <div className="rounded-lg border border-amber-200 bg-amber-50 p-8 text-center dark:border-amber-900 dark:bg-amber-950/20">
                                <Shield className="mx-auto mb-4 h-9 w-9 text-amber-600 dark:text-amber-300" />
                                <h2 className="text-2xl font-extrabold text-gray-950 dark:text-white">Need a Human Review?</h2>
                                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                                    If a source check fails due to stale government records or a false fraud signal, contact support with your Application Reference Number.
                                </p>
                                <a href="mailto:support@rakshaai.co" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-amber-600 px-6 py-3 text-sm font-bold text-white hover:bg-amber-700">
                                    Email Support <ArrowRight className="h-4 w-4" />
                                </a>
                            </div>

                            <div className="rounded-lg border border-red-200 bg-red-50 p-8 text-center dark:border-red-900 dark:bg-red-950/20">
                                <AlertTriangle className="mx-auto mb-4 h-9 w-9 text-red-600 dark:text-red-300" />
                                <h2 className="text-2xl font-extrabold text-gray-950 dark:text-white">Found Fake Badge Abuse?</h2>
                                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                                    A genuine RakshaAI badge always opens a valid verification page. Report suspicious badge claims so users can be protected.
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
    id,
    eyebrow,
    title,
    description,
}: {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
}) {
    return (
        <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-700 dark:text-blue-300">{eyebrow}</p>
            <h2 id={id} className="mt-2 text-3xl font-extrabold text-gray-950 dark:text-white">{title}</h2>
            <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-400">{description}</p>
        </div>
    );
}

function LayerSection({
    id,
    eyebrow,
    title,
    icon: Icon,
    description,
    children,
}: {
    id: string;
    eyebrow: string;
    title: string;
    icon: LucideIcon;
    description: string;
    children: ReactNode;
}) {
    const headingId = `${id}-heading`;

    return (
        <section id={id} aria-labelledby={headingId} className="scroll-mt-24">
            <div className="mb-8 flex flex-col gap-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 md:flex-row md:items-start">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-700 text-white">
                    <Icon className="h-6 w-6" />
                </div>
                <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-blue-700 dark:text-blue-300">{eyebrow}</p>
                    <h2 id={headingId} className="mt-1 text-2xl font-extrabold text-gray-950 dark:text-white">{title}</h2>
                    <p className="mt-3 leading-relaxed text-gray-600 dark:text-gray-400">{description}</p>
                </div>
            </div>
            {children}
        </section>
    );
}

function StepList({ steps }: { steps: string[] }) {
    return (
        <ol className="mt-5 space-y-3">
            {steps.map((step, index) => (
                <li key={step} className="flex gap-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md bg-blue-50 text-xs font-extrabold text-blue-700 dark:bg-blue-950/30 dark:text-blue-300">
                        {index + 1}
                    </span>
                    <span>{step}</span>
                </li>
            ))}
        </ol>
    );
}

function Checklist({ items }: { items: string[] }) {
    return (
        <ul className="grid gap-3 md:grid-cols-2">
            {items.map((item) => (
                <li key={item} className="flex gap-2 text-sm leading-relaxed text-emerald-900 dark:text-emerald-200">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600 dark:text-emerald-300" />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    );
}

function Table({
    headers,
    rows,
    className = "",
}: {
    headers: string[];
    rows: string[][];
    className?: string;
}) {
    return (
        <div className={`overflow-x-auto rounded-lg border border-gray-200 shadow-sm dark:border-gray-800 ${className}`}>
            <table className="min-w-[760px] w-full text-sm">
                <thead>
                    <tr className="bg-gray-50 dark:bg-gray-900">
                        {headers.map((header) => (
                            <th key={header} className="px-5 py-4 text-left font-bold text-gray-950 dark:text-white">{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                    {rows.map((row) => (
                        <tr key={row.join("-")} className="bg-white dark:bg-gray-950">
                            {row.map((cell, index) => (
                                <td key={`${row[0]}-${index}`} className={`px-5 py-4 ${index === 0 ? "font-extrabold text-blue-700 dark:text-blue-300" : "text-gray-600 dark:text-gray-400"}`}>
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
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
