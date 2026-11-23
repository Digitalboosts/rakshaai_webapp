import type { Metadata } from 'next'
import Link from 'next/link'
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  CircleDollarSign,
  Clock3,
  ExternalLink,
  FileCheck2,
  FileWarning,
  Globe2,
  HandCoins,
  MapPinned,
  MessageCircleWarning,
  Phone,
  Plane,
  Route,
  SearchCheck,
  ShieldAlert,
  ShieldCheck,
  Siren,
  Smartphone,
  TriangleAlert,
  UserRoundCheck,
  WalletCards,
} from 'lucide-react'
import DefaultLayout from '@/components/DefaultLayout'
import RelatedTopics from '@/components/RelatedTopics'
import ReportScamButton from '@/components/ReportScamButton'
import {
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  jsonLd,
  organizationRef,
  webPageSchema,
} from '@/lib/seo/schema'

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://rakshaai.co').replace(/\/$/, '')
const PAGE_PATH = '/scams/job-scams/overseas-job-scam'
const CANONICAL = `${SITE_URL}${PAGE_PATH}`
const TITLE = 'Overseas Job Scam India 2026: Dubai/Myanmar Traps & How to Stay Safe'
const DESCRIPTION =
  'Fake overseas jobs may demand visa fees or route Indians into scam compounds in Myanmar, Cambodia and Laos. Verify agents on eMigrate, check 8 red flags and use official India helplines.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    type: 'article',
    siteName: 'RakshaAI',
    locale: 'en_IN',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Overseas job scam and trafficking safety guide from RakshaAI' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: ['/opengraph-image'] },
  other: { 'geo.region': 'IN', language: 'en-IN' },
}

const emergencyContacts = [
  {
    label: 'PBSK / overseas-worker helpline in India',
    value: '1800-11-3090',
    href: 'tel:1800113090',
    note: 'MEA toll-free line; available from India',
    icon: Phone,
  },
  {
    label: 'PBSK from outside India',
    value: '+91-11-2688-5021',
    href: 'tel:+911126885021',
    note: 'Standard international call charges apply',
    icon: Globe2,
  },
  {
    label: 'PBSK WhatsApp',
    value: '+91-7428-321144',
    href: 'https://wa.me/917428321144',
    note: 'Send location and passport details only when safe',
    icon: Smartphone,
  },
  {
    label: 'MADAD consular grievance portal',
    value: 'madad.gov.in',
    href: 'https://www.madad.gov.in/madad/',
    note: 'Register a consular grievance for an Indian abroad',
    icon: ShieldAlert,
  },
]

const quickFacts = [
  { value: '₹30,000', label: 'Maximum recruiting-agent service charge in MEA’s latest published RA guidance; obtain a receipt', source: 'MEA RA guidance' },
  { value: '3,505', label: 'Unregistered recruiting agents notified on eMigrate by December 2025', source: 'MEA · Feb 2026' },
  { value: '6,998', label: 'Indians rescued from Cambodia, Lao PDR and Myanmar during 2022–2025', source: 'Derived from MEA table' },
  { value: 'Unknown', label: 'Exact number still stranded in Southeast Asian scam centres', source: 'MEA · Feb 2026' },
]

const harmPaths = [
  {
    icon: CircleDollarSign,
    title: 'Path 1: Fee fraud before travel',
    body: 'An unregistered agent collects recruitment, visa, medical, insurance or ticket payments. The promised visa, employer or flight never materialises and the agent disappears.',
    signal: 'You remain in India, but money and identity documents may already be exposed.',
    action: 'Call 1930 immediately for recent digital payments, notify your bank and file at cybercrime.gov.in and eMigrate.',
    tone: 'amber',
  },
  {
    icon: ShieldAlert,
    title: 'Path 2: Trafficking or forced cybercrime',
    body: 'A person travels on a false job promise, is moved to a different destination, has documents or movement controlled and is forced to conduct online fraud under threats or debt bondage.',
    signal: 'The promised employer, country, duties or freedom of movement changes after departure.',
    action: 'Treat this as a personal-safety emergency. Contact the nearest Indian Mission, MADAD and PBSK from a safe device or through family in India.',
    tone: 'red',
  },
]

const scamStages = [
  {
    icon: MessageCircleWarning,
    title: '1. Attractive international role',
    body: 'A social-media ad, WhatsApp contact or unknown agent offers high pay for IT, data-entry, casino, hospitality, construction or support work with little screening.',
  },
  {
    icon: FileWarning,
    title: '2. Documents, fees and urgency',
    body: 'Professional-looking contracts, visa receipts and flight plans are used to collect passport copies and staged payments before independent verification.',
  },
  {
    icon: Route,
    title: '3. Disappearance or route change',
    body: 'The agent either vanishes before travel or changes the employer, visa type, transit country or final destination after the worker is committed.',
  },
  {
    icon: ShieldAlert,
    title: '4. Coercion at the destination',
    body: 'In the trafficking pathway, passports may be withheld and victims may be confined or compelled to run cyber-fraud schemes under threats or manufactured debt.',
  },
]

const redFlags = [
  ['Recruitment only through chat', 'The agent avoids official email, verifiable office details and live contact with the foreign employer.'],
  ['Tourist or visit visa for employment', 'MEA warns that a valid overseas job should use an employment or work visa—not a promise to convert a tourist visa later.'],
  ['No active eMigrate registration', 'The recruiter’s name, registration number, status and office do not match the active Recruiting Agent record.'],
  ['Large or fragmented payments', 'Money is split across personal bank accounts, UPI IDs or cash without an itemised official receipt.'],
  ['Missing signed employment contract', 'Salary, duties, address, working hours, accommodation, travel and termination terms are vague or absent.'],
  ['Destination or route changes', 'A Thailand, Dubai or Malaysia offer suddenly includes an unexplained land transfer, third-country transit or different worksite.'],
  ['Passport control', 'The recruiter wants the original passport without a documented official process, or the employer says it will retain the passport after arrival.'],
  ['Pressure and isolation', 'You are told not to consult family, an Indian Mission, the employer or eMigrate because the vacancy will disappear.'],
]

const verificationSteps = [
  {
    icon: UserRoundCheck,
    title: 'Check the recruiting agent on eMigrate',
    body: 'Match the agent’s legal name, registration number, office address and active status. Also review eMigrate’s list of unregistered agents. A screenshot of a licence is not enough.',
    href: 'https://www.emigrate.gov.in/',
    label: 'Open eMigrate',
    external: true,
  },
  {
    icon: Building2,
    title: 'Verify the foreign employer independently',
    body: 'Contact the company using details from its official website or registry—not the offer letter. Ask the relevant Indian Mission to help verify the employer if doubt remains.',
    href: '/website-safety-checker',
    label: 'Check employer site',
    external: false,
  },
  {
    icon: FileCheck2,
    title: 'Confirm the visa, demand letter and contract',
    body: 'The visa must permit work. Read a signed employment contract covering duties, pay and conditions. Ask a registered agent to show the foreign employer’s demand letter and power of attorney.',
  },
  {
    icon: HandCoins,
    title: 'Check every charge before paying',
    body: 'MEA’s latest published RA guidance caps the agent’s service charge at ₹30,000 and requires a receipt. Confirm the current limit with PBSK, pay only verified beneficiaries and preserve every record.',
    href: 'tel:1800113090',
    label: 'Call PBSK',
    external: true,
  },
  {
    icon: MapPinned,
    title: 'Create a safe-departure plan',
    body: 'Share the contract, visa, itinerary, agent record and employer address with family. Save the Indian Mission and MADAD contacts. Refuse unexplained route, employer or destination changes.',
    href: 'https://www.madad.gov.in/madad/',
    label: 'Open MADAD',
    external: true,
  },
]

const feeFraudSteps = [
  ['Stop further payments', 'Do not pay a final release, refund, tax, clearance or recovery fee. Notify the bank or payment provider immediately.'],
  ['Call 1930', 'For recent online financial fraud, call the national cybercrime helpline and keep the acknowledgement number.'],
  ['File the cybercrime complaint', 'Submit chats, phone numbers, URLs, contracts, visa files, beneficiary details and transaction records at cybercrime.gov.in.'],
  ['Report the agent through eMigrate', 'Complain to the Protector General/Protector of Emigrants and identify whether the agent was registered, suspended or unregistered.'],
  ['Register a MADAD grievance if overseas harm is involved', 'Use MADAD and the relevant Indian Mission for employer abuse, stranded-worker or repatriation assistance.'],
]

const trappedAbroadSteps = [
  ['Move only when safe', 'Do not confront controllers or attempt an unplanned escape. Use a safe device or ask family in India to contact officials if your phone is monitored.'],
  ['Share precise identifying details', 'Send full name, passport number, current or last-known location, recruiter, employer, travel route and a safe callback method.'],
  ['Contact the nearest Indian Mission and MADAD', 'Use the Mission’s current official emergency channel and register a MADAD grievance. Ask family to repeat the report from India.'],
  ['Contact PBSK', 'Call 1800-11-3090 from India or +91-11-2688-5021 from abroad; the verified PBSK WhatsApp is +91-7428-321144.'],
  ['Preserve safety and evidence', 'Keep battery and connectivity where possible. Record threats, passport seizure and location only when doing so will not increase danger.'],
]

const verifiedFacts = [
  ['Recruiting agent status', 'Verify active registration on eMigrate', 'MEA'],
  ['Published RA service-charge cap', '₹30,000; receipt required', 'Latest MEA RA guidance'],
  ['Valid travel purpose', 'Employment/work visa, not tourist visa', 'MEA overseas-job advisory'],
  ['PBSK in India', '1800-11-3090, toll-free', 'MEA'],
  ['PBSK outside India', '+91-11-2688-5021', 'MEA advisory'],
  ['PBSK WhatsApp', '+91-7428-321144', 'MEA advisory'],
  ['Unregistered agents listed by Dec 2025', '3,505', 'MEA Parliament answer · Feb 2026'],
  ['Exact number currently stranded', 'Not known', 'MEA Parliament answer · Feb 2026'],
]

const officialSources = [
  { title: 'eMigrate portal', href: 'https://www.emigrate.gov.in/' },
  { title: 'MEA FAQ for intending emigrants', href: 'https://www.mea.gov.in/issues-of-intending-emigrants.htm' },
  { title: 'MEA complaints against recruiting agents', href: 'https://www.mea.gov.in/complaints-against-recruiting-agents.htm' },
  { title: 'MEA overseas-job advisory', href: 'https://meacms.mea.gov.in/Images/attach/05-List-2024.pdf' },
  { title: 'MEA recruiting-agent guidance', href: 'https://www.mea.gov.in/Images/attach/RecruitingAgents_new.pdf' },
  { title: 'MEA/Sansad trafficking response · Feb 2026', href: 'https://sansad.in/getFile/loksabhaquestions/annex/187/AU1259_Tc6uSu.pdf?source=pqals' },
  { title: 'MEA Cambodia employment advisory', href: 'https://www.mea.gov.in/combodia-travel-advisory.htm' },
  { title: 'MADAD portal', href: 'https://www.madad.gov.in/madad/' },
]

const relatedGuides = [
  {
    title: 'Advance Fee Job Registration Fraud',
    body: 'Domestic fake offer letters and pre-joining fees without the cross-border safety and trafficking pathway.',
    href: '/scams/job-scams/advance-fee-job-fraud',
  },
  {
    title: 'WhatsApp & Telegram Job Offer Scam',
    body: 'Unsolicited messaging-app recruitment and trust-building before money or documents are requested.',
    href: '/scams/job-scams/whatsapp-job-scam',
  },
  {
    title: 'Fake Job Portal / Naukri Clone Scam',
    body: 'Copied recruitment websites that harvest resumes, Aadhaar, PAN and contact information.',
    href: '/scams/job-scams/fake-job-portal',
  },
  {
    title: 'Job Scams India Hub',
    body: 'Compare the main job-fraud mechanisms, warning signs and reporting paths.',
    href: '/scams/job-scams',
  },
]

const tools = [
  {
    icon: Globe2,
    title: 'Website Safety Checker',
    body: 'Inspect the recruiting-agent or overseas employer website before sharing documents or paying.',
    href: '/website-safety-checker',
    label: 'Check website',
  },
  {
    icon: Phone,
    title: 'Phone Number Checker',
    body: 'Search the agent’s mobile number for community reports and suspicious identity signals.',
    href: '/phone-number-checker',
    label: 'Check agent number',
  },
  {
    icon: ShieldAlert,
    title: 'Report a Scam',
    body: 'Submit the agent, website and evidence to help warn other job seekers.',
    report: true,
    label: 'Report agent',
  },
]

const FAQ_ITEMS = [
  {
    question: 'What are the two harms in an overseas job scam?',
    answer:
      'The first is fee fraud: money and documents are collected but no genuine job or travel follows. The second is trafficking or forced labour: the person travels, the promised employer or destination changes, movement or documents are controlled, and the person may be forced to conduct cybercrime. The second path is an urgent personal-safety situation.',
  },
  {
    question: 'How do I verify an overseas job offer from India?',
    answer:
      'Verify the recruiting agent’s active registration on eMigrate, contact the foreign employer independently, confirm a genuine work visa, read the signed employment contract, check every fee against current MEA rules and share the verified itinerary and Indian Mission contacts with family.',
  },
  {
    question: 'Does every overseas job have to appear on eMigrate?',
    answer:
      'eMigrate is central to India’s regulated overseas-employment system, but the exact emigration-clearance workflow depends on the passport category, destination and recruitment route. MEA states that ECR passport holders taking employment in an ECR country require emigration clearance. Use eMigrate and PBSK to confirm the requirement for your case rather than treating absence from a search as the only test.',
  },
  {
    question: 'How can I check whether a recruiting agent is registered?',
    answer:
      'Search the active Recruiting Agent list on emigrate.gov.in and match the legal name, registration number, office address and status. Do not trust a licence screenshot or a sub-agent. MEA says overseas recruitment agents must be registered under the Emigration Act, 1983.',
  },
  {
    question: 'How much can a registered recruiting agent charge?',
    answer:
      'MEA’s latest published Recruiting Agent guidance states that service charges must not exceed ₹30,000 and that the agent must issue a receipt. Some older MEA webpages still display earlier limits, so confirm the current applicable amount with PBSK or eMigrate before paying.',
  },
  {
    question: 'Is it safe to travel on a tourist visa for a promised job?',
    answer:
      'No. MEA’s advisory says a valid job offer should permit travel on an employment or work visa and that a tourist visa is for tourism. A promise to convert it after arrival is a major warning sign.',
  },
  {
    question: 'What should I do after paying a fake overseas job agent?',
    answer:
      'Stop paying, call 1930 for recent digital-payment fraud, notify your bank, file at cybercrime.gov.in, report the agent through eMigrate or the Protector of Emigrants and preserve every chat, document, number, URL and transaction record. Recovery is not guaranteed and depends heavily on speed and traceable payment routes.',
  },
  {
    question: 'What should I do if someone is trapped in an overseas scam compound?',
    answer:
      'Do not attempt an amateur rescue. Contact the nearest Indian Mission and register a MADAD grievance. From India call PBSK at 1800-11-3090; from abroad use +91-11-2688-5021. MEA’s published PBSK WhatsApp is +91-7428-321144. Share the passport number, recruiter, route and last-known location through safe channels.',
  },
  {
    question: 'Is 1800-11-3090 an MHA anti-trafficking helpline?',
    answer:
      'No. Official MEA sources identify 1800-11-3090 as the Overseas Workers Resource Centre or Pravasi Bharatiya Sahayata Kendra helpline for overseas-employment information and grievances. This guide labels it accurately and pairs it with MADAD and the nearest Indian Mission.',
  },
  {
    question: 'How common are Southeast Asian fake-job scam centres?',
    answer:
      'In a February 2026 Parliament response, MEA said the exact number of Indians stranded was not known. Its country table records 6,998 rescues from Cambodia, Lao PDR and Myanmar during 2022–2025, while warning that dubious firms use social media and illegal recruitment channels.',
  },
]

const schemas = [
  webPageSchema({ name: TITLE, description: DESCRIPTION, url: PAGE_PATH }),
  articleSchema({
    headline: 'Overseas Job Scam India 2026: Visa Fee Fraud and Human Trafficking Safety Guide',
    description: DESCRIPTION,
    url: PAGE_PATH,
    image: '/opengraph-image',
    datePublished: '2026-07-22',
    dateModified: '2026-07-22',
    author: organizationRef(),
    section: 'Job Scams',
    keywords: [
      'overseas job scam india',
      'fake job offer abroad india',
      'dubai job scam india',
      'myanmar job scam india',
      'cambodia job scam india',
      'eMigrate recruiting agent check',
      'forced cybercrime trafficking india',
    ],
  }),
  faqPageSchema(FAQ_ITEMS),
  breadcrumbListSchema([
    { name: 'Home', url: '/' },
    { name: 'Scam Categories', url: '/scams' },
    { name: 'Job Scams India', url: '/scams/job-scams' },
    { name: 'Overseas Job Scam & Human Trafficking', url: PAGE_PATH },
  ]),
  {
    '@context': 'https://schema.org' as const,
    '@type': 'HowTo',
    '@id': `${CANONICAL}#how-to-verify`,
    name: 'How to verify an overseas job offer in India',
    description: 'Five checks to complete before paying an overseas recruiting agent or travelling for employment.',
    totalTime: 'PT15M',
    step: verificationSteps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.title,
      text: step.body,
    })),
  },
]

const sectionTitleClass = 'text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl'
const sectionIntroClass = 'mt-4 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300'

export default function OverseasJobScamPage() {
  return (
    <DefaultLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schemas) }} />

      <article className="bg-white dark:bg-slate-950">
        <section aria-labelledby="emergency-heading" className="border-b border-red-300 bg-red-950 px-4 py-7 text-white dark:border-red-900">
          <div className="mx-auto max-w-6xl">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-500/20 text-red-200"><Siren className="h-7 w-7" /></div>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-red-300">Emergency: trapped, threatened or forced to work abroad</p>
                <h2 id="emergency-heading" className="mt-2 text-2xl font-black">Contact the nearest Indian Mission, MADAD and PBSK when it is safe to do so</h2>
                <p className="mt-3 max-w-4xl text-sm leading-6 text-red-100/90">Do not confront controllers or attempt an unplanned escape. If your device may be monitored, ask a trusted person in India to report your passport number, recruiter, route and last-known location. Use local emergency services when safe and appropriate.</p>
              </div>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {emergencyContacts.map(({ icon: Icon, label, value, href, note }) => (
                <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} className="rounded-2xl border border-red-700 bg-white/5 p-4 transition hover:bg-white/10">
                  <div className="flex items-center gap-2 text-red-200"><Icon className="h-4 w-4" /><p className="text-[11px] font-black uppercase tracking-wide">{label}</p></div>
                  <p className="mt-3 text-lg font-black">{value}</p>
                  <p className="mt-1 text-xs leading-5 text-red-100/75">{note}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <header className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-amber-50 px-4 py-14 dark:border-blue-950 dark:from-slate-950 dark:via-slate-900 dark:to-amber-950/30 sm:py-20">
          <div aria-hidden="true" className="absolute -right-28 -top-36 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl" />
          <div aria-hidden="true" className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-amber-300/20 blur-3xl" />
          <div className="relative mx-auto max-w-6xl">
            <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <Link className="hover:text-blue-700 dark:hover:text-blue-300" href="/">Home</Link><span aria-hidden="true">›</span>
              <Link className="hover:text-blue-700 dark:hover:text-blue-300" href="/scams">Scam Categories</Link><span aria-hidden="true">›</span>
              <Link className="hover:text-blue-700 dark:hover:text-blue-300" href="/scams/job-scams">Job Scams India</Link><span aria-hidden="true">›</span>
              <span className="text-slate-800 dark:text-slate-200">Overseas Job Scam &amp; Human Trafficking</span>
            </nav>

            <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-blue-800 shadow-sm dark:border-blue-800 dark:bg-slate-900/70 dark:text-blue-300"><Plane className="h-4 w-4" /> Dual-harm overseas employment guide</div>
                <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
                  Overseas Job Scam India 2026
                  <span className="mt-2 block bg-gradient-to-r from-blue-700 to-red-700 bg-clip-text text-transparent dark:from-blue-300 dark:to-red-300">Dubai Fee Traps, Myanmar Compounds &amp; How to Stay Safe</span>
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">A fake overseas job can end before travel with stolen visa fees, or become a safety emergency after a worker is moved, confined and forced into cybercrime. Verify the agent, employer, visa and route independently before paying or departing.</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link href="/website-safety-checker" className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-900/15 transition hover:-translate-y-0.5 hover:bg-blue-800"><SearchCheck className="h-5 w-5" /> Check agent or employer <ArrowRight className="h-4 w-4" /></Link>
                  <Link href="/phone-number-checker" className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-200 bg-white px-6 py-3.5 text-sm font-bold text-blue-800 shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-50 dark:border-blue-800 dark:bg-slate-900 dark:text-blue-300 dark:hover:bg-slate-800"><Phone className="h-5 w-5" /> Check agent number</Link>
                </div>
                <p className="mt-4 text-xs font-medium text-slate-500 dark:text-slate-400">Free checks · No login · Still verify registration and employment details through eMigrate and MEA</p>
              </div>

              <div className="rounded-3xl border border-blue-200 bg-slate-950 p-7 text-white shadow-2xl shadow-blue-950/15 dark:border-blue-900 sm:p-8">
                <div className="flex items-center gap-3 text-blue-300"><Route className="h-6 w-6" /><p className="text-xs font-black uppercase tracking-[0.16em]">One offer, two possible outcomes</p></div>
                <div className="mt-6 space-y-4">
                  <div className="rounded-2xl border border-amber-700/70 bg-amber-500/10 p-5"><p className="text-xs font-black uppercase tracking-wide text-amber-300">Fee-fraud path</p><p className="mt-2 font-bold">You pay. The visa or job never appears. The agent disappears.</p></div>
                  <div className="flex justify-center"><ArrowRight className="h-5 w-5 rotate-90 text-slate-500" /></div>
                  <div className="rounded-2xl border border-red-700/70 bg-red-500/10 p-5"><p className="text-xs font-black uppercase tracking-wide text-red-300">Trafficking path</p><p className="mt-2 font-bold">You travel. The route, employer or freedom changes. Forced work begins.</p></div>
                </div>
                <p className="mt-6 rounded-xl bg-white/5 p-4 text-xs leading-5 text-slate-300">A destination name alone is not evidence of fraud. The danger is the unverified recruiter, wrong visa, altered route, document control or coercion.</p>
              </div>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {quickFacts.map((fact) => <div key={fact.label} className="rounded-2xl border border-white/80 bg-white/90 p-5 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/85"><p className="text-2xl font-black text-blue-700 dark:text-blue-300">{fact.value}</p><p className="mt-2 text-sm leading-5 text-slate-700 dark:text-slate-300">{fact.label}</p><p className="mt-2 text-[11px] font-bold uppercase tracking-wide text-slate-400">{fact.source}</p></div>)}
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-6xl space-y-24 px-4 py-16 sm:px-6 lg:px-8">
          <section aria-labelledby="harms-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-700 dark:text-blue-400">Identify the harm first</p>
            <h2 id="harms-heading" className={`${sectionTitleClass} mt-3`}>Two Harms, Two Response Paths</h2>
            <p className={sectionIntroClass}>Fee fraud and trafficking can begin with the same offer, but they require different urgency and reporting.</p>
            <div className="mt-9 grid gap-6 md:grid-cols-2">
              {harmPaths.map(({ icon: Icon, title, body, signal, action, tone }) => (
                <article key={title} className={`rounded-3xl border p-7 ${tone === 'red' ? 'border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950/25' : 'border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/25'}`}>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${tone === 'red' ? 'bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300' : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'}`}><Icon className="h-6 w-6" /></div>
                  <h3 className="mt-5 text-xl font-black text-slate-950 dark:text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">{body}</p>
                  <p className="mt-5 rounded-xl bg-white/70 p-4 text-sm leading-6 text-slate-800 dark:bg-slate-900/70 dark:text-slate-200"><strong>Key signal:</strong> {signal}</p>
                  <p className="mt-3 text-sm font-semibold leading-6 text-slate-900 dark:text-white"><strong>Respond:</strong> {action}</p>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="mechanism-heading" className="rounded-3xl bg-slate-950 px-6 py-10 text-white sm:px-10 sm:py-12">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-300">How the trap develops</p>
            <h2 id="mechanism-heading" className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">The Overseas Job Scam Mechanism</h2>
            <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {scamStages.map(({ icon: Icon, title, body }, index) => <article key={title} className="relative rounded-2xl border border-slate-800 bg-white/5 p-5"><Icon className="h-6 w-6 text-blue-300" /><h3 className="mt-4 font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-300">{body}</p>{index < scamStages.length - 1 ? <ArrowRight className="absolute -right-3 top-1/2 hidden h-5 w-5 text-slate-600 lg:block" /> : null}</article>)}
            </div>
          </section>

          <section aria-labelledby="evidence-heading" className="rounded-3xl border border-blue-200 bg-blue-50 p-7 dark:border-blue-900 dark:bg-blue-950/25 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-center">
              <div><p className="text-xs font-black uppercase tracking-[0.18em] text-blue-800 dark:text-blue-300">What the Government has confirmed</p><h2 id="evidence-heading" className="mt-3 text-3xl font-black text-slate-950 dark:text-white">Fake Recruitment Can Lead to Forced Cybercrime</h2><p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-300">In February 2026, MEA told Parliament that dubious firms had lured Indians—mostly through social media—to Cambodia, Myanmar and Lao PDR, where some were made to carry out cybercrime from scam centres. The Ministry said the exact number still stranded was unknown.</p><p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-300">Its table records 6,998 rescues across the three countries during 2022–2025. This is a rescue total, not an estimate of people currently trapped.</p><a href="https://sansad.in/getFile/loksabhaquestions/annex/187/AU1259_Tc6uSu.pdf?source=pqals" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-sm font-bold text-white hover:bg-blue-800">Read the Parliament response <ExternalLink className="h-4 w-4" /></a></div>
              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">{[['Cambodia', '2,533 rescued'], ['Lao PDR', '2,297 rescued'], ['Myanmar', '2,168 rescued']].map(([country, value]) => <div key={country} className="rounded-2xl border border-blue-200 bg-white p-5 dark:border-blue-800 dark:bg-slate-900"><p className="text-xs font-black uppercase tracking-wide text-blue-700 dark:text-blue-300">{country}</p><p className="mt-2 text-xl font-black text-slate-950 dark:text-white">{value}</p><p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Total for 2022–2025</p></div>)}</div>
            </div>
          </section>

          <section aria-labelledby="red-flags-heading" className="rounded-3xl bg-gradient-to-br from-red-950 to-slate-950 px-6 py-10 text-white sm:px-10 sm:py-12">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-red-300">Before paying or travelling</p>
            <h2 id="red-flags-heading" className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">8 Warning Signs of an Overseas Job Scam</h2>
            <ol className="mt-9 grid gap-4 md:grid-cols-2">{redFlags.map(([title, body], index) => <li key={title} className="flex gap-4 rounded-2xl border border-red-800/70 bg-black/15 p-5"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-sm font-black text-red-900">{index + 1}</span><div><h3 className="font-bold">{title}</h3><p className="mt-1 text-sm leading-6 text-red-100/85">{body}</p></div></li>)}</ol>
          </section>

          <section aria-labelledby="verify-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-700 dark:text-blue-400">Official and independent checks</p>
            <h2 id="verify-heading" className={`${sectionTitleClass} mt-3`}>How to Verify an Overseas Job Offer in India</h2>
            <p className={sectionIntroClass}>Do all five checks. A real-looking contract or visa screenshot cannot substitute for independent confirmation.</p>
            <ol className="mt-9 space-y-4">
              {verificationSteps.map(({ title, body, href, label, icon: Icon, external }, index) => (
                <li key={title} className="grid gap-4 rounded-2xl border border-slate-200 p-5 dark:border-slate-800 sm:grid-cols-[48px_1fr_auto] sm:items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300"><Icon className="h-5 w-5" /></div>
                  <div><p className="text-xs font-black uppercase tracking-wide text-blue-700 dark:text-blue-400">Step {index + 1}</p><h3 className="mt-1 font-bold text-slate-950 dark:text-white">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{body}</p></div>
                  {href && label ? external ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-blue-200 px-4 py-2.5 text-sm font-bold text-blue-800 hover:bg-blue-50 dark:border-blue-800 dark:text-blue-300 dark:hover:bg-blue-950">{label} {href.startsWith('http') ? <ExternalLink className="h-3.5 w-3.5" /> : <Phone className="h-3.5 w-3.5" />}</a> : <Link href={href} className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-blue-200 px-4 py-2.5 text-sm font-bold text-blue-800 hover:bg-blue-50 dark:border-blue-800 dark:text-blue-300 dark:hover:bg-blue-950">{label} <ArrowRight className="h-3.5 w-3.5" /></Link> : null}
                </li>
              ))}
            </ol>
            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950 dark:border-amber-900 dark:bg-amber-950/25 dark:text-amber-100"><AlertTriangle className="mr-2 inline h-4 w-4" /><strong>Important eMigrate nuance:</strong> MEA says ECR passport holders taking employment in an ECR country require emigration clearance. The precise workflow depends on the passport, destination and recruitment route, so use eMigrate/PBSK rather than assuming every foreign vacancy will appear in the same public search.</div>
          </section>

          <section aria-labelledby="recovery-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-red-700 dark:text-red-400">Choose the correct path</p>
            <h2 id="recovery-heading" className={`${sectionTitleClass} mt-3`}>Recovery and Emergency Guide</h2>
            <div className="mt-9 grid gap-8 lg:grid-cols-2">
              <article className="rounded-3xl border border-amber-200 bg-amber-50 p-7 dark:border-amber-900 dark:bg-amber-950/25"><div className="flex items-center gap-3 text-amber-900 dark:text-amber-200"><WalletCards className="h-6 w-6" /><p className="text-xs font-black uppercase tracking-[0.14em]">Path A · You paid but did not travel</p></div><h3 className="mt-4 text-2xl font-black text-slate-950 dark:text-white">Treat it as financial and recruitment fraud</h3><ol className="mt-6 space-y-4">{feeFraudSteps.map(([title, body], index) => <li key={title} className="flex gap-3"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-200 text-sm font-black text-amber-950 dark:bg-amber-900 dark:text-amber-100">{index + 1}</span><div><p className="font-bold text-slate-950 dark:text-white">{title}</p><p className="mt-1 text-sm leading-6 text-slate-700 dark:text-slate-300">{body}</p></div></li>)}</ol></article>
              <article className="rounded-3xl border border-red-800 bg-red-950 p-7 text-white"><div className="flex items-center gap-3 text-red-300"><Siren className="h-6 w-6" /><p className="text-xs font-black uppercase tracking-[0.14em]">Path B · You are unsafe abroad</p></div><h3 className="mt-4 text-2xl font-black">Prioritise personal safety and consular help</h3><ol className="mt-6 space-y-4">{trappedAbroadSteps.map(([title, body], index) => <li key={title} className="flex gap-3"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-200 text-sm font-black text-red-950">{index + 1}</span><div><p className="font-bold">{title}</p><p className="mt-1 text-sm leading-6 text-red-100/85">{body}</p></div></li>)}</ol></article>
            </div>
            <div className="mt-6 flex flex-col items-start justify-between gap-5 rounded-2xl border border-red-200 bg-red-50 p-6 dark:border-red-900 dark:bg-red-950/25 sm:flex-row sm:items-center"><div><h3 className="text-lg font-black text-red-950 dark:text-red-100">Reporting for someone else?</h3><p className="mt-1 text-sm text-red-800 dark:text-red-200">Give officials the passport number, agent, employer, route, last contact time, location clues and a safe way to communicate.</p></div><a href="https://www.madad.gov.in/madad/" target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-red-700 px-5 py-3 text-sm font-bold text-white hover:bg-red-800">Open MADAD <ExternalLink className="h-4 w-4" /></a></div>
          </section>

          <section aria-labelledby="comparison-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-700 dark:text-blue-400">Side-by-side check</p>
            <h2 id="comparison-heading" className={`${sectionTitleClass} mt-3`}>Legitimate Overseas Placement vs Scam</h2>
            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800"><div className="overflow-x-auto"><table className="w-full min-w-[760px] text-left text-sm"><thead className="bg-slate-950 text-white"><tr><th className="px-5 py-4">Check</th><th className="px-5 py-4">Safer, verifiable process</th><th className="px-5 py-4">High-risk pattern</th></tr></thead><tbody className="divide-y divide-slate-200 dark:divide-slate-800">{[
              ['Recruiter', 'Active RA record matches on eMigrate', 'Unregistered agent, sub-agent or licence screenshot only'],
              ['Visa', 'Employment/work visa verified officially', 'Tourist/visit visa with conversion promise'],
              ['Contract', 'Signed terms identify employer, duties, pay and conditions', 'Vague letter, missing employer signature or changing duties'],
              ['Payments', 'Within current official rules, verified beneficiary and receipt', 'Personal UPI/cash, split payments or no receipt'],
              ['Route', 'Employer, country and itinerary stay consistent', 'Unexplained transit, land transfer or destination change'],
              ['Documents', 'Worker retains originals and copies', 'Original passport held or access restricted'],
            ].map(([check, safe, risk], index) => <tr key={check} className={index % 2 === 0 ? 'bg-white dark:bg-slate-950' : 'bg-slate-50 dark:bg-slate-900'}><th scope="row" className="px-5 py-4 font-bold text-slate-950 dark:text-white">{check}</th><td className="px-5 py-4 text-emerald-800 dark:text-emerald-300"><CheckCircle2 className="mr-2 inline h-4 w-4" />{safe}</td><td className="px-5 py-4 text-red-800 dark:text-red-300"><TriangleAlert className="mr-2 inline h-4 w-4" />{risk}</td></tr>)}</tbody></table></div></div>
          </section>

          <section aria-labelledby="facts-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-700 dark:text-blue-400">Verified government details</p>
            <h2 id="facts-heading" className={`${sectionTitleClass} mt-3`}>Official Overseas-Employment Safety Resources</h2>
            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800"><div className="overflow-x-auto"><table className="w-full min-w-[680px] text-left text-sm"><thead className="bg-slate-950 text-white"><tr><th className="px-5 py-4">Resource or rule</th><th className="px-5 py-4">Verified detail</th><th className="px-5 py-4">Source</th></tr></thead><tbody className="divide-y divide-slate-200 dark:divide-slate-800">{verifiedFacts.map(([metric, data, source], index) => <tr key={metric} className={index % 2 === 0 ? 'bg-white dark:bg-slate-950' : 'bg-slate-50 dark:bg-slate-900'}><th scope="row" className="px-5 py-4 font-semibold text-slate-950 dark:text-white">{metric}</th><td className="px-5 py-4 font-bold text-blue-700 dark:text-blue-300">{data}</td><td className="px-5 py-4 text-slate-500 dark:text-slate-400">{source}</td></tr>)}</tbody></table></div></div>
            <div className="mt-5 flex flex-wrap gap-3">{officialSources.map((source) => <a key={source.href} href={source.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 hover:border-blue-300 hover:text-blue-800 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-blue-800 dark:hover:text-blue-300">{source.title} <ExternalLink className="h-3 w-3" /></a>)}</div>
            <p className="mt-4 text-xs leading-5 text-slate-500 dark:text-slate-400">The supplied loss totals, average-fee figures, case studies, estimates of people currently trapped and destination percentages are not reproduced because matching primary evidence was not found. This guide also excludes unverified emergency numbers. Always re-check contact details on MEA, MADAD or the relevant Indian Mission before relying on them.</p>
          </section>

          <section aria-labelledby="related-heading"><p className="text-xs font-black uppercase tracking-[0.18em] text-blue-700 dark:text-blue-400">Related job-scam guides</p><h2 id="related-heading" className={`${sectionTitleClass} mt-3`}>Compare the Recruitment Mechanism</h2><div className="mt-8 grid gap-4 sm:grid-cols-2">{relatedGuides.map((item) => <Link key={item.href} href={item.href} className="group rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md dark:border-slate-800 dark:hover:border-blue-800"><div className="flex items-start justify-between gap-4"><div><h3 className="font-bold text-slate-950 dark:text-white">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.body}</p></div><ArrowRight className="mt-1 h-5 w-5 shrink-0 text-blue-700 transition group-hover:translate-x-1 dark:text-blue-400" /></div></Link>)}</div></section>

          <section aria-labelledby="tools-heading" className="rounded-3xl bg-gradient-to-br from-blue-950 to-slate-950 px-6 py-10 text-white sm:px-10 sm:py-12"><p className="text-xs font-black uppercase tracking-[0.18em] text-blue-300">Free RakshaAI checks</p><h2 id="tools-heading" className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Check Before Paying or Sending Documents</h2><div className="mt-9 grid gap-5 md:grid-cols-3">{tools.map(({ icon: Icon, title, body, href, report, label }) => report ? <div key={title} className="rounded-2xl border border-blue-800 bg-white/5 p-6"><Icon className="h-7 w-7 text-blue-300" /><h3 className="mt-4 font-bold">{title}</h3><p className="mt-2 min-h-16 text-sm leading-6 text-slate-300">{body}</p><ReportScamButton className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-300 hover:text-blue-200">{label} <ArrowRight className="h-4 w-4" /></ReportScamButton></div> : <Link key={href} href={href!} className="group rounded-2xl border border-blue-800 bg-white/5 p-6 hover:bg-white/10"><Icon className="h-7 w-7 text-blue-300" /><h3 className="mt-4 font-bold">{title}</h3><p className="mt-2 min-h-16 text-sm leading-6 text-slate-300">{body}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-300">{label} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span></Link>)}</div></section>

          <section aria-labelledby="alerts-heading" className="rounded-3xl border border-amber-200 bg-amber-50 p-7 dark:border-amber-900 dark:bg-amber-950/25 sm:p-10"><div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center"><div><div className="flex items-center gap-2 text-amber-800 dark:text-amber-300"><Clock3 className="h-5 w-5" /><p className="text-xs font-black uppercase tracking-[0.16em]">Current advisories</p></div><h2 id="alerts-heading" className="mt-3 text-2xl font-black text-slate-950 dark:text-white">Check live MEA travel advisories and scam alerts</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-slate-700 dark:text-slate-300">Recruiter names, routes and destination risks change quickly. Do not rely on a static list of agents or old embassy numbers.</p></div><div className="flex flex-wrap gap-3"><a href="https://www.mea.gov.in/travel-advisory.htm" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-amber-300 bg-white px-5 py-3 text-sm font-bold text-amber-900 hover:bg-amber-100 dark:border-amber-800 dark:bg-slate-900 dark:text-amber-200">MEA advisories <ExternalLink className="h-4 w-4" /></a><Link href="/scam-alerts" className="inline-flex items-center gap-2 rounded-xl bg-amber-800 px-5 py-3 text-sm font-bold text-white hover:bg-amber-900">RakshaAI alerts <ArrowRight className="h-4 w-4" /></Link></div></div></section>

          <section aria-labelledby="faq-heading" className="mx-auto max-w-4xl"><div className="text-center"><p className="text-xs font-black uppercase tracking-[0.18em] text-blue-700 dark:text-blue-400">Quick answers</p><h2 id="faq-heading" className={`${sectionTitleClass} mt-3`}>Overseas Job Scam and Trafficking FAQs</h2></div><div className="mt-9 space-y-3">{FAQ_ITEMS.map((item) => <details key={item.question} className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-blue-300 open:shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:open:border-blue-800"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold text-slate-950 dark:text-white">{item.question}<span aria-hidden="true" className="text-xl text-blue-700 transition group-open:rotate-45 dark:text-blue-400">+</span></summary><p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-6 text-slate-600 dark:border-slate-800 dark:text-slate-300">{item.answer}</p></details>)}</div></section>

          <section className="rounded-3xl border border-slate-200 bg-slate-50 p-7 dark:border-slate-800 dark:bg-slate-900 sm:p-10"><div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center"><div><div className="flex items-center gap-2 text-blue-700 dark:text-blue-300"><ShieldCheck className="h-5 w-5" /><p className="text-xs font-black uppercase tracking-[0.16em]">Before departure</p></div><h2 className="mt-2 max-w-2xl text-2xl font-black text-slate-950 dark:text-white">Verify the agent, employer, work visa, contract and route independently.</h2><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">No deadline is worth bypassing the checks that preserve your money, documents and physical safety.</p></div><a href="https://www.emigrate.gov.in/" target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-sm font-bold text-white hover:bg-blue-800"><BadgeCheck className="h-4 w-4" /> Verify on eMigrate</a></div></section>

          <RelatedTopics currentPath={PAGE_PATH} clusterId="job-scams" />
        </div>
      </article>
    </DefaultLayout>
  )
}
