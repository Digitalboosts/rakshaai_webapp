import SectionContainerServer from "@/components/ui/SectionContainerServer";
import { CheckCircle } from "lucide-react";

interface HowItWorksSectionProps {
  howItWorks: any;
}

export default function HowItWorksSection({ howItWorks }: HowItWorksSectionProps) {
  return (
    <SectionContainerServer id="how-it-works" className="py-12 md:py-24">
      <div className="space-y-8 md:space-y-16">
        <div className="text-center space-y-4 md:space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white px-4">
            {howItWorks.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            {howItWorks.subtitle}
          </p>
        </div>

        <div className="space-y-6 md:space-y-8">
          {(howItWorks.steps as any[]).map((item: any, index: number) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:-translate-y-1 mx-4 md:mx-0"
            >
              {/* Mobile Layout (Vertical) */}
              <div className="flex flex-col space-y-4 md:hidden">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">{item.step}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                  </div>
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">{item.description}</p>
              </div>

              {/* Desktop Layout (Horizontal) */}
              <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                    <span className="text-2xl lg:text-3xl font-bold text-white">{item.step}</span>
                  </div>
                </div>
                <div className="flex-1 space-y-3">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm lg:text-base">{item.description}</p>
                </div>
                <CheckCircle className="h-7 w-7 lg:h-8 lg:w-8 text-green-500 flex-shrink-0" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainerServer>
  );
}