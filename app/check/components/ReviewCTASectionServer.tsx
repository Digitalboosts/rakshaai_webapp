import React from 'react';
import { MessageSquare, Star, Shield } from 'lucide-react';

interface ReviewCTAProps {
    websiteUrl?: string;
    variant?: 'home' | 'result';
    content?: any;
}

const defaultContent = {
    title: 'Help the Community',
    description: "Your experiences matter! Share reviews about websites you've used to help others make informed decisions and stay safe online.",
    benefits: [
        'Protect others from potential scams',
        'Share legitimate business experiences',
        'Build a trusted community database',
    ],
    submitReview: {
        title: 'Submit Your Review',
        description: 'Quick and easy. Your feedback helps millions of users stay secure.',
        button: 'Report a Scam',
        verification: 'All reviews are verified & moderated',
    },
    result: {
        title: 'Share Your Experience',
        description: 'Have you used {websiteUrl}? Help others by sharing your review.',
        stats: {
            reviewers: '500K+ reviewers',
            verified: 'Verified & moderated',
        },
        button: 'Write a Review',
    },
};

export default function ReviewCTASectionServer({ websiteUrl, variant = 'home', content }: ReviewCTAProps) {
    const t = content || defaultContent;

    // For server-rendered variant, render same visual layout but non-interactive buttons link to a submission page.
    const submitHref = `/submit-review?site=${encodeURIComponent(websiteUrl || '')}`;

    if (variant === 'result') {
        return (
            <div className="mt-6 glass rounded-3xl p-8 border-2 border-indigo-200 dark:border-indigo-800/30">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex-1 text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start space-x-2 mb-3">
                            <MessageSquare aria-hidden="true" className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white m-0">{t.result.title}</h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-2">{t.result.description.replace('{websiteUrl}', websiteUrl || '')}</p>
                        <div className="flex items-center justify-center md:justify-start space-x-4 text-sm text-gray-500 dark:text-gray-400 mt-3">
                            <div className="flex items-center space-x-1"><UsersPlaceholder /></div>
                            <div className="flex items-center space-x-1"><Shield aria-hidden="true" className="h-4 w-4" /><span>{t.result.stats.verified}</span></div>
                        </div>
                    </div>

                    <a href={submitHref} className="gradient-primary inline-flex items-center text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all space-x-2 whitespace-nowrap">
                        <Star aria-hidden="true" className="h-5 w-5" />
                        <span>{t.result.button}</span>
                    </a>
                </div>
            </div>
        );
    }

    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="glass rounded-3xl p-8 md:p-12 border-2 border-indigo-200 dark:border-indigo-800/30">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center">
                                    <MessageSquare aria-hidden="true" className="h-7 w-7 text-white" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white m-0">{t.title}</h2>
                            </div>
                            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">{t.description}</p>

                            <div className="space-y-3">
                                {t.benefits.map((benefit: any, index: number) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <svg className="h-4 w-4 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <p className="text-gray-700 dark:text-gray-300 m-0">{benefit}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="text-center md:text-left">
                            <div className="neumorphic rounded-2xl p-8 space-y-4">
                                <div className="flex items-center justify-center space-x-1 mb-4">
                                    <StarsPlaceholder />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white m-0">{t.submitReview.title}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">{t.submitReview.description}</p>
                                <a href={submitHref} className="w-full inline-block gradient-primary text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all text-center">{t.submitReview.button}</a>
                                <div className="flex items-center justify-center space-x-2 text-xs text-gray-500 dark:text-gray-400 pt-2">
                                    <Shield aria-hidden="true" className="h-4 w-4" />
                                    <span>{t.submitReview.verification}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    );
}

function StarsPlaceholder() {
    return (
        <div className="flex items-center justify-center">
            {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} aria-hidden="true" className="h-8 w-8 text-yellow-400" />
            ))}
        </div>
    );
}

function UsersPlaceholder() {
    // small placeholder to show reviewer stat visually without lucide import to avoid unused warnings
    return (
        <span className="flex items-center space-x-1"><svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-4-4h-1" /><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M7 20v-2a4 4 0 014-4h0" /><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 12a4 4 0 100-8 4 4 0 000 8z" /></svg><span className="sr-only">reviewers</span></span>
    );
}
