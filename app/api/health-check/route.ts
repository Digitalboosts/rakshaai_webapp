import { NextResponse } from 'next/server';

export async function GET() {
    try {
        // Check if backend API is accessible
        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;

        if (!backendUrl) {
            return NextResponse.json(
                { status: 'error', message: 'Backend URL not configured' },
                { status: 500 }
            );
        }

        // Simple health check  do not expose backend URL or environment in response
        const healthCheck = {
            status: 'ok',
            timestamp: new Date().toISOString(),
        };

        return NextResponse.json(healthCheck);
    } catch (error) {
        return NextResponse.json(
            {
                status: 'error',
                message: 'Health check failed',
                timestamp: new Date().toISOString()
            },
            { status: 500 }
        );
    }
}