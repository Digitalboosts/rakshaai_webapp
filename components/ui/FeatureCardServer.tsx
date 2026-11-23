import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    index: number;
}

export default function FeatureCardServer({ title, description, icon: Icon }: FeatureCardProps) {
    return (
        <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 cursor-pointer">
            <div className="space-y-4">
                {/* Icon Container */}
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 group-hover:from-purple-500 group-hover:to-blue-500 transition-all duration-300">
                    <Icon className="h-8 w-8 text-purple-600 dark:text-purple-400 group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                        {title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Hover Arrow */}
                <div className="flex items-center text-purple-600 dark:text-purple-400 font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
                    Learn More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </div>
    );
}