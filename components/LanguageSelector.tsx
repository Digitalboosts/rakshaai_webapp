"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Globe, ChevronDown } from 'lucide-react';

interface Language {
    code: string;
    name: string;
    nativeName: string;
    flag: string;
}

const languages: Language[] = [
    { code: 'en', name: 'English', nativeName: 'English', flag: '🇮🇳' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिंदी', flag: '🇮🇳' },
    { code: 'or', name: 'Odia', nativeName: 'ଓଡ଼ିଆ', flag: '🇮🇳' },
];

// Define which pages support multi-language
const multiLanguagePages = ['/', '/about', '/faq', '/contact'];

export default function LanguageSelector() {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMounted(true);
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    if (!mounted) return null;

    // Determine current language and page
    const getCurrentLanguage = (): string => {
        if (pathname.startsWith('/hi')) return 'hi';
        if (pathname.startsWith('/or')) return 'or';
        return 'en';
    };

    const getCurrentPage = (): string => {
        if (pathname.startsWith('/hi/')) return pathname.replace('/hi', '');
        if (pathname.startsWith('/or/')) return pathname.replace('/or', '');
        if (pathname.startsWith('/hi') && pathname === '/hi') return '/';
        if (pathname.startsWith('/or') && pathname === '/or') return '/';
        return pathname;
    };

    const currentLanguage = getCurrentLanguage();
    const currentPage = getCurrentPage();
    const currentLangObj = languages.find(lang => lang.code === currentLanguage) || languages[0];

    // Check if current page supports multiple languages
    const supportsMultiLanguage = multiLanguagePages.includes(currentPage);
    
    if (!supportsMultiLanguage) {
        return null; // Don't show language selector on pages that don't support it
    }

    const getLanguageUrl = (langCode: string): string => {
        if (langCode === 'en') {
            return currentPage; // English has no prefix
        }
        if (currentPage === '/') {
            return `/${langCode}`; // Home page
        }
        return `/${langCode}${currentPage}`;
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100/80 dark:bg-gray-800/80 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"
                aria-label="Select language"
            >
                <Globe className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {currentLangObj.flag} {currentLangObj.code.toUpperCase()}
                </span>
                <ChevronDown className={`h-3 w-3 text-gray-500 dark:text-gray-400 transition-transform ${
                    isOpen ? 'rotate-180' : ''
                }`} />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-50">
                    {languages.map((language) => {
                        const isActive = language.code === currentLanguage;
                        const url = getLanguageUrl(language.code);
                        
                        return (
                            <Link
                                key={language.code}
                                href={url}
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center space-x-3 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                                    isActive 
                                        ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400' 
                                        : 'text-gray-700 dark:text-gray-300'
                                }`}
                            >
                                <span className="text-lg">{language.flag}</span>
                                <div className="flex-1">
                                    <div className="text-sm font-medium">{language.nativeName}</div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">{language.name}</div>
                                </div>
                                {isActive && (
                                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                                )}
                            </Link>
                        );
                    })}
                    
                    {/* <div className="border-t border-gray-200 dark:border-gray-600 mt-1 pt-1">
                        <div className="px-4 py-2 text-xs text-gray-500 dark:text-gray-400">
                            Language support available for About page
                        </div>
                    </div> */}
                </div>
            )}
        </div>
    );
}