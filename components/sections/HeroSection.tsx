import {
  Zap,
  CheckCircle,
  ShieldCheck,
  Globe2,
  PhoneCall,
  IndianRupee,
  FileCheck2,
  LockKeyhole,
  Smartphone,
} from "lucide-react";
import type { ComponentProps } from "react";
import Link from "next/link";
import UrlInput from "@/components/UrlInput";

interface HeroSectionProps {
  hero: {
    badge: string;
    title1: string;
    title2: string;
    subtitle: string;
    trustSignals?: string[];
    footer?: string;
  };
  urlInput: ComponentProps<typeof UrlInput>["content"];
}

export default function HeroSection({ hero, urlInput }: HeroSectionProps) {
  return (
    <section className="relative isolate overflow-hidden px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-12 lg:px-8 lg:pb-24 lg:pt-7">
      {/* Security-grid backdrop */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(99,102,241,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.055)_1px,transparent_1px)] bg-[size:42px_42px] [mask-image:linear-gradient(to_bottom,black,transparent_94%)] dark:bg-[linear-gradient(to_right,rgba(129,140,248,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(129,140,248,0.08)_1px,transparent_1px)]"
      />
      <div aria-hidden="true" className="absolute -left-32 top-8 -z-10 h-80 w-80 rounded-full bg-violet-400/15 blur-3xl dark:bg-violet-500/15" />
      <div aria-hidden="true" className="absolute -right-24 top-24 -z-10 h-96 w-96 rounded-full bg-indigo-300/10 blur-3xl dark:bg-indigo-500/10" />

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-14">
          {/* Message and trust */}
          <div className="min-w-0 text-center lg:text-left">
            <div className="mb-6 inline-flex max-w-full items-center rounded-full border border-violet-200/80 bg-white/80 px-4 py-2 shadow-sm shadow-violet-100/60 backdrop-blur-md dark:border-violet-800/60 dark:bg-gray-900/70 dark:shadow-none">
              <Zap className="mr-2 h-4 w-4 flex-none text-amber-500" />
              <span className="truncate text-xs font-semibold text-gray-700 dark:text-gray-300 sm:text-sm">
                {hero.badge}
              </span>
            </div>

            <h1 className="text-4xl font-black leading-[1.04] tracking-[-0.045em] text-gray-950 dark:text-white sm:text-5xl lg:text-[3.65rem]">
              <span className="block">{hero.title1}</span>
              <span className="mt-2 block bg-gradient-to-r from-violet-700 to-indigo-600 bg-clip-text text-transparent dark:from-violet-400 dark:to-indigo-400">
                {hero.title2}
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-300 sm:text-lg lg:mx-0 lg:max-w-xl">
              {hero.subtitle}
            </p>

            <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
              <Link
                href="/business"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-gray-300 bg-white/80 px-6 py-3 text-sm font-bold text-gray-800 shadow-sm backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-indigo-300 hover:text-indigo-700 dark:border-gray-700 dark:bg-gray-900/70 dark:text-gray-100 dark:hover:border-indigo-700 dark:hover:text-indigo-300"
              >
                Explore Business Solutions
              </Link>
            </div>

            <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-gray-500 dark:text-gray-400 sm:text-sm">
              Website Intelligence <span aria-hidden="true">·</span> Document Verification <span aria-hidden="true">·</span> Scam Risk APIs
            </p>

            {hero.trustSignals && (
              <div className="mx-auto mt-8 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2 lg:mx-0">
                {hero.trustSignals.map((signal: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-xl border border-gray-200/80 bg-white/70 px-3.5 py-3 text-left shadow-sm backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/60"
                  >
                    <span className="flex h-7 w-7 flex-none items-center justify-center rounded-lg bg-emerald-50 dark:bg-emerald-950/60">
                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                    </span>
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      {signal}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {hero.footer && (
              <p className="mt-6 text-sm font-semibold text-gray-600 dark:text-gray-400 sm:text-base">
                {hero.footer}
              </p>
            )}

            <Link href="/app" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-violet-700 transition hover:text-violet-900 dark:text-violet-300 dark:hover:text-violet-200">
              <Smartphone className="h-4 w-4" />
              Get RakshaAI for iOS and Android
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Product scanner */}
          <div id="check-something" className="relative mx-auto min-w-0 w-full max-w-3xl scroll-mt-24 lg:max-w-none">
            <div aria-hidden="true" className="absolute -inset-5 -z-10 rounded-[2.5rem] bg-indigo-400/10 blur-2xl" />
            <div className="relative min-h-[450px] overflow-hidden rounded-[2rem] border border-indigo-200/70 bg-gradient-to-br from-white/95 via-slate-50/90 to-indigo-50/70 p-4 shadow-[0_32px_90px_-30px_rgba(67,56,202,0.28)] backdrop-blur-xl dark:border-indigo-900/60 dark:from-gray-950/95 dark:via-slate-950/90 dark:to-indigo-950/30 sm:min-h-[500px] sm:p-5 lg:min-h-[540px]">
              <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-violet-600 to-indigo-500" />

              {/* Animated threat-detection field */}
              <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[360px] overflow-hidden">
                <div className="absolute left-1/2 top-[46%] h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-300/45 sm:h-80 sm:w-80">
                  <div className="absolute inset-10 rounded-full border border-violet-300/40" />
                  <div className="absolute inset-20 rounded-full border border-violet-300/40" />
                  <div className="absolute inset-[7.5rem] rounded-full border border-violet-300/50" />
                  <div className="absolute inset-0 animate-spin rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,transparent_285deg,rgba(139,92,246,0.28)_345deg,rgba(217,70,239,0.05)_360deg)] [animation-duration:5s]" />
                  <div className="absolute left-1/2 top-0 h-full w-px bg-violet-300/25" />
                  <div className="absolute left-0 top-1/2 h-px w-full bg-violet-300/25" />
                </div>

                <div className="absolute left-1/2 top-[46%] flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[1.75rem] bg-gradient-to-br from-violet-600 via-violet-600 to-indigo-600 text-white shadow-[0_20px_50px_rgba(79,70,229,0.38)]">
                  <span className="absolute inset-0 animate-ping rounded-[1.75rem] border border-violet-400/70 [animation-duration:2.8s]" />
                  <span className="absolute -inset-3 animate-pulse rounded-[2.1rem] border border-violet-300/40" />
                  <span className="absolute inset-2 rounded-[1.35rem] border border-white/20" />
                  <ShieldCheck className="relative h-12 w-12" strokeWidth={2.15} />
                </div>

                {/* Network connections */}
                <svg className="absolute inset-0 h-full w-full text-violet-400/45" viewBox="0 0 620 360" fill="none">
                  <path d="M310 165 L130 88 M310 165 L493 78 M310 165 L520 235 M310 165 L116 244" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 7" />
                  <circle cx="310" cy="165" r="4" fill="currentColor" />
                </svg>

                <div className="absolute left-[7%] top-[13%] flex items-center gap-2 rounded-2xl border border-violet-200/80 bg-white/95 p-1.5 pr-3 text-violet-700 shadow-[0_10px_25px_-12px_rgba(76,29,149,0.55)] backdrop-blur-sm dark:border-violet-800/70 dark:bg-gray-900/95 dark:text-violet-300">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-100 dark:bg-violet-950">
                    <Globe2 className="h-[19px] w-[19px]" strokeWidth={2.15} />
                  </span>
                  <span className="hidden text-xs font-bold sm:block">Website</span>
                </div>
                <div className="absolute right-[7%] top-[11%] flex items-center gap-2 rounded-2xl border border-emerald-200/80 bg-white/95 p-1.5 pr-3 text-emerald-700 shadow-[0_10px_25px_-12px_rgba(5,150,105,0.5)] backdrop-blur-sm dark:border-emerald-800/70 dark:bg-gray-900/95 dark:text-emerald-300">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-950">
                    <IndianRupee className="h-[19px] w-[19px]" strokeWidth={2.2} />
                  </span>
                  <span className="hidden text-xs font-bold sm:block">UPI ID</span>
                </div>
                <div className="absolute bottom-[11%] left-[6%] flex items-center gap-2 rounded-2xl border border-sky-200/80 bg-white/95 p-1.5 pr-3 text-sky-700 shadow-[0_10px_25px_-12px_rgba(2,132,199,0.5)] backdrop-blur-sm dark:border-sky-800/70 dark:bg-gray-900/95 dark:text-sky-300">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-100 dark:bg-sky-950">
                    <PhoneCall className="h-[19px] w-[19px]" strokeWidth={2.15} />
                  </span>
                  <span className="hidden text-xs font-bold sm:block">Phone</span>
                </div>
                <div className="absolute bottom-[13%] right-[6%] flex items-center gap-2 rounded-2xl border border-amber-200/80 bg-white/95 p-1.5 pr-3 text-amber-700 shadow-[0_10px_25px_-12px_rgba(217,119,6,0.45)] backdrop-blur-sm dark:border-amber-800/70 dark:bg-gray-900/95 dark:text-amber-300">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-100 dark:bg-amber-950">
                    <FileCheck2 className="h-[19px] w-[19px]" strokeWidth={2.15} />
                  </span>
                  <span className="hidden text-xs font-bold sm:block">Document</span>
                </div>

                <div className="absolute left-[26%] top-[34%] h-2 w-2 animate-ping rounded-full bg-violet-400 [animation-duration:2.3s]" />
                <div className="absolute right-[27%] top-[46%] h-2 w-2 animate-ping rounded-full bg-emerald-400 [animation-delay:900ms] [animation-duration:2.7s]" />
              </div>

              <div className="relative z-10 mt-[300px] rounded-[1.4rem] border border-white/90 bg-white/88 p-2.5 shadow-[0_18px_45px_-18px_rgba(76,29,149,0.45)] backdrop-blur-xl dark:border-gray-700/80 dark:bg-gray-950/88 sm:mt-[330px] sm:p-3">
                <div className="mb-2.5 flex items-center justify-between px-1">
                  <span className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-200 dark:shadow-violet-950/60">
                      <ShieldCheck className="h-4 w-4" strokeWidth={2.2} />
                    </span>
                    <span className="text-xs font-extrabold text-gray-800 dark:text-gray-200">Free Website Scam Checker</span>
                  </span>
                  <span className="flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wide text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                    <LockKeyhole className="h-3 w-3" strokeWidth={2.3} />
                    Secure
                  </span>
                </div>

                <div className="relative rounded-2xl border border-gray-200/80 bg-gray-50/80 p-1.5 shadow-inner dark:border-gray-800 dark:bg-gray-900/70 sm:p-2 [&_.gradient-primary]:!bg-[linear-gradient(135deg,#7c3aed,#4f46e5)] [&_.gradient-primary]:!px-4 [&_.gradient-primary]:!py-2.5 [&_.gradient-primary]:!text-sm [&_.gradient-primary]:!shadow-sm [&_.gradient-primary]:shadow-indigo-200/70 [&_.gradient-primary]:hover:!shadow-md [&_.gradient-primary]:hover:shadow-indigo-300/70 [&_.gradient-primary_span]:!text-sm [&_.gradient-primary_svg]:!h-[18px] [&_.gradient-primary_svg]:!w-[18px] [&_.text-orange-500]:!text-violet-500 sm:[&_.gradient-primary]:!px-4 sm:[&_.gradient-primary]:!py-2.5 lg:[&_.gradient-primary]:!px-5 lg:[&_.gradient-primary]:!py-2.5 dark:[&_.gradient-primary]:shadow-none dark:[&_.text-orange-500]:!text-violet-400">
                  <UrlInput content={urlInput} />
                </div>

                <div aria-hidden="true" className="mt-2.5 flex items-center gap-2 px-1">
                  <span className="h-1 flex-[1.25] rounded-full bg-emerald-400" />
                  <span className="h-1 flex-1 rounded-full bg-indigo-300" />
                  <span className="h-1 flex-[0.7] rounded-full bg-slate-300 dark:bg-slate-600" />
                  <span className="h-1 flex-[0.35] rounded-full bg-gray-200 dark:bg-gray-700" />
                </div>
              </div>
            </div>

            <div aria-hidden="true" className="absolute -bottom-5 -left-3 -z-10 h-24 w-24 rounded-3xl border border-violet-200/60 bg-white/50 shadow-xl backdrop-blur-sm dark:border-violet-800/40 dark:bg-gray-900/40" />
            <div aria-hidden="true" className="absolute -right-4 -top-5 -z-10 h-20 w-20 rounded-full border border-indigo-200/70 bg-indigo-50/40 dark:border-indigo-900/50 dark:bg-indigo-950/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
