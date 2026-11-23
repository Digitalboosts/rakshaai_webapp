import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import BlogLayout from '@/components/BlogLayout'
import SidebarChakshuPortal from '@/components/blog/SidebarChakshuPortal'
import { blogPostingSchema, breadcrumbListSchema, faqPageSchema, jsonLd, personSchema, type SchemaNode } from '@/lib/seo/schema'

const title = 'Chakshu Portal India: How to Report Scam Calls and SMS to DoT in 2026'
const description = 'Use the Chakshu portal India scam report form for suspicious calls, SMS and WhatsApp messages. Follow the verified 2026 steps and know when to call 1930.'
const url = 'https://rakshaai.co/blog/chakshu-portal-india-how-to-report'
const image = '/blog/blog48/chakshu-portal-india-hero.webp'
const publishedAt = '2026-08-14T00:00:00.000Z'

export const metadata: Metadata = {
    title: { absolute: 'Chakshu Portal India: Report Scam Calls, SMS in 2026 | RakshaAI' },
    description,
    keywords: [
        'Chakshu portal India scam report',
        'Chakshu TRAI India',
        'Sanchar Saathi portal India',
        'how to report scam call India TRAI',
        'report fraud SMS India government',
        'TRAI scam number India',
        'government scam reporting India',
        'Chakshu report suspicious call',
    ],
    authors: [
        { name: 'Rabinarayan Pradhan', url: 'https://rakshaai.co/author/rabinarayan-pradhan' },
        { name: 'RakshaAI Threat Intelligence Team', url: 'https://rakshaai.co' },
    ],
    alternates: { canonical: url },
    robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
    openGraph: {
        title: 'Chakshu Portal India: Report Scam Calls and SMS to DoT in Minutes',
        description: 'Use the live Chakshu form correctly, see what happens to a report and learn when 1930 or cybercrime.gov.in is the right route instead.',
        url,
        type: 'article',
        siteName: 'RakshaAI',
        locale: 'en_IN',
        publishedTime: publishedAt,
        modifiedTime: publishedAt,
        authors: ['RakshaAI Threat Intelligence Team', 'Rabinarayan Pradhan'],
        tags: ['Chakshu Portal India', 'Sanchar Saathi', 'Scam Reporting', 'August 2026'],
        images: [{
            url: image,
            width: 1200,
            height: 675,
            alt: 'Chakshu portal India scam report guide for suspicious calls, SMS and WhatsApp messages',
        }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Got a Scam Call? Report It Through Chakshu in Minutes',
        description: 'The verified DoT form, the evidence to save and the difference between Chakshu, 1930 and cybercrime.gov.in.',
        images: [image],
    },
}

const faqs = [
    {
        question: 'What is the Chakshu portal in India?',
        answer: 'Chakshu is the Department of Telecommunications facility inside Sanchar Saathi for reporting suspected fraudulent or unsolicited communications received by call, SMS or WhatsApp. DoT analyses the crowd-sourced reports for misuse of telecom resources. If money has already been lost, call 1930 and file at cybercrime.gov.in instead of relying on Chakshu alone.',
    },
    {
        question: 'What is the difference between Chakshu and cybercrime.gov.in?',
        answer: 'Chakshu is designed for a suspicious communication or attempted fraud, particularly before financial loss. DoT uses aggregated reports to identify telecom misuse. Cybercrime.gov.in is the national portal for reporting cybercrime to the law enforcement system. If money moved, call 1930 immediately, contact the bank and complete the cybercrime.gov.in complaint.',
    },
    {
        question: 'Does reporting on Chakshu actually result in numbers being blocked in India?',
        answer: 'A report does not guarantee that one number will be blocked. DoT states that it analyses crowd-sourced reports and linked telecom resources rather than taking automatic action on each submission. As of 15 July 2026, the government said 11.18 lakh suspected fraud communication reports had contributed to analysis under which 50.90 lakh mobile connections were disconnected.',
    },
    {
        question: 'What is the Sanchar Saathi portal in India?',
        answer: 'Sanchar Saathi is the Department of Telecommunications portal and mobile app for telecom safety services. Public services include Chakshu, blocking and tracing a lost or stolen handset, checking mobile connections in your name and verifying handset IMEI details before purchase.',
    },
    {
        question: 'Can I check how many SIM cards are registered in my name in India?',
        answer: 'Yes. Open the official Sanchar Saathi service called Know Mobile Connections in Your Name, also reached through the TAFCOP address. Verify your mobile number by OTP, review the listed connections and report any entry that is not yours or no longer required.',
    },
    {
        question: 'How to report a scam call in India to TRAI or DoT?',
        answer: 'For a suspected fraud call received within the last 30 days, use DoT\'s Chakshu form at sancharsaathi.gov.in/sfc. For ordinary spam or unsolicited commercial communication, use the UCC option in Chakshu or the TRAI complaint routes supported by your telecom provider, including 1909. For completed cybercrime or financial loss, call 1930 and use cybercrime.gov.in.',
    },
]

const howToSchema: SchemaNode = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    '@id': `${url}#howto`,
    name: 'How to Report a Scam Call on Chakshu Portal India',
    description: 'Step by step guide to reporting a suspected fraudulent call, SMS or WhatsApp message through the Department of Telecommunications Chakshu facility.',
    totalTime: 'PT3M',
    step: [
        { '@type': 'HowToStep', position: 1, name: 'Open the official Chakshu form', text: 'Visit sancharsaathi.gov.in/sfc and choose Report Suspected Fraud Communication.' },
        { '@type': 'HowToStep', position: 2, name: 'Select the communication medium', text: 'Choose Call, SMS or WhatsApp.' },
        { '@type': 'HowToStep', position: 3, name: 'Select the fraud category', text: 'Choose the closest live category, such as KYC and payment, impersonation, fake customer care, online job or lottery, malicious link or investment fraud.' },
        { '@type': 'HowToStep', position: 4, name: 'Add the sender and incident details', text: 'Enter the suspected number or SMS header plus the date, time and complaint details.' },
        { '@type': 'HowToStep', position: 5, name: 'Upload evidence', text: 'Attach a JPG or PNG screenshot. It is required for SMS and WhatsApp reports on the current form and useful for call reports.' },
        { '@type': 'HowToStep', position: 6, name: 'Verify your mobile number', text: 'Enter your mobile number, complete the CAPTCHA and verify the OTP.' },
        { '@type': 'HowToStep', position: 7, name: 'Review and submit', text: 'Check the preview, accept the declaration, submit the report and save the confirmation details.' },
    ],
}

const schemas = [
    blogPostingSchema({
        headline: title,
        description,
        url: '/blog/chakshu-portal-india-how-to-report',
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
        section: 'Cybercrime Reporting',
        keywords: ['Chakshu portal India scam report', 'Chakshu TRAI India', 'Sanchar Saathi portal India', 'government scam reporting India', 'how to report scam call India TRAI'],
        wordCount: 2400,
    }),
    howToSchema,
    faqPageSchema(faqs),
    breadcrumbListSchema([
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: 'Chakshu Portal India', url: '/blog/chakshu-portal-india-how-to-report' },
    ]),
]

function Source({ href, children }: { href: string; children: ReactNode }) {
    return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
}

export default function ChakshuPortalIndiaPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schemas) }} />
            <BlogLayout
                title={title}
                description={description}
                publishedAt={publishedAt}
                lastUpdated={publishedAt}
                readTime="14 min"
                author="Rabinarayan Pradhan"
                authorUrl="/author/rabinarayan-pradhan"
                primaryTool={{ label: 'Check a suspicious phone number', href: '/phone-number-checker' }}
                tags={['Chakshu Portal India', 'Sanchar Saathi', 'Scam Reporting', 'August 2026']}
                slug="chakshu-portal-india-how-to-report"
                sidebar={<SidebarChakshuPortal title={title} description={description} />}
            >
                <div className="not-prose mb-10 overflow-hidden rounded-2xl shadow-lg">
                    <Image src={image} alt="Chakshu portal India TRAI and DoT guide to report scam calls, SMS and WhatsApp messages" width={1200} height={675} className="w-full object-cover" priority />
                    <p className="px-4 pb-3 pt-2 text-center text-xs text-gray-500 dark:text-gray-400">Illustration only. The live government form and confirmation screen may look different.</p>
                </div>

                <p><strong>Chakshu portal India scam report</strong> searches usually come from one urgent question: where can you send a suspicious phone number before it harms someone else? Chakshu is the official Department of Telecommunications, or DoT, reporting facility inside the <strong>Sanchar Saathi portal India</strong>. It accepts suspected fraud communications received through a phone call, SMS or WhatsApp.</p>
                <p>The distinction matters. Chakshu is intended primarily for an attempted fraud or suspicious communication where no financial loss has occurred. If you already transferred money, shared banking access or became a victim of cybercrime, call <a href="tel:1930">1930</a> immediately, contact your bank and file at <Source href="https://cybercrime.gov.in">cybercrime.gov.in</Source>. A Chakshu submission must not delay those recovery steps.</p>

                <h2 id="what-is-chakshu">What Is the Chakshu Portal and Why It Matters?</h2>
                <p>Chakshu means eye. The service gives citizens a way to flag communications that appear designed to defraud, impersonate or misuse telecom resources. DoT does not describe it as a police complaint portal. Instead, it analyses crowd-sourced reports, finds relationships between reported numbers, handsets, SMS headers and other telecom resources, and shares relevant intelligence with authorised stakeholders.</p>
                <p>You may also see the phrase <strong>Chakshu TRAI India</strong>. The accurate description is more specific: Chakshu is a DoT facility under Sanchar Saathi. TRAI regulates commercial communications and its rules support action against spam. DoT stated in a December 2024 parliamentary reply that suspected fraud reports can lead to action on mobile connections, handsets, bulk SMS senders and WhatsApp accounts, while UCC or spam reports are sent to telecom providers for action under TRAI regulations.</p>
                <p>This is why the portal can be useful even when you spotted the fraud in time. Your one report can become a signal in a wider pattern. DoT reported that, as of 15 July 2026, <strong>11.18 lakh suspected fraud communication reports</strong> had contributed to analysis under which <strong>50.90 lakh mobile connections were disconnected</strong>. That does not mean every report caused one disconnection. The government explicitly says it uses aggregated data to identify misuse rather than automatically acting on every individual submission.</p>

                <h2 id="what-you-can-report">What You Can Report on Chakshu</h2>
                <p>The current form asks you to choose Call, SMS or WhatsApp and then select a live category. It accepts an incident from within the previous 30 days. Use the closest category and describe the communication plainly. Do not include guesses you cannot support.</p>

                <h3>Suspected Scam Calls</h3>
                <p>Report a caller pretending to be bank support, an insurer, a courier, a telecom employee or a government officer. The current category list includes fake customer care, IVR or robocalls, investment and trading pitches, and impersonation of DoT or TRAI. Before calling back, use RakshaAI&apos;s <Link href="/blog/how-to-check-phone-number-scam-india">guide to check a phone number for scam signals</Link> and independently find the organisation&apos;s official contact number.</p>

                <h3>Fraudulent SMS Messages</h3>
                <p>You can <strong>report fraud SMS India government</strong> warnings through Chakshu when a message pushes a fake KYC update, electricity payment, reward redemption, job offer, loan, malicious link or other suspected fraud. The live form distinguishes an SMS sent from a number from one sent through a header such as AX-CDEFGH. It also asks for phone numbers and URLs mentioned inside the message. Read the <Link href="/blog/sms-scam-india">SMS scam India guide</Link> for red flags before opening any link.</p>

                <h3>WhatsApp Based Fraud</h3>
                <p>Choose WhatsApp, then identify whether it was a call or text and enter the number and country. Save the profile, number, message and link in screenshots before blocking the sender. The current Chakshu form requires a JPG or PNG attachment for SMS and WhatsApp reports. You should also use WhatsApp&apos;s own report function because it gives the platform the relevant account context.</p>

                <h3>Digital Arrest and Impersonation Calls</h3>
                <p>Calls pretending to come from police, CBI, Customs, Aadhaar, RBI, DoT or TRAI have dedicated or closely matching categories. TRAI has publicly warned that it does not contact customers to disconnect mobile numbers. A <strong>TRAI scam number India</strong> report belongs on Chakshu when it is an attempted fraud. If the caller obtained money or account access, use 1930 and cybercrime.gov.in as well.</p>

                <h2 id="how-to-file-chakshu-report">Step by Step: How to File a Chakshu Report in About 3 Minutes</h2>
                <p><strong>How to report a scam call on Chakshu portal India in about 3 minutes when your evidence is ready:</strong></p>
                <ol>
                    <li>Go to <Source href="https://sancharsaathi.gov.in/sfc/">sancharsaathi.gov.in/sfc</Source> and choose <strong>Report Suspected Fraud Communication</strong>. The often-shared chakshu.sancharsaathi.gov.in address did not resolve during our 14 August 2026 verification, so use the official <code>/sfc</code> address.</li>
                    <li>Select the medium: <strong>Call, SMS or WhatsApp</strong>.</li>
                    <li>Select the closest category, such as KYC and payment, government impersonation, fake customer care, online job or lottery, malicious link, investment fraud or another suspected fraud.</li>
                    <li>Enter the suspected number or SMS header, then add the exact date, time and at least 30 valid characters describing what happened.</li>
                    <li>Upload a JPG or PNG screenshot. The live form requires an attachment for SMS and WhatsApp. A call-log screenshot is useful for a call report.</li>
                    <li>Enter your own 10-digit mobile number, complete the CAPTCHA and verify the OTP.</li>
                    <li>Review the preview, accept the declaration, submit and save the confirmation or report details shown to you.</li>
                </ol>
                <p>The live form accepts incidents from the previous 30 days. Report promptly while the call log, message, sender profile and time are still available. Never upload an OTP, UPI PIN, password, card CVV or unrelated private document as evidence.</p>

                <h3>What Evidence Makes a Report More Useful?</h3>
                <ul>
                    <li>A screenshot showing the sender number or SMS header and the complete message</li>
                    <li>The exact date and time from your call or message log</li>
                    <li>Any phone number, website or app link mentioned inside the communication</li>
                    <li>A short factual description of what the sender claimed and what action they requested</li>
                    <li>The category that best matches the attempt, without exaggeration</li>
                </ul>

                <h2 id="what-happens-after-report">What Happens After You Report on Chakshu?</h2>
                <p>DoT says Chakshu reports are analysed to identify misuse of telecom resources. The possible downstream actions include re-verification or disconnection of mobile connections, blocking of associated handsets, disengagement of WhatsApp accounts, and blacklisting of bulk SMS senders, headers or message templates. The route depends on the evidence and the relationships found during analysis.</p>
                <p>A citizen report is therefore an input, not a final verdict. DoT may connect a few reported numbers to many other numbers or devices. Telecom providers can be directed to re-verify subscribers, and connections that fail re-verification may be disconnected. This process protects legitimate subscribers from automatic punishment based on a single unverified allegation.</p>

                <h2 id="which-reporting-tool">Chakshu vs 1930 vs cybercrime.gov.in: When to Use Which</h2>
                <ul>
                    <li><strong>Chakshu:</strong> use it for a suspected fraud call, SMS or WhatsApp message, mainly before money is lost. The goal is telecom intelligence and action on misused resources.</li>
                    <li><strong>1930:</strong> call immediately after financial cyber fraud. Give the transaction reference, destination account or UPI details, amount, time and bank information so the financial response system can act quickly.</li>
                    <li><strong>cybercrime.gov.in:</strong> use it to register a cybercrime complaint and upload the evidence required by the national law enforcement reporting system.</li>
                </ul>

                <div className="not-prose my-8 overflow-hidden rounded-2xl shadow-md">
                    <Image src="/blog/blog48/chakshu-vs-1930-vs-cybercrime-india.webp" alt="Chakshu vs 1930 vs cybercrime.gov.in India and when to use each reporting tool" width={900} height={600} className="w-full" />
                    <p className="bg-amber-50 px-4 py-3 text-xs leading-relaxed text-amber-900 dark:bg-amber-950/30 dark:text-amber-100"><strong>Accuracy note:</strong> Do not wait 30 to 60 minutes before calling 1930. Call as soon as financial fraud is noticed. You also do not need to use all three routes after every incident. Use Chakshu for the suspect communication, and use 1930 plus cybercrime.gov.in when fraud or financial loss has occurred.</p>
                </div>

                <h2 id="real-chakshu-cases">Real Chakshu Cases and Government Reported Results</h2>
                <h3>Fourteen Reports Led to Action Within 24 Hours</h3>
                <p>On 19 May 2024, citizens reported 14 mobile numbers connected with fake LIC or insurance representatives and fraudulent SBI reward messages. A Ministry of Communications release said DoT analysed the linkages within 24 hours, blocked <strong>372 mobile handsets</strong> across India and suspended <strong>906 mobile connections</strong> for re-verification. This case shows why a small number of precise reports can expose a much larger network.</p>

                <h3>Electricity KYC Reports Exposed 31,740 Linked Connections</h3>
                <p>In June 2024, citizen reports described electricity KYC update messages and malicious APK files used to take control of victims&apos; devices. DoT said analysis began with five suspect numbers and expanded to <strong>392 linked handsets and 31,740 mobile connections</strong>. It directed pan-India handset blocking and re-verification of the connections, with failed re-verification leading to disconnection.</p>

                <h3>What the Latest National Data Says</h3>
                <p>A July 2026 parliamentary reply provides the clearest current total: 11.18 lakh reports and 50.90 lakh disconnected mobile connections as of 15 July 2026. Earlier category data presented to Parliament showed reports were concentrated in KYC and payment fraud, impersonation, fake customer care, online jobs, lottery and loan offers, investment schemes, malicious links and other suspected fraud. These are official administrative figures, not proof that every reported communication was criminal.</p>

                <h2 id="sanchar-saathi-tools">Other Tools in the Sanchar Saathi Portal India</h2>
                <h3>Block or Trace a Lost or Stolen Handset</h3>
                <p>The CEIR service lets a user request blocking of a lost or stolen device across Indian telecom networks using its IMEI details, and later unblock it if recovered. A police report and other details may be required. Use the official flow reached from Sanchar Saathi.</p>

                <h3>Know Mobile Connections in Your Name</h3>
                <p>The service commonly associated with TAFCOP lets you verify by OTP and review mobile connections issued in your name. Mark a connection that is not yours or is no longer required. This is safer wording than saying the page displays every SIM linked to Aadhaar, because the official public label is <strong>Know Mobile Connections in Your Name</strong>.</p>

                <h3>Know Your Mobile Handset</h3>
                <p>Sanchar Saathi also provides IMEI verification so a buyer can check basic handset identity before purchase. Dial <code>*#06#</code> to see the IMEI on most devices, then use the official verification route. This is about the handset identifier, not discovering who owns a phone number.</p>

                <h3>Is There a Public DIP Lookup India Tool?</h3>
                <p>No. The Digital Intelligence Platform, or DIP, is a secure DoT system for information exchange among authorised stakeholders such as telecom providers, law enforcement agencies, banks and other institutions. The government&apos;s launch material says DIP is not accessible to citizens. There is no public <strong>DIP lookup India</strong> page that reveals whether a number was registered with someone&apos;s documents.</p>

                <div className="not-prose my-8 overflow-hidden rounded-2xl shadow-md">
                    <Image src="/blog/blog48/sanchar-saathi-tools-india.webp" alt="Sanchar Saathi portal India tools including Chakshu, CEIR and TAFCOP with DIP correction" width={1200} height={675} className="w-full" />
                    <p className="bg-amber-50 px-4 py-3 text-xs leading-relaxed text-amber-900 dark:bg-amber-950/30 dark:text-amber-100"><strong>Correction to the supplied graphic:</strong> DIP is a secure back-end intelligence platform, not a citizen number lookup. The public handset check is Know Your Mobile Handset, while TAFCOP is presented publicly as Know Mobile Connections in Your Name.</p>
                </div>

                <div className="not-prose my-8 overflow-hidden rounded-2xl shadow-md">
                    <Image src="/blog/blog48/check-sim-cards-aadhaar-tafcop.webp" alt="How to check mobile connections in your name through TAFCOP and Sanchar Saathi India" width={900} height={600} className="w-full" />
                    <p className="bg-blue-50 px-4 py-3 text-xs leading-relaxed text-blue-900 dark:bg-blue-950/30 dark:text-blue-100"><strong>Current official wording:</strong> the service shows mobile connections issued in your name. Open it only through sancharsaathi.gov.in or the official TAFCOP subdomain, then report any connection that is not yours.</p>
                </div>

                <h2 id="government-scam-reporting">Government Scam Reporting India: A Simple Decision Rule</h2>
                <p>Use one question: <strong>Did the suspicious contact cause a completed cybercrime or financial loss?</strong> If no, preserve the message and use Chakshu within 30 days. If yes, call 1930 now, contact the bank or payment provider, and file at cybercrime.gov.in. You can still report the originating communication through Chakshu, but it is an additional telecom report, not a replacement for the financial and police routes.</p>
                <p>Before responding to any caller, check the number with RakshaAI&apos;s <Link href="/phone-number-checker">phone number checker</Link>. If your mobile service suddenly stops or an unknown SIM appears in your name, follow the <Link href="/blog/sim-swap-fraud-india">SIM swap fraud response guide</Link>. Reporting and recovery work best when the evidence is exact and the correct channel is used quickly.</p>

                <div className="not-prose my-10 rounded-2xl bg-gradient-to-br from-slate-950 to-teal-950 p-7 text-white">
                    <h2 id="instagram-reel-script" className="text-2xl font-extrabold">30 Second Instagram Reel Script</h2>
                    <p className="mt-2 text-sm text-teal-100">Format: phone close-ups, screen recording of the official route, bold captions and fast but clear delivery.</p>
                    <div className="mt-6 space-y-4 text-sm leading-6">
                        <div><strong className="text-amber-300">0 to 3 seconds, hook:</strong> Show an incoming scam call. Voice: &quot;Got a scam call or fake SMS? Do not just block it. Report it to the government.&quot;</div>
                        <div><strong className="text-amber-300">3 to 9 seconds:</strong> Show sancharsaathi.gov.in/sfc on screen. Voice: &quot;Open Sanchar Saathi and tap Chakshu, the official DoT reporting tool.&quot;</div>
                        <div><strong className="text-amber-300">9 to 17 seconds:</strong> Show Call, SMS and WhatsApp, then category and evidence. Voice: &quot;Choose call, SMS or WhatsApp. Add the number, category, date, time and screenshot.&quot;</div>
                        <div><strong className="text-amber-300">17 to 24 seconds:</strong> Show OTP verification and a submitted screen. Voice: &quot;Verify your mobile by OTP, review and submit. Your report can help DoT identify linked scam connections.&quot;</div>
                        <div><strong className="text-amber-300">24 to 30 seconds, CTA:</strong> Split screen with Chakshu and 1930. Voice: &quot;No money lost? Use Chakshu. Money already gone? Call 1930 immediately and file at cybercrime.gov.in. Save and share this.&quot;</div>
                    </div>
                    <p className="mt-5 text-xs text-teal-200"><strong>On-screen caption:</strong> Report suspicious calls. Protect the next person.</p>
                </div>

                <h2 id="frequently-asked-questions">Frequently Asked Questions</h2>
                {faqs.map((faq) => <div key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></div>)}

                <h2 id="sources-and-credits">Sources and Credits</h2>
                <ul>
                    <li><Source href="https://sancharsaathi.gov.in/sfc/">Sanchar Saathi Chakshu live service</Source>: current reporting media, categories, evidence, date limit and OTP flow, verified 14 August 2026</li>
                    <li><Source href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2288303&lang=1&reg=48">Ministry of Communications, Measures Taken to Tackle Cyber Frauds, 23 July 2026</Source>: 11.18 lakh reports and 50.90 lakh disconnections as of 15 July 2026</li>
                    <li><Source href="https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=2223779&lang=2&reg=48">Ministry of Communications parliamentary data, February 2026</Source>: report categories and enforcement results</li>
                    <li><Source href="https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=2021309&lang=2&reg=48">Ministry of Communications, citizen reports and action, 22 May 2024</Source>: 14 numbers, 372 handsets and 906 connections</li>
                    <li><Source href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2025970&lang=2&reg=48">Ministry of Communications, Electricity KYC Update Scam, 17 June 2024</Source>: five initial numbers, 392 handsets and 31,740 linked connections</li>
                    <li><Source href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2083727&lang=2&reg=48">Ministry of Communications Rajya Sabha reply, 12 December 2024</Source>: distinction between DoT Chakshu action and TRAI UCC regulation</li>
                    <li><Source href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2011488">DoT launch information for Chakshu and DIP, 5 March 2024</Source>: DIP stakeholder purpose and the warning to use 1930 for completed fraud</li>
                    <li><Source href="https://www.business-standard.com/technology/tech-news/sanchar-saathi-dot-disconnects-3-9-mn-mobile-connections-over-cyber-fraud-126020600513_1.html">Business Standard, 6 February 2026</Source>: independent reporting on parliamentary Chakshu data and categories</li>
                    <li><Source href="https://trai.gov.in">Telecom Regulatory Authority of India</Source>: official consumer and commercial communication information</li>
                </ul>
            </BlogLayout>
        </>
    )
}
