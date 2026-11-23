import { NextRequest, NextResponse } from 'next/server'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_PATTERN = /^[6-9]\d{9}$/

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
        const fullName = typeof body.full_name === 'string' ? body.full_name.trim() : ''
        const phone = typeof body.phone === 'string' ? body.phone.replace(/\D/g, '') : ''
        const birthDate = typeof body.birth_date === 'string' ? body.birth_date : ''
        const gender = typeof body.gender === 'string' ? body.gender.toLowerCase() : ''
        const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : ''

        if (!fullName || !PHONE_PATTERN.test(phone) || !birthDate || !['male', 'female', 'other'].includes(gender) || !EMAIL_PATTERN.test(email)) {
            return NextResponse.json({ error: 'Please provide valid registration details.' }, { status: 400 })
        }

        const versionedBase = process.env.NEXT_PUBLIC_BACKEND_API_URL?.replace(/^['"]|['"]$/g, '').replace(/\/$/, '')
        const hostBase = process.env.NEXT_PUBLIC_BACKEND_API_WITHOUT_VERSION?.replace(/^['"]|['"]$/g, '').replace(/\/$/, '')
        const endpoint = versionedBase
            ? `${versionedBase}/auth/registration/send-otp/`
            : hostBase
                ? `${hostBase}/trustfinder/api/v0/auth/registration/send-otp/`
                : null
        if (!endpoint) return NextResponse.json({ error: 'Backend API not configured.' }, { status: 500 })

        const response = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ full_name: fullName, phone, birth_date: birthDate, gender, email, role: 'user' }),
            cache: 'no-store',
        })
        const data = await response.json().catch(() => ({}))
        if (!response.ok) return NextResponse.json({ error: errorMessage(data, 'Unable to send OTP.') }, { status: response.status })

        return NextResponse.json({ success: true, message: errorMessage(data, 'OTP sent successfully.') })
    } catch (error) {
        console.error('User registration send OTP error:', error)
        return NextResponse.json({ error: 'Unable to contact the registration service.' }, { status: 502 })
    }
}
