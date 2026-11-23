import type { Metadata } from 'next';
import { getAboutDictionary } from '@/lib/i18n/dictionaries';
import AboutPageContent from '@/components/AboutPageContent';
import LocalizedLayout from '@/components/LocalizedLayout';
import { jsonLd, webPageSchema, breadcrumbListSchema } from '@/lib/seo/schema';

export async function generateMetadata(): Promise<Metadata> {
    const content = await getAboutDictionary('en');
    const { metadata } = content;

    return {
        title: metadata.title,
        description: metadata.description,
        alternates: {
            canonical: 'https://rakshaai.co/about',
        },
        openGraph: {
            title: metadata.openGraph.title,
            description: metadata.openGraph.description,
            url: 'https://rakshaai.co/about',
            type: 'website',
            siteName: 'RakshaAI',
            images: [
                {
                    url: '/opengraph-image',
                    width: 1200,
                    height: 630,
                    alt: 'About RakshaAI - India\'s Free Scam Detection Platform',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: metadata.openGraph.title,
            description: metadata.openGraph.description,
            images: ['/opengraph-image'],
        },
    };
}

const structuredData = jsonLd([
    webPageSchema({
        name: 'About RakshaAI - India\'s Free Scam Detection Platform',
        description: 'Learn about RakshaAI, India\'s AI-powered platform to detect scams, verify businesses, and protect millions of Indians from online fraud.',
        url: '/about',
        type: 'AboutPage',
        mainEntity: {
            '@type': 'Organization',
            '@id': 'https://rakshaai.co/#organization',
        },
    }),
    breadcrumbListSchema([
        { name: 'Home', url: '/' },
        { name: 'About', url: '/about' },
    ]),
]);

export default async function AboutPage() {
    const content = await getAboutDictionary('en');

    return (
        <LocalizedLayout content={{ navbar: content.navbar, footer: content.footer }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: structuredData }}
            />
            <AboutPageContent content={content} />
        </LocalizedLayout>
    );
}
