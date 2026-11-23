import type { Metadata } from 'next';
import DefaultLayout from '@/components/DefaultLayout';
import ScamReportResult from '@/components/report/ScamReportResult';
import { getUpiReportBySlug } from '@/lib/data/scam-report-data';
import {
  generateScamReportBreadcrumbSchema,
  generateScamReportDatasetSchema,
  generateScamReportFAQSchema,
  generateScamReportItemListSchema,
  generateScamReportWebPageSchema,
} from '@/lib/seo/report-schemas';
import {
  shouldIndexIdentifierReport,
  getIdentifierReportTitle,
  getIdentifierReportDescription,
} from '@/lib/seo/identifier-report-indexability';
import { jsonLd } from '@/lib/seo/schema';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://rakshaai.co';

type PageProps = {
  params: Promise<{ slug: string }>;
};

function getCanonical(slug: string) {
  return `${SITE_URL}/upi-id-checker/${encodeURIComponent(slug)}`;
}

export const revalidate = 300;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = await getUpiReportBySlug(slug);
  const canonical = getCanonical(slug);
  const indexability = shouldIndexIdentifierReport(data, 'upi', slug);
  const title = getIdentifierReportTitle(data, 'upi', slug);
  const description = getIdentifierReportDescription(data, 'upi', slug);

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'RakshaAI',
      type: 'article',
      locale: 'en_IN',
      images: [
        {
          url: '/opengraph-image',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/opengraph-image'],
      creator: '@RakshaAi247',
    },
    robots: {
      index: indexability.index,
      follow: indexability.follow,
      googleBot: {
        index: indexability.index,
        follow: indexability.follow,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
  };
}

export default async function UpiCheckerPage({ params }: PageProps) {
  const { slug } = await params;
  const data = await getUpiReportBySlug(slug);
  const canonical = getCanonical(slug);
  const indexability = shouldIndexIdentifierReport(data, 'upi', slug);

  // Emit full schema only for indexable, evidence-rich reports.
  // For noindex pages: emit only breadcrumb + minimal WebPage  no Dataset or ItemList
  // to avoid exposing reporter names and raw identifiers in structured data.
  const schemas = data
    ? indexability.index
      ? [
          generateScamReportWebPageSchema(data, canonical),
          generateScamReportDatasetSchema(data, canonical, indexability.maskedIdentifier),
          generateScamReportBreadcrumbSchema(data, canonical),
          generateScamReportFAQSchema(data),
          generateScamReportItemListSchema(data, canonical, indexability.index),
        ].filter(Boolean)
      : [
          generateScamReportWebPageSchema(data, canonical),
          generateScamReportBreadcrumbSchema(data, canonical),
        ].filter(Boolean)
    : [];

  return (
    <>
      {schemas.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(schemas) }}
          key="upi-report-schema"
        />
      )}
      <DefaultLayout>
        <ScamReportResult
          initialData={data}
          kind="upi"
          storageKey="upi-report-result"
          checkerHref="/upi-id-checker"
          slug={slug}
        />
      </DefaultLayout>
    </>
  );
}
