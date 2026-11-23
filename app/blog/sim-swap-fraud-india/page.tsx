import { Metadata } from 'next'
import BlogLayout from '@/components/BlogLayout'
import Link from 'next/link'
import Image from 'next/image'
import { blogPostingSchema, faqPageSchema, breadcrumbListSchema, personSchema, jsonLd } from '@/lib/seo/schema'
import SidebarSimSwap from '@/components/blog/SidebarSimSwap'

// SEO Metadata
export const metadata: Metadata = {
    title: { absolute: 'SIM Swap Fraud India: How Scammers Steal Your Phone Number | RakshaAI' },
    description:
        'Your phone loses signal  scammers are draining your bank via your number. How SIM swap fraud works and how to protect yourself.',
    keywords:
        'SIM swap fraud India 2026, SIM card fraud India, SIM porting scam India, phone signal lost suddenly India, how to prevent SIM swap India, OTP fraud via SIM swap, bank account hacked via SIM India',
    authors: [{ name: 'Rabinarayan Pradhan', url: 'https://www.linkedin.com/in/rabinarayan-pradhan-14ab9422b/' }],
    robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
    openGraph: {
        title: 'SIM Swap Fraud India: Your Phone Loses Signal and Your Bank Gets Emptied',
        description:
            'Sudden signal loss is the warning sign. Scammers port your number, receive your OTPs, and drain your bank. What to do in the first 10 minutes.',
        type: 'article',
        siteName: 'RakshaAI',
        publishedTime: '2026-06-17T00:00:00.000Z',
        modifiedTime: '2026-06-17T00:00:00.000Z',
        tags: ['SIM swap fraud India', 'SIM card fraud India', 'OTP fraud', 'phone scams India', 'cybercrime India 2026'],
        url: 'https://rakshaai.co/blog/sim-swap-fraud-india',
        images: [
            {
                url: '/blog/sim-swap-fraud-india/sim-swap-hero.webp',
                width: 1000,
                height: 562,
                alt: 'SIM swap fraud India 2026  phone loses signal bank account drained OTP scam',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Your Phone Loses Signal. Meanwhile Scammers Are Draining Your Bank Account.',
        description:
            'SIM swap fraud explained: what it is, how to detect it, and what to do in the first 10 minutes. Share with everyone who has UPI linked to their phone.',
        images: ['/blog/sim-swap-fraud-india/sim-swap-hero.webp'],
    },
    alternates: {
        canonical: 'https://rakshaai.co/blog/sim-swap-fraud-india',
    },
}

// Structured Data
const articleStructuredData = blogPostingSchema({
    headline: 'SIM Swap Fraud India 2026: How Scammers Steal Your Phone Number and Empty Your Bank',
    description:
        'SIM swap fraud ports your number to a scammer\'s SIM, giving them all your OTPs. How it works, warning signs, and a 10-minute emergency response guide.',
    url: '/blog/sim-swap-fraud-india',
    image: '/blog/sim-swap-fraud-india/sim-swap-hero.webp',
    datePublished: '2026-06-17T00:00:00.000Z',
    dateModified: '2026-06-17T00:00:00.000Z',
    author: personSchema({ name: 'Rabinarayan Pradhan', jobTitle: 'Cybersecurity Writer', url: '/author/rabinarayan-pradhan', image: '/authors/rabinarayan-pradhan.jpeg', sameAs: ['https://www.linkedin.com/in/rabinarayan-pradhan-14ab9422b/'] }),
    section: 'Phone Scams',
    keywords: ['SIM swap fraud India 2026', 'SIM card fraud India', 'SIM porting scam India', 'OTP fraud via SIM swap'],
})

const breadcrumbSchema = breadcrumbListSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'SIM Swap Fraud India 2026', url: '/blog/sim-swap-fraud-india' },
])

const faqStructuredData = faqPageSchema([
    {
        question: 'How do I know if I am a victim of SIM swap fraud in India?',
        answer:
            'The main sign is your phone suddenly losing all signal while you are in an area where you normally have coverage. You may also receive an SMS saying your SIM has been activated on a new device, or find that your UPI or banking apps stop working because OTPs are now going to the scammer\'s device.',
    },
    {
        question: 'How do scammers get personal information for SIM swap in India?',
        answer:
            'They obtain your details from data breaches, phishing attacks, social media, or by posing as telecom customer care over the phone. With your name, Aadhaar number, and registered address, which are often available from data breaches, they can impersonate you at a telecom retailer.',
    },
    {
        question: 'Can I prevent SIM swap fraud in India?',
        answer:
            'Yes. Set a SIM lock PIN with your telecom operator, enable additional OTP authentication for SIM change requests (Jio and Airtel both offer this), and never share personal details on unverified calls claiming to be from your telecom company.',
    },
    {
        question: 'Which Indian telecom operators have SIM swap protection?',
        answer:
            'All major operators including Jio, Airtel, BSNL, and Vi offer a waiting period and verification for SIM change requests. TRAI mandates a 24-hour cooling period and OTP verification for same-operator porting. Setting a SIM PIN adds a second layer of protection.',
    },
    {
        question: 'How much money can scammers steal in a SIM swap in India?',
        answer:
            'All accounts linked to your mobile number are at risk: UPI, internet banking, email, and any app that uses SMS OTP for authentication. Documented SIM swap cases in India show losses ranging from Rs 50,000 to over Rs 30 lakh in a single incident.',
    },
])

// Page
export default function SimSwapFraudIndiaPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLd([articleStructuredData, faqStructuredData, breadcrumbSchema]) }}
            />
            <BlogLayout
                title="SIM Swap Fraud India: How Scammers Steal Your Phone Number and Empty Your Bank"
                description="Your phone suddenly has no signal. Scammers are using your number to receive OTPs and drain your bank. What to do in the first 10 minutes."
                publishedAt="2026-06-17T00:00:00.000Z"
                lastUpdated="2026-06-17T00:00:00.000Z"
                readTime="9 min"
                author="Rabinarayan Pradhan"
                authorUrl="/author/rabinarayan-pradhan"
                primaryTool={{ label: 'Check a suspicious telecom caller number', href: '/phone-number-checker' }}
                tags={['SIM Swap Fraud', 'Phone Scams', 'OTP Fraud India', 'Bank Fraud India', 'Cybercrime India']}
                slug="sim-swap-fraud-india"
                sidebar={<SidebarSimSwap title="SIM Swap Fraud India: How Scammers Steal Your Phone Number and Empty Your Bank" description="Your phone suddenly has no signal. Scammers are using your number to receive OTPs and drain your bank. What to do in the first 10 minutes." />}
            >

                {/* HERO IMAGE */}
                <div className="not-prose mb-10 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                        src="/blog/sim-swap-fraud-india/sim-swap-hero.webp"
                        alt="SIM swap fraud India 2026  phone shows No Service while bank sends transaction alert"
                        width={1000}
                        height={562}
                        className="w-full object-cover"
                        priority
                    />
                    <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-2 mb-0 italic px-4 pb-3">
                        No Service on the phone. A Rs 45,000 transaction alert from the bank. This is what SIM swap fraud looks like at the moment it happens.
                    </p>
                </div>

                {/* INTRO */}
                <p>
                    SIM swap fraud is among the most dangerous cybercrime techniques active in India today because
                    it neutralises the one security layer that virtually every bank, UPI app, and online service
                    relies on: the SMS OTP sent to your registered mobile number. When a scammer successfully ports
                    your phone number to their SIM card, every OTP your bank sends goes directly to them instead of you.
                </p>

                <p>
                    You discover the fraud not through a suspicious message or a phishing link, but through absence:
                    your phone loses signal entirely. By the time you realise what has happened and why, the scammer
                    may already have initiated multiple transactions using OTPs you never received. This guide explains
                    how SIM swap fraud works in India, how to detect it in real time, and the exact steps to take
                    in the first ten minutes if it is happening to you right now.
                </p>

                <hr />

                {/* WHAT IS SIM SWAP */}
                <h2>What Is SIM Swap Fraud and Why India Is Highly Vulnerable</h2>

                <p>
                    SIM swap fraud, also called SIM porting fraud or SIM card fraud, is a technique in which a
                    scammer obtains a new SIM card issued to your existing mobile number by impersonating you at
                    a telecom retailer or service centre. Once the new SIM is activated, your original SIM is
                    deactivated. All calls, SMS messages, and OTPs that should reach you now go to the scammer.
                </p>

                <p>
                    India's vulnerability to this attack is structural. SMS-based OTP is the dominant two-factor
                    authentication method for Indian banking and UPI, unlike more secure alternatives such as
                    app-based authenticators or hardware tokens. This means that gaining control of someone's
                    phone number is functionally equivalent to gaining access to their entire financial life:
                    bank accounts, UPI IDs, email accounts, and every app that sends OTPs via SMS.
                </p>

                <p>
                    India also has one of the world's largest databases of citizen personal information, much of
                    which has been exposed through data breaches over the past several years. The personal details
                    required to perform a SIM swap at a retailer (name, Aadhaar number, registered address) are
                    often available to scammers through data breach marketplaces at negligible cost. See our
                    guide on the{' '}
                    <Link href="/blog/aadhaar-data-breach-india">Aadhaar data breach and what it means for your security</Link>{' '}
                    for the full picture of how this personal data is being exploited.
                </p>

                <hr />

                {/* HOW IT WORKS */}
                <h2>How SIM Swap Fraud Works: Step by Step</h2>

                <div className="not-prose my-8 rounded-2xl overflow-hidden shadow-md">
                    <Image
                        src="/blog/sim-swap-fraud-india/sim-swap-how-it-works.webp"
                        alt="How SIM swap fraud works India  4 step process collect port signal loss drain"
                        width={1000}
                        height={562}
                        className="w-full object-cover"
                    />
                    <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-2 mb-0 italic px-4 pb-3">
                        The four stages of a SIM swap attack: data collection, fraudulent SIM port, signal loss, and bank drain.
                    </p>
                </div>

                <h3>Step 1: Gathering Your Personal Information</h3>

                <p>
                    Before any SIM swap attempt, the scammer needs enough personal information to convincingly
                    impersonate you at a telecom retailer. The minimum required is typically your full name,
                    your Aadhaar number, your registered address, and the last four digits of the SIM you want
                    to replace. This information is collected through several channels:
                </p>

                <ul>
                    <li>
                        <strong>Data breach databases.</strong> Large-scale breaches of Indian government
                        portals, e-commerce platforms, and financial institutions have exposed hundreds of
                        millions of records. Your full name, Aadhaar number, phone number, and address
                        may already be available in compiled breach files sold on dark web marketplaces.
                    </li>
                    <li>
                        <strong>Phishing calls posing as telecom customer care.</strong> A scammer calls
                        claiming to be from Jio, Airtel, or Vi, saying your SIM needs an upgrade for 5G
                        compatibility or your account requires KYC verification. You are asked to confirm
                        your Aadhaar number, address, and date of birth to "verify your identity."
                    </li>
                    <li>
                        <strong>Social media and public profiles.</strong> Address, date of birth, and
                        workplace details shared publicly on social media provide supplementary information
                        that fills gaps in breach data.
                    </li>
                </ul>

                <h3>Step 2: The Fraudulent SIM Request</h3>

                <p>
                    Armed with your personal details, the scammer visits a telecom retailer or franchise outlet
                    in a city far from your registered address, reducing the chance of any local verification.
                    They present falsified documents or the verbal information required to pass retailer identity
                    checks, and request a replacement SIM for your number citing a lost or damaged SIM.
                </p>

                <p>
                    Telecom retailer verification standards in India vary significantly. Urban flagship stores
                    apply more rigorous checks, while smaller franchise retailers in semi-urban areas may rely
                    primarily on verbal information matching. TRAI regulations require a 24-hour cooling period
                    and OTP confirmation for porting requests, but these protections can be bypassed when the
                    request is processed as a simple SIM replacement rather than a port.
                </p>

                <h3>Step 3: Your Phone Loses Signal</h3>

                <p>
                    The moment the fraudulent SIM is activated at the retailer, your original SIM is
                    automatically deactivated by the network. Your phone shows "No Service" or "Emergency
                    Calls Only" regardless of your location. This is the moment the fraud becomes active
                    and the critical window opens.
                </p>

                <p>
                    The signal loss often happens during the day when banks are open and transactions can
                    be processed. Scammers time the SIM swap to coincide with banking hours specifically
                    because UPI transactions and NEFT transfers require OTP confirmation that they can
                    now intercept immediately. The average time between signal loss and first fraudulent
                    transaction is under 15 minutes in documented cases.
                </p>

                <h3>Step 4: The OTP Harvest and Bank Drain</h3>

                <p>
                    With your number now active on their device, the scammer proceeds to log into your
                    banking apps and UPI services using credentials they have previously obtained through
                    phishing or credential stuffing. Every OTP required to confirm transactions, reset
                    passwords, or bypass security checks now arrives on their device instead of yours.
                </p>

                <p>
                    The scammer moves through your accounts systematically: UPI transfers, NEFT to external
                    accounts, and if email access is recovered, reset of further accounts. The average
                    SIM swap session in India lasts between 20 and 40 minutes before the victim manages
                    to report the signal loss. In that window, documented losses range from Rs 50,000 to
                    over Rs 30 lakh. For context on how{' '}
                    <Link href="/blog/upi-scam-india-2026">UPI fraud works alongside SIM swap techniques</Link>,
                    see our UPI scam guide.
                </p>

                <hr />

                {/* FEATURED SNIPPET: PHONE LOST SIGNAL */}
                <h2>Your Phone Just Lost Signal: Is It SIM Swap?</h2>

                <div className="not-prose my-8 rounded-2xl border-2 border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/40 p-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">
                        What to do if your phone suddenly loses all signal in India
                    </p>
                    <ol className="space-y-2.5 list-none">
                        {[
                            ['1', 'Call your telecom from another phone immediately'],
                            ['2', 'Jio: 198 | Airtel: 121 | BSNL: 1800-180-1503 | Vi: 199'],
                            ['3', 'Ask if a new SIM was issued for your number today'],
                            ['4', 'Call your bank and freeze all UPI and internet banking right now'],
                            ['5', 'Change your email password from a different device'],
                            ['6', 'Check bank statements for any transactions in the last 30 minutes'],
                            ['7', 'Call 1930 and file at cybercrime.gov.in immediately'],
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
                        Sudden unexplained signal loss is the primary warning sign of SIM swap fraud. Every minute counts.
                    </p>
                </div>

                <p>
                    Not every signal loss is SIM swap fraud. Towers go down, phones develop hardware faults, and
                    account suspensions can also cut service. The distinguishing factor is context: if you lose
                    signal suddenly in an area where you normally have strong coverage, you cannot restore it by
                    toggling airplane mode or restarting, and you begin receiving alerts on other devices about
                    unrecognised transactions, treat it as a SIM swap until your telecom operator confirms otherwise.
                </p>

                <hr />

                {/* HOW SCAMMERS GET INFORMATION */}
                <h2>How Scammers Get Your Personal Information for SIM Swap</h2>

                <p>
                    The data collection stage is often the longest part of a SIM swap operation, sometimes spanning
                    weeks or months before the actual port attempt. Understanding the collection methods helps you
                    identify and block them before your information is complete enough to be actionable.
                </p>

                <h3>The Telecom Impersonation Call</h3>

                <p>
                    The most common information collection method in India is a phone call from a number appearing
                    to belong to Jio, Airtel, or another operator. The caller says your SIM is being upgraded, your
                    KYC is expired, or your number will be deactivated in 24 hours unless you verify your details.
                    You are asked to confirm your Aadhaar number, your registered address, and sometimes the last
                    four digits of your current SIM. Providing any of these fills the scammer's profile for your number.
                </p>

                <p>
                    Legitimate telecom customer care never calls you to request Aadhaar number confirmation over
                    a cold call. If you receive such a call, hang up and call your operator back on the official
                    helpline number. Check any suspicious caller number at{' '}
                    <Link href="/phone-number-checker">rakshaai.co/phone-number-checker</Link> before sharing
                    any information.
                </p>

                <h3>Data Breaches and Phishing</h3>

                <p>
                    Aadhaar details, registered addresses, and mobile numbers linked to financial accounts are
                    available in several large breach datasets that have emerged from Indian government and
                    private sector incidents since 2022. A scammer who purchases or downloads one of these
                    datasets may already have the core information needed to attempt a SIM swap on thousands
                    of numbers simultaneously, testing those for which the retailer verification succeeds.
                </p>

                <p>
                    Phishing SMS messages designed to look like bank alerts or delivery notifications also
                    harvest the personal details that supplement breach data. See our guide on{' '}
                    <Link href="/blog/how-to-check-fake-website-india">how to identify fake websites and phishing links</Link>{' '}
                    to understand how this data collection pipeline operates.
                </p>

                <hr />

                {/* HOW TO PROTECT */}
                <h2>How to Protect Yourself from SIM Swap Fraud</h2>

                <div className="not-prose my-8 rounded-2xl overflow-hidden shadow-md">
                    <Image
                        src="/blog/sim-swap-fraud-india/sim-swap-prevention-shield.webp"
                        alt="How to prevent SIM swap fraud India  5 protection steps shield"
                        width={800}
                        height={1000}
                        className="w-full object-contain max-h-[700px]"
                    />
                    <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-2 mb-0 italic px-4 pb-3">
                        Five steps that significantly reduce your exposure to SIM swap fraud. Each one closes a different entry point.
                    </p>
                </div>

                <ol>
                    <li>
                        <strong>Set a SIM lock PIN with your telecom operator.</strong> Call your operator's
                        customer care and request a SIM lock or SIM change PIN. This PIN must be presented
                        at any retailer attempting to issue a replacement SIM for your number. A scammer
                        who does not know this PIN cannot complete the swap, regardless of what other
                        personal information they have. This is the single most effective protection
                        available to Indian mobile users. Jio customers can set this at Jio.com under
                        account settings. Airtel customers can request it via 121.
                    </li>
                    <li>
                        <strong>Enable SIM change OTP authentication.</strong> Jio and Airtel both offer
                        an additional security layer where any SIM change request triggers an OTP to
                        your existing SIM before the change is processed. Enable this through your
                        operator's app or by calling customer care. With this active, a scammer cannot
                        port your number without first having access to your current SIM  a circular
                        dependency that effectively blocks the attack.
                    </li>
                    <li>
                        <strong>Lock your Aadhaar biometrics.</strong> Visit{' '}
                        <a href="https://myaadhaar.uidai.gov.in" target="_blank" rel="noopener noreferrer">myaadhaar.uidai.gov.in</a>{' '}
                        and lock your biometric authentication. This prevents your Aadhaar from being
                        used for physical verification at retailers without your explicit unlock. Locking
                        biometrics does not affect your Aadhaar's use for digital verification via the
                        official app, but it closes the physical impersonation route that SIM swap
                        fraud depends on.
                    </li>
                    <li>
                        <strong>Use email-based 2FA for banking where possible, not SMS only.</strong> Where
                        your bank offers an authenticator app (Google Authenticator, Microsoft Authenticator)
                        or email-based OTP as an alternative to SMS, activate it. This means that even if
                        a SIM swap succeeds, the scammer cannot complete transactions that require a
                        non-SMS second factor. Check your bank's security settings to see what alternatives
                        are available.
                    </li>
                    <li>
                        <strong>Never share personal details with unverified telecom callers.</strong> Any
                        unsolicited call requesting your Aadhaar number, registered address, SIM serial
                        number, or OTP in the context of a SIM upgrade or KYC update is a data collection
                        call for a SIM swap attempt. Hang up and call your operator back on the official
                        number to verify whether any action is actually needed.
                    </li>
                </ol>

                <hr />

                {/* IF BEING SWAPPED NOW */}
                <h2>If You Are Being SIM Swapped Right Now: Act in 10 Minutes</h2>

                <div className="not-prose my-6 p-4 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800">
                    <p className="text-sm font-semibold text-red-800 dark:text-red-300 m-0">
                        The scammer has a window of roughly 15 to 40 minutes before you act. Every step below matters. Do not wait until you understand the full situation.
                    </p>
                </div>

                <div className="not-prose my-8 rounded-2xl overflow-hidden shadow-md">
                    <Image
                        src="/blog/sim-swap-fraud-india/sim-swap-emergency-steps.webp"
                        alt="What to do if SIM swap fraud India  10 minute emergency action plan"
                        width={800}
                        height={1000}
                        className="w-full object-contain max-h-[700px]"
                    />
                    <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-2 mb-0 italic px-4 pb-3">
                        Five actions to complete in 10 minutes. Every minute the scammer has your number active is a minute they can drain accounts.
                    </p>
                </div>

                <ol>
                    <li>
                        <strong>Call your telecom operator immediately from another phone.</strong> Borrow
                        a phone from anyone near you. Call the helpline for your operator:
                        Jio on 198, Airtel on 121, Vi on 199, or BSNL on 1800-180-1503. Tell them your
                        number has been SIM swapped without your authorisation and request immediate
                        deactivation of the fraudulent SIM. Request that your original SIM be reactivated
                        on priority. Operators have an emergency protocol for this and can act within
                        minutes of your call.
                    </li>
                    <li>
                        <strong>Call your bank and freeze everything.</strong> Use the bank's official
                        helpline (printed on the back of your debit card or in your passbook) to report
                        the fraud in real time. Ask them to freeze all UPI transactions, internet banking,
                        and outgoing transfers on your account immediately. If you have multiple bank
                        accounts linked to the same number, call each bank. Even a partial freeze
                        prevents further loss on those accounts.
                    </li>
                    <li>
                        <strong>Change your email password from a different device.</strong> Your email
                        is the master key to password resets across all your accounts. If the scammer
                        has your number, they can request password resets for your email via SMS OTP.
                        Getting into your email from a device that is not your primary phone (a laptop,
                        tablet, or borrowed device) and changing the password immediately closes this
                        route before they can use it.
                    </li>
                    <li>
                        <strong>Check your bank statements for unauthorised transactions.</strong> Log
                        into your net banking from a laptop or another phone on Wi-Fi. Note every
                        transaction that has occurred in the past 30 to 60 minutes. These records are
                        essential for your cybercrime complaint and bank dispute. Screenshot everything.
                    </li>
                    <li>
                        <strong>Call 1930 and file at cybercrime.gov.in.</strong> Call 1930 while the
                        fraud is in progress. The helpline can initiate real-time account freeze requests
                        across multiple banks simultaneously and escalate to the NPCI fraud team. File a
                        formal complaint at{' '}
                        <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer">cybercrime.gov.in</a>{' '}
                        with all transaction details as soon as you have them. For the full post-fraud
                        recovery guide, see our article on{' '}
                        <Link href="/blog/got-scammed-online-india-what-to-do">what to do immediately after being scammed online in India</Link>.
                    </li>
                </ol>

                <hr />

                {/* FAQ */}
                <h2>Frequently Asked Questions</h2>

                <h3>How do I know if I am a victim of SIM swap fraud in India?</h3>
                <p>
                    The main sign is your phone suddenly losing all signal while you are in an area where you
                    normally have coverage. You may also receive an SMS saying your SIM has been activated on
                    a new device, or find that your UPI or banking apps stop working because OTPs are now
                    going to the scammer's device.
                </p>

                <h3>How do scammers get personal information for SIM swap in India?</h3>
                <p>
                    They obtain your details from data breaches, phishing attacks, social media, or by posing as
                    telecom customer care over the phone. With your name, Aadhaar number, and registered address,
                    which are often available from data breaches, they can impersonate you at a telecom retailer.
                    See our guide on the{' '}
                    <Link href="/blog/aadhaar-data-breach-india">Aadhaar data breach</Link> for detail on
                    how this information is exposed and exploited.
                </p>

                <h3>Can I prevent SIM swap fraud in India?</h3>
                <p>
                    Yes. Set a SIM lock PIN with your telecom operator, enable additional OTP authentication for
                    SIM change requests (Jio and Airtel both offer this), and never share personal details on
                    unverified calls claiming to be from your telecom company. Locking your Aadhaar biometrics
                    at myaadhaar.uidai.gov.in adds further protection.
                </p>

                <h3>Which Indian telecom operators have SIM swap protection?</h3>
                <p>
                    All major operators including Jio, Airtel, BSNL, and Vi offer a waiting period and
                    verification for SIM change requests.{' '}
                    <a href="https://www.trai.gov.in" target="_blank" rel="noopener noreferrer">TRAI</a>{' '}
                    mandates a 24-hour cooling period and OTP verification for same-operator porting. Setting
                    a SIM PIN adds a second layer of protection beyond what the operator applies by default.
                </p>

                <h3>How much money can scammers steal in a SIM swap in India?</h3>
                <p>
                    All accounts linked to your mobile number are at risk: UPI, internet banking, email, and
                    any app that uses SMS OTP for authentication. Documented SIM swap cases in India show
                    losses ranging from Rs 50,000 to over Rs 30 lakh in a single incident, depending on the
                    balances accessible across linked accounts.
                </p>

                <hr />

                {/* FINAL THOUGHTS */}
                <h2>Final Thoughts</h2>

                <p>
                    SIM swap fraud is uniquely dangerous because it bypasses the security layer most Indians
                    rely on without any action from the victim. You do not need to click a link, share a
                    password, or respond to a suspicious message. The fraud happens at a telecom retailer
                    far from you, and your only warning is a phone that stops working.
                </p>

                <p>
                    The good news is that the attack has a specific and identifiable warning signal (sudden
                    unexplained signal loss) and a narrow time window that makes rapid response effective.
                    The five actions in this guide, completed within 10 minutes of signal loss, give you the
                    best possible chance of stopping the fraud mid-operation and beginning the recovery process.
                </p>

                <p>
                    Act on the prevention steps today, before signal loss ever happens. Setting a SIM lock PIN
                    with your operator takes less than 5 minutes on a customer care call and closes the primary
                    attack vector entirely. Share this article with your family, particularly older family members
                    who may not recognise the warning sign when their phone goes quiet.
                </p>

                {/* FINAL CTA */}
                <div className="not-prose my-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/60 p-8 text-center">
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">
                        Free Tool
                    </p>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                        Received a suspicious call from a telecom number?
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 max-w-sm mx-auto">
                        Check any phone number on RakshaAI before sharing your personal details. Free, no sign-up, results in under 5 seconds.
                    </p>
                    <Link
                        href="/phone-number-checker"
                        className="inline-flex items-center gap-2 px-7 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold text-sm rounded-full hover:bg-gray-700 dark:hover:bg-gray-100 transition-colors"
                    >
                        Check a Phone Number now &rarr;
                    </Link>
                    <p className="text-gray-400 dark:text-gray-500 text-xs mt-4">
                        100% free &middot; No sign-up required &middot; Save 1930 in your contacts
                    </p>
                </div>

            </BlogLayout>
        </>
    )
}
