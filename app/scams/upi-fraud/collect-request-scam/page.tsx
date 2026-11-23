import type { Metadata } from 'next';
import Link from 'next/link';
import DefaultLayout from '@/components/DefaultLayout';
import RelatedTopics from '@/components/RelatedTopics';
import { jsonLd, breadcrumbListSchema, faqPageSchema, webPageSchema, organizationRef } from '@/lib/seo/schema';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://rakshaai.co';
const PAGE_PATH = '/scams/upi-fraud/collect-request-scam';
const CANONICAL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: 'UPI Collect Request Scam India 2026: How It Works',
  description:
    'How scammers send UPI collect requests disguised as payment receipts  victims approve and lose money. Warning signs and prevention.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'UPI Collect Request Scam India 2026 | RakshaAI',
    description: 'Fake UPI collect requests that look like incoming payments  entering your PIN sends money, not receives it.',
    url: CANONICAL,
    type: 'article',
    siteName: 'RakshaAI',
    locale: 'en_IN',
      images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'RakshaAI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UPI Collect Request Scam India | RakshaAI',
    description: 'UPI collect requests trick you into sending money instead of receiving  how this scam works.',
      images: ['/opengraph-image'],
  },
  robots: { index: true, follow: true, 'max-snippet': -1 } as Record<string, unknown>,
};

const FAQ_ITEMS = [
  {
    question: 'Do I need to enter my UPI PIN to receive money?',
    answer:
      'No  you never need to enter your UPI PIN to receive money. Your UPI PIN is only required to send or authorise payments. If anyone asks you to enter your PIN to "accept" or "claim" a payment, it is definitively a fraud  you are authorising a debit, not a credit.',
  },
  {
    question: 'What is a UPI collect request and how is it different from a payment?',
    answer:
      'A UPI collect request is a demand for payment initiated by another party  they are asking you to pay them. It appears in your UPI app under "Collect Requests" or "Pending Requests". Entering your PIN approves payment to them. A payment received requires no action from you  it arrives automatically in your account.',
  },
  {
    question: 'How do scammers use collect requests in OLX and marketplace scams?',
    answer:
      'A buyer or seller on OLX or Facebook Marketplace sends a collect request saying "I am sending you ₹5,000 for the item  please enter your PIN to confirm receipt." The victim enters their PIN thinking they are confirming receipt of money, but they are actually authorising a payment of ₹5,000 to the scammer. Always verify a credit in your bank account before releasing goods.',
  },
  {
    question: 'What should I do if I accidentally approved a collect request?',
    answer:
      'Act immediately: (1) Call 1930  the national cybercrime helpline  to report and attempt transaction reversal. (2) Contact your bank to flag the beneficiary account. (3) File a complaint at cybercrime.gov.in. (4) Report the UPI ID at rakshaai.co. Time is critical  the faster you report, the higher the chance of recovery.',
  },
];

export default function CollectRequestScamPage() {
  const schemas = [
    webPageSchema({
      name: 'UPI Collect Request Scam India 2026: Fake Payment Requests',
      description: 'How UPI collect request scams trick victims into sending money thinking they are receiving  warning signs and prevention.',
      url: PAGE_PATH,
    }),
    breadcrumbListSchema([
      { name: 'Home', url: '/' },
      { name: 'Scams', url: '/scams' },
      { name: 'UPI Fraud', url: '/scams/upi-fraud' },
      { name: 'Collect Request Scam', url: PAGE_PATH },
    ]),
    faqPageSchema(FAQ_ITEMS),
    {
      '@context': 'https://schema.org' as const,
      '@type': 'Article',
      headline: 'UPI Collect Request Scam India 2026: Fake Payment Requests',
      url: CANONICAL,
      author: organizationRef(),
      publisher: organizationRef(),
      datePublished: '2026-01-01',
      dateModified: new Date().toISOString().split('T')[0],
      inLanguage: 'en-IN',
      keywords: ['upi collect request scam', 'upi fraud india 2026', 'fake upi payment india', 'olx upi scam india'],
      articleSection: 'Cybersecurity',
    },
  ];

  return (
    <DefaultLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schemas) }} />

      <section className="bg-gradient-to-b from-purple-50 to-white dark:from-purple-950/20 dark:to-gray-900 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-gray-400 mb-6">
            <Link href="/">Home</Link><span aria-hidden="true">/</span>
            <Link href="/scams">Scams</Link><span aria-hidden="true">/</span>
            <Link href="/scams/upi-fraud">UPI Fraud</Link><span aria-hidden="true">/</span>
            <span className="text-gray-600 dark:text-gray-300">Collect Request Scam</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 text-sm font-medium px-4 py-1.5 rounded-full mb-5">
            <span aria-hidden="true">💸</span><span>UPI Fraud Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-5 leading-tight">
            UPI Collect Request Scam
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
            A collect request looks like an incoming payment  but entering your UPI PIN sends money, not receives it. One of the most common UPI frauds in India.
          </p>
        </div>
      </section>

      <div className="bg-red-600 dark:bg-red-700 py-4 px-4">
        <div className="max-w-4xl mx-auto text-white text-sm font-medium" data-speakable="true">
          <strong>Key rule:</strong> You NEVER need to enter your UPI PIN to receive money. Entering your PIN always means you are sending money. Decline all unexpected collect requests.
        </div>
      </div>

      <section className="py-14 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8" data-speakable="true">Send vs. Receive: Know the Difference</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-green-50 dark:bg-green-950/30 rounded-xl p-6 border border-green-200 dark:border-green-900/40">
              <h3 className="font-bold text-green-800 dark:text-green-300 mb-3">Receiving Money</h3>
              <ul className="space-y-2 text-sm text-green-700 dark:text-green-400">
                <li className="flex gap-2"><span aria-hidden="true">✓</span> No action required from you</li>
                <li className="flex gap-2"><span aria-hidden="true">✓</span> Money arrives automatically</li>
                <li className="flex gap-2"><span aria-hidden="true">✓</span> No PIN entry needed</li>
                <li className="flex gap-2"><span aria-hidden="true">✓</span> You get a credit notification</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-950/30 rounded-xl p-6 border border-red-200 dark:border-red-900/40">
              <h3 className="font-bold text-red-800 dark:text-red-300 mb-3">Collect Request (Send Money)</h3>
              <ul className="space-y-2 text-sm text-red-700 dark:text-red-400">
                <li className="flex gap-2"><span aria-hidden="true">✗</span> Requires your approval</li>
                <li className="flex gap-2"><span aria-hidden="true">✗</span> Requires your UPI PIN</li>
                <li className="flex gap-2"><span aria-hidden="true">✗</span> Debits money from your account</li>
                <li className="flex gap-2"><span aria-hidden="true">✗</span> You get a debit notification</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8" data-speakable="true">Common Scenarios</h2>
          <div className="space-y-4">
            {[
              { scenario: 'OLX / Marketplace Buyer', desc: 'Buyer sends a collect request saying "I am sending ₹X  please accept." Victim enters PIN to "accept" and loses money. Always check actual bank balance before handing over goods.' },
              { scenario: 'Fake Refund from E-commerce', desc: '"Your refund of ₹1,200 is being processed  enter PIN to confirm your account." No refund requires PIN confirmation. Real refunds are processed automatically by the merchant.' },
              { scenario: 'UPI App "Verification"', desc: '"Your PhonePe/GPay account needs verification  enter PIN to confirm." No UPI app ever asks for your PIN to verify  only to authorise payments.' },
              { scenario: 'Military / Government Purchase', desc: 'Scammer posing as an army officer buys an item from you but sends a collect request instead of payment. They explain it as a "government payment system requirement."' },
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-gray-900 rounded-xl p-5 border border-gray-100 dark:border-gray-800">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{item.scenario}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{item.desc}</p>
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
          <RelatedTopics currentPath={PAGE_PATH} clusterId="upi-fraud" />
        </div>
      </div>
    </DefaultLayout>
  );
}
