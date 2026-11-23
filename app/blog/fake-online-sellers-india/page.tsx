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
    CheckCircle2,
    Clock,
    CreditCard,
    Image as ImageIcon,
    Search,
    ShoppingBag,
    Smartphone,
    Store,
} from "lucide-react";

const slug = "fake-online-sellers-india";
const canonicalUrl = "https://www.rakshaai.co/blog/fake-online-sellers-india/";
const heroImage = "/blog/olx-scam-india/olx-scam-hero.webp";

export const metadata: Metadata = {
    title: {
        absolute: "Fake Online Sellers India - 8 Warning Signs + Platform Guide",
    },
    description:
        "Learn how to spot fake online sellers in India on WhatsApp, Instagram, Meesho, Flipkart and OLX. 8 red flags, platform-specific steps, and what to do if you've been scammed.",
    keywords:
        "fake online sellers India, how to spot fake seller India, WhatsApp seller scam India, Instagram seller scam India, OLX fake seller India, Meesho seller scam India",
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
        title: "Fake Online Sellers India - 8 Warning Signs + Platform Guide",
        description:
            "Spot fake sellers on WhatsApp, Instagram, Meesho, Flipkart, Amazon and OLX before you pay.",
        url: canonicalUrl,
        type: "article",
        siteName: "RakshaAI",
        publishedTime: "2026-07-02T00:00:00.000Z",
        modifiedTime: "2026-07-02T00:00:00.000Z",
        tags: ["Fake Seller", "Online Shopping Fraud", "E-Commerce Fraud", "UPI Fraud"],
        images: [
            {
                url: heroImage,
                width: 1200,
                height: 800,
                alt: "Fake online seller scam India warning",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Fake Online Sellers India",
        description: "8 warning signs and platform-specific checks before paying any online seller.",
        images: [heroImage],
    },
};

const faqs = [
    {
        q: "How do I know if an online seller is fake?",
        a: "Look for these signs: price far below market, WhatsApp-only contact, stolen product photos, no return policy, no GST number, recently created account, fake reviews, and advance payment to a personal UPI account. Three or more signs means do not pay.",
    },
    {
        q: "How do I verify a seller on WhatsApp?",
        a: "Ask for GSTIN and verify it at gst.gov.in. Check the seller UPI ID at RakshaAI before paying. Confirm whether they use WhatsApp Business, verify their address, and reverse image search the product photos.",
    },
    {
        q: "Is this seller real or fake?",
        a: "Run a 3-step check: scan the seller website on RakshaAI, check the UPI ID before paying, and search whether the seller appears in the RakshaAI Verified Businesses directory.",
    },
    {
        q: "Can I get money back after paying a fake seller?",
        a: "Your best chance is to call 1930 within 30 minutes, raise a UPI or bank dispute, file at cybercrime.gov.in, and report the seller to RakshaAI. Recovery probability drops quickly after the first few hours.",
    },
    {
        q: "I paid advance and the seller blocked me. What do I do?",
        a: "Immediately call 1930 with transaction details, raise a dispute in your UPI app, file at cybercrime.gov.in, save all screenshots, and report the seller to RakshaAI before their account disappears.",
    },
    {
        q: "How do I report a fake seller in India?",
        a: "Report financial fraud at cybercrime.gov.in and call 1930 if money is lost. For high-value losses, file an FIR at your nearest Cyber Crime Cell. Also report the seller to RakshaAI to warn other buyers.",
    },
    {
        q: "Is it safe to buy on Meesho or OLX?",
        a: "Meesho has platform buyer protection when you pay inside the app. OLX has no built-in buyer protection, so never pay advance and meet in a safe public place for high-value items.",
    },
    {
        q: "How do I check if a Flipkart or Amazon seller is genuine?",
        a: "Check Sold By, seller rating, review history, time active and fulfillment type. Prefer platform-fulfilled listings and never pay outside Flipkart or Amazon, no matter what the seller offers.",
    },
    {
        q: "What is the fake tracking number scam?",
        a: "After receiving payment, the seller sends a tracking number that belongs to another package, another address or no shipment at all. Verify tracking only on the courier's official website.",
    },
    {
        q: "What should I check before paying a seller UPI ID?",
        a: "Check the UPI ID on RakshaAI and confirm the registered name matches the seller or business name. If the payment screen shows an unrelated personal name, stop.",
    },
];

const articleSchema = blogPostingSchema({
    headline: "Fake Online Sellers in India - 8 Red Flags and Platform-by-Platform Safety Guide",
    description:
        "A guide to spotting fake online sellers on WhatsApp, Instagram, Meesho, Flipkart, Amazon, OLX and classifieds platforms before paying.",
    url: "/blog/fake-online-sellers-india/",
    image: heroImage,
    datePublished: "2026-07-02T00:00:00.000Z",
    dateModified: "2026-07-02T00:00:00.000Z",
    author: {
        "@type": "Organization",
        name: "RakshaAI",
        url: "https://www.rakshaai.co/",
    },
    section: "E-Commerce Fraud",
    keywords: [
        "fake online sellers India",
        "WhatsApp seller scam India",
        "Instagram seller scam India",
        "OLX fake seller India",
        "Meesho seller scam India",
    ],
    wordCount: 3200,
});

const breadcrumbSchema = breadcrumbListSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: "Fake Online Sellers India", url: "/blog/fake-online-sellers-india/" },
]);

const faqSchema = faqPageSchema(faqs.map((faq) => ({ question: faq.q, answer: faq.a })));

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Spot a Fake Seller",
    totalTime: "PT15M",
    step: [
        { "@type": "HowToSection", name: "Check universal red flags", itemListElement: [{ "@type": "HowToStep", name: "Review warning signs", text: "Check price, seller identity, photos, return policy, GST, account age, reviews and payment account." }] },
        { "@type": "HowToSection", name: "Check payment request", itemListElement: [{ "@type": "HowToStep", name: "Avoid personal UPI advance", text: "Do not pay unknown sellers via personal UPI for high-value purchases." }] },
        { "@type": "HowToSection", name: "Verify WhatsApp sellers", itemListElement: [{ "@type": "HowToStep", name: "Check GST and UPI", text: "Ask for GSTIN, check the UPI ID and verify WhatsApp Business details." }] },
        { "@type": "HowToSection", name: "Verify Instagram and Facebook sellers", itemListElement: [{ "@type": "HowToStep", name: "Check account quality", text: "Review account age, engagement, tagged products, seller profile history and off-platform payment requests." }] },
        { "@type": "HowToSection", name: "Verify marketplace sellers", itemListElement: [{ "@type": "HowToStep", name: "Stay on platform", text: "Check seller rating and fulfillment status, then pay only inside Meesho, Flipkart or Amazon." }] },
        { "@type": "HowToSection", name: "Verify OLX and classifieds sellers", itemListElement: [{ "@type": "HowToStep", name: "Avoid advance", text: "Meet safely, verify ownership documents and never send advance payment." }] },
        { "@type": "HowToSection", name: "Check seller website and UPI", itemListElement: [{ "@type": "HowToStep", name: "Use free checks", text: "Scan seller website and UPI ID on RakshaAI before payment." }] },
        { "@type": "HowToSection", name: "Report quickly if scammed", itemListElement: [{ "@type": "HowToStep", name: "Call 1930", text: "Call 1930, raise a bank dispute, file on cybercrime.gov.in and report the seller to RakshaAI." }] },
    ],
};

const heroStats = [
    ["Rs. 22,845 Cr", "Cyber fraud loss, India 2024"],
    ["#1 Platform", "WhatsApp for seller fraud"],
    ["8 Red Flags", "Covered in this guide"],
    ["Free Check", "Website + UPI ID"],
];

const scamTypes = [
    ["Advance payment fraud", "Seller asks for full or partial advance via UPI, then blocks the buyer or demands more money.", "WhatsApp, OLX, Instagram"],
    ["COD fake package", "Cash-on-delivery package contains bricks, sand, empty box or a cheap substitute.", "Meesho, Flipkart third-party, fake sites"],
    ["Fake tracking number", "Seller sends tracking details for another package or a shipment that does not exist.", "WhatsApp, Instagram, OLX"],
    ["Counterfeit product", "A low-quality or wrong-brand product arrives, and the seller becomes unreachable for returns.", "Facebook Marketplace, Meesho, Amazon third-party"],
    ["Fake escrow payment", "Seller sends the buyer to a fake escrow service controlled by the scammer.", "OLX, LinkedIn, high-value sales"],
];

const redFlags = [
    "Price is 40% or more below market with no credible explanation.",
    "Seller is reachable only on WhatsApp and has no website, email or verified profile.",
    "Product photos are stolen from another site or brand page.",
    "No return or refund policy is shared.",
    "GST number is not provided when asked.",
    "Account was created recently, often days or weeks ago.",
    "Reviews look recycled, copied or posted by new accounts.",
    "Advance payment is required via personal UPI account.",
];

const paymentRows = [
    ["Pay 50% advance to confirm order", "Classic fake seller trick. After advance, the seller may block you or demand the rest before shipping."],
    ["Pay to our secure escrow service", "The escrow is controlled by the scammer. No independent protection exists."],
    ["Pay via UPI request I send", "Some requests are designed to make money leave your account while looking like a receive flow."],
    ["COD, pay only on delivery", "COD can still be unsafe if the package contains a fake item and the seller disappears."],
    ["Bank transfer for discount", "Moving off platform removes buyer protection and makes recovery harder."],
];

const platformGuides = [
    {
        id: "whatsapp",
        title: "Platform Guide 1 - WhatsApp Sellers",
        icon: Smartphone,
        intro: "WhatsApp is the highest-risk seller-fraud channel because there is no built-in buyer protection and sellers can disappear instantly.",
        checks: [
            "Ask for GSTIN and verify it at gst.gov.in.",
            "Check the seller UPI ID at RakshaAI before paying.",
            "Confirm whether the account is WhatsApp Business, not only a personal number.",
            "Ask for website, Google Business Profile or physical address and verify independently.",
            "Reverse image search product photos using WhatsApp Web or Google Lens.",
            "Before confirming UPI, check whether the displayed name matches the seller's stated business name.",
        ],
        warning: "If a WhatsApp seller wants advance payment to a personal UPI ID, sends a payment link, or refuses GST/address details, stop immediately.",
    },
    {
        id: "instagram-facebook",
        title: "Platform Guide 2 - Instagram and Facebook Sellers",
        icon: ImageIcon,
        intro: "Instagram and Facebook seller scams rely on attractive product photos, urgency and direct-message payments outside any buyer-protection system.",
        checks: [
            "Check Instagram account age from About this account where available.",
            "Compare followers with engagement. Huge follower count with almost no comments can mean purchased followers.",
            "Check whether products are tagged through Instagram Shopping.",
            "On Facebook Marketplace, inspect profile age, reviews and history.",
            "Never pay off-platform when platform checkout or buyer protection is available.",
            "Scan any seller website and UPI ID before payment.",
        ],
        warning: "The common pattern is stolen product photos, low price, only a few items left, DM payment request, then blocked after payment.",
    },
    {
        id: "marketplaces",
        title: "Platform Guide 3 - Meesho, Flipkart and Amazon Sellers",
        icon: ShoppingBag,
        intro: "Marketplaces are safer when payment stays inside the platform, but third-party sellers and counterfeit-product scams still happen.",
        checks: [
            "On Meesho, prefer 4.5+ seller rating, strong order history and recent genuine reviews.",
            "Avoid sellers with all five-star reviews posted in the last few days.",
            "On Flipkart, check Sold By, rating, seller age and return policy.",
            "On Amazon, prefer Fulfilled by Amazon listings for higher logistics control.",
            "If product arrives counterfeit, record photos and video before raising the dispute.",
            "Never pay a marketplace seller outside the platform for a better price.",
        ],
        warning: "Platform buyer protection usually applies only when payment and checkout happen inside the platform.",
    },
    {
        id: "olx",
        title: "Platform Guide 4 - OLX and Classifieds Platforms",
        icon: Store,
        intro: "OLX and classifieds are high-risk because payments and delivery usually happen outside the platform. Treat every advance request as suspicious.",
        checks: [
            "Never pay advance on OLX. There is no platform dispute mechanism for off-platform payments.",
            "Meet in a safe public place such as a mall, bank lobby or police station area.",
            "For vehicles and electronics, verify ownership documents before paying.",
            "For vehicles, verify RC details at parivahan.gov.in.",
            "Ask for identity proof where appropriate and match the seller name.",
            "Verify tracking numbers only on the courier's official website.",
        ],
        warning: "If the seller refuses in-person verification for a high-value item, walk away.",
    },
];

const rules = [
    ["Check before paying", "Scan seller website, UPI ID and seller name before any high-value payment."],
    ["Pay on-platform only", "Platform payment keeps buyer protection. Personal UPI removes it."],
    ["Never pay full advance", "For unknown sellers, full advance is the most common path to fraud."],
    ["Reverse image search", "If product photos appear on another store, the seller may not own the product."],
    ["Check GST above Rs. 5,000", "Ask for GSTIN and verify it at gst.gov.in for regular sellers."],
    ["Verify UPI name match", "The payment screen name should match seller or business identity."],
];

const recoverySteps = [
    ["Within 30 min", "Call 1930", "Report transaction amount, time, seller UPI or bank details and platform used."],
    ["Within 1 hour", "Call bank and UPI app", "Raise a transaction dispute and request freeze or reversal action."],
    ["Within 24 hours", "File at cybercrime.gov.in", "Attach screenshots, transaction records and seller contact details."],
    ["Within 48 hours", "Use consumer channels", "For larger losses, contact National Consumer Helpline or consumerhelpline.gov.in."],
    ["Within 7 days", "File FIR and platform dispute", "Use Cyber Crime Cell where possible and raise Meesho, Flipkart or Amazon disputes if platform payment was used."],
];

const statsRows = [
    ["Total cyber fraud loss in 2024", "Rs. 22,845 crore", "MHA / I4C reporting"],
    ["Tier 2/3 city exposure", "2.8x higher fake seller encounter risk", "RakshaAI internal data"],
    ["Fraud complaints", "15+ lakh complaints", "NCRP / MHA reporting"],
    ["WhatsApp seller fraud share", "Estimated 38% of fake seller cases", "Cyber safety advisories"],
    ["Social commerce growth", "62% year-over-year fraud growth", "CERT-In and platform-risk reporting"],
    ["Average advance-payment loss", "Approx. Rs. 18,000", "Cybercrime reporting patterns"],
];

const relatedTools = [
    ["Website Safety Checker", "Check any seller website for fraud signals", "/website-safety-checker/"],
    ["UPI ID Checker", "Check seller UPI ID before paying", "/upi-id-checker/"],
    ["Verified Businesses Directory", "Find businesses verified across RakshaAI checks", "/trust-certification/verified-businesses/"],
    ["E-Commerce Fraud Guide", "Full guide to online shopping fraud in India", "/scams/e-commerce-fraud/"],
    ["How to Verify a Business", "8 methods to verify any business before paying", "/blog/how-to-verify-a-business-india/"],
    ["UPI Fraud Guide", "Understand UPI traps used by fake sellers", "/scams/upi-fraud/"],
];

export default function FakeOnlineSellersIndiaPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLd([articleSchema, breadcrumbSchema, faqSchema, howToSchema]) }}
            />
            <BlogLayout
                title="Fake Online Sellers in India - 8 Red Flags and a Platform-by-Platform Guide to Staying Safe"
                description="Learn how fake sellers operate on WhatsApp, Instagram, Meesho, Flipkart, Amazon and OLX, plus the exact checks to run before paying."
                publishedAt="2026-07-02T00:00:00.000Z"
                lastUpdated="2026-07-02T00:00:00.000Z"
                readTime="12 min"
                author="RakshaAI"
                authorUrl="/about"
                primaryTool={{ label: "Check a seller website", href: "/website-safety-checker/" }}
                tags={["E-Commerce Fraud", "Fake Sellers", "UPI Safety", "Online Shopping"]}
                slug={slug}
            >
                <div className="not-prose mb-10 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
                    <Image
                        src={heroImage}
                        alt="Fake online seller scam India warning"
                        width={1200}
                        height={800}
                        className="w-full object-cover"
                        priority
                    />
                    <p className="px-4 pb-4 pt-2 text-center text-xs italic text-gray-500 dark:text-gray-400">
                        Fake sellers use urgency, stolen photos and off-platform payments to remove your buyer protection.
                    </p>
                </div>

                <p>
                    India has a growing <strong>fake online sellers</strong> problem. Sellers on WhatsApp, Instagram, Meesho, OLX and Facebook Marketplace take money, ship nothing, ship a counterfeit or send a fake tracking number to buy time.
                </p>
                <p>
                    This guide covers 8 universal red flags and platform-specific checks for WhatsApp, Instagram, Facebook, Meesho, Flipkart, Amazon and OLX. If you have already paid a fake seller, skip to the recovery section and act quickly.
                </p>

                <div className="not-prose my-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {heroStats.map(([value, label]) => (
                        <div key={label} className="rounded-2xl border border-orange-100 bg-orange-50 p-5 text-center dark:border-orange-900 dark:bg-orange-950/20">
                            <p className="text-2xl font-extrabold text-orange-700 dark:text-orange-300">{value}</p>
                            <p className="mt-1 text-xs font-semibold text-gray-600 dark:text-gray-400">{label}</p>
                        </div>
                    ))}
                </div>

                <Callout
                    icon={Search}
                    title="Check any seller website right now"
                    text="Paste the seller website into RakshaAI and check for scam reports, suspicious domain signals and fraud patterns before you pay."
                    href="/website-safety-checker/"
                    label="Check Seller Website"
                />

                <h2>How Fake Online Seller Scams Work in India</h2>
                <p>
                    Fake sellers follow repeatable playbooks. The victim usually sees a product they want at a believable discount, the seller builds enough trust with photos and fake reviews, then payment is moved to a channel with no buyer protection.
                </p>
                <Table headers={["Scam Type", "How It Works", "Most Common Platform"]} rows={scamTypes} />

                <h2>8 Universal Red Flags - Spot a Fake Seller on Any Platform</h2>
                <p>
                    These signs apply regardless of where you found the seller. If you see three or more, do not pay until you verify the seller independently.
                </p>
                <div className="not-prose my-6 grid gap-3 md:grid-cols-2">
                    {redFlags.map((flag) => (
                        <div key={flag} className="flex gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-900 dark:border-red-900 dark:bg-red-950/20 dark:text-red-200">
                            <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                            <span>{flag}</span>
                        </div>
                    ))}
                </div>
                <p>
                    The fastest single check is to search the seller website and UPI ID on RakshaAI. If other users reported the same seller, phone number, UPI ID or website, you can see the warning before you pay.
                </p>

                <h2>The Payment Trap - How Fake Sellers Get Your Money</h2>
                <p>
                    Payment is where fake sellers become dangerous. They try to move you away from platform protections and into direct UPI, bank transfer, fake escrow or misleading payment requests.
                </p>
                <Table headers={["Payment Request", "What It Actually Means"]} rows={paymentRows} />
                <InfoBox>
                    Golden rule: never pay via personal UPI for a transaction above Rs. 1,000 with an unknown seller. Pay on-platform where buyer protection exists.
                </InfoBox>

                {platformGuides.map((guide) => (
                    <PlatformSection key={guide.id} guide={guide} />
                ))}

                <Callout
                    icon={CreditCard}
                    title="Check any seller UPI ID before paying"
                    text="RakshaAI UPI ID Checker helps you review the registered name and fraud-report signals before you send money."
                    href="/upi-id-checker/"
                    label="Check UPI ID"
                />

                <h2>6 Rules That Protect You From Fake Sellers</h2>
                <p>
                    These habits work across every platform. They are simple, but they interrupt the exact flow scammers rely on.
                </p>
                <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
                    {rules.map(([title, text], index) => (
                        <div key={title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                            <div className="mb-3 flex items-center gap-3">
                                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-sm font-extrabold text-white">{index + 1}</span>
                                <h3 className="font-extrabold text-gray-950 dark:text-white">{title}</h3>
                            </div>
                            <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">{text}</p>
                        </div>
                    ))}
                </div>

                <h2>Already Paid a Fake Seller? How to Report and Recover</h2>
                <p>
                    Act within 30 minutes for the best chance of recovery. Every hour reduces the chance that the destination account can be frozen.
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
                    <h3 className="text-2xl font-extrabold">Spotted a Fake Seller?</h3>
                    <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-red-50">
                        Report the seller to RakshaAI so other buyers can see fraud signals before paying the same phone number, UPI ID or website.
                    </p>
                    <ReportScamButton className="mt-6 inline-flex cursor-pointer items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-red-700 hover:bg-red-50">
                        Report a Scam <ArrowRight className="h-4 w-4" />
                    </ReportScamButton>
                </div>

                <h2>Fake Seller Statistics in India - The Scale of the Problem</h2>
                <p>
                    Verification feels like extra effort until you see the scale. Fake seller fraud is no longer rare. It is part of everyday online shopping risk in India.
                </p>
                <Table headers={["Metric", "Figure", "Source"]} rows={statsRows} />

                <h2>Frequently Asked Questions</h2>
                {faqs.map(({ q, a }) => (
                    <div key={q}>
                        <h3>{q}</h3>
                        <p>{a}</p>
                    </div>
                ))}

                <h2>Related Free Safety Tools and Guides</h2>
                <Table headers={["Resource", "What It Does", "URL"]} rows={relatedTools} linkColumn={2} />

                <p>
                    The safest habit is simple: check before you pay. If the seller pushes you to pay fast, leave the platform, ignore verification or use a personal UPI account, that urgency is the warning.
                </p>
            </BlogLayout>
        </>
    );
}

function PlatformSection({
    guide,
}: {
    guide: {
        id: string;
        title: string;
        icon: LucideIcon;
        intro: string;
        checks: string[];
        warning: string;
    };
}) {
    const Icon = guide.icon;

    return (
        <section id={guide.id} className="scroll-mt-24">
            <h2>{guide.title}</h2>
            <p>{guide.intro}</p>
            <div className="not-prose my-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-600 text-white">
                        <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-extrabold text-gray-950 dark:text-white">Verification checklist</h3>
                </div>
                <ul className="grid gap-3">
                    {guide.checks.map((check) => (
                        <li key={check} className="flex gap-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600 dark:text-emerald-300" />
                            <span>{check}</span>
                        </li>
                    ))}
                </ul>
                <InfoBox>{guide.warning}</InfoBox>
            </div>
        </section>
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
                            <th key={header} className="px-5 py-4 text-left font-bold text-gray-950 dark:text-white">{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {rows.map((row) => (
                        <tr key={row.join("-")} className="bg-white dark:bg-gray-800">
                            {row.map((cell, index) => (
                                <td key={`${row[0]}-${index}`} className={`px-5 py-4 ${index === 0 ? "font-extrabold text-orange-700 dark:text-orange-300" : "text-gray-700 dark:text-gray-300"}`}>
                                    {linkColumn === index ? (
                                        <Link href={cell} className="font-semibold text-orange-700 hover:underline dark:text-orange-300">
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

function InfoBox({ children }: { children: ReactNode }) {
    return (
        <div className="not-prose mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-900 dark:border-amber-900 dark:bg-amber-950/20 dark:text-amber-200">
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
        <div className="not-prose my-8 rounded-2xl border border-orange-200 bg-orange-50 p-6 dark:border-orange-900 dark:bg-orange-950/20">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex gap-4">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-orange-600 text-white">
                        <Icon className="h-5 w-5" />
                    </div>
                    <div>
                        <h3 className="text-lg font-extrabold text-gray-950 dark:text-white">{title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-300">{text}</p>
                    </div>
                </div>
                <Link href={href} className="inline-flex flex-shrink-0 items-center justify-center gap-2 rounded-xl bg-orange-600 px-5 py-3 text-sm font-bold text-white hover:bg-orange-700">
                    {label} <ArrowRight className="h-4 w-4" />
                </Link>
            </div>
        </div>
    );
}
