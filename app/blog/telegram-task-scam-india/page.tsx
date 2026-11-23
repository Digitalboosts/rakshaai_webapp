import { Metadata } from 'next'
import BlogLayout from '@/components/BlogLayout'
import Link from 'next/link'
import Image from 'next/image'
import { blogPostingSchema, faqPageSchema, breadcrumbListSchema, personSchema, jsonLd } from '@/lib/seo/schema'
import SidebarTelegramTaskScam from '@/components/blog/SidebarTelegramTaskScam'

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
    title: { absolute: 'Telegram Task Scam India 2026: How "Online Jobs" Steal Lakhs | RakshaAI' },
    description:
        'Getting paid ₹300 to like YouTube videos sounds harmless  until you\'ve lost ₹10 lakh. How the Telegram task scam works and exactly how to spot it before it\'s too late.',
    keywords:
        'Telegram task scam India, online task fraud India 2026, work from home scam India, part time job fraud Telegram, YouTube like scam India, pig butchering scam India, online job fraud WhatsApp',
    authors: [{ name: 'Rabinarayan Pradhan', url: 'https://www.linkedin.com/in/rabinarayan-pradhan-14ab9422b/' }],
    robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
    openGraph: {
        title: 'Telegram Task Scam: How "Simple Online Jobs" Are Stealing Lakhs from Indians',
        description:
            'They pay you ₹300 first. Then they take everything. How the Telegram task fraud works and how to spot it.',
        type: 'article',
        siteName: 'RakshaAI',
        publishedTime: '2026-05-23T00:00:00.000Z',
        modifiedTime: '2026-05-23T00:00:00.000Z',
        tags: ['Telegram task scam', 'online job fraud India', 'work from home scam', 'pig butchering', 'cybercrime India 2026'],
        url: 'https://rakshaai.co/blog/telegram-task-scam-india',
        images: [
            {
                url: '/blog/telegram-task-scam-india/telegram-task-scam-victim.webp',
                width: 1456,
                height: 816,
                alt: 'Man stressed at night looking at Telegram messages asking for ₹10,000 deposit to unlock next task',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Telegram Task Scam: How Indians Are Losing Lakhs to "Simple Online Jobs"',
        description:
            'They pay ₹300 first to build trust. Then demand deposits. The profit dashboard is fake. Withdrawals are blocked. Here\'s the full playbook.',
        images: ['/blog/telegram-task-scam-india/telegram-task-scam-victim.webp'],
    },
    alternates: {
        canonical: 'https://rakshaai.co/blog/telegram-task-scam-india',
    },
}

// ─── Structured Data ─────────────────────────────────────────────────────────
const articleStructuredData = blogPostingSchema({
    headline: 'Telegram Task Scam: How Indians Lost ₹100 Crore Doing Simple Online Jobs',
    description:
        'A complete guide to how the Telegram task fraud works in India in 2026, with real case data and how to report it.',
    url: '/blog/telegram-task-scam-india',
    image: '/blog/telegram-task-scam-india/telegram-task-scam-victim.webp',
    datePublished: '2026-05-23T00:00:00.000Z',
    dateModified: '2026-06-04T00:00:00.000Z',
    author: personSchema({ name: 'Rabinarayan Pradhan', jobTitle: 'Cybersecurity Writer', url: '/author/rabinarayan-pradhan', image: '/authors/rabinarayan-pradhan.jpeg', sameAs: ['https://www.linkedin.com/in/rabinarayan-pradhan-14ab9422b/'] }),
    section: 'Online Job Fraud',
    keywords: ['Telegram task scam', 'online task fraud India 2026', 'work from home scam', 'pig butchering scam India'],
})

const breadcrumbSchema = breadcrumbListSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'Telegram Task Scam India 2026', url: '/blog/telegram-task-scam-india' },
])

const faqStructuredData = faqPageSchema([
    {
        question: 'Is the online task job on WhatsApp real?',
        answer:
            'Legitimate companies do not recruit via unsolicited WhatsApp messages. Task-based jobs that require you to deposit money to "unlock" tasks are always scams.',
    },
    {
        question: 'How do I know if a Telegram job group is a scam?',
        answer:
            'Red flags include: requires upfront deposit, profits shown on internal dashboard only, cannot withdraw earnings, urgent deadlines, fake testimonials from group members.',
    },
    {
        question: 'Can I get my money back from a Telegram task scam?',
        answer:
            'Call 1930 immediately. Filing quickly within 30–60 minutes gives the best chance of freezing the destination account. Also file at cybercrime.gov.in with all screenshots of conversations and transactions.',
    },
    {
        question: 'Who runs Telegram task scams in India?',
        answer:
            'Many operate from organized crime networks in Myanmar, Cambodia, and China. Some Indian nationals are also involved as "mule account" operators who receive and forward money for a commission.',
    },
    {
        question: 'What is the pig butchering scam?',
        answer:
            'Pig butchering (sha zhu pan) is a long-term investment/job scam where scammers build deep trust over weeks or months before stealing large amounts. The name refers to "fattening the pig" before slaughter. It is the same technique used in Telegram task scams.',
    },
])

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function TelegramTaskScamPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLd([articleStructuredData, faqStructuredData, breadcrumbSchema]) }}
            />
            <BlogLayout
            title="Telegram Task Scam: How Indians Lost ₹100 Crore Doing 'Simple Online Jobs'"
            description="Getting paid ₹300 to like YouTube videos sounds harmless  until you've lost ₹10 lakh. How the Telegram task scam works and exactly how to spot it."
            publishedAt="2026-05-23T00:00:00.000Z"
            lastUpdated="2026-05-27T00:00:00.000Z"
            readTime="10 min"
            author="Rabinarayan Pradhan"
            authorUrl="/author/rabinarayan-pradhan"
            primaryTool={{ label: 'Check a phone number or company link', href: '/phone-number-checker' }}
            tags={['Online Job Fraud', 'Scam Alerts', 'Telegram Scam', 'Cybercrime India']}
            slug="telegram-task-scam-india"
            sidebar={<SidebarTelegramTaskScam title="Telegram Task Scam: How Indians Lost ₹100 Crore Doing 'Simple Online Jobs'" description="Getting paid ₹300 to like YouTube videos sounds harmless  until you've lost ₹10 lakh. How the Telegram task scam works and exactly how to spot it." />}
        >

            {/* ── HERO IMAGE ────────────────────────────────────────────── */}
            <div className="not-prose mb-10 rounded-2xl overflow-hidden shadow-lg">
                <Image
                    src="/blog/telegram-task-scam-india/telegram-task-scam-victim.webp"
                    alt="Man stressed at night looking at Telegram messages demanding ₹10,000 deposit to unlock next task"
                    width={1456}
                    height={816}
                    className="w-full object-cover"
                    priority
                />
                <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-2 mb-0 italic px-4 pb-3">
                    The moment the trap closes: after earning trust with small payments, the scammer demands a large deposit to "unlock" the next task.
                </p>
            </div>

            {/* ── INTRO ─────────────────────────────────────────────────── */}
            <p>
                It starts with an innocent-looking WhatsApp message: <em>"Hi, we have a part-time work-from-home opportunity.
                Simple tasks, flexible hours, earn ₹500–₹2,000 per day. Interested?"</em>
            </p>

            <p>
                Thousands of Indians reply yes every day. Most are job seekers, students, or homemakers looking to supplement
                their income. What they do not know is that they have just entered the first stage of India's fastest-growing
                financial fraud  the <strong>Telegram task scam</strong>.
            </p>

            <p>
                In 2025, India's cybercrime helpline (1930) received over 7,000 task-scam complaints per month.
                Estimated losses crossed ₹100 crore. Victims lose an average of ₹2–5 lakh before realising
                the entire operation was fabricated.
            </p>

            {/* ── FEATURED SNIPPET BLOCK ────────────────────────────────── */}
            <div className="not-prose my-8 rounded-2xl border-2 border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/40 p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">
                    How the Telegram task scam works in India  5 stages
                </p>
                <ol className="space-y-2.5 list-none">
                    {[
                        ['1', 'You receive a WhatsApp or Instagram job offer for simple online tasks'],
                        ['2', 'You join a professional-looking Telegram group with fake co-workers and supervisors'],
                        ['3', 'You complete small tasks (liking videos, following accounts) and receive real small payments to build trust'],
                        ['4', 'You are offered high-paying "special tasks" that require an advance deposit to unlock'],
                        ['5', 'The deposit grows, the profit dashboard is fake, and all withdrawals are permanently blocked'],
                    ].map(([num, text]) => (
                        <li key={num} className="flex items-start gap-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white text-[11px] font-bold flex items-center justify-center mt-0.5">
                                {num}
                            </span>
                            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{text}</span>
                        </li>
                    ))}
                </ol>
                <p className="text-xs text-blue-700 dark:text-blue-400 mt-4 font-semibold">
                    Already deposited money? Call 1930 immediately. Do not send another rupee.
                </p>
            </div>

            <hr />

            {/* ── STAGE 1 ───────────────────────────────────────────────── */}
            <h2>Stage 1: The WhatsApp Job Offer That Looks Too Easy</h2>

            <p>
                The scam always begins with an unsolicited message  via WhatsApp, Instagram DM, LinkedIn, or even SMS.
                The message uses friendly, professional language. It mentions a company name that sounds legitimate
                ("DigiMedia Solutions", "TaskForce Global", "EarnPro India"). The job description is deliberately
                vague: "online tasks", "data entry", "digital marketing assistant".
            </p>

            <p>
                What makes this opening dangerous is how plausible it feels. India has a genuine gig economy.
                Millions of people do earn real money completing micro-tasks. Scammers exploit exactly that context
                to make their first approach indistinguishable from a real opportunity.
            </p>

            <p>
                <strong>Red flag at this stage:</strong> No legitimate employer recruits via unsolicited WhatsApp
                messages. Real companies post on Naukri, LinkedIn, or their own website. Any job that arrives
                unrequested in your inbox should be treated as suspicious by default.
            </p>

            <hr />

            {/* ── STAGE 2 ───────────────────────────────────────────────── */}
            <h2>Stage 2: The Telegram Group That Looks Professional</h2>

            <p>
                Once you show interest, you are directed to a Telegram group. The group appears highly professional:
                it has a company logo, a pinned message with "official guidelines", and dozens of active members
                sharing their completed tasks and daily earnings.
            </p>

            {/* Full-width scam flow infographic */}
            <div className="not-prose my-8 rounded-2xl overflow-hidden shadow-md">
                <Image
                    src="/blog/telegram-task-scam-india/telegram-scam-how-it-works.webp"
                    alt="5-stage infographic showing how the Telegram task scam works in India from WhatsApp offer to blocked withdrawals"
                    width={1456}
                    height={816}
                    className="w-full object-cover"
                />
                <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-2 mb-0 italic px-4 pb-3">
                    The 5 stages of the Telegram task scam  from a friendly WhatsApp message to a completely blocked account.
                </p>
            </div>

            <p>
                Almost every person in the group is a scammer or a bot. The "supervisors" are scammers playing a role.
                The "co-workers" posting their earnings screenshots are fabricated accounts designed to manufacture
                social proof. You are the only real person in the room.
            </p>

            <p>
                <strong>Red flag at this stage:</strong> Legitimate employers do not move hiring to Telegram.
                Any recruitment process that requires you to join a Telegram group is a serious warning sign.
            </p>

            <hr />

            {/* ── STAGE 3 ───────────────────────────────────────────────── */}
            <h2>Stage 3: Real Small Payments That Build Trust</h2>

            <p>
                This is the most psychologically effective part of the scam, and the reason it works so well.
                After completing your first few tasks  typically liking YouTube videos, following Instagram accounts,
                or rating apps  you receive <strong>real money</strong>. ₹200, ₹300, sometimes ₹500 lands in
                your UPI account or bank.
            </p>

            <p>
                These payments are not a mistake. They are an investment by the scammers. Every rupee they pay
                you in Stage 3 is designed to make you believe the operation is legitimate, so you will deposit
                thousands  or lakhs  in Stage 4. The psychological principle at work is called "sunk cost
                combined with proof of legitimacy." Once you have received real money, your guard drops.
            </p>

            <p>
                <strong>Red flag at this stage:</strong> The tasks themselves are a red flag. Liking YouTube
                videos and following accounts in bulk is artificial engagement manipulation. Any platform paying
                you to do this is either engaged in fraud or feeding into a larger scam. Real companies pay for
                skills, not clicks.
            </p>

            <hr />

            {/* ── STAGE 4 ───────────────────────────────────────────────── */}
            <h2>Stage 4: The Advance Deposit Trap</h2>

            <p>
                After a few days of small legitimate payments, you are offered a "premium task" or "VIP order"
                that promises dramatically higher returns  ₹5,000–₹50,000 for a single task. The catch: you
                need to deposit a "security amount" or "task activation fee" to access it. The amount starts
                small: ₹1,000 or ₹2,000.
            </p>

            <p>
                You deposit it. Your "dashboard" shows a profit. You are told you can withdraw after completing
                more tasks. The supervisor encourages you to take the next premium task. The required deposit
                for that one is ₹10,000. Then ₹50,000. Then ₹1 lakh.
            </p>

            <p>
                Each time you hesitate, a group member posts a "withdrawal success" screenshot. Your supervisor
                reassures you. The pressure is constant and calibrated. Victims in documented cases have
                deposited multiple times  taking out loans, borrowing from family  because the dashboard
                shows growing profits that feel just one task away from being withdrawable.
            </p>

            <p>
                <strong>The rule:</strong> No legitimate job on earth requires you to deposit money to
                complete a task. This is the definitive indicator that you are in a scam. Stop immediately.
            </p>

            <hr />

            {/* ── STAGE 5 ───────────────────────────────────────────────── */}
            <h2>Stage 5: The Fake Dashboard and Blocked Withdrawals</h2>

            {/* Float right: fake dashboard */}
            <div className="not-prose float-right ml-6 mb-4 w-52 sm:w-64 md:w-80 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                <Image
                    src="/blog/telegram-task-scam-india/fake-investment-dashboard.webp"
                    alt="Fake FinTrade PRO investment dashboard showing inflated profits  marked FAKE"
                    width={1456}
                    height={816}
                    className="w-full object-contain"
                />
                <p className="text-[10px] text-center text-gray-500 dark:text-gray-400 italic px-3 py-2 bg-white dark:bg-gray-800">
                    Every number on this dashboard is fabricated. The "Withdraw" button will never work.
                </p>
            </div>

            <p>
                When you finally attempt to withdraw your accumulated "earnings", the platform invents a new
                obstacle. You need to pay a "tax clearance fee" first. Or a "withdrawal activation charge".
                Or your account is "frozen pending KYC verification" that requires another deposit.
            </p>

            <p>
                The dashboard showing your ₹4,85,000 portfolio or ₹2 lakh in pending earnings does not
                represent real money. It is a web interface built specifically to manufacture the illusion
                of wealth. The entire technical infrastructure  the app, the dashboard, the transaction
                history  exists only to keep you paying.
            </p>

            <p>
                At some point, the scammers decide you have nothing more to give. The Telegram group is
                deleted. The "supervisor" number is blocked. The website goes offline. Your money is gone.
            </p>

            <div className="clear-both" />

            <hr />

            {/* ── RED FLAGS SECTION ─────────────────────────────────────── */}
            <h2>8 Red Flags That Confirm It Is a Telegram Task Scam</h2>

            {/* Float right: red flags infographic */}
            <div className="not-prose float-right ml-6 mb-4 w-44 sm:w-52 md:w-64 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                <Image
                    src="/blog/telegram-task-scam-india/telegram-scam-red-flags.webp"
                    alt="8 red flags of Telegram job scam checklist infographic by RakshaAI"
                    width={900}
                    height={1200}
                    className="w-full object-contain"
                />
                <p className="text-[10px] text-center text-gray-500 dark:text-gray-400 italic px-3 py-2">
                    If you see even 3 of these, stop immediately.
                </p>
            </div>

            <ol>
                <li>
                    <strong>Unsolicited job offer via WhatsApp or Instagram.</strong> Real employers do not cold-message
                    job seekers on personal messaging apps.
                </li>
                <li>
                    <strong>Work moved to Telegram.</strong> Professional companies use email, official portals, or
                    verified apps  not Telegram groups.
                </li>
                <li>
                    <strong>Tasks involve liking or following accounts.</strong> Authentic gig work involves skills,
                    not artificial engagement manipulation.
                </li>
                <li>
                    <strong>You received small payments upfront.</strong> This is deliberate trust-building, not
                    evidence of legitimacy. It is the bait.
                </li>
                <li>
                    <strong>A task requires an advance deposit.</strong> No legitimate employer asks you to pay to work.
                    This is the line that separates odd from criminal.
                </li>
                <li>
                    <strong>Earnings only visible on an internal dashboard.</strong> Real payments appear in your bank.
                    If your "balance" only exists inside their app, it does not exist.
                </li>
                <li>
                    <strong>Pressure to complete "one more task".</strong> Urgency, countdown timers, and constant
                    supervisor messages are manufactured pressure tactics.
                </li>
                <li>
                    <strong>Cannot verify the company on Google, MCA21, or LinkedIn.</strong> A real company has a
                    traceable public footprint. If it does not exist outside of Telegram, it does not exist.
                </li>
            </ol>

            <div className="clear-both" />

            <hr />

            {/* ── PIG BUTCHERING ────────────────────────────────────────── */}
            <h2>The "Pig Butchering" Playbook Behind These Scams</h2>

            <p>
                Telegram task scams are a variant of what cybersecurity researchers call <strong>pig butchering</strong>
                (sha zhu pan), a term that originated in Chinese-language criminal forums. The name is brutal but
                accurate: scammers "fatten the pig"  building trust, delivering small wins, showing growing
                profits  before the final "slaughter", when they take everything.
            </p>

            <p>
                Many operations running task scams in India are coordinated from criminal compounds in Myanmar,
                Cambodia, and parts of China. Investigations by Indian authorities have revealed that some
                operators in these compounds are themselves trafficking victims  people who were lured with
                legitimate job offers and then coerced into running scams under threat of violence.
            </p>

            <p>
                Indian nationals are often involved as mule account operators  people who receive and forward
                funds in exchange for a commission, without necessarily understanding the full scale of the
                operation they are enabling. Operating a mule account is a criminal offence under Indian law.
            </p>

            <hr />

            {/* ── WHAT TO DO IF SCAMMED ─────────────────────────────────── */}
            <h2>What to Do the Moment You Realise You Have Been Scammed</h2>

            <div className="not-prose my-6 p-4 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800">
                <p className="text-sm font-semibold text-red-800 dark:text-red-300 m-0">
                    Speed is everything. The first 30–60 minutes after a fraudulent transfer give the highest chance of account freezing. Call 1930 before reading anything else.
                </p>
            </div>

            <ol>
                <li>
                    <strong>Stop sending money immediately.</strong> Every additional deposit goes directly to
                    criminals. No new payment will unlock your funds  that promise is always a lie.
                </li>
                <li>
                    <strong>Screenshot everything.</strong> Capture all Telegram conversations, transaction
                    receipts, the group name, admin numbers, and the dashboard. You will need this evidence.
                </li>
                <li>
                    <strong>Call 1930 immediately.</strong> India's National Cybercrime Helpline can flag
                    destination bank accounts in real time. The faster you call, the higher the chance of
                    stopping or reversing the transfer.
                </li>
                <li>
                    <strong>Contact your bank.</strong> Report every transaction as fraud and ask your bank to
                    raise a dispute. Provide them the transaction IDs and receiver account details.
                </li>
                <li>
                    <strong>File at cybercrime.gov.in.</strong> A formal FIR creates a legal record and is
                    required for any insurance or court proceedings.
                </li>
                <li>
                    <strong>Check the scam number on RakshaAI.</strong> Your report at <Link href="/phone-number-checker">rakshaai.co/phone-number-checker</Link> helps
                    flag the number for other Indians before they become the next victim.
                </li>
            </ol>

            <hr />

            {/* ── SCALE: YEAR-WISE STATS ────────────────────────────────── */}
            <h2>How Big Is This Problem? Official Data on Cybercrime Losses in India (2021–2025)</h2>

            <p>
                The following figures come from MHA/I4C Parliamentary responses (Lok Sabha, Dec 2025 and
                Rajya Sabha, Feb 2026). Investment and task-based scams  which include the Telegram task
                fraud  are the single largest category of cybercrime loss in India.
            </p>

            <div className="not-prose overflow-x-auto my-8 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <table className="w-full text-sm text-left">
                    <thead>
                        <tr className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                            <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap">Year</th>
                            <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">NCRP Complaints</th>
                            <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Total Loss</th>
                            <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">YoY Change</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                        {[
                            { year: '2021', cases: '2.62 lakh', lost: '₹551 crore', change: 'Baseline', badge: 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400' },
                            { year: '2022', cases: '9.66 lakh', lost: '₹2,290 crore', change: '+316% loss', badge: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-400' },
                            { year: '2023', cases: '15.56 lakh', lost: '₹7,465 crore', change: '+226% loss', badge: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-400' },
                            { year: '2024', cases: '22.68 lakh', lost: '₹22,845 crore', change: '+206% loss (peak)', badge: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400' },
                            { year: '2025', cases: '28.15 lakh', lost: '₹22,495 crore', change: '+24% cases, loss steady', badge: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400' },
                        ].map((row) => (
                            <tr key={row.year} className="bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                <td className="px-4 py-3 font-bold text-gray-900 dark:text-white">{row.year}</td>
                                <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{row.cases}</td>
                                <td className="px-4 py-3 font-semibold text-red-600 dark:text-red-400">{row.lost}</td>
                                <td className="px-4 py-3">
                                    <span className={`inline-block px-2 py-0.5 rounded text-xs font-semibold ${row.badge}`}>
                                        {row.change}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="not-prose my-6 rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/30 p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">Task-Scam Specific: Jan–Apr 2024 (MHA/I4C Official Category Breakdown)</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                        { label: 'Investment / task-based fraud cases', value: '62,687', sub: 'just 4 months' },
                        { label: 'Money lost to task-based fraud', value: '₹222.58 Cr', sub: 'Jan–Apr 2024 only' },
                        { label: 'NCRP complaints naming Telegram', value: '22,680', sub: 'Q1 2024 alone' },
                    ].map((s) => (
                        <div key={s.label} className="text-center">
                            <p className="text-2xl font-extrabold text-red-600 dark:text-red-400">{s.value}</p>
                            <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mt-1">{s.label}</p>
                            <p className="text-[10px] text-gray-400 dark:text-gray-500">{s.sub}</p>
                        </div>
                    ))}
                </div>
                <p className="text-[11px] text-blue-600 dark:text-blue-400 mt-4">
                    MHA declared Telegram &ldquo;the new dark web&rdquo; in its 2024 Annual Report. Investment + task-based scams account for ~77% of all cybercrime losses in India.
                </p>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
                Source: MHA Lok Sabha written reply Dec 2, 2025 · Rajya Sabha Feb 11, 2026 · I4C six-year data · Business Standard (May 2024) citing MHA Jan–Apr 2024 category breakdown.
                Cumulative loss 2020–2025: <strong>₹52,976 crore</strong> across all cybercrime categories.
            </p>

            {/* ── REAL CASE CARDS ───────────────────────────────────────── */}
            <h2>Real Telegram Task Scam Cases Reported by Indian News Outlets</h2>

            <p>
                Every case below was covered by a verifiable Indian news outlet. Together they show that no
                city, age group, or profession is immune  and that the scam has only grown bolder since 2023.
            </p>

            <div className="not-prose space-y-4 my-8">
                {[
                    {
                        num: '01', city: 'Hyderabad · July 2023', amount: '₹712 Crore', tag: 'Landmark Bust',
                        title: '15,000+ Victims, ₹712 Crore Stolen via "Rate Hotels, Like YouTube Videos" Racket',
                        desc: 'India\'s largest documented Telegram task scam bust. Victims were offered ₹866 profit on a ₹1,000 investment for liking videos. Gang used 65 bank accounts under 33 shell companies, routing funds as USDT crypto via Dubai to Chinese masterminds. Terror financing link to Hezbollah confirmed. 9 arrested; 3 Chinese masterminds absconding.',
                        source: 'The Quint',
                        url: 'https://www.thequint.com/south-india/hyderabad-scam-cybercrime-investment-fraud-rate-review-social-media-part-time-job-terrorism-link',
                    },
                    {
                        num: '02', city: 'Chennai · March 2024', amount: '₹7.7 Lakh', tag: 'Facebook Ad → Telegram',
                        title: 'Pregnant Woman Seeking Work-From-Home Income Loses ₹7.7 Lakh to Telegram Task Scam',
                        desc: 'Radhika had recently resigned and was searching for income. She saw a Facebook ad promising money for watching videos. Paid ₹100, received ₹300. Deposits escalated through Bitcoin trading and "frozen team funds"  each problem invented a new fee. ₹7.7 lakh lost across five days. Three bank accounts frozen by police.',
                        source: 'The News Minute',
                        url: 'https://www.thenewsminute.com/tamil-nadu/chennai-woman-loses-rs-77-lakh-to-telegram-job-scam',
                    },
                    {
                        num: '03', city: 'Delhi · August 2025', amount: '₹17.31 Lakh', tag: '5 Arrested',
                        title: 'Delhi Police Bust Telegram Gang: 5 Arrested Including Gang Leader Who Used Crypto to Launder Funds',
                        desc: 'Victim added to Telegram group "971 CBOE" for Google hotel reviews. Promised 30–40% returns. Dashboard showed inflated profits, withdrawal always blocked. Gang\'s kingpin: Ravindra Vishnoi, 28, a pharmacy owner from Rajasthan. Funds laundered via USDT crypto through mule accounts in India, Nepal, and Singapore.',
                        source: 'Sunday Guardian Live',
                        url: 'https://sundayguardianlive.com/news/delhi-police-bust-rs-173-lakh-telegram-scam-gang-137029/',
                    },
                    {
                        num: '04', city: 'Rohtak, Haryana · August 2025', amount: '₹10.14 Lakh', tag: '4 Arrested',
                        title: 'Rohtak Villager Loses ₹10.14 Lakh After "Rating Hotels" Unlocked Endless Deposit Demands',
                        desc: 'Jatin from Morkhedi village received a Telegram offer for hotel rating tasks. First ₹7,000 task showed ₹14,000 "profit." Then ₹28,000, then ₹64,700  each time told to complete "one more task or lose everything." Only ₹4,400 ever withdrawn. 4 accused arrested from Rajasthan, charged under BNS Sections 318(4) and 61(2).',
                        source: 'The420.in',
                        url: 'https://the420.in/online-task-scam-rohtak-telegram-cyber-fraud-arrests/',
                    },
                    {
                        num: '05', city: 'Hyderabad · October 2025', amount: '₹51 Lakh', tag: 'Fake Company',
                        title: 'Engineer Loses ₹51 Lakh After Fake "P&B Solutions" Promised WFH E-Commerce Tasks',
                        desc: 'Recruited into a Telegram group for a fake company called "P&B Solutions"  supposedly managing e-commerce product listings. Small real payments built trust. Final demand: ₹11 lakh to "release supposed earnings." Funds vanished; group deleted. Case with Cyberabad Cyber Crime Police.',
                        source: 'The Hans India',
                        url: 'https://www.thehansindia.com/news/cities/hyderabad/engineer-loses-rs-51-lakh-in-high-profile-telegram-job-scam-1018852',
                    },
                    {
                        num: '06', city: 'Ahmedabad · Mar–Apr 2026', amount: '₹30.5 Lakh', tag: '58 Transactions',
                        title: 'Ahmedabad Employee Pays ₹30.5 Lakh via UPI/IMPS Across 19 Days for "Google Maps Review Tasks"',
                        desc: 'A 38-year-old Vatva GIDC employee received a WhatsApp message about posting Google Maps restaurant reviews. Small payments convinced him it was real. Moved to crypto trading, then "capital verification" schemes. Each deposit triggered a new excuse: low credit score, VIP upgrade required, incomplete tasks. 19 days, 30.5 lakhs, nothing recovered.',
                        source: 'The420.in',
                        url: 'https://the420.in/ahmedabad-man-loses-30-5-lakh-part-time-job-scam-whatsapp-telegram/',
                    },
                ].map((c) => (
                    <div key={c.num} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-5 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
                            <div className="flex items-center gap-3">
                                <span className="text-xs font-bold text-gray-400 dark:text-gray-500 tabular-nums">{c.num}</span>
                                <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">{c.city}</span>
                            </div>
                            <div className="flex items-center gap-2 flex-wrap">
                                <span className="text-lg font-extrabold text-red-600 dark:text-red-400">{c.amount}</span>
                                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">{c.tag}</span>
                            </div>
                        </div>
                        <h3 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base leading-snug mb-2">{c.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-3">{c.desc}</p>
                        <div className="flex items-center justify-between flex-wrap gap-2">
                            <span className="text-xs text-gray-400 dark:text-gray-500">Source: {c.source}</span>
                            <a href={c.url} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                                Read full article →
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* ── COMPLETE CASE TIMELINE TABLE ──────────────────────────── */}
            <h2>Complete Timeline: Documented Telegram Task Scam Cases in India (2023–2026)</h2>

            <p>
                A date-wise record of verified cases  from Kerala and Maharashtra to UP and Gujarat  showing
                how this scam operates identically across every Indian state and victim profile.
            </p>

            <div className="not-prose overflow-x-auto my-8 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <table className="w-full text-sm text-left">
                    <thead>
                        <tr className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                            <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap">Date</th>
                            <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Victim / City</th>
                            <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap">Amount Lost</th>
                            <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Entry Tactic &amp; Outcome</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                        {[
                            {
                                date: 'Jul 23, 2023',
                                victim: '15,000+ victims (national) · Hyderabad bust',
                                amount: '₹712 crore',
                                tactic: '"Rate hotels + like YouTube videos"  9 arrested, funds via USDT to China; terror link confirmed',
                            },
                            {
                                date: 'Aug–Sep 2023',
                                victim: '7 individuals · Kannur, Kerala',
                                amount: '₹42.35 lakh',
                                tactic: 'WhatsApp job → Telegram, ₹50/video like → investment scheme; largest single victim ₹29 lakh',
                            },
                            {
                                date: 'Aug 18–19, 2023',
                                victim: 'Individual · Maharashtra',
                                amount: '₹2.4 lakh',
                                tactic: 'Telegram online job offer → trust built with small payments → ₹2.4 lakh investment → scammers disappeared',
                            },
                            {
                                date: 'Mar 10–14, 2024',
                                victim: 'Radhika (pregnant, WFH seeker) · Chennai',
                                amount: '₹7.7 lakh',
                                tactic: 'Facebook ad → Telegram group → Bitcoin trading → "frozen funds" penalty loop → 3 accounts frozen by police',
                            },
                            {
                                date: 'Mar–Apr 2025',
                                victim: 'Shruti Bhola · Gomtinagar, Lucknow',
                                amount: '₹4.98 lakh',
                                tactic: '"Global Financial Group" Telegram → ratings + link tasks → ₹3 lakh RTGS transfer in final trap',
                            },
                            {
                                date: 'Jul 2025',
                                victim: 'Woman, 29 · Delhi',
                                amount: '₹17 lakh',
                                tactic: 'Remote work on Telegram → review writing → UPI escalation loop → 5 arrested including 19-yr-old dropout',
                            },
                            {
                                date: 'Aug 10, 2025',
                                victim: 'Munirka Village resident · Delhi',
                                amount: '₹17.31 lakh',
                                tactic: '"971 CBOE" Telegram group → Google hotel reviews → 30–40% return promises → 5 arrested (kingpin: pharmacy owner)',
                            },
                            {
                                date: 'Aug 16, 2025',
                                victim: 'Jatin, village resident · Rohtak, Haryana',
                                amount: '₹10.14 lakh',
                                tactic: 'Hotel rating tasks on Telegram → ₹7K → ₹14K "profit" shown → ₹64,700 demanded → 4 arrested from Rajasthan',
                            },
                            {
                                date: 'Oct 30, 2025',
                                victim: 'Engineer · Cyberabad, Hyderabad',
                                amount: '₹51 lakh',
                                tactic: 'Fake "P&B Solutions" WFH job → e-commerce listing tasks → ₹11 lakh final demand to "release earnings"',
                            },
                            {
                                date: 'Dec 2025–Jan 2026',
                                victim: 'Individual, 38 · Ambegaon, Pune',
                                amount: '₹12.30 lakh',
                                tactic: 'Small task payments built trust → larger transfers demanded for "higher-value tasks" → disappeared',
                            },
                            {
                                date: 'Mar 22–Apr 26, 2026',
                                victim: 'Subhash Chand Sharma · Shalimar Garden, Ghaziabad',
                                amount: '₹9.65 lakh',
                                tactic: 'Google review tasks → crypto investment → 29% "activation fee" + 30% "tax" demanded to unblock withdrawals',
                            },
                            {
                                date: 'Mar 11–Apr 1, 2026',
                                victim: 'Private employee, 38 · Vastral, Ahmedabad',
                                amount: '₹30.5 lakh',
                                tactic: 'Google Maps review WhatsApp offer → crypto trading → 19 days, multiple "VIP upgrade" and "credit score" pretexts',
                            },
                            {
                                date: 'Apr 8–10, 2026',
                                victim: 'Young man · Panki, Kanpur',
                                amount: '₹3.50 lakh',
                                tactic: 'WhatsApp promotional call → review/sharing tasks → 58 separate UPI transactions across multiple accounts',
                            },
                        ].map((row, i) => (
                            <tr key={i} className="bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                <td className="px-4 py-3 text-gray-500 dark:text-gray-400 whitespace-nowrap text-xs">{row.date}</td>
                                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 font-medium text-xs">{row.victim}</td>
                                <td className="px-4 py-3 font-bold text-red-600 dark:text-red-400 whitespace-nowrap">{row.amount}</td>
                                <td className="px-4 py-3 text-gray-600 dark:text-gray-400 text-xs">{row.tactic}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400 -mt-4 mb-8">
                Sources: The Quint, The News Minute, OnManorama, BusinessToday, Sunday Guardian Live, The Hans India, The420.in. All amounts as reported by respective news outlets.
            </p>

            <hr />

            {/* ── FAQ ───────────────────────────────────────────────────── */}
            <h2>Frequently Asked Questions</h2>

            <h3>Is the online task job on WhatsApp real?</h3>
            <p>
                Legitimate companies do not recruit via unsolicited WhatsApp messages. Task-based jobs that
                require you to deposit money to "unlock" tasks are always scams. No exception exists to this
                rule.
            </p>

            <h3>How do I know if a Telegram job group is a scam?</h3>
            <p>
                Red flags include: requires upfront deposit, profits shown on an internal dashboard only,
                cannot withdraw earnings, urgent pressure to complete more tasks, and fake testimonials from
                group members who are actually scammer-controlled accounts.
            </p>

            <h3>Can I get my money back from a Telegram task scam?</h3>
            <p>
                Call <strong>1930</strong> immediately. Filing within 30–60 minutes gives the best chance
                of freezing the destination account. Also file at <strong>cybercrime.gov.in</strong> with
                all screenshots of conversations and transactions. After 24 hours, recovery becomes
                significantly harder as scammers move funds through multiple mule accounts.
            </p>

            <h3>Who runs Telegram task scams in India?</h3>
            <p>
                Many operations are coordinated from organised crime networks in Myanmar, Cambodia, and China.
                Some Indian nationals are also involved as "mule account" operators who receive and forward
                money for a commission. Both the operators and mule account holders face criminal liability
                under Indian cyber law.
            </p>

            <h3>What is the pig butchering scam?</h3>
            <p>
                Pig butchering (sha zhu pan) is a long-term investment or job scam where criminals build deep
                trust over weeks or months before stealing large amounts. The name refers to "fattening the pig"
                before slaughter. Telegram task scams are a faster, volume-focused version of the same
                technique, targeting job seekers rather than investors.
            </p>

            <hr />

            {/* ── FINAL THOUGHTS ────────────────────────────────────────── */}
            <h2>Final Thoughts</h2>

            <p>
                The Telegram task scam is not a sophisticated technical attack. It is a psychological operation
                that works by exploiting genuine financial need, the credibility of small upfront payments, and
                the human tendency to trust people and groups that have been helpful in the past.
            </p>

            <p>
                The single most powerful protection is knowing the rule before you need it: <strong>no legitimate
                employer ever asks you to deposit money to complete a task.</strong> That line, once crossed,
                is always a crime being committed against you.
            </p>

            <p>
                Share this article with at least one person in your family or network who is currently looking
                for work. The scam is active, it is growing, and the next person it targets could be someone
                you care about.
            </p>

            {/* ── FINAL CTA ─────────────────────────────────────────────── */}
            <div className="not-prose my-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/60 p-8 text-center">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">
                    Free Tool
                </p>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    Got a suspicious job offer or Telegram link?
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 max-w-sm mx-auto">
                    Check any phone number, URL, or Telegram invite link on RakshaAI instantly.
                    No sign-up. No cost. Results in under 5 seconds.
                </p>
                <Link
                    href="/phone-number-checker"
                    className="inline-flex items-center gap-2 px-7 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold text-sm rounded-full hover:bg-gray-700 dark:hover:bg-gray-100 transition-colors"
                >
                    Check a Number or Link now &rarr;
                </Link>
                <p className="text-gray-400 dark:text-gray-500 text-xs mt-4">
                    100% free &middot; No sign-up required &middot; Save 1930 in your contacts
                </p>
            </div>

        </BlogLayout>
        </>
    )
}
