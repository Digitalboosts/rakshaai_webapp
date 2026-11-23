import Link from "next/link";
import Image from "next/image";
import { SITE_STATS_TEXT } from "@/lib/config/siteStats";
import { Mail, Phone, ExternalLink } from "lucide-react";
import AppStoreButtons from "@/components/AppStoreButtons";

interface FooterProps {
    content?: {
        logo: {
            name: string;
            tagline: string;
        };
        description: string;
        sections: {
            quickLinks: {
                title: string;
                home: string;
                howItWorks: string;
                reportScam: string;
                blog: string;
                faq: string;
                about: string;
                contact: string;
            };
            scamCategories: {
                title: string;
                upi: string;
                digitalArrest: string;
                ecommerce: string;
                investment: string;
                phone: string;
                phishing: string;
                romance: string;
                crypto: string;
                loans: string;
                jobs: string;
            };
            resources: {
                title: string;
                preventionTips: string;
                latestAlerts: string;
                safetyGuide: string;
                cybercrime: string;
            };
            trust: {
                title: string;
                methodology: string;
                dataSources: string;
                reportCorrection: string;
                editorialPolicy: string;
            };
            contact: {
                title: string;
                email: string;
                availability: string;
            };
        };
        mission: string;
        copyright: string;
    };
}

export default function Footer({ content }: FooterProps) {
    const currentYear = new Date().getFullYear();

    // Default English content
    const defaultContent = {
        logo: {
            name: "RakshaAI",
            tagline: "SAFER INDIA"
        },
        description: "RakshaAI provides India-focused trust and scam intelligence for consumers and businesses. Individuals can check suspicious websites, UPI IDs and phone numbers. Operated by Ehatech Services Pvt. Ltd., Pune. Not affiliated with any government body.",
        sections: {
            quickLinks: {
                title: "Quick Links",
                home: "Home",
                howItWorks: "How It Works",
                reportScam: "Report Scam",
                blog: "Blog",
                faq: "FAQ",
                about: "About",
                contact: "Contact"
            },
            scamCategories: {
                title: "Scam Categories",
                upi: "UPI Fraud",
                digitalArrest: "Digital Arrest",
                ecommerce: "E-commerce",
                investment: "Investment",
                phone: "Phone",
                phishing: "Phishing",
                romance: "Romance",
                crypto: "Crypto",
                loans: "Loans",
                jobs: "Jobs"
            },
            resources: {
                title: "Resources",
                preventionTips: "Prevention Tips",
                latestAlerts: "Latest Alerts",
                safetyGuide: "Safety Guide (Hindi)",
                cybercrime: "Cybercrime 1930"
            },
            trust: {
                title: "Transparency",
                methodology: "How It Works",
                dataSources: "Data Sources",
                reportCorrection: "Report Correction",
                editorialPolicy: "Editorial Policy"
            },
            contact: {
                title: "Contact",
                email: "support@rakshaai.co",
                availability: SITE_STATS_TEXT.supportAvailability
            }
        },
        mission: "🇮🇳 Free consumer checks. Verification, APIs and trust infrastructure for businesses.",
        copyright: "© 2026 RakshaAI by Ehatech Services Pvt. Ltd. All rights reserved."
    };

    const t = {
        ...defaultContent,
        ...(content || {}),
        sections: {
            ...defaultContent.sections,
            ...(content?.sections || {}),
            quickLinks: { ...defaultContent.sections.quickLinks, ...(content?.sections?.quickLinks || {}) },
            scamCategories: { ...defaultContent.sections.scamCategories, ...(content?.sections?.scamCategories || {}) },
            resources: { ...defaultContent.sections.resources, ...(content?.sections?.resources || {}) },
            trust: { ...defaultContent.sections.trust },
            contact: { ...defaultContent.sections.contact, ...(content?.sections?.contact || {}) },
        },
    };

    return (
        <footer className="glass border-t border-white/10 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-8">
                    {/* Brand - Takes up 4 columns */}
                    <div className="lg:col-span-4">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="relative w-10 h-10">
                                <Image
                                    src="/rakshaai-logo.svg"
                                    alt="RakshaAI Logo"
                                    width={40}
                                    height={40}
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex flex-col leading-tight">
                                <span className="text-xl font-bold text-gray-900 dark:text-white text-gradient">{t.logo.name}</span>
                                <span className="text-xs font-semibold" style={{ color: '#FF6600' }}>{t.logo.tagline}</span>
                            </div>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                            {t.description}
                        </p>
                        <div className="flex space-x-2">
                            <a
                                href="https://www.facebook.com/profile.php?id=61586285426338"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg glass hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                aria-label="Facebook"
                            >
                                <svg className="h-5 w-5 text-gray-700 dark:text-gray-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                            <a
                                href="https://www.instagram.com/rakshaai.official?utm_source=qr&igsh=MXQybHNyMGRuZXNzbg=="
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg glass hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                aria-label="Instagram"
                            >
                                <svg className="h-5 w-5 text-gray-700 dark:text-gray-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" strokeWidth="2" />
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </a>
                            <a
                                href="https://youtube.com/@rakshaai?si=3zWm4JpiwtBNvxu7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg glass hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                aria-label="YouTube"
                            >
                                <svg className="h-5 w-5 text-gray-700 dark:text-gray-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
                                </svg>
                            </a>
                        </div>

                        <div className="mt-6">
                            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Get the RakshaAI app</p>
                            <AppStoreButtons compact />
                        </div>

                        <div className="mt-7 border-t border-gray-200 pt-6 dark:border-gray-800">
                            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">{t.sections.contact.title}</h3>
                            <div className="space-y-2.5">
                                <a href="tel:1930" className="flex items-center gap-2 text-sm font-semibold text-red-600 transition-colors hover:text-red-700 dark:text-red-400 dark:hover:text-red-300">
                                    <Phone aria-hidden="true" className="h-4 w-4 flex-shrink-0" />
                                    <span>1930 Cyber Fraud Helpline</span>
                                </a>
                                <a href="mailto:support@rakshaai.co" className="flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400">
                                    <Mail aria-hidden="true" className="h-4 w-4 flex-shrink-0" />
                                    <span className="break-all">{t.sections.contact.email}</span>
                                </a>
                                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                    <Phone aria-hidden="true" className="h-4 w-4 flex-shrink-0" />
                                    <span>{t.sections.contact.availability}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links - 2 columns */}
                    <div className="lg:col-span-2">
                        <h3 className="font-semibold mb-4 text-gray-900 dark:text-white text-sm uppercase tracking-wider">{t.sections.quickLinks.title}</h3>
                        <ul className="space-y-2.5">
                            <li><Link href="/" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{t.sections.quickLinks.home}</Link></li>
                            <li><Link href="/technology" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Technology</Link></li>
                            <li><Link href="/app" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Mobile App</Link></li>
                            <li><Link href="/business" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">For Business</Link></li>
                            <li><Link href="/blog" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{t.sections.quickLinks.blog}</Link></li>
                            <li><Link href="/faq" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{t.sections.quickLinks.faq}</Link></li>
                            <li><Link href="/about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{t.sections.quickLinks.about}</Link></li>
                            <li><Link href="/contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{t.sections.quickLinks.contact}</Link></li>
                        </ul>
                    </div>

                    {/* Scam Categories - 3 columns */}
                    <div className="lg:col-span-3">
                        <h3 className="font-semibold mb-4 text-gray-900 dark:text-white text-sm uppercase tracking-wider">{t.sections.scamCategories.title}</h3>
                        <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                            <li><Link href="/scams/upi-fraud" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{t.sections.scamCategories.upi}</Link></li>
                            <li><Link href="/scams/digital-arrest" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{t.sections.scamCategories.digitalArrest}</Link></li>
                            <li><Link href="/scams/e-commerce-fraud" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{t.sections.scamCategories.ecommerce}</Link></li>
                            <li><Link href="/scams/investment-scams" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{t.sections.scamCategories.investment}</Link></li>
                            <li><Link href="/scams/phone-scams" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{t.sections.scamCategories.phone}</Link></li>
                            <li><Link href="/scams/phishing" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{t.sections.scamCategories.phishing}</Link></li>
                            <li><Link href="/scams/romance-scams" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{t.sections.scamCategories.romance}</Link></li>
                            <li><Link href="/scams/crypto-scams" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{t.sections.scamCategories.crypto}</Link></li>
                            <li><Link href="/scams/loan-fraud" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{t.sections.scamCategories.loans}</Link></li>
                            <li><Link href="/scams/job-scams" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{t.sections.scamCategories.jobs}</Link></li>
                        </ul>
                    </div>

                    {/* Resources & Transparency - 3 columns */}
                    <div className="lg:col-span-3">
                        <h3 className="font-semibold mb-4 text-gray-900 dark:text-white text-sm uppercase tracking-wider">{t.sections.resources.title}</h3>
                        <ul className="space-y-2.5 mb-4">
                            <li><Link href="/prevention-tips" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{t.sections.resources.preventionTips}</Link></li>
                            <li><Link href="/scam-alerts" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{t.sections.resources.latestAlerts}</Link></li>
                            <li><Link href="/safety-guide" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{t.sections.resources.safetyGuide}</Link></li>
                            <li>
                                <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors inline-flex items-center gap-1">
                                    {t.sections.resources.cybercrime}
                                    <ExternalLink aria-hidden="true" className="w-3 h-3" />
                                </a>
                            </li>
                        </ul>
                        <h3 className="font-semibold mb-3 text-gray-900 dark:text-white text-sm uppercase tracking-wider">{t.sections.trust.title}</h3>
                        <ul className="space-y-2.5">
                            <li><Link href="/trust" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Trust Center</Link></li>
                            <li><Link href="/api" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Request API Access</Link></li>
                            <li><Link href="/methodology" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{t.sections.trust.methodology}</Link></li>
                            <li><Link href="/data-sources" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{t.sections.trust.dataSources}</Link></li>
                            <li><Link href="/report-correction" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{t.sections.trust.reportCorrection}</Link></li>
                            <li><Link href="/editorial-policy" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{t.sections.trust.editorialPolicy}</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Government Recognition Bar */}
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        {/* DPIIT Startup India */}
                        <div className="flex items-center gap-2.5 px-3 py-2 bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800/40 rounded-lg">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FF6A00] flex items-center justify-center">
                                <svg viewBox="0 0 20 20" fill="white" className="w-3.5 h-3.5" aria-hidden="true">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="leading-tight">
                                <p className="text-[11px] font-bold text-orange-700 dark:text-orange-400 uppercase tracking-wide">DPIIT Recognized Startup</p>
                                <p className="text-[10px] text-gray-500 dark:text-gray-400">Cert No: DIPP203819 · AI &amp; NLP</p>
                            </div>
                        </div>

                        {/* Make In India */}
                        <div className="flex items-center gap-2 px-3 py-2 bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800/40 rounded-lg">
                            <span className="text-base leading-none" aria-hidden="true">🇮🇳</span>
                            <p className="text-[11px] font-bold text-orange-700 dark:text-orange-400 uppercase tracking-wide">Make In India</p>
                        </div>

                        {/* EHATECH company name */}
                        <div className="px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg">
                            <p className="text-[10px] text-gray-500 dark:text-gray-400 leading-tight">Operated by</p>
                            <p className="text-[11px] font-semibold text-gray-700 dark:text-gray-300 leading-tight">EHATECH SERVICES PVT. LTD.</p>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800 text-center space-y-3">
                    <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                        {t.mission}
                    </p>
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-1">
                        <Link href="/privacy-policy" className="text-xs text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Privacy Policy</Link>
                        <Link href="/terms-of-service" className="text-xs text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Terms &amp; Conditions</Link>
                        <Link href="/refund-policy" className="text-xs text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Refund Policy</Link>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                        © {currentYear} RakshaAI by <span className="font-semibold text-gray-700 dark:text-gray-300">Ehatech Services Pvt. Ltd.</span> All rights reserved.
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        RakshaAI is a private platform. Not affiliated with or endorsed by the Government of India, RBI, NPCI, TRAI, or any law enforcement agency. Reports are informational only and do not carry legal authority.
                    </p>
                </div>
            </div>
        </footer>
    );
}
