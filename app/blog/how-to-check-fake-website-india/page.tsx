import { Metadata } from 'next'
import BlogLayout from '@/components/BlogLayout'
import Link from 'next/link'
import Image from 'next/image'
import { blogPostingSchema, faqPageSchema, breadcrumbListSchema, personSchema, jsonLd } from '@/lib/seo/schema'
import SidebarFakeWebsite from '@/components/blog/SidebarFakeWebsite'

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
    title: { absolute: 'Is This Website Fake? How to Check in 60 Seconds | RakshaAI' },
    description:
        '7 ways to spot a fake website in 60 seconds  domain check, WHOIS lookup, review search, and India\'s fastest free scam detector. Free, instant.',
    keywords:
        'how to check if website is fake India, fake website detector India free, scam website checker, how to identify fake shopping website, is this website safe India, fake government portal India, fake booking website India, WHOIS check website India',
    authors: [{ name: 'Rabinarayan Pradhan', url: 'https://www.linkedin.com/in/rabinarayan-pradhan-14ab9422b/' }],
    robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
    openGraph: {
        title: 'Is This Website Fake? 7 Ways to Check in 60 Seconds',
        description:
            'Domain check, WHOIS lookup, RakshaAI scanner  7 ways to verify any website before you pay. Free and instant.',
        type: 'article',
        siteName: 'RakshaAI',
        publishedTime: '2026-05-26T00:00:00.000Z',
        modifiedTime: '2026-05-26T00:00:00.000Z',
        tags: ['fake website India', 'scam website checker', 'online shopping fraud India', 'cybercrime India 2026'],
        url: 'https://rakshaai.co/blog/how-to-check-fake-website-india',
        images: [
            {
                url: '/blog/how-to-check-fake-website-india/fake-website-hero.webp',
                width: 1200,
                height: 800,
                alt: 'Man examining a suspicious fake website URL through a magnifying glass on his laptop',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Is This Website Fake? 7 Ways to Check in 60 Seconds',
        description:
            'Domain typos, WHOIS age, missing reviews, direct bank transfers  7 red flags that confirm a website is fake. Check any site free at rakshaai.co.',
        images: ['/blog/how-to-check-fake-website-india/fake-website-hero.webp'],
    },
    alternates: {
        canonical: 'https://rakshaai.co/blog/how-to-check-fake-website-india',
    },
}

// ─── Structured Data ─────────────────────────────────────────────────────────
const articleStructuredData = blogPostingSchema({
    headline: 'How to Check If a Website Is Fake Before You Pay: Complete Guide 2026',
    description:
        '7 proven ways to detect a fake website in India  domain name checks, WHOIS age, review search, RakshaAI scanner, and what to do if you already paid.',
    url: '/blog/how-to-check-fake-website-india',
    image: '/blog/how-to-check-fake-website-india/fake-website-hero.webp',
    datePublished: '2026-05-26T00:00:00.000Z',
    dateModified: '2026-06-04T00:00:00.000Z',
    author: personSchema({ name: 'Rabinarayan Pradhan', jobTitle: 'Cybersecurity Writer', url: '/author/rabinarayan-pradhan', image: '/authors/rabinarayan-pradhan.jpeg', sameAs: ['https://www.linkedin.com/in/rabinarayan-pradhan-14ab9422b/'] }),
    section: 'Online Shopping Fraud',
    keywords: ['fake website India', 'scam website checker', 'how to identify fake shopping website', 'WHOIS check India'],
})

const breadcrumbSchema = breadcrumbListSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'How to Check If a Website Is Fake', url: '/blog/how-to-check-fake-website-india' },
])

const faqStructuredData = faqPageSchema([
    {
        question: 'How can I check if a website is safe to buy from in India?',
        answer:
            'Go to rakshaai.co and paste the website URL  you get an instant safety assessment free. Also check the domain age at who.is, search for independent reviews, and verify the GST number at gst.gov.in.',
    },
    {
        question: 'What makes a shopping website fake?',
        answer:
            'Prices far below market, domain created recently (check WHOIS), no verifiable contact information, only accepts direct bank transfers, no independent reviews, and vague or missing return policy.',
    },
    {
        question: 'Is HTTPS enough to know a website is safe?',
        answer:
            'No. HTTPS (the padlock icon) only means the connection is encrypted. Scammers can get HTTPS certificates for free in minutes. It does not mean the website is legitimate.',
    },
    {
        question: 'How do I check a website\'s GST number is real?',
        answer:
            'Go to gst.gov.in and search the GST number listed on the website. It should match the company name exactly. Fake websites often use made-up GST numbers or legitimate numbers that belong to different companies.',
    },
    {
        question: 'What should I do if I already paid a fake website?',
        answer:
            'Call 1930 immediately, contact your bank for a transaction reversal, file a complaint at cybercrime.gov.in, and report the website URL at rakshaai.co to protect other Indians.',
    },
])

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function FakeWebsiteCheckerPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLd([articleStructuredData, faqStructuredData, breadcrumbSchema]) }}
            />
            <BlogLayout
                title="How to Check If a Website Is Fake Before You Pay (2026 Guide)"
                description="7 ways to spot a fake website in 60 seconds  domain check, WHOIS lookup, review search, and India's fastest free scam detector."
                publishedAt="2026-05-26T00:00:00.000Z"
                lastUpdated="2026-05-27T00:00:00.000Z"
                readTime="9 min"
                author="Rabinarayan Pradhan"
                authorUrl="/author/rabinarayan-pradhan"
                primaryTool={{ label: 'Check a website for safety', href: '/website-safety-checker' }}
                tags={['Online Shopping Fraud', 'Scam Alerts', 'Fake Website', 'Cybercrime India']}
                slug="how-to-check-fake-website-india"
                sidebar={<SidebarFakeWebsite title="How to Check If a Website Is Fake Before You Pay (2026 Guide)" description="7 ways to spot a fake website in 60 seconds  domain check, WHOIS lookup, review search, and India's fastest free scam detector." />}
            >

                {/* ── HERO IMAGE ────────────────────────────────────────────── */}
                <div className="not-prose mb-10 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                        src="/blog/how-to-check-fake-website-india/fake-website-hero.webp"
                        alt="Man examining a suspicious fake website URL through a magnifying glass on his laptop at night"
                        width={1200}
                        height={800}
                        className="w-full object-cover"
                        priority
                    />
                    <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-2 mb-0 italic px-4 pb-3">
                        Fake e-commerce stores copy the look of real brands but use slightly altered domain names  a trap millions of Indian shoppers fall into every year.
                    </p>
                </div>

                {/* ── INTRO ─────────────────────────────────────────────────── */}
                <p>
                    You find a website selling the exact laptop you have been looking at  ₹12,000 cheaper than Amazon,
                    free shipping, and a reassuring padlock icon in the address bar. You add it to cart.
                    Before you pay, spend 60 seconds on this guide.
                </p>

                <p>
                    In 2024, Indians lost over <strong>₹7,061 crore</strong> to online fraud, according to Ministry of
                    Home Affairs data. A significant portion came from fake e-commerce stores, fake booking websites,
                    and counterfeit government portals. The padlock icon does not make a site safe. Low prices are
                    not a deal  they are bait.
                </p>

                <p>
                    Here are 7 checks that take under 60 seconds total and will tell you definitively whether a
                    website is real or a scam.
                </p>

                {/* ── FEATURED SNIPPET BLOCK ────────────────────────────────── */}
                <div className="not-prose my-8 rounded-2xl border-2 border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/40 p-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">
                        How to check if a website is real or fake in India  7 steps
                    </p>
                    <ol className="space-y-2.5 list-none">
                        {[
                            ['1', 'Check the domain name carefully for misspellings or extra words'],
                            ['2', 'Use WHOIS (who.is) to check when the site was created  under 6 months is a red flag'],
                            ['3', 'Search for independent reviews on Google, Trustpilot, or Reddit'],
                            ['4', 'Check the website URL on RakshaAI (rakshaai.co)  free AI scam detector'],
                            ['5', 'Verify the contact number and address independently'],
                            ['6', 'Read the return/refund policy  vague or missing means avoid'],
                            ['7', 'Only pay through recognised gateways, never direct bank transfer to unknown accounts'],
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
                        Already paid? Call 1930 immediately and contact your bank. Speed determines recovery.
                    </p>
                </div>

                <hr />

                {/* ── TYPES OF FAKE WEBSITES ────────────────────────────────── */}
                <h2>The 4 Most Common Fake Websites Targeting Indians</h2>

                {/* Float right: types of fake websites grid */}
                <div className="not-prose float-right ml-6 mb-4 w-52 sm:w-64 md:w-72 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                    <Image
                        src="/blog/how-to-check-fake-website-india/types-of-fake-websites-india.webp"
                        alt="4 types of fake websites targeting Indians: fake e-commerce stores, fake booking sites, fake govt portals, fake investment platforms"
                        width={900}
                        height={900}
                        className="w-full object-contain"
                    />
                    <p className="text-[10px] text-center text-gray-500 dark:text-gray-400 italic px-3 py-2 bg-white dark:bg-gray-800">
                        Four categories, one outcome: you pay and receive nothing.
                    </p>
                </div>

                <p>
                    Before learning how to detect fake sites, it helps to understand what you are looking for.
                    Cybercriminals in India currently operate four main categories of fraudulent websites:
                </p>

                <ul>
                    <li>
                        <strong>Fake e-commerce stores.</strong> These mimic real brands or create entirely fictitious stores
                        offering electronics, clothing, or household goods at 50–80% below market price. You pay, and nothing arrives.
                        Sometimes counterfeit or broken goods are sent to delay disputes.
                    </li>
                    <li>
                        <strong>Fake booking websites.</strong> These impersonate legitimate travel platforms, offering hotel
                        bookings, bus tickets, or pilgrimage packages (Char Dham, Vaishno Devi). The booking confirms, the hotel
                        does not know you exist.
                    </li>
                    <li>
                        <strong>Fake government portals.</strong> These copy the visual design of IRCTC, UIDAI (Aadhaar),
                        PAN card services, and Passport Seva to steal your identity documents and money simultaneously.
                    </li>
                    <li>
                        <strong>Fake investment platforms.</strong> These show you growing profits on a convincing dashboard,
                        then block all withdrawals until you have deposited your savings.
                    </li>
                </ul>

                <div className="clear-both" />

                <hr />

                {/* ── CHECK 1: DOMAIN NAME ──────────────────────────────────── */}
                <h2>Check 1: Look at the Domain Name Character by Character</h2>

                {/* Float right: real vs fake URL comparison */}
                <div className="not-prose float-right ml-6 mb-4 w-44 sm:w-52 md:w-64 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                    <Image
                        src="/blog/how-to-check-fake-website-india/real-vs-fake-url-india.webp"
                        alt="Side-by-side comparison of real Amazon.in URL versus 4 fake variations including amazon-india-deals.com and amazom.in"
                        width={900}
                        height={900}
                        className="w-full object-contain"
                    />
                    <p className="text-[10px] text-center text-gray-500 dark:text-gray-400 italic px-3 py-2 bg-white dark:bg-gray-800">
                        Scammers register domains that look nearly identical at a glance. The "o" in amazom.in is the difference between safe and scammed.
                    </p>
                </div>

                <p>
                    This is the single most important check, and it takes five seconds. Look at the address bar in your
                    browser and read the domain name slowly, character by character.
                </p>

                <p>
                    Scammers use three domain manipulation techniques:
                </p>

                <ul>
                    <li>
                        <strong>Typosquatting:</strong> One letter changed  <em>amazom.in</em> instead of amazon.in,
                        <em>flipkart.net</em> instead of flipkart.com. At normal reading speed, your brain autocorrects the error.
                    </li>
                    <li>
                        <strong>Keyword stuffing:</strong> Extra words added  <em>amazon-india-deals.com</em>,
                        <em>irctc-booking-online.in</em>, <em>sbi-netbanking-login.com</em>. No real institution
                        puts its own service name in a subdomain or hyphenated URL.
                    </li>
                    <li>
                        <strong>Wrong TLD:</strong> The genuine domain exists at .gov.in but the fake is at .com.
                        IRCTC is irctc.co.in. Any other domain claiming to be IRCTC is fake.
                    </li>
                </ul>

                <p>
                    <strong>The rule:</strong> If the domain is anything other than the exact official domain 
                    including one extra character, one missing character, or any additional words  treat it as fake
                    until proven otherwise.
                </p>

                <div className="clear-both" />

                <hr />

                {/* ── CHECK 2: WHOIS ────────────────────────────────────────── */}
                <h2>Check 2: WHOIS Lookup  How Old Is the Website?</h2>

                <p>
                    Every domain has a public registration record. Go to <strong>who.is</strong> (or whois.domaintools.com)
                    and type in the website address. Look for "Created On" or "Registration Date".
                </p>

                <p>
                    Legitimate businesses operate for years before accumulating the trust that drives significant sales
                    volume. Fake e-commerce stores are registered days or weeks before they go live, run their fraud for
                    a few months, and then disappear when complaints pile up  only to reappear under a new domain.
                </p>

                <p>
                    <strong>The threshold:</strong> A website created less than 6 months ago that is already selling
                    high-value goods at significant discounts is almost certainly a scam. This is not a perfect rule 
                    legitimate startups are young  but combined with any other red flag, a young domain is decisive.
                </p>

                <p>
                    You will sometimes find that WHOIS data is "redacted for privacy" or "protected by proxy service".
                    Privacy protection is not itself a red flag  many legitimate sites use it. But a new domain with
                    full WHOIS privacy and no other verifiable identity is a strong warning sign.
                </p>

                <hr />

                {/* ── CHECK 3: REVIEWS ──────────────────────────────────────── */}
                <h2>Check 3: Search for Independent Reviews</h2>

                <p>
                    Open a new tab and search: <em>"[website name] review"</em>, <em>"[website name] scam"</em>,
                    and <em>"[website name] Reddit"</em>. Do this on Google, not on the website itself  fake stores
                    populate their own review sections with fabricated five-star testimonials.
                </p>

                <p>
                    What you are looking for: reviews on platforms where the site owner cannot delete or moderate
                    feedback  Google Maps reviews if the business has a listed address, Trustpilot, Reddit threads,
                    or consumer forums like consumercomplaints.in and icomplaints.in.
                </p>

                <p>
                    <strong>Absence of reviews is itself a red flag.</strong> Any genuine e-commerce platform
                    operating for more than a few months will have an independent review trail  positive or negative.
                    If the only reviews you can find are on the site itself or on suspiciously new Google accounts,
                    the store is likely fake.
                </p>

                <hr />

                {/* ── CHECK 4: RAKSHAAI ─────────────────────────────────────── */}
                <h2>Check 4: Run the URL Through RakshaAI</h2>

                <p>
                    Go to <Link href="/website-safety-checker">rakshaai.co/website-safety-checker</Link> and paste the website URL into the search bar. RakshaAI
                    cross-references the URL against reported scam databases, analyses domain registration patterns,
                    checks for known phishing infrastructure, and returns a safety assessment in under 5 seconds.
                </p>

                <p>
                    This is the fastest single check available to Indian users, and it is free with no sign-up required.
                    Over 10 million Indians have used RakshaAI to verify websites, phone numbers, and UPI IDs before
                    transacting.
                </p>

                <p>
                    A green result does not make a website 100% safe  new scam sites appear daily and no database
                    is perfectly up to date. But a red or amber result is a definitive stop sign. Combine this check
                    with the others in this guide for the strongest protection.
                </p>

                <hr />

                {/* ── CHECK 5: CONTACT DETAILS ──────────────────────────────── */}
                <h2>Check 5: Verify the Contact Details Independently</h2>

                <p>
                    Scroll to the bottom of the website. Look for a physical address, phone number, email address,
                    and GST number. Then verify each one independently  do not just call the number listed on the site.
                </p>

                <ul>
                    <li>
                        <strong>GST number:</strong> Go to <strong>gst.gov.in</strong> and search the GST number.
                        The registered business name should exactly match the website. Fake websites frequently use
                        fabricated GST numbers or real GST numbers belonging to entirely different companies.
                    </li>
                    <li>
                        <strong>Physical address:</strong> Search the address on Google Maps. Is there actually a business
                        there? Many fake stores list famous commercial areas in Delhi, Mumbai, or Bengaluru to appear
                        credible  the address leads to an empty plot or a different business entirely.
                    </li>
                    <li>
                        <strong>Phone number:</strong> Search the number on TrueCaller. Also search it on Google with
                        the word "fraud" or "scam". Victim reports accumulate around scam numbers quickly.
                    </li>
                </ul>

                <hr />

                {/* ── CHECK 6: RETURN POLICY ────────────────────────────────── */}
                <h2>Check 6: Read the Refund and Return Policy</h2>

                <p>
                    Find the return and refund policy page (usually linked in the footer). Read it carefully.
                    Legitimate businesses have specific, detailed policies: a clear return window (7 days, 30 days),
                    a defined process for raising a return request, and conditions that make logical commercial sense.
                </p>

                <p>
                    Fake websites handle this in two ways: they either have no policy at all (the link leads to a
                    404 page or a blank page), or they have a deliberately vague policy filled with language like
                    "refunds are at our sole discretion" or "exchanges only, no refunds under any circumstances".
                </p>

                <p>
                    <strong>The test:</strong> Could you actually use this policy to get your money back?
                    If the process described seems designed to be impossible to complete, it probably is.
                </p>

                <hr />

                {/* ── CHECK 7: PAYMENT METHOD ───────────────────────────────── */}
                <h2>Check 7: How Does the Website Ask You to Pay?</h2>

                <p>
                    This is often the final tell, and it comes late in the purchase process when you are already
                    committed. Watch for what payment options are offered at checkout.
                </p>

                {/* Float right: 7 checks checklist infographic */}
                <div className="not-prose float-right ml-6 mb-4 w-44 sm:w-52 md:w-64 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                    <Image
                        src="/blog/how-to-check-fake-website-india/website-safety-checklist-india.webp"
                        alt="Is this website safe? 7 quick checks infographic: domain name, WHOIS age, reviews, RakshaAI, contact details, refund policy, payment method"
                        width={900}
                        height={1200}
                        className="w-full object-contain"
                    />
                    <p className="text-[10px] text-center text-gray-500 dark:text-gray-400 italic px-3 py-2 bg-white dark:bg-gray-800">
                        Any single "No"  stop and report at rakshaai.co.
                    </p>
                </div>

                <p>
                    Recognised payment gateways  Razorpay, PayU, CCAvenue, PayTM, UPI through a registered merchant
                    ID, or credit/debit cards through a bank-verified portal  all create a transaction record and
                    give you a dispute mechanism.
                </p>

                <p>
                    <strong>Direct bank transfer to an individual account is always a red flag.</strong> No legitimate
                    e-commerce business requires you to transfer money directly to a personal bank account. This payment
                    method exists specifically because it bypasses all dispute resolution. Once the money lands in the
                    fraudster's mule account, it is moved within minutes.
                </p>

                <p>
                    Also watch for: requests to pay via cryptocurrency, gift cards, or wallets that do not offer
                    buyer protection. These are the three payment channels scammers prefer because they are
                    effectively irreversible.
                </p>

                <div className="clear-both" />

                <hr />

                {/* ── HTTPS MYTH ────────────────────────────────────────────── */}
                <h2>The HTTPS Myth: The Padlock Does Not Mean Safe</h2>

                <p>
                    This deserves its own section because it is the most widespread misunderstanding in online
                    safety. The padlock icon in your browser's address bar means one thing: the connection between
                    your browser and the server is encrypted. That is all.
                </p>

                <p>
                    It does not mean the website is legitimate. It does not mean the person operating the server
                    is trustworthy. It does not mean your payment will reach a real business.
                </p>

                <p>
                    TLS/SSL certificates  the technology behind HTTPS  are available for free from providers like
                    Let's Encrypt. A scammer can register a fake domain, point it to a fraudulent server, and
                    obtain a valid HTTPS certificate within 10 minutes at zero cost. The padlock on
                    <em> amazon-india-deals.com</em> is identical to the padlock on <em>amazon.in</em>.
                </p>

                <p>
                    Use HTTPS as a minimum baseline  avoid any site that does not have it  but never treat it
                    as a safety certificate. The domain name and the checks above are what actually protect you.
                </p>

                <hr />

                {/* ── FAQ ───────────────────────────────────────────────────── */}
                <h2>Frequently Asked Questions</h2>

                <h3>How can I check if a website is safe to buy from in India?</h3>
                <p>
                    Go to <Link href="/website-safety-checker">rakshaai.co/website-safety-checker</Link> and paste the website URL for an instant safety assessment.
                    Also check the domain age at who.is, search for independent reviews on Google and Trustpilot,
                    and verify the GST number at gst.gov.in. Run all 7 checks above before any high-value purchase.
                </p>

                <h3>What makes a shopping website fake?</h3>
                <p>
                    The clearest signs: prices far below market rate, domain created recently (under 6 months old),
                    no verifiable contact information, payment only by direct bank transfer, no independent reviews
                    on Google or Trustpilot, and a vague or missing return/refund policy.
                </p>

                <h3>Is HTTPS enough to know a website is safe?</h3>
                <p>
                    No. HTTPS only means the connection is encrypted. Scammers obtain free HTTPS certificates in
                    minutes. The padlock tells you nothing about whether the business behind the website is real.
                    Check the domain name and run the 7-step verification above.
                </p>

                <h3>How do I verify a website's GST number?</h3>
                <p>
                    Go to <strong>gst.gov.in</strong> and search the GST number listed on the website under the
                    "Search Taxpayer" section. The registered business name must exactly match the website's claimed
                    company name. Mismatches  or GST numbers that return no results  indicate a fake.
                </p>

                <h3>What should I do if I already paid a fake website?</h3>
                <p>
                    Call <strong>1930</strong> immediately  this is India's National Cybercrime Helpline and the
                    fastest way to flag the destination account for freezing. Then contact your bank's fraud desk,
                    file a complaint at <strong>cybercrime.gov.in</strong>, and report the website URL at{' '}
                    <Link href="/website-safety-checker">rakshaai.co/website-safety-checker</Link> to protect other Indians. The first 30–60 minutes are critical.
                </p>

                <hr />

                {/* ── FINAL THOUGHTS ────────────────────────────────────────── */}
                <h2>Final Thoughts</h2>

                <p>
                    Fake websites succeed because they are designed to move fast  attractive price, urgent
                    "limited offer" countdown, easy checkout. The 7 checks in this guide take less than 60 seconds
                    combined and are specifically designed to interrupt that speed.
                </p>

                <p>
                    The most important habit to build: <strong>check before you pay, not after.</strong>
                    Once money leaves your account via direct transfer, the window for recovery is measured in
                    minutes, not days.
                </p>

                <p>
                    Share this guide with your family  especially anyone who shops online, books travel, or uses
                    government services on the web. The people most at risk are often those least aware that the
                    risk exists.
                </p>

                {/* ── FINAL CTA ─────────────────────────────────────────────── */}
                <div className="not-prose my-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/60 p-8 text-center">
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">
                        Free Tool
                    </p>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                        Unsure about a website? Check it now.
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 max-w-sm mx-auto">
                        Paste any URL into RakshaAI for an instant safety score. No sign-up. No cost. Results in under 5 seconds.
                    </p>
                    <Link
                        href="/website-safety-checker"
                        className="inline-flex items-center gap-2 px-7 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold text-sm rounded-full hover:bg-gray-700 dark:hover:bg-gray-100 transition-colors"
                    >
                        Check a Website Now &rarr;
                    </Link>
                    <p className="text-gray-400 dark:text-gray-500 text-xs mt-4">
                        100% free &middot; No sign-up required &middot; Save 1930 in your contacts
                    </p>
                </div>

            </BlogLayout>
        </>
    )
}
