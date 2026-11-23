import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import BlogLayout from '@/components/BlogLayout'
import SidebarStudentCyberSafety from '@/components/blog/SidebarStudentCyberSafety'
import { blogPostingSchema, breadcrumbListSchema, faqPageSchema, jsonLd, personSchema } from '@/lib/seo/schema'

const title = 'Cyber Safety for Students India: Scams Targeting College Students in 2026'
const description = 'Cyber safety for students India 2026 guide to fake internships, Telegram task fraud, PG advance scams, sextortion, scholarship traps, placement fraud, and crypto scams.'
const url = 'https://rakshaai.co/blog/cyber-safety-students-india'
const image = '/blog/blog39/cyber-safety-students-hero.webp'
const publishedAt = '2026-07-31T00:00:00.000Z'

export const metadata: Metadata = {
    title: { absolute: 'Cyber Safety for Students India 2026: Scams Targeting College Students | RakshaAI' },
    description,
    keywords: [
        'cyber safety for students India 2026',
        'student scam India 2026',
        'fake internship scam India',
        'college student fraud India',
        'hostel advance scam India',
        'part time job scam student India',
        'online scam awareness India students',
        'digital safety tips student India',
    ],
    authors: [
        { name: 'Rabinarayan Pradhan', url: 'https://rakshaai.co/author/rabinarayan-pradhan' },
        { name: 'RakshaAI Threat Intelligence Team', url: 'https://rakshaai.co' },
    ],
    alternates: { canonical: url },
    robots: {
        index: true,
        follow: true,
        'max-snippet': -1,
        'max-image-preview': 'large',
        googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
    },
    openGraph: {
        title: 'Cyber Safety for Students India: 7 Scams Targeting College Students in 2026',
        description: 'Fake internships, Telegram task scams, hostel advance fraud, and sextortion. Learn the seven student scams and eight rules that stop them.',
        url,
        type: 'article',
        siteName: 'RakshaAI',
        locale: 'en_IN',
        publishedTime: publishedAt,
        modifiedTime: publishedAt,
        authors: ['RakshaAI Threat Intelligence Team', 'Rabinarayan Pradhan'],
        tags: ['Student Cyber Safety', 'Fake Internship Scam', 'Telegram Task Scam', 'July 2026'],
        images: [{
            url: image,
            width: 1200,
            height: 630,
            alt: 'Cyber safety for students India 2026, scams targeting college students',
        }],
    },
    twitter: {
        card: 'summary_large_image',
        title: '7 Scams Targeting Indian College Students in 2026',
        description: 'Fake internships, task fraud, hostel advance scams, and sextortion. Share these eight safety rules before semester starts.',
        images: [image],
    },
}

const faqs = [
    {
        question: 'What are the most common scams targeting college students in India?',
        answer: 'The most common scams targeting Indian students in 2026 include fake internship offer letters with security deposits, Telegram part-time task fraud, hostel or PG advance payment scams, sextortion through fake social profiles, fake scholarship or education loan messages, placement agency fee fraud, and crypto investment groups.',
    },
    {
        question: 'Is it safe for students to do online part-time jobs in India?',
        answer: 'Legitimate part-time work exists, but a job should not require a deposit, recharge, investment, or payment to unlock tasks or withdraw earnings. Apply through an independently verified employer or established platform. An unsolicited WhatsApp or Telegram offer that moves into prepaid tasks is a common task scam pattern.',
    },
    {
        question: 'What should a student do if they are being sextorted in India?',
        answer: 'Stop contact and do not pay. Save the username, profile URL, threats, payment details, and screenshots without forwarding intimate material. Tell a trusted adult, parent, college counsellor, or friend. Report at cybercrime.gov.in and call 1930 immediately if money was transferred. If the pressure feels unbearable, call Tele MANAS on 14416 for free mental health support.',
    },
    {
        question: 'How do I verify a campus placement agency is legitimate in India?',
        answer: 'Ask your college placement cell to confirm the agency and role in writing. Independently call the employer through the number on its official website and verify the recruiter email domain. Treat registration, interview, training, laptop, documentation, or placement fees as a serious warning. Do not rely on an offer letter or WhatsApp profile alone.',
    },
    {
        question: 'What digital safety tips should a student in India follow for financial apps?',
        answer: 'Use the official app from your bank or a known UPI provider, keep the phone updated, enable device lock and two-factor authentication, and never share an OTP or UPI PIN. Review account alerts and transaction limits. Check a suspicious number, website, or UPI ID at RakshaAI, and save 1930 for urgent financial cyber fraud reporting.',
    },
]

const schemas = [
    blogPostingSchema({
        headline: title,
        description,
        url: '/blog/cyber-safety-students-india',
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
        section: 'Scam Awareness',
        keywords: [
            'cyber safety for students India 2026',
            'fake internship scam India',
            'student scam India 2026',
            'college student fraud India',
        ],
        wordCount: 2570,
    }),
    faqPageSchema(faqs),
    breadcrumbListSchema([
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: 'Cyber Safety for Students India', url: '/blog/cyber-safety-students-india' },
    ]),
]

const Source = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
)

export default function CyberSafetyStudentsIndiaPage() {
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
                primaryTool={{ label: 'Check a suspicious student scam caller', href: '/phone-number-checker' }}
                tags={['Student Cyber Safety', 'College Scam India', 'Fake Internship', 'July 2026']}
                slug="cyber-safety-students-india"
                sidebar={<SidebarStudentCyberSafety title={title} description={description} />}
            >
                <div className="not-prose mb-10 overflow-hidden rounded-2xl shadow-lg">
                    <Image
                        src={image}
                        alt="Cyber safety for students India 2026, scams targeting college students"
                        width={1200}
                        height={630}
                        className="w-full object-cover"
                        priority
                    />
                    <p className="px-4 pb-3 pt-2 text-center text-xs italic text-gray-500 dark:text-gray-400">
                        A polished offer letter and a famous company logo do not prove that an internship is genuine. Verify through the company&apos;s independently found contact details before paying or sharing documents.
                    </p>
                </div>

                <p><strong>Cyber safety for students India 2026</strong> begins with one uncomfortable fact: a scam can look exactly like an opportunity. The message may promise an internship, flexible income, an affordable PG room, a scholarship, a placement interview, a new relationship, or an investment recommended by a classmate. It usually arrives when a student is already under pressure to decide quickly.</p>
                <p>India&apos;s Ministry of Education reported <strong>4.50 crore students enrolled in higher education in 2023 to 2024</strong> when it released the latest AISHE reports on 8 July 2026. That enormous, connected population is attractive to criminals who can reuse one fake offer across college WhatsApp groups, job portals, social platforms, and Telegram channels.</p>
                <p>This guide explains the seven student scams most likely to cause harm in 2026, the real cases behind the warnings, and eight rules that help students and parents stop the pressure before money or private information moves.</p>

                <h2 id="why-students-vulnerable">Why Students Are Among India&apos;s Most Vulnerable Fraud Targets</h2>
                <p>Students are not targeted because they are careless. They are targeted because ordinary college life creates valuable pressure points. A fresher may need a room before orientation. A final-year student may fear missing a placement. A family may be waiting for a scholarship. A student living away from home may avoid telling parents about a mistake because the money came from fees or savings.</p>
                <p>Scammers convert those pressures into urgency. They impose a two-hour payment deadline, claim only one hostel bed remains, promise an unusually high stipend, or threaten to send private material to a college group. The requested first payment may seem small enough to hide. Once it is made, the demand grows.</p>
                <p>The <Source href="https://ciet.ncert.gov.in/activity/hmce?lang=en">CIET and NCERT cyber fraud programme published in June 2026</Source> specifically identifies fraudulent scholarships, fake recruitment messages, social-media impersonation, phishing disguised as official communication, and payment scams as threats affecting educational communities. This is a trust problem, not an intelligence test. Effective <strong>college student fraud India</strong> prevention therefore adds an independent verification step before emotion controls the decision.</p>

                <h2 id="seven-student-scams">The 7 Scams Most Likely to Target Indian Students in 2026</h2>
                <p>A <strong>student scam India 2026</strong> campaign usually combines a familiar identity, a time limit, and an irreversible payment. The seven forms below differ in appearance, but each tries to isolate the student from the company, college, parent, or friend who could expose the lie.</p>

                <h3>Scam 1: Fake Internship Offer Letters</h3>
                <p>A <strong>fake internship scam India</strong> message copies a known company&apos;s logo, employee name, office address, and offer-letter format. The recruiter may conduct a short chat interview and then ask for a refundable security deposit, laptop charge, training fee, ID fee, or background-verification payment. The deadline creates fear that asking questions will cost the opportunity.</p>
                <p>Call the company through the number on its independently found official website and ask HR to verify the role, recruiter, and offer ID. Check whether the sender uses the company&apos;s real email domain. Internshala&apos;s applicant safety guidance says employers on its platform may not charge applicants a security deposit, application fee, laptop fee, test fee, or documentation fee for a job or internship. A separately advertised paid course is not the same thing as employer-paid work, so read the purpose and terms carefully.</p>

                <h3>Scam 2: Part-Time Job or Task Fraud on Telegram</h3>
                <p>A <strong>part time job scam student India</strong> message offers easy money for liking videos, rating hotels, reviewing products, filling CAPTCHAs, or completing merchant tasks. The operator may pay ₹100 or ₹300 at first. That payment is bait. The student is moved to Telegram, shown a fake earnings dashboard, and told to deposit money for a premium task. Each failed withdrawal leads to another demand for tax, recharge, account correction, or unlocking.</p>
                <p>The <Source href="https://cybercrime.gov.in/Webform/theme/resources/advisories/ADVISORY%20TAU-ADV-004_Captcha%20Filling%20Fraud_08.04.2025.pdf">I4C advisory on fake CAPTCHA-filling jobs</Source> identifies upfront fees, unrealistic earnings, denied withdrawals, and referral pressure as red flags. Read RakshaAI&apos;s full <Link href="/blog/telegram-task-scam-india">Telegram task scam guide</Link>. Work pays you. A job that requires your money to release earnings has changed into a financial trap.</p>

                <h3>Scam 3: Hostel and PG Advance Payment Fraud</h3>
                <p>A <strong>hostel advance scam India</strong> listing steals photos from a real room or invents a property near campus. The supposed owner says several students are waiting and asks for booking rent, key charges, an ID-card fee, or advance mess payment. The address may lead to a residential building, unrelated business, or even a police station.</p>
                <p>Visit the exact room in person or ask a trusted local person to do so. Meet the owner or authorised manager, verify the address and written terms, and confirm that the payment name matches the person or entity in the agreement. Do not accept a video call as proof because the caller can show a different property. RakshaAI&apos;s <Link href="/blog/fake-rental-scam-india">fake rental scam guide</Link> provides a full property and payment checklist.</p>

                <h3>Scam 4: Sextortion Through Fake Dating Profiles</h3>
                <p>A fake Instagram, dating-app, or WhatsApp profile builds intimacy and pushes for a private video call. The call is recorded or manipulated. Minutes later, the scammer displays screenshots of friends, relatives, or college contacts and demands money to stop distribution. Paying does not buy deletion. It proves that fear can produce another payment.</p>
                <p>Stop contact, do not pay, save the threats and account identifiers, and tell someone you trust. Do not forward intimate content as evidence. Preserve the message context and let the platform or police advise how material should be submitted. Report at cybercrime.gov.in. RakshaAI&apos;s <Link href="/blog/sextortion-scam-india">sextortion scam guide</Link> explains the response without blaming the victim.</p>

                <h3>Scam 5: Education Loan and Scholarship Scam</h3>
                <p>A caller claims that a scholarship has been approved or an education loan can be released without normal checks. The catch is a processing payment, OTP, card detail, screen-sharing session, or link that imitates a government portal. Another version claims an existing scholarship will be cancelled unless KYC is completed immediately.</p>
                <p>Open the National Scholarship Portal or lender&apos;s official website yourself. Contact the college scholarship desk or bank through a known channel. Scholarship money does not need your OTP to be credited. A real lender may disclose legitimate processing costs in official documents, so the warning sign is an unofficial payment or credential request made through an unsolicited caller, personal UPI ID, or chat link.</p>

                <h3>Scam 6: Fake Campus Placement Agency Fraud</h3>
                <p>A fake placement agency claims to have a college partnership or guaranteed access to a large employer. It may run a test or interview, issue a formal appointment letter, and then request registration, training, uniform, medical, document, or placement fees. A logo, test, office room, or offer letter can all be staged.</p>
                <p>Ask the official college placement cell to verify the agency and opening in writing. Then contact the employer independently and confirm the role. Legitimate recruitment agencies normally earn from the hiring company, not by guaranteeing a job to the candidate. A genuine paid training provider must describe itself as training, not disguise the fee as the key to a guaranteed placement.</p>

                <h3>Scam 7: Peer Pressure Investment or Crypto Scam</h3>
                <p>A classmate, senior, social-media contact, or compromised friend account adds students to a crypto or stock group. The dashboard shows rapid profit, group members celebrate withdrawals, and the promoter urges everyone to join before a special window closes. Early withdrawals may be allowed to manufacture confidence. Later, the site blocks the balance and demands tax or an additional deposit.</p>
                <p>Do not transfer money because a friend appears to be participating. Confirm the recommendation with that person outside the group because their account may be compromised. Search the platform independently, verify any securities intermediary through SEBI resources, and never install a trading app from a chat link. Guaranteed return language is incompatible with real market risk.</p>

                <div className="not-prose my-8 overflow-hidden rounded-2xl shadow-md">
                    <Image
                        src="/blog/blog39/seven-student-scams.webp"
                        alt="7 scams targeting college students India 2026, internship task hostel sextortion"
                        width={1000}
                        height={563}
                        className="w-full"
                    />
                    <p className="px-4 pb-3 pt-2 text-center text-xs text-gray-500 dark:text-gray-400">
                        Seven different stories lead to the same demand: trust an unverified identity and send money before you have time to check.
                    </p>
                </div>

                <h2 id="real-student-cases">Real Student Scam Cases Reported in India</h2>
                <p>These reports show that the warnings are based on real events, not hypothetical scripts. Police allegations and active investigations remain allegations unless proved in court.</p>
                <ul>
                    <li><strong>Pune internship deposit case, June 2026:</strong> <Source href="https://indianexpress.com/article/cities/pune/pune-it-firm-scam-colleges-had-a-role-in-internship-scam-10723848/">The Indian Express reported on 4 June 2026</Source> that the CEO of ThynkTech India had been arrested on cheating charges after the company shut down. The report said interns were allegedly charged ₹15,000 as a laptop security deposit and at least 700 people lost work. An employee forum alleged that college placement routes were involved, an allegation that requires investigation.</li>
                    <li><strong>Online task pressure and a student death, Mumbai:</strong> <Source href="https://www.freepressjournal.in/amp/mumbai/mumbai-crime-27-year-old-man-held-in-teen-suicide-case-triggered-by-online-task-fraud">The Free Press Journal reported on 18 March 2026</Source> that police arrested a suspect in a case linked to a first-year student who had lost ₹49,000 in an online task fraud. The reported loss occurred in 2024. The case is included because fear and secrecy after a scam can become a safety emergency, not to assign blame to the student.</li>
                    <li><strong>PG rooms that did not exist, Pune:</strong> <Source href="https://timesofindia.indiatimes.com/city/pune/pg-facility-fraud-targets-students-moving-to-city/articleshow/101441764.cms">The Times of India reported in July 2023</Source> that Pune cyber police had received eight complaints about bogus PG listings aimed at students and parents. One family allegedly paid ₹14,000 before finding a residential building. Another was reportedly directed to the cyber police station itself.</li>
                    <li><strong>College student sextortion, Coimbatore:</strong> <Source href="https://timesofindia.indiatimes.com/city/coimbatore/sextortion-gang-cheats-college-student-of-20000-in-coimbatore/amp_articleshow/130502890.cms">The Times of India reported on 25 April 2026</Source> that city cybercrime police received a complaint from a 20-year-old student who allegedly paid ₹20,000 after an Instagram contact recorded a compromising WhatsApp video call and threatened him.</li>
                    <li><strong>Scholarship impersonation warning, Tamil Nadu:</strong> <Source href="https://timesofindia.indiatimes.com/city/chennai/cops-warn-parents-students-about-scholarship-fraud/amp_articleshow/131101985.cms">The Times of India reported on 15 May 2026</Source> that police warned students and parents about callers posing as officials. The callers allegedly claimed a special scholarship was ready, then asked for bank details, OTPs, or card information to process it.</li>
                    <li><strong>Crypto loss reported by a 20-year-old student, Ahmedabad:</strong> <Source href="https://timesofindia.indiatimes.com/city/ahmedabad/bitcoin-investment-scam-drains-11l-from-student/amp_articleshow/132567061.cms">The Times of India reported on 23 July 2026</Source> that a student from Gota allegedly lost ₹11 lakh after an advertisement redirected him to WhatsApp and a person posing as an investment adviser.</li>
                </ul>
                <p>Across these cases, the first contact changed but the control methods repeated: urgency, an official-looking identity, a small initial commitment, movement into private chat, and pressure to hide the situation. Those repetitions are the warning system students can learn to recognise.</p>

                <h2 id="eight-safety-rules">8 Digital Safety Rules Every Indian Student Must Follow</h2>
                <p><strong>How can Indian college students stay safe from online scams?</strong> For effective <strong>online scam awareness India students</strong> should save and share the following checklist:</p>
                <p><strong>8 cyber safety rules every Indian college student must follow:</strong></p>
                <ol>
                    <li>Verify any internship offer by calling the company&apos;s official HR directly</li>
                    <li>Never pay a security deposit or registration fee for any job or internship</li>
                    <li>For PG or hostel: always visit in person before any advance transfer</li>
                    <li>If anyone threatens you online: stop all contact, do NOT pay, tell a trusted adult</li>
                    <li>Check any unknown number at rakshaai.co before calling back</li>
                    <li>Never share your OTP with anyone, including &quot;bank officials&quot; or &quot;internship coordinators&quot;</li>
                    <li>Enable two-factor authentication on email and all social accounts</li>
                    <li>If you lose money: call 1930 immediately and tell your parents; shame protects the scammer not you</li>
                </ol>
                <p>These rules are decision brakes. They create time, bring in a second person, and move verification away from the channel controlled by the scammer. A fraudster can copy a logo or pressure a student. They cannot control a call you place independently to the real company, college, bank, or property manager.</p>

                <div className="not-prose my-8 overflow-hidden rounded-2xl shadow-md">
                    <Image
                        src="/blog/blog39/eight-student-safety-rules.webp"
                        alt="8 cyber safety rules for Indian college students, digital safety guide"
                        width={1000}
                        height={563}
                        className="w-full"
                    />
                    <p className="px-4 pb-3 pt-2 text-center text-xs text-gray-500 dark:text-gray-400">
                        Save this rules card and share it in a college, hostel, class, placement, or family WhatsApp group.
                    </p>
                </div>

                <h2 id="tell-someone">If You Are Being Scammed and Are Afraid to Tell Anyone</h2>
                <p>You did not do anything wrong by trusting an offer, a person, or a message. Fraud is designed to manufacture shame because shame keeps the victim isolated. Telling one safe person changes the situation from a secret controlled by the scammer into a problem that can be documented and reported.</p>
                <p>Do not borrow money to make one final payment. Do not negotiate alone. Stop contact, save evidence, call your bank and 1930 if money moved, and tell a parent, sibling, trusted friend, faculty mentor, warden, or college counsellor today. If intimate material is involved, do not forward it to prove what happened. Save the account and threat details and seek official guidance.</p>
                <p>If you feel unable to cope or fear that you may harm yourself, call <strong>Tele MANAS on 14416</strong>. The Government of India service provides free, round-the-clock mental health support. A financial mistake can be addressed. Your safety comes first.</p>

                <div className="not-prose my-8 overflow-hidden rounded-2xl shadow-md">
                    <Image
                        src="/blog/blog39/tell-someone-support-card.webp"
                        alt="Advice for students scammed India, it is not your shame, tell someone and call 1930"
                        width={1000}
                        height={563}
                        className="w-full"
                    />
                    <p className="px-4 pb-3 pt-2 text-center text-xs text-gray-500 dark:text-gray-400">
                        The scammer&apos;s power weakens when the secrecy ends. Tell someone you trust and use official reporting channels.
                    </p>
                </div>

                <h2 id="frequently-asked-questions">Frequently Asked Questions</h2>
                {faqs.map((faq) => (
                    <div key={faq.question}>
                        <h3>{faq.question}</h3>
                        <p>{faq.answer}</p>
                    </div>
                ))}

                <h2 id="instagram-reel-script">30 Second Instagram Reel Script</h2>
                <div className="not-prose my-8 rounded-2xl border border-indigo-200 bg-indigo-50 p-6 text-sm text-gray-800 dark:border-indigo-900 dark:bg-indigo-950/30 dark:text-gray-100">
                    <p className="mb-3 font-bold">0 to 3 seconds: hook</p>
                    <p className="mb-4">&quot;College students, that dream internship or cheap PG room could be a scam. Watch these seven traps before you pay.&quot;</p>
                    <p className="mb-3 font-bold">3 to 13 seconds: rapid scam list</p>
                    <p className="mb-4">&quot;Fake internship deposits. Telegram task jobs. Hostel advances. Sextortion. Scholarship calls. Placement fees. And crypto groups pushed by someone who looks like a friend.&quot;</p>
                    <p className="mb-3 font-bold">13 to 23 seconds: three safety rules</p>
                    <p className="mb-4">&quot;Call company HR from the official website. Visit every room before paying. And if anyone threatens you, stop, do not pay, and tell someone you trust.&quot;</p>
                    <p className="mb-3 font-bold">23 to 30 seconds: action and CTA</p>
                    <p>&quot;Check suspicious numbers at RakshaAI. Lost money? Call 1930 now. Save this reel and share it in your college group before semester starts.&quot;</p>
                    <p className="mt-5 text-xs text-gray-500 dark:text-gray-400">On-screen text: NEVER PAY TO GET A JOB | VISIT BEFORE PG ADVANCE | DO NOT PAY SEXTORTION | CALL 1930</p>
                </div>

                <h2 id="sources">Sources, Credits, and Research Methodology</h2>
                <ul>
                    <li><Source href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2282525&lang=2&reg=48">Ministry of Education and PIB, 8 July 2026</Source>: official release for the AISHE 2022 to 2023 and 2023 to 2024 reports, including higher-education enrolment reaching 4.50 crore.</li>
                    <li><Source href="https://ciet.ncert.gov.in/activity/hmce?lang=en">CIET and NCERT, Human Manipulation in Cyber Fraud</Source>: official education-sector context for fake scholarships, recruitment messages, impersonation, phishing, and payment fraud.</li>
                    <li><Source href="https://cybercrime.gov.in/Webform/theme/resources/advisories/ADVISORY%20TAU-ADV-004_Captcha%20Filling%20Fraud_08.04.2025.pdf">I4C advisory TAU/ADV/004</Source>: official description of fake online jobs, upfront fees, denied withdrawals, data collection, and reporting through 1930 and cybercrime.gov.in.</li>
                    <li><Source href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2244504&lang=1&reg=3">Ministry of Home Affairs and PIB, 2026 cybercrime response update</Source>: official source for the 1930 reporting route and more than ₹8,690 crore saved across more than 24.65 lakh financial cyber-fraud complaints by 31 January 2026. Saved funds are not the same as money finally recovered.</li>
                    <li><Source href="https://internshala.com/safety_tips">Internshala applicant safety guidance</Source>: platform rules and red flags for employer requests involving security, registration, training, laptop, test, and documentation fees.</li>
                    <li><Source href="https://www.dghs.mohfw.gov.in/national-mental-health-programme.php">Directorate General of Health Services, National Mental Health Programme</Source>: official source for 24-hour Tele MANAS access through 14416.</li>
                    <li>Individual cases are credited in the real-cases section to The Indian Express, The Times of India, and The Free Press Journal. Amounts and events are attributed to the police, complainants, organisations, or publications identified in each report.</li>
                </ul>
                <p>Research was checked against sources available on 31 July 2026. RakshaAI separates official national statistics, platform safety rules, police allegations, victim reports, and final findings. The four supplied PNG images, originally between 1.25 MB and 1.96 MB, were converted to WebP for this article. The files used on the page are between 32 KB and 60 KB.</p>

                <div className="not-prose my-10 rounded-2xl bg-gradient-to-br from-indigo-700 to-slate-950 p-7 text-white shadow-lg">
                    <h2 className="mb-3 text-2xl font-extrabold text-white">Check the contact before you trust the offer</h2>
                    <p className="mb-5 text-sm leading-relaxed text-indigo-50">Search a suspicious recruiter, task sender, landlord, placement agent, or scholarship caller before you call back, share documents, or transfer money.</p>
                    <Link href="/phone-number-checker" className="inline-flex rounded-xl bg-white px-5 py-3 text-sm font-bold text-indigo-700">Open Phone Number Checker</Link>
                </div>
            </BlogLayout>
        </>
    )
}
