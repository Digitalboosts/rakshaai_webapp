import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import DefaultLayout from "@/components/DefaultLayout";
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
    Database,
    Fingerprint,
    Landmark,
    Link2,
    Shield,
    ShieldCheck,
    XCircle,
} from "lucide-react";

const canonicalUrl = "https://www.rakshaai.co/compare/rakshaai-verified-vs-gstin/";

export const metadata: Metadata = {
    title: {
        absolute: "RakshaAI Verified vs GSTIN - Is GST Enough for Business Trust?",
    },
    description:
        "GSTIN proves you pay taxes. RakshaAI Verified proves you are a legitimate, trustworthy business - 5 govt. API checks including Aadhaar, PAN, bank account, and MCA. See the full comparison.",
    alternates: {
        canonical: canonicalUrl,
    },
    robots: {
        index: true,
        follow: true,
        "max-snippet": -1,
    },
    openGraph: {
        title: "RakshaAI Verified vs GSTIN - Is GST Enough for Business Trust?",
        description:
            "Compare GSTIN-only trust with RakshaAI Verified's GST, Aadhaar, PAN, bank, MCA and fraud database checks.",
        url: canonicalUrl,
        type: "article",
        siteName: "RakshaAI",
        images: [
            {
                url: "/opengraph-image",
                width: 1200,
                height: 630,
                alt: "RakshaAI Verified vs GSTIN comparison",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "RakshaAI Verified vs GSTIN",
        description: "See why GSTIN is a tax registration, while RakshaAI Verified adds identity, bank, MCA and fraud checks.",
        images: ["/opengraph-image"],
    },
    other: {
        "geo.region": "IN",
        language: "en-IN",
    },
};

const faqs = [
    {
        q: "Is RakshaAI Verified the same as a government-approved badge?",
        a: "No. RakshaAI Verified is a private trust badge issued by RakshaAI after independently checking business information against official or regulated source systems. It is not a government certification or government endorsement.",
    },
    {
        q: "If I already have a GSTIN, do I still need RakshaAI Verified?",
        a: "GSTIN proves tax registration. RakshaAI Verified adds four more trust layers: owner identity verification, PAN verification, bank account name match, MCA company status where applicable, and fraud database checks.",
    },
    {
        q: "Can a consumer verify my RakshaAI badge themselves?",
        a: "Yes. A genuine badge opens rakshaai.co/verify/[badge-id], where consumers can see business name, Trust Score, verification checks, source names and verification date.",
    },
    {
        q: "What is the difference between 4/5 High and 5/5 Excellent Trust Score?",
        a: "5/5 Excellent means all five layers, including MCA21, passed. 4/5 High usually means GST, Aadhaar, PAN and bank checks passed while MCA is not applicable, such as for sole proprietors.",
    },
    {
        q: "Can a fake business get RakshaAI Verified?",
        a: "A fake business can sometimes have an active GSTIN, but it is extremely difficult to pass all RakshaAI layers because Aadhaar OTP, bank account name, PAN, GST and MCA checks must align.",
    },
    {
        q: "What happens if a business's GSTIN lapses after verification?",
        a: "At renewal, RakshaAI re-runs applicable checks. If the GSTIN has lapsed, the badge is not renewed until the issue is fixed. The public verification page reflects current status, not only the historical check date.",
    },
    {
        q: "Does RakshaAI Verified check FSSAI or Shop Act registration?",
        a: "Not directly. RakshaAI focuses on broadly applicable checks: GST, Aadhaar, PAN, bank account and MCA where applicable. FSSAI and Shop Act are sector-specific or state-specific registrations.",
    },
    {
        q: "Can a sole proprietor get RakshaAI Verified?",
        a: "Yes. Sole proprietors can pass GST, Aadhaar, PAN and bank account checks and receive a valid 4/5 High Trust Score because MCA is not applicable.",
    },
    {
        q: "Is RakshaAI verification data safe under the DPDP Act?",
        a: "RakshaAI data handling is aligned with India's Digital Personal Data Protection Act 2023. Aadhaar is used for UIDAI OTP verification and is not stored after verification; other sensitive data is minimized and encrypted.",
    },
    {
        q: "What does RakshaAI Verified cost, and is it worth it?",
        a: "Plans start at Rs. 299/month, with quarterly and annual options. The value comes from converting even one hesitant buyer, reducing manual due-diligence questions and giving customers a one-click trust signal.",
    },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    name: "RakshaAI Verified vs GSTIN",
    headline: "RakshaAI Verified vs GSTIN - Is a GST Number Enough to Prove Your Business Is Trustworthy?",
    description:
        "A side-by-side comparison of GSTIN-only verification and RakshaAI Verified's five-layer business trust checks.",
    url: canonicalUrl,
    datePublished: "2026-07-03",
    dateModified: "2026-07-03",
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
    speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["#main-comparison-table"],
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.rakshaai.co/" },
        { "@type": "ListItem", position: 2, name: "Compare", item: "https://www.rakshaai.co/compare/" },
        { "@type": "ListItem", position: 3, name: "RakshaAI Verified vs GSTIN", item: canonicalUrl },
    ],
};

const comparisonTableSchema = {
    "@context": "https://schema.org",
    "@type": "Table",
    name: "RakshaAI Verified vs GSTIN comparison table",
    description:
        "Structured comparison showing how GSTIN-only verification differs from RakshaAI Verified business checks.",
    about: canonicalUrl,
    speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["#main-comparison-table"],
    },
};

const faqSchema = faqPageSchema(faqs.map((faq) => ({ question: faq.q, answer: faq.a })));

const heroStats = [
    { value: "5 Layers", label: "RakshaAI API checks" },
    { value: "1 Layer", label: "GSTIN only covers" },
    { value: "Rs. 299/mo", label: "RakshaAI Verified from" },
    { value: "Free", label: "GSTIN status check" },
];

const gstDoesRows = [
    ["Your business is registered for GST under GST Council records", "The identity of the person running the business"],
    ["Your GST registration is Active, not cancelled or suspended", "Whether the transaction bank account belongs to the registered business"],
    ["Registered business name and state on GSTN", "Whether the company is Active on MCA21 or has been struck off"],
    ["GST taxpayer category such as Regular, Composition or SEZ", "Whether the business has fraud complaints against it"],
    ["Recent GST filing status where available", "Whether the business is free from court cases or compliance violations"],
];

const comparisonRows = [
    ["What it confirms", "GST registration is active. Business name and state on GSTN portal.", "GST + Aadhaar identity + PAN + bank account name match + MCA company status where applicable."],
    ["Data source", "GSTN portal only.", "GSTN + UIDAI + NSDL + Income Tax + RBI-regulated banking rails + MCA21 + RakshaAI fraud database."],
    ["Business owner identity", "Not confirmed. GST does not publicly confirm who runs the business.", "Confirmed through UIDAI Aadhaar eKYC with OTP consent."],
    ["Bank account legitimacy", "Not confirmed. GSTIN and bank account are separate.", "Confirmed through penny drop bank verification and name match."],
    ["Company registration", "Not confirmed by GSTIN alone.", "MCA21 confirms company is Active for Pvt Ltd, LLP and OPC businesses."],
    ["Fraud database check", "No fraud report cross-check.", "RakshaAI Trust Engine checks against user fraud reports and risk signals."],
    ["Consumer verification", "Consumer must manually search GSTIN and interpret the result.", "Consumer clicks a badge and sees a public verification profile."],
    ["Can a fake business have it?", "Yes. A GSTIN can be active even when the operator is fraudulent.", "Hard to fake because multiple source checks must align."],
    ["Badge / display signal", "GSTIN is a tax number, not a consumer-facing trust signal.", "Badge can be shown on website, WhatsApp, Instagram, email and invoices."],
    ["Re-verification", "GSTIN status can change with no customer-facing trust update.", "Re-verified at renewal using current source data."],
    ["Cost to business", "Free status check; GST registration is mandatory above threshold.", "From Rs. 299/month for voluntary premium trust verification."],
    ["Best for", "Tax compliance.", "Building online trust and differentiating from unverified competitors."],
];

const verificationLayers = [
    {
        layer: "1",
        title: "GST",
        source: "GSTN Portal",
        icon: Landmark,
        text: "Checks active GSTIN, business name match, filing status and state consistency.",
    },
    {
        layer: "2",
        title: "Aadhaar KYC",
        source: "UIDAI eKYC",
        icon: Fingerprint,
        text: "Confirms business owner identity through OTP consent and UIDAI records.",
    },
    {
        layer: "3",
        title: "PAN",
        source: "NSDL + Income Tax",
        icon: ShieldCheck,
        text: "Checks PAN validity, entity type, name linkage and Aadhaar linkage where required.",
    },
    {
        layer: "4",
        title: "Bank Account",
        source: "RBI-regulated banking rails",
        icon: Banknote,
        text: "Checks account existence, active status, IFSC validity and account holder name match.",
    },
    {
        layer: "5",
        title: "Company Registration",
        source: "MCA21",
        icon: Building2,
        text: "Checks Active company status, CIN, incorporation details and director records for companies.",
    },
];

const trustScoreCards = [
    {
        score: "5/5 Excellent",
        title: "All five layers confirmed",
        text: "Best fit for Pvt Ltd, LLP and OPC businesses where GST, Aadhaar, PAN, bank and MCA checks all pass.",
    },
    {
        score: "4/5 High",
        title: "MCA not applicable",
        text: "Common for sole proprietors. GST, Aadhaar, PAN and bank checks pass, while company registration is marked N/A.",
    },
    {
        score: "Below 4/5",
        title: "Badge not issued",
        text: "If core checks do not align, RakshaAI does not issue the public trust badge until the business fixes the mismatch.",
    },
];

const afterVerificationItems = [
    "Trust Certificate PDF",
    "PNG badge files in 80px, 160px and 300px",
    "SVG badge and embed code",
    "Public verification profile at rakshaai.co/verify/[id]",
    "Verified Businesses directory listing",
    "Renewal checks against current source data",
];

const scenarios = [
    ["Fake seller, real GSTIN", "A scammer registers GST or misuses another business GSTIN. The GSTIN check passes, but owner identity and bank account are not proven."],
    ["Old GSTIN, new fraud", "A business was once legitimate, but new operators use the same GSTIN for a fraudulent operation."],
    ["WhatsApp seller shares someone else's GSTIN", "A seller copies a valid GSTIN from a real company. The GST result looks correct, but the seller has no connection to that business."],
];

const consumerRows = [
    ["Seller shares GSTIN number in WhatsApp or bio.", "Seller displays a badge that opens rakshaai.co/verify/[id] in one tap."],
    ["Consumer must go to gst.gov.in and interpret the result.", "Consumer sees business name, Trust Score, checks passed and verification date."],
    ["Result shows registered name and state only.", "Result shows identity, bank account, GST, PAN and MCA status where applicable."],
    ["Consumer cannot confirm who runs the business.", "Consumer can confirm the identity and account checks behind the badge."],
    ["No visual trust signal.", "Badge is listed in the Verified Businesses directory and can be displayed across channels."],
];

const businessRows = [
    ["Sole proprietor / freelancer", "No MCA registration. Consumers cannot verify identity from GSTIN alone.", "Aadhaar eKYC, bank match and 4/5 High Trust Score."],
    ["WhatsApp / Instagram seller", "No easy public trust signal. Buyer cannot confirm who they are paying.", "Clickable badge, directory listing and fraud database check."],
    ["Pvt Ltd / LLP / OPC", "Consumers rarely check GST and MCA manually.", "All five layers checked and summarized in one profile."],
    ["Marketplace seller", "Ratings vary and off-platform transactions have low protection.", "Badge works across WhatsApp, email, website and invoices."],
    ["B2B service provider", "Clients often run manual due diligence.", "Badge pre-answers common GST, MCA, PAN and bank checks."],
    ["D2C brand / online store", "Payment logos do not prove the seller is verified.", "Checkout badge reduces trust friction near payment."],
];

const sideBySideRows = [
    ["Trust signal", "Active GSTIN shown in bio or shared on request", "GSTIN plus RakshaAI Verified badge in bio"],
    ["Customer action", "Customer manually searches GSTIN", "Customer taps badge and sees Trust Score"],
    ["Time required", "5 minutes or more", "Around 10 seconds"],
    ["Remaining doubt", "Who is this seller and does the account match?", "Identity and bank account checks are visible"],
    ["Directory listing", "No directory listing", "Listed in Verified Businesses directory"],
    ["Conversion impact", "Hesitant buyers may abandon", "Trust signal can convert hesitant buyers"],
];

const relatedLinks = [
    { label: "Apply for RakshaAI Verified", href: "/trust-certification/apply/", text: "Start the 10-minute application" },
    { label: "How It Works", href: "/trust-certification/how-it-works/", text: "See the full verification process" },
    { label: "Verification Standards", href: "/trust-certification/verification-standards/", text: "Review exact API checks and data safety" },
    { label: "Verified Businesses Directory", href: "/trust-certification/verified-businesses/", text: "Browse businesses that passed verification" },
    { label: "How to Verify a Business", href: "/blog/how-to-verify-a-business-india/", text: "Consumer guide to business verification" },
    { label: "Badge Display Guide", href: "/trust-certification/badge-guide/", text: "Display your badge on every channel" },
];

export default function RakshaAIVerifiedVsGstinPage() {
    return (
        <DefaultLayout>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLd([articleSchema, breadcrumbSchema, comparisonTableSchema, faqSchema]) }}
            />

            <main className="min-h-screen bg-white dark:bg-gray-950">
                <section className="border-b border-gray-200 bg-gradient-to-b from-emerald-50 via-white to-white px-4 pb-14 pt-16 dark:border-gray-800 dark:from-gray-900 dark:via-gray-950 dark:to-gray-950">
                    <div className="mx-auto max-w-6xl">
                        <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                            <Link href="/" className="hover:text-emerald-700 dark:hover:text-emerald-300">Home</Link>
                            <ChevronRight className="h-4 w-4" />
                            <span>Compare</span>
                            <ChevronRight className="h-4 w-4" />
                            <span className="font-semibold text-gray-800 dark:text-gray-200">RakshaAI Verified vs GSTIN</span>
                        </nav>

                        <div className="mx-auto max-w-4xl text-center">
                            <div className="mb-6 inline-flex items-center gap-2 rounded-lg border border-emerald-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-emerald-700 shadow-sm dark:border-emerald-900 dark:bg-gray-900 dark:text-emerald-300">
                                <BadgeCheck className="h-4 w-4" />
                                Business Trust Comparison
                            </div>
                            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-950 dark:text-white sm:text-5xl">
                                RakshaAI Verified vs GSTIN - Is a GST Number Enough to Prove Your Business Is Trustworthy?
                            </h1>
                            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                                Every legitimate Indian business above Rs. 20 lakh turnover has a GSTIN. That makes GSTIN a basic proof of tax registration, but not proof of trustworthiness.
                            </p>
                            <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-gray-600 dark:text-gray-400">
                                GSTIN does not prove who runs the business, whether the bank account matches the business name, whether the company is active on MCA, or whether the business has fraud complaints. This comparison explains what each check confirms, what each one misses, and when you need both.
                            </p>

                            <p className="mt-8 text-xl font-extrabold text-gray-950 dark:text-white">
                                Already Have a GSTIN? Add 4 More Layers in 10 Minutes
                            </p>
                            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                                <Link href="/trust-certification/apply/" className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-700 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-700/20 hover:bg-emerald-800">
                                    Apply for RakshaAI Verified <ArrowRight className="h-4 w-4" />
                                </Link>
                                <a href="#main-comparison-table" className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-7 py-3.5 text-sm font-bold text-gray-800 hover:border-emerald-300 hover:text-emerald-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-emerald-700 dark:hover:text-emerald-300">
                                    See Comparison <ChevronRight className="h-4 w-4" />
                                </a>
                            </div>
                            <p className="mt-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                                From Rs. 299/month - 5 Govt. API checks - Badge in 2-3 business days
                            </p>
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
                    <section aria-labelledby="gst-enough-heading">
                        <SectionHeader
                            id="gst-enough-heading"
                            eyebrow="GSTIN Limits"
                            title="Is GSTIN Enough to Prove Your Business Is Trustworthy?"
                            description="For tax compliance, GSTIN matters. For online trust, it is only one signal."
                        />
                        <Table headers={["What a GSTIN Confirms", "What a GSTIN Does Not Confirm"]} rows={gstDoesRows} />
                        <InfoNote icon={AlertTriangle}>
                            For online businesses, GST is the floor of trust, not the ceiling. Customers still need identity, payment-account and fraud-history confidence. See the <Link href="/blog/how-to-verify-a-business-india/" className="font-bold underline">business verification guide</Link> for the wider checklist.
                        </InfoNote>
                    </section>

                    <section aria-labelledby="comparison-heading">
                        <SectionHeader
                            id="comparison-heading"
                            eyebrow="Side-by-Side"
                            title="Full Comparison - RakshaAI Verified vs GSTIN Only"
                            description="The complete breakdown of what matters for a business owner or consumer making a trust decision."
                        />
                        <Table id="main-comparison-table" headers={["Factor", "GSTIN Only", "RakshaAI Verified"]} rows={comparisonRows} />
                        <InfoNote icon={Shield}>
                            RakshaAI Verified is a private trust badge, not a government certification. It is independent verification using official or regulated source checks.
                        </InfoNote>
                    </section>

                    <section aria-labelledby="layers-heading">
                        <SectionHeader
                            id="layers-heading"
                            eyebrow="5 API Layers"
                            title="What RakshaAI Verified Actually Checks"
                            description="A RakshaAI Verified application runs five source checks plus an internal fraud database screen."
                        />
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
                            {verificationLayers.map(({ layer, title, source, icon: Icon, text }) => (
                                <div key={title} className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-700 text-white">
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <p className="text-xs font-black uppercase tracking-wide text-emerald-700 dark:text-emerald-300">Layer {layer}</p>
                                    <h3 className="mt-1 font-extrabold text-gray-950 dark:text-white">{title}</h3>
                                    <p className="mt-1 text-xs font-semibold text-gray-500 dark:text-gray-400">{source}</p>
                                    <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{text}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-6 dark:border-blue-900 dark:bg-blue-950/20">
                            <div className="flex gap-3">
                                <Database className="mt-1 h-5 w-5 flex-shrink-0 text-blue-700 dark:text-blue-300" />
                                <p className="text-sm leading-relaxed text-blue-950 dark:text-blue-200">
                                    The sixth internal check is RakshaAI Trust Engine screening against business phone number, website URL, UPI IDs, 2 million+ user fraud reports and cybercrime.gov.in advisories. It runs automatically on every application.
                                </p>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-4">
                                <Link href="/trust-certification/how-it-works/" className="inline-flex items-center gap-2 text-sm font-bold text-blue-800 hover:underline dark:text-blue-300">
                                    Full process <ChevronRight className="h-4 w-4" />
                                </Link>
                                <Link href="/trust-certification/verification-standards/" className="inline-flex items-center gap-2 text-sm font-bold text-blue-800 hover:underline dark:text-blue-300">
                                    API details <ChevronRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </section>

                    <section aria-labelledby="trust-score-heading">
                        <SectionHeader
                            id="trust-score-heading"
                            eyebrow="Trust Score"
                            title="Trust Score - What You Receive"
                            description="After applicable checks complete, the result is summarized into a public Trust Score customers can understand quickly."
                        />
                        <div className="grid gap-4 md:grid-cols-3">
                            {trustScoreCards.map(({ score, title, text }) => (
                                <div key={score} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                                    <p className="text-2xl font-black text-emerald-700 dark:text-emerald-300">{score}</p>
                                    <h3 className="mt-3 font-extrabold text-gray-950 dark:text-white">{title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{text}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12">
                            <div className="mx-auto mb-6 max-w-3xl text-center">
                                <h3 className="text-2xl font-extrabold text-gray-950 dark:text-white">After Verification</h3>
                                <p className="mt-3 leading-relaxed text-gray-600 dark:text-gray-400">
                                    Once verified, your public profile goes live and you receive the assets needed to show trust across website, WhatsApp, Instagram, email and invoices.
                                </p>
                            </div>
                            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                                {afterVerificationItems.map((item) => (
                                    <div key={item} className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-700 dark:text-emerald-300" />
                                        <p className="text-sm font-semibold leading-relaxed text-gray-700 dark:text-gray-300">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-8 rounded-lg bg-emerald-700 p-6 text-center text-white">
                            <h3 className="text-xl font-extrabold">Apply for RakshaAI Verified - 10-Minute Application</h3>
                            <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-emerald-50">
                                GSTIN, Aadhaar, PAN, bank and MCA checks where applicable. Badge in 2-3 business days, from Rs. 299/month.
                            </p>
                            <Link href="/trust-certification/apply/" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-emerald-700 hover:bg-emerald-50">
                                Start Application <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </section>

                    <section aria-labelledby="scenarios-heading">
                        <SectionHeader
                            id="scenarios-heading"
                            eyebrow="Where GSTIN Fails"
                            title="When a GSTIN Is Not Enough - Real Scenarios"
                            description="A GST registration can be active while the transaction risk remains high."
                        />
                        <div className="grid gap-4 md:grid-cols-3">
                            {scenarios.map(([title, text]) => (
                                <div key={title} className="rounded-lg border border-red-200 bg-red-50 p-5 shadow-sm dark:border-red-900 dark:bg-red-950/20">
                                    <XCircle className="mb-4 h-6 w-6 text-red-600 dark:text-red-300" />
                                    <h3 className="font-extrabold text-gray-950 dark:text-white">{title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-300">{text}</p>
                                </div>
                            ))}
                        </div>
                        <InfoNote icon={ShieldCheck}>
                            The RakshaAI Aadhaar eKYC layer helps prevent these scenarios because the person applying must provide OTP consent, while the bank account, PAN, GSTIN and company status must align across source checks.
                        </InfoNote>
                    </section>

                    <section aria-labelledby="consumer-heading">
                        <SectionHeader
                            id="consumer-heading"
                            eyebrow="Consumer View"
                            title="What Your Customers Actually See"
                            description="Trust is not only about what is checked. It is also about how easily customers can verify the result."
                        />
                        <Table headers={["GSTIN - Consumer Experience", "RakshaAI Verified - Consumer Experience"]} rows={consumerRows} />
                        <p className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-5 text-sm leading-relaxed text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300">
                            A WhatsApp seller who shares only a GSTIN asks the customer to do manual research. A seller who displays a RakshaAI badge gives the customer a one-tap answer. In online commerce, less verification friction means more confidence at the moment of purchase.
                        </p>
                    </section>

                    <section aria-labelledby="who-should-apply-heading">
                        <SectionHeader
                            id="who-should-apply-heading"
                            eyebrow="Best Fit"
                            title="Who Should Apply for RakshaAI Verified Beyond GSTIN?"
                            description="RakshaAI Verified adds the most value where buyer hesitation directly affects sales or vendor onboarding."
                        />
                        <Table headers={["Business Type", "Why GSTIN Alone Is Not Enough", "What RakshaAI Adds"]} rows={businessRows} />
                    </section>

                    <section aria-labelledby="pricing-heading">
                        <SectionHeader
                            id="pricing-heading"
                            eyebrow="Cost"
                            title="What Does RakshaAI Verified Cost?"
                            description="GSTIN is compliance. RakshaAI Verified is a voluntary trust signal built to reduce hesitation."
                        />
                        <div className="grid gap-4 md:grid-cols-3">
                            {[
                                ["Monthly", "Rs. 299/month", "Good for starting sellers testing trust badge impact."],
                                ["Quarterly", "Rs. 799/quarter", "Lower monthly equivalent with a longer trust window."],
                                ["Annual", "Rs. 2,999/year", "Works out to about Rs. 250/month."],
                            ].map(([name, price, text]) => (
                                <div key={name} className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900">
                                    <h3 className="text-lg font-extrabold text-gray-950 dark:text-white">{name}</h3>
                                    <p className="mt-2 text-2xl font-black text-emerald-700 dark:text-emerald-300">{price}</p>
                                    <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{text}</p>
                                </div>
                            ))}
                        </div>
                        <InfoNote icon={CheckCircle2}>
                            The annual plan works out to about Rs. 250/month. All plans include source checks, Trust Certificate PDF, badge files, embed code, directory listing and renewal workflow.
                        </InfoNote>
                    </section>

                    <section aria-labelledby="example-heading">
                        <SectionHeader
                            id="example-heading"
                            eyebrow="Example"
                            title="Same Business, With and Without RakshaAI Verified"
                            description="Consider two identical sole proprietors selling handmade jewellery on Instagram."
                        />
                        <Table headers={["Factor", "Seller A - GSTIN Only", "Seller B - GSTIN + RakshaAI Verified"]} rows={sideBySideRows} />
                    </section>

                    <section>
                        <div className="rounded-lg bg-emerald-700 p-8 text-center text-white">
                            <Link2 className="mx-auto mb-4 h-10 w-10 text-emerald-100" />
                            <h2 className="text-2xl font-extrabold">Ready to Add 4 More Layers of Trust Beyond Your GSTIN?</h2>
                            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-emerald-50">
                                Start with your GSTIN, then add Aadhaar, PAN, bank account, MCA where applicable and RakshaAI fraud screening.
                            </p>
                            <Link href="/trust-certification/apply/" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-bold text-emerald-700 hover:bg-emerald-50">
                                Apply for RakshaAI Verified <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </section>

                    <section aria-labelledby="faq-heading">
                        <SectionHeader
                            id="faq-heading"
                            eyebrow="FAQ"
                            title="Frequently Asked Questions"
                            description="Common questions about GSTIN-only trust, RakshaAI Verified and when businesses need more than GST registration."
                        />
                        <div className="mx-auto grid max-w-4xl gap-4">
                            {faqs.map(({ q, a }) => (
                                <div key={q} className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                                    <h3 className="font-extrabold text-gray-950 dark:text-white">Q: {q}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">A: {a}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section aria-labelledby="related-heading">
                        <SectionHeader
                            id="related-heading"
                            eyebrow="Related"
                            title="Related Comparisons and Resources"
                            description="Continue from the comparison into the application flow, technical standards and verified business directory."
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
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-300">{eyebrow}</p>
            <h2 id={id} className="mt-2 text-3xl font-extrabold text-gray-950 dark:text-white">{title}</h2>
            <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-400">{description}</p>
        </div>
    );
}

function Table({
    headers,
    rows,
    id,
}: {
    headers: string[];
    rows: string[][];
    id?: string;
}) {
    return (
        <div id={id} className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm dark:border-gray-800">
            <table className="min-w-[840px] w-full text-sm">
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
                                <td key={`${row[0]}-${index}`} className={`px-5 py-4 ${index === 0 ? "font-extrabold text-emerald-700 dark:text-emerald-300" : "text-gray-600 dark:text-gray-400"}`}>
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
