import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import BlogLayout from '@/components/BlogLayout'
import SidebarRealEstateScam from '@/components/blog/SidebarRealEstateScam'
import { blogPostingSchema, breadcrumbListSchema, faqPageSchema, jsonLd, personSchema } from '@/lib/seo/schema'

const title = 'Real Estate Scam India 2026: How Property Fraudsters Are Stealing Crores'
const description = 'Real estate scam India 2026 guide to fake builders, duplicate sales, RERA fraud and plot fraud, with verified cases and a seven-step property check.'
const url = 'https://rakshaai.co/blog/real-estate-scam-india'
const image = '/blog/blog45/real-estate-scam-india-hero.webp'
const publishedAt = '2026-08-10T00:00:00.000Z'

export const metadata: Metadata = {
    title: { absolute: 'Real Estate Scam India 2026: Property Fraud Guide | RakshaAI' },
    description,
    keywords: [
        'real estate scam India 2026',
        'property fraud India 2026',
        'fake builder India scam',
        'RERA fraud India',
        'duplicate property documents India',
        'how to verify property India',
        'plot scam India',
        'flat booking scam India',
    ],
    authors: [
        { name: 'Rabinarayan Pradhan', url: 'https://rakshaai.co/author/rabinarayan-pradhan' },
        { name: 'RakshaAI Threat Intelligence Team', url: 'https://rakshaai.co' },
    ],
    alternates: { canonical: url },
    robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
    openGraph: {
        title: 'Real Estate Scam India: Fake Builders, Duplicate Sales and RERA Fraud',
        description: 'Fake projects, the same property sold twice, forged deeds and false RERA claims can cost a family crores. Verify every property before paying.',
        url,
        type: 'article',
        siteName: 'RakshaAI',
        publishedTime: publishedAt,
        modifiedTime: publishedAt,
        authors: ['RakshaAI Threat Intelligence Team', 'Rabinarayan Pradhan'],
        tags: ['Real Estate Scam India', 'Property Fraud', 'RERA Fraud', 'August 2026'],
        images: [{
            url: image,
            width: 1200,
            height: 630,
            alt: 'Real estate scam India 2026, fake builder property fraud and duplicate sale warning',
        }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'The Same Property Can Be Sold Twice: Check These Records Before Paying',
        description: 'Verify the state RERA entry, title chain, encumbrance record, approvals and seller identity before a property payment.',
        images: [image],
    },
}

const faqs = [
    {
        question: 'How do I check if a builder is RERA registered in India?',
        answer: 'Use the Ministry of Housing and Urban Affairs list to open the official RERA portal for the state or Union Territory where the project is located. Search by the exact project name, promoter name or registration number. Match the promoter, land details, approved plans, declared completion date, project status and uploaded documents. A number printed in a brochure is not proof until it matches the live official entry.',
    },
    {
        question: 'What is the duplicate property sale scam in India?',
        answer: 'A seller accepts money or executes agreements with more than one buyer for the same flat or plot. The property may also be mortgaged already. Reduce the risk by having an independent property lawyer examine the title chain, registered deeds and encumbrance record, and by confirming the seller identity and original documents before payment.',
    },
    {
        question: 'What is the agricultural land plot scam in India?',
        answer: 'A seller markets agricultural land as a residential plot even though the required land-use conversion or layout approval is missing, forged or only proposed. Rules and document names differ by state. Verify the conversion order and sanctioned layout directly with the competent revenue, planning and local authorities before buying.',
    },
    {
        question: 'What is the RERA complaint process in India?',
        answer: 'Open the official state RERA portal, review its complaint rules, create an account and file the prescribed form with the project number, agreement, payment proof, correspondence and details of the violation. The forum and fee can depend on the remedy requested. Follow the state portal instructions and obtain legal advice when the amount or issue is substantial.',
    },
    {
        question: 'How can I check if a property has existing loans or mortgages in India?',
        answer: 'Obtain the state-specific encumbrance record or certificate for an adequate search period from the registration department or sub-registrar. Have a lawyer compare it with the complete title chain and original deeds. An encumbrance certificate may not reveal every unregistered claim, pending dispute or deposit of title deeds, so also seek lender releases, court searches and seller declarations where appropriate.',
    },
]

const schemas = [
    blogPostingSchema({
        headline: title,
        description,
        url: '/blog/real-estate-scam-india',
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
        section: 'Property Fraud',
        keywords: ['real estate scam India 2026', 'property fraud India 2026', 'fake builder India scam', 'RERA fraud India', 'duplicate property sale India'],
        wordCount: 2100,
    }),
    faqPageSchema(faqs),
    breadcrumbListSchema([
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: 'Real Estate Scam India', url: '/blog/real-estate-scam-india' },
    ]),
]

function Source({ href, children }: { href: string; children: ReactNode }) {
    return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
}

export default function RealEstateScamIndiaPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schemas) }} />
            <BlogLayout
                title={title}
                description={description}
                publishedAt={publishedAt}
                lastUpdated={publishedAt}
                readTime="15 min"
                author="Rabinarayan Pradhan"
                authorUrl="/author/rabinarayan-pradhan"
                primaryTool={{ label: 'Verify a suspicious builder or business', href: '/business-verification' }}
                tags={['Real Estate Scam India', 'Property Fraud', 'RERA Fraud', 'August 2026']}
                slug="real-estate-scam-india"
                sidebar={<SidebarRealEstateScam title={title} description={description} />}
            >
                <div className="not-prose mb-10 overflow-hidden rounded-2xl shadow-lg">
                    <Image
                        src={image}
                        alt="Real estate scam India 2026, fake builder property fraud and duplicate sale warning"
                        width={1200}
                        height={630}
                        className="w-full object-cover"
                        priority
                    />
                </div>

                <p><strong>Real estate scam India 2026</strong> cases show why a polished brochure, a site visit and even a registration number are not enough. A buyer may discover that the builder lacked a licence, the plot cannot legally be used for housing, the seller forged authority to transfer it, or the same unit was promised to several families.</p>
                <p>The losses can consume retirement savings and create years of litigation. Verification must happen before the token, booking amount or cash changes hands. This guide explains six forms of <strong>property fraud India 2026</strong>, recent investigated cases, the records to check, and how RERA helps without replacing independent title due diligence.</p>

                <div className="not-prose my-8 rounded-2xl border border-red-200 bg-red-50 p-6 dark:border-red-900 dark:bg-red-950/30">
                    <p className="text-sm font-bold text-red-900 dark:text-red-100">The safest rule before a property payment</p>
                    <p className="mt-2 text-sm leading-6 text-red-800 dark:text-red-200">Do not rely on a broker&apos;s screenshot, brochure or photocopy. Open the official government record yourself and hire a property lawyer who is independent of the seller, builder and broker.</p>
                </div>

                <h2 id="why-property-fraud-is-high-stakes">Why Real Estate Is One of India&apos;s Highest-Stakes Fraud Categories</h2>
                <p>Property deals combine large advances, complex state-specific records and pressure to act before another buyer. That makes verification difficult at exactly the moment emotion is strongest. An incomplete title chain, an undisclosed mortgage, litigation, a forged power of attorney or missing land-use approval can turn a desirable discount into a long dispute.</p>
                <p>Recent enforcement figures show the scale that a single builder investigation can reach. In April 2026, the Enforcement Directorate said its Earth Infrastructures investigation found that associated entities had collected about ₹2,024.45 crore from more than 19,425 homebuyers and investors. The agency alleged that projects were not completed or possession was not handed over and that funds were diverted. These are investigation findings, not a statement that every allegation has produced a final conviction.</p>
                <p>RERA improves disclosure and gives buyers a forum, but property ownership remains tied to state land, registration, planning and municipal systems. A project appearing on a RERA portal does not remove the need to check the particular flat or plot, the seller&apos;s authority, original documents, encumbrances and approvals.</p>

                <h2 id="six-real-estate-scam-types">The 6 Real Estate Scam Types Destroying Indian Families</h2>

                <h3>Scam 1: Fake Builder India Scam and Under-Construction Project Fraud</h3>
                <p>In a <strong>fake builder India scam</strong>, a promoter advertises an unapproved or premature project, takes booking money and delays construction, refunds or registration. Warning signs include a pre-launch offer before verifiable approvals, payment to a person or unrelated company, a completion date that differs from the official RERA entry, and a demand for cash.</p>
                <p>Verify the promoter through the state RERA record and the company through the Ministry of Corporate Affairs. The RERA Act generally prohibits marketing or booking a covered project before registration. Section 3 exempts projects where the proposed land area does not exceed 500 square metres or the number of apartments does not exceed eight, although the appropriate government can reduce that threshold. Never treat the threshold as proof that a small project is safe.</p>

                <h3>Scam 2: Duplicate Property Sale and Duplicate Property Documents India</h3>
                <p>A duplicate-sale fraud uses repeated agreements, concealed mortgages or <strong>duplicate property documents India</strong> to collect money from several buyers. In August 2025, the ED alleged in the Krrish Realtech case that more than ₹500 crore had been collected from over 400 customers without valid licences and described attempts to allot the same plots to multiple investors.</p>
                <p>An encumbrance search, registered title chain and original-document review can expose many conflicts. Ask a lawyer to search the relevant registration records and litigation, confirm the seller&apos;s identity, and inspect lender releases. Do not accept a seller&apos;s own legal opinion.</p>

                <h3>Scam 3: RERA Fraud India and Fake Registration Claims</h3>
                <p><strong>RERA fraud India</strong> can begin with a registration number copied from another project, a fabricated approval, or a real entry whose promoter, phase, land parcel or completion date does not match the offer. Search the official state portal from the Ministry of Housing and Urban Affairs directory. Match every field and download the current project documents yourself.</p>
                <p>In 2025, news reports described FIRs by Gurugram buyers who alleged that forged government correspondence and fake RERA approvals were used in plotted projects. Separately, the Dombivli illegal-building case led MahaRERA to start broader occupancy-certificate verification after reports of fabricated plans, land records and approvals. A printed number is only a lead to check, not proof.</p>

                <h3>Scam 4: Agricultural Land to Residential Plot Conversion Scam</h3>
                <p>In a <strong>plot scam India</strong>, agricultural land is divided and marketed as ready for residential construction even though the conversion, layout or development approval is missing. The label and procedure vary by state. Maharashtra buyers may hear &quot;NA order&quot;, while another state may use different land-use terminology.</p>
                <p>Confirm the survey or khasra number against the state land record, then verify the conversion order and sanctioned layout directly with the revenue, planning and local authorities. A proposed road, future conversion or broker&apos;s assurance has no value unless the competent authority&apos;s current record supports it.</p>

                <h3>Scam 5: Fake Power of Attorney Fraud</h3>
                <p>A forged or misused power of attorney lets an impostor appear authorised to sell land. A reported Gurugram case in 2025 alleged that an NRI&apos;s 810 square metre plot was transferred and sold for ₹10.7 crore using a fabricated gift deed and a fictitious brother. The report said the owner discovered the transaction later.</p>
                <p>Check the principal&apos;s identity and life status, whether the instrument is registered where required, its exact powers, validity and any revocation. Prefer direct confirmation with the owner. A broad power of attorney should receive heightened scrutiny, not automatic trust.</p>

                <h3>Scam 6: Rental Advance and Flat Booking Scam India</h3>
                <p>A <strong>flat booking scam India</strong> also appears in rentals. A fraudster copies photos from a genuine listing, claims to be away, and asks for a visit fee, security deposit or token before access. Some impersonate an owner or society official and disappear after payment.</p>
                <p>Never pay before seeing the exact property and verifying the person&apos;s authority. Compare ownership or society records, use a written agreement and send money only to the verified contracting party. See the full <Link href="/blog/fake-rental-scam-india">fake rental advance scam guide</Link> for rental-specific checks.</p>

                <div className="not-prose my-8 overflow-hidden rounded-2xl shadow-md">
                    <Image src="/blog/blog45/six-real-estate-scams-india.webp" alt="6 real estate scam types India 2026, builder RERA duplicate land and rental fraud" width={800} height={533} className="w-full" />
                </div>

                <h2 id="how-to-verify-property-india">How to Verify Any Property Deal Before Paying</h2>
                <p><strong>How to verify a property deal in India before paying:</strong></p>
                <ol>
                    <li>Check the project on its official state RERA portal. Use the <Source href="https://www.mohua.gov.in/documents/acts-and-policies/rera-YDM4EzMtQWa?pageTitle=Real-Estate-%28Regulation-and-Development%29-Act%2C-2016-%5BRERA%5D">MoHUA state RERA directory</Source>, then match the project, promoter, phase, land and deadline.</li>
                    <li>Verify the land title on the state land-record portal and compare the survey, khasra, plot or city-survey number with the deed.</li>
                    <li>Obtain the state-specific encumbrance record from the registration department or sub-registrar and have a lawyer search mortgages, sales and claims.</li>
                    <li><Link href="/blog/how-to-verify-a-business-india">Verify the builder or business</Link> on the MCA portal and check its status, directors, filings, litigation and completed projects.</li>
                    <li>Pay only through traceable bank channels to the contracting entity named in the verified documents. Reject cash and personal-account demands.</li>
                    <li>Hire an independent property lawyer to inspect the complete title chain, originals, seller authority, approvals and agreement before any token.</li>
                    <li>Check the exact unit or plot with the planning, municipal and society authorities for sanctioned use, dues, occupancy status and restrictions.</li>
                </ol>
                <p>Extreme urgency, a price far below comparable deals, refusal to share originals and pressure to use the seller&apos;s lawyer are major red flags. For <strong>how to verify property India</strong> searches, remember that no single portal is a complete due-diligence report. Records must agree across departments.</p>

                <div className="not-prose my-8 overflow-hidden rounded-2xl shadow-md">
                    <Image src="/blog/blog45/property-verification-checklist-india.webp" alt="Property verification checklist India, RERA encumbrance land records and lawyer checks" width={800} height={450} className="w-full" />
                </div>

                <h2 id="rera-homebuyer-rights">RERA: Your Most Powerful Tool Against Builder Fraud</h2>
                <p>The Real Estate (Regulation and Development) Act, 2016 requires covered projects to register before marketing and makes promoters disclose project information. It also requires 70 percent of amounts realised from allottees for a project to be deposited in a separate scheduled-bank account for construction and land cost, with withdrawals linked to completion and professional certification.</p>
                <p>If a promoter fails to complete or give possession according to the agreement, Section 18 provides for refund with prescribed interest and compensation when the allottee withdraws, or interest for delay when the allottee stays. The rate is prescribed under applicable rules, so the supplied 10.75 percent should not be treated as a permanent India-wide rate. Section 14 gives an allottee a five-year defect-liability window from possession for specified structural, workmanship, quality, service or promoter-obligation defects, with rectification within 30 days after notice.</p>
                <p>To file, open the official state RERA portal, read its current procedure and submit the required form with the registration number, agreement, receipts, bank proof, correspondence and the remedy requested. A lawyer may not be mandatory for an online filing, but legal advice is sensible for title disputes, multiple forums or a high-value claim.</p>

                <div className="not-prose my-8 overflow-hidden rounded-2xl shadow-md">
                    <Image src="/blog/blog45/rera-homebuyer-rights-india.webp" alt="RERA rights India and how to use RERA against builder fraud" width={800} height={450} className="w-full" />
                </div>

                <div className="not-prose my-8 rounded-2xl border border-amber-200 bg-amber-50 p-6 text-sm leading-6 text-amber-950 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-100">
                    <p className="font-bold">Important correction to the image</p>
                    <p className="mt-2">The RERA rights image supplied with this article says refund interest is 10.75 percent. That is not a fixed national rate in the Act. Applicable state or Union Territory rules and current orders determine the prescribed rate. Verify the rate on the relevant authority&apos;s portal.</p>
                </div>

                <h2 id="real-estate-scam-cases">Real Property Fraud Cases Behind the Warning</h2>
                <div className="not-prose my-6 overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-700">
                    <table className="w-full min-w-[720px] text-left text-sm">
                        <thead className="bg-slate-900 text-white"><tr><th className="p-4">Reported</th><th className="p-4">Case</th><th className="p-4">What authorities or reports alleged</th><th className="p-4">Why it matters</th></tr></thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                            <tr><td className="p-4">April 2026</td><td className="p-4">Earth Infrastructures</td><td className="p-4">ED said about ₹2,024.45 crore was collected from more than 19,425 buyers or investors, with projects incomplete or possession not handed over.</td><td className="p-4">Check delivery history, fund controls and project records.</td></tr>
                            <tr><td className="p-4">August 2025</td><td className="p-4">Krrish Realtech</td><td className="p-4">ED alleged more than ₹500 crore was collected from over 400 plot buyers without valid licences and described attempts to allot the same plots more than once.</td><td className="p-4">Verify licences and the exact plot, not only the developer name.</td></tr>
                            <tr><td className="p-4">September 2025</td><td className="p-4">Gurugram NRI plot</td><td className="p-4">A news report citing police alleged that an NRI&apos;s plot was sold for ₹10.7 crore using a fake gift deed and fictitious relative.</td><td className="p-4">Confirm seller identity and any deed or power directly.</td></tr>
                            <tr><td className="p-4">April 2025</td><td className="p-4">Dombivli illegal buildings</td><td className="p-4">Reports said fraudulent land extracts, plans and approvals were used across 65 illegal buildings, prompting broader MahaRERA certificate checks.</td><td className="p-4">Cross-check approvals with the issuing authority.</td></tr>
                        </tbody>
                    </table>
                </div>
                <p>Amounts above describe agency findings or reported allegations at the cited dates. They are not buyer-loss totals finally adjudicated by a court. That distinction matters in responsible scam reporting.</p>

                <h2 id="already-paid">Already Paid for a Suspicious Property Deal?</h2>
                <ol>
                    <li>Stop further payments and preserve the advertisement, agreement, receipts, bank statements, messages, emails and call details.</li>
                    <li>Write to the builder, seller and bank so the dispute and payment trail are formally recorded.</li>
                    <li>For a recent online transfer induced by fraud, call 1930 and file at <Source href="https://cybercrime.gov.in">cybercrime.gov.in</Source> immediately.</li>
                    <li>Take the evidence to a property lawyer. Depending on the facts, options may include the state RERA authority, police or EOW, consumer commission, civil court or insolvency process.</li>
                    <li>Follow the <Link href="/blog/got-scammed-online-india-what-to-do">already paid fraud response guide</Link> and do not pay a recovery agent who promises guaranteed results.</li>
                </ol>

                <h2 id="instagram-reel-script">30 Second Instagram Reel Script</h2>
                <div className="not-prose my-6 space-y-3 rounded-2xl bg-slate-950 p-6 text-sm text-slate-100">
                    <p><strong className="text-white">0 to 4 sec, hook:</strong> &quot;That dream flat may already be sold to someone else.&quot; Show a SOLD sign, then a second agreement.</p>
                    <p><strong className="text-white">4 to 10 sec:</strong> &quot;Property scams use fake builders, copied RERA numbers, forged deeds and farm land sold as residential plots.&quot; Flash four red warning labels.</p>
                    <p><strong className="text-white">10 to 21 sec:</strong> &quot;Before paying even a token, check the official state RERA entry, land title, encumbrance record, builder company and local approvals. Use your own property lawyer.&quot; Show the checklist image with quick zooms.</p>
                    <p><strong className="text-white">21 to 26 sec:</strong> &quot;Never pay cash or a personal account. Pressure and a too-good price are danger signs.&quot; Show STOP PAYMENT.</p>
                    <p><strong className="text-white">26 to 30 sec, CTA:</strong> &quot;Save this checklist and send it to anyone buying a flat or plot. Follow RakshaAI for scam alerts.&quot; End on the RakshaAI logo.</p>
                    <p className="pt-2 text-xs text-slate-400"><strong>Caption:</strong> A brochure is not proof. Verify every record before your first property payment. #RealEstateScam #PropertyFraud #RERA #HomeBuyer #RakshaAI</p>
                </div>

                <h2 id="frequently-asked-questions">Frequently Asked Questions</h2>
                {faqs.map((faq) => (
                    <div key={faq.question} className="not-prose my-5 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                        <h3 className="text-base font-bold text-gray-900 dark:text-white">{faq.question}</h3>
                        <p className="mt-2 text-sm leading-7 text-gray-600 dark:text-gray-300">{faq.answer}</p>
                    </div>
                ))}

                <h2 id="sources-and-credits">Sources and Credits</h2>
                <ul>
                    <li><Source href="https://www.indiacode.nic.in/handle/123456789/18875">India Code: Real Estate (Regulation and Development) Act, 2016</Source>, including Sections 3, 4, 14 and 18.</li>
                    <li><Source href="https://www.mohua.gov.in/documents/acts-and-policies/rera-YDM4EzMtQWa?pageTitle=Real-Estate-%28Regulation-and-Development%29-Act%2C-2016-%5BRERA%5D">Ministry of Housing and Urban Affairs: official state and Union Territory RERA portal directory</Source>.</li>
                    <li><Source href="https://dilrmp.gov.in/dilrmpold/State-RoR-Web">Digital India Land Records Modernization Programme: state Record of Rights portal directory</Source>.</li>
                    <li><Source href="https://enforcementdirectorate.gov.in/media/press-release-documents/ff7bfc06-17c6-494d-ae86-e7f0f1c78565_Press%20Release%20-Search-Earth%20Infrastructures%20Ltd%20-1142026-3.pdf">Enforcement Directorate, 11 April 2026: Earth Infrastructures investigation release</Source>.</li>
                    <li><Source href="https://enforcementdirectorate.gov.in/sites/default/files/latestnews/Press%20Release%20-%20PC-Krrisn%20Realtech%20and%20Amit%20Katyal-21.8.2025%203.pdf">Enforcement Directorate, 21 August 2025: Krrish Realtech prosecution complaint release</Source>.</li>
                    <li><Source href="https://www.hindustantimes.com/real-estate/nri-duped-in-10-7-crore-gurugram-land-fraud-how-overseas-indians-can-safeguard-their-real-estate-assets-back-home-101756704138896.html">Hindustan Times, 1 September 2025: reported Gurugram NRI plot fraud</Source>.</li>
                    <li><Source href="https://www.hindustantimes.com/cities/mumbai-news/maharera-launches-statewide-oc-verification-after-dombivli-scam-101745522817819.html">Hindustan Times, 25 April 2025: MahaRERA verification after the Dombivli case</Source>.</li>
                    <li><Source href="https://indianexpress.com/article/cities/chandigarh/haryana-cm-forged-letter-fake-rera-approvals-gurugram-residents-fir-real-estate-developers-sohna-tehsildar-patwari-probe-on-10121593/">The Indian Express, 12 July 2025: reported forged approvals allegations in Gurugram</Source>.</li>
                </ul>

                <div className="not-prose mt-10 rounded-2xl bg-gradient-to-r from-red-700 to-slate-950 p-7 text-white">
                    <p className="text-xl font-bold">Verify before the first property payment</p>
                    <p className="mt-2 text-sm text-red-100">Check the builder&apos;s identity and records, then use independent legal due diligence for the property itself.</p>
                    <Link href="/" className="mt-5 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-bold text-red-700 hover:bg-red-50">Open RakshaAI</Link>
                </div>
            </BlogLayout>
        </>
    )
}
