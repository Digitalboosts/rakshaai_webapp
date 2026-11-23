import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import DefaultLayout from '@/components/DefaultLayout'
import RelatedTopics from '@/components/RelatedTopics'
import ReportScamButton from '@/components/ReportScamButton'
import { breadcrumbListSchema, faqPageSchema, jsonLd, organizationRef, webPageSchema } from '@/lib/seo/schema'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://rakshaai.co'
const PAGE_PATH = '/scams/upi-fraud/digital-arrest-scam'
const CANONICAL = `${SITE_URL}${PAGE_PATH}`
const HERO_IMAGE = '/blog/digital-arrest-scam-india/phone-cbi-call.webp'

export const metadata: Metadata = {
  title: 'Digital Arrest Scam India 2026: How It Works & How to Escape',
  description:
    'Fake CBI, ED, NCB, TRAI, and police officers demand UPI payment to avoid a fabricated arrest. Learn the script, red flags, 5 safety rules, and how to report in India.',
  alternates: { canonical: CANONICAL },
  robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  openGraph: {
    title: 'Digital Arrest Scam India 2026: How It Works & How to Escape',
    description:
      'Fake government officers use video calls, fear, and UPI payment demands. There is no legal concept of digital arrest in India.',
    url: CANONICAL,
    type: 'article',
    siteName: 'RakshaAI',
    locale: 'en_IN',
    images: [{ url: HERO_IMAGE, width: 1200, height: 675, alt: 'Incoming call from fake CBI officer in digital arrest scam' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Arrest Scam India 2026',
    description: 'No agency arrests via WhatsApp, Skype, or UPI payment demand. Hang up and call 1930 if money moved.',
    images: [HERO_IMAGE],
  },
  other: {
    'geo.region': 'IN',
    language: 'en-IN',
  },
}

const stats = [
  { value: 'Rs 3.5L', label: 'Average loss cited in high-value digital arrest complaints' },
  { value: 'No law', label: 'No legal concept of digital arrest in India' },
  { value: '1930', label: 'Helpline to call immediately after any payment' },
  { value: 'UPI risk', label: 'Payments are pushed through mule UPI accounts fast' },
]

const stages = [
  {
    title: 'Stage 1 - A fake criminal case is announced',
    body:
      'The caller claims your Aadhaar, SIM, parcel, bank account, or UPI transaction is linked to drugs, money laundering, illegal calls, or a fake warrant.',
  },
  {
    title: 'Stage 2 - The call moves to video',
    body:
      'A fake CBI, ED, NCB, TRAI, police, or Income Tax officer appears on WhatsApp, Skype, or Zoom with a police-station backdrop and fake documents.',
  },
  {
    title: 'Stage 3 - You are isolated from help',
    body:
      'The scammer orders you not to tell family, not to call a lawyer, and not to disconnect. This isolation is the main control mechanism.',
  },
  {
    title: 'Stage 4 - UPI payment is demanded',
    body:
      'After fear builds, the caller demands a security deposit, bail amount, verification fee, or case-settlement payment through UPI or bank transfer.',
  },
]

const pretexts = [
  'A parcel in your name contains drugs, fake passports, or foreign currency.',
  'Your bank account or UPI ID was used for money laundering.',
  'Your Aadhaar or SIM was used to register a criminal account.',
  'Your mobile number will be blocked by TRAI in 2 hours.',
  'A fake CBI, ED, or NCB warrant has been issued against you.',
  'A suspicious UPI transfer was made from your account and must be reversed.',
]

const warningSigns = [
  'Any caller demands UPI payment to avoid arrest, close a case, pay bail, or prove innocence.',
  'The caller uses WhatsApp, Skype, Zoom, Google Meet, or a normal mobile number for official investigation.',
  'You are told not to tell family, friends, your lawyer, or local police.',
  'The urgency is extreme: arrest in 2 hours, warrant by midnight, SIM block today.',
  'A video call shows a uniformed person or police-station background.',
  'The caller gives a case number or warrant number that cannot be verified on official portals.',
  'They know your name, city, Aadhaar fragment, or bank name and use it as proof of authority.',
  'Multiple fake officers join one after another to increase pressure.',
]

const protectionRules = [
  {
    title: 'No agency demands UPI payment',
    body:
      'CBI, ED, NCB, TRAI, Income Tax, Customs, and police do not collect bail, settlement, verification, or security deposits through UPI.',
  },
  {
    title: 'No government arrest happens on video call',
    body:
      'Digital arrest is not a legal procedure. Real legal action is physical, documented, and includes your right to contact a lawyer.',
  },
  {
    title: 'Hang up and call the real agency',
    body:
      'End the call. Type the agency website yourself, find the official contact, and verify. Never call a number supplied by the caller.',
  },
  {
    title: 'Tell a family member immediately',
    body:
      'The scam works only while you are isolated. The moment someone tells you to keep the call secret, do the opposite.',
  },
  {
    title: 'Check the caller number and UPI ID',
    body:
      'Search the number and UPI ID before paying anything. Active scam numbers and mule IDs are often reused across victims.',
  },
]

const recoverySteps = [
  {
    title: 'Call 1930 within 30 minutes',
    body:
      'Share every transfer amount, time, UPI ID, phone number, and bank account. The goal is to freeze beneficiary accounts before funds move again.',
  },
  {
    title: 'File on cybercrime.gov.in',
    body:
      'Choose financial cyber fraud. Attach UPI screenshots, call logs, WhatsApp numbers, fake warrants, video-call screenshots, and chat records.',
  },
  {
    title: 'Call your bank fraud team',
    body:
      'Ask the bank to raise a fraud dispute and beneficiary freeze request. Share the 1930 and cybercrime complaint references.',
  },
  {
    title: 'Report the impersonated agency',
    body:
      'If the scammer used CBI, ED, NCB, TRAI, Income Tax, Customs, or police identity, report the impersonation through that agency website.',
  },
  {
    title: 'File FIR and report to RakshaAI',
    body:
      'Carry complaint references, payment details, phone numbers, chat logs, and documents to your cybercrime police station. Also report the number on RakshaAI.',
  },
]

const officialContacts = [
  ['CBI', 'cbi.gov.in', '011-24368134'],
  ['ED', 'enforcementdirectorate.gov.in', '011-23319000'],
  ['NCB', 'narcoticsindia.nic.in', '1800-11-0031'],
  ['TRAI', 'trai.gov.in', '1800-110-020'],
  ['Income Tax', 'incometaxindia.gov.in', '1800-103-0025'],
  ['Cyber Crime', 'cybercrime.gov.in', '1930'],
]

const relatedScams = [
  {
    title: 'OTP & UPI PIN Fraud',
    relation: 'Digital arrest often begins with a fake bank, TRAI, or agency call that escalates into legal threats.',
    href: '/scams/upi-fraud/otp-fraud',
  },
  {
    title: 'QR Code UPI Fraud',
    relation: 'Some callers ask victims to scan a fake government QR code to pay the security deposit.',
    href: '/scams/upi-fraud/qr-code-scam',
  },
  {
    title: 'Fake UPI Payment Screenshot',
    relation: 'A lower-pressure payment deception, but still relies on victims not verifying money movement themselves.',
    href: '/scams/upi-fraud/fake-payment-screenshot',
  },
  {
    title: 'Digital Arrest Standalone Hub',
    relation: 'Broader guide covering CBI, ED, TRAI, Customs, NCB, WhatsApp video call, and agency-specific variants.',
    href: '/scams/digital-arrest',
  },
  {
    title: 'Fake UPI Payment Link',
    relation: 'Some fake officers send links that mimic payment or verification portals to steal credentials.',
    href: '/scams/upi-fraud/fake-upi-link',
  },
  {
    title: 'Investment & Job UPI Fraud',
    relation: 'Fake investment or job operators may use legal threats when victims ask for withdrawals.',
    href: '/scams/upi-fraud/investment-job-fraud',
  },
]

const FAQ_ITEMS = [
  {
    question: 'What is a digital arrest scam in India?',
    answer:
      'A digital arrest scam is a cyber extortion fraud where a criminal impersonates a CBI, ED, NCB, TRAI, Income Tax, Customs, or police officer, claims you are under investigation, keeps you on a phone or video call, and demands payment to avoid arrest.',
  },
  {
    question: 'Is digital arrest a real legal procedure?',
    answer:
      'No. There is no concept of digital arrest under Indian law. Official I4C advisories state that real law enforcement will not arrest you digitally.',
  },
  {
    question: 'Do CBI, ED, police, or TRAI demand UPI payments?',
    answer:
      'No. Government agencies do not demand UPI payments, bank transfers, cryptocurrency, or cash deposits to settle cases, cancel warrants, or avoid arrest.',
  },
  {
    question: 'What should I do if I am on a digital arrest call right now?',
    answer:
      'Hang up immediately, tell a family member, do not pay, do not share screen, do not install apps, check the caller number, and report at cybercrime.gov.in. If money has moved, call 1930 immediately.',
  },
  {
    question: 'How do I verify if a caller is a real government officer?',
    answer:
      'End the call and contact the agency only through its official website or published phone number. Never trust a number, badge, ID card, warrant, or link sent by the caller.',
  },
  {
    question: 'What is the drug parcel digital arrest variant?',
    answer:
      'The caller claims a parcel in your name was seized with drugs, fake passports, or foreign currency. This is a fabricated pretext used to scare victims into video calls and UPI payments.',
  },
  {
    question: 'Can money lost in a digital arrest scam be recovered?',
    answer:
      'Recovery is possible but depends heavily on speed. Call 1930 within 30 minutes, file on cybercrime.gov.in, contact your bank, preserve evidence, and file an FIR.',
  },
  {
    question: 'Why do educated people fall for digital arrest scams?',
    answer:
      'The scam is designed to create fear, isolation, authority pressure, and time pressure. The victim is prevented from getting a reality check from family or friends.',
  },
]

const schemas = [
  webPageSchema({
    name: 'Digital Arrest Scam India 2026: How It Works & How to Escape',
    description: metadata.description as string,
    url: PAGE_PATH,
  }),
  breadcrumbListSchema([
    { name: 'Home', url: '/' },
    { name: 'Scams', url: '/scams' },
    { name: 'UPI Fraud', url: '/scams/upi-fraud' },
    { name: 'Digital Arrest Scam', url: PAGE_PATH },
  ]),
  faqPageSchema(FAQ_ITEMS),
  {
    '@context': 'https://schema.org' as const,
    '@type': 'Article',
    headline: 'Digital Arrest Scam India 2026: How It Works & How to Escape',
    description: metadata.description as string,
    url: CANONICAL,
    image: `${SITE_URL}${HERO_IMAGE}`,
    author: organizationRef(),
    publisher: organizationRef(),
    datePublished: '2026-03-01',
    dateModified: '2026-07-01',
    inLanguage: 'en-IN',
    articleSection: 'UPI Fraud',
    keywords: ['digital arrest scam india', 'fake cbi arrest india', 'digital arrest upi payment', 'fake ed officer call india'],
  },
  {
    '@context': 'https://schema.org' as const,
    '@type': 'DefinedTerm',
    name: 'Digital arrest',
    description:
      'Digital arrest is a cyber extortion scam in which criminals impersonate law enforcement or government officials over phone or video calls and pressure victims to pay money under fabricated legal threats.',
    url: CANONICAL,
  },
  {
    '@context': 'https://schema.org' as const,
    '@type': 'HowTo',
    name: 'What to do during a digital arrest scam call',
    description: 'Immediate steps to escape a fake digital arrest call in India.',
    step: [
      { '@type': 'HowToStep', name: 'Hang up immediately', text: 'Disconnect the call. You do not need permission from the caller.' },
      { '@type': 'HowToStep', name: 'Tell a trusted person', text: 'Call a family member, friend, lawyer, or local police station.' },
      { '@type': 'HowToStep', name: 'Do not pay', text: 'Do not make UPI, bank transfer, cash deposit, or crypto payment.' },
      { '@type': 'HowToStep', name: 'Report fast', text: 'If money moved, call 1930 and file at cybercrime.gov.in.' },
    ],
  },
]

export default function DigitalArrestUpiScamPage() {
  return (
    <DefaultLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schemas) }} />

      <section className="bg-gradient-to-br from-red-50 via-white to-slate-100 px-4 py-16 dark:from-gray-950 dark:via-gray-900 dark:to-red-950">
        <div className="mx-auto max-w-5xl">
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            <Link href="/">Home</Link><span aria-hidden="true">/</span>
            <Link href="/scams">Scams</Link><span aria-hidden="true">/</span>
            <Link href="/scams/upi-fraud">UPI Fraud</Link><span aria-hidden="true">/</span>
            <span className="font-medium text-gray-700 dark:text-gray-300">Digital Arrest Scam</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center rounded-full border border-red-200 bg-red-100 px-4 py-1.5 text-xs font-semibold text-red-700 dark:border-red-800 dark:bg-red-900/40 dark:text-red-300">
                UPI Fraud Guide
              </div>
              <h1 className="mb-5 text-4xl font-extrabold leading-tight text-gray-900 dark:text-white md:text-5xl">
                Digital Arrest Scam India 2026
              </h1>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                Fake CBI, ED, NCB, TRAI, Income Tax, Customs, or police officers threaten arrest
                on phone or video call and demand UPI payment to &quot;resolve&quot; a fabricated case.
                There is no legal concept of digital arrest in India.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/phone-number-checker" className="rounded-xl bg-red-600 px-5 py-3 text-sm font-bold text-white shadow hover:bg-red-700">
                  Check Caller Number
                </Link>
                <Link href="/upi-id-checker" className="rounded-xl border border-red-200 bg-white px-5 py-3 text-sm font-bold text-red-700 shadow-sm hover:bg-red-50 dark:border-red-800 dark:bg-gray-900 dark:text-red-300">
                  Check UPI ID
                </Link>
              </div>
            </div>
            <figure className="overflow-hidden rounded-2xl border border-red-200 bg-white shadow-lg dark:border-red-900 dark:bg-gray-900">
              <Image
                src={HERO_IMAGE}
                alt="Incoming call from fake CBI officer in digital arrest scam"
                width={1200}
                height={675}
                className="h-auto w-full object-cover"
                priority
              />
              <figcaption className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400">
                The call may look official, but any UPI payment demand under arrest threat is fraud.
              </figcaption>
            </figure>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-red-100 bg-white p-4 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <div className="text-2xl font-extrabold text-red-700 dark:text-red-300">{stat.value}</div>
                <p className="mt-2 text-xs leading-relaxed text-gray-500 dark:text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-red-600 px-4 py-4 text-white dark:bg-red-700">
        <div className="mx-auto max-w-5xl text-sm font-medium">
          <strong>Rule:</strong> Real agencies do not arrest on WhatsApp, Skype, Zoom, or demand UPI payment to settle a case.
        </div>
      </div>

      <main className="mx-auto max-w-5xl space-y-16 px-4 py-14 sm:px-6 lg:px-8">
        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">What Is the Digital Arrest Scam?</h2>
          <div className="grid gap-8 lg:grid-cols-[1fr_340px] lg:items-start">
            <div className="rounded-2xl border-2 border-red-300 bg-red-50 p-6 dark:border-red-800 dark:bg-red-950/30">
              <p className="text-xl font-extrabold text-red-900 dark:text-red-200">
                Digital arrest is cyber extortion, not a legal arrest.
              </p>
              <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-200">
                The scammer fabricates a criminal case, keeps you on a call, blocks you from getting
                help, then demands money through UPI, bank transfer, or a deposit account. The official
                I4C advisory states that real law enforcement will not arrest you digitally and that
                there is no concept of digital arrest under Indian law.
              </p>
              <div className="mt-5 rounded-xl bg-white p-4 text-sm text-gray-700 dark:bg-gray-900 dark:text-gray-300">
                <p className="font-bold text-gray-900 dark:text-white">Hindi meaning</p>
                <p className="mt-1">
                  Digital arrest ka matlab scammer phone ya video call par CBI, ED, police ya TRAI
                  officer ban kar darata hai aur arrest se bachne ke naam par payment mangta hai.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <p className="font-bold text-gray-900 dark:text-white">Suspicious agency call?</p>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                Check the caller before responding. If payment has already happened, call 1930 first.
              </p>
              <Link href="/phone-number-checker" className="mt-4 inline-flex rounded-xl bg-red-600 px-5 py-3 text-sm font-bold text-white hover:bg-red-700">
                Check Number Free
              </Link>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">How Digital Arrest Scams Work - 4 Stages</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {stages.map((stage, index) => (
              <div key={stage.title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">{index + 1}</span>
                <h3 className="mt-4 text-base font-bold text-gray-900 dark:text-white">{stage.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{stage.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">Common Scripts Used by Fake Officers</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {pretexts.map((pretext) => (
              <div key={pretext} className="rounded-xl border border-orange-100 bg-orange-50 p-4 text-sm text-gray-700 dark:border-orange-900 dark:bg-orange-950/30 dark:text-gray-200">
                {pretext}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">8 Warning Signs That the Call Is Fraud</h2>
          <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-start">
            <div className="rounded-2xl border border-red-200 bg-red-50 p-6 dark:border-red-800 dark:bg-red-950/30">
              <ol className="space-y-4">
                {warningSigns.map((sign, index) => (
                  <li key={sign} className="flex gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">{index + 1}</span>
                    <span className="text-sm leading-relaxed text-gray-700 dark:text-gray-200">{sign}</span>
                  </li>
                ))}
              </ol>
            </div>
            <figure className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <Image
                src="/blog/digital-arrest-scam-india/cbi-officer-cyber-crime.webp"
                alt="Fake CBI cyber crime officer used in digital arrest scam warning"
                width={1200}
                height={800}
                className="h-auto w-full object-cover"
              />
              <figcaption className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400">
                Uniforms, fake case files, and official-looking rooms are visual pressure tactics.
              </figcaption>
            </figure>
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">5 Rules That Stop the Scam Immediately</h2>
          <div className="space-y-4">
            {protectionRules.map((rule, index) => (
              <div key={rule.title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <span className="text-xs font-bold uppercase tracking-widest text-green-700 dark:text-green-300">Rule {index + 1}</span>
                <h3 className="mt-2 text-base font-bold text-gray-900 dark:text-white">{rule.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{rule.body}</p>
                {index === 4 && (
                  <div className="mt-3 flex flex-wrap gap-3">
                    <Link href="/phone-number-checker" className="text-sm font-semibold text-red-600 hover:underline dark:text-red-400">
                      Check caller number
                    </Link>
                    <Link href="/upi-id-checker" className="text-sm font-semibold text-red-600 hover:underline dark:text-red-400">
                      Check UPI ID
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-extrabold text-gray-900 dark:text-white">What to Do If You Already Paid</h2>
          <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-300">
            Speed matters. Digital arrest payments are usually moved through mule accounts quickly, so the first 30 minutes are critical.
          </p>
          <div className="space-y-4">
            {recoverySteps.map((step, index) => (
              <div key={step.title} className={`rounded-2xl border p-5 shadow-sm ${index === 0 ? 'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950/30' : 'border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900'}`}>
                <div className="flex gap-4">
                  <span className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold ${index === 0 ? 'bg-red-600 text-white' : 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300'}`}>
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
            <p className="mb-3 font-bold text-red-400">Digital arrest recovery timeline</p>
            <p><span className="text-green-400">Immediately</span> - Hang up. Tell family. Call 1930.</p>
            <p><span className="text-yellow-400">Within 30 min</span> - 1930 freeze request, bank fraud team, UPI app dispute.</p>
            <p><span className="text-orange-400">Within 1 hour</span> - cybercrime.gov.in complaint and agency impersonation report.</p>
            <p><span className="text-red-400">Within 7 days</span> - FIR at cybercrime police station with full evidence.</p>
          </div>
          <div className="mt-8 rounded-2xl bg-gradient-to-r from-red-600 to-rose-600 p-6 text-center text-white shadow-lg">
            <p className="text-lg font-bold">Report this digital arrest scammer and warn other Indians</p>
            <ReportScamButton className="mt-4 inline-flex cursor-pointer rounded-xl bg-white px-6 py-3 text-sm font-bold text-red-700 shadow transition-transform hover:scale-105">
              Report This Scam
            </ReportScamButton>
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">Official Contacts to Verify Any Agency Claim</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-800">
            <table className="w-full text-sm">
              <thead className="bg-red-50 dark:bg-red-950/30">
                <tr>
                  <th className="px-4 py-3 text-left font-bold text-gray-900 dark:text-white">Agency</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-900 dark:text-white">Official Website</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-900 dark:text-white">Contact</th>
                </tr>
              </thead>
              <tbody>
                {officialContacts.map(([agency, website, phone], index) => (
                  <tr key={agency} className={index % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800'}>
                    <td className="border-t border-gray-100 px-4 py-3 font-semibold text-gray-900 dark:border-gray-700 dark:text-white">{agency}</td>
                    <td className="border-t border-gray-100 px-4 py-3 text-gray-600 dark:border-gray-700 dark:text-gray-300">{website}</td>
                    <td className="border-t border-gray-100 px-4 py-3 font-semibold text-red-700 dark:border-gray-700 dark:text-red-300">{phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            Type official websites yourself. Do not click a link sent by the caller.
          </p>
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
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">Free Tools to Protect Yourself</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ['Phone Number Checker', 'Check if the alleged officer number has been reported by other Indians.', '/phone-number-checker'],
              ['UPI ID Checker', 'Verify any UPI ID before making a payment under legal threat.', '/upi-id-checker'],
            ].map(([title, body, href]) => (
              <Link key={title} href={href} className="rounded-2xl border border-red-100 bg-red-50 p-5 text-center transition-shadow hover:shadow-md dark:border-red-900 dark:bg-red-950/30">
                <p className="font-bold text-gray-900 dark:text-white">{title}</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{body}</p>
              </Link>
            ))}
          </div>
          <div className="mt-4 rounded-2xl border border-red-100 bg-red-50 p-5 text-center dark:border-red-900 dark:bg-red-950/30">
            <p className="font-bold text-gray-900 dark:text-white">Report a Scam</p>
            <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              Report the scammer number so other victims see the warning.
            </p>
            <ReportScamButton className="mt-4 inline-flex cursor-pointer rounded-xl bg-red-600 px-5 py-3 text-sm font-bold text-white shadow hover:bg-red-700">
              Report Scam
            </ReportScamButton>
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-extrabold text-gray-900 dark:text-white">Frequently Asked Questions About Digital Arrest Scam India</h2>
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
