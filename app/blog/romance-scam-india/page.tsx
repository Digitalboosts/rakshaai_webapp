import { Metadata } from 'next'
import BlogLayout from '@/components/BlogLayout'
import Link from 'next/link'
import Image from 'next/image'
import { blogPostingSchema, faqPageSchema, breadcrumbListSchema, personSchema, jsonLd } from '@/lib/seo/schema'
import SidebarRomanceScam from '@/components/blog/SidebarRomanceScam'

// SEO Metadata
export const metadata: Metadata = {
    title: { absolute: 'Romance Scam India: Fake Love Is Draining Bank Accounts in 2026 | RakshaAI' },
    description:
        'They matched with you online, texted for weeks, and said "I love you" and now they need 50,000 urgently. Romance scams cost Indians crores every year. Here\'s how to spot one before it\'s too late.',
    keywords:
        'romance scam India 2026, online dating scam India, fake NRI boyfriend scam India, matrimonial site fraud India, military romance scam India, pig butchering romance scam, online love fraud India 2026, how to check if someone is real online India',
    authors: [{ name: 'Rabinarayan Pradhan', url: 'https://www.linkedin.com/in/rabinarayan-pradhan-14ab9422b/' }],
    robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
    openGraph: {
        title: "Romance Scam India: They Said 'I Love You' Then Asked for 50,000",
        description:
            'Fake NRIs, fake military officers, fake matrimonial profiles. Romance scams cost Indians crores every year. 7 red flags every Indian needs to know.',
        type: 'article',
        siteName: 'RakshaAI',
        publishedTime: '2026-06-11T00:00:00.000Z',
        modifiedTime: '2026-06-11T00:00:00.000Z',
        tags: ['romance scam India', 'online dating fraud', 'fake NRI scam', 'matrimonial fraud India'],
        url: 'https://rakshaai.co/blog/romance-scam-india',
        images: [
            {
                url: '/blog/romance-scam-india/romance-scam-hero.webp',
                width: 1200,
                height: 675,
                alt: 'Romance scam India 2026, woman holding phone showing fake WhatsApp love messages before money request',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'That Person You Met Online? Run a Reverse Image Search Right Now.',
        description:
            'Romance scams cost Indians crores annually. Fake NRIs, military officers, and matrimonial profiles. 7 red flags to check before you send a single rupee.',
        images: ['/blog/romance-scam-india/romance-scam-hero.webp'],
    },
    alternates: {
        canonical: 'https://rakshaai.co/blog/romance-scam-india',
    },
}

// Structured Data
const articleStructuredData = blogPostingSchema({
    headline: 'Romance Scam India 2026: The Fake Love Draining Indian Bank Accounts',
    description:
        'Romance scams cost Indians crores every year. Fake NRIs, military officers, and matrimonial profiles. 7 red flags and how to verify anyone you met online.',
    url: '/blog/romance-scam-india',
    image: '/blog/romance-scam-india/romance-scam-hero.webp',
    datePublished: '2026-06-11T00:00:00.000Z',
    dateModified: '2026-06-11T00:00:00.000Z',
    author: personSchema({ name: 'Rabinarayan Pradhan', jobTitle: 'Cybersecurity Writer', url: '/author/rabinarayan-pradhan', image: '/authors/rabinarayan-pradhan.jpeg', sameAs: ['https://www.linkedin.com/in/rabinarayan-pradhan-14ab9422b/'] }),
    section: 'Romance Scams',
    keywords: ['romance scam India 2026', 'online dating scam India', 'fake NRI scam India', 'matrimonial fraud India'],
})

const breadcrumbSchema = breadcrumbListSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'Romance Scam India', url: '/blog/romance-scam-india' },
])

const faqStructuredData = faqPageSchema([
    {
        question: 'How do I know if an online person is real or a romance scammer?',
        answer:
            'Do a reverse image search of their photos at images.google.com. If the photos show a different name or appear on many profiles, it is a scammer. Also video call them live. Romance scammers almost always refuse or cancel at the last minute.',
    },
    {
        question: 'Why do romance scammers claim to be in the military or abroad?',
        answer:
            'Being abroad or in the military is the perfect excuse for never meeting in person, having limited communication access, and needing urgent financial help for travel, medical emergencies, or customs fees. It is a deliberately chosen cover story.',
    },
    {
        question: 'Can I get my money back after a romance scam in India?',
        answer:
            'Call 1930 immediately after the last transfer. File at cybercrime.gov.in with all transaction details and conversation screenshots. Recovery is most likely within the first 30 to 60 minutes. After 24 hours it becomes significantly harder as money moves through mule accounts.',
    },
    {
        question: 'Are matrimonial sites safe from romance scams in India?',
        answer:
            'Legitimate matrimonial sites like Shaadi.com and Jeevansathi.com are real, but scammers create fake profiles on them. Never send money to someone you met on a matrimonial site regardless of how long you have been talking. Verify their identity before any financial involvement.',
    },
    {
        question: 'What is a pig butchering romance scam?',
        answer:
            'Pig butchering scams begin as romance. The scammer builds emotional trust over weeks and then introduces a "can\'t miss" crypto investment opportunity. Victims invest increasing amounts on a fake platform, see growing "returns," and then find withdrawals are blocked. The emotional bond built earlier is what makes victims invest and re-invest despite warning signs.',
    },
])

// Page
export default function RomanceScamIndiaPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLd([articleStructuredData, faqStructuredData, breadcrumbSchema]) }}
            />
            <BlogLayout
                title="Romance Scam India: The Fake Love That's Draining Bank Accounts"
                description="They matched with you online, texted for weeks, and said 'I love you' and now they need money urgently. Romance scams cost Indians crores every year. Here's how to spot one before it's too late."
                publishedAt="2026-06-11T00:00:00.000Z"
                lastUpdated="2026-06-11T00:00:00.000Z"
                readTime="9 min"
                author="Rabinarayan Pradhan"
                authorUrl="/author/rabinarayan-pradhan"
                primaryTool={{ label: 'Check any profile for scam reports', href: '/phone-number-checker' }}
                tags={['Romance Scam', 'Online Dating Fraud', 'Matrimonial Fraud', 'Cybercrime India']}
                slug="romance-scam-india"
                sidebar={<SidebarRomanceScam title="Romance Scam India: The Fake Love That's Draining Bank Accounts" description="They matched with you online, texted for weeks, and said 'I love you' and now they need money urgently. Romance scams cost Indians crores every year." />}
            >

                {/* HERO IMAGE */}
                <div className="not-prose mb-10 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                        src="/blog/romance-scam-india/romance-scam-hero.webp"
                        alt="Romance scam India 2026, woman holding phone showing fake WhatsApp love messages with a military profile photo and an urgent money request"
                        width={1200}
                        height={675}
                        className="w-full object-cover"
                        priority
                    />
                    <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-2 mb-0 italic px-4 pb-3">
                        Weeks of love messages. Then: "I need money urgently." This is the romance scam playbook.
                    </p>
                </div>

                {/* INTRO */}
                <p>
                    You matched with someone online. They were charming, attentive, deeply interested in your life.
                    The conversations went on for weeks. They said all the right things. Then one morning: a crisis.
                    A hospital bill. A stuck package at customs. A flight they cannot afford. They need money,
                    just this once, and they will return it the moment things are sorted.
                </p>

                <p>
                    This is how online love fraud India 2026 operates. It is costing Indian victims
                    hundreds of crores every year.
                </p>

                <p>
                    Romance scams are unlike most online fraud. The financial loss is real, but the
                    emotional damage often goes deeper. Victims frequently feel profound shame, which
                    is exactly what scammers rely on to prevent reporting. This guide explains the
                    complete playbook, the four most common scammer profiles operating in India, and
                    the exact steps to verify anyone you meet online before any money changes hands.
                </p>

                {/* WHAT IS A ROMANCE SCAM */}
                <h2>What Is a Romance Scam and How Big Is the Problem in India?</h2>

                <p>
                    A romance scam is a fraud in which a criminal builds a fake emotional relationship
                    with a victim through dating apps, matrimonial sites, Instagram, WhatsApp, or
                    LinkedIn, over days, weeks, or months, then uses that emotional bond to extract
                    money, personal information, or both.
                </p>

                <p>
                    In India, the problem is significantly underreported. Most victims do not file
                    complaints because of stigma around online relationships. Cybercrime experts
                    estimate that reported cases represent only a fraction of actual incidents. The
                    National Cyber Crime Reporting Portal (cybercrime.gov.in) recorded a sharp rise
                    in online dating scam India complaints through 2025 and into 2026, with
                    average per-victim losses ranging from tens of thousands to several lakhs of rupees.
                </p>

                <p>
                    The scammers behind these operations are often part of organised criminal networks
                    based overseas, many in West Africa, Southeast Asia, or Eastern Europe. They work
                    in shifts, handle multiple victims simultaneously, and follow detailed scripts.
                    The emotional connection you feel is manufactured. The relationship is a product.
                </p>

                <hr />

                {/* 5-STAGE PLAYBOOK */}
                <h2>How Romance Scams Work: The 5-Stage Playbook</h2>

                <p>
                    Every romance scam follows a recognisable structure. Understanding the stages makes
                    the pattern visible, even while you are in the middle of it.
                </p>

                {/* 5-stages image - floated right */}
                <div className="not-prose float-right ml-6 mb-4 w-52 sm:w-64 md:w-80 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                    <Image
                        src="/blog/romance-scam-india/romance-scam-5-stages.webp"
                        alt="5 stages of romance scam India, how fake love fraud works step by step from approach to disappearance"
                        width={900}
                        height={506}
                        className="w-full object-contain"
                    />
                    <p className="text-[10px] text-center text-gray-500 dark:text-gray-400 italic px-3 py-2 bg-white dark:bg-gray-800">
                        The 5-stage playbook ends the same way every time: contact cut off, money gone.
                    </p>
                </div>

                <h3>Stage 1: The Approach. Too Perfect, Too Fast</h3>
                <p>
                    The scammer creates a polished profile: an attractive photo, an impressive profession
                    (military officer, NRI engineer, oil rig doctor), and a carefully crafted backstory.
                    They reach out proactively or match on a dating or matrimonial platform. Initial
                    messages are warm and move quickly toward personal connection.
                </p>

                <h3>Stage 2: Love Bombing. Building Deep Emotional Dependence</h3>
                <p>
                    This phase involves relentless attention. Daily good-morning messages, late-night
                    conversations, compliments, and expressions of deep feeling arrive far faster than
                    any real relationship develops. The goal is to create emotional dependency so strong
                    that the victim will resist warning signs when they eventually appear.
                </p>

                <h3>Stage 3: The Crisis. When the Money Requests Begin</h3>
                <p>
                    After sufficient trust has been built, a crisis appears. A medical emergency. A customs
                    fee on a valuable package. Airfare to finally come and meet you. The amount is usually
                    believable: not so large it seems impossible, not so small it seems trivial. The
                    urgency is always extreme. There is always a reason why normal channels cannot be used.
                </p>

                <h3>Stage 4: Escalating Demands</h3>
                <p>
                    If the first transfer happens, more follow. Each new crisis is slightly larger. The
                    emotional bond built in Stage 2 is weaponised: "I thought you cared about me." Victims
                    often send multiple transfers over weeks or months before realising what is happening.
                </p>

                <h3>Stage 5: The Disappearance</h3>
                <p>
                    When the victim stops paying or starts asking hard questions, the scammer disappears.
                    All accounts are deleted. The phone number goes silent. The person who said "you are
                    my everything" is gone, as if they never existed. In a real sense, they never did.
                </p>

                <div className="clear-both" />

                <hr />

                {/* 4 MOST COMMON PROFILES */}
                <h2>The 4 Most Common Romance Scam Profiles in India</h2>

                <p>
                    Scammers in India cluster around a small number of high-credibility cover identities.
                    Knowing these personas makes them immediately recognisable.
                </p>

                <h3>The Fake NRI or Foreign National</h3>
                <p>
                    The fake NRI boyfriend scam India is among the most reported variants. The scammer
                    claims to be an Indian living in the UK, USA, Canada, or Australia, successful,
                    educated, and "looking to come back to India to settle down." Being abroad explains
                    why they cannot meet, why video calls are difficult, and why they might need money
                    transferred internationally. The NRI identity also carries social prestige that
                    reduces suspicion.
                </p>

                <h3>The Military Romance Scam</h3>
                <p>
                    The military romance scam India variant uses a soldier, naval officer, or UN
                    peacekeeper deployed overseas. The military cover explains limited communication
                    (no phones on base), inability to travel freely, and the eventual request for
                    money, typically framed as help paying for leave travel, a medical emergency,
                    or release of a "package" held at customs. Photos are stolen from real military
                    personnel and reverse image search will often expose them.
                </p>

                <h3>The Matrimonial Site Fraud</h3>
                <p>
                    Shaadi.com scam India cases, and similar fraud on Jeevansathi, BharatMatrimony,
                    and other platforms, follow a specific pattern. The scammer creates a convincing
                    matrimonial profile, pursues a relationship for weeks, builds family-level trust,
                    then introduces a financial crisis before the "first meeting" can happen. The
                    matrimonial site fraud India variant is particularly damaging because families
                    can also become emotionally invested.
                </p>

                <h3>The Pig Butchering Investment Hybrid</h3>
                <p>
                    In the pig butchering romance scam variant, the relationship is a setup for an
                    investment fraud. After building emotional trust, the scammer introduces a
                    "life-changing" crypto or forex investment platform. The victim invests money
                    and sees convincing fake returns on a fraudulent dashboard. Withdrawals are
                    blocked with manufactured excuses. Read our full guide on the{' '}
                    <Link href="/blog/crypto-investment-scam-india-2026">
                        crypto investment scam playbook
                    </Link>{' '}
                    for a detailed breakdown of this variant.
                </p>

                <hr />

                {/* RED FLAGS */}
                <h2>Red Flags: Is This Person Real?</h2>

                {/* Featured snippet block */}
                <div className="not-prose my-8 rounded-2xl border-2 border-rose-200 dark:border-rose-800 bg-rose-50 dark:bg-rose-950/40 p-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-rose-600 dark:text-rose-400 mb-3">
                        Red flags that an online relationship is a romance scam in India
                    </p>
                    <ol className="space-y-2.5 list-none">
                        {[
                            ['1', 'They are unusually attractive and their photos look too professional'],
                            ['2', 'They declare love or deep feelings within days or weeks'],
                            ['3', 'They always have a reason they cannot video call or meet in person'],
                            ['4', 'They ask for money, always with an urgent emergency reason'],
                            ['5', 'They claim to be abroad: military, NRI, oil rig worker, or doctor'],
                            ['6', 'Their grammar and writing patterns feel inconsistent or scripted'],
                            ['7', 'A reverse image search of their photos shows a different person'],
                        ].map(([num, text]) => (
                            <li key={num} className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-rose-600 text-white text-[11px] font-bold flex items-center justify-center mt-0.5">
                                    {num}
                                </span>
                                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{text}</span>
                            </li>
                        ))}
                    </ol>
                    <p className="text-xs text-rose-700 dark:text-rose-400 mt-4 font-semibold">
                        If any of these apply, stop all money transfers and check the profile at rakshaai.co.
                    </p>
                </div>

                {/* Red flags image - floated right */}
                <div className="not-prose float-right ml-6 mb-4 w-44 sm:w-52 md:w-64 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                    <Image
                        src="/blog/romance-scam-india/romance-scam-red-flags.webp"
                        alt="7 red flags of romance scam India, checklist how to spot fake online relationship before sending money"
                        width={680}
                        height={849}
                        className="w-full object-contain"
                    />
                    <p className="text-[10px] text-center text-gray-500 dark:text-gray-400 italic px-3 py-2 bg-white dark:bg-gray-800">
                        Share this checklist. Someone you know may need it right now.
                    </p>
                </div>

                <p>
                    The single most reliable test is the video call. Ask for a live, unscripted video
                    call at a time you choose, not a time the scammer proposes. A real person will
                    accommodate this. A scammer will generate an excuse: bad connection, broken phone,
                    working night shift, currently on a restricted military base. Every single time.
                    No exception.
                </p>

                <p>
                    The second most reliable test is a reverse image search. Take any profile photo
                    and upload it to{' '}
                    <a href="https://images.google.com" target="_blank" rel="noopener noreferrer">
                        images.google.com
                    </a>
                    . If the photo belongs to a model, a different person, or appears across dozens
                    of profiles with different names, you are talking to a scammer.
                </p>

                <p>
                    Watch also for inconsistency in details over time. A scammer managing many victims
                    simultaneously will forget what they told you: the city they grew up in, their
                    siblings' names, their previous job. Real people do not contradict their own
                    life story.
                </p>

                <div className="clear-both" />

                <hr />

                {/* HOW TO VERIFY */}
                <h2>How to Verify Anyone You Met Online</h2>

                {/* Verify image - floated right */}
                <div className="not-prose float-right ml-6 mb-4 w-44 sm:w-52 md:w-64 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                    <Image
                        src="/blog/romance-scam-india/romance-scam-verify-profile.webp"
                        alt="How to do reverse image search to catch romance scammer India, verify any online profile in 60 seconds"
                        width={680}
                        height={849}
                        className="w-full object-contain"
                    />
                    <p className="text-[10px] text-center text-gray-500 dark:text-gray-400 italic px-3 py-2 bg-white dark:bg-gray-800">
                        Reverse image search takes 60 seconds and exposes most romance scammers immediately.
                    </p>
                </div>

                <p>
                    Use this verification sequence before any financial involvement with someone you
                    have only met online:
                </p>

                <ol>
                    <li>
                        <strong>Reverse image search every profile photo.</strong> Go to{' '}
                        <a href="https://images.google.com" target="_blank" rel="noopener noreferrer">
                            images.google.com
                        </a>
                        , click the camera icon, and upload the profile photo. If results show a
                        different person or the photo appears on many different profiles, stop all contact.
                    </li>
                    <li>
                        <strong>Demand a live video call on your terms.</strong> You choose the time.
                        You ask them to do something specific on camera: hold up a piece of paper with
                        your name, wave at a specific moment. A real person will do this. A scammer
                        will not.
                    </li>
                    <li>
                        <strong>Search their phone number on RakshaAI.</strong> At{' '}
                        <Link href="/phone-number-checker">rakshaai.co</Link>, search the WhatsApp
                        number or profile link. If other victims have reported it, you will see the
                        scam history immediately.
                    </li>
                    <li>
                        <strong>Look up their claimed employer and check credentials.</strong> If they
                        claim to be a doctor, army officer, or engineer at a specific company, verify
                        that independently. Do not use contact information they provide. Check the
                        official website of the claimed organisation.
                    </li>
                    <li>
                        <strong>Check for a{' '}
                        <Link href="/blog/how-to-check-fake-website-india">fake website or fake profile</Link>.</strong>{' '}
                        Scammers sometimes create convincing-looking fake LinkedIn profiles, company
                        pages, and personal websites to support their cover identity.
                    </li>
                </ol>

                <div className="clear-both" />

                <hr />

                {/* WHAT TO DO IF SCAMMED */}
                <h2>What To Do If You Have Already Sent Money</h2>

                <p>
                    The first 30 minutes after your last transfer are the most critical window for
                    recovery. Act immediately in this order:
                </p>

                <ol>
                    <li>
                        <strong>Call 1930 right now.</strong> India's National Cybercrime Helpline
                        can flag the receiving account and initiate an inter-bank hold in real time.
                        Every minute matters. The money is moving through mule accounts and the
                        window for freezing it closes fast.
                    </li>
                    <li>
                        <strong>Contact your bank directly.</strong> Call the bank that processed
                        your transfer and ask for an urgent fraud hold. Provide the recipient account
                        details, the amount, and the timestamp. Banks can sometimes reverse transfers
                        if flagged within minutes.
                    </li>
                    <li>
                        <strong>Screenshot everything.</strong> Every chat, every transaction record,
                        every profile detail before the scammer deletes their accounts. These are your
                        evidence for recovery and prosecution.
                    </li>
                    <li>
                        <strong>File at{' '}
                        <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer">
                            cybercrime.gov.in
                        </a>.</strong>{' '}
                        Select "Online Financial Fraud" as the category. Attach your screenshots.
                        Cases with complete documentation are prioritised.
                    </li>
                    <li>
                        <strong>Read the complete recovery guide.</strong>{' '}
                        <Link href="/blog/got-scammed-online-india-what-to-do">
                            Got scammed online in India? Here are the 5 steps to take in the next 30 minutes.
                        </Link>
                    </li>
                </ol>

                <p>
                    Do not feel shame. This fraud is designed by professionals who have executed it
                    thousands of times. The manipulation is sophisticated. Reporting it is not a
                    reflection on your intelligence. It is what stops the next person from being scammed.
                </p>

                <hr />

                {/* FAQ */}
                <h2>Frequently Asked Questions</h2>

                <h3>How do I know if an online person is real or a romance scammer?</h3>
                <p>
                    Do a reverse image search of their photos at{' '}
                    <a href="https://images.google.com" target="_blank" rel="noopener noreferrer">
                        images.google.com
                    </a>
                    . If the photos show a different name or appear on many profiles, it is a scammer.
                    Also video call them live. Romance scammers almost always refuse or cancel at
                    the last minute.
                </p>

                <h3>Why do romance scammers claim to be in the military or abroad?</h3>
                <p>
                    Being abroad or in the military is the perfect excuse for never meeting in person,
                    having limited communication access, and needing urgent financial help for travel,
                    medical emergencies, or customs fees. It is a deliberately chosen cover story that
                    scammers know works reliably on Indian targets because of the social prestige
                    associated with these professions.
                </p>

                <h3>Can I get my money back after a romance scam in India?</h3>
                <p>
                    Call 1930 immediately after the last transfer. File at{' '}
                    <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer">
                        cybercrime.gov.in
                    </a>{' '}
                    with all transaction details and conversation screenshots. Recovery is most likely
                    within the first 30 to 60 minutes. After 24 hours it becomes significantly harder
                    as money moves through mule accounts.
                </p>

                <h3>Are matrimonial sites safe from romance scams in India?</h3>
                <p>
                    Legitimate matrimonial sites like Shaadi.com and Jeevansathi.com are real platforms,
                    but scammers create fake profiles on them. Never send money to someone you met on
                    a matrimonial site regardless of how long you have been talking. Always verify their
                    identity through an independent video call and reverse image search before any
                    financial involvement.
                </p>

                <h3>What is a pig butchering romance scam?</h3>
                <p>
                    Pig butchering scams begin as romance. The scammer builds emotional trust over
                    weeks and then introduces a "can't miss" crypto investment opportunity. Victims invest
                    increasing amounts on a fake platform, see growing "returns," and then find
                    withdrawals are blocked. The emotional bond built earlier is what makes victims
                    invest and re-invest despite warning signs. See our full guide on the{' '}
                    <Link href="/blog/crypto-investment-scam-india-2026">
                        pig butchering crypto investment scam
                    </Link>{' '}
                    for complete details.
                </p>

            </BlogLayout>
        </>
    )
}
