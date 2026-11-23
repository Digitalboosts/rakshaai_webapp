'use client';

import { Hero } from '@/components/ui/Hero';
import { Button } from '@/components/ui/Button';

export default function RefundPolicyPage() {
    const handlePrint = () => {
        window.print();
    };

    const handleDownload = () => {
        const content = document.getElementById('refund-content')?.innerText || '';
        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'rakshaai-refund-policy.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <>
            <Hero
                title="Refund Policy"
                description="Please read our refund policy carefully before purchasing any of our services."
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
                    <div id="refund-content" className="prose prose-gray dark:prose-invert max-w-none">
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
                            <strong>Effective Date:</strong> April 30, 2026
                            <br />
                            <strong>Last Updated:</strong> April 30, 2026
                        </p>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                                1. Overview
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                This Refund Policy governs all purchases and subscriptions made through RakshaAI
                                ("we," "us," or "our") at <strong>rakshaai.co</strong>. By purchasing any of our
                                services, you acknowledge that you have read, understood, and agree to the terms
                                of this policy.
                            </p>
                        </section>

                        <section className="mb-10">
                            <div className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-xl p-6 mb-6">
                                <h2 className="text-2xl font-bold text-red-700 dark:text-red-400 mb-3">
                                    2. No Refund Policy
                                </h2>
                                <p className="text-red-700 dark:text-red-300 leading-relaxed font-semibold text-lg">
                                    All sales are final. RakshaAI does not offer refunds, credits, or exchanges
                                    for any purchased plans, subscriptions, or services under any circumstances.
                                </p>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                Our services - including AI-powered website analysis, scam detection, trust scoring,
                                and business verification - are delivered digitally and made available to you
                                immediately upon purchase. Because of the instant nature of digital service delivery,
                                all charges are non-refundable once a transaction is completed.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                This includes, but is not limited to:
                            </p>
                            <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700 dark:text-gray-300">
                                <li>Monthly and annual subscription fees</li>
                                <li>One-time plan purchases</li>
                                <li>Business verification and certification fees</li>
                                <li>API access or usage-based charges</li>
                                <li>Any add-on features or upgrades</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                                3. Subscription Cancellations
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                You may cancel your subscription at any time through your account settings or by
                                contacting our support team. Upon cancellation:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                                <li>
                                    Your subscription will remain active until the end of the current billing period.
                                </li>
                                <li>
                                    No refund will be issued for the remaining unused days of the billing period.
                                </li>
                                <li>
                                    You will not be charged again after the current billing period ends.
                                </li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                                4. Exceptional Circumstances
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                In rare cases involving duplicate charges or verified billing errors caused directly
                                by RakshaAI, we may, at our sole discretion, review and process a correction.
                                Such cases must be reported within <strong>7 days</strong> of the transaction date
                                by contacting us at{' '}
                                <a
                                    href="mailto:support@rakshaai.co"
                                    className="text-blue-600 dark:text-blue-400 underline"
                                >
                                    support@rakshaai.co
                                </a>{' '}
                                with supporting documentation.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                This does not constitute a general right to a refund and will be evaluated on a
                                case-by-case basis.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                                5. Chargebacks
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                Initiating a chargeback with your bank or payment provider without first contacting
                                RakshaAI support may result in the immediate suspension or termination of your
                                account. We reserve the right to dispute any chargeback that we believe to be
                                fraudulent or in violation of this policy.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                                6. Changes to This Policy
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                RakshaAI reserves the right to update or modify this Refund Policy at any time.
                                Changes will be posted on this page with a revised effective date. Continued use
                                of our services after any changes constitutes your acceptance of the updated policy.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                                7. Contact Us
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                If you have any questions about this Refund Policy, please contact us at:
                            </p>
                            <address className="not-italic mt-4 text-gray-700 dark:text-gray-300 space-y-1">
                                <p>
                                    <strong>RakshaAI</strong>
                                </p>
                                <p>
                                    Email:{' '}
                                    <a
                                        href="mailto:support@rakshaai.co"
                                        className="text-blue-600 dark:text-blue-400 underline"
                                    >
                                        support@rakshaai.co
                                    </a>
                                </p>
                                <p>Website: rakshaai.co</p>
                            </address>
                        </section>
                    </div>
                </div>
            </article>
        </>
    );
}
