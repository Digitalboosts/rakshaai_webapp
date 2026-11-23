import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Create User Account',
    description: 'Create your personal RakshaAI account to save scam checks, follow reports, and receive safety alerts.',
    robots: { index: false, follow: true, nocache: true },
}

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
    return children
}
