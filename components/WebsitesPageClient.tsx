'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import {
    Globe,
    TrendingUp,
    BarChart2,
    AlertTriangle,
    Loader2,
    ShieldAlert,
    Clock,
} from 'lucide-react'

type TabKey = 'all' | 'daily-searches' | 'weekly-searches' | 'daily-scammers' | 'weekly-scammers'

interface TabDef {
    key: TabKey
    label: string
    icon: React.ElementType
    available: boolean
    apiType?: string
    emptyLabel: string
}

const TABS: TabDef[] = [
    {
        key: 'all',
        label: 'All Websites',
        icon: Globe,
        available: true,
        apiType: '',
        emptyLabel: 'No websites in the database yet.',
    },
    {
        key: 'daily-searches',
        label: 'Daily Top Searches',
        icon: TrendingUp,
        available: true,
        apiType: 'daily-searches',
        emptyLabel: 'No search data available for today.',
    },
    {
        key: 'weekly-searches',
        label: 'Weekly Top Searches',
        icon: BarChart2,
        available: true,
        apiType: 'weekly-searches',
        emptyLabel: 'No search data available for this week.',
    },
    {
        key: 'daily-scammers',
        label: 'Daily Top Scammers',
        icon: AlertTriangle,
        available: true,
        apiType: 'daily-scammers',
        emptyLabel: 'No scammer data available for today.',
    },
    {
        key: 'weekly-scammers',
        label: 'Weekly Top Scammers',
        icon: ShieldAlert,
        available: true,
        apiType: 'weekly-scammers',
        emptyLabel: 'No scammer data available for this week.',
    },
]

interface Props {
    initialSlugs: string[]
    initialCount: number
}

export default function WebsitesPageClient({ initialSlugs, initialCount }: Props) {
    const [activeTab, setActiveTab] = useState<TabKey>('all')
    const [slugs, setSlugs] = useState<string[]>(initialSlugs)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [liveCount, setLiveCount] = useState<number>(initialCount)

    const handleTabChange = useCallback(async (tab: TabDef) => {
        if (!tab.available || tab.key === activeTab) return

        setActiveTab(tab.key)
        setError(null)
        setLoading(true)
        setSlugs([])

        try {
            const url = tab.apiType
                ? `/api/sitemap-slugs?type=${tab.apiType}`
                : '/api/sitemap-slugs'
            const res = await fetch(url)
            if (!res.ok) throw new Error('Request failed')
            const data = await res.json()
            if (data.error) throw new Error(data.error)
            setSlugs(data.slugs ?? [])
            setLiveCount(data.count ?? data.slugs?.length ?? 0)
        } catch {
            setError('Could not load data. Please try again.')
            setSlugs([])
            setLiveCount(0)
        } finally {
            setLoading(false)
        }
    }, [activeTab])

    const activeTabDef = TABS.find((t) => t.key === activeTab)!

    return (
        <div>
            {/* Tab bar */}
            <div className="flex flex-wrap gap-2 mb-8">
                {TABS.map((tab) => {
                    const Icon = tab.icon
                    const isActive = tab.key === activeTab
                    const isDisabled = !tab.available

                    return (
                        <button
                            key={tab.key}
                            onClick={() => handleTabChange(tab)}
                            disabled={isDisabled}
                            className={`
                                relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border transition-all
                                ${isActive
                                    ? 'bg-indigo-600 border-indigo-600 text-white shadow-sm'
                                    : isDisabled
                                        ? 'bg-gray-50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 text-gray-300 dark:text-gray-600 cursor-not-allowed'
                                        : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-indigo-300 dark:hover:border-indigo-600 hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer'
                                }
                            `}
                        >
                            <Icon className="h-3.5 w-3.5 flex-shrink-0" />
                            {tab.label}
                            {isDisabled && (
                                <span className="ml-1 inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 text-[10px] font-bold">
                                    <Clock className="h-2.5 w-2.5" />
                                    Soon
                                </span>
                            )}
                        </button>
                    )
                })}
            </div>

            {/* Count bar */}
            <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                        {activeTabDef.label}
                    </p>
                    {!loading && slugs.length > 0 && (
                        <>
                            <div className="h-px bg-gray-200 dark:bg-gray-700 w-8" />
                            <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                                {liveCount.toLocaleString('en-IN')} results
                            </span>
                        </>
                    )}
                </div>
                {(activeTab === 'daily-searches' || activeTab === 'weekly-searches') && !loading && (
                    <span className="text-[11px] text-gray-400 dark:text-gray-500">
                        Updated every 5 minutes
                    </span>
                )}
            </div>

            {/* Coming soon state */}
            {!activeTabDef.available && (
                <div className="flex flex-col items-center justify-center py-20 gap-4 text-center bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/40 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-amber-500" />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-gray-900 dark:text-white mb-1">
                            {activeTabDef.label}
                        </p>
                        <p className="text-xs text-gray-400 dark:text-gray-500">
                            This data feed is coming soon. Check back later.
                        </p>
                    </div>
                </div>
            )}

            {/* Loading state */}
            {activeTabDef.available && loading && (
                <div className="flex flex-col items-center justify-center py-20 gap-3 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
                    <Loader2 className="h-6 w-6 text-indigo-500 animate-spin" />
                    <p className="text-xs text-gray-400 dark:text-gray-500">Loading {activeTabDef.label.toLowerCase()}...</p>
                </div>
            )}

            {/* Error state */}
            {activeTabDef.available && !loading && error && (
                <div className="flex flex-col items-center justify-center py-16 gap-3 text-center bg-white dark:bg-gray-800 rounded-2xl border border-red-200 dark:border-red-800">
                    <AlertTriangle className="h-5 w-5 text-red-400" />
                    <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
                    <button
                        onClick={() => {
                            const tab = TABS.find((t) => t.key === activeTab)
                            if (tab) handleTabChange(tab)
                        }}
                        className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                    >
                        Try again
                    </button>
                </div>
            )}

            {/* Empty state */}
            {activeTabDef.available && !loading && !error && slugs.length === 0 && (
                <div className="flex flex-col items-center justify-center py-20 gap-3 text-center bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
                    <p className="text-sm text-gray-400 dark:text-gray-500">{activeTabDef.emptyLabel}</p>
                    <Link href="/website-safety-checker" className="text-xs font-semibold text-indigo-500 hover:underline">
                        Be the first to check a website
                    </Link>
                </div>
            )}

            {/* Slug list */}
            {activeTabDef.available && !loading && !error && slugs.length > 0 && (
                <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 sm:p-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-0">
                        {slugs.map((slug, i) => (
                            <div
                                key={`${slug}-${i}`}
                                className="flex items-center gap-2.5 py-2 border-b border-gray-100 dark:border-gray-700/50 min-w-0"
                            >
                                <span className="flex-shrink-0 w-6 text-right text-[11px] font-semibold text-gray-300 dark:text-gray-600 tabular-nums leading-none">
                                    {i + 1}.
                                </span>
                                <Link
                                    href={`/check/${encodeURIComponent(slug)}`}
                                    className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors font-medium truncate min-w-0"
                                    title={slug}
                                >
                                    {slug}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
