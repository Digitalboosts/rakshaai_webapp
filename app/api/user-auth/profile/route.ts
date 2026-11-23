import { NextRequest, NextResponse } from 'next/server'

function profileEndpoint() {
    const versionedBase = process.env.NEXT_PUBLIC_BACKEND_API_URL?.replace(/^['"]|['"]$/g, '').replace(/\/$/, '')
    if (versionedBase) return `${versionedBase}/auth/user/profile/`
    const hostBase = process.env.NEXT_PUBLIC_BACKEND_API_WITHOUT_VERSION?.replace(/^['"]|['"]$/g, '').replace(/\/$/, '')
    return hostBase ? `${hostBase}/trustfinder/api/v0/auth/user/profile/` : null
}

export async function GET(request: NextRequest) {
    const token = request.cookies.get('user_token')?.value
    if (!token) return NextResponse.json({ error: 'Not authenticated.' }, { status: 401 })

    const endpoint = profileEndpoint()
    if (!endpoint) return NextResponse.json({ error: 'Backend API not configured.' }, { status: 500 })

    try {
        const backendResponse = await fetch(endpoint, {
            headers: { Authorization: `Bearer ${token}`, Accept: 'application/json' },
            cache: 'no-store',
        })
        const data = await backendResponse.json().catch(() => ({}))

        if (!backendResponse.ok) {
            const response = NextResponse.json({ error: 'Session expired or invalid.' }, { status: backendResponse.status })
            if (backendResponse.status === 401 || backendResponse.status === 403) response.cookies.delete('user_token')
            return response
        }

        const profile = data?.data?.user ?? data?.data ?? data?.user ?? data
        return NextResponse.json({ success: true, profile })
    } catch (error) {
        console.error('User profile error:', error)
        return NextResponse.json({ error: 'Unable to contact the profile service.' }, { status: 502 })
    }
}
