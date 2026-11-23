import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Clock3,
  ExternalLink,
  FileCheck2,
  FileWarning,
  Globe2,
  GraduationCap,
  Landmark,
  MailCheck,
  Phone,
  SearchCheck,
  ShieldAlert,
  Shirt,
  TriangleAlert,
  UserRoundSearch,
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
const PAGE_PATH = '/scams/job-scams/advance-fee-job-fraud'
const CANONICAL = `${SITE_URL}${PAGE_PATH}`
const TITLE = 'Advance Fee Job Registration Scam India 2026: Spot Fake Offer Letters'
const DESCRIPTION =
  'Fake job offers demand registration fees, background check payments, training deposits & uniform advances. Joining date kept postponed. 8 red flags, verify any offer letter in 2 min & refund guide.'

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
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Fake job offer letter and advance-fee warning from RakshaAI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/opengraph-image'],
  },
  other: { 'geo.region': 'IN', language: 'en-IN' },
}

const quickFacts = [
  { value: '₹0', label: 'Fee charged by National Career Service for registration, applications or interviews', source: 'NCS / MoLE' },
  { value: '1514', label: 'NCS toll-free helpline for checking suspicious NCS-linked callers or mailers', source: 'National Career Service' },
  { value: '1930', label: 'National helpline for immediate reporting of financial cyber fraud', source: 'MHA / I4C' },
  { value: '8 checks', label: 'Offer-letter signals to verify before making any pre-joining payment', source: 'RakshaAI guide' },
]

const fraudTypes = [
  {
    icon: Building2,
    title: 'Fake corporate or MNC offer letter',
    body: 'A scammer copies a known company logo, letterhead and public HR details. A simulated interview ends with a registration, processing or background-verification payment request.',
    signal: 'The sender uses Gmail or a lookalike domain instead of the exact official company domain.',
  },
  {
    icon: BadgeCheck,
    title: 'Background-check fee',
    body: "The offer is made conditional on a paid check through a specific 'verification agency'. After you pay, another fee appears or the check allegedly fails and needs resubmission.",
    signal: 'The verification vendor and payment beneficiary cannot be confirmed by the employer through an independently found contact.',
  },
  {
    icon: GraduationCap,
    title: 'Training kit or agency fee',
    body: 'A recruiter sells course access, study material, login credentials or a training kit before joining. Basic content may exist, but employment is repeatedly delayed.',
    signal: 'The supposed job becomes secondary to selling mandatory materials or training.',
  },
  {
    icon: Shirt,
    title: 'Uniform or equipment deposit',
    body: 'Security, hospitality, retail or logistics roles are used to justify a refundable uniform, laptop, device or equipment deposit before the first day.',
    signal: 'Payment goes to a personal UPI ID and the promised equipment never arrives.',
  },
  {
    icon: Landmark,
    title: 'Government recruitment impersonation',
    body: 'Fake selection notices or appointment letters impersonate recruitment boards, departments, public-sector companies or railways and demand verification or medical fees.',
    signal: 'The notice cannot be found on the recruiting authority’s official .gov.in or .nic.in website.',
  },
]

const postponementLoop = [
  ['Offer received', 'A formal letter names the role, salary and joining date. A small document-processing fee is requested.'],
  ['First fee paid', 'The recruiter confirms a joining date and asks you to prepare documents or resign from your current role.'],
  ['Joining delayed', 'An internal audit, client approval or onboarding backlog supposedly moves the date.'],
  ['Another fee appears', 'A uniform, background-check, insurance, training or document-resubmission payment becomes the final obstacle.'],
  ['Sunk-cost pressure grows', 'Because you have already paid and planned around the salary, another smaller payment feels easier than accepting the loss.'],
  ['Contact disappears', 'The number stops connecting, emails bounce, the site vanishes or the genuine company confirms it never issued the offer.'],
]

const illustrativeCases = [
  ['Corporate offer impersonation', 'Registration → background check → equipment', 'A polished letter and video interview are followed by several small payments. The genuine company later confirms that neither the recruiter nor offer reference exists.'],
  ['Government selection notice', 'Medical → verification → uniform', 'A candidate receives a forged merit-list or appointment notice. Payment is demanded through a personal account instead of the authority’s official portal.'],
  ['Recruitment agency package', 'Registration → training kit → deposit', 'The agency sells mandatory onboarding materials and repeatedly changes the client company or joining date. Its address or legal identity cannot be verified.'],
  ['Professional-network recruiter', 'Connection → interview → processing fee', 'A convincing recruiter profile uses copied employment history. The offer is delivered from a personal email and payment is requested outside the employer’s systems.'],
  ['Hospitality or security role', 'Uniform → equipment → postponed joining', 'A plausible uniform deposit is collected, followed by delays and a second refundable security demand. No supervisor is present at the stated workplace.'],
  ['Fake verification portal', 'Background check → failed check → resubmission', 'A professional-looking site accepts payment and generates a clearance report, then demands another fee to correct an invented document problem.'],
]

const redFlags = [
  ['A pre-joining fee is requested', 'Registration, verification, training, uniform, insurance and equipment labels can all disguise the same advance-fee demand.'],
  ['The sender uses a personal or lookalike email', 'The text after the @ must exactly match the employer’s official domain—not Gmail, Yahoo or an extra-word imitation.'],
  ['The joining date moves after each payment', 'A repeated postpone-and-pay cycle is the defining extraction pattern.'],
  ['Official HR cannot confirm the offer', 'Use contact details from the genuine company site, never the number printed on the suspicious letter.'],
  ['The company identity does not match MCA records', 'Check the legal name, CIN and registered address instead of relying on a logo or website footer.'],
  ['Sensitive documents are collected informally', 'Aadhaar, PAN, salary slips or bank details requested through WhatsApp create identity-theft risk.'],
  ['The interview uses only personal accounts', 'A personal meeting link or phone-only interview, followed by immediate selection, deserves independent verification.'],
  ['Payment goes to a person or unrelated entity', 'The beneficiary name does not match the claimed employer, verification vendor or official recruitment authority.'],
]

const verificationSteps = [
  {
    title: 'Check the sender’s exact email domain',
    body: 'Compare everything after the @ with the domain on the independently located official website. Do not trust a link inside the offer letter itself.',
    icon: MailCheck,
  },
  {
    title: 'Contact official HR independently',
    body: 'Open the real careers or contact page yourself and ask whether the role, recruiter, offer reference and joining date are in the employer’s system.',
    href: '/website-safety-checker',
    label: 'Check website',
    icon: Phone,
  },
  {
    title: 'Check the company in MCA records',
    body: 'Compare the legal company name, CIN and registered address with the letter and website. MCA registration alone does not prove the offer is genuine.',
    href: 'https://www.mca.gov.in/',
    label: 'Open MCA',
    icon: Building2,
    external: true,
  },
  {
    title: 'Check the recruiter and payment details',
    body: 'Search the phone number, verify the recruiter through official HR, and confirm that any beneficiary belongs to the named entity before considering a payment.',
    href: '/phone-number-checker',
    label: 'Check number',
    icon: UserRoundSearch,
  },
  {
    title: 'Stop at the first unexplained fee',
    body: 'Do not pay more to protect an earlier payment. Preserve the letter and communications, verify independently, and walk away if the employer cannot confirm the demand.',
    icon: ShieldAlert,
  },
]

const recoverySteps = [
  {
    title: 'Stop all further payments',
    body: 'Do not pay a final clearance, refund, tax or recovery fee. Save the offer letter, headers, email domain, recruiter profile, phone numbers and beneficiary details.',
  },
  {
    title: 'Call 1930 for recent financial cyber fraud',
    body: 'Provide the transaction time, amount, UPI ID or bank beneficiary and every related payment. Fast reporting gives banks and authorities the best available opportunity to act.',
  },
  {
    title: 'File at cybercrime.gov.in',
    body: 'Use the closest online job or financial fraud category. Attach the fake letter, complete email or chat trail, payment records, website and recruiter identifiers.',
  },
  {
    title: 'Contact your bank and relevant platform',
    body: 'Raise a fraud dispute with the payment provider. Report the profile or listing to the job portal, professional network or email service used to approach you.',
  },
  {
    title: 'Report and escalate with evidence',
    body: 'Use the complaint reference for police follow-up where needed. For NCS impersonation, contact NCS at 1514 or support.ncs@gov.in. Report the identifiers to RakshaAI.',
  },
]

const responseTimeline = [
  ['Immediately', 'Stop paying and preserve the original offer letter, email headers and payment records.'],
  ['As soon as possible', 'Call 1930 with the beneficiary and transaction details.'],
  ['Within 24 hours', 'File at cybercrime.gov.in and notify your bank or payment provider.'],
  ['After filing', 'Report the fake recruiter to the job platform and genuine impersonated company.'],
  ['Ongoing', 'Keep complaint references and ignore anyone demanding a recovery fee.'],
]

const deliveryChannels = [
  ['Email', 'Letter from Gmail, Yahoo or a lookalike employer domain.', 'Compare the domain character-for-character with the official employer website.'],
  ['LinkedIn', 'Copied recruiter identity, fake employment history or a newly built professional profile.', 'Confirm the person and offer through official HR outside LinkedIn.'],
  ['Job portal', 'A fake recruiter contacts applicants after a listing or resume search.', 'Check whether the same vacancy exists on the company careers page.'],
  ['WhatsApp', 'A formal-looking PDF follows an informal message or call.', 'A letter received only in chat is not independently verified employment.'],
  ['Phone call', 'A cold caller conducts a short interview and announces immediate selection.', 'Do not pay after a phone-only process; demand confirmation through official channels.'],
]

const verifiedFacts = [
  ['NCS registration, application and interview-processing services', 'Free of cost', 'National Career Service'],
  ['NCS warning sign', 'Registration-fee job offers may be fraud', 'NCS FAQ'],
  ['NCS impersonation email rule', 'Authentic NCS mail uses gov.in or nic.in', 'NCS FAQ'],
  ['NCS credential-check channel', '1514 / support.ncs@gov.in', 'National Career Service'],
  ['Fake-job fee types documented by I4C', 'Registration, training and software fees', 'I4C · Apr 2025'],
  ['Immediate financial-fraud reporting', '1930 / cybercrime.gov.in', 'MHA / I4C'],
]

const officialSources = [
  { title: 'National Career Service fraud warning', href: 'https://www.ncs.gov.in/' },
  { title: 'NCS jobseeker and employer FAQs', href: 'https://www.ncs.gov.in/employer/_layouts/15/ncsp/faqs.aspx' },
  { title: 'NCS blacklisted entities', href: 'https://www.ncs.gov.in/Pages/FraudEmployers.aspx' },
  { title: 'I4C fake CAPTCHA-job advisory', href: 'https://cybercrime.gov.in/Webform/theme/resources/advisories/ADVISORY%20TAU-ADV-004_Captcha%20Filling%20Fraud_08.04.2025.pdf' },
  { title: 'India Code: Employment Exchanges Act', href: 'https://www.indiacode.nic.in/handle/123456789/18573?view_type=browse' },
]

const relatedGuides = [
  {
    title: 'Fake Company / Fake HR Portal Scam',
    body: 'A dedicated website impersonating a real brand like TCS or Infosys, plus a fake Google Meet interview and a forged offer letter carrying the real logo.',
    href: '/scams/job-scams/fake-company-portal',
  },
  {
    title: 'MLM / Pyramid Scheme Scam',
    body: 'A joining fee for a recruitment-based "business opportunity" rather than a fake employment offer letter.',
    href: '/scams/job-scams/mlm-pyramid-scam',
  },
  {
    title: 'WhatsApp & Telegram Job Offer Scam',
    body: 'An informal unsolicited role with no genuine hiring process. This page focuses on formal documents and pre-joining fees.',
    href: '/scams/job-scams/whatsapp-job-scam',
  },
  {
    title: 'Task Scam / Like and Earn Fraud',
    body: 'Real micro-tasks and small payouts lead to escalating boosted-task deposits rather than a formal appointment process.',
    href: '/scams/job-scams/task-scam',
  },
  {
    title: 'Investment & Job Fraud via UPI',
    body: 'The broader deposit-to-start and blocked-withdrawal pattern involving job and investment pitches.',
    href: '/scams/upi-fraud/investment-job-fraud',
  },
  {
    title: 'Advance Payment Trap',
    body: 'The same advance-fee psychology applied to products and purchases rather than employment.',
    href: '/scams/e-commerce-fraud/advance-payment-trap',
  },
  {
    title: 'Fake Job Portal / Naukri Clone Scam',
    body: 'A copied job marketplace can harvest resumes and identity documents even when no fee is requested.',
    href: '/scams/job-scams/fake-job-portal',
  },
  {
    title: 'Overseas Job Scam / Human Trafficking',
    body: 'Visa-fee fraud can become a cross-border safety emergency when the employer, route or freedom changes after travel.',
    href: '/scams/job-scams/overseas-job-scam',
  },
  {
    title: 'Job Scams India Hub',
    body: 'Compare every major job-fraud route, from task groups to recruitment portals and overseas rackets.',
    href: '/scams/job-scams',
  },
]

const tools = [
  {
    icon: Globe2,
    title: 'Website Safety Checker',
    body: 'Inspect the employer, recruitment agency or verification-portal URL before paying.',
    href: '/website-safety-checker',
    label: 'Check company site',
  },
  {
    icon: Phone,
    title: 'Phone Number Checker',
    body: "Search the recruiter's number for community fraud reports and identity signals.",
    href: '/phone-number-checker',
    label: 'Check recruiter',
  },
  {
    icon: WalletCards,
    title: 'UPI ID Checker',
    body: 'Check whether the requested payment address has been reported before you transfer.',
    href: '/upi-id-checker',
    label: 'Check UPI ID',
  },
]

const FAQ_ITEMS = [
  {
    question: 'What is advance-fee job registration fraud and how does it work?',
    answer:
      'It uses a formal-looking hiring process, offer letter and joining date to justify a registration, background-check, training, uniform or equipment fee. After payment, the joining date is delayed, another fee appears, and the recruiter eventually becomes unreachable.',
  },
  {
    question: 'Is every employer fee automatically illegal in India?',
    answer:
      'Do not rely on the Employment Exchanges Act as a blanket prohibition: its text primarily concerns notification of vacancies. National Career Service itself is free and warns that employers asking registration fees may be fraudulent. Treat every unexplained pre-joining payment as a serious risk and verify it independently before paying.',
  },
  {
    question: 'How do I identify a fake job offer letter in India?',
    answer:
      'Check for a fee request, personal or lookalike email domain, repeated joining delays, an offer that official HR cannot confirm, mismatched MCA details, informal document collection, personal interview accounts and a payment beneficiary unrelated to the employer.',
  },
  {
    question: 'How do I verify a formal job offer from an Indian company?',
    answer:
      'Compare the email domain with the independently found official site, call official HR using contact details from that site, confirm the offer reference and recruiter, check the legal company details in MCA records, and verify the phone number and payment beneficiary.',
  },
  {
    question: 'What should I do if my joining date keeps getting postponed after I paid?',
    answer:
      'Stop paying. Preserve every delay message and fee demand, contact the genuine company through its official website, call 1930 for recent financial fraud, file at cybercrime.gov.in, contact your bank and report the recruiter to the platform used.',
  },
  {
    question: 'Can I recover a registration or background-check payment?',
    answer:
      'Recovery is not guaranteed. Report quickly through 1930 and cybercrime.gov.in, contact your bank or payment provider, preserve the complete evidence trail and follow up with cybercrime police using the complaint acknowledgement.',
  },
  {
    question: 'How do I report an NCS or government job impersonation?',
    answer:
      'For NCS impersonation, call 1514 or email support.ncs@gov.in to check the caller or mailer. For financial cyber fraud, call 1930 and file at cybercrime.gov.in. Also notify the impersonated department through contact details on its official government website.',
  },
  {
    question: 'How is advance-fee job fraud different from a WhatsApp job scam?',
    answer:
      'Advance-fee fraud simulates a formal process with interviews, documents, letterhead and a joining date before demanding fees. A WhatsApp job scam typically begins as an unsolicited informal role with little or no real selection process.',
  },
  {
    question: 'What is a government job registration-fee scam?',
    answer:
      'It impersonates a recruitment board, department, public-sector company or railway authority using a fake result, call letter or appointment notice. Verify every notice on the authority’s official website and never use payment links or account details supplied only in an unsolicited message.',
  },
]

const schemas = [
  webPageSchema({ name: TITLE, description: DESCRIPTION, url: PAGE_PATH }),
  articleSchema({
    headline: 'Advance Fee Job Registration Scam India 2026 - Fake Offer Letters, Background Check Fees & How to Spot Them',
    description: DESCRIPTION,
    url: PAGE_PATH,
    datePublished: '2026-07-22',
    dateModified: '2026-07-22',
    author: organizationRef(),
    section: 'Job Scams',
    keywords: [
      'job registration fee scam india',
      'fake job offer letter india',
      'advance fee job fraud india',
      'background check fee job scam india',
      'joining date postponed job scam india',
      'verify offer letter company india',
    ],
  }),
  faqPageSchema(FAQ_ITEMS),
  breadcrumbListSchema([
    { name: 'Home', url: '/' },
    { name: 'Scam Categories', url: '/scams' },
    { name: 'Job Scams India', url: '/scams/job-scams' },
    { name: 'Advance Fee Job Registration Fraud', url: PAGE_PATH },
  ]),
  {
    '@context': 'https://schema.org' as const,
    '@type': 'HowTo',
    '@id': `${CANONICAL}#how-to-identify`,
    name: 'How to identify a fake job offer letter in India',
    description: 'Five independent checks to verify a formal job offer before making a pre-joining payment.',
    totalTime: 'PT5M',
    step: verificationSteps.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.title, text: step.body })),
  },
  {
    '@context': 'https://schema.org' as const,
    '@type': 'DefinedTerm',
    '@id': `${CANONICAL}#defined-term`,
    name: 'Advance fee job registration fraud',
    description:
      'A job scam that uses a formal-looking offer and joining process to collect registration, verification, training, uniform, equipment or other fees before employment begins.',
    inDefinedTermSet: 'Online Job Fraud in India',
    url: CANONICAL,
  },
]

const sectionTitleClass = 'text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl'
const sectionIntroClass = 'mt-4 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300'

export default function AdvanceFeeJobFraudPage() {
  return (
    <DefaultLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schemas) }} />

      <article className="bg-white dark:bg-slate-950">
        <header className="relative overflow-hidden border-b border-amber-100 bg-gradient-to-br from-amber-50 via-white to-orange-50 px-4 py-14 dark:border-amber-950 dark:from-slate-950 dark:via-slate-900 dark:to-orange-950/50 sm:py-20">
          <div aria-hidden="true" className="absolute -right-24 -top-28 h-96 w-96 rounded-full bg-orange-300/20 blur-3xl" />
          <div aria-hidden="true" className="absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-amber-300/20 blur-3xl" />
          <div className="relative mx-auto max-w-6xl">
            <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <Link className="hover:text-orange-700 dark:hover:text-orange-300" href="/">Home</Link><span aria-hidden="true">›</span>
              <Link className="hover:text-orange-700 dark:hover:text-orange-300" href="/scams">Scam Categories</Link><span aria-hidden="true">›</span>
              <Link className="hover:text-orange-700 dark:hover:text-orange-300" href="/scams/job-scams">Job Scams India</Link><span aria-hidden="true">›</span>
              <span className="text-slate-800 dark:text-slate-200">Advance Fee Job Registration Fraud</span>
            </nav>

            <div className="grid items-center gap-10 lg:grid-cols-[1fr_350px]">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-orange-800 shadow-sm dark:border-amber-800 dark:bg-slate-900/70 dark:text-amber-300">
                  <FileWarning className="h-4 w-4" /> Formal Job Offer Fraud Guide
                </div>
                <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
                  Advance Fee Job Registration Scam India 2026
                  <span className="mt-2 block bg-gradient-to-r from-orange-700 to-amber-600 bg-clip-text text-transparent dark:from-orange-300 dark:to-amber-300">Fake Offer Letters, Background-Check Fees &amp; How to Spot Them</span>
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                  An advance-fee job scam uses an official-looking offer letter, interview and joining date, then demands registration, verification, training, uniform or equipment payments. Each payment leads to another delay—until the recruiter and promised job disappear.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link href="/website-safety-checker" className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-700 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-900/15 transition hover:-translate-y-0.5 hover:bg-orange-800"><SearchCheck className="h-5 w-5" /> Check company website <ArrowRight className="h-4 w-4" /></Link>
                  <Link href="/phone-number-checker" className="inline-flex items-center justify-center gap-2 rounded-xl border border-orange-200 bg-white px-6 py-3.5 text-sm font-bold text-orange-800 shadow-sm transition hover:-translate-y-0.5 hover:bg-orange-50 dark:border-orange-800 dark:bg-slate-900 dark:text-orange-300 dark:hover:bg-slate-800"><Phone className="h-5 w-5" /> Check recruiter</Link>
                </div>
                <p className="mt-4 text-xs font-medium text-slate-500 dark:text-slate-400">Free · No login · Domain and fraud-signal checks · Built for India</p>
              </div>

              <aside className="rounded-3xl border border-red-200 bg-white p-6 shadow-xl shadow-red-950/5 dark:border-red-900 dark:bg-slate-900">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300"><ShieldAlert className="h-6 w-6" /></div>
                <p className="mt-5 text-xs font-black uppercase tracking-[0.16em] text-red-600 dark:text-red-400">Safety rule</p>
                <p className="mt-2 text-2xl font-black leading-snug text-slate-950 dark:text-white">A formal letter does not make a payment demand legitimate.</p>
                <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Verify the offer through official HR before paying registration, background-check, training, uniform or equipment charges.</p>
              </aside>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {quickFacts.map((fact) => <div key={fact.label} className="rounded-2xl border border-white/80 bg-white/90 p-5 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/85"><p className="text-3xl font-black text-orange-700 dark:text-orange-300">{fact.value}</p><p className="mt-2 text-sm leading-5 text-slate-700 dark:text-slate-300">{fact.label}</p><p className="mt-2 text-[11px] font-bold uppercase tracking-wide text-slate-400">{fact.source}</p></div>)}
            </div>
          </div>
        </header>

        <div className="border-b border-amber-200 bg-amber-50 px-4 py-5 dark:border-amber-900 dark:bg-amber-950/30">
          <div className="mx-auto flex max-w-6xl items-start gap-3 text-sm leading-6 text-amber-950 dark:text-amber-100"><TriangleAlert className="mt-0.5 h-5 w-5 shrink-0 text-amber-700 dark:text-amber-400" /><p><strong>Important legal clarification:</strong> National Career Service is free and warns that registration-fee job offers may be fraudulent. The Employment Exchanges Act itself concerns vacancy notification and should not be described as a blanket ban on every possible employer fee.</p></div>
        </div>

        <div className="mx-auto max-w-6xl space-y-24 px-4 py-16 sm:px-6 lg:px-8">
          <section aria-labelledby="distinction-heading" className="rounded-3xl border border-blue-200 bg-blue-50 p-7 dark:border-blue-900 dark:bg-blue-950/30 sm:p-9">
            <div className="flex items-start gap-4"><BriefcaseBusiness className="mt-1 h-7 w-7 shrink-0 text-blue-800 dark:text-blue-300" /><div><h2 id="distinction-heading" className="text-xl font-black text-slate-950 dark:text-white">Formal advance-fee fraud or informal WhatsApp job scam?</h2><p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300"><strong>This page:</strong> a simulated formal process with an interview, offer letter, documents and joining date before fees appear. <strong>WhatsApp job scam:</strong> an unsolicited informal role with no genuine selection process. The channels can overlap, but the credibility-building mechanism is different.</p><Link href="/scams/job-scams/whatsapp-job-scam" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-900 hover:underline dark:text-blue-300">Compare the WhatsApp job-offer scam <ArrowRight className="h-4 w-4" /></Link></div></div>
          </section>

          <section aria-labelledby="types-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-700 dark:text-orange-400">Five active variants</p>
            <h2 id="types-heading" className={`${sectionTitleClass} mt-3`}>Types of Advance-Fee Job Registration Fraud</h2>
            <p className={sectionIntroClass}>Each variant makes the fee sound like a normal requirement of the role. Independent employer verification exposes the mismatch.</p>
            <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {fraudTypes.map(({ icon: Icon, title, body, signal }) => <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-300"><Icon className="h-6 w-6" /></div><h3 className="mt-5 text-lg font-bold text-slate-950 dark:text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{body}</p><div className="mt-5 flex gap-2 rounded-xl bg-red-50 p-4 text-xs leading-5 text-red-800 dark:bg-red-950/30 dark:text-red-200"><AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />{signal}</div></article>)}
            </div>
          </section>

          <section aria-labelledby="loop-heading" className="rounded-3xl bg-slate-950 px-6 py-10 text-white sm:px-10 sm:py-12">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-amber-300">The sunk-cost mechanism</p>
            <h2 id="loop-heading" className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">The Postponement Loop</h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">The joining date keeps the promised salary emotionally close while each new delay creates a reason for one more payment.</p>
            <ol className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {postponementLoop.map(([title, body], index) => <li key={title} className="rounded-2xl border border-slate-800 bg-white/5 p-5"><div className="flex items-center gap-3"><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500 text-sm font-black">{index + 1}</span><h3 className="font-bold">{title}</h3></div><p className="mt-3 text-sm leading-6 text-slate-300">{body}</p></li>)}
            </ol>
          </section>

          <section aria-labelledby="cases-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-700 dark:text-orange-400">Illustrative patterns</p>
            <h2 id="cases-heading" className={`${sectionTitleClass} mt-3`}>How the Fee Sequence Changes by Job Type</h2>
            <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {illustrativeCases.map(([title, sequence, body]) => <article key={title} className="rounded-2xl border border-slate-200 p-6 dark:border-slate-800"><FileWarning className="h-6 w-6 text-red-600 dark:text-red-400" /><h3 className="mt-4 font-bold text-slate-950 dark:text-white">{title}</h3><p className="mt-1 text-sm font-extrabold text-orange-700 dark:text-orange-300">{sequence}</p><p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{body}</p></article>)}
            </div>
          </section>

          <section aria-labelledby="red-flags-heading" className="rounded-3xl bg-gradient-to-br from-red-950 to-orange-950 px-6 py-10 text-white sm:px-10 sm:py-12">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-red-300">Before you pay</p>
            <h2 id="red-flags-heading" className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">8 Checks for a Fake Job Offer Letter</h2>
            <ol className="mt-9 grid gap-4 md:grid-cols-2">
              {redFlags.map(([title, body], index) => <li key={title} className="flex gap-4 rounded-2xl border border-red-800/70 bg-black/15 p-5"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-sm font-black text-red-900">{index + 1}</span><div><h3 className="font-bold">{title}</h3><p className="mt-1 text-sm leading-6 text-red-100/85">{body}</p></div></li>)}
            </ol>
          </section>

          <section aria-labelledby="verify-heading">
            <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-start">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-700 dark:text-orange-400">Five-step verification</p>
                <h2 id="verify-heading" className={`${sectionTitleClass} mt-3`}>How to Verify a Formal Job Offer Before Paying</h2>
                <ol className="mt-9 space-y-4">
                  {verificationSteps.map(({ title, body, href, label, icon: Icon, external }, index) => <li key={title} className="grid gap-4 rounded-2xl border border-slate-200 p-5 dark:border-slate-800 sm:grid-cols-[48px_1fr_auto] sm:items-center"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-300"><Icon className="h-5 w-5" /></div><div><p className="text-xs font-black uppercase tracking-wide text-orange-700 dark:text-orange-400">Step {index + 1}</p><h3 className="mt-1 font-bold text-slate-950 dark:text-white">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{body}</p></div>{href && label ? external ? <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-orange-200 px-4 py-2.5 text-sm font-bold text-orange-800 hover:bg-orange-50 dark:border-orange-800 dark:text-orange-300 dark:hover:bg-orange-950">{label} <ExternalLink className="h-3.5 w-3.5" /></a> : <Link href={href} className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-orange-200 px-4 py-2.5 text-sm font-bold text-orange-800 hover:bg-orange-50 dark:border-orange-800 dark:text-orange-300 dark:hover:bg-orange-950">{label} <ArrowRight className="h-3.5 w-3.5" /></Link> : null}</li>)}
                </ol>
              </div>
              <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg dark:border-slate-800 dark:bg-slate-900"><Image src="/image/website-safety-check-indian-woman-examining-suspicious-site-rakshaai.jpg" alt="Job seeker checking a suspicious employer website before trusting an offer letter" width={800} height={1000} className="h-auto w-full object-cover" /><figcaption className="px-5 py-4 text-xs leading-5 text-slate-500 dark:text-slate-400">Use a contact path you found independently—not a link or number supplied in the offer.</figcaption></figure>
            </div>
          </section>

          <section aria-labelledby="channel-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-700 dark:text-orange-400">Delivery channels</p>
            <h2 id="channel-heading" className={`${sectionTitleClass} mt-3`}>Platform-by-Platform Detection Guide</h2>
            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800"><div className="overflow-x-auto"><table className="w-full min-w-[760px] text-left text-sm"><thead className="bg-slate-950 text-white dark:bg-black"><tr><th className="px-5 py-4">Channel</th><th className="px-5 py-4">How the offer arrives</th><th className="px-5 py-4">Key independent check</th></tr></thead><tbody className="divide-y divide-slate-200 dark:divide-slate-800">{deliveryChannels.map(([channel, delivery, check], index) => <tr key={channel} className={index % 2 === 0 ? 'bg-white dark:bg-slate-950' : 'bg-slate-50 dark:bg-slate-900'}><th scope="row" className="px-5 py-5 font-bold text-slate-950 dark:text-white">{channel}</th><td className="px-5 py-5 leading-6 text-slate-600 dark:text-slate-300">{delivery}</td><td className="px-5 py-5 leading-6 text-slate-600 dark:text-slate-300">{check}</td></tr>)}</tbody></table></div></div>
          </section>

          <section aria-labelledby="recovery-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-red-700 dark:text-red-400">If you already paid</p>
            <h2 id="recovery-heading" className={`${sectionTitleClass} mt-3`}>Advance-Fee Job Fraud Recovery and Reporting Guide</h2>
            <p className={sectionIntroClass}>Preserve the document trail before the recruiter deletes accounts or changes domains. Never pay someone promising a guaranteed recovery.</p>
            <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
              <ol className="space-y-4">{recoverySteps.map((step, index) => <li key={step.title} className="flex gap-4 rounded-2xl border border-slate-200 p-5 dark:border-slate-800"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-red-100 text-sm font-black text-red-800 dark:bg-red-950 dark:text-red-300">{index + 1}</span><div><h3 className="font-bold text-slate-950 dark:text-white">{step.title}</h3><p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{step.body}</p></div></li>)}</ol>
              <aside className="h-fit rounded-2xl bg-slate-950 p-6 text-white dark:bg-black"><div className="flex items-center gap-2 text-amber-300"><Clock3 className="h-5 w-5" /><p className="text-xs font-black uppercase tracking-[0.14em]">Response timeline</p></div><div className="mt-6 space-y-5">{responseTimeline.map(([time, action]) => <div key={time} className="border-l-2 border-amber-400 pl-4"><p className="font-bold text-amber-300">{time}</p><p className="mt-1 text-sm leading-5 text-slate-300">{action}</p></div>)}</div></aside>
            </div>
            <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-2xl border border-red-200 bg-red-50 p-6 dark:border-red-900 dark:bg-red-950/30 sm:flex-row sm:items-center"><div><h3 className="text-lg font-black text-red-950 dark:text-red-100">Report the fake employer and warn other job seekers</h3><p className="mt-1 text-sm text-red-800 dark:text-red-200">Keep the letter, email domain, recruiter number and payment identifiers ready.</p></div><ReportScamButton className="inline-flex items-center gap-2 rounded-xl bg-red-700 px-5 py-3 text-sm font-bold text-white hover:bg-red-800"><ShieldAlert className="h-4 w-4" /> Report this scam <ArrowRight className="h-4 w-4" /></ReportScamButton></div>
          </section>

          <section aria-labelledby="facts-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-700 dark:text-orange-400">Verified public information</p>
            <h2 id="facts-heading" className={`${sectionTitleClass} mt-3`}>What Official India Sources Confirm</h2>
            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800"><div className="overflow-x-auto"><table className="w-full min-w-[640px] text-left text-sm"><thead className="bg-slate-950 text-white dark:bg-black"><tr><th className="px-5 py-4">Official guidance</th><th className="px-5 py-4">Detail</th><th className="px-5 py-4">Source</th></tr></thead><tbody className="divide-y divide-slate-200 dark:divide-slate-800">{verifiedFacts.map(([metric, data, source], index) => <tr key={metric} className={index % 2 === 0 ? 'bg-white dark:bg-slate-950' : 'bg-slate-50 dark:bg-slate-900'}><th scope="row" className="px-5 py-4 font-semibold text-slate-950 dark:text-white">{metric}</th><td className="px-5 py-4 font-bold text-orange-700 dark:text-orange-300">{data}</td><td className="px-5 py-4 text-slate-500 dark:text-slate-400">{source}</td></tr>)}</tbody></table></div></div>
            <div className="mt-5 flex flex-wrap gap-3">{officialSources.map((source) => <a key={source.href} href={source.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 hover:border-orange-300 hover:text-orange-800 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-orange-800 dark:hover:text-orange-300">{source.title} <ExternalLink className="h-3 w-3" /></a>)}</div>
            <p className="mt-4 text-xs leading-5 text-slate-500 dark:text-slate-400">The supplied complaint shares, average losses, fee-type percentages, recovery rates and March 2026 alert entries are not shown because no matching primary publication was found. The Employment Exchanges Act is linked above so readers can review its actual scope.</p>
          </section>

          <section aria-labelledby="related-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-700 dark:text-orange-400">Related scam guides</p>
            <h2 id="related-heading" className={`${sectionTitleClass} mt-3`}>The Distinctions That Matter</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">{relatedGuides.map((item) => <Link key={item.href} href={item.href} className="group rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-0.5 hover:border-orange-300 hover:shadow-md dark:border-slate-800 dark:hover:border-orange-800"><div className="flex items-start justify-between gap-4"><div><h3 className="font-bold text-slate-950 dark:text-white">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.body}</p></div><ArrowRight className="mt-1 h-5 w-5 shrink-0 text-orange-700 transition group-hover:translate-x-1 dark:text-orange-400" /></div></Link>)}</div>
          </section>

          <section aria-labelledby="tools-heading" className="rounded-3xl bg-gradient-to-br from-orange-950 to-slate-950 px-6 py-10 text-white sm:px-10 sm:py-12">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-amber-300">Free RakshaAI checks</p>
            <h2 id="tools-heading" className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Verify Any Formal Job Offer</h2>
            <div className="mt-9 grid gap-5 md:grid-cols-3">{tools.map(({ icon: Icon, title, body, href, label }) => <Link key={href} href={href} className="group rounded-2xl border border-orange-800 bg-white/5 p-6 hover:bg-white/10"><Icon className="h-7 w-7 text-amber-300" /><h3 className="mt-4 font-bold">{title}</h3><p className="mt-2 min-h-16 text-sm leading-6 text-slate-300">{body}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-amber-300">{label} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span></Link>)}</div>
          </section>

          <section aria-labelledby="alerts-heading" className="rounded-3xl border border-amber-200 bg-amber-50 p-7 dark:border-amber-900 dark:bg-amber-950/30 sm:p-10">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center"><div><div className="flex items-center gap-2 text-amber-800 dark:text-amber-300"><FileCheck2 className="h-5 w-5" /><p className="text-xs font-black uppercase tracking-[0.16em]">Job scam alerts</p></div><h2 id="alerts-heading" className="mt-3 text-2xl font-black text-slate-950 dark:text-white">Check current recruitment-fraud warnings</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-slate-700 dark:text-slate-300">Company names, recruiter profiles, email domains and payment accounts change frequently. Review the existing alert feed instead of relying on a static list.</p></div><Link href="/scam-alerts" className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-amber-800 px-5 py-3 text-sm font-bold text-white hover:bg-amber-900">View scam alerts <ArrowRight className="h-4 w-4" /></Link></div>
          </section>

          <section aria-labelledby="faq-heading" className="mx-auto max-w-4xl">
            <div className="text-center"><p className="text-xs font-black uppercase tracking-[0.18em] text-orange-700 dark:text-orange-400">Quick answers</p><h2 id="faq-heading" className={`${sectionTitleClass} mt-3`}>Frequently Asked Questions</h2></div>
            <div className="mt-9 space-y-3">{FAQ_ITEMS.map((item) => <details key={item.question} className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-orange-300 open:shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:open:border-orange-800"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold text-slate-950 dark:text-white">{item.question}<span aria-hidden="true" className="text-xl text-orange-700 transition group-open:rotate-45 dark:text-orange-400">+</span></summary><p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-6 text-slate-600 dark:border-slate-800 dark:text-slate-300">{item.answer}</p></details>)}</div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-slate-50 p-7 dark:border-slate-800 dark:bg-slate-900 sm:p-10">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center"><div><p className="text-xs font-black uppercase tracking-[0.16em] text-orange-700 dark:text-orange-400">Remember</p><h2 className="mt-2 max-w-2xl text-2xl font-black text-slate-950 dark:text-white">Verify the employer, not the appearance of the letter.</h2><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">Logos, signatures and reference numbers can be copied. Official HR confirmation cannot.</p></div><Link href="/website-safety-checker" className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-orange-700 px-5 py-3 text-sm font-bold text-white hover:bg-orange-800"><Globe2 className="h-4 w-4" /> Check company site</Link></div>
          </section>

          <RelatedTopics currentPath={PAGE_PATH} clusterId="job-scams" />
        </div>
      </article>
    </DefaultLayout>
  )
}
