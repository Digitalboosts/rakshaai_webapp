import {
  breadcrumbListSchema,
  faqPageSchema,
  organizationRef,
  webPageSchema,
  type SchemaNode,
} from '@/lib/seo/schema';

interface Report {
  id: number;
  scammer_phone_number: string;
  reporter_phone_number: string;
  name: string;
  review: string;
  attachment: string;
  status: string;
  is_resolved: boolean;
  slug: string;
  resolution_details: string | null;
  resolved_at: string | null;
  created_at: string;
  updated_at: string;
}

interface ReportData {
  success: boolean;
  found: boolean;
  total_reports: number;
  reports: Report[];
  detected_type: string;
  phone_number: string;
  slug: string;
}

export function generateStructuredData(data: ReportData, slug: string): SchemaNode {
  return webPageSchema({
    name: `Phone Number Security Report: ${data.phone_number}`,
    description: data.found
      ? `Scam report summary for ${data.phone_number} with ${data.total_reports} community reports.`
      : `Phone number ${data.phone_number} has no current RakshaAI community reports.`,
    url: `/phone-number-validator/${slug}`,
    mainEntity: {
      '@type': 'Dataset',
      name: `Community phone scam reports for ${data.phone_number}`,
      creator: organizationRef(),
      numberOfItems: data.reports.length,
    },
  }) as SchemaNode;
}

export function generateBreadcrumbStructuredData(phoneNumber: string, slug: string): SchemaNode {
  return breadcrumbListSchema([
    { name: 'Home', url: '/' },
    { name: 'Phone Number Checker', url: '/phone-number-checker' },
    { name: `${phoneNumber} Report`, url: `/phone-number-validator/${slug}` },
  ]);
}

export function generateFAQStructuredData(phoneNumber: string, reportCount: number): SchemaNode {
  return faqPageSchema([
    {
      question: `Is ${phoneNumber} a scam number?`,
      answer: reportCount > 0
        ? `Based on community reports, ${phoneNumber} has been reported ${reportCount} time${reportCount !== 1 ? 's' : ''} for potential scam activity. Exercise caution and verify independently.`
        : `No scam reports have been found for ${phoneNumber}. Absence of reports is not a guarantee of safety, so remain vigilant and verify suspicious communications.`,
    },
    {
      question: 'How reliable are these phone number reports?',
      answer: 'RakshaAI combines community reports with AI moderation and safety review workflows. Always verify important information independently and report urgent fraud to official authorities.',
    },
    {
      question: 'What should I do if I receive a call from a reported scam number?',
      answer: 'Do not provide OTPs, personal information, payment details, or remote access. Hang up and report financial cybercrime quickly through 1930 and cybercrime.gov.in.',
    },
  ]);
}
