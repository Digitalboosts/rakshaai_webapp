import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import BlogLayout from '@/components/BlogLayout'
import SidebarCyberLawIndia from '@/components/blog/SidebarCyberLawIndia'
import { blogPostingSchema, breadcrumbListSchema, faqPageSchema, jsonLd, personSchema } from '@/lib/seo/schema'

const title = 'India Cyber Laws 2026: Your Rights as a Fraud Victim and How to Use Them'
const description = 'Cyber law India 2026 victim rights explained: RBI zero liability, FIR, ombudsman, consumer court, BNS, IT Act and DPDP rollout for fraud victims.'
const url = 'https://rakshaai.co/blog/cyber-law-india-victim-rights'
const image = '/blog/blog42/cyber-law-india-victim-rights-hero.webp'
const publishedAt = '2026-08-05T00:00:00.000Z'

export const metadata: Metadata = {
    title: { absolute: 'Cyber Law India 2026 Victim Rights: Complete Guide | RakshaAI' },
    description,
    keywords: ['cyber law India 2026 victim rights', 'IT Act India cyber fraud', 'RBI zero liability rule India', 'BNS cyber fraud India 2026', 'online fraud FIR India', 'cyber fraud victim rights India', 'DPDP Act India 2026', 'file FIR cyber fraud India'],
    authors: [{ name: 'Rabinarayan Pradhan', url: 'https://rakshaai.co/author/rabinarayan-pradhan' }],
    alternates: { canonical: url },
    robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
    openGraph: {
        title: 'India Cyber Laws 2026: 5 Legal Rights Every Fraud Victim Must Know',
        description: 'RBI liability rules, FIR rights, consumer remedies, regulator complaints, IT Act and the phased DPDP rollout. Learn what applies and how to use it.',
        url,
        type: 'article',
        siteName: 'RakshaAI',
        publishedTime: publishedAt,
        modifiedTime: publishedAt,
        tags: ['Cyber Law India', 'Victim Rights', 'RBI Zero Liability', 'August 2026'],
        images: [{ url: image, width: 1200, height: 630, alt: 'India cyber law 2026 fraud victim rights, RBI zero liability, IT Act and DPDP' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Report Bank Fraud Fast: Know Your RBI and FIR Rights',
        description: 'Five legal protections every cyber fraud victim in India should know, with the limits banks and viral posts often leave out.',
        images: [image],
    },
}

const faqs = [
    {
        question: 'What is the RBI zero liability rule for online fraud in India?',
        answer: 'Under RBI’s 6 July 2017 circular, zero customer liability applies when the bank caused the unauthorised electronic transaction, or when a third-party breach occurred without customer or bank fault and the customer notified the bank within three working days of receiving the transaction communication. If customer negligence such as sharing a payment credential caused the loss, the customer bears loss until reporting, while later loss is borne by the bank. The bank has the burden of proving customer liability.',
    },
    {
        question: 'Can police refuse to file an FIR for cyber fraud in India?',
        answer: 'BNSS Section 173 lets a person give information about a cognizable offence to any police station regardless of where it occurred. Not every cyber complaint is automatically cognizable, so the facts and alleged sections matter. If an officer refuses to record information that discloses a cognizable offence, send it in writing to the Superintendent of Police under BNSS Section 173(4), then apply to the Magistrate if needed. You can also report at cybercrime.gov.in.',
    },
    {
        question: 'What are scammers charged under in India?',
        answer: 'Common provisions include IT Act Sections 66C and 66D for identity theft and online personation, BNS Section 318 for cheating, BNS Section 319 for cheating by personation, BNS Section 308 for extortion, and BNS Section 351 for criminal intimidation. The exact charge and penalty depend on the facts. BNS Section 318(4), involving dishonest inducement to deliver property, can carry up to seven years and a fine.',
    },
    {
        question: 'What does the DPDP Act mean for fraud victims in August 2026?',
        answer: 'The DPDP Act and 2025 Rules have a phased commencement. As of 5 August 2026, the core duties on security safeguards, breach notification, and Data Principal rights are scheduled for the later phase in May 2027. Victims should not present those future duties as an already available compensation guarantee. IT Act Section 43A remains relevant to negligent data security claims during the transition, and other consumer, contract, banking, and criminal remedies may also apply.',
    },
    {
        question: 'How do I file a consumer complaint for online fraud in India?',
        answer: 'A consumer complaint can be relevant when a bank, payment provider, insurer, platform, or business allegedly caused deficiency in service or used an unfair trade practice. First complain to the provider and preserve the response. Use the National Consumer Helpline for pre-litigation support and the official e-Jagriti system for a consumer commission filing. An unknown scammer alone is generally a police matter, not a substitute for a service-deficiency case.',
    },
]

const schemas = [
    blogPostingSchema({
        headline: title,
        description,
        url: '/blog/cyber-law-india-victim-rights',
        image,
        datePublished: publishedAt,
        dateModified: publishedAt,
        author: personSchema({
            name: 'Rabinarayan Pradhan',
            jobTitle: 'Cybersecurity Writer',
            url: '/author/rabinarayan-pradhan',
            image: '/authors/rabinarayan-pradhan.jpeg',
            sameAs: ['https://www.linkedin.com/in/rabinarayan-pradhan-14ab9422b/'],
        }),
        section: 'Cybercrime Law India',
        keywords: ['cyber law India 2026 victim rights', 'RBI zero liability rule India', 'IT Act India cyber fraud', 'online fraud FIR India', 'DPDP Act India 2026'],
        wordCount: 2600,
    }),
    faqPageSchema(faqs),
    breadcrumbListSchema([
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: 'India Cyber Laws 2026', url: '/blog/cyber-law-india-victim-rights' },
    ]),
]

function Source({ href, children }: { href: string; children: ReactNode }) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className="font-semibold text-indigo-700 underline decoration-indigo-300 underline-offset-2 hover:text-indigo-900 dark:text-indigo-300 dark:hover:text-indigo-200">{children}</a>
}

export default function CyberLawIndiaVictimRightsPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schemas) }} />
            <BlogLayout
                title={title}
                description={description}
                publishedAt={publishedAt}
                lastUpdated={publishedAt}
                readTime="17 min"
                author="Rabinarayan Pradhan"
                authorUrl="/author/rabinarayan-pradhan"
                primaryTool={{ label: 'Start the fraud recovery checklist', href: '/got-scammed' }}
                tags={['Cyber Law India', 'Victim Rights', 'RBI Zero Liability', 'August 2026']}
                slug="cyber-law-india-victim-rights"
                sidebar={<SidebarCyberLawIndia title={title} />}
            >
                <div className="not-prose mb-8 overflow-hidden rounded-2xl shadow-lg">
                    <Image src={image} alt="India cyber law 2026 fraud victim rights, RBI zero liability, IT Act and DPDP" width={1200} height={630} priority className="w-full" />
                </div>

                <p><strong>Cyber law India 2026 victim rights</strong> are useful only when you know the conditions, deadlines, and correct complaint route. A bank dispute, police complaint, consumer case, and regulator grievance are different processes. One does not automatically replace another.</p>
                <p>That distinction matters now. On 28 July 2026, the Ministry of Home Affairs said the national financial cyber fraud system had helped save more than ₹11,158 crore across over 32.80 lakh complaints by 30 June 2026. The same update confirmed that 1930 helps citizens lodge financial cyber fraud complaints and that a Money Restoration Module became functional in April 2026. Saved or blocked money is not the same as an automatic refund, but fast reporting can materially improve the chance of stopping its movement.</p>
                <p>This guide explains five practical rights, the <strong>IT Act India cyber fraud</strong> provisions, <strong>BNS cyber fraud India 2026</strong> charges, the accurate <strong>RBI zero liability rule India</strong>, and how to <strong>file FIR cyber fraud India</strong> without relying on viral legal claims. It is general information, not advice for a specific case.</p>

                <div className="not-prose my-8 rounded-2xl border border-red-200 bg-red-50 p-6 dark:border-red-900 dark:bg-red-950/30">
                    <p className="text-sm font-bold text-red-900 dark:text-red-100">If money moved today</p>
                    <p className="mt-2 text-sm leading-6 text-red-800 dark:text-red-200">Call 1930 immediately, report the transaction through your bank&apos;s official fraud channel, obtain both acknowledgement numbers, then complete the complaint at <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="font-bold underline">cybercrime.gov.in</a>. Do not wait to finish reading.</p>
                </div>

                <h2 id="why-knowing-rights-matters">Why Knowing Your Legal Rights Changes Everything</h2>
                <p>Fraud victims are often told one of two wrong extremes: that every authorised transfer is unrecoverable, or that every unauthorised transaction must be refunded in three days. The real position is evidence-based. Who initiated the transaction, whether a payment credential was shared, when the bank alert arrived, when the customer reported, and what the bank&apos;s systems recorded can determine liability.</p>
                <p>Knowing your rights changes the conversation. Instead of asking a branch for sympathy, you can submit a dated dispute referring to the RBI circular, request the complaint number and system evidence, and escalate a service failure through RBI CMS or a consumer commission. Instead of accepting a jurisdiction objection at a police station, you can refer to BNSS Section 173 and submit information about a cognizable offence irrespective of where it occurred.</p>
                <p>Keep one evidence file. Include the bank statement, disputed transaction IDs, bank alerts, complaint timestamps, 1930 and portal acknowledgement numbers, FIR or diary entry, emails with full headers, chat exports, phone numbers, URLs, beneficiary details, device logs, and every bank response. A recent NCDRC case turned on the absence of bank evidence proving that the customer shared an OTP. Evidence is how a general protection becomes usable in your case.</p>

                <h2 id="five-key-rights">Your 5 Key Rights as a Cyber Fraud Victim in India</h2>

                <h3>Right 1: Zero or Limited Liability for Unauthorised Bank Transactions</h3>
                <p>The <strong>RBI zero liability rule India</strong> is set out in the RBI circular dated 6 July 2017. Zero liability applies when the unauthorised electronic transaction resulted from bank fraud, negligence, or deficiency, regardless of when the customer reports it. It also applies to a third-party breach where neither the bank nor customer is at fault if the customer notifies the bank within three working days of receiving the transaction communication.</p>
                <p>If that third-party breach is reported in four to seven working days, liability is limited to the transaction value or the applicable RBI cap, whichever is lower. After seven working days, the bank&apos;s board-approved policy applies. If the loss arose from customer negligence, such as sharing a payment credential, the customer bears loss up to the time of reporting, but the bank bears any later unauthorised loss.</p>
                <p>The RBI circular also requires a shadow credit within 10 working days after notification for a qualifying unauthorised transaction, resolution within 90 days, and places the burden of proving customer liability on the bank. Report first, argue classification second. Ask for the exact reason, evidence, and policy clause if the claim is rejected.</p>

                <h3>Right 2: Give Information About a Cognizable Offence at Any Police Station</h3>
                <p>For an <strong>online fraud FIR India</strong> complaint, BNSS Section 173 says information relating to a cognizable offence may be given orally or electronically to the officer in charge of a police station, irrespective of where the offence occurred. Electronic information must be signed within three days. This supports the practical Zero FIR route when the place of occurrence is uncertain or outside the station&apos;s area.</p>
                <p>The careful legal point is that not every online dispute automatically discloses a cognizable offence. The alleged conduct and sections determine classification. If your facts disclose cognizable identity theft, personation, cheating that induced delivery of property, extortion, or a connected offence, provide the facts and evidence rather than insisting on a guessed section.</p>
                <p>If the station refuses to record information disclosing a cognizable offence, BNSS Section 173(4) allows you to send the substance in writing by post to the Superintendent of Police. If satisfied, the SP must investigate or direct an investigation. If that still fails, apply to the Magistrate. File the cybercrime portal complaint in parallel, but understand that a portal acknowledgement is not itself an FIR.</p>

                <h3>Right 3: Seek Consumer Redress for Deficiency in Service</h3>
                <p>The Consumer Protection Act 2019 can help when the dispute concerns deficiency in service or an unfair trade practice by a bank, payment provider, insurer, platform, or business. It is not a universal recovery case against an unidentified scammer. Name the service provider whose failure you can prove, describe the duty and breach, and attach the financial loss and complaint trail.</p>
                <p>Start with the company&apos;s grievance process. The <Source href="https://consumerhelpline.gov.in">National Consumer Helpline</Source> offers pre-litigation support, and the government&apos;s <Source href="https://e-jagriti.gov.in">e-Jagriti portal</Source> supports consumer commission filings. A lawyer is not mandatory, but complex evidence or a large claim may justify legal advice.</p>

                <h3>Right 4: Escalate to the Financial Regulator for Service Failures</h3>
                <p>Use the regulator that supervises the service provider. For a bank, eligible NBFC, or covered payment participant, first complain to the regulated entity. If it rejects the complaint, partly rejects it, gives an unsatisfactory answer, or does not respond within 30 days, the RBI Integrated Ombudsman Scheme offers cost-free redress through <Source href="https://cms.rbi.org.in">RBI CMS</Source>.</p>
                <p>For a grievance involving a SEBI-regulated entity, first approach the entity and then use <Source href="https://scores.sebi.gov.in">SEBI SCORES</Source>. For an insurer, use the insurer&apos;s grievance channel and <Source href="https://bimabharosa.irdai.gov.in">IRDAI Bima Bharosa</Source>. Regulators address failures by regulated entities. They do not replace a 1930 report or police investigation against the scammer.</p>

                <h3>Right 5: Use Current Data-Security Remedies and Track the DPDP Transition</h3>
                <p>The <strong>DPDP Act India 2026</strong> position needs special care. The DPDP Act 2023 and DPDP Rules 2025 have phased commencement. As of 5 August 2026, core duties involving reasonable security safeguards, breach intimation, and Data Principal rights are scheduled for the later phase after the 18-month transition in May 2027. A victim should not claim that the future breach-notification framework already guarantees compensation today.</p>
                <p>During this transition, IT Act Section 43A remains relevant where a body corporate handling sensitive personal data is negligent in maintaining reasonable security practices and that negligence causes wrongful loss or gain. The facts, type of data, applicable rules, causation, and forum still need proof. Contract, consumer, sectoral, and tort remedies may also matter. Preserve the breach notice, the organization&apos;s privacy policy, consent records, support replies, and evidence connecting the exposure to later fraud.</p>

                <div className="not-prose my-8 overflow-hidden rounded-2xl shadow-md">
                    <Image src="/blog/blog42/five-legal-rights-cyber-fraud-victim-india.webp" alt="Five legal rights of a cyber fraud victim in India, RBI liability FIR consumer court regulator and data security" width={1200} height={675} className="w-full" />
                </div>
                <p><em>Accuracy note for the visual: the RBI protection is conditional, an FIR depends on facts disclosing a cognizable offence, and the DPDP security and breach duties are in phased commencement. The detailed text above states the position as verified on 5 August 2026.</em></p>

                <h2 id="laws-that-protect-you">The Laws That Protect You: IT Act, BNS, RBI Rules, and Consumer Law</h2>
                <p><strong>Key laws protecting cyber fraud victims in India in 2026:</strong></p>
                <ol>
                    <li><strong>IT Act Section 43A:</strong> a current compensation provision for qualifying loss caused by a body corporate&apos;s negligent protection of sensitive personal data.</li>
                    <li><strong>IT Act Sections 66C and 66D:</strong> identity theft and cheating by online personation are offences punishable by up to three years and a fine up to ₹1 lakh.</li>
                    <li><strong>RBI Customer Protection Circular:</strong> zero or limited liability can apply to unauthorised electronic banking transactions based on fault and reporting time.</li>
                    <li><strong>BNS Sections 318 and 319:</strong> cheating and cheating by personation apply based on the facts. Dishonest inducement to deliver property under Section 318(4) can carry up to seven years and a fine.</li>
                    <li><strong>Consumer Protection Act 2019:</strong> a victim can seek redress for proven deficiency in service or unfair trade practice by a service provider or business.</li>
                    <li><strong>DPDP Act 2023 and Rules 2025:</strong> India&apos;s new data protection regime is rolling out in phases, with the principal security, breach, and individual-rights duties scheduled for May 2027.</li>
                </ol>
                <p>You usually do not need a lawyer to call 1930, report at cybercrime.gov.in, dispute a bank transaction, complain through RBI CMS, or approach the National Consumer Helpline. Legal help can be valuable when liability is contested, evidence is technical, an FIR route stalls, or the amount is substantial.</p>

                <div className="not-prose my-8 overflow-hidden rounded-2xl shadow-md">
                    <Image src="/blog/blog42/india-cyber-fraud-laws-2026.webp" alt="India cyber fraud laws 2026, IT Act BNS RBI DPDP and consumer protection reference" width={1200} height={675} className="w-full" />
                </div>
                <p><em>Transition note: the DPDP row in the visual is a high-level summary, not a present automatic compensation promise. See Right 5 for the August 2026 commencement position.</em></p>

                <h2 id="file-cyber-fraud-fir">How to File a Cyber Fraud FIR in India</h2>
                <p>Use this <strong>file FIR cyber fraud India</strong> sequence while continuing the bank and 1930 process:</p>
                <ol>
                    <li><strong>Gather evidence.</strong> Save statements, transaction IDs, screenshots, chat exports, caller numbers, email headers, URLs, device details, and the exact timeline.</li>
                    <li><strong>Report financial loss immediately.</strong> Call 1930 and complete the complaint at <Source href="https://cybercrime.gov.in">cybercrime.gov.in</Source>. Save the acknowledgement number.</li>
                    <li><strong>Notify the bank separately.</strong> Use its official 24-hour fraud channel. Block compromised payment instruments and request written acknowledgement.</li>
                    <li><strong>Give the police a factual complaint.</strong> State how the deception, personation, identity misuse, threats, or unauthorised access occurred and what property was delivered or removed.</li>
                    <li><strong>Ask for the recorded reference.</strong> Obtain the FIR number when registered, or the diary, CSR, NCR, or acknowledgement details used in your state.</li>
                    <li><strong>Escalate a refusal correctly.</strong> For facts disclosing a cognizable offence, write to the SP under BNSS Section 173(4), then approach the Magistrate if necessary.</li>
                </ol>
                <p>Do not surrender your only phone or original records without documenting what was handed over and receiving an acknowledgement. Preserve the original evidence and provide copies or exports when appropriate. Do not contact money mules or attempt a private recovery that may alert the network.</p>

                <div className="not-prose my-8 overflow-hidden rounded-2xl shadow-md">
                    <Image src="/blog/blog42/file-cyber-fraud-fir-india.webp" alt="How to file FIR for cyber fraud India, step by step evidence portal police and escalation guide" width={1200} height={675} className="w-full" />
                </div>

                <h2 id="charges-scammers-face">What Scammers Are Charged Under and Why It Matters</h2>
                <p>Victims do not have to draft a charge sheet. Still, knowing the structure helps you describe the facts:</p>
                <ul>
                    <li><strong>IT Act Section 66C:</strong> dishonest or fraudulent use of another person&apos;s electronic signature, password, or unique identification feature.</li>
                    <li><strong>IT Act Section 66D:</strong> cheating by personation using a communication device or computer resource. The maximum is three years plus a fine up to ₹1 lakh.</li>
                    <li><strong>BNS Section 318:</strong> cheating. The penalty varies by subsection. Section 318(4), dishonest inducement to deliver property or alter valuable security, can reach seven years and a fine.</li>
                    <li><strong>BNS Section 319:</strong> cheating by personation, relevant where a scammer pretends to be a police officer, bank employee, relative, executive, or regulator.</li>
                    <li><strong>BNS Section 308:</strong> extortion, potentially relevant where threats are used to obtain money.</li>
                    <li><strong>BNS Section 351:</strong> criminal intimidation, potentially relevant to threats in digital arrest, sextortion, and loan app harassment.</li>
                </ul>
                <p>BNS Section 317 concerns stolen property, not a special digital arrest offence. The commonly shared claim that every digital arrest scam is charged under Section 317 is therefore incorrect. Police may add forgery, organized crime, conspiracy, money laundering, or other provisions if the evidence supports them.</p>
                <p>The distinction also affects FIR procedure. Under the BNSS classification schedule, cheating that dishonestly induces delivery of property under BNS Section 318(4) is cognizable and non-bailable, while simple cheating under Section 318(2) is non-cognizable and bailable. Describe the money transfer and deception clearly so the facts are not reduced to a vague online dispute.</p>

                <h2 id="real-cases-2026">Real 2026 Victim Cases: Rights Worked When Evidence Was Preserved</h2>
                <h3>Same-day report after a fake electricity bill app</h3>
                <p>In April 2026, <Source href="https://indianexpress.com/article/legal-news/sbi-consumer-cyber-fraud-refund-order-scam-10640140/">The Indian Express reported</Source> that the NCDRC upheld an order directing SBI to refund ₹1.99 lakh and pay ₹25,000 compensation. The customer had downloaded a fake electricity app, but the commission found no proof that he shared an OTP and noted that he reported the fraud to the bank and cybercrime police the same day. This is a reported commission order based on its evidence, not a rule that downloading any malicious app always produces a refund.</p>

                <h3>Retired professor&apos;s ₹12.93 lakh unauthorised withdrawals</h3>
                <p>In May 2026, <Source href="https://indianexpress.com/article/legal-news/why-consumer-body-ordered-sbi-refund-13-lakh-bengaluru-professor-10706421/lite/">The Indian Express reported</Source> that the NCDRC dismissed SBI&apos;s appeal and upheld refund, interest, compensation, and costs for a retired professor. The commission said the bank had not produced technical logs proving that the customer shared payment credentials and applied paragraph 6(ii) of the RBI circular. This shows why victims should ask a bank to state and prove its negligence allegation.</p>

                <h3>Gurgaon consumer case after a fake renewal email</h3>
                <p>In June 2026, <Source href="https://indianexpress.com/article/legal-news/woman-rs-2-34-lakh-cyber-fraud-bank-refund-compensation-10764466/">The Indian Express reported</Source> that a Gurgaon District Consumer Commission directed Axis Bank to refund ₹2.34 lakh and awarded additional relief after a business owner followed a fraudulent website-renewal email. The report says the commission relied on unrebutted evidence, including emails, transactions, the bank complaint, and cybercrime complaint. Consumer outcomes remain fact-specific and may be appealed.</p>

                <h3>National reporting system data</h3>
                <p>The strongest national evidence for acting quickly is operational, not anecdotal. A <Source href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2290377&lang=2&reg=48">28 July 2026 MHA response</Source> said CFCFRMS had saved more than ₹11,158 crore across more than 32.80 lakh complaints by 30 June 2026. It also said complaint-to-FIR conversion and investigation are handled by State and Union Territory law-enforcement agencies. A portal complaint therefore starts a process; it does not promise an FIR, court order, or refund by itself.</p>

                <p>If you have already paid, follow the full <Link href="/blog/recover-money-online-fraud-india">online fraud money recovery guide</Link>. For the first emergency actions, use <Link href="/blog/got-scammed-online-india-what-to-do">Got scammed online in India: what to do</Link>. If someone asks to rent your account or route recovered money, read the <Link href="/blog/mule-account-scam-india">mule account legal risk guide</Link>.</p>

                <h2 id="source-credits">Source Credits and Legal References</h2>
                <ul>
                    <li><Source href="https://www.rbi.org.in/commonman/English/scripts/Notification.aspx?Id=2623">RBI circular dated 6 July 2017</Source> on customer liability for unauthorised electronic banking transactions.</li>
                    <li><Source href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2244478&reg=48&lang=2">Ministry of Finance update dated 24 March 2026</Source> confirming that revised RBI instructions were still issued for public consultation.</li>
                    <li><Source href="https://www.indiacode.nic.in/handle/123456789/13683">India Code, Information Technology Act 2000</Source>, including Sections 43A, 66C, and 66D.</li>
                    <li><Source href="https://www.indiacode.nic.in/handle/123456789/20062?sam_handle=123456789%2F1362">India Code, Bharatiya Nyaya Sanhita 2023</Source>, including Sections 308, 318, 319, and 351.</li>
                    <li><Source href="https://www.indiacode.nic.in/bitstream/123456789/20340/1/bnss%2C_2023.pdf">India Code, Bharatiya Nagarik Suraksha Sanhita 2023</Source>, including Section 173 and the offence classification schedule.</li>
                    <li><Source href="https://www.meity.gov.in/documents/act-and-policies/digital-personal-data-protection-rules-2025-gDOxUjMtQWa">MeitY, DPDP Rules 2025 and enforcement timeline</Source>.</li>
                    <li><Source href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2290377&lang=2&reg=48">Ministry of Home Affairs update dated 28 July 2026</Source> on CFCFRMS 2.0, 1930, saved funds, and restoration modules.</li>
                    <li>The three case studies above are credited and linked individually to their reporting by The Indian Express.</li>
                </ul>

                <h2 id="frequently-asked-questions">Frequently Asked Questions</h2>
                {faqs.map((faq) => <div key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></div>)}

                <div className="not-prose my-10 rounded-2xl bg-gradient-to-br from-indigo-700 to-slate-950 p-7 text-white shadow-lg">
                    <h2 className="mb-3 text-2xl font-extrabold text-white">Use your rights while the evidence is fresh</h2>
                    <p className="mb-5 text-sm leading-relaxed text-indigo-100">Call 1930, notify your bank, preserve every acknowledgement, and use the correct police, regulator, or consumer route. Share this guide with someone who may otherwise accept a rejection without asking for the evidence.</p>
                    <Link href="/" className="inline-flex rounded-xl bg-white px-5 py-3 text-sm font-bold text-indigo-700">Open RakshaAI</Link>
                </div>
            </BlogLayout>
        </>
    )
}
