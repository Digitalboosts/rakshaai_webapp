"use client";

import { useState, useEffect } from "react";
import { TrustData } from "@/types/trust-data";
import SecurityVerification from "./SecurityVerification";
import ReportContent from "./ReportContent";
import ReportHeader from "./ReportHeader";
import { motion } from "framer-motion";
import dynamic from 'next/dynamic';

import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';

// Import server component for SEO
const ServerReportContent = dynamic(() => import('./ServerReportContent'), {
  ssr: false,
});

interface ClientReportWrapperProps {
  slug: string;
  serverData?: TrustData | null;
  serverAnalyzedUrl?: string;
  serverError?: string;
}

export default function ClientReportWrapper({
  slug,
  serverData,
  serverAnalyzedUrl = "",
  serverError
}: ClientReportWrapperProps) {
  const [data, setData] = useState<TrustData | null>(serverData || null);
  const [analyzedUrl, setAnalyzedUrl] = useState(serverAnalyzedUrl);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(serverError || "");

  useEffect(() => {
    // Check localStorage for stored data (client-side only)
    if (!serverData && typeof window !== 'undefined') {
      const stored = localStorage.getItem("trust-score-result");
      if (stored) {
        try {
          const result = JSON.parse(stored);
          if (result.detected_type === 'upi') {
            const upiData = {
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
            setData(upiData);
            setAnalyzedUrl(result.upi_id || '');
          } else if (result.detected_type === 'phone') {
            const phoneData = {
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
            setData(phoneData);
            setAnalyzedUrl(result.phone_number || '');
          } else {
            setData(result.data);
            if (result.data?.url_details?.complete_domain) {
              const scheme = result.data.url_details.scheme || 'https';
              const subdomain = result.data.url_details.subdomain;
              const domain = result.data.url_details.complete_domain;
              setAnalyzedUrl(`${scheme}://${subdomain ? subdomain + '.' : ''}${domain}`);
            } else if (result.data?.domain_info?.domain) {
              setAnalyzedUrl(`https://${result.data.domain_info.domain}`);
            }
          }
        } catch (err) {
          console.error("Error parsing localStorage data:", err);
        }
      }
    }
  }, [serverData]);

  const fetchDataBySlug = async (token: string) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/trust/${slug}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const result = await response.json();

      if (result.detected_type === 'upi') {
        const upiData = {
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
        setData(upiData);
        setAnalyzedUrl(result.upi_id || '');
      } else if (result.detected_type === 'phone') {
        const phoneData = {
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
        setData(phoneData);
        setAnalyzedUrl(result.phone_number || '');
      } else {
        setData(result.data);
        if (result.data?.url_details?.complete_domain) {
          const scheme = result.data.url_details.scheme || 'https';
          const subdomain = result.data.url_details.subdomain;
          const domain = result.data.url_details.complete_domain;
          setAnalyzedUrl(`${scheme}://${subdomain ? subdomain + '.' : ''}${domain}`);
        } else if (result.data?.domain_info?.domain) {
          setAnalyzedUrl(`https://${result.data.domain_info.domain}`);
        }
      }
    } catch (err: any) {
      console.error("Error fetching data by slug:", err);
      setError("Failed to load trust score data");
    } finally {
      setLoading(false);
    }
  };

  const handleTurnstileVerify = (token: string) => {
    setTurnstileToken(token);
    if (!data) {
      fetchDataBySlug(token);
    }
  };

  const title = data
    ? `Security Analysis for ${data.url_details?.complete_domain || data.upi_id || data.phone_number || 'Website'}`
    : 'Security Analysis Report';

  // Render server-side content for SEO if we have server data
  // This will be visible to crawlers immediately
  const hasServerData = serverData !== null;

  // If we need Turnstile verification and don't have data
  if (!data && !turnstileToken) {
    return <SecurityVerification onVerify={handleTurnstileVerify} isLoading={loading} />;
  }

  // If we're loading data after Turnstile verification
  if (loading) {
    return <SecurityVerification onVerify={handleTurnstileVerify} isLoading={true} />;
  }

  // If we have an error or no data
  if (error || !data) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900">
        {/* SEO-friendly content even on error */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="glass rounded-3xl p-12">
            {/* Visible error message */}
            <div className="text-center mb-8">
              <div className="h-16 w-16 text-red-500 mx-auto mb-4">❌</div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {error || "Loading report..."}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Please wait while we verify your request
              </p>
            </div>
            
            {/* Hidden but crawlable content */}
            <div className="sr-only">
              <h1>Security Report for {slug}</h1>
              <p>
                This page provides a comprehensive security analysis and trust score for {slug}.
                Our AI-powered system checks for scams, fraud, SSL certificates, and domain information.
              </p>
              <h2>What We Analyze</h2>
              <ul>
                <li>Trust Score and Safety Rating</li>
                <li>SSL Certificate Verification</li>
                <li>Domain Age and Registration Details</li>
                <li>Scam Reports and User Reviews</li>
                <li>Website Legitimacy Check</li>
                <li>IP Reputation and Abuse Score</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Header Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <ReportHeader
          slug={slug}
          analyzedUrl={analyzedUrl}
          title={title}
        />

        {/* SEO-friendly server-rendered content (hidden visually but crawlable) */}
        {hasServerData && (
          <div className="sr-only" aria-hidden="true">
            <ServerReportContent data={data!} analyzedUrl={analyzedUrl} />
          </div>
        )}

        {/* Header Section (Animated - visible to users) */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <div className="glass rounded-2xl p-6 sm:p-8 border-2 border-indigo-100 dark:border-indigo-900/30">
            <div className="flex items-start space-x-4 mb-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0">
                <img
                  src="/rakshaai-logo.svg"
                  alt="RakshaAI Logo"
                  width={56}
                  height={56}
                  className="w-full h-full"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="print-header text-xl sm:text-2xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  RakshaAI Analysis Report
                </h2>
                {/* Industry-standard disclaimer */}
                <div className="print-disclaimer mt-2 mb-4 p-3 rounded-lg bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 text-xs sm:text-sm text-yellow-900 dark:text-yellow-200 font-medium">
                  <strong>Disclaimer:</strong> This report is generated by AI systems. AI-based analysis may occasionally be inaccurate. Always verify important information independently.
                </div>
                <div className="print-analyzing flex items-center flex-wrap gap-1 sm:gap-2">
                  
                  <span className="print-analyzing text-xs sm:text-sm font-bold lg:text-base text-gray-600 dark:text-gray-400">Analyzing:</span>
                  <div className="print-analyzing flex items-center space-x-1 sm:space-x-2 px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800/40">
                    {data?.detected_type === 'upi' ? (
                      <span className="inline-flex"><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="h-3 w-3 sm:h-4 sm:w-4 text-indigo-600 dark:text-indigo-400 flex-shrink-0"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" /></svg></span>
                    ) : data?.detected_type === 'phone' ? (
                      <span className="inline-flex"><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="h-3 w-3 sm:h-4 sm:w-4 text-indigo-600 dark:text-indigo-400 flex-shrink-0"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" /></svg></span>
                    ) : (
                      <span className="inline-flex"><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="h-3 w-3 sm:h-4 sm:w-4 text-indigo-600 dark:text-indigo-400 flex-shrink-0"><circle cx="12" cy="12" r="10" /></svg></span>
                    )}
                    <span className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm lg:text-base truncate">
                      {data?.detected_type === 'upi' ? data?.upi_id :
                        data?.detected_type === 'phone' ? data?.phone_number :
                          (analyzedUrl || data?.url_details?.complete_domain)}
                    </span>
                  </div>
                  {data?.detected_type === 'upi' && data?.upi_id && (
                    <span className="ml-2 text-xs font-mono bg-blue-100 dark:bg-blue-900/50 px-2 py-1 rounded">
                      UPI: {data.upi_id}
                    </span>
                  )}
                  {data?.detected_type === 'phone' && data?.phone_number && (
                    <span className="ml-2 text-xs font-mono bg-green-100 dark:bg-green-900/50 px-2 py-1 rounded">
                      Phone: {data.phone_number}
                    </span>
                  )}
                </div>
                <div className="mt-2 flex items-start">
                  <span className="print-summary text-xs sm:text-sm lg:text-base font-semibold text-gray-900 dark:text-white mr-2">Summary:</span>
                  <span className="print-summary text-sm text-gray-700 dark:text-gray-300 leading-relaxed max-w-none">
                    <ReactMarkdown
                      rehypePlugins={[rehypeRaw, rehypeSanitize]}
                      components={{ p: ({ node, ...props }) => <span {...props} /> }}
                    >
                      {data.summary || ""}
                    </ReactMarkdown>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* End Header Section */}

      <ReportContent initialData={data} analyzedUrl={analyzedUrl} slug={slug} />
    </>
  );
}