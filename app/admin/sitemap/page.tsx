import { Metadata } from 'next'
import { SitemapManager } from '@/components/SitemapManager'

export const metadata: Metadata = {
  title: 'Sitemap Manager | Admin Panel',
  description: 'Manage and monitor your website sitemap',
}

export default function SitemapPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <SitemapManager />
    </div>
  )
}