'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface AccordionItemProps {
    id: string;
    title: string;
    content: string | React.ReactNode;
    defaultOpen?: boolean;
}

interface AccordionProps {
    items: AccordionItemProps[];
    allowMultiple?: boolean;
    className?: string;
}

export function Accordion({ items, allowMultiple = false, className }: AccordionProps) {
    const [openItems, setOpenItems] = useState<string[]>(
        items.filter((item) => item.defaultOpen).map((item) => item.id)
    );

    const toggleItem = (id: string) => {
        setOpenItems((prev) => {
            if (prev.includes(id)) {
                return prev.filter((itemId) => itemId !== id);
            }
            return allowMultiple ? [...prev, id] : [id];
        });
    };

    const handleKeyDown = (event: React.KeyboardEvent, id: string) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggleItem(id);
        }
    };

    return (
        <div className={cn('divide-y divide-gray-200 dark:divide-gray-700', className)}>
            {items.map((item) => {
                const isOpen = openItems.includes(item.id);
                const buttonId = `accordion-button-${item.id}`;
                const panelId = `accordion-panel-${item.id}`;

                return (
                    <div
                        key={item.id}
                        className="border-b border-gray-200 dark:border-gray-700"
                    >
                        <h3>
                            <button
                                id={buttonId}
                                type="button"
                                aria-expanded={isOpen}
                                aria-controls={panelId}
                                onClick={() => toggleItem(item.id)}
                                onKeyDown={(e) => handleKeyDown(e, item.id)}
                                className="flex w-full items-center justify-between py-4 text-left font-medium text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300 transition-colors focus:outline-none"
                            >
                                <span>{item.title}</span>
                                <svg
                                    className={cn(
                                        'h-4 w-4 text-gray-500 transition-transform duration-200',
                                        isOpen && 'rotate-180'
                                    )}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </h3>
                        {isOpen && (
                            <div
                                id={panelId}
                                role="region"
                                aria-labelledby={buttonId}
                                className="pb-4 text-gray-600 dark:text-gray-400"
                            >
                                {typeof item.content === 'string' ? <p>{item.content}</p> : item.content}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
