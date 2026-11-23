import SectionContainerServer from "@/components/ui/SectionContainerServer";
import { SITE_STATS } from "@/lib/config/siteStats";
import { Check, X, AlertCircle, Trophy } from "lucide-react";

interface ComparisonTableSectionProps {
  comparisonTable: any;
}

export default function ComparisonTableSection({ comparisonTable }: ComparisonTableSectionProps) {
  return (
    <SectionContainerServer background="gradient" id="comparison" className="py-12 md:py-24">
      <div className="space-y-8 md:space-y-16">
        <div className="text-center space-y-4 md:space-y-6 px-4">
          <div className="inline-flex items-center gap-2 px-3 py-2 md:px-4 rounded-full bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200">
            <Trophy className="h-4 w-4 text-yellow-600" />
            <span className="text-xs md:text-sm font-semibold text-yellow-700">
              The Clear Winner
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white">
            {comparisonTable.title}
          </h2>
          {comparisonTable.subtitle && (
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {comparisonTable.subtitle}
            </p>
          )}
        </div>

        <div className="max-w-6xl mx-auto px-4">
          {/* Comparison Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* RakshaAI Card - Winner */}
            <div className="relative">
              {/* Winner Badge */}
              <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 z-10">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 md:px-6 rounded-full shadow-lg flex items-center gap-2">
                  <Trophy className="h-3 w-3 md:h-4 md:w-4" />
                  <span className="font-bold text-xs md:text-sm">Best for India 🇮🇳</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 shadow-2xl border-2 border-green-500 dark:border-green-600 mt-6 md:mt-8">
                <div className="text-center mb-6 md:mb-8">
                  <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-2">
                    RakshaAI
                  </h3>
                  <p className="text-xs md:text-sm font-semibold text-green-600 dark:text-green-400">
                    Built for Indians, by Indians
                  </p>
                </div>

                <div className="space-y-3 md:space-y-4">
                  {(comparisonTable.features as any[]).map((row: any, index: number) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-gray-800 rounded-lg md:rounded-xl p-3 md:p-4 shadow-md border border-green-200 dark:border-green-800"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs md:text-sm font-semibold text-gray-700 dark:text-gray-300 flex-1">
                          {row.feature}
                        </span>
                        <div className="flex items-center gap-1 md:gap-2 flex-shrink-0">
                          {row.rakshaai.includes('✅') ? (
                            <div className="flex items-center gap-1 md:gap-2 text-green-600 dark:text-green-400">
                              <Check className="h-4 w-4 md:h-5 md:w-5 font-bold" />
                              <span className="font-bold text-xs md:text-sm">{row.rakshaai.replace('✅', '').trim()}</span>
                            </div>
                          ) : (
                            <span className="font-bold text-green-600 dark:text-green-400 text-xs md:text-sm">{row.rakshaai}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 md:mt-8 text-center">
                  <button className="px-4 py-3 md:px-8 md:py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-lg md:rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full text-sm md:text-base">
                    Choose RakshaAI - It's FREE! 🚀
                  </button>
                </div>
              </div>
            </div>

            {/* Global Tools Card */}
            <div className="relative lg:mt-8">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 shadow-xl border border-gray-300 dark:border-gray-700 opacity-90">
                <div className="text-center mb-6 md:mb-8">
                  <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-2">
                    Global Tools
                  </h3>
                  <p className="text-xs md:text-sm font-semibold text-gray-500 dark:text-gray-400">
                    Not designed for India
                  </p>
                </div>

                <div className="space-y-3 md:space-y-4">
                  {(comparisonTable.features as any[]).map((row: any, index: number) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-gray-800 rounded-lg md:rounded-xl p-3 md:p-4 shadow-sm border border-gray-200 dark:border-gray-700"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs md:text-sm font-semibold text-gray-700 dark:text-gray-300 flex-1">
                          {row.feature}
                        </span>
                        <div className="flex items-center gap-1 md:gap-2 flex-shrink-0">
                          {row.globalTools.includes('❌') ? (
                            <div className="flex items-center gap-1 md:gap-2 text-red-500 dark:text-red-400">
                              <X className="h-4 w-4 md:h-5 md:w-5 font-bold" />
                              <span className="font-bold text-xs md:text-sm">{row.globalTools.replace('❌', '').trim()}</span>
                            </div>
                          ) : row.globalTools.includes('⚠️') ? (
                            <div className="flex items-center gap-1 md:gap-2 text-orange-500 dark:text-orange-400">
                              <AlertCircle className="h-4 w-4 md:h-5 md:w-5" />
                              <span className="font-bold text-xs md:text-sm">{row.globalTools.replace('⚠️', '').trim()}</span>
                            </div>
                          ) : (
                            <span className="font-bold text-gray-600 dark:text-gray-400 text-xs md:text-sm">{row.globalTools}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 md:mt-8 text-center">
                  <div className="px-4 py-3 md:px-8 md:py-4 bg-gray-300 dark:bg-gray-700 text-gray-600 dark:text-gray-400 font-bold rounded-lg md:rounded-xl w-full opacity-60 text-sm md:text-base">
                    Expensive & Limited
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-6 sm:mt-8 md:mt-12 text-center space-y-2 sm:space-y-3 md:space-y-4 px-2 sm:px-0">
            <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2 md:gap-3 px-3 py-2.5 sm:px-4 sm:py-3 md:px-8 md:py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-xl max-w-full">
              <Trophy className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 flex-shrink-0" />
              <span className="text-xs sm:text-sm md:text-lg font-bold text-center leading-tight">
                Choose the tool built specifically for India 🇮🇳
              </span>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 px-2 sm:px-4 leading-relaxed">
              Join {SITE_STATS.usersProtected} Indians protecting themselves with RakshaAI
            </p>
          </div>
        </div>
      </div>
    </SectionContainerServer>
  );
}
