import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <nav aria-label="Breadcrumb" className="mb-4">
            <ol
                itemScope
                itemType="https://schema.org/BreadcrumbList"
                className="flex flex-wrap items-center space-x-2 text-sm text-gray-600 dark:text-gray-400"
            >
                <li
                    itemProp="itemListElement"
                    itemScope
                    itemType="https://schema.org/ListItem"
                    className="flex items-center"
                >
                    <Link
                        href="/"
                        itemProp="item"
                        className="flex items-center hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors min-h-[44px] min-w-[44px] justify-center"
                        aria-label="Home"
                    >
                        <Home className="h-4 w-4" />
                        <meta itemProp="name" content="Home" />
                    </Link>
                    <meta itemProp="position" content="1" />
                </li>

                {items.map((item, index) => (
                    <li
                        key={index}
                        itemProp="itemListElement"
                        itemScope
                        itemType="https://schema.org/ListItem"
                        className="flex items-center space-x-2"
                    >
                        <ChevronRight className="h-4 w-4 text-gray-400" aria-hidden="true" />
                        {item.href ? (
                            <Link
                                href={item.href}
                                itemProp="item"
                                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors min-h-[44px] flex items-center px-2"
                            >
                                <span itemProp="name">{item.label}</span>
                            </Link>
                        ) : (
                            <span
                                itemProp="item"
                                className="text-gray-900 dark:text-white font-medium min-h-[44px] flex items-center px-2"
                                aria-current="page"
                            >
                                <span itemProp="name">{item.label}</span>
                            </span>
                        )}
                        <meta itemProp="position" content={String(index + 2)} />
                    </li>
                ))}
            </ol>
        </nav>
    );
}
