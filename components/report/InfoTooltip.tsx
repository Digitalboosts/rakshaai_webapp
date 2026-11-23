import { Info } from "lucide-react";

interface InfoTooltipProps {
  text: string;
}

export default function InfoTooltip({ text }: InfoTooltipProps) {
  return (
    <span className="relative inline-block group ml-1">
      <Info className="h-3 w-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 cursor-help transition-colors" />
      <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50 w-48 text-center">
        {text}
        <span className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-700"></span>
      </span>
    </span>
  );
}