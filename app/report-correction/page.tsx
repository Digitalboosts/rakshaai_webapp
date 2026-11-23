import type { Metadata } from 'next';
import Link from 'next/link';
import DefaultLayout from '@/components/DefaultLayout';
import { jsonLd, webPageSchema, breadcrumbListSchema } from '@/lib/seo/schema';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://rakshaai.co';

export const metadata: Metadata = {
  title: 'Report Correction & Dispute Process | RakshaAI',
  description:
    'Request a correction if your website, UPI ID, or phone number is incorrectly flagged on RakshaAI. Dispute process and resolution time.',
  alternates: {
    canonical: `${SITE_URL}/report-correction`,
  },
  openGraph: {
    title: 'Report Correction & Dispute Process | RakshaAI',
    description:
      'Is your website, UPI ID, or phone number incorrectly flagged? Request a correction through RakshaAI review process.',
    url: `${SITE_URL}/report-correction`,
    type: 'website',
    siteName: 'RakshaAI',
    images: [
      { url: '/opengraph-image', width: 1200, height: 630, alt: 'RakshaAI Report Correction' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Report Correction & Dispute Process | RakshaAI',
    description: 'Request a correction for an incorrectly flagged identifier on RakshaAI.',
    images: ['/opengraph-image'],
  },
};

const pageSchemas = [
  webPageSchema({
    name: 'Report Correction & Dispute Process',
    description:
      'How to dispute or correct an incorrect scam report for a website, UPI ID, or phone number on RakshaAI.',
    url: '/report-correction',
  }),
  breadcrumbListSchema([
    { name: 'Home', url: '/' },
    { name: 'Report Correction', url: '/report-correction' },
  ]),
];

export default function ReportCorrectionPage() {
  return (
    <DefaultLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(pageSchemas) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/30 dark:to-gray-900 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <span>✏️</span>
            <span>Dispute &amp; Correction</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Request a Report Correction
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            If your website, UPI ID, or phone number is incorrectly flagged on RakshaAI, you can
            request a manual review. We take corrections seriously and respond to all well-documented
            requests.
          </p>
        </div>
      </section>

      {/* Emergency Block */}
      <section className="py-8 px-4 bg-red-50 dark:bg-red-950/20 border-y border-red-200 dark:border-red-800/40">
        <div className="max-w-3xl mx-auto">
          <div className="flex gap-4">
            <span className="text-red-600 text-2xl flex-shrink-0">🚨</span>
            <div>
              <h2 className="font-semibold text-red-800 dark:text-red-300 mb-1">
                Lost Money to a Scam? Act Immediately.
              </h2>
              <p className="text-sm text-red-700 dark:text-red-400 leading-relaxed">
                This page is for correcting incorrectly flagged identifiers. If you have been
                scammed, do not wait  report it now:
              </p>
              <ul className="mt-2 space-y-1 text-sm text-red-700 dark:text-red-400">
                <li>
                  <strong>Call 1930</strong>  National Cybercrime Helpline (24/7)
                </li>
                <li>
                  File at{' '}
                  <a
                    href="https://cybercrime.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    cybercrime.gov.in
                  </a>
                </li>
                <li>
                  <strong>Call your bank</strong> immediately to block and dispute the transaction
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* When to request correction */}
      <section className="py-14 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            When Should You Request a Correction?
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: 'Your legitimate website has a low trust score',
                desc: 'A new or recently relaunched domain may have a low initial score due to domain age signals. Provide evidence of your business legitimacy for a manual review.',
                ok: true,
              },
              {
                title: 'Your UPI ID is incorrectly flagged',
                desc: 'If your personal or business UPI ID appears in our community report database incorrectly, you can request removal with supporting documentation.',
                ok: true,
              },
              {
                title: 'Your phone number is listed from a mistake',
                desc: 'Phone numbers can be reassigned by carriers. If your number was previously owned by someone who used it fraudulently, we can review and update the record.',
                ok: true,
              },
              {
                title: 'You want to suppress accurate reports',
                desc: 'We cannot remove verified reports that accurately document fraud. Our correction process is not a takedown tool for legitimate scam reports.',
                ok: false,
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`border rounded-xl p-5 ${
                  item.ok
                    ? 'bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800/40'
                    : 'bg-gray-50 dark:bg-gray-950 border-gray-200 dark:border-gray-800'
                }`}
              >
                <div className="flex gap-2 items-start">
                  <span className={item.ok ? 'text-green-600' : 'text-gray-400'}>
                    {item.ok ? '✓' : '✗'}
                  </span>
                  <div>
                    <div
                      className={`font-semibold text-sm mb-1 ${
                        item.ok
                          ? 'text-green-800 dark:text-green-300'
                          : 'text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {item.title}
                    </div>
                    <p
                      className={`text-xs leading-relaxed ${
                        item.ok
                          ? 'text-green-700 dark:text-green-400'
                          : 'text-gray-500 dark:text-gray-400'
                      }`}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to include */}
      <section className="py-14 px-4 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            What to Include in Your Request
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            Requests with clear supporting evidence are reviewed faster and have a higher success
            rate. Please include as many of the following as apply:
          </p>
          <ol className="space-y-4">
            {[
              {
                step: '01',
                title: 'The identifier',
                body: 'The exact website URL, UPI ID, or phone number that is flagged. Be precise  partial matches cannot be reviewed.',
              },
              {
                step: '02',
                title: 'Your relationship to it',
                body: 'Are you the domain owner, business operator, UPI account holder, or phone subscriber? Provide brief context.',
              },
              {
                step: '03',
                title: 'Evidence of legitimacy',
                body: 'For websites: GST certificate, domain registration proof, or a live screenshot of the legitimate business. For UPI IDs: screenshot of your UPI app showing account ownership. For phone numbers: carrier documentation if available.',
              },
              {
                step: '04',
                title: 'Description of the error',
                body: 'Explain specifically what is incorrect. Is the score too low? Is there a community report that is factually wrong? The more specific you are, the faster we can review.',
              },
              {
                step: '05',
                title: 'Your contact email',
                body: 'We will respond to the email you submit the request from. Make sure it is one you monitor.',
              },
            ].map((item) => (
              <li key={item.step} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-lg flex items-center justify-center font-bold text-sm">
                  {item.step}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white mb-1">
                    {item.title}
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Review Process */}
      <section className="py-14 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Review Timeline &amp; Process
          </h2>
          <div className="space-y-4">
            {[
              {
                phase: 'Acknowledgement',
                time: 'Within 2 business days',
                desc: 'We confirm receipt of your request and let you know if we need additional information.',
              },
              {
                phase: 'Review',
                time: '3-10 business days',
                desc: 'Our team reviews your evidence, checks community reports, and may run additional technical checks on the identifier.',
              },
              {
                phase: 'Decision',
                time: 'After review',
                desc: 'We notify you of the outcome. If the report is corrected, the change takes effect within 24 hours of the decision.',
              },
              {
                phase: 'Appeal',
                time: 'Within 30 days of decision',
                desc: 'If you disagree with the outcome, you may appeal by providing additional evidence not included in the original request.',
              },
            ].map((item) => (
              <div
                key={item.phase}
                className="flex gap-4 bg-gray-50 dark:bg-gray-950 border border-gray-100 dark:border-gray-800 rounded-xl p-5"
              >
                <div className="flex-shrink-0 text-indigo-500 text-xl">&#x25B6;</div>
                <div>
                  <div className="flex flex-wrap gap-3 items-center mb-1">
                    <span className="font-semibold text-gray-900 dark:text-white text-sm">
                      {item.phase}
                    </span>
                    <span className="text-xs bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 px-2 py-0.5 rounded-full">
                      {item.time}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit CTA */}
      <section className="py-14 px-4 bg-blue-600 dark:bg-blue-700">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Submit a Correction Request</h2>
          <p className="text-blue-100 mb-8 leading-relaxed">
            Email your correction request with supporting evidence to our support team. Include the
            subject line: <strong className="text-white">"Report Correction Request"</strong>.
          </p>
          <a
            href="mailto:support@rakshaai.co?subject=Report%20Correction%20Request"
            className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Email support@rakshaai.co
          </a>
          <p className="text-blue-200 text-sm mt-4">
            Response within 2 business days. Business hours: Mon-Sat, 10am-6pm IST.
          </p>
        </div>
      </section>

      {/* Related links */}
      <section className="py-12 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Related Resources
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/data-sources"
              className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              How Our Data Works
            </Link>
            <Link
              href="/editorial-policy"
              className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              Editorial Policy
            </Link>
            <Link
              href="/methodology"
              className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              Trust Score Methodology
            </Link>
            <Link
              href="/contact"
              className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              General Contact
            </Link>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
