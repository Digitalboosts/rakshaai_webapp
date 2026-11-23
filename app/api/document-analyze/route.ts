import { NextRequest, NextResponse } from "next/server";
import { hasValidUserSession } from "@/lib/auth/validate-user-session";

const NEXT_PUBLIC_BACKEND_API_WITHOUT_VERSION = process.env.NEXT_PUBLIC_BACKEND_API_WITHOUT_VERSION;
const API_KEY = process.env.TRUSTFINDER_API_KEY || process.env.BACKEND_API_KEY || "";

const MAX_FILE_SIZE = 15 * 1024 * 1024; // 15MB

/**
 * Next.js API Route - Document Vision Analysis Proxy
 *
 * Flow: Frontend → /api/document-analyze → External Backend API → Response to Frontend
 * Hides the backend URL/API key from the client and forwards the uploaded file as multipart/form-data.
 */
export async function POST(request: NextRequest) {
    try {
        const token = request.cookies.get("user_token")?.value;
        if (!token || !(await hasValidUserSession(request))) {
            return NextResponse.json(
                { error: "Please log in to analyze a document.", code: "AUTH_REQUIRED" },
                { status: 401 }
            );
        }

        const backendBase = (NEXT_PUBLIC_BACKEND_API_WITHOUT_VERSION || "").replace(/^['"]+|['"]+$/g, "");
        if (!backendBase) {
            return NextResponse.json({ error: "Backend API is not configured" }, { status: 500 });
        }

        const incoming = await request.formData();
        const document = incoming.get("document") as File | null;

        if (!document) {
            return NextResponse.json({ error: "Please attach a document to analyze" }, { status: 400 });
        }

        if (document.size > MAX_FILE_SIZE) {
            return NextResponse.json({ error: "File is too large. Maximum size is 15MB." }, { status: 400 });
        }

        const forwardData = new FormData();
        forwardData.append("document", document);

        const apiUrl = `${backendBase.replace(/\/$/, "")}/trustfinder/api/v0/business/documents/vision-analyze/`;

        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                // Do NOT set Content-Type  fetch sets multipart/form-data with the correct boundary
                "x-api-key": API_KEY.replace(/^['"]+|['"]+$/g, ""),
                // Forward the authenticated user's HttpOnly-cookie token from
                // this server-side proxy. It remains inaccessible to client JS.
                Authorization: `Bearer ${token}`,
            },
            body: forwardData,
            cache: "no-store",
        });

        const responseText = await response.text();
        let result: unknown;
        try {
            result = responseText ? JSON.parse(responseText) : null;
        } catch {
            result = null;
        }

        if (!response.ok || !result) {
            console.error("Document analysis failed:", { status: response.status, body: responseText });
            return NextResponse.json(
                { error: "We're having trouble analyzing this document right now. Please try again in a moment." },
                { status: response.status || 500 }
            );
        }

        return NextResponse.json(result);
    } catch (error) {
        console.error("Error analyzing document:", error);
        return NextResponse.json(
            { error: "Failed to analyze document" },
            { status: 500 }
        );
    }
}
