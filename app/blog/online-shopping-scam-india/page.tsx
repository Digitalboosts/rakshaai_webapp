import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import BlogLayout from '@/components/BlogLayout'
import SidebarOnlineShoppingScam from '@/components/blog/SidebarOnlineShoppingScam'
import { blogPostingSchema, breadcrumbListSchema, faqPageSchema, jsonLd, personSchema } from '@/lib/seo/schema'

const title = 'Online Shopping Scam India: How to Buy Safely on Any Platform in 2026'
const description = 'Online shopping scam India 2026 guide to fake sellers, counterfeit goods, non-delivery fraud and safer buying on Flipkart, Amazon, Meesho and any site.'
const url = 'https://rakshaai.co/blog/online-shopping-scam-india'
const image = '/blog/blog46/online-shopping-scam-india-hero.jpg'
const publishedAt = '2026-08-11T00:00:00.000Z'

export const metadata: Metadata = {
    title: { absolute: 'Online Shopping Scam India 2026: 8 Safety Checks | RakshaAI' },
    description,
    keywords: [
        'online shopping scam India 2026',
        'Flipkart seller scam India',
        'Amazon India fake seller',
        'Meesho scam India',
        'counterfeit product India online',
        'non delivery online shopping India',
        'how to buy safely online India',
        'fake return policy India ecommerce',
    ],
    authors: [
        { name: 'Rabinarayan Pradhan', url: 'https://rakshaai.co/author/rabinarayan-pradhan' },
        { name: 'RakshaAI Threat Intelligence Team', url: 'https://rakshaai.co' },
    ],
    alternates: { canonical: url },
    robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
    openGraph: {
        title: 'Online Shopping Scam India 2026: 7 Types and How to Buy Safely on Every Platform',
        description: 'Fake sellers, counterfeit products, non-delivery fraud and WhatsApp shop scams. Use this safe shopping checklist on every Indian e-commerce platform.',
        url,
        type: 'article',
        siteName: 'RakshaAI',
        publishedTime: publishedAt,
        modifiedTime: publishedAt,
        authors: ['RakshaAI Threat Intelligence Team', 'Rabinarayan Pradhan'],
        tags: ['Online Shopping Scam India', 'E-Commerce Fraud', 'Fake Sellers', 'August 2026'],
        images: [{
            url: image,
            width: 1200,
            height: 630,
            alt: 'Online shopping scam India 2026, fake sellers, counterfeit products and non-delivery fraud',
        }],
    },
    twitter: {
        card: 'summary_large_image',
        title: '7 Online Shopping Scams Hitting Indian Consumers in 2026',
        description: 'Fake sellers, counterfeit goods and non-delivery fraud. Use this 8-point safety checklist before the next sale season.',
        images: [image],
    },
}

const faqs = [
    {
        question: 'What should I do if an online order never arrived in India?',
        answer: 'First, complain through the platform or seller using its official support route and keep the complaint number. If it is not resolved within the stated timeline, register a grievance with the National Consumer Helpline at consumerhelpline.gov.in or 1915. If the order involved deliberate deception, a fake site or another clear financial cyber fraud, report it at cybercrime.gov.in and call 1930 quickly. For a credit card payment, also ask the issuing bank whether the transaction qualifies for a dispute or chargeback under its rules.',
    },
    {
        question: 'Are third-party sellers on Flipkart and Amazon safe in India?',
        answer: 'Most third-party sellers are legitimate, but a marketplace name alone does not verify every listing. Check the exact seller name, recent verified reviews, rating history, return terms and invoice details. Fulfilment or assurance labels may improve delivery and resolution handling, but they are not proof of authenticity. For expensive branded goods, prefer the brand official store or an authorised seller listed by the brand.',
    },
    {
        question: 'Is WhatsApp shopping safe in India?',
        answer: 'Shopping from an unknown WhatsApp seller is high risk because a direct UPI transfer usually lacks the platform dispute process available through a marketplace checkout. Buy through WhatsApp only after independently verifying the business through its official website, physical location, registration details or a trusted referral. Never trust screenshots, follower counts or a video call as proof by themselves.',
    },
    {
        question: 'How do I identify a counterfeit product from an online order in India?',
        answer: 'Compare the packaging, model number, serial number, weight, finish, logo, font, seal, warranty and included accessories with the brand official reference. Verify an ISI licence through the BIS Care app where certification is mandatory. Photograph the parcel label and record one continuous unboxing video for expensive goods. Report a suspected counterfeit to the platform, the brand and the National Consumer Helpline.',
    },
    {
        question: 'Is Cash on Delivery safer than UPI for online shopping in India?',
        answer: 'COD reduces the risk of paying for an order that is never dispatched because payment is collected at delivery. It does not prevent unordered parcel fraud, substitution or a sealed box containing the wrong item. Confirm the order before paying and use open-box inspection when the platform offers it. On a trusted platform, an official checkout by UPI or credit card can also be safe.',
    },
    {
        question: 'How to buy safely online in India in 2026?',
        answer: 'Check recent verified seller reviews, verify unfamiliar domains, prefer official brand stores, stay inside the platform checkout, use COD or a credit card for a new seller, save screenshots, read the return policy and confirm that the domain is the exact site you intended to visit. Stop if the price, urgency or payment request does not survive these checks.',
    },
]

const schemas = [
    blogPostingSchema({
        headline: title,
        description,
        url: '/blog/online-shopping-scam-india',
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
        section: 'E-Commerce Fraud',
        keywords: ['online shopping scam India 2026', 'Flipkart seller scam India', 'Amazon India fake seller', 'Meesho scam India', 'counterfeit product India online', 'non delivery online shopping India'],
        wordCount: 2600,
    }),
    faqPageSchema(faqs),
    breadcrumbListSchema([
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: 'Online Shopping Scam India', url: '/blog/online-shopping-scam-india' },
    ]),
]

function Source({ href, children }: { href: string; children: ReactNode }) {
    return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
}

export default function OnlineShoppingScamIndiaPage() {
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
                primaryTool={{ label: 'Check an unfamiliar shopping website', href: '/website-safety-checker' }}
                tags={['Online Shopping Scam India', 'E-Commerce Fraud', 'Fake Sellers', 'August 2026']}
                slug="online-shopping-scam-india"
                sidebar={<SidebarOnlineShoppingScam title={title} description={description} />}
            >
                <div className="not-prose mb-10 overflow-hidden rounded-2xl shadow-lg">
                    <Image
                        src={image}
                        alt="Online shopping scam India 2026, fake sellers, counterfeit products and non-delivery fraud"
                        width={1200}
                        height={630}
                        className="w-full object-cover"
                        priority
                    />
                </div>

                <p><strong>Online shopping scam India 2026</strong> cases do not always begin on an obviously fake website. The trap may be a polished Instagram advertisement, a third-party marketplace listing, a WhatsApp catalogue, a counterfeit product with copied reviews, or a parcel that technically arrives but contains something worthless.</p>
                <p>The risk is widespread enough to change how every purchase should be checked. A 2025 GSMA survey of about 500 adults in India found that online-shopping non-delivery or quality disputes were the leading scam category encountered, cited by 32 percent of respondents. This guide explains the seven common formats, verified Indian cases, eight checks to complete before paying, and the fastest complaint routes if a seller cheats you.</p>

                <div className="not-prose my-8 rounded-2xl border border-red-200 bg-red-50 p-6 dark:border-red-900 dark:bg-red-950/30">
                    <p className="text-sm font-bold text-red-900 dark:text-red-100">The rule that stops most shopping scams</p>
                    <p className="mt-2 text-sm leading-6 text-red-800 dark:text-red-200">Do not let a discount move the conversation or payment outside the platform. Verify the exact seller and domain before money moves.</p>
                </div>

                <h2 id="india-ecommerce-fraud-problem">India&apos;s E-Commerce Fraud Problem: Why It&apos;s Getting Worse</h2>
                <p>India&apos;s shopping journey now crosses marketplaces, social platforms, messaging apps, search ads and quick-commerce interfaces. That convenience also lets a fraudster create a convincing storefront, buy a sponsored ad, copy product photographs and collect UPI payments without building a real retail operation.</p>
                <p>The GSMA survey shows the multi-channel problem. Among respondents who had been scammed, 46 percent cited messaging apps in the victim journey, 33 percent cited social platforms and 19 percent cited search ads or sponsored links. The findings are self-reported survey data, not national police totals, but they explain why a professional-looking advertisement is weak evidence of legitimacy.</p>
                <p>Regulators have also found real listing failures on established platforms. In March 2025, the Bureau of Indian Standards said raids at Amazon and Flipkart warehouses found hundreds of non-certified products and traced further seizures to a supplier, including thousands of water heaters and food mixers. BIS also said non-certified goods had been identified across Amazon, Flipkart, Meesho, Myntra and BigBasket. These were regulatory findings about certification and safety, not proof that every product or seller on those platforms is fraudulent.</p>
                <p>In January 2026, the Central Consumer Protection Authority reported more than 16,970 non-compliant walkie-talkie listings across multiple platforms. It imposed penalties on Amazon, Flipkart, Meesho and Meta after findings involving required approvals, seller verification or disclosures. The practical lesson is simple: a platform can reduce risk, but shoppers still need to verify the seller, product and applicable certification.</p>

                <h2 id="seven-online-shopping-scam-types">The 7 Online Shopping Scam Types Indians Face in 2026</h2>

                <h3>Scam 1: Flipkart Seller Scam India, Amazon India Fake Seller, and Meesho Scam India</h3>
                <p>A <strong>Flipkart seller scam India</strong> search, an <strong>Amazon India fake seller</strong> complaint or a <strong>Meesho scam India</strong> report can describe very different events: a newly created seller that never ships, a hijacked listing, a misleading description, a seller that sends used goods, or a fraudster impersonating platform support outside the app.</p>
                <p>Check the exact seller name rather than trusting the marketplace logo. Read the newest verified-purchase reviews, sort for low ratings, compare repeated wording, and check whether reviews suddenly shifted from an unrelated product. For expensive goods, confirm the authorised-seller list on the brand&apos;s own website. Never send a second payment to a personal UPI ID because someone claims the first platform payment failed.</p>

                <h3>Scam 2: Counterfeit Product India Online, Including Fake Branded Goods</h3>
                <p>A <strong>counterfeit product India online</strong> listing copies brand photographs, model names and packaging while the delivered item uses inferior components or a false mark. The harm is not limited to fashion. Fake or non-certified chargers, heaters, helmets, toys and appliances can create electrical, fire or injury risks.</p>
                <p>Compare the serial number, packaging, warranty registration and authorised seller with the brand&apos;s official information. For goods that require an ISI mark, use the BIS Care app to check the CM/L licence number. A printed logo or hologram is not enough because counterfeiters copy those too.</p>

                <h3>Scam 3: Non Delivery Online Shopping India, Paid but Nothing Arrived</h3>
                <p>In a <strong>non delivery online shopping India</strong> scam, the seller collects an advance and provides no parcel, a false tracking number, or an endless series of dispatch promises. Social-media stores and standalone websites are common entry points because the victim may have no in-platform order record.</p>
                <p>Before payment, search the seller name, phone number and domain with words such as complaint, refund and scam. Check whether the contact address exists and whether the domain is much newer than the business claims. Use an official payment gateway, credit card or COD instead of a direct transfer to an unknown person.</p>

                <h3>Scam 4: Fake Return Policy India Ecommerce, You Cannot Return What They Sent</h3>
                <p>A <strong>fake return policy India ecommerce</strong> trap hides a no-return condition, changes the visible terms after purchase, rejects every request as a hygiene issue, or makes the buyer pay repeated processing fees. Take screenshots of the product description, delivery promise, return window and seller details before ordering.</p>
                <p>The Consumer Protection (E-Commerce) Rules, 2020 state that sellers on marketplaces must not refuse to take back goods or refund payment when goods are defective, deficient, spurious, do not match advertised characteristics, or arrive later than the stated schedule, subject to a force majeure exception for late delivery. That does not create an unlimited change-of-mind return right, but a seller cannot use a label such as non-returnable to excuse a wrong, fake or defective product.</p>

                <h3>Scam 5: WhatsApp Shop Fraud and Direct Seller Advance Scam</h3>
                <p>The seller posts a catalogue or social ad, moves the buyer to WhatsApp, then asks for a UPI advance. A GST image, invoice PDF, video call, follower count or customer screenshot can all be copied or fabricated. The strongest protection is to return to the verified business website or marketplace and use its checkout.</p>
                <p>If a genuine local business only accepts messaging orders, verify its physical address, call a number found independently, check registration details where relevant and place a small first order. Do not install an app, share an OTP or scan a QR code to receive a refund.</p>

                <h3>Scam 6: Fake Flash Sale Website and Phishing During Sale Season</h3>
                <p>Fake sites copy a marketplace or brand, advertise a 70 to 90 percent discount, and create a countdown timer. The payment page may steal card data, or the site may accept UPI and disappear. In May 2026, news reports citing an I4C warning described fake websites, social advertisements, fraudulent payment links, refund scams and screen-sharing apps targeting online shoppers.</p>
                <p>Open the retailer by typing its address or using its official app. Check every character in the domain. A padlock only means the connection is encrypted; it does not prove the shop is genuine. Use RakshaAI&apos;s <Link href="/blog/how-to-check-fake-website-india">fake website checker guide</Link> before trusting an unfamiliar site.</p>

                <h3>Scam 7: Substitute Product, Ordered Nike and Got a Fake Alternative</h3>
                <p>The parcel arrives, but the branded shoe, phone or watch has been replaced with a cheap copy, old item, stone or unrelated product. Sometimes the outer package looks intact. Record one continuous video showing the sealed parcel, shipping label, all sides of the box, opening and serial numbers. Use open-box delivery when available and inspect before sharing the delivery OTP.</p>
                <p>A February 2026 Ahmedabad Crime Branch case shows that substitution can also target the logistics chain and platforms. Police said an interstate group infiltrated delivery operations to replace high-value electronics with dummy products. Five people were arrested and equipment and assets worth more than ₹20.5 lakh were recovered. These were police allegations at the investigation stage.</p>

                <div className="not-prose my-8 overflow-hidden rounded-2xl shadow-md">
                    <Image src="/blog/blog46/seven-online-shopping-scams-india.jpg" alt="7 online shopping scam types India 2026, fake sellers, counterfeit goods, WhatsApp fraud and flash sale sites" width={800} height={450} className="w-full" />
                </div>

                <h2 id="real-online-shopping-scam-cases">Real Online Shopping Scam Cases and Consumer Action in India</h2>
                <p><strong>Instagram iPhone ads affected more than 100 people:</strong> Puducherry cybercrime police arrested two people in May 2025 over advertisements offering an iPhone 15 for ₹7,000. Police alleged that more than 100 people in Tamil Nadu and Puducherry were cheated and that five linked bank accounts showed transactions above ₹15 lakh. An impossible discount was the hook, while direct online payment removed normal marketplace safeguards.</p>
                <p><strong>A ₹3,760 dress order led to a ₹36,880 award:</strong> In July 2026, The Indian Express reported that the Kollam District Consumer Commission held an Instagram boutique liable after only one of two prepaid dresses was delivered. The commission ordered a ₹1,880 refund, ₹25,000 compensation and ₹10,000 litigation costs. The ruling is important because it treated a social-media sale as a consumer transaction covered by the Consumer Protection Act, 2019.</p>
                <p><strong>Refund systems do return meaningful sums:</strong> The Department of Consumer Affairs said the National Consumer Helpline facilitated ₹27.61 crore in refunds across 49,333 refund grievances between 25 April and 31 October 2025. This does not guarantee recovery in an individual case, but it is strong evidence that preserving records and using the official consumer route is worth the effort.</p>

                <h2 id="how-to-buy-safely-online-india">How to Buy Safely Online India: Safe Shopping Checklist Before Every Purchase</h2>
                <p><strong>How to shop safely online in India in 2026:</strong></p>
                <ol>
                    <li>Check seller ratings and reviews: look for recent verified purchases, not just the overall star rating.</li>
                    <li>For new websites, check them at <Link href="/website-safety-checker">rakshaai.co/website-safety-checker</Link> before entering card details.</li>
                    <li>For electronics and branded goods, buy from the brand&apos;s official store on the platform where possible.</li>
                    <li>Never pay sellers directly through WhatsApp UPI: use the platform&apos;s official checkout only.</li>
                    <li>Use a credit card or COD for new sellers: a card transaction may be disputable under the issuer&apos;s rules, while COD avoids prepaying for non-delivery.</li>
                    <li>Screenshot all order confirmations and product descriptions before paying.</li>
                    <li>Read the return policy before ordering: if electronics are marked no returns, inspect the exception terms for defective, wrong or spurious goods.</li>
                    <li>Check that the website domain exactly matches the platform you intended to visit and is not a phishing copy.</li>
                </ol>
                <p>This is the practical answer to <strong>how to buy safely online India</strong>. For a costly order, add two more habits: record the unboxing in one take and verify the serial number before the return window closes. Read our deeper guide to <Link href="/blog/fake-online-sellers-india">fake online sellers</Link> when a listing, store or support account feels suspicious.</p>

                <div className="not-prose my-8 overflow-hidden rounded-2xl shadow-md">
                    <Image src="/blog/blog46/safe-online-shopping-checklist-india.jpg" alt="Safe online shopping checklist India 2026 with 8 steps before every purchase" width={800} height={450} className="w-full" />
                </div>

                <h2 id="what-to-do-if-cheated">What to Do If You Were Cheated by an Online Seller</h2>
                <ol>
                    <li><strong>Preserve evidence immediately.</strong> Save the listing, seller profile, URL, return terms, invoice, chat, phone number, UPI ID, transaction reference, parcel label, tracking page and photos or video of what arrived.</li>
                    <li><strong>Use the platform complaint route.</strong> Report the order inside the official app or website and save the ticket number. Do not call a support number found in a search advertisement.</li>
                    <li><strong>Contact the payment provider.</strong> Tell your bank or card issuer what happened. Ask about a card dispute or chargeback where applicable. If deception led to an immediate digital payment, call 1930 quickly.</li>
                    <li><strong>Register a consumer grievance.</strong> File at <Source href="https://consumerhelpline.gov.in">consumerhelpline.gov.in</Source> or call 1915. NCH is a pre-litigation grievance channel, not a court judgment.</li>
                    <li><strong>Report clear cyber fraud.</strong> Use <Source href="https://cybercrime.gov.in">cybercrime.gov.in</Source> for a fake website, impersonation, deliberate non-delivery fraud or other cybercrime. Note the acknowledgement number.</li>
                    <li><strong>Escalate if unresolved.</strong> Consider the appropriate Consumer Commission through the official e-Jagriti system and obtain legal advice when the loss is substantial or facts are disputed. Use our guide on how to <Link href="/blog/recover-money-online-fraud-india">recover money after online fraud</Link> for payment-specific steps.</li>
                </ol>

                <div className="not-prose my-8 overflow-hidden rounded-2xl shadow-md">
                    <Image src="/blog/blog46/online-seller-scam-response-india.jpg" alt="What to do if cheated by an online seller in India, complaint and recovery steps" width={800} height={450} className="w-full" />
                </div>

                <div className="not-prose my-10 rounded-2xl bg-gradient-to-br from-slate-950 to-red-950 p-7 text-white">
                    <h2 id="instagram-reel-script" className="text-2xl font-extrabold">30 Second Instagram Reel Script</h2>
                    <p className="mt-2 text-sm text-red-100">Format: fast cuts, shopping visuals, large captions and urgent but calm delivery.</p>
                    <div className="mt-6 space-y-4 text-sm leading-6">
                        <div><strong className="text-amber-300">0 to 3 seconds, hook:</strong> Show a perfect sneaker listing, then cut to the fake pair. Voice: &quot;Ordered this, but received this? Online shopping scams are getting smarter.&quot;</div>
                        <div><strong className="text-amber-300">3 to 10 seconds:</strong> Flash fake seller, counterfeit box and no-delivery icons. Voice: &quot;Fake sellers, counterfeit products, no delivery and fake return policies can all look genuine until you pay.&quot;</div>
                        <div><strong className="text-amber-300">10 to 21 seconds:</strong> Show the checklist with each item appearing quickly. Voice: &quot;Check recent seller reviews, use the official checkout, verify unknown websites, read the return policy and screenshot the listing before payment.&quot;</div>
                        <div><strong className="text-amber-300">21 to 27 seconds:</strong> Show 1915, 1930 and the two official portals. Voice: &quot;Cheated? Save every screenshot, complain on the platform, call 1915 for consumer help, and call 1930 quickly for financial cyber fraud.&quot;</div>
                        <div><strong className="text-amber-300">27 to 30 seconds, CTA:</strong> Show RakshaAI website checker. Voice: &quot;Check unfamiliar shopping sites at RakshaAI before you buy. Share this before the next sale.&quot;</div>
                    </div>
                    <p className="mt-5 text-xs text-red-200"><strong>On-screen caption:</strong> One failed check? Do not buy. Safety first, savings second.</p>
                </div>

                <h2 id="frequently-asked-questions">Frequently Asked Questions</h2>
                {faqs.map((faq) => (
                    <div key={faq.question}>
                        <h3>{faq.question}</h3>
                        <p>{faq.answer}</p>
                    </div>
                ))}

                <h2 id="sources-and-credits">Sources and Credits</h2>
                <ul>
                    <li><Source href="https://www.gsma.com/about-us/regions/asia-pacific/wp-content/uploads/2025/10/GSMA-India-Consumer-Scam-Report-2025_FINAL_1010.pdf">GSMA India Consumer Scam Report 2025</Source>: survey methodology, scam types, channels and victim impact.</li>
                    <li><Source href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2111506&lang=2&reg=3">Bureau of Indian Standards enforcement release, 15 March 2025</Source>: non-certified products found through e-commerce surveillance and warehouse raids.</li>
                    <li><Source href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2215261&lang=1&reg=1">CCPA e-commerce enforcement release, 16 January 2026</Source>: non-compliant walkie-talkie listings, findings and penalties.</li>
                    <li><Source href="https://indianexpress.com/article/cities/ahmedabad/interstate-gang-defrauding-e-commerce-firms-busted-5-held-10520251/">The Indian Express, 8 February 2026</Source>: Ahmedabad Crime Branch investigation into electronics substitution in the delivery chain.</li>
                    <li><Source href="https://indianexpress.com/article/legal-news/woman-rs-36880-instagram-wedding-dress-order-10805390/lite/">The Indian Express, 27 July 2026</Source>: Kollam consumer ruling involving an undelivered Instagram order.</li>
                    <li><Source href="https://www.newindianexpress.com/states/tamil-nadu/2025/May/14/iphone-scam-busted-two-arrested-for-defrauding-over-100-people-in-tn-pondy">The New Indian Express, 14 May 2025</Source>: police case involving fake Instagram iPhone advertisements.</li>
                    <li><Source href="https://www.pib.gov.in/PressNoteDetails.aspx?ModuleId=3&NoteId=156671&id=156671&lang=1&reg=6">Department of Consumer Affairs consumer-protection update</Source>: NCH refunds, complaint channels and digital consumer tools.</li>
                    <li><Source href="https://consumeraffairs.nic.in/acts-and-rules/consumer-protection/consumer-protection">Consumer Protection (E-Commerce) Rules, 2020</Source> and <Source href="https://cyber.delhipolice.gov.in/Fakeshoppingsite.html">Delhi Police fake shopping website advisory</Source>: consumer duties, seller obligations and preventive guidance.</li>
                </ul>

                <div className="not-prose mt-10 rounded-2xl bg-indigo-600 p-7 text-white">
                    <h2 className="text-2xl font-extrabold">Check the shop before you pay</h2>
                    <p className="mt-2 text-sm leading-6 text-indigo-100">Paste an unfamiliar shopping URL into RakshaAI and review its safety signals before entering payment details.</p>
                    <Link href="/website-safety-checker" className="mt-5 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-bold text-indigo-700 hover:bg-indigo-50">Open the free website safety checker</Link>
                </div>
            </BlogLayout>
        </>
    )
}
