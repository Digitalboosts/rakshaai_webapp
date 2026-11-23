'use client';

import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface ClientLayoutWrapperProps {
  children: ReactNode;
  navbar: ReactNode;
  footer: ReactNode;
}

export default function ClientLayoutWrapper({ 
  children, 
  navbar, 
  footer 
}: ClientLayoutWrapperProps) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith('/admin');
  const isSecureRoute = pathname.startsWith('/control-people');

  if (isAdminRoute || isSecureRoute) {
    // Admin and secure routes - no user navigation or footer, no padding/margin
    return <>{children}</>;
  }

  // Regular routes - include user navigation and footer
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      {navbar}
      <main className="flex-1">{children}</main>
      {footer}
    </div>
  );
}
