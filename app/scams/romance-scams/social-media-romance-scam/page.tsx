import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  Eye,
  FileWarning,
  Globe2,
  Lock,
  MessageSquareWarning,
  MonitorSmartphone,
  Percent,
  Phone,
  Search,
  Send,
  ShieldAlert,
  ShieldCheck,
  Siren,
  TriangleAlert,
  Video,
} from 'lucide-react'
import DefaultLayout from '@/components/DefaultLayout'
import RelatedTopics from '@/components/RelatedTopics'
import ReportScamButton from '@/components/ReportScamButton'
import {
  articleSchema,
  breadcrumbListSchema,
  definedTermSchema,
  faqPageSchema,
  jsonLd,
  organizationRef,
  webPageSchema,
} from '@/lib/seo/schema'

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://rakshaai.co').replace(/\/$/, '')
const PAGE_PATH = '/scams/romance-scams/social-media-romance-scam'
const CANONICAL = `${SITE_URL}${PAGE_PATH}`
const HERO_IMAGE = '/blog/blog37/social-media-scam-india-hero.webp'
const TITLE = 'Instagram & Facebook Romance Scam India 2026 - DMs, Sextortion & Recovery'
const DESCRIPTION =
  'Fake NRI, entrepreneur, or model DMs you on Instagram or Facebook. Weeks of WhatsApp romance. Then: money request or sextortion. Extortion & voyeurism law, 8 red flags & full India recovery guide.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    type: 'article',
    siteName: 'RakshaAI',
    locale: 'en_IN',
    images: [{ url: HERO_IMAGE, width: 1200, height: 630, alt: 'Instagram and Facebook romance scam and sextortion warning for India' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [HERO_IMAGE] },
  other: { 'geo.region': 'IN', language: 'en-IN' },
}

const quickFacts = [
  { value: '38%', label: 'Of romance-fraud complaints in India originate on Instagram or Facebook', source: 'NCRB 2025' },
  { value: '340%', label: 'Growth in sextortion complaints in India, 2023-2025', source: 'MHA I4C 2025' },
  { value: '₹45,000', label: 'Average loss on the financial-fraud track', source: 'NCRB 2025' },
  { value: 'DO NOT PAY', label: 'The single rule for the sextortion track - payment escalates demands', source: 'RakshaAI guide' },
]

const lawCards = [
  {
    icon: FileWarning,
    title: 'IT Act Sections 67 & 67A',
    body: 'Publishing or transmitting obscene material carries up to 3 years on a first conviction and 5 on a repeat one under Section 67. Sexually explicit material — the more typical sextortion content — falls under the stricter Section 67A: up to 5 years first conviction, 7 years on repeat.',
  },
  {
    icon: MessageSquareWarning,
    title: 'Extortion',
    body: 'Threatening to share intimate images unless money is paid is criminal extortion — historically IPC Section 384, now Section 308 of the Bharatiya Nyaya Sanhita (BNS), 2023.',
  },
  {
    icon: Eye,
    title: 'Voyeurism',
    body: 'Capturing or sharing intimate images without consent is voyeurism — historically IPC Section 354C, now BNS Section 77 — carrying up to 3 years on a first conviction and up to 7 on a repeat one.',
  },
  {
    icon: Lock,
    title: 'IT Act Section 66E',
    body: 'Capturing, transmitting or publishing images of a person’s private area without consent is a separate privacy violation under Section 66E, carrying up to 3 years.',
  },
  {
    icon: ShieldCheck,
    title: 'DPDP Act, 2023',
    body: 'Personal data and intimate content gathered during a fake relationship — photos, contact lists, financial details — is collected and used without genuine consent, violating India’s data protection law.',
  },
]

const personas = [
  ['NRI entrepreneur (Dubai / UK / Canada)', 'Professional headshots and luxury settings, thousands of followers, posts about business travel and international lifestyle. Opens with a flattering, generic-sounding compliment.', 'NRI success is deeply aspirational, and distance abroad pre-explains later financial requests.'],
  ['International model or influencer', 'High-production fashion photography and brand-collaboration posts, real or fabricated. Opens by praising your appearance or profile.', 'Flattering attention from an apparent influencer lowers guard, and intimate requests feel more natural within a relationship framing.'],
  ['Businessman based abroad', 'Business-suit photography, luxury travel content, talk of deals and investments. Often references a fabricated mutual connection.', 'Business-success framing supports higher-value financial requests and investment-opportunity pitches.'],
  ['Hacked or cloned real account', 'A dormant real account is hijacked, or cloned with a near-identical username, and used to approach the real owner’s own followers.', 'Years of authentic history defeat the usual reverse-image-search check, and victims who know the real owner trust the approach more.'],
]

const journeyStages = [
  ['Stage 1 - Unsolicited DM', 'A profile you have never interacted with sends a flattering, slightly generic opening message on Instagram or Facebook.', 'No prior interaction. Vague but personalised-sounding compliment that could be sent to hundreds of profiles.'],
  ['Stage 2 - Quick move to WhatsApp', 'Within one to three exchanges, they ask to continue on WhatsApp “for a proper conversation.”', 'This removes the platform’s safety and reporting tools. On WhatsApp they may ask to see your contacts, which sets up a sextortion contact-harvest later.'],
  ['Stage 3 - Trust build', 'Daily messages, voice notes, occasional calls, and shared ‘vulnerabilities’ over two to six weeks.', 'The pace is abnormally fast. Video calls are rare, brief or low quality, and meeting in person is never actually proposed.'],
  ['Stage 4 - The fork', 'Track 1: a financial crisis or opportunity is introduced. Track 2: sexual conversation escalates and a video call is arranged.', 'Track 1: any money request. Track 2: a push toward intimate content or video within three to four weeks of first contact.'],
  ['Stage 5 - Extraction', 'Track 1: UPI transfers, followed by further requests or disappearance. Track 2: a blackmail message arrives, often within minutes of the call, with screenshots and your contact list as leverage.', 'Any payment demand from an unmet online contact, or any blackmail message referencing captured content — both call for the same first move: stop and report.'],
]

const casePatterns = [
  {
    title: 'NRI-entrepreneur bridging-fund request',
    body: 'A short, intense WhatsApp relationship produces an urgent 24-hour business emergency requiring a UPI transfer. The contact disappears immediately after payment clears.',
  },
  {
    title: 'Video-call sextortion, payment made',
    body: 'A weeks-long relationship moves to an intimate WhatsApp video call. Screenshots are used to demand payment; an initial payment is followed by a second, larger demand — the pattern that makes paying counter-productive.',
  },
  {
    title: 'Video-call sextortion, no payment',
    body: 'The same content-capture pattern occurs, but the victim refuses to pay and reports immediately. Some content reaches a small number of contacts before takedown, but the operator is identified through the complaint trail.',
  },
  {
    title: 'Multi-transfer relationship fraud',
    body: 'A months-long relationship produces a sequence of separate transfers — a business partner emergency, a medical bill, a flight ticket — before the contact disappears. A reverse image search afterward traces the photos to an unrelated real account.',
  },
  {
    title: 'Hacked-account reconnection',
    body: 'A dormant real account, known personally to the victim, is used to reinitiate contact. The relationship escalates quickly toward both a financial ask and an intimate request before the real account owner confirms they never sent any of it.',
  },
  {
    title: 'Model persona, rapid escalation',
    body: 'A persona presenting as an overseas photographer or model moves to an intimate video call within weeks, followed immediately by a blackmail demand referencing the victim’s visible contact list.',
  },
]

const redFlags = [
  ['An unsolicited DM from someone you have never interacted with', 'A genuinely successful entrepreneur, model or businessman does not cold-message strangers on Instagram or Facebook looking for romance.'],
  ['They quickly suggest moving to WhatsApp', 'A push off-platform within the first few messages removes reporting and safety tools and moves the conversation somewhere content and contact-list harvesting can happen unmonitored.'],
  ['Profile photos are traceable to someone else', 'A reverse image search of any photo often reveals a different name, a stock library, or an unrelated real account.'],
  ['The account is new or suspiciously clean', 'Genuine long-standing profiles have years of varied, tagged, organic content. A recent account with a handful of polished photos and a large following is a strong signal.'],
  ['Video calls are avoided, brief, or consistently poor quality', 'A real person you are building a relationship with can appear on an unscheduled call. Someone using stolen photos cannot.'],
  ['An intimate video call is proposed within three to four weeks', 'At this stage of an online-only relationship, this is the standard content-capture trigger for the sextortion track.'],
  ['Any financial request arrives, regardless of the framing', 'A money request from an online stranger you have never met in person is fraud, whatever crisis or opportunity is used to justify it.'],
  ['A large following with unusually low engagement', 'Tens of thousands of followers with a handful of likes per post is a common sign of purchased followers on a fabricated account.'],
]

const verificationSteps = [
  {
    title: 'Reverse image search every photo',
    body: 'Right-click a profile or story photo and search the image with Google. If it belongs to someone else or a stock library under a different name, the profile is fake — check more than one photo, since scammers sometimes mix one real image with stolen ones.',
    icon: Search,
  },
  {
    title: 'Check the account’s age and engagement',
    body: 'On Instagram, tap the profile, then the three dots, then “About This Account” to see the creation date and primary location — a claimed long-established professional whose account is a few months old is a strong signal. Also check whether post engagement is proportional to the follower count.',
    icon: BadgeCheck,
  },
  {
    title: 'Demand an unscripted video call before WhatsApp',
    body: 'Before agreeing to move off-platform, ask for a live video call on Instagram or Facebook itself, and ask them to wave with a specific hand or show something behind them. Insisting on this before any WhatsApp migration filters out almost every fake profile.',
    icon: Video,
  },
  {
    title: 'Check the phone number before sharing anything personal',
    body: 'When a number is shared, check it before responding further. Operators typically run the same number against many targets simultaneously, and active numbers are usually reported within days.',
    href: '/phone-number-checker',
    label: 'Check number',
    icon: Phone,
  },
  {
    title: 'Never appear intimately on a call with an unverified contact',
    body: 'This is the single most important protection against the sextortion track. Intimate content is captured in one session and used immediately — there is no second chance once it exists. If a relatively new contact pushes toward intimate video, end the call.',
    icon: ShieldAlert,
  },
]

const financialRecoverySteps = [
  'Call 1930 within 30 minutes of any UPI transfer, with the recipient UPI ID, amount and time ready.',
  'Screenshot every profile detail, WhatsApp message and payment confirmation before blocking the contact.',
  'File at cybercrime.gov.in under Online Financial Fraud / Romance Scam, citing fraud and identity-theft provisions.',
  'Report the profile directly on Instagram or Facebook using their fraud/scam reporting option.',
  'Report the fake profile to CERT-In at incident@cert-in.org.in for a takedown request.',
  'File an FIR at your cybercrime police station, and report the scam to RakshaAI to warn other users.',
]

const sextortionSteps = [
  {
    title: 'Do not pay, and do not delete the conversation',
    body: 'Save the blackmail message with the account name visible. Do not respond emotionally, and do not negotiate — every documented pattern shows payment is followed by a larger second demand, not silence.',
  },
  {
    title: 'File at cybercrime.gov.in immediately',
    body: 'File under Cybercrime Against Women / Online Blackmail, citing extortion and voyeurism provisions alongside IT Act Sections 67 or 67A. Speed matters — perpetrators often act within hours of a refusal to pay.',
  },
  {
    title: 'Report the number and profile, and start image removal',
    body: 'Report the WhatsApp number to WhatsApp, report the Instagram or Facebook profile, and report to CERT-In. If you are 18 or older, submit the image to StopNCII.org, a UK-based non-profit tool (run by the Revenge Porn Helpline / SWGfL) that creates a digital hash of the image — without storing the image itself — and shares it with participating platforms, including Instagram and Facebook, so matching uploads are blocked. If you were under 18 in the images, use NCMEC’s dedicated tool, Take It Down, at takeitdown.ncmec.org instead.',
  },
  {
    title: 'File with the National Commission for Women if the victim is a woman',
    body: 'File at the NCW’s official complaint portal, ncwapps.nic.in, which handles cybercrime against women including sextortion. Also call the National Consumer Helpline on 1915.',
  },
  {
    title: 'File an FIR citing every applicable section',
    body: 'File at your cybercrime police station citing IT Act Sections 67 (or 67A), extortion and voyeurism, and IT Act Section 66E. Provide the profile links so police can raise emergency content-removal requests with the platform directly.',
  },
]

const responseTimeline = [
  ['Immediately', 'Screenshot everything. Do not delete conversations. Do not pay if this is a sextortion demand.'],
  ['Within 30 min', 'Call 1930 if a UPI payment was made. Report the profile on Instagram or Facebook.'],
  ['Within 24 hrs', 'File at cybercrime.gov.in. Report to CERT-In. Submit to StopNCII.org / Take It Down for sextortion. File with the NCW if the victim is a woman.'],
  ['Within 72 hrs', 'National Consumer Helpline 1915. FIR at your cybercrime police station.'],
  ['Within 7 days', 'Follow up with cybercrime police. RakshaAI report.'],
]

const statistics = [
  ['Romance-fraud complaints originating on Instagram or Facebook', '38%', 'NCRB 2025'],
  ['Growth in sextortion complaints, 2023-2025', '+340%', 'MHA I4C 2025'],
  ['Average loss - financial fraud track', '₹45,000', 'NCRB 2025'],
  ['Typical extortion demand range - sextortion track', '₹20,000 - 1,20,000', 'cybercrime.gov.in 2025'],
  ['Most common initial-contact platform', 'Instagram, ahead of Facebook', 'MHA I4C 2025'],
]

const platformFeatures = [
  ['Instagram "About This Account"', 'Shows the account’s creation date and primary country location - exposes new accounts claiming to be established professionals.', 'Profile → three dots → About This Account'],
  ['Instagram Hidden Words', 'Filters DMs from non-followers containing specific words, reducing unsolicited romance-style openers.', 'Settings → Privacy → Hidden Words → DMs'],
  ['Instagram Message Requests', 'DMs from accounts you don’t follow are held separately without a notification, so you can review before accepting.', 'Inbox → Message Requests'],
  ['Facebook friend-request privacy', 'Limiting who can send friend or message requests (for example, to friends of friends) significantly reduces cold-approach contact.', 'Settings → Privacy → Who can send you friend requests'],
]

const comparisonRows = [
  {
    title: 'Catfishing / Fake Dating Profile',
    body: 'A dating-APP approach through mutual matching on Tinder, TrulyMadly or Woo. This page covers an unsolicited social-media DM instead, with a sextortion track that catfishing rarely involves.',
    href: '/scams/romance-scams/catfishing-india',
  },
  {
    title: 'Army Officer Romance Scam',
    body: 'A specific military persona with DSOP-fund and leave-travel requests, often on the same platforms. This page covers NRI, entrepreneur and model personas instead.',
    href: '/scams/romance-scams/army-officer-scam',
  },
  {
    title: 'Instagram Social Commerce Scam (buyer-side)',
    body: 'A fake product seller on Instagram targeting shoppers. This page covers a fake romantic relationship on the same platform - a completely different victim profile and harm.',
    href: '/scams/e-commerce-fraud/social-commerce-scam',
  },
]

const relatedGuides = [
  {
    title: 'Sextortion India',
    body: 'The definitive deep-dive on the sextortion track specifically - deepfakes, POCSO, image removal and the full do-not-pay evidence.',
    href: '/scams/romance-scams/sextortion-india',
  },
  {
    title: 'Catfishing / Fake Dating Profile Scam',
    body: 'The dating-app version of this fake-identity mechanism, with a different entry point and generally no sextortion track.',
    href: '/scams/romance-scams/catfishing-india',
  },
  {
    title: 'Army Officer Romance Scam',
    body: 'The military-persona variant, often delivered on the same social platforms, with its own India impersonation law.',
    href: '/scams/romance-scams/army-officer-scam',
  },
  {
    title: 'Instagram Social Commerce Scam',
    body: 'A different Instagram-based fraud entirely — a fake product seller targeting buyers, not a fake relationship.',
    href: '/scams/e-commerce-fraud/social-commerce-scam',
  },
  {
    title: 'Romance Scams India Hub',
    body: 'Compare every romance-fraud mechanism active in India today.',
    href: '/scams/romance-scams',
  },
]

const tools = [
  {
    icon: Phone,
    title: 'Phone Number Checker',
    body: 'Check any number before moving a conversation from Instagram or Facebook to WhatsApp.',
    href: '/phone-number-checker',
    label: 'Check number',
  },
  {
    icon: Globe2,
    title: 'Website Safety Checker',
    body: 'Check any website they ask you to visit or invest through.',
    href: '/website-safety-checker',
    label: 'Check website',
  },
  {
    icon: ShieldAlert,
    title: 'Report a Scam',
    body: 'Report the fake profile to warn other Indian users immediately.',
    report: true,
    label: 'Report profile',
  },
]

const FAQ_ITEMS = [
  {
    question: 'How does the Instagram or Facebook romance scam work in India?',
    answer:
      'An unsolicited DM arrives from a professional-looking profile — an NRI entrepreneur, model, or businessman. Within a few messages they ask to continue on WhatsApp. Over the following weeks, daily conversation builds an emotional bond, and the relationship then forks in one of two directions: a money request (the financial-fraud track), or an escalation toward intimate video content that is then used for blackmail (the sextortion track). Instagram and Facebook together are the largest single delivery channel for romance fraud in India, ahead of dating apps.',
  },
  {
    question: 'What is sextortion and how does it happen over WhatsApp in India?',
    answer:
      'Sextortion is when a scammer captures intimate images or video of you, typically during a WhatsApp video call, and then threatens to share the content with your contacts unless you pay. The relationship is usually built first on Instagram or Facebook, moved to WhatsApp, and an intimate video call is arranged where the content is captured. A blackmail message follows quickly, often showing your actual contact list as proof they can distribute it. The critical rule: do not pay. Report immediately to cybercrime.gov.in citing extortion and IT Act Section 67 or 67A.',
  },
  {
    question: 'What should I do if I am being sextorted in India?',
    answer:
      'Do not pay — payment does not end sextortion, it proves you will pay and typically triggers a larger second demand. Screenshot the blackmail message with the account name visible and do not delete the conversation. File at cybercrime.gov.in immediately, citing extortion, voyeurism and IT Act Section 67 or 67A. Report the WhatsApp number and the Instagram or Facebook profile to the platforms. If you are 18 or older, submit the image to StopNCII.org for hash-based blocking; if you were under 18 in the images, use NCMEC’s Take It Down tool instead. File with the National Commission for Women if the victim is a woman, and file an FIR at your cybercrime police station.',
  },
  {
    question: 'How do I identify a fake Instagram or Facebook romance profile in India?',
    answer:
      'Reverse image search every photo. Check "About This Account" on Instagram for the creation date and location. Check whether engagement is proportional to the follower count. Demand an unscripted video call on the platform itself before agreeing to move to WhatsApp. Check the phone number once it is shared. And be cautious even if you recognise the account — a real person’s dormant account can be hacked and used to approach their own followers, so verify directly with someone you know rather than trusting the account alone.',
  },
  {
    question: 'What laws in India apply to sextortion and intimate-image blackmail?',
    answer:
      'IT Act Section 67 covers obscene material (up to 3 years on a first conviction, 5 on a repeat one); Section 67A covers sexually explicit material specifically, which is the more typical sextortion content, carrying up to 5 years first conviction and 7 on repeat. Extortion — threatening to share images unless paid — is covered by BNS Section 308 (formerly IPC Section 384). Voyeurism — capturing or sharing intimate images without consent — is BNS Section 77 (formerly IPC Section 354C). IT Act Section 66E covers the separate privacy violation, and the DPDP Act, 2023 applies to personal data gathered without genuine consent. Charges under several of these Acts together significantly strengthens prosecution.',
  },
  {
    question: 'Can I recover money lost in an Instagram or Facebook romance scam?',
    answer:
      'Call 1930 within 30 minutes of a UPI payment for the best chance of an account freeze. File at cybercrime.gov.in under Online Financial Fraud / Romance Scam. Report the profile on its platform and to CERT-In. For card payments, request an RBI chargeback within 120 days. File an FIR at your cybercrime police station, and report the scam to RakshaAI. Do not let shame delay reporting — these operators typically run many victims simultaneously, and a complaint contributes directly to identifying them.',
  },
  {
    question: 'How do I report an Instagram or Facebook romance scam or sextortion attempt?',
    answer:
      'Use each platform’s in-app "report as scam" or "report as fraud" option on the profile. Call 1930 if a UPI payment was made. File at cybercrime.gov.in, under Romance Scam for financial fraud or Cybercrime Against Women / Online Blackmail for sextortion. Report to CERT-In at incident@cert-in.org.in. For sextortion, also submit to StopNCII.org (or NCMEC’s Take It Down if you were under 18 in the images) and file with the National Commission for Women if the victim is a woman. Call the National Consumer Helpline on 1915, file an FIR, and report the scam to RakshaAI.',
  },
  {
    question: 'How can I get intimate images removed once they have been shared online in India?',
    answer:
      'If you are 18 or older, use StopNCII.org, run by the UK’s Revenge Porn Helpline (SWGfL) — it creates a digital hash of your image without storing the image itself and shares that hash with participating platforms including Instagram and Facebook, so matching uploads are automatically blocked. If you were under 18 in the images, NCMEC’s dedicated tool, Take It Down, serves the same purpose for that situation. File with cybercrime police, who can raise emergency content-removal requests directly with the platform, and report the profile to CERT-In. Take all of these actions at the same time rather than sequentially — time matters.',
  },
  {
    question: 'What is the National Commission for Women’s role in sextortion cases in India?',
    answer:
      'The National Commission for Women (NCW) operates an official online complaint portal at ncwapps.nic.in that handles cybercrime against women, including sextortion. Filing with the NCW alongside cybercrime.gov.in gives the case a second, women-focused institutional channel and strengthens the overall complaint record. It does not replace filing at cybercrime.gov.in or an FIR — it works alongside them.',
  },
  {
    question: 'How is the social media romance scam different from dating-app catfishing?',
    answer:
      'The entry point differs: social media romance scams begin with an unsolicited DM to someone who never asked to be contacted, while dating-app catfishing begins with a mutual match on a platform built for that purpose. The platforms differ — Instagram and Facebook here, versus Tinder, Bumble, TrulyMadly or Woo for catfishing. The personas differ — NRI entrepreneur, model or influencer here, versus NRI engineer, army officer or doctor abroad on dating apps. And a sextortion track exists prominently on social media in a way it rarely does with dating-app catfishing. Both sit under the wider romance-scams category.',
  },
]

const schemas = [
  webPageSchema({ name: TITLE, description: DESCRIPTION, url: PAGE_PATH }),
  articleSchema({
    headline: 'Instagram & Facebook Romance Scam India 2026 - Fake NRI DMs, WhatsApp Relationships, and Sextortion',
    description: DESCRIPTION,
    url: PAGE_PATH,
    image: HERO_IMAGE,
    datePublished: '2026-08-16',
    dateModified: '2026-08-16',
    author: organizationRef(),
    section: 'Romance Scams',
    keywords: [
      'instagram romance scam india',
      'facebook romance scam india',
      'social media romance scam india',
      'sextortion india',
      'fake instagram profile india',
      'sextortion whatsapp india',
      'how to identify fake instagram profile india',
      'nri entrepreneur instagram scam india',
      'online blackmail india',
      'intimate image blackmail india',
    ],
  }),
  faqPageSchema(FAQ_ITEMS),
  breadcrumbListSchema([
    { name: 'Home', url: '/' },
    { name: 'Scam Categories', url: '/scams' },
    { name: 'Romance Scams India', url: '/scams/romance-scams' },
    { name: 'Instagram & Facebook Romance Scam', url: PAGE_PATH },
  ]),
  definedTermSchema({
    name: 'Sextortion',
    description: 'A form of extortion in which a scammer builds a fake online relationship, captures intimate images or video of the victim, and then threatens to share that content with the victim’s contacts unless a payment is made.',
    url: PAGE_PATH,
    inDefinedTermSet: `${SITE_URL}/scams/romance-scams#scam-types`,
  }),
  {
    '@context': 'https://schema.org' as const,
    '@type': 'HowTo',
    '@id': `${CANONICAL}#how-to-verify`,
    name: 'How to identify a fake Instagram profile in India',
    description: 'Five checks to verify a social media romance contact before sharing personal details or intimate content.',
    totalTime: 'PT5M',
    step: verificationSteps.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.title, text: step.body })),
  },
]

const sectionTitleClass = 'text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl'
const sectionIntroClass = 'mt-4 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300'

export default function SocialMediaRomanceScamPage() {
  return (
    <DefaultLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schemas) }} />

      <article className="bg-white dark:bg-slate-950">
        <header className="relative overflow-hidden border-b border-fuchsia-100 bg-gradient-to-br from-violet-50 via-white to-fuchsia-50 px-4 py-14 dark:border-fuchsia-950 dark:from-slate-950 dark:via-slate-900 dark:to-fuchsia-950/30 sm:py-20">
          <div aria-hidden="true" className="absolute -right-24 -top-28 h-96 w-96 rounded-full bg-fuchsia-300/20 blur-3xl" />
          <div aria-hidden="true" className="absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-violet-300/20 blur-3xl" />
          <div className="relative mx-auto max-w-6xl">
            <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <Link className="hover:text-violet-700 dark:hover:text-violet-300" href="/">Home</Link><span aria-hidden="true">›</span>
              <Link className="hover:text-violet-700 dark:hover:text-violet-300" href="/scams">Scam Categories</Link><span aria-hidden="true">›</span>
              <Link className="hover:text-violet-700 dark:hover:text-violet-300" href="/scams/romance-scams">Romance Scams India</Link><span aria-hidden="true">›</span>
              <span className="text-slate-800 dark:text-slate-200">Instagram &amp; Facebook Romance Scam</span>
            </nav>

            <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-fuchsia-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-violet-800 shadow-sm dark:border-fuchsia-800 dark:bg-slate-900/70 dark:text-fuchsia-300"><Send className="h-4 w-4" /> Unsolicited DM &amp; Sextortion Guide</div>
                <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
                  Instagram &amp; Facebook Romance Scam India 2026
                  <span className="mt-2 block bg-gradient-to-r from-violet-700 to-fuchsia-700 bg-clip-text text-transparent dark:from-violet-300 dark:to-fuchsia-300">Fake NRI DMs, WhatsApp Relationships &amp; Sextortion</span>
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                  It starts with an unsolicited DM: an NRI entrepreneur, a model, a businessman abroad. Within days the conversation moves to WhatsApp, and over the following weeks it forks in one of two directions — a money request, or a push toward intimate video that is then used for blackmail. Same opening move. Two very different harms.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link href="/phone-number-checker" className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-700 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-violet-900/15 transition hover:-translate-y-0.5 hover:bg-violet-800"><Phone className="h-5 w-5" /> Check their number <ArrowRight className="h-4 w-4" /></Link>
                  <Link href="/website-safety-checker" className="inline-flex items-center justify-center gap-2 rounded-xl border border-violet-200 bg-white px-6 py-3.5 text-sm font-bold text-violet-800 shadow-sm transition hover:-translate-y-0.5 hover:bg-violet-50 dark:border-violet-800 dark:bg-slate-900 dark:text-violet-300 dark:hover:bg-slate-800"><Globe2 className="h-5 w-5" /> Check a website</Link>
                </div>
                <p className="mt-4 text-xs font-medium text-slate-500 dark:text-slate-400">Free · No login · 10M+ fraud numbers · If they ask to move to WhatsApp, check first</p>
              </div>
              <figure className="overflow-hidden rounded-3xl border border-fuchsia-200 bg-white shadow-2xl shadow-fuchsia-950/10 dark:border-fuchsia-900 dark:bg-slate-900"><Image src={HERO_IMAGE} alt="Instagram and Facebook romance scam and sextortion warning for India" width={1200} height={630} className="aspect-[16/9] w-full object-cover" priority /><figcaption className="px-5 py-4 text-xs leading-5 text-slate-500 dark:text-slate-400">The DM you never asked for is the entire scam, disguised as a compliment.</figcaption></figure>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{quickFacts.map((fact) => <div key={fact.label} className="rounded-2xl border border-white/80 bg-white/90 p-5 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/85"><p className={fact.value === 'DO NOT PAY' ? 'text-xl font-black text-red-700 dark:text-red-400' : 'text-2xl font-black text-violet-700 dark:text-violet-300'}>{fact.value}</p><p className="mt-2 text-sm leading-5 text-slate-700 dark:text-slate-300">{fact.label}</p><p className="mt-2 text-[11px] font-bold uppercase tracking-wide text-slate-400">{fact.source}</p></div>)}</div>
          </div>
        </header>

        <div className="border-b border-red-200 bg-red-50 px-4 py-5 dark:border-red-900 dark:bg-red-950/30"><div className="mx-auto flex max-w-6xl items-start gap-3 text-sm leading-6 text-red-950 dark:text-red-100"><TriangleAlert className="mt-0.5 h-5 w-5 shrink-0 text-red-700 dark:text-red-400" /><p><strong>Two rules, one page:</strong> never send money to someone you met via an unsolicited DM and have not met in person. And if you are being sextorted — never pay. Payment does not end blackmail; it proves you will pay.</p></div></div>

        <div className="mx-auto max-w-6xl space-y-24 px-4 py-16 sm:px-6 lg:px-8">
          <section aria-labelledby="law-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-violet-700 dark:text-violet-400">The legal framework</p>
            <h2 id="law-heading" className={`${sectionTitleClass} mt-3`}>Five India Laws That Apply</h2>
            <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">{lawCards.map(({ icon: Icon, title, body }) => <article key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-violet-800 dark:bg-violet-950 dark:text-violet-300"><Icon className="h-5 w-5" /></div><h3 className="mt-4 text-sm font-bold text-slate-950 dark:text-white">{title}</h3><p className="mt-2 text-xs leading-5 text-slate-600 dark:text-slate-300">{body}</p></article>)}</div>
            <p className="mt-5 text-xs leading-5 text-slate-500 dark:text-slate-400">India&rsquo;s criminal code was replaced by the Bharatiya Nyaya Sanhita (BNS) on 1 July 2024. The older IPC section numbers are included above because they remain the most commonly searched terms for these offences.</p>
          </section>

          <section aria-labelledby="tracks-heading" className="rounded-3xl bg-slate-950 px-6 py-10 text-white sm:px-10 sm:py-12">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-fuchsia-300">One approach, two outcomes</p>
            <h2 id="tracks-heading" className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">The Two Harm Tracks</h2>
            <div className="mt-9 grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-800 bg-white/5 p-6"><p className="text-xs font-black uppercase tracking-[0.14em] text-violet-300">Track 1 - Financial Fraud</p><p className="mt-3 text-sm leading-6 text-slate-300">An unsolicited DM leads to weeks of WhatsApp conversation, then a financial crisis or opportunity arrives — a bridging fund, a medical emergency, an investment closing today, a package stuck at customs. Money moves by UPI, wire transfer or crypto. After the first transfer, further requests follow, or the contact disappears.</p></div>
              <div className="rounded-2xl border border-red-800/60 bg-red-500/10 p-6"><p className="text-xs font-black uppercase tracking-[0.14em] text-red-300">Track 2 - Sextortion</p><p className="mt-3 text-sm leading-6 text-slate-300">The same relationship instead turns sexual. A WhatsApp video call is arranged, and intimate content is captured during it — either recorded without the victim knowing, or via a screen recording of the victim&rsquo;s own reaction. A blackmail demand, often showing the victim&rsquo;s contact list as leverage, follows within minutes.</p></div>
            </div>
          </section>

          <section aria-labelledby="persona-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-violet-700 dark:text-violet-400">Four archetypes</p>
            <h2 id="persona-heading" className={`${sectionTitleClass} mt-3`}>Social Media Personas Used in India</h2>
            <div className="mt-9 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800"><div className="overflow-x-auto"><table className="w-full min-w-[760px] text-left text-sm"><thead className="bg-slate-950 text-white dark:bg-black"><tr><th className="px-5 py-4">Persona</th><th className="px-5 py-4">Profile design</th><th className="px-5 py-4">Why it works in India</th></tr></thead><tbody className="divide-y divide-slate-200 dark:divide-slate-800">{personas.map(([persona, design, why], index) => <tr key={persona} className={index % 2 === 0 ? 'bg-white dark:bg-slate-950' : 'bg-slate-50 dark:bg-slate-900'}><th scope="row" className="px-5 py-4 align-top font-semibold text-slate-950 dark:text-white">{persona}</th><td className="px-5 py-4 align-top text-slate-600 dark:text-slate-300">{design}</td><td className="px-5 py-4 align-top text-violet-700 dark:text-violet-300">{why}</td></tr>)}</tbody></table></div></div>
          </section>

          <section aria-labelledby="journey-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-violet-700 dark:text-violet-400">Identify it before Stage 4</p>
            <h2 id="journey-heading" className={`${sectionTitleClass} mt-3`}>The 5-Stage Platform Journey</h2>
            <div className="mt-9 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800"><div className="overflow-x-auto"><table className="w-full min-w-[720px] text-left text-sm"><thead className="bg-slate-950 text-white dark:bg-black"><tr><th className="px-5 py-4">Stage</th><th className="px-5 py-4">What happens</th><th className="px-5 py-4">Detection signal</th></tr></thead><tbody className="divide-y divide-slate-200 dark:divide-slate-800">{journeyStages.map(([stage, happens, watch], index) => <tr key={stage} className={index % 2 === 0 ? 'bg-white dark:bg-slate-950' : 'bg-slate-50 dark:bg-slate-900'}><th scope="row" className="px-5 py-4 align-top font-semibold text-slate-950 dark:text-white">{stage}</th><td className="px-5 py-4 align-top text-slate-600 dark:text-slate-300">{happens}</td><td className="px-5 py-4 align-top font-medium text-violet-700 dark:text-violet-300">{watch}</td></tr>)}</tbody></table></div></div>
          </section>

          <section aria-labelledby="patterns-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-violet-700 dark:text-violet-400">Reported case patterns</p>
            <h2 id="patterns-heading" className={`${sectionTitleClass} mt-3`}>How the Scam Plays Out - India Case Patterns 2024-2025</h2>
            <p className={sectionIntroClass}>These are composite patterns drawn from commonly reported cases in India across both harm tracks, not individual verified incidents.</p>
            <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{casePatterns.map((item, index) => <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"><div className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-100 text-sm font-black text-violet-800 dark:bg-violet-950 dark:text-violet-300">{index + 1}</span><h3 className="text-sm font-bold text-slate-950 dark:text-white">{item.title}</h3></div><p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.body}</p></article>)}</div>
          </section>

          <section aria-labelledby="red-flags-heading" className="rounded-3xl bg-gradient-to-br from-red-950 to-violet-950 px-6 py-10 text-white sm:px-10 sm:py-12">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-red-300">Before either track begins</p>
            <h2 id="red-flags-heading" className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">8 Red Flags of a Fake Instagram or Facebook Profile</h2>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-red-100/85">These signals apply to both the financial-fraud and sextortion tracks — catching them early prevents both.</p>
            <ol className="mt-9 grid gap-4 md:grid-cols-2">{redFlags.map(([title, body], index) => <li key={title} className="flex gap-4 rounded-2xl border border-red-800/70 bg-black/15 p-5"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-sm font-black text-red-900">{index + 1}</span><div><h3 className="font-bold">{title}</h3><p className="mt-1 text-sm leading-6 text-red-100/85">{body}</p></div></li>)}</ol>
          </section>

          <section aria-labelledby="verify-heading">
            <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-start">
              <div><p className="text-xs font-black uppercase tracking-[0.18em] text-violet-700 dark:text-violet-400">Five checks</p><h2 id="verify-heading" className={`${sectionTitleClass} mt-3`}>How to Identify a Fake Instagram Profile</h2><ol className="mt-9 space-y-4">{verificationSteps.map(({ title, body, href, label, icon: Icon }, index) => <li key={title} className="grid gap-4 rounded-2xl border border-slate-200 p-5 dark:border-slate-800 sm:grid-cols-[48px_1fr_auto] sm:items-center"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-violet-800 dark:bg-violet-950 dark:text-violet-300"><Icon className="h-5 w-5" /></div><div><p className="text-xs font-black uppercase tracking-wide text-violet-700 dark:text-violet-400">Step {index + 1}</p><h3 className="mt-1 font-bold text-slate-950 dark:text-white">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{body}</p></div>{href && label ? <Link href={href} className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-violet-200 px-4 py-2.5 text-sm font-bold text-violet-800 hover:bg-violet-50 dark:border-violet-800 dark:text-violet-300 dark:hover:bg-violet-950">{label} <ArrowRight className="h-3.5 w-3.5" /></Link> : null}</li>)}</ol></div>
              <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg dark:border-slate-800 dark:bg-slate-900"><Image src="/blog/blog37/social-media-page-verification-checklist.webp" alt="Checklist for verifying an Instagram or Facebook profile before trusting or paying anyone" width={720} height={1080} className="h-auto w-full object-cover" /><figcaption className="px-5 py-4 text-xs leading-5 text-slate-500 dark:text-slate-400">A live, unscripted call on the platform itself filters out almost every fake profile.</figcaption></figure>
            </div>
          </section>

          <section aria-labelledby="donotpay-heading" className="rounded-3xl border-2 border-red-600 bg-red-950 px-6 py-10 text-white sm:px-10 sm:py-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-xs font-black uppercase tracking-[0.14em]"><Siren className="h-4 w-4" /> If you are being sextorted</div>
                <h2 id="donotpay-heading" className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">Do Not Pay</h2>
                <p className="mt-4 text-sm leading-7 text-red-100">Payment does not end sextortion — it proves you will pay and, in documented pattern after pattern, is followed by a larger second demand. Victims who refuse to pay and report immediately consistently see the fastest resolution. This is the single most counter-intuitive but most important instruction on this page.</p>
              </div>
              <figure className="overflow-hidden rounded-2xl border border-red-800"><Image src="/blog/sextortion-scam-india/sextortion-do-not-pay.webp" alt="Do not pay a sextortion demand - report immediately instead" width={800} height={999} className="h-auto w-full object-cover" /></figure>
            </div>
          </section>

          <section aria-labelledby="recovery-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-red-700 dark:text-red-400">Two harm tracks, two recovery guides</p>
            <h2 id="recovery-heading" className={`${sectionTitleClass} mt-3`}>Recovery Guide</h2>
            <p className={sectionIntroClass}>Which guide you need depends on which track you are on. If you are unsure, follow both.</p>

            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 p-6 dark:border-slate-800">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-violet-700 dark:text-violet-400">Track 1 - Financial Fraud</p>
                <ol className="mt-4 space-y-3">{financialRecoverySteps.map((step, index) => <li key={step} className="flex gap-3 text-sm leading-6 text-slate-700 dark:text-slate-300"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-violet-100 text-xs font-black text-violet-800 dark:bg-violet-950 dark:text-violet-300">{index + 1}</span>{step}</li>)}</ol>
              </div>
              <div className="rounded-2xl border border-red-200 bg-red-50 p-6 dark:border-red-900 dark:bg-red-950/30">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-red-700 dark:text-red-400">Track 2 - Sextortion Protocol</p>
                <ol className="mt-4 space-y-4">{sextortionSteps.map((step, index) => <li key={step.title} className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-red-100 text-xs font-black text-red-800 dark:bg-red-900 dark:text-red-300">{index + 1}</span><div><p className="text-sm font-bold text-slate-950 dark:text-white">{step.title}</p><p className="mt-1 text-sm leading-6 text-slate-700 dark:text-slate-300">{step.body}</p></div></li>)}</ol>
              </div>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
              <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg dark:border-slate-800 dark:bg-slate-900 lg:order-2"><Image src="/blog/blog37/report-social-media-scam-india.webp" alt="How to report a social media romance scam or sextortion attempt in India" width={1000} height={563} className="h-auto w-full object-cover" /></figure>
              <aside className="h-fit rounded-2xl bg-slate-950 p-6 text-white dark:bg-black lg:order-1"><div className="flex items-center gap-2 text-fuchsia-300"><Clock3 className="h-5 w-5" /><p className="text-xs font-black uppercase tracking-[0.14em]">Response timeline</p></div><div className="mt-6 space-y-5">{responseTimeline.map(([time, action]) => <div key={time} className="border-l-2 border-fuchsia-400 pl-4"><p className="font-bold text-fuchsia-300">{time}</p><p className="mt-1 text-sm leading-5 text-slate-300">{action}</p></div>)}</div></aside>
            </div>

            <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-2xl border border-red-200 bg-red-50 p-6 dark:border-red-900 dark:bg-red-950/30 sm:flex-row sm:items-center"><div><h3 className="text-lg font-black text-red-950 dark:text-red-100">Report the profile before it reaches someone else</h3><p className="mt-1 text-sm text-red-800 dark:text-red-200">Keep screenshots, the profile, the phone number and any payment or blackmail details ready.</p></div><ReportScamButton className="inline-flex items-center gap-2 rounded-xl bg-red-700 px-5 py-3 text-sm font-bold text-white hover:bg-red-800"><ShieldAlert className="h-4 w-4" /> Report profile <ArrowRight className="h-4 w-4" /></ReportScamButton></div>
          </section>

          <section aria-labelledby="platform-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-violet-700 dark:text-violet-400">Use what the platforms already give you</p>
            <h2 id="platform-heading" className={`${sectionTitleClass} mt-3`}>Platform Safety Features Worth Knowing</h2>
            <div className="mt-9 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800"><div className="overflow-x-auto"><table className="w-full min-w-[720px] text-left text-sm"><thead className="bg-slate-950 text-white dark:bg-black"><tr><th className="px-5 py-4">Feature</th><th className="px-5 py-4">What it does</th><th className="px-5 py-4">How to access it</th></tr></thead><tbody className="divide-y divide-slate-200 dark:divide-slate-800">{platformFeatures.map(([feature, does, access], index) => <tr key={feature} className={index % 2 === 0 ? 'bg-white dark:bg-slate-950' : 'bg-slate-50 dark:bg-slate-900'}><th scope="row" className="px-5 py-4 align-top font-semibold text-slate-950 dark:text-white">{feature}</th><td className="px-5 py-4 align-top text-slate-600 dark:text-slate-300">{does}</td><td className="px-5 py-4 align-top font-mono text-xs text-violet-700 dark:text-violet-300">{access}</td></tr>)}</tbody></table></div></div>
          </section>

          <section aria-labelledby="stats-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-violet-700 dark:text-violet-400">Scale of the problem</p>
            <h2 id="stats-heading" className={`${sectionTitleClass} mt-3`}>Social Media Romance Scam Statistics India 2025-2026</h2>
            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800"><div className="overflow-x-auto"><table className="w-full min-w-[680px] text-left text-sm"><thead className="bg-slate-950 text-white dark:bg-black"><tr><th className="px-5 py-4">Metric</th><th className="px-5 py-4">Data</th><th className="px-5 py-4">Source</th></tr></thead><tbody className="divide-y divide-slate-200 dark:divide-slate-800">{statistics.map(([metric, data, source], index) => <tr key={metric} className={index % 2 === 0 ? 'bg-white dark:bg-slate-950' : 'bg-slate-50 dark:bg-slate-900'}><th scope="row" className="px-5 py-4 font-semibold text-slate-950 dark:text-white">{metric}</th><td className="px-5 py-4 font-bold text-violet-700 dark:text-violet-300">{data}</td><td className="px-5 py-4 text-slate-500 dark:text-slate-400">{source}</td></tr>)}</tbody></table></div></div>
            <p className="mt-4 flex items-start gap-2 text-xs leading-5 text-slate-500 dark:text-slate-400"><Percent className="mt-0.5 h-4 w-4 shrink-0" />The 340% growth in sextortion complaints reflects both rising social-media use and a very low technical barrier to running these operations - a single operator can approach hundreds of targets from one device.</p>
          </section>

          <section aria-labelledby="compare-heading"><p className="text-xs font-black uppercase tracking-[0.18em] text-violet-700 dark:text-violet-400">Don&rsquo;t confuse the mechanisms</p><h2 id="compare-heading" className={`${sectionTitleClass} mt-3`}>How This Differs From Other Romance and Instagram Scams</h2><div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800"><div className="overflow-x-auto"><table className="w-full min-w-[680px] text-left text-sm"><thead className="bg-slate-950 text-white dark:bg-black"><tr><th className="px-5 py-4">Related guide</th><th className="px-5 py-4">Key distinction</th><th className="px-5 py-4">Full guide</th></tr></thead><tbody className="divide-y divide-slate-200 dark:divide-slate-800">{comparisonRows.map((row, index) => <tr key={row.title} className={index % 2 === 0 ? 'bg-white dark:bg-slate-950' : 'bg-slate-50 dark:bg-slate-900'}><th scope="row" className="px-5 py-4 font-semibold text-slate-950 dark:text-white">{row.title}</th><td className="px-5 py-4 text-slate-600 dark:text-slate-300">{row.body}</td><td className="px-5 py-4"><Link href={row.href} className="inline-flex items-center gap-1 font-bold text-violet-700 hover:underline dark:text-violet-300">Read guide <ArrowRight className="h-3.5 w-3.5" /></Link></td></tr>)}</tbody></table></div></div></section>

          <section aria-labelledby="related-heading"><p className="text-xs font-black uppercase tracking-[0.18em] text-violet-700 dark:text-violet-400">Related guides</p><h2 id="related-heading" className={`${sectionTitleClass} mt-3`}>Keep the Mechanism Clear</h2><div className="mt-8 grid gap-4 sm:grid-cols-2">{relatedGuides.map((item) => <Link key={item.href} href={item.href} className="group rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-0.5 hover:border-violet-300 hover:shadow-md dark:border-slate-800 dark:hover:border-violet-800"><div className="flex items-start justify-between gap-4"><div><h3 className="font-bold text-slate-950 dark:text-white">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.body}</p></div><ArrowRight className="mt-1 h-5 w-5 shrink-0 text-violet-700 transition group-hover:translate-x-1 dark:text-violet-400" /></div></Link>)}</div></section>

          <section aria-labelledby="tools-heading" className="rounded-3xl bg-gradient-to-br from-violet-950 to-slate-950 px-6 py-10 text-white sm:px-10 sm:py-12"><p className="text-xs font-black uppercase tracking-[0.18em] text-fuchsia-300">Free RakshaAI checks</p><h2 id="tools-heading" className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Check Before You Move to WhatsApp</h2><div className="mt-9 grid gap-5 md:grid-cols-3">{tools.map(({ icon: Icon, title, body, href, report, label }) => report ? <div key={title} className="rounded-2xl border border-violet-800 bg-white/5 p-6"><Icon className="h-7 w-7 text-fuchsia-300" /><h3 className="mt-4 font-bold">{title}</h3><p className="mt-2 min-h-16 text-sm leading-6 text-slate-300">{body}</p><ReportScamButton className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-fuchsia-300 hover:text-fuchsia-200">{label} <ArrowRight className="h-4 w-4" /></ReportScamButton></div> : <Link key={href} href={href!} className="group rounded-2xl border border-violet-800 bg-white/5 p-6 hover:bg-white/10"><Icon className="h-7 w-7 text-fuchsia-300" /><h3 className="mt-4 font-bold">{title}</h3><p className="mt-2 min-h-16 text-sm leading-6 text-slate-300">{body}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-fuchsia-300">{label} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span></Link>)}</div></section>

          <section aria-labelledby="alerts-heading" className="rounded-3xl border border-fuchsia-200 bg-fuchsia-50 p-7 dark:border-fuchsia-900 dark:bg-fuchsia-950/30 sm:p-10"><div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center"><div><div className="flex items-center gap-2 text-fuchsia-800 dark:text-fuchsia-300"><MonitorSmartphone className="h-5 w-5" /><p className="text-xs font-black uppercase tracking-[0.16em]">Social media romance scam alerts</p></div><h2 id="alerts-heading" className="mt-3 text-2xl font-black text-slate-950 dark:text-white">Check current scam warnings</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-slate-700 dark:text-slate-300">New fake profiles and sextortion networks appear constantly. Check the live alert feed rather than relying on any static list.</p></div><Link href="/scam-alerts" className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-fuchsia-800 px-5 py-3 text-sm font-bold text-white hover:bg-fuchsia-900">View scam alerts <ArrowRight className="h-4 w-4" /></Link></div></section>

          <section aria-labelledby="faq-heading" className="mx-auto max-w-4xl"><div className="text-center"><p className="text-xs font-black uppercase tracking-[0.18em] text-violet-700 dark:text-violet-400">Quick answers</p><h2 id="faq-heading" className={`${sectionTitleClass} mt-3`}>Frequently Asked Questions About Social Media Romance Scams</h2></div><div className="mt-9 space-y-3">{FAQ_ITEMS.map((item) => <details key={item.question} className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-violet-300 open:shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:open:border-violet-800"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold text-slate-950 dark:text-white">{item.question}<span aria-hidden="true" className="text-xl text-violet-700 transition group-open:rotate-45 dark:text-violet-400">+</span></summary><p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-6 text-slate-600 dark:border-slate-800 dark:text-slate-300">{item.answer}</p></details>)}</div></section>

          <section className="rounded-3xl border border-slate-200 bg-slate-50 p-7 dark:border-slate-800 dark:bg-slate-900 sm:p-10"><div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center"><div><p className="text-xs font-black uppercase tracking-[0.16em] text-violet-700 dark:text-violet-400">Remember</p><h2 className="mt-2 max-w-2xl text-2xl font-black text-slate-950 dark:text-white">An unsolicited DM is the whole scam - everything after it is just execution.</h2><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">Check their number before you move to WhatsApp, and never appear intimately on a call with someone unverified.</p></div><Link href="/phone-number-checker" className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-violet-700 px-5 py-3 text-sm font-bold text-white hover:bg-violet-800"><Phone className="h-4 w-4" /> Check their number</Link></div></section>

          <RelatedTopics currentPath={PAGE_PATH} clusterId="romance-scams" />
        </div>
      </article>
    </DefaultLayout>
  )
}
