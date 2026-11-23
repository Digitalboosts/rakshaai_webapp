import type { Metadata } from 'next';
import Link from 'next/link';
import DefaultLayout from '@/components/DefaultLayout';
import { jsonLd, webPageSchema, breadcrumbListSchema } from '@/lib/seo/schema';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://rakshaai.co';

export const metadata: Metadata = {
  title: 'Data Sources & Scam Detection Methods',
  description:
    'Understand what data RakshaAI uses to detect scams. We combine public threat databases, community-submitted reports, and automated technical signals.',
  alternates: {
    canonical: `${SITE_URL}/data-sources`,
  },
  openGraph: {
    title: 'Data Sources & Detection Methods | RakshaAI',
    description:
      'How RakshaAI detects scams: public threat databases, community reports, domain analysis, and AI pattern matching. No government database integration.',
    url: `${SITE_URL}/data-sources`,
    type: 'website',
    siteName: 'RakshaAI',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'RakshaAI Data Sources' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Data Sources & Detection Methods | RakshaAI',
    description: 'What data RakshaAI uses to detect scams and protect Indians online.',
    images: ['/opengraph-image'],
  },
};

const pageSchemas = [
  webPageSchema({
    name: 'Data Sources & Detection Methods',
    description:
      'What data RakshaAI uses to calculate trust scores and generate scam reports for websites, UPI IDs, and phone numbers.',
    url: '/data-sources',
  }),
  breadcrumbListSchema([
    { name: 'Home', url: '/' },
    { name: 'Data Sources', url: '/data-sources' },
  ]),
];

export default function DataSourcesPage() {
  return (
    <DefaultLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(pageSchemas) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-indigo-50 to-white dark:from-indigo-950/30 dark:to-gray-900 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <span>🔎</span>
            <span>Transparency</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Where Our Data Comes From
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            RakshaAI is a private platform. Our trust scores and scam reports are based on publicly
            available threat databases, automated technical analysis, and community-submitted
            reports  not government databases or law enforcement records.
          </p>
        </div>
      </section>

      {/* Private Platform Disclaimer */}
      <section className="py-10 px-4 bg-amber-50 dark:bg-amber-950/20 border-y border-amber-200 dark:border-amber-800/40">
        <div className="max-w-3xl mx-auto">
          <div className="flex gap-4">
            <span className="text-amber-600 text-2xl flex-shrink-0">⚠️</span>
            <div>
              <h2 className="font-semibold text-amber-800 dark:text-amber-300 mb-2">
                Important: RakshaAI is a Private Platform
              </h2>
              <p className="text-sm text-amber-700 dark:text-amber-400 leading-relaxed">
                RakshaAI is operated by Ehatech Services Pvt. Ltd., a private Indian company. We are
                not affiliated with, endorsed by, or representing the Government of India, any state
                government, RBI, NPCI, TRAI, MeitY, police, or any law enforcement agency. Our
                reports are informational only and do not carry legal authority. Always verify
                independently before taking financial or legal action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Signals */}
      <section className="py-14 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            1. Automated Technical Signals
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            For website checks, our system automatically analyses several publicly accessible
            technical properties of the domain or URL you submit.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                name: 'Domain Age & Registration',
                desc: 'WHOIS data to determine when a domain was registered, its registrar, and whether the registration details appear consistent with a legitimate business.',
              },
              {
                name: 'SSL Certificate',
                desc: 'Whether the site has a valid HTTPS certificate, who issued it, whether it has expired, and whether the domain matches the certificate.',
              },
              {
                name: 'Redirect Chain Analysis',
                desc: 'Whether a URL redirects through suspicious intermediary domains commonly associated with phishing or ad-fraud infrastructure.',
              },
              {
                name: 'WHOIS Privacy Patterns',
                desc: 'Domains that heavily mask registrant identity on sites presenting themselves as financial or government services are weighted as higher risk.',
              },
            ].map((item) => (
              <div
                key={item.name}
                className="bg-gray-50 dark:bg-gray-950 border border-gray-100 dark:border-gray-800 rounded-xl p-5"
              >
                <div className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                  {item.name}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Public Threat Databases */}
      <section className="py-14 px-4 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            2. Public Threat Intelligence Databases
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            We query well-known, publicly accessible threat intelligence feeds. These are not
            exclusive or proprietary government feeds  they are the same databases used by security
            researchers and browsers worldwide.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              {
                name: 'Google Safe Browsing',
                desc: 'Malware and phishing URL blacklist maintained by Google. Publicly available API.',
              },
              {
                name: 'PhishTank',
                desc: 'Community-verified phishing database. Open data, publicly queryable.',
              },
              {
                name: 'VirusTotal',
                desc: 'Aggregates results from 70+ antivirus and URL scanners. Public API tier used.',
              },
              {
                name: 'CERT-In Advisories',
                desc: "Indian Computer Emergency Response Team's publicly published security bulletins and alerts.",
              },
              {
                name: 'Open WHOIS Data',
                desc: 'Public domain registration records accessible through standard WHOIS queries.',
              },
              {
                name: 'RakshaAI Community Database',
                desc: 'Reports submitted by Indian users through our platform, moderated before use. See community reports section below.',
              },
            ].map((src) => (
              <div
                key={src.name}
                className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-5"
              >
                <div className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                  {src.name}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  {src.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Reports */}
      <section className="py-14 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            3. Community-Submitted Reports
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            Indian users can report suspicious websites, UPI IDs, and phone numbers directly on
            RakshaAI. These community reports are a core part of our detection  especially for
            newly created scam accounts that have not yet appeared in major blacklists.
          </p>
          <div className="space-y-4">
            {[
              {
                title: 'What we collect',
                body: 'The reported identifier (URL, UPI ID, or phone number), the category of suspected fraud, and optional description text provided by the reporter.',
              },
              {
                title: 'Moderation',
                body: 'Reports are reviewed before they affect public trust scores. Automated filters catch obvious spam. Reports with multiple independent submissions receive higher weight.',
              },
              {
                title: 'Limitations',
                body: 'Community reports are user-submitted and can contain errors. A report does not constitute proof of fraud. We include community report counts in our output so you can weigh the evidence yourself.',
              },
              {
                title: 'Correction',
                body: 'If a report about your identifier is incorrect, you can request a review via our report correction process.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 dark:bg-gray-950 border border-gray-100 dark:border-gray-800 rounded-xl p-5"
              >
                <div className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                  {item.title}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Verification */}
      <section className="py-14 px-4 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            4. Business Verification Data
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            Businesses that apply for a RakshaAI Trust Badge go through a document verification
            process. Verified details are used as a positive signal in trust score calculation.
          </p>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
            {[
              'GST registration number (verified against public GST database)',
              'Aadhaar-based identity verification via OTP (KYC, not document storage)',
              'Supporting business documents uploaded and reviewed by our team',
              'PAN and MCA data where applicable',
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-indigo-500 flex-shrink-0">&#10003;</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Official Resources */}
      <section className="py-14 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            5. Official Indian Resources We Reference
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            We cite and link to official government resources in our guidance. We do not have
            real-time database access to these systems unless they provide public APIs.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                name: 'cybercrime.gov.in',
                desc: 'National Cybercrime Reporting Portal  we direct users here for formal complaints.',
              },
              {
                name: 'Cybercrime Helpline 1930',
                desc: 'MHA national fraud helpline  cited in all our emergency guidance.',
              },
              {
                name: 'CERT-In (cert-in.org.in)',
                desc: 'We consume CERT-In public advisories as a data source.',
              },
              {
                name: 'MeitY Guidelines',
                desc: 'Our safety guidance aligns with MeitY published cybersecurity recommendations.',
              },
            ].map((item) => (
              <div
                key={item.name}
                className="bg-gray-50 dark:bg-gray-950 border border-gray-100 dark:border-gray-800 rounded-xl p-5"
              >
                <div className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                  {item.name}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Analysis */}
      <section className="py-14 px-4 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            6. AI Pattern Analysis
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            We apply machine learning models trained on India-specific scam patterns to improve
            detection of novel threats that have not yet appeared in public blacklists. Our models
            were trained on:
          </p>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 mb-6">
            {[
              'Confirmed scam websites, UPI IDs, and phone numbers from public sources and community reports',
              'Structural patterns common to fake government portals, impersonation sites, and investment fraud pages',
              'UPI ID patterns associated with fraud (naming conventions, VPA patterns, handle types)',
              'Phone number patterns reported in Indian cybercrime datasets',
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-indigo-500 flex-shrink-0">&#10003;</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/40 rounded-lg p-4">
            <strong>Limitation:</strong> AI pattern analysis can produce false positives. A high
            risk score from pattern analysis alone  without community reports or blacklist matches
             should be treated as a caution signal, not a definitive verdict.
          </p>
        </div>
      </section>

      {/* Source Limitations */}
      <section className="py-14 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            7. What We Do Not Have Access To
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            To be transparent about our limitations, here is what we explicitly do not use:
          </p>
          <ul className="space-y-3">
            {[
              'FIR data, police records, or crime databases (not publicly accessible)',
              'TRAI subscriber records or telecom operator databases',
              'NPCI transaction records or UPI payment history',
              'Bank account or financial transaction data',
              'Aadhaar or national ID database lookups (beyond voluntary KYC for business verification)',
              'Court records or judgments',
              'RBI enforcement or blacklist databases (not publicly queryable)',
            ].map((item) => (
              <li key={item} className="flex gap-2 text-sm text-gray-600 dark:text-gray-300">
                <span className="text-red-400 flex-shrink-0">&#10007;</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-4 bg-indigo-50 dark:bg-indigo-950/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Questions or Corrections?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            If a report about your website, UPI ID, or phone number is incorrect, you can request a
            review. If you have questions about our methodology, read our detailed explanation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/report-correction"
              className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Request a Report Correction
            </Link>
            <Link
              href="/methodology"
              className="inline-block bg-white dark:bg-gray-900 text-indigo-600 dark:text-indigo-400 font-semibold px-6 py-3 rounded-lg border border-indigo-200 dark:border-indigo-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 transition-colors"
            >
              Read Methodology
            </Link>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
