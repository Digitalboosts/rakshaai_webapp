import SectionContainerServer from "@/components/ui/SectionContainerServer";
import ScamTypeCardServer from "@/components/ui/ScamTypeCardServer";
import {
  Phone,
  ShoppingCart,
  TrendingUp,
  MessageSquare,
  Mail,
  Headphones,
  Shield,
  Briefcase,
  Link,
  Heart,
  Coins
} from "lucide-react";

export default function ScamAwarenessSection() {
  return (
    <SectionContainerServer background="gradient" id="scam-awareness" className="py-12">
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            Common Scam Types in India
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Stay informed about online scams targeting Indian users
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: "UPI Scams",
              description: "Fake QR codes and payment requests.",
              warning: "UPI PIN requests or unknown QR codes.",
              tips: ["Never share UPI PIN"],
              icon: Phone,
              riskLevel: "high" as const,
              href: "/scams/upi-fraud"
            },
            {
              title: "Fake Shopping",
              description: "Counterfeit stores with fake discounts.",
              warning: "Extremely low prices or poor design.",
              tips: ["Research website reputation"],
              icon: ShoppingCart,
              riskLevel: "high" as const,
              href: "/scams/e-commerce-fraud"
            },
            {
              title: "Investment Fraud",
              description: "Fake platforms promising high returns.",
              warning: "Unrealistic profit promises.",
              tips: ["Verify regulatory compliance"],
              icon: TrendingUp,
              riskLevel: "high" as const,
              href: "/scams/investment-scams"
            },
            {
              title: "Social Phishing",
              description: "Fake profiles stealing information.",
              warning: "Unknown requests or suspicious links.",
              tips: ["Verify friend requests"],
              icon: MessageSquare,
              riskLevel: "medium" as const,
              href: "/scams/phishing"
            },
            {
              title: "Phone/SMS Fraud",
              description: "Fake messages from banks/agencies.",
              warning: "Urgent requests for action.",
              tips: ["Verify sender directly"],
              icon: Mail,
              riskLevel: "medium" as const,
              href: "/scams/phone-scams"
            },
            {
              title: "Tech Support",
              description: "Fake support requesting access.",
              warning: "Unsolicited support calls.",
              tips: ["Never allow remote access"],
              icon: Headphones,
              riskLevel: "medium" as const,
              href: "/scams/phone-scams"
            },
            {
              title: "Job Scams",
              description: "Fake job offers requiring upfront fees.",
              warning: "Payment requests for job placement.",
              tips: ["Legitimate jobs don't require fees"],
              icon: MessageSquare,
              riskLevel: "high" as const,
              href: "/scams/job-scams"
            },
            {
              title: "Loan Fraud",
              description: "Fake loan approvals asking for advance.",
              warning: "Processing fees before loan approval.",
              tips: ["Banks don't ask advance fees"],
              icon: TrendingUp,
              riskLevel: "high" as const,
              href: "/scams/loan-fraud"
            },
            {
              title: "Digital Arrest",
              description: "Fake police/officials threatening arrest.",
              warning: "Video calls demanding immediate payment.",
              tips: ["Police don't demand payment via calls"],
              icon: Shield,
              riskLevel: "high" as const,
              href: "/scams/digital-arrest"
            },
            {
              title: "Task-Based Jobs",
              description: "Fake work-from-home job schemes.",
              warning: "Easy money for simple tasks online.",
              tips: ["Verify company legitimacy first"],
              icon: Briefcase,
              riskLevel: "high" as const,
              href: "/scams/job-scams"
            },
            {
              title: "Romance Scams",
              description: "Fake dating profiles seeking money.",
              warning: "Quick emotional attachment requests.",
              tips: ["Never send money to online partners"],
              icon: Heart,
              riskLevel: "medium" as const,
              href: "/scams/romance-scams"
            },
            {
              title: "Crypto Fraud",
              description: "Fake cryptocurrency investment schemes.",
              warning: "Guaranteed crypto profits or airdrops.",
              tips: ["Research exchanges thoroughly"],
              icon: Coins,
              riskLevel: "high" as const,
              href: "/scams/crypto-scams"
            }
          ].map((scam, index) => (
            <ScamTypeCardServer
              key={index}
              {...scam}
              index={index}
            />
          ))}
        </div>
      </div>
    </SectionContainerServer>
  );
}