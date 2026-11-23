import type { Metadata } from 'next'
import Link from 'next/link'
import DefaultLayout from '@/components/DefaultLayout'
import {
    breadcrumbListSchema,
    faqPageSchema,
    itemListSchema,
    webPageSchema,
    jsonLd,
} from '@/lib/seo/schema'
import {
    Phone,
    Shield,
    FileText,
    AlertTriangle,
    Clock,
    ExternalLink,
    ChevronRight,
    CheckCircle,
    XCircle,
    ArrowRight,
    Lock,
    CreditCard,
    Smartphone,
    Globe,
    Users,
} from 'lucide-react'

export const metadata: Metadata = {
    title: { absolute: 'Got Scammed in India? Do These 6 Things Right Now | RakshaAI' },
    description:
        'Just got scammed in India? Call 1930 now. Freeze your bank, file at cybercrime.gov.in. Step-by-step recovery guide for UPI fraud, fake calls, and online scams.',
    keywords: [
        'got scammed online India',
        'what to do after online scam India',
        'UPI fraud recovery India',
        'cybercrime complaint India',
        '1930 helpline India',
        'online scam victim India',
        'money recovery after scam India',
        'cybercrime.gov.in complaint',
        'scam recovery India 2026',
    ],
    alternates: { canonical: 'https://rakshaai.co/got-scammed' },
    robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
    openGraph: {
        title: 'Got Scammed in India? Do These 6 Things Right Now',
        description:
            'Call 1930 immediately. Complete recovery guide: freeze transaction, file cybercrime complaint, secure your accounts. Act within 30 minutes for best results.',
        url: 'https://rakshaai.co/got-scammed',
        type: 'article',
        siteName: 'RakshaAI',
        images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Got Scammed in India - Recovery Guide RakshaAI' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Got Scammed in India? Do These 6 Things Right Now',
        description: 'Call 1930 immediately. Freeze the transaction. File at cybercrime.gov.in. Act in the next 30 minutes.',
        images: ['/opengraph-image'],
    },
}

const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'What to Do After Getting Scammed Online in India',
    description: 'Step-by-step recovery guide for online scam victims in India. Call 1930, freeze your account, file a cybercrime complaint, and secure your accounts within 30 minutes.',
    totalTime: 'PT30M',
    step: [
        {
            '@type': 'HowToStep',
            position: '1',
            name: 'Call 1930 immediately',
            text: "India's National Cybercrime Helpline  free, 24/7. Report the fraud amount, scammer details, and transaction reference. Time-critical: a lien on the receiving account is possible within hours.",
            url: 'https://rakshaai.co/got-scammed#step-1',
        },
        {
            '@type': 'HowToStep',
            position: '2',
            name: 'Call your bank and request a transaction hold',
            text: 'Call your bank official customer care number from the back of your card or the bank app  never Google. Request an immediate transaction hold or reversal and freeze internet banking.',
            url: 'https://rakshaai.co/got-scammed#step-2',
        },
        {
            '@type': 'HowToStep',
            position: '3',
            name: 'File a complaint at cybercrime.gov.in',
            text: 'File an online complaint with transaction details, scammer contacts, and screenshots. You receive a complaint reference number. Keep it for police follow-up.',
            url: 'https://rakshaai.co/got-scammed#step-3',
        },
        {
            '@type': 'HowToStep',
            position: '4',
            name: 'Secure your accounts',
            text: 'Change your UPI PIN, mobile banking password, and email password immediately. Enable two-step verification on all financial accounts.',
            url: 'https://rakshaai.co/got-scammed#step-4',
        },
        {
            '@type': 'HowToStep',
            position: '5',
            name: 'Lock Aadhaar biometrics if details were shared',
            text: 'If you shared your Aadhaar or OTP, call UIDAI 1947 and lock your biometrics at myaadhaar.uidai.gov.in to prevent fraudulent loan applications or SIM swaps.',
            url: 'https://rakshaai.co/got-scammed#step-5',
        },
        {
            '@type': 'HowToStep',
            position: '6',
            name: 'Report the scammer on RakshaAI',
            text: 'Report the phone number, UPI ID, or website to RakshaAI to warn other Indians and add the scammer to the database.',
            url: 'https://rakshaai.co/got-scammed#step-6',
        },
    ],
}

const breadcrumb = breadcrumbListSchema([
    { name: 'Home', url: '/' },
    { name: 'Got Scammed', url: '/got-scammed' },
])

const stepsSchema = itemListSchema({
    name: '6 Steps to Take Immediately After Getting Scammed Online in India',
    description: 'Recovery steps to take within 30 minutes of an online scam in India',
    url: '/got-scammed',
    items: [
        { name: 'Call 1930 immediately', description: 'National Cybercrime Helpline  free, 24/7. Report the fraud amount, scammer details, and transaction reference. Time-critical: lien on receiving account possible within hours.' },
        { name: 'Call your bank', description: 'Call your bank official customer care number (from the back of your card or the bank app, never Google). Request an immediate transaction hold or reversal and freeze internet banking.' },
        { name: 'File complaint at cybercrime.gov.in', description: 'File an online complaint with transaction details, scammer contacts, and screenshots. You receive a complaint reference number.' },
        { name: 'Secure your accounts', description: 'Change your UPI PIN, mobile banking password, and email password immediately. Enable two-step verification on all financial accounts.' },
        { name: 'Lock Aadhaar if details were shared', description: 'If you shared your Aadhaar or OTP, call UIDAI 1947 and lock your biometrics at myaadhaar.uidai.gov.in to prevent fraudulent loan applications.' },
        { name: 'Report the scammer on RakshaAI', description: 'Report the phone number, UPI ID, or website to RakshaAI to warn other Indians and add the scammer to the database.' },
    ],
})

const faqSchema = faqPageSchema([
    {
        question: 'What is the cybercrime helpline number in India?',
        answer: 'The National Cybercrime Helpline number is 1930. It is free and available 24 hours a day, 7 days a week. Call it immediately after any online fraud. The faster you call, the higher the chance of transaction reversal.',
    },
    {
        question: 'Can I get my money back after a UPI scam in India?',
        answer: 'Possibly, if you report within 30 to 60 minutes by calling 1930. The helpline can issue a lien on the receiving account to block the funds from being withdrawn. After 24 hours, recovery success drops dramatically. Always call 1930 first, then your bank.',
    },
    {
        question: 'How do I file a cybercrime complaint online in India?',
        answer: 'Go to cybercrime.gov.in and click Report Cybercrime. You need the scammer phone number or UPI ID, transaction reference numbers, the amount lost, and screenshots. You receive a complaint reference number. Keep it safe for police follow-up.',
    },
    {
        question: 'What if I shared my OTP or UPI PIN with a scammer?',
        answer: 'Change your UPI PIN immediately from the UPI app settings. Call your bank to freeze internet banking. Change your mobile banking password. Also change your email password if you shared it. File a complaint at cybercrime.gov.in and call 1930.',
    },
    {
        question: 'What if I shared my Aadhaar number with a scammer?',
        answer: 'Call UIDAI helpline 1947 immediately and lock your Aadhaar biometrics at myaadhaar.uidai.gov.in. This prevents fraudsters from taking loans or SIM cards using your Aadhaar. Also file a police complaint and monitor your CIBIL credit report for unauthorized loan applications.',
    },
    {
        question: 'I was scammed on Instagram or WhatsApp. What do I do?',
        answer: 'Report and block the scammer account immediately within the app. Screenshot everything before blocking. Call 1930 if money was lost. File at cybercrime.gov.in. Also report the scammer UPI ID or phone number at rakshaai.co to protect other Indians.',
    },
    {
        question: 'How long does it take to get money back after a cybercrime complaint?',
        answer: 'It depends on how quickly you reported. Complaints filed within 1 hour have the highest reversal rate. The official process takes 30 to 90 days. Always call 1930 first (not just file online) for the fastest freeze of the fraudulent account.',
    },
])

const pageSchema = webPageSchema({
    name: 'Got Scammed Online in India? Recovery Guide | RakshaAI',
    description: 'Complete step-by-step guide for online scam victims in India: call 1930, freeze transaction, file at cybercrime.gov.in, and secure your accounts.',
    url: '/got-scammed',
})

const structuredData = jsonLd([pageSchema, howToSchema, stepsSchema, faqSchema, breadcrumb])

export default function GotScammedPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredData }} />
            <DefaultLayout>
                <div className="min-h-screen bg-gray-50 dark:bg-gray-900">

                    {/* Hero */}
                    <div className="bg-red-600 text-white">
                        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
                            <div className="flex items-center gap-2 mb-4">
                                <AlertTriangle className="h-5 w-5 text-red-200 flex-shrink-0" />
                                <span className="text-red-200 text-sm font-semibold uppercase tracking-wider">Scam Recovery Guide</span>
                            </div>
                            <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">
                                Got Scammed Online in India?<br />
                                <span className="text-red-200">Do These 6 Things Right Now.</span>
                            </h1>
                            <p className="text-red-100 text-base sm:text-lg max-w-2xl leading-relaxed mb-6">
                                The next 30 minutes are critical. Call 1930 first. Then follow these steps to freeze the transaction, secure your accounts, and file your complaint.
                            </p>
                            <a
                                href="tel:1930"
                                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-red-600 font-bold rounded-xl text-base hover:bg-red-50 transition-colors"
                            >
                                <Phone className="h-5 w-5" />
                                Call 1930 Now  Free, 24/7
                            </a>
                        </div>
                    </div>

                    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-12">

                        {/* Time warning */}
                        <div className="flex items-start gap-4 p-5 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 rounded-2xl">
                            <Clock className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                            <div>
                                <p className="font-bold text-amber-800 dark:text-amber-300 mb-1">Why speed matters</p>
                                <p className="text-sm text-amber-700 dark:text-amber-400 leading-relaxed">
                                    Complaints filed within 1 hour have the highest transaction reversal rate. After 24 hours, scammers move or withdraw the funds and recovery becomes very difficult. Call 1930 <strong>before</strong> you do anything else.
                                </p>
                            </div>
                        </div>

                        {/* 6 Steps */}
                        <section>
                            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-6">6 Steps to Take Right Now</h2>
                            <div className="space-y-4">
                                {[
                                    {
                                        step: 1,
                                        title: 'Call 1930 immediately',
                                        detail: 'India\'s National Cybercrime Helpline. Free, 24/7. Report: the exact amount lost, the scammer\'s phone number or UPI ID, and your transaction reference. Ask them to freeze the destination account.',
                                        cta: { label: 'Call 1930', href: 'tel:1930', external: false },
                                        urgent: true,
                                    },
                                    {
                                        step: 2,
                                        title: 'Call your bank and request a transaction hold',
                                        detail: 'Use the number on the back of your debit/credit card or open your bank app Help section. Never call a number from Google search. Tell them you were defrauded and request an immediate freeze on the transaction.',
                                        cta: null,
                                        urgent: true,
                                    },
                                    {
                                        step: 3,
                                        title: 'File at cybercrime.gov.in',
                                        detail: 'File your formal complaint online. You will need: scammer phone number or UPI ID, transaction reference numbers, amount lost, and screenshots. Save the complaint reference number you receive.',
                                        cta: { label: 'Go to cybercrime.gov.in', href: 'https://cybercrime.gov.in', external: true },
                                        urgent: false,
                                    },
                                    {
                                        step: 4,
                                        title: 'Secure your accounts',
                                        detail: 'Change your UPI PIN from the PhonePe, GPay, or Paytm app settings. Change your mobile banking password. Change your email password. Enable two-step verification on everything.',
                                        cta: null,
                                        urgent: false,
                                    },
                                    {
                                        step: 5,
                                        title: 'Lock Aadhaar if personal details were shared',
                                        detail: 'If you shared your Aadhaar number, OTP, or date of birth: call UIDAI 1947 and lock your biometrics at myaadhaar.uidai.gov.in. This prevents fraudsters from taking loans or SIM cards using your identity.',
                                        cta: { label: 'Lock Aadhaar Biometrics', href: 'https://myaadhaar.uidai.gov.in', external: true },
                                        urgent: false,
                                    },
                                    {
                                        step: 6,
                                        title: 'Report the scammer on RakshaAI',
                                        detail: 'Report the phone number, UPI ID, or website on RakshaAI so other Indians can see the warning before they are targeted. It takes under 2 minutes and helps thousands of people.',
                                        cta: { label: 'Report on RakshaAI', href: '/check', external: false },
                                        urgent: false,
                                    },
                                ].map(({ step, title, detail, cta, urgent }) => (
                                    <div
                                        key={step}
                                        className={`flex gap-4 p-5 rounded-2xl border ${urgent ? 'border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/30' : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'}`}
                                    >
                                        <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-extrabold ${urgent ? 'bg-red-500 text-white' : 'bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400'}`}>
                                            {step}
                                        </span>
                                        <div className="flex-1 min-w-0">
                                            <p className={`font-bold mb-1.5 ${urgent ? 'text-red-800 dark:text-red-200' : 'text-gray-900 dark:text-white'}`}>{title}</p>
                                            <p className={`text-sm leading-relaxed mb-3 ${urgent ? 'text-red-700 dark:text-red-300' : 'text-gray-600 dark:text-gray-400'}`}>{detail}</p>
                                            {cta && (
                                                cta.external ? (
                                                    <a
                                                        href={cta.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={`inline-flex items-center gap-1.5 text-sm font-semibold ${urgent ? 'text-red-600 dark:text-red-400' : 'text-indigo-600 dark:text-indigo-400'} hover:underline`}
                                                    >
                                                        {cta.label} <ExternalLink className="h-3.5 w-3.5" />
                                                    </a>
                                                ) : (
                                                    <Link
                                                        href={cta.href}
                                                        className={`inline-flex items-center gap-1.5 text-sm font-semibold ${urgent ? 'text-red-600 dark:text-red-400' : 'text-indigo-600 dark:text-indigo-400'} hover:underline`}
                                                    >
                                                        {cta.label} <ChevronRight className="h-3.5 w-3.5" />
                                                    </Link>
                                                )
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* By scam type */}
                        <section>
                            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-2">Recovery by Scam Type</h2>
                            <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">Different scams have different urgent actions. Find your situation below.</p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    {
                                        icon: CreditCard,
                                        title: 'UPI or Bank Transfer Fraud',
                                        steps: ['Call 1930 within 30 min', 'Call bank to freeze account', 'File at cybercrime.gov.in', 'Gather transaction reference numbers'],
                                        link: '/blog/upi-scam-india-2026',
                                    },
                                    {
                                        icon: Smartphone,
                                        title: 'Digital Arrest / Fake Police Call',
                                        steps: ['Do not pay anything further', 'Call 1930 to report', 'File complaint at cybercrime.gov.in', 'Tell your family immediately'],
                                        link: '/blog/digital-arrest-scam-india',
                                    },
                                    {
                                        icon: Globe,
                                        title: 'Fake Website / Shopping Scam',
                                        steps: ['Contact your bank to dispute', 'Screenshot the fake website', 'Report URL on RakshaAI', 'File at cybercrime.gov.in'],
                                        link: '/blog/how-to-check-fake-website-india',
                                    },
                                    {
                                        icon: Users,
                                        title: 'Fake Job / Telegram Task Scam',
                                        steps: ['Stop sending any money immediately', 'Screenshot all chats', 'Call 1930 to report', 'File at cybercrime.gov.in'],
                                        link: '/blog/telegram-task-scam-india',
                                    },
                                    {
                                        icon: Lock,
                                        title: 'OTP or Aadhaar Shared',
                                        steps: ['Change UPI PIN immediately', 'Lock Aadhaar at myaadhaar.uidai.gov.in', 'Call UIDAI 1947', 'Monitor CIBIL for unauthorized loans'],
                                        link: '/blog/aadhaar-data-breach-india',
                                    },
                                    {
                                        icon: Phone,
                                        title: 'SIM Swap Fraud',
                                        steps: ['Call telecom immediately: Jio 198 / Airtel 121 / Vi 199', 'Freeze bank accounts from another device', 'Call 1930', 'Change all passwords from a safe device'],
                                        link: '/blog/sim-swap-fraud-india',
                                    },
                                ].map(({ icon: Icon, title, steps, link }) => (
                                    <div key={title} className="p-5 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="p-1.5 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                                                <Icon className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                                            </div>
                                            <p className="font-bold text-sm text-gray-900 dark:text-white">{title}</p>
                                        </div>
                                        <ul className="space-y-1.5 mb-4">
                                            {steps.map((s, i) => (
                                                <li key={i} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                                                    <CheckCircle className="h-3.5 w-3.5 text-green-500 flex-shrink-0 mt-0.5" />
                                                    {s}
                                                </li>
                                            ))}
                                        </ul>
                                        <Link
                                            href={link}
                                            className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                                        >
                                            Full guide <ArrowRight className="h-3 w-3" />
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* What you need to file */}
                        <section>
                            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-2">What to Gather Before Filing</h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Collect this information before calling 1930 or going to cybercrime.gov.in. It will speed up your complaint.</p>
                            <div className="grid sm:grid-cols-2 gap-3">
                                {[
                                    { ok: true, text: 'Scammer phone number or UPI ID' },
                                    { ok: true, text: 'Transaction reference / UTR number (from your bank SMS or UPI app)' },
                                    { ok: true, text: 'Amount lost and date/time of transaction' },
                                    { ok: true, text: 'Screenshots of all conversations with the scammer' },
                                    { ok: true, text: 'Screenshots of the fake website (if applicable)' },
                                    { ok: true, text: 'Any email addresses used by the scammer' },
                                    { ok: false, text: 'Do NOT delete chats or screenshots before filing' },
                                    { ok: false, text: 'Do NOT pay more money to "get your money back"' },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                                        {item.ok
                                            ? <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                                            : <XCircle className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                                        }
                                        <span className="text-sm text-gray-700 dark:text-gray-300">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* FAQ */}
                        <section>
                            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                {[
                                    {
                                        q: 'What is the cybercrime helpline number in India?',
                                        a: '1930  India\'s National Cybercrime Helpline. Free, 24 hours a day, 7 days a week. Call it immediately after any online fraud.',
                                    },
                                    {
                                        q: 'Can I get my money back after a UPI scam?',
                                        a: 'Possibly, if you report within 30 to 60 minutes. The 1930 helpline can issue a lien on the receiving account. After 24 hours, scammers withdraw the funds and recovery becomes very difficult. Speed is everything.',
                                    },
                                    {
                                        q: 'What if I shared my Aadhaar number with a scammer?',
                                        a: 'Call UIDAI 1947 immediately and lock your Aadhaar biometrics at myaadhaar.uidai.gov.in. This prevents fraudsters from using your Aadhaar to apply for loans or get new SIM cards. Also file a police complaint.',
                                    },
                                    {
                                        q: 'I was scammed but feel embarrassed. Should I still report it?',
                                        a: 'Yes, absolutely. Scammers target educated, careful people every day. Reporting is not about blame. It protects other Indians from the same scammer, and creates the official record needed to freeze the fraudulent account and potentially recover your money.',
                                    },
                                    {
                                        q: 'How long does it take to get money back after a cybercrime complaint?',
                                        a: 'The official process takes 30 to 90 days. Recovery depends on how quickly you reported, whether the money was still in the scammer\'s account, and the cooperation of the destination bank. Calling 1930 first (before filing online) gives the fastest freeze.',
                                    },
                                ].map(({ q, a }) => (
                                    <div key={q} className="p-5 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
                                        <p className="font-bold text-gray-900 dark:text-white mb-2 text-sm">{q}</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{a}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Official resources */}
                        <section>
                            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-6">Official Reporting Channels</h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    {
                                        name: 'National Cybercrime Helpline',
                                        desc: 'Call 1930  free, 24/7. First call to make after any online fraud.',
                                        href: 'tel:1930',
                                        label: 'Call 1930',
                                        external: false,
                                    },
                                    {
                                        name: 'cybercrime.gov.in',
                                        desc: 'Official online complaint portal for all cybercrime in India.',
                                        href: 'https://cybercrime.gov.in',
                                        label: 'File Complaint',
                                        external: true,
                                    },
                                    {
                                        name: 'UIDAI Helpline',
                                        desc: 'Call 1947 or lock Aadhaar biometrics if your Aadhaar was shared.',
                                        href: 'https://myaadhaar.uidai.gov.in',
                                        label: 'Lock Aadhaar',
                                        external: true,
                                    },
                                    {
                                        name: 'RakshaAI Scam Report',
                                        desc: 'Report the scammer number, UPI ID, or website to protect other Indians.',
                                        href: '/check',
                                        label: 'Report Scammer',
                                        external: false,
                                    },
                                ].map(({ name, desc, href, label, external }) => (
                                    <div key={name} className="p-5 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Shield className="h-4 w-4 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                                            <p className="font-bold text-gray-900 dark:text-white text-sm">{name}</p>
                                        </div>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 leading-relaxed">{desc}</p>
                                        {external ? (
                                            <a
                                                href={href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                                            >
                                                {label} <ExternalLink className="h-3.5 w-3.5" />
                                            </a>
                                        ) : (
                                            <Link
                                                href={href}
                                                className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                                            >
                                                {label} <ChevronRight className="h-3.5 w-3.5" />
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Bottom CTA */}
                        <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 p-7 text-center">
                            <h3 className="text-xl font-bold text-white mb-2">
                                Check Anything Suspicious Right Now
                            </h3>
                            <p className="text-indigo-100 text-sm mb-5 max-w-md mx-auto">
                                Check any phone number, website, or UPI ID for scam signals. Free, instant, no sign-up.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <Link
                                    href="/phone-number-checker"
                                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white hover:bg-gray-50 text-indigo-600 font-semibold rounded-xl transition-colors text-sm"
                                >
                                    <Shield className="h-4 w-4" />
                                    Check a Phone Number
                                </Link>
                                <Link
                                    href="/website-safety-checker"
                                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white hover:bg-gray-50 text-indigo-600 font-semibold rounded-xl transition-colors text-sm"
                                >
                                    <Shield className="h-4 w-4" />
                                    Check a Website
                                </Link>
                                <Link
                                    href="/upi-id-checker"
                                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-white/30 hover:bg-white/10 text-white font-semibold rounded-xl transition-colors text-sm"
                                >
                                    Check a UPI ID
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>

                        {/* Related reading */}
                        <section>
                            <h2 className="text-xl font-extrabold text-gray-900 dark:text-white mb-4">Related Guides</h2>
                            <div className="grid sm:grid-cols-2 gap-3">
                                {[
                                    { href: '/how-to-report-cybercrime-india', label: 'How to Report Cybercrime in India (Complete Guide)' },
                                    { href: '/blog/got-scammed-online-india-what-to-do', label: 'What to Do If You Got Scammed Online in India' },
                                    { href: '/blog/upi-scam-india-2026', label: '7 UPI Scam Types Active in India' },
                                    { href: '/emergency', label: 'Emergency Checklist for Scam Victims' },
                                    { href: '/blog/digital-arrest-scam-india', label: 'Digital Arrest Scam: What It Is and How to Escape' },
                                    { href: '/scams', label: 'All Scam Types in India' },
                                ].map(({ href, label }) => (
                                    <Link
                                        key={href}
                                        href={href}
                                        className="flex items-center gap-2 p-3.5 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors group"
                                    >
                                        <FileText className="h-4 w-4 text-indigo-500 flex-shrink-0" />
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{label}</span>
                                        <ChevronRight className="h-3.5 w-3.5 text-gray-300 dark:text-gray-600 group-hover:text-indigo-500 transition-colors ml-auto flex-shrink-0" />
                                    </Link>
                                ))}
                            </div>
                        </section>

                        <p className="text-xs text-gray-400 dark:text-gray-500 text-center pb-4">
                            RakshaAI is a private platform by Ehatech Services Pvt. Ltd. Not affiliated with any government body.{' '}
                            <Link href="/editorial-policy" className="hover:underline">Editorial policy</Link>
                        </p>
                    </div>
                </div>
            </DefaultLayout>
        </>
    )
}
