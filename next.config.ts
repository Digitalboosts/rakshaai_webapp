import type { NextConfig } from "next";

const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'self'",
  "form-action 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://ssl.google-analytics.com https://challenges.cloudflare.com https://checkout.razorpay.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data: https://fonts.gstatic.com",
  "connect-src 'self' https: wss:",
  "frame-src 'self' https:",
  "worker-src 'self' blob:",
  "manifest-src 'self'",
  "media-src 'self' https:",
].join('; ');

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  trailingSlash: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion", "react-icons", "recharts"],
    webpackBuildWorker: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },
  // Removed proxy configuration - now using direct backend calls

  // ─── Redirects: fix all 404s + canonical issues in Google Search Console ────
  async redirects() {
    return [
      {
        source: '/check',
        has: [{ type: 'query', key: 'type', value: 'upi' }],
        destination: '/upi-id-checker?',
        permanent: true,
      },
      {
        source: '/check',
        has: [{ type: 'query', key: 'type', value: 'phone' }],
        destination: '/phone-number-checker?',
        permanent: true,
      },
      // Any other unrecognised /check?type=* → home (clean URL)
      {
        source: '/check',
        has: [{ type: 'query', key: 'type' }],
        destination: '/?',
        permanent: false,
      },
      {
        source: '/:path*',
        has: [{ type: 'query', key: 'utm_source' }],
        destination: '/:path*?',
        permanent: false,
      },
      {
        source: '/:path*',
        has: [{ type: 'query', key: 'utm_medium' }],
        destination: '/:path*?',
        permanent: false,
      },
      {
        source: '/:path*',
        has: [{ type: 'query', key: 'utm_campaign' }],
        destination: '/:path*?',
        permanent: false,
      },
      {
        source: '/:path*',
        has: [{ type: 'query', key: 'utm_term' }],
        destination: '/:path*?',
        permanent: false,
      },
      {
        source: '/:path*',
        has: [{ type: 'query', key: 'utm_content' }],
        destination: '/:path*?',
        permanent: false,
      },
      {
        source: '/:path*',
        has: [{ type: 'query', key: 'gclid' }],
        destination: '/:path*?',
        permanent: false,
      },
      {
        source: '/:path*',
        has: [{ type: 'query', key: 'fbclid' }],
        destination: '/:path*?',
        permanent: false,
      },
      {
        source: '/:path*',
        has: [{ type: 'query', key: 'msclkid' }],
        destination: '/:path*?',
        permanent: false,
      },
      {
        source: '/check-report/:slug*',
        destination: '/check/:slug*',
        permanent: true,
      },
      {
        source: '/:locale(en|hi|or)',
        destination: '/',
        permanent: true,
      },
      {
        source: '/:locale(en|hi|or)/:path*',
        destination: '/:path*',
        permanent: true,
      },
      {
        source: '/check-report',
        destination: '/',
        permanent: true,
      },
      {
        source: '/scams/upi-fraud/fake-screenshot-scam',
        destination: '/scams/upi-fraud/fake-payment-screenshot',
        permanent: true,
      },
      {
        source: '/scams/upi-fraud/fake-payment-link',
        destination: '/scams/upi-fraud/fake-upi-link',
        permanent: true,
      },
      {
        source: '/scams/upi-fraud/investment-fraud',
        destination: '/scams/upi-fraud/investment-job-fraud',
        permanent: true,
      },
      {
        source: '/scams/e-commerce-fraud/social-media-shopping-scam',
        destination: '/scams/e-commerce-fraud/social-commerce-scam',
        permanent: true,
      },
      {
        source: '/scams/e-commerce-fraud/phantom-delivery-scam',
        destination: '/scams/e-commerce-fraud/phantom-delivery',
        permanent: true,
      },
      {
        source: '/scams/e-commerce-fraud/advance-payment-scam',
        destination: '/scams/e-commerce-fraud/advance-payment-trap',
        permanent: true,
      },
      {
        source: '/scams/e-commerce-fraud/fake-seller-scam',
        destination: '/scams/e-commerce-fraud/fake-marketplace-seller',
        permanent: true,
      },

      {
        source: '/phone-number-validator',
        destination: '/phone-number-checker',
        permanent: true,
      },
    ];
  },

  // Sitemap generation optimization
  async headers() {
    const isDev = process.env.NODE_ENV === 'development'
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          // Only set HSTS in production  setting it on localhost teaches Chrome
          // to always use HTTPS for localhost, causing ERR_SSL_PROTOCOL_ERROR
          ...(isDev ? [] : [{
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          }]),
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '0'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
          {
            key: 'Content-Security-Policy',
            value: contentSecurityPolicy,
          },
        ],
      },
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400',
          },
        ],
      },
      // ── Private / admin route X-Robots-Tag headers ──────────────────────────
      // Each private section has TWO entries: the bare path and the wildcard
      // sub-paths. Next.js /:path* may or may not cover the bare route
      // depending on version/host behavior, so both are explicit here.
      // Phase 3A audit finding #4 / #13.
      {
        source: '/admin',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow, noarchive' }],
      },
      {
        source: '/admin/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow, noarchive' }],
      },
      {
        source: '/control-people',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow, noarchive' }],
      },
      {
        source: '/control-people/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow, noarchive' }],
      },
      {
        source: '/business-dashboard',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow, noarchive' }],
      },
      {
        source: '/business-dashboard/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow, noarchive' }],
      },
      {
        source: '/business-login',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, follow, noarchive' }],
      },
      {
        source: '/history',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow, noarchive' }],
      },
      {
        source: '/api',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow, noarchive' }],
      },
      {
        source: '/api/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow, noarchive' }],
      },
      {
        source: '/test',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow, noarchive' }],
      },
      {
        source: '/test/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow, noarchive' }],
      },
    ]
  },
};

export default nextConfig;
