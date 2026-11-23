import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import DefaultLayout from '@/components/DefaultLayout'
import RelatedTopics from '@/components/RelatedTopics'
import ReportScamButton from '@/components/ReportScamButton'
import { breadcrumbListSchema, faqPageSchema, jsonLd, organizationRef, webPageSchema } from '@/lib/seo/schema'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://rakshaai.co'
const PAGE_PATH = '/scams/upi-fraud/investment-job-fraud'
const CANONICAL = `${SITE_URL}${PAGE_PATH}`
const HERO_IMAGE = '/blog/telegram-task-scam-india/fake-investment-dashboard.webp'

export const metadata: Metadata = {
  title: 'Investment & Job Fraud via UPI India 2026: How to Spot & Report',
  description:
    'Fake investment schemes and work-from-home jobs ask for a UPI deposit to start. Small early payouts build trust, then the big deposit vanishes. Learn red flags and reporting steps.',
  alternates: { canonical: CANONICAL },
  robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  openGraph: {
    title: 'Investment & Job Fraud via UPI India 2026: How to Spot & Report',
    description:
      'Telegram investment groups, task scams, fake trading apps, and work-from-home jobs use UPI deposits and small payouts to build trust.',
    url: CANONICAL,
    type: 'article',
    siteName: 'RakshaAI',
    locale: 'en_IN',
    images: [{ url: HERO_IMAGE, width: 1400, height: 1050, alt: 'Fake investment dashboard used in UPI investment fraud' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Investment & Job Fraud via UPI India 2026',
    description: 'Never make a UPI deposit to start a job, unlock tasks, or access guaranteed returns.',
    images: [HERO_IMAGE],
  },
  other: {
    'geo.region': 'IN',
    language: 'en-IN',
  },
}

const stats = [
  { value: '#1 loss', label: "Investment and job fraud is among India's highest-loss cybercrime categories" },
  { value: 'Rs 1.4L', label: 'Typical high-value investment fraud loss pattern' },
  { value: '7-14 days', label: 'Common small-payout trust-building window' },
  { value: '1930', label: 'Call immediately after the latest UPI transfer' },
]

const stages = [
  {
    title: 'Stage 1 - The lure',
    body:
      'You are invited through Telegram, WhatsApp, a fake app, job group, dating app, or LinkedIn with high returns, simple tasks, or work-from-home income.',
  },
  {
    title: 'Stage 2 - The first UPI deposit',
    body:
      'A small payment is requested to activate your account, unlock task levels, buy a data package, join a premium group, or start trading.',
  },
  {
    title: 'Stage 3 - Small payouts build trust',
    body:
      'The scammer deliberately pays small amounts at first so the platform feels real and you become comfortable making larger deposits.',
  },
  {
    title: 'Stage 4 - Withdrawal is blocked',
    body:
      'After the big deposit, withdrawals require tax clearance, compliance fees, upgrades, or one more UPI payment. The money never returns.',
  },
]

const lures = [
  'Telegram stock tips group claiming SEBI experts and guaranteed returns.',
  'Like-and-earn task platform paying for YouTube likes, reviews, follows, or ratings.',
  'Work-from-home data entry job asking for registration, software, or data package fee.',
  'Crypto or AI trading bot asking for seed capital through UPI.',
  'Pig-butchering romance or friendship scam that slowly introduces a private investment platform.',
  'MLM or pyramid scheme asking for joining fee and rewarding recruitment.',
]

const cases = [
  {
    type: 'Telegram Stock Tips Group',
    detail: 'Victim paid a small registration fee, saw a few correct tips, then paid a much larger premium-picks deposit before the group disappeared.',
  },
  {
    type: 'Like & Earn Task Scam',
    detail: 'Small tasks paid for days. A higher task level required a large UPI deposit and then withdrawals were blocked.',
  },
  {
    type: 'Pig Butchering Investment',
    detail: 'A friendly stranger built trust over weeks, introduced a fake investment dashboard, and pushed multiple UPI deposits.',
  },
  {
    type: 'Fake Trading App',
    detail: 'The app showed portfolio growth but was not a registered broker. Withdrawal failed with technical or compliance messages.',
  },
  {
    type: 'Work From Home Data Entry',
    detail: 'Candidate paid a data package fee, received impossible work, then failed a fake quality check and never got paid.',
  },
  {
    type: 'MLM / Pyramid Scheme',
    detail: 'Joining fees were collected through UPI and payouts depended on recruiting new depositors rather than real work or returns.',
  },
]

const redFlags = [
  'Any upfront UPI deposit is required to start a job, unlock tasks, or access an investment.',
  'The offer arrived from a stranger, Telegram group, WhatsApp broadcast, or unsolicited social message.',
  'Returns are guaranteed, risk-free, fixed daily, or unusually high.',
  'Withdrawal requires a tax clearance fee, compliance deposit, upgrade, or another UPI payment.',
  'The advisor, broker, employer, or company cannot be verified on official sources.',
  'Small payouts arrived early and easily, creating pressure to make a larger deposit.',
  'The group or platform uses urgency: today only, few seats, price doubles, limited batch.',
  'You earn more by recruiting others than by actual work or regulated investment returns.',
]

const rules = [
  {
    title: 'Never pay a UPI deposit to start earning',
    body:
      'A real employer pays you. A real regulated investment platform does not ask you to send money to a stranger UPI ID to unlock returns.',
  },
  {
    title: 'Verify the advisor, broker, employer, and company',
    body:
      'Check SEBI registration for investment advisors or brokers, MCA company records for employers, and official company career pages for jobs.',
  },
  {
    title: 'Check the UPI ID before any payment',
    body:
      'Investment and task scam UPI IDs are often reused across victims. Search the UPI ID before sending any registration or deposit amount.',
  },
  {
    title: 'Check the recruiter or advisor number',
    body:
      'WhatsApp, Telegram, and fake job operators reuse numbers across campaigns. Search the number before responding or paying.',
  },
  {
    title: 'Stop at the first withdrawal fee',
    body:
      'Tax clearance, compliance, account upgrade, and technical verification fees are further extraction attempts. Paying more will not unlock withdrawal.',
  },
]

const recoverySteps = [
  {
    title: 'Stop all further payments',
    body:
      'Do not pay any tax, upgrade, verification, compliance, or withdrawal fee. Screenshot the platform before it disappears.',
  },
  {
    title: 'Call 1930 immediately',
    body:
      'Share every UPI transfer amount, time, recipient UPI ID, phone number, group link, and app or website name.',
  },
  {
    title: 'File on cybercrime.gov.in',
    body:
      'Choose financial cyber fraud, online investment fraud, or task-based scam where available. Attach all transaction and chat evidence.',
  },
  {
    title: 'File SEBI SCORES for investment cases',
    body:
      'For fake stock tips, trading apps, advisors, mutual funds, or securities claims, file at scores.sebi.gov.in with platform details and payment evidence.',
  },
  {
    title: 'Contact bank, file FIR, and report to RakshaAI',
    body:
      'Raise UPI disputes with your bank, file an FIR with complaint references, and report the UPI IDs and phone numbers on RakshaAI.',
  },
]

const variants = [
  ['Telegram Stock Tips', 'Registration or premium signal fee', 'No SEBI registration or verifiable advisor.'],
  ['Like & Earn Task Scam', 'Deposit to unlock higher task levels', 'Withdrawal always needs one more deposit.'],
  ['WFH Data Entry', 'Data package or software fee', 'Work is designed to fail quality checks.'],
  ['Pig Butchering', 'Large deposits into private platform', 'Stranger builds trust before introducing investment.'],
  ['Fake Trading App', 'UPI deposit to fund fake portfolio', 'App not listed with SEBI-registered broker.'],
  ['MLM / Pyramid', 'Joining fee through UPI', 'Income depends on recruitment.'],
  ['Fake Mutual Fund', 'Minimum SIP sent to unknown UPI ID', 'Fund cannot be verified through official sources.'],
  ['Crypto AI Bot', 'Seed capital through UPI', 'Unregulated platform promises fixed returns.'],
]

const relatedScams = [
  {
    title: 'OTP & UPI PIN Fraud',
    relation: 'After trust is built, scammers may call as bank security to extract OTP or UPI PIN.',
    href: '/scams/upi-fraud/otp-fraud',
  },
  {
    title: 'Digital Arrest Scam',
    relation: 'When victims complain or try to withdraw, scammers may switch to fake police or CBI threats.',
    href: '/scams/upi-fraud/digital-arrest-scam',
  },
  {
    title: 'Fake UPI Payment Link',
    relation: 'Fake investment portals and task dashboards often arrive through payment or registration links.',
    href: '/scams/upi-fraud/fake-upi-link',
  },
  {
    title: 'Investment Scams Hub',
    relation: 'Broader guide for stock tips, crypto, fake trading apps, Ponzi schemes, and pig-butchering fraud.',
    href: '/scams/investment-scams',
  },
  {
    title: 'Job Scams Hub',
    relation: 'Broader guide for fake offer letters, WhatsApp job fraud, fake recruiters, and advance-fee jobs.',
    href: '/scams/job-scams',
  },
  {
    title: 'Crypto Scams Hub',
    relation: 'UPI-funded crypto bot and fake exchange scams overlap heavily with investment fraud.',
    href: '/scams/crypto-scams',
  },
]

const FAQ_ITEMS = [
  {
    question: 'How does investment fraud via UPI work in India?',
    answer:
      'The victim is invited to a fake investment or job platform, makes a small UPI deposit, receives small early payouts, then is pressured into a much larger deposit. Withdrawals are later blocked or made conditional on more payments.',
  },
  {
    question: 'What is a like-and-earn UPI scam?',
    answer:
      'It is a task scam where victims are paid small amounts for simple online tasks, then asked to deposit money to unlock higher-paying tasks. The dashboard shows fake earnings but withdrawals require more deposits.',
  },
  {
    question: 'What is pig butchering scam in India?',
    answer:
      'Pig butchering is a long-con investment scam where a stranger builds trust over days or weeks, introduces a fake investment platform, shows small returns, and then pushes the victim into larger deposits.',
  },
  {
    question: 'Is it legal for a job platform to charge a registration fee?',
    answer:
      'A legitimate employer or recruiter should not demand money from candidates to apply, register, receive data entry work, or unlock tasks. Upfront job deposits are a major fraud signal.',
  },
  {
    question: 'How do I verify an investment scheme in India?',
    answer:
      'Check SEBI registration for advisors and brokers, verify the company on MCA records, avoid guaranteed returns, and never transfer money to unknown UPI IDs or personal accounts.',
  },
  {
    question: 'What should I do if the platform asks for a tax clearance fee to withdraw?',
    answer:
      'Stop paying. This is the upgrade-to-withdraw trap. Screenshot all evidence, call 1930, file on cybercrime.gov.in, contact your bank, and report the UPI IDs.',
  },
  {
    question: 'How do I report investment fraud via UPI?',
    answer:
      'Call 1930, file at cybercrime.gov.in, contact your bank fraud team, file SEBI SCORES if investment-related, file an FIR, and report the scammer UPI ID and phone number on RakshaAI.',
  },
  {
    question: 'Can I recover money lost in investment or job fraud via UPI?',
    answer:
      'Recovery is difficult but more possible when the latest transfer is reported quickly. Call 1930 immediately and preserve full evidence of all UPI IDs, chats, platform screenshots, and group links.',
  },
]

const schemas = [
  webPageSchema({
    name: 'Investment & Job Fraud via UPI India 2026: How to Spot & Report',
    description: metadata.description as string,
    url: PAGE_PATH,
  }),
  breadcrumbListSchema([
    { name: 'Home', url: '/' },
    { name: 'Scams', url: '/scams' },
    { name: 'UPI Fraud', url: '/scams/upi-fraud' },
    { name: 'Investment & Job Fraud via UPI', url: PAGE_PATH },
  ]),
  faqPageSchema(FAQ_ITEMS),
  {
    '@context': 'https://schema.org' as const,
    '@type': 'Article',
    headline: 'Investment & Job Fraud via UPI India 2026',
    description: metadata.description as string,
    url: CANONICAL,
    image: `${SITE_URL}${HERO_IMAGE}`,
    author: organizationRef(),
    publisher: organizationRef(),
    datePublished: '2026-03-01',
    dateModified: '2026-07-02',
    inLanguage: 'en-IN',
    articleSection: 'UPI Fraud',
    keywords: ['investment fraud upi india', 'job fraud upi deposit india', 'task scam upi india', 'pig butchering scam india'],
  },
  {
    '@context': 'https://schema.org' as const,
    '@type': 'DefinedTerm',
    name: 'Pig butchering scam',
    description:
      'Pig butchering is a long-con investment fraud where scammers build trust over time, show fake small profits, then push victims into large deposits before blocking withdrawals.',
    url: CANONICAL,
  },
  {
    '@context': 'https://schema.org' as const,
    '@type': 'HowTo',
    name: 'How to verify an investment or job offer before paying by UPI',
    description: 'A quick verification process before sending any UPI deposit for a job or investment.',
    step: [
      { '@type': 'HowToStep', name: 'Reject upfront deposits', text: 'Do not pay to start a job, unlock tasks, or access guaranteed returns.' },
      { '@type': 'HowToStep', name: 'Verify registration', text: 'Check SEBI records for advisors and brokers, and MCA records for companies.' },
      { '@type': 'HowToStep', name: 'Check UPI ID', text: 'Search the UPI ID before making any payment.' },
      { '@type': 'HowToStep', name: 'Check phone number', text: 'Search the recruiter or advisor number before engaging.' },
    ],
  },
]

export default function InvestmentJobFraudUpiPage() {
  return (
    <DefaultLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schemas) }} />

      <section className="bg-gradient-to-br from-emerald-50 via-white to-cyan-50 px-4 py-16 dark:from-gray-950 dark:via-gray-900 dark:to-emerald-950">
        <div className="mx-auto max-w-5xl">
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            <Link href="/">Home</Link><span aria-hidden="true">/</span>
            <Link href="/scams">Scams</Link><span aria-hidden="true">/</span>
            <Link href="/scams/upi-fraud">UPI Fraud</Link><span aria-hidden="true">/</span>
            <span className="font-medium text-gray-700 dark:text-gray-300">Investment &amp; Job Fraud</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center rounded-full border border-emerald-200 bg-emerald-100 px-4 py-1.5 text-xs font-semibold text-emerald-800 dark:border-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300">
                UPI Fraud Guide
              </div>
              <h1 className="mb-5 text-4xl font-extrabold leading-tight text-gray-900 dark:text-white md:text-5xl">
                Investment &amp; Job Fraud via UPI India 2026
              </h1>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                Fake investment schemes, task jobs, work-from-home roles, and trading apps ask for a
                UPI deposit to begin. Small early payouts build trust. Then the large deposit vanishes
                and withdrawals are blocked.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/upi-id-checker" className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow hover:bg-emerald-700">
                  Check UPI ID Free
                </Link>
                <Link href="/phone-number-checker" className="rounded-xl border border-emerald-200 bg-white px-5 py-3 text-sm font-bold text-emerald-800 shadow-sm hover:bg-emerald-50 dark:border-emerald-800 dark:bg-gray-900 dark:text-emerald-300">
                  Check Number
                </Link>
              </div>
            </div>
            <figure className="overflow-hidden rounded-2xl border border-emerald-200 bg-white shadow-lg dark:border-emerald-900 dark:bg-gray-900">
              <Image
                src={HERO_IMAGE}
                alt="Fake investment dashboard used in UPI investment fraud"
                width={1400}
                height={1050}
                className="h-auto w-full object-cover"
                priority
              />
              <figcaption className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400">
                Fake dashboards can show profits, but real withdrawal never happens.
              </figcaption>
            </figure>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-emerald-100 bg-white p-4 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <div className="text-2xl font-extrabold text-emerald-700 dark:text-emerald-300">{stat.value}</div>
                <p className="mt-2 text-xs leading-relaxed text-gray-500 dark:text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-emerald-700 px-4 py-4 text-white dark:bg-emerald-800">
        <div className="mx-auto max-w-5xl text-sm font-medium">
          <strong>Rule:</strong> If you must pay by UPI before you can earn, withdraw, unlock tasks, or receive returns, treat it as fraud until verified.
        </div>
      </div>

      <main className="mx-auto max-w-5xl space-y-16 px-4 py-14 sm:px-6 lg:px-8">
        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">What Is Investment &amp; Job Fraud via UPI?</h2>
          <div className="grid gap-8 lg:grid-cols-[1fr_340px] lg:items-start">
            <div className="rounded-2xl border-2 border-emerald-300 bg-emerald-50 p-6 dark:border-emerald-800 dark:bg-emerald-950/30">
              <p className="text-xl font-extrabold text-emerald-900 dark:text-emerald-200">
                The scammer plans to pay you small amounts early.
              </p>
              <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-200">
                Those early payouts are bait. They make you believe the job, app, advisor, or trading
                platform is real, so you send a larger UPI deposit later. The fraud was designed around
                that final larger deposit from the beginning.
              </p>
              <div className="mt-5 rounded-xl bg-white p-4 text-sm text-gray-700 dark:bg-gray-900 dark:text-gray-300">
                <p className="font-bold text-gray-900 dark:text-white">Pig butchering meaning</p>
                <p className="mt-1">
                  A scammer builds trust over days or weeks, shows fake returns, then pushes large
                  investment deposits before blocking withdrawals.
                </p>
              </div>
            </div>
            <figure className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <Image
                src="/blog/crypto-investment-scam-india-2026/pig-butchering-scam-timeline.webp"
                alt="Pig butchering scam timeline showing trust building before large deposit"
                width={1672}
                height={941}
                className="h-auto w-full object-cover"
              />
              <figcaption className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400">
                Long-con investment fraud often starts as friendship, mentorship, or job guidance.
              </figcaption>
            </figure>
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">How the Scam Works - 4 Stages</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {stages.map((stage, index) => (
              <div key={stage.title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">{index + 1}</span>
                <h3 className="mt-4 text-base font-bold text-gray-900 dark:text-white">{stage.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{stage.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">Common Lures Used in India</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {lures.map((lure) => (
              <div key={lure} className="rounded-xl border border-cyan-100 bg-cyan-50 p-4 text-sm text-gray-700 dark:border-cyan-900 dark:bg-cyan-950/30 dark:text-gray-200">
                {lure}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">Real India Case Patterns</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-800">
            <table className="w-full text-sm">
              <thead className="bg-emerald-50 dark:bg-emerald-950/30">
                <tr>
                  <th className="px-4 py-3 text-left font-bold text-gray-900 dark:text-white">Scam Type</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-900 dark:text-white">What Happens</th>
                </tr>
              </thead>
              <tbody>
                {cases.map((item, index) => (
                  <tr key={item.type} className={index % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800'}>
                    <td className="border-t border-gray-100 px-4 py-3 font-semibold text-emerald-700 dark:border-gray-700 dark:text-emerald-300">{item.type}</td>
                    <td className="border-t border-gray-100 px-4 py-3 text-gray-600 dark:border-gray-700 dark:text-gray-300">{item.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">8 Red Flags of Investment &amp; Job Fraud via UPI</h2>
          <div className="rounded-2xl border border-red-200 bg-red-50 p-6 dark:border-red-800 dark:bg-red-950/30">
            <ol className="space-y-4">
              {redFlags.map((flag, index) => (
                <li key={flag} className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">{index + 1}</span>
                  <span className="text-sm leading-relaxed text-gray-700 dark:text-gray-200">{flag}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">5 Rules to Protect Yourself</h2>
          <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-start">
            <div className="space-y-4">
              {rules.map((rule, index) => (
                <div key={rule.title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-300">Rule {index + 1}</span>
                  <h3 className="mt-2 text-base font-bold text-gray-900 dark:text-white">{rule.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{rule.body}</p>
                  {index === 2 && (
                    <Link href="/upi-id-checker" className="mt-3 inline-flex text-sm font-semibold text-emerald-700 hover:underline dark:text-emerald-300">
                      Check UPI ID
                    </Link>
                  )}
                  {index === 3 && (
                    <Link href="/phone-number-checker" className="mt-3 inline-flex text-sm font-semibold text-emerald-700 hover:underline dark:text-emerald-300">
                      Check phone number
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <figure className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <Image
                src="/blog/stock-market-tip-scam-india/sebi-verify-steps.webp"
                alt="SEBI verification steps before trusting investment advisor"
                width={800}
                height={600}
                className="h-auto w-full object-cover"
              />
              <figcaption className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400">
                Verify the advisor or broker before sending money anywhere.
              </figcaption>
            </figure>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-extrabold text-gray-900 dark:text-white">What to Do If You Already Paid</h2>
          <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-300">
            Stop the cycle first. Investment and task scams often keep extracting money through one more fee. Do not pay again.
          </p>
          <div className="space-y-4">
            {recoverySteps.map((step, index) => (
              <div key={step.title} className={`rounded-2xl border p-5 shadow-sm ${index <= 1 ? 'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950/30' : 'border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900'}`}>
                <div className="flex gap-4">
                  <span className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold ${index <= 1 ? 'bg-red-600 text-white' : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300'}`}>
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 dark:text-white">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{step.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl bg-gray-900 p-6 font-mono text-sm text-white">
            <p className="mb-3 font-bold text-emerald-400">Investment and job UPI fraud recovery timeline</p>
            <p><span className="text-green-400">Immediately</span> - Stop paying. Screenshot everything.</p>
            <p><span className="text-yellow-400">Within 30 min</span> - Call 1930 with all UPI transfers.</p>
            <p><span className="text-orange-400">Within 1 hour</span> - cybercrime.gov.in, bank fraud team, app or platform report.</p>
            <p><span className="text-red-400">Within 7 days</span> - FIR, SEBI SCORES if investment-related, full evidence bundle.</p>
          </div>
          <div className="mt-8 rounded-2xl bg-gradient-to-r from-red-600 to-rose-600 p-6 text-center text-white shadow-lg">
            <p className="text-lg font-bold">Report this investment or job scammer</p>
            <ReportScamButton className="mt-4 inline-flex cursor-pointer rounded-xl bg-white px-6 py-3 text-sm font-bold text-red-700 shadow transition-transform hover:scale-105">
              Report This Scam
            </ReportScamButton>
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">8 Variants That Use UPI Deposits</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-800">
            <table className="w-full text-sm">
              <thead className="bg-cyan-50 dark:bg-cyan-950/30">
                <tr>
                  <th className="px-4 py-3 text-left font-bold text-gray-900 dark:text-white">Variant</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-900 dark:text-white">How UPI Is Used</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-900 dark:text-white">Key Warning Sign</th>
                </tr>
              </thead>
              <tbody>
                {variants.map(([variant, payment, warning], index) => (
                  <tr key={variant} className={index % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800'}>
                    <td className="border-t border-gray-100 px-4 py-3 font-semibold text-gray-900 dark:border-gray-700 dark:text-white">{variant}</td>
                    <td className="border-t border-gray-100 px-4 py-3 text-gray-600 dark:border-gray-700 dark:text-gray-300">{payment}</td>
                    <td className="border-t border-gray-100 px-4 py-3 text-emerald-700 dark:border-gray-700 dark:text-emerald-300">{warning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">Related UPI Fraud Types</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {relatedScams.map((item) => (
              <Link key={item.title} href={item.href} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
                <p className="font-bold text-gray-900 dark:text-white">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{item.relation}</p>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">Free Tools to Verify Before You Invest or Apply</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ['UPI ID Checker', 'Verify any UPI ID before making an investment deposit or job registration payment.', '/upi-id-checker'],
              ['Phone Number Checker', 'Check if the advisor or recruiter number has been reported as fraud.', '/phone-number-checker'],
              ['Website Safety Checker', 'Check fake trading apps, investment dashboards, and task platform domains.', '/website-safety-checker'],
            ].map(([title, body, href]) => (
              <Link key={title} href={href} className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5 text-center transition-shadow hover:shadow-md dark:border-emerald-900 dark:bg-emerald-950/30">
                <p className="font-bold text-gray-900 dark:text-white">{title}</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{body}</p>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-extrabold text-gray-900 dark:text-white">Frequently Asked Questions About Investment &amp; Job Fraud via UPI</h2>
          <div className="space-y-3">
            {FAQ_ITEMS.map((item) => (
              <details key={item.question} className="group rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
                <summary className="cursor-pointer list-none text-sm font-bold text-gray-900 dark:text-white">
                  {item.question}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <RelatedTopics currentPath={PAGE_PATH} clusterId="upi-fraud" />
      </main>
    </DefaultLayout>
  )
}
