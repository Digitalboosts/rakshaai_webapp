import { InfoRow } from "@/components/InfoCard";
import InfoTooltip from "@/components/report/InfoTooltip";
import { Globe } from "lucide-react";
import { memo } from "react";

interface URLStructureProps {
  data: any;
}

const motion = {
  div: memo(({ children, className, initial, animate, transition }: any) => (
    <div className={className}>{children}</div>
  ))
};



export default function URLStructure({ data }: URLStructureProps) {
  if (!data?.url_details) return null;
  if (data?.detected_type === 'upi' || data?.detected_type === 'phone') return null;

  const ud = data.url_details || {};

  const definitions = {
    businessName: 'The business or site name detected from the site metadata.',
    completeDomain: 'The canonical domain (host) for this website.',
    scheme: 'URL scheme (http or https).',
    subdomain: 'Subdomain portion, if any (e.g., www).',
    domain: 'Second-level domain (without TLD).',
    tld: 'Top-level domain (e.g., com, org).',
    port: 'Port used by the site, when non-standard.',
  };

  return (
    <section>
      {data.url_details && data.detected_type !== 'upi' && data.detected_type !== 'phone' && (
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className=""
        >
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/10 dark:to-indigo-900/10 rounded-xl p-4 sm:p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg">
                  <Globe className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white">URL Structure</h2>
                  <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">Address Components</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <InfoRow label="Business Name" value={data.url_details.business_name || "N/A"} tooltip={<InfoTooltip text={definitions.businessName} />} />
              <InfoRow label="Complete Domain" value={data.url_details.complete_domain || "N/A"} highlight tooltip={<InfoTooltip text={definitions.completeDomain} />} />
              <InfoRow label="Scheme" value={data.url_details.scheme || "N/A"} tooltip={<InfoTooltip text={definitions.scheme} />} />
              <InfoRow label="Subdomain" value={data.url_details.subdomain || "None"} tooltip={<InfoTooltip text={definitions.subdomain} />} />
              <InfoRow label="Domain" value={data.url_details.domain || "N/A"} tooltip={<InfoTooltip text={definitions.domain} />} />
              <InfoRow label="TLD" value={data.url_details.tld || "N/A"} tooltip={<InfoTooltip text={definitions.tld} />} />
              <InfoRow label="Port" value={data.url_details.port || "Default"} tooltip={<InfoTooltip text={definitions.port} />} />
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}
