import type { Metadata } from 'next';
import Link from 'next/link';
import DefaultLayout from '@/components/DefaultLayout';
import { jsonLd, webPageSchema, breadcrumbListSchema } from '@/lib/seo/schema';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://rakshaai.co';

export const metadata: Metadata = {
  title: 'Editorial Policy: How RakshaAI Creates Scam Content',
  description:
    'How RakshaAI creates, reviews, and updates scam content. Our standards for accuracy, source attribution, and corrections for blog posts and safety guides.',
  alternates: {
    canonical: `${SITE_URL}/editorial-policy`,
  },
  openGraph: {
    title: 'Editorial Policy | RakshaAI',
    description:
      'RakshaAI editorial standards: how we create, source, review, and correct cybersecurity content for Indian users.',
    url: `${SITE_URL}/editorial-policy`,
    type: 'website',
    siteName: 'RakshaAI',
    images: [
      { url: '/opengraph-image', width: 1200, height: 630, alt: 'RakshaAI Editorial Policy' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Editorial Policy | RakshaAI',
    description: 'How RakshaAI creates and maintains accurate cybersecurity content.',
    images: ['/opengraph-image'],
  },
};

const pageSchemas = [
  webPageSchema({
    name: 'Editorial Policy',
    description:
      'RakshaAI editorial standards for scam prevention content, source citation, accuracy, and corrections.',
    url: '/editorial-policy',
  }),
  breadcrumbListSchema([
    { name: 'Home', url: '/' },
    { name: 'Editorial Policy', url: '/editorial-policy' },
  ]),
];

export default function EditorialPolicyPage() {
  return (
    <DefaultLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(pageSchemas) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-900 py-16 px-4 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <span>📋</span>
            <span>Editorial Standards</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Editorial Policy
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            This policy explains how RakshaAI creates, reviews, updates, and corrects the content
            we publish  including blog articles, scam guides, safety tips, and detection
            methodology explanations.
          </p>
          <p className="text-sm text-gray-400 dark:text-gray-500 mt-4">
            Last updated: May 2026
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-14 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Our Editorial Mission
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            RakshaAI publishes content to help Indian internet users recognize and avoid online
            scams. Our editorial goal is to be accurate, practical, and honest about what we know
            and do not know.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            We are a private technology platform operated by Ehatech Services Pvt. Ltd. We are not
            a government body, law enforcement agency, or academic institution. Our content reflects
            our best understanding of the threat landscape based on publicly available data,
            community reports, and our team's cybersecurity knowledge.
          </p>
        </div>
      </section>

      {/* Source Standards */}
      <section className="py-14 px-4 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Source Standards
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            We follow these standards when sourcing information for our articles, guides, and
            detection methodology:
          </p>
          <div className="space-y-4">
            {[
              {
                title: 'Primary sources preferred',
                body: 'Wherever possible, we cite original sources: government advisories (CERT-In, MeitY, MHA), official press releases, published research, and regulatory filings.',
              },
              {
                title: 'Statistical claims require attribution',
                body: 'Numbers we publish (fraud loss figures, scam counts, etc.) cite the source and publication date. We do not publish statistics we cannot attribute to a verifiable source.',
              },
              {
                title: 'No invented credentials',
                body: 'We do not claim government database access, law enforcement relationships, or academic affiliations we do not have. See our data sources page for what we actually use.',
              },
              {
                title: 'Community reports are not verified fact',
                body: 'User-submitted scam reports are published as community signals, not as verified fact. We label them clearly and recommend independent verification.',
              },
              {
                title: 'External links',
                body: 'When we link to external resources, we prefer official government websites, established security research organisations, and publicly accessible databases.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-5"
              >
                <div className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                  {item.title}
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Assistance */}
      <section className="py-14 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Use of AI in Content Creation
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            Some RakshaAI content is drafted or assisted by AI writing tools. Where this is the
            case, all AI-generated drafts are reviewed by a human team member before publication.
            AI-generated content is not published without human review and factual verification.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            AI tools are not used to fabricate statistics, invent expert quotes, or generate fake
            user testimonials. Where names appear in testimonials or example scenarios on our site,
            these reflect real user experience or are clearly illustrative.
          </p>
        </div>
      </section>

      {/* Updates and Corrections */}
      <section className="py-14 px-4 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Updates &amp; Corrections
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Regular content updates
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                The Indian scam landscape changes rapidly. We review and update high-traffic pages
                and guides periodically, particularly when new scam types emerge or official
                statistics are published. The last updated date on each article reflects the most
                recent substantive revision.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Factual corrections
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                If you identify a factual error in our published content, we want to know. We will
                review the claim, update the content if the correction is substantiated, and where
                significant, note the correction at the bottom of the article.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Report and identifier corrections
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                If a scam report or trust score for a specific website, UPI ID, or phone number is
                incorrect, the correction process is separate from this editorial policy. See our{' '}
                <Link
                  href="/report-correction"
                  className="text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  Report Correction page
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* No Guarantees */}
      <section className="py-14 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            No Guarantees
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            RakshaAI content is provided for informational purposes. We do our best to keep
            information accurate and current, but we cannot guarantee that every piece of content is
            error-free or that our detection system will catch every scam.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Our trust scores and scam reports are signals to support your decision-making  not
            definitive legal or financial judgments. Always verify independently before taking
            financial action. If you have been defrauded, contact the{' '}
            <strong>National Cybercrime Helpline at 1930</strong> or file a complaint at{' '}
            <a
              href="https://cybercrime.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              cybercrime.gov.in
            </a>
            .
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="py-14 px-4 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Contact Our Editorial Team
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            For content corrections, factual feedback, or questions about our editorial standards:
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:support@rakshaai.co?subject=Editorial%20Feedback"
              className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Email Editorial Feedback
            </a>
            <Link
              href="/report-correction"
              className="inline-block bg-white dark:bg-gray-900 text-indigo-600 dark:text-indigo-400 font-semibold px-6 py-3 rounded-lg border border-indigo-200 dark:border-indigo-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 transition-colors"
            >
              Report Correction Process
            </Link>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-800">
            <div className="flex flex-wrap gap-6 text-sm">
              <Link
                href="/data-sources"
                className="text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                Data Sources
              </Link>
              <Link
                href="/methodology"
                className="text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                Trust Score Methodology
              </Link>
              <Link
                href="/about"
                className="text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                About RakshaAI
              </Link>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
