import { Metadata } from 'next'
import BlogLayout from '@/components/BlogLayout'
import Link from 'next/link'
import Image from 'next/image'
import { blogPostingSchema, faqPageSchema, breadcrumbListSchema, personSchema, jsonLd } from '@/lib/seo/schema'
import SidebarPhoneNumberScam from '@/components/blog/SidebarPhoneNumberScam'

export const metadata: Metadata = {
    title: { absolute: 'How to Check If a Phone Number Is a Scam India - Free | RakshaAI' },
    description:
        'Got a suspicious call? Check any phone number for scam reports instantly - free, no sign-up. RakshaAI cross-references 10M+ Indian user reports in under 5 seconds. Here\'s how to use it and 5 other methods.',
    keywords:
        'how to check if phone number is scam India, check scam number India, truecaller scam check India, unknown number checker India free, how to verify caller India, suspicious call India what to do, phone number fraud check India, scam call India how to report',
    authors: [{ name: 'Rabinarayan Pradhan', url: 'https://www.linkedin.com/in/rabinarayan-pradhan-14ab9422b/' }],
    robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
    openGraph: {
        title: 'Got a Suspicious Call? Check Any Phone Number for Scam - Free, Instant',
        description:
            'RakshaAI checks any Indian phone number against 10M+ scam reports in under 5 seconds. Free, no sign-up. 5 methods explained.',
        type: 'article',
        siteName: 'RakshaAI',
        publishedTime: '2026-06-22T00:00:00.000Z',
        modifiedTime: '2026-06-22T00:00:00.000Z',
        tags: ['phone scam check India', 'scam number checker', 'truecaller alternative', 'cybercrime India'],
        url: 'https://rakshaai.co/blog/how-to-check-phone-number-scam-india',
        images: [
            {
                url: '/blog/how-to-check-phone-number-scam-india/phone-scam-check-hero.jpg',
                width: 1200,
                height: 630,
                alt: 'How to check if phone number is scam India - free instant number checker',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Got a Suspicious Call? Check the Number Before You Call Back - Free',
        description:
            'rakshaai.co/phone-number-checker - check any Indian number in 5 seconds. 10M+ scam reports. Free, no sign-up. Share this with everyone who gets unknown calls.',
        images: ['/blog/how-to-check-phone-number-scam-india/phone-scam-check-hero.jpg'],
    },
    alternates: {
        canonical: 'https://rakshaai.co/blog/how-to-check-phone-number-scam-india',
    },
}

const articleStructuredData = blogPostingSchema({
    headline: 'How to Check If a Phone Number Is a Scam in India (Free, Instant, 2026)',
    description:
        '5 free methods to check any Indian phone number for scam - including RakshaAI, Truecaller, and cybercrime portal. Instant results, no sign-up needed.',
    url: '/blog/how-to-check-phone-number-scam-india',
    image: '/blog/how-to-check-phone-number-scam-india/phone-scam-check-hero.jpg',
    datePublished: '2026-06-22T00:00:00.000Z',
    dateModified: '2026-06-22T00:00:00.000Z',
    author: personSchema({ name: 'Rabinarayan Pradhan', jobTitle: 'Cybersecurity Writer', url: '/author/rabinarayan-pradhan', image: '/authors/rabinarayan-pradhan.jpeg', sameAs: ['https://www.linkedin.com/in/rabinarayan-pradhan-14ab9422b/'] }),
    section: 'Phone Scams',
    keywords: ['how to check phone number scam India', 'check scam number India free', 'suspicious call India', 'phone fraud check India'],
})

const breadcrumbSchema = breadcrumbListSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'How to Check Phone Number Scam India', url: '/blog/how-to-check-phone-number-scam-india' },
])

const faqStructuredData = faqPageSchema([
    {
        question: 'Is there a free way to check if a phone number is a scam in India?',
        answer:
            'Yes. Go to rakshaai.co/phone-number-checker and enter any number for a free instant check - no sign-up needed. RakshaAI cross-references 10M+ user scam reports, known fraud databases, and cybercrime patterns to give you a risk score in under 5 seconds.',
    },
    {
        question: 'How does Truecaller identify scam calls in India?',
        answer:
            'Truecaller uses crowdsourced caller ID data. When many users mark a number as spam or fraud, it appears as flagged for other users. It works well for widely-known numbers but may miss new scam numbers that have not been widely reported yet.',
    },
    {
        question: 'Can I report a scam phone number in India?',
        answer:
            'Yes. Three ways: report on RakshaAI at rakshaai.co (instantly warns other Indians), call 1930 (National Cybercrime Helpline), and file at cybercrime.gov.in with the number and details of the fraud attempt.',
    },
    {
        question: 'What should I do if I already called back a scam number in India?',
        answer:
            'Do not share any personal details. If they asked for OTP or bank details, call your bank immediately and call 1930 to report. File at cybercrime.gov.in. Check the number at rakshaai.co and report it so other Indians are warned.',
    },
    {
        question: 'Are +91 numbers always safe to call back in India?',
        answer:
            'No. Scammers use legitimate Indian mobile numbers, often purchased in bulk or obtained through SIM farms. A +91 number is not inherently safe. Always check unknown numbers at rakshaai.co before calling back, regardless of country code.',
    },
])

const howToSchema = {
    '@type': 'HowTo',
    '@context': 'https://schema.org',
    name: 'How to Check If a Phone Number Is a Scam in India',
    description: 'Free, instant method to check any Indian phone number for scam reports using RakshaAI.',
    totalTime: 'PT30S',
    step: [
        {
            '@type': 'HowToStep',
            name: 'Go to RakshaAI Phone Number Checker',
            text: 'Open rakshaai.co/phone-number-checker on your phone or browser.',
            url: 'https://rakshaai.co/phone-number-checker',
        },
        {
            '@type': 'HowToStep',
            name: 'Enter the phone number',
            text: 'Enter the full phone number with +91 or 10-digit format. No sign-up required.',
        },
        {
            '@type': 'HowToStep',
            name: 'Get instant results',
            text: 'Get instant results: scam risk score, user reports, and known fraud type. If flagged, do not call back and block the number.',
        },
        {
            '@type': 'HowToStep',
            name: 'Report the number',
            text: 'Report the number on RakshaAI to warn other Indians. Call 1930 if you suspect fraud.',
        },
    ],
}

export default function HowToCheckPhoneNumberScamPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLd([articleStructuredData, faqStructuredData, breadcrumbSchema, howToSchema]) }}
            />
            <BlogLayout
                title="How to Check If a Phone Number Is a Scam in India (Free, Instant, 2026)"
                description="Got a suspicious call? Here are 5 free methods to check any Indian phone number for scam reports instantly. No sign-up, results in under 5 seconds."
                publishedAt="2026-06-22T00:00:00.000Z"
                lastUpdated="2026-06-22T00:00:00.000Z"
                readTime="8 min"
                author="Rabinarayan Pradhan"
                authorUrl="/author/rabinarayan-pradhan"
                primaryTool={{ label: 'Check a phone number for scam reports', href: '/phone-number-checker' }}
                tags={['Phone Scams', 'Scam Alerts', 'Number Checker', 'Cybercrime India']}
                slug="how-to-check-phone-number-scam-india"
                sidebar={<SidebarPhoneNumberScam title="How to Check If a Phone Number Is a Scam in India (Free, Instant, 2026)" description="Got a suspicious call? Here are 5 free methods to check any Indian phone number for scam reports instantly. No sign-up, results in under 5 seconds." />}
            >

                {/* HERO IMAGE */}
                <div className="not-prose mb-10 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                        src="/blog/how-to-check-phone-number-scam-india/phone-scam-check-hero.jpg"
                        alt="How to check if phone number is scam India - free instant number checker"
                        width={1200}
                        height={630}
                        className="w-full object-cover"
                        priority
                    />
                    <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-2 mb-0 italic px-4 pb-3">
                        Got an unknown call? Check the number on RakshaAI before calling back. Free, instant, no sign-up.
                    </p>
                </div>

                {/* INTRO */}
                <div className="mb-8">
                    <p className="text-lg text-gray-800 dark:text-gray-200">
                        Your phone rings. The number is unfamiliar. The caller says they are from your bank, from the government, or from a courier service. They want your OTP, your bank details, or your Aadhaar number. Or maybe they just missed your call, and you are wondering whether to call back.
                    </p>

                    <p className="text-lg text-gray-800 dark:text-gray-200">
                        In India, <strong>phone scam calls have surged to record levels in 2026</strong>. Scammers use bulk-purchased SIM cards, spoofed numbers, and AI voice tools to target millions of Indians every day. The question is simple: <strong>how do you check if a phone number is a scam before you call back?</strong>
                    </p>

                    <p className="text-lg text-gray-800 dark:text-gray-200">
                        This guide covers 5 free methods to check any phone number for scam in India, the red flags that should make you hang up immediately, and exactly what to do if you have already been targeted.
                    </p>
                </div>

                {/* FEATURED SNIPPET BLOCK */}
                <div className="not-prose my-8 rounded-2xl border-2 border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/40 p-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-blue-500 dark:text-blue-400 mb-3">
                        How to check if a phone number is a scam in India (free):
                    </p>
                    <ol className="space-y-2 text-sm font-medium text-gray-900 dark:text-white list-none">
                        {[
                            ['1', 'Go to rakshaai.co/phone-number-checker'],
                            ['2', 'Enter the phone number (no sign-up required)'],
                            ['3', 'Get instant results: scam risk score + user reports + known fraud type'],
                            ['4', 'If flagged, do not call back and block the number'],
                            ['5', 'Report it on RakshaAI to warn other Indians'],
                        ].map(([num, text]) => (
                            <li key={num} className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                                    {num}
                                </span>
                                <span>{text}</span>
                            </li>
                        ))}
                    </ol>
                    <p className="text-xs text-blue-600 dark:text-blue-400 mt-4 font-semibold">
                        Other free methods: Truecaller app, Google &quot;[number] scam India&quot;, cybercrime.gov.in suspected fraud number search.
                    </p>
                </div>

                <hr />

                {/* WHY YOU NEED TO CHECK */}
                <h2>Why You Need to Check Before You Call Back</h2>

                <p>
                    Calling back an unknown number is one of the riskiest things you can do with your phone in India today. Here is why:
                </p>

                <ul>
                    <li>
                        <strong>Scammers use missed calls as bait.</strong> They ring once and hang up, counting on your curiosity to make you call back. When you do, the manipulation begins.
                    </li>
                    <li>
                        <strong>A +91 number does not mean it is safe.</strong> Scammers purchase Indian SIM cards in bulk through SIM farms. The number looks local and legitimate, but the person behind it is not.
                    </li>
                    <li>
                        <strong>Once you engage, the pressure starts.</strong> Scammers are trained to keep you on the call, escalate urgency, and extract your OTP, UPI PIN, or bank details before you have time to think.
                    </li>
                    <li>
                        <strong>Phone scam losses in India crossed thousands of crores in 2025.</strong> Digital arrest scams, fake customer care calls, and OTP fraud are the three largest categories.
                    </li>
                </ul>

                <p>
                    The safest approach is to <strong>check the number before you call back</strong>. It takes less than 5 seconds, it is free, and it could save you lakhs.
                </p>

                <hr />

                {/* METHOD 1: RAKSHAAI */}
                <h2>Method 1: RakshaAI - India&apos;s Fastest Scam Number Checker</h2>

                <p>
                    <Link href="/phone-number-checker">RakshaAI</Link> is a free, India-specific scam number checker that cross-references any phone number against 10M+ user scam reports, known fraud databases, and cybercrime patterns. Results appear in under 5 seconds. No sign-up, no app download, no cost.
                </p>

                <h3>How to use RakshaAI to check a scam number:</h3>

                <ol>
                    <li>Go to <Link href="/phone-number-checker">rakshaai.co/phone-number-checker</Link> on your phone or browser</li>
                    <li>Enter the full number with +91 or 10-digit format</li>
                    <li>Get instant results: scam risk score, user reports, and known fraud type</li>
                    <li>If flagged, do not call back. Block the number.</li>
                    <li>Report it on RakshaAI to warn other Indians</li>
                </ol>

                {/* STEPS IMAGE */}
                <div className="not-prose my-8 rounded-2xl overflow-hidden shadow-md">
                    <Image
                        src="/blog/how-to-check-phone-number-scam-india/rakshaai-checker-steps.jpg"
                        alt="How to use RakshaAI phone number checker India - 3 step guide free"
                        width={800}
                        height={500}
                        className="w-full object-cover"
                    />
                    <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-2 mb-0 italic px-4 pb-3">
                        Check any number in 5 seconds. Free, no sign-up. Also check websites and UPI IDs at rakshaai.co.
                    </p>
                </div>

                <p>
                    <strong>Why RakshaAI works best for India:</strong> Unlike global databases, RakshaAI is built specifically for Indian phone scam patterns. It tracks digital arrest calls, fake customer care numbers, UPI fraud numbers, and other India-specific scam types that international tools often miss.
                </p>

                <hr />

                {/* METHOD 2: TRUECALLER */}
                <h2>Method 2: Truecaller</h2>

                <p>
                    <strong>Truecaller</strong> is India&apos;s most popular caller identification app with over 300 million users. It uses crowdsourced data to identify unknown callers and flag spam numbers.
                </p>

                <h3>How Truecaller identifies scam calls in India:</h3>

                <ul>
                    <li>When users mark a number as spam or fraud, it appears as flagged for other users</li>
                    <li>Truecaller shows the caller&apos;s name (if identified by other users) and spam score</li>
                    <li>The app can automatically block known spam numbers</li>
                </ul>

                <p>
                    <strong>Limitations:</strong> Truecaller requires an app download and account creation. It shares your contact list as part of its crowdsourced model. New scam numbers that have not been widely reported may not appear as flagged. For privacy-conscious users, the data sharing model may be a concern.
                </p>

                <hr />

                {/* METHOD 3: CYBERCRIME PORTAL */}
                <h2>Method 3: The National Cybercrime Portal Database</h2>

                <p>
                    India&apos;s official cybercrime reporting portal at <strong>cybercrime.gov.in</strong> maintains a database of reported fraud numbers. While it is not a real-time checker like RakshaAI, you can search for known reported numbers and check if the number calling you has been flagged in official complaints.
                </p>

                <h3>How to use it:</h3>

                <ol>
                    <li>Visit cybercrime.gov.in</li>
                    <li>Navigate to the search or reporting section</li>
                    <li>Enter the suspicious phone number</li>
                    <li>Check if any formal complaints have been filed against that number</li>
                </ol>

                <p>
                    <strong>Limitations:</strong> The portal is slower than dedicated tools, and not all scam numbers have formal complaints filed against them. However, it is the official government resource and adds credibility to your verification.
                </p>

                <hr />

                {/* METHOD 4: GOOGLE THE NUMBER */}
                <h2>Method 4: Google the Number With &quot;scam&quot; or &quot;fraud&quot;</h2>

                <p>
                    A quick Google search can sometimes reveal whether a number has been reported by other victims. This method works best for widely-known scam numbers that have been discussed in forums, news articles, or consumer complaint sites.
                </p>

                <h3>How to do it:</h3>

                <ol>
                    <li>Open Google on your phone or browser</li>
                    <li>Type the full phone number followed by &quot;scam India&quot; or &quot;fraud India&quot;</li>
                    <li>Check the results for complaints, forum posts, or news reports mentioning that number</li>
                </ol>

                <p>
                    <strong>Limitations:</strong> This method is slower (takes 30+ seconds), produces unreliable results for new numbers, and only works if someone has already posted about that specific number online. It also cannot tell you the scam type or risk score.
                </p>

                <hr />

                {/* METHOD 5: WHATSAPP CHECK */}
                <h2>Method 5: Check WhatsApp - Is It a Business Account?</h2>

                <p>
                    If the caller also contacted you on WhatsApp, you can check their account type. Legitimate businesses often have <strong>verified WhatsApp Business accounts</strong> with a green checkmark badge. Personal accounts or unverified business accounts contacting you about banking, government, or prize claims are almost always scams.
                </p>

                <h3>What to look for:</h3>

                <ul>
                    <li><strong>Green checkmark badge:</strong> Indicates a verified business. More trustworthy but not 100% guarantee.</li>
                    <li><strong>No business profile or generic name:</strong> Red flag. Legitimate banks and government agencies use verified accounts.</li>
                    <li><strong>Recently created account:</strong> Check the &quot;About&quot; section. Scammers frequently create new WhatsApp accounts.</li>
                </ul>

                <p>
                    <strong>Limitations:</strong> This only works if the caller is also on WhatsApp. Many scammers operate exclusively through voice calls. This should be used as an additional check, not your primary verification method.
                </p>

                {/* COMPARISON IMAGE */}
                <div className="not-prose my-8 rounded-2xl overflow-hidden shadow-md">
                    <Image
                        src="/blog/how-to-check-phone-number-scam-india/5-ways-check-scam-number.jpg"
                        alt="5 ways to check if phone number is scam India - RakshaAI Truecaller Google cybercrime"
                        width={800}
                        height={600}
                        className="w-full object-cover"
                    />
                    <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-2 mb-0 italic px-4 pb-3">
                        Comparison of 5 free methods to check a phone number for scam in India. RakshaAI is the fastest and most India-specific option.
                    </p>
                </div>

                <hr />

                {/* RED FLAGS DURING THE CALL */}
                <h2>Red Flags During the Call Itself</h2>

                <p>
                    Sometimes you answer a call before you have time to check the number. If you hear any of these during the call, hang up immediately:
                </p>

                {/* RED FLAGS IMAGE - Wikipedia-style float */}
                <div className="not-prose float-right ml-6 mb-4 w-52 sm:w-60 md:w-72 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 bg-[#0d1b3e]">
                    <Image
                        src="/blog/how-to-check-phone-number-scam-india/red-flags-scam-call.jpg"
                        alt="Red flags during suspicious phone call India - scam call warning signs"
                        width={800}
                        height={500}
                        className="w-full object-contain"
                    />
                    <p className="text-[10px] text-center text-gray-400 italic px-3 py-2">
                        Share with family. If you hear any of these, hang up and call 1930.
                    </p>
                </div>

                <ol>
                    <li>
                        <strong>They claim to be CBI, ED, police, or court.</strong> This is the &quot;digital arrest&quot; scam. No such thing exists in Indian law. Hang up.
                    </li>
                    <li>
                        <strong>They ask for your OTP.</strong> No legitimate caller, bank, or government agency will ever ask for your OTP over the phone. Not once. Not ever.
                    </li>
                    <li>
                        <strong>They say your account will be blocked unless you act now.</strong> Urgency is the scammer&apos;s primary weapon. Real processes give you time.
                    </li>
                    <li>
                        <strong>They ask you to install AnyDesk or any remote access app.</strong> This gives them full control of your phone, including banking apps.
                    </li>
                    <li>
                        <strong>They ask you to keep the call secret from your family.</strong> Isolation is a manipulation tactic. Real officers never demand secrecy from your family.
                    </li>
                    <li>
                        <strong>They offer a job, prize, or investment you did not apply for.</strong> If you did not enter a lottery, you did not win one.
                    </li>
                </ol>

                <div className="clear-both" />

                <div className="not-prose my-6 p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800">
                    <p className="text-sm font-semibold text-amber-800 dark:text-amber-300 m-0">
                        If you hear any of these red flags: hang up, block the number, check it on <Link href="/phone-number-checker" className="underline">RakshaAI</Link>, and call 1930 if you suspect fraud.
                    </p>
                </div>

                <hr />

                {/* HOW TO REPORT */}
                <h2>How to Report a Scam Number in India</h2>

                <p>
                    Reporting a scam number protects the next person who receives the same call. There are three free ways to report:
                </p>

                <h3>1. Report on RakshaAI</h3>
                <p>
                    Go to <Link href="/phone-number-checker">rakshaai.co/phone-number-checker</Link>, enter the number, and submit a report. Your report instantly warns other Indians who check the same number. It takes 10 seconds and requires no sign-up.
                </p>

                <h3>2. Call 1930 (National Cybercrime Helpline)</h3>
                <p>
                    <strong>1930</strong> is India&apos;s official cybercrime helpline, available 24/7, completely free. Call this number to report the scam and, if you lost money, to initiate account freezing. Reporting within 30 minutes gives you the best chance of money recovery.
                </p>

                <h3>3. File at cybercrime.gov.in</h3>
                <p>
                    File a formal online complaint at <strong>cybercrime.gov.in</strong>. Include the phone number, date and time of the call, what the caller said, and any evidence (screenshots, WhatsApp messages, transaction details).
                </p>

                <hr />

                {/* FAQ */}
                <h2>Frequently Asked Questions</h2>

                <h3>Is there a free way to check if a phone number is a scam in India?</h3>
                <p>
                    Yes. Go to <Link href="/phone-number-checker">rakshaai.co/phone-number-checker</Link> and enter any number for a free instant check. No sign-up needed. RakshaAI cross-references 10M+ user scam reports, known fraud databases, and cybercrime patterns to give you a risk score in under 5 seconds.
                </p>

                <h3>How does Truecaller identify scam calls in India?</h3>
                <p>
                    Truecaller uses crowdsourced caller ID data. When many users mark a number as spam or fraud, it appears as flagged for other users. It works well for widely-known numbers but may miss new scam numbers that have not been widely reported yet.
                </p>

                <h3>Can I report a scam phone number in India?</h3>
                <p>
                    Yes. Three ways: report on RakshaAI at <Link href="/phone-number-checker">rakshaai.co</Link> (instantly warns other Indians), call 1930 (National Cybercrime Helpline), and file at <strong>cybercrime.gov.in</strong> with the number and details of the fraud attempt.
                </p>

                <h3>What should I do if I already called back a scam number in India?</h3>
                <p>
                    Do not share any personal details. If they asked for OTP or bank details, call your bank immediately and call <strong>1930</strong> to report. File at cybercrime.gov.in. Check the number at <Link href="/phone-number-checker">rakshaai.co</Link> and report it so other Indians are warned.
                </p>

                <h3>Are +91 numbers always safe to call back in India?</h3>
                <p>
                    No. Scammers use legitimate Indian mobile numbers, often purchased in bulk or obtained through SIM farms. A +91 number is not inherently safe. Always check unknown numbers at <Link href="/phone-number-checker">rakshaai.co</Link> before calling back, regardless of country code.
                </p>

                <hr />

                {/* RELATED GUIDES */}
                <div className="not-prose my-8 rounded-2xl border border-indigo-100 dark:border-indigo-900/30 bg-indigo-50/50 dark:bg-indigo-950/20 p-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500 dark:text-indigo-400 mb-4">
                        Related Guides
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                        {[
                            { href: '/blog/digital-arrest-scam-india', label: 'Digital Arrest Scam: What To Do If You Get That Call' },
                            { href: '/blog/fake-customer-care-number-scam-india', label: 'Fake Customer Care Number Scam India' },
                            { href: '/blog/got-scammed-online-india-what-to-do', label: 'Got Scammed Online? Do These 5 Things in 30 Minutes' },
                            { href: '/scams/phone-scams', label: 'Phone Scams in India: All Types Explained' },
                            { href: '/blog/sim-swap-fraud-india', label: 'SIM Swap Fraud: How Scammers Steal Your Number' },
                            { href: '/blog/whatsapp-scam-india', label: 'WhatsApp Scam India: 8 Dangerous Messages' },
                        ].map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                className="flex items-center gap-2 text-sm font-medium text-indigo-700 dark:text-indigo-300 hover:text-indigo-900 dark:hover:text-indigo-100 transition-colors"
                            >
                                <span className="text-indigo-400">&rarr;</span>
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>

                <hr />

                {/* FINAL CTA */}
                <div className="not-prose my-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/60 p-8 text-center">
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">
                        Free Tool
                    </p>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                        Got a suspicious call or number?
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 max-w-sm mx-auto">
                        Paste any phone number, URL, or UPI ID into RakshaAI and get an instant scam risk report. No sign-up. No cost. Results in under 5 seconds.
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
