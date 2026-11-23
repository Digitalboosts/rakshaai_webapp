import { Metadata } from 'next'
import BlogLayout from '@/components/BlogLayout'
import Link from 'next/link'
import Image from 'next/image'
import { blogPostingSchema, faqPageSchema, breadcrumbListSchema, personSchema, jsonLd } from '@/lib/seo/schema'
import SidebarScamRecovery from '@/components/blog/SidebarScamRecovery'

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
    title: { absolute: 'Got Scammed Online in India? Do These 5 Things in 30 Minutes | RakshaAI' },
    description:
        'Just got scammed? Call 1930, freeze the transaction, file at cybercrime.gov.in. Step-by-step scam recovery guide for India.',
    keywords:
        'I got scammed online India what to do, cybercrime helpline 1930, how to recover money from online scam India, cybercrime.gov.in complaint, UPI fraud recovery India, Aadhaar lock after scam, online fraud recovery India 2026',
    authors: [{ name: 'Rabinarayan Pradhan', url: 'https://www.linkedin.com/in/rabinarayan-pradhan-14ab9422b/' }],
    robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
    openGraph: {
        title: 'Just Got Scammed? Do These 5 Things in the Next 30 Minutes',
        description:
            'Call 1930. Freeze the account. File the complaint. Step by step  what to do right now if you\'ve been scammed online in India.',
        type: 'article',
        siteName: 'RakshaAI',
        publishedTime: '2026-05-29T00:00:00.000Z',
        modifiedTime: '2026-05-29T00:00:00.000Z',
        tags: ['Scam Recovery', 'Cybercrime India', '1930 Helpline', 'UPI Fraud Recovery', 'Online Fraud India'],
        url: 'https://rakshaai.co/blog/got-scammed-online-india-what-to-do',
        images: [
            {
                url: '/blog/got-scammed-online-india-what-to-do/scam-victim-shocked.webp',
                width: 1456,
                height: 816,
                alt: 'Woman shocked looking at phone showing a fraudulent bank transaction',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Got Scammed Online in India? Act in the Next 30 Minutes',
        description:
            'Call 1930. Freeze the account. File the complaint. Every minute counts  step-by-step scam recovery guide for India.',
        images: ['/blog/got-scammed-online-india-what-to-do/scam-victim-shocked.webp'],
    },
    alternates: {
        canonical: 'https://rakshaai.co/blog/got-scammed-online-india-what-to-do',
    },
}

// ─── Structured Data ─────────────────────────────────────────────────────────
const articleStructuredData = blogPostingSchema({
    headline: 'I Got Scammed Online  Here\'s Exactly What To Do in the Next 30 Minutes',
    description:
        'Step-by-step emergency guide to recovering money after online fraud in India. Call 1930, freeze the transaction, file at cybercrime.gov.in.',
    url: '/blog/got-scammed-online-india-what-to-do',
    image: '/blog/got-scammed-online-india-what-to-do/scam-victim-shocked.webp',
    datePublished: '2026-05-29T00:00:00.000Z',
    dateModified: '2026-06-04T00:00:00.000Z',
    author: personSchema({ name: 'Rabinarayan Pradhan', jobTitle: 'Cybersecurity Writer', url: '/author/rabinarayan-pradhan', image: '/authors/rabinarayan-pradhan.jpeg', sameAs: ['https://www.linkedin.com/in/rabinarayan-pradhan-14ab9422b/'] }),
    section: 'Scam Recovery',
    keywords: ['I got scammed online India', 'cybercrime helpline 1930', 'UPI fraud recovery India', 'cybercrime.gov.in complaint'],
})

const recoveryStepsStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': 'https://rakshaai.co/blog/got-scammed-online-india-what-to-do#steps',
    name: 'What To Do After Getting Scammed Online in India',
    description: 'Step-by-step emergency guide to recovering money after online fraud in India',
    numberOfItems: 5,
    itemListElement: [
        {
            '@type': 'ListItem',
            position: 1,
            name: 'Call 1930 immediately',
            description: 'Call the National Cybercrime Helpline 1930  available 24/7, free. Report the fraud amount and scammer\'s details immediately.',
        },
        {
            '@type': 'ListItem',
            position: 2,
            name: 'Call your bank',
            description: 'Call your bank\'s official customer care (from the back of your card) and request a transaction hold or reversal.',
        },
        {
            '@type': 'ListItem',
            position: 3,
            name: 'File complaint at cybercrime.gov.in',
            description: 'Go to cybercrime.gov.in and file an online complaint with all transaction details, scammer contacts, and screenshots.',
        },
        {
            '@type': 'ListItem',
            position: 4,
            name: 'Report on RakshaAI',
            description: 'Go to rakshaai.co and report the scammer\'s phone number, UPI ID, or website to warn millions of other Indians.',
        },
        {
            '@type': 'ListItem',
            position: 5,
            name: 'Secure your accounts',
            description: 'Change all passwords, UPI PIN, and enable two-factor authentication on email and banking portals immediately.',
        },
    ],
}

const breadcrumbSchema = breadcrumbListSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'Got Scammed? 30-Minute Recovery Guide', url: '/blog/got-scammed-online-india-what-to-do' },
])

const faqStructuredData = faqPageSchema([
    {
        question: 'What is the cybercrime helpline number in India?',
        answer:
            'The National Cybercrime Helpline number is 1930. It is available 24 hours a day, 7 days a week, completely free. Call immediately after any online fraud  time is critical for recovery.',
    },
    {
        question: 'Can I get my money back after a UPI scam?',
        answer:
            'Possibly, if you report within 30–60 minutes by calling 1930. The helpline can issue a lien on the receiving account. After 24 hours, recovery success drops dramatically as money moves through multiple accounts.',
    },
    {
        question: 'How do I file a cybercrime complaint online in India?',
        answer:
            'Go to cybercrime.gov.in and click "Report Cybercrime." You\'ll need the scammer\'s phone number or UPI ID, transaction reference numbers, approximate amount, and screenshots of conversations. You receive a complaint reference number at the end  keep it.',
    },
    {
        question: 'What should I do if I shared my Aadhaar with a scammer?',
        answer:
            'Call UIDAI helpline 1947 immediately and lock your Aadhaar biometrics at myaadhaar.uidai.gov.in. Also file a police complaint and monitor your CIBIL report for unauthorized loan applications.',
    },
    {
        question: 'Are there fake "money recovery" services that target scam victims?',
        answer:
            'Yes. Companies that charge upfront fees to "recover" scammed money are almost always scams themselves. Never pay anyone claiming they can recover your funds. Only report to official channels: 1930, cybercrime.gov.in, and your local police station.',
    },
])

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ScamRecoveryPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([articleStructuredData, recoveryStepsStructuredData, faqStructuredData, breadcrumbSchema])
                }}
            />
            <BlogLayout
                title="I Got Scammed Online  Here's Exactly What To Do in the Next 30 Minutes"
                description="Just got scammed? Every minute counts. Call 1930, freeze the transaction, file at cybercrime.gov.in. Act now, not tomorrow."
                publishedAt="2026-05-29T00:00:00.000Z"
                lastUpdated="2026-05-29T00:00:00.000Z"
                readTime="7 min"
                author="Rabinarayan Pradhan"
                authorUrl="/author/rabinarayan-pradhan"
                primaryTool={{ label: 'Report the scammer on RakshaAI', href: '/phone-number-checker' }}
                tags={['Scam Recovery', 'Cybercrime India', '1930 Helpline', 'Online Fraud']}
                slug="got-scammed-online-india-what-to-do"
                sidebar={
                    <SidebarScamRecovery
                        title="I Got Scammed Online  Here's Exactly What To Do in the Next 30 Minutes"
                        description="Just got scammed? Call 1930 now. Step-by-step scam recovery guide for India."
                    />
                }
            >

                {/* ── HERO IMAGE ────────────────────────────────────────────── */}
                <div className="not-prose mb-10 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                        src="/blog/got-scammed-online-india-what-to-do/scam-victim-shocked.webp"
                        alt="Woman shocked looking at her phone showing a fraudulent bank transaction of -$2,735"
                        width={1456}
                        height={816}
                        className="w-full object-cover"
                        priority
                    />
                    <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-2 mb-0 italic px-4 pb-3">
                        Every second counts after an online scam. The first 30 minutes are critical  here is exactly what to do.
                    </p>
                </div>

                {/* ── INTRO ─────────────────────────────────────────────────── */}
                <p>
                    You just realised you have been scammed online. Your hands are shaking. You are staring at a transaction
                    you did not authorise, or a website that just took your money and vanished. The panic is real  and
                    completely understandable.
                </p>

                <p>
                    But here is the most important thing you can read right now: <strong>the next 30 minutes could
                    determine whether you get your money back.</strong> India's cybercrime system has mechanisms to
                    freeze fraudulent transactions  but only if you act fast enough. This guide tells you exactly
                    what to do, in what order, right now.
                </p>

                {/* ── FEATURED SNIPPET BLOCK ────────────────────────────────── */}
                <div className="not-prose my-8 rounded-2xl border-2 border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/40 p-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-red-600 dark:text-red-400 mb-3">
                        If you were just scammed online in India, do this immediately:
                    </p>
                    <ol className="space-y-2.5 list-none">
                        {[
                            ['1', 'Call 1930  National Cybercrime Helpline, available 24/7, free'],
                            ['2', 'Call your bank and request a transaction hold or reversal'],
                            ['3', 'File a complaint at cybercrime.gov.in with all transaction details'],
                            ['4', 'Report the scammer\'s details at rakshaai.co to warn others'],
                            ['5', 'Change all passwords and UPI PIN immediately'],
                            ['6', 'Screenshot all conversations and transaction records'],
                        ].map(([num, text]) => (
                            <li key={num} className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-600 text-white text-[11px] font-bold flex items-center justify-center mt-0.5">
                                    {num}
                                </span>
                                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{text}</span>
                            </li>
                        ))}
                    </ol>
                    <p className="text-xs text-red-700 dark:text-red-400 mt-4 font-semibold">
                        Act within 30 minutes  recovery success drops significantly after 24 hours.
                    </p>
                </div>

                <hr />

                {/* ── THE 30-MINUTE TIMELINE ────────────────────────────────── */}
                <h2>The 30-Minute Recovery Timeline That Could Save Your Money</h2>

                {/* Full-width timeline image */}
                <div className="not-prose my-8 rounded-2xl overflow-hidden shadow-md">
                    <Image
                        src="/blog/got-scammed-online-india-what-to-do/30-minutes-recovery-steps.webp"
                        alt="The next 30 minutes can save your money  step-by-step scam recovery timeline for India"
                        width={1456}
                        height={816}
                        className="w-full object-cover"
                    />
                    <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-2 mb-0 italic px-4 pb-3">
                        After 24 hours, recovery success drops dramatically. Every minute in this window matters.
                    </p>
                </div>

                <p>
                    When a cybercrime is reported within 30 minutes, the National Cybercrime Helpline (1930) can issue
                    a lien on the receiving bank account  effectively freezing the funds before they are withdrawn
                    or transferred further. This is the mechanism that makes early reporting so critical.
                </p>

                <p>
                    After money moves through even one additional transfer, it becomes exponentially harder to trace.
                    After 24 hours, most scammers have already moved funds through multiple mule accounts across
                    different banks. The trail goes cold.
                </p>

                <hr />

                {/* ── STEP 1 ────────────────────────────────────────────────── */}
                <h2>Step 1 (0–5 Minutes): Call 1930  Cybercrime Helpline</h2>

                <p>
                    <strong>1930</strong> is India's National Cybercrime Helpline. It is free, available 24 hours a
                    day, 7 days a week, and specifically designed for exactly this situation. Call it before you do
                    anything else  before calling your bank, before filing a complaint, before anything.
                </p>

                <p>When you call, be ready to provide:</p>
                <ul>
                    <li>Your name and mobile number</li>
                    <li>The amount lost and when it happened</li>
                    <li>The scammer's phone number, UPI ID, or bank account (if you have it)</li>
                    <li>The transaction reference number from your bank or UPI app</li>
                </ul>

                <p>
                    The helpline officer will log your complaint and can initiate a request to freeze the receiving
                    account. You will receive a complaint number  write it down or screenshot it. You will need it
                    for follow-up.
                </p>

                <div className="not-prose my-4 p-4 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800">
                    <p className="text-sm font-semibold text-red-800 dark:text-red-300 m-0">
                        Do not call any other number first. Searching for a "cybercrime help number" on Google
                        can lead you to fake helplines run by scammers who target fraud victims a second time.
                        1930 is the only official number.
                    </p>
                </div>

                <hr />

                {/* ── STEP 2 ────────────────────────────────────────────────── */}
                <h2>Step 2 (5–10 Minutes): Call Your Bank</h2>

                <p>
                    While you or someone with you is calling 1930, start calling your bank. Use the number on the
                    back of your debit or credit card  never a number you find on Google at this moment. Tell them:
                </p>

                <ul>
                    <li>You were a victim of online fraud</li>
                    <li>The exact transaction amount, date, and time</li>
                    <li>The transaction reference number</li>
                    <li>You want to request a transaction hold or reversal</li>
                </ul>

                <p>
                    For UPI transactions: also open your UPI app (PhonePe, Google Pay, Paytm, or BHIM), find the
                    fraudulent transaction, and tap the dispute or report option inside the app. This creates a
                    parallel report with the UPI platform.
                </p>

                <hr />

                {/* ── STEP 3 ────────────────────────────────────────────────── */}
                <h2>Step 3 (10–20 Minutes): File at cybercrime.gov.in</h2>

                <p>
                    Go to <strong>cybercrime.gov.in</strong> and click "Report Cybercrime." Select the relevant
                    category (financial fraud, online fraud, etc.) and fill in the form with:
                </p>

                <ul>
                    <li>Your personal details (name, mobile, address)</li>
                    <li>The scammer's phone number, UPI ID, email, or website</li>
                    <li>Transaction reference numbers and amounts</li>
                    <li>Screenshots of conversations and payment records</li>
                </ul>

                <p>
                    At the end you receive a formal complaint reference number. This creates a legal record and
                    is required for your bank to process a chargeback or dispute claim. Keep this number safe.
                </p>

                {/* Full-width gather evidence image */}
                <div className="not-prose my-8 rounded-2xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-700">
                    <Image
                        src="/blog/got-scammed-online-india-what-to-do/gather-evidence-checklist.webp"
                        alt="Gather these documents before filing a cybercrime complaint in India  checklist"
                        width={900}
                        height={1100}
                        className="w-full object-contain"
                    />
                    <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-2 mb-0 italic px-4 pb-3">
                        Save all evidence to Google Drive immediately  even if your phone is lost, the complaint can still be filed.
                    </p>
                </div>

                <hr />

                {/* ── STEP 4 ────────────────────────────────────────────────── */}
                <h2>Step 4 (20–25 Minutes): Report on RakshaAI to Warn Others</h2>

                <p>
                    After handling the immediate recovery steps, report the scammer's details on{' '}
                    <Link href="/phone-number-checker">RakshaAI</Link>. This serves two purposes:
                </p>

                <ul>
                    <li>It adds the scammer's number, UPI ID, or website to our fraud database</li>
                    <li>Other Indians checking that number or website will immediately see your report</li>
                </ul>

                <p>
                    Many scam victims check a number on RakshaAI before sending money and are saved because
                    a previous victim reported it. Your report could prevent the same scammer from taking money
                    from someone else's parent, sibling, or colleague.
                </p>

                <hr />

                {/* ── STEP 5 ────────────────────────────────────────────────── */}
                <h2>Step 5 (25–30 Minutes): Secure Every Account the Scammer May Have Accessed</h2>

                <p>
                    Once the immediate reporting is done, act on your own accounts before the scammer can
                    do further damage:
                </p>

                <ul>
                    <li>Change your UPI PIN (in your UPI app settings)</li>
                    <li>Change your net banking password</li>
                    <li>Change the password on any email account that was involved</li>
                    <li>Enable two-factor authentication (2FA) everywhere it is available</li>
                    <li>If you shared any OTP, inform your bank that your account may be compromised</li>
                </ul>

                <hr />

                {/* ── AADHAAR SECTION ───────────────────────────────────────── */}
                <h2>Special Case: If You Shared Your Aadhaar with a Scammer</h2>

                <p>
                    This requires an additional step that most guides miss. Call the <strong>UIDAI helpline 1947</strong>{' '}
                    immediately and ask them to lock your Aadhaar biometrics. You can also do this yourself at{' '}
                    myaadhaar.uidai.gov.in under the "Lock/Unlock Biometrics" section.
                </p>

                <p>
                    Once biometrics are locked, no one can use your Aadhaar fingerprint or iris data to take a loan,
                    open a SIM, or verify an account  even if they have your Aadhaar number and a physical copy of
                    the card. Also monitor your CIBIL report over the next 30 days for any unauthorized loan
                    applications.
                </p>

                <hr />

                {/* ── SAVE THESE NUMBERS ────────────────────────────────────── */}
                <h2>Save These Numbers Now  Before You Need Them</h2>

                {/* Helplines infographic */}
                <div className="not-prose my-8 rounded-2xl overflow-hidden shadow-md">
                    <Image
                        src="/blog/got-scammed-online-india-what-to-do/save-these-numbers-india.webp"
                        alt="Save these numbers now  1930 cybercrime helpline, 1947 UIDAI helpline, cybercrime.gov.in, rakshaai.co"
                        width={1080}
                        height={1080}
                        className="w-full object-contain"
                    />
                    <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-2 mb-0 italic px-4 pb-3">
                        Save 1930 and 1947 in your contacts right now. You will be grateful you did.
                    </p>
                </div>

                <p>
                    Most people do not know these numbers until they need them urgently. By then, the panic of a scam
                    makes it hard to think clearly. Save these in your phone contacts right now:
                </p>

                <ul>
                    <li><strong>1930</strong>  National Cybercrime Helpline (24/7, free)</li>
                    <li><strong>1947</strong>  UIDAI Aadhaar Helpline (lock biometrics, report misuse)</li>
                    <li><strong>14448</strong>  RBI Ombudsman (banking and payment disputes)</li>
                    <li><strong>cybercrime.gov.in</strong>  bookmark it now</li>
                </ul>

                <hr />

                {/* ── RECOVERY SCAM WARNING ─────────────────────────────────── */}
                <h2>Warning: Fake "Money Recovery" Services Will Target You Next</h2>

                <p>
                    After a scam, many victims receive calls or messages from people claiming they can "recover"
                    lost money for an upfront fee. These are almost always second scams targeting the same victims.
                </p>

                <p>
                    No legitimate agency charges an upfront fee for fraud recovery. The only pathways to recovering
                    scammed money in India are:
                </p>

                <ul>
                    <li>The 1930 helpline lien mechanism (free)</li>
                    <li>Bank disputes and chargebacks (free)</li>
                    <li>Formal cybercrime complaints via cybercrime.gov.in (free)</li>
                    <li>Legal action through your local police or consumer courts (free for FIR)</li>
                </ul>

                <p>
                    If anyone contacts you offering to recover your money for a payment, hang up and report them
                    at 1930.
                </p>

                <hr />

                {/* ── FAQ ───────────────────────────────────────────────────── */}
                <h2>Frequently Asked Questions</h2>

                <h3>What is the cybercrime helpline number in India?</h3>
                <p>
                    The National Cybercrime Helpline number is <strong>1930</strong>. It is available 24 hours
                    a day, 7 days a week, completely free of charge. Call immediately after any online fraud 
                    time is critical for recovery. Save it in your contacts right now.
                </p>

                <h3>Can I get my money back after a UPI scam?</h3>
                <p>
                    Possibly, if you report within 30–60 minutes by calling 1930. The helpline can issue a lien
                    on the receiving account before the money is withdrawn. After 24 hours, recovery success drops
                    dramatically as scammers move funds through multiple mule accounts across different banks.
                </p>

                <h3>How do I file a cybercrime complaint online in India?</h3>
                <p>
                    Go to <strong>cybercrime.gov.in</strong> and click "Report Cybercrime." You will need the
                    scammer's phone number or UPI ID, transaction reference numbers, approximate amount, and
                    screenshots of conversations. You receive a complaint reference number at the end  keep it
                    for all follow-up communications with your bank.
                </p>

                <h3>What should I do if I shared my Aadhaar with a scammer?</h3>
                <p>
                    Call <strong>UIDAI helpline 1947</strong> immediately and lock your Aadhaar biometrics at
                    myaadhaar.uidai.gov.in. Also file a police complaint and monitor your CIBIL report for
                    unauthorized loan applications over the next 30–60 days.
                </p>

                <h3>Are there fake "money recovery" services that target scam victims?</h3>
                <p>
                    Yes, and they are extremely common. Companies or individuals that charge upfront fees to
                    "recover" scammed money are almost always running a second scam targeting the same victims.
                    Never pay anyone claiming they can recover your funds. Only use official channels: 1930,
                    cybercrime.gov.in, and your local police station.
                </p>

                <hr />

                {/* ── FINAL THOUGHTS ────────────────────────────────────────── */}
                <h2>Final Thoughts</h2>

                <p>
                    Getting scammed is not a reflection of your intelligence. India's online scammers are
                    professional, organised, and use sophisticated psychological tactics that work on anyone.
                    Millions of educated, careful people lose money every year.
                </p>

                <p>
                    What matters now is speed. The 30-minute window is real, the mechanisms exist, and the
                    helpline is waiting. If you are reading this after being scammed  stop reading and call
                    1930 right now. Come back and read the rest after.
                </p>

                <p>
                    And when you are ready, share this guide with your family. The person who most needs it
                    is probably the one who would never think to search for it.
                </p>

                {/* ── FINAL CTA ─────────────────────────────────────────────── */}
                <div className="not-prose my-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/60 p-8 text-center">
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">
                        Free Tool
                    </p>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                        Report the scammer or check any number
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 max-w-sm mx-auto">
                        Report the scammer's phone number, UPI ID, or website on RakshaAI to warn other Indians.
                        Check any suspicious number before you engage. Free, no sign-up required.
                    </p>
                    <Link
                        href="/phone-number-checker"
                        className="inline-flex items-center gap-2 px-7 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold text-sm rounded-full hover:bg-gray-700 dark:hover:bg-gray-100 transition-colors"
                    >
                        Report or check a number &rarr;
                    </Link>
                    <p className="text-gray-400 dark:text-gray-500 text-xs mt-4">
                        100% free &middot; No sign-up required &middot; Save 1930 in your contacts now
                    </p>
                </div>

            </BlogLayout>
        </>
    )
}
