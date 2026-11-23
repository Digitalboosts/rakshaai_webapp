import type { Metadata } from 'next';
import Link from 'next/link';
import DefaultLayout from '@/components/DefaultLayout';
import RelatedTopics from '@/components/RelatedTopics';
import { jsonLd, breadcrumbListSchema, faqPageSchema, webPageSchema, organizationRef, speakableSchema } from '@/lib/seo/schema';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://rakshaai.co';
const PAGE_PATH = '/scams/whatsapp-scams/investment-scam';
const CANONICAL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: 'WhatsApp Investment Scam India: Fake Groups Explained',
  description:
    'How fake WhatsApp investment groups operate in India  fake profit screenshots, celebrity deepfakes, and pig butchering scams.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'WhatsApp Investment Scam India 2025 | RakshaAI',
    description: 'Fake WhatsApp investment groups promising guaranteed returns then blocking withdrawals  how it works and how to protect yourself.',
    url: CANONICAL,
    type: 'article',
    siteName: 'RakshaAI',
    locale: 'en_IN',
      images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'RakshaAI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WhatsApp Investment Scam India | RakshaAI',
    description: 'Fake trading groups on WhatsApp  how they recruit, build trust, and steal money.',
      images: ['/opengraph-image'],
  },
  robots: { index: true, follow: true, 'max-snippet': -1 } as Record<string, unknown>,
};

const FAQ_ITEMS = [
  {
    question: 'How do I know if a WhatsApp investment group is a scam?',
    answer:
      'Key signs: (1) You were added without consent by an unknown number. (2) Admin posts daily profit screenshots from unknown platforms. (3) A "mentor" or celebrity figure endorses the platform. (4) You are pressured to invest quickly with limited slots. (5) Profits show in the app but withdrawals are blocked unless you pay more. Any of these is a definitive red flag.',
  },
  {
    question: 'Are WhatsApp investment groups legal in India?',
    answer:
      'Any platform offering investment advice must be registered with SEBI (Securities and Exchange Board of India). Verify any investment platform at sebi.gov.in before depositing money. WhatsApp groups operating as unregistered investment advisors are illegal under the SEBI Act 1992.',
  },
  {
    question: 'What should I do if I already invested in a WhatsApp scam group?',
    answer:
      'Act immediately: (1) Stop all further payments. (2) Call 1930  national cybercrime helpline. (3) File a complaint at cybercrime.gov.in with screenshots of the group, payment receipts, and conversation history. (4) Contact your bank to flag the beneficiary account. (5) Report to SEBI SCORES portal if it involved securities or trading.',
  },
  {
    question: 'Can I recover money lost in a WhatsApp investment scam?',
    answer:
      'Recovery is possible but time-critical. Call 1930 within the first 24 hours for the best chance of transaction reversal. File a complaint at cybercrime.gov.in immediately. Police can sometimes freeze the receiving account if action is taken quickly. Cryptocurrency transfers are harder to reverse.',
  },
];

export default function WhatsAppInvestmentScamPage() {
  const schemas = [
    webPageSchema({
      name: 'WhatsApp Investment Scam India 2025: Fake Groups & Trading Apps',
      description: 'How fake WhatsApp investment groups operate in India, warning signs, and prevention.',
      url: PAGE_PATH,
    }),
    breadcrumbListSchema([
      { name: 'Home', url: '/' },
      { name: 'Scams', url: '/scams' },
      { name: 'WhatsApp Scams', url: '/scams/whatsapp-scams' },
      { name: 'Investment Scam', url: PAGE_PATH },
    ]),
    faqPageSchema(FAQ_ITEMS),
    {
      '@context': 'https://schema.org' as const,
      '@type': 'Article',
      headline: 'WhatsApp Investment Scam India 2025: Fake Groups & Trading Apps',
      url: CANONICAL,
      author: organizationRef(),
      publisher: organizationRef(),
      datePublished: '2025-01-01',
      dateModified: new Date().toISOString().split('T')[0],
      inLanguage: 'en-IN',
      keywords: ['whatsapp investment scam india', 'fake trading group whatsapp', 'whatsapp stock tips scam', 'pig butchering whatsapp'],
      articleSection: 'Cybersecurity',
    },
    speakableSchema(['[data-speakable]']),
  ];

  return (
    <DefaultLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schemas) }} />

      <section className="bg-gradient-to-b from-emerald-50 to-white dark:from-emerald-950/30 dark:to-gray-900 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-gray-400 mb-6">
            <Link href="/">Home</Link><span aria-hidden="true">/</span>
            <Link href="/scams">Scams</Link><span aria-hidden="true">/</span>
            <Link href="/scams/whatsapp-scams">WhatsApp Scams</Link><span aria-hidden="true">/</span>
            <span className="text-gray-600 dark:text-gray-300">Investment Scam</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 text-sm font-medium px-4 py-1.5 rounded-full mb-5">
            <span aria-hidden="true">📈</span><span>WhatsApp Fraud Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-5 leading-tight">
            WhatsApp Investment Scam India
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
            Fake investment groups on WhatsApp show impossible returns, then block every withdrawal. India&apos;s most financially damaging WhatsApp scam category  average loss ₹1.2 lakh.
          </p>
        </div>
      </section>

      <div className="bg-red-600 dark:bg-red-700 py-4 px-4">
        <div className="max-w-4xl mx-auto text-white text-sm font-medium" data-speakable="true">
          ⚠️ <strong>Key fact:</strong> All investment advice platforms in India must be SEBI-registered. Verify at sebi.gov.in before depositing a single rupee.
        </div>
      </div>

      <section className="py-14 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8" data-speakable="true">
            How the Scam Works
          </h2>
          <div className="space-y-4">
            {[
              { phase: 'Recruitment', desc: 'You are added to a WhatsApp group by an unknown number. The group contains 50–200 members, most of whom are fake accounts controlled by the scam operation.' },
              { phase: 'Trust Building', desc: 'An "admin" posts daily screenshots of enormous profits  ₹50,000 returns on ₹10,000 investments. A "mentor" (often impersonating a known investor or celebrity deepfake) endorses the platform.' },
              { phase: 'First Deposit', desc: 'You are given a link to download a trading app. You deposit ₹5,000–₹20,000. The app immediately shows 40–80% "profits" within days. Small withdrawals are sometimes permitted to build trust.' },
              { phase: 'Scale-Up Pressure', desc: 'You are told about a "VIP scheme" or "IPO allocation" requiring ₹1–20 lakh. Urgency is created  "only 3 slots left". Members who invested share further profit screenshots.' },
              { phase: 'Withdrawal Block', desc: 'When you attempt to withdraw, errors appear: "tax clearance required", "verification deposit needed", "insurance fee". Each payment generates a new obstacle. The app eventually goes offline.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-gray-50 dark:bg-gray-950 rounded-xl p-5 border border-gray-100 dark:border-gray-800">
                <div className="flex-shrink-0 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-bold px-2.5 py-1 rounded-lg h-fit">Phase {i + 1}: {item.phase}</div>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center" data-speakable="true">
            Red Flags
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              'Added to group without consent by unknown number',
              'Admin posts daily profit screenshots from unknown platform',
              'Celebrity or "market expert" endorses the scheme',
              'App not on Google Play or Apple App Store  WhatsApp link only',
              'Profits visible but withdrawal requires additional deposit',
              '"Limited slots" countdown pressure',
              'No SEBI registration number provided',
              'All group members seem to share only positive experiences',
            ].map((flag, i) => (
              <div key={i} className="flex gap-3 bg-white dark:bg-gray-900 rounded-lg p-4 border border-red-100 dark:border-red-900/30">
                <span className="text-red-500 flex-shrink-0 font-bold" aria-hidden="true">✗</span>
                <p className="text-sm text-gray-700 dark:text-gray-300">{flag}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-3" data-speakable="true">
            {FAQ_ITEMS.map((item) => (
              <details key={item.question} className="group bg-gray-50 dark:bg-gray-950 border border-gray-100 dark:border-gray-800 rounded-xl p-5">
                <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer list-none flex justify-between items-center gap-4 text-sm">
                  {item.question}
                  <span className="text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" aria-hidden="true">▾</span>
                </summary>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <div className="px-4 py-8 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <RelatedTopics currentPath={PAGE_PATH} clusterId="whatsapp-scams" />
        </div>
      </div>
    </DefaultLayout>
  );
}
