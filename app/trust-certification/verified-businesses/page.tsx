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
    Building2,
    CheckCircle2,
    ChevronRight,
    Filter,
    MapPin,
    Search,
    Shield,
    ShieldCheck,
    Star,
    Store,
} from "lucide-react";

const canonicalUrl = "https://www.rakshaai.co/trust-certification/verified-businesses/";

export const metadata: Metadata = {
    title: {
        absolute: "RakshaAI Verified Businesses - India's Trusted Business Directory",
    },
    description:
        "Browse India's verified business directory. Every listing has passed 5 Govt. database checks - GST, Aadhaar, PAN, Bank Account & MCA. Free to search. Check any business in seconds.",
    alternates: {
        canonical: canonicalUrl,
    },
    robots: {
        index: true,
        follow: true,
        "max-snippet": -1,
    },
    openGraph: {
        title: "RakshaAI Verified Businesses - India's Trusted Business Directory",
        description:
            "Search India's verified business directory. Every RakshaAI listing shows Trust Score, verification date and government checks confirmed.",
        url: canonicalUrl,
        type: "website",
        siteName: "RakshaAI",
        images: [
            {
                url: "/opengraph-image",
                width: 1200,
                height: 630,
                alt: "RakshaAI Verified Businesses Directory",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "RakshaAI Verified Businesses Directory",
        description:
            "Browse verified Indian businesses with GST, Aadhaar, PAN, bank and MCA checks.",
        images: ["/opengraph-image"],
    },
    other: {
        "geo.region": "IN",
        language: "en-IN",
    },
};

type DirectorySearchParams = {
    q?: string | string[];
    category?: string | string[];
    city?: string | string[];
    score?: string | string[];
};

type PageProps = {
    searchParams?: Promise<DirectorySearchParams>;
};

const listings = [
    {
        name: "Sharma Handicrafts",
        slug: "sharma-handicrafts",
        businessType: "Sole Proprietor",
        category: "Retail",
        city: "Pune",
        state: "Maharashtra",
        score: "5/5",
        scoreLabel: "Excellent",
        checks: 5,
        verifiedDate: "April 2026",
        isNew: true,
        description: "Retail / Home Decor · Pune",
    },
    {
        name: "TrendKart Online",
        slug: "trendkart-online",
        businessType: "Pvt Ltd",
        category: "E-commerce & D2C",
        city: "Mumbai",
        state: "Maharashtra",
        score: "5/5",
        scoreLabel: "Excellent",
        checks: 5,
        verifiedDate: "April 2026",
        isNew: true,
        description: "E-commerce / Fashion · Mumbai",
    },
    {
        name: "BuildRight Contractors",
        slug: "buildright-contractors",
        businessType: "Partnership Firm",
        category: "Services",
        city: "Delhi",
        state: "Delhi",
        score: "4/5",
        scoreLabel: "High",
        checks: 4,
        verifiedDate: "March 2026",
        isNew: false,
        description: "Services / Construction · Delhi",
    },
    {
        name: "Priya's Kitchen",
        slug: "priyas-kitchen",
        businessType: "Sole Proprietor",
        category: "Food & Hospitality",
        city: "Bangalore",
        state: "Karnataka",
        score: "4/5",
        scoreLabel: "High",
        checks: 4,
        verifiedDate: "April 2026",
        isNew: false,
        description: "Food / Cloud Kitchen · Bangalore",
    },
];

const faqs = [
    {
        q: "Are all businesses in this directory safe to buy from?",
        a: "Every business in this directory has passed RakshaAI's government-source verification checks and had valid documents on the verification date shown. This is a strong legitimacy signal, but it does not guarantee every transaction. Always click the badge or listing to confirm current status.",
    },
    {
        q: "How do I check if a specific business is verified?",
        a: "Search the business name in this directory, click the RakshaAI badge on the business website, or visit rakshaai.co/verify/[badge-id] directly. A genuine badge opens a live verification page.",
    },
    {
        q: "What does the Trust Score mean?",
        a: "5/5 Excellent means all five checks passed: GST, Aadhaar KYC, PAN, bank account and MCA. 4/5 High means all applicable checks passed, with MCA not applicable for business types such as sole proprietors.",
    },
    {
        q: "How do I find verified businesses in my city?",
        a: "Use the City filter and combine it with category or Trust Score filters. The directory is designed for city-level searches across major Indian business markets.",
    },
    {
        q: "Is this directory free to search?",
        a: "Yes. The directory is free for consumers to search, browse and verify. Businesses pay for RakshaAI Verified plans to get listed after checks pass.",
    },
    {
        q: "How do I get my business listed in this directory?",
        a: "Apply for the RakshaAI Verified badge. Directory listing is included automatically with every plan once your badge is issued.",
    },
    {
        q: "What if I find a fake RakshaAI badge?",
        a: "If a badge does not open a valid rakshaai.co/verify/[id] page, treat it as fake and report it to RakshaAI. If you already paid money, also report at cybercrime.gov.in or call 1930 quickly.",
    },
    {
        q: "Can I use this directory to verify an Amazon or Flipkart seller?",
        a: "If the seller has applied for RakshaAI Verified, they can appear here. This directory is especially useful for sellers operating through their own website, WhatsApp or Instagram.",
    },
    {
        q: "How often is the directory updated?",
        a: "The directory is designed to update when new businesses are approved and when plans expire or renew. Expired businesses are removed or marked expired.",
    },
    {
        q: "What is the difference between this directory and the Website Safety Checker?",
        a: "This directory lists only businesses that actively applied and passed RakshaAI verification. The Website Safety Checker checks any website against safety and fraud signals, even if it is not RakshaAI Verified.",
    },
];

const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "RakshaAI Verified Businesses Directory",
    url: canonicalUrl,
    description:
        "Directory of Indian businesses verified by RakshaAI across GST, Aadhaar KYC, PAN, bank account and MCA checks.",
    potentialAction: {
        "@type": "SearchAction",
        target: "https://www.rakshaai.co/trust-certification/verified-businesses/?q={query}",
        "query-input": "required name=query",
    },
    mainEntity: {
        "@type": "ItemList",
        name: "RakshaAI Verified Businesses Directory",
        numberOfItems: listings.length,
        itemListElement: listings.map((business, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: business.name,
            url: `${canonicalUrl}#${business.slug}`,
        })),
    },
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
            name: "Verified Businesses",
            item: canonicalUrl,
        },
    ],
};

const faqSchema = faqPageSchema(faqs.map((faq) => ({ question: faq.q, answer: faq.a })));

const heroStats = [
    { value: "1,000+", label: "Verified businesses" },
    { value: "5 Layers", label: "Govt. checks per listing" },
    { value: "Free", label: "To search and verify" },
    { value: "₹299/mo", label: "To get listed" },
];

const verificationRows = [
    ["GST", "GSTIN active, business name matches, returns filed within required period", "GSTN Portal", "GST"],
    ["Aadhaar", "Business owner identity confirmed via Aadhaar eKYC OTP", "UIDAI eKYC", "Aadhaar"],
    ["PAN", "PAN valid, active, linked to correct owner or entity name", "NSDL + IT Dept", "PAN"],
    ["Bank", "Bank account active, holder name matches business registration name", "RBI Network", "Bank"],
    ["MCA", "Company active, CIN valid, incorporation confirmed for Pvt Ltd, LLP and OPC", "MCA21 Portal", "MCA / N/A"],
];

const checkMethods = [
    ["Search this directory", "Type business name in the search bar and open their profile", "< 10 seconds", "Trust Score, checks and verification date"],
    ["Click their badge", "If a business displays a RakshaAI badge on its site, click it", "< 5 seconds", "Live verification page"],
    ["Direct URL check", "Visit rakshaai.co/verify/[badge-id] from the badge ID", "< 5 seconds", "Verification status and business details"],
];

const trustStats = [
    "45% of Indian consumers have been scammed by a fake seller online",
    "78% say a trust badge makes them more likely to complete a purchase",
    "Tier 2 and Tier 3 buyers are 2.3x more likely to abandon checkout at an unverified seller",
    "₹22,845 crore total cyber fraud loss in India in 2024",
    "15+ lakh complaints filed on cybercrime.gov.in in 2025",
];

const businessTypeRows = [
    ["Sole Proprietor / Informal Seller", "GSTIN + Aadhaar + PAN + Bank Account verified. Trust Score: 4/5 High. MCA not required."],
    ["D2C Brand / Instagram Shop", "Same as sole proprietor if no formal company registration. Social or seller page accepted as website."],
    ["Pvt Ltd / LLP / OPC", "All 5 checks including MCA21 CIN verification. Trust Score: 5/5 Excellent if MCA is current."],
    ["Partnership Firm", "GSTIN + Aadhaar for partners + PAN + Bank. Trust Score: 4/5 High. MCA not applicable."],
    ["MSME / India MSME", "Any MSME with active GSTIN qualifies. Udyam registration is not required."],
];

const displayRows = [
    ["Website", "Embed code in header, footer or checkout. Badge links to directory or verification profile."],
    ["WhatsApp Business", "Badge image in profile or catalogue. Verification URL in business description."],
    ["Instagram / Facebook", "Verification URL in bio, Verified by RakshaAI text, and pinned verification post."],
    ["Meesho / Marketplaces", "Verification URL in seller bio where marketplace policy allows."],
    ["Email Signature", "Badge below name and designation, linked to the verification URL."],
    ["Amazon India", "Verification URL in seller profile or description where platform policy allows."],
];

const privacyRows = [
    ["Business name", "GSTIN number itself"],
    ["Business type", "Aadhaar number"],
    ["City and state", "PAN number"],
    ["Primary business category", "Bank account number"],
    ["Trust Score", "MCA/CIN document details"],
    ["Which checks passed", "Financial information"],
    ["Verification date", "Business owner personal contact details"],
    ["Website URL if provided", "Any data not needed for badge display"],
];

const relatedTools = [
    { name: "Website Safety Checker", href: "/website-safety-checker/", text: "Check any business website for scams." },
    { name: "UPI ID Checker", href: "/upi-id-checker/", text: "Verify a seller's UPI ID before paying." },
    { name: "Phone Number Checker", href: "/phone-number-checker/", text: "Check if a phone number has fraud reports." },
    { name: "Apply for Verification", href: "/trust-certification/apply/", text: "Get your business listed in this directory." },
    { name: "Report a Fake Business", href: "/got-scammed/", text: "Report fraud to RakshaAI and warn others." },
];

function getParam(value: string | string[] | undefined) {
    return Array.isArray(value) ? value[0] ?? "" : value ?? "";
}

export default async function VerifiedBusinessesPage({ searchParams }: PageProps) {
    const params = searchParams ? await searchParams : {};
    const query = getParam(params.q).trim();
    const category = getParam(params.category);
    const city = getParam(params.city);
    const score = getParam(params.score);

    const filteredListings = listings.filter((business) => {
        const text = `${business.name} ${business.city} ${business.state} ${business.category} ${business.businessType}`.toLowerCase();
        const matchesQuery = !query || text.includes(query.toLowerCase());
        const matchesCategory = !category || category === "all" || business.category === category;
        const matchesCity = !city || city === "all" || business.city === city;
        const matchesScore = !score || score === "all" || business.score === score;
        return matchesQuery && matchesCategory && matchesCity && matchesScore;
    });

    return (
        <DefaultLayout>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLd([collectionSchema, breadcrumbSchema, faqSchema]) }}
            />

            <main className="min-h-screen bg-white dark:bg-gray-950">
                <section className="border-b border-gray-200 bg-gradient-to-b from-indigo-50 via-white to-white px-4 pb-14 pt-16 dark:border-gray-800 dark:from-gray-900 dark:via-gray-950 dark:to-gray-950">
                    <div className="mx-auto max-w-6xl">
                        <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                            <Link href="/" className="hover:text-indigo-700 dark:hover:text-indigo-300">Home</Link>
                            <ChevronRight className="h-4 w-4" />
                            <Link href="/trust-certification/" className="hover:text-indigo-700 dark:hover:text-indigo-300">Trust Certification</Link>
                            <ChevronRight className="h-4 w-4" />
                            <span className="font-semibold text-gray-800 dark:text-gray-200">Verified Businesses</span>
                        </nav>

                        <div className="mx-auto max-w-4xl text-center">
                            <div className="mb-6 inline-flex items-center gap-2 rounded-lg border border-indigo-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-indigo-700 shadow-sm dark:border-indigo-900 dark:bg-gray-900 dark:text-indigo-300">
                                <ShieldCheck className="h-4 w-4" />
                                India&apos;s Trusted Business Directory
                            </div>
                            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-950 dark:text-white sm:text-5xl">
                                RakshaAI Verified Businesses - India&apos;s Trusted Business Directory
                            </h1>
                            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                                Browse businesses that have been verified across official Government of India or regulated sources: GST, Aadhaar KYC, PAN, bank account and MCA where applicable.
                            </p>
                            <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-gray-600 dark:text-gray-400">
                                If you are a consumer, search this directory before you pay. If you are a business owner, get listed by applying for the RakshaAI Verified badge.
                            </p>

                            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                                <a href="#directory-search" className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-700 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-700/20 hover:bg-indigo-800">
                                    Search Directory <Search className="h-4 w-4" />
                                </a>
                                <Link href="/trust-certification/apply/" className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-7 py-3.5 text-sm font-bold text-gray-800 hover:border-indigo-300 hover:text-indigo-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-indigo-700 dark:hover:text-indigo-300">
                                    Apply Now <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>

                        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
                            {heroStats.map(({ value, label }) => (
                                <div key={label} className="rounded-lg border border-gray-200 bg-white p-5 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900">
                                    <p className="text-2xl font-extrabold text-indigo-700 dark:text-indigo-300">{value}</p>
                                    <p className="mt-1 text-xs font-medium leading-tight text-gray-500 dark:text-gray-400">{label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="mx-auto max-w-6xl space-y-20 px-4 py-16 sm:px-6 lg:px-8">
                    <section id="directory-search" aria-labelledby="search-heading">
                        <SectionHeader
                            eyebrow="Search Directory"
                            title="How the Directory Works - Search, Filter, and Verify"
                            description="Search by business name, city, category and Trust Score. Full live directory data can plug into this page when the verified-business backend is connected."
                        />

                        <form action="/trust-certification/verified-businesses/" method="get" className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                            <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr_1fr_1fr_auto]">
                                <label className="block">
                                    <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400">Business name</span>
                                    <div className="relative">
                                        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                                        <input
                                            name="q"
                                            defaultValue={query}
                                            placeholder="Search business name"
                                            className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-10 pr-3 text-sm text-gray-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:focus:ring-indigo-950"
                                        />
                                    </div>
                                </label>
                                <FilterSelect name="category" label="Category" value={category} options={["all", "Retail", "E-commerce & D2C", "Services", "Food & Hospitality"]} />
                                <FilterSelect name="city" label="City" value={city} options={["all", "Pune", "Mumbai", "Delhi", "Bangalore"]} />
                                <FilterSelect name="score" label="Trust Score" value={score} options={["all", "5/5", "4/5"]} />
                                <div className="flex items-end">
                                    <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-700 px-5 py-3 text-sm font-bold text-white hover:bg-indigo-800">
                                        Search <ArrowRight className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        </form>

                        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Showing {filteredListings.length} of {listings.length} representative directory cards. Live directory pagination uses 20 businesses per page.
                            </p>
                            {(query || category || city || score) && (
                                <Link href="/trust-certification/verified-businesses/" className="text-sm font-bold text-indigo-700 hover:underline dark:text-indigo-300">
                                    Clear filters
                                </Link>
                            )}
                        </div>

                        <div className="mt-5 grid gap-5 md:grid-cols-2">
                            {filteredListings.length ? filteredListings.map((business) => (
                                <BusinessCard key={business.slug} business={business} />
                            )) : (
                                <div className="rounded-lg border border-amber-200 bg-amber-50 p-6 dark:border-amber-900 dark:bg-amber-950/20 md:col-span-2">
                                    <p className="font-bold text-amber-900 dark:text-amber-200">No representative listing matched this search.</p>
                                    <p className="mt-2 text-sm text-amber-800 dark:text-amber-300">Try another city, category or Trust Score. If a business claims to be verified but is not listed, click its badge or check rakshaai.co/verify/[id].</p>
                                </div>
                            )}
                        </div>
                    </section>

                    <section aria-labelledby="what-is-heading">
                        <SectionHeader
                            eyebrow="Directory Meaning"
                            title="What Is the RakshaAI Verified Businesses Directory?"
                            description="A public listing of businesses that received the RakshaAI Verified badge after passing all applicable verification checks."
                        />
                        <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-900 dark:bg-emerald-950/20">
                            <p className="text-center text-2xl font-extrabold text-gray-950 dark:text-white">&ldquo;Can I trust this business?&rdquo;</p>
                            <p className="mx-auto mt-3 max-w-3xl text-center leading-relaxed text-gray-600 dark:text-gray-300">
                                Every listing is backed by verification status, not reviews or self-declared profile claims. Consumers can confirm Trust Score, verification date and checks passed in one click.
                            </p>
                        </div>
                        <div className="mt-5 grid gap-3 md:grid-cols-5">
                            {["Government-source checks", "Live verification link", "Trust Score shown", "Updated on approval", "Free to search"].map((item) => (
                                <div key={item} className="rounded-lg border border-gray-200 bg-white p-4 text-center dark:border-gray-800 dark:bg-gray-900">
                                    <CheckCircle2 className="mx-auto mb-2 h-5 w-5 text-emerald-600 dark:text-emerald-300" />
                                    <p className="text-sm font-bold text-gray-900 dark:text-white">{item}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section aria-labelledby="verified-means-heading">
                        <SectionHeader
                            eyebrow="Verification Layers"
                            title="What 'Verified' Actually Means for Each Business Listed Here"
                            description="On this directory, verified has a specific meaning: RakshaAI checked official sources and the documents were valid on the date shown."
                        />
                        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm dark:border-gray-800">
                            <table className="min-w-[860px] w-full text-sm">
                                <thead>
                                    <tr className="bg-gray-50 dark:bg-gray-900">
                                        {["Layer", "What It Confirms", "Source", "Shown on Profile"].map((heading) => (
                                            <th key={heading} className="px-5 py-4 text-left font-bold text-gray-950 dark:text-white">{heading}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                                    {verificationRows.map(([layer, confirms, source, shown]) => (
                                        <tr key={layer} className="bg-white dark:bg-gray-950">
                                            <td className="px-5 py-4 font-extrabold text-indigo-700 dark:text-indigo-300">{layer}</td>
                                            <td className="px-5 py-4 text-gray-600 dark:text-gray-400">{confirms}</td>
                                            <td className="px-5 py-4 text-gray-600 dark:text-gray-400">{source}</td>
                                            <td className="px-5 py-4 font-bold text-gray-900 dark:text-white">{shown}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <InfoNote icon={AlertTriangle}>
                            Verified does not mean government approved, product quality guaranteed, or future conduct assured. It means documents were verified against official sources on the date shown.
                        </InfoNote>
                    </section>

                    <section aria-labelledby="check-heading">
                        <SectionHeader
                            eyebrow="Consumer Check"
                            title="How to Check if a Specific Business Is Verified - 3 Ways"
                            description="Before transacting, use the fastest verification path available to you."
                        />
                        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm dark:border-gray-800">
                            <table className="min-w-[760px] w-full text-sm">
                                <thead>
                                    <tr className="bg-gray-50 dark:bg-gray-900">
                                        {["Method", "How to Do It", "Time", "What You See"].map((heading) => (
                                            <th key={heading} className="px-5 py-4 text-left font-bold text-gray-950 dark:text-white">{heading}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                                    {checkMethods.map(([method, how, time, result]) => (
                                        <tr key={method} className="bg-white dark:bg-gray-950">
                                            <td className="px-5 py-4 font-extrabold text-gray-950 dark:text-white">{method}</td>
                                            <td className="px-5 py-4 text-gray-600 dark:text-gray-400">{how}</td>
                                            <td className="px-5 py-4 text-indigo-700 dark:text-indigo-300">{time}</td>
                                            <td className="px-5 py-4 text-gray-600 dark:text-gray-400">{result}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section aria-labelledby="trust-gap-heading">
                        <SectionHeader
                            eyebrow="Why It Exists"
                            title="Why This Directory Exists - The Trust Gap in Indian Commerce"
                            description="Google search, social media profiles and WhatsApp chats rarely tell consumers whether a seller has active registrations and traceable identity."
                        />
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
                            {trustStats.map((stat) => (
                                <div key={stat} className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                                    <Star className="mb-4 h-5 w-5 text-amber-500" />
                                    <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">{stat}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section aria-labelledby="listed-heading">
                        <SectionHeader
                            eyebrow="Get Listed"
                            title="Who Gets Listed - Getting Your Business Into This Directory"
                            description="Every business listed here has applied for and passed the RakshaAI Verified process. Directory listing is included automatically with every plan."
                        />
                        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm dark:border-gray-800">
                            <table className="min-w-[820px] w-full text-sm">
                                <thead>
                                    <tr className="bg-gray-50 dark:bg-gray-900">
                                        <th className="px-5 py-4 text-left font-bold text-gray-950 dark:text-white">Business Type</th>
                                        <th className="px-5 py-4 text-left font-bold text-gray-950 dark:text-white">Requirements to Get Listed</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                                    {businessTypeRows.map(([type, requirement]) => (
                                        <tr key={type} className="bg-white dark:bg-gray-950">
                                            <td className="px-5 py-4 font-extrabold text-indigo-700 dark:text-indigo-300">{type}</td>
                                            <td className="px-5 py-4 text-gray-600 dark:text-gray-400">{requirement}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-6 rounded-lg bg-indigo-700 p-8 text-center text-white">
                            <Building2 className="mx-auto mb-4 h-9 w-9 text-indigo-100" />
                            <h3 className="text-2xl font-extrabold">Get Your Business Listed in This Directory</h3>
                            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-indigo-50">From ₹299/month, 10-minute application, listed within 2-3 business days after verification approval.</p>
                            <Link href="/trust-certification/apply/" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-bold text-indigo-700 hover:bg-indigo-50">
                                Apply Now <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </section>

                    <section aria-labelledby="display-heading">
                        <SectionHeader
                            eyebrow="Badge Display"
                            title="How Verified Businesses Display Their Badge and Listing"
                            description="Verified businesses receive tools to display verification status everywhere customers find them."
                        />
                        <div className="grid gap-4 md:grid-cols-2">
                            {displayRows.map(([platform, display]) => (
                                <div key={platform} className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
                                    <h3 className="font-extrabold text-gray-950 dark:text-white">{platform}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{display}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 text-center">
                            <Link href="/trust-certification/badge-guide/" className="inline-flex items-center gap-2 text-sm font-bold text-indigo-700 hover:underline dark:text-indigo-300">
                                Full platform display guide <ChevronRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </section>

                    <section aria-labelledby="privacy-heading">
                        <SectionHeader
                            eyebrow="Privacy"
                            title="Data Privacy - What This Directory Shows and What It Doesn't"
                            description="Consumer safety needs transparency. Business privacy needs protection. The directory displays verification status, not raw registration data."
                        />
                        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm dark:border-gray-800">
                            <table className="min-w-[760px] w-full text-sm">
                                <thead>
                                    <tr className="bg-gray-50 dark:bg-gray-900">
                                        <th className="px-5 py-4 text-left font-bold text-emerald-700 dark:text-emerald-300">Public on Every Listing</th>
                                        <th className="px-5 py-4 text-left font-bold text-gray-950 dark:text-white">Private - Never Shown</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                                    {privacyRows.map(([publicItem, privateItem]) => (
                                        <tr key={publicItem} className="bg-white dark:bg-gray-950">
                                            <td className="px-5 py-4 text-gray-600 dark:text-gray-400">{publicItem}</td>
                                            <td className="px-5 py-4 text-gray-600 dark:text-gray-400">{privateItem}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section aria-labelledby="faq-heading">
                        <SectionHeader
                            eyebrow="FAQ"
                            title="Frequently Asked Questions"
                            description="Common questions about searching, interpreting and using the RakshaAI Verified Businesses Directory."
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
                            <Link href="/trust-certification/faq/" className="inline-flex items-center gap-2 text-sm font-bold text-indigo-700 hover:underline dark:text-indigo-300">
                                More questions? See full FAQ <ChevronRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </section>

                    <section aria-labelledby="tools-heading">
                        <SectionHeader
                            eyebrow="Related Tools"
                            title="Related Free Safety Tools"
                            description="Checking this directory is one layer of protection. These free tools add more."
                        />
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                            {relatedTools.map(({ name, href, text }) => (
                                <Link key={name} href={href} className="group rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition hover:border-indigo-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-indigo-800">
                                    <h3 className="font-extrabold text-gray-950 transition group-hover:text-indigo-700 dark:text-white dark:group-hover:text-indigo-300">{name}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{text}</p>
                                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-indigo-700 dark:text-indigo-300">
                                        Open <ArrowRight className="h-4 w-4" />
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </section>

                    <section>
                        <div className="grid gap-5 md:grid-cols-2">
                            <div className="rounded-lg bg-indigo-700 p-8 text-center text-white">
                                <ShieldCheck className="mx-auto mb-4 h-9 w-9 text-indigo-100" />
                                <h2 className="text-2xl font-extrabold">Is Your Business in This Directory?</h2>
                                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-indigo-50">
                                    Apply for RakshaAI Verified and get listed after your applicable checks pass.
                                </p>
                                <Link href="/trust-certification/apply/" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-bold text-indigo-700 hover:bg-indigo-50">
                                    Apply for Verification <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>

                            <div className="rounded-lg border border-red-200 bg-red-50 p-8 text-center dark:border-red-900 dark:bg-red-950/20">
                                <AlertTriangle className="mx-auto mb-4 h-9 w-9 text-red-600 dark:text-red-300" />
                                <h2 className="text-2xl font-extrabold text-gray-950 dark:text-white">Found a Fake Badge?</h2>
                                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                                    A badge that does not verify at rakshaai.co/verify/[id] is fake. Report it quickly.
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

function BusinessCard({ business }: { business: (typeof listings)[number] }) {
    return (
        <article id={business.slug} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-xl font-extrabold text-gray-950 dark:text-white">{business.name}</h3>
                        {business.isNew && (
                            <span className="rounded-md bg-emerald-50 px-2 py-1 text-xs font-black uppercase tracking-wide text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300">
                                New
                            </span>
                        )}
                    </div>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{business.description}</p>
                </div>
                <div className="rounded-lg bg-indigo-50 px-3 py-2 text-center dark:bg-indigo-950/30">
                    <p className="text-lg font-extrabold text-indigo-700 dark:text-indigo-300">{business.score}</p>
                    <p className="text-[10px] font-bold uppercase tracking-wide text-indigo-700 dark:text-indigo-300">Trust Score</p>
                </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <CardMetric icon={CheckCircle2} label="Checks" value={`${business.checks} confirmed`} />
                <CardMetric icon={Shield} label="Status" value="Verified" />
                <CardMetric icon={MapPin} label="City" value={business.city} />
                <CardMetric icon={Store} label="Type" value={business.businessType} />
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 pt-4 dark:border-gray-800">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    {business.checks} govt. databases confirmed · Verified {business.verifiedDate}
                </p>
                <Link href={`#${business.slug}`} className="inline-flex items-center gap-2 text-sm font-bold text-indigo-700 hover:underline dark:text-indigo-300">
                    View profile preview <ChevronRight className="h-4 w-4" />
                </Link>
            </div>
        </article>
    );
}

function CardMetric({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string }) {
    return (
        <div className="rounded-lg border border-gray-100 bg-gray-50 p-3 dark:border-gray-800 dark:bg-gray-950">
            <Icon className="mb-2 h-4 w-4 text-indigo-700 dark:text-indigo-300" />
            <p className="text-[10px] font-black uppercase tracking-wide text-gray-500 dark:text-gray-400">{label}</p>
            <p className="mt-1 text-xs font-bold text-gray-900 dark:text-white">{value}</p>
        </div>
    );
}

function FilterSelect({
    name,
    label,
    value,
    options,
}: {
    name: string;
    label: string;
    value: string;
    options: string[];
}) {
    return (
        <label className="block">
            <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400">{label}</span>
            <div className="relative">
                <Filter className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <select
                    name={name}
                    defaultValue={value || "all"}
                    className="w-full appearance-none rounded-lg border border-gray-300 bg-white py-3 pl-10 pr-3 text-sm text-gray-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:focus:ring-indigo-950"
                >
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option === "all" ? `All ${label}` : option}
                        </option>
                    ))}
                </select>
            </div>
        </label>
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
            <p className="text-xs font-bold uppercase tracking-widest text-indigo-700 dark:text-indigo-300">{eyebrow}</p>
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
