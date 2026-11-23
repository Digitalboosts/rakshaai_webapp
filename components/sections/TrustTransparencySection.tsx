import SectionContainerServer from "@/components/ui/SectionContainerServer";
import TrustItemServer from "@/components/ui/TrustItemServer";
import {
  FileText,
  Eye,
  Lock,
  Clock,
  Verified,
  Users
} from "lucide-react";

export default function TrustTransparencySection() {
  return (
    <SectionContainerServer background="subtle" id="trust-transparency" className="py-24">
      <div className="space-y-16">
        <div className="text-center space-y-6">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white">
            Why Trust RakshaAI?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Built on transparency, security, and user privacy with complete commitment to your digital safety
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Published Methodology",
              description: "Read how trust scores are produced, which signals may be considered, and where detection has limits",
              icon: FileText
            },
            {
              title: "Privacy-First Design",
              description: "We minimize required personal information and explain how submitted data is processed",
              icon: Eye
            },
            {
              title: "Encrypted Connections",
              description: "RakshaAI uses HTTPS to protect data while it travels between your browser and the service",
              icon: Lock
            },
            {
              title: "Report Corrections",
              description: "Businesses and individuals can request review when a report or result may be inaccurate",
              icon: Verified
            },
            {
              title: "Regular Updates",
              description: "Continuous updates to stay ahead of emerging threats",
              icon: Clock
            },
            {
              title: "Detection Limitations",
              description: "No automated system detects every scam, so results are presented as decision support rather than guarantees",
              icon: FileText
            },
            {
              title: "Explainable Results",
              description: "Available risk signals and recommended actions accompany the score wherever the analysis supports them",
              icon: Verified
            },
            {
              title: "Community Driven",
              description: "Powered by contributions from security researchers worldwide",
              icon: Users
            }
          ].map((item, index) => (
            <TrustItemServer
              key={index}
              {...item}
              index={index}
            />
          ))}
        </div>
      </div>
    </SectionContainerServer>
  );
}
