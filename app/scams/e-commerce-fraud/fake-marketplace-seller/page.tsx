import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import DefaultLayout from '@/components/DefaultLayout'
import RelatedTopics from '@/components/RelatedTopics'
import ReportScamButton from '@/components/ReportScamButton'
import { breadcrumbListSchema, faqPageSchema, jsonLd, organizationRef, webPageSchema } from '@/lib/seo/schema'
import { BadgeCheck, CheckCircle2, Clock, Link2, PackageSearch, ShieldAlert, ShieldCheck, ShoppingCart, Truck, Users } from 'lucide-react'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://rakshaai.co'
const PAGE_PATH = '/scams/e-commerce-fraud/fake-marketplace-seller'
const CANONICAL = `${SITE_URL}${PAGE_PATH}`
const HERO_IMAGE = '/blog/how-to-check-fake-website-india/website-safety-checklist-india.webp'

export const metadata: Metadata = {
  title: 'Fake Seller on Amazon & Flipkart India 2026: Spot & Get Refund',
  description:
    'Fraudulent 3rd-party sellers on Amazon, Flipkart and Meesho collect payment, mark orders delivered, never ship or send empty packages. Spot red flags and get refund.',
  alternates: { canonical: CANONICAL },
  robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  openGraph: {
    title: 'Fake Seller on Amazon & Flipkart India 2026: Spot & Get Refund',
    description:
      'A practical India guide to marketplace fake sellers, Buy Box hijacking, ghost seller accounts, fake tracking and A-to-Z refund escalation.',
    url: CANONICAL,
    type: 'article',
    siteName: 'RakshaAI',
    locale: 'en_IN',
    images: [
      {
        url: HERO_IMAGE,
        width: 1200,
        height: 800,
        alt: 'Marketplace seller verification checklist for Indian online shoppers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fake Marketplace Seller Scam India 2026',
    description: 'Check seller profile, reviews, tracking and refund escalation before buying from Amazon, Flipkart or Meesho third-party sellers.',
    images: [HERO_IMAGE],
  },
  other: {
    'geo.region': 'IN',
    language: 'en-IN',
  },
}

const stats = [
  { value: '22%', label: 'E-commerce fraud complaint share cited for fake marketplace seller cases in the source brief' },
  { value: 'Rs 11,200', label: 'Average loss pattern for fake marketplace seller victims in the source brief' },
  { value: '8,000+', label: 'New fraudulent 3P listing pattern cited per day before platform removal' },
  { value: '85%+', label: 'Recovery pattern when buyers use platform dispute, NCH and consumer forum escalation' },
]

const distinctions = [
  {
    title: 'Fake marketplace seller',
    body:
      'The seller account itself is fraudulent. You pay through a real platform, but the seller never intended to ship the product.',
  },
  {
    title: 'Phantom delivery',
    body:
      'A genuine seller may exist, but the courier or delivery flow fails and the order is marked delivered without reaching you.',
    href: '/scams/e-commerce-fraud/phantom-delivery',
  },
  {
    title: 'Counterfeit product',
    body:
      'A product arrives, but it is fake, unsafe or not the genuine branded item you ordered.',
    href: '/scams/e-commerce-fraud/counterfeit-products',
  },
]

const sellerTypes = [
  {
    title: 'Ghost seller accounts',
    body:
      'A new seller account lists popular electronics or branded goods, collects orders for a short period, marks them delivered, then disappears or gets deactivated.',
  },
  {
    title: 'Buy Box hijacking',
    body:
      'A fraudulent third-party seller undercuts the genuine seller and wins the visible Add to Cart flow on a real-looking Amazon listing.',
  },
  {
    title: 'Fake product listings',
    body:
      'The seller creates a new listing with stolen photos, fabricated specs and purchased reviews to make a fake store look established.',
  },
  {
    title: 'Meesho supplier fraud',
    body:
      'A fraudulent supplier sits behind the reseller chain, marks orders delivered, sends empty packages or ships wrong cheap items.',
  },
]

const deliveryTactics = [
  {
    title: 'Delivered without shipment',
    body:
      'The seller enters a false delivery status even when no courier collected the package. This starts the refund-window pressure.',
  },
  {
    title: 'Fake tracking number',
    body:
      'The platform page shows movement, but the courier official website shows no record, a different pin code or a different shipment.',
  },
  {
    title: 'Empty or wrong package',
    body:
      'A cheap or empty package is shipped to create physical delivery proof and make the dispute harder.',
  },
]

const cases = [
  ['Amazon laptop', 'A third-party seller won the Buy Box, tracking showed delivered, and an empty box arrived. A-to-Z evidence helped refund escalation.'],
  ['Flipkart smartphone', 'A new seller with very few reviews showed delivery at a different pin code. Buyer protection plus consumer forum reference resolved it.'],
  ['Designer watch', 'A ghost seller account was deactivated after many similar complaints. Platform dispute records became the main evidence.'],
  ['Meesho apparel', 'A reseller promoted a fraudulent supplier and the buyer received an empty polybag. Fast complaint helped freeze supplier payout.'],
  ['Air purifier listing', 'A fake listing used review manipulation and marked delivery without physical handover. NCH escalation pushed resolution.'],
  ['Gaming console', 'Courier tracking ID did not exist on the courier website. Screenshots of both pages supported the complaint.'],
]

const redFlags = [
  'Seller account is under 90 days old or has no meaningful selling history.',
  'Seller has fewer than 50 reviews, rating below 4.0 or many recent 1-star complaints.',
  'The product is not Sold by Amazon, official brand store, Flipkart Assured or a verified supplier.',
  'Reviews are all 5-star, generic and posted in a short time window.',
  'Tracking ID does not exist on the courier official website or shows a different pin code.',
  'Store lists unrelated categories like electronics, sarees, car parts and cosmetics in the same week.',
  'Invoice is missing GSTIN, seller address, legal entity name or has mismatched GST details.',
  'Price is 20-40% below normal retail and the seller account is new or poorly reviewed.',
]

const safetyRules = [
  {
    title: 'Check the Sold by field before checkout',
    body:
      'For high-value items, prefer platform-direct stock, official brand stores or sellers with a long public track record. Do this before adding to cart.',
  },
  {
    title: 'Open seller profile and read recent reviews',
    body:
      'Check account age, review count, recent negative reviews and whether reviews are spread across months instead of clustered in days.',
  },
  {
    title: 'Verify tracking on the courier website',
    body:
      'Paste the tracking number into Delhivery, Ekart, BlueDart or the actual courier site. Do not rely only on the platform tracking page.',
  },
  {
    title: 'Record unboxing for orders above Rs 5,000',
    body:
      'Record a continuous video showing the sealed package, label, weight and full opening. This is strong evidence for empty or wrong package disputes.',
  },
  {
    title: 'Act the same day if status says Delivered',
    body:
      'File the platform dispute immediately if the package is missing. Waiting gives a fraudulent seller more time to close the refund window.',
  },
]

const recoverySteps = [
  {
    title: 'Raise platform dispute immediately',
    body:
      'Amazon: Problem with order. Flipkart: Need Help. Meesho: Return or Refund. Attach tracking mismatch, empty package video and seller profile screenshots.',
  },
  {
    title: 'Use A-to-Z or buyer protection escalation',
    body:
      'If the first response is not resolved within 48 hours, escalate through Amazon A-to-Z Guarantee, Flipkart buyer protection or Meesho support escalation.',
  },
  {
    title: 'Call 1930 and file cybercrime complaint',
    body:
      'If UPI, impersonation, fake tracking or deliberate seller fraud is involved, call 1930 and file at cybercrime.gov.in under online shopping fraud.',
  },
  {
    title: 'Start card chargeback if paid by card',
    body:
      'For credit or debit card payments, ask your bank for a goods-not-delivered or fraud chargeback and attach the platform complaint reference.',
  },
  {
    title: 'Escalate to NCH and consumer forum',
    body:
      'Call National Consumer Helpline 1915 and cite Consumer Protection (E-Commerce) Rules 2020 if the platform refuses responsibility for seller fraud.',
  },
  {
    title: 'Report the seller to RakshaAI',
    body:
      'Share seller name, profile URL, UPI ID, phone number, listing URL and screenshots so other buyers can find the warning before paying.',
  },
]

const platformGuide = [
  ['Amazon India', 'High', 'Buy Box hijacking, ghost sellers and review-manipulated accounts', 'Check Sold by, prefer official or brand store, then use A-to-Z Guarantee.'],
  ['Flipkart', 'Medium-high', 'Third-party marketplace sellers and fake tracking', 'Use Flipkart Assured, check seller profile and escalate via buyer protection.'],
  ['Meesho', 'High', 'Supplier-chain fraud and empty packages', 'Prefer verified suppliers and dispute before supplier payout window closes.'],
  ['Myntra', 'Medium', 'Mostly brand-direct but still watch marketplace sellers', 'Use the return window quickly and keep opening video for high-value orders.'],
  ['Nykaa', 'Lower', 'Brand-direct focus but cosmetics need batch verification', 'Check seal, batch code, expiry and raise issue immediately.'],
]

const timeline = [
  ['Same day', 'Screenshot order, seller profile, tracking, delivery proof and raise the platform dispute.'],
  ['Within 48 hrs', 'Escalate to A-to-Z Guarantee, buyer protection or senior platform support.'],
  ['Within 72 hrs', 'File cybercrime complaint, call 1930 if money movement can still be frozen, and start chargeback if card was used.'],
  ['Within 7 days', 'Call NCH 1915 and cite E-Commerce Rules 2020 in the platform escalation.'],
  ['Within 30 days', 'File consumer forum complaint and FIR for high-value or repeated seller fraud.'],
  ['Within 120 days', 'Complete card chargeback paperwork where applicable.'],
]

const relatedGuides = [
  {
    title: 'E-Commerce Fraud Hub',
    body: 'The parent guide for fake stores, COD fraud, marketplace seller scams and shopping recovery steps.',
    href: '/scams/e-commerce-fraud',
  },
  {
    title: 'Fake Shopping Website Fraud',
    body: 'Use this when the entire standalone store and checkout are fake, rather than a seller account inside a real marketplace.',
    href: '/scams/e-commerce-fraud/fake-online-stores',
  },
  {
    title: 'Phantom Delivery Scam',
    body: 'Use this when tracking says delivered but the package never reached you or delivery proof is false.',
    href: '/scams/e-commerce-fraud/phantom-delivery',
  },
  {
    title: 'Counterfeit Products Online',
    body: 'Use this when a product arrives but the item is fake, unsafe or not the genuine brand.',
    href: '/scams/e-commerce-fraud/counterfeit-products',
  },
  {
    title: 'Advance Payment Trap',
    body: 'Use this when a seller asks for direct UPI advance or token money outside platform checkout.',
    href: '/scams/e-commerce-fraud/advance-payment-trap',
  },
  {
    title: 'Social Media & WhatsApp Shopping Scam',
    body: 'Use this when the seller is on Instagram, WhatsApp, Facebook Marketplace, Telegram or YouTube.',
    href: '/scams/e-commerce-fraud/social-commerce-scam',
  },
  {
    title: 'COD Fraud',
    body: 'Use this when an unordered cash-on-delivery parcel reaches your door and asks for payment.',
    href: '/scams/e-commerce-fraud/cod-fraud',
  },
]

const FAQ_ITEMS = [
  {
    question: 'What is a fake marketplace seller scam?',
    answer:
      'A fake marketplace seller scam is when a fraudulent third-party seller on Amazon, Flipkart, Meesho or another marketplace collects payment through the platform, then never ships, marks the order delivered, or sends an empty or wrong package.',
  },
  {
    question: 'How is fake seller fraud different from phantom delivery?',
    answer:
      'In fake seller fraud, the seller account was fraudulent from the start. In phantom delivery, the seller may be genuine but the courier or delivery flow fails. This distinction matters for complaints and liability.',
  },
  {
    question: 'How do I identify a fake seller on Amazon India before buying?',
    answer:
      'Check the Sold by field, seller account age, review count, recent negative reviews, GST invoice details, price difference and whether the seller is official, platform-direct or brand authorised.',
  },
  {
    question: 'What is Buy Box hijacking?',
    answer:
      'Buy Box hijacking happens when a fraudulent third-party seller wins the visible Add to Cart position on a genuine-looking product listing by offering lower price or faster delivery.',
  },
  {
    question: 'What should I do if Amazon or Flipkart says delivered but I got nothing?',
    answer:
      'Screenshot tracking, check the courier official site, photograph your door or delivery area, raise a platform dispute the same day and escalate to A-to-Z or buyer protection within 48 hours.',
  },
  {
    question: 'Can I get a refund for empty package or wrong item?',
    answer:
      'Yes, especially if you have opening video, packaging photos, tracking proof and same-day complaint. If the platform rejects it, escalate to NCH 1915 and consumer forum.',
  },
  {
    question: 'What laws help Indian buyers against fake marketplace sellers?',
    answer:
      'Consumer Protection Act 2019 and Consumer Protection (E-Commerce) Rules 2020 support platform accountability, seller due diligence and grievance escalation. For deliberate online cheating, cybercrime and FIR routes may also apply.',
  },
  {
    question: 'Should I report a fake seller to cybercrime.gov.in?',
    answer:
      'Yes when there is fake tracking, impersonation, payment fraud, repeated seller fraud, UPI transfer, high-value loss or clear cheating. Attach seller profile, order, payment and tracking evidence.',
  },
]

const schemas = [
  webPageSchema({
    name: 'Fake Seller on Amazon & Flipkart India 2026 - How to Spot Fraudulent Sellers',
    description: metadata.description as string,
    url: PAGE_PATH,
  }),
  breadcrumbListSchema([
    { name: 'Home', url: '/' },
    { name: 'Scams', url: '/scams' },
    { name: 'E-Commerce Fraud', url: '/scams/e-commerce-fraud' },
    { name: 'Fake Marketplace Seller', url: PAGE_PATH },
  ]),
  faqPageSchema(FAQ_ITEMS),
  {
    '@context': 'https://schema.org' as const,
    '@type': 'Article',
    headline: 'Fake Seller on Amazon and Flipkart India 2026',
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
      'fake seller amazon india',
      'fake marketplace seller india',
      'amazon buy box hijack india',
      'flipkart fake seller refund',
      'meesho supplier fraud india',
    ],
  },
  {
    '@context': 'https://schema.org' as const,
    '@type': 'DefinedTerm',
    name: 'Fake marketplace seller fraud',
    description:
      'A marketplace fraud where a third-party seller on a legitimate shopping platform never intends to ship the promised product after collecting payment through checkout.',
    url: CANONICAL,
  },
  {
    '@context': 'https://schema.org' as const,
    '@type': 'HowTo',
    name: 'How to identify fake seller amazon india',
    description: 'Five checks before buying from a third-party marketplace seller in India.',
    step: safetyRules.map((step) => ({
      '@type': 'HowToStep',
      name: step.title,
      text: step.body,
    })),
  },
]

export default function FakeMarketplaceSellerPage() {
  return (
    <DefaultLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schemas) }} />

      <section className="bg-gradient-to-br from-cyan-50 via-white to-amber-50 px-4 py-16 dark:from-gray-950 dark:via-gray-900 dark:to-cyan-950">
        <div className="mx-auto max-w-5xl">
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            <Link href="/">Home</Link><span aria-hidden="true">/</span>
            <Link href="/scams">Scams</Link><span aria-hidden="true">/</span>
            <Link href="/scams/e-commerce-fraud">E-Commerce Fraud</Link><span aria-hidden="true">/</span>
            <span className="font-medium text-gray-700 dark:text-gray-300">Fake Marketplace Seller</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-100 px-4 py-1.5 text-xs font-semibold text-cyan-800 dark:border-cyan-800 dark:bg-cyan-900/40 dark:text-cyan-300">
                <Users className="h-4 w-4" />
                E-Commerce Fraud Guide
              </div>
              <h1 className="mb-5 text-4xl font-extrabold leading-tight text-gray-900 dark:text-white md:text-5xl">
                Fake Seller on Amazon & Flipkart India 2026
              </h1>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                A fraudulent third-party seller uses Amazon, Flipkart or Meesho&apos;s trust to
                collect payment, mark an order delivered, send fake tracking or ship an empty
                package. The platform is real; the seller account is the trap.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/upi-id-checker" className="rounded-xl bg-cyan-700 px-5 py-3 text-sm font-bold text-white shadow hover:bg-cyan-800">
                  Check Seller UPI ID
                </Link>
                <Link href="/website-safety-checker" className="rounded-xl border border-cyan-200 bg-white px-5 py-3 text-sm font-bold text-cyan-800 shadow-sm hover:bg-cyan-50 dark:border-cyan-800 dark:bg-gray-900 dark:text-cyan-300">
                  Check Seller Site
                </Link>
              </div>
            </div>
            <figure className="overflow-hidden rounded-2xl border border-cyan-200 bg-white shadow-lg dark:border-cyan-900 dark:bg-gray-900">
              <Image
                src={HERO_IMAGE}
                alt="Marketplace seller verification checklist for Indian online shoppers"
                width={1600}
                height={900}
                className="h-auto w-full object-cover"
                priority
              />
              <figcaption className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400">
                Check the seller before payment; evidence matters most when the order is marked delivered.
              </figcaption>
            </figure>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-cyan-100 bg-white p-4 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <div className="text-2xl font-extrabold text-cyan-700 dark:text-cyan-300">{stat.value}</div>
                <p className="mt-2 text-xs leading-relaxed text-gray-500 dark:text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-cyan-800 px-4 py-4 text-white dark:bg-cyan-900">
        <div className="mx-auto max-w-5xl text-sm font-medium">
          <strong>Core check:</strong> marketplace payment is safer only when the seller, tracking and invoice are also genuine.
        </div>
      </div>

      <main className="mx-auto max-w-5xl space-y-16 px-4 py-14 sm:px-6 lg:px-8">
        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">What Makes This Different?</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {distinctions.map((item) => (
              <div key={item.title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <PackageSearch className="h-7 w-7 text-cyan-700 dark:text-cyan-300" />
                <h3 className="mt-4 text-base font-bold text-gray-900 dark:text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{item.body}</p>
                {item.href ? (
                  <Link href={item.href} className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-cyan-700 hover:text-cyan-900 dark:text-cyan-300">
                    Read guide <Link2 className="h-4 w-4" />
                  </Link>
                ) : null}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">4 Fake Seller Patterns on Marketplaces</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {sellerTypes.map((item, index) => (
              <div key={item.title} className="rounded-2xl border border-amber-100 bg-amber-50 p-5 dark:border-amber-900 dark:bg-amber-950/30">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-600 text-sm font-bold text-white">{index + 1}</span>
                <h3 className="mt-4 font-bold text-gray-900 dark:text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-200">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">Fake Delivery Tactics Used After Payment</h2>
          <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-start">
            <div className="space-y-4">
              {deliveryTactics.map((item) => (
                <div key={item.title} className="rounded-2xl border border-red-200 bg-red-50 p-5 dark:border-red-800 dark:bg-red-950/30">
                  <div className="flex gap-3">
                    <Truck className="mt-1 h-5 w-5 flex-shrink-0 text-red-700 dark:text-red-300" />
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-200">{item.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <figure className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <Image
                src="/blog/parcel-delivery-scam-india/delivery-scam-verify-steps.webp"
                alt="Courier tracking verification steps for delivery scam cases"
                width={1600}
                height={900}
                className="h-auto w-full object-cover"
              />
              <figcaption className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400">
                Always verify tracking on the courier&apos;s official site, not only inside the shopping app.
              </figcaption>
            </figure>
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">Real India Case Patterns</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {cases.map(([title, body]) => (
              <div key={title} className="rounded-2xl border border-cyan-100 bg-cyan-50 p-5 dark:border-cyan-900 dark:bg-cyan-950/30">
                <div className="flex items-start gap-3">
                  <ShoppingCart className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-700 dark:text-cyan-300" />
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
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">8 Red Flags Before You Buy</h2>
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
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">5 Safety Rules for Marketplace Orders</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {safetyRules.map((rule, index) => (
              <div key={rule.title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <span className="text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-300">Rule {index + 1}</span>
                <h3 className="mt-2 text-base font-bold text-gray-900 dark:text-white">{rule.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{rule.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-extrabold text-gray-900 dark:text-white">Recovery Guide If a Fake Seller Took Your Money</h2>
          <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-300">
            Because payment happened through a marketplace, start inside the platform, then escalate with evidence if the first response fails.
          </p>
          <div className="space-y-4">
            {recoverySteps.map((step, index) => (
              <div key={step.title} className={`rounded-2xl border p-5 shadow-sm ${index <= 1 ? 'border-cyan-200 bg-cyan-50 dark:border-cyan-800 dark:bg-cyan-950/30' : 'border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900'}`}>
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
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">Platform-by-Platform Protection</h2>
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <div className="hidden grid-cols-4 bg-gray-50 px-4 py-3 text-xs font-bold uppercase text-gray-500 dark:bg-gray-950 dark:text-gray-400 md:grid">
              <span>Platform</span>
              <span>Risk</span>
              <span>Pattern</span>
              <span>Best protection</span>
            </div>
            {platformGuide.map(([platform, risk, pattern, protection]) => (
              <div key={platform} className="grid grid-cols-1 gap-2 border-t border-gray-100 px-4 py-4 text-sm dark:border-gray-800 md:grid-cols-4">
                <span className="font-bold text-gray-900 dark:text-white">{platform}</span>
                <span className="text-red-700 dark:text-red-300">{risk}</span>
                <span className="text-gray-600 dark:text-gray-300">{pattern}</span>
                <span className="text-gray-600 dark:text-gray-300">{protection}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">Recovery Timeline</h2>
          <div className="space-y-4">
            {timeline.map(([time, action], index) => (
              <div key={time} className={`rounded-2xl border p-5 shadow-sm ${index <= 1 ? 'border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/30' : 'border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900'}`}>
                <div className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-amber-700 dark:text-amber-300" />
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
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">Free Tools to Check Before Paying</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Link href="/upi-id-checker" className="rounded-2xl border border-indigo-200 bg-indigo-50 p-5 hover:bg-indigo-100 dark:border-indigo-900 dark:bg-indigo-950/30 dark:hover:bg-indigo-950/50">
              <BadgeCheck className="h-7 w-7 text-indigo-700 dark:text-indigo-300" />
              <h3 className="mt-4 font-bold text-gray-900 dark:text-white">UPI ID Checker</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Verify any seller UPI ID if they ask you to pay outside checkout.</p>
            </Link>
            <Link href="/website-safety-checker" className="rounded-2xl border border-cyan-200 bg-cyan-50 p-5 hover:bg-cyan-100 dark:border-cyan-900 dark:bg-cyan-950/30 dark:hover:bg-cyan-950/50">
              <ShieldCheck className="h-7 w-7 text-cyan-700 dark:text-cyan-300" />
              <h3 className="mt-4 font-bold text-gray-900 dark:text-white">Website Safety Checker</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Check seller sites, listing URLs and suspicious product pages before payment.</p>
            </Link>
            <Link href="/report-a-scam" className="rounded-2xl border border-red-200 bg-red-50 p-5 hover:bg-red-100 dark:border-red-900 dark:bg-red-950/30 dark:hover:bg-red-950/50">
              <ShieldAlert className="h-7 w-7 text-red-700 dark:text-red-300" />
              <h3 className="mt-4 font-bold text-gray-900 dark:text-white">Report a Scam</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Warn other Indian buyers about the seller profile, UPI ID, phone number or URL.</p>
            </Link>
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">Related E-Commerce Fraud Guides</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {relatedGuides.map((guide) => (
              <Link key={guide.href} href={guide.href} className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:border-cyan-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-cyan-100 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300">
                  <Link2 className="h-4 w-4" />
                </div>
                <h3 className="font-bold text-gray-900 group-hover:text-cyan-700 dark:text-white dark:group-hover:text-cyan-300">{guide.title}</h3>
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
              <h2 className="text-xl font-extrabold text-gray-900 dark:text-white">Safe Marketplace Summary</h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-200">
                Prefer verified sellers, check recent reviews, verify tracking outside the app and keep opening evidence for expensive orders. If the order is wrongly marked delivered, dispute it the same day.
              </p>
            </div>
          </div>
        </section>

        <RelatedTopics currentPath={PAGE_PATH} clusterId="ecommerce-fraud" maxSiblings={4} maxRelated={3} />
      </main>
    </DefaultLayout>
  )
}
