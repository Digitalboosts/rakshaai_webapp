import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";
import { ToastProvider } from "@/components/ui/Toast";
import { jsonLd, organizationSchema, websiteSchema } from "@/lib/seo/schema";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
  adjustFontFallback: true,
  fallback: ['system-ui', 'arial'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rakshaai.co'),
  title: {
    default: "RakshaAI: Check Website, UPI & Phone for Scams | India",
    template: "%s | RakshaAI",
  },
  description: "Free scam checker for India. Check any website, UPI ID, or phone number for fraud in seconds - no login needed. India-focused fraud detection by RakshaAI.",
  authors: [{ name: "RakshaAI Security Team", url: "https://rakshaai.co" }],
  creator: "RakshaAI",
  publisher: "RakshaAI",
  applicationName: "RakshaAI",
  category: "Security",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://rakshaai.co",
    title: "RakshaAI: Check Website, UPI & Phone for Scams | India",
    description: "Free scam checker for India. Check any website, UPI ID, or phone number for fraud in seconds - no login needed.",
    siteName: "RakshaAI",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "RakshaAI - Free Website Safety & Business Verification | India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@RakshaAi247",
    title: "RakshaAI - Free Scam Checker & Business Verifier for India",
    description: "Free AI scam detector for India. Check websites, UPI IDs, phone numbers. Businesses get verified trust badges. No login needed.",
    creator: "@RakshaAi247",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: 'https://rakshaai.co',
    languages: {
      'en-IN': 'https://rakshaai.co',
      'x-default': 'https://rakshaai.co',
    },
  },
  ...(process.env.BING_WEBMASTER_VERIFICATION_CODE && {
    verification: {
      other: {
        'msvalidate.01': process.env.BING_WEBMASTER_VERIFICATION_CODE,
      },
    },
  }),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalSchemas = [organizationSchema(), websiteSchema()];

  return (
    <html lang="en-IN" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="icon" type="image/svg+xml" href="/rakshaai-logo.svg" />
        <meta name="theme-color" content="#6366f1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(globalSchemas) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Google Tag Manager (noscript) - must be first child of body */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KMSHWXF6"
            height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
        </noscript>
        {/* Google Tag Manager - Deferred */}
        <Script
          id="gtm-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KMSHWXF6');
          `,
          }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-indigo-600 focus:text-white focus:rounded-lg focus:text-sm focus:font-medium focus:shadow-lg"
        >
          Skip to main content
        </a>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ToastProvider>
            {children}
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
