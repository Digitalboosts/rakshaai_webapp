import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const filter = searchParams.get('filter') || 'today';
  const BACKEND_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL;

    try {
        const response = await fetch(
            `${BACKEND_BASE_URL}dashboard/overview/?filter=${filter}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        return NextResponse.json(data);
    } catch (error) {
        console.error('Dashboard API proxy error:', error);

        return NextResponse.json(
            {
                success: false,
                error: 'Failed to fetch dashboard data',
                details: error instanceof Error ? error.message : 'Unknown error'
            },
            { status: 500 }
        );
    }
}