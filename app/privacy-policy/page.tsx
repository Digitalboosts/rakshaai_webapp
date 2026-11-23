'use client';

import { Hero } from '@/components/ui/Hero';
import { Button } from '@/components/ui/Button';

// Note: Metadata export doesn't work in client components, so move this to a separate layout or remove 'use client'
// For now, including it as a comment for reference

/*
export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Read our privacy policy to understand how we collect, use, and protect your data.',
};
*/

const keyPoints = [
    { aspect: 'Data Collection', description: 'Only URLs checked and basic analytics' },
    { aspect: 'Data Storage', description: 'Encrypted and stored securely' },
    { aspect: 'Third-Party Sharing', description: 'Never sold or shared without consent' },
    { aspect: 'User Rights', description: 'Full access, deletion, and portability rights' },
    { aspect: 'Cookie Usage', description: 'Essential and analytics cookies only' },
];

export default function PrivacyPolicyPage() {
    const handlePrint = () => {
        window.print();
    };

    const handleDownload = () => {
        // Create a simple text version for download
        const content = document.getElementById('privacy-content')?.innerText || '';
        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'scam-detector-privacy-policy.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <>
            <Hero
                title="Privacy Policy"
                description="Your privacy is important to us. Learn how we collect, use, and protect your information."
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
                    {/* Key Points Table */}
                    <section className="mb-12 print:mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                            Privacy at a Glance
                        </h2>
                        <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-800">
                            <table className="w-full">
                                <thead className="bg-gray-50 dark:bg-gray-900">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                                            Aspect
                                        </th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                                            Our Approach
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                                    {keyPoints.map((point, index) => (
                                        <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-900/50">
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">
                                                {point.aspect}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                                                {point.description}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <div id="privacy-content" className="prose prose-gray dark:prose-invert max-w-none">
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
                            <strong>Effective Date:</strong> April 30, 2026
                            <br />
                            <strong>Last Updated:</strong> April 30, 2026
                        </p>

                        {/* TODO: Replace with actual legal content reviewed by legal counsel */}

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                                1. Introduction
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                Welcome to RakshaAI ("we," "our," or "us"). We are committed to protecting your privacy
                                and being transparent about how we collect, use, and safeguard your information. This Privacy
                                Policy explains our practices regarding data collection and use when you visit our website or
                                use our services.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                By using RakshaAI, you agree to the collection and use of information in accordance with
                                this policy. If you do not agree with our policies and practices, please do not use our services.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                                2. Information We Collect
                            </h2>

                            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 mt-6">
                                2.1 Information You Provide
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                                We collect information that you voluntarily provide to us, including:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                                <li>URLs that you submit for scam checking</li>
                                <li>Email addresses when you contact us or subscribe to updates</li>
                                <li>Name and message content when you use our contact form</li>
                                <li>Feedback and reviews you submit</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 mt-6">
                                2.2 Automatically Collected Information
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                                When you use our services, we automatically collect certain information:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                                <li>Browser type and version</li>
                                <li>Operating system</li>
                                <li>IP address (anonymized)</li>
                                <li>Pages visited and time spent on pages</li>
                                <li>Referring website addresses</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 mt-6">
                                2.3 Cookies and Tracking Technologies
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                We use cookies and similar tracking technologies to enhance your experience. These include
                                essential cookies for site functionality and analytics cookies to understand how you use our
                                service. You can control cookie preferences through your browser settings.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                                3. How We Use Your Information
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                                We use the collected information for the following purposes:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                                <li>Providing and improving our scam detection services</li>
                                <li>Analyzing website traffic and user behavior to enhance user experience</li>
                                <li>Responding to your inquiries and providing customer support</li>
                                <li>Sending important service updates and security notifications</li>
                                <li>Detecting and preventing fraud, abuse, and security incidents</li>
                                <li>Complying with legal obligations and enforcing our terms</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                                4. Data Sharing and Disclosure
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                We do not sell, rent, or trade your personal information. We may share information only in the
                                following limited circumstances:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                                <li>
                                    <strong>Service Providers:</strong> With trusted third-party service providers who assist in
                                    operating our website and services (e.g., hosting, analytics)
                                </li>
                                <li>
                                    <strong>Legal Obligations:</strong> When required by law, court order, or government request
                                </li>
                                <li>
                                    <strong>Protection of Rights:</strong> To protect our rights, property, or safety, or that of
                                    our users or the public
                                </li>
                                <li>
                                    <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets
                                </li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                                5. Data Security
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                We implement industry-standard security measures to protect your information, including
                                encryption, secure servers, and regular security audits. However, no method of transmission
                                over the internet or electronic storage is 100% secure. While we strive to protect your
                                personal information, we cannot guarantee absolute security.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                                6. Your Privacy Rights
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                                Depending on your location, you may have the following rights:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                                <li>
                                    <strong>Access:</strong> Request a copy of the personal information we hold about you
                                </li>
                                <li>
                                    <strong>Correction:</strong> Request correction of inaccurate or incomplete information
                                </li>
                                <li>
                                    <strong>Deletion:</strong> Request deletion of your personal information
                                </li>
                                <li>
                                    <strong>Portability:</strong> Request transfer of your data to another service
                                </li>
                                <li>
                                    <strong>Objection:</strong> Object to our processing of your personal information
                                </li>
                                <li>
                                    <strong>Withdraw Consent:</strong> Withdraw consent where we rely on consent for processing
                                </li>
                            </ul>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                                To exercise these rights, please contact us at{' '}
                                <a
                                    href="mailto:contact@rakshaai.co"
                                    className="text-indigo-600 dark:text-indigo-400 hover:underline"
                                >
                                    contact@rakshaai.co
                                </a>
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                                7. Data Retention
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                We retain your personal information only for as long as necessary to fulfill the purposes
                                outlined in this Privacy Policy, unless a longer retention period is required by law. When we
                                no longer need your information, we securely delete or anonymize it.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                                8. Children's Privacy
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                Our services are not directed to individuals under the age of 13. We do not knowingly collect
                                personal information from children. If you believe we have collected information from a child,
                                please contact us immediately, and we will take steps to delete such information.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                                9. International Data Transfers
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                Your information may be transferred to and processed in countries other than your own. These
                                countries may have different data protection laws. We ensure appropriate safeguards are in
                                place to protect your information in accordance with this Privacy Policy.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                                10. Changes to This Policy
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                We may update this Privacy Policy from time to time. We will notify you of any changes by
                                posting the new policy on this page and updating the "Last Updated" date. We encourage you to
                                review this policy periodically for any changes.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                                11. Contact Us
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
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
                                <strong>Legal Notice:</strong> This privacy policy is a template and should be reviewed and
                                customized by qualified legal counsel before use. It may not comply with all applicable laws in
                                your jurisdiction.
                            </p>
                        </div> */}
                    </div>
                </div>
            </article>
        </>
    );
}
