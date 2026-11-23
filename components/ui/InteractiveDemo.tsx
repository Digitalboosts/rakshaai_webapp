"use client";

import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import { useState } from "react";
import DemoResultCard from "./DemoResultCard";

export default function InteractiveDemo() {
    const [demoUrl, setDemoUrl] = useState("");
    const [isAnalyzing, setIsAnalyzing] = useState(false);

    const handleDemoSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (demoUrl.trim()) {
            setIsAnalyzing(true);
            // Reset after 3 seconds to show result
            setTimeout(() => setIsAnalyzing(false), 3000);
        }
    };

    const sampleUrls = [
        "suspicious-bank-login.fake",
        "crypto-investment.scam",
        "genuine-ecommerce.com",
        "phishing-site.fake"
    ];

    return (
        <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Demo Input */}
            <motion.div
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
            >
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900">Try It Live</h3>
                    <p className="text-gray-600">
                        Enter any URL to see our scam detection technology in action.
                        Get instant results with detailed security analysis.
                    </p>
                </div>

                {/* Demo Form */}
                <form onSubmit={handleDemoSubmit} className="space-y-4">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            value={demoUrl}
                            onChange={(e) => setDemoUrl(e.target.value)}
                            placeholder="Enter URL to analyze (e.g., example.com)"
                            className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-purple-100 focus:border-purple-400 transition-all duration-300 text-gray-900"
                        />
                    </div>

                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={!demoUrl.trim() || isAnalyzing}
                        className="w-full py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                        <span>{isAnalyzing ? 'Analyzing...' : 'Analyze Website'}</span>
                        {!isAnalyzing && <ArrowRight className="h-5 w-5" />}
                    </motion.button>
                </form>

                {/* Sample URLs */}
                <div className="space-y-3">
                    <p className="text-sm text-gray-500">Or try one of these samples:</p>
                    <div className="flex flex-wrap gap-2">
                        {sampleUrls.map((url, index) => (
                            <motion.button
                                key={index}
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: index * 0.1, duration: 0.3 }}
                                onClick={() => setDemoUrl(url)}
                                className="px-3 py-2 text-sm bg-gray-100 hover:bg-purple-100 text-gray-700 hover:text-purple-700 rounded-lg transition-colors duration-300"
                            >
                                {url}
                            </motion.button>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Demo Result */}
            <motion.div
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <DemoResultCard url={demoUrl} isAnalyzing={isAnalyzing} />
            </motion.div>
        </div>
    );
}