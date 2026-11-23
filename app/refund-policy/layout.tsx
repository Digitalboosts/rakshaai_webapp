import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund Policy | RakshaAI',
  description:
    'Read the RakshaAI refund policy for business verification subscriptions and digital service purchases.',
  alternates: {
    canonical: 'https://rakshaai.co/refund-policy',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Refund Policy | RakshaAI',
    description: 'Refund and cancellation terms for RakshaAI subscription plans.',
    url: 'https://rakshaai.co/refund-policy',
    type: 'website',
    siteName: 'RakshaAI',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Refund Policy | RakshaAI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Refund Policy | RakshaAI',
    description: 'Refund and cancellation terms for RakshaAI subscription plans.',
    images: ['/opengraph-image'],
  },
};

export default function RefundPolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
