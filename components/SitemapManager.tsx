'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Textarea } from '@/components/ui/Textarea'
import { 
  RefreshCw, 
  Download, 
  Eye, 
  CheckCircle, 
  AlertCircle, 
  ExternalLink,
  Copy,
  Search,
  Filter
} from 'lucide-react'

interface SitemapEntry {
  url: string
  lastModified: string
  changeFrequency: string
  priority: number
}

interface SitemapStats {
  totalEntries: number
  staticPages: number
  dynamicPages: number
  lastGenerated: string
  averagePriority: number
  changeFrequencies: Record<string, number>
}

// Simple Badge component
const Badge = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${className || 'bg-gray-100 text-gray-800'}`}>
    {children}
  </span>
)

// Simple Alert components
const Alert = ({ children, variant }: { children: React.ReactNode, variant?: string }) => (
  <div className={`p-4 rounded-lg border ${
    variant === 'destructive' 
      ? 'bg-red-50 border-red-200 text-red-800' 
      : 'bg-blue-50 border-blue-200 text-blue-800'
  }`}>
    {children}
  </div>
)

const AlertDescription = ({ children }: { children: React.ReactNode }) => (
  <div className="text-sm">{children}</div>
)

export function SitemapManager() {
  const [sitemap, setSitemap] = useState<SitemapEntry[]>([])
  const [stats, setStats] = useState<SitemapStats | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterFrequency, setFilterFrequency] = useState<string>('all')
  const [filterPriority, setFilterPriority] = useState<string>('all')

  const fetchSitemap = async () => {
    setLoading(true)
    setError(null)
    
    try {
      const response = await fetch('/api/sitemap?format=json')
      const data = await response.json()
      
      if (data.success) {
        setSitemap(data.sitemap)
        calculateStats(data.sitemap)
      } else {
        setError('Failed to fetch sitemap data')
      }
    } catch (err) {
      setError('Error fetching sitemap: ' + (err as Error).message)
    } finally {
      setLoading(false)
    }
  }

  const calculateStats = (sitemapData: SitemapEntry[]) => {
    const staticPages = sitemapData.filter(entry => 
      !entry.url.includes('/check/') && 
      !entry.url.includes('/blog/') &&
      !entry.url.includes('/scan/')
    ).length

    const changeFreqs: Record<string, number> = {}
    let totalPriority = 0

    sitemapData.forEach(entry => {
      changeFreqs[entry.changeFrequency] = (changeFreqs[entry.changeFrequency] || 0) + 1
      totalPriority += entry.priority
    })

    setStats({
      totalEntries: sitemapData.length,
      staticPages,
      dynamicPages: sitemapData.length - staticPages,
      lastGenerated: new Date().toISOString(),
      averagePriority: totalPriority / sitemapData.length,
      changeFrequencies: changeFreqs
    })
  }

  const downloadSitemap = async () => {
    try {
      const response = await fetch('/api/sitemap')
      const xml = await response.text()
      const blob = new Blob([xml], { type: 'application/xml' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'sitemap.xml'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    } catch (err) {
      setError('Error downloading sitemap: ' + (err as Error).message)
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    // You can add a toast notification here
  }

  const filteredSitemap = sitemap.filter(entry => {
    const matchesSearch = entry.url.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFrequency = filterFrequency === 'all' || entry.changeFrequency === filterFrequency
    const matchesPriority = 
      filterPriority === 'all' ||
      (filterPriority === 'high' && entry.priority >= 0.8) ||
      (filterPriority === 'medium' && entry.priority >= 0.5 && entry.priority < 0.8) ||
      (filterPriority === 'low' && entry.priority < 0.5)
    
    return matchesSearch && matchesFrequency && matchesPriority
  })

  useEffect(() => {
    fetchSitemap()
  }, [])

  const getPriorityColor = (priority: number) => {
    if (priority >= 0.8) return 'bg-green-100 text-green-800'
    if (priority >= 0.5) return 'bg-yellow-100 text-yellow-800'
    return 'bg-gray-100 text-gray-800'
  }

  const getFrequencyColor = (frequency: string) => {
    const colors: Record<string, string> = {
      'always': 'bg-red-100 text-red-800',
      'hourly': 'bg-orange-100 text-orange-800',
      'daily': 'bg-blue-100 text-blue-800',
      'weekly': 'bg-purple-100 text-purple-800',
      'monthly': 'bg-indigo-100 text-indigo-800',
      'yearly': 'bg-gray-100 text-gray-800',
      'never': 'bg-gray-100 text-gray-800'
    }
    return colors[frequency] || 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Sitemap Manager</h1>
        <div className="flex gap-2">
          <Button onClick={fetchSitemap} disabled={loading}>
            <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
          <Button onClick={downloadSitemap} variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Download XML
          </Button>
        </div>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {/* Stats Cards */}
      {stats && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Entries
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalEntries}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Static Pages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{stats.staticPages}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Dynamic Pages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{stats.dynamicPages}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Avg Priority
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">
                {stats.averagePriority.toFixed(2)}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Filters & Search</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search URLs..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <select
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={filterFrequency}
              onChange={(e) => setFilterFrequency(e.target.value)}
            >
              <option value="all">All Frequencies</option>
              <option value="always">Always</option>
              <option value="hourly">Hourly</option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </select>
            
            <select
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={filterPriority}
              onChange={(e) => setFilterPriority(e.target.value)}
            >
              <option value="all">All Priorities</option>
              <option value="high">High (0.8+)</option>
              <option value="medium">Medium (0.5-0.8)</option>
              <option value="low">Low (&lt;0.5)</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Sitemap Entries */}
      <Card>
        <CardHeader>
          <CardTitle>Sitemap Entries ({filteredSitemap.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {filteredSitemap.map((entry, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <code className="text-sm font-mono bg-gray-100 px-2 py-1 rounded-md truncate">
                      {entry.url}
                    </code>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => copyToClipboard(entry.url)}
                    >
                      <Copy className="w-3 h-3" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => window.open(entry.url, '_blank')}
                    >
                      <ExternalLink className="w-3 h-3" />
                    </Button>
                  </div>
                  
                  <div className="flex gap-2 text-sm text-gray-600">
                    <span>Last Modified: {new Date(entry.lastModified).toLocaleDateString()}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 ml-4">
                  <Badge className={getPriorityColor(entry.priority)}>
                    {entry.priority.toFixed(1)}
                  </Badge>
                  <Badge className={getFrequencyColor(entry.changeFrequency)}>
                    {entry.changeFrequency}
                  </Badge>
                </div>
              </div>
            ))}
            
            {filteredSitemap.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                {searchTerm || filterFrequency !== 'all' || filterPriority !== 'all' 
                  ? 'No entries match your filters' 
                  : 'No sitemap entries found'
                }
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}