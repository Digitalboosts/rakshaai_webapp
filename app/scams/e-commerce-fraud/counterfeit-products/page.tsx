import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import DefaultLayout from '@/components/DefaultLayout'
import RelatedTopics from '@/components/RelatedTopics'
import ReportScamButton from '@/components/ReportScamButton'
import { breadcrumbListSchema, faqPageSchema, jsonLd, organizationRef, webPageSchema } from '@/lib/seo/schema'
import { AlertTriangle, BadgeCheck, CheckCircle2, PackageSearch, ShieldCheck, ShoppingBag } from 'lucide-react'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://rakshaai.co'
const PAGE_PATH = '/scams/e-commerce-fraud/counterfeit-products'
const CANONICAL = `${SITE_URL}${PAGE_PATH}`
const HERO_IMAGE = '/image/website-safety-check-indian-woman-examining-suspicious-site-rakshaai.jpg'

export const metadata: Metadata = {
  title: 'Counterfeit Products Online India 2026: How to Spot & Get Refund',
  description:
    'Learn how to spot fake products on Amazon, Flipkart, Meesho and social sellers. Check BIS, QR codes, seller authenticity, refund steps and reporting options in India.',
  alternates: { canonical: CANONICAL },
  robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  openGraph: {
    title: 'Counterfeit Products Online India 2026: How to Spot & Get Refund',
    description:
      'A practical India guide to spotting fake electronics, cosmetics, medicines, apparel, jewellery and marketplace sellers before you pay.',
    url: CANONICAL,
    type: 'article',
    siteName: 'RakshaAI',
    locale: 'en_IN',
    images: [
      {
        url: HERO_IMAGE,
        width: 1200,
        height: 800,
        alt: 'Indian shopper checking an online seller before buying a product',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Counterfeit Products Online India 2026',
    description: 'Verify sellers, BIS marks, brand QR codes and platform refund options before buying online.',
    images: [HERO_IMAGE],
  },
  other: {
    'geo.region': 'IN',
    language: 'en-IN',
  },
}

const stats = [
  { value: '9 in 10', label: 'Urban Indians bought counterfeit online at least once, as cited by ASPA/CRISIL 2026' },
  { value: '76%', label: 'Did not realise the product was fake until after purchase or use' },
  { value: '94%', label: 'Marketplace counterfeit risk comes mainly from third-party sellers' },
  { value: 'Rs 1.1L Cr', label: 'Estimated counterfeit product loss across India in 2025' },
]

const riskCategories = [
  ['Electronics and accessories', 'boAt, OnePlus, Samsung, Apple, MI, JBL', 'Very high - battery, charger and performance risk'],
  ['Apparel and footwear', 'Nike, Adidas, Puma, Zara, H&M', 'High - quality failure and financial loss'],
  ['Cosmetics and skincare', "L'Oreal, Lakme, The Ordinary, Nykaa brands", 'Very high - skin burns and toxic ingredients'],
  ['Medicines and supplements', 'Protein powders, vitamins, ayurvedic brands, generics', 'Extreme - ineffective or harmful products'],
  ['Jewellery and gold', 'Tanishq, Malabar, Kalyan style listings', 'Very high - fake BIS hallmark and purity fraud'],
  ['Food and grocery', 'Spices, olive oil, honey, dry fruits', 'High - adulteration and food safety risk'],
]

const mechanisms = [
  {
    title: 'Buy Box hijacking',
    body:
      'A counterfeit seller wins the visible purchase button on a genuine-looking listing by offering a lower price or faster delivery. The listing looks real, but the seller shipping it is not authorised.',
  },
  {
    title: 'Third-party marketplace listings',
    body:
      'Marketplaces allow many sellers to list the same brand. Fraud sellers copy official images, use generic store names, and ship cheap replicas in branded-looking boxes.',
  },
  {
    title: 'Social commerce supplier chains',
    body:
      'Instagram, WhatsApp and reseller channels can label generic products as branded. Buyer protection is weak once payment moves outside a protected platform.',
  },
]

const cases = [
  ['Fake boAt earphones', 'Battery lasts 2 hours instead of the claimed runtime, QR code fails, box looks genuine from a distance.'],
  ['Fake Nike shoes', 'Logo, stitching and label fonts are wrong, but the listing uses copied official product photos and inflated reviews.'],
  ['Fake face cream', 'Batch number does not verify with the brand and the product causes rash or irritation after use.'],
  ['Fake protein supplement', 'Container is underfilled or labelling looks real but nutritional quality is far below the claim.'],
  ['Fake BIS gold chain', 'Hallmark is printed or invalid, HUID cannot be verified, and purity is lower than advertised.'],
  ['Fake fast charger', 'No brand serial number, device overheats, and the charger damages the phone port.'],
]

const redFlags = [
  'The product is 50-90% cheaper than the brand website or authorised retail price.',
  'Seller name is generic, recently created, or not listed as an authorised reseller by the brand.',
  'Packaging has spelling errors, wrong fonts, missing MRP, missing batch number or missing manufacturer address.',
  'Brand QR code, serial number, IMEI, scratch code or warranty check does not verify on the official brand site.',
  'BIS ISI mark, jewellery HUID or licence number is missing, printed strangely or invalid on the BIS portal.',
  'Product feels lighter, smells different, has poor stitching, weak battery life or inconsistent colour and texture.',
  'The same product page has multiple sellers with large price differences and the cheapest seller wins the order.',
  'For medicines, supplements and cosmetics, batch code or expiry details are missing or inconsistent across pack and leaflet.',
]

const verifySteps = [
  {
    title: 'Buy only from authorised sellers',
    body:
      'Before buying a branded product, check the brand website for authorised online sellers. Prefer platform-direct sellers, official brand stores and verified seller badges.',
    link: { href: '/website-safety-checker', label: 'Check seller website' },
  },
  {
    title: 'Scan the brand QR code or authentication tag',
    body:
      'Genuine products often have a unique QR, serial number, IMEI, scratch code or warranty page. If it opens a generic page or fails, treat the product as suspicious.',
  },
  {
    title: 'Verify BIS certification and HUID',
    body:
      'For electronics, electrical goods and jewellery, check the ISI licence number or Hallmark Unique ID on the BIS website. Invalid or absent details are a major warning sign.',
  },
  {
    title: 'Use platform buyer protection filters',
    body:
      'On Amazon, prefer official or brand-registered sellers. On Flipkart, use Flipkart Assured for branded goods. On Meesho, avoid branded electronics or cosmetics from unverified suppliers.',
  },
  {
    title: 'Check seller UPI ID before off-platform payment',
    body:
      'Instagram, WhatsApp and Telegram sellers often ask for direct UPI payment. Search the UPI ID first because reported seller IDs are reused across victims.',
    link: { href: '/upi-id-checker', label: 'Check UPI ID' },
  },
]

const recoverySteps = [
  {
    title: 'Photograph everything immediately',
    body:
      'Keep the product, box, invoice, seller name, listing URL, QR failure screenshot, BIS mismatch and all chat or payment evidence. Do not throw away the packaging.',
  },
  {
    title: 'Raise the platform dispute first',
    body:
      'Use Amazon, Flipkart, Meesho or the relevant app dispute flow within the return window. Select fake, counterfeit, not authentic or item not as described, then upload clear photos.',
  },
  {
    title: 'Report to the brand and consumer helpline',
    body:
      'Send evidence to the brand anti-counterfeit team. Call National Consumer Helpline 1915 or file at consumerhelpline.gov.in if the platform refuses a fair refund.',
  },
  {
    title: 'Escalate dangerous products',
    body:
      'For medicines, cosmetics and food, report to CDSCO or FSSAI. For fake BIS marks or jewellery hallmark issues, report to BIS with the product and seller details.',
  },
  {
    title: 'Report the seller to RakshaAI',
    body:
      'If the seller used a website, phone number or UPI ID, report it so other buyers can find the warning before paying.',
  },
]

const platformGuide = [
  ['Amazon India', 'High', 'Buy Box hijacking and third-party sellers', 'Prefer official seller, brand store and A-to-Z Guarantee dispute.'],
  ['Flipkart', 'Medium-high', 'Marketplace sellers and quality mismatch', 'Use Flipkart Assured and raise return quickly with photos.'],
  ['Meesho', 'High', 'Supplier and reseller chain with limited brand verification', 'Avoid branded cosmetics, electronics and premium goods from unverified sellers.'],
  ['Nykaa', 'Lower', 'Usually brand-direct but still verify new sellers', 'Check batch codes, expiry, seal and brand QR code.'],
  ['Instagram or WhatsApp seller', 'Extreme', 'No platform protection after direct UPI payment', 'Avoid branded products unless seller is independently verified.'],
]

const relatedGuides = [
  {
    title: 'E-Commerce Fraud Hub',
    body: 'Full overview of fake stores, COD fraud, marketplace seller scams and online shopping recovery steps.',
    href: '/scams/e-commerce-fraud',
  },
  {
    title: 'Fake Marketplace Seller Fraud',
    body: 'Use this when a third-party seller on Amazon, Flipkart or Meesho never ships or sends fake tracking.',
    href: '/scams/e-commerce-fraud/fake-marketplace-seller',
  },
  {
    title: 'Fake Websites Guide',
    body: 'Use this when a seller site copies a real brand or offers unrealistic discounts.',
    href: '/scams/fake-websites',
  },
  {
    title: 'COD Fraud',
    body: 'Use this when an unordered cash-on-delivery parcel arrives at your door and asks for a small payment.',
    href: '/scams/e-commerce-fraud/cod-fraud',
  },
  {
    title: 'Advance Payment Trap',
    body: 'Use this when a seller asks for UPI advance or token money before shipping the product.',
    href: '/scams/e-commerce-fraud/advance-payment-trap',
  },
  {
    title: 'How to Check Fake Website India',
    body: 'Domain, contact, payment and trust checks before entering payment details.',
    href: '/blog/how-to-check-fake-website-india',
  },
  {
    title: 'Social Media & WhatsApp Shopping Scam',
    body: 'Useful when fake product sellers operate through Instagram, WhatsApp groups, Facebook Marketplace or Telegram channels.',
    href: '/scams/e-commerce-fraud/social-commerce-scam',
  },
  {
    title: 'Phantom Delivery Scam',
    body: 'Useful when tracking says delivered, but the product never arrived or an empty package was sent.',
    href: '/scams/e-commerce-fraud/phantom-delivery',
  },
]

const FAQ_ITEMS = [
  {
    question: 'What is a counterfeit product?',
    answer:
      'A counterfeit product is a fake item sold under a real brand name, logo or packaging without the brand authorisation. It is designed to make the buyer believe they are receiving a genuine product.',
  },
  {
    question: 'How do I spot a fake product on Amazon India or Flipkart?',
    answer:
      'Check whether the seller is authorised, compare price with the official brand store, inspect packaging details, verify QR or serial number, check BIS or HUID where applicable, and raise a dispute immediately if the product quality does not match.',
  },
  {
    question: 'How can I verify product authenticity in India before buying?',
    answer:
      'Buy from authorised sellers, scan brand authentication QR codes, check warranty or serial number pages, verify BIS certification for regulated goods, and avoid direct UPI payment to unknown social sellers.',
  },
  {
    question: 'What should I do if I receive a counterfeit product?',
    answer:
      'Photograph the product and packaging, raise a platform dispute inside the return window, report to the brand anti-counterfeit team, call National Consumer Helpline 1915 if needed, and preserve evidence for consumer forum or police complaint.',
  },
  {
    question: 'Can I get a refund for a fake product bought online?',
    answer:
      'Refund chances are strongest when you report inside the platform return window with photos and clear evidence. If the platform refuses, escalate through National Consumer Helpline 1915 and consumerhelpline.gov.in.',
  },
  {
    question: 'Are fake medicines and cosmetics different from ordinary counterfeit products?',
    answer:
      'Yes. Fake medicines, supplements, cosmetics and food can create health risk. Preserve the product, seek medical help for any reaction, report to CDSCO or FSSAI, and also raise a platform and consumer complaint.',
  },
  {
    question: 'How do I check BIS certification for products in India?',
    answer:
      'Find the ISI licence number or Hallmark Unique ID on the product, then verify it on the Bureau of Indian Standards portal. If the licence is invalid, absent or belongs to a different product, do not use the item.',
  },
  {
    question: 'Should I buy branded products from Instagram or WhatsApp sellers?',
    answer:
      'Avoid direct-purchase branded products from social sellers unless you can independently verify the seller, invoice, return policy and payment protection. Direct UPI payment usually leaves you with very limited recovery options.',
  },
]

const schemas = [
  webPageSchema({
    name: 'Counterfeit Products Online India 2026: How to Spot & Get Refund',
    description: metadata.description as string,
    url: PAGE_PATH,
  }),
  breadcrumbListSchema([
    { name: 'Home', url: '/' },
    { name: 'Scams', url: '/scams' },
    { name: 'E-Commerce Fraud', url: '/scams/e-commerce-fraud' },
    { name: 'Counterfeit Products', url: PAGE_PATH },
  ]),
  faqPageSchema(FAQ_ITEMS),
  {
    '@context': 'https://schema.org' as const,
    '@type': 'Article',
    headline: 'Counterfeit Products Online India 2026',
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
      'counterfeit products online india',
      'fake products amazon india',
      'fake products flipkart india',
      'bis certification check india',
      'meesho fake products india',
    ],
  },
  {
    '@context': 'https://schema.org' as const,
    '@type': 'DefinedTerm',
    name: 'Counterfeit product',
    description:
      'A counterfeit product is a fake item sold with a real brand name, logo or packaging without the brand authorisation, intended to deceive the buyer into believing the item is genuine.',
    url: CANONICAL,
  },
  {
    '@context': 'https://schema.org' as const,
    '@type': 'HowTo',
    name: 'How to verify product authenticity in India',
    description: 'Five checks to verify a product before buying online in India.',
    step: verifySteps.map((step) => ({
      '@type': 'HowToStep',
      name: step.title,
      text: step.body,
    })),
  },
]

export default function CounterfeitProductsPage() {
  return (
    <DefaultLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schemas) }} />

      <section className="bg-gradient-to-br from-cyan-50 via-white to-orange-50 px-4 py-16 dark:from-gray-950 dark:via-gray-900 dark:to-cyan-950">
        <div className="mx-auto max-w-5xl">
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            <Link href="/">Home</Link><span aria-hidden="true">/</span>
            <Link href="/scams">Scams</Link><span aria-hidden="true">/</span>
            <Link href="/scams/e-commerce-fraud">E-Commerce Fraud</Link><span aria-hidden="true">/</span>
            <span className="font-medium text-gray-700 dark:text-gray-300">Counterfeit Products</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-100 px-4 py-1.5 text-xs font-semibold text-cyan-800 dark:border-cyan-800 dark:bg-cyan-900/40 dark:text-cyan-300">
                <PackageSearch className="h-4 w-4" />
                E-Commerce Fraud Guide
              </div>
              <h1 className="mb-5 text-4xl font-extrabold leading-tight text-gray-900 dark:text-white md:text-5xl">
                Counterfeit Products Online India 2026
              </h1>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                Fake products on Amazon, Flipkart, Meesho and social sellers can look genuine until
                you check the seller, brand QR code, BIS mark, packaging details and refund route.
                This guide shows the exact checks to do before and after delivery.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/website-safety-checker" className="rounded-xl bg-cyan-700 px-5 py-3 text-sm font-bold text-white shadow hover:bg-cyan-800">
                  Check Seller Website
                </Link>
                <Link href="/upi-id-checker" className="rounded-xl border border-cyan-200 bg-white px-5 py-3 text-sm font-bold text-cyan-800 shadow-sm hover:bg-cyan-50 dark:border-cyan-800 dark:bg-gray-900 dark:text-cyan-300">
                  Check Seller UPI ID
                </Link>
              </div>
            </div>
            <figure className="overflow-hidden rounded-2xl border border-cyan-200 bg-white shadow-lg dark:border-cyan-900 dark:bg-gray-900">
              <Image
                src={HERO_IMAGE}
                alt="Indian shopper checking an online seller before buying a product"
                width={1200}
                height={800}
                className="h-auto w-full object-cover"
                priority
              />
              <figcaption className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400">
                Always verify the seller and product authenticity before paying for branded goods.
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

      <div className="bg-orange-600 px-4 py-4 text-white dark:bg-orange-700">
        <div className="mx-auto max-w-5xl text-sm font-medium">
          <strong>Quick rule:</strong> a real brand discount still leaves a verifiable seller, valid warranty, authentic QR code and legal packaging details.
        </div>
      </div>

      <main className="mx-auto max-w-5xl space-y-16 px-4 py-14 sm:px-6 lg:px-8">
        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">What Is a Counterfeit Product?</h2>
          <div className="grid gap-8 lg:grid-cols-[1fr_340px] lg:items-start">
            <div className="rounded-2xl border-2 border-cyan-300 bg-cyan-50 p-6 dark:border-cyan-800 dark:bg-cyan-950/30">
              <p className="text-xl font-extrabold text-cyan-900 dark:text-cyan-200">
                A counterfeit product is a fake item sold under a real brand name.
              </p>
              <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-200">
                It may copy the logo, box, label, warranty card and online listing images. The goal is
                to make you believe you are buying a genuine product while the seller ships a cheap,
                unsafe or low-quality replica.
              </p>
              <div className="mt-5 rounded-xl bg-white p-4 text-sm text-gray-700 dark:bg-gray-900 dark:text-gray-300">
                <p className="font-bold text-gray-900 dark:text-white">Why visual checking is not enough</p>
                <p className="mt-1">
                  Modern fakes copy packaging very closely. Use brand QR checks, serial numbers,
                  BIS verification and authorised-seller checks instead of trusting photos alone.
                </p>
              </div>
            </div>
            <figure className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <Image
                src="/blog/how-to-check-fake-website-india/website-safety-checklist-india.webp"
                alt="Checklist to verify a shopping website and seller before buying online"
                width={1600}
                height={900}
                className="h-auto w-full object-cover"
              />
              <figcaption className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400">
                Seller verification is the first filter before product authentication.
              </figcaption>
            </figure>
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">6 Highest-Risk Fake Product Categories</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-800">
            <table className="w-full text-sm">
              <thead className="bg-cyan-50 dark:bg-cyan-950/30">
                <tr>
                  <th className="px-4 py-3 text-left font-bold text-gray-900 dark:text-white">Category</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-900 dark:text-white">Common Brand Targets</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-900 dark:text-white">Risk</th>
                </tr>
              </thead>
              <tbody>
                {riskCategories.map(([category, brands, risk], index) => (
                  <tr key={category} className={index % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800'}>
                    <td className="border-t border-gray-100 px-4 py-3 font-semibold text-cyan-700 dark:border-gray-700 dark:text-cyan-300">{category}</td>
                    <td className="border-t border-gray-100 px-4 py-3 text-gray-600 dark:border-gray-700 dark:text-gray-300">{brands}</td>
                    <td className="border-t border-gray-100 px-4 py-3 text-gray-600 dark:border-gray-700 dark:text-gray-300">{risk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">How Fake Products Reach Your Door</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {mechanisms.map((item, index) => (
              <div key={item.title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-700 text-sm font-bold text-white">{index + 1}</span>
                <h3 className="mt-4 text-base font-bold text-gray-900 dark:text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">Real India Counterfeit Product Patterns</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {cases.map(([title, body]) => (
              <div key={title} className="rounded-2xl border border-orange-100 bg-orange-50 p-5 dark:border-orange-900 dark:bg-orange-950/30">
                <div className="flex items-start gap-3">
                  <ShoppingBag className="mt-1 h-5 w-5 flex-shrink-0 text-orange-600 dark:text-orange-300" />
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
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">8 Warning Signs of a Counterfeit Product</h2>
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
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">5 Steps to Authenticate Any Product Before Buying</h2>
          <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-start">
            <div className="space-y-4">
              {verifySteps.map((step, index) => (
                <div key={step.title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                  <span className="text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-300">Step {index + 1}</span>
                  <h3 className="mt-2 text-base font-bold text-gray-900 dark:text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{step.body}</p>
                  {step.link && (
                    <Link href={step.link.href} className="mt-3 inline-flex text-sm font-semibold text-cyan-700 hover:underline dark:text-cyan-300">
                      {step.link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <figure className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <Image
                src="/blog/how-to-check-fake-website-india/real-vs-fake-url-india.webp"
                alt="Real vs fake URL comparison for online shopping websites in India"
                width={1600}
                height={900}
                className="h-auto w-full object-cover"
              />
              <figcaption className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400">
                Fake product sellers often use cloned domains, copied product pages and direct UPI payment requests.
              </figcaption>
            </figure>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-extrabold text-gray-900 dark:text-white">What to Do If You Received a Fake Product</h2>
          <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-300">
            Act inside the return window first. Platform refunds are usually faster than legal escalation,
            but preserve evidence in case the platform or seller rejects the claim.
          </p>
          <div className="space-y-4">
            {recoverySteps.map((step, index) => (
              <div key={step.title} className={`rounded-2xl border p-5 shadow-sm ${index <= 1 ? 'border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950/30' : 'border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900'}`}>
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
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">Platform-Specific Counterfeit Risk Guide</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-800">
            <table className="w-full text-sm">
              <thead className="bg-gray-900 text-white dark:bg-gray-800">
                <tr>
                  <th className="px-4 py-3 text-left font-bold">Platform</th>
                  <th className="px-4 py-3 text-left font-bold">Risk</th>
                  <th className="px-4 py-3 text-left font-bold">Main Source</th>
                  <th className="px-4 py-3 text-left font-bold">Best Protection</th>
                </tr>
              </thead>
              <tbody>
                {platformGuide.map(([platform, risk, source, protection], index) => (
                  <tr key={platform} className={index % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800'}>
                    <td className="border-t border-gray-100 px-4 py-3 font-semibold text-gray-900 dark:border-gray-700 dark:text-white">{platform}</td>
                    <td className="border-t border-gray-100 px-4 py-3 font-bold text-orange-600 dark:border-gray-700 dark:text-orange-300">{risk}</td>
                    <td className="border-t border-gray-100 px-4 py-3 text-gray-600 dark:border-gray-700 dark:text-gray-300">{source}</td>
                    <td className="border-t border-gray-100 px-4 py-3 text-gray-600 dark:border-gray-700 dark:text-gray-300">{protection}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">Free Tools to Verify Before You Buy</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Link href="/website-safety-checker" className="rounded-2xl border border-cyan-200 bg-cyan-50 p-5 hover:bg-cyan-100 dark:border-cyan-900 dark:bg-cyan-950/30 dark:hover:bg-cyan-950/50">
              <ShieldCheck className="h-7 w-7 text-cyan-700 dark:text-cyan-300" />
              <h3 className="mt-4 font-bold text-gray-900 dark:text-white">Website Safety Checker</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Check a seller domain or product page before entering payment details.</p>
            </Link>
            <Link href="/upi-id-checker" className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 hover:bg-emerald-100 dark:border-emerald-900 dark:bg-emerald-950/30 dark:hover:bg-emerald-950/50">
              <BadgeCheck className="h-7 w-7 text-emerald-700 dark:text-emerald-300" />
              <h3 className="mt-4 font-bold text-gray-900 dark:text-white">UPI ID Checker</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Verify seller UPI ID before paying outside Amazon, Flipkart or Meesho.</p>
            </Link>
            <div className="rounded-2xl border border-red-200 bg-red-50 p-5 dark:border-red-900 dark:bg-red-950/30">
              <AlertTriangle className="h-7 w-7 text-red-700 dark:text-red-300" />
              <h3 className="mt-4 font-bold text-gray-900 dark:text-white">Report a Scam</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Report the seller, phone number, UPI ID or website to help warn other buyers.</p>
              <ReportScamButton className="mt-4 text-sm font-semibold text-red-700 hover:underline dark:text-red-300">
                Open report form
              </ReportScamButton>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">Related E-Commerce Fraud Guides</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {relatedGuides.map((guide) => (
              <Link key={guide.href} href={guide.href} className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:border-cyan-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
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
              <h2 className="text-xl font-extrabold text-gray-900 dark:text-white">Safe Buying Summary</h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-200">
                Verify the seller before payment, verify the product after delivery, and raise the
                dispute while the return window is open. If a product affects health, safety or money,
                escalate to the right regulator and keep the evidence.
              </p>
            </div>
          </div>
        </section>

        <RelatedTopics currentPath={PAGE_PATH} clusterId="ecommerce-fraud" maxSiblings={4} maxRelated={3} />
      </main>
    </DefaultLayout>
  )
}
