import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Business Verification Get Your Raksha Trust Badge',
  description:
    'Get your business GST-verified and Aadhaar-KYC confirmed by RakshaAI. Display a Raksha Trust Badge on your website and earn instant customer trust. ₹299/month flat subscription.',
  keywords: [
    'business verification india',
    'raksha trust badge',
    'business trust certificate india',
    'gst verified business india',
    'aadhaar kyc business verification',
    'how to verify my business online india',
    'trusted business badge',
    'business fraud prevention india',
    'rakshaai business',
    'online business verification india',
  ],
  authors: [{ name: 'RakshaAI Security Team', url: 'https://rakshaai.co' }],
  openGraph: {
    title: 'Business Verification Get Your Raksha Trust Badge | RakshaAI',
    description:
      'Get GST and Aadhaar-verified by RakshaAI. Earn a Raksha Trust Badge that customers see when they check your business URL building instant trust. ₹299/month.',
    type: 'website',
    url: 'https://rakshaai.co/business-onboarding',
    siteName: 'RakshaAI',
    images: [
      {
        url: 'https://rakshaai.co/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'RakshaAI Business Trust Verification',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Verification Get Your Raksha Trust Badge | RakshaAI',
    description:
      'Verify your business with RakshaAI. Get a trust badge customers see before they transact. ₹299/month.',
    creator: '@RakshaAi247',
  },
  alternates: {
    canonical: 'https://rakshaai.co/business-onboarding',
  },
};

export default function BusinessOnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
