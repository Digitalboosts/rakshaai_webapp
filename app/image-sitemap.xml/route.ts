import { NextResponse } from 'next/server'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://rakshaai.co'

export const dynamic = 'force-static'
export const revalidate = 86400 // 24 hours

const blogImages: Array<{
  pageUrl: string
  images: Array<{ url: string; title: string; caption?: string }>
}> = [
  {
    pageUrl: '/blog/chakshu-portal-india-how-to-report',
    images: [
      { url: '/blog/blog48/chakshu-portal-india-hero.webp', title: 'Chakshu portal India scam report guide', caption: 'Illustration of a suspicious call report and submission confirmation' },
      { url: '/blog/blog48/chakshu-vs-1930-vs-cybercrime-india.webp', title: 'Chakshu, 1930 and cybercrime.gov.in comparison', caption: 'When to use each official Indian fraud reporting route' },
      { url: '/blog/blog48/sanchar-saathi-tools-india.webp', title: 'Sanchar Saathi citizen tools in India', caption: 'Chakshu, lost phone blocking and mobile connection checks, with an article correction about DIP' },
      { url: '/blog/blog48/check-sim-cards-aadhaar-tafcop.webp', title: 'Check mobile connections in your name through Sanchar Saathi', caption: 'Steps to identify and report mobile connections that are not yours' },
    ],
  },
  {
    pageUrl: '/blog/cyber-hygiene-india',
    images: [
      { url: '/blog/blog49/cyber-hygiene-india-hero.jpg', title: 'Cyber hygiene India 2026 daily safety habits', caption: 'A morning desk with a phone, cyber safety checklist, calendar and chai' },
      { url: '/blog/blog49/ten-daily-cyber-hygiene-habits-india.jpg', title: 'Ten daily cyber hygiene habits for India', caption: 'A printable checklist for calls, links, payments, alerts, passwords and reporting' },
      { url: '/blog/blog49/five-minute-weekly-security-routine-india.jpg', title: 'Five-minute weekly cyber security routine India', caption: 'A Sunday routine for bank, Aadhaar, permissions, beneficiaries and alerts' },
      { url: '/blog/blog49/teach-family-cyber-safety-habits-india.jpg', title: 'Teach cyber safety habits to family in India', caption: 'A three-stage family plan starting with OTP safety' },
    ],
  },
  {
    pageUrl: '/blog/password-safety-india',
    images: [
      {
        url: '/blog/blog47/password-safety-india-hero.jpg',
        title: 'Password safety India 2026 and weak password warning',
        caption: 'A login screen contrasts predictable passwords with a long unique passphrase',
      },
      {
        url: '/blog/blog47/weak-vs-strong-password-india.jpg',
        title: 'Weak and strong password examples for India',
        caption: 'A visual comparison of short predictable passwords and long unique alternatives',
      },
      {
        url: '/blog/blog47/enable-2fa-india.jpg',
        title: 'How to enable two-factor authentication in India',
        caption: 'Two-factor authentication priorities for email, banking, WhatsApp and social media',
      },
      {
        url: '/blog/blog47/free-password-managers-india.jpg',
        title: 'Free password manager options for India',
        caption: 'Password manager options for browsers, Android, iPhone and desktop users',
      },
    ],
  },
  {
    pageUrl: '/blog/online-shopping-scam-india',
    images: [
      {
        url: '/blog/blog46/online-shopping-scam-india-hero.jpg',
        title: 'Online shopping scam India 2026 and fake product warning',
        caption: 'A shopper compares a polished sneaker listing with the counterfeit shoes that arrived',
      },
      {
        url: '/blog/blog46/seven-online-shopping-scams-india.jpg',
        title: 'Seven online shopping scam types in India',
        caption: 'Fake sellers, counterfeit products, non-delivery, return traps, WhatsApp fraud, fake sales and substitution',
      },
      {
        url: '/blog/blog46/safe-online-shopping-checklist-india.jpg',
        title: 'Safe online shopping checklist for India in 2026',
        caption: 'Eight seller, website, payment, evidence and return-policy checks to complete before paying',
      },
      {
        url: '/blog/blog46/online-seller-scam-response-india.jpg',
        title: 'What to do after an online seller scam in India',
        caption: 'Platform complaint, bank dispute, National Consumer Helpline, cybercrime report and RakshaAI warning steps',
      },
    ],
  },
  {
    pageUrl: '/blog/real-estate-scam-india',
    images: [
      {
        url: '/blog/blog45/real-estate-scam-india-hero.webp',
        title: 'Real estate scam India 2026 and fake builder warning',
        caption: 'A couple compares property documents at an abandoned construction project under litigation',
      },
      {
        url: '/blog/blog45/six-real-estate-scams-india.webp',
        title: 'Six real estate scam types in India',
        caption: 'Fake builders, duplicate sales, false RERA claims, land conversion, forged authority, and rental advance fraud',
      },
      {
        url: '/blog/blog45/property-verification-checklist-india.webp',
        title: 'Property deal verification checklist for India',
        caption: 'Seven checks covering RERA, title, encumbrances, company status, land use, legal review, and traceable payment',
      },
      {
        url: '/blog/blog45/rera-homebuyer-rights-india.webp',
        title: 'RERA homebuyer rights in India',
        caption: 'Refund, defect rectification, complaint, and project disclosure rights under RERA',
      },
    ],
  },
  {
    pageUrl: '/blog/credit-card-fraud-india',
    images: [
      {
        url: '/blog/blog44/credit-card-fraud-india-hero.webp',
        title: 'Credit card fraud India 2026 and ATM skimming warning',
        caption: 'A close view of a payment card entering a suspicious ATM card slot at night',
      },
      {
        url: '/blog/blog44/six-card-fraud-methods-india.webp',
        title: 'Six credit and debit card fraud methods in India',
        caption: 'ATM skimming, phishing, CNP fraud, POS cloning, vishing, and data breach methods',
      },
      {
        url: '/blog/blog44/atm-safety-rules-india.webp',
        title: 'Five ATM safety rules to prevent card skimming in India',
        caption: 'Card slot inspection, PIN protection, safer ATM locations, alerts, and official bank contact rules',
      },
      {
        url: '/blog/blog44/lock-card-india-60-seconds.webp',
        title: 'How to lock a credit or debit card in India',
        caption: 'Bank app, official fraud helpline, and transaction dispute methods for fast card protection',
      },
    ],
  },
  {
    pageUrl: '/blog/travel-scam-india',
    images: [
      {
        url: '/blog/blog43/travel-scam-india-hero.jpg',
        title: 'Travel scam India 2026 targeting tourists and pilgrims',
        caption: 'A family discovers that a pilgrimage package booked through an unknown WhatsApp contact may be fake',
      },
      {
        url: '/blog/blog43/seven-travel-scams-india.jpg',
        title: 'Seven travel scam types active in India in 2026',
        caption: 'Fake yatra packages, hotels, WhatsApp agents, taxi fares, tourist centres, gems, and charity collections',
      },
      {
        url: '/blog/blog43/official-travel-booking-portals-india-edited.jpg',
        title: 'Official travel booking portal reference for India',
        caption: 'A shareable reference covering hotels, trains, Char Dham, flights, and travel agents',
      },
      {
        url: '/blog/blog43/safe-travel-payment-rules-india-edited.jpg',
        title: 'Safe travel payment rules for India in 2026',
        caption: 'Six payment checks before paying for a travel package, pilgrimage service, or hotel room',
      },
    ],
  },
  {
    pageUrl: '/blog/cyber-law-india-victim-rights',
    images: [
      {
        url: '/blog/blog42/cyber-law-india-victim-rights-hero.webp',
        title: 'India cyber law 2026 fraud victim rights and reporting routes',
        caption: 'A fraud victim holds an RBI circular and opens the national cybercrime reporting interface',
      },
      {
        url: '/blog/blog42/five-legal-rights-cyber-fraud-victim-india.webp',
        title: 'Five legal rights of cyber fraud victims in India',
        caption: 'RBI liability, FIR information, consumer redress, regulator escalation, and data security remedies',
      },
      {
        url: '/blog/blog42/file-cyber-fraud-fir-india.webp',
        title: 'How to file a cyber fraud FIR in India',
        caption: 'Evidence, cybercrime portal, police complaint, acknowledgement, and escalation steps',
      },
      {
        url: '/blog/blog42/india-cyber-fraud-laws-2026.webp',
        title: 'India cyber fraud laws 2026 reference',
        caption: 'IT Act, BNS, RBI customer protection, DPDP transition, and consumer law reference',
      },
    ],
  },
  {
    pageUrl: '/blog/business-scam-india',
    images: [
      {
        url: '/blog/blog41/business-scam-india-hero.webp',
        title: 'Business scam India 2026, fake purchase order targeting an Indian SME',
        caption: 'A textile business owner reviews a suspicious bulk order that demands a registration payment',
      },
      {
        url: '/blog/blog41/seven-business-scams-india.webp',
        title: 'Seven business scam types targeting Indian SMEs and freelancers',
        caption: 'Fake orders, overpayments, GST refund phishing, fake UPI proof, freelancer apps, directory listings, and CEO fraud',
      },
      {
        url: '/blog/blog41/verify-new-client-india.webp',
        title: 'How to verify a new client in India with eight checks',
        caption: 'MCA, GST, domain, reputation, phone, video, contract, and UPI ID verification checklist',
      },
      {
        url: '/blog/blog41/business-protection-rules-india.webp',
        title: 'Ten rules to protect an Indian small business from scams',
        caption: 'Client verification, confirmed payments, milestones, dual approval, GST checks, and team training',
      },
    ],
  },
  {
    pageUrl: '/blog/dark-web-india',
    images: [
      {
        url: '/blog/blog40/dark-web-india-hero.webp',
        title: 'Dark web India 2026, personal data Aadhaar bank card and phone number offered for sale',
        caption: 'An editorial illustration of identity, banking, and phone data advertised in an underground marketplace',
      },
      {
        url: '/blog/blog40/indian-data-exposure-timeline.webp',
        title: 'Recent Indian data exposure reports from 2023 to 2026',
        caption: 'Timeline covering CoWIN reports, Aadhaar-linked information, CYFIRMA threat research, and the Bank of Baroda incident',
      },
      {
        url: '/blog/blog40/free-data-exposure-checks.webp',
        title: 'How to check if personal data is exposed in India for free',
        caption: 'Five checks covering email breaches, phone scam signals, Aadhaar history, credit enquiries, and unexpected OTPs',
      },
      {
        url: '/blog/blog40/what-to-do-data-exposed.webp',
        title: 'Six actions to take after personal data exposure in India',
        caption: 'Password, Aadhaar, banking, credit, two-factor authentication, and 1930 response checklist',
      },
    ],
  },
  {
    pageUrl: '/blog/cyber-safety-students-india',
    images: [
      {
        url: '/blog/blog39/cyber-safety-students-hero.webp',
        title: 'Cyber safety for students India 2026, scams targeting college students',
        caption: 'A college student verifies an internship offer that demands a security deposit before accepting it',
      },
      {
        url: '/blog/blog39/seven-student-scams.webp',
        title: 'Seven scams targeting Indian college students in 2026',
        caption: 'Fake internships, Telegram task fraud, hostel advances, sextortion, education loan traps, placement fraud, and investment scams',
      },
      {
        url: '/blog/blog39/eight-student-safety-rules.webp',
        title: 'Eight cyber safety rules for Indian college students',
        caption: 'A shareable digital safety checklist covering internships, hostels, sextortion, OTPs, two-factor authentication, and 1930',
      },
      {
        url: '/blog/blog39/tell-someone-support-card.webp',
        title: 'Support advice for Indian students affected by scams',
        caption: 'Tell someone you trust, call 1930 for financial cyber fraud, and use Tele MANAS mental health support on 14416',
      },
    ],
  },
  {
    pageUrl: '/blog/bank-account-fraud-india',
    images: [
      {
        url: '/blog/blog38/bank-account-fraud-india-hero.jpg',
        title: 'Bank account fraud India 2026, how scammers access and empty Indian bank accounts',
        caption: 'A shocked account holder sees a zero balance after trusting a fake bank caller and sharing an OTP',
      },
      {
        url: '/blog/blog38/six-bank-fraud-methods.jpg',
        title: 'Six methods scammers use to access Indian bank accounts in 2026',
        caption: 'OTP phishing, SIM swap, net banking phishing, remote access, malicious APK files, and insider fraud',
      },
      {
        url: '/blog/blog38/bank-account-warning-signs.jpg',
        title: 'Seven warning signs that an Indian bank account may be compromised',
        caption: 'Unknown debits, signal loss, unexpected OTPs, password failure, new beneficiaries, unfamiliar devices, and reset emails',
      },
      {
        url: '/blog/blog38/secure-bank-account-60-seconds.jpg',
        title: 'How to secure a bank account in India with a 60 second safety check',
        caption: 'Transaction alerts, beneficiary review, login history, app lock, registered SIM, and official fraud number',
      },
    ],
  },
  {
    pageUrl: '/blog/social-media-scam-india',
    images: [
      {
        url: '/blog/blog37/social-media-scam-india-hero.webp',
        title: 'Social media scam India 2026, Facebook Instagram YouTube fraud types',
        caption: 'A smartphone displays a fake Facebook sale, Instagram brand message, and YouTube investment live stream',
      },
      {
        url: '/blog/blog37/social-media-scam-types.webp',
        title: 'Eight social media scam types active in India in 2026',
        caption: 'Facebook business pages, Instagram ads, YouTube deepfakes, giveaways, investment groups, modelling DMs, fake support, and phishing logins',
      },
      {
        url: '/blog/blog37/social-media-page-verification-checklist.webp',
        title: 'How to spot a fake social media page in India with seven checks',
        caption: 'Account, engagement, domain, MCA, history, and RakshaAI link checks before trusting a profile',
      },
      {
        url: '/blog/blog37/report-social-media-scam-india.webp',
        title: 'How to report a social media scam in India',
        caption: 'Facebook, Instagram, YouTube, RakshaAI, and cybercrime portal reporting routes',
      },
    ],
  },
  {
    pageUrl: '/blog/sms-scam-india',
    images: [
      {
        url: '/blog/blog36/sms-scam-india-hero.webp',
        title: 'SMS scam India 2026, reported text message fraud surges 146 percent',
        caption: 'Fake bank, delivery, and prize messages illustrate the urgent links used in SMS phishing',
      },
      {
        url: '/blog/blog36/sms-scam-146-percent-data.webp',
        title: 'SMS scam India BioCatch July 2026 mobile fraud statistics',
        caption: 'BioCatch customer data showing growth in SMS scams, mobile fraud sessions, and iOS fraud sessions',
      },
      {
        url: '/blog/blog36/seven-sms-scam-types.webp',
        title: 'Seven common types of scam SMS in India in 2026',
        caption: 'Bank, KYC, delivery, lottery, OTP, income tax, and government scheme scam message formats',
      },
      {
        url: '/blog/blog36/real-vs-fake-bank-sms.webp',
        title: 'Real vs fake bank SMS India sender and link comparison',
        caption: 'Registered sender ID compared with a suspicious mobile number and phishing link',
      },
    ],
  },
  {
    pageUrl: '/blog/cyber-fraud-hotspots-india',
    images: [
      {
        url: '/blog/blog35/cyber-fraud-hotspots-india-hero.webp',
        title: 'Cyber fraud hotspots India 2026, Jamtara Mewat cybercrime geography',
        caption: 'India map showing investigated cyber fraud network hotspots and routes toward Southeast Asia',
      },
      {
        url: '/blog/blog35/india-cybercrime-hotspots-map.webp',
        title: 'India cybercrime hotspots map 2026, Jamtara Mewat Bharatpur scam hubs',
        caption: 'Illustrative map of Jamtara, Mewat, Bharatpur, and connections to Southeast Asian scam compounds',
      },
      {
        url: '/blog/blog35/india-cybercrime-crackdown.webp',
        title: 'India cybercrime crackdown statistics and enforcement actions',
        caption: 'Cybercrime enforcement graphic covering blocked SIM cards, mule accounts, prevented transfers, and complaint assistance',
      },
    ],
  },
  {
    pageUrl: '/blog/lottery-scam-india',
    images: [
      { url: '/blog/blog32/lottery-scam-india-hero.webp', title: 'Lottery scam India 2026 fake KBC prize WhatsApp message warning', caption: 'An unsolicited KBC lucky draw message promising ₹25 lakh is marked fake' },
      { url: '/blog/blog32/lottery-scam-types.webp', title: 'Five lottery scam types active in India in 2026', caption: 'KBC WhatsApp, SMS prize, social giveaway, shopping lottery, and customs fee scam formats' },
      { url: '/blog/blog32/lottery-scam-one-rule.webp', title: 'The one rule that exposes a fake lottery in India', caption: 'You cannot win a lottery you never entered' },
      { url: '/blog/blog32/lottery-processing-fee-trap.webp', title: 'How the lottery processing fee scam escalates', caption: 'Repeated processing, customs, tax, and verification fees lead to loss with no prize' },
    ],
  },
  {
    pageUrl: '/blog/boss-scam-india',
    images: [
      { url: '/blog/blog29/boss-scam-hero.jpg', title: 'Boss scam India 2026 CEO impersonation warning', caption: 'A finance professional verifies an urgent confidential WhatsApp transfer request that appears to come from the managing director' },
      { url: '/blog/blog29/boss-scam-process.jpg', title: 'How the Boss Scam works in four steps', caption: 'Research, executive impersonation, urgent transfer request, and the malicious compliance file variant' },
      { url: '/blog/blog29/boss-scam-verification-rules.jpg', title: 'Seven rules to verify a CEO payment request', caption: 'Independent callback, dual approval, email checks, and immediate security reporting' },
      { url: '/blog/blog29/boss-scam-real-vs-fake.jpg', title: 'Real versus fake CEO payment message', caption: 'Comparison of legitimate process signals and boss scam warning signs' },
    ],
  },
  {
    pageUrl: '/blog/top-scams-india-2026',
    images: [
      {
        url: '/blog/blog28/top-scams-india-2026-hero.webp',
        title: 'Top 10 scams in India 2026 ranked by reported cybercrime losses',
        caption: 'July 2026 guide to investment fraud, digital arrest, UPI fraud, fake loan apps, sextortion, AI voice cloning, KYC phishing, job scams, resale fraud, and SIM swap attacks',
      },
      {
        url: '/blog/blog28/top-10-scams-ranked.webp',
        title: 'Top 10 scams in India 2026 ranking infographic',
        caption: 'Shareable ranking of major scams affecting India with reported financial impact and enforcement indicators',
      },
      {
        url: '/blog/blog28/india-cybercrime-statistics.webp',
        title: 'India cybercrime statistics 2025 and 2026 data card',
        caption: 'Reported cyber fraud losses, complaint volume, investment fraud share, and UPI fraud reporting survey data',
      },
      {
        url: '/blog/blog28/scam-protection-rules.webp',
        title: 'Five universal scam protection rules for India',
        caption: 'Quick safety checklist covering OTP security, independent verification, urgency warning signs, and cybercrime helpline 1930',
      },
    ],
  },
  {
    pageUrl: '/blog/upi-scam-india-2026',
    images: [
      { url: '/blog/upi-scam-india-2026/upi-scam-warning.webp', title: 'UPI scam warning India 2026', caption: 'UPI fraud drained over Rs 485 crore from Indian bank accounts in 2024' },
      { url: '/blog/upi-scam-india-2026/fake-collect-request.webp', title: 'Fake UPI collect request screen India' },
      { url: '/blog/upi-scam-india-2026/qr-code-scam-explainer.webp', title: 'How the fake QR code scam works in India' },
      { url: '/blog/upi-scam-india-2026/upi-safety-rules.webp', title: '7 UPI safety rules infographic India' },
    ],
  },
  {
    pageUrl: '/blog/digital-arrest-scam-india',
    images: [
      { url: '/blog/digital-arrest-scam-india/phone-cbi-call.webp', title: 'Incoming call from fake CBI Cyber Crime Division India' },
    ],
  },
  {
    pageUrl: '/blog/telegram-task-scam-india',
    images: [
      { url: '/blog/telegram-task-scam-india/telegram-task-scam-victim.webp', title: 'Telegram task scam victim India' },
    ],
  },
  {
    pageUrl: '/blog/how-to-check-fake-website-india',
    images: [
      { url: '/blog/how-to-check-fake-website-india/fake-website-hero.jpg', title: 'How to check if a website is fake India 2026' },
    ],
  },
  {
    pageUrl: '/blog/fake-customer-care-number-scam-india',
    images: [
      { url: '/blog/fake-customer-care-number-scam-india/fake-customer-care-hero.webp', title: 'Fake customer care number scam India Google search results' },
    ],
  },
  {
    pageUrl: '/blog/crypto-investment-scam-india-2026',
    images: [
      { url: '/blog/crypto-investment-scam-india-2026/crypto-scam-hero.jpg', title: 'Crypto investment scam India 2026 red flags' },
    ],
  },
  {
    pageUrl: '/blog/got-scammed-online-india-what-to-do',
    images: [
      { url: '/blog/got-scammed-online-india-what-to-do/scam-victim-shocked.jpg', title: 'Woman shocked at fraudulent bank transaction online scam India' },
      { url: '/blog/got-scammed-online-india-what-to-do/30-minutes-recovery-steps.jpg', title: 'The next 30 minutes can save your money scam recovery India', caption: 'Step-by-step scam recovery timeline for India' },
      { url: '/blog/got-scammed-online-india-what-to-do/gather-evidence-checklist.jpg', title: 'Documents to gather before filing cybercrime complaint India' },
      { url: '/blog/got-scammed-online-india-what-to-do/save-these-numbers-india.jpg', title: 'Save these numbers now 1930 cybercrime helpline India' },
    ],
  },
  {
    pageUrl: '/blog/ai-voice-cloning-scam-india',
    images: [
      { url: '/blog/ai-voice-cloning-scam-india/voice-cloning-scam-hero.jpg', title: 'AI voice cloning scam targeting Indian families 2026' },
      { url: '/blog/ai-voice-cloning-scam-india/how-voice-cloning-scam-works.jpg', title: 'How AI voice cloning scam works harvest clone call steal' },
      { url: '/blog/ai-voice-cloning-scam-india/family-code-word-setup.jpg', title: 'Set up family code word to protect against voice cloning scam India' },
      { url: '/blog/ai-voice-cloning-scam-india/detect-cloned-voice-5-checks.jpg', title: '5 checks to detect AI cloned voice call India' },
    ],
  },
  {
    pageUrl: '/blog/fake-loan-app-india-2026',
    images: [
      { url: '/blog/fake-loan-app-india-2026/fake-loan-app-hero.webp', title: 'Fake loan app India 2026  illegal instant loan app trap', caption: 'How fake loan apps blackmail victims using stolen contacts and photos' },
    ],
  },
  {
    pageUrl: '/blog/sextortion-scam-india',
    images: [
      { url: '/blog/sextortion-scam-india/sextortion-scam-hero.webp', title: 'Sextortion scam India 2026  WhatsApp video call blackmail', caption: 'Phone glowing on dark table with distressed person  sextortion cyber crime India' },
      { url: '/blog/sextortion-scam-india/sextortion-do-not-pay.webp', title: 'Do not pay sextortion scammer India  emergency action card', caption: 'Screenshot this card and share it  someone you know may need it today' },
      { url: '/blog/sextortion-scam-india/sextortion-variants-grid.webp', title: '4 types of sextortion scam India 2026  honeytrap video call AI deepfake hacked account' },
      { url: '/blog/sextortion-scam-india/sextortion-protection-rules.webp', title: 'How to protect yourself from sextortion India  6 safety rules checklist' },
    ],
  },
  {
    pageUrl: '/blog/stock-market-tip-scam-india',
    images: [
      { url: '/blog/stock-market-tip-scam-india/stock-tip-scam-hero.jpg', title: 'Stock market tip scam India 2026  fake SEBI advisor Telegram pump dump fraud', caption: 'Retail investor excited by Telegram stock tip, then left holding a worthless position after the scammer exits' },
      { url: '/blog/stock-market-tip-scam-india/pump-dump-chart.jpg', title: 'Pump and dump stock scam explained India  step by step how it works', caption: 'How scammers buy cheap illiquid stocks, tip them to thousands, then sell at peak leaving followers with losses' },
      { url: '/blog/stock-market-tip-scam-india/sebi-verify-steps.jpg', title: 'How to verify SEBI registered advisor India  5 steps sebi.gov.in guide', caption: 'Verify any stock advisor in 5 minutes using the official SEBI intermediary search' },
      { url: '/blog/stock-market-tip-scam-india/stock-scam-red-flags.jpg', title: '7 red flags of fake stock advisor India  pump dump warning signs checklist', caption: '7 signs that confirm a stock tip group is running a scam  check before investing' },
    ],
  },
  {
    pageUrl: '/blog/kyc-update-scam-india',
    images: [
      { url: '/blog/kyc-update-scam-india/kyc-scam-sms-hero.webp', title: 'KYC update scam India 2026  fake bank SMS phishing fraud', caption: 'Scammers create SMS messages identical to real bank alerts to steal account credentials' },
      { url: '/blog/kyc-update-scam-india/kyc-fraud-variants.webp', title: '5 types of KYC fraud India 2026  SMS phishing WhatsApp APK OTP call deepfake Aadhaar scam', caption: 'KYC fraud comes in five distinct forms each targeting Indian bank account holders' },
      { url: '/blog/kyc-update-scam-india/kyc-real-vs-fake.webp', title: 'Real vs fake KYC SMS India bank comparison table', caption: 'How to identify a fake KYC message from your bank in India in under 30 seconds' },
      { url: '/blog/kyc-update-scam-india/kyc-safety-rules.webp', title: '5 KYC safety rules India to avoid bank SMS phishing fraud', caption: 'Memorize these 5 rules to protect your bank account from KYC scam messages' },
    ],
  },
  {
    pageUrl: '/blog/aadhaar-data-breach-india',
    images: [
      { url: '/blog/aadhaar-data-breach-india/aadhaar-breach-hero.jpg', title: 'Aadhaar data breach India 2026  personal data sold on dark web', caption: 'India ranked 5th globally in breached accounts  your Aadhaar may already be accessible to scammers' },
    ],
  },
  {
    pageUrl: '/blog/parcel-delivery-scam-india',
    images: [
      { url: '/blog/parcel-delivery-scam-india/delivery-scam-hero.jpg', title: 'Fake delivery SMS scam India 2026  parcel phishing trap courier fraud', caption: 'The ₹5 customs fee is bait  entering card details on the fake delivery page gives scammers full account access' },
    ],
  },
  {
    pageUrl: '/blog/romance-scam-india',
    images: [
      { url: '/blog/romance-scam-india/romance-scam-hero.jpg', title: 'Romance scam India 2026  fake WhatsApp love messages before money request', caption: 'Fake NRIs and military officers build emotional bonds for weeks before asking for money  know the 7 red flags' },
    ],
  },
  {
    pageUrl: '/blog/whatsapp-scam-india',
    images: [
      { url: '/blog/whatsapp-scam-india/whatsapp-scam-hero.jpg', title: 'WhatsApp scam India 2026  8 dangerous message types stealing money from Indians', caption: 'WhatsApp is the primary delivery channel for financial fraud in India  know every message pattern before you tap' },
    ],
  },
  {
    pageUrl: '/blog/olx-scam-india',
    images: [
      { url: '/blog/olx-scam-india/olx-scam-hero.jpg', title: 'OLX scam India 2026  fake Army buyer advance payment fraud resale platform', caption: 'Every OLX scam removes in-person verification, builds trust, then exploits it  know all 6 active fraud methods' },
    ],
  },
  {
    pageUrl: '/blog/sim-swap-fraud-india',
    images: [
      { url: '/blog/sim-swap-fraud-india/sim-swap-hero.jpg', title: 'SIM swap fraud India 2026  phone shows No Service while bank sends transaction alert', caption: 'You did not click anything  your phone just lost signal while scammers received every bank OTP on your number' },
    ],
  },
  {
    pageUrl: '/blog/fake-rental-scam-india',
    images: [
      { url: '/blog/fake-rental-scam-india/rental-scam-hero.jpg', title: 'Fake rental scam India 2026  advance payment for non-existent flat listing fraud', caption: 'Fake listings on NoBroker and MagicBricks target every Indian moving to a new city  the flat does not exist' },
    ],
  },
  {
    pageUrl: '/blog/gaming-app-scam-india',
    images: [
      { url: '/blog/gaming-app-scam-india/gaming-scam-hero.jpg', title: 'Gaming app scam India 2026  fake earn-to-play fraud stealing money from Indian gamers', caption: 'The app lets you win twice to build excitement, then blocks your withdrawal unless you pay endless deposit fees' },
    ],
  },
  {
    pageUrl: '/blog/fake-government-website-india',
    images: [
      { url: '/blog/fake-government-website-india/fake-govt-website-hero.webp', title: 'Fake government website India 2026  fake Aadhaar portal charging fee vs real UIDAI free portal', caption: 'Fake .com portals charge Indians for Aadhaar updates and PAN cards that are completely free on official .gov.in portals' },
      { url: '/blog/fake-government-website-india/govt-free-services-bookmark-card.webp', title: 'Real official government website URLs India  bookmark these free services reference card', caption: 'All 8 government services listed with their official .gov.in URLs  Aadhaar, PAN, driving licence, EPFO, passport, voter ID' },
      { url: '/blog/fake-government-website-india/gov-in-vs-com-domain-rule.webp', title: 'Government website domain rule India  .gov.in is real .com is fake golden rule', caption: 'Real Indian government websites always end in .gov.in or .nic.in  any .com claiming to be government may be fake' },
      { url: '/blog/fake-government-website-india/google-search-fake-govt-warning.webp', title: 'How fake government websites appear in Google search results India  sponsored ad warning', caption: 'Scammers buy Google Ads for government service keywords  always scroll past sponsored results to find the official .gov.in portal' },
    ],
  },
]

const toolImages: Array<{
  pageUrl: string
  images: Array<{ url: string; title: string; caption?: string }>
}> = [
  {
    pageUrl: '/website-safety-checker',
    images: [
      { url: '/image/website-safety-check-indian-woman-examining-suspicious-site-rakshaai.jpg', title: 'Indian woman checking suspicious website safety with RakshaAI scam detector', caption: 'Free website safety checker for India  detect phishing and fake shopping sites instantly' },
      { url: '/image/https-padlock-vs-website-safety-encryption-trust-comparison-india.jpg', title: 'HTTPS padlock vs website safety  SSL encryption and trust comparison India' },
      { url: '/image/how-to-identify-fake-websites.jpg', title: 'How to identify fake websites in India  7 warning signs' },
    ],
  },
  {
    pageUrl: '/phone-number-checker',
    images: [
      { url: '/image/indian-woman-checking-suspicious-scam-call-rakshaai.jpg', title: 'Indian woman checking suspicious scam call number with RakshaAI', caption: 'Free phone number scam checker for India  verify unknown callers instantly' },
      { url: '/image/step-1-enter-phone-number-scam-checks-rakshaai.jpg', title: 'Step 1  Enter phone number for scam check on RakshaAI India' },
      { url: '/image/step-2-check-now-phone-number-fraud-lookup-rakshaai.jpg', title: 'Step 2  Check now button for phone number fraud lookup RakshaAI' },
      { url: '/image/step-3-scam-probability-score-result-rakshaai.jpg', title: 'Step 3  Scam probability score result for phone number RakshaAI India' },
      { url: '/image/report-scam-number-steps-india-rakshaai.jpg', title: 'How to report a scam phone number in India  RakshaAI steps' },
    ],
  },
  {
    pageUrl: '/upi-id-checker',
    images: [
      { url: '/image/upi-payment-verification-security-check-rakshaai.jpg', title: 'UPI payment verification and security check with RakshaAI India', caption: 'Free UPI ID scam checker  verify any UPI ID before sending money' },
      { url: '/image/upi-scam-recovery-5-steps-emergency-guide-india.jpg', title: 'UPI scam recovery 5 steps emergency guide India  call 1930' },
    ],
  },
  {
    pageUrl: '/emergency',
    images: [
      { url: '/image/emergency-steps-after-entering-data-scam-website-india-recovery-guide.jpg', title: 'Emergency steps after entering data on a scam website India  recovery guide', caption: 'Got scammed in India? Call 1930 immediately  step-by-step recovery guide' },
    ],
  },
]

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export function GET() {
  const allImagePages = [...blogImages, ...toolImages]
  const urlEntries = allImagePages
    .map(({ pageUrl, images }) => {
      const imageElements = images
        .map(({ url, title, caption }) => {
          const loc = `${SITE_URL}${url}`
          return [
            `      <image:image>`,
            `        <image:loc>${escapeXml(loc)}</image:loc>`,
            `        <image:title>${escapeXml(title)}</image:title>`,
            caption ? `        <image:caption>${escapeXml(caption)}</image:caption>` : '',
            `      </image:image>`,
          ]
            .filter(Boolean)
            .join('\n')
        })
        .join('\n')

      return `  <url>\n    <loc>${SITE_URL}${pageUrl}</loc>\n${imageElements}\n  </url>`
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlEntries}
</urlset>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
    },
  })
}
