'use client'

import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { motion } from 'framer-motion'
import { Shield, AlertTriangle, ArrowRight, Globe, Eye } from 'lucide-react'
import 'swiper/css'

const getRiskTheme = (percentage) => {
  return {
    card: 'from-slate-50 to-gray-50/50 dark:from-gray-800 dark:to-gray-900/50',
    border: 'border-slate-200/60 dark:border-gray-700',
    badge: 'bg-slate-100 dark:bg-gray-700 text-slate-600 dark:text-gray-300 border-slate-200 dark:border-gray-600',
    bar: 'from-slate-400 to-slate-500 dark:from-gray-400 dark:to-gray-500',
    score: 'text-slate-700 dark:text-gray-200',
    icon: 'text-slate-500 dark:text-gray-400',
    accent: 'bg-slate-50 dark:bg-gray-800',
    label: 'Risky'
  }
}

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
}

export default function LowestTrustSlider() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('/api/lowest-trust-websites')
      .then((r) => r.json())
      .then((d) => { if (d?.success) setData(d.lowest_trust_websites || []) })
      .catch(() => {})
  }, [])

  if (!data.length) return null

  return (
    <motion.section
      className="w-full py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4 sm:px-6 no-print overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <div className="max-w-7xl mx-auto">
        {/* Clean Professional Header */}
        <motion.div
          className="mb-10"
          variants={item}
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="p-2.5 rounded-xl bg-red-500/10 dark:bg-red-900/30 border border-red-200 dark:border-red-800">
              <Eye className="w-5 h-5 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Reported Websites
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-0.5">
                Community flagged domains with low trust scores
              </p>
            </div>
          </div>
        </motion.div>

        {/* Clean Card Slider */}
        <motion.div variants={item}>
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            spaceBetween={20}
            slidesPerView={1.1}
            breakpoints={{
              640: { slidesPerView: 2.1 },
              1024: { slidesPerView: 3.2 }
            }}
            className="!pb-6"
          >
            {data.map((item, index) => {
              const theme = getRiskTheme(item.overall_trust_percentage)

              return (
                <SwiperSlide key={index}>
                  <motion.div
                    className={`
                      group h-full rounded-2xl p-5 
                      bg-gradient-to-br ${theme.card}
                      border ${theme.border}
                      shadow-sm
                      transition-all duration-300
                      hover:shadow-md
                      hover:-translate-y-1
                      backdrop-blur-sm
                    `}
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-5">
                      <div className="flex items-center gap-3 min-w-0 flex-1">
                        <div className="p-2 rounded-lg bg-white dark:bg-gray-700 border border-slate-200 dark:border-gray-600">
                          <Globe className={`w-4 h-4 ${theme.icon}`} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                            {item.domain}
                          </p>
                          <span className="text-xs text-slate-500 dark:text-gray-400">Website</span>
                        </div>
                      </div>

                      <span
                        className={`
                          text-xs px-2.5 py-1 rounded-lg border 
                          ${theme.badge} font-medium
                        `}
                      >
                        {theme.label}
                      </span>
                    </div>

                    {/* Trust Score Display */}
                    <div className="mb-5">
                      <div className="flex items-end gap-2 mb-3">
                        <span className={`text-3xl font-bold ${theme.score}`}>
                          {Math.floor(item.overall_trust_percentage / 10)}
                        </span>
                        <span className="text-sm font-medium text-slate-400 dark:text-gray-500 mb-1">
                          /10
                        </span>
                      </div>

                      <div className="flex items-center gap-2 mb-4">
                        <Shield className={`w-4 h-4 ${theme.icon}`} />
                        <span className="text-sm font-medium text-slate-600 dark:text-gray-300">
                          Trust Score
                        </span>
                      </div>

                      {/* Simple Progress Bar */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-slate-600 dark:text-gray-400">
                          <span>Trust Level</span>
                          <span className="font-medium">{item.overall_trust_percentage}%</span>
                        </div>

                        <div className="h-2.5 w-full rounded-full bg-slate-200 dark:bg-gray-700 overflow-hidden">
                          <motion.div
                            className={`h-full rounded-full bg-gradient-to-r ${theme.bar}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${item.overall_trust_percentage}%` }}
                            transition={{ duration: 1.2, delay: index * 0.1 }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Simple Action Button */}
                    <motion.a
                      href={`/check/${item.domain}`}
                      className="
                        w-full inline-flex items-center justify-center
                        px-4 py-2.5 rounded-xl
                        text-sm font-medium
                        bg-slate-700 dark:bg-gray-600 text-white
                        hover:bg-slate-800 dark:hover:bg-gray-700
                        transition-all duration-300
                      "
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="flex items-center gap-2">
                        View Report
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </motion.a>
                  </motion.div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </motion.div>
      </div>
    </motion.section>
  )
}
