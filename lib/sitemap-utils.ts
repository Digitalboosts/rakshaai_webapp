// Utility functions for sitemap management and SEO optimization

import { MetadataRoute } from 'next'

export interface SitemapEntry {
  url: string
  lastModified?: Date
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority?: number
  alternates?: {
    languages?: Record<string, string>
  }
}

export interface PageConfig {
  path: string
  priority: number
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  includeInSitemap?: boolean
  requiresAuth?: boolean
  isPublic?: boolean
  lastModified?: Date
  hasLocaleVariants?: boolean
}

export class SitemapGenerator {
  private readonly baseUrl: string
  private readonly supportedLocales: readonly string[]
  
  constructor(baseUrl: string, locales: readonly string[] = ['en']) {
    this.baseUrl = baseUrl.replace(/\/$/, '') // Remove trailing slash
    this.supportedLocales = locales
  }
  
  /**
   * Generate sitemap entries for static pages
   */
  generateStaticEntries(pages: PageConfig[]): MetadataRoute.Sitemap {
    const entries: MetadataRoute.Sitemap = []

    pages
      .filter(page => page.includeInSitemap !== false && page.isPublic !== false)
      .forEach(page => {
        const lastModified = page.lastModified ?? new Date()

        entries.push({
          url: `${this.baseUrl}${page.path}`,
          lastModified,
        })

        // Only add locale variants when the page actually has translated versions
        if (page.hasLocaleVariants) {
          this.supportedLocales.forEach(locale => {
            entries.push({
              url: `${this.baseUrl}/${locale}${page.path}`,
              lastModified,
            })
          })
        }
      })

    return entries
  }
  
  /**
   * Generate sitemap entries for dynamic content
   */
  generateDynamicEntries<T extends { slug: string; updatedAt?: Date | string }>(
    items: T[],
    pathTemplate: (item: T) => string,
    priority: number = 0.6,
    changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' = 'weekly'
  ): MetadataRoute.Sitemap {
    const entries: MetadataRoute.Sitemap = []
    
    items.forEach(item => {
      const path = pathTemplate(item)
      const lastModified = item.updatedAt ? new Date(item.updatedAt) : new Date()
      
      // Add default locale entry
      entries.push({
        url: `${this.baseUrl}${path}`,
        lastModified,
      })

      // Add localized entries
      this.supportedLocales.forEach(locale => {
        entries.push({
          url: `${this.baseUrl}/${locale}${path}`,
          lastModified,
        })
      })
    })
    
    return entries
  }
  
  /**
   * Merge multiple sitemap entry arrays
   */
  mergeEntries(...entryArrays: MetadataRoute.Sitemap[]): MetadataRoute.Sitemap {
    return entryArrays.flat()
  }
  
  /**
   * Remove duplicate URLs from sitemap
   */
  removeDuplicates(entries: MetadataRoute.Sitemap): MetadataRoute.Sitemap {
    const seen = new Set<string>()
    return entries.filter(entry => {
      if (seen.has(entry.url)) {
        return false
      }
      seen.add(entry.url)
      return true
    })
  }
  
  /**
   * Sort sitemap entries by priority (descending) and URL (ascending)
   */
  sortEntries(entries: MetadataRoute.Sitemap): MetadataRoute.Sitemap {
    return [...entries].sort((a, b) => a.url.localeCompare(b.url))
  }
  
  /**
   * Validate sitemap entries
   */
  validateEntries(entries: MetadataRoute.Sitemap): {
    valid: MetadataRoute.Sitemap
    invalid: Array<{ entry: any, errors: string[] }>
  } {
    const valid: MetadataRoute.Sitemap = []
    const invalid: Array<{ entry: any, errors: string[] }> = []
    
    entries.forEach(entry => {
      const errors: string[] = []
      
      // Validate URL
      try {
        new URL(entry.url)
      } catch {
        errors.push('Invalid URL format')
      }
      
      // Validate priority
      if (entry.priority !== undefined && (entry.priority < 0 || entry.priority > 1)) {
        errors.push('Priority must be between 0 and 1')
      }
      
      // Validate change frequency
      const validFrequencies = ['always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never']
      if (entry.changeFrequency && !validFrequencies.includes(entry.changeFrequency)) {
        errors.push('Invalid change frequency')
      }
      
      if (errors.length === 0) {
        valid.push(entry)
      } else {
        invalid.push({ entry, errors })
      }
    })
    
    return { valid, invalid }
  }
}

/**
 * Default page configurations for common website pages
 */
export const DEFAULT_PAGE_CONFIGS: Record<string, Omit<PageConfig, 'path'>> = {
  home: {
    priority: 1.0,
    changeFrequency: 'daily',
    includeInSitemap: true,
    isPublic: true,
  },
  about: {
    priority: 0.8,
    changeFrequency: 'monthly',
    includeInSitemap: true,
    isPublic: true,
  },
  contact: {
    priority: 0.7,
    changeFrequency: 'monthly',
    includeInSitemap: true,
    isPublic: true,
  },
  faq: {
    priority: 0.6,
    changeFrequency: 'weekly',
    includeInSitemap: true,
    isPublic: true,
  },
  blog: {
    priority: 0.8,
    changeFrequency: 'daily',
    includeInSitemap: true,
    isPublic: true,
  },
  'privacy-policy': {
    priority: 0.4,
    changeFrequency: 'yearly',
    includeInSitemap: true,
    isPublic: true,
  },
  'terms-of-service': {
    priority: 0.4,
    changeFrequency: 'yearly',
    includeInSitemap: true,
    isPublic: true,
  },
  admin: {
    priority: 0.1,
    changeFrequency: 'never',
    includeInSitemap: false,
    requiresAuth: true,
    isPublic: false,
  },
}

/**
 * Generate XML sitemap string
 */
export function generateSitemapXML(entries: MetadataRoute.Sitemap): string {
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>'
  const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
  const urlsetClose = '</urlset>'
  
  const urls = entries.map(entry => {
    const loc = `    <loc>${escapeXml(entry.url)}</loc>`
    const lastmod = entry.lastModified 
      ? `    <lastmod>${new Date(entry.lastModified).toISOString().split('T')[0]}</lastmod>`
      : ''
    const changefreq = entry.changeFrequency 
      ? `    <changefreq>${entry.changeFrequency}</changefreq>`
      : ''
    const priority = entry.priority !== undefined 
      ? `    <priority>${entry.priority.toFixed(1)}</priority>`
      : ''
    
    const urlContent = [loc, lastmod, changefreq, priority]
      .filter(Boolean)
      .join('\n')
    
    return `  <url>\n${urlContent}\n  </url>`
  }).join('\n')
  
  return [xmlHeader, urlsetOpen, urls, urlsetClose].join('\n')
}

/**
 * Escape XML special characters
 */
function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}