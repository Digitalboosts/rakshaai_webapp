import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import BlogLayout from '@/components/BlogLayout'
import ReportScamButton from '@/components/ReportScamButton'
import SidebarUpiScam from '@/components/blog/SidebarUpiScam'
import { blogPostingSchema, breadcrumbListSchema, faqPageSchema, jsonLd, personSchema } from '@/lib/seo/schema'

const PAGE_PATH = '/blog/wrong-transfer-refund-scam-india'
const CANONICAL = 'https://rakshaai.co/blog/wrong-transfer-refund-scam-india'
const HERO_IMAGE = '/blog/upi-scam-india-2026/upi-scam-warning.webp'

export const metadata: Metadata = {
    title: { absolute: 'Wrong Transfer Refund Scam India 2026: How to Spot & Report' },
    description:
        "Someone 'accidentally' sends you money, then asks you to refund it to a different UPI ID. Learn how this wrong transfer refund scam works, the 3 rules to stay safe, and how to report.",
    keywords:
        'wrong transfer refund scam india, accidental transfer scam india, upi reversal scam india, upi refund fraud india, wrong upi transfer india, upi scam refund different account',
    authors: [{ name: 'Rabinarayan Pradhan', url: 'https://www.linkedin.com/in/rabinarayan-pradhan-14ab9422b/' }],
    robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
    openGraph: {
        title: 'Wrong Transfer Refund Scam India 2026: How to Spot & Report',
        description:
            "Someone 'accidentally' sends you money, asks for a refund to a different UPI ID, then reverses the original transfer. Here is how to spot and report it.",
        type: 'article',
        siteName: 'RakshaAI',
        publishedTime: '2026-03-01T00:00:00.000Z',
        modifiedTime: '2026-03-01T00:00:00.000Z',
        tags: ['UPI Fraud', 'Refund Scam', 'Wrong Transfer Scam', 'Cybercrime India'],
        url: CANONICAL,
        images: [
            {
                url: HERO_IMAGE,
                width: 1400,
                height: 788,
                alt: 'UPI scam warning India 2026 with phone fraud alert and Indian currency',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Wrong Transfer Refund Scam India 2026',
        description:
            'Refund to the same UPI ID only. If someone asks for a different UPI ID after a wrong transfer, it is a scam.',
        images: [HERO_IMAGE],
    },
    alternates: { canonical: CANONICAL },
}

const FAQ_ITEMS = [
    {
        question: 'What is the wrong transfer refund scam?',
        answer:
            'The wrong transfer refund scam is a UPI fraud where a scammer deliberately sends you a small amount of money, immediately claims it was accidental, and asks you to refund the money to a different UPI ID than the one that sent it. After you send the refund, the scammer reverses the original credit through their bank, leaving you down the refund amount.',
    },
    {
        question: 'Can a legitimate UPI transfer be reversed by the sender?',
        answer:
            'Yes. Under the NPCI UPI framework, a sender or their bank can file a dispute claiming a transaction was made in error or was unauthorised. Scammers exploit this by making an initial transfer, pressuring you to refund to a different account, and then filing a reversal claim on the original transfer.',
    },
    {
        question: 'What should I do if someone sends me money by wrong UPI transfer?',
        answer:
            'Do not refund immediately, especially if they ask for a different UPI ID. Check the sending UPI ID on RakshaAI, ask the sender to initiate a reversal from their own bank app, and report the number if they pressure you. A genuine wrong transfer can be handled through official bank and UPI dispute channels.',
    },
    {
        question: 'Is it safe to refund a wrong UPI transfer to the same UPI ID?',
        answer:
            'It can be safe only after verification. Verify the UPI ID, confirm the sender independently, and prefer that the sender use their UPI app or bank to initiate an official reversal. Never refund to a different UPI ID under any circumstance.',
    },
    {
        question: 'How do I report a wrong transfer refund scam in India?',
        answer:
            'Call 1930 immediately, file on cybercrime.gov.in under Financial Cyber Fraud, raise in-app disputes on both transactions, file an NPCI UPI dispute at pgrsecure.npci.org.in, report the UPI ID and phone number on RakshaAI, and file an FIR at your nearest cybercrime police station.',
    },
    {
        question: 'Why do scammers ask to refund to a different UPI ID?',
        answer:
            'The different UPI ID is usually a mule account controlled by the scammer. It separates the original transfer, which they intend to reverse, from the account that receives your outgoing refund. There is no legitimate reason to refund money to a different UPI ID than the one that sent it.',
    },
    {
        question: 'Can I get my money back after a wrong transfer refund scam?',
        answer:
            'Recovery is difficult but possible if you act fast. Calling 1930 within 30 minutes gives the best chance of freezing the mule account. You should also file a bank dispute, cybercrime complaint, NPCI complaint, and FIR with complete transaction evidence.',
    },
    {
        question: 'What if I receive money from an unknown UPI ID and no one contacts me?',
        answer:
            'Do not spend or transfer it. Wait for the original sender to initiate an official reversal through their bank or UPI app. If someone contacts you later, verify the UPI ID and phone number before taking any action.',
    },
]

const stats = [
    { value: '14%', label: 'Share of UPI fraud complaints - refund scam type' },
    { value: 'Rs 38,000', label: 'Average loss per refund scam victim in India' },
    { value: '+112%', label: 'Growth in wrong transfer reports from 2023 to 2025' },
    { value: '~8%', label: 'Recovery rate when reported within 30 minutes' },
]

const stages = [
    {
        title: 'Stage 1 - The Inbound Transfer',
        body:
            'You receive an unexpected UPI credit on PhonePe, Google Pay, or Paytm. The amount is usually small enough to look like a genuine mistake, then a WhatsApp message or phone call arrives immediately.',
    },
    {
        title: 'Stage 2 - The Different Account Request',
        body:
            'The caller asks you to send the refund to a different UPI ID than the one that sent you the money. This is the clearest red flag. A genuine sender does not need a third account.',
    },
    {
        title: 'Stage 3 - The Pressure',
        body:
            'The scammer uses urgency, repeated calls, medical stories, rent deadlines, or threats of police complaints to make you act before you can verify the situation.',
    },
    {
        title: 'Stage 4 - The Reversal',
        body:
            'After your refund goes out, the original credit is disputed and reversed. You lose the refund amount because your outgoing payment went to the scammer or their mule account.',
    },
]

const rules = [
    {
        title: 'Never refund to a different UPI ID',
        body:
            'If money came from abc@upi and the caller asks you to send it to xyz@okicici, stop. The request to use a different account is the scam.',
    },
    {
        title: 'Verify the sender before any refund',
        body:
            'Check the sender UPI ID on RakshaAI, confirm independently, and ask them to initiate a formal reversal from their own bank or UPI app.',
    },
    {
        title: 'Check the caller number',
        body:
            'The operational phone number used after the transfer is often reused across victims. Check it on RakshaAI before responding.',
    },
]

const warningSigns = [
    'They ask you to refund to a different UPI ID than the one that sent the money.',
    'The contact comes from WhatsApp or a different number, not the number linked to the UPI transaction.',
    'The request includes urgency: medical emergency, rent deadline, electricity bill, or threats.',
    'The sender refuses to initiate a reversal from their own UPI app or bank.',
    'The amount looks designed to feel real, such as Rs 2,340 or Rs 3,780, but you do not recognise the transaction.',
]

const recoverySteps = [
    {
        title: 'Call 1930 within 30 minutes',
        body:
            'Call the National Cyber Crime Financial Helpline immediately. Share your UPI ID, the mule UPI ID, amount, transaction time, and scammer contact details.',
    },
    {
        title: 'Raise disputes on both transactions',
        body:
            'Open PhonePe, Google Pay, Paytm, or your bank app and dispute the original inbound credit as well as your outgoing refund transaction.',
    },
    {
        title: 'File on cybercrime.gov.in',
        body:
            'File under Financial Cyber Fraud - UPI Fraud. Attach screenshots of both transactions, WhatsApp chats, call logs, phone numbers, and UPI IDs.',
    },
    {
        title: 'Raise NPCI dispute and contact your bank',
        body:
            'Call your bank fraud team with the cybercrime reference number and file a UPI complaint at pgrsecure.npci.org.in.',
    },
    {
        title: 'Report to RakshaAI and file FIR',
        body:
            'Report the scammer UPI ID and phone number through RakshaAI so others can find the warning. File an FIR with your 1930 and cybercrime references.',
    },
]

const relatedScams = [
    {
        title: 'QR Code UPI Fraud',
        relation: 'Also exploits the victim expecting to receive money.',
        href: '/scams/upi-fraud/qr-code-scam',
    },
    {
        title: 'Fake Payment Screenshot',
        relation: 'Scammer claims a payment was sent, but no money actually arrives.',
        href: '/scams/upi-fraud/fake-payment-screenshot',
    },
    {
        title: 'OTP Fraud',
        relation: 'Scammer may follow up with a fake bank verification OTP call.',
        href: '/scams/upi-fraud/otp-fraud',
    },
    {
        title: 'Digital Arrest Scam',
        relation: 'Uses legal fear and fake officers to force UPI payment before the victim can verify.',
        href: '/scams/upi-fraud/digital-arrest-scam',
    },
    {
        title: 'Fake UPI Payment Link',
        relation: 'Uses a fake payment or refund page to steal UPI PIN, OTP, or bank credentials.',
        href: '/scams/upi-fraud/fake-upi-link',
    },
    {
        title: 'Investment & Job UPI Fraud',
        relation: 'Also starts with trust and small payments before a larger UPI transfer is requested.',
        href: '/scams/upi-fraud/investment-job-fraud',
    },
]

const articleStructuredData = blogPostingSchema({
    headline: 'Wrong Transfer Refund Scam India 2026: How to Spot & Report',
    description:
        'Someone accidentally sends you money, then asks you to refund it to a different UPI ID. Learn how this UPI refund scam works and how to report it.',
    url: PAGE_PATH,
    image: HERO_IMAGE,
    datePublished: '2026-03-01T00:00:00.000Z',
    dateModified: '2026-03-01T00:00:00.000Z',
    author: personSchema({
        name: 'Rabinarayan Pradhan',
        jobTitle: 'Cybersecurity Writer',
        url: '/author/rabinarayan-pradhan',
        image: '/authors/rabinarayan-pradhan.jpeg',
        sameAs: ['https://www.linkedin.com/in/rabinarayan-pradhan-14ab9422b/'],
    }),
    section: 'UPI Fraud',
    keywords: ['wrong transfer refund scam india', 'accidental transfer scam india', 'upi reversal scam india', 'upi refund fraud india'],
})

const breadcrumbSchema = breadcrumbListSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'Wrong Transfer Refund Scam India', url: PAGE_PATH },
])

const faqStructuredData = faqPageSchema(FAQ_ITEMS)

export default function WrongTransferRefundScamIndiaPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLd([articleStructuredData, breadcrumbSchema, faqStructuredData]) }}
            />
            <BlogLayout
                title="Wrong Transfer Refund Scam India 2026 - How the Accidental UPI Transfer Trick Steals Your Money"
                description="Someone sends money, asks you to refund it to a different UPI ID, then reverses the original credit. Learn the red flags and how to report fast."
                publishedAt="2026-03-01T00:00:00.000Z"
                lastUpdated="2026-03-01T00:00:00.000Z"
                readTime="8 min"
                author="Rabinarayan Pradhan"
                authorUrl="/author/rabinarayan-pradhan"
                primaryTool={{ label: 'Check the UPI ID before refunding', href: '/upi-id-checker' }}
                tags={['UPI Fraud', 'Refund Scam', 'Scam Alerts', 'Cybercrime India']}
                slug="wrong-transfer-refund-scam-india"
                sidebar={<SidebarUpiScam title="Wrong Transfer Refund Scam India 2026" description="Someone sends money, asks for a refund to a different UPI ID, then reverses the original credit." />}
            >
                <div className="not-prose mb-10 overflow-hidden rounded-2xl shadow-lg">
                    <Image
                        src={HERO_IMAGE}
                        alt="UPI scam warning India 2026 with phone fraud alert and Indian currency"
                        width={1400}
                        height={788}
                        className="w-full object-cover"
                        priority
                    />
                    <p className="px-4 pb-3 pt-2 text-center text-xs italic text-gray-500 dark:text-gray-400">
                        The wrong transfer scam weaponises honesty: you think you are helping, but the refund route is engineered against you.
                    </p>
                </div>

                <p>
                    Someone you do not know sends you money on PhonePe, Google Pay, or Paytm. They message immediately:
                    &quot;I sent it by mistake. Please refund to this number.&quot; The number or UPI ID they give you is
                    different from the one that sent the money. You send the refund. Within hours, the original credit reverses.
                    You have lost money.
                </p>

                <p>
                    This is the <strong>wrong transfer refund scam in India</strong>. It is one of the cleverest UPI fraud
                    types because it exploits goodwill rather than confusion. Victims often do exactly what they intended to do:
                    refund money. The trap is that the refund goes to the wrong place.
                </p>

                <div className="not-prose my-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat) => (
                        <div key={stat.label} className="rounded-xl border border-orange-200 bg-orange-50 p-4 text-center dark:border-orange-800 dark:bg-orange-950/30">
                            <div className="text-2xl font-extrabold text-orange-700 dark:text-orange-300">{stat.value}</div>
                            <p className="mt-2 text-xs leading-relaxed text-gray-600 dark:text-gray-300">{stat.label}</p>
                        </div>
                    ))}
                </div>

                <h2>What Is the Wrong Transfer Refund Scam?</h2>
                <p>
                    The wrong transfer refund scam, also called the accidental transfer scam or UPI reversal scam, deliberately
                    exploits your honesty. Unlike QR code scams where the victim misunderstands the action, this scam lets you
                    perform the refund while engineering the situation so you send money you do not actually owe.
                </p>
                <p>
                    The core trick is simple: the scammer sends money, pressures you to refund quickly to a different UPI ID,
                    and then tries to reverse the original credit. A genuine wrong transfer should be reversed through the
                    original sender&apos;s bank or UPI app, not routed manually to a third account.
                </p>
                <p>
                    For a broader overview of UPI fraud types, see the{' '}
                    <Link href="/scams/upi-fraud">RakshaAI UPI Fraud Guide</Link>.
                </p>

                <h2>How the Scam Works - The Exact 4-Stage Playbook</h2>
                <div className="not-prose my-8 space-y-4">
                    {stages.map((stage, index) => (
                        <div key={stage.title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                            <div className="mb-2 flex items-center gap-3">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">
                                    {index + 1}
                                </span>
                                <h3 className="m-0 text-base font-bold text-gray-900 dark:text-white">{stage.title}</h3>
                            </div>
                            <p className="m-0 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{stage.body}</p>
                        </div>
                    ))}
                </div>

                <div className="not-prose my-8 rounded-2xl border-2 border-red-300 bg-red-50 p-6 dark:border-red-800 dark:bg-red-950/30">
                    <p className="mb-3 text-xs font-bold uppercase tracking-widest text-red-700 dark:text-red-300">
                        The key signal
                    </p>
                    <p className="mb-2 text-sm text-red-900 dark:text-red-200">
                        <strong>Legitimate wrong UPI transfer:</strong> sender asks for refund to the same UPI ID that sent the money.
                    </p>
                    <p className="mb-0 text-sm text-red-900 dark:text-red-200">
                        <strong>Fraudulent wrong transfer scam:</strong> sender asks for refund to a different UPI ID.
                    </p>
                </div>

                <h2>3 Rules That Eliminate This Scam Completely</h2>
                <div className="not-prose my-8 grid gap-4 md:grid-cols-3">
                    {rules.map((rule, index) => (
                        <div key={rule.title} className="rounded-2xl border border-green-200 bg-green-50 p-5 dark:border-green-800 dark:bg-green-950/30">
                            <span className="text-xs font-bold uppercase tracking-widest text-green-700 dark:text-green-300">Rule {index + 1}</span>
                            <h3 className="mt-2 text-base font-bold text-gray-900 dark:text-white">{rule.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{rule.body}</p>
                        </div>
                    ))}
                </div>

                <div className="not-prose my-8 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 p-6 text-center text-white shadow-lg">
                    <p className="text-lg font-bold">Received a suspicious wrong transfer request?</p>
                    <p className="mt-1 text-sm text-orange-100">Check the UPI ID and caller number before sending any refund.</p>
                    <div className="mt-4 flex flex-wrap justify-center gap-3">
                        <Link href="/upi-id-checker" className="rounded-xl bg-white px-5 py-3 text-sm font-bold text-orange-700 shadow transition-transform hover:scale-105">
                            Check UPI ID Free
                        </Link>
                        <Link href="/phone-number-checker" className="rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/20">
                            Check Phone Number
                        </Link>
                    </div>
                </div>

                <h2>5 Warning Signs That an Accidental UPI Transfer Is Actually a Scam</h2>
                <div className="not-prose my-8 rounded-2xl border border-red-200 bg-red-50 p-6 dark:border-red-800 dark:bg-red-950/30">
                    <p className="mb-5 text-sm font-bold text-red-700 dark:text-red-300">
                        Stop if any one of these applies:
                    </p>
                    <ol className="space-y-3">
                        {warningSigns.map((warning, index) => (
                            <li key={warning} className="flex gap-3">
                                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
                                    {index + 1}
                                </span>
                                <span className="text-sm leading-relaxed text-gray-700 dark:text-gray-200">{warning}</span>
                            </li>
                        ))}
                    </ol>
                </div>

                <h2>What to Do If You Were Caught in a Wrong Transfer Refund Scam</h2>
                <p>
                    If you already sent the refund and the original credit was reversed, act immediately. Time is the most
                    important factor in any UPI refund scam recovery attempt.
                </p>

                <div className="not-prose my-8 overflow-hidden rounded-2xl border border-red-200 bg-white shadow-sm dark:border-red-900 dark:bg-gray-900">
                    <Image
                        src="/image/upi-scam-recovery-5-steps-emergency-guide-india.jpg"
                        alt="UPI scam recovery timeline showing 1930 helpline, cybercrime complaint, bank contact, and community warning"
                        width={1200}
                        height={509}
                        className="h-auto w-full object-cover"
                    />
                    <p className="px-4 py-3 text-center text-xs text-gray-500 dark:text-gray-400">
                        Report fast. The first 30 minutes are the best chance to freeze the receiving mule account.
                    </p>
                </div>

                <div className="not-prose my-8 space-y-4">
                    {recoverySteps.map((step, index) => (
                        <div key={step.title} className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
                            <div className="mb-2 flex items-center gap-3">
                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">
                                    {index + 1}
                                </span>
                                <h3 className="m-0 text-base font-bold text-gray-900 dark:text-white">{step.title}</h3>
                            </div>
                            <p className="m-0 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{step.body}</p>
                        </div>
                    ))}
                </div>

                <div className="not-prose my-8 rounded-2xl bg-gray-900 p-6 font-mono text-sm text-white">
                    <p className="mb-3 font-bold text-orange-400">Recovery timeline - every minute matters</p>
                    <p><span className="text-green-400">Within 30 min</span> - Call 1930 and try to freeze the mule account.</p>
                    <p><span className="text-yellow-400">Within 1 hr</span> - In-app disputes and cybercrime.gov.in complaint.</p>
                    <p><span className="text-orange-400">Within 24 hrs</span> - Bank fraud team, NPCI dispute, RakshaAI report.</p>
                    <p><span className="text-red-400">Within 7 days</span> - FIR at cybercrime police station.</p>
                </div>

                <h2>Other UPI Fraud Types Related to This Scam</h2>
                <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-700">
                    <table className="w-full text-sm">
                        <thead className="bg-orange-50 dark:bg-orange-950/30">
                            <tr>
                                <th className="px-4 py-3 text-left font-bold text-gray-900 dark:text-white">Related UPI Scam Type</th>
                                <th className="px-4 py-3 text-left font-bold text-gray-900 dark:text-white">How It Relates</th>
                                <th className="px-4 py-3 text-left font-bold text-gray-900 dark:text-white">Full Guide</th>
                            </tr>
                        </thead>
                        <tbody>
                            {relatedScams.map((item, index) => (
                                <tr key={item.title} className={index % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800'}>
                                    <td className="border-t border-gray-100 px-4 py-3 font-semibold text-gray-900 dark:border-gray-700 dark:text-white">{item.title}</td>
                                    <td className="border-t border-gray-100 px-4 py-3 text-gray-600 dark:border-gray-700 dark:text-gray-300">{item.relation}</td>
                                    <td className="border-t border-gray-100 px-4 py-3 dark:border-gray-700">
                                        <Link href={item.href} className="font-semibold text-orange-600 hover:underline dark:text-orange-400">
                                            Read guide
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="not-prose my-8 rounded-2xl border border-orange-200 bg-orange-50 p-6 dark:border-orange-800 dark:bg-orange-950/30">
                    <h2 className="mt-0 text-xl font-bold text-gray-900 dark:text-white">Full Guide: UPI Fraud India</h2>
                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                        This article covers the wrong transfer refund scam specifically. For QR scams, collect requests,
                        fake screenshots, OTP fraud, and recovery steps, read the full UPI fraud hub.
                    </p>
                    <Link href="/scams/upi-fraud" className="mt-3 inline-flex rounded-xl bg-orange-600 px-5 py-3 text-sm font-bold text-white hover:bg-orange-700">
                        Open UPI Fraud Guide
                    </Link>
                </div>

                <h2>Frequently Asked Questions</h2>
                <div className="not-prose my-8 space-y-3">
                    {FAQ_ITEMS.map((item) => (
                        <details key={item.question} className="group rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
                            <summary className="cursor-pointer list-none text-sm font-bold text-gray-900 dark:text-white">
                                {item.question}
                            </summary>
                            <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{item.answer}</p>
                        </details>
                    ))}
                </div>

                <div className="not-prose my-10 rounded-2xl bg-gradient-to-r from-red-600 to-rose-600 p-6 text-center text-white shadow-lg">
                    <p className="text-lg font-bold">Report the UPI ID and phone number</p>
                    <p className="mt-1 text-sm text-red-100">Your report helps warn the next person who searches for the same scammer.</p>
                    <ReportScamButton className="mt-4 inline-flex cursor-pointer rounded-xl bg-white px-6 py-3 text-sm font-bold text-red-700 shadow transition-transform hover:scale-105">
                        Report This Scam
                    </ReportScamButton>
                </div>
            </BlogLayout>
        </>
    )
}
