import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Business Login',
  description: 'RakshaAI business account login.',
  robots: {
    index: false,
    follow: true,
    nocache: true,
  },
};

export default function BusinessLoginLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
