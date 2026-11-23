import {
  Shield,
  CheckCircle2,
  AlertTriangle,
  CreditCard,
  UserPlus,
  MousePointer,
  DollarSign,
  XCircle,
  Info,
  BadgeCheck,
  Building2,
  FileText,
  ShieldCheck,
} from "lucide-react";

interface ActionItemsProps {
  action_items?: {
    risk_level?: string;
    can_do?: string[];
    should_avoid?: string[];
    payment_advice?: string;
    reasons?: string[];
    trust_badges?: string[];
    registered_business?: {
      business_name?: string;
      verified_since?: string;
      documents_uploaded?: string[];
      kyc_verified_count?: string;
      verification_details?: string[];
    };
  } | null;
}

const ActionItemsServer = ({ action_items }: ActionItemsProps) => {
  if (!action_items) return null;

  const convertToTitle = (str: string) => {
    return str
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  const getRiskColor = (riskLevel = "") => {
    switch (riskLevel.toLowerCase()) {
      case "low":
        return {
          bg: "from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10",
          border: "border-green-200 dark:border-green-800/30",
          icon: "text-green-600 dark:text-green-400",
          badge: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400",
        };
      case "medium":
        return {
          bg: "from-yellow-50 to-orange-50 dark:from-yellow-900/10 dark:to-orange-900/10",
          border: "border-yellow-200 dark:border-yellow-800/30",
          icon: "text-yellow-600 dark:text-yellow-400",
          badge: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400",
        };
      case "high":
        return {
          bg: "from-red-50 to-rose-50 dark:from-red-900/10 dark:to-rose-900/10",
          border: "border-red-200 dark:border-red-800/30",
          icon: "text-red-600 dark:text-red-400",
          badge: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400",
        };
      default:
        return {
          bg: "from-gray-50 to-slate-50 dark:from-gray-900/10 dark:to-slate-900/10",
          border: "border-gray-200 dark:border-gray-800/30",
          icon: "text-gray-600 dark:text-gray-400",
          badge: "bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-400",
        };
    }
  };

  const getActionIcon = (action: string) => {
    const lowerAction = action.toLowerCase();
    if (lowerAction.includes("payment")) return CreditCard;
    if (lowerAction.includes("account")) return UserPlus;
    if (lowerAction.includes("usage") || lowerAction.includes("proceed")) return MousePointer;
    return CheckCircle2;
  };

  const getAvoidIcon = (action: string) => {
    const lowerAction = action.toLowerCase();
    if (lowerAction.includes("payment") || lowerAction.includes("value")) return DollarSign;
    return XCircle;
  };

  const colors = getRiskColor(action_items.risk_level || "");

  return (
    <div>
      <div className={`bg-gradient-to-br ${colors.bg} rounded-xl p-4 sm:p-6`}>
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-3">
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg flex-shrink-0`}>
              <Shield className="h-5 w-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">Safety Recommendations</h2>
            </div>
          </div>
          <div className={`px-3 py-1.5 rounded-lg ${colors.badge} font-semibold text-xs uppercase tracking-wide self-end sm:self-auto`}>
            {action_items.risk_level} Risk
          </div>
        </div>

        {/* Safe Actions */}
        <div className="mb-6">
          <div className="flex items-center space-x-2 mb-3">
            <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
            <h3 className="text-base font-semibold text-gray-900 dark:text-white">{convertToTitle('can_do')}</h3>
          </div>
          <div className="space-y-2">
            {action_items.can_do?.map((action, index) => {
              const Icon = getActionIcon(action);
              return (
                <div key={index} className="flex items-start space-x-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg border border-green-100 dark:border-green-800/20 w-full">
                  <Icon className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-sm text-gray-700 dark:text-gray-300 break-words min-w-0">{action}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Actions to Avoid */}
        {action_items.should_avoid && action_items.should_avoid.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-3">
              <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">{convertToTitle('should_avoid')}</h3>
            </div>
            <div className="space-y-2">
              {action_items.should_avoid?.map((action, index) => {
                const Icon = getAvoidIcon(action);
                return (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg border border-yellow-100 dark:border-yellow-800/20 w-full">
                    <Icon className="h-5 w-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" />
                    <span className="text-sm text-gray-700 dark:text-gray-300 break-words min-w-0">{action}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Payment Advice */}
        {action_items.payment_advice && (
          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-3">
              <CreditCard className={`h-5 w-5 ${colors.icon}`} />
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">{convertToTitle('payment_advice')}</h3>
            </div>
            <div className="p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg border border-indigo-100 dark:border-indigo-800/20">
              <span className="text-sm text-gray-700 dark:text-gray-300 break-words">{action_items.payment_advice}</span>
            </div>
          </div>
        )}

        {/* Reasons */}
        {action_items.reasons && action_items.reasons.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-3">
              <Info className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">{convertToTitle('reasons')}</h3>
            </div>
            <div className="space-y-2">
              {action_items.reasons?.map((reason, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg border border-indigo-100 dark:border-indigo-800/20 w-full">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700 dark:text-gray-300 break-words min-w-0">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Trust Badges */}
        {action_items.trust_badges && action_items.trust_badges.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-3">
              <BadgeCheck className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">Trust Badges</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {action_items.trust_badges.map((badge, index) => (
                <span key={index} className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800/30 text-indigo-700 dark:text-indigo-300">
                  <BadgeCheck className="w-3.5 h-3.5" />
                  {badge}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Registered Business */}
        {action_items.registered_business && (
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <Building2 className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">Registered Business</h3>
            </div>
            <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl border border-indigo-100 dark:border-indigo-800/20 overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-indigo-100 dark:border-indigo-800/20">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  <span className="text-sm font-bold text-gray-800 dark:text-white">
                    {action_items.registered_business.business_name}
                  </span>
                </div>
                {action_items.registered_business.verified_since && (
                  <span className="text-[11px] text-gray-400 dark:text-gray-500">
                    Since {new Date(action_items.registered_business.verified_since).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </span>
                )}
              </div>
              <div className="p-4 space-y-3">
                {/* KYC Count */}
                {action_items.registered_business.kyc_verified_count && (
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      {action_items.registered_business.kyc_verified_count}
                    </span>
                  </div>
                )}
                {/* Verification Details */}
                {action_items.registered_business.verification_details && action_items.registered_business.verification_details.length > 0 && (
                  <div>
                    <p className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide mb-2">Verification Details</p>
                    <div className="space-y-1.5">
                      {action_items.registered_business.verification_details.map((detail, index) => {
                        const isVerified = detail.includes('✔');
                        return (
                          <div key={index} className={`flex items-center gap-2 text-xs px-3 py-1.5 rounded-lg ${
                            isVerified
                              ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-800/20'
                              : 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border border-red-100 dark:border-red-800/20'
                          }`}>
                            {isVerified
                              ? <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                              : <XCircle className="w-3.5 h-3.5 flex-shrink-0" />}
                            {detail}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
                {/* Documents Uploaded */}
                {action_items.registered_business.documents_uploaded && action_items.registered_business.documents_uploaded.length > 0 && (
                  <div>
                    <p className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide mb-2">Documents Uploaded</p>
                    <div className="space-y-1.5">
                      {action_items.registered_business.documents_uploaded.map((doc, index) => (
                        <div key={index} className="flex items-center gap-2 text-xs px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border border-blue-100 dark:border-blue-800/20">
                          <FileText className="w-3.5 h-3.5 flex-shrink-0" />
                          {doc}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActionItemsServer;
