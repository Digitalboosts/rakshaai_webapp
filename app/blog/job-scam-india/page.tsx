import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import BlogLayout from '@/components/BlogLayout'
import SidebarJobScam from '@/components/blog/SidebarJobScam'
import { blogPostingSchema, breadcrumbListSchema, faqPageSchema, jsonLd, personSchema } from '@/lib/seo/schema'

const title = 'Job Scam India 2026: Fake MNC Offer Letters and Advance Salary Frauds'
const description = 'Job scam India 2026 guide to fake TCS, Infosys and Amazon offer letters, security deposits, advance salary fraud, real cases, and a 5 minute verification check.'
const url = 'https://rakshaai.co/blog/job-scam-india'
const image = '/blog/blog33/job-scam-india-hero.jpg'
const publishedAt = '2026-07-22T00:00:00.000Z'

export const metadata: Metadata = {
    title: { absolute: 'Job Scam India 2026: Fake MNC Offer Letters and Advance Salary Frauds | RakshaAI' },
    description,
    keywords: ['job scam India 2026', 'fake job offer letter India', 'advance salary scam India', 'fake TCS offer letter India', 'work from home job fraud India', 'job security deposit scam India', 'how to verify job offer India', 'Naukri job scam India'],
    authors: [{ name: 'Rabinarayan Pradhan', url: 'https://rakshaai.co/author/rabinarayan-pradhan' }],
    alternates: { canonical: url },
    robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
    openGraph: {
        title: 'Job Scam India 2026: Fake TCS and Infosys Offer Letters and Pay Security Deposit Traps',
        description: 'No legitimate employer asks you to pay to join. Verify any offer letter in 5 minutes and share this with every job seeker you know.',
        url,
        type: 'article',
        siteName: 'RakshaAI',
        publishedTime: publishedAt,
        modifiedTime: publishedAt,
        tags: ['Job Scam', 'Fake Offer Letter', 'Recruitment Fraud', 'Cybercrime India'],
        images: [{ url: image, width: 1200, height: 675, alt: 'Job scam India 2026, fake MNC offer letter security deposit fraud' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Got a TCS or Amazon Offer Letter? Verify It Before Paying Anything',
        description: 'Fake MNC letters and security deposits target Indian job seekers. Learn the 5 minute verification check.',
        images: [image],
    },
}

const faqs = [
    { question: 'How do fake job offer letters look in India?', answer: 'Fake letters copy the logo, letterhead, wording, and signatures of companies such as TCS, Infosys, Wipro, or Amazon. Warning signs include a lookalike email domain, spelling errors, an offer without a proper interview, or a request for money. Verify through the employer\'s careers site or official switchboard, never through contact details in the letter.' },
    { question: 'What is an advance salary scam in India?', answer: 'A scammer claims salary or an equipment allowance was credited in advance, shows a fake notification or sends a payment that may later fail, then asks the candidate to return or forward part of it. Check your own bank account and wait for confirmed, irreversible funds. Do not send money on the strength of a screenshot, email, cheque, or SMS.' },
    { question: 'Is it normal to pay a security deposit for a job in India?', answer: 'No. A genuine employer does not charge a security deposit, registration fee, interview fee, training fee, uniform fee, or offer letter fee as a condition of employment. TCS states officially that it asks candidates for no money or security deposit at any recruitment stage.' },
    { question: 'How do I verify a Naukri or LinkedIn job posting is real?', answer: 'Open the company website yourself and find the same role on its careers page. Contact the company through a number or email published there, inspect the recruiter profile and email domain, and never assume a listing is genuine merely because it appeared on a known portal.' },
    { question: 'What is the overseas job scam in India and is it dangerous?', answer: 'Some fake overseas offers lead to passport confiscation, confinement, forced cyber fraud, and violence in scam compounds. The Ministry of External Affairs has warned about dubious jobs in Southeast Asia. Verify the foreign employer and recruiting agent through official Indian channels, including eMigrate, before travel.' },
]

const schemas = [
    blogPostingSchema({ headline: title, description, url: '/blog/job-scam-india', image, datePublished: publishedAt, dateModified: publishedAt, author: personSchema({ name: 'Rabinarayan Pradhan', jobTitle: 'Cybersecurity Writer', url: '/author/rabinarayan-pradhan', image: '/authors/rabinarayan-pradhan.jpeg', sameAs: ['https://www.linkedin.com/in/rabinarayan-pradhan-14ab9422b/'] }), section: 'Job Scams', keywords: ['job scam India 2026', 'fake job offer letter India', 'advance salary scam India', 'fake MNC offer India'], wordCount: 2100 }),
    faqPageSchema(faqs),
    breadcrumbListSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Job Scam India', url: '/blog/job-scam-india' }]),
]

const Source = ({ href, children }: { href: string; children: React.ReactNode }) => <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>

export default function JobScamIndiaPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schemas) }} />
            <BlogLayout title={title} description={description} publishedAt={publishedAt} lastUpdated={publishedAt} readTime="13 min" author="Rabinarayan Pradhan" authorUrl="/author/rabinarayan-pradhan" primaryTool={{ label: 'Check the recruiter number', href: '/phone-number-checker' }} tags={['Job Scam', 'Fake Offer Letter', 'Recruitment Fraud', 'July 2026']} slug="job-scam-india" sidebar={<SidebarJobScam title={title} />}>
                <div className="not-prose mb-10 overflow-hidden rounded-2xl shadow-lg">
                    <Image src={image} alt="Job scam India 2026, fake MNC offer letter security deposit fraud" width={1200} height={675} className="w-full object-cover" priority />
                    <p className="px-4 pb-3 pt-2 text-center text-xs italic text-gray-500 dark:text-gray-400">A professional letter is not proof. Verify the role and recruiter through the company&apos;s official channels.</p>
                </div>

                <p><strong>Job scam India 2026</strong> campaigns are built for the moment when relief overwhelms caution. A candidate receives an impressive offer letter bearing a famous logo, an attractive salary, and an urgent instruction to pay a refundable security deposit. The letter may look real, but the job does not exist.</p>
                <p>Scammers now combine stolen job seeker data, cloned careers pages, fake interviews, forged appointment letters, WhatsApp calls, and convincing recruiter profiles. Some steal a few thousand rupees as registration or training fees. Others take lakhs, harvest identity documents, recruit money mules, or lure victims into trafficking situations abroad.</p>
                <p><strong>The safest rule is simple: a real employer pays you. You do not pay the employer for the right to join.</strong></p>

                <h2 id="why-job-seekers-are-targeted">Why Job Seekers Are India&apos;s Easiest Fraud Target</h2>
                <p>Job hunting creates a powerful combination of urgency, hope, and personal exposure. Candidates upload phone numbers, email addresses, qualifications, preferred cities, and salary expectations to recruitment portals. A criminal who obtains that data can make an unsolicited call sound like a response to a genuine application.</p>
                <p>Fresh graduates may not know what a normal hiring process looks like. Experienced workers can also lower their guard when a caller names the right industry, role, or portal. In a <strong>Naukri job scam India</strong> or fake LinkedIn approach, the platform&apos;s reputation can create borrowed trust, even though the person contacting you is not employed by the company they claim to represent.</p>
                <p>Pressure completes the trap. The recruiter says only two positions remain, HR needs the deposit today, or the letter expires in 48 hours. A fake interview and polished PDF make the demand feel procedural. Scammers may even say the fee is refundable so the payment seems risk free.</p>

                <h2 id="six-job-scam-types">The 6 Job Scam Types Hitting India in 2026</h2>
                <h3>Fake MNC Offer Letter with Security Deposit</h3>
                <p>A <strong>fake job offer letter India</strong> campaign copies a real company&apos;s branding and invents an HR contact. The candidate is told to pay for background verification, a laptop, insurance, a uniform, or a refundable deposit. A <strong>fake TCS offer letter India</strong> can be checked against TCS&apos;s official warning: TCS says it uses the <strong>@tcs.com</strong> domain, does not ask for money or security deposits, and provides tools to validate IT offer letters.</p>

                <h3>The Advance Salary Scam</h3>
                <p>In an <strong>advance salary scam India</strong> approach, the criminal claims that salary, a joining bonus, or an equipment allowance has already been sent. A fake bank alert or edited screenshot appears, followed by a request to return an accidental overpayment or forward money to a vendor. Another version uses a cheque or transfer that appears temporarily but later fails. Never return or forward funds until your own bank confirms that the payment is genuine and final.</p>

                <h3>Fake Work From Home Job Portals</h3>
                <p>A <strong>work from home job fraud India</strong> ad promises easy income for packing, captcha filling, reviews, form filling, or simple online tasks. The applicant pays for registration, a starter kit, software, or access to assignments. I4C&apos;s 2025 captcha filling advisory describes offers spread through social media and job portals that demand registration or training fees. Task scams can also pay a small amount first, then demand deposits to unlock larger fictional earnings. See how the related <Link href="/blog/telegram-task-scam-india">Telegram task scam</Link> works.</p>

                <h3>The Training Fee Fraud</h3>
                <p>The recruiter says selection is confirmed but mandatory training must be purchased from a partner. The course may be worthless or never delivered. TCS warns that fake agencies may promise training, internships, or interviews while charging excessive fees without having real opportunities. A course and a job are separate transactions. Independently confirm both.</p>

                <h3>The Data Entry Job Scam</h3>
                <p>After advertising data entry income, a fake company collects an access fee or sends impossible work. Later it alleges errors or missed targets and threatens legal action under a fabricated agreement. Do not install unknown software or hand over Aadhaar, PAN, bank credentials, OTPs, or screen access. If the portal itself looks suspicious, use RakshaAI&apos;s guide to <Link href="/blog/how-to-check-fake-website-india">check a fake website job portal</Link>.</p>

                <h3>The Overseas Job Trafficking Trap</h3>
                <p>The most dangerous offer promises a well-paid IT, customer service, casino, or marketing role abroad. Once the worker arrives, passports and phones may be seized and the person may be forced to run online scams. This is not merely recruitment fraud. It can become human trafficking and forced criminality.</p>

                <div className="not-prose my-8 overflow-hidden rounded-2xl shadow-md">
                    <Image src="/blog/blog33/job-scam-types.jpg" alt="6 types of job scam India 2026, fake offer letter security deposit and work from home fraud" width={800} height={1000} className="w-full" />
                </div>

                <h2 id="verify-job-offer">How to Verify Any Job Offer in India in 5 Minutes</h2>
                <p><strong>How to verify a job offer in India in 5 minutes:</strong></p>
                <ol>
                    <li>Call the company&apos;s official HR number found on its official website only.</li>
                    <li>Search the company name plus careers on its official website and see whether the role exists.</li>
                    <li>Verify the email domain. TCS uses @tcs.com, not @tcs-hr.com or another variation.</li>
                    <li>Search the recruiter&apos;s name on LinkedIn and verify that the profile, history, and employer match.</li>
                    <li>Treat any request for a security deposit, training fee, registration fee, or advance before joining as a scam signal.</li>
                    <li>Check the legal entity on the <Source href="https://www.mca.gov.in">MCA portal</Source>. Registration alone does not prove the offer, but a missing or mismatched company is a warning.</li>
                    <li>Search the company name plus offer letter scam India before proceeding.</li>
                </ol>
                <p><strong>Real employers never ask candidates to pay anything before they start work.</strong></p>

                <div className="not-prose my-8 overflow-hidden rounded-2xl shadow-md">
                    <Image src="/blog/blog33/job-offer-verification.jpg" alt="How to verify job offer letter India 2026, 5 step guide" width={800} height={1000} className="w-full" />
                </div>

                <h3>Check the Channel, Not Just the Letter</h3>
                <p>A logo, signature, QR code, employee card, office address, and video interview can all be copied or staged. Verification must leave the channel controlled by the recruiter. Type the corporate website yourself, use the careers page or switchboard published there, and ask whether the vacancy, reference number, recruiter, and offer are genuine.</p>

                <h2 id="job-offer-red-flags">Red Flags in a Job Offer</h2>
                <ul>
                    <li>You must pay a security deposit, registration, verification, uniform, laptop, or training fee.</li>
                    <li>The first contact arrives through WhatsApp, Telegram, SMS, or a free email address.</li>
                    <li>The sender&apos;s domain is a lookalike rather than the company&apos;s exact domain.</li>
                    <li>You receive an offer after no interview or only a short chat interview.</li>
                    <li>The salary is far above the market rate and the recruiter creates a deadline.</li>
                    <li>The recruiter requests Aadhaar, PAN, bank details, OTPs, or remote access unusually early.</li>
                    <li>Payment must go to a personal UPI ID, changing bank account, or unrelated entity.</li>
                    <li>The role is absent from the official careers page and HR will not confirm it.</li>
                </ul>

                <div className="not-prose my-8 overflow-hidden rounded-2xl shadow-md">
                    <Image src="/blog/blog33/job-offer-red-flags.jpg" alt="Red flags of fake job offer India 2026, how to spot job scam checklist" width={740} height={986} className="w-full" />
                </div>

                <h2 id="overseas-job-scam">The Overseas Job Scam and Human Trafficking Risk</h2>
                <p>The Ministry of External Affairs warns Indians to be cautious about dubious employment offers in Southeast Asia and to verify recruiters and employers before travel. Its Cambodia employment advisory, issued in April 2024, remains listed as valid. Government data presented for 2022 to 2025 recorded <strong>2,192 Indians approaching the mission in Phnom Penh for job fraud, trafficking, or contract violation assistance</strong>. That figure combines three categories, so it should not be read as a trafficking-only count.</p>
                <p>Before accepting an overseas role, check the recruiting agent and contract on <Source href="https://emigrate.gov.in">eMigrate</Source>, contact the relevant Indian mission, confirm the visa matches the promised work, and share the contract and travel plan with family. Do not travel on a tourist visa for employment. A request to hand over your passport after arrival is an emergency warning.</p>

                <h2 id="real-cases">Real Job Scam Cases in India and Source Credits</h2>
                <p>The following figures come from police statements reported by news organizations or from official advisories. Criminal allegations may still be under investigation.</p>
                <ul>
                    <li><Source href="https://indianexpress.com/article/delhi/noida-police-bust-fake-spicejet-job-racket-operation-cyber-vajra-10786089/lite/">The Indian Express, 15 July 2026</Source>: Noida Police said a fake call centre used job seeker data, fake interviews, and forged SpiceJet appointment letters. One Kanpur man paid ₹1,150 for registration and ₹5,480 for training before learning at the airport that no job existed. Police said about 20 complaints were linked to the racket.</li>
                    <li><Source href="https://www.indiatoday.in/india/story/airline-job-scam-mumbai-police-arrest-11-dehradun-fake-call-centre-2939147-2026-07-02">India Today, 2 July 2026</Source>: Mumbai Police arrested 11 people after a woman alleged she paid about ₹2.5 lakh in processing and recruitment charges for a private airline job that never arrived.</li>
                    <li><Source href="https://www.hindustantimes.com/cities/delhi-news/three-arrested-in-greater-noida-for-fake-job-scam-101773422064016.html">Hindustan Times, 13 March 2026</Source>: police said three men used job aspirant data and forged MNC offer letters, charging victims 15 percent of annual salary, generally ₹40,000 to ₹60,000. Six forged offer letters were reportedly recovered.</li>
                    <li><Source href="https://timesofindia.indiatimes.com/city/jaipur/kota-police-nab-mastermind-of-2-crore-wfh-scam-in-bihar/amp_articleshow/129475957.cms">The Times of India, 12 March 2026</Source>: Kota Police alleged that a work-from-home racket collected ₹2,500 security deposits from about 8,500 people and took nearly ₹2 crore before its office closed.</li>
                    <li><Source href="https://www.tcs.com/careers/india/recruitment-fraud-alert">TCS Recruitment Fraud Alert</Source>: the company states it does not request money or security deposits, sends hiring mail through @tcs.com, and offers official letter validation tools and a helpline.</li>
                    <li><Source href="https://cybercrime.gov.in/Webform/theme/resources/advisories/ADVISORY%20TAU-ADV-004_Captcha%20Filling%20Fraud_08.04.2025.pdf">I4C captcha filling fraud advisory, 8 April 2025</Source>: the advisory warns that high-paying captcha jobs promoted on social media and job portals can demand registration or training fees.</li>
                    <li><Source href="https://www.mea.gov.in/combodia-travel-advisory.htm">Ministry of External Affairs Cambodia employment advisory</Source>: the government tells Indian nationals to verify overseas employers and warns about fake jobs connected to cybercrime operations.</li>
                </ul>

                <h2 id="already-paid">What to Do If You Already Paid</h2>
                <ol>
                    <li>Stop every further payment, including money requested for refunds or recovery.</li>
                    <li>Call <strong>1930 immediately</strong> and inform your bank or payment app&apos;s fraud team.</li>
                    <li>File a complaint at <Source href="https://cybercrime.gov.in">cybercrime.gov.in</Source>.</li>
                    <li>Save the job ad, URLs, offer letter, emails, phone numbers, chats, recruiter profile, bank account, UPI ID, receipts, and transaction IDs.</li>
                    <li>If identity documents were shared, monitor bank and credit activity and secure exposed accounts.</li>
                    <li>Follow RakshaAI&apos;s complete guide for anyone who has <Link href="/blog/got-scammed-online-india-what-to-do">already paid an online scammer</Link>.</li>
                </ol>

                <h2 id="frequently-asked-questions">Frequently Asked Questions</h2>
                {faqs.map((faq) => <div key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></div>)}

                <div className="not-prose my-10 rounded-2xl bg-gradient-to-br from-red-700 to-slate-950 p-7 text-white shadow-lg">
                    <h2 className="mb-3 text-2xl font-extrabold text-white">Check the recruiter before you trust the offer</h2>
                    <p className="mb-5 text-sm leading-relaxed text-red-50">Search the phone number for community reports. If any money has already moved, call 1930 now.</p>
                    <Link href="/phone-number-checker" className="inline-flex rounded-xl bg-white px-5 py-3 text-sm font-bold text-red-700">Check a phone number</Link>
                </div>
            </BlogLayout>
        </>
    )
}
