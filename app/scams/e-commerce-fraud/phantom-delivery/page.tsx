import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import DefaultLayout from '@/components/DefaultLayout'
import RelatedTopics from '@/components/RelatedTopics'
import ReportScamButton from '@/components/ReportScamButton'
import { breadcrumbListSchema, faqPageSchema, jsonLd, organizationRef, webPageSchema } from '@/lib/seo/schema'
import { BadgeCheck, Camera, Clock, FileText, Link2, PackageX, ShieldCheck, Truck } from 'lucide-react'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://rakshaai.co'
const PAGE_PATH = '/scams/e-commerce-fraud/phantom-delivery'
const CANONICAL = `${SITE_URL}${PAGE_PATH}`
const HERO_IMAGE = '/blog/parcel-delivery-scam-india/delivery-scam-hero.webp'

export const metadata: Metadata = {
  title: "Phantom Delivery Scam India 2026: Order Marked Delivered? Here's What to Do",
  description:
    'Order marked delivered but you never received it? Learn phantom delivery scam types, warning signs, evidence steps, refund escalation and reporting routes for India.',
  alternates: { canonical: CANONICAL },
  robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  openGraph: {
    title: "Phantom Delivery Scam India 2026: Order Marked Delivered? Here's What to Do",
    description:
      'A practical India guide for Amazon, Flipkart, Meesho and courier cases where orders are marked delivered, empty boxes arrive, or delivery OTPs are misused.',
    url: CANONICAL,
    type: 'article',
    siteName: 'RakshaAI',
    locale: 'en_IN',
    images: [
      {
        url: HERO_IMAGE,
        width: 1200,
        height: 800,
        alt: 'Parcel delivery scam warning for Indian online shoppers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Phantom Delivery Scam India 2026',
    description: 'Order marked delivered but not received? Document evidence, raise platform dispute and escalate correctly.',
    images: [HERO_IMAGE],
  },
  other: {
    'geo.region': 'IN',
    language: 'en-IN',
  },
}

const stats = [
  { value: '+240%', label: 'Growth pattern cited for phantom delivery complaints from 2023 to 2025' },
  { value: 'Rs 8,400', label: 'Average loss pattern for undelivered order complaints in the source brief' },
  { value: '<40%', label: 'Refund recovery pattern without escalation in delivery fraud cases' },
  { value: '>85%', label: 'Recovery pattern when full escalation evidence is used' },
]

const fraudTypes = [
  {
    title: 'Order marked delivered without delivery',
    body:
      'The tracking page shows delivered, but no package was handed over, no doorbell rang and no valid delivery proof matches your address.',
  },
  {
    title: 'Empty package or wrong item',
    body:
      'A package arrives, but it contains newspaper, sand, a cheap substitute or a wrong item. This creates a delivery record while the real product never reaches you.',
  },
  {
    title: 'Courier swap or theft in transit',
    body:
      'A genuine product leaves the seller, but it is swapped, stolen or resealed somewhere in the courier chain before last-mile delivery.',
  },
  {
    title: 'Delivery OTP and tracking manipulation',
    body:
      'A caller asks for the delivery OTP before the package is in your hand, or a fake tracking ID shows completed delivery for a shipment that never existed.',
  },
]

const cases = [
  ['Laptop marked delivered', 'Tracking showed delivery in the afternoon, but the buyer was home and no package arrived. A wrong proof photo was later disputed.'],
  ['Empty polybag received', 'The buyer received damaged packaging with no actual product. Video evidence helped show the item was missing on receipt.'],
  ['Smartphone OTP misuse', 'A caller pretending to be support collected the delivery OTP, the order was marked delivered, and an empty box arrived later.'],
  ['Sneakers replaced in transit', 'The package weight felt similar, but the branded shoes were replaced with old paper before delivery.'],
  ['Fake tracking number', 'The tracking ID showed a different city and did not match the buyer pin code when checked on the courier website.'],
  ['Wrong address delivery', 'A delivery agent left the package at a nearby address and the platform initially rejected the refund because tracking said delivered.'],
]

const redFlags = [
  'You were home at the alleged delivery time, but no call, SMS, bell or knock happened.',
  'The delivery photo shows a wrong door, parking area, street or location you cannot recognise.',
  'Neighbours, security desk and building staff confirm they did not receive the package.',
  'Courier shipment weight does not match the expected product weight.',
  'Tracking ID is invalid on the courier official website or shows another city or pin code.',
  'A caller asked for delivery OTP before the agent and package were physically at your door.',
  'The package seal is broken, resealed, unusually light or contains the wrong item.',
  'The seller is unresponsive while the refund window is close to expiry.',
]

const immediateActions = [
  {
    title: 'Document everything within the first hour',
    body:
      'Screenshot tracking, delivery photo, timestamp, agent details and order ID. Photograph your empty door or letterbox and record a short timestamped video.',
  },
  {
    title: 'Raise platform dispute the same day',
    body:
      'Amazon: Package not received. Flipkart: Item not received. Meesho: Product not delivered. Attach screenshots, photos and a clear written statement.',
  },
  {
    title: 'Escalate to buyer protection after 48 hours',
    body:
      'Use Amazon A-to-Z Guarantee, Flipkart buyer protection or the platform escalation path if the seller or first-level support does not resolve quickly.',
  },
  {
    title: 'Call National Consumer Helpline 1915',
    body:
      'If the platform rejects the refund or the window is closed, NCH can forward the complaint to the company under consumer protection rules.',
  },
  {
    title: 'File consumer forum and cybercrime complaint',
    body:
      'For deliberate fraud, fake tracking, OTP misuse or high-value losses, file at cybercrime.gov.in and consumerhelpline.gov.in with all evidence.',
  },
]

const platformGuide = [
  ['Amazon India', 'Dispute same day, then A-to-Z Guarantee if unresolved in 48 hours.', 'Strong with tracking and photo evidence.'],
  ['Flipkart', 'My Orders to Need Help to Item not received, then buyer protection escalation.', 'Strong when raised within the delivery window.'],
  ['Meesho', 'Order History to Return/Refund to Product not delivered. Escalate before seller payout window closes.', 'Best when complaint is filed quickly.'],
  ['Myntra', 'Help Centre order issue, then NCH 1915 if the package was swapped or not received.', 'Works well with opening video.'],
  ['Nykaa', 'Help to My Orders, photo evidence, then NCH 1915 for unresolved cases.', 'Keep packaging and batch evidence.'],
  ['Courier partner', 'File on official courier portal and include courier as a party in consumer complaint if needed.', 'Useful when seller dispatched correctly.'],
]

const timeline = [
  ['Same day', 'Collect photos, video, tracking screenshots, neighbour statements and raise platform dispute.'],
  ['Within 24 hours', 'Call 1930 if UPI payment fraud or OTP misuse is involved. Preserve all chats and call logs.'],
  ['Within 48-72 hours', 'Escalate to A-to-Z, buyer protection or senior platform support.'],
  ['Within 7 days', 'Call NCH 1915, file cybercrime complaint and start bank chargeback if card was used.'],
  ['Within 30 days', 'File consumer forum complaint if platform and NCH route do not resolve.'],
  ['Within 120 days', 'Final chargeback window for many card disputes. Check with your bank quickly.'],
]

const relatedGuides = [
  {
    title: 'E-Commerce Fraud Hub',
    body: 'The parent guide covering fake stores, marketplace scams, COD fraud, counterfeit goods and non-delivery traps.',
    href: '/scams/e-commerce-fraud',
  },
  {
    title: 'Fake Marketplace Seller Fraud',
    body: 'Use this when the seller account itself was fraudulent and never intended to ship the order.',
    href: '/scams/e-commerce-fraud/fake-marketplace-seller',
  },
  {
    title: 'Counterfeit Products Online',
    body: 'Use this when the item arrives but is fake, low-quality or not the branded product you ordered.',
    href: '/scams/e-commerce-fraud/counterfeit-products',
  },
  {
    title: 'COD Fraud',
    body: 'Use this when you never placed the order and a cash-on-delivery parcel asks for payment at the door.',
    href: '/scams/e-commerce-fraud/cod-fraud',
  },
  {
    title: 'Advance Payment Trap',
    body: 'Use this when a seller asks for direct UPI payment before shipping and then disappears.',
    href: '/scams/e-commerce-fraud/advance-payment-trap',
  },
  {
    title: 'Parcel Delivery Scam India',
    body: 'Use this when you receive fake courier SMS, delivery-fee links, APK links or customs payment messages.',
    href: '/blog/parcel-delivery-scam-india',
  },
  {
    title: 'Social Media & WhatsApp Shopping Scam',
    body: 'Use this when the order came from Instagram, WhatsApp, Facebook Marketplace, Telegram or YouTube links.',
    href: '/scams/e-commerce-fraud/social-commerce-scam',
  },
]

const FAQ_ITEMS = [
  {
    question: 'What is a phantom delivery scam?',
    answer:
      'A phantom delivery scam is when an online order is marked delivered before it reaches you, or an empty or wrong package is sent to create proof of delivery and close the refund window.',
  },
  {
    question: 'My Amazon order shows delivered but I did not receive it. What should I do?',
    answer:
      'Screenshot the tracking page, photograph your door or letterbox, ask neighbours and security, raise Package not received the same day, and escalate to Amazon A-to-Z Guarantee if unresolved within 48 hours.',
  },
  {
    question: 'Can I claim a refund after the return window has closed?',
    answer:
      'Yes. Platform return windows are contractual, but consumer protection rights still apply for goods that were not delivered. Call National Consumer Helpline 1915 and file at consumerhelpline.gov.in if the platform refuses.',
  },
  {
    question: 'What is delivery OTP misuse?',
    answer:
      'Delivery OTP misuse happens when someone asks for your delivery OTP before the package is in your hand, then uses it to mark the order delivered without completing delivery.',
  },
  {
    question: 'How do I prove my order was never delivered?',
    answer:
      'Use tracking screenshots, GPS or delivery photo mismatch, same-day photos of your door, neighbour or security statements, call logs, CCTV if available, courier weight records and payment proof.',
  },
  {
    question: 'What should I do if I receive an empty box?',
    answer:
      'Record the package before opening, photograph the seal and contents, keep the label and packaging, raise a platform dispute immediately and escalate to consumer forum if rejected.',
  },
  {
    question: 'Should I report a phantom delivery scam to cybercrime.gov.in?',
    answer:
      'Report it when the case involves fake tracking, OTP theft, deliberate seller fraud, UPI fraud or impersonation. Attach all platform, courier and payment evidence.',
  },
  {
    question: 'Who is responsible: seller, platform or courier?',
    answer:
      'It depends on where the fraud occurred, but for consumer recovery you should raise the complaint against the platform and include the seller and courier evidence wherever relevant.',
  },
]

const schemas = [
  webPageSchema({
    name: "Phantom Delivery Scam India 2026: Order Marked Delivered? Here's What to Do",
    description: metadata.description as string,
    url: PAGE_PATH,
  }),
  breadcrumbListSchema([
    { name: 'Home', url: '/' },
    { name: 'Scams', url: '/scams' },
    { name: 'E-Commerce Fraud', url: '/scams/e-commerce-fraud' },
    { name: 'Phantom Delivery Scam', url: PAGE_PATH },
  ]),
  faqPageSchema(FAQ_ITEMS),
  {
    '@context': 'https://schema.org' as const,
    '@type': 'Article',
    headline: 'Phantom Delivery Scam India 2026',
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
      'phantom delivery scam india',
      'order marked delivered but not received india',
      'empty box received online shopping india',
      'delivery otp misuse india',
      'amazon package not delivered india',
    ],
  },
  {
    '@context': 'https://schema.org' as const,
    '@type': 'HowTo',
    name: 'How to claim refund for non-delivered order in India',
    description: 'Evidence and escalation steps when an online order is marked delivered but never arrives.',
    step: immediateActions.map((step) => ({
      '@type': 'HowToStep',
      name: step.title,
      text: step.body,
    })),
  },
]

export default function PhantomDeliveryPage() {
  return (
    <DefaultLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schemas) }} />

      <section className="bg-gradient-to-br from-orange-50 via-white to-cyan-50 px-4 py-16 dark:from-gray-950 dark:via-gray-900 dark:to-orange-950">
        <div className="mx-auto max-w-5xl">
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            <Link href="/">Home</Link><span aria-hidden="true">/</span>
            <Link href="/scams">Scams</Link><span aria-hidden="true">/</span>
            <Link href="/scams/e-commerce-fraud">E-Commerce Fraud</Link><span aria-hidden="true">/</span>
            <span className="font-medium text-gray-700 dark:text-gray-300">Phantom Delivery Scam</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100 px-4 py-1.5 text-xs font-semibold text-orange-800 dark:border-orange-800 dark:bg-orange-900/40 dark:text-orange-300">
                <PackageX className="h-4 w-4" />
                E-Commerce Fraud Guide
              </div>
              <h1 className="mb-5 text-4xl font-extrabold leading-tight text-gray-900 dark:text-white md:text-5xl">
                Phantom Delivery Scam India 2026
              </h1>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                Your order shows delivered, but nothing reached you. Or an empty box arrives after
                the refund clock has already started. This guide shows what evidence to collect,
                how to raise the dispute and when to escalate beyond the platform.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <ReportScamButton className="rounded-xl bg-orange-600 px-5 py-3 text-sm font-bold text-white shadow hover:bg-orange-700">
                  Report This Fraud
                </ReportScamButton>
                <Link href="/website-safety-checker" className="rounded-xl border border-orange-200 bg-white px-5 py-3 text-sm font-bold text-orange-800 shadow-sm hover:bg-orange-50 dark:border-orange-800 dark:bg-gray-900 dark:text-orange-300">
                  Check Seller Website
                </Link>
              </div>
            </div>
            <figure className="overflow-hidden rounded-2xl border border-orange-200 bg-white shadow-lg dark:border-orange-900 dark:bg-gray-900">
              <Image
                src={HERO_IMAGE}
                alt="Parcel delivery scam warning for Indian online shoppers"
                width={1200}
                height={800}
                className="h-auto w-full object-cover"
                priority
              />
              <figcaption className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400">
                The first hour after a false delivered status is critical for evidence.
              </figcaption>
            </figure>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-orange-100 bg-white p-4 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <div className="text-2xl font-extrabold text-orange-700 dark:text-orange-300">{stat.value}</div>
                <p className="mt-2 text-xs leading-relaxed text-gray-500 dark:text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-orange-700 px-4 py-4 text-white dark:bg-orange-800">
        <div className="mx-auto max-w-5xl text-sm font-medium">
          <strong>Rule:</strong> if an order is marked delivered but you did not receive it, file the platform dispute the same day.
        </div>
      </div>

      <main className="mx-auto max-w-5xl space-y-16 px-4 py-14 sm:px-6 lg:px-8">
        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">What Is a Phantom Delivery Scam?</h2>
          <div className="grid gap-8 lg:grid-cols-[1fr_340px] lg:items-start">
            <div className="rounded-2xl border-2 border-orange-300 bg-orange-50 p-6 dark:border-orange-800 dark:bg-orange-950/30">
              <p className="text-xl font-extrabold text-orange-900 dark:text-orange-200">
                The scam manipulates the delivery record and refund window.
              </p>
              <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-200">
                A platform sees delivered status and starts the refund clock. If you wait, the seller
                can claim the window has closed. Your legal rights do not end there, but the evidence
                is strongest when you document the issue immediately.
              </p>
              <div className="mt-5 rounded-xl bg-white p-4 text-sm text-gray-700 dark:bg-gray-900 dark:text-gray-300">
                <p className="font-bold text-gray-900 dark:text-white">Consumer law point</p>
                <p className="mt-1">
                  Platform return windows are policy terms. If goods are not delivered, consumer
                  protection remedies can still apply through NCH and consumer forum routes.
                </p>
              </div>
            </div>
            <figure className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <Image
                src="/blog/parcel-delivery-scam-india/delivery-scam-verify-steps.webp"
                alt="Delivery verification steps before trusting a courier message or delivery status"
                width={1600}
                height={900}
                className="h-auto w-full object-cover"
              />
              <figcaption className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400">
                Verify tracking, delivery proof and courier details directly.
              </figcaption>
            </figure>
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">4 Phantom Delivery Fraud Types</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {fraudTypes.map((item, index) => (
              <div key={item.title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-600 text-sm font-bold text-white">{index + 1}</span>
                <h3 className="mt-4 text-base font-bold text-gray-900 dark:text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{item.body}</p>
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
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">8 Warning Signs to Act On Immediately</h2>
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
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">5 Immediate Actions When an Order Is Marked Delivered</h2>
          <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-start">
            <div className="space-y-4">
              {immediateActions.map((action, index) => (
                <div key={action.title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                  <span className="text-xs font-bold uppercase tracking-widest text-orange-700 dark:text-orange-300">Action {index + 1}</span>
                  <h3 className="mt-2 text-base font-bold text-gray-900 dark:text-white">{action.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{action.body}</p>
                </div>
              ))}
            </div>
            <figure className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <Image
                src="/blog/parcel-delivery-scam-india/delivery-one-rule-poster.webp"
                alt="Delivery scam safety rule poster for Indian online shoppers"
                width={1600}
                height={900}
                className="h-auto w-full object-cover"
              />
              <figcaption className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400">
                Never share delivery OTP until the package is physically in your hand.
              </figcaption>
            </figure>
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">Platform-by-Platform Refund Recovery Guide</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-800">
            <table className="w-full text-sm">
              <thead className="bg-gray-900 text-white dark:bg-gray-800">
                <tr>
                  <th className="px-4 py-3 text-left font-bold">Platform</th>
                  <th className="px-4 py-3 text-left font-bold">Refund Path</th>
                  <th className="px-4 py-3 text-left font-bold">Evidence Note</th>
                </tr>
              </thead>
              <tbody>
                {platformGuide.map(([platform, path, note], index) => (
                  <tr key={platform} className={index % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800'}>
                    <td className="border-t border-gray-100 px-4 py-3 font-semibold text-gray-900 dark:border-gray-700 dark:text-white">{platform}</td>
                    <td className="border-t border-gray-100 px-4 py-3 text-gray-600 dark:border-gray-700 dark:text-gray-300">{path}</td>
                    <td className="border-t border-gray-100 px-4 py-3 text-gray-600 dark:border-gray-700 dark:text-gray-300">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">Recovery Timeline</h2>
          <div className="space-y-4">
            {timeline.map(([time, action], index) => (
              <div key={time} className={`rounded-2xl border p-5 shadow-sm ${index <= 1 ? 'border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950/30' : 'border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900'}`}>
                <div className="flex gap-4">
                  <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-orange-700 dark:text-orange-300" />
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">{time}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{action}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">Free Tools and Evidence Helpers</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-red-200 bg-red-50 p-5 dark:border-red-900 dark:bg-red-950/30">
              <FileText className="h-7 w-7 text-red-700 dark:text-red-300" />
              <h3 className="mt-4 font-bold text-gray-900 dark:text-white">Report a Scam</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Report seller UPI ID, website, phone number or courier fraud evidence.</p>
              <ReportScamButton className="mt-4 text-sm font-semibold text-red-700 hover:underline dark:text-red-300">
                Open report form
              </ReportScamButton>
            </div>
            <Link href="/upi-id-checker" className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 hover:bg-emerald-100 dark:border-emerald-900 dark:bg-emerald-950/30 dark:hover:bg-emerald-950/50">
              <BadgeCheck className="h-7 w-7 text-emerald-700 dark:text-emerald-300" />
              <h3 className="mt-4 font-bold text-gray-900 dark:text-white">UPI ID Checker</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Check seller UPI ID before paying outside protected platform checkout.</p>
            </Link>
            <Link href="/website-safety-checker" className="rounded-2xl border border-cyan-200 bg-cyan-50 p-5 hover:bg-cyan-100 dark:border-cyan-900 dark:bg-cyan-950/30 dark:hover:bg-cyan-950/50">
              <ShieldCheck className="h-7 w-7 text-cyan-700 dark:text-cyan-300" />
              <h3 className="mt-4 font-bold text-gray-900 dark:text-white">Website Safety Checker</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Check unknown seller websites, tracking links and payment pages.</p>
            </Link>
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">Related E-Commerce Fraud Guides</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {relatedGuides.map((guide) => (
              <Link key={guide.href} href={guide.href} className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:border-orange-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300">
                  <Link2 className="h-4 w-4" />
                </div>
                <h3 className="font-bold text-gray-900 group-hover:text-orange-700 dark:text-white dark:group-hover:text-orange-300">{guide.title}</h3>
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
            <Camera className="h-8 w-8 flex-shrink-0 text-green-700 dark:text-green-300" />
            <div>
              <h2 className="text-xl font-extrabold text-gray-900 dark:text-white">Evidence Is the Difference</h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-200">
                Screenshot first, record video second, then file the platform dispute. Fast evidence
                makes it much harder for a seller or courier to hide behind a false delivered status.
              </p>
            </div>
          </div>
        </section>

        <RelatedTopics currentPath={PAGE_PATH} clusterId="ecommerce-fraud" maxSiblings={4} maxRelated={3} />
      </main>
    </DefaultLayout>
  )
}
