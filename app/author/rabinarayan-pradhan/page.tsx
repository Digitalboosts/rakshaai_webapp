import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import DefaultLayout from '@/components/DefaultLayout';
import { blogPosts } from '@/lib/blog/posts';
import AuthorArticlesGrid from '@/components/AuthorArticlesGrid';
import {
    personSchema,
    breadcrumbListSchema,
    absoluteUrl,
    jsonLd,
    ORGANIZATION_ID,
    WEBSITE_ID,
    type SchemaNode,
} from '@/lib/seo/schema';
import {
    Pen,
    Shield,
    ArrowRight,
    Clock,
    CreditCard,
    Smartphone,
    Briefcase,
    Globe,
    Flag,
    BookOpen,
    ChevronRight,
    Quote,
    ExternalLink,
} from 'lucide-react';

const PINNED_POST_SLUG = 'cyber-hygiene-india';

const sortPostsForDisplay = (posts: typeof blogPosts) =>
    [...posts].sort((a, b) => {
        if (a.slug === PINNED_POST_SLUG) return -1;
        if (b.slug === PINNED_POST_SLUG) return 1;
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    });

// ── SEO Metadata ──────────────────────────────────────────────────────────────

export const metadata: Metadata = {
    title: 'Rabinarayan Pradhan  Cybersecurity Writer at RakshaAI',
    description:
        'Rabinarayan Pradhan is a cybersecurity writer at RakshaAI covering UPI fraud, digital arrest scams, phishing, and fake job offers.',
    keywords: [
        'Rabinarayan Pradhan',
        'RakshaAI author',
        'cybersecurity writer India',
        'UPI fraud articles',
        'digital arrest scam guide',
        'online scam India writer',
        'cyber safety India blog',
        'phishing awareness India',
    ],
    alternates: {
        canonical: 'https://rakshaai.co/author/rabinarayan-pradhan',
    },
    robots: {
        index: true,
        follow: true,
        'max-snippet': -1,
        'max-image-preview': 'large',
        googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
    },
    openGraph: {
        title: 'Rabinarayan Pradhan  Cybersecurity Writer at RakshaAI',
        description:
            'Writes about UPI fraud, digital arrest scams, phishing, fake job scams, and cyber safety for everyday Indian internet users.',
        url: 'https://rakshaai.co/author/rabinarayan-pradhan',
        type: 'profile',
        firstName: 'Rabinarayan',
        lastName: 'Pradhan',
        username: 'rabinarayan-pradhan',
        siteName: 'RakshaAI',
        locale: 'en_IN',
        images: [
            {
                url: '/authors/rabinarayan-pradhan.jpeg',
                width: 960,
                height: 1280,
                alt: 'Rabinarayan Pradhan, Cybersecurity Writer at RakshaAI',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@RakshaAi247',
        title: 'Rabinarayan Pradhan  Cybersecurity Writer at RakshaAI',
        description: 'Covers UPI fraud, digital arrest scams, phishing, and cyber safety for Indians at RakshaAI.',
        images: ['/authors/rabinarayan-pradhan.jpeg'],
        creator: '@RakshaAi247',
    },
};

// ── Structured Data ───────────────────────────────────────────────────────────

function buildPageSchemas(posts: typeof blogPosts): SchemaNode[] {
    const sortedPosts = sortPostsForDisplay(posts);

    const person = personSchema({
        name: 'Rabinarayan Pradhan',
        url: '/author/rabinarayan-pradhan',
        jobTitle: 'Cybersecurity Writer',
        image: '/authors/rabinarayan-pradhan.jpeg',
        sameAs: ['https://www.linkedin.com/in/rabinarayan-pradhan-14ab9422b/'],
        description: 'Rabinarayan Pradhan is a cybersecurity writer at RakshaAI covering UPI fraud, digital arrest scams, phishing, fake job scams, AI voice cloning fraud, and cyber safety for Indian internet users.',
        knowsAbout: [
            'UPI fraud India',
            'digital arrest scam',
            'phishing websites India',
            'fake job scams India',
            'SIM swap fraud',
            'AI voice cloning scam',
            'cybercrime reporting India',
            'online scam prevention India',
            'Telegram task scam',
            'fake loan app fraud India',
        ],
    });

    const profilePage: SchemaNode = {
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        '@id': absoluteUrl('/author/rabinarayan-pradhan#profile'),
        name: 'Rabinarayan Pradhan  Cybersecurity Writer at RakshaAI',
        url: absoluteUrl('/author/rabinarayan-pradhan'),
        inLanguage: 'en-IN',
        isPartOf: { '@type': 'WebSite', '@id': WEBSITE_ID },
        publisher: { '@type': 'Organization', '@id': ORGANIZATION_ID },
        mainEntity: { '@type': 'Person', '@id': absoluteUrl('/author/rabinarayan-pradhan#person') },
        dateModified: sortedPosts[0]?.publishedAt ?? new Date().toISOString(),
    };

    const articleList: SchemaNode = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        '@id': absoluteUrl('/author/rabinarayan-pradhan#articles'),
        name: 'Articles by Rabinarayan Pradhan',
        numberOfItems: sortedPosts.length,
        itemListElement: sortedPosts.map((post, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: post.title,
            url: absoluteUrl(`/blog/${post.slug}`),
            item: {
                '@type': 'BlogPosting',
                '@id': absoluteUrl(`/blog/${post.slug}#article`),
                headline: post.title,
                description: post.description,
                url: absoluteUrl(`/blog/${post.slug}`),
                datePublished: post.publishedAt,
                author: { '@type': 'Person', '@id': absoluteUrl('/author/rabinarayan-pradhan#person') },
                publisher: { '@type': 'Organization', '@id': ORGANIZATION_ID },
                image: absoluteUrl(post.heroImage),
            },
        })) as SchemaNode[],
    };

    return [
        person,
        profilePage,
        articleList,
        breadcrumbListSchema([
            { name: 'Home', url: '/' },
            { name: 'Blog', url: '/blog' },
            { name: 'Rabinarayan Pradhan', url: '/author/rabinarayan-pradhan' },
        ]),
    ];
}

// ── Static data ───────────────────────────────────────────────────────────────

const topics = [
    {
        icon: CreditCard,
        label: 'UPI Fraud',
        description: 'Fake collect requests, QR code traps, SIM swap attacks, and how scammers exploit India\'s payment rails.',
    },
    {
        icon: Globe,
        label: 'Phishing & Fake Websites',
        description: 'Lookalike domains, cloned bank portals, and spoofed delivery links that steal credentials and money.',
    },
    {
        icon: Briefcase,
        label: 'Fake Job Scams',
        description: 'Telegram task groups, work-from-home traps, and the pig butchering playbook that has cost Indians crores.',
    },
    {
        icon: Smartphone,
        label: 'Digital Arrest Scams',
        description: 'Fake CBI, ED, and NCB impersonation calls  the psychology behind India\'s fastest-growing phone fraud.',
    },
    {
        icon: Shield,
        label: 'Cyber Safety',
        description: 'Practical steps Indians can take today to protect their UPI IDs, phone numbers, and personal data.',
    },
    {
        icon: Flag,
        label: 'Reporting & Recovery',
        description: 'How to use Helpline 1930, file at cybercrime.gov.in, and what to do in the first 30 minutes after being scammed.',
    },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function RabinarayanPradhanPage() {
    const authorPosts = blogPosts.filter((p) => p.author === 'Rabinarayan Pradhan');
    const sortedPosts = sortPostsForDisplay(authorPosts);
    const latestPost = sortedPosts[0];
    const totalReadMinutes = authorPosts.reduce((sum, p) => sum + parseInt(p.readTime), 0);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLd(buildPageSchemas(authorPosts)) }}
            />
            <DefaultLayout>

                {/* ── Hero ──────────────────────────────────────────────────── */}
                <section className="relative bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800 pt-16 pb-0">
                    <div
                        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
                        style={{
                            backgroundImage: 'radial-gradient(circle, #6366f1 1px, transparent 1px)',
                            backgroundSize: '28px 28px',
                        }}
                    />

                    <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Breadcrumb */}
                        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500 mb-10">
                            <Link href="/" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Home</Link>
                            <ChevronRight className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
                            <Link href="/blog" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Blog</Link>
                            <ChevronRight className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
                            <span className="text-gray-600 dark:text-gray-300" aria-current="page">Rabinarayan Pradhan</span>
                        </nav>

                        <div className="flex flex-col lg:flex-row lg:items-end gap-10 pb-12">

                            {/* Left  identity */}
                            <div className="flex-1 min-w-0">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950 border border-indigo-100 dark:border-indigo-900 text-indigo-600 dark:text-indigo-400 text-xs font-semibold mb-5">
                                    <Pen className="h-3 w-3" aria-hidden="true" />
                                    Cybersecurity Writer · RakshaAI
                                </div>

                                <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-none mb-5">
                                    Rabinarayan{' '}
                                    <br aria-hidden="true" />
                                    Pradhan
                                </h1>

                                <p className="text-base text-gray-500 dark:text-gray-400 max-w-lg leading-relaxed mb-8">
                                    Covers online fraud and cybercrime for RakshaAI  translating India&apos;s most
                                    active digital threats into plain-language guides that tell you exactly what to do.
                                </p>

                                {/* Stats */}
                                <div className="flex flex-wrap gap-6">
                                    {[
                                        { value: authorPosts.length.toString(), label: 'Articles published' },
                                        { value: `${totalReadMinutes} min`, label: 'Total reading time' },
                                        { value: '1930', label: 'Helpline in every article' },
                                    ].map(({ value, label }) => (
                                        <div key={label}>
                                            <p className="text-2xl font-extrabold text-gray-900 dark:text-white">{value}</p>
                                            <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right  latest article card */}
                            {latestPost && (
                                <div className="flex-shrink-0 w-full lg:w-72">
                                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">
                                        Latest article
                                    </p>
                                    <Link href={`/blog/${latestPost.slug}`} className="group block">
                                        <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:border-indigo-200 dark:hover:border-indigo-800 hover:shadow-lg transition-all duration-200">
                                            {/* Cover image */}
                                            <div className="relative h-40 overflow-hidden">
                                                <Image
                                                    src={latestPost.heroImage}
                                                    alt={latestPost.heroImageAlt}
                                                    fill
                                                    sizes="288px"
                                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                                                {/* Tags on image */}
                                                <div className="absolute bottom-3 left-3 flex gap-1.5">
                                                    {latestPost.tags.slice(0, 1).map((tag) => (
                                                        <span
                                                            key={tag}
                                                            className="px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-[10px] font-semibold border border-white/20"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            {/* Content */}
                                            <div className="p-4">
                                                <h3 className="text-sm font-bold text-gray-900 dark:text-white leading-snug mb-2 line-clamp-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                                    {latestPost.title}
                                                </h3>
                                                <div className="flex items-center justify-between text-xs text-gray-400 dark:text-gray-500">
                                                    <span className="inline-flex items-center gap-1">
                                                        <Clock className="h-3 w-3" aria-hidden="true" />
                                                        {latestPost.readTime} read
                                                    </span>
                                                    <span className="inline-flex items-center gap-1 font-semibold text-indigo-600 dark:text-indigo-400 group-hover:gap-2 transition-all">
                                                        Read
                                                        <ArrowRight className="h-3 w-3" aria-hidden="true" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* ── Body ──────────────────────────────────────────────────── */}
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

                    {/* ── About ─────────────────────────────────────────────── */}
                    <section aria-labelledby="about-heading">
                        <div className="grid lg:grid-cols-5 gap-10">
                            <div className="lg:col-span-2">
                                <div className="sticky top-24">
                                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">About</p>
                                    <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-md mb-5">
                                        <Image
                                            src="/authors/rabinarayan-pradhan.jpeg"
                                            alt="Rabinarayan Pradhan, Cybersecurity Writer at RakshaAI"
                                            width={960}
                                            height={1280}
                                            className="w-full h-auto"
                                            priority
                                        />
                                    </div>
                                    <h2 id="about-heading" className="text-2xl font-extrabold text-gray-900 dark:text-white leading-snug">
                                        Writing that helps people act, not just understand
                                    </h2>
                                </div>
                            </div>

                            <div className="lg:col-span-3 space-y-5 text-gray-600 dark:text-gray-300 leading-relaxed text-[15px]">
                                <p>
                                    Rabinarayan Pradhan covers cybercrime and digital fraud for RakshaAI.
                                    His focus is on the scams that are actually harming people in India right now 
                                    not abstract threats, but the exact calls, messages, and links that are
                                    landing in real inboxes every day.
                                </p>
                                <p>
                                    Before writing a single guide, he researches the full anatomy of each scam:
                                    how the first contact happens, what psychological pressure is applied,
                                    where the money goes, and why victims  often smart, careful people  still
                                    fall for it. That research shapes articles that don&apos;t just warn but explain.
                                </p>
                                <p>
                                    Every piece ends the same way: with specific, time-sensitive actions you can
                                    take. Call 1930 within 30 minutes. Screenshot this. Report here. Because a
                                    guide that tells you &quot;be careful&quot; without telling you what to do
                                    isn&apos;t actually useful.
                                </p>

                                <blockquote className="relative pl-5 border-l-2 border-indigo-500 py-1 my-6">
                                    <Quote className="absolute -top-1 -left-2.5 h-5 w-5 text-indigo-400 bg-white dark:bg-gray-950" aria-hidden="true" />
                                    <p className="text-gray-700 dark:text-gray-200 font-medium italic leading-relaxed">
                                        &ldquo;Most people who get scammed aren&apos;t careless. They&apos;re just missing one
                                        piece of information that nobody told them in time.&rdquo;
                                    </p>
                                </blockquote>

                                <p>
                                    Rabinarayan is based in India and writes exclusively about threats targeting
                                    Indian internet users  UPI payment fraud, digital arrest impersonation,
                                    fake task job apps, phishing links, and the growing wave of AI-generated
                                    scam content targeting Hindi and regional-language speakers.
                                </p>
                            </div>
                        </div>
                    </section>

                    <div className="border-t border-gray-100 dark:border-gray-800" />

                    {/* ── Topics ────────────────────────────────────────────── */}
                    <section aria-labelledby="coverage-heading">
                        <div className="mb-10">
                            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">Coverage</p>
                            <h2 id="coverage-heading" className="text-2xl font-extrabold text-gray-900 dark:text-white">
                                What he writes about
                            </h2>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {topics.map(({ icon: Icon, label, description }) => (
                                <div
                                    key={label}
                                    className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 hover:border-indigo-200 dark:hover:border-indigo-800 hover:shadow-sm transition-all duration-200"
                                >
                                    <div className="w-9 h-9 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4" aria-hidden="true">
                                        <Icon className="h-[18px] w-[18px] text-gray-600 dark:text-gray-300" />
                                    </div>
                                    <p className="font-bold text-gray-900 dark:text-white text-sm mb-2">{label}</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <div className="border-t border-gray-100 dark:border-gray-800" />

                    {/* ── Articles  paginated grid ──────────────────────────── */}
                    {sortedPosts.length > 0 && (
                        <section aria-labelledby="articles-heading">
                            <AuthorArticlesGrid posts={sortedPosts} />
                        </section>
                    )}

                    <div className="border-t border-gray-100 dark:border-gray-800" />

                    {/* ── 1930 callout ──────────────────────────────────────── */}
                    <section className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/60 p-8">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                            <div className="max-w-xl">
                                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">
                                    A note in every article
                                </p>
                                <h2 className="text-lg font-extrabold text-gray-900 dark:text-white mb-2">
                                    If you were just scammed, call 1930 now
                                </h2>
                                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                                    Every piece Rabinarayan writes includes this number because the first 30 minutes
                                    after a fraud are your best window for account freezing and recovery.
                                    India&apos;s National Cybercrime Helpline is free, 24&thinsp;/&thinsp;7, and available in Hindi.
                                </p>
                            </div>
                            <a
                                href="tel:1930"
                                className="flex-shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-bold hover:bg-gray-700 dark:hover:bg-gray-100 transition-colors"
                            >
                                <Smartphone className="h-4 w-4" aria-hidden="true" />
                                Call 1930
                            </a>
                        </div>
                    </section>

                    {/* ── Bottom CTAs ───────────────────────────────────────── */}
                    <section className="grid sm:grid-cols-2 gap-4">
                        <Link
                            href="/blog"
                            className="group flex items-center justify-between p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-indigo-200 dark:hover:border-indigo-800 hover:shadow-md transition-all duration-200"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950 flex items-center justify-center" aria-hidden="true">
                                    <BookOpen className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 dark:text-gray-500 mb-0.5">All articles</p>
                                    <p className="font-bold text-gray-900 dark:text-white text-sm group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                        RakshaAI Security Blog
                                    </p>
                                </div>
                            </div>
                            <ArrowRight className="h-4 w-4 text-gray-300 dark:text-gray-600 group-hover:text-indigo-500 group-hover:translate-x-0.5 transition-all" aria-hidden="true" />
                        </Link>

                        <Link
                            href="/methodology"
                            className="group flex items-center justify-between p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-indigo-200 dark:hover:border-indigo-800 hover:shadow-md transition-all duration-200"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center" aria-hidden="true">
                                    <ExternalLink className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 dark:text-gray-500 mb-0.5">How RakshaAI works</p>
                                    <p className="font-bold text-gray-900 dark:text-white text-sm group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                        Our Methodology
                                    </p>
                                </div>
                            </div>
                            <ArrowRight className="h-4 w-4 text-gray-300 dark:text-gray-600 group-hover:text-indigo-500 group-hover:translate-x-0.5 transition-all" aria-hidden="true" />
                        </Link>
                    </section>

                </div>
            </DefaultLayout>
        </>
    );
}
