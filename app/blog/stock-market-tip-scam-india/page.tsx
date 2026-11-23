import { Metadata } from 'next'
import BlogLayout from '@/components/BlogLayout'
import Link from 'next/link'
import Image from 'next/image'
import { blogPostingSchema, faqPageSchema, breadcrumbListSchema, personSchema, jsonLd } from '@/lib/seo/schema'
import SidebarStockTipScam from '@/components/blog/SidebarStockTipScam'

// SEO Metadata
export const metadata: Metadata = {
    title: { absolute: 'Stock Tip Scam India 2026: Fake SEBI Advisors on Telegram | RakshaAI' },
    description:
        'Fake SEBI-certified Telegram groups run pump-and-dump schemes that wipe out middle-class investors. How to verify and avoid them.',
    keywords:
        'stock market tip scam India 2026, fake SEBI advisor India, pump and dump scam India, Telegram stock tip scam India, investment fraud India 2026, SEBI registration check India, fake IPO allotment India, F&O tips scam India',
    authors: [{ name: 'Rabinarayan Pradhan', url: 'https://www.linkedin.com/in/rabinarayan-pradhan-14ab9422b/' }],
    robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
    openGraph: {
        title: 'Fake SEBI Telegram Groups Are Running Pump-and-Dump Operations on Indian Investors',
        description:
            '15 crore demat accounts targeted. Verify any stock advisor in 5 minutes at sebi.gov.in. Check any Telegram tip group at rakshaai.co before paying a single rupee.',
        type: 'article',
        siteName: 'RakshaAI',
        publishedTime: '2026-06-04T00:00:00.000Z',
        modifiedTime: '2026-06-04T00:00:00.000Z',
        tags: ['stock tip scam India', 'fake SEBI advisor', 'pump and dump India', 'investment fraud India 2026'],
        url: 'https://rakshaai.co/blog/stock-market-tip-scam-india',
        images: [
            {
                url: '/blog/stock-market-tip-scam-india/stock-tip-scam-hero.webp',
                width: 1200,
                height: 630,
                alt: 'Stock market tip scam India 2026  fake SEBI advisor Telegram pump dump fraud',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Fake SEBI Advisor on Telegram Just Wiped Out My Investment',
        description:
            'Verify any advisor at sebi.gov.in first. If they cannot give a real INH000XXXXXX number, they are illegal. Share this with every trader you know.',
        images: ['/blog/stock-market-tip-scam-india/stock-tip-scam-hero.webp'],
    },
    alternates: {
        canonical: 'https://rakshaai.co/blog/stock-market-tip-scam-india',
    },
}

// Structured Data
const articleStructuredData = blogPostingSchema({
    headline: 'Stock Market Tip Scam India 2026: Fake SEBI Advisors on Telegram Stealing Lakhs',
    description:
        'Pump and dump scams on Telegram and WhatsApp are wiping out Indian retail investors. Complete guide to verifying SEBI registration and spotting fake advisors.',
    url: '/blog/stock-market-tip-scam-india',
    image: '/blog/stock-market-tip-scam-india/stock-tip-scam-hero.webp',
    datePublished: '2026-06-04T00:00:00.000Z',
    dateModified: '2026-06-04T00:00:00.000Z',
    author: personSchema({ name: 'Rabinarayan Pradhan', jobTitle: 'Cybersecurity Writer', url: '/author/rabinarayan-pradhan', image: '/authors/rabinarayan-pradhan.jpeg', sameAs: ['https://www.linkedin.com/in/rabinarayan-pradhan-14ab9422b/'] }),
    section: 'Investment Fraud',
    keywords: ['stock market tip scam India', 'fake SEBI advisor', 'pump and dump scam India', 'SEBI registration check India'],
})

const breadcrumbSchema = breadcrumbListSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'Stock Market Tip Scam India 2026', url: '/blog/stock-market-tip-scam-india' },
])

const faqStructuredData = faqPageSchema([
    {
        question: 'How do I check if a stock advisor is SEBI registered in India?',
        answer:
            'Go to sebi.gov.in, navigate to Intermediaries, select Research Analyst, and search for the advisor\'s SEBI Registration Number (format INH000XXXXXX). Verify the name, registration status, and address match exactly.',
    },
    {
        question: 'What is pump and dump scam in Indian stock market?',
        answer:
            'Pump and dump is a scheme where scammers buy low-liquidity small-cap stocks, recommend them via Telegram or WhatsApp to large groups of retail investors, wait for the price to rise as the group buys, then sell at the peak leaving all followers with heavy losses.',
    },
    {
        question: 'Can a SEBI advisor guarantee stock returns in India?',
        answer:
            'No. SEBI-registered research analysts are legally prohibited from guaranteeing returns. Any advisor claiming guaranteed returns or 100% accuracy is either operating illegally or is a complete fraud.',
    },
    {
        question: 'Where do I complain about a fake stock tip group in India?',
        answer:
            'File at SEBI\'s SCORES portal (scores.gov.in) for securities fraud, at cybercrime.gov.in for online fraud, and at your local police station for criminal cheating. Also report at rakshaai.co to warn other investors.',
    },
    {
        question: 'What is the SEBI investor helpline number?',
        answer:
            'SEBI\'s toll-free investor helpline is 1800-266-7575, available Monday to Friday 9:30 AM to 5:30 PM. For online complaints use scores.gov.in, SEBI\'s dedicated investor grievance redressal system.',
    },
])

// Page
export default function StockTipScamIndiaPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLd([articleStructuredData, faqStructuredData, breadcrumbSchema]) }}
            />
            <BlogLayout
                title="Stock Market Tip Scam: How Fake SEBI Advisors Are Looting India's Middle Class"
                description="Fake SEBI-certified Telegram groups run pump-and-dump schemes that wipe out middle-class investors in days. How to verify any stock advisor in 5 minutes using the SEBI check that exposes every fraud."
                publishedAt="2026-06-04T00:00:00.000Z"
                lastUpdated="2026-06-04T00:00:00.000Z"
                readTime="10 min"
                author="Rabinarayan Pradhan"
                authorUrl="/author/rabinarayan-pradhan"
                primaryTool={{ label: 'Check a phone number or link for fraud reports', href: '/phone-number-checker' }}
                tags={['Investment Fraud', 'Stock Scam', 'Fake SEBI Advisor', 'Cybercrime India']}
                slug="stock-market-tip-scam-india"
                sidebar={<SidebarStockTipScam title="Stock Market Tip Scam: How Fake SEBI Advisors Are Looting India's Middle Class" description="Fake SEBI-certified Telegram groups run pump-and-dump schemes that wipe out middle-class investors in days. Verify any advisor in 5 minutes." />}
            >

                {/* HERO IMAGE */}
                <div className="not-prose mb-10 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                        src="/blog/stock-market-tip-scam-india/stock-tip-scam-hero.webp"
                        alt="Stock market tip scam India 2026  fake SEBI advisor Telegram pump dump fraud"
                        width={1200}
                        height={630}
                        className="w-full object-cover"
                        priority
                    />
                    <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-2 mb-0 italic px-4 pb-3">
                        The same retail investor: excited by a Telegram stock tip, then left holding a worthless position after the scammer exits at the peak.
                    </p>
                </div>

                {/* INTRO */}
                <p>
                    A Telegram group with 50,000 members. A profile picture showing a SEBI registration certificate.
                    Stock tips arriving every morning: <em>"BUY NOW. 500% returns. SEBI Certified."</em> The chart
                    surges exactly as predicted. Members post profit screenshots. You invest. The stock keeps climbing.
                </p>

                <p>
                    Then the crash. The advisor is gone. The group is deleted. Your investment is worth almost nothing.
                </p>

                <p>
                    This is India&apos;s fastest-growing investment fraud in 2026. With over <strong>15 crore demat account
                    holders</strong> and a sharp rise in retail participation since 2020, India&apos;s stock market has
                    attracted a parallel industry of fake SEBI advisors running coordinated pump-and-dump operations
                    through Telegram, WhatsApp, and YouTube.
                </p>

                <p>
                    This guide explains exactly how these scams work, the 5 stock scam variants active in 2026, and
                    the single SEBI verification step that stops every one of them cold.
                </p>

                {/* FEATURED SNIPPET BLOCK */}
                <div className="not-prose my-8 rounded-2xl border-2 border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/40 p-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">
                        How to verify a SEBI registered advisor in India (5 minutes)
                    </p>
                    <ol className="space-y-2.5 list-none">
                        {[
                            ['1', 'Get their SEBI Registration Number (format: INH000XXXXXX)'],
                            ['2', 'Go to sebi.gov.in, then Intermediaries, then Research Analyst'],
                            ['3', 'Search by registration number or firm name'],
                            ['4', 'Verify name, address, and contact details match exactly'],
                            ['5', 'Confirm registration status is currently Active, not Expired or Cancelled'],
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
                        No matching registration means an illegal operator under SEBI Act Section 12. Report at cybercrime.gov.in or scores.gov.in.
                    </p>
                </div>

                <hr />

                {/* WHY INDIA IS THE TARGET */}
                <h2>Why India&apos;s Retail Investors Are the Perfect Target</h2>

                <p>
                    Three forces converged after 2020 to create the ideal conditions for stock tip fraud in India:
                </p>

                <ul>
                    <li>
                        <strong>Explosive demat account growth.</strong> India crossed 15 crore demat accounts in 2024,
                        up from 4 crore in 2020. Tens of millions of first-time investors entered the market with
                        real savings and limited experience, making them highly susceptible to persuasive tips.
                    </li>
                    <li>
                        <strong>Telegram and WhatsApp as unregulated broadcast channels.</strong> Both platforms allow
                        anyone to create a group or channel with hundreds of thousands of followers. There is no
                        verification of the creator&apos;s credentials, no minimum qualification, and no regulatory
                        oversight of what financial advice is published.
                    </li>
                    <li>
                        <strong>The credibility of SEBI branding.</strong> Most retail investors know that SEBI
                        registration means something. Scammers exploit this by displaying fake certificates, fake
                        registration numbers, and fake compliance disclaimers that look identical to the real thing.
                    </li>
                </ul>

                <p>
                    The result is a fraud ecosystem that is cheap to operate, difficult to trace, and devastatingly
                    effective against investors who have never learned what a real SEBI registration looks like.
                </p>

                <hr />

                {/* HOW PUMP AND DUMP WORKS */}
                <h2>How the Pump and Dump Scam Works</h2>

                {/* Inline image: pump-dump chart */}
                <div className="not-prose float-right ml-6 mb-4 w-52 sm:w-64 md:w-80 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                    <Image
                        src="/blog/stock-market-tip-scam-india/pump-dump-chart.webp"
                        alt="Pump and dump stock scam explained India  step by step how it works"
                        width={800}
                        height={500}
                        className="w-full object-contain"
                    />
                    <p className="text-[10px] text-center text-gray-500 dark:text-gray-400 italic px-3 py-2 bg-white dark:bg-gray-800">
                        The scammer exits at the peak with crores in profit. All followers are left holding worthless positions.
                    </p>
                </div>

                <p>
                    Pump and dump is a market manipulation scheme that has existed in financial markets for over a
                    century. In India&apos;s digital age, it has been industrialised through social media. Here is the
                    exact playbook:
                </p>

                <h3>The Pump</h3>

                <p>
                    The scammer first identifies a small-cap or micro-cap stock with low daily trading volume. Low
                    volume is critical: it means even a relatively small coordinated buy-in will push the price
                    dramatically upward.
                </p>

                <p>
                    Once the scammer has accumulated a large position at a cheap price, they begin tipping the stock
                    across their Telegram channels, WhatsApp groups, and YouTube videos. The tip arrives with
                    false urgency: <em>"This stock will hit the upper circuit tomorrow. Buy before 9:15 AM."</em>
                </p>

                <p>
                    Thousands of retail followers buy simultaneously. Because the stock has low liquidity, this
                    coordinated demand drives the price sharply higher. The chart looks exactly like the advisor
                    predicted. Other members post screenshots of their gains. Trust in the group deepens.
                </p>

                <h3>The Dump</h3>

                <p>
                    At the moment of peak price, the scammer sells their entire position. Because they bought
                    cheap and are now selling into high demand driven by their own followers, they exit with
                    massive profit. The moment this sell pressure hits the market, the price collapses.
                </p>

                <p>
                    Every retail investor who bought during the pump is now holding a position worth a fraction
                    of what they paid. Many cannot exit because the stock hits the lower circuit, locking
                    them in as the price continues to fall over the following days.
                </p>

                <h3>The Fake SEBI Certificate</h3>

                <p>
                    To maintain legitimacy between pump cycles, the advisor displays a SEBI Research Analyst
                    registration number prominently in their bio and channel description. This number is either
                    completely fabricated, stolen from a real registered analyst, or an expired registration
                    that was never renewed. The format (INH000XXXXXX) looks authentic to anyone who has
                    never verified one.
                </p>

                <p>
                    The critical point: <strong>verifying this number takes exactly 90 seconds on sebi.gov.in
                    and reveals the fraud immediately.</strong> Most victims never check.
                </p>

                <div className="clear-both" />

                <hr />

                {/* 5 VARIANTS */}
                <h2>The 5 Stock Scam Variants in 2026</h2>

                <p>
                    The pump-and-dump core is consistent, but scammers have developed several variations targeting
                    different investor profiles:
                </p>

                <h3>Variant 1: Telegram SEBI Analyst Channel</h3>
                <p>
                    The most common format. A channel with a verified-looking profile, regular stock tips, and
                    public profit screenshots. Free access to build a following, then paid &quot;premium tips&quot;
                    that are simply the stocks the scammer already owns.
                </p>

                <h3>Variant 2: F&O Tips Scam</h3>
                <p>
                    Futures and Options (F&O) traders are targeted with tips about weekly expiry trades. The
                    leverage in F&O means losses can exceed the original investment. Fake advisors charge
                    monthly subscription fees ranging from &#8377;5,000 to &#8377;50,000 for &quot;algorithmic
                    F&O signals&quot; that are worthless or deliberately wrong.
                </p>

                <h3>Variant 3: Fake IPO Allotment Scam</h3>
                <p>
                    During high-demand IPO seasons, scammers contact investors claiming to guarantee IPO
                    allotment in oversubscribed issues. They collect an &quot;advance booking fee&quot; via UPI.
                    No legitimate entity can guarantee IPO allotment  it is determined by SEBI-regulated
                    lottery, not advisors.
                </p>

                <h3>Variant 4: Fake Portfolio Management Service</h3>
                <p>
                    Investors with larger capital are approached with offers to manage their portfolio for a
                    percentage of profits. The scammer transfers small amounts initially to build trust, then
                    asks for a larger &quot;managed fund&quot; transfer that disappears.
                </p>

                <h3>Variant 5: Fake Demat Account Transfer Scam</h3>
                <p>
                    Victims are told their demat account has been &quot;flagged&quot; by SEBI for compliance issues.
                    A fake SEBI officer offers to resolve it for a fee. This is a variant of the{' '}
                    <Link href="/blog/digital-arrest-scam-india">digital arrest scam</Link> applied specifically
                    to stock market investors.
                </p>

                <hr />

                {/* HOW TO VERIFY */}
                <h2>How to Verify Any SEBI Registered Advisor in 5 Minutes</h2>

                {/* Inline image: SEBI verify steps */}
                <div className="not-prose float-right ml-6 mb-4 w-44 sm:w-52 md:w-64 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                    <Image
                        src="/blog/stock-market-tip-scam-india/sebi-verify-steps.webp"
                        alt="How to verify SEBI registered advisor India  5 steps sebi.gov.in guide"
                        width={800}
                        height={600}
                        className="w-full object-contain"
                    />
                    <p className="text-[10px] text-center text-gray-500 dark:text-gray-400 italic px-3 py-2 bg-white dark:bg-gray-800">
                        Active status at sebi.gov.in is the only verification that matters.
                    </p>
                </div>

                <p>
                    This is the single most important action any retail investor can take before paying for
                    stock advice. It takes under 5 minutes and is definitive.
                </p>

                <ol>
                    <li>
                        <strong>Get their SEBI Registration Number.</strong> A legitimate research analyst will
                        provide a registration number in the format <strong>INH000XXXXXX</strong> (for individuals)
                        or <strong>INH000XXXXXX</strong> (for firms). If they refuse or claim it is confidential,
                        stop immediately.
                    </li>
                    <li>
                        <strong>Go to sebi.gov.in.</strong> Navigate to the Intermediaries section, then select
                        Research Analyst from the list of intermediary types.
                    </li>
                    <li>
                        <strong>Search by registration number or firm name.</strong> Enter the number or name
                        exactly as the advisor provided it.
                    </li>
                    <li>
                        <strong>Verify every detail matches.</strong> The registered name, address, and contact
                        details must match exactly what the advisor claims. A scammer may use a real registration
                        number but a different name or location.
                    </li>
                    <li>
                        <strong>Confirm the registration status is Active.</strong> An Expired or Cancelled
                        registration is not valid. An advisor operating on a lapsed registration is breaking
                        the law exactly like an unregistered one.
                    </li>
                </ol>

                <p>
                    No matching registration entry means the operator is illegal under SEBI Act Section 12.
                    Report at <strong>cybercrime.gov.in</strong> or SEBI&apos;s SCORES portal at{' '}
                    <strong>scores.gov.in</strong>.
                </p>

                <div className="clear-both" />

                <hr />

                {/* RED FLAGS */}
                <h2>Red Flags of Stock Market Tip Scams</h2>

                {/* Inline image: red flags poster */}
                <div className="not-prose float-right ml-6 mb-4 w-44 sm:w-52 md:w-64 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                    <Image
                        src="/blog/stock-market-tip-scam-india/stock-scam-red-flags.webp"
                        alt="7 red flags of fake stock advisor India  pump dump warning signs checklist"
                        width={800}
                        height={900}
                        className="w-full object-contain"
                    />
                    <p className="text-[10px] text-center text-gray-500 dark:text-gray-400 italic px-3 py-2 bg-white dark:bg-gray-800">
                        See any of these? Verify at sebi.gov.in before paying a single rupee.
                    </p>
                </div>

                <p>
                    Each of these red flags is present in virtually every fake stock advisory operation in India.
                    Recognising even one should end the relationship immediately:
                </p>

                <ul>
                    <li>
                        <strong>Guaranteed returns.</strong> SEBI-registered research analysts are legally
                        prohibited from guaranteeing returns. Any advisor claiming &quot;100% accuracy&quot; or
                        &quot;guaranteed 30% monthly&quot; is operating illegally, regardless of how convincing
                        their past tips looked.
                    </li>
                    <li>
                        <strong>Cannot show a verifiable SEBI registration number.</strong> Deflection, vague
                        claims, or an unverifiable certificate image are all red flags. The INH number is
                        public and searchable in under 30 seconds.
                    </li>
                    <li>
                        <strong>Asks for UPI or personal bank transfer.</strong> Registered advisors collect
                        fees through proper business accounts with GST invoices. Any advisor asking for payment
                        to a personal UPI ID or personal bank account is operating outside legal frameworks.
                    </li>
                    <li>
                        <strong>Tips only unknown illiquid small-cap stocks.</strong> The stocks recommended
                        are always obscure, low-volume companies where small coordinated buying can drive
                        price action. No legitimate research analyst focuses exclusively on penny stocks.
                    </li>
                    <li>
                        <strong>Time pressure tactics.</strong> &quot;Buy before 9:15 AM or the window closes&quot;
                        is designed to prevent you from pausing to verify. Real investment opportunities do not
                        expire in minutes.
                    </li>
                    <li>
                        <strong>All group members claiming huge profits.</strong> In pump-and-dump groups, the
                        scammer controls multiple accounts that post fake profit screenshots. These testimonials
                        are fabricated to build social proof and encourage others to buy.
                    </li>
                    <li>
                        <strong>Claims of inside information.</strong> Any advisor claiming access to non-public
                        information about a company is describing insider trading, which is a criminal offence
                        under SEBI regulations. Even if the claim were true, acting on it would expose you to
                        criminal prosecution.
                    </li>
                </ul>

                <div className="clear-both" />

                <hr />

                {/* IF YOU HAVE ALREADY LOST MONEY */}
                <h2>If You Have Already Lost Money</h2>

                <p>
                    If you have already paid a fake advisor or lost money on pump-and-dump stocks, act
                    immediately. Funds move quickly and recovery chances drop with every hour of delay.
                </p>

                <div className="not-prose my-6 rounded-2xl border-2 border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/30 p-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-red-600 dark:text-red-400 mb-4">
                        Act in the next 30 minutes
                    </p>
                    <ol className="space-y-3 list-none">
                        {[
                            ['1', 'Stop all payments to the advisor immediately, even if they promise to recover your losses'],
                            ['2', 'Screenshot every conversation, payment receipt, group post, and the advisor\'s SEBI certificate claim'],
                            ['3', 'Call 1930, India\'s National Cybercrime Helpline, and report the bank account or UPI ID you paid'],
                            ['4', 'File at SEBI SCORES (scores.gov.in) for the securities fraud specifically'],
                            ['5', 'File at cybercrime.gov.in with all screenshots and transaction details'],
                            ['6', 'Report the Telegram group or phone number at rakshaai.co to protect other investors'],
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
                    SEBI&apos;s SCORES portal is specifically designed for investor complaints about securities fraud
                    and has authority to investigate registered intermediaries. Cybercrime.gov.in handles the
                    fraud and cheating angle. Filing on both maximises the chance of action being taken.
                </p>

                <p>
                    If the scammer used a crypto investment component alongside the stock tips, also read the{' '}
                    <Link href="/blog/crypto-investment-scam-india-2026">crypto investment scam guide</Link>.
                    If you need a full recovery roadmap, the{' '}
                    <Link href="/blog/got-scammed-online-india-what-to-do">step-by-step scam recovery guide</Link> covers
                    every action to take within 30 minutes of realising you have been scammed.
                </p>

                <hr />

                {/* FAQ */}
                <h2>Frequently Asked Questions</h2>

                <h3>How do I check if a stock advisor is SEBI registered in India?</h3>
                <p>
                    Go to <strong>sebi.gov.in</strong>, navigate to Intermediaries, select Research Analyst,
                    and search for the advisor&apos;s SEBI Registration Number (format INH000XXXXXX). Verify the
                    registered name, status, and address match exactly what the advisor claims. An Active status
                    entry is the only verification that matters.
                </p>

                <h3>What is pump and dump scam in Indian stock market?</h3>
                <p>
                    Pump and dump is a scheme where scammers buy low-liquidity small-cap stocks, recommend them
                    via Telegram or WhatsApp to large groups of retail investors, wait for the price to rise as
                    the group buys, then sell at the peak leaving all followers with heavy losses. The stock
                    typically collapses within days, and the advisor&apos;s group is deleted.
                </p>

                <h3>Can a SEBI advisor guarantee stock returns in India?</h3>
                <p>
                    No. SEBI-registered research analysts are legally prohibited from guaranteeing returns.
                    Any advisor claiming &quot;guaranteed returns&quot; or &quot;100% accuracy&quot; is either operating
                    illegally or is a complete fraud. Report such claims at <strong>scores.gov.in</strong>.
                </p>

                <h3>Where do I complain about a fake stock tip group in India?</h3>
                <p>
                    File at SEBI&apos;s SCORES portal (<strong>scores.gov.in</strong>) for securities fraud,
                    at <strong>cybercrime.gov.in</strong> for online fraud, and at your local police station
                    for criminal cheating under IPC. Also report at <Link href="/phone-number-checker">rakshaai.co</Link>{' '}
                    to warn other investors from the same group or advisor.
                </p>

                <h3>What is the SEBI investor helpline number?</h3>
                <p>
                    SEBI&apos;s toll-free investor helpline is <strong>1800-266-7575</strong>, available Monday
                    to Friday 9:30 AM to 5:30 PM. For online complaints use <strong>scores.gov.in</strong>,
                    SEBI&apos;s dedicated investor grievance redressal system. For immediate cybercrime reporting,
                    call <strong>1930</strong>.
                </p>

                <hr />

                {/* FINAL CTA */}
                <div className="not-prose my-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/60 p-8 text-center">
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">
                        Free Tool
                    </p>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                        Received a suspicious stock tip or number? Check it now.
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 max-w-sm mx-auto">
                        Paste any phone number or Telegram group link into RakshaAI for an instant fraud check.
                        No sign-up. No cost. Results in under 5 seconds.
                    </p>
                    <Link
                        href="/phone-number-checker"
                        className="inline-flex items-center gap-2 px-7 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold text-sm rounded-full hover:bg-gray-700 dark:hover:bg-gray-100 transition-colors"
                    >
                        Check a Number Now &rarr;
                    </Link>
                    <p className="text-gray-400 dark:text-gray-500 text-xs mt-4">
                        100% free &middot; No sign-up required &middot; Save 1930 in your contacts
                    </p>
                </div>

            </BlogLayout>
        </>
    )
}
