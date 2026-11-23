import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_API_URL}trending-websites/`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                cache: "no-store",
            }
        );

        if (!response.ok) {
            return NextResponse.json(
                { success: false, error: "Failed to fetch trending websites" },
                { status: response.status }
            );
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error("Error fetching trending websites:", error);
        return NextResponse.json(
            { success: false, error: "Internal server error" },
            { status: 500 }
        );
    }
}
