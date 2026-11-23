import type { Metadata } from 'next'
import Link from 'next/link'
import DefaultLayout from '@/components/DefaultLayout'
import BrandHero from '@/components/BrandHero'
import { ArrowRight, Database, FileSearch, Globe2, ShieldCheck } from 'lucide-react'
import { breadcrumbListSchema, jsonLd, webPageSchema } from '@/lib/seo/schema'

const title = 'RakshaAI Trust Intelligence API'
const description = 'Anyone can request access to RakshaAI website-risk, document-risk, entity-risk and threat-intelligence APIs. Public documentation is not currently available.'

export const metadata: Metadata = { title: { absolute: `${title} | Early Access` }, description, alternates: { canonical: 'https://rakshaai.co/api' }, robots: { index: true, follow: true }, openGraph: { title, description, url: 'https://rakshaai.co/api', type: 'website', siteName: 'RakshaAI', images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'RakshaAI Trust Intelligence API early access' }] }, twitter: { card: 'summary_large_image', title, description, images: ['/opengraph-image'] } }

const capabilities = [
  { title: 'Website Risk API', icon: Globe2, text: 'Planned endpoints will allow approved products to submit a URL or domain and receive structured risk context. Depending on availability, this may include domain, infrastructure, content, impersonation, phishing and public threat signals with reasons that a workflow can display or review.' },
  { title: 'Document Risk API', icon: FileSearch, text: 'Planned document analysis will help approved workflows surface suspicious edits, structural inconsistencies and available authenticity indicators in submitted files. The result is intended to guide further verification, not certify that a document is legally genuine.' },
  { title: 'Entity Risk API', icon: ShieldCheck, text: 'This proposed capability would organize available identity and business signals into a consistent risk response. It is intended for cases where a team needs additional context before onboarding, verification or another higher-risk decision.' },
  { title: 'Threat Intelligence Feed', icon: Database, text: 'Planned access would provide reviewed context about scam domains, suspicious infrastructure and emerging fraud patterns. Inclusion criteria, update frequency and confidence information will be documented before any feed is made available.' },
]

export default function ApiPage() {
  const schemas = [webPageSchema({ name: title, description, url: '/api' }), breadcrumbListSchema([{ name: 'Home', url: '/' }, { name: 'API', url: '/api' }])]
  return <DefaultLayout><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schemas) }} />
    <BrandHero eyebrow="API access by request" title="RakshaAI Trust" accent="Intelligence API" description="RakshaAI is developing a way for approved products and operational teams to bring website, document and fraud-risk signals into the workflows where trust decisions already happen. The goal is to return structured evidence and explanations, not only a binary safe-or-scam label." actions={<Link href="/contact?subject=API%20Access%20Request" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-3 text-sm font-black text-white shadow-lg shadow-violet-200/70 transition hover:-translate-y-0.5 hover:shadow-xl dark:shadow-none">Request API Access<ArrowRight className="h-4 w-4" /></Link>} note="Public API documentation is not available yet. Approved applicants will receive the relevant integration information, security requirements and next steps directly from the RakshaAI team." />
    <section className="px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">{capabilities.map(({ title: capabilityTitle, icon: Icon, text }) => <article key={capabilityTitle} className="rounded-3xl border border-gray-200 bg-white p-7 dark:border-gray-800 dark:bg-gray-900"><Icon className="h-7 w-7 text-indigo-600" /><h2 className="mt-4 text-xl font-black text-gray-950 dark:text-white">{capabilityTitle}</h2><p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">{text}</p></article>)}</div></section>
    <section className="px-4 pb-20 sm:px-6 lg:px-8"><div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-violet-200/80 bg-gradient-to-br from-violet-50 via-white to-indigo-50 p-8 shadow-sm dark:border-violet-900/60 dark:from-violet-950/30 dark:via-gray-900 dark:to-indigo-950/30"><div aria-hidden="true" className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-violet-300/20 blur-3xl" /><h2 className="relative text-2xl font-black text-gray-950 dark:text-white">Request access</h2><p className="relative mt-3 max-w-3xl text-sm leading-7 text-gray-600 dark:text-gray-300">Tell us who you are, what you want to analyze, your expected usage and how RakshaAI would fit into your workflow. Our team will review the request and contact you about availability and next steps.</p><Link href="/contact?subject=API%20Access%20Request" className="relative mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-3 text-sm font-black text-white shadow-md transition hover:-translate-y-0.5">Send an API Request<ArrowRight className="h-4 w-4" /></Link></div></section>
  </DefaultLayout>
}
