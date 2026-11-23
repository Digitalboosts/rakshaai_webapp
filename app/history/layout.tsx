import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Search History',
  description: 'Private browser-local scam check history.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function HistoryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
