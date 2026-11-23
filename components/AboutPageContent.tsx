import { Button } from '@/components/ui/Button';
import Link from 'next/link';

interface AboutPageContentProps {
  content: any;
}

export default function AboutPageContent({ content }: AboutPageContentProps) {
    const { hero, stats, mission, features, promise, cta, team } = content;

    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-b from-indigo-50 via-white to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-950 pt-20 pb-16 overflow-hidden">
                <div className="absolute inset-0 bg-grid-gray-900/[0.04] dark:bg-grid-gray-100/[0.02] bg-[size:20px_20px]" />
                <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-6">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>{hero.badge}</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-gray-100 mb-6 leading-tight">
                            {hero.title}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">{hero.titleHighlight}</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
                            {hero.subtitle}
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link href="/">
                                <Button size="lg" className="text-lg px-8">
                                    {hero.ctaPrimary}
                                </Button>
                            </Link>
                            <Link href="/faq">
                                <Button size="lg" variant="outline" className="text-lg px-8">
                                    {hero.ctaSecondary}
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Government Recognition Section */}
            <section className="py-10 bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-6">
                            Government Recognized &amp; Certified
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {/* DPIIT Certificate Card */}
                            <div className="sm:col-span-2 flex items-start gap-4 p-5 rounded-2xl border-2 border-orange-200 dark:border-orange-800/50 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/10">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#FF6A00] flex items-center justify-center shadow-lg shadow-orange-200 dark:shadow-orange-900/30">
                                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
                                        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="min-w-0">
                                    <div className="flex items-center gap-2 flex-wrap mb-1">
                                        <span className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider">DPIIT</span>
                                        <span className="w-1 h-1 rounded-full bg-orange-300" aria-hidden="true" />
                                        <span className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider">Startup India</span>
                                    </div>
                                    <h3 className="text-base font-bold text-gray-900 dark:text-white leading-snug">
                                        EHATECH SERVICES PRIVATE LIMITED
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-0.5">
                                        Recognized Startup · Industry: <strong className="text-gray-800 dark:text-gray-200">AI</strong> · Sector: <strong className="text-gray-800 dark:text-gray-200">NLP</strong>
                                    </p>
                                    <div className="flex flex-wrap gap-x-4 gap-y-0.5 mt-2">
                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                            <span className="font-medium text-gray-700 dark:text-gray-300">Cert No:</span> DIPP203819
                                        </p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                            <span className="font-medium text-gray-700 dark:text-gray-300">Valid until:</span> 05 Jun 2032
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Make In India Card */}
                            <div className="flex flex-col items-center justify-center gap-3 p-5 rounded-2xl border-2 border-orange-200 dark:border-orange-800/50 bg-gradient-to-br from-orange-50 to-green-50 dark:from-orange-950/20 dark:to-green-950/10">
                                <div className="flex items-center gap-2">
                                    <span className="text-4xl leading-none" aria-hidden="true">🇮🇳</span>
                                </div>
                                <div className="text-center">
                                    <p className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">Make In India</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Built &amp; operated<br />from India</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 bg-gray-50 dark:bg-gray-900/50 border-y border-gray-200 dark:border-gray-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {(stats as any[]).map((stat: any) => (
                            <div key={stat.label} className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20 bg-white dark:bg-gray-950">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                            {mission.title}
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                            {mission.paragraph1}
                        </p>
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                            {mission.paragraph2}<span className="font-semibold text-gray-900 dark:text-gray-100">{mission.paragraph2Highlight}</span>
                        </p>
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                            {mission.paragraph3} <span className="font-semibold text-gray-900 dark:text-gray-100">{mission.paragraph3Highlight}</span>
                        </p>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                            {features.title}
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            {features.subtitle}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {(features.items as any[]).map((feature: any, index: number) => (
                            <div
                                key={feature.title}
                                className="bg-white dark:bg-gray-950 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 hover:border-indigo-500 dark:hover:border-indigo-500 hover:shadow-xl transition-all duration-150 group"
                            >
                                <div className="text-indigo-600 dark:text-indigo-400 mb-4 group-hover:scale-110 transition-transform duration-150">
                                    {getFeatureIcon(index)}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Trust Us Section */}
            <section className="py-20 bg-white dark:bg-gray-950">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-12 text-center">
                            {promise.title}
                        </h2>
                        <div className="space-y-8">
                            {(promise.items as any[]).map((item: any, index: number) => (
                                <div key={item.title} className="flex gap-6">
                                    <div className="flex-shrink-0">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                                            index === 0 ? 'bg-green-100 dark:bg-green-900/30' :
                                            index === 1 ? 'bg-blue-100 dark:bg-blue-900/30' :
                                            'bg-purple-100 dark:bg-purple-900/30'
                                        }`}>
                                            {getPromiseIcon(index)}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Legal Entity & Contact */}
            {team && (
                <section className="py-16 bg-gray-50 dark:bg-gray-900">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                                {team.title}
                            </h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
                                {team.subtitle}
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">Registered Company</p>
                                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{team.company}</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Founded {team.founded}</p>
                                </div>
                                <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">Registered Address</p>
                                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{team.address}</p>
                                </div>
                                <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">Email Support</p>
                                    <a href={`mailto:${team.email}`} className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline">{team.email}</a>
                                </div>
                                <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">Emergency Helpline</p>
                                    <a href="tel:1930" className="text-sm font-semibold text-red-600 dark:text-red-400 hover:underline">{team.helpline}</a>
                                </div>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-6 leading-relaxed">{team.mission}</p>
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-700 dark:to-purple-700">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                        {cta.title}
                    </h2>
                    <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
                        {cta.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link href="/">
                            <Button size="lg" variant="secondary" className="text-lg px-8">
                                {cta.ctaPrimary}
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 hover:bg-white/20 text-white border-white/30">
                                {cta.ctaSecondary}
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

// Helper function to get feature icons
function getFeatureIcon(index: number) {
    const icons = [
        // Built for Every Indian
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" key={0}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>,
        // Completely Free Service
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" key={1}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>,
        // Your Data is Yours
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" key={2}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>,
        // Real-Time Protection
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" key={3}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>,
        // Community Powered
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" key={4}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>,
        // No Tech Knowledge Needed
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" key={5}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
    ];
    return icons[index] || icons[0];
}

// Helper function to get promise icons
function getPromiseIcon(index: number) {
    const colors = ['text-green-600 dark:text-green-400', 'text-blue-600 dark:text-blue-400', 'text-purple-600 dark:text-purple-400'];
    const icons = [
        // Zero Cost, Forever
        <svg className={`w-6 h-6 ${colors[0]}`} fill="currentColor" viewBox="0 0 20 20" key={0}>
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>,
        // Your Privacy is Sacred
        <svg className={`w-6 h-6 ${colors[1]}`} fill="currentColor" viewBox="0 0 20 20" key={1}>
            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>,
        // Transparent & Honest
        <svg className={`w-6 h-6 ${colors[2]}`} fill="currentColor" viewBox="0 0 20 20" key={2}>
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
            <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
    ];
    return icons[index] || icons[0];
}