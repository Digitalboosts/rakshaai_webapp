import type { Metadata } from 'next';
import Link from 'next/link';
import DefaultLayout from '@/components/DefaultLayout';
import RelatedTopics from '@/components/RelatedTopics';
import { jsonLd, breadcrumbListSchema, faqPageSchema, webPageSchema, organizationRef } from '@/lib/seo/schema';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://rakshaai.co';
const PAGE_PATH = '/scams/fake-websites';
const CANONICAL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: 'Fake Websites India 2026: How to Identify Scam Sites',
  description:
    'How to spot fake shopping sites, cloned bank portals, and fraudulent government sites in India. Warning signs and free checker tool.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Fake Websites India: Complete Detection Guide | RakshaAI',
    description:
      'Identify fake shopping websites, cloned bank portals, and fraudulent payment pages in India. 9 red flags, real examples from SBI/Amazon clones, and instant website trust checker.',
    url: CANONICAL,
    type: 'article',
    siteName: 'RakshaAI',
    locale: 'en_IN',
      images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'RakshaAI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fake Websites India 2026 | RakshaAI',
    description: '9 ways to spot fake websites in India  URL tricks, SSL flags, design clues, and instant AI checker.',
      images: ['/opengraph-image'],
  },
  robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' } as Record<string, unknown>,
};

const FAKE_SITE_CATEGORIES = [
  {
    id: 'fake-bank',
    title: 'Fake Bank & NetBanking Portals',
    severity: 'Critical',
    examples: ['sbi-banking.in', 'hdfcbankonline.com', 'icicibanklogin.net'],
    description:
      'Cloned versions of SBI YONO, HDFC NetBanking, ICICI Bank, Axis Bank, and Kotak login pages. Victims enter credentials which are captured instantly, leading to account takeover and fund transfers.',
    detectionClues: [
      'Genuine URL: onlinesbi.sbi.co.in  not "sbi-banking.in" or "sbibank.com"',
      'Official bank sites always use the bank\'s own domain (hdfc.com, not hdfcbanklogin.net)',
      'Real bank sites enforce strict HTTPS with a verified organization certificate (click the padlock)',
    ],
    officialDomains: { 'SBI': 'onlinesbi.sbi.co.in', 'HDFC': 'netbanking.hdfcbank.com', 'ICICI': 'www.icicibank.com', 'Axis': 'retail.axisbank.co.in' },
  },
  {
    id: 'fake-shopping',
    title: 'Fake Shopping & E-commerce Sites',
    severity: 'High',
    examples: ['amazon-india-deals.in', 'flipkart-bigsale.com', 'meesho-outlet.shop'],
    description:
      'Sites mimicking Amazon India, Flipkart, Meesho, and other e-commerce platforms, typically appearing during sale seasons (Big Billion Day, Prime Day, festivals). Products are never delivered or counterfeit.',
    detectionClues: [
      'Always access Amazon/Flipkart only from their official apps or by typing the URL directly',
      'Prices dramatically below market value are a scam signal',
      'Check payment acceptance  fake sites often only accept bank transfer or UPI to personal IDs',
    ],
    officialDomains: { 'Amazon India': 'www.amazon.in', 'Flipkart': 'www.flipkart.com', 'Meesho': 'www.meesho.com' },
  },
  {
    id: 'fake-government',
    title: 'Fake Government & Scheme Portals',
    severity: 'Critical',
    examples: ['pmkisan-registration.in', 'ayushman-card-apply.com', 'irctc-refund.net'],
    description:
      'Fake sites impersonating PM Kisan, IRCTC, Ayushman Bharat, income tax filing, Aadhaar linking, PAN card services, and other government schemes. Collect registration fees, Aadhaar numbers, and bank details.',
    detectionClues: [
      'Official government sites end in .gov.in  never .in, .com, .net, or .org',
      'Example: incometax.gov.in (official) vs incometax-refund.com (fake)',
      'Government portals do not charge registration fees for public schemes',
    ],
    officialDomains: { 'IRCTC': 'www.irctc.co.in', 'Income Tax': 'www.incometax.gov.in', 'PM Kisan': 'pmkisan.gov.in', 'Aadhaar': 'uidai.gov.in' },
  },
  {
    id: 'fake-investment',
    title: 'Fake Investment & Trading Platforms',
    severity: 'Critical',
    examples: ['zerodha-pro.in', 'groww-trade.com', 'upstox-premium.net'],
    description:
      'Sites mimicking Zerodha, Groww, Upstox, and Paytm Money. Show fake portfolio gains to encourage more deposits, then block withdrawals when victims try to cash out.',
    detectionClues: [
      'Official SEBI-registered brokers: zerodha.com, groww.in, upstox.com',
      'Verify broker registration at sebi.gov.in before depositing',
      'If you cannot withdraw your balance, stop depositing immediately',
    ],
    officialDomains: { 'Zerodha': 'zerodha.com', 'Groww': 'groww.in', 'Upstox': 'upstox.com' },
  },
];

const NINE_RED_FLAGS = [
  { number: '1', title: 'Suspicious URL Structure', desc: 'Misspellings (amaz0n.in), hyphens (sbi-bank.com), extra words (amazon-india-deals.in), or wrong TLD (flipkart.net instead of .com).' },
  { number: '2', title: 'Missing or Invalid SSL', desc: 'No padlock in browser address bar, or browser shows "Not Secure" warning. Legitimate banking and payment sites always use valid HTTPS.' },
  { number: '3', title: 'Domain Registered Recently', desc: 'Check domain age at rakshaai.co/check. Most phishing sites are created within days of their attack. Genuine company websites are years old.' },
  { number: '4', title: 'Received via WhatsApp or SMS', desc: 'Banks, IRCTC, and legitimate services do not send their login URLs via WhatsApp or SMS messages to customers proactively.' },
  { number: '5', title: 'Requests OTP or Full Card Details', desc: 'Any site asking for your UPI PIN, debit card CVV, or banking OTP on a form field is attempting fraud. These are never entered on websites.' },
  { number: '6', title: 'No Contact Information', desc: 'Genuine businesses display a physical address, support phone number, and registered email. Fake sites have no verifiable contact details.' },
  { number: '7', title: 'Prices Too Good to Be True', desc: 'Fake shopping sites often list popular items at 50–90% below market price to attract victims who prioritise deals over verification.' },
  { number: '8', title: 'Low Trust Score on RakshaAI', desc: 'Check any URL at rakshaai.co/check. A Trust Score below 40 means multiple risk signals detected  domain age, blacklist matches, and more.' },
  { number: '9', title: 'Poor Grammar and Design Quality', desc: 'Many fake sites have inconsistent fonts, broken images, spelling errors, or layouts that look "slightly off" compared to the original.' },
];

const FAQ_ITEMS = [
  {
    question: 'How can I tell if a website is fake?',
    answer:
      'Nine key signals: (1) URL misspellings or wrong domain. (2) Missing or invalid SSL certificate. (3) Domain registered very recently. (4) Received via WhatsApp/SMS link. (5) Asks for OTP or CVV. (6) No contact information. (7) Prices unrealistically low. (8) Low Trust Score at rakshaai.co/check. (9) Poor grammar or design quality. Check any suspicious URL instantly at rakshaai.co/check for an AI-powered safety analysis.',
  },
  {
    question: 'How do I check if a website is safe before buying?',
    answer:
      'Go to rakshaai.co/website-safety-checker and paste the website URL. You will receive a Trust Score (0–100) with detailed analysis covering domain age, SSL certificate, blacklist checks, and community reports  in under 5 seconds. Score above 70 = generally safe. Below 40 = high risk.',
  },
  {
    question: 'What is a fake SBI or HDFC banking website?',
    answer:
      'A fake banking website is a cloned version of SBI YONO, HDFC NetBanking, or another bank\'s portal that captures your login credentials when you enter them. The real SBI internet banking URL is onlinesbi.sbi.co.in. The real HDFC URL is netbanking.hdfcbank.com. Any other URL claiming to be these banks is a phishing site.',
  },
  {
    question: 'Is it safe to shop on new websites in India?',
    answer:
      'Check them first at rakshaai.co/check. New websites (registered under 30 days) are higher risk because most phishing sites are brand new. Additionally: look for GST number on the website, read reviews on Google and Trustpilot, verify payment options (avoid sites that only accept bank transfer), and check return/refund policy.',
  },
  {
    question: 'What should I do if I entered my bank details on a fake website?',
    answer:
      'Act immediately: (1) Change your internet banking password and MPIN right now. (2) Call your bank\'s 24/7 helpline and request an account block or card block. (3) If OTP was also shared, report immediately to bank for transaction reversal. (4) Call 1930  cybercrime helpline. (5) File complaint at cybercrime.gov.in. Time is critical.',
  },
];

export default function FakeWebsitesPage() {
  const schemas = [
    webPageSchema({
      name: 'Fake Websites India 2025: How to Identify Fraudulent Sites',
      description:
        'How to identify fake shopping websites, cloned bank portals, fraudulent government sites, and fake investment platforms in India.',
      url: PAGE_PATH,
    }),
    breadcrumbListSchema([
      { name: 'Home', url: '/' },
      { name: 'Scams', url: '/scams' },
      { name: 'Phishing', url: '/scams/phishing' },
      { name: 'Fake Websites', url: PAGE_PATH },
    ]),
    faqPageSchema(FAQ_ITEMS),
    {
      '@context': 'https://schema.org' as const,
      '@type': 'ItemList',
      '@id': `${CANONICAL}#check-steps`,
      name: 'How to Check if a Website is Fake in India',
      description: 'Step-by-step method to verify any website\'s legitimacy using RakshaAI Trust Score.',
      numberOfItems: 5,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Copy the website URL', description: 'Copy the full URL from your browser or from the link you received in WhatsApp/SMS.' },
        { '@type': 'ListItem', position: 2, name: 'Open rakshaai.co/check', description: 'Go to rakshaai.co/check on your device  no login or account needed.' },
        { '@type': 'ListItem', position: 3, name: 'Paste and check', description: 'Paste the URL and tap Check. Results arrive in under 5 seconds.' },
        { '@type': 'ListItem', position: 4, name: 'Read the Trust Score', description: 'Score 70–100: generally safe. 40–69: caution. 0–39: high risk  do not interact.' },
        { '@type': 'ListItem', position: 5, name: 'Read signal breakdown', description: 'Scroll down to see which factors  domain age, SSL, blacklists  triggered the score.' },
      ],
    },
    {
      '@context': 'https://schema.org' as const,
      '@type': 'Article',
      headline: 'Fake Websites India 2025: 9 Ways to Identify Fraudulent Sites',
      description: 'Complete guide to detecting fake banking, shopping, and government websites in India.',
      url: CANONICAL,
      author: organizationRef(),
      publisher: organizationRef(),
      datePublished: '2025-01-01',
      dateModified: new Date().toISOString().split('T')[0],
      inLanguage: 'en-IN',
      keywords: [
        'fake website india', 'how to identify fake website', 'fake shopping website india',
        'fake bank website india', 'fake government website india', 'phishing website checker india',
      ],
      articleSection: 'Cybersecurity',
    },
  ];

  return (
    <DefaultLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schemas) }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-orange-50 to-white dark:from-orange-950/30 dark:to-gray-900 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-gray-400 mb-6">
            <Link href="/" className="hover:text-gray-600">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/scams" className="hover:text-gray-600">Scams</Link>
            <span aria-hidden="true">/</span>
            <Link href="/scams/phishing" className="hover:text-gray-600">Phishing</Link>
            <span aria-hidden="true">/</span>
            <span className="text-gray-600 dark:text-gray-300">Fake Websites</span>
          </nav>

          <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300 text-sm font-medium px-4 py-1.5 rounded-full mb-5">
            <span aria-hidden="true">🌐</span>
            <span>Fake Website Guide</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-5 leading-tight">
            How to Identify Fake Websites in India
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed mb-8">
            Bank portal clones, fake shopping sites, fraudulent government portals  9 detection methods and an instant AI checker.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/check"
              className="inline-block bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
            >
              Check Website Safety <span aria-hidden="true">→</span>
            </Link>
            <a
              href="#nine-red-flags"
              className="inline-block bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 font-semibold px-6 py-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              See 9 Red Flags <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </section>

      {/* Fake Site Categories */}
      <section className="py-14 px-4 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 text-center">
            Major Fake Website Types in India
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-center mb-8">
            These categories account for over 90% of fake website fraud in India.
          </p>
          <div className="space-y-5">
            {FAKE_SITE_CATEGORIES.map((cat) => (
              <article
                key={cat.id}
                id={cat.id}
                className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6"
                data-speakable="true"
              >
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{cat.title}</h3>
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${cat.severity === 'Critical' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' : 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300'}`}>
                    {cat.severity}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">{cat.description}</p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 dark:bg-red-950/20 rounded-lg p-4">
                    <p className="text-xs font-semibold text-red-700 dark:text-red-400 mb-2">Fake domain examples</p>
                    <ul className="space-y-1">
                      {cat.examples.map((ex) => (
                        <li key={ex} className="text-xs font-mono text-red-600 dark:text-red-400 line-through">{ex}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-green-700 dark:text-green-400 mb-2">How to detect</p>
                    <ul className="space-y-1.5">
                      {cat.detectionClues.map((clue, i) => (
                        <li key={i} className="flex gap-2 text-xs text-gray-600 dark:text-gray-300">
                          <span className="text-green-500 flex-shrink-0">✓</span>
                          {clue}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-3">
                      <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">Official domains</p>
                      <div className="flex flex-wrap gap-1.5">
                        {Object.entries(cat.officialDomains).map(([name, domain]) => (
                          <span key={name} className="text-xs bg-green-50 dark:bg-green-950/20 text-green-700 dark:text-green-400 px-2 py-0.5 rounded font-mono">
                            {name}: {domain}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9 Red Flags */}
      <section className="py-14 px-4 bg-white dark:bg-gray-900" id="nine-red-flags">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 text-center">
            9 Red Flags of a Fake Website
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-center mb-8">
            Check for these before clicking, signing up, or paying on any unfamiliar site.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4" data-speakable="true">
            {NINE_RED_FLAGS.map((flag) => (
              <div
                key={flag.number}
                className="bg-gray-50 dark:bg-gray-950 rounded-xl border border-gray-100 dark:border-gray-800 p-5"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {flag.number}
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{flag.title}</h3>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{flag.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* From the RakshaAI Blog */}
      <section className="py-14 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 text-center">
            Recent Fake Website Cases &amp; Guides
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-8">
            Time-stamped deep dives from the RakshaAI blog with real Indian case studies.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { href: '/blog/how-to-check-fake-website-india', title: 'How to Check If a Website Is Fake: 7 Checks in 60 Seconds', desc: 'Domain age, SSL, blacklists, WHOIS. The full checklist before you pay on any unknown site.' },
              { href: '/blog/fake-government-website-india', title: 'Fake Government Websites Charging for Free Services', desc: 'Fake .com portals charging for Aadhaar, PAN, and driving licence services that are free on .gov.in.' },
              { href: '/blog/fake-online-sellers-india', title: 'Fake Online Sellers: 8 Warning Signs and Platform Guide', desc: 'Stolen photos, advance payments, fake tracking numbers, across WhatsApp, Instagram, and marketplaces.' },
            ].map((a) => (
              <Link key={a.href} href={a.href} className="group flex flex-col gap-2 p-5 rounded-xl bg-gray-50 dark:bg-gray-950 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors leading-snug">{a.title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed flex-1">{a.desc}</p>
                <span className="text-xs font-semibold text-orange-600 dark:text-orange-400">Read article &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-4 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Common Questions
          </h2>
          <div className="space-y-3" data-speakable="true">
            {FAQ_ITEMS.map((item) => (
              <details
                key={item.question}
                className="group bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-5"
              >
                <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer list-none flex justify-between items-center gap-4 text-sm">
                  {item.question}
                  <span className="text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0">▾</span>
                </summary>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-orange-600 dark:bg-orange-700">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Verify Any Website in 5 Seconds</h2>
          <p className="text-orange-100 mb-6 text-sm">AI-powered Trust Score  domain age, SSL, blacklists, community reports. Free, no account.</p>
          <Link href="/website-safety-checker" className="inline-block bg-white text-orange-700 font-semibold px-6 py-3 rounded-lg hover:bg-orange-50 transition-colors">
            Check Website Safety →
          </Link>
        </div>
      </section>

      <div className="px-4 py-8 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <RelatedTopics currentPath={PAGE_PATH} clusterId="phishing" />
        </div>
      </div>
    </DefaultLayout>
  );
}
