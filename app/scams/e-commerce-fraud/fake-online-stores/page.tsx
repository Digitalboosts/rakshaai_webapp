import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import DefaultLayout from '@/components/DefaultLayout'
import RelatedTopics from '@/components/RelatedTopics'
import ReportScamButton from '@/components/ReportScamButton'
import {
  breadcrumbListSchema,
  faqPageSchema,
  jsonLd,
  organizationRef,
  webPageSchema,
} from '@/lib/seo/schema'
import {
  AlertTriangle,
  BadgeCheck,
  CheckCircle2,
  Clock3,
  ExternalLink,
  Eye,
  FileText,
  Globe2,
  Link2,
  LockKeyhole,
  PackageX,
  SearchCheck,
  ShieldAlert,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  WalletCards,
} from 'lucide-react'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://rakshaai.co'
const PAGE_PATH = '/scams/e-commerce-fraud/fake-online-stores'
const CANONICAL = `${SITE_URL}${PAGE_PATH}`
const HERO_IMAGE = '/blog/how-to-check-fake-website-india/fake-website-hero.webp'

export const metadata: Metadata = {
  title: 'Fake Shopping Website India 2026: 8 Red Flags & How to Get Your Money Back',
  description:
    'Scammers copy real brand logos to build fake stores. Learn 8 red flags, how to check domain registration, report quickly and dispute payments in India.',
  alternates: { canonical: CANONICAL },
  robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  openGraph: {
    title: 'Fake Shopping Website India 2026: 8 Red Flags & Recovery Guide',
    description:
      'Check a suspicious online store before paying, distinguish fake stores from marketplace fraud, and follow the right India reporting path after a loss.',
    url: CANONICAL,
    type: 'article',
    siteName: 'RakshaAI',
    locale: 'en_IN',
    images: [
      {
        url: HERO_IMAGE,
        width: 1200,
        height: 675,
        alt: 'Shopper checking the domain name of a suspicious online shopping website',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fake Shopping Website India: 8 Red Flags',
    description:
      'A practical India guide to lookalike domains, fake checkouts, non-delivery, payment disputes and official reporting.',
    images: [HERO_IMAGE],
  },
  other: {
    'geo.region': 'IN',
    language: 'en-IN',
  },
}

const quickFacts = [
  { value: '8', label: 'red flags to check before paying' },
  { value: '4', label: 'independent website checks to combine' },
  { value: '1930', label: 'immediate cyber-financial fraud helpline' },
  { value: '1915', label: 'National Consumer Helpline' },
]

const distinctions = [
  {
    title: 'Fake online store',
    body:
      'A standalone copycat website has its own product pages and checkout. The operator may take payment, send junk or never deliver.',
  },
  {
    title: 'Fake marketplace seller',
    body:
      'A fraudulent third-party seller operates inside a real marketplace. Start the dispute through that platform because its buyer-protection terms may apply.',
    href: '/scams/e-commerce-fraud/fake-marketplace-seller',
  },
  {
    title: 'Counterfeit product',
    body:
      'A product arrives, but it is an imitation, unsafe or materially different from the genuine branded item advertised.',
    href: '/scams/e-commerce-fraud/counterfeit-products',
  },
]

const storeTypes = [
  {
    title: 'Brand-copycat stores',
    body:
      'The site copies a fashion, footwear, beauty or electronics brand and adds words such as India, official, sale or outlet to a lookalike domain.',
  },
  {
    title: 'Premium-product bait stores',
    body:
      'High-demand phones, consoles, sneakers or luxury goods are advertised far below normal retail price. Nothing arrives, or a low-value substitute is shipped.',
  },
  {
    title: 'Festival and flash-sale stores',
    body:
      'The page uses countdown timers, limited-stock claims and familiar sale language around Diwali, New Year or marketplace sale periods to rush checkout.',
  },
]

const scamJourney = [
  {
    title: 'The ad or message',
    body:
      'A sponsored social post, search ad, influencer impersonation or WhatsApp forward promises an unusually steep discount.',
  },
  {
    title: 'The convincing storefront',
    body:
      'Stolen logos, product photos, testimonials and a normal-looking HTTPS checkout make the store appear established.',
  },
  {
    title: 'The payment',
    body:
      'The checkout collects a card payment or redirects to UPI, sometimes showing a personal or unrelated beneficiary name.',
  },
  {
    title: 'The loss',
    body:
      'The order is never shipped, fake tracking appears, junk arrives, support vanishes or the website goes offline.',
  },
]

const redFlags = [
  {
    title: 'The discount has no credible explanation',
    body:
      'Compare the exact model on the brand website and trusted retailers. A huge price gap combined with urgency is a strong warning, not proof by itself.',
  },
  {
    title: 'The domain is a lookalike',
    body:
      'Watch for misspellings, extra hyphens, added words such as outlet or sale, and a different ending from the brand domain.',
  },
  {
    title: 'The domain was registered recently',
    body:
      'A recent creation date is useful context when a site claims a long business history. Older domains can also be compromised, so never use age alone.',
  },
  {
    title: 'The business identity cannot be verified',
    body:
      'The legal name, address, phone, email and grievance contact are absent, inconsistent or copied. A GSTIN can support verification where applicable, but its absence alone does not prove fraud.',
  },
  {
    title: 'Policies and product pages look copied',
    body:
      'Return text names another company, contact links fail, product descriptions conflict or reverse-image search traces photos to unrelated stores.',
  },
  {
    title: 'The payment beneficiary does not match',
    body:
      'Checkout redirects to a personal UPI ID, unrelated name or direct bank transfer. Stop if the displayed beneficiary is not the seller you intended to pay.',
  },
  {
    title: 'Urgency replaces verification',
    body:
      'A timer, last-item warning or WhatsApp-only deal pressures you to pay before checking the URL, seller and refund terms.',
  },
  {
    title: 'Checkout asks for secrets or device access',
    body:
      'A seller or support agent asks for your OTP, card PIN, UPI PIN, screen share or remote-access app. Genuine refunds do not require these secrets.',
  },
]

const verificationSteps = [
  {
    title: 'Inspect the full URL',
    body:
      'Open the brand from a saved bookmark, official app or manually typed address. Compare every character before entering personal or payment information.',
  },
  {
    title: 'Run the RakshaAI website check',
    body:
      'Paste the store URL into the Website Safety Checker for a fast risk review. Treat the result as one signal, not a guarantee.',
  },
  {
    title: 'Check registration data with ICANN Lookup',
    body:
      'Review available creation dates, registrar and status information. Some registrant details are legitimately redacted, and domain age alone cannot establish trust.',
  },
  {
    title: 'Check Google Safe Browsing',
    body:
      'Look for a current unsafe-site warning. A clean result only means no warning is shown at that moment; a new scam site may not yet be detected.',
  },
  {
    title: 'Verify the seller outside the website',
    body:
      'Check the legal name, contact details, authorised-retailer list, return terms and payment beneficiary using independent sources.',
  },
]

const recoverySteps = [
  {
    title: 'Save evidence before the site changes',
    body:
      'Capture the URL, product page, checkout, order confirmation, payment reference, beneficiary details, emails, chats and courier label. Keep packaging and record the item received.',
  },
  {
    title: 'Contact the payment provider immediately',
    body:
      'Call 1930 for cyber-financial fraud and notify your bank, card issuer, UPI app or wallet. Ask about the correct fraud report or goods-not-received dispute; deadlines vary by provider and payment method.',
  },
  {
    title: 'File at cybercrime.gov.in',
    body:
      'Submit the fake store URL, payment trail and screenshots to the National Cyber Crime Reporting Portal. Keep the acknowledgement number and complete any required follow-up.',
  },
  {
    title: 'Report the malicious website',
    body:
      'Send a cybersecurity incident report to CERT-In when appropriate and report the page to its registrar, hosting provider, payment gateway and Google Safe Browsing. Reporting does not guarantee a fixed takedown time.',
  },
  {
    title: 'Use consumer grievance channels',
    body:
      'If an identifiable seller or e-commerce entity is involved, call NCH 1915 or lodge a grievance online. NCH is a pre-litigation mechanism and does not guarantee recovery.',
  },
  {
    title: 'Escalate unresolved or high-value fraud',
    body:
      'Use the bank grievance process, the appropriate ombudsman or consumer commission where applicable, and contact local cyber police for deliberate fraud or identity theft.',
  },
]

const reportingRoutes = [
  ['Money just left your account', '1930, bank or payment provider, then cybercrime.gov.in', 'Immediately'],
  ['Card order never arrived', 'Card issuer merchant dispute or chargeback process', 'As soon as non-delivery is clear'],
  ['Fake or phishing site is still live', 'CERT-In, registrar or host, payment gateway and Google Safe Browsing', 'After preserving evidence'],
  ['Seller or platform will not resolve complaint', 'National Consumer Helpline 1915 and consumerhelpline.gov.in', 'After contacting the seller or platform'],
  ['Junk or wrong item arrived', 'Keep packaging, record evidence, dispute with provider and report fraud', 'Same day'],
]

const comparisonRows = [
  ['Standalone fake store', 'Its own website and checkout', 'Bank or payment dispute, 1930, cybercrime portal, NCH where applicable'],
  ['Fake marketplace seller', 'Seller account inside a real platform', 'Platform dispute first, then payment and consumer escalation'],
  ['Counterfeit product', 'A fake branded item is delivered', 'Return or refund evidence, brand report and consumer grievance'],
  ['Advance-payment trap', 'Seller moves payment outside checkout', '1930, payment provider and cybercrime report'],
  ['Social-commerce scam', 'Instagram, WhatsApp or Facebook seller flow', 'Platform report plus payment and cybercrime channels'],
]

const relatedGuides = [
  {
    title: 'E-Commerce Fraud Hub',
    body: 'Overview of fake stores, COD fraud, marketplace scams and shopping recovery routes.',
    href: '/scams/e-commerce-fraud',
  },
  {
    title: 'Fake Marketplace Seller',
    body: 'Use this when the platform is real but the third-party seller, tracking or package is fraudulent.',
    href: '/scams/e-commerce-fraud/fake-marketplace-seller',
  },
  {
    title: 'Counterfeit Products',
    body: 'Use this when an imitation or unsafe branded product arrives instead of the genuine item.',
    href: '/scams/e-commerce-fraud/counterfeit-products',
  },
  {
    title: 'Advance Payment Trap',
    body: 'Use this when the seller asks for UPI, token money or bank transfer outside protected checkout.',
    href: '/scams/e-commerce-fraud/advance-payment-trap',
  },
  {
    title: 'Social Commerce Scam',
    body: 'Use this when a shopping ad or seller operates through Instagram, WhatsApp, Facebook or YouTube.',
    href: '/scams/e-commerce-fraud/social-commerce-scam',
  },
]

const FAQ_ITEMS = [
  {
    question: 'How can I tell if an online shopping website is fake in India?',
    answer:
      'Check the exact domain, compare the price with the official brand site, review ICANN registration data, run Google Safe Browsing and RakshaAI checks, verify the legal identity and contact details independently, and confirm that the payment beneficiary matches the seller. No single check proves a site is safe.',
  },
  {
    question: 'Does HTTPS or a padlock mean a shopping website is genuine?',
    answer:
      'No. HTTPS encrypts the connection between your browser and the website. It does not prove that the operator, products or refund promise are genuine.',
  },
  {
    question: 'Is a recently registered domain always a scam?',
    answer:
      'No. A recent registration date is a risk signal when combined with copied branding, implausible discounts or unverifiable business details. Legitimate new businesses exist, and older domains can be compromised.',
  },
  {
    question: 'What should I do immediately after paying a fake shopping website?',
    answer:
      'Preserve screenshots and payment details, call 1930 for cyber-financial fraud, contact your bank or payment provider, and file at cybercrime.gov.in. Speed helps, but no channel can promise that the money will be recovered.',
  },
  {
    question: 'Can I dispute a card payment if the product never arrives?',
    answer:
      'Ask your card issuer immediately about a merchant dispute or chargeback for goods not received or not as described. Eligibility, evidence and deadlines depend on the issuer, card network and transaction, so do not rely on a universal 120-day rule.',
  },
  {
    question: 'Can CERT-In take down a fake shopping website?',
    answer:
      'CERT-In accepts cybersecurity incident reports, including phishing and attacks involving e-commerce applications. You can report the URL and evidence, but CERT-In does not promise a fixed takedown or suspension time for an individual report.',
  },
  {
    question: 'How does Google Safe Browsing help?',
    answer:
      'Google Safe Browsing can show whether a URL is currently identified as dangerous. A warning is a strong reason to stop. A clean result is not a guarantee because a new or unreported fake site may not yet be flagged.',
  },
  {
    question: 'Must every genuine Indian online store display a GST number?',
    answer:
      'Not every missing GST number proves fraud because registration obligations depend on the business and applicable tax rules. Treat legal-name, address or tax-detail inconsistencies as warning signs and verify any GSTIN shown on the official GST portal.',
  },
  {
    question: 'What do the Consumer Protection E-Commerce Rules require?',
    answer:
      'The rules require covered e-commerce entities to provide specified business and grievance information. The grievance officer must acknowledge a consumer complaint within 48 hours and redress it within one month. Those rules do not make NCH or a complaint an automatic refund guarantee.',
  },
  {
    question: 'How is a fake shopping website different from a fake marketplace seller?',
    answer:
      'A fake shopping website is a standalone store outside the real marketplace. A fake marketplace seller operates inside Amazon, Flipkart, Meesho or another platform, so the platform dispute and buyer-protection process may be available.',
  },
]

const schemas = [
  webPageSchema({
    name: 'Fake Shopping Website India 2026 - Red Flags, Verification and Recovery',
    description: metadata.description as string,
    url: PAGE_PATH,
  }),
  breadcrumbListSchema([
    { name: 'Home', url: '/' },
    { name: 'Scams', url: '/scams' },
    { name: 'E-Commerce Fraud', url: '/scams/e-commerce-fraud' },
    { name: 'Fake Online Stores', url: PAGE_PATH },
  ]),
  faqPageSchema(FAQ_ITEMS),
  {
    '@context': 'https://schema.org' as const,
    '@type': 'Article',
    headline: 'Fake Shopping Website India 2026: 8 Red Flags and How to Get Your Money Back',
    description: metadata.description as string,
    url: CANONICAL,
    mainEntityOfPage: CANONICAL,
    image: `${SITE_URL}${HERO_IMAGE}`,
    author: organizationRef(),
    publisher: organizationRef(),
    datePublished: '2026-07-22',
    dateModified: '2026-07-22',
    inLanguage: 'en-IN',
    articleSection: 'E-Commerce Fraud',
    keywords: [
      'fake shopping website india',
      'fake online store india',
      'how to check website genuine india',
      'online shopping fraud complaint india',
      'fake website money recovery india',
    ],
  },
  {
    '@context': 'https://schema.org' as const,
    '@type': 'DefinedTerm',
    name: 'Fake shopping website fraud',
    description:
      'A fraud in which a standalone online store impersonates a retailer or presents a false shopping business to collect payment, personal data or payment credentials without delivering the promised goods.',
    url: CANONICAL,
  },
  {
    '@context': 'https://schema.org' as const,
    '@type': 'HowTo',
    name: 'How to check if a shopping website is genuine in India',
    description:
      'Five independent checks for an unfamiliar shopping website before entering personal or payment information.',
    totalTime: 'PT5M',
    step: verificationSteps.map((step) => ({
      '@type': 'HowToStep',
      name: step.title,
      text: step.body,
    })),
  },
]

export default function FakeOnlineStoresPage() {
  return (
    <DefaultLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schemas) }} />

      <section className="bg-gradient-to-br from-cyan-50 via-white to-amber-50 px-4 py-16 dark:from-gray-950 dark:via-gray-900 dark:to-cyan-950">
        <div className="mx-auto max-w-5xl">
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            <Link href="/">Home</Link><span aria-hidden="true">/</span>
            <Link href="/scams">Scams</Link><span aria-hidden="true">/</span>
            <Link href="/scams/e-commerce-fraud">E-Commerce Fraud</Link><span aria-hidden="true">/</span>
            <span className="font-medium text-gray-700 dark:text-gray-300">Fake Shopping Website</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-100 px-4 py-1.5 text-xs font-semibold text-cyan-800 dark:border-cyan-800 dark:bg-cyan-900/40 dark:text-cyan-300">
                <ShoppingBag className="h-4 w-4" />
                E-Commerce Fraud Guide
              </div>
              <h1 className="mb-5 text-4xl font-extrabold leading-tight text-gray-900 dark:text-white md:text-5xl">
                Fake Shopping Website India 2026: 8 Red Flags &amp; Recovery Steps
              </h1>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                A fake online store can copy a real brand logo, product catalogue and checkout. You pay, but nothing arrives, a worthless substitute appears, or your payment details are exposed. Check the domain and business before you buy.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/website-safety-checker" className="rounded-xl bg-cyan-700 px-5 py-3 text-sm font-bold text-white shadow hover:bg-cyan-800">
                  Check Website Free
                </Link>
                <Link href="/phone-number-checker" className="rounded-xl border border-cyan-200 bg-white px-5 py-3 text-sm font-bold text-cyan-800 shadow-sm hover:bg-cyan-50 dark:border-cyan-800 dark:bg-gray-900 dark:text-cyan-300">
                  Check Seller Phone
                </Link>
              </div>
              <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                A checker result is a risk signal, not a guarantee of legitimacy.
              </p>
            </div>

            <figure className="overflow-hidden rounded-2xl border border-cyan-200 bg-white shadow-lg dark:border-cyan-900 dark:bg-gray-900">
              <Image
                src={HERO_IMAGE}
                alt="Shopper checking the domain name of a suspicious online shopping website"
                width={1200}
                height={675}
                className="h-auto w-full object-cover"
                priority
              />
              <figcaption className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400">
                Read the complete domain—not only the logo, ad or padlock—before checkout.
              </figcaption>
            </figure>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="rounded-xl border border-cyan-100 bg-white p-4 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <div className="text-2xl font-extrabold text-cyan-700 dark:text-cyan-300">{fact.value}</div>
                <p className="mt-2 text-xs leading-relaxed text-gray-500 dark:text-gray-400">{fact.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-cyan-800 px-4 py-4 text-white dark:bg-cyan-900">
        <div className="mx-auto flex max-w-5xl items-start gap-3 text-sm">
          <LockKeyhole className="mt-0.5 h-5 w-5 flex-shrink-0" />
          <p><strong>Padlock warning:</strong> HTTPS protects the connection; it does not verify the store owner, product or refund promise.</p>
        </div>
      </div>

      <main className="mx-auto max-w-5xl space-y-16 px-4 py-14 sm:px-6 lg:px-8">
        <section>
          <h2 className="mb-4 text-2xl font-extrabold text-gray-900 dark:text-white">What Makes a Fake Store Look Real?</h2>
          <p className="leading-relaxed text-gray-600 dark:text-gray-300">
            Logos and catalogue images are easy to copy. Professional themes, HTTPS certificates, order emails and familiar payment screens can all exist on a fraudulent store. The useful question is not whether the page looks polished; it is whether the exact domain, operator, offer and payment destination can be independently verified.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {distinctions.map((item) => {
              const content = (
                <>
                  <h3 className="font-bold text-gray-900 dark:text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{item.body}</p>
                </>
              )
              return item.href ? (
                <Link key={item.title} href={item.href} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:border-cyan-300 dark:border-gray-800 dark:bg-gray-900">
                  {content}
                </Link>
              ) : (
                <div key={item.title} className="rounded-2xl border border-cyan-200 bg-cyan-50 p-5 shadow-sm dark:border-cyan-900 dark:bg-cyan-950/30">
                  {content}
                </div>
              )
            })}
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">3 Common Fake Online Store Formats</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {storeTypes.map((type, index) => (
              <article key={type.title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <span className="text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-300">Type {index + 1}</span>
                <h3 className="mt-2 font-bold text-gray-900 dark:text-white">{type.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{type.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">How the Scam Moves from Ad to Loss</h2>
          <div className="grid gap-4 md:grid-cols-4">
            {scamJourney.map((stage, index) => (
              <div key={stage.title} className="relative rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-sm font-bold text-white dark:bg-white dark:text-gray-900">{index + 1}</span>
                <h3 className="mt-4 font-bold text-gray-900 dark:text-white">{stage.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{stage.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-6 flex items-start gap-3">
            <AlertTriangle className="mt-1 h-7 w-7 flex-shrink-0 text-amber-600" />
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">8 Red Flags Before You Pay</h2>
              <p className="mt-2 leading-relaxed text-gray-600 dark:text-gray-300">One warning can have an innocent explanation. Several together mean stop and verify independently.</p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {redFlags.map((flag, index) => (
              <article key={flag.title} className="rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900 dark:bg-amber-950/20">
                <div className="flex gap-4">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-amber-600 text-sm font-bold text-white">{index + 1}</span>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">{flag.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-300">{flag.body}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="verify">
          <div className="mb-6 flex items-start gap-3">
            <SearchCheck className="mt-1 h-7 w-7 flex-shrink-0 text-cyan-700 dark:text-cyan-300" />
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">How to Check if a Shopping Website Is Genuine in India</h2>
              <p className="mt-2 leading-relaxed text-gray-600 dark:text-gray-300">Combine all five checks. Domain age, HTTPS and automated scanners are useful context, but none is a standalone safety certificate.</p>
            </div>
          </div>
          <div className="space-y-4">
            {verificationSteps.map((step, index) => (
              <div key={step.title} className={`rounded-2xl border p-5 shadow-sm ${index === 1 ? 'border-cyan-200 bg-cyan-50 dark:border-cyan-800 dark:bg-cyan-950/30' : 'border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900'}`}>
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-cyan-700 text-sm font-bold text-white">{index + 1}</span>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{step.body}</p>
                    {index === 1 && (
                      <Link href="/website-safety-checker" className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-cyan-700 hover:underline dark:text-cyan-300">
                        Open Website Safety Checker <ExternalLink className="h-3.5 w-3.5" />
                      </Link>
                    )}
                    {index === 2 && (
                      <a href="https://lookup.icann.org/en" target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-cyan-700 hover:underline dark:text-cyan-300">
                        Open ICANN Lookup <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                    {index === 3 && (
                      <a href="https://transparencyreport.google.com/safe-browsing/search" target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-cyan-700 hover:underline dark:text-cyan-300">
                        Open Google Safe Browsing <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl bg-cyan-800 p-6 text-white shadow-lg">
            <h3 className="text-xl font-extrabold">Found a deal on an unfamiliar store?</h3>
            <p className="mt-2 text-sm text-cyan-50">Check the exact website before you enter your address, card or UPI details.</p>
            <Link href="/website-safety-checker" className="mt-4 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-bold text-cyan-800 hover:bg-cyan-50">
              Check Website Free
            </Link>
          </div>
        </section>

        <section id="recovery">
          <div className="mb-6 flex items-start gap-3">
            <WalletCards className="mt-1 h-7 w-7 flex-shrink-0 text-red-600" />
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">What to Do If You Already Paid</h2>
              <p className="mt-2 leading-relaxed text-gray-600 dark:text-gray-300">Act promptly and use parallel reporting routes. A report can improve the chance of intervention, but no recovery percentage or fixed refund outcome is guaranteed.</p>
            </div>
          </div>
          <div className="space-y-4">
            {recoverySteps.map((step, index) => (
              <article key={step.title} className={`rounded-2xl border p-5 shadow-sm ${index <= 2 ? 'border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950/20' : 'border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900'}`}>
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">{index + 1}</span>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{step.body}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="tel:1930" className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-bold text-white shadow hover:bg-red-700">
              <Smartphone className="h-4 w-4" /> Call 1930
            </a>
            <a href="https://cybercrime.gov.in" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-red-200 bg-white px-5 py-3 text-sm font-bold text-red-700 shadow-sm hover:bg-red-50 dark:border-red-800 dark:bg-gray-900 dark:text-red-300">
              File Cybercrime Report <ExternalLink className="h-4 w-4" />
            </a>
            <ReportScamButton className="rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-bold text-gray-800 shadow-sm hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100">
              Report Website to RakshaAI
            </ReportScamButton>
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">Choose the Right Reporting Route</h2>
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <div className="hidden grid-cols-3 bg-gray-50 px-4 py-3 text-xs font-bold uppercase tracking-wide text-gray-500 dark:bg-gray-950 dark:text-gray-400 md:grid">
              <span>Situation</span><span>Best first route</span><span>When</span>
            </div>
            {reportingRoutes.map(([situation, route, timing]) => (
              <div key={situation} className="grid grid-cols-1 gap-2 border-t border-gray-100 px-4 py-4 text-sm dark:border-gray-800 md:grid-cols-3">
                <span className="font-bold text-gray-900 dark:text-white">{situation}</span>
                <span className="text-gray-600 dark:text-gray-300">{route}</span>
                <span className="font-medium text-red-700 dark:text-red-300">{timing}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-900 dark:bg-amber-950/20">
          <div className="flex gap-4">
            <PackageX className="h-8 w-8 flex-shrink-0 text-amber-700 dark:text-amber-300" />
            <div>
              <h2 className="text-xl font-extrabold text-gray-900 dark:text-white">If Junk or the Wrong Item Arrived</h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                Do not discard the parcel, invoice, courier label or item. Photograph every side, preserve a continuous opening video if you have one, compare the received item with the listing, and start the seller and payment dispute the same day. Do not return evidence to an unverified address before your provider confirms the process.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">Fake Store vs Other Shopping Fraud</h2>
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <div className="hidden grid-cols-3 bg-gray-50 px-4 py-3 text-xs font-bold uppercase tracking-wide text-gray-500 dark:bg-gray-950 dark:text-gray-400 md:grid">
              <span>Fraud type</span><span>Where it happens</span><span>First recovery route</span>
            </div>
            {comparisonRows.map(([type, location, recovery]) => (
              <div key={type} className="grid grid-cols-1 gap-2 border-t border-gray-100 px-4 py-4 text-sm dark:border-gray-800 md:grid-cols-3">
                <span className="font-bold text-gray-900 dark:text-white">{type}</span>
                <span className="text-gray-600 dark:text-gray-300">{location}</span>
                <span className="text-gray-600 dark:text-gray-300">{recovery}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">Free Checks and Official Help</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Link href="/website-safety-checker" className="rounded-2xl border border-cyan-200 bg-cyan-50 p-5 hover:bg-cyan-100 dark:border-cyan-900 dark:bg-cyan-950/30">
              <ShieldCheck className="h-7 w-7 text-cyan-700 dark:text-cyan-300" />
              <h3 className="mt-4 font-bold text-gray-900 dark:text-white">Website Safety Checker</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Review an unfamiliar store URL before checkout.</p>
            </Link>
            <Link href="/phone-number-checker" className="rounded-2xl border border-indigo-200 bg-indigo-50 p-5 hover:bg-indigo-100 dark:border-indigo-900 dark:bg-indigo-950/30">
              <BadgeCheck className="h-7 w-7 text-indigo-700 dark:text-indigo-300" />
              <h3 className="mt-4 font-bold text-gray-900 dark:text-white">Phone Number Checker</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Check a seller or support number linked to the store.</p>
            </Link>
            <ReportScamButton className="rounded-2xl border border-red-200 bg-red-50 p-5 text-left hover:bg-red-100 dark:border-red-900 dark:bg-red-950/30">
              <ShieldAlert className="h-7 w-7 text-red-700 dark:text-red-300" />
              <span className="mt-4 block font-bold text-gray-900 dark:text-white">Report a Scam</span>
              <span className="mt-2 block text-sm text-gray-600 dark:text-gray-300">Share the URL and evidence to warn other shoppers.</span>
            </ReportScamButton>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <a href="https://consumerhelpline.gov.in/public/" target="_blank" rel="noreferrer" className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:border-cyan-300 dark:border-gray-800 dark:bg-gray-900">
              <FileText className="h-6 w-6 text-cyan-700 dark:text-cyan-300" />
              <h3 className="mt-3 font-bold text-gray-900 dark:text-white">National Consumer Helpline</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Call 1915 or lodge a pre-litigation consumer grievance online.</p>
            </a>
            <a href="https://www.cert-in.org.in/s2cMainServlet?pageid=CONTACTUS" target="_blank" rel="noreferrer" className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:border-cyan-300 dark:border-gray-800 dark:bg-gray-900">
              <Globe2 className="h-6 w-6 text-cyan-700 dark:text-cyan-300" />
              <h3 className="mt-3 font-bold text-gray-900 dark:text-white">CERT-In Incident Reporting</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Use the official contact details for an appropriate cybersecurity incident report.</p>
            </a>
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
          <div className="mb-5 flex items-center gap-3">
            <Eye className="h-7 w-7 text-cyan-700 dark:text-cyan-300" />
            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">Frequently Asked Questions</h2>
          </div>
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
              <h2 className="text-xl font-extrabold text-gray-900 dark:text-white">The 30-Second Shopping Rule</h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-200">
                Pause before checkout. Read the complete domain, compare the price, verify the operator and check the payment beneficiary. If the seller creates urgency or asks for an OTP, UPI PIN or remote access, close the page.
              </p>
            </div>
          </div>
        </section>

        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
          <Clock3 className="h-4 w-4" />
          Last reviewed 22 July 2026. Official contact details and rules can change; confirm them on the linked government websites.
        </div>

        <RelatedTopics currentPath={PAGE_PATH} clusterId="ecommerce-fraud" maxSiblings={4} maxRelated={3} />
      </main>
    </DefaultLayout>
  )
}
