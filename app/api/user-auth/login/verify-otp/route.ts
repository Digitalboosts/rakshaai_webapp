import { NextRequest, NextResponse } from 'next/server'

function backendEndpoint(path: string) {
    const versionedBase = process.env.NEXT_PUBLIC_BACKEND_API_URL?.replace(/^['"]|['"]$/g, '').replace(/\/$/, '')
    if (versionedBase) return `${versionedBase}/${path}`
    const hostBase = process.env.NEXT_PUBLIC_BACKEND_API_WITHOUT_VERSION?.replace(/^['"]|['"]$/g, '').replace(/\/$/, '')
    return hostBase ? `${hostBase}/trustfinder/api/v0/${path}` : null
}

function errorMessage(data: unknown, fallback: string) {
    if (!data || typeof data !== 'object') return fallback
    const body = data as Record<string, unknown>
    const candidate = body.detail ?? body.message ?? body.error
    if (typeof candidate === 'string') return candidate
    for (const value of Object.values(body)) {
        if (Array.isArray(value) && typeof value[0] === 'string') return value[0]
        if (typeof value === 'string') return value
    }
    return fallback
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : ''
        const otp = typeof body.otp === 'string' || typeof body.otp === 'number' ? String(body.otp) : ''
        if (!email || !/^\d{6}$/.test(otp)) return NextResponse.json({ error: 'A valid email and 6-digit OTP are required.' }, { status: 400 })

        const endpoint = backendEndpoint('auth/user/login/verify-otp/')
        if (!endpoint) return NextResponse.json({ error: 'Backend API not configured.' }, { status: 500 })

        const backendResponse = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, otp }), cache: 'no-store' })
        const data = await backendResponse.json().catch(() => ({}))
        if (!backendResponse.ok) return NextResponse.json({ error: errorMessage(data, 'Invalid or expired OTP.') }, { status: backendResponse.status })

        const bodyData = data && typeof data === 'object' ? data as Record<string, unknown> : {}
        const nested = bodyData.data && typeof bodyData.data === 'object' ? bodyData.data as Record<string, unknown> : {}
        const tokens = bodyData.tokens && typeof bodyData.tokens === 'object' ? bodyData.tokens as Record<string, unknown> : {}
        const nestedTokens = nested.tokens && typeof nested.tokens === 'object' ? nested.tokens as Record<string, unknown> : {}
        const token = bodyData.access ?? bodyData.access_token ?? bodyData.token ?? nested.access ?? nested.access_token ?? nested.token ?? tokens.access ?? tokens.access_token ?? nestedTokens.access ?? nestedTokens.access_token
        const response = NextResponse.json({ success: true, message: errorMessage(data, 'Login successful.') })
        if (typeof token === 'string' && token) {
            const forwardedProtocol = request.headers.get('x-forwarded-proto')?.split(',')[0]?.trim()
            const isHttps = forwardedProtocol ? forwardedProtocol === 'https' : request.nextUrl.protocol === 'https:'
            response.cookies.set('user_token', token, { httpOnly: true, secure: isHttps, sameSite: 'lax', path: '/', maxAge: 60 * 60 * 24 * 30 })
        }
        return response
    } catch (error) {
        console.error('User login verify OTP error:', error)
        return NextResponse.json({ error: 'Unable to contact the verification service.' }, { status: 502 })
    }
}
