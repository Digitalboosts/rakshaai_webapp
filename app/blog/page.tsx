import { Metadata } from 'next'
import BlogPageClient from '@/components/BlogPageClient'
import { breadcrumbListSchema, webPageSchema, jsonLd } from '@/lib/seo/schema'

// SEO Metadata for main blog page
export const metadata: Metadata = {
    title: { absolute: 'Scam Prevention and Fraud Intelligence | RakshaAI Blog' },
    description: 'Consumer scam safety guides plus research on AI fraud detection, domain intelligence, document forgery signals, APIs and trust infrastructure.',
    keywords: 'scam prevention india, AI fraud detection, domain intelligence, document forgery detection, fraud detection API, trust and safety infrastructure',
    authors: [{ name: 'Rabinarayan Pradhan', url: 'https://rakshaai.co/author/rabinarayan-pradhan' }],
    openGraph: {
        title: 'Scam Prevention and Fraud Intelligence | RakshaAI Blog',
        description: 'Consumer scam guides and technology research on fraud detection, domain intelligence, document signals and trust infrastructure.',
        url: 'https://rakshaai.co/blog',
        type: 'website',
    siteName: 'RakshaAI',
        images: [
            {
                url: '/opengraph-image',
                width: 1200,
                height: 630,
                alt: 'RakshaAI Security Blog',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@RakshaAi247',
        title: 'Scam Prevention and Fraud Intelligence | RakshaAI Blog',
        description: 'Consumer scam guides plus fraud detection, domain intelligence and trust infrastructure research from RakshaAI.',
        images: ['/opengraph-image'],
    },
    alternates: {
        canonical: 'https://rakshaai.co/blog'
    }
}

const blogPageSchemas = [
    webPageSchema({
        name: 'Scam Prevention Guides for India | RakshaAI Blog',
        description: 'Learn how online scams work in India  UPI fraud, digital arrest, fake websites, job scams, and crypto fraud. Free guides with step-by-step verification and recovery advice.',
        url: '/blog',
    }),
    breadcrumbListSchema([
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' },
    ]),
]

export default function BlogPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLd(blogPageSchemas) }}
            />
            <BlogPageClient />
        </>
    )
}
