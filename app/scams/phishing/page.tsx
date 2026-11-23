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
    Mail,
    MailWarning,
    Globe,
    Link2,
    Users,
    IndianRupee,
    ShieldAlert,
    ArrowRight,
    Info,
    BadgeCheck,
    MessageSquareWarning,
    Smartphone,
    Lock,
    Eye,
    FileWarning,
    ChevronDown,
    MousePointer,
    QrCode,
    MessageSquare,
    CreditCard,
    Search,
    ExternalLink,
    Fingerprint,
} from "lucide-react";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
    title: "What Is Phishing? Email Scams & Fake Links India",
    description:
        "Phishing is India's most widespread cyber fraud technique. Fake emails, spoofed websites, SMS phishing (smishing), and QR code traps  learn what phishing is, see real Indian examples, and protect yourself.",
    alternates: {
        canonical: "https://rakshaai.co/scams/phishing",
    },
    robots: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
    openGraph: {
        title: "What Is Phishing? Fake Email Scams & Indian Phishing Examples | RakshaAI",
        description:
            "Phishing emails, fake bank websites, smishing SMS, and QR code traps  a complete guide to phishing scams targeting Indians, with real examples and step-by-step defences.",
        url: "https://rakshaai.co/scams/phishing",
        type: "website",
    siteName: 'RakshaAI',
        images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'RakshaAI' }],
  },
    twitter: {
        card: "summary_large_image",
        title: "Phishing Scams in India | RakshaAI",
        description:
            "Fake emails, cloned bank sites, smishing, and QR phishing  everything you need to know about phishing in India.",
        images: ['/opengraph-image'],
  },
    other: { "geo.region": "IN", language: "en-IN" },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────
const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
        "What Is Phishing? Email Scams, Fake Links & Phishing Examples in India",
    url: "https://rakshaai.co/scams/phishing",
    description:
        "A comprehensive guide to phishing in India  fake emails, spoofed banking websites, SMS phishing, WhatsApp malware links, QR code phishing, and how to identify and avoid every type.",
    datePublished: "2025-01-01",
    dateModified: "2026-06-11",
    publisher: { "@type": "Organization", name: "RakshaAI", url: "https://rakshaai.co" },
    inLanguage: "en-IN",
};

const faqStructured = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What is phishing?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Phishing is a cyber fraud technique where attackers impersonate a trusted entity  a bank, government body, e-commerce site, or courier  using fake emails, messages, or websites to trick victims into revealing passwords, OTPs, card numbers, or other sensitive credentials. The term comes from 'fishing'  casting a wide net of deceptive messages and waiting for victims to bite.",
            },
        },
        {
            "@type": "Question",
            name: "What does a phishing email look like in India?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Indian phishing emails commonly impersonate SBI, HDFC, ICICI, Paytm, Amazon India, IRCTC, or the Income Tax Department. They typically warn of account suspension, a pending refund, a suspicious transaction, or KYC expiry. They include a button or link that leads to a cloned website where you're asked to enter login credentials, card details, and OTP.",
            },
        },
        {
            "@type": "Question",
            name: "How do I check if a link is a phishing link?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Hover over (or long-press on mobile) the link to see the actual URL before clicking. Look for: misspelled domains (sbi-secure.com vs sbi.co.in), extra subdomains (login.sbi.co.in.secure-verify.com), HTTP instead of HTTPS, random character strings, or URL shorteners hiding the real destination. You can also check links on VirusTotal (virustotal.com) or the RakshaAI website checker before opening.",
            },
        },
        {
            "@type": "Question",
            name: "What is smishing?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Smishing is SMS-based phishing. Fraudsters send text messages impersonating banks, TRAI, IRCTC, or delivery services with a link and an urgent call to action  'Your SIM will be deactivated in 24 hours', 'Your package is held at customs  pay ₹35 to release'. The link leads to a credential-harvesting fake website.",
            },
        },
        {
            "@type": "Question",
            name: "Can I get hacked just by opening a phishing email?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Simply opening a well-crafted phishing email in a modern, updated email client is generally low risk. The real danger is in clicking links, downloading attachments, or entering credentials on the fake site the link leads to. Always update your email app and browser to reduce the risk of zero-click exploits that can execute without you clicking anything.",
            },
        },
        {
            "@type": "Question",
            name: "What should I do if I clicked a phishing link?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "If you clicked but didn't enter any credentials: close the page immediately and run a malware scan. If you entered any password or OTP: change the password on the affected account immediately from a different device, contact your bank if financial credentials were entered, enable two-factor authentication, and file a report at cybercrime.gov.in.",
            },
        },
    ],
};

// ── Phishing types ────────────────────────────────────────────────────────────
const phishingTypes = [
    {
        icon: Mail,
        color: "from-amber-500 to-yellow-600",
        bg: "bg-amber-50 dark:bg-amber-950/30",
        border: "border-amber-200 dark:border-amber-900",
        title: "Email Phishing",
        desc: "Mass-sent fake emails impersonating SBI, HDFC, Income Tax, Amazon, or IRCTC. A convincing clone of the official template leads you to a fake site that harvests your credentials.",
    },
    {
        icon: MessageSquare,
        color: "from-orange-500 to-amber-600",
        bg: "bg-orange-50 dark:bg-orange-950/30",
        border: "border-orange-200 dark:border-orange-900",
        title: "Smishing (SMS Phishing)",
        desc: "SMS messages with urgent links  'Your SIM will be blocked in 24 hours', 'KYC pending  click to verify', 'Package held at customs'. The link leads to a credential-harvesting page.",
    },
    {
        icon: Smartphone,
        color: "from-green-500 to-emerald-600",
        bg: "bg-green-50 dark:bg-green-950/30",
        border: "border-green-200 dark:border-green-900",
        title: "WhatsApp / Telegram Phishing",
        desc: "Fake job offers, lottery wins, or government scheme links sent via WhatsApp. Often designed to look like forwarded messages from trusted contacts whose accounts were compromised.",
    },
    {
        icon: Globe,
        color: "from-blue-500 to-indigo-600",
        bg: "bg-blue-50 dark:bg-blue-950/30",
        border: "border-blue-200 dark:border-blue-900",
        title: "Website Spoofing",
        desc: "Pixel-perfect clones of bank portals, income tax login pages, and e-commerce checkout flows. Domains use subtle misspellings or confusable characters  sblnkng.com vs sbinking.com.",
    },
    {
        icon: QrCode,
        color: "from-violet-500 to-purple-600",
        bg: "bg-violet-50 dark:bg-violet-950/30",
        border: "border-violet-200 dark:border-violet-900",
        title: "QR Code Phishing (Quishing)",
        desc: "Physical QR codes on posters, parking meters, ATM fascias, or restaurant menus pasted over legitimate codes  redirect to phishing sites that steal card details or UPI credentials.",
    },
    {
        icon: Search,
        color: "from-red-500 to-rose-600",
        bg: "bg-red-50 dark:bg-red-950/30",
        border: "border-red-200 dark:border-rose-900",
        title: "Search Engine Phishing",
        desc: "Fraudsters pay for Google Ads targeting searches like 'SBI bank login', 'IRCTC customer care number'. The top sponsored result is a fake site or a number that connects to a scam call centre.",
    },
    {
        icon: Users,
        color: "from-pink-500 to-rose-600",
        bg: "bg-pink-50 dark:bg-pink-950/30",
        border: "border-pink-200 dark:border-pink-900",
        title: "Spear Phishing",
        desc: "Highly targeted attacks using your name, role, company, and recent activity  often scraped from LinkedIn or data breaches. An attacker poses as your IT department, CEO, or a vendor.",
    },
    {
        icon: FileWarning,
        color: "from-slate-500 to-gray-600",
        bg: "bg-slate-50 dark:bg-slate-950/30",
        border: "border-slate-200 dark:border-slate-900",
        title: "Malicious Attachment Phishing",
        desc: "Emails carrying Word documents, PDFs, or APK files that install keyloggers or RATs when opened. Common pretexts: 'invoice attached', 'your statement', 'job application form enclosed'.",
    },
];

// ── How a phishing attack unfolds ─────────────────────────────────────────────
const attackSteps = [
    {
        step: "01",
        color: "from-amber-500 to-yellow-600",
        bg: "bg-amber-50 dark:bg-amber-950/30",
        border: "border-amber-200 dark:border-amber-900",
        title: "The Lure Arrives",
        desc: "An email arrives from 'noreply@sbi-netbanking-alert.com'. The subject: 'URGENT: Suspicious login detected  verify your account immediately or it will be suspended in 24 hours.' The SBI logo, colours, and footer are indistinguishable from real SBI communications.",
        urgent: false,
    },
    {
        step: "02",
        color: "from-orange-500 to-amber-600",
        bg: "bg-orange-50 dark:bg-orange-950/30",
        border: "border-orange-200 dark:border-orange-900",
        title: "You Click the Link",
        desc: "The embedded 'Verify Now' button sends you to https://sbi-secure-login.netbankingverify.com  a page that looks exactly like the real SBI login screen. The address bar shows a padlock (HTTPS) which most users interpret as proof of safety.",
        urgent: false,
    },
    {
        step: "03",
        color: "from-red-500 to-rose-600",
        bg: "bg-red-50 dark:bg-red-950/30",
        border: "border-red-200 dark:border-red-900",
        title: "You Enter Your Credentials",
        desc: "Username, password, date of birth, and account number  entered into a form that looks real but submits data directly to the attacker. Each keystroke is logged and stored in a database accessible from anywhere in the world.",
        urgent: true,
    },
    {
        step: "04",
        color: "from-rose-500 to-pink-600",
        bg: "bg-rose-50 dark:bg-rose-950/30",
        border: "border-rose-200 dark:border-rose-900",
        title: "The OTP Screen Appears",
        desc: "After submitting credentials, a convincing 'OTP verification' screen appears. Meanwhile, the attacker is already logging into the real SBI with your credentials  triggering the genuine OTP to be sent to your phone. You enter it on the fake screen.",
        urgent: true,
    },
    {
        step: "05",
        color: "from-gray-500 to-slate-600",
        bg: "bg-gray-50 dark:bg-gray-900/50",
        border: "border-gray-200 dark:border-gray-800",
        title: "Redirect to Real Site  You Suspect Nothing",
        desc: "After the OTP, the page shows 'Verification successful  redirecting…' and sends you to the real SBI website. You're now logged into your real account. Everything looks normal. The attacker, in another window, has just transferred your balance.",
        urgent: false,
    },
    {
        step: "06",
        color: "from-slate-500 to-gray-700",
        bg: "bg-slate-50 dark:bg-gray-900/50",
        border: "border-slate-200 dark:border-gray-800",
        title: "Discovery  Too Late",
        desc: "You check your balance the next morning. Multiple transfers you didn't authorise. The fake site is gone  the domain was registered 48 hours ago and hosted in a jurisdiction with no extradition. The credentials database has been sold.",
        urgent: false,
    },
];

// ── Red flags ─────────────────────────────────────────────────────────────────
const redFlags = [
    "Sender email domain is slightly wrong  sbi@sbi-alert.co, hdfc@hdfcbankalert.net, incometax@it-refund.in",
    "Extreme urgency  'Your account will be blocked in 24/48 hours unless you act immediately'",
    "Link destination doesn't match the sender's claimed organisation when you hover before clicking",
    "The page uses HTTP (no padlock) OR has a padlock but the domain name is wrong  HTTPS ≠ legitimate",
    "Request for information the organisation already has  your date of birth, full card number, or Aadhaar",
    "Poor grammar, odd spacing, inconsistent fonts, or slightly wrong logo colours in the email",
    "A government body (TRAI, IT Department, RBI) is requesting payment or personal data via email or SMS",
    "Email has an attachment you weren't expecting  always suspicious even from known senders",
    "The email was not addressed to you by name  'Dear Customer' or 'Dear User' instead of your name",
    "Promised refund, cashback, or reward that requires you to 'verify' payment details to receive it",
];

// ── What to do ────────────────────────────────────────────────────────────────
const whatToDo = [
    {
        step: "01",
        title: "Do not click  close the page immediately",
        desc: "If you caught it before entering anything: close the browser tab, do not go back, and mark the email as phishing. Do not forward the message to others 'to warn them'  this spreads the link further.",
        urgent: true,
    },
    {
        step: "02",
        title: "Change your password immediately from a clean device",
        desc: "If you entered credentials: change the password on the affected account right away using a different device or network. Prioritise email and banking accounts as attackers use email access to reset everything else.",
        urgent: true,
    },
    {
        step: "03",
        title: "Contact your bank if financial credentials were shared",
        desc: "Call your bank on the official number (back of card or official website only). Report the phishing and request a temporary block on net banking and card transactions. A fraud report number will be provided.",
        urgent: false,
    },
    {
        step: "04",
        title: "Call 1930 if a transaction has occurred",
        desc: "India's Cyber Crime Financial Fraud Helpline can attempt to freeze destination accounts within the first 30–60 minutes of a transfer. Have your transaction reference ready.",
        urgent: false,
    },
    {
        step: "05",
        title: "Report the phishing site at cybercrime.gov.in",
        desc: "Submit the fake URL, a screenshot of the email or message, and any transaction details. The National Cyber Crime Reporting Portal coordinates with hosting providers and domain registrars for takedowns.",
        urgent: false,
    },
    {
        step: "06",
        title: "Enable two-factor authentication on all accounts",
        desc: "After recovering access, enable 2FA on your banking apps, email, and social accounts. Even if a future phishing attempt steals your password, 2FA prevents login without the second factor.",
        urgent: false,
    },
];

// ── FAQs ──────────────────────────────────────────────────────────────────────
const faqs = [
    {
        q: "What is phishing?",
        a: "Phishing is a cyber fraud technique where attackers impersonate a trusted entity  a bank, government body, e-commerce site, or courier  using fake emails, messages, or websites to trick victims into revealing passwords, OTPs, card numbers, or other sensitive credentials. The term comes from 'fishing'  casting a wide net of deceptive messages and waiting for victims to bite.",
    },
    {
        q: "What does a phishing email look like in India?",
        a: "Indian phishing emails commonly impersonate SBI, HDFC, ICICI, Paytm, Amazon India, IRCTC, or the Income Tax Department. They typically warn of account suspension, a pending refund, a suspicious transaction, or KYC expiry. They include a button or link that leads to a cloned website where you're asked to enter login credentials, card details, and OTP.",
    },
    {
        q: "How do I check if a link is a phishing link?",
        a: "Hover over (or long-press on mobile) the link to see the actual URL before clicking. Look for: misspelled domains (sbi-secure.com vs sbi.co.in), extra subdomains, HTTP instead of HTTPS, random character strings, or URL shorteners hiding the real destination. You can also check links on VirusTotal (virustotal.com) or the RakshaAI website checker before opening.",
    },
    {
        q: "What is smishing?",
        a: "Smishing is SMS-based phishing. Fraudsters send text messages impersonating banks, TRAI, IRCTC, or delivery services with a link and an urgent call to action  'Your SIM will be deactivated in 24 hours', 'Your package is held at customs  pay ₹35 to release'. The link leads to a credential-harvesting fake website.",
    },
    {
        q: "Can I get hacked just by opening a phishing email?",
        a: "Simply opening a well-crafted phishing email in a modern, updated email client is generally low risk. The real danger is in clicking links, downloading attachments, or entering credentials on the fake site the link leads to. Always update your email app and browser to reduce the risk of zero-click exploits.",
    },
    {
        q: "What should I do if I clicked a phishing link?",
        a: "If you clicked but didn't enter any credentials: close the page immediately and run a malware scan. If you entered any password or OTP: change the password on the affected account immediately from a different device, contact your bank if financial credentials were entered, enable two-factor authentication, and file a report at cybercrime.gov.in.",
    },
];

// ─────────────────────────────────────────────────────────────────────────────
export default function PhishingPage() {
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
                <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-yellow-50 dark:from-gray-950 dark:via-gray-900 dark:to-amber-950 pt-20 pb-24 px-4">
                    <div className="pointer-events-none absolute inset-0 -z-10">
                        <div className="absolute top-10 left-1/4 w-96 h-96 bg-amber-300/10 rounded-full blur-3xl animate-pulse" />
                        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-300/10 rounded-full blur-3xl animate-pulse delay-700" />
                        <div className="absolute top-1/2 right-0 w-64 h-64 bg-orange-300/10 rounded-full blur-3xl animate-pulse delay-1000" />
                    </div>

                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-100 to-yellow-100 dark:from-amber-900/40 dark:to-yellow-900/40 text-amber-700 dark:text-amber-300 text-xs font-semibold mb-6 border border-amber-200 dark:border-amber-800 shadow-sm">
                            <MailWarning className="h-4 w-4 animate-pulse" />
                            1 in 3 Indians who receive a phishing email click the link  CERT-In 2024
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
                            Phishing in India:{" "}
                            <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
                                Fake Emails, Cloned Bank Sites & the Links That Steal Everything
                            </span>
                        </h1>

                        <div className="max-w-2xl mx-auto mb-6 p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-100 dark:border-amber-900 text-left">
                            <p className="text-base text-gray-800 dark:text-gray-200 leading-relaxed">
                                <strong>Phishing in India</strong> is a cyberattack in which criminals send fake emails, SMS messages, or WhatsApp links impersonating banks (SBI, HDFC, ICICI), government portals (IRCTC, income tax, EPFO), or e-commerce platforms (Flipkart, Amazon) to steal login credentials, OTPs, and financial data. According to CERT-In, 76% of all cyber fraud in India begins with a phishing link  and Indians lost over ₹9,000 crore to phishing-linked fraud in 2024. The most targeted sectors are banking (43%), government portals (31%), and e-commerce (19%). A phishing attack typically takes under 90 seconds from clicking a link to the theft of an OTP. If you have clicked a suspicious link, immediately change your banking password, lock your UPI account, and call the National Cybercrime Helpline at 1930. Check any suspicious URL free at RakshaAI before taking further action.
                            </p>
                        </div>

                        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                            The email looks exactly like your bank sent it. The website has a padlock.
                            You log in  and watch your account emptied before you reach the dashboard.
                            Phishing is the most common first step in nearly every major cyber fraud in India.
                            Here's what it looks like, how it works, and how to spot it every single time.
                        </p>

                        {/* Stats strip */}
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            {[
                                { value: "76%", label: "Of cyber fraud begins with phishing (CERT-In)", icon: <MailWarning className="h-4 w-4" /> },
                                { value: "₹9,000 Cr", label: "Lost to phishing-linked fraud annually", icon: <IndianRupee className="h-4 w-4" /> },
                                { value: "3 sec", label: "Time to spot a fake link (if you know how)", icon: <Eye className="h-4 w-4" /> },
                                { value: "1930", label: "Cyber Crime Helpline", icon: <Shield className="h-4 w-4" /> },
                            ].map(({ value, label, icon }, i) => (
                                <div
                                    key={label}
                                    className="group flex flex-col items-center px-6 py-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 min-w-[130px]"
                                    style={{ animationDelay: `${i * 100}ms` }}
                                >
                                    <div className="text-amber-500 mb-1 group-hover:scale-110 transition-transform">{icon}</div>
                                    <span className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">{value}</span>
                                    <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-center">{label}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <ReportScamButton className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-sm shadow-lg hover:shadow-amber-300/50 hover:scale-105 transition-all duration-300 cursor-pointer">
                                <ShieldAlert className="h-5 w-5" />
                                Report a Phishing Attempt
                                <ArrowRight className="h-4 w-4" />
                            </ReportScamButton>
                            <a
                                href="#phishing-types"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 font-semibold text-sm border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
                            >
                                See All Phishing Types
                                <ChevronDown className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </section>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

                    {/* ── What Is Phishing ──────────────────────────────────── */}
                    <section>
                        <div className="grid lg:grid-cols-2 gap-10 items-center">
                            <div>
                                <span className="inline-block px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-xs font-semibold mb-4">
                                    The Definition
                                </span>
                                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-6 leading-snug">
                                    What Is Phishing  and Why Is It So Effective in India?
                                </h2>
                                <div className="space-y-4 text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                                    <p>
                                        Phishing is deception at scale. The attacker doesn't need to break into
                                        your bank's servers. They just need to trick you into handing over your
                                        credentials yourself  and then use those credentials to walk through the
                                        front door of your account.
                                    </p>
                                    <p>
                                        India is the third most phished country in the world. The reasons are
                                        interconnected: a massive new internet user base, high trust in official
                                        communications, widespread use of mobile banking, and enormous volumes of
                                        personal data circulating from past breaches  all of which make convincing,
                                        personalised phishing messages easier to construct.
                                    </p>
                                    <p>
                                        What makes phishing uniquely dangerous is that it doesn't require a
                                        technical vulnerability. It exploits human psychology  urgency, authority,
                                        fear, and the reasonable assumption that an email displaying your bank's
                                        logo came from your bank.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/40 dark:to-orange-950/40 rounded-2xl p-8 border border-amber-100 dark:border-amber-900 space-y-5">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                                        <Info className="h-5 w-5 text-white" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 dark:text-white text-lg">The HTTPS Padlock Myth  India's Biggest Phishing Misconception</h3>
                                </div>
                                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                    When HTTPS and the padlock icon became widely known as signs of a "safe" website,
                                    phishing operators immediately obtained free SSL certificates for their fake domains.
                                    Today, over <strong className="text-gray-900 dark:text-white">83% of phishing sites use HTTPS</strong>.
                                </p>
                                <div className="space-y-3 text-sm">
                                    {[
                                        { icon: XCircle, color: "text-red-500", text: "HTTPS / Padlock = the connection to that server is encrypted. It says nothing about whether the server itself is trustworthy." },
                                        { icon: XCircle, color: "text-red-500", text: "A phishing site can have a padlock AND look identical to your bank. The padlock only protects your data as it travels to the fraudster." },
                                        { icon: CheckCircle2, color: "text-green-500", text: "Always verify the domain name, not just the padlock. sbi.co.in ≠ sbi-secure.co.in ≠ sbi.co.in.login-verify.com" },
                                        { icon: CheckCircle2, color: "text-green-500", text: "Type bank and government URLs directly into the address bar rather than clicking from email or SMS links." },
                                        { icon: CheckCircle2, color: "text-green-500", text: "Bookmark the login pages of your bank, UPI app, and email provider. Use bookmarks only  never links from messages." },
                                    ].map(({ icon: Icon, color, text }) => (
                                        <div key={text} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                                            <Icon className={`h-4 w-4 ${color} flex-shrink-0 mt-0.5`} />
                                            <span>{text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ── Phishing Scale + Image ────────────────────────────── */}
                    <section aria-labelledby="phishing-scale-heading">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest">
                                    Official 2024 Data
                                </span>
                                <h2
                                    id="phishing-scale-heading"
                                    className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-2 mb-4"
                                >
                                    How Big Is Phishing in India Right Now?
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                    Phishing is the entry point for nearly every major cyber fraud in India.
                                    Whether it arrives by email, SMS, WhatsApp, or QR code, the mechanism
                                    is the same  impersonate a trusted entity and trick you into handing
                                    over credentials yourself. No hacking required.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { label: "Of all cyber fraud in India starts with phishing", value: "76%", color: "from-amber-500 to-orange-600" },
                                        { label: "Lost to phishing-linked fraud in India annually", value: "₹9,000 Cr+", color: "from-rose-500 to-pink-600" },
                                        { label: "Of phishing sites use HTTPS  padlock ≠ safe", value: "83%", color: "from-red-500 to-rose-600" },
                                        { label: "Indians who receive a phishing email click the link", value: "1 in 3", color: "from-orange-500 to-amber-600" },
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
                                    src="/image/website-safety-check-indian-woman-examining-suspicious-site-rakshaai.jpg"
                                    alt="Indian woman examining a suspicious phishing website on her laptop  how to spot fake bank emails, cloned login pages, and phishing links in India, RakshaAI"
                                    title="How to Spot Phishing Emails and Fake Websites in India | RakshaAI"
                                    width={500}
                                    height={500}
                                    className="object-contain drop-shadow-2xl max-w-full h-auto rounded-3xl"
                                />
                            </div>
                        </div>
                    </section>

                    {/* ── 8 Phishing Types ─────────────────────────────────── */}
                    <section id="phishing-types">
                        <div className="text-center mb-12">
                            <span className="inline-block px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs font-semibold mb-4">
                                Every Variant
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                8 Types of Phishing Attacks Targeting Indians
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-base">
                                The delivery method changes  email, SMS, WhatsApp, QR code, search ads  but every phishing
                                attack has the same goal: your credentials or your money.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-5">
                            {phishingTypes.map(({ icon: Icon, color, bg, border, title, desc }) => (
                                <div
                                    key={title}
                                    className={`group flex items-start gap-5 p-6 rounded-2xl border ${bg} ${border} hover:shadow-lg transition-all duration-300`}
                                >
                                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                                        <Icon className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 dark:text-white text-base mb-1">{title}</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── Attack Walk-Through ───────────────────────────────── */}
                    <section>
                        <div className="text-center mb-12">
                            <span className="inline-block px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-xs font-semibold mb-4">
                                Step by Step
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                How a Bank Phishing Attack Unfolds  Minute by Minute
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-base">
                                Reading this sequence once makes it nearly impossible to fall for the same attack.
                                The deception only works if you don't see the pattern in advance.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="hidden sm:block absolute left-[27px] top-10 bottom-10 w-0.5 bg-gradient-to-b from-amber-300 via-red-300 to-gray-300 dark:from-amber-800 dark:via-red-800 dark:to-gray-800" />
                            <div className="space-y-5">
                                {attackSteps.map(({ step, color, bg, border, title, desc, urgent }) => (
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
                                                        POINT OF NO RETURN
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
                        <span className="inline-block px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 text-xs font-semibold mb-4">
                            A Real Account
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
                            "It Said 'Income Tax Refund of ₹18,340 Pending'. I Just Had to Verify My Details."  A Real Account
                        </h2>
                        <div className="grid lg:grid-cols-2 gap-8 text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                            <div className="space-y-4">
                                <p>
                                    Deepak (name changed), a 38-year-old software engineer from Bengaluru,
                                    received an SMS that correctly referenced his name and the financial year.
                                    It informed him that a refund of ₹18,340 from the Income Tax Department
                                    was pending and could not be processed because his bank account details
                                    were 'not updated' in the IT portal.
                                </p>
                                <p>
                                    The link in the SMS took him to a page that looked exactly like
                                    the official incometax.gov.in portal. It had the correct logo, the
                                    correct colour scheme, and a reassuring padlock in the address bar.
                                    The URL was: <span className="font-mono text-sm bg-white dark:bg-gray-900 px-1 rounded text-rose-600 dark:text-rose-400">incometaxefilng.gov.in-refund.claim-now.net</span>
                                </p>
                                <p>
                                    He entered his PAN, date of birth, and net banking login details.
                                    The site then asked for his debit card number, expiry, and CVV to
                                    'confirm the bank account' for the refund transfer. He provided them.
                                    Then an OTP arrived. He entered it on the site's 'verification' screen.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <p>
                                    Within 11 minutes, ₹96,000 was withdrawn from his savings account
                                    across two transactions  ₹49,900 and ₹46,100 (kept below ₹50,000
                                    to avoid certain bank alert thresholds). His net banking account
                                    password had also been changed, locking him out.
                                </p>
                                <p>
                                    When he visited the real incometax.gov.in, he saw an official notice:
                                    "The Income Tax Department does not send refund links via SMS. Do not
                                    click on any link claiming to be from the IT Department."
                                    The notice had been there for two years. He had simply never seen it.
                                </p>
                                <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border border-rose-200 dark:border-rose-800">
                                    <p className="text-sm font-bold text-rose-700 dark:text-rose-300 mb-2">The URL Check That Would Have Saved ₹96,000:</p>
                                    <p className="text-sm text-gray-700 dark:text-gray-300">
                                        The real domain was <span className="font-mono text-xs">incometax.gov.in</span>. The phishing URL was
                                        <span className="font-mono text-xs text-rose-600 dark:text-rose-400"> incometaxefilng.gov.in-refund.claim-now.net</span>  a completely different domain
                                        (<span className="font-mono text-xs">claim-now.net</span>) with the official-looking text as a subdomain prefix.
                                        Read URLs from right to left: the last segment before the first slash is always the real domain.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ── How to Read a URL ─────────────────────────────────── */}
                    <section className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-2xl p-8 sm:p-12 border border-blue-100 dark:border-blue-900">
                        <span className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-4">
                            One Skill That Blocks 90% of Phishing
                        </span>
                        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6">
                            How to Read a URL  The Single Most Valuable Anti-Phishing Skill
                        </h2>
                        <div className="grid lg:grid-cols-2 gap-8 text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                            <div className="space-y-4">
                                <p>
                                    Every phishing site has one unavoidable weakness: it cannot use the real domain
                                    of the organisation it's impersonating. That domain is owned by the real
                                    organisation. So phishers construct look-alike URLs designed to fool you if
                                    you don't know how domain names work.
                                </p>
                                <p>
                                    The one rule that overrides everything else:
                                    <strong className="text-gray-900 dark:text-white"> the real domain is always the segment immediately to the left of the first
                                        single slash in the URL.</strong> Everything to its left is a subdomain
                                    (which anyone can set) and everything to the right is a path.
                                </p>
                                <p>
                                    Read URLs right to left from the first `/`. The last hostname segment is your
                                    ground truth. If it doesn't exactly match the organisation's known domain, you're
                                    on a phishing site  regardless of how official everything else looks.
                                </p>
                            </div>
                            <div className="space-y-3">
                                {[
                                    {
                                        url: "sbi.co.in/login",
                                        real: "sbi.co.in",
                                        verdict: true,
                                        label: "Legitimate SBI login",
                                    },
                                    {
                                        url: "sbi.co.in.secure-login.net/login",
                                        real: "secure-login.net",
                                        verdict: false,
                                        label: "Phishing  real domain is secure-login.net",
                                    },
                                    {
                                        url: "login.sbi-netbanking.co/account",
                                        real: "sbi-netbanking.co",
                                        verdict: false,
                                        label: "Phishing  not the same as sbi.co.in",
                                    },
                                    {
                                        url: "incometax.gov.in/efile",
                                        real: "incometax.gov.in",
                                        verdict: true,
                                        label: "Legitimate Income Tax portal",
                                    },
                                    {
                                        url: "incometaxefilng.gov.in-refund.claim-now.net",
                                        real: "claim-now.net",
                                        verdict: false,
                                        label: "Phishing  .gov.in is just a subdomain here",
                                    },
                                ].map(({ url, real, verdict, label }) => (
                                    <div key={url} className={`p-4 rounded-xl border text-sm ${verdict ? "bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-900" : "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-900"}`}>
                                        <div className="flex items-start gap-2">
                                            {verdict
                                                ? <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                                                : <XCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                                            }
                                            <div>
                                                <code className="text-xs font-mono text-gray-800 dark:text-gray-200 break-all">{url}</code>
                                                <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                                                    Real domain: <strong className={`font-mono ${verdict ? "text-green-700 dark:text-green-400" : "text-red-700 dark:text-red-400"}`}>{real}</strong>  {label}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ── QR Code Phishing ─────────────────────────────────── */}
                    <section className="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30 rounded-2xl p-8 sm:p-12 border border-violet-100 dark:border-violet-900">
                        <span className="inline-block px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300 text-xs font-semibold mb-4">
                            The Newer Threat
                        </span>
                        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6">
                            QR Code Phishing (Quishing)  The Scam Indians Don't See Coming
                        </h2>
                        <div className="grid lg:grid-cols-2 gap-8 text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                            <div className="space-y-4">
                                <p>
                                    QR codes are now everywhere in India  on restaurant menus, at petrol pumps,
                                    on municipal utility bills, at temples, and at parking metres. The vast majority
                                    are legitimate. But QR code fraud is growing rapidly because it bypasses
                                    the one habit many people have formed: not clicking suspicious links.
                                </p>
                                <p>
                                    Physical sticker QR codes can be pasted over legitimate ones in seconds.
                                    A fraudulent code pasted over a restaurant's menu QR or a parking payment
                                    point will lead to a fake payment processor that either captures your UPI
                                    credentials or initiates a payment to a fraudster's account.
                                </p>
                                <p>
                                    Email and WhatsApp QR phishing bypasses many secure email gateways that scan
                                    for suspicious links  because the link is encoded inside an image, invisible
                                    to text-based scanners.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="font-bold text-gray-900 dark:text-white text-base">How to Stay Safe Around QR Codes</h3>
                                <ul className="space-y-3">
                                    {[
                                        "Before scanning, check whether the QR sticker is on top of another printed QR  peel edges visible are a red flag",
                                        "After scanning, read the full URL before tapping 'Open'  apply the same domain verification rules",
                                        "QR codes for UPI payments should only go to official payment apps  not browser-based payment pages",
                                        "Never scan a QR code sent via email, WhatsApp, or SMS claiming to be from a bank, TRAI, or government",
                                        "Use a QR scanner app that shows you the URL before opening it, rather than auto-opening",
                                        "If a QR code redirects you to enter a password or OTP, close immediately  legitimate QR payments never require these",
                                    ].map((tip) => (
                                        <li key={tip} className="flex items-start gap-3 text-sm">
                                            <CheckCircle2 className="h-4 w-4 text-violet-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700 dark:text-gray-300">{tip}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* ── Spot a Phishing Email: Split Section ─────────────── */}
                    <section
                        aria-labelledby="spot-phishing-heading"
                        className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-lg lg:min-h-[520px]"
                    >
                        {/* LEFT  content */}
                        <div className="p-8 sm:p-10 bg-white dark:bg-gray-900 flex flex-col justify-center">
                            <span className="inline-block px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-xs font-semibold mb-4 self-start">
                                Quick Reference
                            </span>
                            <h2
                                id="spot-phishing-heading"
                                className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-6 leading-snug"
                            >
                                Spot a Phishing Email in 60 Seconds
                            </h2>
                            <div className="space-y-3 mb-6">
                                <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-xl border border-green-200 dark:border-green-900">
                                    <p className="text-xs font-bold text-green-700 dark:text-green-400 mb-2 uppercase tracking-wide">
                                        Genuine Bank Email
                                    </p>
                                    <ul className="space-y-1.5 text-sm text-gray-700 dark:text-gray-300">
                                        {[
                                            "Sent from the bank’s official domain (e.g. alerts@sbi.co.in, hdfc@hdfcbank.com)",
                                            "Addresses you by your full registered name, never 'Dear Customer'",
                                            "Links go to the bank’s real domain  hover before you click",
                                            "Never asks you to enter credentials, OTP, or card details via email",
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
                                        Phishing Email
                                    </p>
                                    <ul className="space-y-1.5 text-sm text-gray-700 dark:text-gray-300">
                                        {[
                                            "Sent from a lookalike domain  sbi-alert.co, hdfcbankalert.net, it-refund.in",
                                            "Creates extreme urgency  'Your account suspended in 24 hours'",
                                            "Link destination doesn’t match the claimed sender when you hover",
                                            "Asks you to verify credentials, enter OTP, or confirm card details",
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
                                    The 3-Second URL Check
                                </p>
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    Hover over any link before clicking. Read the URL right-to-left from
                                    the first <code className="text-xs font-mono bg-white dark:bg-gray-900 px-1 rounded">/</code>  the segment immediately left of that slash is the real domain.
                                    If it doesn’t exactly match your bank’s known domain, don’t click.
                                </p>
                            </div>
                        </div>
                        {/* RIGHT  full-height image */}
                        <div className="relative h-full min-h-[400px] overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-500 via-orange-600 to-yellow-600" />
                            <Image
                                src="/image/how-to-identify-fake-websites.jpg"
                                alt="How to identify phishing websites and fake bank login pages in India  URL verification, domain spoofing, HTTPS padlock myth, RakshaAI"
                                title="How to Identify Phishing Websites and Fake Bank Pages in India | RakshaAI"
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
                                10 Red Flags of a Phishing Email or Message
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-base">
                                Any single one should stop you before you click.
                            </p>
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

                    {/* ── Myth vs Reality ───────────────────────────────────── */}
                    <section>
                        <div className="text-center mb-12">
                            <span className="inline-block px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-xs font-semibold mb-4">
                                Myth Busting
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                Phishing Myths vs. Reality
                            </h2>
                        </div>
                        <div className="space-y-4">
                            {[
                                {
                                    myth: "I can always spot a phishing email  they're full of typos and bad English.",
                                    fact: "Modern phishing emails targeting Indians are crafted in fluent, formal Hindi and English, use the exact fonts and colours of the brand they impersonate, and personalise with your name and partial account details from breach databases. The 'obvious typo' era of phishing ended years ago.",
                                },
                                {
                                    myth: "The site is safe because it has HTTPS and a padlock.",
                                    fact: "HTTPS only means the connection to that server is encrypted. It says nothing about whether the server itself belongs to a legitimate organisation. Over 83% of phishing sites now use HTTPS. The padlock is not a safety seal.",
                                },
                                {
                                    myth: "Only uneducated or elderly people fall for phishing.",
                                    fact: "CERT-In data consistently shows that IT professionals, bankers, and engineers are among the most common phishing victims in India  because they are less likely to pause and question what they assume to be routine digital communications.",
                                },
                                {
                                    myth: "I use antivirus so my device will warn me if a site is fake.",
                                    fact: "New phishing domains are registered in minutes  often faster than antivirus databases can update. A phishing site created in the last few hours will pass most real-time checks. The final defence is always your own URL verification, not software.",
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

                    {/* ── What To Do ────────────────────────────────────────── */}
                    <section>
                        <div className="text-center mb-12">
                            <span className="inline-block px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-xs font-semibold mb-4">
                                Immediate Actions
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                Fell for a Phishing Attack? Do This Immediately.
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-base">
                                Speed is critical. A compromised password or OTP can be used within seconds.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="relative w-full rounded-2xl overflow-hidden mb-8 shadow-md">
                                <Image
                                    src="/image/https-padlock-vs-website-safety-encryption-trust-comparison-india.jpg"
                                    alt="HTTPS padlock vs website safety  why a padlock does not mean a website is safe from phishing, encryption vs trust comparison for Indian users, RakshaAI"
                                    title="HTTPS Padlock vs Website Safety  The Phishing Myth Explained India | RakshaAI"
                                    width={1200}
                                    height={480}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            <div className="hidden sm:block absolute left-[27px] top-10 bottom-10 w-0.5 bg-gradient-to-b from-red-300 via-amber-300 to-blue-300 dark:from-red-800 dark:via-amber-800 dark:to-blue-800" />
                            <div className="space-y-5">
                                {whatToDo.map(({ step, title, desc, urgent }) => (
                                    <div key={step} className="relative flex gap-6 items-start">
                                        <div className={`relative z-10 flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-white font-extrabold text-sm shadow-lg ${urgent ? "bg-gradient-to-br from-red-500 to-rose-600" : "bg-gradient-to-br from-amber-500 to-orange-600"}`}>
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
                    <section className="rounded-2xl overflow-hidden border border-amber-100 dark:border-amber-900">
                        <div className="bg-gradient-to-r from-amber-600 to-orange-700 px-8 py-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                                    <BadgeCheck className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-extrabold text-white">Report Phishing  Official Channels</h2>
                                    <p className="text-amber-100 text-sm">Use these to report phishing attempts and recover from attacks</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-amber-50 dark:bg-amber-950/30 p-8">
                            <div className="grid sm:grid-cols-2 gap-6">
                                {[
                                    {
                                        label: "National Cyber Crime Portal",
                                        url: "cybercrime.gov.in",
                                        desc: "Report phishing URLs, fake websites, and credential theft with evidence",
                                    },
                                    {
                                        label: "Cyber Crime Helpline",
                                        url: "1930",
                                        desc: "Call immediately if money was transferred  account freeze window is 30–60 minutes",
                                    },
                                    {
                                        label: "CERT-In Incident Reporting",
                                        url: "cert-in.org.in",
                                        desc: "Report phishing emails and fake websites to India's Computer Emergency Response Team",
                                    },
                                    {
                                        label: "Google Safe Browsing Report",
                                        url: "safebrowsing.google.com/safebrowsing/report_phish",
                                        desc: "Report phishing URLs to Google  helps block the site for billions of Chrome and Android users",
                                    },
                                    {
                                        label: "Check a URL  VirusTotal",
                                        url: "virustotal.com",
                                        desc: "Scan any suspicious URL against 70+ security engines before clicking",
                                    },
                                    {
                                        label: "Check a Website  RakshaAI",
                                        url: "rakshaai.co/website-safety-checker",
                                        desc: "Verify any Indian website or link against RakshaAI's fraud database before you interact with it",
                                    },
                                ].map(({ label, url, desc }) => (
                                    <div key={label} className="flex items-start gap-3 p-4 bg-white dark:bg-gray-900 rounded-xl border border-amber-100 dark:border-amber-900">
                                        <CheckCircle2 className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-semibold text-gray-900 dark:text-white text-sm mb-0.5">{label}</p>
                                            <p className="text-xs font-mono text-amber-600 dark:text-amber-400 mb-1 break-all">{url}</p>
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
                            Recent Phishing Cases &amp; Deep Dives
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
                            Time-stamped guides from the RakshaAI blog covering the latest phishing patterns targeting Indians.
                        </p>
                        <div className="grid sm:grid-cols-3 gap-4">
                            {[
                                { href: '/blog/phishing-email-india', title: 'Phishing Email India: How to Spot the Fakes', desc: 'The exact sender, link, and urgency patterns that give away a phishing email.' },
                                { href: '/blog/kyc-update-scam-india', title: 'KYC Update Scam: Fake Bank and Wallet Alerts Explained', desc: 'The "your account will be blocked" SMS that steals bank access in minutes.' },
                                { href: '/blog/parcel-delivery-scam-india', title: 'Parcel Delivery Scam: The Missed Delivery Phishing Trap', desc: 'Fake courier SMS links that harvest card details and OTPs.' },
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
                                Straight answers to the most common phishing questions in India.
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
                    <section className="rounded-2xl bg-gradient-to-br from-amber-600 via-orange-700 to-yellow-700 p-8 sm:p-12 text-white text-center shadow-2xl relative overflow-hidden">
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
                                Suspicious Link or Email?<br className="hidden sm:block" />
                                Check It Before You Click.
                            </h2>
                            <p className="text-amber-100 mb-8 text-sm sm:text-base max-w-xl mx-auto">
                                Paste any suspicious URL into RakshaAI's website checker before opening it.
                                Or report a phishing attempt you've already received  your report helps protect
                                millions of other Indians from the same fake site.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <ReportScamButton className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-orange-600 font-bold text-sm shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                                    <MessageSquareWarning className="h-5 w-5" />
                                    Report a Phishing Attempt
                                    <ArrowRight className="h-4 w-4" />
                                </ReportScamButton>
                                <Link
                                    href="/website-safety-checker"
                                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 text-white font-semibold text-sm border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300"
                                >
                                    Check a Suspicious Website
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                            <p className="mt-6 text-amber-200 text-xs">
                                🇮🇳 India-focused phishing guidance · Free consumer access · No registration required
                            </p>
                        </div>
                    </section>

                </div>
            </main>
        </DefaultLayout>
    );
}
