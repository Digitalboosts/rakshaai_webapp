/**
 * RakshaAI Topical Authority Architecture
 *
 * This file is the single source of truth for the site's topic cluster map.
 * It drives:
 *   - Internal linking (RelatedTopics component)
 *   - Breadcrumb generation
 *   - Sitemap priority hints
 *   - Cross-cluster navigation
 *   - Programmatic page generation
 */

export type PageType = 'pillar' | 'cluster' | 'supporting' | 'report' | 'blog' | 'tool';

export type TopicPage = {
  title: string;
  path: string;
  description: string;
  type: PageType;
  /** Primary entity this page targets, used for "[entity] scam India" query matching */
  entity?: string;
  keywords?: string[];
  children?: TopicPage[];
};

export type TopicCluster = {
  id: string;
  name: string;
  pillarPath: string;
  pillarTitle: string;
  description: string;
  /** The primary checker tool that supports this cluster */
  toolPath?: string;
  toolLabel?: string;
  color: string;
  icon: string;
  /** Query pattern this cluster targets */
  queryPattern: string;
  pages: TopicPage[];
};

// ─── Topic Clusters ───────────────────────────────────────────────────────────

export const TOPIC_CLUSTERS: TopicCluster[] = [
  // ── Cluster 1: UPI Fraud ────────────────────────────────────────────────────
  {
    id: 'upi-fraud',
    name: 'UPI Fraud',
    pillarPath: '/scams/upi-fraud',
    pillarTitle: 'UPI Fraud India: All Types, Warning Signs & Recovery',
    description: "India's most common payment fraud  covers QR code traps, collect requests, fake screenshots, OTP theft, and refund scams via UPI.",
    toolPath: '/upi-id-checker',
    toolLabel: 'Check UPI ID',
    color: 'indigo',
    icon: '💳',
    queryPattern: '[upi/payment] scam India',
    pages: [
      {
        title: 'UPI Fraud Hub',
        path: '/scams/upi-fraud',
        description: 'Complete guide to all UPI payment fraud types in India.',
        type: 'pillar',
        keywords: ['upi fraud india', 'upi scam', 'payment fraud india'],
      },
      {
        title: 'QR Code UPI Scam',
        path: '/scams/upi-fraud/qr-code-scam',
        description: 'How fake QR codes trick victims into sending money while appearing to receive it.',
        type: 'supporting',
        entity: 'QR Code',
        keywords: ['qr code scam india', 'fake qr code upi', 'scan qr code scam'],
      },
      {
        title: 'Wrong Transfer Refund Scam',
        path: '/blog/wrong-transfer-refund-scam-india',
        description: 'How accidental UPI transfer refund requests use different UPI IDs and reversals to steal money.',
        type: 'blog',
        entity: 'Wrong Transfer Refund',
        keywords: ['wrong transfer refund scam india', 'accidental transfer scam india', 'upi reversal scam india'],
      },
      {
        title: 'OTP & UPI PIN Fraud',
        path: '/scams/upi-fraud/otp-fraud',
        description: 'How fake bank, RBI, TRAI, and UPI support calls steal OTPs and UPI PINs.',
        type: 'supporting',
        entity: 'OTP Fraud',
        keywords: ['otp fraud india', 'upi pin fraud', 'fake bank call otp scam india'],
      },
      {
        title: 'Collect Request Fraud',
        path: '/scams/upi-fraud/collect-request-scam',
        description: 'Fraudulent UPI collect requests disguised as payment confirmations.',
        type: 'supporting',
        entity: 'Collect Request',
        keywords: ['upi collect request scam', 'upi collect fraud india'],
      },
      {
        title: 'Fake Payment Screenshot Scam',
        path: '/scams/upi-fraud/fake-payment-screenshot',
        description: 'Scammers share edited UPI payment confirmation screenshots to fake successful transactions.',
        type: 'supporting',
        entity: 'Fake Screenshot',
        keywords: ['fake upi screenshot', 'fake payment screenshot india', 'edited gpay screenshot'],
      },
      {
        title: 'Digital Arrest UPI Payment Scam',
        path: '/scams/upi-fraud/digital-arrest-scam',
        description: 'Fake CBI, ED, police, and TRAI callers demand UPI payment to avoid fabricated arrest or case threats.',
        type: 'supporting',
        entity: 'Digital Arrest',
        keywords: ['digital arrest scam india', 'fake cbi arrest india', 'digital arrest upi payment'],
      },
      {
        title: 'Fake UPI Payment Link Scam',
        path: '/scams/upi-fraud/fake-upi-link',
        description: 'Fraudulent WhatsApp, SMS, Telegram, and email links that mimic UPI apps or bank pages to steal credentials.',
        type: 'supporting',
        entity: 'UPI Phishing Link',
        keywords: ['fake upi payment link india', 'upi phishing link india', 'fake phonepe link'],
      },
      {
        title: 'Investment & Job Fraud via UPI',
        path: '/scams/upi-fraud/investment-job-fraud',
        description: 'Fake investment schemes, task jobs, and work-from-home offers that require UPI deposits before earnings or withdrawals.',
        type: 'supporting',
        entity: 'Investment Job Fraud',
        keywords: ['investment fraud upi india', 'job fraud upi deposit india', 'task scam upi india'],
      },
    ],
  },

  // ── Cluster 2: Phishing & Fake Websites ─────────────────────────────────────
  {
    id: 'phishing',
    name: 'Phishing & Fake Websites',
    pillarPath: '/scams/phishing',
    pillarTitle: 'Phishing in India: Spot Fake Websites, Emails & Links',
    description: 'Fake websites impersonating banks, government portals, and e-commerce platforms to steal credentials and financial data.',
    toolPath: '/website-safety-checker',
    toolLabel: 'Check Website Safety',
    color: 'orange',
    icon: '🎣',
    queryPattern: '[brand/website] phishing India',
    pages: [
      {
        title: 'Phishing Hub',
        path: '/scams/phishing',
        description: 'How phishing works, how to identify fake websites, and prevention.',
        type: 'pillar',
        keywords: ['phishing india', 'fake website india', 'phishing link checker'],
      },
      {
        title: 'Fake Websites',
        path: '/scams/fake-websites',
        description: 'How to identify fake shopping, banking, and government websites in India.',
        type: 'cluster',
        entity: 'Fake Website',
        keywords: ['fake website india', 'fake shopping website', 'fake bank website india'],
      },
      {
        title: 'How to Check If a Website Is Fake',
        path: '/blog/how-to-check-fake-website-india',
        description: '7 ways to spot a fake website in 60 seconds before you pay.',
        type: 'blog',
        keywords: ['how to check if website is fake india', 'fake website detector india', 'website trust score'],
      },
      // Planned: /blog/how-to-spot-phishing-links  not yet published; excluded from live links
      {
        title: 'Website Safety Checker Tool',
        path: '/website-safety-checker',
        description: 'Instant website safety check  get a Trust Score in under 5 seconds.',
        type: 'tool',
      },
    ],
  },

  // ── Cluster 3: Phone & SMS Scams ────────────────────────────────────────────
  {
    id: 'phone-scams',
    name: 'Phone & SMS Scams',
    pillarPath: '/scams/phone-scams',
    pillarTitle: 'Phone Scams India: OTP Fraud, KBC, Fake Bank Calls',
    description: 'Vishing calls, OTP theft, KBC lottery fraud, fake bank officer impersonation, SIM swap scams, and Wangiri (one-ring) fraud.',
    toolPath: '/phone-number-checker',
    toolLabel: 'Check Phone Number',
    color: 'green',
    icon: '📱',
    queryPattern: '[caller/number] scam India',
    pages: [
      {
        title: 'Phone Scams Hub',
        path: '/scams/phone-scams',
        description: 'All phone and SMS-based scam types targeting Indians.',
        type: 'pillar',
        keywords: ['phone scam india', 'fraud call india', 'scam call check'],
      },
      {
        title: 'OTP Fraud',
        path: '/scams/phone-scams/otp-fraud',
        description: 'How scammers steal UPI and banking OTPs via fake calls and social engineering.',
        type: 'supporting',
        entity: 'OTP Fraud',
        keywords: ['otp fraud india', 'otp scam', 'share otp scam', 'bank otp theft'],
      },
      {
        title: 'KBC Lottery Scam',
        path: '/scams/phone-scams/kbc-lottery-scam',
        description: 'Fake KBC prize calls and WhatsApp messages claiming lottery wins from Sony LIV.',
        type: 'supporting',
        entity: 'KBC Lottery',
        keywords: ['kbc lottery scam', 'kbc fraud india', 'fake kbc prize', 'kbc whatsapp scam'],
      },
      {
        title: 'Fake Bank Customer Care',
        path: '/scams/phone-scams/fake-bank-customer-care',
        description: 'Scammers impersonating SBI, HDFC, Paytm, and other bank helplines.',
        type: 'supporting',
        entity: 'Bank Customer Care',
        keywords: ['fake bank customer care india', 'sbi helpline scam', 'bank impersonation fraud'],
      },
      {
        title: 'Phone Number Checker Tool',
        path: '/phone-number-checker',
        description: 'Check if a phone number has been reported for scam activity.',
        type: 'tool',
      },
    ],
  },

  // ── Cluster 4: Digital Arrest ───────────────────────────────────────────────
  {
    id: 'digital-arrest',
    name: 'Digital Arrest Scam',
    pillarPath: '/scams/digital-arrest',
    pillarTitle: 'Digital Arrest Scam India: CBI, ED, Police Impersonation',
    description: 'Fraudsters impersonating CBI, ED, police, TRAI, and customs officials over video call to extort money through fake arrest threats.',
    toolPath: '/phone-number-checker',
    toolLabel: 'Report Scam Number',
    color: 'red',
    icon: '🚨',
    queryPattern: 'digital arrest [agency] scam India',
    pages: [
      {
        title: 'Digital Arrest Scam Hub',
        path: '/scams/digital-arrest',
        description: 'Complete guide to digital arrest fraud  all variants and prevention.',
        type: 'pillar',
        keywords: ['digital arrest scam', 'fake cbi call india', 'ed impersonation scam'],
      },
      {
        title: 'Fake CBI Call Scam',
        path: '/scams/digital-arrest/fake-cbi-scam',
        description: 'Fraudsters impersonating Central Bureau of Investigation (CBI) officers over video call.',
        type: 'supporting',
        entity: 'CBI',
        keywords: ['fake cbi call india', 'cbi scam india', 'cbi impersonation fraud'],
      },
      {
        title: 'Fake ED (Enforcement Directorate) Scam',
        path: '/scams/digital-arrest/fake-ed-scam',
        description: 'Enforcement Directorate impersonation scams targeting businesses and professionals.',
        type: 'supporting',
        entity: 'Enforcement Directorate',
        keywords: ['fake ed call india', 'enforcement directorate scam', 'ed impersonation'],
      },
      {
        title: 'Fake Customs Duty Scam',
        path: '/scams/digital-arrest/fake-customs-scam',
        description: 'Fake customs officers threatening arrest over "seized" parcels unless fees are paid.',
        type: 'supporting',
        entity: 'Customs',
        keywords: ['fake customs call india', 'customs duty scam', 'parcel seized scam india'],
      },
      {
        title: 'Fake TRAI Scam',
        path: '/scams/digital-arrest/fake-trai-scam',
        description: 'Fraudsters claiming your mobile number is linked to criminal activity and will be disconnected.',
        type: 'supporting',
        entity: 'TRAI',
        keywords: ['fake trai call india', 'trai scam', 'mobile number disconnection scam'],
      },
    ],
  },

  // ── Cluster 5: WhatsApp Scams ───────────────────────────────────────────────
  {
    id: 'whatsapp-scams',
    name: 'WhatsApp Scams',
    pillarPath: '/scams/whatsapp-scams',
    pillarTitle: 'WhatsApp Scams India: Job Offers, Investment Groups & Lottery Fraud',
    description: 'India-specific scams delivered via WhatsApp  investment groups, fake job offers, lottery fraud, phishing links, and digital arrest threats.',
    toolPath: '/check',
    toolLabel: 'Check Suspicious Link',
    color: 'emerald',
    icon: '💬',
    queryPattern: 'WhatsApp [scam type] India',
    pages: [
      {
        title: 'WhatsApp Scams Hub',
        path: '/scams/whatsapp-scams',
        description: 'All major scam types delivered via WhatsApp in India.',
        type: 'pillar',
        keywords: ['whatsapp scam india', 'whatsapp fraud india', 'whatsapp scam link checker'],
      },
      {
        title: 'WhatsApp Investment Scam',
        path: '/scams/whatsapp-scams/investment-scam',
        description: 'Fake investment WhatsApp groups promising guaranteed returns and pulling victims into Ponzi schemes.',
        type: 'supporting',
        entity: 'WhatsApp Investment Group',
        keywords: ['whatsapp investment scam india', 'whatsapp investment group fraud', 'fake trading group whatsapp'],
      },
      {
        title: 'WhatsApp Job Offer Scam',
        path: '/scams/whatsapp-scams/job-offer-scam',
        description: 'Fraudulent part-time job offers sent over WhatsApp requiring upfront registration fees.',
        type: 'supporting',
        entity: 'WhatsApp Job',
        keywords: ['whatsapp job scam india', 'work from home scam whatsapp', 'part time job scam whatsapp india'],
      },
      {
        title: 'WhatsApp Lottery Scam',
        path: '/scams/whatsapp-scams/lottery-scam',
        description: 'Fake prize notifications via WhatsApp from fake KBC, Amazon, BSNL, and government lottery schemes.',
        type: 'supporting',
        entity: 'WhatsApp Lottery',
        keywords: ['whatsapp lottery scam', 'fake prize whatsapp india', 'kbc whatsapp lottery'],
      },
      {
        title: 'WhatsApp Phishing Links',
        path: '/scams/whatsapp-scams/phishing-links',
        description: 'Malicious links shared via WhatsApp impersonating banks, IRCTC, and government portals.',
        type: 'supporting',
        entity: 'WhatsApp Link',
        keywords: ['whatsapp phishing link india', 'suspicious whatsapp link checker', 'fake link whatsapp'],
      },
    ],
  },

  // ── Cluster 6: Investment Scams ─────────────────────────────────────────────
  {
    id: 'investment-scams',
    name: 'Investment Scams',
    pillarPath: '/scams/investment-scams',
    pillarTitle: 'Investment Scams India: Fake Trading Apps, Ponzi Schemes',
    description: 'Fraudulent investment platforms, fake stock trading apps, WhatsApp/Telegram tip groups, and cryptocurrency Ponzi schemes targeting Indian investors.',
    toolPath: '/check',
    toolLabel: 'Check Platform Safety',
    color: 'purple',
    icon: '📈',
    queryPattern: '[platform/scheme] investment scam India',
    pages: [
      {
        title: 'Investment Scams Hub',
        path: '/scams/investment-scams',
        description: 'All types of investment fraud targeting Indian investors.',
        type: 'pillar',
        keywords: ['investment scam india', 'fake trading app india', 'ponzi scheme india'],
      },
      {
        title: 'Stock Trading App Scam',
        path: '/scams/investment-scams/stock-trading-app-scam',
        description: 'Fake stock market apps that show fake profits but block withdrawals.',
        type: 'supporting',
        entity: 'Stock Trading App',
        keywords: ['fake stock trading app india', 'fake trading app scam india', 'fake zerodha app'],
      },
      {
        title: 'Telegram Investment Scam',
        path: '/scams/investment-scams/telegram-investment-scam',
        description: 'Pump-and-dump groups and fake signals on Telegram defrauding Indian investors.',
        type: 'supporting',
        entity: 'Telegram',
        keywords: ['telegram investment scam india', 'telegram trading scam', 'telegram pump dump india'],
      },
      {
        title: 'Crypto Scams Hub',
        path: '/scams/crypto-scams',
        description: 'Cryptocurrency fraud targeting India  fake exchanges, airdrops, and pig-butchering.',
        type: 'cluster',
        keywords: ['crypto scam india', 'bitcoin scam india', 'cryptocurrency fraud india'],
      },
    ],
  },

  // ── Cluster 7: E-commerce & Shopping Fraud ──────────────────────────────────
  {
    id: 'ecommerce-fraud',
    name: 'E-commerce Fraud',
    pillarPath: '/scams/e-commerce-fraud',
    pillarTitle: 'E-commerce Fraud India: Fake Websites, COD Scams, Marketplace Fraud',
    description: 'Fake shopping websites, cloned e-commerce portals, COD fraud, marketplace seller scams, and advance-payment trap schemes.',
    toolPath: '/website-safety-checker',
    toolLabel: 'Check Shopping Website',
    color: 'cyan',
    icon: '🛒',
    queryPattern: '[brand/platform] fake website India',
    pages: [
      {
        title: 'E-commerce Fraud Hub',
        path: '/scams/e-commerce-fraud',
        description: 'All types of online shopping and marketplace fraud in India.',
        type: 'pillar',
        keywords: ['fake shopping website india', 'ecommerce fraud india', 'online shopping scam india'],
      },
      {
        title: 'Fake Shopping Website Fraud',
        path: '/scams/e-commerce-fraud/fake-online-stores',
        description: 'How to spot lookalike shopping domains, verify an unfamiliar store and report non-delivery or junk-item fraud in India.',
        type: 'supporting',
        entity: 'Fake Online Store',
        keywords: ['fake shopping website india', 'fake online store india', 'how to check website genuine india'],
      },
      {
        title: 'COD Fraud',
        path: '/scams/e-commerce-fraud/cod-fraud',
        description: 'How to refuse unordered cash-on-delivery parcels, stop address confirmation scams, and report repeated COD targeting.',
        type: 'supporting',
        keywords: ['cod scam india', 'unordered cod parcel india', 'cash on delivery fraud india'],
      },
      {
        title: 'Advance Payment Trap',
        path: '/scams/e-commerce-fraud/advance-payment-trap',
        description: 'How off-platform UPI advances, token money requests and marketplace deposits trap Indian online buyers.',
        type: 'supporting',
        keywords: ['advance payment scam india', 'outside platform payment scam india', 'olx advance payment scam india'],
      },
      {
        title: 'Counterfeit Products Online',
        path: '/scams/e-commerce-fraud/counterfeit-products',
        description: 'How to spot fake products on Amazon, Flipkart, Meesho and social sellers, verify authenticity, and get a refund.',
        type: 'supporting',
        keywords: ['counterfeit products online india', 'fake products amazon india', 'bis certification check india'],
      },
      {
        title: 'Social Media & WhatsApp Shopping Scam',
        path: '/scams/e-commerce-fraud/social-commerce-scam',
        description: 'How fake Instagram sellers, WhatsApp shopping groups, Facebook Marketplace listings and AI deepfake ads trap Indian buyers.',
        type: 'supporting',
        keywords: ['social media shopping scam india', 'instagram shopping scam india', 'whatsapp shopping scam india'],
      },
      {
        title: 'Fake Marketplace Seller Fraud',
        path: '/scams/e-commerce-fraud/fake-marketplace-seller',
        description: 'How fraudulent third-party sellers on Amazon, Flipkart and Meesho mark orders delivered, send fake tracking and avoid refunds.',
        type: 'supporting',
        entity: 'Marketplace Seller',
        keywords: ['fake seller amazon india', 'fake marketplace seller india', 'flipkart fake seller refund'],
      },
      {
        title: 'Phantom Delivery Scam',
        path: '/scams/e-commerce-fraud/phantom-delivery',
        description: 'What to do when an online order is marked delivered but never arrives, or an empty box is delivered to close the refund window.',
        type: 'supporting',
        keywords: ['phantom delivery scam india', 'order marked delivered but not received india', 'empty box received online shopping india'],
      },
      // Planned: /blog/safe-online-shopping-tips  not yet published; excluded from live links
    ],
  },

  // ── Cluster 8: Job Scams ─────────────────────────────────────────────────────
  {
    id: 'job-scams',
    name: 'Job Scams',
    pillarPath: '/scams/job-scams',
    pillarTitle: 'Job Scams India: Fake Offers, Registration Fees & Task Fraud',
    description: 'Fake job offers requiring upfront fees, data entry / YouTube like-task scams, fake HR calls, and fraudulent work-from-home schemes.',
    toolPath: '/check',
    toolLabel: 'Check Company Website',
    color: 'yellow',
    icon: '💼',
    queryPattern: '[company/platform] job scam India',
    pages: [
      {
        title: 'Job Scams Hub',
        path: '/scams/job-scams',
        description: 'Employment fraud types in India  registration fees, task scams, fake HR.',
        type: 'pillar',
        keywords: ['job scam india', 'fake job offer india', 'work from home scam india'],
      },
      {
        title: 'WhatsApp Job Offer Scam',
        path: '/scams/job-scams/whatsapp-job-scam',
        description: 'WhatsApp and Telegram job offers that build trust with small task payments before demanding a deposit.',
        type: 'supporting',
        entity: 'WhatsApp Job',
        keywords: ['whatsapp job scam', 'fake job offer whatsapp india', 'telegram job scam india', 'task deposit job scam'],
      },
      {
        title: "Task Scam / 'Like and Earn' Fraud",
        path: '/scams/job-scams/task-scam',
        description: 'Task platforms that use real small payouts before escalating boosted-task deposit demands.',
        type: 'supporting',
        entity: 'Task Scam',
        keywords: ['task scam india', 'like and earn scam india', 'telegram task scam india', 'boosted task scam'],
      },
      {
        title: 'Advance Fee Job Registration Fraud',
        path: '/scams/job-scams/advance-fee-job-fraud',
        description: 'Formal fake offer letters followed by registration, background-check, training, uniform or equipment fees.',
        type: 'supporting',
        entity: 'Advance Fee Job',
        keywords: ['job registration fee scam india', 'fake job offer letter india', 'advance fee job fraud india'],
      },
      {
        title: 'Fake Job Portal / Naukri Clone Scam',
        path: '/scams/job-scams/fake-job-portal',
        description: 'Clone job-listing platforms that harvest resumes, Aadhaar, PAN and contact details for downstream identity misuse.',
        type: 'supporting',
        entity: 'Fake Job Portal',
        keywords: ['fake job portal india', 'fake naukri website india', 'resume data theft india', 'aadhaar job scam india'],
      },
      {
        title: 'Fake Company / Fake HR Portal Scam',
        path: '/scams/job-scams/fake-company-portal',
        description: 'Professional websites impersonating TCS, Infosys, Wipro or Amazon India, with fake Google Meet interviews and forged offer letters demanding laptop, security or onboarding fees.',
        type: 'supporting',
        entity: 'Fake Company HR Portal',
        keywords: ['fake tcs job offer india', 'fake infosys job offer india', 'fake company hr portal india', 'fake google meet interview scam india', 'laptop deposit job scam india'],
      },
      {
        title: 'Overseas Job Scam / Human Trafficking',
        path: '/scams/job-scams/overseas-job-scam',
        description: 'Fake overseas employment offers that cause visa-fee losses or route workers into forced cybercrime and trafficking situations.',
        type: 'supporting',
        entity: 'Overseas Job',
        keywords: ['overseas job scam india', 'fake job offer abroad india', 'myanmar job scam india', 'eMigrate agent check'],
      },
      {
        title: 'Influencer & Content Creator Scam',
        path: '/scams/job-scams/influencer-scam',
        description: 'Fake brand collaborations, creator programme fees and malicious sponsorship files targeting social-media creators.',
        type: 'supporting',
        entity: 'Influencer Brand Deal',
        keywords: ['influencer scam india', 'fake brand collaboration india', 'content creator job scam india', 'youtube fake sponsorship scam'],
      },
      {
        title: 'MLM / Pyramid Scheme Scam',
        path: '/scams/job-scams/mlm-pyramid-scam',
        description: 'Referral-earnings business opportunities funded by joining fees, training kits and starter packs, structured as a pyramid that mathematically collapses.',
        type: 'supporting',
        entity: 'MLM Pyramid Scheme',
        keywords: ['mlm scam india', 'pyramid scheme india', 'referral earning scam india', 'network marketing scam india', 'is mlm legal in india'],
      },
    ],
  },

  // ── Cluster 9: Romance Scams ─────────────────────────────────────────────────
  {
    id: 'romance-scams',
    name: 'Romance Scams',
    pillarPath: '/scams/romance-scams',
    pillarTitle: 'Romance Scams India: Matrimonial & Dating App Fraud',
    description: 'Fake relationships built on dating apps and matrimonial sites to extract money via fabricated emergencies.',
    toolPath: '/check',
    toolLabel: 'Verify Suspicious Link',
    color: 'pink',
    icon: '💔',
    queryPattern: '[platform] romance scam India',
    pages: [
      {
        title: 'Romance Scams Hub',
        path: '/scams/romance-scams',
        description: 'Dating app and matrimonial site fraud targeting Indians.',
        type: 'pillar',
        keywords: ['romance scam india', 'dating app fraud india', 'matrimonial scam india'],
      },
      {
        title: 'Catfishing / Fake Dating Profile Scam',
        path: '/scams/romance-scams/catfishing-india',
        description: 'Stolen photos and a fabricated NRI, army officer or doctor identity used to build a fake relationship on Tinder, TrulyMadly or Woo before a money request.',
        type: 'supporting',
        entity: 'Catfishing',
        keywords: ['catfishing india', 'fake dating profile india', 'nri dating scam india', 'tinder scam india', 'pig butchering scam india'],
      },
      {
        title: 'Army Officer Romance Scam',
        path: '/scams/romance-scams/army-officer-scam',
        description: 'A fake Indian Army, CRPF, BSF or UN peacekeeper profile builds trust for weeks before requesting money for leave travel, DSOP fund release, a medical emergency or a shipment fee.',
        type: 'supporting',
        entity: 'Military Romance Scam',
        keywords: ['army officer romance scam india', 'military romance scam india', 'fake army officer scam india', 'dsop fund scam india', 'un peacekeeper romance scam india'],
      },
      {
        title: 'Instagram & Facebook Romance Scam',
        path: '/scams/romance-scams/social-media-romance-scam',
        description: 'An unsolicited Instagram or Facebook DM builds a relationship on WhatsApp that forks into a money request or sextortion - intimate content captured on a video call and used for blackmail.',
        type: 'supporting',
        entity: 'Social Media Romance Scam',
        keywords: ['instagram romance scam india', 'facebook romance scam india', 'social media romance scam india', 'sextortion india', 'fake instagram profile india'],
      },
      {
        title: 'Sextortion India',
        path: '/scams/romance-scams/sextortion-india',
        description: 'The definitive India guide to sextortion - fake romance, WhatsApp video call traps and deepfake blackmail - with the do-not-pay evidence, image removal steps and POCSO guidance for minors.',
        type: 'supporting',
        entity: 'Sextortion',
        keywords: ['sextortion india', 'sextortion whatsapp india', 'online blackmail india', 'how to report sextortion india', 'deepfake sextortion india'],
      },
    ],
  },

  // ── Cluster 10: Loan Fraud ───────────────────────────────────────────────────
  {
    id: 'loan-fraud',
    name: 'Loan Fraud',
    pillarPath: '/scams/loan-fraud',
    pillarTitle: 'Loan Fraud India: Fake Apps, Upfront Fees & Illegal NBFCs',
    description: 'Fake instant loan apps demanding upfront processing fees, unauthorized NBFCs, and illegal debt collection harassment.',
    toolPath: '/check',
    toolLabel: 'Verify Lender Website',
    color: 'rose',
    icon: '🏦',
    queryPattern: '[app/lender] loan scam India',
    pages: [
      {
        title: 'Loan Fraud Hub',
        path: '/scams/loan-fraud',
        description: 'All types of loan fraud and illegal lending app scams in India.',
        type: 'pillar',
        keywords: ['loan scam india', 'fake loan app india', 'illegal loan app india'],
      },
    ],
  },
];

// ─── Programmatic URL Patterns ────────────────────────────────────────────────

/**
 * Programmatic SEO URL structure for "[entity] scam India" long-tail queries
 *
 * Pattern: /scams/[cluster]/[entity-slug]
 * Example: /scams/phone-scams/otp-fraud
 *          /scams/digital-arrest/fake-cbi-scam
 *          /scams/whatsapp-scams/investment-scam
 *
 * Report pages (programmatic, data-driven):
 *   /check/[website-slug]                → website trust reports
 *   /phone-number-validator/[slug]       → phone scam reports
 *   /upi-id-checker/[slug]              → UPI ID scam reports
 *
 * Long-tail "[entity] scam India" landing pages:
 *   Priority entities to cover:
 *   - "sbi phishing" → /scams/phishing#sbi-phishing
 *   - "hdfc fake website" → /scams/fake-websites#hdfc
 *   - "amazon india fake seller" → /scams/e-commerce-fraud#amazon
 *   - "zerodha fake app" → /scams/investment-scams/stock-trading-app-scam#zerodha
 *   - "kbc lottery scam" → /scams/phone-scams/kbc-lottery-scam
 */

export const PROGRAMMATIC_ENTITY_MAP: Record<string, { cluster: string; path: string; queryVariants: string[] }> = {
  'sbi-phishing': {
    cluster: 'phishing',
    path: '/scams/phishing',
    queryVariants: ['sbi phishing india', 'fake sbi website', 'sbi net banking phishing', 'sbi fraud link'],
  },
  'hdfc-fake-website': {
    cluster: 'phishing',
    path: '/scams/fake-websites',
    queryVariants: ['hdfc fake website', 'fake hdfc bank india', 'hdfc phishing link'],
  },
  'amazon-fake-seller': {
    cluster: 'ecommerce-fraud',
    path: '/scams/e-commerce-fraud/fake-marketplace-seller',
    queryVariants: ['amazon india scam', 'fake amazon seller india', 'amazon fake product india'],
  },
  'fake-online-store': {
    cluster: 'ecommerce-fraud',
    path: '/scams/e-commerce-fraud/fake-online-stores',
    queryVariants: ['fake shopping website india', 'fake online store india', 'shopping website fraud india'],
  },
  'kbc-lottery': {
    cluster: 'phone-scams',
    path: '/scams/phone-scams/kbc-lottery-scam',
    queryVariants: ['kbc lottery scam india', 'kbc fraud', 'fake kbc prize 2025', 'kbc whatsapp scam'],
  },
  'cbi-digital-arrest': {
    cluster: 'digital-arrest',
    path: '/scams/digital-arrest/fake-cbi-scam',
    queryVariants: ['cbi digital arrest scam', 'fake cbi call india', 'cbi arrest scam india'],
  },
  'ed-digital-arrest': {
    cluster: 'digital-arrest',
    path: '/scams/digital-arrest/fake-ed-scam',
    queryVariants: ['ed enforcement directorate scam', 'fake ed call india', 'ed arrest scam'],
  },
  'whatsapp-investment-group': {
    cluster: 'whatsapp-scams',
    path: '/scams/whatsapp-scams/investment-scam',
    queryVariants: ['whatsapp investment scam india', 'fake trading group whatsapp', 'whatsapp stock tip scam'],
  },
  'youtube-task-scam': {
    cluster: 'job-scams',
    path: '/scams/job-scams/task-scam',
    queryVariants: ['youtube like subscribe task scam', 'part time task scam india', 'online task fraud india'],
  },
  'fake-job-portal': {
    cluster: 'job-scams',
    path: '/scams/job-scams/fake-job-portal',
    queryVariants: ['fake job portal india', 'naukri clone scam', 'resume data theft india', 'aadhaar job application scam'],
  },
  'fake-company-portal': {
    cluster: 'job-scams',
    path: '/scams/job-scams/fake-company-portal',
    queryVariants: ['fake tcs job offer india', 'fake infosys job offer india', 'fake wipro job offer india', 'fake company hr portal india', 'fake google meet interview scam india'],
  },
  'overseas-job-scam': {
    cluster: 'job-scams',
    path: '/scams/job-scams/overseas-job-scam',
    queryVariants: ['overseas job scam india', 'fake dubai job offer india', 'myanmar job scam india', 'eMigrate recruiting agent check'],
  },
  'influencer-scam': {
    cluster: 'job-scams',
    path: '/scams/job-scams/influencer-scam',
    queryVariants: ['influencer scam india', 'fake brand collaboration instagram india', 'content creator scam india', 'fake sponsorship email youtube'],
  },
  'mlm-pyramid-scam': {
    cluster: 'job-scams',
    path: '/scams/job-scams/mlm-pyramid-scam',
    queryVariants: ['mlm scam india', 'pyramid scheme india', 'referral earning scam india', 'network marketing scam india', 'is mlm legal in india'],
  },
  'catfishing-india': {
    cluster: 'romance-scams',
    path: '/scams/romance-scams/catfishing-india',
    queryVariants: ['catfishing india', 'fake dating profile india', 'nri dating scam india', 'tinder scam india', 'reverse image search fake profile india'],
  },
  'army-officer-scam': {
    cluster: 'romance-scams',
    path: '/scams/romance-scams/army-officer-scam',
    queryVariants: ['army officer romance scam india', 'military romance scam india', 'fake army officer scam india', 'dsop fund scam india', 'un peacekeeper romance scam india'],
  },
  'social-media-romance-scam': {
    cluster: 'romance-scams',
    path: '/scams/romance-scams/social-media-romance-scam',
    queryVariants: ['instagram romance scam india', 'facebook romance scam india', 'sextortion india', 'sextortion whatsapp india', 'fake instagram profile india'],
  },
  'sextortion-india': {
    cluster: 'romance-scams',
    path: '/scams/romance-scams/sextortion-india',
    queryVariants: ['sextortion india', 'sextortion whatsapp india', 'online blackmail india', 'how to report sextortion india', 'deepfake sextortion india'],
  },
};

// ─── Internal Linking Map ─────────────────────────────────────────────────────

/**
 * For each cluster ID, defines which other clusters are most relevant to cross-link.
 * Used by the RelatedTopics component to build contextual "Related Topics" sections.
 */
export const CROSS_CLUSTER_LINKS: Record<string, string[]> = {
  'upi-fraud': ['whatsapp-scams', 'phone-scams', 'ecommerce-fraud'],
  'phishing': ['ecommerce-fraud', 'upi-fraud', 'whatsapp-scams'],
  'phone-scams': ['digital-arrest', 'upi-fraud', 'whatsapp-scams'],
  'digital-arrest': ['phone-scams', 'investment-scams', 'whatsapp-scams'],
  'whatsapp-scams': ['investment-scams', 'job-scams', 'upi-fraud'],
  'investment-scams': ['whatsapp-scams', 'digital-arrest', 'phone-scams'],
  'ecommerce-fraud': ['phishing', 'upi-fraud', 'romance-scams'],
  'job-scams': ['whatsapp-scams', 'upi-fraud', 'phone-scams'],
  'romance-scams': ['ecommerce-fraud', 'investment-scams', 'phone-scams'],
  'loan-fraud': ['phone-scams', 'upi-fraud', 'job-scams'],
};

// ─── Helper Functions ─────────────────────────────────────────────────────────

export function getClusterById(id: string): TopicCluster | undefined {
  return TOPIC_CLUSTERS.find((c) => c.id === id);
}

export function getClusterByPath(path: string): TopicCluster | undefined {
  return TOPIC_CLUSTERS.find(
    (c) => c.pillarPath === path || c.pages.some((p) => p.path === path)
  );
}

/** Returns clusters related to the given cluster ID for cross-linking. */
export function getRelatedClusters(clusterId: string): TopicCluster[] {
  const relatedIds = CROSS_CLUSTER_LINKS[clusterId] ?? [];
  return relatedIds.map((id) => getClusterById(id)).filter(Boolean) as TopicCluster[];
}

/** Returns sibling pages within the same cluster for internal linking. */
export function getSiblingPages(path: string): { page: TopicPage; cluster: TopicCluster } | null {
  for (const cluster of TOPIC_CLUSTERS) {
    if (cluster.pages.some((p) => p.path === path)) {
      return { page: cluster.pages.find((p) => p.path === path)!, cluster };
    }
  }
  return null;
}

/** Returns breadcrumb items for a given page path */
export function getBreadcrumbForPath(path: string): { name: string; url: string }[] {
  const breadcrumbs: { name: string; url: string }[] = [{ name: 'Home', url: '/' }];

  const cluster = getClusterByPath(path);
  if (!cluster) return breadcrumbs;

  // Scams hub
  if (path.startsWith('/scams/')) {
    breadcrumbs.push({ name: 'Scams', url: '/scams' });
  }

  // If it's a sub-page of a cluster (not the pillar itself)
  if (path !== cluster.pillarPath) {
    breadcrumbs.push({ name: cluster.name, url: cluster.pillarPath });
  }

  const page = cluster.pages.find((p) => p.path === path);
  if (page) {
    breadcrumbs.push({ name: page.title, url: path });
  }

  return breadcrumbs;
}

/** All sitemap-worthy pages from all clusters (deduped) */
export function getAllTopicPages(): { path: string; type: PageType; cluster: string }[] {
  const seen = new Set<string>();
  const results: { path: string; type: PageType; cluster: string }[] = [];

  for (const cluster of TOPIC_CLUSTERS) {
    for (const page of cluster.pages) {
      if (!seen.has(page.path) && page.type !== 'tool') {
        seen.add(page.path);
        results.push({ path: page.path, type: page.type, cluster: cluster.id });
      }
    }
  }

  return results;
}
