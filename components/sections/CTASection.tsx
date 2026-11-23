import Link from "next/link";
import SectionContainerServer from "@/components/ui/SectionContainerServer";
import { Shield } from "lucide-react";

export default function CTASection() {
  return (
    <SectionContainerServer className="py-16">
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-700 dark:to-blue-700 rounded-2xl p-8 sm:p-12 text-center text-white">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 left-4 w-32 h-32 bg-white rounded-full blur-2xl" />
          <div className="absolute bottom-4 right-4 w-24 h-24 bg-white rounded-full blur-xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Compact Header */}
          <div className="flex items-center justify-center mb-6">
            <div className="bg-white/20 rounded-full p-3 mr-4">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold">
              Protect Yourself Today
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Check suspicious links, UPI IDs and phone numbers before you click, respond or send money.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/website-safety-checker"
              className="group relative px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                🔍 Check a Website
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            <Link href="/business" className="rounded-xl border border-white/40 px-8 py-4 font-semibold text-white transition hover:bg-white/10">Integrate RakshaAI →</Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 flex justify-center items-center gap-6 text-white/70 text-sm">
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              Free consumer checks
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              Instant Results
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
              Privacy-first design
            </div>
          </div>
        </div>
      </div>
    </SectionContainerServer>
  );
}
