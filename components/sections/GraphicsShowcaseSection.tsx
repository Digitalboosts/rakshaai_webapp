import Image from "next/image";
import { SITE_STATS } from "@/lib/config/siteStats";
import {
    Shield,
    CheckCircle2,
    Zap,
    Database,
    Lock,
    TrendingUp,
    Users,
} from "lucide-react";

const scamBreakdown = [
    { label: "UPI Fraud", pct: "31%", w: "31%", color: "bg-orange-500" },
    { label: "Phone Scams", pct: "27%", w: "27%", color: "bg-red-500" },
    { label: "Fake Websites", pct: "22%", w: "22%", color: "bg-purple-500" },
    { label: "QR Code Fraud", pct: "12%", w: "12%", color: "bg-amber-500" },
    { label: "Others", pct: "8%", w: "8%", color: "bg-blue-400" },
];

const keyStats = [
    { value: "₹22,845 Cr", label: "Annual fraud in India", icon: TrendingUp, color: "from-red-500 to-rose-600" },
    { value: SITE_STATS.scamsInDatabase, label: "Scams in database", icon: Database, color: "from-orange-500 to-amber-600" },
    { value: SITE_STATS.usersProtected, label: "Indians protected", icon: Users, color: "from-purple-500 to-blue-600" },
    { value: SITE_STATS.resultSpeedShort, label: "Instant results", icon: Zap, color: "from-green-500 to-emerald-600" },
];

export default function GraphicsShowcaseSection() {
    return (
        <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Subtle background */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#a855f708_1px,transparent_1px),linear-gradient(to_bottom,#a855f708_1px,transparent_1px)] bg-[size:56px_56px]" />
                <div className="absolute -top-24 right-0 w-[480px] h-[480px] bg-purple-400/8 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-orange-400/8 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto space-y-20">

                {/* ── Split Hero: Image + Stats ──────────────────────────── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Stats + Text */}
                    <div className="order-2 lg:order-1">
                        <span className="inline-flex items-center gap-2 text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest mb-4">
                            <Shield className="h-3.5 w-3.5" />
                            India&apos;s #1 Scam Detection Platform
                        </span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
                            India Loses{" "}
                            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                                ₹22,845 Crore
                            </span>{" "}
                            to Online Scams Every Year
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed text-base">
                            From UPI fraud to fake websites and scam phone calls  online fraud has become an
                            epidemic across India. RakshaAI gives every Indian a free, instant way to verify
                            before they click, pay, or pick up.
                        </p>

                        {/* Key stats grid */}
                        <div className="grid grid-cols-2 gap-3 mb-8">
                            {keyStats.map((stat) => {
                                const Icon = stat.icon;
                                return (
                                    <div
                                        key={stat.label}
                                        className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                                    >
                                        <div
                                            className={`w-9 h-9 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center flex-shrink-0 shadow-sm`}
                                        >
                                            <Icon className="h-4 w-4 text-white" />
                                        </div>
                                        <div>
                                            <div className={`text-lg font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                                                {stat.value}
                                            </div>
                                            <div className="text-[11px] text-gray-500 dark:text-gray-400 leading-tight">
                                                {stat.label}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Visual scam breakdown bar */}
                        <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-5 shadow-sm">
                            <p className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-3">
                                Scam Type Breakdown in India (2025)
                            </p>
                            <div className="w-full h-7 rounded-lg overflow-hidden flex mb-3">
                                {scamBreakdown.map((item) => (
                                    <div
                                        key={item.label}
                                        className={`h-full ${item.color} first:rounded-l-lg last:rounded-r-lg`}
                                        style={{ width: item.w }}
                                        title={`${item.label}  ${item.pct}`}
                                    />
                                ))}
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {scamBreakdown.map((item) => (
                                    <div key={item.label} className="flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-400">
                                        <span className={`w-2.5 h-2.5 rounded-sm flex-shrink-0 ${item.color}`} />
                                        <span>{item.label}</span>
                                        <span className="font-bold text-gray-900 dark:text-white">{item.pct}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Main Image */}
                    <div className="order-1 lg:order-2 relative flex justify-center items-center">
                        {/* Decorative ring */}
                        <div className="absolute inset-0 -m-4 rounded-3xl bg-gradient-to-br from-purple-200/30 via-orange-100/20 to-transparent dark:from-purple-900/20 dark:via-orange-900/10 blur-xl" />
                        <div className="relative">
                            {/* Shield badge overlay */}
                            <div className="absolute -top-4 -right-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500 text-white text-xs font-bold shadow-lg shadow-green-500/30">
                                <CheckCircle2 className="h-3.5 w-3.5" />
                                Protected by AI
                            </div>
                            <div className="absolute -bottom-4 -left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 text-xs font-semibold shadow-md">
                                <Lock className="h-3.5 w-3.5 text-purple-500" />
                                Free · Secure Login
                            </div>
                            <Image
                                src="/image/website-safety-check-indian-woman-examining-suspicious-site-rakshaai.jpg"
                                alt="Indian woman checking website safety using RakshaAI scam detection platform  online fraud prevention India"
                                title="RakshaAI: Free Website, UPI & Phone Scam Checker for India"
                                width={560}
                                height={480}
                                className="rounded-3xl object-cover shadow-2xl w-full max-w-lg"
                                priority
                            />
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
}
