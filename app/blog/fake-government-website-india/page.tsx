import { Metadata } from 'next'
import BlogLayout from '@/components/BlogLayout'
import Link from 'next/link'
import Image from 'next/image'
import { blogPostingSchema, faqPageSchema, breadcrumbListSchema, personSchema, jsonLd } from '@/lib/seo/schema'
import SidebarFakeGovWebsite from '@/components/blog/SidebarFakeGovWebsite'

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
    title: { absolute: 'Fake Government Website India: Free Services You Paid For | RakshaAI' },
    description:
        'Driving licence, Aadhaar update, PAN card, EPFO  all free on official portals. Fake government websites are charging Indians for services that cost nothing. Here are the real URLs.',
    keywords:
        'fake government website India 2026, fake Aadhaar update website India, fake PAN card website India, fake driving licence website India, fake EPFO website India, real government website URL India, how to identify fake government portal India, government service scam India 2026',
    authors: [{ name: 'Rabinarayan Pradhan', url: 'https://www.linkedin.com/in/rabinarayan-pradhan-14ab9422b/' }],
    robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
    openGraph: {
        title: 'Fake Government Website India: You Paid for Something That Is Completely Free',
        description:
            'Aadhaar update, PAN card, driving licence  all free on official portals. Fake .com sites are charging Indians thousands. Here are the real URLs for every service.',
        type: 'article',
        siteName: 'RakshaAI',
        publishedTime: '2026-07-03T00:00:00.000Z',
        modifiedTime: '2026-07-03T00:00:00.000Z',
        tags: ['fake government website India', 'Aadhaar scam India', 'government service scam India', 'fake PAN card website India'],
        url: 'https://rakshaai.co/blog/fake-government-website-india',
        images: [
            {
                url: '/blog/fake-government-website-india/fake-govt-website-hero.webp',
                width: 1672,
                height: 941,
                alt: 'Fake government website India 2026  fake Aadhaar portal charging fee vs real UIDAI free portal',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Real Government URLs Every Indian Must Bookmark  These Services Are FREE',
        description:
            'Fake .com sites charge for Aadhaar updates, PAN cards, and driving licence renewals that cost nothing on official portals. Share this before someone you know gets cheated.',
        images: ['/blog/fake-government-website-india/fake-govt-website-hero.webp'],
    },
    alternates: {
        canonical: 'https://rakshaai.co/blog/fake-government-website-india',
    },
}

// ── Structured Data ───────────────────────────────────────────────────────────
const articleStructuredData = blogPostingSchema({
    headline: 'Fake Government Website India 2026: Scammers Charging for Free Services',
    description:
        'Fake government portals charge Indians for Aadhaar, PAN, and driving licence services that are completely free. Real official URLs and how to verify any government site.',
    url: '/blog/fake-government-website-india',
    image: '/blog/fake-government-website-india/fake-govt-website-hero.webp',
    datePublished: '2026-07-03T00:00:00.000Z',
    dateModified: '2026-07-03T00:00:00.000Z',
    author: personSchema({ name: 'Rabinarayan Pradhan', jobTitle: 'Cybersecurity Writer', url: '/author/rabinarayan-pradhan', image: '/authors/rabinarayan-pradhan.jpeg', sameAs: ['https://www.linkedin.com/in/rabinarayan-pradhan-14ab9422b/'] }),
    section: 'Fake Websites',
    keywords: ['fake government website India', 'fake Aadhaar website India', 'fake PAN card website India', 'government service scam India 2026'],
})

const breadcrumbSchema = breadcrumbListSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'Fake Government Website India', url: '/blog/fake-government-website-india' },
])

const faqStructuredData = faqPageSchema([
    {
        question: 'What is the real website to update Aadhaar details in India?',
        answer: 'The only official Aadhaar portal is myaadhaar.uidai.gov.in. Aadhaar updates for address, mobile number, and name are done here. Basic updates are free. Any other website claiming to update your Aadhaar for a fee is a fake portal.',
    },
    {
        question: 'What is the real website for PAN card in India?',
        answer: 'PAN card services are available at incometax.gov.in (free for most corrections and Instant PAN via Aadhaar). Any other site charging large fees for PAN services is likely fraudulent.',
    },
    {
        question: 'How do I report a fake government website in India?',
        answer: 'Report at cybercrime.gov.in. You can also report the fake website URL at rakshaai.co to immediately warn other Indians searching for the same service.',
    },
    {
        question: 'Is it safe to pay for government services on third-party websites?',
        answer: 'Only if they are officially empaneled service providers listed on the government portal itself. For core services (Aadhaar, PAN, driving licence, passport), always use the official .gov.in portal directly.',
    },
    {
        question: 'How do real Indian government websites look different from fake ones?',
        answer: 'Real government sites end in .gov.in or .nic.in, load securely (https), and never ask for unusual payment methods like UPI to personal accounts or gift cards. Fake sites may look nearly identical but charge fees the real portal does not charge.',
    },
])

export default function FakeGovWebsitePage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLd([articleStructuredData, faqStructuredData, breadcrumbSchema]) }}
            />
            <BlogLayout
                title="Fake Government Website India: Paying for Services That Are Free"
                description="Driving licence, Aadhaar update, PAN card, EPFO  all free on official portals. Fake government websites are charging Indians for services that cost nothing. Here are the real URLs."
                publishedAt="2026-07-03T00:00:00.000Z"
                lastUpdated="2026-07-03T00:00:00.000Z"
                readTime="10 min"
                author="Rabinarayan Pradhan"
                authorUrl="/author/rabinarayan-pradhan"
                primaryTool={{ label: 'Check any suspicious government website', href: '/website-safety-checker' }}
                tags={['Fake Websites', 'Government Scam', 'Cybercrime India', 'Aadhaar Scam']}
                slug="fake-government-website-india"
                sidebar={<SidebarFakeGovWebsite title="Fake Government Website India: Paying for Services That Are Free" description="Fake government websites charge for Aadhaar, PAN, and driving licence services that are completely free on official .gov.in portals." />}
            >

                {/* ── HERO IMAGE ────────────────────────────────────────────── */}
                <div className="not-prose mb-10 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                        src="/blog/fake-government-website-india/fake-govt-website-hero.webp"
                        alt="Fake government website India 2026  fake Aadhaar Update Service portal charging ₹499 versus real UIDAI portal showing Update Aadhaar for Free"
                        width={1672}
                        height={941}
                        className="w-full object-cover"
                        priority
                    />
                    <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-2 mb-0 italic px-4 pb-3">
                        Left: a fake Aadhaar portal charging ₹499. Right: the real UIDAI portal  Aadhaar update is completely free.
                        The fake site looks nearly identical, but the URL gives it away.
                    </p>
                </div>

                {/* ── INTRO ─────────────────────────────────────────────────── */}
                <p>
                    Your mother needs to update her Aadhaar address. She searches "Aadhaar update online" on Google.
                    The first result looks professional. Government emblem. Familiar blue-and-white design. It asks
                    for her Aadhaar number, her mobile number, and a <strong>processing fee of ₹499</strong>.
                </p>

                <p>
                    She pays. Nothing happens. The site disappears or shows a fake confirmation. The real Aadhaar update
                    was always <strong>100% free</strong> at myaadhaar.uidai.gov.in. She was just charged by a criminal
                    for a government service that costs nothing.
                </p>

                <p>
                    This is India&apos;s most under-reported cyber fraud category in 2026. Tens of thousands of Indians
                    every month pay between ₹299 and ₹5,000 for government services that are legally free. The victims
                    are not careless  they are people who trusted a search result that looked completely official.
                </p>

                {/* ── FEATURED SNIPPET BLOCK ────────────────────────────────── */}
                <div className="not-prose my-8 rounded-2xl border-2 border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/40 p-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">
                        How to identify a fake government website in India
                    </p>
                    <ol className="space-y-2.5 list-none">
                        {[
                            ['1', 'Real Indian government websites ALWAYS end in .gov.in or .nic.in'],
                            ['2', 'Any government-claiming site ending in .com, .net, .org, or plain .in is not official'],
                            ['3', 'Real services are always free  any site charging for Aadhaar, PAN, or licence update is fake'],
                            ['4', 'Check the URL for typos: sarkar.gov.in is real, sarkar-gov.in is a clone'],
                            ['5', 'Avoid clicking Google Ads claiming to be government portals  they are often fake'],
                            ['6', 'Paste any suspicious URL into rakshaai.co/website-safety-checker before proceeding'],
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
                        Real government sites end in .gov.in or .nic.in. No exceptions.
                    </p>
                </div>

                <hr />

                {/* ── SCALE OF PROBLEM ──────────────────────────────────────── */}
                <h2>The Scale of the Problem: Free Services Being Sold for ₹500 to ₹5,000</h2>

                <p>
                    The government&apos;s own cybercrime data reveals how serious this problem has become. Between 2021
                    and 2024, CERT-In received reports of over 3,900 fake government websites. The Ministry of Electronics
                    and IT (MeitY) has proactively blocked thousands of fraudulent portals through NIXI
                    and the Sanchar Saathi portal  but new clones appear within days of each takedown.
                </p>

                <div className="not-prose overflow-x-auto my-8 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                    <table className="min-w-[600px] w-full text-sm text-left">
                        <thead>
                            <tr className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                                <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Government Service</th>
                                <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Real Portal</th>
                                <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Real Cost</th>
                                <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Fake Sites Charge</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                            {[
                                { service: 'Aadhaar Address Update', portal: 'myaadhaar.uidai.gov.in', real: 'Free', fake: '₹299 – ₹999' },
                                { service: 'Instant PAN Card', portal: 'incometax.gov.in', real: 'Free', fake: '₹500 – ₹2,000' },
                                { service: 'Driving Licence Renewal', portal: 'parivahan.gov.in', real: '₹200 (official fee)', fake: '₹800 – ₹3,500' },
                                { service: 'EPFO / PF Balance Check', portal: 'epfindia.gov.in', real: 'Free', fake: '₹299 – ₹999' },
                                { service: 'Passport Application Status', portal: 'passportindia.gov.in', real: 'Free', fake: '₹500 – ₹1,500' },
                                { service: 'Voter ID Correction', portal: 'voters.eci.gov.in', real: 'Free', fake: '₹200 – ₹500' },
                                { service: 'Income Tax e-Filing', portal: 'incometax.gov.in', real: 'Free', fake: '₹500 – ₹5,000' },
                                { service: 'Birth Certificate', portal: 'crsorgi.gov.in', real: 'Minimal official fee', fake: '₹500 – ₹2,000' },
                            ].map((row) => (
                                <tr key={row.service} className="bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                    <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">{row.service}</td>
                                    <td className="px-4 py-3 text-xs font-mono text-green-700 dark:text-green-400">{row.portal}</td>
                                    <td className="px-4 py-3 font-semibold text-green-600 dark:text-green-400">{row.real}</td>
                                    <td className="px-4 py-3 font-semibold text-red-600 dark:text-red-400">{row.fake}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <hr />

                {/* ── 6 MOST CLONED PORTALS ─────────────────────────────────── */}
                <h2>The 6 Most Cloned Government Portals in India</h2>

                <h3>Fake Aadhaar Update and UIDAI Portals</h3>

                <p>
                    The UIDAI (Unique Identification Authority of India) portal at myaadhaar.uidai.gov.in is the most
                    cloned government website in India. Scammers register domains like
                    <em> aadhaarupdateservice.com</em>, <em>uidai-update.in</em>, or <em>myaadhaarpro.com</em>
                    and copy the official design, including the government emblem. They charge ₹299 to ₹999 for an
                    address update that is entirely free. Many also collect the victim&apos;s Aadhaar number, mobile
                    number, and date of birth  data that can be used for identity theft.
                </p>

                <h3>Fake PAN Card Application Websites</h3>

                <p>
                    PAN card application and correction on incometax.gov.in is free for most citizens. The Instant PAN
                    feature (via Aadhaar) takes under 10 minutes at zero cost. Fake portals with names like
                    <em> pancardapply.in</em> or <em>pan-update-india.com</em> charge ₹500 to ₹2,000. In many cases,
                    after collecting payment, the fraudsters also harvest the victim&apos;s Aadhaar and PAN details for
                    resale to financial fraudsters.
                </p>

                <h3>Fake Driving Licence and RTO Portals</h3>

                <p>
                    Parivahan.gov.in is the official portal for all driving licence services. While some services
                    do carry an official government fee (typically ₹200 to ₹500), fake RTO portals charge 3x to 10x
                    the official amount and often do not process the application at all. Victims sometimes only
                    discover the fraud when they fail their physical slot booking and find no record of their application.
                </p>

                <h3>Fake EPFO and PF Withdrawal Portals</h3>

                <p>
                    The EPFO (Employees&apos; Provident Fund Organisation) portal at epfindia.gov.in and the
                    Member e-Sewa portal are free for all PF-related services including balance check, passbook
                    download, and withdrawal claims. Fake portals posing as EPFO claim to "fast-track" PF withdrawals
                    for a processing fee of ₹299 to ₹999. Some ask for the UAN and password  giving fraudsters
                    complete access to the victim&apos;s PF account.
                </p>

                <h3>Fake Income Tax e-Filing Portals</h3>

                <p>
                    The Income Tax Department&apos;s e-filing portal at incometax.gov.in is free for filing returns,
                    checking refunds, and linking PAN with Aadhaar. Fake portals offer "CA-assisted" filing for
                    ₹1,500 to ₹5,000  services that a qualified CA does provide, but these portals have no real CA
                    and simply pocket the money or misuse the tax credentials submitted.
                </p>

                <h3>Fake Passport Seva Portals</h3>

                <p>
                    Passportindia.gov.in is the only official passport portal. The official application fee for a
                    standard fresh passport is ₹1,500  a fixed government fee paid exclusively through the
                    official portal&apos;s payment gateway. Fake portals like <em>passportserviceindia.com</em> or
                    <em> passport-seva-india.in</em> collect this amount plus an additional "agent fee" ranging from
                    ₹500 to ₹3,000, provide no service, and often misuse the passport-related documents uploaded.
                </p>

                <hr />

                {/* ── HOW FAKE SITES APPEAR ON GOOGLE ──────────────────────── */}
                <h2>How Fake Government Websites Appear on Google</h2>

                <div className="not-prose float-right ml-6 mb-4 w-52 sm:w-64 md:w-72 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                    <Image
                        src="/blog/fake-government-website-india/google-search-fake-govt-warning.webp"
                        alt="Google search result for Aadhaar update online showing danger zone sponsored ads and safe official UIDAI result"
                        width={1122}
                        height={1402}
                        className="w-full object-contain"
                    />
                    <p className="text-[10px] text-center text-gray-500 dark:text-gray-400 italic px-3 py-2 bg-white dark:bg-gray-800">
                        Only the green-highlighted official result is safe. Sponsored ads at the top can link to fake portals.
                    </p>
                </div>

                <p>
                    There are three ways fake government portals reach the top of search results  and each exploits a
                    different weakness in how people search.
                </p>

                <p>
                    <strong>Google Ads (Sponsored results):</strong> Just like fake bank helplines, scammers buy Google
                    Ads targeting searches like "Aadhaar update online" or "PAN card apply online". These paid results
                    appear above the real UIDAI or Income Tax portal. The small "Sponsored" label is easy to miss on
                    mobile screens.
                </p>

                <p>
                    <strong>SEO-optimised clones:</strong> Some fake portals invest months in search engine
                    optimisation  publishing blog posts, getting backlinks, and targeting long-tail keywords like
                    "how to update Aadhaar address from home 2026." These appear in the organic (non-paid) section
                    and look like legitimate government help sites before redirecting to a payment page.
                </p>

                <p>
                    <strong>Google Maps and Business listings:</strong> Scammers create fake Google Business profiles
                    claiming to be "Aadhaar Service Center" or "PAN Card Seva Kendra" at real addresses.
                    People searching for nearby government service centres call the listed phone number, which
                    connects to a fraud operator who collects payment remotely.
                </p>

                <div className="clear-both" />

                <hr />

                {/* ── REAL OFFICIAL URLs ────────────────────────────────────── */}
                <h2>The Real Official URLs  Bookmark These Today</h2>

                <div className="not-prose float-right ml-6 mb-6 w-48 sm:w-60 md:w-72 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                    <Image
                        src="/blog/fake-government-website-india/govt-free-services-bookmark-card.webp"
                        alt="Reference card showing real official government website URLs India  bookmark these free services"
                        width={941}
                        height={1672}
                        className="w-full object-contain"
                    />
                    <p className="text-[10px] text-center text-gray-500 dark:text-gray-400 italic px-3 py-2 bg-white dark:bg-gray-800">
                        Save this card. All 8 services on the right are completely free on their official .gov.in portals.
                    </p>
                </div>

                <p>
                    The golden rule: <strong>real Indian government services end in .gov.in or .nic.in.</strong>
                    No exceptions. Here are the verified official URLs for the most commonly cloned services.
                </p>

                <div className="not-prose my-6 space-y-3">
                    {[
                        { service: 'Aadhaar Update', url: 'https://myaadhaar.uidai.gov.in', cost: 'Free', badge: 'UIDAI' },
                        { service: 'PAN Card / Instant PAN', url: 'https://www.incometax.gov.in', cost: 'Free', badge: 'Income Tax Dept.' },
                        { service: 'Driving Licence / RTO', url: 'https://parivahan.gov.in', cost: 'Govt. fee only', badge: 'MoRTH' },
                        { service: 'PF / EPFO Services', url: 'https://www.epfindia.gov.in', cost: 'Free', badge: 'EPFO' },
                        { service: 'Passport Application', url: 'https://www.passportindia.gov.in', cost: 'Govt. fee only', badge: 'MEA' },
                        { service: 'Voter ID Correction', url: 'https://voters.eci.gov.in', cost: 'Free', badge: 'ECI' },
                        { service: 'Birth Certificate', url: 'https://crsorgi.gov.in', cost: 'Minimal official fee', badge: 'RGI' },
                        { service: 'Income Tax e-Filing', url: 'https://eportal.incometax.gov.in', cost: 'Free', badge: 'Income Tax Dept.' },
                    ].map((item) => (
                        <div key={item.service} className="flex items-center justify-between gap-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3">
                            <div className="flex items-center gap-3 min-w-0">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 whitespace-nowrap">{item.badge}</span>
                                <span className="text-sm font-semibold text-gray-900 dark:text-white truncate">{item.service}</span>
                            </div>
                            <div className="flex items-center gap-3 flex-shrink-0">
                                <span className="text-xs font-semibold text-green-600 dark:text-green-400">{item.cost}</span>
                                <a
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[10px] font-mono text-indigo-600 dark:text-indigo-400 hover:underline whitespace-nowrap"
                                >
                                    {item.url.replace('https://', '')} &rarr;
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="clear-both" />

                <hr />

                {/* ── HOW TO VERIFY IN 30 SECONDS ───────────────────────────── */}
                <h2>How to Verify Any Government Website in 30 Seconds</h2>

                <div className="not-prose float-right ml-6 mb-4 w-48 sm:w-60 md:w-64 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                    <Image
                        src="/blog/fake-government-website-india/gov-in-vs-com-domain-rule.webp"
                        alt="Government website domain rule India  .gov.in and .nic.in are real, .com and .org are not government sites"
                        width={1254}
                        height={1254}
                        className="w-full object-contain"
                    />
                    <p className="text-[10px] text-center text-gray-500 dark:text-gray-400 italic px-3 py-2 bg-white dark:bg-gray-800">
                        The simplest rule: .gov.in = real government. Everything else is potentially fake.
                    </p>
                </div>

                <p>
                    You do not need to be technically savvy to verify a government site. One check takes under
                    10 seconds and is foolproof:
                </p>

                <p>
                    <strong>Look at the domain, not the design.</strong> Scammers copy government logos, emblems,
                    colour schemes, and even entire page layouts perfectly. What they cannot copy is the domain:
                    real government sites always end in <strong>.gov.in</strong> or <strong>.nic.in</strong>.
                </p>

                <p>
                    Here is the complete verification process, step by step:
                </p>

                <ol>
                    <li>
                        <strong>Check the URL first:</strong> Before clicking, hover over any link (or tap and hold
                        on mobile) to see the full address. If it does not end in .gov.in or .nic.in, it is
                        not an official government portal  regardless of how it looks.
                    </li>
                    <li>
                        <strong>Go directly, never via search:</strong> Always type the official URL directly in the
                        browser address bar. For Aadhaar: type myaadhaar.uidai.gov.in directly. Do not click
                        the first search result.
                    </li>
                    <li>
                        <strong>Verify via india.gov.in:</strong> The National Portal of India at india.gov.in
                        links to every official government portal. If you cannot find a service there, it may not
                        have an official online option yet.
                    </li>
                    <li>
                        <strong>Check payment method:</strong> Official government portals process payments through
                        their own secure gateway  never via UPI to a personal phone number, gift cards, or
                        third-party accounts. Any such payment demand is fraud.
                    </li>
                    <li>
                        <strong>Paste the URL in RakshaAI:</strong> If you are unsure, paste the website address
                        into <Link href="/website-safety-checker">rakshaai.co/website-safety-checker</Link> before
                        submitting any document or payment.
                    </li>
                </ol>

                <div className="clear-both" />

                <hr />

                {/* ── REAL LIFE CASES ───────────────────────────────────────── */}
                <h2>The Scale of Fake Government Website Fraud in India: Official Data</h2>

                <p>
                    Fake government website fraud is not a fringe issue. Official data, parliamentary answers, and
                    cybercrime court records show a systematic and growing industry targeting Indian citizens.
                </p>

                <div className="not-prose overflow-x-auto my-8 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                    <table className="min-w-[620px] w-full text-sm text-left">
                        <thead>
                            <tr className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                                <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300 w-24">Year</th>
                                <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Cybercrime Complaints (NCRP)</th>
                                <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Fake Sites Taken Down</th>
                                <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Source</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                            {[
                                { year: '2021', complaints: '4.52 lakh total', sites: '941 fake govt-related domains', src: 'MeitY / CERT-In' },
                                { year: '2022', complaints: '10.29 lakh total', sites: '1,200+ phishing/fake sites', src: 'MHA / CERT-In Annual Report' },
                                { year: '2023', complaints: '15.96 lakh (+55%)', sites: '310 malicious domains via NIXI (Oct-May alone)', src: 'MHA Lok Sabha Dec 2025' },
                                { year: '2024', complaints: '22.68 lakh (+42%)', sites: '7.81 lakh SIM cards blocked; 2.08 lakh IMEIs blocked', src: 'MHA / PIB Feb 2025' },
                                { year: '2019-2024 (cumulative)', complaints: '53.9 lakh total', sites: '₹31,534 crore reported defrauded', src: 'MHA / I4C Parliament Data' },
                            ].map((row) => (
                                <tr key={row.year} className="bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                    <td className="px-4 py-3 font-medium text-gray-900 dark:text-white whitespace-nowrap">{row.year}</td>
                                    <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{row.complaints}</td>
                                    <td className="px-4 py-3 font-semibold text-red-600 dark:text-red-400">{row.sites}</td>
                                    <td className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400">{row.src}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* ── CASE CARDS ────────────────────────────────────────────── */}
                <h2>Documented Fake Government Website Scam Cases in India</h2>

                <p>
                    These are real cases reported by verified Indian news outlets and police departments.
                    Each involves a citizen who paid for a government service on a fake portal.
                </p>

                <div className="not-prose space-y-4 my-8">
                    {[
                        {
                            num: '01',
                            city: 'Delhi',
                            amount: '₹407 per victim',
                            tag: 'Apr 2020',
                            title: 'Delhi Fake Ration Card Website Charges for a Free Service, FIR Registered',
                            desc: 'A fake website  rationcardagent.co.in/digital-ration-card-application  offered digital ration cards to Delhi residents and charged ₹407 per application for a service that is completely free under the National Food Security Act. The Delhi Government\'s Food, Supplies and Consumer Affairs Department filed a complaint. An FIR was registered under Section 420 IPC and Section 66D of the IT Act (cheating by impersonation using a computer resource).',
                            source: 'Business Standard / PTI',
                            url: 'https://www.business-standard.com/article/pti-stories/fake-website-issuing-ration-cards-in-delhi-case-registered-120041201035_1.html',
                        },
                        {
                            num: '02',
                            city: 'National (Passport Portals)',
                            amount: '₹4,000 per victim',
                            tag: '2020 Onwards',
                            title: 'MEA Issues Advisory Against 5+ Fake Passport Seva Clones Charging Thousands',
                            desc: 'The Ministry of External Affairs (MEA) issued a formal advisory warning citizens against fake passport portals including indiapassport.org, passportindiaportal.in, passport-india.in, passport-seva.in, and applypassport.org. These cloned the official passportindia.gov.in interface and charged ₹4,000+ per renewal. The issue was raised in Parliament (Rajya Sabha Question No. 82 on "Fraudulent Online Passport Services").',
                            source: 'India TV News / MEA Rajya Sabha',
                            url: 'https://www.indiatvnews.com/business/news-indian-passport-application-fake-websites-ministry-of-external-affairs-warns-mpassport-seva-app-639231',
                        },
                        {
                            num: '03',
                            city: 'Azamgarh, UP',
                            amount: '₹15–20 Lakh',
                            tag: 'Apr 2022',
                            title: 'CSP Operator Clones Aadhaar Fingerprints, Drains 165 Bank Accounts',
                            desc: 'Ahagir Sheikh, operating a Customer Service Point (CSP) centre, cloned the fingerprints of 165 people using rubber/polymer moulds and withdrew money from their Aadhaar-linked bank accounts via AePS (Aadhaar-Enabled Payment System). One victim, Ghaffar Khan, had ₹2 lakh withdrawn without his knowledge. Total estimated withdrawals: ₹15–20 lakh across 165 victims. Ahagir Sheikh was arrested by Azamgarh Police.',
                            source: 'MediaNama',
                            url: 'https://www.medianama.com/2022/04/223-aadhaar-fraud-fingerprint-cloning-azamgarh-police-arrest/',
                        },
                        {
                            num: '04',
                            city: 'Delhi / Bihar / Jharkhand',
                            amount: '₹1.83 Crore',
                            tag: 'Jun 2023',
                            title: 'CBI Arrests Gang for Draining 11 EPFO Accounts via Fake Aadhaar Identity Swap',
                            desc: 'Mastermind Priyanshu Kumar and his gang obtained Aadhaar cards with identical victim names and dates of birth by submitting forged documents to modify existing Aadhaar records. These "altered Aadhaar" cards were used to register 39 fraudulent EPFO withdrawal claims against 11 EPF members, siphoning ₹1.83 crore. CBI registered the FIR in February 2022 and arrested Priyanshu Kumar in June 2023 after searches at 8 locations across Bihar, Jharkhand, and Delhi.',
                            source: 'Business Standard / DNA India',
                            url: 'https://www.business-standard.com/india-news/scammers-steal-1-83-cr-from-11-epf-accounts-using-aadhaar-card-details-123061200925_1.html',
                        },
                        {
                            num: '05',
                            city: 'Surat, Gujarat',
                            amount: '₹15–₹200 per ID',
                            tag: 'Sep 2023',
                            title: 'Surat Gang Sells 2 Lakh Fake Aadhaar, PAN, Voter ID Documents via Website',
                            desc: 'Two accused operated a three-year-old fake website selling forged Aadhaar cards, PAN cards, and Voter IDs for ₹15 to ₹200 per document. Approximately 2 lakh fake identity documents were sold, primarily to buyers in Gujarat. The fake IDs were used to obtain bank loans and purchase SIM cards for fraud. Surat Police arrested both accused and froze ₹25 lakh in their accounts. Police called it "a serious national security issue."',
                            source: 'ETV Bharat / The Tribune',
                            url: 'https://www.etvbharat.com/english/state/gujarat/two-held-in-surat-for-forging-documents-like-aadhaar-pan-cards-using-website-police-say-its-serious-national-security-issue/na20230905124609463463439',
                        },
                        {
                            num: '06',
                            city: 'Bahraich, UP (Nepal Border)',
                            amount: '18,000+ Aadhaar cards',
                            tag: '2024',
                            title: 'UP STF Arrests Man Who Created 18,000+ Fake Aadhaar Cards Using Forged CSC Access',
                            desc: 'Pramod Kumar Nishad (28) obtained a legitimate CSC licence, then sourced illegal access to forged Aadhaar enrollment and update portals via Telegram contact Aqeel Saifi. He illegally created or modified 18,000+ Aadhaar cards. He was arrested by UP Special Task Force while attempting to flee to Nepal. The case was referred to UIDAI for a full technical security audit.',
                            source: 'The420.in',
                            url: 'https://the420.in/up-stf-busts-19000-fake-aadhaar-racket-bahraich-nepal-border/',
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
                                <a href={c.url} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline">Read full article &rarr;</a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── TIMELINE CARDS ────────────────────────────────────────── */}
                <h2>Complete Timeline: Major Fake Government Website Scam Cases in India</h2>

                <div className="not-prose space-y-3 my-8">
                    {[
                        { date: 'Apr 2020', city: 'Delhi', amount: '₹407 / victim', what: 'Fake ration card site (rationcardagent.co.in) charged for a free NFSA service. Delhi Government filed complaint; FIR under IPC 420 and IT Act 66D.', src: 'Business Standard', url: 'https://www.business-standard.com/article/pti-stories/fake-website-issuing-ration-cards-in-delhi-case-registered-120041201035_1.html' },
                        { date: '2020 onwards', city: 'National', amount: '₹4,000+ / victim', what: '5+ fake passport portals (indiapassport.org, passportindiaportal.in etc.) cloned MEA interface. Issue raised in Parliament  Rajya Sabha Q.82. MEA advisory issued.', src: 'India TV News', url: 'https://www.indiatvnews.com/business/news-indian-passport-application-fake-websites-ministry-of-external-affairs-warns-mpassport-seva-app-639231' },
                        { date: 'Apr 2022', city: 'Azamgarh, UP', amount: '₹15–20 Lakh', what: 'CSP operator Ahagir Sheikh cloned fingerprints of 165 people using polymer moulds and drained AePS-linked bank accounts. Arrested by Azamgarh Police.', src: 'MediaNama', url: 'https://www.medianama.com/2022/04/223-aadhaar-fraud-fingerprint-cloning-azamgarh-police-arrest/' },
                        { date: '2022–2023', city: 'Varanasi, UP', amount: 'Lakh+ transactions', what: 'Fake site digitalportal.in sold counterfeit Aadhaar and PAN cards at Rs 21–50 each. 10+ lakh templates downloaded, mostly from Gujarat. Pankaj Kumar Yadav + 8 others arrested.', src: 'The420.in', url: 'https://the420.in/hi-tech-fake-id-card-network-busted-this-is-how-scammers-sold-counterfeit-pan-aadhar-to-cybercriminals/' },
                        { date: 'Feb 2022–Jun 2023', city: 'Delhi / Bihar / Jharkhand', amount: '₹1.83 Crore', what: 'CBI case: gang forged Aadhaar records, filed 39 fake EPFO withdrawal claims draining 11 accounts. Mastermind Priyanshu Kumar arrested after 8-location raid.', src: 'Business Standard', url: 'https://www.business-standard.com/india-news/scammers-steal-1-83-cr-from-11-epf-accounts-using-aadhaar-card-details-123061200925_1.html' },
                        { date: 'Feb 2023', city: 'Andhra Pradesh', amount: '₹5.9 Crore', what: 'Inter-state gang cloned AePS fingerprints from 1 lakh harvested Aadhaar biometrics. Linked to 128 fraud cases across multiple states. Seshnath Viswakarma arrested in Gorakhpur.', src: 'MediaNama', url: 'https://www.medianama.com/2023/02/223-andhra-pradesh-gang-cloned-fingerprints-aadhaar-enabled-payment-system-3/' },
                        { date: 'Sep 2023', city: 'Surat, Gujarat', amount: '2 lakh IDs sold', what: '3-year fake website sold forged Aadhaar, PAN, Voter IDs for Rs 15–200 each. Used for bank loans and SIM fraud. 2 arrested; Rs 25 lakh frozen. Police: "national security issue."', src: 'ETV Bharat', url: 'https://www.etvbharat.com/english/state/gujarat/two-held-in-surat-for-forging-documents-like-aadhaar-pan-cards-using-website-police-say-its-serious-national-security-issue/na20230905124609463463439' },
                        { date: 'Oct 2023–May 2024', city: 'Pan-India', amount: '310 domains', what: 'I4C and NIXI made 310 malicious/phishing government portal clones non-functional. Government separately blocked 7.81 lakh SIM cards linked to cyber fraud.', src: 'MHA / PIB', url: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2036395' },
                        { date: '2024', city: 'Bahraich, UP', amount: '18,000+ Aadhaar IDs', what: 'Pramod Kumar Nishad used a legit CSC licence + forged portal access via Telegram to create 18,000+ fake Aadhaar cards. UP STF arrested him fleeing to Nepal.', src: 'The420.in', url: 'https://the420.in/up-stf-busts-19000-fake-aadhaar-racket-bahraich-nepal-border/' },
                        { date: '2024', city: 'Bareilly, UP', amount: 'Multiple victims', what: 'Army Intelligence tip led SOG to "Aastha Janseva Kendra." Seized: 67 Aadhaar cards, laptops, fingerprint scanner, rubber fingerprint clones. 3 arrested.', src: 'The420.in', url: 'https://the420.in/fake-document-racket-aastha-janseva-kendra-bareilly/' },
                        { date: '2024–2025', city: 'Aligarh, UP', amount: '5,000+ fake IDs', what: '2 unregistered Jan Seva Kendra operators exploited UIDAI platform vulnerabilities to generate 5,000+ fake Aadhaar IDs in 6 months. Welfare funds diverted. 2 arrested; 47 centres audited.', src: 'The420.in', url: 'https://the420.in/aadhaar-card-scam-aligarh-uidai-fake-identity-fraud-network/' },
                        { date: 'Nov 2024', city: 'National', amount: 'Multiple victims', what: 'PAN 2.0 announcement triggered mass phishing: fake Income Tax clones harvested PAN, Aadhaar, OTP, banking credentials. Government alert issued; activity continued into 2025.', src: 'The420.in', url: 'https://www.the420.in/pan-2-0-scam-fake-websites-helplines-kyc-fraud/' },
                        { date: '2022–2023', city: 'Pali, Rajasthan', amount: '₹1.51 Crore (PM-Kisan)', what: 'Rajasthan DBT fraud: 29,000 fake beneficiary accounts created under PM-Kisan, state pension, and disaster relief. Operation Shutterdown: 51 arrests including government insiders.', src: 'National Herald India', url: 'https://www.nationalheraldindia.com/national/multi-scheme-dbt-scam-unearthed-in-rajasthan-pm-kisan-pension-disaster-relief-targeted' },
                    ].map((row, i) => (
                        <div key={i} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-4 hover:shadow-sm transition-shadow">
                            <div className="flex items-center justify-between gap-3 flex-wrap mb-2">
                                <div className="flex items-center gap-2 flex-wrap">
                                    <span className="text-[11px] font-bold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2.5 py-0.5 rounded-full whitespace-nowrap">{row.date}</span>
                                    <span className="text-xs text-gray-500 dark:text-gray-400">{row.city}</span>
                                </div>
                                <span className="text-sm font-extrabold text-red-600 dark:text-red-400 whitespace-nowrap">{row.amount}</span>
                            </div>
                            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-2">{row.what}</p>
                            <a href={row.url} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                                Source: {row.src} &rarr;
                            </a>
                        </div>
                    ))}
                </div>

                <hr />

                {/* ── WHAT TO DO IF PAID ────────────────────────────────────── */}
                <h2>If You Already Paid a Fake Government Website</h2>

                <p>
                    If you have paid a fake government portal, act immediately. The faster you move, the higher
                    the chance of recovering your money and protecting your data.
                </p>

                <ol>
                    <li>
                        <strong>Screenshot everything:</strong> The website, the payment confirmation, the transaction
                        ID, the fake receipt. You will need this for the police complaint.
                    </li>
                    <li>
                        <strong>Call 1930 right now:</strong> India&apos;s National Cybercrime Helpline can
                        freeze mule bank accounts before the money is withdrawn. Speed matters  the window is
                        usually 24 to 48 hours.
                    </li>
                    <li>
                        <strong>File at cybercrime.gov.in:</strong> Submit a formal complaint with screenshots,
                        the fraudulent URL, and your payment receipt.
                    </li>
                    <li>
                        <strong>Contact your bank immediately:</strong> Request a chargeback or reversal of the
                        UPI/card payment. Provide the cybercrime complaint number for faster processing.
                    </li>
                    <li>
                        <strong>Change passwords for linked accounts:</strong> If you submitted your Aadhaar OTP,
                        UAN login, or PAN details to the fake site, change your UIDAI/EPFO/Income Tax portal
                        password immediately and enable two-factor authentication.
                    </li>
                    <li>
                        <strong>Report the URL at rakshaai.co:</strong> This adds the fraudulent website to our
                        scam database, protecting other Indians who might search for the same government service.
                    </li>
                </ol>

                <hr />

                {/* ── FAQ ───────────────────────────────────────────────────── */}
                <h2>Frequently Asked Questions</h2>

                <h3>What is the real website to update Aadhaar details in India?</h3>
                <p>
                    The only official Aadhaar portal is <strong>myaadhaar.uidai.gov.in</strong>. Aadhaar updates
                    for address, mobile number, and name are done here. Basic updates are free. Any other website
                    claiming to update your Aadhaar for a fee is a fake portal.
                </p>

                <h3>What is the real website for PAN card in India?</h3>
                <p>
                    PAN card services are available at <strong>incometax.gov.in</strong>. Instant PAN via Aadhaar
                    is entirely free and takes under 10 minutes. New PAN applications are processed through NSDL at
                    tin.tin.nsdl.com and UTIITSL at myutiitsl.com. Any other site charging large fees for PAN
                    services is likely fraudulent.
                </p>

                <h3>How do I report a fake government website in India?</h3>
                <p>
                    Report at <strong>cybercrime.gov.in</strong>. You can also report the fake website URL at{' '}
                    <Link href="/website-safety-checker">rakshaai.co</Link> to immediately warn other Indians
                    searching for the same service. Forward details to the relevant ministry&apos;s official
                    cybercrime or fraud reporting contact.
                </p>

                <h3>Is it safe to pay for government services on third-party websites?</h3>
                <p>
                    Only if they are officially empaneled service providers listed on the government portal itself.
                    For core services (Aadhaar, PAN, driving licence, passport), always use the official .gov.in
                    portal directly. Middlemen who charge a "convenience fee" for free government services may
                    be operating illegally.
                </p>

                <h3>How do real Indian government websites look different from fake ones?</h3>
                <p>
                    Real government sites end in <strong>.gov.in</strong> or <strong>.nic.in</strong>, load
                    securely (https), and never ask for payment via UPI to personal numbers or gift cards.
                    Fake sites may look nearly identical in design but charge fees the real portal does not charge.
                    The only reliable check is the domain ending.
                </p>

                <h3>What does a fake government website URL look like?</h3>
                <p>
                    Common patterns include: aadhaar-update.com, uidai-service.in, parivahan-dl.com,
                    epf-claim-india.com, passportserviceindia.com. The tell-tale signs are:
                    no .gov.in ending, hyphens in the domain, extra words like "service," "update," "apply,"
                    or "india" in the domain name.
                </p>

                <hr />

                {/* ── FINAL THOUGHTS ────────────────────────────────────────── */}
                <h2>Final Thoughts</h2>

                <p>
                    The fake government website scam is designed to exploit one specific emotion: the trust
                    Indians have in government institutions. When a website shows the Ashoka emblem and uses
                    the colours of an official portal, the brain automatically grants it legitimacy.
                </p>

                <p>
                    The fraudsters know this. They invest heavily in design and Google Ads, while investing
                    nothing in actually delivering the service. The result is a near-perfect trap for anyone
                    who searches instead of typing the official URL directly.
                </p>

                <p>
                    The defence is simple and once learned, permanent: <strong>real Indian government
                    services end in .gov.in or .nic.in.</strong> Bookmark the official URLs in this article.
                    Share this page with your parents, your staff, and anyone who might one day search
                    for a government service. The scam only works on people who do not know this rule.
                </p>

                {/* ── FINAL CTA ─────────────────────────────────────────────── */}
                <div className="not-prose my-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/60 p-8 text-center">
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">
                        Free Tool
                    </p>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                        Not sure if a government website is real?
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 max-w-sm mx-auto">
                        Paste any website URL into RakshaAI for an instant safety check. No sign-up. Results in under 5 seconds.
                    </p>
                    <Link
                        href="/website-safety-checker"
                        className="inline-flex items-center gap-2 px-7 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold text-sm rounded-full hover:bg-gray-700 dark:hover:bg-gray-100 transition-colors"
                    >
                        Check a Website Now &rarr;
                    </Link>
                    <p className="text-gray-400 dark:text-gray-500 text-xs mt-4">
                        100% free &middot; No sign-up required &middot; Real .gov.in links always safe
                    </p>
                </div>

            </BlogLayout>
        </>
    )
}
