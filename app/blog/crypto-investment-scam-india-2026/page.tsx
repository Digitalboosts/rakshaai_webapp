import { Metadata } from 'next'
import BlogLayout from '@/components/BlogLayout'
import Link from 'next/link'
import Image from 'next/image'
import { blogPostingSchema, faqPageSchema, breadcrumbListSchema, personSchema, jsonLd } from '@/lib/seo/schema'
import SidebarCryptoScam from '@/components/blog/SidebarCryptoScam'

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
    title: { absolute: 'Crypto Scam India 2026: 8 Red Flags Before You Lose Everything | RakshaAI' },
    description:
        'India lost ₹22,845 crore to online fraud  crypto scams are the fastest-growing category. Know the 8 red flags of fake crypto apps.',
    keywords:
        'crypto investment scam India 2026, pig butchering scam India, fake cryptocurrency platform India, how to identify crypto scam, crypto fraud India ₹22845 crore, fake crypto exchange India, celebrity crypto scam India, FIU registered crypto India',
    authors: [{ name: 'Rabinarayan Pradhan', url: 'https://www.linkedin.com/in/rabinarayan-pradhan-14ab9422b/' }],
    robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
    openGraph: {
        title: 'India Lost ₹22,845 Crore to Online Fraud. Crypto Scams Are Rising Fast.',
        description:
            'Know the 8 red flags of fake crypto investment platforms before you lose everything. Free check at RakshaAI.',
        type: 'article',
        siteName: 'RakshaAI',
        publishedTime: '2026-05-27T00:00:00.000Z',
        modifiedTime: '2026-05-27T00:00:00.000Z',
        tags: ['crypto scam India', 'pig butchering scam', 'fake crypto platform', 'cybercrime India 2026'],
        url: 'https://rakshaai.co/blog/crypto-investment-scam-india-2026',
        images: [
            {
                url: '/blog/crypto-investment-scam-india-2026/crypto-scam-hero.webp',
                width: 1456,
                height: 816,
                alt: 'Hands holding phone showing Bitcoin trading app with Indian currency notes  crypto investment scam India',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Crypto Scam India 2026: 8 Red Flags Before You Lose Everything',
        description:
            'Guaranteed returns, platforms not on CoinGecko, withdrawal blocked  8 red flags that confirm a crypto platform is fake. Check any platform free at rakshaai.co.',
        images: ['/blog/crypto-investment-scam-india-2026/crypto-scam-hero.webp'],
    },
    alternates: {
        canonical: 'https://rakshaai.co/blog/crypto-investment-scam-india-2026',
    },
}

// ─── Structured Data ─────────────────────────────────────────────────────────
const articleStructuredData = blogPostingSchema({
    headline: 'Crypto Investment Scam Red Flags: India Lost ₹22,845 Cr  Don\'t Be Next',
    description:
        '8 red flags of fake crypto investment platforms in India  guaranteed returns, platforms not on CoinGecko, pig butchering tactics, and FIU registration checks.',
    url: '/blog/crypto-investment-scam-india-2026',
    image: '/blog/crypto-investment-scam-india-2026/crypto-scam-hero.webp',
    datePublished: '2026-05-27T00:00:00.000Z',
    dateModified: '2026-06-04T00:00:00.000Z',
    author: personSchema({ name: 'Rabinarayan Pradhan', jobTitle: 'Cybersecurity Writer', url: '/author/rabinarayan-pradhan', image: '/authors/rabinarayan-pradhan.jpeg', sameAs: ['https://www.linkedin.com/in/rabinarayan-pradhan-14ab9422b/'] }),
    section: 'Crypto Fraud',
    keywords: ['crypto investment scam India', 'pig butchering scam India', 'fake cryptocurrency platform', 'FIU registered crypto'],
})

const breadcrumbSchema = breadcrumbListSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'Crypto Investment Scam India 2026', url: '/blog/crypto-investment-scam-india-2026' },
])

const faqStructuredData = faqPageSchema([
    {
        question: 'Is my crypto platform registered in India?',
        answer:
            'All crypto platforms operating in India must register with the Financial Intelligence Unit (FIU). Check at fiuindia.gov.in. Unregistered platforms are illegal and carry high fraud risk.',
    },
    {
        question: 'What is pig butchering scam in India?',
        answer:
            'Pig butchering (sha zhu pan) is a long-term romance or friendship scam where someone builds trust over weeks before introducing a fake crypto investment platform. Victims can lose lakhs to crores.',
    },
    {
        question: 'Which crypto platforms are safe in India?',
        answer:
            'Safe, FIU-registered platforms include CoinDCX, WazirX, Zebpay, and CoinSwitch. Always download from the official App Store or Play Store. Never use a platform that isn\'t listed on CoinGecko or CoinMarketCap.',
    },
    {
        question: 'Can I recover money lost to a crypto scam?',
        answer:
            'Report immediately at 1930. If the platform involved Indian bank accounts, money may still be traceable. Also file at cybercrime.gov.in and check the platform URL on rakshaai.co.',
    },
    {
        question: 'How much have Indians lost to crypto scams?',
        answer:
            'India\'s National Cyber Crime Reporting Portal recorded ₹22,845 crore in total online fraud losses in one year, with crypto investment scams one of the fastest-growing categories. In just the first week of May 2026, crypto scam losses surpassed ₹3 crore.',
    },
])

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function CryptoScamIndiaPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLd([articleStructuredData, faqStructuredData, breadcrumbSchema]) }}
            />
            <BlogLayout
                title="Crypto Investment Scam Red Flags: India Lost ₹22,845 Cr  Don't Be Next"
                description="India lost ₹22,845 crore to online fraud  crypto scams are the fastest-growing category. Know the 8 red flags of fake crypto investment platforms before you transfer a single rupee."
                publishedAt="2026-05-27T00:00:00.000Z"
                lastUpdated="2026-05-27T00:00:00.000Z"
                readTime="10 min"
                author="Rabinarayan Pradhan"
                authorUrl="/author/rabinarayan-pradhan"
                primaryTool={{ label: 'Check a crypto platform for safety', href: '/website-safety-checker' }}
                tags={['Crypto Fraud', 'Scam Alerts', 'Pig Butchering', 'Cybercrime India']}
                slug="crypto-investment-scam-india-2026"
                sidebar={<SidebarCryptoScam title="Crypto Investment Scam Red Flags: India Lost ₹22,845 Cr  Don't Be Next" description="India lost ₹22,845 crore to online fraud  crypto scams are the fastest-growing category. Know the 8 red flags of fake crypto investment platforms before you transfer a single rupee." />}
            >

                {/* ── HERO IMAGE ────────────────────────────────────────────── */}
                <div className="not-prose mb-10 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                        src="/blog/crypto-investment-scam-india-2026/crypto-scam-hero.webp"
                        alt="Hands holding phone showing Bitcoin trading app with Indian currency notes and a debit card  fake crypto investment scam India"
                        width={1456}
                        height={816}
                        className="w-full object-cover"
                        priority
                    />
                    <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-2 mb-0 italic px-4 pb-3">
                        Fake platforms show convincing live charts and growing balances  until you try to withdraw.
                    </p>
                </div>

                {/* ── INTRO ─────────────────────────────────────────────────── */}
                <p>
                    Someone you met online  a new friend, a romantic interest, a WhatsApp group contact 
                    mentions a crypto investment platform with remarkable returns. They have been earning
                    20% a month. They show you their dashboard. It looks real. The app is polished.
                    The support team responds instantly.
                </p>

                <p>
                    Before you transfer a single rupee, read this guide.
                </p>

                <p>
                    India&apos;s National Cyber Crime Reporting Portal recorded <strong>₹22,845 crore</strong> in
                    total online fraud losses in one year. Crypto investment scams are among the fastest-growing
                    categories  and unlike UPI fraud or phishing, victims often invest willingly over weeks
                    or months before realising what happened. In just the first week of May 2026, crypto scam
                    losses surpassed <strong>₹3 crore</strong>.
                </p>

                <p>
                    Here are the 8 red flags that  if you know them  make fake crypto platforms immediately
                    identifiable.
                </p>

                {/* ── FEATURED SNIPPET BLOCK ────────────────────────────────── */}
                <div className="not-prose my-8 rounded-2xl border-2 border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/40 p-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">
                        How to identify a crypto investment scam in India  8 red flags
                    </p>
                    <ol className="space-y-2.5 list-none">
                        {[
                            ['1', 'Guaranteed high returns  10–30% monthly'],
                            ['2', 'Platform not listed on CoinGecko or CoinMarketCap'],
                            ['3', 'Someone befriended you online before introducing the investment'],
                            ['4', 'Urgency to invest more  "offer closes tonight"'],
                            ['5', 'Withdrawal requires paying extra "tax" or "unlock fee"'],
                            ['6', 'App must be installed from a link, not the official app store'],
                            ['7', 'Platform not registered with FIU India (check fiuindia.gov.in)'],
                            ['8', 'Celebrity endorsement from an unverified social media account'],
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
                        If you suspect a crypto scam, stop all transfers and call 1930.
                    </p>
                </div>

                <hr />

                {/* ── PIG BUTCHERING ────────────────────────────────────────── */}
                <h2>What Is Pig Butchering  And Why India Is the Primary Target</h2>

                {/* Float right: pig butchering timeline */}
                <div className="not-prose float-right ml-6 mb-4 w-52 sm:w-64 md:w-80 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                    <Image
                        src="/blog/crypto-investment-scam-india-2026/pig-butchering-scam-timeline.webp"
                        alt="Pig butchering scam timeline: weeks 1–4 friendly contact, weeks 4–6 trust built, weeks 6–8 crypto mention, weeks 8–20 invest more, slaughter  withdrawal blocked"
                        width={1456}
                        height={816}
                        className="w-full object-contain"
                    />
                    <p className="text-[10px] text-center text-gray-500 dark:text-gray-400 italic px-3 py-2 bg-white dark:bg-gray-800">
                        The full pig butchering playbook  from first contact to "withdrawal blocked".
                    </p>
                </div>

                <p>
                    Pig butchering  known in Chinese as <em>sha zhu pan</em>, meaning "fattening the pig before
                    slaughter"  is the most sophisticated and financially devastating crypto scam operating
                    in India today. Unlike a phishing link that takes 30 seconds to spring, pig butchering
                    takes weeks or months to execute.
                </p>

                <p>
                    The scam has five phases:
                </p>

                <ul>
                    <li>
                        <strong>Weeks 1–4  Friendly contact.</strong> A stranger reaches out on WhatsApp, LinkedIn,
                        Instagram, or a dating app. They are warm, intelligent, and never mention money. They ask
                        about your life, your work, your family.
                    </li>
                    <li>
                        <strong>Weeks 4–6  Trust built.</strong> Conversations deepen. A friendship or romantic
                        connection forms. The person may send gifts, spend hours talking, and show genuine-seeming
                        interest in your wellbeing. Money is still never mentioned.
                    </li>
                    <li>
                        <strong>Weeks 6–8  Casual crypto mention.</strong> The person mentions they invest in
                        crypto "on the side." They show you their earnings casually, not as a pitch. The platform
                        looks professional. They offer to teach you how it works.
                    </li>
                    <li>
                        <strong>Weeks 8–20  You invest and your balance "grows".</strong> Your initial deposit
                        shows impressive returns on a convincing dashboard. Small withdrawals may even succeed at
                        first  to build confidence. You are encouraged to deposit more. Your balance on screen
                        keeps climbing.
                    </li>
                    <li>
                        <strong>Slaughter.</strong> When you try to withdraw a significant amount, the platform
                        demands a "tax payment" or "compliance unlock fee" before releasing funds.
                        You pay. They demand more. The platform eventually goes dark. The person disappears.
                        The money is gone.
                    </li>
                </ul>

                <p>
                    India is a primary target because of the large number of English-speaking users on WhatsApp
                    and LinkedIn, high aspiration for investment returns in a volatile economy, and the cultural
                    tendency to trust relationships before questioning motives.
                </p>

                <div className="clear-both" />

                <hr />

                {/* ── RED FLAGS ─────────────────────────────────────────────── */}
                <h2>The 8 Red Flags in Detail</h2>

                {/* Float right: 8 red flags infographic */}
                <div className="not-prose float-right ml-6 mb-4 w-44 sm:w-52 md:w-64 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                    <Image
                        src="/blog/crypto-investment-scam-india-2026/crypto-scam-red-flags.webp"
                        alt="8 crypto scam red flags infographic: guaranteed returns, not on CoinGecko, romance intro, urgency, withdrawal blocked, app from link, no FIU registration, celebrity endorsement"
                        width={900}
                        height={1200}
                        className="w-full object-contain"
                    />
                    <p className="text-[10px] text-center text-gray-500 dark:text-gray-400 italic px-3 py-2 bg-white dark:bg-gray-800">
                        See any of these? Stop. Check at rakshaai.co. Call 1930.
                    </p>
                </div>

                <h3>Red Flag 1: Guaranteed returns of 10–30% per month</h3>
                <p>
                    No legitimate investment guarantees returns. Crypto markets are volatile  even the most
                    experienced institutional investors do not promise fixed monthly profits. Any platform
                    advertising guaranteed returns of 10% or more per month is lying. This is the single most
                    reliable indicator of fraud.
                </p>
                <p>
                    The numbers are designed to sound credible without being absurdly high. "20% per month"
                    sounds more believable than "200% in a week"  but it is equally impossible to guarantee.
                </p>

                <h3>Red Flag 2: Platform not listed on CoinGecko or CoinMarketCap</h3>
                <p>
                    CoinGecko and CoinMarketCap (CMC) are independent, publicly accessible databases that track
                    legitimate cryptocurrency projects. If a platform's token or exchange is not findable on
                    either, it does not exist in the legitimate crypto ecosystem.
                </p>
                <p>
                    Go to coingecko.com and search the platform name before depositing anything.
                    Absence from these databases is not a minor oversight  every real project wants to be
                    listed for visibility and credibility.
                </p>

                <h3>Red Flag 3: You met through online friendship or romance first</h3>
                <p>
                    Legitimate investment platforms are found through ads, searches, media coverage, and
                    app store listings. They are never introduced to you by a new online friend who reached
                    out unexpectedly. If the person who introduced you to the investment is someone you
                    met online and have never seen in person, the relationship itself is part of the scam.
                </p>

                <h3>Red Flag 4: Urgency  "invest more tonight," "offer closes in 2 hours"</h3>
                <p>
                    Artificial urgency is a pressure tactic designed to prevent you from pausing to verify.
                    Real investment opportunities do not expire at midnight. If you feel rushed or pressured
                    to deposit before you have completed your own checks, that pressure is deliberate and
                    is a scam technique.
                </p>

                <h3>Red Flag 5: Withdrawal requires extra "tax" or "unlock fee"</h3>
                <p>
                    This is the mechanism of theft. Once you try to withdraw a significant amount, the platform
                    invents a regulatory requirement: a "compliance fee," a "withdrawal tax," or a
                    "risk deposit." No legitimate platform operates this way. Withdrawal fees  where they exist
                    on real exchanges  are deducted from your balance, not demanded as additional payments.
                </p>
                <p>
                    <strong>Rule:</strong> Any platform that asks you to pay money to access your own money
                    is stealing from you.
                </p>

                <h3>Red Flag 6: App installed from a link, not the App Store or Play Store</h3>
                <p>
                    Apple and Google both require apps to pass security and policy reviews before listing.
                    Fake crypto platforms cannot pass these reviews, so they ask you to install their app
                    by clicking a link and enabling "install from unknown sources" on Android, or through
                    an enterprise certificate workaround on iOS.
                </p>
                <p>
                    If the platform&apos;s app is not findable in the official App Store or Google Play Store,
                    do not install it. The app is designed to look real while showing fabricated balances.
                </p>

                <h3>Red Flag 7: Not registered with FIU India</h3>
                <p>
                    Under India&apos;s Prevention of Money Laundering Act (PMLA), all Virtual Asset Service Providers
                    (VASPs)  which includes crypto exchanges  operating in India must register with the
                    Financial Intelligence Unit (FIU-IND). You can check registration status at{' '}
                    <strong>fiuindia.gov.in</strong>.
                </p>
                <p>
                    An unregistered platform is operating illegally in India. This alone is reason enough
                    to never use it, regardless of any other claims.
                </p>

                <h3>Red Flag 8: Celebrity endorsement from an unverified account</h3>
                <p>
                    Scammers create fake accounts impersonating Indian celebrities, successful entrepreneurs,
                    or well-known investors  or they use deepfake videos  to make platforms appear endorsed
                    by famous people. Always verify that celebrity social accounts are the official verified
                    accounts (blue tick or gold tick). Even verified accounts can be hacked  check for
                    unusual recent posting patterns.
                </p>

                <div className="clear-both" />

                <hr />

                {/* ── SAFE VS FAKE ──────────────────────────────────────────── */}
                <h2>Safe Platform vs Fake Platform: Know the Difference at a Glance</h2>

                {/* Float right: safe vs fake comparison */}
                <div className="not-prose float-right ml-6 mb-4 w-52 sm:w-64 md:w-80 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                    <Image
                        src="/blog/crypto-investment-scam-india-2026/safe-vs-fake-crypto-platform.webp"
                        alt="Safe crypto platform vs fake crypto platform comparison: App Store listed, CoinGecko listed, withdraw anytime, FIU registered, official channels  vs installed via link, not findable, withdrawals pending, no registration, introduced by online friend"
                        width={900}
                        height={1200}
                        className="w-full object-contain"
                    />
                    <p className="text-[10px] text-center text-gray-500 dark:text-gray-400 italic px-3 py-2 bg-white dark:bg-gray-800">
                        A legitimate platform checks every box on the left column. One fail on the right  stop immediately.
                    </p>
                </div>

                <p>
                    The differences between a real and fake crypto platform are consistent and predictable.
                    Here is the complete comparison:
                </p>

                <ul>
                    <li>
                        <strong>App store vs link installation.</strong> Legitimate platforms  CoinDCX, WazirX,
                        Zebpay, CoinSwitch  are all downloadable directly from the App Store and Google Play.
                        Fake platforms require a custom link because they cannot pass official app store reviews.
                    </li>
                    <li>
                        <strong>CoinGecko/CMC listed vs not findable.</strong> Real crypto assets and exchanges are
                        indexed on independent data aggregators. Fake platforms operate tokens that exist only
                        within their own closed ecosystem.
                    </li>
                    <li>
                        <strong>Withdraw anytime vs withdrawals "pending."</strong> On legitimate exchanges,
                        withdrawals are processed within minutes to hours depending on network congestion.
                        On fake platforms, withdrawals are perpetually pending or blocked behind new fee requirements.
                    </li>
                    <li>
                        <strong>FIU registered vs no registration.</strong> Check fiuindia.gov.in. The list of
                        registered VASPs is public.
                    </li>
                    <li>
                        <strong>Official channels vs introduced by an online friend.</strong> You do not discover
                        a real exchange through a WhatsApp contact you met three weeks ago. You find it through
                        official advertising, press coverage, or app store listings.
                    </li>
                    <li>
                        <strong>No guaranteed returns vs "guaranteed 20% monthly."</strong> Legitimate platforms
                        show real market prices and acknowledge risk. They never guarantee returns.
                    </li>
                </ul>

                <div className="clear-both" />

                <hr />

                {/* ── HOW TO VERIFY ─────────────────────────────────────────── */}
                <h2>How to Verify a Crypto Platform Before Depositing</h2>

                <p>
                    These four steps take under 5 minutes and will tell you definitively whether a platform
                    is legitimate:
                </p>

                <ol>
                    <li>
                        <strong>Check FIU registration.</strong> Go to fiuindia.gov.in and search the platform
                        name in the list of registered VASPs. Not there? Do not deposit.
                    </li>
                    <li>
                        <strong>Search on CoinGecko.</strong> Go to coingecko.com and search the platform name
                        or the name of the coin they are asking you to invest in. No result? It is fabricated.
                    </li>
                    <li>
                        <strong>Find it in the App Store or Play Store.</strong> Search directly in the official
                        app store. If it is only available via a link, it has failed official security review.
                    </li>
                    <li>
                        <strong>Check the URL on RakshaAI.</strong> Go to <Link href="/website-safety-checker">rakshaai.co/website-safety-checker</Link> and
                        paste the platform URL. RakshaAI cross-references it against reported scam databases
                        and returns a risk assessment in under 5 seconds.
                    </li>
                </ol>

                <p>
                    If any one of these checks fails, the platform is almost certainly fraudulent. All four
                    passing does not guarantee safety  new scam platforms appear daily  but failure on any
                    single check is decisive.
                </p>

                <hr />

                {/* ── WHAT TO DO IF SCAMMED ─────────────────────────────────── */}
                <h2>What to Do If You Have Already Transferred Money</h2>

                <p>
                    Speed is the only variable that determines recovery. Crypto scam funds move quickly through
                    layered accounts  every hour you wait reduces the chance of freezing the destination account.
                </p>

                <div className="not-prose my-6 rounded-2xl border-2 border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/30 p-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-red-600 dark:text-red-400 mb-4">
                        Act in the next 30 minutes
                    </p>
                    <ol className="space-y-3 list-none">
                        {[
                            ['1', 'Stop  do not transfer anything more, even if promised that an extra payment will unlock your balance'],
                            ['2', 'Screenshot everything  all chats with the introducer, the platform interface, all transaction records'],
                            ['3', 'Call 1930  India\'s National Cybercrime Helpline  and report the bank account or wallet address you transferred to'],
                            ['4', 'Contact your bank fraud desk immediately if you paid via NEFT/IMPS  request a transaction reversal'],
                            ['5', 'File a detailed complaint at cybercrime.gov.in with screenshots and amounts'],
                            ['6', 'Report the platform URL at rakshaai.co to protect other Indians from the same platform'],
                        ].map(([num, text]) => (
                            <li key={num} className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500 text-white text-[11px] font-bold flex items-center justify-center mt-0.5">
                                    {num}
                                </span>
                                <span className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed">{text}</span>
                            </li>
                        ))}
                    </ol>
                </div>

                <p>
                    Recovery is possible  especially where the scammer used Indian bank accounts for the
                    initial transfer, which is common in the early stages of crypto fraud. The 1930 helpline
                    has authority to flag accounts for freezing while an investigation is opened.
                </p>

                <hr />

                {/* ── OFFICIAL STATS ────────────────────────────────────────── */}
                <h2>The Scale of Crypto and Investment Fraud in India: Official Data (2021–2025)</h2>

                <p>
                    The figures below are drawn from MHA Parliamentary replies (Lok Sabha, Dec 2, 2025 and
                    Rajya Sabha, Feb 2026) and I4C official data. Investment and trading scams  the category
                    that includes fake crypto platforms  now account for <strong>~77% of all cybercrime
                    financial losses</strong> in India.
                </p>

                <div className="not-prose overflow-x-auto my-8 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                    <table className="w-full text-sm text-left">
                        <thead>
                            <tr className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                                <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Year</th>
                                <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Total Cybercrime Loss</th>
                                <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">NCRP Complaints</th>
                                <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Inv. Fraud Share</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                            {[
                                { year: '2021', lost: '₹551 crore', cases: '2.62 lakh', share: '', badge: 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400' },
                                { year: '2022', lost: '₹2,290 crore', cases: '6.94 lakh', share: 'Growing', badge: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-400' },
                                { year: '2023', lost: '₹7,463 crore', cases: '13.10 lakh', share: '~65%', badge: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-400' },
                                { year: '2024', lost: '₹22,845 crore', cases: '22.68 lakh', share: '~77% (peak)', badge: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400' },
                                { year: '2025', lost: '₹22,495 crore', cases: '21.77 lakh', share: '~77%', badge: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400' },
                            ].map((row) => (
                                <tr key={row.year} className="bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                    <td className="px-4 py-3 font-bold text-gray-900 dark:text-white">{row.year}</td>
                                    <td className="px-4 py-3 font-semibold text-red-600 dark:text-red-400">{row.lost}</td>
                                    <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{row.cases}</td>
                                    <td className="px-4 py-3">
                                        <span className={`inline-block px-2 py-0.5 rounded text-xs font-semibold ${row.badge}`}>
                                            {row.share}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="not-prose my-6 rounded-xl border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/30 p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-red-600 dark:text-red-400 mb-3">Investment &amp; Trading Fraud: 2024 Category Breakdown (Full Year, MHA Data)</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {[
                            { label: 'Stock trading scam complaints', value: '2,28,094', sub: '₹4,636 crore lost' },
                            { label: 'Investment scam complaints', value: '1,00,360', sub: '₹3,216 crore lost' },
                            { label: 'Trading scams (Jan–Apr 2024 only)', value: '20,043', sub: '₹1,420 crore in 4 months' },
                        ].map((s) => (
                            <div key={s.label} className="text-center">
                                <p className="text-2xl font-extrabold text-red-600 dark:text-red-400">{s.value}</p>
                                <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mt-1">{s.label}</p>
                                <p className="text-[10px] text-gray-400 dark:text-gray-500">{s.sub}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-[11px] text-red-600 dark:text-red-400 mt-4">
                        Cumulative loss 2020–2025: <strong>₹52,976 crore</strong> across all cybercrime categories (I4C six-year data).
                        Top affected states in 2025: Maharashtra ₹3,203 Cr · Karnataka ₹2,413 Cr · Tamil Nadu ₹1,897 Cr · UP ₹1,443 Cr.
                    </p>
                </div>

                <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
                    Source: MHA Lok Sabha reply Dec 2, 2025 · Rajya Sabha Feb 2026 · I4C official data · Business Standard (May 27, 2024) citing MHA category breakdown.
                </p>

                {/* ── REAL CASE CARDS ───────────────────────────────────────── */}
                <h2>Documented Crypto Investment Scam Cases Reported by Indian News Outlets</h2>

                <p>
                    From a pan-India ₹17,000 crore Bitcoin Ponzi to a gang of police constables running a
                    crypto racket  these are real, verified cases that show the full scale and variety of
                    crypto fraud targeting Indians.
                </p>

                <div className="not-prose space-y-4 my-8">
                    {[
                        {
                            num: '01', city: 'Pan-India · 2015–2026', amount: '₹17,000 Crore', tag: "India's Largest Crypto Fraud",
                            title: 'GainBitcoin / GB21 Ponzi: 80,000 Investors Cheated, ₹6,606 Cr Diverted to Overseas Shell Firms',
                            desc: 'Amit Bhardwaj promised 10% per month returns for 18 months. Collected 80,000 BTC from ~80,000 Indian investors via GainBitcoin, GBMiners, and GB21. Fled to Dubai, arrested in Bangkok, died in custody 2022. Ayush Varshney  Forbes 30 Under 30 Asia honoree  arrested as technical architect at Mumbai airport on March 10, 2026. ₹6,606 crore diverted through 9 overseas companies.',
                            source: 'The420.in',
                            url: 'https://the420.in/gainbitcoin-crypto-scam-ayush-varshney-arrest-17000-crore/',
                        },
                        {
                            num: '02', city: 'Kerala · 2023–2024', amount: '₹1,651 Crore', tag: 'Own Crypto Coin',
                            title: 'Highrich / HR Crypto Coin Ponzi: ED Freezes ₹277 Crore, 28 FIRs, CBI Takes Over',
                            desc: 'K.D. Prathapan and Sreena Prathapan promised 15% annual returns via "HR Crypto Coin"  their own fabricated cryptocurrency. Classic Ponzi: new investor money paid old investors. ₹1,651 crore raised from thousands across India. ED froze ₹244 crore in bank accounts + ₹33.7 crore immovable assets. Kerala Police filed 28 FIRs; case handed to CBI.',
                            source: 'OnManorama',
                            url: 'https://www.onmanorama.com/news/kerala/2024/01/28/scam-high-rich-raised-1157-crore-with-ponzi-scheme-says-enforcement-directorate.html',
                        },
                        {
                            num: '03', city: 'Chennai · Apr 2024, 6 Arrested Oct 2024', amount: '₹14 Crore', tag: 'Fake SEBI-Approved App',
                            title: 'Tamil Film Associate Producer Among 6 Arrested for "BR IIFL PRO" Fake Trading App Scam',
                            desc: 'Fraudsters impersonated BlackRock and IIFL to create "BR IIFL PRO"  a fake SEBI-approved trading app. Victim told he would get 500% profit in 2 months. Then demanded a 20% "service charge" before any withdrawal. 6 arrested including film associate producer R Saravanapriyan (34), a chit company owner, and a currency exchange shop owner.',
                            source: 'DT Next',
                            url: 'https://www.dtnext.in/news/tamilnadu/tn-man-loses-rs-14-crore-to-online-trading-scam-tamil-film-associate-producer-among-6-held-808229',
                        },
                        {
                            num: '04', city: 'Hyderabad · Nov 2025–Mar 2026', amount: '₹4.4 Crore', tag: '3 Senior Citizens',
                            title: '3 Hyderabad Retirees Lose ₹4.4 Crore to Separate Crypto Scams in 4 Months',
                            desc: 'Three victims: (1) 62-yr retired engineer  ₹1.72 Cr via 25+ investment transfers. (2) 76-yr retired employee  ₹80 lakh via digital arrest. (3) 69-yr retired govt employee  ₹1.89 Cr after seeing an Instagram AI crypto trading ad and contacting "investment advisor Maheswari" on WhatsApp. All cases registered March 12, 2026.',
                            source: 'Deccan Chronicle',
                            url: 'https://www.deccanchronicle.com/southern-states/telangana/three-hyderabad-senior-citizens-lose-44-crore-in-elaborate-cyber-scams-1943945',
                        },
                        {
                            num: '05', city: 'Gorakhpur, UP · March 2026', amount: '₹100 Crore', tag: 'Hotel-Based Racket',
                            title: 'Gang Operating from a Hotel Ran ₹100 Crore Fake Forex and Crypto Racket Across Multiple States',
                            desc: 'Operated from a hotel in Ramgarhtal, Gorakhpur. Opened fake bank accounts using others\' identities, fabricated profit statements, then vanished when withdrawals were requested. Laptops, phones, and user credentials recovered. 4 arrested; 2 absconding. Funds routed through hundreds of mule accounts across states.',
                            source: 'The420.in',
                            url: 'https://the420.in/100-crore-crypto-scam-gorakhpur-busted-investment-racket-four-arrested-fake-forex-profits/',
                        },
                        {
                            num: '06', city: 'Pan-India · Oct 2025 – 2026', amount: '₹3,200 Crore', tag: 'Interpol Red Notice',
                            title: 'BotBro / Cross Market: ₹3,200 Crore AI Crypto Bot Scam, Mastermind on Interpol Red Notice',
                            desc: 'Promised 5–10% monthly returns from AI-powered crypto trading bots (BotBro, Cross Market, Mine Crypto). ₹10,000 license fee first, then larger investments. All platforms disappeared in October 2025. ED froze ₹170 crore across ~30 shell company accounts. Mastermind Lavish Choudhary, Dubai-based, has an Interpol Red Notice issued against him.',
                            source: 'The420.in',
                            url: 'https://the420.in/dehradun-crypto-fraud-botbro-network-investment-scam-probe/',
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
                <h2>Complete Timeline: Major Crypto Investment Scam Cases in India (2024–2026)</h2>

                <p>
                    A date-wise record spanning Ponzi schemes, fake trading apps, pig butchering, and
                    deepfake celebrity endorsements  every major documented crypto fraud case in India.
                </p>

                <div className="not-prose overflow-x-auto my-8 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                    <table className="w-full text-sm text-left">
                        <thead>
                            <tr className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                                <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap">Date</th>
                                <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Victim / City</th>
                                <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap">Amount Lost</th>
                                <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Platform / Method</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                            {[
                                {
                                    date: '2015–2022',
                                    victim: '~80,000 investors · Pan-India (GainBitcoin / GB21)',
                                    amount: '₹17,000 Cr peak',
                                    method: 'Ponzi: 10%/month return promised; 80,000 BTC collected; founder died in custody; Forbes 30U30 architect arrested Mar 2026',
                                },
                                {
                                    date: '2023–2024',
                                    victim: 'Thousands · Kerala (Highrich / HR Crypto Coin)',
                                    amount: '₹1,651 crore',
                                    method: 'Own crypto coin Ponzi; 15% annual returns promised; ED froze ₹277 Cr; 28 FIRs; CBI probe',
                                },
                                {
                                    date: 'Jan 22, 2024',
                                    victim: 'Multiple states (12) · Dehradun base',
                                    amount: '₹13 crore',
                                    method: 'Posed as Flipkart "gift manager" → Telegram crypto/task websites; arrested from Karnataka',
                                },
                                {
                                    date: 'Apr 2024 (arrests Oct 2024)',
                                    victim: 'Chennai businessman · Tamil Nadu',
                                    amount: '₹14 crore',
                                    method: '"BR IIFL PRO" fake SEBI-approved app impersonating BlackRock + IIFL; 6 arrested incl. Tamil film associate producer',
                                },
                                {
                                    date: 'May 2023–Aug 2024',
                                    victim: 'Man, 48 · Thane, Maharashtra',
                                    amount: '₹87.48 lakh',
                                    method: 'Fake WhatsApp USDT group; multiple UPI IDs used; 6 accused; 15-month operation',
                                },
                                {
                                    date: 'Aug 2024',
                                    victim: 'Multiple investors · Balangir, Odisha',
                                    amount: '₹76 lakh',
                                    method: '"GBE Crypto Trading" fake app; impersonated Cyprus-based GBE Brokers; 4 arrested from Rajasthan; 60+ accounts frozen',
                                },
                                {
                                    date: 'Nov–Dec 2024',
                                    victim: 'Retired engineer, 65 · Hyderabad',
                                    amount: '₹1.28 crore (USDT)',
                                    method: '"531 DBS Stock Profit Group" WhatsApp → fake trading app; fake professor + analyst; ₹5K allowed out to build trust; account frozen on big withdrawal',
                                },
                                {
                                    date: 'Dec 2024',
                                    victim: 'Retired bank manager, 73 · Wadgaon Sheri, Pune',
                                    amount: '₹81 lakh',
                                    method: 'Fake share trading + digital gold platform; approached via messaging app; dashboard showed fictitious profits; life savings lost',
                                },
                                {
                                    date: 'Q1 2025',
                                    victim: 'Businessman · Odisha (CID bust)',
                                    amount: '₹6.16 crore',
                                    method: '"ZAIF" fake exchange  impersonated real Japanese exchange; Facebook romance lure; ₹89 lakh "unlock fee" demanded; 5 arrested Surat',
                                },
                                {
                                    date: 'Sep 29, 2025',
                                    victim: 'Investor · Delhi',
                                    amount: '₹31.75 lakh',
                                    method: '"BitBank" fake crypto app; Facebook lure → WhatsApp; fake IPO/share allotment promises; 1 arrested Punjab; WhatsApp numbers traced to Cambodia',
                                },
                                {
                                    date: 'Oct 2025 (platform died); 2026 raids',
                                    victim: 'Thousands · Pan-India (BotBro network)',
                                    amount: '₹3,200 crore',
                                    method: 'AI crypto bots (BotBro, Cross Market, Mine Crypto); ₹10K entry fee; platforms vanished; ED froze ₹170 Cr; Interpol Red Notice: Lavish Choudhary',
                                },
                                {
                                    date: 'Nov 2025',
                                    victim: '~200 incl. police officers · Vizag, AP',
                                    amount: '₹7 crore',
                                    method: 'Yes World / UB Coin crypto; two serving police constables ran scheme; ₹3L investment → ₹1.32L/day promised; CBI probe',
                                },
                                {
                                    date: 'Nov 2025–Mar 2026',
                                    victim: '3 senior citizens (62, 69, 76) · Hyderabad',
                                    amount: '₹4.4 crore',
                                    method: 'Three separate scams: investment fraud (25+ transfers), digital arrest, Instagram AI crypto ad → WhatsApp "advisor Maheswari"',
                                },
                                {
                                    date: 'Mar 20, 2026',
                                    victim: 'Hundreds across states · Gorakhpur, UP',
                                    amount: '₹100 crore',
                                    method: 'Hotel-based fake forex/crypto racket; mule bank accounts; fabricated profits; 4 arrested, 2 absconding',
                                },
                                {
                                    date: 'Apr 2026',
                                    victim: 'Multiple (41 cases) · Ahmedabad, Gujarat',
                                    amount: '₹1.5 crore',
                                    method: '"CBOE US" fake app impersonating US CBOE exchange; USDT investment; shell company "Crystal Interior Designers"; 6 arrested, Dubai mastermind absconding',
                                },
                            ].map((row, i) => (
                                <tr key={i} className="bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                    <td className="px-4 py-3 text-gray-500 dark:text-gray-400 whitespace-nowrap text-xs">{row.date}</td>
                                    <td className="px-4 py-3 text-gray-800 dark:text-gray-200 font-medium text-xs">{row.victim}</td>
                                    <td className="px-4 py-3 font-bold text-red-600 dark:text-red-400 whitespace-nowrap">{row.amount}</td>
                                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400 text-xs">{row.method}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <p className="text-sm text-gray-500 dark:text-gray-400 -mt-4 mb-8">
                    Sources: The420.in, OnManorama, DT Next, Deccan Chronicle, Deccan Herald, Sunday Guardian Live, Analytics Insight, Business Standard, CryptoTimes. All amounts as reported by respective news outlets.
                </p>

                <hr />

                {/* ── FAQ ───────────────────────────────────────────────────── */}
                <h2>Frequently Asked Questions</h2>

                <h3>Is my crypto platform registered in India?</h3>
                <p>
                    All crypto platforms operating in India must register with the Financial Intelligence Unit (FIU).
                    Check the public list at <strong>fiuindia.gov.in</strong> under the VASP section.
                    Unregistered platforms are operating illegally and carry the highest fraud risk.
                </p>

                <h3>What is pig butchering scam in India?</h3>
                <p>
                    Pig butchering (<em>sha zhu pan</em>) is a long-term romance or friendship scam where someone
                    builds trust with you over weeks or months before introducing a fake crypto investment platform.
                    They show you growing profits on a convincing dashboard, encourage you to deposit more, then
                    block all withdrawals when you try to cash out. Victims can lose lakhs to crores.
                </p>

                <h3>Which crypto platforms are safe in India?</h3>
                <p>
                    Safe, FIU-registered platforms include <strong>CoinDCX</strong>, <strong>WazirX</strong>,{' '}
                    <strong>Zebpay</strong>, and <strong>CoinSwitch</strong>. Always download directly from the
                    official App Store or Google Play Store. Never use a platform that is not listed on CoinGecko
                    or CoinMarketCap, or that was recommended by someone you met online.
                </p>

                <h3>Can I recover money lost to a crypto scam?</h3>
                <p>
                    Report immediately at <strong>1930</strong>. If the platform used Indian bank accounts for
                    transfers  which is common in the early stages  money may still be traceable and freezable.
                    Also file at <strong>cybercrime.gov.in</strong> and report the platform URL at{' '}
                    <Link href="/website-safety-checker">rakshaai.co/website-safety-checker</Link>. The faster you act, the better your chances.
                </p>

                <h3>How much have Indians lost to crypto scams?</h3>
                <p>
                    India&apos;s National Cyber Crime Reporting Portal recorded <strong>₹22,845 crore</strong> in
                    total online fraud losses in one year, with crypto investment scams among the fastest-growing
                    categories. In just the first week of May 2026, crypto scam losses exceeded ₹3 crore across
                    reported cases alone  the true number is higher because many cases go unreported.
                </p>

                <hr />

                {/* ── FINAL THOUGHTS ────────────────────────────────────────── */}
                <h2>Final Thoughts</h2>

                <p>
                    Crypto investment scams succeed because they exploit two things: the genuine excitement
                    around digital assets, and the human instinct to trust people we feel close to. The pig
                    butchering playbook is specifically designed to make you feel chosen, trusted, and lucky 
                    before taking everything you invested.
                </p>

                <p>
                    The 8 red flags in this guide are present in every fake crypto platform without exception.
                    They are non-negotiable checkpoints, not guidelines. <strong>A platform that fails even one
                    of them should receive zero of your money.</strong>
                </p>

                <p>
                    Share this with family members  especially anyone who is new to crypto, recently retired,
                    or active on WhatsApp groups. The people most vulnerable to this scam are those who have
                    savings to invest and have not yet learned how these platforms work.
                </p>

                {/* ── FINAL CTA ─────────────────────────────────────────────── */}
                <div className="not-prose my-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/60 p-8 text-center">
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">
                        Free Tool
                    </p>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                        Unsure about a crypto platform? Check it now.
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 max-w-sm mx-auto">
                        Paste any crypto platform URL into RakshaAI for an instant scam check. No sign-up.
                        No cost. Results in under 5 seconds.
                    </p>
                    <Link
                        href="/website-safety-checker"
                        className="inline-flex items-center gap-2 px-7 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold text-sm rounded-full hover:bg-gray-700 dark:hover:bg-gray-100 transition-colors"
                    >
                        Check a Platform Now &rarr;
                    </Link>
                    <p className="text-gray-400 dark:text-gray-500 text-xs mt-4">
                        100% free &middot; No sign-up required &middot; Save 1930 in your contacts
                    </p>
                </div>

            </BlogLayout>
        </>
    )
}
