"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Turnstile from "react-turnstile";
import { Shield } from "lucide-react";
import { motion } from "framer-motion";
import Loader from "@/components/Loader";

interface SecurityVerificationProps {
  onVerify: (token: string) => void;
  isLoading?: boolean;
}

export default function SecurityVerification({ onVerify, isLoading }: SecurityVerificationProps) {
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  const handleVerify = (token: string) => {
    setTurnstileToken(token);
    onVerify(token);
  };

  if (isLoading && turnstileToken) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900 flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900 flex items-center justify-center">
      {/* Hidden SEO content for crawlers */}
      <div className="sr-only">
        <h1>Website Security Verification</h1>
        <p>
          This page requires security verification to display the complete security analysis report.
          We use Cloudflare Turnstile to ensure legitimate access and protect against automated bots.
        </p>
        <p>
          The report includes detailed information about website trust scores, SSL certificates,
          domain information, scam reports, and user reviews.
        </p>
      </div>
      
      <div className="text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border-2 border-indigo-200 dark:border-indigo-800 max-w-md"
        >
          <Shield className="h-16 w-16 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            Security Verification Required
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Please complete the verification below to view the detailed report.
          </p>
          <Turnstile
            sitekey={'0x4AAAAAACIBnMhBtiE_K88D'}
            onVerify={handleVerify}
            onExpire={() => setTurnstileToken(null)}
          />
        </motion.div>
      </div>
    </div>
  );
}