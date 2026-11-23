import React from 'react';
import { cn } from '@/lib/utils';

interface HeroProps {
    title: string | React.ReactNode;
    description?: string | React.ReactNode;
    className?: string;
    children?: React.ReactNode;
    gradient?: boolean;
}

export function Hero({ title, description, className, children, gradient = true }: HeroProps) {
    return (
        <section
            className={cn(
                'relative w-full py-20 md:py-28 lg:py-36',
                gradient &&
                'bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-indigo-950 dark:to-purple-950',
                className
            )}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    {typeof title === 'string' ? (
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 mb-6">
                            {title}
                        </h1>
                    ) : (
                        <div className="mb-6">{title}</div>
                    )}

                    {description && (
                        typeof description === 'string' ? (
                            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
                                {description}
                            </p>
                        ) : (
                            <div className="mb-8">{description}</div>
                        )
                    )}

                    {children && <div className="mt-8">{children}</div>}
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-300 dark:bg-indigo-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>
        </section>
    );
}
