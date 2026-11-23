'use client';

import { Hero } from '@/components/ui/Hero';
import { Button } from '@/components/ui/Button';

export default function TermsOfServicePage() {
    const handlePrint = () => {
        window.print();
    };

    const handleDownload = () => {
        const content = document.getElementById('terms-content')?.innerText || '';
        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'scam-detector-terms-of-service.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <>
            <Hero
                title="Terms of Service"
                description="Please read these terms carefully before using our service."
                gradient={false}
                className="bg-gray-50 dark:bg-gray-900"
            >
                <div className="flex gap-4 justify-center print:hidden">
                    <Button onClick={handlePrint} variant="outline">
                        <svg
                            className="w-5 h-5 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                            />
                        </svg>
                        Print
                    </Button>
                    <Button onClick={handleDownload} variant="outline">
                        <svg
                            className="w-5 h-5 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                            />
                        </svg>
                        Download
                    </Button>
                </div>
            </Hero>

            <article className="py-12 bg-white dark:bg-gray-950">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                    <div id="terms-content" className="prose prose-gray dark:prose-invert max-w-none">
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
                            <strong>Effective Date:</strong> April 30, 2026
                            <br />
                            <strong>Last Updated:</strong> April 30, 2026
                        </p>

                        {/* TODO: Replace with actual legal content reviewed by legal counsel */}

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                                1. Acceptance of Terms
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                Welcome to RakshaAI. By accessing or using our website and services ("Service"), you
                                agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms,
                                please do not use our Service.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                We reserve the right to modify these Terms at any time. Your continued use of the Service
                                following any changes constitutes your acceptance of the new Terms.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                                2. Description of Service
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                RakshaAI provides AI-powered website analysis and scam detection services. Our Service
                                analyzes URLs and provides trust scores based on various factors including domain information,
                                SSL certificates, and potential threat indicators.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                <strong>Important:</strong> Our Service provides information and analysis tools, but does not
                                guarantee the accuracy or completeness of any results. Users should exercise their own judgment
                                when making decisions based on our analysis.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                                3. User Responsibilities and Acceptable Use
                            </h2>

                            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 mt-6">
                                3.1 Acceptable Use
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                                You agree to use the Service only for lawful purposes. You may not use the Service:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                                <li>To violate any applicable laws, regulations, or third-party rights</li>
                                <li>To transmit malware, viruses, or any harmful code</li>
                                <li>To attempt to gain unauthorized access to our systems or networks</li>
                                <li>To interfere with or disrupt the Service or servers</li>
                                <li>To impersonate any person or entity</li>
                                <li>To harvest or collect information about other users</li>
                                <li>For any commercial purpose without our prior written consent</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 mt-6">
                                3.2 Rate Limits
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                We reserve the right to implement rate limits on the number of requests you can make to our
                                Service. Excessive or automated requests may result in temporary or permanent suspension of access.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                                4. User Accounts
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                                If you create an account with us, you are responsible for:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                                <li>Maintaining the security and confidentiality of your account credentials</li>
                                <li>All activities that occur under your account</li>
                                <li>Notifying us immediately of any unauthorized use of your account</li>
                                <li>Providing accurate and complete registration information</li>
                            </ul>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                We reserve the right to suspend or terminate accounts that violate these Terms or engage in
                                fraudulent activity.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                                5. Intellectual Property Rights
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                All content, features, and functionality of the Service, including but not limited to text,
                                graphics, logos, images, software, and analysis algorithms, are owned by RakshaAI or our
                                licensors and are protected by copyright, trademark, and other intellectual property laws.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                You may not copy, modify, distribute, sell, or lease any part of our Service or included
                                software, nor may you reverse engineer or attempt to extract the source code of that software.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                                6. Disclaimers and Limitations
                            </h2>

                            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 mt-6">
                                6.1 Service "As Is"
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER
                                EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                                PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 mt-6">
                                6.2 No Guarantee of Accuracy
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                While we strive to provide accurate and up-to-date information, we do not warrant that:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                                <li>The Service will be uninterrupted, secure, or error-free</li>
                                <li>The results or analysis provided will be accurate, complete, or reliable</li>
                                <li>Any errors in the Service will be corrected</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 mt-6">
                                6.3 Third-Party Content
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                Our Service may contain links to third-party websites or services that are not owned or
                                controlled by us. We have no control over and assume no responsibility for the content, privacy
                                policies, or practices of any third-party websites or services.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                                7. Limitation of Liability
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                TO THE MAXIMUM EXTENT PERMITTED BY LAW, RakshaAI AND ITS AFFILIATES, OFFICERS, EMPLOYEES,
                                AGENTS, PARTNERS, AND LICENSORS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
                                CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE,
                                GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                                <li>Your access to or use of or inability to access or use the Service</li>
                                <li>Any conduct or content of any third party on the Service</li>
                                <li>Any content obtained from the Service</li>
                                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
                                <li>Reliance on information provided by the Service</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                                8. Indemnification
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                You agree to indemnify, defend, and hold harmless RakshaAI and its affiliates, officers,
                                employees, agents, partners, and licensors from any claims, liabilities, damages, losses, costs,
                                or expenses (including reasonable attorneys' fees) arising out of or related to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mt-3">
                                <li>Your use of the Service</li>
                                <li>Your violation of these Terms</li>
                                <li>Your violation of any rights of another party</li>
                                <li>Any content you submit, post, or transmit through the Service</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                                9. Termination
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                We may terminate or suspend your access to the Service immediately, without prior notice or
                                liability, for any reason, including but not limited to breach of these Terms.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                Upon termination, your right to use the Service will immediately cease. All provisions of these
                                Terms which by their nature should survive termination shall survive, including but not limited
                                to ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                                10. Governing Law and Dispute Resolution
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                These Terms shall be governed by and construed in accordance with the laws of [TODO: Specify
                                jurisdiction], without regard to its conflict of law provisions.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                Any disputes arising from these Terms or the Service shall be resolved through binding
                                arbitration in accordance with the rules of [TODO: Specify arbitration body], except that either
                                party may seek injunctive or other equitable relief in any court of competent jurisdiction.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                                11. Changes to Terms
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                We reserve the right to modify or replace these Terms at any time at our sole discretion. If a
                                revision is material, we will provide at least 30 days' notice prior to any new terms taking
                                effect. What constitutes a material change will be determined at our sole discretion.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                                12. Severability
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                If any provision of these Terms is held to be unenforceable or invalid, such provision will be
                                changed and interpreted to accomplish the objectives of such provision to the greatest extent
                                possible under applicable law, and the remaining provisions will continue in full force and effect.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                                13. Entire Agreement
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                These Terms, together with our Privacy Policy and any other legal notices published by us on the
                                Service, constitute the entire agreement between you and RakshaAI concerning the Service.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                                14. Contact Information
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                                If you have any questions about these Terms, please contact us:
                            </p>
                            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                                <p className="text-gray-700 dark:text-gray-300">
                                    <strong>Email:</strong>{' '}
                                    <a
                                        href="mailto:contact@rakshaai.co"
                                        className="text-indigo-600 dark:text-indigo-400 hover:underline"
                                    >
                                        contact@rakshaai.co
                                    </a>
                                </p>
                                <p className="text-gray-700 dark:text-gray-300 mt-2">
                                    <strong>Address:</strong> The Platinum Towers, Office No 27,<br />
                                    Old Mundhwa Road, Kharadi, Pune,<br />
                                    Maharashtra 411014
                                </p>
                            </div>
                        </section>

                        {/* <div className="mt-12 p-6 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl">
                            <p className="text-sm text-amber-800 dark:text-amber-200">
                                <strong>Legal Notice:</strong> These terms of service are a template and should be reviewed and
                                customized by qualified legal counsel before use. They may not comply with all applicable laws
                                in your jurisdiction.
                            </p>
                        </div> */}
                    </div>
                </div>
            </article>
        </>
    );
}
