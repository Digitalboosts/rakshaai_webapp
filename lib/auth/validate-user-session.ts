import 'server-only'

import type { NextRequest } from 'next/server'

function profileEndpoint() {
    const versionedBase = process.env.NEXT_PUBLIC_BACKEND_API_URL?.replace(/^['"]|['"]$/g, '').replace(/\/$/, '')
    if (versionedBase) return `${versionedBase}/auth/user/profile/`

    const hostBase = process.env.NEXT_PUBLIC_BACKEND_API_WITHOUT_VERSION?.replace(/^['"]|['"]$/g, '').replace(/\/$/, '')
    return hostBase ? `${hostBase}/trustfinder/api/v0/auth/user/profile/` : null
}

export async function hasValidUserSession(request: NextRequest) {
    const token = request.cookies.get('user_token')?.value
    const endpoint = profileEndpoint()
    if (!token || !endpoint) return false

    try {
        const response = await fetch(endpoint, {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/json',
            },
            cache: 'no-store',
        })
        return response.ok
    } catch (error) {
        console.error('Unable to validate user session:', error)
        return false
    }
}
