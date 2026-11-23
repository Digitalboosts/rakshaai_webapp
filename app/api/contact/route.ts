import { NextRequest, NextResponse } from "next/server";

// Use process.env to access environment variables
const NEXT_PUBLIC_BACKEND_API_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL;

interface ContactFormData {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
    // captchaToken?: string;
}

/**
 * Server-side validation for contact form
 */
function validateContactForm(data: ContactFormData): { valid: boolean; errors: string[] } {
    const errors: string[] = [];

    // Name validation
    if (!data.name || data.name.trim().length < 2) {
        errors.push('Name must be at least 2 characters long');
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) {
        errors.push('Please provide a valid email address');
    }

    // Phone validation (optional field, but if provided must be 10 digits)
    if (data.phone && data.phone.trim()) {
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(data.phone.trim())) {
            errors.push('Phone number must be 10 digits');
        }
    }

    // Subject validation
    if (!data.subject || data.subject.trim().length < 3) {
        errors.push('Subject must be at least 3 characters long');
    }
    if (data.subject && data.subject.length > 100) {
        errors.push('Subject must not exceed 100 characters');
    }

    // Message validation
    if (!data.message || data.message.trim().length < 10) {
        errors.push('Message must be at least 10 characters long');
    }
    if (data.message && data.message.length > 1000) {
        errors.push('Message must not exceed 1000 characters');
    }

    return { valid: errors.length === 0, errors };
}

/**
 * Simple rate limiting using in-memory store (for production, use Redis or similar)
 */
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string, maxRequests: number = 5, windowMs: number = 60000): boolean {
    const now = Date.now();
    const record = rateLimitMap.get(ip);

    if (!record || now > record.resetTime) {
        rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
        return true;
    }

    if (record.count >= maxRequests) {
        return false;
    }

    record.count++;
    return true;
}

/**
 * Clean up old rate limit records periodically
 */
setInterval(() => {
    const now = Date.now();
    for (const [ip, record] of rateLimitMap.entries()) {
        if (now > record.resetTime) {
            rateLimitMap.delete(ip);
        }
    }
}, 60000); // Clean up every minute

/**
 * POST /api/contact
 * Handles contact form submissions
 */
export async function POST(request: NextRequest) {
    try {
        // Get client IP for rate limiting
        const ip = request.headers.get('x-forwarded-for') ||
            request.headers.get('x-real-ip') ||
            'unknown';

        // Rate limiting
        if (!checkRateLimit(ip)) {
            return NextResponse.json(
                {
                    success: false,
                    message: 'Too many requests. Please try again later.'
                },
                { status: 429 }
            );
        }

        // Parse request body
        const body: ContactFormData & { turnstileToken?: string } = await request.json();

        // Verify CAPTCHA token
        // if (!body.captchaToken) {
        //     return NextResponse.json(
        //         {
        //             success: false,
        //             message: 'CAPTCHA verification required',
        //         },
        //         { status: 400 }
        //     );
        // }

        // Validate CAPTCHA token
        // const captchaResponse = await fetch(
        //     `${request.nextUrl.origin}/api/captcha/verify?token=${encodeURIComponent(body.captchaToken)}`,
        //     { method: 'GET' }
        // );

        // const captchaResult = await captchaResponse.json();

        // if (!captchaResult.valid) {
        //     return NextResponse.json(
        //         {
        //             success: false,
        //             message: 'Invalid CAPTCHA. Please solve the math problem correctly.',
        //         },
        //         { status: 403 }
        //     );
        // }

        // Validate input
        const validation = validateContactForm(body);
        if (!validation.valid) {
            return NextResponse.json(
                {
                    success: false,
                    message: 'Validation failed',
                    errors: validation.errors,
                },
                { status: 400 }
            );
        }

        // TODO: Implement actual email sending logic
        // For now, we'll just log the form data
        console.log('Contact form submission:', {
            name: body.name,
            email: body.email,
            phone: body.phone,
            subject: body.subject,
            message: body.message,
            timestamp: new Date().toISOString(),
            ip: ip,
        });

        // Send data to backend API
        try {
            // Use the backend API base URL from environment variable, replacing the versioned path if needed
            if (!NEXT_PUBLIC_BACKEND_API_URL) {
                throw new Error('Environment variable NEXT_PUBLIC_BACKEND_API_URL is not defined.');
            }

            // Use the environment variable instead of hardcoded URL
            const backendResponse = await fetch(`${NEXT_PUBLIC_BACKEND_API_URL}contact-us/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': body.turnstileToken ? `Bearer ${body.turnstileToken}` : '',
                },
                body: JSON.stringify({
                    name: body.name,
                    email: body.email,
                    phone: body.phone || '',
                    subject: body.subject,
                    message: body.message,
                }),
            });

            // if (!backendResponse.ok) {
            //     const errorData = await backendResponse.json().catch(() => ({ message: 'Failed to send message' }));
            //     console.error('Backend API error:', errorData);

            //     // Return error response to client
            //     return NextResponse.json(
            //         {
            //             success: false,
            //             message: errorData.message || 'Failed to send message to backend. Please try again.',
            //         },
            //         { status: backendResponse.status }
            //     );
            // }

            const backendData = await backendResponse.json();
            console.log('Backend API success:', backendData);
        } catch (backendError) {
            console.error('Backend API request failed:', backendError);
            // Continue even if backend fails, for better user experience
        }

        // TODO: Send email using your preferred service
        // Examples:
        // - SendGrid: https://docs.sendgrid.com/for-developers/sending-email/quickstart-nodejs
        // - AWS SES: https://docs.aws.amazon.com/ses/latest/dg/send-email-nodejs.html
        // - Resend: https://resend.com/docs/send-with-nextjs
        // - Nodemailer: https://nodemailer.com/about/

        /*
        // Example with SendGrid (uncomment and configure):
        const sgMail = require('@sendgrid/mail');
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        
        const msg = {
          to: 'support@scamdetector.com',
          from: 'noreply@scamdetector.com',
          replyTo: body.email,
          subject: `Contact Form: ${body.subject}`,
          text: `
            Name: ${body.name}
            Email: ${body.email}
            Subject: ${body.subject}
            
            Message:
            ${body.message}
          `,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${body.name}</p>
            <p><strong>Email:</strong> ${body.email}</p>
            <p><strong>Subject:</strong> ${body.subject}</p>
            <p><strong>Message:</strong></p>
            <p>${body.message.replace(/\n/g, '<br>')}</p>
          `,
        };
        
        await sgMail.send(msg);
        */

        // Send success response
        return NextResponse.json(
            {
                success: true,
                message: 'Thank you for your message! We\'ll get back to you soon.',
            },
            { status: 200 }
        );

    } catch (error) {
        console.error('Contact form error:', error);

        return NextResponse.json(
            {
                success: false,
                message: 'An error occurred while processing your request. Please try again later.',
            },
            { status: 500 }
        );
    }
}

/**
 * GET /api/contact
 * Return method not allowed for GET requests
 */
export async function GET() {
    return NextResponse.json(
        {
            success: false,
            message: 'Method not allowed. Please use POST.',
        },
        { status: 405 }
    );
}
