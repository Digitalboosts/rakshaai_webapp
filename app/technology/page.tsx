import type { Metadata } from 'next'
import Link from 'next/link'
import DefaultLayout from '@/components/DefaultLayout'
import BrandHero from '@/components/BrandHero'
import { ArrowDown, ArrowRight, BarChart3, Binary, Database, FileSearch, Gauge, Network, ScanSearch, ShieldCheck } from 'lucide-react'
import { breadcrumbListSchema, jsonLd, webPageSchema } from '@/lib/seo/schema'

const title = 'How RakshaAI Detects Digital Fraud'
const description = 'Explore the RakshaAI Trust Engine, from signal collection and automated analysis to threat intelligence, explainable risk assessment and evaluation.'

export const metadata: Metadata = {
  title: { absolute: `${title} | Technology` },
  description,
  alternates: { canonical: 'https://rakshaai.co/technology' },
  keywords: ['how RakshaAI works', 'AI fraud detection India', 'scam domain intelligence', 'document forgery detection', 'trust intelligence technology'],
  openGraph: { title, description, url: 'https://rakshaai.co/technology', type: 'website', siteName: 'RakshaAI', images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'RakshaAI Trust Engine technology' }] },
  twitter: { card: 'summary_large_image', title, description, images: ['/opengraph-image'] },
}

const layers = [
  { title: 'Layer 1: Signal Collection', icon: Database, text: 'The process begins by collecting the signals available for the submitted input. Depending on the check, these can include URL structure, domain history, DNS and hosting infrastructure, page content, document characteristics and relevant public threat-intelligence records.', status: 'Live foundation' },
  { title: 'Layer 2: Automated Analysis', icon: Binary, text: 'Models and detection rules examine the collected evidence for suspicious patterns, impersonation, inconsistencies and anomalies. Each input type follows a different analysis path, so a website and a document are not evaluated with the same set of checks.', status: 'Live foundation' },
  { title: 'Layer 3: Threat Intelligence', icon: Network, text: 'A signal becomes more useful when it has context. Available historical scam infrastructure, public security sources and moderated community reports can help distinguish an isolated technical issue from a pattern associated with known or emerging abuse.', status: 'Live foundation' },
  { title: 'Layer 4: Risk Engine', icon: Gauge, text: 'The available evidence is combined into a risk assessment rather than presented as unrelated technical data. The output is designed to show the level of concern, the reasons that contributed to it and practical actions the user can take next.', status: 'Live foundation' },
  { title: 'Layer 5: Evaluation and Learning', icon: BarChart3, text: 'Reviewed reports and verified outcomes can help identify where detection logic needs improvement. Proposed changes still require controlled evaluation before release so that new coverage does not silently introduce avoidable false positives.', status: 'Developing' },
]

const benchmarks = [
  ['Detection rate', 'Not yet published'],
  ['False-positive rate', 'Not yet published'],
  ['Average analysis time', 'Measurement framework planned'],
  ['Cost per verification', 'Internal metric'],
  ['New-scam detection rate', 'Benchmark dataset required'],
  ['Human-review escalation rate', 'Workflow under development'],
  ['Calibration and thresholds', 'Methodology work planned'],
  ['Adversarial robustness', 'Evaluation work planned'],
]

export default function TechnologyPage() {
  const schemas = [webPageSchema({ name: title, description, url: '/technology' }), breadcrumbListSchema([{ name: 'Home', url: '/' }, { name: 'Technology', url: '/technology' }])]
  return <DefaultLayout>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schemas) }} />
    <BrandHero
      eyebrow="RakshaAI Technology"
      title="How RakshaAI Detects"
      accent="Digital Fraud"
      description="RakshaAI evaluates more than visual appearance. Its trust engine brings together available technical signals, document analysis, threat context and moderated community intelligence, then explains the evidence so people and businesses can make a more informed decision."
      actions={<><Link href="/website-safety-checker" className="rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-3 text-sm font-black text-white shadow-lg shadow-violet-200/70 transition hover:-translate-y-0.5 hover:shadow-xl dark:shadow-none">Check a Website</Link><Link href="/business" className="rounded-xl border border-gray-300 bg-white/80 px-5 py-3 text-sm font-bold text-gray-800 shadow-sm backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-violet-300 hover:text-violet-700 dark:border-gray-700 dark:bg-gray-900/70 dark:text-gray-100">Explore Business Solutions</Link></>}
    />

    <section className="px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto max-w-5xl"><div className="space-y-4">{layers.map(({ title: layerTitle, icon: Icon, text, status }, index) => <div key={layerTitle}>{index > 0 && <ArrowDown className="mx-auto mb-4 h-5 w-5 text-indigo-400" />}<article className="grid gap-5 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:p-8"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600 text-white"><Icon className="h-6 w-6" /></span><div><h2 className="text-xl font-black text-gray-950 dark:text-white">{layerTitle}</h2><p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">{text}</p></div><span className="self-start rounded-full bg-indigo-50 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 sm:self-center">{status}</span></article></div>)}</div></div></section>

    <section className="bg-indigo-50/70 px-4 py-16 dark:bg-indigo-950/20 sm:px-6 lg:px-8"><div className="mx-auto max-w-6xl"><div className="grid gap-6 md:grid-cols-2"><article className="rounded-3xl bg-white p-8 dark:bg-gray-900"><ScanSearch className="h-7 w-7 text-indigo-600" /><h2 className="mt-4 text-2xl font-black text-gray-950 dark:text-white">Website and domain intelligence</h2><p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">A convincing webpage can still sit on recently created or suspicious infrastructure. RakshaAI can consider available domain age, DNS and hosting details, redirect behaviour, certificate information, page content, impersonation indicators, phishing patterns and public threat signals together instead of treating any single check as proof.</p></article><article className="rounded-3xl bg-white p-8 dark:bg-gray-900"><FileSearch className="h-7 w-7 text-indigo-600" /><h2 className="mt-4 text-2xl font-black text-gray-950 dark:text-white">Document intelligence</h2><p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">Uploaded offer letters, identity documents and financial documents can be reviewed for available visual structure, text consistency, metadata and suspicious-edit indicators. The assessment helps identify areas that require additional verification; it does not establish legal authenticity or replace checks with the issuing authority.</p></article></div></div></section>

    <section className="px-4 py-16 sm:px-6 lg:px-8" id="benchmark"><div className="mx-auto max-w-6xl"><div className="max-w-3xl"><p className="text-xs font-black uppercase tracking-[0.2em] text-indigo-600">RakshaAI Detection Benchmark</p><h2 className="mt-3 text-3xl font-black text-gray-950 dark:text-white sm:text-4xl">Evidence before performance claims</h2><p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">RakshaAI does not currently publish a validated benchmark for these measures. This framework shows what should be measured and disclosed before making accuracy or superiority claims.</p></div><div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{benchmarks.map(([metric, status]) => <div key={metric} className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900"><p className="font-black text-gray-950 dark:text-white">{metric}</p><p className="mt-2 text-xs leading-5 text-amber-700 dark:text-amber-300">{status}</p></div>)}</div></div></section>

    <section className="px-4 pb-20 sm:px-6 lg:px-8"><div className="mx-auto max-w-5xl rounded-3xl border border-amber-200 bg-amber-50 p-7 dark:border-amber-900 dark:bg-amber-950/30"><div className="flex gap-4"><ShieldCheck className="h-7 w-7 shrink-0 text-amber-700" /><div><h2 className="text-xl font-black text-amber-950 dark:text-amber-100">Detection limitations</h2><p className="mt-2 text-sm leading-7 text-amber-900 dark:text-amber-200">No automated system can detect every scam. RakshaAI provides risk intelligence based on available signals and should be used as a decision-support tool, not as a guarantee that a website, document, person or transaction is legitimate.</p><Link href="/trust" className="mt-4 inline-flex items-center gap-2 text-sm font-black text-amber-900 dark:text-amber-200">Visit the Trust Center<ArrowRight className="h-4 w-4" /></Link></div></div></div></section>
  </DefaultLayout>
}
