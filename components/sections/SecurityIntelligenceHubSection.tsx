import SectionContainerServer from "@/components/ui/SectionContainerServer";
import {
  Brain,
  Shield,
  Zap,
  AlertCircle,
  Award,
  Lock,
  Eye,
  CheckCircle,
  Phone,
  Mail,
  CreditCard
} from "lucide-react";

export default function SecurityIntelligenceHubSection() {
  return (
    <SectionContainerServer background="gradient" id="security-hub" className="py-20 relative overflow-hidden">
      {/* Dynamic Background Grid */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20" />
        <div className="absolute inset-0 opacity-10 dark:opacity-5 bg-grid-pattern bg-[length:50px_50px] animate-pulse" />
      </div>

      <div className="relative z-10 space-y-16">
        {/* Main Heading */}
        <div className="text-center space-y-6">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.1]">
            <span className="block text-gray-900 dark:text-white mb-3">Smart Security</span>
            <span className="block bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              At Your Fingertips
            </span>
          </h2>

          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Advanced threat intelligence, instant security analysis, and
            <span className="font-bold text-violet-600 dark:text-violet-400 mx-2">real-time protection</span>
            for the modern digital world
          </p>
        </div>

        {/* Intelligence Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Quick Security Scanner */}
          <div className="lg:col-span-2 xl:col-span-1 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl p-8 border border-white/60 dark:border-gray-700/60 shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-500">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Quick URL Scanner</h3>
                <div className="p-3 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500">
                  <Shield className="h-6 w-6 text-white" />
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Instant security analysis for any website or URL with comprehensive threat detection
              </p>
              <button className="w-full px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-center space-x-2">
                  <Zap className="h-5 w-5" />
                  <span>Scan Now</span>
                </div>
              </button>
            </div>
          </div>

          {/* Threat Intelligence Feed */}
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl p-8 border border-white/60 dark:border-gray-700/60 shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-500">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Live Threat Feed</h3>
                <div className="p-3 rounded-2xl bg-gradient-to-r from-red-500 to-pink-500">
                  <AlertCircle className="h-6 w-6 text-white animate-spin" />
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { type: "Phishing", count: "2.3K", time: "2m ago", severity: "high" },
                  { type: "Malware", count: "847", time: "5m ago", severity: "critical" },
                  { type: "Suspicious", count: "1.1K", time: "8m ago", severity: "medium" }
                ].map((threat, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-xl bg-white/60 dark:bg-gray-700/60 border border-white/40 dark:border-gray-600/40"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${threat.severity === 'critical' ? 'bg-red-500' :
                        threat.severity === 'high' ? 'bg-orange-500' : 'bg-yellow-500'
                        }`} />
                      <span className="font-semibold text-gray-800 dark:text-gray-200">{threat.type}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-gray-900 dark:text-white">{threat.count}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{threat.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Security Score Widget */}
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl p-8 border border-white/60 dark:border-gray-700/60 shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-500">
            <div className="space-y-6 text-center">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Security Score</h3>
                <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500">
                  <Award className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="relative">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-2xl">
                  <div className="text-center">
                    <div className="text-3xl font-black text-white">98</div>
                    <div className="text-xs text-blue-100 font-semibold">EXCELLENT</div>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Your digital security status based on latest threat analysis
              </p>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                View Details
              </button>
            </div>
          </div>

          {/* Security Tips */}
          <div className="lg:col-span-2 xl:col-span-2 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl p-8 border border-white/60 dark:border-gray-700/60 shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-500">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Daily Security Tips</h3>
                <div className="p-3 rounded-2xl bg-gradient-to-r from-purple-500 to-violet-500">
                  <Brain className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: Lock, tip: "Always verify HTTPS certificates before entering sensitive data", priority: "high" },
                  { icon: Eye, tip: "Be cautious of unexpected email attachments from unknown senders", priority: "medium" },
                  { icon: Shield, tip: "Use unique passwords for all your important online accounts", priority: "high" },
                  { icon: CheckCircle, tip: "Regularly update your browser and security software", priority: "low" }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-4 rounded-xl bg-white/60 dark:bg-gray-700/60 border border-white/40 dark:border-gray-600/40 hover:bg-white/80 dark:hover:bg-gray-700/80 transition-all duration-300"
                  >
                    <div className={`p-2 rounded-lg ${item.priority === 'high' ? 'bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400' :
                      item.priority === 'medium' ? 'bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400' :
                        'bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400'
                      }`}>
                      <item.icon className="h-4 w-4" />
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{item.tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-gradient-to-br from-violet-500 to-purple-600 dark:from-violet-600 dark:to-purple-700 rounded-3xl p-8 text-white shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-500">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">Quick Actions</h3>
                <Zap className="h-7 w-7 text-yellow-300" />
              </div>
              <div className="space-y-4">
                {[
                  { icon: Phone, text: "Check Phone Number", desc: "Verify caller identity" },
                  { icon: Mail, text: "Email Safety Check", desc: "Scan email security" },
                  { icon: CreditCard, text: "Payment Validator", desc: "Secure transaction check" }
                ].map((action, index) => (
                  <button
                    key={index}
                    className="w-full flex items-center space-x-4 p-4 rounded-xl bg-white/20 dark:bg-white/10 hover:bg-white/30 dark:hover:bg-white/20 hover:translate-x-1 transition-all duration-300 text-left"
                  >
                    <action.icon className="h-5 w-5 text-yellow-300" />
                    <div>
                      <div className="font-semibold">{action.text}</div>
                      <div className="text-sm text-violet-200 dark:text-violet-300">{action.desc}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

      
      </div>
    </SectionContainerServer>
  );
}