import type { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n/dictionaries';
import FAQClient from '@/components/FAQClient';
import { faqPageSchema, jsonLd } from '@/lib/seo/schema';

export const metadata: Metadata = {
    title: 'FAQ: UPI Fraud, Digital Arrest & Online Scams India',
    description:
        'Answers about RakshaAI Trust Scores, UPI fraud, digital arrest, phishing, and what to do if scammed in India. Free help, no login needed.',
    alternates: {
        canonical: 'https://rakshaai.co/faq',
    },
    openGraph: {
        title: 'RakshaAI FAQ: Scam Detection, UPI Fraud & Online Safety India',
        description:
            'Common questions answered: how Trust Scores work, UPI fraud prevention, digital arrest scams, what to do if you are scammed, and how to stay safe online in India.',
        url: 'https://rakshaai.co/faq',
        type: 'website',
        siteName: 'RakshaAI',
        images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'RakshaAI FAQ  Scam Detection & Online Safety India' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'RakshaAI FAQ  Scam Detection & Online Safety India',
        description: 'How to check scams, understand Trust Scores, handle UPI fraud, identify digital arrest scams, and stay safe online in India.',
        images: ['/opengraph-image'],
    },
};

interface FAQItem {
    id: string;
    category: string;
    question: string;
    answer: string;
}

interface FAQContent {
    hero: {
        title: string;
        description: string;
    };
    search: {
        placeholder: string;
        noResults: string;
    };
    categories: {
        all: string;
        basicInfo: string;
        understandingTrustScore: string;
        scamTypes?: string;
        safetyTips: string;
        technicalDetails: string;
        gettingHelp: string;
    };
    questions: FAQItem[];
    cta: {
        title: string;
        description: string;
        button: string;
    };
}

// Default export for English content
export default async function DefaultFAQPage() {
    // Load English translations for navbar and footer
    const dict = await getDictionary('en', 'home');
    
    const defaultContent: FAQContent = {
        hero: {
            title: "Frequently Asked Questions: Online Scams & Fraud in India",
            description: "Common questions about keeping yourself safe online. Simple answers, no technical jargon."
        },
        search: {
            placeholder: "Search questions...",
            noResults: "No questions found matching your search."
        },
        categories: {
            all: "All",
            basicInfo: "Basic Info",
            understandingTrustScore: "Understanding Trust Score",
            scamTypes: "Scam Types",
            safetyTips: "Safety Tips",
            technicalDetails: "Technical Details",
            gettingHelp: "Getting Help"
        },
        questions: [
            // Basic Info
            {
                id: "what-is-rakshaai",
                category: "Basic Info",
                question: "What is RakshaAI and how does it work?",
                answer: "RakshaAI is India's free AI-powered scam detection platform. Paste any suspicious website URL, UPI ID, or phone number and our system instantly checks it against domain history, SSL certificates, major threat blacklists (Google Safe Browsing, PhishTank, VirusTotal), CERT-In advisories, and 1M+ community scam reports. Results arrive in under 5 seconds as a Trust Score (0–100) with a plain-language explanation. No login or payment required  ever."
            },
            {
                id: "is-it-really-free",
                category: "Basic Info",
                question: "Is RakshaAI completely free with no hidden charges?",
                answer: "Yes  100% free, permanently. No trial period, no premium tier required for safety checks, no hidden charges. Website checker, UPI ID checker, and phone number checker are all free with no usage limits. We believe digital safety is a right, not a product. Business trust certification is a separate paid program for businesses wanting official verification."
            },
            {
                id: "who-should-use",
                category: "Basic Info",
                question: "Who should use RakshaAI?",
                answer: "Any Indian internet user: students doing online shopping, parents protecting family from scam links, senior citizens verifying bank messages, small business owners checking supplier legitimacy, freelancers verifying clients, and anyone who received a suspicious WhatsApp link, payment request, or phone call. No technical knowledge needed  paste and check."
            },
            {
                id: "what-can-check",
                category: "Basic Info",
                question: "What can I check with RakshaAI?",
                answer: "Three types of checks: (1) Website/URL safety  paste any website link to detect phishing, fake shopping sites, fraudulent payment pages. (2) UPI ID verification  check any UPI payment address against fraud databases before sending money. (3) Phone number scan  check if a phone number has been reported as a scam caller by other Indian users. All three are free and instant."
            },
            // Trust Score
            {
                id: "what-is-trust-score",
                category: "Understanding Trust Score",
                question: "What is a Trust Score and how do I read it?",
                answer: "The Trust Score is a 0–100 rating of safety risk. Score 70–100 means generally safe  no major risk signals detected. Score 40–69 means caution advised  some risk signals present, verify independently. Score 0–39 means high risk  multiple risk indicators or active blacklist match, do not interact. Every score includes a breakdown of exactly which factors contributed  domain age, SSL status, blacklist matches, and community reports  in plain language."
            },
            {
                id: "how-accurate",
                category: "Understanding Trust Score",
                question: "How accurate is the Trust Score?",
                answer: "RakshaAI does not currently publish a validated accuracy percentage. The Trust Score combines available technical, threat-intelligence and community-report signals, and false positives and missed threats remain possible. Use it as decision support and verify high-value decisions independently."
            },
            {
                id: "why-new-site-low-score",
                category: "Understanding Trust Score",
                question: "Why does a new but legitimate website have a low Trust Score?",
                answer: "Domain age can be a useful risk signal, but new does not mean fraudulent. The system considers available signals together. If you own a legitimate site with an incorrect score, use the report-correction process for review."
            },
            // Scam Types
            {
                id: "what-is-digital-arrest",
                category: "Scam Types",
                question: "What is a digital arrest scam and how do I identify it?",
                answer: "A digital arrest scam occurs when fraudsters impersonate Indian law enforcement (police, CBI, Enforcement Directorate) via video call, claiming you are under 'digital arrest' for fabricated crimes. They demand payment to avoid fake prosecution. Key identification: unexpected official-looking video call, demand for secrecy and isolation, threats of immediate arrest, requests for wire transfer or cryptocurrency. Critical fact: 'digital arrest' does not exist in Indian law. Real authorities never arrest or demand payment via phone. Hang up immediately and call 1930."
            },
            {
                id: "how-does-upi-fraud-work",
                category: "Scam Types",
                question: "How does UPI fraud work and how can I prevent it?",
                answer: "Common UPI fraud methods: (1) Fake QR codes  sharing a QR code and claiming scanning it will send you money. QR codes only send money, never receive it. (2) Collect requests  sending a UPI collect request that looks like a payment confirmation. (3) Fake refund scams  asking you to pay a small amount to receive a larger refund. Prevention: Always verify UPI IDs at rakshaai.co/upi-id-checker before payment. Never scan QR codes to 'receive' money. Never share OTP to receive UPI payments. Call your bank within 1 hour if defrauded."
            },
            {
                id: "how-to-identify-phishing",
                category: "Scam Types",
                question: "How do I identify a phishing website?",
                answer: "Key phishing signals: URL contains misspellings of official sites (onlinesbi-login.com vs onlinesbi.sbi.co.in), domain registered very recently, missing or invalid SSL certificate, received via unsolicited WhatsApp/SMS link, asks for full card number or OTP on a form, offers unrealistic prizes or refunds. Best protection: check every suspicious link at rakshaai.co/check before clicking or entering any information."
            },
            {
                id: "investment-scam-warning-signs",
                category: "Scam Types",
                question: "What are the warning signs of investment scams in India?",
                answer: "Major red flags: guaranteed returns promised (no legitimate investment guarantees returns  this is always a fraud signal), pressure to invest quickly, unregulated platforms not registered with SEBI, celebrity endorsements (often deepfaked), difficulty withdrawing funds once invested, requirement to recruit others to earn. Always verify investment platforms at sebi.gov.in before investing. Never invest based on WhatsApp or Telegram group tips."
            },
            // Safety Tips
            {
                id: "scammed-what-to-do",
                category: "Safety Tips",
                question: "I've been scammed online  what should I do immediately?",
                answer: "Act within the first 24 hours for best results: (1) Call 1930 immediately  India's 24/7 national cybercrime helpline  to report and request transaction reversal. This is the fastest route. (2) Contact your bank to freeze or reverse the fraudulent transaction. (3) File a formal complaint at cybercrime.gov.in. (4) File an FIR at your nearest police cybercrime cell. (5) Report the scammer details at rakshaai.co to protect other Indians. Time is critical  transaction reversal is most likely within the first few hours."
            },
            {
                id: "stay-safe-tips",
                category: "Safety Tips",
                question: "What are the top tips to stay safe from online scams in India?",
                answer: "1) Check every suspicious link at rakshaai.co before clicking  takes 5 seconds. 2) Never share OTPs with anyone  your bank will never ask for your OTP. 3) Verify UPI IDs before payment at rakshaai.co/upi-id-checker. 4) Be skeptical of 'too good to be true' offers  guaranteed returns, prize wins, and urgent government notices are almost always scams. 5) Do not download apps from links in messages  use official app stores only. 6) Call back on official numbers from bank websites, not numbers in SMS or email. 7) Trust your instincts  if something feels wrong, stop and verify."
            },
            {
                id: "common-scams-india",
                category: "Safety Tips",
                question: "What are the most common online scams in India right now?",
                answer: "Current high-risk scam types in India: digital arrest scams (fake police video calls demanding payment), UPI payment fraud, phishing websites mimicking SBI/HDFC/IRCTC, investment scams via WhatsApp groups, fake job offers requiring registration fees, parcel scam calls (fake customs duty demands), KYC fraud via SMS, romance scams on matrimonial apps, and illegal loan apps. Full guides on each are at rakshaai.co/scams."
            },
            {
                id: "protect-elderly-parents",
                category: "Safety Tips",
                question: "How do I protect my elderly parents from online scams?",
                answer: "Practical steps: (1) Save rakshaai.co/check as a shortcut on their phone with the label 'Check Before Click'. (2) Establish a family rule  never act on phone calls claiming to be police, bank officers, or government without first calling the official number. (3) Enable OTP transaction alerts from their bank account. (4) Educate them that 'digital arrest' is not a real legal concept. (5) Tell them to call you before making any online payment over ₹5,000. (6) Set daily UPI limits with their bank."
            },
            // Technical Details
            {
                id: "what-data-collected",
                category: "Technical Details",
                question: "What data does RakshaAI collect about me?",
                answer: "Minimal data. We do not require accounts for scam checks. Check queries are not linked to individual users or persistent IP addresses. We retain only anonymised aggregate statistics (check volumes, scam detection rates) to improve our models. We do not sell, share, or monetise personal query data. Full details in our Privacy Policy at rakshaai.co/privacy-policy."
            },
            {
                id: "how-often-databases-updated",
                category: "Technical Details",
                question: "How often is the scam database updated?",
                answer: "Threat and community-report sources update on different schedules. RakshaAI uses available signals at analysis time, so a new threat may not yet be present and every result should be treated as decision support."
            },
            {
                id: "how-trust-score-calculated",
                category: "Technical Details",
                question: "How exactly is the Trust Score calculated?",
                answer: "The Trust Score combines available domain, certificate, infrastructure, content, threat-intelligence and reviewed community-report signals. Signal availability varies, and the result is not a guarantee. Full methodology is available at rakshaai.co/methodology."
            },
            // Getting Help
            {
                id: "false-positive",
                category: "Getting Help",
                question: "My legitimate website has a low score  how do I fix it?",
                answer: "Low scores on new but legitimate sites happen because domain age is a strong scam signal. Email support@rakshaai.co with your domain, business registration details, and a brief explanation. Our team reviews cases within 2–3 business days. For businesses, the RakshaAI Trust Certification program (rakshaai.co/business-verification) provides full GST/PAN verification and a Trust Badge that boosts your score permanently."
            },
            {
                id: "report-scam",
                category: "Getting Help",
                question: "How do I report a scam website, UPI ID, or phone number?",
                answer: "Multiple ways: (1) Website/URL  go to rakshaai.co/check, enter the URL, and use the Report button on the results page. (2) UPI ID  go to rakshaai.co/upi-id-checker and use the report option. (3) Phone number  go to rakshaai.co/phone-number-checker and submit a report. (4) Email  send evidence to support@rakshaai.co. Include the suspicious URL/ID/number, what happened, and any screenshots. Reports are reviewed by our AI moderation system and human safety experts."
            },
            {
                id: "business-verification",
                category: "Getting Help",
                question: "How can my business get verified by RakshaAI?",
                answer: "Apply at rakshaai.co/business-verification. We verify Indian businesses through GST registration, PAN card, MCA records, Aadhaar linking, and bank account verification. Verified businesses receive a publicly visible RakshaAI Trust Badge, an improved Trust Score for their domain, and a listing in our verified business directory. This builds consumer confidence  customers can verify your Trust Badge at rakshaai.co/business-profile before purchase."
            }
        ],
        cta: {
            title: "Still Have Questions?",
            description: "Can't find what you're looking for? We're here to help. Don't hesitate to ask!",
            button: "Contact Us"
        }
    };

    const layoutContent = {
        navbar: dict.navbar,
        footer: dict.footer
    };

    const faqSchema = faqPageSchema(defaultContent.questions.map(q => ({ question: q.question, answer: q.answer })));

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema) }}
            />
            <FAQClient content={defaultContent} layoutContent={layoutContent} faqSchema={faqSchema} />
        </>
    );
}

// Export types for use in localized pages
export type { FAQContent, FAQItem };
