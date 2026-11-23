import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import DefaultLayout from '@/components/DefaultLayout'
import RelatedTopics from '@/components/RelatedTopics'
import ReportScamButton from '@/components/ReportScamButton'
import { breadcrumbListSchema, faqPageSchema, jsonLd, organizationRef, webPageSchema } from '@/lib/seo/schema'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://rakshaai.co'
const PAGE_PATH = '/scams/upi-fraud/fake-payment-screenshot'
const CANONICAL = `${SITE_URL}${PAGE_PATH}`
const HERO_IMAGE = '/blog/olx-scam-india/olx-scam-methods-grid.webp'

export const metadata: Metadata = {
  title: 'Fake UPI Payment Screenshot India 2026: How to Spot & Verify',
  description:
    'Buyers sending fake PhonePe, Google Pay & Paytm screenshots in India 2026. How the scam works on OLX, WhatsApp & FB Marketplace. How to verify UPI payments before releasing goods.',
  alternates: { canonical: CANONICAL },
  robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  openGraph: {
    title: 'Fake UPI Payment Screenshot India 2026: How to Spot & Verify',
    description:
      'Edited PhonePe, Google Pay, and Paytm screenshots are used to trick sellers into releasing goods. Learn the 30-second verification habit.',
    url: CANONICAL,
    type: 'article',
    siteName: 'RakshaAI',
    locale: 'en_IN',
    images: [{ url: HERO_IMAGE, width: 1000, height: 750, alt: 'OLX scam methods grid showing fake screenshot fraud' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fake UPI Payment Screenshot India 2026',
    description: 'A screenshot is not payment proof. Open your own UPI app before releasing goods.',
    images: [HERO_IMAGE],
  },
  other: {
    'geo.region': 'IN',
    language: 'en-IN',
  },
}

const stats = [
  { value: '22%', label: 'Share of UPI fraud complaints - screenshot scam' },
  { value: 'Rs 18,000', label: 'Average loss per screenshot scam victim' },
  { value: 'OLX #1', label: 'Most common platform for screenshot fraud' },
  { value: '100%', label: 'Preventable by checking your own UPI app' },
]

const stages = [
  {
    title: 'Stage 1 - Buyer targets high-value listings',
    body:
      'The scammer contacts sellers on OLX, Quikr, Facebook Marketplace, WhatsApp groups, or Instagram DMs and agrees to the price quickly.',
  },
  {
    title: 'Stage 2 - Edited payment screenshot is sent',
    body:
      'They edit a PhonePe, Google Pay, Paytm, BHIM, or bank transfer success screen and change the amount, recipient, timestamp, and transaction ID.',
  },
  {
    title: 'Stage 3 - Pressure before you check your app',
    body:
      'The buyer calls repeatedly, asks you to arrange courier pickup, or claims they are in a hurry so you skip the 30-second verification check.',
  },
  {
    title: 'Stage 4 - Goods released, payment never arrives',
    body:
      'You hand over or ship the item. Later, your own UPI app shows no credit. The buyer number is switched off and the profile disappears.',
  },
]

const realCases = [
  {
    platform: 'OLX - Second-Hand iPhone',
    detail: 'Buyer sent fake PhonePe screenshot for Rs 22,000. Seller handed phone to courier. No payment arrived.',
  },
  {
    platform: 'Facebook Marketplace - Washing Machine',
    detail: 'Buyer shared edited Google Pay success screen. Seller allowed pickup and later found no credit.',
  },
  {
    platform: 'WhatsApp Group - Gold Jewellery',
    detail: 'Seller trusted a Paytm screenshot and handed jewellery at a public location. Paytm history showed zero credit.',
  },
  {
    platform: 'Quikr - Laptop',
    detail: 'Buyer sent edited BHIM screenshot and arranged same-day pickup through a friend. Seller lost the laptop.',
  },
  {
    platform: 'OLX - Motorcycle',
    detail: 'High-value buyer used fake bank transfer proof plus fake UPI screenshot. Seller transferred documents and lost over Rs 80,000.',
  },
  {
    platform: 'Instagram DMs - Handmade Products',
    detail: 'Small seller shipped a bulk order after receiving a fake Google Pay screenshot. No money was credited.',
  },
]

const visualRedFlags = [
  'Amount shown does not match the agreed amount.',
  'Transaction ID or UTR is missing, too short, too long, or incorrectly formatted.',
  'Timestamp is older than the buyer claims, or shows a different date.',
  'Edited text looks pixelated, misaligned, or uses a different font weight.',
  'Recipient UPI ID is not your exact UPI ID.',
  'Success badge colour or layout looks slightly different from the real app.',
  'No real bank credit message arrives for the exact amount.',
  'The payment is absent from your own PhonePe, Google Pay, Paytm, BHIM, or bank app history.',
]

const verifySteps = [
  {
    app: 'PhonePe',
    step: 'Open PhonePe, go to Recent Transactions or History, and confirm a credit with the correct amount.',
  },
  {
    app: 'Google Pay',
    step: 'Open Google Pay, check the home-screen transaction list, then tap the transaction for sender and UTR details.',
  },
  {
    app: 'Paytm',
    step: 'Open Paytm, go to Passbook or Transaction History, and verify the credit entry and reference number.',
  },
  {
    app: 'BHIM / Bank UPI',
    step: 'Open your bank app or BHIM transaction history and check the actual bank balance and UPI credit record.',
  },
]

const protectionRules = [
  {
    title: 'Always verify in your own UPI app before releasing goods',
    body:
      'A real UPI credit appears in your own app within seconds. If it is not visible within 30 seconds, no payment was made.',
  },
  {
    title: 'Verify the buyer UPI ID before accepting payment',
    body:
      'Search the buyer UPI ID on RakshaAI before sharing goods or accepting pickup arrangements.',
  },
  {
    title: 'Use cash or verified bank transfer for high-value items',
    body:
      'For items above Rs 10,000, meet in person and use cash or independently verified NEFT/RTGS.',
  },
  {
    title: 'Check the buyer phone number',
    body:
      'Search the caller number before engaging. Screenshot scammers often reuse numbers across multiple sellers.',
  },
  {
    title: 'Never release goods to a buyer-arranged courier before verification',
    body:
      'Courier pickup is a common pressure tactic. Confirm payment in your own app first, even if the pickup person is waiting.',
  },
]

const recoverySteps = [
  {
    title: 'Call 1930 immediately',
    body:
      'Even if no UPI transaction happened, call 1930 to log the case with the buyer number, platform, item, and fake screenshot evidence.',
  },
  {
    title: 'File on cybercrime.gov.in',
    body:
      'File under Fraud / Cheating Online or Financial Cyber Fraud. Attach chats, fake screenshot, listing, number, UPI ID, and delivery records.',
  },
  {
    title: 'Report the buyer on the platform',
    body:
      'Report on OLX, Facebook Marketplace, Quikr, WhatsApp, or Instagram and include your cybercrime complaint reference.',
  },
  {
    title: 'File FIR at cybercrime police station',
    body:
      'Carry your cybercrime reference, buyer number, fake screenshot, platform chats, courier records, and item proof.',
  },
  {
    title: 'Report to RakshaAI',
    body:
      'Report the scammer number and UPI ID so other sellers searching the same details see the warning.',
  },
]

const fraudStats = [
  { metric: 'Screenshot scam share of UPI fraud', data: '22%', source: 'NPCI 2025' },
  { metric: 'Average loss per victim', data: 'Rs 18,000', source: 'MHA I4C 2025' },
  { metric: '#1 platform for screenshot fraud', data: 'OLX', source: 'cybercrime.gov.in 2025' },
  { metric: '#2 platform', data: 'Facebook Marketplace', source: 'cybercrime.gov.in 2025' },
  { metric: 'Most faked UPI app', data: 'PhonePe', source: 'NPCI forensics 2025' },
  { metric: 'Growth in screenshot scam', data: '+186%', source: 'NCRB 2025' },
  { metric: 'Cases involving fake courier pickup', data: '38%', source: 'I4C Report 2025' },
]

const platformGuide = [
  ['OLX India', 'Highest risk', 'Never release to courier. Meet in person and verify in your own app with buyer present.'],
  ['Facebook Marketplace', 'Very high risk', 'New buyer profiles with no history are red flags. Verify before handover.'],
  ['Quikr India', 'High risk', 'In-person cash is best for high-value items. Check UPI app before release.'],
  ['WhatsApp Groups', 'High risk', 'Never ship before payment is confirmed in your app.'],
  ['Instagram DMs', 'Medium risk', 'Small businesses should use verified payment links and check transaction history before shipping.'],
  ['Telegram Groups', 'Medium and growing', 'Same rule applies: verify in your own app.'],
]

const relatedScams = [
  {
    title: 'QR Code UPI Fraud',
    relation: 'Also exploits the seller or receiver expecting to receive money.',
    href: '/scams/upi-fraud/qr-code-scam',
  },
  {
    title: 'OTP & PIN Fraud',
    relation: 'If a buyer gets your OTP during fake verification, they can directly debit your account.',
    href: '/scams/upi-fraud/otp-fraud',
  },
  {
    title: 'Wrong Transfer Refund Scam',
    relation: 'Also targets people expecting incoming money and uses pressure before verification.',
    href: '/blog/wrong-transfer-refund-scam-india',
  },
  {
    title: 'Digital Arrest Scam',
    relation: 'Uses fear and official-looking pressure to force UPI payment before victims verify the caller.',
    href: '/scams/upi-fraud/digital-arrest-scam',
  },
  {
    title: 'Fake UPI Payment Link',
    relation: 'Instead of faking proof, the scammer sends a fake UPI page that steals PINs or bank credentials.',
    href: '/scams/upi-fraud/fake-upi-link',
  },
  {
    title: 'Investment & Job UPI Fraud',
    relation: 'Fake buyer, job, or task offers can shift into deposits and trust-building payouts.',
    href: '/scams/upi-fraud/investment-job-fraud',
  },
]

const FAQ_ITEMS = [
  {
    question: 'What is a fake UPI payment screenshot and how does the scam work?',
    answer:
      'A fake UPI payment screenshot is an edited PhonePe, Google Pay, Paytm, BHIM, or bank success screen sent by a buyer to claim they paid. No money is transferred. The seller releases goods after checking the screenshot instead of their own UPI app.',
  },
  {
    question: 'How do I spot a fake PhonePe or Google Pay screenshot?',
    answer:
      'Look for wrong UTR format, amount mismatch, timestamp issues, font or pixel artefacts, wrong recipient UPI ID, and no matching credit in your own app. The definitive test is your own transaction history.',
  },
  {
    question: 'How do I verify a UPI payment before releasing goods?',
    answer:
      'Open your own PhonePe, Google Pay, Paytm, BHIM, or bank app and check transaction history for a credit with the correct amount, sender, and UTR. If it is not visible within 30 seconds, no payment was made.',
  },
  {
    question: 'Why does my UPI show no payment even though the buyer sent a screenshot?',
    answer:
      'Because the screenshot is fake or unrelated to your account. UPI credits appear in real time in your own app. A buyer screenshot is never authoritative proof of payment.',
  },
  {
    question: 'Can the scammer fake an SMS bank credit notification too?',
    answer:
      'Yes. Sophisticated scammers can spoof SMS notifications, so checking SMS alone is not enough. Your own app or bank transaction history is the only reliable verification.',
  },
  {
    question: 'I released goods after seeing a fake screenshot. What should I do?',
    answer:
      'Call 1930, file at cybercrime.gov.in, report the buyer on the platform, preserve chats and courier records, report the number on RakshaAI, and file an FIR with all evidence.',
  },
  {
    question: 'How do I report a fake UPI screenshot scam in India?',
    answer:
      'Report to 1930, cybercrime.gov.in, the platform used, WhatsApp if applicable, RakshaAI, and your nearest cybercrime police station. Include the fake screenshot, buyer number, chats, and listing evidence.',
  },
  {
    question: 'Is the fake UPI screenshot scam illegal in India?',
    answer:
      'Yes. It can be prosecuted under IT Act provisions for identity fraud and cheating by impersonation, plus IPC provisions for cheating and forgery.',
  },
  {
    question: 'Why is OLX the most common platform for fake screenshot fraud?',
    answer:
      'OLX has high transaction volume, many stranger-to-stranger deals, image sharing in chat, and frequent courier pickup requests. These conditions make fake screenshot fraud easy to attempt.',
  },
  {
    question: 'Are there websites that generate fake UPI payment screenshots?',
    answer:
      'Yes. Fake receipt generator websites and screenshot editing apps can create convincing UPI success screens. Report such websites to cybercrime.gov.in and CERT-In.',
  },
]

const schemas = [
  webPageSchema({
    name: 'Fake UPI Payment Screenshot India 2026: How to Spot & Verify',
    description: metadata.description as string,
    url: PAGE_PATH,
  }),
  breadcrumbListSchema([
    { name: 'Home', url: '/' },
    { name: 'Scams', url: '/scams' },
    { name: 'UPI Fraud', url: '/scams/upi-fraud' },
    { name: 'Fake UPI Payment Screenshot', url: PAGE_PATH },
  ]),
  faqPageSchema(FAQ_ITEMS),
  {
    '@context': 'https://schema.org' as const,
    '@type': 'Article',
    headline: 'Fake UPI Payment Screenshot India 2026: How to Spot & Verify',
    description: metadata.description as string,
    url: CANONICAL,
    image: `${SITE_URL}${HERO_IMAGE}`,
    author: organizationRef(),
    publisher: organizationRef(),
    datePublished: '2026-03-01',
    dateModified: '2026-03-01',
    inLanguage: 'en-IN',
    articleSection: 'UPI Fraud',
    keywords: ['fake upi payment screenshot india', 'fake phonepe screenshot india', 'verify upi payment india', 'olx upi payment scam india'],
  },
]

export default function FakePaymentScreenshotPage() {
  return (
    <DefaultLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schemas) }} />

      <section className="bg-gradient-to-br from-amber-50 via-white to-orange-50 px-4 py-16 dark:from-gray-950 dark:via-gray-900 dark:to-amber-950">
        <div className="mx-auto max-w-5xl">
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            <Link href="/">Home</Link><span aria-hidden="true">/</span>
            <Link href="/scams">Scams</Link><span aria-hidden="true">/</span>
            <Link href="/scams/upi-fraud">UPI Fraud</Link><span aria-hidden="true">/</span>
            <span className="font-medium text-gray-700 dark:text-gray-300">Fake Payment Screenshot</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center rounded-full border border-amber-200 bg-amber-100 px-4 py-1.5 text-xs font-semibold text-amber-800 dark:border-amber-800 dark:bg-amber-900/40 dark:text-amber-300">
                UPI Fraud Guide
              </div>
              <h1 className="mb-5 text-4xl font-extrabold leading-tight text-gray-900 dark:text-white md:text-5xl">
                Fake UPI Payment Screenshot India 2026
              </h1>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                Buyers send edited PhonePe, Google Pay, Paytm, or BHIM screenshots showing a completed payment. No money was transferred. You release the goods. The loss begins.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/upi-id-checker" className="rounded-xl bg-amber-600 px-5 py-3 text-sm font-bold text-white shadow hover:bg-amber-700">
                  Check UPI ID Free
                </Link>
                <Link href="/phone-number-checker" className="rounded-xl border border-amber-200 bg-white px-5 py-3 text-sm font-bold text-amber-800 shadow-sm hover:bg-amber-50 dark:border-amber-800 dark:bg-gray-900 dark:text-amber-300">
                  Check Buyer Number
                </Link>
              </div>
            </div>
            <figure className="overflow-hidden rounded-2xl border border-amber-200 bg-white shadow-lg dark:border-amber-900 dark:bg-gray-900">
              <Image
                src={HERO_IMAGE}
                alt="OLX scam methods grid showing fake screenshot fraud"
                width={1000}
                height={750}
                className="h-auto w-full object-cover"
                priority
              />
              <figcaption className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400">
                Fake screenshot fraud is common in OLX, Facebook Marketplace, WhatsApp groups, and Instagram DMs.
              </figcaption>
            </figure>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-amber-100 bg-white p-4 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <div className="text-2xl font-extrabold text-amber-700 dark:text-amber-300">{stat.value}</div>
                <p className="mt-2 text-xs leading-relaxed text-gray-500 dark:text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-amber-600 px-4 py-4 text-white dark:bg-amber-700">
        <div className="mx-auto max-w-5xl text-sm font-medium">
          <strong>Rule:</strong> A screenshot is never proof of payment. Open your own UPI app and verify the credit before releasing goods.
        </div>
      </div>

      <main className="mx-auto max-w-5xl space-y-16 px-4 py-14 sm:px-6 lg:px-8">
        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">The One Rule That Makes Screenshot Fraud Impossible</h2>
          <div className="grid gap-8 lg:grid-cols-[1fr_340px] lg:items-center">
            <div className="rounded-2xl border-2 border-green-300 bg-green-50 p-6 dark:border-green-800 dark:bg-green-950/30">
              <p className="text-xl font-extrabold text-green-900 dark:text-green-200">
                Always verify UPI payment in your own app before giving goods.
              </p>
              <ul className="mt-5 space-y-3 text-sm text-green-900 dark:text-green-200">
                <li>Wrong: checking the screenshot the buyer sent on WhatsApp.</li>
                <li>Wrong: checking only SMS notifications.</li>
                <li>Wrong: asking the buyer to show their app on video call.</li>
                <li>Correct: open your own UPI app, check history, confirm amount and UTR.</li>
              </ul>
            </div>
            <figure className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <Image
                src="/image/upi-payment-verification-security-check-rakshaai.jpg"
                alt="Indian seller verifying UPI ID and payment before releasing goods"
                width={640}
                height={640}
                className="h-auto w-full object-cover"
              />
              <figcaption className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400">
                Your own app is the only authoritative payment record.
              </figcaption>
            </figure>
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">How the Scam Works - The 4-Stage Playbook</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {stages.map((stage, index) => (
              <div key={stage.title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-600 text-sm font-bold text-white">{index + 1}</span>
                <h3 className="mt-4 text-base font-bold text-gray-900 dark:text-white">{stage.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{stage.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-200">
            The fake screenshot looks like your UPI app, but it is not your UPI app. Only your own app shows real transactions.
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">Real India Fake UPI Screenshot Scam Examples</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-800">
            <table className="w-full text-sm">
              <thead className="bg-amber-50 dark:bg-amber-950/30">
                <tr>
                  <th className="px-4 py-3 text-left font-bold text-gray-900 dark:text-white">Platform / Item</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-900 dark:text-white">What Happened</th>
                </tr>
              </thead>
              <tbody>
                {realCases.map((item, index) => (
                  <tr key={item.platform} className={index % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800'}>
                    <td className="border-t border-gray-100 px-4 py-3 font-semibold text-amber-700 dark:border-gray-700 dark:text-amber-300">{item.platform}</td>
                    <td className="border-t border-gray-100 px-4 py-3 text-gray-600 dark:border-gray-700 dark:text-gray-300">{item.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">8 Visual Red Flags to Identify a Fake UPI Screenshot</h2>
          <div className="rounded-2xl border border-red-200 bg-red-50 p-6 dark:border-red-800 dark:bg-red-950/30">
            <ol className="space-y-4">
              {visualRedFlags.map((flag, index) => (
                <li key={flag} className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">{index + 1}</span>
                  <span className="text-sm leading-relaxed text-gray-700 dark:text-gray-200">{flag}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">How to Verify a UPI Payment in 30 Seconds</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {verifySteps.map((item) => (
              <div key={item.app} className="rounded-2xl border border-green-200 bg-green-50 p-5 dark:border-green-800 dark:bg-green-950/30">
                <h3 className="text-base font-bold text-gray-900 dark:text-white">{item.app}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{item.step}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 rounded-xl border border-gray-200 bg-white p-4 text-sm text-gray-600 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300">
            A real UPI payment appears within seconds. If it is not visible within 30 seconds, do not release goods.
          </p>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">5 Rules to Protect Yourself as a Seller</h2>
          <div className="space-y-4">
            {protectionRules.map((rule, index) => (
              <div key={rule.title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-700 dark:text-amber-300">Rule {index + 1}</span>
                <h3 className="mt-2 text-base font-bold text-gray-900 dark:text-white">{rule.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{rule.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 p-6 text-center text-white shadow-lg">
            <p className="text-lg font-bold">Selling something online?</p>
            <p className="mt-1 text-sm text-amber-100">Verify the buyer UPI ID and phone number before releasing goods.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <Link href="/upi-id-checker" className="rounded-xl bg-white px-5 py-3 text-sm font-bold text-amber-800 shadow transition-transform hover:scale-105">
                Check UPI ID
              </Link>
              <Link href="/phone-number-checker" className="rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-bold text-white hover:bg-white/20">
                Check Number
              </Link>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-extrabold text-gray-900 dark:text-white">What to Do If You Were Scammed by a Fake UPI Screenshot</h2>
          <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-300">
            If goods have already been released, preserve evidence and report within the first hour. The item may not be recalled, but the identity and platform trail can still be investigated.
          </p>
          <div className="space-y-4">
            {recoverySteps.map((step, index) => (
              <div key={step.title} className={`rounded-2xl border p-5 shadow-sm ${index === 0 ? 'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950/30' : 'border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900'}`}>
                <div className="flex gap-4">
                  <span className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold ${index === 0 ? 'bg-red-600 text-white' : 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300'}`}>
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
            <p className="mb-3 font-bold text-amber-400">Recovery timeline after fake screenshot scam</p>
            <p><span className="text-green-400">Immediately</span> - Call 1930. Preserve WhatsApp and platform communication.</p>
            <p><span className="text-yellow-400">Within 1 hour</span> - cybercrime.gov.in complaint and platform report.</p>
            <p><span className="text-orange-400">Within 24 hrs</span> - RakshaAI report and platform fraud-team follow-up.</p>
            <p><span className="text-red-400">Within 7 days</span> - FIR at cybercrime police station.</p>
          </div>
          <div className="mt-8 rounded-2xl bg-gradient-to-r from-red-600 to-rose-600 p-6 text-center text-white shadow-lg">
            <p className="text-lg font-bold">Report this fake screenshot scammer</p>
            <ReportScamButton className="mt-4 inline-flex cursor-pointer rounded-xl bg-white px-6 py-3 text-sm font-bold text-red-700 shadow transition-transform hover:scale-105">
              Report This Scam
            </ReportScamButton>
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">Fake UPI Screenshot Fraud Statistics India 2026</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-800">
            <table className="w-full text-sm">
              <thead className="bg-amber-50 dark:bg-amber-950/30">
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
                    <td className="border-t border-gray-100 px-4 py-3 font-semibold text-amber-700 dark:border-gray-700 dark:text-amber-300">{row.data}</td>
                    <td className="border-t border-gray-100 px-4 py-3 text-xs text-gray-500 dark:border-gray-700 dark:text-gray-400">{row.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">Platform-by-Platform Safety Guide for Indian Sellers</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-800">
            <table className="w-full text-sm">
              <thead className="bg-orange-50 dark:bg-orange-950/30">
                <tr>
                  <th className="px-4 py-3 text-left font-bold text-gray-900 dark:text-white">Platform</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-900 dark:text-white">Risk Pattern</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-900 dark:text-white">Protection</th>
                </tr>
              </thead>
              <tbody>
                {platformGuide.map(([platform, risk, protection], index) => (
                  <tr key={platform} className={index % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800'}>
                    <td className="border-t border-gray-100 px-4 py-3 font-semibold text-gray-900 dark:border-gray-700 dark:text-white">{platform}</td>
                    <td className="border-t border-gray-100 px-4 py-3 text-amber-700 dark:border-gray-700 dark:text-amber-300">{risk}</td>
                    <td className="border-t border-gray-100 px-4 py-3 text-gray-600 dark:border-gray-700 dark:text-gray-300">{protection}</td>
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
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">Free Tools to Protect Yourself as a Seller</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ['UPI ID Checker', 'Verify any buyer UPI ID before accepting payment.', '/upi-id-checker'],
              ['Phone Number Checker', 'Check if the buyer number has been reported by sellers.', '/phone-number-checker'],
              ['Website Safety Checker', 'Check any payment link or receipt-generator site before clicking.', '/website-safety-checker'],
            ].map(([title, body, href]) => (
              <Link key={title} href={href} className="rounded-2xl border border-amber-100 bg-amber-50 p-5 text-center transition-shadow hover:shadow-md dark:border-amber-900 dark:bg-amber-950/30">
                <p className="font-bold text-gray-900 dark:text-white">{title}</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{body}</p>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-extrabold text-gray-900 dark:text-white">Frequently Asked Questions About Fake UPI Payment Screenshots</h2>
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
