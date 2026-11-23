import NextLink from "next/link";
import SectionContainerServer from "@/components/ui/SectionContainerServer";
import {
  AlertTriangle,
  CreditCard,
  Gavel,
  ShoppingCart,
  TrendingUp,
  Briefcase,
  Link,
  Heart,
  Banknote,
  Phone,
  Bitcoin,
  LucideIcon
} from "lucide-react";

interface ScamCategoriesSectionProps {
  scamCategories: any;
}

// Function to get the URL for each scam category
const getScamUrl = (categoryId: number): string => {
  const urlMap: { [key: number]: string } = {
    1: "/scams/upi-fraud",
    2: "/scams/digital-arrest",
    3: "/scams/e-commerce-fraud",
    4: "/scams/investment-scams",
    5: "/scams/job-scams",
    6: "/scams/phishing",
    7: "/scams/romance-scams",
    8: "/scams/loan-fraud",
    9: "/scams/phone-scams",
    10: "/scams/crypto-scams",
  };
  return urlMap[categoryId] || "/scams";
};

// Function to get the appropriate icon and theme for each scam type
const getScamIcon = (categoryId: number): LucideIcon => {
  const iconMap: { [key: number]: LucideIcon } = {
    1: CreditCard,     // UPI Fraud Detection
    2: Gavel,          // Digital Arrest Scams  
    3: ShoppingCart,   // Fake E-commerce Websites
    4: TrendingUp,     // Investment & Trading Scams
    5: Briefcase,      // Task-Based Job Scams
    6: Link,           // Phishing & Fake Links
    7: Heart,          // Romance & Dating Scams
    8: Banknote,       // Fake Loan Apps
    9: Phone,          // Phone & SMS Scams
    10: Bitcoin,       // Cryptocurrency Scams
  };

  return iconMap[categoryId] || AlertTriangle;
};

// Function to get unique gradient and color theme for each category
const getScamTheme = (categoryId: number) => {
  const themes = {
    1: {
      gradient: "from-blue-500 via-purple-500 to-pink-500",
      bgGradient: "from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/50 dark:via-purple-950/50 dark:to-pink-950/50",
      borderGradient: "from-blue-200 via-purple-200 to-pink-200 dark:from-blue-800/50 dark:via-purple-800/50 dark:to-pink-800/50",
      textColor: "text-blue-600 dark:text-blue-400"
    },
    2: {
      gradient: "from-red-500 via-orange-500 to-yellow-500",
      bgGradient: "from-red-50 via-orange-50 to-yellow-50 dark:from-red-950/50 dark:via-orange-950/50 dark:to-yellow-950/50",
      borderGradient: "from-red-200 via-orange-200 to-yellow-200 dark:from-red-800/50 dark:via-orange-800/50 dark:to-yellow-800/50",
      textColor: "text-red-600 dark:text-red-400"
    },
    3: {
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      bgGradient: "from-green-50 via-emerald-50 to-teal-50 dark:from-green-950/50 dark:via-emerald-950/50 dark:to-teal-950/50",
      borderGradient: "from-green-200 via-emerald-200 to-teal-200 dark:from-green-800/50 dark:via-emerald-800/50 dark:to-teal-800/50",
      textColor: "text-green-600 dark:text-green-400"
    },
    4: {
      gradient: "from-purple-500 via-violet-500 to-indigo-500",
      bgGradient: "from-purple-50 via-violet-50 to-indigo-50 dark:from-purple-950/50 dark:via-violet-950/50 dark:to-indigo-950/50",
      borderGradient: "from-purple-200 via-violet-200 to-indigo-200 dark:from-purple-800/50 dark:via-violet-800/50 dark:to-indigo-800/50",
      textColor: "text-purple-600 dark:text-purple-400"
    },
    5: {
      gradient: "from-orange-500 via-amber-500 to-yellow-500",
      bgGradient: "from-orange-50 via-amber-50 to-yellow-50 dark:from-orange-950/50 dark:via-amber-950/50 dark:to-yellow-950/50",
      borderGradient: "from-orange-200 via-amber-200 to-yellow-200 dark:from-orange-800/50 dark:via-amber-800/50 dark:to-yellow-800/50",
      textColor: "text-orange-600 dark:text-orange-400"
    },
    6: {
      gradient: "from-cyan-500 via-sky-500 to-blue-500",
      bgGradient: "from-cyan-50 via-sky-50 to-blue-50 dark:from-cyan-950/50 dark:via-sky-950/50 dark:to-blue-950/50",
      borderGradient: "from-cyan-200 via-sky-200 to-blue-200 dark:from-cyan-800/50 dark:via-sky-800/50 dark:to-blue-800/50",
      textColor: "text-cyan-600 dark:text-cyan-400"
    },
    7: {
      gradient: "from-pink-500 via-rose-500 to-red-500",
      bgGradient: "from-pink-50 via-rose-50 to-red-50 dark:from-pink-950/50 dark:via-rose-950/50 dark:to-red-950/50",
      borderGradient: "from-pink-200 via-rose-200 to-red-200 dark:from-pink-800/50 dark:via-rose-800/50 dark:to-red-800/50",
      textColor: "text-pink-600 dark:text-pink-400"
    },
    8: {
      gradient: "from-emerald-500 via-green-500 to-lime-500",
      bgGradient: "from-emerald-50 via-green-50 to-lime-50 dark:from-emerald-950/50 dark:via-green-950/50 dark:to-lime-950/50",
      borderGradient: "from-emerald-200 via-green-200 to-lime-200 dark:from-emerald-800/50 dark:via-green-800/50 dark:to-lime-800/50",
      textColor: "text-emerald-600 dark:text-emerald-400"
    },
    9: {
      gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
      bgGradient: "from-violet-50 via-purple-50 to-fuchsia-50 dark:from-violet-950/50 dark:via-purple-950/50 dark:to-fuchsia-950/50",
      borderGradient: "from-violet-200 via-purple-200 to-fuchsia-200 dark:from-violet-800/50 dark:via-purple-800/50 dark:to-fuchsia-800/50",
      textColor: "text-violet-600 dark:text-violet-400"
    },
    10: {
      gradient: "from-amber-500 via-orange-500 to-red-500",
      bgGradient: "from-amber-50 via-orange-50 to-red-50 dark:from-amber-950/50 dark:via-orange-950/50 dark:to-red-950/50",
      borderGradient: "from-amber-200 via-orange-200 to-red-200 dark:from-amber-800/50 dark:via-orange-800/50 dark:to-red-800/50",
      textColor: "text-amber-600 dark:text-amber-400"
    }
  };

  return themes[categoryId as keyof typeof themes] || themes[1];
};

export default function ScamCategoriesSection({ scamCategories }: ScamCategoriesSectionProps) {
  return (
    <SectionContainerServer background="gradient" id="scam-categories" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-purple-50/30 to-pink-50/30 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-400/10 to-orange-400/10 rounded-full blur-3xl translate-y-1/2"></div>

      <div className="relative z-10 space-y-16">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-200/50 dark:border-gray-700/50">
            <AlertTriangle className="h-5 w-5 text-orange-500" />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Fraud Detection Categories</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent leading-tight">
            {scamCategories.title}
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {scamCategories.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {(scamCategories.categories as any[]).map((category: any, index: number) => {
            const ScamIcon = getScamIcon(category.id);
            const theme = getScamTheme(category.id);

            return (
              <NextLink
                key={category.id}
                href={getScamUrl(category.id)}
                className={`group relative overflow-hidden rounded-2xl border bg-gradient-to-br ${theme.bgGradient} border-gradient-to-r ${theme.borderGradient} backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 block`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Glassmorphism overlay */}
                <div className="absolute inset-0 bg-white/20 dark:bg-gray-900/20 backdrop-blur-sm"></div>

                {/* Animated gradient border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${theme.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}></div>

                <div className="relative z-10 p-6 h-full flex flex-col">
                  {/* Header section */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="relative">
                      {/* Main icon with animated background */}
                      <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${theme.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                        {/* Animated ring */}
                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${theme.gradient} opacity-30 group-hover:opacity-50 animate-pulse`}></div>
                        <ScamIcon className="relative z-10 h-8 w-8 text-white drop-shadow-md" />
                      </div>

                      {/* Category number badge */}
                      <div className="absolute -top-2 -right-2 w-7 h-7 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg border-2 border-gray-100 dark:border-gray-700">
                        <span className="text-xs font-bold text-gray-700 dark:text-gray-300">{category.id}</span>
                      </div>
                    </div>

                    {/* Risk indicator */}
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                      <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" style={{ animationDelay: '200ms' }}></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" style={{ animationDelay: '400ms' }}></div>
                    </div>
                  </div>

                  {/* Content section */}
                  <div className="flex-1 space-y-4">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors">
                      {category.title}
                    </h3>

                    {category.description && (
                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                        {category.description}
                      </p>
                    )}

                    <div className="space-y-2">
                      <p className={`text-sm font-bold ${theme.textColor} leading-relaxed`}>
                        {category.amount}
                      </p>

                      {/* Progress bar visualization */}
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${theme.gradient} rounded-full transition-all duration-1000 group-hover:w-full`}
                          style={{ width: `${Math.min(85, 40 + (index * 8))}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* Footer with trending indicator */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">High Priority</span>
                    <TrendingUp className={`h-4 w-4 ${theme.textColor} group-hover:scale-110 transition-transform`} />
                  </div>
                </div>
              </NextLink>
            );
          })}
        </div>

        {/* Call-to-action footer */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">AI-Powered Detection</span>
            </div>
            <div className="w-px h-4 bg-gray-300 dark:bg-gray-600"></div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Real-time Analysis</span>
            </div>
          </div>
        </div>
      </div>
    </SectionContainerServer>
  );
}
