import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import BlogLayout from '@/components/BlogLayout'
import SidebarCreditCardFraud from '@/components/blog/SidebarCreditCardFraud'
import { blogPostingSchema, breadcrumbListSchema, faqPageSchema, jsonLd, personSchema } from '@/lib/seo/schema'

const title = 'Credit Card Fraud India 2026: How Scammers Clone and Misuse Your Card'
const description = 'Credit card fraud India 2026 guide to ATM skimming, phishing, CNP fraud and card cloning, with warning signs, real cases and 60 second card lock steps.'
const url = 'https://rakshaai.co/blog/credit-card-fraud-india'
const image = '/blog/blog44/credit-card-fraud-india-hero.webp'
const publishedAt = '2026-08-07T00:00:00.000Z'

export const metadata: Metadata = {
    title: { absolute: 'Credit Card Fraud India 2026: How Scammers Clone Your Card | RakshaAI' },
    description,
    keywords: [
        'credit card fraud India 2026',
        'card skimming India 2026',
        'debit card fraud India',
        'ATM fraud India',
        'card cloning India',
        'CNP fraud India',
        'how to block card India',
        'card fraud chargeback India',
    ],
    authors: [
        { name: 'Rabinarayan Pradhan', url: 'https://rakshaai.co/author/rabinarayan-pradhan' },
        { name: 'RakshaAI Threat Intelligence Team', url: 'https://rakshaai.co' },
    ],
    alternates: { canonical: url },
    robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
    openGraph: {
        title: 'Credit Card Fraud India 2026: 6 Ways Cards Are Misused and How to Lock Yours',
        description: 'ATM skimming, phishing, CNP fraud, POS cloning, vishing and data theft. Learn the warning signs and lock your card in 60 seconds.',
        url,
        type: 'article',
        siteName: 'RakshaAI',
        publishedTime: publishedAt,
        modifiedTime: publishedAt,
        authors: ['RakshaAI Threat Intelligence Team', 'Rabinarayan Pradhan'],
        tags: ['Credit Card Fraud India', 'Card Skimming', 'CNP Fraud', 'August 2026'],
        images: [{
            url: image,
            width: 1200,
            height: 630,
            alt: 'Credit card fraud India 2026, card cloning skimming ATM fraud warning',
        }],
    },
    twitter: {
        card: 'summary_large_image',
        title: '6 Ways Scammers Misuse Indian Cards and How to Lock Yours Fast',
        description: 'ATM skimmers, fake payment pages and stolen card data. Learn the warning signs and the 60 second card lock steps.',
        images: [image],
    },
}

const faqs = [
    {
        question: 'What is card skimming and how common is it in India?',
        answer: 'Card skimming uses a hidden reader at an ATM, POS terminal, or compromised checkout page to copy card data. A camera, keypad overlay, or observation can capture the PIN. India does not publish a current national skimming-only total, so claims about exact prevalence should be treated carefully. Police cases show that physical skimming and related card-trap fraud remain active. Inspect the card slot, cover the keypad, and prefer monitored ATMs.',
    },
    {
        question: 'What is CNP fraud in India?',
        answer: 'Card Not Present or CNP fraud happens when card details are used online without the physical card. Criminals may obtain the number, expiry date and CVV through phishing, stolen customer data, malware, or an infected checkout page. RBI requires additional authentication for domestic online card transactions, subject to permitted exceptions, but international or recurring transactions can work differently. Disable online or international use when you do not need it.',
    },
    {
        question: 'How long does a credit card chargeback take in India?',
        answer: 'A card fraud chargeback in India does not have one universal 30 to 45 day RBI deadline. Card network and issuer dispute timelines vary. Under the RBI framework applicable on 7 August 2026, the bank must make the applicable shadow reversal within 10 working days after notification and determine liability within its board-approved period, not exceeding 90 days. If the issuer does not reply within 30 days, or its response is unsatisfactory, the customer can approach the RBI Ombudsman through CMS.',
    },
    {
        question: 'Should I use a credit or debit card for safer online shopping in India?',
        answer: 'A credit card can reduce the immediate impact on your bank balance and may offer useful issuer dispute processes, but it is not fraud-proof. A debit card takes money directly from the linked account. For either card, use a known merchant, verify the domain, prefer tokenisation, keep transaction limits low, and disable online or international use when it is not needed. Never save card details on an unverified website.',
    },
    {
        question: 'How can I check if my card details are on the dark web in India?',
        answer: 'There is no reliable public search that can prove a specific card number is absent from criminal markets. Never enter your full card number, PIN, CVV, or OTP into a breach-check website. Warning signs include unknown transactions, unexpected purchase OTPs, card verification charges, and overseas debits. Lock the card and contact the issuer if any sign appears. You can review exposure indicators linked to an email or phone, but that is not a card-number guarantee.',
    },
    {
        question: 'How to block card India: what is the fastest method?',
        answer: 'Open the official bank app and use Cards, then Block or Lock Card. You can also call the 24-hour number printed on the card or listed on the bank’s official website. RBI directions require issuers to offer multiple round-the-clock reporting channels and to block a lost card immediately after being informed. Save the complaint reference and dispute each unauthorized transaction separately.',
    },
]

const schemas = [
    blogPostingSchema({
        headline: title,
        description,
        url: '/blog/credit-card-fraud-india',
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
        section: 'Banking Fraud',
        keywords: ['credit card fraud India 2026', 'card skimming India 2026', 'debit card fraud India', 'ATM fraud India', 'CNP fraud India'],
        wordCount: 2200,
    }),
    faqPageSchema(faqs),
    breadcrumbListSchema([
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: 'Credit Card Fraud India', url: '/blog/credit-card-fraud-india' },
    ]),
]

function Source({ href, children }: { href: string; children: ReactNode }) {
    return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
}

export default function CreditCardFraudIndiaPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schemas) }} />
            <BlogLayout
                title={title}
                description={description}
                publishedAt={publishedAt}
                lastUpdated={publishedAt}
                readTime="16 min"
                author="Rabinarayan Pradhan"
                authorUrl="/author/rabinarayan-pradhan"
                primaryTool={{ label: 'Check a suspicious payment website', href: '/website-safety-checker' }}
                tags={['Credit Card Fraud India', 'Card Skimming', 'CNP Fraud', 'August 2026']}
                slug="credit-card-fraud-india"
                sidebar={<SidebarCreditCardFraud title={title} description={description} />}
            >
                <div className="not-prose mb-10 overflow-hidden rounded-2xl shadow-lg">
                    <Image
                        src={image}
                        alt="Credit card fraud India 2026, card cloning skimming ATM fraud warning"
                        width={1200}
                        height={630}
                        className="w-full object-cover"
                        priority
                    />
                </div>

                <p><strong>Credit card fraud India 2026</strong> can begin at a street ATM, a shop counter, a fake payment page, or a convincing call from someone who already knows your name and bank. The physical card may never leave your wallet. A stolen number, expiry date and CVV can be enough to attempt online purchases, while copied magnetic-stripe data and an observed PIN can support counterfeit-card misuse.</p>
                <p>The safest response is speed. If an unfamiliar debit or purchase OTP appears, lock the card in the official banking app before investigating. Then call the issuer through a verified number, dispute the transaction and preserve every alert. This guide explains how card and <strong>debit card fraud India</strong> schemes work, the cases behind the warning, and the exact controls to use.</p>

                <div className="not-prose my-8 rounded-2xl border border-red-200 bg-red-50 p-6 dark:border-red-900 dark:bg-red-950/30">
                    <p className="text-sm font-bold text-red-900 dark:text-red-100">Suspicious card transaction happening now?</p>
                    <p className="mt-2 text-sm leading-6 text-red-800 dark:text-red-200">Lock the card in the official bank app, call the number printed on the card, and call 1930 if money has moved. File at <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="font-bold underline">cybercrime.gov.in</a>. Never call a number pasted near an ATM or sent in the suspicious message.</p>
                </div>

                <h2 id="scale-of-card-fraud">The Scale of Card Fraud in India in 2026</h2>
                <p>The strongest current national measure is broader than card cloning alone. The <Source href="https://www.rbi.org.in/scripts/AnnualReportPublications.aspx?Id=1436">RBI Annual Report 2024 to 2025</Source> recorded 13,516 bank-reported fraud cases in the card/internet category involving ₹520 crore. Card and internet fraud made up 56.5 percent of reported fraud cases by number in that table.</p>
                <p>Those figures need context. RBI&apos;s table covers frauds of ₹1 lakh and above reported during the year. A case may have occurred earlier, the amount involved is not necessarily the final loss, and thousands of small consumer disputes are outside that table. It therefore shows the weight of digital-payment fraud inside bank reporting, not the total number of Indians who experienced card misuse.</p>
                <p>RBI has reduced some risk through EMV chip and PIN cards, additional authentication for domestic online payments, tokenisation, alerts for every card transaction, and customer controls for ATM, POS, online, international and contactless use. Fraudsters respond by targeting the person, merchant page or weaker part of the transaction chain.</p>

                <h2 id="six-card-fraud-methods">The 6 Methods Scammers Use to Steal Card Details in India</h2>

                <h3>Method 1: ATM Fraud India and Card Skimming India 2026</h3>
                <p><strong>Card skimming India 2026</strong> typically uses a reader placed over or inside an ATM card slot to copy magnetic-stripe data. A pinhole camera, false keypad or person watching nearby captures the PIN. Criminals can encode copied data onto another card and attempt withdrawals or POS transactions. EMV chips make simple cloning harder, but the physical setup remains a warning because terminals may still expose stripe data or criminals may combine skimming with card trapping and social engineering.</p>
                <p>For <strong>ATM fraud India</strong>, inspect the slot and keypad before use. If a part looks loose, bulky, mismatched or unusually fixed, stop. Cover the keypad fully with your free hand. Prefer a monitored ATM inside a bank branch. If the machine retains the card, stay at the kiosk and call the official bank number from its website or app, not a sticker beside the machine.</p>

                <div className="not-prose my-8 overflow-hidden rounded-2xl shadow-md">
                    <Image src="/blog/blog44/atm-safety-rules-india.webp" alt="ATM safety rules India, how to avoid card skimming at ATM" width={900} height={600} className="w-full" />
                </div>

                <h3>Method 2: Online Phishing and Fake Payment Pages</h3>
                <p>A phishing message says a bill failed, reward points will expire, KYC is incomplete, or a parcel needs a small fee. The link opens a cloned bank or merchant page that records the card number, expiry date, CVV and sometimes an OTP. A padlock only means the connection is encrypted. It does not prove the site belongs to the bank.</p>
                <p>Open the merchant or bank independently. Check the full hostname, not just its logo. For a new seller, follow the <Link href="/blog/how-to-check-fake-website-india">online shopping fake site checks</Link> and use the <Link href="/website-safety-checker">RakshaAI website safety checker</Link> before entering any payment information.</p>

                <h3>Method 3: Card Not Present or CNP Fraud India</h3>
                <p><strong>CNP fraud India</strong> means the physical card is not presented. The criminal attempts an online, telephone or recurring transaction using stolen credentials. Domestic online card payments generally require additional authentication, but overseas merchants and permitted recurring arrangements can behave differently. This is why an international charge can appear without the OTP pattern a cardholder expects.</p>
                <p>Disable international and online transactions when they are not required. Set a low online limit, enable every alert and review recurring merchants. If a ₹1 or other small verification charge appears, do not wait for a larger debit before acting.</p>

                <h3>Method 4: POS Terminal Skimming and Card Cloning in India</h3>
                <p>At a shop, restaurant or fuel station, a dishonest operator may take the card out of sight, swipe it through an extra reader or use a tampered terminal. In a wider <strong>card cloning India</strong> chain, stolen ATM data can also be encoded onto cards and monetised through POS machines controlled by the network.</p>
                <p>Keep the card in sight, ask for the terminal to be brought to you, check the amount on its screen and cover the PIN. Contactless or tokenised wallet payment reduces how often a merchant handles the physical card, but always verify the displayed amount before tapping.</p>

                <h3>Method 5: Vishing and Fake Bank Calls</h3>
                <p>A caller claims to raise the credit limit, reverse an annual fee, redeem points or stop a suspicious transaction. Stolen customer data makes the pitch specific. The caller then sends a link or asks for the card number, CVV, PIN or OTP. A genuine bank employee does not need your PIN, CVV or transaction OTP over a call.</p>
                <p>End the call. Open the official app or dial the number printed on the card yourself. Caller ID can be spoofed, and knowing your bank or last four digits is not proof of authority.</p>

                <h3>Method 6: Data Breach or Compromised Merchant Checkout</h3>
                <p>Card data can be exposed when a merchant, processor or checkout page is compromised. CERT-In describes online skimming in which attackers inject JavaScript sniffers into e-commerce sites or third-party software to collect card and billing data. RBI&apos;s card-on-file tokenisation rules reduce stored-card exposure by replacing actual card data with a merchant-specific token.</p>
                <p>Prefer tokenisation at a trusted merchant, do not save a card on an unknown site, and remove saved tokens for services you no longer use. A breach can also expose names and contact details that make the next phishing call more persuasive, even when full card data was not stolen.</p>

                <div className="not-prose my-8 overflow-hidden rounded-2xl shadow-md">
                    <Image src="/blog/blog44/six-card-fraud-methods-india.webp" alt="6 credit card fraud methods India 2026, skimming phishing CNP POS vishing breach" width={900} height={600} className="w-full" />
                </div>

                <h2 id="warning-signs">Debit Card Fraud India: Warning Signs Your Card Has Been Compromised</h2>
                <ul>
                    <li>A purchase, cash withdrawal or small card-verification debit you do not recognize.</li>
                    <li>OTPs or authentication prompts for payments you did not start.</li>
                    <li>International or online charges while those features should be unused.</li>
                    <li>Several declined attempts followed by a successful transaction.</li>
                    <li>A bank alert that your card controls, phone number or transaction limit changed.</li>
                    <li>A merchant you used reports a breach, or your saved card suddenly stops working.</li>
                    <li>Your card is missing, retained by an ATM, or returned after being out of sight.</li>
                </ul>
                <p>Do not dismiss a tiny charge. Criminals sometimes test whether credentials work before attempting more. Lock first, then verify with the issuer.</p>

                <h2 id="how-to-lock-card">How to Block Card India Guide: Secure It in 60 Seconds</h2>
                <p><strong>How to lock your credit or debit card immediately in India:</strong></p>
                <ol>
                    <li>Open your bank&apos;s official app, choose Cards, then Block or Lock Card. This often takes under 60 seconds.</li>
                    <li>Call your bank&apos;s 24-hour fraud helpline. Use the number on the back of your card or on the bank&apos;s official website.</li>
                    <li>For a specific transaction dispute, use the app or call the issuer and ask for a dispute or chargeback reference.</li>
                    <li>Enable SMS, email and app alerts for every amount in the bank app settings.</li>
                    <li>Switch off international usage if you do not need it and turn it on only for the required period.</li>
                    <li>Use the app&apos;s online, POS, ATM and contactless controls to disable unused channels and set low limits.</li>
                    <li>Never enter a full card number into a breach checker. If compromise is possible, ask the issuer to replace the card.</li>
                </ol>
                <p>Most issuers support immediate customer-initiated blocking. RBI&apos;s card directions require multiple 24-hour reporting channels and say a lost card must be blocked immediately after the issuer is informed. Blocking the card should come before a long support conversation.</p>

                <div className="not-prose my-8 overflow-hidden rounded-2xl shadow-md">
                    <Image src="/blog/blog44/lock-card-india-60-seconds.webp" alt="How to lock credit debit card India in 60 seconds using bank app steps" width={900} height={600} className="w-full" />
                </div>

                <div className="not-prose my-8 rounded-2xl border border-amber-200 bg-amber-50 p-6 text-sm leading-6 text-amber-950 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-100">
                    <p className="font-bold">RBI liability rule, stated accurately</p>
                    <p className="mt-2">Reporting within three working days gives zero customer liability for a third-party breach when the deficiency lies neither with the bank nor the customer. Bank negligence also creates zero liability regardless of reporting time. If the customer shared payment credentials, the customer can bear loss until the bank is notified. Report immediately and let the evidence determine the category.</p>
                </div>

                <h2 id="real-card-fraud-cases">Real Card Fraud Cases Reported in India</h2>
                <ul>
                    <li><strong>Karnataka ATM skimming conviction:</strong> <Source href="https://indianexpress.com/article/cities/bangalore/karnataka-police-african-atm-skimming-cybercrime-9759875/">The Indian Express reported in January 2025</Source> that a 2020 Tumakuru skimming burst produced 63 complaints and about ₹30 lakh in withdrawals over two days. Police said a pinhole camera and skimmer captured data and PINs. Two accused were convicted in December 2024 and sentenced to eight years.</li>
                    <li><strong>Delhi ATM card trap and fake helpline:</strong> <Source href="https://indianexpress.com/article/cities/delhi/delhi-police-sub-inspector-atm-fraud-glue-trap-scam-mastermind-arrested-10627800/">The Indian Express reported in April 2026</Source> that police arrested an alleged mastermind after a card was trapped with adhesive and a fake kiosk helpline directed the victim to re-enter his PIN and leave. Police linked the group to at least 50 attempts and said at least 22 people had been defrauded between 2018 and 2025.</li>
                    <li><strong>Gurugram credit-limit phishing:</strong> <Source href="https://www.hindustantimes.com/cities/gurugram-news/five-arrested-for-running-fake-call-centre-targeting-credit-card-users-101780769730427.html">Hindustan Times reported in June 2026</Source> that police arrested five people over an alleged fake call centre. A complainant reported losing about ₹28,000 after a caller sent a credit-limit link. Investigators said stolen customer data supported calls and captured details were used for online purchases.</li>
                    <li><strong>Surat POS route for cloned cards:</strong> <Source href="https://timesofindia.indiatimes.com/city/surat/3-held-for-providing-pos-machines-to-debit-card-cloners/articleshow/130450683.cms">The Times of India reported in April 2026</Source> that Surat cybercrime police arrested three people accused of supplying POS machines to gangs using cloned debit cards. Police said more than ₹11 lakh reached three linked accounts. These are police allegations, not findings of guilt.</li>
                </ul>
                <p>These incidents show different stages of the same economy: capture the card or credentials, obtain authentication, create or use a payment route, then move the proceeds. They should not be added together as a national total.</p>

                <h2 id="fraudulent-card-use">What to Do If Your Card Has Been Used Fraudulently</h2>
                <ol>
                    <li><strong>Lock or block the card:</strong> use the issuer&apos;s official app or verified helpline. Ask whether the linked account needs a debit freeze too.</li>
                    <li><strong>Report every transaction:</strong> raise the dispute with the issuer and save the complaint and <strong>card fraud chargeback India</strong> reference. Do not assume blocking automatically disputes earlier charges.</li>
                    <li><strong>Call 1930 immediately:</strong> give the bank complaint number, amount, time, merchant and transaction reference. Complete the complaint at <Source href="https://cybercrime.gov.in">cybercrime.gov.in</Source>.</li>
                    <li><strong>Preserve evidence:</strong> keep alerts, statements, OTP messages, emails, the phishing URL, call logs, screenshots, ATM location, receipts and the physical card. Do not publish full card details.</li>
                    <li><strong>Replace exposed credentials:</strong> request a new card and PIN. Change the banking and primary email passwords from a clean device if phishing or malware may be involved.</li>
                    <li><strong>Escalate in writing:</strong> use the issuer&apos;s grievance and nodal officer route. If it does not reply within 30 days, rejects the complaint or gives an unsatisfactory resolution, file through <Source href="https://cms.rbi.org.in">RBI CMS</Source>.</li>
                </ol>
                <p>Follow the detailed <Link href="/blog/recover-money-online-fraud-india">recover money guide</Link> and the related <Link href="/blog/bank-account-fraud-india">bank account fraud response</Link>. Fast reporting can help, but no website or bank can promise recovery.</p>

                <h2 id="instagram-reel-script">30 Second Instagram Reel Script</h2>
                <div className="not-prose my-8 rounded-2xl border border-red-200 bg-red-50 p-6 text-sm text-gray-800 dark:border-red-900 dark:bg-red-950/30 dark:text-gray-100">
                    <p className="mb-3 font-bold">0 to 4 seconds: Hook</p>
                    <p className="mb-4">Visual: close shot of a card entering an ATM. Voice: &quot;Your card can be in your wallet and still be misused.&quot;</p>
                    <p className="mb-3 font-bold">4 to 13 seconds: Six methods</p>
                    <p className="mb-4">Visual: show the six-method grid. Voice: &quot;ATM skimming, fake payment pages, CNP fraud, POS cloning, fake bank calls and stolen merchant data all target your card.&quot;</p>
                    <p className="mb-3 font-bold">13 to 23 seconds: Warning and action</p>
                    <p className="mb-4">Visual: show an unknown transaction alert, then the lock guide. Voice: &quot;Unknown charge or OTP? Open the official bank app, tap Cards, then Lock. Switch off online and international use too.&quot;</p>
                    <p className="mb-3 font-bold">23 to 30 seconds: Emergency CTA</p>
                    <p>&quot;Money taken? Call the number on your card and 1930 now. Save this reel and share it with every card user.&quot;</p>
                    <p className="mt-5 text-xs text-gray-500 dark:text-gray-400">On-screen text: LOCK CARD | CALL BANK | CALL 1930 | SAVE EVIDENCE</p>
                </div>

                <h2 id="frequently-asked-questions">Frequently Asked Questions</h2>
                {faqs.map((faq) => (
                    <div key={faq.question} className="not-prose my-5 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                        <h3 className="text-base font-bold text-gray-900 dark:text-white">{faq.question}</h3>
                        <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">{faq.answer}</p>
                    </div>
                ))}

                <h2 id="sources-and-credits">Sources and Credits</h2>
                <ul>
                    <li><Source href="https://www.rbi.org.in/scripts/AnnualReportPublications.aspx?Id=1436">Reserve Bank of India Annual Report 2024 to 2025</Source>: bank fraud totals, card/internet figures, scope and reporting limitations.</li>
                    <li><Source href="https://www.rbi.org.in/commonman/Upload/English/Notification/PDFs/NOTI1506072017.PDF">RBI customer protection circular dated 6 July 2017</Source>: customer liability, shadow reversal and complaint-resolution framework applicable on 7 August 2026.</li>
                    <li><Source href="https://systemhealth.rbi.org.in/Scripts/BS_ViewMasDirections.aspx_id%3D12300.html">RBI Credit Card and Debit Card Issuance and Conduct Directions</Source>: 24-hour reporting channels and immediate blocking requirements.</li>
                    <li><Source href="https://systemhealth.rbi.org.in/Scripts/PublicationsView.aspx_id%3D20315%281%29.html">RBI Journey in the Second Decade of the Millennium</Source>: EMV, AFA, card alerts, tokenisation and transaction controls.</li>
                    <li><Source href="https://www.rbi.org.in/scripts/BS_CircularIndexDisplay.aspx?Id=12159">RBI card-on-file tokenisation circular</Source>: restrictions on storage of actual card data and merchant-specific tokens.</li>
                    <li><Source href="https://www.cert-in.org.in/s2cMainServlet?VLCODE=CIAD-2019-0026&pageid=PUBVLNOTES02">CERT-In online skimming advisory</Source>: JavaScript sniffers and compromised merchant checkout pages.</li>
                    <li><Source href="https://indianexpress.com/article/cities/bangalore/karnataka-police-african-atm-skimming-cybercrime-9759875/">The Indian Express, 4 January 2025</Source>: Tumakuru ATM-skimming investigation and conviction.</li>
                    <li><Source href="https://indianexpress.com/article/cities/delhi/delhi-police-sub-inspector-atm-fraud-glue-trap-scam-mastermind-arrested-10627800/">The Indian Express, 9 April 2026</Source>: Delhi card-trap and fake-helpline case.</li>
                    <li><Source href="https://www.hindustantimes.com/cities/gurugram-news/five-arrested-for-running-fake-call-centre-targeting-credit-card-users-101780769730427.html">Hindustan Times, 7 June 2026</Source>: Gurugram credit-limit phishing call-centre case.</li>
                    <li><Source href="https://timesofindia.indiatimes.com/city/surat/3-held-for-providing-pos-machines-to-debit-card-cloners/articleshow/130450683.cms">The Times of India, 23 April 2026</Source>: Surat POS machines allegedly supplied for cloned-card use.</li>
                </ul>

                <div className="not-prose mt-10 rounded-2xl bg-gradient-to-r from-red-700 to-slate-950 p-7 text-white">
                    <p className="text-xl font-bold">Do not enter card details on a page you have not verified</p>
                    <p className="mt-2 text-sm text-red-100">Check an unfamiliar payment or shopping website before entering any personal or financial information.</p>
                    <Link href="/website-safety-checker" className="mt-5 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-bold text-red-700 hover:bg-red-50">Open the website safety checker</Link>
                </div>
            </BlogLayout>
        </>
    )
}
