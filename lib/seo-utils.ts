import { Metadata } from 'next';
import {
  breadcrumbListSchema,
  faqPageSchema,
  jsonLd,
  organizationRef,
  organizationSchema,
  softwareApplicationSchema,
  websiteSchema,
  type SchemaNode,
} from '@/lib/seo/schema';

interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  locale?: string;
  alternateLocales?: { locale: string; url: string }[];
}

export function generateSEOMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords,
    canonical,
    ogImage = 'https://rakshaai.co/opengraph-image',
    ogType = 'website',
    locale = 'en_IN',
    alternateLocales = [],
  } = config;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
      languages: alternateLocales.reduce((acc, { locale, url }) => {
        acc[locale] = url;
        return acc;
      }, {} as Record<string, string>),
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'RakshaAI',
      locale,
      type: ogType,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@RakshaAi247',
      title,
      description,
      images: [ogImage],
      creator: '@RakshaAi247',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export interface Organization {
  '@context': string;
  '@type': string;
  '@id'?: string;
  name: string;
  alternateName?: string | string[];
  url: string;
  logo: string | {
    '@type': string;
    '@id'?: string;
    url: string;
  };
  description: string;
  foundingDate?: string;
  slogan?: string;
  address?: {
    '@type': string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint?: {
    '@type': string;
    contactType: string;
    email?: string;
    availableLanguage?: string[];
    areaServed?: string;
  };
  sameAs: string[];
}

export interface WebSite {
  '@context': string;
  '@type': string;
  '@id'?: string;
  name: string;
  alternateName?: string;
  url: string;
  description: string;
  inLanguage?: string[];
  potentialAction?: Array<{
    '@type': string;
    target?: {
      '@type': string;
      urlTemplate: string;
    };
    'query-input'?: string;
    interactionType?: string;
    userInteractionCount?: string;
  }> | {
    '@type': string;
    target?: {
      '@type': string;
      urlTemplate: string;
    };
    'query-input'?: string;
  };
}

export interface BreadcrumbList {
  '@context': string;
  '@type': string;
  itemListElement: {
    '@type': string;
    position: number;
    name: string;
    item?: string;
  }[];
}

export function generateOrganizationSchema(): Organization {
  return organizationSchema() as unknown as Organization;
}

export function generateWebSiteSchema(): WebSite {
  return websiteSchema() as unknown as WebSite;
}

export function generateBreadcrumbSchema(items: { name: string; url?: string }[]): BreadcrumbList {
  return breadcrumbListSchema(items) as unknown as BreadcrumbList;
}

export function generateJSONLD(...schemas: (Organization | WebSite | BreadcrumbList | object)[]): string {
  return jsonLd((schemas.length === 1 ? schemas[0] : schemas) as unknown as SchemaNode | SchemaNode[]);
}

// New schema types for advanced SEO
export interface WebApplication {
  '@context': string;
  '@type': string;
  '@id'?: string;
  name: string;
  description: string;
  url: string;
  applicationCategory: string;
  operatingSystem: string;
  browserRequirements: string;
  offers: {
    '@type': string;
    price: string;
    priceCurrency: string;
  };
  featureList: string[];
  screenshot?: string;
  softwareVersion: string;
  publisher?: object;
}

export interface FAQPage {
  '@context': string;
  '@type': string;
  mainEntity: Array<{
    '@type': string;
    name: string;
    acceptedAnswer: {
      '@type': string;
      text: string;
    };
  }>;
}

export interface Service {
  '@context': string;
  '@type': string;
  '@id'?: string;
  name?: string;
  serviceType: string;
  provider: {
    '@type': string;
    name: string;
  };
  areaServed: {
    '@type': string;
    name: string;
  };
  hasOfferCatalog: {
    '@type': string;
    name: string;
    itemListElement: Array<{
      '@type': string;
      itemOffered: {
        '@type': string;
        name: string;
      };
    }>;
  };
}

export function generateWebApplicationSchema(): WebApplication {
  return {
    ...softwareApplicationSchema({
      name: 'RakshaAI Scam Checker',
      url: '/',
      description: 'Free AI-powered tool to check websites, UPI IDs, and phone numbers for scams in India. Also provides business trust verification with Raksha Trusted Badges.',
      featureList: [
        'Website safety checker',
        'UPI ID fraud detection',
        'Phone number scam verification',
        'India-specific fraud signal database',
        'Business trust verification',
        'Raksha Trusted Badge for businesses',
        'GST & Aadhaar document verification',
      ],
    }),
    screenshot: {
      '@type': 'ImageObject',
      url: 'https://rakshaai.co/opengraph-image',
      width: 1200,
      height: 630,
    },
    softwareVersion: '2.0',
  } as unknown as WebApplication;
}

export function generateFAQPageSchema(): FAQPage {
  return faqPageSchema([
      {
        question: 'Are RakshaAI consumer checks free?',
        answer: 'Yes. Individuals can currently run supported checks without a paid subscription. Business verification and future enterprise services may be paid separately.'
      },
      {
        question: 'How accurate is your scam detection?',
        answer: 'RakshaAI analyzes multiple risk signals for each check  including domain data, SSL status, public reviews, and community-submitted reports  and returns a trust score as guidance. No automated tool is 100% accurate; always combine results with your own judgment before making financial decisions.'
      },
      {
        question: 'Do I need to create an account?',
        answer: 'Yes. A free RakshaAI account and secure login are required before running supported website, UPI ID, phone number or document checks.'
      },
      {
        question: 'What makes RakshaAI different from global tools?',
        answer: 'RakshaAI is built specifically for India with UPI fraud detection, digital arrest scam detection, India-specific fraud patterns, and business trust verification with Raksha Trust Badges.'
      },
      {
        question: 'What if I\'ve already been scammed?',
        answer: '1) Immediately call Cybercrime Helpline 1930, 2) Report to your bank/UPI app, 3) File complaint at cybercrime.gov.in, 4) Report the scam on RakshaAI to warn others, 5) Block the scammer\'s number/UPI ID. Time is critical - report within 24 hours for best recovery chances.'
      },
      {
        question: 'How can my business get verified by RakshaAI?',
        answer: 'Businesses can get a Raksha Trusted Badge by completing our verification process: submit your business details, verify GST registration, complete Aadhaar KYC, and upload supporting documents. Once approved, your business displays a trust certificate visible to every user who checks your URL on RakshaAI. Verification is ₹299/month.'
      },
      {
        question: 'What is the Raksha Trust Badge for businesses?',
        answer: 'The Raksha Trust Badge is a verification certificate displayed when users check your business URL on RakshaAI. It shows GST verification, Aadhaar KYC confirmation, and document verification status  instantly building customer trust. Verified businesses see more conversions as customers can confirm legitimacy before transacting.'
      }
    ]) as unknown as FAQPage;
}

export function generateServiceSchema(): Service {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://rakshaai.co/#service',
    name: 'RakshaAI Scam Detection Service',
    serviceType: 'Scam Detection, Fraud Prevention, and Business Verification',
    provider: {
      '@type': 'Organization',
      '@id': 'https://rakshaai.co/#organization',
      name: 'RakshaAI',
    } as unknown as { '@type': string; name: string },
    areaServed: {
      '@type': 'Country',
      name: 'India'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'RakshaAI Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Website Safety Checker'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'UPI ID Fraud Detection'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Phone Number Scam Verification'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Business Trust Verification - Raksha Trusted Badge'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'GST & Aadhaar Document Verification for Businesses'
          }
        }
      ]
    }
  };
}

export function generateHomepageBreadcrumbSchema(): BreadcrumbList {
  return breadcrumbListSchema([{ name: 'Home', url: '/' }]) as unknown as BreadcrumbList;
}
