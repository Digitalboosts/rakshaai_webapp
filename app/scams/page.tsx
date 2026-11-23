import type { Metadata } from 'next';
import Link from 'next/link';
import DefaultLayout from '@/components/DefaultLayout';
import { jsonLd } from '@/lib/seo/schema';
import { AlertTriangle, ArrowRight, CreditCard, Globe, MessageCircle, Phone, Shield, ShieldAlert, TrendingUp } from 'lucide-react';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://rakshaai.co';

// ─── Pillar clusters (top-level navigation) ───────────────────────────────────

const PILLAR_GUIDES = [
  {
    title: 'UPI Fraud',
    description: 'QR code traps, collect requests, fake screenshots, OTP theft, digital arrest payments, and refund scams via UPI.',
    href: '/scams/upi-fraud',
    icon: CreditCard,
    color: 'indigo',
    subtopics: [
      { title: 'QR Code Scam', href: '/scams/upi-fraud/qr-code-scam' },
      { title: 'Collect Request Fraud', href: '/scams/upi-fraud/collect-request-scam' },
      { title: 'Fake UPI Payment Screenshot', href: '/scams/upi-fraud/fake-payment-screenshot' },
      { title: 'Digital Arrest UPI Scam', href: '/scams/upi-fraud/digital-arrest-scam' },
      { title: 'Fake UPI Payment Link', href: '/scams/upi-fraud/fake-upi-link' },
      { title: 'Investment & Job UPI Fraud', href: '/scams/upi-fraud/investment-job-fraud' },
    ],
  },
  {
    title: 'WhatsApp Scams',
    description: 'Investment groups, fake job offers, KBC lottery fraud, and phishing links via WhatsApp.',
    href: '/scams/whatsapp-scams',
    icon: MessageCircle,
    color: 'emerald',
    subtopics: [
      { title: 'Investment Group Scam', href: '/scams/whatsapp-scams/investment-scam' },
      { title: 'Fake Job Offers', href: '/scams/whatsapp-scams/job-offer-scam' },
      { title: 'WhatsApp Lottery Fraud', href: '/scams/whatsapp-scams/lottery-scam' },
    ],
  },
  {
    title: 'Digital Arrest',
    description: 'Fake CBI, ED, police, TRAI, and customs video-call extortion threatening digital arrest.',
    href: '/scams/digital-arrest',
    icon: ShieldAlert,
    color: 'red',
    subtopics: [
      { title: 'Fake CBI Scam', href: '/scams/digital-arrest/fake-cbi-scam' },
      { title: 'Fake ED Scam', href: '/scams/digital-arrest/fake-ed-scam' },
      { title: 'Fake TRAI Scam', href: '/scams/digital-arrest/fake-trai-scam' },
    ],
  },
  {
    title: 'Phishing & Fake Websites',
    description: 'Fake bank portals, cloned government sites, and fraudulent shopping websites.',
    href: '/scams/phishing',
    icon: Globe,
    color: 'orange',
    subtopics: [
      { title: 'Fake Websites Guide', href: '/scams/fake-websites' },
      { title: 'Identify Fake Websites', href: '/blog/how-to-identify-fake-websites' },
      { title: 'Spot Phishing Links', href: '/blog/how-to-spot-phishing-links' },
    ],
  },
  {
    title: 'Phone Scams',
    description: 'OTP fraud calls, fake bank helplines, KBC lottery fraud, and Wangiri scams.',
    href: '/scams/phone-scams',
    icon: Phone,
    color: 'green',
    subtopics: [
      { title: 'KBC Lottery Scam', href: '/scams/phone-scams/kbc-lottery-scam' },
      { title: 'OTP Fraud', href: '/scams/phone-scams/otp-fraud' },
      { title: 'Fake Bank Customer Care', href: '/scams/phone-scams/fake-bank-customer-care' },
    ],
  },
  {
    title: 'Investment Scams',
    description: 'Fake trading apps, crypto traps, Telegram pump-dump, and guaranteed-return schemes.',
    href: '/scams/investment-scams',
    icon: TrendingUp,
    color: 'purple',
    subtopics: [
      { title: 'Fake Trading App Scam', href: '/scams/investment-scams/stock-trading-app-scam' },
      { title: 'Crypto Scams', href: '/scams/crypto-scams' },
      { title: 'Telegram Investment Scam', href: '/scams/investment-scams/telegram-investment-scam' },
    ],
  },
  {
    title: 'E-commerce Fraud',
    description: 'Fake shopping sites, marketplace scams, COD fraud, and advance-payment traps.',
    href: '/scams/e-commerce-fraud',
    icon: AlertTriangle,
    color: 'cyan',
    subtopics: [
      { title: 'Fake Shopping Website', href: '/scams/e-commerce-fraud/fake-online-stores' },
      { title: 'COD Fraud', href: '/scams/e-commerce-fraud/cod-fraud' },
      { title: 'Advance Payment Trap', href: '/scams/e-commerce-fraud/advance-payment-trap' },
      { title: 'Counterfeit Products', href: '/scams/e-commerce-fraud/counterfeit-products' },
      { title: 'Social Commerce Scam', href: '/scams/e-commerce-fraud/social-commerce-scam' },
      { title: 'Fake Marketplace Seller', href: '/scams/e-commerce-fraud/fake-marketplace-seller' },
      { title: 'Phantom Delivery Scam', href: '/scams/e-commerce-fraud/phantom-delivery' },
      { title: 'Fake Websites Guide', href: '/scams/fake-websites' },
    ],
  },
  {
    title: 'Job Scams',
    description: 'Fake job offers requiring fees, YouTube task scams, and work-from-home fraud.',
    href: '/scams/job-scams',
    icon: Shield,
    color: 'yellow',
    subtopics: [
      { title: 'WhatsApp & Telegram Job Scams', href: '/scams/job-scams/whatsapp-job-scam' },
      { title: "Task Scam / 'Like and Earn' Fraud", href: '/scams/job-scams/task-scam' },
      { title: 'Advance Fee Job Registration Fraud', href: '/scams/job-scams/advance-fee-job-fraud' },
      { title: 'Fake Job Portal / Naukri Clone Scam', href: '/scams/job-scams/fake-job-portal' },
      { title: 'Overseas Job Scam / Human Trafficking', href: '/scams/job-scams/overseas-job-scam' },
      { title: 'Influencer & Content Creator Scam', href: '/scams/job-scams/influencer-scam' },
    ],
  },
  {
    title: 'Romance Scams',
    description: 'Fake relationships on dating and matrimonial apps to extract money over time.',
    href: '/scams/romance-scams',
    icon: Shield,
    color: 'pink',
    subtopics: [],
  },
  {
    title: 'Loan Fraud',
    description: 'Fake loan apps, upfront processing fee scams, and illegal debt collection.',
    href: '/scams/loan-fraud',
    icon: Shield,
    color: 'rose',
    subtopics: [],
  },
];

const COLOR_MAP: Record<string, { bg: string; text: string; iconBg: string; border: string; dot: string }> = {
  indigo: { bg: 'hover:border-indigo-300', text: 'text-indigo-600 dark:text-indigo-300', iconBg: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-300', border: 'border-gray-200 dark:border-gray-800', dot: 'bg-indigo-500' },
  emerald: { bg: 'hover:border-emerald-300', text: 'text-emerald-600 dark:text-emerald-300', iconBg: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300', border: 'border-gray-200 dark:border-gray-800', dot: 'bg-emerald-500' },
  red: { bg: 'hover:border-red-300', text: 'text-red-600 dark:text-red-300', iconBg: 'bg-red-50 text-red-600 dark:bg-red-950 dark:text-red-300', border: 'border-gray-200 dark:border-gray-800', dot: 'bg-red-500' },
  orange: { bg: 'hover:border-orange-300', text: 'text-orange-600 dark:text-orange-300', iconBg: 'bg-orange-50 text-orange-600 dark:bg-orange-950 dark:text-orange-300', border: 'border-gray-200 dark:border-gray-800', dot: 'bg-orange-500' },
  green: { bg: 'hover:border-green-300', text: 'text-green-600 dark:text-green-300', iconBg: 'bg-green-50 text-green-600 dark:bg-green-950 dark:text-green-300', border: 'border-gray-200 dark:border-gray-800', dot: 'bg-green-500' },
  purple: { bg: 'hover:border-purple-300', text: 'text-purple-600 dark:text-purple-300', iconBg: 'bg-purple-50 text-purple-600 dark:bg-purple-950 dark:text-purple-300', border: 'border-gray-200 dark:border-gray-800', dot: 'bg-purple-500' },
  cyan: { bg: 'hover:border-cyan-300', text: 'text-cyan-600 dark:text-cyan-300', iconBg: 'bg-cyan-50 text-cyan-600 dark:bg-cyan-950 dark:text-cyan-300', border: 'border-gray-200 dark:border-gray-800', dot: 'bg-cyan-500' },
  yellow: { bg: 'hover:border-yellow-300', text: 'text-yellow-600 dark:text-yellow-300', iconBg: 'bg-yellow-50 text-yellow-600 dark:bg-yellow-950 dark:text-yellow-300', border: 'border-gray-200 dark:border-gray-800', dot: 'bg-yellow-500' },
  pink: { bg: 'hover:border-pink-300', text: 'text-pink-600 dark:text-pink-300', iconBg: 'bg-pink-50 text-pink-600 dark:bg-pink-950 dark:text-pink-300', border: 'border-gray-200 dark:border-gray-800', dot: 'bg-pink-500' },
  rose: { bg: 'hover:border-rose-300', text: 'text-rose-600 dark:text-rose-300', iconBg: 'bg-rose-50 text-rose-600 dark:bg-rose-950 dark:text-rose-300', border: 'border-gray-200 dark:border-gray-800', dot: 'bg-rose-500' },
};

export const metadata: Metadata = {
  title: { absolute: 'Online Scam Types in India: All Fraud Categories' },
  description:
    'Complete guides to every major online scam in India: UPI fraud, digital arrest, phishing, WhatsApp scams, job fraud. Warning signs and protection tips.',
  alternates: { canonical: `${SITE_URL}/scams` },
  openGraph: {
    title: 'Scam Types in India: 10 Complete Guides | RakshaAI',
    description:
      'India-focused guides to every major scam type  UPI fraud, WhatsApp scams, digital arrest, phishing, phone scams, investment fraud, and e-commerce scams.',
    url: `${SITE_URL}/scams`,
    type: 'website',
    siteName: 'RakshaAI',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Scam Types in India | RakshaAI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scam Types in India | RakshaAI',
    description: 'Guides to all major scam types in India  UPI fraud, WhatsApp, digital arrest, phishing, phone scams, and more.',
    images: ['/opengraph-image'],
  },
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Scam Types in India  Complete Library',
  description: 'All major scam types targeting India with detection guides and prevention steps.',
  numberOfItems: PILLAR_GUIDES.length,
  itemListElement: PILLAR_GUIDES.map((guide, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: guide.title,
    url: `${SITE_URL}${guide.href}`,
    description: guide.description,
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Scam Types', item: `${SITE_URL}/scams` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which online scam causes the most financial loss in India?',
      acceptedAnswer: { '@type': 'Answer', text: 'Investment scams and digital arrest scams cause the highest average loss per victim in India. Investment scams on fake trading platforms often result in losses of ₹2 lakh to ₹50 lakh per victim. Digital arrest scam victims lose an average of ₹4.8 lakh per case according to MHA data. Total cybercrime losses in India exceeded ₹11,333 crore in 2024.' },
    },
    {
      '@type': 'Question',
      name: 'Is digital arrest real in India?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. Digital arrest does not exist in Indian law. No government agency (CBI, ED, TRAI, or any court) can arrest a citizen via phone or video call or demand payment over a call to avoid prosecution. Anyone making such a claim is a scammer. Hang up and call 1930.' },
    },
    {
      '@type': 'Question',
      name: 'What should I do in the first 30 minutes after being scammed online in India?',
      acceptedAnswer: { '@type': 'Answer', text: 'Call 1930 (National Cybercrime Helpline) immediately to report and request transaction reversal. Simultaneously contact your bank to freeze the fraudulent transaction. File a complaint at cybercrime.gov.in with all evidence including screenshots and transaction IDs. Do not delete any chats or call logs. The 30-minute window is critical for UPI reversal.' },
    },
    {
      '@type': 'Question',
      name: 'How do I verify if a job offer received via WhatsApp is legitimate?',
      acceptedAnswer: { '@type': 'Answer', text: 'Legitimate employers never ask for money upfront  not for registration, training kits, uniform deposits, or security clearance. If any fee is requested before employment begins, it is a scam. Verify the company at mca.gov.in and check the recruiter\'s phone number at rakshaai.co/phone-number-checker for existing fraud reports.' },
    },
    {
      '@type': 'Question',
      name: 'Which helpline should I call to report online fraud in India?',
      acceptedAnswer: { '@type': 'Answer', text: 'Call 1930  India\'s National Cybercrime Helpline  available 24/7 toll-free. File a written complaint at cybercrime.gov.in. For UPI or bank fraud also contact your bank\'s fraud helpline immediately. For SEBI-regulated investment fraud, also file with SEBI SCORES at scores.sebi.gov.in.' },
    },
  ],
};

export default function ScamsHubPage() {
  return (
    <DefaultLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema) }} />

      <main className="bg-slate-50 dark:bg-gray-950">
        {/* Hero */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-300">
                Scam Education Hub
              </p>
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-950 dark:text-white sm:text-5xl">
                Online Scam Types Targeting Indians: Complete 2026 Guide
              </h1>
              <p className="mt-5 text-base leading-8 text-gray-700 dark:text-gray-300 sm:text-lg">
                Learn how common fraud patterns work before you click, pay, share an OTP, scan a QR code, or trust an unknown caller.
                Each guide covers warning signs, real examples, and step-by-step prevention.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <Link href="/check" className="inline-flex items-center gap-2 bg-indigo-600 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-indigo-700 transition-colors text-sm">
                  Check Suspicious Link →
                </Link>
                <Link href="/scam-intelligence" className="inline-flex items-center gap-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 font-semibold px-5 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-sm">
                  Scam Intelligence Database
                </Link>
              </div>
            </div>

            {/* Pillar Guides Grid  with subtopics */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {PILLAR_GUIDES.map(({ title, description, href, icon: Icon, color, subtopics }) => {
                const c = COLOR_MAP[color] ?? COLOR_MAP.indigo;
                return (
                  <div
                    key={href}
                    className={`group rounded-xl border bg-white p-5 shadow-sm transition ${c.bg} hover:shadow-md dark:bg-gray-900 ${c.border}`}
                  >
                    <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-lg ${c.iconBg}`}>
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <Link href={href} className="block group-hover:underline">
                      <h2 className={`text-lg font-bold text-gray-950 dark:text-white`}>{title}</h2>
                    </Link>
                    <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">{description}</p>
                    <Link
                      href={href}
                      className={`mt-4 inline-flex items-center gap-1 text-sm font-semibold ${c.text}`}
                    >
                      Read guide <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
                    </Link>

                    {/* Subtopic links */}
                    {subtopics.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                        <ul className="space-y-1.5">
                          {subtopics.map((sub) => (
                            <li key={sub.href}>
                              <Link
                                href={sub.href}
                                className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                              >
                                <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${c.dot}`} />
                                {sub.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* India Cybercrime Statistics */}
            <section className="mt-16 max-w-3xl" aria-labelledby="india-cybercrime-stats">
              <h2 id="india-cybercrime-stats" className="text-2xl font-bold text-gray-950 dark:text-white mb-4">
                Online Fraud in India: The Scale of the Problem
              </h2>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                India reported over 1.13 million cybercrime complaints in 2024 through the National Cybercrime Reporting Portal (NCRP), according to the Ministry of Home Affairs. Cyber financial fraud accounted for the vast majority of those complaints, with estimated losses crossing ₹11,333 crore  a 36% rise from the previous year. The combination of rapid smartphone adoption, UPI payment infrastructure, and limited digital literacy has made India one of the fastest-growing targets for online fraud globally.
              </p>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                UPI fraud alone accounts for nearly 47% of all cybercrime complaints, making it the single largest category. Digital arrest scams  where callers impersonate CBI, ED, TRAI, or customs officers  caused losses exceeding ₹1,776 crore in a single quarter in 2024, according to MHA data. Investment fraud on fake trading platforms and Telegram groups has overtaken traditional advance-fee scams in average loss per victim, with many cases exceeding ₹10 lakh per individual.
              </p>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                WhatsApp remains the primary delivery channel for financial fraud in India, carrying fake job offers, malicious phishing links, lottery notifications, and investment group invitations. Approximately 66% of fraud originates via social media and messaging platforms. Scam callers increasingly use data obtained from breaches of Aadhaar, PAN, and telecom records to personalise their approach, addressing victims by name, city, and last transaction amount to appear credible.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { value: '1.13M+', label: 'Cybercrime complaints filed in 2024', source: 'MHA / NCRP' },
                  { value: '₹11,333 Cr', label: 'Estimated fraud losses in 2024', source: 'I4C Annual Report' },
                  { value: '47%', label: 'Share of UPI fraud in all complaints', source: 'Cybercrime portal data' },
                ].map((s) => (
                  <div key={s.value} className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4">
                    <p className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400">{s.value}</p>
                    <p className="text-xs text-gray-700 dark:text-gray-300 mt-1 leading-snug">{s.label}</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{s.source}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* How Indian Scams Work */}
            <section className="mt-16 max-w-3xl" aria-labelledby="how-scams-work">
              <h2 id="how-scams-work" className="text-2xl font-bold text-gray-950 dark:text-white mb-4">
                Why Indian Online Scams Are Different
              </h2>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Indian cyber fraud is distinct in several ways that make generic international safety advice insufficient. First, the UPI payment ecosystem processes over 17 billion transactions per month, and the irreversibility of most UPI transfers means victims have a very narrow window  often under 30 minutes  to initiate reversal through their bank or the 1930 helpline before funds are moved through layered mule accounts.
              </p>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Second, scammers frequently exploit India&apos;s cultural respect for authority figures. Digital arrest scams work precisely because callers impersonating CBI, ED, or narcotics officials trigger compliance in victims who feel unable to question or challenge law enforcement. The same dynamic applies to KYC update scams that impersonate bank representatives, and fake customer care number scams that appear in Google search results.
              </p>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Third, the rise of AI voice cloning and deepfake video technology has enabled a new generation of scams where a known family member&apos;s voice is cloned to call elderly relatives claiming to be in an emergency, or where a fake video call shows a uniformed official to support a digital arrest narrative. These technically sophisticated attacks have overtaken simpler SMS phishing in average loss per victim.
              </p>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                Understanding the specific tactics used in the Indian context  not just generic advice about &quot;not sharing passwords&quot;  is what this hub is designed to provide. Each guide below focuses on how a specific scam works in the Indian ecosystem, with India-specific prevention steps and reporting mechanisms.
              </p>
            </section>

            {/* Risk Levels */}
            <section className="mt-16 max-w-3xl" aria-labelledby="scam-risk-levels">
              <h2 id="scam-risk-levels" className="text-2xl font-bold text-gray-950 dark:text-white mb-2">
                Scam Risk Levels in India (2024-2026)
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Based on average financial loss per victim and complaint volume from MHA and NCRP data.</p>
              <div className="space-y-3">
                {[
                  {
                    level: 'Critical',
                    color: 'bg-red-100 dark:bg-red-950/40 border-red-200 dark:border-red-900',
                    badge: 'bg-red-600 text-white',
                    types: 'Digital Arrest, UPI Fraud, Investment Scams',
                    note: 'Average loss per victim exceeds ₹2 lakh. Funds typically move through mule accounts within minutes.',
                  },
                  {
                    level: 'High',
                    color: 'bg-orange-50 dark:bg-orange-950/30 border-orange-200 dark:border-orange-900',
                    badge: 'bg-orange-500 text-white',
                    types: 'Phishing, Job Scams, Loan Fraud, WhatsApp Scams',
                    note: 'Average loss ₹50,000 to ₹2 lakh. Credential theft from phishing can enable larger downstream fraud.',
                  },
                  {
                    level: 'Medium',
                    color: 'bg-yellow-50 dark:bg-yellow-950/30 border-yellow-200 dark:border-yellow-900',
                    badge: 'bg-yellow-500 text-white',
                    types: 'E-commerce Fraud, Romance Scams, Phone Scams',
                    note: 'Average loss under ₹50,000 per incident, but romance scams can escalate to lakhs over months.',
                  },
                ].map((r) => (
                  <div key={r.level} className={`rounded-xl border p-4 ${r.color}`}>
                    <div className="flex items-start gap-3">
                      <span className={`flex-shrink-0 mt-0.5 px-2 py-0.5 rounded text-xs font-bold ${r.badge}`}>{r.level}</span>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">{r.types}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">{r.note}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Blog Articles by Topic */}
            <section className="mt-16 max-w-3xl" aria-labelledby="articles-by-topic">
              <h2 id="articles-by-topic" className="text-2xl font-bold text-gray-950 dark:text-white mb-2">
                All Scam Articles  Organised by Topic
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                In-depth guides for each fraud type, with real Indian examples and actionable steps.
              </p>
              <div className="space-y-6">
                {[
                  {
                    topic: 'UPI Fraud',
                    articles: [
                      { title: 'UPI Scam India 2026: 7 tricks draining bank accounts', href: '/blog/upi-scam-india-2026' },
                      { title: 'KYC Update Scam: how to spot the fake bank SMS', href: '/blog/kyc-update-scam-india' },
                    ],
                  },
                  {
                    topic: 'Digital Arrest',
                    articles: [
                      { title: 'Digital Arrest Scam: what to do if you get that call', href: '/blog/digital-arrest-scam-india' },
                    ],
                  },
                  {
                    topic: 'Investment and Crypto Fraud',
                    articles: [
                      { title: 'Crypto Investment Scam India: 8 red flags of fake platforms', href: '/blog/crypto-investment-scam-india-2026' },
                      { title: 'Stock Market Tip Scam: fake SEBI advisors and pump-and-dump', href: '/blog/stock-market-tip-scam-india' },
                      { title: 'Telegram Task Scam: how Indians lost crores doing simple online jobs', href: '/blog/telegram-task-scam-india' },
                    ],
                  },
                  {
                    topic: 'Phishing and Fake Websites',
                    articles: [
                      { title: 'How to Check If a Website Is Fake: 7 checks in 60 seconds', href: '/blog/how-to-check-fake-website-india' },
                      { title: 'Fake Customer Care Number Scam: Google search results lying to you', href: '/blog/fake-customer-care-number-scam-india' },
                      { title: 'Parcel Delivery Scam: the missed delivery phishing trap', href: '/blog/parcel-delivery-scam-india' },
                    ],
                  },
                  {
                    topic: 'WhatsApp and Phone Scams',
                    articles: [
                      { title: 'WhatsApp Scam India: 8 message types stealing money right now', href: '/blog/whatsapp-scam-india' },
                      { title: 'AI Voice Cloning Scam: fake emergency calls targeting Indian families', href: '/blog/ai-voice-cloning-scam-india' },
                    ],
                  },
                  {
                    topic: 'Loan and Financial Fraud',
                    articles: [
                      { title: 'Fake Loan App Trap: how illegal apps blackmail victims', href: '/blog/fake-loan-app-india-2026' },
                    ],
                  },
                  {
                    topic: 'Identity and Privacy',
                    articles: [
                      { title: 'Aadhaar Data Breach: how to check and protect yourself', href: '/blog/aadhaar-data-breach-india' },
                      { title: 'Sextortion Scam India: what to do, never pay', href: '/blog/sextortion-scam-india' },
                    ],
                  },
                  {
                    topic: 'Romance Scams',
                    articles: [
                      { title: 'Romance Scam India: 7 red flags and the 5-stage playbook', href: '/blog/romance-scam-india' },
                    ],
                  },
                  {
                    topic: 'Recovery and Reporting',
                    articles: [
                      { title: 'Got Scammed Online: 5 steps in the next 30 minutes', href: '/blog/got-scammed-online-india-what-to-do' },
                      { title: 'How to Report Cybercrime in India: 5 channels, step-by-step', href: '/how-to-report-cybercrime-india' },
                    ],
                  },
                ].map(({ topic, articles }) => (
                  <div key={topic}>
                    <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">{topic}</h3>
                    <ul className="space-y-1.5">
                      {articles.map(({ title, href }) => (
                        <li key={href}>
                          <Link
                            href={href}
                            className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1.5"
                          >
                            <ArrowRight className="h-3 w-3 flex-shrink-0" />
                            {title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section className="mt-16 max-w-3xl" aria-labelledby="scam-faq">
              <h2 id="scam-faq" className="text-2xl font-bold text-gray-950 dark:text-white mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-5">
                {[
                  {
                    q: 'Which online scam causes the most financial loss in India?',
                    a: 'Investment scams and digital arrest scams cause the highest average loss per victim. Investment scams on fake trading platforms or Telegram pump-and-dump groups often result in losses of ₹2 lakh to ₹50 lakh per victim, as scammers gradually escalate the amount invested before blocking withdrawals. Digital arrest scam victims lose an average of ₹4.8 lakh per case according to MHA data. UPI fraud has the highest complaint volume but a lower average per-incident loss.',
                  },
                  {
                    q: 'How do I check if a suspicious link or phone number is a scam?',
                    a: 'Use RakshaAI\'s free tools at rakshaai.co/check for suspicious website links, rakshaai.co/upi-id-checker for UPI IDs, and rakshaai.co/phone-number-checker for unknown phone numbers. Each tool returns a Trust Score and community reports in under 5 seconds without requiring any account or registration.',
                  },
                  {
                    q: 'What should I do in the first 30 minutes after being scammed online?',
                    a: 'Act immediately: (1) Call 1930  India\'s 24/7 national cybercrime helpline  to report and request transaction reversal. (2) Contact your bank to initiate a freeze on the fraudulent transaction. (3) File a complaint at cybercrime.gov.in with all available evidence including screenshots and transaction details. (4) Do not delete any chats or call logs  these are evidence. The 30-minute window is critical for UPI transaction reversal; after 24 hours recovery becomes significantly harder.',
                  },
                  {
                    q: 'Is digital arrest real? Can CBI or ED actually arrest me over a video call?',
                    a: 'No. Digital arrest does not exist in Indian law. No provision in the Indian Penal Code, CrPC, PMLA, or IT Act allows law enforcement to arrest a citizen via phone or video call, or to demand money to avoid prosecution over a call. Anyone claiming to do this is running a fraud. Hang up immediately, do not pay anything, and call 1930 to report.',
                  },
                  {
                    q: 'How can I verify if a job offer received via WhatsApp or email is legitimate?',
                    a: 'Legitimate employers never ask for money upfront  not for registration, ID verification, training kits, uniform deposits, or security clearance. If any fee is requested before employment begins, it is a scam. Verify the company on the Ministry of Corporate Affairs portal at mca.gov.in. Check the recruiter\'s phone number at rakshaai.co/phone-number-checker for existing fraud reports. Real job portals (LinkedIn, Naukri) do not charge candidates.',
                  },
                  {
                    q: 'Which helpline should I call to report online fraud in India?',
                    a: 'Call 1930  India\'s National Cybercrime Helpline  available 24 hours a day, 7 days a week, toll-free. You can also file a written complaint at cybercrime.gov.in. For UPI or bank account fraud, simultaneously contact your bank\'s 24/7 fraud helpline and the payment app\'s support (PhonePe, GPay, Paytm all have dedicated fraud lines). For investment fraud involving SEBI-regulated products, also file with SEBI SCORES at scores.sebi.gov.in.',
                  },
                ].map(({ q, a }) => (
                  <div key={q} className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5">
                    <h3 className="text-base font-semibold text-gray-950 dark:text-white mb-2">{q}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Emergency alert */}
            <div className="mt-10 rounded-lg border border-amber-200 bg-amber-50 p-5 text-amber-950 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-100">
              <h2 className="text-lg font-bold">Already lost money or shared sensitive details?</h2>
              <p className="mt-2 text-sm leading-6">
                Call the National Cybercrime Helpline at <strong>1930</strong> immediately and file a complaint at{' '}
                <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="underline font-medium">cybercrime.gov.in</a>.
                For bank or UPI fraud, also contact your bank or payment app support without delay.
                The first 30 minutes are critical for transaction reversal.
              </p>
            </div>

            {/* Methodology link */}
            <div className="mt-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                <strong className="text-gray-900 dark:text-white">Not sure if something is a scam?</strong>{' '}
                Check any website, UPI ID, or phone number instantly at{' '}
                <Link href="/check" className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline">rakshaai.co/check</Link> 
                AI-powered Trust Score in under 5 seconds. Free, no login.
                <span className="ml-2 text-gray-400 dark:text-gray-500">·</span>
                <Link href="/methodology" className="ml-2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 text-xs">
                  How it works →
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
    </DefaultLayout>
  );
}
