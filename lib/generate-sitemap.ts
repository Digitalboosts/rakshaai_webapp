import { SitemapGenerator, PageConfig, DEFAULT_PAGE_CONFIGS } from '@/lib/sitemap-utils'
import { SITE_URL } from '@/lib/site-config'
import { getWebsiteReportUpdatedAt, shouldIndexWebsiteReport } from '@/lib/seo/report-indexability'

export interface SitemapEntry {
    url: string
    lastModified?: Date | string
    changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
    priority?: number
}

const LOCALES = [] as const
const SITEMAP_FETCH_TIMEOUT_MS = 5000
const CHECK_REPORT_SITEMAP_DETAIL_LIMIT = Number.parseInt(
    process.env.SITEMAP_REPORT_DETAIL_LIMIT || '200',
    10
)

const sitemapGenerator = new SitemapGenerator(SITE_URL, LOCALES)

const STATIC_PAGES: PageConfig[] = [
    { path: '', ...DEFAULT_PAGE_CONFIGS.home, lastModified: new Date('2026-06-05'), hasLocaleVariants: true },
    { path: '/about', ...DEFAULT_PAGE_CONFIGS.about, lastModified: new Date('2026-06-05'), hasLocaleVariants: true },
    { path: '/technology', priority: 0.85, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-08-14') },
    { path: '/trust', priority: 0.8, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-08-14') },
    { path: '/business', priority: 0.85, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-08-14') },
    { path: '/api', priority: 0.8, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-08-14') },
    { path: '/contact', ...DEFAULT_PAGE_CONFIGS.contact, lastModified: new Date('2026-04-22'), hasLocaleVariants: true },
    { path: '/faq', ...DEFAULT_PAGE_CONFIGS.faq, lastModified: new Date('2026-06-05'), hasLocaleVariants: true },
    { path: '/check', priority: 0.9, changeFrequency: 'daily', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-06-05') },
    { path: '/business-onboarding', priority: 0.9, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-04-22') },
    { path: '/business-verification', priority: 0.85, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-04-24') },
    { path: '/phone-number-checker', priority: 0.9, changeFrequency: 'daily', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-06-05') },
    { path: '/upi-id-checker', priority: 0.9, changeFrequency: 'daily', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-06-05') },
    { path: '/website-safety-checker', priority: 0.9, changeFrequency: 'daily', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-06-05') },
    { path: '/privacy-policy', ...DEFAULT_PAGE_CONFIGS['privacy-policy'], lastModified: new Date('2025-01-01') },
    { path: '/terms-of-service', ...DEFAULT_PAGE_CONFIGS['terms-of-service'], lastModified: new Date('2025-01-01') },
    { path: '/emergency', priority: 0.9, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-06-02') },
    { path: '/got-scammed', priority: 0.9, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-06-11') },
    { path: '/how-to-report-cybercrime-india', priority: 0.9, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-06-11') },
    { path: '/sitemap', priority: 0.5, changeFrequency: 'weekly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-06-09') },
    { path: '/compare/rakshaai-verified-vs-gstin', priority: 0.75, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-07-03') },
    { path: '/blog', priority: 0.8, changeFrequency: 'weekly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-08-14') },
    { path: '/blog/chakshu-portal-india-how-to-report', priority: 0.9, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-08-14') },
    { path: '/blog/cyber-hygiene-india', priority: 0.9, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-08-14') },
    { path: '/blog/password-safety-india', priority: 0.9, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-08-12') },
    { path: '/blog/online-shopping-scam-india', priority: 0.9, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-08-11') },
    { path: '/blog/real-estate-scam-india', priority: 0.9, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-08-10') },
    { path: '/blog/credit-card-fraud-india', priority: 0.9, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-08-07') },
    { path: '/blog/travel-scam-india', priority: 0.9, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-08-06') },
    { path: '/blog/cyber-law-india-victim-rights', priority: 0.9, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-08-05') },
    { path: '/blog/business-scam-india', priority: 0.9, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-08-04') },
    { path: '/blog/dark-web-india', priority: 0.9, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-08-03') },
    { path: '/blog/cyber-safety-students-india', priority: 0.9, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-07-31') },
    { path: '/blog/bank-account-fraud-india', priority: 0.9, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-07-30') },
    { path: '/blog/social-media-scam-india', priority: 0.9, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-07-29') },
    { path: '/blog/sms-scam-india', priority: 0.9, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-07-28') },
    { path: '/blog/cyber-fraud-hotspots-india', priority: 0.9, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-07-09') },
    { path: '/blog/recover-money-online-fraud-india', priority: 0.9, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-07-24') },
    { path: '/blog/job-scam-india', priority: 0.9, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-07-22') },
    { path: '/blog/lottery-scam-india', priority: 0.9, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-07-21') },
    { path: '/blog/deepfake-celebrity-scam-india', priority: 0.9, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-07-20') },
    { path: '/blog/boss-scam-india', priority: 0.9, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-07-16') },
    { path: '/blog/top-scams-india-2026', priority: 0.9, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-07-14') },
    { path: '/blog/fake-online-sellers-india', priority: 0.85, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-07-02') },
    { path: '/blog/how-to-verify-a-business-india', priority: 0.85, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-07-02') },
    { path: '/blog/upi-scam-india-2026', priority: 0.85, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-05-22') },
    { path: '/blog/wrong-transfer-refund-scam-india', priority: 0.85, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-03-01') },
    { path: '/blog/digital-arrest-scam-india', priority: 0.85, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-05-21') },
    { path: '/blog/telegram-task-scam-india', priority: 0.85, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-05-23') },
    { path: '/blog/how-to-check-fake-website-india', priority: 0.85, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-05-26') },
    { path: '/blog/fake-customer-care-number-scam-india', priority: 0.85, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-05-28') },
    { path: '/blog/crypto-investment-scam-india-2026', priority: 0.85, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-05-27') },
    { path: '/blog/got-scammed-online-india-what-to-do', priority: 0.85, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-05-29') },
    { path: '/blog/ai-voice-cloning-scam-india', priority: 0.85, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-06-01') },
    { path: '/blog/fake-loan-app-india-2026', priority: 0.85, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-06-02') },
    { path: '/blog/sextortion-scam-india', priority: 0.85, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-06-03') },
    { path: '/blog/stock-market-tip-scam-india', priority: 0.85, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-06-04') },
    { path: '/blog/kyc-update-scam-india', priority: 0.85, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-06-08') },
    { path: '/blog/aadhaar-data-breach-india', priority: 0.85, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-06-09') },
    { path: '/blog/parcel-delivery-scam-india', priority: 0.85, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-06-14') },
    { path: '/blog/romance-scam-india', priority: 0.85, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-06-11') },
    { path: '/blog/olx-scam-india', priority: 0.85, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-06-12') },
    { path: '/blog/whatsapp-scam-india', priority: 0.85, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-06-13') },
    { path: '/blog/gaming-app-scam-india', priority: 0.85, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-06-15') },
    { path: '/blog/fake-rental-scam-india', priority: 0.85, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-06-16') },
    { path: '/blog/sim-swap-fraud-india', priority: 0.85, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-06-17') },
    { path: '/blog/how-to-check-phone-number-scam-india', priority: 0.85, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-06-22') },
    { path: '/blog/phishing-email-india', priority: 0.85, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-06-23') },
    { path: '/blog/fake-government-website-india', priority: 0.85, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-07-03') },
    { path: '/blog/insurance-scam-india', priority: 0.85, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-07-08') },
    { path: '/blog/upi-id-fraud-india', priority: 0.85, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-07-09') },
    { path: '/blog/cyber-safety-senior-citizens-india', priority: 0.85, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-07-13') },
    { path: '/author/rabinarayan-pradhan', priority: 0.7, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-08-14') },
    { path: '/scams', priority: 0.9, changeFrequency: 'weekly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-05-19') },
    { path: '/scams/upi-fraud', priority: 0.9, changeFrequency: 'weekly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-05-19') },
    { path: '/scams/upi-fraud/qr-code-scam', priority: 0.85, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-05-19') },
    { path: '/scams/upi-fraud/otp-fraud', priority: 0.85, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-03-01') },
    { path: '/scams/upi-fraud/digital-arrest-scam', priority: 0.85, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-07-01') },
    { path: '/scams/upi-fraud/fake-upi-link', priority: 0.85, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-07-01') },
    { path: '/scams/upi-fraud/investment-job-fraud', priority: 0.85, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-07-02') },
    { path: '/scams/digital-arrest', priority: 0.9, changeFrequency: 'weekly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-05-19') },
    { path: '/scams/e-commerce-fraud', priority: 0.9, changeFrequency: 'weekly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-05-19') },
    { path: '/scams/e-commerce-fraud/fake-online-stores', priority: 0.9, changeFrequency: 'weekly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-07-22') },
    { path: '/scams/e-commerce-fraud/cod-fraud', priority: 0.85, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-07-02') },
    { path: '/scams/e-commerce-fraud/advance-payment-trap', priority: 0.85, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-07-02') },
    { path: '/scams/e-commerce-fraud/counterfeit-products', priority: 0.85, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-07-02') },
    { path: '/scams/e-commerce-fraud/social-commerce-scam', priority: 0.85, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-07-02') },
    { path: '/scams/e-commerce-fraud/fake-marketplace-seller', priority: 0.85, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-07-02') },
    { path: '/scams/e-commerce-fraud/phantom-delivery', priority: 0.85, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-07-02') },
    { path: '/scams/investment-scams', priority: 0.9, changeFrequency: 'weekly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-05-19') },
    { path: '/scams/phone-scams', priority: 0.9, changeFrequency: 'weekly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-05-19') },
    { path: '/scams/phishing', priority: 0.9, changeFrequency: 'weekly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-05-19') },
    { path: '/scams/romance-scams', priority: 0.9, changeFrequency: 'weekly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-05-19') },
    { path: '/scams/romance-scams/catfishing-india', priority: 0.9, changeFrequency: 'weekly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-08-16') },
    { path: '/scams/romance-scams/army-officer-scam', priority: 0.9, changeFrequency: 'weekly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-08-16') },
    { path: '/scams/romance-scams/social-media-romance-scam', priority: 0.9, changeFrequency: 'weekly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-08-16') },
    { path: '/scams/romance-scams/sextortion-india', priority: 0.9, changeFrequency: 'weekly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-08-16') },
    { path: '/scams/crypto-scams', priority: 0.9, changeFrequency: 'weekly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-05-19') },
    { path: '/scams/loan-fraud', priority: 0.9, changeFrequency: 'weekly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-05-19') },
    { path: '/scams/job-scams', priority: 0.9, changeFrequency: 'weekly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-05-19') },
    { path: '/scams/job-scams/whatsapp-job-scam', priority: 0.9, changeFrequency: 'weekly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-07-22') },
    { path: '/scams/job-scams/task-scam', priority: 0.9, changeFrequency: 'weekly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-07-22') },
    { path: '/scams/job-scams/advance-fee-job-fraud', priority: 0.9, changeFrequency: 'weekly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-07-22') },
    { path: '/scams/job-scams/fake-job-portal', priority: 0.9, changeFrequency: 'weekly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-07-22') },
    { path: '/scams/job-scams/fake-company-portal', priority: 0.9, changeFrequency: 'weekly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-08-16') },
    { path: '/scams/job-scams/overseas-job-scam', priority: 0.9, changeFrequency: 'weekly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-07-22') },
    { path: '/scams/job-scams/influencer-scam', priority: 0.9, changeFrequency: 'weekly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-07-22') },
    { path: '/scams/job-scams/mlm-pyramid-scam', priority: 0.9, changeFrequency: 'weekly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-08-16') },
    { path: '/scams/whatsapp-scams', priority: 0.95, changeFrequency: 'weekly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-06-03') },
    { path: '/scams/whatsapp-scams/investment-scam', priority: 0.85, changeFrequency: 'weekly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-05-20') },
    { path: '/scams/whatsapp-scams/job-offer-scam', priority: 0.85, changeFrequency: 'weekly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-05-20') },
    { path: '/scams/whatsapp-scams/lottery-scam', priority: 0.85, changeFrequency: 'weekly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-05-20') },
    { path: '/scams/whatsapp-scams/phishing-links', priority: 0.85, changeFrequency: 'weekly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-05-20') },
    { path: '/scams/fake-websites', priority: 0.9, changeFrequency: 'weekly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-05-20') },
    { path: '/scams/phone-scams/kbc-lottery-scam', priority: 0.9, changeFrequency: 'weekly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-05-20') },
    { path: '/scams/phone-scams/otp-fraud', priority: 0.85, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-05-20') },
    { path: '/scams/phone-scams/fake-bank-customer-care', priority: 0.85, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-05-20') },
    { path: '/scams/digital-arrest/fake-cbi-scam', priority: 0.9, changeFrequency: 'weekly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-05-20') },
    { path: '/scams/digital-arrest/fake-ed-scam', priority: 0.85, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-05-20') },
    { path: '/scams/digital-arrest/fake-trai-scam', priority: 0.85, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-05-20') },
    { path: '/scams/digital-arrest/fake-customs-scam', priority: 0.85, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-05-20') },
    { path: '/scams/investment-scams/stock-trading-app-scam', priority: 0.9, changeFrequency: 'weekly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-05-20') },
    { path: '/scams/investment-scams/telegram-investment-scam', priority: 0.85, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-05-20') },
    { path: '/scams/upi-fraud/collect-request-scam', priority: 0.85, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-06-03') },
    { path: '/scams/upi-fraud/fake-payment-screenshot', priority: 0.85, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-03-01') },
    { path: '/prevention-tips', priority: 0.9, changeFrequency: 'weekly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-04-22') },
    { path: '/scam-alerts', priority: 0.9, changeFrequency: 'weekly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-04-22') },
    { path: '/safety-guide', priority: 0.9, changeFrequency: 'weekly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-04-22') },
    { path: '/trust-certification', priority: 0.75, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-04-22') },
    { path: '/trust-certification/apply', priority: 0.7, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-07-02') },
    { path: '/trust-certification/how-it-works', priority: 0.7, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-07-02') },
    { path: '/trust-certification/verified-businesses', priority: 0.7, changeFrequency: 'daily', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-07-02') },
    { path: '/trust-certification/badge-guide', priority: 0.65, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-07-02') },
    { path: '/trust-certification/verification-standards', priority: 0.65, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-07-02') },
    { path: '/methodology', priority: 0.85, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-05-20') },
    { path: '/scam-intelligence', priority: 0.9, changeFrequency: 'weekly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-05-20') },
    { path: '/refund-policy', priority: 0.35, changeFrequency: 'yearly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-04-22') },
    { path: '/data-sources', priority: 0.7, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-05-27') },
    { path: '/report-correction', priority: 0.65, changeFrequency: 'monthly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-05-27') },
    { path: '/editorial-policy', priority: 0.6, changeFrequency: 'yearly', includeInSitemap: true, isPublic: true, lastModified: new Date('2026-05-27') },
]

function joinUrl(baseUrl: string | undefined, path: string): string | null {
    if (!baseUrl) return null
    try {
        return new URL(path.replace(/^\//, ''), baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`).toString()
    } catch {
        return null
    }
}

async function fetchSitemapJson<T>(url: string | null, init: RequestInit = {}): Promise<T | null> {
    if (!url) return null
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), SITEMAP_FETCH_TIMEOUT_MS)
    try {
        const res = await fetch(url, { ...init, signal: controller.signal, next: { revalidate: 3600 } })
        if (!res.ok) return null
        return await res.json() as T
    } catch (error) {
        if (process.env.NODE_ENV === 'development') console.warn(`Skipping dynamic sitemap source ${url}:`, error)
        return null
    } finally {
        clearTimeout(timeout)
    }
}

async function getCheckReportSlugs(): Promise<Array<{ slug: string; updatedAt?: Date | string }>> {
    const apiKey = process.env.TRUSTFINDER_API_KEY || process.env.BACKEND_API_KEY
    const data = await fetchSitemapJson<{ success?: boolean; slugs?: string[] }>(
        joinUrl(process.env.NEXT_PUBLIC_BACKEND_API_URL, 'trust-data/slugs/'),
        { method: 'GET', headers: apiKey ? { 'X-API-KEY': apiKey } : undefined }
    )
    if (!data?.success || !Array.isArray(data.slugs)) return []
    return data.slugs.map((slug) => ({ slug }))
}

async function fetchCheckReportData(slug: string): Promise<{ reportData: unknown | null; isSitemapReady?: boolean }> {
    const apiKey = process.env.TRUSTFINDER_API_KEY || process.env.BACKEND_API_KEY
    const data = await fetchSitemapJson<{ data?: unknown; is_sitemap_ready?: boolean }>(
        joinUrl(process.env.NEXT_PUBLIC_BACKEND_API_URL, `trust/?slug=${encodeURIComponent(slug)}`),
        {
            method: 'GET',
            headers: apiKey
                ? { 'X-API-KEY': apiKey, 'Content-Type': 'application/json' }
                : { 'Content-Type': 'application/json' },
        }
    )
    return { reportData: data?.data ?? null, isSitemapReady: data?.is_sitemap_ready }
}

async function getIndexableCheckReportPages(): Promise<Array<{ slug: string; updatedAt?: Date | string }>> {
    const slugs = await getCheckReportSlugs()
    const limitedSlugs = slugs.slice(0, Math.max(0, CHECK_REPORT_SITEMAP_DETAIL_LIMIT))

    const checked = await Promise.all(
        limitedSlugs.map(async (item) => {
            const { reportData, isSitemapReady } = await fetchCheckReportData(item.slug)
            const indexability = shouldIndexWebsiteReport(reportData, item.slug, { isSitemapReady })
            if (!indexability.index) return null
            return { slug: item.slug, updatedAt: getWebsiteReportUpdatedAt(reportData) ?? item.updatedAt } as { slug: string; updatedAt?: Date | string }
        })
    )
    return checked.filter((item): item is NonNullable<typeof item> => item !== null)
}

async function getPhoneReportPages(): Promise<Array<{ slug: string; updatedAt?: Date | string }>> {
    const data = await fetchSitemapJson<Array<{ slug?: string; updated_at?: string }>>(
        joinUrl(process.env.API_BASE_URL, 'phone-reports/recent'),
        {
            method: 'GET',
            headers: {
                ...(process.env.API_SECRET_KEY ? { Authorization: `Bearer ${process.env.API_SECRET_KEY}` } : {}),
                'Content-Type': 'application/json',
            },
        }
    )
    if (!Array.isArray(data)) return []
    return data
        .filter((report): report is { slug: string; updated_at?: string } => Boolean(report.slug))
        .map((report) => ({ slug: report.slug, updatedAt: report.updated_at ? new Date(report.updated_at) : undefined }))
}

export async function generateSitemapEntries(): Promise<SitemapEntry[]> {
    try {
        const [phoneReportPages, checkReportPages] = await Promise.all([
            getPhoneReportPages(),
            getIndexableCheckReportPages(),
        ])

        const staticEntries = sitemapGenerator.generateStaticEntries(STATIC_PAGES)
        const phoneReportEntries = sitemapGenerator.generateDynamicEntries(phoneReportPages, (item) => `/phone-number-validator/${item.slug}`, 0.8, 'weekly')
        const checkReportEntries = sitemapGenerator.generateDynamicEntries(checkReportPages, (item) => `/check/${item.slug}`, 0.7, 'weekly')

        let allEntries = sitemapGenerator.mergeEntries(staticEntries, phoneReportEntries, checkReportEntries)
        allEntries = sitemapGenerator.removeDuplicates(allEntries)
        const { valid } = sitemapGenerator.validateEntries(allEntries)
        return sitemapGenerator.sortEntries(valid)
    } catch {
        return sitemapGenerator.generateStaticEntries(STATIC_PAGES)
    }
}
