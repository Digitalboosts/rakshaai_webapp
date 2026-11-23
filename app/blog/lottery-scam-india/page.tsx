import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import BlogLayout from '@/components/BlogLayout'
import SidebarLotteryScam from '@/components/blog/SidebarLotteryScam'
import { blogPostingSchema, breadcrumbListSchema, faqPageSchema, jsonLd, personSchema } from '@/lib/seo/schema'

const title = 'Lottery Scam India: You Have NOT Won ₹25 Lakh. Here Is the Proof'
const description = 'Lottery scam India 2026 warning: fake KBC WhatsApp prizes use processing fees to steal money. Learn the proof, checks, real cases, and recovery steps.'
const url = 'https://rakshaai.co/blog/lottery-scam-india'
const image = '/blog/blog32/lottery-scam-india-hero.webp'
const publishedAt = '2026-07-21T00:00:00.000Z'

export const metadata: Metadata = {
    title: { absolute: 'Lottery Scam India 2026: You Have Not Won ₹25 Lakh | RakshaAI' },
    description,
    keywords: ['lottery scam India 2026', 'KBC lottery scam India', 'fake prize message India', 'WhatsApp lottery scam India', 'processing fee scam India', 'lottery fraud India 2026', 'how to identify fake lottery India'],
    authors: [{ name: 'Rabinarayan Pradhan', url: 'https://rakshaai.co/author/rabinarayan-pradhan' }],
    alternates: { canonical: url },
    robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
    openGraph: {
        title: 'You Have Won ₹25 Lakh in the KBC Lucky Draw. You Have Not.',
        description: 'KBC does not issue lotteries. You cannot win a draw you never entered. Share this warning with every WhatsApp group you are in.',
        url,
        type: 'article',
        siteName: 'RakshaAI',
        publishedTime: publishedAt,
        modifiedTime: publishedAt,
        tags: ['Lottery Scam', 'KBC Fraud', 'WhatsApp Scam', 'Cybercrime India'],
        images: [{ url: image, width: 1200, height: 675, alt: 'Lottery scam India 2026, fake KBC prize WhatsApp message fraud warning' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'KBC Lucky Draw Winner Message: Fake Every Time',
        description: 'KBC does not issue lotteries. Learn the one rule that exposes fake prize messages before you pay.',
        images: [image],
    },
}

const faqs = [
    { question: 'Does KBC run a WhatsApp lottery in India?', answer: 'No. Sony\'s official KBC terms state that KBC does not issue lotteries. KBC may use official registration methods connected to the show, including methods announced on Sony LIV, but a random WhatsApp lucky draw message is not a KBC prize. Anyone demanding money to claim one is defrauding you.' },
    { question: 'Is it true that I won a lottery I do not remember entering?', answer: 'No. You cannot win a legitimate draw you never entered. An unexpected message claiming that your mobile number was randomly selected is the false foundation of an advance fee scam.' },
    { question: 'Why do lottery scams ask for a processing fee or tax payment?', answer: 'The advance payment is the theft. The prize does not exist. After one payment, scammers invent GST, customs, insurance, account activation, or release charges. Delhi Police says genuine prize deductions are taken from the prize amount, not collected in advance.' },
    { question: 'Can I report a lottery scam WhatsApp message in India?', answer: 'Yes. Report and block the sender in WhatsApp. If you paid, call 1930 immediately, contact your bank, and file at cybercrime.gov.in with screenshots, transaction IDs, beneficiary details, and phone numbers. You can also report the number on RakshaAI to warn others.' },
    { question: 'Are online shopping site lottery promotions real in India?', answer: 'Some genuine promotions exist, but verify them inside the official app or website you open yourself. Do not use the message link. India Post has also warned that fake survey and quiz links may promise prizes while trying to collect personal or financial information.' },
    { question: 'How can I identify a fake lottery in India?', answer: 'Ask whether you entered, whether the claim appears on the organizer\'s official site, and whether any advance fee is demanded. Unknown numbers, secrecy, urgency, copied logos, payment to personal accounts, and requests for OTPs or identity documents are strong scam signals.' },
]

const schemas = [
    blogPostingSchema({
        headline: title,
        description,
        url: '/blog/lottery-scam-india',
        image,
        datePublished: publishedAt,
        dateModified: publishedAt,
        author: personSchema({ name: 'Rabinarayan Pradhan', jobTitle: 'Cybersecurity Writer', url: '/author/rabinarayan-pradhan', image: '/authors/rabinarayan-pradhan.jpeg', sameAs: ['https://www.linkedin.com/in/rabinarayan-pradhan-14ab9422b/'] }),
        section: 'Scam Alerts',
        keywords: ['lottery scam India 2026', 'KBC lottery scam India', 'fake prize message India', 'processing fee scam India'],
        wordCount: 1700,
    }),
    faqPageSchema(faqs),
    breadcrumbListSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Lottery Scam India', url: '/blog/lottery-scam-india' }]),
]

const Source = ({ href, children }: { href: string; children: React.ReactNode }) => <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>

export default function LotteryScamIndiaPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schemas) }} />
            <BlogLayout title={title} description={description} publishedAt={publishedAt} lastUpdated={publishedAt} readTime="11 min" author="Rabinarayan Pradhan" authorUrl="/author/rabinarayan-pradhan" primaryTool={{ label: 'Check the prize sender', href: '/phone-number-checker' }} tags={['Lottery Scam', 'KBC Fraud', 'WhatsApp Scam', 'July 2026']} slug="lottery-scam-india" sidebar={<SidebarLotteryScam title={title} />}>
                <div className="not-prose mb-10 overflow-hidden rounded-2xl shadow-lg">
                    <Image src={image} alt="Lottery scam India 2026, fake KBC prize WhatsApp message fraud warning" width={1200} height={675} className="w-full object-cover" priority />
                    <p className="px-4 pb-3 pt-2 text-center text-xs italic text-gray-500 dark:text-gray-400">A copied logo and a large prize amount do not make an unexpected WhatsApp message genuine.</p>
                </div>

                <p><strong>Lottery scam India 2026</strong> messages often begin with one exciting lie: your phone number has won ₹25 lakh in a KBC lucky draw. If you received a <strong>you have won prize India scam</strong> message, pause before replying. You did not win a lottery you never entered, and Sony&apos;s own KBC terms say KBC does not issue lotteries.</p>
                <p>The fake prize is bait for an advance fee fraud. A supposed manager asks for a small processing charge, then GST, customs, insurance, or account activation money. Every payment leads to another demand. There is no cheque, courier, or prize fund waiting at the end.</p>

                <h2 id="why-lottery-scams-survive">Why Lottery Scams Never Die in India</h2>
                <p>The story is simple, emotional, and cheap to distribute. Criminals copy a familiar brand, send thousands of messages, and need only a few recipients to respond. A voice note, fake certificate, winner number, and profile photo can make the sender look official. Urgency stops the target from asking family members for a second opinion.</p>
                <p>The script also changes easily. KBC becomes a telecom lucky draw, an online shopping reward, a social media giveaway, or a foreign parcel. The brand changes, but the transaction does not: first the victim is promised far more money than they expected, then they must pay before receiving it.</p>
                <p>Scammers deliberately choose a believable first request. A ₹1,500 fee can feel tiny beside a promised ₹25 lakh, so the victim judges the payment against the imaginary prize instead of asking why money must be sent at all. Fake countdowns, claims that a winner code will expire, and warnings not to tell anyone create pressure. A second person may pose as a bank manager, tax officer, courier employee, or police officer to make the story appear independently confirmed.</p>
                <p>Personal information makes the approach more convincing. Knowing a recipient&apos;s name, city, shopping order, or mobile provider does not prove access to a prize system. Such details can come from public profiles, marketing lists, leaked databases, old forms, or an earlier scam conversation. The safest response is not to test the caller by revealing more information. End the conversation and verify through a channel you found independently.</p>
                <p>People of every age and income level can be caught when surprise, hope, authority, and time pressure arrive together. Victim blaming helps criminals because it makes people hide what happened. If a family member paid, focus on fast reporting and evidence collection. The national 1930 system exists because speed matters in financial cyber fraud.</p>

                <h2 id="lottery-scam-variants">The 5 Lottery Scam Variants Active in India in 2026</h2>
                <h3>The KBC Lucky Draw WhatsApp Scam</h3>
                <p>The <strong>KBC lottery scam India</strong> version claims that KBC and sometimes Reliance Jio selected your mobile number for ₹25 lakh. Delhi Police says many examples arrive from unknown numbers, including numbers beginning with Pakistan&apos;s +92 code. The criminal moves the conversation to a supposed lottery officer and demands advance payments. Read the broader guide to <Link href="/blog/whatsapp-scam-india">WhatsApp scams in India</Link>.</p>

                <h3>The SMS You Have Won Prize Notification</h3>
                <p>This <strong>fake prize message India</strong> may name a bank, mobile company, government scheme, or international lottery. A shortened link opens a form that collects your name, PAN, Aadhaar, bank details, card information, or OTP. A prize does not require your UPI PIN or banking password.</p>

                <h3>The Facebook or Instagram Prize Giveaway Scam</h3>
                <p>A copied creator account announces that you won a giveaway, then requests a delivery charge or sends a sign-in link. Other posts promise a reward for sharing, commenting, or completing a survey. Check the exact username, account history, and the organizer&apos;s verified page.</p>

                <h3>The Fake Online Shopping Lottery</h3>
                <p>The caller may know your name, address, or a recent order from leaked or misused data. They claim that your purchase won a car, cash, or appliance. Sign in to the shopping platform by opening its official app yourself. Never use the message link. If it opens an unfamiliar domain, follow RakshaAI&apos;s guide to <Link href="/blog/how-to-check-fake-website-india">checking a fake website</Link>.</p>

                <h3>The Courier Scam: Your Prize Is Stuck at Customs</h3>
                <p>A supposed foreign prize or gift is said to be waiting at an airport. The victim must pay customs duty, anti-money laundering clearance, or a courier charge. Genuine customs processes do not begin with a random WhatsApp agent asking for transfers to changing personal accounts.</p>

                <div className="not-prose my-8 overflow-hidden rounded-2xl shadow-md">
                    <Image src="/blog/blog32/lottery-scam-types.webp" alt="5 types of lottery scam India 2026, KBC WhatsApp SMS Facebook and customs fraud" width={800} height={450} className="w-full" />
                </div>

                <h2 id="one-fact">The One Fact That Exposes Every Lottery Scam</h2>
                <p><strong>How to identify a fake lottery or prize message in India:</strong></p>
                <ol>
                    <li>You cannot win a lottery you never entered. This is the fundamental rule.</li>
                    <li>Real organizers do not demand an advance fee to release a prize.</li>
                    <li>Unknown WhatsApp or SMS numbers are not proof of a real organizer.</li>
                    <li>KBC does not issue lotteries, according to Sony&apos;s official KBC terms.</li>
                    <li>Any processing fee, customs clearance, or tax payment before prize delivery is a scam signal.</li>
                    <li>Real promotions can be verified on the organizer&apos;s official website or app.</li>
                    <li>Check the sender&apos;s number on <Link href="/phone-number-checker">RakshaAI</Link> before responding.</li>
                </ol>
                <p><strong>If you have to transfer money to receive an unexpected prize, stop. You have not won anything.</strong></p>

                <div className="not-prose my-8 overflow-hidden rounded-2xl shadow-md">
                    <Image src="/blog/blog32/lottery-scam-one-rule.webp" alt="The one rule about lottery scams India, you cannot win without entering" width={800} height={450} className="w-full" />
                </div>

                <h2 id="processing-fee-trap">How the Processing Fee Trap Works</h2>
                <p>A <strong>processing fee scam India</strong> campaign starts with an amount that feels affordable compared with the promised prize. After ₹1,500 is paid, a fake document appears and another department requests ₹3,200. Then comes an ₹8,000 tax clearance and a ₹15,000 final verification. The victim has now paid ₹27,700 and feels pressure to continue rather than accept the earlier loss.</p>
                <p>Delhi Police describes the same escalation: after processing fees and GST, scammers keep inventing reasons for more deposits and may even increase the claimed prize from ₹25 lakh to ₹45 lakh or ₹75 lakh. This is the sunk cost trap. Previous payments are not proof that the next payment will unlock anything.</p>

                <div className="not-prose my-8 overflow-hidden rounded-2xl shadow-md">
                    <Image src="/blog/blog32/lottery-processing-fee-trap.webp" alt="How processing fee lottery scam works India, escalating fees with no prize" width={800} height={439} className="w-full" />
                </div>

                <h2 id="verify-a-prize">How to Verify If a Prize or Lottery Is Real in India</h2>
                <ol>
                    <li>Confirm that you entered the exact draw and retained a ticket, registration, or official account record.</li>
                    <li>Open the organizer&apos;s official app or type its website address yourself. Do not tap the notification link.</li>
                    <li>Use a customer care number published on that official website, not the number inside the message.</li>
                    <li>Search the promotion name plus words such as fraud, scam, terms, and winners.</li>
                    <li>Ask for written terms and verify the legal entity. A logo, certificate, or caller ID can be forged.</li>
                    <li>Refuse advance fees, secrecy, remote access apps, OTP requests, and payments to personal accounts.</li>
                    <li>For KBC, compare the claim with the <Source href="https://www.sonyliv.com/shows/kaun-banega-crorepati-1700000195">official Sony LIV KBC page</Source>. Sony&apos;s published KBC terms explicitly say it does not issue lotteries.</li>
                </ol>
                <p>Important nuance: KBC can announce legitimate show registration methods, and current official material may mention WhatsApp registration. That does not make a random <strong>WhatsApp lottery scam India</strong> message genuine. Registration for the show and an unsolicited lucky draw claim are different things.</p>

                <h3>What a Genuine Prize Process Should Let You Do</h3>
                <p>A real promotion should have terms published before winners are selected. Those terms should identify the organizer, eligibility, entry dates, selection method, prize, tax treatment, and contact route. You should be able to find the same information without using the winner message. The organizer should not object when you call its publicly listed customer care number or ask for time to verify.</p>
                <p>Be especially careful when payment instructions change. Transfers to a personal UPI ID, unrelated business, newly supplied bank account, crypto wallet, gift card, or cash deposit are not normal prize verification. Requests to install a remote access app or share an OTP turn a prize story into an account takeover risk. Stop before the scam expands from an advance fee into theft from your bank account.</p>

                <h2 id="already-paid">What To Do If You Already Paid a Processing Fee</h2>
                <ol>
                    <li>Stop all further payments. Do not pay a recovery agent claiming to retrieve the prize or fee.</li>
                    <li>Call <strong>1930 immediately</strong> and contact your bank or payment app&apos;s fraud team. Fast reporting can improve the chance of funds being held.</li>
                    <li>File at <Source href="https://cybercrime.gov.in">cybercrime.gov.in</Source> and keep the acknowledgement number.</li>
                    <li>Save screenshots, voice notes, phone numbers, links, fake certificates, bank accounts, UPI IDs, receipts, and transaction IDs.</li>
                    <li>Report and block the WhatsApp, SMS, or social account, but preserve evidence first.</li>
                    <li>If you shared passwords, card data, an OTP, or screen access, secure the affected accounts and devices immediately.</li>
                    <li>Follow RakshaAI&apos;s complete <Link href="/blog/got-scammed-online-india-what-to-do">online scam recovery checklist</Link>.</li>
                </ol>

                <h2 id="real-cases">Real Lottery Scam Cases in India and Source Credits</h2>
                <p>These are reported complaints and police accounts. They show how a small first fee can grow into a major loss. Allegations may still be under investigation.</p>
                <ul>
                    <li><Source href="https://www.indiatoday.in/india/story/kbc-lottery-scam-pakistan-link-surat-cyber-cell-arrests-two-assam-men-2919718-2026-05-30">India Today, 30 May 2026</Source>: Surat Cyber Crime Police said a resident lost ₹13.51 lakh in a fake KBC lottery case. Investigators arrested two men in Assam and alleged that the operation had a Pakistan link. Demands reportedly included processing fees, GST, RBI reserve fund fees, insurance, account activation, and release charges.</li>
                    <li><Source href="https://www.hindustantimes.com/cities/bengaluru-news/bengaluru-woman-falls-for-kerala-lottery-trap-loses-rs-11-8-lakh-to-scammers-posing-as-cops-101755744875008.html">Hindustan Times, 21 August 2025</Source>: a Bengaluru homemaker reportedly lost ₹11.8 lakh after an initial ₹19,190 processing demand in a Kerala lottery story. The criminals later impersonated police officers to pressure her.</li>
                    <li><Source href="https://indianexpress.com/article/cities/mumbai/mumbai-kaun-banega-crorepati-cyber-fraud-7638319/">The Indian Express, 27 November 2021</Source>: Mumbai Police recorded a complaint from a homemaker allegedly cheated of ₹3.85 lakh after a fake ₹55 lakh KBC win. The gang demanded cheque processing, currency conversion, and other fees.</li>
                    <li><Source href="https://indianexpress.com/article/cities/mumbai/ratnagiri-kbc-lottery-fraud-two-women-duped-of-over-rs-5-lakh-7063095/">The Indian Express, 27 November 2020</Source>: two Ratnagiri women were reportedly cheated of more than ₹5 lakh through KBC messages, voice notes, and a person posing as an SBI manager.</li>
                    <li><Source href="https://cyber.delhipolice.gov.in/KBClottery.html">Delhi Police Cyber Crime Unit</Source>: its dedicated KBC lottery warning documents the ₹25 lakh message, repeated advance fees, secrecy requests, and escalating fake prize amounts.</li>
                    <li><Source href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=1820040">India Post through PIB, 26 April 2022</Source>: the department warned that fake social media, email, and SMS links were promising prizes through surveys and quizzes and requested people not to share personal information.</li>
                </ul>

                <h2 id="frequently-asked-questions">Frequently Asked Questions</h2>
                {faqs.map((faq) => <div key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></div>)}

                <div className="not-prose my-10 rounded-2xl bg-gradient-to-br from-red-700 to-slate-950 p-7 text-white shadow-lg">
                    <h2 className="mb-3 text-2xl font-extrabold text-white">Check the sender before you reply</h2>
                    <p className="mb-5 text-sm leading-relaxed text-red-50">Search the phone number for community reports, then share this warning with family groups. If you already paid, call 1930 now.</p>
                    <Link href="/phone-number-checker" className="inline-flex rounded-xl bg-white px-5 py-3 text-sm font-bold text-red-700">Check a phone number</Link>
                </div>
            </BlogLayout>
        </>
    )
}
