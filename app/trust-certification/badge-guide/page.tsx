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
    ChevronRight,
    Code2,
    ImageIcon,
    Mail,
    MonitorSmartphone,
    Search,
    Shield,
    ShieldCheck,
    Smartphone,
    Store,
} from "lucide-react";

const canonicalUrl = "https://www.rakshaai.co/trust-certification/badge-guide/";

export const metadata: Metadata = {
    title: {
        absolute: "RakshaAI Badge Display Guide - Add Your Badge Everywhere",
    },
    description:
        "Step-by-step guide to display your RakshaAI Verified badge on your website, WhatsApp Business, Instagram, email signature, invoices, and marketplaces. Embed code included.",
    alternates: {
        canonical: canonicalUrl,
    },
    robots: {
        index: true,
        follow: true,
        "max-snippet": -1,
    },
    openGraph: {
        title: "RakshaAI Badge Display Guide - Add Your Badge Everywhere",
        description:
            "Add your RakshaAI Verified badge to websites, WhatsApp Business, Instagram, emails, invoices and marketplaces.",
        url: canonicalUrl,
        type: "article",
        siteName: "RakshaAI",
        images: [
            {
                url: "/opengraph-image",
                width: 1200,
                height: 630,
                alt: "RakshaAI Badge Display Guide",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "RakshaAI Badge Display Guide",
        description: "Step-by-step badge setup for website, WhatsApp, Instagram, email, invoices and marketplaces.",
        images: ["/opengraph-image"],
    },
    other: {
        "geo.region": "IN",
        language: "en-IN",
    },
};

const embedCode = `<!-- RakshaAI Verified Badge -->
<a href="https://www.rakshaai.co/verify/YOUR-BADGE-ID" target="_blank" rel="noopener noreferrer">
  <img src="https://badge.rakshaai.co/v/YOUR-BADGE-ID.png"
       alt="RakshaAI Verified Business - GST, Aadhaar & PAN Verified"
       width="160" height="60" loading="lazy" />
</a>`;

const faqs = [
    {
        q: "How do I display my RakshaAI Verified badge on my website?",
        a: "Paste the embed code from your verification email into your website HTML where the badge should appear. For no-code builders, upload the badge PNG as an image and link it to your verification URL.",
    },
    {
        q: "Which badge file should I use for which platform?",
        a: "Use 80px PNG for email signatures and small footers, 160px PNG for website headers and standard web placement, 300px PNG for checkout or product pages, and SVG for print or large-format usage.",
    },
    {
        q: "How do I add the embed code to my website?",
        a: "Copy the embed code from your verification email, open your website HTML or custom-code area, replace YOUR-BADGE-ID with your actual badge ID, paste the code and save.",
    },
    {
        q: "How do I add my badge to WhatsApp Business?",
        a: "WhatsApp Business does not support a hyperlinked profile image. Add your verification URL to the Business Profile Description, use the badge on catalogue cover imagery, and announce it through WhatsApp Status.",
    },
    {
        q: "Can I add my badge to my Instagram bio?",
        a: "Yes. Add your verification URL in the Website or Link in Bio field and add RakshaAI Verified text in the bio. You can also pin a verification post to the top of your profile.",
    },
    {
        q: "Can customers verify my badge is real?",
        a: "Yes. Every genuine badge links to rakshaai.co/verify/[badge-id]. The page shows Trust Score, checks passed and verification date. Fake or expired badges fail this check.",
    },
    {
        q: "What if someone is using a fake RakshaAI badge?",
        a: "Report it to support@rakshaai.co and through RakshaAI's scam reporting flow. A fake badge cannot show a valid verification page because each badge ID is unique.",
    },
    {
        q: "My badge stopped showing on my website - what happened?",
        a: "Common causes include an unchanged YOUR-BADGE-ID placeholder, a broken image URL, HTTPS mixed-content issues, or mobile CSS hiding the image.",
    },
    {
        q: "Does my badge update automatically when I renew my plan?",
        a: "Yes. Your verification page updates after renewal and re-verification. The badge image and embed code do not need to change.",
    },
    {
        q: "Can I use the badge on print materials and business cards?",
        a: "Yes. Use the SVG file for print and include the verification URL or a QR code so customers can verify it immediately.",
    },
];

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Display Your RakshaAI Verified Badge",
    totalTime: "PT15M",
    step: [
        {
            "@type": "HowToSection",
            name: "Website",
            itemListElement: [
                { "@type": "HowToStep", name: "Copy embed code", text: "Copy the RakshaAI badge embed code from your verification email." },
                { "@type": "HowToStep", name: "Paste into website", text: "Paste the code in your header, footer, checkout page or product page." },
                { "@type": "HowToStep", name: "Test click", text: "Click the badge and confirm it opens your verification URL." },
            ],
        },
        {
            "@type": "HowToSection",
            name: "WhatsApp Business",
            itemListElement: [
                { "@type": "HowToStep", name: "Edit business profile", text: "Add your verification URL to your WhatsApp Business profile description." },
                { "@type": "HowToStep", name: "Update catalogue", text: "Use your badge in catalogue cover imagery." },
            ],
        },
        {
            "@type": "HowToSection",
            name: "Instagram",
            itemListElement: [
                { "@type": "HowToStep", name: "Add bio link", text: "Add the verification URL to the Instagram website or link-in-bio field." },
                { "@type": "HowToStep", name: "Pin verification post", text: "Post your badge and pin it to your profile grid." },
            ],
        },
        {
            "@type": "HowToSection",
            name: "Email and invoices",
            itemListElement: [
                { "@type": "HowToStep", name: "Upload badge", text: "Upload the 80px or 160px badge to your email signature or invoice template." },
                { "@type": "HowToStep", name: "Link to verification", text: "Link the badge image to your public verification URL." },
            ],
        },
    ],
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.rakshaai.co/" },
        { "@type": "ListItem", position: 2, name: "Trust Certification", item: "https://www.rakshaai.co/trust-certification/" },
        { "@type": "ListItem", position: 3, name: "Badge Display Guide", item: canonicalUrl },
    ],
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "RakshaAI Badge Display Guide - How to Add Your Verified Badge on Every Platform",
    description: "Step-by-step guide for adding a RakshaAI Verified badge to websites, WhatsApp Business, Instagram, email signatures, invoices and marketplaces.",
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
    { value: "9 Platforms", label: "Step-by-step coverage" },
    { value: "15 Min", label: "Total setup time" },
    { value: "12-18%", label: "Avg. checkout uplift" },
    { value: "1-Click", label: "Consumer verification" },
];

const badgePackage = [
    { file: "badge_80px.png", use: "Email signatures, small website footers and compact mobile placements" },
    { file: "badge_160px.png", use: "Website headers, footers and standard web placement" },
    { file: "badge_300px.png", use: "Checkout pages, product pages and catalogue covers" },
    { file: "badge.svg", use: "Print, business cards, packaging and large-format display" },
    { file: "embed-code.html", use: "Copy-paste website snippet linked to your public verification URL" },
    { file: "verification-url.txt", use: "Direct rakshaai.co/verify/[your-badge-id] link for bios and descriptions" },
];

const websitePlacements = [
    ["Website header", "Visible above the fold and acts as the first trust signal."],
    ["Checkout page", "Highest-impact placement because payment hesitation peaks here."],
    ["Website footer", "Persistent reassurance across all pages."],
    ["Product page", "Close to Add to Cart and useful for product-level decisions."],
];

const platformGuides = [
    {
        title: "Platform 2 - WhatsApp Business",
        icon: Smartphone,
        intro: "WhatsApp Business is one of India's strongest seller channels. Put the verification URL where customers naturally check before messaging.",
        steps: [
            "Open WhatsApp Business and go to Business Profile.",
            "Add this to Description: Verified by RakshaAI | GST, Aadhaar and PAN verified | Check: rakshaai.co/verify/[your-badge-id].",
            "Use badge_300px.png on catalogue cover artwork.",
            "Post a WhatsApp Status announcing that your business is RakshaAI Verified.",
        ],
        note: "WhatsApp Business profile photos cannot be hyperlinked directly. Keep the verification URL in the Description field.",
    },
    {
        title: "Platform 3 - Instagram",
        icon: Store,
        intro: "Your Instagram bio and pinned posts turn profile visits into trust checks.",
        steps: [
            "Open Instagram profile and tap Edit Profile.",
            "Add rakshaai.co/verify/[your-badge-id] in the Website or Link in Bio field.",
            "Add a bio line such as: RakshaAI Verified.",
            "Create and pin a verification post or Reel using your badge image.",
        ],
        note: "For Instagram Shop, include the verification URL in your shop description and use the badge in cover imagery.",
    },
    {
        title: "Platform 4 - Email Signature and Invoices",
        icon: Mail,
        intro: "Every email, invoice and proposal can become a trust touchpoint.",
        steps: [
            "For Gmail, open Settings, See all settings, then Signature.",
            "Upload badge_80px.png or badge_160px.png.",
            "Select the badge image and link it to your verification URL.",
            "Add the badge to invoices or proposals near payment terms.",
        ],
        note: "For advance-payment proposals, place the badge near the payment terms section.",
    },
];

const extendedPlatforms = [
    ["Meesho, Flipkart, Amazon", "Add the verification URL to seller profile or About sections where marketplace policy allows."],
    ["Google Business Profile", "Add the verification URL to your business description and upload the badge as a business photo."],
    ["LinkedIn Company Page", "Add the verification URL in Website and About text."],
    ["JustDial Listing", "Add RakshaAI Verified text and the verification URL in your listing description."],
    ["Telegram Channel", "Add the verification URL to channel description and bio."],
    ["QR Code and Print", "Generate a QR code from your verification URL and use it on packaging, receipts and visiting cards."],
    ["Business Card", "Use badge.svg or badge_80px.png and print the verification URL underneath."],
    ["Paytm / PhonePe Business", "Add the verification URL to merchant profile descriptions where supported."],
];

const bestPractices = [
    ["Checkout page - next to Pay Now", "Highest", "Buyer hesitation peaks at payment."],
    ["Above-fold website header", "High", "Every visitor sees it before reading further."],
    ["WhatsApp Business description", "High", "Customers check your profile before starting a chat."],
    ["Product page - below main image", "Medium-High", "Trust signal near Add to Cart."],
    ["Instagram bio", "Medium", "Converts interested profile visitors."],
    ["Email signature", "Medium", "Strong for B2B and service businesses."],
    ["Invoice / proposal", "Medium", "Reduces hesitation around advance payments."],
    ["Website footer", "Medium", "Persistent but usually below the fold."],
    ["Business card / print", "Lower", "Useful for offline verification."],
];

const verificationSteps = [
    ["Consumer sees your badge", "On your website, WhatsApp, Instagram, email or invoice."],
    ["Browser opens verification page", "They land on rakshaai.co/verify/[your-badge-id]."],
    ["Live details are shown", "Business name, Trust Score, checks passed and verification date."],
    ["Badge confirmed", "If valid, trust is established. If fake or expired, the page shows it immediately."],
];

const troubleshooting = [
    ["Badge image is broken", "Check that YOUR-BADGE-ID was replaced and the image URL is https://badge.rakshaai.co/v/[id].png."],
    ["Badge clicks but nothing opens", "Check that href contains your verification URL, not # or a blank value."],
    ["Badge is too large or small", "Use width 160 height 60 for standard web placement, 80px for compact areas and 300px for checkout."],
    ["Badge appears on desktop but not mobile", "Check mobile CSS for display:none, visibility:hidden or layout overflow."],
    ["Verification URL shows Certificate Expired", "Your plan has lapsed. Renew from the pricing page to restore valid status."],
    ["Wrong business name appears", "Contact support@rakshaai.co with your Application Reference Number."],
];

const relatedLinks = [
    { label: "Apply for Verified Badge", href: "/trust-certification/apply/", text: "Start your 10-minute application" },
    { label: "Verified Businesses Directory", href: "/trust-certification/verified-businesses/", text: "See your live directory listing" },
    { label: "How It Works", href: "/trust-certification/how-it-works/", text: "Full verification process explanation" },
    { label: "Pricing Plans", href: "/trust-certification/pricing/", text: "Monthly, quarterly and yearly plans" },
    { label: "Website Safety Checker", href: "/website-safety-checker/", text: "Check any website for scams" },
];

export default function BadgeDisplayGuidePage() {
    return (
        <DefaultLayout>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLd([howToSchema, breadcrumbSchema, faqSchema, articleSchema]) }}
            />

            <main className="min-h-screen bg-white dark:bg-gray-950">
                <section className="border-b border-gray-200 bg-gradient-to-b from-cyan-50 via-white to-white px-4 pb-14 pt-16 dark:border-gray-800 dark:from-gray-900 dark:via-gray-950 dark:to-gray-950">
                    <div className="mx-auto max-w-6xl">
                        <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                            <Link href="/" className="hover:text-cyan-700 dark:hover:text-cyan-300">Home</Link>
                            <ChevronRight className="h-4 w-4" />
                            <Link href="/trust-certification/" className="hover:text-cyan-700 dark:hover:text-cyan-300">Trust Certification</Link>
                            <ChevronRight className="h-4 w-4" />
                            <span className="font-semibold text-gray-800 dark:text-gray-200">Badge Display Guide</span>
                        </nav>

                        <div className="mx-auto max-w-4xl text-center">
                            <div className="mb-6 inline-flex items-center gap-2 rounded-lg border border-cyan-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-cyan-700 shadow-sm dark:border-cyan-900 dark:bg-gray-900 dark:text-cyan-300">
                                <BadgeCheck className="h-4 w-4" />
                                Add Your Badge Everywhere
                            </div>
                            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-950 dark:text-white sm:text-5xl">
                                RakshaAI Badge Display Guide - How to Add Your Verified Badge on Every Platform
                            </h1>
                            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                                You have received your RakshaAI Trust Certificate and badge files. Now put your badge in front of customers at the exact moments they decide whether to trust you.
                            </p>
                            <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-gray-600 dark:text-gray-400">
                                This guide covers your website, WhatsApp Business, Instagram, email signatures, invoices, marketplaces, Google Business Profile, print and QR code placements.
                            </p>

                            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                                <Link href="/trust-certification/apply/" className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-700 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-cyan-700/20 hover:bg-cyan-800">
                                    Not Verified Yet? Apply First <ArrowRight className="h-4 w-4" />
                                </Link>
                                <a href="#website" className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-7 py-3.5 text-sm font-bold text-gray-800 hover:border-cyan-300 hover:text-cyan-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-cyan-700 dark:hover:text-cyan-300">
                                    Start Setup <ChevronRight className="h-4 w-4" />
                                </a>
                            </div>
                        </div>

                        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
                            {heroStats.map(({ value, label }) => (
                                <div key={label} className="rounded-lg border border-gray-200 bg-white p-5 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900">
                                    <p className="text-2xl font-extrabold text-cyan-700 dark:text-cyan-300">{value}</p>
                                    <p className="mt-1 text-xs font-medium leading-tight text-gray-500 dark:text-gray-400">{label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="mx-auto max-w-6xl space-y-20 px-4 py-16 sm:px-6 lg:px-8">
                    <section aria-labelledby="package-heading">
                        <SectionHeader
                            eyebrow="Badge Package"
                            title="What You Received - Your Badge Package"
                            description="Open your verification email and keep these files ready before working through the platform steps."
                        />

                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {badgePackage.map(({ file, use }) => (
                                <div key={file} className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                                    <ImageIcon className="mb-4 h-6 w-6 text-cyan-700 dark:text-cyan-300" />
                                    <h3 className="font-extrabold text-gray-950 dark:text-white">{file}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{use}</p>
                                </div>
                            ))}
                        </div>

                        <InfoNote icon={Shield}>
                            Your image files do not expire. Your plan subscription controls whether the verification URL shows a valid certificate or an expired status.
                        </InfoNote>
                    </section>

                    <section id="website" aria-labelledby="website-heading">
                        <SectionHeader
                            eyebrow="Platform 1"
                            title="Your Website - Highest Impact"
                            description="Place the badge where customers need reassurance: header, footer, product pages and especially checkout."
                        />

                        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
                            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                                <div className="mb-4 flex items-center gap-3">
                                    <Code2 className="h-6 w-6 text-cyan-700 dark:text-cyan-300" />
                                    <h3 className="font-extrabold text-gray-950 dark:text-white">Option A - Embed Code</h3>
                                </div>
                                <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                                    Paste this HTML where you want the badge to appear. Replace YOUR-BADGE-ID with the ID from your verification email.
                                </p>
                                <pre className="overflow-x-auto rounded-lg bg-gray-950 p-4 text-xs leading-relaxed text-cyan-100">
                                    <code>{embedCode}</code>
                                </pre>
                            </div>

                            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                                <div className="mb-4 flex items-center gap-3">
                                    <MonitorSmartphone className="h-6 w-6 text-cyan-700 dark:text-cyan-300" />
                                    <h3 className="font-extrabold text-gray-950 dark:text-white">Option B - Image + Link</h3>
                                </div>
                                <StepList
                                    steps={[
                                        "Download badge_160px.png for most website uses.",
                                        "Add an Image element in Wix, Shopify, WordPress, Webflow, Squarespace or your site builder.",
                                        "Upload the badge PNG.",
                                        "Set the image link to rakshaai.co/verify/[your-badge-id].",
                                        "Open the link in a new tab and add alt text for accessibility.",
                                    ]}
                                />
                            </div>
                        </div>

                        <Table
                            className="mt-6"
                            headers={["Location", "Why It Works"]}
                            rows={websitePlacements}
                        />
                    </section>

                    {platformGuides.map(({ title, icon: Icon, intro, steps, note }) => (
                        <section key={title} aria-labelledby={`${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-heading`}>
                            <SectionHeader eyebrow="Platform Setup" title={title} description={intro} />
                            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                                <div className="mb-5 flex items-center gap-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-700 text-white">
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <h3 className="font-extrabold text-gray-950 dark:text-white">Setup steps</h3>
                                </div>
                                <StepList steps={steps} />
                                <InfoNote icon={AlertTriangle}>{note}</InfoNote>
                            </div>
                        </section>
                    ))}

                    <section aria-labelledby="more-platforms-heading">
                        <SectionHeader
                            eyebrow="Platforms 5-9"
                            title="Marketplaces, LinkedIn, Google and More"
                            description="After your website, WhatsApp and Instagram are set up, extend the same verification signal across every channel where customers find you."
                        />
                        <Table headers={["Platform", "How to Add Your Badge"]} rows={extendedPlatforms} />
                    </section>

                    <section aria-labelledby="best-practices-heading">
                        <SectionHeader
                            eyebrow="Best Practices"
                            title="Badge Display Best Practices - Where It Converts Best"
                            description="Not all placements are equal. Put the badge closest to the customer's trust decision."
                        />
                        <Table headers={["Placement", "Conversion Impact", "Why It Works"]} rows={bestPractices} />
                        <div className="mt-6 rounded-lg border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-900 dark:bg-emerald-950/20">
                            <p className="text-sm leading-relaxed text-emerald-900 dark:text-emerald-200">
                                Businesses that place the badge on checkout pages report an average 12-18% reduction in cart abandonment. For an online business doing Rs. 10 lakh per year, that can mean Rs. 1.2-1.8 lakh in recovered revenue.
                            </p>
                        </div>
                    </section>

                    <section aria-labelledby="verify-heading">
                        <SectionHeader
                            eyebrow="Consumer Verification"
                            title="How Consumers Verify Your Badge Is Real"
                            description="Your badge is valuable because customers can check it directly from RakshaAI's public verification page."
                        />
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                            {verificationSteps.map(([title, text], index) => (
                                <div key={title} className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-700 text-sm font-extrabold text-white">
                                        {index + 1}
                                    </div>
                                    <h3 className="font-extrabold text-gray-950 dark:text-white">{title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{text}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section aria-labelledby="troubleshooting-heading">
                        <SectionHeader
                            eyebrow="Troubleshooting"
                            title="Badge Not Showing or Not Linking Correctly"
                            description="Most badge display issues are caused by a missing badge ID, incorrect link, image sizing or mobile CSS."
                        />
                        <Table headers={["Problem", "Solution"]} rows={troubleshooting} />
                        <div className="mt-6 text-center">
                            <Link href="/trust-certification/verified-businesses/" className="inline-flex items-center gap-2 rounded-lg bg-cyan-700 px-5 py-3 text-sm font-bold text-white hover:bg-cyan-800">
                                View Verified Businesses <Search className="h-4 w-4" />
                            </Link>
                        </div>
                    </section>

                    <section aria-labelledby="faq-heading">
                        <SectionHeader
                            eyebrow="FAQ"
                            title="Frequently Asked Questions"
                            description="Common questions about adding, linking, verifying and troubleshooting your RakshaAI badge."
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
                            <Link href="/trust-certification/faq/" className="inline-flex items-center gap-2 text-sm font-bold text-cyan-700 hover:underline dark:text-cyan-300">
                                More questions? See full FAQ <ChevronRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </section>

                    <section aria-labelledby="related-heading">
                        <SectionHeader
                            eyebrow="Related Pages"
                            title="Related Pages and Free Safety Tools"
                            description="Continue through the trust certification cluster or use RakshaAI's free consumer safety tools."
                        />
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                            {relatedLinks.map(({ label, href, text }) => (
                                <Link key={label} href={href} className="group rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition hover:border-cyan-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-cyan-800">
                                    <h3 className="font-extrabold text-gray-950 transition group-hover:text-cyan-700 dark:text-white dark:group-hover:text-cyan-300">{label}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{text}</p>
                                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-cyan-700 dark:text-cyan-300">
                                        Open <ArrowRight className="h-4 w-4" />
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </section>

                    <section>
                        <div className="grid gap-5 md:grid-cols-2">
                            <div className="rounded-lg bg-cyan-700 p-8 text-center text-white">
                                <ShieldCheck className="mx-auto mb-4 h-9 w-9 text-cyan-100" />
                                <h2 className="text-2xl font-extrabold">Still Setting Up? Your Badge Files Are in Your Verification Email</h2>
                                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-cyan-50">
                                    Not verified yet? Apply in 10 minutes and receive your badge package after verification approval.
                                </p>
                                <Link href="/trust-certification/apply/" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-bold text-cyan-700 hover:bg-cyan-50">
                                    Apply for Your Badge <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>

                            <div className="rounded-lg border border-red-200 bg-red-50 p-8 text-center dark:border-red-900 dark:bg-red-950/20">
                                <AlertTriangle className="mx-auto mb-4 h-9 w-9 text-red-600 dark:text-red-300" />
                                <h2 className="text-2xl font-extrabold text-gray-950 dark:text-white">Found a Fake Badge?</h2>
                                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                                    If a badge does not verify at rakshaai.co/verify/[id], report it so other customers are protected.
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
            <p className="text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-300">{eyebrow}</p>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-950 dark:text-white">{title}</h2>
            <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-400">{description}</p>
        </div>
    );
}

function StepList({ steps }: { steps: string[] }) {
    return (
        <ol className="space-y-3">
            {steps.map((step, index) => (
                <li key={step} className="flex gap-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md bg-cyan-50 text-xs font-extrabold text-cyan-700 dark:bg-cyan-950/30 dark:text-cyan-300">
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
                                <td key={`${row[0]}-${index}`} className={`px-5 py-4 ${index === 0 ? "font-extrabold text-cyan-700 dark:text-cyan-300" : "text-gray-600 dark:text-gray-400"}`}>
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
