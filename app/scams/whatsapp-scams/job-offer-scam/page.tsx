import type { Metadata } from 'next';
import Link from 'next/link';
import DefaultLayout from '@/components/DefaultLayout';
import RelatedTopics from '@/components/RelatedTopics';
import { jsonLd, breadcrumbListSchema, faqPageSchema, webPageSchema, organizationRef } from '@/lib/seo/schema';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://rakshaai.co';
const PAGE_PATH = '/scams/whatsapp-scams/job-offer-scam';
const CANONICAL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: 'WhatsApp Job Offer Scam India: Fake Part-Time Tasks',
  description:
    'How fake work-from-home job scams operate via WhatsApp in India  YouTube liking tasks, hotel review jobs, and "task completion" deposits. Warning signs and how to report.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'WhatsApp Job Offer Scam India 2025 | RakshaAI',
    description: 'Fake part-time job offers via WhatsApp  liking videos, rating hotels  build trust then demand a deposit that is never returned.',
    url: CANONICAL,
    type: 'article',
    siteName: 'RakshaAI',
    locale: 'en_IN',
      images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'RakshaAI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WhatsApp Job Scam India | RakshaAI',
    description: 'How fake WhatsApp job offers work and how to identify them before losing money.',
      images: ['/opengraph-image'],
  },
  robots: { index: true, follow: true, 'max-snippet': -1 } as Record<string, unknown>,
};

const FAQ_ITEMS = [
  {
    question: 'Is a WhatsApp job offer for liking YouTube videos real?',
    answer:
      'No. Offers to earn money by liking YouTube videos, subscribing to channels, or rating hotels via WhatsApp are universally scams. Legitimate companies do not hire via unsolicited WhatsApp messages. The initial small payments (₹100–₹500) are designed to build trust before you are asked for a larger "deposit" to access higher-paying tasks.',
  },
  {
    question: 'What is a task-based job scam?',
    answer:
      'A task-based job scam involves a fraudster offering simple online tasks (liking posts, writing reviews, rating hotels) for high per-task pay. After completing initial tasks and receiving small payments, you are invited to a "premium level" requiring a deposit of ₹2,000–₹50,000. Once paid, no further payments arrive and the contact disappears.',
  },
  {
    question: 'How do I verify if a work-from-home job is legitimate?',
    answer:
      'Verify: (1) Does the company have an official website and MCA/GST registration? Check at mca.gov.in. (2) Is there a formal employment contract? (3) Does the job require upfront payment?  Legitimate jobs never do. (4) Is the salary realistic for the described work? (5) Does the recruiter use official company email, not Gmail/WhatsApp? Any job requiring upfront payment is definitively a scam.',
  },
  {
    question: 'What should I do if I paid money for a WhatsApp job scam?',
    answer:
      'Act immediately: (1) Call 1930  cybercrime helpline  to report and attempt transaction reversal. (2) File a complaint at cybercrime.gov.in with payment screenshots and the scammer\'s number. (3) Contact your bank to flag the beneficiary. (4) Report the phone number at rakshaai.co/phone-number-checker.',
  },
];

export default function WhatsAppJobOfferScamPage() {
  const schemas = [
    webPageSchema({
      name: 'WhatsApp Job Offer Scam India 2025: Fake Part-Time Tasks',
      description: 'How fake work-from-home job scams operate via WhatsApp in India with warning signs and prevention.',
      url: PAGE_PATH,
    }),
    breadcrumbListSchema([
      { name: 'Home', url: '/' },
      { name: 'Scams', url: '/scams' },
      { name: 'WhatsApp Scams', url: '/scams/whatsapp-scams' },
      { name: 'Job Offer Scam', url: PAGE_PATH },
    ]),
    faqPageSchema(FAQ_ITEMS),
    {
      '@context': 'https://schema.org' as const,
      '@type': 'Article',
      headline: 'WhatsApp Job Offer Scam India 2025: Fake Part-Time Tasks & YouTube Liking Fraud',
      url: CANONICAL,
      author: organizationRef(),
      publisher: organizationRef(),
      datePublished: '2025-01-01',
      dateModified: new Date().toISOString().split('T')[0],
      inLanguage: 'en-IN',
      keywords: ['whatsapp job scam india', 'youtube task scam india', 'part time job scam whatsapp', 'fake work from home india'],
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
            <Link href="/scams/whatsapp-scams">WhatsApp Scams</Link><span aria-hidden="true">/</span>
            <span className="text-gray-600 dark:text-gray-300">Job Offer Scam</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-sm font-medium px-4 py-1.5 rounded-full mb-5">
            <span aria-hidden="true">💼</span><span>WhatsApp Fraud Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-5 leading-tight">
            WhatsApp Job Offer Scam India
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
            Fake work-from-home jobs via WhatsApp  liking YouTube videos, rating hotels, completing tasks  collect a small deposit then disappear.
          </p>
          <div className="flex flex-wrap gap-6 mt-6">
            {[{ v: '31%', l: 'of WhatsApp fraud cases' }, { v: '₹18,000', l: 'average per-victim loss' }, { v: '3–7 days', l: 'trust-building phase' }].map(s => (
              <div key={s.l} className="text-center">
                <div className="text-2xl font-bold text-blue-700 dark:text-blue-400">{s.v}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 max-w-[110px]">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8" data-speakable="true">How the Scam Works</h2>
          <ol className="space-y-4">
            {[
              { stage: 'Stage 1', title: 'Unsolicited Contact', desc: 'You receive a WhatsApp message from an unknown number: "Hello, I am from [Company Name] HR. We have a part-time work-from-home opportunity for you  earn ₹800–₹1,500 per day completing simple online tasks."' },
              { stage: 'Stage 2', title: 'Simple Tasks & Small Payments', desc: 'Initial tasks are genuinely simple: like 5 YouTube videos, subscribe to 3 channels, submit screenshots. You receive ₹200–₹500. This payment is real  it is bait.' },
              { stage: 'Stage 3', title: 'The Upgrade', desc: 'You are invited to a "Level 2" or "Premium Task Group" with ₹3,000–₹5,000 per day earnings. To access it, you must pay a "refundable security deposit" of ₹2,000–₹10,000.' },
              { stage: 'Stage 4', title: 'Escalation', desc: 'If you pay, you receive a few more small payments. Then a "system error" requires another deposit to release earnings. Losses compound until you stop paying or the contact blocks you.' },
            ].map((item, i) => (
              <li key={i} className="flex gap-4 bg-gray-50 dark:bg-gray-950 rounded-xl p-5 border border-gray-100 dark:border-gray-800">
                <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold px-2.5 py-1.5 rounded-lg h-fit">{item.stage}</div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
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
