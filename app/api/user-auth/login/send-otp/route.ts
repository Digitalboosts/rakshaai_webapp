import { NextRequest, NextResponse } from 'next/server'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

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
        if (!EMAIL_PATTERN.test(email)) return NextResponse.json({ error: 'Enter a valid email address.' }, { status: 400 })

        const endpoint = backendEndpoint('auth/user/login/send-otp/')
        if (!endpoint) return NextResponse.json({ error: 'Backend API not configured.' }, { status: 500 })

        const backendResponse = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }), cache: 'no-store' })
        const data = await backendResponse.json().catch(() => ({}))
        if (!backendResponse.ok) return NextResponse.json({ error: errorMessage(data, 'Unable to send login OTP.') }, { status: backendResponse.status })
        return NextResponse.json({ success: true, message: errorMessage(data, 'OTP sent successfully.') })
    } catch (error) {
        console.error('User login send OTP error:', error)
        return NextResponse.json({ error: 'Unable to contact the login service.' }, { status: 502 })
    }
}
