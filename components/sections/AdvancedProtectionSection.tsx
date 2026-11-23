import SectionContainerServer from "@/components/ui/SectionContainerServer";
import FeatureCardServer from "@/components/ui/FeatureCardServer";
import { SITE_STATS } from "@/lib/config/siteStats";
import {
  Brain,
  Eye,
  Globe,
  Lock,
  TrendingUp,
  Users
} from "lucide-react";

export default function AdvancedProtectionSection() {
  return (
    <SectionContainerServer id="advanced-protection" className="py-24">
      <div className="text-center space-y-16">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 mb-4">
            <Lock className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">
              Enterprise Security
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent">
            Advanced Protection
           
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Multi-layered security analysis powered by AI and real-time threat intelligence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "AI-Powered Analysis",
              description: "Advanced machine learning algorithms detect sophisticated phishing patterns and suspicious behaviors in real-time.",
              icon: Brain
            },
            {
              title: "Real-Time Monitoring",
              description: `${SITE_STATS.supportAvailability} continuous monitoring of emerging threats with instant updates to our security database.`,
              icon: Eye
            },
            {
              title: "Global Threat Intelligence",
              description: "Connected to international cybersecurity networks for comprehensive threat coverage.",
              icon: Globe
            },
            {
              title: "SSL & Certificate Verification",
              description: "Deep analysis of security certificates and encryption protocols to ensure website authenticity.",
              icon: Lock
            },
            {
              title: "Behavioral Pattern Detection",
              description: "Identifies suspicious website behaviors and redirects that indicate potential scam operations.",
              icon: TrendingUp
            },
            {
              title: "Community-Driven Reports",
              description: "Crowd-sourced threat reporting from our active user community across India.",
              icon: Users
            }
          ].map((feature, index) => (
            <FeatureCardServer
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </SectionContainerServer>
  );
}
