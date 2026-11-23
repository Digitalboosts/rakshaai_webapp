import Link from "next/link";
import {
  ShoppingCart,
  Monitor,
  Package,
  Sparkles,
  Wallet,
  TrendingUp,
  Home,
  Zap,
  Globe,
  Shield,
  Phone,
  CreditCard,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

// Cycling palette  assigned by index when the API doesn't provide visual metadata
const CARD_THEMES = [
  {
    icon: ShoppingCart,
    gradient: "from-orange-500 to-amber-500",
    bgGradient: "from-orange-50 to-amber-50 dark:from-orange-950/40 dark:to-amber-950/40",
    textColor: "text-orange-600 dark:text-orange-400",
    glowColor: "group-hover:shadow-orange-200/60 dark:group-hover:shadow-orange-900/40",
  },
  {
    icon: Monitor,
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-950/40 dark:to-cyan-950/40",
    textColor: "text-blue-600 dark:text-blue-400",
    glowColor: "group-hover:shadow-blue-200/60 dark:group-hover:shadow-blue-900/40",
  },
  {
    icon: Package,
    gradient: "from-rose-500 to-pink-500",
    bgGradient: "from-rose-50 to-pink-50 dark:from-rose-950/40 dark:to-pink-950/40",
    textColor: "text-rose-600 dark:text-rose-400",
    glowColor: "group-hover:shadow-rose-200/60 dark:group-hover:shadow-rose-900/40",
  },
  {
    icon: Sparkles,
    gradient: "from-fuchsia-500 to-purple-500",
    bgGradient: "from-fuchsia-50 to-purple-50 dark:from-fuchsia-950/40 dark:to-purple-950/40",
    textColor: "text-fuchsia-600 dark:text-fuchsia-400",
    glowColor: "group-hover:shadow-fuchsia-200/60 dark:group-hover:shadow-fuchsia-900/40",
  },
  {
    icon: Wallet,
    gradient: "from-indigo-500 to-violet-600",
    bgGradient: "from-indigo-50 to-violet-50 dark:from-indigo-950/40 dark:to-violet-950/40",
    textColor: "text-indigo-600 dark:text-indigo-400",
    glowColor: "group-hover:shadow-indigo-200/60 dark:group-hover:shadow-indigo-900/40",
  },
  {
    icon: TrendingUp,
    gradient: "from-emerald-500 to-green-500",
    bgGradient: "from-emerald-50 to-green-50 dark:from-emerald-950/40 dark:to-green-950/40",
    textColor: "text-emerald-600 dark:text-emerald-400",
    glowColor: "group-hover:shadow-emerald-200/60 dark:group-hover:shadow-emerald-900/40",
  },
  {
    icon: Home,
    gradient: "from-red-500 to-rose-500",
    bgGradient: "from-red-50 to-rose-50 dark:from-red-950/40 dark:to-rose-950/40",
    textColor: "text-red-600 dark:text-red-400",
    glowColor: "group-hover:shadow-red-200/60 dark:group-hover:shadow-red-900/40",
  },
  {
    icon: Zap,
    gradient: "from-yellow-400 to-orange-500",
    bgGradient: "from-yellow-50 to-orange-50 dark:from-yellow-950/40 dark:to-orange-950/40",
    textColor: "text-yellow-600 dark:text-yellow-400",
    glowColor: "group-hover:shadow-yellow-200/60 dark:group-hover:shadow-yellow-900/40",
  },
  {
    icon: Globe,
    gradient: "from-teal-500 to-cyan-600",
    bgGradient: "from-teal-50 to-cyan-50 dark:from-teal-950/40 dark:to-cyan-950/40",
    textColor: "text-teal-600 dark:text-teal-400",
    glowColor: "group-hover:shadow-teal-200/60 dark:group-hover:shadow-teal-900/40",
  },
  {
    icon: Shield,
    gradient: "from-purple-500 to-indigo-500",
    bgGradient: "from-purple-50 to-indigo-50 dark:from-purple-950/40 dark:to-indigo-950/40",
    textColor: "text-purple-600 dark:text-purple-400",
    glowColor: "group-hover:shadow-purple-200/60 dark:group-hover:shadow-purple-900/40",
  },
  {
    icon: Phone,
    gradient: "from-sky-500 to-blue-600",
    bgGradient: "from-sky-50 to-blue-50 dark:from-sky-950/40 dark:to-blue-950/40",
    textColor: "text-sky-600 dark:text-sky-400",
    glowColor: "group-hover:shadow-sky-200/60 dark:group-hover:shadow-sky-900/40",
  },
  {
    icon: CreditCard,
    gradient: "from-lime-500 to-green-500",
    bgGradient: "from-lime-50 to-green-50 dark:from-lime-950/40 dark:to-green-950/40",
    textColor: "text-lime-600 dark:text-lime-400",
    glowColor: "group-hover:shadow-lime-200/60 dark:group-hover:shadow-lime-900/40",
  },
];

export type SitemapEligibleResult = {
  slug: string;
  domain: string;
  is_sitemap_ready: boolean;
};

interface PopularChecksSectionProps {
  results: SitemapEligibleResult[];
}

export default function PopularChecksSection({ results }: PopularChecksSectionProps) {
  if (results.length === 0) return null;

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle background blobs */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-purple-300/10 dark:bg-purple-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-300/10 dark:bg-orange-500/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm mb-4">
            <ShieldCheck className="h-4 w-4 text-purple-500" />
            <span className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest">
              Popular Safety Checks
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3">
            Check Trusted Indian Websites & Apps
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            Wondering if a popular website is safe? See what RakshaAI says about
            India&apos;s most-searched platforms.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {results.map((item, index) => {
            const theme = CARD_THEMES[index % CARD_THEMES.length];
            const Icon = theme.icon;
            const label = `Is ${item.domain} Safe?`;

            return (
              <Link
                key={item.slug}
                href={`/check/${item.slug}`}
                className={`group relative flex flex-col gap-3 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 bg-gradient-to-br ${theme.bgGradient} hover:shadow-xl ${theme.glowColor} hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
              >
                {/* Animated glow overlay on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${theme.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Icon */}
                <div className="relative z-10">
                  <div
                    className={`w-11 h-11 rounded-xl bg-gradient-to-br ${theme.gradient} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                </div>

                {/* Domain */}
                <p className={`text-[10px] font-bold uppercase tracking-widest ${theme.textColor} relative z-10`}>
                  {item.domain}
                </p>

                {/* Title */}
                <h3 className="text-sm sm:text-[15px] font-bold text-gray-900 dark:text-white leading-snug group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors relative z-10">
                  {label}
                </h3>

                {/* Footer CTA */}
                <div
                  className={`flex items-center gap-1 text-xs font-semibold ${theme.textColor} group-hover:gap-2 transition-all duration-200 relative z-10 mt-auto pt-2 border-t border-gray-200/60 dark:border-gray-700/40`}
                >
                  View Safety Report
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>

                {/* Bottom shimmer bar on hover */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${theme.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
