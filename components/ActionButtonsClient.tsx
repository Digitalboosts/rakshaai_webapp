"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Shield } from "lucide-react";
import QRCode from "react-qr-code";
import { printWithWatermark } from "@/lib/utils";
import AppStoreButtons from "@/components/AppStoreButtons";

type Props = {
  data?: any;
  analyzedUrl?: string;
};

export default function ActionButtonsClient({ data, analyzedUrl }: Props) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="mt-10 mb-25 no-print"
    >
      <div className="glass flex flex-col lg:flex-row justify-center gap-6 lg:gap-14 rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-200 dark:border-gray-800">
        <div className="flex-1">
          <div className="text-center mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">Need More Information?</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Check another website or save this report for your records</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => (window.location.href = "/")}
              className="flex items-center justify-center space-x-2 px-4 sm:px-6 py-3 sm:py-3.5 glass rounded-xl font-semibold text-sm sm:text-base text-gray-900 dark:text-white hover:shadow-xl hover:scale-105 transition-all border-2 border-indigo-200 dark:border-indigo-800 hover:border-indigo-400 dark:hover:border-indigo-600"
            >
              <Globe className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="whitespace-nowrap">Check Another Website</span>
            </button>
            <button
              onClick={() => {
                let domain = data?.url_details?.complete_domain || data?.url_details?.domain || analyzedUrl || "report";
                if (domain.includes("://")) {
                  try {
                    domain = new URL(domain).hostname;
                  } catch { }
                }
                const safeDomain = domain.replace(/[^a-zA-Z0-9-_\.]/g, "_");
                const pdfTitle = `RakshaAI-(${safeDomain})-Report`;
                printWithWatermark(pdfTitle);
              }}
              className="flex items-center justify-center space-x-2 px-4 sm:px-6 py-3 sm:py-3.5 gradient-primary text-white rounded-xl font-semibold text-sm sm:text-base hover:shadow-xl hover:scale-105 transition-all"
            >
              <Shield className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="whitespace-nowrap">Save Report (PDF)</span>
            </button>
          </div>
        </div>
        <div aria-hidden="true" className="hidden lg:block self-stretch w-px bg-gray-200 dark:bg-gray-700" />
        <div aria-hidden="true" className="block lg:hidden h-px w-full bg-gray-200 dark:bg-gray-700" />
        {/* App download QR */}
        <div className="flex flex-col sm:flex-row lg:flex-row items-center gap-3 sm:gap-4 bg-white rounded-lg p-3 sm:p-4 border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36">
            <QRCode
              value="https://rakshaai.co/app"
              size={144}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              className="w-full h-full"
            />
          </div>
          <div className="text-center sm:text-left lg:text-left">
            <p className="text-sm font-bold text-gray-900 dark:text-white">Keep RakshaAI ready on your phone</p>
            <p className="mt-1 mb-3 max-w-xs text-xs leading-5 text-gray-500 dark:text-gray-400">Scan the code or choose your official app store.</p>
            <AppStoreButtons compact className="justify-center sm:justify-start" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
