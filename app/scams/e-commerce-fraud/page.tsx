import type { Metadata } from "next";
import Image from "next/image";
import DefaultLayout from "@/components/DefaultLayout";
import { jsonLd } from "@/lib/seo/schema";
import Link from "next/link";
import ReportScamButton from "@/components/ReportScamButton";
import {
    Shield,
    AlertTriangle,
    CheckCircle2,
    XCircle,
    TrendingUp,
    Users,
    Phone,
    IndianRupee,
    ShieldAlert,
    ArrowRight,
    Info,
    BadgeCheck,
    ChevronDown,
    MessageSquareWarning,
    PackageX,
    CreditCard,
    Globe,
    Star,
    Truck,
    Lock,
    Search,
    Eye,
    ShoppingCart,
    Tag,
    Smartphone,
    FileWarning,
} from "lucide-react";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
    title: "E-Commerce Fraud India 2026: Types & Warning Signs",
    description:
        "Discover all e-commerce fraud and online shopping scams in India. Identify fake ecommerce websites, protect yourself, and report online store scams in 2026.",
    alternates: {
        canonical: "https://rakshaai.co/scams/e-commerce-fraud",
    },
    robots: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
    openGraph: {
        title: "E-Commerce Fraud: Fake Shopping Sites & COD Scams in India | RakshaAI",
        description:
            "Discover how fake e-commerce sites and COD fraudsters steal from Indian shoppers. Full guide with red flags, real stories, and how to get your money back.",
        url: "https://rakshaai.co/scams/e-commerce-fraud",
        type: "website",
    siteName: 'RakshaAI',
        images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'RakshaAI' }],
  },
    twitter: {
        card: "summary_large_image",
        title: "E-Commerce Fraud Guide | RakshaAI",
        description:
            "Fake shopping sites, COD scams and online shopping fraud in India  the complete guide.",
        images: ['/opengraph-image'],
  },
    other: { "geo.region": "IN", language: "en-IN" },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────
const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "E-Commerce Fraud in India 2026: 7 Types, Warning Signs & How to Report",
    url: "https://rakshaai.co/scams/e-commerce-fraud",
    description:
        "E-commerce fraud is any criminal trick exploiting online shopping platforms to steal money or data from Indian shoppers. 35% of Indians encountered fake products while shopping online in the past year.",
    datePublished: "2026-03-23",
    dateModified: "2026-06-11",
    author: {
        "@type": "Organization",
        name: "RakshaAI",
        url: "https://rakshaai.co",
    },
    publisher: { "@type": "Organization", name: "RakshaAI", url: "https://rakshaai.co" },
    inLanguage: "en-IN",
};

const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://rakshaai.co/" },
        { "@type": "ListItem", position: 2, name: "Scam Categories", item: "https://rakshaai.co/scams/" },
        { "@type": "ListItem", position: 3, name: "E-Commerce Fraud", item: "https://rakshaai.co/scams/e-commerce-fraud/" },
    ],
};

const itemListData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "7 Types of E-Commerce Fraud in India 2026",
    url: "https://rakshaai.co/scams/e-commerce-fraud",
    numberOfItems: 7,
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Fake Shopping Website Fraud", url: "https://rakshaai.co/scams/e-commerce-fraud/fake-online-stores/" },
        { "@type": "ListItem", position: 2, name: "Cash on Delivery (COD) Scam", url: "https://rakshaai.co/scams/e-commerce-fraud/cod-fraud/" },
        { "@type": "ListItem", position: 3, name: "Counterfeit and Fake Products", url: "https://rakshaai.co/scams/e-commerce-fraud/counterfeit-products/" },
        { "@type": "ListItem", position: 4, name: "Advance Payment Trap", url: "https://rakshaai.co/scams/e-commerce-fraud/advance-payment-trap/" },
        { "@type": "ListItem", position: 5, name: "Social Media and WhatsApp Shopping Scam", url: "https://rakshaai.co/scams/e-commerce-fraud/social-commerce-scam/" },
        { "@type": "ListItem", position: 6, name: "Fake Seller on Marketplace Fraud", url: "https://rakshaai.co/scams/e-commerce-fraud/fake-marketplace-seller/" },
        { "@type": "ListItem", position: 7, name: "Phantom Delivery Scam", url: "https://rakshaai.co/scams/e-commerce-fraud/phantom-delivery/" },
    ],
};

const faqStructured = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Is e-commerce legit and safe to use in India?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, established platforms like Amazon India, Flipkart, Myntra, and Nykaa are legitimate and safe when you purchase directly from verified sellers. The risk comes from third-party sellers on these platforms, from fake shopping websites mimicking real brands, and from social media or WhatsApp sellers with no accountability. Always verify the seller rating, account age, and return policy before purchasing, and check unfamiliar shopping websites on RakshaAI's Website Safety Checker before entering payment details.",
            },
        },
        {
            "@type": "Question",
            name: "What is e-commerce fraud and how does it happen?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "E-commerce fraud is any scam that exploits online shopping platforms to steal money or data. It includes fake shopping websites that take payment and disappear, counterfeit products delivered instead of genuine items, phantom deliveries where orders are marked delivered without arriving, COD parcels you never ordered, and advance payment traps where sellers take money outside the platform. In India, 35% of consumers encountered fake products in the past year.",
            },
        },
        {
            "@type": "Question",
            name: "What should I do if I get scammed while shopping online?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Act within 24 hours for the best outcome. Step 1: If you paid via UPI or card, call 1930 (National Cyber Crime Helpline) immediately. Step 2: Raise a dispute inside the shopping platform  Amazon, Flipkart, or Meesho have buyer protection mechanisms. Step 3: Call the National Consumer Helpline at 1800-11-4000. Step 4: File on cybercrime.gov.in. Step 5: If you paid by card, raise a chargeback with your bank  ecommerce chargebacks are your strongest recovery tool under RBI guidelines.",
            },
        },
        {
            "@type": "Question",
            name: "How do I identify a fake ecommerce website?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Seven checks in 60 seconds: (1) Check the domain age  fake sites are often less than 30 days old. (2) Look for a working customer care phone number. (3) Check if payment methods include only UPI or bank transfer. (4) Search for the website name + 'scam' or 'review' on Google. (5) Check for a proper Returns and Refunds policy. (6) Verify HTTPS. (7) Use RakshaAI's Website Safety Checker for an instant fraud database check.",
            },
        },
        {
            "@type": "Question",
            name: "What is the COD fraud scam and how do I handle unordered parcels?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "In the COD fraud scam, a small parcel arrives at your home for a low amount  usually ₹99 to ₹499  that you never ordered. Paying confirms your address and spending habits for future larger scams. The parcel typically contains cheap, unusable junk. If you receive an unordered COD parcel: (1) Do not pay the delivery agent. (2) Note the sender name, courier company, and tracking ID. (3) Reject the parcel and ask for a written receipt of rejection. (4) Report the sender to the National Consumer Helpline at 1800-11-4000 and on cybercrime.gov.in.",
            },
        },
        {
            "@type": "Question",
            name: "What is the National Consumer Helpline and how does it help?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The National Consumer Helpline (NCH), reachable at 1800-11-4000 (toll-free, 24/7), is India's official consumer grievance platform under the Department of Consumer Affairs, Government of India. It directly contacts e-commerce platforms to resolve complaints. Between April 2025 and January 2026, NCH facilitated ₹36.8 crore in e-commerce-related refunds and had 1,185 companies voluntarily partnered under its Convergence programme, including Amazon, Flipkart, Meesho, and Myntra.",
            },
        },
        {
            "@type": "Question",
            name: "What are dark patterns in ecommerce India and are they illegal?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Dark patterns are manipulative design tactics that trick users into unwanted purchases or decisions. The CCPA issued Dark Patterns Guidelines in 2023, identifying 13 specific practices including drip pricing, bait and switch, confirm shaming, and subscription traps  all illegal under the Consumer Protection Act 2019. In June 2025, CCPA directed 28 leading platforms to submit compliance declarations. Violations can be reported to consumerhelpline.gov.in.",
            },
        },
        {
            "@type": "Question",
            name: "How do fake sellers on Amazon and Flipkart operate?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Fake sellers on marketplace platforms typically follow a predictable pattern: they build a seller account with a small number of legitimate sales to accumulate positive reviews, then switch to counterfeit or non-existent products. They manipulate tracking systems to show 'Delivered' status before a real package is sent. In December 2025, Amazon India cases showed sellers marking orders delivered days before the delivery window, then sending a fake or wrong package. Your best defence is to check seller account age, verify 'Most Recent' reviews, and raise a dispute immediately if an order is wrongly marked delivered.",
            },
        },
        {
            "@type": "Question",
            name: "What is a chargeback and how do I use it for ecommerce fraud?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A chargeback is a formal dispute you raise with your bank or card provider to reverse a fraudulent card transaction. Under RBI's dispute resolution guidelines, your bank must acknowledge a chargeback request within 48 hours. To raise one: call your bank's customer care, provide the transaction details, the merchant name, and evidence of non-delivery or fraud. Ecommerce chargebacks are most effective for credit card payments to fake shopping websites, where the merchant has no proof of delivery. Always raise the platform dispute first before the bank chargeback, as some issuers ask for evidence of the platform complaint.",
            },
        },
        {
            "@type": "Question",
            name: "Which types of online shopping scams are most common in India in 2026?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Based on ASPA–CRISIL, NCH, and CCPA data for 2025–26: (1) Counterfeit products  35% of consumers affected. (2) Non-delivery or phantom delivery fraud  28% of marketplace complaints. (3) Fake shopping websites, especially during festive sales. (4) COD fraud with unordered parcels  highest in Tier-2/3 cities. (5) Social media and WhatsApp shopping scams  fastest growing vector, fuelled by AI deepfake shopping scam product images.",
            },
        },
    ],
};

// ── Scam Types ────────────────────────────────────────────────────────────────
const scamTypes = [
    {
        emoji: "🛒",
        href: "/scams/e-commerce-fraud/fake-online-stores/",
        title: "Fake Shopping Website Fraud",
        description: "Scammers create convincing copy-cat stores with real brand logos and fake products. After you pay, nothing arrives or you receive a worthless substitute.",
        risk: "Very High",
        riskColor: "text-red-600 dark:text-red-400",
        riskBg: "bg-red-100 dark:bg-red-900/40",
    },
    {
        emoji: "📦",
        href: "/scams/e-commerce-fraud/cod-fraud/",
        title: "Cash on Delivery (COD) Scam",
        description: "You receive an unordered COD parcel with a low amount like ₹99–₹299. Paying confirms your address data for larger scams. The parcel contains junk.",
        risk: "Very High",
        riskColor: "text-red-600 dark:text-red-400",
        riskBg: "bg-red-100 dark:bg-red-900/40",
    },
    {
        emoji: "🚫",
        href: "/scams/e-commerce-fraud/counterfeit-products/",
        title: "Counterfeit and Fake Products",
        description: "A third-party seller on Amazon, Flipkart, or Meesho ships a counterfeit version of a branded product. ASPA/CRISIL 2026: 9 in 10 urban Indians bought counterfeit at least once.",
        risk: "High",
        riskColor: "text-orange-600 dark:text-orange-400",
        riskBg: "bg-orange-100 dark:bg-orange-900/40",
    },
    {
        emoji: "💸",
        href: "/scams/e-commerce-fraud/advance-payment-trap/",
        title: "Advance Payment Trap",
        description: "A seller demands full upfront payment outside the platform  often via UPI or bank transfer. Once you pay, the seller disappears and the order never ships.",
        risk: "Very High",
        riskColor: "text-red-600 dark:text-red-400",
        riskBg: "bg-red-100 dark:bg-red-900/40",
    },
    {
        emoji: "📲",
        href: "/scams/e-commerce-fraud/social-commerce-scam/",
        title: "Social Media & WhatsApp Shopping Scam",
        description: "Fake seller pages on Instagram and WhatsApp groups offer steep discounts. Products are never delivered or are cheap imitations. AI deepfake shopping scams rose sharply in 2025–26.",
        risk: "High",
        riskColor: "text-orange-600 dark:text-orange-400",
        riskBg: "bg-orange-100 dark:bg-orange-900/40",
    },
    {
        emoji: "👤",
        href: "/scams/e-commerce-fraud/fake-marketplace-seller/",
        title: "Fake Seller on Marketplace Fraud",
        description: "Fraudulent sellers on Amazon India, Flipkart, and Meesho list products, collect payment, then mark the order 'Delivered' without shipping. Victims get a tracking ID for an empty or wrong package.",
        risk: "High",
        riskColor: "text-orange-600 dark:text-orange-400",
        riskBg: "bg-orange-100 dark:bg-orange-900/40",
    },
    {
        emoji: "🚚",
        href: "/scams/e-commerce-fraud/phantom-delivery/",
        title: "Phantom Delivery Scam",
        description: "Your order is marked 'Delivered' before you ever receive it. A fake or empty package follows to beat the refund window. The scammer disappears with your payment.",
        risk: "High",
        riskColor: "text-orange-600 dark:text-orange-400",
        riskBg: "bg-orange-100 dark:bg-orange-900/40",
    },
];

// ── Red flags ─────────────────────────────────────────────────────────────────
const redFlags = [
    "A shopping website with no physical address, no working customer care number, and payment only via UPI or bank transfer",
    "A price that is 40–70% below the MRP on every other platform  if it seems too good to be true, it is",
    "A seller asking you to continue the transaction outside the platform  on WhatsApp, by phone, or via a separate link",
    "A COD parcel you did not order arriving at your door  do not pay, do not open, note the courier details",
    "An order marked \u2018Delivered\u2019 before the promised delivery window, with no physical package received",
    "A social media page or WhatsApp group offering brand-name products at clearance prices with no verifiable seller identity",
    "A customer care representative asking for your OTP to \u2018process a refund\u2019 or \u2018verify your order\u2019  this is always a scam",
];

// ── Safety tips (5 rules) ─────────────────────────────────────────────────────
const safetyTips = [
    {
        rule: "Rule 1",
        title: "Only shop on platforms you can verify independently",
        desc: "Before entering any payment details on a new shopping website, check it on RakshaAI's Website Safety Checker. Look for an operational customer care number, a physical address, and a consistent return policy. Fake ecommerce websites rarely have all three. Scam detector sites flag thousands of new fraudulent domains every week  checking takes 10 seconds.",
    },
    {
        rule: "Rule 2",
        title: "Never pay outside the platform",
        desc: "The moment a seller on Amazon India, Flipkart, or Meesho asks you to pay via a direct UPI transfer, a WhatsApp link, or a third-party account  stop. All legitimate marketplace transactions happen through the platform's own payment system. Off-platform payments have no buyer protection and no dispute mechanism.",
    },
    {
        rule: "Rule 3",
        title: "Verify seller identity and reviews before purchasing",
        desc: "For any new seller on a marketplace, check how long the seller account has been active and whether reviews are spread across time or all posted in a short period. Fake ecommerce store detection is easier when you sort reviews by 'Most Recent' rather than 'Most Helpful'  scammers game algorithms on the helpful sort. For social media purchases, always ask for a GST number and a verifiable business address.",
    },
    {
        rule: "Rule 4",
        title: "Open COD parcels before paying the delivery agent",
        desc: "This eliminates the COD fraud scam. You have the legal right to inspect any cash-on-delivery parcel before paying. If the delivery agent refuses to allow inspection, refuse the parcel and note the tracking details. If you receive an unordered COD parcel, reject it at the door and report the sender's information to the National Consumer Helpline at 1800-11-4000.",
    },
    {
        rule: "Rule 5",
        title: "Urgency is always a manipulation tactic",
        desc: "Every festive sale scam India involves manufactured time pressure: 'Only 2 left,' 'Offer ends in 10 minutes,' 'Special deal only for you.' Real e-commerce platforms do not pressure customers to bypass security steps. If any shopping interaction feels rushed, slow down, verify the seller, and use an established platform's checkout rather than a direct payment link.",
    },
];

// ── How to verify a site ──────────────────────────────────────────────────────
const verifySteps = [
    {
        icon: Lock,
        title: "Check HTTPS and the domain name",
        desc: "Always look for the padlock icon and 'https://' in the URL. Also read the domain carefully  fraudsters use names like 'amaz0n-india.shop' or 'fIipkart.net' that look correct at a glance.",
    },
    {
        icon: Search,
        title: "Search + 'review' or 'scam'",
        desc: "Type the site name followed by 'reviews', 'scam', or 'complaint' into Google. Victims are quick to post warnings. Even one or two negative results should stop you.",
    },
    {
        icon: Globe,
        title: "Check domain age on WHOIS",
        desc: "Visit who.is or whois.domaintools.com and enter the URL. If the domain is less than 3–6 months old, treat it with extreme caution regardless of how polished the site looks.",
    },
    {
        icon: Phone,
        title: "Call the customer care number before ordering",
        desc: "Call the number listed on the website before you pay anything. If no one answers, it's a generic voicemail, or the number doesn't exist  don't order.",
    },
    {
        icon: Eye,
        title: "Use RakshaAI to verify the website",
        desc: "Paste the store URL into RakshaAI's website checker. It cross-references multiple fraud databases, domain data, and community reports to give you a trust score in seconds.",
    },
];

// ── What to do after ──────────────────────────────────────────────────────────
const afterScam = [
    {
        step: "01",
        title: "Call 1930 (National Cyber Crime Helpline) for Online Payment Fraud",
        desc: "If you lost money via UPI, net banking, or card payment to a fake shopping site, call 1930 immediately. The CFCFRMS system has helped recover ₹5,489 crore across 17.82 lakh complaints. Provide: your transaction ID, the amount, the website or seller UPI ID, and the time of payment.",
        urgent: true,
    },
    {
        step: "02",
        title: "File a Complaint on the Platform and Escalate to the National Consumer Helpline",
        desc: "File a formal complaint inside the shopping app: Amazon India dispute centre, Flipkart buyer protection, or Meesho customer care. If the platform does not resolve within 48 hours, escalate to the National Consumer Helpline at 1800-11-4000. The NCH facilitated ₹36.8 crore in e-commerce refunds between April 2025 and January 2026, and operates under the Consumer Protection Act 2019.",
        urgent: true,
    },
    {
        step: "03",
        title: "File on cybercrime.gov.in",
        desc: "Visit cybercrime.gov.in and select 'Report Financial Cyber Crime.' Upload: a screenshot of the fraudulent order or transaction, the seller's ID, any WhatsApp or SMS conversations, and the platform complaint reference number. The case number activates formal investigation protocols.",
        urgent: false,
    },
    {
        step: "04",
        title: "Raise a Chargeback with Your Bank or Card Provider",
        desc: "If you paid by credit or debit card, contact your bank and request a chargeback under the dispute resolution process. Under RBI guidelines, your bank must respond within 48 hours. Ecommerce chargebacks are your strongest recovery tool for card payments to fake websites, as the payment processor can reverse the transaction if the merchant cannot prove delivery. Always raise the platform dispute first before the bank chargeback.",
        urgent: false,
    },
    {
        step: "05",
        title: "File a Complaint with CCPA or Consumer Forum",
        desc: "For non-delivery, counterfeit products, or platform-level violations, file a complaint with the Central Consumer Protection Authority at consumerhelpline.gov.in. The CCPA imposed penalties of ₹10 lakh each on Amazon, Flipkart, Meesho, and Meta in February 2026. District Consumer Forums handle individual claims, particularly for losses above ₹20,000.",
        urgent: false,
    },
];

// ── FAQs ──────────────────────────────────────────────────────────────────────
const faqs = [
    {
        q: "Is e-commerce legit and safe to use in India?",
        a: "Yes, established platforms like Amazon India, Flipkart, Myntra, and Nykaa are legitimate and safe when you purchase directly from verified sellers. The risk comes from third-party sellers on these platforms, from fake shopping websites mimicking real brands, and from social media or WhatsApp sellers with no accountability. Always verify the seller rating, account age, and return policy before purchasing, and check unfamiliar shopping websites on RakshaAI's Website Safety Checker before entering payment details.",
    },
    {
        q: "What is e-commerce fraud and how does it happen?",
        a: "E-commerce fraud is any scam that exploits online shopping platforms to steal money or data. It includes fake shopping websites that take payment and disappear, counterfeit products delivered instead of genuine items, phantom deliveries where orders are marked delivered without arriving, COD parcels you never ordered, and advance payment traps where sellers take money outside the platform. In India, 35% of consumers encountered fake products in the past year.",
    },
    {
        q: "What should I do if I get scammed while shopping online?",
        a: "Act within 24 hours for the best outcome. Step 1: If you paid via UPI or card, call 1930 (National Cyber Crime Helpline) immediately. Step 2: Raise a dispute inside the shopping platform  Amazon, Flipkart, or Meesho have buyer protection mechanisms. Step 3: Call the National Consumer Helpline at 1800-11-4000. Step 4: File on cybercrime.gov.in. Step 5: If you paid by card, raise a chargeback with your bank  ecommerce chargebacks are your strongest recovery tool under RBI guidelines.",
    },
    {
        q: "How do I identify a fake ecommerce website?",
        a: "Seven checks in 60 seconds: (1) Check the domain age  fake sites are often less than 30 days old. (2) Look for a working customer care phone number  scam sites have none. (3) Check if payment methods include only UPI or bank transfer  legitimate sites accept cards. (4) Search for the website name + 'scam' or 'review' on Google. (5) Check if the site has a proper Returns and Refunds policy. (6) Verify the SSL certificate is real (https). (7) Use RakshaAI's Website Safety Checker for an instant fraud database check.",
    },
    {
        q: "What is the COD fraud scam and how do I handle unordered parcels?",
        a: "In the COD fraud scam, a small parcel arrives at your home for a low amount  usually ₹99 to ₹499  that you never ordered. Paying confirms your address and spending habits for future larger scams. The parcel typically contains cheap, unusable junk. If you receive an unordered COD parcel: (1) Do not pay the delivery agent. (2) Note the sender name, courier company, and tracking ID. (3) Reject the parcel and ask for a written receipt of rejection. (4) Report the sender to the National Consumer Helpline at 1800-11-4000 and on cybercrime.gov.in.",
    },
    {
        q: "What is the National Consumer Helpline and how does it help?",
        a: "The National Consumer Helpline (NCH), reachable at 1800-11-4000 (toll-free, 24/7), is India's official consumer grievance platform under the Department of Consumer Affairs, Government of India. It directly contacts e-commerce platforms to resolve complaints. Between April 2025 and January 2026, NCH facilitated ₹36.8 crore in e-commerce-related refunds and had 1,185 companies voluntarily partnered under its Convergence programme, including Amazon, Flipkart, Meesho, and Myntra.",
    },
    {
        q: "What are dark patterns in ecommerce India and are they illegal?",
        a: "Dark patterns are manipulative design tactics that trick users into unwanted purchases, subscriptions, or decisions. The CCPA issued official Dark Patterns Guidelines in 2023, identifying 13 specific practices including drip pricing, bait and switch, confirm shaming, and subscription traps. These are illegal under the Consumer Protection Act 2019. In June 2025, CCPA directed 28 leading platforms to submit compliance declarations confirming they do not use dark patterns. Violations carry financial penalties and can be reported to the CCPA at consumerhelpline.gov.in.",
    },
    {
        q: "How do fake sellers on Amazon and Flipkart operate?",
        a: "Fake sellers on marketplace platforms typically follow a predictable pattern: they build a seller account with a small number of legitimate sales to accumulate positive reviews, then switch to counterfeit or non-existent products. They manipulate tracking systems to show 'Delivered' status before a real package is sent. In December 2025, Amazon India cases showed sellers marking orders delivered days before the delivery window, then sending a fake or wrong package. Your best defence is to check seller account age, verify 'Most Recent' reviews, and raise a dispute immediately if an order is wrongly marked delivered.",
    },
    {
        q: "What is a chargeback and how do I use it for ecommerce fraud?",
        a: "A chargeback is a formal dispute you raise with your bank or card provider to reverse a fraudulent card transaction. Under RBI's dispute resolution guidelines, your bank must acknowledge a chargeback request within 48 hours. To raise one: call your bank's customer care, provide the transaction details, the merchant name, and evidence of non-delivery or fraud. Ecommerce chargebacks are most effective for credit card payments to fake shopping websites, where the merchant has no proof of delivery. Always raise the platform dispute first before the bank chargeback, as some issuers ask for evidence of the platform complaint.",
    },
    {
        q: "Which types of online shopping scams are most common in India in 2026?",
        a: "Based on ASPA–CRISIL, NCH, and CCPA data for 2025–26: (1) Counterfeit products delivered instead of genuine items  35% of consumers affected. (2) Non-delivery or phantom delivery fraud  28% of marketplace complaints. (3) Fake shopping websites, especially during festive sales  18% of complaints. (4) COD fraud with unordered parcels  highest in Tier-2/3 cities at 10%. (5) Social media and WhatsApp shopping scams  fastest growing vector, fuelled by AI deepfake shopping scam product images.",
    },
];

export default function ECommerceFraudPage() {
    return (
        <DefaultLayout>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLd(faqStructured) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLd(itemListData) }}
            />

            <main className="min-h-screen">

                {/* ── Hero ─────────────────────────────────────────────────── */}
                <section className="relative overflow-hidden bg-gradient-to-br from-violet-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-violet-950 pt-20 pb-24 px-4">
                    <div className="pointer-events-none absolute inset-0 -z-10">
                        <div className="absolute top-10 left-1/4 w-96 h-96 bg-violet-300/10 rounded-full blur-3xl animate-pulse" />
                        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl animate-pulse delay-700" />
                        <div className="absolute top-1/2 left-0 w-64 h-64 bg-pink-300/10 rounded-full blur-3xl animate-pulse delay-1000" />
                    </div>

                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-100 to-purple-100 dark:from-violet-900/40 dark:to-purple-900/40 text-violet-700 dark:text-violet-300 text-xs font-semibold mb-6 border border-violet-200 dark:border-violet-800 shadow-sm">
                            <ShoppingCart className="h-4 w-4 animate-pulse" />
                            35% of Indians Got a Fake Product While Shopping Online Last Year
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
                            E-Commerce Fraud in India 2026:{" "}
                            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                Warning Signs & How to Protect Yourself
                            </span>
                        </h1>

                        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6 leading-relaxed">
                            E-commerce fraud is any criminal trick that exploits online shopping platforms  from fake ecommerce websites to counterfeit deliveries  to steal money or data from Indian shoppers.
                        </p>
                        <p className="text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6 leading-relaxed">
                            In the past year, 35% of Indians encountered fake products while shopping online, and the National Consumer Helpline processed ₹36.8 crore in e-commerce refund disputes between April 2025 and January 2026 alone.
                        </p>
                        <p className="text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                            Below you will find all 7 types of online store scams explained clearly, the red flags to spot early, and exact steps to report online shopping fraud and recover your money in India.
                        </p>

                        {/* Website Safety Checker CTA */}
                        <div className="max-w-2xl mx-auto mb-10 rounded-2xl border border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-950/40 p-6">
                            <p className="text-sm font-bold text-violet-700 dark:text-violet-300 mb-3">Not Sure If That Shopping Site Is Real?</p>
                            <Link
                                href="/website-safety-checker"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 text-white font-bold text-sm shadow-md hover:shadow-violet-300/50 hover:scale-105 transition-all duration-300"
                            >
                                <Shield className="h-4 w-4" />
                                CHECK WEBSITE SAFETY FREE →
                            </Link>
                            <p className="mt-3 text-xs text-violet-600 dark:text-violet-400">Free · No login required · Instant results · Built for Indian shoppers</p>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            {[
                                { value: "35%", label: "Indians Got a Fake Product in Past Year", icon: <AlertTriangle className="h-4 w-4" /> },
                                { value: "₹36.8 Crore", label: "Refunds via NCH  Apr 2025 to Jan 2026", icon: <IndianRupee className="h-4 w-4" /> },
                                { value: "45%", label: "Festive Season Scam Victims (McAfee 2024)", icon: <TrendingUp className="h-4 w-4" /> },
                                { value: "9 in 10", label: "Urban Indians Bought Counterfeit At Least Once", icon: <Users className="h-4 w-4" /> },
                            ].map(({ value, label, icon }, i) => (
                                <div
                                    key={label}
                                    className="group flex flex-col items-center px-6 py-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 min-w-[130px]"
                                    style={{ animationDelay: `${i * 100}ms` }}
                                >
                                    <div className="text-violet-500 mb-1 group-hover:scale-110 transition-transform">{icon}</div>
                                    <span className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">{value}</span>
                                    <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-center">{label}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <ReportScamButton className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 text-white font-bold text-sm shadow-lg hover:shadow-violet-300/50 hover:scale-105 transition-all duration-300 cursor-pointer">
                                <ShieldAlert className="h-5 w-5" />
                                Report a Shopping Scam
                                <ArrowRight className="h-4 w-4" />
                            </ReportScamButton>
                            <Link
                                href="/website-safety-checker"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 font-semibold text-sm border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
                            >
                                Check a Website Now
                                <ChevronDown className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </section>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

                    {/* ── The Scale of the Problem ──────────────────────────── */}
                    <section>
                        <div className="grid lg:grid-cols-2 gap-10 items-center">
                            <div>
                                <span className="inline-block px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-xs font-semibold mb-4">
                                    Why This Matters
                                </span>
                                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-6 leading-snug">
                                    India's Online Shopping Boom Has a Dark Side
                                </h2>
                                <div className="space-y-4 text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                                    <p>
                                        India crossed 300 million online shoppers in 2024. With that growth came an
                                        explosion of opportunity  not just for honest businesses, but for an entire
                                        ecosystem of fraudsters who have built sophisticated operations specifically
                                        targeting Indian consumers.
                                    </p>
                                    <p>
                                        These aren't just poorly-made scam websites that any savvy person would dismiss.
                                        Modern fake e-commerce sites use stolen brand assets, genuine-looking product photos,
                                        fabricated customer reviews, and realistic checkout flows. Some even offer COD 
                                        cash on delivery  because they know that reduces your suspicion, only to deliver
                                        sealed boxes filled with sand or old newspapers.
                                    </p>
                                    <p>
                                        The scale is staggering. In 2023 alone, over 1.1 lakh e-commerce fraud complaints
                                        were filed with India's National Consumer Helpline  and that's only the reported
                                        cases. Most victims, embarrassed or unaware of the process, never file a complaint
                                        at all.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/40 dark:to-purple-950/40 rounded-2xl p-8 border border-violet-100 dark:border-violet-900 space-y-5">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                                        <Info className="h-5 w-5 text-white" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 dark:text-white text-lg">The Golden Rule</h3>
                                </div>
                                <ul className="space-y-4">
                                    {[
                                        { icon: XCircle, color: "text-red-500", text: "Any deal more than 60% off market price from an unknown site is almost always a scam." },
                                        { icon: XCircle, color: "text-red-500", text: "Sites that accept only UPI/bank transfer (no COD, no card) have zero buyer protection." },
                                        { icon: XCircle, color: "text-red-500", text: "A professional-looking website is not proof of legitimacy. Scam sites can look perfect." },
                                        { icon: CheckCircle2, color: "text-green-500", text: "Always pay with credit card where possible  it offers the strongest chargeback protection." },
                                        { icon: CheckCircle2, color: "text-green-500", text: "Open every package on video while the delivery agent waits  this is your only evidence." },
                                        { icon: CheckCircle2, color: "text-green-500", text: "Verify any unfamiliar website on RakshaAI before completing your first purchase." },
                                    ].map(({ icon: Icon, color, text }) => (
                                        <li key={text} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                                            <Icon className={`h-4 w-4 ${color} flex-shrink-0 mt-0.5`} />
                                            {text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* ── E-Commerce Fraud Scale + Image ───────────────────── */}
                    <section aria-labelledby="ec-scale-heading">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <span className="text-xs font-bold text-violet-600 dark:text-violet-400 uppercase tracking-widest">
                                    Official 2024 Data
                                </span>
                                <h2
                                    id="ec-scale-heading"
                                    className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-2 mb-4"
                                >
                                    How Big Is India's Online Shopping Fraud Problem?
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                    India's e-commerce sector crossed 300 million shoppers in 2024  and with that growth
                                    came an explosion of fraud. From fake sites to phantom deliveries, Indian consumers
                                    lost crores in preventable scams last year alone.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { label: "Lost to online shopping fraud in 2023–24", value: "₹7,061 Cr", color: "from-violet-500 to-purple-600" },
                                        { label: "E-commerce complaints filed in 2023", value: "1.1 Lakh+", color: "from-rose-500 to-pink-600" },
                                        { label: "Increase in fake shopping sites since 2021", value: "3× Rise", color: "from-orange-500 to-amber-600" },
                                        { label: "Urban Indians who bought a counterfeit online", value: "9 in 10", color: "from-red-500 to-rose-600" },
                                    ].map((item) => (
                                        <div
                                            key={item.label}
                                            className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-4 shadow-sm text-center"
                                        >
                                            <div className={`text-xl font-extrabold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-1`}>
                                                {item.value}
                                            </div>
                                            <div className="text-xs text-gray-500 dark:text-gray-400 leading-tight">
                                                {item.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative flex justify-center items-center h-full min-h-[300px]">
                                <Image
                                    src="/image/how-to-identify-fake-websites.jpg"
                                    alt="How to identify fake e-commerce websites in India  warning signs of online shopping fraud, fake product listings and counterfeit seller scams, RakshaAI"
                                    title="How to Identify Fake Shopping Websites in India | RakshaAI"
                                    width={500}
                                    height={500}
                                    className="object-contain drop-shadow-2xl max-w-full h-auto rounded-3xl"
                                />
                            </div>
                        </div>
                    </section>

                    {/* ── 7 Scam Types ─────────────────────────────────────── */}
                    <section>
                        <div className="text-center mb-12">
                            <span className="inline-block px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-semibold mb-4">
                                Know the Playbook
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                7 Types of E-Commerce Fraud in India 2026  See Articles Below
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-base">
                                Online shopping scams in India are not one single crime. Scammers use seven distinct methods, each exploiting a different moment in the shopping journey. Click any card below for the complete guide on that fraud type.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5">
                            {scamTypes.map(({ emoji, href, title, description, risk, riskColor, riskBg }) => (
                                <Link
                                    key={title}
                                    href={href}
                                    className="group flex items-start gap-5 p-6 rounded-2xl border bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800 hover:shadow-lg hover:border-violet-200 dark:hover:border-violet-800 transition-all duration-300"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                                        {emoji}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                                            <h3 className="font-bold text-gray-900 dark:text-white text-base">{title}</h3>
                                            <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${riskColor} ${riskBg}`}>{risk}</span>
                                        </div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* ── How E-Commerce Fraud Actually Works ──────────────── */}
                    <section>
                        <div className="text-center mb-12">
                            <span className="inline-block px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-xs font-semibold mb-4">
                                The Fraud Playbook
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                How E-Commerce Fraud Actually Works in India
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-base">
                                Every type of online store scam follows the same three-stage playbook. Understanding this playbook protects you against all seven fraud types at once.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-3 gap-6">
                            {[
                                {
                                    stage: "Stage 1",
                                    title: "Target Selection",
                                    color: "from-rose-500 to-pink-600",
                                    bg: "bg-rose-50 dark:bg-rose-950/30 border-rose-100 dark:border-rose-900",
                                    desc: "Scammers build target lists from leaked e-commerce databases, social media users who engage with shopping posts, WhatsApp deal groups, and price comparison platforms. Festive season shoppers are the highest-value targets  McAfee's 2024 survey found 45% of Indian consumers were affected during the October festive season alone. Dark patterns on ecommerce India platforms, such as 'drip pricing' and 'bait and switch'  now officially classified by CCPA's 2023 Guidelines  are used to distort your decision-making before the scam even begins.",
                                },
                                {
                                    stage: "Stage 2",
                                    title: "Approach & Trust Building",
                                    color: "from-amber-500 to-orange-600",
                                    bg: "bg-amber-50 dark:bg-amber-950/30 border-amber-100 dark:border-amber-900",
                                    desc: "Fake stores are built to look exactly like Flipkart, Amazon India, or Myntra. AI deepfake shopping scam techniques in 2025–26 now generate convincing product photos, fake review profiles, and influencer endorsements automatically. WhatsApp shopping scam India groups pose as reseller networks with 'flash sale' offers. Fraudulent sellers on marketplaces accumulate five-star reviews through early legitimate sales before switching to counterfeit goods. The advance payment trap uses urgency  'stock running out,' 'offer expires tonight'  to push payment before you verify.",
                                },
                                {
                                    stage: "Stage 3",
                                    title: "Execution & Disappearance",
                                    color: "from-violet-500 to-purple-600",
                                    bg: "bg-violet-50 dark:bg-violet-950/30 border-violet-100 dark:border-violet-900",
                                    desc: "The fraud completes the moment payment is made. A fake shopping website takes the payment and closes within days. A marketplace fraudster marks the order delivered before shipping. A COD scammer uses your address data. A phantom delivery scam manipulates courier tracking to show delivery status before any package moves. Unlike UPI transactions, marketplace disputes require a formal platform complaint process before a bank can intervene  making speed critical. File a complaint with the National Consumer Helpline or cybercrime.gov.in within 24 hours for the best chance of recovery.",
                                },
                            ].map(({ stage, title, color, bg, desc }) => (
                                <div key={stage} className={`p-6 rounded-2xl border ${bg}`}>
                                    <div className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${color} text-white text-xs font-bold mb-3`}>
                                        {stage}
                                    </div>
                                    <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-3">{title}</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* Inline CTA */}
                        <div className="mt-8 rounded-2xl border border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-950/40 p-6 text-center">
                            <p className="text-sm font-semibold text-violet-700 dark:text-violet-300 mb-3">Is That Shopping Website Safe? Check It in 10 Seconds</p>
                            <Link
                                href="/website-safety-checker"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 text-white font-bold text-sm shadow-md hover:shadow-violet-300/50 hover:scale-105 transition-all duration-300"
                            >
                                <Shield className="h-4 w-4" />
                                CHECK WEBSITE NOW →
                            </Link>
                        </div>
                    </section>

                    {/* ── Real Story: COD Scam ──────────────────────────────── */}
                    <section className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8 sm:p-12 border border-gray-100 dark:border-gray-800">
                        <span className="inline-block px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs font-semibold mb-4">
                            It Happened to a Real Family
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
                            "I Paid ₹4,200 in Cash. The Box Had Sand in It."  A Real Account
                        </h2>
                        <div className="grid lg:grid-cols-2 gap-8 text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                            <div className="space-y-4">
                                <p>
                                    Sunita (name changed), a homemaker from Kanpur, saw an Instagram ad for a pressure
                                    cooker set  a brand she recognised  for ₹4,200, marked down from ₹8,500. The seller's
                                    page had 4.8 stars, dozens of comment photos showing happy customers with the same
                                    product. She selected COD because "at least I won't lose money upfront."
                                </p>
                                <p>
                                    The package arrived three days later, well-packaged and sealed with what looked like
                                    official courier tape. The delivery agent seemed friendly, collected the cash, handed
                                    over the receipt, and left. Sunita brought the box inside, cut it open  and found
                                    sand, some crumpled newspapers, and two broken clay pots.
                                </p>
                                <p>
                                    "I called the number on the seller's page. The first time it rang. The second time,
                                    invalid number. The Instagram page had vanished. I sat there for twenty minutes just
                                    not believing what had happened."
                                </p>
                            </div>
                            <div className="space-y-4">
                                <p>
                                    The reviews were fabricated. The 'brand' photos were stolen. The comments were from a
                                    paid review farm that posted bulk reviews on multiple fraudulent pages simultaneously.
                                    The courier had no idea  the seller had packed and sealed the box themselves.
                                </p>
                                <p>
                                    Sunita filed a complaint with the National Consumer Helpline and cybercrime.gov.in.
                                    Her case was registered, but since she paid cash, recovery was extremely difficult.
                                    Her story is replicated thousands of times every month across India.
                                </p>
                                <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border border-orange-200 dark:border-orange-800">
                                    <p className="text-sm font-bold text-orange-700 dark:text-orange-300 mb-2">The COD Safety Rule:</p>
                                    <p className="text-sm text-gray-700 dark:text-gray-300">
                                        Always open your package <strong className="text-gray-900 dark:text-white">on video</strong> while
                                        the delivery agent is still at your door. Ask them to wait 60 seconds.
                                        If the contents are wrong, you have a witness and documented proof 
                                        and the agent can refuse to leave until you resolve the issue.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ── Fake Site Deep Dive ───────────────────────────────── */}
                    <section>
                        <div className="grid lg:grid-cols-2 gap-10 items-start">
                            <div>
                                <span className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-4">
                                    How Fake Sites Work
                                </span>
                                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-6 leading-snug">
                                    How Are Fake E-Commerce Sites Built So Convincingly?
                                </h2>
                                <div className="space-y-4 text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                                    <p>
                                        You might wonder: how can a site look so legitimate and be completely fraudulent?
                                        The answer is that building a convincing fake shopping site now costs almost nothing
                                        and takes under a day. Scammers use Shopify, WooCommerce, or free website builders,
                                        download stolen product images from legitimate retailers, and populate the site with
                                        AI-generated or plagiarised product descriptions.
                                    </p>
                                    <p>
                                        They register domains that mimic popular brands  using numbers instead of letters
                                        (amaz0n), adding 'india', 'official', or 'store' to known names, or creating
                                        entirely fictional-sounding legitimate businesses. They run Facebook and Google
                                        ads with genuine-looking product shots to reach thousands of potential victims.
                                    </p>
                                    <p>
                                        Many fake sites even have entire return policy pages, 'about us' sections with
                                        stock photos of 'team members', GST numbers (often fake or stolen), and customer
                                        service email addresses that never respond. The entire objective is to cross
                                        the psychological threshold of trust long enough for you to enter your payment
                                        details or hand over cash.
                                    </p>
                                    <p>
                                        Once enough orders accumulate, the site goes dark. The domain is usually abandoned
                                        and a new one registered within days. By the time victims start complaining,
                                        there is nothing left to trace.
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-blue-50 dark:bg-blue-950/30 rounded-2xl p-6 border border-blue-100 dark:border-blue-900">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                                            <Globe className="h-5 w-5 text-white" />
                                        </div>
                                        <h3 className="font-bold text-gray-900 dark:text-white">Anatomy of a Fake Site</h3>
                                    </div>
                                    <ul className="space-y-3">
                                        {[
                                            { label: "Domain", detail: "Registered 4–8 weeks ago, mimics a real brand name" },
                                            { label: "SSL Certificate", detail: "Free HTTPS  proves nothing about legitimacy" },
                                            { label: "Product Images", detail: "Stolen from Amazon, Flipkart, or brand websites" },
                                            { label: "Reviews", detail: "Bulk-purchased from review farms, all 5-star, no photos" },
                                            { label: "Price", detail: "60–90% below real market price to attract clicks" },
                                            { label: "Payment", detail: "UPI only, or payment gateway with no buyer protection" },
                                            { label: "Lifespan", detail: "7–90 days before abandoning and relaunching elsewhere" },
                                        ].map(({ label, detail }) => (
                                            <li key={label} className="flex items-start justify-between gap-4 text-sm">
                                                <span className="font-semibold text-gray-700 dark:text-gray-300 min-w-[90px]">{label}</span>
                                                <span className="text-gray-500 dark:text-gray-400">{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                                            <AlertTriangle className="h-4 w-4 text-white" />
                                        </div>
                                        <h3 className="font-bold text-gray-900 dark:text-white text-sm">The HTTPS Myth</h3>
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                        Many people believe a padlock icon means a site is safe. It doesn't. HTTPS only
                                        means the connection is encrypted  not that the site owner is trustworthy.
                                        Over 80% of phishing and fake shopping sites now use HTTPS. The padlock
                                        is necessary but nowhere near sufficient.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ── Social Media Shopping Scams ───────────────────────── */}
                    <section className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/30 rounded-2xl p-8 sm:p-12 border border-pink-100 dark:border-pink-900">
                        <span className="inline-block px-3 py-1 rounded-full bg-pink-100 dark:bg-pink-900/40 text-pink-700 dark:text-pink-300 text-xs font-semibold mb-4">
                            The Fastest-Growing Threat
                        </span>
                        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6">
                            Instagram & Facebook Shopping Scams: Why They're So Effective
                        </h2>
                        <div className="grid lg:grid-cols-2 gap-8 text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                            <div className="space-y-4">
                                <p>
                                    Social media shopping scams deserve their own section because they're fundamentally
                                    different from website fraud  and they're growing three times faster. On Instagram
                                    and Facebook, a fake seller's page can look almost indistinguishable from a genuine
                                    small business, complete with reels, story highlights, and customer testimonial videos
                                    (all stolen or staged).
                                </p>
                                <p>
                                    The scam usually works like this: you see an ad for a product  often clothing,
                                    skincare, electronics, or jewellery  at a price that's attractive but not obviously
                                    suspicious. You click, explore a well-curated page, maybe DM the seller. They respond
                                    quickly, professionally, and warmly. They ask you to pay via UPI or bank transfer
                                    'to avoid transaction fees'. Once you pay  silence.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <p>
                                    Some sophisticated scammers even deliver the first few orders correctly  building
                                    trust, encouraging larger repeat purchases, and getting word-of-mouth referrals 
                                    before eventually taking large advance payments and disappearing.
                                </p>
                                <div className="grid grid-cols-1 gap-3 mt-4">
                                    {[
                                        { icon: "🚩", text: "Any seller asking you to DM them to complete a purchase outside the platform" },
                                        { icon: "🚩", text: "'No refunds after payment' policies buried in captions" },
                                        { icon: "🚩", text: "Account created recently with suspiciously round follower numbers (5K, 10K, 50K)" },
                                        { icon: "🚩", text: "All review comments posted within the same 1–2 week period" },
                                        { icon: "🚩", text: "Prominent 'Verified' badges that are not the actual Meta verification tick" },
                                    ].map(({ icon, text }) => (
                                        <div key={text} className="flex items-start gap-3 p-3 bg-white dark:bg-gray-900 rounded-xl border border-pink-100 dark:border-pink-900 text-sm text-gray-700 dark:text-gray-300">
                                            <span className="text-base flex-shrink-0">{icon}</span>
                                            {text}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ── 7 Red Flags ─────────────────────────────────────── */}
                    <section>
                        <div className="text-center mb-12">
                            <span className="inline-block px-3 py-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-xs font-semibold mb-4">
                                Warning Signs
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                7 E-Commerce Fraud Warning Signs You Should Never Ignore
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-base">
                                These warning signs apply across all seven fraud types. If even one appears in any shopping interaction, treat it as a potential scam until you can independently verify it.
                            </p>
                        </div>
                        <div className="mb-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600 text-white text-sm font-bold">
                                🚨 Stop and Check Before You Pay If You See Any of These:
                            </div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {redFlags.map((flag, i) => (
                                <div
                                    key={flag}
                                    className="flex items-start gap-4 p-5 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md hover:border-red-200 dark:hover:border-red-800 transition-all duration-200"
                                >
                                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center text-white text-xs font-bold">
                                        {String(i + 1).padStart(2, "0")}
                                    </div>
                                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{flag}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── Who Gets Targeted ─────────────────────────────────── */}
                    <section className="bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-900/50 dark:to-slate-900/50 rounded-2xl p-8 sm:p-12 border border-gray-100 dark:border-gray-800">
                        <span className="inline-block px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 text-xs font-semibold mb-4">
                            Know Your Risk
                        </span>
                        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6">
                            Who Do E-Commerce Scammers Target  And Why?
                        </h2>
                        <div className="grid lg:grid-cols-2 gap-8 text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                            <div className="space-y-4">
                                <p>
                                    The honest answer is: everyone. E-commerce fraud doesn't discriminate the way some
                                    other scams do. You don't need to be naive or inexperienced to fall for a convincing
                                    fake site  you just need to be in a hurry, excited about a deal, or distracted while
                                    ordering on your phone.
                                </p>
                                <p>
                                    That said, certain groups are disproportionately targeted. <strong className="text-gray-900 dark:text-white">First-time online shoppers</strong> 
                                    particularly in tier-2 and tier-3 cities  are prime targets because they lack the
                                    reference experience to notice inconsistencies. <strong className="text-gray-900 dark:text-white">Festival season shoppers</strong> are
                                    targeted with fake 'Big Billion Day' or 'Great Indian Festival' clone sites that
                                    perfectly mimic legitimate platform sales.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <p>
                                    <strong className="text-gray-900 dark:text-white">Deal hunters</strong> who actively search for the cheapest price across
                                    platforms are another major target group  scammers specifically appear in Google
                                    Shopping results for high-value items like TVs, laptops, and smartphones, knowing
                                    that deal-seeking behaviour bypasses normal caution.
                                </p>
                                <div className="grid grid-cols-2 gap-4 mt-2">
                                    {[
                                        { icon: Users, label: "First-time shoppers", note: "Lack comparison basis" },
                                        { icon: ShoppingCart, label: "Festival deal hunters", note: "Excitement overrides caution" },
                                        { icon: Smartphone, label: "Mobile-first users", note: "Small screen hides URL red flags" },
                                        { icon: TrendingUp, label: "Social media shoppers", note: "Platform trust transferred to seller" },
                                    ].map(({ icon: Icon, label, note }) => (
                                        <div key={label} className="p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 text-sm">
                                            <Icon className="h-5 w-5 text-violet-500 mb-2" />
                                            <p className="font-semibold text-gray-900 dark:text-white mb-1">{label}</p>
                                            <p className="text-gray-500 dark:text-gray-400 text-xs">{note}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ── How to Verify Before Buying ───────────────────────── */}
                    <section>
                        <div className="text-center mb-12">
                            <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-semibold mb-4">
                                Shop Safely
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                How to Protect Yourself from Online Shopping Scams  5 Rules
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-base">
                                These five e-commerce fraud prevention rules address the specific tactics scammers use in India. Each rule eliminates multiple fraud types simultaneously.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-1 gap-5">
                            {safetyTips.map(({ rule, title, desc }) => (
                                <div
                                    key={rule}
                                    className="group relative p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-xs font-bold">
                                            {rule}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 dark:text-white text-base mb-2">{title}</h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── Safe vs Unsafe: Split Section with Image ──────────── */}
                    <section
                        aria-labelledby="safe-vs-unsafe-heading"
                        className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-lg lg:min-h-[520px]"
                    >
                        {/* LEFT  content */}
                        <div className="p-8 sm:p-10 bg-white dark:bg-gray-900 flex flex-col justify-center">
                            <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-semibold mb-4 self-start">
                                Quick Reference
                            </span>
                            <h2
                                id="safe-vs-unsafe-heading"
                                className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-6 leading-snug"
                            >
                                Trusted Platform vs. Fake Shopping Site  Spot the Difference
                            </h2>
                            <div className="space-y-3 mb-6">
                                <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-xl border border-green-200 dark:border-green-900">
                                    <p className="text-xs font-bold text-green-700 dark:text-green-400 mb-2 uppercase tracking-wide">
                                        Trusted Platform (Amazon, Flipkart)
                                    </p>
                                    <ul className="space-y-1.5 text-sm text-gray-700 dark:text-gray-300">
                                        {[
                                            "Multiple payment options including COD and credit card",
                                            "Seller account age and review history visible",
                                            "Platform-backed buyer protection and disputes",
                                            "Working 24/7 customer support number",
                                        ].map((item) => (
                                            <li key={item} className="flex items-start gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-xl border border-red-200 dark:border-red-900">
                                    <p className="text-xs font-bold text-red-700 dark:text-red-400 mb-2 uppercase tracking-wide">
                                        Fake Shopping Site
                                    </p>
                                    <ul className="space-y-1.5 text-sm text-gray-700 dark:text-gray-300">
                                        {[
                                            "Only UPI or bank transfer  no COD, no card option",
                                            "Domain registered less than 30–60 days ago",
                                            "No real phone number, no traceable address",
                                            "Prices 60–90% below market rate on every item",
                                        ].map((item) => (
                                            <li key={item} className="flex items-start gap-2">
                                                <XCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-900">
                                <p className="text-xs font-bold text-amber-700 dark:text-amber-400 mb-1 uppercase tracking-wide">
                                    The 60-Second Check
                                </p>
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    Check any unfamiliar shopping site on RakshaAI's Website Safety Checker before
                                    entering payment details  it's free and takes less than 60 seconds.
                                </p>
                            </div>
                        </div>
                        {/* RIGHT  full-height image */}
                        <div className="relative h-full min-h-[400px] overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-violet-500 via-purple-600 to-pink-600" />
                            <Image
                                src="/image/website-safety-check-indian-woman-examining-suspicious-site-rakshaai.jpg"
                                alt="Indian woman checking a suspicious shopping website for fraud  how to verify fake e-commerce sites before buying online in India, RakshaAI website safety checker"
                                title="Website Safety Check  Verify Before You Buy | RakshaAI"
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                    </section>

                    {/* ── Myth vs Reality ───────────────────────────────────── */}
                    <section>
                        <div className="text-center mb-12">
                            <span className="inline-block px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-xs font-semibold mb-4">
                                Myth Busting
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                Online Shopping Myths vs. Reality
                            </h2>
                        </div>
                        <div className="space-y-4">
                            {[
                                {
                                    myth: "COD means I'm safe  if it's fake I won't lose anything.",
                                    fact: "COD scams are extremely common. Fraudsters deliver sealed boxes filled with sand, bricks, or old clothes. You've paid cash, the agent is gone, and there is no refund mechanism. COD is safer than advance UPI transfer, but not risk-free.",
                                },
                                {
                                    myth: "The site has a secure padlock, so it must be genuine.",
                                    fact: "HTTPS only encrypts the connection between your browser and the server. It says nothing about whether the site owner is legitimate. Virtually all fake shopping sites in 2025 have SSL certificates because they're free and automatic.",
                                },
                                {
                                    myth: "A site with thousands of reviews and a 4.8-star rating is trustworthy.",
                                    fact: "Review farms in India sell bulk 5-star ratings starting from ₹500 for 100 reviews. Fake reviews are now indistinguishable from real ones without using review analysis tools. Rating count and score alone are meaningless.",
                                },
                                {
                                    myth: "I can always get my money back if I complain quickly.",
                                    fact: "Cash COD payments are almost never recovered. UPI payments to fraudulent accounts are recoverable only if reported within hours via 1930. Credit card chargebacks take 30–90 days and are not guaranteed. Prevention is everything.",
                                },
                            ].map(({ myth, fact }) => (
                                <div
                                    key={myth}
                                    className="grid sm:grid-cols-2 gap-px rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm"
                                >
                                    <div className="flex items-start gap-3 p-5 bg-red-50 dark:bg-red-950/30">
                                        <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="text-xs font-bold text-red-600 dark:text-red-400 mb-1 uppercase tracking-wide">Myth</p>
                                            <p className="text-sm text-gray-700 dark:text-gray-300">{myth}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3 p-5 bg-green-50 dark:bg-green-950/30">
                                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="text-xs font-bold text-green-600 dark:text-green-400 mb-1 uppercase tracking-wide">Reality</p>
                                            <p className="text-sm text-gray-700 dark:text-gray-300">{fact}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    

                    {/* ── E-Commerce Fraud Statistics ───────────────────────── */}
                    <section>
                        <div className="text-center mb-10">
                            <span className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-4">
                                Official Data
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                E-Commerce Fraud Statistics India 2026
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-sm">
                                Figures drawn from the ASPA–CRISIL &lsquo;State of Counterfeiting in India 2025&rsquo; report (March 2026), McAfee&apos;s Global Festive Shopping Survey 2024, the National Consumer Helpline annual data, and CCPA enforcement records for FY 2025–26.
                            </p>
                        </div>
                        <div className="overflow-x-auto rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-violet-600 text-white">
                                        <th className="text-left px-4 py-3 font-semibold">Fraud Type</th>
                                        <th className="text-left px-4 py-3 font-semibold">% of E-Commerce Complaints</th>
                                        <th className="text-left px-4 py-3 font-semibold">Key Platform / Channel</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { type: "Counterfeit and Fake Products", pct: "35%", channel: "Amazon India, Meesho, Myntra third-party sellers" },
                                        { type: "Non-delivery and Phantom Delivery", pct: "28%", channel: "Marketplace sellers  all platforms" },
                                        { type: "Fake Shopping Websites", pct: "18%", channel: "Social media ads, Google search ads" },
                                        { type: "COD Fraud (unordered parcels)", pct: "10%", channel: "Tier-2/3 cities  Shadowfax, Ekart couriers" },
                                        { type: "Advance Payment / Off-platform Trap", pct: "5%", channel: "WhatsApp, Instagram shopping pages" },
                                        { type: "Social Media Shopping Scam", pct: "3%", channel: "Instagram shops, Facebook Marketplace" },
                                        { type: "Fake Seller Customer Care Impersonation", pct: "1%", channel: "WhatsApp fake support numbers" },
                                    ].map(({ type, pct, channel }, i) => (
                                        <tr key={type} className={i % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50 dark:bg-gray-800/50"}>
                                            <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">{type}</td>
                                            <td className="px-4 py-3 text-violet-600 dark:text-violet-400 font-bold">{pct}</td>
                                            <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{channel}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-6 p-5 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            <p>Urban India carries the highest volume: Mumbai, Delhi, Bengaluru, Hyderabad, and Pune account for 61% of all e-commerce fraud complaints. The fastest growth is in Tier-2 and Tier-3 cities  Jaipur, Lucknow, Surat, Patna  where quick commerce and social commerce adoption is outpacing fraud awareness. The CCPA&apos;s February 2026 enforcement actions  ₹10 lakh fines on Amazon, Flipkart, Meesho, and Meta  signal that platform accountability will intensify through 2026.</p>
                        </div>
                    </section>

                    {/* ── More E-Commerce Fraud Guides ──────────────────────── */}
                    <section>
                        <div className="text-center mb-10">
                            <span className="inline-block px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-semibold mb-4">
                                Deeper Guides
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                More E-Commerce Fraud Guides  Updated 2026
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-sm">
                                Go deeper on any online shopping scam type. Each guide is written in plain language, backed by real Indian cases, and updated with 2026 data.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-5">
                            {[
                                {
                                    title: "How to Spot a Fake Shopping Website Before You Lose Money",
                                    desc: "7 checks in 60 seconds  domain age, payment methods, customer care, and more. Works for any site you've never bought from before.",
                                    href: "/blog/how-to-spot-fake-shopping-website/",
                                },
                                {
                                    title: "COD Parcel Fraud India: How to Handle an Unordered Package",
                                    desc: "A COD order you never placed is at your door. Here's exactly what to do, who to call, and how to report the sender.",
                                    href: "/scams/e-commerce-fraud/cod-fraud/",
                                },
                                {
                                    title: "Counterfeit Products Online India: How to Spot Fakes and Get a Refund",
                                    desc: "Amazon, Flipkart, Meesho and social seller checks: seller verification, BIS, brand QR, packaging signals, and refund steps.",
                                    href: "/scams/e-commerce-fraud/counterfeit-products/",
                                },
                                {
                                    title: "Instagram Shopping Scams India: How AI Deepfakes Are Trapping Buyers",
                                    desc: "Fake brand pages with AI-generated product photos and influencer impersonation. How the scam works and how to identify it in 2026.",
                                    href: "/scams/e-commerce-fraud/social-commerce-scam/",
                                },
                                {
                                    title: "How to Get a Refund After an Online Shopping Scam in India",
                                    desc: "Step-by-step: platform dispute, National Consumer Helpline, bank chargeback, cybercrime.gov.in, and Consumer Forum complaint.",
                                    href: "/blog/online-shopping-scam-refund-india/",
                                },
                                {
                                    title: "Dark Patterns in E-Commerce India: 13 Tricks Platforms Use Against You",
                                    desc: "CCPA identified 13 manipulative design tactics on Indian e-commerce platforms. Here is what each one looks like and how to spot it.",
                                    href: "/blog/dark-patterns-ecommerce-india/",
                                },
                            ].map(({ title, desc, href }) => (
                                <Link
                                    key={title}
                                    href={href}
                                    className="group flex items-start gap-4 p-5 rounded-2xl border bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800 hover:shadow-lg hover:border-violet-200 dark:hover:border-violet-800 transition-all duration-300"
                                >
                                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-violet-600 dark:text-violet-400 text-lg">
                                        📰
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">{title}</h3>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-2">{desc}</p>
                                        <span className="text-xs font-semibold text-violet-600 dark:text-violet-400">Read More →</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* ── Related Free Safety Tools ──────────────────────────── */}
                    <section className="rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 p-8">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-3">
                                Related Free Safety Tools
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xl mx-auto">
                                E-commerce fraud is one part of India&apos;s broader digital fraud landscape. Use these free tools to stay safe across all categories.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-3 gap-5">
                            {[
                                {
                                    icon: "🌐",
                                    title: "Website Safety Checker",
                                    desc: "Check any shopping site before you enter payment details.",
                                    href: "/website-safety-checker/",
                                },
                                {
                                    icon: "🔍",
                                    title: "UPI ID Checker",
                                    desc: "Check a seller's UPI ID against available fraud signals and community reports.",
                                    href: "/upi-id-checker/",
                                },
                                {
                                    icon: "📱",
                                    title: "Phone Number Checker",
                                    desc: "Check if a seller's contact number has fraud reports.",
                                    href: "/phone-number-checker/",
                                },
                            ].map(({ icon, title, desc, href }) => (
                                <Link
                                    key={title}
                                    href={href}
                                    className="group flex flex-col items-center text-center p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg hover:border-violet-200 dark:hover:border-violet-800 transition-all duration-300"
                                >
                                    <div className="text-3xl mb-3">{icon}</div>
                                    <h3 className="font-bold text-gray-900 dark:text-white text-base mb-1 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">{title}</h3>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{desc}</p>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* ── Recent E-Commerce Scam Alerts ─────────────────────── */}
                    <section>
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-1">
                                    Recent E-Commerce Scam Alerts
                                </h2>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Updated March 2026  from RakshaAI user reports and verified advisories</p>
                            </div>
                            <Link
                                href="/scam-alerts/"
                                className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-violet-600 dark:text-violet-400 hover:underline"
                            >
                                View All Alerts <ArrowRight className="h-3.5 w-3.5" />
                            </Link>
                        </div>
                        <div className="space-y-4">
                            {[
                                {
                                    badge: "March 2026",
                                    title: "CCPA Issues Warning Against 5 Fake Shopping Sites Using Big Billion Days Branding",
                                    type: "CCPA Advisory",
                                },
                                {
                                    badge: "February 2026",
                                    title: "Meesho COD Fraud Wave: Unordered Parcels Targeting Residential Addresses in Lucknow and Jaipur",
                                    type: "Consumer Alert",
                                },
                                {
                                    badge: "January 2026",
                                    title: "Fake Amazon India Seller Uses AI-Generated Reviews  Phantom Delivery Scam Reported Across 8 Cities",
                                    type: "Platform Warning",
                                },
                                {
                                    badge: "January 2026",
                                    title: "WhatsApp Reseller Group Scam: Fake Festive Clearance Offers Steal ₹2.8 Crore",
                                    type: "Cyber Crime Alert",
                                },
                            ].map(({ badge, title, type }) => (
                                <div key={title} className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all">
                                    <div className="flex-shrink-0 mt-0.5">
                                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400 text-xs font-bold">
                                            🔔 {badge}
                                        </span>
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-violet-600 dark:text-violet-400 mb-0.5">{type}</p>
                                        <p className="text-sm font-medium text-gray-900 dark:text-white">{title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 text-center">
                            <Link
                                href="/scam-alerts/"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 text-white font-bold text-sm shadow-md hover:shadow-violet-300/50 hover:scale-105 transition-all duration-300"
                            >
                                VIEW ALL E-COMMERCE SCAM ALERTS →
                            </Link>
                        </div>
                    </section>
{/* ── What To Do After Being Scammed ────────────────────── */}
                    <section>
                        <div className="text-center mb-12">
                            <span className="inline-block px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-xs font-semibold mb-4">
                                Recovery Plan
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                How to Report E-Commerce Fraud in India  Step by Step
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-base">
                                If you have been scammed while shopping online, you have multiple official avenues available. Act within 24–48 hours for the best chance of a refund or platform resolution.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="relative w-full rounded-2xl overflow-hidden mb-8 shadow-md">
                                <Image
                                    src="/image/emergency-steps-after-entering-data-scam-website-india-recovery-guide.jpg"
                                    alt="Emergency recovery steps after being scammed on a fake shopping website in India  how to report e-commerce fraud, call 1930, raise chargeback, file cybercrime complaint, RakshaAI"
                                    title="E-Commerce Fraud Recovery Steps India | RakshaAI"
                                    width={1200}
                                    height={480}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            <div className="hidden sm:block absolute left-[27px] top-10 bottom-10 w-0.5 bg-gradient-to-b from-violet-300 via-amber-300 to-green-300 dark:from-violet-800 dark:via-amber-800 dark:to-green-800" />
                            <div className="space-y-5">
                                {afterScam.map(({ step, title, desc, urgent }) => (
                                    <div key={step} className="relative flex gap-6 items-start">
                                        <div
                                            className={`relative z-10 flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-white font-extrabold text-sm shadow-lg ${urgent
                                                ? "bg-gradient-to-br from-red-500 to-rose-600"
                                                : "bg-gradient-to-br from-violet-500 to-purple-600"
                                                }`}
                                        >
                                            {step}
                                            {urgent && (
                                                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-400 animate-ping" />
                                            )}
                                        </div>
                                        <div
                                            className={`flex-1 p-6 rounded-2xl border hover:shadow-md transition-all ${urgent
                                                ? "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-900"
                                                : "bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800"
                                                }`}
                                        >
                                            <div className="flex items-center gap-3 mb-2">
                                                <h3 className="font-bold text-gray-900 dark:text-white text-base">{title}</h3>
                                                {urgent && (
                                                    <span className="px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400 text-xs font-bold">
                                                        DO FIRST
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ── Recovery Timeline ─────────────────────────────── */}
                    <section>
                        <div className="mt-0 rounded-2xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30 p-6 sm:p-8">
                            <h3 className="text-lg font-extrabold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                <span>⏱️</span> Recovery Timeline for Online Shopping Fraud
                            </h3>
                            <div className="space-y-3">
                                {[
                                    { time: "Within 24 hours", action: "Call 1930 (if payment fraud) + raise platform dispute. Best chance of reversal.", color: "bg-red-500" },
                                    { time: "Within 48 hours", action: "File cybercrime.gov.in complaint. Raise bank chargeback for card payments.", color: "bg-orange-500" },
                                    { time: "Within 7 days", action: "Escalate to NCH 1800-11-4000. File CCPA complaint for platform failures.", color: "bg-amber-500" },
                                    { time: "After 7 days", action: "File Consumer Forum complaint. Engage consumer legal aid if loss above ₹20,000.", color: "bg-violet-500" },
                                ].map(({ time, action, color }) => (
                                    <div key={time} className="flex items-start gap-4">
                                        <div className={`flex-shrink-0 mt-1 w-2.5 h-2.5 rounded-full ${color}`} />
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm">
                                            <span className="font-bold text-gray-900 dark:text-white min-w-[120px]">{time}</span>
                                            <span className="text-gray-600 dark:text-gray-400">{action}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Report CTA */}
                        <div className="mt-8 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-700 p-6 text-center text-white">
                            <p className="font-bold text-lg mb-2">Report This Scam and Warn 2 Million+ Indian Shoppers</p>
                            <ReportScamButton className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-purple-600 font-bold text-sm shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer mt-2">
                                <MessageSquareWarning className="h-4 w-4" />
                                REPORT THIS SCAM →
                            </ReportScamButton>
                            <p className="mt-3 text-purple-200 text-xs">Your report goes live within 4–6 hours and appears in search results for the scammer&apos;s site or seller ID.</p>
                        </div>
                    </section>
                    {/* ── Safe Shopping Checklist ───────────────────────────── */}
                    <section className="rounded-2xl overflow-hidden border border-violet-100 dark:border-violet-900">
                        <div className="bg-gradient-to-r from-violet-600 to-purple-700 px-8 py-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                                    <BadgeCheck className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-extrabold text-white">Your Safe Shopping Checklist</h2>
                                    <p className="text-violet-100 text-sm">Run through this before every purchase from an unfamiliar seller</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-violet-50 dark:bg-violet-950/30 p-8">
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    "Domain is at least 6 months old (checked on WHOIS)",
                                    "Site has a real phone number  I called it and someone answered",
                                    "Price is within 30–40% of market price, not 70–90% off",
                                    "Multiple payment options available, including COD or credit card",
                                    "Reviews span many months with mixed ratings (not all 5-star in one week)",
                                    "I searched the site name + 'scam' or 'complaint' on Google",
                                    "For COD, I will open the package on video before the agent leaves",
                                    "I am paying with a credit card where possible for chargeback protection",
                                    "I verified the URL carefully  no extra letters, numbers, or misspellings",
                                    "I checked the site on RakshaAI's website checker",
                                ].map((item, i) => (
                                    <div key={item} className="flex items-center gap-3 p-3 bg-white dark:bg-gray-900 rounded-xl border border-violet-100 dark:border-violet-900 shadow-sm">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-md bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                                            {i + 1}
                                        </div>
                                        <p className="text-sm text-gray-700 dark:text-gray-300">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ── FAQ ───────────────────────────────────────────────── */}
                    <section>
                        <div className="mb-10">
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-3">
                                Frequently Asked Questions About E-Commerce Fraud in India
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400">
                                Everything you need to know about online shopping scams in India  answered simply.
                            </p>
                        </div>
                        <div className="space-y-3">
                            {faqs.map(({ q, a }) => (
                                <details
                                    key={q}
                                    className="group rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm"
                                >
                                    <summary className="cursor-pointer list-none flex items-center justify-between p-5 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                        <span className="text-sm font-semibold text-gray-900 dark:text-white pr-4">{q}</span>
                                        <svg
                                            className="ml-4 h-4 w-4 flex-shrink-0 text-gray-400 transition-transform duration-200 group-open:rotate-180"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            aria-hidden
                                        >
                                            <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </summary>
                                    <div className="px-5 pb-5 text-sm text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-50 dark:border-gray-800">
                                        <div className="pt-4">{a}</div>
                                    </div>
                                </details>
                            ))}
                        </div>
                    </section>

                    {/* ── Final CTA ─────────────────────────────────────────── */}
                    <section className="rounded-2xl bg-gradient-to-br from-violet-700 via-purple-700 to-pink-700 p-8 sm:p-12 text-white text-center shadow-2xl relative overflow-hidden">
                        <div className="pointer-events-none absolute inset-0">
                            <div className="absolute -top-10 -left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
                        </div>
                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-xs font-semibold mb-6 border border-white/20">
                                <Shield className="h-4 w-4" />
                                Free Website Safety Check
                            </div>
                            <h2 className="text-2xl sm:text-4xl font-extrabold mb-4 leading-tight">
                                Shop Smarter. Report Fraud.<br className="hidden sm:block" />
                                Protect Every Indian Shopper.
                            </h2>
                            <p className="text-purple-100 mb-8 text-sm sm:text-base max-w-xl mx-auto">
                                Received a package that wasn't what you ordered? Found a suspicious shopping site?
                                Every report you make helps RakshaAI warn thousands of other shoppers before they
                                become victims. It takes 60 seconds and it's completely free.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <ReportScamButton className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-purple-600 font-bold text-sm shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                                    <MessageSquareWarning className="h-5 w-5" />
                                    Report a Shopping Scam
                                    <ArrowRight className="h-4 w-4" />
                                </ReportScamButton>
                                <Link
                                    href="/website-safety-checker"
                                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 text-white font-semibold text-sm border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300"
                                >
                                    Check a Website for Free
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                            <p className="mt-6 text-purple-200 text-xs">
                                🇮🇳 India-focused online fraud guidance · Free consumer access · No registration required
                            </p>
                        </div>
                    </section>

                </div>
            </main>
        </DefaultLayout>
    );
}
