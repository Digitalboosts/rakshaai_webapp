import React from 'react';
import { MessageCircle } from 'lucide-react';
import { faqPageSchema, jsonLd } from '@/lib/seo/schema';

type Props = {
    data?: any;
    domain?: string;
    emitSchema?: boolean;
};

export default function FAQSection({ data, domain, emitSchema = false }: Props) {
    const site = domain || data?.url_details?.complete_domain || 'this site';

    const backendFaqs: { question: string; answer: string }[] = Array.isArray(data?.faq_section) && data.faq_section.length > 0
        ? data.faq_section
        : [];

    const hasFaqs = backendFaqs.length > 0;
    if (!hasFaqs) return null;

    const faqStructured = faqPageSchema(backendFaqs);

    return (
        <section aria-labelledby="faq-heading">
            <div className="bg-gradient-to-br from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800/80 rounded-xl p-3 sm:p-6">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                    <div className="w-7 h-7 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="h-3.5 w-3.5 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white" />
                    </div>
                    <div>
                        <h2 id="faq-heading" className="text-base sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white leading-tight">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                            Common questions about {site}
                        </p>
                    </div>
                </div>

                <div className="space-y-3">
                    {backendFaqs.map((faq, i) => (
                        <details key={i} className="group bg-transparent rounded-lg" aria-expanded="false">
                            <summary className="cursor-pointer list-none text-sm font-semibold text-gray-900 dark:text-white flex items-center justify-between p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-shadow shadow-sm group-open:shadow-md">
                                <span>{faq.question}</span>
                                <svg className="ml-4 h-4 w-4 text-gray-400 transform transition-transform duration-200 group-open:rotate-180 flex-shrink-0" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </summary>
                            <div className="px-4 pb-4 pt-3 text-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900 border-l border-r border-b border-gray-100 dark:border-gray-800 rounded-b-md">
                                <p>{faq.answer}</p>
                            </div>
                        </details>
                    ))}
                </div>

                {emitSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(faqStructured) }} />}
            </div>
        </section>
    );
}
