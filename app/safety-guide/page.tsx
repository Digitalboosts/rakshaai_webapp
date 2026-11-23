import { Metadata } from "next";
import Link from "next/link";
import DefaultLayout from "@/components/DefaultLayout";
import { jsonLd } from "@/lib/seo/schema";
import ReportScamButton from "@/components/ReportScamButton";
import {
    Shield,
    BookOpen,
    AlertTriangle,
    CheckCircle,
    XCircle,
    Smartphone,
    CreditCard,
    Lock,
    Eye,
    Users,
    Phone,
    Globe,
    Download,
    Share2,
    Star,
    ChevronRight,
    MessageSquare,
    Heart,
    Banknote,
    ShieldCheck,
    Info,
    Search,
    Lightbulb,
} from "lucide-react";

export const metadata: Metadata = {
    title: "Online Safety Guide (सुरक्षा गाइड) – RakshaAI",
    description:
        "Comprehensive online safety guide for India. Learn to protect yourself from UPI fraud, phone scams, phishing, fake apps, and all common digital threats.",
    keywords: [
        "online safety guide india",
        "internet safety india",
        "cyber fraud protection tips",
        "UPI fraud protection",
        "digital safety india",
        "online scam protection india",
        "cyber security tips india",
        "digital safety guide",
        "safe internet use india",
        "scam protection guide",
    ],
    alternates: {
        canonical: "https://rakshaai.co/safety-guide",
    },
    openGraph: {
        title: "Safety Guide (सुरक्षा गाइड) – RakshaAI",
        description:
            "Step-by-step safety guide to protect yourself and your family from online fraud in India.",
        type: "website",
        url: "https://rakshaai.co/safety-guide",
        siteName: "RakshaAI",
        images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Online Safety Guide – RakshaAI' }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Online Safety Guide – RakshaAI",
        description:
            "Your complete guide to staying safe online in India. Covers UPI fraud, phishing, fake apps, calls, and more.",
        images: ['/opengraph-image'],
    },
};

const tableOfContents = [
    { id: "basics", label: "Digital Safety Basics", hindi: "बुनियादी सुरक्षा" },
    { id: "upi", label: "UPI & Payments", hindi: "UPI और भुगतान" },
    { id: "calls", label: "Calls & SMS Scams", hindi: "कॉल और SMS घोटाले" },
    { id: "apps", label: "Apps & Downloads", hindi: "ऐप और डाउनलोड" },
    { id: "social", label: "Social Media Safety", hindi: "सोशल मीडिया" },
    { id: "phishing", label: "Phishing & Fake Links", hindi: "फ़िशिंग और नकली लिंक" },
    { id: "family", label: "Protecting Your Family", hindi: "परिवार की सुरक्षा" },
    { id: "emergency", label: "Emergency Response", hindi: "आपातकालीन कार्रवाई" },
];

const basicRules = [
    {
        rule: "Never share OTP",
        hindi: "OTP कभी शेयर न करें",
        detail: "No bank, RBI, government, or payment app ever asks for your OTP. If anyone asks  it's a scam.",
        icon: Lock,
        color: "fuchsia",
    },
    {
        rule: "PIN only sends money",
        hindi: "PIN केवल पैसे भेजती है",
        detail: "Your UPI PIN is needed to SEND money. Receiving money needs no PIN. If they ask your PIN to 'send' you money  run.",
        icon: CreditCard,
        color: "pink",
    },
    {
        rule: "Verify before trusting",
        hindi: "विश्वास से पहले जांचें",
        detail: "Call the official number. Visit the official website. Confirm via a second channel before acting on any urgent claim.",
        icon: Search,
        color: "purple",
    },
    {
        rule: "Urgency is a weapon",
        hindi: "तात्कालिकता एक हथियार है",
        detail: "Fraudsters create fake deadlines  'Your account will be frozen in 2 hours'. Take a breath. Verify independently.",
        icon: AlertTriangle,
        color: "rose",
    },
    {
        rule: "Free = Suspicious",
        hindi: "मुफ़्त = संदिग्ध",
        detail: "Free iPhone, lottery wins, job with no interview  anything that sounds too good almost certainly is.",
        icon: Star,
        color: "fuchsia",
    },
    {
        rule: "Screenshot, then report",
        hindi: "स्क्रीनशॉट, फिर रिपोर्ट",
        detail: "Before blocking a scammer, screenshot the conversation. This evidence helps law enforcement act faster.",
        icon: BookOpen,
        color: "pink",
    },
];

const upiRules = [
    {
        do: true,
        text: "Check the UPI ID before every payment  even to familiar contacts",
        hindi: "हर भुगतान से पहले UPI ID जांचें",
    },
    {
        do: true,
        text: "Use the RakshaAI scanner to verify UPI IDs before sending large amounts",
        hindi: "बड़ी राशि भेजने से पहले स्कैन करें",
    },
    {
        do: true,
        text: "Enable transaction limits on your UPI app for safety",
        hindi: "लेनदेन सीमा चालू करें",
    },
    {
        do: false,
        text: "Never enter your PIN in a 'collect request'  that is a payment FROM you",
        hindi: "कलेक्ट रिक्वेस्ट में PIN न डालें",
    },
    {
        do: false,
        text: "Never scan a QR code sent by someone 'paying' you  QR codes only take money",
        hindi: "भुगतान करने वाले का QR स्कैन न करें",
    },
    {
        do: false,
        text: "Never share your UPI-linked phone number + bank account details together",
        hindi: "UPI नंबर और बैंक विवरण एक साथ शेयर न करें",
    },
];

const callScamSigns = [
    {
        sign: "Claims to be from CBI, ED, Narcotics, or RBI",
        hindi: "CBI/ED/RBI बताना",
        action: "Hang up. Real agencies never do 'digital arrest' by phone.",
    },
    {
        sign: "Asks you to stay on video call for hours ('Digital Arrest')",
        hindi: "घंटों वीडियो कॉल पर रखना",
        action: "End call immediately. File report on 1930.",
    },
    {
        sign: "Offers to update your SIM / KYC over the phone",
        hindi: "फोन पर SIM/KYC अपडेट करना",
        action: "Visit your operator's store in person only.",
    },
    {
        sign: "Says your family member is in trouble and needs money fast",
        hindi: "परिवार की झूठी आपात स्थिति",
        action: "Call the family member directly on a known number.",
    },
    {
        sign: "Sends a link via SMS asking for 'verification'",
        hindi: "SMS में 'वेरिफिकेशन' लिंक",
        action: "Never click. Copy and check on RakshaAI first.",
    },
    {
        sign: "Pressures you NOT to tell anyone",
        hindi: "किसी को न बताने का दबाव",
        action: "The pressure itself proves it's a scam. Tell family immediately.",
    },
];

const appSafetyTips = [
    {
        title: "Download only from official stores",
        hindi: "केवल आधिकारिक स्टोर से डाउनलोड करें",
        detail: "Google Play Store and Apple App Store only. Never install APK files sent via WhatsApp, Telegram, or SMS.",
        icon: Download,
    },
    {
        title: "Review app permissions carefully",
        hindi: "ऐप की अनुमतियाँ ध्यान से देखें",
        detail: "A flashlight app does NOT need your contacts, SMS, or camera. Reject suspicious permissions.",
        icon: Eye,
    },
    {
        title: "Avoid screen-sharing apps with strangers",
        hindi: "अजनबियों के साथ स्क्रीन शेयरिंग से बचें",
        detail: "AnyDesk, TeamViewer  only use with people you 100% trust. Fraudsters use these to grab OTPs in real time.",
        icon: Smartphone,
    },
    {
        title: "Keep apps updated",
        hindi: "ऐप को अपडेट रखें",
        detail: "Security patches close loopholes that scammers exploit. Enable auto-updates for banking apps.",
        icon: ShieldCheck,
    },
    {
        title: "Log out from unused sessions",
        hindi: "अप्रयुक्त सत्र से लॉग आउट करें",
        detail: "Check your WhatsApp Linked Devices, Google Account Active Sessions monthly and remove unknown devices.",
        icon: Lock,
    },
    {
        title: "Use a separate number for financial apps",
        hindi: "वित्तीय ऐप के लिए अलग नंबर",
        detail: "Keep your banking/UPI SIM separate from the number you share publicly on social media.",
        icon: Phone,
    },
];

const socialMediaRules = [
    {
        title: "Lock your profile",
        hindi: "प्रोफाइल लॉक करें",
        detail: "Set all social media accounts to private/friends-only. Romance scammers harvest profile photos and personal details.",
        icon: Lock,
    },
    {
        title: "Never accept 'job offers' from strangers on Instagram/LinkedIn DMs",
        hindi: "DM में जॉब ऑफर से सावधान",
        detail: "Legitimate recruiters use official email. DM job offers often lead to task-based fraud or money mule traps.",
        icon: Users,
    },
    {
        title: "Verify investment advice before acting",
        hindi: "'निवेश टिप्स' जांचें, फिर करें",
        detail: "Fake SEBI groups and celebrity-themed Telegram channels promise guaranteed returns. SEBI is the only regulator  check SEBI.gov.in.",
        icon: Banknote,
    },
    {
        title: "Don't overshare travel plans",
        hindi: "यात्रा योजनाएं सार्वजनिक न करें",
        detail: "Posting that you're away from home can enable physical fraud at your residence. Share after returning.",
        icon: Globe,
    },
];

const phishingChecklist = [
    { step: "Hover over any link before clicking  check the domain carefully", hindi: "क्लिक से पहले लिंक होवर करें" },
    { step: "Look for https:// (padlock icon)  but note: https alone doesn't mean safe", hindi: "https:// जांचें" },
    { step: "Watch for misspellings: sbi-bank.com, paytrn.com, amaz0n.in", hindi: "गलत वर्तनी देखें" },
    { step: "Never log in to your bank from a link in an email or SMS", hindi: "ईमेल/SMS लिंक से बैंक लॉगिन न करें" },
    { step: "Bookmark official bank and government websites, use only bookmarks", hindi: "आधिकारिक साइट बुकमार्क करें" },
    { step: "If in doubt, paste the URL into RakshaAI's website scanner", hindi: "संदेहास्पद URL RakshaAI पर जांचें" },
];

const familyGuide = [
    {
        audience: "Elderly Parents",
        hindi: "बुजुर्ग माता-पिता",
        icon: Heart,
        color: "rose",
        tips: [
            "Set up WhatsApp's 'Silence Unknown Callers' on their phone",
            "Create a family rule: never transfer money without a family member's confirmation",
            "Explain that CBI/police never call or video call for arrests",
            "Check their phones monthly for unknown APK files or screen-sharing apps",
        ],
    },
    {
        audience: "Children & Teenagers",
        hindi: "बच्चे और किशोर",
        icon: Users,
        color: "purple",
        tips: [
            "Teach them to never share personal details in online games",
            "Explain that strangers offering gifts/money online always want something back",
            "Set parental guidance on app stores to prevent accidental downloads",
            "Discuss sextortion openly  shame keeps victims silent; knowledge protects them",
        ],
    },
    {
        audience: "Working Adults",
        hindi: "कार्यरत वयस्क",
        icon: Smartphone,
        color: "fuchsia",
        tips: [
            "Verify job offers through company's official website before providing documents",
            "Use a VPN on public Wi-Fi when accessing banking apps",
            "Enable 2FA on all email and social media accounts",
            "Never install apps suggested by 'IT support' callers you didn't contact first",
        ],
    },
];

const emergencySteps = [
    {
        step: 1,
        action: "Call 1930 immediately",
        hindi: "तुरंत 1930 पर कॉल करें",
        detail: "National Cybercrime Helpline  available 24/7. Report within 1 hour to maximize fund freezing chances.",
        color: "from-fuchsia-500 to-pink-600",
    },
    {
        step: 2,
        action: "Call your bank's fraud line",
        hindi: "बैंक के फ्रॉड नंबर पर कॉल करें",
        detail: "Ask them to freeze the beneficiary account and raise a chargeback. Have your transaction UTR ready.",
        color: "from-pink-500 to-rose-600",
    },
    {
        step: 3,
        action: "File on cybercrime.gov.in",
        hindi: "cybercrime.gov.in पर रिपोर्ट करें",
        detail: "File a detailed complaint with screenshots, account numbers, and phone numbers used by the fraudster.",
        color: "from-purple-500 to-fuchsia-600",
    },
    {
        step: 4,
        action: "Change passwords & secure accounts",
        hindi: "पासवर्ड बदलें और अकाउंट सुरक्षित करें",
        detail: "If you shared any credentials or installed any apps, change all passwords and revoke app permissions immediately.",
        color: "from-rose-500 to-pink-600",
    },
    {
        step: 5,
        action: "File an FIR at your local police station",
        hindi: "नजदीकी थाने में FIR दर्ज करें",
        detail: "Bring printed transaction records, screenshots, and your cybercrime portal complaint number.",
        color: "from-fuchsia-600 to-purple-600",
    },
    {
        step: 6,
        action: "Report on RakshaAI",
        hindi: "RakshaAI पर रिपोर्ट करें",
        detail: "Your report warns others using the same UPI ID, phone number, or link. Protect the next victim.",
        color: "from-pink-600 to-fuchsia-600",
    },
];

const hindiGlossary = [
    { term: "OTP (वन-टाइम पासवर्ड)", meaning: "A temporary code. Never share with anyone  not even bank staff." },
    { term: "UPI PIN", meaning: "Your secret PIN to authorize UPI payments. Only YOU must type it." },
    { term: "Phishing (फ़िशिंग)", meaning: "Fake websites or messages designed to steal your credentials." },
    { term: "Smishing (SMS फ़िशिंग)", meaning: "Phishing via SMS  a fake link in a text message." },
    { term: "Vishing (Voice Phishing)", meaning: "Phone call fraud  caller pretends to be a bank/government official." },
    { term: "Digital Arrest (डिजिटल अरेस्ट)", meaning: "Fake video 'custody' by imposters posing as police/CBI. NOT a real concept." },
    { term: "KYC Fraud", meaning: "Scammers claim your KYC is expired to steal your details over call." },
    { term: "Deepfake", meaning: "AI-generated fake video of a real person used to spread fraud." },
    { term: "Money Mule", meaning: "Victim used as a middleman to transfer stolen money  also illegal." },
    { term: "Chargeback", meaning: "A formal request to reverse a fraudulent transaction  raise with your bank immediately." },
];

const faqs = [
    {
        q: "My father transferred ₹50,000 to a scammer.  Can we get the money back?",
        qHindi: "क्या ठगे गए पैसे वापस मिल सकते हैं?",
        a: "Possibly  if you act fast. Call 1930 within 1 hour. The cybercrime portal can freeze beneficiary accounts before the money is withdrawn. Recovery rates are higher when reported within 24 hours.",
    },
    {
        q: "Is it safe to share my UPI ID publicly?",
        qHindi: "क्या UPI ID सार्वजनिक रूप से शेयर करना सुरक्षित है?",
        a: "Yes  your UPI ID alone lets others send you money, but they cannot withdraw from you. However, don't combine your UPI ID with your bank account number and IFSC on any public forum.",
    },
    {
        q: "Someone is blackmailing me with personal photos. What should I do?",
        qHindi: "कोई निजी फ़ोटो से ब्लैकमेल कर रहा है  क्या करें?",
        a: "Do NOT pay  paying never ends blackmail. Immediately report to cybercrime.gov.in under the 'Cyber Blackmail / Threatening' category. Also contact the NCPCR helpline (1098) if the victim is a minor. Block the account on all platforms.",
    },
    {
        q: "I installed an APK file from WhatsApp. Is my phone safe?",
        qHindi: "WhatsApp से APK इंस्टॉल किया  क्या फोन सुरक्षित है?",
        a: "Uninstall it immediately. Then check Settings → Apps for anything you don't recognize. Change all important passwords from a different device. Run a Google Play Protect scan. Consider factory resetting if you saw any suspicious account activity.",
    },
    {
        q: "How do I explain online scams to elderly relatives who don't use smartphones confidently?",
        qHindi: "बुजुर्गों को समझाने का आसान तरीका क्या है?",
        a: "Use one simple rule they can remember: 'OTP mat do, PIN mat do, paise mat bhejo bina pooche' (Don't share OTP, don't share PIN, don't send money without asking family first). Print and paste near their phone.",
    },
];

export default function SafetyGuidePage() {
    return (
        <DefaultLayout>
            {/* Schema.org structured data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: jsonLd({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "@id": "https://rakshaai.co/safety-guide#article",
                        headline: "Online Safety Guide – RakshaAI (सुरक्षा गाइड)",
                        description:
                            "Comprehensive guide to staying safe from online fraud in India  covering UPI fraud, phishing, fake apps, calls, social media, and emergency response.",
                        url: "https://rakshaai.co/safety-guide",
                        inLanguage: "en-IN",
                        publisher: {
                            "@type": "Organization",
                            "@id": "https://rakshaai.co/#organization",
                        },
                        author: {
                            "@type": "Organization",
                            "@id": "https://rakshaai.co/#organization",
                        },
                        datePublished: "2025-01-01",
                        dateModified: new Date().toISOString().split("T")[0],
                        isPartOf: { "@type": "WebSite", "@id": "https://rakshaai.co/#website" },
                        about: tableOfContents.map((item) => ({
                            "@type": "Thing",
                            name: item.label,
                        })),
                    }),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: jsonLd({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: faqs.map((faq) => ({
                            "@type": "Question",
                            name: faq.q,
                            acceptedAnswer: {
                                "@type": "Answer",
                                text: faq.a,
                            },
                        })),
                    }),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: jsonLd({
                        "@context": "https://schema.org",
                        "@type": "HowTo",
                        "name": "What to Do If You Get Scammed Online in India",
                        "description": "Step-by-step emergency guide for online scam victims in India  call 1930, freeze funds, file complaint, and protect your accounts.",
                        "totalTime": "PT30M",
                        "step": emergencySteps.map((s) => ({
                            "@type": "HowToStep",
                            "position": String(s.step),
                            "name": s.action,
                            "text": s.detail,
                            "url": "https://rakshaai.co/safety-guide#emergency",
                        })),
                    }),
                }}
            />

            <main className="pt-16 min-h-screen bg-white dark:bg-gray-950">
                {/* Hero */}
                <section className="relative overflow-hidden bg-gradient-to-br from-fuchsia-600 via-pink-600 to-purple-700 text-white py-20 md:py-28">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-400/20 via-transparent to-transparent" />
                    <div className="absolute inset-0">
                        <div className="absolute top-10 left-10 w-72 h-72 bg-fuchsia-400/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-10 right-10 w-64 h-64 bg-pink-300/10 rounded-full blur-3xl" />
                    </div>
                    <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-4 py-2 text-sm font-medium mb-6">
                            <BookOpen className="w-4 h-4 text-pink-200" />
                            <span>सुरक्षा गाइड · Safety Guide</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-5">
                            Online Safety Guide
                            <span className="block text-pink-200 mt-1 text-3xl md:text-4xl font-bold">
                                ऑनलाइन सुरक्षा गाइड
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-fuchsia-100 max-w-3xl mx-auto mb-4">
                            Your complete guide to protecting yourself and your family from digital fraud in
                            India  in plain language, Hindi and English.
                        </p>
                        <p className="text-base text-pink-200 italic max-w-2xl mx-auto mb-10">
                            "सुरक्षित रहें, सतर्क रहें  एक कदम में सब कुछ जानें।"
                        </p>
                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                            {[
                                { value: "8", label: "Safety Topics", hindi: "सुरक्षा विषय" },
                                { value: "60+", label: "Actionable Tips", hindi: "व्यावहारिक सुझाव" },
                                { value: "1930", label: "Helpline No.", hindi: "हेल्पलाइन नंबर" },
                                { value: "24/7", label: "Cybercrime Support", hindi: "साइबर सहायता" },
                            ].map((stat) => (
                                <div
                                    key={stat.value}
                                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4"
                                >
                                    <div className="text-2xl font-extrabold text-white">{stat.value}</div>
                                    <div className="text-xs text-fuchsia-200">{stat.label}</div>
                                    <div className="text-xs text-pink-300 mt-0.5">{stat.hindi}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Table of Contents */}
                <section className="py-12 bg-fuchsia-50 dark:bg-fuchsia-950/20 border-b border-fuchsia-100 dark:border-fuchsia-900/30">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6">
                        <h2 className="text-lg font-bold text-fuchsia-900 dark:text-fuchsia-100 mb-6 flex items-center gap-2">
                            <BookOpen className="w-5 h-5 text-fuchsia-600" />
                            Contents  विषय सूची
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {tableOfContents.map((item, i) => (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    className="group flex items-center gap-2 bg-white dark:bg-gray-900 border border-fuchsia-200 dark:border-fuchsia-800 rounded-lg p-3 hover:border-fuchsia-500 hover:shadow-md transition-all"
                                >
                                    <span className="w-6 h-6 rounded-full bg-fuchsia-100 dark:bg-fuchsia-900 flex items-center justify-center text-xs font-bold text-fuchsia-700 dark:text-fuchsia-300 flex-shrink-0">
                                        {i + 1}
                                    </span>
                                    <div className="min-w-0">
                                        <div className="text-xs font-semibold text-gray-800 dark:text-gray-200 truncate">
                                            {item.label}
                                        </div>
                                        <div className="text-xs text-fuchsia-600 dark:text-fuchsia-400 truncate">
                                            {item.hindi}
                                        </div>
                                    </div>
                                    <ChevronRight className="w-3 h-3 text-fuchsia-400 ml-auto flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section 1: Digital Safety Basics */}
                <section id="basics" className="py-16 bg-white dark:bg-gray-950">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6">
                        <div className="mb-10">
                            <span className="text-xs font-bold text-fuchsia-600 dark:text-fuchsia-400 uppercase tracking-widest">
                                Section 1
                            </span>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mt-1">
                                Digital Safety Basics
                                <span className="block text-lg font-medium text-fuchsia-600 dark:text-fuchsia-400 mt-1">
                                    बुनियादी डिजिटल सुरक्षा
                                </span>
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-2xl">
                                Six golden rules every Indian internet user must know. Memorise these  they stop 80% of scams.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {basicRules.map((rule, i) => (
                                <div
                                    key={i}
                                    className="bg-gradient-to-br from-fuchsia-50 to-pink-50 dark:from-fuchsia-950/30 dark:to-pink-950/30 border border-fuchsia-200 dark:border-fuchsia-800/50 rounded-xl p-5"
                                >
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-fuchsia-500 to-pink-600 flex items-center justify-center mb-4">
                                        <rule.icon className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 dark:text-white mb-0.5">{rule.rule}</h3>
                                    <p className="text-xs text-fuchsia-600 dark:text-fuchsia-400 mb-2 italic">{rule.hindi}</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{rule.detail}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section 2: UPI & Payments */}
                <section id="upi" className="py-16 bg-gradient-to-br from-fuchsia-50 to-pink-50 dark:from-gray-900 dark:to-fuchsia-950/20">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6">
                        <div className="mb-10">
                            <span className="text-xs font-bold text-fuchsia-600 dark:text-fuchsia-400 uppercase tracking-widest">
                                Section 2
                            </span>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mt-1">
                                UPI & Digital Payments Safety
                                <span className="block text-lg font-medium text-fuchsia-600 dark:text-fuchsia-400 mt-1">
                                    UPI और डिजिटल भुगतान सुरक्षा
                                </span>
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-2xl">
                                UPI fraud alone accounts for 40%+ of all cybercrime complaints in India. These rules close the most common attack vectors.
                            </p>
                        </div>
                        <div className="space-y-3">
                            {upiRules.map((rule, i) => (
                                <div
                                    key={i}
                                    className={`flex items-start gap-4 p-4 rounded-xl border ${rule.do
                                            ? "bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800/50"
                                            : "bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800/50"
                                        }`}
                                >
                                    <div className={`flex-shrink-0 ${rule.do ? "text-green-600" : "text-red-500"}`}>
                                        {rule.do ? (
                                            <CheckCircle className="w-5 h-5" />
                                        ) : (
                                            <XCircle className="w-5 h-5" />
                                        )}
                                    </div>
                                    <div>
                                        <p className={`text-sm font-medium ${rule.do ? "text-green-800 dark:text-green-200" : "text-red-800 dark:text-red-200"}`}>
                                            {rule.do ? "DO: " : "NEVER: "}{rule.text}
                                        </p>
                                        <p className={`text-xs mt-0.5 italic ${rule.do ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
                                            {rule.hindi}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 bg-fuchsia-100 dark:bg-fuchsia-950/40 border border-fuchsia-300 dark:border-fuchsia-700 rounded-xl p-5">
                            <div className="flex items-start gap-3">
                                <Info className="w-5 h-5 text-fuchsia-600 dark:text-fuchsia-400 flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-semibold text-fuchsia-900 dark:text-fuchsia-100 text-sm">
                                        The Golden Rule of UPI  <span className="italic">याद रखें</span>
                                    </p>
                                    <p className="text-sm text-fuchsia-700 dark:text-fuchsia-300 mt-1">
                                        <strong>Receiving money needs NO PIN, NO OTP, NO app install, NO QR scan.</strong>{" "}
                                        If someone says otherwise, they are stealing from you.
                                    </p>
                                    <p className="text-xs text-fuchsia-600 dark:text-fuchsia-400 mt-1 italic">
                                        पैसे पाने के लिए PIN, OTP, ऐप या QR की जरूरत नहीं होती।
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3: Calls & SMS */}
                <section id="calls" className="py-16 bg-white dark:bg-gray-950">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6">
                        <div className="mb-10">
                            <span className="text-xs font-bold text-fuchsia-600 dark:text-fuchsia-400 uppercase tracking-widest">
                                Section 3
                            </span>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mt-1">
                                Call & SMS Scam Warning Signs
                                <span className="block text-lg font-medium text-fuchsia-600 dark:text-fuchsia-400 mt-1">
                                    कॉल और SMS घोटाले की पहचान
                                </span>
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {callScamSigns.map((item, i) => (
                                <div
                                    key={i}
                                    className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 shadow-sm"
                                >
                                    <div className="flex items-start gap-3 mb-3">
                                        <div className="w-7 h-7 rounded-full bg-red-100 dark:bg-red-950 flex items-center justify-center flex-shrink-0">
                                            <AlertTriangle className="w-3.5 h-3.5 text-red-600 dark:text-red-400" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{item.sign}</p>
                                            <p className="text-xs text-fuchsia-600 dark:text-fuchsia-400 italic mt-0.5">{item.hindi}</p>
                                        </div>
                                    </div>
                                    <div className="ml-10 flex items-start gap-2">
                                        <ChevronRight className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                        <p className="text-sm text-green-700 dark:text-green-400">{item.action}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section 4: App Safety */}
                <section id="apps" className="py-16 bg-gradient-to-br from-pink-50 to-fuchsia-50 dark:from-gray-900 dark:to-pink-950/20">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6">
                        <div className="mb-10">
                            <span className="text-xs font-bold text-fuchsia-600 dark:text-fuchsia-400 uppercase tracking-widest">
                                Section 4
                            </span>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mt-1">
                                App & Device Safety
                                <span className="block text-lg font-medium text-fuchsia-600 dark:text-fuchsia-400 mt-1">
                                    ऐप और डिवाइस सुरक्षा
                                </span>
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {appSafetyTips.map((tip, i) => (
                                <div
                                    key={i}
                                    className="bg-white dark:bg-gray-900 border border-fuchsia-200 dark:border-fuchsia-800/50 rounded-xl p-5 shadow-sm"
                                >
                                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-fuchsia-500 to-pink-600 flex items-center justify-center mb-3">
                                        <tip.icon className="w-4 h-4 text-white" />
                                    </div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-0.5">{tip.title}</h3>
                                    <p className="text-xs text-fuchsia-600 dark:text-fuchsia-400 italic mb-2">{tip.hindi}</p>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{tip.detail}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section 5: Social Media */}
                <section id="social" className="py-16 bg-white dark:bg-gray-950">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6">
                        <div className="mb-10">
                            <span className="text-xs font-bold text-fuchsia-600 dark:text-fuchsia-400 uppercase tracking-widest">
                                Section 5
                            </span>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mt-1">
                                Social Media Safety
                                <span className="block text-lg font-medium text-fuchsia-600 dark:text-fuchsia-400 mt-1">
                                    सोशल मीडिया पर सुरक्षा
                                </span>
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {socialMediaRules.map((rule, i) => (
                                <div
                                    key={i}
                                    className="bg-gradient-to-br from-fuchsia-50 to-pink-50 dark:from-fuchsia-950/20 dark:to-pink-950/20 border border-fuchsia-200 dark:border-fuchsia-800/50 rounded-xl p-6"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-fuchsia-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                                            <rule.icon className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 dark:text-white text-sm">{rule.title}</h3>
                                            <p className="text-xs text-fuchsia-600 dark:text-fuchsia-400 italic mt-0.5 mb-2">{rule.hindi}</p>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">{rule.detail}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section 6: Phishing */}
                <section id="phishing" className="py-16 bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-gray-900 dark:to-purple-950/20">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6">
                        <div className="mb-10">
                            <span className="text-xs font-bold text-fuchsia-600 dark:text-fuchsia-400 uppercase tracking-widest">
                                Section 6
                            </span>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mt-1">
                                Phishing & Fake Links Checklist
                                <span className="block text-lg font-medium text-fuchsia-600 dark:text-fuchsia-400 mt-1">
                                    फ़िशिंग और नकली लिंक की जाँच
                                </span>
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-2xl text-sm">
                                Before clicking any link  especially from SMS, email, or WhatsApp  run through this checklist.
                            </p>
                        </div>
                        <div className="space-y-3 max-w-3xl">
                            {phishingChecklist.map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-start gap-4 bg-white dark:bg-gray-900 border border-fuchsia-200 dark:border-fuchsia-800/50 rounded-xl p-4"
                                >
                                    <div className="w-7 h-7 rounded-full bg-fuchsia-100 dark:bg-fuchsia-950 flex items-center justify-center text-fuchsia-700 dark:text-fuchsia-300 font-bold text-xs flex-shrink-0">
                                        {i + 1}
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{item.step}</p>
                                        <p className="text-xs text-fuchsia-600 dark:text-fuchsia-400 italic mt-0.5">{item.hindi}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 bg-white dark:bg-gray-900 border border-fuchsia-300 dark:border-fuchsia-700 rounded-xl p-6 max-w-3xl">
                            <h3 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                                <Lightbulb className="w-5 h-5 text-fuchsia-500" />
                                Spot a Fake URL  Examples
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[
                                    { fake: "sbi-bank-kyc.com", real: "sbi.co.in" },
                                    { fake: "hdfcbankloan.in", real: "hdfcbank.com" },
                                    { fake: "irctc-refund.xyz", real: "irctc.co.in" },
                                    { fake: "gov-india-scheme.net", real: "india.gov.in" },
                                ].map((ex, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                                        <div className="text-center">
                                            <div className="text-xs text-red-600 dark:text-red-400 font-mono bg-red-50 dark:bg-red-950/30 px-2 py-1 rounded mb-1">
                                                ✗ {ex.fake}
                                            </div>
                                            <div className="text-xs text-green-600 dark:text-green-400 font-mono bg-green-50 dark:bg-green-950/30 px-2 py-1 rounded">
                                                ✓ {ex.real}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 7: Protecting Your Family */}
                <section id="family" className="py-16 bg-white dark:bg-gray-950">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6">
                        <div className="mb-10">
                            <span className="text-xs font-bold text-fuchsia-600 dark:text-fuchsia-400 uppercase tracking-widest">
                                Section 7
                            </span>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mt-1">
                                Protecting Your Family
                                <span className="block text-lg font-medium text-fuchsia-600 dark:text-fuchsia-400 mt-1">
                                    अपने परिवार को कैसे बचाएं
                                </span>
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-2xl text-sm">
                                Different family members face different threats. Tailor your safety conversations accordingly.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {familyGuide.map((group, i) => (
                                <div
                                    key={i}
                                    className="bg-gradient-to-br from-fuchsia-50 to-pink-50 dark:from-fuchsia-950/20 dark:to-pink-950/20 border border-fuchsia-200 dark:border-fuchsia-800/50 rounded-xl p-6"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-fuchsia-500 to-pink-600 flex items-center justify-center">
                                            <group.icon className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 dark:text-white text-sm">{group.audience}</h3>
                                            <p className="text-xs text-fuchsia-600 dark:text-fuchsia-400 italic">{group.hindi}</p>
                                        </div>
                                    </div>
                                    <ul className="space-y-2">
                                        {group.tips.map((tip, j) => (
                                            <li key={j} className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-fuchsia-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{tip}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Hindi Glossary */}
                <section className="py-14 bg-gradient-to-br from-fuchsia-50 to-pink-50 dark:from-gray-900 dark:to-fuchsia-950/20">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                            <BookOpen className="w-5 h-5 text-fuchsia-600" />
                            Glossary  साइबर शब्दकोश
                        </h2>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                            Common terms used in cyber fraud  explained in plain language (Hindi + English)
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {hindiGlossary.map((entry, i) => (
                                <div
                                    key={i}
                                    className="bg-white dark:bg-gray-900 border border-fuchsia-200 dark:border-fuchsia-800/50 rounded-lg p-4"
                                >
                                    <p className="text-sm font-semibold text-fuchsia-700 dark:text-fuchsia-400 mb-1">{entry.term}</p>
                                    <p className="text-xs text-gray-600 dark:text-gray-400">{entry.meaning}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section 8: Emergency Response */}
                <section id="emergency" className="py-16 bg-white dark:bg-gray-950">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6">
                        <div className="mb-10">
                            <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-widest">
                                Section 8  Emergency
                            </span>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mt-1">
                                Emergency Response  What to Do NOW
                                <span className="block text-lg font-medium text-red-500 dark:text-red-400 mt-1">
                                    आपातकालीन कार्रवाई  तुरंत करें
                                </span>
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-2xl text-sm">
                                If you have been scammed, time is critical. Every minute counts for fund recovery.
                                <strong className="text-red-600 dark:text-red-400 ml-1">
                                    Speed of action = chances of recovery.
                                </strong>
                            </p>
                        </div>
                        <div className="space-y-4 max-w-3xl">
                            {emergencySteps.map((step) => (
                                <div
                                    key={step.step}
                                    className="flex items-start gap-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 shadow-sm"
                                >
                                    <div
                                        className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0`}
                                    >
                                        <span className="text-white font-extrabold text-sm">{step.step}</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 dark:text-white">{step.action}</h3>
                                        <p className="text-xs text-fuchsia-600 dark:text-fuchsia-400 italic mb-1">{step.hindi}</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">{step.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800/50 rounded-xl p-6 max-w-3xl">
                            <h3 className="font-bold text-red-800 dark:text-red-300 mb-3">
                                Emergency Contacts at a Glance  आपातकालीन नंबर
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {[
                                    { label: "Cyber Helpline", number: "1930", hindi: "साइबर हेल्पलाइन" },
                                    { label: "Police", number: "100", hindi: "पुलिस" },
                                    { label: "Women Helpline", number: "1091", hindi: "महिला हेल्पलाइन" },
                                    { label: "Child Helpline", number: "1098", hindi: "बाल हेल्पलाइन" },
                                    { label: "RBI Helpline", number: "14448", hindi: "RBI हेल्पलाइन" },
                                    { label: "TRAI DND", number: "1909", hindi: "DND सेवा" },
                                ].map((contact) => (
                                    <div
                                        key={contact.number}
                                        className="bg-white dark:bg-gray-900 rounded-lg p-3 text-center border border-red-100 dark:border-red-900/50"
                                    >
                                        <div className="text-lg font-extrabold text-red-600 dark:text-red-400">{contact.number}</div>
                                        <div className="text-xs font-medium text-gray-800 dark:text-gray-200">{contact.label}</div>
                                        <div className="text-xs text-gray-500 dark:text-gray-500 italic">{contact.hindi}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-16 bg-gradient-to-br from-fuchsia-50 to-pink-50 dark:from-gray-900 dark:to-fuchsia-950/20">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6">
                        <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                            <MessageSquare className="w-6 h-6 text-fuchsia-600" />
                            Frequently Asked Questions
                        </h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
                            अक्सर पूछे जाने वाले प्रश्न
                        </p>
                        <div className="space-y-4">
                            {faqs.map((faq, i) => (
                                <div
                                    key={i}
                                    className="bg-white dark:bg-gray-900 border border-fuchsia-200 dark:border-fuchsia-800/50 rounded-xl p-6"
                                >
                                    <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-0.5">{faq.q}</h3>
                                    <p className="text-xs text-fuchsia-600 dark:text-fuchsia-400 italic mb-3">{faq.qHindi}</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Share this guide prompt */}
                <section className="py-12 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-fuchsia-500 to-pink-600 flex items-center justify-center mx-auto mb-4">
                            <Share2 className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                            Share This Guide  गाइड शेयर करें
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                            Send this page to your parents, children, or anyone you care about.
                        </p>
                        <p className="text-fuchsia-600 dark:text-fuchsia-400 text-sm italic font-medium">
                            "एक जानकारी दस परिवारों को बचा सकती है।"
                        </p>
                        <p className="text-xs text-gray-400 dark:text-gray-500 italic mt-1">
                            (One piece of knowledge can protect ten families.)
                        </p>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-gradient-to-br from-fuchsia-600 via-pink-600 to-purple-700 text-white">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
                        <Shield className="w-12 h-12 text-pink-200 mx-auto mb-4" />
                        <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
                            Verify Before You Trust
                            <span className="block text-lg font-medium text-pink-200 mt-1">
                                विश्वास से पहले जांचें
                            </span>
                        </h2>
                        <p className="text-fuchsia-100 mb-8 max-w-xl mx-auto">
                            Got a suspicious UPI ID, phone number, or link? Run a free check on RakshaAI before you interact.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/"
                                className="bg-white text-fuchsia-700 font-bold px-8 py-3 rounded-xl hover:bg-fuchsia-50 transition-colors"
                            >
                                Check a Number / UPI / Link →
                            </Link>
                            <ReportScamButton className="bg-fuchsia-800/50 backdrop-blur border border-white/20 text-white font-semibold px-8 py-3 rounded-xl hover:bg-fuchsia-800/70 transition-colors">
                                Report a Scam
                            </ReportScamButton>
                        </div>
                        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-fuchsia-200">
                            <Link href="/scam-alerts" className="hover:text-white transition-colors">
                                → Latest Scam Alerts
                            </Link>
                            <Link href="/prevention-tips" className="hover:text-white transition-colors">
                                → Prevention Tips
                            </Link>
                            <Link href="/scams/upi-fraud" className="hover:text-white transition-colors">
                                → UPI Fraud Guide
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </DefaultLayout>
    );
}
