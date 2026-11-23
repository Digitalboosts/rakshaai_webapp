'use client';

import { useState, useMemo } from 'react';
import { Hero } from '@/components/ui/Hero';
import { Accordion } from '@/components/ui/Accordion';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import LocalizedLayout from '@/components/LocalizedLayout';

interface FAQItem {
    id: string;
    category: string;
    question: string;
    answer: string;
}

interface FAQContent {
    hero: {
        title: string;
        description: string;
    };
    search: {
        placeholder: string;
        noResults: string;
    };
    categories: {
        all: string;
        basicInfo: string;
        understandingTrustScore: string;
        safetyTips: string;
        technicalDetails: string;
        gettingHelp: string;
    };
    questions: FAQItem[];
    cta: {
        title: string;
        description: string;
        button: string;
    };
}

interface FAQClientProps {
    content: FAQContent;
    layoutContent?: {
        navbar?: any;
        footer?: any;
    };
    faqSchema: any;
}

export default function FAQClient({ content, layoutContent, faqSchema }: FAQClientProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string>(content.categories.all);

    // Get unique categories based on translated content
    const categories = useMemo(() => {
        const cats = Array.from(new Set(content.questions.map((faq) => faq.category)));
        return [content.categories.all, ...cats];
    }, [content]);

    // Filter FAQs based on search and category
    const filteredFAQs = useMemo(() => {
        return content.questions.filter((faq) => {
            const matchesSearch =
                searchQuery === '' ||
                faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                faq.answer.toLowerCase().includes(searchQuery.toLowerCase());

            const matchesCategory = selectedCategory === content.categories.all || faq.category === selectedCategory;

            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, selectedCategory, content]);

    // Group FAQs by category for display
    const groupedFAQs = useMemo(() => {
        const groups: { [key: string]: FAQItem[] } = {};
        filteredFAQs.forEach((faq) => {
            if (!groups[faq.category]) {
                groups[faq.category] = [];
            }
            groups[faq.category].push(faq);
        });
        return groups;
    }, [filteredFAQs]);

    return (
        <LocalizedLayout content={layoutContent}>
            <div className="min-h-screen bg-background">
                <Hero title={content.hero.title} description={content.hero.description} />

                <section className="py-16 px-4">
                    <div className="max-w-4xl mx-auto">
                        {/* Search and Filter Section */}
                        <div className="mb-12 space-y-6">
                            {/* Search Bar */}
                            <div className="relative">
                                <svg
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                                <Input
                                    type="text"
                                    placeholder={content.search.placeholder}
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pl-10 py-3 text-lg"
                                />
                            </div>

                            {/* Category Filter */}
                            <div className="flex flex-wrap gap-2">
                                {categories.map((category) => (
                                    <Button
                                        key={category}
                                        variant={selectedCategory === category ? 'primary' : 'outline'}
                                        size="sm"
                                        onClick={() => setSelectedCategory(category)}
                                        className="text-sm"
                                    >
                                        {category}
                                    </Button>
                                ))}
                            </div>
                        </div>

                        {/* FAQ Results */}
                        {Object.keys(groupedFAQs).length > 0 ? (
                            <div className="space-y-8">
                                {Object.entries(groupedFAQs).map(([category, categoryFAQs]) => (
                                    <div key={category} className="space-y-4">
                                        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                                            {category}
                                        </h2>
                                        <Accordion 
                                            items={categoryFAQs.map(faq => ({
                                                id: faq.id,
                                                title: faq.question,
                                                content: faq.answer
                                            }))}
                                            allowMultiple={false}
                                            className="space-y-4"
                                        />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12">
                                <svg
                                    className="mx-auto h-12 w-12 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                                <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-gray-100">
                                    {content.search.noResults}
                                </h3>
                                <Button
                                    variant="outline"
                                    className="mt-4"
                                    onClick={() => {
                                        setSearchQuery('');
                                        setSelectedCategory(content.categories.all);
                                    }}
                                >
                                    Clear filters
                                </Button>
                            </div>
                        )}

                        {/* CTA Section */}
                        <div className="mt-16 text-center bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-2xl p-8 border border-indigo-100 dark:border-indigo-900">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                                {content.cta.title}
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                                {content.cta.description}
                            </p>
                            <a href="/contact">
                                <Button size="lg">{content.cta.button}</Button>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </LocalizedLayout>
    );
}
