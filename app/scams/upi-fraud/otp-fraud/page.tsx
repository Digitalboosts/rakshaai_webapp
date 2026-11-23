import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import DefaultLayout from '@/components/DefaultLayout'
import RelatedTopics from '@/components/RelatedTopics'
import ReportScamButton from '@/components/ReportScamButton'
import { breadcrumbListSchema, faqPageSchema, jsonLd, organizationRef, webPageSchema } from '@/lib/seo/schema'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://rakshaai.co'
const PAGE_PATH = '/scams/upi-fraud/otp-fraud'
const CANONICAL = `${SITE_URL}${PAGE_PATH}`
const HERO_IMAGE = '/blog/fake-customer-care-number-scam-india/real-agent-vs-scammer.webp'

export const metadata: Metadata = {
  title: 'OTP & UPI PIN Fraud via Fake Bank Calls India 2026 | Guide',
  description:
    'Fake bank calls asking for your OTP or UPI PIN in India 2026 - how the scam works, SBI/HDFC/ICICI impersonation examples, 5 protection rules and how to report with 1930 helpline.',
  alternates: { canonical: CANONICAL },
  robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  openGraph: {
    title: 'OTP & UPI PIN Fraud via Fake Bank Calls India 2026',
    description:
      'Fake SBI, HDFC, ICICI, RBI and TRAI calls ask for OTP or UPI PIN. Learn the scripts, red flags, and emergency reporting steps.',
    url: CANONICAL,
    type: 'article',
    siteName: 'RakshaAI',
    locale: 'en_IN',
    images: [{ url: HERO_IMAGE, width: 1448, height: 1086, alt: 'Real bank agent versus scammer OTP call warning' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OTP & UPI PIN Fraud via Fake Bank Calls India 2026',
    description: 'No bank, RBI, NPCI, TRAI, or UIDAI will ever ask for your OTP or UPI PIN.',
    images: [HERO_IMAGE],
  },
  other: {
    'geo.region': 'IN',
    language: 'en-IN',
  },
}

const stats = [
  { value: '31%', label: 'Share of UPI fraud complaints - OTP fraud' },
  { value: '<60 sec', label: 'Time for account to be emptied after OTP shared' },
  { value: 'Rs 68,000', label: 'Average loss per OTP fraud victim in India' },
  { value: '~5%', label: 'Recovery rate when reported within 30 minutes' },
]

const pretexts = [
  'Your account will be blocked in 24 hours unless you complete KYC verification.',
  'An unauthorised transaction was attempted. Share your OTP to cancel it immediately.',
  'Your UPI limit is expiring. Share your PIN to renew it.',
  'RBI is updating all bank accounts. Verify OTP to avoid suspension.',
  'Your Aadhaar has been linked to a suspicious account. Share OTP to de-link it.',
  'TRAI is blocking your SIM due to illegal activity. Press 1 to speak to a cybercrime officer.',
  'You have unclaimed UPI cashback. Share your OTP to receive it.',
]

const bankCases = [
  {
    bank: 'SBI OTP Scam - KYC Expiry',
    detail: 'Caller claimed SBI KYC had expired, asked for OTP to update records, and Rs 1,45,000 moved out within 45 seconds.',
  },
  {
    bank: 'HDFC OTP Scam - Blocked Transaction',
    detail: 'Fake fraud-team caller said a high-value transaction was blocked and asked for UPI PIN to confirm the block.',
  },
  {
    bank: 'ICICI Fake Call - Aadhaar Linking',
    detail: 'Caller said Aadhaar was linked to a suspicious account and used the OTP to authorise transfers.',
  },
  {
    bank: 'Fake RBI Call - Account Upgrade',
    detail: 'Scammer posed as an RBI officer and claimed accounts would close unless OTP verification was completed.',
  },
  {
    bank: 'TRAI Fake Call - SIM Block Threat',
    detail: 'Automated call threatened SIM disconnection, then a fake officer asked for OTP to cancel the block.',
  },
  {
    bank: 'Aadhaar OTP Fraud - UIDAI Impersonation',
    detail: 'Fake UIDAI caller asked for Aadhaar OTP to de-link suspicious activity and used it for financial authentication.',
  },
]

const warningSigns = [
  'The caller asks for OTP, UPI PIN, CVV, net-banking password, or any security credential.',
  'The caller says your account or SIM will be blocked unless you act within minutes.',
  'The caller knows your name, city, or partial account details and uses that to sound official.',
  'An OTP arrives during the call. That OTP is for a transaction the scammer has triggered.',
  'The caller says not to share OTP with anyone except them.',
  'The caller number is a normal mobile number or an official-looking spoofed number.',
  'They ask you to download an app, click a link, or share your screen.',
  'The call is unsolicited and about a transaction or account problem you did not initiate.',
]

const protectionRules = [
  {
    title: 'Never share OTP or UPI PIN with any caller',
    body: 'OTP and UPI PIN are designed to be known only by you. If a caller needs them, they are not helping you. They are authorising a transaction.',
  },
  {
    title: 'Hang up and call back on the official number',
    body: 'Use the number printed on your debit card or the bank website you type yourself. Caller ID can be spoofed.',
  },
  {
    title: 'Check the caller number before engaging',
    body: 'Search the number on RakshaAI Phone Number Checker. Active vishing numbers often collect reports within hours.',
  },
  {
    title: 'Check your own UPI app in real time',
    body: 'Do not trust the caller description. Open PhonePe, Google Pay, Paytm, or your bank app and verify transaction history yourself.',
  },
  {
    title: 'Enable alerts and transaction limits',
    body: 'Instant debit alerts and lower UPI limits reduce the damage and help you call 1930 within the critical freeze window.',
  },
]

const recoverySteps = [
  {
    title: 'Call 1930 immediately',
    body: 'Do this before finishing any article. Give the amount, transaction time, recipient UPI ID, and caller number.',
  },
  {
    title: 'Block UPI access and change your PIN',
    body: 'Change UPI PIN in PhonePe, Google Pay, Paytm, or your bank app. If net banking was exposed, change that password too.',
  },
  {
    title: 'File on cybercrime.gov.in',
    body: 'Choose Financial Cyber Fraud - UPI Fraud and attach transaction screenshots, call records, phone numbers, and messages.',
  },
  {
    title: 'Contact your bank fraud team',
    body: 'Use the bank official fraud helpline and share the 1930 and cybercrime complaint references.',
  },
  {
    title: 'Report the number and file FIR',
    body: 'Report the phone number and UPI ID on RakshaAI, then file an FIR with all evidence and complaint references.',
  },
]

const fraudStats = [
  { metric: 'OTP fraud share of UPI complaints', data: '31%', source: 'NPCI Annual Report 2025' },
  { metric: 'Average loss per OTP fraud victim', data: 'Rs 68,000', source: 'MHA I4C 2025' },
  { metric: 'Recovery rate when reported within 30 minutes', data: '~5%', source: '1930 helpline data 2025' },
  { metric: 'Most impersonated entity', data: 'SBI', source: 'cybercrime.gov.in 2025' },
  { metric: 'Fastest growing OTP scam variant', data: 'Fake TRAI SIM block calls', source: 'CERT-In advisory 2025' },
  { metric: 'Primary delivery channel', data: 'Phone call', source: 'I4C Cyber Crime Report 2025' },
  { metric: 'Time from OTP shared to account emptied', data: '<60 seconds', source: 'NPCI forensics data 2025' },
]

const relatedScams = [
  {
    title: 'QR Code UPI Fraud',
    relation: 'Also creates urgency so the victim acts before checking the payment direction.',
    href: '/scams/upi-fraud/qr-code-scam',
  },
  {
    title: 'Digital Arrest Scam',
    relation: 'Vishing escalation where a fake police or CBI caller demands UPI transfer under legal threat.',
    href: '/scams/upi-fraud/digital-arrest-scam',
  },
  {
    title: 'Wrong Transfer Refund Scam',
    relation: 'Also begins with a stranger call and social engineering, but exploits goodwill instead of fear.',
    href: '/blog/wrong-transfer-refund-scam-india',
  },
  {
    title: 'Fake Payment Screenshot',
    relation: 'Uses payment deception and urgency to make victims release goods without verified payment.',
    href: '/scams/upi-fraud/fake-payment-screenshot',
  },
  {
    title: 'Fake UPI Payment Link',
    relation: 'A fake page can steal UPI PIN or bank credentials before a follow-up OTP call drains the account.',
    href: '/scams/upi-fraud/fake-upi-link',
  },
  {
    title: 'Investment & Job UPI Fraud',
    relation: 'Task and investment scammers may later ask for OTP or PIN as a second extraction layer.',
    href: '/scams/upi-fraud/investment-job-fraud',
  },
]

const FAQ_ITEMS = [
  {
    question: 'What is OTP fraud in India and how does it work?',
    answer:
      'OTP fraud is when a scammer calls posing as a bank, RBI, TRAI, UIDAI, or UPI support officer and persuades you to share the one-time password sent to your phone. The OTP is actually for a transaction the scammer has initiated, and sharing it authorises the payment.',
  },
  {
    question: 'Do banks in India ever call customers and ask for OTP or UPI PIN?',
    answer:
      'No. Banks, RBI, NPCI, TRAI, UIDAI, and UPI apps do not call customers to ask for OTP, UPI PIN, CVV, net-banking password, or debit card PIN. Any caller asking for these is a fraudster.',
  },
  {
    question: 'Why do I get an OTP during a suspicious call?',
    answer:
      'An OTP arriving during a suspicious call usually means the scammer has triggered a login or payment attempt using your registered mobile number. The OTP is for their transaction, not for verification.',
  },
  {
    question: 'What should I do immediately if I already shared my OTP?',
    answer:
      'Change your UPI PIN, call 1930 immediately, screenshot the fraudulent transaction, call your bank fraud team, file at cybercrime.gov.in, and file an FIR with your complaint references.',
  },
  {
    question: 'How do I identify if a bank call is fake in India?',
    answer:
      'It is fake if the caller asks for OTP, UPI PIN, CVV, password, remote access, screen sharing, or urgent action under threat. Hang up and call your bank on the official number printed on your card.',
  },
  {
    question: 'What is TRAI fake call fraud in India?',
    answer:
      'TRAI fake call scams threaten SIM disconnection and transfer you to a fake cybercrime officer who asks for OTP or UPI PIN. TRAI does not make automated calls threatening immediate SIM block.',
  },
  {
    question: 'How do I report OTP fraud to police and the cybercrime portal?',
    answer:
      'Call 1930, file at cybercrime.gov.in under Financial Cyber Fraud, raise a bank or UPI app dispute, report the caller number on RakshaAI, and file an FIR at your nearest cybercrime police station.',
  },
  {
    question: 'What is SIM swap fraud and how is it related to OTP fraud?',
    answer:
      'SIM swap fraud is when a scammer ports your mobile number to a SIM they control, so all OTPs go to them. Warning signs include sudden no-service, stopped SMS, or SIM replacement messages you did not request.',
  },
  {
    question: 'Can I recover money lost to OTP fraud in India?',
    answer:
      'Recovery is difficult but possible if you report quickly. The best chance is calling 1930 within 30 minutes so the receiving mule account can be frozen before the funds are moved.',
  },
  {
    question: 'What is Aadhaar OTP fraud and how does it work?',
    answer:
      'Aadhaar OTP fraud involves fake UIDAI callers claiming your Aadhaar is misused and asking for an OTP to de-link it. UIDAI does not call individuals to request Aadhaar OTPs.',
  },
]

const schemas = [
  webPageSchema({
    name: 'OTP & UPI PIN Fraud via Fake Bank Calls India 2026',
    description: metadata.description as string,
    url: PAGE_PATH,
  }),
  breadcrumbListSchema([
    { name: 'Home', url: '/' },
    { name: 'Scams', url: '/scams' },
    { name: 'UPI Fraud', url: '/scams/upi-fraud' },
    { name: 'OTP & PIN Fraud', url: PAGE_PATH },
  ]),
  faqPageSchema(FAQ_ITEMS),
  {
    '@context': 'https://schema.org' as const,
    '@type': 'Article',
    headline: 'OTP & UPI PIN Fraud via Fake Bank Calls India 2026',
    description: metadata.description as string,
    url: CANONICAL,
    image: `${SITE_URL}${HERO_IMAGE}`,
    author: organizationRef(),
    publisher: organizationRef(),
    datePublished: '2026-03-01',
    dateModified: '2026-03-01',
    inLanguage: 'en-IN',
    articleSection: 'UPI Fraud',
    keywords: ['otp fraud india', 'upi pin fraud', 'fake bank call otp scam india', 'vishing scam india'],
  },
  {
    '@context': 'https://schema.org' as const,
    '@type': 'DefinedTerm',
    name: 'OTP fraud',
    description:
      'A social-engineering fraud where a scammer persuades a victim to share a one-time password used to authorise a payment, login, or account change.',
    url: CANONICAL,
  },
]

export default function UpiOtpFraudPage() {
  return (
    <DefaultLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schemas) }} />

      <section className="bg-gradient-to-br from-red-50 via-white to-orange-50 px-4 py-16 dark:from-gray-950 dark:via-gray-900 dark:to-red-950">
        <div className="mx-auto max-w-5xl">
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            <Link href="/">Home</Link><span aria-hidden="true">/</span>
            <Link href="/scams">Scams</Link><span aria-hidden="true">/</span>
            <Link href="/scams/upi-fraud">UPI Fraud</Link><span aria-hidden="true">/</span>
            <span className="font-medium text-gray-700 dark:text-gray-300">OTP & PIN Fraud</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center rounded-full border border-red-200 bg-red-100 px-4 py-1.5 text-xs font-semibold text-red-700 dark:border-red-800 dark:bg-red-900/40 dark:text-red-300">
                UPI Fraud Guide
              </div>
              <h1 className="mb-5 text-4xl font-extrabold leading-tight text-gray-900 dark:text-white md:text-5xl">
                OTP & UPI PIN Fraud via Fake Bank Calls India 2026
              </h1>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                Fake bank, RBI, TRAI, UIDAI, and UPI support callers ask for your OTP or UPI PIN to
                &quot;verify&quot;, &quot;cancel&quot;, or &quot;protect&quot; your account. The moment you share it,
                money can leave your account in under 60 seconds.
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
                alt="Real bank agent versus scammer OTP call warning"
                width={1448}
                height={1086}
                className="h-auto w-full object-cover"
                priority
              />
              <figcaption className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400">
                Banks never ask for OTP, UPI PIN, remote access, or money transfers over a call.
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
          <strong>One rule:</strong> No bank, RBI, NPCI, TRAI, UIDAI, or government body in India will ever call and ask for your OTP or UPI PIN.
        </div>
      </div>

      <main className="mx-auto max-w-5xl space-y-16 px-4 py-14 sm:px-6 lg:px-8">
        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">The One Rule That Eliminates OTP and UPI PIN Fraud</h2>
          <div className="rounded-2xl border-2 border-red-300 bg-red-50 p-6 dark:border-red-800 dark:bg-red-950/30">
            <p className="text-xl font-extrabold text-red-800 dark:text-red-200">
              Never share OTP or UPI PIN with anyone on a call. No exception. No emergency.
            </p>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {[
                ['OTP', 'A one-time authorisation code for your use only.'],
                ['UPI PIN', 'Your payment password. Sharing it is like handing over your debit card PIN.'],
                ['Caller pressure', 'Urgency, threats, and official-sounding language are part of the script.'],
              ].map(([title, body]) => (
                <div key={title} className="rounded-xl bg-white p-4 dark:bg-gray-900">
                  <p className="text-sm font-bold text-gray-900 dark:text-white">{title}</p>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-extrabold text-gray-900 dark:text-white">How OTP Fraud via Fake Bank Calls Works</h2>
          <p className="mb-8 leading-relaxed text-gray-600 dark:text-gray-300">
            Every fake bank call OTP scam follows the same pattern: a pretext, credibility building, then the OTP extraction while a transaction is already waiting on the scammer&apos;s device.
          </p>
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              ['1', 'The pretext', 'The caller claims KYC expiry, fraud alert, RBI update, SIM block, Aadhaar misuse, or cashback.'],
              ['2', 'Credibility', 'They know partial details, use fake employee IDs, spoof caller ID, or send fake ID-card images.'],
              ['3', 'The OTP entry', 'They trigger a transaction, ask for the OTP, enter it instantly, and move funds to a mule account.'],
            ].map(([num, title, body]) => (
              <div key={title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">{num}</span>
                <h3 className="mt-4 text-base font-bold text-gray-900 dark:text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">Common Fake Bank Call Scripts</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {pretexts.map((pretext) => (
              <div key={pretext} className="rounded-xl border border-orange-100 bg-orange-50 p-4 text-sm text-gray-700 dark:border-orange-900 dark:bg-orange-950/30 dark:text-gray-200">
                {pretext}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">Real India OTP Fraud Case Examples</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-800">
            <table className="w-full text-sm">
              <thead className="bg-red-50 dark:bg-red-950/30">
                <tr>
                  <th className="px-4 py-3 text-left font-bold text-gray-900 dark:text-white">Bank / Pretext</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-900 dark:text-white">What Happened</th>
                </tr>
              </thead>
              <tbody>
                {bankCases.map((item, index) => (
                  <tr key={item.bank} className={index % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800'}>
                    <td className="border-t border-gray-100 px-4 py-3 font-semibold text-red-700 dark:border-gray-700 dark:text-red-300">{item.bank}</td>
                    <td className="border-t border-gray-100 px-4 py-3 text-gray-600 dark:border-gray-700 dark:text-gray-300">{item.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">8 Warning Signs of a Fake Bank Call OTP Scam</h2>
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
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">5 Rules to Protect Yourself</h2>
          <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
            <div className="space-y-4">
              {protectionRules.map((rule, index) => (
                <div key={rule.title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                  <span className="text-xs font-bold uppercase tracking-widest text-green-700 dark:text-green-300">Rule {index + 1}</span>
                  <h3 className="mt-2 text-base font-bold text-gray-900 dark:text-white">{rule.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{rule.body}</p>
                  {index === 2 && (
                    <Link href="/phone-number-checker" className="mt-3 inline-flex text-sm font-semibold text-red-600 hover:underline dark:text-red-400">
                      Check caller number
                    </Link>
                  )}
                  {index === 3 && (
                    <Link href="/upi-id-checker" className="mt-3 inline-flex text-sm font-semibold text-red-600 hover:underline dark:text-red-400">
                      Check UPI ID
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <figure className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <Image
                src="/blog/fake-customer-care-number-scam-india/fake-customer-care-hero.webp"
                alt="Fake customer care number search result used in bank OTP scams"
                width={1672}
                height={941}
                className="h-auto w-full object-cover"
              />
              <figcaption className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400">
                Always call the official number from your card or bank website you typed yourself.
              </figcaption>
            </figure>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-extrabold text-gray-900 dark:text-white">What to Do If You Already Shared Your OTP or UPI PIN</h2>
          <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-300">
            Act in the next 10 minutes. The speed of your response determines whether the receiving account can be frozen before funds are moved.
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
            <p className="mb-3 font-bold text-orange-400">OTP fraud recovery timeline</p>
            <p><span className="text-green-400">Immediately</span> - Change UPI PIN. Call 1930. Stop further transactions.</p>
            <p><span className="text-yellow-400">Within 30 min</span> - 1930 account freeze request.</p>
            <p><span className="text-orange-400">Within 1 hour</span> - cybercrime.gov.in, in-app dispute, bank fraud team.</p>
            <p><span className="text-red-400">Within 7 days</span> - FIR at cybercrime police station.</p>
          </div>
          <div className="mt-8 rounded-2xl bg-gradient-to-r from-red-600 to-rose-600 p-6 text-center text-white shadow-lg">
            <p className="text-lg font-bold">Report this OTP scam and protect other Indians</p>
            <ReportScamButton className="mt-4 inline-flex cursor-pointer rounded-xl bg-white px-6 py-3 text-sm font-bold text-red-700 shadow transition-transform hover:scale-105">
              Report This Scam
            </ReportScamButton>
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">OTP Fraud Statistics India 2026</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-800">
            <table className="w-full text-sm">
              <thead className="bg-orange-50 dark:bg-orange-950/30">
                <tr>
                  <th className="px-4 py-3 text-left font-bold text-gray-900 dark:text-white">Metric</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-900 dark:text-white">Data</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-900 dark:text-white">Source</th>
                </tr>
              </thead>
              <tbody>
                {fraudStats.map((row, index) => (
                  <tr key={row.metric} className={index % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800'}>
                    <td className="border-t border-gray-100 px-4 py-3 font-semibold text-gray-900 dark:border-gray-700 dark:text-white">{row.metric}</td>
                    <td className="border-t border-gray-100 px-4 py-3 font-semibold text-red-700 dark:border-gray-700 dark:text-red-300">{row.data}</td>
                    <td className="border-t border-gray-100 px-4 py-3 text-xs text-gray-500 dark:border-gray-700 dark:text-gray-400">{row.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">Advanced Variant: SIM Swap Fraud</h2>
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                SIM swap fraud is an advanced OTP theft method where the scammer ports your mobile number to a SIM card they control. Once they have your number, every OTP goes to them.
              </p>
              <ul className="mt-5 space-y-3 text-sm text-gray-700 dark:text-gray-200">
                <li>Your phone suddenly shows No Service or SIM Not Registered.</li>
                <li>You stop receiving SMS, calls, and OTPs.</li>
                <li>You receive a SIM replacement confirmation you did not request.</li>
                <li>You cannot log in because OTPs are not arriving.</li>
              </ul>
              <p className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800 dark:border-red-800 dark:bg-red-950/30 dark:text-red-200">
                Immediate action: call your telecom provider from another phone, request SIM reversal, call 1930, and file on cybercrime.gov.in.
              </p>
            </div>
            <figure className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <Image
                src="/blog/sim-swap-fraud-india/sim-swap-how-it-works.webp"
                alt="SIM swap fraud flow showing data collection, SIM port, phone signal loss, and bank account drain"
                width={1000}
                height={562}
                className="h-auto w-full object-cover"
              />
              <figcaption className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400">
                SIM swap fraud steals OTPs without a fake bank call.
              </figcaption>
            </figure>
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">Other UPI Fraud Types That Use Similar Tactics</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-800">
            <table className="w-full text-sm">
              <thead className="bg-red-50 dark:bg-red-950/30">
                <tr>
                  <th className="px-4 py-3 text-left font-bold text-gray-900 dark:text-white">Related UPI Scam</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-900 dark:text-white">How It Relates</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-900 dark:text-white">Full Guide</th>
                </tr>
              </thead>
              <tbody>
                {relatedScams.map((item, index) => (
                  <tr key={item.title} className={index % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800'}>
                    <td className="border-t border-gray-100 px-4 py-3 font-semibold text-gray-900 dark:border-gray-700 dark:text-white">{item.title}</td>
                    <td className="border-t border-gray-100 px-4 py-3 text-gray-600 dark:border-gray-700 dark:text-gray-300">{item.relation}</td>
                    <td className="border-t border-gray-100 px-4 py-3 dark:border-gray-700">
                      <Link href={item.href} className="font-semibold text-red-600 hover:underline dark:text-red-400">
                        Read guide
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">Free Tools to Protect Your UPI Account</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ['Phone Number Checker', 'Check if the caller number has been reported by other Indians.', '/phone-number-checker'],
              ['UPI ID Checker', 'Verify any UPI ID before approving any transaction.', '/upi-id-checker'],
              ['Website Safety Checker', 'Verify links sent by callers before entering credentials.', '/website-safety-checker'],
            ].map(([title, body, href]) => (
              <Link key={title} href={href} className="rounded-2xl border border-red-100 bg-red-50 p-5 text-center transition-shadow hover:shadow-md dark:border-red-900 dark:bg-red-950/30">
                <p className="font-bold text-gray-900 dark:text-white">{title}</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{body}</p>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-extrabold text-gray-900 dark:text-white">Frequently Asked Questions About OTP and UPI PIN Fraud</h2>
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
