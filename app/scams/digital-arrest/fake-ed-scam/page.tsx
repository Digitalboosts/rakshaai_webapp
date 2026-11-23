import type { Metadata } from 'next';
import Link from 'next/link';
import DefaultLayout from '@/components/DefaultLayout';
import RelatedTopics from '@/components/RelatedTopics';
import { jsonLd, breadcrumbListSchema, faqPageSchema, webPageSchema, organizationRef } from '@/lib/seo/schema';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://rakshaai.co';
const PAGE_PATH = '/scams/digital-arrest/fake-ed-scam';
const CANONICAL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: 'Fake ED Scam India: Enforcement Directorate Fraud',
  description:
    'How scammers impersonate ED officers with money laundering accusations  the digital arrest playbook and how to protect yourself.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Fake ED Scam India 2025 | RakshaAI',
    description: 'Fake Enforcement Directorate calls threatening money laundering charges  how the digital arrest scam works.',
    url: CANONICAL,
    type: 'article',
    siteName: 'RakshaAI',
    locale: 'en_IN',
      images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'RakshaAI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fake ED Scam India | RakshaAI',
    description: 'Scammers impersonating ED officers threaten money laundering charges  how to recognise and respond.',
      images: ['/opengraph-image'],
  },
  robots: { index: true, follow: true, 'max-snippet': -1 } as Record<string, unknown>,
};

const FAQ_ITEMS = [
  {
    question: 'Does the Enforcement Directorate contact people by phone or video call?',
    answer:
      'No. The Enforcement Directorate conducts investigations through formal written notices served in person or by registered post  never via WhatsApp video calls, Skype, or phone calls. If someone calls claiming to be from the ED with a money laundering accusation, it is definitively a scam. Real ED notices have an official letterhead, case number, and are signed by an officer.',
  },
  {
    question: 'What is "digital arrest" and is it a real legal concept?',
    answer:
      '"Digital arrest" has no legal basis in Indian law. The term was invented by scammers to create fear. No Indian law enforcement agency  including the CBI, ED, Income Tax department, RBI, or police  has the authority to place anyone under "digital arrest" via video call. Prime Minister Modi specifically warned about this scam in his Mann Ki Baat address in October 2024.',
  },
  {
    question: 'What are the warning signs of a fake ED call?',
    answer:
      'Warning signs: (1) Unsolicited call or WhatsApp message from someone claiming to be from the ED. (2) Accusation of money laundering, terrorism financing, or hawala transactions. (3) Demand to stay on video call without disconnecting. (4) Request for immediate transfer of "bail money" or "security deposit" to avoid arrest. (5) Threat that your family will be arrested if you disconnect.',
  },
  {
    question: 'What should I do if I receive a fake ED call?',
    answer:
      'Hang up immediately. The ED does not call citizens unannounced. If you are genuinely concerned, verify by calling the official ED helpline at 011-23379020 or visiting enforcement.gov.in. Report the scam call at cybercrime.gov.in and call 1930. Do not pay any amount  no government agency demands payment to avoid arrest over a phone call.',
  },
];

export default function FakeEdScamPage() {
  const schemas = [
    webPageSchema({
      name: 'Fake ED (Enforcement Directorate) Scam India 2025: Digital Arrest',
      description: 'How scammers impersonate ED officers to extort money through digital arrest threats  recognition and response.',
      url: PAGE_PATH,
    }),
    breadcrumbListSchema([
      { name: 'Home', url: '/' },
      { name: 'Scams', url: '/scams' },
      { name: 'Digital Arrest', url: '/scams/digital-arrest' },
      { name: 'Fake ED Scam', url: PAGE_PATH },
    ]),
    faqPageSchema(FAQ_ITEMS),
    {
      '@context': 'https://schema.org' as const,
      '@type': 'Article',
      headline: 'Fake ED Scam India 2025: Digital Arrest by Fake Enforcement Directorate',
      url: CANONICAL,
      author: organizationRef(),
      publisher: organizationRef(),
      datePublished: '2025-01-01',
      dateModified: new Date().toISOString().split('T')[0],
      inLanguage: 'en-IN',
      keywords: ['fake ed scam india', 'enforcement directorate scam', 'digital arrest ed india', 'money laundering scam call india'],
      articleSection: 'Cybersecurity',
    },
  ];

  return (
    <DefaultLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schemas) }} />

      <section className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-950/40 dark:to-gray-900 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-gray-400 mb-6">
            <Link href="/">Home</Link><span aria-hidden="true">/</span>
            <Link href="/scams">Scams</Link><span aria-hidden="true">/</span>
            <Link href="/scams/digital-arrest">Digital Arrest</Link><span aria-hidden="true">/</span>
            <span className="text-gray-600 dark:text-gray-300">Fake ED Scam</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-slate-100 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 text-sm font-medium px-4 py-1.5 rounded-full mb-5">
            <span aria-hidden="true">🏛️</span><span>Digital Arrest Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-5 leading-tight">
            Fake ED Scam India
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
            Fraudsters impersonating Enforcement Directorate officers call victims with money laundering accusations  threatening immediate arrest unless a &ldquo;security deposit&rdquo; is paid.
          </p>
        </div>
      </section>

      <div className="bg-red-600 dark:bg-red-700 py-4 px-4">
        <div className="max-w-4xl mx-auto text-white text-sm font-medium" data-speakable="true">
          <strong>Fact:</strong> The Enforcement Directorate never contacts suspects via phone or video call. &ldquo;Digital arrest&rdquo; has no legal basis in India. Hang up immediately.
        </div>
      </div>

      <section className="py-14 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8" data-speakable="true">How the Fake ED Scam Works</h2>
          <div className="space-y-4">
            {[
              { phase: 'Initial Contact', desc: 'You receive a call from an unknown number (often with a +91 prefix or spoofed to look official). The caller claims to be an ED officer and states that your Aadhaar number or mobile number is linked to a money laundering or hawala transaction.' },
              { phase: 'Fear Creation', desc: 'They provide fake case numbers, mention specific rupee amounts, and name real ED investigation units. Some send forged documents on WhatsApp with official-looking letterheads and QR codes.' },
              { phase: '"Digital Arrest" Demand', desc: 'You are told that you are under "digital arrest" and must remain on a video call (WhatsApp, Skype, or Google Meet) and must not speak to anyone, including family, until the "investigation" is complete.' },
              { phase: 'Extortion', desc: 'After hours of psychological pressure, they demand a "refundable security deposit" of ₹50,000–₹20 lakh to "freeze" the case. Once paid, a new charge appears requiring more payment. The cycle continues until the victim stops paying.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-gray-50 dark:bg-gray-950 rounded-xl p-5 border border-gray-100 dark:border-gray-800">
                <div className="flex-shrink-0 bg-slate-100 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 text-xs font-bold px-2.5 py-1 rounded-lg h-fit whitespace-nowrap">Phase {i + 1}</div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{item.phase}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6" data-speakable="true">Verify a Real ED Notice</h2>
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-800">
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Real Enforcement Directorate communications are always in writing. To verify:</p>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex gap-2"><span className="text-green-600 font-bold" aria-hidden="true">✓</span> Call ED official helpline: 011-23379020</li>
              <li className="flex gap-2"><span className="text-green-600 font-bold" aria-hidden="true">✓</span> Visit enforcement.gov.in for official contact details</li>
              <li className="flex gap-2"><span className="text-green-600 font-bold" aria-hidden="true">✓</span> Consult a lawyer before responding to any notice</li>
              <li className="flex gap-2"><span className="text-red-500 font-bold" aria-hidden="true">✗</span> Never make any payment over a phone call</li>
              <li className="flex gap-2"><span className="text-red-500 font-bold" aria-hidden="true">✗</span> Never stay on a forced video call  hang up</li>
            </ul>
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
