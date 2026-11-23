interface TrustLevelBadgeProps {
  level: string;
  percentage: number;
  score: number;
  total: number;
}

export default function TrustLevelBadge({ level, percentage, score, total }: TrustLevelBadgeProps) {
  const getBadgeColor = (level: string) => {
    switch (level) {
      case 'HIGHLY_TRUSTED':
        return 'bg-green-100 text-green-800 border-green-300 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800';
      case 'TRUSTED':
        return 'bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800';
      case 'MODERATE_RISK':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300 dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-800';
      case 'HIGH_RISK':
        return 'bg-orange-100 text-orange-800 border-orange-300 dark:bg-orange-900/30 dark:text-orange-400 dark:border-orange-800';
      case 'DANGEROUS':
        return 'bg-red-100 text-red-800 border-red-300 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300 dark:bg-gray-900/30 dark:text-gray-400 dark:border-gray-800';
    }
  };

  return (
    <div className="flex items-center justify-between mb-4 p-3 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-700">
      <div className="flex items-center space-x-3">
        <span className={`px-3 py-1.5 rounded-lg border-2 font-bold text-xs uppercase tracking-wide ${getBadgeColor(level)}`}>
          {level.replace(/_/g, ' ')}
        </span>
        <div className="text-sm">
          <span className="font-semibold text-gray-900 dark:text-white">{percentage.toFixed(1)}%</span>
          <span className="text-gray-500 dark:text-gray-400 ml-1">Trust</span>
        </div>
      </div>
    </div>
  );
}