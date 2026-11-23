import { NextRequest, NextResponse } from 'next/server';

/**
 * In-memory store for CAPTCHA tokens
 * In production, use Redis or a database for scalability
 */
const captchaStore = new Map<string, { timestamp: number; verified: boolean }>();

// Clean up expired tokens every 5 minutes
setInterval(() => {
    const now = Date.now();
    const EXPIRATION_TIME = 5 * 60 * 1000; // 5 minutes

    for (const [token, data] of captchaStore.entries()) {
        if (now - data.timestamp > EXPIRATION_TIME) {
            captchaStore.delete(token);
        }
    }
}, 5 * 60 * 1000);

/**
 * POST /api/captcha/verify
 * Verify and register a CAPTCHA token
 */
export async function POST(request: NextRequest) {
    try {
        const { token, verified } = await request.json();

        if (!token || typeof token !== 'string') {
            return NextResponse.json(
                { error: 'Invalid token' },
                { status: 400 }
            );
        }

        // Store the token with verification status
        captchaStore.set(token, {
            timestamp: Date.now(),
            verified: verified === true,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('CAPTCHA verification error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

/**
 * GET /api/captcha/verify?token=xxx
 * Check if a CAPTCHA token is valid and verified
 */
export async function GET(request: NextRequest) {
    try {
        const token = request.nextUrl.searchParams.get('token');

        if (!token) {
            return NextResponse.json(
                { valid: false, error: 'Token required' },
                { status: 400 }
            );
        }

        const captchaData = captchaStore.get(token);

        // Check if token exists and is verified
        if (!captchaData) {
            return NextResponse.json({ valid: false, error: 'Invalid or expired token' });
        }

        // Check if token is expired (5 minutes)
        const EXPIRATION_TIME = 5 * 60 * 1000;
        const isExpired = Date.now() - captchaData.timestamp > EXPIRATION_TIME;

        if (isExpired) {
            captchaStore.delete(token);
            return NextResponse.json({ valid: false, error: 'Token expired' });
        }

        // Return validity and mark token as used
        const isValid = captchaData.verified;
        if (isValid) {
            // Delete token after successful verification (one-time use)
            captchaStore.delete(token);
        }

        return NextResponse.json({ valid: isValid });
    } catch (error) {
        console.error('CAPTCHA check error:', error);
        return NextResponse.json(
            { valid: false, error: 'Internal server error' },
            { status: 500 }
        );
    }
}
