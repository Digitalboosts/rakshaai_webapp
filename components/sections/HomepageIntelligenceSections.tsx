import Link from 'next/link'
import {
  ArrowRight,
  Banknote,
  Binary,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  CircleDot,
  FileCheck2,
  Globe2,
  Landmark,
  MessageSquareText,
  Network,
  ScanSearch,
  ShoppingBag,
  Sparkles,
} from 'lucide-react'

const trustProblems = [
  { title: 'A fake website can look legitimate', description: 'Copied branding, polished design and HTTPS can make a newly created phishing site appear as trustworthy as the real service.' },
  { title: 'A fake job offer can look authentic', description: 'Scammers can reproduce company letterheads, recruiter profiles and interview processes before asking for money or sensitive documents.' },
  { title: 'A forged document can look real', description: 'Small edits to names, dates, amounts or identity details are often difficult to notice through visual inspection alone.' },
  { title: 'A message can imitate someone you trust', description: 'Spoofed accounts and AI-generated text or media can make an urgent request appear to come from a colleague, brand or family member.' },
]

const platformCapabilities = [
  {
    title: 'Website Intelligence',
    status: 'Live',
    icon: Globe2,
    description: 'Examine a website beyond its appearance. RakshaAI brings together URL structure, domain history, infrastructure, phishing indicators, impersonation patterns and available threat intelligence to explain potential risk.',
    items: ['URL analysis', 'Domain intelligence', 'Phishing indicators', 'Risk scoring'],
    href: '/website-safety-checker',
    cta: 'Check a website',
  },
  {
    title: 'Document Intelligence',
    status: 'Live',
    icon: FileCheck2,
    description: 'Review uploaded offer letters, identity documents and financial documents for available visual, textual and metadata signals. The result highlights inconsistencies or suspicious edits that deserve closer verification.',
    items: ['Offer letters', 'Identity documents', 'Financial documents', 'Suspicious-edit signals'],
    href: '/document-checker',
    cta: 'Verify a document',
  },
  {
    title: 'Message Intelligence',
    status: 'Expanding',
    icon: MessageSquareText,
    description: 'Planned analysis will help users examine suspicious WhatsApp, SMS and email conversations for pressure tactics, impersonation cues, unsafe links and other social-engineering patterns.',
    items: ['WhatsApp', 'SMS', 'Email', 'Impersonation context'],
    cta: 'Coming soon',
  },
  {
    title: 'Identity & Transaction Intelligence',
    status: 'Expanding',
    icon: Network,
    description: 'This developing layer is intended to combine available entity, fraud, transaction-context and behavioural signals when a business needs additional support for a higher-risk decision.',
    items: ['Fraud signals', 'Entity verification', 'Transaction context', 'Behavioural signals'],
    cta: 'Early access planned',
  },
]

const engineGroups = [
  {
    title: 'Website signals',
    icon: Globe2,
    description: 'Technical and content-level evidence helps reveal risk that a professional-looking webpage may hide.',
    items: ['Domain age', 'DNS and infrastructure', 'Page content', 'Impersonation patterns', 'Phishing indicators', 'Threat intelligence'],
  },
  {
    title: 'Document signals',
    icon: FileCheck2,
    description: 'Multiple document characteristics are reviewed together to surface inconsistencies that need human attention.',
    items: ['Visual structure', 'Available metadata', 'Text inconsistencies', 'Forgery patterns', 'Identity context', 'Tampering indicators'],
  },
  {
    title: 'Intelligence layer',
    icon: Binary,
    description: 'Current observations are compared with available threat context and reviewed historical patterns.',
    items: ['Automated analysis', 'Threat intelligence', 'Community reports', 'Historical patterns', 'Cross-signal context', 'Detection rules'],
  },
]

const businessUseCases = [
  { title: 'Fintech & NBFC', icon: Banknote, description: 'Add another layer of review before onboarding or higher-risk transactions by assessing suspicious websites, submitted documents and the available fraud context.' },
  { title: 'HR & Recruitment', icon: BriefcaseBusiness, description: 'Support recruitment teams in reviewing offer letters, identity documents and employment-scam indicators before candidates or employees act on them.' },
  { title: 'E-commerce & Marketplaces', icon: ShoppingBag, description: 'Evaluate seller websites and available digital trust signals to help identify suspicious storefronts, impersonation or marketplace abuse.' },
  { title: 'Banks & Financial Institutions', icon: Landmark, description: 'Bring explainable fraud signals into verification and risk workflows where teams need more context before making a decision.' },
  { title: 'Telecom', icon: Network, description: 'Explore intelligence for impersonation and suspicious communication workflows, with signals presented as decision support rather than automatic proof.' },
]

export function TrustProblemSection() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8" aria-labelledby="trust-problem-title">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-violet-200/80 bg-gradient-to-br from-white via-violet-50/55 to-indigo-50/80 px-6 py-12 shadow-[0_24px_70px_-36px_rgba(76,29,149,0.35)] dark:border-violet-900/60 dark:from-gray-900 dark:via-violet-950/25 dark:to-indigo-950/30 sm:px-10 lg:px-14">
        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.04)_1px,transparent_1px)] bg-[size:38px_38px]" />
        <div aria-hidden="true" className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-violet-300/20 blur-3xl" />
        <div className="relative">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">The changing threat</p>
            <h2 id="trust-problem-title" className="mt-4 text-3xl font-black tracking-tight text-gray-950 dark:text-white sm:text-5xl">Trust is becoming a <span className="bg-gradient-to-r from-violet-700 to-indigo-600 bg-clip-text text-transparent dark:from-violet-400 dark:to-indigo-400">security problem</span></h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-gray-600 dark:text-gray-300 sm:text-lg">AI is making digital impersonation, phishing and fraud faster and more convincing. Visual polish alone can no longer establish trust.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {trustProblems.map((problem) => <div key={problem.title} className="flex gap-3 rounded-2xl border border-violet-100/90 bg-white/80 p-4 shadow-sm backdrop-blur-sm dark:border-violet-900/60 dark:bg-gray-900/70"><CircleDot className="mt-0.5 h-5 w-5 shrink-0 text-violet-500" /><div><h3 className="text-sm font-bold text-gray-900 dark:text-white">{problem.title}</h3><p className="mt-1.5 text-xs leading-5 text-gray-600 dark:text-gray-300">{problem.description}</p></div></div>)}
          </div>
        </div>
        <div className="mt-10 border-t border-violet-200/70 pt-8 text-center dark:border-violet-900/60">
          <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">The question is no longer only, “Is this secure?”</p>
          <p className="mt-2 text-2xl font-black text-gray-950 dark:text-white sm:text-3xl">It is, <span className="text-violet-700 dark:text-violet-300">“Can I trust this?”</span></p>
        </div>
        </div>
      </div>
    </section>
  )
}

export function IntelligencePlatformSection() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8" aria-labelledby="platform-title">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">RakshaAI Intelligence Platform</p>
          <h2 id="platform-title" className="mt-3 text-3xl font-black tracking-tight text-gray-950 dark:text-white sm:text-5xl">One intelligence layer. Multiple trust decisions.</h2>
          <p className="mt-5 text-lg leading-8 text-gray-600 dark:text-gray-300">RakshaAI is being developed as a shared intelligence layer for different moments of digital trust. Capabilities available today are clearly separated from areas that are still being developed.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {platformCapabilities.map(({ title, status, icon: Icon, description, items, href, cta }) => (
            <article key={title} className="flex flex-col rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300"><Icon className="h-6 w-6" /></span>
                <span className={`rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-wider ${status === 'Live' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300' : 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300'}`}>{status}</span>
              </div>
              <h3 className="mt-5 text-xl font-black text-gray-950 dark:text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">{description}</p>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">{items.map((item) => <li key={item} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"><CheckCircle2 className="h-4 w-4 shrink-0 text-indigo-500" />{item}</li>)}</ul>
              {href ? <Link href={href} className="mt-7 inline-flex items-center gap-2 self-start text-sm font-bold text-indigo-700 hover:text-indigo-900 dark:text-indigo-300">{cta}<ArrowRight className="h-4 w-4" /></Link> : <span className="mt-7 inline-flex self-start rounded-lg bg-gray-100 px-3 py-2 text-xs font-bold text-gray-500 dark:bg-gray-800 dark:text-gray-400">{cta}</span>}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function TrustEngineSection() {
  return (
    <section className="bg-indigo-50/70 px-4 py-16 dark:bg-indigo-950/20 sm:px-6 sm:py-20 lg:px-8" aria-labelledby="engine-title">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">RakshaAI Trust Engine</p>
          <h2 id="engine-title" className="mt-3 text-3xl font-black tracking-tight text-gray-950 dark:text-white sm:text-5xl">Multiple signals. One decision.</h2>
          <p className="mt-5 text-lg leading-8 text-gray-600 dark:text-gray-300">A single padlock, blacklist result or visual cue cannot explain the full risk. The RakshaAI Trust Engine combines the signals available for each input and turns them into a more understandable assessment.</p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {engineGroups.map(({ title, icon: Icon, description, items }) => <div key={title} className="rounded-3xl border border-indigo-100 bg-white p-7 dark:border-indigo-900 dark:bg-gray-900"><div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white"><Icon className="h-5 w-5" /></span><h3 className="font-black text-gray-950 dark:text-white">{title}</h3></div><p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">{description}</p><ul className="mt-5 space-y-3">{items.map((item) => <li key={item} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"><ScanSearch className="h-4 w-4 text-indigo-500" />{item}</li>)}</ul></div>)}
        </div>
        <div className="mx-auto mt-8 max-w-4xl rounded-3xl bg-gradient-to-r from-indigo-700 to-violet-700 p-7 text-center text-white shadow-xl sm:p-9">
          <Sparkles className="mx-auto h-7 w-7 text-amber-300" />
          <p className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-indigo-100">Decision support output</p>
          <p className="mt-2 text-2xl font-black sm:text-3xl">Risk Score + Explanation + Recommended Action</p>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-indigo-100">Available signals vary by input. RakshaAI provides decision support, not a guarantee that any website, document, person or transaction is legitimate.</p>
        </div>
      </div>
    </section>
  )
}

export function BusinessTrustSection() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8" aria-labelledby="business-trust-title">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-xl dark:border-gray-800 dark:bg-gray-900">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
          <div className="relative overflow-hidden bg-gradient-to-br from-violet-700 via-violet-700 to-indigo-700 p-8 text-white sm:p-10 lg:p-12">
            <div aria-hidden="true" className="absolute -right-20 -top-24 h-72 w-72 rounded-full border border-white/15" />
            <div aria-hidden="true" className="absolute -right-8 -top-12 h-48 w-48 rounded-full border border-white/10" />
            <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-100">Trust intelligence for businesses</p>
            <h2 id="business-trust-title" className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">Make safer decisions before fraud reaches your customers.</h2>
            <p className="mt-5 text-sm leading-7 text-violet-100">RakshaAI is opening conversations with businesses that want website, document and fraud signals inside existing verification and risk workflows.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link href="/contact?subject=API%20Early%20Access" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-black text-indigo-800 hover:bg-indigo-50">Request API Access<ArrowRight className="h-4 w-4" /></Link>
              <Link href="/business-verification" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 px-5 py-3 text-sm font-bold text-white hover:bg-white/10">Explore Business Solutions</Link>
            </div>
            <p className="mt-4 text-xs leading-5 text-violet-100">API access is not currently public. Requests are for discovery and early-access conversations.</p>
            </div>
          </div>
          <div className="grid gap-4 p-6 sm:grid-cols-2 sm:p-8 lg:p-10">
            {businessUseCases.map(({ title, icon: Icon, description }) => <article key={title} className="rounded-2xl border border-gray-200 p-5 dark:border-gray-700"><Icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" /><h3 className="mt-4 font-black text-gray-950 dark:text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">{description}</p></article>)}
            <div className="flex items-start gap-3 rounded-2xl border border-dashed border-indigo-300 bg-indigo-50 p-5 text-sm text-indigo-900 dark:border-indigo-800 dark:bg-indigo-950/40 dark:text-indigo-200"><Building2 className="mt-0.5 h-6 w-6 shrink-0" /><span><strong className="block">Designed for workflow integration</strong><span className="mt-1.5 block leading-6">The long-term goal is to make RakshaAI intelligence available where teams already make decisions, while releasing integrations only after their controls and limitations are clearly documented.</span></span></div>
          </div>
        </div>
      </div>
    </section>
  )
}

const trustLandscape = ['Endpoint Security', 'Call Protection', 'Website Reputation', 'Document Verification', 'Fraud Intelligence']

export function TrustLandscapeSection() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8" aria-labelledby="trust-landscape-title">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-gray-200 bg-white p-8 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:p-12">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">A connected trust landscape</p>
        <h2 id="trust-landscape-title" className="mt-3 text-3xl font-black text-gray-950 dark:text-white sm:text-4xl">The trust layer between users and digital threats</h2>
        <div className="mt-9 flex flex-wrap justify-center gap-3">{trustLandscape.map((item) => <span key={item} className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-bold text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200">{item}</span>)}</div>
        <ArrowRight className="mx-auto mt-7 h-6 w-6 rotate-90 text-indigo-500" />
        <p className="mt-4 text-xl font-black text-indigo-700 dark:text-indigo-300">RakshaAI connects these trust decisions.</p>
        <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-gray-600 dark:text-gray-300">The goal is not to replace every specialist security product. It is to help people and workflows combine relevant signals at the moment a trust decision must be made.</p>
      </div>
    </section>
  )
}
