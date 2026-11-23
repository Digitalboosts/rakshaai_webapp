import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import BlogLayout from '@/components/BlogLayout'
import SidebarDeepfakeCelebrityScam from '@/components/blog/SidebarDeepfakeCelebrityScam'
import { blogPostingSchema, breadcrumbListSchema, faqPageSchema, jsonLd, personSchema } from '@/lib/seo/schema'

const title = 'Deepfake Celebrity Scam India: Ambani, Tata, and Kohli Never Said That'
const description = 'Deepfake celebrity scam India 2026 warning: fake videos of Ambani, Tata, Modi, and Kohli promote investment fraud. Learn seven detection checks.'
const url = 'https://rakshaai.co/blog/deepfake-celebrity-scam-india'
const image = '/blog/blog31/deepfake-celebrity-scam-hero.jpg'
const publishedAt = '2026-07-20T00:00:00.000Z'

export const metadata: Metadata = {
    title: { absolute: 'Deepfake Celebrity Scam India 2026: Ambani and Tata Never Said That | RakshaAI' },
    description,
    keywords: ['deepfake celebrity scam India 2026', 'fake Ambani investment video India', 'AI deepfake investment scam India', 'fake celebrity endorsement India', 'how to detect deepfake video India', 'fake Modi investment scheme India', 'deepfake fraud India 2026', 'celebrity investment scam India'],
    authors: [{ name: 'Rabinarayan Pradhan', url: 'https://rakshaai.co/author/rabinarayan-pradhan' }],
    alternates: { canonical: url },
    robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
    openGraph: {
        title: 'Ambani and Tata Never Said That. That Investment Video Is a Deepfake.',
        description: 'AI deepfakes of famous Indians are promoting fake investment platforms. Use seven checks to expose one in 60 seconds.',
        url,
        type: 'article',
        siteName: 'RakshaAI',
        publishedTime: publishedAt,
        modifiedTime: publishedAt,
        tags: ['Deepfake Scam', 'Investment Fraud', 'AI Scams', 'Cybercrime India'],
        images: [{ url: image, width: 1200, height: 675, alt: 'Deepfake celebrity investment scam India 2026, AI fake video fraud warning' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'That Ambani, Tata, or Kohli Investment Video Is a Deepfake',
        description: 'AI deepfakes promoting trading platforms are everywhere. Check these seven warning signs before anyone invests.',
        images: [image],
    },
}

const faqs = [
    { question: 'Are there real investment schemes endorsed by Ambani or Tata?', answer: 'The viral social media ads discussed in this guide are not genuine endorsements. Fact checkers have traced examples to altered source videos and AI generated audio. Never treat a celebrity face as proof. Confirm any claim through the person or company\'s verified accounts, SEBI records, and established news sources.' },
    { question: 'How do deepfake investment scams work in India?', answer: 'Scammers alter real footage or generate synthetic audio, distribute the result through social media ads, and direct viewers to a fake trading site or messaging group. The platform displays invented profits, encourages more deposits, and blocks withdrawals or demands extra fees.' },
    { question: 'How can I tell if an investment video is a deepfake in India?', answer: 'Check for unnatural lip movement, odd blinking, blurred face or hair edges, inconsistent lighting, and voice sync problems. Then search the claimed announcement on verified accounts, reverse search key frames, and check established fact checking sites. Visual clues can help, but independent verification is stronger than appearance alone.' },
    { question: 'Where can I report a deepfake investment video in India?', answer: 'Report the ad to the social platform. Report cybercrime at cybercrime.gov.in. If money was transferred, call 1930 immediately and contact your bank fraud team. Preserve the ad URL, profile, website, chats, phone numbers, transaction IDs, and screenshots.' },
    { question: 'How much have Indians lost to deepfake investment scams?', answer: 'India does not publish a separate authoritative national loss total only for deepfake investment scams. Ministry of Home Affairs data reported by ThePrint put all cyber fraud losses in 2025 at ₹22,495 crore, with more than 75 percent attributed to investment scams. Individual police reported deepfake cases include losses of ₹3.75 crore in Bengaluru and ₹1 crore in Pune.' },
]

const schemas = [
    blogPostingSchema({
        headline: title,
        description,
        url: '/blog/deepfake-celebrity-scam-india',
        image,
        datePublished: publishedAt,
        dateModified: publishedAt,
        author: personSchema({ name: 'Rabinarayan Pradhan', jobTitle: 'Cybersecurity Writer', url: '/author/rabinarayan-pradhan', image: '/authors/rabinarayan-pradhan.jpeg', sameAs: ['https://www.linkedin.com/in/rabinarayan-pradhan-14ab9422b/'] }),
        section: 'AI Scams',
        keywords: ['deepfake celebrity scam India 2026', 'fake Ambani investment video India', 'AI deepfake investment scam India', 'how to detect deepfake video India'],
        wordCount: 1800,
    }),
    faqPageSchema(faqs),
    breadcrumbListSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Deepfake Celebrity Scam India', url: '/blog/deepfake-celebrity-scam-india' }]),
]

const Source = ({ href, children }: { href: string; children: React.ReactNode }) => <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>

export default function DeepfakeCelebrityScamIndiaPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schemas) }} />
            <BlogLayout title={title} description={description} publishedAt={publishedAt} lastUpdated={publishedAt} readTime="12 min" author="Rabinarayan Pradhan" authorUrl="/author/rabinarayan-pradhan" primaryTool={{ label: 'Check the investment website', href: '/website-safety-checker' }} tags={['Deepfake Scam', 'Investment Fraud', 'AI Scams', 'July 2026']} slug="deepfake-celebrity-scam-india" sidebar={<SidebarDeepfakeCelebrityScam title={title} />}>
                <div className="not-prose mb-10 overflow-hidden rounded-2xl shadow-lg">
                    <Image src={image} alt="Deepfake celebrity investment scam India 2026, AI fake video fraud warning" width={1200} height={675} className="w-full object-cover" priority />
                    <p className="px-4 pb-3 pt-2 text-center text-xs italic text-gray-500 dark:text-gray-400">A famous face inside a sponsored video is not proof of a real endorsement.</p>
                </div>

                <p><strong>Deepfake celebrity scam India 2026</strong> ads can make Mukesh Ambani, Ratan Tata, Narendra Modi, Virat Kohli, or another trusted public figure appear to recommend a trading app. The <strong>AI deepfake investment scam India</strong> playbook uses altered video and cloned audio to borrow that trust. The viewer is then pushed to a fake platform where every profit is only a number on a screen.</p>
                <p>This is not hypothetical. Police reported that a Bengaluru retiree lost ₹3.75 crore after seeing a deepfake video of Sadhguru, while an Army veteran in Pune lost ₹1 crore after fake videos featuring Prime Minister Modi and Finance Minister Nirmala Sitharaman led him toward a forex scheme. A realistic face does not make an investment real.</p>

                <h2 id="what-is-a-deepfake">What Is a Deepfake and Why India Is a Major Target?</h2>
                <p>A deepfake is synthetic or manipulated media that makes a person appear to say or do something they did not. Criminals can start with a genuine interview, replace the audio with an AI voice clone, and alter mouth movement to match. Some campaigns also combine real news footage, fabricated captions, copied logos, and fake presenter audio.</p>
                <p>India offers scammers a huge mobile audience, fast digital payments, strong public trust in well known figures, and inexpensive multilingual AI tools. One fake can be redubbed into Hindi and regional languages, promoted as a paid ad, and forwarded through family WhatsApp groups. Better generation tools also mean that old advice such as checking blinking is no longer enough by itself.</p>
                <p>The scale of the surrounding crime is severe. Ministry of Home Affairs data reported by <Source href="https://theprint.in/india/cybercrime-saw-24-spike-in-2025-indians-lost-rs-22495-crore-mainly-in-investment-scams/2859930/">ThePrint in February 2026</Source> recorded ₹22,495 crore in cyber fraud losses during 2025, with more than 75 percent linked to investment scams. That total is not a deepfake-only figure, but it shows why a convincing synthetic endorsement is so valuable to criminals.</p>

                <h2 id="how-it-works">How Deepfake Celebrity Investment Scams Work</h2>
                <h3>Stage 1: Creating the Fake Video</h3>
                <p>Scammers take a public speech, interview, cricket clip, or news segment. AI changes the voice, words, or lip movement. A fake lower-third then claims the celebrity found a secret earning platform. The <strong>fake Ambani investment video India</strong> debunked by BOOM used footage from the 2024 Vibrant Gujarat Summit with cloned audio promoting a stock forum.</p>
                <h3>Stage 2: Distributing on Facebook, YouTube, and WhatsApp</h3>
                <p>The video appears as a sponsored ad or viral forward. It may impersonate a news channel and use comments that claim ordinary people already earned lakhs. Criminals rotate accounts and domains, so one removal does not stop the campaign.</p>
                <h3>Stage 3: The Fake Investment Platform</h3>
                <p>A link opens a polished registration page or moves the victim into WhatsApp or Telegram. A supposed adviser asks for a first deposit. The dashboard then displays rapid gains. Those figures do not prove that any asset was bought. Read how the same pattern appears in a <Link href="/blog/crypto-investment-scam-india-2026">crypto investment scam</Link> and a <Link href="/blog/stock-market-tip-scam-india">stock market tip scam</Link>.</p>
                <h3>Stage 4: The Withdrawal Block</h3>
                <p>When the victim tries to withdraw, the platform demands tax, insurance, verification, or a larger minimum balance. Each payment creates a new excuse. Eventually the adviser stops replying, the app fails, and the website disappears.</p>

                <div className="not-prose my-8 overflow-hidden rounded-2xl shadow-md">
                    <Image src="/blog/blog31/deepfake-investment-process.jpg" alt="How deepfake celebrity investment scam works India, four stage process" width={1200} height={600} className="w-full" />
                </div>

                <h2 id="most-impersonated">Which Celebrities Are Most Impersonated in India?</h2>
                <p>Fact checks and police reports have documented fake endorsements using Mukesh Ambani, Ratan Tata, Narayana Murthy, Sudha Murty, Sadhguru, Virat Kohli, Narendra Modi, Nirmala Sitharaman, Sundar Pichai, and others. In November 2025, Bengaluru cybercrime police reportedly opened a case over AI videos featuring Kohli, Sitharaman, Anant Ambani, and other public figures promoting fake stock apps.</p>
                <p>A <strong>fake Modi investment scheme India</strong> video often adds government branding to imply official approval. A <strong>fake celebrity endorsement India</strong> ad may instead use a cricket star or industrialist to imply personal success. Neither is regulatory evidence. Check the intermediary, app, adviser, and investment through SEBI&apos;s official channels.</p>

                <div className="not-prose my-8 overflow-hidden rounded-2xl shadow-md">
                    <Image src="/blog/blog31/celebrity-deepfake-warning.jpg" alt="Indian public figures do not promote guaranteed investment schemes through viral video ads" width={1100} height={733} className="w-full" />
                </div>

                <h2 id="how-to-detect">How to Detect a Deepfake Video in 60 Seconds</h2>
                <p><strong>How to detect a deepfake celebrity video in India:</strong></p>
                <ol>
                    <li>Look at the lips. Deepfake lip sync may be slightly off or unnatural.</li>
                    <li>Watch the blinking. Older or poor quality fakes may blink irregularly.</li>
                    <li>Check hair and ear edges for flicker, blur, or shifting boundaries.</li>
                    <li>Compare face lighting with the background and watch for sudden skin texture changes.</li>
                    <li>Listen for audio and movement delays, odd emphasis, or an unnatural accent.</li>
                    <li>Search the person&apos;s verified accounts and established news coverage for the same announcement.</li>
                    <li>Check fact checking sites such as Alt News and BOOM, then verify the platform through SEBI.</li>
                </ol>
                <p><strong>If a celebrity video promises guaranteed investment returns, treat it as fraudulent unless the claim and regulated platform are independently verified.</strong> No single visual clue is conclusive. High quality fakes may look clean, and compressed genuine video may look strange. Verification outside the video is the strongest test.</p>

                <div className="not-prose my-8 overflow-hidden rounded-2xl shadow-md">
                    <Image src="/blog/blog31/deepfake-detection-signs.jpg" alt="How to detect deepfake video India 2026, seven visual signs checklist" width={1100} height={733} className="w-full" />
                </div>

                <h2 id="platform-red-flags">Red Flags of a Fake Celebrity Investment Platform</h2>
                <ul>
                    <li>Guaranteed daily, weekly, or monthly returns with little or no risk.</li>
                    <li>A celebrity video is the main proof that the platform is legitimate.</li>
                    <li>The app arrives as an APK or through a private link instead of an official store.</li>
                    <li>Payments go to personal bank accounts, unrelated companies, crypto wallets, or changing UPI IDs.</li>
                    <li>An adviser pressures you to join a private WhatsApp or Telegram group.</li>
                    <li>The platform claims special institutional access but cannot provide verifiable SEBI registration.</li>
                    <li>The dashboard shows spectacular gains while every withdrawal requires another payment.</li>
                </ul>
                <p>I4C&apos;s official <Source href="https://cybercrime.gov.in/pdf/Advisories/ADVISORY%20TAU-ADV-001%20%2822.04.2024%29.pdf">fake stock market platform advisory</Source> specifically warns about sponsored ads using deepfake videos and images of prominent people, WhatsApp groups, fake applications, false profits, and blocked withdrawals. NSE also issued an <Source href="https://www.nseindia.com/static/resources/nse-caution-fake-videos-of-nse-md-and-ceo-shri-ashishkumar-chauhan-recommending-stocks">official warning about fake videos of its MD and CEO</Source> recommending stocks.</p>

                <h2 id="if-you-invested">What To Do If You Invested Based on a Deepfake Video</h2>
                <ol>
                    <li>Stop sending money. Do not pay a withdrawal fee, tax, or recovery agent.</li>
                    <li>Call <strong>1930 immediately</strong> and contact your bank&apos;s fraud team to request a hold or recall.</li>
                    <li>File at <Source href="https://cybercrime.gov.in">cybercrime.gov.in</Source> and save the acknowledgement number.</li>
                    <li>Preserve the video URL, ad account, website domain, app file, chats, phone numbers, beneficiary accounts, UPI IDs, receipts, and transaction IDs.</li>
                    <li>Report the advertisement and impersonating account to Facebook, YouTube, Instagram, WhatsApp, or the relevant platform.</li>
                    <li>Change reused passwords, remove unknown apps, revoke unnecessary permissions, and tell your bank if you shared credentials or screen access.</li>
                    <li>Follow the detailed <Link href="/blog/got-scammed-online-india-what-to-do">already invested scam recovery checklist</Link>.</li>
                </ol>

                <h2 id="real-cases">Real Deepfake Investment Scam Cases and Source Credits</h2>
                <p>These amounts come from complaints and police statements reported by news organisations. They describe allegations under investigation, not final court findings.</p>
                <ul>
                    <li><Source href="https://indianexpress.com/article/cities/bangalore/bengaluru-woman-defrauded-crore-sadhguru-jaggi-vasudev-deepfake-ai-police-10243694/">The Indian Express, 11 September 2025</Source>: Bengaluru police said a 57-year-old retired professional lost ₹3.75 crore after a deepfake Sadhguru video led her to people claiming to represent a trading platform.</li>
                    <li><Source href="https://indianexpress.com/article/pune/deepfake-video-of-pm-sitharaman-used-to-cheat-army-veteran-of-rs-1-cr-10626309/">The Indian Express, 17 April 2026</Source>: an Army veteran in Pune was allegedly cheated of ₹1 crore in a forex investment fraud promoted with deepfake videos of Prime Minister Modi and Finance Minister Sitharaman.</li>
                    <li><Source href="https://www.moneycontrol.com/news/india/two-bengaluru-residents-lose-rs-83-lakh-to-deepfake-videos-of-top-industrialists-12858666.html">Moneycontrol, 4 November 2024</Source>: two Bengaluru cases involving fake videos of Narayana Murthy and Mukesh Ambani produced reported combined losses of ₹83 lakh.</li>
                    <li><Source href="https://timesofindia.indiatimes.com/city/mumbai/retired-professional-falls-victim-to-deepfake-scam-featuring-mukesh-ambani/articleshow/111667464.cms">The Times of India, 12 July 2024</Source>: Mumbai police registered a complaint after a 77-year-old retired professional said a Mukesh Ambani deepfake led to a ₹62,500 loss.</li>
                    <li><Source href="https://www.boomlive.in/fact-check/viral-video-reliance-chairman-mukesh-ambani-promoting-free-stock-market-forum-claim-social-media-24514">BOOM, 29 February 2024</Source>: fact checkers traced a fake Ambani stock forum promotion to genuine summit footage and identified cloned audio and mismatched lip movement.</li>
                    <li><Source href="https://www.boomlive.in/boom-research/artificial-intelligence-misinformation-disinformation-2024-lok-sabha-elections-boom-report-27412">BOOM annual review</Source>: AI driven fake investment promotions were the largest category within its 2024 AI misinformation fact checks, with 14 checks involving cloned or manipulated public figures.</li>
                </ul>
                <p>SEBI&apos;s investor education portal also publishes official material on <Source href="https://investor.sebi.gov.in/inv_aware_edu_videos.html">deepfake fraud and fake trading apps</Source>. Use it to verify the warning pattern, then search SEBI records before trusting any intermediary.</p>

                <h2 id="frequently-asked-questions">Frequently Asked Questions</h2>
                {faqs.map((faq) => <div key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></div>)}

                <div className="not-prose my-10 rounded-2xl bg-gradient-to-br from-red-700 to-slate-950 p-7 text-white shadow-lg">
                    <h2 className="mb-3 text-2xl font-extrabold text-white">Check the platform before you invest</h2>
                    <p className="mb-5 text-sm leading-relaxed text-red-50">A celebrity face cannot verify a website. Scan the URL, check its history, and share this warning before someone sends money.</p>
                    <Link href="/website-safety-checker" className="inline-flex rounded-xl bg-white px-5 py-3 text-sm font-bold text-red-700">Check website safety</Link>
                </div>
            </BlogLayout>
        </>
    )
}
