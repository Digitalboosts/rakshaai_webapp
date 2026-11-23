import type { Metadata } from 'next';
import Link from 'next/link';
import DefaultLayout from '@/components/DefaultLayout';
import RelatedTopics from '@/components/RelatedTopics';
import { jsonLd, breadcrumbListSchema, faqPageSchema, webPageSchema, organizationRef } from '@/lib/seo/schema';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://rakshaai.co';
const PAGE_PATH = '/scams/investment-scams/stock-trading-app-scam';
const CANONICAL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: 'Fake Stock Trading App Scam India: Zerodha Clones',
  description:
    'How fake stock trading apps impersonate Zerodha, Groww & Angel One in India. Spot paper profits, blocked withdrawals, and pump-and-dump.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Fake Stock Trading App Scam India 2025 | RakshaAI',
    description: 'Fake trading apps mimicking Zerodha, Groww, and Angel One show paper profits then block withdrawals. How to verify legitimate brokers and what to do if trapped.',
    url: CANONICAL,
    type: 'article',
    siteName: 'RakshaAI',
    locale: 'en_IN',
      images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'RakshaAI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fake Trading App Scam India | RakshaAI',
    description: 'Fake Zerodha/Groww clones showing impossible returns  how the scam works, SEBI verification, and recovery.',
      images: ['/opengraph-image'],
  },
  robots: { index: true, follow: true, 'max-snippet': -1 } as Record<string, unknown>,
};

const FAQ_ITEMS = [
  {
    question: 'How do I know if a trading app is fake?',
    answer:
      'Verify the broker on SEBI\'s registered entity list at sebi.gov.in/intermediaries before depositing. Genuine brokers (Zerodha, Groww, Upstox, Angel One) are accessible only through their official websites and app stores. Check the app name in Play Store/App Store carefully  fake apps often have slight spelling variations. If withdrawal is blocked or requires more deposit, it is definitively a scam.',
  },
  {
    question: 'I deposited money in a fake trading app  can I get it back?',
    answer:
      'Act quickly: (1) Call 1930  India\'s cybercrime helpline  immediately. (2) File a complaint at cybercrime.gov.in with all transaction details, app screenshots, and communication records. (3) Contact SEBI at sebi.gov.in for investment fraud specifically. (4) File an FIR at your local cybercrime police station. Recovery likelihood decreases with time, especially if funds were moved to cryptocurrency.',
  },
  {
    question: 'Are there fake Zerodha or Groww apps?',
    answer:
      'Yes  fake apps mimicking Zerodha, Groww, Upstox, Angel One, and other legitimate Indian brokers are a growing problem. They are typically distributed via WhatsApp or Telegram links, not through official app stores. The official Zerodha app is available only at zerodha.com. The official Groww app is at groww.in. Never install trading apps from links in messages.',
  },
  {
    question: 'What is a pig-butchering trading scam?',
    answer:
      'A pig-butchering scam (also called sha zhu pan) involves scammers building a relationship with the victim over weeks or months (often via a "wrong number" text, dating app, or social media) before introducing them to an investment opportunity on a fake trading platform. The platform shows rising profits to encourage larger deposits before blocking all withdrawals.',
  },
];

export default function StockTradingAppScamPage() {
  const schemas = [
    webPageSchema({
      name: 'Fake Stock Trading App Scam India 2025',
      description: 'How fake trading apps impersonating Zerodha, Groww, and Angel One operate in India.',
      url: PAGE_PATH,
    }),
    breadcrumbListSchema([
      { name: 'Home', url: '/' },
      { name: 'Scams', url: '/scams' },
      { name: 'Investment Scams', url: '/scams/investment-scams' },
      { name: 'Stock Trading App Scam', url: PAGE_PATH },
    ]),
    faqPageSchema(FAQ_ITEMS),
    {
      '@context': 'https://schema.org' as const,
      '@type': 'Article',
      headline: 'Fake Stock Trading App Scam India 2025: Zerodha, Groww & Upstox Clones',
      url: CANONICAL,
      author: organizationRef(),
      publisher: organizationRef(),
      datePublished: '2025-01-01',
      dateModified: new Date().toISOString().split('T')[0],
      inLanguage: 'en-IN',
      keywords: ['fake trading app india', 'fake zerodha app', 'fake groww app', 'investment scam india', 'stock trading scam india', 'pig butchering scam india'],
      articleSection: 'Cybersecurity',
    },
  ];

  return (
    <DefaultLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schemas) }} />

      <section className="bg-gradient-to-b from-purple-50 to-white dark:from-purple-950/30 dark:to-gray-900 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-gray-400 mb-6">
            <Link href="/">Home</Link><span aria-hidden="true">/</span>
            <Link href="/scams">Scams</Link><span aria-hidden="true">/</span>
            <Link href="/scams/investment-scams">Investment Scams</Link><span aria-hidden="true">/</span>
            <span className="text-gray-600 dark:text-gray-300">Stock Trading App Scam</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 text-sm font-medium px-4 py-1.5 rounded-full mb-5">
            <span aria-hidden="true">📈</span><span>Investment Scam Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-5 leading-tight">
            Fake Stock Trading App Scam India
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
            Fake apps impersonating Zerodha, Groww, Angel One, and Upstox show paper profits but block all withdrawals. India&apos;s fastest-growing investment fraud category.
          </p>
          <div className="flex flex-wrap gap-4 mt-6 text-center">
            {[{ v: '₹7,061 Cr', l: 'Investment fraud losses in 2024 (MHA)' }, { v: '₹1.2 lakh', l: 'Average per-victim loss' }, { v: '6 weeks', l: 'Avg. trust-building phase before first deposit' }].map(s => (
              <div key={s.l} className="text-center">
                <div className="text-2xl font-bold text-purple-700 dark:text-purple-400">{s.v}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 max-w-[110px]">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-14 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8" data-speakable="true">
            How Fake Trading Apps Work
          </h2>
          <div className="space-y-4">
            {[
              { phase: 'Recruitment', desc: 'Victim receives a "wrong number" message, dating app match, or LinkedIn connection from an attractive profile. Relationship is developed over days or weeks  this is the "pig fattening" phase.' },
              { phase: 'Introduction to Platform', desc: 'The new acquaintance casually mentions "incredible returns" from a trading platform their uncle manages. They demonstrate profits in their own account. An "invitation link" to download the app is shared via WhatsApp.' },
              { phase: 'Early Wins', desc: 'Victim deposits a small test amount (₹10,000–₹50,000). The platform shows rapid, impressive gains. Withdrawal of small amounts sometimes permitted to build confidence.' },
              { phase: 'The Escalation', desc: 'Victim is encouraged to deposit larger sums  ₹5–50 lakh  often by taking personal loans or selling assets. "VIP schemes" and "insider signals" available for larger deposits.' },
              { phase: 'Withdrawal Block', desc: 'When victim tries to withdraw, error messages appear: "tax clearance required" (₹2 lakh), "account verification fee" (₹50,000), "insurance deposit". Each payment generates another hurdle. The platform eventually goes offline.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-gray-50 dark:bg-gray-950 rounded-xl p-5 border border-gray-100 dark:border-gray-800">
                <div className="flex-shrink-0 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-bold px-2.5 py-1 rounded-lg h-fit">Phase {i + 1}: {item.phase}</div>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verification  SEBI check */}
      <section className="py-14 px-4 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 text-center" data-speakable="true">
            Verify Any Broker Before Investing
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-center mb-8 text-sm">
            Only invest through SEBI-registered brokers. All legitimate Indian stock brokers are listed at sebi.gov.in.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {[
              { name: 'Zerodha', url: 'zerodha.com', sebi: 'NSE/BSE registered' },
              { name: 'Groww', url: 'groww.in', sebi: 'SEBI reg. INZ000201137' },
              { name: 'Upstox', url: 'upstox.com', sebi: 'SEBI reg. INZ000061735' },
              { name: 'Angel One', url: 'angelone.in', sebi: 'SEBI reg. INZ000104636' },
              { name: 'HDFC Securities', url: 'hdfcsec.com', sebi: 'NSE/BSE/MCX registered' },
              { name: 'ICICI Direct', url: 'icicidirect.com', sebi: 'SEBI reg. INZ000183631' },
            ].map((b) => (
              <div key={b.name} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-4">
                <div className="font-semibold text-gray-900 dark:text-white text-sm">{b.name}</div>
                <div className="text-xs font-mono text-green-600 dark:text-green-400 mt-1">{b.url}</div>
                <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">{b.sebi}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 dark:text-gray-500 text-center">
            Always download from official websites or Google Play/App Store. Never from links shared in WhatsApp or Telegram.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-3" data-speakable="true">
            {FAQ_ITEMS.map((item) => (
              <details key={item.question} className="group bg-gray-50 dark:bg-gray-950 border border-gray-100 dark:border-gray-800 rounded-xl p-5">
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

      <div className="px-4 py-8 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <RelatedTopics currentPath={PAGE_PATH} clusterId="investment-scams" />
        </div>
      </div>
    </DefaultLayout>
  );
}
