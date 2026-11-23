import Link from "next/link";
import { LucideIcon, AlertTriangle } from "lucide-react";

interface ScamTypeCardProps {
    title: string;
    description: string;
    warning: string;
    tips: string[];
    icon: LucideIcon;
    index: number;
    riskLevel: 'high' | 'medium' | 'low';
    href?: string;
}

export default function ScamTypeCardServer({
    title,
    description,
    warning,
    tips,
    icon: Icon,
    riskLevel,
    href
}: ScamTypeCardProps) {
    const riskConfig = {
        high: {
            color: 'text-red-600 dark:text-red-400',
            bg: 'bg-red-50 dark:bg-red-900/20',
            border: 'border-red-200 dark:border-red-800/50',
            badge: 'bg-red-500',
            gradient: 'from-red-500 to-pink-500'
        },
        medium: {
            color: 'text-orange-600 dark:text-orange-400',
            bg: 'bg-orange-50 dark:bg-orange-900/20',
            border: 'border-orange-200 dark:border-orange-800/50',
            badge: 'bg-orange-500',
            gradient: 'from-orange-500 to-yellow-500'
        },
        low: {
            color: 'text-yellow-600 dark:text-yellow-400',
            bg: 'bg-yellow-50 dark:bg-yellow-900/20',
            border: 'border-yellow-200 dark:border-yellow-800/50',
            badge: 'bg-yellow-500',
            gradient: 'from-yellow-500 to-orange-500'
        }
    };

    const config = riskConfig[riskLevel];

    return (
        <Link
            href={href || "/scams"}
            className={`bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${config.border} group cursor-pointer hover:-translate-y-1 block`}
        >
            <div className="space-y-6">
                {/* Header */}
                <div className="flex items-start justify-between">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${config.gradient}`}>
                        <Icon className="h-6 w-6 text-white" />
                    </div>

                    {/* Risk Badge */}
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${config.badge}`}>
                        {riskLevel.toUpperCase()} RISK
                    </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                        {title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {description}
                    </p>

                    {/* Warning */}
                    <div className={`${config.bg} rounded-xl p-4 border ${config.border}`}>
                        <div className="flex items-start space-x-3">
                            <AlertTriangle className={`h-5 w-5 ${config.color} flex-shrink-0 mt-0.5`} />
                            <div>
                                <h4 className={`font-semibold ${config.color} mb-1`}>Warning Signs:</h4>
                                <p className={`text-sm ${config.color}`}>{warning}</p>
                            </div>
                        </div>
                    </div>

                    {/* Protection Tips */}
                    <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 dark:text-white">How to Stay Safe:</h4>
                        <ul className="space-y-2">
                            {tips.map((tip, tipIndex) => (
                                <li
                                    key={tipIndex}
                                    className="flex items-start space-x-3"
                                >
                                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mt-2 flex-shrink-0" />
                                    <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{tip}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Action Button */}
                <button
                    className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                >
                    Learn More About This Scam
                </button>
            </div>
        </Link>
    );
}