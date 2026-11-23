import type { Metadata } from 'next'
import Link from 'next/link'
import {
  AlertTriangle,
  ArrowRight,
  Ban,
  BriefcaseBusiness,
  Building2,
  Check,
  CheckCircle2,
  Clock3,
  ExternalLink,
  FileWarning,
  Globe2,
  MessageCircleWarning,
  Phone,
  SearchCheck,
  ShieldAlert,
  Smartphone,
  TriangleAlert,
  UserRoundSearch,
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
const PAGE_PATH = '/scams/job-scams/whatsapp-job-scam'
const CANONICAL = `${SITE_URL}${PAGE_PATH}`
const TITLE = 'WhatsApp Job Offer Scam India 2026: No Interview? Do NOT Pay.'
const DESCRIPTION =
  'Unsolicited WFH job on WhatsApp or Telegram with no interview. After trust is built, advance fees or task deposits collected. 8 red flags, verify recruiter in 2 min & full India guide.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    type: 'article',
    siteName: 'RakshaAI',
    locale: 'en_IN',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'WhatsApp and Telegram job offer scam warning from RakshaAI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/opengraph-image'],
  },
  other: { 'geo.region': 'IN', language: 'en-IN' },
}

const stats = [
  { value: '100+', label: 'Task and part-time job fraud websites recommended for blocking by I4C', source: 'MHA · Dec 2023' },
  { value: '₹0', label: 'What a genuine employer should ask you to pay to apply or start work', source: 'Safety rule' },
  { value: '1930', label: 'National helpline for immediate reporting of financial cyber fraud', source: 'MHA / I4C' },
  { value: '4 stages', label: 'Contact, trust-building, deposit demand and withdrawal trap', source: 'Scam pattern' },
]

const scamStages = [
  {
    title: 'The unsolicited approach',
    body:
      'You receive a WhatsApp or Telegram message from an unknown number. The sender claims to be an HR manager or recruiter offering a part-time or work-from-home role paying ₹15,000–₹25,000 per month, with no experience or interview required. You never applied for the role, and the company is either invented or impersonated.',
  },
  {
    title: "The trust build: small early 'payments'",
    body:
      "You are given simple tasks such as liking YouTube videos, reviewing products, or posting in a group. Small amounts—usually ₹50–₹200—appear in a fake dashboard or are paid to you. That small payment is the scammer's calculated cost of earning your confidence for a much larger demand.",
  },
  {
    title: 'The task deposit or advance-fee demand',
    body:
      "After two to five days, 'premium tasks' require a ₹999–₹4,999 UPI deposit. When you try to withdraw your earnings, a tax-clearance or activation fee may appear instead. The payment is always described as temporary, refundable, or necessary to unlock much larger income.",
  },
  {
    title: 'The upgrade trap and disappearance',
    body:
      'After the first payment, a second condition appears: another upgrade, a security deposit, or an additional withdrawal fee. Demands escalate until you stop paying. The dashboard disappears and the WhatsApp number blocks you.',
  },
]

const jobTypes = [
  ['Data entry job scam', 'Enter data, update spreadsheets, or fill forms for ₹15,000–₹20,000 per month with no experience.', 'Data entry is a real entry-level role, so the pitch feels familiar.'],
  ['Product review job scam', 'Rate and review products on Amazon or Flipkart and get paid for each review.', "Genuine reviewers exist, so 'earn from reviews' can sound plausible."],
  ['Social media management scam', 'Post content and grow followers for small businesses for ₹12,000–₹18,000 per month.', 'Social media management is a real profession and can be done from a phone.'],
  ['Like and subscribe scam', 'Like videos or subscribe to channels for ₹200–₹500 per batch with no skill required.', 'The zero-skill task and quick payout strongly appeal to students and first-time earners.'],
]

const exampleCases = [
  ['Data Entry · WhatsApp', 'Example loss pattern · ₹10,498', "₹499 registration becomes ₹1,999 for a data package and ₹8,000 for 'tax clearance'. A dashboard shows ₹55,000, but no withdrawal is possible."],
  ['Product Review · Telegram', 'Example loss pattern · ₹24,000', "Small daily payments build trust, then a ₹24,000 'Level 2 upgrade' is demanded. After payment, the account is locked."],
  ['YouTube Like & Earn · WhatsApp', 'Example loss pattern · ₹8,400', "Small payouts arrive for a week. After an ₹8,400 'premium batch deposit', the platform goes offline."],
  ['Social Media Management · WhatsApp', 'Example loss pattern · ₹14,800', "Small dashboard credits appear before withdrawal is blocked by a ₹14,800 'GST compliance fee'."],
  ['Data Entry Series · Telegram', 'Example loss pattern · ₹42,000', "Deposits escalate from ₹999 to ₹4,999, ₹14,999 and ₹21,000, with each new payment supposedly unlocking the balance."],
  ['Part-Time WFH · WhatsApp', 'Example loss pattern · ₹6,500', "A ₹1,500 registration charge is followed by a ₹5,000 'laptop deposit'. The laptop never arrives and the sender blocks the victim."],
]

const redFlags = [
  ['No interview is required', 'Every real employer screens candidates. An employer offering paid work without knowing who you are has no real role to fill.'],
  ['You never applied for the role', 'Unsolicited bulk job messages from unknown WhatsApp or Telegram accounts are a core scam pattern.'],
  ['The company cannot be verified', 'Search MCA records, the official company site, LinkedIn and independent search results. No CIN or real presence is a serious warning.'],
  ['Payment is requested before you earn', "Registration fees, task deposits, activation charges and equipment advances are all versions of the same advance-fee trap."],
  ['Communication stays inside chat apps', 'A genuine HR manager should have a company email address, a verifiable profile and a formal interview process.'],
  ['The salary is unrealistic', '₹25,000 per month for two hours a day, no experience and no interview is not a credible employment offer.'],
  ['Small early payments arrive', "Those ₹100–₹500 payouts are not proof of legitimacy; they are the scammer's investment in your trust."],
  ['Withdrawal requires another payment', 'A platform that makes you pay again to withdraw earned money is a confirmed advance-fee scam.'],
]

const verificationSteps = [
  {
    title: "Check the recruiter's phone number",
    body: 'Search the sender at RakshaAI before engaging. Job-scam operators reuse the same numbers across bulk campaigns, and active numbers may already have community reports.',
    href: '/phone-number-checker',
    label: 'Check phone number',
    icon: Smartphone,
  },
  {
    title: 'Verify the company on MCA21',
    body: "Search the company name on MCA's company master-data service. A legitimate company should have a CIN, registered address and filing history. Then search the recruiter on LinkedIn and the company name with the word 'scam'.",
    href: 'https://www.mca.gov.in/',
    label: 'Open MCA',
    icon: Building2,
    external: true,
  },
  {
    title: 'Verify the company website',
    body: "Paste the employer's site into the RakshaAI Website Safety Checker. Review domain age, SSL information and fraud signals before sharing data or paying.",
    href: '/website-safety-checker',
    label: 'Check company website',
    icon: Globe2,
  },
  {
    title: 'Apply the no-payment test',
    body: "If the recruiter requests a registration fee, task deposit, activation charge, data package or equipment advance, stop. Say, 'I will not pay to apply for or begin a job,' then preserve evidence and block the sender.",
    icon: Ban,
  },
  {
    title: 'Compare it with a legitimate WFH job',
    body: 'Real remote jobs are found through company career pages and established job platforms. They include screening, an interview, an offer letter, and onboarding documents—without an upfront UPI payment.',
    icon: BriefcaseBusiness,
  },
]

const recoverySteps = [
  {
    title: 'Call 1930 immediately',
    body: "Share the recipient UPI ID, transaction amount and time. A fast report gives authorities the best chance of freezing the recipient account. Do not delete the chat.",
  },
  {
    title: 'Screenshot all evidence before blocking',
    body: 'Save the complete WhatsApp or Telegram conversation, payment confirmations, dashboard, company name, phone number, UPI ID and every website or group link.',
  },
  {
    title: 'File on cybercrime.gov.in',
    body: "File under the closest available online job or financial cyber-fraud category and attach the screenshots, transaction references and scammer's contact details.",
  },
  {
    title: 'Contact NCH and your payment provider',
    body: 'Call the National Consumer Helpline on 1915 and file at consumerhelpline.gov.in. Also contact your bank or card issuer immediately to raise a fraud dispute where applicable.',
  },
  {
    title: 'File an FIR and report the identifiers',
    body: 'Take your cybercrime complaint reference and evidence to the cybercrime police. Report the phone number and UPI ID to RakshaAI to help warn other job seekers.',
  },
]

const responseTimeline = [
  ['Immediately', 'Screenshot every chat, dashboard and payment. Do not block yet.'],
  ['Within 30 minutes', "Call 1930 and give the scammer's payment details."],
  ['Within 24 hours', 'File at cybercrime.gov.in, block the scammer and submit a RakshaAI report.'],
  ['Within 72 hours', 'Call NCH 1915 and file a consumer complaint where applicable.'],
  ['Within 7 days', 'Visit the cybercrime police station with your complaint reference and evidence.'],
]

const statistics = [
  ['Task and part-time job fraud sites recommended for blocking', 'More than 100', 'MHA / I4C · Dec 2023'],
  ['Officially documented contact channels', 'WhatsApp and Telegram', 'MHA / I4C'],
  ['Officially documented task lures', 'Video likes, subscriptions and map ratings', 'MHA / I4C'],
  ['Fake CAPTCHA job complaint trend', 'Significant rise reported', 'I4C · Apr 2025'],
  ['Common fee labels in official advisory', 'Registration, training and security fees', 'I4C · Apr 2025'],
  ['Immediate financial cyber-fraud helpline', '1930', 'MHA / I4C'],
  ['Identifiers accepted by Report Suspect', 'WhatsApp numbers and Telegram handles', 'NCRP'],
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
  {
    title: 'India Code: Employment Exchanges Act, 1959',
    href: 'https://www.indiacode.nic.in/handle/123456789/18573?view_type=browse',
  },
]

const relatedScams = [
  {
    title: 'Investment & Job Fraud via UPI',
    body: 'Covers the wider deposit-to-start pattern across fake jobs, task platforms and investments.',
    href: '/scams/upi-fraud/investment-job-fraud',
  },
  {
    title: 'Advance Fee Job Registration Fraud',
    body: 'Formal forged offer letters from impersonated companies followed by registration, verification or training fees.',
    href: '/scams/job-scams/advance-fee-job-fraud',
  },
  {
    title: 'Fake Company / Fake HR Portal Scam',
    body: 'A professional website impersonating a real brand, a fake Google Meet interview panel, and a forged offer letter before laptop or clearance fees are demanded.',
    href: '/scams/job-scams/fake-company-portal',
  },
  {
    title: 'MLM / Pyramid Scheme Scam',
    body: 'A "business opportunity" pitch funded by joining fees and referral recruitment, not a WhatsApp employment role.',
    href: '/scams/job-scams/mlm-pyramid-scam',
  },
  {
    title: 'Advance Payment Trap',
    body: 'The same advance-fee mechanism used for online purchases instead of jobs.',
    href: '/scams/e-commerce-fraud/advance-payment-trap',
  },
  {
    title: 'Overseas Job Scam / Human Trafficking',
    body: 'An overseas offer can add visa-fee fraud, route changes and forced-work risks after travel.',
    href: '/scams/job-scams/overseas-job-scam',
  },
  {
    title: 'Job Scams India Hub',
    body: 'All job fraud types, including fake agencies, overseas fraud and government-job scams.',
    href: '/scams/job-scams',
  },
]

const tools = [
  {
    icon: Phone,
    title: 'Phone Number Checker',
    body: "Check the WhatsApp or Telegram recruiter's number against community fraud reports.",
    href: '/phone-number-checker',
    label: 'Check a number',
  },
  {
    icon: Globe2,
    title: 'Website Safety Checker',
    body: 'Verify the company website or task-platform URL before sharing information or paying.',
    href: '/website-safety-checker',
    label: 'Check a website',
  },
  {
    icon: WalletCards,
    title: 'UPI ID Checker',
    body: 'Search the payment address before sending a registration fee or task deposit.',
    href: '/upi-id-checker',
    label: 'Check a UPI ID',
  },
]

const FAQ_ITEMS = [
  {
    question: 'How does a WhatsApp job offer scam work in India?',
    answer:
      "It usually follows four stages: an unsolicited message from an alleged HR manager, simple tasks and small early payments to build trust, a task deposit or advance fee demanded by UPI, and finally a locked account, repeated payment demands, or disappearance.",
  },
  {
    question: 'Is it illegal for a recruiter to ask for a registration fee or task deposit in India?',
    answer:
      'Treat any fee charged to apply for or begin a job as a major fraud signal. Registration fees, data-package charges, task deposits, activation charges and equipment advances are not part of a legitimate employer-led hiring process. Never pay an unknown recruiter by UPI.',
  },
  {
    question: 'How do I identify a fake job offer on WhatsApp or Telegram?',
    answer:
      'Look for no interview, an offer you never applied for, an unverifiable company, any advance payment, chat-only communication, unrealistic salary, small early payouts, or a blocked withdrawal. Even one payment demand is enough to stop and verify independently.',
  },
  {
    question: 'How do I verify whether a WhatsApp recruiter and company are genuine?',
    answer:
      "Check the recruiter's number with RakshaAI, verify the company and its CIN through MCA, find the recruiter's employment history on LinkedIn, use the official company website to contact HR directly, and check the website with RakshaAI before opening links or sharing data.",
  },
  {
    question: 'What are legitimate work-from-home jobs in India and how do I find them?',
    answer:
      'Use established job platforms and official company career pages. A genuine process includes an application, screening, at least one interview, a formal offer and onboarding. Legitimate work-from-home employment does not require a task deposit, registration fee, or equipment advance paid to a recruiter by UPI.',
  },
  {
    question: 'I paid a task deposit to a WhatsApp job scam. Can I get my money back?',
    answer:
      'Recovery is not guaranteed, but acting quickly matters. Call 1930, file at cybercrime.gov.in, contact your bank or payment provider, preserve all evidence, call NCH 1915 where applicable, and file an FIR with the complaint reference.',
  },
  {
    question: 'How do I report a WhatsApp job scam?',
    answer:
      "Call 1930 if money was transferred, file at cybercrime.gov.in, contact your bank, preserve the sender's number and UPI ID, report the account inside WhatsApp or Telegram, and submit the identifiers to RakshaAI to help warn others.",
  },
  {
    question: "What is the 'trust build' tactic in WhatsApp job scams?",
    answer:
      "Scammers may pay ₹50–₹500 for early tasks or show the amount in a dashboard. That payment is designed to make the platform feel genuine before a much larger deposit is demanded. A small payout does not verify the employer or the job.",
  },
  {
    question: 'What laws can apply to WhatsApp job offer fraud in India?',
    answer:
      'Depending on the facts, police may examine cheating by personation and identity misuse under the Information Technology Act and offences involving cheating, breach of trust, forgery, or conspiracy under applicable criminal law. A cybercrime complaint or FIR should describe the conduct and evidence rather than trying to select charges yourself.',
  },
]

const schemas = [
  webPageSchema({ name: TITLE, description: DESCRIPTION, url: PAGE_PATH }),
  articleSchema({
    headline: 'WhatsApp Job Offer Scam India 2026 - No Interview, Task Deposits & How to Protect Yourself',
    description: DESCRIPTION,
    url: PAGE_PATH,
    datePublished: '2026-07-22',
    dateModified: '2026-07-22',
    author: organizationRef(),
    section: 'Job Scams',
    keywords: [
      'whatsapp job offer scam india',
      'telegram job scam india',
      'task deposit job scam india',
      'fake recruiter whatsapp india',
      'work from home scam india',
    ],
  }),
  faqPageSchema(FAQ_ITEMS),
  breadcrumbListSchema([
    { name: 'Home', url: '/' },
    { name: 'Scam Categories', url: '/scams' },
    { name: 'Job Scams India', url: '/scams/job-scams' },
    { name: 'WhatsApp & Telegram Job Offer Scam', url: PAGE_PATH },
  ]),
  {
    '@context': 'https://schema.org' as const,
    '@type': 'HowTo',
    '@id': `${CANONICAL}#how-to-verify`,
    name: 'How to verify a job offer in India',
    description: 'Five quick checks for an unsolicited WhatsApp or Telegram job offer before you engage or pay.',
    totalTime: 'PT5M',
    step: verificationSteps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.title,
      text: step.body,
    })),
  },
  {
    '@context': 'https://schema.org' as const,
    '@type': 'DefinedTerm',
    '@id': `${CANONICAL}#defined-term`,
    name: 'WhatsApp job offer scam',
    description:
      'An advance-fee job fraud delivered through WhatsApp or Telegram in which small tasks or payments build trust before a registration fee, task deposit, or withdrawal fee is demanded.',
    inDefinedTermSet: 'Online Job Fraud in India',
    url: CANONICAL,
  },
]

const sectionTitleClass = 'text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl'
const sectionIntroClass = 'mt-4 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300'

export default function WhatsAppJobScamPage() {
  return (
    <DefaultLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schemas) }} />

      <article className="bg-white dark:bg-slate-950">
        <header className="relative overflow-hidden border-b border-lime-100 bg-gradient-to-br from-lime-50 via-white to-emerald-50 px-4 py-14 dark:border-lime-950 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950/50 sm:py-20">
          <div aria-hidden="true" className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-lime-300/20 blur-3xl" />
          <div aria-hidden="true" className="absolute -bottom-36 -left-24 h-80 w-80 rounded-full bg-emerald-300/20 blur-3xl" />

          <div className="relative mx-auto max-w-6xl">
            <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <Link className="hover:text-emerald-700 dark:hover:text-emerald-300" href="/">Home</Link>
              <span aria-hidden="true">›</span>
              <Link className="hover:text-emerald-700 dark:hover:text-emerald-300" href="/scams">Scam Categories</Link>
              <span aria-hidden="true">›</span>
              <Link className="hover:text-emerald-700 dark:hover:text-emerald-300" href="/scams/job-scams">Job Scams India</Link>
              <span aria-hidden="true">›</span>
              <span className="text-slate-800 dark:text-slate-200">WhatsApp &amp; Telegram Job Offer Scam</span>
            </nav>

            <div className="grid items-center gap-10 lg:grid-cols-[1fr_360px]">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-lime-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-emerald-800 shadow-sm dark:border-lime-800 dark:bg-slate-900/70 dark:text-lime-300">
                  <MessageCircleWarning className="h-4 w-4" />
                  WhatsApp &amp; Telegram Job Scam Guide
                </div>
                <h1 className="max-w-4xl text-4xl font-black leading-[1.08] tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
                  WhatsApp Job Offer Scam India 2026
                  <span className="mt-2 block text-emerald-700 dark:text-lime-400">No Interview, Task Deposits &amp; How to Protect Yourself</span>
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                  A WhatsApp job offer scam starts with an unsolicited message from a supposed HR manager offering data entry, product-review, social-media or online-task work. No interview is required. Small early payments build trust; then an advance fee or task deposit is demanded. You pay, but the job and promised salary never materialise.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link href="/phone-number-checker" className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-700 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-900/15 transition hover:-translate-y-0.5 hover:bg-emerald-800">
                    <SearchCheck className="h-5 w-5" /> Check number free <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/website-safety-checker" className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-200 bg-white px-6 py-3.5 text-sm font-bold text-emerald-800 shadow-sm transition hover:-translate-y-0.5 hover:bg-emerald-50 dark:border-emerald-800 dark:bg-slate-900 dark:text-emerald-300 dark:hover:bg-slate-800">
                    <Globe2 className="h-5 w-5" /> Check company
                  </Link>
                </div>
                <p className="mt-4 text-xs font-medium text-slate-500 dark:text-slate-400">Free · No login · Built for India</p>
              </div>

              <aside className="rounded-3xl border border-red-200 bg-white p-6 shadow-xl shadow-red-950/5 dark:border-red-900 dark:bg-slate-900">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300">
                  <ShieldAlert className="h-6 w-6" />
                </div>
                <p className="mt-5 text-xs font-black uppercase tracking-[0.16em] text-red-600 dark:text-red-400">The one rule</p>
                <p className="mt-2 text-2xl font-black leading-snug text-slate-950 dark:text-white">Legitimate employers pay you. They never ask you to pay them.</p>
                <div className="mt-5 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {['No registration fee', 'No task deposit', 'No activation charge', 'No equipment advance by UPI'].map((item) => (
                    <div key={item} className="flex items-center gap-2"><X className="h-4 w-4 text-red-600" /><span>{item}</span></div>
                  ))}
                </div>
              </aside>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/80 bg-white/90 p-5 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/85">
                  <p className="text-3xl font-black text-emerald-700 dark:text-lime-400">{stat.value}</p>
                  <p className="mt-2 text-sm leading-5 text-slate-700 dark:text-slate-300">{stat.label}</p>
                  <p className="mt-2 text-[11px] font-bold uppercase tracking-wide text-slate-400">{stat.source}</p>
                </div>
              ))}
            </div>
          </div>
        </header>

        <div className="border-b border-amber-200 bg-amber-50 px-4 py-5 dark:border-amber-900 dark:bg-amber-950/30">
          <div className="mx-auto flex max-w-6xl items-start gap-3 text-sm leading-6 text-amber-950 dark:text-amber-100">
            <TriangleAlert className="mt-0.5 h-5 w-5 shrink-0 text-amber-700 dark:text-amber-400" />
            <p><strong>No exceptions:</strong> if a WhatsApp or Telegram job offer has no interview and later requests any payment, stop. A so-called refundable task deposit is structured to reduce resistance; do not send it.</p>
          </div>
        </div>

        <div className="mx-auto max-w-6xl space-y-24 px-4 py-16 sm:px-6 lg:px-8">
          <section aria-labelledby="scam-script-heading">
            <div className="max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700 dark:text-lime-400">The repeatable script</p>
              <h2 id="scam-script-heading" className={`${sectionTitleClass} mt-3`}>How the WhatsApp &amp; Telegram Job Scam Works</h2>
              <p className={sectionIntroClass}>The fake job offer follows an almost identical four-stage script across job types. Recognising the sequence lets you leave before any deposit is made.</p>
            </div>
            <ol className="relative mt-10 grid gap-5 md:grid-cols-2">
              {scamStages.map((stage, index) => (
                <li key={stage.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-700 text-sm font-black text-white">{index + 1}</span>
                    <h3 className="text-lg font-bold text-slate-950 dark:text-white">{stage.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{stage.body}</p>
                </li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="job-types-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700 dark:text-lime-400">Common lures</p>
            <h2 id="job-types-heading" className={`${sectionTitleClass} mt-3`}>The 4 Most Common Fake WFH Job Types in India</h2>
            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[760px] text-left text-sm">
                  <thead className="bg-slate-950 text-white dark:bg-black">
                    <tr>
                      <th className="px-5 py-4 font-bold">Fake job type</th>
                      <th className="px-5 py-4 font-bold">What the scammer claims</th>
                      <th className="px-5 py-4 font-bold">Why it sounds plausible</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                    {jobTypes.map(([type, claim, reason], index) => (
                      <tr key={type} className={index % 2 === 0 ? 'bg-white dark:bg-slate-950' : 'bg-slate-50 dark:bg-slate-900'}>
                        <th scope="row" className="px-5 py-5 font-bold text-slate-950 dark:text-white">{type}</th>
                        <td className="px-5 py-5 leading-6 text-slate-600 dark:text-slate-300">{claim}</td>
                        <td className="px-5 py-5 leading-6 text-slate-600 dark:text-slate-300">{reason}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section aria-labelledby="cases-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700 dark:text-lime-400">Illustrative loss patterns</p>
            <h2 id="cases-heading" className={`${sectionTitleClass} mt-3`}>WhatsApp &amp; Telegram Job Scam Scenarios</h2>
            <p className={sectionIntroClass}>These case summaries show how small initial fees become a series of escalating demands.</p>
            <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {exampleCases.map(([type, loss, detail]) => (
                <article key={`${type}-${loss}`} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <FileWarning className="h-6 w-6 text-red-600 dark:text-red-400" />
                  <h3 className="mt-4 font-bold text-slate-950 dark:text-white">{type}</h3>
                  <p className="mt-1 text-sm font-extrabold text-red-700 dark:text-red-300">{loss}</p>
                  <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{detail}</p>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="red-flags-heading" className="rounded-3xl bg-red-950 px-6 py-10 text-white sm:px-10 sm:py-12">
            <div className="max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-300">Stop before you pay</p>
              <h2 id="red-flags-heading" className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">8 Red Flags of a WhatsApp or Telegram Job Scam</h2>
              <p className="mt-4 text-base leading-7 text-red-100">Any payment request is enough to stop. Multiple signals make the scam pattern unmistakable.</p>
            </div>
            <ol className="mt-9 grid gap-4 md:grid-cols-2">
              {redFlags.map(([title, body], index) => (
                <li key={title} className="flex gap-4 rounded-2xl border border-red-800 bg-red-900/50 p-5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-sm font-black text-red-900">{index + 1}</span>
                  <div>
                    <h3 className="font-bold">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-red-100/85">{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="verify-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700 dark:text-lime-400">Five-step verification</p>
            <h2 id="verify-heading" className={`${sectionTitleClass} mt-3`}>How to Verify Any Job Offer from WhatsApp or Telegram</h2>
            <p className={sectionIntroClass}>Run these checks before replying, sharing documents, opening a site, or sending money.</p>
            <ol className="mt-10 space-y-4">
              {verificationSteps.map(({ title, body, href, label, icon: Icon, external }, index) => (
                <li key={title} className="grid gap-5 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 sm:grid-cols-[56px_1fr_auto] sm:items-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-wide text-emerald-700 dark:text-emerald-400">Step {index + 1}</p>
                    <h3 className="mt-1 text-lg font-bold text-slate-950 dark:text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{body}</p>
                  </div>
                  {href && label ? (
                    external ? (
                      <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-emerald-200 px-4 py-2.5 text-sm font-bold text-emerald-800 hover:bg-emerald-50 dark:border-emerald-800 dark:text-emerald-300 dark:hover:bg-emerald-950">
                        {label} <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    ) : (
                      <Link href={href} className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-emerald-200 px-4 py-2.5 text-sm font-bold text-emerald-800 hover:bg-emerald-50 dark:border-emerald-800 dark:text-emerald-300 dark:hover:bg-emerald-950">
                        {label} <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    )
                  ) : null}
                </li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="real-vs-scam-heading">
            <div className="grid overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 lg:grid-cols-2">
              <div className="bg-emerald-50 p-7 dark:bg-emerald-950/30 sm:p-10">
                <CheckCircle2 className="h-8 w-8 text-emerald-700 dark:text-emerald-400" />
                <h2 id="real-vs-scam-heading" className="mt-5 text-2xl font-black text-slate-950 dark:text-white">What legitimate WFH jobs look like</h2>
                <ul className="mt-6 space-y-4 text-sm leading-6 text-slate-700 dark:text-slate-300">
                  {[
                    'Found on an official company careers page or an established job platform.',
                    'Recruiter uses a verifiable company email address or LinkedIn profile.',
                    'Includes screening, at least one real interview, an offer letter and onboarding documents.',
                    'The employer pays you and never requires an upfront deposit to start work.',
                  ].map((item) => <li key={item} className="flex gap-3"><Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />{item}</li>)}
                </ul>
              </div>
              <div className="bg-red-50 p-7 dark:bg-red-950/30 sm:p-10">
                <AlertTriangle className="h-8 w-8 text-red-700 dark:text-red-400" />
                <h2 className="mt-5 text-2xl font-black text-slate-950 dark:text-white">What the WhatsApp scam looks like</h2>
                <ul className="mt-6 space-y-4 text-sm leading-6 text-slate-700 dark:text-slate-300">
                  {[
                    'Unsolicited message for a role you never applied for.',
                    'No interview, no official email and no verifiable employer.',
                    'High salary for simple tasks with no experience required.',
                    'Payment is required before work, higher tasks or withdrawal.',
                  ].map((item) => <li key={item} className="flex gap-3"><X className="mt-0.5 h-5 w-5 shrink-0 text-red-700" />{item}</li>)}
                </ul>
              </div>
            </div>
            <div className="mt-6 flex flex-col items-stretch justify-between gap-5 rounded-2xl bg-emerald-800 p-6 text-white sm:flex-row sm:items-center">
              <div>
                <p className="text-lg font-black">Got a WhatsApp job offer?</p>
                <p className="mt-1 text-sm text-emerald-100">Check the number and company before you reply.</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/phone-number-checker" className="rounded-xl bg-white px-5 py-3 text-center text-sm font-bold text-emerald-900 hover:bg-emerald-50">Check number</Link>
                <Link href="/website-safety-checker" className="rounded-xl border border-emerald-500 px-5 py-3 text-center text-sm font-bold text-white hover:bg-emerald-700">Check company</Link>
              </div>
            </div>
          </section>

          <section aria-labelledby="recovery-heading">
            <div className="max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-700 dark:text-red-400">Act quickly</p>
              <h2 id="recovery-heading" className={`${sectionTitleClass} mt-3`}>What to Do If You Already Paid a Task Deposit or Registration Fee</h2>
              <p className={sectionIntroClass}>Do not send another payment to release your balance. Preserve evidence first, then start the reporting sequence.</p>
            </div>
            <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
              <ol className="space-y-4">
                {recoverySteps.map((step, index) => (
                  <li key={step.title} className="flex gap-4 rounded-2xl border border-slate-200 p-5 dark:border-slate-800">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-red-100 text-sm font-black text-red-800 dark:bg-red-950 dark:text-red-300">{index + 1}</span>
                    <div>
                      <h3 className="font-bold text-slate-950 dark:text-white">{step.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <aside className="h-fit rounded-2xl bg-slate-950 p-6 text-white dark:bg-black">
                <div className="flex items-center gap-2 text-lime-300"><Clock3 className="h-5 w-5" /><p className="text-xs font-black uppercase tracking-[0.14em]">Response timeline</p></div>
                <div className="mt-6 space-y-5">
                  {responseTimeline.map(([time, action]) => (
                    <div key={time} className="border-l-2 border-lime-400 pl-4">
                      <p className="font-bold text-lime-300">{time}</p>
                      <p className="mt-1 text-sm leading-5 text-slate-300">{action}</p>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
            <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-2xl border border-red-200 bg-red-50 p-6 dark:border-red-900 dark:bg-red-950/30 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-lg font-black text-red-950 dark:text-red-100">Report the scammer and warn other Indians</h3>
                <p className="mt-1 text-sm text-red-800 dark:text-red-200">Keep the number, UPI ID, transaction IDs and chat screenshots ready.</p>
              </div>
              <ReportScamButton className="inline-flex items-center gap-2 rounded-xl bg-red-700 px-5 py-3 text-sm font-bold text-white hover:bg-red-800">
                <ShieldAlert className="h-4 w-4" /> Report this scam <ArrowRight className="h-4 w-4" />
              </ReportScamButton>
            </div>
          </section>

          <section aria-labelledby="statistics-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700 dark:text-lime-400">Verified public information</p>
            <h2 id="statistics-heading" className={`${sectionTitleClass} mt-3`}>What Official India Sources Confirm</h2>
            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[640px] text-left text-sm">
                  <thead className="bg-slate-950 text-white dark:bg-black">
                    <tr><th className="px-5 py-4">Metric</th><th className="px-5 py-4">Data</th><th className="px-5 py-4">Source</th></tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                    {statistics.map(([metric, data, source], index) => (
                      <tr key={metric} className={index % 2 === 0 ? 'bg-white dark:bg-slate-950' : 'bg-slate-50 dark:bg-slate-900'}>
                        <th scope="row" className="px-5 py-4 font-semibold text-slate-950 dark:text-white">{metric}</th>
                        <td className="px-5 py-4 font-bold text-emerald-700 dark:text-emerald-300">{data}</td>
                        <td className="px-5 py-4 text-slate-500 dark:text-slate-400">{source}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              {officialSources.map((source) => (
                <a key={source.href} href={source.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 hover:border-emerald-300 hover:text-emerald-800 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-emerald-800 dark:hover:text-emerald-300">
                  {source.title} <ExternalLink className="h-3 w-3" />
                </a>
              ))}
            </div>
            <p className="mt-4 text-xs leading-5 text-slate-500 dark:text-slate-400">The national percentages and recovery-rate figures in the supplied brief were not included because no matching primary government publication was found. The Employment Exchanges Act is linked above; its text concerns notification of vacancies and does not itself state a blanket ban on all recruiter fees.</p>
          </section>

          <section aria-labelledby="related-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700 dark:text-lime-400">Keep learning</p>
            <h2 id="related-heading" className={`${sectionTitleClass} mt-3`}>Related Job Scam Types</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {relatedScams.map((item) => (
                <Link key={item.href} href={item.href} className="group rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md dark:border-slate-800 dark:hover:border-emerald-800">
                  <div className="flex items-start justify-between gap-4">
                    <div><h3 className="font-bold text-slate-950 dark:text-white">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.body}</p></div>
                    <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-emerald-700 transition group-hover:translate-x-1 dark:text-emerald-400" />
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section aria-labelledby="tools-heading" className="rounded-3xl bg-gradient-to-br from-emerald-950 to-slate-950 px-6 py-10 text-white sm:px-10 sm:py-12">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-lime-300">Free RakshaAI checks</p>
            <h2 id="tools-heading" className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Verify Any WhatsApp Job Offer</h2>
            <div className="mt-9 grid gap-5 md:grid-cols-3">
              {tools.map(({ icon: Icon, title, body, href, label }) => (
                <Link key={href} href={href} className="group rounded-2xl border border-emerald-800 bg-white/5 p-6 hover:bg-white/10">
                  <Icon className="h-7 w-7 text-lime-300" />
                  <h3 className="mt-4 font-bold">{title}</h3>
                  <p className="mt-2 min-h-16 text-sm leading-6 text-slate-300">{body}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-lime-300">{label} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
                </Link>
              ))}
            </div>
          </section>

          <section aria-labelledby="faq-heading" className="mx-auto max-w-4xl">
            <div className="text-center">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700 dark:text-lime-400">Quick answers</p>
              <h2 id="faq-heading" className={`${sectionTitleClass} mt-3`}>Frequently Asked Questions</h2>
            </div>
            <div className="mt-9 space-y-3">
              {FAQ_ITEMS.map((item) => (
                <details key={item.question} className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-emerald-300 open:shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:open:border-emerald-800">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold text-slate-950 dark:text-white">
                    {item.question}
                    <span aria-hidden="true" className="text-xl text-emerald-700 transition group-open:rotate-45 dark:text-emerald-400">+</span>
                  </summary>
                  <p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-6 text-slate-600 dark:border-slate-800 dark:text-slate-300">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-slate-50 p-7 dark:border-slate-800 dark:bg-slate-900 sm:p-10">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-700 dark:text-emerald-400">Remember</p>
                <h2 className="mt-2 max-w-2xl text-2xl font-black text-slate-950 dark:text-white">No legitimate employer needs your money to give you work.</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">Check the recruiter before replying. If you already paid, call 1930 now.</p>
              </div>
              <Link href="/phone-number-checker" className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-emerald-700 px-5 py-3 text-sm font-bold text-white hover:bg-emerald-800"><UserRoundSearch className="h-4 w-4" /> Check recruiter</Link>
            </div>
          </section>

          <RelatedTopics currentPath={PAGE_PATH} clusterId="job-scams" />
        </div>
      </article>
    </DefaultLayout>
  )
}
