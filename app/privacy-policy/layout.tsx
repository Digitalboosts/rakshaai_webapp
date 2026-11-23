import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | RakshaAI',
  description:
    'Read the RakshaAI privacy policy for data collection, cookies, security, user rights, and fraud-report handling.',
  alternates: {
    canonical: 'https://rakshaai.co/privacy-policy',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Privacy Policy | RakshaAI',
    description: 'How RakshaAI collects, uses, and protects your data.',
    url: 'https://rakshaai.co/privacy-policy',
    type: 'website',
    siteName: 'RakshaAI',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Privacy Policy | RakshaAI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | RakshaAI',
    description: 'How RakshaAI collects, uses, and protects your data.',
    images: ['/opengraph-image'],
  },
};

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
