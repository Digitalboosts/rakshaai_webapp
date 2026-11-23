import { NextResponse } from 'next/server'
import { generateSitemapEntries } from '@/lib/generate-sitemap'

export const revalidate = 3600

function escapeXml(str: string): string {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

function formatDate(value: Date | string | undefined): string | null {
    if (!value) return null
    const d = value instanceof Date ? value : new Date(value)
    return isNaN(d.getTime()) ? null : d.toISOString().split('T')[0]
}

export async function GET() {
    const entries = await generateSitemapEntries()

    const urls = entries
        .map((entry) => {
            const lastmod = formatDate(entry.lastModified)
            return [
                '  <url>',
                `    <loc>${escapeXml(entry.url)}</loc>`,
                lastmod ? `    <lastmod>${lastmod}</lastmod>` : '',
                entry.changeFrequency ? `    <changefreq>${entry.changeFrequency}</changefreq>` : '',
                entry.priority != null ? `    <priority>${entry.priority.toFixed(2)}</priority>` : '',
                '  </url>',
            ]
                .filter(Boolean)
                .join('\n')
        })
        .join('\n')

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urls}
</urlset>`

    return new NextResponse(xml, {
        headers: {
            'Content-Type': 'application/xml; charset=utf-8',
            'Cache-Control': 'public, max-age=3600, s-maxage=3600',
        },
    })
}
