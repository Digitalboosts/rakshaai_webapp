import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import BlogLayout from '@/components/BlogLayout'
import SidebarBossScam from '@/components/blog/SidebarBossScam'
import { blogPostingSchema, breadcrumbListSchema, faqPageSchema, jsonLd, personSchema } from '@/lib/seo/schema'

const title = 'Boss Scam India: When Your "CEO" Asks You to Transfer Money Urgently'
const description = 'I4C has warned Indian companies about boss scams that hijack or imitate executives to order urgent transfers. Learn the attack and seven verification rules.'
const url = 'https://rakshaai.co/blog/boss-scam-india'
const image = '/blog/blog29/boss-scam-hero.jpg'

export const metadata: Metadata = {
    title: { absolute: 'Boss Scam India: The CEO Fraud Hitting Companies in 2026 | RakshaAI' },
    description,
    keywords: ['boss scam India 2026', 'CEO fraud India', 'CEO impersonation scam India', 'business email compromise India', 'WhatsApp boss scam India', 'MHA boss scam advisory India', 'corporate fraud India 2026', 'how to verify CEO request India'],
    authors: [{ name: 'Rabinarayan Pradhan', url: 'https://rakshaai.co/author/rabinarayan-pradhan' }],
    alternates: { canonical: url },
    robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
    openGraph: {
        title: 'Boss Scam India: Your CEO on WhatsApp Asking for Money May Be Fake',
        description: 'I4C warned companies about CEO impersonation and hijacked WhatsApp sessions. Use these seven checks before approving any urgent transfer.',
        url,
        type: 'article',
        siteName: 'RakshaAI',
        publishedTime: '2026-07-16T00:00:00.000Z',
        modifiedTime: '2026-07-16T00:00:00.000Z',
        tags: ['Boss Scam', 'CEO Fraud', 'Corporate Cybersecurity', 'WhatsApp Scam'],
        images: [{ url: image, width: 1200, height: 675, alt: 'Boss scam India 2026, CEO impersonation fraud WhatsApp urgent transfer' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'I4C Alert: Boss Scam Is Hitting Indian Companies',
        description: 'Fake or hijacked CEO WhatsApp accounts, urgent secret transfers, and malicious compliance files. Seven checks every finance team needs.',
        images: [image],
    },
}

const faqs = [
    { question: 'What is the Boss Scam in India?', answer: 'The Boss Scam, also called CEO fraud, is a cyber-enabled financial fraud in which criminals impersonate or compromise a CEO, managing director, or senior official and instruct employees to make unauthorised transfers or disclose sensitive information. I4C warned Indian companies about an emerging malware-assisted version in June 2026.' },
    { question: 'How do Boss Scam fraudsters know my company structure?', answer: 'They can map reporting lines from leadership pages, LinkedIn profiles, press releases, job titles, and employee posts. In the malware-assisted variant described by I4C, attackers may also gain access to a device, contacts, or an active WhatsApp session.' },
    { question: 'Can a WhatsApp message from my boss be fake?', answer: 'Yes. A criminal can copy a profile photo and display name onto another number. A compromised device or WhatsApp session can make the message look even more authentic. Verify using a known number or an in-person conversation, not the same chat.' },
    { question: 'What should a company do to prevent Boss Scam fraud in India?', answer: 'Require dual approval for payments, independently confirm new or changed bank details, prohibit payment approval through chat alone, protect WhatsApp Web sessions, and train finance staff to stop when a request combines urgency, secrecy, or bypassed controls.' },
    { question: 'What should I do if I already sent money due to a Boss Scam?', answer: 'Call 1930 immediately, alert the sending bank and company management, and report at cybercrime.gov.in. Preserve transaction references, beneficiary details, chats, emails, phone numbers, files, and device logs. Ask the bank to begin its fraud response and beneficiary account freeze process.' },
]

const schemas = [
    blogPostingSchema({
        headline: title,
        description,
        url: '/blog/boss-scam-india',
        image,
        datePublished: '2026-07-16T00:00:00.000Z',
        dateModified: '2026-07-16T00:00:00.000Z',
        author: personSchema({ name: 'Rabinarayan Pradhan', jobTitle: 'Cybersecurity Writer', url: '/author/rabinarayan-pradhan', image: '/authors/rabinarayan-pradhan.jpeg', sameAs: ['https://www.linkedin.com/in/rabinarayan-pradhan-14ab9422b/'] }),
        section: 'Corporate Fraud',
        keywords: ['boss scam India 2026', 'CEO fraud India', 'CEO impersonation scam India', 'business email compromise India'],
        wordCount: 1700,
    }),
    faqPageSchema(faqs),
    breadcrumbListSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Boss Scam India', url: '/blog/boss-scam-india' }]),
]

const Source = ({ href, children }: { href: string; children: React.ReactNode }) => <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>

export default function BossScamIndiaPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schemas) }} />
            <BlogLayout title={title} description={description} publishedAt="2026-07-16T00:00:00.000Z" lastUpdated="2026-07-16T00:00:00.000Z" readTime="12 min" author="Rabinarayan Pradhan" authorUrl="/author/rabinarayan-pradhan" primaryTool={{ label: 'Check a suspicious phone number', href: '/phone-number-checker' }} tags={['Boss Scam', 'CEO Fraud', 'Corporate Cybersecurity', 'July 2026']} slug="boss-scam-india" sidebar={<SidebarBossScam title={title} />}>
                <div className="not-prose mb-10 overflow-hidden rounded-2xl shadow-lg">
                    <Image src={image} alt="Boss scam India 2026, CEO impersonation fraud WhatsApp urgent transfer" width={1200} height={630} className="w-full object-cover" priority />
                    <p className="px-4 pb-3 pt-2 text-center text-xs italic text-gray-500 dark:text-gray-400">A familiar name and profile photo are not payment authorisation. Confirm through an independent channel.</p>
                </div>

                <p><strong>Boss scam India 2026</strong> is now an official corporate cybercrime warning. In June 2026, the Indian Cyber Crime Coordination Centre, or I4C, under the Ministry of Home Affairs warned about CEO impersonation fraud targeting senior executives and finance teams. The dangerous version is not limited to a stranger copying a CEO&apos;s photograph. Attackers may send a malicious regulatory file, compromise a device or WhatsApp session, and use trusted corporate conversations to order fraudulent transfers.</p>
                <p>The warning is backed by real losses. Recent police complaints reported a Pune poultry company losing ₹70 lakh, a Hyderabad firm losing ₹25 lakh, and a Delhi-linked company losing ₹7.8 crore through related executive impersonation methods. The lesson is simple: a message that looks internal can still be criminal.</p>

                <h2 id="what-is-boss-scam">What Is the Boss Scam? The MHA Advisory Explained</h2>
                <p>The <strong>MHA boss scam advisory India</strong> coverage describes two connected targets. First, criminals approach a CEO or another senior official while posing as a regulator such as the Reserve Bank of India. They send an urgent compliance notice or file through email or WhatsApp. If the target opens a malicious attachment on a vulnerable device, the attacker may gain access to data, contacts, or an active WhatsApp session.</p>
                <p>The second target is the employee who can move money. Using the executive&apos;s identity, compromised account, or manipulated contacts, the criminal tells accounts staff to pay a new beneficiary immediately. This overlaps with <strong>business email compromise India</strong>, but the 2026 alert highlights messaging apps, device compromise, and fake regulatory documents as important attack paths.</p>
                <p>Not every fake boss message involves malware. A basic <strong>CEO impersonation scam India</strong> attempt can use a copied photo, a new phone number, and public company information. Both versions succeed when employees treat identity signals as approval.</p>

                <h2 id="how-boss-scam-works">How the Boss Scam Works in Indian Companies</h2>
                <h3>Step 1: Research, They Know Your Company Structure</h3>
                <p>Criminals study company websites, LinkedIn, press releases, tender announcements, and employee posts. They learn who leads the business, who handles accounts, when an executive is travelling, and which suppliers appear in public records. A message can then use the right names and business vocabulary.</p>
                <h3>Step 2: The Spoofed WhatsApp or Email</h3>
                <p>In a basic <strong>WhatsApp boss scam India</strong> attempt, the fraudster copies a senior leader&apos;s name and profile photo onto a different number. Email attacks may use a lookalike domain, altered reply-to address, or a compromised mailbox. In I4C&apos;s malware-assisted scenario, the attacker can abuse a real WhatsApp session or change how a CEO contact appears on a compromised device.</p>
                <h3>Step 3: The Urgent Confidential Transfer Request</h3>
                <p>The request often cites an acquisition, tax issue, vendor emergency, legal settlement, or regulatory deadline. It asks the employee to bypass the usual approver because the matter is confidential. The beneficiary account is controlled by criminals or a mule. Several smaller transfers may follow once the first payment succeeds.</p>
                <h3>Step 4: The Malware Delivery Variant</h3>
                <p>An attachment presented as an RBI or compliance document may install malware, expose stored information, or enable account misuse. Treat unexpected ZIP, executable, shortcut, or password-protected files as hostile until IT verifies them. A regulator&apos;s logo does not make a file safe.</p>

                <div className="not-prose my-8 overflow-hidden rounded-2xl shadow-md">
                    <Image src="/blog/blog29/boss-scam-process.jpg" alt="How boss scam CEO fraud works India, four step process diagram" width={1000} height={563} className="w-full" />
                </div>

                <h2 id="why-it-works">Why This Scam Works So Well in Indian Workplaces</h2>
                <p>Authority changes how people assess risk. A junior employee may fear appearing slow, disloyal, or obstructive. Urgency removes the time needed to check. Secrecy prevents a colleague from noticing the anomaly. Hybrid work makes a new number or text-only instruction feel less unusual. Together, these pressures can defeat a technically secure payment system.</p>
                <p>The attack also exploits process ambiguity. If staff routinely approve vendor changes over WhatsApp, share passwords, use personal email for work, or allow a single person to create and approve payments, fraudsters do not need to break strong controls. They only need to imitate ordinary behaviour.</p>
                <p>AI can strengthen impersonation through polished writing, translated messages, cloned voices, or synthetic video. Read our <Link href="/blog/ai-voice-cloning-scam-india">AI voice cloning scam guide</Link>. A voice or video call should support verification, not replace a known-number callback and proper approval workflow.</p>

                <div className="not-prose my-8 overflow-hidden rounded-2xl shadow-md">
                    <Image src="/blog/blog29/boss-scam-real-vs-fake.jpg" alt="Real vs fake CEO WhatsApp message India, how to identify boss scam" width={900} height={600} className="w-full" />
                </div>

                <h2 id="how-to-verify">How to Verify Any Financial Request From Senior Management</h2>
                <p><strong>How to verify a financial request from your CEO or boss in India:</strong></p>
                <ol>
                    <li>Call the person directly on their known office or personal number, not through the message thread.</li>
                    <li>Never rely on a WhatsApp message or email alone for any financial transfer.</li>
                    <li>Walk to their office and confirm in person if they are in the building.</li>
                    <li>Check the sender email domain carefully. One changed character can indicate a fake domain.</li>
                    <li>Require a second approver for every genuine urgent transfer and never waive the rule.</li>
                    <li>Treat instructions to keep a financial transfer secret as a critical scam signal.</li>
                    <li>Report the suspicious message or file to the IT or security team immediately.</li>
                </ol>
                <p><strong>No real business leader should ask an employee to conceal a financial transfer from required approvers.</strong> Verification is not insubordination. It is financial control.</p>

                <div className="not-prose my-8 overflow-hidden rounded-2xl shadow-md">
                    <Image src="/blog/blog29/boss-scam-verification-rules.jpg" alt="How to verify CEO payment request India, seven rules to stop boss scam" width={720} height={900} className="mx-auto w-full max-w-2xl" />
                </div>

                <h2 id="company-protocol">Company Protocol: 5 Rules Every Finance Team Needs</h2>
                <ol>
                    <li><strong>Dual control:</strong> one employee creates a payment and a different authorised person approves it.</li>
                    <li><strong>Independent callback:</strong> confirm urgent payments and beneficiary changes using a number stored in the company directory.</li>
                    <li><strong>No chat-only approval:</strong> WhatsApp, SMS, Slack, Teams, or email can start a request but cannot complete authorisation.</li>
                    <li><strong>Beneficiary cooling period:</strong> delay high-value payments to new accounts until the payee is independently verified.</li>
                    <li><strong>Incident drill:</strong> finance, leadership, IT, legal, and banking contacts should rehearse what happens after a suspicious request.</li>
                </ol>
                <p>Companies should also enable multi-factor authentication, review linked WhatsApp devices, restrict software installation, scan inbound archives, and configure email authentication. Executives should reduce public exposure of personal numbers, travel plans, and reporting details.</p>

                <h2 id="already-transferred">What to Do If You Already Transferred Money</h2>
                <ol>
                    <li>Call the National Cybercrime Helpline at <strong>1930 immediately</strong>.</li>
                    <li>Call the sending bank&apos;s fraud team and request an urgent hold or recall.</li>
                    <li>File a complaint at <Source href="https://cybercrime.gov.in">cybercrime.gov.in</Source> with transaction IDs and beneficiary details.</li>
                    <li>Tell management, IT security, legal, and the genuine executive. Do not hide the incident.</li>
                    <li>Preserve chats, emails, headers, attachments, call logs, bank records, and device logs. Do not delete or forward a suspected malicious file.</li>
                    <li>Disconnect a suspected compromised device from the network and let the security team preserve evidence before cleaning it.</li>
                    <li>File the required police complaint and coordinate with both banks.</li>
                </ol>
                <p>Speed matters because stolen funds can be split across mule accounts quickly. No source can guarantee recovery within a fixed number of minutes, but immediate reporting gives banks and law enforcement the best available opportunity to interrupt the transfers. Follow our detailed <Link href="/blog/got-scammed-online-india-what-to-do">online scam recovery checklist</Link>.</p>

                <h2 id="real-cases">Real Boss Scam Cases in India and Source Credits</h2>
                <p>These reports show different versions of <strong>CEO fraud India</strong>. Amounts below are allegations recorded in police complaints or details attributed to investigators. They are not final court findings.</p>
                <ul>
                    <li><Source href="https://indianexpress.com/article/pune/pune-whale-phishing-scam-ceo-impersonation-70-lakh-10657069/">The Indian Express, 4 May 2026</Source>: Pimpri Chinchwad Police registered a complaint after a Pune poultry company accountant allegedly sent ₹70 lakh. Investigators said the accountant&apos;s phone and contact list had been compromised, making the sender appear as the CEO.</li>
                    <li><Source href="https://www.newindianexpress.com/cities/hyderabad/2026/Jun/15/hyderabad-firm-loses-rs-25-lakh-in-whatsapp-impersonation-scam-targeting-company-director">The New Indian Express, 15 June 2026</Source>: a Hyderabad accounts employee allegedly transferred ₹25 lakh after a fraudster spoofed a director&apos;s WhatsApp identity and manipulated the chat context.</li>
                    <li><Source href="https://indianexpress.com/article/cities/delhi/boss-scam-new-modus-operandi-revealed-in-rs-7-8-cr-fraud-linked-to-ex-pms-son-naresh-gujral-10754389/">The Indian Express, 28 June 2026</Source>: Delhi Police investigators linked a malicious message and WhatsApp compromise to four transfers totalling ₹7.8 crore, according to the report.</li>
                    <li><Source href="https://www.ndtv.com/india-news/a-whatsapp-text-from-boss-costs-company-over-rs-10-crore-11648089">NDTV, 18 June 2026</Source>: Delhi Police arrested four people after an accounts employee allegedly made 63 payments exceeding ₹10 crore on instructions from a fake boss identity.</li>
                    <li><Source href="https://economictimes.indiatimes.com/news/india/the-boss-scam-i4c-warns-of-cyber-fraud-targeting-ceos-firms/articleshow/131918118.cms">The Economic Times, 23 June 2026</Source> and <Source href="https://www.business-standard.com/india-news/boss-scam-ceo-impersonation-fraud-govt-advisory-i4c-126062300353_1.html">Business Standard, 24 June 2026</Source>: detailed reporting of the I4C and National Cybercrime Threat Analytics Unit advisory, including regulator impersonation, malicious files, WhatsApp compromise, and independent verification advice.</li>
                    <li><Source href="https://i4c.mha.gov.in">I4C, Ministry of Home Affairs</Source>: official cybercrime coordination information. Financial cyber fraud can be reported through 1930 and the <Source href="https://cybercrime.gov.in">National Cybercrime Reporting Portal</Source>.</li>
                </ul>
                <p>Boss scams can borrow fear tactics from <Link href="/blog/digital-arrest-scam-india">digital arrest fraud</Link>, especially when attackers pretend to represent the RBI or another authority. The correct response remains the same: stop, verify independently, and refuse any request to bypass controls.</p>

                <h2 id="frequently-asked-questions">Frequently Asked Questions</h2>
                {faqs.map((faq) => <div key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></div>)}

                <div className="not-prose my-10 rounded-2xl bg-gradient-to-br from-red-700 to-slate-950 p-7 text-white shadow-lg">
                    <h2 className="mb-3 text-2xl font-extrabold text-white">Verify the caller before company money moves</h2>
                    <p className="mb-5 text-sm leading-relaxed text-red-50">Check a suspicious phone number on RakshaAI and share this guide with every employee who can create or approve a payment.</p>
                    <Link href="/phone-number-checker" className="inline-flex rounded-xl bg-white px-5 py-3 text-sm font-bold text-red-700">Check a phone number</Link>
                </div>
            </BlogLayout>
        </>
    )
}
