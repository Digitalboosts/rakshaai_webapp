import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Clock3,
  FileCheck2,
  HandCoins,
  Landmark,
  Layers3,
  MessageCircle,
  MonitorSmartphone,
  Percent,
  Phone,
  ShieldAlert,
  TrendingDown,
  TriangleAlert,
  UserRoundCheck,
  UserRoundSearch,
  Users,
  Video,
  Wallet,
  WalletCards,
  XCircle,
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
const PAGE_PATH = '/scams/job-scams/mlm-pyramid-scam'
const CANONICAL = `${SITE_URL}${PAGE_PATH}`
const HERO_IMAGE = '/blog/whatsapp-scam-india/whatsapp-scam-hero.jpg'
const TITLE = 'MLM & Pyramid Scheme Scam India 2026 - Referral Earnings Trap Explained'
const DESCRIPTION =
  'Joining fees, training kits & starter packs. Income only from recruiting new victims. Classic pyramid math that always collapses. Prize Chit Act, Direct Selling Guidelines 2021 & India recovery guide.'

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
    images: [{ url: HERO_IMAGE, width: 1000, height: 562, alt: 'MLM and pyramid scheme referral earnings scam warning for India' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [HERO_IMAGE] },
  other: { 'geo.region': 'IN', language: 'en-IN' },
}

const quickFacts = [
  { value: '16%', label: 'Share of India job-fraud complaints linked to MLM / pyramid schemes', source: 'NCRB 2025' },
  { value: '₹2,100 Cr', label: 'Estimated annual financial harm from MLM pyramid schemes in India', source: 'MHA I4C 2025' },
  { value: '₹14,000', label: 'Average loss per participant - mostly joining fees and starter packs', source: 'MHA I4C 2025' },
  { value: '95%+', label: 'Participants who lose money - a mathematical certainty of the structure', source: 'RakshaAI guide' },
]

const pyramidMath = [
  ['Gen 1', '6'],
  ['Gen 2', '36'],
  ['Gen 3', '216'],
  ['Gen 4', '1,296'],
  ['Gen 5', '7,776'],
  ['Gen 6', '46,656'],
  ['Gen 7', '2,79,936'],
  ['Gen 8', '16,79,616'],
]

const twoLaws = [
  {
    icon: Landmark,
    title: 'Prize Chit and Money Circulation Schemes Banning Act, 1978',
    body: 'Bans any scheme where participants pay based on promised returns from recruiting new participants. Applies to all MLM pyramid schemes in India. Penalty: up to 3 years imprisonment for organising the scheme.',
  },
  {
    icon: FileCheck2,
    title: 'Direct Selling Guidelines 2021 (MCA)',
    body: 'Issued by the Ministry of Corporate Affairs to define legal direct selling and explicitly prohibit joining fees, mandatory starter-pack purchases, and commissions paid primarily for recruitment rather than product sales.',
  },
  {
    icon: BadgeCheck,
    title: 'SEBI Act, 1992 - Collective Investment Schemes',
    body: 'If the scheme collects money from members with a promise of financial returns from recruitment, it may also qualify as an unregistered collective investment scheme - with penalties of up to 10 years imprisonment.',
  },
]

const schemeTypes = [
  {
    icon: HandCoins,
    title: 'Type 1 - Referral / Network Marketing Scheme',
    body: "A friend, family member or WhatsApp contact offers a 'business opportunity': earn a fixed amount per referral, more when your referrals recruit others. A joining fee (₹999-9,999) is collected upfront. Many such schemes carry no real product at all - income is generated entirely from new joining fees, dressed up in language like 'passive income' and 'financial freedom'.",
  },
  {
    icon: Layers3,
    title: 'Type 2 - Product Pyramid: Training Kits and Starter Packs',
    body: "A product is attached to the structure - supplements, cosmetics, cleaning products or digital courses - sold through a mandatory training kit (₹1,500-5,000) or starter pack (₹3,000-15,000). The decisive test: can the product be sold at a profit to people outside the scheme? If it is only ever bought by new recruits, the product is cover for the recruitment fee.",
  },
  {
    icon: MessageCircle,
    title: 'Type 3 - Digital / Online Business Opportunity',
    body: "Run entirely through WhatsApp groups and Telegram channels: referral links, a digital course or subscription with little real market demand, and commissions structured as 'team earnings' across an upline-downline structure. The earlier someone joined, the more they earn from the losses of everyone who joined after them.",
  },
]

const recruitmentStages = [
  {
    icon: UserRoundSearch,
    title: 'Stage 1 - The Trusted Source',
    body: 'Unlike most job scams, the pitch almost always comes from someone you already know and trust - a friend, relative or batch-mate who is genuinely excited and may have earned real early income. That trust is what makes the initial pitch far harder to reject than a cold message from a stranger.',
  },
  {
    icon: Video,
    title: 'Stage 2 - The Motivation Event',
    body: "A webinar, local meeting or video call with a 'successful leader' follows - professionally produced, with testimonials and lifestyle imagery. The success shown is often real, because it belongs to early joiners funded by everyone who joined later. What is never shown: the large majority who lost money.",
  },
  {
    icon: WalletCards,
    title: 'Stage 3 - The Joining Fee and Sunk-Cost Loop',
    body: "The joining fee is collected, then followed by upgrade tiers, larger starter packs and paid training events - each justified by the money already spent. The upline keeps motivation high ('don't quit just before the breakthrough') until recruitment dries up or finances run out.",
  },
]

const casePatterns = [
  {
    title: 'Network referral upgrade spiral',
    body: 'A trusted contact introduces a referral-only network with a modest joining fee. Early referral income covers a fraction of the cost; the recruiter is then encouraged into a sequence of paid upgrades before the downline stops growing entirely.',
  },
  {
    title: 'Product-pyramid kit escalation',
    body: 'A starter pack of overpriced products is followed by a second, larger "professional" kit and a third "premium" kit, each promising a higher commission tier. The products are never sold to anyone outside the recruitment chain.',
  },
  {
    title: 'Digital-course partnership',
    body: 'A "digital academy partnership" bundles a course worth a small fraction of its price with a mandatory partner-kit fee. Referrals dry up once the immediate friend circle is exhausted, well before any meaningful income materialises.',
  },
  {
    title: 'Pure-networking referral chain',
    body: 'A scheme explicitly built around referral income with no product at all recruits through family and friends. Members are steadily pushed toward a higher-tier "leader" upgrade to keep the income narrative alive.',
  },
  {
    title: 'Supplement MLM with mandatory autoship',
    body: 'A member of an established-looking supplement MLM is required to maintain a monthly autoship order alongside kit upgrades, while active downline recruitment consistently falls short of what each tier requires.',
  },
  {
    title: 'Coaching-plus-referral hybrid',
    body: 'A "work from home business coach" programme bundles a joining fee with a mentor-kit purchase and a fixed per-recruit promise. Refunds are refused on the basis that each purchase was a "voluntary business decision".',
  },
]

const redFlags = [
  ['Income comes from recruiting, not from product sales', 'If the income calculator requires 20 active recruits and the products cannot be sold at a profit to people outside the scheme, it is an illegal pyramid regardless of branding.'],
  ['A joining fee, training kit or starter pack is mandatory before you can earn', 'Legitimate direct selling companies do not charge joining fees. A required upfront purchase as a condition of membership is the actual revenue model.'],
  ['Your recruiter is your most enthusiastic promoter', 'MLM schemes recruit through trust networks. Your recruiter\'s success may be genuine because they joined earlier - it does not mean the structure can sustain everyone below them.'],
  ['Income claims focus on potential, not typical results', "'Top earners make lakhs a month' without disclosing what percentage of active members earn more than they spent. That figure is consistently under 5%."],
  ['Upgrading your tier requires further purchases', "Every move from 'Basic' to 'Premium' to 'National Leader' requires another payment, justified by higher commissions on referrals you still have to find."],
  ['Products are only ever sold to scheme members', 'Genuine direct selling products sell to non-members at a sensible price. If they are overpriced and bought only by new recruits, the product is cover for the recruitment fee.'],
  ['The company cannot be verified as a registered business', 'Search the company at mca.gov.in. No CIN, no filing history, or no IDSA listing at idsa.co.in for an MLM operator is a strong illegality signal.'],
  ['You are pressured to recruit friends and family first', "Any system that tells you to start with your 'warm network' rather than genuine product customers is using your relationships as its marketing channel."],
]

const verificationSteps = [
  {
    title: 'Verify the company on MCA21 and IDSA',
    body: 'Search the company name at mca.gov.in for its CIN, registered address, directors and annual filing history. Legitimate direct selling companies also carry a listing with the Indian Direct Selling Association at idsa.co.in. A company registered only weeks ago running a "revolutionary" opportunity is a strong warning sign.',
    icon: Building2,
  },
  {
    title: 'Apply the Direct Selling Guidelines 2021 test',
    body: 'Legal direct selling has no joining fee, no mandatory product purchase to join, income primarily from sales to end customers, and a buy-back guarantee of at least 90% on unused inventory. A scheme missing any of these, or requiring recruitment for income, fails the test.',
    icon: FileCheck2,
  },
  {
    title: 'Ask the five questions before paying anything',
    body: "Demand written answers: What percentage of active members earned more than they spent last year? Can I buy products without joining? Is there a fair buy-back if I exit? Is the company MCA21-registered and Direct Selling Guidelines-compliant? Will I be penalised for not recruiting? An evasive answer to any of these is a reason to walk away.",
    icon: UserRoundCheck,
  },
]

const recoverySteps = [
  {
    title: 'Stop all purchases and send a written exit notice',
    body: "Do not make any further upgrade, starter-pack or mandatory autoship purchases - each additional payment is an independent new loss, not protection for money already spent. Email the company: 'I am terminating my membership and request a refund of unused inventory under the Direct Selling Guidelines 2021 and the company's stated buy-back policy.'",
  },
  {
    title: 'Demand product buy-back under Direct Selling Guidelines 2021',
    body: 'Legitimate direct selling companies must buy back unsold inventory from exiting members at a minimum of 90% of the purchase price. Send a formal return request with receipts and inventory details - a refusal itself strengthens a complaint that the operation is illegal.',
  },
  {
    title: 'File at the consumer forum, NCH 1915, and SEBI if applicable',
    body: 'File at consumerhelpline.gov.in and call the National Consumer Helpline on 1915 - joining fees and undisclosed income claims are an unfair trade practice under the Consumer Protection Act, 2019. If the scheme promised financial returns from recruitment, also file with SEBI at sebi.gov.in.',
  },
  {
    title: 'File an FIR under the Prize Chit Act and IT Act',
    body: 'The Prize Chit and Money Circulation Schemes Banning Act, 1978 is the primary charge, alongside IT Act Section 66D where false income claims were promoted online and IPC Section 420 for fraud. File under the Companies Act, 2013 too if the operator is not properly incorporated.',
  },
  {
    title: 'Warn the friends and family you recruited',
    body: 'Tell anyone you recruited that the scheme is an illegal pyramid and share this page and the MCA21 verification results. Encourage them to exit and file their own complaint - coordinated complaints from multiple victims move enforcement faster for everyone involved.',
  },
]

const responseTimeline = [
  ['Immediately', 'Stop all further purchases. Send a written exit notice.'],
  ['Within 24 hrs', 'Demand product buy-back under Direct Selling Guidelines 2021. Collect every receipt.'],
  ['Within 72 hrs', 'cybercrime.gov.in, National Consumer Helpline 1915, consumer forum complaint.'],
  ['Within 7 days', 'SEBI complaint if returns were promised. FIR under the Prize Chit Act.'],
  ['Ongoing', 'Support recruited friends and family to exit and file their own complaints.'],
]

const statistics = [
  ['Job fraud complaints from MLM / pyramid schemes', '16%', 'NCRB 2025'],
  ['Estimated annual financial harm in India', '₹2,100 crore', 'MHA I4C 2025'],
  ['Average loss per participant', '₹14,000', 'MHA I4C 2025'],
  ['Participants who lose money', '95%+ (mathematical certainty)', 'RakshaAI guide'],
  ['Most common upfront cost', 'Joining fee + starter pack (₹5,000-20,000 combined)', 'cybercrime.gov.in 2025'],
  ['Victims recruited by a friend or family member', '78%', 'MHA I4C 2025'],
]

const comparisonRows = [
  {
    title: 'Task Scam / Like and Earn Fraud',
    body: 'A platform deposit unlocks more task earnings. This page involves a joining fee for a business with a referral-income structure - a different model entirely: task platform versus business opportunity.',
    href: '/scams/job-scams/task-scam',
  },
  {
    title: 'WhatsApp / Telegram Job Offer Scam',
    body: 'A fake work-from-home employment role (data entry, social media management). This page is a fake business opportunity framed as entrepreneurship, not employment.',
    href: '/scams/job-scams/whatsapp-job-scam',
  },
  {
    title: 'Advance Fee Job Registration Fraud',
    body: 'A registration or training fee for fake employment. This page is a joining fee for a fake business built on referral income - employment framing versus entrepreneur framing.',
    href: '/scams/job-scams/advance-fee-job-fraud',
  },
]

const relatedGuides = [
  {
    title: 'Task Scam / Like and Earn Fraud',
    body: 'A platform deposit unlocks more task earnings - a different mechanism from a recruitment-based business structure.',
    href: '/scams/job-scams/task-scam',
  },
  {
    title: 'WhatsApp & Telegram Job Offer Scam',
    body: 'A fake work-from-home employment role with no genuine hiring process, rather than a recruitment-based business pitch.',
    href: '/scams/job-scams/whatsapp-job-scam',
  },
  {
    title: 'Advance Fee Job Registration Fraud',
    body: 'A registration or training fee for fake employment, framed as a job rather than a business opportunity.',
    href: '/scams/job-scams/advance-fee-job-fraud',
  },
  {
    title: 'Job Scams India Hub',
    body: 'Compare every major job-fraud mechanism active in India today.',
    href: '/scams/job-scams',
  },
]

const tools = [
  {
    icon: Phone,
    title: 'Phone Number Checker',
    body: "Check the person who invited you into the 'business opportunity' before you engage further.",
    href: '/phone-number-checker',
    label: 'Check number',
  },
  {
    icon: MonitorSmartphone,
    title: 'Website Safety Checker',
    body: 'Verify any MLM or business-opportunity website before paying a joining fee.',
    href: '/website-safety-checker',
    label: 'Check company',
  },
  {
    icon: Wallet,
    title: 'UPI ID Checker',
    body: 'Check whether the joining-fee UPI ID has already been reported before you pay.',
    href: '/upi-id-checker',
    label: 'Check UPI ID',
  },
  {
    icon: ShieldAlert,
    title: 'Report a Scam',
    body: 'Report the pyramid scheme before more friends and family are recruited.',
    report: true,
    label: 'Report scheme',
  },
]

const FAQ_ITEMS = [
  {
    question: 'How does an MLM pyramid scheme work in India and how is it different from a legitimate business?',
    answer:
      "An MLM pyramid scheme promises income from recruiting new members - a fixed amount per person you refer, more for everyone your referral recruits - collected through a joining fee (₹999-9,999), a training kit or a starter pack paid upfront. Income comes from recruitment fees paid by new members, not from selling real products to genuine customers. The structure requires exponential growth that is mathematically impossible past a handful of generations, so 95%+ of participants lose money. A genuine business, by contrast, earns from selling products or services to customers who are not also distributors.",
  },
  {
    question: 'Is MLM legal in India? What is the difference between legal direct selling and a pyramid scheme?',
    answer:
      'Legal direct selling is permitted under the Direct Selling Guidelines 2021 (MCA). Illegal pyramid schemes are banned under the Prize Chit and Money Circulation Schemes Banning Act, 1978. The legal distinction: legitimate direct selling has no joining fee, no mandatory product purchase, and income primarily from product sales to non-members. An illegal pyramid requires a joining fee, a mandatory starter pack, and income primarily from recruiting new paying members. The decisive test: can the products be sold profitably to people who are not joining the business? If not, it is an illegal pyramid scheme regardless of what the company calls itself.',
  },
  {
    question: 'How do I identify an MLM pyramid scheme in India?',
    answer:
      'Look for: income coming primarily from recruiting rather than product sales; a mandatory joining fee or starter pack; overpriced products sold only to new recruits; pressure to recruit friends and family first; paid tier upgrades; income claims that highlight top earners without disclosing the failure rate; a company missing from MCA21 or IDSA; and no product buy-back guarantee on exit. Three or more of these together indicate an illegal pyramid scheme under the Prize Chit Act.',
  },
  {
    question: 'Why do so many people lose money in MLM pyramid schemes despite seeing success stories?',
    answer:
      "Only the earliest joiners in any pyramid structure can realistically earn more than they spent - everyone who joins later is mathematically unable to find enough new recruits before the pool of willing participants runs out. The success stories shown at recruitment events are often genuine, but they belong to the top of the pyramid, funded by the losses of everyone below. An upline's real success does not make it replicable for a new joiner.",
  },
  {
    question: 'What happens when a pyramid scheme collapses in India?',
    answer:
      "When new recruitment slows, which it inevitably does, commission payments to lower-level members stop. The company may close suddenly, launch a new product line or compensation plan requiring further purchases to 'restart' earnings, or simply encourage members to stay the course while the organisers exit with collected fees. The majority of participants, at the bottom of the structure, lose their joining fees, kit costs, and the time and social capital spent recruiting. Complaints filed collectively by multiple victims tend to see the fastest enforcement action.",
  },
  {
    question: 'How can I get my money back from an MLM pyramid scheme in India?',
    answer:
      'Stop all further purchases immediately. Send a formal exit notice and demand a product buy-back at 90% of the purchase price under the Direct Selling Guidelines 2021. If refused, file at cybercrime.gov.in, then a consumer forum complaint at consumerhelpline.gov.in under the Consumer Protection Act, 2019 for misleading income claims. Call the National Consumer Helpline on 1915. File with SEBI if financial returns were promised, and an FIR under the Prize Chit and Money Circulation Schemes Banning Act, 1978. Coordinating with other victims improves outcomes across every channel.',
  },
  {
    question: 'How do I report an MLM pyramid scheme to Indian authorities?',
    answer:
      'File at cybercrime.gov.in under Online Job Fraud / Pyramid Scheme. File a consumer forum complaint at consumerhelpline.gov.in and call the National Consumer Helpline on 1915. File with SEBI at sebi.gov.in if investment-style returns were promised, and notify the Ministry of Corporate Affairs at mca.gov.in for a Direct Selling Guidelines violation. File an FIR at your local police station under the Prize Chit and Money Circulation Schemes Banning Act, 1978. Report the scheme to RakshaAI to warn other Indians before more people are recruited.',
  },
  {
    question: 'What should I look for in a legitimate direct selling company in India?',
    answer:
      'No joining fee. No mandatory product purchase to earn commissions. Products with genuine market demand, priced competitively against retail, and sellable at a profit to people outside the business. A buy-back guarantee of at least 90% on unused inventory. Registration on MCA21 and a listing with the Indian Direct Selling Association at idsa.co.in. An honest income-disclosure statement showing the realistic earnings distribution, not just top-earner claims. And the ability to buy products as a customer without joining the business at all.',
  },
  {
    question: 'What India laws apply to MLM pyramid schemes?',
    answer:
      'The Prize Chit and Money Circulation Schemes Banning Act, 1978 is the primary law, carrying up to 3 years imprisonment for organising such a scheme. The Direct Selling Guidelines 2021 (MCA) define legal direct selling, and non-compliance carries criminal liability. A scheme promising financial returns from recruitment may also qualify as an unregistered collective investment scheme under the SEBI Act, 1992, carrying up to 10 years imprisonment. IT Act Section 66D applies where false income claims were promoted online, IPC Section 420 covers the underlying fraud, and the Companies Act, 2013 applies if the operator is not properly incorporated.',
  },
  {
    question: 'My friend recruited me into an MLM scheme and I lost money. Should I report them?',
    answer:
      "The friend who recruited you was almost certainly a victim too - they joined earlier, may have earned genuine early income, and likely believed in the opportunity. Report the scheme itself - the company and its organisers - rather than your friend personally. Let them know the structure is illegal under the Prize Chit Act and encourage them to exit and file their own complaint. In every case, the operators who designed and profit from the scheme are the primary target, not the members who were recruited into it.",
  },
]

const schemas = [
  webPageSchema({ name: TITLE, description: DESCRIPTION, url: PAGE_PATH }),
  articleSchema({
    headline: 'MLM & Pyramid Scheme Scam India 2026 - Referral Earnings Trap, Joining Fees & Why the Math Always Collapses',
    description: DESCRIPTION,
    url: PAGE_PATH,
    image: HERO_IMAGE,
    datePublished: '2026-08-16',
    dateModified: '2026-08-16',
    author: organizationRef(),
    section: 'Job Scams',
    keywords: [
      'mlm scam india',
      'pyramid scheme india',
      'referral earning scam india',
      'work from home mlm scam india',
      'network marketing scam india',
      'joining fee business opportunity scam india',
      'how to identify mlm pyramid scheme india',
      'is mlm legal in india',
      'pyramid scheme vs direct selling india',
      'Prize Chit Money Circulation Schemes Act india',
      'Direct Selling Guidelines 2021 india MCA',
    ],
  }),
  faqPageSchema(FAQ_ITEMS),
  breadcrumbListSchema([
    { name: 'Home', url: '/' },
    { name: 'Scam Categories', url: '/scams' },
    { name: 'Job Scams India', url: '/scams/job-scams' },
    { name: 'MLM / Pyramid Scheme Scam', url: PAGE_PATH },
  ]),
  {
    '@context': 'https://schema.org' as const,
    '@type': 'HowTo',
    '@id': `${CANONICAL}#how-to-identify`,
    name: 'How to identify an MLM pyramid scheme in India',
    description: 'Three checks to tell a legitimate direct selling company from an illegal pyramid scheme before paying any joining fee.',
    totalTime: 'PT5M',
    step: verificationSteps.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.title, text: step.body })),
  },
]

const sectionTitleClass = 'text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl'
const sectionIntroClass = 'mt-4 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300'

export default function MlmPyramidScamPage() {
  return (
    <DefaultLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schemas) }} />

      <article className="bg-white dark:bg-slate-950">
        <header className="relative overflow-hidden border-b border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-blue-50 px-4 py-14 dark:border-indigo-950 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/50 sm:py-20">
          <div aria-hidden="true" className="absolute -right-24 -top-28 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl" />
          <div aria-hidden="true" className="absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-indigo-300/20 blur-3xl" />
          <div className="relative mx-auto max-w-6xl">
            <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <Link className="hover:text-indigo-700 dark:hover:text-indigo-300" href="/">Home</Link><span aria-hidden="true">›</span>
              <Link className="hover:text-indigo-700 dark:hover:text-indigo-300" href="/scams">Scam Categories</Link><span aria-hidden="true">›</span>
              <Link className="hover:text-indigo-700 dark:hover:text-indigo-300" href="/scams/job-scams">Job Scams India</Link><span aria-hidden="true">›</span>
              <span className="text-slate-800 dark:text-slate-200">MLM / Pyramid Scheme Scam</span>
            </nav>

            <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-indigo-800 shadow-sm dark:border-indigo-800 dark:bg-slate-900/70 dark:text-blue-300"><Users className="h-4 w-4" /> Referral Earnings &amp; Pyramid Structure Guide</div>
                <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
                  MLM &amp; Pyramid Scheme Scam India 2026
                  <span className="mt-2 block bg-gradient-to-r from-indigo-700 to-blue-700 bg-clip-text text-transparent dark:from-indigo-300 dark:to-blue-300">Referral Earnings Trap &amp; Why the Math Always Collapses</span>
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                  A referral earnings scam offers a work-from-home &lsquo;business opportunity&rsquo; that pays for recruiting others - a fixed amount per referral, more for everyone your referral recruits. Joining requires a fee, a training kit or a starter pack, and income only appears if you keep recruiting new paying members. This is a classic pyramid structure, and it is mathematically guaranteed to collapse.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link href="/website-safety-checker" className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-700 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-900/15 transition hover:-translate-y-0.5 hover:bg-indigo-800"><MonitorSmartphone className="h-5 w-5" /> Check company <ArrowRight className="h-4 w-4" /></Link>
                  <Link href="/phone-number-checker" className="inline-flex items-center justify-center gap-2 rounded-xl border border-indigo-200 bg-white px-6 py-3.5 text-sm font-bold text-indigo-800 shadow-sm transition hover:-translate-y-0.5 hover:bg-indigo-50 dark:border-indigo-800 dark:bg-slate-900 dark:text-indigo-300 dark:hover:bg-slate-800"><Phone className="h-5 w-5" /> Check recruiter number</Link>
                </div>
                <p className="mt-4 text-xs font-medium text-slate-500 dark:text-slate-400">Free · Domain age + fraud database · Check MCA21 registration · Built for India</p>
              </div>
              <figure className="overflow-hidden rounded-3xl border border-indigo-200 bg-white shadow-2xl shadow-indigo-950/10 dark:border-indigo-900 dark:bg-slate-900"><Image src={HERO_IMAGE} alt="Referral earnings and MLM pyramid scheme WhatsApp business opportunity warning for India" width={1000} height={562} className="aspect-[16/9] w-full object-cover" priority /><figcaption className="px-5 py-4 text-xs leading-5 text-slate-500 dark:text-slate-400">&lsquo;Earn ₹500 per referral, ₹2,000 per team member&rsquo; is a pyramid pitch, not a job offer.</figcaption></figure>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{quickFacts.map((fact) => <div key={fact.label} className="rounded-2xl border border-white/80 bg-white/90 p-5 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/85"><p className="text-2xl font-black text-indigo-700 dark:text-indigo-300">{fact.value}</p><p className="mt-2 text-sm leading-5 text-slate-700 dark:text-slate-300">{fact.label}</p><p className="mt-2 text-[11px] font-bold uppercase tracking-wide text-slate-400">{fact.source}</p></div>)}</div>
          </div>
        </header>

        <div className="border-b border-red-200 bg-red-50 px-4 py-5 dark:border-red-900 dark:bg-red-950/30"><div className="mx-auto flex max-w-6xl items-start gap-3 text-sm leading-6 text-red-950 dark:text-red-100"><TriangleAlert className="mt-0.5 h-5 w-5 shrink-0 text-red-700 dark:text-red-400" /><p><strong>The one rule:</strong> any scheme where income comes primarily from recruiting new members - not from selling real products - is a pyramid scheme under Indian law, and it always collapses.</p></div></div>

        <div className="mx-auto max-w-6xl space-y-24 px-4 py-16 sm:px-6 lg:px-8">
          <section aria-labelledby="math-heading" className="rounded-3xl bg-slate-950 px-6 py-10 text-white sm:px-10 sm:py-12">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-300">The mathematical proof</p>
            <h2 id="math-heading" className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Why Referral Income Schemes Always Collapse</h2>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300">Assume each member recruits just 6 people. The pyramid must grow exponentially to keep paying earlier members - and the recruitment pool exhausts long before everyone can win.</p>
            <div className="mt-9 grid grid-cols-4 gap-3 sm:grid-cols-8">{pyramidMath.map(([gen, count]) => <div key={gen} className="rounded-xl border border-slate-800 bg-white/5 p-3 text-center"><p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">{gen}</p><p className="mt-1 text-sm font-black text-blue-300 sm:text-base">{count}</p></div>)}</div>
            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-blue-800/60 bg-blue-500/10 p-5 text-sm leading-6 text-blue-100"><TrendingDown className="mt-0.5 h-5 w-5 shrink-0 text-blue-300" /><p>By Generation 10, the scheme would need over 6 crore members - more than a third of India&rsquo;s working population. By Generation 13, more people than exist on Earth. When recruitment stops, payments to everyone below the current top stop too - and the majority, who are always at the bottom, lose their joining fees, kit costs and starter-pack purchases.</p></div>
          </section>

          <section aria-labelledby="laws-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-indigo-700 dark:text-indigo-400">Why this is illegal, not just risky</p>
            <h2 id="laws-heading" className={`${sectionTitleClass} mt-3`}>The India Laws That Make Pyramid Schemes Illegal</h2>
            <div className="mt-9 grid gap-5 md:grid-cols-3">{twoLaws.map(({ icon: Icon, title, body }) => <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300"><Icon className="h-6 w-6" /></div><h3 className="mt-5 text-base font-bold text-slate-950 dark:text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{body}</p></article>)}</div>
            <div className="mt-6 rounded-2xl border border-indigo-200 bg-indigo-50 p-6 text-sm leading-6 text-slate-700 dark:border-indigo-900 dark:bg-indigo-950/30 dark:text-slate-300"><strong className="text-indigo-900 dark:text-indigo-200">The test:</strong> if your income requires recruiting new paying members - not selling products to people outside the scheme - it is an illegal pyramid, whatever the company calls it.</div>
          </section>

          <section aria-labelledby="types-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-indigo-700 dark:text-indigo-400">Three variants</p>
            <h2 id="types-heading" className={`${sectionTitleClass} mt-3`}>3 Types of MLM Pyramid Scheme Active in India</h2>
            <p className={sectionIntroClass}>Each variant uses a different framing to make the same recruitment-funded structure look like a legitimate business.</p>
            <div className="mt-9 grid gap-5 md:grid-cols-3">{schemeTypes.map(({ icon: Icon, title, body }) => <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300"><Icon className="h-6 w-6" /></div><h3 className="mt-5 text-base font-bold text-slate-950 dark:text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{body}</p></article>)}</div>
          </section>

          <section aria-labelledby="recruit-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-indigo-700 dark:text-indigo-400">Harder to resist than a stranger&rsquo;s message</p>
            <h2 id="recruit-heading" className={`${sectionTitleClass} mt-3`}>How the Scam Recruits and Traps Victims</h2>
            <div className="relative mt-9">
              <div className="hidden sm:absolute sm:left-[27px] sm:top-10 sm:bottom-10 sm:block sm:w-0.5 sm:bg-gradient-to-b sm:from-indigo-300 sm:via-blue-300 sm:to-indigo-300 dark:sm:from-indigo-800 dark:sm:via-blue-800 dark:sm:to-indigo-800" />
              <div className="space-y-5">{recruitmentStages.map(({ icon: Icon, title, body }) => <div key={title} className="relative flex gap-6 sm:items-start"><div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-600 text-white shadow-lg"><Icon className="h-6 w-6" /></div><div className="flex-1 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"><h3 className="font-bold text-slate-950 dark:text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{body}</p></div></div>)}</div>
            </div>
          </section>

          <section aria-labelledby="patterns-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-indigo-700 dark:text-indigo-400">Reported case patterns</p>
            <h2 id="patterns-heading" className={`${sectionTitleClass} mt-3`}>How the Scam Plays Out - India Case Patterns 2024-2025</h2>
            <p className={sectionIntroClass}>These are composite patterns drawn from commonly reported MLM pyramid cases in India, not individual verified incidents.</p>
            <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{casePatterns.map((item, index) => <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"><div className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-100 text-sm font-black text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300">{index + 1}</span><h3 className="text-sm font-bold text-slate-950 dark:text-white">{item.title}</h3></div><p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.body}</p></article>)}</div>
          </section>

          <section aria-labelledby="red-flags-heading" className="rounded-3xl bg-gradient-to-br from-red-950 to-indigo-950 px-6 py-10 text-white sm:px-10 sm:py-12">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-red-300">Before paying any joining fee</p>
            <h2 id="red-flags-heading" className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">8 Red Flags of an MLM Pyramid Scheme</h2>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-red-100/85">If three or more of these apply, the scheme is a pyramid.</p>
            <ol className="mt-9 grid gap-4 md:grid-cols-2">{redFlags.map(([title, body], index) => <li key={title} className="flex gap-4 rounded-2xl border border-red-800/70 bg-black/15 p-5"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-sm font-black text-red-900">{index + 1}</span><div><h3 className="font-bold">{title}</h3><p className="mt-1 text-sm leading-6 text-red-100/85">{body}</p></div></li>)}</ol>
          </section>

          <section aria-labelledby="legal-heading" className="rounded-3xl border border-slate-200 dark:border-slate-800">
            <div className="p-7 sm:p-9"><p className="text-xs font-black uppercase tracking-[0.18em] text-indigo-700 dark:text-indigo-400">The definitive test</p><h2 id="legal-heading" className="mt-3 text-2xl font-black text-slate-950 dark:text-white">Legal Direct Selling vs Illegal Pyramid Scheme</h2><p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">Can the products be sold at a profit to people who are not members of the scheme? If yes, it may be legitimate. If products are only ever bought by new recruits, it is a pyramid.</p></div>
            <div className="grid border-t border-slate-200 dark:border-slate-800 sm:grid-cols-2">
              <div className="border-b border-slate-200 p-7 dark:border-slate-800 sm:border-b-0 sm:border-r sm:p-9"><div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400"><CheckCircle2 className="h-5 w-5" /><p className="text-xs font-black uppercase tracking-[0.14em]">Legal direct selling</p></div><ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700 dark:text-slate-300">{['No joining fee', 'No mandatory product purchase to join', 'Income primarily from sales to end customers', 'Can exit and receive a refund of unused products', 'Buy-back guarantee at 90% of purchase price'].map((point) => <li key={point} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />{point}</li>)}</ul></div>
              <div className="p-7 sm:p-9"><div className="flex items-center gap-2 text-red-700 dark:text-red-400"><XCircle className="h-5 w-5" /><p className="text-xs font-black uppercase tracking-[0.14em]">Illegal pyramid scheme</p></div><ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700 dark:text-slate-300">{['Joining fee required', 'Mandatory starter pack or training kit', 'Income primarily from recruitment commissions', 'No product buy-back guarantee', 'Pressure to recruit friends and family'].map((point) => <li key={point} className="flex items-start gap-2"><XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />{point}</li>)}</ul></div>
            </div>
            <p className="border-t border-slate-200 p-6 text-xs leading-5 text-slate-500 dark:border-slate-800 dark:text-slate-400">Check IDSA membership at idsa.co.in - the Indian Direct Selling Association lists legitimate direct selling companies operating in India with verified compliance.</p>
          </section>

          <section aria-labelledby="verify-heading">
            <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-start">
              <div><p className="text-xs font-black uppercase tracking-[0.18em] text-indigo-700 dark:text-indigo-400">Three checks before joining</p><h2 id="verify-heading" className={`${sectionTitleClass} mt-3`}>How to Identify an MLM Pyramid Scheme</h2><ol className="mt-9 space-y-4">{verificationSteps.map(({ title, body, icon: Icon }, index) => <li key={title} className="grid gap-4 rounded-2xl border border-slate-200 p-5 dark:border-slate-800 sm:grid-cols-[48px_1fr] sm:items-start"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300"><Icon className="h-5 w-5" /></div><div><p className="text-xs font-black uppercase tracking-wide text-indigo-700 dark:text-indigo-400">Step {index + 1}</p><h3 className="mt-1 font-bold text-slate-950 dark:text-white">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{body}</p></div></li>)}</ol></div>
              <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg dark:border-slate-800 dark:bg-slate-900"><Image src="/blog/blog33/job-scam-types.jpg" alt="Checklist for verifying a business opportunity before paying a joining fee in India" width={800} height={999} className="h-auto w-full object-cover" /><figcaption className="px-5 py-4 text-xs leading-5 text-slate-500 dark:text-slate-400">Verify MCA21 registration before you pay any joining fee.</figcaption></figure>
            </div>
          </section>

          <section aria-labelledby="recovery-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-red-700 dark:text-red-400">If you already joined and paid</p>
            <h2 id="recovery-heading" className={`${sectionTitleClass} mt-3`}>Recovery Guide - How to Exit and Get Your Money Back</h2>
            <p className={sectionIntroClass}>Stop the sunk-cost loop first. Every additional purchase is a new, independent loss - not protection for money already spent.</p>
            <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]"><ol className="space-y-4">{recoverySteps.map((step, index) => <li key={step.title} className="flex gap-4 rounded-2xl border border-slate-200 p-5 dark:border-slate-800"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-red-100 text-sm font-black text-red-800 dark:bg-red-950 dark:text-red-300">{index + 1}</span><div><h3 className="font-bold text-slate-950 dark:text-white">{step.title}</h3><p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{step.body}</p></div></li>)}</ol><aside className="h-fit rounded-2xl bg-slate-950 p-6 text-white dark:bg-black"><div className="flex items-center gap-2 text-blue-300"><Clock3 className="h-5 w-5" /><p className="text-xs font-black uppercase tracking-[0.14em]">Response timeline</p></div><div className="mt-6 space-y-5">{responseTimeline.map(([time, action]) => <div key={time} className="border-l-2 border-blue-400 pl-4"><p className="font-bold text-blue-300">{time}</p><p className="mt-1 text-sm leading-5 text-slate-300">{action}</p></div>)}</div></aside></div>
            <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-2xl border border-red-200 bg-red-50 p-6 dark:border-red-900 dark:bg-red-950/30 sm:flex-row sm:items-center"><div><h3 className="text-lg font-black text-red-950 dark:text-red-100">Report the scheme before more people are recruited</h3><p className="mt-1 text-sm text-red-800 dark:text-red-200">Keep receipts, the company name and website, and every payment detail ready.</p></div><ReportScamButton className="inline-flex items-center gap-2 rounded-xl bg-red-700 px-5 py-3 text-sm font-bold text-white hover:bg-red-800"><ShieldAlert className="h-4 w-4" /> Report scheme <ArrowRight className="h-4 w-4" /></ReportScamButton></div>
          </section>

          <section aria-labelledby="stats-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-indigo-700 dark:text-indigo-400">Scale of the problem</p>
            <h2 id="stats-heading" className={`${sectionTitleClass} mt-3`}>MLM Pyramid Scheme Statistics India 2025-2026</h2>
            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800"><div className="overflow-x-auto"><table className="w-full min-w-[680px] text-left text-sm"><thead className="bg-slate-950 text-white dark:bg-black"><tr><th className="px-5 py-4">Metric</th><th className="px-5 py-4">Data</th><th className="px-5 py-4">Source</th></tr></thead><tbody className="divide-y divide-slate-200 dark:divide-slate-800">{statistics.map(([metric, data, source], index) => <tr key={metric} className={index % 2 === 0 ? 'bg-white dark:bg-slate-950' : 'bg-slate-50 dark:bg-slate-900'}><th scope="row" className="px-5 py-4 font-semibold text-slate-950 dark:text-white">{metric}</th><td className="px-5 py-4 font-bold text-indigo-700 dark:text-indigo-300">{data}</td><td className="px-5 py-4 text-slate-500 dark:text-slate-400">{source}</td></tr>)}</tbody></table></div></div>
            <p className="mt-4 flex items-start gap-2 text-xs leading-5 text-slate-500 dark:text-slate-400"><Percent className="mt-0.5 h-4 w-4 shrink-0" />78% of victims were recruited by someone they knew and trusted - which is exactly why MLM pyramid schemes are so hard to reject and so rarely reported.</p>
          </section>

          <section aria-labelledby="compare-heading"><p className="text-xs font-black uppercase tracking-[0.18em] text-indigo-700 dark:text-indigo-400">Don&rsquo;t confuse the mechanisms</p><h2 id="compare-heading" className={`${sectionTitleClass} mt-3`}>How MLM Pyramid Scams Differ From Other Job Scams</h2><div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800"><div className="overflow-x-auto"><table className="w-full min-w-[680px] text-left text-sm"><thead className="bg-slate-950 text-white dark:bg-black"><tr><th className="px-5 py-4">Related scam</th><th className="px-5 py-4">Key distinction</th><th className="px-5 py-4">Full guide</th></tr></thead><tbody className="divide-y divide-slate-200 dark:divide-slate-800">{comparisonRows.map((row, index) => <tr key={row.title} className={index % 2 === 0 ? 'bg-white dark:bg-slate-950' : 'bg-slate-50 dark:bg-slate-900'}><th scope="row" className="px-5 py-4 font-semibold text-slate-950 dark:text-white">{row.title}</th><td className="px-5 py-4 text-slate-600 dark:text-slate-300">{row.body}</td><td className="px-5 py-4"><Link href={row.href} className="inline-flex items-center gap-1 font-bold text-indigo-700 hover:underline dark:text-indigo-300">Read guide <ArrowRight className="h-3.5 w-3.5" /></Link></td></tr>)}</tbody></table></div></div></section>

          <section aria-labelledby="related-heading"><p className="text-xs font-black uppercase tracking-[0.18em] text-indigo-700 dark:text-indigo-400">Related job-scam guides</p><h2 id="related-heading" className={`${sectionTitleClass} mt-3`}>Keep the Mechanism Clear</h2><div className="mt-8 grid gap-4 sm:grid-cols-2">{relatedGuides.map((item) => <Link key={item.href} href={item.href} className="group rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-md dark:border-slate-800 dark:hover:border-indigo-800"><div className="flex items-start justify-between gap-4"><div><h3 className="font-bold text-slate-950 dark:text-white">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.body}</p></div><ArrowRight className="mt-1 h-5 w-5 shrink-0 text-indigo-700 transition group-hover:translate-x-1 dark:text-indigo-400" /></div></Link>)}</div></section>

          <section aria-labelledby="tools-heading" className="rounded-3xl bg-gradient-to-br from-indigo-950 to-slate-950 px-6 py-10 text-white sm:px-10 sm:py-12"><p className="text-xs font-black uppercase tracking-[0.18em] text-blue-300">Free RakshaAI checks</p><h2 id="tools-heading" className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Verify Any Business Opportunity Before You Pay</h2><div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{tools.map(({ icon: Icon, title, body, href, report, label }) => report ? <div key={title} className="rounded-2xl border border-indigo-800 bg-white/5 p-6"><Icon className="h-7 w-7 text-blue-300" /><h3 className="mt-4 font-bold">{title}</h3><p className="mt-2 min-h-16 text-sm leading-6 text-slate-300">{body}</p><ReportScamButton className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-300 hover:text-blue-200">{label} <ArrowRight className="h-4 w-4" /></ReportScamButton></div> : <Link key={href} href={href!} className="group rounded-2xl border border-indigo-800 bg-white/5 p-6 hover:bg-white/10"><Icon className="h-7 w-7 text-blue-300" /><h3 className="mt-4 font-bold">{title}</h3><p className="mt-2 min-h-16 text-sm leading-6 text-slate-300">{body}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-300">{label} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span></Link>)}</div></section>

          <section aria-labelledby="alerts-heading" className="rounded-3xl border border-blue-200 bg-blue-50 p-7 dark:border-blue-900 dark:bg-blue-950/30 sm:p-10"><div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center"><div><div className="flex items-center gap-2 text-blue-800 dark:text-blue-300"><MonitorSmartphone className="h-5 w-5" /><p className="text-xs font-black uppercase tracking-[0.16em]">MLM &amp; pyramid alerts</p></div><h2 id="alerts-heading" className="mt-3 text-2xl font-black text-slate-950 dark:text-white">Check current scam warnings</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-slate-700 dark:text-slate-300">New referral schemes and rebranded pyramids appear constantly. Check the live alert feed rather than relying on any static list of company names.</p></div><Link href="/scam-alerts" className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-blue-800 px-5 py-3 text-sm font-bold text-white hover:bg-blue-900">View scam alerts <ArrowRight className="h-4 w-4" /></Link></div></section>

          <section aria-labelledby="faq-heading" className="mx-auto max-w-4xl"><div className="text-center"><p className="text-xs font-black uppercase tracking-[0.18em] text-indigo-700 dark:text-indigo-400">Quick answers</p><h2 id="faq-heading" className={`${sectionTitleClass} mt-3`}>Frequently Asked Questions About MLM and Pyramid Schemes</h2></div><div className="mt-9 space-y-3">{FAQ_ITEMS.map((item) => <details key={item.question} className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-indigo-300 open:shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:open:border-indigo-800"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold text-slate-950 dark:text-white">{item.question}<span aria-hidden="true" className="text-xl text-indigo-700 transition group-open:rotate-45 dark:text-indigo-400">+</span></summary><p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-6 text-slate-600 dark:border-slate-800 dark:text-slate-300">{item.answer}</p></details>)}</div></section>

          <section className="rounded-3xl border border-slate-200 bg-slate-50 p-7 dark:border-slate-800 dark:bg-slate-900 sm:p-10"><div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center"><div><p className="text-xs font-black uppercase tracking-[0.16em] text-indigo-700 dark:text-indigo-400">Remember</p><h2 className="mt-2 max-w-2xl text-2xl font-black text-slate-950 dark:text-white">If income needs recruits more than customers, the math has already decided who loses.</h2><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">Verify the company on MCA21 and ask the five questions before you pay any joining fee.</p></div><Link href="/website-safety-checker" className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-indigo-700 px-5 py-3 text-sm font-bold text-white hover:bg-indigo-800"><MonitorSmartphone className="h-4 w-4" /> Check company</Link></div></section>

          <RelatedTopics currentPath={PAGE_PATH} clusterId="job-scams" />
        </div>
      </article>
    </DefaultLayout>
  )
}
