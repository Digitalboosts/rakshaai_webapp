import { NextRequest, NextResponse } from 'next/server'

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

        const versionedBase = process.env.NEXT_PUBLIC_BACKEND_API_URL?.replace(/^['"]|['"]$/g, '').replace(/\/$/, '')
        const hostBase = process.env.NEXT_PUBLIC_BACKEND_API_WITHOUT_VERSION?.replace(/^['"]|['"]$/g, '').replace(/\/$/, '')
        const endpoint = versionedBase
            ? `${versionedBase}/auth/registration/verify-otp/`
            : hostBase
                ? `${hostBase}/trustfinder/api/v0/auth/registration/verify-otp/`
                : null
        if (!endpoint) return NextResponse.json({ error: 'Backend API not configured.' }, { status: 500 })

        const response = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, role: 'user', otp: Number(otp) }),
            cache: 'no-store',
        })
        const data = await response.json().catch(() => ({}))
        if (!response.ok) return NextResponse.json({ error: errorMessage(data, 'Invalid or expired OTP.') }, { status: response.status })

        // Registration verification also logs the user in. Store the access
        // token exactly as the login flow does, without exposing it to client JS.
        const bodyData = data && typeof data === 'object' ? data as Record<string, unknown> : {}
        const nested = bodyData.data && typeof bodyData.data === 'object' ? bodyData.data as Record<string, unknown> : {}
        const tokens = bodyData.tokens && typeof bodyData.tokens === 'object' ? bodyData.tokens as Record<string, unknown> : {}
        const nestedTokens = nested.tokens && typeof nested.tokens === 'object' ? nested.tokens as Record<string, unknown> : {}
        const token = bodyData.access ?? bodyData.access_token ?? bodyData.token ?? nested.access ?? nested.access_token ?? nested.token ?? tokens.access ?? tokens.access_token ?? nestedTokens.access ?? nestedTokens.access_token

        if (typeof token !== 'string' || !token) {
            console.error('Registration verification succeeded without an access token.')
            return NextResponse.json({ error: 'Account created, but we could not start your session. Please log in.' }, { status: 502 })
        }

        const clientResponse = NextResponse.json({ success: true, message: errorMessage(data, 'Registration and login successful.') })
        const forwardedProtocol = request.headers.get('x-forwarded-proto')?.split(',')[0]?.trim()
        const isHttps = forwardedProtocol ? forwardedProtocol === 'https' : request.nextUrl.protocol === 'https:'
        clientResponse.cookies.set('user_token', token, {
            httpOnly: true,
            secure: isHttps,
            sameSite: 'lax',
            path: '/',
            maxAge: 60 * 60 * 24 * 30,
        })
        return clientResponse
    } catch (error) {
        console.error('User registration verify OTP error:', error)
        return NextResponse.json({ error: 'Unable to contact the verification service.' }, { status: 502 })
    }
}
