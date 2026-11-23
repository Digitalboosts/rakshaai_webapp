import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LocalizedLayoutProps {
  children: ReactNode;
  content?: {
    navbar?: any;
    footer?: any;
  };
}

export default function LocalizedLayout({ 
  children, 
  content 
}: LocalizedLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <Navbar content={content?.navbar} />
      <main id="main-content" tabIndex={-1} className="flex-1">{children}</main>
      <Footer content={content?.footer} />
    </div>
  );
}
