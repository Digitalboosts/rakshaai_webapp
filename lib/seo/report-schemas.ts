import type { ScamReportPageData } from '@/types/scam-report';
import {
  SITE_URL,
  breadcrumbListSchema,
  faqPageSchema,
  organizationRef,
  webPageSchema,
  websiteRef,
  type SchemaNode,
} from '@/lib/seo/schema';

function reportLabel(data: ScamReportPageData) {
  return data.kind === 'phone' ? 'Phone Number' : 'UPI ID';
}

function checkerUrl(data: ScamReportPageData) {
  return data.kind === 'phone'
    ? `${SITE_URL}/phone-number-checker`
    : `${SITE_URL}/upi-id-checker`;
}

export function generateScamReportWebPageSchema(data: ScamReportPageData, pageUrl: string) {
  const label = reportLabel(data);

  return webPageSchema({
    url: pageUrl,
    name: `${label} Security Report`,
    description: `RakshaAI community scam report summary for a ${label.toLowerCase()}. Includes report count, safety status, and fraud reporting guidance for India.`,
    mainEntity: {
      '@type': 'Thing',
      name: `${label} scam report`,
      description: `${label} fraud and scam report intelligence for India`,
    },
  }) as SchemaNode;
}

/**
 * Dataset schema. Uses maskedIdentifier (always present from indexability helper)
 * so raw sensitive identifiers are not emitted in structured data for any report page.
 *
 * maskedIdentifier defaults to a generic label if not provided, which keeps
 * the function backward-compatible for callers that don't pass it.
 */
export function generateScamReportDatasetSchema(
  data: ScamReportPageData,
  pageUrl: string,
  maskedIdentifier?: string,
) {
  const label = reportLabel(data);
  const displayValue = maskedIdentifier || `a ${label.toLowerCase()}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    '@id': `${pageUrl}#dataset`,
    name: `${label} scam reports`,
    description: `${data.totalReports} community report${data.totalReports === 1 ? '' : 's'} associated with ${displayValue}.`,
    url: pageUrl,
    creator: organizationRef(),
    publisher: organizationRef(),
    isPartOf: websiteRef(),
    mainEntity: {
      '@type': 'Thing',
      name: displayValue,
    },
    temporalCoverage: data.updatedAt,
    spatialCoverage: {
      '@type': 'Country',
      name: 'India',
    },
  };
}

export function generateScamReportBreadcrumbSchema(data: ScamReportPageData, pageUrl: string) {
  const label = reportLabel(data);

  return breadcrumbListSchema([
    { name: 'Home', url: '/' },
    { name: `${label} Checker`, url: checkerUrl(data) },
    { name: `${label} Report`, url: pageUrl },
  ]);
}

export function generateScamReportFAQSchema(data: ScamReportPageData) {
  const label = reportLabel(data);
  const lowerLabel = label.toLowerCase();

  return faqPageSchema([
      {
        question: `Is this ${lowerLabel} reported as a scam?`,
        answer: data.found
            ? `This ${lowerLabel} has ${data.totalReports} community scam report${data.totalReports === 1 ? '' : 's'} on RakshaAI. Verify independently before taking financial action.`
            : `No community scam reports for this ${lowerLabel} were found on RakshaAI. Absence of reports is not a guarantee of safety, so verify independently before transacting.`,
      },
      {
        question: `What should I do if this ${lowerLabel} contacted me?`,
        answer: 'Do not share OTPs, PINs, passwords, card details, or remote access. If money was lost, call the Indian cybercrime helpline at 1930 and file a complaint at cybercrime.gov.in as quickly as possible.',
      },
      {
        question: `Can I report a scam ${lowerLabel} on RakshaAI?`,
        answer: 'Yes. RakshaAI lets users report suspicious UPI IDs, phone numbers, and websites so other people in India can check community fraud signals before engaging.',
      },
    ]);
}

/**
 * ItemList schema for community reports.
 * Only emitted when allowItemList is true (i.e. the page is indexable).
 * This prevents reporter names and review text from appearing in structured
 * data for noindex / weak / no-report pages.
 *
 * allowItemList defaults to true to keep the function backward-compatible
 * for any callers that don't pass the flag.
 */
export function generateScamReportItemListSchema(
  data: ScamReportPageData,
  pageUrl: string,
  allowItemList = true,
) {
  if (!allowItemList) return null;
  if (data.reports.length === 0) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${pageUrl}#community-reports`,
    name: `Community reports`,
    numberOfItems: data.reports.length,
    itemListElement: data.reports.map((report, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'CreativeWork',
        name: `${reportLabel(data)} community report`,
        text: report.review,
        dateCreated: report.created_at,
        dateModified: report.updated_at || report.created_at,
        author: {
          '@type': 'Person',
          name: report.name || 'Community reporter',
        },
      },
    })),
  };
}
