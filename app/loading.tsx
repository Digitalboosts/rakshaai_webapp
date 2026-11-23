export default function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
            <div className="text-center space-y-4">
                <div className="inline-block w-10 h-10 border-4 border-indigo-200 dark:border-indigo-800 border-t-indigo-600 dark:border-t-indigo-400 rounded-full animate-spin" />
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Loading RakshaAI...</p>
            </div>
        </div>
    )
}
