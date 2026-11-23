import { APP_STORE_URL, PLAY_STORE_URL } from '@/lib/site-config'

interface AppStoreButtonsProps {
  className?: string
  compact?: boolean
}

export default function AppStoreButtons({ className = '', compact = false }: AppStoreButtonsProps) {
  const size = compact ? 'min-h-12 px-3.5 py-2' : 'min-h-14 px-4 py-2.5'
  const iconSize = compact ? 'h-7 w-7' : 'h-8 w-8'

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download RakshaAI on the Apple App Store"
        className={`inline-flex items-center gap-2.5 rounded-xl border border-gray-800 bg-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-gray-900 hover:shadow-md ${size}`}
      >
        <svg aria-hidden="true" className={iconSize} viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 12.35c.02-2.01 1.1-3.87 2.85-4.88a6.12 6.12 0 0 0-4.82-2.61c-2.03-.21-4 1.21-5.03 1.21-1.05 0-2.64-1.19-4.35-1.15a6.38 6.38 0 0 0-5.37 3.27c-2.34 4.05-.6 10 1.65 13.27 1.13 1.61 2.44 3.41 4.15 3.34 1.67-.07 2.3-1.07 4.32-1.07 2 0 2.59 1.07 4.34 1.03 1.8-.03 2.93-1.61 4.02-3.23a13.22 13.22 0 0 0 1.84-3.75 5.65 5.65 0 0 1-3.6-5.43ZM15.42 2.7A5.58 5.58 0 0 0 16.7-1.3a5.67 5.67 0 0 0-3.67 1.9 5.3 5.3 0 0 0-1.32 3.85 4.67 4.67 0 0 0 3.71-1.75Z" transform="translate(0 1) scale(.92)" />
        </svg>
        <span className="text-left leading-none">
          <span className="block text-[9px] font-medium uppercase tracking-wide text-gray-300">Download on the</span>
          <span className="mt-1 block text-base font-semibold">App Store</span>
        </span>
      </a>

      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get RakshaAI on Google Play"
        className={`inline-flex items-center gap-2.5 rounded-xl border border-gray-800 bg-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-gray-900 hover:shadow-md ${size}`}
      >
        <svg aria-hidden="true" className={iconSize} viewBox="0 0 32 36">
          <path fill="#34A853" d="M1.8 1.25A3.1 3.1 0 0 0 .5 3.85v28.3a3.1 3.1 0 0 0 1.3 2.6L17.6 18 1.8 1.25Z" />
          <path fill="#FBBC04" d="m22.75 12.55-5.15 5.46 5.2 5.5 6.2-3.54c1.86-1.06 1.86-2.85.01-3.91l-6.26-3.51Z" />
          <path fill="#4285F4" d="M1.8 1.25 22.75 12.55 17.6 18 1.8 1.25Z" />
          <path fill="#EA4335" d="M1.8 34.75 22.8 23.5 17.6 18 1.8 34.75Z" />
        </svg>
        <span className="text-left leading-none">
          <span className="block text-[9px] font-medium uppercase tracking-wide text-gray-300">Get it on</span>
          <span className="mt-1 block text-base font-semibold">Google Play</span>
        </span>
      </a>
    </div>
  )
}
