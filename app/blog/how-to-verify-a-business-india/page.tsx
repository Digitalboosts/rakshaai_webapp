import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import BlogLayout from "@/components/BlogLayout";
import ReportScamButton from "@/components/ReportScamButton";
import { blogPostingSchema, breadcrumbListSchema, faqPageSchema, jsonLd } from "@/lib/seo/schema";
import type { LucideIcon } from "lucide-react";
import {
    AlertTriangle,
    ArrowRight,
    BadgeCheck,
    Building2,
    Clock,
    FileCheck2,
    Landmark,
    ShieldCheck,
    ShoppingCart,
    Smartphone,
    Store,
    UserCheck,
} from "lucide-react";

const slug = "how-to-verify-a-business-india";
const canonicalUrl = "https://www.rakshaai.co/blog/how-to-verify-a-business-india/";
const heroImage = "/blog/how-to-check-fake-website-india/website-safety-checklist-india.webp";

export const metadata: Metadata = {
    title: {
        absolute: "How to Verify a Business in India - 8 Reliable Methods",
    },
    description:
        "Learn how to verify a business in India before paying - MCA21, GST, Aadhaar, PAN, bank account checks, RakshaAI badge, and more. Free step-by-step guide for consumers and B2B buyers.",
    keywords:
        "how to verify a business in India, verify business India, company registration check India, GST verification India, RakshaAI verified business, vendor verification India",
    authors: [{ name: "RakshaAI", url: "https://www.rakshaai.co/" }],
    robots: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
    },
    alternates: {
        canonical: canonicalUrl,
    },
    openGraph: {
        title: "How to Verify a Business in India - 8 Reliable Methods",
        description:
            "MCA21, GST, Aadhaar, PAN, bank account, RakshaAI badge and seller checks before you pay or partner.",
        url: canonicalUrl,
        type: "article",
        siteName: "RakshaAI",
        publishedTime: "2026-07-02T00:00:00.000Z",
        modifiedTime: "2026-07-02T00:00:00.000Z",
        tags: ["Business Verification", "GST Verification", "Online Seller Safety", "Vendor Due Diligence"],
        images: [
            {
                url: heroImage,
                width: 900,
                height: 1200,
                alt: "Business verification checklist for India",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "How to Verify a Business in India",
        description: "8 reliable methods to verify a business before paying, hiring or partnering.",
        images: [heroImage],
    },
};

const faqs = [
    {
        q: "How do I verify a business in India?",
        a: "Use a combination of checks: MCA21 for company registration, GSTIN search on gst.gov.in, RakshaAI Verified directory, UPI ID checker before payment, and red-flag review of address, domain age, payment account and urgency tactics.",
    },
    {
        q: "How do I verify a company registration in India?",
        a: "Go to mca.gov.in, open MCA Services, then View Company or LLP Master Data. Search by company name or CIN. The result shows incorporation date, status, registered state and company details.",
    },
    {
        q: "How do I check if a company is legitimate in India?",
        a: "Check whether the company is Active on MCA21, whether its GSTIN is valid and active, whether the name matches across records, and whether it appears in the RakshaAI Verified Businesses directory.",
    },
    {
        q: "Can I trust a business that shows a RakshaAI Verified badge?",
        a: "Yes, if the badge is genuine. Click it and confirm it opens rakshaai.co/verify/[badge-id] with a valid Trust Score and live verification details. A fake or expired badge will not pass this check.",
    },
    {
        q: "How do I know if an online seller is real in India?",
        a: "Ask for GSTIN, verify it at gst.gov.in, check the seller UPI ID before paying, review account age and customer feedback, and search the RakshaAI Verified directory or click their RakshaAI badge if they display one.",
    },
    {
        q: "How do I verify a seller on WhatsApp is genuine?",
        a: "Ask for GSTIN, business address, business bank or UPI details, and a verification badge or public profile. Check the UPI ID and GSTIN before paying. Avoid sellers who pressure you to pay immediately.",
    },
    {
        q: "Is it safe to pay a business that is on GST?",
        a: "GST registration is a strong legitimacy signal, but it is not enough by itself. Also verify the business name, bank account, online reputation, address and fraud reports before paying.",
    },
    {
        q: "How do I verify a Flipkart or Amazon seller?",
        a: "Check seller ratings, order history, time active, return policy and whether the product is fulfilled by the platform. Never pay outside the marketplace to a personal UPI ID or bank account.",
    },
    {
        q: "What should I check before signing a business agreement?",
        a: "For B2B agreements, verify MCA status, GST compliance, PAN entity type, bank account name match, trademark ownership, court records and RakshaAI Verified status where available.",
    },
    {
        q: "Where do I report a fake business in India?",
        a: "If money is lost, call 1930 immediately and file a complaint on cybercrime.gov.in. Also report the fake business to RakshaAI so other users can be warned.",
    },
];

const articleSchema = blogPostingSchema({
    headline: "How to Verify a Business in India - 8 Reliable Methods Before You Pay or Partner",
    description:
        "A consumer and B2B buyer guide to verify Indian businesses using MCA21, GST, Aadhaar/PAN/bank checks, RakshaAI Verified directory, online seller checks and due diligence.",
    url: "/blog/how-to-verify-a-business-india/",
    image: heroImage,
    datePublished: "2026-07-02T00:00:00.000Z",
    dateModified: "2026-07-02T00:00:00.000Z",
    author: {
        "@type": "Organization",
        name: "RakshaAI",
        url: "https://www.rakshaai.co/",
    },
    section: "Business Verification",
    keywords: [
        "how to verify a business in India",
        "company registration check India",
        "GST verification India",
        "vendor due diligence India",
        "RakshaAI verified badge",
    ],
    wordCount: 3200,
});

const breadcrumbSchema = breadcrumbListSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: "How to Verify a Business in India", url: "/blog/how-to-verify-a-business-india/" },
]);

const faqSchema = faqPageSchema(faqs.map((faq) => ({ question: faq.q, answer: faq.a })));

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Verify a Business in India",
    totalTime: "PT20M",
    step: [
        {
            "@type": "HowToSection",
            name: "Check MCA21 company registration",
            itemListElement: [
                { "@type": "HowToStep", name: "Open MCA master data", text: "Go to mca.gov.in and open View Company or LLP Master Data." },
                { "@type": "HowToStep", name: "Search company", text: "Enter the company name or CIN and confirm Active status." },
            ],
        },
        {
            "@type": "HowToSection",
            name: "Verify Aadhaar, PAN and bank account",
            itemListElement: [
                { "@type": "HowToStep", name: "Check identity", text: "For sole proprietors, verify identity through Aadhaar eKYC where available." },
                { "@type": "HowToStep", name: "Check PAN and bank name", text: "Confirm PAN entity type and bank account name match." },
            ],
        },
        {
            "@type": "HowToSection",
            name: "Search RakshaAI Verified Businesses",
            itemListElement: [
                { "@type": "HowToStep", name: "Search directory", text: "Search the business name in RakshaAI Verified Businesses." },
                { "@type": "HowToStep", name: "Open profile", text: "Review Trust Score, verification checks and verification date." },
            ],
        },
        {
            "@type": "HowToSection",
            name: "Spot fake business red flags",
            itemListElement: [
                { "@type": "HowToStep", name: "Review warning signs", text: "Look for missing GSTIN, personal payment accounts, urgent pressure, new website and unverifiable address." },
            ],
        },
        {
            "@type": "HowToSection",
            name: "Verify GSTIN",
            itemListElement: [
                { "@type": "HowToStep", name: "Search taxpayer", text: "Go to gst.gov.in and search the GSTIN or PAN." },
                { "@type": "HowToStep", name: "Match details", text: "Confirm active status, business name and state." },
            ],
        },
        {
            "@type": "HowToSection",
            name: "Check trade licences and sector registrations",
            itemListElement: [
                { "@type": "HowToStep", name: "Request licence", text: "Ask for trade licence, Shop Act, FSSAI or professional registration where applicable." },
            ],
        },
        {
            "@type": "HowToSection",
            name: "Verify online sellers",
            itemListElement: [
                { "@type": "HowToStep", name: "Check seller signals", text: "Review GSTIN, UPI ID, account age, platform ratings and return policy." },
            ],
        },
        {
            "@type": "HowToSection",
            name: "Run B2B due diligence",
            itemListElement: [
                { "@type": "HowToStep", name: "Run full checks", text: "For vendors and partners, combine MCA, GST, PAN, bank, trademark, court record and RakshaAI checks." },
            ],
        },
    ],
};

const heroStats = [
    ["Rs. 22,845 Cr", "Cyber fraud loss, India 2024"],
    ["15+ Lakh", "Cybercrime complaints"],
    ["8 Methods", "To verify any business"],
    ["Free", "All checks in this guide"],
];

const whoNeedsRows = [
    ["Consumer buying online", "Before sending advance payment to an unknown WhatsApp, Instagram or website seller."],
    ["Job seeker", "Before sharing Aadhaar, PAN, bank details or paying any security deposit."],
    ["Freelancer / service provider", "Before starting work for a client found online."],
    ["Business owner doing B2B sourcing", "Before placing an order with a new supplier or distributor."],
    ["Investor or partner", "Before signing an agreement or transferring funds to a business partner."],
];

const methods = [
    {
        id: "mca21",
        title: "Method 1 - Check the MCA21 Portal",
        icon: Building2,
        bestFor: "Pvt Ltd companies, LLPs and OPCs",
        time: "2-3 minutes",
        body: "The Ministry of Corporate Affairs maintains MCA21, the official company registration database. Search by company name or CIN to confirm legal existence and status.",
        steps: [
            "Go to mca.gov.in and open MCA Services.",
            "Open Master Data, then View Company / LLP Master Data.",
            "Enter the company name or CIN.",
            "Confirm Status is Active, then check incorporation date, registered state and company details.",
            "Treat Strike Off, Dissolved or Under Liquidation as a stop sign.",
        ],
        note: "MCA21 is authoritative for incorporated companies, but it does not apply to sole proprietors and it does not prove current financial health.",
    },
    {
        id: "identity",
        title: "Method 2 - Aadhaar KYC, PAN and Bank Account Verification",
        icon: UserCheck,
        bestFor: "Sole proprietors, freelancers and small traders",
        time: "5-10 minutes",
        body: "For businesses without MCA registration, identity and financial traceability checks matter most. Aadhaar confirms the person, PAN confirms tax identity, and bank verification confirms account ownership.",
        steps: [
            "Confirm owner identity through Aadhaar eKYC where available.",
            "Check PAN validity and entity type through Income Tax or NSDL-linked verification.",
            "Use bank account name match or penny drop before large transfers.",
            "For sole proprietors, the owner name should align across Aadhaar, PAN and bank records.",
        ],
        note: "A business bank or current account matching the GST or business name is a stronger signal than a personal account in an unrelated name.",
    },
    {
        id: "rakshaai-directory",
        title: "Method 3 - Check the RakshaAI Verified Businesses Directory",
        icon: BadgeCheck,
        bestFor: "Fast single-check verification",
        time: "Under 60 seconds",
        body: "RakshaAI Verified Businesses have passed live checks across GSTN, UIDAI eKYC, PAN, bank account and MCA21 where applicable. The directory combines those results into one public Trust Score.",
        steps: [
            "Open the Verified Businesses directory.",
            "Search the business name, city or category.",
            "Open the profile and review Trust Score, checks passed and verification date.",
            "If the business displays a RakshaAI badge, click it and confirm it opens rakshaai.co/verify/[badge-id].",
        ],
        note: "A genuine badge is clickable. A screenshot of a badge without a live verification page should not be trusted.",
    },
    {
        id: "red-flags",
        title: "Method 4 - Spot Warning Signs of a Fake Business",
        icon: AlertTriangle,
        bestFor: "Quick pre-payment risk screen",
        time: "30 seconds",
        body: "Before running formal checks, scan for obvious red flags. If three or more appear together, pause the transaction and verify everything.",
        steps: [
            "No GST number shown for a regular commercial business.",
            "No physical address, or the address cannot be found on maps.",
            "Payment requested only to a personal account.",
            "Pressure to pay immediately because an offer is expiring.",
            "Website created recently or uses a suspicious domain name.",
            "No company registration number despite claiming to be a company.",
            "Only WhatsApp or Telegram communication, with no official email domain.",
            "Price is dramatically below market with no credible reason.",
        ],
        note: "Urgency and personal payment accounts are the two most common warning signs in fake-business fraud.",
    },
    {
        id: "gst",
        title: "Method 5 - GST Verification on GSTN Portal",
        icon: FileCheck2,
        bestFor: "Most Indian sellers and service providers",
        time: "Under 60 seconds",
        body: "GST verification is the most widely used business legitimacy check because most active Indian businesses above the turnover threshold have a GSTIN.",
        steps: [
            "Go to gst.gov.in and open Search Taxpayer.",
            "Choose Search by GSTIN/UIN and enter the 15-digit GSTIN.",
            "Confirm the status is Active.",
            "Match the registered business name and state with what the seller told you.",
            "Check taxpayer type and recent filing status where available.",
        ],
        note: "GST proves tax registration, not honesty. Use it as one check among several.",
    },
    {
        id: "licences",
        title: "Method 6 - Trade Licence, Shop Act and Sector Registrations",
        icon: Landmark,
        bestFor: "Local shops, restaurants and licensed professionals",
        time: "5-10 minutes",
        body: "Local and sector-specific registrations confirm that a business is legally allowed to operate in its city or industry.",
        steps: [
            "Ask for trade licence or municipal licence number for local businesses.",
            "Ask retail businesses for Shop Act registration details.",
            "For food businesses, verify FSSAI licence on fssai.gov.in.",
            "For professionals, verify with ICAI, medical councils, COA or the relevant body.",
        ],
        note: "These checks are strongest for offline-first businesses. For online sellers, GST, UPI and RakshaAI checks usually matter more.",
    },
    {
        id: "online-sellers",
        title: "Method 7 - Verify Online Sellers on WhatsApp, Instagram and Marketplaces",
        icon: ShoppingCart,
        bestFor: "Social commerce and marketplace purchases",
        time: "3-5 minutes",
        body: "Online sellers may be sole proprietors without MCA records, so verify payment identity, GST, platform history and customer feedback before paying.",
        steps: [
            "Ask WhatsApp or Instagram sellers for GSTIN and verify it.",
            "Check the seller UPI ID before sending money.",
            "Review account age, posts, comments, ratings and customer complaints.",
            "On Amazon, Flipkart or Meesho, check seller ratings, order history and return policy.",
            "Never leave the marketplace to pay a seller directly.",
        ],
        note: "If the UPI name does not match the business or seller identity, do not pay.",
    },
    {
        id: "b2b",
        title: "Method 8 - B2B and Vendor Due Diligence Checks",
        icon: Store,
        bestFor: "Vendor hiring, supply contracts and partnerships",
        time: "15-60 minutes",
        body: "For B2B transactions, combine legal, tax, payment, ownership and fraud-history checks before signing or transferring funds.",
        steps: [
            "Check MCA status for Pvt Ltd, LLP or OPC entities.",
            "Verify GSTIN and filing status.",
            "Confirm PAN entity type and name match.",
            "Verify bank account name before payment.",
            "Check trademark ownership at ipindia.gov.in if brand rights matter.",
            "Search court records or public disputes for high-value deals.",
            "Search the RakshaAI Verified directory and click any badge shown by the business.",
        ],
        note: "For sensitive data sharing, also review privacy and data protection practices under DPDP Act 2023 expectations.",
    },
];

const licenceRows = [
    ["Trade licence", "Municipal corporation or local body", "Confirms the local business is licensed to operate."],
    ["Shop Act registration", "State Labour Department", "Confirms business name, address and owner for shops and offices."],
    ["FSSAI registration", "fssai.gov.in", "Required for food businesses and restaurants."],
    ["Professional licence", "Relevant council or professional body", "Useful for CAs, doctors, architects and regulated professionals."],
];

const b2bRows = [
    ["MCA status", "MCA21 master data", "Confirms the company legally exists and is Active."],
    ["GST compliance", "gst.gov.in", "Active GSTIN and recent filing suggest operating business status."],
    ["PAN entity type", "Income Tax / NSDL-linked check", "Confirms whether the business is Company, Firm or Individual."],
    ["Bank account", "Penny drop or bank name match", "Confirms payment account belongs to the business or owner."],
    ["RakshaAI Verified", "Verified Businesses directory", "Combines multiple checks into one public Trust Score."],
    ["Trademark", "ipindia.gov.in", "Confirms brand ownership where relevant."],
    ["Court records", "Court cause lists and public searches", "May reveal unresolved legal disputes."],
];

const recoverySteps = [
    ["Within 30 minutes", "Call 1930", "Report the transaction immediately with amount, time, recipient account and transaction ID."],
    ["Within 1 hour", "Call your bank", "Ask the bank to mark the transaction as fraud and initiate reversal or freeze steps."],
    ["Within 24 hours", "File on cybercrime.gov.in", "Submit complaint details, screenshots, business contact data and payment proof."],
    ["Within 48 hours", "Report to RakshaAI", "Flag the business in RakshaAI so future users see the risk signal."],
];

const comparisonRows = [
    ["Paying WhatsApp or Instagram seller", "UPI ID check + RakshaAI directory + GST verification", "5-10 minutes"],
    ["Hiring a B2B vendor", "MCA21 + GST + RakshaAI badge + bank name match", "15-20 minutes"],
    ["Joining a company as employee", "MCA21 + GST + LinkedIn and domain verification", "10 minutes"],
    ["Buying from marketplace", "Seller ratings + time active + platform-protected payment", "3-5 minutes"],
    ["Paying local shop or service provider", "Trade licence + Shop Act + GST", "10 minutes"],
    ["Signing partnership or investment agreement", "MCA + GST + PAN + bank + trademark + court records", "45-60 minutes"],
];

const relatedTools = [
    ["Verified Businesses Directory", "Search businesses verified across government-source checks", "/trust-certification/verified-businesses/"],
    ["UPI ID Checker", "Verify any UPI ID before sending money", "/upi-id-checker/"],
    ["Website Safety Checker", "Check any business website for fraud signals", "/website-safety-checker/"],
    ["Phone Number Checker", "Check if a business phone has fraud reports", "/phone-number-checker/"],
    ["Get Business Verified", "Apply for RakshaAI Verified badge", "/trust-certification/apply/"],
    ["How RakshaAI Verifies", "See the full verification process", "/trust-certification/how-it-works/"],
];

export default function HowToVerifyBusinessIndiaPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLd([articleSchema, breadcrumbSchema, faqSchema, howToSchema]) }}
            />
            <BlogLayout
                title="How to Verify a Business in India - 8 Reliable Methods Before You Pay or Partner"
                description="MCA21, GST, Aadhaar, PAN, bank account checks, RakshaAI badge, seller red flags and B2B due diligence methods in one free guide."
                publishedAt="2026-07-02T00:00:00.000Z"
                lastUpdated="2026-07-02T00:00:00.000Z"
                readTime="12 min"
                author="RakshaAI"
                authorUrl="/about"
                primaryTool={{ label: "Search verified businesses", href: "/trust-certification/verified-businesses/" }}
                tags={["Business Verification", "GST Check", "Vendor Due Diligence", "Online Seller Safety"]}
                slug={slug}
            >
                <div className="not-prose mb-10 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
                    <Image
                        src={heroImage}
                        alt="Business verification checklist for India"
                        width={900}
                        height={1200}
                        className="mx-auto max-h-[520px] w-full object-cover"
                        priority
                    />
                    <p className="px-4 pb-4 pt-2 text-center text-xs italic text-gray-500 dark:text-gray-400">
                        Verify before you pay: registration, GST, identity, bank account, seller history and fraud reports all matter.
                    </p>
                </div>

                <p>
                    India lost over <strong>Rs. 22,845 crore</strong> to cyber fraud in 2024. A significant portion came from transactions with businesses that turned out to be fake: fake sellers on WhatsApp, fake companies accepting advance payments, fake employers collecting documents and fake vendors disappearing after purchase orders.
                </p>
                <p>
                    The question <strong>how to verify a business in India</strong> is no longer just a due-diligence question. It is a safety question. This guide gives you 8 reliable methods you can use before paying, hiring, sourcing, investing or sharing sensitive information.
                </p>

                <div className="not-prose my-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {heroStats.map(([value, label]) => (
                        <div key={label} className="rounded-2xl border border-indigo-100 bg-indigo-50 p-5 text-center dark:border-indigo-800 dark:bg-indigo-950/30">
                            <p className="text-2xl font-extrabold text-indigo-700 dark:text-indigo-300">{value}</p>
                            <p className="mt-1 text-xs font-semibold text-gray-600 dark:text-gray-400">{label}</p>
                        </div>
                    ))}
                </div>

                <Callout
                    icon={BadgeCheck}
                    title="Already have a business to check?"
                    text="Search the RakshaAI Verified Businesses directory. Every listed business has passed RakshaAI verification checks and has a public verification profile."
                    href="/trust-certification/verified-businesses/"
                    label="Check Verified Businesses"
                />

                <h2>Why You Need to Verify a Business Before Transacting</h2>
                <p>
                    Earlier, only large companies performed formal due diligence. That has changed. Consumers buy from unknown Instagram stores, job seekers share PAN and Aadhaar with online recruiters, and MSMEs source from vendors they met through WhatsApp or marketplaces.
                </p>
                <Table headers={["Who Needs to Verify", "When and Why"]} rows={whoNeedsRows} />

                <InfoBox tone="amber">
                    The three most common fake-business fraud types are advance payment fraud, fake employer fraud and fake vendor fraud. The single best defence is checking before payment, not after.
                </InfoBox>

                <div className="not-prose my-8 rounded-2xl border-2 border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-950/30">
                    <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-700 dark:text-blue-300">
                        Quick answer: how to verify a business in India
                    </p>
                    <ol className="grid gap-3 md:grid-cols-2">
                        {methods.map((method, index) => (
                            <li key={method.id} className="flex gap-3 rounded-xl bg-white p-3 dark:bg-gray-900">
                                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-blue-700 text-xs font-extrabold text-white">
                                    {index + 1}
                                </span>
                                <a href={`#${method.id}`} className="text-sm font-bold text-gray-900 hover:text-blue-700 dark:text-gray-100 dark:hover:text-blue-300">
                                    {method.title.replace(/^Method \d+ - /, "")}
                                </a>
                            </li>
                        ))}
                    </ol>
                </div>

                {methods.slice(0, 5).map((method) => (
                    <MethodSection key={method.id} method={method} />
                ))}

                <h3>MSME / Udyam Registration Check</h3>
                <p>
                    Small businesses registered as MSMEs may have a Udyam Registration Number. You can verify Udyam registration at udyamregistration.gov.in. Treat it as an additional signal, not a replacement for GST, payment identity and fraud-history checks.
                </p>

                {methods.slice(5, 6).map((method) => (
                    <MethodSection key={method.id} method={method}>
                        <Table headers={["Registration Type", "How to Verify", "Why It Matters"]} rows={licenceRows} />
                    </MethodSection>
                ))}

                {methods.slice(6, 7).map((method) => (
                    <MethodSection key={method.id} method={method}>
                        <div className="not-prose grid gap-4 md:grid-cols-2">
                            <MiniCard
                                icon={Smartphone}
                                title="WhatsApp and Instagram sellers"
                                text="Ask for GSTIN, verify the UPI ID, check profile age, review comments and never pay a name that does not match the claimed seller."
                            />
                            <MiniCard
                                icon={ShoppingCart}
                                title="Marketplace sellers"
                                text="Prefer platform-protected checkout. Check ratings, order history, return policy and whether the seller asks you to pay outside the marketplace."
                            />
                        </div>
                    </MethodSection>
                ))}

                {methods.slice(7).map((method) => (
                    <MethodSection key={method.id} method={method}>
                        <Table headers={["Check", "How to Verify", "Why It Matters"]} rows={b2bRows} />
                        <p>
                            Before sharing sensitive personal or financial data with a partner, check whether they follow reasonable data protection practices. Since August 2023, India&apos;s DPDP Act 2023 has made personal data handling a serious business responsibility.
                        </p>
                    </MethodSection>
                ))}

                <Callout
                    icon={ShieldCheck}
                    title="Is your business verified?"
                    text="Customers are already checking sellers before paying. Apply for RakshaAI Verified and get a public profile, Trust Score and badge for your website, WhatsApp and invoices."
                    href="/trust-certification/apply/"
                    label="Apply for Verified Badge"
                />

                <h2>What to Do If You Have Already Paid a Fake Business</h2>
                <p>
                    If you realise you have been defrauded, speed matters. The first 30 minutes can decide whether the destination account can be frozen before the money is moved.
                </p>
                <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
                    {recoverySteps.map(([time, title, text]) => (
                        <div key={time} className="rounded-2xl border border-red-200 bg-red-50 p-5 dark:border-red-900 dark:bg-red-950/20">
                            <div className="mb-3 flex items-center gap-2 text-red-700 dark:text-red-300">
                                <Clock className="h-5 w-5" />
                                <p className="text-xs font-black uppercase tracking-widest">{time}</p>
                            </div>
                            <h3 className="text-base font-extrabold text-gray-950 dark:text-white">{title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-300">{text}</p>
                        </div>
                    ))}
                </div>

                <div className="not-prose my-8 rounded-2xl bg-red-600 p-8 text-center text-white">
                    <AlertTriangle className="mx-auto mb-4 h-9 w-9" />
                    <h3 className="text-2xl font-extrabold">Spotted a Fake Business?</h3>
                    <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-red-50">
                        Report the business to RakshaAI so its phone, website, UPI ID or seller identity can be flagged for other users.
                    </p>
                    <ReportScamButton className="mt-6 inline-flex cursor-pointer items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-red-700 hover:bg-red-50">
                        Report a Scam <ArrowRight className="h-4 w-4" />
                    </ReportScamButton>
                </div>

                <h2>Quick Comparison - Which Method to Use When</h2>
                <p>
                    You do not need every check for every situation. Use the strongest checks for the transaction value and risk level.
                </p>
                <Table headers={["Your Situation", "Best Methods to Use", "Time Required"]} rows={comparisonRows} />

                <h2>Frequently Asked Questions</h2>
                {faqs.map(({ q, a }) => (
                    <div key={q}>
                        <h3>{q}</h3>
                        <p>{a}</p>
                    </div>
                ))}

                <h2>Related Free Safety Tools</h2>
                <Table headers={["Tool", "What It Does", "URL"]} rows={relatedTools} linkColumn={2} />

                <p>
                    Final rule: verify before you pay. One check is good, three checks are much better, and a live public verification profile is strongest because the customer can confirm it themselves.
                </p>
            </BlogLayout>
        </>
    );
}

function MethodSection({
    method,
    children,
}: {
    method: {
        id: string;
        title: string;
        icon: LucideIcon;
        bestFor: string;
        time: string;
        body: string;
        steps: string[];
        note: string;
    };
    children?: ReactNode;
}) {
    const Icon = method.icon;

    return (
        <section id={method.id} className="scroll-mt-24">
            <h2>{method.title}</h2>
            <div className="not-prose my-5 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <div className="flex flex-col gap-4 md:flex-row md:items-start">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white">
                        <Icon className="h-6 w-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                        <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">{method.body}</p>
                        <div className="mt-4 flex flex-wrap gap-2 text-xs font-bold">
                            <span className="rounded-full bg-indigo-50 px-3 py-1 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300">
                                Best for: {method.bestFor}
                            </span>
                            <span className="rounded-full bg-gray-100 px-3 py-1 text-gray-700 dark:bg-gray-900 dark:text-gray-300">
                                Time: {method.time}
                            </span>
                        </div>
                    </div>
                </div>
                <StepList steps={method.steps} />
                <InfoBox tone="blue">{method.note}</InfoBox>
            </div>
            {children}
        </section>
    );
}

function StepList({ steps }: { steps: string[] }) {
    return (
        <ol className="mt-5 grid gap-3">
            {steps.map((step, index) => (
                <li key={step} className="flex gap-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md bg-indigo-50 text-xs font-extrabold text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300">
                        {index + 1}
                    </span>
                    <span>{step}</span>
                </li>
            ))}
        </ol>
    );
}

function Table({
    headers,
    rows,
    linkColumn,
}: {
    headers: string[];
    rows: string[][];
    linkColumn?: number;
}) {
    return (
        <div className="not-prose my-6 overflow-x-auto rounded-2xl border border-gray-200 shadow-sm dark:border-gray-700">
            <table className="min-w-[720px] w-full text-sm">
                <thead>
                    <tr className="bg-gray-50 dark:bg-gray-900">
                        {headers.map((header) => (
                            <th key={header} className="px-5 py-4 text-left font-bold text-gray-950 dark:text-white">
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {rows.map((row) => (
                        <tr key={row.join("-")} className="bg-white dark:bg-gray-800">
                            {row.map((cell, index) => (
                                <td key={`${row[0]}-${index}`} className={`px-5 py-4 ${index === 0 ? "font-extrabold text-indigo-700 dark:text-indigo-300" : "text-gray-700 dark:text-gray-300"}`}>
                                    {linkColumn === index ? (
                                        <Link href={cell} className="font-semibold text-indigo-700 hover:underline dark:text-indigo-300">
                                            {cell}
                                        </Link>
                                    ) : (
                                        cell
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function InfoBox({ children, tone = "blue" }: { children: ReactNode; tone?: "blue" | "amber" }) {
    const classes =
        tone === "amber"
            ? "border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900 dark:bg-amber-950/20 dark:text-amber-200"
            : "border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-900 dark:bg-blue-950/20 dark:text-blue-200";

    return (
        <div className={`not-prose mt-5 rounded-2xl border p-4 text-sm leading-relaxed ${classes}`}>
            {children}
        </div>
    );
}

function Callout({
    icon: Icon,
    title,
    text,
    href,
    label,
}: {
    icon: LucideIcon;
    title: string;
    text: string;
    href: string;
    label: string;
}) {
    return (
        <div className="not-prose my-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-900 dark:bg-emerald-950/20">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex gap-4">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white">
                        <Icon className="h-5 w-5" />
                    </div>
                    <div>
                        <h3 className="text-lg font-extrabold text-gray-950 dark:text-white">{title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-300">{text}</p>
                    </div>
                </div>
                <Link href={href} className="inline-flex flex-shrink-0 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white hover:bg-emerald-700">
                    {label} <ArrowRight className="h-4 w-4" />
                </Link>
            </div>
        </div>
    );
}

function MiniCard({ icon: Icon, title, text }: { icon: LucideIcon; title: string; text: string }) {
    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <Icon className="mb-4 h-6 w-6 text-indigo-700 dark:text-indigo-300" />
            <h3 className="font-extrabold text-gray-950 dark:text-white">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-300">{text}</p>
        </div>
    );
}
