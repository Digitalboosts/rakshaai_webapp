import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Ban,
  Building2,
  Clock3,
  FileWarning,
  Globe2,
  IdCard,
  Landmark,
  Mail,
  MailCheck,
  MonitorSmartphone,
  Phone,
  PhoneCall,
  SearchCheck,
  ShieldAlert,
  TriangleAlert,
  Video,
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
const PAGE_PATH = '/scams/job-scams/fake-company-portal'
const CANONICAL = `${SITE_URL}${PAGE_PATH}`
const HERO_IMAGE = '/blog/blog33/job-scam-india-hero.jpg'
const TITLE = 'Fake TCS / Infosys Job Offer India 2026 - Spot Fake HR Portals & Forged Letters'
const DESCRIPTION =
  'Fake company websites impersonate TCS, Infosys, Wipro, Amazon India. Fake Google Meet interviews. Forged offer letters. Laptop deposits, security clearances & onboarding fees collected. Full India guide.'

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
    images: [{ url: HERO_IMAGE, width: 1200, height: 675, alt: 'Fake TCS, Infosys and Wipro HR portal job offer scam warning' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [HERO_IMAGE] },
  other: { 'geo.region': 'IN', language: 'en-IN' },
}

const quickFacts = [
  { value: '24%', label: 'Share of India job-fraud complaints linked to fake company HR portals', source: 'NCRB 2025' },
  { value: '₹52,000', label: 'Average loss per victim - the highest of any job-fraud category', source: 'MHA I4C 2025' },
  { value: 'TCS, Infosys, Wipro', label: 'The three most impersonated Indian IT brands in fake HR portal cases', source: 'cybercrime.gov.in 2025' },
  { value: '3 Min', label: 'Time needed to verify any Indian MNC job offer using the email-domain check', source: 'RakshaAI guide' },
]

const threeRules = [
  {
    icon: Mail,
    title: 'The email domain rule',
    body: 'Every genuine HR communication from TCS arrives from @tcs.com. Infosys: @infosys.com. Wipro: @wipro.com. Amazon India: @amazon.com. A message from @tcs-india-hr.com or @infosys-careers.net is a forgery, however professional the document looks.',
  },
  {
    icon: Video,
    title: 'The Google Meet rule',
    body: 'Indian MNCs interview on corporate Microsoft Teams, Cisco Webex or company-provisioned Zoom with institutional accounts - never a personal Gmail Google Meet link. An interviewer appearing on Google Meet from a gmail.com account is not genuine HR.',
  },
  {
    icon: Ban,
    title: 'The zero-fee rule',
    body: "No Indian MNC or legitimate consultancy charges candidates a laptop deposit, security clearance fee, onboarding kit or background-verification fee before employment. The Employment Exchanges (Compulsory Notification of Vacancies) Act, 1959 makes it a criminal offence.",
  },
]

const officialDomains = [
  ['TCS', 'careers.tcs.com', '@tcs.com'],
  ['Infosys', 'careers.infosys.com', '@infosys.com'],
  ['Wipro', 'careers.wipro.com', '@wipro.com'],
  ['Amazon India', 'amazon.jobs', '@amazon.com'],
  ['HCL', 'careers.hcltech.com', '@hcl.com'],
  ['Accenture India', 'accenture.com/in-en/careers', '@accenture.com'],
]

const stages = [
  {
    icon: Globe2,
    title: 'Stage 1 - The Fake Website',
    body: 'A professional-looking domain such as tcs-india-recruitment.com or careers-tcsglobal.in is registered, copying brand colours, the real logo, and genuine-sounding openings at competitive salaries. It surfaces via Google Ads, job boards or fake employee LinkedIn posts.',
  },
  {
    icon: MailCheck,
    title: 'Stage 2 - The Shortlisting Email',
    body: 'A professionally formatted shortlisting message arrives from the fake portal domain, sometimes with a screening test to add authenticity. Checking the sender domain at this stage - a 10-second look at the part after the @ - exposes the fraud instantly.',
  },
  {
    icon: Video,
    title: 'Stage 3 - The Google Meet Interview',
    body: "You are interviewed on Google Meet via a link from a Gmail account, often with a branded virtual background and multiple 'panel members'. Real Indian MNCs use corporate meeting platforms with institutional accounts, never a personal Gmail invite.",
  },
  {
    icon: FileWarning,
    title: 'Stage 4 - The Forged Offer Letter',
    body: "A convincing offer letter follows - company logo, an HR name found on LinkedIn, salary details, a joining date weeks away. The logo and formatting are copied from genuine letters. This is a criminal forgery under IPC Sections 465 and 468.",
  },
  {
    icon: WalletCards,
    title: 'Stage 5 - Fee Demands & Disappearance',
    body: "Framed as routine pre-joining formalities, fees arrive in stages: laptop deposit, security clearance, onboarding kit, background verification. After payment, the HR contact goes silent, the portal disappears, and the joining date passes with no contact.",
  },
]

const feeLadder = [
  ['Laptop Deposit', '₹10,000 - 30,000', "For a 'company-provided laptop' issued on Day 1"],
  ['Security Clearance Fee', '₹5,000 - 15,000', "For a 'mandatory government clearance' for IT roles"],
  ['Onboarding Kit Fee', '₹3,000 - 8,000', 'For training material, credentials and merchandise'],
  ['Background Verification Fee', '₹2,000 - 5,000', 'For a third-party verification agency'],
]

const casePatterns = [
  {
    title: 'Lookalike-domain laptop deposit',
    body: 'A typosquat domain of a major IT brand runs a full hiring funnel ending in a Google Meet interview and a forged offer letter. A laptop deposit is collected days before the joining date; the portal goes offline once payment clears.',
  },
  {
    title: 'Multi-tranche fee escalation',
    body: 'Security clearance, training-kit and background-verification fees are collected as three separate payments over two weeks, with the joining date postponed after each one to keep the candidate paying.',
  },
  {
    title: 'Cold LinkedIn approach',
    body: "A profile claiming to be a company's 'Talent Acquisition Manager' - created only months earlier - cold-messages candidates, moves the interview to a personal Gmail Google Meet link, then requests an onboarding-kit fee.",
  },
  {
    title: 'Dual-domain operation',
    body: 'Two near-identical lookalike domains run in parallel for the same impersonated brand, spreading two rounds of Google Meet interviews and combined laptop-deposit plus background-check fees across both.',
  },
  {
    title: 'Shell consultancy placement',
    body: "A newly registered 'IT staffing' consultancy advertises placement at recognisable IT brands on job boards. Registration, background-check and ID-card fees are collected before an MCA21 check (often done only after payment) shows the company was registered weeks earlier at an unverifiable address.",
  },
]

const redFlags = [
  ['Non-official email domain', 'The fastest, most conclusive check. TCS HR uses @tcs.com, Infosys uses @infosys.com, Wipro uses @wipro.com. Any other domain sending an offer or interview invite is definitively fake.'],
  ['Google Meet from a personal Gmail account', 'Corporate interview invites from Indian MNCs come from institutional @company.com accounts, never a personal gmail.com Google Meet link.'],
  ['Any pre-joining fee is requested', 'Laptop deposit, security clearance, onboarding kit, background verification - no legitimate Indian employer charges candidates any fee before employment begins.'],
  ['The portal URL differs from the official careers site', 'TCS is careers.tcs.com, Infosys is careers.infosys.com, Wipro is careers.wipro.com. Any other URL for a "recruitment portal" using these names is fake.'],
  ['The domain was registered recently', 'A domain under six months old claiming to be a major IT brand recruitment portal is a strong fraud signal - check it at the Website Safety Checker.'],
  ["The company's official switchboard has no record of the offer", "Call the company's real HR line from their official website, not the offer letter. A genuine employer confirms or denies within minutes."],
  ["A placement consultancy's MCA21 registration is very recent or missing", 'For any agency or consultancy, verify at mca.gov.in. Registered under six months ago is high risk; not registered at all means it is operating illegally.'],
  ['The offer came via cold outreach on LinkedIn or Naukri for a role you never applied to', 'Legitimate MNCs hire from official portals, authorised agencies, and campus placement - not unsolicited messages from a recently created recruiter profile.'],
]

const verificationSteps = [
  {
    title: 'Check the email domain',
    body: 'Confirm the sender domain against the company\'s official domain exactly. Any variation - a hyphen, an extra word, a different top-level domain - means the message is fake. This single check eliminates most fake HR portal fraud in minutes.',
    icon: Mail,
  },
  {
    title: "Call the company's official switchboard",
    body: "Find the company's real main number from their official website, not from the offer letter or portal email. Ask HR to confirm the offer using the reference number and the named HR manager. A fake portal cannot intercept a call to the real company.",
    icon: PhoneCall,
  },
  {
    title: 'Verify the portal and the consultancy',
    body: 'Paste the job-portal URL into the Website Safety Checker for domain age and fraud signals. For any placement agency or consultancy, also verify registration at mca.gov.in.',
    href: '/website-safety-checker',
    label: 'Check portal safety',
    icon: Globe2,
  },
  {
    title: 'Verify the Google Meet invite sender',
    body: 'Before joining any interview, check who sent the meeting invite. It should come from an institutional account, not a gmail.com address. If it is a Gmail invite, decline and call official HR directly.',
    icon: Video,
  },
  {
    title: 'Never pay before Day 1',
    body: "If any fee is requested before your first working day - under any name - the offer is fraudulent. Real Indian employers bear their own onboarding costs. End communication and report immediately.",
    icon: Ban,
  },
]

const recoverySteps = [
  {
    title: 'Call 1930 within 30 minutes of the last transfer',
    body: 'Provide the recipient UPI ID and the amount and time of every transfer for a chance at account freeze. Simultaneously screenshot every email, the offer letter PDF, Google Meet screenshots and payment confirmations before the fake portal disappears.',
  },
  {
    title: 'File on cybercrime.gov.in and report the domain to CERT-In',
    body: 'File under Online Job Fraud / Company Impersonation with the fake portal URL, emails, offer letter and receipts. Separately report the website to CERT-In at incident@cert-in.org.in for a possible domain takedown, and email the impersonated company\'s official fraud or security team.',
  },
  {
    title: 'Card chargeback and consumer forum',
    body: "For card payments, contact your issuer for an RBI chargeback citing goods/services not delivered. File a complaint at consumerhelpline.gov.in and call the National Consumer Helpline on 1915.",
  },
  {
    title: 'File an FIR citing forgery, not just fraud',
    body: 'Cite IT Act Sections 66C and 66D alongside IPC Sections 465 and 468 (forgery), 419 (cheating by personation) and 420 (fraud). The forged offer letter is physical evidence that elevates the case to a forgery prosecution.',
  },
  {
    title: 'Report to the real company and to RakshaAI',
    body: 'Real companies actively pursue impersonators to protect their brand. Send the fake portal URL, HR name and email, Google Meet account and UPI IDs to their official fraud team and to RakshaAI to warn other job seekers.',
  },
]

const responseTimeline = [
  ['Immediately', 'Screenshot every email, the offer letter PDF, Google Meet screens and payment receipts.'],
  ['Within 30 min', 'Call 1930 - the UPI freeze window.'],
  ['Within 24 hrs', 'cybercrime.gov.in complaint, CERT-In domain report, email to the impersonated company\'s fraud team.'],
  ['Within 72 hrs', 'National Consumer Helpline 1915, consumer forum complaint, card chargeback if applicable.'],
  ['Within 7 days', 'FIR citing IPC 465/468 forgery plus IT Act 66D, and a RakshaAI report.'],
]

const statistics = [
  ['Share of job fraud from fake company HR portals', '24%', 'NCRB 2025'],
  ['Average loss - highest of all job-fraud categories', '₹52,000', 'MHA I4C 2025'],
  ['Top 3 impersonated brands combined (TCS, Infosys, Wipro)', '61% of fake HR portal cases', 'cybercrime.gov.in 2025'],
  ['Most common fee type', 'Laptop deposit', 'NCRB 2025'],
  ['Average fake-portal domain age at first complaint', '19 days', 'CERT-In 2025'],
  ['Recovery via 1930 within 30 minutes', '~8-10%', '1930 helpline data 2025'],
]

const comparisonRows = [
  {
    title: 'Advance Fee Job Registration Fraud',
    body: 'A generic fake offer letter and a registration or training fee - without a dedicated brand-impersonation website or a Google Meet interview stage.',
    href: '/scams/job-scams/advance-fee-job-fraud',
  },
  {
    title: 'WhatsApp / Telegram Job Offer Scam',
    body: 'An informal message with no interview at all, followed by task deposits. This page involves a professional website and a simulated interview process.',
    href: '/scams/job-scams/whatsapp-job-scam',
  },
  {
    title: 'Task Scam / Like and Earn Fraud',
    body: 'Real micro-tasks and small payouts lead to escalating boosted-task deposits - a different mechanism from a simulated corporate hiring process.',
    href: '/scams/job-scams/task-scam',
  },
]

const relatedGuides = [
  {
    title: 'Army Officer Romance Scam',
    body: 'A fake military JOB offer with a registration fee is job fraud - a fake military romantic relationship with money requests is a different mechanism, covered here.',
    href: '/scams/romance-scams/army-officer-scam',
  },
  {
    title: 'Advance Fee Job Registration Fraud',
    body: 'A simpler fake offer letter and fee demand without a dedicated brand-impersonation website or Google Meet interview stage.',
    href: '/scams/job-scams/advance-fee-job-fraud',
  },
  {
    title: 'WhatsApp & Telegram Job Offer Scam',
    body: 'An informal unsolicited role with no genuine interview process, usually followed by task deposits.',
    href: '/scams/job-scams/whatsapp-job-scam',
  },
  {
    title: 'Task Scam / Like and Earn Fraud',
    body: 'Real micro-payouts escalate into boosted-task deposits rather than a simulated corporate hiring funnel.',
    href: '/scams/job-scams/task-scam',
  },
  {
    title: 'Fake Job Portal / Naukri Clone Scam',
    body: 'A cloned job marketplace that harvests resumes and identity documents, even when no fee is ever requested.',
    href: '/scams/job-scams/fake-job-portal',
  },
  {
    title: 'Job Scams India Hub',
    body: 'Compare every major job-fraud mechanism active in India today.',
    href: '/scams/job-scams',
  },
]

const tools = [
  {
    icon: Globe2,
    title: 'Website Safety Checker',
    body: 'Check any company job portal URL before engaging - domain age, SSL and fraud-database signals.',
    href: '/website-safety-checker',
    label: 'Check company website',
  },
  {
    icon: Phone,
    title: 'Phone Number Checker',
    body: "Check the recruiter's number against India fraud reports before any interview.",
    href: '/phone-number-checker',
    label: 'Check recruiter',
  },
  {
    icon: ShieldAlert,
    title: 'Report a Scam',
    body: 'Report the fake HR portal URL and every detail to warn other Indian job seekers.',
    report: true,
    label: 'Report portal',
  },
]

const FAQ_ITEMS = [
  {
    question: 'How do I know if a TCS, Infosys, or Wipro job offer is genuine?',
    answer:
      "Check three things in under three minutes: (1) the sender's email domain must be exactly @tcs.com, @infosys.com, @wipro.com or @amazon.com - any other domain is fake. (2) Call the company's official main switchboard, found on their own website, and ask HR to confirm the offer. (3) Confirm the recruitment portal URL matches the official careers site: careers.tcs.com, careers.infosys.com or careers.wipro.com. All three checks together eliminate essentially all known fake HR portal fraud.",
  },
  {
    question: 'Why is a Google Meet interview a red flag for Indian MNC job offers?',
    answer:
      'Real Indian MNCs use corporate communication platforms for interviews - Microsoft Teams with institutional accounts, Cisco Webex, or company-provisioned Zoom - not personal Gmail Google Meet links. An interview invite from a gmail.com account is definitively not from a genuine TCS or Infosys HR representative. Always check the sender of the meeting invite before joining.',
  },
  {
    question: 'Is it legal for a company to ask for a laptop deposit or security clearance fee in India?',
    answer:
      'No. Under the Employment Exchanges (Compulsory Notification of Vacancies) Act, 1959, charging candidates any fee before employment begins is a criminal offence. This covers laptop deposits, security-clearance fees, onboarding-kit fees and background-verification fees under any name. No legitimate Indian employer charges candidates before Day 1 - all onboarding costs are borne by the employer.',
  },
  {
    question: 'How do I check if a company HR portal website is real or fake?',
    answer:
      'Paste the URL into the RakshaAI Website Safety Checker to review domain age and fraud signals - a domain under six months old claiming to be a major IT brand recruitment portal is a strong fraud signal. Compare the URL against the company\'s official careers page. For any placement consultancy, verify registration at mca.gov.in - registered less than six months ago is high risk.',
  },
  {
    question: 'What makes a forged offer letter a criminal offence in India?',
    answer:
      'Creating an offer letter with a copied company logo, a forged signature and a false letterhead constitutes forgery under IPC Section 465, and forgery for the purpose of cheating under Section 468 once it is used to obtain money. It can also support charges under Section 419 (cheating by personation) and Section 420 (fraud). Penalty exposure: up to 2 years under Section 465 and up to 7 years under Section 468. A forged offer letter is physical evidence that strengthens an FIR considerably.',
  },
  {
    question: 'I received a convincing TCS offer letter. How do I verify it is genuine?',
    answer: "Check the sending email address matches @tcs.com exactly. Call TCS's official HR line, found from careers.tcs.com and not from the letter, and quote the reference number. Confirm the onboarding-call invite also comes from an @tcs.com account. Verify the joining location is a real TCS office. Search the named HR manager on LinkedIn for a verifiable TCS employment history. Any failure on any of these checks means the offer is fake.",
  },
  {
    question: 'How do I recover money paid to a fake HR portal for a laptop deposit or security clearance?',
    answer:
      'Call 1930 within 30 minutes of the transfer for a UPI freeze attempt. File at cybercrime.gov.in under Company Impersonation / Job Fraud. Report the domain to CERT-In at incident@cert-in.org.in. Email the impersonated company\'s fraud team. File a consumer forum complaint at consumerhelpline.gov.in. Request an RBI chargeback for card payments. File an FIR citing IPC 465/468 forgery in addition to IT Act charges.',
  },
  {
    question: 'How do I report a fake company HR portal to Indian authorities?',
    answer:
      "Call 1930 for a UPI freeze. File at cybercrime.gov.in under Online Job Fraud / Company Impersonation. Report the domain to CERT-In at incident@cert-in.org.in. Contact the impersonated company's official fraud or security team. Call the National Consumer Helpline on 1915. File an FIR at your cybercrime police station citing IT Act Sections 66C/66D and IPC Sections 465, 468, 419 and 420. Report the portal to RakshaAI to warn other job seekers immediately.",
  },
  {
    question: 'How is a fake HR portal scam different from a generic advance fee job fraud?',
    answer:
      'A fake company HR portal impersonates a real MNC brand through a dedicated professional website, runs a simulated Google Meet interview with a "panel", and issues a forged offer letter carrying the real company logo before demanding multiple fee types. Generic advance-fee job fraud may use a company name without a dedicated impersonation website, skips the fake interview stage, and asks for simpler, single-type fees. The forgery angle and the email-domain check are the two most important defences against the HR-portal variant specifically.',
  },
  {
    question: 'What laws apply to fake company HR portal scams in India?',
    answer:
      'IT Act 2000: Section 66D (cheating by impersonation using computer resources) and Section 66C (identity fraud using company credentials). IPC: Section 465 (forgery), Section 468 (forgery for cheating), Section 419 (cheating by personation) and Section 420 (fraud). The Trade Marks Act, 1999 covers unauthorised use of registered company logos. The Employment Exchanges (Compulsory Notification of Vacancies) Act, 1959 makes charging candidates a criminal offence. The combination of forgery, IT Act and trademark provisions makes these cases among the strongest for criminal prosecution.',
  },
  {
    question: 'What is the fastest single check to expose a fake HR portal?',
    answer:
      "Check the sender's email domain. Every genuine HR communication from a major Indian MNC comes from that company's exact official domain - @tcs.com, @infosys.com, @wipro.com, @amazon.com. A message from any lookalike domain, however professional the branding, is fake. This one check takes about 10 seconds and is effectively conclusive on its own.",
  },
]

const schemas = [
  webPageSchema({ name: TITLE, description: DESCRIPTION, url: PAGE_PATH }),
  articleSchema({
    headline: 'Fake TCS / Infosys Job Offer India 2026 - Fake HR Portals, Google Meet Interview Traps & Forged Offer Letters',
    description: DESCRIPTION,
    url: PAGE_PATH,
    image: HERO_IMAGE,
    datePublished: '2026-08-16',
    dateModified: '2026-08-16',
    author: organizationRef(),
    section: 'Job Scams',
    keywords: [
      'fake tcs job offer india',
      'fake infosys job offer india',
      'fake wipro job offer india',
      'fake amazon india job offer',
      'fake company hr portal india',
      'fake google meet interview scam india',
      'laptop deposit job scam india',
      'security clearance fee job scam india',
      'forged offer letter india',
      'IPC 465 468 forged offer letter india',
      'CERT-In fake company website india',
      'tcs careers official website india',
    ],
  }),
  faqPageSchema(FAQ_ITEMS),
  breadcrumbListSchema([
    { name: 'Home', url: '/' },
    { name: 'Scam Categories', url: '/scams' },
    { name: 'Job Scams India', url: '/scams/job-scams' },
    { name: 'Fake Company / Fake HR Portal Scam', url: PAGE_PATH },
  ]),
  {
    '@context': 'https://schema.org' as const,
    '@type': 'HowTo',
    '@id': `${CANONICAL}#how-to-verify`,
    name: 'How to verify a job offer letter from a company in India',
    description: 'Five checks to verify any Indian MNC job offer in under three minutes before paying anything.',
    totalTime: 'PT3M',
    step: verificationSteps.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.title, text: step.body })),
  },
]

const sectionTitleClass = 'text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl'
const sectionIntroClass = 'mt-4 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300'

export default function FakeCompanyPortalPage() {
  return (
    <DefaultLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schemas) }} />

      <article className="bg-white dark:bg-slate-950">
        <header className="relative overflow-hidden border-b border-teal-100 bg-gradient-to-br from-teal-50 via-white to-cyan-50 px-4 py-14 dark:border-teal-950 dark:from-slate-950 dark:via-slate-900 dark:to-cyan-950/50 sm:py-20">
          <div aria-hidden="true" className="absolute -right-24 -top-28 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />
          <div aria-hidden="true" className="absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-teal-300/20 blur-3xl" />
          <div className="relative mx-auto max-w-6xl">
            <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <Link className="hover:text-teal-700 dark:hover:text-teal-300" href="/">Home</Link><span aria-hidden="true">›</span>
              <Link className="hover:text-teal-700 dark:hover:text-teal-300" href="/scams">Scam Categories</Link><span aria-hidden="true">›</span>
              <Link className="hover:text-teal-700 dark:hover:text-teal-300" href="/scams/job-scams">Job Scams India</Link><span aria-hidden="true">›</span>
              <span className="text-slate-800 dark:text-slate-200">Fake Company / Fake HR Portal Scam</span>
            </nav>

            <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-teal-800 shadow-sm dark:border-teal-800 dark:bg-slate-900/70 dark:text-cyan-300"><Building2 className="h-4 w-4" /> Company &amp; Brand Impersonation Guide</div>
                <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
                  Fake TCS / Infosys Job Offer India 2026
                  <span className="mt-2 block bg-gradient-to-r from-teal-700 to-cyan-700 bg-clip-text text-transparent dark:from-teal-300 dark:to-cyan-300">Fake HR Portals, Google Meet Traps &amp; Forged Offer Letters</span>
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                  A fake company HR portal scam builds a professionally designed website impersonating TCS, Infosys, Wipro, Amazon India or another real employer, runs a fake Google Meet interview on a personal Gmail link, issues an offer letter with a forged logo, and collects fees for laptop deposits, security clearances or onboarding kits before the &lsquo;joining date&rsquo; - then disappears.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link href="/website-safety-checker" className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-700 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-teal-900/15 transition hover:-translate-y-0.5 hover:bg-teal-800"><SearchCheck className="h-5 w-5" /> Check company website <ArrowRight className="h-4 w-4" /></Link>
                  <Link href="/phone-number-checker" className="inline-flex items-center justify-center gap-2 rounded-xl border border-teal-200 bg-white px-6 py-3.5 text-sm font-bold text-teal-800 shadow-sm transition hover:-translate-y-0.5 hover:bg-teal-50 dark:border-teal-800 dark:bg-slate-900 dark:text-teal-300 dark:hover:bg-slate-800"><Phone className="h-5 w-5" /> Check recruiter number</Link>
                </div>
                <p className="mt-4 text-xs font-medium text-slate-500 dark:text-slate-400">Free · No login · Domain age + SSL + fraud database · Built for India</p>
              </div>
              <figure className="overflow-hidden rounded-3xl border border-teal-200 bg-white shadow-2xl shadow-teal-950/10 dark:border-teal-900 dark:bg-slate-900"><Image src={HERO_IMAGE} alt="Fake TCS, Infosys and Wipro HR portal job offer scam warning for Indian job seekers" width={1200} height={675} className="aspect-[16/9] w-full object-cover" priority /><figcaption className="px-5 py-4 text-xs leading-5 text-slate-500 dark:text-slate-400">A convincing logo and letterhead never prove an offer is genuine - the email domain does.</figcaption></figure>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{quickFacts.map((fact) => <div key={fact.label} className="rounded-2xl border border-white/80 bg-white/90 p-5 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/85"><p className="text-2xl font-black text-teal-700 dark:text-teal-300">{fact.value}</p><p className="mt-2 text-sm leading-5 text-slate-700 dark:text-slate-300">{fact.label}</p><p className="mt-2 text-[11px] font-bold uppercase tracking-wide text-slate-400">{fact.source}</p></div>)}</div>
          </div>
        </header>

        <div className="border-b border-red-200 bg-red-50 px-4 py-5 dark:border-red-900 dark:bg-red-950/30"><div className="mx-auto flex max-w-6xl items-start gap-3 text-sm leading-6 text-red-950 dark:text-red-100"><TriangleAlert className="mt-0.5 h-5 w-5 shrink-0 text-red-700 dark:text-red-400" /><p><strong>The one rule:</strong> real TCS, Infosys, Wipro and Amazon India interviews never use personal Google Meet links, and real MNCs never demand any fee before joining. If an offer fails either test, it is a fake company HR portal scam - do not pay anything.</p></div></div>

        <div className="mx-auto max-w-6xl space-y-24 px-4 py-16 sm:px-6 lg:px-8">
          <section aria-labelledby="distinction-heading" className="rounded-3xl border border-teal-200 bg-teal-50 p-7 dark:border-teal-900 dark:bg-teal-950/30 sm:p-9">
            <div className="flex items-start gap-4"><IdCard className="mt-1 h-7 w-7 shrink-0 text-teal-800 dark:text-teal-300" /><div><h2 id="distinction-heading" className="text-xl font-black text-slate-950 dark:text-white">Brand impersonation, not just a fee demand</h2><p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">A generic advance-fee job scam sends a fake offer letter and asks for a registration fee. This scam is more sophisticated: a dedicated website impersonating a real MNC brand, a simulated Google Meet interview with a &lsquo;panel&rsquo;, and a forged offer letter carrying the real company logo - before multiple fee types are demanded.</p><Link href="/scams/job-scams/advance-fee-job-fraud" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-teal-900 hover:underline dark:text-teal-300">Compare generic advance-fee job fraud <ArrowRight className="h-4 w-4" /></Link></div></div>
          </section>

          <section aria-labelledby="rules-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-teal-700 dark:text-teal-400">The one rule, in three parts</p>
            <h2 id="rules-heading" className={`${sectionTitleClass} mt-3`}>Real TCS, Infosys and Wipro Never Do These Three Things</h2>
            <p className={sectionIntroClass}>The entire fake HR portal scam rests on job seekers not knowing these three rules. Learn them once and every variant of this scam becomes obvious.</p>
            <div className="mt-9 grid gap-5 md:grid-cols-3">{threeRules.map(({ icon: Icon, title, body }) => <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300"><Icon className="h-6 w-6" /></div><h3 className="mt-5 text-lg font-bold text-slate-950 dark:text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{body}</p></article>)}</div>
            <div className="mt-6 rounded-2xl bg-slate-950 p-6 text-sm leading-6 text-slate-200"><strong className="text-cyan-300">The forged logo does not validate the document.</strong> Copying a company&rsquo;s logo and letterhead takes minutes with basic design software. A TCS logo on a PDF does not make the offer genuine - the email domain it was sent from does.</div>
          </section>

          <section aria-labelledby="domains-heading" className="rounded-3xl border border-slate-200 dark:border-slate-800">
            <div className="p-7 sm:p-9"><p className="text-xs font-black uppercase tracking-[0.18em] text-teal-700 dark:text-teal-400">Bookmark this table</p><h2 id="domains-heading" className="mt-3 text-2xl font-black text-slate-950 dark:text-white">Official Careers Portals &amp; Email Domains of India&rsquo;s Top MNCs</h2><p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">Any email from any domain other than the company&rsquo;s official domain below is fake - this single check eliminates most fake company HR portal fraud in India.</p></div>
            <div className="overflow-x-auto border-t border-slate-200 dark:border-slate-800"><table className="w-full min-w-[560px] text-left text-sm"><thead className="bg-slate-950 text-white dark:bg-black"><tr><th className="px-6 py-4">Company</th><th className="px-6 py-4">Official Careers Portal</th><th className="px-6 py-4">Official HR Email Domain</th></tr></thead><tbody className="divide-y divide-slate-200 dark:divide-slate-800">{officialDomains.map(([company, portal, email], index) => <tr key={company} className={index % 2 === 0 ? 'bg-white dark:bg-slate-950' : 'bg-slate-50 dark:bg-slate-900'}><th scope="row" className="px-6 py-4 font-semibold text-slate-950 dark:text-white">{company}</th><td className="px-6 py-4 font-mono text-xs text-teal-700 dark:text-teal-300">{portal}</td><td className="px-6 py-4 font-mono text-xs text-cyan-700 dark:text-cyan-300">{email}</td></tr>)}</tbody></table></div>
          </section>

          <section aria-labelledby="stages-heading" className="rounded-3xl bg-slate-950 px-6 py-10 text-white sm:px-10 sm:py-12">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">The full playbook</p>
            <h2 id="stages-heading" className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">How the Fake HR Portal Scam Works - 5 Stages</h2>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300">Understanding all five stages lets you identify the fraud at Stage 2 or 3 - well before any fee is ever requested.</p>
            <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{stages.map(({ icon: Icon, title, body }) => <div key={title} className="rounded-2xl border border-slate-800 bg-white/5 p-6"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/20 text-cyan-300"><Icon className="h-5 w-5" /></div><p className="mt-4 font-bold">{title}</p><p className="mt-2 text-xs leading-5 text-slate-300">{body}</p></div>)}</div>
          </section>

          <section aria-labelledby="ladder-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-teal-700 dark:text-teal-400">Stage 5, in detail</p>
            <h2 id="ladder-heading" className={`${sectionTitleClass} mt-3`}>The Fee Escalation Ladder</h2>
            <p className={sectionIntroClass}>Fees rarely arrive as a single demand - they escalate in stages, each framed as a routine pre-joining formality, to keep the candidate paying.</p>
            <div className="mt-9 grid gap-3 sm:grid-cols-4">{feeLadder.map(([title, amount, body], index) => <div key={title} className="relative rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"><span className="mb-4 flex h-8 w-8 items-center justify-center rounded-lg bg-teal-700 text-sm font-black text-white">{index + 1}</span><p className="font-bold text-slate-950 dark:text-white">{title}</p><p className="mt-1 text-sm font-black text-teal-700 dark:text-teal-300">{amount}</p><p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">{body}</p>{index < 3 ? <ArrowRight className="absolute -right-2.5 top-1/2 hidden h-5 w-5 text-slate-300 dark:text-slate-600 sm:block" /> : null}</div>)}</div>
          </section>

          <section aria-labelledby="patterns-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-teal-700 dark:text-teal-400">Reported case patterns</p>
            <h2 id="patterns-heading" className={`${sectionTitleClass} mt-3`}>How the Scam Plays Out - India Case Patterns 2024-2025</h2>
            <p className={sectionIntroClass}>These are composite patterns drawn from commonly reported fake company HR portal cases in India, not individual verified incidents.</p>
            <div className="mt-9 grid gap-5 md:grid-cols-2">{casePatterns.map((item, index) => <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"><div className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-100 text-sm font-black text-teal-800 dark:bg-teal-950 dark:text-teal-300">{index + 1}</span><h3 className="text-base font-bold text-slate-950 dark:text-white">{item.title}</h3></div><p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.body}</p></article>)}</div>
          </section>

          <section aria-labelledby="red-flags-heading" className="rounded-3xl bg-gradient-to-br from-red-950 to-teal-950 px-6 py-10 text-white sm:px-10 sm:py-12">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-red-300">Before paying anything</p>
            <h2 id="red-flags-heading" className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">8 Red Flags of a Fake Company HR Portal</h2>
            <ol className="mt-9 grid gap-4 md:grid-cols-2">{redFlags.map(([title, body], index) => <li key={title} className="flex gap-4 rounded-2xl border border-red-800/70 bg-black/15 p-5"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-sm font-black text-red-900">{index + 1}</span><div><h3 className="font-bold">{title}</h3><p className="mt-1 text-sm leading-6 text-red-100/85">{body}</p></div></li>)}</ol>
          </section>

          <section aria-labelledby="verify-heading">
            <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-start">
              <div><p className="text-xs font-black uppercase tracking-[0.18em] text-teal-700 dark:text-teal-400">Five checks, under 3 minutes</p><h2 id="verify-heading" className={`${sectionTitleClass} mt-3`}>How to Verify Any Indian MNC Job Offer</h2><ol className="mt-9 space-y-4">{verificationSteps.map(({ title, body, href, label, icon: Icon }, index) => <li key={title} className="grid gap-4 rounded-2xl border border-slate-200 p-5 dark:border-slate-800 sm:grid-cols-[48px_1fr_auto] sm:items-center"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300"><Icon className="h-5 w-5" /></div><div><p className="text-xs font-black uppercase tracking-wide text-teal-700 dark:text-teal-400">Step {index + 1}</p><h3 className="mt-1 font-bold text-slate-950 dark:text-white">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{body}</p></div>{href && label ? <Link href={href} className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-teal-200 px-4 py-2.5 text-sm font-bold text-teal-800 hover:bg-teal-50 dark:border-teal-800 dark:text-teal-300 dark:hover:bg-teal-950">{label} <ArrowRight className="h-3.5 w-3.5" /></Link> : null}</li>)}</ol></div>
              <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg dark:border-slate-800 dark:bg-slate-900"><Image src="/blog/blog33/job-offer-verification.jpg" alt="Checklist for verifying a company job offer letter before paying any fee in India" width={800} height={999} className="h-auto w-full object-cover" /><figcaption className="px-5 py-4 text-xs leading-5 text-slate-500 dark:text-slate-400">Verify the email domain and the switchboard call before anything else.</figcaption></figure>
            </div>
          </section>

          <section aria-labelledby="recovery-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-red-700 dark:text-red-400">If you already paid a fake company fee</p>
            <h2 id="recovery-heading" className={`${sectionTitleClass} mt-3`}>Recovery Guide - What to Do Next</h2>
            <p className={sectionIntroClass}>Speed matters most in the first 30 minutes. Preserve evidence and start every reporting channel in parallel, not in sequence.</p>
            <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]"><ol className="space-y-4">{recoverySteps.map((step, index) => <li key={step.title} className="flex gap-4 rounded-2xl border border-slate-200 p-5 dark:border-slate-800"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-red-100 text-sm font-black text-red-800 dark:bg-red-950 dark:text-red-300">{index + 1}</span><div><h3 className="font-bold text-slate-950 dark:text-white">{step.title}</h3><p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{step.body}</p></div></li>)}</ol><aside className="h-fit rounded-2xl bg-slate-950 p-6 text-white dark:bg-black"><div className="flex items-center gap-2 text-cyan-300"><Clock3 className="h-5 w-5" /><p className="text-xs font-black uppercase tracking-[0.14em]">Response timeline</p></div><div className="mt-6 space-y-5">{responseTimeline.map(([time, action]) => <div key={time} className="border-l-2 border-cyan-400 pl-4"><p className="font-bold text-cyan-300">{time}</p><p className="mt-1 text-sm leading-5 text-slate-300">{action}</p></div>)}</div></aside></div>
            <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-2xl border border-red-200 bg-red-50 p-6 dark:border-red-900 dark:bg-red-950/30 sm:flex-row sm:items-center"><div><h3 className="text-lg font-black text-red-950 dark:text-red-100">Report the fake portal before it targets more candidates</h3><p className="mt-1 text-sm text-red-800 dark:text-red-200">Keep the portal URL, offer letter PDF, Google Meet screenshots and UPI IDs ready.</p></div><ReportScamButton className="inline-flex items-center gap-2 rounded-xl bg-red-700 px-5 py-3 text-sm font-bold text-white hover:bg-red-800"><ShieldAlert className="h-4 w-4" /> Report portal <ArrowRight className="h-4 w-4" /></ReportScamButton></div>
          </section>

          <section aria-labelledby="law-heading" className="rounded-3xl border border-teal-200 bg-teal-50 p-7 dark:border-teal-900 dark:bg-teal-950/30 sm:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300"><Landmark className="h-6 w-6" /></div>
            <h2 id="law-heading" className="mt-5 text-3xl font-black text-slate-950 dark:text-white">The Law: Why This Is Forgery, Not Just Fraud</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-teal-200 bg-white p-5 dark:border-teal-800 dark:bg-slate-900"><p className="font-black text-slate-950 dark:text-white">IPC Section 465 &amp; 468</p><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">Forgery (up to 2 years) and forgery for the purpose of cheating (up to 7 years). The forged offer letter with a copied logo is physical evidence under these sections.</p></div>
              <div className="rounded-2xl border border-teal-200 bg-white p-5 dark:border-teal-800 dark:bg-slate-900"><p className="font-black text-slate-950 dark:text-white">IPC Section 419 &amp; 420</p><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">Cheating by personation (up to 3 years) for impersonating a real company, and fraud/cheating (up to 7 years) for the money obtained.</p></div>
              <div className="rounded-2xl border border-teal-200 bg-white p-5 dark:border-teal-800 dark:bg-slate-900"><p className="font-black text-slate-950 dark:text-white">IT Act Sections 66C &amp; 66D</p><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">Identity fraud using company logos and credentials, and cheating by impersonation using a computer resource - the fake website itself.</p></div>
              <div className="rounded-2xl border border-teal-200 bg-white p-5 dark:border-teal-800 dark:bg-slate-900"><p className="font-black text-slate-950 dark:text-white">Employment Exchanges Act, 1959</p><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">Charging any candidate a fee before employment begins is a criminal offence under this Act, independent of the forgery charges.</p></div>
            </div>
          </section>

          <section aria-labelledby="stats-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-teal-700 dark:text-teal-400">Scale of the problem</p>
            <h2 id="stats-heading" className={`${sectionTitleClass} mt-3`}>Fake Company HR Portal Statistics India 2025-2026</h2>
            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800"><div className="overflow-x-auto"><table className="w-full min-w-[680px] text-left text-sm"><thead className="bg-slate-950 text-white dark:bg-black"><tr><th className="px-5 py-4">Metric</th><th className="px-5 py-4">Data</th><th className="px-5 py-4">Source</th></tr></thead><tbody className="divide-y divide-slate-200 dark:divide-slate-800">{statistics.map(([metric, data, source], index) => <tr key={metric} className={index % 2 === 0 ? 'bg-white dark:bg-slate-950' : 'bg-slate-50 dark:bg-slate-900'}><th scope="row" className="px-5 py-4 font-semibold text-slate-950 dark:text-white">{metric}</th><td className="px-5 py-4 font-bold text-teal-700 dark:text-teal-300">{data}</td><td className="px-5 py-4 text-slate-500 dark:text-slate-400">{source}</td></tr>)}</tbody></table></div></div>
            <p className="mt-4 text-xs leading-5 text-slate-500 dark:text-slate-400">A 19-day average domain age is the most practically useful figure here: a recently registered domain claiming to be a TCS or Infosys recruitment portal is a strong fraud signal on its own.</p>
          </section>

          <section aria-labelledby="compare-heading"><p className="text-xs font-black uppercase tracking-[0.18em] text-teal-700 dark:text-teal-400">Don&rsquo;t confuse the mechanisms</p><h2 id="compare-heading" className={`${sectionTitleClass} mt-3`}>How This Differs From Other Job Scams India</h2><div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800"><div className="overflow-x-auto"><table className="w-full min-w-[680px] text-left text-sm"><thead className="bg-slate-950 text-white dark:bg-black"><tr><th className="px-5 py-4">Related scam</th><th className="px-5 py-4">Key distinction</th><th className="px-5 py-4">Full guide</th></tr></thead><tbody className="divide-y divide-slate-200 dark:divide-slate-800">{comparisonRows.map((row, index) => <tr key={row.title} className={index % 2 === 0 ? 'bg-white dark:bg-slate-950' : 'bg-slate-50 dark:bg-slate-900'}><th scope="row" className="px-5 py-4 font-semibold text-slate-950 dark:text-white">{row.title}</th><td className="px-5 py-4 text-slate-600 dark:text-slate-300">{row.body}</td><td className="px-5 py-4"><Link href={row.href} className="inline-flex items-center gap-1 font-bold text-teal-700 hover:underline dark:text-teal-300">Read guide <ArrowRight className="h-3.5 w-3.5" /></Link></td></tr>)}</tbody></table></div></div></section>

          <section aria-labelledby="related-heading"><p className="text-xs font-black uppercase tracking-[0.18em] text-teal-700 dark:text-teal-400">Related job-scam guides</p><h2 id="related-heading" className={`${sectionTitleClass} mt-3`}>Keep the Mechanism Clear</h2><div className="mt-8 grid gap-4 sm:grid-cols-2">{relatedGuides.map((item) => <Link key={item.href} href={item.href} className="group rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-md dark:border-slate-800 dark:hover:border-teal-800"><div className="flex items-start justify-between gap-4"><div><h3 className="font-bold text-slate-950 dark:text-white">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.body}</p></div><ArrowRight className="mt-1 h-5 w-5 shrink-0 text-teal-700 transition group-hover:translate-x-1 dark:text-teal-400" /></div></Link>)}</div></section>

          <section aria-labelledby="tools-heading" className="rounded-3xl bg-gradient-to-br from-teal-950 to-slate-950 px-6 py-10 text-white sm:px-10 sm:py-12"><p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">Free RakshaAI checks</p><h2 id="tools-heading" className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Verify the Company and Email Before You Respond</h2><div className="mt-9 grid gap-5 md:grid-cols-3">{tools.map(({ icon: Icon, title, body, href, report, label }) => report ? <div key={title} className="rounded-2xl border border-teal-800 bg-white/5 p-6"><Icon className="h-7 w-7 text-cyan-300" /><h3 className="mt-4 font-bold">{title}</h3><p className="mt-2 min-h-16 text-sm leading-6 text-slate-300">{body}</p><ReportScamButton className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan-300 hover:text-cyan-200">{label} <ArrowRight className="h-4 w-4" /></ReportScamButton></div> : <Link key={href} href={href!} className="group rounded-2xl border border-teal-800 bg-white/5 p-6 hover:bg-white/10"><Icon className="h-7 w-7 text-cyan-300" /><h3 className="mt-4 font-bold">{title}</h3><p className="mt-2 min-h-16 text-sm leading-6 text-slate-300">{body}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan-300">{label} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span></Link>)}</div></section>

          <section aria-labelledby="alerts-heading" className="rounded-3xl border border-cyan-200 bg-cyan-50 p-7 dark:border-cyan-900 dark:bg-cyan-950/30 sm:p-10"><div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center"><div><div className="flex items-center gap-2 text-cyan-800 dark:text-cyan-300"><MonitorSmartphone className="h-5 w-5" /><p className="text-xs font-black uppercase tracking-[0.16em]">Fake HR portal alerts</p></div><h2 id="alerts-heading" className="mt-3 text-2xl font-black text-slate-950 dark:text-white">Check current scam warnings</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-slate-700 dark:text-slate-300">Impersonation domains and recruiter numbers change constantly. Check the live alert feed rather than relying on any static list of domains.</p></div><Link href="/scam-alerts" className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-cyan-800 px-5 py-3 text-sm font-bold text-white hover:bg-cyan-900">View scam alerts <ArrowRight className="h-4 w-4" /></Link></div></section>

          <section aria-labelledby="faq-heading" className="mx-auto max-w-4xl"><div className="text-center"><p className="text-xs font-black uppercase tracking-[0.18em] text-teal-700 dark:text-teal-400">Quick answers</p><h2 id="faq-heading" className={`${sectionTitleClass} mt-3`}>Frequently Asked Questions About Fake Company HR Portals</h2></div><div className="mt-9 space-y-3">{FAQ_ITEMS.map((item) => <details key={item.question} className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-teal-300 open:shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:open:border-teal-800"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold text-slate-950 dark:text-white">{item.question}<span aria-hidden="true" className="text-xl text-teal-700 transition group-open:rotate-45 dark:text-teal-400">+</span></summary><p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-6 text-slate-600 dark:border-slate-800 dark:text-slate-300">{item.answer}</p></details>)}</div></section>

          <section className="rounded-3xl border border-slate-200 bg-slate-50 p-7 dark:border-slate-800 dark:bg-slate-900 sm:p-10"><div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center"><div><p className="text-xs font-black uppercase tracking-[0.16em] text-teal-700 dark:text-teal-400">Remember</p><h2 className="mt-2 max-w-2xl text-2xl font-black text-slate-950 dark:text-white">The email domain, not the logo, tells you if an offer is real.</h2><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">Verify the domain and call the company&rsquo;s official switchboard before you pay anything.</p></div><Link href="/website-safety-checker" className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-teal-700 px-5 py-3 text-sm font-bold text-white hover:bg-teal-800"><Globe2 className="h-4 w-4" /> Check company website</Link></div></section>

          <RelatedTopics currentPath={PAGE_PATH} clusterId="job-scams" />
        </div>
      </article>
    </DefaultLayout>
  )
}
