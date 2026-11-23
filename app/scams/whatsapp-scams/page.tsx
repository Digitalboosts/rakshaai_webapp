import type { Metadata } from 'next';
import Link from 'next/link';
import DefaultLayout from '@/components/DefaultLayout';
import RelatedTopics from '@/components/RelatedTopics';
import { jsonLd, breadcrumbListSchema, faqPageSchema, webPageSchema, organizationRef } from '@/lib/seo/schema';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://rakshaai.co';
const PAGE_PATH = '/scams/whatsapp-scams';
const CANONICAL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: 'WhatsApp Scams India 2026: Types & Warning Signs',
  description:
    'Complete guide to WhatsApp scams in India  fake investment groups, job fraud, lottery scams, phishing links. Warning signs and prevention.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'WhatsApp Scams India 2026: How to Identify & Avoid Them',
    description:
      'India\'s most common WhatsApp scams  investment groups promising guaranteed returns, fake job offers, KBC lottery fraud, and phishing links  with prevention steps for each.',
    url: CANONICAL,
    type: 'article',
    siteName: 'RakshaAI',
    locale: 'en_IN',
      images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'RakshaAI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WhatsApp Scams India 2026 | RakshaAI',
    description: 'Investment fraud, fake jobs, lottery scams, and phishing links  all delivered via WhatsApp. Full guide with warning signs and prevention.',
      images: ['/opengraph-image'],
  },
  robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' } as Record<string, unknown>,
};

// ─── Content Data ─────────────────────────────────────────────────────────────

const WHATSAPP_SCAM_TYPES = [
  {
    id: 'investment-scam',
    title: 'Fake Investment & Trading Group Scam',
    path: '/scams/whatsapp-scams/investment-scam',
    prevalence: '38% of WhatsApp fraud cases',
    avgLoss: '₹1.2 lakh average loss',
    severity: 'Critical',
    description:
      'Scammers add victims to WhatsApp "investment" or "trading tips" groups, post fake profit screenshots, build trust over weeks, then direct victims to fraudulent apps that show paper profits but block all withdrawals. Often use celebrity deepfakes (Mukesh Ambani, Rakesh Jhunjhunwala) as "endorsements".',
    redFlags: [
      'Added to group by unknown number without consent',
      'Group admin posts screenshots of massive profits daily',
      'Celebrity or "market expert" endorses the platform',
      '"Limited" slots available with countdown pressure',
      'Profits visible in app but withdrawal requires more deposit',
      'Referral bonus for recruiting others',
    ],
    prevention: [
      'Never invest based on WhatsApp group recommendations',
      'Verify platform registration at sebi.gov.in before depositing',
      'If withdrawal is blocked, stop depositing immediately  this is the trap',
      'Report to SEBI SCORES portal and cybercrime.gov.in',
    ],
    keywords: ['whatsapp investment scam india', 'fake trading group whatsapp', 'whatsapp stock tips scam'],
  },
  {
    id: 'job-offer-scam',
    title: 'Fake Job & Part-Time Task Scam',
    path: '/scams/whatsapp-scams/job-offer-scam',
    prevalence: '31% of WhatsApp fraud cases',
    avgLoss: '₹18,000 average loss',
    severity: 'High',
    description:
      'Unsolicited WhatsApp messages offering work-from-home jobs: liking YouTube videos, subscribing to channels, rating hotel reviews, or "task completion" earning ₹5,000–₹15,000 per day. Initial small payments build trust before victims are asked to pay a "deposit" for bigger earnings  which is never returned.',
    redFlags: [
      'Unsolicited WhatsApp message about part-time earning opportunity',
      'Task described as "like videos", "follow accounts", "rate hotels"',
      'Initial small payments (₹100–₹500) to build trust',
      'Request for a "deposit" to unlock higher-paying tasks',
      'No company name, no formal contract, payment only via UPI to personal account',
      'Urgency: "limited positions available today"',
    ],
    prevention: [
      'Legitimate employers do not recruit via unsolicited WhatsApp messages',
      'Any job requiring upfront payment is a scam  no exceptions',
      'Verify company on mca.gov.in and LinkedIn before any engagement',
      'Report job scam numbers at rakshaai.co/phone-number-checker',
    ],
    keywords: ['whatsapp job scam india', 'youtube task scam india', 'part time job scam whatsapp'],
  },
  {
    id: 'lottery-scam',
    title: 'Fake Lottery & Prize Notification Scam',
    path: '/scams/whatsapp-scams/lottery-scam',
    prevalence: '18% of WhatsApp fraud cases',
    avgLoss: '₹24,000 average loss',
    severity: 'High',
    description:
      'WhatsApp messages claiming you have won a prize from KBC (Kaun Banega Crorepati), Amazon, BSNL, Indian government schemes, or international lotteries. Victims are asked to pay "processing fees", "customs duty", or "tax" to claim their winnings  fees that disappear along with the prize.',
    redFlags: [
      'Received prize notification from unknown number  you never entered any contest',
      'Message uses official-looking logos (KBC, Sony LIV, Amazon India)',
      'Required to keep the "win" confidential',
      'Processing fee or tax payment required before prize release',
      'Payment requested via UPI, gift cards, or wire transfer',
      'WhatsApp number differs from official company channels',
    ],
    prevention: [
      'No legitimate lottery or game show contacts winners via unsolicited WhatsApp',
      'KBC officially communicates only via Sony LIV app  never WhatsApp',
      'Never pay money to claim a prize',
      'Verify official company contact details at their official website only',
    ],
    keywords: ['kbc lottery scam whatsapp', 'fake prize whatsapp india', 'amazon lottery scam india'],
  },
  {
    id: 'phishing-links',
    title: 'Phishing Links & Fake Websites via WhatsApp',
    path: '/scams/whatsapp-scams/phishing-links',
    prevalence: '9% of WhatsApp fraud cases',
    avgLoss: '₹47,000 average loss',
    severity: 'Critical',
    description:
      'Malicious links shared via WhatsApp mimicking bank login pages (SBI YONO, HDFC NetBanking), government portals (IRCTC, income tax, EPFO), or e-commerce checkout pages. Victims enter credentials or OTPs, which are immediately captured. Some links install spyware on Android devices.',
    redFlags: [
      'Link claims urgent KYC update, account block prevention, or pending refund',
      'URL contains misspellings or extra characters (sbibank-login.in vs onlinesbi.sbi.co.in)',
      'Shared by unknown number or even a compromised contact',
      'Page asks for debit card number, CVV, or OTP',
      'Website Trust Score below 40 on rakshaai.co/check',
    ],
    prevention: [
      'Check EVERY WhatsApp link at rakshaai.co/check before clicking',
      'Banks never send account update links via WhatsApp',
      'Navigate to bank portals directly  never from WhatsApp links',
      'Enable Google Safe Browsing on your Android browser',
    ],
    keywords: ['whatsapp phishing link india', 'fake bank link whatsapp india', 'suspicious whatsapp link'],
  },
  {
    id: 'digital-arrest-whatsapp',
    title: 'Digital Arrest Threats via WhatsApp',
    path: '/scams/digital-arrest',
    prevalence: '4% of WhatsApp fraud cases',
    avgLoss: '₹4.8 lakh average loss',
    severity: 'Critical',
    description:
      'WhatsApp calls or messages from numbers claiming to be CBI, ED, TRAI, or police officers, alleging your phone number or Aadhaar is linked to criminal activity. Designed to create panic and extract payments. Sometimes escalates to video calls with uniformed imposters.',
    redFlags: [
      'WhatsApp call or message from "police", "CBI", or "government officer"',
      'Claim that your number/Aadhaar is linked to money laundering or drugs',
      'Demand for immediate payment to avoid arrest or SIM disconnection',
      'Instruction to stay on call and not inform anyone',
    ],
    prevention: [
      'Digital arrest does not exist in Indian law  hang up immediately',
      'Real agencies never contact citizens via WhatsApp for legal matters',
      'Call 1930 immediately if targeted',
      'Save the number and report at rakshaai.co/phone-number-checker',
    ],
    keywords: ['whatsapp digital arrest scam', 'cbi call whatsapp india', 'trai scam whatsapp'],
  },
];

const FAQ_ITEMS = [
  {
    question: 'How do I know if a WhatsApp message is a scam?',
    answer:
      'Key warning signs: (1) Unsolicited message from unknown number offering money, prizes, or jobs. (2) Suspicious links  check every link at rakshaai.co/check before clicking. (3) Requests for OTP, bank details, or upfront payment. (4) Urgency and pressure to act within hours. (5) Requests to keep the conversation secret. When in doubt, do not click, do not pay, do not share personal information.',
  },
  {
    question: 'How do I check if a WhatsApp link is safe?',
    answer:
      'Copy the link (long-press → copy link) without clicking it, then paste it at rakshaai.co/check. You will get a Trust Score in under 5 seconds. A score below 40 means the link is likely a phishing attempt. Never click bank links or government portal links shared via WhatsApp  always navigate directly instead.',
  },
  {
    question: 'Is it safe to be added to unknown WhatsApp groups about investments?',
    answer:
      'No. Being added to unknown investment groups is the first stage of a common scam. Legitimate financial advisors do not recruit clients via unsolicited WhatsApp group additions. Leave such groups immediately. Never invest money based on group recommendations, however convincing the profit screenshots appear.',
  },
  {
    question: 'What should I do if I sent money after a WhatsApp scam?',
    answer:
      'Act immediately: (1) Call 1930  India\'s national cybercrime helpline  to report and request transaction reversal. (2) Contact your bank to freeze the transaction. (3) File a complaint at cybercrime.gov.in within 24 hours. (4) Report the scammer\'s WhatsApp number at rakshaai.co/phone-number-checker. The first hour is critical for recovery.',
  },
  {
    question: 'Can WhatsApp scam links steal my banking passwords?',
    answer:
      'Yes  phishing links via WhatsApp can capture your internet banking credentials, debit card numbers, CVVs, and OTPs if you enter them on fake login pages. Some malicious links also install spyware on Android devices. Never click bank links shared via WhatsApp. Check every suspicious link at rakshaai.co/check first.',
  },
  {
    question: 'How do I report a WhatsApp scammer in India?',
    answer:
      'Multiple channels: (1) In WhatsApp: open the chat, tap the three dots → Report. (2) Report the phone number at rakshaai.co/phone-number-checker with details of the scam. (3) File a cybercrime complaint at cybercrime.gov.in. (4) Call 1930 for urgent financial fraud. (5) If money was stolen, also contact your bank immediately.',
  },
];

// ─── Schemas ──────────────────────────────────────────────────────────────────

function buildSchemas() {
  return [
    webPageSchema({
      name: 'WhatsApp Scams India 2026: Complete Guide',
      description:
        'All major WhatsApp scam types targeting India  investment groups, fake job offers, lottery fraud, phishing links, and digital arrest  with warning signs and prevention.',
      url: PAGE_PATH,
    }),
    breadcrumbListSchema([
      { name: 'Home', url: '/' },
      { name: 'Scams', url: '/scams' },
      { name: 'WhatsApp Scams', url: PAGE_PATH },
    ]),
    faqPageSchema(FAQ_ITEMS),
    {
      '@context': 'https://schema.org' as const,
      '@type': 'Article',
      '@id': `${CANONICAL}#article`,
      headline: 'WhatsApp Scams India 2026: Investment Groups, Fake Jobs, Lottery Fraud & Phishing Links',
      description:
        'Comprehensive guide to every major WhatsApp scam type targeting India in 2026  with warning signs, real examples, and step-by-step prevention for each.',
      url: CANONICAL,
      author: organizationRef(),
      publisher: organizationRef(),
      datePublished: '2026-01-01',
      dateModified: new Date().toISOString().split('T')[0],
      inLanguage: 'en-IN',
      keywords: [
        'whatsapp scam india', 'whatsapp fraud india', 'whatsapp investment scam',
        'fake job offer whatsapp', 'kbc lottery scam', 'whatsapp phishing link',
        'whatsapp digital arrest', 'whatsapp scam 2026',
      ],
      articleSection: 'Cybersecurity',
    },
    {
      '@context': 'https://schema.org' as const,
      '@type': 'ItemList',
      name: 'WhatsApp Scam Types in India',
      numberOfItems: WHATSAPP_SCAM_TYPES.length,
      itemListElement: WHATSAPP_SCAM_TYPES.map((scam, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: scam.title,
        url: `${SITE_URL}${scam.path}`,
      })),
    },
  ];
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function WhatsAppScamsPage() {
  const schemas = buildSchemas();

  const severityColor = (s: string) =>
    s === 'Critical'
      ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
      : 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300';

  return (
    <DefaultLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schemas) }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-emerald-50 to-white dark:from-emerald-950/30 dark:to-gray-900 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500 mb-6">
            <Link href="/" className="hover:text-gray-600 dark:hover:text-gray-300">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/scams" className="hover:text-gray-600 dark:hover:text-gray-300">Scams</Link>
            <span aria-hidden="true">/</span>
            <span className="text-gray-600 dark:text-gray-300">WhatsApp Scams</span>
          </nav>

          <div className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 text-sm font-medium px-4 py-1.5 rounded-full mb-5">
            <span aria-hidden="true">💬</span>
            <span>WhatsApp Fraud Guide</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-5 leading-tight">
            WhatsApp Scams India 2026
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed mb-4">
            Investment groups, fake job offers, KBC lottery fraud, and phishing links  all delivered via WhatsApp.
            Learn every type and how to protect yourself.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
            See actual message examples:{' '}
            <Link href="/blog/whatsapp-scam-india" className="text-emerald-600 dark:text-emerald-400 underline font-medium">
              8 WhatsApp Scam Messages Indians Received in 2026
            </Link>
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6" data-speakable="true">
            {[
              { value: '₹1,776 Cr', label: 'Lost to digital fraud in Q1 2024 (MHA)' },
              { value: '5 Types', label: 'WhatsApp scam patterns documented' },
              { value: '1930', label: 'Emergency helpline (24/7)' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-bold text-emerald-700 dark:text-emerald-400">{s.value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 max-w-[120px]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Check CTA */}
      <div className="bg-emerald-600 dark:bg-emerald-700 py-3 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <p className="text-white text-sm font-medium">Received a suspicious WhatsApp link?</p>
          <Link
            href="/check"
            className="inline-block bg-white text-emerald-700 font-semibold text-sm px-4 py-2 rounded-lg hover:bg-emerald-50 transition-colors"
          >
            Check it now  free →
          </Link>
        </div>
      </div>

      {/* Table of Contents */}
      <section className="py-10 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-4">
            WhatsApp Scam Types  Quick Links
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {WHATSAPP_SCAM_TYPES.map((scam) => (
              <a
                key={scam.id}
                href={`#${scam.id}`}
                className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-950 rounded-lg border border-gray-100 dark:border-gray-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 transition-colors"
              >
                <span className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${scam.severity === 'Critical' ? 'bg-red-500' : 'bg-orange-500'}`} />
                <div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-white leading-tight">{scam.title}</div>
                  <div className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{scam.prevalence}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Scam Type Sections */}
      <section className="py-6 px-4 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-4xl mx-auto space-y-10">
          {WHATSAPP_SCAM_TYPES.map((scam, i) => (
            <article
              key={scam.id}
              id={scam.id}
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden scroll-mt-20"
              data-speakable="true"
            >
              <div className="p-6 border-b border-gray-100 dark:border-gray-800">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-black text-gray-200 dark:text-gray-700 select-none">{i + 1}</span>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">{scam.title}</h2>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${severityColor(scam.severity)}`}>
                      {scam.severity}
                    </span>
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                      {scam.prevalence}
                    </span>
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400">
                      {scam.avgLoss}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{scam.description}</p>
              </div>

              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100 dark:divide-gray-800">
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2 text-sm">
                    <span className="text-red-500">⚠</span> Red Flags
                  </h3>
                  <ul className="space-y-2">
                    {scam.redFlags.map((flag, j) => (
                      <li key={j} className="flex gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="text-red-400 flex-shrink-0 mt-0.5">•</span>
                        {flag}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2 text-sm">
                    <span className="text-emerald-500">✓</span> How to Stay Safe
                  </h3>
                  <ul className="space-y-2">
                    {scam.prevention.map((tip, j) => (
                      <li key={j} className="flex gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="text-emerald-500 flex-shrink-0 mt-0.5">✓</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {scam.path !== PAGE_PATH && (
                <div className="px-5 py-4 bg-gray-50 dark:bg-gray-950/50 flex justify-end">
                  <Link
                    href={scam.path}
                    className="text-sm text-emerald-600 dark:text-emerald-400 font-medium hover:underline"
                  >
                    Full guide →
                  </Link>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* How to verify WhatsApp links */}
      <section className="py-14 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center" id="how-to-check" data-speakable="true">
            How to Check Any WhatsApp Link for Safety
          </h2>
          <ol className="grid md:grid-cols-3 gap-4">
            {[
              { step: '1', title: 'Long-press the link', desc: 'In WhatsApp, long-press the link. Select "Copy Link"  do not tap to open it.' },
              { step: '2', title: 'Paste at RakshaAI', desc: 'Go to rakshaai.co/check. Paste the copied URL. No account needed.' },
              { step: '3', title: 'Read your Trust Score', desc: 'Score 70–100 = generally safe. 40–69 = caution. 0–39 = high risk, do not open.' },
            ].map((item) => (
              <div key={item.step} className="bg-gray-50 dark:bg-gray-950 rounded-xl p-6 text-center border border-gray-100 dark:border-gray-800">
                <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </ol>
          <div className="text-center mt-6">
            <Link
              href="/check"
              className="inline-block bg-emerald-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Check a WhatsApp Link Now →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-4 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3" id="whatsapp-scams-faq" data-speakable="true">
            {FAQ_ITEMS.map((item) => (
              <details
                key={item.question}
                className="group bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-5"
              >
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

      {/* Emergency */}
      <div className="bg-red-600 dark:bg-red-700 py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-3 text-white text-sm">
          <div>
            <span className="font-bold">Scammed via WhatsApp?</span>{' '}
            <span>Call 1930 immediately and file at cybercrime.gov.in</span>
          </div>
          <a href="tel:1930" className="bg-white text-red-700 font-bold px-4 py-2 rounded-lg hover:bg-red-50 transition-colors">
            Call 1930
          </a>
        </div>
      </div>

      {/* Related Topics  internal linking via RelatedTopics component */}
      <div className="px-4 py-8 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <RelatedTopics currentPath={PAGE_PATH} clusterId="whatsapp-scams" />
        </div>
      </div>
    </DefaultLayout>
  );
}
