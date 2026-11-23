import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Business Dashboard',
  description: 'Private RakshaAI business dashboard.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function BusinessDashboardLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
