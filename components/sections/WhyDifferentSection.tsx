import SectionContainerServer from "@/components/ui/SectionContainerServer";
import { CheckCircle } from "lucide-react";

interface WhyDifferentSectionProps {
  whyDifferent: any;
}

export default function WhyDifferentSection({ whyDifferent }: WhyDifferentSectionProps) {
  return (
    <SectionContainerServer background="gradient" id="why-different" className="py-24">
      <div className="space-y-16">
        <div className="text-center space-y-6">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white">
            {whyDifferent.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {whyDifferent.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(whyDifferent.features as any[]).map((feature: any, index: number) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:-translate-y-1 group"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-2xl">
                    {feature.icon}
                  </div>
                </div>
                
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainerServer>
  );
}
