import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  AlertTriangle,
  ArrowRight,
  Building2,
  CircleUserRound,
  Clock3,
  DatabaseZap,
  ExternalLink,
  FileKey2,
  Globe2,
  IdCard,
  Landmark,
  LockKeyhole,
  MonitorSmartphone,
  Phone,
  SearchCheck,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
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
const PAGE_PATH = '/scams/job-scams/fake-job-portal'
const CANONICAL = `${SITE_URL}${PAGE_PATH}`
const HERO_IMAGE = '/blog/aadhaar-data-breach-india/aadhaar-breach-hero.webp'
const TITLE = 'Fake Job Portal India 2026 - Naukri Clones Steal Your Aadhaar, PAN & Phone'
const DESCRIPTION =
  'Fake Naukri, LinkedIn & Indeed clones collect resumes with Aadhaar, PAN, address, mobile. Data sold for identity theft, loan fraud & SIM swap. No actual jobs. DPDP Act rights & full India guide.'

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
    images: [{ url: HERO_IMAGE, width: 1672, height: 941, alt: 'Identity documents exposed through a fake job portal' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [HERO_IMAGE] },
  other: { 'geo.region': 'IN', language: 'en-IN' },
}

const quickFacts = [
  { value: 'No fee first', label: 'The portal may steal identity data without requesting money during application', source: 'Key distinction' },
  { value: '1947', label: 'UIDAI helpline for Aadhaar support and suspected misuse questions', source: 'UIDAI' },
  { value: '1 free report', label: 'Full credit report available from each credit information company every calendar year', source: 'RBI direction' },
  { value: '1930', label: 'National helpline if identity misuse becomes financial cyber fraud', source: 'MHA / I4C' },
]

const portalTypes = [
  {
    title: 'Clone of a major job-listing platform',
    body: 'The site copies familiar colours, navigation and listings while using a lookalike domain. Registration captures the resume, phone number and email; later screens request identity documents.',
    signal: 'The brand name looks right, but the address bar does not show the platform’s exact official domain.',
  },
  {
    title: 'Fake professional-network portal',
    body: 'Profiles, connections and messages make the site resemble a professional network. The richer profile collects employment history, skills, contacts and documents together.',
    signal: 'Login, profile or document-upload links leave the official professional-network domain.',
  },
  {
    title: 'Generic recruitment marketplace clone',
    body: 'Real company names and plausible vacancies are copied into an unfamiliar job marketplace. Applying opens a form that asks for Aadhaar, PAN, bank or full-address details.',
    signal: 'The operator’s legal name, registered address and support channels cannot be independently verified.',
  },
  {
    title: 'Government recruitment portal clone',
    body: 'A fake NCS, examination-board, railway or department site uses government styling and job urgency to collect a complete identity package and certificates.',
    signal: 'The portal is not reached from the recruiting authority’s official gov.in or nic.in website.',
  },
]

const downstreamHarms = [
  {
    icon: Landmark,
    title: 'Unauthorised credit or loan account',
    mechanism: 'Stolen identity data is combined with additional compromised credentials to attempt credit applications or impersonation.',
    warning: 'An unfamiliar enquiry or account appears on your credit report, or a lender contacts you about a loan you did not request.',
  },
  {
    icon: Smartphone,
    title: 'Unauthorised mobile connection or SIM takeover',
    mechanism: 'Identity documents may be misused to obtain a mobile connection or support an impersonation attempt against a telecom provider.',
    warning: 'Your SIM unexpectedly loses service, or Sanchar Saathi shows a mobile connection you do not recognise.',
  },
  {
    icon: WalletCards,
    title: 'Financial-account impersonation',
    mechanism: 'The profile is used with other stolen information to open or access accounts, wallets, or payment services in your name.',
    warning: 'You receive unexpected KYC, account-opening, OTP, statement or transaction messages.',
  },
  {
    icon: CircleUserRound,
    title: 'Professional identity impersonation',
    mechanism: 'Resume history, photo and contact information are used to create fake recruiter, employee or social profiles that target other people.',
    warning: 'Employers or strangers ask about applications, offers or messages you never sent.',
  },
]

const dataChain = [
  ['Job application', 'Resume, mobile, email and work history'],
  ['Document request', 'Aadhaar, PAN, address or certificates'],
  ['Data combined', 'Records enriched with leaked or purchased information'],
  ['Impersonation attempt', 'Loan, SIM, account or professional-profile misuse'],
  ['Delayed discovery', 'Victim notices an unknown account, lost SIM service or contact from a third party'],
]

const redFlags = [
  ['The URL is not the brand’s exact official domain', 'A copied design cannot compensate for a different domain name. Read the complete hostname before entering data.'],
  ['Aadhaar or PAN is required during registration', 'Identity documents are not needed merely to browse jobs or submit a first-stage resume.'],
  ['The domain or operator cannot be independently verified', 'A recent or opaque operator requesting sensitive data is a high-risk combination.'],
  ['The link arrived through an ad, forward or unsolicited message', 'Do not assume a sponsored result or shared link belongs to the brand displayed on the page.'],
  ['Apply redirects to an unrelated data-collection form', 'External forms can capture documents without the genuine employer or platform seeing the application.'],
  ['The form asks for a complete home address or bank details', 'Collecting more data than the stated application needs is a data-minimisation warning.'],
  ['There is no verifiable operator, privacy notice or support path', 'Copied policies and generic contact forms do not establish who controls the data.'],
  ['A recruiter calls immediately and requests more documents', 'Instant shortlisting can be a continuation of the data-harvest rather than evidence that a job exists.'],
]

const verificationSteps = [
  {
    title: 'Verify the exact URL',
    body: 'Reach the platform from its independently found official site or app-store listing. Check the full hostname, spelling and top-level domain before logging in.',
    href: '/website-safety-checker',
    label: 'Check portal',
    icon: Globe2,
  },
  {
    title: 'Identify the company operating the portal',
    body: 'Read the Terms and Privacy pages, then compare the legal name and address with MCA records and independent company sources.',
    href: 'https://www.mca.gov.in/',
    label: 'Open MCA',
    icon: Building2,
    external: true,
  },
  {
    title: 'Minimise what you upload',
    body: 'Use a resume that omits Aadhaar, PAN, banking details, full home address and unnecessary identity numbers. Do not upload identity documents for a first-stage application.',
    icon: FileKey2,
  },
  {
    title: 'Verify the vacancy with the employer',
    body: 'Check whether the same role exists on the employer’s official careers site and whether official HR recognises the listing or recruiter.',
    href: '/phone-number-checker',
    label: 'Check recruiter',
    icon: UserRoundSearch,
  },
  {
    title: 'Stop when data collection exceeds the purpose',
    body: 'A job-search form should not need every identity credential. Leave the portal if it cannot clearly explain why each field is necessary and who will receive it.',
    icon: ShieldCheck,
  },
]

const recoverySteps = [
  {
    title: 'Preserve the portal and submission evidence',
    body: 'Save the exact URL, screenshots, privacy notice, upload confirmation, emails, recruiter number and the date and documents you submitted. Do not revisit the site using saved credentials.',
  },
  {
    title: 'Secure Aadhaar through official UIDAI tools',
    body: 'Use MyAadhaar or mAadhaar to review available security controls. UID lock blocks authentication using UID, UID token and VID until unlocked; biometric lock only blocks biometric authentication. Call 1947 for support.',
  },
  {
    title: 'Check mobile connections and protect your SIM',
    body: 'Use Sanchar Saathi to review connections issued in your name and report unknown ones. If your current SIM unexpectedly loses service, contact your telecom provider immediately.',
  },
  {
    title: 'Review your credit reports',
    body: 'Request your free full credit report from the credit information companies and dispute unfamiliar enquiries or accounts with both the lender and the reporting company.',
  },
  {
    title: 'Report the incident through the right channels',
    body: 'File identity theft or cyber fraud at cybercrime.gov.in; call 1930 if money moves. CERT-In accepts cyber-security incident reports at incident@cert-in.org.in. Notify the impersonated platform and report the URL to RakshaAI.',
  },
]

const responseTimeline = [
  ['Immediately', 'Save evidence, change any reused password and stop sharing further documents.'],
  ['Same day', 'Use UIDAI security controls, review Sanchar Saathi connections and contact your telecom if service changed.'],
  ['Within 24 hours', 'File at cybercrime.gov.in and check credit reports for unfamiliar enquiries or accounts.'],
  ['If misuse appears', 'Dispute directly with the lender, bank, telecom or platform and retain every complaint reference.'],
  ['Ongoing', 'Monitor credit reports, bank notifications, SIM service and impersonation reports for delayed misuse.'],
]

const verifiedFacts = [
  ['Aadhaar UID lock', 'Blocks UID, token and VID authentication until unlocked', 'UIDAI'],
  ['Biometric lock', 'Blocks fingerprint, iris and face authentication only', 'UIDAI'],
  ['Virtual ID', 'Revocable 16-digit number usable instead of Aadhaar number for authentication', 'UIDAI'],
  ['Mobile connections in your name', 'Can be reviewed and reported through Sanchar Saathi', 'Department of Telecommunications'],
  ['Free full credit report', 'Once per calendar year from each credit information company', 'RBI'],
  ['Cyber-security incident reporting', 'incident@cert-in.org.in / 1800-11-4949', 'CERT-In'],
  ['DPDP framework', 'Board established; substantive individual-rights sections scheduled for 13 May 2027', 'MeitY commencement notification'],
]

const officialSources = [
  { title: 'UIDAI Aadhaar lock/unlock guidance', href: 'https://uidai.gov.in/en/contact-support/have-any-question/1012-faqs/aadhaar-online-services/aadhaar-lock-unlock.html' },
  { title: 'UIDAI biometric lock guidance', href: 'https://uidai.gov.in/en/contact-support/have-any-question/925-faqs/aadhaar-online-services/biometric-lock-unlock.html' },
  { title: 'Sanchar Saathi', href: 'https://sancharsaathi.gov.in/' },
  { title: 'RBI free annual credit report direction', href: 'https://rbi.org.in/commonperson/English/Scripts/Notification.aspx?Id=1884' },
  { title: 'CERT-In incident reporting', href: 'https://www.cert-in.org.in/s2cMainServlet?pageid=CONTACTUS' },
  { title: 'MeitY DPDP Rules 2025', href: 'https://www.meity.gov.in/documents/act-and-policies/digital-personal-data-protection-rules-2025-gDOxUjMtQWa?pageTitle=Digital-Personal-Data-Protection-Rules-2025' },
  { title: 'MeitY DPDP enforcement timeline', href: 'https://www.meity.gov.in/static/uploads/2025/11/c56ceae6c383460ca69577428d36828b.pdf' },
]

const relatedGuides = [
  {
    title: 'Advance Fee Job Registration Fraud',
    body: 'A formal offer and joining process used to collect fees. Fake job portals may instead harvest data without requesting money.',
    href: '/scams/job-scams/advance-fee-job-fraud',
  },
  {
    title: 'WhatsApp & Telegram Job Offer Scam',
    body: 'An unsolicited fake role with no genuine hiring process, usually followed by task deposits or other payments.',
    href: '/scams/job-scams/whatsapp-job-scam',
  },
  {
    title: 'Task Scam / Like and Earn Fraud',
    body: 'A task platform pays small amounts before escalating boosted-task deposits. Its main extraction is money, not identity data.',
    href: '/scams/job-scams/task-scam',
  },
  {
    title: 'UPI Fraud Guide',
    body: 'What to do if stolen identity data leads to payment fraud, mule accounts or unauthorised transactions.',
    href: '/scams/upi-fraud',
  },
  {
    title: 'Job Scams India Hub',
    body: 'Compare all major job-fraud mechanisms and their different prevention steps.',
    href: '/scams/job-scams',
  },
]

const tools = [
  {
    icon: Globe2,
    title: 'Website Safety Checker',
    body: 'Inspect a job-portal URL before creating an account or uploading personal documents.',
    href: '/website-safety-checker',
    label: 'Check job portal',
  },
  {
    icon: Phone,
    title: 'Phone Number Checker',
    body: 'Search a recruiter number that contacted you after you registered on a suspicious portal.',
    href: '/phone-number-checker',
    label: 'Check recruiter',
  },
  {
    icon: ShieldAlert,
    title: 'Report a Scam',
    body: 'Submit the fake portal, recruiter number and supporting evidence to help warn others.',
    report: true,
    label: 'Report portal',
  },
]

const FAQ_ITEMS = [
  {
    question: 'What is a fake job portal scam and how is it different from other job fraud?',
    answer:
      'A fake job portal copies a job marketplace or government recruitment site to harvest resumes and identity data. It may not request money at application time. Misuse can appear later as an unfamiliar account, mobile connection, credit enquiry or impersonation profile.',
  },
  {
    question: 'Is it safe to upload Aadhaar or PAN on a job portal?',
    answer:
      'Avoid putting Aadhaar or PAN in a resume or first-stage application. Verify the employer and portal independently, ask why the document is necessary, and share identity documents only through an appropriate verified process with a clear purpose and recipient.',
  },
  {
    question: 'How do I check whether a job portal is genuine?',
    answer:
      'Check the exact domain, reach it from the official brand or government site, identify the legal operator, compare company details with MCA records, verify the vacancy on the employer careers page and avoid portals that demand excessive identity data.',
  },
  {
    question: 'What should I do if I uploaded Aadhaar to a fake portal?',
    answer:
      'Preserve evidence, use official UIDAI tools to consider UID or biometric locking, generate or use a VID where appropriate, call 1947 for support, check mobile connections through Sanchar Saathi and monitor your credit reports and bank alerts.',
  },
  {
    question: 'What is the difference between Aadhaar UID lock and biometric lock?',
    answer:
      'UIDAI states that UID lock prevents authentication using UID, UID token and VID across biometric, demographic and OTP modes until unlocked. Biometric lock only prevents fingerprint, iris and face authentication. Use MyAadhaar, mAadhaar or UIDAI helpline 1947 for official guidance.',
  },
  {
    question: 'How do I check for a fraudulent loan in my name?',
    answer:
      'Request the free full credit report available from each credit information company once per calendar year. If you find an unfamiliar enquiry or account, dispute it with the lender and credit information company. Unresolved regulated-entity complaints can be escalated through RBI CMS where eligible.',
  },
  {
    question: 'How do I check for mobile connections issued in my name?',
    answer:
      'Use the Department of Telecommunications Sanchar Saathi service to review mobile connections issued in your name and report those you do not recognise. If your active SIM suddenly loses service, contact your telecom provider immediately.',
  },
  {
    question: 'How do I report a fake job portal in India?',
    answer:
      'File at cybercrime.gov.in under the closest identity-theft or online-fraud category, call 1930 if financial fraud occurs, report the cyber-security incident to CERT-In where appropriate, notify the impersonated platform, and preserve the exact URL and submission evidence.',
  },
  {
    question: 'What rights does the DPDP framework provide?',
    answer:
      'The Act describes rights including access to information, correction and erasure, grievance redressal and nomination. However, MeitY’s commencement notification schedules sections 11 to 17 for 13 May 2027, eighteen months after 13 November 2025. The Data Protection Board was established in November 2025, but as of July 2026 you should check MeitY’s enforcement timeline before relying on a DPDP complaint route.',
  },
  {
    question: 'What information should I omit from a first-stage job application?',
    answer:
      'Do not place Aadhaar, PAN, bank details, passport numbers, full identity-document scans or unnecessary full-address information in a resume. Submit only information relevant to evaluating your skills and experience until the employer and process are independently verified.',
  },
]

const schemas = [
  webPageSchema({ name: TITLE, description: DESCRIPTION, url: PAGE_PATH }),
  articleSchema({
    headline: 'Fake Job Portal India 2026 - How Naukri Clones Harvest Aadhaar, PAN and Phone Data',
    description: DESCRIPTION,
    url: PAGE_PATH,
    image: HERO_IMAGE,
    datePublished: '2026-07-22',
    dateModified: '2026-07-22',
    author: organizationRef(),
    section: 'Job Scams',
    keywords: [
      'fake job portal india',
      'fake naukri website india',
      'resume data theft india',
      'aadhaar data theft job portal india',
      'identity theft job application india',
      'fake job website data theft india',
    ],
  }),
  faqPageSchema(FAQ_ITEMS),
  breadcrumbListSchema([
    { name: 'Home', url: '/' },
    { name: 'Scam Categories', url: '/scams' },
    { name: 'Job Scams India', url: '/scams/job-scams' },
    { name: 'Fake Job Portal / Naukri Clone Scam', url: PAGE_PATH },
  ]),
  {
    '@context': 'https://schema.org' as const,
    '@type': 'HowTo',
    '@id': `${CANONICAL}#how-to-check`,
    name: 'How to check if a job portal is genuine in India',
    description: 'Five checks to complete before registering or uploading identity documents to a job portal.',
    totalTime: 'PT5M',
    step: verificationSteps.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.title, text: step.body })),
  },
]

const sectionTitleClass = 'text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl'
const sectionIntroClass = 'mt-4 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300'

export default function FakeJobPortalPage() {
  return (
    <DefaultLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schemas) }} />

      <article className="bg-white dark:bg-slate-950">
        <header className="relative overflow-hidden border-b border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-indigo-50 px-4 py-14 dark:border-cyan-950 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950/50 sm:py-20">
          <div aria-hidden="true" className="absolute -right-24 -top-28 h-96 w-96 rounded-full bg-indigo-300/20 blur-3xl" />
          <div aria-hidden="true" className="absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="relative mx-auto max-w-6xl">
            <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <Link className="hover:text-indigo-700 dark:hover:text-indigo-300" href="/">Home</Link><span aria-hidden="true">›</span>
              <Link className="hover:text-indigo-700 dark:hover:text-indigo-300" href="/scams">Scam Categories</Link><span aria-hidden="true">›</span>
              <Link className="hover:text-indigo-700 dark:hover:text-indigo-300" href="/scams/job-scams">Job Scams India</Link><span aria-hidden="true">›</span>
              <span className="text-slate-800 dark:text-slate-200">Fake Job Portal / Naukri Clone Scam</span>
            </nav>

            <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-indigo-800 shadow-sm dark:border-cyan-800 dark:bg-slate-900/70 dark:text-cyan-300"><DatabaseZap className="h-4 w-4" /> Identity-Harvesting Job Portal Guide</div>
                <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
                  Fake Job Portal India 2026
                  <span className="mt-2 block bg-gradient-to-r from-indigo-700 to-cyan-700 bg-clip-text text-transparent dark:from-indigo-300 dark:to-cyan-300">How Naukri Clones Harvest Aadhaar, PAN &amp; Phone Data</span>
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                  A fake job portal may never ask you to pay. It copies a trusted job marketplace, collects your resume and identity documents, and creates a data package that can support impersonation, unauthorised accounts, SIM fraud or loan fraud later.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link href="/website-safety-checker" className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-700 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-900/15 transition hover:-translate-y-0.5 hover:bg-indigo-800"><SearchCheck className="h-5 w-5" /> Check portal safety <ArrowRight className="h-4 w-4" /></Link>
                  <Link href="/phone-number-checker" className="inline-flex items-center justify-center gap-2 rounded-xl border border-indigo-200 bg-white px-6 py-3.5 text-sm font-bold text-indigo-800 shadow-sm transition hover:-translate-y-0.5 hover:bg-indigo-50 dark:border-indigo-800 dark:bg-slate-900 dark:text-indigo-300 dark:hover:bg-slate-800"><Phone className="h-5 w-5" /> Check recruiter</Link>
                </div>
                <p className="mt-4 text-xs font-medium text-slate-500 dark:text-slate-400">Free · Domain and fraud-signal checks · Never upload identity documents to an unverified portal</p>
              </div>
              <figure className="overflow-hidden rounded-3xl border border-cyan-200 bg-white shadow-2xl shadow-indigo-950/10 dark:border-cyan-900 dark:bg-slate-900"><Image src={HERO_IMAGE} alt="Aadhaar and personal data exposed after submission to a fake job portal" width={1672} height={941} className="aspect-[16/9] w-full object-cover" priority /><figcaption className="px-5 py-4 text-xs leading-5 text-slate-500 dark:text-slate-400">The immediate application can look harmless; the identity misuse may appear much later.</figcaption></figure>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{quickFacts.map((fact) => <div key={fact.label} className="rounded-2xl border border-white/80 bg-white/90 p-5 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/85"><p className="text-2xl font-black text-indigo-700 dark:text-indigo-300">{fact.value}</p><p className="mt-2 text-sm leading-5 text-slate-700 dark:text-slate-300">{fact.label}</p><p className="mt-2 text-[11px] font-bold uppercase tracking-wide text-slate-400">{fact.source}</p></div>)}</div>
          </div>
        </header>

        <div className="border-b border-red-200 bg-red-50 px-4 py-5 dark:border-red-900 dark:bg-red-950/30"><div className="mx-auto flex max-w-6xl items-start gap-3 text-sm leading-6 text-red-950 dark:text-red-100"><TriangleAlert className="mt-0.5 h-5 w-5 shrink-0 text-red-700 dark:text-red-400" /><p><strong>The one rule:</strong> do not upload Aadhaar, PAN, banking details or full identity-document scans to a job portal you have not independently verified. A copied design and padlock icon do not prove who receives your data.</p></div></div>

        <div className="mx-auto max-w-6xl space-y-24 px-4 py-16 sm:px-6 lg:px-8">
          <section aria-labelledby="distinction-heading" className="rounded-3xl border border-indigo-200 bg-indigo-50 p-7 dark:border-indigo-900 dark:bg-indigo-950/30 sm:p-9">
            <div className="flex items-start gap-4"><IdCard className="mt-1 h-7 w-7 shrink-0 text-indigo-800 dark:text-indigo-300" /><div><h2 id="distinction-heading" className="text-xl font-black text-slate-950 dark:text-white">This scam steals data first—not money</h2><p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">Advance-fee and task scams reveal themselves through payment demands. A fake job portal can complete its goal as soon as you submit a resume, phone number and identity documents. The downstream harm may not appear until an unfamiliar credit account, mobile connection or impersonation attempt is discovered.</p><Link href="/scams/job-scams/advance-fee-job-fraud" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-indigo-900 hover:underline dark:text-indigo-300">Compare advance-fee job fraud <ArrowRight className="h-4 w-4" /></Link></div></div>
          </section>

          <section aria-labelledby="types-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-indigo-700 dark:text-indigo-400">How the clone is presented</p>
            <h2 id="types-heading" className={`${sectionTitleClass} mt-3`}>How Fake Job Portals Harvest Identity Data</h2>
            <p className={sectionIntroClass}>The visual brand changes, but every version uses a familiar interface to make excessive data collection feel routine.</p>
            <div className="mt-9 grid gap-5 md:grid-cols-2">{portalTypes.map((item, index) => <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"><div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-sm font-black text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300">{index + 1}</span><h3 className="text-lg font-bold text-slate-950 dark:text-white">{item.title}</h3></div><p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.body}</p><div className="mt-5 flex gap-2 rounded-xl bg-red-50 p-4 text-xs leading-5 text-red-800 dark:bg-red-950/30 dark:text-red-200"><AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />{item.signal}</div></article>)}</div>
          </section>

          <section aria-labelledby="chain-heading" className="rounded-3xl bg-slate-950 px-6 py-10 text-white sm:px-10 sm:py-12">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">The delayed data chain</p>
            <h2 id="chain-heading" className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">From Resume Upload to Downstream Identity Misuse</h2>
            <div className="mt-9 grid gap-3 sm:grid-cols-5">{dataChain.map(([title, body], index) => <div key={title} className="relative rounded-2xl border border-slate-800 bg-white/5 p-5"><span className="mb-4 flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500 text-sm font-black">{index + 1}</span><p className="font-bold">{title}</p><p className="mt-2 text-xs leading-5 text-slate-300">{body}</p>{index < 4 ? <ArrowRight className="absolute -right-2.5 top-1/2 hidden h-5 w-5 text-slate-500 sm:block" /> : null}</div>)}</div>
          </section>

          <section aria-labelledby="harm-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-indigo-700 dark:text-indigo-400">What may happen later</p>
            <h2 id="harm-heading" className={`${sectionTitleClass} mt-3`}>4 Types of Downstream Harm</h2>
            <div className="mt-9 grid gap-5 md:grid-cols-2">{downstreamHarms.map(({ icon: Icon, title, mechanism, warning }) => <article key={title} className="rounded-2xl border border-slate-200 p-6 dark:border-slate-800"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-300"><Icon className="h-6 w-6" /></div><h3 className="mt-5 text-lg font-bold text-slate-950 dark:text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{mechanism}</p><div className="mt-5 rounded-xl bg-amber-50 p-4 text-sm leading-6 text-amber-950 dark:bg-amber-950/30 dark:text-amber-100"><strong>First warning:</strong> {warning}</div></article>)}</div>
          </section>

          <section aria-labelledby="why-data-heading" className="rounded-3xl border border-cyan-200 bg-cyan-50 p-7 dark:border-cyan-900 dark:bg-cyan-950/30 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-center"><div><p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-800 dark:text-cyan-300">Why a resume is valuable</p><h2 id="why-data-heading" className="mt-3 text-3xl font-black text-slate-950 dark:text-white">One application can answer multiple identity questions</h2><p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-300">A resume provides name variations, employment history, education, city, email and phone number. Adding Aadhaar, PAN, date of birth, full address and certificates creates a much richer impersonation package. That information can be combined with unrelated breaches or social engineering even if one document alone is insufficient to complete financial KYC.</p><p className="mt-4 text-sm font-bold text-cyan-950 dark:text-cyan-100">Data minimisation is the defence: share only what the current application stage genuinely requires.</p></div><div className="grid grid-cols-2 gap-3">{[['Resume', 'Career and contact history'], ['Aadhaar', 'Identity and authentication target'], ['PAN', 'Financial identity link'], ['Mobile', 'OTP and recovery channel']].map(([title, body]) => <div key={title} className="rounded-2xl border border-cyan-200 bg-white p-4 dark:border-cyan-800 dark:bg-slate-900"><p className="font-black text-slate-950 dark:text-white">{title}</p><p className="mt-1 text-xs leading-5 text-slate-600 dark:text-slate-300">{body}</p></div>)}</div></div>
          </section>

          <section aria-labelledby="red-flags-heading" className="rounded-3xl bg-gradient-to-br from-red-950 to-indigo-950 px-6 py-10 text-white sm:px-10 sm:py-12">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-red-300">Before uploading</p>
            <h2 id="red-flags-heading" className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">8 Red Flags of a Fake Job Portal</h2>
            <ol className="mt-9 grid gap-4 md:grid-cols-2">{redFlags.map(([title, body], index) => <li key={title} className="flex gap-4 rounded-2xl border border-red-800/70 bg-black/15 p-5"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-sm font-black text-red-900">{index + 1}</span><div><h3 className="font-bold">{title}</h3><p className="mt-1 text-sm leading-6 text-red-100/85">{body}</p></div></li>)}</ol>
          </section>

          <section aria-labelledby="verify-heading">
            <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-start">
              <div><p className="text-xs font-black uppercase tracking-[0.18em] text-indigo-700 dark:text-indigo-400">Five checks</p><h2 id="verify-heading" className={`${sectionTitleClass} mt-3`}>How to Check Whether a Job Portal Is Genuine</h2><ol className="mt-9 space-y-4">{verificationSteps.map(({ title, body, href, label, icon: Icon, external }, index) => <li key={title} className="grid gap-4 rounded-2xl border border-slate-200 p-5 dark:border-slate-800 sm:grid-cols-[48px_1fr_auto] sm:items-center"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300"><Icon className="h-5 w-5" /></div><div><p className="text-xs font-black uppercase tracking-wide text-indigo-700 dark:text-indigo-400">Step {index + 1}</p><h3 className="mt-1 font-bold text-slate-950 dark:text-white">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{body}</p></div>{href && label ? external ? <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-indigo-200 px-4 py-2.5 text-sm font-bold text-indigo-800 hover:bg-indigo-50 dark:border-indigo-800 dark:text-indigo-300 dark:hover:bg-indigo-950">{label} <ExternalLink className="h-3.5 w-3.5" /></a> : <Link href={href} className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-indigo-200 px-4 py-2.5 text-sm font-bold text-indigo-800 hover:bg-indigo-50 dark:border-indigo-800 dark:text-indigo-300 dark:hover:bg-indigo-950">{label} <ArrowRight className="h-3.5 w-3.5" /></Link> : null}</li>)}</ol></div>
              <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg dark:border-slate-800 dark:bg-slate-900"><Image src="/image/how-to-identify-fake-websites.jpg" alt="Checklist for identifying a fake job portal before uploading personal documents" width={640} height={640} className="h-auto w-full object-cover" /><figcaption className="px-5 py-4 text-xs leading-5 text-slate-500 dark:text-slate-400">Inspect the address bar and operator before trusting the page design.</figcaption></figure>
            </div>
          </section>

          <section aria-labelledby="recovery-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-red-700 dark:text-red-400">If you already uploaded data</p>
            <h2 id="recovery-heading" className={`${sectionTitleClass} mt-3`}>Identity-Protection and Reporting Guide</h2>
            <p className={sectionIntroClass}>Do not wait for money to move. Record exactly what was exposed, then secure each identity channel through its official service.</p>
            <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]"><ol className="space-y-4">{recoverySteps.map((step, index) => <li key={step.title} className="flex gap-4 rounded-2xl border border-slate-200 p-5 dark:border-slate-800"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-red-100 text-sm font-black text-red-800 dark:bg-red-950 dark:text-red-300">{index + 1}</span><div><h3 className="font-bold text-slate-950 dark:text-white">{step.title}</h3><p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{step.body}</p></div></li>)}</ol><aside className="h-fit rounded-2xl bg-slate-950 p-6 text-white dark:bg-black"><div className="flex items-center gap-2 text-cyan-300"><Clock3 className="h-5 w-5" /><p className="text-xs font-black uppercase tracking-[0.14em]">Response timeline</p></div><div className="mt-6 space-y-5">{responseTimeline.map(([time, action]) => <div key={time} className="border-l-2 border-cyan-400 pl-4"><p className="font-bold text-cyan-300">{time}</p><p className="mt-1 text-sm leading-5 text-slate-300">{action}</p></div>)}</div></aside></div>
            <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-2xl border border-red-200 bg-red-50 p-6 dark:border-red-900 dark:bg-red-950/30 sm:flex-row sm:items-center"><div><h3 className="text-lg font-black text-red-950 dark:text-red-100">Report the portal before it harvests more applicants</h3><p className="mt-1 text-sm text-red-800 dark:text-red-200">Keep the exact URL, screenshots, submission confirmation and recruiter identifiers ready.</p></div><ReportScamButton className="inline-flex items-center gap-2 rounded-xl bg-red-700 px-5 py-3 text-sm font-bold text-white hover:bg-red-800"><ShieldAlert className="h-4 w-4" /> Report portal <ArrowRight className="h-4 w-4" /></ReportScamButton></div>
          </section>

          <section aria-labelledby="aadhaar-heading" className="rounded-3xl border border-indigo-200 bg-indigo-50 p-7 dark:border-indigo-900 dark:bg-indigo-950/30 sm:p-10">
            <div className="grid gap-9 lg:grid-cols-[1fr_340px] lg:items-center"><div><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300"><LockKeyhole className="h-6 w-6" /></div><h2 id="aadhaar-heading" className="mt-5 text-3xl font-black text-slate-950 dark:text-white">Use the correct Aadhaar security control</h2><div className="mt-5 space-y-4 text-sm leading-7 text-slate-700 dark:text-slate-300"><p><strong>UID lock:</strong> UIDAI says locking Aadhaar prevents authentication using UID, UID token and VID across biometric, demographic and OTP modes until it is unlocked.</p><p><strong>Biometric lock:</strong> blocks fingerprint, iris and face authentication, but it is not the same as locking the Aadhaar number.</p><p><strong>VID:</strong> a temporary, revocable 16-digit number that can be used instead of the Aadhaar number for supported authentication.</p></div><a href="https://myaadhaar.uidai.gov.in/" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-indigo-700 px-5 py-3 text-sm font-bold text-white hover:bg-indigo-800">Open MyAadhaar <ExternalLink className="h-4 w-4" /></a></div><figure className="overflow-hidden rounded-2xl border border-indigo-200 bg-white shadow-sm dark:border-indigo-800 dark:bg-slate-900"><Image src="/blog/aadhaar-data-breach-india/aadhaar-biometric-lock-steps.webp" alt="UIDAI Aadhaar biometric locking safety steps" width={1122} height={1402} className="h-auto w-full object-cover" /><figcaption className="px-5 py-4 text-xs leading-5 text-slate-500 dark:text-slate-400">Follow current instructions only through UIDAI’s official site or mAadhaar app.</figcaption></figure></div>
          </section>

          <section aria-labelledby="facts-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-indigo-700 dark:text-indigo-400">Verified official workflows</p>
            <h2 id="facts-heading" className={`${sectionTitleClass} mt-3`}>India Identity-Protection Resources</h2>
            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800"><div className="overflow-x-auto"><table className="w-full min-w-[680px] text-left text-sm"><thead className="bg-slate-950 text-white dark:bg-black"><tr><th className="px-5 py-4">Protection or right</th><th className="px-5 py-4">Official detail</th><th className="px-5 py-4">Source</th></tr></thead><tbody className="divide-y divide-slate-200 dark:divide-slate-800">{verifiedFacts.map(([metric, data, source], index) => <tr key={metric} className={index % 2 === 0 ? 'bg-white dark:bg-slate-950' : 'bg-slate-50 dark:bg-slate-900'}><th scope="row" className="px-5 py-4 font-semibold text-slate-950 dark:text-white">{metric}</th><td className="px-5 py-4 font-bold text-indigo-700 dark:text-indigo-300">{data}</td><td className="px-5 py-4 text-slate-500 dark:text-slate-400">{source}</td></tr>)}</tbody></table></div></div>
            <div className="mt-5 flex flex-wrap gap-3">{officialSources.map((source) => <a key={source.href} href={source.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 hover:border-indigo-300 hover:text-indigo-800 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-indigo-800 dark:hover:text-indigo-300">{source.title} <ExternalLink className="h-3 w-3" /></a>)}</div>
            <p className="mt-4 text-xs leading-5 text-slate-500 dark:text-slate-400">The supplied complaint shares, loss estimates, dark-web prices, domain-age averages, victim-attribution rates and static March 2026 alerts are not shown because no matching primary publication was found. Possession of an Aadhaar number alone does not automatically enable a loan, SIM replacement or bank account; additional authentication and failures may be involved.</p>
          </section>

          <section aria-labelledby="related-heading"><p className="text-xs font-black uppercase tracking-[0.18em] text-indigo-700 dark:text-indigo-400">Related job-scam guides</p><h2 id="related-heading" className={`${sectionTitleClass} mt-3`}>Keep the Harm Mechanisms Separate</h2><div className="mt-8 grid gap-4 sm:grid-cols-2">{relatedGuides.map((item) => <Link key={item.href} href={item.href} className="group rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-md dark:border-slate-800 dark:hover:border-indigo-800"><div className="flex items-start justify-between gap-4"><div><h3 className="font-bold text-slate-950 dark:text-white">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.body}</p></div><ArrowRight className="mt-1 h-5 w-5 shrink-0 text-indigo-700 transition group-hover:translate-x-1 dark:text-indigo-400" /></div></Link>)}</div></section>

          <section aria-labelledby="tools-heading" className="rounded-3xl bg-gradient-to-br from-indigo-950 to-slate-950 px-6 py-10 text-white sm:px-10 sm:py-12"><p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">Free RakshaAI checks</p><h2 id="tools-heading" className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Check Any Job Portal Before Uploading</h2><div className="mt-9 grid gap-5 md:grid-cols-3">{tools.map(({ icon: Icon, title, body, href, report, label }) => report ? <div key={title} className="rounded-2xl border border-indigo-800 bg-white/5 p-6"><Icon className="h-7 w-7 text-cyan-300" /><h3 className="mt-4 font-bold">{title}</h3><p className="mt-2 min-h-16 text-sm leading-6 text-slate-300">{body}</p><ReportScamButton className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan-300 hover:text-cyan-200">{label} <ArrowRight className="h-4 w-4" /></ReportScamButton></div> : <Link key={href} href={href!} className="group rounded-2xl border border-indigo-800 bg-white/5 p-6 hover:bg-white/10"><Icon className="h-7 w-7 text-cyan-300" /><h3 className="mt-4 font-bold">{title}</h3><p className="mt-2 min-h-16 text-sm leading-6 text-slate-300">{body}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan-300">{label} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span></Link>)}</div></section>

          <section aria-labelledby="alerts-heading" className="rounded-3xl border border-cyan-200 bg-cyan-50 p-7 dark:border-cyan-900 dark:bg-cyan-950/30 sm:p-10"><div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center"><div><div className="flex items-center gap-2 text-cyan-800 dark:text-cyan-300"><MonitorSmartphone className="h-5 w-5" /><p className="text-xs font-black uppercase tracking-[0.16em]">Fake portal alerts</p></div><h2 id="alerts-heading" className="mt-3 text-2xl font-black text-slate-950 dark:text-white">Check current scam warnings</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-slate-700 dark:text-slate-300">Clone domains and recruiter numbers change quickly. Use the existing alert feed instead of relying on a static list of unverified domains.</p></div><Link href="/scam-alerts" className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-cyan-800 px-5 py-3 text-sm font-bold text-white hover:bg-cyan-900">View scam alerts <ArrowRight className="h-4 w-4" /></Link></div></section>

          <section aria-labelledby="faq-heading" className="mx-auto max-w-4xl"><div className="text-center"><p className="text-xs font-black uppercase tracking-[0.18em] text-indigo-700 dark:text-indigo-400">Quick answers</p><h2 id="faq-heading" className={`${sectionTitleClass} mt-3`}>Frequently Asked Questions About Fake Job Portals</h2></div><div className="mt-9 space-y-3">{FAQ_ITEMS.map((item) => <details key={item.question} className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-indigo-300 open:shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:open:border-indigo-800"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold text-slate-950 dark:text-white">{item.question}<span aria-hidden="true" className="text-xl text-indigo-700 transition group-open:rotate-45 dark:text-indigo-400">+</span></summary><p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-6 text-slate-600 dark:border-slate-800 dark:text-slate-300">{item.answer}</p></details>)}</div></section>

          <section className="rounded-3xl border border-slate-200 bg-slate-50 p-7 dark:border-slate-800 dark:bg-slate-900 sm:p-10"><div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center"><div><p className="text-xs font-black uppercase tracking-[0.16em] text-indigo-700 dark:text-indigo-400">Remember</p><h2 className="mt-2 max-w-2xl text-2xl font-black text-slate-950 dark:text-white">A resume should demonstrate your skills—not contain your identity credentials.</h2><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">Verify the portal and employer before sharing anything beyond the minimum application data.</p></div><Link href="/website-safety-checker" className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-indigo-700 px-5 py-3 text-sm font-bold text-white hover:bg-indigo-800"><Globe2 className="h-4 w-4" /> Check portal</Link></div></section>

          <RelatedTopics currentPath={PAGE_PATH} clusterId="job-scams" />
        </div>
      </article>
    </DefaultLayout>
  )
}
