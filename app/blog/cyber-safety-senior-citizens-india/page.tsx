import { Metadata } from 'next'
import BlogLayout from '@/components/BlogLayout'
import Link from 'next/link'
import Image from 'next/image'
import { blogPostingSchema, faqPageSchema, breadcrumbListSchema, personSchema, jsonLd } from '@/lib/seo/schema'
import SidebarSeniorSafety from '@/components/blog/SidebarSeniorSafety'

// SEO Metadata
export const metadata: Metadata = {
    title: { absolute: 'Cyber Safety for Senior Citizens India: Simple Guide for Parents | RakshaAI' },
    description:
        'Senior citizens are the #1 target for digital arrest, voice cloning, and KYC scams in India. Share this guide with your parents and grandparents. 10 simple rules that protect them from every major fraud type.',
    keywords:
        'cyber safety for senior citizens India, online fraud awareness for elderly India, scam awareness for parents India, digital safety tips for senior citizens India, protect parents from online scam India, WhatsApp safety for elderly India, UPI safety for senior citizens India, how to teach parents about online scams India',
    authors: [{ name: 'Rabinarayan Pradhan', url: 'https://www.linkedin.com/in/rabinarayan-pradhan-14ab9422b/' }],
    robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
    openGraph: {
        title: 'Cyber Safety for Senior Citizens India: Share This With Your Parents Today',
        description:
            'Senior citizens are the #1 target for digital arrest, voice cloning, and KYC scams. 10 simple rules that protect your parents from every major fraud type in India.',
        type: 'article',
        siteName: 'RakshaAI',
        publishedTime: '2026-07-13T00:00:00.000Z',
        modifiedTime: '2026-07-13T00:00:00.000Z',
        tags: ['Cyber safety senior citizens', 'Scam awareness parents', 'Digital arrest', 'Elder fraud India'],
        url: 'https://rakshaai.co/blog/cyber-safety-senior-citizens-india',
        images: [
            {
                url: '/blog/cyber-safety-senior-citizens-india/cyber-safety-seniors-hero.webp',
                width: 1200,
                height: 675,
                alt: 'Cyber safety for senior citizens India, protecting parents from online scams',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: '10 Cyber Safety Rules Every Indian Parent and Grandparent Must Know',
        description:
            'Digital arrest, voice cloning, KYC SMS. Senior citizens are the most targeted. Share this with your parents right now. One share could save their life savings.',
        images: ['/blog/cyber-safety-senior-citizens-india/cyber-safety-seniors-hero.webp'],
    },
    alternates: {
        canonical: 'https://rakshaai.co/blog/cyber-safety-senior-citizens-india',
    },
}

// Structured Data
const articleStructuredData = blogPostingSchema({
    headline: 'Cyber Safety for Senior Citizens India: Simple Guide for Parents and Grandparents',
    description:
        'Senior citizens are India\'s most targeted group for cyber fraud. 10 simple rules that protect parents from digital arrest, voice cloning, KYC scams, and UPI fraud.',
    url: '/blog/cyber-safety-senior-citizens-india',
    image: '/blog/cyber-safety-senior-citizens-india/cyber-safety-seniors-hero.webp',
    datePublished: '2026-07-13T00:00:00.000Z',
    dateModified: '2026-07-13T00:00:00.000Z',
    author: personSchema({ name: 'Rabinarayan Pradhan', jobTitle: 'Cybersecurity Writer', url: '/author/rabinarayan-pradhan', image: '/authors/rabinarayan-pradhan.jpeg', sameAs: ['https://www.linkedin.com/in/rabinarayan-pradhan-14ab9422b/'] }),
    section: 'Scam Awareness',
    keywords: ['cyber safety senior citizens India', 'online fraud awareness elderly India', 'protect parents from scam India', 'digital safety tips senior citizens'],
})

const breadcrumbSchema = breadcrumbListSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'Cyber Safety for Senior Citizens India', url: '/blog/cyber-safety-senior-citizens-india' },
])

const faqStructuredData = faqPageSchema([
    {
        question: 'Why are senior citizens targeted more in cyber scams in India?',
        answer:
            'Senior citizens typically have significant savings built over a lifetime, are more trusting of authority figures, may be less familiar with digital fraud patterns, and are more likely to comply when threatened with legal consequences. Scammers specifically train their scripts to exploit these psychological patterns. In Nagpur, nearly 60% of all cyber fraud victims in 2025 were senior citizens.',
    },
    {
        question: 'How do I teach my parents to identify scam calls in India?',
        answer:
            'Start with one rule: hang up on any call that creates fear or demands secrecy, then call you. Practice this with them. Also share the RakshaAI number checker at rakshaai.co/phone-number-checker so they can check any unknown number before calling back. Simple, one-step habits work best.',
    },
    {
        question: 'What WhatsApp settings should I enable for my elderly parents?',
        answer:
            'Privacy settings: set Last Seen, Profile Photo, and About to "My Contacts" only. Enable two-step verification. Teach them to never click links from unknown senders and to forward any suspicious message to you before acting on it.',
    },
    {
        question: 'Should elderly parents use UPI in India?',
        answer:
            'Yes, UPI is generally safe when basic rules are followed. The key rules: never accept collect requests they did not initiate, never share the UPI PIN with anyone, always verify the receiver name before paying, and never scan QR codes sent by unknown people.',
    },
    {
        question: 'What should a senior citizen do immediately after getting a scam call in India?',
        answer:
            'Hang up. Do not call the number back. Call a trusted family member. If any money was already transferred, call 1930 immediately and then call the bank\'s official number from the back of the card. File a complaint at cybercrime.gov.in with all details.',
    },
])

// Page
export default function CyberSafetySeniorCitizensPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLd([articleStructuredData, faqStructuredData, breadcrumbSchema]) }}
            />
            <BlogLayout
                title="Cyber Safety for Senior Citizens India: Simple Guide for Parents and Grandparents"
                description="Senior citizens are the #1 target for digital arrest, voice cloning, and KYC scams in India. Share this guide with your parents and grandparents. 10 simple rules that protect them from every major fraud type."
                publishedAt="2026-07-13T00:00:00.000Z"
                lastUpdated="2026-07-13T00:00:00.000Z"
                readTime="10 min"
                author="Rabinarayan Pradhan"
                authorUrl="/author/rabinarayan-pradhan"
                primaryTool={{ label: 'Check any suspicious number for free', href: '/phone-number-checker' }}
                tags={['Scam Awareness', 'Senior Citizens', 'Digital Arrest', 'Family Safety']}
                slug="cyber-safety-senior-citizens-india"
                sidebar={<SidebarSeniorSafety title="Cyber Safety for Senior Citizens India: Simple Guide for Parents and Grandparents" description="Senior citizens are the #1 target for digital arrest, voice cloning, and KYC scams in India. 10 simple rules that protect parents and grandparents from every major fraud type." />}
            >

                {/* HERO IMAGE */}
                <div className="not-prose mb-10 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                        src="/blog/cyber-safety-senior-citizens-india/cyber-safety-seniors-hero.webp"
                        alt="Cyber safety for senior citizens India, protecting parents from online scams"
                        width={1200}
                        height={675}
                        className="w-full object-cover"
                        priority
                    />
                    <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-2 mb-0 italic px-4 pb-3">
                        Fifteen minutes at the kitchen table teaching a parent the rules in this guide protects them better than any app, any antivirus, or any bank alert ever will.
                    </p>
                </div>

                {/* INTRO */}
                <p>
                    Cyber safety for senior citizens in India is no longer optional family advice. It is urgent. If you
                    are searching for how to protect parents from online scam attempts in India, the numbers explain
                    why: in Nagpur alone, nearly 60% of all cyber fraud victims in 2025 were senior citizens, and the
                    city lost Rs 45.77 crore to cyber fraud in a single year
                    (source: <a href="https://www.nagpurtoday.in/rs-45-77-crore-lost-to-cyber-fraud-in-2025-60-victims-senior-citizens-in-nagpur/01051600" target="_blank" rel="noopener noreferrer">Nagpur Today</a>).
                    In Indore, fraudsters cheated more than 8,100 victims of over Rs 100 crore in 2025, with digital
                    arrest emerging as the single biggest weapon and elderly residents the primary targets
                    (source: <a href="https://the420.in/cyber-fraud-indore-2025-100-crore-loss-digital-arrest-seniors-targeted/" target="_blank" rel="noopener noreferrer">The420.in</a>).
                </p>

                <p>
                    This guide is written to be shared. Send it to your parents, sit with them for fifteen minutes, and
                    walk through the 10 rules together. Every rule is one sentence. Every rule stops a real scam that
                    is running in India right now.
                </p>

                <hr />

                {/* WHY SENIORS ARE TARGETED */}
                <h2>Why Senior Citizens Are the Most Targeted Group in India</h2>

                <p>
                    Online fraud awareness for elderly India has become its own field of study inside police cyber
                    cells, because scammers do not target senior citizens by accident. They target them by design, for
                    four specific reasons:
                </p>

                <ul>
                    <li>
                        <strong>A lifetime of savings in one place.</strong> Retired people hold fixed deposits,
                        pension funds, and property sale proceeds, exactly the pools of money a scammer wants to reach
                        in one strike.
                    </li>
                    <li>
                        <strong>Deep respect for authority.</strong> A generation raised to comply with police,
                        courts, and banks is far more likely to obey a caller claiming to be a CBI officer.
                    </li>
                    <li>
                        <strong>Less exposure to digital fraud patterns.</strong> Someone who started using a
                        smartphone at 60 has never seen a phishing link, a fake KYC SMS, or a spoofed caller ID before.
                    </li>
                    <li>
                        <strong>Isolation.</strong> Scammers explicitly instruct victims to tell no one. An elderly
                        person living alone, away from children in another city, has no one nearby to break the spell.
                    </li>
                </ul>

                <p>
                    Scam call centres train their scripts around these exact psychological patterns. The result shows
                    up in police data across the country: seniors are not just victims among many, they are the
                    preferred target. Scam awareness for parents India is therefore not something to get to eventually.
                    It is the highest-value fifteen minutes you can spend with your family this week.
                </p>

                <hr />

                {/* 5 SCAMS */}
                <h2>The 5 Scams Most Likely to Target Your Parents</h2>

                <div className="not-prose my-8 rounded-2xl overflow-hidden shadow-md">
                    <Image
                        src="/blog/cyber-safety-senior-citizens-india/5-scams-targeting-parents.webp"
                        alt="5 scams targeting senior citizens India 2026, digital arrest voice clone KYC"
                        width={800}
                        height={800}
                        className="w-full object-contain max-h-[700px]"
                    />
                    <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-2 mb-0 italic px-4 pb-3">
                        The five fraud formats most likely to reach your parents&apos; phone this year. Show them this image, each one is explained below.
                    </p>
                </div>

                <h3>Digital Arrest Calls</h3>
                <p>
                    A caller claiming to be from the CBI, ED, customs, or police says your parent&apos;s Aadhaar, phone
                    number, or bank account is linked to a crime, then keeps them on a video call under a fake
                    &quot;digital arrest&quot; while pressuring them to transfer money to &quot;verify&quot; or
                    &quot;settle&quot; the case. There is no such thing as a digital arrest under Indian law. No
                    government agency arrests anyone over the phone or asks for money on a call. Read the full
                    breakdown in our <Link href="/blog/digital-arrest-scam-india">digital arrest scam guide</Link>.
                </p>

                <h3>AI Voice Cloning Family Emergency Calls</h3>
                <p>
                    With just a few seconds of audio pulled from social media, scammers clone a son&apos;s or
                    daughter&apos;s voice and call the parent sobbing: an accident, an arrest, a kidnapping, money
                    needed immediately. The voice sounds real because it technically is real. The defence is simple and
                    absolute: hang up and call your child back on their saved number. Our guide to{' '}
                    <Link href="/blog/ai-voice-cloning-scam-india">AI voice cloning scams in India</Link> explains how
                    the technology works and every red flag to teach your family.
                </p>

                <h3>KYC Update SMS Fraud</h3>
                <p>
                    An SMS warns that the bank account, or the SIM card, will be blocked today unless KYC is updated
                    through a link. The link opens a fake bank page that captures login details, or installs an app
                    that reads OTPs. Banks never send KYC links by SMS. The safe habit: delete the SMS and open the
                    official bank app directly. See the full pattern in our{' '}
                    <Link href="/blog/kyc-update-scam-india">KYC update scam guide</Link>.
                </p>

                <h3>Fake Customer Care Numbers</h3>
                <p>
                    A senior searches Google for a bank, airline, or gas agency helpline and calls the first number
                    that appears, which scammers have planted through fake listings and ads. The &quot;agent&quot;
                    then walks them through installing a screen-sharing app or making a &quot;refundable&quot;
                    verification payment. Always take helpline numbers from the official website or the back of the
                    bank card, and check any suspicious number first. Our guide to{' '}
                    <Link href="/blog/fake-customer-care-number-scam-india">fake customer care number scams</Link>{' '}
                    covers this in detail.
                </p>

                <h3>UPI Collect Request Scams</h3>
                <p>
                    A scammer sends a UPI collect request disguised as an incoming payment, a refund, a pension
                    credit, or a lottery. The victim enters their UPI PIN believing they are receiving money, and
                    instead authorises a payment out of their account. The rule to teach: entering a UPI PIN only ever
                    sends money, never receives it. Every current UPI trick is documented in our guide to{' '}
                    <Link href="/blog/upi-scam-india-2026">UPI scams in India</Link>.
                </p>

                <hr />

                {/* REAL CASES */}
                <h2>Real Cases: This Is Happening to Real Families</h2>

                <p>
                    These are documented, sourced cases from Indian police records and national newspapers. Each one
                    began with a single phone call to a senior citizen.
                </p>

                <div className="not-prose my-8 space-y-4">
                    <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
                        <p className="text-xs font-bold uppercase tracking-widest text-red-600 dark:text-red-400 mb-2">
                            Ludhiana, August 2024
                        </p>
                        <h4 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                            82-Year-Old Vardhman Group Chairman Loses Rs 7 Crore in a Two-Day Digital Arrest
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                            S P Oswal, the 82-year-old chairman of the Vardhman Group, was kept under &quot;digital
                            arrest&quot; for two days by fraudsters posing as CBI officers and Supreme Court officials.
                            They staged a fake virtual courtroom, complete with a man impersonating the Chief Justice
                            of India, and served forged arrest warrants carrying ED and Mumbai Police stamps. He
                            transferred Rs 7 crore before the fraud was discovered. Police later froze accounts and
                            recovered Rs 5.25 crore, and two suspects were arrested from Guwahati. If one of
                            India&apos;s most successful industrialists can be trapped this way, any parent can.
                        </p>
                        <a
                            href="https://www.business-standard.com/companies/news/digital-arrest-and-rs-7-crore-heist-how-vardhman-group-head-was-tricked-124100100832_1.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                        >
                            Source: Business Standard
                        </a>
                    </div>

                    <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
                        <p className="text-xs font-bold uppercase tracking-widest text-red-600 dark:text-red-400 mb-2">
                            South Mumbai, December 2024 to March 2025
                        </p>
                        <h4 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                            86-Year-Old Woman Held Under Fake Arrest for Two Months, Loses Rs 20.25 Crore
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                            Scammers posing as law enforcement told an 86-year-old South Mumbai woman that her Aadhaar
                            had been misused for illegal transactions. Over more than two months they forced her to
                            stay at home, called every three hours to check her location, threatened cases against her
                            daughter, and extracted Rs 20.25 crore of her life savings. Three arrests followed, and
                            police traced links to an international fraud network. Her family found out only after the
                            money was gone.
                        </p>
                        <a
                            href="https://www.freepressjournal.in/mumbai/86-year-old-south-mumbai-woman-loses-20-crore-of-savings-in-digital-arrest-fraud-3-held"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                        >
                            Source: Free Press Journal
                        </a>
                    </div>

                    <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
                        <p className="text-xs font-bold uppercase tracking-widest text-red-600 dark:text-red-400 mb-2">
                            Delhi, 2025
                        </p>
                        <h4 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                            &quot;Save Me, Mom&quot;: AI Clone of Daughter&apos;s Voice Costs 65-Year-Old Rs 2 Lakh
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                            A 65-year-old Delhi woman received a call in which her daughter&apos;s voice, sobbing and
                            pleading, claimed she had been kidnapped and money was needed immediately. The voice was an
                            AI clone built from a few seconds of publicly available audio. The mother transferred Rs 2
                            lakh before discovering her daughter had been safe at home the entire time. Analysts note
                            that elderly people and women living alone are the primary targets of this scam format.
                        </p>
                        <a
                            href="https://the420.in/ai-voice-clone-scam-delhi-elderly-woman-kidnapping-fraud/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                        >
                            Source: The420.in
                        </a>
                    </div>
                </div>

                <p>
                    Three different cities, three different amounts, one identical pattern: fear, urgency, secrecy, and
                    a senior citizen alone on the phone. Every rule in the next section exists to break that pattern.
                </p>

                <hr />

                {/* 10 RULES - FEATURED SNIPPET TARGET */}
                <h2>10 Simple Rules Every Senior Citizen Must Know</h2>

                <p>10 cyber safety rules every senior citizen in India must know:</p>

                <div className="not-prose my-8 rounded-2xl border-2 border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/40 p-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">
                        10 rules that stop every major scam
                    </p>
                    <ol className="space-y-2.5 list-none">
                        {[
                            ['1', 'No government agency ever calls to arrest you on the phone. Hang up'],
                            ['2', 'Never share OTP with anyone, ever, for any reason'],
                            ['3', 'Your bank will never ask for your password or PIN over a call'],
                            ['4', 'If a family member calls with an emergency, hang up and call them back directly'],
                            ['5', 'Never scan a QR code someone sends you. It takes money, not gives it'],
                            ['6', 'Never click links in SMS or WhatsApp claiming to be from your bank'],
                            ['7', 'Before any UPI payment, check the receiver name matches who you expect'],
                            ['8', 'If a call creates urgency or fear, wait 10 minutes and call a family member'],
                            ['9', 'Never install an app anyone sends via link. Only use Play Store or App Store'],
                            ['10', 'Save 1930 in your phone. Call it immediately if you suspect fraud'],
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
                        Every scam described in this article is defeated by at least one of these 10 rules.
                    </p>
                </div>

                <div className="not-prose my-8 rounded-2xl overflow-hidden shadow-md">
                    <Image
                        src="/blog/cyber-safety-senior-citizens-india/10-safety-rules-printable.webp"
                        alt="10 cyber safety rules for senior citizens India, printable guide for parents"
                        width={800}
                        height={1034}
                        className="w-full object-contain max-h-[700px]"
                    />
                    <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-2 mb-0 italic px-4 pb-3">
                        Print this card and put it on the fridge or next to the landline. It is designed to be read at a glance, mid-call, at the exact moment it is needed.
                    </p>
                </div>

                <p>
                    Do not just forward these rules. Sit with your parents and practice them. Role-play a scam call:
                    pretend to be a &quot;CBI officer&quot; and let them practice hanging up. Digital safety tips for
                    senior citizens India work only when they become reflexes, and reflexes are built by rehearsal, not
                    by reading.
                </p>

                <hr />

                {/* WHATSAPP SAFETY */}
                <h2>WhatsApp Safety Rules for Senior Citizens</h2>

                <p>
                    WhatsApp is where most Indian seniors live online, and it is where most scam messages, fake KYC
                    links, and forwarded fraud reach them. WhatsApp safety for elderly India comes down to five
                    settings and habits you can configure on their phone in ten minutes:
                </p>

                <ul>
                    <li>
                        <strong>Lock down privacy.</strong> Set Last Seen, Profile Photo, and About to &quot;My
                        Contacts&quot; only, so scammers cannot harvest their photo and status for impersonation.
                    </li>
                    <li>
                        <strong>Enable two-step verification.</strong> Settings, Account, Two-step verification. This
                        single toggle blocks WhatsApp account takeover, which scammers use to message the entire
                        family asking for money.
                    </li>
                    <li>
                        <strong>Never click links from unknown senders.</strong> No bank, no electricity board, no
                        courier company sends payment links on WhatsApp.
                    </li>
                    <li>
                        <strong>Forward before acting.</strong> Teach them one habit: any message about money, KYC,
                        prizes, or emergencies gets forwarded to you before they act on it. You become the filter.
                    </li>
                    <li>
                        <strong>Video call to verify.</strong> If a &quot;relative&quot; messages from a new number
                        asking for help, insist on a video call first. Scammers refuse; real relatives never do.
                    </li>
                </ul>

                <hr />

                {/* UPI SAFETY */}
                <h2>UPI Safety Rules for Senior Citizens</h2>

                <p>
                    UPI safety for senior citizens India starts with correcting one misunderstanding that scammers
                    exploit constantly: many seniors believe entering a UPI PIN is needed to receive money. It is not.
                    The PIN only ever authorises money going out. Once that is clear, four rules cover everything:
                </p>

                <ul>
                    <li>Never accept a collect request you did not initiate, whatever the message claims it is for</li>
                    <li>Never share the UPI PIN with anyone, including anyone claiming to be from the bank or the UPI app</li>
                    <li>Always read the receiver name on the confirmation screen before paying, and stop if it does not match</li>
                    <li>Never scan a QR code sent by an unknown person, QR codes are for paying, not receiving</li>
                </ul>

                <p>
                    If an unknown number sends a payment request or claims a refund is waiting, check the number first
                    at the free <Link href="/phone-number-checker">RakshaAI phone number checker</Link>. It takes five
                    seconds and cross-references reported fraud numbers across India.
                </p>

                <hr />

                {/* FAMILY EMERGENCY PROTOCOL */}
                <h2>How to Set Up a Family Emergency Protocol</h2>

                <p>
                    Every scam that reaches a senior citizen depends on one thing: the victim acting alone, in fear,
                    without checking with family. A family emergency protocol removes that possibility permanently. It
                    takes fifteen minutes to set up, and it defeats digital arrest calls, voice cloning calls, and
                    every &quot;urgent money&quot; scam in one move.
                </p>

                <div className="not-prose my-8 rounded-2xl overflow-hidden shadow-md">
                    <Image
                        src="/blog/cyber-safety-senior-citizens-india/family-emergency-protocol.webp"
                        alt="Family emergency protocol to protect parents from scams India, code word call back"
                        width={800}
                        height={1000}
                        className="w-full object-contain max-h-[700px]"
                    />
                    <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-2 mb-0 italic px-4 pb-3">
                        Three steps, fifteen minutes, one family meeting. Set this up this weekend, before the call comes.
                    </p>
                </div>

                <ol>
                    <li>
                        <strong>Agree on a secret family code word.</strong> Pick a word no outsider could guess, and
                        agree that any genuine emergency call involving money must include it. An AI voice clone can
                        copy a voice perfectly, but it cannot know the code word.
                    </li>
                    <li>
                        <strong>Establish the call-back rule.</strong> Any emergency money call, from anyone, means
                        hang up and call that person back on the number already saved in the phone. No exceptions, not
                        even if the caller begs them to stay on the line. Especially if the caller begs them to stay
                        on the line.
                    </li>
                    <li>
                        <strong>Save 1930 in every family member&apos;s phone</strong> as &quot;Cybercrime Helpline
                        1930&quot;. If fraud is suspected or money has moved, this is the first call. Follow it with a
                        written complaint at{' '}
                        <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer">cybercrime.gov.in</a>,
                        the national portal run under the Ministry of Home Affairs, whose cyber safety advisories are
                        published at{' '}
                        <a href="https://www.mha.gov.in" target="_blank" rel="noopener noreferrer">mha.gov.in</a>.
                    </li>
                </ol>

                <p>
                    If money has already been transferred, speed matters more than anything else. Follow the
                    step-by-step recovery sequence in{' '}
                    <Link href="/blog/got-scammed-online-india-what-to-do">Got scammed online in India? Do these 5 things in 30 minutes</Link>.
                </p>

                <hr />

                {/* FAQ */}
                <h2>Frequently Asked Questions</h2>

                <h3>Why are senior citizens targeted more in cyber scams in India?</h3>
                <p>
                    Senior citizens typically have significant savings built over a lifetime, are more trusting of
                    authority figures, may be less familiar with digital fraud patterns, and are more likely to comply
                    when threatened with legal consequences. Scammers specifically train their scripts to exploit
                    these psychological patterns. Police data reflects the outcome: in Nagpur, nearly 60% of all cyber
                    fraud victims in 2025 were senior citizens.
                </p>

                <h3>How do I teach my parents to identify scam calls in India?</h3>
                <p>
                    Start with one rule: hang up on any call that creates fear or demands secrecy, then call you.
                    Practice this with them until it is automatic. Also set up the free{' '}
                    <Link href="/phone-number-checker">RakshaAI number checker</Link> on their phone so they can check
                    any unknown number before calling back. Simple, one-step habits work best. This is how to teach
                    parents about online scams India-wide: one reflex at a time, rehearsed together.
                </p>

                <h3>What WhatsApp settings should I enable for my elderly parents?</h3>
                <p>
                    Privacy settings: set Last Seen, Profile Photo, and About to &quot;My Contacts&quot; only. Enable
                    two-step verification. Teach them to never click links from unknown senders and to forward any
                    suspicious message to you before acting on it.
                </p>

                <h3>Should elderly parents use UPI in India?</h3>
                <p>
                    Yes. UPI is generally safe when basic rules are followed. The key rules: never accept collect
                    requests they did not initiate, never share the UPI PIN with anyone, always verify the receiver
                    name before paying, and never scan QR codes sent by unknown people.
                </p>

                <h3>What should a senior citizen do immediately after getting a scam call in India?</h3>
                <p>
                    Hang up. Do not call the number back. Call a trusted family member. If any money was already
                    transferred, call 1930 immediately and then call the bank&apos;s official number from the back of
                    the card. File a complaint at{' '}
                    <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer">cybercrime.gov.in</a>{' '}
                    with all details.
                </p>

                <hr />

                {/* FINAL THOUGHTS */}
                <h2>Final Thoughts</h2>

                <p>
                    An 82-year-old industrialist lost Rs 7 crore. An 86-year-old widow lost Rs 20.25 crore. A
                    65-year-old mother lost Rs 2 lakh to a voice that sounded exactly like her daughter. None of them
                    were careless people. They were simply alone on the phone with professionals trained to
                    manufacture fear, and no one had ever walked them through what those calls sound like.
                </p>

                <p>
                    That is the entire gap this guide closes. <strong>Share this article with your parents today, sit
                    with them for fifteen minutes, practice the 10 rules, and set up the family code word.</strong>{' '}
                    Scammers rely on silence between generations. One conversation at the kitchen table takes that
                    weapon away for good.
                </p>

                <hr />

                {/* SOURCES */}
                <h2>Sources and References</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    Every statistic and case referenced in this article is drawn from the following public sources. We
                    link out directly so you can verify the original reporting yourself.
                </p>
                <ul className="text-sm">
                    <li>
                        <a href="https://www.business-standard.com/companies/news/digital-arrest-and-rs-7-crore-heist-how-vardhman-group-head-was-tricked-124100100832_1.html" target="_blank" rel="noopener noreferrer">Digital arrest and Rs 7 crore heist: how the Vardhman Group head was tricked</a>, Business Standard
                    </li>
                    <li>
                        <a href="https://www.freepressjournal.in/mumbai/86-year-old-south-mumbai-woman-loses-20-crore-of-savings-in-digital-arrest-fraud-3-held" target="_blank" rel="noopener noreferrer">86-year-old South Mumbai woman loses Rs 20 crore of savings in digital arrest fraud</a>, Free Press Journal
                    </li>
                    <li>
                        <a href="https://www.business-standard.com/india-news/mumbai-digital-arrest-scam-woman-loses-20-crore-police-fraud-125031700779_1.html" target="_blank" rel="noopener noreferrer">Mumbai woman loses Rs 20 crore in digital arrest scam, police probe conspiracy</a>, Business Standard
                    </li>
                    <li>
                        <a href="https://the420.in/ai-voice-clone-scam-delhi-elderly-woman-kidnapping-fraud/" target="_blank" rel="noopener noreferrer">AI voice clone scam cheats Delhi elderly woman in fake kidnapping fraud</a>, The420.in
                    </li>
                    <li>
                        <a href="https://www.nagpurtoday.in/rs-45-77-crore-lost-to-cyber-fraud-in-2025-60-victims-senior-citizens-in-nagpur/01051600" target="_blank" rel="noopener noreferrer">Rs 45.77 crore lost to cyber fraud in 2025, 60% of victims senior citizens in Nagpur</a>, Nagpur Today
                    </li>
                    <li>
                        <a href="https://the420.in/cyber-fraud-indore-2025-100-crore-loss-digital-arrest-seniors-targeted/" target="_blank" rel="noopener noreferrer">Cyber fraud in Indore: over Rs 100 crore lost in 2025, digital arrest the biggest weapon</a>, The420.in
                    </li>
                </ul>

                {/* FINAL CTA */}
                <div className="not-prose my-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/60 p-8 text-center">
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">
                        Free Tool
                    </p>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                        Unknown number called your parents?
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 max-w-sm mx-auto">
                        Check any phone number at RakshaAI before anyone calls back. Instant result. No sign-up. No cost.
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
