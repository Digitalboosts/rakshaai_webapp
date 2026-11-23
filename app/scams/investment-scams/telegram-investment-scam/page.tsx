import type { Metadata } from 'next';
import Link from 'next/link';
import DefaultLayout from '@/components/DefaultLayout';
import RelatedTopics from '@/components/RelatedTopics';
import { jsonLd, breadcrumbListSchema, faqPageSchema, webPageSchema, organizationRef } from '@/lib/seo/schema';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://rakshaai.co';
const PAGE_PATH = '/scams/investment-scams/telegram-investment-scam';
const CANONICAL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: 'Telegram Investment Scam India: Fake Trading Groups',
  description:
    'How fake investment groups on Telegram recruit Indian investors with guaranteed returns and celebrity tips. Warning signs and prevention.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Telegram Investment Scam India 2025 | RakshaAI',
    description: 'Fake trading groups on Telegram promising guaranteed stock returns  how they operate and how to verify any investment platform.',
    url: CANONICAL,
    type: 'article',
    siteName: 'RakshaAI',
    locale: 'en_IN',
      images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'RakshaAI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Telegram Investment Scam India | RakshaAI',
    description: 'Fake Telegram trading groups and pig butchering scams targeting Indian investors.',
      images: ['/opengraph-image'],
  },
  robots: { index: true, follow: true, 'max-snippet': -1 } as Record<string, unknown>,
};

const FAQ_ITEMS = [
  {
    question: 'How do I know if a Telegram investment group is a scam?',
    answer:
      'Red flags: (1) You were added to the group without joining voluntarily. (2) Admin posts daily screenshots of 30–100% returns. (3) A "mentor" celebrity figure endorses a specific trading app. (4) The app is not listed on Google Play or the Apple App Store  download link is shared via Telegram only. (5) Profits appear on the app screen but you cannot withdraw without paying additional fees.',
  },
  {
    question: 'What is pig butchering and how does Telegram facilitate it?',
    answer:
      'Pig butchering (SHA ZHU PAN) is an investment scam where fraudsters build a romantic or friendly relationship with the victim over weeks before introducing a fraudulent investment platform. Telegram\'s anonymous channels and group features make it easy to run these operations at scale  fake members, scripted conversations, and fabricated profit screenshots create an illusion of legitimacy.',
  },
  {
    question: 'How do I verify if an investment platform is SEBI-registered?',
    answer:
      'Visit sebi.gov.in → Intermediaries/Market Infrastructure Institutions → Registered Intermediaries. Search for the platform or advisor name. All legitimate investment advisors and portfolio managers must be registered with SEBI. If a platform cannot provide its SEBI registration number, do not invest. SEBI\'s investor helpline is 1800-266-7575.',
  },
  {
    question: 'Can I recover money lost in a Telegram investment scam?',
    answer:
      'Recovery chances are highest in the first 24–48 hours. Call 1930 immediately to report and attempt a transaction freeze. File a complaint at cybercrime.gov.in with all screenshots, transaction IDs, and the Telegram group link. Report to SEBI SCORES portal if the scam involved securities. Cryptocurrency transfers are harder to recover  prioritise speed of reporting over documentation completeness.',
  },
];

export default function TelegramInvestmentScamPage() {
  const schemas = [
    webPageSchema({
      name: 'Telegram Investment Scam India 2025: Fake Trading Groups',
      description: 'How fake Telegram investment groups operate in India  pig butchering, fake trading apps, SEBI verification.',
      url: PAGE_PATH,
    }),
    breadcrumbListSchema([
      { name: 'Home', url: '/' },
      { name: 'Scams', url: '/scams' },
      { name: 'Investment Scams', url: '/scams/investment-scams' },
      { name: 'Telegram Investment Scam', url: PAGE_PATH },
    ]),
    faqPageSchema(FAQ_ITEMS),
    {
      '@context': 'https://schema.org' as const,
      '@type': 'Article',
      headline: 'Telegram Investment Scam India 2025: Fake Trading Groups & Pig Butchering',
      url: CANONICAL,
      author: organizationRef(),
      publisher: organizationRef(),
      datePublished: '2025-01-01',
      dateModified: new Date().toISOString().split('T')[0],
      inLanguage: 'en-IN',
      keywords: ['telegram investment scam india', 'fake trading group telegram', 'pig butchering india', 'telegram stock tips scam'],
      articleSection: 'Cybersecurity',
    },
  ];

  return (
    <DefaultLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schemas) }} />

      <section className="bg-gradient-to-b from-indigo-50 to-white dark:from-indigo-950/30 dark:to-gray-900 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-gray-400 mb-6">
            <Link href="/">Home</Link><span aria-hidden="true">/</span>
            <Link href="/scams">Scams</Link><span aria-hidden="true">/</span>
            <Link href="/scams/investment-scams">Investment Scams</Link><span aria-hidden="true">/</span>
            <span className="text-gray-600 dark:text-gray-300">Telegram Investment Scam</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 text-sm font-medium px-4 py-1.5 rounded-full mb-5">
            <span aria-hidden="true">📊</span><span>Investment Scam Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-5 leading-tight">
            Telegram Investment Scam India
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
            Fake trading groups on Telegram promise guaranteed stock returns and celebrity-endorsed platforms  then block every withdrawal. Average loss in India: ₹3.5 lakh per victim.
          </p>
          <div className="flex flex-wrap gap-6 mt-6">
            {[
              { v: '₹11,000 Cr', l: 'lost to trading app scams FY24' },
              { v: '3.5 lakh', l: 'average loss per victim' },
              { v: 'SEBI', l: 'always verify before investing' },
            ].map(s => (
              <div key={s.l} className="text-center">
                <div className="text-2xl font-bold text-indigo-700 dark:text-indigo-400">{s.v}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 max-w-[120px]">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-red-600 dark:bg-red-700 py-4 px-4">
        <div className="max-w-4xl mx-auto text-white text-sm font-medium" data-speakable="true">
          <strong>Key fact:</strong> All investment advisors in India must be SEBI-registered. Verify at sebi.gov.in before depositing a single rupee. No legitimate platform offers guaranteed returns.
        </div>
      </div>

      <section className="py-14 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8" data-speakable="true">How the Scam Works</h2>
          <div className="space-y-4">
            {[
              { phase: 'Recruitment', desc: 'You are added to a Telegram group or receive a DM from an unknown account. The message promotes a "VIP investment signal group" with daily stock tips from a "SEBI expert" or celebrity investor.' },
              { phase: 'Trust Building', desc: 'For 1–2 weeks, the admin sends genuine stock tips that appear to come true (they cherry-pick and send multiple tips, only sharing the ones that were correct). Fake member testimonials show enormous profits.' },
              { phase: 'App Download', desc: 'You are directed to download a trading app via a Telegram link. The app looks professional but is not on official app stores. A small initial investment shows immediate 40–80% profit  this is entirely fictitious.' },
              { phase: 'Scale-Up', desc: 'You are invited to a "IPO allocation" or "insider tip" requiring ₹2–20 lakh. Time pressure: "Only 3 spots remaining." Fake fellow investors in the group share their own profit screenshots to encourage you.' },
              { phase: 'Withdrawal Block', desc: 'When you try to withdraw, errors appear: tax payment required, verification deposit, "compliance fee." Each payment generates a new obstacle until you stop or the app disappears entirely.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-gray-50 dark:bg-gray-950 rounded-xl p-5 border border-gray-100 dark:border-gray-800">
                <div className="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-bold px-2.5 py-1 rounded-lg h-fit">Phase {i + 1}</div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{item.phase}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{item.desc}</p>
                </div>
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
          <RelatedTopics currentPath={PAGE_PATH} clusterId="investment-scams" />
        </div>
      </div>
    </DefaultLayout>
  );
}
