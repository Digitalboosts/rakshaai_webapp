import { Metadata } from 'next'
import BlogLayout from '@/components/BlogLayout'
import Link from 'next/link'
import Image from 'next/image'
import { blogPostingSchema, faqPageSchema, breadcrumbListSchema, personSchema, jsonLd } from '@/lib/seo/schema'
import SidebarPhishingEmail from '@/components/blog/SidebarPhishingEmail'

export const metadata: Metadata = {
    title: { absolute: 'Phishing Email India: How to Spot a Fake Before You Click | RakshaAI' },
    description:
        'Fake income tax refunds, bank security alerts, EPFO notifications. Phishing emails target every Indian with an inbox. 8 signs of a fake email and what to check in 30 seconds before clicking anything.',
    keywords:
        'phishing email India 2026, fake income tax email India, phishing attack India 2026, how to identify phishing email India, fake EPFO email India, fake bank email India, email fraud India, email header check India scam',
    authors: [{ name: 'Rabinarayan Pradhan', url: 'https://www.linkedin.com/in/rabinarayan-pradhan-14ab9422b/' }],
    robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
    openGraph: {
        title: 'Phishing Email India: 8 Signs That Email Is Fake. Check Before You Click',
        description:
            'Fake IT refunds, EPFO alerts, bank security emails. 8 signs of a phishing email and how to check any link in 30 seconds before you click anything.',
        type: 'article',
        siteName: 'RakshaAI',
        publishedTime: '2026-06-23T00:00:00.000Z',
        modifiedTime: '2026-06-23T00:00:00.000Z',
        tags: ['phishing email India', 'email fraud India', 'fake income tax email', 'email scam India 2026'],
        url: 'https://rakshaai.co/blog/phishing-email-india',
        images: [
            {
                url: '/blog/phishing-email-india/phishing-email-hero.jpg',
                width: 1200,
                height: 630,
                alt: 'Phishing email India 2026. Fake income tax bank email scam, how to spot',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Got an Email From Income Tax / EPFO / Your Bank? Check These 8 Signs First.',
        description:
            'Phishing emails impersonate every major Indian institution. 8 signs to spot a fake in 30 seconds. Share this with every professional you know.',
        images: ['/blog/phishing-email-india/phishing-email-hero.jpg'],
    },
    alternates: {
        canonical: 'https://rakshaai.co/blog/phishing-email-india',
    },
}

const articleStructuredData = blogPostingSchema({
    headline: 'Phishing Email India 2026: How to Spot a Fake Email Before You Click',
    description:
        '8 signs of a phishing email in India. Fake IT department, EPFO, bank security alerts. How to check any suspicious email link in 30 seconds.',
    url: '/blog/phishing-email-india',
    image: '/blog/phishing-email-india/phishing-email-hero.jpg',
    datePublished: '2026-06-23T00:00:00.000Z',
    dateModified: '2026-06-23T00:00:00.000Z',
    author: personSchema({ name: 'Rabinarayan Pradhan', jobTitle: 'Cybersecurity Writer', url: '/author/rabinarayan-pradhan', image: '/authors/rabinarayan-pradhan.jpeg', sameAs: ['https://www.linkedin.com/in/rabinarayan-pradhan-14ab9422b/'] }),
    section: 'Phishing Scams',
    keywords: ['phishing email India 2026', 'fake income tax email India', 'email fraud India', 'how to identify phishing email India'],
})

const breadcrumbSchema = breadcrumbListSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'Phishing Email India', url: '/blog/phishing-email-india' },
])

const faqStructuredData = faqPageSchema([
    {
        question: 'What is the official email address of the Income Tax Department India?',
        answer:
            'Official Income Tax communications come from the @incometax.gov.in domain. Any email claiming to be from Income Tax with a different domain (.com, .net, .org, or any variation) is a phishing attempt. The IT department does not ask for OTP or bank details over email.',
    },
    {
        question: 'How do I check if an email link is safe before clicking?',
        answer:
            'Hover your mouse over the link (do not click). The real destination URL appears in the browser status bar or as a tooltip. If it differs from the displayed text, it is suspicious. Also paste the URL into rakshaai.co/website-safety-checker before clicking anything.',
    },
    {
        question: 'Can phishing emails in India steal my money without me sending anything?',
        answer:
            'Yes. Some phishing emails contain links to fake banking portals that capture your credentials when you log in. Others contain attachments with malware that can capture OTPs and banking app data in the background. Never click email links to banking sites. Always open your bank directly.',
    },
    {
        question: 'How do I report a phishing email in India?',
        answer:
            'Forward the email as an attachment to report@cybercrime.gov.in. Also report at cybercrime.gov.in and call 1930 if money was lost. If it impersonates a bank, forward to the bank\'s official phishing report email (most major banks have one listed on their website).',
    },
    {
        question: 'What government emails are safe to expect in India?',
        answer:
            'Legitimate Indian government emails come from .gov.in domains only: incometax.gov.in, epfindia.gov.in, uidai.gov.in, irctc.co.in. Never trust government-claiming emails from .com, .net, or .org domains. When in doubt, log in to the portal directly, not via the email link.',
    },
])

export default function PhishingEmailIndiaPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLd([articleStructuredData, faqStructuredData, breadcrumbSchema]) }}
            />
            <BlogLayout
                title="Phishing Email India: How to Spot a Fake Email Before You Click"
                description="Fake income tax refunds, bank security alerts, EPFO notifications. Phishing emails target every Indian with an inbox. 8 signs of a fake email and what to check in 30 seconds."
                publishedAt="2026-06-23T00:00:00.000Z"
                lastUpdated="2026-06-23T00:00:00.000Z"
                readTime="8 min"
                author="Rabinarayan Pradhan"
                authorUrl="/author/rabinarayan-pradhan"
                primaryTool={{ label: 'Check a suspicious email link', href: '/website-safety-checker' }}
                tags={['Phishing Scams', 'Email Fraud', 'Scam Alerts', 'Cybercrime India']}
                slug="phishing-email-india"
                sidebar={<SidebarPhishingEmail title="Phishing Email India: How to Spot a Fake Email Before You Click" description="Fake income tax refunds, bank security alerts, EPFO notifications. Phishing emails target every Indian with an inbox. 8 signs of a fake email and what to check in 30 seconds." />}
            >

                {/* HERO IMAGE */}
                <div className="not-prose mb-10 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                        src="/blog/phishing-email-india/phishing-email-hero.jpg"
                        alt="Phishing email India 2026, fake income tax bank email scam how to spot"
                        width={1200}
                        height={630}
                        className="w-full object-cover"
                        priority
                    />
                    <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-2 mb-0 italic px-4 pb-3">
                        A fake Income Tax Department email with the wrong sender domain highlighted. One click could compromise your bank account.
                    </p>
                </div>

                {/* INTRO */}
                <p>
                    Phishing attacks in India surged past every previous record in 2026. The emails look professional,
                    reference real government departments, and create enough urgency that most people click before thinking.
                    Fake income tax refund emails, fake EPFO notifications, and fake bank security alerts are arriving in
                    millions of Indian inboxes every single day.
                </p>

                <p>
                    The difference between a real government email and a phishing email often comes down to a single detail:
                    the sender domain. This article breaks down the 6 most impersonated senders, 8 signs that expose every
                    phishing email, and a 30-second check that protects you before you click anything.
                </p>

                {/* Cross-link to hub */}
                <div className="not-prose my-6 rounded-xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/40 p-4 flex items-start gap-3">
                    <span className="text-emerald-600 dark:text-emerald-400 text-base mt-0.5">&#8594;</span>
                    <p className="text-sm text-gray-700 dark:text-gray-300 m-0">
                        <strong>Already clicked a suspicious link?</strong>{' '}
                        <Link href="/blog/got-scammed-online-india-what-to-do" className="text-emerald-700 dark:text-emerald-400 underline font-medium">
                            Do these 5 things in 30 minutes
                        </Link>{' '}
                        to limit the damage and start recovery.
                    </p>
                </div>

                {/* FEATURED SNIPPET BLOCK */}
                <div className="not-prose my-8 rounded-2xl border-2 border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/40 p-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">
                        How to identify a phishing email in India
                    </p>
                    <ol className="space-y-2.5 list-none">
                        {[
                            ['1', 'Sender email domain is wrong (incometax-india.net instead of incometax.gov.in)'],
                            ['2', 'Creates urgency: "your account will be closed in 24 hours"'],
                            ['3', 'Contains a link that does not match the real website when you hover'],
                            ['4', 'Asks you to click a link to verify OTP, password, or bank details'],
                            ['5', 'Generic greeting: "Dear Customer" instead of your actual name'],
                            ['6', 'Grammar errors or unusual phrasing in what claims to be an official email'],
                            ['7', 'Attachment you were not expecting, especially .zip, .exe, or .pdf files'],
                            ['8', 'The email address changes slightly from the real one: extra letter, hyphen, or wrong TLD'],
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
                        Paste any suspicious link into <Link href="/website-safety-checker" className="underline">rakshaai.co</Link> before clicking.
                    </p>
                </div>

                <hr />

                {/* WHY INDIA */}
                <h2>Why India Is a Prime Target for Phishing Emails in 2026</h2>

                <p>
                    India has more than 900 million internet users, with hundreds of millions accessing email for the first
                    time in the last three years. This rapid digital adoption happened faster than digital literacy could keep
                    up. Most new email users in India have never been taught how to verify a sender domain, check an email
                    header, or hover over a link before clicking.
                </p>

                <p>
                    At the same time, critical services like income tax filing, EPFO withdrawals, bank account management, and
                    government scheme applications have all moved online. Every Indian with an email address now receives
                    legitimate communication from government agencies. Scammers exploit this by sending emails that look
                    identical to real government notifications, knowing that most recipients will not check the sender domain
                    before clicking.
                </p>

                <p>
                    India ranked among the top 5 countries globally for phishing attacks in 2025, and the trend accelerated
                    into 2026. The most targeted sectors are banking, government services, and e-commerce, which together
                    account for over 75% of all phishing emails sent to Indian addresses.
                </p>

                <hr />

                {/* 6 MOST IMPERSONATED */}
                <h2>The 6 Most Impersonated Senders in Indian Phishing Emails</h2>

                <h3>Fake Income Tax Department Emails</h3>

                <p>
                    The most common phishing email in India impersonates the Income Tax Department. These emails typically
                    arrive during ITR filing season (July to September) and claim that a refund is ready, a return has an
                    error, or an account needs verification. The email includes a link to a fake portal that looks identical
                    to the real incometax.gov.in website.
                </p>

                <p>
                    The critical difference: the real Income Tax Department sends emails only from the <strong>@incometax.gov.in</strong> domain.
                    Phishing versions use domains like incometax-india.net, incometaxrefund.com, or it-refunds-india.org.
                    The IT department never asks for your OTP, PAN card photo, or bank login credentials via email.
                </p>

                <h3>Fake Bank Security Alerts</h3>

                <p>
                    These emails claim your bank account has been compromised, your card is blocked, or a suspicious
                    transaction was detected. They ask you to click a link to verify your identity or update your security
                    settings. The fake portal captures your net banking credentials and OTPs in real time.
                </p>

                <p>
                    Banks in India send transaction alerts via SMS from registered sender IDs, not via email links.
                    If you ever receive an email asking you to click a link to fix a bank issue, it is a phishing attempt.
                    Open your banking app directly or call the number on the back of your card.
                </p>

                <h3>Fake EPFO / PF Account Notifications</h3>

                <p>
                    Employees across India receive fake emails claiming their PF withdrawal is ready, their UAN needs
                    updating, or their employer has submitted incorrect details. The emails use EPFO branding and link
                    to a fake login page that harvests UAN credentials and Aadhaar numbers.
                </p>

                <p>
                    EPFO communications come only from <strong>@epfindia.gov.in</strong>. Any email from epfo-india.com,
                    epf-services.net, or similar domains is fake. Check your PF balance only through the official EPFO
                    portal or the UMANG app.
                </p>

                <h3>Fake IRCTC / Train Booking Alerts</h3>

                <p>
                    These emails claim your train booking has been cancelled, your IRCTC account needs verification, or
                    a refund is pending for a recent cancellation. The link leads to a clone of the IRCTC login page.
                    Since millions of Indians book trains online, these emails have a high hit rate.
                </p>

                <p>
                    IRCTC sends booking confirmations from <strong>@irctc.co.in</strong>. Any email from irctc-booking.com
                    or irctc-india.net is fraudulent. Log in to irctc.co.in directly to check any booking-related issue.
                </p>

                <h3>Fake Job Offer Emails From MNCs</h3>

                <p>
                    Graduates and job seekers receive emails claiming they have been shortlisted for interviews at
                    companies like TCS, Infosys, Wipro, or Amazon. The email includes a link to complete a registration
                    form or download an offer letter. The form harvests personal data including Aadhaar and PAN numbers.
                    The downloaded file may contain malware.
                </p>

                <p>
                    Legitimate companies send interview invitations from their official corporate domains, not from Gmail,
                    Yahoo, or random .com addresses. No real employer asks for Aadhaar or PAN details before an interview.
                </p>

                <h3>Fake Delivery Notifications From Courier Companies</h3>

                <p>
                    With e-commerce booming in India, fake delivery emails have become extremely effective. These claim a
                    parcel could not be delivered, a customs fee needs to be paid, or an address update is required. The link
                    leads to a payment page that captures card details.
                </p>

                <p>
                    For a complete breakdown of this scam, see our guide on{' '}
                    <Link href="/blog/parcel-delivery-scam-india">fake delivery SMS scams in India</Link>. The same principles
                    apply to email versions: never pay a fee through an email link. Track your delivery only through the
                    official courier or e-commerce app.
                </p>

                <hr />

                {/* 8 SIGNS */}
                <h2>8 Signs an Email Is a Phishing Attempt</h2>

                {/* 8 signs infographic */}
                <div className="not-prose my-8 rounded-2xl overflow-hidden shadow-md">
                    <Image
                        src="/blog/phishing-email-india/8-signs-phishing-email.jpg"
                        alt="8 signs of phishing email India, how to identify fake email checklist"
                        width={800}
                        height={900}
                        className="w-full object-contain max-h-[700px]"
                    />
                    <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-2 mb-0 italic px-4 pb-3">
                        All 8 signs that an email is a phishing attempt. If even one applies, do not click anything.
                    </p>
                </div>

                <h3>Sign 1: The Sender Domain Is Wrong</h3>

                <p>
                    This is the single most reliable indicator. Every Indian government department uses <strong>.gov.in</strong> domains.
                    If an email claims to be from the Income Tax Department but comes from incometax-india.net or
                    it-refund.com, it is fake. No exception.
                </p>

                {/* Real vs fake domain infographic */}
                <div className="not-prose my-8 rounded-2xl overflow-hidden shadow-md">
                    <Image
                        src="/blog/phishing-email-india/real-vs-fake-email-domain.jpg"
                        alt="Real vs fake government email domain India, how to check phishing sender"
                        width={800}
                        height={500}
                        className="w-full object-contain max-h-[500px]"
                    />
                    <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-2 mb-0 italic px-4 pb-3">
                        Indian government domains always end in .gov.in. Banks use their known .co.in or .com domain. Everything else is suspicious.
                    </p>
                </div>

                <h3>Sign 2: Extreme Urgency</h3>

                <p>
                    "Your account will be blocked in 24 hours." "Refund expires today." "Immediate action required."
                    Phishing emails create artificial deadlines because urgency overrides critical thinking. Real government
                    agencies and banks provide reasonable notice periods and never threaten instant account closure via email.
                </p>

                <h3>Sign 3: The Link Destination Does Not Match the Display Text</h3>

                <p>
                    The email says "Click here to verify at incometax.gov.in" but when you hover over the link (without
                    clicking), the actual URL shows something completely different, like verify-refund-india.xyz. This mismatch
                    is a clear phishing indicator.
                </p>

                <h3>Sign 4: Asks You to Click a Link to Verify OTP, Password, or Bank Details</h3>

                <p>
                    No legitimate Indian bank, government agency, or service provider will ever send you an email link
                    asking you to enter your OTP, password, or bank account details. If an email asks for any of these,
                    it is a phishing attempt. Period.
                </p>

                <h3>Sign 5: Generic Greeting Instead of Your Name</h3>

                <p>
                    Real communications from your bank or the Income Tax Department address you by name because they have
                    your records. Phishing emails use "Dear Customer", "Dear Taxpayer", or "Dear Account Holder" because
                    the scammer does not know your name.
                </p>

                <h3>Sign 6: Grammar Errors or Unusual Phrasing</h3>

                <p>
                    While AI-generated phishing emails are improving, many still contain spelling mistakes, awkward
                    phrasing, or inconsistent formatting that would not appear in official government or banking
                    communications. Read the email carefully before taking any action.
                </p>

                <h3>Sign 7: Unexpected Attachment</h3>

                <p>
                    Government agencies in India do not send unsolicited email attachments. If an email claiming to be
                    from the IT Department, EPFO, or your bank includes a .zip, .exe, .pdf, or .doc attachment you were
                    not expecting, do not download it. These attachments may contain malware that captures your banking
                    credentials and OTPs.
                </p>

                <h3>Sign 8: Email Address Has Slight Variations From the Real One</h3>

                <p>
                    Scammers use email addresses that look almost identical to real ones. An extra hyphen, a swapped letter,
                    or a different top-level domain (.net instead of .gov.in) are all tactics designed to pass a quick glance.
                    Always check the full sender email address character by character.
                </p>

                <hr />

                {/* HOW TO CHECK */}
                <h2>How to Check the Real Sender of Any Email in 30 Seconds</h2>

                {/* 30-second check infographic */}
                <div className="not-prose my-8 rounded-2xl overflow-hidden shadow-md">
                    <Image
                        src="/blog/phishing-email-india/check-email-30-seconds.jpg"
                        alt="How to check real sender of phishing email India, 30 second guide"
                        width={800}
                        height={500}
                        className="w-full object-contain max-h-[500px]"
                    />
                    <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-2 mb-0 italic px-4 pb-3">
                        Four steps to verify any email in 30 seconds. Do this every time before clicking any link.
                    </p>
                </div>

                <ol>
                    <li>
                        <strong>Hover over the sender name.</strong> In Gmail, Outlook, and most email clients, clicking
                        or hovering on the sender name reveals the actual email address behind the display name. "Income Tax
                        Department" as a display name means nothing. The email address after the @ symbol is what matters.
                    </li>
                    <li>
                        <strong>Check the domain.</strong> Government communications in India come only from .gov.in
                        domains. Banks use their registered domains (sbi.co.in, hdfcbank.com, icicibank.com). If the
                        domain does not match exactly, the email is fake.
                    </li>
                    <li>
                        <strong>Hover over any link before clicking.</strong> The real URL appears in the bottom-left
                        corner of your browser or as a tooltip. If the displayed text says incometax.gov.in but the
                        actual link goes somewhere else, do not click.
                    </li>
                    <li>
                        <strong>Paste the URL into RakshaAI.</strong> Copy any suspicious link from the email and check it
                        at <Link href="/website-safety-checker">rakshaai.co/website-safety-checker</Link>. The scan takes
                        5 seconds and tells you whether the site is safe, suspicious, or a known phishing domain.
                    </li>
                </ol>

                <p>
                    <strong>The golden rule:</strong> Never log in to any website via an email link. If an email says your
                    bank account needs attention, open your banking app directly or type the URL yourself. If the Income
                    Tax Department claims your refund is ready, go to incometax.gov.in yourself. Never use the link
                    provided in the email.
                </p>

                <hr />

                {/* WHAT TO DO IF CLICKED */}
                <h2>What To Do If You Clicked a Phishing Link in an Email</h2>

                <div className="not-prose my-6 p-4 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800">
                    <p className="text-sm font-semibold text-red-800 dark:text-red-300 m-0">
                        Act in the next 10 minutes. The faster you respond, the higher the chance of preventing account compromise or financial loss.
                    </p>
                </div>

                <ol>
                    <li>
                        <strong>Close the page immediately.</strong> Do not enter any information. If a page asks for
                        login credentials, bank details, or OTPs, close the browser tab right away.
                    </li>
                    <li>
                        <strong>Change your passwords.</strong> If the phishing email impersonated your bank, change
                        your net banking password and transaction PIN immediately through the official banking app.
                        If it impersonated your email provider, change your email password first.
                    </li>
                    <li>
                        <strong>If you entered financial details, call your bank and 1930 immediately.</strong> Ask
                        your bank to temporarily freeze your account and raise a fraud dispute. Call 1930 to file
                        a cybercrime complaint in real time.
                    </li>
                    <li>
                        <strong>Scan your device for malware.</strong> If the link triggered any download, run a full
                        malware scan before opening any banking or payment app. Malware from phishing emails can
                        silently capture OTPs and credentials in the background.
                    </li>
                    <li>
                        <strong>Report the phishing email.</strong> Forward the email as an attachment to
                        report@cybercrime.gov.in. If it impersonated a specific bank, forward it to the bank's phishing
                        report email. Also file a complaint at{' '}
                        <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer">cybercrime.gov.in</a>.
                    </li>
                </ol>

                <p>
                    For a complete step-by-step recovery guide, see{' '}
                    <Link href="/blog/got-scammed-online-india-what-to-do">Got scammed online in India? Do these 5 things in 30 minutes</Link>.
                </p>

                <hr />

                {/* FAQ */}
                <h2>Frequently Asked Questions</h2>

                <h3>What is the official email address of the Income Tax Department India?</h3>
                <p>
                    Official Income Tax communications come from the @incometax.gov.in domain. Any email claiming to
                    be from Income Tax with a different domain (.com, .net, .org, or any variation) is a phishing attempt.
                    The IT department does not ask for OTP or bank details over email.
                </p>

                <h3>How do I check if an email link is safe before clicking?</h3>
                <p>
                    Hover your mouse over the link (do not click). The real destination URL appears in the browser's
                    status bar or as a tooltip. If it differs from the displayed text, it is suspicious. Also paste the
                    URL into <Link href="/website-safety-checker">rakshaai.co/website-safety-checker</Link> before
                    clicking anything.
                </p>

                <h3>Can phishing emails in India steal my money without me sending anything?</h3>
                <p>
                    Yes. Some phishing emails contain links to fake banking portals that capture your credentials when
                    you log in. Others contain attachments with malware that can capture OTPs and banking app data in
                    the background. Never click email links to banking sites. Always open your bank directly.
                </p>

                <h3>How do I report a phishing email in India?</h3>
                <p>
                    Forward the email as an attachment to report@cybercrime.gov.in. Also report at{' '}
                    <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer">cybercrime.gov.in</a>{' '}
                    and call 1930 if money was lost. If it impersonates a bank, forward to the bank's official phishing
                    report email (most major banks have one listed on their website).
                </p>

                <h3>What government emails are safe to expect in India?</h3>
                <p>
                    Legitimate Indian government emails come from .gov.in domains only: incometax.gov.in, epfindia.gov.in,
                    uidai.gov.in, irctc.co.in. Never trust government-claiming emails from .com, .net, or .org domains.
                    When in doubt, log in to the portal directly, not via the email link.
                </p>

                <hr />

                {/* FINAL THOUGHTS */}
                <h2>Final Thoughts</h2>

                <p>
                    Phishing emails work because they exploit trust in institutions that Indians interact with every day:
                    banks, the tax department, EPFO, and courier services. The emails are getting more sophisticated,
                    but the fundamental checks remain the same: verify the sender domain, hover before clicking, and
                    never enter credentials through an email link.
                </p>

                <p>
                    The one rule that stops every phishing email: if any email asks you to click a link and enter
                    personal details, close it. Open the website directly by typing the URL yourself. This single
                    habit eliminates 100% of phishing risk from email.
                </p>

                <p>
                    Share this article with your family, colleagues, and especially older relatives who may not be
                    familiar with checking email domains. One forwarded article could prevent a significant financial loss.
                </p>

                {/* FINAL CTA */}
                <div className="not-prose my-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/60 p-8 text-center">
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">
                        Free Tool
                    </p>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                        Got a suspicious email link?
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 max-w-sm mx-auto">
                        Paste any URL from a suspicious email into RakshaAI before clicking.
                        No sign-up. No cost. Results in under 5 seconds.
                    </p>
                    <Link
                        href="/website-safety-checker"
                        className="inline-flex items-center gap-2 px-7 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold text-sm rounded-full hover:bg-gray-700 dark:hover:bg-gray-100 transition-colors"
                    >
                        Check a Link Now &rarr;
                    </Link>
                    <p className="text-gray-400 dark:text-gray-500 text-xs mt-4">
                        100% free &middot; No sign-up required &middot; Save 1930 in your contacts
                    </p>
                </div>

            </BlogLayout>
        </>
    )
}
