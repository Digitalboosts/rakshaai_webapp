'use client';

// Section Components (Server Components)
import HeroSection from "@/components/sections/HeroSection";
import MobileAppShowcaseSection from "@/components/sections/MobileAppShowcaseSection";
import { BusinessTrustSection, IntelligencePlatformSection, TrustEngineSection, TrustLandscapeSection, TrustProblemSection } from "@/components/sections/HomepageIntelligenceSections";
import ImpactProofSection from "@/components/sections/ImpactProofSection";
import ScamAwarenessSection from "@/components/sections/ScamAwarenessSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import CheckerCardsTrustSection from "@/components/sections/CheckerCardsTrustSection";
import TrustTransparencySection from "@/components/sections/TrustTransparencySection";
import CTASection from "@/components/sections/CTASection";
import ScamCategoriesSection from "@/components/sections/ScamCategoriesSection";
import WhyDifferentSection from "@/components/sections/WhyDifferentSection";
import SafetyTipsSection from "@/components/sections/SafetyTipsSection";
import SafetyTrustBannerSection from "@/components/sections/SafetyTrustBannerSection";
import FAQHomeSection from "@/components/sections/FAQHomeSection";
import PopularChecksSection, { type SitemapEligibleResult } from "@/components/sections/PopularChecksSection";
import dynamic from "next/dynamic";

// Deferred client-only widgets  these self-fetch data on the client and provide
// no useful SSR output, so excluding them from the server render reduces HTML
// payload and main-thread blocking without losing any SEO value.
const TrendingWebsitesSection = dynamic(
  () => import("@/components/TrendingWebsitesSection"),
  { ssr: false, loading: () => null }
);
const LowestTrustSlider = dynamic(
  () => import("@/components/LowestTrustSlider"),
  { ssr: false, loading: () => null }
);
const ReviewSubmissionFAB = dynamic(
  () => import("@/components/ReviewSubmissionFAB"),
  { ssr: false, loading: () => null }
);

interface HomePageProps {
  content: any;
  popularChecks: SitemapEligibleResult[];
}

export default function HomePage({ content, popularChecks }: HomePageProps) {
  const { hero, howItWorks, urlInput, scamCategories, whyDifferent, safetyTips } = content;

  return (
    <div className="relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-300/10 dark:bg-purple-400/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-300/10 dark:bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-orange-300/10 dark:bg-orange-400/20 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <HeroSection hero={hero} urlInput={urlInput} />

      <TrustProblemSection />

      <IntelligencePlatformSection />

      <MobileAppShowcaseSection />

      <TrustEngineSection />

      <BusinessTrustSection />

      {/* Trending Websites Section  self-fetches data client-side */}
      <TrendingWebsitesSection />

      {/* Lowest Trust Slider  self-fetches data client-side */}
      <LowestTrustSlider />

      {/* How It Works Section */}
      <HowItWorksSection howItWorks={howItWorks} />

      {/* Popular Checks  internal links for SEO crawl discovery */}
      <PopularChecksSection results={popularChecks} />

      {/* Checker Cards & Trust Banner Section */}
      <CheckerCardsTrustSection />

      {/* Scam Categories Section */}
      {scamCategories && <ScamCategoriesSection scamCategories={scamCategories} />}

      {/* Why Different Section */}
      {whyDifferent && <WhyDifferentSection whyDifferent={whyDifferent} />}

      <TrustLandscapeSection />

      {/* Scam Alerts Section */}
      {/* {scamAlerts && <ScamAlertsSection scamAlerts={scamAlerts} />} */}

      {/* Safety Tips Section */}
      {safetyTips && <SafetyTipsSection safetyTips={safetyTips} />}

      {/* Safety Trust Banner Section */}
      <SafetyTrustBannerSection />

      {/* FAQ Section */}
      <FAQHomeSection />
      {/* Security Intelligence Hub */}
      {/* <SecurityIntelligenceHubSection /> */}

      {/* Impact & Social Proof Section */}
      <ImpactProofSection />

      {/* Scam Awareness Section */}
      <ScamAwarenessSection />

      {/* Trust & Transparency Section */}
      <TrustTransparencySection />

      {/* Business Onboarding Section */}
      {/* <BusinessOnboardingSection /> */}

      {/* Strong CTA Section */}
      <CTASection />

      {/* Review Submission FAB */}
      <ReviewSubmissionFAB />
    </div>
  );
}
