import DefaultLayout from "@/components/DefaultLayout";
import Link from "next/link";
import {
  jsonLd,
  webPageSchema,
  breadcrumbListSchema,
  websiteSchema,
  organizationSchema,
} from "@/lib/seo/schema";
import WebsiteTrustReportBody from "../components/WebsiteTrustReportBody";
import TrendingWebsitesSectionClient from "@/components/TrendingWebsitesSectionClient";
import LowestTrustSliderClient from "@/components/LowestTrustSliderClient";
import { SITE_URL } from "@/lib/site-config";
import {
  normalizeWebsiteReportDomain,
  shouldIndexWebsiteReport,
} from "@/lib/seo/report-indexability";

type TrustReportApiResponse = {
  data?: any;
  registered_business?: any;
  created_at?: string;
  updated_at?: string;
  total_count?: number;
  is_sitemap_ready?: boolean;
};

type TrustReportFetchResult = {
  apiData: TrustReportApiResponse | null;
  error: string | null;
};

function decodeSlug(slug?: string) {
  if (!slug) return slug;
  try {
    return decodeURIComponent(slug);
  } catch {
    return slug;
  }
}

async function fetchTrustReportApiData(
  slug?: string
): Promise<TrustReportFetchResult> {
  if (!slug) {
    return {
      apiData: null,
      error: "Missing slug parameter in route. Ensure you visited a URL like /check/example.com",
    };
  }

  try {
    let backendBase =
      process.env.NEXT_PUBLIC_BACKEND_API_URL ||
      process.env.NEXT_PUBLIC_BACKEND_API_WITHOUT_VERSION ||
      process.env.BACKEND_API_URL ||
      "";
    let apiKey =
      process.env.TRUSTFINDER_API_KEY || process.env.BACKEND_API_KEY || "";

    backendBase = backendBase.replace(/^['"]+|['"]+$/g, "");
    apiKey = apiKey.replace(/^['"]+|['"]+$/g, "");

    if (!backendBase) {
      return {
        apiData: null,
        error: "Backend base URL is not configured in environment (NEXT_PUBLIC_BACKEND_API_URL)",
      };
    }

    if (!apiKey) {
      return {
        apiData: null,
        error: "API key is not configured in environment (TRUSTFINDER_API_KEY)",
      };
    }

    const backendUrl = `${backendBase}trust/?slug=${encodeURIComponent(slug)}`;
    const res = await fetch(backendUrl, {
      method: "GET",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
      },
    });

    if (!res.ok) {
      const text = await res.text();
      return { apiData: null, error: `Backend error ${res.status}: ${text}` };
    }

    return { apiData: await res.json(), error: null };
  } catch (e: any) {
    return { apiData: null, error: String(e?.message || e) };
  }
}

function getReportDomain(slug?: string, reportData?: any) {
  return normalizeWebsiteReportDomain(reportData, slug) || slug || "site";
}

export const dynamic = "force-dynamic";

export default async function Page({
  params,
}: {
  params: Promise<{ slug?: string }>;
}) {
  const { slug: rawSlug } = (await params) || {};
  const slug = decodeSlug(rawSlug);
  const { apiData, error: apiError } = await fetchTrustReportApiData(slug);

  const reportData = apiData?.data;
  const domain = getReportDomain(slug, reportData);
  const normalizedSlugForRender = (slug || "").replace(/^www\./i, "");
  const isManuallyApprovedPage = MANUALLY_APPROVED_INDEX_SLUGS.has(normalizedSlugForRender);
  const indexability = shouldIndexWebsiteReport(reportData, slug, {
    isSitemapReady: apiData?.is_sitemap_ready,
  });
  const isIndexable = isManuallyApprovedPage || indexability.index;

  let analyzedUrl = slug || apiData?.data?.url_details?.complete_domain || "";
  try {
    if (slug?.startsWith("http://") || slug?.startsWith("https://")) {
      analyzedUrl = new URL(slug).hostname;
    } else if (slug?.includes("/")) {
      analyzedUrl = slug.split("/")[0];
    }
  } catch {
    analyzedUrl = analyzedUrl;
  }

  const registeredBusiness =
    apiData?.registered_business || reportData?.registered_business || null;
  const normalizedSlug = (slug || "").replace(/^www\./i, "");
  const pageUrl = `/check/${normalizedSlug}`;

  const pageTitle = `Is ${domain} Safe? Website Review, Trust Score & Scam Check | RakshaAI`;

  const pageSchemas = [
    webPageSchema({
      name: pageTitle,
      description: `Check if ${domain} is safe or suspicious. View RakshaAI trust score, SSL status, domain age, scam signals, user feedback, and safety recommendations.`,
      url: pageUrl,
    }),
    breadcrumbListSchema([
      { name: "Home", url: "/" },
      { name: "Website Safety Checker", url: "/check" },
      { name: domain, url: pageUrl },
    ]),
    organizationSchema(),
    websiteSchema(),
  ];

  return (
    <DefaultLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(pageSchemas) }}
      />

      {apiError ? (
        <div className="min-h-[60vh] flex items-center justify-center px-4">
          <div className="max-w-md w-full text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
              <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Unable to Load Report</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">{apiError}</p>
            <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors">
              Check Another Website
            </Link>
          </div>
        </div>
      ) : !apiData ? (
        <div className="min-h-[60vh] flex items-center justify-center px-4">
          <div className="max-w-md w-full text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
              <svg className="w-8 h-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-2">No Data Available</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              No safety data is available for <strong>{slug}</strong>. Try checking a different website.
            </p>
            <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors">
              Check Another Website
            </Link>
          </div>
        </div>
      ) : (
        <>
          <WebsiteTrustReportBody
            reportData={reportData}
            domain={domain}
            slug={slug}
            createdAt={apiData?.created_at}
            updatedAt={apiData?.updated_at}
            totalCount={apiData?.total_count}
            registeredBusiness={registeredBusiness}
            analyzedUrl={analyzedUrl}
            pageTitle={pageTitle}
            emitFaqSchema={isIndexable}
          />
        </>
      )}

      {/* Trending / Lowest Trust  Full width, outside constrained container */}
      <TrendingWebsitesSectionClient />
      <LowestTrustSliderClient />
    </DefaultLayout>
  );
}

// Slugs that are manually approved for indexing regardless of report data quality.
// Add a slug here once you've verified the page has good content and you want
// Google to index it without waiting for the automatic data-quality gate.
const MANUALLY_APPROVED_INDEX_SLUGS = new Set([
  "flipkart.com",
  "reliancedigital.in",
  "snapdeal.com",
  "nykaa.com",
  "phonepe.com",
  "zerodha.com",
  "airbnb.co.in",
  "blinkit.com",
]);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug: rawSlug } = await params;
  const slug = decodeSlug(rawSlug) || "";
  const { apiData } = await fetchTrustReportApiData(slug);
  const reportData = apiData?.data;
  const domain = getReportDomain(slug, reportData);

  const title = `Is ${domain} Safe? Website Review, Trust Score & Scam Check`;
  const description = `Check if ${domain} is safe or suspicious. View RakshaAI trust score, SSL status, domain age, scam signals, user feedback, and safety recommendations before you pay or share data.`;

  const normalizedSlug = slug.replace(/^www\./i, "");
  const canonical = `${SITE_URL}/check/${encodeURIComponent(normalizedSlug)}`;

  const isManuallyApproved = MANUALLY_APPROVED_INDEX_SLUGS.has(normalizedSlug);
  const indexability = shouldIndexWebsiteReport(reportData, slug, {
    isSitemapReady: apiData?.is_sitemap_ready,
  });
  const shouldIndex = isManuallyApproved || indexability.index;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      type: "website",
      url: canonical,
      siteName: "RakshaAI",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
    robots: {
      index: shouldIndex,
      follow: true,
      googleBot: {
        index: shouldIndex,
        follow: true,
        "max-image-preview": "large" as const,
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}
