"use client";

import { useState } from 'react';
import EvidenceGallery from './EvidenceGallery';
import { transformScamReportsToEvidence } from '../lib/evidenceUtils';

interface ScamReport {
    id: number;
    submission_type: string;
    phone_number: string;
    website_url: string;
    name: string;
    rating: number;
    review: string;
    attachment: string;
    status: string;
    created_at: string;
    domain: string;
}

interface EvidenceGalleryDemoProps {
    scamReports: ScamReport[];
}

export default function EvidenceGalleryDemo({ scamReports }: EvidenceGalleryDemoProps) {
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    // Transform scam reports to evidence items using utility function
    const evidenceItems = transformScamReportsToEvidence(scamReports);

    const openGallery = (index: number) => {
        setSelectedIndex(index);
        setIsGalleryOpen(true);
    };

    return (
        <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Evidence Gallery ({evidenceItems.length} items)
            </h3>

            {/* Evidence Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {evidenceItems.map((item, index) => (
                    <button
                        key={item.id}
                        onClick={() => openGallery(index)}
                        className="group relative aspect-square bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-indigo-300 dark:hover:border-indigo-500 transition-colors p-4 flex flex-col items-center justify-center"
                    >
                        <div className="text-red-500 mb-2">
                            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <p className="text-xs text-center text-gray-600 dark:text-gray-300 truncate w-full">
                            {item.reporterName}
                        </p>
                        <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-1">
                            Report #{item.reportId}
                        </p>
                        <div className="absolute inset-0 bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                    </button>
                ))}
            </div>

            {/* Sample API Response Display */}
            <details className="mt-6">
                <summary className="cursor-pointer text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">
                    Show sample API response structure
                </summary>
                <pre className="mt-2 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-xs overflow-x-auto">
                    {JSON.stringify(scamReports[0], null, 2)}
                </pre>
            </details>

            {/* Evidence Gallery Modal */}
            <EvidenceGallery
                isOpen={isGalleryOpen}
                onClose={() => setIsGalleryOpen(false)}
                items={evidenceItems}
                initialIndex={selectedIndex} 
            />
        </div>
    );
}