import { NextRequest, NextResponse } from 'next/server'
import { generateSitemapEntries as generateSitemap } from '@/lib/generate-sitemap'

// API route for manual sitemap generation and debugging
export async function GET(request: NextRequest) {
  try {
    const sitemap = await generateSitemap()
    
    // Check if client wants JSON format
    const url = new URL(request.url)
    const format = url.searchParams.get('format')
    
    if (format === 'json') {
      return NextResponse.json({
        success: true,
        count: sitemap.length,
        sitemap,
        generated: new Date().toISOString()
      })
    }
    
    // Generate XML format
    const xml = generateSitemapXML(sitemap)
    
    return new NextResponse(xml, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
      },
    })
  } catch (error) {
    console.error('Sitemap generation error:', error)
    return NextResponse.json(
      { error: 'Failed to generate sitemap' },
      { status: 500 }
    )
  }
}

function generateSitemapXML(sitemap: any[]): string {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemap.map(entry => `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastModified.toISOString().split('T')[0]}</lastmod>
    <changefreq>${entry.changeFrequency}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`).join('\n')}
</urlset>`
  
  return xml
}