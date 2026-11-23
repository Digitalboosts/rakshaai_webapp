import SectionContainerServer from "@/components/ui/SectionContainerServer";

export default function ImpactProofSection() {
  return (
    <SectionContainerServer id="impact-proof" className="py-12 sm:py-16 md:py-24">
      <div className="space-y-12 md:space-y-16">
        <div className="text-center space-y-4 md:space-y-6 px-4 sm:px-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            How Indians Use RakshaAI
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Free fraud checks for websites, UPI IDs, and phone numbers with secure user login
          </p>
        </div>

        {/* Trust highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-0">
          {[
            { icon: "🛡️", title: "Free Consumer Checks", desc: "Individuals can run supported checks without a paid subscription. Secure login keeps checks tied to the correct user." },
            { icon: "🇮🇳", title: "Built for India", desc: "Designed specifically for Indian scam patterns  UPI fraud, digital arrest, fake government sites." },
            { icon: "🔎", title: "Multiple Data Sources", desc: "Checks public threat databases, domain signals, and community-submitted fraud reports simultaneously." },
          ].map((item) => (
            <div key={item.title} className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">{item.icon}</div>
              <div className="font-semibold text-gray-900 dark:text-white mb-2">{item.title}</div>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Use case cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 sm:px-0">
          {[
            {
              icon: "🔗",
              title: "Before clicking a link",
              desc: "Paste any suspicious URL to check if it is a known phishing or fake site before you open it.",
              cta: "Check a website",
              href: "/website-safety-checker",
            },
            {
              icon: "📲",
              title: "Before sending money via UPI",
              desc: "Verify a UPI ID against community fraud reports before making a payment to an unknown person.",
              cta: "Check a UPI ID",
              href: "/upi-id-checker",
            },
            {
              icon: "📞",
              title: "Before calling back an unknown number",
              desc: "Look up a phone number to see if others have flagged it as a scam or fraudulent call.",
              cta: "Check a phone number",
              href: "/phone-number-checker",
            },
          ].map((item) => (
            <div key={item.title} className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-6">
              <div className="text-3xl mb-3">{item.icon}</div>
              <div className="font-semibold text-gray-900 dark:text-white mb-2">{item.title}</div>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">{item.desc}</p>
              <a
                href={item.href}
                className="inline-text text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
              >
                {item.cta} &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </SectionContainerServer>
  );
}
