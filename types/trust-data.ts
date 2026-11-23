export interface TrustData {
  trust_score: number;
  total_number_of_reviews?: number;
  detected_type?: string;
  upi_id?: string;
  phone_number?: string;
  summary?: string;
  url_details?: {
    scheme?: string;
    subdomain?: string;
    domain?: string;
    tld?: string;
    port?: string;
    business_name?: string;
    complete_domain?: string;
  };
  domain_info?: {
    domain?: string;
    status?: string;
    created?: string;
    updated?: string;
    expires?: string;
    domain_age_days?: number;
    registrar?: string;
    registrar_iana_id?: string;
    nameservers?: string[];
    privacy_enabled?: boolean;
    ip?: string;
    ip_reputation?: {
      abuse_score?: number;
      usage_type?: string;
    };
  };
  ssl_info?: {
    valid?: boolean;
    self_signed?: boolean;
    issuer?: {
      countryName?: string;
      organizationName?: string;
      commonName?: string;
    };
    subject?: {
      commonName?: string;
    };
    san?: string[];
    days_left?: number;
  };
  google_reviews_data?: {
    positive_count?: number;
    negative_count?: number;
    total_reviews?: number;
    average_rating?: number;
    google_maps_links?: Array<string>;
    places_used?: Array<{
      place_id: string;
      name: string;
      reviews_count: number;
      google_maps_link: string;
      website_link: string;
    }>;
    reviews?: Array<{
      displayname: string;
      Review: string;
      Rating: number;
      Sentiment: string;
    }>;
  };
  fb_page_info?: {
    name?: string;
    url?: string;
    followers?: string;
    verified?: boolean;
  };
  website_reviews?: {
    reviews?: Array<{
      title: string;
      link: string;
      snippet: string;
      date?: string;
      position: number;
      sentiment: string;
      rating?: number;
      ratingCount?: number;
    }>;
    total_negative_sentiment_reviews?: number;
  };
  related_scam_reports?: Array<{
    id: number;
    submission_type: string;
    phone_number?: string;
    upi_id?: string;
    website_url: string;
    website_slug?: string;
    name: string;
    rating: number;
    review: string;
    attachment?: string;
    status?: string;
    is_resolved?: boolean;
    created_at: string;
    updated_at: string;
    resolution_details?: string;
    resolved_at?: string;
    domain: string;
    business_owner_response?: string | null;
    business_owner_document?: string | null;
    business_owner_responded_at?: string | null;
  }>;
  trust_percentage: number;
  website_publishing_date?: {
    result: string;
    publish_date: string;
    publish_year: number;
  };
  action_items?: {
    risk_level: string;
    can_do: string[];
    should_avoid: string[];
    payment_advice: string;
    reasons: string[];
  };
  sectional_status?: {
    technical_trust?: {
      trust_score: number;
      total_number_of_reviews: number;
      trust_percentage: number;
      trust_level: string;
    };
    public_reputation_trust?: {
      trust_score: number;
      total_number_of_reviews: number;
      trust_percentage: number;
      trust_level: string;
    };
    google_business_profile_trust?: {
      trust_score: number;
      total_number_of_reviews: number;
      trust_percentage: number;
      trust_level: string;
    };
    unclear_business_legitimacy?: {
      trust_score: number;
      total_number_of_reviews: number;
      trust_percentage: number;
      trust_level: string;
    };
    related_scam_reports?: {
      trust_score: number;
      total_number_of_reviews: number;
      trust_percentage: number;
      trust_level: string;
    };
  };
  found?: boolean;
}