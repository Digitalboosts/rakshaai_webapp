import type { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n/dictionaries';
import ContactClient from '@/components/ContactClient';

export const metadata: Metadata = {
    title: 'Contact RakshaAI | Report Scams and Get Support',
    description:
        'Contact RakshaAI for scam reports, product support, report corrections, and cybersecurity help. Operated by Ehatech Services Pvt. Ltd., Pune, India.',
    alternates: {
        canonical: 'https://rakshaai.co/contact',
    },
    openGraph: {
        title: 'Contact RakshaAI',
        description:
            'Report scams, request support, or contact RakshaAI about cybersecurity and fraud detection in India.',
        url: 'https://rakshaai.co/contact',
        type: 'website',
        siteName: 'RakshaAI',
        images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Contact RakshaAI' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Contact RakshaAI',
        description: 'Report scams or contact RakshaAI support.',
        images: ['/opengraph-image'],
    },
};

interface ContactContent {
    hero: {
        title: string;
        description: string;
    };
    form: {
        title: string;
        fields: {
            name: { label: string; placeholder: string; };
            email: { label: string; placeholder: string; };
            phone: { label: string; placeholder: string; };
            subject: { label: string; placeholder: string; };
            message: { label: string; placeholder: string; };
        };
        submit: string;
        submitting: string;
    };
    info: {
        title: string;
        response: { title: string; description: string; };
        support: { title: string; description: string; };
        reports: { title: string; description: string; };
    };
    messages: {
        success: string;
        error: string;
    };
}

// Default export for English content
export default async function DefaultContactPage() {
    // Load English translations for navbar and footer
    const dict = await getDictionary('en', 'home');
    
    const defaultContent: ContactContent = {
        hero: {
            title: "Get in Touch",
            description: "Got a question? Found a scam? Need help? We're here. No question is too small, no concern is too silly."
        },
        form: {
            title: "Send Us a Message",
            fields: {
                name: {
                    label: "Name",
                    placeholder: "Your full name"
                },
                email: {
                    label: "Email",
                    placeholder: "your.email@example.com"
                },
                phone: {
                    label: "Phone (Optional)",
                    placeholder: "1234567890"
                },
                subject: {
                    label: "Subject",
                    placeholder: "What's this about?"
                },
                message: {
                    label: "Message",
                    placeholder: "Tell us more about your question or concern..."
                }
            },
            submit: "Send Message",
            submitting: "Sending..."
        },
        info: {
            title: "Other Ways to Reach Us",
            response: {
                title: "Response Time",
                description: "We typically respond within 2 business days. Business hours: Mon-Sat, 10am-6pm IST."
            },
            support: {
                title: "Technical Support",
                description: "Need help using our service? Questions about trust scores, checker results, or account issues? Email support@rakshaai.co."
            },
            reports: {
                title: "Report Correction & Disputes",
                description: "Is your website, UPI ID, or phone number incorrectly flagged? Use our Report Correction process for faster handling."
            }
        },
        messages: {
            success: "Thank you! Your message has been sent successfully. We'll get back to you soon.",
            error: "Sorry, there was an error sending your message. Please try again."
        }
    };

    const layoutContent = {
        navbar: dict.navbar,
        footer: dict.footer
    };

    return <ContactClient content={defaultContent} layoutContent={layoutContent} />;
}

// Export types for use in localized pages
export type { ContactContent };
