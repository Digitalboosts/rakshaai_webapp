import {
    JsonLd,
    articleSchema,
    organizationSchema,
    websiteSchema,
    type ArticleInput,
    type SchemaNode,
} from '@/lib/seo/schema';

interface StructuredDataProps {
    type?: 'website' | 'organization' | 'article';
    data?: Partial<ArticleInput> | SchemaNode;
}

export default function StructuredData({ type = 'website', data }: StructuredDataProps) {
    if (type === 'organization') {
        return JsonLd({ id: 'structured-data-organization', schema: organizationSchema() });
    }

    if (type === 'article') {
        const articleData = data as Partial<ArticleInput>;
        return JsonLd({
            id: 'structured-data-article',
            schema: articleSchema({
                headline: articleData.headline || 'RakshaAI Security Article',
                description: articleData.description || 'RakshaAI cybersecurity guidance for safer online decisions in India.',
                url: articleData.url || '/',
                datePublished: articleData.datePublished || new Date().toISOString(),
                dateModified: articleData.dateModified,
                image: articleData.image,
                keywords: articleData.keywords,
                section: articleData.section,
                author: articleData.author,
            }),
        });
    }

    return JsonLd({ id: 'structured-data-website', schema: websiteSchema() });
}
