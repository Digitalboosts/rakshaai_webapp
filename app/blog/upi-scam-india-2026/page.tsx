import { Metadata } from 'next'
import BlogLayout from '@/components/BlogLayout'
import Link from 'next/link'
import Image from 'next/image'
import { blogPostingSchema, faqPageSchema, breadcrumbListSchema, personSchema, jsonLd } from '@/lib/seo/schema'
import SidebarUpiScam from '@/components/blog/SidebarUpiScam'

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
    title: { absolute: '7 UPI Scams Draining Indian Bank Accounts in 2026 | RakshaAI' },
    description:
        'UPI scammers use 7 tricks: fake collect requests, QR code traps, SIM swaps, and more. Know each before it costs you lakhs. Free UPI fraud check.',
    keywords:
        'UPI scam India 2026, UPI collect request fraud, fake QR code scam India, SIM swap fraud India, UPI phishing link, UPI PIN scam, how to check UPI fraud, UPI safety tips India',
    authors: [{ name: 'Rabinarayan Pradhan', url: 'https://www.linkedin.com/in/rabinarayan-pradhan-14ab9422b/' }],
    robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
    openGraph: {
        title: '7 UPI Scam Tricks Draining Indian Bank Accounts Right Now',
        description:
            'Fake collect requests. QR code traps. SIM swaps. Know all 7 UPI scam tricks before scammers target you.',
        type: 'article',
        siteName: 'RakshaAI',
        publishedTime: '2026-05-22T00:00:00.000Z',
        modifiedTime: '2026-06-04T00:00:00.000Z',
        tags: ['UPI scam', 'UPI fraud India', 'QR code scam', 'SIM swap', 'cybercrime India 2026'],
        url: 'https://rakshaai.co/blog/upi-scam-india-2026',
        images: [
            {
                url: '/blog/upi-scam-india-2026/upi-scam-warning.webp',
                width: 1400,
                height: 900,
                alt: 'UPI scam warning India 2026, phone surrounded by cash notes',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: '7 UPI Scam Tricks Active in India Right Now',
        description:
            'Fake collect requests, QR code traps, SIM swaps. Know all 7 tricks before you become the next victim. Share with family.',
        images: ['/blog/upi-scam-india-2026/upi-scam-warning.webp'],
    },
    alternates: {
        canonical: 'https://rakshaai.co/blog/upi-scam-india-2026',
    },
}

// ─── Structured Data ─────────────────────────────────────────────────────────
const articleStructuredData = blogPostingSchema({
    headline: '7 UPI Scam Tricks Draining Indians Bank Accounts Right Now',
    description:
        'The 7 most common UPI fraud tactics active in India in 2026, with exact steps to protect yourself.',
    url: '/blog/upi-scam-india-2026',
    image: '/blog/upi-scam-india-2026/upi-scam-warning.webp',
    datePublished: '2026-05-22T00:00:00.000Z',
    dateModified: '2026-06-04T00:00:00.000Z',
    author: personSchema({ name: 'Rabinarayan Pradhan', jobTitle: 'Cybersecurity Writer', url: '/author/rabinarayan-pradhan', image: '/authors/rabinarayan-pradhan.jpeg', sameAs: ['https://www.linkedin.com/in/rabinarayan-pradhan-14ab9422b/'] }),
    section: 'UPI Fraud',
    keywords: ['UPI scam India 2026', 'UPI collect request fraud', 'fake QR code scam', 'SIM swap India'],
})

const breadcrumbSchema = breadcrumbListSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'UPI Scam Alert 2026', url: '/blog/upi-scam-india-2026' },
])

const faqStructuredData = faqPageSchema([
    {
        question: 'What is a UPI collect request scam?',
        answer:
            'A scammer sends you a UPI collect request that looks like an incoming payment. When you tap Accept, you actually authorize a payment OUT of your account. Always check the direction before approving any UPI request.',
    },
    {
        question: 'What should I do if I approved a fake UPI collect request?',
        answer:
            'Call 1930 immediately. Also contact your bank and raise a dispute in your UPI app on the specific transaction. Speed is critical. The first 30 minutes have the highest recovery success rate.',
    },
    {
        question: 'Can I get my money back if I was UPI scammed?',
        answer:
            'Possibly, if you call 1930 within 30 to 60 minutes of the fraud. The cybercrime helpline can flag the destination account. After 24 hours, recovery becomes significantly harder.',
    },
    {
        question: 'Is scanning a QR code safe in UPI?',
        answer:
            'Scanning someone else\'s QR code means YOU are paying THEM. To receive money, you share YOUR OWN QR code. Never scan a code someone sends you claiming it will send you money. That is a scam.',
    },
    {
        question: 'What is SIM swap fraud in UPI?',
        answer:
            'Scammers visit your telecom operator with fake documents to get a new SIM with your number. They then receive your OTPs and can access your UPI accounts. If your phone suddenly loses signal, call your telecom operator from another phone immediately.',
    },
])

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function UpiScamPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLd([articleStructuredData, faqStructuredData, breadcrumbSchema]) }}
            />
            <BlogLayout
            title="UPI Scam Alert: 7 Tricks Draining Indians' Bank Accounts in 2026"
            description="UPI scammers are using 7 specific tricks right now, from fake collect requests to QR code traps. Know each one before it costs you lakhs."
            publishedAt="2026-05-22T00:00:00.000Z"
            lastUpdated="2026-06-04T00:00:00.000Z"
            readTime="9 min"
            author="Rabinarayan Pradhan"
            authorUrl="/author/rabinarayan-pradhan"
            primaryTool={{ label: 'Check a UPI ID for fraud reports', href: '/upi-id-checker' }}
            tags={['UPI Fraud', 'Scam Alerts', 'Cybercrime India', 'Digital Payments']}
            slug="upi-scam-india-2026"
            sidebar={<SidebarUpiScam title="UPI Scam Alert: 7 Tricks Draining Indians' Bank Accounts in 2026" description="UPI scammers are using 7 specific tricks right now, from fake collect requests to QR code traps. Know each one before it costs you lakhs." />}
        >

            {/* ── HERO IMAGE ────────────────────────────────────────────── */}
            <div className="not-prose mb-10 rounded-2xl overflow-hidden shadow-lg">
                <Image
                    src="/blog/upi-scam-india-2026/upi-scam-warning.webp"
                    alt="UPI scam warning India 2026, phone with fraud alert surrounded by cash"
                    width={1400}
                    height={900}
                    className="w-full object-cover"
                    priority
                />
                <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-2 mb-0 italic px-4 pb-3">
                    UPI fraud drained over Rs 485 crore from Indian bank accounts in 2024 alone. These 7 tricks are still active in 2026.
                </p>
            </div>

            {/* ── INTRO ─────────────────────────────────────────────────── */}
            <p>
                India processes over 18 billion UPI transactions every month. Scammers know this, and they have
                developed a precise, repeatable playbook for stealing money through UPI. The worst part? Most
                victims do not realise they have been scammed until the money is already gone.
            </p>

            <p>
                This guide covers every active <strong>UPI scam in India in 2026</strong>, with the exact red
                flags for each one. Read it once. Share it with your parents. It could save your family lakhs.
            </p>

            {/* ── FEATURED SNIPPET BLOCK ────────────────────────────────── */}
            <div className="not-prose my-8 rounded-2xl border-2 border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-950/40 p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-orange-600 dark:text-orange-400 mb-3">
                    The 7 active UPI scams in India right now
                </p>
                <ol className="space-y-2.5 list-none">
                    {[
                        ['1', 'Fake collect request (you approve a payment out, not in)'],
                        ['2', 'Fake customer care numbers from Google search'],
                        ['3', 'Screen share or AnyDesk remote access scam'],
                        ['4', 'Fake QR code sent by scammers ("scan to receive money")'],
                        ['5', 'SIM swap attack (your number is ported to the scammer\'s device)'],
                        ['6', 'UPI phishing links sent via SMS or WhatsApp'],
                        ['7', 'Fake payment screenshots sent by buyers'],
                    ].map(([num, text]) => (
                        <li key={num} className="flex items-start gap-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500 text-white text-[11px] font-bold flex items-center justify-center mt-0.5">
                                {num}
                            </span>
                            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{text}</span>
                        </li>
                    ))}
                </ol>
                <p className="text-xs text-orange-700 dark:text-orange-400 mt-4 font-semibold">
                    If you have already been scammed via UPI, call 1930 immediately.
                </p>
            </div>

            <hr />

            {/* ── SCAM 1 ────────────────────────────────────────────────── */}
            <h2>Scam 1: Fake UPI Collect Request Fraud</h2>

            {/* Float right: fake collect request image */}
            <div className="not-prose float-right ml-6 mb-4 w-44 sm:w-52 md:w-64 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                <Image
                    src="/blog/upi-scam-india-2026/fake-collect-request.webp"
                    alt="Fake UPI collect request screen showing Payment Request from Prize Fund India"
                    width={900}
                    height={1200}
                    className="w-full object-contain"
                />
                <p className="text-[10px] text-center text-gray-500 dark:text-gray-400 italic px-3 py-2 bg-white dark:bg-gray-800">
                    This request drains money OUT of your account when you tap Accept.
                </p>
            </div>

            <p>
                This is the most common UPI scam in India and the most misunderstood. A scammer sends you a
                <strong> UPI collect request</strong> that looks identical to a payment notification. The screen
                shows an amount coming in, a sender name, and an Accept button.
            </p>

            <p>
                When you tap Accept, you do not receive money. <strong>You authorise a payment out of your own
                account.</strong> The funds go directly to the scammer.
            </p>

            <p>How scammers set up the trap:</p>
            <ul>
                <li>They contact you as a buyer on OLX, Facebook Marketplace, or Quikr</li>
                <li>They say they will pay via UPI and ask you to accept the request</li>
                <li>The request arrives and looks exactly like an incoming payment</li>
                <li>You enter your UPI PIN thinking you are confirming receipt</li>
                <li>Your money is gone</li>
            </ul>

            <p>
                <strong>The rule:</strong> You never need to enter your UPI PIN to receive money. If any screen
                asks for your PIN when you are expecting to get paid, stop immediately.
            </p>

            <div className="clear-both" />

            <hr />

            {/* ── SCAM 2 ────────────────────────────────────────────────── */}
            <h2>Scam 2: Fake Customer Care Numbers from Google Search</h2>

            <p>
                You search for "PhonePe customer care number" or "Google Pay helpline India" on Google. The top
                result is a number that looks official. You call it. A helpful voice answers, asks for your UPI
                ID, says they need to verify your account, and sends you a collect request to "confirm".
            </p>

            <p>
                By the time you realise it was a scam, your account has been emptied.
            </p>

            <p>
                Scammers run paid Google ads with fake customer care numbers and also seed them across
                justdial, sulekha, and WhatsApp groups. These numbers change every few days. There is no
                official UPI customer care number that you should be calling proactively.
            </p>

            <p>
                <strong>The rule:</strong> All UPI support happens inside your app. PhonePe, Google Pay, Paytm,
                and BHIM all have in-app help and dispute sections. Never call a number you found on Google
                for UPI help.
            </p>

            <hr />

            {/* ── SCAM 3 ────────────────────────────────────────────────── */}
            <h2>Scam 3: Screen Share and Remote Access Scam (AnyDesk, TeamViewer)</h2>

            <p>
                A caller pretending to be bank customer support says there is a problem with your account and
                asks you to download AnyDesk or QuickSupport to let them fix it. Once you grant access,
                they can see everything on your screen, including your UPI app, bank app, and any OTP that
                arrives.
            </p>

            <p>
                In documented cases, scammers have used this access to:
            </p>
            <ul>
                <li>Open your UPI app and initiate transfers while watching your OTP arrive</li>
                <li>See your banking credentials typed in real time</li>
                <li>Screenshot your account details, Aadhaar, and PAN</li>
            </ul>

            <p>
                <strong>The rule:</strong> No legitimate bank, UPI app, or telecom company will ever ask you to
                install a screen sharing app. If anyone on a call asks you to download AnyDesk, TeamViewer,
                or QuickSupport, end the call immediately and report it to 1930.
            </p>

            <hr />

            {/* ── SCAM 4 ────────────────────────────────────────────────── */}
            <h2>Scam 4: Fake QR Code Sent by Scammers ("Scan to Receive Money")</h2>

            <p>
                This scam exploits one simple fact that most UPI users do not know: scanning a QR code always
                means you are paying, not receiving.
            </p>

            {/* Full-width QR explainer image */}
            <div className="not-prose my-8 rounded-2xl overflow-hidden shadow-md">
                <Image
                    src="/blog/upi-scam-india-2026/qr-code-scam-explainer.webp"
                    alt="How the fake QR code scam works in India, scammer sends QR and victim pays instead of receiving"
                    width={1400}
                    height={800}
                    className="w-full object-cover"
                />
                <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-2 mb-0 italic px-4 pb-3">
                    The scammer sends a QR code claiming it will "send you money." In reality, scanning it sends money from you to them.
                </p>
            </div>

            <p>
                The scam works like this: a seller receives a message from a "buyer" who says they want to pay
                Rs 5,000 and sends a QR code with a note saying "scan this to receive your payment." The seller
                scans it, enters their UPI PIN, and pays Rs 5,000 to the scammer instead of receiving it.
            </p>

            <p>
                <strong>The rule:</strong> To receive money, you show your QR code or share your UPI ID. You
                never scan a QR code that someone else sends you. Any message that says "scan this to get paid"
                is a scam, without exception.
            </p>

            <hr />

            {/* ── SCAM 5 ────────────────────────────────────────────────── */}
            <h2>Scam 5: SIM Swap Attack</h2>

            <p>
                SIM swap is a sophisticated attack where scammers visit a telecom store with your details
                (obtained from data breaches or social engineering) and request a new SIM for your number,
                claiming theirs was lost or damaged.
            </p>

            <p>
                Once your number is ported to their SIM:
            </p>
            <ul>
                <li>Your phone loses all signal</li>
                <li>Every OTP meant for you now goes to the scammer</li>
                <li>They reset your UPI PIN using your bank OTP</li>
                <li>They drain your linked accounts before you even notice your phone has no service</li>
            </ul>

            <p>
                <strong>Warning signs:</strong> Your phone suddenly has no network, you cannot make or receive
                calls, and your number stops working entirely.
            </p>

            <p>
                <strong>The rule:</strong> If your phone loses signal without explanation, call your telecom
                operator immediately from another phone. Ask if a SIM replacement was requested. Do not
                assume it is a tower issue.
            </p>

            <hr />

            {/* ── SCAM 6 ────────────────────────────────────────────────── */}
            <h2>Scam 6: UPI Phishing Links via SMS and WhatsApp</h2>

            <p>
                You receive an SMS saying your UPI account has been blocked, or your KYC needs to be updated,
                with a link to reactivate. The link opens a website that looks exactly like PhonePe, Google Pay,
                or your bank. You enter your UPI ID and PIN. Those credentials go straight to the scammer.
            </p>

            <p>
                In 2026, scammers have upgraded these messages to include your partial mobile number, name,
                and bank name (sourced from data leaks) to make them look credible.
            </p>

            <p>Common phishing pretexts used in India:</p>
            <ul>
                <li>"Your UPI is blocked. Complete KYC to continue" (with a link)</li>
                <li>"You have received Rs 10,000. Click to claim" (with a link)</li>
                <li>"Your Google Pay account shows suspicious activity. Verify now" (with a link)</li>
                <li>"NPCI has suspended your UPI. Update in 24 hours to avoid permanent block" (with a link)</li>
            </ul>

            <p>
                <strong>The rule:</strong> UPI apps and banks never ask you to enter your PIN on a website.
                Your PIN is only entered inside the official app on your phone. Paste any suspicious link
                into <Link href="/website-safety-checker">RakshaAI</Link> before clicking it.
            </p>

            <hr />

            {/* ── SCAM 7 ────────────────────────────────────────────────── */}
            <h2>Scam 7: Fake Payment Screenshots Sent by Buyers</h2>

            <p>
                If you sell anything online or run a small business, this scam targets you directly. A buyer
                sends a screenshot of a payment confirmation showing your UPI ID and the exact amount. The
                screenshot looks 100% real. You hand over the goods or complete the service. No payment ever
                arrived.
            </p>

            <p>
                Scammers use edited screenshots or screenshot generator apps to create convincing fake payment
                proofs. The NPCI name, tick marks, and transaction IDs can all be fabricated.
            </p>

            <p>
                <strong>The rule:</strong> Never trust a screenshot as proof of payment. Always verify by
                checking your bank account balance or transaction history in your UPI app before releasing
                any goods or service. A genuine buyer will wait the 30 seconds it takes you to confirm.
            </p>

            <hr />

            {/* ── SAFETY RULES ──────────────────────────────────────────── */}
            <h2>The 7 UPI Safety Rules Every Indian Must Know</h2>

            {/* Float right: safety rules infographic */}
            <div className="not-prose float-right ml-6 mb-4 w-48 sm:w-56 md:w-72 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                <Image
                    src="/blog/upi-scam-india-2026/upi-safety-rules.webp"
                    alt="7 UPI safety rules infographic by RakshaAI India"
                    width={900}
                    height={1400}
                    className="w-full object-contain"
                />
                <p className="text-[10px] text-center text-gray-500 dark:text-gray-400 italic px-3 py-2">
                    Save and share this with family members who use UPI.
                </p>
            </div>

            <ol>
                <li>
                    <strong>Never share your UPI PIN with anyone.</strong> No bank, app, or customer care
                    agent will ever ask for it.
                </li>
                <li>
                    <strong>Scan QR to pay. Share QR to receive.</strong> These are the only two directions.
                    No exceptions.
                </li>
                <li>
                    <strong>Verify payment in your own app before delivering.</strong> Open your app, check
                    your balance, confirm the credit. Only then proceed.
                </li>
                <li>
                    <strong>Suspicious link? Check on RakshaAI first.</strong> Paste any UPI-related URL
                    at <Link href="/website-safety-checker">rakshaai.co/website-safety-checker</Link> before opening it.
                </li>
                <li>
                    <strong>Sudden signal loss? Call your telecom immediately.</strong> Use another phone and
                    ask if a SIM replacement was issued for your number.
                </li>
                <li>
                    <strong>No bank ever asks for OTP over the phone.</strong> End any call where someone
                    asks you to read out an OTP.
                </li>
                <li>
                    <strong>Report scams at 1930 within 30 minutes.</strong> This is the window where money
                    recovery is most likely.
                </li>
            </ol>

            <div className="clear-both" />

            <hr />

            {/* ── WHAT TO DO IF SCAMMED ─────────────────────────────────── */}
            <h2>What to Do the Moment You Realise You Have Been Scammed</h2>

            <div className="not-prose my-6 p-4 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800">
                <p className="text-sm font-semibold text-red-800 dark:text-red-300 m-0">
                    Time is critical. The first 30 minutes after a UPI scam have the highest recovery rate. Call 1930 before doing anything else.
                </p>
            </div>

            <ol>
                <li>
                    <strong>Call 1930 immediately.</strong> This is India's National Cybercrime Helpline.
                    Explain you were UPI scammed and give the transaction details. They can flag the
                    destination account before the money is withdrawn.
                </li>
                <li>
                    <strong>Contact your bank.</strong> Call your bank's fraud helpline and report the
                    transaction. Ask them to raise a dispute or freeze the transfer if possible.
                </li>
                <li>
                    <strong>Raise a dispute in your UPI app.</strong> Open the transaction in PhonePe,
                    Google Pay, or BHIM and tap the dispute option.
                </li>
                <li>
                    <strong>File at cybercrime.gov.in.</strong> A formal complaint creates a legal record
                    and supports the recovery process.
                </li>
                <li>
                    <strong>Check the UPI ID on RakshaAI.</strong> Your report at <Link href="/upi-id-checker">rakshaai.co/upi-id-checker</Link> protects
                    other people from the same fraud.
                </li>
            </ol>

            <hr />

            {/* ── UPI FRAUD SCALE: YEAR-WISE STATS ─────────────────────── */}
            <h2>The Scale of UPI Fraud in India: Official Year-wise Data (FY 2022–2026)</h2>

            <p>
                The numbers below come from the Finance Ministry&apos;s written replies to Parliament (Lok Sabha,
                November 25, 2024 and Rajya Sabha, November 27, 2024), cross-referenced with NPCI and RBI data.
                This is the most authoritative public record of UPI fraud in India.
            </p>

            <div className="not-prose overflow-x-auto my-8 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <table className="w-full text-sm text-left">
                    <thead>
                        <tr className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                            <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap">Financial Year</th>
                            <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Fraud Cases</th>
                            <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Amount Lost</th>
                            <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">YoY Change</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                        {[
                            { fy: 'FY 2021–22', cases: '4.07 lakh', lost: '₹242 crore', change: 'Baseline year', badge: 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400' },
                            { fy: 'FY 2022–23', cases: '7.25 lakh', lost: '₹573 crore', change: '+78% cases / +137% loss', badge: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-400' },
                            { fy: 'FY 2023–24', cases: '13.42 lakh', lost: '₹1,087 crore', change: '+85% cases / +90% loss (peak)', badge: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400' },
                            { fy: 'FY 2024–25', cases: '12.64 lakh', lost: '₹981 crore', change: 'First decline after peak', badge: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-400' },
                            { fy: 'FY 2025–26*', cases: '16.29 lakh (partial)', lost: '₹1,226 crore (partial)', change: '* Through Mar 15, 2026', badge: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400' },
                        ].map((row) => (
                            <tr key={row.fy} className="bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                <td className="px-4 py-3 font-bold text-gray-900 dark:text-white whitespace-nowrap">{row.fy}</td>
                                <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{row.cases}</td>
                                <td className="px-4 py-3 font-semibold text-red-600 dark:text-red-400">{row.lost}</td>
                                <td className="px-4 py-3">
                                    <span className={`inline-block px-2 py-0.5 rounded text-xs font-semibold ${row.badge}`}>
                                        {row.change}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400 -mt-4 mb-2">
                Cumulative (FY22 to Sep 2024): <strong>33.32 lakh cases, ₹2,630 crore lost</strong>  Finance Ministry statement, Parliament.
                Note: 51% of UPI fraud victims do not report (LocalCircles survey, June 2025), so actual numbers are likely 2× official figures.
            </p>

            <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
                Source: Finance Ministry Lok Sabha written reply, Nov 25, 2024 · Rajya Sabha, Nov 27, 2024 · NPCI Annual Data · RBI Annual Report 2023-24.
            </p>

            {/* ── REAL CASE CARDS ───────────────────────────────────────── */}
            <h2>Documented UPI Scam Cases Reported by Indian News Outlets</h2>

            <p>
                These are real, verified incidents covered by India&apos;s leading publications. Each case
                shows a different scam type  the same tricks explained above, now with real victims and real amounts.
            </p>

            <div className="not-prose space-y-4 my-8">
                {[
                    {
                        num: '01', city: 'Gorakhpur · 2023', amount: '₹24 Crore', tag: 'Fake UPI Screenshot',
                        title: 'Real Estate Firm Defrauded ₹24 Crore via Forged UPI Payment Proof',
                        desc: 'Accused edited UPI transaction screenshots to show full amounts while actually transferring only ₹1 per transaction. The scheme ran for ~3 months before being caught in a year-end audit. 21 persons named, accused from Jharkhand and Bihar.',
                        source: 'The420.in',
                        url: 'https://the420.in/gorakhpur-real-estate-upi-fake-screenshot-scam-24-crore-21-accused/',
                    },
                    {
                        num: '02', city: 'Lucknow · April 2024', amount: '₹85 Lakh', tag: 'Digital Arrest  1st Conviction',
                        title: 'Lucknow Physician Held in Digital Arrest for 10 Days, Scammer Gets 7 Years',
                        desc: 'Dr. Soumya Gupta (KGMU) was psychologically trapped for 10 days by a fake customs officer claiming a parcel in her name had MDMA. She transferred ₹85 lakh across 4 accounts. The accused was convicted within 14 months  India\'s first ever digital arrest conviction.',
                        source: 'The420.in',
                        url: 'https://the420.in/up-police-convicts-digital-arrest-scammer-in-rs-85-lakh-cyber-fraud-case/',
                    },
                    {
                        num: '03', city: 'Hyderabad · Sep 2024', amount: '₹4 Crore', tag: 'UPI Chargeback Reversal',
                        title: '13-Member Gang Defrauds Bajaj Electronics via UPI Chargeback Reversal',
                        desc: 'The gang bought high-value appliances from Bajaj Electronics showrooms and paid via UPI. Accomplices in Rajasthan then filed fraudulent chargeback complaints  banks reversed the payments while the gang kept the goods. 13 arrested, ages 20-25, ₹1.72 lakh cash seized.',
                        source: 'News9Live',
                        url: 'https://www.news9live.com/city/hyderabad/hyderabad-upi-fraud-13-arrested-after-cheating-bajaj-electronics-of-rs-4-crore-2687765',
                    },
                    {
                        num: '04', city: 'Mumbai (Kandivali) · Dec 2024', amount: '₹7.5 Crore', tag: 'SIM Swap',
                        title: 'Mumbai Firm Loses ₹7.5 Crore to SIM Swap; Cyber Police Freeze ₹4.65 Crore',
                        desc: 'Fraudsters convinced the telecom provider to link a private firm owner\'s number to their SIM. They then drained the company account via multiple rapid UPI/NEFT transfers. The victim called 1930 immediately  Mumbai Cyber Police froze ₹4.65 crore within 4 hours via the NCRP portal.',
                        source: 'The Print',
                        url: 'https://theprint.in/india/pvt-firm-owner-duped-of-rs-7-5-crore-in-sim-swap-fraud-cops-recover-rs-4-65-crore/2418269/',
                    },
                    {
                        num: '05', city: 'Bengaluru · Jan–May 2025', amount: '₹23.78 Lakh', tag: 'QR Code Swapped',
                        title: 'Hospital Staff Secretly Replaced Victoria Hospital UPI QR Codes with Personal Accounts',
                        desc: '8 contractual data-entry operators at Victoria Hospital\'s Infosys Lab replaced official UPI QR scanners at billing counters with personal QR codes. Patients paid blood test fees into private accounts. Discovered via internal audit. FIR filed at Visvesvarapuram police station.',
                        source: 'Medical Dialogues',
                        url: 'https://medicaldialogues.in/news/health/hospital-diagnostics/upi-fraud-8-contractual-employees-at-victoria-hospital-allegedly-divert-rs-23-lakh-164007',
                    },
                    {
                        num: '06', city: 'Dhanbad, Jharkhand · Jun 2025', amount: '₹2 Lakh', tag: 'Phishing Link',
                        title: 'Businessman Loses ₹2 Lakh After Clicking Link from Fake Doctor\'s Appointment Page',
                        desc: 'Ram Prasad Agrawal searched for a doctor online and called a fraudulent number indexed on a public search platform. The fake clinic assistant asked for a ₹5 registration fee via a link  he entered his UPI PIN on a spoofed page. Six transactions followed automatically, draining both Bank of India accounts.',
                        source: 'The420.in',
                        url: 'https://the420.in/dhanbad-cyber-fraud-doctor-appointment-scam-upi-pin/',
                    },
                ].map((c) => (
                    <div key={c.num} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-5 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
                            <div className="flex items-center gap-3">
                                <span className="text-xs font-bold text-gray-400 dark:text-gray-500 tabular-nums">{c.num}</span>
                                <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">{c.city}</span>
                            </div>
                            <div className="flex items-center gap-2 flex-wrap">
                                <span className="text-lg font-extrabold text-red-600 dark:text-red-400">{c.amount}</span>
                                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">{c.tag}</span>
                            </div>
                        </div>
                        <h3 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base leading-snug mb-2">{c.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-3">{c.desc}</p>
                        <div className="flex items-center justify-between flex-wrap gap-2">
                            <span className="text-xs text-gray-400 dark:text-gray-500">Source: {c.source}</span>
                            <a href={c.url} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                                Read full article →
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* ── COMPLETE CASE TIMELINE TABLE ──────────────────────────── */}
            <h2>Complete Timeline: Major UPI Scam Cases in India (2023–2025)</h2>

            <p>
                A date-wise chronicle of significant documented UPI fraud cases across India  spanning every major
                scam type, from SIM swaps and fake screenshots to phishing links and QR code replacements.
            </p>

            <div className="not-prose overflow-x-auto my-8 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <table className="w-full text-sm text-left">
                    <thead>
                        <tr className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                            <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap">Date</th>
                            <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Victim / City</th>
                            <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap">Amount Lost</th>
                            <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Scam Type</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                        {[
                            {
                                date: 'Mar 5, 2023',
                                victim: 'Shardul Nautiyal, senior journalist · Mira Road, Mumbai',
                                amount: '₹2.60 lakh',
                                type: 'Fake Tata Power customer care → Quick Support remote access app → two accounts drained',
                            },
                            {
                                date: 'Apr 3, 2023',
                                victim: 'Multiple victims · Mumbai (accused arrested from Ranchi)',
                                amount: 'Multiple',
                                type: 'Fake electricity bill SMS with malicious link  2 arrested, linked to cases in 5 states',
                            },
                            {
                                date: '2023',
                                victim: 'Real estate & stock firm (Vishwajeet Srivastava) · Gorakhpur, UP',
                                amount: '₹24 crore',
                                type: 'Fake UPI payment screenshots  forged transaction visuals sent to company accountant  21 accused',
                            },
                            {
                                date: 'Apr 2024',
                                victim: 'Dr. Soumya Gupta, KGMU physician · Lucknow, UP',
                                amount: '₹85 lakh',
                                type: 'Digital arrest  fake customs / CBI  10 days psychological captivity  4 accounts  first ever conviction (7 yrs)',
                            },
                            {
                                date: 'Aug 1–8, 2024',
                                victim: 'Dr. Ruchika Tandon, SGPGIMS assoc. professor · Lucknow, UP',
                                amount: '₹2.81 crore',
                                type: 'Digital arrest  fake TRAI / CBI  7 accounts  ₹27.88 lakh frozen by police',
                            },
                            {
                                date: 'Sep 9, 2024',
                                victim: 'Bajaj Electronics chain · Hyderabad, Telangana',
                                amount: '₹4 crore',
                                type: 'UPI chargeback reversal fraud  gang bought appliances then filed fake bank disputes  13 arrested aged 20–25',
                            },
                            {
                                date: 'Dec 23, 2024',
                                victim: 'Private firm owner · Kandivali, Mumbai',
                                amount: '₹7.5 crore',
                                type: 'SIM swap → OTP hijack → multiple rapid transfers  ₹4.65 Cr frozen within 4 hours via 1930',
                            },
                            {
                                date: '2024–25',
                                victim: 'Second-hand SUV buyer on OLX · Kharar, Punjab',
                                amount: '₹5 lakh',
                                type: 'Fake Indian Army officer on OLX  advance fees for shipping / clearance  1 arrested with fake army ID cards',
                            },
                            {
                                date: 'Feb 22, 2025',
                                victim: 'Ramesh Kumar Nirala · Muzaffarpur, Bihar',
                                amount: '₹95,332',
                                type: 'Fake electricity customer care (found via online search) → remote access app → 3 accounts drained',
                            },
                            {
                                date: 'Jan–May 2025',
                                victim: 'Patients of Victoria Hospital (govt.) · Bengaluru',
                                amount: '₹23.78 lakh',
                                type: 'QR code swap at hospital billing counter  8 DEO staff replaced official QR with personal accounts',
                            },
                            {
                                date: 'Jun 19–22, 2025',
                                victim: 'Ram Prasad Agrawal, businessman · Dhanbad, Jharkhand',
                                amount: '₹2 lakh',
                                type: 'Fake doctor appointment link  UPI PIN entered on spoofed page  6 transactions across two Bank of India accounts',
                            },
                            {
                                date: 'Sep 3, 2025',
                                victim: 'Rajkumar · Vikas Colony, Jhansi, UP',
                                amount: '₹4.5 lakh',
                                type: 'Fake Union Bank e-KYC APK sent via WhatsApp  installed malware gave full device control  drained in minutes',
                            },
                        ].map((row, i) => (
                            <tr key={i} className="bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                <td className="px-4 py-3 text-gray-500 dark:text-gray-400 whitespace-nowrap text-xs">{row.date}</td>
                                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 font-medium text-xs">{row.victim}</td>
                                <td className="px-4 py-3 font-bold text-red-600 dark:text-red-400 whitespace-nowrap">{row.amount}</td>
                                <td className="px-4 py-3 text-gray-600 dark:text-gray-400 text-xs">{row.type}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400 -mt-4 mb-8">
                Sources: The420.in, The Print, News9Live, ETV Bharat, Free Press Journal, Medical Dialogues, Devdiscourse, NewsMeter. All amounts as reported by respective news outlets.
            </p>

            <hr />

            {/* ── FAQ ───────────────────────────────────────────────────── */}
            <h2>Frequently Asked Questions</h2>

            <h3>What is a UPI collect request scam?</h3>
            <p>
                A scammer sends you a UPI collect request that looks like an incoming payment notification. When
                you tap Accept and enter your PIN, you actually authorise a payment out of your account, not
                into it. Always check whether a UPI notification says "Collect Request" at the top before
                approving anything.
            </p>

            <h3>What should I do if I approved a fake UPI collect request?</h3>
            <p>
                Call <strong>1930</strong> immediately. The first 30 minutes are critical. Also open your UPI
                app, find the transaction, and raise a dispute. Contact your bank's fraud helpline in parallel.
                File a complaint at <strong>cybercrime.gov.in</strong> to create an official record.
            </p>

            <h3>Can I get my money back if I was UPI scammed?</h3>
            <p>
                Possibly, if you report within 30 to 60 minutes of the fraud. The cybercrime helpline can
                flag the receiving account before the money is transferred further. After 24 hours, recovery
                becomes significantly harder as scammers move funds through multiple mule accounts.
            </p>

            <h3>Is scanning a QR code safe in UPI?</h3>
            <p>
                Scanning someone else's QR code means you are paying them. To receive money, you share your
                own QR code or UPI ID. Never scan a code that someone sends you claiming it will transfer
                money into your account. That is always a scam.
            </p>

            <h3>What is SIM swap fraud in UPI?</h3>
            <p>
                Scammers visit a telecom operator with fake documents to get a new SIM card issued for your
                phone number. Once they have your number, all OTPs meant for you arrive on their device.
                They use these to reset your UPI PIN and drain your bank accounts. If your phone suddenly
                shows no network, call your telecom provider from a different phone without delay.
            </p>

            <hr />

            {/* ── FINAL THOUGHTS ────────────────────────────────────────── */}
            <h2>Final Thoughts</h2>

            <p>
                UPI scams work because they exploit the speed that makes UPI useful. Transactions are instant,
                and scammers count on you making a split-second decision before you have time to think.
                The antidote is knowing the tricks before they are used on you.
            </p>

            <p>
                Share this article with at least one family member today, especially anyone who is new to UPI
                or runs a small business. The 7 rules above take 2 minutes to learn and can prevent a
                lifetime of regret.
            </p>

            {/* ── FINAL CTA ─────────────────────────────────────────────── */}
            <div className="not-prose my-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/60 p-8 text-center">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">
                    Free Tool
                </p>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    Got a suspicious UPI ID, number, or link?
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 max-w-sm mx-auto">
                    Check any UPI ID, phone number, or URL on RakshaAI instantly. No sign-up. No cost.
                    Results in under 5 seconds.
                </p>
                <Link
                    href="/upi-id-checker"
                    className="inline-flex items-center gap-2 px-7 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold text-sm rounded-full hover:bg-gray-700 dark:hover:bg-gray-100 transition-colors"
                >
                    Check a UPI ID now &rarr;
                </Link>
                <p className="text-gray-400 dark:text-gray-500 text-xs mt-4">
                    100% free &middot; No sign-up required &middot; Save 1930 in your contacts
                </p>
            </div>

        </BlogLayout>
        </>
    )
}
