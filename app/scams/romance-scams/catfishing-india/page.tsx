import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Ban,
  BadgeCheck,
  CircleUserRound,
  Clock3,
  FileWarning,
  Globe2,
  HeartOff,
  Lock,
  MonitorSmartphone,
  Percent,
  Phone,
  Plane,
  Search,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Siren,
  TrendingUp,
  TriangleAlert,
  UserX,
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
const PAGE_PATH = '/scams/romance-scams/catfishing-india'
const CANONICAL = `${SITE_URL}${PAGE_PATH}`
const HERO_IMAGE = '/blog/romance-scam-india/romance-scam-hero.jpg'
const TITLE = 'Catfishing India 2026 - Fake Dating Profiles, NRI Scammers & How to Verify'
const DESCRIPTION =
  'Stolen photos. Fabricated NRI, army, or doctor identity. Tinder, TrulyMadly, Woo trust-build before money request. 8 red flags, reverse image search guide, IPC 416/420 & full India recovery.'

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
    images: [{ url: HERO_IMAGE, width: 1200, height: 675, alt: 'Fake dating profile and catfishing scam warning for India' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [HERO_IMAGE] },
  other: { 'geo.region': 'IN', language: 'en-IN' },
}

const quickFacts = [
  { value: '₹2,400 Cr', label: 'Documented catfishing / romance scam losses in India, 2024-25', source: 'MHA I4C 2025' },
  { value: '3-4×', label: 'Estimated undocumented harm - shame keeps most victims from reporting', source: 'MHA I4C 2025' },
  { value: '₹68,000', label: 'Average loss per victim - the highest of any scam type', source: 'NCRB 2025' },
  { value: '14 Weeks', label: 'Average trust-build duration before the first money request', source: 'MHA I4C 2025' },
]

const whyDurationDoesntMatter = [
  {
    icon: Clock3,
    title: 'The length of the relationship does not matter',
    body: 'Scammers invest weeks and months because their return is proportional to the emotional investment you make. A six-month online relationship feels more real than a six-day one - but it carries exactly the same verification status. The only verification is meeting in person.',
  },
  {
    icon: Siren,
    title: 'The crisis framing does not change this',
    body: "A medical emergency, a package stuck at customs, a flight ticket to finally meet, an investment opportunity closing today - all of these are designed to create urgency that bypasses rational evaluation. A genuine partner in crisis has family, local friends and institutional systems to call on, not an online contact they have never met.",
  },
]

const lawCards = [
  {
    icon: FileWarning,
    title: 'IPC Sections 416 & 420',
    body: 'Creating a false identity to deceive and defraud is cheating by personation (Section 416) and fraud (Section 420) under the Indian Penal Code.',
  },
  {
    icon: UserX,
    title: 'IT Act Sections 66C & 66D',
    body: "Section 66C covers identity theft - using another person's identity, including stolen photographs. Section 66D covers cheating by impersonation using a computer resource, which is the fake profile itself.",
  },
  {
    icon: Lock,
    title: 'IT Act Section 66E',
    body: 'Using a real person\'s photograph without consent to build a fake identity is a punishable violation of privacy under Section 66E - a crime against the person whose photos were stolen, as well as fraud against you.',
  },
  {
    icon: ShieldCheck,
    title: 'DPDP Act, 2023',
    body: "Personal data harvested during a fake relationship - photos, contact details, emotional disclosures - is collected and used without genuine consent, in violation of India's Digital Personal Data Protection Act, 2023.",
  },
]

const catfishTypes = [
  {
    icon: Plane,
    title: 'Type 1 - The NRI Professional',
    body: "India's dominant catfishing persona: an engineer, IT professional or business owner settled in Canada, the US, the UK or Australia. Foreign residency conveniently explains why meeting is difficult, why message timing is irregular, and why money moves through international wires or crypto. Typically 6-12 weeks of relationship-building before a customs fee, investment pitch or emergency appears.",
  },
  {
    icon: Shield,
    title: 'Type 2 - The Army Officer on Deployment',
    body: "An Indian Army, para-military or UN peacekeeping officer 'on a classified mission' - a framing chosen because it explains the impossibility of meeting, adds an aura of heroism that discourages questions, and creates protective concern for the person's safety. Requests typically involve satellite-phone recharges, emergency medical treatment abroad, or funds to be 'released from duty' early.",
    href: '/scams/romance-scams/army-officer-scam',
    linkLabel: 'See the full military persona breakdown',
  },
  {
    icon: CircleUserRound,
    title: 'Type 3 - The Doctor or Professional Abroad',
    body: "A doctor with an international relief organisation, a UN consultant, or a professional on assignment in a remote or conflict zone. Medical professionals are inherently trusted, remote postings explain video-call difficulty, and humanitarian framing builds an empathy-based connection that later justifies urgent money requests.",
  },
  {
    icon: TrendingUp,
    title: 'Type 4 - The Pig Butchering Variant',
    body: "The highest-value catfishing type: a romantic relationship is built first, then a 'highly profitable' investment - usually crypto or forex on a platform the scammer controls - is introduced to lower the victim's financial guard. This page covers the catfishing trust-build mechanism; the investment-fraud component is covered in the investment scams section.",
    href: '/scams/investment-scams',
    linkLabel: 'See the investment fraud mechanism',
  },
]

const trustBuildStages = [
  ['Stage 1 - The Match', 'A profile with professional photos and an aspirational bio appears on Tinder, Bumble, TrulyMadly or in a Facebook group. First messages are attentive, well-written and flattering.', 'No mutual connections. Account recently created. Conversation moves off the app to WhatsApp quickly.'],
  ['Stage 2 - Love Bombing', "Daily, sometimes multiple-times-daily messages. Rapid declarations of connection, pet names within a week, future plans discussed before any in-person meeting.", 'The pace feels abnormally fast. Video calls are avoided, brief, or consistently poor quality.'],
  ['Stage 3 - Deepening Trust', "Personal 'vulnerabilities' are shared - a difficult childhood, past betrayal, loneliness abroad - engineered to trigger reciprocal disclosure and deepen investment.", "Stories are dramatic but unverifiable. You feel you are 'the only one who understands them.'"],
  ['Stage 4 - The Money Request', 'A medical crisis, a customs fee, an investment opportunity, or a flight ticket to finally meet. The request may be framed as a loan. Further requests follow after payment.', 'Any money request from someone never met in person, framed with urgency, via wire transfer, crypto or gift cards.'],
]

const platformGuide = [
  ['Tinder', 'International accounts with professional photos that move quickly to WhatsApp. NRI and professional personas are most common.', 'Check for no mutual connections, few photos and recent activity. Reverse-image search all photos immediately.'],
  ['Bumble', 'Strong professional framing (education, career) targeting career-focused users, using the same persona types as Tinder.', "Use Bumble's photo-verification feature. Anyone refusing the selfie check is not the person in the photos."],
  ['Hinge', 'More relationship-focused framing, with prompt answers written to be compelling and emotionally resonant.', 'Check prompt answers for generic or overly polished quality, and reverse-image search the profile photos.'],
  ['TrulyMadly', "India's largest dating app is heavily targeted. NRI and professional personas dominate on unverified accounts.", "Only engage with profiles carrying a completed TM Score / verification badge. Unverified profiles claiming to be abroad are high risk."],
  ['Woo', 'Premium positioning attracts scammers presenting as high-income professionals; army and doctor personas are frequent.', 'Check account age and mutual-connection verification. Insist on a video call within the app - refuse to move off-platform.'],
  ['Jeevansathi / Matrimonial', 'High emotional stakes (marriage intent) are exploited by fake profiles claiming NRI status with family in India.', 'Verify by calling the family address provided directly, or engage a local verification service for claimed addresses.'],
  ['Facebook / Instagram', 'Older demographics targeted via groups, pages and friend requests. Photo-forward formats make stolen photos more convincing.', 'Check the account creation date and look for years of varied, authentic content. Reverse-image search all photos.'],
]

const casePatterns = [
  {
    title: 'NRI engineer, customs-fee escalation',
    body: 'Weeks of daily messaging and a marriage proposal precede a "customs package release fee" requested via wire transfer in several tranches. The profile never appears on an unscripted video call.',
  },
  {
    title: 'Unverified army-officer profile',
    body: 'A profile claiming military deployment abroad, carrying no platform verification badge, requests urgent funds for a "medical emergency" paid in cryptocurrency - a payment method with essentially no recovery path.',
  },
  {
    title: 'Doctor-abroad, multi-tranche relationship',
    body: 'A months-long relationship with a humanitarian-worker persona produces a sequence of separate requests - equipment funds, an assignment-release fee, a flight ticket - each justified by the last. A reverse image search after the fact traces the photos to an unrelated real person.',
  },
  {
    title: 'Pig-butchering investment pivot',
    body: 'A romantic relationship transitions into a trading-platform pitch. An initial small deposit shows a fabricated profit on a dashboard, encouraging much larger deposits. Withdrawal is blocked behind a "tax clearance fee," and the platform disappears.',
  },
  {
    title: 'Photo-verification bypass',
    body: 'A platform photo-verification prompt is answered with a still image sent outside the app rather than a live selfie check, and the relationship proceeds. A subsequent "gifts stuck at customs" request is paid via gift cards rather than a bank account.',
  },
  {
    title: 'Business-network investment romance',
    body: 'A relationship formed through a professional social network leads to a "forex trading" pitch showing large fabricated dashboard profits. Repeated "verification deposit" demands block every withdrawal attempt before the account disappears.',
  },
]

const redFlags = [
  ['Profile photos are traceable to someone else via reverse image search', "Right-click any profile photo and search the image on Google. If it appears elsewhere under a different name or on a stock-photo site, the profile is fake. This single check exposes most catfishing profiles."],
  ["The person is always 'too busy' for a live, unscripted video call", 'A genuine person will appear on an unscheduled video call within a day or two. Bad connection, a broken camera, a classified environment or "company policy" are excuses, not explanations.'],
  ['The relationship escalates abnormally fast', 'Love declarations and future planning within one to two weeks of first contact is a manufactured pace, designed to shorten the time to the first money request.'],
  ['The person claims to live or work abroad in a way that conveniently prevents meeting', 'NRI professional, deployed officer, humanitarian worker abroad - the framing is chosen specifically because it removes the most natural verification: meeting in person.'],
  ['A money request arrives, however it is framed', "Customs fee, medical emergency, flight ticket, investment opportunity, a loan to get through a crisis - any financial request from someone you have never met in person is a scam regardless of the story."],
  ['The conversation is moved off the dating app to WhatsApp quickly', "This removes the platform's reporting and safety features and makes verifying the original profile harder."],
  ['The account is new, has few photos, and shows no authentic social history', 'No tagged photos from friends, no varied content spanning years - just a handful of curated images.'],
  ['Payment is requested via wire transfer, crypto, or gift cards', 'These methods are chosen specifically because they are irreversible and difficult to trace, unlike a verifiable bank transfer to a named account.'],
]

const verificationSteps = [
  {
    title: 'Reverse image search every photo',
    body: "On mobile, hold down a profile photo and choose Search image with Google or Search with Google Lens. On desktop, right-click a photo and choose the same, or upload it at images.google.com. If a photo appears on a stock site or another person's social media under a different name, it is a stolen photo. Also search the person's claimed name in quotes - a real professional has a findable, verifiable footprint.",
    icon: Search,
  },
  {
    title: 'Demand an unscripted live video call',
    body: "Ask for a call at a time you choose, not one they propose. During the call, ask them to wave with their left hand, show something specific in the room, or write your name on paper. These actions cannot be faked with pre-recorded video. Consistently poor quality, refusal, or a 'broken camera' means the profile is fake.",
    icon: Video,
  },
  {
    title: 'Check the phone number',
    body: 'Before sharing personal information or investing further emotionally, check the number they are messaging from. Romance-scam operators contact multiple victims simultaneously from the same numbers, and active numbers are typically reported within days.',
    href: '/phone-number-checker',
    label: 'Check number',
    icon: Phone,
  },
  {
    title: 'Use the platform\'s verification features',
    body: "Only engage with TrulyMadly profiles carrying a completed TM Score, Bumble's photo-verification selfie match, or Tinder's ID verification where available. On Facebook and Instagram, check the account creation date and look for years of authentic, varied content.",
    icon: BadgeCheck,
  },
  {
    title: 'Never send money, regardless of the story',
    body: "Before any transfer, apply this test: would I give this amount to a stranger on the street based on the same request? Until you have met someone in person and verified their identity, that is exactly what you are doing. If the request is framed as an investment, check the platform's registration with SEBI before anything else.",
    icon: Ban,
  },
]

const recoverySteps = [
  {
    title: 'Call 1930 within 30 minutes of any UPI transfer',
    body: 'Provide the recipient UPI ID, amount and time for a chance at account freeze. Screenshot every message, the dating profile, exchanged photos and payment confirmations before blocking the scammer. Cryptocurrency payments fall outside the 1930 freeze mechanism - document every wallet address and transaction ID instead.',
  },
  {
    title: 'File on cybercrime.gov.in with the full evidence package',
    body: 'File under Online Financial Fraud / Romance Scam, citing IPC Sections 416 and 420 alongside IT Act Sections 66C and 66D. Attach every chat screenshot, profile screenshot, payment receipt and photo exchanged - romance-scam operators frequently run several victims at once from the same accounts, and a complete package helps identify them.',
  },
  {
    title: 'Report the profile to CERT-In and the platform',
    body: 'Report a fake profile or any associated website to CERT-In at incident@cert-in.org.in, citing IT Act Section 66E if the scammer used a real person\'s stolen photographs. Report the profile directly on Tinder, TrulyMadly, Bumble, Hinge or Facebook - each report helps remove it before it reaches other victims.',
  },
  {
    title: 'File an FIR, and treat the emotional recovery as seriously as the financial one',
    body: 'File at your cybercrime police station under IPC 416 and 420, IT Act 66C and 66D, and the DPDP Act, 2023 if personal data was harvested. Call the National Consumer Helpline on 1915 for the financial-harm side. The relationship, though fake, generated real feelings - speaking with a counsellor or someone you trust matters as much as the financial process.',
  },
]

const responseTimeline = [
  ['Immediately', 'Screenshot every message, photo and payment confirmation - do not block the scammer until evidence is saved.'],
  ['Within 30 min', 'Call 1930 if a UPI payment was made. Inform your bank if a card or net-banking transfer was used.'],
  ['Within 24 hrs', 'File at cybercrime.gov.in. Report the profile on its platform. Report to CERT-In if a website was involved.'],
  ['Within 72 hrs', 'FIR at your cybercrime police station. National Consumer Helpline 1915. RakshaAI report.'],
  ['Ongoing', 'Emotional support matters as much as financial recovery - talk to someone you trust.'],
]

const statistics = [
  ['Documented romance / catfishing losses, 2024-25', '₹2,400 crore', 'MHA I4C 2025'],
  ['Average loss per victim - highest of all fraud types', '₹68,000', 'NCRB 2025'],
  ['Trust-build duration before the first money request', '14 weeks average', 'MHA I4C 2025'],
  ['Most common India catfishing persona', 'NRI professional (41%)', 'cybercrime.gov.in 2025'],
  ['Most-used platforms for catfishing in India', 'TrulyMadly + Facebook (58% combined)', 'MHA I4C 2025'],
  ['Victims who report to authorities', 'Estimated 22% - shame prevents most reporting', 'MHA I4C 2025'],
  ['Pig-butchering variant average loss', '₹4.8 lakh (about 3× standard catfishing)', 'NCRB 2025'],
]

const comparisonRows = [
  {
    title: 'Pig Butchering / Investment Romance',
    body: 'This page covers the catfishing trust-build mechanism. The investment-fraud component - fake trading platforms, cryptocurrency dashboards - is covered in the investment scams section.',
    href: '/scams/investment-scams',
  },
  {
    title: 'Romance Scams Hub',
    body: 'Every romance-fraud sub-type active in India, including matrimonial fraud, military impersonation and sextortion.',
    href: '/scams/romance-scams',
  },
  {
    title: 'Job Scams India Hub',
    body: 'Fake job offers sometimes borrow romantic framing, but the core mechanisms and recovery steps differ from catfishing.',
    href: '/scams/job-scams',
  },
]

const relatedGuides = [
  {
    title: 'Army Officer Romance Scam',
    body: 'The military-specific persona variant, with its own India impersonation law and armed-forces verification steps.',
    href: '/scams/romance-scams/army-officer-scam',
  },
  {
    title: 'Instagram & Facebook Romance Scam',
    body: 'The unsolicited-DM entry point on social media, with a distinct sextortion harm track this dating-app page does not cover.',
    href: '/scams/romance-scams/social-media-romance-scam',
  },
  {
    title: 'Sextortion India',
    body: 'The definitive guide if a relationship - dating app or otherwise - has escalated into blackmail over intimate content.',
    href: '/scams/romance-scams/sextortion-india',
  },
  {
    title: 'Pig Butchering / Investment Romance',
    body: 'The investment-fraud component that sometimes follows a catfishing relationship - fake trading platforms and cryptocurrency dashboards.',
    href: '/scams/investment-scams',
  },
  {
    title: 'Romance Scams India Hub',
    body: 'Compare every romance-fraud mechanism active in India, from matrimonial fraud to military impersonation.',
    href: '/scams/romance-scams',
  },
  {
    title: 'Job Scams India Hub',
    body: 'A different fraud category, but the same verification instincts - checking numbers and websites before you trust them - apply.',
    href: '/scams/job-scams',
  },
]

const tools = [
  {
    icon: Phone,
    title: 'Phone Number Checker',
    body: 'Check any mobile number before sharing personal details or sending money.',
    href: '/phone-number-checker',
    label: 'Check number',
  },
  {
    icon: Globe2,
    title: 'Website Safety Checker',
    body: 'Check any website a match asks you to visit or invest through.',
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
    question: 'What is catfishing and how does it work in India?',
    answer:
      'Catfishing is when someone creates a fake identity - stolen photographs, a fabricated professional background such as an NRI engineer, army officer or doctor abroad, and a constructed personality - to build a fake romantic or emotional relationship. The relationship develops over weeks or months before a money request arrives: a medical emergency, a customs fee, an investment opportunity, or a flight ticket to finally meet. Documented losses in India reached ₹2,400 crore in 2024-25, with an average loss of ₹68,000 per victim - the highest of any fraud category - and only an estimated 22% of victims ever file a complaint.',
  },
  {
    question: 'How do I check if a dating profile is real or fake in India?',
    answer:
      "Reverse image search every profile photo - right-click and search with Google, and if the image belongs to someone else, the profile is fake. Demand a live, unscripted video call at a time you choose; a catfisher using stolen photos cannot comply. Check the phone number they message from. Verify the account's creation date and social history - fake profiles are new and thin. On platforms with verification features, such as TrulyMadly's TM Score, only engage with verified profiles. Three or more of these checks failing together is a strong signal of catfishing.",
  },
  {
    question: 'What are the most common catfishing personas used in India?',
    answer:
      'Three personas dominate: the NRI professional settled in Canada, the UK, the US or Australia, which explains distance and irregular messaging; the army or peacekeeping officer on deployment, which explains the inability to video call and later requests for funds; and the doctor or humanitarian worker abroad, which builds empathy and explains limited video access. All three are chosen specifically because they justify why meeting in person is impossible while building an admirable, trustworthy identity.',
  },
  {
    question: 'What is pig butchering and how is it related to catfishing?',
    answer:
      "Pig butchering is a catfishing variant that adds an investment-fraud component: the scammer builds a romantic relationship first, then introduces a 'profitable' cryptocurrency or forex opportunity on a platform they control. Once the emotional relationship lowers the victim's financial guard, deposits grow progressively larger as a fabricated dashboard shows rising profits. Withdrawal is blocked behind fees, taxes or verification charges, and the platform disappears once deposits stop. This variant causes roughly three times the average loss of standard catfishing because both emotional and financial trust are exploited - the investment-fraud mechanism itself is covered in the investment scams section.",
  },
  {
    question: 'Is it possible to verify whether someone is who they claim to be online?',
    answer:
      "Several checks help: reverse image search of all photos, an unscripted live video call with specific verification requests, a phone number check, searching the person's claimed name and profession for a verifiable footprint, and platform verification features. For a claimed NRI professional, ask for their company's LinkedIn page or a work email - a real professional can provide this in minutes. Even passing every check is not full certainty; only an in-person meeting with verified identity provides that.",
  },
  {
    question: 'I sent money to someone I met online. How do I recover it?',
    answer:
      'Call 1930 immediately if the payment was by UPI - within 30 minutes gives the best chance of an account freeze. File at cybercrime.gov.in citing IPC Sections 416 and 420 and IT Act Sections 66C and 66D. Report to CERT-In if a website was involved, and report the profile to the platform to have it removed. File an FIR at your cybercrime police station and call the National Consumer Helpline on 1915. Cryptocurrency payments have very low recovery probability - document every wallet address for the FIR regardless. Shame is the scammer\'s protection; reporting is yours.',
  },
  {
    question: 'How do I report a catfishing or romance scam in India?',
    answer:
      "Call 1930 for a UPI freeze. File at cybercrime.gov.in under Online Financial Fraud / Romance Scam. Report the fake profile and any website to CERT-In at incident@cert-in.org.in. Report the profile directly on Tinder, TrulyMadly, Bumble, Hinge or Facebook. Call the National Consumer Helpline on 1915. File an FIR under IPC Sections 416 and 420 and IT Act Sections 66C and 66D. Report the profile and number to RakshaAI to warn other users. Include every screenshot, the scammer's number, the profile itself, and any websites they directed you to.",
  },
  {
    question: 'What India laws apply to catfishing and online romance fraud?',
    answer:
      "IPC Section 416 covers cheating by personation - presenting as someone you are not in order to defraud - and Section 420 covers the resulting fraud. IT Act Section 66C covers identity theft, including the use of another person's stolen photographs, and Section 66D covers cheating by impersonation using a computer resource, meaning the fake profile itself. IT Act Section 66E covers the privacy violation of using a real person's photographs without consent. The DPDP Act, 2023 applies where personal data - photos, information, financial details - was gathered during the fake relationship without genuine consent. Combined penalties under these sections can run up to several years of imprisonment.",
  },
  {
    question: 'Why do people fall for catfishing even when the signs seem obvious in hindsight?',
    answer:
      "Several mechanisms make it effective: love bombing creates emotional dependency before rational evaluation begins; daily contact over weeks builds a sense of a 'track record'; manufactured shared vulnerability deepens investment and triggers protective instinct; the sunk cost of weeks of emotional energy makes it harder to accept a relationship is fake; and shame about being deceived online leads people to override doubt rather than investigate. These are the same psychological processes that operate in genuine relationships, which is why catfishing victims are not naive - they are responding normally to manufactured emotional stimuli.",
  },
]

const schemas = [
  webPageSchema({ name: TITLE, description: DESCRIPTION, url: PAGE_PATH }),
  articleSchema({
    headline: 'Catfishing India 2026 - Fake Dating Profiles, NRI Scammers & How to Verify Anyone You Meet Online',
    description: DESCRIPTION,
    url: PAGE_PATH,
    image: HERO_IMAGE,
    datePublished: '2026-08-16',
    dateModified: '2026-08-16',
    author: organizationRef(),
    section: 'Romance Scams',
    keywords: [
      'catfishing india',
      'fake dating profile india',
      'online dating scam india',
      'nri dating scam india',
      'tinder scam india',
      'pig butchering scam india',
      'how to identify fake dating profile india',
      'reverse image search fake profile india',
      'IPC 416 420 catfishing india',
      'IT Act 66C 66D catfishing india',
    ],
  }),
  faqPageSchema(FAQ_ITEMS),
  breadcrumbListSchema([
    { name: 'Home', url: '/' },
    { name: 'Scam Categories', url: '/scams' },
    { name: 'Romance Scams India', url: '/scams/romance-scams' },
    { name: 'Catfishing / Fake Dating Profile Scam', url: PAGE_PATH },
  ]),
  definedTermSchema({
    name: 'Catfishing',
    description: 'The creation of a false online identity, using stolen photographs and a fabricated background, to build a romantic or emotional relationship in order to extract money or personal information from the victim.',
    url: PAGE_PATH,
    inDefinedTermSet: `${SITE_URL}/scams/romance-scams#scam-types`,
  }),
  {
    '@context': 'https://schema.org' as const,
    '@type': 'HowTo',
    '@id': `${CANONICAL}#how-to-verify`,
    name: 'How to verify an online dating profile in India',
    description: 'Five checks to verify anyone you meet online before sharing personal details or sending money.',
    totalTime: 'PT5M',
    step: verificationSteps.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.title, text: step.body })),
  },
]

const sectionTitleClass = 'text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl'
const sectionIntroClass = 'mt-4 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300'

export default function CatfishingIndiaPage() {
  return (
    <DefaultLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schemas) }} />

      <article className="bg-white dark:bg-slate-950">
        <header className="relative overflow-hidden border-b border-rose-100 bg-gradient-to-br from-rose-50 via-white to-pink-50 px-4 py-14 dark:border-rose-950 dark:from-slate-950 dark:via-slate-900 dark:to-pink-950/50 sm:py-20">
          <div aria-hidden="true" className="absolute -right-24 -top-28 h-96 w-96 rounded-full bg-pink-300/20 blur-3xl" />
          <div aria-hidden="true" className="absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-rose-300/20 blur-3xl" />
          <div className="relative mx-auto max-w-6xl">
            <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <Link className="hover:text-rose-700 dark:hover:text-rose-300" href="/">Home</Link><span aria-hidden="true">›</span>
              <Link className="hover:text-rose-700 dark:hover:text-rose-300" href="/scams">Scam Categories</Link><span aria-hidden="true">›</span>
              <Link className="hover:text-rose-700 dark:hover:text-rose-300" href="/scams/romance-scams">Romance Scams India</Link><span aria-hidden="true">›</span>
              <span className="text-slate-800 dark:text-slate-200">Catfishing / Fake Dating Profile Scam</span>
            </nav>

            <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-rose-800 shadow-sm dark:border-rose-800 dark:bg-slate-900/70 dark:text-pink-300"><HeartOff className="h-4 w-4" /> Fake Identity &amp; Trust-Build Guide</div>
                <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
                  Catfishing India 2026
                  <span className="mt-2 block bg-gradient-to-r from-rose-700 to-pink-700 bg-clip-text text-transparent dark:from-rose-300 dark:to-pink-300">Fake Dating Profiles, NRI Scammers &amp; How to Verify Anyone You Meet Online</span>
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                  Catfishing is when someone builds a false identity - stolen photographs, a fabricated professional background, a carefully constructed personality - to build a romantic or emotional relationship with you before extracting money. The &lsquo;NRI engineer in Canada,&rsquo; the &lsquo;army officer on deployment,&rsquo; the &lsquo;doctor working abroad&rsquo; is a fictional character, and the person never exists as presented.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link href="/phone-number-checker" className="inline-flex items-center justify-center gap-2 rounded-xl bg-rose-700 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-rose-900/15 transition hover:-translate-y-0.5 hover:bg-rose-800"><Phone className="h-5 w-5" /> Check their number <ArrowRight className="h-4 w-4" /></Link>
                  <Link href="/website-safety-checker" className="inline-flex items-center justify-center gap-2 rounded-xl border border-rose-200 bg-white px-6 py-3.5 text-sm font-bold text-rose-800 shadow-sm transition hover:-translate-y-0.5 hover:bg-rose-50 dark:border-rose-800 dark:bg-slate-900 dark:text-rose-300 dark:hover:bg-slate-800"><Globe2 className="h-5 w-5" /> Check a website</Link>
                </div>
                <p className="mt-4 text-xs font-medium text-slate-500 dark:text-slate-400">Free · No login · 10M+ fraud numbers · Built for India</p>
              </div>
              <figure className="overflow-hidden rounded-3xl border border-rose-200 bg-white shadow-2xl shadow-rose-950/10 dark:border-rose-900 dark:bg-slate-900"><Image src={HERO_IMAGE} alt="Fake dating profile and catfishing scam warning for India" width={1200} height={675} className="aspect-[16/9] w-full object-cover" priority /><figcaption className="px-5 py-4 text-xs leading-5 text-slate-500 dark:text-slate-400">A stolen photo and a fabricated identity are all it takes to start.</figcaption></figure>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{quickFacts.map((fact) => <div key={fact.label} className="rounded-2xl border border-white/80 bg-white/90 p-5 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/85"><p className="text-2xl font-black text-rose-700 dark:text-rose-300">{fact.value}</p><p className="mt-2 text-sm leading-5 text-slate-700 dark:text-slate-300">{fact.label}</p><p className="mt-2 text-[11px] font-bold uppercase tracking-wide text-slate-400">{fact.source}</p></div>)}</div>
          </div>
        </header>

        <div className="border-b border-red-200 bg-red-50 px-4 py-5 dark:border-red-900 dark:bg-red-950/30"><div className="mx-auto flex max-w-6xl items-start gap-3 text-sm leading-6 text-red-950 dark:text-red-100"><TriangleAlert className="mt-0.5 h-5 w-5 shrink-0 text-red-700 dark:text-red-400" /><p><strong>The one rule:</strong> never send money to anyone you have not met in person, regardless of how long you have been talking online. An online relationship that has never included a face-to-face meeting is not a verified relationship.</p></div></div>

        <div className="mx-auto max-w-6xl space-y-24 px-4 py-16 sm:px-6 lg:px-8">
          <section aria-labelledby="why-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-rose-700 dark:text-rose-400">Why the rule always holds</p>
            <h2 id="why-heading" className={`${sectionTitleClass} mt-3`}>Duration and Urgency Don&rsquo;t Change the Verification Status</h2>
            <div className="mt-9 grid gap-5 md:grid-cols-2">{whyDurationDoesntMatter.map(({ icon: Icon, title, body }) => <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300"><Icon className="h-6 w-6" /></div><h3 className="mt-5 text-base font-bold text-slate-950 dark:text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{body}</p></article>)}</div>
            <div className="mt-6 rounded-2xl bg-slate-950 p-6 text-sm leading-6 text-slate-200"><strong className="text-pink-300">The check:</strong> before any money is sent to an online contact, demand a live video call at a specific time you choose. A real person can do this. A scammer using stolen photos cannot.</div>
          </section>

          <section aria-labelledby="law-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-rose-700 dark:text-rose-400">Why this is a crime, not just heartbreak</p>
            <h2 id="law-heading" className={`${sectionTitleClass} mt-3`}>The India Laws That Apply to Catfishing</h2>
            <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{lawCards.map(({ icon: Icon, title, body }) => <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300"><Icon className="h-5 w-5" /></div><h3 className="mt-4 text-sm font-bold text-slate-950 dark:text-white">{title}</h3><p className="mt-2 text-xs leading-5 text-slate-600 dark:text-slate-300">{body}</p></article>)}</div>
          </section>

          <section aria-labelledby="types-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-rose-700 dark:text-rose-400">Four archetypes</p>
            <h2 id="types-heading" className={`${sectionTitleClass} mt-3`}>4 Catfishing Types Active in India</h2>
            <p className={sectionIntroClass}>Each persona is engineered for a specific segment of the Indian dating and matrimonial audience, and each is chosen specifically because it explains why meeting in person is impossible.</p>
            <div className="mt-9 grid gap-5 md:grid-cols-2">{catfishTypes.map(({ icon: Icon, title, body, href, linkLabel }) => <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-100 text-pink-800 dark:bg-pink-950 dark:text-pink-300"><Icon className="h-6 w-6" /></div><h3 className="mt-5 text-base font-bold text-slate-950 dark:text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{body}</p>{href ? <Link href={href} className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-rose-700 hover:underline dark:text-rose-300">{linkLabel} <ArrowRight className="h-3.5 w-3.5" /></Link> : null}</article>)}</div>
          </section>

          <section aria-labelledby="stages-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-rose-700 dark:text-rose-400">Identify it before Stage 4</p>
            <h2 id="stages-heading" className={`${sectionTitleClass} mt-3`}>The 4-Stage Trust-Build Mechanism</h2>
            <p className={sectionIntroClass}>Understanding all four stages lets you recognise the pattern at Stage 2 - well before any money is involved.</p>
            <div className="mt-9 grid gap-8 lg:grid-cols-[1fr_320px] lg:items-start">
              <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800"><div className="overflow-x-auto"><table className="w-full min-w-[640px] text-left text-sm"><thead className="bg-slate-950 text-white dark:bg-black"><tr><th className="px-5 py-4">Stage</th><th className="px-5 py-4">What happens</th><th className="px-5 py-4">What to watch for</th></tr></thead><tbody className="divide-y divide-slate-200 dark:divide-slate-800">{trustBuildStages.map(([stage, happens, watch], index) => <tr key={stage} className={index % 2 === 0 ? 'bg-white dark:bg-slate-950' : 'bg-slate-50 dark:bg-slate-900'}><th scope="row" className="px-5 py-4 align-top font-semibold text-slate-950 dark:text-white">{stage}</th><td className="px-5 py-4 align-top text-slate-600 dark:text-slate-300">{happens}</td><td className="px-5 py-4 align-top font-medium text-rose-700 dark:text-rose-300">{watch}</td></tr>)}</tbody></table></div></div>
              <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg dark:border-slate-800 dark:bg-slate-900"><Image src="/blog/romance-scam-india/romance-scam-5-stages.jpg" alt="Timeline of a catfishing trust-build from first match to money request" width={900} height={506} className="h-auto w-full object-cover" /><figcaption className="px-5 py-4 text-xs leading-5 text-slate-500 dark:text-slate-400">The pattern repeats across almost every catfishing case in India.</figcaption></figure>
            </div>
          </section>

          <section aria-labelledby="platform-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-rose-700 dark:text-rose-400">Where it happens</p>
            <h2 id="platform-heading" className={`${sectionTitleClass} mt-3`}>Platform-by-Platform Catfishing Guide India</h2>
            <div className="mt-9 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800"><div className="overflow-x-auto"><table className="w-full min-w-[720px] text-left text-sm"><thead className="bg-slate-950 text-white dark:bg-black"><tr><th className="px-5 py-4">Platform</th><th className="px-5 py-4">How catfishing operates</th><th className="px-5 py-4">Key verification step</th></tr></thead><tbody className="divide-y divide-slate-200 dark:divide-slate-800">{platformGuide.map(([platform, operates, verify], index) => <tr key={platform} className={index % 2 === 0 ? 'bg-white dark:bg-slate-950' : 'bg-slate-50 dark:bg-slate-900'}><th scope="row" className="px-5 py-4 align-top font-semibold text-slate-950 dark:text-white">{platform}</th><td className="px-5 py-4 align-top text-slate-600 dark:text-slate-300">{operates}</td><td className="px-5 py-4 align-top text-rose-700 dark:text-rose-300">{verify}</td></tr>)}</tbody></table></div></div>
          </section>

          <section aria-labelledby="patterns-heading">
            <div className="grid gap-8 lg:grid-cols-[1fr_300px] lg:items-start">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-rose-700 dark:text-rose-400">Reported case patterns</p>
                <h2 id="patterns-heading" className={`${sectionTitleClass} mt-3`}>How Catfishing Plays Out - India Case Patterns 2024-2025</h2>
                <p className={sectionIntroClass}>These are composite patterns drawn from commonly reported catfishing cases in India, not individual verified incidents.</p>
                <div className="mt-9 grid gap-5 sm:grid-cols-2">{casePatterns.map((item, index) => <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"><div className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-100 text-sm font-black text-rose-800 dark:bg-rose-950 dark:text-rose-300">{index + 1}</span><h3 className="text-sm font-bold text-slate-950 dark:text-white">{item.title}</h3></div><p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.body}</p></article>)}</div>
              </div>
              <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg dark:border-slate-800 dark:bg-slate-900"><Image src="/blog/romance-scam-india/romance-scam-red-flags.jpg" alt="Red flags checklist for identifying a catfishing profile in India" width={680} height={849} className="h-auto w-full object-cover" /><figcaption className="px-5 py-4 text-xs leading-5 text-slate-500 dark:text-slate-400">Every pattern above traces back to one of these signals.</figcaption></figure>
            </div>
          </section>

          <section aria-labelledby="red-flags-heading" className="rounded-3xl bg-gradient-to-br from-red-950 to-rose-950 px-6 py-10 text-white sm:px-10 sm:py-12">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-red-300">Before sharing anything more</p>
            <h2 id="red-flags-heading" className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">8 Red Flags of a Fake Dating Profile</h2>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-red-100/85">Three or more of these together is a very high probability of catfishing.</p>
            <ol className="mt-9 grid gap-4 md:grid-cols-2">{redFlags.map(([title, body], index) => <li key={title} className="flex gap-4 rounded-2xl border border-red-800/70 bg-black/15 p-5"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-sm font-black text-red-900">{index + 1}</span><div><h3 className="font-bold">{title}</h3><p className="mt-1 text-sm leading-6 text-red-100/85">{body}</p></div></li>)}</ol>
          </section>

          <section aria-labelledby="verify-heading">
            <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-start">
              <div><p className="text-xs font-black uppercase tracking-[0.18em] text-rose-700 dark:text-rose-400">Five checks</p><h2 id="verify-heading" className={`${sectionTitleClass} mt-3`}>How to Verify Any Online Dating Profile</h2><ol className="mt-9 space-y-4">{verificationSteps.map(({ title, body, href, label, icon: Icon }, index) => <li key={title} className="grid gap-4 rounded-2xl border border-slate-200 p-5 dark:border-slate-800 sm:grid-cols-[48px_1fr_auto] sm:items-center"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300"><Icon className="h-5 w-5" /></div><div><p className="text-xs font-black uppercase tracking-wide text-rose-700 dark:text-rose-400">Step {index + 1}</p><h3 className="mt-1 font-bold text-slate-950 dark:text-white">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{body}</p></div>{href && label ? <Link href={href} className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-rose-200 px-4 py-2.5 text-sm font-bold text-rose-800 hover:bg-rose-50 dark:border-rose-800 dark:text-rose-300 dark:hover:bg-rose-950">{label} <ArrowRight className="h-3.5 w-3.5" /></Link> : null}</li>)}</ol></div>
              <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg dark:border-slate-800 dark:bg-slate-900"><Image src="/blog/romance-scam-india/romance-scam-verify-profile.jpg" alt="Step-by-step guide to verifying a dating profile before trusting or paying anyone" width={680} height={849} className="h-auto w-full object-cover" /><figcaption className="px-5 py-4 text-xs leading-5 text-slate-500 dark:text-slate-400">A reverse image search takes 30 seconds and is often conclusive on its own.</figcaption></figure>
            </div>
          </section>

          <section aria-labelledby="recovery-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-red-700 dark:text-red-400">If you already sent money</p>
            <h2 id="recovery-heading" className={`${sectionTitleClass} mt-3`}>Recovery Guide - What to Do Next</h2>
            <p className={sectionIntroClass}>Shame is the scammer&rsquo;s protection. Reporting is yours - act immediately rather than staying silent.</p>
            <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]"><ol className="space-y-4">{recoverySteps.map((step, index) => <li key={step.title} className="flex gap-4 rounded-2xl border border-slate-200 p-5 dark:border-slate-800"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-red-100 text-sm font-black text-red-800 dark:bg-red-950 dark:text-red-300">{index + 1}</span><div><h3 className="font-bold text-slate-950 dark:text-white">{step.title}</h3><p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{step.body}</p></div></li>)}</ol><aside className="h-fit rounded-2xl bg-slate-950 p-6 text-white dark:bg-black"><div className="flex items-center gap-2 text-pink-300"><Clock3 className="h-5 w-5" /><p className="text-xs font-black uppercase tracking-[0.14em]">Response timeline</p></div><div className="mt-6 space-y-5">{responseTimeline.map(([time, action]) => <div key={time} className="border-l-2 border-pink-400 pl-4"><p className="font-bold text-pink-300">{time}</p><p className="mt-1 text-sm leading-5 text-slate-300">{action}</p></div>)}</div></aside></div>
            <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-2xl border border-red-200 bg-red-50 p-6 dark:border-red-900 dark:bg-red-950/30 sm:flex-row sm:items-center"><div><h3 className="text-lg font-black text-red-950 dark:text-red-100">Report the profile before it reaches someone else</h3><p className="mt-1 text-sm text-red-800 dark:text-red-200">Keep screenshots, the profile, the phone number and payment details ready.</p></div><ReportScamButton className="inline-flex items-center gap-2 rounded-xl bg-red-700 px-5 py-3 text-sm font-bold text-white hover:bg-red-800"><ShieldAlert className="h-4 w-4" /> Report profile <ArrowRight className="h-4 w-4" /></ReportScamButton></div>
          </section>

          <section aria-labelledby="stats-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-rose-700 dark:text-rose-400">Scale of the problem</p>
            <h2 id="stats-heading" className={`${sectionTitleClass} mt-3`}>Catfishing India Statistics 2025-2026</h2>
            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800"><div className="overflow-x-auto"><table className="w-full min-w-[680px] text-left text-sm"><thead className="bg-slate-950 text-white dark:bg-black"><tr><th className="px-5 py-4">Metric</th><th className="px-5 py-4">Data</th><th className="px-5 py-4">Source</th></tr></thead><tbody className="divide-y divide-slate-200 dark:divide-slate-800">{statistics.map(([metric, data, source], index) => <tr key={metric} className={index % 2 === 0 ? 'bg-white dark:bg-slate-950' : 'bg-slate-50 dark:bg-slate-900'}><th scope="row" className="px-5 py-4 font-semibold text-slate-950 dark:text-white">{metric}</th><td className="px-5 py-4 font-bold text-rose-700 dark:text-rose-300">{data}</td><td className="px-5 py-4 text-slate-500 dark:text-slate-400">{source}</td></tr>)}</tbody></table></div></div>
            <p className="mt-4 flex items-start gap-2 text-xs leading-5 text-slate-500 dark:text-slate-400"><Percent className="mt-0.5 h-4 w-4 shrink-0" />An estimated 78% of victims never report - both the shame of being deceived and the shame of having shared personal information keep the true scale of catfishing in India dramatically undercounted.</p>
          </section>

          <section aria-labelledby="compare-heading"><p className="text-xs font-black uppercase tracking-[0.18em] text-rose-700 dark:text-rose-400">Related romance scam types</p><h2 id="compare-heading" className={`${sectionTitleClass} mt-3`}>How Catfishing Connects to Other Romance Scams</h2><div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800"><div className="overflow-x-auto"><table className="w-full min-w-[680px] text-left text-sm"><thead className="bg-slate-950 text-white dark:bg-black"><tr><th className="px-5 py-4">Related guide</th><th className="px-5 py-4">Relationship to catfishing</th><th className="px-5 py-4">Full guide</th></tr></thead><tbody className="divide-y divide-slate-200 dark:divide-slate-800">{comparisonRows.map((row, index) => <tr key={row.title} className={index % 2 === 0 ? 'bg-white dark:bg-slate-950' : 'bg-slate-50 dark:bg-slate-900'}><th scope="row" className="px-5 py-4 font-semibold text-slate-950 dark:text-white">{row.title}</th><td className="px-5 py-4 text-slate-600 dark:text-slate-300">{row.body}</td><td className="px-5 py-4"><Link href={row.href} className="inline-flex items-center gap-1 font-bold text-rose-700 hover:underline dark:text-rose-300">Read guide <ArrowRight className="h-3.5 w-3.5" /></Link></td></tr>)}</tbody></table></div></div></section>

          <section aria-labelledby="related-heading"><p className="text-xs font-black uppercase tracking-[0.18em] text-rose-700 dark:text-rose-400">Related guides</p><h2 id="related-heading" className={`${sectionTitleClass} mt-3`}>Keep the Mechanism Clear</h2><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{relatedGuides.map((item) => <Link key={item.href} href={item.href} className="group rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-0.5 hover:border-rose-300 hover:shadow-md dark:border-slate-800 dark:hover:border-rose-800"><div className="flex items-start justify-between gap-4"><div><h3 className="font-bold text-slate-950 dark:text-white">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.body}</p></div><ArrowRight className="mt-1 h-5 w-5 shrink-0 text-rose-700 transition group-hover:translate-x-1 dark:text-rose-400" /></div></Link>)}</div></section>

          <section aria-labelledby="tools-heading" className="rounded-3xl bg-gradient-to-br from-rose-950 to-slate-950 px-6 py-10 text-white sm:px-10 sm:py-12"><p className="text-xs font-black uppercase tracking-[0.18em] text-pink-300">Free RakshaAI checks</p><h2 id="tools-heading" className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Verify Anyone You Meet Online</h2><div className="mt-9 grid gap-5 md:grid-cols-3">{tools.map(({ icon: Icon, title, body, href, report, label }) => report ? <div key={title} className="rounded-2xl border border-rose-800 bg-white/5 p-6"><Icon className="h-7 w-7 text-pink-300" /><h3 className="mt-4 font-bold">{title}</h3><p className="mt-2 min-h-16 text-sm leading-6 text-slate-300">{body}</p><ReportScamButton className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-pink-300 hover:text-pink-200">{label} <ArrowRight className="h-4 w-4" /></ReportScamButton></div> : <Link key={href} href={href!} className="group rounded-2xl border border-rose-800 bg-white/5 p-6 hover:bg-white/10"><Icon className="h-7 w-7 text-pink-300" /><h3 className="mt-4 font-bold">{title}</h3><p className="mt-2 min-h-16 text-sm leading-6 text-slate-300">{body}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-pink-300">{label} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span></Link>)}</div></section>

          <section aria-labelledby="alerts-heading" className="rounded-3xl border border-pink-200 bg-pink-50 p-7 dark:border-pink-900 dark:bg-pink-950/30 sm:p-10"><div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center"><div><div className="flex items-center gap-2 text-pink-800 dark:text-pink-300"><MonitorSmartphone className="h-5 w-5" /><p className="text-xs font-black uppercase tracking-[0.16em]">Catfishing &amp; romance scam alerts</p></div><h2 id="alerts-heading" className="mt-3 text-2xl font-black text-slate-950 dark:text-white">Check current scam warnings</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-slate-700 dark:text-slate-300">New profiles and stolen-photo networks appear constantly. Check the live alert feed rather than relying on any static list.</p></div><Link href="/scam-alerts" className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-pink-800 px-5 py-3 text-sm font-bold text-white hover:bg-pink-900">View scam alerts <ArrowRight className="h-4 w-4" /></Link></div></section>

          <section aria-labelledby="faq-heading" className="mx-auto max-w-4xl"><div className="text-center"><p className="text-xs font-black uppercase tracking-[0.18em] text-rose-700 dark:text-rose-400">Quick answers</p><h2 id="faq-heading" className={`${sectionTitleClass} mt-3`}>Frequently Asked Questions About Catfishing India</h2></div><div className="mt-9 space-y-3">{FAQ_ITEMS.map((item) => <details key={item.question} className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-rose-300 open:shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:open:border-rose-800"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold text-slate-950 dark:text-white">{item.question}<span aria-hidden="true" className="text-xl text-rose-700 transition group-open:rotate-45 dark:text-rose-400">+</span></summary><p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-6 text-slate-600 dark:border-slate-800 dark:text-slate-300">{item.answer}</p></details>)}</div></section>

          <section className="rounded-3xl border border-slate-200 bg-slate-50 p-7 dark:border-slate-800 dark:bg-slate-900 sm:p-10"><div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center"><div><p className="text-xs font-black uppercase tracking-[0.16em] text-rose-700 dark:text-rose-400">Remember</p><h2 className="mt-2 max-w-2xl text-2xl font-black text-slate-950 dark:text-white">A relationship that has never survived a video call is not yet a relationship.</h2><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">Reverse-image search their photos and check their number before you trust anything else.</p></div><Link href="/phone-number-checker" className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-rose-700 px-5 py-3 text-sm font-bold text-white hover:bg-rose-800"><Phone className="h-4 w-4" /> Check their number</Link></div></section>

          <RelatedTopics currentPath={PAGE_PATH} clusterId="romance-scams" />
        </div>
      </article>
    </DefaultLayout>
  )
}
