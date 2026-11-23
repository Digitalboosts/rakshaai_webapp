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
    IndianRupee,
    ShieldAlert,
    ArrowRight,
    Info,
    BadgeCheck,
    MessageSquareWarning,
    ChevronDown,
    Briefcase,
    Laptop,
    MessageCircle,
    Users,
    UserX,
    CreditCard,
    Globe,
    FileText,
    Star,
    Phone,
    Clock,
    Lock,
    Send,
    Building2,
    Banknote,
    MapPin,
    TriangleAlert,
    Zap,
} from "lucide-react";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
    title: "Job Scams India 2026: Fake Offers & WFH Fraud",
    description:
        "Fake job offers stole ₹2,100+ crore from Indians in 2024. WhatsApp job scams, fake HR portals, WFH fraud. Warning signs and what to do.",
    alternates: {
        canonical: "https://rakshaai.co/scams/job-scams",
    },
    robots: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
    openGraph: {
        title: "Job Scams India: Fake Job Offers & Work From Home Fraud | RakshaAI",
        description:
            "Fake job offers on WhatsApp, fake HR portals, work from home task scams  a complete guide to job fraud targeting Indians in 2024–25.",
        url: "https://rakshaai.co/scams/job-scams",
        type: "website",
    siteName: 'RakshaAI',
        images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'RakshaAI' }],
  },
    twitter: {
        card: "summary_large_image",
        title: "Fake Job Offers & Job Scams India | RakshaAI",
        description:
            "Fake job offers, work from home scams, WhatsApp task fraud  everything Indians need to know about job scams.",
        images: ['/opengraph-image'],
  },
    other: { "geo.region": "IN", language: "en-IN" },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────
const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
        "Job Scams in India: Fake Job Offers, Work From Home Fraud & WhatsApp Job Scams",
    url: "https://rakshaai.co/scams/job-scams",
    description:
        "A comprehensive guide to job fraud in India  fake job offers on WhatsApp, fake HR portals, work-from-home task scams, advance fee fraud, overseas job rackets, and the data harvesting that turns a job application into identity theft.",
    datePublished: "2025-01-01",
    dateModified: "2026-06-11",
    publisher: {
        "@type": "Organization",
        name: "RakshaAI",
        url: "https://rakshaai.co",
    },
    inLanguage: "en-IN",
};

const faqStructured = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "How do I identify a fake job offer?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Key signals of a fake job offer: the offer came via WhatsApp or Telegram from an unknown number without you applying; salary is implausibly high for the role described; the company name is similar to (but not exactly) a real brand; any fee is requested before joining  background check, training kit, uniform deposit, or visa processing; the interview is conducted entirely on WhatsApp or Telegram with no video or office visit; and the job description is vague ('data entry', 'product reviewer', 'social media liker') with no clear employer identity.",
            },
        },
        {
            "@type": "Question",
            name: "What are WhatsApp job scams and how do they work?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "WhatsApp job scams begin with an unsolicited message from a number claiming to be from a recruiter, HR firm, or brand. They offer part-time or work-from-home roles  'like YouTube videos', 'rate hotel reviews', 'complete simple tasks'  for ₹500–₹2,000 per task. Once engaged, the victim is moved into a Telegram group. An initial task pays a small commission. Then 'boosted' tasks require pre-depositing money  the more you deposit, the more you earn. The group eventually disappears with all deposited funds.",
            },
        },
        {
            "@type": "Question",
            name: "What is a 'task scam' or 'like and earn' job fraud?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Task scams (also called 'like and earn', 'click and earn', or 'review boosting' scams) promise payment for simple online tasks  liking YouTube videos, rating hotels on Google, reviewing products on Amazon. An initial small payment is made to establish trust. Then 'boosted tasks' are offered  higher-paying tasks that require an advance deposit before the reward is released. After victims deposit significant sums, the Telegram group vanishes and the operator disappears.",
            },
        },
        {
            "@type": "Question",
            name: "Is it safe to apply for jobs through WhatsApp or Telegram?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Any job offer that arrives via an unsolicited WhatsApp or Telegram message should be treated as suspect until independently verified. Legitimate recruiters use verified email addresses, official job portals (Naukri, LinkedIn, Indeed), and verifiable office addresses. Before engaging with any recruiter, independently look up the company, verify the recruiter's email domain matches the company domain, and check if the company has an active presence on LinkedIn with verifiable employees.",
            },
        },
        {
            "@type": "Question",
            name: "I paid a 'registration fee' for a job that turned out to be fake  what should I do?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Call 1930 (Cyber Crime Financial Helpline) immediately  if the transfer was recent, the destination account may be freezeable. File a complaint at cybercrime.gov.in with all transaction details, recruiter contact information, company name, and screenshot of all communications. If you also shared Aadhaar, PAN, or bank account details, contact your bank to flag potential identity misuse, and consider placing a fraud alert with your bank. Report to the portal (Naukri, LinkedIn, Indeed) through which the contact was made.",
            },
        },
        {
            "@type": "Question",
            name: "How do overseas job scams in India work?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Overseas job scams target job seekers with promises of high-paying IT, hospitality, or labour roles in Singapore, Dubai, Canada, or Southeast Asia. After collecting advance visa and processing fees (₹50,000–₹3 lakh), victims either receive no visa at all, or are trafficked to Southeast Asian countries (Thailand, Myanmar, Cambodia) and forced to work in cyber crime operations under coercion. MHA and MEA have issued specific warnings about human trafficking via fake overseas job advertisements on social media. Always verify overseas recruiters with the MEA's eMigrate portal.",
            },
        },
    ],
};

// ── Scam types ────────────────────────────────────────────────────────────────
const scamTypes = [
    {
        icon: MessageCircle,
        color: "from-lime-500 to-green-600",
        bg: "bg-lime-50 dark:bg-lime-950/30",
        border: "border-lime-200 dark:border-lime-900",
        title: "WhatsApp / Telegram Job Offer Scam",
        desc: "An unsolicited message from a 'recruiter' or 'HR manager' offering a part-time or WFH role with no interview. Roles include data entry, product review, social media management. After trust is built, advance fees or 'task deposits' are collected before the role or payment materialises.",
        href: "/scams/job-scams/whatsapp-job-scam",
    },
    {
        icon: Laptop,
        color: "from-green-500 to-emerald-600",
        bg: "bg-green-50 dark:bg-green-950/30",
        border: "border-green-200 dark:border-green-900",
        title: "Task Scam / 'Like and Earn' Fraud",
        desc: "Small payments for liking YouTube videos, rating Google hotels, or reviewing products establish trust. Then 'boosted tasks' requiring advance deposits are introduced  the higher you invest, the more you earn. Once victims deposit significant amounts into the Telegram group, it vanishes.",
        href: "/scams/job-scams/task-scam",
    },
    {
        icon: Banknote,
        color: "from-yellow-500 to-lime-600",
        bg: "bg-yellow-50 dark:bg-yellow-950/30",
        border: "border-yellow-200 dark:border-yellow-900",
        title: "Advance Fee Job Registration Fraud",
        desc: "A formal-looking job offer requires a registration fee, background check payment, training kit deposit, or uniform advance before employment begins. The fees are collected, the 'joining date' is repeatedly postponed, and the company eventually becomes unreachable.",
        href: "/scams/job-scams/advance-fee-job-fraud",
    },
    {
        icon: Building2,
        color: "from-teal-500 to-cyan-600",
        bg: "bg-teal-50 dark:bg-teal-950/30",
        border: "border-teal-200 dark:border-teal-900",
        title: "Fake Company / Fake HR Portal",
        desc: "Professionally designed websites impersonating real companies (TCS, Infosys, Wipro, Amazon India) or large fake consultancies. They conduct fake interviews on Google Meet, issue offer letters with forged logos, and collect fees for 'laptop deposits', 'security clearances', or 'onboarding kits'.",
        href: "/scams/job-scams/fake-company-portal",
    },
    {
        icon: MapPin,
        color: "from-orange-500 to-amber-600",
        bg: "bg-orange-50 dark:bg-orange-950/30",
        border: "border-orange-200 dark:border-orange-900",
        title: "Overseas Job Scam / Human Trafficking",
        desc: "Fake overseas IT, hospitality, or labour offers can end in visa-fee fraud or route workers into scam compounds where passports, movement and work are controlled. Verify the agent, employer, visa and route through official channels before travel.",
        href: "/scams/job-scams/overseas-job-scam",
    },
    {
        icon: FileText,
        color: "from-violet-500 to-purple-600",
        bg: "bg-violet-50 dark:bg-violet-950/30",
        border: "border-violet-200 dark:border-violet-900",
        title: "Fake Job Portal / Naukri Clone",
        desc: "Websites mirroring Naukri.com, LinkedIn, or Indeed collect resumes with full personal details  phone, address, Aadhaar, PAN  under the guise of job applications. The data is sold or used for identity theft, loan fraud, and SIM swap attacks  no actual jobs exist.",
        href: "/scams/job-scams/fake-job-portal",
    },
    {
        icon: Star,
        color: "from-pink-500 to-rose-600",
        bg: "bg-pink-50 dark:bg-pink-950/30",
        border: "border-pink-200 dark:border-pink-900",
        title: "Influencer / Content Creator Scam",
        desc: "A fake brand manager or talent agency offers a paid reel, UGC brief or ambassador role, then requests an equipment, software or registration payment—or sends a malicious campaign file designed to steal the creator's account.",
        href: "/scams/job-scams/influencer-scam",
    },
    {
        icon: Users,
        color: "from-indigo-500 to-blue-600",
        bg: "bg-indigo-50 dark:bg-indigo-950/30",
        border: "border-indigo-200 dark:border-indigo-900",
        title: "Multi-Level / Referral Earnings Scam",
        desc: "A 'work from home business opportunity' promises income from recruiting others  ₹500 per referral, ₹2,000 per team member they recruit. Joining fees, training kits, or 'starter packs' are collected upfront. Earnings only materialise by recruiting new victims  a classic pyramid structure that collapses.",
        href: "/scams/job-scams/mlm-pyramid-scam",
    },
];

// ── How the scam unfolds ──────────────────────────────────────────────────────
const scamSteps = [
    {
        step: "01",
        color: "from-lime-400 to-green-500",
        bg: "bg-lime-50 dark:bg-lime-950/30",
        border: "border-lime-200 dark:border-lime-900",
        title: "The Message Arrives",
        desc: "An unsolicited WhatsApp message from an unknown number: 'Hi, I am HR from [company name]. We have a part-time opening that suits your profile. Flexible hours, work from home, ₹25,000/month. Are you interested?' The sender may have found your number from a resume posted on Naukri or Indeed.",
        urgent: false,
    },
    {
        step: "02",
        color: "from-green-500 to-teal-600",
        bg: "bg-green-50 dark:bg-green-950/30",
        border: "border-green-200 dark:border-green-900",
        title: "Interview Conducted on Chat",
        desc: "A 'screening interview' is conducted entirely via WhatsApp or Telegram  no video call, no office visit, no official email. Questions are generic: current employment, expected salary, availability. A formal-looking PDF offer letter is sent within hours with a logo that closely resembles a real company.",
        urgent: false,
    },
    {
        step: "03",
        color: "from-yellow-500 to-lime-600",
        bg: "bg-yellow-50 dark:bg-yellow-950/30",
        border: "border-yellow-200 dark:border-yellow-900",
        title: "Small Task  Small Payment",
        desc: "An initial task is assigned and a small payment (₹200–₹500) is made promptly, establishing credibility. In task scams: you join a Telegram group, complete a simple task (like 5 YouTube videos), and receive a small commission. This phase exists entirely to build trust.",
        urgent: false,
    },
    {
        step: "04",
        color: "from-orange-500 to-amber-500",
        bg: "bg-orange-50 dark:bg-orange-950/30",
        border: "border-orange-200 dark:border-amber-900",
        title: "The Fee Request",
        desc: "For traditional job fraud: a 'security deposit', 'joining kit fee', 'background verification fee', or 'insurance advance' is required before the start date. For task scams: a 'boosted task' requires pre-depositing ₹2,000–₹50,000 to unlock a higher commission that will be paid out with the deposit.",
        urgent: true,
    },
    {
        step: "05",
        color: "from-red-500 to-rose-600",
        bg: "bg-red-50 dark:bg-red-950/30",
        border: "border-red-200 dark:border-red-900",
        title: "Escalation or Delay",
        desc: "In task scams: each round requires a bigger deposit to 'unlock' withdrawal  the cycle continues until the victim refuses or runs out of money. In advance fee fraud: the start date is repeatedly pushed, a new fee appears each time, and the tone becomes urgent ('your position will be given to another candidate').",
        urgent: true,
    },
    {
        step: "06",
        color: "from-gray-500 to-slate-600",
        bg: "bg-gray-50 dark:bg-gray-900/50",
        border: "border-gray-200 dark:border-gray-800",
        title: "Cut Off",
        desc: "The group is archived or the number is blocked. The 'company website' goes offline or the domain was registered 30 days ago. The offer letter PDF  inspected now  has the wrong company registration number, incorrect address, or is a copy of a real company's template with different bank details.",
        urgent: false,
    },
];

// ── Red flags ─────────────────────────────────────────────────────────────────
const redFlags = [
    "Job offer arrived via unsolicited WhatsApp or Telegram message  you never applied for this position",
    "Salary is significantly higher than market rate for the described role  ₹50,000/month for 2 hours of part-time work",
    "Interview conducted entirely via text on WhatsApp or Telegram  no video call, no official email, no office visit",
    "Company name is close to but not exactly a real brand  'Tata Consultency', 'Infosy Solutions', 'Wipro HR Pvt'",
    "Any fee required before the job starts: security deposit, training kit, ID card fee, background check payment, uniform advance",
    "Offer letter received within hours of a text interview  real hiring processes take days to weeks",
    "The job description is vague: 'data entry', 'product reviewing', 'social media liking', 'survey completion'",
    "Recruiter's email uses a free domain (Gmail, Yahoo, Outlook) rather than a company email address",
    "Task scam: initial small payment is made to build trust before a larger 'deposit' is requested",
    "Overseas job with visa fees required upfront and recruiter is not verified on MEA's eMigrate portal",
];

// ── Myth vs Reality ───────────────────────────────────────────────────────────
const myths = [
    {
        myth: "If the company name matches a real brand and the offer letter looks official, the job must be real.",
        fact: "Fake job offer letters are routinely made by copying real companies' letterheads, adding a near-identical logo, and changing only the bank details and recruiter contact. The easiest verification is to call the real company's official HR line (found via their official website, not the number on the letter) and ask if the offer is genuine.",
    },
    {
        myth: "I received a small commission from the first task, which proves the company is paying.",
        fact: "The initial commission payment is the most important element of a task scam  it creates the trust that enables larger deposits. This technique (called the 'advance payment' or 'trust establishment' phase) is used across every variant of task-based job fraud. The payout was the investment; the losses come after.",
    },
    {
        myth: "A job scam can't be too sophisticated  I can tell bad grammar and obvious fakes.",
        fact: "Modern job scams use professional PDFs, verified-looking company websites, Zoom or Google Meet calls with professionally dressed actors, and AI-generated text that is grammatically perfect. Several documented Indian fraud cases involved victims who attended Google Meet interviews with fake 'panel members' before fees were collected.",
    },
    {
        myth: "Work-from-home jobs that pay per task are always legitimate because they're common.",
        fact: "Legitimate micro-task platforms (Amazon Mechanical Turk, Appen, Taskus) pay extremely small amounts per task  ₹5–₹50  and never require a deposit to access higher-paying tasks. Any work-from-home job that pays ₹500–₹2,000 per simple click and introduces 'deposit to unlock higher earnings' is a task scam regardless of how many other people in the group appear to be earning.",
    },
];

// ── Recovery steps ────────────────────────────────────────────────────────────
const recoverySteps = [
    {
        step: "01",
        title: "Stop all payments immediately",
        desc: "Do not pay any further fee  deposit, upgrade, unlock fee, or joining advance. Do not send more documents, Aadhaar, PAN, or bank details. Every additional action deepens the fraud.",
        urgent: true,
    },
    {
        step: "02",
        title: "Call 1930 if money was transferred recently",
        desc: "India's Cyber Crime Financial Helpline can attempt to freeze the destination account if you report within 30–60 minutes of the transfer. Have your UPI transaction reference number or bank transaction ID ready.",
        urgent: true,
    },
    {
        step: "03",
        title: "File at cybercrime.gov.in",
        desc: "Submit your complaint with the recruiter's phone number, WhatsApp / Telegram username, the fake company name, website URL if any, all transaction IDs, and screenshots of every communication. A complaint number is issued immediately for police follow-up.",
        urgent: false,
    },
    {
        step: "04",
        title: "If you shared Aadhaar or PAN  alert your bank",
        desc: "If your KYC documents were shared during the application process, contact your bank's fraud desk immediately. Request enhanced account monitoring. Documents submitted to fake job portals are frequently sold for identity theft, SIM swap attacks, and fraudulent loan applications.",
        urgent: false,
    },
    {
        step: "05",
        title: "Report to the platform where you were contacted",
        desc: "Report the fraudulent recruiter profile and job listing to LinkedIn, Naukri, Indeed, or wherever the contact originated. On WhatsApp: long press the message → Report. This helps de-list the scammer and prevents them from targeting others from the same account.",
        urgent: false,
    },
    {
        step: "06",
        title: "If it's an overseas job scam  also contact MEA",
        desc: "If you were recruited for an overseas job and paid visa fees, also file a complaint with the Ministry of External Affairs at madad.gov.in and call their helpline at 1800-11-3090. If you believe someone is currently in danger due to overseas trafficking, call 1930 and police immediately.",
        urgent: false,
    },
];

// ── FAQs ──────────────────────────────────────────────────────────────────────
const faqs = [
    {
        q: "How do I identify a fake job offer?",
        a: "Key signals of a fake job offer: the offer came via WhatsApp or Telegram from an unknown number without you applying; salary is implausibly high for the role described; the company name is similar to (but not exactly) a real brand; any fee is requested before joining  background check, training kit, uniform deposit, or visa processing; the interview is conducted entirely on WhatsApp or Telegram with no video or office visit; and the job description is vague ('data entry', 'product reviewer', 'social media liker') with no clear employer identity.",
    },
    {
        q: "What are WhatsApp job scams and how do they work?",
        a: "WhatsApp job scams begin with an unsolicited message from a number claiming to be from a recruiter, HR firm, or brand. They offer part-time or work-from-home roles  'like YouTube videos', 'rate hotel reviews', 'complete simple tasks'  for ₹500–₹2,000 per task. Once engaged, the victim is moved into a Telegram group. An initial task pays a small commission. Then 'boosted' tasks require pre-depositing money  the more you deposit, the more you earn. The group eventually disappears with all deposited funds.",
    },
    {
        q: "What is a 'task scam' or 'like and earn' job fraud?",
        a: "Task scams (also called 'like and earn', 'click and earn', or 'review boosting' scams) promise payment for simple online tasks  liking YouTube videos, rating hotels on Google, reviewing products on Amazon. An initial small payment is made to establish trust. Then 'boosted tasks' are offered  higher-paying tasks that require an advance deposit before the reward is released. After victims deposit significant sums, the Telegram group vanishes and the operator disappears.",
    },
    {
        q: "Is it safe to apply for jobs through WhatsApp or Telegram?",
        a: "Any job offer that arrives via an unsolicited WhatsApp or Telegram message should be treated as suspect until independently verified. Legitimate recruiters use verified email addresses, official job portals (Naukri, LinkedIn, Indeed), and verifiable office addresses. Before engaging with any recruiter, independently look up the company, verify the recruiter's email domain matches the company domain, and check if the company has an active presence on LinkedIn with verifiable employees.",
    },
    {
        q: "I paid a 'registration fee' for a job that turned out to be fake  what should I do?",
        a: "Call 1930 (Cyber Crime Financial Helpline) immediately  if the transfer was recent, the destination account may be freezeable. File a complaint at cybercrime.gov.in with all transaction details, recruiter contact information, company name, and screenshot of all communications. If you also shared Aadhaar, PAN, or bank account details, contact your bank to flag potential identity misuse. Report to the portal (Naukri, LinkedIn, Indeed) through which the contact was made.",
    },
    {
        q: "How do overseas job scams in India work?",
        a: "Overseas job scams target job seekers with promises of high-paying IT, hospitality, or labour roles in Singapore, Dubai, Canada, or Southeast Asia. After collecting advance visa and processing fees (₹50,000–₹3 lakh), victims either receive no visa at all, or are trafficked to Southeast Asian countries (Thailand, Myanmar, Cambodia) and forced to work in cyber crime operations under coercion. MHA and MEA have issued specific warnings about human trafficking via fake overseas job advertisements on social media. Always verify overseas recruiters with the MEA's eMigrate portal.",
    },
];

// ─────────────────────────────────────────────────────────────────────────────
export default function JobScamsPage() {
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

            <main className="min-h-screen">

                {/* ── Hero ─────────────────────────────────────────────────── */}
                <section className="relative overflow-hidden bg-gradient-to-br from-lime-50 via-white to-green-50 dark:from-gray-950 dark:via-gray-900 dark:to-lime-950 pt-20 pb-24 px-4">
                    <div className="pointer-events-none absolute inset-0 -z-10">
                        <div className="absolute top-10 left-1/4 w-96 h-96 bg-lime-300/10 rounded-full blur-3xl animate-pulse" />
                        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-300/10 rounded-full blur-3xl animate-pulse delay-700" />
                        <div className="absolute top-1/2 right-0 w-64 h-64 bg-yellow-300/10 rounded-full blur-3xl animate-pulse delay-1000" />
                    </div>

                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-lime-100 to-green-100 dark:from-lime-900/40 dark:to-green-900/40 text-lime-700 dark:text-lime-300 text-xs font-semibold mb-6 border border-lime-200 dark:border-lime-800 shadow-sm">
                            <Briefcase className="h-4 w-4 animate-pulse" />
                            Fake job offers scammed ₹2,100+ crore from Indians in 2024  and most started with a single WhatsApp message
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
                            Job Scams in India:{" "}
                            <span className="bg-gradient-to-r from-lime-600 via-green-600 to-teal-600 bg-clip-text text-transparent">
                                Fake Job Offers, Work From Home Fraud &amp; the WhatsApp Task Trap
                            </span>
                        </h1>

                        <div className="max-w-2xl mx-auto mb-6 p-5 rounded-2xl bg-lime-50 dark:bg-lime-950/30 border border-lime-100 dark:border-lime-900 text-left">
                            <p className="text-base text-gray-800 dark:text-gray-200 leading-relaxed">
                                <strong>Job scams in India</strong> are fraudulent schemes that lure job-seekers, students, homemakers, and gig workers with promises of high-paying remote work  then extract money through advance fees, equipment purchases, or unpaid tasks before disappearing. In 2024, Indians filed over 63,000 job fraud complaints reporting losses exceeding ₹2,100 crore, making job fraud the second fastest-growing cybercrime category after investment fraud (NCRB 2024). The most active variants are WhatsApp task scams (small initial payments to build trust, then required deposits), fake overseas job rackets (trafficking disguised as legitimate work in Southeast Asia), and cloned recruitment portals mimicking Naukri.com or LinkedIn. Any job offer that requires you to pay money before receiving your salary is a scam  no exceptions. If you have already been targeted, call 1930 immediately and file at cybercrime.gov.in.
                            </p>
                        </div>

                        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                            The message says: part-time, work from home, no experience needed,
                            ₹25,000 a month. The first task pays. Then a bigger task requires a
                            small deposit to unlock the reward. Then the group disappears.
                            Job scams are India's fastest-growing category of cyber fraud
                            targeting students, fresh graduates, homemakers, and people between
                            jobs. Here's exactly how every variant works and how to stop each one.
                        </p>

                        {/* Stats strip */}
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            {[
                                { value: "₹2,100 Cr+", label: "Lost to job fraud in India (2024)", icon: <IndianRupee className="h-4 w-4" /> },
                                { value: "64,000+", label: "Job fraud complaints filed (2024)", icon: <AlertTriangle className="h-4 w-4" /> },
                                { value: "78%", label: "Job scams start on WhatsApp or Telegram", icon: <MessageCircle className="h-4 w-4" /> },
                                { value: "1930", label: "Cyber Crime Helpline", icon: <Shield className="h-4 w-4" /> },
                            ].map(({ value, label, icon }, i) => (
                                <div
                                    key={label}
                                    className="group flex flex-col items-center px-6 py-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 min-w-[130px]"
                                    style={{ animationDelay: `${i * 100}ms` }}
                                >
                                    <div className="text-lime-600 mb-1 group-hover:scale-110 transition-transform">{icon}</div>
                                    <span className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-lime-600 to-green-600 bg-clip-text text-transparent">{value}</span>
                                    <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-center">{label}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <ReportScamButton className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-lime-500 to-green-600 text-white font-bold text-sm shadow-lg hover:shadow-lime-300/50 hover:scale-105 transition-all duration-300 cursor-pointer">
                                <ShieldAlert className="h-5 w-5" />
                                Report a Job Scam
                                <ArrowRight className="h-4 w-4" />
                            </ReportScamButton>
                            <a
                                href="#scam-types"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 font-semibold text-sm border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
                            >
                                See All Scam Types
                                <ChevronDown className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </section>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

                    {/* ── Why Job Scams Are So Effective ───────────────────── */}
                    <section>
                        <div className="grid lg:grid-cols-2 gap-10 items-center">
                            <div>
                                <span className="inline-block px-3 py-1 rounded-full bg-lime-100 dark:bg-lime-900/30 text-lime-700 dark:text-lime-300 text-xs font-semibold mb-4">
                                    Why They Work So Well
                                </span>
                                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-6 leading-snug">
                                    Why Job Fraud Is India's Fastest-Growing Cyber Crime Category
                                </h2>
                                <div className="space-y-4 text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                                    <p>
                                        India's employment market is structurally challenging for entry-level
                                        candidates: high competition, low starting salaries, and rapidly
                                        growing demand for flexible or remote work. Job scammers exploit
                                        exactly this gap  offering salaries and flexibility that legitimate
                                        employers currently can't match.
                                    </p>
                                    <p>
                                        The task scam variant is particularly effective because it delivers
                                        actual money before asking for any. The victim has concrete proof
                                        the system works  they received ₹300 for five YouTube likes 
                                        which makes the next request for a ₹5,000 deposit to unlock a
                                        higher task feel logical rather than suspicious.
                                    </p>
                                    <p>
                                        Job scams also harvest valuable identity data during the 'application
                                        process'. Victims who submit Aadhaar, PAN, bank account details,
                                        and professional references during a fake interview may face
                                        secondary fraud  loans taken in their name, SIM swaps, or
                                        professional reputation damage  long after the initial scam ends.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-lime-50 to-green-50 dark:from-lime-950/40 dark:to-green-950/40 rounded-2xl p-8 border border-lime-100 dark:border-lime-900 space-y-5">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-lime-500 to-green-600 flex items-center justify-center">
                                        <Info className="h-5 w-5 text-white" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 dark:text-white text-lg">The Rules That Block Every Job Scam</h3>
                                </div>
                                <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border-2 border-lime-400 dark:border-lime-600 text-center">
                                    <p className="text-base font-extrabold text-lime-700 dark:text-lime-300">
                                        Legitimate employers never ask candidates to pay any fee before or during employment.
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                                        Background checks, ID verification, uniform costs, and training are employer expenses  never charged to candidates in formal employment.
                                    </p>
                                </div>
                                <ul className="space-y-4">
                                    {[
                                        { icon: XCircle, color: "text-red-500", text: "Any job offer that asks for money before your first day is fraud  without exceptions." },
                                        { icon: XCircle, color: "text-red-500", text: "Any 'task' that requires a deposit to unlock a higher payout is a task scam  regardless of how many prior tasks paid out." },
                                        { icon: XCircle, color: "text-red-500", text: "Recruiter email addresses using @gmail.com, @yahoo.com, or @outlook.com are not corporate HR contacts." },
                                        { icon: CheckCircle2, color: "text-green-500", text: "Call the real company's official HR line (from their official website) to verify any offer letter before accepting or paying anything." },
                                        { icon: CheckCircle2, color: "text-green-500", text: "Cross-check the recruiter on LinkedIn  their profile should show current employment at the company they claim to represent." },
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

                    {/* ── Job Fraud Scale + Image ───────────────────────────── */}
                    <section aria-labelledby="job-scale-heading">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <span className="text-xs font-bold text-lime-600 dark:text-lime-400 uppercase tracking-widest">
                                    Official 2024 Data
                                </span>
                                <h2
                                    id="job-scale-heading"
                                    className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-2 mb-4"
                                >
                                    How Big Is Job Fraud in India Right Now?
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                    Job scams surpassed every other WhatsApp-based fraud category in 2024.
                                    From task scams targeting homemakers to fake overseas job rackets
                                    trafficking young professionals, the threat spans every income level
                                    and age group  and always begins with a single unsolicited message.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { label: "Lost to fake job offers in India in 2024", value: "₹2,100 Cr+", color: "from-lime-500 to-green-600" },
                                        { label: "Job fraud complaints filed in 2024", value: "64,000+", color: "from-rose-500 to-pink-600" },
                                        { label: "Job scams that start on WhatsApp or Telegram", value: "78%", color: "from-orange-500 to-amber-600" },
                                        { label: "Victims who also shared Aadhaar or PAN", value: "3 in 5", color: "from-red-500 to-rose-600" },
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
                                    src="/image/indian-woman-checking-suspicious-scam-call-rakshaai.jpg"
                                    alt="Indian woman identifying a suspicious fake job offer call  how to spot WhatsApp job scams, task fraud, and advance fee job offers in India, RakshaAI"
                                    title="How to Identify Fake Job Offers and WhatsApp Job Scams in India | RakshaAI"
                                    width={500}
                                    height={500}
                                    className="object-contain drop-shadow-2xl max-w-full h-auto rounded-3xl"
                                />
                            </div>
                        </div>
                    </section>

                    {/* ── Checker CTA Bridge ───────────────────────────────── */}
                    <section aria-label="Verify before you engage">
                        <div className="rounded-2xl border border-lime-200 dark:border-lime-800 bg-lime-50 dark:bg-lime-950/40 p-6 sm:p-8">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-lime-100 dark:bg-lime-900 flex items-center justify-center">
                                    <Shield className="h-5 w-5 text-lime-700 dark:text-lime-300" />
                                </div>
                                <div>
                                    <h2 className="text-lg font-extrabold text-gray-900 dark:text-white">Got a suspicious job offer? Check it free before responding.</h2>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Scammers share phone numbers, websites, and UPI IDs. Run any of them through RakshaAI instantly  no login required.</p>
                                </div>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-3">
                                <Link href="/phone-number-checker" className="group flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-lime-400 dark:hover:border-lime-600 hover:shadow-md transition-all duration-200">
                                    <span className="text-xl">📞</span>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-bold text-gray-900 dark:text-white">Phone Number Checker</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">Check if the recruiter&apos;s number is a known fraud number</p>
                                    </div>
                                    <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-lime-600 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                                </Link>
                                <Link href="/website-safety-checker" className="group flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-lime-400 dark:hover:border-lime-600 hover:shadow-md transition-all duration-200">
                                    <span className="text-xl">🌐</span>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-bold text-gray-900 dark:text-white">Website Safety Checker</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">Verify the company&apos;s website before submitting any documents</p>
                                    </div>
                                    <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-lime-600 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* ── 8 Scam Types ─────────────────────────────────────── */}
                    <section id="scam-types">
                        <div className="text-center mb-12">
                            <span className="inline-block px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-semibold mb-4">
                                Every Variant
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                8 Types of Job Scams Targeting Indians Right Now
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-base">
                                From WhatsApp cold messages to fake corporate portals  each uses a
                                different channel to exploit the same urgent need for employment.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-5">
                            {scamTypes.map(({ icon: Icon, color, bg, border, title, desc, href }) => (
                                <div
                                    key={title}
                                    className={`group flex items-start gap-5 p-6 rounded-2xl border ${bg} ${border} hover:shadow-lg transition-all duration-300`}
                                >
                                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                                        <Icon className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 dark:text-white text-base mb-1">
                                            {href ? (
                                                <Link href={href} className="inline-flex items-center gap-1.5 hover:text-lime-700 dark:hover:text-lime-300">
                                                    {title}<ArrowRight className="h-3.5 w-3.5" />
                                                </Link>
                                            ) : title}
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── How It Unfolds ────────────────────────────────────── */}
                    <section>
                        <div className="text-center mb-12">
                            <span className="inline-block px-3 py-1 rounded-full bg-lime-100 dark:bg-lime-900/30 text-lime-700 dark:text-lime-300 text-xs font-semibold mb-4">
                                The Full Playbook
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                How a Job Scam Unfolds  Stage by Stage
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-base">
                                The same six-stage script runs across thousands of parallel scam operations.
                                Recognising the stages reveals the pattern before it costs you.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="hidden sm:block absolute left-[27px] top-10 bottom-10 w-0.5 bg-gradient-to-b from-lime-300 via-orange-300 to-red-300 dark:from-lime-800 dark:via-orange-800 dark:to-red-800" />
                            <div className="space-y-5">
                                {scamSteps.map(({ step, color, bg, border, title, desc, urgent }) => (
                                    <div key={step} className="relative flex gap-6 items-start">
                                        <div className={`relative z-10 flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center text-white font-extrabold text-sm shadow-lg`}>
                                            {step}
                                            {urgent && <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-400 animate-ping" />}
                                        </div>
                                        <div className={`flex-1 p-6 rounded-2xl border ${bg} ${border} hover:shadow-md transition-all`}>
                                            <div className="flex items-center gap-3 mb-2">
                                                <h3 className="font-bold text-gray-900 dark:text-white text-base">{title}</h3>
                                                {urgent && (
                                                    <span className="px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400 text-xs font-bold">
                                                        THE TRAP ACTIVATES
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

                    {/* ── Real Story ────────────────────────────────────────── */}
                    <section className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8 sm:p-12 border border-gray-100 dark:border-gray-800">
                        <span className="inline-block px-3 py-1 rounded-full bg-lime-100 dark:bg-lime-900/30 text-lime-700 dark:text-lime-300 text-xs font-semibold mb-4">
                            A Real Account
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
                            "I Received ₹400 in My Account. I Thought It Was Legitimate."  A Real Account
                        </h2>
                        <div className="grid lg:grid-cols-2 gap-8 text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                            <div className="space-y-4">
                                <p>
                                    Arjun (name changed), a 24-year-old engineering graduate from Bengaluru
                                    preparing for campus placements in December 2024, received a WhatsApp
                                    message from an unknown number. The message asked if he was interested
                                    in part-time digital marketing work  ₹500 per hour, flexible, work from
                                    home, with a well-known e-commerce company name in the message.
                                </p>
                                <p>
                                    He was added to a Telegram group with 200+ apparent members. An
                                    'instructor' explained the work: complete simple tasks (liking product
                                    listings, following brand accounts), submit through the portal, receive
                                    daily payment. Arjun completed five tasks and received ₹400 in his UPI
                                    account the same evening. He told two friends.
                                </p>
                                <p>
                                    The next day, a 'Level 2' task was announced: rate 20 hotel listings
                                    on a platform, earn ₹2,500. To access Level 2, a refundable task
                                    deposit of ₹3,000 was required  'to prevent fake task submission'.
                                    After depositing, he completed the tasks and earned ₹2,500 commission 
                                    but withdrawal was blocked pending 'Level 3 task completion'. Level 3
                                    required a ₹15,000 deposit.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <p>
                                    He deposited ₹15,000. Level 4 appeared: 'complete 10 premium hotel
                                    listings, earn ₹12,000 commission  deposit ₹35,000 to access'. His
                                    existing earnings and deposits were shown as frozen pending Level 4
                                    completion. His two friends, also in the group, were at similar stages.
                                    Total invested across the three of them: ₹1,18,000 across 11 days.
                                </p>
                                <p>
                                    When his friend tried to withdraw at Level 2, withdrawal failed with an
                                    error. All three reported to the group admin. The Telegram group was
                                    archived within 20 minutes. The numbers were blocked. Total lost:
                                    ₹1,18,000 across three victims. FIR filed at the Bengaluru cyber crime
                                    police station  investigation ongoing.
                                </p>
                                <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border border-lime-200 dark:border-lime-800">
                                    <p className="text-sm font-bold text-lime-700 dark:text-lime-300 mb-2">The Signal That Was There From the Start:</p>
                                    <p className="text-sm text-gray-700 dark:text-gray-300">
                                        The initial ₹400 payment was not proof of legitimacy  it was the
                                        investment for the trust that enabled ₹1.18 lakh in losses.
                                        Any task system that requires a deposit to unlock a higher payout
                                        is a task scam, regardless of what level you're on or how much
                                        is shown as your pending balance.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ── Overseas Job Scam Deep Dive ───────────────────────── */}
                    <section className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 rounded-2xl p-8 sm:p-12 border border-orange-100 dark:border-orange-900">
                        <span className="inline-block px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300 text-xs font-semibold mb-4">
                            The Most Dangerous Variant
                        </span>
                        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6">
                            Overseas Job Scams  When Fraud Becomes Human Trafficking
                        </h2>
                        <div className="grid lg:grid-cols-2 gap-8 text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                            <div className="space-y-4">
                                <p>
                                    India's Ministry of Home Affairs and Ministry of External Affairs have
                                    issued repeated warnings about a specific category of overseas job scam
                                    that has been active since 2022  primarily targeting Southeast Asian
                                    destinations (Myanmar, Cambodia, Thailand, Laos).
                                </p>
                                <p>
                                    The scam begins as a standard fake job offer: IT support, customer
                                    service, data entry, or digital marketing roles in these countries
                                    offering ₹80,000–₹2 lakh per month. After the victim pays visa and
                                    processing fees (typically ₹1–3 lakh), some are issued tourist visas
                                    (not work visas) and flown to the destination.
                                </p>
                                <p>
                                    On arrival, they are transported to secured compounds and forced to
                                    conduct cyber fraud operations under coercion  primarily romance
                                    scams, crypto investment fraud (pig butchering), and fake trading
                                    platforms targeting victims in India, the US, and Europe. Passports
                                    are confiscated. Attempts to leave are met with violence or debt bondage threats.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <p>
                                    Indian cyber cells and MEA have repatriated hundreds of Indian nationals
                                    from these compounds since 2023. The MEA operates a 24-hour helpline
                                    (1800-11-3090) and the Madad portal for distressed Indians abroad.
                                </p>
                                <div className="grid grid-cols-1 gap-3">
                                    {[
                                        { label: "🚩 Red Flag", text: "Job offer for Southeast Asia arrived via Facebook, Instagram, or WhatsApp with unusually high salary" },
                                        { label: "🚩 Red Flag", text: "Recruiter insists on tourist visa rather than work visa  'we'll sort the work permit when you arrive'" },
                                        { label: "🚩 Red Flag", text: "Advance fees required for visa, flight, or 'agent fees' before official documentation is received" },
                                        { label: "✅ Verify", text: "Check recruiter on MEA's eMigrate portal (emigrate.gov.in)  all licensed overseas recruitment agents must be registered" },
                                    ].map(({ label, text }) => (
                                        <div key={text} className="flex items-start gap-3 p-3 bg-white dark:bg-gray-900 rounded-xl border border-orange-100 dark:border-orange-900 text-sm">
                                            <span className="font-bold text-orange-700 dark:text-orange-300 min-w-[80px] flex-shrink-0 text-xs leading-5">{label}</span>
                                            <span className="text-gray-600 dark:text-gray-400">{text}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="p-3 bg-white dark:bg-gray-900 rounded-xl border border-orange-200 dark:border-orange-800 text-sm">
                                    <p className="font-bold text-orange-700 dark:text-orange-300 mb-1">Emergency contacts for overseas work fraud:</p>
                                    <p className="text-gray-700 dark:text-gray-300">MEA Helpline: <span className="font-mono">1800-11-3090</span> · Madad Portal: <span className="font-mono">madad.gov.in</span> · Embassy/Consulate in destination country</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ── Verifying a Job Offer ─────────────────────────────── */}
                    <section className="bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-950/50 dark:to-gray-950/30 rounded-2xl p-8 sm:p-12 border border-slate-100 dark:border-slate-800">
                        <span className="inline-block px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900/40 text-slate-700 dark:text-slate-300 text-xs font-semibold mb-4">
                            5-Minute Verification
                        </span>
                        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6">
                            How to Verify a Job Offer in 5 Minutes Before Accepting
                        </h2>
                        <div className="grid lg:grid-cols-2 gap-8 text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                            <div className="space-y-4">
                                <p>
                                    Most fake job offers fail basic independent verification in under five minutes.
                                    The psychological barrier is that by the time a suspicious feeling surfaces,
                                    the victim has already mentally planned around the income. Do these checks
                                    before any emotional commitment is made  not after.
                                </p>
                            </div>
                            <div className="space-y-3">
                                {[
                                    {
                                        step: "1",
                                        title: "Call the company's official HR line directly",
                                        desc: "Find the company's real phone number from their official website (not from the offer letter). Call their HR department and ask if a role matching the offer is open and if your recruiter works there. This takes 3 minutes and is definitive.",
                                    },
                                    {
                                        step: "2",
                                        title: "Verify the recruiter on LinkedIn",
                                        desc: "Search the recruiter's name on LinkedIn. Their profile should show current employment at the company they claim to represent. No LinkedIn profile, or a profile created in the last few months, is a significant flag.",
                                    },
                                    {
                                        step: "3",
                                        title: "Check the recruiter's email domain",
                                        desc: "The email address sending documents should use the company's domain (e.g., @tcs.com, @amazon.in). Any Gmail, Yahoo, Outlook, or lookalike domain (e.g., @tcs-careers.com) is not a legitimate company HR contact.",
                                    },
                                    {
                                        step: "4",
                                        title: "Search the company name + 'scam' or 'fake'",
                                        desc: "Google the company name alongside terms like 'job scam', 'fake offer', or 'fraud'. Documented fake portals frequently have complaints posted by earlier victims. Check MHA's cybercrime awareness posts for listed fake entities.",
                                    },
                                ].map(({ step, title, desc }) => (
                                    <div key={step} className="flex items-start gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 text-sm">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-lime-500 to-green-600 flex items-center justify-center text-white font-bold text-xs">
                                            {step}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900 dark:text-white mb-0.5">{title}</p>
                                            <p className="text-gray-600 dark:text-gray-400">{desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ── Real vs Fake Recruiter: Split Section ─────────────── */}
                    <section
                        aria-labelledby="real-vs-fake-heading"
                        className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-lg lg:min-h-[520px]"
                    >
                        {/* LEFT  content */}
                        <div className="p-8 sm:p-10 bg-white dark:bg-gray-900 flex flex-col justify-center">
                            <span className="inline-block px-3 py-1 rounded-full bg-lime-100 dark:bg-lime-900/30 text-lime-700 dark:text-lime-300 text-xs font-semibold mb-4 self-start">
                                Quick Reference
                            </span>
                            <h2
                                id="real-vs-fake-heading"
                                className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-6 leading-snug"
                            >
                                Genuine Recruiter vs. Job Scammer  Know the Difference
                            </h2>
                            <div className="space-y-3 mb-6">
                                <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-xl border border-green-200 dark:border-green-900">
                                    <p className="text-xs font-bold text-green-700 dark:text-green-400 mb-2 uppercase tracking-wide">
                                        Genuine Recruiter
                                    </p>
                                    <ul className="space-y-1.5 text-sm text-gray-700 dark:text-gray-300">
                                        {[
                                            "Uses a company email address (@tcs.com, @amazon.in, @infosys.com)",
                                            "Never asks for any fee  not for background checks, training, or ID cards",
                                            "Verifiable on LinkedIn with tenure matching the company they claim",
                                            "Interview involves video call on official platform, or in-office visit",
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
                                        Job Scammer
                                    </p>
                                    <ul className="space-y-1.5 text-sm text-gray-700 dark:text-gray-300">
                                        {[
                                            "Contacted you via unsolicited WhatsApp or Telegram message",
                                            "Interview conducted entirely by text  no video, no office address",
                                            "Asks for a fee (registration, background check, joining kit) before Day 1",
                                            "Offer letter in PDF appeared within hours of a chat interview",
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
                                    The 3-Minute Rule
                                </p>
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    Before paying anything: call the company's official HR line (from their website,
                                    not the offer letter) and ask if the role and recruiter are real. 3 minutes
                                    is all it takes to confirm or expose any fake job offer.
                                </p>
                            </div>
                        </div>
                        {/* RIGHT  full-height image */}
                        <div className="relative h-full min-h-[400px] overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-lime-500 via-green-600 to-teal-600" />
                            <Image
                                src="/image/report-scam-number-steps-india-rakshaai.jpg"
                                alt="Steps to verify a recruiter and report a job scam in India  how to check if a job offer is real, verify company HR contacts, report fake job portals, RakshaAI"
                                title="Verify Recruiter and Report Job Scam in India | RakshaAI"
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                    </section>

                    {/* ── Red Flags ─────────────────────────────────────────── */}
                    <section>
                        <div className="text-center mb-12">
                            <span className="inline-block px-3 py-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-xs font-semibold mb-4">
                                Warning Signs
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                10 Red Flags of a Fake Job Offer
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-base">
                                Any single one of these should pause the process until independent verification is complete.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {redFlags.map((flag, i) => (
                                <div
                                    key={flag}
                                    className="flex items-start gap-4 p-5 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md hover:border-lime-200 dark:hover:border-lime-800 transition-all duration-200"
                                >
                                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center text-white text-xs font-bold">
                                        {String(i + 1).padStart(2, "0")}
                                    </div>
                                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{flag}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── Myth vs Reality ───────────────────────────────────── */}
                    <section>
                        <div className="text-center mb-12">
                            <span className="inline-block px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-xs font-semibold mb-4">
                                Myth Busting
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                Job Scam Myths vs. Reality
                            </h2>
                        </div>
                        <div className="space-y-4">
                            {myths.map(({ myth, fact }) => (
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

                    {/* ── Recovery Steps ────────────────────────────────────── */}
                    <section>
                        <div className="text-center mb-12">
                            <span className="inline-block px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-xs font-semibold mb-4">
                                Recovery Steps
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                Realised You've Been Scammed? Do This Right Now.
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-base">
                                Fast action can freeze the destination account and prevent secondary identity fraud.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="relative w-full rounded-2xl overflow-hidden mb-8 shadow-md">
                                <Image
                                    src="/image/emergency-steps-after-entering-data-scam-website-india-recovery-guide.jpg"
                                    alt="Emergency recovery steps after falling for a fake job offer or job scam in India  how to call 1930 cyber crime helpline, report to cybercrime.gov.in, alert bank for identity theft, file FIR against fraudulent recruiter, RakshaAI"
                                    title="Job Scam Recovery Steps India  What To Do After a Fake Job Offer | RakshaAI"
                                    width={1200}
                                    height={480}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            <div className="hidden sm:block absolute left-[27px] top-10 bottom-10 w-0.5 bg-gradient-to-b from-red-300 via-lime-300 to-green-300 dark:from-red-800 dark:via-lime-800 dark:to-green-800" />
                            <div className="space-y-5">
                                {recoverySteps.map(({ step, title, desc, urgent }) => (
                                    <div key={step} className="relative flex gap-6 items-start">
                                        <div className={`relative z-10 flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-white font-extrabold text-sm shadow-lg ${urgent ? "bg-gradient-to-br from-red-500 to-rose-600" : "bg-gradient-to-br from-lime-500 to-green-600"}`}>
                                            {step}
                                            {urgent && <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-400 animate-ping" />}
                                        </div>
                                        <div className={`flex-1 p-6 rounded-2xl border hover:shadow-md transition-all ${urgent ? "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-900" : "bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800"}`}>
                                            <div className="flex items-center gap-3 mb-2">
                                                <h3 className="font-bold text-gray-900 dark:text-white text-base">{title}</h3>
                                                {urgent && <span className="px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400 text-xs font-bold">DO FIRST</span>}
                                            </div>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ── Official Resources ────────────────────────────────── */}
                    <section className="rounded-2xl overflow-hidden border border-lime-100 dark:border-lime-900">
                        <div className="bg-gradient-to-r from-lime-600 to-green-700 px-8 py-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                                    <BadgeCheck className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-extrabold text-white">Report Job Fraud  Official Channels</h2>
                                    <p className="text-lime-100 text-sm">Where to report, verify, and get help</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-lime-50 dark:bg-lime-950/30 p-8">
                            <div className="grid sm:grid-cols-2 gap-6">
                                {[
                                    {
                                        label: "National Cyber Crime Portal",
                                        url: "cybercrime.gov.in",
                                        desc: "File your complaint with all recruiter details, transaction IDs, screenshot of offer letter, and all communications",
                                    },
                                    {
                                        label: "Cyber Crime Helpline",
                                        url: "1930",
                                        desc: "Call immediately if money was transferred recently  the 30–60 minute window for account freezing is critical",
                                    },
                                    {
                                        label: "MEA Madad Portal",
                                        url: "madad.gov.in",
                                        desc: "For overseas job victims  distress support, repatriation assistance, embassy contact for Indians abroad",
                                    },
                                    {
                                        label: "MEA Overseas Helpline",
                                        url: "1800-11-3090",
                                        desc: "24-hour MEA helpline for Indians stranded or trafficked abroad via fake overseas job offers",
                                    },
                                    {
                                        label: "MEA eMigrate Portal",
                                        url: "emigrate.gov.in",
                                        desc: "Verify whether an overseas recruiter is legally licensed to recruit Indian workers for foreign employment",
                                    },
                                    {
                                        label: "National Consumer Helpline",
                                        url: "1915",
                                        desc: "Report fake job portals and fraudulent HR firms operating as consumer service providers",
                                    },
                                ].map(({ label, url, desc }) => (
                                    <div key={label} className="flex items-start gap-3 p-4 bg-white dark:bg-gray-900 rounded-xl border border-lime-100 dark:border-lime-900">
                                        <CheckCircle2 className="h-5 w-5 text-lime-600 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-semibold text-gray-900 dark:text-white text-sm mb-0.5">{label}</p>
                                            <p className="text-xs font-mono text-lime-700 dark:text-lime-400 mb-1">{url}</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">{desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ── From the RakshaAI Blog ─────────────────────────────── */}
                    <section>
                        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-3">
                            Recent Job Fraud Cases &amp; Deep Dives
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
                            Time-stamped guides from the RakshaAI blog covering the latest job and task fraud patterns in India.
                        </p>
                        <div className="grid sm:grid-cols-3 gap-4">
                            {[
                                { href: '/blog/telegram-task-scam-india', title: 'Telegram Task Scam: How Indians Lost Crores Doing Simple Online Jobs', desc: 'The like-and-earn trap that starts with small payouts and ends with lakhs deposited.' },
                                { href: '/blog/gaming-app-scam-india', title: 'Gaming App Scam India: Fake Earning Apps Targeting Young Indians', desc: 'Play-and-earn apps that never pay out, and how to spot them before depositing.' },
                                { href: '/blog/got-scammed-online-india-what-to-do', title: 'Got Scammed Online? Do These 5 Things in 30 Minutes', desc: 'The exact recovery steps, from calling 1930 to filing at cybercrime.gov.in.' },
                            ].map((a) => (
                                <Link key={a.href} href={a.href} className="group flex flex-col gap-2 p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all">
                                    <h3 className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug">{a.title}</h3>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed flex-1">{a.desc}</p>
                                    <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">Read article &rarr;</span>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* ── FAQ ───────────────────────────────────────────────── */}
                    <section>
                        <div className="mb-10">
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-3">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400">
                                Honest answers to the most common questions about fake job offers and job fraud in India.
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
                    <section className="rounded-2xl bg-gradient-to-br from-lime-700 via-green-700 to-teal-800 p-8 sm:p-12 text-white text-center shadow-2xl relative overflow-hidden">
                        <div className="pointer-events-none absolute inset-0">
                            <div className="absolute -top-10 -left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
                        </div>
                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-xs font-semibold mb-6 border border-white/20">
                                <Shield className="h-4 w-4" />
                                Free Phone Number Verification
                            </div>
                            <h2 className="text-2xl sm:text-4xl font-extrabold mb-4 leading-tight">
                                Got a Job Offer You're Not Sure About?<br className="hidden sm:block" />
                                Check the Number Before You Reply.
                            </h2>
                            <p className="text-lime-100 mb-8 text-sm sm:text-base max-w-xl mx-auto">
                                Check any recruiter's phone number on RakshaAI before sharing your
                                documents or paying any fee. Or report a job scam to protect the next
                                job seeker from the same fraudster.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <ReportScamButton className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-lime-700 font-bold text-sm shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                                    <MessageSquareWarning className="h-5 w-5" />
                                    Report a Job Scam
                                    <ArrowRight className="h-4 w-4" />
                                </ReportScamButton>
                                <Link
                                    href="/"
                                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 text-white font-semibold text-sm border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300"
                                >
                                    Check a Recruiter's Number
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                            <p className="mt-6 text-lime-200 text-xs">
                                🇮🇳 India-focused job scam guidance · Free consumer access · No registration required
                            </p>
                        </div>
                    </section>

                </div>
            </main>
        </DefaultLayout>
    );
}
