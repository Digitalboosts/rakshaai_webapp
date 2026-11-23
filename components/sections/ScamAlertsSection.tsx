"use client";

import SectionContainerServer from "@/components/ui/SectionContainerServer";
import { AlertTriangle, Bell, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

interface ScamAlertsSectionProps {
  scamAlerts: any;
}

const getAlertIcon = (type: string) => {
  switch (type) {
    case "critical":
      return "🚨";
    case "urgent":
      return "⚠️";
    case "warning":
      return "⚡";
    default:
      return "📢";
  }
};

const getAlertColor = (type: string) => {
  switch (type) {
    case "critical":
      return "from-red-500 to-orange-500";
    case "urgent":
      return "from-orange-500 to-yellow-500";
    case "warning":
      return "from-yellow-500 to-amber-500";
    default:
      return "from-blue-500 to-purple-500";
  }
};

export default function ScamAlertsSection({ scamAlerts }: ScamAlertsSectionProps) {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800">
              <Bell className="h-4 w-4 text-red-600 dark:text-red-400 animate-pulse" />
              <span className="text-sm font-semibold text-red-700 dark:text-red-300">
                Live Alerts
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white">
              {scamAlerts.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {scamAlerts.subtitle}
            </p>
          </div>

          {/* Alerts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(scamAlerts.alerts as any[]).map((alert: any, index: number) => (
              <motion.div
                key={alert.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-red-500 group hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${getAlertColor(alert.type)} flex items-center justify-center text-2xl flex-shrink-0`}>
                    {getAlertIcon(alert.type)}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                        Alert {alert.id}
                      </h3>
                      <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0" />
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">
                      {alert.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Subscribe Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 border border-green-200 dark:border-green-800">
                <TrendingUp className="h-4 w-4 text-green-600 dark:text-green-400" />
                <span className="text-sm font-semibold text-green-700 dark:text-green-300">
                  Stay Protected
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Get Instant Scam Alerts
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Be the first to know about new scam patterns in your area
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                  <span>📱</span>
                  {scamAlerts.subscribeWhatsApp}
                </button>
                <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                  <span>📧</span>
                  {scamAlerts.subscribeEmail}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
