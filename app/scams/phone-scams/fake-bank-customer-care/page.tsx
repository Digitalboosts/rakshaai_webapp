import type { Metadata } from 'next';
import Link from 'next/link';
import DefaultLayout from '@/components/DefaultLayout';
import RelatedTopics from '@/components/RelatedTopics';
import { jsonLd, breadcrumbListSchema, faqPageSchema, webPageSchema, organizationRef } from '@/lib/seo/schema';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://rakshaai.co';
const PAGE_PATH = '/scams/phone-scams/fake-bank-customer-care';
const CANONICAL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: 'Fake Bank Customer Care Scam India: How It Works',
  description:
    'How fake bank helpline numbers listed on Google trap Indians  fraudsters impersonating SBI, HDFC, ICICI customer care. What to do.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Fake Bank Customer Care Scam India | RakshaAI',
    description: 'Fake SBI, HDFC, and ICICI helpline numbers on Google  how they impersonate bank customer care and steal your credentials.',
    url: CANONICAL,
    type: 'article',
    siteName: 'RakshaAI',
    locale: 'en_IN',
      images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'RakshaAI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fake Bank Customer Care India | RakshaAI',
    description: 'Fraudulent bank helplines on Google  how to find the real number and avoid this scam.',
      images: ['/opengraph-image'],
  },
  robots: { index: true, follow: true, 'max-snippet': -1 } as Record<string, unknown>,
};

const FAQ_ITEMS = [
  {
    question: 'How do I find the real customer care number for my bank?',
    answer:
      'Only use the phone number printed on the back of your bank debit or credit card. Alternatively, log in to your bank\'s official mobile app and find the contact number in the app settings or "Help" section. Never search Google for bank customer care numbers  fraudulent listings appear in search results and can be indistinguishable from legitimate ones.',
  },
  {
    question: 'Why are fake bank helpline numbers appearing on Google?',
    answer:
      'Fraudsters list fake numbers in Google Business Profiles, paid ads, and SEO-optimised websites. Google\'s systems do not verify that a listed phone number belongs to the actual business. Victims searching "SBI customer care number" or "HDFC helpline" may call a fraudster posing as a bank representative.',
  },
  {
    question: 'What information should I never give to a customer care call?',
    answer:
      'Never share: (1) Your full debit/credit card number. (2) CVV (3-digit code on the back of the card). (3) Net banking password. (4) Any OTP received on your phone. (5) UPI PIN. A legitimate bank agent can verify your identity using your registered mobile number and date of birth  they never need card details, CVV, OTP, or PIN.',
  },
  {
    question: 'What should I do if I called a fake bank number and shared details?',
    answer:
      'Act immediately: (1) Call your bank\'s real number (from the card back) to block your card and account. (2) Call 1930  the national cybercrime helpline  to report the fraud and attempt transaction freezing. (3) Change your internet banking password immediately from a trusted device. (4) File a complaint at cybercrime.gov.in with the fraudulent number and conversation details.',
  },
];

export default function FakeBankCustomerCarePage() {
  const schemas = [
    webPageSchema({
      name: 'Fake Bank Customer Care Scam India 2025: Google Number Fraud',
      description: 'How fake bank helpline numbers on Google lead to account takeovers  how to identify real bank contacts.',
      url: PAGE_PATH,
    }),
    breadcrumbListSchema([
      { name: 'Home', url: '/' },
      { name: 'Scams', url: '/scams' },
      { name: 'Phone Scams', url: '/scams/phone-scams' },
      { name: 'Fake Bank Customer Care', url: PAGE_PATH },
    ]),
    faqPageSchema(FAQ_ITEMS),
    {
      '@context': 'https://schema.org' as const,
      '@type': 'Article',
      headline: 'Fake Bank Customer Care Scam India 2025: Google Helpline Number Fraud',
      url: CANONICAL,
      author: organizationRef(),
      publisher: organizationRef(),
      datePublished: '2025-01-01',
      dateModified: new Date().toISOString().split('T')[0],
      inLanguage: 'en-IN',
      keywords: ['fake bank customer care india', 'sbi customer care scam', 'fake bank helpline google', 'bank fraud phone call india'],
      articleSection: 'Cybersecurity',
    },
  ];

  return (
    <DefaultLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schemas) }} />

      <section className="bg-gradient-to-b from-orange-50 to-white dark:from-orange-950/20 dark:to-gray-900 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-gray-400 mb-6">
            <Link href="/">Home</Link><span aria-hidden="true">/</span>
            <Link href="/scams">Scams</Link><span aria-hidden="true">/</span>
            <Link href="/scams/phone-scams">Phone Scams</Link><span aria-hidden="true">/</span>
            <span className="text-gray-600 dark:text-gray-300">Fake Bank Customer Care</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300 text-sm font-medium px-4 py-1.5 rounded-full mb-5">
            <span aria-hidden="true">🏦</span><span>Phone Scam Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-5 leading-tight">
            Fake Bank Customer Care Scam
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
            Fraudsters list fake SBI, HDFC, and ICICI helpline numbers on Google. When you call to solve a real banking problem, they impersonate bank staff and steal your account access.
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <Link href="/phone-number-checker" className="inline-block bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors">
              Check a Phone Number <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <div className="bg-red-600 dark:bg-red-700 py-4 px-4">
        <div className="max-w-4xl mx-auto text-white text-sm font-medium" data-speakable="true">
          <strong>Rule:</strong> Never Google your bank&apos;s customer care number. Only use the number printed on the back of your card or inside your bank&apos;s official app.
        </div>
      </div>

      <section className="py-14 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8" data-speakable="true">How the Scam Works</h2>
          <ol className="space-y-4">
            {[
              { stage: 'Step 1', title: 'You Search Google', desc: 'You have a banking problem  a blocked card, a failed UPI transaction, or a pending refund. You search "SBI customer care number" or "HDFC helpline India" on Google.' },
              { stage: 'Step 2', title: 'Fake Number Appears', desc: 'A fraudulent website, Google Business listing, or paid ad shows a fake helpline number. The page looks professional with the bank\'s logo and correct address details.' },
              { stage: 'Step 3', title: 'You Call a Fraudster', desc: 'The fraudster answers professionally: "Thank you for calling SBI customer care, how may I help you today?" They sound legitimate because they have practised scripts for every banking scenario.' },
              { stage: 'Step 4', title: 'Identity "Verification"', desc: 'They ask you to "verify" your identity with your account number, card number, and date of birth. Some request your net banking username  all to gain account access.' },
              { stage: 'Step 5', title: 'OTP Capture', desc: 'They initiate a transaction or password reset from their end, triggering an OTP to your phone. They then ask for the OTP "to verify your identity"  completing the account takeover.' },
            ].map((item, i) => (
              <li key={i} className="flex gap-4 bg-gray-50 dark:bg-gray-950 rounded-xl p-5 border border-gray-100 dark:border-gray-800">
                <div className="flex-shrink-0 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs font-bold px-2.5 py-1.5 rounded-lg h-fit">{item.stage}</div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-10 px-4 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6" data-speakable="true">Real Bank Customer Care Numbers</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { bank: 'SBI (State Bank of India)', number: '1800-11-2211 (toll-free)', note: 'Also: back of your SBI debit card' },
              { bank: 'HDFC Bank', number: '1800-202-6161 (toll-free)', note: 'Also: back of your HDFC debit card' },
              { bank: 'ICICI Bank', number: '1800-102-4242 (toll-free)', note: 'Also: iMobile Pay app → Help' },
              { bank: 'Axis Bank', number: '1800-419-5959 (toll-free)', note: 'Also: back of your Axis debit card' },
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-100 dark:border-gray-800">
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{item.bank}</h3>
                <p className="text-sm font-mono text-green-700 dark:text-green-400">{item.number}</p>
                <p className="text-xs text-gray-400 mt-1">{item.note}</p>
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
          <RelatedTopics currentPath={PAGE_PATH} clusterId="phone-scams" />
        </div>
      </div>
    </DefaultLayout>
  );
}
