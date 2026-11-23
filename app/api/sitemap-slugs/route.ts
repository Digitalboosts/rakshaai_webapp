import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type') // 'daily-searches' | 'weekly-searches'

    const BASE = (process.env.NEXT_PUBLIC_BACKEND_API_URL || '').replace(/\/?$/, '/')
    const API_KEY = (process.env.TRUSTFINDER_API_KEY || process.env.BACKEND_API_KEY || '').replace(/^['"]+|['"]+$/g, '')

    if (!BASE) {
        return NextResponse.json({ slugs: [], count: 0, error: 'Backend not configured' }, { status: 503 })
    }

    const headers: Record<string, string> = { 'Content-Type': 'application/json' }
    if (API_KEY) headers['X-API-KEY'] = API_KEY

    let url = `${BASE}trust-data/sitemap-slugs/`
    if (type === 'daily-searches')   url += '?days=1'
    else if (type === 'weekly-searches')  url += '?days=7'
    else if (type === 'daily-scammers')   url += '?days=1&scammer=true'
    else if (type === 'weekly-scammers')  url += '?days=7&scammer=true'
    console.log('Fetching sitemap slugs from:', url)
    try {
        const res = await fetch(url, { headers, next: { revalidate: 300 } })
        if (!res.ok) return NextResponse.json({ slugs: [], count: 0, error: 'Backend error' }, { status: res.status })
        const data = await res.json()
        return NextResponse.json({
            slugs: data?.slugs ?? [],
            count: data?.count ?? 0,
            type: data?.type ?? type ?? 'unknown',
        })
    } catch {
        return NextResponse.json({ slugs: [], count: 0, error: 'Fetch failed' }, { status: 500 })
    }
}
