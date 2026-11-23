export type ScamReportKind = 'phone' | 'upi';

export interface CommunityScamReport {
  id: number | string;
  name: string;
  review: string;
  created_at: string;
  updated_at?: string;
  status?: string;
  attachment?: string | null;
  slug?: string;
  scammer_phone_number?: string;
  phone_number?: string;
  upi_id?: string;
  is_resolved?: boolean;
  resolution_details?: string | null;
  resolved_at?: string | null;
}

export interface ScamReportPageData {
  kind: ScamReportKind;
  slug: string;
  value: string;
  found: boolean;
  totalReports: number;
  reports: CommunityScamReport[];
  updatedAt?: string;
}
