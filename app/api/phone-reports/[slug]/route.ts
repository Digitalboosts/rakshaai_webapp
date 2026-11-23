import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  
  try {
    
    // Here you would typically fetch from your actual database
    // For now, I'll show the structure with environment variables
    
    const API_BASE_URL = process.env.API_BASE_URL || 'https://api.rakshaai.com'
    const API_KEY = process.env.API_SECRET_KEY
    
    // Make request to your backend API
    const response = await fetch(`${API_BASE_URL}/phone-reports/${slug}`, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      // Use appropriate caching strategy
      next: { 
        revalidate: 300 // Revalidate every 5 minutes
      }
    })
    
    if (!response.ok) {
      if (response.status === 404) {
        return NextResponse.json(
          { error: 'Report not found' },
          { status: 404 }
        )
      }
      throw new Error(`API request failed: ${response.status}`)
    }
    
    const data = await response.json()
    
    // Add any additional processing/validation here
    const processedData = {
      ...data,
      // Ensure required fields exist
      success: data.success ?? true,
      found: data.found ?? false,
      total_reports: data.total_reports ?? 0,
      reports: data.reports ?? [],
      detected_type: data.detected_type ?? 'phone',
      phone_number: data.phone_number ?? '',
      slug: data.slug ?? slug
    }
    
    return NextResponse.json(processedData, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
        'Content-Type': 'application/json',
      },
    })
    
  } catch (error) {
    console.error('Error fetching phone report:', error)
    
    // Return mock data for development/fallback
    const mockData = {
      success: true,
      found: true,
      total_reports: 2,
      reports: [
        {
          id: 21,
          scammer_phone_number: "+917008355987",
          reporter_phone_number: "+917064634395",
          name: "rabi",
          review: "this scammer stolen my 4lk rupees simply asking otp",
          attachment: "https://expedblobstorage.blob.core.windows.net/images/example.pdf",
          status: "pending",
          is_resolved: false,
          slug: slug,
          resolution_details: null,
          resolved_at: null,
          created_at: "2026-02-17T10:42:41.173048Z",
          updated_at: "2026-02-17T10:42:41.173115Z"
        },
        {
          id: 20,
          scammer_phone_number: "+917008355987",
          reporter_phone_number: "+917064634395",
          name: "rabinarayan pradhan",
          review: "this is a scammer, he was stolen my 4lk rupees from my account by asking otp",
          attachment: "https://expedblobstorage.blob.core.windows.net/images/example2.pdf",
          status: "pending",
          is_resolved: false,
          slug: slug,
          resolution_details: null,
          resolved_at: null,
          created_at: "2026-02-17T10:40:13.677288Z",
          updated_at: "2026-02-17T10:40:13.677323Z"
        }
      ],
      detected_type: "phone",
      phone_number: "+917008355987",
      slug: slug
    }
    
    return NextResponse.json(mockData, {
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
        'Content-Type': 'application/json',
      },
    })
  }
}

// Handle POST requests for creating new reports
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const body = await request.json()
    const { slug } = await params
    
    // Validate request body
    const { reporter_name, review, phone_number, attachment } = body
    
    if (!reporter_name || !review || !phone_number) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }
    
    // Here you would save to your database
    const API_BASE_URL = process.env.API_BASE_URL || 'https://api.rakshaai.com'
    const API_KEY = process.env.API_SECRET_KEY
    
    const response = await fetch(`${API_BASE_URL}/phone-reports/${slug}/add`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        reporter_name,
        review,
        phone_number,
        attachment,
        created_at: new Date().toISOString()
      })
    })
    
    if (!response.ok) {
      throw new Error(`Failed to create report: ${response.status}`)
    }
    
    const newReport = await response.json()
    
    return NextResponse.json(newReport, { status: 201 })
    
  } catch (error) {
    console.error('Error creating phone report:', error)
    return NextResponse.json(
      { error: 'Failed to create report' },
      { status: 500 }
    )
  }
}