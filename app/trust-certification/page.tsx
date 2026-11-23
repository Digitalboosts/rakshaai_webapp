import type { Metadata } from "next";
import Link from "next/link";
import DefaultLayout from "@/components/DefaultLayout";
import ReportScamButton from "@/components/ReportScamButton";
import { faqPageSchema, jsonLd } from "@/lib/seo/schema";
import {
    AlertTriangle,
    ArrowRight,
    BadgeCheck,
    CheckCircle2,
    ChevronRight,
    CreditCard,
    FileText,
    Fingerprint,
    Globe,
    Landmark,
    Link2,
    Lock,
    Search,
    Shield,
    Star,
    TrendingUp,
} from "lucide-react";

const canonicalUrl = "https://www.rakshaai.co/trust-certification/";

export const metadata: Metadata = {
    title: {
        absolute: "RakshaAI Verified - GST, Aadhaar & PAN Business Verification India",
    },
    description:
        "Get your business verified across 5 Govt. databases - GST, Aadhaar KYC, PAN, Bank Account & MCA. India's trusted business badge. From ₹299/month. 100% online. Badge in 2–3 days.",
    alternates: {
        canonical: canonicalUrl,
    },
    robots: {
        index: true,
        follow: true,
        "max-snippet": -1,
    },
    openGraph: {
        title: "RakshaAI Verified - GST, Aadhaar & PAN Business Verification India",
        description:
            "Get your business verified across GST, Aadhaar KYC, PAN, Bank Account and MCA. India's trusted business badge from ₹299/month.",
        url: canonicalUrl,
        type: "website",
        siteName: "RakshaAI",
        images: [
            {
                url: "/opengraph-image",
                width: 1200,
                height: 630,
                alt: "RakshaAI Verified - GST, Aadhaar and PAN business verification India",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "RakshaAI Verified - GST, Aadhaar & PAN Business Verification India",
        description:
            "Get your business verified across 5 Govt. databases. From ₹299/month. Badge in 2–3 days.",
        images: ["/opengraph-image"],
    },
    other: {
        "geo.region": "IN",
        language: "en-IN",
    },
};

const faqs = [
    {
        q: "Is RakshaAI Verified a government certification?",
        a: "RakshaAI Verified is a private trust badge, not a government approval. It certifies that RakshaAI has verified your business documents against official government portals. We never call it a government certification.",
    },
    {
        q: "What is the difference between ₹299/month, ₹799/quarter, and ₹2,999/year?",
        a: "All three plans include the same five government database checks. Monthly is ₹299/month, Quarterly is ₹799 for 3 months and saves about 11%, and Yearly is ₹2,999/year and saves about 16%.",
    },
    {
        q: "How long does verification take?",
        a: "Automated checks across GSTN, UIDAI, NSDL, RBI-regulated bank verification and MCA21 complete in about 60 seconds for most applications. Badge issuance takes 2–3 business days. Manual review, if triggered, usually completes within 24 hours.",
    },
    {
        q: "Can I use the badge on my WhatsApp Business profile?",
        a: "Yes. You receive PNG and SVG badge files for your WhatsApp Business profile, catalogue cover and status. You also get a public verification URL you can place in your profile or catalogue description.",
    },
    {
        q: "Can a sole proprietor apply?",
        a: "Yes. Sole proprietors with GSTIN, Aadhaar KYC, PAN and bank account verification are eligible. Since MCA does not apply to sole proprietors, they receive a 4/5 High Trust Score.",
    },
    {
        q: "What documents do I actually need?",
        a: "There are no document uploads. You enter registration numbers only: GSTIN, Aadhaar for OTP-based KYC, PAN, bank account number with IFSC, and CIN for Pvt Ltd, LLP or OPC entities.",
    },
    {
        q: "Is my Aadhaar safe with RakshaAI?",
        a: "Yes. Aadhaar is used only for UIDAI OTP-based eKYC. The Aadhaar number is never stored after verification; only the verification status and masked display value are retained, aligned with DPDP Act 2023 requirements.",
    },
    {
        q: "Can I display the badge on Amazon or Flipkart listings?",
        a: "You can use your badge and verification link on channels you own or control, including websites, social profiles, WhatsApp, email signatures and printed cards. Marketplace usage depends on each platform's policy.",
    },
    {
        q: "What if one of my verification checks fails?",
        a: "We email the exact failed check and reason. Common issues include inactive GSTIN, PAN name mismatch or bank holder name mismatch. You can reapply within 30 days at no charge, and unresolved rejections are eligible for refund review.",
    },
    {
        q: "Does the badge renew automatically?",
        a: "No. We send renewal reminders before expiry. Renewal re-verifies the business against current government portal data so the public badge reflects the latest status.",
    },
    {
        q: "How is RakshaAI Verified different from showing my GST certificate?",
        a: "A GST certificate is a raw document consumers may not know how to verify. RakshaAI checks the live source and turns those documents into a public, dated, clickable trust signal.",
    },
    {
        q: "How do I report a fake RakshaAI badge?",
        a: "Every genuine badge links to rakshaai.co/verify/[badge-id]. If that page does not confirm the badge, treat it as fake and report it to support@rakshaai.co or through RakshaAI's scam reporting flow.",
    },
];

const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "RakshaAI Verified Badge",
    url: canonicalUrl,
    brand: {
        "@type": "Brand",
        name: "RakshaAI",
    },
    offers: [
        {
            "@type": "Offer",
            price: "299",
            priceCurrency: "INR",
            name: "Monthly",
            availability: "https://schema.org/InStock",
        },
        {
            "@type": "Offer",
            price: "799",
            priceCurrency: "INR",
            name: "Quarterly",
            availability: "https://schema.org/InStock",
        },
        {
            "@type": "Offer",
            price: "2999",
            priceCurrency: "INR",
            name: "Yearly",
            availability: "https://schema.org/InStock",
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
            name: "Verify Business",
            item: canonicalUrl,
        },
    ],
};

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to get your RakshaAI Verified badge",
    description: "Four-step online process to apply, verify, receive and display a RakshaAI Verified business badge.",
    totalTime: "P3D",
    step: [
        {
            "@type": "HowToStep",
            name: "Submit your application",
            text: "Enter your GSTIN, Aadhaar, PAN, bank account details and CIN where applicable. No document uploads are required.",
            url: "https://www.rakshaai.co/trust-certification/apply/",
        },
        {
            "@type": "HowToStep",
            name: "RakshaAI verifies across five portals",
            text: "RakshaAI checks GSTN, UIDAI eKYC, PAN, bank account and MCA21 data against official or regulated sources.",
        },
        {
            "@type": "HowToStep",
            name: "Your badge is issued",
            text: "Verified businesses receive a trust certificate PDF, badge files, embed code and public verification URL.",
        },
        {
            "@type": "HowToStep",
            name: "Display your badge everywhere",
            text: "Use the badge on your website, checkout page, WhatsApp Business profile, Instagram bio, invoices and email signature.",
        },
    ],
};

const faqSchema = faqPageSchema(faqs.map((faq) => ({ question: faq.q, answer: faq.a })));

const heroStats = [
    { value: "5.7 Cr", label: "MSMEs in India" },
    { value: "5 Layers", label: "Govt. database checks" },
    { value: "₹22,845 Cr", label: "Fraud lost India 2024" },
    { value: "₹299/mo", label: "Starting plan" },
];

const badgeQualities = [
    { label: "Linked", detail: "Unique verification URL per badge", icon: Link2 },
    { label: "Dated", detail: "Exact date documents were verified", icon: FileText },
    { label: "Revocable", detail: "Removed after confirmed fraud", icon: Shield },
    { label: "Portable", detail: "Website, WhatsApp, Instagram, email and invoices", icon: Globe },
];

const comparisonRows = [
    {
        without: "Instagram and Facebook sellers losing customers to 'looks fake' comments",
        with: "Badge in bio builds instant credibility for social commerce buyers",
    },
    {
        without: "WhatsApp Business owners whose payment requests get ignored",
        with: "Badge on profile or catalogue cover gives buyers a verification link",
    },
    {
        without: "D2C brands where first-time buyers abandon checkout",
        with: "Badge near Pay Now can lift checkout confidence and conversions",
    },
    {
        without: "B2B vendors who cannot get corporate procurement approval",
        with: "Share one public verification link instead of sending document photocopies",
    },
    {
        without: "Small e-commerce sites competing with Flipkart and Amazon",
        with: "A trust signal that feels closer to the trust big platforms already have",
    },
    {
        without: "Freelancers asking for advance payments",
        with: "Badge on proposal and invoice reduces the 'can I trust this?' pause",
    },
];

const verificationLayers = [
    {
        layer: "Layer 1",
        title: "GST Registration (GSTN Portal)",
        icon: FileText,
        description:
            "We verify GSTIN status, business name match and return activity through the Goods and Services Tax Network source. A lapsed or fake GSTIN fails immediately.",
    },
    {
        layer: "Layer 2",
        title: "Aadhaar KYC via UIDAI eKYC",
        icon: Fingerprint,
        description:
            "OTP-based Aadhaar KYC confirms the owner or authorised signatory is a real, verified individual. Aadhaar numbers are not stored after verification.",
    },
    {
        layer: "Layer 3",
        title: "PAN Verification (NSDL + Income Tax)",
        icon: BadgeCheck,
        description:
            "PAN is checked for active status and entity match, helping confirm that GST, PAN and business ownership point to the same legal identity.",
    },
    {
        layer: "Layer 4",
        title: "Bank Account (Penny Drop)",
        icon: CreditCard,
        description:
            "A penny-drop check through the regulated banking network confirms the account is active and the holder name matches the verified business.",
    },
    {
        layer: "Layer 5",
        title: "MCA / Company Documents (MCA21)",
        icon: Landmark,
        description:
            "For Pvt Ltd, LLP and OPC entities, we verify CIN, active status, incorporation date and registered name through MCA21. Sole proprietors are exempt.",
    },
];

const processSteps = [
    {
        step: "1",
        title: "Submit Your Application (10 minutes)",
        description:
            "Enter your GSTIN, Aadhaar number for OTP KYC, PAN, bank account number, IFSC and CIN for Pvt Ltd, LLP or OPC entities. No document uploads.",
    },
    {
        step: "2",
        title: "RakshaAI Verifies Across 5 Portals",
        description:
            "The system checks GSTN, UIDAI eKYC, NSDL and Income Tax PAN data, bank account status and MCA21 records. Most automated checks finish in about 60 seconds.",
    },
    {
        step: "3",
        title: "Your Badge Is Issued (2–3 Business Days)",
        description:
            "Once approved, you receive your RakshaAI Trust Certificate PDF, badge PNG and SVG files, embed code and a public verification URL.",
    },
    {
        step: "4",
        title: "Display Your Badge Everywhere",
        description:
            "Place the badge on your website, checkout page, WhatsApp Business profile, Instagram bio, invoices and email signature. Every badge links back to verification.",
    },
];

const pricingPlans = [
    {
        name: "Monthly",
        price: "₹299",
        period: "/month",
        billing: "Billed every 30 days",
        note: "Cancel anytime",
        highlight: false,
    },
    {
        name: "Quarterly",
        price: "₹799",
        period: "/quarter",
        billing: "Billed every 3 months",
        note: "Save 11%",
        highlight: false,
    },
    {
        name: "Yearly",
        price: "₹2,999",
        period: "/year",
        billing: "Billed annually",
        note: "Best value - save 16%",
        highlight: true,
    },
];

const trustStats = [
    { stat: "45%", detail: "of Indian consumers have been scammed by a fake seller online (McAfee 2024)" },
    { stat: "60–70%", detail: "of MSMEs report losing customers due to trust issues (ICRIER 2025)" },
    { stat: "78%", detail: "of consumers say a trust badge makes them more likely to complete a purchase" },
    { stat: "2.3x", detail: "higher checkout abandonment risk from Tier 2 and Tier 3 buyers at unverified sellers" },
    { stat: "12–18%", detail: "reported conversion uplift after adding trust badges near checkout" },
    { stat: "₹22,845 Cr", detail: "reported fraud loss in India in 2024, creating suspicion toward unknown sellers" },
];

const consumerMeanings = [
    {
        type: "means",
        text: "RakshaAI has verified GST, Aadhaar KYC, PAN, bank account and MCA documents against official or regulated sources.",
    },
    {
        type: "means",
        text: "Documents were valid and active on the date shown on the badge.",
    },
    {
        type: "means",
        text: "The business has a real, traceable identity in India's official registries.",
    },
    {
        type: "means",
        text: "You can verify the badge by clicking it or visiting rakshaai.co/verify/[badge-id].",
    },
    {
        type: "warning",
        text: "The badge does not guarantee future conduct, product quality or that every transaction will go perfectly.",
    },
    {
        type: "warning",
        text: "The badge is private verification by RakshaAI. It is not a government approval.",
    },
];

const trustScoreRows = [
    {
        score: "5/5 Excellent",
        meaning: "All five checks passed: GST, Aadhaar KYC, PAN, Bank Account and MCA.",
        audience: "Pvt Ltd, LLP and OPC entities with current MCA compliance.",
    },
    {
        score: "4/5 High",
        meaning: "Four of five checks passed, with MCA not applicable or pending.",
        audience: "Sole proprietors and businesses where MCA is not applicable.",
    },
    {
        score: "Below 4/5",
        meaning: "One or more critical checks failed. Badge is not issued until resolved.",
        audience: "Inactive GSTIN, PAN mismatch, bank verification failure or unresolved compliance gaps.",
    },
];

const testimonials = [
    {
        quote:
            "After getting RakshaAI Verified, customers stopped asking 'are you genuine?' and just paid. My WhatsApp conversion doubled in 6 weeks. The 5-layer government check gives it far more credibility than any badge I could put on myself.",
        name: "Ramesh Agarwal",
        role: "Home Decor Seller, Pune",
    },
    {
        quote:
            "After displaying the badge on our checkout page, cart abandonment dropped noticeably. Customers can actually verify the badge is real, which makes the signal stronger.",
        name: "Priya Nair",
        role: "D2C Clothing Brand, Kochi",
    },
    {
        quote:
            "Corporate procurement teams always asked for our GST and MCA documents. Now I send them my RakshaAI verification link and they see all checks directly from the government source.",
        name: "Vikram Choudhary",
        role: "B2B Packaging Supplier, Ahmedabad",
    },
];

const relatedTools = [
    {
        name: "Website Safety Checker",
        description: "Check any website before entering payment details.",
        href: "/website-safety-checker/",
    },
    {
        name: "UPI ID Checker",
        description: "Verify any UPI ID before sending money.",
        href: "/upi-id-checker/",
    },
    {
        name: "Phone Number Checker",
        description: "Check if a number has fraud reports.",
        href: "/phone-number-checker/",
    },
    {
        name: "Report a Scam",
        description: "Report a fraudulent business, website or phone number.",
        href: "/got-scammed/",
    },
];

export default function TrustCertificationPage() {
    return (
        <DefaultLayout>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLd([productSchema, breadcrumbSchema, faqSchema, howToSchema]) }}
            />

            <main className="min-h-screen bg-white dark:bg-gray-950">
                <section className="border-b border-gray-200 bg-gradient-to-b from-emerald-50 via-white to-white px-4 pb-14 pt-16 dark:border-gray-800 dark:from-gray-900 dark:via-gray-950 dark:to-gray-950">
                    <div className="mx-auto max-w-6xl">
                        <div className="mx-auto max-w-4xl text-center">
                            <div className="mb-6 inline-flex items-center gap-2 rounded-lg border border-emerald-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-emerald-700 shadow-sm dark:border-emerald-900 dark:bg-gray-900 dark:text-emerald-300">
                                <BadgeCheck className="h-4 w-4" />
                                GST, Aadhaar &amp; PAN Verified
                            </div>

                            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-gray-950 dark:text-white sm:text-5xl">
                                RakshaAI Verified - India&apos;s Business Trust Badge
                            </h1>

                            <p className="mx-auto mb-5 max-w-3xl text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                                Every day, lakhs of Indian consumers hesitate before buying from an unknown online business. Every day, genuine sellers lose those customers - not because they are fraudulent, but because they cannot prove they are legitimate fast enough.
                            </p>
                            <p className="mx-auto mb-8 max-w-3xl text-base leading-relaxed text-gray-600 dark:text-gray-400">
                                RakshaAI Verified checks GST registration, Aadhaar KYC, PAN, bank account and MCA documents directly against official Government of India or regulated sources, then issues a verified business badge for your website, WhatsApp Business and Instagram. One badge. Unlimited trust.
                            </p>

                            <div className="mb-8 flex flex-col justify-center gap-3 sm:flex-row">
                                <Link
                                    href="/trust-certification/apply/"
                                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700"
                                >
                                    <Shield className="h-4 w-4" />
                                    Apply Now
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                                <Link
                                    href="/trust-certification/how-it-works/"
                                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-7 py-3.5 text-sm font-bold text-gray-800 transition hover:border-emerald-300 hover:text-emerald-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-emerald-700 dark:hover:text-emerald-300"
                                >
                                    See How It Works
                                    <ChevronRight className="h-4 w-4" />
                                </Link>
                            </div>

                            <p className="mb-10 text-sm font-medium text-gray-500 dark:text-gray-400">
                                GST · Aadhaar KYC · PAN · Bank Account · MCA | From ₹299/month | 100% online | Badge in 2–3 days
                            </p>
                        </div>

                        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
                            {heroStats.map(({ value, label }) => (
                                <div
                                    key={label}
                                    className="rounded-lg border border-gray-200 bg-white p-5 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900"
                                >
                                    <p className="text-2xl font-extrabold text-emerald-700 dark:text-emerald-300">{value}</p>
                                    <p className="mt-1 text-xs font-medium leading-tight text-gray-500 dark:text-gray-400">{label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="mx-auto max-w-6xl space-y-20 px-4 py-16 sm:px-6 lg:px-8">
                    <section aria-labelledby="what-is-heading">
                        <div className="mx-auto mb-10 max-w-3xl text-center">
                            <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">About the Badge</p>
                            <h2 id="what-is-heading" className="mt-2 text-3xl font-extrabold text-gray-950 dark:text-white">
                                What Is the RakshaAI Verified Business Badge?
                            </h2>
                            <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-400">
                                The RakshaAI Verified badge is a private trust badge issued after we verify your business documents against five official or regulated databases. It is not a government approval - it is a public declaration that your documents were checked from the original source and matched.
                            </p>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-900 dark:bg-emerald-950/20">
                                <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                                    Think of it like the verified tick on a social media profile. It does not guarantee every transaction, but it gives customers the confidence to pay in the first place. Your badge links to{" "}
                                    <span className="font-mono text-sm font-semibold text-emerald-700 dark:text-emerald-300">rakshaai.co/verify/[your-id]</span>.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                {badgeQualities.map(({ label, detail, icon: Icon }) => (
                                    <div key={label} className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                                        <Icon className="mb-3 h-5 w-5 text-emerald-600 dark:text-emerald-300" />
                                        <p className="font-bold text-gray-900 dark:text-white">{label}</p>
                                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{detail}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section aria-labelledby="who-needs-heading">
                        <div className="mx-auto mb-10 max-w-3xl text-center">
                            <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Who It Helps</p>
                            <h2 id="who-needs-heading" className="mt-2 text-3xl font-extrabold text-gray-950 dark:text-white">
                                Who Needs a RakshaAI Verified Badge?
                            </h2>
                            <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-400">
                                India has 5.7 crore MSMEs. Most now sell through websites, Instagram shops, WhatsApp catalogues and marketplaces. Small business verification fills the gap between a genuine seller and a cautious buyer.
                            </p>
                        </div>

                        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm dark:border-gray-800">
                            <table className="min-w-[720px] w-full text-sm">
                                <thead>
                                    <tr className="bg-gray-50 dark:bg-gray-900">
                                        <th className="w-1/2 px-5 py-4 text-left font-bold text-red-600 dark:text-red-400">WITHOUT Verified Badge</th>
                                        <th className="w-1/2 px-5 py-4 text-left font-bold text-emerald-700 dark:text-emerald-300">WITH RakshaAI Verified Badge</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                                    {comparisonRows.map((row) => (
                                        <tr key={row.without} className="bg-white dark:bg-gray-950">
                                            <td className="px-5 py-4 text-gray-600 dark:text-gray-400">
                                                <span className="flex gap-2">
                                                    <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-400" />
                                                    {row.without}
                                                </span>
                                            </td>
                                            <td className="px-5 py-4 text-gray-700 dark:text-gray-300">
                                                <span className="flex gap-2">
                                                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
                                                    {row.with}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section aria-labelledby="verify-heading">
                        <div className="mx-auto mb-10 max-w-3xl text-center">
                            <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Verification Engine</p>
                            <h2 id="verify-heading" className="mt-2 text-3xl font-extrabold text-gray-950 dark:text-white">
                                What RakshaAI Actually Verifies - 5 Government Database Checks
                            </h2>
                            <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-400">
                                Every application goes through a five-layer verification engine. We check from official government sources or regulated financial rails so the badge is based on live verification, not self-declared claims.
                            </p>
                        </div>

                        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
                            {verificationLayers.map(({ layer, title, icon: Icon, description }) => (
                                <div key={title} className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600 text-white">
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <p className="text-xs font-black uppercase tracking-wide text-emerald-600 dark:text-emerald-400">{layer}</p>
                                    <h3 className="mt-1 text-sm font-extrabold leading-snug text-gray-950 dark:text-white">{title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{description}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 grid gap-3 md:grid-cols-3">
                            <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950/20">
                                <p className="text-sm leading-relaxed text-amber-900 dark:text-amber-200">
                                    No document uploads. You enter registration numbers only, and RakshaAI verifies from the source.
                                </p>
                            </div>
                            <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950/20">
                                <p className="text-sm leading-relaxed text-amber-900 dark:text-amber-200">
                                    Verification status is stored. Aadhaar number is never stored after verification.
                                </p>
                            </div>
                            <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950/20">
                                <p className="text-sm leading-relaxed text-amber-900 dark:text-amber-200">
                                    Full verification standards are available in our{" "}
                                    <Link href="/trust-certification/verification-standards/" className="font-bold text-amber-950 underline underline-offset-2 dark:text-amber-100">
                                        technical transparency page
                                    </Link>.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section aria-labelledby="process-heading">
                        <div className="mx-auto mb-10 max-w-3xl text-center">
                            <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">How It Works</p>
                            <h2 id="process-heading" className="mt-2 text-3xl font-extrabold text-gray-950 dark:text-white">
                                How to Get Your RakshaAI Verified Badge - 4 Steps
                            </h2>
                            <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-400">
                                The process is fully online, built for business owners who need a live trust signal without couriering documents or waiting through offline paperwork.
                            </p>
                        </div>

                        <div className="grid gap-5 md:grid-cols-2">
                            {processSteps.map(({ step, title, description }) => (
                                <div key={step} className="flex gap-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-600 text-sm font-extrabold text-white">{step}</div>
                                    <div>
                                        <h3 className="text-sm font-extrabold text-gray-950 dark:text-white">{title}</h3>
                                        <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-6 dark:border-blue-900 dark:bg-blue-950/20">
                            <h3 className="font-extrabold text-gray-950 dark:text-white">Where to display for maximum impact</h3>
                            <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                                Add the badge to your homepage header or footer, checkout page near Pay Now, WhatsApp Business profile or catalogue cover, Instagram bio, invoices and email signature. Checkout placement is where businesses commonly report the strongest 12–18% conversion uplift.
                            </p>
                            <div className="mt-4 flex flex-wrap gap-4">
                                <Link href="/trust-certification/how-it-works/" className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:underline dark:text-blue-300">
                                    See the full verification process <ChevronRight className="h-4 w-4" />
                                </Link>
                                <Link href="/trust-certification/badge-guide/" className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:underline dark:text-blue-300">
                                    Badge display guide <ChevronRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </section>

                    <section aria-labelledby="pricing-heading">
                        <div className="mx-auto mb-10 max-w-3xl text-center">
                            <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Pricing</p>
                            <h2 id="pricing-heading" className="mt-2 text-3xl font-extrabold text-gray-950 dark:text-white">
                                Pricing - Choose the Plan That Fits Your Business
                            </h2>
                            <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-400">
                                All three RakshaAI Verified plans include the same five government database checks. The plan only changes your billing cycle and per-month cost.
                            </p>
                        </div>

                        <div className="grid gap-5 md:grid-cols-3">
                            {pricingPlans.map(({ name, price, period, billing, note, highlight }) => (
                                <div
                                    key={name}
                                    className={`relative rounded-lg border p-6 shadow-sm ${highlight
                                        ? "border-emerald-500 bg-emerald-600 text-white"
                                        : "border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900"
                                        }`}
                                >
                                    {highlight && (
                                        <span className="absolute right-4 top-4 rounded-lg bg-amber-300 px-3 py-1 text-xs font-black uppercase tracking-wide text-amber-950">
                                            Recommended
                                        </span>
                                    )}
                                    <p className={`text-xs font-black uppercase tracking-widest ${highlight ? "text-emerald-100" : "text-emerald-600 dark:text-emerald-400"}`}>
                                        {name}
                                    </p>
                                    <div className="mt-4 flex items-end gap-1">
                                        <span className={`text-4xl font-extrabold ${highlight ? "text-white" : "text-gray-950 dark:text-white"}`}>{price}</span>
                                        <span className={`pb-1 text-sm ${highlight ? "text-emerald-100" : "text-gray-500 dark:text-gray-400"}`}>{period}</span>
                                    </div>
                                    <p className={`mt-4 text-sm font-semibold ${highlight ? "text-emerald-50" : "text-gray-700 dark:text-gray-300"}`}>{billing}</p>
                                    <p className={`mt-1 text-sm ${highlight ? "text-emerald-100" : "text-gray-500 dark:text-gray-400"}`}>{note}</p>
                                    <Link
                                        href="/trust-certification/apply/"
                                        className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-bold transition ${highlight
                                            ? "bg-white text-emerald-700 hover:bg-emerald-50"
                                            : "border border-emerald-600 text-emerald-700 hover:bg-emerald-50 dark:text-emerald-300 dark:hover:bg-emerald-950/30"
                                            }`}
                                    >
                                        Get Started <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </div>
                            ))}
                        </div>

                        <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                            All plans include a RakshaAI Trust Certificate PDF, badge PNG and SVG files, embed code, listing in the verified business directory and a public verification page. The annual plan works out to under ₹250/month.
                        </p>
                    </section>

                    <section aria-labelledby="directory-heading" className="rounded-lg border border-gray-200 bg-gray-50 p-8 text-center dark:border-gray-800 dark:bg-gray-900">
                        <Search className="mx-auto mb-4 h-8 w-8 text-emerald-600 dark:text-emerald-300" />
                        <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Verified Directory</p>
                        <h2 id="directory-heading" className="mt-2 text-3xl font-extrabold text-gray-950 dark:text-white">
                            Browse Verified Businesses - India&apos;s First Trusted Business Directory
                        </h2>
                        <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-gray-600 dark:text-gray-400">
                            Every RakshaAI Verified business gets a free public profile showing business name, verification date, Trust Score, checked layers, website link and verification URL. Profiles are auto-updated on renewal.
                        </p>
                        <Link href="/trust-certification/verified-businesses/" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-700">
                            Browse Verified Businesses <ArrowRight className="h-4 w-4" />
                        </Link>
                    </section>

                    <section aria-labelledby="trust-problem-heading">
                        <div className="mx-auto mb-10 max-w-3xl text-center">
                            <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">The Trust Problem</p>
                            <h2 id="trust-problem-heading" className="mt-2 text-3xl font-extrabold text-gray-950 dark:text-white">
                                Why Indian Businesses Lose Customers Without a Trust Badge
                            </h2>
                            <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-400">
                                The trust problem is not about product quality or pricing. It is the moment a first-time buyer asks: &ldquo;But can I trust them?&rdquo;
                            </p>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {trustStats.map(({ stat, detail }) => (
                                <div key={stat} className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
                                    <p className="text-3xl font-extrabold text-emerald-700 dark:text-emerald-300">{stat}</p>
                                    <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{detail}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 rounded-lg border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-900 dark:bg-emerald-950/20">
                            <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                                Amazon, Flipkart and Meesho have built-in trust because the platform itself is the trust signal. When you sell direct on your own site or WhatsApp, you need an equivalent. RakshaAI Verified fills that gap for legitimate Indian businesses.
                            </p>
                        </div>
                    </section>

                    <section aria-labelledby="consumer-heading" className="rounded-lg border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-950/20">
                        <div className="mx-auto max-w-4xl">
                            <p className="text-xs font-bold uppercase tracking-widest text-blue-700 dark:text-blue-300">For Consumers</p>
                            <h2 id="consumer-heading" className="mt-2 text-3xl font-extrabold text-gray-950 dark:text-white">
                                What the RakshaAI Verified Badge Tells You
                            </h2>
                            <div className="mt-6 grid gap-3 md:grid-cols-2">
                                {consumerMeanings.map(({ type, text }) => (
                                    <div
                                        key={text}
                                        className={`rounded-lg border p-4 ${type === "means"
                                            ? "border-emerald-200 bg-white dark:border-emerald-900 dark:bg-gray-900"
                                            : "border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/20"
                                            }`}
                                    >
                                        <div className="flex gap-3">
                                            {type === "means" ? (
                                                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600 dark:text-emerald-300" />
                                            ) : (
                                                <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-600 dark:text-amber-300" />
                                            )}
                                            <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">{text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                                <Link href="/trust-certification/for-consumers/" className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-5 py-3 text-sm font-bold text-white hover:bg-blue-800">
                                    Consumer Guide <ChevronRight className="h-4 w-4" />
                                </Link>
                                <ReportScamButton className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-red-300 bg-white px-5 py-3 text-sm font-bold text-red-700 hover:bg-red-50 dark:border-red-800 dark:bg-gray-900 dark:text-red-300 dark:hover:bg-red-950/30">
                                    Report a Fraudulent Business
                                </ReportScamButton>
                            </div>
                        </div>
                    </section>

                    <section aria-labelledby="trust-score-heading">
                        <div className="mx-auto mb-10 max-w-3xl text-center">
                            <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Trust Score</p>
                            <h2 id="trust-score-heading" className="mt-2 text-3xl font-extrabold text-gray-950 dark:text-white">
                                Your Trust Score - What 4/5 and 5/5 Mean
                            </h2>
                            <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-400">
                                Your Trust Score shows how many verification layers passed. It appears on your public profile and badge.
                            </p>
                        </div>

                        <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800">
                            <table className="min-w-[760px] w-full text-sm">
                                <thead>
                                    <tr className="bg-gray-50 dark:bg-gray-900">
                                        <th className="px-5 py-4 text-left font-bold text-gray-900 dark:text-white">Trust Score</th>
                                        <th className="px-5 py-4 text-left font-bold text-gray-900 dark:text-white">What It Means</th>
                                        <th className="px-5 py-4 text-left font-bold text-gray-900 dark:text-white">Who Gets It</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                                    {trustScoreRows.map((row) => (
                                        <tr key={row.score} className="bg-white dark:bg-gray-950">
                                            <td className="px-5 py-4 font-extrabold text-emerald-700 dark:text-emerald-300">{row.score}</td>
                                            <td className="px-5 py-4 text-gray-600 dark:text-gray-400">{row.meaning}</td>
                                            <td className="px-5 py-4 text-gray-600 dark:text-gray-400">{row.audience}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section aria-labelledby="testimonials-heading">
                        <div className="mx-auto mb-10 max-w-3xl text-center">
                            <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Verified Business Owners</p>
                            <h2 id="testimonials-heading" className="mt-2 text-3xl font-extrabold text-gray-950 dark:text-white">
                                What Verified Business Owners Say
                            </h2>
                        </div>

                        <div className="grid gap-5 md:grid-cols-3">
                            {testimonials.map(({ quote, name, role }) => (
                                <div key={name} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                                    <div className="mb-4 flex gap-1">
                                        {[...Array(5)].map((_, index) => (
                                            <Star key={index} className="h-4 w-4 fill-amber-400 text-amber-400" />
                                        ))}
                                    </div>
                                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">&ldquo;{quote}&rdquo;</p>
                                    <div className="mt-5 border-t border-gray-100 pt-4 dark:border-gray-800">
                                        <p className="font-bold text-gray-950 dark:text-white">{name}</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section aria-labelledby="faq-heading">
                        <div className="mx-auto mb-10 max-w-3xl text-center">
                            <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">FAQ</p>
                            <h2 id="faq-heading" className="mt-2 text-3xl font-extrabold text-gray-950 dark:text-white">
                                Frequently Asked Questions About RakshaAI Verified
                            </h2>
                        </div>

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
                                Full FAQ <ChevronRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </section>

                    <section aria-labelledby="tools-heading">
                        <div className="mx-auto mb-8 max-w-3xl text-center">
                            <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Free Safety Tools</p>
                            <h2 id="tools-heading" className="mt-2 text-3xl font-extrabold text-gray-950 dark:text-white">
                                Related Free Safety Tools - For Consumers
                            </h2>
                            <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-400">
                                RakshaAI Verified helps businesses prove legitimacy. Our free tools help consumers check any website, UPI ID or phone number before they transact.
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            {relatedTools.map(({ name, description, href }) => (
                                <Link
                                    key={name}
                                    href={href}
                                    className="group rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition hover:border-emerald-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-emerald-800"
                                >
                                    <p className="font-extrabold text-gray-950 transition group-hover:text-emerald-700 dark:text-white dark:group-hover:text-emerald-300">{name}</p>
                                    <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">{description}</p>
                                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-emerald-700 dark:text-emerald-300">
                                        Open tool <ArrowRight className="h-4 w-4" />
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </section>

                    <section>
                        <div className="grid gap-5 md:grid-cols-2">
                            <div className="rounded-lg bg-emerald-700 p-8 text-center text-white">
                                <Lock className="mx-auto mb-4 h-8 w-8 text-emerald-100" />
                                <h2 className="text-2xl font-extrabold">Get RakshaAI Verified - From ₹299/month</h2>
                                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-emerald-50">
                                    Join India&apos;s first trusted business verification programme. Badge ready in 2–3 business days with 5-layer government verification.
                                </p>
                                <Link href="/trust-certification/apply/" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-bold text-emerald-700 hover:bg-emerald-50">
                                    Apply Now <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>

                            <div className="rounded-lg border border-red-200 bg-red-50 p-8 text-center dark:border-red-900 dark:bg-red-950/20">
                                <TrendingUp className="mx-auto mb-4 h-8 w-8 text-red-600 dark:text-red-300" />
                                <h2 className="text-2xl font-extrabold text-gray-950 dark:text-white">Spotted a Fraudulent Business?</h2>
                                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                                    Report it to RakshaAI and help protect other Indians from scams. We investigate verified badge abuse and revoke badges on confirmed fraud.
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
