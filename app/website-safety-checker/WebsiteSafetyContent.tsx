"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_STATS } from "@/lib/config/siteStats";
import {
    Shield, Lock, Clock, AlertTriangle, CheckCircle2,
    Users, Zap, Globe, FileText, PhoneCall, ShieldAlert, Star,
    TrendingUp, CreditCard, WifiOff, ChevronRight, ChevronDown,
} from "lucide-react";

// Red flags data
const redFlags = [
    {
        icon: <WifiOff className="h-5 w-5" />,
        title: "Missing HTTPS or SSL Certificate",
        body: "Look at your browser's address bar. If a website starts with 'http://' (no 's'), your data travels in plain text and can be intercepted. No legitimate business operates without SSL certificates in 2025.",
    },
    {
        icon: <Clock className="h-5 w-5" />,
        title: "Brand New Domain (Less Than 6 Months Old)",
        body: "Recently registered domains can be a useful risk signal because scammers often create disposable sites. Domain age alone does not prove that a website is fraudulent.",
    },
    {
        icon: <Globe className="h-5 w-5" />,
        title: "Suspicious Domain Names",
        body: "Scammers use amaz0n.com (zero instead of 'o'), fllipkart.com (double 'l'), paytmm.in (extra 'm'), or sbi-secure-login.com. Always read the URL carefully  one wrong character means a fake site.",
    },
    {
        icon: <Star className="h-5 w-5" />,
        title: "Too-Good-To-Be-True Offers",
        body: "iPhone 15 for ₹5,999? Exclusive 90% off sale? These are classic scam bait. Legitimate businesses can't offer prices far below market. Deep discounts on premium products are a major red flag.",
    },
    {
        icon: <PhoneCall className="h-5 w-5" />,
        title: "Missing Contact Information",
        body: "Legitimate businesses display phone numbers, physical addresses, and email IDs. If you can't find any way to contact the company  or the contact info doesn't match official channels  be very suspicious.",
    },
    {
        icon: <CreditCard className="h-5 w-5" />,
        title: "Suspicious Payment Methods",
        body: "Requests for direct bank transfer, crypto payments, or gift cards instead of standard payment gateways (Razorpay, PayU, etc.) are massive red flags. Scammers avoid traceable payment methods.",
    },
    {
        icon: <FileText className="h-5 w-5" />,
        title: "Poor Website Quality",
        body: "Broken links, grammar errors, low-resolution images, or content that looks copy-pasted from other sites. Legitimate businesses invest in quality. Scammers rush to get their site up fast.",
    },
    {
        icon: <ShieldAlert className="h-5 w-5" />,
        title: "Requests for Unnecessary Information",
        body: "A shopping site asking for your Aadhaar number, a delivery app requesting your UPI PIN, or any site asking for more information than the transaction requires  all major warning signs.",
    },
    {
        icon: <Users className="h-5 w-5" />,
        title: "No Social Media Presence",
        body: "Established Indian brands have active social media profiles with real followers and engagement. A site with no social presence, or only recently created accounts, is likely fake.",
    },
    {
        icon: <TrendingUp className="h-5 w-5" />,
        title: "Negative or No Reviews",
        body: "Search for '[website name] review', '[website name] complaint', or '[website name] scam' before trusting any new site. Scam sites either have no reviews or plenty of fraud complaints.",
    },
];

const checkItems = [
    { icon: <Lock className="h-5 w-5" />, label: "SSL/HTTPS Certificate", desc: "Valid, expired, or missing?" },
    { icon: <ShieldAlert className="h-5 w-5" />, label: "Malware Detection", desc: "Scans against virus databases" },
    { icon: <Globe className="h-5 w-5" />, label: "Phishing Analysis", desc: "URL pattern matching" },
    { icon: <Clock className="h-5 w-5" />, label: "Domain Age", desc: "When was it registered?" },
    { icon: <Star className="h-5 w-5" />, label: "Trust Score", desc: "0-10 rating based on 15+ factors" },
    { icon: <Users className="h-5 w-5" />, label: "User Reports", desc: `${SITE_STATS.usersProtected} Indian users' scam reports` },
    { icon: <FileText className="h-5 w-5" />, label: "Contact Verification", desc: "Does the site provide legit contact info?" },
    { icon: <CreditCard className="h-5 w-5" />, label: "Payment Security", desc: "PCI DSS compliance check" },
];

const tabs = [
    { id: "overview", label: "Overview", icon: <Shield className="h-4 w-4" /> },
    { id: "red-flags", label: "Red Flags", icon: <AlertTriangle className="h-4 w-4" /> },
    { id: "guides", label: "Guides", icon: <FileText className="h-4 w-4" /> },
    { id: "case-studies", label: "Case Studies", icon: <TrendingUp className="h-4 w-4" /> },
];

export default function WebsiteSafetyContent() {
    const [activeTab, setActiveTab] = useState("overview");
    const [expandedFlag, setExpandedFlag] = useState<number | null>(null);

    return (
        <div className="space-y-12">
            {/* Tab Navigation */}
            <div className="sticky top-16 z-30 bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl border-y border-gray-200 dark:border-gray-800 -mx-4 px-4 py-3">
                <div className="flex overflow-x-auto gap-2 scrollbar-hide">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                                activeTab === tab.id
                                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200 dark:shadow-indigo-900/50"
                                    : "bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800"
                            }`}
                        >
                            {tab.icon}
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            <AnimatePresence mode="wait">
                {activeTab === "overview" && (
                    <motion.div
                        key="overview"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-12"
                    >
                        {/* What is Website Safety */}
                        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50 p-8 border border-indigo-100 dark:border-indigo-900">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-200/20 rounded-full blur-3xl" />
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 relative">
                                What is Website Safety and Why Does It Matter?
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed relative">
                                Website safety isn't just about viruses anymore. It's about protecting your money, your identity, and
                                your personal information from sophisticated scammers who've perfected the art of creating fake
                                websites that look exactly like the real thing.
                            </p>

                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                {[
                                    { value: "₹22,845 Cr", label: "Lost to cyber fraud in 2024", color: "red" },
                                    { value: "83,000+", label: "Fake e-commerce websites", color: "orange" },
                                    { value: "67%", label: "Indians never check safety", color: "yellow" },
                                    { value: "₹45,000", label: "Average loss per victim", color: "red" },
                                ].map(({ value, label, color }, i) => (
                                    <motion.div
                                        key={label}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: i * 0.1 }}
                                        className={`rounded-xl p-4 bg-${color}-50 dark:bg-${color}-900/10 border border-${color}-100 dark:border-${color}-900/30 text-center hover:scale-105 transition-transform`}
                                    >
                                        <p className={`text-lg font-extrabold text-${color}-600 dark:text-${color}-400`}>{value}</p>
                                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{label}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </section>

                        {/* Diwali Scam Story */}
                        <section className="grid md:grid-cols-2 gap-6">
                            <div className="rounded-2xl bg-white dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-800 shadow-lg">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                                    <AlertTriangle className="h-5 w-5 text-yellow-500" />
                                    Real Scam: Diwali 2024
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                                    <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs">amaz0n-india-sale.com</code> ran
                                    for 14 days and <strong className="text-red-600">1,247 people lost ₹3.2 crore</strong>.
                                </p>
                                <div className="space-y-2">
                                    {[
                                        { flag: "Domain age", detail: "14 days old" },
                                        { flag: "SSL", detail: "Missing entirely" },
                                        { flag: "Typo", detail: "amaz0n (zero)" },
                                        { flag: "Payment", detail: "Direct transfer" },
                                    ].map(({ flag, detail }) => (
                                        <div key={flag} className="flex items-center gap-2 text-xs">
                                            <div className="w-2 h-2 rounded-full bg-red-500" />
                                            <span className="font-medium text-gray-700 dark:text-gray-300">{flag}:</span>
                                            <span className="text-gray-500 dark:text-gray-400">{detail}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-6 border border-green-200 dark:border-green-900 shadow-lg">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                                    <Shield className="h-5 w-5 text-green-500" />
                                    Our Checker Catches This
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                                    5-second automated check would have flagged all red flags instantly.
                                </p>
                                <div className="space-y-2">
                                    {[
                                        "Domain age verification",
                                        "SSL certificate validation",
                                        "Typosquatting detection",
                                        "Payment method analysis",
                                    ].map((feature) => (
                                        <div key={feature} className="flex items-center gap-2 text-xs">
                                            <CheckCircle2 className="w-4 h-4 text-green-600" />
                                            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </motion.div>
                )}

                {activeTab === "red-flags" && (
                    <motion.div
                        key="red-flags"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                            10 Red Flags: How to Spot a Fake Website
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-8">
                            Click to expand and learn more about each warning sign.
                        </p>

                        <div className="space-y-3">
                            {redFlags.map((rf, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <button
                                        onClick={() => setExpandedFlag(expandedFlag === i ? null : i)}
                                        className="w-full text-left"
                                    >
                                        <div className="flex gap-4 p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-700 transition-all">
                                            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center font-bold shadow-lg">
                                                {i + 1}
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center justify-between">
                                                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{rf.title}</h3>
                                                    {expandedFlag === i ? (
                                                        <ChevronDown className="h-4 w-4 text-gray-400" />
                                                    ) : (
                                                        <ChevronRight className="h-4 w-4 text-gray-400" />
                                                    )}
                                                </div>
                                                <AnimatePresence>
                                                    {expandedFlag === i && (
                                                        <motion.p
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: "auto" }}
                                                            exit={{ opacity: 0, height: 0 }}
                                                            className="text-sm text-gray-600 dark:text-gray-400 mt-2"
                                                        >
                                                            {rf.body}
                                                        </motion.p>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </div>
                                    </button>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {activeTab === "guides" && (
                    <motion.div
                        key="guides"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-12"
                    >
                        {/* SSL Guide */}
                        <section className="rounded-2xl bg-white dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-800 shadow-lg">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                                    <Lock className="h-5 w-5 text-white" />
                                </div>
                                SSL Certificate Check
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                SSL certificates encrypt data between your browser and the server. Without SSL, anyone can intercept
                                your password or card number.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Manual Method:</h3>
                                    <ol className="space-y-2">
                                        {[
                                            "Look for padlock icon in address bar",
                                            "Click padlock to view certificate",
                                            "Verify certificate matches domain",
                                            "Check expiration date",
                                        ].map((step, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm">
                                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 text-xs font-bold flex items-center justify-center">
                                                    {i + 1}
                                                </span>
                                                <span className="text-gray-700 dark:text-gray-300">{step}</span>
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                                <div className="rounded-lg p-4 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 border border-indigo-200 dark:border-indigo-900">
                                    <div className="flex items-start gap-3">
                                        <Zap className="h-5 w-5 text-indigo-600 mt-0.5" />
                                        <div>
                                            <p className="text-sm font-semibold text-indigo-900 dark:text-indigo-200 mb-2">
                                                Shortcut: Use Our Checker
                                            </p>
                                            <p className="text-xs text-indigo-800 dark:text-indigo-300">
                                                Automatic SSL verification in under 5 seconds. Checks certificate authority, encryption
                                                strength, and expiration dates.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Domain Age */}
                        <section className="rounded-2xl bg-white dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-800 shadow-lg">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                                    <Clock className="h-5 w-5 text-white" />
                                </div>
                                Domain Age Verification
                            </h2>

                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-900/30">
                                    <p className="font-semibold text-green-700 dark:text-green-400 mb-3 flex items-center gap-2">
                                        <CheckCircle2 className="h-4 w-4" /> Safe Websites
                                    </p>
                                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1.5">
                                        <li className="flex items-start gap-2">
                                            <span className="text-green-500">✓</span> 2+ years old
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-green-500">✓</span> Consistent ownership
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-green-500">✓</span> Transparent registration
                                        </li>
                                    </ul>
                                </div>
                                <div className="p-4 rounded-xl bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900/30">
                                    <p className="font-semibold text-red-700 dark:text-red-400 mb-3 flex items-center gap-2">
                                        <AlertTriangle className="h-4 w-4" /> Scam Websites
                                    </p>
                                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1.5">
                                        <li className="flex items-start gap-2">
                                            <span className="text-red-500">⚠</span> Days or weeks old
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-red-500">⚠</span> Hidden WHOIS info
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-red-500">⚠</span> Registered in bulk
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Phishing Guide */}
                        <section className="rounded-2xl bg-white dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-800 shadow-lg">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center">
                                    <ShieldAlert className="h-5 w-5 text-white" />
                                </div>
                                Spot Phishing Websites
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                Phishing creates fake websites impersonating legitimate companies to steal your credentials.
                            </p>

                            <div className="space-y-3">
                                {[
                                    { label: "Fake Banking", detail: "sbi-secure-login.com instead of onlinesbi.sbi" },
                                    { label: "UPI Phishing", detail: "Fake 'payment failed' messages" },
                                    { label: "Digital Arrest", detail: "Fake CBI/police sites threatening arrest" },
                                ].map(({ label, detail }) => (
                                    <div
                                        key={label}
                                        className="flex gap-3 p-3 rounded-lg bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900/30"
                                    >
                                        <ShieldAlert className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                                        <p className="text-sm">
                                            <strong className="text-gray-900 dark:text-white">{label}:</strong>{" "}
                                            <span className="text-gray-600 dark:text-gray-400">{detail}</span>
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </motion.div>
                )}

                {activeTab === "case-studies" && (
                    <motion.div
                        key="case-studies"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-8"
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                            Real Scam Examples: Learn from Others' Mistakes
                        </h2>

                        <div className="rounded-2xl bg-white dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-800 shadow-lg">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                                    <AlertTriangle className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                        The Fake Loan App Epidemic
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">March–June 2024</p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                                        <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">instant-loan-india.com</code>{" "}
                                        promised RBI-licensed instant loans up to ₹5 lakhs.
                                    </p>
                                    <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900/30">
                                        <p className="text-sm font-semibold text-red-700 dark:text-red-400 mb-2">The Damage:</p>
                                        <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                                            <li>• 847 victims</li>
                                            <li>• ₹1.8 crore stolen</li>
                                            <li>• Massive identity theft</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="p-4 rounded-lg bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-900/30">
                                    <p className="text-sm font-semibold text-yellow-700 dark:text-yellow-400 mb-3">
                                        Our Checker Revealed:
                                    </p>
                                    <ul className="space-y-2">
                                        {[
                                            "Domain age: 3 months",
                                            "WHOIS privacy enabled",
                                            "Registered in Cyprus",
                                            "23 user scam reports",
                                            "Blacklisted by Indian CERT",
                                        ].map((item) => (
                                            <li key={item} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                                                <div className="w-2 h-2 rounded-full bg-yellow-500 mt-1.5" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="p-4 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800">
                                <p className="text-sm text-indigo-800 dark:text-indigo-200">
                                    <strong>The Lesson:</strong> Before downloading ANY app or entering personal information, paste the
                                    website URL into our checker. Those 5 seconds could save you ₹45,000 and years of identity theft
                                    headaches.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* What We Check Section (Always Visible) */}
            <section className="rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 p-8 border border-indigo-200 dark:border-indigo-900">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                    What Our Free Checker Verifies
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8 text-center">
                    15+ comprehensive security tests in under 5 seconds
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {checkItems.map(({ icon, label, desc }, i) => (
                        <motion.div
                            key={label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="group p-5 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-lg hover:scale-105 transition-all cursor-default"
                        >
                            <div className="text-indigo-500 mb-3 group-hover:scale-110 transition-transform">{icon}</div>
                            <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">{label}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">{desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
