import type { Metadata } from 'next';
import DefaultLayout from '@/components/DefaultLayout';
import {
  jsonLd,
  breadcrumbListSchema,
  webPageSchema,
  faqPageSchema,
  organizationRef,
} from '@/lib/seo/schema';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://rakshaai.co';

export const metadata: Metadata = {
  title: 'RakshaAI Trust Score: How We Detect Scams in India',
  description:
    'How RakshaAI detects scams: domain age, SSL validation, 6 live blacklists, WHOIS, and community reports. Free scam detection tool built for India.',
  alternates: {
    canonical: `${SITE_URL}/methodology`,
  },
  openGraph: {
    title: 'RakshaAI Trust Score Methodology  How We Detect Scams',
    description:
      'How RakshaAI calculates Trust Scores for websites, UPI IDs, and phone numbers  domain history, SSL, blacklists, community reports, and AI analysis explained.',
    url: `${SITE_URL}/methodology`,
    type: 'website',
    siteName: 'RakshaAI',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'RakshaAI Trust Score Methodology' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@RakshaAi247',
    title: 'RakshaAI Trust Score Methodology',
    description: 'How we detect scams: domain analysis, blacklists, AI pattern recognition, and India-specific community data.',
    images: ['/opengraph-image'],
  },
};

const SCORING_FACTORS = [
  {
    factor: 'Domain Age & History',
    weight: 'High',
    description:
      'Recently registered domains (under 30 days) are a strong phishing indicator. We check registration date, previous ownership history, and expiration patterns.',
    detail: 'Over 80% of phishing domains are less than 30 days old at time of attack.',
  },
  {
    factor: 'SSL Certificate Analysis',
    weight: 'High',
    description:
      "We verify the SSL certificate's validity, issuer reputation, expiration date, and grade (A+ to F). Mismatched or self-signed certificates on financial sites are red flags.",
    detail: 'All legitimate banking and payment sites require valid SSL; absence is a definitive risk signal.',
  },
  {
    factor: 'Blacklist Cross-Reference',
    weight: 'Critical',
    description:
      'We query Google Safe Browsing, PhishTank, VirusTotal, CERT-In advisories, and India-specific threat feeds in real time. A blacklist match triggers immediate high-risk classification.',
    detail: 'Databases updated every 15 minutes with new threat intelligence.',
  },
  {
    factor: 'WHOIS Data Analysis',
    weight: 'Medium',
    description:
      'We analyse registrar reputation, WHOIS privacy masking patterns, and registrant country. Domains registered through known bulk-registration services popular with scammers are flagged.',
    detail: 'Privacy masking on financial domains combined with new registration is a compound risk signal.',
  },
  {
    factor: 'Community Scam Reports',
    weight: 'High',
    description:
      'User-submitted reports from Indian users, moderated by AI and human reviewers. Community reports carry significant weight for phone numbers and UPI IDs.',
    detail: 'Community data is especially valuable for detecting new scams not yet in threat databases.',
  },
  {
    factor: 'AI Behavioral Pattern Analysis',
    weight: 'High',
    description:
      'Our AI models are trained on India-specific scam patterns: fake government portals, cloned banking sites, investment fraud templates, and digital arrest impersonation pages.',
    detail: 'Pattern matching catches novel variants of known scam types before they reach threat feeds.',
  },
  {
    factor: 'Business Verification Status',
    weight: 'Medium',
    description:
      'Entities with a RakshaAI Trust Badge have passed GST, PAN, MCA, and Aadhaar verification  contributing positively to their Trust Score.',
    detail: 'Verified businesses receive a minimum baseline score reflecting their confirmed legitimacy.',
  },
];

const FAQ_ITEMS = [
  {
    question: 'How is the Trust Score calculated?',
    answer:
      'The RakshaAI Trust Score (0–100) is a weighted composite of seven factors: domain age and history, SSL certificate quality, blacklist database matches, WHOIS data patterns, community scam reports, AI behavioral pattern analysis, and business verification status. Each factor is weighted by its predictive power for scam detection in the Indian context.',
  },
  {
    question: 'How accurate is the Trust Score?',
    answer:
      'RakshaAI is effective at detecting known threats via public blacklists and community reports. No automated system is 100% accurate  we recommend additional personal verification for high-value financial transactions.',
  },
  {
    question: 'How quickly are new scam websites detected?',
    answer:
      'Our threat intelligence databases update every 15 minutes. Community reports are processed within minutes of submission. New AI pattern detections are deployed continuously. Most active phishing campaigns are flagged within hours of launch.',
  },
  {
    question: 'Can a legitimate website get a low score?',
    answer:
      'Yes  legitimate new websites (launched within the past 30 days) may receive lower initial scores because domain age is a strong scam signal. If you believe your legitimate site has an incorrect score, contact support@rakshaai.co for a manual review.',
  },
  {
    question: 'What data sources does RakshaAI use?',
    answer:
      'We use Google Safe Browsing, PhishTank, VirusTotal, CERT-In advisories, India-specific threat feeds, WHOIS databases, SSL certificate authorities, and our community report database of user-submitted scam reports. See our data sources page for full details.',
  },
  {
    question: 'Is my check query stored or tracked?',
    answer:
      'We do not associate check queries with individual users or IP addresses. Only anonymised aggregate statistics are retained for improving our detection models. We do not sell, share, or monetise query data.',
  },
];

export default function MethodologyPage() {
  const pageSchemas = [
    webPageSchema({
      name: 'RakshaAI Trust Score Methodology',
      description:
        'How RakshaAI calculates Trust Scores for websites, UPI IDs, and phone numbers to detect scams and protect Indians from online fraud.',
      url: '/methodology',
    }),
    breadcrumbListSchema([
      { name: 'Home', url: '/' },
      { name: 'Methodology', url: '/methodology' },
    ]),
    faqPageSchema(FAQ_ITEMS),
    {
      '@context': 'https://schema.org' as const,
      '@type': 'TechArticle',
      headline: 'RakshaAI Trust Score Methodology: How AI Detects Online Scams in India',
      description:
        'Detailed explanation of how RakshaAI calculates Trust Scores using domain analysis, SSL checks, blacklist cross-referencing, community reports, and India-specific AI pattern detection.',
      url: `${SITE_URL}/methodology`,
      author: organizationRef(),
      publisher: organizationRef(),
      datePublished: '2024-01-01',
      dateModified: new Date().toISOString().split('T')[0],
      inLanguage: 'en-IN',
      keywords: [
        'trust score methodology',
        'scam detection India',
        'phishing detection algorithm',
        'website safety score',
        'AI fraud detection',
        'cybersecurity India',
      ],
    },
  ];

  return (
    <DefaultLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(pageSchemas) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-indigo-50 to-white dark:from-indigo-950/30 dark:to-gray-900 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <span>🔬</span>
            <span>How It Works</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            How RakshaAI Detects Scams
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Our Trust Score (0–100) combines seven detection factors to give you an instant, accurate verdict on any website, UPI ID, or phone number.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm">
            {[
              { label: 'Response Time', value: '<5 sec' },
              { label: 'Threat Databases', value: '6+' },
              { label: 'Detection Factors', value: '7' },
              { label: 'Always', value: 'Free' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">{stat.value}</div>
                <div className="text-gray-500 dark:text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Score Scale */}
      <section className="py-14 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Understanding Your Trust Score
          </h2>
          <div className="grid md:grid-cols-3 gap-6" id="trust-score-scale" data-speakable="true">
            <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-xl p-6">
              <div className="text-4xl font-black text-green-600 dark:text-green-400 mb-2">70–100</div>
              <div className="text-lg font-semibold text-green-700 dark:text-green-300 mb-3">Generally Safe</div>
              <p className="text-sm text-green-800/70 dark:text-green-200/60 leading-relaxed">
                No significant risk signals detected. No active blacklist matches. Domain and SSL look legitimate. Proceed with normal caution.
              </p>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6">
              <div className="text-4xl font-black text-yellow-600 dark:text-yellow-400 mb-2">40–69</div>
              <div className="text-lg font-semibold text-yellow-700 dark:text-yellow-300 mb-3">Caution Advised</div>
              <p className="text-sm text-yellow-800/70 dark:text-yellow-200/60 leading-relaxed">
                Some risk signals present  new domain, unusual WHOIS data, or minor community reports. Verify the entity independently before transacting.
              </p>
            </div>
            <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-xl p-6">
              <div className="text-4xl font-black text-red-600 dark:text-red-400 mb-2">0–39</div>
              <div className="text-lg font-semibold text-red-700 dark:text-red-300 mb-3">High Risk</div>
              <p className="text-sm text-red-800/70 dark:text-red-200/60 leading-relaxed">
                Multiple risk signals or active blacklist match. Likely a scam or phishing site. Do not click links, enter credentials, or make payments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scoring Factors */}
      <section className="py-14 px-4 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 text-center">
            The Seven Detection Factors
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-center mb-10">
            Every RakshaAI check analyses these seven signals simultaneously.
          </p>
          <div className="space-y-4" id="detection-factors" data-speakable="true">
            {SCORING_FACTORS.map((item, i) => (
              <div
                key={item.factor}
                className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-6 flex gap-4"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 dark:bg-indigo-900/40 rounded-lg flex items-center justify-center text-indigo-700 dark:text-indigo-300 font-bold text-sm">
                  {i + 1}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-semibold text-gray-900 dark:text-white">{item.factor}</h3>
                    <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                      item.weight === 'Critical'
                        ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
                        : item.weight === 'High'
                        ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300'
                        : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                    }`}>
                      {item.weight} Weight
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 leading-relaxed">{item.description}</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 italic">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 text-center">
            How to Check a Website in 5 Steps
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-center mb-10">
            Takes under 60 seconds. No account needed.
          </p>
          <ol className="space-y-5" id="how-to-steps" data-speakable="true">
            {[
              { step: 'Copy the suspicious URL', desc: 'Copy the full website address (starting with http:// or https://) that you want to verify.' },
              { step: 'Paste it into RakshaAI', desc: 'Go to rakshaai.co/check and paste it into the search box. No login required.' },
              { step: 'Review your Trust Score', desc: 'Results appear in under 5 seconds with a colour-coded verdict: green (safe), yellow (caution), red (high risk).' },
              { step: 'Read the risk breakdown', desc: 'See exactly which signals triggered the score  domain age, SSL, blacklists, community reports  in plain language.' },
              { step: 'Report confirmed scams', desc: 'If it is a scam, use the Report button to protect other Indian users from the same threat.' },
            ].map((item, i) => (
              <li key={i} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">{item.step}</div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Data Sources */}
      <section className="py-14 px-4 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Threat Intelligence Sources
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4" id="data-sources" data-speakable="true">
            {[
              { name: 'Google Safe Browsing', desc: 'Malware and phishing URL blacklist' },
              { name: 'PhishTank', desc: 'Community-verified phishing database' },
              { name: 'VirusTotal', desc: '70+ antivirus engine aggregator' },
              { name: 'CERT-In Advisories', desc: 'Indian government threat bulletins' },
              { name: 'India-Specific Threat Feeds', desc: 'UPI fraud, bank impersonation, job scams' },
              { name: 'RakshaAI Community Reports', desc: '1M+ user-submitted scam reports from India' },
            ].map((src) => (
              <div
                key={src.name}
                className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-5"
              >
                <div className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{src.name}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{src.desc}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400 dark:text-gray-500 mt-6">
            Public threat databases are queried in real time. Community reports are processed and moderated before use.{' '}
            <a href="/data-sources" className="text-indigo-500 hover:underline">Full data source details &rarr;</a>
          </p>
        </div>
      </section>

      {/* E-E-A-T / Trust Signals */}
      <section className="py-14 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Why Trust RakshaAI
          </h2>
          <div className="grid md:grid-cols-2 gap-6" id="trust-signals" data-speakable="true">
            {[
              {
                title: 'India-First Dataset',
                desc: 'Built specifically for Indian scam patterns  UPI fraud, digital arrest, IRCTC phishing, job offer scams  not adapted from Western models.',
              },
              {
                title: 'Free, Always',
                desc: 'All detection tools are completely free with no registration, no trial limits, and no premium tier required for safety features.',
              },
              {
                title: 'Community-Powered Reports',
                desc: 'Indian users submit fraud reports for websites, UPI IDs, and phone numbers  contributing to a community database that improves detection of newly emerging scams.',
              },
              {
                title: 'Transparent Methodology',
                desc: 'We publish exactly how Trust Scores are calculated. No black box  you can see which factors triggered every score.',
              },
              {
                title: 'Aligned with Government',
                desc: 'Our guidance aligns with CERT-In advisories, MeitY cybersecurity guidelines, and the 1930 national helpline framework.',
              },
              {
                title: 'Registered Indian Company',
                desc: 'RakshaAI is a registered Indian company operating under Indian IT law, data protection requirements, and RBI cybersecurity guidance.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-5 bg-gray-50 dark:bg-gray-950 rounded-xl border border-gray-100 dark:border-gray-800"
              >
                <div className="text-indigo-500 text-xl flex-shrink-0">✓</div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-4 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Methodology FAQs
          </h2>
          <div className="space-y-4" id="methodology-faq" data-speakable="true">
            {FAQ_ITEMS.map((item) => (
              <details
                key={item.question}
                className="group bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-6"
              >
                <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer list-none flex justify-between items-center gap-4">
                  {item.question}
                  <span className="text-gray-400 group-open:rotate-180 transition-transform text-lg flex-shrink-0">▾</span>
                </summary>
                <p className="mt-4 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-indigo-600 dark:bg-indigo-700">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Check Something Now</h2>
          <p className="text-indigo-100 mb-8">
            Put our methodology to work. Check any website, UPI ID, or phone number free in under 5 seconds.
          </p>
          <a
            href="/check"
            className="inline-block bg-white text-indigo-700 font-semibold px-8 py-3 rounded-lg hover:bg-indigo-50 transition-colors"
          >
            Start Free Check →
          </a>
        </div>
      </section>
    </DefaultLayout>
  );
}
