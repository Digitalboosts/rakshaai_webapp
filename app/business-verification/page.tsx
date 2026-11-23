import { Metadata } from "next";
import Link from "next/link";
import DefaultLayout from "@/components/DefaultLayout";
import { jsonLd, organizationRef } from "@/lib/seo/schema";
import {
    BadgeCheck,
    ShieldCheck,
    Building2,
    CreditCard,
    Fingerprint,
    FileText,
    Award,
    Crown,
    TrendingUp,
    Globe,
    Lock,
    CheckCircle,
    ArrowRight,
    Star,
    Zap,
    ChevronRight,
    X,
    XCircle,
    AlertTriangle,
    Store,
    Laptop,
    Wrench,
    Package,
    Phone,
    Sparkles,
    CircleDollarSign,
    Handshake,
    LogIn,
} from "lucide-react";

// ── Metadata ──────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
    title: "Business Verification India | GST Verification, Company Check & Trust Badge",
    description:
        "Get your Indian business officially verified by RakshaAI. GST, Aadhaar, PAN, MCA & Udyam checks. Display a trust badge. 100% online.",
    keywords: [
        "business verification india",
        "gst verification",
        "gst verification india",
        "gst number verification",
        "gst search business",
        "company registration check india",
        "company verification india",
        "verify business india",
        "how to verify a business in india",
        "business legitimacy check",
        "business verification for indian businesses",
        "website verification for business india",
        "raksha trust badge",
        "how to verify business online india",
        "gst verified business badge",
        "aadhaar kyc business india",
        "pan verification business",
        "mca company verification",
        "udyam verification",
        "msme business verification",
        "bank account verification business",
        "trusted business certificate india",
        "online business trust badge india",
        "rakshaai business verification",
        "verified business profile india",
        "business fraud prevention india",
        "digital trust badge india",
        "trusted seller badge india",
        "business trust badge for website",
    ],
    alternates: {
        canonical: "https://rakshaai.co/business-verification",
    },
    openGraph: {
        title: "Business Verification India | GST Verification, Company Check & Trust Badge",
        description:
            "Verify your business with GST, Aadhaar, PAN, MCA, Udyam and bank account checks. Earn the Raksha Trust Badge and help customers confirm your business is legitimate before they pay.",
        type: "website",
        url: "https://rakshaai.co/business-verification",
        siteName: "RakshaAI",
        images: [
            {
                url: "https://rakshaai.co/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "RakshaAI Business Verification Raksha Trust Badge",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Business Verification India | GST Verification & Company Check",
        description:
            "Get GST verification, Aadhaar KYC and company checks for your business. Show customers a trusted business certificate before they pay. Start free or choose paid plans from ₹250/month annually.",
        creator: "@RakshaAi247",
    },
};

// ── Schema.org JSON-LD ────────────────────────────────────────────────────────
function generateSchema() {
    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://rakshaai.co/business-verification",
                url: "https://rakshaai.co/business-verification",
                name: "Business Verification for Indian Businesses | RakshaAI",
                description:
                    "A business verification page explaining how Indian businesses can complete GST verification, Aadhaar KYC, PAN, MCA, Udyam and bank account checks to earn the Raksha Trust Badge.",
                inLanguage: "en-IN",
                publisher: {
                    "@type": "Organization",
                    name: "RakshaAI",
                    url: "https://rakshaai.co",
                    logo: "https://rakshaai.co/logo.png",
                },
            },
            {
                "@type": "Service",
                "@id": "https://rakshaai.co/business-verification#service",
                name: "RakshaAI Business Verification India",
                description:
                    "A business verification service for Indian businesses that combines GST verification, Aadhaar KYC, PAN, MCA, Udyam and bank account checks with a public trust profile and badge.",
                provider: organizationRef(),
                areaServed: "IN",
                offers: {
                    "@type": "Offer",
                    price: "349",
                    priceCurrency: "INR",
                    priceSpecification: {
                        "@type": "UnitPriceSpecification",
                        price: "349",
                        priceCurrency: "INR",
                        unitText: "MONTH",
                    },
                },
                serviceType: "Business Verification",
            },
            {
                "@type": "FAQPage",
                mainEntity: [
                    {
                        "@type": "Question",
                        name: "What is the Raksha Trust Badge?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "The Raksha Trust Badge is a visible trust mark issued after RakshaAI verifies a business through GST verification, Aadhaar KYC, PAN, MCA, Udyam and bank account checks. Customers can see this badge when they search or check the business on RakshaAI.",
                        },
                    },
                    {
                        "@type": "Question",
                        name: "How much does RakshaAI business verification cost?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "RakshaAI offers a free basic listing. Full verification is ₹349 per month before GST, ₹1,058 per quarter including GST, or ₹2,999 per year plus ₹540 GST. There are no setup fees.",
                        },
                    },
                    {
                        "@type": "Question",
                        name: "How long does the verification process take?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "Most businesses can complete GST, Aadhaar, PAN and bank account verification in under 10 minutes. Manual document review for incorporation documents usually takes 1 to 2 business days.",
                        },
                    },
                    {
                        "@type": "Question",
                        name: "What documents are required for RakshaAI business verification?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "Most businesses need a GST number, an Aadhaar-linked mobile number for OTP verification, and PAN details. For deeper business verification, businesses can also provide Udyam details, MCA CIN, bank account details, and incorporation documents such as COI, MOA and AOA.",
                        },
                    },
                    {
                        "@type": "Question",
                        name: "Is RakshaAI business verification legitimate?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "Yes. RakshaAI validates business details against official systems such as GSTN, Aadhaar, PAN and MCA records, and processes verification data through secure workflows designed for Indian businesses.",
                        },
                    },
                ],
            },
        ],
    };
}

// ── Data ──────────────────────────────────────────────────────────────────────

const targetAudiences = [
    {
        icon: Store,
        title: "Local Shops & Retailers",
        description: "Kirana stores, electronics shops, clothing boutiques show walk-in and WhatsApp customers you are the real thing.",
        color: "from-orange-500 to-amber-500",
        bg: "bg-orange-50 dark:bg-orange-900/20",
        border: "border-orange-200 dark:border-orange-700/40",
    },
    {
        icon: Laptop,
        title: "E-commerce & Online Sellers",
        description: "Sell on your own website or Instagram? A verified badge stops customers from second-guessing before checkout.",
        color: "from-blue-500 to-cyan-500",
        bg: "bg-blue-50 dark:bg-blue-900/20",
        border: "border-blue-200 dark:border-blue-700/40",
    },
    {
        icon: Wrench,
        title: "Service Providers & Freelancers",
        description: "Plumbers, tutors, consultants, doctors build trust before a client hands you access to their home or data.",
        color: "from-emerald-500 to-green-500",
        bg: "bg-emerald-50 dark:bg-emerald-900/20",
        border: "border-emerald-200 dark:border-emerald-700/40",
    },
    {
        icon: Zap,
        title: "Startups & New Ventures",
        description: "New on the market? Bridge the credibility gap with official-record checks so customers take you seriously from day one.",
        color: "from-purple-500 to-violet-500",
        bg: "bg-purple-50 dark:bg-purple-900/20",
        border: "border-purple-200 dark:border-purple-700/40",
    },
    {
        icon: Package,
        title: "D2C & Product Brands",
        description: "Direct-to-consumer brands building long-term trust need more than good reviews verified identity is the foundation.",
        color: "from-pink-500 to-rose-500",
        bg: "bg-pink-50 dark:bg-pink-900/20",
        border: "border-pink-200 dark:border-pink-700/40",
    },
    {
        icon: Handshake,
        title: "B2B & Wholesale Traders",
        description: "Enterprise buyers and bulk purchasers vet vendors carefully. A trust certificate fast-tracks procurement conversations.",
        color: "from-indigo-500 to-blue-500",
        bg: "bg-indigo-50 dark:bg-indigo-900/20",
        border: "border-indigo-200 dark:border-indigo-700/40",
    },
];

const painPoints = [
    {
        without: "Customers screenshot your Instagram and Google \"Is this business real?\"",
        with: "Your verified profile shows up instantly when they search on RakshaAI.",
    },
    {
        without: "You lose orders because shoppers are scared of UPI fraud.",
        with: "The Trust Badge reassures customers before they hit \"Pay Now\".",
    },
    {
        without: "A competitor copies your brand name and confused customers avoid you.",
        with: "Only your business carries the verified badge  fakes cannot replicate it.",
    },
    {
        without: "Bulk buyers ask for documents over WhatsApp  slows down every deal.",
        with: "Share your public verification profile link  one link proves everything.",
    },
];

const testimonials = [
    {
        name: "Priya Sharma",
        role: "Owner, Priya Boutique · Jaipur",
        avatar: "PS",
        avatarColor: "from-pink-500 to-rose-500",
        rating: 5,
        text: "After getting verified, three customers messaged me saying they checked my badge before ordering. One told me she had been cheated before and the RakshaAI badge is what made her trust me. That one order covered three months of the subscription.",
    },
    {
        name: "Rahul Verma",
        role: "Founder, QuickFix Repair · Bengaluru",
        avatar: "RV",
        avatarColor: "from-blue-500 to-indigo-500",
        rating: 5,
        text: "I was sceptical at first  paying to display a badge. But my Google Business enquiries went up noticeably after I added the badge widget. Customers trust a service guy with an official-record verified profile much more than a random number on Justdial.",
    },
    {
        name: "Meena Patel",
        role: "Co-Founder, EcoSnacks D2C · Ahmedabad",
        avatar: "MP",
        avatarColor: "from-emerald-500 to-teal-500",
        rating: 5,
        text: "We were a very new brand competing against established names. The RakshaAI certificate gave us instant credibility at trade fairs. Buyers could scan our profile on the spot and see we were GST and Aadhaar verified. Closed two wholesale deals that day.",
    },
];

const comparisonRows = [
    { label: "Trust badge visible on website", without: false, with: true },
    // { label: "Official-record checked public profile", without: false, with: true },
    { label: "Customers can check legitimacy before paying", without: false, with: true },
    { label: "Protected from impersonation & fake clones", without: false, with: true },
    { label: "Embed badge on Instagram / WhatsApp bio", without: false, with: true },
    { label: "Dashboard with trust analytics", without: false, with: true },
    { label: "Priority listing on RakshaAI search", without: false, with: true },
];

const pricingFreeFeatures = [
    { text: "Basic business listing", included: true },
    { text: "Public profile page", included: true },
    { text: "Verified badge", included: false },
    { text: "Priority search ranking", included: false },
    { text: "Trust analytics report", included: false },
    { text: "Certificate download", included: false },
];

const pricingPaidFeatures = [
    "Basic business listing",
    "Public profile page",
    "Verified badge on profile",
    "Priority search ranking",
    "Monthly trust analytics",
    "Certificate download",
];

const pricingPlans = [
    {
        title: "Monthly",
        description: "Full verification with monthly billing",
        price: "349",
        priceSuffix: "per month",
        billingNote: "Billed ₹412/month incl. GST · Cancel anytime",
        badge: undefined,
        highlighted: false,
        oldPrice: undefined,
    },
    {
        title: "Quarterly",
        description: "Full verification with quarterly billing",
        price: "299",
        priceSuffix: "per month",
        billingNote: "Billed ₹1058/quarter incl. GST · Save ₹150/quarter",
        badge: "Save ₹150",
        highlighted: false,
        oldPrice: undefined,
    },
    {
        title: "Annual",
        description: "Full verification with yearly billing",
        price: "250",
        priceSuffix: "per month",
        billingNote: "Billed ₹2999/year · Save ₹1189/year (+ ₹540 GST)",
        badge: "Most Popular",
        highlighted: true,
        oldPrice: "₹349/mo",
    },
] as const;

const verificationLayers = [
    {
        step: 1,
        icon: Building2,
        title: "Business Information",
        subtitle: "Step 1 Foundation",
        color: "from-blue-500 to-cyan-500",
        bg: "bg-blue-50 dark:bg-blue-900/20",
        border: "border-blue-200 dark:border-blue-700/40",
        description:
            "This is where your public trust profile begins. We collect the details customers care about most: your business name, website, working phone number, business email, and what you sell or offer.",
        details: [
            "Business name & official website URL",
            "Verified contact phone number (OTP)",
            "Business email address (OTP verified)",
            "Products & services tag list",
        ],
    },
    {
        step: 2,
        icon: Crown,
        title: "Subscription",
        subtitle: "Step 2  Plan Selection",
        color: "from-purple-500 to-violet-500",
        bg: "bg-purple-50 dark:bg-purple-900/20",
        border: "border-purple-200 dark:border-purple-700/40",
        description:
            "Pick a plan that fits your business. Your subscription keeps the Raksha Trust Badge active, unlocks your dashboard, and ensures your verification status stays current over time.",
        details: [
            "Free listing, monthly, quarterly or annual billing",
            "Secure Razorpay payment gateway",
            "Instant activation after payment",
            "Cancel anytime  no lock-in",
        ],
    },
    {
        step: 3,
        icon: CreditCard,
        title: "GST Verification",
        subtitle: "Step 3  Government Registration Check",
        color: "from-emerald-500 to-green-500",
        bg: "bg-emerald-50 dark:bg-emerald-900/20",
        border: "border-emerald-200 dark:border-emerald-700/40",
        description:
            "We check your GSTIN against the GST database to confirm that your business is legally registered, active, and operating under the correct name and address in India.",
        details: [
            "GSTIN validated against GSTN live database",
            "Business name, trade name & type confirmed",
            "GST registration date & status checked",
            "Business address & state code verified",
        ],
    },
    {
        step: 4,
        icon: Fingerprint,
        title: "Aadhaar KYC",
        subtitle: "Step 4  Identity Verification",
        color: "from-orange-500 to-amber-500",
        bg: "bg-orange-50 dark:bg-orange-900/20",
        border: "border-orange-200 dark:border-orange-700/40",
        description:
            "Next, we confirm that the person behind the business is real. Aadhaar OTP verification adds a strong identity layer, and you can extend the process with PAN, bank account, or MCA checks for deeper credibility.",
        details: [
            "Aadhaar OTP sent to registered mobile number",
            "Name, gender & date of birth confirmed",
            "Full address extracted & verified",
            "Optional: PAN, Bank Account & MCA company check",
        ],
    },
    {
        step: 5,
        icon: FileText,
        title: "Document Upload",
        subtitle: "Step 5  Supporting Evidence",
        color: "from-pink-500 to-rose-500",
        bg: "bg-pink-50 dark:bg-pink-900/20",
        border: "border-pink-200 dark:border-pink-700/40",
        description:
            "Upload supporting documents so there is a clear paper trail behind your business. Our team reviews them manually before awarding full verified status.",
        details: [
            "Certificate of Incorporation (COI)",
            "PAN card document",
            "Articles of Association (AOA)",
            "Memorandum of Association (MOA)",
        ],
    },
    {
        step: 6,
        icon: Award,
        title: "Verified & Badged",
        subtitle: "Step 6  Trust Badge Issued",
        color: "from-yellow-500 to-orange-500",
        bg: "bg-yellow-50 dark:bg-yellow-900/20",
        border: "border-yellow-200 dark:border-yellow-700/40",
        description:
            "Once your checks are complete, your Raksha Trust Badge goes live. Customers who search your business or check your website on RakshaAI can immediately see that you are verified, which makes buying decisions much easier.",
        details: [
            "Raksha Trust Badge activated on your profile",
            "Public verified business profile published",
            "Customers see badge when checking your URL",
            "Business dashboard with trust analytics",
        ],
    },
];

const faqs = [
    {
        q: "What is the Raksha Trust Certificate?",
        a: "It is a business verification certificate issued by RakshaAI after we cross-check your GST, Aadhaar, PAN, MCA, Udyam and bank account details against official databases where applicable. It appears on your public profile and can be embedded on your website, WhatsApp and social media so customers can quickly verify that your business is real.",
    },
    {
        q: "How long does business verification take?",
        a: "For most businesses, the online part of GST verification and Aadhaar KYC takes less than 10 minutes. Manual review of incorporation documents such as COI, MOA and AOA usually takes 1 to 2 business days.",
    },
    {
        q: "What documents do I need for GST verification and company checks?",
        a: "You should keep your GST number and an Aadhaar-linked mobile number ready. Depending on your business type, you may also need PAN details, bank account information, Udyam registration, MCA CIN, and company documents such as COI, MOA and AOA.",
    },
    {
        q: "How can customers verify that my business is legitimate?",
        a: "Once verified, your business gets a public RakshaAI profile and badge that customers can check before they place an order, send money by UPI, or start a B2B conversation. Instead of guessing whether your business is genuine, they can use it like a quick website verification check, GST check, and business legitimacy check in one place.",
    },
    {
        q: "Can I cancel my subscription?",
        a: "Yes. You can cancel your subscription from the business dashboard. Your badge and verified status stay active until the end of the billing period, after which the profile can be archived.",
    },
    {
        q: "What happens if my GST registration lapses?",
        a: "If your GST registration becomes inactive or is cancelled, your business verification status can be affected. We flag that change so your public trust profile stays accurate instead of showing outdated information.",
    },
    {
        q: "Does this work for sole proprietors, MSMEs and small shops?",
        a: "Yes. Sole proprietors, kirana stores, MSMEs, freelancers and service providers can all complete business verification using GST and Aadhaar where applicable. MCA, Udyam and incorporation documents are more relevant for Pvt Ltd companies, LLPs and other registered entities.",
    },
    {
        q: "Can I display the badge on Instagram, WhatsApp and offline?",
        a: "Absolutely. You can embed the badge widget on your website, add the certificate image to your Instagram bio or pinned stories, share the link on WhatsApp Business, and even print the QR-code certificate on your visiting card or shop front.",
    },
];

// ── Page Component ────────────────────────────────────────────────────────────
export default function BusinessVerificationPage() {
    const schema = generateSchema();

    const marqueeItems = [
        "Priya Boutique · Jaipur",
        "QuickFix Repair · Bengaluru",
        "EcoSnacks D2C · Ahmedabad",
        "TechStore Hub · Pune",
        "Sunrise Traders · Hyderabad",
        "GreenLeaf Organics · Delhi",
        "SwiftCourier · Mumbai",
        "Artisan Crafts · Kolkata",
        "FreshMart Grocery · Chennai",
        "DevShop Solutions · Surat",
    ];

    return (
        <DefaultLayout>
            {/* Inject JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLd(schema) }}
            />

            <div className="bg-white dark:bg-slate-950 min-h-screen pb-20 sm:pb-0">

                {/* ── STICKY MOBILE CTA BAR ────────────────────────────────────── */}
                <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 px-4 py-3 shadow-2xl">
                    <Link
                        href="/business-onboarding"
                        className="flex items-center justify-center gap-2 w-full py-3.5 bg-gradient-to-r from-orange-500 to-rose-500 text-white font-bold rounded-xl shadow-lg shadow-orange-500/30 active:scale-[0.98] transition-transform"
                    >
                        <BadgeCheck className="h-5 w-5" />
                        Login
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

                {/* ── HERO ─────────────────────────────────────────────────────── */}
                <section className="relative min-h-[92vh] flex items-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                    {/* Background radial + orbs */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_0%,rgba(249,115,22,0.07),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_20%_0%,rgba(249,115,22,0.12),transparent)]" />
                    <div className="absolute top-1/3 right-0 w-[560px] h-[560px] bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

                    <div className="max-w-7xl mx-auto w-full relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                            {/* ── Left column: copy + CTAs ── */}
                            <div>

                            

                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6 text-slate-900 dark:text-white">
                                    Business verification in India that turns customer
                                    <span className="block bg-gradient-to-r from-orange-500 via-rose-500 to-pink-500 bg-clip-text text-transparent">
                                        doubt into sales.
                                    </span>
                                </h1>
                                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-lg font-normal">
                                    <strong className="text-slate-900 dark:text-white font-semibold">67% of Indian buyers</strong> abandon a purchase when they can&apos;t verify the seller.
                                    RakshaAI helps customers do the exact checks they already look for, like <strong className="text-slate-900 dark:text-white font-semibold">GST verification, company registration checks and Aadhaar-backed identity verification</strong>, so cautious visitors stop leaving and start paying.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                                    <Link
                                        href="/business-onboarding"
                                        className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 shadow-md shadow-orange-500/15 hover:from-orange-400 hover:to-pink-400 focus:outline-none focus:ring-2 focus:ring-orange-300 dark:focus:ring-orange-800 transition-all duration-200 border-0 whitespace-nowrap text-base sm:text-base font-semibold"
                                    >
                                        <BadgeCheck className="h-5 w-5 text-white inline-block align-middle" />
                                        <span className="font-bold text-base leading-tight text-white whitespace-nowrap">Start Free</span>
                                        <ArrowRight className="h-5 w-5 ml-2 text-white group-hover:translate-x-1 transition-transform inline-block align-middle" />
                                    </Link>
                                    <a
                                        href="#how-it-works"
                                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300 font-semibold hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors text-base whitespace-nowrap"
                                        style={{ height: 'auto' }}
                                    >
                                        <span className="whitespace-nowrap">See how it works</span>
                                        <ChevronRight className="h-5 w-5" />
                                    </a>
                                </div>
                                {/* Inline stats */}
                                <div className="flex items-center gap-6 mb-10 flex-wrap">
                                    <div>
                                        <p className="text-2xl font-bold text-slate-900 dark:text-white">3×</p>
                                        <p className="text-sm text-slate-500 mt-0.5">higher conversions</p>
                                    </div>
                                    <div className="w-px h-10 bg-slate-200 dark:bg-slate-800" />
                                    <div>
                                        <p className="text-2xl font-bold text-slate-900 dark:text-white">10 min</p>
                                        <p className="text-sm text-slate-500 mt-0.5">to get verified</p>
                                    </div>
                                    <div className="w-px h-10 bg-slate-200 dark:bg-slate-800" />
                                    <div>
                                        <p className="text-2xl font-bold text-slate-900 dark:text-white">₹250</p>
                                        <p className="text-sm text-slate-500 mt-0.5">per month annually</p>
                                    </div>
                                </div>


                                <p className="text-xs text-slate-500 dark:text-slate-600 flex items-center flex-wrap gap-4">
                                    <span className="flex items-center gap-1.5 text-xs sm:text-sm"><CheckCircle className="h-3.5 w-3.5 text-emerald-500" /> No setup fee</span>
                                    <span className="flex items-center gap-1.5 text-xs sm:text-sm"><CheckCircle className="h-3.5 w-3.5 text-emerald-500" /> Cancel anytime</span>
                                    {/* <span className="flex items-center gap-1.5 text-xs sm:text-sm"><CheckCircle className="h-3.5 w-3.5 text-emerald-500" /> 30-day money-back guarantee</span> */}
                                </p>

                                <p className="mt-4 text-sm text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed">
                                    If someone searches your GST number, company registration, or asks whether your website is real, this gives them one simple place to verify your business.
                                </p>
                            </div>

                            {/* ── Right column: Certificate mockup ── */}
                            <div className="relative lg:-mt-[150px]">
                                <div className="relative z-20 flex items-center justify-end gap-3 mb-4">
                                    <Link
                                        href="/business-login"
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 font-semibold text-sm hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                                    >
                                        <LogIn className="h-4 w-4" />
                                        Login
                                    </Link>
                                    <Link
                                        href="/business-onboarding"
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold text-sm shadow-md shadow-orange-500/15 hover:from-orange-400 hover:to-pink-400 transition-all"
                                    >
                                        Go to Onboarding
                                        <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </div>
                                <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-orange-500/10 to-rose-500/10 rounded-3xl blur-2xl" />
                                <div className="relative bg-white dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200 dark:border-slate-700/50 rounded-3xl p-8 shadow-2xl shadow-slate-200/60 dark:shadow-slate-900/60">
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-rose-500 to-pink-500 rounded-t-3xl" />

                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-rose-500 flex items-center justify-center shadow-md">
                                                <ShieldCheck className="h-5 w-5 text-white" />
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-orange-500 dark:text-orange-400 uppercase tracking-wider">RakshaAI</p>
                                                <p className="text-xs text-slate-500">Trust Certificate</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold px-3 py-1.5 rounded-full">
                                            <span className="w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-pulse" />
                                            VERIFIED
                                        </div>
                                    </div>

                                    <div className="mb-5">
                                        <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Business</p>
                                        <p className="text-2xl font-bold text-slate-900 dark:text-white">Your Business Name</p>
                                        <p className="text-sm text-slate-500 mt-0.5">yourwebsite.com</p>
                                    </div>

                                    <div className="space-y-2 mb-6">
                                        {[
                                            { label: "GST Registration", badge: "Verified", color: "text-emerald-600 dark:text-emerald-400" },
                                            { label: "Aadhaar KYC", badge: "Verified", color: "text-blue-600 dark:text-blue-400" },
                                            { label: "PAN Verification", badge: "Verified", color: "text-violet-600 dark:text-violet-400" },
                                            { label: "Bank Account", badge: "Verified", color: "text-orange-600 dark:text-orange-400" },
                                            { label: "MCA / Documents", badge: "Verified", color: "text-rose-600 dark:text-rose-400" },
                                        ].map((item) => (
                                            <div key={item.label} className="flex items-center justify-between bg-slate-100 dark:bg-slate-800/60 rounded-lg px-3 py-2.5">
                                                <span className="text-sm text-slate-700 dark:text-slate-300">{item.label}</span>
                                                <span className={`flex items-center gap-1.5 text-xs font-semibold ${item.color}`}>
                                                    <CheckCircle className="h-3.5 w-3.5" />{item.badge}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-4 border-t border-slate-200 dark:border-slate-700/50 flex items-center justify-between">
                                        <div>
                                            <p className="text-xs text-slate-400">Certificate ID</p>
                                            <p className="text-xs text-slate-600 dark:text-slate-400 font-mono">RAK-2025-XXXXXX</p>
                                        </div>
                                        <div className="flex items-center gap-0.5">
                                            {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />)}
                                        </div>
                                    </div>
                                    <p className="text-center text-xs text-slate-400 mt-4">Sample certificate · Goes live in under 10 minutes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── SCROLLING TRUST MARQUEE ───────────────────────────────────── */}
                <section className="py-4 border-y border-slate-200 dark:border-slate-800/70 bg-slate-50 dark:bg-slate-900/60 overflow-hidden">
                    <div className="flex items-center gap-10 animate-marquee whitespace-nowrap">
                        {[...marqueeItems, ...marqueeItems].map((name, i) => (
                            <span key={i} className="inline-flex items-center gap-2 text-sm text-slate-500 font-medium flex-shrink-0">
                                <BadgeCheck className="h-4 w-4 text-orange-500" />
                                {name} <span className="text-emerald-500 font-bold">✓</span>
                            </span>
                        ))}
                    </div>
                </section>

                {/* ── COST OF INACTION ─────────────────────────────────────────── */}
                <section className="py-14 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/20 border border-red-200/70 dark:border-red-900/30 p-7 sm:p-10">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
                                <div>
                                    <span className="inline-flex items-center gap-2 text-xs font-bold text-red-500 uppercase tracking-widest mb-4">
                                        <AlertTriangle className="h-4 w-4" /> The hidden cost of doubt
                                    </span>
                                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-3 leading-tight">
                                        How many customers left your site <span className="text-red-500">today</span>?
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-5">
                                        Research shows <strong className="text-slate-900 dark:text-white">67% of Indian online buyers</strong> abandon a purchase when they can&apos;t verify the seller&apos;s identity. At 100 visitors/day, that&apos;s 67 potential customers vanishing  every single day.
                                    </p>
                                    <Link
                                        href="/business-onboarding"
                                        className="inline-flex items-center gap-2 text-sm font-bold text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors"
                                    >
                                        Start with a free listing <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </div>
                                <div className="space-y-2.5">
                                    {([
                                        { label: "Buyers who verify seller before paying", value: "67%", positive: false },
                                        { label: "Who leave unverified sellers without buying", value: "3 in 5", positive: false },
                                        { label: "Drop in cart abandonment after RakshaAI badge", value: "−47%", positive: true },
                                        { label: "Avg. extra monthly revenue reported", value: "₹18K+", positive: true },
                                    ] as const).map((item) => (
                                        <div key={item.label} className="flex items-center justify-between bg-white dark:bg-slate-900 rounded-xl px-4 py-3 border border-slate-200 dark:border-slate-800 shadow-sm">
                                            <span className="text-sm text-slate-600 dark:text-slate-400 pr-4">{item.label}</span>
                                            <span className={`text-sm font-black flex-shrink-0 ${item.positive ? "text-emerald-600 dark:text-emerald-400" : "text-red-500"}`}>{item.value}</span>
                                        </div>
                                    ))}
                                    <p className="text-xs text-slate-400 text-right">*Survey data · avg ₹500 order · 100 visitors/day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── PROBLEM / AGITATION ──────────────────────────────────────── */}
                <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-14">
                            <span className="inline-flex items-center gap-2 text-sm font-bold text-red-500 dark:text-red-400 uppercase tracking-widest mb-5">
                                <AlertTriangle className="h-4 w-4" /> The Real Problem
                            </span>
                            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                                ₹68,000 crore lost to online fraud in 2023.
                                <br />
                                <span className="text-slate-400 dark:text-slate-600 text-lg font-normal">Your customers know it.</span>
                            </h2>
                            <p className="mt-5 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                                Indian buyers are the most cautious in the world. Without a trust signal,
                                even genuine businesses lose customers to doubt every single day. Most people do some version of a GST search, company registration check, or website verification check before they pay.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {painPoints.map((point, i) => (
                                <div key={i} className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
                                    <div className="flex items-start gap-4 p-5 bg-red-50 dark:bg-red-950/30 border-b border-red-100 dark:border-red-900/20">
                                        <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                                        <p className="text-sm text-red-700 dark:text-red-300 leading-relaxed">{point.without}</p>
                                    </div>
                                    <div className="flex items-start gap-4 p-5 bg-white dark:bg-slate-900/60">
                                        <CheckCircle className="h-5 w-5 text-emerald-500 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                                        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{point.with}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── WHO IS THIS FOR ───────────────────────────────────────────── */}
                <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/40">
                    <div className="max-w-6xl mx-auto">
                        <div className="max-w-2xl mb-14">
                            <span className="text-sm font-bold text-orange-500 dark:text-orange-400 uppercase tracking-widest block mb-4">
                                Built for Every Indian Business
                            </span>
                            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                                If customers pay you,{" "}
                                <span className="text-orange-500 dark:text-orange-400 font-semibold">you need this.</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {targetAudiences.map((audience) => {
                                const Icon = audience.icon;
                                return (
                                    <div
                                        key={audience.title}
                                        className="group p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:border-orange-500/40 hover:bg-orange-50/30 dark:hover:bg-slate-900 transition-all duration-300 cursor-default"
                                    >
                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${audience.color} flex items-center justify-center shadow-lg mb-5`}>
                                            <Icon className="h-6 w-6 text-white" />
                                        </div>
                                        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-300 transition-colors">{audience.title}</h3>
                                        <p className="text-sm text-slate-500 leading-relaxed">{audience.description}</p>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="mt-12 text-center">
                            <Link
                                href="/business-onboarding"
                                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-400 hover:to-rose-400 text-white font-bold rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all"
                            >
                                <BadgeCheck className="h-5 w-5" />
                                Verify My Business Today
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ── HOW IT WORKS  3 STEPS ────────────────────────────────────── */}
                <section id="how-it-works" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="text-sm font-bold text-orange-500 dark:text-orange-400 uppercase tracking-widest block mb-4">
                                Simple 3-Step Process
                            </span>
                            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white">
                                Verified in under 10 minutes.
                            </h2>
                            <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
                                No paperwork. No office visit. No waiting weeks.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 relative">
                            {[
                                {
                                    step: "01",
                                    icon: Building2,
                                    title: "Register & Pay",
                                    description: "Fill in your business details and choose a plan. Takes under 3 minutes. Secure payment via Razorpay.",
                                    time: "~3 min",
                                },
                                {
                                    step: "02",
                                    icon: ShieldCheck,
                                    title: "Verify GST & Aadhaar",
                                    description: "Enter your GSTIN and complete Aadhaar OTP  we verify everything live against government databases.",
                                    time: "~5 min",
                                },
                                {
                                    step: "03",
                                    icon: Award,
                                    title: "Certificate Goes Live",
                                    description: "Your public trust profile and embeddable badge are instantly activated. Share it everywhere.",
                                    time: "Instant",
                                },
                            ].map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <div key={item.step} className="relative text-center">
                                        {i < 2 && (
                                            <div className="hidden sm:block absolute top-10 left-[65%] right-[-35%] h-px bg-gradient-to-r from-orange-500/40 to-transparent z-0" />
                                        )}
                                        <div className="relative inline-flex mb-5">
                                            <div className="w-20 h-20 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                                                <Icon className="h-9 w-9 text-orange-500 dark:text-orange-400" />
                                            </div>
                                            <span className="absolute -top-3 -right-3 w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-xs font-black text-white shadow-lg shadow-orange-500/30">
                                                {i + 1}
                                            </span>
                                        </div>
                                        <div className="inline-block bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold px-3 py-1 rounded-full mb-3">
                                            {item.time}
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                                        <p className="text-sm text-slate-500 leading-relaxed max-w-xs mx-auto">{item.description}</p>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="text-center mt-14">
                            <Link
                                href="/business-onboarding"
                                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-400 hover:to-rose-400 text-white font-bold text-lg rounded-xl shadow-lg shadow-orange-500/25 hover:-translate-y-0.5 transition-all"
                            >
                                <Zap className="h-5 w-5" />
                                Start Verification Now
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ── VERIFICATION LAYERS ───────────────────────────────────────── */}
                <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/40">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-14">
                            <span className="text-sm font-bold text-orange-500 dark:text-orange-400 uppercase tracking-widest block mb-4">
                                5-Layer Business Verification
                            </span>
                            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white">
                                GST verification, Aadhaar KYC and company checks in one certificate
                            </h2>
                            <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
                                Each layer answers a real buyer question: Is this business registered, traceable and safe to pay?
                            </p>
                        </div>

                        <div className="space-y-3">
                            {verificationLayers.map((layer, idx) => {
                                const Icon = layer.icon;
                                return (
                                    <div
                                        key={layer.step}
                                        className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 hover:border-orange-500/30 p-6 sm:p-7 transition-all duration-300 shadow-sm hover:shadow-md"
                                    >
                                        <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                                            <div className="flex items-center gap-4 flex-shrink-0">
                                                <span className="text-5xl font-black text-slate-200 dark:text-slate-800 group-hover:text-slate-300 dark:group-hover:text-slate-700 transition-colors w-10 text-right leading-none">
                                                    {String(idx + 1).padStart(2, "0")}
                                                </span>
                                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${layer.color} flex items-center justify-center shadow-lg`}>
                                                    <Icon className="h-6 w-6 text-white" />
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-300 transition-colors">{layer.title}</h3>
                                                <p className="text-sm text-slate-500 leading-relaxed mb-4">{layer.description}</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {layer.details.map((detail) => (
                                                        <span key={detail} className="inline-flex items-center gap-1.5 text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700">
                                                            <CheckCircle className="h-3 w-3 text-emerald-500" />
                                                            {detail}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ── BENEFITS BENTO GRID ───────────────────────────────────────── */}
                <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-14">
                            <span className="text-sm font-bold text-orange-500 dark:text-orange-400 uppercase tracking-widest block mb-4">Why Verified Businesses Win</span>
                            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white">Why business verification helps real businesses win online</h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[
                                {
                                    icon: TrendingUp,
                                    title: "Up to 3× Higher Conversions",
                                    description: "Verified businesses see fewer checkout drop-offs because buyers hesitate less when they see a real trust badge.",
                                    featured: true,
                                    gradient: "from-orange-500 to-rose-500",
                                },
                                {
                                    icon: Globe,
                                    title: "Searchable Public Profile",
                                    description: "Your verified business appears on RakshaAI so anyone checking your link sees real proof before paying.",
                                    featured: false,
                                    gradient: "from-blue-500 to-cyan-500",
                                },
                                {
                                    icon: Lock,
                                    title: "Impersonation Protection",
                                    description: "Fake websites can copy your branding but cannot replicate your GST and Aadhaar-backed verified badge.",
                                    featured: false,
                                    gradient: "from-rose-500 to-pink-500",
                                },
                                {
                                    icon: CircleDollarSign,
                                    title: "Faster B2B Deals",
                                    description: "Send your trust profile link instead of WhatsApp-ing documents. Procurement managers fast-track trusted vendors.",
                                    featured: false,
                                    gradient: "from-violet-500 to-purple-500",
                                },
                                {
                                    icon: ShieldCheck,
                                    title: "Always Up-to-Date",
                                    description: "Your trust profile reflects your live verification status  not a static certificate that can go stale.",
                                    featured: false,
                                    gradient: "from-emerald-500 to-teal-500",
                                },
                                {
                                    icon: BadgeCheck,
                                    title: "Badge for Everywhere",
                                    description: "Embed on your website, Instagram stories, WhatsApp Business profile, or print the QR on visiting cards.",
                                    featured: false,
                                    gradient: "from-amber-500 to-orange-500",
                                },
                            ].map((benefit, index) => {
                                const Icon = benefit.icon;
                                return (
                                    <div
                                        key={index}
                                        className={`rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 ${benefit.featured
                                            ? "border-orange-500/40 bg-gradient-to-br from-orange-50 to-rose-50 dark:from-orange-950/50 dark:to-rose-950/30"
                                            : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:border-orange-500/30 dark:hover:border-slate-700 shadow-sm"
                                            }`}
                                    >
                                        <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center shadow-md mb-4`}>
                                            <Icon className="h-5 w-5 text-white" />
                                        </div>
                                        <h3 className={`text-base font-bold mb-2 ${benefit.featured ? "text-orange-600 dark:text-orange-300" : "text-slate-900 dark:text-white"}`}>{benefit.title}</h3>
                                        <p className="text-sm text-slate-500 leading-relaxed">{benefit.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ── COMPARISON TABLE ──────────────────────────────────────────── */}
                <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/40">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-14">
                            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white">Verified vs. Unverified</h2>
                            <p className="mt-3 text-slate-500">The difference between winning and losing customer trust</p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                            <div className="grid grid-cols-3 bg-slate-100 dark:bg-slate-900">
                                <div className="p-4 text-sm font-semibold text-slate-500 dark:text-slate-600">Feature</div>
                                <div className="p-4 text-center bg-red-50 dark:bg-red-950/30 border-l border-slate-200 dark:border-slate-800">
                                    <span className="text-xs font-bold text-red-500 uppercase tracking-wide">Without RakshaAI</span>
                                </div>
                                <div className="p-4 text-center bg-orange-50 dark:bg-orange-950/30 border-l border-slate-200 dark:border-slate-800">
                                    <span className="text-xs font-bold text-orange-500 dark:text-orange-400 uppercase tracking-wide">With RakshaAI</span>
                                </div>
                            </div>
                            {comparisonRows.map((row, i) => (
                                <div
                                    key={i}
                                    className={`grid grid-cols-3 border-t border-slate-200 dark:border-slate-800/80 ${i % 2 === 0 ? "bg-white dark:bg-slate-950" : "bg-slate-50/50 dark:bg-slate-900/40"}`}
                                >
                                    <div className="p-4 text-sm text-slate-700 dark:text-slate-400">{row.label}</div>
                                    <div className="p-4 flex items-center justify-center border-l border-slate-200 dark:border-slate-800 bg-red-50/50 dark:bg-red-950/10">
                                        <XCircle className="h-5 w-5 text-red-400 dark:text-red-600/60" />
                                    </div>
                                    <div className="p-4 flex items-center justify-center border-l border-slate-200 dark:border-slate-800 bg-orange-50/50 dark:bg-orange-950/10">
                                        <CheckCircle className="h-5 w-5 text-emerald-500 dark:text-emerald-400" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── TESTIMONIALS ─────────────────────────────────────────────── */}
                <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-14">
                            <span className="text-sm font-bold text-orange-500 dark:text-orange-400 uppercase tracking-widest block mb-4">Social Proof</span>
                            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white">Real businesses. Real results.</h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                            {testimonials.map((t, i) => (
                                <div
                                    key={i}
                                    className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-7 flex flex-col hover:border-orange-500/30 transition-all duration-300 shadow-sm hover:shadow-md"
                                >
                                    {/* Key result callout */}
                                    <div className="flex items-center gap-2 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/30 rounded-lg px-3 py-2.5 mb-4">
                                        <TrendingUp className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                                        <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                                            {i === 0 && "3 customers cited the badge as reason to buy"}
                                            {i === 1 && "Google Business enquiries went up noticeably"}
                                            {i === 2 && "Closed 2 wholesale deals at a single trade fair"}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-0.5 mb-4">
                                        {[...Array(t.rating)].map((_, j) => (
                                            <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed flex-1 mb-6">
                                        &ldquo;{t.text}&rdquo;
                                    </p>
                                    <div className="flex items-center gap-3 pt-5 border-t border-slate-200 dark:border-slate-800">
                                        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
                                            {t.avatar}
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-900 dark:text-white">{t.name}</p>
                                            <p className="text-xs text-slate-500">{t.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Stats strip */}
                        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {[
                                { value: "500+", label: "Verified Businesses" },
                                { value: "₹250/mo", label: "Paid Plans From" },
                                { value: "<10 min", label: "Avg. Setup Time" },
                                { value: "4.9★", label: "Average Rating" },
                            ].map(({ value, label }) => (
                                <div key={label} className="text-center rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-5 shadow-sm">
                                    <p className="text-3xl font-extrabold text-slate-900 dark:text-white mb-1">{value}</p>
                                    <p className="text-sm text-slate-500 font-medium">{label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── PRICING ──────────────────────────────────────────────────── */}
                <section id="pricing" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/40">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">Choose Your Plan</h2>
                            <p className="mt-2 text-sm sm:text-base text-slate-500 dark:text-slate-400">Start free or unlock full verification with a paid plan</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                            <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 p-5 flex flex-col shadow-sm">
                                <p className="text-lg font-bold text-slate-900 dark:text-white mb-1">Free</p>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mb-5 leading-snug">This is a free subscription plan.</p>
                                <div className="mb-5">
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-4xl font-black text-slate-900 dark:text-white">₹0</span>
                                    </div>
                                    <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">Forever free</p>
                                </div>
                                <div className="space-y-3 mb-6 flex-1">
                                    {pricingFreeFeatures.map(({ text, included }) => (
                                        <div key={text} className="flex items-center gap-2.5">
                                            {included ? (
                                                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                                            ) : (
                                                <X className="w-4 h-4 text-slate-300 dark:text-slate-700 flex-shrink-0" />
                                            )}
                                            <span className={`text-sm ${included ? "text-slate-700 dark:text-slate-200" : "text-slate-400 dark:text-slate-500"}`}>
                                                {text}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-sm text-slate-400 dark:text-slate-500 mb-4">No payment required</p>
                                <Link
                                    href="/business-onboarding"
                                    className="w-full py-3 text-center text-sm font-semibold border-2 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-200 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-xl transition-colors"
                                >
                                    Continue Free
                                </Link>
                            </div>

                            {pricingPlans.map((plan) => (
                                <div
                                    key={plan.title}
                                    className={`relative rounded-2xl p-5 bg-white dark:bg-slate-950 flex flex-col shadow-sm ${plan.highlighted
                                        ? "border-2 border-indigo-500 dark:border-indigo-700 shadow-indigo-100 dark:shadow-indigo-900/30"
                                        : "border border-slate-200 dark:border-slate-700"
                                        }`}
                                >
                                    {plan.badge && (
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                            <span className={`${plan.highlighted ? "bg-indigo-600 text-white" : "bg-emerald-50 text-emerald-700 border border-emerald-200"} text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap`}>
                                                {plan.badge}
                                            </span>
                                        </div>
                                    )}
                                    <p className={`text-lg font-bold text-slate-900 dark:text-white mb-1 ${plan.badge ? "mt-2" : ""}`}>{plan.title}</p>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-5 leading-snug">{plan.description}</p>
                                    <div className="mb-5">
                                        {plan.oldPrice && <p className="text-sm text-slate-400 dark:text-slate-500 line-through">{plan.oldPrice}</p>}
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-4xl font-black text-slate-900 dark:text-white">₹{plan.price}</span>
                                            <span className="text-slate-400 dark:text-slate-500 text-sm">{plan.priceSuffix}</span>
                                        </div>
                                        <p className="text-sm text-slate-400 dark:text-slate-500 mt-1 leading-snug">{plan.billingNote}</p>
                                    </div>
                                    <div className="space-y-3 mb-6 flex-1">
                                        {pricingPaidFeatures.map((text) => (
                                            <div key={text} className="flex items-center gap-2.5">
                                                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                                                <span className="text-sm text-slate-700 dark:text-slate-200">{text}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-sm text-slate-400 dark:text-slate-500 mb-4">Wallet charges may apply as per Paid API</p>
                                    <Link
                                        href="/business-onboarding"
                                        className="w-full py-3 text-center text-sm font-bold rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
                                    >
                                        Select
                                    </Link>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400 flex items-center justify-center gap-2">
                            <Lock className="h-4 w-4" />
                            256-bit SSL secured · Powered by Razorpay · Cancel anytime
                        </div>
                    </div>
                </section>

                {/* ── FAQ ──────────────────────────────────────────────────────── */}
                <section id="faq" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-14">
                            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white">Business Verification FAQ</h2>
                            <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                                Answers to the questions people ask before choosing a business verification service in India.
                            </p>
                        </div>

                        <div className="space-y-3">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 hover:border-orange-500/30 dark:hover:border-slate-700 transition-colors shadow-sm"
                                >
                                    <div className="flex items-start gap-4">
                                        <span className="text-orange-500 text-lg font-black flex-shrink-0 leading-none mt-0.5">Q</span>
                                        <div>
                                            <h3 className="font-bold text-slate-900 dark:text-white mb-2">{faq.q}</h3>
                                            <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 text-center">
                            <p className="text-slate-500 text-sm">
                                More questions?{" "}
                                <Link href="/contact" className="text-orange-500 dark:text-orange-400 font-semibold hover:text-orange-600 dark:hover:text-orange-300 transition-colors">
                                    Talk to our team →
                                </Link>
                            </p>
                        </div>
                    </div>
                </section>

                {/* ── FINAL CTA ────────────────────────────────────────────────── */}
                <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/40">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-slate-950 border border-orange-500/20 p-10 sm:p-16 shadow-xl dark:shadow-2xl">
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-rose-500 to-pink-500" />
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.05),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.08),transparent_70%)]" />

                            <div className="relative z-10">
                                <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full">
                                        <Sparkles className="h-4 w-4 text-orange-500 dark:text-orange-400" />
                                        <span className="text-sm font-semibold text-orange-600 dark:text-orange-300">Certificate live in under 10 minutes</span>
                                    </div>
                                    {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
                                        <ShieldCheck className="h-4 w-4 text-emerald-500 dark:text-emerald-400" />
                                        <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">30-day money-back guarantee</span>
                                    </div> */}
                                </div>

                                <h2 className="text-4xl sm:text-6xl font-black text-slate-900 dark:text-white leading-tight mb-6">
                                    Stop losing customers
                                    <br />
                                    <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">
                                        to doubt.
                                    </span>
                                </h2>

                                <p className="text-slate-600 dark:text-slate-400 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
                                    Start free, then unlock the full trust certificate from ₹250/month annually.
                                    Your business gets an official-record trust signal that closes deals and wins customers.
                                </p>

                                <div className="flex items-center justify-center gap-1 mb-8">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                    ))}
                                    <span className="text-slate-500 text-sm ml-2">Trusted by 500+ businesses across India</span>
                                </div>

                                <Link
                                    href="/business-onboarding"
                                    className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-3 sm:px-6 sm:py-3 min-h-[44px] rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 shadow-md shadow-orange-500/15 hover:from-orange-400 hover:to-pink-400 focus:outline-none focus:ring-2 focus:ring-orange-300 dark:focus:ring-orange-800 transition-all duration-200 border-0 whitespace-nowrap text-base sm:text-base font-semibold"
                                >
                                    <BadgeCheck className="h-4 w-4 sm:h-5 sm:w-5 text-white flex-shrink-0" />
                                    <span className="font-bold text-base leading-tight text-white whitespace-nowrap">View Verification Plans</span>
                                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 ml-2 text-white group-hover:translate-x-1 transition-transform flex-shrink-0" />
                                </Link>

                                <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-slate-500 text-sm">
                                    <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-emerald-500" /> No setup fee</span>
                                    <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-emerald-500" /> Cancel anytime</span>
                                    <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-emerald-500" /> 30-day money-back</span>
                                    <span className="flex items-center gap-1.5">
                                        <Phone className="h-4 w-4" />
                                        <Link href="/contact" className="hover:text-slate-700 dark:hover:text-slate-400 transition-colors">Talk to a human</Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </DefaultLayout>
    );
}
