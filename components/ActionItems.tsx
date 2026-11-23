"use client";

import { motion } from "framer-motion";
import { 
    Shield, 
    CheckCircle2, 
    AlertTriangle, 
    CreditCard, 
    UserPlus, 
    MousePointer, 
    DollarSign,
    XCircle,
    Info
} from "lucide-react";

interface ActionItemsProps {
    action_items: {
        risk_level: string;
        can_do: string[];
        should_avoid: string[];
        payment_advice: string;
        reasons: string[];
    };
}

const ActionItems = ({ action_items }: ActionItemsProps) => {
    const convertToTitle = (str: string) => {
        return str
            .split('_')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
    };

    const getRiskColor = (riskLevel: string) => {
        switch (riskLevel.toLowerCase()) {
            case 'low':
                return {
                    bg: 'from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10',
                    border: 'border-green-200 dark:border-green-800/30',
                    icon: 'text-green-600 dark:text-green-400',
                    badge: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400',
                };
            case 'medium':
                return {
                    bg: 'from-yellow-50 to-orange-50 dark:from-yellow-900/10 dark:to-orange-900/10',
                    border: 'border-yellow-200 dark:border-yellow-800/30',
                    icon: 'text-yellow-600 dark:text-yellow-400',
                    badge: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400',
                };
            case 'high':
                return {
                    bg: 'from-red-50 to-rose-50 dark:from-red-900/10 dark:to-rose-900/10',
                    border: 'border-red-200 dark:border-red-800/30',
                    icon: 'text-red-600 dark:text-red-400',
                    badge: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400',
                };
            default:
                return {
                    bg: 'from-gray-50 to-slate-50 dark:from-gray-900/10 dark:to-slate-900/10',
                    border: 'border-gray-200 dark:border-gray-800/30',
                    icon: 'text-gray-600 dark:text-gray-400',
                    badge: 'bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-400',
                };
        }
    };

    const getActionIcon = (action: string) => {
        const lowerAction = action.toLowerCase();
        if (lowerAction.includes('payment')) return CreditCard;
        if (lowerAction.includes('account')) return UserPlus;
        if (lowerAction.includes('usage') || lowerAction.includes('proceed')) return MousePointer;
        return CheckCircle2;
    };

    const getAvoidIcon = (action: string) => {
        const lowerAction = action.toLowerCase();
        if (lowerAction.includes('payment') || lowerAction.includes('value')) return DollarSign;
        return XCircle;
    };

    const colors = getRiskColor(action_items.risk_level);

    return (
        <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6">
            <div className={`bg-gradient-to-br ${colors.bg} rounded-2xl p-6 border ${colors.border} shadow-sm`}>
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg`}>
                            <Shield className="h-5 w-5 text-white" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                                Safety Recommendations
                            </h3>
                        </div>
                    </div>
                    <div className={`px-3 py-1.5 rounded-lg ${colors.badge} font-semibold text-xs uppercase tracking-wide`}>
                        {action_items.risk_level} Risk
                    </div>
                </div>

                {/* Safe Actions */}
                <div className="mb-6">
                    <div className="flex items-center space-x-2 mb-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                        <h4 className="text-base font-semibold text-gray-900 dark:text-white">
                            {convertToTitle('can_do')}
                        </h4>
                    </div>
                    <div className="space-y-2">
                        {action_items.can_do?.map((action, index) => {
                            const Icon = getActionIcon(action);
                            return (
                                <div
                                    key={index}
                                    className="flex items-center space-x-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg border border-green-100 dark:border-green-800/20"
                                >
                                    <Icon className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0" />
                                    <span className="text-sm text-gray-700 dark:text-gray-300">
                                        {action}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Actions to Avoid */}
                {action_items.should_avoid && action_items.should_avoid.length > 0 && (
                    <div className="mb-6">
                        <div className="flex items-center space-x-2 mb-3">
                            <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                            <h4 className="text-base font-semibold text-gray-900 dark:text-white">
                                {convertToTitle('should_avoid')}
                            </h4>
                        </div>
                        <div className="space-y-2">
                            {action_items.should_avoid?.map((action, index) => {
                                const Icon = getAvoidIcon(action);
                                return (
                                    <div
                                        key={index}
                                        className="flex items-center space-x-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg border border-yellow-100 dark:border-yellow-800/20"
                                    >
                                        <Icon className="h-4 w-4 text-yellow-600 dark:text-yellow-400 flex-shrink-0" />
                                        <span className="text-sm text-gray-700 dark:text-gray-300">
                                            {action}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Payment Advice */}
                {action_items.payment_advice && (
                <div className="mb-6">
                    <div className="flex items-center space-x-2 mb-3">
                        <CreditCard className={`h-5 w-5 ${colors.icon}`} />
                        <h4 className="text-base font-semibold text-gray-900 dark:text-white">
                            {convertToTitle('payment_advice')}
                        </h4>
                    </div>
                    <div className="p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg border border-indigo-100 dark:border-indigo-800/20">
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                            {action_items.payment_advice}
                        </span>
                    </div>
                </div>
                )}

                {/* Reasons */}
                {action_items.reasons && action_items.reasons.length > 0 && (
                <div>
                    <div className="flex items-center space-x-2 mb-3">
                        <Info className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                        <h4 className="text-base font-semibold text-gray-900 dark:text-white">
                            {convertToTitle('reasons')}
                        </h4>
                    </div>
                    <div className="space-y-2">
                        {action_items.reasons?.map((reason, index) => (
                            <div
                                key={index}
                                className="flex items-start space-x-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg border border-indigo-100 dark:border-indigo-800/20"
                            >
                                <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 mt-2 flex-shrink-0"></div>
                                <span className="text-sm text-gray-700 dark:text-gray-300">
                                    {reason}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                )}
                {/* </div> */}
            </div>
        </motion.div>
    );
};

export default ActionItems;