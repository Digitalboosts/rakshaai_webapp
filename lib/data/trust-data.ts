import { TrustData } from "@/types/trust-data";

export async function getTrustDataBySlug(slug: string): Promise<{
  data: TrustData | null;
  analyzedUrl: string;
  error?: string;
}> {
  try {
    const backendUrl = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}trust/?slug=${encodeURIComponent(slug)}`;
    
    console.log('Server-side data fetch for slug:', slug);
    
    // For server-side rendering (for crawlers), we use the API key if available
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
    };
    
    // Add API key for server-side requests if available
    if (process.env.TRUSTFINDER_API_KEY) {
      headers['X-API-KEY'] = process.env.TRUSTFINDER_API_KEY;
    }
    
    const response = await fetch(backendUrl, {
      method: 'GET',
      headers,
      cache: 'no-store',
      next: { revalidate: 0 }
    });

    if (!response.ok) {
      console.error('Backend responded with status:', response.status);
      // Return null so client-side can handle it with Turnstile
      return { data: null, analyzedUrl: '', error: undefined };
    }

    const result = await response.json();
    
    // Handle different data types (URL, UPI, Phone)
    if (result.detected_type === 'upi') {
      const upiData: TrustData = {
        trust_score: 5,
        detected_type: result.detected_type,
        upi_id: result.upi_id,
        related_scam_reports: result.reports?.map((report: any) => ({
          id: report.id,
          submission_type: 'upi',
          upi_id: report.upi_id,
          website_url: '',
          website_slug: report.website_slug,
          name: report.name,
          rating: 0,
          review: report.review,
          attachment: report.attachment,
          status: report.status,
          is_resolved: report.is_resolved,
          created_at: report.created_at,
          updated_at: report.updated_at,
          resolution_details: report.resolution_details,
          resolved_at: report.resolved_at,
          domain: '',
          business_owner_response: report.business_owner_response,
          business_owner_document: report.business_owner_document,
          business_owner_responded_at: report.business_owner_responded_at,
        })) || [],
        total_number_of_reviews: result.total_reports || 0,
        trust_percentage: 50,
        found: result.found
      };
      return { data: upiData, analyzedUrl: result.upi_id || '' };
    } else if (result.detected_type === 'phone') {
      const phoneData: TrustData = {
        trust_score: 5,
        detected_type: result.detected_type,
        phone_number: result.phone_number,
        related_scam_reports: result.reports?.map((report: any) => ({
          id: report.id,
          submission_type: 'phone',
          phone_number: report.scammer_phone_number,
          website_url: '',
          website_slug: report.website_slug,
          name: report.name,
          rating: 0,
          review: report.review,
          attachment: report.attachment,
          status: report.status,
          is_resolved: report.is_resolved,
          created_at: report.created_at,
          updated_at: report.updated_at,
          resolution_details: report.resolution_details,
          resolved_at: report.resolved_at,
          domain: '',
          business_owner_response: report.business_owner_response,
          business_owner_document: report.business_owner_document,
          business_owner_responded_at: report.business_owner_responded_at,
        })) || [],
        total_number_of_reviews: result.total_reports || 0,
        trust_percentage: 50,
        found: result.found
      };
      return { data: phoneData, analyzedUrl: result.phone_number || '' };
    } else {
      let analyzedUrl = '';
      if (result.data?.url_details?.complete_domain) {
        const scheme = result.data.url_details.scheme || 'https';
        const subdomain = result.data.url_details.subdomain;
        const domain = result.data.url_details.complete_domain;
        analyzedUrl = `${scheme}://${subdomain ? subdomain + '.' : ''}${domain}`;
      } else if (result.data?.domain_info?.domain) {
        analyzedUrl = `https://${result.data.domain_info.domain}`;
      }
      return { data: result.data, analyzedUrl };
    }
  } catch (error) {
    console.error('Error fetching data by slug:', error);
    // Return null so client-side can handle it with Turnstile
    return { 
      data: null, 
      analyzedUrl: '', 
      error: undefined
    };
  }
}

export async function getStoredTrustData(): Promise<{
  data: TrustData | null;
  analyzedUrl: string;
}> {
  // This function would handle localStorage data in client-side components
  // For SSR, we'll return null and handle this in the client component
  return { data: null, analyzedUrl: '' };
}