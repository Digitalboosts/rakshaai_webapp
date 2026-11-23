import { LucideIcon } from "lucide-react";

interface TrustItemProps {
    title: string;
    description: string;
    icon: LucideIcon;
    index: number;
}

export default function TrustItemServer({ title, description, icon: Icon }: TrustItemProps) {
    return (
        <div className="group text-center hover:-translate-y-1 transition-all duration-300">
            <div className="space-y-4">
                {/* Icon Container */}
                <div className="inline-flex p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30 group-hover:from-purple-100 group-hover:to-blue-100 dark:group-hover:from-purple-800/40 dark:group-hover:to-blue-800/40 transition-all duration-300">
                    <Icon className="h-8 w-8 text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="space-y-2">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                        {title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed max-w-xs mx-auto">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}