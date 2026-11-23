import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | RakshaAI',
  description:
    'Read the RakshaAI terms of service for acceptable use, limitations, disclaimers, and service conditions.',
  alternates: {
    canonical: 'https://rakshaai.co/terms-of-service',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Terms of Service | RakshaAI',
    description: 'Terms and conditions for using RakshaAI scam detection tools.',
    url: 'https://rakshaai.co/terms-of-service',
    type: 'website',
    siteName: 'RakshaAI',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Terms of Service | RakshaAI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service | RakshaAI',
    description: 'Terms and conditions for using RakshaAI scam detection tools.',
    images: ['/opengraph-image'],
  },
};

export default function TermsOfServiceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
