import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  AlertTriangle,
  ArrowRight,
  Bot,
  Building2,
  Check,
  CheckCircle2,
  Clock3,
  ExternalLink,
  Globe2,
  Layers3,
  MessageCircleWarning,
  Phone,
  SearchCheck,
  ShieldAlert,
  Smartphone,
  Star,
  ThumbsUp,
  TriangleAlert,
  WalletCards,
  X,
} from 'lucide-react'
import DefaultLayout from '@/components/DefaultLayout'
import RelatedTopics from '@/components/RelatedTopics'
import ReportScamButton from '@/components/ReportScamButton'
import {
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  jsonLd,
  organizationRef,
  webPageSchema,
} from '@/lib/seo/schema'

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://rakshaai.co').replace(/\/$/, '')
const PAGE_PATH = '/scams/job-scams/task-scam'
const CANONICAL = `${SITE_URL}${PAGE_PATH}`
const HERO_IMAGE = '/blog/telegram-task-scam-india/telegram-task-scam-victim.webp'
const TITLE = "Task Scam India 2026 - 'Like & Earn' Fraud, Boosted Tasks & How to Get Out"
const DESCRIPTION =
  "Like YouTube videos, rate hotels, review products - get paid small amounts. Then 'boosted tasks' demand deposits. Telegram group vanishes. Full 4-stage scam, 8 red flags & India guide."

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
    images: [{ url: HERO_IMAGE, width: 1400, height: 788, alt: 'Telegram task scam demanding a boosted-task deposit' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [HERO_IMAGE],
  },
  other: { 'geo.region': 'IN', language: 'en-IN' },
}

const quickFacts = [
  { value: '100+', label: 'Task and part-time job fraud websites recommended for blocking by I4C', source: 'MHA · Dec 2023' },
  { value: '₹0', label: 'What a legitimate task platform should charge you to unlock earnings', source: 'Safety rule' },
  { value: '1930', label: 'National helpline for immediate financial cyber-fraud reporting', source: 'MHA / I4C' },
  { value: '4 stages', label: 'Invitation, real small payouts, deposit escalation and blocked withdrawal', source: 'Scam pattern' },
]

const stages = [
  {
    title: 'The invitation',
    body:
      "A Telegram group, WhatsApp channel, social-media message or ad promotes an 'online task earning platform'. The group appears busy, with admins, task announcements and screenshots showing members earning money.",
  },
  {
    title: 'Real small payouts build trust',
    body:
      'You like videos, rate places or submit screenshots and receive a small real payment. That payout is deliberately affordable for the operator and makes the platform feel safe enough for you to risk more later.',
  },
  {
    title: 'The boosted-task deposit trap',
    body:
      "A premium or boosted task requires a deposit to activate. The displayed return rises with each deposit, and a supervisor pushes you toward larger rounds. The work has turned into 'pay to earn'.",
  },
  {
    title: 'Withdrawal is blocked or the group vanishes',
    body:
      'The dashboard demands another tax, correction or upgrade payment. The admin stops replying, the group is deleted, or the website disappears. The displayed balance was never freely withdrawable money.',
  },
]

const taskTypes = [
  {
    icon: ThumbsUp,
    title: 'YouTube likes and subscriptions',
    task: 'Like, comment on or subscribe to specified channels, then submit screenshots.',
    reason: 'The engagement is visible, which makes the task appear measurable and genuine.',
    risk: 'Coordinated artificial engagement can violate platform rules and put your account at risk.',
  },
  {
    icon: Star,
    title: 'Google hotel ratings',
    task: 'Post five-star ratings or reviews for hotels and places you have never visited.',
    reason: 'Ratings look like familiar market-research work while creating real value for review manipulation.',
    risk: 'The false review is tied to your Google identity and can be removed with account penalties.',
  },
  {
    icon: Smartphone,
    title: 'Product and app reviews',
    task: 'Review products you did not purchase or rate apps you did not genuinely use.',
    reason: 'Paid user-generated content exists, so the request can sound like legitimate freelance work.',
    risk: 'Fake reviews and coordinated ratings violate marketplace and app-store policies.',
  },
]

const redFlags = [
  ['A deposit unlocks higher-paying tasks', 'Legitimate work pays you. It does not require your money before you can earn more.'],
  ['The operation lives in Telegram or WhatsApp', 'There is no independently verifiable company, address, support team or contractual relationship.'],
  ['Tasks manipulate public ratings or engagement', 'Scripted likes and false reviews are not ordinary freelance work and can put your accounts at risk.'],
  ['The supervisor only uses a chat-app identity', 'There is no corporate email, independently listed phone number or verifiable employment history.'],
  ['Small early payments arrive unusually fast', 'Real payments are part of the trust-building phase and do not prove the platform is legitimate.'],
  ['Group members post dramatic earnings screenshots', 'The accounts and screenshots may be controlled or staged by the same operators.'],
  ['Deposit amounts increase after every success', 'The progression from a small activation fee to much larger rounds is the core extraction mechanism.'],
  ['You earn by recruiting depositors', 'Recruitment rewards make the structure even more dependent on money from new participants.'],
]

const verificationSteps = [
  {
    title: 'Check the inviting number and admin',
    body: "Search the phone number that sent the invitation. Preserve the Telegram username, group link and admin profile even if the operator does not expose a phone number.",
    href: '/phone-number-checker',
    label: 'Check number',
    icon: Phone,
  },
  {
    title: "Verify the platform's legal identity",
    body: 'Check its site, domain history, official app listing, company name and MCA records. A polished dashboard is not proof that a legal company operates behind it.',
    href: '/website-safety-checker',
    label: 'Check platform',
    icon: Building2,
  },
  {
    title: 'Apply the deposit-and-return test',
    body: 'If your promised return increases with the amount you deposit, you are being offered a financial return—not ordinary task wages. Do not fund another round.',
    icon: WalletCards,
  },
  {
    title: 'Check whether the task itself is legitimate',
    body: 'Do not post a review for a place you never visited or a product you never used. Coordinated likes, reviews and ratings may violate the target platform rules.',
    icon: SearchCheck,
  },
  {
    title: 'Compare it with a genuine gig platform',
    body: 'A legitimate service has transparent terms, independently reachable support and a clear business model. Your earnings should come from work completed—not from increasing your deposit.',
    icon: CheckCircle2,
  },
]

const recoverySteps = [
  {
    title: 'Stop depositing and call 1930',
    body: 'Do not pay a withdrawal, tax, correction or recovery fee. Give the helpline the recipient accounts, UPI IDs, transaction amounts and times as soon as possible.',
  },
  {
    title: 'Capture the group before it disappears',
    body: 'Screenshot or screen-record the group title, invite link, admin profiles, task instructions, payment demands, website and dashboard. Export or preserve chats where possible.',
  },
  {
    title: 'File at cybercrime.gov.in',
    body: 'Select the closest online job or financial cyber-fraud category and attach every payment reference, group identifier, phone number, URL and screenshot.',
  },
  {
    title: 'Contact your bank and payment provider',
    body: 'Report the transactions as fraud and follow the dispute process. Keep the bank complaint and cybercrime acknowledgement numbers together.',
  },
  {
    title: 'Escalate with documented evidence',
    body: 'Take the complaint reference to cybercrime police where needed. Report the phone numbers, UPI IDs, group link and platform URL to help warn other users.',
  },
]

const responseTimeline = [
  ['Immediately', 'Stop paying and capture the entire group, dashboard and admin profiles.'],
  ['As soon as possible', 'Call 1930 with every payment and beneficiary detail.'],
  ['Within 24 hours', 'File at cybercrime.gov.in and contact your bank or payment provider.'],
  ['After filing', 'Preserve acknowledgement numbers and provide any additional evidence requested.'],
  ['Ongoing', 'Ignore recovery agents asking for another fee and report new contact attempts.'],
]

const verifiedFacts = [
  ['Task and part-time job fraud sites recommended for blocking', 'More than 100', 'MHA / I4C · Dec 2023'],
  ['Contact channels described by the government', 'WhatsApp and Telegram', 'MHA / I4C'],
  ['Task examples named by the government', 'Video likes, subscriptions and map ratings', 'MHA / I4C'],
  ['Fake CAPTCHA-job complaint trend', 'Significant rise reported', 'I4C · Apr 2025'],
  ['Fee labels in the I4C advisory', 'Registration, training and security fees', 'I4C · Apr 2025'],
  ['Immediate reporting channel', '1930 and cybercrime.gov.in', 'MHA / I4C'],
]

const officialSources = [
  {
    title: 'MHA action on task-based part-time job fraud',
    href: 'https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=1982936',
  },
  {
    title: 'I4C advisory on fake CAPTCHA-filling jobs',
    href: 'https://cybercrime.gov.in/Webform/theme/resources/advisories/ADVISORY%20TAU-ADV-004_Captcha%20Filling%20Fraud_08.04.2025.pdf',
  },
  {
    title: 'National Cybercrime Reporting Portal: Report Suspect',
    href: 'https://www.cybercrime.gov.in/webform/cyber_suspect.aspx',
  },
]

const relatedGuides = [
  {
    title: 'WhatsApp & Telegram Job Offer Scam',
    body: 'A fake work-from-home role with no real hiring process. This task-scam guide focuses on platform-based earning and escalating deposits.',
    href: '/scams/job-scams/whatsapp-job-scam',
  },
  {
    title: 'Advance Fee Job Registration Fraud',
    body: 'A formal offer-letter process that demands registration, verification, training, uniform or equipment fees before joining.',
    href: '/scams/job-scams/advance-fee-job-fraud',
  },
  {
    title: 'Fake Company / Fake HR Portal Scam',
    body: 'A dedicated website impersonating TCS, Infosys or Wipro, with a fake Google Meet interview and a forged offer letter before laptop or clearance fees.',
    href: '/scams/job-scams/fake-company-portal',
  },
  {
    title: 'MLM / Pyramid Scheme Scam',
    body: 'A recruitment-based "business opportunity" funded by joining fees and starter packs, rather than a task platform with deposit-to-unlock earnings.',
    href: '/scams/job-scams/mlm-pyramid-scam',
  },
  {
    title: 'Telegram Task Scam Article',
    body: 'A narrative walkthrough of Telegram groups, fake co-workers, dashboards and blocked withdrawals.',
    href: '/blog/telegram-task-scam-india',
  },
  {
    title: 'Job Scams India Hub',
    body: 'Compare task scams with fake job offers, advance fees, recruitment portals and overseas job rackets.',
    href: '/scams/job-scams',
  },
]

const tools = [
  {
    icon: Phone,
    title: 'Phone Number Checker',
    body: "Search the inviting number or task supervisor's number for community fraud reports.",
    href: '/phone-number-checker',
    label: 'Check a number',
  },
  {
    icon: Globe2,
    title: 'Website Safety Checker',
    body: 'Inspect the task website or dashboard URL before opening an account or depositing.',
    href: '/website-safety-checker',
    label: 'Check a website',
  },
  {
    icon: WalletCards,
    title: 'UPI ID Checker',
    body: 'Search the beneficiary UPI ID before sending an activation or boosted-task deposit.',
    href: '/upi-id-checker',
    label: 'Check a UPI ID',
  },
]

const FAQ_ITEMS = [
  {
    question: 'What is a task scam and how does it work in India?',
    answer:
      "A task scam offers small payments for simple online actions, often inside a Telegram or WhatsApp group. After real early payouts build trust, 'boosted tasks' require deposits. The required amount rises, withdrawals are blocked, and the group or platform eventually disappears.",
  },
  {
    question: 'Why does the task scam require me to deposit money to earn more?',
    answer:
      'The deposit is the extraction mechanism. The early tasks and small payments create confidence, while the boosted round shifts the relationship from being paid for work to paying for a promised return. A legitimate task platform does not need workers to pre-fund their earnings.',
  },
  {
    question: 'How do I identify a genuine task platform versus a task scam?',
    answer:
      'Stop if a deposit unlocks tasks, earnings depend on how much you fund, the operator only exists in a chat group, the company cannot be independently verified, or the tasks involve false reviews and coordinated engagement. A polished app or small payout does not overcome those signals.',
  },
  {
    question: 'Why can the Telegram group disappear overnight?',
    answer:
      'Group owners can delete or close their communities and deactivate accounts quickly. Preserve the group title, invite link, admin usernames, chat history, payment instructions and dashboard before confronting or blocking the operator.',
  },
  {
    question: 'I received real payments. Does that mean the platform is legitimate?',
    answer:
      'No. Small real payments are a known trust-building technique. They lower your caution before the operator requests a much larger deposit. Judge the platform by its legal identity, business model and withdrawal rules—not by a small early payout.',
  },
  {
    question: 'Can I recover money lost in a task scam?',
    answer:
      'Recovery is not guaranteed, but rapid reporting can help. Stop paying, call 1930, preserve the group and transaction evidence, file at cybercrime.gov.in, contact your bank or payment provider, and follow police instructions associated with the complaint.',
  },
  {
    question: 'How do I report a task scam in India?',
    answer:
      'Call 1930 for financial cyber fraud, file at cybercrime.gov.in, contact your bank, and report suspicious WhatsApp numbers, Telegram handles, phone numbers and websites through the official Report Suspect facility. Keep every UPI ID and transaction reference.',
  },
  {
    question: 'Are fake YouTube likes, hotel reviews and app ratings allowed?',
    answer:
      'Coordinated artificial engagement and reviews that do not reflect a genuine experience can violate the target platform policies and may lead to content removal or account restrictions. Do not use your personal account to post claims you cannot honestly make.',
  },
  {
    question: 'What makes a task scam different from a legitimate gig platform?',
    answer:
      'On a legitimate platform, earnings come from completed services or skilled work. In a task scam, the displayed earnings grow mainly when you deposit more money. Legitimate services also have an independently verifiable operator, transparent terms and support outside a private chat group.',
  },
]

const schemas = [
  webPageSchema({ name: TITLE, description: DESCRIPTION, url: PAGE_PATH }),
  articleSchema({
    headline: "Task Scam India 2026 - 'Like and Earn' Fraud, Boosted Task Deposits & Why Telegram Groups Vanish",
    description: DESCRIPTION,
    url: PAGE_PATH,
    image: HERO_IMAGE,
    datePublished: '2026-07-22',
    dateModified: '2026-07-22',
    author: organizationRef(),
    section: 'Job Scams',
    keywords: [
      'task scam india',
      'like and earn scam india',
      'telegram task scam india',
      'boosted task scam india',
      'youtube like earn money scam india',
      'google hotel rating scam india',
    ],
  }),
  faqPageSchema(FAQ_ITEMS),
  breadcrumbListSchema([
    { name: 'Home', url: '/' },
    { name: 'Scam Categories', url: '/scams' },
    { name: 'Job Scams India', url: '/scams/job-scams' },
    { name: "Task Scam / 'Like and Earn' Fraud", url: PAGE_PATH },
  ]),
  {
    '@context': 'https://schema.org' as const,
    '@type': 'HowTo',
    '@id': `${CANONICAL}#how-to-identify`,
    name: 'How to identify a task scam in India',
    description: 'Five checks to identify a fake task platform before paying a boosted-task deposit.',
    totalTime: 'PT5M',
    step: verificationSteps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.title,
      text: step.body,
    })),
  },
]

const sectionTitleClass = 'text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl'
const sectionIntroClass = 'mt-4 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300'

export default function TaskScamPage() {
  return (
    <DefaultLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schemas) }} />

      <article className="bg-white dark:bg-slate-950">
        <header className="relative overflow-hidden border-b border-violet-100 bg-gradient-to-br from-violet-50 via-white to-cyan-50 px-4 py-14 dark:border-violet-950 dark:from-slate-950 dark:via-slate-900 dark:to-violet-950/50 sm:py-20">
          <div aria-hidden="true" className="absolute -right-20 -top-28 h-96 w-96 rounded-full bg-violet-300/20 blur-3xl" />
          <div aria-hidden="true" className="absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="relative mx-auto max-w-6xl">
            <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <Link className="hover:text-violet-700 dark:hover:text-violet-300" href="/">Home</Link><span aria-hidden="true">›</span>
              <Link className="hover:text-violet-700 dark:hover:text-violet-300" href="/scams">Scam Categories</Link><span aria-hidden="true">›</span>
              <Link className="hover:text-violet-700 dark:hover:text-violet-300" href="/scams/job-scams">Job Scams India</Link><span aria-hidden="true">›</span>
              <span className="text-slate-800 dark:text-slate-200">Task Scam / Like and Earn Fraud</span>
            </nav>

            <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-violet-800 shadow-sm dark:border-violet-800 dark:bg-slate-900/70 dark:text-violet-300">
                  <Layers3 className="h-4 w-4" /> Task Platform Fraud Guide
                </div>
                <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
                  Task Scam India 2026
                  <span className="mt-2 block bg-gradient-to-r from-violet-700 to-cyan-700 bg-clip-text text-transparent dark:from-violet-300 dark:to-cyan-300">Like &amp; Earn Fraud, Boosted Deposits &amp; Why the Group Vanishes</span>
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                  A task scam pays small real amounts for likes, ratings or reviews, then introduces a boosted task that requires your money first. The deposit demands grow, the balance becomes impossible to withdraw, and the Telegram group or platform disappears.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link href="/phone-number-checker" className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-700 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-violet-900/15 transition hover:-translate-y-0.5 hover:bg-violet-800">
                    <SearchCheck className="h-5 w-5" /> Check number free <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/website-safety-checker" className="inline-flex items-center justify-center gap-2 rounded-xl border border-violet-200 bg-white px-6 py-3.5 text-sm font-bold text-violet-800 shadow-sm transition hover:-translate-y-0.5 hover:bg-violet-50 dark:border-violet-800 dark:bg-slate-900 dark:text-violet-300 dark:hover:bg-slate-800">
                    <Globe2 className="h-5 w-5" /> Check task platform
                  </Link>
                </div>
                <p className="mt-4 text-xs font-medium text-slate-500 dark:text-slate-400">Free · No login · Built for India</p>
              </div>

              <figure className="overflow-hidden rounded-3xl border border-violet-200 bg-white shadow-2xl shadow-violet-950/10 dark:border-violet-900 dark:bg-slate-900">
                <Image src={HERO_IMAGE} alt="Task scam victim facing a boosted-task deposit demand in a Telegram group" width={1400} height={788} className="aspect-[16/9] w-full object-cover" priority />
                <figcaption className="px-5 py-4 text-xs leading-5 text-slate-500 dark:text-slate-400">The trap begins after the early payouts: pay a deposit to unlock the next task.</figcaption>
              </figure>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="rounded-2xl border border-white/80 bg-white/90 p-5 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/85">
                  <p className="text-3xl font-black text-violet-700 dark:text-violet-300">{fact.value}</p>
                  <p className="mt-2 text-sm leading-5 text-slate-700 dark:text-slate-300">{fact.label}</p>
                  <p className="mt-2 text-[11px] font-bold uppercase tracking-wide text-slate-400">{fact.source}</p>
                </div>
              ))}
            </div>
          </div>
        </header>

        <div className="border-b border-red-200 bg-red-50 px-4 py-5 dark:border-red-900 dark:bg-red-950/30">
          <div className="mx-auto flex max-w-6xl items-start gap-3 text-sm leading-6 text-red-950 dark:text-red-100">
            <TriangleAlert className="mt-0.5 h-5 w-5 shrink-0 text-red-700 dark:text-red-400" />
            <p><strong>The one rule:</strong> any task platform that asks you to deposit money before you can earn more is a scam. A genuine platform pays for completed work; it does not sell access to higher-paying tasks.</p>
          </div>
        </div>

        <div className="mx-auto max-w-6xl space-y-24 px-4 py-16 sm:px-6 lg:px-8">
          <section aria-labelledby="distinction-heading" className="rounded-3xl border border-cyan-200 bg-cyan-50 p-7 dark:border-cyan-900 dark:bg-cyan-950/30 sm:p-9">
            <div className="flex items-start gap-4">
              <MessageCircleWarning className="mt-1 h-7 w-7 shrink-0 text-cyan-800 dark:text-cyan-300" />
              <div>
                <h2 id="distinction-heading" className="text-xl font-black text-slate-950 dark:text-white">Task scam or WhatsApp job-offer scam?</h2>
                <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300"><strong>Task scam:</strong> a platform gives you real micro-tasks and small payouts before escalating deposit demands. <strong>WhatsApp job scam:</strong> a recruiter offers a fake work-from-home role without a genuine hiring process. The delivery channels overlap, but the victim journey is different.</p>
                <Link href="/scams/job-scams/whatsapp-job-scam" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-cyan-900 hover:underline dark:text-cyan-300">Compare the WhatsApp job-offer scam <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </div>
          </section>

          <section aria-labelledby="mechanism-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-violet-700 dark:text-violet-400">The full mechanism</p>
            <h2 id="mechanism-heading" className={`${sectionTitleClass} mt-3`}>The 4-Stage Task Scam: How It Pulls You In</h2>
            <p className={sectionIntroClass}>The early work and payouts are designed to feel normal. The scam becomes visible when earning is made conditional on a deposit.</p>
            <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
              <ol className="space-y-4">
                {stages.map((stage, index) => (
                  <li key={stage.title} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-700 text-sm font-black text-white">{index + 1}</span>
                    <div><h3 className="font-bold text-slate-950 dark:text-white">{stage.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{stage.body}</p></div>
                  </li>
                ))}
              </ol>
              <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg dark:border-slate-800 dark:bg-slate-900">
                <Image src="/blog/telegram-task-scam-india/telegram-scam-how-it-works.webp" alt="Diagram showing the stages of a Telegram task scam from invitation to blocked withdrawal" width={1400} height={788} className="h-auto w-full object-cover" />
                <figcaption className="px-5 py-4 text-xs leading-5 text-slate-500 dark:text-slate-400">The same trust-building sequence repeats across task names and platforms.</figcaption>
              </figure>
            </div>
          </section>

          <section aria-labelledby="escalation-heading" className="rounded-3xl bg-slate-950 px-6 py-10 text-white sm:px-10 sm:py-12">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">Why early payouts do not prove legitimacy</p>
            <h2 id="escalation-heading" className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">The Deposit Escalation Ladder</h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">The operator can afford a small payout if it persuades you to risk a much larger amount. The displayed return rises, but your ability to withdraw disappears.</p>
            <div className="mt-9 grid gap-3 sm:grid-cols-5">
              {[
                ['₹50–₹200', 'Real task payout', 'bg-cyan-500'],
                ['₹500–₹2K', 'First deposit', 'bg-violet-500'],
                ['₹5K–₹10K', 'Boosted round', 'bg-fuchsia-500'],
                ['₹20K+', 'Pressure escalates', 'bg-orange-500'],
                ['Blocked', 'Pay again or lose all', 'bg-red-600'],
              ].map(([amount, label, color], index) => (
                <div key={amount} className="relative rounded-2xl border border-slate-800 bg-white/5 p-5">
                  <span className={`mb-4 block h-2 w-10 rounded-full ${color}`} />
                  <p className="text-xl font-black">{amount}</p>
                  <p className="mt-1 text-sm text-slate-300">{label}</p>
                  {index < 4 ? <ArrowRight className="absolute -right-2.5 top-1/2 hidden h-5 w-5 text-slate-500 sm:block" /> : null}
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="task-types-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-violet-700 dark:text-violet-400">Trust-building tasks</p>
            <h2 id="task-types-heading" className={`${sectionTitleClass} mt-3`}>3 Task Types Used in India—and Why They Are Chosen</h2>
            <div className="mt-9 grid gap-5 lg:grid-cols-3">
              {taskTypes.map(({ icon: Icon, title, task, reason, risk }) => (
                <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-violet-800 dark:bg-violet-950 dark:text-violet-300"><Icon className="h-6 w-6" /></div>
                  <h3 className="mt-5 text-lg font-bold text-slate-950 dark:text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{task}</p>
                  <div className="mt-5 rounded-xl bg-slate-50 p-4 text-sm leading-6 dark:bg-slate-950"><strong className="text-slate-950 dark:text-white">Why it feels real:</strong> <span className="text-slate-600 dark:text-slate-300">{reason}</span></div>
                  <div className="mt-3 flex gap-2 text-xs leading-5 text-red-700 dark:text-red-300"><AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />{risk}</div>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="red-flags-heading" className="rounded-3xl bg-gradient-to-br from-red-950 to-violet-950 px-6 py-10 text-white sm:px-10 sm:py-12">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-red-300">Before you deposit</p>
            <h2 id="red-flags-heading" className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">8 Red Flags of a Task Scam or Like-and-Earn Fraud</h2>
            <ol className="mt-9 grid gap-4 md:grid-cols-2">
              {redFlags.map(([title, body], index) => (
                <li key={title} className="flex gap-4 rounded-2xl border border-red-800/70 bg-black/15 p-5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-sm font-black text-red-900">{index + 1}</span>
                  <div><h3 className="font-bold">{title}</h3><p className="mt-1 text-sm leading-6 text-red-100/85">{body}</p></div>
                </li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="identify-heading">
            <div className="grid gap-10 lg:grid-cols-[1fr_310px]">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-violet-700 dark:text-violet-400">Five quick checks</p>
                <h2 id="identify-heading" className={`${sectionTitleClass} mt-3`}>How to Identify Whether a Task Platform Is Legitimate</h2>
                <ol className="mt-9 space-y-4">
                  {verificationSteps.map(({ title, body, href, label, icon: Icon }, index) => (
                    <li key={title} className="grid gap-4 rounded-2xl border border-slate-200 p-5 dark:border-slate-800 sm:grid-cols-[48px_1fr_auto] sm:items-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-violet-800 dark:bg-violet-950 dark:text-violet-300"><Icon className="h-5 w-5" /></div>
                      <div><p className="text-xs font-black uppercase tracking-wide text-violet-700 dark:text-violet-400">Step {index + 1}</p><h3 className="mt-1 font-bold text-slate-950 dark:text-white">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{body}</p></div>
                      {href && label ? <Link href={href} className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-violet-200 px-4 py-2.5 text-sm font-bold text-violet-800 hover:bg-violet-50 dark:border-violet-800 dark:text-violet-300 dark:hover:bg-violet-950">{label} <ArrowRight className="h-3.5 w-3.5" /></Link> : null}
                    </li>
                  ))}
                </ol>
              </div>
              <figure className="h-fit overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <Image src="/blog/telegram-task-scam-india/telegram-scam-red-flags.webp" alt="Red flags for identifying a Telegram task scam before depositing money" width={900} height={1125} className="h-auto w-full object-cover" />
                <figcaption className="px-5 py-4 text-xs leading-5 text-slate-500 dark:text-slate-400">A real payout does not cancel the deposit warning.</figcaption>
              </figure>
            </div>
          </section>

          <section aria-labelledby="comparison-heading">
            <div className="grid overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 lg:grid-cols-2">
              <div className="bg-emerald-50 p-7 dark:bg-emerald-950/30 sm:p-10">
                <CheckCircle2 className="h-8 w-8 text-emerald-700 dark:text-emerald-400" />
                <h2 id="comparison-heading" className="mt-5 text-2xl font-black text-slate-950 dark:text-white">Legitimate task or gig platform</h2>
                <ul className="mt-6 space-y-4 text-sm leading-6 text-slate-700 dark:text-slate-300">
                  {['Pays for completed work without requiring an earnings deposit.', 'Has an independently verifiable company, terms and support channels.', 'Work creates a genuine service or deliverable rather than false engagement.', 'Earnings grow with completed work or skill—not with the amount you fund.'].map((item) => <li key={item} className="flex gap-3"><Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />{item}</li>)}
                </ul>
              </div>
              <div className="bg-red-50 p-7 dark:bg-red-950/30 sm:p-10">
                <ShieldAlert className="h-8 w-8 text-red-700 dark:text-red-400" />
                <h2 className="mt-5 text-2xl font-black text-slate-950 dark:text-white">Task scam platform</h2>
                <ul className="mt-6 space-y-4 text-sm leading-6 text-slate-700 dark:text-slate-300">
                  {['Admin, co-workers and support exist only inside a private group.', 'A deposit, activation fee or correction payment unlocks earnings.', 'Tasks involve scripted likes, false reviews or coordinated ratings.', 'The displayed balance rises with deposits but cannot be freely withdrawn.'].map((item) => <li key={item} className="flex gap-3"><X className="mt-0.5 h-5 w-5 shrink-0 text-red-700" />{item}</li>)}
                </ul>
              </div>
            </div>
            <div className="mt-6 flex flex-col items-stretch justify-between gap-5 rounded-2xl bg-violet-800 p-6 text-white sm:flex-row sm:items-center">
              <div><p className="text-lg font-black">Suspicious task invite?</p><p className="mt-1 text-sm text-violet-100">Check the number and platform before joining the group.</p></div>
              <div className="flex flex-col gap-3 sm:flex-row"><Link href="/phone-number-checker" className="rounded-xl bg-white px-5 py-3 text-center text-sm font-bold text-violet-900 hover:bg-violet-50">Check number</Link><Link href="/website-safety-checker" className="rounded-xl border border-violet-500 px-5 py-3 text-center text-sm font-bold text-white hover:bg-violet-700">Check platform</Link></div>
            </div>
          </section>

          <section aria-labelledby="recovery-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-red-700 dark:text-red-400">If you already paid</p>
            <h2 id="recovery-heading" className={`${sectionTitleClass} mt-3`}>Task Deposit Recovery and Reporting Guide</h2>
            <p className={sectionIntroClass}>Do not pay a person claiming they can recover the balance for another fee. Preserve evidence and report through official channels.</p>
            <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
              <ol className="space-y-4">
                {recoverySteps.map((step, index) => (
                  <li key={step.title} className="flex gap-4 rounded-2xl border border-slate-200 p-5 dark:border-slate-800">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-red-100 text-sm font-black text-red-800 dark:bg-red-950 dark:text-red-300">{index + 1}</span>
                    <div><h3 className="font-bold text-slate-950 dark:text-white">{step.title}</h3><p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{step.body}</p></div>
                  </li>
                ))}
              </ol>
              <aside className="h-fit rounded-2xl bg-slate-950 p-6 text-white dark:bg-black">
                <div className="flex items-center gap-2 text-cyan-300"><Clock3 className="h-5 w-5" /><p className="text-xs font-black uppercase tracking-[0.14em]">Response timeline</p></div>
                <div className="mt-6 space-y-5">
                  {responseTimeline.map(([time, action]) => <div key={time} className="border-l-2 border-cyan-400 pl-4"><p className="font-bold text-cyan-300">{time}</p><p className="mt-1 text-sm leading-5 text-slate-300">{action}</p></div>)}
                </div>
              </aside>
            </div>
            <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-2xl border border-red-200 bg-red-50 p-6 dark:border-red-900 dark:bg-red-950/30 sm:flex-row sm:items-center">
              <div><h3 className="text-lg font-black text-red-950 dark:text-red-100">Report the task scam before more people deposit</h3><p className="mt-1 text-sm text-red-800 dark:text-red-200">Keep the group link, admin username, UPI IDs and payment records ready.</p></div>
              <ReportScamButton className="inline-flex items-center gap-2 rounded-xl bg-red-700 px-5 py-3 text-sm font-bold text-white hover:bg-red-800"><ShieldAlert className="h-4 w-4" /> Report this scam <ArrowRight className="h-4 w-4" /></ReportScamButton>
            </div>
          </section>

          <section aria-labelledby="facts-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-violet-700 dark:text-violet-400">Verified public information</p>
            <h2 id="facts-heading" className={`${sectionTitleClass} mt-3`}>What Official India Sources Confirm</h2>
            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[640px] text-left text-sm">
                  <thead className="bg-slate-950 text-white dark:bg-black"><tr><th className="px-5 py-4">Official finding</th><th className="px-5 py-4">Detail</th><th className="px-5 py-4">Source</th></tr></thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                    {verifiedFacts.map(([metric, data, source], index) => <tr key={metric} className={index % 2 === 0 ? 'bg-white dark:bg-slate-950' : 'bg-slate-50 dark:bg-slate-900'}><th scope="row" className="px-5 py-4 font-semibold text-slate-950 dark:text-white">{metric}</th><td className="px-5 py-4 font-bold text-violet-700 dark:text-violet-300">{data}</td><td className="px-5 py-4 text-slate-500 dark:text-slate-400">{source}</td></tr>)}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              {officialSources.map((source) => <a key={source.href} href={source.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 hover:border-violet-300 hover:text-violet-800 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-violet-800 dark:hover:text-violet-300">{source.title} <ExternalLink className="h-3 w-3" /></a>)}
            </div>
            <p className="mt-4 text-xs leading-5 text-slate-500 dark:text-slate-400">The supplied 410%, ₹3,200 crore, ₹42,000, age-share, platform-share and recovery-rate figures are not shown because no matching primary government publication was located. Legal classification depends on the facts and should be determined by the relevant authority.</p>
          </section>

          <section aria-labelledby="related-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-violet-700 dark:text-violet-400">Keep the distinction clear</p>
            <h2 id="related-heading" className={`${sectionTitleClass} mt-3`}>How Task Scams Differ from Other Job Scams</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {relatedGuides.map((item) => <Link key={item.href} href={item.href} className="group rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-0.5 hover:border-violet-300 hover:shadow-md dark:border-slate-800 dark:hover:border-violet-800"><div className="flex items-start justify-between gap-4"><div><h3 className="font-bold text-slate-950 dark:text-white">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.body}</p></div><ArrowRight className="mt-1 h-5 w-5 shrink-0 text-violet-700 transition group-hover:translate-x-1 dark:text-violet-400" /></div></Link>)}
            </div>
          </section>

          <section aria-labelledby="tools-heading" className="rounded-3xl bg-gradient-to-br from-violet-950 to-slate-950 px-6 py-10 text-white sm:px-10 sm:py-12">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">Free RakshaAI checks</p>
            <h2 id="tools-heading" className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Verify Any Task Platform</h2>
            <div className="mt-9 grid gap-5 md:grid-cols-3">
              {tools.map(({ icon: Icon, title, body, href, label }) => <Link key={href} href={href} className="group rounded-2xl border border-violet-800 bg-white/5 p-6 hover:bg-white/10"><Icon className="h-7 w-7 text-cyan-300" /><h3 className="mt-4 font-bold">{title}</h3><p className="mt-2 min-h-16 text-sm leading-6 text-slate-300">{body}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan-300">{label} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span></Link>)}
            </div>
          </section>

          <section aria-labelledby="alerts-heading" className="rounded-3xl border border-amber-200 bg-amber-50 p-7 dark:border-amber-900 dark:bg-amber-950/30 sm:p-10">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div><div className="flex items-center gap-2 text-amber-800 dark:text-amber-300"><Bot className="h-5 w-5" /><p className="text-xs font-black uppercase tracking-[0.16em]">Task-scam alerts</p></div><h2 id="alerts-heading" className="mt-3 text-2xl font-black text-slate-950 dark:text-white">Check the latest scam warnings</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-slate-700 dark:text-slate-300">Current campaigns change names, group links, phone numbers and dashboards frequently. Review recent alerts before trusting a platform.</p></div>
              <Link href="/scam-alerts" className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-amber-800 px-5 py-3 text-sm font-bold text-white hover:bg-amber-900">View scam alerts <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </section>

          <section aria-labelledby="faq-heading" className="mx-auto max-w-4xl">
            <div className="text-center"><p className="text-xs font-black uppercase tracking-[0.18em] text-violet-700 dark:text-violet-400">Quick answers</p><h2 id="faq-heading" className={`${sectionTitleClass} mt-3`}>Frequently Asked Questions About Task Scams</h2></div>
            <div className="mt-9 space-y-3">
              {FAQ_ITEMS.map((item) => <details key={item.question} className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-violet-300 open:shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:open:border-violet-800"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold text-slate-950 dark:text-white">{item.question}<span aria-hidden="true" className="text-xl text-violet-700 transition group-open:rotate-45 dark:text-violet-400">+</span></summary><p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-6 text-slate-600 dark:border-slate-800 dark:text-slate-300">{item.answer}</p></details>)}
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-slate-50 p-7 dark:border-slate-800 dark:bg-slate-900 sm:p-10">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div><p className="text-xs font-black uppercase tracking-[0.16em] text-violet-700 dark:text-violet-400">Remember</p><h2 className="mt-2 max-w-2xl text-2xl font-black text-slate-950 dark:text-white">If you have to pay to earn, stop before the next task.</h2><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">A small real payout does not make a deposit-based platform legitimate.</p></div>
              <Link href="/upi-id-checker" className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-violet-700 px-5 py-3 text-sm font-bold text-white hover:bg-violet-800"><WalletCards className="h-4 w-4" /> Check UPI ID</Link>
            </div>
          </section>

          <RelatedTopics currentPath={PAGE_PATH} clusterId="job-scams" />
        </div>
      </article>
    </DefaultLayout>
  )
}
