import { InfoRow } from "@/components/InfoCard";
import InfoTooltip from "@/components/report/InfoTooltip";
import { Calendar } from "lucide-react";
import { memo } from "react";

interface WebsiteAgeProps {
  data: any;
}


const motion = {
  div: memo(({ children, className, initial, animate, transition }: any) => (
    <div className={className}>{children}</div>
  ))
};



export default function WebsiteAge({ data }: WebsiteAgeProps) {
  if (!data?.website_publishing_date) return null;
  if (data?.detected_type === 'upi' || data?.detected_type === 'phone') return null;

  const pd = data.website_publishing_date?.publish_date ?? null;
  const py = data.website_publishing_date?.publish_year ?? null;

  const formatDate = (d: string) => {
    try {
      return new Date(d).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
    } catch {
      return String(d);
    }
  };

  const definitions = {
    publishingDate: 'The detected publish date for the website, when available.',
    publishingYear: 'The detected publish year for the website.',
  };

  // Only render when a publish date is available (matches client behaviour)
  if (pd == null) return null;

  return (
    <section>
      {data.website_publishing_date && data.detected_type !== 'upi' && data.detected_type !== 'phone' && (
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.25 }}
          className=""
        >
          {data.website_publishing_date.publish_date != null && (
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/10 dark:to-teal-900/10 rounded-xl p-4 sm:p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg">
                    <Calendar className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white">Website Age</h2>
                    <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">Publishing Information</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <InfoRow
                  label="Publish Date"
                  value={formatDate(data.website_publishing_date.publish_date)}
                  tooltip={<InfoTooltip text={definitions.publishingDate} />}
                />
                <InfoRow
                  label="Publish Year"
                  value={data.website_publishing_date.publish_year}
                  tooltip={<InfoTooltip text={definitions.publishingYear} />}
                />
                <InfoRow
                  label="Website Age"
                  // {new Date().getFullYear() - data.website_publishing_date.publish_year} years
                  value={`${new Date().getFullYear() - data.website_publishing_date.publish_year} years`}
                />
              </div>
            </div>
          )}
        </motion.div>
      )}
    </section>
  );
}
