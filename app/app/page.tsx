import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BellRing, CheckCircle2, Flag, Globe2, IndianRupee, LockKeyhole, PhoneCall, ShieldCheck } from 'lucide-react'
import AppStoreButtons from '@/components/AppStoreButtons'
import DefaultLayout from '@/components/DefaultLayout'
import MobileAppShowcaseSection from '@/components/sections/MobileAppShowcaseSection'
import { APP_STORE_URL, PLAY_STORE_URL } from '@/lib/site-config'
import { breadcrumbListSchema, jsonLd, webPageSchema } from '@/lib/seo/schema'

const title = 'RakshaAI Mobile App for iOS and Android'
const description = 'Download the RakshaAI mobile app to check suspicious websites, phone numbers and UPI IDs, understand available risk signals and report suspicious activity.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: 'https://rakshaai.co/app' },
  openGraph: { title, description, url: 'https://rakshaai.co/app', type: 'website', siteName: 'RakshaAI', images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'RakshaAI mobile app for iOS and Android' }] },
  twitter: { card: 'summary_large_image', title, description, images: ['/opengraph-image'] },
}

const features = [
  { icon: Globe2, title: 'Website and link checks', text: 'Paste a suspicious URL before opening it or entering personal information. RakshaAI reviews the signals available for that website and presents an understandable risk assessment.' },
  { icon: PhoneCall, title: 'Phone-number checks', text: 'Look up an unfamiliar number when a caller creates urgency, asks for sensitive information or claims to represent a bank, courier company or government department.' },
  { icon: IndianRupee, title: 'UPI ID checks', text: 'Check a payment identifier before transferring money. A result provides supporting context, but you should still confirm the recipient independently for important payments.' },
  { icon: Flag, title: 'Community reporting', text: 'Submit suspicious websites, phone numbers and UPI IDs for review. Moderated reports can help other users recognize fraud patterns that are not yet widely documented.' },
]

const faqs = [
  ['Is the RakshaAI app free to download?', 'Yes. RakshaAI is currently available as a free download from the official Apple App Store and Google Play Store.'],
  ['Does the app automatically detect every scam?', 'No. No automated service can detect every scam. Results depend on the evidence available at the time of a check and should support—not replace—independent verification.'],
  ['Are the iOS and Android features identical?', 'Core manual checks are available through the mobile experience, but notification-based detection and other features can vary by device, operating system, supported sources and permissions.'],
  ['Where should I download RakshaAI?', 'Use only the official App Store and Google Play links published on this page. Do not install APK files or applications sent through messages or unfamiliar websites.'],
]

export default function MobileAppPage() {
  const schemas = [
    webPageSchema({ name: title, description, url: '/app' }),
    breadcrumbListSchema([{ name: 'Home', url: '/' }, { name: 'Mobile App', url: '/app' }]),
    {
      '@context': 'https://schema.org',
      '@type': 'MobileApplication',
      name: 'RakshaAi',
      operatingSystem: 'iOS, Android',
      applicationCategory: 'SecurityApplication',
      description,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
      downloadUrl: [APP_STORE_URL, PLAY_STORE_URL],
      publisher: { '@type': 'Organization', name: 'Ehatech Services Private Limited', url: 'https://rakshaai.co' },
    },
  ]

  return (
    <DefaultLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schemas) }} />
      <MobileAppShowcaseSection headingLevel="h1" />

      <section className="px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="app-features-title">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">Everyday mobile safety</p>
            <h2 id="app-features-title" className="mt-3 text-3xl font-black tracking-tight text-gray-950 dark:text-white sm:text-5xl">Check the signal before you trust the request.</h2>
            <p className="mt-5 text-base leading-8 text-gray-600 dark:text-gray-300">Scams often reach people through a link, phone call or payment request. RakshaAI gives you one place to examine those identifiers and understand why additional caution may be needed.</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {features.map(({ icon: Icon, title: featureTitle, text }) => <article key={featureTitle} className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm dark:border-gray-800 dark:bg-gray-900"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-violet-700 dark:bg-violet-950 dark:text-violet-300"><Icon className="h-6 w-6" /></span><h2 className="mt-5 text-xl font-black text-gray-950 dark:text-white">{featureTitle}</h2><p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bg-violet-50/70 px-4 py-16 dark:bg-violet-950/20 sm:px-6 lg:px-8" aria-labelledby="app-screens-title">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center"><p className="text-xs font-black uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">Inside the app</p><h2 id="app-screens-title" className="mt-3 text-3xl font-black text-gray-950 dark:text-white sm:text-4xl">A clear experience for high-pressure moments.</h2><p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">The mobile interface keeps scanning, risk information and reporting easy to find when you need to make a quick but careful decision.</p></div>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {[['/app/rakshaai-app-screen-1.webp', 'Understand your security assessment'], ['/app/rakshaai-app-screen-5.webp', 'Detect supported suspicious notifications'], ['/app/rakshaai-app-screen-3.webp', 'Report suspicious activity for review']].map(([src, alt]) => <div key={src} className="overflow-hidden rounded-[2rem] border border-violet-200 bg-white p-2 shadow-xl shadow-violet-200/30 dark:border-violet-900 dark:bg-gray-900 dark:shadow-none"><Image src={src} alt={alt} width={600} height={1300} className="h-auto w-full rounded-[1.5rem]" /></div>)}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8 dark:border-emerald-900 dark:bg-emerald-950/25"><LockKeyhole className="h-8 w-8 text-emerald-700 dark:text-emerald-300" /><h2 className="mt-4 text-2xl font-black text-emerald-950 dark:text-emerald-100">Privacy-first by design</h2><p className="mt-3 text-sm leading-7 text-emerald-900 dark:text-emerald-200">RakshaAI is designed to process only the information required to provide its safety features and does not sell personal information. Specific practices are governed by the published privacy policy.</p><Link href="/privacy-policy" className="mt-5 inline-flex items-center gap-2 text-sm font-black text-emerald-900 dark:text-emerald-200">Read the privacy policy<ArrowRight className="h-4 w-4" /></Link></div>
          <div className="rounded-3xl border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-900"><div className="flex items-center gap-3"><BellRing className="h-7 w-7 text-amber-600" /><h2 className="text-2xl font-black text-gray-950 dark:text-white">Feature availability</h2></div><p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">Real-time detection depends on supported notification sources and the permissions available on the device. Feature availability can differ between Android and iOS. The app remains a decision-support tool and cannot guarantee that an interaction is safe.</p><div className="mt-5 flex flex-wrap gap-3 text-xs font-bold text-gray-600 dark:text-gray-300"><span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 dark:bg-gray-800"><CheckCircle2 className="h-4 w-4 text-emerald-500" />Official stores only</span><span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 dark:bg-gray-800"><ShieldCheck className="h-4 w-4 text-violet-500" />Decision support</span></div></div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8" aria-labelledby="app-faq-title"><div className="mx-auto max-w-4xl"><h2 id="app-faq-title" className="text-center text-3xl font-black text-gray-950 dark:text-white">Mobile app questions</h2><div className="mt-8 space-y-3">{faqs.map(([question, answer]) => <details key={question} className="group rounded-2xl border border-gray-200 bg-white p-5 open:border-violet-300 dark:border-gray-800 dark:bg-gray-900 dark:open:border-violet-800"><summary className="cursor-pointer list-none font-bold text-gray-950 dark:text-white">{question}</summary><p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">{answer}</p></details>)}</div><div className="mt-10 rounded-3xl bg-gradient-to-r from-violet-700 to-indigo-700 p-8 text-center text-white"><h2 className="text-2xl font-black">Keep RakshaAI ready on your phone.</h2><p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-violet-100">Download only from the official stores below.</p><AppStoreButtons className="mt-6 justify-center" /></div></div></section>
    </DefaultLayout>
  )
}
