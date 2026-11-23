import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || ''
  if (host.startsWith('www.')) {
    // Build the target URL from scratch: request.nextUrl carries the app's
    // internal origin (e.g. :8080 behind the reverse proxy), which must never
    // leak into the public Location header.
    const bareHost = host.slice(4).replace(/:\d+$/, '')
    const { pathname, search } = request.nextUrl
    return NextResponse.redirect(`https://${bareHost}${pathname}${search}`, { status: 301 })
  }
}

export const config = {
  matcher: '/:path*',
}
