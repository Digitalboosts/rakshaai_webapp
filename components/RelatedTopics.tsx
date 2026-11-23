import Link from 'next/link';
import {
  TOPIC_CLUSTERS,
  getClusterByPath,
  getRelatedClusters,
  type TopicCluster,
  type TopicPage,
} from '@/lib/seo/topic-clusters';

interface RelatedTopicsProps {
  /** Current page path  used to derive the cluster and related pages */
  currentPath: string;
  /** Optionally override with a specific cluster ID */
  clusterId?: string;
  /** Show sibling pages within the same cluster */
  showSiblings?: boolean;
  /** Show related clusters for cross-linking */
  showRelatedClusters?: boolean;
  /** Show the cluster's checker tool CTA */
  showTool?: boolean;
  /** Max siblings to show */
  maxSiblings?: number;
  /** Max related clusters to show */
  maxRelated?: number;
  variant?: 'compact' | 'full';
}

const COLOR_MAP: Record<string, { bg: string; text: string; border: string; badge: string }> = {
  indigo: {
    bg: 'bg-indigo-50 dark:bg-indigo-950/30',
    text: 'text-indigo-700 dark:text-indigo-300',
    border: 'border-indigo-200 dark:border-indigo-800',
    badge: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300',
  },
  orange: {
    bg: 'bg-orange-50 dark:bg-orange-950/30',
    text: 'text-orange-700 dark:text-orange-300',
    border: 'border-orange-200 dark:border-orange-800',
    badge: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300',
  },
  green: {
    bg: 'bg-green-50 dark:bg-green-950/30',
    text: 'text-green-700 dark:text-green-300',
    border: 'border-green-200 dark:border-green-800',
    badge: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300',
  },
  red: {
    bg: 'bg-red-50 dark:bg-red-950/30',
    text: 'text-red-700 dark:text-red-300',
    border: 'border-red-200 dark:border-red-800',
    badge: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300',
  },
  emerald: {
    bg: 'bg-emerald-50 dark:bg-emerald-950/30',
    text: 'text-emerald-700 dark:text-emerald-300',
    border: 'border-emerald-200 dark:border-emerald-800',
    badge: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
  },
  purple: {
    bg: 'bg-purple-50 dark:bg-purple-950/30',
    text: 'text-purple-700 dark:text-purple-300',
    border: 'border-purple-200 dark:border-purple-800',
    badge: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
  },
  cyan: {
    bg: 'bg-cyan-50 dark:bg-cyan-950/30',
    text: 'text-cyan-700 dark:text-cyan-300',
    border: 'border-cyan-200 dark:border-cyan-800',
    badge: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300',
  },
  yellow: {
    bg: 'bg-yellow-50 dark:bg-yellow-950/30',
    text: 'text-yellow-700 dark:text-yellow-300',
    border: 'border-yellow-200 dark:border-yellow-800',
    badge: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300',
  },
  pink: {
    bg: 'bg-pink-50 dark:bg-pink-950/30',
    text: 'text-pink-700 dark:text-pink-300',
    border: 'border-pink-200 dark:border-pink-800',
    badge: 'bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300',
  },
  rose: {
    bg: 'bg-rose-50 dark:bg-rose-950/30',
    text: 'text-rose-700 dark:text-rose-300',
    border: 'border-rose-200 dark:border-rose-800',
    badge: 'bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300',
  },
};

function getColors(color: string) {
  return COLOR_MAP[color] ?? COLOR_MAP.indigo;
}

function SiblingPageList({
  cluster,
  currentPath,
  max,
}: {
  cluster: TopicCluster;
  currentPath: string;
  max: number;
}) {
  const siblings = cluster.pages
    .filter((p) => p.path !== currentPath && p.type !== 'tool')
    .slice(0, max);

  if (siblings.length === 0) return null;
  const colors = getColors(cluster.color);

  return (
    <div>
      <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
        More in {cluster.name}
      </h3>
      <ul className="space-y-2">
        {siblings.map((page) => (
          <li key={page.path}>
            <Link
              href={page.path}
              className={`flex items-start gap-2 p-3 rounded-lg border ${colors.border} ${colors.bg} hover:opacity-90 transition-opacity`}
            >
              <span className={`text-xs font-medium mt-0.5 px-1.5 py-0.5 rounded ${colors.badge} flex-shrink-0`}>
                {page.type === 'blog' ? 'Blog' : page.type === 'cluster' ? 'Guide' : 'Guide'}
              </span>
              <span className="flex-1 min-w-0">
                <span className={`text-sm font-semibold ${colors.text} block`}>{page.title}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 block leading-relaxed line-clamp-2">
                  {page.description}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function RelatedClusterCard({ cluster }: { cluster: TopicCluster }) {
  const colors = getColors(cluster.color);
  return (
    <Link
      href={cluster.pillarPath}
      className={`block p-4 rounded-xl border ${colors.border} ${colors.bg} hover:opacity-90 transition-opacity`}
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xl" aria-hidden="true">{cluster.icon}</span>
        <span className={`text-sm font-bold ${colors.text}`}>{cluster.name}</span>
      </div>
      <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-2">
        {cluster.description}
      </p>
      <span className={`mt-3 inline-flex items-center gap-1 text-xs font-semibold ${colors.text}`}>
        Read guide →
      </span>
    </Link>
  );
}

export default function RelatedTopics({
  currentPath,
  clusterId,
  showSiblings = true,
  showRelatedClusters = true,
  showTool = true,
  maxSiblings = 4,
  maxRelated = 3,
  variant = 'full',
}: RelatedTopicsProps) {
  const cluster = clusterId
    ? TOPIC_CLUSTERS.find((c) => c.id === clusterId)
    : getClusterByPath(currentPath);

  if (!cluster) return null;

  const relatedClusters = showRelatedClusters
    ? getRelatedClusters(cluster.id).slice(0, maxRelated)
    : [];

  const colors = getColors(cluster.color);

  if (variant === 'compact') {
    return (
      <nav aria-label="Related topics" className="mt-8">
        <div className="flex flex-wrap gap-2">
          {cluster.pages
            .filter((p) => p.path !== currentPath && p.type !== 'tool')
            .slice(0, maxSiblings)
            .map((page) => (
              <Link
                key={page.path}
                href={page.path}
                className={`inline-flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-full border ${colors.border} ${colors.text} ${colors.bg} hover:opacity-80 transition-opacity`}
              >
                {page.title}
              </Link>
            ))}
          {relatedClusters.map((rc) => (
            <Link
              key={rc.id}
              href={rc.pillarPath}
              className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 hover:opacity-80 transition-opacity"
            >
              {rc.icon} {rc.name}
            </Link>
          ))}
        </div>
      </nav>
    );
  }

  return (
    <aside aria-label="Related topics" className="mt-12 border-t border-gray-100 dark:border-gray-800 pt-10">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Left: Sibling pages */}
        {showSiblings && (
          <div className="md:col-span-1">
            <SiblingPageList
              cluster={cluster}
              currentPath={currentPath}
              max={maxSiblings}
            />

            {showTool && cluster.toolPath && (
              <div className={`mt-6 p-4 rounded-xl border ${colors.border} ${colors.bg}`}>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Check tool</p>
                <Link
                  href={cluster.toolPath}
                  className={`inline-flex items-center gap-2 text-sm font-semibold ${colors.text} hover:opacity-80 transition-opacity`}
                >
                  {cluster.icon} {cluster.toolLabel ?? 'Try the tool'} →
                </Link>
              </div>
            )}
          </div>
        )}

        {/* Right: Related clusters */}
        {showRelatedClusters && relatedClusters.length > 0 && (
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
              Related Scam Topics
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {relatedClusters.map((rc) => (
                <RelatedClusterCard key={rc.id} cluster={rc} />
              ))}
            </div>

            {/* All scams hub link */}
            <div className="mt-4">
              <Link
                href="/scams"
                className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
              >
                ← All scam types in India
              </Link>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
