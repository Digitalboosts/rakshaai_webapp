import { NextRequest, NextResponse } from "next/server";
import { hasValidUserSession } from "@/lib/auth/validate-user-session";
const NEXT_PUBLIC_BACKEND_API_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL;

function getBackendApiUrl(path: string) {
    const baseUrl = (NEXT_PUBLIC_BACKEND_API_URL || '').replace(/^['"]+|['"]+$/g, '').replace(/\/?$/, '/');
    return `${baseUrl}${path}`;
}

async function triggerTrustScoreRecalculation(slug: string, token: string) {
    try {
        const apiUrl = `${getBackendApiUrl('calculate/trust-score/')}?text=${encodeURIComponent(slug)}`;

        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });

        const responseText = await response.text();
        let responseBody: unknown = responseText;

        try {
            responseBody = responseText ? JSON.parse(responseText) : null;
        } catch {
            responseBody = responseText;
        }

        if (!response.ok) {
            console.error("Trust score recalculation failed:", {
                slug,
                status: response.status,
                response: responseBody,
            });
            return;
        }

        console.log("Trust score recalculation response:", {
            slug,
            status: response.status,
            response: responseBody,
        });
    } catch (error) {
        console.error("Error triggering trust score recalculation:", error);
    }
}

async function triggerMaliciousWebsiteCheck(slug: string, token: string) {
    if (!slug || !NEXT_PUBLIC_BACKEND_API_URL || !token) return;

    try {
        const apiUrl = `${getBackendApiUrl('calculate/malicious-website/')}?slug=${encodeURIComponent(slug)}`;

        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });

        const responseText = await response.text();
        let responseBody: unknown = responseText;

        try {
            responseBody = responseText ? JSON.parse(responseText) : null;
        } catch {
            responseBody = responseText;
        }

        if (!response.ok) {
            console.error("Malicious website check failed:", {
                slug,
                status: response.status,
                response: responseBody,
            });
            return;
        }

        console.log("Malicious website check response:", {
            slug,
            status: response.status,
            response: responseBody,
        });

        await triggerTrustScoreRecalculation(slug, token);
    } catch (error) {
        console.error("Error triggering malicious website check:", error);
    }
}

/**
 * Next.js API Route - Trust Score Proxy
 * 
 * Purpose: This endpoint acts as a secure proxy between the frontend and the external backend API.
 * 
 * Security Benefits:
 * 1. Hides the actual backend API URL from client-side code and browser network inspection
 * 2. Prevents exposure of backend infrastructure details (IP addresses, ports, endpoints)
 * 3. Allows backend URL changes without modifying frontend code
 * 4. Provides a single point to add authentication, rate limiting, or request validation
 * 
 * Flow: Frontend → /api/trust-score → External Backend API → Response to Frontend
 */
export async function POST(request: NextRequest) {
    try {
        const token = request.cookies.get('user_token')?.value;
        if (!(await hasValidUserSession(request))) {
            return NextResponse.json(
                { error: "Please log in to run a scam check.", code: "AUTH_REQUIRED" },
                { status: 401 }
            );
        }
        if (!token) {
            return NextResponse.json(
                { error: "Please log in to run a scam check.", code: "AUTH_REQUIRED" },
                { status: 401 }
            );
        }

        const { url } = await request.json();

        if (!url) {
            return NextResponse.json({ error: "URL is required" }, { status: 400 });
        }

        // External backend API URL - Real API endpoint
        const backendApiUrl = getBackendApiUrl('calculate/trust-score/');

        // Construct the full API URL with query parameters
        const apiUrl = `${backendApiUrl}?text=${encodeURIComponent(url)}`;

        // Forward request to external backend API
        // The HttpOnly cookie is read only on this server route. The browser
        // never receives or handles the bearer token directly.
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            cache: 'no-store',
        });

        // if (!response.ok) {
        //     throw new Error('Failed to fetch trust score');
        // }

        const result = await response.json();

        if (result?.data?.malicious_website_response === false) {
            const slug = result.slug;
            void triggerMaliciousWebsiteCheck(slug || url, token);
        }

        // Preserve the backend status so the client can distinguish expected
        // domain states such as SITE_NOT_LIVE from genuine server failures.
        return NextResponse.json(result, { status: response.status });
    } catch (error) {
        console.error("Error fetching trust score:", error);
        return NextResponse.json(
            { error: "Failed to fetch trust score data" },
            { status: 500 }
        );
    }
}
