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
    ExternalLink,
    ChevronRight,
    CheckCircle,
    ArrowRight,
    Clock,
    AlertTriangle,
    Building2,
    Smartphone,
    CreditCard,
    Globe,
} from 'lucide-react'

export const metadata: Metadata = {
    title: { absolute: 'How to Report Cybercrime in India (2026 Complete Guide) | RakshaAI' },
    description:
        'Step-by-step guide to reporting cybercrime in India: call 1930 helpline, file at cybercrime.gov.in, report to your bank. Free guide.',
    keywords: [
        'how to report cybercrime India',
        'cybercrime complaint India 2026',
        'cybercrime.gov.in complaint',
        '1930 cybercrime helpline India',
        'how to file FIR for online fraud India',
        'report UPI fraud India',
        'SEBI complaint online fraud India',
        'RBI complaint banking fraud India',
        'online fraud complaint India',
        'cybercrime FIR India',
    ],
    alternates: { canonical: 'https://rakshaai.co/how-to-report-cybercrime-india' },
    robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
    openGraph: {
        title: 'How to Report Cybercrime in India (2026 Complete Guide)',
        description:
            'Complete guide: 1930 helpline, cybercrime.gov.in portal, FIR filing, bank dispute, SEBI/RBI/TRAI escalation. All reporting channels for online fraud in India.',
        url: 'https://rakshaai.co/how-to-report-cybercrime-india',
        type: 'article',
        siteName: 'RakshaAI',
        images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'How to Report Cybercrime in India - Complete Guide RakshaAI' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'How to Report Cybercrime in India (2026)',
        description: 'Complete guide: 1930 helpline, cybercrime.gov.in, FIR filing, bank dispute, sector regulators.',
        images: ['/opengraph-image'],
    },
}

const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Report Cybercrime in India',
    description: 'All official channels for reporting online fraud in India: call 1930, file at cybercrime.gov.in, lodge an FIR, dispute with your bank, and escalate to sector regulators.',
    totalTime: 'PT20M',
    step: [
        {
            '@type': 'HowToStep',
            position: '1',
            name: 'Call 1930  National Cybercrime Helpline',
            text: 'Free, 24/7. First step after any financial fraud. The helpline can issue a lien on fraudulent accounts to freeze funds before withdrawal.',
            url: 'https://rakshaai.co/how-to-report-cybercrime-india#helpline-1930',
        },
        {
            '@type': 'HowToStep',
            position: '2',
            name: 'File online at cybercrime.gov.in',
            text: 'Official Ministry of Home Affairs portal. File for financial fraud, social media abuse, online harassment, sextortion, and more. You receive a complaint reference number.',
            url: 'https://rakshaai.co/how-to-report-cybercrime-india#cybercrime-portal',
        },
        {
            '@type': 'HowToStep',
            position: '3',
            name: 'File an FIR at your nearest police station',
            text: 'Required for formal legal action. Go to the cybercrime cell of your nearest police station. Police cannot refuse to register an FIR for cybercrime under Indian law.',
            url: 'https://rakshaai.co/how-to-report-cybercrime-india#police-fir',
        },
        {
            '@type': 'HowToStep',
            position: '4',
            name: 'Report to your bank',
            text: 'Dispute the fraudulent transaction through your bank official customer care. Request a chargeback and submit the cybercrime complaint reference number.',
            url: 'https://rakshaai.co/how-to-report-cybercrime-india#bank-report',
        },
        {
            '@type': 'HowToStep',
            position: '5',
            name: 'Escalate to the sector regulator',
            text: 'Report investment fraud to SEBI, banking fraud to the RBI Banking Ombudsman, telecom fraud to TRAI, and insurance fraud to IRDAI.',
            url: 'https://rakshaai.co/how-to-report-cybercrime-india#regulators',
        },
    ],
}

const breadcrumb = breadcrumbListSchema([
    { name: 'Home', url: '/' },
    { name: 'Report Cybercrime India', url: '/how-to-report-cybercrime-india' },
])

const stepsSchema = itemListSchema({
    name: 'How to Report Cybercrime in India: Step-by-Step',
    description: 'All official channels for reporting online fraud and cybercrime in India',
    url: '/how-to-report-cybercrime-india',
    items: [
        { name: 'Call 1930  National Cybercrime Helpline', description: 'Free, 24/7. First step after any financial fraud. Can issue a lien on fraudulent accounts to freeze funds before withdrawal.' },
        { name: 'File online at cybercrime.gov.in', description: 'Official Ministry of Home Affairs portal. File for financial fraud, social media abuse, online harassment, sextortion, and more.' },
        { name: 'File an FIR at your nearest police station', description: 'Required for formal legal action. Go to the cybercrime cell of your nearest police station. Police cannot refuse to register an FIR for cybercrime.' },
        { name: 'Report to your bank', description: 'Dispute the transaction through your bank official customer care. Request a chargeback. Submit the cybercrime complaint reference number.' },
        { name: 'Escalate to the sector regulator', description: 'Investment fraud to SEBI, banking fraud to RBI Banking Ombudsman, telecom fraud to TRAI, insurance fraud to IRDAI.' },
    ],
})

const faqSchema = faqPageSchema([
    {
        question: 'What is the cybercrime helpline number in India?',
        answer: '1930 is India\'s National Cybercrime Helpline. It is free and available 24 hours a day, 7 days a week. Call it as the first step after any online financial fraud. The helpline can issue a lien on the receiving account to freeze funds if you call quickly enough.',
    },
    {
        question: 'How do I file a cybercrime complaint online in India?',
        answer: 'Visit cybercrime.gov.in and click "Report Cybercrime." You will need the scammer\'s phone number or UPI ID, transaction reference numbers, the date and amount of loss, and screenshots as evidence. You receive an online complaint reference number. Keep it for follow-up.',
    },
    {
        question: 'Can police refuse to register an FIR for cybercrime in India?',
        answer: 'No. Under Section 154 of CrPC (now Section 173 of BNSS), police cannot refuse to register an FIR for a cognizable offence, which includes financial cybercrime. If a police station refuses, escalate to the Superintendent of Police or file at the cybercrime cell directly.',
    },
    {
        question: 'How long does a cybercrime complaint take to resolve in India?',
        answer: 'Online complaints at cybercrime.gov.in are typically acknowledged within 24 to 72 hours. Money recovery depends on how fast you reported. Formal FIR investigations can take months. Calling 1930 immediately after fraud gives the best chance of same-day account freeze.',
    },
    {
        question: 'Where do I report investment or stock market fraud in India?',
        answer: 'Report to SEBI at sebi.gov.in/complaints or call SEBI helpline 1800-266-7575. Also file at cybercrime.gov.in and call 1930. For crypto fraud, also report to the Enforcement Directorate (ED) as it may involve FEMA violations.',
    },
    {
        question: 'What evidence do I need to file a cybercrime complaint?',
        answer: 'You need: the scammer\'s phone number, UPI ID, or website URL; transaction reference number (UTR) from your bank SMS or app; screenshots of all conversations; the amount and date of loss; and any email or WhatsApp messages from the scammer. Do not delete anything before filing.',
    },
    {
        question: 'Can I get my money back after reporting cybercrime?',
        answer: 'Partial or full recovery is possible if you report within 30 to 60 minutes of the fraud. After that window, scammers typically move funds. The 1930 helpline can freeze destination accounts if they act quickly enough. After 24 hours, recovery success drops to under 20% for most cases.',
    },
])

const pageSchema = webPageSchema({
    name: 'How to Report Cybercrime in India (2026 Complete Guide) | RakshaAI',
    description: 'Complete step-by-step guide for reporting all types of cybercrime in India: 1930 helpline, cybercrime.gov.in portal, FIR filing, bank disputes, and sector regulator escalation.',
    url: '/how-to-report-cybercrime-india',
})

const structuredData = jsonLd([pageSchema, howToSchema, stepsSchema, faqSchema, breadcrumb])

export default function HowToReportCybercrimePage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredData }} />
            <DefaultLayout>
                <div className="min-h-screen bg-gray-50 dark:bg-gray-900">

                    {/* Hero */}
                    <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
                            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 mb-6">
                                <Link href="/" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Home</Link>
                                <ChevronRight className="h-3 w-3 flex-shrink-0" />
                                <span className="text-gray-600 dark:text-gray-300">Report Cybercrime India</span>
                            </nav>
                            <p className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2">Complete Guide</p>
                            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
                                How to Report Cybercrime in India
                            </h1>
                            <p className="text-gray-500 dark:text-gray-400 text-base max-w-2xl leading-relaxed mb-6">
                                All reporting channels for online fraud in India: the 1930 helpline, cybercrime.gov.in, FIR filing, bank disputes, and sector-specific regulators for investment, telecom, and banking fraud.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <a
                                    href="tel:1930"
                                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl text-sm transition-colors"
                                >
                                    <Phone className="h-4 w-4" />
                                    Call 1930 Now
                                </a>
                                <a
                                    href="https://cybercrime.gov.in"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl text-sm transition-colors"
                                >
                                    <ExternalLink className="h-4 w-4" />
                                    cybercrime.gov.in
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-12">

                        {/* Time warning */}
                        <div className="flex items-start gap-4 p-5 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 rounded-2xl">
                            <Clock className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                            <div>
                                <p className="font-bold text-amber-800 dark:text-amber-300 mb-1">Did it just happen?</p>
                                <p className="text-sm text-amber-700 dark:text-amber-400 leading-relaxed">
                                    If you were just scammed, call 1930 immediately before reading this guide. Every minute matters.{' '}
                                    <Link href="/got-scammed" className="font-semibold underline">Go to the emergency recovery guide instead.</Link>
                                </p>
                            </div>
                        </div>

                        {/* Channel 1: 1930 */}
                        <section id="helpline-1930">
                            <div className="flex items-center gap-3 mb-5">
                                <span className="w-8 h-8 rounded-full bg-red-500 text-white text-sm font-extrabold flex items-center justify-center flex-shrink-0">1</span>
                                <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">Call 1930  National Cybercrime Helpline</h2>
                            </div>
                            <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 mb-4">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3">What it is</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                            India&apos;s National Cybercrime Helpline, operated by MHA. Free, available 24 hours a day, 7 days a week. The only channel that can issue a real-time lien on a fraudulent account before funds are withdrawn.
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3">Best for</p>
                                        <ul className="space-y-1.5">
                                            {['UPI and bank transfer fraud', 'Digital arrest / fake police calls', 'Online shopping fraud', 'Investment / job scam losses', 'Any financial cybercrime'].map((item) => (
                                                <li key={item} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                                    <CheckCircle className="h-3.5 w-3.5 text-green-500 flex-shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="mt-5 pt-5 border-t border-gray-100 dark:border-gray-700 flex flex-wrap gap-4 items-center">
                                    <div>
                                        <p className="text-xs text-gray-400 dark:text-gray-500 mb-0.5">Say when you call</p>
                                        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">"I want to report a cybercrime  financial fraud"</p>
                                    </div>
                                    <a
                                        href="tel:1930"
                                        className="ml-auto flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-sm transition-colors"
                                    >
                                        <Phone className="h-4 w-4" />
                                        Call 1930
                                    </a>
                                </div>
                            </div>
                            <p className="text-xs text-gray-500 dark:text-gray-400 pl-1">
                                Tip: Have your transaction UTR number, scammer phone/UPI ID, and the amount ready before calling. This saves time and gives the helpline more to act on.
                            </p>
                        </section>

                        {/* Channel 2: cybercrime.gov.in */}
                        <section id="cybercrime-portal">
                            <div className="flex items-center gap-3 mb-5">
                                <span className="w-8 h-8 rounded-full bg-indigo-500 text-white text-sm font-extrabold flex items-center justify-center flex-shrink-0">2</span>
                                <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">File at cybercrime.gov.in</h2>
                            </div>
                            <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 mb-4">
                                <div className="grid sm:grid-cols-2 gap-6 mb-5">
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3">What to file here</p>
                                        <ul className="space-y-1.5">
                                            {[
                                                'Financial fraud (UPI, bank, cards)',
                                                'Online shopping fraud',
                                                'Social media hacking or abuse',
                                                'Sextortion or blackmail',
                                                'Fake job or investment fraud',
                                                'Phishing and impersonation',
                                            ].map((item) => (
                                                <li key={item} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                                    <CheckCircle className="h-3.5 w-3.5 text-green-500 flex-shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3">What you need</p>
                                        <ul className="space-y-1.5">
                                            {[
                                                'Scammer phone number or UPI ID',
                                                'Transaction UTR / reference number',
                                                'Date, time, and amount of fraud',
                                                'Screenshots of all evidence',
                                                'Your own mobile number',
                                            ].map((item) => (
                                                <li key={item} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                                    <FileText className="h-3.5 w-3.5 text-indigo-400 flex-shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="pt-4 border-t border-gray-100 dark:border-gray-700 flex flex-wrap gap-3 items-center">
                                    <p className="text-sm text-gray-500 dark:text-gray-400">After filing, you receive a complaint reference number. Keep it for police follow-up.</p>
                                    <a
                                        href="https://cybercrime.gov.in"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-sm transition-colors"
                                    >
                                        File Complaint <ExternalLink className="h-3.5 w-3.5" />
                                    </a>
                                </div>
                            </div>
                        </section>

                        {/* Channel 3: FIR */}
                        <section id="file-fir">
                            <div className="flex items-center gap-3 mb-5">
                                <span className="w-8 h-8 rounded-full bg-indigo-500 text-white text-sm font-extrabold flex items-center justify-center flex-shrink-0">3</span>
                                <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">File an FIR at Your Nearest Police Station</h2>
                            </div>
                            <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 mb-4">
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                                    An FIR (First Information Report) starts a formal criminal investigation. You can file at any police station  preferably at a dedicated cybercrime cell. Police cannot legally refuse to register an FIR for cybercrime.
                                </p>
                                <div className="space-y-3">
                                    {[
                                        { step: 'Go to the cybercrime cell', detail: 'Most city police stations have a cybercrime cell. If not, any police station is required by law to accept your FIR.' },
                                        { step: 'Bring printed evidence', detail: 'Print screenshots of conversations, fake website pages, and transaction receipts. Bring the cybercrime.gov.in complaint reference number if you have it.' },
                                        { step: 'Insist on your FIR copy', detail: 'You are entitled to a free copy of the FIR. Keep the FIR number  you will need it for bank disputes, insurance claims, and court proceedings.' },
                                        { step: 'Escalate if refused', detail: 'If the officer refuses to register your FIR, file a complaint with the Superintendent of Police. You can also file a private complaint before a judicial magistrate.' },
                                    ].map(({ step, detail }, i) => (
                                        <div key={i} className="flex gap-3">
                                            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
                                            <div>
                                                <p className="text-sm font-semibold text-gray-900 dark:text-white">{step}</p>
                                                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{detail}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Channel 4: Bank */}
                        <section id="bank-dispute">
                            <div className="flex items-center gap-3 mb-5">
                                <span className="w-8 h-8 rounded-full bg-indigo-500 text-white text-sm font-extrabold flex items-center justify-center flex-shrink-0">4</span>
                                <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">Report to Your Bank</h2>
                            </div>
                            <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 mb-4">
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                                    Call your bank official customer care number  use the number on the back of your debit card or in your bank app, never from a Google search. Request a transaction dispute and submit your cybercrime complaint reference number.
                                </p>
                                <div className="p-4 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 rounded-xl mb-4">
                                    <div className="flex items-start gap-2">
                                        <AlertTriangle className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                                        <p className="text-sm text-amber-700 dark:text-amber-400">
                                            <strong>Important:</strong> Under RBI guidelines, if a bank employee error caused the fraud, you are entitled to a full refund within 10 working days. For third-party fraud where you voluntarily shared OTP, liability depends on reporting time.
                                        </p>
                                    </div>
                                </div>
                                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2">If your bank is unresponsive</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Escalate to the RBI Banking Ombudsman.</p>
                                <a
                                    href="https://rbi.org.in/Scripts/bs_viewcontent.aspx?Id=159"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                                >
                                    RBI Banking Ombudsman <ExternalLink className="h-3.5 w-3.5" />
                                </a>
                            </div>
                        </section>

                        {/* Channel 5: Sector regulators */}
                        <section id="sector-regulators">
                            <div className="flex items-center gap-3 mb-5">
                                <span className="w-8 h-8 rounded-full bg-indigo-500 text-white text-sm font-extrabold flex items-center justify-center flex-shrink-0">5</span>
                                <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">Escalate to the Sector Regulator</h2>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">For sector-specific fraud, file with the relevant regulator in addition to cybercrime.gov.in.</p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    {
                                        icon: CreditCard,
                                        regulator: 'SEBI',
                                        useCase: 'Investment / stock market fraud, fake trading apps, crypto pump-and-dump schemes',
                                        link: 'https://scores.sebi.gov.in',
                                        linkLabel: 'SEBI SCORES Portal',
                                        helpline: '1800-266-7575',
                                    },
                                    {
                                        icon: Building2,
                                        regulator: 'RBI Banking Ombudsman',
                                        useCase: 'Bank account fraud, credit card fraud, digital banking service failures',
                                        link: 'https://rbi.org.in/Scripts/bs_viewcontent.aspx?Id=159',
                                        linkLabel: 'RBI Ombudsman',
                                        helpline: '14448',
                                    },
                                    {
                                        icon: Smartphone,
                                        regulator: 'TRAI',
                                        useCase: 'SIM swap fraud, spam calls, telecom service misuse, fake telecom representatives',
                                        link: 'https://www.trai.gov.in',
                                        linkLabel: 'TRAI Complaint Portal',
                                        helpline: '1909 (DND)',
                                    },
                                    {
                                        icon: Globe,
                                        regulator: 'IRDAI',
                                        useCase: 'Fake insurance schemes, fraudulent policy surrender calls, bogus premium refund offers',
                                        link: 'https://irdai.gov.in',
                                        linkLabel: 'IRDAI Bima Bharosa',
                                        helpline: '155255',
                                    },
                                ].map(({ icon: Icon, regulator, useCase, link, linkLabel, helpline }) => (
                                    <div key={regulator} className="p-5 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="p-1.5 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                                                <Icon className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                                            </div>
                                            <p className="font-bold text-gray-900 dark:text-white text-sm">{regulator}</p>
                                        </div>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-3">{useCase}</p>
                                        <div className="flex items-center gap-3">
                                            <a
                                                href={link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
                                            >
                                                {linkLabel} <ExternalLink className="h-3 w-3" />
                                            </a>
                                            <span className="text-xs text-gray-400 dark:text-gray-500">|</span>
                                            <a href={`tel:${helpline.replace(/-/g, '')}`} className="text-xs font-semibold text-gray-600 dark:text-gray-400 hover:underline">
                                                {helpline}
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Evidence checklist */}
                        <section>
                            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-2">Evidence Checklist</h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">Gather this before calling 1930 or filing online. Do not delete anything.</p>
                            <div className="grid sm:grid-cols-2 gap-3">
                                {[
                                    'Scammer phone number or UPI ID',
                                    'Transaction UTR / reference number (from bank SMS)',
                                    'Amount and exact date and time of loss',
                                    'Screenshots of all conversations',
                                    'URL of fake website (screenshot it first)',
                                    'Any email addresses used by scammer',
                                    'Bank statement showing the transaction',
                                    'Previous complaint reference numbers (if any)',
                                ].map((item) => (
                                    <div key={item} className="flex items-start gap-2.5 p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
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
                                        a: '1930 is India\'s National Cybercrime Helpline. Free, 24/7. Call it as the first step after any financial online fraud.',
                                    },
                                    {
                                        q: 'Can police refuse to register an FIR for cybercrime?',
                                        a: 'No. Under Indian law, police cannot refuse to register an FIR for a cognizable offence, which includes financial cybercrime. If refused, escalate to the Superintendent of Police or file directly with the cybercrime cell.',
                                    },
                                    {
                                        q: 'Where do I report investment or stock market fraud in India?',
                                        a: 'Report to SEBI at the SCORES portal (scores.sebi.gov.in) or call 1800-266-7575. Also file at cybercrime.gov.in and call 1930. For crypto fraud, also report to the Enforcement Directorate.',
                                    },
                                    {
                                        q: 'How long does a cybercrime complaint take?',
                                        a: 'Online complaints are acknowledged within 24 to 72 hours. Money recovery depends on how fast you reported. Formal investigations take months. The 1930 call immediately after fraud gives the best chance of same-day account freeze.',
                                    },
                                    {
                                        q: 'Can I report cybercrime anonymously in India?',
                                        a: 'cybercrime.gov.in has an option to report without login for certain offences like child pornography and online threats. For financial fraud where you want money recovery, you must provide your contact details so investigators can follow up.',
                                    },
                                ].map(({ q, a }) => (
                                    <div key={q} className="p-5 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
                                        <p className="font-bold text-gray-900 dark:text-white mb-2 text-sm">{q}</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{a}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* RakshaAI CTA */}
                        <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 p-7 text-center">
                            <h3 className="text-xl font-bold text-white mb-2">
                                Check Before You Pay
                            </h3>
                            <p className="text-indigo-100 text-sm mb-5 max-w-md mx-auto">
                                Prevent fraud before it happens. Check any phone number, website, or UPI ID for scam signals  free, instant, no sign-up.
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

                        {/* Related */}
                        <section>
                            <h2 className="text-xl font-extrabold text-gray-900 dark:text-white mb-4">Related Guides</h2>
                            <div className="grid sm:grid-cols-2 gap-3">
                                {[
                                    { href: '/got-scammed', label: 'Got Scammed? Do These 6 Things Right Now' },
                                    { href: '/blog/got-scammed-online-india-what-to-do', label: 'What to Do After an Online Scam in India' },
                                    { href: '/emergency', label: 'Emergency Checklist for Scam Victims' },
                                    { href: '/blog/upi-scam-india-2026', label: '7 UPI Scam Types Active in India' },
                                    { href: '/blog/digital-arrest-scam-india', label: 'Digital Arrest Scam Guide' },
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
