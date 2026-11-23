import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import DefaultLayout from '@/components/DefaultLayout'
import RelatedTopics from '@/components/RelatedTopics'
import ReportScamButton from '@/components/ReportScamButton'
import { breadcrumbListSchema, faqPageSchema, jsonLd, organizationRef, webPageSchema } from '@/lib/seo/schema'
import { Ban, CheckCircle2, FileText, Link2, PackageOpen, Phone, ShieldCheck, Truck } from 'lucide-react'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://rakshaai.co'
const PAGE_PATH = '/scams/e-commerce-fraud/cod-fraud'
const CANONICAL = `${SITE_URL}${PAGE_PATH}`
const HERO_IMAGE = '/blog/parcel-delivery-scam-india/delivery-one-rule-poster.webp'

export const metadata: Metadata = {
  title: "COD Scam India 2026: Unordered Parcel? Refuse It. Here's Why.",
  description:
    'Received an unordered COD parcel for Rs 99 to Rs 299? Do not pay. Learn how COD scams confirm your address, your right to refuse, and how to report it.',
  alternates: { canonical: CANONICAL },
  robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  openGraph: {
    title: "COD Scam India 2026: Unordered Parcel? Refuse It. Here's Why.",
    description:
      'A practical India guide to unordered cash-on-delivery parcels, brushing scams, fake Amazon COD packaging and address harvesting fraud.',
    url: CANONICAL,
    type: 'article',
    siteName: 'RakshaAI',
    locale: 'en_IN',
    images: [
      {
        url: HERO_IMAGE,
        width: 1200,
        height: 800,
        alt: 'COD parcel safety rule for Indian online shoppers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'COD Scam India 2026',
    description: 'Unordered COD parcel at your door? Refuse it and do not confirm your address for larger scams.',
    images: [HERO_IMAGE],
  },
  other: {
    'geo.region': 'IN',
    language: 'en-IN',
  },
}

const stats = [
  { value: '+180%', label: 'Growth pattern cited for unordered COD parcel complaints from 2023 to 2025' },
  { value: '12 lakh', label: 'Households estimated as targeted by COD address scam patterns in the source brief' },
  { value: 'Rs 199', label: 'Common small amount used because people pay to avoid conflict' },
  { value: '100%', label: 'Preventable when unordered COD parcels are refused at the door' },
]

const scamTypes = [
  {
    title: 'Classic junk COD',
    body:
      'You receive an unordered parcel for a small amount. The parcel contains soap, plastic items, cloth, sand or other junk worth far less than the COD amount.',
  },
  {
    title: 'Brushing scam for fake reviews',
    body:
      'A seller sends cheap items to real addresses to create fake verified purchase records and boost product reviews on marketplaces.',
  },
  {
    title: 'Survey-based COD targeting',
    body:
      'A survey, contest or free sample form captures your address and shopping interests, then scam parcels arrive later at slightly higher amounts.',
  },
]

const harms = [
  'You lose the small COD amount for a product you never ordered.',
  'Your address and mobile number are marked as active and willing to pay.',
  'The confirmed address can be resold to bigger fraud networks.',
  'Follow-up scams may include fake delivery calls, investment traps, digital arrest threats or larger COD parcels.',
]

const cases = [
  ['Repeated Rs 199 parcels', 'A family pays for the first few small parcels, then receives more parcels and follow-up scam calls using the same address details.'],
  ['Fake Amazon packaging', 'The outer cover looks like Amazon or Flipkart, but there is no matching order confirmation or tracking in the official account.'],
  ['Brushing scam delivery', 'A cheap household item arrives at a real address and the seller later uses the delivery to create fake verified reviews.'],
  ['Survey-triggered parcels', 'A person fills a prize survey with address details and later receives multiple COD parcels matching survey interests.'],
  ['Escalating COD series', 'The first parcel is Rs 99, the next is Rs 299, and the third becomes a much larger amount after payment behaviour is confirmed.'],
  ['Aggressive delivery pressure', 'The agent insists payment is required or threatens return charges, even though the recipient never placed the order.'],
]

const redFlags = [
  'You did not order anything and have no order confirmation for that tracking ID.',
  'The amount is a small round number such as Rs 99, Rs 149, Rs 199 or Rs 299.',
  'The sender name is unfamiliar or cannot be found online.',
  'The delivery agent pressures you to pay, sign first or accept a return charge story.',
  'The packaging imitates Amazon, Flipkart or another known platform but no matching order exists in your account.',
  'The package is unusually light, resealed or has vague product description.',
  'Tracking number is missing or does not resolve on the courier official website.',
  'You receive multiple unordered COD parcels over a short period.',
]

const rules = [
  {
    title: 'Refuse immediately using one sentence',
    body:
      'Say: I did not place this order. I am refusing this delivery. You do not need to explain further or sign anything.',
  },
  {
    title: 'Never pay even a small amount',
    body:
      'The Rs 99 or Rs 199 amount is bait. The real value to the scammer is confirming that your address and phone number are active.',
  },
  {
    title: 'Photograph the parcel before refusing',
    body:
      'If safe, capture sender name, courier company, tracking ID and any phone number. This helps if the same sender targets you again.',
  },
  {
    title: 'Protect your address data',
    body:
      'Avoid sharing full address in public groups, prize surveys, unknown seller forms or social posts. These data sources feed COD scam lists.',
  },
  {
    title: 'Report repeated targeting',
    body:
      'If multiple unordered parcels arrive, report the sender details to RakshaAI, cybercrime.gov.in and National Consumer Helpline 1915.',
  },
]

const recoverySteps = [
  {
    title: 'Stop paying any further parcels',
    body:
      'After the first paid parcel, scammers may send more parcels at higher amounts. Refuse every subsequent unordered parcel.',
  },
  {
    title: 'Keep evidence of the parcel and contents',
    body:
      'Photograph the outer label, sender name, courier details, receipt, contents and any phone number. Keep the packaging if possible.',
  },
  {
    title: 'File on cybercrime.gov.in',
    body:
      'Choose online shopping fraud and attach parcel photos, sender details and payment proof. Even small reports help identify bulk sender networks.',
  },
  {
    title: 'Call National Consumer Helpline 1915',
    body:
      'For repeated parcels or payment collection for unsolicited goods, register a complaint and preserve the complaint reference.',
  },
  {
    title: 'Monitor for follow-up scam targeting',
    body:
      'After paying, watch for delivery verification calls, digital arrest calls, investment messages, job offers and address confirmation attempts.',
  },
]

const timeline = [
  ['At doorstep', 'Say you did not order it and refuse delivery. Do not pay, sign or accept a return charge story.'],
  ['Same day', 'Photograph sender details, courier name and tracking ID. Report repeated sender details.'],
  ['Within 48 hours', 'If you already paid, file at cybercrime.gov.in with photos and payment proof.'],
  ['Within 7 days', 'Call NCH 1915 for repeated parcels or consumer complaint escalation.'],
  ['Ongoing', 'Monitor calls and messages because a paid COD parcel may trigger follow-up fraud.'],
]

const relatedGuides = [
  {
    title: 'E-Commerce Fraud Hub',
    body: 'The parent guide for online shopping fraud, fake stores, marketplace scams and recovery steps.',
    href: '/scams/e-commerce-fraud',
  },
  {
    title: 'Fake Marketplace Seller Fraud',
    body: 'Use this when an Amazon, Flipkart or Meesho seller marks an order delivered or sends an empty package.',
    href: '/scams/e-commerce-fraud/fake-marketplace-seller',
  },
  {
    title: 'Phantom Delivery Scam',
    body: 'Use this when you ordered the item but tracking says delivered and nothing arrived.',
    href: '/scams/e-commerce-fraud/phantom-delivery',
  },
  {
    title: 'Advance Payment Trap',
    body: 'Use this when a seller asks for UPI advance, token money or deposit before delivery.',
    href: '/scams/e-commerce-fraud/advance-payment-trap',
  },
  {
    title: 'Parcel Delivery Scam India',
    body: 'Use this when you receive fake courier SMS, customs fee links or redelivery payment messages.',
    href: '/blog/parcel-delivery-scam-india',
  },
  {
    title: 'Social Media & WhatsApp Shopping Scam',
    body: 'Use this when a seller found on Instagram, WhatsApp or Facebook sends COD junk or fake products.',
    href: '/scams/e-commerce-fraud/social-commerce-scam',
  },
]

const FAQ_ITEMS = [
  {
    question: 'What is a COD scam in India?',
    answer:
      'A COD scam is when a cash-on-delivery parcel you never ordered arrives at your door, usually for a small amount, and contains junk or cheap items. Paying confirms your address as active.',
  },
  {
    question: 'I received a COD parcel I did not order. Should I pay?',
    answer:
      'No. Refuse it at the door. Say: I did not place this order. I am refusing this delivery. You are not required to accept or pay for unsolicited goods.',
  },
  {
    question: 'Why is paying Rs 99 or Rs 199 dangerous?',
    answer:
      'The small loss is not the main problem. Payment confirms that your address and phone number are active and that someone there may pay without questioning.',
  },
  {
    question: 'What is a brushing scam?',
    answer:
      'A brushing scam is when sellers send cheap goods to real addresses to create verified purchase records and fake reviews on e-commerce platforms.',
  },
  {
    question: 'Can I get a refund if I already paid for an unordered COD parcel?',
    answer:
      'You can complain through National Consumer Helpline 1915 and consumerhelpline.gov.in, but recovery depends on identifying the sender. Preserve parcel and payment evidence.',
  },
  {
    question: 'How do I report a COD scam?',
    answer:
      'Photograph the parcel, sender name, courier and receipt. File on cybercrime.gov.in, call National Consumer Helpline 1915 for repeated targeting, and report the sender on RakshaAI.',
  },
  {
    question: 'What if the delivery agent is aggressive?',
    answer:
      'Stay calm, refuse the parcel, do not sign, photograph the package and agent ID if safe, then call the courier official customer care. Call local police if threatened.',
  },
  {
    question: 'How is COD scam different from phantom delivery scam?',
    answer:
      'COD scam means you never ordered the parcel and should refuse it. Phantom delivery means you did order a product, but it was marked delivered or an empty package arrived.',
  },
]

const schemas = [
  webPageSchema({
    name: "COD Scam India 2026: Unordered Parcel? Refuse It. Here's Why.",
    description: metadata.description as string,
    url: PAGE_PATH,
  }),
  breadcrumbListSchema([
    { name: 'Home', url: '/' },
    { name: 'Scams', url: '/scams' },
    { name: 'E-Commerce Fraud', url: '/scams/e-commerce-fraud' },
    { name: 'COD Fraud', url: PAGE_PATH },
  ]),
  faqPageSchema(FAQ_ITEMS),
  {
    '@context': 'https://schema.org' as const,
    '@type': 'Article',
    headline: 'COD Scam India 2026',
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
      'cod scam india',
      'unordered cod parcel india',
      'cash on delivery fraud india',
      'brushing scam india',
      'how to refuse cod delivery india',
    ],
  },
  {
    '@context': 'https://schema.org' as const,
    '@type': 'DefinedTerm',
    name: 'Brushing scam',
    description:
      'A brushing scam is a fake review scheme where sellers send cheap or unsolicited products to real addresses to create verified purchase records and post fake positive reviews.',
    url: CANONICAL,
  },
  {
    '@context': 'https://schema.org' as const,
    '@type': 'HowTo',
    name: 'How to refuse COD delivery in India',
    description: 'Steps to refuse an unordered cash-on-delivery parcel safely.',
    step: [
      { '@type': 'HowToStep', name: 'Do not pay', text: 'Do not hand over cash or UPI payment for a parcel you did not order.' },
      { '@type': 'HowToStep', name: 'Use the refusal script', text: 'Say: I did not place this order. I am refusing this delivery.' },
      { '@type': 'HowToStep', name: 'Do not sign', text: 'Do not sign any acceptance document for an unordered parcel.' },
      { '@type': 'HowToStep', name: 'Record sender details', text: 'Photograph sender name, courier company and tracking ID if safe.' },
      { '@type': 'HowToStep', name: 'Report repeated parcels', text: 'Report repeated unordered COD parcels to RakshaAI, cybercrime.gov.in and NCH 1915.' },
    ],
  },
]

export default function CodFraudPage() {
  return (
    <DefaultLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schemas) }} />

      <section className="bg-gradient-to-br from-amber-50 via-white to-cyan-50 px-4 py-16 dark:from-gray-950 dark:via-gray-900 dark:to-amber-950">
        <div className="mx-auto max-w-5xl">
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            <Link href="/">Home</Link><span aria-hidden="true">/</span>
            <Link href="/scams">Scams</Link><span aria-hidden="true">/</span>
            <Link href="/scams/e-commerce-fraud">E-Commerce Fraud</Link><span aria-hidden="true">/</span>
            <span className="font-medium text-gray-700 dark:text-gray-300">COD Fraud</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-100 px-4 py-1.5 text-xs font-semibold text-amber-800 dark:border-amber-800 dark:bg-amber-900/40 dark:text-amber-300">
                <PackageOpen className="h-4 w-4" />
                E-Commerce Fraud Guide
              </div>
              <h1 className="mb-5 text-4xl font-extrabold leading-tight text-gray-900 dark:text-white md:text-5xl">
                COD Scam India 2026
              </h1>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                Received a cash-on-delivery parcel you never ordered? Do not pay. The small
                amount is bait to confirm that your address and phone number are active for larger
                follow-up scams.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <ReportScamButton className="rounded-xl bg-amber-600 px-5 py-3 text-sm font-bold text-white shadow hover:bg-amber-700">
                  Report Sender
                </ReportScamButton>
                <Link href="/phone-number-checker" className="rounded-xl border border-amber-200 bg-white px-5 py-3 text-sm font-bold text-amber-800 shadow-sm hover:bg-amber-50 dark:border-amber-800 dark:bg-gray-900 dark:text-amber-300">
                  Check Sender Number
                </Link>
              </div>
            </div>
            <figure className="overflow-hidden rounded-2xl border border-amber-200 bg-white shadow-lg dark:border-amber-900 dark:bg-gray-900">
              <Image
                src={HERO_IMAGE}
                alt="COD parcel safety rule for Indian online shoppers"
                width={1200}
                height={800}
                className="h-auto w-full object-cover"
                priority
              />
              <figcaption className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400">
                If you did not order it, refuse it. No payment, no signature.
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

      <div className="bg-amber-700 px-4 py-4 text-white dark:bg-amber-800">
        <div className="mx-auto max-w-5xl text-sm font-medium">
          <strong>Doorstep script:</strong> I did not place this order. I am refusing this delivery.
        </div>
      </div>

      <main className="mx-auto max-w-5xl space-y-16 px-4 py-14 sm:px-6 lg:px-8">
        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">The One Rule That Stops COD Scam Harm</h2>
          <div className="grid gap-8 lg:grid-cols-[1fr_340px] lg:items-start">
            <div className="rounded-2xl border-2 border-amber-300 bg-amber-50 p-6 dark:border-amber-800 dark:bg-amber-950/30">
              <p className="text-xl font-extrabold text-amber-900 dark:text-amber-200">
                You have the right to refuse any parcel you did not order.
              </p>
              <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-200">
                You do not owe the delivery agent an explanation. You do not need to pay a return
                charge. You do not need to sign first. If there is no matching order confirmation,
                refuse the COD delivery.
              </p>
              <div className="mt-5 rounded-xl bg-white p-4 text-sm text-gray-700 dark:bg-gray-900 dark:text-gray-300">
                <p className="font-bold text-gray-900 dark:text-white">Exact words to use</p>
                <p className="mt-1">I did not place this order. I am refusing this delivery.</p>
              </div>
            </div>
            <figure className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <Image
                src="/blog/parcel-delivery-scam-india/delivery-scam-formats-grid.webp"
                alt="Delivery scam formats including fake courier and COD parcel traps"
                width={1600}
                height={900}
                className="h-auto w-full object-cover"
              />
              <figcaption className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400">
                COD parcels, fake courier messages and delivery-fee links often share the same address data sources.
              </figcaption>
            </figure>
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">3 COD Scam Types in India</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {scamTypes.map((item, index) => (
              <div key={item.title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-600 text-sm font-bold text-white">{index + 1}</span>
                <h3 className="mt-4 text-base font-bold text-gray-900 dark:text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">Why Paying Even a Small Amount Is Risky</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {harms.map((harm) => (
              <div key={harm} className="rounded-xl border border-red-100 bg-red-50 p-4 text-sm text-gray-700 dark:border-red-900 dark:bg-red-950/30 dark:text-gray-200">
                <Ban className="mb-3 h-5 w-5 text-red-600 dark:text-red-300" />
                {harm}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">Real India COD Scam Patterns</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {cases.map(([title, body]) => (
              <div key={title} className="rounded-2xl border border-cyan-100 bg-cyan-50 p-5 dark:border-cyan-900 dark:bg-cyan-950/30">
                <div className="flex items-start gap-3">
                  <Truck className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-700 dark:text-cyan-300" />
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
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">8 Warning Signs of a COD Scam Parcel</h2>
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
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-700 dark:text-amber-300">Rule {index + 1}</span>
                  <h3 className="mt-2 text-base font-bold text-gray-900 dark:text-white">{rule.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{rule.body}</p>
                </div>
              ))}
            </div>
            <figure className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <Image
                src="/blog/how-to-check-phone-number-scam-india/phone-scam-check-hero.jpg"
                alt="Checking a suspicious phone number before responding to delivery or COD scam calls"
                width={1200}
                height={800}
                className="h-auto w-full object-cover"
              />
              <figcaption className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400">
                Unknown sender calls and courier pressure should be verified through official channels.
              </figcaption>
            </figure>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-extrabold text-gray-900 dark:text-white">What to Do If You Already Paid</h2>
          <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-300">
            The direct loss may be small, but the address confirmation risk is real. Stop the pattern quickly.
          </p>
          <div className="space-y-4">
            {recoverySteps.map((step, index) => (
              <div key={step.title} className={`rounded-2xl border p-5 shadow-sm ${index <= 1 ? 'border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/30' : 'border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900'}`}>
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
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">COD Scam Response Timeline</h2>
          <div className="space-y-4">
            {timeline.map(([time, action]) => (
              <div key={time} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <h3 className="font-bold text-gray-900 dark:text-white">{time}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{action}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">Free Tools</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-red-200 bg-red-50 p-5 dark:border-red-900 dark:bg-red-950/30">
              <FileText className="h-7 w-7 text-red-700 dark:text-red-300" />
              <h3 className="mt-4 font-bold text-gray-900 dark:text-white">Report a Scam</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Report the sender name, courier, phone number and parcel details.</p>
              <ReportScamButton className="mt-4 text-sm font-semibold text-red-700 hover:underline dark:text-red-300">
                Open report form
              </ReportScamButton>
            </div>
            <Link href="/phone-number-checker" className="rounded-2xl border border-cyan-200 bg-cyan-50 p-5 hover:bg-cyan-100 dark:border-cyan-900 dark:bg-cyan-950/30 dark:hover:bg-cyan-950/50">
              <Phone className="h-7 w-7 text-cyan-700 dark:text-cyan-300" />
              <h3 className="mt-4 font-bold text-gray-900 dark:text-white">Phone Number Checker</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Check unknown sender or courier callback numbers before responding.</p>
            </Link>
            <Link href="/website-safety-checker" className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 hover:bg-emerald-100 dark:border-emerald-900 dark:bg-emerald-950/30 dark:hover:bg-emerald-950/50">
              <ShieldCheck className="h-7 w-7 text-emerald-700 dark:text-emerald-300" />
              <h3 className="mt-4 font-bold text-gray-900 dark:text-white">Website Safety Checker</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Verify any website printed on parcel documents before clicking or paying.</p>
            </Link>
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">Related E-Commerce Fraud Guides</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {relatedGuides.map((guide) => (
              <Link key={guide.href} href={guide.href} className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:border-amber-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300">
                  <Link2 className="h-4 w-4" />
                </div>
                <h3 className="font-bold text-gray-900 group-hover:text-amber-700 dark:text-white dark:group-hover:text-amber-300">{guide.title}</h3>
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
              <h2 className="text-xl font-extrabold text-gray-900 dark:text-white">Safe COD Summary</h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-200">
                COD is not automatically safe. If you did not place the order, refuse it. The goal is
                to stop address confirmation, not just avoid losing Rs 199.
              </p>
            </div>
          </div>
        </section>

        <RelatedTopics currentPath={PAGE_PATH} clusterId="ecommerce-fraud" maxSiblings={4} maxRelated={3} />
      </main>
    </DefaultLayout>
  )
}
