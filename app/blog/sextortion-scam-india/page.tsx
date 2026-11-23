import { Metadata } from 'next'
import BlogLayout from '@/components/BlogLayout'
import Link from 'next/link'
import Image from 'next/image'
import { blogPostingSchema, faqPageSchema, breadcrumbListSchema, personSchema, jsonLd } from '@/lib/seo/schema'
import SidebarSextortionScam from '@/components/blog/SidebarSextortionScam'

// SEO Metadata
export const metadata: Metadata = {
    title: { absolute: 'Sextortion Scam India: Video Call Blackmail - Don\'t Pay. Do This. | RakshaAI' },
    description:
        'A stranger video calls you, records it, and demands money. Sextortion is India\'s fastest-growing cyber blackmail scam. Never pay - it makes it worse. Exact steps to stop it. Free check at RakshaAI.',
    keywords:
        'sextortion scam India 2026, WhatsApp video call blackmail India, online blackmail India 2026, how to report sextortion India, cyber blackmail India, Instagram sextortion India, AI deepfake sextortion India, sextortion helpline India',
    authors: [{ name: 'Rabinarayan Pradhan', url: 'https://www.linkedin.com/in/rabinarayan-pradhan-14ab9422b/' }],
    robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
    openGraph: {
        title: 'Sextortion Scam India: Never Pay a Single Rupee - Here\'s What to Do Instead',
        description:
            'Payment extends sextortion - it never ends it. Indian cybercrime police handle these cases with complete confidentiality. Step-by-step guide.',
        type: 'article',
        siteName: 'RakshaAI',
        publishedTime: '2026-06-03T00:00:00.000Z',
        modifiedTime: '2026-06-03T00:00:00.000Z',
        tags: ['sextortion scam India', 'WhatsApp blackmail India', 'cyber blackmail India 2026', 'online sextortion India', 'AI deepfake sextortion'],
        url: 'https://rakshaai.co/blog/sextortion-scam-india',
        images: [
            {
                url: '/blog/sextortion-scam-india/sextortion-scam-hero.webp',
                width: 1200,
                height: 675,
                alt: 'Sextortion scam India 2026 - WhatsApp video call blackmail cyber crime',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Sextortion Scam India: Don\'t Pay a Single Rupee - Here\'s What To Do',
        description:
            'Paying proves you will pay again. Police handle these cases confidentially. Share this - someone you know may need it urgently.',
        images: ['/blog/sextortion-scam-india/sextortion-scam-hero.webp'],
    },
    alternates: {
        canonical: 'https://rakshaai.co/blog/sextortion-scam-india',
    },
}

// Structured Data
const articleStructuredData = blogPostingSchema({
    headline: 'Sextortion Scam India 2026: Video Call Blackmail - What To Do',
    description:
        'Sextortion accounts for 4% of India\'s cybercrime losses. Do not pay. File confidentially at cybercrime.gov.in. Complete guide to recognizing, stopping, and reporting sextortion in India.',
    url: '/blog/sextortion-scam-india',
    image: '/blog/sextortion-scam-india/sextortion-scam-hero.webp',
    datePublished: '2026-06-03T00:00:00.000Z',
    dateModified: '2026-06-04T00:00:00.000Z',
    author: personSchema({ name: 'Rabinarayan Pradhan', jobTitle: 'Cybersecurity Writer', url: '/author/rabinarayan-pradhan', image: '/authors/rabinarayan-pradhan.jpeg', sameAs: ['https://www.linkedin.com/in/rabinarayan-pradhan-14ab9422b/'] }),
    section: 'Cyber Blackmail',
    keywords: ['sextortion scam India', 'WhatsApp video call blackmail India', 'cyber blackmail India 2026', 'online sextortion India'],
})

const breadcrumbSchema = breadcrumbListSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'Sextortion Scam India', url: '/blog/sextortion-scam-india' },
])

const faqStructuredData = faqPageSchema([
    {
        question: 'Should I pay a sextortion scammer in India?',
        answer:
            'Never. Payment does not stop sextortion - it signals you will pay again and demands escalate immediately. File at cybercrime.gov.in and call 1930. These are handled with complete confidentiality by police.',
    },
    {
        question: 'Can AI generate fake sextortion content from social media photos?',
        answer:
            'Yes. In 2026, AI image tools can generate realistic fake compromising images from publicly available social media photos. This content is entirely fabricated but constitutes criminal blackmail under IT Act Section 67 and BNS Section 75 regardless.',
    },
    {
        question: 'Is sextortion illegal in India?',
        answer:
            'Yes. Sextortion is covered under IT Act Section 67 (obscene content), Section 66E (privacy violation), BNS Section 75 (sexual harassment), and Section 351 (criminal intimidation). Penalties range from 3 to 7 years imprisonment depending on the charges.',
    },
    {
        question: 'How do I report sextortion in India?',
        answer:
            'File at cybercrime.gov.in (select Cyber Blackmail/Sextortion), call 1930, and file an FIR at your local cybercrime police station. All are confidential. Also report the scammer\'s number at rakshaai.co to warn other Indians.',
    },
    {
        question: 'What if the sextortion content is AI-generated and completely fake?',
        answer:
            'The law applies equally. Threatening to publish fabricated sexual content is criminal extortion regardless of whether it is real or AI-generated. Report it identically - file at cybercrime.gov.in and call 1930.',
    },
])

// Page
export default function SextortionScamPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLd([articleStructuredData, faqStructuredData, breadcrumbSchema]) }}
            />
            <BlogLayout
                title="Sextortion Scam India: They're Recording Your Video Call Right Now"
                description="A stranger video calls you, records it, and demands money. Sextortion is India's fastest-growing cyber blackmail scam. Never pay - it makes it worse."
                publishedAt="2026-06-03T00:00:00.000Z"
                lastUpdated="2026-06-03T00:00:00.000Z"
                readTime="9 min"
                author="Rabinarayan Pradhan"
                authorUrl="/author/rabinarayan-pradhan"
                primaryTool={{ label: 'Check a suspicious number or profile link', href: '/phone-number-checker' }}
                tags={['Cyber Blackmail', 'Sextortion India', 'Scam Alerts', 'Cybercrime India']}
                slug="sextortion-scam-india"
                sidebar={<SidebarSextortionScam title="Sextortion Scam India: They're Recording Your Video Call Right Now" description="A stranger video calls you, records it, and demands money. Never pay - it makes it worse." />}
            >

                {/* HERO IMAGE */}
                <div className="not-prose mb-10 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                        src="/blog/sextortion-scam-india/sextortion-scam-hero.webp"
                        alt="Sextortion scam India 2026 - WhatsApp video call blackmail cyber crime, phone glowing on dark table with distressed person silhouette"
                        width={1200}
                        height={675}
                        className="w-full object-cover"
                        priority
                    />
                    <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-2 mb-0 italic px-4 pb-3">
                        The phone glows in the dark. A single recorded moment is now being used to extort money. You are not alone - and you must not pay.
                    </p>
                </div>

                {/* INTRO */}
                <p>
                    You accepted a video call from an unknown number. The call lasted under two minutes.
                    Within hours, a message arrives: <em>"I recorded this. Pay me or I send it to your family, your contacts, your employer."</em>
                </p>

                <p>
                    This is <strong>sextortion</strong> - India's fastest-growing cyber blackmail crime. It does not require
                    you to have done anything wrong. It does not require real content. And it does not end with payment.
                    Every rupee you pay proves you will pay again, and demands escalate immediately.
                </p>

                <p>
                    India's National Cybercrime Helpline (1930) receives thousands of sextortion complaints every month.
                    Victims include students, working professionals, homemakers, and senior citizens. The scam is organised,
                    industrialised, and running at scale across the country.
                </p>

                {/* FEATURED SNIPPET BLOCK */}
                <div className="not-prose my-8 rounded-2xl border-2 border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/40 p-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-red-600 dark:text-red-400 mb-3">
                        If you are being sextorted in India right now - do this immediately
                    </p>
                    <ol className="space-y-2.5 list-none">
                        {[
                            ['1', 'Do NOT pay - payment extends the blackmail, it never ends it'],
                            ['2', 'Screenshot all threats and the scammer\'s profile as evidence'],
                            ['3', 'Block the scammer on all platforms immediately'],
                            ['4', 'File a complaint at cybercrime.gov.in - handled with complete confidentiality'],
                            ['5', 'Call 1930 for immediate cybercrime support'],
                            ['6', 'Tell a trusted person - isolation is the scammer\'s greatest weapon'],
                        ].map(([num, text]) => (
                            <li key={num} className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-600 text-white text-[11px] font-bold flex items-center justify-center mt-0.5">
                                    {num}
                                </span>
                                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{text}</span>
                            </li>
                        ))}
                    </ol>
                    <p className="text-xs text-red-700 dark:text-red-400 mt-4 font-semibold">
                        Important: Indian cybercrime police handle sextortion confidentially. Reporting does not publicize content.
                    </p>
                </div>

                <hr />

                {/* WHAT IS SEXTORTION */}
                <h2>What Is Sextortion and How Bad Is It in India?</h2>

                <p>
                    Sextortion is a form of cyber blackmail where a scammer threatens to publish real, fabricated,
                    or AI-generated intimate content about you unless you pay money. The threat alone - regardless of
                    whether any real content exists - is sufficient for criminals to extort victims for thousands or
                    lakhs of rupees.
                </p>

                <p>
                    India's cybercrime data shows sextortion accounts for approximately 4% of all cybercrime financial
                    losses. What makes this number deceptive is that sextortion is one of the most severely
                    under-reported crimes in India. Shame, fear, and the belief that paying will end it silences the
                    majority of victims. For every complaint filed, many more victims quietly pay.
                </p>

                <p>
                    Under Indian law, sextortion is a serious criminal offence. Perpetrators face 3 to 7 years
                    imprisonment under IT Act Section 67 (obscene content), Section 66E (privacy violation),
                    BNS Section 75 (sexual harassment), and Section 351 (criminal intimidation).
                </p>

                <hr />

                {/* HOW IT WORKS */}
                <h2>How Sextortion Scams Work in India in 2026</h2>

                <p>
                    Sextortion scammers in 2026 use four distinct methods. All four have one thing in common:
                    they do not require your genuine participation. The trap works whether you cooperated,
                    clicked a link, or simply had public photos online.
                </p>

                {/* 4 variants grid - capped width so the portrait infographic doesn't look oversized */}
                <div className="not-prose my-8 max-w-md mx-auto rounded-2xl overflow-hidden shadow-md border border-gray-100 dark:border-gray-700">
                    <Image
                        src="/blog/sextortion-scam-india/sextortion-variants-grid.webp"
                        alt="4 types of sextortion scam India 2026 - WhatsApp Instagram AI deepfake hacked account"
                        width={800}
                        height={999}
                        className="w-full object-cover"
                    />
                    <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-2 mb-0 italic px-4 pb-3">
                        The four methods used in India in 2026. None of them end with payment.
                    </p>
                </div>

                <h3>Version 1: The WhatsApp or Instagram Honeytrap</h3>

                <p>
                    The most common variant. A fake profile contacts you - usually an attractive stranger - and
                    moves quickly to building trust. Within days or even hours, the conversation is steered toward
                    a video call. During the call, the scammer shows intimate content, hoping to provoke a
                    reciprocal response. The entire call is screen-recorded.
                </p>

                <p>
                    You do not have to reciprocate. Even your face on camera during the call is enough. The
                    recording is then used as the basis for the threat. Many victims say they did nothing at all
                    during the call - the edited clip is presented deceptively regardless.
                </p>

                <h3>Version 2: The Screen Recording Trap</h3>

                <p>
                    A link is sent claiming to show a message, a photo, or a video call request. Clicking the
                    link activates the camera or microphone in the background without your knowledge.
                    The content captured may be real or fabricated using AI tools. Either way, the extortion
                    message follows shortly after.
                </p>

                <p>
                    <strong>Rule:</strong> Never click links sent by unknown contacts, especially those asking
                    you to verify identity, view a photo, or accept a call. Check any suspicious link at{' '}
                    <Link href="/website-safety-checker">rakshaai.co/website-safety-checker</Link> before opening.
                </p>

                <h3>Version 3: AI-Generated Fake Content</h3>

                <p>
                    In 2026, AI image generation tools can create realistic fake compromising images from
                    publicly available social media photos. Scammers do not need a video call or a camera link.
                    They need only your Instagram or Facebook profile.
                </p>

                <p>
                    This content is entirely fabricated. It is a lie. But under Indian law, threatening to
                    publish fabricated sexual content is criminal extortion with the same legal weight as
                    threatening to publish real content. The scammer is committing a serious crime regardless
                    of whether the content has any basis in reality.
                </p>

                <p>
                    Setting your social media photos to private or friends-only significantly reduces exposure
                    to this variant. This one action removes the raw material scammers need.
                </p>

                <h3>Version 4: The Hacked Account</h3>

                <p>
                    If your social media or cloud storage account is compromised through phishing or a
                    reused password, private photos and videos can be extracted directly. The extortionist
                    then demands payment in exchange for not publishing this content.
                </p>

                <p>
                    Two-factor authentication (2FA) on all social accounts closes this attack vector.
                    A scammer who cannot access your account cannot steal private content from it.
                </p>

                <hr />

                {/* WHO IS TARGETED */}
                <h2>Who Is Being Targeted?</h2>

                <p>
                    Sextortion in India targets people across all demographics, but certain groups are
                    more frequently targeted based on how scammers operate:
                </p>

                <ul>
                    <li>
                        <strong>Young adults (18-35):</strong> High social media usage creates more
                        entry points via fake profiles and public photos.
                    </li>
                    <li>
                        <strong>Professionals:</strong> The threat of exposure to employers or colleagues
                        amplifies the psychological pressure to pay.
                    </li>
                    <li>
                        <strong>Students:</strong> Targeted because they are less likely to report
                        out of fear of judgment from family.
                    </li>
                    <li>
                        <strong>Anyone with public social media:</strong> AI-generated fake content
                        variants target anyone whose photos are publicly visible online.
                    </li>
                </ul>

                <p>
                    The scam does not discriminate by gender. Men, women, and non-binary individuals are
                    all targeted. The scammers are not selective - they run these operations at industrial
                    scale, targeting thousands of people simultaneously.
                </p>

                <hr />

                {/* WHY PAYING MAKES IT WORSE */}
                <h2>Why Paying Makes It Worse, Not Better</h2>

                {/* DO NOT PAY card - floated right for desktop, full-width on mobile */}
                <div className="not-prose float-right ml-6 mb-4 w-52 sm:w-64 md:w-72 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                    <Image
                        src="/blog/sextortion-scam-india/sextortion-do-not-pay.webp"
                        alt="Do not pay sextortion scammer India - emergency action card what to do instead"
                        width={800}
                        height={999}
                        className="w-full object-contain"
                    />
                    <p className="text-[10px] text-center text-gray-500 dark:text-gray-400 italic px-3 py-2 bg-white dark:bg-gray-800">
                        Screenshot this. Share it. Someone you know may need it today.
                    </p>
                </div>

                <p>
                    Every documented case of sextortion follows the same pattern after the first payment:
                    the demands increase immediately. A scammer who received ₹5,000 will demand ₹20,000
                    next. A scammer who received ₹20,000 will demand ₹1 lakh. The first payment tells
                    them two things that make them certain you will pay again.
                </p>

                <p>
                    First, you are afraid enough to pay. Second, you have money. From that moment, you
                    are no longer a cold target - you are a confirmed revenue source. The blackmail does
                    not end because you paid. It escalates because you paid.
                </p>

                <p>
                    There is no recorded case anywhere in India or globally where a single sextortion
                    payment ended the extortion. Police investigators and cybercrime support organisations
                    consistently document the same trajectory: payment leads to more payment until the
                    victim runs out of money or reaches out for help.
                </p>

                <p>
                    The only action that reliably ends sextortion is removing the scammer's leverage.
                    That means refusing to pay, reporting to police (who investigate confidentially),
                    and not isolating yourself. Isolation - the fear and shame that keeps victims quiet -
                    is the scammer's most powerful weapon.
                </p>

                <div className="clear-both" />

                <hr />

                {/* WHAT TO DO RIGHT NOW - FEATURED SNIPPET TARGET */}
                <h2>What To Do If You Are Being Sextorted Right Now</h2>

                <div className="not-prose my-6 p-4 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800">
                    <p className="text-sm font-semibold text-red-800 dark:text-red-300 m-0">
                        You are a crime victim. This is not your shame. Indian cybercrime police handle these cases
                        with complete confidentiality - reporting does not publicize anything.
                    </p>
                </div>

                <ol>
                    <li>
                        <strong>Do not pay anything.</strong> This is the most important step. Every payment
                        confirms you are a viable target and makes the problem worse, not better.
                    </li>
                    <li>
                        <strong>Screenshot all threats.</strong> Capture the scammer's profile, messages,
                        the account name, and any payment demands. This is your evidence.
                    </li>
                    <li>
                        <strong>Block the scammer immediately.</strong> Block on WhatsApp, Instagram, and every
                        other platform they used to contact you. This removes one channel of harassment.
                    </li>
                    <li>
                        <strong>File at cybercrime.gov.in.</strong> Select "Cyber Blackmail / Sextortion" as the
                        category. Upload your screenshots. The complaint is treated with complete confidentiality.
                        No content is published or shared publicly.
                    </li>
                    <li>
                        <strong>Call 1930.</strong> India's National Cybercrime Helpline provides immediate support
                        and can flag the scammer's accounts and payment methods in real time.
                    </li>
                    <li>
                        <strong>Tell someone you trust.</strong> A family member, friend, or counsellor. Isolation
                        makes sextortion dramatically worse. The shame belongs entirely to the criminal, not to you.
                    </li>
                    <li>
                        <strong>Report the phone number on RakshaAI.</strong> Your report at{' '}
                        <Link href="/phone-number-checker">rakshaai.co/phone-number-checker</Link> flags the
                        number for other Indians before they become the next target.
                    </li>
                </ol>

                <hr />

                {/* HOW TO PROTECT YOURSELF */}
                <h2>How to Protect Yourself Going Forward</h2>

                {/* Protection checklist image - floated right */}
                <div className="not-prose float-right ml-6 mb-4 w-44 sm:w-52 md:w-64 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                    <Image
                        src="/blog/sextortion-scam-india/sextortion-protection-rules.webp"
                        alt="How to protect yourself from sextortion India - 6 safety tips checklist"
                        width={800}
                        height={999}
                        className="w-full object-contain"
                    />
                    <p className="text-[10px] text-center text-gray-500 dark:text-gray-400 italic px-3 py-2">
                        Share this checklist on WhatsApp - it takes 2 minutes to implement.
                    </p>
                </div>

                <p>
                    Sextortion prevention comes down to removing the raw material and access points that
                    scammers rely on. These six steps close the most common attack vectors:
                </p>

                <ol>
                    <li>
                        <strong>Reject video calls from unknown contacts.</strong> No legitimate person
                        needs a video call with a stranger. A contact you have not verified should not
                        have access to your camera.
                    </li>
                    <li>
                        <strong>Cover your laptop and phone camera when not in use.</strong> A simple
                        physical cover eliminates the risk from malicious links that activate your camera.
                    </li>
                    <li>
                        <strong>Set social media photos to private or friends only.</strong> Public photos
                        are the raw material for AI-generated fake content. Making them private removes
                        that material entirely.
                    </li>
                    <li>
                        <strong>Never share intimate content digitally.</strong> No platform, no app, no
                        private chat is truly secure. Content shared digitally can always be extracted.
                    </li>
                    <li>
                        <strong>Check unknown profiles before engaging.</strong> Search the phone number
                        or profile link at <Link href="/phone-number-checker">rakshaai.co</Link> before
                        responding to unknown contacts.
                    </li>
                    <li>
                        <strong>Enable two-factor authentication on all social accounts.</strong> 2FA
                        prevents the account takeover that enables the hacked-account variant of sextortion.
                    </li>
                </ol>

                <div className="clear-both" />

                <hr />

                {/* FAQ */}
                <h2>Frequently Asked Questions</h2>

                <h3>Should I pay a sextortion scammer in India?</h3>
                <p>
                    Never. Payment does not stop sextortion - it signals you will pay again and demands
                    escalate immediately. File at <strong>cybercrime.gov.in</strong> and call <strong>1930</strong>.
                    These cases are handled with complete confidentiality by police.
                </p>

                <h3>Can AI generate fake sextortion content from social media photos?</h3>
                <p>
                    Yes. In 2026, AI image tools can generate realistic fake compromising images from
                    publicly available social media photos. This content is entirely fabricated but
                    constitutes criminal blackmail under IT Act Section 67 and BNS Section 75 regardless.
                    The fact that it is fake does not weaken your legal case - it strengthens the
                    criminal's charges.
                </p>

                <h3>Is sextortion illegal in India?</h3>
                <p>
                    Yes. Sextortion is covered under IT Act Section 67 (obscene content), Section 66E
                    (privacy violation), BNS Section 75 (sexual harassment), and Section 351 (criminal
                    intimidation). Penalties range from 3 to 7 years imprisonment depending on the charges.
                </p>

                <h3>How do I report sextortion in India?</h3>
                <p>
                    File at <strong>cybercrime.gov.in</strong> (select Cyber Blackmail/Sextortion),
                    call <strong>1930</strong>, and file an FIR at your local cybercrime police station.
                    All are confidential. Also report the scammer's number at{' '}
                    <Link href="/phone-number-checker">rakshaai.co</Link> to warn other Indians.
                </p>

                <h3>What if the sextortion content is AI-generated and completely fake?</h3>
                <p>
                    The law applies equally. Threatening to publish fabricated sexual content is criminal
                    extortion regardless of whether it is real or AI-generated. Report it identically - file
                    at cybercrime.gov.in and call 1930. The AI-generated nature of the content actually
                    adds charges against the perpetrator.
                </p>

                <hr />

                {/* FINAL THOUGHTS */}
                <h2>Final Thoughts</h2>

                <p>
                    Sextortion works because it weaponises fear and shame. Scammers have engineered every
                    part of this crime to make victims feel that silence and payment are their only options.
                    They are not. Reporting does not publicize anything. Police handle these cases
                    confidentially. The content, real or fake, is not shared during investigations.
                </p>

                <p>
                    The single most powerful thing you can do if you are being sextorted is to refuse to
                    pay and reach out for help. Tell a trusted person. File a complaint. Call 1930.
                    The scammer loses their leverage the moment you stop being isolated.
                </p>

                <p>
                    Share this article with someone in your life who is active on social media. The scam
                    is growing, it is targeting people of every age and background, and the next person
                    it targets could be someone you care about.
                </p>

                {/* FINAL CTA */}
                <div className="not-prose my-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/60 p-8 text-center">
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">
                        Free Tool
                    </p>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                        Got a suspicious video call request or unknown link?
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 max-w-sm mx-auto">
                        Check any phone number or link on RakshaAI instantly before engaging.
                        No sign-up. No cost. Results in under 5 seconds.
                    </p>
                    <Link
                        href="/phone-number-checker"
                        className="inline-flex items-center gap-2 px-7 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold text-sm rounded-full hover:bg-gray-700 dark:hover:bg-gray-100 transition-colors"
                    >
                        Check a Number or Link now &rarr;
                    </Link>
                    <p className="text-gray-400 dark:text-gray-500 text-xs mt-4">
                        100% free &middot; No sign-up required &middot; Save 1930 in your contacts
                    </p>
                </div>

            </BlogLayout>
        </>
    )
}
