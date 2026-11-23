import type { Metadata } from 'next';
import Link from 'next/link';
import DefaultLayout from '@/components/DefaultLayout';
import RelatedTopics from '@/components/RelatedTopics';
import { jsonLd, breadcrumbListSchema, faqPageSchema, webPageSchema, organizationRef } from '@/lib/seo/schema';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://rakshaai.co';
const PAGE_PATH = '/scams/phone-scams/kbc-lottery-scam';
const CANONICAL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: 'KBC Lottery Scam India: Fake Prize Calls Explained',
  description:
    'KBC lottery scam: how fake prize calls and WhatsApp messages work, warning signs, official KBC contacts, and how to report in India.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'KBC Lottery Scam India 2025: Fake Prize Alert | RakshaAI',
    description:
      'Fake KBC lottery calls and WhatsApp messages are among India\'s most common phone scams. Learn how they work, how to verify, and what to do if targeted.',
    url: CANONICAL,
    type: 'article',
    siteName: 'RakshaAI',
    locale: 'en_IN',
      images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'RakshaAI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KBC Lottery Scam India 2025 | RakshaAI',
    description: 'How fake KBC prize calls work, warning signs, and how to verify if a KBC contact is real.',
      images: ['/opengraph-image'],
  },
  robots: { index: true, follow: true, 'max-snippet': -1 } as Record<string, unknown>,
};

const FAQ_ITEMS = [
  {
    question: 'Is the KBC lottery call I received real?',
    answer:
      'Almost certainly not  it is a scam. KBC (Kaun Banega Crorepati) does not contact lottery winners by cold phone call. Winners are selected from registered participants through the official KBC app or Sony LIV platform. If you received an unexpected call claiming you won KBC, it is fraudulent. Do not share personal information or pay any amount.',
  },
  {
    question: 'How does the KBC lottery scam work?',
    answer:
      'The scam follows a predictable pattern: (1) You receive a call or WhatsApp from an unknown number claiming you have won ₹25 lakh–₹50 lakh in KBC. (2) They claim you were randomly selected from phone numbers. (3) They ask you to pay a "processing fee", "government tax", or "customs duty" of ₹5,000–₹50,000 to release the prize. (4) Once paid, they either demand more money or disappear entirely.',
  },
  {
    question: 'What are the signs that a KBC prize call is fake?',
    answer:
      'Key signs: (1) You never entered KBC  real winners participated through the show. (2) Request for upfront payment of any kind. (3) Instruction to keep the prize secret. (4) WhatsApp or unknown mobile number instead of official Sony channels. (5) Urgency  "you have 24 hours to claim". (6) Request for Aadhaar, PAN, bank account, or OTP.',
  },
  {
    question: 'How do I report a KBC lottery scam?',
    answer:
      'Report through multiple channels: (1) Save the scammer\'s number and report it at rakshaai.co/phone-number-checker. (2) File a complaint at cybercrime.gov.in. (3) Call 1930  India\'s cybercrime helpline. (4) Block the number on WhatsApp and report within the app. If you have already paid money, contact your bank immediately to attempt reversal.',
  },
  {
    question: 'What is the official KBC contact and how can I verify?',
    answer:
      'Official KBC (Kaun Banega Crorepati) is produced by Sony Entertainment Television. Participation only via the Sony LIV app and official KBC registration. Official website: sonyliv.com. There is no KBC lottery that contacts random phone numbers  all legitimate participants register themselves. Any unsolicited contact claiming KBC prizes is definitively fraudulent.',
  },
];

export default function KBCLotteryScamPage() {
  const schemas = [
    webPageSchema({
      name: 'KBC Lottery Scam India 2025: Fake Prize Calls & WhatsApp Messages',
      description: 'How KBC lottery scams work, warning signs, and what to do if you receive a fake KBC prize call.',
      url: PAGE_PATH,
    }),
    breadcrumbListSchema([
      { name: 'Home', url: '/' },
      { name: 'Scams', url: '/scams' },
      { name: 'Phone Scams', url: '/scams/phone-scams' },
      { name: 'KBC Lottery Scam', url: PAGE_PATH },
    ]),
    faqPageSchema(FAQ_ITEMS),
    {
      '@context': 'https://schema.org' as const,
      '@type': 'Article',
      headline: 'KBC Lottery Scam India: Fake Prize Calls Explained',
      url: CANONICAL,
      author: organizationRef(),
      publisher: organizationRef(),
      datePublished: '2025-01-01',
      dateModified: new Date().toISOString().split('T')[0],
      inLanguage: 'en-IN',
      keywords: ['kbc lottery scam', 'fake kbc prize', 'kbc scam india', 'kbc whatsapp fraud', 'kaun banega crorepati scam'],
      articleSection: 'Cybersecurity',
    },
  ];

  return (
    <DefaultLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schemas) }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-yellow-50 to-white dark:from-yellow-950/20 dark:to-gray-900 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-gray-400 mb-6">
            <Link href="/">Home</Link><span aria-hidden="true">/</span>
            <Link href="/scams">Scams</Link><span aria-hidden="true">/</span>
            <Link href="/scams/phone-scams">Phone Scams</Link><span aria-hidden="true">/</span>
            <span className="text-gray-600 dark:text-gray-300">KBC Lottery Scam</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-300 text-sm font-medium px-4 py-1.5 rounded-full mb-5">
            <span aria-hidden="true">🎰</span><span>Phone Scam Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-5 leading-tight">
            KBC Lottery Scam India 2025
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
            Fake Kaun Banega Crorepati prize calls and WhatsApp messages targeting millions of Indians. How the scam works, how to verify, and what to do if targeted.
          </p>
        </div>
      </section>

      {/* Alert box */}
      <div className="bg-red-600 dark:bg-red-700 py-4 px-4">
        <div className="max-w-4xl mx-auto text-white text-sm" data-speakable="true">
          <strong>Important fact:</strong> KBC does NOT conduct a "lottery" that contacts random phone numbers. All legitimate KBC participants register themselves through the Sony LIV app. Any call or WhatsApp claiming you won KBC by lottery is definitively a scam.
        </div>
      </div>

      {/* How it works */}
      <section className="py-14 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center" id="how-kbc-scam-works" data-speakable="true">
            How the KBC Lottery Scam Works
          </h2>
          <ol className="space-y-4">
            {[
              { stage: 'Stage 1', title: 'The Initial Contact', desc: 'You receive a call or WhatsApp from an unknown number (often a mobile number). The caller claims to be from "KBC", "Sony Entertainment", or "Department of Lottery". They announce you have won ₹25 lakh, ₹50 lakh, or ₹1 crore.' },
              { stage: 'Stage 2', title: 'Building Credibility', desc: 'They provide a fake "winner certificate" via WhatsApp with official-looking KBC logos. They may call with colleagues playing the role of "KBC officials" or even Amitabh Bachchan\'s fake voice recording.' },
              { stage: 'Stage 3', title: 'The Fee Trap', desc: 'To release your prize, you must pay a "government tax" (₹5,000–₹50,000), "processing fee", "customs duty", or "security deposit". Once paid, they demand more fees or disappear.' },
              { stage: 'Stage 4', title: 'Escalation (if victim complies)', desc: 'Victims who pay are targeted repeatedly  new fees for "insurance", "legal clearance", or "NEFT charges". Losses can reach ₹5–10 lakh before the victim realises the scam.' },
            ].map((item, i) => (
              <li key={i} className="flex gap-4 bg-gray-50 dark:bg-gray-950 rounded-xl p-5 border border-gray-100 dark:border-gray-800">
                <div className="flex-shrink-0 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 text-xs font-bold px-2.5 py-1.5 rounded-lg h-fit">{item.stage}</div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Warning signs vs real KBC */}
      <section className="py-14 px-4 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center" data-speakable="true">
            Fake KBC Call vs Real KBC: The Differences
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 dark:bg-red-950/20 rounded-xl border border-red-200 dark:border-red-800 p-6">
              <h3 className="font-bold text-red-700 dark:text-red-300 mb-4">🚨 Fake KBC Scam Call</h3>
              <ul className="space-y-2 text-sm text-red-800/80 dark:text-red-200/70">
                {[
                  'Contacts you by phone/WhatsApp without you registering',
                  'Claims you won a "phone lottery"',
                  'Requests payment before releasing prize',
                  'Uses personal mobile numbers, not official Sony channels',
                  'Creates urgency  "claim within 24 hours"',
                  'Asks for Aadhaar, PAN, bank OTP',
                  'Certificate sent via WhatsApp with basic design',
                ].map((item, i) => <li key={i} className="flex gap-2"><span className="text-red-500 flex-shrink-0">✗</span>{item}</li>)}
              </ul>
            </div>
            <div className="bg-green-50 dark:bg-green-950/20 rounded-xl border border-green-200 dark:border-green-800 p-6">
              <h3 className="font-bold text-green-700 dark:text-green-300 mb-4">✓ Real KBC (Kaun Banega Crorepati)</h3>
              <ul className="space-y-2 text-sm text-green-800/80 dark:text-green-200/70">
                {[
                  'You register yourself via Sony LIV app',
                  'Selection based on quiz performance, not lottery',
                  'Official communication via Sony LIV app notifications',
                  'No upfront payment ever required',
                  'Prize delivered after studio participation and tax deduction',
                  'Official website: sonyliv.com',
                  'Never contacts via WhatsApp or personal mobile numbers',
                ].map((item, i) => <li key={i} className="flex gap-2"><span className="text-green-500 flex-shrink-0">✓</span>{item}</li>)}
              </ul>
            </div>
          </div>
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
          <RelatedTopics currentPath={PAGE_PATH} clusterId="phone-scams" />
        </div>
      </div>
    </DefaultLayout>
  );
}
