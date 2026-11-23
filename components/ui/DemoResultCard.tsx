"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Shield, AlertTriangle, CheckCircle, Clock } from "lucide-react";
import { useState, useEffect } from "react";

interface DemoResult {
    status: 'safe' | 'warning' | 'danger';
    score: number;
    title: string;
    description: string;
    details: string[];
}

interface DemoResultCardProps {
    url: string;
    isAnalyzing: boolean;
}

export default function DemoResultCard({ url, isAnalyzing }: DemoResultCardProps) {
    const [result, setResult] = useState<DemoResult | null>(null);
    const [progress, setProgress] = useState(0);

    // Mock analysis simulation
    useEffect(() => {
        if (isAnalyzing) {
            setResult(null);
            setProgress(0);

            const progressInterval = setInterval(() => {
                setProgress(prev => {
                    if (prev >= 100) {
                        clearInterval(progressInterval);
                        return 100;
                    }
                    return prev + Math.random() * 20;
                });
            }, 200);

            // Simulate analysis completion
            const timer = setTimeout(() => {
                const mockResults: DemoResult[] = [
                    {
                        status: 'safe',
                        score: 95,
                        title: 'Website appears safe',
                        description: 'This website has passed all security checks',
                        details: ['Valid SSL Certificate', 'No phishing indicators', 'Legitimate domain registration']
                    },
                    {
                        status: 'warning',
                        score: 65,
                        title: 'Potential risks detected',
                        description: 'Exercise caution when using this website',
                        details: ['Mixed content warnings', 'Unverified payment methods', 'Limited contact information']
                    },
                    {
                        status: 'danger',
                        score: 25,
                        title: 'High risk detected',
                        description: 'This website appears to be unsafe',
                        details: ['Reported phishing activity', 'Suspicious domain patterns', 'No valid contact information']
                    }
                ];

                setResult(mockResults[Math.floor(Math.random() * mockResults.length)]);
                clearInterval(progressInterval);
            }, 3000);

            return () => {
                clearTimeout(timer);
                clearInterval(progressInterval);
            };
        }
    }, [isAnalyzing, url]);

    const getStatusConfig = (status: string) => {
        switch (status) {
            case 'safe':
                return {
                    icon: CheckCircle,
                    color: 'text-green-600',
                    bg: 'bg-green-50',
                    border: 'border-green-200',
                    gradient: 'from-green-500 to-emerald-500'
                };
            case 'warning':
                return {
                    icon: AlertTriangle,
                    color: 'text-yellow-600',
                    bg: 'bg-yellow-50',
                    border: 'border-yellow-200',
                    gradient: 'from-yellow-500 to-orange-500'
                };
            case 'danger':
                return {
                    icon: Shield,
                    color: 'text-red-600',
                    bg: 'bg-red-50',
                    border: 'border-red-200',
                    gradient: 'from-red-500 to-pink-500'
                };
            default:
                return {
                    icon: Clock,
                    color: 'text-blue-600',
                    bg: 'bg-blue-50',
                    border: 'border-blue-200',
                    gradient: 'from-blue-500 to-purple-500'
                };
        }
    };

    if (isAnalyzing) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
            >
                <div className="text-center space-y-6">
                    <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500">
                        <Clock className="h-8 w-8 text-white animate-spin" />
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-xl font-bold text-gray-900">Analyzing Website</h3>
                        <p className="text-gray-600">Checking {url} for potential threats...</p>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${Math.min(progress, 100)}%` }}
                            transition={{ duration: 0.3 }}
                        />
                    </div>

                    <div className="text-sm text-gray-500">
                        {progress < 30 ? 'Scanning for malware...' :
                            progress < 60 ? 'Checking SSL certificates...' :
                                progress < 90 ? 'Analyzing domain reputation...' :
                                    'Generating report...'}
                    </div>
                </div>
            </motion.div>
        );
    }

    if (!result) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-gray-50 rounded-2xl p-8 border-2 border-dashed border-gray-300 text-center"
            >
                <Shield className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-500 mb-2">Ready to analyze</h3>
                <p className="text-gray-400">Enter a URL above to see the security analysis</p>
            </motion.div>
        );
    }

    const config = getStatusConfig(result.status);
    const StatusIcon = config.icon;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className={`bg-white rounded-2xl p-8 shadow-lg border-2 ${config.border}`}
            >
                <div className="space-y-6">
                    {/* Header */}
                    <div className="text-center space-y-4">
                        <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${config.gradient}`}>
                            <StatusIcon className="h-8 w-8 text-white" />
                        </div>

                        <div className="space-y-2">
                            <h3 className={`text-xl font-bold ${config.color}`}>{result.title}</h3>
                            <p className="text-gray-600">{result.description}</p>
                        </div>
                    </div>

                    {/* Score */}
                    <div className="text-center">
                        <div className="inline-flex items-center space-x-3">
                            <span className="text-sm text-gray-500">Trust Score:</span>
                            <span className={`text-2xl font-bold ${config.color}`}>{result.score}/100</span>
                        </div>
                    </div>

                    {/* Details */}
                    <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900">Security Checks:</h4>
                        <ul className="space-y-2">
                            {result.details.map((detail, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.3 }}
                                    className="flex items-center space-x-3"
                                >
                                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${config.gradient}`} />
                                    <span className="text-sm text-gray-700">{detail}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* Action Button */}
                    <button className={`w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r ${config.gradient} hover:shadow-lg transition-all duration-300`}>
                        View Detailed Report
                    </button>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}