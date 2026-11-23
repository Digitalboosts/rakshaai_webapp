import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'User Login',
    description: 'Sign in to your personal RakshaAI account to access saved scam checks, reports, and safety alerts.',
    robots: { index: false, follow: true, nocache: true },
}

export default function UserLoginLayout({ children }: { children: React.ReactNode }) {
    return children
}
