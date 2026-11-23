import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import DefaultLayout from '@/components/DefaultLayout'
import RelatedTopics from '@/components/RelatedTopics'
import ReportScamButton from '@/components/ReportScamButton'
import { breadcrumbListSchema, faqPageSchema, jsonLd, organizationRef, webPageSchema } from '@/lib/seo/schema'
import { BadgeCheck, CheckCircle2, Link2, MessageCircle, Phone, ShieldCheck, ShoppingBag, Video } from 'lucide-react'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://rakshaai.co'
const PAGE_PATH = '/scams/e-commerce-fraud/social-commerce-scam'
const CANONICAL = `${SITE_URL}${PAGE_PATH}`
const HERO_IMAGE = '/blog/whatsapp-scam-india/whatsapp-scam-hero.webp'

export const metadata: Metadata = {
  title: 'Social Media & WhatsApp Shopping Scams India 2026: Spot & Report',
  description:
    'Fake Instagram sellers, WhatsApp shopping groups and AI deepfake product ads target Indian buyers. Verify sellers, UPI IDs, phone numbers, websites and report fraud.',
  alternates: { canonical: CANONICAL },
  robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  openGraph: {
    title: 'Social Media & WhatsApp Shopping Scams India 2026: Spot & Report',
    description:
      'A practical India guide to fake Instagram sellers, WhatsApp group shopping fraud, Facebook Marketplace deposits and AI deepfake product ads.',
    url: CANONICAL,
    type: 'article',
    siteName: 'RakshaAI',
    locale: 'en_IN',
    images: [
      {
        url: HERO_IMAGE,
        width: 1200,
        height: 800,
        alt: 'WhatsApp and social media scam warning for Indian shoppers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Media & WhatsApp Shopping Scams India 2026',
    description: 'Never pay a social media seller by direct UPI until you verify the account, number and seller identity.',
    images: [HERO_IMAGE],
  },
  other: {
    'geo.region': 'IN',
    language: 'en-IN',
  },
}

const stats = [
  { value: '31%', label: 'E-commerce fraud complaints linked to social media shopping channels' },
  { value: 'Rs 14,800', label: 'Average loss pattern in social commerce fraud complaints' },
  { value: '+340%', label: 'Growth cited for AI deepfake shopping ad complaints from 2024 to 2026' },
  { value: 'Instagram', label: 'Most reported social commerce fraud platform in the source brief' },
]

const scamTypes = [
  {
    title: 'Fake Instagram seller pages',
    body:
      'The page has polished reels, stolen product photos, purchased followers and fake testimonial highlights. Orders are taken in DMs and payment is pushed to personal UPI.',
  },
  {
    title: 'WhatsApp group shopping fraud',
    body:
      'Admins post limited-time product deals while planted members share fake delivery confirmations. Once buyers pay, the group disappears or the admin blocks them.',
  },
  {
    title: 'Facebook Marketplace deposit scam',
    body:
      'High-value items are listed below market price. The seller asks for a reservation fee, shipping deposit or advance UPI payment before vanishing.',
  },
  {
    title: 'AI deepfake shopping ads',
    body:
      'A fake video appears to show a celebrity endorsing skincare, supplements, gadgets or fashion. The ad sends victims to a fake store or direct payment flow.',
  },
  {
    title: 'Telegram and YouTube deal channels',
    body:
      'Anonymous channels post bulk discounts, fake unboxing videos and review links. Payment is collected by admin or bot, with no real buyer protection.',
  },
]

const cases = [
  ['Instagram saree seller', 'A polished seller account takes UPI payment for premium sarees, sends a fake tracking link, then renames or deletes the account.'],
  ['WhatsApp iPhone deal group', 'A group admin posts a deeply discounted phone offer while planted accounts claim delivery. Buyers pay advance UPI and receive nothing.'],
  ['Facebook laptop deposit', 'The seller asks for a small deposit to hold the item, then increases the price or blocks the buyer after payment.'],
  ['AI deepfake skincare ad', 'A fake celebrity endorsement routes buyers to a new store. The product arrives as a cheap imitation or does not arrive.'],
  ['Telegram electronics channel', 'A large subscriber count creates trust. The channel collects bulk order advances and is deleted within days.'],
  ['YouTube fake review link', 'A review video links to a fraudulent store that copies product pages and collects payment outside protected checkout.'],
]

const redFlags = [
  'The seller accepts only direct UPI payment and refuses platform-protected checkout or payment gateway invoice.',
  'The account is recent, renamed often, or has a large follower count with very low likes and comments.',
  'Product photos appear on other sites when checked with Google Lens or reverse image search.',
  'The seller refuses to show a 30-second live video of the exact item you want to buy.',
  'Customer testimonials are only screenshots, all posted within a few days, or cannot be traced to real profiles.',
  'A celebrity endorsement appears only as a paid ad and has no mention on the celebrity or brand official pages.',
  'The offer uses extreme urgency like last few pieces, sale ends now, pay in five minutes or price will change.',
  'The seller profile has no registered business details, return policy, address, GST details or working support channel.',
]

const sellerChecks = [
  {
    title: 'Check account age and name history',
    body:
      'On Instagram, use About this account. A new account, frequent name changes or sudden follower growth is a high-risk signal.',
  },
  {
    title: 'Check engagement quality',
    body:
      'A page with many followers but almost no comments or likes may be using purchased followers. Real sellers usually have consistent engagement over time.',
  },
  {
    title: 'Run reverse image search',
    body:
      'Use Google Lens on every product image. If the same photo appears on wholesale sites or under many brand names, the seller is probably copying images.',
  },
  {
    title: 'Ask for a live product video',
    body:
      'Ask the seller to show the exact item, packaging and current date on a short live video. Scammers using stock photos usually avoid this.',
  },
  {
    title: 'Verify UPI ID and phone number',
    body:
      'Search the seller UPI ID and WhatsApp number before payment. Repeat scammer IDs and numbers are often reported by earlier victims.',
  },
]

const deepfakeChecks = [
  'Mouth movement does not perfectly match the audio.',
  'Hair, clothing edges or background blur look unstable.',
  'No trusted news source or official brand page confirms the endorsement.',
  'The ad sends you to a new or unknown domain instead of the brand official site.',
  'The product promises extreme results that legitimate brands would not claim.',
]

const recoverySteps = [
  {
    title: 'Call 1930 quickly for UPI payments',
    body:
      'If you paid by UPI, call 1930 immediately with the UPI ID, amount, time, seller handle, phone number and chat screenshots.',
  },
  {
    title: 'Preserve evidence before the account disappears',
    body:
      'Screenshot the profile, posts, DMs, WhatsApp group, payment receipt, product listing, tracking link and any fake product received.',
  },
  {
    title: 'File on cybercrime.gov.in',
    body:
      'Choose online shopping fraud or financial cyber fraud where applicable. Attach payment proof, seller identity, platform URL and full chat evidence.',
  },
  {
    title: 'Report the account to the platform',
    body:
      'Report Instagram and Facebook accounts to Meta as scam or fraud. Report WhatsApp numbers in-app, and Telegram channels through Telegram reporting.',
  },
  {
    title: 'Escalate consumer and payment complaints',
    body:
      'Call National Consumer Helpline 1915. If you paid by card or payment gateway, ask your bank for a goods-not-delivered chargeback.',
  },
  {
    title: 'Report the seller to RakshaAI',
    body:
      'Report the seller phone number, UPI ID, website and handle so other Indian buyers can search and find the warning before paying.',
  },
]

const platformGuide = [
  ['Instagram', 'Highest', 'Fake seller pages, AI ads and DM-based UPI collection', 'Use official shop checkout where available, check account age and avoid direct UPI.'],
  ['WhatsApp', 'Very high', 'Shopping groups, viral deal forwards and admin payment collection', 'Do not pay group admins you do not personally know. Verify UPI ID and phone number.'],
  ['Facebook Marketplace', 'High', 'Deposit requests for electronics, vehicles and furniture', 'Meet in person for high-value items and never pay a deposit before seeing the item.'],
  ['Telegram', 'High', 'Anonymous deal channels and bulk order traps', 'Avoid paying anonymous admins or bots. There is almost no buyer protection.'],
  ['YouTube', 'Medium-high', 'Fake reviews, unboxing videos and deepfake endorsement links', 'Check destination URLs before clicking or paying.'],
]

const relatedGuides = [
  {
    title: 'Fake Shopping Website Fraud',
    body: 'Use this when a social ad or message sends you to a standalone copycat store with its own checkout.',
    href: '/scams/e-commerce-fraud/fake-online-stores',
  },
  {
    title: 'E-Commerce Fraud Hub',
    body: 'The parent guide for fake stores, marketplace fraud, COD traps and shopping recovery steps.',
    href: '/scams/e-commerce-fraud',
  },
  {
    title: 'Fake Marketplace Seller Fraud',
    body: 'Use this when a seller operates through Amazon, Flipkart, Meesho or a marketplace listing.',
    href: '/scams/e-commerce-fraud/fake-marketplace-seller',
  },
  {
    title: 'Counterfeit Products Online',
    body: 'Social sellers often deliver counterfeit products instead of genuine branded goods.',
    href: '/scams/e-commerce-fraud/counterfeit-products',
  },
  {
    title: 'COD Fraud',
    body: 'Use this when a social seller sends an unordered COD parcel, junk package or doorstep payment trap.',
    href: '/scams/e-commerce-fraud/cod-fraud',
  },
  {
    title: 'Advance Payment Trap',
    body: 'Use this when a social seller asks for full UPI advance, token money or deposit outside checkout.',
    href: '/scams/e-commerce-fraud/advance-payment-trap',
  },
  {
    title: 'Phantom Delivery Scam',
    body: 'Use this when a social seller or marketplace order is marked delivered, but the package never reaches you.',
    href: '/scams/e-commerce-fraud/phantom-delivery',
  },
  {
    title: 'Fake UPI Payment Link',
    body: 'Some sellers send payment links or phishing pages instead of normal checkout.',
    href: '/scams/upi-fraud/fake-upi-link',
  },
  {
    title: 'Phishing Scams',
    body: 'Deepfake ads and social shopping links can route buyers to phishing pages.',
    href: '/scams/phishing',
  },
]

const FAQ_ITEMS = [
  {
    question: 'How do social media shopping scams work in India?',
    answer:
      'A fake seller page, WhatsApp group or marketplace listing offers products at a discount, takes orders through DMs or chat, asks for direct UPI payment, and then does not deliver, sends a cheap imitation or blocks the buyer.',
  },
  {
    question: 'How do I identify a fake Instagram seller?',
    answer:
      'Check account age, name history, engagement rate, reverse image search product photos, ask for a live video of the exact product, verify the UPI ID and phone number, and avoid sellers who force direct UPI payment.',
  },
  {
    question: 'What is an AI deepfake shopping scam?',
    answer:
      'It is a fake ad where AI-generated video appears to show a real celebrity endorsing a product. Victims trust the endorsement, click the ad, and are sent to a fake store or payment flow.',
  },
  {
    question: 'Why is direct UPI payment risky for social media shopping?',
    answer:
      'Direct UPI to a social seller is usually a peer-to-peer transfer. It does not carry the same buyer protection as platform checkout, marketplace dispute systems or card chargeback routes.',
  },
  {
    question: 'What should I do if an Instagram seller blocked me after payment?',
    answer:
      'Call 1930 if the payment was recent, screenshot the profile and chats, file at cybercrime.gov.in, report the account to Meta, call National Consumer Helpline 1915, and report the UPI ID and phone number on RakshaAI.',
  },
  {
    question: 'How do WhatsApp group shopping scams work?',
    answer:
      'A group admin posts urgent deals while planted accounts share fake delivery confirmations. Buyers pay through UPI and then the group is deleted, the admin blocks them or a worthless product arrives.',
  },
  {
    question: 'Are Facebook Marketplace scams common in India?',
    answer:
      'Yes. Common patterns include deposits to hold electronics, furniture or vehicles, fake overpayment screenshots, and sellers who refuse in-person inspection before advance payment.',
  },
  {
    question: 'Can I get a refund after social media shopping fraud?',
    answer:
      'Recovery is harder for direct UPI payments, but quick reporting improves the chance of freezing funds. Card or payment gateway payments may allow chargeback if you have strong evidence of non-delivery.',
  },
]

const schemas = [
  webPageSchema({
    name: 'Social Media & WhatsApp Shopping Scams India 2026: Spot & Report',
    description: metadata.description as string,
    url: PAGE_PATH,
  }),
  breadcrumbListSchema([
    { name: 'Home', url: '/' },
    { name: 'Scams', url: '/scams' },
    { name: 'E-Commerce Fraud', url: '/scams/e-commerce-fraud' },
    { name: 'Social Commerce Scam', url: PAGE_PATH },
  ]),
  faqPageSchema(FAQ_ITEMS),
  {
    '@context': 'https://schema.org' as const,
    '@type': 'Article',
    headline: 'Social Media & WhatsApp Shopping Scams India 2026',
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
      'social media shopping scam india',
      'instagram shopping scam india',
      'whatsapp group shopping fraud india',
      'ai deepfake shopping scam india',
      'facebook marketplace scam india',
    ],
  },
  {
    '@context': 'https://schema.org' as const,
    '@type': 'HowTo',
    name: 'How to verify Instagram seller before paying',
    description: 'Five checks to verify a social media seller before sending payment.',
    step: sellerChecks.map((step) => ({
      '@type': 'HowToStep',
      name: step.title,
      text: step.body,
    })),
  },
]

export default function SocialCommerceScamPage() {
  return (
    <DefaultLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schemas) }} />

      <section className="bg-gradient-to-br from-pink-50 via-white to-cyan-50 px-4 py-16 dark:from-gray-950 dark:via-gray-900 dark:to-pink-950">
        <div className="mx-auto max-w-5xl">
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            <Link href="/">Home</Link><span aria-hidden="true">/</span>
            <Link href="/scams">Scams</Link><span aria-hidden="true">/</span>
            <Link href="/scams/e-commerce-fraud">E-Commerce Fraud</Link><span aria-hidden="true">/</span>
            <span className="font-medium text-gray-700 dark:text-gray-300">Social Commerce Scam</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-100 px-4 py-1.5 text-xs font-semibold text-pink-800 dark:border-pink-800 dark:bg-pink-900/40 dark:text-pink-300">
                <MessageCircle className="h-4 w-4" />
                E-Commerce Fraud Guide
              </div>
              <h1 className="mb-5 text-4xl font-extrabold leading-tight text-gray-900 dark:text-white md:text-5xl">
                Social Media &amp; WhatsApp Shopping Scams India 2026
              </h1>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                Fake Instagram sellers, WhatsApp shopping groups, Facebook Marketplace listings,
                Telegram deal channels and AI deepfake ads collect direct payments, then disappear
                or deliver worthless products.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/upi-id-checker" className="rounded-xl bg-pink-600 px-5 py-3 text-sm font-bold text-white shadow hover:bg-pink-700">
                  Check Seller UPI ID
                </Link>
                <Link href="/phone-number-checker" className="rounded-xl border border-pink-200 bg-white px-5 py-3 text-sm font-bold text-pink-800 shadow-sm hover:bg-pink-50 dark:border-pink-800 dark:bg-gray-900 dark:text-pink-300">
                  Check Seller Number
                </Link>
              </div>
            </div>
            <figure className="overflow-hidden rounded-2xl border border-pink-200 bg-white shadow-lg dark:border-pink-900 dark:bg-gray-900">
              <Image
                src={HERO_IMAGE}
                alt="WhatsApp and social media scam warning for Indian shoppers"
                width={1200}
                height={800}
                className="h-auto w-full object-cover"
                priority
              />
              <figcaption className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400">
                Direct UPI payment to a social media seller removes most buyer protection.
              </figcaption>
            </figure>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-pink-100 bg-white p-4 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <div className="text-2xl font-extrabold text-pink-700 dark:text-pink-300">{stat.value}</div>
                <p className="mt-2 text-xs leading-relaxed text-gray-500 dark:text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-pink-700 px-4 py-4 text-white dark:bg-pink-800">
        <div className="mx-auto max-w-5xl text-sm font-medium">
          <strong>One rule:</strong> never pay a social media seller by direct UPI unless the seller, number, UPI ID and product are verified.
        </div>
      </div>

      <main className="mx-auto max-w-5xl space-y-16 px-4 py-14 sm:px-6 lg:px-8">
        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">Why Direct UPI Payment Is the Main Trap</h2>
          <div className="grid gap-8 lg:grid-cols-[1fr_340px] lg:items-start">
            <div className="rounded-2xl border-2 border-pink-300 bg-pink-50 p-6 dark:border-pink-800 dark:bg-pink-950/30">
              <p className="text-xl font-extrabold text-pink-900 dark:text-pink-200">
                Platform checkout creates a dispute trail. Direct UPI usually does not.
              </p>
              <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-200">
                When you pay inside Amazon, Flipkart or a protected checkout, there is an order ID,
                refund route and platform complaint flow. When you pay a stranger UPI ID from an
                Instagram DM or WhatsApp group, recovery depends on quick fraud reporting and evidence.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href="/upi-id-checker" className="rounded-lg bg-pink-600 px-4 py-2 text-sm font-bold text-white hover:bg-pink-700">
                  Verify UPI ID
                </Link>
                <Link href="/website-safety-checker" className="rounded-lg border border-pink-200 bg-white px-4 py-2 text-sm font-bold text-pink-800 hover:bg-pink-50 dark:border-pink-800 dark:bg-gray-900 dark:text-pink-300">
                  Check Seller Site
                </Link>
              </div>
            </div>
            <figure className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <Image
                src="/blog/whatsapp-scam-india/whatsapp-suspicious-link-steps.webp"
                alt="Steps to check suspicious WhatsApp shopping links before payment"
                width={1600}
                height={900}
                className="h-auto w-full object-cover"
              />
              <figcaption className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400">
                Check links, numbers and UPI IDs before paying outside a known platform.
              </figcaption>
            </figure>
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">5 Social Commerce Fraud Types Active in India</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {scamTypes.map((item, index) => (
              <div key={item.title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-600 text-sm font-bold text-white">{index + 1}</span>
                <h3 className="mt-4 text-base font-bold text-gray-900 dark:text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">Real India Social Commerce Fraud Patterns</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {cases.map(([title, body]) => (
              <div key={title} className="rounded-2xl border border-cyan-100 bg-cyan-50 p-5 dark:border-cyan-900 dark:bg-cyan-950/30">
                <div className="flex items-start gap-3">
                  <ShoppingBag className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-700 dark:text-cyan-300" />
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
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">8 Warning Signs of a Fake Social Media Seller</h2>
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
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">How to Verify an Instagram or WhatsApp Seller in 2 Minutes</h2>
          <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-start">
            <div className="space-y-4">
              {sellerChecks.map((step, index) => (
                <div key={step.title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                  <span className="text-xs font-bold uppercase tracking-widest text-pink-700 dark:text-pink-300">Check {index + 1}</span>
                  <h3 className="mt-2 text-base font-bold text-gray-900 dark:text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{step.body}</p>
                </div>
              ))}
            </div>
            <figure className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <Image
                src="/blog/how-to-check-phone-number-scam-india/rakshaai-checker-steps.jpg"
                alt="RakshaAI checker steps to verify a suspicious seller phone number"
                width={1200}
                height={800}
                className="h-auto w-full object-cover"
              />
              <figcaption className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400">
                Repeat scam seller numbers and UPI IDs are often reused across victims.
              </figcaption>
            </figure>
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">5 Checks for AI Deepfake Shopping Ads</h2>
          <div className="rounded-2xl border border-violet-200 bg-violet-50 p-6 dark:border-violet-900 dark:bg-violet-950/30">
            <div className="mb-5 flex items-center gap-3">
              <Video className="h-7 w-7 text-violet-700 dark:text-violet-300" />
              <p className="font-bold text-gray-900 dark:text-white">Do not trust a celebrity product ad until you verify the endorsement and destination URL.</p>
            </div>
            <ol className="space-y-4">
              {deepfakeChecks.map((check, index) => (
                <li key={check} className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-violet-600 text-xs font-bold text-white">{index + 1}</span>
                  <span className="text-sm leading-relaxed text-gray-700 dark:text-gray-200">{check}</span>
                </li>
              ))}
            </ol>
            <Link href="/website-safety-checker" className="mt-5 inline-flex rounded-lg bg-violet-600 px-4 py-2 text-sm font-bold text-white hover:bg-violet-700">
              Check Ad Destination URL
            </Link>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-extrabold text-gray-900 dark:text-white">What to Do If You Were Scammed by a Social Media Seller</h2>
          <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-300">
            Social commerce fraud moves fast. Preserve evidence first, then report the payment and platform account before it disappears.
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
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">Platform-by-Platform Risk Guide</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-800">
            <table className="w-full text-sm">
              <thead className="bg-gray-900 text-white dark:bg-gray-800">
                <tr>
                  <th className="px-4 py-3 text-left font-bold">Platform</th>
                  <th className="px-4 py-3 text-left font-bold">Risk</th>
                  <th className="px-4 py-3 text-left font-bold">Main Fraud Type</th>
                  <th className="px-4 py-3 text-left font-bold">Best Protection</th>
                </tr>
              </thead>
              <tbody>
                {platformGuide.map(([platform, risk, source, protection], index) => (
                  <tr key={platform} className={index % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800'}>
                    <td className="border-t border-gray-100 px-4 py-3 font-semibold text-gray-900 dark:border-gray-700 dark:text-white">{platform}</td>
                    <td className="border-t border-gray-100 px-4 py-3 font-bold text-pink-600 dark:border-gray-700 dark:text-pink-300">{risk}</td>
                    <td className="border-t border-gray-100 px-4 py-3 text-gray-600 dark:border-gray-700 dark:text-gray-300">{source}</td>
                    <td className="border-t border-gray-100 px-4 py-3 text-gray-600 dark:border-gray-700 dark:text-gray-300">{protection}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">Free Tools to Verify Before You Pay</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Link href="/upi-id-checker" className="rounded-2xl border border-pink-200 bg-pink-50 p-5 hover:bg-pink-100 dark:border-pink-900 dark:bg-pink-950/30 dark:hover:bg-pink-950/50">
              <BadgeCheck className="h-7 w-7 text-pink-700 dark:text-pink-300" />
              <h3 className="mt-4 font-bold text-gray-900 dark:text-white">UPI ID Checker</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Verify any social seller UPI ID before direct payment.</p>
            </Link>
            <Link href="/phone-number-checker" className="rounded-2xl border border-cyan-200 bg-cyan-50 p-5 hover:bg-cyan-100 dark:border-cyan-900 dark:bg-cyan-950/30 dark:hover:bg-cyan-950/50">
              <Phone className="h-7 w-7 text-cyan-700 dark:text-cyan-300" />
              <h3 className="mt-4 font-bold text-gray-900 dark:text-white">Phone Number Checker</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Check WhatsApp numbers used by unknown sellers or group admins.</p>
            </Link>
            <Link href="/website-safety-checker" className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 hover:bg-emerald-100 dark:border-emerald-900 dark:bg-emerald-950/30 dark:hover:bg-emerald-950/50">
              <ShieldCheck className="h-7 w-7 text-emerald-700 dark:text-emerald-300" />
              <h3 className="mt-4 font-bold text-gray-900 dark:text-white">Website Safety Checker</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Check any URL from an Instagram, YouTube or WhatsApp ad.</p>
            </Link>
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">Related Guides</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {relatedGuides.map((guide) => (
              <Link key={guide.href} href={guide.href} className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:border-pink-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-pink-100 text-pink-700 dark:bg-pink-950 dark:text-pink-300">
                  <Link2 className="h-4 w-4" />
                </div>
                <h3 className="font-bold text-gray-900 group-hover:text-pink-700 dark:text-white dark:group-hover:text-pink-300">{guide.title}</h3>
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
              <h2 className="text-xl font-extrabold text-gray-900 dark:text-white">Safe Shopping Summary</h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-200">
                Use official checkout whenever possible. If a social media seller insists on direct UPI,
                verify the UPI ID, number, account age, product images and destination URL before you pay.
              </p>
            </div>
          </div>
        </section>

        <RelatedTopics currentPath={PAGE_PATH} clusterId="ecommerce-fraud" maxSiblings={4} maxRelated={3} />
      </main>
    </DefaultLayout>
  )
}
