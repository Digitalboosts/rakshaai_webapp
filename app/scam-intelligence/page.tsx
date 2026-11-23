import type { Metadata } from 'next';
import Link from 'next/link';
import DefaultLayout from '@/components/DefaultLayout';
import {
  jsonLd,
  breadcrumbListSchema,
  webPageSchema,
  faqPageSchema,
  definedTermSchema,
  organizationRef,
} from '@/lib/seo/schema';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://rakshaai.co';

export const metadata: Metadata = {
  title: 'India Scam Intelligence: Online Fraud Database 2026',
  description:
    'Active scam database for India: digital arrest, UPI fraud, phishing, investment scams, job fraud, and loan app scams. Warning signs and prevention guides.',
  alternates: {
    canonical: `${SITE_URL}/scam-intelligence`,
  },
  openGraph: {
    title: 'India Scam Intelligence Database | RakshaAI',
    description:
      'Every major scam type targeting India documented with definitions, warning signs, real examples, and prevention steps. Free, authoritative resource from RakshaAI.',
    url: `${SITE_URL}/scam-intelligence`,
    type: 'website',
    siteName: 'RakshaAI',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'India Scam Intelligence Database | RakshaAI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'India Scam Intelligence Database | RakshaAI',
    description: 'Comprehensive guide to every scam targeting India: digital arrest, UPI fraud, phishing, investment scams, and more.',
    images: ['/opengraph-image'],
  },
};

const SCAM_TYPES = [
  {
    id: 'digital-arrest',
    name: 'Digital Arrest Scam',
    category: 'Impersonation',
    severity: 'Critical',
    trend: 'Rapidly Growing',
    definition:
      'Fraudsters impersonate Indian law enforcement officers (police, CBI, Enforcement Directorate, Narcotics Control Bureau) via video call and falsely claim the victim is under "digital arrest" for fabricated crimes such as money laundering, drug trafficking, or terrorism financing. The victim is isolated and pressured to pay large sums to avoid fake prosecution.',
    warningSigns: [
      'Unexpected video call from someone claiming to be a government officer',
      'Demand to stay on call and not tell anyone (isolation tactic)',
      'Display of fake arrest warrants, court orders, or official letterheads',
      'Threats of immediate arrest if payment is not made',
      'Request for wire transfer, cryptocurrency, or gift cards',
      'Use of professional-looking backdrops mimicking police stations',
    ],
    prevention: [
      'Real Indian authorities NEVER conduct arrests via video call',
      'Real authorities NEVER demand payment over phone to avoid charges',
      'Hang up immediately  there is no such thing as "digital arrest" in Indian law',
      'Call 1930 immediately to report and seek guidance',
      'Do not share any personal, financial, or account information',
    ],
    guide: `${SITE_URL}/scams/digital-arrest`,
    emergencyAction: 'Call 1930 immediately if targeted',
  },
  {
    id: 'upi-fraud',
    name: 'UPI Fraud',
    category: 'Payment Fraud',
    severity: 'High',
    trend: 'Very Common',
    definition:
      'Fraudulent exploitation of India\'s Unified Payments Interface (UPI) system. Scammers trick victims into scanning fraudulent QR codes, accepting fake collect requests, or sending money to impersonated merchants.',
    warningSign: undefined,
    warningSigns: [
      'QR codes shared to "receive" money  QR codes only send money',
      '"Collect request" from unknown UPI IDs asking for OTP confirmation',
      'Fake payment confirmation screenshots shown before actual payment',
      'Pressure to pay first and receive goods/refund later',
      'UPI IDs with slight misspellings of known brands (amazonpay@fraud vs amazonpay)',
      'Refund scams asking you to pay to receive a larger refund',
    ],
    prevention: [
      'Verify ALL UPI IDs at rakshaai.co/upi-id-checker before payment',
      'You never need to scan a QR code to receive money',
      'Never share OTP  UPI OTPs are never required to receive money',
      'Screenshot payment confirmations from your own bank app, not from the sender',
      'Confirm large payments via a call to the recipient on a known number',
    ],
    guide: `${SITE_URL}/scams/upi-fraud`,
    emergencyAction: 'Call your bank and 1930 within 1 hour of fraudulent transfer',
  },
  {
    id: 'phishing',
    name: 'Phishing',
    category: 'Website Fraud',
    severity: 'High',
    trend: 'Very Common',
    definition:
      'Creation of fake websites that mimic legitimate Indian banks (SBI, HDFC, ICICI), government portals (IRCTC, income tax, EPFO, GST portal), or popular e-commerce platforms (Flipkart, Amazon, Meesho) to steal login credentials, banking OTPs, and personal data.',
    warningSigns: [
      'URL contains misspellings: "sbionlinebanking.com" vs "onlinesbi.sbi.co.in"',
      'Domain registered recently (check domain age at rakshaai.co/check)',
      'Site lacks valid SSL certificate (padlock icon absent or warning shown)',
      'Received via unsolicited WhatsApp, SMS, or email link',
      'Asks for full debit card number, CVV, or OTP on a form',
      'Offers too-good-to-be-true schemes (prize wins, refunds, KYC updates)',
    ],
    prevention: [
      'Check EVERY suspicious link at rakshaai.co/check before clicking',
      'Bookmark official banking and government portal URLs and use only those',
      'Never click banking links in SMS or WhatsApp  navigate directly',
      'Enable SMS/email transaction alerts from your bank',
      'Install browser security extensions that flag phishing sites',
    ],
    guide: `${SITE_URL}/scams/phishing`,
    emergencyAction: 'If credentials entered: change password immediately and call bank',
  },
  {
    id: 'investment-scams',
    name: 'Investment Scams',
    category: 'Financial Fraud',
    severity: 'High',
    trend: 'Growing',
    definition:
      'Fraudulent schemes promising guaranteed high returns through fake stock trading apps, Ponzi schemes, WhatsApp/Telegram investment groups, fraudulent mutual fund advisors, and unregulated cryptocurrency platforms. Often use deepfake celebrity endorsements.',
    warningSigns: [
      'Guaranteed returns promised (no legitimate investment guarantees returns)',
      'Pressure to invest quickly or miss out on "limited" opportunity',
      'Unregulated platform not registered with SEBI',
      'Celebrity or influencer endorsements (often deepfaked)',
      'Withdrawal difficulties once investment is made',
      'Recruitment of others required to earn commissions (Ponzi structure)',
    ],
    prevention: [
      'Verify all investment platforms on SEBI\'s registered entity list',
      'Never invest based on WhatsApp/Telegram group tips',
      'Guaranteed returns are always a fraud signal  no exceptions',
      'Report unregistered investment advisors to SEBI at sebi.gov.in',
      'Test withdrawals with a small amount before investing significantly',
    ],
    guide: `${SITE_URL}/scams/investment-scams`,
    emergencyAction: 'Report to SEBI (sebi.gov.in) and file FIR at cybercrime.gov.in',
  },
  {
    id: 'job-scams',
    name: 'Job Scams',
    category: 'Employment Fraud',
    severity: 'High',
    trend: 'Very Common',
    definition:
      'Fake job offers targeting unemployed or underemployed Indians, requiring upfront registration fees, security deposits, equipment purchases, or training payments before the non-existent job begins. Also includes fraudulent work-from-home task-completion scams.',
    warningSigns: [
      'Job requires upfront payment of any kind before employment',
      'Salary offered far exceeds market rate for the described work',
      'Job offer received without applying or interview process',
      'Tasks involve liking social media posts or watching videos for pay',
      'Company has no verifiable online presence or registered address',
      'Payment requested via UPI to personal accounts, not company accounts',
    ],
    prevention: [
      'Legitimate employers never require payment from job applicants',
      'Verify company registration at mca.gov.in before engaging',
      'Research company independently via LinkedIn and Google',
      'Never pay "registration fees", "training costs", or "equipment deposits"',
      'Report fraudulent job offers to cybercrime.gov.in',
    ],
    guide: `${SITE_URL}/scams/job-scams`,
    emergencyAction: 'Report at cybercrime.gov.in and call 1930',
  },
  {
    id: 'romance-scams',
    name: 'Romance Scams',
    category: 'Social Engineering',
    severity: 'Medium-High',
    trend: 'Growing',
    definition:
      'Fraudsters create fake romantic relationships on dating apps, social media, or matrimonial sites over weeks or months, building emotional trust before requesting money for fabricated emergencies (medical crises, travel costs, business problems, legal fees).',
    warningSigns: [
      'Person refuses to meet in person or on verified video call',
      'Claims to be working abroad (military, oil rig, doctor without borders)',
      'Builds relationship very quickly with intense affection ("love bombing")',
      'First money request follows a fabricated emergency story',
      'Requests gift cards, cryptocurrency, or wire transfer specifically',
      'Profile photos appear in reverse image search on other sites',
    ],
    prevention: [
      'Reverse image search all profile photos before developing trust',
      'Never send money to someone you have not met in person and verified',
      'Be cautious of anyone who refuses extended video calls',
      'Discuss with trusted family or friends before any financial decision',
      'Report romance fraud profiles to the platform immediately',
    ],
    guide: `${SITE_URL}/scams/romance-scams`,
    emergencyAction: 'Report to cybercrime.gov.in; contact bank if money transferred',
  },
  {
    id: 'loan-fraud',
    name: 'Loan Fraud & Illegal Lending Apps',
    category: 'Financial Fraud',
    severity: 'High',
    trend: 'Common',
    definition:
      'Fake loan apps and unregistered NBFCs offering instant loans with minimal documentation, then demanding large upfront processing fees, insurance premiums, or GST payments before disbursement  fees that are never refunded. Also includes predatory loan apps that access contacts and harass borrowers with illegal debt collection.',
    warningSigns: [
      'Loan approved without credit check or income verification',
      'Upfront fee required before loan disbursement',
      'App requests access to contacts, photos, and media',
      'Interest rates and fees not clearly disclosed before agreement',
      'Lender not listed in RBI\'s registered NBFC directory',
      'Harassment of contacts if payment is delayed',
    ],
    prevention: [
      'Verify lender registration at rbi.org.in before any engagement',
      'Legitimate lenders never require upfront fees for loan approval',
      'Read RBI\'s Sachet portal (sachet.rbi.org.in) for unregistered lender reports',
      'Review app permissions  legitimate lenders do not need contact access',
      'Report illegal lending apps to RBI and cybercrime.gov.in',
    ],
    guide: `${SITE_URL}/scams/loan-fraud`,
    emergencyAction: 'Report to RBI Sachet portal and cybercrime.gov.in',
  },
  {
    id: 'crypto-scams',
    name: 'Cryptocurrency Scams',
    category: 'Financial Fraud',
    severity: 'High',
    trend: 'Growing',
    definition:
      'Fraudulent cryptocurrency exchanges, fake airdrop promotions, pig-butchering investment schemes (where scammers build trust over weeks before encouraging crypto investment on fake platforms), and NFT fraud.',
    warningSigns: [
      'Platform not registered with any financial regulator',
      'Guaranteed returns in cryptocurrency (crypto is inherently volatile)',
      'Profits visible in app but withdrawal is blocked or requires more deposit',
      'Pressure to recruit others to earn returns',
      'Celebrity endorsements (often AI-generated deepfakes)',
      'Contact initiated via WhatsApp, Telegram, or dating app unexpectedly',
    ],
    prevention: [
      'Trade only on SEBI-compliant exchanges (WazirX, CoinDCX, etc.)',
      'Never invest based on unsolicited WhatsApp or Telegram tips',
      'If you cannot withdraw funds, stop depositing immediately',
      'Verify all celebrity endorsements directly on official social media',
      'Report crypto fraud to cybercrime.gov.in and ED (Enforcement Directorate)',
    ],
    guide: `${SITE_URL}/scams/crypto-scams`,
    emergencyAction: 'Report to cybercrime.gov.in and Enforcement Directorate',
  },
];

const FAQ_ITEMS = [
  {
    question: 'What is the most common online scam in India in 2025?',
    answer:
      'Digital arrest scams and UPI payment fraud are among the most common and rapidly growing scam types in India as of 2025. Digital arrest scams (where fraudsters impersonate police or CBI officers over video call) caused losses of over ₹1,776 crore in the first quarter of 2024 alone, according to the Ministry of Home Affairs. UPI fraud remains endemic with millions of incidents annually.',
  },
  {
    question: 'What should I do immediately if I have been scammed online in India?',
    answer:
      'Take these actions within the first 24 hours: (1) Call 1930  India\'s 24/7 national cybercrime helpline  immediately to report and request transaction reversal. (2) Contact your bank to freeze or reverse the transaction. (3) File a formal complaint at cybercrime.gov.in. (4) File an FIR at your nearest police station. (5) Report at rakshaai.co to protect others. Speed is critical  transaction reversal is most possible within the first few hours.',
  },
  {
    question: 'Is there really no such thing as a "digital arrest" in India?',
    answer:
      'Correct  "digital arrest" does not exist in Indian law. No provision of the Indian Penal Code (IPC), Code of Criminal Procedure (CrPC), or any Indian statute authorises law enforcement to arrest, detain, or question citizens via phone or video call. Real Indian authorities conduct physical arrests with proper documentation. Any call claiming you are under "digital arrest" is definitively a scam.',
  },
  {
    question: 'How can I check if a UPI ID belongs to a scammer?',
    answer:
      'Use RakshaAI\'s free UPI ID checker at rakshaai.co/upi-id-checker. Enter the UPI ID to check it against our fraud database of 1M+ community-reported scam IDs. Additionally, verify the recipient\'s identity through a separate channel (calling them on a known number) before making large transfers.',
  },
  {
    question: 'What government resources are available for cybercrime victims in India?',
    answer:
      'Key resources: (1) National Cybercrime Helpline: 1930 (24/7, toll-free). (2) Cybercrime Reporting Portal: cybercrime.gov.in. (3) RBI Sachet for loan/banking fraud: sachet.rbi.org.in. (4) CERT-In for technical cybersecurity incidents: cert-in.org.in. (5) SEBI for investment fraud: sebi.gov.in. (6) Local police cybercrime cell for FIR registration.',
  },
];

export default function ScamIntelligencePage() {
  const pageSchemas = [
    webPageSchema({
      name: 'India Scam Intelligence Database  RakshaAI',
      description:
        'Comprehensive database of every major scam type targeting India, with definitions, warning signs, and prevention steps for digital arrest, UPI fraud, phishing, investment scams, and more.',
      url: '/scam-intelligence',
    }),
    breadcrumbListSchema([
      { name: 'Home', url: '/' },
      { name: 'Scam Intelligence', url: '/scam-intelligence' },
    ]),
    faqPageSchema(FAQ_ITEMS),
    {
      '@context': 'https://schema.org' as const,
      '@type': 'Dataset',
      '@id': `${SITE_URL}/scam-intelligence#dataset`,
      name: 'RakshaAI India Scam Intelligence Database',
      description:
        'Structured database of scam types targeting India including digital arrest, UPI fraud, phishing, investment scams, job fraud, romance scams, loan fraud, and crypto fraud. Each entry includes definition, warning signs, and prevention guidance.',
      url: `${SITE_URL}/scam-intelligence`,
      creator: organizationRef(),
      dateModified: new Date().toISOString().split('T')[0],
      inLanguage: 'en-IN',
      keywords: [
        'India scams', 'UPI fraud', 'digital arrest scam', 'phishing India',
        'online fraud India', 'cybercrime India', 'scam types', 'fraud prevention',
      ],
      numberOfItems: SCAM_TYPES.length,
      spatialCoverage: {
        '@type': 'Country',
        name: 'India',
      },
    },
    ...SCAM_TYPES.map((scam) =>
      definedTermSchema({
        name: scam.name,
        description: scam.definition,
        url: `/scam-intelligence#${scam.id}`,
        inDefinedTermSet: `${SITE_URL}/scam-intelligence#scam-types`,
      })
    ),
  ];

  const severityColor = (severity: string) => {
    if (severity === 'Critical') return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300';
    if (severity === 'High') return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300';
    return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300';
  };

  return (
    <DefaultLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(pageSchemas) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-red-50 to-white dark:from-red-950/20 dark:to-gray-900 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <span>⚠️</span>
            <span>Scam Intelligence</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            India Scam Intelligence Database
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Every major scam type targeting India  documented with definitions, warning signs, real examples, and step-by-step prevention.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 dark:text-red-400">{SCAM_TYPES.length}</div>
              <div className="text-gray-500 dark:text-gray-400 mt-1">Scam Types Documented</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 dark:text-red-400">1M+</div>
              <div className="text-gray-500 dark:text-gray-400 mt-1">Reports in Database</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 dark:text-red-400">1930</div>
              <div className="text-gray-500 dark:text-gray-400 mt-1">Emergency Helpline</div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <div className="bg-red-600 dark:bg-red-700 py-3 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-4 text-white text-sm text-center">
          <span className="font-semibold">Been scammed?</span>
          <span>Call <strong>1930</strong> immediately (24/7 cybercrime helpline)</span>
          <span className="hidden sm:inline">|</span>
          <span>File report at <strong>cybercrime.gov.in</strong></span>
          <span className="hidden sm:inline">|</span>
          <span>Contact your bank to freeze the transaction</span>
        </div>
      </div>

      {/* Scam Type Index */}
      <section className="py-10 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Quick Navigation</h2>
          <div className="flex flex-wrap gap-2" id="scam-type-index">
            {SCAM_TYPES.map((scam) => (
              <a
                key={scam.id}
                href={`#${scam.id}`}
                className="inline-flex items-center gap-1.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm px-3 py-1.5 rounded-full transition-colors"
              >
                <span className={`w-2 h-2 rounded-full flex-shrink-0 ${scam.severity === 'Critical' ? 'bg-red-500' : scam.severity === 'High' ? 'bg-orange-500' : 'bg-yellow-500'}`} />
                {scam.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Scam Entries */}
      <section className="py-6 px-4 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-4xl mx-auto space-y-12" id="scam-types">
          {SCAM_TYPES.map((scam) => (
            <article
              key={scam.id}
              id={scam.id}
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden scroll-mt-20"
              data-speakable="true"
            >
              <div className="p-6 border-b border-gray-100 dark:border-gray-800">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">{scam.name}</h2>
                  <div className="flex flex-wrap gap-2">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${severityColor(scam.severity)}`}>
                      {scam.severity} Risk
                    </span>
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                      {scam.trend}
                    </span>
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                      {scam.category}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">{scam.definition}</p>
              </div>

              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100 dark:divide-gray-800">
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="text-red-500">⚠</span> Warning Signs
                  </h3>
                  <ul className="space-y-2">
                    {scam.warningSigns.map((sign, i) => (
                      <li key={i} className="flex gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="text-red-400 flex-shrink-0 mt-0.5">•</span>
                        {sign}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="text-green-500">✓</span> How to Stay Safe
                  </h3>
                  <ul className="space-y-2">
                    {scam.prevention.map((tip, i) => (
                      <li key={i} className="flex gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="text-green-500 flex-shrink-0 mt-0.5">✓</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="px-6 py-4 bg-gray-50 dark:bg-gray-950/50 flex flex-wrap items-center justify-between gap-3">
                <div className="text-xs font-semibold text-red-700 dark:text-red-400 bg-red-50 dark:bg-red-900/20 px-3 py-1.5 rounded-lg">
                  🚨 {scam.emergencyAction}
                </div>
                <Link
                  href={scam.guide}
                  className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200 font-medium transition-colors"
                >
                  Full guide →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4" id="scam-intelligence-faq" data-speakable="true">
            {FAQ_ITEMS.map((item) => (
              <details
                key={item.question}
                className="group bg-gray-50 dark:bg-gray-950 border border-gray-100 dark:border-gray-800 rounded-xl p-6"
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

      {/* Emergency Resources */}
      <section className="py-14 px-4 bg-red-50 dark:bg-red-950/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center" id="emergency-resources" data-speakable="true">
            Emergency Cybercrime Resources India
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: 'National Cybercrime Helpline', contact: '1930', desc: '24/7 toll-free. Fastest for transaction reversal.', url: 'tel:1930' },
              { name: 'Cybercrime Reporting Portal', contact: 'cybercrime.gov.in', desc: 'Formal FIR filing for all cybercrime types.', url: 'https://cybercrime.gov.in' },
              { name: 'RBI Sachet', contact: 'sachet.rbi.org.in', desc: 'Loan fraud, illegal NBFCs, banking scams.', url: 'https://sachet.rbi.org.in' },
              { name: 'CERT-In', contact: 'cert-in.org.in', desc: 'Technical cybersecurity incident reporting.', url: 'https://www.cert-in.org.in' },
              { name: 'SEBI SCORES', contact: 'scores.sebi.gov.in', desc: 'Investment fraud, unregistered advisors.', url: 'https://scores.sebi.gov.in' },
              { name: 'MeitY', contact: 'meity.gov.in', desc: 'Policy-level cybersecurity escalation.', url: 'https://www.meity.gov.in' },
            ].map((resource) => (
              <a
                key={resource.name}
                href={resource.url}
                target={resource.url.startsWith('http') ? '_blank' : undefined}
                rel={resource.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="bg-white dark:bg-gray-900 rounded-xl p-5 border border-red-100 dark:border-red-900/30 hover:shadow-md transition-shadow block"
              >
                <div className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{resource.name}</div>
                <div className="text-red-600 dark:text-red-400 font-mono text-sm mb-2">{resource.contact}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{resource.desc}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-indigo-600 dark:bg-indigo-700">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Verify Before You Act</h2>
          <p className="text-indigo-100 mb-8">
            Check any website, UPI ID, or phone number against our scam intelligence database instantly  free, no account needed.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/check"
              className="inline-block bg-white text-indigo-700 font-semibold px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors"
            >
              Check Website →
            </a>
            <a
              href="/upi-id-checker"
              className="inline-block bg-indigo-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-400 transition-colors"
            >
              Check UPI ID →
            </a>
            <a
              href="/phone-number-checker"
              className="inline-block bg-indigo-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-400 transition-colors"
            >
              Check Phone →
            </a>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
