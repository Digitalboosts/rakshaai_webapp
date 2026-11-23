import type { Metadata } from 'next';
import Link from 'next/link';
import DefaultLayout from '@/components/DefaultLayout';
import RelatedTopics from '@/components/RelatedTopics';
import { jsonLd, breadcrumbListSchema, faqPageSchema, webPageSchema, organizationRef } from '@/lib/seo/schema';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://rakshaai.co';
const PAGE_PATH = '/scams/digital-arrest/fake-customs-scam';
const CANONICAL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: 'Fake Customs Scam India: Package Seizure Calls',
  description:
    'How scammers impersonate customs officers claiming illegal parcels  threatening arrest unless you pay. Warning signs and what to do.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Fake Customs Scam India 2025 | RakshaAI',
    description: 'Fraudsters claiming to be customs officers seize fictional packages and threaten arrest  how the scam works.',
    url: CANONICAL,
    type: 'article',
    siteName: 'RakshaAI',
    locale: 'en_IN',
      images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'RakshaAI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fake Customs Scam India | RakshaAI',
    description: 'Fake customs calls about seized packages  how to identify and respond to this digital arrest scam.',
      images: ['/opengraph-image'],
  },
  robots: { index: true, follow: true, 'max-snippet': -1 } as Record<string, unknown>,
};

const FAQ_ITEMS = [
  {
    question: 'Does customs contact people by phone about detained parcels?',
    answer:
      'Indian customs (Central Board of Indirect Taxes and Customs) sends written notices for detained shipments  not unsolicited calls. Legitimate customs notifications come through the official India Post or courier tracking system, or via written notice to your address. If you are actually expecting an international shipment that is delayed, check the status directly on the courier company\'s website using your tracking number.',
  },
  {
    question: 'What is the typical fake customs scam script?',
    answer:
      'The caller claims: "A parcel in your name has been seized at [airport] customs. It contains [drugs/cash/illegal items]. You are linked to this shipment and will be arrested unless you pay a customs clearance fee immediately." They may also claim your Aadhaar was used to ship the parcel by someone else, creating plausible deniability pressure.',
  },
  {
    question: 'How do I verify if a customs notice is real?',
    answer:
      'Contact the Central Board of Indirect Taxes and Customs (CBIC) directly at cbic.gov.in or call 1800-1200-232 (CBIC helpline). If a specific courier shipment is involved, contact the courier (FedEx, DHL, Aramex) directly using the number on their official website  not the number given by the caller. Real customs issues never require immediate phone payment.',
  },
  {
    question: 'What should I do if I paid money in a fake customs scam?',
    answer:
      'Call 1930 immediately  the cybercrime helpline  to attempt transaction reversal. File a complaint at cybercrime.gov.in with the phone number, payment details, and any screenshots. Contact your bank to flag the receiving account. If the amount is large, file an FIR at your local police station  Indian courts have issued recovery orders in customs scam cases.',
  },
];

export default function FakeCustomsScamPage() {
  const schemas = [
    webPageSchema({
      name: 'Fake Customs Scam India 2025: Package Seizure Digital Arrest',
      description: 'How fake customs calls about seized parcels are used to extort money through digital arrest threats.',
      url: PAGE_PATH,
    }),
    breadcrumbListSchema([
      { name: 'Home', url: '/' },
      { name: 'Scams', url: '/scams' },
      { name: 'Digital Arrest', url: '/scams/digital-arrest' },
      { name: 'Fake Customs Scam', url: PAGE_PATH },
    ]),
    faqPageSchema(FAQ_ITEMS),
    {
      '@context': 'https://schema.org' as const,
      '@type': 'Article',
      headline: 'Fake Customs Scam India 2025: Package Seizure Digital Arrest',
      url: CANONICAL,
      author: organizationRef(),
      publisher: organizationRef(),
      datePublished: '2025-01-01',
      dateModified: new Date().toISOString().split('T')[0],
      inLanguage: 'en-IN',
      keywords: ['fake customs scam india', 'customs seizure scam india', 'parcel scam india', 'digital arrest customs india'],
      articleSection: 'Cybersecurity',
    },
  ];

  return (
    <DefaultLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schemas) }} />

      <section className="bg-gradient-to-b from-stone-50 to-white dark:from-stone-950/30 dark:to-gray-900 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-gray-400 mb-6">
            <Link href="/">Home</Link><span aria-hidden="true">/</span>
            <Link href="/scams">Scams</Link><span aria-hidden="true">/</span>
            <Link href="/scams/digital-arrest">Digital Arrest</Link><span aria-hidden="true">/</span>
            <span className="text-gray-600 dark:text-gray-300">Fake Customs Scam</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-stone-100 dark:bg-stone-900/60 text-stone-700 dark:text-stone-300 text-sm font-medium px-4 py-1.5 rounded-full mb-5">
            <span aria-hidden="true">📦</span><span>Digital Arrest Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-5 leading-tight">
            Fake Customs Scam India
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
            Callers claiming to be customs officers say a parcel in your name contains drugs or illegal cash  then demand a &ldquo;clearance fee&rdquo; to avoid arrest.
          </p>
        </div>
      </section>

      <div className="bg-red-600 dark:bg-red-700 py-4 px-4">
        <div className="max-w-4xl mx-auto text-white text-sm font-medium" data-speakable="true">
          <strong>Fact:</strong> Indian customs sends written notices  not unsolicited calls. Any caller threatening arrest over a seized parcel unless you pay immediately is a fraudster.
        </div>
      </div>

      <section className="py-14 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8" data-speakable="true">Two Common Variants</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-950 rounded-xl p-6 border border-gray-100 dark:border-gray-800">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Variant 1: You Are Expecting a Package</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">Scammers buy lists of online shoppers. They call and say your package from [Amazon/Meesho/international] has been flagged for containing prohibited goods. They demand a customs clearance payment to release it.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-950 rounded-xl p-6 border border-gray-100 dark:border-gray-800">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Variant 2: Your Aadhaar Was Misused</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">Caller claims someone used your Aadhaar to ship drugs or foreign currency. You are being investigated. This variant transitions quickly into a fake CBI/police officer demanding a deposit to &ldquo;clear your name.&rdquo;</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center" data-speakable="true">Red Flags</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              'Unsolicited call about a parcel you did not order',
              'Demand for immediate payment over the phone',
              'Caller transfers you to a "CBI officer" or "police"',
              '"Digital arrest"  told not to disconnect',
              'Payment demanded to a personal bank account or UPI ID',
              'Request to keep the call secret from family',
              'Claim that your Aadhaar was "misused by criminals"',
              'Urgency  "warrant will be issued in 1 hour"',
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
          <RelatedTopics currentPath={PAGE_PATH} clusterId="digital-arrest" />
        </div>
      </div>
    </DefaultLayout>
  );
}
