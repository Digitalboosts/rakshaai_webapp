import type { Metadata } from 'next';
import Link from 'next/link';
import DefaultLayout from '@/components/DefaultLayout';
import RelatedTopics from '@/components/RelatedTopics';
import { jsonLd, breadcrumbListSchema, faqPageSchema, webPageSchema, organizationRef } from '@/lib/seo/schema';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://rakshaai.co';
const PAGE_PATH = '/scams/digital-arrest/fake-trai-scam';
const CANONICAL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: 'Fake TRAI Scam India: SIM Disconnection Threat Calls',
  description:
    'How scammers impersonate TRAI officials threatening mobile disconnection. What TRAI actually does and how to verify any TRAI call.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Fake TRAI Scam India 2025 | RakshaAI',
    description: 'Fake TRAI calls threatening to disconnect your mobile number  how the scam works and why TRAI never makes such calls.',
    url: CANONICAL,
    type: 'article',
    siteName: 'RakshaAI',
    locale: 'en_IN',
      images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'RakshaAI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fake TRAI Scam India | RakshaAI',
    description: 'TRAI disconnection threat calls  how to identify fake TRAI impersonators.',
      images: ['/opengraph-image'],
  },
  robots: { index: true, follow: true, 'max-snippet': -1 } as Record<string, unknown>,
};

const FAQ_ITEMS = [
  {
    question: 'Does TRAI call people to warn about SIM disconnection?',
    answer:
      'No. TRAI (Telecom Regulatory Authority of India) is a regulatory body  it does not call individual subscribers about their mobile numbers. SIM disconnection is handled by your telecom operator (Jio, Airtel, BSNL, Vi) through formal written notices. Any call claiming to be from TRAI threatening disconnection is a scam.',
  },
  {
    question: 'What is the typical script of a fake TRAI scam call?',
    answer:
      'The caller says: "Your mobile number has been used to send fraudulent/illegal messages and your SIM will be disconnected in 2 hours unless you verify your details." They then transfer you to a fake "CBI/police cyber cell" officer who threatens arrest. The goal is to keep you on the call under pressure until you pay a "clearance fee" or share banking details.',
  },
  {
    question: 'How can I verify if a telecom notice is real?',
    answer:
      'Call your telecom operator directly using the number on their official website or app  not the number provided by the caller. Real network issues or KYC notices come via SMS to your registered number or written letter, not unsolicited calls. TRAI\'s public grievance number is 1800-11-0031  call them to verify any claimed TRAI communication.',
  },
  {
    question: 'What should I do if I receive a fake TRAI call?',
    answer:
      'Hang up immediately. Do not share any personal details, Aadhaar number, or banking information. Report the number at cybercrime.gov.in and call 1930 to report the scam. You can also report the number to your telecom operator as fraud  they have systems to block fraudulent callers.',
  },
];

export default function FakeTraiScamPage() {
  const schemas = [
    webPageSchema({
      name: 'Fake TRAI Scam India 2025: SIM Disconnection Threat Calls',
      description: 'How scammers impersonate TRAI officials to threaten SIM disconnection and extort money  recognition and prevention.',
      url: PAGE_PATH,
    }),
    breadcrumbListSchema([
      { name: 'Home', url: '/' },
      { name: 'Scams', url: '/scams' },
      { name: 'Digital Arrest', url: '/scams/digital-arrest' },
      { name: 'Fake TRAI Scam', url: PAGE_PATH },
    ]),
    faqPageSchema(FAQ_ITEMS),
    {
      '@context': 'https://schema.org' as const,
      '@type': 'Article',
      headline: 'Fake TRAI Scam India 2025: SIM Disconnection Threat Calls',
      url: CANONICAL,
      author: organizationRef(),
      publisher: organizationRef(),
      datePublished: '2025-01-01',
      dateModified: new Date().toISOString().split('T')[0],
      inLanguage: 'en-IN',
      keywords: ['fake trai scam india', 'trai disconnection scam', 'sim disconnection scam india', 'trai impersonation fraud'],
      articleSection: 'Cybersecurity',
    },
  ];

  return (
    <DefaultLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schemas) }} />

      <section className="bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/30 dark:to-gray-900 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-gray-400 mb-6">
            <Link href="/">Home</Link><span aria-hidden="true">/</span>
            <Link href="/scams">Scams</Link><span aria-hidden="true">/</span>
            <Link href="/scams/digital-arrest">Digital Arrest</Link><span aria-hidden="true">/</span>
            <span className="text-gray-600 dark:text-gray-300">Fake TRAI Scam</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-sm font-medium px-4 py-1.5 rounded-full mb-5">
            <span aria-hidden="true">📡</span><span>Digital Arrest Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-5 leading-tight">
            Fake TRAI Scam India
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
            Fraudsters call pretending to be TRAI officials, threatening your mobile number will be disconnected within hours due to &ldquo;illegal activity&rdquo;  then demand payment for &ldquo;clearance.&rdquo;
          </p>
        </div>
      </section>

      <div className="bg-red-600 dark:bg-red-700 py-4 px-4">
        <div className="max-w-4xl mx-auto text-white text-sm font-medium" data-speakable="true">
          <strong>Fact:</strong> TRAI never calls subscribers. It does not have the authority to directly disconnect SIMs. Any such call is a fraud  hang up immediately.
        </div>
      </div>

      <section className="py-14 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8" data-speakable="true">The Scam Script</h2>
          <div className="space-y-4">
            {[
              { title: 'The TRAI Officer', quote: '"Your mobile number has been flagged for sending 1,500 fraudulent messages. TRAI is disconnecting your number in 2 hours unless you cooperate with an investigation."' },
              { title: 'The Transfer', quote: '"I am connecting you to the Cyber Crime Cell / CBI for verification. Stay on the line."' },
              { title: 'The CBI/Police Officer', quote: '"Your Aadhaar has been linked to a money laundering account. You are under digital arrest. Do not disconnect  if you do, we will send officers to your address."' },
              { title: 'The Demand', quote: '"To close this case and avoid arrest, transfer ₹50,000 as a refundable security deposit to this account. You will receive it back after verification is complete."' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-950 rounded-xl p-5 border border-gray-100 dark:border-gray-800">
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-2">{item.title}</h3>
                <blockquote className="text-sm text-gray-500 dark:text-gray-400 italic border-l-2 border-red-300 dark:border-red-700 pl-4">&ldquo;{item.quote}&rdquo;</blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-3" data-speakable="true">
            {FAQ_ITEMS.map((item) => (
              <details key={item.question} className="group bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-5">
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

      <div className="px-4 py-8 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <RelatedTopics currentPath={PAGE_PATH} clusterId="digital-arrest" />
        </div>
      </div>
    </DefaultLayout>
  );
}
