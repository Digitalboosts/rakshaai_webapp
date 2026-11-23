import type { Metadata } from 'next';
import Link from 'next/link';
import DefaultLayout from '@/components/DefaultLayout';
import RelatedTopics from '@/components/RelatedTopics';
import { jsonLd, breadcrumbListSchema, faqPageSchema, webPageSchema, organizationRef } from '@/lib/seo/schema';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://rakshaai.co';
const PAGE_PATH = '/scams/whatsapp-scams/lottery-scam';
const CANONICAL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: 'WhatsApp Lottery Scam India: Fake KBC Prize Fraud',
  description:
    'How fake lottery and prize scams are delivered via WhatsApp in India  KBC fraud, Amazon lottery, government scheme prizes  warning signs and how to verify.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'WhatsApp Lottery Scam India 2025 | RakshaAI',
    description: 'Fake KBC, Amazon, and government prize notifications via WhatsApp  how they demand fees before releasing fictional prizes.',
    url: CANONICAL,
    type: 'article',
    siteName: 'RakshaAI',
    locale: 'en_IN',
      images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'RakshaAI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WhatsApp Lottery Scam India | RakshaAI',
    description: 'Fake KBC and prize notifications via WhatsApp  how the fee trap works.',
      images: ['/opengraph-image'],
  },
  robots: { index: true, follow: true, 'max-snippet': -1 } as Record<string, unknown>,
};

const FAQ_ITEMS = [
  {
    question: 'Is a WhatsApp message saying I won KBC real?',
    answer:
      'No  it is definitively a scam. KBC (Kaun Banega Crorepati) does not select winners by phone lottery or contact them via unsolicited WhatsApp messages. All legitimate KBC participants register through the official Sony LIV app. Any WhatsApp message claiming you won KBC should be ignored and reported.',
  },
  {
    question: 'What are common fake lottery scams on WhatsApp?',
    answer:
      'Common variants: (1) KBC lottery  "Your number won ₹25 lakh in KBC". (2) Amazon India prize  "You are the 1 crore customer, claim your reward". (3) Government scheme prizes  "PM Modi scheme beneficiary, claim ₹50,000". (4) BSNL/Jio lottery  "Your SIM number won ₹10 lakh". (5) International lottery  "UK National Lottery winner". All follow the same pattern: pay a fee to claim a prize that does not exist.',
  },
  {
    question: 'What should I do if I received a fake prize WhatsApp?',
    answer:
      'Do not respond or pay any amount. Block and report the number within WhatsApp (three dots → Report). Report the number at rakshaai.co/phone-number-checker. File a complaint at cybercrime.gov.in if you were targeted repeatedly. If you already paid, call 1930 immediately.',
  },
  {
    question: 'How do I verify if an Amazon or company prize notification is real?',
    answer:
      'Contact the company directly through their official website or app  never through phone numbers or WhatsApp links provided in the message. Amazon India official customer service: amazon.in/help. Real prize notifications from companies come through their official apps or registered email addresses, never unsolicited WhatsApp messages.',
  },
];

export default function WhatsAppLotteryScamPage() {
  const schemas = [
    webPageSchema({
      name: 'WhatsApp Lottery Scam India 2025: Fake KBC & Prize Fraud',
      description: 'How fake prize and lottery notifications via WhatsApp target Indians  warning signs and verification steps.',
      url: PAGE_PATH,
    }),
    breadcrumbListSchema([
      { name: 'Home', url: '/' },
      { name: 'Scams', url: '/scams' },
      { name: 'WhatsApp Scams', url: '/scams/whatsapp-scams' },
      { name: 'Lottery Scam', url: PAGE_PATH },
    ]),
    faqPageSchema(FAQ_ITEMS),
    {
      '@context': 'https://schema.org' as const,
      '@type': 'Article',
      headline: 'WhatsApp Lottery Scam India 2025: Fake KBC & Prize Notifications',
      url: CANONICAL,
      author: organizationRef(),
      publisher: organizationRef(),
      datePublished: '2025-01-01',
      dateModified: new Date().toISOString().split('T')[0],
      inLanguage: 'en-IN',
      keywords: ['kbc lottery scam whatsapp', 'fake prize whatsapp india', 'amazon lottery scam india', 'whatsapp lottery fraud'],
      articleSection: 'Cybersecurity',
    },
  ];

  return (
    <DefaultLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schemas) }} />

      <section className="bg-gradient-to-b from-yellow-50 to-white dark:from-yellow-950/20 dark:to-gray-900 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-gray-400 mb-6">
            <Link href="/">Home</Link><span aria-hidden="true">/</span>
            <Link href="/scams">Scams</Link><span aria-hidden="true">/</span>
            <Link href="/scams/whatsapp-scams">WhatsApp Scams</Link><span aria-hidden="true">/</span>
            <span className="text-gray-600 dark:text-gray-300">Lottery Scam</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-300 text-sm font-medium px-4 py-1.5 rounded-full mb-5">
            <span aria-hidden="true">🎰</span><span>WhatsApp Fraud Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-5 leading-tight">
            WhatsApp Lottery Scam India
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
            Fake KBC prizes, Amazon rewards, and government scheme notifications via WhatsApp  all designed to collect &ldquo;processing fees&rdquo; for prizes that do not exist.
          </p>
        </div>
      </section>

      <div className="bg-red-600 dark:bg-red-700 py-4 px-4">
        <div className="max-w-4xl mx-auto text-white text-sm" data-speakable="true">
          <strong>Important:</strong> No legitimate lottery, game show, or company contacts prize winners via unsolicited WhatsApp. You cannot win a prize you never entered. Any fee to &ldquo;claim a prize&rdquo; is a scam.
        </div>
      </div>

      <section className="py-14 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center" data-speakable="true">
            Common WhatsApp Lottery Scam Types
          </h2>
          <div className="space-y-4">
            {[
              { name: 'KBC Lottery Fraud', badge: 'Most Common', desc: 'Message claims your phone number was selected in a KBC lottery for ₹25 lakh–₹1 crore. A "processing fee" or "government tax" must be paid to release the prize. KBC communicates exclusively through the Sony LIV app.', link: '/scams/phone-scams/kbc-lottery-scam' },
              { name: 'Amazon India Prize Scam', badge: 'High Volume', desc: '"You are Amazon\'s 1 crore customer  claim your prize of ₹50,000 or a mobile phone." Victims are directed to fake Amazon-branded payment pages. Real Amazon India never sends prize notifications via WhatsApp.', link: null },
              { name: 'Government Scheme Prize', badge: 'Growing', desc: 'Messages using PM, Aadhaar, or government scheme branding claim the victim is eligible for ₹50,000–₹2 lakh under a scheme. Aadhaar numbers and bank details are collected, then a "registration fee" demanded.', link: null },
              { name: 'BSNL / Jio Lottery', badge: 'Common', desc: '"Your mobile number won ₹10 lakh in BSNL/Jio\'s anniversary draw." Victims are asked to call a number where fake customer care agents collect personal and payment details.', link: null },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-950 rounded-xl p-5 border border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="font-semibold text-gray-900 dark:text-white">{item.name}</h3>
                  <span className="text-xs bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-2 py-0.5 rounded-full">{item.badge}</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{item.desc}</p>
                {item.link && <Link href={item.link} className="text-xs text-indigo-600 dark:text-indigo-400 mt-2 inline-block hover:underline">Full guide →</Link>}
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
          <RelatedTopics currentPath={PAGE_PATH} clusterId="whatsapp-scams" />
        </div>
      </div>
    </DefaultLayout>
  );
}
