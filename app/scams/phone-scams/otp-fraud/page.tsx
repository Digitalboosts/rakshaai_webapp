import type { Metadata } from 'next';
import Link from 'next/link';
import DefaultLayout from '@/components/DefaultLayout';
import RelatedTopics from '@/components/RelatedTopics';
import { jsonLd, breadcrumbListSchema, faqPageSchema, webPageSchema, organizationRef } from '@/lib/seo/schema';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://rakshaai.co';
const PAGE_PATH = '/scams/phone-scams/otp-fraud';
const CANONICAL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: 'OTP Fraud India 2026: How Scammers Steal Your OTP',
  description:
    'How scammers trick Indians into sharing OTPs via phone calls  fake bank executives, courier scams, SIM swap. How to protect yourself.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'OTP Fraud India 2025 | RakshaAI',
    description: 'Fake bank calls, courier scams, and SIM swaps that steal your OTP  how they work and how to stop them.',
    url: CANONICAL,
    type: 'article',
    siteName: 'RakshaAI',
    locale: 'en_IN',
      images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'RakshaAI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OTP Fraud India | RakshaAI',
    description: 'How phone scammers steal OTPs in India and drain bank accounts within minutes.',
      images: ['/opengraph-image'],
  },
  robots: { index: true, follow: true, 'max-snippet': -1 } as Record<string, unknown>,
};

const FAQ_ITEMS = [
  {
    question: 'Can sharing an OTP lead to money being stolen from my bank account?',
    answer:
      'Yes  immediately and completely. An OTP shared with a scammer gives them one-time access to authorise a transaction or change your internet banking password. Fraudsters typically act within 60 seconds of receiving an OTP. Never share an OTP with anyone, including callers claiming to be from your bank, RBI, or courier services.',
  },
  {
    question: 'What is a SIM swap attack and how does it steal my OTP?',
    answer:
      'In a SIM swap attack, the fraudster calls your telecom provider impersonating you, provides your Aadhaar or date of birth, and convinces the operator to transfer your mobile number to a new SIM they control. Once successful, all SMS OTPs meant for you are delivered to the attacker. Signs: your phone loses network signal unexpectedly. Immediately call your telecom provider if this happens.',
  },
  {
    question: 'Why does my bank say they never ask for OTPs?',
    answer:
      'Your bank already has access to your account  they do not need your OTP to help you. OTPs are designed specifically so that only you can authorise a transaction. Any caller claiming to be from a bank who asks for your OTP is definitively a fraudster. This applies to all banks: SBI, HDFC, ICICI, Axis, Kotak, and all others.',
  },
  {
    question: 'What should I do if I shared an OTP with a scammer?',
    answer:
      'Act within minutes: (1) Call your bank immediately to block the account or card  use the number on the back of your card, not the number provided by the caller. (2) Call 1930  the national cybercrime helpline. (3) Change your internet banking password from a secure device. (4) File a complaint at cybercrime.gov.in with the phone number and transaction details.',
  },
];

export default function OtpFraudPage() {
  const schemas = [
    webPageSchema({
      name: 'OTP Fraud India 2025: How Phone Scammers Steal One-Time Passwords',
      description: 'How phone scammers trick Indians into sharing OTPs and drain bank accounts  warning signs and prevention.',
      url: PAGE_PATH,
    }),
    breadcrumbListSchema([
      { name: 'Home', url: '/' },
      { name: 'Scams', url: '/scams' },
      { name: 'Phone Scams', url: '/scams/phone-scams' },
      { name: 'OTP Fraud', url: PAGE_PATH },
    ]),
    faqPageSchema(FAQ_ITEMS),
    {
      '@context': 'https://schema.org' as const,
      '@type': 'Article',
      headline: 'OTP Fraud India 2025: How Phone Scammers Steal One-Time Passwords',
      url: CANONICAL,
      author: organizationRef(),
      publisher: organizationRef(),
      datePublished: '2025-01-01',
      dateModified: new Date().toISOString().split('T')[0],
      inLanguage: 'en-IN',
      keywords: ['otp fraud india', 'otp scam phone call', 'sim swap attack india', 'bank otp stolen india'],
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
            <Link href="/scams/phone-scams">Phone Scams</Link><span aria-hidden="true">/</span>
            <span className="text-gray-600 dark:text-gray-300">OTP Fraud</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 text-sm font-medium px-4 py-1.5 rounded-full mb-5">
            <span aria-hidden="true">📱</span><span>Phone Scam Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-5 leading-tight">
            OTP Fraud India
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
            Scammers posing as bank executives, courier agents, and government officials call to steal your OTP  and drain your account within minutes.
          </p>
          <div className="flex flex-wrap gap-6 mt-6">
            {[
              { v: '₹1,270 Cr', l: 'lost to OTP fraud in FY24' },
              { v: '60 sec', l: 'average time to drain account' },
              { v: '1930', l: 'call immediately if targeted' },
            ].map(s => (
              <div key={s.l} className="text-center">
                <div className="text-2xl font-bold text-red-700 dark:text-red-400">{s.v}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 max-w-[120px]">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-red-600 dark:bg-red-700 py-4 px-4">
        <div className="max-w-4xl mx-auto text-white text-sm font-medium" data-speakable="true">
          <strong>Rule:</strong> No bank, RBI, government agency, or courier company ever asks for your OTP. Anyone who does is a fraudster  hang up immediately.
        </div>
      </div>

      <section className="py-14 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8" data-speakable="true">How OTP Fraud Works</h2>
          <div className="space-y-4">
            {[
              { type: 'Fake Bank Executive Call', desc: 'Caller claims to be from your bank\'s fraud department. Says your account has suspicious activity and they need to "verify" your identity by sending an OTP. They have your partial account details (often purchased from data brokers) to sound credible. The OTP authorises a fund transfer to a mule account.' },
              { type: 'Courier / Parcel Scam', desc: '"A package is stuck at customs  pay a small fee to release it." They send you a payment link and ask for the OTP that arrives on your phone to "verify" the transaction. The OTP actually authorises a debit from your account.' },
              { type: 'SIM Swap Attack', desc: 'Fraudster contacts your telecom provider with your Aadhaar or date of birth, requests a SIM replacement claiming the old one was lost. Once the swap is complete, all SMS OTPs are delivered to the attacker, not you. Your phone loses signal  that is the warning sign.' },
              { type: 'Screen Share / Remote Access', desc: '"Tech support" asks you to install AnyDesk or TeamViewer to "fix" a banking issue. Once you install it, they watch your screen live and capture the OTP when it arrives. Never give remote access to anyone claiming to help with banking.' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-950 rounded-xl p-5 border border-gray-100 dark:border-gray-800">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{item.type}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center" data-speakable="true">
            Warning Signs
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              'Unsolicited call claiming to be your bank',
              'Caller asks you to share or read out an OTP',
              'Urgency  "your account will be blocked in 10 minutes"',
              'Asks you to install a remote access app',
              'Phone loses network signal unexpectedly (SIM swap sign)',
              'Caller already has partial personal/account details',
              'Request to "verify" by making a ₹1 test transaction',
              'SMS OTPs arriving for transactions you did not initiate',
            ].map((flag, i) => (
              <div key={i} className="flex gap-3 bg-white dark:bg-gray-900 rounded-lg p-4 border border-red-100 dark:border-red-900/30">
                <span className="text-red-500 flex-shrink-0 font-bold" aria-hidden="true">✗</span>
                <p className="text-sm text-gray-700 dark:text-gray-300">{flag}</p>
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
