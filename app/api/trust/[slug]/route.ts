import { NextRequest, NextResponse } from "next/server";

const NEXT_PUBLIC_BACKEND_API_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL;

export async function GET(request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
    try {
        const { slug } = await params;

        if (!slug) {
            return NextResponse.json(
                { error: "Slug parameter is required" },
                { status: 400 }
            );
        }

        if (!NEXT_PUBLIC_BACKEND_API_URL) {
            return NextResponse.json(
                { error: "Backend API URL is not configured" },
                { status: 500 }
            );
        }

        // Get authorization header from the request
        const authorization = request.headers.get('authorization');

        const backendUrl = `${NEXT_PUBLIC_BACKEND_API_URL}trust/?slug=${encodeURIComponent(slug)}`;

        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
        };

        if (authorization) {
            headers['Authorization'] = authorization;
        }

        // Forward the request to the backend API
        const response = await fetch(backendUrl, {
            method: 'GET',
            headers,
        });

        if (!response.ok) {
            const errorText = await response.text();
            
            // If backend returns a 403 Turnstile error, provide a more helpful error message
            if (response.status === 403 && errorText.includes("Turnstile")) {
                return NextResponse.json(
                    { error: "Access token validation failed. This may be due to an expired or missing security token. Please try refreshing the page or accessing from the original URL." },
                    { status: 403 }
                );
            }
            
            throw new Error(`Backend API responded with status: ${response.status} - ${errorText}`);
        }

        const result = await response.json();
        return NextResponse.json(result);

    } catch (error) {
        console.error("Trust data API error:", error);
        return NextResponse.json(
            { error: "Failed to fetch trust data" },
            { status: 500 }
        );
    }
}
