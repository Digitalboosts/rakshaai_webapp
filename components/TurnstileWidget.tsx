"use client";

import { memo } from 'react';
import Turnstile from 'react-turnstile';
import { motion, AnimatePresence } from '@/components/ui/NoMotion';
import { RefreshCw, AlertTriangle } from 'lucide-react';

interface TurnstileWidgetProps {
  siteKey: string;
  theme?: 'light' | 'dark' | 'auto';
  size?: 'normal' | 'compact';
  widgetKey: number;
  isLoading?: boolean;
  error?: string | null;
  isVerified?: boolean;
  onVerify: (token: string) => void;
  onExpire: () => void;
  onError: (error?: string) => void;
  onLoad?: (widgetId: string) => void;
  onRetry?: () => void;
  className?: string;
}

const TurnstileWidget = memo(function TurnstileWidget({
  siteKey,
  theme = 'auto',
  size = 'normal',
  widgetKey,
  isLoading = false,
  error,
  isVerified = false,
  onVerify,
  onExpire,
  onError,
  onLoad,
  onRetry,
  className = '',
}: TurnstileWidgetProps) {
  return (
    <div className={`flex flex-col items-center space-y-3 ${className}`}>
      {/* Status Indicator */}
      {/* <AnimatePresence>
        {isVerified && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="flex items-center space-x-2 text-green-600 dark:text-green-400"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium">Verified</span>
          </motion.div>
        )}
      </AnimatePresence> */}

      {/* Turnstile Widget */}
      <div className="relative">
        <AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 rounded-lg z-10"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-6 h-6 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin"
              />
            </motion.div>
          )}
        </AnimatePresence>

        <Turnstile
          key={`turnstile-${widgetKey}`}
          sitekey={siteKey}
          onVerify={onVerify}
          onExpire={onExpire}
          onError={onError}
          onLoad={onLoad}
          theme={theme}
          size={size}
        />
      </div>

      {/* Error Message with Retry Button */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex flex-col items-center space-y-2 max-w-sm"
          >
            <div className="flex items-center space-x-2 text-red-600 dark:text-red-400">
              <AlertTriangle className="w-4 h-4" />
              <span className="text-sm text-center">{error}</span>
            </div>
            
            {onRetry && (
              <button
                onClick={onRetry}
                className="flex items-center space-x-1 px-3 py-1 text-xs bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded-md hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors"
                type="button"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Retry</span>
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

export default TurnstileWidget;
