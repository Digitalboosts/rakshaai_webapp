import SectionContainerServer from "@/components/ui/SectionContainerServer";
import { Shield, CheckCircle } from "lucide-react";

interface SafetyTipsSectionProps {
  safetyTips: any;
}

export default function SafetyTipsSection({ safetyTips }: SafetyTipsSectionProps) {
  return (
    <SectionContainerServer background="gradient" id="safety-tips" className="py-24">
      <div className="space-y-16">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-green-50 border border-blue-100">
            <Shield className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">
              Essential Protection
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white">
            {safetyTips.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {safetyTips.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {(safetyTips.tips as any[]).map((tip: any, index: number) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:-translate-y-2 group"
            >
              <div className="space-y-4">
                {/* Icon and Number */}
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center text-3xl">
                    {tip.icon}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                      {index + 1}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {tip.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {tip.description}
                </p>

                {/* Check Icon */}
                <div className="pt-2 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-xs font-semibold">Essential Rule</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-xl shadow-lg">
            <Shield className="h-5 w-5" />
            <span className="font-semibold">
              Build these habits to reduce common online scam risks.
            </span>
          </div>
        </div>
      </div>
    </SectionContainerServer>
  );
}
