export default function PhoneReportLoading() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-4 py-8">
            <div className="max-w-3xl mx-auto space-y-5">
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Checking available risk signals...</p>

                {/* Title skeleton */}
                <div className="h-7 bg-gray-200 dark:bg-gray-800 rounded-lg w-2/3 animate-pulse" />

                {/* Score summary skeleton */}
                <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 space-y-4 animate-pulse">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-800" />
                        <div className="space-y-2 flex-1">
                            <div className="h-5 bg-gray-200 dark:bg-gray-800 rounded w-1/3" />
                            <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/2" />
                        </div>
                    </div>
                </div>

                {/* Safety signals skeleton */}
                <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 space-y-3 animate-pulse">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full bg-gray-200 dark:bg-gray-800 flex-shrink-0" />
                            <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded flex-1" />
                        </div>
                    ))}
                </div>

                {/* Action guidance skeleton */}
                <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 space-y-3 animate-pulse">
                    <div className="h-5 bg-gray-200 dark:bg-gray-800 rounded w-1/4" />
                    <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-full" />
                    <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-3/4" />
                </div>
            </div>
        </div>
    )
}
