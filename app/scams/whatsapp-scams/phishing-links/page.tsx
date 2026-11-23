import type { Metadata } from 'next';
import Link from 'next/link';
import DefaultLayout from '@/components/DefaultLayout';
import RelatedTopics from '@/components/RelatedTopics';
import { jsonLd, breadcrumbListSchema, faqPageSchema, webPageSchema, organizationRef } from '@/lib/seo/schema';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://rakshaai.co';
const PAGE_PATH = '/scams/whatsapp-scams/phishing-links';
const CANONICAL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: 'WhatsApp Phishing Links India: Fake Bank & Govt URLs',
  description:
    'How phishing links shared via WhatsApp steal banking credentials, OTPs, and Aadhaar details in India. How to check any link before clicking  free instant scan.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'WhatsApp Phishing Links India 2025 | RakshaAI',
    description: 'Fake SBI, HDFC, IRCTC, and government portal links sent via WhatsApp  how they steal your login credentials and how to check any link for free.',
    url: CANONICAL,
    type: 'article',
    siteName: 'RakshaAI',
    locale: 'en_IN',
      images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'RakshaAI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WhatsApp Phishing Links India | RakshaAI',
    description: 'Malicious links via WhatsApp  how they clone bank portals and steal OTPs. Check any link free.',
      images: ['/opengraph-image'],
  },
  robots: { index: true, follow: true, 'max-snippet': -1 } as Record<string, unknown>,
};

const FAQ_ITEMS = [
  {
    question: 'How do I check if a WhatsApp link is a phishing site?',
    answer:
      'Copy the link (long-press → Copy Link) without clicking it, then paste it at rakshaai.co/check. You will receive a Trust Score in under 5 seconds. A score below 40 means the link is a likely phishing attempt. Never click bank or government links shared via WhatsApp  always navigate directly by typing the URL.',
  },
  {
    question: 'Can clicking a WhatsApp link steal my banking password?',
    answer:
      'Yes  phishing links lead to fake login pages that visually mimic real bank portals (SBI YONO, HDFC NetBanking, ICICI Bank). When you enter credentials, they are captured instantly. Some links also install spyware on Android devices that captures OTPs in real time. Never enter banking credentials on pages accessed via links.',
  },
  {
    question: 'What are signs that a WhatsApp link is fake?',
    answer:
      'Signs of a phishing link: (1) URL contains extra words or hyphens (sbi-kyc-update.in instead of onlinesbi.sbi.co.in). (2) URL uses a different TLD (.in, .net, .xyz instead of .co.in or .com). (3) Message creates urgency  "KYC expires today" or "account will be blocked". (4) Asks for OTP, CVV, or full card number. (5) Received from an unknown number or unfamiliar contact.',
  },
  {
    question: 'What should I do if I clicked a phishing link on WhatsApp?',
    answer:
      'Act immediately: (1) Do not enter any credentials on the page. (2) If you already entered details, call your bank immediately to block the account. (3) Change your internet banking password from a secure device. (4) Call 1930 to report the incident. (5) File a complaint at cybercrime.gov.in. (6) Report the WhatsApp number and link at rakshaai.co.',
  },
];

export default function WhatsAppPhishingLinksPage() {
  const schemas = [
    webPageSchema({
      name: 'WhatsApp Phishing Links India 2025: Fake Bank & Government URLs',
      description: 'How phishing links shared via WhatsApp steal banking credentials in India  detection and prevention.',
      url: PAGE_PATH,
    }),
    breadcrumbListSchema([
      { name: 'Home', url: '/' },
      { name: 'Scams', url: '/scams' },
      { name: 'WhatsApp Scams', url: '/scams/whatsapp-scams' },
      { name: 'Phishing Links', url: PAGE_PATH },
    ]),
    faqPageSchema(FAQ_ITEMS),
    {
      '@context': 'https://schema.org' as const,
      '@type': 'Article',
      headline: 'WhatsApp Phishing Links India 2025: How Fake Bank & Government URLs Steal Credentials',
      url: CANONICAL,
      author: organizationRef(),
      publisher: organizationRef(),
      datePublished: '2025-01-01',
      dateModified: new Date().toISOString().split('T')[0],
      inLanguage: 'en-IN',
      keywords: ['whatsapp phishing link india', 'fake bank link whatsapp', 'whatsapp sbi fake link', 'phishing whatsapp india'],
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
            <Link href="/scams/whatsapp-scams">WhatsApp Scams</Link><span aria-hidden="true">/</span>
            <span className="text-gray-600 dark:text-gray-300">Phishing Links</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 text-sm font-medium px-4 py-1.5 rounded-full mb-5">
            <span aria-hidden="true">🎣</span><span>WhatsApp Fraud Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-5 leading-tight">
            WhatsApp Phishing Links India
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
            Malicious links mimicking SBI, HDFC, IRCTC, and government portals  shared via WhatsApp to steal login credentials, OTPs, and banking access.
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <Link href="/check" className="inline-block bg-red-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-700 transition-colors">
              Check a WhatsApp Link Free <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <div className="bg-orange-600 dark:bg-orange-700 py-4 px-4">
        <div className="max-w-4xl mx-auto text-white text-sm font-medium" data-speakable="true">
          🔒 <strong>Rule:</strong> Never click bank or government portal links sent via WhatsApp. Always type the URL directly or use the official app.
        </div>
      </div>

      <section className="py-14 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8" data-speakable="true">Common Phishing Link Types via WhatsApp</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { cat: 'Bank KYC Fraud', eg: 'sbi-kyc-update.in, hdfcbank-secure.net', msg: '"Your SBI/HDFC KYC expires today. Update immediately or your account will be blocked."' },
              { cat: 'Government Portal Clone', eg: 'irctc-refund.net, incometax-refund.com', msg: '"Your IRCTC refund of ₹1,200 is pending. Click to claim."' },
              { cat: 'UPI Payment Link', eg: 'upi-payment-link.in, paytm-verify.com', msg: '"Please complete your UPI KYC by clicking the secure link below."' },
              { cat: 'E-commerce Checkout', eg: 'amazon-india-sale.in, flipkart-discount.net', msg: '"Exclusive deal for you! Claim 90% off before midnight. Limited stock."' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-950 rounded-xl p-4 border border-gray-100 dark:border-gray-800">
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-2">{item.cat}</h3>
                <p className="text-xs font-mono text-red-500 dark:text-red-400 mb-2">{item.eg}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 italic">&ldquo;{item.msg}&rdquo;</p>
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
