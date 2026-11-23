"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';
import { useToast } from '@/components/ui/Toast';
import { SITE_URL } from '@/lib/site-config';

interface ShareButtonProps {
  slug: string;
  title?: string;
  className?: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({
  slug,
  title = "Check out this website security analysis",
  className = ""
}) => {
  const [copied, setCopied] = useState(false);
  const { addToast } = useToast();

  const shareUrl = `${SITE_URL}/check/${slug}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      addToast('success', '🔗 Link copied to clipboard! Share it anywhere you like.', 3000);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
      addToast('error', 'Failed to copy link. Please try again.', 3000);
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleCopyLink}
      className={`relative inline-flex items-center space-x-1.5 sm:space-x-2 px-4 py-2.5 sm:px-6 sm:py-3 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-700 hover:via-purple-700 hover:to-indigo-700 text-white border-0 transition-all duration-300 shadow-lg hover:shadow-2xl group overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
      <motion.div
        animate={copied ? { scale: [1, 1.2, 1] } : {}}
        transition={{ duration: 0.3 }}
        className="relative z-10"
      >
        {copied ? (
          <Check className="h-4 w-4 sm:h-5 sm:w-5 transition-all duration-300" />
        ) : (
          <Copy className="h-4 w-4 sm:h-5 sm:w-5 transition-all duration-300 group-hover:scale-110" />
        )}
      </motion.div>
      <span className="text-xs sm:text-sm font-semibold relative z-10">
        <span className="hidden min-[400px]:inline">{copied ? 'Copied!' : 'Copy Link'}</span>
        <span className="min-[400px]:hidden">{copied ? '✓' : 'Copy'}</span>
      </span>
      <div className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full animate-pulse"></div>
    </motion.button>
  );
};

export default ShareButton;