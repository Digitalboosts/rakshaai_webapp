import { Metadata } from 'next'
import BlogLayout from '@/components/BlogLayout'
import Link from 'next/link'
import Image from 'next/image'
import { blogPostingSchema, faqPageSchema, breadcrumbListSchema, personSchema, jsonLd } from '@/lib/seo/schema'
import SidebarDigitalArrest from '@/components/blog/SidebarDigitalArrest'

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
    title: { absolute: 'Digital Arrest Scam: What To Do When You Get That Call | RakshaAI' },
    description:
        'Fake CBI or ED call claiming digital arrest? No such law exists in India. Here\'s exactly what to do in the next 30 minutes to protect yourself.',
    keywords:
        'digital arrest scam India, fake CBI call what to do, digital arrest meaning, ED fraud call India 2026, cybercrime helpline 1930, digital arrest scam kaise bachein, what is digital arrest in India, is digital arrest real in India, MHA digital arrest advisory',
    authors: [{ name: 'Rabinarayan Pradhan', url: 'https://www.linkedin.com/in/rabinarayan-pradhan-14ab9422b/' }],
    robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
    openGraph: {
        title: 'Digital Arrest Scam: What To Do When You Get That Call | RakshaAI',
        description:
            'Fake CBI calls. Fake ED officers. No such thing as a digital arrest in Indian law. Here\'s what to do in 5 minutes.',
        type: 'article',
        siteName: 'RakshaAI',
        publishedTime: '2026-05-21T00:00:00.000Z',
        modifiedTime: '2026-07-01T00:00:00.000Z',
        tags: ['digital arrest scam', 'cybercrime India', 'CBI scam', 'fraud prevention', '1930 helpline'],
        url: 'https://rakshaai.co/blog/digital-arrest-scam-india',
        images: [
            {
                url: '/blog/digital-arrest-scam-india/phone-cbi-call.webp',
                width: 1200,
                height: 630,
                alt: 'Digital Arrest Scam India, Fake CBI Incoming Call',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Digital Arrest Scam: There Is No Such Law in India',
        description:
            'Got a call from fake CBI? Here\'s exactly what to do. Call 1930. Share this with someone in your family who might need it.',
        images: ['/blog/digital-arrest-scam-india/phone-cbi-call.webp'],
    },
    alternates: {
        canonical: 'https://rakshaai.co/blog/digital-arrest-scam-india',
    },
}

// ─── Structured Data ─────────────────────────────────────────────────────────
const articleStructuredData = blogPostingSchema({
    headline: 'Digital Arrest Scam: What To Do If You Get That Call in 2026',
    description:
        'Fake CBI and ED officers calling Indians about digital arrest. Here is exactly what to do when you get that call.',
    url: '/blog/digital-arrest-scam-india',
    image: '/blog/digital-arrest-scam-india/phone-cbi-call.webp',
    datePublished: '2026-05-21T00:00:00.000Z',
    dateModified: '2026-07-01T00:00:00.000Z',
    author: personSchema({ name: 'Rabinarayan Pradhan', jobTitle: 'Cybersecurity Writer', url: '/author/rabinarayan-pradhan', image: '/authors/rabinarayan-pradhan.jpeg', sameAs: ['https://www.linkedin.com/in/rabinarayan-pradhan-14ab9422b/'] }),
    section: 'Scam Alerts',
    keywords: ['digital arrest scam', 'fake CBI call', 'cybercrime India 2026', '1930 helpline'],
})

const breadcrumbSchema = breadcrumbListSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'Digital Arrest Scam India', url: '/blog/digital-arrest-scam-india' },
])

const faqStructuredData = faqPageSchema([
    {
        question: 'Is digital arrest legal in India?',
        answer:
            'No. Digital arrest does not exist in Indian law. No government agency (CBI, ED, NCB, or any court) can arrest you over a phone or video call. Anyone claiming to do so is a scammer.',
    },
    {
        question: 'What should I do if I get a digital arrest call?',
        answer:
            'Hang up immediately, call the Cybercrime Helpline 1930, tell your family, and file a complaint at cybercrime.gov.in. Do not transfer any money.',
    },
    {
        question: 'How do digital arrest scammers get my personal information?',
        answer:
            'They obtain personal details like name, Aadhaar numbers, and city from data breaches, social media, or purchased databases. This makes them sound credible but does not mean they are legitimate.',
    },
    {
        question: 'Can I recover money lost in a digital arrest scam?',
        answer:
            'Recovery is possible if you report within 30–60 minutes of the transfer by calling 1930. After 24 hours, recovery becomes significantly harder as money moves through mule accounts quickly.',
    },
    {
        question: 'Which helpline should I call for digital arrest scam?',
        answer:
            'Call 1930, India\'s National Cybercrime Helpline, available 24/7. Also report at cybercrime.gov.in and check the scammer\'s number at rakshaai.co.',
    },
])

const claimReviewSchema = {
    '@type': 'ClaimReview',
    url: 'https://rakshaai.co/blog/digital-arrest-scam-india',
    claimReviewed: 'Digital arrest is a valid legal procedure in India where government agencies can arrest citizens via video call or phone',
    itemReviewed: {
        '@type': 'Claim',
        author: { '@type': 'Organization', name: 'Digital Arrest Scammers' },
        datePublished: '2024-01-01',
    },
    reviewRating: {
        '@type': 'Rating',
        ratingValue: 1,
        bestRating: 5,
        worstRating: 1,
        alternateName: 'FALSE',
    },
    author: {
        '@type': 'Organization',
        name: 'RakshaAI',
        url: 'https://rakshaai.co',
    },
    reviewBody: 'No provision in Indian law creates a mechanism called "digital arrest". Real Indian law enforcement never arrests or interrogates citizens via phone or video call, and no government agency demands payment over phone to avoid prosecution. This is a documented fraud scheme targeting Indian citizens.',
    datePublished: '2026-05-21',
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function DigitalArrestScamPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLd([articleStructuredData, faqStructuredData, breadcrumbSchema, claimReviewSchema]) }}
            />
            <BlogLayout
            title="Digital Arrest Scam: What To Do If You Get That Call in 2026"
            description={`Got a call from fake CBI or ED saying you're under “digital arrest”? There's no such law in India. Here's exactly what to do in the next 5 minutes.`}
            publishedAt="2026-05-21T00:00:00.000Z"
            lastUpdated="2026-07-01T00:00:00.000Z"
            readTime="8 min"
            author="Rabinarayan Pradhan"
            authorUrl="/author/rabinarayan-pradhan"
            primaryTool={{ label: 'Check the caller number for scam reports', href: '/phone-number-checker' }}
            tags={['Scam Alerts', 'Cybercrime India', 'Digital Arrest', 'Fraud Prevention']}
            slug="digital-arrest-scam-india"
            sidebar={<SidebarDigitalArrest title="Digital Arrest Scam: What To Do If You Get That Call in 2026" description="Got a call from fake CBI or ED saying you're under digital arrest? There's no such law in India. Here's exactly what to do in the next 5 minutes." />}
        >

            {/* ── HERO IMAGE ────────────────────────────────────────────── */}
            <div className="not-prose mb-10 rounded-2xl overflow-hidden shadow-lg">
                <Image
                    src="/blog/digital-arrest-scam-india/phone-cbi-call.webp"
                    alt="Incoming call from fake CBI Cyber Crime Division, Digital Arrest Scam India"
                    width={1200}
                    height={700}
                    className="w-full object-cover"
                    priority
                />
                <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-2 mb-0 italic px-4 pb-3">
                    Scammers impersonate CBI, ED, and NCB officers. This call is fake. Digital arrest does not exist in Indian law.
                </p>
            </div>

            {/* ── INTRO ─────────────────────────────────────────────────── */}
            <div className="mb-8">
                <p className="text-lg text-gray-800 dark:text-gray-200">
                    Your phone rings. An official-sounding voice announces they are calling from the{' '}
                    <strong>CBI Cyber Crime Division</strong>. They say your Aadhaar number is linked to a money
                    laundering case. Your mobile SIM is being used for illegal activities. And unless you cooperate
                    immediately by staying on the call, sharing your screen, and transferring money to a &quot;safe
                    account&quot;, you will be <strong>digitally arrested</strong>.
                </p>

                <p className="text-lg text-gray-800 dark:text-gray-200">
                    It sounds terrifying. It is designed to. And it is <strong>completely fake</strong>.
                </p>

                <p className="text-lg text-gray-800 dark:text-gray-200">
                    The <strong>digital arrest scam</strong> is India&apos;s fastest-growing financial fraud in
                    2026. It has already cost victims thousands of crores. This guide tells you exactly what
                    it is, how it works, and what to do in the next five minutes if you receive that call.
                </p>
            </div>

            {/* ── FEATURED SNIPPET BLOCK ────────────────────────────────── */}
            <div className="not-prose my-8 rounded-2xl border-2 border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/40 p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-red-500 dark:text-red-400 mb-3">
                    If you received this call right now, do this:
                </p>
                <ol className="space-y-2 text-sm font-medium text-gray-900 dark:text-white list-none">
                    {[
                        ['1', 'Hang up immediately. There is no such thing as digital arrest in India'],
                        ['2', 'Do not call back the number'],
                        ['3', 'Tell a trusted family member right away'],
                        ['4', 'Call the Cybercrime Helpline: 1930'],
                        ['5', 'File a complaint at cybercrime.gov.in'],
                        ['6', 'Check the number on RakshaAI (rakshaai.co)'],
                    ].map(([num, text]) => (
                        <li key={num} className="flex items-start gap-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                                {num}
                            </span>
                            <span>{text}</span>
                        </li>
                    ))}
                </ol>
                <p className="text-xs text-red-600 dark:text-red-400 mt-4 font-semibold">
                    Report within 30 minutes for the best chance of money recovery.
                </p>
            </div>

            <hr />

            {/* ── WHAT IS DIGITAL ARREST ────────────────────────────────── */}
            <h2>What Exactly Is a Digital Arrest?</h2>

            <p>
                <strong>Digital arrest meaning:</strong> A digital arrest is a psychological manipulation tactic
                where scammers pose as law enforcement officials (CBI, ED, NCB, TRAI, or Customs) and falsely
                claim you are under legal investigation. They demand you stay on a continuous phone or video call
                (your &quot;digital arrest&quot;) until you pay money to avoid prosecution.
            </p>

            <p>
                <strong>This is not a legal concept. It does not exist in Indian law.</strong> No provision in the
                Indian Penal Code, CrPC, BNSS, or IT Act permits arrest via phone or video call. The Ministry of
                Home Affairs (MHA) has issued multiple advisories explicitly stating this.
            </p>

            <blockquote>
                As Prime Minister Narendra Modi stated in <em>Mann Ki Baat</em> (October 2024): &ldquo;Digital arrest has no provision in the law.&rdquo;
            </blockquote>

            <p>
                The entire premise of a &ldquo;digital arrest&rdquo; is fabricated. The goal is simple: keep you
                in a state of fear long enough to transfer money.
            </p>

            <hr />

            {/* ── HOW IT WORKS ──────────────────────────────────────────── */}
            <h2>How the Digital Arrest Scam Works: Step by Step</h2>

            {/* ── OFFICER IMAGE ─────────────────────────────────────────── */}
            <div className="not-prose my-8 rounded-2xl overflow-hidden shadow-md">
                <Image
                    src="/blog/digital-arrest-scam-india/cbi-officer-cyber-crime.webp"
                    alt="Fake CBI officer impersonating Cyber Crime Division in a Digital Arrest Scam"
                    width={1200}
                    height={750}
                    className="w-full object-cover"
                />
                <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-2 mb-0 italic px-4 pb-3">
                    Scammers use fake uniforms, official-looking offices, and fabricated CBI banners on video calls to appear legitimate.
                </p>
            </div>

            <p>
                Understanding the playbook is your best defence. Here is exactly how the digital arrest scam
                unfolds:
            </p>

            <h3>Step 1: The First Call and Building Fear</h3>
            <p>
                The call begins with a recorded or live voice identifying themselves as an officer from TRAI,
                Customs, the ED, or CBI. They reference specific, real-seeming details like your full name, city,
                sometimes even partial Aadhaar digits obtained from data leaks. They claim your number was used
                for illegal activity: drug trafficking, money laundering, or a terror case.
            </p>
            <p>
                The goal at this stage is simple: <strong>make you afraid enough to stay on the call</strong>.
            </p>

            <h3>Step 2: The Escalation</h3>
            <p>
                The call is &ldquo;transferred&rdquo; to a senior officer, often on a video call. The scammer
                appears in uniform in front of a backdrop that looks exactly like a real government office, with
                official banners, seals, and sometimes a second &ldquo;officer&rdquo; in frame for added
                legitimacy. They show you fabricated arrest warrants, FIRs, and Supreme Court seals, all
                professionally designed fakes.
            </p>

            <h3>Step 3: The Digital Arrest</h3>
            <p>
                They tell you that you are now &ldquo;under digital arrest.&rdquo; This means you must stay on the
                call continuously and must not contact anyone, including family members. Leaving the call or
                contacting others, they say, will result in immediate physical arrest. This phase can last hours,
                even days in some documented cases.
            </p>

            <h3>Step 4: The Money Transfer</h3>
            <p>
                The &ldquo;investigation&rdquo; finds that your accounts are linked to criminal funds. To
                &ldquo;protect&rdquo; your money while the inquiry runs, you are instructed to transfer funds to a
                &ldquo;safe RBI-approved account&rdquo; or pay a &ldquo;bail bond&rdquo;. The amount often starts
                small and escalates as victims comply. Transfers go to mule accounts that are emptied within
                minutes.
            </p>

            <h3>Step 5: Disappearance</h3>
            <p>
                Once the money is transferred, or once the victim refuses, the scammers vanish. The phone
                numbers are disconnected. The WhatsApp accounts are deleted. The money is gone.
            </p>

            <hr />

            {/* ── SCALE ─────────────────────────────────────────────────── */}
            <h2>Real Cases from 2026: The Scale of This Problem</h2>

            <p>
                The digital arrest scam is not a fringe crime. It is one of the highest-value fraud categories
                tracked by India&apos;s Cyber Crime Coordination Centre (I4C):
            </p>

            <ul>
                <li>
                    <strong>₹1,616 crore</strong> lost to digital arrest scams in just the first quarter of 2024
                    (MHA data)
                </li>
                <li>
                    A retired IAS officer in Noida lost <strong>₹2.2 crore</strong> over six days on a video call
                    with fake CBI officers
                </li>
                <li>
                    A Bengaluru woman was held on a continuous video call for <strong>five days</strong> and
                    transferred ₹4.3 crore to &ldquo;protect&rdquo; her accounts
                </li>
                <li>
                    In 2026, scam syndicates operating from Myanmar, Laos, and Cambodia are running these
                    operations at industrial scale with hundreds of agents and full production setups
                </li>
            </ul>

            <blockquote>
                These scammers do not look like scammers. They have professional studios, real-looking uniforms,
                and scripted responses for every objection you raise. The production quality is frightening.
            </blockquote>

            {/* ── YEAR-WISE STATS TABLE ─────────────────────────────────── */}
            <h2>Year-wise Growth: How Digital Arrest Scams Exploded in India (2022–2025)</h2>

            <p>
                Official data from India&apos;s Ministry of Home Affairs (MHA) and the Indian Cyber Crime
                Coordination Centre (I4C) shows an almost vertical growth curve. What started as a niche
                tactic in 2022 became one of the most financially devastating cybercrime categories by 2024.
            </p>

            <div className="not-prose overflow-x-auto my-8 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <table className="w-full text-sm text-left">
                    <thead>
                        <tr className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                            <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Year</th>
                            <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Cases Reported</th>
                            <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Total Money Lost</th>
                            <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">YoY Change</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                        {[
                            { year: '2022', cases: '~40,000', lost: '₹91 crore', change: 'Baseline', badge: 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400' },
                            { year: '2023', cases: '~60,676', lost: '₹339 crore', change: '+272% loss', badge: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-400' },
                            { year: '2024', cases: '~1,23,672', lost: '₹1,935 crore', change: '+470% loss', badge: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400' },
                            { year: '2025', cases: 'Ongoing (higher)', lost: 'Part of ₹22,495 Cr total cybercrime', change: 'Data collecting', badge: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-400' },
                        ].map((row) => (
                            <tr key={row.year} className="bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                <td className="px-4 py-3 font-bold text-gray-900 dark:text-white">{row.year}</td>
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

            <p className="text-sm text-gray-500 dark:text-gray-400 -mt-4 mb-8">
                Source: MHA Annual Report 2024–25, I4C Cybercrime Data, National Cybercrime Reporting Portal (NCRP).
            </p>

            {/* ── FULL CASE TIMELINE TABLE ──────────────────────────────── */}
            <h2>Complete Timeline: Every Major Digital Arrest Scam Case in India (2023–2025)</h2>

            <p>
                Below is a date-wise chronicle of the most significant documented digital arrest cases in India,
                drawn from verified news reports. The victims span every profile  doctors, IIT professors,
                retired officers, business magnates, and elderly citizens  proving that no one is immune.
            </p>

            <div className="not-prose overflow-x-auto my-8 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <table className="w-full text-sm text-left">
                    <thead>
                        <tr className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                            <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap">Date</th>
                            <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Victim / Location</th>
                            <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap">Amount Lost</th>
                            <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Agency Impersonated</th>
                            <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Duration</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                        {[
                            {
                                date: 'Nov 13, 2023',
                                victim: '50-yr-old woman · Noida, UP',
                                amount: '₹11.11 lakh',
                                agency: 'Fake Mumbai Police / TRAI  drug-package claim',
                                duration: '1 day',
                            },
                            {
                                date: 'Late 2023',
                                victim: '33-yr-old woman · Delhi NCR',
                                amount: '₹20 lakh+',
                                agency: 'Fake Supreme Court  deepfake CJI Chandrachud "video trial"',
                                duration: 'Multi-day',
                            },
                            {
                                date: '2023',
                                victim: '84-yr-old textile magnate · Mumbai',
                                amount: '₹7 crore',
                                agency: 'Fake ED / CBI  linked to Naresh Goyal money laundering claim',
                                duration: 'Several days',
                            },
                            {
                                date: 'Feb–Apr 10, 2024',
                                victim: 'Lakshmi Ramamurthy, 74 · Bengaluru',
                                amount: '₹24 crore',
                                agency: 'Fake CBI / ED  26 transfers, 6 persons arrested',
                                duration: '~2 months',
                            },
                            {
                                date: 'Mar 4, 2024',
                                victim: 'IT engineer · Noida, UP',
                                amount: '₹3.75 lakh',
                                agency: 'Fake Customs Officials  parcel with SIM cards',
                                duration: 'Hours',
                            },
                            {
                                date: 'Aug 1, 2024',
                                victim: 'Dr. Ruchika Tandon, SGPIMS Assoc. Prof. · Lucknow',
                                amount: '₹2.81 crore',
                                agency: 'Fake TRAI / CBI  illegal SIM issuance claim',
                                duration: 'Multi-day',
                            },
                            {
                                date: 'Aug 10–14, 2024',
                                victim: 'Maj. Gen. N.K. Dheer (Retd.) · Noida',
                                amount: '₹2 crore',
                                agency: 'Fake Narcotics / Customs / CBI / Mumbai Police',
                                duration: '4–5 days',
                            },
                            {
                                date: 'Aug 19–Oct 8, 2024',
                                victim: 'Businessman, 72 · Mumbai',
                                amount: '₹58 crore',
                                agency: 'Fake ED / CBI  26 accused arrested, biggest single-victim case of 2024',
                                duration: '~40 days',
                            },
                            {
                                date: 'Aug 28–29, 2024',
                                victim: 'S. P. Oswal, Vardhman Group CMD, 82 · Ludhiana',
                                amount: '₹7 crore',
                                agency: 'Fake Supreme Court / ED  "virtual bench" deepfake of CJI',
                                duration: '2 days',
                            },
                            {
                                date: 'Sep 15, 2024 – Mar 26, 2025',
                                victim: 'IT professional, 57 · Bengaluru (Indiranagar)',
                                amount: '₹31.83 crore',
                                agency: 'Fake DHL / CBI  Karnataka\'s biggest digital arrest case, 187 transfers',
                                duration: '6+ months',
                            },
                            {
                                date: 'Sep 28, 2024',
                                victim: 'Prof. Qamar Jahan, AMU · Aligarh, UP',
                                amount: '₹75 lakh',
                                agency: 'Fake ED  21 accounts used for transfers',
                                duration: '10 days',
                            },
                            {
                                date: 'Oct 2024',
                                victim: 'Bharati Bai Agarwal (67) + family · Hyderabad',
                                amount: '₹5.5 crore',
                                agency: 'Fake TRAI / CBI  targeted mother and daughters simultaneously',
                                duration: '17 days',
                            },
                            {
                                date: 'Nov 10, 2024',
                                victim: 'Retired engineer, 70 · Delhi',
                                amount: '₹10 crore',
                                agency: 'Fake CBI  one of the fastest large-value digital arrests on record',
                                duration: '~8 hours',
                            },
                            {
                                date: 'Dec 26, 2024 – Mar 3, 2025',
                                victim: 'Woman, 86 · Mumbai',
                                amount: '₹20.25 crore',
                                agency: 'Fake CBI / ED  global syndicate, funds traced abroad',
                                duration: '~10 weeks',
                            },
                            {
                                date: 'Mar 2025',
                                victim: 'Elderly couple · Belagavi, Karnataka',
                                amount: '₹50 lakh',
                                agency: 'Fake police  couple died by suicide after losing life savings',
                                duration: 'Multi-day',
                            },
                        ].map((row, i) => (
                            <tr key={i} className="bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                <td className="px-4 py-3 text-gray-500 dark:text-gray-400 whitespace-nowrap text-xs">{row.date}</td>
                                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 font-medium">{row.victim}</td>
                                <td className="px-4 py-3 font-bold text-red-600 dark:text-red-400 whitespace-nowrap">{row.amount}</td>
                                <td className="px-4 py-3 text-gray-600 dark:text-gray-400 text-xs">{row.agency}</td>
                                <td className="px-4 py-3 text-gray-500 dark:text-gray-400 text-xs whitespace-nowrap">{row.duration}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400 -mt-4 mb-8">
                Sources: The Hindu, Times of India, Hindustan Times, The Federal, News Karnataka, The420.in, ETV Bharat, OpIndia, and NCRP official data. All amounts are as reported by respective news outlets.
            </p>

            {/* ── REAL CASES ────────────────────────────────────────────── */}
            <h2>Documented Digital Arrest Cases Reported by Indian News Outlets</h2>

            <p>
                These are real, verified incidents covered by India&apos;s leading news organisations. Every one of them started
                with a single phone call from a &ldquo;government officer.&rdquo;
            </p>

            <div className="not-prose space-y-4 my-8">

                {[
                    {
                        num: '01', location: 'Bengaluru · 2024–25', amount: '₹31.83 Crore', tag: "Karnataka's Biggest Case",
                        title: 'Bengaluru IT Professional Makes 187 Transfers, Loses ₹31.83 Crore',
                        desc: 'A 57-year-old from Indiranagar was placed under Skype "digital house arrest" after a fake DHL call. Over 6 months she made 187 bank transfers totalling ₹31.83 crore, believing the money would be returned after RBI verification.',
                        source: 'News Karnataka', date: 'Nov 17, 2025',
                        img: 'https://blr1.digitaloceanspaces.com/newskarnataka.com/wp-content/uploads/2025/11/Bengaluru-woman-loses-%25E2%2582%25B931.83-crore-in-Karnatakas-biggest-digital-arrest-scam.webp',
                        imgAlt: 'Bengaluru woman loses ₹31.83 crore digital arrest scam  News Karnataka',
                        url: 'https://newskarnataka.com/bengaluru/bengaluru-woman-loses-%E2%82%B931-83-crore-in-karnatakas-biggest-digital-arrest-scam/17112025',
                    },
                    {
                        num: '02', location: 'Bengaluru · 2024', amount: '₹24 Crore', tag: '6 Scammers Arrested',
                        title: '74-Year-Old Bengaluru Woman Loses ₹24 Crore  26 Transfers, 23 Mule Accounts',
                        desc: 'Lakshmi Ramamurthy, 74, was coerced by fake CBI and ED officials into 26 transfers across 23 mule accounts in 10 banks. Karnataka State Cyber Command arrested 6 accused across 5 states and recovered over ₹5.5 crore.',
                        source: 'The Federal', date: 'Jan 11, 2026',
                        img: 'https://thefederal.com/h-upload/2026/01/11/589141-istock-8648184402-1.webp',
                        imgAlt: 'Bengaluru elderly woman loses Rs 24 crore digital arrest scam 6 arrested  The Federal',
                        url: 'https://thefederal.com/category/states/south/karnataka/bengaluru-digital-arrest-scam-elderly-woman-duped-of-rs-24-cr-cyber-police-arrest-six-244311',
                    },
                    {
                        num: '03', location: 'Mumbai · 2024–25', amount: '₹20.25 Crore', tag: 'International Network Busted',
                        title: '86-Year-Old South Mumbai Woman Loses ₹20.25 Crore Over 2 Months',
                        desc: 'Fraudsters told the 86-year-old her Aadhaar was misused in a money-laundering case and threatened to arrest her daughter. The scam ran Dec 26, 2024–Mar 3, 2025. Mumbai Police uncovered a global fraud network behind it.',
                        source: 'The420.in', date: 'Mar 17, 2025',
                        img: 'https://the420.in/wp-content/uploads/2024/03/stay-safe-from-digital-arrest.jpg',
                        imgAlt: 'Mumbai woman loses Rs 20 crore digital arrest scam  The420.in',
                        url: 'https://www.the420.in/mumbai-woman-loses-rs-20-crore-in-shocking-digital-arrest-scam-police-uncover-global-fraud-network/',
                    },
                    {
                        num: '04', location: 'Noida · Aug 2024', amount: '₹2 Crore', tag: '5-Day WhatsApp Arrest',
                        title: 'Retired Major General NK Dheer Liquidates FDs & Mutual Funds, Loses ₹2 Crore',
                        desc: 'Maj. Gen. NK Dheer (Retd.) of Sector-31, Noida was kept under WhatsApp "digital arrest" for 5 days by fake Narcotics, CBI, and Mumbai Police officers. He liquidated all his FDs and mutual funds before alerting Noida Cyber Crime Police.',
                        source: 'ETV Bharat', date: 'Aug 28, 2024',
                        img: 'https://imgs.etvbharat.com/etvbharat/prod-images/28-08-2024/1200-675-22322046-thumbnail-16x9-th.jpg',
                        imgAlt: 'Retired Major General NK Dheer loses Rs 2 crore digital arrest scam Noida  ETV Bharat',
                        url: 'https://www.etvbharat.com/en/!bharat/cyber-criminals-digitally-arrested-retired-army-major-general-in-noida-duped-of-rs-2-crore-in-5-days-enn24082809199',
                    },
                    {
                        num: '05', location: 'Hyderabad · Dec 2024', amount: '₹5.5 Crore', tag: '17 Days of Surveillance',
                        title: 'Hyderabad Family Under 24-Hour Skype Surveillance for 17 Days, Loses ₹5.5 Crore',
                        desc: 'Bharati Bai Agarwal (67) and daughters were trapped on Skype by fake TRAI and CBI officers for 17 straight days  daughters only allowed to leave for exams. Scammers extracted ₹5.5 crore using forged court documents.',
                        source: 'OpIndia', date: 'Dec 11, 2024',
                        img: 'https://www.opindia.com/wp-content/uploads/2024/12/image-700x400-8-2-696x398.png',
                        imgAlt: 'Hyderabad family loses Rs 5.5 crore 17-day digital arrest  OpIndia',
                        url: 'https://www.opindia.com/2024/12/digital-arrest-scam-hyderabad-family-loses-rs-5-5-crore-kept-under-24-hour-digital-surveillance-for-17-days-by-fraudsters/',
                    },
                    {
                        num: '06', location: 'Aligarh · Oct 2024', amount: '₹75 Lakh', tag: '21 Accounts · 10 Days',
                        title: 'AMU Professor Qamar Jahan Transfers to 21 Accounts Over 10-Day Digital Arrest',
                        desc: 'Retired AMU professor Qamar Jahan received a fake ED call alleging money-laundering. Over 10 days she transferred funds to 21 different bank accounts under threat of arrest. Authorities blocked ₹13 lakh; ₹75 lakh was lost.',
                        source: 'The420.in', date: 'Oct 15, 2024',
                        img: null, imgAlt: '',
                        url: 'https://the420.in/female-professor-defrauded-of-rs75-lakh-in-parcel-scam-kept-under-digital-arrest-for-10-days-by-fake-ed-cbi-officials/',
                    },
                ].map((c) => (
                    <div key={c.num} className="flex flex-col sm:flex-row rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/60 overflow-hidden hover:shadow-md transition-shadow">

                        {/* Thumbnail */}
                        {c.img && (
                            <a href={c.url} target="_blank" rel="noopener noreferrer" className="sm:w-52 shrink-0 block overflow-hidden bg-gray-100 dark:bg-gray-700">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={c.img} alt={c.imgAlt} className="w-full h-40 sm:h-full object-cover hover:scale-105 transition-transform duration-300" />
                            </a>
                        )}

                        {/* Content */}
                        <div className="flex flex-col justify-between p-4 flex-1 gap-3">
                            <div>
                                {/* Meta row */}
                                <div className="flex items-center gap-2 flex-wrap mb-2">
                                    <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">Case {c.num} · {c.location}</span>
                                    <span className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-full">{c.tag}</span>
                                </div>
                                {/* Amount */}
                                <div className="text-xl font-black text-red-600 dark:text-red-400 mb-1">{c.amount} Lost</div>
                                {/* Title */}
                                <h3 className="text-sm font-semibold text-gray-900 dark:text-white leading-snug mb-2">{c.title}</h3>
                                {/* Description */}
                                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{c.desc}</p>
                            </div>

                            {/* Footer */}
                            <div className="flex items-center justify-between flex-wrap gap-2 pt-3 border-t border-gray-100 dark:border-gray-700">
                                <span className="text-[11px] text-gray-400 dark:text-gray-500">
                                    📰 <strong className="text-gray-600 dark:text-gray-300">{c.source}</strong> · {c.date}
                                </span>
                                <a href={c.url} target="_blank" rel="noopener noreferrer"
                                    className="text-[11px] font-semibold text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors">
                                    Read full article →
                                </a>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

            {/* PM Modi reference */}
            <div className="not-prose my-6 rounded-2xl border-l-4 border-indigo-500 bg-indigo-50 dark:bg-indigo-950/30 p-5">
                <p className="text-sm font-semibold text-indigo-800 dark:text-indigo-300 mb-1">
                    Official Government Warning
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                    The scale of these cases prompted <strong>Prime Minister Narendra Modi</strong> to address digital arrest scams directly
                    in his <em>Mann Ki Baat</em> broadcast (October 2024), stating:{' '}
                    <em>&ldquo;These days, a new type of fraud is happening  digital arrest. No government agency, CBI, ED, or police, ever conducts such arrests by phone or video call. Digital arrest has no provision in the law.&rdquo;</em>
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    Source: All India Radio, Mann Ki Baat  October 27, 2024
                </p>
            </div>

            <hr />

            {/* ── WHO IS TARGETED ───────────────────────────────────────── */}
            <h2>Who Is Being Targeted?</h2>

            <p>Digital arrest scams target anyone, but certain profiles are hit hardest:</p>

            <ul>
                <li>
                    <strong>Senior citizens:</strong> they have higher trust in authority figures and less
                    familiarity with scam tactics
                </li>
                <li>
                    <strong>Educated professionals</strong> such as doctors, engineers, and retired government
                    officers (targeted because they typically have more savings)
                </li>
                <li>
                    <strong>People with recent online activity,</strong> including recent package deliveries, job
                    applications, or financial transactions that scammers can reference for credibility
                </li>
                <li>
                    <strong>Anyone whose data was leaked:</strong> scammers buy datasets with names, phone
                    numbers, and partial ID details from data breaches
                </li>
            </ul>

            <p>
                <strong>There is no safe profile.</strong> Scammers call across all ages, income levels, and
                cities. The differentiating factor is not who you are. It is whether you know what to do when
                you answer.
            </p>

            <hr />

            {/* ── RED FLAGS SECTION ─────────────────────────────────────── */}
            <h2>The 6 Red Flags Checklist</h2>

            {/* Wikipedia-style: image floats right, list wraps on the left */}
            <div className="not-prose float-right ml-6 mb-4 w-52 sm:w-60 md:w-72 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 bg-[#0d1b3e]">
                <Image
                    src="/blog/digital-arrest-scam-india/red-flags-infographic.webp"
                    alt="6 Red Flags of Digital Arrest Scam, an infographic by RakshaAI"
                    width={900}
                    height={1100}
                    className="w-full object-contain"
                />
                <p className="text-[10px] text-center text-gray-400 italic px-3 py-2">
                    Share with family to spot a digital arrest scam instantly.
                </p>
            </div>

            <p>Any one of these is enough to end the call immediately:</p>

            <ol>
                <li>
                    <strong>They say you are under digital arrest.</strong> This phrase does not exist in Indian
                    law. Full stop.
                </li>
                <li>
                    <strong>They tell you not to contact family.</strong> Real law enforcement never isolates
                    you from your family or lawyer.
                </li>
                <li>
                    <strong>They demand a continuous video call.</strong> No legitimate investigation works this
                    way.
                </li>
                <li>
                    <strong>They ask you to transfer money.</strong> Government agencies do not collect money
                    over phone calls, ever.
                </li>
                <li>
                    <strong>They want your OTP or bank details.</strong> A real officer would invite you to a
                    physical office, not ask for banking credentials over a phone call.
                </li>
                <li>
                    <strong>They create urgency and panic.</strong> Urgency is the scammer&apos;s most powerful
                    weapon. Real legal processes take days, not minutes.
                </li>
            </ol>

            <div className="clear-both" />

            <hr />

            {/* ── WHAT REAL AGENCIES DO ─────────────────────────────────── */}
            <h2>What Real Government Agencies Actually Do</h2>

            <p>
                Understanding what genuine law enforcement actually does (and does not do) makes it impossible
                for scammers to fool you:
            </p>

            <ul>
                <li>
                    Real CBI, ED, and police officers{' '}
                    <strong>arrive in person with official written documentation</strong>, including summons,
                    warrants, and notices on official letterheads.
                </li>
                <li>
                    They <strong>never demand money</strong> over the phone or ask for &ldquo;bail bonds&rdquo;
                    to be transferred to a personal or business account.
                </li>
                <li>
                    They <strong>never ask you to keep the call secret</strong> from your family or lawyer.
                    You have a constitutional right to legal counsel.
                </li>
                <li>
                    They <strong>never conduct investigations over WhatsApp, Telegram, or Skype</strong>.
                </li>
                <li>
                    They <strong>never ask for OTPs, CVV numbers, or net banking passwords</strong>.
                </li>
                <li>
                    Court summons are delivered via registered post or in-person process servers, never as
                    screenshots on WhatsApp.
                </li>
            </ul>

            <blockquote>
                If an &ldquo;officer&rdquo; tells you they cannot come to your house because you are being
                &ldquo;monitored&rdquo; or that calling your lawyer will &ldquo;complicate the case,&rdquo;
                you are talking to a scammer.
            </blockquote>

            <hr />

            {/* ── WHAT TO DO ────────────────────────────────────────────── */}
            <h2>What To Do the Moment You Get This Call</h2>

            <div className="not-prose my-6 p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800">
                <p className="text-sm font-semibold text-amber-800 dark:text-amber-300 m-0">
                    If you received a digital arrest call in India: hang up, call 1930, tell your family, and file at cybercrime.gov.in. Do not transfer any money. Report within 30 minutes.
                </p>
            </div>

            <h3>Step 1: Hang Up Immediately</h3>
            <p>
                The moment you hear the words &ldquo;digital arrest&rdquo;, &ldquo;CBI investigation&rdquo;,
                or any request to stay on the call, <strong>hang up immediately</strong>. Do not explain yourself.
                Do not ask questions. Do not wait for them to finish. Just end the call.
            </p>
            <p>
                The longer you stay on the call, the more information scammers extract and the more effective
                their psychological pressure becomes. Every second counts.
            </p>

            <h3>Step 2: Do Not Call Back</h3>
            <p>
                Do not call back the number. Do not respond to callback SMS messages. Calling back signals to
                the scammer that you are engaged. They will restart the manipulation cycle. Block the
                number immediately.
            </p>

            <h3>Step 3: Tell Your Family</h3>
            <p>
                Isolation is the scammer&apos;s most powerful tool. Telling your family immediately breaks
                that isolation. A second perspective from someone who cares about you, and who is not in a
                state of panic, almost always makes the scam obvious within minutes.
            </p>

            <h3>Step 4: Call 1930</h3>
            <p>
                <strong>1930</strong> is India&apos;s National Cybercrime Helpline, operated 24/7 by the
                Ministry of Home Affairs. Call this number to:
            </p>
            <ul>
                <li>Report the scam</li>
                <li>Freeze transactions if you already transferred money</li>
                <li>Get guidance on next steps from trained officers</li>
            </ul>
            <p>
                If you transferred money, calling 1930 within 30 minutes gives you the best chance of
                intercepting the transfer before it reaches the scammer. After 24 hours, the money is
                significantly harder to recover.
            </p>

            <h3>Step 5: File at cybercrime.gov.in</h3>
            <p>
                File a formal complaint at{' '}
                <strong>cybercrime.gov.in</strong>, India&apos;s official cybercrime reporting portal.
                Keep records of:
            </p>
            <ul>
                <li>The phone number that called you</li>
                <li>Any WhatsApp messages, documents, or screenshots sent by the scammer</li>
                <li>Bank transaction references if money was transferred</li>
                <li>Date, time, and duration of the call</li>
            </ul>

            <h3>Step 6: Check on RakshaAI</h3>
            <p>
                Paste the caller&apos;s phone number into{' '}
                <Link href="/phone-number-checker">RakshaAI</Link> to instantly check if it has been reported by other victims.
                This helps confirm what you already know, and your report helps protect the next person
                who receives the same call.
            </p>

            <hr />

            {/* ── PROTECT YOURSELF ──────────────────────────────────────── */}
            <h2>How to Protect Yourself Going Forward</h2>

            {/* Wikipedia-style: 1930 image floats right, bullet list wraps on the left */}
            <div className="not-prose float-right ml-6 mb-4 w-44 sm:w-52 md:w-64 rounded-xl overflow-hidden shadow-lg border border-gray-700 bg-black">
                <Image
                    src="/blog/digital-arrest-scam-india/helpline-1930.webp"
                    alt="1930 National Cybercrime Helpline, Call Now 24 hours 7 days a week, Free, RakshaAI"
                    width={900}
                    height={900}
                    className="w-full object-contain"
                />
                <p className="text-[10px] text-center text-gray-400 italic px-3 py-2">
                    Save 1930 in your contacts now. Available 24/7 and completely free.
                </p>
            </div>

            <p>Prevention is far easier than recovery. These steps dramatically reduce your risk:</p>

            <ul>
                <li>
                    <strong>Save 1930 in your contacts right now,</strong> before you need it. Searching for it
                    during a panic is harder than you think.
                </li>
                <li>
                    <strong>Tell your parents and grandparents about this scam today</strong>. Senior citizens
                    are disproportionately targeted because they have higher trust in authority figures.
                </li>
                <li>
                    <strong>Verify any caller claiming to be government.</strong> Ask for their officer ID and
                    tell them you will call back on the official agency number. Real officers will give it to
                    you without hesitation.
                </li>
                <li>
                    <strong>Never share OTP, UPI PIN, or banking details</strong> with anyone on a call,
                    regardless of who they claim to be.
                </li>
                <li>
                    <strong>Check unknown phone numbers on RakshaAI</strong> before engaging with any caller
                    making unusual claims.
                </li>
                <li>
                    <strong>If you are on a call and feel panic rising,</strong> remember: that panic is the
                    product of the scam, not evidence of real trouble. Real emergencies give you time to verify.
                    Fake ones never do.
                </li>
            </ul>

            <div className="clear-both" />

            <hr />

            {/* ── FAQ ───────────────────────────────────────────────────── */}
            <h2>Frequently Asked Questions</h2>

            <h3>Is digital arrest legal in India?</h3>
            <p>
                No. <strong>Digital arrest does not exist in Indian law.</strong> No government agency (CBI,
                ED, NCB, TRAI, or any court) can arrest you over a phone or video call. The Ministry of Home
                Affairs has explicitly stated this. Anyone claiming to digitally arrest you is a scammer.
                Hang up immediately.
            </p>

            <h3>What should I do if I get a digital arrest call?</h3>
            <p>
                Hang up immediately. Do not call back. Tell your family. Call the Cybercrime Helpline{' '}
                <strong>1930</strong>. File a complaint at <strong>cybercrime.gov.in</strong>. If you already
                transferred money, call 1930 within 30 minutes for the best chance of recovery. Check the
                scammer&apos;s number at <Link href="/phone-number-checker">rakshaai.co/phone-number-checker</Link>.
            </p>

            <h3>How do digital arrest scammers get my personal information?</h3>
            <p>
                Scammers purchase personal data including names, phone numbers, city, and partial Aadhaar
                digits from data breaches and underground databases. This is why they can sound so specific
                and credible. The fact that they know your name or city is not evidence that they are real.
                It only means your data was in a leak.
            </p>

            <h3>Can I recover money lost in a digital arrest scam?</h3>
            <p>
                Recovery is possible but time-sensitive. Calling <strong>1930</strong> within 30–60 minutes
                of the transfer gives responders a window to freeze the receiving account before the money
                moves to mule accounts and is withdrawn. After 24 hours, recovery becomes significantly
                harder. Never delay reporting, even if you feel embarrassed. These scammers are professionals.
                Being deceived is not a character flaw.
            </p>

            <h3>Which helpline should I call for digital arrest scam?</h3>
            <p>
                Call <strong>1930</strong>, India&apos;s National Cybercrime Helpline, available 24 hours a
                day, 7 days a week, completely free. Also report at <strong>cybercrime.gov.in</strong> and
                check the caller&apos;s number at <Link href="/phone-number-checker">rakshaai.co/phone-number-checker</Link> to warn other potential
                victims.
            </p>

            <hr />

            {/* ── FINAL THOUGHTS ────────────────────────────────────────── */}
            <h2>Final Thoughts</h2>

            <p>
                The digital arrest scam works because it hijacks your brain&apos;s fear response. When you
                believe you are facing criminal prosecution, rational thinking shuts down. That is exactly
                what scammers count on.
            </p>

            <p>
                The antidote is knowledge. Now that you understand what digital arrest is, how it works, and
                what the red flags are, you are already protected. <strong>The call loses all its power
                the moment you know it is fake.</strong>
            </p>

            <p>
                Bookmark this page. Share it with someone in your family who might be vulnerable. And if you
                ever receive that call, hang up, breathe, and call 1930. You now know exactly what to do.
            </p>

            <hr />

            {/* ── RELATED GUIDES ───────────────────────────────────────── */}
            <div className="not-prose my-8 rounded-2xl border border-indigo-100 dark:border-indigo-900/30 bg-indigo-50/50 dark:bg-indigo-950/20 p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500 dark:text-indigo-400 mb-4">
                    Related Guides
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                    {[
                        { href: '/scams/digital-arrest', label: 'Digital Arrest Scam: Full Guide & Warning Signs' },
                        { href: '/scams/digital-arrest/fake-cbi-scam', label: 'Fake CBI Officer Scam  How It Works' },
                        { href: '/scams/digital-arrest/fake-trai-scam', label: 'Fake TRAI Scam  Telecom Impersonation Fraud' },
                        { href: '/scams/digital-arrest/fake-ed-scam', label: 'Fake ED / Enforcement Directorate Scam' },
                        { href: '/scams/phone-scams', label: 'Phone Scams in India: All Types Explained' },
                        { href: '/scams/upi-fraud', label: 'UPI Fraud Guide  Protect Your Payments' },
                    ].map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className="flex items-center gap-2 text-sm font-medium text-indigo-700 dark:text-indigo-300 hover:text-indigo-900 dark:hover:text-indigo-100 transition-colors"
                        >
                            <span className="text-indigo-400">→</span>
                            {label}
                        </Link>
                    ))}
                </div>
            </div>

            <hr />

            {/* ── FINAL CTA ─────────────────────────────────────────────── */}
            <div className="not-prose my-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/60 p-8 text-center">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">
                    Free Tool
                </p>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    Got a suspicious call or number?
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 max-w-sm mx-auto">
                    Paste any phone number, URL, or UPI ID into RakshaAI and get an instant scam risk report.
                    No sign-up. No cost. Results in under 5 seconds.
                </p>
                <Link
                    href="/phone-number-checker"
                    className="inline-flex items-center gap-2 px-7 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold text-sm rounded-full hover:bg-gray-700 dark:hover:bg-gray-100 transition-colors"
                >
                    Check a number now &rarr;
                </Link>
                <p className="text-gray-400 dark:text-gray-500 text-xs mt-4">
                    100% free &middot; No sign-up required &middot; Save 1930 in your contacts
                </p>
            </div>

        </BlogLayout>
        </>
    )
}
