import { Metadata } from 'next'
import BlogLayout from '@/components/BlogLayout'
import Link from 'next/link'
import Image from 'next/image'
import { blogPostingSchema, faqPageSchema, breadcrumbListSchema, personSchema, jsonLd } from '@/lib/seo/schema'
import SidebarFakeCustomerCare from '@/components/blog/SidebarFakeCustomerCare'

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
    title: { absolute: 'Fake Customer Care Scam: Don\'t Trust Google Results | RakshaAI' },
    description:
        'Scammers buy Google Ads with fake bank helpline numbers. Millions of Indians call them daily. Here\'s how to always find the REAL customer care number  and avoid losing your life savings.',
    keywords:
        'fake customer care number scam India, fake bank helpline India, Google scam number India, how to find real customer care number, SBI customer care fake number, OTP scam customer care, AnyDesk scam India, fake helpline India 2026',
    authors: [{ name: 'Rabinarayan Pradhan', url: 'https://www.linkedin.com/in/rabinarayan-pradhan-14ab9422b/' }],
    robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
    openGraph: {
        title: 'Fake Customer Care Numbers: Google Is Showing You Scammers\' Numbers',
        description:
            'Scammers buy Google Ads to appear as real bank helplines. Millions call them every day. Here\'s how to always find the real number.',
        type: 'article',
        siteName: 'RakshaAI',
        publishedTime: '2026-05-28T00:00:00.000Z',
        modifiedTime: '2026-05-28T00:00:00.000Z',
        tags: ['fake customer care India', 'fake bank helpline', 'Google scam India', 'OTP scam India'],
        url: 'https://rakshaai.co/blog/fake-customer-care-number-scam-india',
        images: [
            {
                url: '/blog/fake-customer-care-number-scam-india/fake-customer-care-hero.webp',
                width: 1672,
                height: 941,
                alt: 'Google search results for SBI customer care with a scam ad highlighted at the top',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Fake Customer Care Numbers: Google Is Showing You Scammers\' Numbers',
        description:
            'Scammers pay Google to appear at the top when you search for your bank helpline. Here\'s how to always find the real number and never call a scammer.',
        images: ['/blog/fake-customer-care-number-scam-india/fake-customer-care-hero.webp'],
    },
    alternates: {
        canonical: 'https://rakshaai.co/blog/fake-customer-care-number-scam-india',
    },
}

// ─── Structured Data ─────────────────────────────────────────────────────────
const articleStructuredData = blogPostingSchema({
    headline: 'Fake Customer Care Number Scam: Google Search Results Are Lying to You',
    description:
        'Scammers buy Google Ads targeting bank helpline searches. Learn how the fake customer care scam works, which banks are targeted, and the only 4 safe ways to find a real customer care number in India.',
    url: '/blog/fake-customer-care-number-scam-india',
    image: '/blog/fake-customer-care-number-scam-india/fake-customer-care-hero.webp',
    datePublished: '2026-05-28T00:00:00.000Z',
    dateModified: '2026-06-04T00:00:00.000Z',
    author: personSchema({ name: 'Rabinarayan Pradhan', jobTitle: 'Cybersecurity Writer', url: '/author/rabinarayan-pradhan', image: '/authors/rabinarayan-pradhan.jpeg', sameAs: ['https://www.linkedin.com/in/rabinarayan-pradhan-14ab9422b/'] }),
    section: 'Phone Scams',
    keywords: ['fake customer care India', 'fake bank helpline India', 'Google scam number India', 'OTP scam customer care'],
})

const breadcrumbSchema = breadcrumbListSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'Fake Customer Care Number Scam', url: '/blog/fake-customer-care-number-scam-india' },
])

const faqStructuredData = faqPageSchema([
    {
        question: 'How do scammers get to the top of Google for bank helpline searches?',
        answer:
            'Scammers purchase Google Ads targeting keywords like "SBI customer care number" or "HDFC helpline India." These paid ads appear above even the bank\'s own official website in search results.',
    },
    {
        question: 'Will my bank ever ask for my OTP over the phone?',
        answer:
            'Never. No bank, UPI app, government department, or legitimate company will ever ask for your OTP over a phone call. If anyone asks, hang up  they are a scammer.',
    },
    {
        question: 'Which banks are most targeted by fake customer care scams?',
        answer:
            'All major Indian banks are targeted  SBI, HDFC, ICICI, Axis, Bank of Baroda. Also targeted: PayTM, PhonePe, Google Pay, LIC, EPFO, and gas cylinder booking services.',
    },
    {
        question: 'Is AnyDesk safe to install for bank support?',
        answer:
            'No legitimate bank or UPI company requires you to install AnyDesk or any remote access tool. If a "support agent" asks you to install it, hang up immediately  it is a scam.',
    },
    {
        question: 'How can I verify a customer care number is real?',
        answer:
            'Paste the number into RakshaAI (rakshaai.co)  the AI will check it against a database of known scam numbers. Also compare it with the number on the back of your bank card or the bank\'s official website.',
    },
])

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function FakeCustomerCareScamPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLd([articleStructuredData, faqStructuredData, breadcrumbSchema]) }}
            />
            <BlogLayout
                title="Fake Customer Care Number Scam: Google Search Results Are Lying to You"
                description="Scammers buy Google Ads with fake bank helpline numbers. Millions of Indians call them daily. Here's how to always find the REAL customer care number."
                publishedAt="2026-05-28T00:00:00.000Z"
                lastUpdated="2026-05-28T00:00:00.000Z"
                readTime="8 min"
                author="Rabinarayan Pradhan"
                authorUrl="/author/rabinarayan-pradhan"
                primaryTool={{ label: 'Verify a customer care number for free', href: '/phone-number-checker' }}
                tags={['Phone Scams', 'Scam Alerts', 'Fake Helpline', 'Cybercrime India']}
                slug="fake-customer-care-number-scam-india"
                sidebar={<SidebarFakeCustomerCare title="Fake Customer Care Number Scam: Google Search Results Are Lying to You" description="Scammers buy Google Ads with fake bank helpline numbers. Millions of Indians call them daily. Here's how to always find the REAL customer care number." />}
            >

                {/* ── HERO IMAGE ────────────────────────────────────────────── */}
                <div className="not-prose mb-10 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                        src="/blog/fake-customer-care-number-scam-india/fake-customer-care-hero.webp"
                        alt="Google search results for SBI customer care number showing a scam ad highlighted at the top"
                        width={1672}
                        height={941}
                        className="w-full object-cover"
                        priority
                    />
                    <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-2 mb-0 italic px-4 pb-3">
                        A real search for "SBI customer care number"  the top result is a paid ad from scammers, not the bank. Millions of Indians click this every day.
                    </p>
                </div>

                {/* ── INTRO ─────────────────────────────────────────────────── */}
                <p>
                    You need to block your debit card. It is urgent. You search "SBI customer care number" on Google
                    and the first result looks perfect  a helpline number, a professional website, even an
                    "Ad" label you barely notice. You call. Someone picks up immediately and sounds completely official.
                </p>

                <p>
                    Within ten minutes, they have your account number, your OTP, and your life savings.
                </p>

                <p>
                    This is India's most widespread financial scam in 2026, and it is powered by one thing: the top of
                    Google search results. The number you called was never your bank. It was a criminal who
                    <strong> paid Google to appear there</strong>.
                </p>

                {/* ── FEATURED SNIPPET BLOCK ────────────────────────────────── */}
                <div className="not-prose my-8 rounded-2xl border-2 border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/40 p-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">
                        How to find the real customer care number of a bank in India
                    </p>
                    <ol className="space-y-2.5 list-none">
                        {[
                            ['1', 'Type the bank\'s official URL directly (e.g., sbi.co.in)  never trust search results'],
                            ['2', 'Check the back of your debit or credit card  the real number is printed there'],
                            ['3', 'Open your bank\'s official app and go to Help / Contact Us'],
                            ['4', 'Check your passbook\'s first page  official helpline numbers are listed there'],
                            ['5', 'Verify any unknown number on RakshaAI before calling'],
                        ].map(([num, text]) => (
                            <li key={num} className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white text-[11px] font-bold flex items-center justify-center mt-0.5">
                                    {num}
                                </span>
                                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{text}</span>
                            </li>
                        ))}
                    </ol>
                    <p className="text-xs text-blue-700 dark:text-blue-400 mt-4 font-semibold">
                        Never call a customer care number from Google Ads or any third-party website.
                    </p>
                </div>

                <hr />

                {/* ── HOW THE SCAM WORKS ────────────────────────────────────── */}
                <h2>How Scammers Get to the Top of Google</h2>

                {/* Float right: annotated Google search zones */}
                <div className="not-prose float-right ml-6 mb-4 w-52 sm:w-64 md:w-72 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                    <Image
                        src="/blog/fake-customer-care-number-scam-india/google-search-scam-zones.webp"
                        alt="Google search result showing DANGER ZONE ad at top, ALSO RISKY third-party blog, and ALWAYS USE official SBI website"
                        width={1672}
                        height={941}
                        className="w-full object-contain"
                    />
                    <p className="text-[10px] text-center text-gray-500 dark:text-gray-400 italic px-3 py-2 bg-white dark:bg-gray-800">
                        Only the official result (green border) is safe. Everything above it can be a trap.
                    </p>
                </div>

                <p>
                    Google Ads work on a bidding system. Anyone can pay to appear at the top of search results for any
                    keyword  including "SBI customer care number", "HDFC helpline", or "PhonePe customer support India".
                    The ads look nearly identical to organic results. The small "Ad" or "Sponsored" label is easy to miss,
                    especially on a mobile screen when you are already stressed about a financial problem.
                </p>

                <p>
                    Scammers invest ₹500–₹2,000 per day on these ads. A single successful call can net them ₹50,000 or
                    more. The return on investment makes it one of the most profitable fraud operations in India today.
                </p>

                <p>
                    There is also a second tier of danger: third-party blogs and aggregator websites that publish lists
                    of "customer care numbers" for dozens of banks and services. Many of these are either outdated
                    (the numbers changed and a scammer now operates the old one) or deliberately planted by fraudsters
                    to appear in organic search results. Even if the site looks legitimate, the number may lead to a
                    scammer.
                </p>

                <p>
                    <strong>The only safe numbers are the ones that come directly from the institution itself</strong> 
                    printed on your card, in your app, or on the bank's own official domain.
                </p>

                <div className="clear-both" />

                <hr />

                {/* ── THE SCAMMER'S SCRIPT ──────────────────────────────────── */}
                <h2>The Fake Customer Care Script  Word for Word</h2>

                {/* Float right: real agent vs scammer */}
                <div className="not-prose float-right ml-6 mb-4 w-52 sm:w-64 md:w-72 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                    <Image
                        src="/blog/fake-customer-care-number-scam-india/real-agent-vs-scammer.webp"
                        alt="Side-by-side comparison: real bank agent asks for account number and directs to official app; scammer asks for OTP, installs AnyDesk, and demands safe account transfer"
                        width={1448}
                        height={1086}
                        className="w-full object-contain"
                    />
                    <p className="text-[10px] text-center text-gray-500 dark:text-gray-400 italic px-3 py-2 bg-white dark:bg-gray-800">
                        Spot the difference before you say a word.
                    </p>
                </div>

                <p>
                    Understanding exactly what a scammer says makes the fraud immediately recognisable. Here is the
                    script they use, in roughly the order it unfolds:
                </p>

                <ul>
                    <li>
                        <strong>"Thank you for calling [Bank Name] customer care. How may I assist you today?"</strong>
                         The opening sounds identical to a real call centre. The voice may even have a professional
                        background noise of keyboard clicks and muffled voices.
                    </li>
                    <li>
                        <strong>"For security, I need to verify your account. Please provide your account number
                        and registered mobile number."</strong>  This feels routine. Real agents do ask this.
                        But a real agent stops here and verifies your identity through their own system  they
                        do not need to ask for anything else.
                    </li>
                    <li>
                        <strong>"I've sent an OTP to your registered number. Please share it to confirm your
                        identity."</strong>  This is the line that ends with you being defrauded. A real bank
                        agent never asks for your OTP. The OTP is your authorisation  sharing it is the same as
                        handing someone your ATM card and PIN together.
                    </li>
                    <li>
                        <strong>"To fix this issue remotely, please install AnyDesk [or QuickSupport]."</strong>
                         No legitimate bank operates remote support this way. Once AnyDesk is installed, the
                        scammer has full visual and control access to your screen, including your banking app.
                    </li>
                    <li>
                        <strong>"Your account has been compromised. Transfer ₹[amount] to this safe account for
                        protection and we'll reverse it in 24 hours."</strong>  There is no such thing as a
                        "safe account" in Indian banking. Once transferred, the money moves through a chain of
                        mule accounts in minutes and is gone.
                    </li>
                </ul>

                <div className="clear-both" />

                <hr />

                {/* ── WHICH BANKS ARE TARGETED ──────────────────────────────── */}
                <h2>Which Banks and Services Are Most Targeted</h2>

                <p>
                    Every institution with a large customer base is a target. Scammers chase search volume  the more
                    people searching for a helpline, the higher their return. These are the most heavily targeted:
                </p>

                <ul>
                    <li><strong>Banks:</strong> SBI, HDFC Bank, ICICI Bank, Axis Bank, Bank of Baroda, Punjab National Bank, Canara Bank, Kotak Mahindra Bank</li>
                    <li><strong>UPI and payment apps:</strong> PayTM, PhonePe, Google Pay, BHIM, Amazon Pay</li>
                    <li><strong>Insurance and government:</strong> LIC, IRDAI grievance, EPFO, Aadhaar (UIDAI), PAN services (NSDL/UTIITSL)</li>
                    <li><strong>Services people urgently need:</strong> Gas cylinder booking (Indane, HP Gas, Bharat Gas), electricity board helplines, IRCTC refund support</li>
                </ul>

                <p>
                    The urgency matters. Scammers specifically target situations where you need help fast 
                    a blocked card, a failed transaction, a gas connection problem. Panic reduces the mental
                    bandwidth needed to question whether the number is legitimate.
                </p>

                <hr />

                {/* ── 4 SAFE WAYS ───────────────────────────────────────────── */}
                <h2>4 Safe Ways to Find the Real Customer Care Number</h2>

                {/* Float right: 4 safe ways infographic */}
                <div className="not-prose float-right ml-6 mb-4 w-52 sm:w-64 md:w-72 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                    <Image
                        src="/blog/fake-customer-care-number-scam-india/safe-ways-to-find-customer-care.webp"
                        alt="4 safe ways to find real customer care numbers: back of debit card, official bank app Help section, first page of passbook, RakshaAI number checker"
                        width={1254}
                        height={1254}
                        className="w-full object-contain"
                    />
                    <p className="text-[10px] text-center text-gray-500 dark:text-gray-400 italic px-3 py-2 bg-white dark:bg-gray-800">
                        Four sources. All of them bypass Google entirely.
                    </p>
                </div>

                <p>
                    These four methods bypass Google entirely and connect you to numbers that are guaranteed to be
                    correct. Build the habit of using them before every helpline call.
                </p>

                <h3>1. The Back of Your Debit or Credit Card</h3>
                <p>
                    Every bank card has a customer care number printed on the reverse. This number is
                    issued directly by the bank and printed at the time of card production. It cannot be
                    manipulated by a Google Ad. For the majority of day-to-day needs  blocking a card,
                    reporting a failed transaction  this is the fastest and safest option.
                </p>

                <h3>2. Your Bank's Official App → Help / Support</h3>
                <p>
                    Every major Indian bank app (SBI YONO, HDFC Mobile Banking, ICICI iMobile, Axis Mobile,
                    Kotak 811) has a Help or Contact Us section. The numbers listed there are sourced directly
                    from the bank's server. Open the app you downloaded from the official Play Store or App
                    Store, navigate to Help, and call from there. No Google search required.
                </p>

                <h3>3. First Page of Your Bank Passbook</h3>
                <p>
                    If you have a savings account, the front pages of your passbook contain your branch
                    address, IFSC code, and customer care number. These were printed by the bank at account
                    opening. They are correct by definition.
                </p>

                <h3>4. RakshaAI  Verify Before You Call</h3>
                <p>
                    If you have already found a number and are unsure whether it is real, go to{' '}
                    <Link href="/phone-number-checker">rakshaai.co/phone-number-checker</Link> and paste the
                    number before you call. RakshaAI checks it against a database of reported scam numbers and
                    known fraudulent helplines. A red or amber result means do not call.
                </p>

                <div className="clear-both" />

                <hr />

                {/* ── WHAT BANKS NEVER ASK ──────────────────────────────────── */}
                <h2>What a Real Bank Agent Will Never Ask You</h2>

                <p>
                    This is the most important rule in this entire article. Memorise it and share it with
                    everyone in your family:
                </p>

                <div className="not-prose my-6 rounded-2xl border-2 border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/30 p-6">
                    <p className="text-sm font-bold text-red-700 dark:text-red-300 mb-4">
                        A real bank, UPI app, or government helpline will NEVER ask you for:
                    </p>
                    <ul className="space-y-2 list-none">
                        {[
                            'Your OTP (one-time password)',
                            'Your internet banking password or MPIN',
                            'Your ATM PIN',
                            'Your CVV (3-digit number on the back of your card)',
                            'To install AnyDesk, TeamViewer, or any remote access app',
                            'To transfer money to a "safe account" or "RBI-approved account"',
                            'A photo of your debit card (front or back)',
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-500 text-white text-[11px] font-bold flex items-center justify-center mt-0.5">✕</span>
                                <span className="text-sm text-gray-800 dark:text-gray-200">{item}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="text-sm font-semibold text-red-700 dark:text-red-300 mt-5">
                        The moment any caller asks for any of these, hang up. Then call your real bank using the number on your card.
                    </p>
                </div>

                <hr />

                {/* ── WHAT TO DO IF YOU CALLED ──────────────────────────────── */}
                <h2>What to Do If You Already Called a Fake Number</h2>

                <p>
                    Speed determines how much you recover. Every minute you wait, the fraudsters move money
                    further down a chain of mule accounts. Follow these steps in order:
                </p>

                <ol>
                    <li>
                        <strong>Call 1930 immediately.</strong> This is India's National Cybercrime Helpline. They
                        can flag the destination account for freezing. This is time-critical  do this before
                        anything else if money has already moved.
                    </li>
                    <li>
                        <strong>Call your real bank's fraud desk.</strong> Use the number on the back of your card
                        or your bank's official app. Ask them to freeze all outgoing transactions on your account.
                        Request a reversal if any unauthorised transaction has already gone through.
                    </li>
                    <li>
                        <strong>Change your internet banking password and MPIN immediately</strong> if you shared
                        any credentials. Log in from the official app and change everything.
                    </li>
                    <li>
                        <strong>Uninstall any remote access apps</strong> (AnyDesk, TeamViewer, QuickSupport)
                        if you installed them during the call.
                    </li>
                    <li>
                        <strong>File a complaint at cybercrime.gov.in</strong> and save the complaint reference number.
                        This creates an official record and triggers the banking fraud recovery process.
                    </li>
                    <li>
                        <strong>Report the number on RakshaAI and TrueCaller</strong> to protect other Indians from
                        calling the same number.
                    </li>
                </ol>

                {/* ── STATS TABLE ───────────────────────────────────────────── */}
                <h2>The Scale of Fake Customer Care Fraud in India: Official Data</h2>

                <p>
                    India&apos;s cybercrime helpline (1930) and the National Cybercrime Reporting Portal (NCRP / I4C)
                    have documented a dramatic rise in fake helpline and customer care fraud. Here is what official
                    MHA and Parliamentary data reveals.
                </p>

                <div className="not-prose overflow-x-auto my-8 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                    <table className="w-full text-sm text-left">
                        <thead>
                            <tr className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                                <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Year</th>
                                <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">NCRP Cybercrime Complaints</th>
                                <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">YoY Growth</th>
                                <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Total Reported Money Lost</th>
                                <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Source</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                            {[
                                { year: '2022', complaints: '10.29 lakh', growth: '', loss: 'Not officially broken out', src: 'MHA / NCRB' },
                                { year: '2023', complaints: '15.96 lakh', growth: '+55.15%', loss: '₹7,465 crore', src: 'MHA Lok Sabha Dec 2025' },
                                { year: '2024', complaints: '22.68 lakh', growth: '+42.08%', loss: '₹22,845 crore', src: 'MHA Lok Sabha Dec 2025' },
                                { year: 'Cumulative (2019–Nov 2024)', complaints: '53.90 lakh total', growth: '', loss: '₹31,534 crore', src: 'MHA / I4C' },
                            ].map((row) => (
                                <tr key={row.year} className="bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                    <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">{row.year}</td>
                                    <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{row.complaints}</td>
                                    <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{row.growth}</td>
                                    <td className="px-4 py-3 font-semibold text-red-600 dark:text-red-400">{row.loss}</td>
                                    <td className="px-4 py-3 text-gray-500 dark:text-gray-400 text-xs">{row.src}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="not-prose my-6 rounded-xl bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 p-5">
                    <p className="text-sm font-bold text-orange-800 dark:text-orange-300 mb-2">Fake Customer Care / Helpline Fraud  I4C Aggregate Data</p>
                    <ul className="space-y-1 text-sm text-orange-700 dark:text-orange-400">
                        <li>• <strong>1.73 lakh complaints</strong> specifically logged under fake customer care / fake helpline modus operandi (cumulative up to March 2026)</li>
                        <li>• <strong>₹2,100+ crore</strong> in cumulative losses from this category alone (I4C cited data)</li>
                        <li>• <strong>Top 5 states</strong> account for 61% of incidents: Maharashtra, Karnataka, Telangana, Delhi-NCR, West Bengal</li>
                        <li>• Fake customer care / refund fraud is consistently listed as one of the <strong>Top 5 sub-categories</strong> within all financial cybercrime</li>
                        <li>• Voice/phone scams (which subsume most fake helpline fraud) nearly <strong>doubled</strong> in share  from 15% to 35% of all fraud between Q1 and Q2 2024</li>
                    </ul>
                    <p className="text-xs text-orange-600 dark:text-orange-500 mt-3">Source: I4C / RTI Wiki aggregate data; MHA Lok Sabha response Dec 2025; DD News</p>
                </div>

                {/* ── CASE CARDS ────────────────────────────────────────────── */}
                <h2>Documented Fake Customer Care Scam Cases Reported by Indian News Outlets</h2>

                <p>
                    Every case below was reported by verified Indian news outlets. Victims range from school teachers
                    and retired officers to active police personnel  no one is immune when urgency overrides caution.
                </p>

                <div className="not-prose space-y-4 my-8">
                    {[
                        {
                            num: '01',
                            city: 'Delhi / Pan-India',
                            amount: '₹20 Crore',
                            tag: 'Mar 2022',
                            title: 'SBI Yono KYC Gang  8,000+ Victims, 23 Arrested',
                            desc: 'A 6-module operation sent bulk SMS claiming "KYC expired," directed victims to a counterfeit Yono app. Credentials and OTPs were captured in real time. 820 pre-existing complaints were linked to the Surat-Kolkata-Jamtara gang. Delhi Police IFSO seized 202 SIM cards and 58 mobiles.',
                            source: 'The Print',
                            url: 'https://theprint.in/india/bulk-sms-calls-fake-sbi-app-6-modules-how-kyc-fraudsters-looted-over-8000-victims/895059/',
                        },
                        {
                            num: '02',
                            city: 'Delhi / Deoghar, Jharkhand',
                            amount: '₹5.45 Lakh',
                            tag: 'Jan 2024',
                            title: 'Fake PNB Google Ad + RustDesk  Woman Loses ₹5.45 Lakh',
                            desc: 'Scammers ran Google Ads impersonating PNB customer care. When the victim called, she was told to download RustDesk (remote access tool). Fraudsters gained full phone control and drained accounts. Two men from Deoghar, Jharkhand were arrested  police linked a ₹15 lakh money trail and 8 total complaints to the pair.',
                            source: 'Business Today',
                            url: 'https://www.businesstoday.in/amp/technology/news/story/woman-gets-scammed-of-over-rs-5-lakh-due-to-simple-google-search-two-held-in-jharkhand-414541-2024-01-23',
                        },
                        {
                            num: '03',
                            city: 'Hyderabad',
                            amount: '₹4 Lakh',
                            tag: 'Nov 2024',
                            title: 'Retired Employee Loses ₹4 Lakh to Fake Medicine Delivery App Helpline',
                            desc: 'A retired employee searched Google for a medicine delivery app\'s customer care to update a delivery address. The fake agent said ₹2 was needed for the update, then instructed installation of a remote access app. Once installed, scammers accessed UPI PINs and banking OTPs and drained the account.',
                            source: 'Deccan Chronicle',
                            url: 'https://www.deccanchronicle.com/southern-states/telangana/retired-employee-falls-victim-to-fake-customer-care-scam-loses-rs-4-lakh-1837118',
                        },
                        {
                            num: '04',
                            city: 'Delhi–Gurugram',
                            amount: '₹2.6 Crore',
                            tag: 'Aug 2025',
                            title: 'Teleperformance Insider + SBI Card Impersonation  350+ Victims, 18 Arrested',
                            desc: 'Insiders at Teleperformance (handling SBI\'s Card Protection Plan) leaked customer data. The gang called cardholders posing as SBI officials claiming card blockage. Victims shared OTPs and CVVs; fraudsters purchased e-gift cards and flight tickets worth crores. Delhi Police IFSO arrested 18 people across Delhi, Gurugram, Mathura and Jaipur.',
                            source: 'The420.in',
                            url: 'https://the420.in/sbi-credit-card-fraud-2-6-crore-18-arrested/',
                        },
                        {
                            num: '05',
                            city: 'Ahmedabad',
                            amount: '₹87,000',
                            tag: 'Dec 2025',
                            title: 'Homemaker Loses ₹87,000 Trying to Get a ₹24 Refund from Zepto',
                            desc: 'After receiving wrong vegetables, a homemaker searched Google for Zepto customer support. Fraudsters had uploaded a fake helpline to Google Business listings. The "agent" sent a refund verification link. When she entered her banking details, multiple unauthorized transactions drained her account within minutes.',
                            source: 'The420.in',
                            url: 'https://the420.in/ahmedabad-woman-loses-87000-cyber-scam-over-24-rupee-refund/',
                        },
                        {
                            num: '06',
                            city: 'Chandigarh',
                            amount: '₹3.9 Lakh',
                            tag: '2025–2026',
                            title: 'Chandigarh Police Officer Loses ₹3.9 Lakh in Fake Hotstar Customer Care Scam',
                            desc: 'An ASI with Chandigarh Police received a Hotstar subscription renewal pop-up. When his payment of ₹149 failed, he searched Google for Hotstar support and called a fake number. During a 37-minute call, scammers extracted his email, password, and banking credentials  then purchased gold online. Imran Ansari from West Bengal was arrested after the cybercell traced the funds.',
                            source: 'The420.in',
                            url: 'https://the420.in/chandigarh-police-officer-loses-money-in-fake-customer-care-scam/',
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
                                <a href={c.url} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline">Read full article →</a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── TIMELINE TABLE ────────────────────────────────────────── */}
                <h2>Complete Timeline: Major Fake Customer Care Scam Cases in India</h2>

                <div className="not-prose overflow-x-auto my-8 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                    <table className="min-w-[720px] w-full text-sm text-left">
                        <thead>
                            <tr className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                                <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap w-24">Date</th>
                                <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300 w-32">City / State</th>
                                <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300 w-28">Amount Lost</th>
                                <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">What Happened</th>
                                <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300 w-24">Source</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                            {[
                                { date: 'Mar 2022', city: 'Delhi / Pan-India', amount: '₹20 Crore', what: 'Fake SBI Yono KYC SMS gang  bulk texts drove 8,000+ victims to counterfeit app; OTPs captured live. 23 arrested.', src: 'The Print', url: 'https://theprint.in/india/bulk-sms-calls-fake-sbi-app-6-modules-how-kyc-fraudsters-looted-over-8000-victims/895059/' },
                                { date: 'Oct 2023', city: '11 States', amount: 'Millions (USD)', what: 'Fake Amazon & Microsoft tech support  pop-ups → remote access → fake repair charges. CBI raids shut 70+ call centers.', src: 'The Record', url: 'https://therecord.media/india-scam-tech-support-call-centers-raids-amazon-microsoft' },
                                { date: 'Jan 2024', city: 'Delhi / Jharkhand', amount: '₹5.45 Lakh', what: 'Fake PNB Google Ad → victim told to install RustDesk → full phone control → account drained. 2 arrested in Deoghar.', src: 'Business Today', url: 'https://www.businesstoday.in/amp/technology/news/story/woman-gets-scammed-of-over-rs-5-lakh-due-to-simple-google-search-two-held-in-jharkhand-414541-2024-01-23' },
                                { date: '2024', city: 'Delhi / Jharkhand', amount: '₹10.8 Lakh', what: 'Spoofed SBI call claimed ₹588 fraud → fake KYC link deployed malicious APK → OTPs intercepted over 3 days. 3 arrested.', src: 'The420.in', url: 'https://the420.in/delhi-sbi-kyc-scam-108-lakh-jharkhand/' },
                                { date: 'Nov 2024', city: 'Hyderabad', amount: '₹4 Lakh', what: 'Fake medicine delivery app helpline asked ₹2 for address update → remote access app installed → UPI PIN stolen.', src: 'Deccan Chronicle', url: 'https://www.deccanchronicle.com/southern-states/telangana/retired-employee-falls-victim-to-fake-customer-care-scam-loses-rs-4-lakh-1837118' },
                                { date: '2024–25', city: 'Mumbai / Nationwide', amount: '₹2.7 Cr+', what: 'Fake Indane/HP/Bharat Gas LPG helplines  panic disconnection SMS → cloned portal → malicious APK → UPI drain. 3 arrested in Jharkhand.', src: 'The420.in', url: 'https://the420.in/lpg-booking-cyber-fraud-scam-fake-links-apps-india/' },
                                { date: 'Jun 2025', city: 'Muzaffarpur, Bihar', amount: 'Not disclosed', what: 'Fake electricity board helpline on Google → AnyDesk/TeamViewer install → banking credentials stolen. Multi-state syndicate traced.', src: 'The420.in', url: 'https://the420.in/muzaffarpur-cyber-fraud-electricity-bill-scam/' },
                                { date: 'Aug 2025', city: 'Delhi–Gurugram', amount: '₹2.6 Crore', what: 'Teleperformance insider leaked SBI cardholder data → impersonation calls → OTP + CVV → e-gift cards & flights. 18 arrested.', src: 'The420.in', url: 'https://the420.in/sbi-credit-card-fraud-2-6-crore-18-arrested/' },
                                { date: 'Sep 2025', city: 'Delhi / Jharkhand', amount: '₹13.86 Lakh', what: 'Fake payment app helpline → malicious app download → full account access. 2 arrested including mule account holder.', src: 'The Print', url: 'https://theprint.in/india/delhi-police-busts-fake-helpline-fraud-2-held/2735560/' },
                                { date: 'Dec 2025', city: 'Ahmedabad', amount: '₹87,000', what: 'Fake Zepto helpline on Google Business listing  ₹24 refund request → phishing link → multiple unauthorized transactions.', src: 'The420.in', url: 'https://the420.in/ahmedabad-woman-loses-87000-cyber-scam-over-24-rupee-refund/' },
                                { date: 'Apr 2026', city: 'Rudrapur, Uttarakhand', amount: '₹1.99 Lakh', what: 'Failed Jio recharge → fake Google helpline → scammer asked Google Pay PIN "to process recharge" → 2 transactions drained.', src: 'The420.in', url: 'https://the420.in/jio-recharge-fraud-teacher-duped-199-lakh-rudrapur-google-pay-pin/' },
                                { date: 'May 2026', city: 'Deoghar, Jharkhand', amount: 'Multiple victims', what: 'Gang impersonating Flipkart, Amazon, PhonePe, Airtel  vishing for OTPs and UPI credentials. 6 arrested; 12 SIMs seized.', src: 'The420.in', url: 'https://the420.in/deoghar-cyber-fraud-gang-fake-customer-care-pm-kisan-scam/' },
                                { date: 'May 2026', city: 'Prayagraj, UP', amount: '₹9 Lakh', what: 'Fake fan manufacturer helpline → trust built via WhatsApp → 4 RTGS/IMPS transfers executed in 40 minutes.', src: 'The420.in', url: 'https://the420.in/prayagraj-teacher-fake-customer-care-cyber-fraud-9-lakh/' },
                                { date: '2025–26', city: 'Chandigarh', amount: '₹3.9 Lakh', what: 'Chandigarh Police ASI called fake Hotstar helpline after ₹149 renewal failed  37-min vishing → banking credentials → gold purchased online.', src: 'The420.in', url: 'https://the420.in/chandigarh-police-officer-loses-money-in-fake-customer-care-scam/' },
                                { date: 'Jun 2026', city: 'Nagpur', amount: '₹2 Lakh', what: 'Fake courier helpline via WhatsApp  remote device access granted → 2 bank accounts drained. FIR registered.', src: 'The420.in', url: 'https://the420.in/nagpur-parcel-tracking-scam-2-lakh-cyber-fraud-whatsapp-customer-care/' },
                            ].map((row, i) => (
                                <tr key={i} className="bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                    <td className="px-4 py-3 font-medium text-gray-900 dark:text-white whitespace-nowrap align-top">{row.date}</td>
                                    <td className="px-4 py-3 text-gray-700 dark:text-gray-300 align-top">{row.city}</td>
                                    <td className="px-4 py-3 font-semibold text-red-600 dark:text-red-400 whitespace-nowrap align-top">{row.amount}</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400 text-xs leading-relaxed align-top">{row.what}</td>
                                    <td className="px-4 py-3 text-xs align-top">
                                        <a href={row.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline font-medium whitespace-nowrap">{row.src}</a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <hr />

                {/* ── FAQ ───────────────────────────────────────────────────── */}
                <h2>Frequently Asked Questions</h2>

                <h3>How do scammers get to the top of Google for bank helpline searches?</h3>
                <p>
                    Scammers purchase Google Ads targeting keywords like "SBI customer care number" or "HDFC helpline
                    India." These paid ads appear above even the bank's own official website in search results. The
                    small "Ad" or "Sponsored" label is easy to miss, especially on a mobile screen.
                </p>

                <h3>Will my bank ever ask for my OTP over the phone?</h3>
                <p>
                    Never. No bank, UPI app, government department, or legitimate company will ever ask for your OTP
                    over a phone call. The OTP is your authorisation code  sharing it is equivalent to handing someone
                    your signed blank cheque. If anyone asks, hang up immediately.
                </p>

                <h3>Which banks are most targeted by fake customer care scams?</h3>
                <p>
                    All major Indian banks are targeted  SBI, HDFC, ICICI, Axis, Bank of Baroda. Also targeted:
                    PayTM, PhonePe, Google Pay, LIC, EPFO, and gas cylinder booking services. Any institution with
                    a large customer base running frequent Google searches for helplines is a target.
                </p>

                <h3>Is AnyDesk safe to install for bank support?</h3>
                <p>
                    No. No legitimate bank or UPI company requires you to install AnyDesk, TeamViewer, QuickSupport,
                    or any remote access tool. These apps give the installer full visibility and control of your screen.
                    If a "support agent" asks you to install any of these, hang up immediately  this is a scam
                    in progress.
                </p>

                <h3>How can I verify a customer care number is real?</h3>
                <p>
                    Go to <Link href="/phone-number-checker">rakshaai.co/phone-number-checker</Link> and paste the
                    number before you call. RakshaAI checks it against a database of known scam numbers. Also
                    compare it with the number printed on the back of your bank card or listed in your bank's
                    official app  those are guaranteed to be correct.
                </p>

                <hr />

                {/* ── FINAL THOUGHTS ────────────────────────────────────────── */}
                <h2>Final Thoughts</h2>

                <p>
                    The fake customer care scam is uniquely dangerous because it exploits trust and urgency
                    simultaneously. You are already in a stressful situation  a blocked card, a failed payment 
                    and you are actively seeking help. That reduced mental guard is exactly what the scammer depends on.
                </p>

                <p>
                    The fix is simple but requires a habit change: <strong>never call a number from a Google
                    search result</strong>. Use the back of your card. Use your bank's official app. If you have
                    any doubt about a number, verify it on RakshaAI before you dial.
                </p>

                <p>
                    Share this guide with your parents, your domestic staff, your elderly relatives  anyone who might
                    one day urgently search for a bank helpline. The fraud succeeds most often on the people
                    least likely to question whether the result they found is genuine.
                </p>

                {/* ── FINAL CTA ─────────────────────────────────────────────── */}
                <div className="not-prose my-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/60 p-8 text-center">
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">
                        Free Tool
                    </p>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                        Not sure if a number is real? Check it now.
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 max-w-sm mx-auto">
                        Paste any customer care number into RakshaAI for an instant scam check. No sign-up. Free. Results in under 5 seconds.
                    </p>
                    <Link
                        href="/phone-number-checker"
                        className="inline-flex items-center gap-2 px-7 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold text-sm rounded-full hover:bg-gray-700 dark:hover:bg-gray-100 transition-colors"
                    >
                        Verify a Number Now &rarr;
                    </Link>
                    <p className="text-gray-400 dark:text-gray-500 text-xs mt-4">
                        100% free &middot; No sign-up required &middot; Save 1930 in your contacts
                    </p>
                </div>

            </BlogLayout>
        </>
    )
}
