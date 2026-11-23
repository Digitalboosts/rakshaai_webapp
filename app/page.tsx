import type { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n/dictionaries';
import HomePageClient from '@/components/HomePageClient';
import LocalizedLayout from '@/components/LocalizedLayout';
import {
  generateSEOMetadata,
  generateWebApplicationSchema,
  generateFAQPageSchema,
  generateServiceSchema,
  generateHomepageBreadcrumbSchema,
} from '@/lib/seo-utils';
import { jsonLd } from '@/lib/seo/schema';
import type { SitemapEligibleResult } from '@/components/sections/PopularChecksSection';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://rakshaai.co';

async function fetchEligibleSites(): Promise<SitemapEligibleResult[]> {
  try {
    const backendBase = (
      process.env.NEXT_PUBLIC_BACKEND_API_URL ||
      process.env.BACKEND_API_URL ||
      ''
    ).replace(/^['"]+|['"]+$/g, '');

    const apiKey = (
      process.env.TRUSTFINDER_API_KEY ||
      process.env.BACKEND_API_KEY ||
      ''
    ).replace(/^['"]+|['"]+$/g, '');

    if (!backendBase || !apiKey) return [];

    const res = await fetch(`${backendBase}sitemap/eligible/`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', 'x-api-key': apiKey },
      next: { revalidate: 3600 },
    });

    if (!res.ok) return [];
    const json = await res.json();
    return Array.isArray(json?.results) ? json.results : [];
  } catch {
    return [];
  }
}


export async function generateMetadata(): Promise<Metadata> {
  const content = await getDictionary('en', 'home');
  const { metadata } = content;

  return generateSEOMetadata({
    title: metadata.title,
    description: metadata.description,
    keywords: [
      'scam detector',
      'website safety checker',
      'website scam checker',
      'UPI fraud checker',
      'phone number scam checker',
      'fake website checker',
      'phishing checker',
      'fraud intelligence India',
      'AI trust intelligence',
    ],
    canonical: SITE_URL,
    locale: 'en_IN',
  });
}

export default async function Home() {
  const [content, popularChecks] = await Promise.all([
    getDictionary('en', 'home'),
    fetchEligibleSites(),
  ]);

  const pageSchemas = [
    generateWebApplicationSchema(),
    generateFAQPageSchema(),
    generateServiceSchema(),
    generateHomepageBreadcrumbSchema(),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(pageSchemas) }}
        key="homepage-schemas"
      />

      <LocalizedLayout content={{ navbar: content.navbar, footer: content.footer }}>
        <HomePageClient content={content} popularChecks={popularChecks} />
      </LocalizedLayout>
    </>
  );
}
