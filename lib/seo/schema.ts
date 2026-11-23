import React, { type ReactNode } from 'react';

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://rakshaai.co').replace(/\/$/, '');
export const BRAND_NAME = 'RakshaAI';
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const SOFTWARE_ID = `${SITE_URL}/#software`;

type SchemaValue = string | number | boolean | SchemaNode | SchemaValue[] | null | undefined;
export type SchemaNode = {
  '@context'?: 'https://schema.org';
  '@type': string | string[];
  '@id'?: string;
  [key: string]: SchemaValue;
};

export type SchemaGraph = {
  '@context': 'https://schema.org';
  '@graph': SchemaNode[];
};

export type QuestionAnswer = {
  question: string;
  answer: string;
};

export type BreadcrumbItem = {
  name: string;
  url?: string;
};

export type PersonInput = {
  name: string;
  url?: string;
  jobTitle?: string;
  image?: string;
  sameAs?: string[];
  description?: string;
  knowsAbout?: string[];
};

export type ArticleInput = {
  type?: 'Article' | 'BlogPosting' | 'NewsArticle';
  headline: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author?: SchemaNode;
  keywords?: string[];
  section?: string;
  wordCount?: number;
};

export function absoluteUrl(path = '') {
  if (!path) return SITE_URL;
  if (path.startsWith('http')) return path;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

export function organizationRef(): SchemaNode {
  return {
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
  };
}

export function websiteRef(): SchemaNode {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
  };
}

export function softwareRef(): SchemaNode {
  return {
    '@type': 'SoftwareApplication',
    '@id': SOFTWARE_ID,
  };
}

export function organizationSchema(): SchemaNode {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: BRAND_NAME,
    legalName: 'EHATECH SERVICES PRIVATE LIMITED',
    alternateName: ['RakshaAI Scam Checker', 'Raksha AI', 'RakshaAI India'],
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      '@id': `${SITE_URL}/#logo`,
      url: absoluteUrl('/logo.png'),
      width: 512,
      height: 512,
    },
    description: "India's AI-powered cybersecurity and scam detection platform for website safety checks, UPI fraud detection, phone scam reports, and business trust verification.",
    foundingDate: '2024',
    slogan: 'Safer India',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: 10,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'The Platinum Towers, Office No. 27, Old Mundhwa Road, Kharadi',
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
      postalCode: '411014',
      addressCountry: 'IN',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'Customer Support',
        email: 'support@rakshaai.co',
        areaServed: 'IN',
        availableLanguage: ['en-IN'],
      },
      {
        '@type': 'ContactPoint',
        contactType: 'Technical Support',
        email: 'support@rakshaai.co',
        areaServed: 'IN',
      },
    ],
    knowsAbout: [
      'Cybersecurity',
      'Scam Detection',
      'Phishing',
      'UPI Fraud',
      'Online Fraud Prevention',
      'Digital Arrest Scam',
      'Investment Scams',
      'Phone Scams',
      'Website Safety',
      'Trust Score Analysis',
      'Business Verification India',
      'Cybercrime India',
    ],
    areaServed: {
      '@type': 'Country',
      name: 'India',
      sameAs: 'https://en.wikipedia.org/wiki/India',
    },
    sameAs: [
      'https://play.google.com/store/apps/details?id=com.rakshaai_app',
      'https://twitter.com/RakshaAi247',
      'https://www.instagram.com/rakshaai.official',
      'https://www.linkedin.com/company/rakshaai',
      'https://www.facebook.com/profile.php?id=61586285426338',
    ],
    about: [
      {
        '@type': 'Thing',
        name: 'Online Scam Detection',
        sameAs: 'https://en.wikipedia.org/wiki/Internet_fraud',
      },
      {
        '@type': 'Thing',
        name: 'Phishing',
        sameAs: 'https://en.wikipedia.org/wiki/Phishing',
      },
      {
        '@type': 'Thing',
        name: 'UPI Fraud',
        sameAs: 'https://en.wikipedia.org/wiki/Unified_Payments_Interface',
      },
      {
        '@type': 'Thing',
        name: 'Cybersecurity in India',
        sameAs: 'https://en.wikipedia.org/wiki/Cybersecurity_in_India',
      },
    ],
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      name: 'DPIIT Startup Recognition',
      description: 'Recognized as a startup by the Department for Promotion of Industry and Internal Trade (DPIIT), Government of India. Certificate No: DIPP203819. Industry: AI. Sector: NLP.',
      credentialCategory: 'Government Recognition',
      recognizedBy: {
        '@type': 'GovernmentOrganization',
        name: 'Department for Promotion of Industry and Internal Trade (DPIIT)',
        alternateName: 'DPIIT',
        url: 'https://dpiit.gov.in',
        parentOrganization: {
          '@type': 'GovernmentOrganization',
          name: 'Government of India',
        },
      },
    },
    mentions: [
      {
        '@type': 'GovernmentOrganization',
        name: 'Indian Cyber Crime Coordination Centre (I4C)',
        sameAs: 'https://www.mha.gov.in/en/cybersafety',
      },
      {
        '@type': 'GovernmentOrganization',
        name: 'CERT-In',
        sameAs: 'https://www.cert-in.org.in',
      },
      {
        '@type': 'GovernmentOrganization',
        name: 'Ministry of Electronics and Information Technology',
        sameAs: 'https://www.meity.gov.in',
      },
    ],
  };
}

export function searchActionSchema(): SchemaNode {
  return {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/check?query={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  };
}

export function websiteSchema(): SchemaNode {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: BRAND_NAME,
    alternateName: `${BRAND_NAME} Scam Checker`,
    url: SITE_URL,
    description: 'Check suspicious websites, UPI IDs, and phone numbers for scam signals in India.',
    inLanguage: 'en-IN',
    publisher: organizationRef(),
    potentialAction: searchActionSchema(),
  };
}

export function softwareApplicationSchema(input?: {
  name?: string;
  url?: string;
  description?: string;
  featureList?: string[];
}): SchemaNode {
  return {
    '@context': 'https://schema.org',
    '@type': ['SoftwareApplication', 'WebApplication'],
    '@id': input?.url ? `${absoluteUrl(input.url)}#software` : SOFTWARE_ID,
    name: input?.name || `${BRAND_NAME} Scam Checker`,
    url: absoluteUrl(input?.url || '/'),
    description: input?.description || 'Free AI-powered scam detection software for checking websites, UPI IDs, and phone numbers in India.',
    applicationCategory: 'SecurityApplication',
    operatingSystem: 'Android, iOS, Web',
    browserRequirements: 'Modern web browser with JavaScript enabled',
    inLanguage: 'en-IN',
    publisher: organizationRef(),
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
    },
    featureList: input?.featureList || [
      'Website safety checker',
      'UPI ID fraud detection',
      'Phone number scam verification',
      'Community scam reporting',
      'India-focused cybercrime guidance',
    ],
  };
}

export function breadcrumbListSchema(items: BreadcrumbItem[]): SchemaNode {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.url ? { item: absoluteUrl(item.url) } : {}),
    })),
  };
}

export function faqPageSchema(items: QuestionAnswer[]): SchemaNode {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function personSchema(input: PersonInput): SchemaNode {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': input.url ? `${absoluteUrl(input.url)}#person` : `${SITE_URL}/people/${encodeURIComponent(input.name.toLowerCase().replace(/\s+/g, '-'))}#person`,
    name: input.name,
    url: input.url ? absoluteUrl(input.url) : undefined,
    jobTitle: input.jobTitle,
    image: input.image ? absoluteUrl(input.image) : undefined,
    worksFor: organizationRef(),
    sameAs: input.sameAs,
    ...(input.description ? { description: input.description } : {}),
    ...(input.knowsAbout ? { knowsAbout: input.knowsAbout } : {}),
  };
}

export function articleSchema(input: ArticleInput): SchemaNode {
  const url = absoluteUrl(input.url);

  return {
    '@context': 'https://schema.org',
    '@type': input.type || 'Article',
    '@id': `${url}#article`,
    headline: input.headline,
    description: input.description,
    url,
    image: absoluteUrl(input.image || '/opengraph-image'),
    datePublished: input.datePublished,
    dateModified: input.dateModified || input.datePublished,
    inLanguage: 'en-IN',
    author: input.author || organizationRef(),
    publisher: organizationRef(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
    },
    isPartOf: websiteRef(),
    articleSection: input.section,
    keywords: input.keywords,
    ...(input.wordCount ? { wordCount: input.wordCount } : {}),
  };
}

export function blogPostingSchema(input: Omit<ArticleInput, 'type'>): SchemaNode {
  return articleSchema({ ...input, type: 'BlogPosting' });
}

export function webPageSchema(input: {
  name: string;
  description: string;
  url: string;
  mainEntity?: SchemaNode;
  type?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'FAQPage' | 'CollectionPage';
}): SchemaNode {
  const url = absoluteUrl(input.url);

  return {
    '@context': 'https://schema.org',
    '@type': input.type || 'WebPage',
    '@id': `${url}#webpage`,
    name: input.name,
    description: input.description,
    url,
    inLanguage: 'en-IN',
    isPartOf: websiteRef(),
    publisher: organizationRef(),
    mainEntity: input.mainEntity,
  };
}

export type HowToStep = {
  name: string;
  text: string;
  url?: string;
  image?: string;
};

/**
 * @deprecated Google removed HowTo rich results in September 2023.
 * Use itemListSchema() instead for step-by-step content.
 */
export function howToSchema(_input: {
  name: string;
  description: string;
  url: string;
  steps: HowToStep[];
  totalTime?: string;
}): SchemaNode {
  if (process.env.NODE_ENV === 'development') {
    console.warn('[schema] howToSchema() is deprecated  Google removed HowTo rich results Sept 2023. Use ItemList instead.');
  }
  return organizationRef();
}

export function itemListSchema(input: {
  name: string;
  description?: string;
  url: string;
  items: Array<{ name: string; description?: string; url?: string }>;
}): SchemaNode {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${absoluteUrl(input.url)}#steps`,
    name: input.name,
    description: input.description,
    numberOfItems: input.items.length,
    itemListElement: input.items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      ...(item.description ? { description: item.description } : {}),
      ...(item.url ? { url: absoluteUrl(item.url) } : {}),
    })),
  };
}

export function definedTermSchema(input: {
  name: string;
  description: string;
  url: string;
  inDefinedTermSet?: string;
}): SchemaNode {
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    '@id': `${absoluteUrl(input.url)}#term`,
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.url),
    inDefinedTermSet: input.inDefinedTermSet || `${SITE_URL}/scams#scam-types`,
  };
}

export function speakableSchema(cssSelectors: string[]): SchemaNode {
  return {
    '@context': 'https://schema.org',
    '@type': 'SpeakableSpecification',
    cssSelector: cssSelectors,
  };
}

export function claimReviewSchema(input: {
  url: string;
  claimReviewed: string;
  reviewRating: 'TRUE' | 'FALSE' | 'MISLEADING' | 'UNVERIFIED';
  datePublished: string;
  author?: SchemaNode;
}): SchemaNode {
  const ratingMap = {
    TRUE: { ratingValue: 5, alternateName: 'True' },
    FALSE: { ratingValue: 1, alternateName: 'False' },
    MISLEADING: { ratingValue: 2, alternateName: 'Misleading' },
    UNVERIFIED: { ratingValue: 3, alternateName: 'Unverified' },
  };

  return {
    '@context': 'https://schema.org',
    '@type': 'ClaimReview',
    url: absoluteUrl(input.url),
    claimReviewed: input.claimReviewed,
    datePublished: input.datePublished,
    author: input.author || organizationRef(),
    reviewRating: {
      '@type': 'Rating',
      ratingValue: ratingMap[input.reviewRating].ratingValue,
      bestRating: 5,
      worstRating: 1,
      alternateName: ratingMap[input.reviewRating].alternateName,
    },
  };
}

/** @deprecated Google retired SpecialAnnouncement rich results on 2025-07-31. Do not use. */
export function specialAnnouncementSchema(input: {
  name: string;
  text: string;
  url: string;
  datePosted: string;
  expires?: string;
  category?: string;
}): SchemaNode {
  console.warn('[schema] specialAnnouncementSchema() is deprecated  Google retired SpecialAnnouncement rich results July 31, 2025. Remove all calls to this function.');
  return {
    '@context': 'https://schema.org',
    '@type': 'SpecialAnnouncement',
    '@id': `${absoluteUrl(input.url)}#announcement`,
    name: input.name,
    text: input.text,
    url: absoluteUrl(input.url),
    datePosted: input.datePosted,
    ...(input.expires ? { expires: input.expires } : {}),
    category: input.category || 'https://www.wikidata.org/wiki/Q81068910',
    announcementLocation: {
      '@type': 'CivicStructure',
      name: 'India',
    },
    author: organizationRef(),
  };
}

export function serviceSchema(input: {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
  areaServed?: string;
  price?: string;
  priceCurrency?: string;
}): SchemaNode {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${absoluteUrl(input.url)}#service`,
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.url),
    serviceType: input.serviceType || 'Cybersecurity',
    provider: organizationRef(),
    areaServed: input.areaServed || 'IN',
    ...(input.price !== undefined ? {
      offers: {
        '@type': 'Offer',
        price: input.price,
        priceCurrency: input.priceCurrency || 'INR',
        availability: 'https://schema.org/InStock',
      },
    } : {}),
  };
}

/** @deprecated  `about` and `mentions` are now on organizationSchema(). This stub exists only for import compatibility. */
export function knowledgeGraphEntitySchema(): SchemaNode {
  return organizationRef();
}

function cleanSchemaValue(value: SchemaValue): SchemaValue {
  if (Array.isArray(value)) {
    const cleaned = value
      .map((item) => cleanSchemaValue(item))
      .filter((item) => item !== undefined && item !== null && !(Array.isArray(item) && item.length === 0));
    return cleaned.length ? cleaned : undefined;
  }

  if (value && typeof value === 'object') {
    const node = value as SchemaNode;
    const nodeTypes = Array.isArray(node['@type']) ? node['@type'] : [node['@type']];

    if (
      nodeTypes.includes('Organization') &&
      node['@id'] !== ORGANIZATION_ID &&
      (node.name === BRAND_NAME || node.legalName === BRAND_NAME || node.url === SITE_URL)
    ) {
      return organizationRef();
    }

    const entries = Object.entries(node)
      .map(([key, nested]) => [key, cleanSchemaValue(nested as SchemaValue)] as const)
      .filter(([, nested]) => nested !== undefined && nested !== null);
    return Object.fromEntries(entries) as SchemaNode;
  }

  return value === '' ? undefined : value;
}

export function cleanSchema<T>(schema: T): T {
  return cleanSchemaValue(schema as SchemaValue) as T;
}

function schemaWithoutContext(schema: SchemaNode): SchemaNode {
  const cleaned = cleanSchema(schema);
  const { '@context': _context, ...node } = cleaned;
  return node;
}

export function schemaGraph(schemas: SchemaNode[]): SchemaGraph {
  return {
    '@context': 'https://schema.org',
    '@graph': schemas.map(schemaWithoutContext),
  };
}

export function jsonLd(schema: unknown) {
  const raw = Array.isArray(schema)
    ? JSON.stringify(schemaGraph(schema as SchemaNode[]))
    : JSON.stringify(cleanSchema(schema));
  // Escape HTML-unsafe chars so the JSON never breaks out of <script> context
  return raw.replace(/</g, '\\u003c').replace(/>/g, '\\u003e').replace(/&/g, '\\u0026');
}

export function JsonLd({ schema, id }: { schema: SchemaNode | SchemaNode[]; id?: string }): ReactNode {
  return React.createElement('script', {
    id,
    type: 'application/ld+json',
    dangerouslySetInnerHTML: { __html: jsonLd(schema) },
  });
}
