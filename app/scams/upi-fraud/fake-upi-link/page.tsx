import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import DefaultLayout from '@/components/DefaultLayout'
import RelatedTopics from '@/components/RelatedTopics'
import ReportScamButton from '@/components/ReportScamButton'
import { breadcrumbListSchema, faqPageSchema, jsonLd, organizationRef, webPageSchema } from '@/lib/seo/schema'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://rakshaai.co'
const PAGE_PATH = '/scams/upi-fraud/fake-upi-link'
const CANONICAL = `${SITE_URL}${PAGE_PATH}`
const HERO_IMAGE = '/image/website-safety-check-indian-woman-examining-suspicious-site-rakshaai.jpg'

export const metadata: Metadata = {
  title: 'Fake UPI Payment Link India 2026: How to Spot & Stay Safe',
  description:
    'Fake UPI payment links via WhatsApp, SMS and Telegram mimic PhonePe, Google Pay, Paytm and BHIM to steal credentials. Learn red flags, link checks and reporting steps.',
  alternates: { canonical: CANONICAL },
  robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  openGraph: {
    title: 'Fake UPI Payment Link India 2026: How to Spot & Stay Safe',
    description:
      'UPI phishing links ask for UPI PIN or bank credentials on fake pages. Check the domain before clicking any payment link.',
    url: CANONICAL,
    type: 'article',
    siteName: 'RakshaAI',
    locale: 'en_IN',
    images: [{ url: HERO_IMAGE, width: 640, height: 640, alt: 'Indian user checking a suspicious payment link for safety' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fake UPI Payment Link India 2026',
    description: 'Never enter UPI PIN on a website opened from WhatsApp, SMS, Telegram, or a shortened link.',
    images: [HERO_IMAGE],
  },
  other: {
    'geo.region': 'IN',
    language: 'en-IN',
  },
}

const stats = [
  { value: '+220%', label: 'Reported growth pattern in UPI phishing complaints from 2023 to 2025' },
  { value: '5 min', label: 'Typical danger window after credentials are entered' },
  { value: 'HTTPS', label: 'A padlock means encryption, not that the website is genuine' },
  { value: '1930', label: 'Helpline to call immediately if money moved' },
]

const stages = [
  {
    title: 'Stage 1 - The link arrives in a trusted-looking message',
    body:
      'The message comes through WhatsApp, SMS, Telegram, email, or a social media DM. It claims cashback, refund, prize, subsidy, failed bill payment, or investment withdrawal.',
  },
  {
    title: 'Stage 2 - A fake UPI or bank page opens',
    body:
      'The page copies PhonePe, Google Pay, Paytm, BHIM, or bank branding and uses a similar-looking domain so the page feels legitimate at first glance.',
  },
  {
    title: 'Stage 3 - Credentials are harvested',
    body:
      'The fake page asks for UPI ID, mobile number, UPI PIN, OTP, debit card details, net-banking password, or app login details.',
  },
  {
    title: 'Stage 4 - Funds are moved fast',
    body:
      'The scammer uses the stolen information on real payment systems and moves money through mule accounts before the victim realises the page was fake.',
  },
]

const cases = [
  {
    channel: 'WhatsApp - Fake PhonePe Cashback',
    detail: 'A cashback claim link opened a cloned PhonePe page and asked for UPI PIN as verification. Money was debited within minutes.',
  },
  {
    channel: 'SMS - Fake Bank Refund',
    detail: 'A spoofed bank sender ID sent a refund link. The victim entered net-banking credentials on a fake page.',
  },
  {
    channel: 'WhatsApp Group - Fake BHIM Scheme',
    detail: 'A government-scheme message circulated in a group and led residents to a fake BHIM or NPCI-looking registration page.',
  },
  {
    channel: 'Telegram - Investment Withdrawal',
    detail: 'A job or investment group sent a withdrawal link that asked for UPI PIN before releasing fake profits.',
  },
  {
    channel: 'SMS - Fake Electricity Bill',
    detail: 'A failed-bill-payment link opened a fake bill desk page and asked for UPI credentials.',
  },
  {
    channel: 'Shortened URL',
    detail: 'A bit.ly or tinyurl link hid the real destination and redirected to a fake UPI payment page.',
  },
]

const redFlags = [
  'The domain is misspelled, has extra words, or uses a strange suffix.',
  'The link is shortened with bit.ly, tinyurl, t.co, or another URL shortener.',
  'The page asks for UPI PIN, OTP, debit card PIN, net-banking password, or full card details.',
  'The link arrived unsolicited through WhatsApp, SMS, Telegram, email, or DM.',
  'The URL contains a famous brand name but the real core domain is different.',
  'The page asks for more details than a normal UPI app would need.',
  'The page uses HTTPS or a green padlock and tries to make that feel like proof of safety.',
  'The message creates urgency: claim now, account blocked, refund pending, bill due, or prize expiring.',
]

const rules = [
  {
    title: 'Never enter UPI PIN on any browser page',
    body:
      'UPI PIN belongs inside your installed UPI app on the official UPI PIN screen. A website asking for it is a credential harvesting page.',
  },
  {
    title: 'Check the core domain before clicking',
    body:
      'Read the text between https:// and the next slash. In phonepe.payment-india.com, the core domain is payment-india.com, not phonepe.com.',
  },
  {
    title: 'Treat shortened UPI links as unsafe until checked',
    body:
      'Shorteners hide the destination. Paste the full link into RakshaAI Website Safety Checker before opening it.',
  },
  {
    title: 'Verify collect request UPI IDs before approving',
    body:
      'Some links open your real UPI app with a collect request pre-filled. Check the UPI ID before approving any request.',
  },
  {
    title: 'Check the sender number before engaging',
    body:
      'If the link came from WhatsApp, Telegram, or SMS, search the sender number before replying or clicking.',
  },
]

const recoverySteps = [
  {
    title: 'Change your UPI PIN immediately',
    body:
      'Open the real PhonePe, Google Pay, Paytm, BHIM, or bank app yourself and change the UPI PIN. Do not use any link sent in the message.',
  },
  {
    title: 'Call 1930 if money moved',
    body:
      'Give the transaction amount, time, UPI ID, bank, phone number, and the fake link. Fast reporting gives the best chance of freezing recipient accounts.',
  },
  {
    title: 'File on cybercrime.gov.in',
    body:
      'Attach the full URL, screenshots of the fake page, WhatsApp or SMS message, sender number, and transaction evidence.',
  },
  {
    title: 'Contact your bank fraud team',
    body:
      'Ask for UPI block, net-banking block if credentials were entered, fraud dispute, and beneficiary freeze request.',
  },
  {
    title: 'Report the fake domain',
    body:
      'Report the URL to CERT-In, Google Safe Browsing, and RakshaAI so the fake page can be blocked and future victims are warned.',
  },
]

const platformGuide = [
  ['WhatsApp', 'Unknown number DM, group forward, or compromised contact sends cashback/refund link.', 'Do not open. Copy and check the link first.'],
  ['SMS', 'Spoofed bank sender ID claims payment, KYC, bill, or refund is pending.', 'Banks do not ask for UPI PIN through SMS links.'],
  ['Telegram', 'Investment or job group posts a withdrawal or registration link.', 'Treat all Telegram UPI withdrawal links as unsafe.'],
  ['Email', 'HTML email mimics PhonePe, NPCI, bank, or payment gateway branding.', 'Check sender domain and open official app/site manually.'],
  ['Instagram / Facebook DMs', 'Fake customer support or cashback offer sends a payment page.', 'UPI apps do not send PIN collection pages in DMs.'],
]

const relatedScams = [
  {
    title: 'OTP & UPI PIN Fraud',
    relation: 'Fake links often collect credentials first, then scammers follow up with OTP or PIN calls.',
    href: '/scams/upi-fraud/otp-fraud',
  },
  {
    title: 'QR Code UPI Fraud',
    relation: 'Both exploit UPI flow confusion. Scanning a QR sends money out; entering PIN on a fake page exposes credentials.',
    href: '/scams/upi-fraud/qr-code-scam',
  },
  {
    title: 'Fake UPI Payment Screenshot',
    relation: 'Screenshot scams fake payment proof. Link scams steal credentials through fake pages.',
    href: '/scams/upi-fraud/fake-payment-screenshot',
  },
  {
    title: 'Phishing Scams',
    relation: 'The broader category of fake websites, emails, and cloned pages built to steal credentials.',
    href: '/scams/phishing',
  },
  {
    title: 'Investment & Job UPI Fraud',
    relation: 'Fake investment and task portals often use payment links to collect deposits or credentials.',
    href: '/scams/upi-fraud/investment-job-fraud',
  },
]

const FAQ_ITEMS = [
  {
    question: 'What is a fake UPI payment link?',
    answer:
      'A fake UPI payment link is a fraudulent URL that copies PhonePe, Google Pay, Paytm, BHIM, bank, or payment-gateway branding and asks for credentials such as UPI PIN, OTP, net-banking password, or card details.',
  },
  {
    question: 'How do I check if a UPI payment link is safe?',
    answer:
      'Do not click first. Long-press or hover to see the full URL, identify the core domain, avoid shortened links, and paste uncertain links into a website safety checker before opening them.',
  },
  {
    question: 'Does HTTPS or the green padlock mean the UPI link is safe?',
    answer:
      'No. HTTPS only means the connection is encrypted. It does not prove that the website is genuine. A fake website can also use HTTPS.',
  },
  {
    question: 'Can I enter UPI PIN on a website?',
    answer:
      'No. Your UPI PIN should be entered only inside your installed UPI app on the UPI PIN screen. Any browser webpage asking for UPI PIN is unsafe.',
  },
  {
    question: 'What should I do if I clicked a fake UPI link and entered my PIN?',
    answer:
      'Change your UPI PIN immediately, call 1930 if money moved, file at cybercrime.gov.in, contact your bank fraud team, preserve screenshots, and report the fake domain.',
  },
  {
    question: 'What is a shortened URL UPI scam?',
    answer:
      'A shortened URL UPI scam uses links such as bit.ly or tinyurl to hide the real destination. Always expand or check shortened payment links before opening.',
  },
  {
    question: 'Can fake UPI links install malware?',
    answer:
      'Some suspicious links may try to download malicious apps or APK files. Do not install apps from payment links, keep your phone updated, and use official app stores only.',
  },
  {
    question: 'How do I report a fake UPI link in India?',
    answer:
      'Report to cybercrime.gov.in, call 1930 if money was lost, contact your bank, report the domain to CERT-In or Google Safe Browsing, and report the sender number or URL on RakshaAI.',
  },
]

const schemas = [
  webPageSchema({
    name: 'Fake UPI Payment Link India 2026: How to Spot & Stay Safe',
    description: metadata.description as string,
    url: PAGE_PATH,
  }),
  breadcrumbListSchema([
    { name: 'Home', url: '/' },
    { name: 'Scams', url: '/scams' },
    { name: 'UPI Fraud', url: '/scams/upi-fraud' },
    { name: 'Fake UPI Payment Link', url: PAGE_PATH },
  ]),
  faqPageSchema(FAQ_ITEMS),
  {
    '@context': 'https://schema.org' as const,
    '@type': 'Article',
    headline: 'Fake UPI Payment Link India 2026: How to Spot & Stay Safe',
    description: metadata.description as string,
    url: CANONICAL,
    image: `${SITE_URL}${HERO_IMAGE}`,
    author: organizationRef(),
    publisher: organizationRef(),
    datePublished: '2026-03-01',
    dateModified: '2026-07-01',
    inLanguage: 'en-IN',
    articleSection: 'UPI Fraud',
    keywords: ['fake upi payment link india', 'upi phishing link india', 'fake phonepe link', 'check upi link safety'],
  },
  {
    '@context': 'https://schema.org' as const,
    '@type': 'HowTo',
    name: 'How to check if a UPI payment link is safe',
    description: 'A quick process for checking suspicious UPI links before clicking.',
    step: [
      { '@type': 'HowToStep', name: 'Do not click yet', text: 'Long-press or hover to reveal the full URL first.' },
      { '@type': 'HowToStep', name: 'Find the core domain', text: 'Read the domain between https:// and the next slash.' },
      { '@type': 'HowToStep', name: 'Reject credential requests', text: 'Never enter UPI PIN, OTP, card PIN, or net-banking password on a link-opened webpage.' },
      { '@type': 'HowToStep', name: 'Check uncertain links', text: 'Paste suspicious or shortened links into a safety checker before opening.' },
    ],
  },
]

export default function FakeUpiLinkPage() {
  return (
    <DefaultLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schemas) }} />

      <section className="bg-gradient-to-br from-sky-50 via-white to-indigo-50 px-4 py-16 dark:from-gray-950 dark:via-gray-900 dark:to-sky-950">
        <div className="mx-auto max-w-5xl">
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            <Link href="/">Home</Link><span aria-hidden="true">/</span>
            <Link href="/scams">Scams</Link><span aria-hidden="true">/</span>
            <Link href="/scams/upi-fraud">UPI Fraud</Link><span aria-hidden="true">/</span>
            <span className="font-medium text-gray-700 dark:text-gray-300">Fake UPI Payment Link</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center rounded-full border border-sky-200 bg-sky-100 px-4 py-1.5 text-xs font-semibold text-sky-800 dark:border-sky-800 dark:bg-sky-900/40 dark:text-sky-300">
                UPI Fraud Guide
              </div>
              <h1 className="mb-5 text-4xl font-extrabold leading-tight text-gray-900 dark:text-white md:text-5xl">
                Fake UPI Payment Link India 2026
              </h1>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                Fake UPI links sent through WhatsApp, SMS, Telegram, email, or DMs mimic PhonePe,
                Google Pay, Paytm, BHIM, or bank pages. If the page asks for your UPI PIN, OTP,
                or bank credentials, it is stealing access to your money.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/website-safety-checker" className="rounded-xl bg-sky-600 px-5 py-3 text-sm font-bold text-white shadow hover:bg-sky-700">
                  Check Link Free
                </Link>
                <Link href="/upi-id-checker" className="rounded-xl border border-sky-200 bg-white px-5 py-3 text-sm font-bold text-sky-800 shadow-sm hover:bg-sky-50 dark:border-sky-800 dark:bg-gray-900 dark:text-sky-300">
                  Check UPI ID
                </Link>
              </div>
            </div>
            <figure className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-sky-200 bg-white shadow-lg dark:border-sky-900 dark:bg-gray-900">
              <Image
                src={HERO_IMAGE}
                alt="Indian user checking a suspicious payment link for safety"
                width={640}
                height={640}
                className="h-auto w-full object-cover"
                priority
              />
              <figcaption className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400">
                Check suspicious UPI links before clicking, especially links from messages.
              </figcaption>
            </figure>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-sky-100 bg-white p-4 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <div className="text-2xl font-extrabold text-sky-700 dark:text-sky-300">{stat.value}</div>
                <p className="mt-2 text-xs leading-relaxed text-gray-500 dark:text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-sky-700 px-4 py-4 text-white dark:bg-sky-800">
        <div className="mx-auto max-w-5xl text-sm font-medium">
          <strong>Rule:</strong> Never enter your UPI PIN or bank password on any webpage opened from WhatsApp, SMS, Telegram, or email.
        </div>
      </div>

      <main className="mx-auto max-w-5xl space-y-16 px-4 py-14 sm:px-6 lg:px-8">
        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">The One Rule That Stops Fake UPI Link Fraud</h2>
          <div className="grid gap-8 lg:grid-cols-[1fr_340px] lg:items-start">
            <div className="rounded-2xl border-2 border-green-300 bg-green-50 p-6 dark:border-green-800 dark:bg-green-950/30">
              <p className="text-xl font-extrabold text-green-900 dark:text-green-200">
                Legitimate UPI payments happen inside your app, not on random browser pages.
              </p>
              <ul className="mt-5 space-y-3 text-sm text-green-900 dark:text-green-200">
                <li>Correct: open PhonePe, Google Pay, Paytm, BHIM, or your bank app yourself.</li>
                <li>Correct: approve or reject requests inside the installed app after checking the receiver.</li>
                <li>Wrong: entering UPI PIN on a website opened from a message link.</li>
                <li>Wrong: trusting a green padlock without checking the domain.</li>
              </ul>
            </div>
            <figure className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <Image
                src="/image/https-padlock-vs-website-safety-encryption-trust-comparison-india.jpg"
                alt="HTTPS padlock versus website safety comparison for Indian users"
                width={928}
                height={1152}
                className="h-auto w-full object-cover"
              />
              <figcaption className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400">
                HTTPS protects the connection. It does not prove the site is genuine.
              </figcaption>
            </figure>
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">How Fake UPI Payment Links Work</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {stages.map((stage, index) => (
              <div key={stage.title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-600 text-sm font-bold text-white">{index + 1}</span>
                <h3 className="mt-4 text-base font-bold text-gray-900 dark:text-white">{stage.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{stage.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">Real Fake UPI Link Scam Patterns</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-800">
            <table className="w-full text-sm">
              <thead className="bg-sky-50 dark:bg-sky-950/30">
                <tr>
                  <th className="px-4 py-3 text-left font-bold text-gray-900 dark:text-white">Delivery / Pretext</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-900 dark:text-white">What Happens</th>
                </tr>
              </thead>
              <tbody>
                {cases.map((item, index) => (
                  <tr key={item.channel} className={index % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800'}>
                    <td className="border-t border-gray-100 px-4 py-3 font-semibold text-sky-700 dark:border-gray-700 dark:text-sky-300">{item.channel}</td>
                    <td className="border-t border-gray-100 px-4 py-3 text-gray-600 dark:border-gray-700 dark:text-gray-300">{item.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">8 Warning Signs Before Clicking Any UPI Link</h2>
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
          <div className="space-y-4">
            {rules.map((rule, index) => (
              <div key={rule.title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <span className="text-xs font-bold uppercase tracking-widest text-sky-700 dark:text-sky-300">Rule {index + 1}</span>
                <h3 className="mt-2 text-base font-bold text-gray-900 dark:text-white">{rule.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{rule.body}</p>
                {index === 2 && (
                  <Link href="/website-safety-checker" className="mt-3 inline-flex text-sm font-semibold text-sky-700 hover:underline dark:text-sky-300">
                    Check suspicious link
                  </Link>
                )}
                {index === 3 && (
                  <Link href="/upi-id-checker" className="mt-3 inline-flex text-sm font-semibold text-sky-700 hover:underline dark:text-sky-300">
                    Check UPI ID
                  </Link>
                )}
                {index === 4 && (
                  <Link href="/phone-number-checker" className="mt-3 inline-flex text-sm font-semibold text-sky-700 hover:underline dark:text-sky-300">
                    Check sender number
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl bg-gradient-to-r from-sky-600 to-indigo-600 p-6 text-center text-white shadow-lg">
            <p className="text-lg font-bold">Suspicious UPI link?</p>
            <p className="mt-1 text-sm text-sky-100">Check it before opening or entering any details.</p>
            <Link href="/website-safety-checker" className="mt-4 inline-flex rounded-xl bg-white px-6 py-3 text-sm font-bold text-sky-800 shadow transition-transform hover:scale-105">
              Check Link Free
            </Link>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-extrabold text-gray-900 dark:text-white">What to Do If You Already Entered Details</h2>
          <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-300">
            Treat this as urgent. A stolen UPI PIN or bank credential can be used quickly, so the first few minutes matter.
          </p>
          <div className="space-y-4">
            {recoverySteps.map((step, index) => (
              <div key={step.title} className={`rounded-2xl border p-5 shadow-sm ${index <= 1 ? 'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950/30' : 'border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900'}`}>
                <div className="flex gap-4">
                  <span className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold ${index <= 1 ? 'bg-red-600 text-white' : 'bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300'}`}>
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
            <p className="mb-3 font-bold text-sky-400">Fake UPI link recovery timeline</p>
            <p><span className="text-green-400">Immediately</span> - Change UPI PIN in your real app.</p>
            <p><span className="text-yellow-400">Within 5 min</span> - Call 1930 if money moved.</p>
            <p><span className="text-orange-400">Within 1 hour</span> - cybercrime.gov.in, bank fraud team, domain report.</p>
            <p><span className="text-red-400">Within 7 days</span> - FIR at cybercrime police station with full evidence.</p>
          </div>
          <div className="mt-8 rounded-2xl bg-gradient-to-r from-red-600 to-rose-600 p-6 text-center text-white shadow-lg">
            <p className="text-lg font-bold">Report this fake UPI link and protect other Indians</p>
            <ReportScamButton className="mt-4 inline-flex cursor-pointer rounded-xl bg-white px-6 py-3 text-sm font-bold text-red-700 shadow transition-transform hover:scale-105">
              Report This Scam
            </ReportScamButton>
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">How Fake UPI Links Are Delivered</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-800">
            <table className="w-full text-sm">
              <thead className="bg-indigo-50 dark:bg-indigo-950/30">
                <tr>
                  <th className="px-4 py-3 text-left font-bold text-gray-900 dark:text-white">Platform</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-900 dark:text-white">How It Arrives</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-900 dark:text-white">Protective Action</th>
                </tr>
              </thead>
              <tbody>
                {platformGuide.map(([platform, delivery, action], index) => (
                  <tr key={platform} className={index % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800'}>
                    <td className="border-t border-gray-100 px-4 py-3 font-semibold text-gray-900 dark:border-gray-700 dark:text-white">{platform}</td>
                    <td className="border-t border-gray-100 px-4 py-3 text-gray-600 dark:border-gray-700 dark:text-gray-300">{delivery}</td>
                    <td className="border-t border-gray-100 px-4 py-3 text-sky-700 dark:border-gray-700 dark:text-sky-300">{action}</td>
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
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">Free Tools to Check Suspicious UPI Links</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ['Website Safety Checker', 'Check any suspicious UPI link or domain before clicking.', '/website-safety-checker'],
              ['UPI ID Checker', 'Verify any UPI collect request ID before approving payment.', '/upi-id-checker'],
              ['Phone Number Checker', 'Check the number that sent the suspicious link.', '/phone-number-checker'],
            ].map(([title, body, href]) => (
              <Link key={title} href={href} className="rounded-2xl border border-sky-100 bg-sky-50 p-5 text-center transition-shadow hover:shadow-md dark:border-sky-900 dark:bg-sky-950/30">
                <p className="font-bold text-gray-900 dark:text-white">{title}</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{body}</p>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-extrabold text-gray-900 dark:text-white">Frequently Asked Questions About Fake UPI Payment Links</h2>
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
