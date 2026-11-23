import type { Metadata } from 'next'
import Link from 'next/link'
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  CircleDollarSign,
  Clock3,
  Download,
  ExternalLink,
  FileCheck2,
  Gift,
  Globe2,
  Instagram,
  MailCheck,
  MessageCircleWarning,
  MonitorSmartphone,
  Phone,
  ReceiptText,
  SearchCheck,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Tags,
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
const PAGE_PATH = '/scams/job-scams/influencer-scam'
const CANONICAL = `${SITE_URL}${PAGE_PATH}`
const TITLE = 'Influencer Scam India 2026: Fake Brand Deals, Equipment Fees & How to Spot Them'
const DESCRIPTION =
  "A fake brand manager DMs you a paid reel deal, then requests equipment, software or registration fees. Check 8 red flags, verify the offer and follow India's recovery steps."

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
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Fake brand collaboration and creator fee scam guide from RakshaAI' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: ['/opengraph-image'] },
  other: { 'geo.region': 'IN', language: 'en-IN' },
}

const quickFacts = [
  { value: '1930', label: 'National helpline for immediate reporting of financial cyber fraud', source: 'I4C / MHA' },
  { value: '1915', label: 'National Consumer Helpline, available from 8 AM to 8 PM', source: 'Department of Consumer Affairs' },
  { value: '10 labels', label: 'ASCI-recognised disclosure options include Ad, Sponsored, Partnership and platform labels', source: 'ASCI' },
  { value: '5 checks', label: 'Sender, brand, contract, platform and payment checks before accepting', source: 'RakshaAI guide' },
]

const scamTypes = [
  {
    icon: Instagram,
    title: 'Fake brand-collaboration DM',
    body: 'A profile copies a known brand or employee identity and offers a paid reel, post or ambassador role. A registration, shipping, equipment or refundable security payment appears after you agree.',
    signal: 'The real brand cannot confirm the sender or campaign through its independently found contact details.',
  },
  {
    icon: Download,
    title: 'Malicious “contract” or media kit',
    body: 'A supposed sponsor sends a ZIP, EXE, SCR or unfamiliar cloud download presented as the campaign brief. The real goal may be stealing the creator’s account session, channel or passwords.',
    signal: 'You must download or run software before the brand will discuss the campaign through official channels.',
  },
  {
    icon: Video,
    title: 'UGC or product-review portal fee',
    body: 'New creators are promised paid reviews without a follower requirement, then told to buy portal access, a content brief, product stock or a creator starter pack.',
    signal: 'The opportunity is unlocked only after paying the recruiter or a linked checkout page.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Fake talent or management agency',
    body: 'An agency claims it can guarantee regular placements with well-known brands. It collects onboarding money but cannot provide verifiable clients, contracts or completed campaigns.',
    signal: 'The agency guarantees income while avoiding clear commission, cancellation, deliverable and refund terms.',
  },
  {
    icon: CircleDollarSign,
    title: 'Investment or token promoter trap',
    body: 'A creator is offered a fee to promote a trading, token, betting or financial platform, but must first deposit money, buy the asset or connect a wallet to “activate” campaign access.',
    signal: 'Your own investment or wallet access is made a condition of being paid for promotion.',
  },
]

const scamFlow = [
  ['Targeted approach', 'The message references your niche, recent post, location or follower count to feel personal.'],
  ['Attractive brief', 'A familiar brand name, clear deliverable and appealing creator fee make the proposal feel credible.'],
  ['Move off-platform', 'The sender shifts to WhatsApp, Telegram, private email or a cloned campaign portal.'],
  ['Pay or download', 'A small fee, product purchase, wallet connection or “contract viewer” becomes mandatory.'],
  ['Loss or takeover', 'The contact disappears, more fees appear, or the creator’s account and brand identity are compromised.'],
]

const redFlags = [
  ['Pay-to-unlock condition', 'Registration, equipment, shipping, software, security or product money must be paid to access the promised earnings.'],
  ['Lookalike sender identity', 'The display name is familiar, but the handle or email domain has added characters, misspellings or a public-mail address.'],
  ['Suspicious files or apps', 'A contract arrives as an executable, password-protected archive, browser extension or unknown mobile app.'],
  ['No independent confirmation', 'The sender refuses verification through the real brand’s website, switchboard, PR email or existing creator marketplace workflow.'],
  ['Vague or one-sided contract', 'Deliverables, usage rights, exclusivity, revision limits, payment date, tax treatment or cancellation terms are missing.'],
  ['Personal payment destination', 'The requested fee goes to an individual UPI ID, wallet or account unrelated to the named brand or agency.'],
  ['Hidden advertising request', 'You are told to avoid clear disclosure, make the post look organic or conceal that money, a gift or another benefit was provided.'],
  ['Pressure and account access', 'The deal expires immediately or requires passwords, OTPs, backup codes, session cookies, channel access or a wallet seed phrase.'],
]

const verificationSteps = [
  {
    icon: SearchCheck,
    title: 'Inspect the sender and every link',
    body: 'Compare the complete email domain and social handle with the brand’s official channels. Do not open executable files, unknown extensions or shortened links to view a contract.',
    href: '/phone-number-checker',
    label: 'Check sender number',
    external: false,
  },
  {
    icon: MailCheck,
    title: 'Confirm with the brand independently',
    body: 'Use the contact page on the real brand website or its established public account. Ask whether the named person, agency and campaign are authorised. Never use contact details supplied only in the DM.',
    href: '/website-safety-checker',
    label: 'Check brand site',
    external: false,
  },
  {
    icon: FileCheck2,
    title: 'Demand a complete written brief',
    body: 'Verify deliverables, review rounds, publishing dates, content usage and ad rights, exclusivity, fee, payment date, invoicing, taxes, cancellation and a legal counterparty.',
  },
  {
    icon: BadgeCheck,
    title: 'Use platform signals correctly',
    body: 'Instagram Creator Marketplace, partnership messages and paid-partnership tools can add useful context. A blue tick, MCA record or Meta partner listing is not proof by itself—and absence from a partner directory is not proof of fraud.',
    href: 'https://about.fb.com/news/2024/02/creator-marketplace-for-brands-and-creators-to-collaborate-on-instagram/',
    label: 'Meta creator tools',
    external: true,
  },
  {
    icon: ReceiptText,
    title: 'Reject pay-to-unlock and credential requests',
    body: 'Do not send money to release a fee owed to you. Never share passwords, OTPs, backup codes, session cookies, wallet keys or unrestricted account access. Verify any legitimate production-cost arrangement in the signed contract.',
  },
]

const recoverySteps = [
  {
    icon: MonitorSmartphone,
    title: 'Preserve the evidence first',
    body: 'Capture the profile, handle, full email headers, DM thread, URLs, files, payment request, UPI ID, transaction reference and the claimed brand identity before blocking or reporting.',
  },
  {
    icon: WalletCards,
    title: 'Report financial fraud immediately',
    body: 'Call 1930 and file at cybercrime.gov.in. Notify the bank or payment provider using its official channel. Fast reporting can help trace funds, but freezing or recovery is not guaranteed.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure the creator account',
    body: 'If you opened a suspicious file or granted access, disconnect that device if needed, remove unknown sessions and apps, change passwords from a clean device, enable two-factor authentication and review recovery details.',
  },
  {
    icon: ShieldAlert,
    title: 'Report impersonation on the platform',
    body: 'Report the Instagram, YouTube, WhatsApp or Telegram account using the platform’s fraud or impersonation flow. Notify the real brand so its security or legal team can report the copy as well.',
  },
  {
    icon: Building2,
    title: 'Use consumer redress only when applicable',
    body: 'If a traceable business sold a service or kit that was not delivered, National Consumer Helpline may assist at 1915 or consumerhelpline.gov.in. It is a pre-litigation grievance channel, not a guaranteed refund service.',
  },
]

const responseTimeline = [
  ['Immediately', 'Screenshot the account, messages, files, payment destination and transaction details.'],
  ['As soon as possible', 'Call 1930, alert the payment provider and file the cybercrime report.'],
  ['Same day', 'Secure accounts, report the platform profile and notify the impersonated brand.'],
  ['After urgent steps', 'Use NCH where a genuine, identifiable business transaction is involved.'],
]

const platformGuide = [
  ['Instagram', 'Copied brand profile, partnership DM or off-platform payment link', 'Confirm through the real brand; inspect Partnership Messages where available; report impersonation.'],
  ['YouTube', 'Sponsor email with a malicious contract, media kit or software download', 'Check the sender domain, never run executable files and use YouTube’s official reporting/account-security tools.'],
  ['WhatsApp', 'Follow-up from an unknown number after a social DM', 'Check the number, preserve the chat and verify the campaign outside WhatsApp.'],
  ['Telegram', 'Creator pool, ambassador programme or guaranteed placements', 'Treat private recruiter groups and payment-gated access as high risk.'],
  ['LinkedIn/email', 'Professional-looking talent scout, agency or brand employee identity', 'Verify employment independently and confirm through the brand’s official domain.'],
]

const genuineVsFake = [
  ['Sender', 'Verifiable person or agency confirmed by the brand', 'Copied profile, lookalike domain or unverifiable recruiter'],
  ['Brief', 'Specific deliverables, rights, revisions and timeline', 'Vague opportunity unlocked only after registration'],
  ['Payment', 'Clear creator fee, invoice process and payment date', 'Creator must pay the contact to receive earnings'],
  ['Access', 'Least-privilege platform workflow where needed', 'Password, OTP, cookie, wallet key or unrestricted access'],
  ['Disclosure', 'Clear ASCI/platform disclosure is expected', 'Sender asks the creator to hide the commercial relationship'],
]

const verifiedFacts = [
  ['Financial cyber-fraud report', '1930 / cybercrime.gov.in', 'I4C / MHA'],
  ['National Consumer Helpline', '1915, 8 AM–8 PM', 'Department of Consumer Affairs'],
  ['Influencer endorsement guidance', 'Endorsement Know-hows issued in January 2023', 'Department of Consumer Affairs'],
  ['Material connection', 'Money, free products, gifts, discounts and other benefits may require disclosure', 'ASCI'],
  ['Approved disclosure examples', 'Ad, Sponsored, Collaboration, Partnership, Affiliate and platform labels', 'ASCI'],
  ['YouTube scam warning', 'Fake sponsorship files may contain malware that steals channel sessions', 'TeamYouTube · July 2025'],
  ['Instagram creator workflow', 'Creator Marketplace expanded to India in 2024', 'Meta'],
]

const officialSources = [
  { title: 'Department of Consumer Affairs: Endorsement Know-hows', href: 'https://consumeraffairs.nic.in/sites/default/files/filefield_paths/Endorsement_Know-Hows.pdf' },
  { title: 'ASCI influencer guidelines', href: 'https://www.ascionline.in/wp-content/uploads/2023/08/GUIDELINES-FOR-INFLUENCER-ADVERTISING-IN-DIGITAL-MEDIA.pdf' },
  { title: 'ASCI influencer disclosure tool', href: 'https://www.ascionline.in/social/tools/' },
  { title: 'Meta Instagram Creator Marketplace', href: 'https://about.fb.com/news/2024/02/creator-marketplace-for-brands-and-creators-to-collaborate-on-instagram/' },
  { title: 'YouTube fake brand-deal warning', href: 'https://support.google.com/youtube/thread/361376012/protecting-your-channel-from-fake-brand-deal-scams?hl=en' },
  { title: 'YouTube paid-promotion guidance', href: 'https://support.google.com/youtube/answer/154235?hl=en' },
  { title: 'National Consumer Helpline', href: 'https://consumerhelpline.gov.in/' },
  { title: 'National Cybercrime Reporting Portal', href: 'https://www.cybercrime.gov.in/' },
]

const relatedGuides = [
  {
    title: 'WhatsApp & Telegram Job Offer Scam',
    body: 'General work-from-home and recruiter messages that escalate into registration fees or task deposits.',
    href: '/scams/job-scams/whatsapp-job-scam',
  },
  {
    title: 'Advance Fee Job Registration Fraud',
    body: 'Formal fake appointment letters followed by background-check, training, equipment or onboarding payments.',
    href: '/scams/job-scams/advance-fee-job-fraud',
  },
  {
    title: 'Social Commerce Scam',
    body: 'The buyer is cheated by a fake social-media seller; here, the creator is cheated by a fake brand or agency.',
    href: '/scams/e-commerce-fraud/social-commerce-scam',
  },
  {
    title: 'Job Scams India Hub',
    body: 'Compare every major recruitment and earning-opportunity fraud mechanism.',
    href: '/scams/job-scams',
  },
]

const tools = [
  {
    icon: Phone,
    title: 'Phone Number Checker',
    body: 'Search the supposed brand manager’s call or WhatsApp number before engaging.',
    href: '/phone-number-checker',
    label: 'Check a number',
  },
  {
    icon: Globe2,
    title: 'Website Safety Checker',
    body: 'Inspect the brand, agency or creator-portal URL before opening files or sharing details.',
    href: '/website-safety-checker',
    label: 'Check a website',
  },
  {
    icon: WalletCards,
    title: 'UPI ID Checker',
    body: 'Search a payment address used for a registration, equipment or software request.',
    href: '/upi-id-checker',
    label: 'Check a UPI ID',
  },
  {
    icon: ShieldAlert,
    title: 'Report a Scam',
    body: 'Submit the fake manager, agency, account and supporting evidence to warn others.',
    report: true,
    label: 'Report fake deal',
  },
]

const FAQ_ITEMS = [
  {
    question: 'How does a fake influencer brand-deal scam work?',
    answer:
      'A fake brand manager or agency offers a paid reel, post, review or ambassador role. After moving the conversation off-platform, the scammer requests a registration, equipment, shipping, software or product payment—or sends a malicious contract file. The contact then disappears, demands more money or compromises the creator’s account.',
  },
  {
    question: 'Does every genuine brand deal pay the creator upfront?',
    answer:
      'No. Payment timing varies and may be after approval, publication or an agreed invoice period. The safer rule is that you should not have to pay the supposed brand manager to unlock money owed to you. Any legitimate production cost, sample purchase or reimbursement arrangement should be explicit in a verified written contract with the real counterparty.',
  },
  {
    question: 'How can I verify a brand collaboration in India?',
    answer:
      'Inspect the full sender domain and handle, contact the brand using independently found details, verify the legal counterparty, demand a complete written brief, check platform partnership signals where available and reject requests for money, passwords, OTPs, session cookies or wallet keys.',
  },
  {
    question: 'Does a blue tick prove that a brand manager is genuine?',
    answer:
      'No. Verification badges are useful context but not conclusive proof of a campaign or employee identity. Accounts can be copied, renamed or compromised. Confirm the specific person and campaign through the brand’s official website or established public account.',
  },
  {
    question: 'Can Meta Business Partner or Creator Marketplace checks prove a deal is genuine?',
    answer:
      'No single directory can prove authenticity. Instagram Creator Marketplace and partnership-message tools provide useful in-platform context, but not every genuine campaign uses them. Likewise, absence from a Meta partner programme does not establish fraud. Independent brand confirmation and a verifiable contract remain essential.',
  },
  {
    question: 'What are India’s influencer disclosure rules?',
    answer:
      'The Department of Consumer Affairs issued Endorsement Know-hows in 2023, and ASCI’s influencer guidelines require clear disclosure when there is a material connection such as payment, gifts, free products or discounts. ASCI-recognised labels include Ad, Sponsored, Collaboration, Partnership, Affiliate and platform disclosure tools.',
  },
  {
    question: 'What should I do if I downloaded a fake brand-deal contract?',
    answer:
      'Stop opening the file, disconnect the affected device if compromise is suspected and use a clean device to change important passwords, revoke unknown sessions and apps, enable two-factor authentication and review account-recovery details. Report the sender and follow the platform’s hacked-account process if access changed.',
  },
  {
    question: 'What should I do after paying an equipment or registration fee?',
    answer:
      'Preserve evidence, call 1930, alert the bank or payment provider and file at cybercrime.gov.in. Report the social account and notify the impersonated brand. If an identifiable business sold an undelivered service or kit, National Consumer Helpline may be available at 1915 or consumerhelpline.gov.in.',
  },
  {
    question: 'How do I report a fake creator programme on YouTube?',
    answer:
      'Report the channel, video or comment using YouTube’s reporting tools and select the closest impersonation, spam or scam reason. Preserve the sponsorship email and full headers. If a file was opened or channel access changed, use YouTube and Google account-security recovery immediately.',
  },
  {
    question: 'Is a talent agency registration fee automatically illegal or fraudulent?',
    answer:
      'Not automatically. Agency business models and contracts vary, so a fee alone does not establish a legal violation. It is high risk when paired with guaranteed placements, unverifiable clients, payment to an individual, missing refund terms or refusal to let the named brands confirm the relationship.',
  },
]

const schemas = [
  webPageSchema({ name: TITLE, description: DESCRIPTION, url: PAGE_PATH }),
  articleSchema({
    headline: 'Influencer Scam India 2026: Fake Brand Deals, Equipment Fees and Creator Account Theft',
    description: DESCRIPTION,
    url: PAGE_PATH,
    image: '/opengraph-image',
    datePublished: '2026-07-22',
    dateModified: '2026-07-22',
    author: organizationRef(),
    section: 'Job Scams',
    keywords: [
      'influencer scam india',
      'fake brand collaboration instagram india',
      'content creator job scam india',
      'equipment fee influencer scam india',
      'fake talent agency india creator',
      'youtube fake brand deal scam',
      'how to verify brand collaboration india',
    ],
  }),
  faqPageSchema(FAQ_ITEMS),
  breadcrumbListSchema([
    { name: 'Home', url: '/' },
    { name: 'Scam Categories', url: '/scams' },
    { name: 'Job Scams India', url: '/scams/job-scams' },
    { name: 'Influencer & Content Creator Scam', url: PAGE_PATH },
  ]),
  {
    '@context': 'https://schema.org' as const,
    '@type': 'HowTo',
    '@id': `${CANONICAL}#how-to-verify`,
    name: 'How to verify a brand collaboration in India',
    description: 'Five checks for a creator to complete before accepting a paid collaboration, opening campaign files or sharing account access.',
    totalTime: 'PT5M',
    step: verificationSteps.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.title, text: step.body })),
  },
  {
    '@context': 'https://schema.org' as const,
    '@type': 'DefinedTerm',
    '@id': `${CANONICAL}#defined-term`,
    name: 'Influencer scam',
    description: 'A fraudulent creator opportunity that impersonates a brand, agency or platform to obtain money, credentials, account access or promotional work.',
    inDefinedTermSet: {
      '@type': 'DefinedTermSet',
      name: 'RakshaAI Scam Glossary',
      url: `${SITE_URL}/scams`,
    },
  },
]

const sectionTitleClass = 'text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl'
const sectionIntroClass = 'mt-4 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300'

export default function InfluencerScamPage() {
  return (
    <DefaultLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schemas) }} />

      <article className="bg-white dark:bg-slate-950">
        <header className="relative overflow-hidden border-b border-pink-100 bg-gradient-to-br from-pink-50 via-white to-violet-50 px-4 py-14 dark:border-pink-950 dark:from-slate-950 dark:via-slate-900 dark:to-violet-950/40 sm:py-20">
          <div aria-hidden="true" className="absolute -right-28 -top-32 h-96 w-96 rounded-full bg-pink-300/20 blur-3xl" />
          <div aria-hidden="true" className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-violet-300/20 blur-3xl" />
          <div className="relative mx-auto max-w-6xl">
            <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <Link className="hover:text-pink-700 dark:hover:text-pink-300" href="/">Home</Link><span aria-hidden="true">›</span>
              <Link className="hover:text-pink-700 dark:hover:text-pink-300" href="/scams">Scam Categories</Link><span aria-hidden="true">›</span>
              <Link className="hover:text-pink-700 dark:hover:text-pink-300" href="/scams/job-scams">Job Scams India</Link><span aria-hidden="true">›</span>
              <span className="text-slate-800 dark:text-slate-200">Influencer &amp; Content Creator Scam</span>
            </nav>

            <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-pink-800 shadow-sm dark:border-pink-800 dark:bg-slate-900/70 dark:text-pink-300"><Sparkles className="h-4 w-4" /> Creator safety guide</div>
                <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
                  Influencer Scam India 2026
                  <span className="mt-2 block bg-gradient-to-r from-pink-700 to-violet-700 bg-clip-text text-transparent dark:from-pink-300 dark:to-violet-300">Fake Brand Deals, Equipment Fees &amp; Account-Theft Traps</span>
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">A fake brand manager offers a paid reel, UGC brief or ambassador role, then asks you to pay, open a dangerous file or surrender account access. Verify the actual sender and campaign before money, credentials or content changes hands.</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link href="/phone-number-checker" className="inline-flex items-center justify-center gap-2 rounded-xl bg-pink-700 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-pink-900/15 transition hover:-translate-y-0.5 hover:bg-pink-800"><Phone className="h-5 w-5" /> Check brand manager <ArrowRight className="h-4 w-4" /></Link>
                  <Link href="/website-safety-checker" className="inline-flex items-center justify-center gap-2 rounded-xl border border-pink-200 bg-white px-6 py-3.5 text-sm font-bold text-pink-800 shadow-sm transition hover:-translate-y-0.5 hover:bg-pink-50 dark:border-pink-800 dark:bg-slate-900 dark:text-pink-300 dark:hover:bg-slate-800"><Globe2 className="h-5 w-5" /> Check brand website</Link>
                </div>
                <p className="mt-4 text-xs font-medium text-slate-500 dark:text-slate-400">Free checks · No login · Always confirm the specific campaign with the real brand</p>
              </div>

              <div className="overflow-hidden rounded-3xl border border-pink-200 bg-white shadow-2xl shadow-pink-950/10 dark:border-pink-900 dark:bg-slate-900">
                <div className="flex items-center justify-between border-b border-slate-200 bg-gradient-to-r from-pink-600 to-violet-600 px-5 py-4 text-white dark:border-slate-800"><div className="flex items-center gap-3"><div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20"><Instagram className="h-5 w-5" /></div><div><p className="text-sm font-black">Brand Manager</p><p className="text-[11px] text-pink-100">Collaboration invitation</p></div></div><MessageCircleWarning className="h-5 w-5" /></div>
                <div className="space-y-3 p-6 text-sm">
                  <div className="mr-10 rounded-2xl rounded-tl-sm bg-slate-100 p-4 leading-6 text-slate-700 dark:bg-slate-800 dark:text-slate-200">We loved your reels! Post one video and earn ₹5,000. No follower minimum.</div>
                  <div className="ml-10 rounded-2xl rounded-tr-sm bg-pink-100 p-4 leading-6 text-pink-950 dark:bg-pink-950 dark:text-pink-100">Sounds good. Please send the campaign brief and contract.</div>
                  <div className="mr-10 rounded-2xl rounded-tl-sm border border-red-200 bg-red-50 p-4 leading-6 text-red-900 dark:border-red-900 dark:bg-red-950/40 dark:text-red-100">First pay the refundable ₹1,499 creator-kit fee, then download our campaign app.</div>
                  <div className="mt-4 flex items-start gap-3 rounded-xl bg-red-950 p-4 text-white"><TriangleAlert className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><p className="text-xs leading-5"><strong>Stop here:</strong> verify the sender outside the chat. Do not pay, download the app or share account credentials.</p></div>
                </div>
              </div>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{quickFacts.map((fact) => <div key={fact.label} className="rounded-2xl border border-white/80 bg-white/90 p-5 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/85"><p className="text-2xl font-black text-pink-700 dark:text-pink-300">{fact.value}</p><p className="mt-2 text-sm leading-5 text-slate-700 dark:text-slate-300">{fact.label}</p><p className="mt-2 text-[11px] font-bold uppercase tracking-wide text-slate-400">{fact.source}</p></div>)}</div>
          </div>
        </header>

        <div className="border-b border-red-200 bg-red-50 px-4 py-5 dark:border-red-900 dark:bg-red-950/30"><div className="mx-auto flex max-w-6xl items-start gap-3 text-sm leading-6 text-red-950 dark:text-red-100"><TriangleAlert className="mt-0.5 h-5 w-5 shrink-0 text-red-700 dark:text-red-400" /><p><strong>The safer rule:</strong> never pay the supposed brand manager to unlock earnings, and never open executable “contract” files or share passwords, OTPs, backup codes, session cookies or wallet keys.</p></div></div>

        <div className="mx-auto max-w-6xl space-y-24 px-4 py-16 sm:px-6 lg:px-8">
          <section aria-labelledby="distinction-heading" className="rounded-3xl border border-violet-200 bg-violet-50 p-7 dark:border-violet-900 dark:bg-violet-950/25 sm:p-9">
            <div className="flex items-start gap-4"><Gift className="mt-1 h-7 w-7 shrink-0 text-violet-800 dark:text-violet-300" /><div><h2 id="distinction-heading" className="text-xl font-black text-slate-950 dark:text-white">Creator-side fraud is different from social-commerce fraud</h2><p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">Here, a creator is approached by someone impersonating a brand, agency or platform. In a social-commerce scam, a buyer pays a fake seller for goods. The profiles may look similar, but the evidence and transaction purpose are different.</p><Link href="/scams/e-commerce-fraud/social-commerce-scam" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-violet-900 hover:underline dark:text-violet-300">Compare buyer-side social-commerce fraud <ArrowRight className="h-4 w-4" /></Link></div></div>
          </section>

          <section aria-labelledby="types-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-pink-700 dark:text-pink-400">Five active mechanisms</p>
            <h2 id="types-heading" className={`${sectionTitleClass} mt-3`}>Types of Influencer and Content-Creator Scam</h2>
            <p className={sectionIntroClass}>Some steal a small fee. Others use a sponsorship pitch to take over the creator’s entire account or channel.</p>
            <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{scamTypes.map(({ icon: Icon, title, body, signal }) => <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-100 text-pink-800 dark:bg-pink-950 dark:text-pink-300"><Icon className="h-6 w-6" /></div><h3 className="mt-5 text-lg font-bold text-slate-950 dark:text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{body}</p><div className="mt-5 flex gap-2 rounded-xl bg-red-50 p-4 text-xs leading-5 text-red-800 dark:bg-red-950/30 dark:text-red-200"><AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />{signal}</div></article>)}</div>
          </section>

          <section aria-labelledby="flow-heading" className="rounded-3xl bg-slate-950 px-6 py-10 text-white sm:px-10 sm:py-12">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-pink-300">The conversion funnel</p>
            <h2 id="flow-heading" className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">From Personalised DM to Payment or Account Takeover</h2>
            <div className="mt-9 grid gap-3 sm:grid-cols-5">{scamFlow.map(([title, body], index) => <div key={title} className="relative rounded-2xl border border-slate-800 bg-white/5 p-5"><span className="mb-4 flex h-8 w-8 items-center justify-center rounded-lg bg-pink-500 text-sm font-black">{index + 1}</span><p className="font-bold">{title}</p><p className="mt-2 text-xs leading-5 text-slate-300">{body}</p>{index < scamFlow.length - 1 ? <ArrowRight className="absolute -right-2.5 top-1/2 hidden h-5 w-5 text-slate-500 sm:block" /> : null}</div>)}</div>
          </section>

          <section aria-labelledby="youtube-heading" className="rounded-3xl border border-red-200 bg-red-50 p-7 dark:border-red-900 dark:bg-red-950/25 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-center"><div><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300"><Download className="h-6 w-6" /></div><h2 id="youtube-heading" className="mt-5 text-3xl font-black text-slate-950 dark:text-white">A fake deal may target your channel—not only your wallet</h2><p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-300">TeamYouTube warned creators in July 2025 that fake sponsorship offers may include a contract, media kit or proprietary-software file containing malware. The malware can steal session cookies and enable unauthorised channel access.</p><p className="mt-4 text-sm font-bold text-red-950 dark:text-red-100">Do not run EXE or SCR files, browser extensions, unknown apps or password-protected archives to review a campaign.</p><a href="https://support.google.com/youtube/thread/361376012/protecting-your-channel-from-fake-brand-deal-scams?hl=en" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-red-700 px-5 py-3 text-sm font-bold text-white hover:bg-red-800">Read TeamYouTube’s warning <ExternalLink className="h-4 w-4" /></a></div><div className="space-y-3">{[['Safe', 'PDF viewed in a trusted browser after sender verification'], ['Danger', 'EXE, SCR, extension, macro or unknown application'], ['Never share', 'Password, OTP, backup code, cookie or recovery key']].map(([label, body]) => <div key={label} className="rounded-2xl border border-red-200 bg-white p-5 dark:border-red-800 dark:bg-slate-900"><p className="text-xs font-black uppercase tracking-wide text-red-700 dark:text-red-300">{label}</p><p className="mt-2 text-sm font-bold text-slate-950 dark:text-white">{body}</p></div>)}</div></div>
          </section>

          <section aria-labelledby="red-flags-heading" className="rounded-3xl bg-gradient-to-br from-pink-950 to-violet-950 px-6 py-10 text-white sm:px-10 sm:py-12">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-pink-300">Before you respond</p>
            <h2 id="red-flags-heading" className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">8 Red Flags of a Fake Brand Deal</h2>
            <ol className="mt-9 grid gap-4 md:grid-cols-2">{redFlags.map(([title, body], index) => <li key={title} className="flex gap-4 rounded-2xl border border-pink-800/70 bg-black/15 p-5"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-pink-100 text-sm font-black text-pink-900">{index + 1}</span><div><h3 className="font-bold">{title}</h3><p className="mt-1 text-sm leading-6 text-pink-100/85">{body}</p></div></li>)}</ol>
          </section>

          <section aria-labelledby="verify-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-pink-700 dark:text-pink-400">Five checks</p>
            <h2 id="verify-heading" className={`${sectionTitleClass} mt-3`}>How to Verify a Brand Collaboration in India</h2>
            <p className={sectionIntroClass}>Use the real brand’s infrastructure to verify the deal—not evidence controlled by the person who sent it.</p>
            <ol className="mt-9 space-y-4">{verificationSteps.map(({ title, body, href, label, icon: Icon, external }, index) => <li key={title} className="grid gap-4 rounded-2xl border border-slate-200 p-5 dark:border-slate-800 sm:grid-cols-[48px_1fr_auto] sm:items-center"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-100 text-pink-800 dark:bg-pink-950 dark:text-pink-300"><Icon className="h-5 w-5" /></div><div><p className="text-xs font-black uppercase tracking-wide text-pink-700 dark:text-pink-400">Step {index + 1}</p><h3 className="mt-1 font-bold text-slate-950 dark:text-white">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{body}</p></div>{href && label ? external ? <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-pink-200 px-4 py-2.5 text-sm font-bold text-pink-800 hover:bg-pink-50 dark:border-pink-800 dark:text-pink-300 dark:hover:bg-pink-950">{label} <ExternalLink className="h-3.5 w-3.5" /></a> : <Link href={href} className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-pink-200 px-4 py-2.5 text-sm font-bold text-pink-800 hover:bg-pink-50 dark:border-pink-800 dark:text-pink-300 dark:hover:bg-pink-950">{label} <ArrowRight className="h-3.5 w-3.5" /></Link> : null}</li>)}</ol>
          </section>

          <section aria-labelledby="comparison-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-pink-700 dark:text-pink-400">Side-by-side review</p>
            <h2 id="comparison-heading" className={`${sectionTitleClass} mt-3`}>More Verifiable Deal vs High-Risk Offer</h2>
            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800"><div className="overflow-x-auto"><table className="w-full min-w-[760px] text-left text-sm"><thead className="bg-slate-950 text-white"><tr><th className="px-5 py-4">Check</th><th className="px-5 py-4">More verifiable</th><th className="px-5 py-4">High risk</th></tr></thead><tbody className="divide-y divide-slate-200 dark:divide-slate-800">{genuineVsFake.map(([check, safe, risk], index) => <tr key={check} className={index % 2 === 0 ? 'bg-white dark:bg-slate-950' : 'bg-slate-50 dark:bg-slate-900'}><th scope="row" className="px-5 py-4 font-bold text-slate-950 dark:text-white">{check}</th><td className="px-5 py-4 text-emerald-800 dark:text-emerald-300"><CheckCircle2 className="mr-2 inline h-4 w-4" />{safe}</td><td className="px-5 py-4 text-red-800 dark:text-red-300"><TriangleAlert className="mr-2 inline h-4 w-4" />{risk}</td></tr>)}</tbody></table></div></div>
          </section>

          <section aria-labelledby="platform-heading" className="rounded-3xl border border-violet-200 bg-violet-50 p-7 dark:border-violet-900 dark:bg-violet-950/25 sm:p-10">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-violet-800 dark:text-violet-300">Platform-specific checks</p>
            <h2 id="platform-heading" className="mt-3 text-3xl font-black text-slate-950 dark:text-white">Where the Fake Deal Reaches You</h2>
            <div className="mt-8 overflow-hidden rounded-2xl border border-violet-200 dark:border-violet-800"><div className="overflow-x-auto"><table className="w-full min-w-[760px] text-left text-sm"><thead className="bg-violet-950 text-white"><tr><th className="px-5 py-4">Platform</th><th className="px-5 py-4">Common delivery</th><th className="px-5 py-4">Best verification step</th></tr></thead><tbody className="divide-y divide-violet-200 dark:divide-violet-900">{platformGuide.map(([platform, delivery, check], index) => <tr key={platform} className={index % 2 === 0 ? 'bg-white dark:bg-slate-950' : 'bg-violet-50 dark:bg-slate-900'}><th scope="row" className="px-5 py-4 font-bold text-slate-950 dark:text-white">{platform}</th><td className="px-5 py-4 text-slate-600 dark:text-slate-300">{delivery}</td><td className="px-5 py-4 font-semibold text-violet-800 dark:text-violet-300">{check}</td></tr>)}</tbody></table></div></div>
          </section>

          <section aria-labelledby="recovery-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-red-700 dark:text-red-400">If you paid, clicked or shared access</p>
            <h2 id="recovery-heading" className={`${sectionTitleClass} mt-3`}>Influencer Scam Recovery Guide</h2>
            <p className={sectionIntroClass}>Secure the account as seriously as the payment. A creator channel can be more valuable to the attacker than the initial fee.</p>
            <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]"><ol className="space-y-4">{recoverySteps.map(({ icon: Icon, title, body }, index) => <li key={title} className="flex gap-4 rounded-2xl border border-slate-200 p-5 dark:border-slate-800"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300"><Icon className="h-5 w-5" /></div><div><p className="text-xs font-black uppercase tracking-wide text-red-700 dark:text-red-400">Step {index + 1}</p><h3 className="mt-1 font-bold text-slate-950 dark:text-white">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{body}</p></div></li>)}</ol><aside className="h-fit rounded-2xl bg-slate-950 p-6 text-white"><div className="flex items-center gap-2 text-pink-300"><Clock3 className="h-5 w-5" /><p className="text-xs font-black uppercase tracking-[0.14em]">Response timeline</p></div><div className="mt-6 space-y-5">{responseTimeline.map(([time, action]) => <div key={time} className="border-l-2 border-pink-400 pl-4"><p className="font-bold text-pink-300">{time}</p><p className="mt-1 text-sm leading-5 text-slate-300">{action}</p></div>)}</div></aside></div>
            <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-2xl border border-red-200 bg-red-50 p-6 dark:border-red-900 dark:bg-red-950/25 sm:flex-row sm:items-center"><div><h3 className="text-lg font-black text-red-950 dark:text-red-100">Report the fake deal before the profile changes</h3><p className="mt-1 text-sm text-red-800 dark:text-red-200">Keep the handle, URL, messages, payment details and brand identity ready.</p></div><ReportScamButton className="inline-flex items-center gap-2 rounded-xl bg-red-700 px-5 py-3 text-sm font-bold text-white hover:bg-red-800"><ShieldAlert className="h-4 w-4" /> Report fake deal <ArrowRight className="h-4 w-4" /></ReportScamButton></div>
          </section>

          <section aria-labelledby="rules-heading" className="rounded-3xl border border-pink-200 bg-pink-50 p-7 dark:border-pink-900 dark:bg-pink-950/25 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_340px] lg:items-center"><div><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-100 text-pink-800 dark:bg-pink-950 dark:text-pink-300"><Tags className="h-6 w-6" /></div><h2 id="rules-heading" className="mt-5 text-3xl font-black text-slate-950 dark:text-white">A real deal still needs clear disclosure and due diligence</h2><p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-300">The Department of Consumer Affairs—not MIB—released the 2023 Endorsement Know-hows for celebrities, influencers and virtual influencers. ASCI’s guidelines say a material connection can include money, gifts, free or discounted products and other benefits.</p><p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-300">ASCI-recognised labels include <strong>Ad, Sponsored, Collaboration, Partnership, Free gift, Affiliate</strong> and platform disclosure tools. The label should be upfront and prominent, and creators should satisfy themselves that advertiser claims can be substantiated.</p><a href="https://www.ascionline.in/social/tools/" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-pink-700 px-5 py-3 text-sm font-bold text-white hover:bg-pink-800">Open ASCI disclosure tool <ExternalLink className="h-4 w-4" /></a></div><div className="grid gap-3">{[['Money paid', 'Disclosure required'], ['Gifted product', 'Disclosure may be required'], ['Affiliate link', 'Disclosure required'], ['Paid Partnership', 'Platform label recognised']].map(([connection, rule]) => <div key={connection} className="flex items-center justify-between gap-4 rounded-2xl border border-pink-200 bg-white p-4 dark:border-pink-800 dark:bg-slate-900"><p className="font-bold text-slate-950 dark:text-white">{connection}</p><p className="text-xs font-black uppercase tracking-wide text-pink-700 dark:text-pink-300">{rule}</p></div>)}</div></div>
          </section>

          <section aria-labelledby="facts-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-pink-700 dark:text-pink-400">Verified official guidance</p>
            <h2 id="facts-heading" className={`${sectionTitleClass} mt-3`}>India Creator-Safety Resources</h2>
            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800"><div className="overflow-x-auto"><table className="w-full min-w-[680px] text-left text-sm"><thead className="bg-slate-950 text-white"><tr><th className="px-5 py-4">Resource or rule</th><th className="px-5 py-4">Verified detail</th><th className="px-5 py-4">Source</th></tr></thead><tbody className="divide-y divide-slate-200 dark:divide-slate-800">{verifiedFacts.map(([metric, data, source], index) => <tr key={metric} className={index % 2 === 0 ? 'bg-white dark:bg-slate-950' : 'bg-slate-50 dark:bg-slate-900'}><th scope="row" className="px-5 py-4 font-semibold text-slate-950 dark:text-white">{metric}</th><td className="px-5 py-4 font-bold text-pink-700 dark:text-pink-300">{data}</td><td className="px-5 py-4 text-slate-500 dark:text-slate-400">{source}</td></tr>)}</tbody></table></div></div>
            <div className="mt-5 flex flex-wrap gap-3">{officialSources.map((source) => <a key={source.href} href={source.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 hover:border-pink-300 hover:text-pink-800 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-pink-800 dark:hover:text-pink-300">{source.title} <ExternalLink className="h-3 w-3" /></a>)}</div>
            <p className="mt-4 text-xs leading-5 text-slate-500 dark:text-slate-400">The supplied complaint growth, average-loss, victim-profile, platform-share and recovery-rate statistics are not displayed because matching primary publications were not found. Verification badges, MCA records and partner directories are supporting signals—not guarantees of legitimacy.</p>
          </section>

          <section aria-labelledby="related-heading"><p className="text-xs font-black uppercase tracking-[0.18em] text-pink-700 dark:text-pink-400">Related scam guides</p><h2 id="related-heading" className={`${sectionTitleClass} mt-3`}>Keep the Victim and Mechanism Clear</h2><div className="mt-8 grid gap-4 sm:grid-cols-2">{relatedGuides.map((item) => <Link key={item.href} href={item.href} className="group rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-0.5 hover:border-pink-300 hover:shadow-md dark:border-slate-800 dark:hover:border-pink-800"><div className="flex items-start justify-between gap-4"><div><h3 className="font-bold text-slate-950 dark:text-white">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.body}</p></div><ArrowRight className="mt-1 h-5 w-5 shrink-0 text-pink-700 transition group-hover:translate-x-1 dark:text-pink-400" /></div></Link>)}</div></section>

          <section aria-labelledby="tools-heading" className="rounded-3xl bg-gradient-to-br from-pink-950 to-slate-950 px-6 py-10 text-white sm:px-10 sm:py-12"><p className="text-xs font-black uppercase tracking-[0.18em] text-pink-300">Free RakshaAI checks</p><h2 id="tools-heading" className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Verify the Contact, Site and Payment Address</h2><div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{tools.map(({ icon: Icon, title, body, href, report, label }) => report ? <div key={title} className="rounded-2xl border border-pink-800 bg-white/5 p-6"><Icon className="h-7 w-7 text-pink-300" /><h3 className="mt-4 font-bold">{title}</h3><p className="mt-2 min-h-16 text-sm leading-6 text-slate-300">{body}</p><ReportScamButton className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-pink-300 hover:text-pink-200">{label} <ArrowRight className="h-4 w-4" /></ReportScamButton></div> : <Link key={href} href={href!} className="group rounded-2xl border border-pink-800 bg-white/5 p-6 hover:bg-white/10"><Icon className="h-7 w-7 text-pink-300" /><h3 className="mt-4 font-bold">{title}</h3><p className="mt-2 min-h-16 text-sm leading-6 text-slate-300">{body}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-pink-300">{label} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span></Link>)}</div></section>

          <section aria-labelledby="alerts-heading" className="rounded-3xl border border-violet-200 bg-violet-50 p-7 dark:border-violet-900 dark:bg-violet-950/25 sm:p-10"><div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center"><div><div className="flex items-center gap-2 text-violet-800 dark:text-violet-300"><Smartphone className="h-5 w-5" /><p className="text-xs font-black uppercase tracking-[0.16em]">Current warnings</p></div><h2 id="alerts-heading" className="mt-3 text-2xl font-black text-slate-950 dark:text-white">Check live alerts instead of static brand-name lists</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-slate-700 dark:text-slate-300">Fake profiles, handles, numbers and campaign names change quickly. A recognisable brand name in the DM does not make the sender genuine.</p></div><Link href="/scam-alerts" className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-violet-800 px-5 py-3 text-sm font-bold text-white hover:bg-violet-900">View scam alerts <ArrowRight className="h-4 w-4" /></Link></div></section>

          <section aria-labelledby="faq-heading" className="mx-auto max-w-4xl"><div className="text-center"><p className="text-xs font-black uppercase tracking-[0.18em] text-pink-700 dark:text-pink-400">Quick answers</p><h2 id="faq-heading" className={`${sectionTitleClass} mt-3`}>Influencer and Content-Creator Scam FAQs</h2></div><div className="mt-9 space-y-3">{FAQ_ITEMS.map((item) => <details key={item.question} className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-pink-300 open:shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:open:border-pink-800"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold text-slate-950 dark:text-white">{item.question}<span aria-hidden="true" className="text-xl text-pink-700 transition group-open:rotate-45 dark:text-pink-400">+</span></summary><p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-6 text-slate-600 dark:border-slate-800 dark:text-slate-300">{item.answer}</p></details>)}</div></section>

          <section className="rounded-3xl border border-slate-200 bg-slate-50 p-7 dark:border-slate-800 dark:bg-slate-900 sm:p-10"><div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center"><div><p className="text-xs font-black uppercase tracking-[0.16em] text-pink-700 dark:text-pink-400">Remember</p><h2 className="mt-2 max-w-2xl text-2xl font-black text-slate-950 dark:text-white">A polished DM is an introduction—not proof of a brand relationship.</h2><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">Verify the person and campaign independently before paying, downloading or granting access.</p></div><Link href="/phone-number-checker" className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-pink-700 px-5 py-3 text-sm font-bold text-white hover:bg-pink-800"><Phone className="h-4 w-4" /> Check sender</Link></div></section>

          <RelatedTopics currentPath={PAGE_PATH} clusterId="job-scams" />
        </div>
      </article>
    </DefaultLayout>
  )
}
