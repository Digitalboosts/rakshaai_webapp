import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  ExternalLink,
  Eye,
  Fingerprint,
  Heart,
  MonitorSmartphone,
  Phone,
  ShieldAlert,
  ShieldCheck,
  Siren,
  Users,
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
const PAGE_PATH = '/scams/romance-scams/sextortion-india'
const CANONICAL = `${SITE_URL}${PAGE_PATH}`
const HERO_IMAGE = '/blog/sextortion-scam-india/sextortion-scam-hero.webp'
const TITLE = 'Sextortion India 2026 - Do Not Pay, 5-Step Response & Image Removal Guide'
const DESCRIPTION =
  'Fake romance leads to a blackmail demand over intimate images or video - real, screenshotted, or deepfake. Do NOT pay - most who pay face higher demands. POCSO for minors. Image removal & full India recovery.'

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
    images: [{ url: HERO_IMAGE, width: 1200, height: 675, alt: 'Sextortion warning for India - do not pay, report instead' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [HERO_IMAGE] },
  other: { 'geo.region': 'IN', language: 'en-IN' },
}

const quickFacts = [
  { value: '340%', label: 'Growth in sextortion complaints in India, 2023-2025', source: 'MHA I4C 2025' },
  { value: '78%', label: 'Of victims who paid faced a higher follow-up demand', source: 'MHA I4C 2025' },
  { value: '68%', label: 'Of victims who did not pay and reported saw demands stop', source: 'cybercrime.gov.in 2025' },
  { value: '₹32,000', label: 'Average demand - the psychological harm goes far beyond the financial figure', source: 'NCRB 2025' },
]

const escalationCards = [
  {
    title: 'Why paying makes it worse',
    body: 'Victims who make an initial payment overwhelmingly report a second demand, usually higher, within a day or two. A payment does not close the matter for the person demanding it — it confirms that pursuing you is worth their time.',
  },
  {
    title: 'Why stopping and reporting works',
    body: 'Sextortion operators typically run many targets at once, on a low investment per person. A target who refuses to pay and responds with a cybercrime complaint reference signals that continuing to pursue that one case is no longer worth the risk to them.',
  },
]

const sextortionTypes = [
  {
    icon: Heart,
    title: 'Type 1 - Fake Romance, Content Shared Voluntarily',
    body: 'A relationship is built over weeks on a dating app or social media, using a stolen or fabricated identity. As intimacy develops, intimate photos or video are eventually shared as what feels like a natural part of the relationship. Within hours, the tone changes completely and a payment demand arrives, often accompanied by a screenshot of your contact list as leverage.',
  },
  {
    icon: Video,
    title: 'Type 2 - The Video Call Trap',
    body: 'No relationship is required for this variant. An unknown WhatsApp contact starts a video call; explicit pre-recorded content appears on their end, and your face — visible in the call interface, however briefly or however confused your reaction — is screenshotted as apparent “evidence.” The blackmail message can arrive within minutes of the call ending.',
  },
  {
    icon: Fingerprint,
    title: 'Type 3 - Deepfake Content',
    body: 'A small number of ordinary photos, taken from a public profile or shared earlier in a relationship, are used to generate explicit images or video that never actually happened. The victim is blackmailed with fabricated content — this variant can target anyone with public photos, whether or not they ever shared anything intimate.',
  },
]

const indiaFactors = [
  {
    title: 'Family reputation used as leverage',
    body: 'Threats to contact parents, siblings or relatives are specifically chosen because of how closely family standing is tied to this kind of content in many Indian households.',
  },
  {
    title: 'Employment and marriage-prospect threats',
    body: 'Threats to contact an employer, or to send content to a marriage prospect or their family, are used because of the outsized weight those relationships carry.',
  },
  {
    title: 'Limited prior reference point',
    body: 'For someone in an early digital relationship, a fabricated romance can feel entirely genuine, and the shock of the blackmail that follows can be disorienting rather than instantly recognisable as a scam.',
  },
  {
    title: 'Low awareness of the do-not-pay principle',
    body: 'Many first-time targets are not aware that paying typically leads to a higher demand rather than resolution, and understandably default to trying to make the immediate threat go away.',
  },
  {
    title: 'Organised, high-volume operations',
    body: 'Some operations run hundreds of targets simultaneously with scripted escalation. This is a business model built on volume, not a personal vendetta against any one target.',
  },
]

const lawRows = [
  ['IT Act Sections 67 & 67A', 'Publishing or transmitting obscene material (67) or sexually explicit material (67A) in electronic form - applies to sextortion content and demands referencing it.', 'Sec 67: up to 3 yrs first / 5 yrs repeat. Sec 67A: up to 5 yrs first / 7 yrs repeat.'],
  ['Extortion (BNS 308, formerly IPC 384)', 'Putting a person in fear of harm - here, the threat to share intimate content - in order to make them hand over money. The demand itself is the offence, whether or not content is ever shared.', 'Up to 3 years, fine, or both.'],
  ['Voyeurism (BNS 77, formerly IPC 354C)', 'Capturing or sharing images of a person in circumstances implying privacy, without consent.', 'Up to 3 yrs first conviction, up to 7 yrs repeat.'],
  ['IT Act Section 66E', 'Capturing or transmitting images of a person’s private areas without consent - applies to both real and deepfake content.', 'Up to 3 years, fine, or both.'],
  ['Defamation (BNS 356, formerly IPC 499/500)', 'Threatening to publish false or fabricated damaging content - directly relevant to deepfake sextortion.', 'Up to 2 years, fine, or both.'],
  ['IT Act Section 67B and POCSO', 'Where the victim is under 18, these apply automatically alongside the above - see the dedicated note below.', 'See POCSO note below.'],
]

const responseSteps = [
  {
    title: 'Do not pay. Do not delete. Do not block yet.',
    body: 'Save the blackmail message with the sender’s account name or number visible, their profile, the exact threat, and any payment demand (UPI ID, amount). Blocking before you have this evidence means losing what police need — the account can be abandoned by the operator regardless of whether you block it, so gather evidence first.',
  },
  {
    title: 'File at cybercrime.gov.in, and call 1930 if you paid',
    body: 'File under Cybercrime Against Women or Online Blackmail / Sextortion with every screenshot attached, citing extortion and IT Act Section 67 or 67A. Keep the complaint number — you will use it in the next step. If any UPI payment was made, call 1930 immediately as well.',
  },
  {
    title: 'Report the account and start image removal',
    body: 'Report the account on Instagram, Facebook or WhatsApp directly. Then, if you are 18 or older, submit the image to StopNCII.org — a free tool operated by the Revenge Porn Helpline (SWGfL) in partnership with Meta and other platforms, which creates a digital hash of your image without the image ever leaving your device, and shares that hash so matching uploads are automatically blocked on participating platforms. If you were under 18 in the images, use NCMEC’s equivalent tool, Take It Down, instead.',
  },
  {
    title: 'Report to CERT-In, and to the NCW if the victim is a woman',
    body: 'Report the account, website or any links sent to you to CERT-In at incident@cert-in.org.in for coordinated takedown. If the victim is a woman, file simultaneously with the National Commission for Women at ncwapps.nic.in, which handles cybercrime against women and can provide counselling referrals alongside its complaint process.',
  },
  {
    title: 'File an FIR, and let yourself be supported',
    body: 'File at your cybercrime police station citing every applicable section from the table above, adding POCSO if the victim is under 18. Once the reporting steps are moving, talk to someone you trust. The legal process and the emotional process both matter — you do not have to carry this alone, and free confidential counselling is available (see below).',
  },
]

const responseTimeline = [
  ['Immediately', 'Do not pay. Screenshot everything. Do not delete the conversation or block yet.'],
  ['Within 30 min', 'File at cybercrime.gov.in. Call 1930 if you already paid. Start a StopNCII.org submission.'],
  ['Within 24 hrs', 'Report the account on its platform. Report to CERT-In. File with the NCW if the victim is a woman.'],
  ['Within 72 hrs', 'FIR at your cybercrime police station, citing every applicable section.'],
  ['If you already paid', 'Stop now. Report anyway — a late report is always better than continuing to pay.'],
]

const casePatterns = [
  {
    title: 'Fake romance, escalating payments',
    body: 'Intimate content shared during what felt like a genuine relationship is followed by a demand, a payment, and then a second and third demand each higher than the last — the pattern that makes reporting after the first demand the better outcome.',
  },
  {
    title: 'Video-call trap, no payment made',
    body: 'An unsolicited WhatsApp video call captures a reactive screenshot. The target refuses to pay, reports within the hour, and sends the resulting complaint reference back — demands stop.',
  },
  {
    title: 'Deepfake from public photos',
    body: 'No intimate content was ever shared. Fabricated images generated from public profile photos are used for a demand. The content is still unlawful to create and distribute, and is reported and pursued exactly as real content would be.',
  },
  {
    title: 'A minor targeted through a school social circle',
    body: 'A minor is targeted via a platform popular with their peer group, and a parent or guardian discovers the blackmail message. Reporting directly to the local police station, rather than only the online portal, triggers the mandatory child-protection process — the child is the victim and the focus throughout is their protection.',
  },
  {
    title: 'A young adult, first online relationship',
    body: 'A college-age target in an early digital relationship shares content and is blackmailed. Reporting after the demand — even after an initial payment — leads to identification of the operator, who is found to be running many simultaneous targets.',
  },
  {
    title: 'Organised, high-volume operation',
    body: 'An operation running hundreds of simultaneous fake profiles and video-call traps is identified and dismantled after a cluster of coordinated victim reports, illustrating why every individual report matters even when a single case feels small.',
  },
]

const preventionRows = [
  ['Instagram', 'Set your profile to private, enable Restrict for unknown followers, and turn on the Hidden Words filter for DMs.', 'A private account makes both a fake-romance approach and deepfake photo gathering harder.'],
  ['Facebook', 'Review who can see your photos in privacy settings, and limit friend requests to friends of friends.', 'Reduces the pool of public face photos available for deepfake generation and limits cold-contact approaches.'],
  ['WhatsApp', 'Set your profile photo visibility to My Contacts, and turn off read receipts for unknown numbers.', 'Reduces the information available to an operator working from a purchased or leaked number list.'],
  ['Video calls', 'Never appear intimately on a video call with someone you have not met in person and verified.', 'This one habit fully prevents the video-call-trap variant.'],
  ['Photo sharing', 'Treat any intimate photo or video as permanent once sent - it cannot reliably be recalled.', 'The single most effective prevention against the voluntary-sharing variant.'],
]

const comparisonRows = [
  {
    title: 'Instagram & Facebook Romance Scam',
    body: 'Covers the unsolicited-DM approach and sextortion as one of two harm tracks. This page goes deeper on sextortion specifically, including deepfakes, POCSO and organised operations.',
    href: '/scams/romance-scams/social-media-romance-scam',
  },
  {
    title: 'Catfishing / Fake Dating Profile',
    body: 'Covers the dating-app fake-identity mechanism where the primary harm is a financial money request rather than blackmail over intimate content.',
    href: '/scams/romance-scams/catfishing-india',
  },
]

const relatedGuides = [
  {
    title: 'Instagram & Facebook Romance Scam',
    body: 'The unsolicited-DM entry point that often leads here - covers both the financial-fraud and sextortion tracks together.',
    href: '/scams/romance-scams/social-media-romance-scam',
  },
  {
    title: 'Catfishing / Fake Dating Profile Scam',
    body: 'The dating-app version of fake-identity fraud, where the primary harm is a money request rather than blackmail.',
    href: '/scams/romance-scams/catfishing-india',
  },
  {
    title: 'Romance Scams India Hub',
    body: 'Compare every romance-fraud mechanism active in India today.',
    href: '/scams/romance-scams',
  },
]

const tools = [
  {
    icon: ShieldAlert,
    title: 'Report a Scam',
    body: 'Report the blackmailer’s account, number and demand to warn other Indian users.',
    report: true,
    label: 'Report now',
  },
  {
    icon: Phone,
    title: 'Phone Number Checker',
    body: 'Check any number contacting you before you engage further.',
    href: '/phone-number-checker',
    label: 'Check number',
  },
  {
    icon: ExternalLink,
    title: 'cybercrime.gov.in',
    body: 'File your complaint directly with India’s national cybercrime reporting portal.',
    href: 'https://cybercrime.gov.in',
    label: 'File a complaint',
    external: true,
  },
]

const FAQ_ITEMS = [
  {
    question: 'What is sextortion and how does it happen in India?',
    answer:
      'Sextortion is when someone uses intimate images or video — real, screenshotted, or entirely fabricated — to demand money under threat of sharing it with your contacts, family or employer. In India it most often follows a fake romantic relationship, or a WhatsApp video call engineered to capture a reactive screenshot. Complaints have grown roughly 340% between 2023 and 2025, and the single most important response is not to pay: most victims who pay face a higher follow-up demand, while most who refuse and report see demands stop.',
  },
  {
    question: 'I just received a sextortion demand. What should I do right now?',
    answer:
      'Do not pay. Do not delete the conversation. Do not block the sender yet — screenshot the blackmail message, their account details, and the exact demand first, since evidence collection matters more than cutting contact immediately. File at cybercrime.gov.in citing extortion and IT Act Section 67 or 67A, and call 1930 if you have already made any payment. Report the account on its platform, and if you are 18 or older, submit the image to StopNCII.org. You are not in trouble for reporting this — reporting is how it gets resolved.',
  },
  {
    question: 'What if I already paid?',
    answer:
      'Stop making further payments, and report anyway — a late report is always better than continuing to pay. Include the amounts, dates, and UPI IDs used in your complaint. If a UPI payment was recent, call 1930 for a possible account freeze. File an FIR citing extortion. Many sextortion operators run this as an organised, high-volume operation, so your report — even after payment — genuinely contributes to identifying them.',
  },
  {
    question: 'How do I get intimate images removed from the internet in India?',
    answer:
      'If you are 18 or older, use StopNCII.org: it creates a digital hash of your image, which never leaves your device, and shares that hash with participating platforms including Instagram and Facebook so matching uploads are automatically blocked. If you were under 18 in the images, NCMEC’s equivalent tool, Take It Down, serves the same purpose. Google also offers a direct removal request for explicit images appearing in Search results, accessible from the image’s menu in Google Images. Report to CERT-In for coordinated multi-platform takedown, and report each specific URL to the platform where it appears.',
  },
  {
    question: 'What is deepfake sextortion, and does the law still apply if the images aren’t real?',
    answer:
      'Deepfake sextortion uses AI tools to generate explicit images or video of a person from ordinary public photos — content that never actually happened. It is one of the fastest-growing sextortion variants, because it can target anyone with public photos, not only people who shared anything intimate. The law applies regardless: transmitting sexually explicit electronic content is an offence under IT Act Section 67A whether the content is real or generated, and threatening to share fabricated damaging content is also defamation. Report and pursue it exactly as you would real content — and consider setting your public photos to private, since that is what deepfake generation typically relies on.',
  },
  {
    question: 'How do I report sextortion in India?',
    answer:
      'File at cybercrime.gov.in under Online Blackmail or Cybercrime Against Women, citing extortion, voyeurism and IT Act Section 67 or 67A. Call 1930 if any payment was made. Report the account on Instagram, Facebook or WhatsApp directly. Report to CERT-In at incident@cert-in.org.in. File with the National Commission for Women at ncwapps.nic.in if the victim is a woman. File an FIR at your cybercrime police station, and report the scam to RakshaAI to help warn others. If the victim is under 18, go directly to your nearest police station as well, so the mandatory child-protection process is triggered.',
  },
  {
    question: 'What is the POCSO Act and how does it apply if the victim is under 18?',
    answer:
      'The Protection of Children from Sexual Offences (POCSO) Act, 2012 applies automatically whenever the victim is under 18. A threat to use a real or fabricated depiction of a child in a sexual context is sexual harassment under Section 11, punishable under Section 12 with up to 3 years and a fine; where actual child sexual abuse material is created or circulated, the more serious Sections 13 and 14 apply, alongside IT Act Section 67B, each carrying 5 years on a first conviction and 7 on a repeat one. Some other categories of offence under POCSO carry far higher sentences, but those apply to physical sexual assault, not to this kind of image-based blackmail specifically. What matters most practically: police are required to treat a POCSO report as a child-protection matter, a minor should never be asked to produce the images as evidence — the blackmail message and a verbal account are enough — and parents or guardians should report directly to the nearest police station in addition to cybercrime.gov.in.',
  },
  {
    question: 'Why do sextortion operations target young Indians specifically?',
    answer:
      'A combination of factors makes this age group a common target: the outsized weight family reputation and marriage prospects carry in many Indian households, which operators use as leverage; limited prior experience with online relationships, which can make a fabricated romance feel entirely genuine; low awareness that paying tends to make demands worse rather than better; and the sheer size of India’s young, highly-connected user base on the platforms these operations use. None of this reflects any failing on a victim’s part — it reflects a criminal business model built around exploiting normal human trust.',
  },
  {
    question: 'How is a social media romance scam different from sextortion specifically?',
    answer:
      'Instagram and Facebook romance scams can end in one of two ways: a financial-fraud track, where the relationship leads to a money request framed as a crisis or opportunity, or the sextortion track, where the relationship leads to captured intimate content and blackmail. Sextortion itself is broader than that one entry point — it also includes the video-call trap, which needs no prior relationship at all, and deepfake content, which needs no shared content at all. This page focuses specifically on the sextortion mechanism across all of its forms.',
  },
  {
    question: 'I feel ashamed about what happened to me. What should I know?',
    answer:
      'That shame was manufactured by someone who deliberately built a fake sense of intimacy in order to exploit it — it is a predictable human response to a deliberate manipulation, not a sign of poor judgement or bad character. This happens to people from every background: students, professionals, parents. The steps forward are the same regardless of how you feel: screenshot, report, do not pay. Reporting is not an admission of anything — it is an accurate account of what someone did to you. If you would like to talk to someone, free and confidential support is available in India through iCall (9152987821) and the Vandrevala Foundation (1860-2662-345), alongside the reporting steps on this page.',
  },
]

const schemas = [
  webPageSchema({ name: TITLE, description: DESCRIPTION, url: PAGE_PATH }),
  articleSchema({
    headline: 'Sextortion India 2026 - Do Not Pay, How to Remove Images & the Complete 5-Step Response Guide',
    description: DESCRIPTION,
    url: PAGE_PATH,
    image: HERO_IMAGE,
    datePublished: '2026-08-16',
    dateModified: '2026-08-16',
    author: organizationRef(),
    section: 'Romance Scams',
    keywords: [
      'sextortion india',
      'sextortion whatsapp india',
      'online blackmail india',
      'intimate image blackmail india',
      'how to report sextortion india',
      'deepfake sextortion india',
      'how to delete intimate images online india',
      'sextortion help india',
      'POCSO Act sextortion minor india',
      'stopncii india image removal',
    ],
  }),
  faqPageSchema(FAQ_ITEMS),
  breadcrumbListSchema([
    { name: 'Home', url: '/' },
    { name: 'Scam Categories', url: '/scams' },
    { name: 'Romance Scams India', url: '/scams/romance-scams' },
    { name: 'Sextortion India', url: PAGE_PATH },
  ]),
  definedTermSchema({
    name: 'Sextortion',
    description: 'A form of extortion in which a perpetrator threatens to share real, screenshotted, or fabricated intimate images or video of a victim unless a payment is made, typically following a fake online relationship or an engineered video call.',
    url: PAGE_PATH,
    inDefinedTermSet: `${SITE_URL}/scams/romance-scams#scam-types`,
  }),
  {
    '@context': 'https://schema.org' as const,
    '@type': 'HowTo',
    '@id': `${CANONICAL}#how-to-report`,
    name: 'How to report sextortion in India',
    description: 'The five steps to take after receiving a sextortion demand in India, in order of urgency.',
    totalTime: 'PT15M',
    step: responseSteps.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.title, text: step.body })),
  },
]

const sectionTitleClass = 'text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl'
const sectionIntroClass = 'mt-4 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300'

export default function SextortionIndiaPage() {
  return (
    <DefaultLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schemas) }} />

      <article className="bg-white dark:bg-slate-950">
        <header className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-slate-50 via-white to-red-50 px-4 py-14 dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-red-950/20 sm:py-20">
          <div aria-hidden="true" className="absolute -right-24 -top-28 h-96 w-96 rounded-full bg-red-300/10 blur-3xl" />
          <div aria-hidden="true" className="absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-slate-300/20 blur-3xl" />
          <div className="relative mx-auto max-w-6xl">
            <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <Link className="hover:text-red-700 dark:hover:text-red-300" href="/">Home</Link><span aria-hidden="true">›</span>
              <Link className="hover:text-red-700 dark:hover:text-red-300" href="/scams">Scam Categories</Link><span aria-hidden="true">›</span>
              <Link className="hover:text-red-700 dark:hover:text-red-300" href="/scams/romance-scams">Romance Scams India</Link><span aria-hidden="true">›</span>
              <span className="text-slate-800 dark:text-slate-200">Sextortion India</span>
            </nav>

            <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-red-800 shadow-sm dark:border-red-800 dark:bg-slate-900/70 dark:text-red-300"><ShieldAlert className="h-4 w-4" /> If you are being blackmailed, start here</div>
                <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
                  Sextortion India 2026
                  <span className="mt-2 block bg-gradient-to-r from-red-700 to-slate-700 bg-clip-text text-transparent dark:from-red-300 dark:to-slate-300">Do Not Pay - The Complete 5-Step Response Guide</span>
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                  If someone is threatening to share intimate images or video of you unless you pay, this is a crime being done to you, not something you caused. The single most important thing to know right now: <strong className="text-red-800 dark:text-red-300">do not pay</strong>. This page walks through exactly what to do instead, in order.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <ReportScamButton className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-700 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-900/15 transition hover:-translate-y-0.5 hover:bg-red-800"><ShieldAlert className="h-5 w-5" /> Report this crime <ArrowRight className="h-4 w-4" /></ReportScamButton>
                  <a href="https://cybercrime.gov.in" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-red-200 bg-white px-6 py-3.5 text-sm font-bold text-red-800 shadow-sm transition hover:-translate-y-0.5 hover:bg-red-50 dark:border-red-800 dark:bg-slate-900 dark:text-red-300 dark:hover:bg-slate-800">cybercrime.gov.in <ExternalLink className="h-4 w-4" /></a>
                </div>
                <p className="mt-4 text-xs font-medium text-slate-500 dark:text-slate-400">Helpline 1930 · cybercrime.gov.in · NCW (for women): ncwapps.nic.in</p>
              </div>
              <figure className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-950/10 dark:border-slate-800 dark:bg-slate-900"><Image src={HERO_IMAGE} alt="Sextortion warning for India - do not pay, report instead" width={1200} height={675} className="aspect-[16/9] w-full object-cover" priority /><figcaption className="px-5 py-4 text-xs leading-5 text-slate-500 dark:text-slate-400">Reporting is not admitting to something - it is telling the truth about what someone did to you.</figcaption></figure>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{quickFacts.map((fact) => <div key={fact.label} className="rounded-2xl border border-white/80 bg-white/90 p-5 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/85"><p className="text-2xl font-black text-red-700 dark:text-red-300">{fact.value}</p><p className="mt-2 text-sm leading-5 text-slate-700 dark:text-slate-300">{fact.label}</p><p className="mt-2 text-[11px] font-bold uppercase tracking-wide text-slate-400">{fact.source}</p></div>)}</div>
          </div>
        </header>

        <section aria-labelledby="donotpay-heading" className="border-y-2 border-red-600 bg-red-950 px-4 py-12 text-white sm:py-16">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-xs font-black uppercase tracking-[0.14em]"><Siren className="h-4 w-4" /> The one rule this whole page rests on</div>
            <h2 id="donotpay-heading" className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">Do Not Pay</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-red-100">Paying does not end sextortion. It confirms you will pay, and is followed by a higher demand far more often than it is followed by silence. Every step that actually helps — reporting, image removal, an FIR — is below.</p>
          </div>
        </section>

        <div className="mx-auto max-w-6xl space-y-24 px-4 py-16 sm:px-6 lg:px-8">
          <section aria-labelledby="why-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-red-700 dark:text-red-400">The evidence behind the one rule</p>
            <h2 id="why-heading" className={`${sectionTitleClass} mt-3`}>Why This Advice Holds Up</h2>
            <div className="mt-9 grid gap-5 md:grid-cols-2">{escalationCards.map(({ title, body }) => <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"><h3 className="text-base font-bold text-slate-950 dark:text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{body}</p></article>)}</div>
            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm leading-6 text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">This does not guarantee content is never shared — sometimes it is shared regardless of payment. But each share is additional criminal evidence against the perpetrator, and shared content can still be removed through the steps in this guide.</div>
          </section>

          <section aria-labelledby="types-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-red-700 dark:text-red-400">Three mechanisms</p>
            <h2 id="types-heading" className={`${sectionTitleClass} mt-3`}>How Sextortion Happens in India</h2>
            <div className="mt-9 grid gap-8 lg:grid-cols-[1fr_300px] lg:items-start">
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">{sextortionTypes.map(({ icon: Icon, title, body }) => <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300"><Icon className="h-5 w-5" /></div><h3 className="mt-4 text-base font-bold text-slate-950 dark:text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{body}</p></article>)}</div>
              <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg dark:border-slate-800 dark:bg-slate-900"><Image src="/blog/sextortion-scam-india/sextortion-variants-grid.webp" alt="Types of sextortion in India - fake romance, video call trap, and AI deepfake content" width={800} height={999} className="h-auto w-full object-cover" /></figure>
            </div>
          </section>

          <section aria-labelledby="factors-heading" className="rounded-3xl bg-slate-950 px-6 py-10 text-white sm:px-10 sm:py-12">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-red-300">Understanding it, without any blame</p>
            <h2 id="factors-heading" className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Why This Targets Young Indians So Effectively</h2>
            <div className="mt-9 grid gap-4 sm:grid-cols-2">{indiaFactors.map((item, index) => <div key={item.title} className="rounded-2xl border border-slate-800 bg-white/5 p-5"><span className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-red-500/20 text-sm font-black text-red-300">{index + 1}</span><p className="font-bold">{item.title}</p><p className="mt-2 text-sm leading-6 text-slate-300">{item.body}</p></div>)}</div>
            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-slate-700 bg-white/5 p-6 text-sm leading-7 text-slate-200"><Heart className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><p><strong className="text-white">None of these factors make a victim responsible.</strong> This is a crime committed by a criminal, exploiting a normal human response to manufactured intimacy and a credible threat. There is nothing here to be ashamed of.</p></div>
          </section>

          <section aria-labelledby="law-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-red-700 dark:text-red-400">What the law says</p>
            <h2 id="law-heading" className={`${sectionTitleClass} mt-3`}>The India Laws That Protect You</h2>
            <div className="mt-9 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800"><div className="overflow-x-auto"><table className="w-full min-w-[760px] text-left text-sm"><thead className="bg-slate-950 text-white dark:bg-black"><tr><th className="px-5 py-4">Law</th><th className="px-5 py-4">What it covers</th><th className="px-5 py-4">Penalty</th></tr></thead><tbody className="divide-y divide-slate-200 dark:divide-slate-800">{lawRows.map(([law, covers, penalty], index) => <tr key={law} className={index % 2 === 0 ? 'bg-white dark:bg-slate-950' : 'bg-slate-50 dark:bg-slate-900'}><th scope="row" className="px-5 py-4 align-top font-semibold text-slate-950 dark:text-white">{law}</th><td className="px-5 py-4 align-top text-slate-600 dark:text-slate-300">{covers}</td><td className="px-5 py-4 align-top font-medium text-red-700 dark:text-red-300">{penalty}</td></tr>)}</tbody></table></div></div>
            <p className="mt-5 text-xs leading-5 text-slate-500 dark:text-slate-400">India&rsquo;s criminal code was replaced by the Bharatiya Nyaya Sanhita (BNS) on 1 July 2024. The older IPC section numbers are included above because they remain the most commonly searched terms for these offences.</p>

            <div className="mt-8 rounded-2xl border border-amber-300 bg-amber-50 p-7 dark:border-amber-800 dark:bg-amber-950/30">
              <div className="flex items-start gap-3"><Users className="mt-1 h-6 w-6 shrink-0 text-amber-800 dark:text-amber-300" /><div>
                <h3 className="text-lg font-black text-slate-950 dark:text-white">If the victim is under 18: POCSO applies, and the child is protected first</h3>
                <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">The Protection of Children from Sexual Offences (POCSO) Act, 2012 applies automatically whenever the person targeted is under 18. Threatening to use a real or fabricated depiction of a child in a sexual context is sexual harassment under Section 11, carrying up to 3 years and a fine under Section 12. Where child sexual abuse material has actually been created or circulated, the more serious Sections 13 and 14 apply alongside IT Act Section 67B, each carrying 5 years on a first conviction and 7 on a repeat one — and other, far more severe categories of offence exist under POCSO for physical sexual assault, which is a different situation from image-based blackmail.</p>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
                  <li className="flex gap-2"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-amber-700 dark:text-amber-400" />Parents or guardians should report directly at the nearest police station, in addition to cybercrime.gov.in, so the mandatory child-protection process is triggered.</li>
                  <li className="flex gap-2"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-amber-700 dark:text-amber-400" />A child should never be asked to produce the images as evidence — the blackmail message and a verbal account are sufficient to file a complaint.</li>
                  <li className="flex gap-2"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-amber-700 dark:text-amber-400" />Investigating officers are required to use child-friendly interviewing protocols, and schools have a duty to report if they become aware of a student affected.</li>
                </ul>
              </div></div>
            </div>
          </section>

          <section aria-labelledby="steps-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-red-700 dark:text-red-400">In order, starting now</p>
            <h2 id="steps-heading" className={`${sectionTitleClass} mt-3`}>The 5-Step Response Protocol</h2>
            <p className={sectionIntroClass}>Speed matters most in the first two steps. Everything after that matters too — just slightly less urgently.</p>
            <div className="mt-9 grid gap-8 lg:grid-cols-[1fr_360px] lg:items-start">
              <ol className="space-y-4">{responseSteps.map((step, index) => <li key={step.title} className="flex gap-4 rounded-2xl border border-slate-200 p-5 dark:border-slate-800"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-red-100 text-sm font-black text-red-800 dark:bg-red-950 dark:text-red-300">{index + 1}</span><div><h3 className="font-bold text-slate-950 dark:text-white">{step.title}</h3><p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{step.body}</p></div></li>)}</ol>
              <aside className="h-fit rounded-2xl bg-slate-950 p-6 text-white dark:bg-black"><div className="flex items-center gap-2 text-red-300"><Clock3 className="h-5 w-5" /><p className="text-xs font-black uppercase tracking-[0.14em]">Response timeline</p></div><div className="mt-6 space-y-5">{responseTimeline.map(([time, action]) => <div key={time} className="border-l-2 border-red-400 pl-4"><p className="font-bold text-red-300">{time}</p><p className="mt-1 text-sm leading-5 text-slate-300">{action}</p></div>)}</div></aside>
            </div>
            <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-2xl border border-red-200 bg-red-50 p-6 dark:border-red-900 dark:bg-red-950/30 sm:flex-row sm:items-center"><div><h3 className="text-lg font-black text-red-950 dark:text-red-100">Report the account and stop it reaching someone else</h3><p className="mt-1 text-sm text-red-800 dark:text-red-200">Keep screenshots, the account details, and the demand ready.</p></div><ReportScamButton className="inline-flex items-center gap-2 rounded-xl bg-red-700 px-5 py-3 text-sm font-bold text-white hover:bg-red-800"><ShieldAlert className="h-4 w-4" /> Report now <ArrowRight className="h-4 w-4" /></ReportScamButton></div>
          </section>

          <section aria-labelledby="patterns-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-red-700 dark:text-red-400">Reported case patterns</p>
            <h2 id="patterns-heading" className={`${sectionTitleClass} mt-3`}>How Sextortion Plays Out - India Case Patterns 2024-2025</h2>
            <p className={sectionIntroClass}>These are composite patterns drawn from commonly reported cases in India, not individual identifiable incidents.</p>
            <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{casePatterns.map((item, index) => <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"><div className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-100 text-sm font-black text-red-800 dark:bg-red-950 dark:text-red-300">{index + 1}</span><h3 className="text-sm font-bold text-slate-950 dark:text-white">{item.title}</h3></div><p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.body}</p></article>)}</div>
          </section>

          <section aria-labelledby="removal-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-red-700 dark:text-red-400">If content exists or has spread</p>
            <h2 id="removal-heading" className={`${sectionTitleClass} mt-3`}>How to Remove Intimate Images From the Internet</h2>
            <div className="mt-9 grid gap-8 lg:grid-cols-[1fr_320px] lg:items-start">
              <div className="space-y-4">
                <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"><div className="flex items-center gap-2 text-red-700 dark:text-red-300"><BadgeCheck className="h-5 w-5" /><p className="text-xs font-black uppercase tracking-[0.14em]">If you are 18 or older</p></div><p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">Use StopNCII.org, run by the Revenge Porn Helpline (SWGfL) in partnership with Meta and other platforms. Select &ldquo;Create a Case&rdquo; — you never upload the actual image, only a cryptographic hash is generated on your own device. That hash is shared with participating platforms, including Instagram and Facebook, and any upload matching it is automatically blocked, typically within 24-48 hours for content already circulating.</p></div>
                <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"><div className="flex items-center gap-2 text-red-700 dark:text-red-300"><Users className="h-5 w-5" /><p className="text-xs font-black uppercase tracking-[0.14em]">If you were under 18 in the images</p></div><p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">Use NCMEC&rsquo;s dedicated tool, Take It Down, which serves the same hash-matching purpose specifically for this situation.</p></div>
                <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"><div className="flex items-center gap-2 text-red-700 dark:text-red-300"><Eye className="h-5 w-5" /><p className="text-xs font-black uppercase tracking-[0.14em]">Removing it from Google Search</p></div><p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">Google offers a direct removal request for non-consensual explicit images from Search results, accessible from the three-dot menu on the image in Google Images, selecting &ldquo;Remove result&rdquo; and then &ldquo;It shows a sexual image of me.&rdquo;</p></div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900"><div className="flex items-center gap-2 text-red-700 dark:text-red-300"><ShieldCheck className="h-5 w-5" /><p className="text-xs font-black uppercase tracking-[0.14em]">If content has already reached your contacts</p></div><p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">Each share is an additional criminal act you can report as further evidence. In practice, most recipients who get such content from an unknown number recognise it as blackmail — the social fallout is very often smaller than it feels in the moment. Content can be removed. Nothing about a criminal&rsquo;s actions changes who you are.</p></div>
              </div>
              <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg dark:border-slate-800 dark:bg-slate-900"><Image src="/blog/sextortion-scam-india/sextortion-do-not-pay.webp" alt="Do not pay a sextortion demand - report and remove content instead" width={800} height={999} className="h-auto w-full object-cover" /></figure>
            </div>
          </section>

          <section aria-labelledby="stats-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-red-700 dark:text-red-400">Scale of the problem</p>
            <h2 id="stats-heading" className={`${sectionTitleClass} mt-3`}>Sextortion Statistics India 2025-2026</h2>
            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800"><div className="overflow-x-auto"><table className="w-full min-w-[680px] text-left text-sm"><thead className="bg-slate-950 text-white dark:bg-black"><tr><th className="px-5 py-4">Metric</th><th className="px-5 py-4">Data</th><th className="px-5 py-4">Source</th></tr></thead><tbody className="divide-y divide-slate-200 dark:divide-slate-800"><tr className="bg-white dark:bg-slate-950"><th scope="row" className="px-5 py-4 font-semibold text-slate-950 dark:text-white">Growth in complaints, 2023-2025</th><td className="px-5 py-4 font-bold text-red-700 dark:text-red-300">+340%</td><td className="px-5 py-4 text-slate-500 dark:text-slate-400">MHA I4C 2025</td></tr><tr className="bg-slate-50 dark:bg-slate-900"><th scope="row" className="px-5 py-4 font-semibold text-slate-950 dark:text-white">Victims who paid and faced a higher demand</th><td className="px-5 py-4 font-bold text-red-700 dark:text-red-300">78%</td><td className="px-5 py-4 text-slate-500 dark:text-slate-400">MHA I4C 2025</td></tr><tr className="bg-white dark:bg-slate-950"><th scope="row" className="px-5 py-4 font-semibold text-slate-950 dark:text-white">Victims who did not pay and saw demands stop</th><td className="px-5 py-4 font-bold text-red-700 dark:text-red-300">68%</td><td className="px-5 py-4 text-slate-500 dark:text-slate-400">cybercrime.gov.in 2025</td></tr><tr className="bg-slate-50 dark:bg-slate-900"><th scope="row" className="px-5 py-4 font-semibold text-slate-950 dark:text-white">Average demand</th><td className="px-5 py-4 font-bold text-red-700 dark:text-red-300">₹32,000</td><td className="px-5 py-4 text-slate-500 dark:text-slate-400">NCRB 2025</td></tr><tr className="bg-white dark:bg-slate-950"><th scope="row" className="px-5 py-4 font-semibold text-slate-950 dark:text-white">Fastest-growing variant</th><td className="px-5 py-4 font-bold text-red-700 dark:text-red-300">Deepfake sextortion</td><td className="px-5 py-4 text-slate-500 dark:text-slate-400">MHA I4C 2025</td></tr><tr className="bg-slate-50 dark:bg-slate-900"><th scope="row" className="px-5 py-4 font-semibold text-slate-950 dark:text-white">Most-targeted age group</th><td className="px-5 py-4 font-bold text-red-700 dark:text-red-300">18-30 years</td><td className="px-5 py-4 text-slate-500 dark:text-slate-400">MHA I4C 2025</td></tr></tbody></table></div></div>
          </section>

          <section aria-labelledby="prevention-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-red-700 dark:text-red-400">Before it happens</p>
            <h2 id="prevention-heading" className={`${sectionTitleClass} mt-3`}>Protecting Yourself - Prevention by Platform</h2>
            <div className="mt-9 grid gap-8 lg:grid-cols-[1fr_300px] lg:items-start">
              <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800"><div className="overflow-x-auto"><table className="w-full min-w-[680px] text-left text-sm"><thead className="bg-slate-950 text-white dark:bg-black"><tr><th className="px-5 py-4">Where</th><th className="px-5 py-4">Prevention step</th><th className="px-5 py-4">Why it matters</th></tr></thead><tbody className="divide-y divide-slate-200 dark:divide-slate-800">{preventionRows.map(([where, step, why], index) => <tr key={where} className={index % 2 === 0 ? 'bg-white dark:bg-slate-950' : 'bg-slate-50 dark:bg-slate-900'}><th scope="row" className="px-5 py-4 align-top font-semibold text-slate-950 dark:text-white">{where}</th><td className="px-5 py-4 align-top text-slate-600 dark:text-slate-300">{step}</td><td className="px-5 py-4 align-top text-red-700 dark:text-red-300">{why}</td></tr>)}</tbody></table></div></div>
              <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg dark:border-slate-800 dark:bg-slate-900"><Image src="/blog/sextortion-scam-india/sextortion-protection-rules.webp" alt="How to protect yourself from sextortion in India - a safety checklist" width={800} height={999} className="h-auto w-full object-cover" /></figure>
            </div>
          </section>

          <section aria-labelledby="compare-heading"><p className="text-xs font-black uppercase tracking-[0.18em] text-red-700 dark:text-red-400">Related guides</p><h2 id="compare-heading" className={`${sectionTitleClass} mt-3`}>How This Relates to Other Romance Scams</h2><div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800"><div className="overflow-x-auto"><table className="w-full min-w-[680px] text-left text-sm"><thead className="bg-slate-950 text-white dark:bg-black"><tr><th className="px-5 py-4">Related guide</th><th className="px-5 py-4">How it relates</th><th className="px-5 py-4">Full guide</th></tr></thead><tbody className="divide-y divide-slate-200 dark:divide-slate-800">{comparisonRows.map((row, index) => <tr key={row.title} className={index % 2 === 0 ? 'bg-white dark:bg-slate-950' : 'bg-slate-50 dark:bg-slate-900'}><th scope="row" className="px-5 py-4 font-semibold text-slate-950 dark:text-white">{row.title}</th><td className="px-5 py-4 text-slate-600 dark:text-slate-300">{row.body}</td><td className="px-5 py-4"><Link href={row.href} className="inline-flex items-center gap-1 font-bold text-red-700 hover:underline dark:text-red-300">Read guide <ArrowRight className="h-3.5 w-3.5" /></Link></td></tr>)}</tbody></table></div></div></section>

          <section aria-labelledby="related-heading"><p className="text-xs font-black uppercase tracking-[0.18em] text-red-700 dark:text-red-400">Related guides</p><h2 id="related-heading" className={`${sectionTitleClass} mt-3`}>Keep Exploring</h2><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{relatedGuides.map((item) => <Link key={item.href} href={item.href} className="group rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-0.5 hover:border-red-300 hover:shadow-md dark:border-slate-800 dark:hover:border-red-800"><div className="flex items-start justify-between gap-4"><div><h3 className="font-bold text-slate-950 dark:text-white">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.body}</p></div><ArrowRight className="mt-1 h-5 w-5 shrink-0 text-red-700 transition group-hover:translate-x-1 dark:text-red-400" /></div></Link>)}</div></section>

          <section aria-labelledby="tools-heading" className="rounded-3xl bg-gradient-to-br from-red-950 to-slate-950 px-6 py-10 text-white sm:px-10 sm:py-12"><p className="text-xs font-black uppercase tracking-[0.18em] text-red-300">Take action now</p><h2 id="tools-heading" className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Report, Verify, and Get Support</h2><div className="mt-9 grid gap-5 md:grid-cols-3">{tools.map(({ icon: Icon, title, body, href, report, label, external }) => report ? <div key={title} className="rounded-2xl border border-red-800 bg-white/5 p-6"><Icon className="h-7 w-7 text-red-300" /><h3 className="mt-4 font-bold">{title}</h3><p className="mt-2 min-h-16 text-sm leading-6 text-slate-300">{body}</p><ReportScamButton className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-red-300 hover:text-red-200">{label} <ArrowRight className="h-4 w-4" /></ReportScamButton></div> : external ? <a key={href} href={href} target="_blank" rel="noreferrer" className="group rounded-2xl border border-red-800 bg-white/5 p-6 hover:bg-white/10"><Icon className="h-7 w-7 text-red-300" /><h3 className="mt-4 font-bold">{title}</h3><p className="mt-2 min-h-16 text-sm leading-6 text-slate-300">{body}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-red-300">{label} <ExternalLink className="h-4 w-4" /></span></a> : <Link key={href} href={href!} className="group rounded-2xl border border-red-800 bg-white/5 p-6 hover:bg-white/10"><Icon className="h-7 w-7 text-red-300" /><h3 className="mt-4 font-bold">{title}</h3><p className="mt-2 min-h-16 text-sm leading-6 text-slate-300">{body}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-red-300">{label} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span></Link>)}</div></section>

          <section aria-labelledby="alerts-heading" className="rounded-3xl border border-slate-200 bg-slate-50 p-7 dark:border-slate-800 dark:bg-slate-900 sm:p-10"><div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center"><div><div className="flex items-center gap-2 text-slate-700 dark:text-slate-300"><MonitorSmartphone className="h-5 w-5" /><p className="text-xs font-black uppercase tracking-[0.16em]">Sextortion alerts</p></div><h2 id="alerts-heading" className="mt-3 text-2xl font-black text-slate-950 dark:text-white">Check current scam warnings</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-slate-700 dark:text-slate-300">New tactics and operations are identified constantly. Check the live alert feed rather than relying on any static list.</p></div><Link href="/scam-alerts" className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-slate-800 px-5 py-3 text-sm font-bold text-white hover:bg-slate-900">View scam alerts <ArrowRight className="h-4 w-4" /></Link></div></section>

          <section aria-labelledby="faq-heading" className="mx-auto max-w-4xl"><div className="text-center"><p className="text-xs font-black uppercase tracking-[0.18em] text-red-700 dark:text-red-400">Quick answers</p><h2 id="faq-heading" className={`${sectionTitleClass} mt-3`}>Frequently Asked Questions About Sextortion</h2></div><div className="mt-9 space-y-3">{FAQ_ITEMS.map((item) => <details key={item.question} className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-red-300 open:shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:open:border-red-800"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold text-slate-950 dark:text-white">{item.question}<span aria-hidden="true" className="text-xl text-red-700 transition group-open:rotate-45 dark:text-red-400">+</span></summary><p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-6 text-slate-600 dark:border-slate-800 dark:text-slate-300">{item.answer}</p></details>)}</div></section>

          <section className="rounded-3xl border border-slate-200 bg-slate-50 p-7 dark:border-slate-800 dark:bg-slate-900 sm:p-10"><div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center"><div><p className="text-xs font-black uppercase tracking-[0.16em] text-red-700 dark:text-red-400">Before you go</p><h2 className="mt-2 max-w-2xl text-2xl font-black text-slate-950 dark:text-white">This happened to you. It does not define you.</h2><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">Free, confidential support: iCall (9152987821) and Vandrevala Foundation (1860-2662-345). You do not have to go through this alone.</p></div><ReportScamButton className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-red-700 px-5 py-3 text-sm font-bold text-white hover:bg-red-800"><ShieldAlert className="h-4 w-4" /> Report now</ReportScamButton></div></section>

          <RelatedTopics currentPath={PAGE_PATH} clusterId="romance-scams" />
        </div>
      </article>
    </DefaultLayout>
  )
}
