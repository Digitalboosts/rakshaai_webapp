"use client";

import { motion } from "framer-motion";
import { Shield, Clock, AlertTriangle, Zap, CheckCircle, Globe } from "lucide-react";
import { useState, useEffect } from "react";

interface LiveStatsCardProps {
    title: string;
    value: number;
    icon: React.ElementType;
    isLive?: boolean;
    suffix?: string;
    gradient: string;
}

function LiveStatsCard({ title, value, icon: Icon, isLive = false, suffix = "", gradient }: LiveStatsCardProps) {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (isLive) {
            const interval = setInterval(() => {
                setDisplayValue(prev => prev + Math.floor(Math.random() * 3) + 1);
            }, 2000);
            return () => clearInterval(interval);
        } else {
            const timer = setTimeout(() => {
                setDisplayValue(value);
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [value, isLive]);

    return (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100/50 relative overflow-hidden"
        >
            {/* Background Decoration */}
            <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br ${gradient} opacity-10 rounded-full blur-xl group-hover:scale-110 transition-transform duration-500`} />

            <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${gradient} shadow-lg`}>
                        <Icon className="h-7 w-7 text-white" />
                    </div>
                    {isLive && (
                        <div className="flex items-center space-x-2 bg-green-50 px-3 py-1.5 rounded-full">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-xs font-semibold text-green-700">LIVE</span>
                        </div>
                    )}
                </div>

                <div className="space-y-3">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">{title}</h3>
                    <div className="flex items-baseline space-x-2">
                        <span className="text-4xl font-black text-gray-900">
                            {isLive ? (value + displayValue).toLocaleString() : displayValue.toLocaleString()}
                        </span>
                        {suffix && <span className="text-lg font-medium text-gray-600">{suffix}</span>}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function LiveStatsSection() {
    return (
        <div className="space-y-12">
            {/* Professional Alert Banner */}
            <motion.div
                initial={{ scale: 0.98, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 rounded-3xl p-8 text-white"
            >
                {/* Background Elements */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl" />

                <div className="relative z-10 text-center space-y-4">
                    <div className="flex items-center justify-center space-x-3">
                        <div className="p-2 bg-white/20 rounded-full backdrop-blur-sm">
                            <Shield className="h-6 w-6 text-white" />
                        </div>
                        <span className="font-bold text-lg">REAL-TIME THREAT MONITORING</span>
                        <div className="flex items-center space-x-1">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        </div>
                    </div>
                    <p className="text-white/90 font-medium">
                        AI-powered security scanning • Protecting users across India • Updated every second
                    </p>
                </div>
            </motion.div>

            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <LiveStatsCard
                    title="Threats Blocked Today"
                    value={1247}
                    icon={AlertTriangle}
                    isLive={true}
                    gradient="from-red-500 to-orange-500"
                />
                <LiveStatsCard
                    title="Users Protected"
                    value={89542}
                    icon={Shield}
                    suffix="+"
                    gradient="from-emerald-500 to-green-500"
                />
                <LiveStatsCard
                    title="Active Monitors"
                    value={24}
                    icon={Clock}
                    suffix="/7"
                    gradient="from-blue-500 to-cyan-500"
                />
            </div>

            {/* Premium Trust Indicators */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8">
                <div className="text-center mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Trusted Security Platform</h3>
                    <p className="text-gray-600">Verified features that keep you safe online</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {[
                        { icon: "🆓", label: "100% Free", desc: "No hidden fees" },
                        { icon: "🚫", label: "No Registration", desc: "Instant access" },
                        { icon: "🔒", label: "SSL Secured", desc: "Bank-grade security" },
                        { icon: "⚡", label: "Instant Results", desc: "Real-time analysis" },
                        { icon: "🇮🇳", label: "Made in India", desc: "Local expertise" }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group text-center p-4 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
                        >
                            <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <h4 className="font-semibold text-gray-900 text-sm mb-1">{item.label}</h4>
                            <p className="text-xs text-gray-500">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}