import { NextRequest, NextResponse } from "next/server";

const NEXT_PUBLIC_BACKEND_API_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL;

export async function POST(request: NextRequest) {
    try {
        if (!NEXT_PUBLIC_BACKEND_API_URL) {
            return NextResponse.json(
                { error: "Backend API URL is not configured" },
                { status: 500 }
            );
        }

        // Get the form data from the request
        const formData = await request.formData();
        const turnstileToken = formData.get('turnstileToken') as string;
        // Forward the request to the backend API
        const response = await fetch(`${NEXT_PUBLIC_BACKEND_API_URL}phone-scam-report/`, {
            method: "POST",
            headers: {
                'Authorization': turnstileToken ? `Bearer ${turnstileToken}` : '',
            },
            body: formData,
        });
        if (!response.ok) {
            throw new Error(`Backend API responded with status: ${response.status}`);
        }

        const result = await response.json();
        return NextResponse.json(result);

    } catch (error) {
        console.error("Phone scam report API error:", error);
        return NextResponse.json(
            { error: "Failed to submit phone scam report" },
            { status: 500 }
        );
    }
}
