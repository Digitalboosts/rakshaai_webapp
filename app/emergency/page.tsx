import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import DefaultLayout from '@/components/DefaultLayout'
import { breadcrumbListSchema, faqPageSchema, itemListSchema, jsonLd } from '@/lib/seo/schema'
import { Phone, Shield, FileText, AlertTriangle, Clock, ExternalLink, ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: { absolute: 'Got Scammed in India? Call 1930 - Emergency Guide | RakshaAI' },
  description:
    'Just got scammed in India? Call 1930 immediately. Emergency guide: freeze the transaction, file at cybercrime.gov.in, report the scammer.',
  alternates: { canonical: 'https://rakshaai.co/emergency' },
  robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  openGraph: {
    title: 'Got Scammed in India? Call 1930  Act in the Next 30 Minutes',
    description:
      'Emergency guide for online scam victims in India. Call 1930, freeze the transaction, file at cybercrime.gov.in. Step-by-step recovery guide.',
    url: 'https://rakshaai.co/emergency',
    type: 'article',
    siteName: 'RakshaAI',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Got Scammed? Emergency Guide India  RakshaAI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Got Scammed in India? Call 1930 Now',
    description: 'Emergency guide: 5 steps to take in the next 30 minutes after an online scam. Call 1930, freeze transaction, file complaint.',
    images: ['/opengraph-image'],
  },
}

const stepsSchema = itemListSchema({
  name: 'Emergency Steps After Getting Scammed Online in India',
  description: '5 steps to take within 30 minutes of an online scam to maximise money recovery chances',
  url: '/emergency',
  items: [
    { name: 'Call 1930 immediately', description: 'National Cybercrime Helpline  free, 24/7. Report the fraud amount, scammer details, and transaction reference.' },
    { name: 'Call your bank', description: 'Call your bank\'s official customer care and request an immediate transaction hold or reversal.' },
    { name: 'File complaint at cybercrime.gov.in', description: 'File an online complaint with transaction details, scammer contacts, and screenshots.' },
    { name: 'Report the scammer on RakshaAI', description: 'Report the phone number, UPI ID, or website on RakshaAI to warn other Indians.' },
    { name: 'Secure your accounts', description: 'Change all passwords and UPI PIN. Enable two-factor authentication on email and banking apps.' },
  ],
})

const faqSchema = faqPageSchema([
  {
    question: 'What is the cybercrime helpline number in India?',
    answer: 'The National Cybercrime Helpline number is 1930. It is free and available 24/7. Call immediately after any online fraud  time is critical for money recovery.',
  },
  {
    question: 'Can I get my money back after a UPI scam?',
    answer: 'Possibly, if you report within 30–60 minutes by calling 1930. The helpline can issue a lien on the receiving account. After 24 hours recovery success drops dramatically.',
  },
  {
    question: 'How do I file a cybercrime complaint online in India?',
    answer: 'Go to cybercrime.gov.in and click "Report Cybercrime." You need the scammer\'s phone or UPI ID, transaction reference numbers, amount, and screenshots. You receive a complaint reference number  keep it.',
  },
  {
    question: 'What if I shared my Aadhaar or OTP with a scammer?',
    answer: 'Call UIDAI helpline 1947 immediately and lock your Aadhaar biometrics at myaadhaar.uidai.gov.in. Also file a police complaint and monitor your CIBIL report for unauthorized loan applications.',
  },
])

const breadcrumbSchema = breadcrumbListSchema([
  { name: 'Home', url: '/' },
  { name: 'Emergency  Got Scammed?', url: '/emergency' },
])

type StepAction = { label: string; href: string; external?: boolean }

const steps: Array<{
  number: string
  title: string
  subtitle: string
  description: string
  action: StepAction | null
  actionGroup?: StepAction[]
  color: string
  icon: React.ElementType
}> = [
  {
    number: '1',
    title: 'Call 1930 Immediately',
    subtitle: 'National Cybercrime Helpline  Free, 24/7',
    description: 'This is the most time-critical step. Call 1930 and report: the fraud amount, scammer\'s phone/UPI, and your transaction reference number. The helpline can issue a lien on the receiving account  but only if you call within the first 30–60 minutes.',
    action: { label: 'Call 1930 Now', href: 'tel:1930', external: false },
    color: 'red',
    icon: Phone,
  },
  {
    number: '2',
    title: 'Call Your Bank',
    subtitle: 'Request transaction hold or reversal',
    description: 'Call your bank\'s official customer care number (printed on the back of your card  not from Google). Request an immediate block on the fraudulent transaction. For UPI apps: PhonePe (080-68727374), Google Pay (1800-419-0157), Paytm (0120-4456-456).',
    action: null,
    color: 'orange',
    icon: Phone,
  },
  {
    number: '3',
    title: 'File Complaint at cybercrime.gov.in',
    subtitle: 'Official Government Complaint Portal',
    description: 'Go to cybercrime.gov.in → "Report Cybercrime." You need: scammer\'s phone/UPI/website, your transaction reference, approximate amount, and screenshots of conversations. Save the complaint reference number you receive.',
    action: { label: 'Open cybercrime.gov.in', href: 'https://cybercrime.gov.in', external: true },
    color: 'blue',
    icon: FileText,
  },
  {
    number: '4',
    title: 'Report on RakshaAI',
    subtitle: 'Warn millions of other Indians',
    description: 'Report the scammer\'s phone number, UPI ID, or website on RakshaAI. Your report gets added to our database and warns other users before they fall for the same scam. Choose the tool that matches your scam type.',
    action: null,
    actionGroup: [
      { label: 'Report a Phone Number', href: '/phone-number-checker' },
      { label: 'Report a UPI ID', href: '/upi-id-checker' },
      { label: 'Report a Website', href: '/website-safety-checker' },
    ],
    color: 'indigo',
    icon: Shield,
  },
  {
    number: '5',
    title: 'Secure Your Accounts',
    subtitle: 'Prevent further damage',
    description: 'Change all passwords immediately. Change your UPI PIN. Enable two-factor authentication on email, banking apps, and social media. If you shared Aadhaar details, call UIDAI at 1947 to lock your biometrics.',
    action: null,
    color: 'green',
    icon: Shield,
  },
]

const colorMap: Record<string, { bg: string; border: string; num: string; badge: string; btn: string }> = {
  red: {
    bg: 'bg-red-50 dark:bg-red-950/20',
    border: 'border-red-200 dark:border-red-800',
    num: 'bg-red-500 text-white',
    badge: 'bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300',
    btn: 'bg-red-500 hover:bg-red-600 text-white',
  },
  orange: {
    bg: 'bg-orange-50 dark:bg-orange-950/20',
    border: 'border-orange-200 dark:border-orange-800',
    num: 'bg-orange-500 text-white',
    badge: 'bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300',
    btn: 'bg-orange-500 hover:bg-orange-600 text-white',
  },
  blue: {
    bg: 'bg-blue-50 dark:bg-blue-950/20',
    border: 'border-blue-200 dark:border-blue-800',
    num: 'bg-blue-500 text-white',
    badge: 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300',
    btn: 'bg-blue-500 hover:bg-blue-600 text-white',
  },
  indigo: {
    bg: 'bg-indigo-50 dark:bg-indigo-950/20',
    border: 'border-indigo-200 dark:border-indigo-800',
    num: 'bg-indigo-500 text-white',
    badge: 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300',
    btn: 'bg-indigo-500 hover:bg-indigo-600 text-white',
  },
  green: {
    bg: 'bg-green-50 dark:bg-green-950/20',
    border: 'border-green-200 dark:border-green-800',
    num: 'bg-green-500 text-white',
    badge: 'bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300',
    btn: 'bg-green-500 hover:bg-green-600 text-white',
  },
}

export default function EmergencyPage() {
  return (
    <DefaultLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(stepsSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-red-50 to-white dark:from-red-950/30 dark:to-gray-900 pt-24 pb-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-red-100 dark:bg-red-900/40 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <AlertTriangle className="h-4 w-4" />
            Emergency Guide
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
            Just Got Scammed Online?{" "}
            <span className="block text-red-600 dark:text-red-400 mt-1">Act in the Next 30 Minutes</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Every minute counts. The first 30 minutes after a scam are critical for recovering your money. Follow these 5 steps right now.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="tel:1930"
              className="flex items-center gap-2 px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 w-full sm:w-auto justify-center"
            >
              <Phone className="h-5 w-5" />
              Call 1930 Now
            </a>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <Clock className="h-4 w-4" />
              Free · 24/7 · National Cybercrime Helpline
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="max-w-3xl mx-auto px-4 py-12">
        <div className="space-y-6">
          {steps.map((step) => {
            const Icon = step.icon
            const c = colorMap[step.color]
            return (
              <div key={step.number} className={`rounded-2xl border ${c.bg} ${c.border} p-6`}>
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-xl ${c.num} flex items-center justify-center font-extrabold text-lg shadow-sm`}>
                    {step.number}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 flex-wrap">
                      <div>
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white">{step.title}</h2>
                        <p className={`text-xs font-semibold mt-0.5 px-2 py-0.5 rounded-full inline-block ${c.badge}`}>{step.subtitle}</p>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{step.description}</p>
                    {step.action && (
                      <div className="mt-4">
                        {step.action.external ? (
                          <a
                            href={step.action.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${c.btn}`}
                          >
                            {step.action.label}
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        ) : (
                          <a
                            href={step.action.href}
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${c.btn}`}
                          >
                            {step.action.label}
                            <ChevronRight className="h-3.5 w-3.5" />
                          </a>
                        )}
                      </div>
                    )}
                    {step.actionGroup && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {step.actionGroup.map((a) => (
                          <Link
                            key={a.href}
                            href={a.href}
                            className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${c.btn}`}
                          >
                            {a.label}
                            <ChevronRight className="h-3 w-3" />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Helplines reference */}
      <section className="max-w-3xl mx-auto px-4 pb-8">
        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-base font-bold text-gray-900 dark:text-white mb-4">Emergency Helplines</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            {[
              { label: 'National Cybercrime Helpline', number: '1930' },
              { label: 'UIDAI (Aadhaar)', number: '1947' },
              { label: 'RBI Helpline', number: '14448' },
              { label: 'Women Helpline', number: '181' },
            ].map((h) => (
              <a key={h.number} href={`tel:${h.number}`} className="flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors group">
                <span className="text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{h.label}</span>
                <span className="font-bold text-gray-900 dark:text-white">{h.number}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 pb-16">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            { q: 'What is the cybercrime helpline number in India?', a: 'The National Cybercrime Helpline number is 1930. It is free and available 24/7. Call immediately after any online fraud  time is critical for money recovery.' },
            { q: 'Can I get my money back after a UPI scam?', a: 'Possibly, if you report within 30–60 minutes by calling 1930. After 24 hours recovery success drops dramatically as money moves through multiple accounts.' },
            { q: 'How do I file a cybercrime complaint online?', a: 'Go to cybercrime.gov.in → "Report Cybercrime." Provide scammer\'s contact, your transaction reference, amount, and screenshots. Save the complaint reference number.' },
            { q: 'What if I shared my Aadhaar or OTP?', a: 'Call UIDAI at 1947 immediately and lock your Aadhaar biometrics at myaadhaar.uidai.gov.in. File a police complaint and monitor your CIBIL report for unauthorized loans.' },
          ].map(({ q, a }) => (
            <div key={q} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-5">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">{q}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/got-scammed" className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold text-sm hover:underline">
            Full recovery guide (by scam type) <ChevronRight className="h-4 w-4" />
          </Link>
          <span className="text-gray-300 dark:text-gray-600 hidden sm:block">|</span>
          <Link href="/how-to-report-cybercrime-india" className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold text-sm hover:underline">
            How to report cybercrime in India <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </DefaultLayout>
  )
}
