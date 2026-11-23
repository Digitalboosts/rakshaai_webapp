"use client";

import { ArrowLeft, RotateCcw } from "lucide-react";
import { useRouter } from "next/navigation";
import ShareButton from "@/components/ShareButton";

interface ReportHeaderProps {
  slug: string;
  analyzedUrl: string;
  title: string;
}

export default function ReportHeader({ slug, analyzedUrl, title }: ReportHeaderProps) {
  const router = useRouter();

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between p-3 sm:p-4 rounded-xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 shadow-sm">
        <button
          onClick={() => router.back()}
          className="flex items-center space-x-2 sm:space-x-3 px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600 hover:bg-gray-100/80 dark:hover:bg-gray-800/80 transition-all duration-200 group shadow-sm hover:shadow-md"
        >
          <ArrowLeft className="h-4 w-4 text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
          <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            Go Back
          </span>
        </button>

        <div className="flex items-center space-x-2 sm:space-x-3">
          <ShareButton
            slug={slug}
            title={title}
          />
          <button
            onClick={() => router.push('/')}
            className="flex items-center space-x-1 sm:space-x-2 px-3 py-2 sm:px-5 sm:py-2.5 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white text-xs sm:text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md group whitespace-nowrap"
          >
            <RotateCcw className="h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
            <span className="hidden min-[480px]:inline">Check another website</span>
            <span className="min-[480px]:hidden">Check</span>
          </button>
        </div>
      </div>
    </div>
  );
}