import Image from "next/image";
import Link from "next/link";
import {
    Globe,
    CreditCard,
    Phone,
    ArrowRight,
} from "lucide-react";

const checkerCards = [
    {
        icon: Globe,
        title: "Free Website Safety Checker",
        description:
            "Scan any URL for phishing, malware, or fake e-commerce sites before you click.",
        href: "/website-safety-checker",
        gradient: "from-purple-500 to-blue-600",
        badgeColor: "bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300",
        badge: "Most Used",
        image: "/image/website-safety-check-indian-woman-examining-suspicious-site-rakshaai.jpg",
        imageAlt: "Indian woman checking website safety on RakshaAI",
        stat: "Free website safety check",
    },
    {
        icon: CreditCard,
        title: "UPI ID Fraud Checker",
        description:
            "Verify any UPI ID against community fraud reports before you send money.",
        href: "/upi-id-checker",
        gradient: "from-orange-500 to-amber-600",
        badgeColor: "bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300",
        badge: "Instant Check",
        image: "/image/upi-payment-verification-security-check-rakshaai.jpg",
        imageAlt: "UPI ID verification against fraud on RakshaAI",
        stat: "Community fraud reports",
    },
    {
        icon: Phone,
        title: "Phone Number Scam Checker",
        description:
            "Identify suspicious callers, scam helplines, and fraudulent phone numbers instantly.",
        href: "/phone-number-checker",
        gradient: "from-rose-500 to-pink-600",
        badgeColor: "bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-300",
        badge: "Real-time alerts",
        image: "/image/indian-woman-checking-suspicious-scam-call-rakshaai.jpg",
        imageAlt: "Indian woman identifying scam call on RakshaAI",
        stat: "Community scam reports",
    },
];

export default function CheckerCardsTrustSection() {
    return (
        <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-20">

                {/* ── Three Checker Cards with Images ───────────────────── */}
                <div>
                    <div className="text-center mb-10">
                        <span className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest">
                            Consumer checking tools
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3">
                            Check Common Scam Signals Before You Act
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Whether it&apos;s a suspicious link, a UPI ID you just received, or an unknown caller  RakshaAI has you covered. All free, all instant.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {checkerCards.map((card) => {
                            const Icon = card.icon;
                            return (
                                <Link
                                    key={card.title}
                                    href={card.href}
                                    className="group relative flex flex-col rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                >
                                    {/* Image section */}
                                    <div className="relative h-48 overflow-hidden">
                                        <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-20 dark:opacity-30 z-10`} />
                                        <Image
                                            src={card.image}
                                            alt={card.imageAlt}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                        {/* Badge */}
                                        <div className={`absolute top-3 left-3 z-20 px-2.5 py-1 rounded-full text-[11px] font-bold ${card.badgeColor}`}>
                                            {card.badge}
                                        </div>
                                        {/* Icon circle */}
                                        <div className={`absolute bottom-3 right-3 z-20 w-10 h-10 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center shadow-lg`}>
                                            <Icon className="h-5 w-5 text-white" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-col flex-1 p-5">
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                            {card.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1 mb-4">
                                            {card.description}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                                                {card.stat}
                                            </span>
                                            <span className={`flex items-center gap-1 text-xs font-bold bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent group-hover:gap-2 transition-all`}>
                                                Check Now <ArrowRight className="h-3.5 w-3.5" style={{ color: "inherit" }} />
                                            </span>
                                        </div>
                                    </div>

                                    {/* Bottom shimmer accent on hover */}
                                    <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                                </Link>
                            );
                        })}
                    </div>
                </div>


            </div>
        </section>
    );
}
