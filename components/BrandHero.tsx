import type { ReactNode } from 'react'

interface BrandHeroProps {
  eyebrow: ReactNode
  title: ReactNode
  accent: ReactNode
  description: ReactNode
  actions?: ReactNode
  note?: ReactNode
  width?: 'wide' | 'compact'
}

/**
 * Shared marketing-page hero based on the visual language established by the
 * homepage: a quiet security grid, violet light, white glass surfaces and a
 * strong violet/indigo accent instead of a separate navy/cyan theme.
 */
export default function BrandHero({
  eyebrow,
  title,
  accent,
  description,
  actions,
  note,
  width = 'wide',
}: BrandHeroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-violet-100/80 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 dark:border-violet-950/70">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(99,102,241,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.055)_1px,transparent_1px)] bg-[size:42px_42px] [mask-image:linear-gradient(to_bottom,black,transparent_96%)] dark:bg-[linear-gradient(to_right,rgba(129,140,248,0.075)_1px,transparent_1px),linear-gradient(to_bottom,rgba(129,140,248,0.075)_1px,transparent_1px)]"
      />
      <div aria-hidden="true" className="absolute -left-36 top-0 -z-10 h-96 w-96 rounded-full bg-violet-400/15 blur-3xl dark:bg-violet-500/10" />
      <div aria-hidden="true" className="absolute -right-28 bottom-0 -z-10 h-96 w-96 rounded-full bg-indigo-300/15 blur-3xl dark:bg-indigo-500/10" />

      <div className={`mx-auto text-center ${width === 'compact' ? 'max-w-4xl' : 'max-w-6xl'}`}>
        <div className="inline-flex items-center rounded-full border border-violet-200/80 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-violet-700 shadow-sm shadow-violet-100/70 backdrop-blur-md dark:border-violet-800/60 dark:bg-gray-900/70 dark:text-violet-300 dark:shadow-none">
          <span aria-hidden="true" className="mr-2 h-2 w-2 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-[0_0_0_4px_rgba(139,92,246,0.12)]" />
          {eyebrow}
        </div>

        <h1 className="mt-6 text-4xl font-black leading-[1.04] tracking-[-0.045em] text-gray-950 dark:text-white sm:text-5xl lg:text-6xl">
          <span>{title}</span>{' '}
          <span className="bg-gradient-to-r from-violet-700 via-violet-600 to-indigo-600 bg-clip-text text-transparent dark:from-violet-400 dark:via-fuchsia-400 dark:to-indigo-400">
            {accent}
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-600 dark:text-gray-300 sm:text-lg sm:leading-8">
          {description}
        </p>

        {actions && <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">{actions}</div>}
        {note && <p className="mx-auto mt-5 max-w-3xl text-xs leading-5 text-gray-500 dark:text-gray-400">{note}</p>}
      </div>
    </section>
  )
}
