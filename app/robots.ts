import { MetadataRoute } from 'next'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://rakshaai.co'

const PUBLIC_PATHS = [
  '/',
  '/check',
  '/check/*',
  '/about',
  '/contact',
  '/faq',
  '/blog',
  '/blog/*',
  '/author',
  '/author/*',
  '/upi-id-checker',
  '/upi-id-checker/*',
  '/phone-number-checker',
  '/phone-number-validator/*',
  '/website-safety-checker',
  '/scams',
  '/scams/*',
  '/methodology',
  '/scam-intelligence',
  '/compare/rakshaai-verified-vs-gstin',
  '/business-onboarding',
  '/business-verification',
  '/prevention-tips',
  '/safety-guide',
  '/scam-alerts',
  '/trust-certification',
  '/trust-certification/apply',
  '/trust-certification/how-it-works',
  '/trust-certification/verified-businesses',
  '/trust-certification/badge-guide',
  '/trust-certification/verification-standards',
  '/data-sources',
  '/editorial-policy',
  '/report-correction',
  '/privacy-policy',
  '/terms-of-service',
]

const RESTRICTED_PATHS = [
  '/admin/*',
  '/api/*',
  '/test/*',
  '/control-people/*',
  '/business-dashboard/*',
  '/business-login',
  '/history',
]

// AI knowledge crawlers get full access to educational and citation-worthy content
const AI_KNOWLEDGE_PATHS = [
  '/',
  '/check',
  '/website-safety-checker',
  '/upi-id-checker',
  '/upi-id-checker/*',
  '/phone-number-checker',
  '/phone-number-validator/*',
  '/blog',
  '/blog/*',
  '/scams',
  '/scams/*',
  '/methodology',
  '/scam-intelligence',
  '/compare/rakshaai-verified-vs-gstin',
  '/faq',
  '/about',
  '/prevention-tips',
  '/safety-guide',
  '/scam-alerts',
  '/trust-certification',
  '/trust-certification/apply',
  '/trust-certification/how-it-works',
  '/trust-certification/verified-businesses',
  '/trust-certification/badge-guide',
  '/trust-certification/verification-standards',
  '/business-verification',
  '/privacy-policy',
  '/llms.txt',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default rule for all crawlers
      {
        userAgent: '*',
        allow: PUBLIC_PATHS,
        disallow: RESTRICTED_PATHS,
      },

      // Google  full access for maximum indexing
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: RESTRICTED_PATHS,
      },

      // Google Image crawler
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
        disallow: RESTRICTED_PATHS,
      },

      // Bing  full access
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: RESTRICTED_PATHS,
      },

      // DuckDuckGo
      {
        userAgent: 'DuckDuckBot',
        allow: '/',
        disallow: RESTRICTED_PATHS,
      },

      // OpenAI crawlers  GPT Search and training
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'OAI-SearchBot'],
        allow: AI_KNOWLEDGE_PATHS,
        disallow: RESTRICTED_PATHS,
      },

      // Anthropic (Claude) crawlers
      {
        userAgent: ['ClaudeBot', 'Claude-Web', 'Anthropic-AI', 'anthropic-ai'],
        allow: AI_KNOWLEDGE_PATHS,
        disallow: RESTRICTED_PATHS,
      },

      // Perplexity AI
      {
        userAgent: ['PerplexityBot', 'Perplexity-User'],
        allow: AI_KNOWLEDGE_PATHS,
        disallow: RESTRICTED_PATHS,
      },

      // Google AI (AI Overviews / Bard / Gemini crawlers)
      {
        userAgent: ['Google-Extended', 'GoogleOther'],
        allow: AI_KNOWLEDGE_PATHS,
        disallow: RESTRICTED_PATHS,
      },

      // Meta AI
      {
        userAgent: ['Meta-ExternalAgent', 'Meta-ExternalFetcher', 'facebookexternalhit'],
        allow: AI_KNOWLEDGE_PATHS,
        disallow: RESTRICTED_PATHS,
      },

      // Apple  Siri and Apple Intelligence
      {
        userAgent: 'Applebot',
        allow: '/',
        disallow: RESTRICTED_PATHS,
      },

      // Cohere AI
      {
        userAgent: 'cohere-ai',
        allow: AI_KNOWLEDGE_PATHS,
        disallow: RESTRICTED_PATHS,
      },

      // Common Crawl  used for AI training datasets
      {
        userAgent: 'CCBot',
        allow: AI_KNOWLEDGE_PATHS,
        disallow: RESTRICTED_PATHS,
      },

      // Yandex
      {
        userAgent: 'YandexBot',
        allow: PUBLIC_PATHS,
        disallow: RESTRICTED_PATHS,
      },

      // Bytedance / TikTok
      {
        userAgent: 'Bytespider',
        allow: AI_KNOWLEDGE_PATHS,
        disallow: RESTRICTED_PATHS,
      },

      // SEO audit tools  allow for commercial backlink database visibility
      {
        userAgent: 'AhrefsBot',
        allow: PUBLIC_PATHS,
        disallow: RESTRICTED_PATHS,
      },
      {
        userAgent: 'SemrushBot',
        allow: PUBLIC_PATHS,
        disallow: RESTRICTED_PATHS,
      },
    ],
    sitemap: [`${SITE_URL}/sitemap.xml`, `${SITE_URL}/image-sitemap.xml`],
    host: SITE_URL,
  }
}
