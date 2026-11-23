import Image from 'next/image'
import Link from 'next/link'
import { BellRing, CheckCircle2, Flag, ScanSearch, ShieldCheck, Smartphone } from 'lucide-react'
import AppStoreButtons from '@/components/AppStoreButtons'

const benefits = [
  { icon: ScanSearch, title: 'Scan before you trust', text: 'Check suspicious websites, phone numbers and UPI IDs directly from your phone before you click, respond or pay.' },
  { icon: ShieldCheck, title: 'Understand the risk', text: 'See an easy-to-understand assessment with the available warning signals and practical next steps.' },
  { icon: Flag, title: 'Protect the community', text: 'Report suspicious websites, fraudulent phone numbers and risky UPI IDs so reviewers can examine them.' },
]

interface MobileAppShowcaseSectionProps {
  headingLevel?: 'h1' | 'h2'
}

export default function MobileAppShowcaseSection({ headingLevel = 'h2' }: MobileAppShowcaseSectionProps) {
  const Heading = headingLevel

  return (
    <section id="mobile-app" aria-labelledby="mobile-app-title" className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-violet-200/80 bg-gradient-to-br from-violet-700 via-violet-700 to-indigo-700 shadow-[0_28px_80px_-34px_rgba(76,29,149,0.65)]">
        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:42px_42px]" />
        <div aria-hidden="true" className="absolute -left-28 -top-32 h-96 w-96 rounded-full bg-fuchsia-400/20 blur-3xl" />
        <div aria-hidden="true" className="absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-indigo-300/20 blur-3xl" />

        <div className="relative grid items-center gap-12 px-6 py-10 sm:px-10 sm:py-14 lg:grid-cols-[0.95fr_1.05fr] lg:px-14 lg:py-16">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-violet-50 backdrop-blur-sm">
              <Smartphone className="h-4 w-4" /> RakshaAI mobile app
            </div>
            <Heading id="mobile-app-title" className="mt-6 text-3xl font-black leading-tight tracking-[-0.035em] sm:text-5xl">
              Scam protection that stays with you.
            </Heading>
            <p className="mt-5 max-w-2xl text-base leading-7 text-violet-100 sm:text-lg">
              Carry RakshaAI in your pocket for the moments when an unfamiliar link, caller or payment ID needs a second look. The app brings everyday scam checks and community reporting into one simple mobile experience.
            </p>

            <div className="mt-8 space-y-5">
              {benefits.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/12 text-white ring-1 ring-white/15"><Icon className="h-5 w-5" /></span>
                  <div><h3 className="font-bold">{title}</h3><p className="mt-1 text-sm leading-6 text-violet-100">{text}</p></div>
                </div>
              ))}
            </div>

            <AppStoreButtons className="mt-8" />
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-violet-100">
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-300" />Free to download</span>
              <span className="inline-flex items-center gap-1.5"><BellRing className="h-4 w-4 text-amber-300" />Supported alerts vary by device</span>
              <Link href="/app" className="font-bold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white">Explore the mobile app</Link>
            </div>
          </div>

          <div className="relative mx-auto h-[320px] w-full max-w-[620px] sm:h-[590px]" aria-label="RakshaAI mobile app screenshots">
            <div className="absolute left-[2%] top-[12%] w-[36%] -rotate-6 overflow-hidden rounded-[1.65rem] border-[6px] border-white/90 bg-white shadow-2xl shadow-indigo-950/40 sm:border-[8px]">
              <Image src="/app/rakshaai-app-screen-1.webp" alt="RakshaAI app security score screen" width={600} height={1300} className="h-auto w-full" />
            </div>
            <div className="absolute left-1/2 top-0 z-10 w-[40%] -translate-x-1/2 overflow-hidden rounded-[1.8rem] border-[6px] border-white bg-white shadow-2xl shadow-indigo-950/50 sm:border-[8px]">
              <Image src="/app/rakshaai-app-screen-5.webp" alt="RakshaAI app supported-notification scam detection screen" width={600} height={1300} className="h-auto w-full" />
            </div>
            <div className="absolute right-[2%] top-[12%] w-[36%] rotate-6 overflow-hidden rounded-[1.65rem] border-[6px] border-white/90 bg-white shadow-2xl shadow-indigo-950/40 sm:border-[8px]">
              <Image src="/app/rakshaai-app-screen-3.webp" alt="RakshaAI app suspicious activity reporting screen" width={600} height={1300} className="h-auto w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
