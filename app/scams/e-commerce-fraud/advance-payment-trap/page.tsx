import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import DefaultLayout from '@/components/DefaultLayout'
import RelatedTopics from '@/components/RelatedTopics'
import ReportScamButton from '@/components/ReportScamButton'
import { breadcrumbListSchema, faqPageSchema, jsonLd, organizationRef, webPageSchema } from '@/lib/seo/schema'
import { BadgeCheck, CheckCircle2, HandCoins, Link2, Phone, ShieldCheck, Smartphone } from 'lucide-react'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://rakshaai.co'
const PAGE_PATH = '/scams/e-commerce-fraud/advance-payment-trap'
const CANONICAL = `${SITE_URL}${PAGE_PATH}`
const HERO_IMAGE = '/blog/olx-scam-india/olx-scam-hero.webp'

export const metadata: Metadata = {
  title: 'Advance Payment Scam India 2026: Never Pay Outside the Platform',
  description:
    'Seller asks for full advance via UPI or bank transfer outside the platform? Learn how the advance payment trap works, red flags, seller verification and recovery steps.',
  alternates: { canonical: CANONICAL },
  robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  openGraph: {
    title: 'Advance Payment Scam India 2026: Never Pay Outside the Platform',
    description:
      'A practical India guide to OLX, Facebook Marketplace, WhatsApp seller, token money, service booking and army officer advance payment fraud.',
    url: CANONICAL,
    type: 'article',
    siteName: 'RakshaAI',
    locale: 'en_IN',
    images: [
      {
        url: HERO_IMAGE,
        width: 1200,
        height: 800,
        alt: 'OLX and marketplace advance payment scam warning for Indian buyers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Advance Payment Scam India 2026',
    description: 'Never pay a seller by direct UPI or bank transfer outside the protected platform checkout.',
    images: [HERO_IMAGE],
  },
  other: {
    'geo.region': 'IN',
    language: 'en-IN',
  },
}

const stats = [
  { value: '27%', label: 'E-commerce fraud complaint share cited for advance payment traps in the source brief' },
  { value: 'Rs 18,500', label: 'Average loss pattern for advance payment fraud victims in the source brief' },
  { value: 'OLX', label: 'Most common platform context cited for person-to-person advance payment traps' },
  { value: '100%', label: 'Preventable when buyers refuse off-platform direct payment' },
]

const variants = [
  {
    title: 'Product advance on OLX and Facebook Marketplace',
    body:
      'A desirable product is listed below market price. The seller asks for a small advance to hold the item, then demands the balance before shipping or disappears.',
  },
  {
    title: 'Token money for bookings and services',
    body:
      'A fake travel agent, photographer, caterer, event vendor or rental provider asks for token money to confirm the booking, then vanishes on the service date.',
  },
  {
    title: 'Army, government officer or NRI seller persona',
    body:
      'The scammer builds trust with fake ID cards, official-looking language and urgency, then asks for shipping, courier or transfer advance.',
  },
]

const stages = [
  {
    title: 'Stage 1 - Listing builds credibility',
    body:
      'The seller uses a legitimate platform, stolen photos, a realistic product description and a tempting price to make the listing feel trustworthy.',
  },
  {
    title: 'Stage 2 - Conversation moves off-platform',
    body:
      'The seller asks you to continue on WhatsApp or phone, then presents direct UPI or bank transfer as faster or cheaper than platform payment.',
  },
  {
    title: 'Stage 3 - Payment collected, seller disappears',
    body:
      'After the transfer, the listing is deleted, the number stops responding, the tracking link is fake and the platform says payment happened outside its protection.',
  },
]

const cases = [
  ['OLX motorcycle advance', 'Seller takes a hold amount, sends a fake RC copy and then demands the remaining balance before transport.'],
  ['Facebook Marketplace laptop', 'The seller moves the buyer to WhatsApp, claims platform payment is down and asks for bank transfer. No laptop ships.'],
  ['Fake army officer sale', 'A person posing as an officer sends fake ID and asks for courier or base dispatch payment for household goods.'],
  ['Instagram tour package', 'A fake agency collects token money for travel booking and becomes unreachable on the travel date.'],
  ['NRI iPhone seller', 'A seller creates urgency around flying abroad and pushes full payment before inspection or handover.'],
  ['Partial advance trust trap', 'A cheap item is shipped first to build trust, then the seller demands the full balance for the actual product.'],
]

const redFlags = [
  'The seller asks you to pay or continue conversation outside the platform.',
  'The price is far below market value and the explanation is emotional or urgent.',
  'The seller refuses in-person inspection for high-value items.',
  'Direct UPI or bank transfer is the only accepted payment method.',
  'The seller cannot verify a real business, GST, MCA record, office address or consistent digital footprint.',
  'The listing, profile or WhatsApp number is new, recently changed or difficult to search online.',
  'The seller sends fake ID cards, army documents, courier slips or tracking links to build trust.',
  'A small item or proof is sent first, then a much larger payment is demanded.',
]

const verificationSteps = [
  {
    title: 'Meet in person for high-value items',
    body:
      'For items above Rs 10,000, inspect the product in a public place and pay only at handover. No shipping advance, no hold deposit, no remote trust deal.',
  },
  {
    title: 'Verify business sellers on official records',
    body:
      'Check company registration, GST details, registered office, reviews and independent search results before paying any token amount.',
  },
  {
    title: 'Check seller UPI ID and phone number',
    body:
      'Search the UPI ID and phone number before any transfer. Advance payment scammers reuse identifiers across victims before abandoning them.',
  },
  {
    title: 'Use platform or escrow payment',
    body:
      'If the platform offers protected payment, use it. If the seller refuses, that refusal is the warning sign.',
  },
  {
    title: 'Check seller website or listing URL',
    body:
      'For service providers and business sellers, check domain age, reviews, safety flags and contact details before paying token money.',
  },
]

const recoverySteps = [
  {
    title: 'Call 1930 immediately',
    body:
      'If you paid by UPI or bank transfer, call 1930 quickly with UPI ID, account number, amount, transaction time and seller contact details.',
  },
  {
    title: 'File on cybercrime.gov.in',
    body:
      'Attach listing screenshots, chat records, payment proof, fake tracking links, profile URLs and any ID cards or documents the seller sent.',
  },
  {
    title: 'Raise chargeback for card payments',
    body:
      'If payment was by card or protected gateway, ask your bank for a goods-not-delivered chargeback and provide the complaint reference.',
  },
  {
    title: 'Report the platform listing',
    body:
      'Report the seller on OLX, Facebook Marketplace, Instagram, WhatsApp or the platform where the first contact happened.',
  },
  {
    title: 'File consumer forum complaint and FIR',
    body:
      'For significant loss, call NCH 1915, file at consumerhelpline.gov.in and file an FIR for cheating or impersonation.',
  },
  {
    title: 'Report to RakshaAI',
    body:
      'Report the seller UPI ID, phone number, profile and website so other Indian buyers can search and find the warning.',
  },
]

const timeline = [
  ['Within 30 min', 'Call 1930 and try to freeze the destination account before funds move.'],
  ['Within 24 hrs', 'File cybercrime complaint, preserve evidence and report the platform listing.'],
  ['Within 72 hrs', 'Call NCH 1915, start chargeback if card was used and report fake domains or profiles.'],
  ['Within 7 days', 'File FIR for high-value cases, impersonation or fake government or army identity.'],
  ['Within 120 days', 'Complete card chargeback process where applicable.'],
]

const relatedGuides = [
  {
    title: 'E-Commerce Fraud Hub',
    body: 'The parent guide for fake stores, marketplace scams, COD fraud and online shopping recovery steps.',
    href: '/scams/e-commerce-fraud',
  },
  {
    title: 'Fake Marketplace Seller Fraud',
    body: 'Use this when payment happened through a marketplace but the seller never shipped or faked delivery.',
    href: '/scams/e-commerce-fraud/fake-marketplace-seller',
  },
  {
    title: 'Social Media & WhatsApp Shopping Scam',
    body: 'Use this when the seller came through Instagram, WhatsApp, Facebook Marketplace, Telegram or YouTube.',
    href: '/scams/e-commerce-fraud/social-commerce-scam',
  },
  {
    title: 'Phantom Delivery Scam',
    body: 'Use this when you paid on-platform but tracking says delivered and nothing arrived.',
    href: '/scams/e-commerce-fraud/phantom-delivery',
  },
  {
    title: 'Investment & Job UPI Fraud',
    body: 'Use this when advance payment is for a job, task, trading scheme or investment opportunity.',
    href: '/scams/upi-fraud/investment-job-fraud',
  },
]

const FAQ_ITEMS = [
  {
    question: 'What is an advance payment scam in India?',
    answer:
      'An advance payment scam is when a seller asks you to pay upfront by direct UPI or bank transfer before delivery, then disappears after collecting the money.',
  },
  {
    question: 'Is it safe to pay advance to an online seller?',
    answer:
      'Only through a protected platform payment or escrow system. Direct UPI or bank transfer to an unknown seller removes most buyer protection.',
  },
  {
    question: 'How do I identify a genuine seller before paying advance?',
    answer:
      'Meet in person for high-value items, verify business records, check UPI ID and phone number, use platform payment, and verify seller website or listing URL.',
  },
  {
    question: 'What is token money scam?',
    answer:
      'Token money scam happens when a fake service provider or seller collects a small booking amount to reserve a product, event, rental or trip, then disappears.',
  },
  {
    question: 'What is the army officer advance payment scam?',
    answer:
      'A scammer poses as an army officer, government employee or NRI seller, sends fake IDs or emotional reasons, and asks for shipping or transfer advance.',
  },
  {
    question: 'How do I recover money after advance payment fraud?',
    answer:
      'Call 1930 immediately, file on cybercrime.gov.in, raise chargeback for card payments, report the platform listing, file NCH or consumer forum complaint, and file FIR for high-value cases.',
  },
  {
    question: 'How is advance payment trap different from fake online store scam?',
    answer:
      'Advance payment trap is a person-to-person seller asking for direct payment. Fake online store scam uses a full fraudulent website and checkout flow.',
  },
  {
    question: 'Should I trust partial delivery before paying the balance?',
    answer:
      'No. Scammers may ship a cheap item first to build trust, then demand a much larger balance for the real product that never ships.',
  },
]

const schemas = [
  webPageSchema({
    name: 'Advance Payment Scam India 2026: Never Pay Outside the Platform',
    description: metadata.description as string,
    url: PAGE_PATH,
  }),
  breadcrumbListSchema([
    { name: 'Home', url: '/' },
    { name: 'Scams', url: '/scams' },
    { name: 'E-Commerce Fraud', url: '/scams/e-commerce-fraud' },
    { name: 'Advance Payment Trap', url: PAGE_PATH },
  ]),
  faqPageSchema(FAQ_ITEMS),
  {
    '@context': 'https://schema.org' as const,
    '@type': 'Article',
    headline: 'Advance Payment Scam India 2026',
    description: metadata.description as string,
    url: CANONICAL,
    image: `${SITE_URL}${HERO_IMAGE}`,
    author: organizationRef(),
    publisher: organizationRef(),
    datePublished: '2026-03-01',
    dateModified: '2026-07-02',
    inLanguage: 'en-IN',
    articleSection: 'E-Commerce Fraud',
    keywords: [
      'advance payment scam india',
      'outside platform payment scam india',
      'olx advance payment scam india',
      'token money scam india',
      'army officer advance payment scam india',
    ],
  },
  {
    '@context': 'https://schema.org' as const,
    '@type': 'DefinedTerm',
    name: 'Advance payment trap',
    description:
      'An advance payment trap is a fraud where a seller asks for direct upfront payment outside protected platform checkout, then does not deliver the promised product or service.',
    url: CANONICAL,
  },
  {
    '@context': 'https://schema.org' as const,
    '@type': 'HowTo',
    name: 'How to verify a seller before paying advance',
    description: 'Five checks before sending advance payment to an online seller in India.',
    step: verificationSteps.map((step) => ({
      '@type': 'HowToStep',
      name: step.title,
      text: step.body,
    })),
  },
]

export default function AdvancePaymentTrapPage() {
  return (
    <DefaultLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schemas) }} />

      <section className="bg-gradient-to-br from-indigo-50 via-white to-amber-50 px-4 py-16 dark:from-gray-950 dark:via-gray-900 dark:to-indigo-950">
        <div className="mx-auto max-w-5xl">
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            <Link href="/">Home</Link><span aria-hidden="true">/</span>
            <Link href="/scams">Scams</Link><span aria-hidden="true">/</span>
            <Link href="/scams/e-commerce-fraud">E-Commerce Fraud</Link><span aria-hidden="true">/</span>
            <span className="font-medium text-gray-700 dark:text-gray-300">Advance Payment Trap</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-100 px-4 py-1.5 text-xs font-semibold text-indigo-800 dark:border-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300">
                <HandCoins className="h-4 w-4" />
                E-Commerce Fraud Guide
              </div>
              <h1 className="mb-5 text-4xl font-extrabold leading-tight text-gray-900 dark:text-white md:text-5xl">
                Advance Payment Scam India 2026
              </h1>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                A seller asks for full payment, token money, shipping deposit or booking advance by
                direct UPI outside the platform. Once paid, the listing disappears, the seller blocks
                you and the order never ships.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/upi-id-checker" className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-bold text-white shadow hover:bg-indigo-700">
                  Check Seller UPI ID
                </Link>
                <Link href="/website-safety-checker" className="rounded-xl border border-indigo-200 bg-white px-5 py-3 text-sm font-bold text-indigo-800 shadow-sm hover:bg-indigo-50 dark:border-indigo-800 dark:bg-gray-900 dark:text-indigo-300">
                  Check Seller Site
                </Link>
              </div>
            </div>
            <figure className="overflow-hidden rounded-2xl border border-indigo-200 bg-white shadow-lg dark:border-indigo-900 dark:bg-gray-900">
              <Image
                src={HERO_IMAGE}
                alt="OLX and marketplace advance payment scam warning for Indian buyers"
                width={1200}
                height={800}
                className="h-auto w-full object-cover"
                priority
              />
              <figcaption className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400">
                Off-platform direct payments remove the protection that marketplaces provide.
              </figcaption>
            </figure>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-indigo-100 bg-white p-4 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <div className="text-2xl font-extrabold text-indigo-700 dark:text-indigo-300">{stat.value}</div>
                <p className="mt-2 text-xs leading-relaxed text-gray-500 dark:text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-indigo-700 px-4 py-4 text-white dark:bg-indigo-800">
        <div className="mx-auto max-w-5xl text-sm font-medium">
          <strong>One rule:</strong> never pay outside a platform&apos;s official payment system.
        </div>
      </div>

      <main className="mx-auto max-w-5xl space-y-16 px-4 py-14 sm:px-6 lg:px-8">
        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">Why Off-Platform Advance Payment Is the Trap</h2>
          <div className="grid gap-8 lg:grid-cols-[1fr_340px] lg:items-start">
            <div className="rounded-2xl border-2 border-indigo-300 bg-indigo-50 p-6 dark:border-indigo-800 dark:bg-indigo-950/30">
              <p className="text-xl font-extrabold text-indigo-900 dark:text-indigo-200">
                The seller is not trying to avoid fees. They are trying to avoid buyer protection.
              </p>
              <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-200">
                Platform checkout creates an order trail and dispute route. Direct UPI to an unknown
                seller is treated like a voluntary transfer, so recovery depends on speed, evidence
                and escalation.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href="/upi-id-checker" className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-bold text-white hover:bg-indigo-700">
                  Verify UPI ID
                </Link>
                <Link href="/phone-number-checker" className="rounded-lg border border-indigo-200 bg-white px-4 py-2 text-sm font-bold text-indigo-800 hover:bg-indigo-50 dark:border-indigo-800 dark:bg-gray-900 dark:text-indigo-300">
                  Check number
                </Link>
              </div>
            </div>
            <figure className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <Image
                src="/blog/olx-scam-india/olx-safe-selling-rules.webp"
                alt="Safe OLX marketplace rules before paying or accepting payment"
                width={1600}
                height={900}
                className="h-auto w-full object-cover"
              />
              <figcaption className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400">
                Marketplace safety depends on inspection, verified payment and staying inside protected flows.
              </figcaption>
            </figure>
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">3 Advance Payment Trap Variants</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {variants.map((item, index) => (
              <div key={item.title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">{index + 1}</span>
                <h3 className="mt-4 text-base font-bold text-gray-900 dark:text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">How the Scam Works - 3 Stages</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {stages.map((stage, index) => (
              <div key={stage.title} className="rounded-2xl border border-amber-100 bg-amber-50 p-5 dark:border-amber-900 dark:bg-amber-950/30">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-600 text-sm font-bold text-white">{index + 1}</span>
                <h3 className="mt-4 text-base font-bold text-gray-900 dark:text-white">{stage.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-200">{stage.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">Real India Case Patterns</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {cases.map(([title, body]) => (
              <div key={title} className="rounded-2xl border border-cyan-100 bg-cyan-50 p-5 dark:border-cyan-900 dark:bg-cyan-950/30">
                <div className="flex items-start gap-3">
                  <Smartphone className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-700 dark:text-cyan-300" />
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-200">{body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">8 Warning Signs Before You Pay Advance</h2>
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
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">5 Steps to Verify Any Seller Before Paying Advance</h2>
          <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-start">
            <div className="space-y-4">
              {verificationSteps.map((step, index) => (
                <div key={step.title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                  <span className="text-xs font-bold uppercase tracking-widest text-indigo-700 dark:text-indigo-300">Step {index + 1}</span>
                  <h3 className="mt-2 text-base font-bold text-gray-900 dark:text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{step.body}</p>
                </div>
              ))}
            </div>
            <figure className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <Image
                src="/blog/how-to-check-fake-website-india/website-safety-checklist-india.webp"
                alt="Checklist to verify seller website before making advance payment"
                width={1600}
                height={900}
                className="h-auto w-full object-cover"
              />
              <figcaption className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400">
                Verify seller identity before payment, not after the listing disappears.
              </figcaption>
            </figure>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-extrabold text-gray-900 dark:text-white">What to Do If You Already Paid</h2>
          <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-300">
            Speed matters. The fastest route is to call 1930 before the scammer withdraws or moves funds.
          </p>
          <div className="space-y-4">
            {recoverySteps.map((step, index) => (
              <div key={step.title} className={`rounded-2xl border p-5 shadow-sm ${index <= 1 ? 'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950/30' : 'border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900'}`}>
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gray-900 text-sm font-bold text-white dark:bg-white dark:text-gray-900">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{step.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <ReportScamButton className="rounded-xl bg-red-600 px-5 py-3 text-sm font-bold text-white shadow hover:bg-red-700">
              Report This Seller
            </ReportScamButton>
            <Link href="/got-scammed" className="rounded-xl border border-red-200 bg-white px-5 py-3 text-sm font-bold text-red-700 shadow-sm hover:bg-red-50 dark:border-red-800 dark:bg-gray-900 dark:text-red-300">
              Recovery Guide
            </Link>
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">Recovery Timeline</h2>
          <div className="space-y-4">
            {timeline.map(([time, action], index) => (
              <div key={time} className={`rounded-2xl border p-5 shadow-sm ${index <= 1 ? 'border-indigo-200 bg-indigo-50 dark:border-indigo-800 dark:bg-indigo-950/30' : 'border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900'}`}>
                <h3 className="font-bold text-gray-900 dark:text-white">{time}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{action}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">Free Tools to Verify Before Paying</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Link href="/upi-id-checker" className="rounded-2xl border border-indigo-200 bg-indigo-50 p-5 hover:bg-indigo-100 dark:border-indigo-900 dark:bg-indigo-950/30 dark:hover:bg-indigo-950/50">
              <BadgeCheck className="h-7 w-7 text-indigo-700 dark:text-indigo-300" />
              <h3 className="mt-4 font-bold text-gray-900 dark:text-white">UPI ID Checker</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Verify seller UPI ID before sending any advance payment.</p>
            </Link>
            <Link href="/phone-number-checker" className="rounded-2xl border border-cyan-200 bg-cyan-50 p-5 hover:bg-cyan-100 dark:border-cyan-900 dark:bg-cyan-950/30 dark:hover:bg-cyan-950/50">
              <Phone className="h-7 w-7 text-cyan-700 dark:text-cyan-300" />
              <h3 className="mt-4 font-bold text-gray-900 dark:text-white">Phone Number Checker</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Check seller WhatsApp or call number before trusting the profile.</p>
            </Link>
            <Link href="/website-safety-checker" className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 hover:bg-emerald-100 dark:border-emerald-900 dark:bg-emerald-950/30 dark:hover:bg-emerald-950/50">
              <ShieldCheck className="h-7 w-7 text-emerald-700 dark:text-emerald-300" />
              <h3 className="mt-4 font-bold text-gray-900 dark:text-white">Website Safety Checker</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Verify seller website, product page or booking link before paying token money.</p>
            </Link>
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">Related E-Commerce Fraud Guides</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {relatedGuides.map((guide) => (
              <Link key={guide.href} href={guide.href} className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:border-indigo-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                  <Link2 className="h-4 w-4" />
                </div>
                <h3 className="font-bold text-gray-900 group-hover:text-indigo-700 dark:text-white dark:group-hover:text-indigo-300">{guide.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{guide.body}</p>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQ_ITEMS.map((item) => (
              <details key={item.question} className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
                <summary className="cursor-pointer font-bold text-gray-900 dark:text-white">{item.question}</summary>
                <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-green-200 bg-green-50 p-6 dark:border-green-900 dark:bg-green-950/30">
          <div className="flex flex-col gap-4 md:flex-row md:items-start">
            <CheckCircle2 className="h-8 w-8 flex-shrink-0 text-green-700 dark:text-green-300" />
            <div>
              <h2 className="text-xl font-extrabold text-gray-900 dark:text-white">Safe Payment Summary</h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-200">
                Inspect first, pay through protected channels and refuse direct UPI advance to unknown
                sellers. If advance payment is unavoidable, prefer card or escrow, never personal UPI.
              </p>
            </div>
          </div>
        </section>

        <RelatedTopics currentPath={PAGE_PATH} clusterId="ecommerce-fraud" maxSiblings={4} maxRelated={3} />
      </main>
    </DefaultLayout>
  )
}
