import type { Metadata } from 'next';
import Link from 'next/link';
import DefaultLayout from '@/components/DefaultLayout';
import RelatedTopics from '@/components/RelatedTopics';
import { jsonLd, breadcrumbListSchema, faqPageSchema, webPageSchema, organizationRef } from '@/lib/seo/schema';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://rakshaai.co';
const PAGE_PATH = '/scams/digital-arrest/fake-cbi-scam';
const CANONICAL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: 'Fake CBI Call Scam India: Digital Arrest Guide 2025',
  description:
    'How fraudsters impersonate CBI officers in India  the digital arrest script, red flags, and how to verify any CBI call. Free guide.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Fake CBI Call Scam India 2025 | RakshaAI',
    description: 'How fake CBI calls work, what the real CBI never does, and how to protect yourself from digital arrest impersonation scams.',
    url: CANONICAL,
    type: 'article',
    siteName: 'RakshaAI',
    locale: 'en_IN',
      images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'RakshaAI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fake CBI Call Scam India | RakshaAI',
    description: 'Fraudsters impersonating CBI officers via video call  how it works and how to identify it immediately.',
      images: ['/opengraph-image'],
  },
  robots: { index: true, follow: true, 'max-snippet': -1 } as Record<string, unknown>,
};

const FAQ_ITEMS = [
  {
    question: 'Can CBI arrest me over a phone or video call?',
    answer:
      'No  this is definitively impossible under Indian law. The Central Bureau of Investigation (CBI) has no authority to arrest, detain, or interrogate any citizen via phone or video call. Arrests by the CBI require physical presence with proper documentation, magistrate orders, and follow due process under the CrPC. Any call claiming you are under "CBI digital arrest" is fraud.',
  },
  {
    question: 'What does a fake CBI scam call look like?',
    answer:
      'The call typically begins with someone identifying themselves as a CBI officer. They allege your Aadhaar number, bank account, or mobile number is linked to money laundering, drug trafficking, or financial crimes. They demand you stay on video call (to monitor you), not inform anyone, and pay a "security deposit" to avoid arrest. The call may escalate with multiple "officers" joining.',
  },
  {
    question: 'How do I verify if a CBI call is genuine?',
    answer:
      'The CBI\'s official website is cbi.gov.in. Their official contact is +91-11-24368638. Real CBI officers will never call you on personal mobile numbers to announce arrests, will never conduct interrogations via WhatsApp video, and will never ask for payment to avoid criminal charges. If you receive such a call, hang up immediately and call 1930.',
  },
  {
    question: 'What should I do if I receive a fake CBI call?',
    answer:
      'Do not panic  this is fraud. (1) Hang up immediately. (2) Do not pay any amount. (3) Save the number and report it at rakshaai.co/phone-number-checker. (4) Call 1930 to report to the national cybercrime helpline. (5) File a complaint at cybercrime.gov.in. (6) Inform family members about the call to prevent them from falling for the same scam.',
  },
];

export default function FakeCBIScamPage() {
  const schemas = [
    webPageSchema({
      name: 'Fake CBI Call Scam India 2025: Digital Arrest Impersonation',
      description: 'How fake CBI digital arrest calls work, warning signs, and what to do if targeted.',
      url: PAGE_PATH,
    }),
    breadcrumbListSchema([
      { name: 'Home', url: '/' },
      { name: 'Scams', url: '/scams' },
      { name: 'Digital Arrest', url: '/scams/digital-arrest' },
      { name: 'Fake CBI Scam', url: PAGE_PATH },
    ]),
    faqPageSchema(FAQ_ITEMS),
    {
      '@context': 'https://schema.org' as const,
      '@type': 'Article',
      headline: 'Fake CBI Call Scam India 2025: How Digital Arrest Impersonation Works',
      url: CANONICAL,
      author: organizationRef(),
      publisher: organizationRef(),
      datePublished: '2025-01-01',
      dateModified: new Date().toISOString().split('T')[0],
      inLanguage: 'en-IN',
      keywords: ['fake cbi call india', 'cbi scam india', 'cbi digital arrest scam', 'cbi impersonation fraud india'],
      articleSection: 'Cybersecurity',
    },
  ];

  return (
    <DefaultLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schemas) }} />

      <section className="bg-gradient-to-b from-red-50 to-white dark:from-red-950/30 dark:to-gray-900 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-gray-400 mb-6">
            <Link href="/">Home</Link><span aria-hidden="true">/</span>
            <Link href="/scams">Scams</Link><span aria-hidden="true">/</span>
            <Link href="/scams/digital-arrest">Digital Arrest</Link><span aria-hidden="true">/</span>
            <span className="text-gray-600 dark:text-gray-300">Fake CBI Scam</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 text-sm font-medium px-4 py-1.5 rounded-full mb-5">
            <span aria-hidden="true">🚨</span><span>Digital Arrest Variant</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-5 leading-tight">
            Fake CBI Call Scam India
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
            Fraudsters impersonating Central Bureau of Investigation officers via video call, threatening "digital arrest" for fabricated crimes. Here is exactly how it works and how to respond.
          </p>
        </div>
      </section>

      {/* Critical fact */}
      <div className="bg-red-600 dark:bg-red-700 py-4 px-4">
        <div className="max-w-4xl mx-auto text-white text-sm font-medium" data-speakable="true">
          ⚖️ <strong>Legal fact:</strong> The CBI has no power to arrest, detain, or interrogate any person via phone or video call under any Indian law. "Digital arrest" does not exist in the Indian Penal Code or CrPC. Any such claim is fraud.
        </div>
      </div>

      {/* How it works */}
      <section className="py-14 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8" id="how-it-works" data-speakable="true">
            The Fake CBI Call Playbook
          </h2>
          <div className="space-y-4">
            {[
              { stage: 'Initial Contact', desc: 'Call from unknown mobile number. Caller identifies as "CBI Officer [Name], Special Crime Branch". Claims your Aadhaar/PAN/phone is linked to a money laundering case involving a criminal named "Naresh Kumar" who has listed you as an associate.' },
              { stage: 'Escalation to Video Call', desc: 'Victim is asked to join WhatsApp or Skype video call where multiple "officers" in uniform are visible. A fake CBI badge and official-looking case file may be shown. The atmosphere is authoritative and intimidating.' },
              { stage: 'Isolation & Pressure', desc: 'Victim is told to remain on video call at all times (even while eating/sleeping) and must not tell family or call anyone  "this is protocol during investigation". Designed to cut off rational consultation.' },
              { stage: 'The Demand', desc: 'Victim is told that ₹2–50 lakh must be transferred as a "security deposit" or "bail bond" to prove innocence. Once cleared, the money will be "returned by court order within 3 days".' },
              { stage: 'Repeat Targeting', desc: 'Victims who pay are targeted again  "additional charges found", "RBI clearance needed", "supreme court fee required". Losses compound until victim recognises the fraud.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-gray-50 dark:bg-gray-950 rounded-xl p-5 border border-gray-100 dark:border-gray-800">
                <div className="flex-shrink-0 w-7 h-7 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full flex items-center justify-center font-bold text-sm">{i + 1}</div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm">{item.stage}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Red flags */}
      <section className="py-14 px-4 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center" data-speakable="true">
            Red Flags of a Fake CBI Call
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              'Call comes from a personal mobile number, not an official landline',
              'You are accused of financial crimes you have never heard of',
              'Demand to stay on video call 24/7  "digital custody"',
              'Instruction not to tell family, lawyers, or friends',
              'Request for payment via UPI, wire transfer, or cryptocurrency',
              'Claim that paying will "clear your name"  real bail is set by courts, not officers',
              '"Clearance" costs keep increasing after each payment',
              'Video background looks like a police station but caller uses personal WhatsApp',
            ].map((flag, i) => (
              <div key={i} className="flex gap-3 bg-white dark:bg-gray-900 rounded-lg p-4 border border-red-100 dark:border-red-900/30">
                <span className="text-red-500 flex-shrink-0 font-bold">✗</span>
                <p className="text-sm text-gray-700 dark:text-gray-300">{flag}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to do */}
      <section className="py-14 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center" data-speakable="true">
            What to Do If You Receive a Fake CBI Call
          </h2>
          <ol className="space-y-4">
            {[
              { action: 'Hang up immediately', desc: 'Do not negotiate, do not give personal details, do not pay anything. There is no such thing as digital arrest.' },
              { action: 'Do not call back', desc: 'Even if they call repeatedly. Save the number as evidence instead.' },
              { action: 'Inform family', desc: 'Tell a trusted family member or friend about the call. Scammers want isolation  break it.' },
              { action: 'Report the number', desc: 'At rakshaai.co/phone-number-checker to protect other Indians from the same number.' },
              { action: 'Call 1930', desc: 'India\'s 24/7 national cybercrime helpline. File a complaint and get guidance.' },
              { action: 'File online complaint', desc: 'At cybercrime.gov.in with the caller number, call time, and any screenshots.' },
            ].map((item, i) => (
              <li key={i} className="flex gap-4 p-4 bg-green-50 dark:bg-green-950/20 rounded-xl border border-green-200 dark:border-green-800">
                <div className="w-7 h-7 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">{i + 1}</div>
                <div>
                  <h3 className="font-semibold text-green-800 dark:text-green-300 text-sm">{item.action}</h3>
                  <p className="text-sm text-green-700/80 dark:text-green-200/60 mt-0.5">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-4 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-3" data-speakable="true">
            {FAQ_ITEMS.map((item) => (
              <details key={item.question} className="group bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-5">
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

      <div className="px-4 py-8 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <RelatedTopics currentPath={PAGE_PATH} clusterId="digital-arrest" />
        </div>
      </div>
    </DefaultLayout>
  );
}
