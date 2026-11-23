import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Ban,
  Clock3,
  ExternalLink,
  FileWarning,
  Globe2,
  Landmark,
  Lock,
  MonitorSmartphone,
  Percent,
  Phone,
  Plane,
  Shield,
  ShieldAlert,
  Siren,
  TriangleAlert,
  Truck,
  UserX,
  Video,
} from 'lucide-react'
import DefaultLayout from '@/components/DefaultLayout'
import RelatedTopics from '@/components/RelatedTopics'
import ReportScamButton from '@/components/ReportScamButton'
import {
  articleSchema,
  breadcrumbListSchema,
  definedTermSchema,
  faqPageSchema,
  jsonLd,
  organizationRef,
  webPageSchema,
} from '@/lib/seo/schema'

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://rakshaai.co').replace(/\/$/, '')
const PAGE_PATH = '/scams/romance-scams/army-officer-scam'
const CANONICAL = `${SITE_URL}${PAGE_PATH}`
const HERO_IMAGE = '/blog/romance-scam-india/romance-scam-hero.jpg'
const TITLE = 'Army Officer Romance Scam India 2026 - Fake Soldiers & ₹2.8L Average Loss'
const DESCRIPTION =
  'Fake Indian Army or UN peacekeeper. Weeks of trust-build. Then leave travel fee, DSOP fund, medical emergency, or gold shipment. Avg ₹2.8L. Impersonation law, official verification steps & full India recovery.'

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
    images: [{ url: HERO_IMAGE, width: 1200, height: 675, alt: 'Fake Indian Army officer romance scam warning for India' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [HERO_IMAGE] },
  other: { 'geo.region': 'IN', language: 'en-IN' },
}

const quickFacts = [
  { value: '₹2.8L', label: 'Average loss per military romance scam victim in India', source: 'NCRB 2025' },
  { value: '4×', label: 'Higher than the general romance-scam average loss of ₹68,000', source: 'NCRB 2025' },
  { value: '12,000+', label: 'Army officer impersonation romance complaints, 2024-25', source: 'MHA I4C 2025' },
  { value: '3-4×', label: 'Estimated unreported cases - shame and respect for the Army suppress reporting', source: 'MHA I4C 2025' },
]

const lawCards = [
  {
    icon: FileWarning,
    title: 'Wearing the uniform of the armed forces',
    body: 'Using a soldier’s garb or token with intent to be believed a member of the armed forces is a specific offence — historically IPC Section 140, now Section 168 of the Bharatiya Nyaya Sanhita (BNS), 2023. A stolen uniform photo used to build a fake identity falls squarely within it.',
  },
  {
    icon: UserX,
    title: 'Cheating by personation and fraud',
    body: 'Presenting as a military officer to defraud someone is cheating by personation — formerly IPC Section 416, now BNS Section 319(1) — alongside fraud and cheating, formerly IPC Section 420, now BNS Section 318(4).',
  },
  {
    icon: Lock,
    title: 'Identity theft and impersonation online',
    body: 'IT Act Section 66C covers identity theft — using a real officer’s stolen photographs and identity without consent — and Section 66D covers cheating by impersonation using a computer resource, which is the fake profile itself. Both carry penalties of up to three years’ imprisonment.',
  },
]

const moneyRequestTypes = [
  {
    icon: Plane,
    title: 'Leave Travel Advance',
    range: '₹40,000 – 1,50,000',
    body: 'The officer’s leave is ‘finally approved’ but his official travel advance is delayed by paperwork. He needs funds sent to a personal UPI ID or ‘travel agent’ to book tickets home, promising repayment on arrival. He never arrives, or a second delay demands a second transfer.',
  },
  {
    icon: Landmark,
    title: 'DSOP Fund Release Fee',
    range: '₹80,000 – 2,00,000',
    body: 'The Defence Services Officers Provident Fund is a genuine benefit — which is exactly why this framing is so credible. The scammer claims a large DSOP payout is ready but needs a ‘civilian guarantor transfer’ to unlock government processing. Real DSOP releases never require a civilian payment.',
  },
  {
    icon: Siren,
    title: 'Medical Emergency Abroad',
    range: '₹60,000 – 3,00,000',
    body: 'A sudden surgery, accident or illness during deployment, with military insurance ‘delayed’ or ‘not accepted’ locally. The combination of life-threatening urgency and an existing emotional relationship makes this the highest-success framing for the scammer.',
  },
  {
    icon: Truck,
    title: 'Gold or Package Shipment Fee',
    range: '₹30,000 – 1,50,000',
    body: 'Gold, jewellery or a ‘diplomatic package’ accumulated during deployment needs a customs or clearance fee before it can be shipped home. A first payment is always followed by a second ‘tax’ or ‘security deposit’ — the package never arrives.',
  },
]

const trustBuildStages = [
  ['Stage 1 - Contact (Weeks 1-2)', 'A profile photographed in uniform sends a connection request on Facebook or follows on Instagram. Messages are respectful and formal, using the language of duty, honour and sacrifice.', 'Recently created profile, thin post history, professional but generic photos that reverse-image search elsewhere.'],
  ['Stage 2 - Deep Bond (Weeks 3-10)', 'Daily messages, shared ‘deployment hardship’ stories, a widowed-parent backstory, and talk of retirement and meeting your family.', 'The relationship escalates faster than normal. Video calls are avoided or consistently poor quality. Contact is only ever on WhatsApp, never an official service email.'],
  ['Stage 3 - The Request (Week 8-14+)', 'After extended trust-build, a crisis or opportunity requiring money arrives, framed to sound credible within a military context.', 'Any money request from someone never met in person, via UPI to a personal number, wire transfer or crypto, wrapped in urgency designed to prevent verification.'],
]

const personas = [
  ['Colonel / Brigadier, deployed abroad', 'Widowed, deployed under a UN mandate in Syria, Lebanon or South Sudan, one child in boarding school, seeking companionship before retirement.', 'Senior rank implies large DSOP funds and travel allowances, making financial requests feel proportionate and credible.'],
  ['CRPF / BSF officer, counter-terror operation', 'Deployed in a ‘restricted zone’ on counter-terror operations — explains the absence of video calls or official contact.', 'Para-military deployment restrictions are real, so victims are less likely to question the lack of verifiable contact.'],
  ['UN peacekeeper, foreign deployment', 'International peacekeeping posting (Congo, South Sudan, Lebanon), blue-beret photos, a ‘working for world peace’ narrative.', 'Peacekeeping per-diem allowances are used to explain ‘savings’ that supposedly need transferring home, adding financial plausibility.'],
  ['Retired general or ex-military professional', 'Not on active deployment, so limited video calls are possible. Runs a ‘security consulting firm’ with government contracts.', 'Targets older, more financially established victims and opens the door to investment-style requests alongside romance.'],
  ['Defence ministry official or military attaché', 'Poses as a defence ministry official abroad with ‘diplomatic packages’ or government funds requiring civilian facilitation.', 'Institutional framing creates maximum authority and typically the highest-value fee demands of any persona.'],
]

const casePatterns = [
  {
    title: 'Leave-travel escalation',
    body: 'Weeks of daily messages and a stated deployment lead to a leave-travel advance request paid in tranches via UPI. The profile never appears on an unscripted video call, and reverse image search later traces the photos to an unrelated real officer.',
  },
  {
    title: 'DSOP fund, multi-stage transfer',
    body: 'A UN-deployment persona introduces a DSOP fund release that needs a ‘civilian guarantor transfer’, collected across three separate payments before the victim recognises the pattern and stops.',
  },
  {
    title: 'Medical emergency under time pressure',
    body: 'A counter-terror deployment persona reports a sudden medical emergency requiring immediate funds, invoking an ‘Army welfare fund reimbursement’ that never materialises after the UPI transfer clears.',
  },
  {
    title: 'Diplomatic package, gold shipment',
    body: 'A retired-officer persona describes a package of valuables from a deployment zone, with a customs fee followed by a second ‘tax clearance’ and a third ‘security deposit’ — each new fee justified by the last.',
  },
  {
    title: 'Military romance into investment pitch',
    body: 'A border-deployment persona transitions a months-long relationship into a forex or crypto trading platform. Withdrawal is blocked behind a ‘security clearance fee’ before the platform disappears — a hybrid of this scam and pig butchering.',
  },
  {
    title: 'Ministry-official diplomatic fee',
    body: 'A profile claiming a senior ministry posting abroad describes a diplomatic package requiring an official-sounding ‘clearance certificate’ fee — the highest-value variant, and entirely fictitious as a real government process.',
  },
]

const redFlags = [
  ['Contact came via Facebook, Instagram or WhatsApp, not an official channel', 'Serving officers do not use personal social media to initiate romantic contact with civilians, and use official service email for professional communication.'],
  ['The profile cannot or will not do a live, unscripted video call', '‘Classified deployment’, ‘restricted communication policy’ or a ‘broken camera’ are excuses, not explanations. A real person can appear on a call at a time you choose.'],
  ['Profile photos are traceable to someone else', 'A reverse image search of any uniform photo often traces it to a real officer’s social media, a regimental tribute page, or a stock photo library.'],
  ['A money request arrives, however it is framed', 'Leave travel, DSOP fund release, medical emergency or a customs fee — no serving officer needs a civilian they have never met to transfer money on their behalf.'],
  ['The DSOP Fund narrative is used to justify a transfer', 'DSOP releases are processed entirely through official government channels. No civilian ‘guarantor transfer’ is ever required to unlock one.'],
  ['Contact is only possible via a personal number with no verifiable unit', 'A ‘Colonel’ reachable only on a personal WhatsApp number, with no verifiable regiment or unit contact, is not a serving officer.'],
  ['The relationship was initiated by the profile, not by you', 'Serving officers do not proactively approach unknown civilians for romance on social media. Unsolicited military-persona messages are overwhelmingly fraudulent.'],
  ['The account is new, thin, and made up of curated professional photos', 'A handful of uniform photos at professional-looking locations, without years of varied personal content, is a strong signal of a built-for-purpose fake profile.'],
]

const verificationSteps = [
  {
    title: 'Understand that the Army has no public officer look-up tool',
    body: 'For operational security reasons, the Indian Armed Forces do not run a public self-service portal where anyone can look up a serving officer’s identity. If an online contact points you to a specific ‘verification website’ to reassure you, treat that itself as a red flag rather than proof.',
    icon: ShieldAlert,
  },
  {
    title: 'Demand an unscripted live video call',
    body: 'Ask for a call at a time you choose, and ask them to show an Army identity card, hold up today’s newspaper, or write your name on paper. A genuine person can comply; a scammer using stolen photos cannot.',
    icon: Video,
  },
  {
    title: 'Check the phone number',
    body: 'Before sharing personal information, check the number they message from. Military-persona operators contact multiple victims from the same numbers, and active numbers are typically reported within days.',
    href: '/phone-number-checker',
    label: 'Check number',
    icon: Phone,
  },
  {
    title: 'Cross-check through the Army’s official channels',
    body: 'Look up the claimed regiment or unit through the Indian Army’s official contact page at indianarmy.nic.in, and check the Army’s official public-information and fact-check accounts for known scam patterns before trusting an unsolicited claim.',
    href: 'https://indianarmy.nic.in',
    label: 'Official Army contacts',
    icon: Landmark,
    external: true,
  },
  {
    title: 'Never send money, regardless of the story',
    body: 'Leave travel, DSOP fund, medical emergency or customs fee — apply one test: would you give this amount to a stranger on the street based on the same request? Until identity is verified in person, that is exactly what is happening.',
    icon: Ban,
  },
]

const recoverySteps = [
  {
    title: 'Call 1930 within 30 minutes of any UPI transfer',
    body: 'Provide the recipient UPI ID, amount and time for a chance at account freeze. Screenshot the full conversation, the profile, exchanged photos and payment confirmations before blocking the contact.',
  },
  {
    title: 'File on cybercrime.gov.in citing the impersonation angle explicitly',
    body: 'File under Online Financial Fraud / Romance Scam, and state clearly in the description that the person claimed to be a serving Army, CRPF, BSF or UN officer, with their claimed rank and name. Citing the impersonation angle, not just the fraud, helps route the case correctly.',
  },
  {
    title: 'File a grievance with the Ministry of Defence and report to CERT-In',
    body: 'File a written grievance with the Ministry of Defence through the government’s central grievance portal (CPGRAMS, at pgportal.gov.in), which routes complaints to the correct department, and report the fake profile and stolen photographs to CERT-In at incident@cert-in.org.in.',
  },
  {
    title: 'File an FIR, and treat the emotional recovery as seriously as the financial one',
    body: 'File at your cybercrime police station citing wearing the garb or token of the armed forces (BNS Section 168, formerly IPC 140), cheating by personation and fraud (BNS Sections 319(1) and 318(4), formerly IPC 416 and 420), and IT Act Sections 66C and 66D. The relationship, though fake, generated real feelings — speaking with a counsellor or someone you trust matters as much as the financial process.',
  },
]

const responseTimeline = [
  ['Immediately', 'Screenshot every message, photo and payment confirmation before blocking the contact.'],
  ['Within 30 min', 'Call 1930 if a UPI payment was made. Inform your bank if a card or net-banking transfer was used.'],
  ['Within 24 hrs', 'File at cybercrime.gov.in, stating the military-impersonation angle explicitly. Report the profile on its platform.'],
  ['Within 72 hrs', 'File a CPGRAMS grievance with the Ministry of Defence. Report to CERT-In. National Consumer Helpline 1915.'],
  ['Within 7 days', 'FIR at your cybercrime police station citing BNS 168 / 319(1) / 318(4) and IT Act 66C/66D. RakshaAI report.'],
]

const statistics = [
  ['Average loss per victim', '₹2.8 lakh', 'NCRB 2025'],
  ['Compared to the general romance-scam average', '4× higher than ₹68,000', 'NCRB 2025'],
  ['Total complaints filed, 2024-25', '12,000+', 'MHA I4C 2025'],
  ['Estimated unreported cases versus filed complaints', '3-4× — shame and respect for the Army suppress reporting', 'MHA I4C 2025'],
  ['Most common initial-contact platform', 'Facebook, followed by Instagram and WhatsApp', 'cybercrime.gov.in 2025'],
  ['Most common money-request type', 'Leave travel advance', 'NCRB 2025'],
]

const comparisonRows = [
  {
    title: 'Catfishing / Fake Dating Profile (General)',
    body: 'This page is specific to military-officer impersonation, with India-specific armed-forces impersonation law and official Army contact channels. General catfishing covers NRI, doctor and other personas.',
    href: '/scams/romance-scams/catfishing-india',
  },
  {
    title: 'Pig Butchering (Investment Romance)',
    body: 'If a military persona pivots into a trading or crypto opportunity, that investment-fraud mechanism is covered in the investment scams section. This page covers only direct money-request fraud.',
    href: '/scams/investment-scams',
  },
  {
    title: 'Fake Company / Fake HR Portal (Army Job Scam)',
    body: 'A fake Army JOB offer with a registration fee is job fraud, not romance fraud. This page covers a fake romantic relationship built around a military persona.',
    href: '/scams/job-scams/fake-company-portal',
  },
]

const relatedGuides = [
  {
    title: 'Catfishing / Fake Dating Profile Scam',
    body: 'The broader fake-identity mechanism — NRI, doctor and other personas — that this military-specific page sits alongside.',
    href: '/scams/romance-scams/catfishing-india',
  },
  {
    title: 'Instagram & Facebook Romance Scam',
    body: 'The same platforms carrying NRI, entrepreneur and model personas instead of a military one, with a distinct sextortion harm track.',
    href: '/scams/romance-scams/social-media-romance-scam',
  },
  {
    title: 'Pig Butchering / Investment Romance',
    body: 'What happens when a military persona pivots into a trading-platform pitch rather than a direct money request.',
    href: '/scams/investment-scams',
  },
  {
    title: 'Fake Company / Fake HR Portal Scam',
    body: 'A different mechanism entirely — a fake Army or MNC job offer with a registration fee, not a romantic relationship.',
    href: '/scams/job-scams/fake-company-portal',
  },
  {
    title: 'Romance Scams India Hub',
    body: 'Compare every romance-fraud mechanism active in India today.',
    href: '/scams/romance-scams',
  },
]

const tools = [
  {
    icon: Phone,
    title: 'Phone Number Checker',
    body: 'Check any mobile number before engaging further with a military persona online.',
    href: '/phone-number-checker',
    label: 'Check number',
  },
  {
    icon: Globe2,
    title: 'Website Safety Checker',
    body: 'Verify any website a military contact asks you to visit or transfer through.',
    href: '/website-safety-checker',
    label: 'Check website',
  },
  {
    icon: ShieldAlert,
    title: 'Report a Scam',
    body: 'Report the fake profile and protect other Indians from the same operator.',
    report: true,
    label: 'Report profile',
  },
]

const FAQ_ITEMS = [
  {
    question: 'What is a military romance scam and how does it work in India?',
    answer:
      'A fake profile claiming to be an Indian Army, CRPF, BSF or UN officer contacts a victim on Facebook, Instagram or WhatsApp using stolen uniform photographs. Over weeks of daily messages, declarations of affection and manufactured hardship, a deep emotional bond is built. A money request eventually follows — a leave-travel advance, a DSOP fund release fee, a medical emergency, or a customs fee for a gold or gift shipment. The average loss is around ₹2.8 lakh, roughly four times the general romance-scam average, because the military framing produces unusually strong trust and financial cooperation.',
  },
  {
    question: 'How do I verify if someone claiming to be an Indian Army officer online is genuine?',
    answer:
      'The Armed Forces do not operate a public self-service portal for looking up a serving officer’s identity, for operational security reasons — be wary of anyone directing you to a specific ‘verification site’. Instead: demand a live, unscripted video call and ask them to show an Army ID card or write your name on paper; check the phone number they are messaging from; look up their claimed regiment or unit through the Indian Army’s official contact page; and reverse image search their photos. Genuine officers use official service email for professional communication, not personal WhatsApp numbers alone.',
  },
  {
    question: 'What is the DSOP Fund and how is it used in the army romance scam?',
    answer:
      'The Defence Services Officers Provident Fund (DSOP Fund) is a genuine benefit accumulated during an officer’s service. Scammers exploit its familiarity by claiming a large DSOP payout is ready for release but requires a ‘civilian guarantor transfer’ from the victim to unlock government processing, promising repayment plus a share of the fund. In reality, DSOP Fund releases are processed entirely through official government and Army channels and never require a payment from a civilian outsider. Anyone requesting such a transfer is impersonating an officer and committing fraud.',
  },
  {
    question: 'What law applies to someone using a stolen Army uniform photo to build a fake identity?',
    answer:
      'Wearing the dress or carrying a token used by a soldier, sailor or airman of the Indian Armed Forces with intent to be believed a member of the forces was IPC Section 140, and is now Section 168 of the Bharatiya Nyaya Sanhita (BNS), 2023, which took effect on 1 July 2024. Using a stolen uniform photograph to construct a fraudulent identity falls within this offence. It typically applies alongside cheating by personation and fraud (formerly IPC Sections 416 and 420, now BNS Sections 319(1) and 318(4)) and IT Act Sections 66C and 66D for the identity theft and online impersonation.',
  },
  {
    question: 'How is the ‘leave travel’ request used, and why should I never pay it?',
    answer:
      'Serving officers have an official Leave Travel Concession processed entirely through Army administrative channels — the officer claims it, the Army pays, and travel proceeds. No officer needs a civilian to advance personal funds for leave travel. The scammer claims an ‘administrative delay’ has blocked the official process and needs money sent to a personal account or ‘travel agent’ to book tickets, with a clear promised repayment date designed to lower financial caution. After payment, the trip is postponed again, or the contact disappears.',
  },
  {
    question: 'I sent money to someone I believed was an Army officer. How do I recover it?',
    answer:
      'Call 1930 immediately if the payment was by UPI — within 30 minutes gives the best chance of an account freeze. File at cybercrime.gov.in, explicitly stating the person claimed to be a serving officer and citing the impersonation and fraud provisions alongside IT Act Sections 66C and 66D. File a grievance with the Ministry of Defence through the government’s CPGRAMS portal, and report the fake profile to CERT-In. File an FIR at your cybercrime police station, and call the National Consumer Helpline on 1915. Emotional support matters as much as the financial process — do not let shame delay reporting.',
  },
  {
    question: 'How do I report an army officer impersonation romance scam?',
    answer:
      'Call 1930 for a UPI freeze. File at cybercrime.gov.in under Romance Scam, citing the military-impersonation angle explicitly. File a Ministry of Defence grievance through CPGRAMS at pgportal.gov.in. Report the fake profile and stolen photographs to CERT-In at incident@cert-in.org.in. Report the profile directly on Facebook or Instagram. Call the National Consumer Helpline on 1915. File an FIR citing BNS Sections 168, 319(1) and 318(4) and IT Act Sections 66C and 66D. Report the profile and number to RakshaAI to warn other users.',
  },
  {
    question: 'What makes a gold shipment or diplomatic package request a scam?',
    answer:
      'The scenario is plausible-sounding because personnel returning from deployment do sometimes bring items home, and customs fees are a real concept — which is exactly why the framing works. The fraud is exposed by one fact: if a package is genuinely held at customs, the officer or the Indian mission in that country handles its release through official channels, not a civilian in India wiring money over UPI. A first ‘customs fee’ is reliably followed by a second ‘tax’ or ‘security deposit’ demand, and the package never arrives.',
  },
  {
    question: 'Why is the average loss in army romance scams so much higher than other romance scams?',
    answer:
      'Two factors combine. First, trust acceleration: the military uniform carries immediate, high institutional trust in Indian society, so victims who would question an unknown NRI professional’s money request are far less likely to question an Army officer’s, because the person is understood to be serving the nation. Second, a compounding request structure: leave travel, medical emergency and DSOP fund framings often involve several sequential payments — each new request justified by the last — by which point weeks of emotional investment make refusal psychologically much harder.',
  },
]

const schemas = [
  webPageSchema({ name: TITLE, description: DESCRIPTION, url: PAGE_PATH }),
  articleSchema({
    headline: 'Army Officer Romance Scam India 2026 - How Fake Soldiers Build Trust, What They Request, and How to Verify Any Military Identity',
    description: DESCRIPTION,
    url: PAGE_PATH,
    image: HERO_IMAGE,
    datePublished: '2026-08-16',
    dateModified: '2026-08-16',
    author: organizationRef(),
    section: 'Romance Scams',
    keywords: [
      'army officer romance scam india',
      'military romance scam india',
      'fake army officer scam india',
      'indian army officer impersonation scam',
      'un peacekeeper romance scam india',
      'leave travel scam army india',
      'dsop fund scam india',
      'gold shipment army scam india',
      'army medical emergency scam india',
      'crpf officer romance scam india',
    ],
  }),
  faqPageSchema(FAQ_ITEMS),
  breadcrumbListSchema([
    { name: 'Home', url: '/' },
    { name: 'Scam Categories', url: '/scams' },
    { name: 'Romance Scams India', url: '/scams/romance-scams' },
    { name: 'Army Officer Romance Scam', url: PAGE_PATH },
  ]),
  definedTermSchema({
    name: 'Military Romance Scam',
    description: 'A fraud in which a scammer poses online as an Indian Army, CRPF, BSF or UN peacekeeping officer using stolen uniform photographs, building a romantic relationship before requesting money for leave travel, a provident-fund release, a medical emergency, or a shipment fee.',
    url: PAGE_PATH,
    inDefinedTermSet: `${SITE_URL}/scams/romance-scams#scam-types`,
  }),
  {
    '@context': 'https://schema.org' as const,
    '@type': 'HowTo',
    '@id': `${CANONICAL}#how-to-verify`,
    name: 'How to verify an Indian Army officer online',
    description: 'Five checks to verify a claimed military identity before sharing personal details or sending money.',
    totalTime: 'PT5M',
    step: verificationSteps.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.title, text: step.body })),
  },
]

const sectionTitleClass = 'text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl'
const sectionIntroClass = 'mt-4 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300'

export default function ArmyOfficerScamPage() {
  return (
    <DefaultLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schemas) }} />

      <article className="bg-white dark:bg-slate-950">
        <header className="relative overflow-hidden border-b border-amber-100 bg-gradient-to-br from-stone-50 via-white to-amber-50 px-4 py-14 dark:border-amber-950 dark:from-slate-950 dark:via-slate-900 dark:to-amber-950/30 sm:py-20">
          <div aria-hidden="true" className="absolute -right-24 -top-28 h-96 w-96 rounded-full bg-amber-300/20 blur-3xl" />
          <div aria-hidden="true" className="absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-rose-300/10 blur-3xl" />
          <div className="relative mx-auto max-w-6xl">
            <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <Link className="hover:text-amber-800 dark:hover:text-amber-300" href="/">Home</Link><span aria-hidden="true">›</span>
              <Link className="hover:text-amber-800 dark:hover:text-amber-300" href="/scams">Scam Categories</Link><span aria-hidden="true">›</span>
              <Link className="hover:text-amber-800 dark:hover:text-amber-300" href="/scams/romance-scams">Romance Scams India</Link><span aria-hidden="true">›</span>
              <span className="text-slate-800 dark:text-slate-200">Army Officer Romance Scam</span>
            </nav>

            <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-amber-900 shadow-sm dark:border-amber-800 dark:bg-slate-900/70 dark:text-amber-300"><Shield className="h-4 w-4" /> Military Impersonation Romance Guide</div>
                <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
                  Army Officer Romance Scam India 2026
                  <span className="mt-2 block bg-gradient-to-r from-amber-800 to-rose-700 bg-clip-text text-transparent dark:from-amber-300 dark:to-rose-300">How Fake Soldiers Build Trust, What They Request, and How to Verify Any Military Identity</span>
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                  A scammer poses as an Indian Army, CRPF or BSF officer, or a UN peacekeeper on deployment, and builds a deep relationship before requesting money for leave travel, a provident-fund release, a medical emergency, or a valuables shipment. The uniform in the photo is stolen. The deployment is fictional. The request that follows months of trust-building is the entire purpose.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link href="/phone-number-checker" className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-800 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-amber-900/15 transition hover:-translate-y-0.5 hover:bg-amber-900"><Phone className="h-5 w-5" /> Check their number <ArrowRight className="h-4 w-4" /></Link>
                  <Link href="/website-safety-checker" className="inline-flex items-center justify-center gap-2 rounded-xl border border-amber-200 bg-white px-6 py-3.5 text-sm font-bold text-amber-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-amber-50 dark:border-amber-800 dark:bg-slate-900 dark:text-amber-300 dark:hover:bg-slate-800"><Globe2 className="h-5 w-5" /> Check a website</Link>
                </div>
                <p className="mt-4 text-xs font-medium text-slate-500 dark:text-slate-400">Free · No login · 10M+ fraud numbers · Built for India</p>
              </div>
              <figure className="overflow-hidden rounded-3xl border border-amber-200 bg-white shadow-2xl shadow-amber-950/10 dark:border-amber-900 dark:bg-slate-900"><Image src={HERO_IMAGE} alt="Fake Indian Army officer romance scam warning for India" width={1200} height={675} className="aspect-[16/9] w-full object-cover" priority /><figcaption className="px-5 py-4 text-xs leading-5 text-slate-500 dark:text-slate-400">The uniform photo is real. The person wearing it, in this story, is not.</figcaption></figure>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{quickFacts.map((fact) => <div key={fact.label} className="rounded-2xl border border-white/80 bg-white/90 p-5 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/85"><p className="text-2xl font-black text-amber-800 dark:text-amber-300">{fact.value}</p><p className="mt-2 text-sm leading-5 text-slate-700 dark:text-slate-300">{fact.label}</p><p className="mt-2 text-[11px] font-bold uppercase tracking-wide text-slate-400">{fact.source}</p></div>)}</div>
          </div>
        </header>

        <div className="border-b border-red-200 bg-red-50 px-4 py-5 dark:border-red-900 dark:bg-red-950/30"><div className="mx-auto flex max-w-6xl items-start gap-3 text-sm leading-6 text-red-950 dark:text-red-100"><TriangleAlert className="mt-0.5 h-5 w-5 shrink-0 text-red-700 dark:text-red-400" /><p><strong>The one rule:</strong> a serving Indian Army officer never asks a civilian they have not met in person for money. Trust in the uniform is well placed — trust in an unverified online contact claiming to wear one is not.</p></div></div>

        <div className="mx-auto max-w-6xl space-y-24 px-4 py-16 sm:px-6 lg:px-8">
          <section aria-labelledby="law-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-amber-800 dark:text-amber-400">Why this is a crime with its own charge sheet</p>
            <h2 id="law-heading" className={`${sectionTitleClass} mt-3`}>The India Law That Makes Military Impersonation Distinct</h2>
            <p className={sectionIntroClass}>Unlike a generic fake profile, using a soldier&rsquo;s uniform to deceive is its own named offence in Indian criminal law — on top of the fraud itself.</p>
            <div className="mt-9 grid gap-5 md:grid-cols-3">{lawCards.map(({ icon: Icon, title, body }) => <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300"><Icon className="h-6 w-6" /></div><h3 className="mt-5 text-base font-bold text-slate-950 dark:text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{body}</p></article>)}</div>
            <p className="mt-5 text-xs leading-5 text-slate-500 dark:text-slate-400">India&rsquo;s criminal code was replaced by the Bharatiya Nyaya Sanhita (BNS) on 1 July 2024. The older IPC section numbers are included above because they remain the most commonly searched terms for this offence.</p>
          </section>

          <section aria-labelledby="types-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-amber-800 dark:text-amber-400">Four framings, one pattern</p>
            <h2 id="types-heading" className={`${sectionTitleClass} mt-3`}>4 Money-Request Types Used in the Military Romance Scam</h2>
            <p className={sectionIntroClass}>Each request is chosen because it sounds like a genuine, temporary need within a plausible military context.</p>
            <div className="mt-9 grid gap-5 sm:grid-cols-2">{moneyRequestTypes.map(({ icon: Icon, title, range, body }) => <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"><div className="flex items-center gap-4"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300"><Icon className="h-6 w-6" /></div><div><h3 className="text-base font-bold text-slate-950 dark:text-white">{title}</h3><p className="text-sm font-black text-amber-800 dark:text-amber-300">{range}</p></div></div><p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{body}</p></article>)}</div>
          </section>

          <section aria-labelledby="stages-heading" className="rounded-3xl bg-slate-950 px-6 py-10 text-white sm:px-10 sm:py-12">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-amber-300">Identify it before Stage 3</p>
            <h2 id="stages-heading" className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">The 3-Stage Trust-Build</h2>
            <div className="mt-9 overflow-hidden rounded-2xl border border-slate-800"><div className="overflow-x-auto"><table className="w-full min-w-[680px] text-left text-sm"><thead className="bg-black/40"><tr><th className="px-5 py-4">Stage</th><th className="px-5 py-4">What happens</th><th className="px-5 py-4">Detection signal</th></tr></thead><tbody className="divide-y divide-slate-800">{trustBuildStages.map(([stage, happens, watch], index) => <tr key={stage} className={index % 2 === 0 ? 'bg-white/[0.02]' : ''}><th scope="row" className="px-5 py-4 align-top font-semibold text-white">{stage}</th><td className="px-5 py-4 align-top text-slate-300">{happens}</td><td className="px-5 py-4 align-top font-medium text-amber-300">{watch}</td></tr>)}</tbody></table></div></div>
          </section>

          <section aria-labelledby="persona-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-amber-800 dark:text-amber-400">Five archetypes</p>
            <h2 id="persona-heading" className={`${sectionTitleClass} mt-3`}>The Military Personas Used in India, and Why They Work</h2>
            <div className="mt-9 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800"><div className="overflow-x-auto"><table className="w-full min-w-[760px] text-left text-sm"><thead className="bg-slate-950 text-white dark:bg-black"><tr><th className="px-5 py-4">Persona</th><th className="px-5 py-4">Story pattern</th><th className="px-5 py-4">Why it works in India</th></tr></thead><tbody className="divide-y divide-slate-200 dark:divide-slate-800">{personas.map(([persona, story, why], index) => <tr key={persona} className={index % 2 === 0 ? 'bg-white dark:bg-slate-950' : 'bg-slate-50 dark:bg-slate-900'}><th scope="row" className="px-5 py-4 align-top font-semibold text-slate-950 dark:text-white">{persona}</th><td className="px-5 py-4 align-top text-slate-600 dark:text-slate-300">{story}</td><td className="px-5 py-4 align-top text-amber-800 dark:text-amber-300">{why}</td></tr>)}</tbody></table></div></div>
          </section>

          <section aria-labelledby="patterns-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-amber-800 dark:text-amber-400">Reported case patterns</p>
            <h2 id="patterns-heading" className={`${sectionTitleClass} mt-3`}>How the Scam Plays Out - India Case Patterns 2024-2025</h2>
            <p className={sectionIntroClass}>These are composite patterns drawn from commonly reported military romance scam cases in India, not individual verified incidents.</p>
            <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{casePatterns.map((item, index) => <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"><div className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-100 text-sm font-black text-amber-900 dark:bg-amber-950 dark:text-amber-300">{index + 1}</span><h3 className="text-sm font-bold text-slate-950 dark:text-white">{item.title}</h3></div><p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.body}</p></article>)}</div>
          </section>

          <section aria-labelledby="red-flags-heading" className="rounded-3xl bg-gradient-to-br from-red-950 to-amber-950 px-6 py-10 text-white sm:px-10 sm:py-12">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-red-300">Before sending anything</p>
            <h2 id="red-flags-heading" className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">8 Red Flags of a Fake Army Officer Online</h2>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-red-100/85">These eight signals are consistent across nearly every documented case.</p>
            <ol className="mt-9 grid gap-4 md:grid-cols-2">{redFlags.map(([title, body], index) => <li key={title} className="flex gap-4 rounded-2xl border border-red-800/70 bg-black/15 p-5"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-sm font-black text-red-900">{index + 1}</span><div><h3 className="font-bold">{title}</h3><p className="mt-1 text-sm leading-6 text-red-100/85">{body}</p></div></li>)}</ol>
          </section>

          <section aria-labelledby="verify-heading">
            <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-start">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-amber-800 dark:text-amber-400">Five checks</p>
                <h2 id="verify-heading" className={`${sectionTitleClass} mt-3`}>How to Verify Any Indian Army Officer Online</h2>
                <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-slate-700 dark:border-amber-900 dark:bg-amber-950/30 dark:text-slate-300"><strong className="text-amber-900 dark:text-amber-200">Important:</strong> the Armed Forces do not run a public self-service officer look-up website, for security reasons. Be sceptical of any online contact who directs you to a specific &lsquo;verification portal&rsquo; to prove themselves — that instruction is itself a warning sign.</div>
                <ol className="mt-6 space-y-4">{verificationSteps.map(({ title, body, href, label, icon: Icon, external }, index) => <li key={title} className="grid gap-4 rounded-2xl border border-slate-200 p-5 dark:border-slate-800 sm:grid-cols-[48px_1fr_auto] sm:items-center"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300"><Icon className="h-5 w-5" /></div><div><p className="text-xs font-black uppercase tracking-wide text-amber-800 dark:text-amber-400">Step {index + 1}</p><h3 className="mt-1 font-bold text-slate-950 dark:text-white">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{body}</p></div>{href && label ? external ? <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-amber-200 px-4 py-2.5 text-sm font-bold text-amber-900 hover:bg-amber-50 dark:border-amber-800 dark:text-amber-300 dark:hover:bg-amber-950">{label} <ExternalLink className="h-3.5 w-3.5" /></a> : <Link href={href} className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-amber-200 px-4 py-2.5 text-sm font-bold text-amber-900 hover:bg-amber-50 dark:border-amber-800 dark:text-amber-300 dark:hover:bg-amber-950">{label} <ArrowRight className="h-3.5 w-3.5" /></Link> : null}</li>)}</ol>
              </div>
              <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg dark:border-slate-800 dark:bg-slate-900"><Image src="/blog/romance-scam-india/romance-scam-verify-profile.jpg" alt="Step-by-step guide to verifying a claimed military identity online" width={680} height={849} className="h-auto w-full object-cover" /><figcaption className="px-5 py-4 text-xs leading-5 text-slate-500 dark:text-slate-400">An unscripted video call is the single strongest check available to you.</figcaption></figure>
            </div>
          </section>

          <section aria-labelledby="recovery-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-red-700 dark:text-red-400">If you already sent money</p>
            <h2 id="recovery-heading" className={`${sectionTitleClass} mt-3`}>Recovery Guide - What to Do Next</h2>
            <p className={sectionIntroClass}>Speed matters most in the first 30 minutes. Report the impersonation angle explicitly — it opens a different, often faster, enforcement path than a generic fraud complaint.</p>
            <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]"><ol className="space-y-4">{recoverySteps.map((step, index) => <li key={step.title} className="flex gap-4 rounded-2xl border border-slate-200 p-5 dark:border-slate-800"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-red-100 text-sm font-black text-red-800 dark:bg-red-950 dark:text-red-300">{index + 1}</span><div><h3 className="font-bold text-slate-950 dark:text-white">{step.title}</h3><p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{step.body}</p></div></li>)}</ol><aside className="h-fit rounded-2xl bg-slate-950 p-6 text-white dark:bg-black"><div className="flex items-center gap-2 text-amber-300"><Clock3 className="h-5 w-5" /><p className="text-xs font-black uppercase tracking-[0.14em]">Response timeline</p></div><div className="mt-6 space-y-5">{responseTimeline.map(([time, action]) => <div key={time} className="border-l-2 border-amber-400 pl-4"><p className="font-bold text-amber-300">{time}</p><p className="mt-1 text-sm leading-5 text-slate-300">{action}</p></div>)}</div></aside></div>
            <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-2xl border border-red-200 bg-red-50 p-6 dark:border-red-900 dark:bg-red-950/30 sm:flex-row sm:items-center"><div><h3 className="text-lg font-black text-red-950 dark:text-red-100">Report the profile before it reaches someone else</h3><p className="mt-1 text-sm text-red-800 dark:text-red-200">Keep screenshots, the profile, the claimed rank and unit, and payment details ready.</p></div><ReportScamButton className="inline-flex items-center gap-2 rounded-xl bg-red-700 px-5 py-3 text-sm font-bold text-white hover:bg-red-800"><ShieldAlert className="h-4 w-4" /> Report profile <ArrowRight className="h-4 w-4" /></ReportScamButton></div>
          </section>

          <section aria-labelledby="stats-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-amber-800 dark:text-amber-400">Scale of the problem</p>
            <h2 id="stats-heading" className={`${sectionTitleClass} mt-3`}>Military Romance Scam Statistics India 2025-2026</h2>
            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800"><div className="overflow-x-auto"><table className="w-full min-w-[680px] text-left text-sm"><thead className="bg-slate-950 text-white dark:bg-black"><tr><th className="px-5 py-4">Metric</th><th className="px-5 py-4">Data</th><th className="px-5 py-4">Source</th></tr></thead><tbody className="divide-y divide-slate-200 dark:divide-slate-800">{statistics.map(([metric, data, source], index) => <tr key={metric} className={index % 2 === 0 ? 'bg-white dark:bg-slate-950' : 'bg-slate-50 dark:bg-slate-900'}><th scope="row" className="px-5 py-4 font-semibold text-slate-950 dark:text-white">{metric}</th><td className="px-5 py-4 font-bold text-amber-800 dark:text-amber-300">{data}</td><td className="px-5 py-4 text-slate-500 dark:text-slate-400">{source}</td></tr>)}</tbody></table></div></div>
            <p className="mt-4 flex items-start gap-2 text-xs leading-5 text-slate-500 dark:text-slate-400"><Percent className="mt-0.5 h-4 w-4 shrink-0" />The 4× gap versus the general romance-scam average is the defining statistic here — it is the uniform, not the story, doing most of the persuading.</p>
          </section>

          <section aria-labelledby="compare-heading"><p className="text-xs font-black uppercase tracking-[0.18em] text-amber-800 dark:text-amber-400">Don&rsquo;t confuse the mechanisms</p><h2 id="compare-heading" className={`${sectionTitleClass} mt-3`}>How This Differs From Other Romance and Job Scams</h2><div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800"><div className="overflow-x-auto"><table className="w-full min-w-[680px] text-left text-sm"><thead className="bg-slate-950 text-white dark:bg-black"><tr><th className="px-5 py-4">Related guide</th><th className="px-5 py-4">Key distinction</th><th className="px-5 py-4">Full guide</th></tr></thead><tbody className="divide-y divide-slate-200 dark:divide-slate-800">{comparisonRows.map((row, index) => <tr key={row.title} className={index % 2 === 0 ? 'bg-white dark:bg-slate-950' : 'bg-slate-50 dark:bg-slate-900'}><th scope="row" className="px-5 py-4 font-semibold text-slate-950 dark:text-white">{row.title}</th><td className="px-5 py-4 text-slate-600 dark:text-slate-300">{row.body}</td><td className="px-5 py-4"><Link href={row.href} className="inline-flex items-center gap-1 font-bold text-amber-800 hover:underline dark:text-amber-300">Read guide <ArrowRight className="h-3.5 w-3.5" /></Link></td></tr>)}</tbody></table></div></div></section>

          <section aria-labelledby="related-heading"><p className="text-xs font-black uppercase tracking-[0.18em] text-amber-800 dark:text-amber-400">Related guides</p><h2 id="related-heading" className={`${sectionTitleClass} mt-3`}>Keep the Mechanism Clear</h2><div className="mt-8 grid gap-4 sm:grid-cols-2">{relatedGuides.map((item) => <Link key={item.href} href={item.href} className="group rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-0.5 hover:border-amber-300 hover:shadow-md dark:border-slate-800 dark:hover:border-amber-800"><div className="flex items-start justify-between gap-4"><div><h3 className="font-bold text-slate-950 dark:text-white">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.body}</p></div><ArrowRight className="mt-1 h-5 w-5 shrink-0 text-amber-800 transition group-hover:translate-x-1 dark:text-amber-400" /></div></Link>)}</div></section>

          <section aria-labelledby="tools-heading" className="rounded-3xl bg-gradient-to-br from-amber-950 to-slate-950 px-6 py-10 text-white sm:px-10 sm:py-12"><p className="text-xs font-black uppercase tracking-[0.18em] text-amber-300">Free RakshaAI checks</p><h2 id="tools-heading" className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Verify Any Military Contact Before You Trust or Pay</h2><div className="mt-9 grid gap-5 md:grid-cols-3">{tools.map(({ icon: Icon, title, body, href, report, label }) => report ? <div key={title} className="rounded-2xl border border-amber-800 bg-white/5 p-6"><Icon className="h-7 w-7 text-amber-300" /><h3 className="mt-4 font-bold">{title}</h3><p className="mt-2 min-h-16 text-sm leading-6 text-slate-300">{body}</p><ReportScamButton className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-amber-300 hover:text-amber-200">{label} <ArrowRight className="h-4 w-4" /></ReportScamButton></div> : <Link key={href} href={href!} className="group rounded-2xl border border-amber-800 bg-white/5 p-6 hover:bg-white/10"><Icon className="h-7 w-7 text-amber-300" /><h3 className="mt-4 font-bold">{title}</h3><p className="mt-2 min-h-16 text-sm leading-6 text-slate-300">{body}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-amber-300">{label} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span></Link>)}</div></section>

          <section aria-labelledby="alerts-heading" className="rounded-3xl border border-amber-200 bg-amber-50 p-7 dark:border-amber-900 dark:bg-amber-950/30 sm:p-10"><div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center"><div><div className="flex items-center gap-2 text-amber-900 dark:text-amber-300"><MonitorSmartphone className="h-5 w-5" /><p className="text-xs font-black uppercase tracking-[0.16em]">Military romance scam alerts</p></div><h2 id="alerts-heading" className="mt-3 text-2xl font-black text-slate-950 dark:text-white">Check current scam warnings</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-slate-700 dark:text-slate-300">New fake-officer profiles and stolen-photo networks appear constantly. Check the live alert feed rather than relying on any static list.</p></div><Link href="/scam-alerts" className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-amber-800 px-5 py-3 text-sm font-bold text-white hover:bg-amber-900">View scam alerts <ArrowRight className="h-4 w-4" /></Link></div></section>

          <section aria-labelledby="faq-heading" className="mx-auto max-w-4xl"><div className="text-center"><p className="text-xs font-black uppercase tracking-[0.18em] text-amber-800 dark:text-amber-400">Quick answers</p><h2 id="faq-heading" className={`${sectionTitleClass} mt-3`}>Frequently Asked Questions About Military Romance Scams India</h2></div><div className="mt-9 space-y-3">{FAQ_ITEMS.map((item) => <details key={item.question} className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-amber-300 open:shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:open:border-amber-800"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold text-slate-950 dark:text-white">{item.question}<span aria-hidden="true" className="text-xl text-amber-800 transition group-open:rotate-45 dark:text-amber-400">+</span></summary><p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-6 text-slate-600 dark:border-slate-800 dark:text-slate-300">{item.answer}</p></details>)}</div></section>

          <section className="rounded-3xl border border-slate-200 bg-slate-50 p-7 dark:border-slate-800 dark:bg-slate-900 sm:p-10"><div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center"><div><p className="text-xs font-black uppercase tracking-[0.16em] text-amber-800 dark:text-amber-400">Remember</p><h2 className="mt-2 max-w-2xl text-2xl font-black text-slate-950 dark:text-white">A real officer never needs a stranger&rsquo;s money to come home.</h2><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">Demand a live video call and check their number before you trust anything else.</p></div><Link href="/phone-number-checker" className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-amber-800 px-5 py-3 text-sm font-bold text-white hover:bg-amber-900"><Phone className="h-4 w-4" /> Check their number</Link></div></section>

          <RelatedTopics currentPath={PAGE_PATH} clusterId="romance-scams" />
        </div>
      </article>
    </DefaultLayout>
  )
}
