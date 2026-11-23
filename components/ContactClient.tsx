'use client';

import { useState } from 'react';
import { Hero } from '@/components/ui/Hero';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import { useToast } from '@/components/ui/Toast';
import LocalizedLayout from '@/components/LocalizedLayout';
import Turnstile from 'react-turnstile';

import {
    validateEmail,
    validateRequired,
    validateMinLength,
    validateMaxLength,
    hasErrors,
    type FormErrors,
} from '@/lib/validation';

interface FormData {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

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

interface ContactClientProps {
    content: ContactContent;
    layoutContent?: {
        navbar?: any;
        footer?: any;
    };
}

export default function ContactClient({ content, layoutContent }: ContactClientProps) {
    const { addToast } = useToast();
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
    console.log('Turnstile turnstileToken:', turnstileToken);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    const validateForm = (): FormErrors => {
        const newErrors: FormErrors = {};

        // Name validation
        const nameError = validateRequired(formData.name, 'Name');
        if (nameError) {
            newErrors.name = nameError;
        } else {
            const nameMinError = validateMinLength(formData.name, 2, 'Name');
            if (nameMinError) {
                newErrors.name = nameMinError;
            }
        }

        // Email validation
        const emailError = validateRequired(formData.email, 'Email') || validateEmail(formData.email);
        if (emailError) {
            newErrors.email = emailError;
        }

        // Subject validation
        const subjectError = validateRequired(formData.subject, 'Subject');
        if (subjectError) {
            newErrors.subject = subjectError;
        } else {
            const subjectMinError = validateMinLength(formData.subject, 5, 'Subject');
            if (subjectMinError) {
                newErrors.subject = subjectMinError;
            }
        }

        // Message validation
        const messageError = validateRequired(formData.message, 'Message');
        if (messageError) {
            newErrors.message = messageError;
        } else {
            const messageMinError = validateMinLength(formData.message, 10, 'Message');
            if (messageMinError) {
                newErrors.message = messageMinError;
            } else {
                const messageMaxError = validateMaxLength(formData.message, 2000, 'Message');
                if (messageMaxError) {
                    newErrors.message = messageMaxError;
                }
            }
        }

        return newErrors;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const validationErrors = validateForm();
        if (hasErrors(validationErrors)) {
            setErrors(validationErrors);
            return;
        }

        if (!turnstileToken) {
            addToast('error', 'Please complete the verification');
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    turnstileToken,
                }),
            });

            if (response.ok) {
                addToast('success', content.messages.success);
                setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
                setTurnstileToken(null);
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error('Contact form error:', error);
            addToast('error', content.messages.error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <LocalizedLayout content={layoutContent}>
            <Hero
                title={content.hero.title}
                description={content.hero.description}
            />

            <section className="py-16 bg-white dark:bg-gray-950">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <Card>
                                <CardHeader>
                                    <CardTitle>{content.form.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <Input
                                                    label={content.form.fields.name.label}
                                                    name="name"
                                                    type="text"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    error={errors.name}
                                                    placeholder={content.form.fields.name.placeholder}
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <Input
                                                    label={content.form.fields.email.label}
                                                    name="email"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    error={errors.email}
                                                    placeholder={content.form.fields.email.placeholder}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <Input
                                                label={content.form.fields.phone.label}
                                                name="phone"
                                                type="tel"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder={content.form.fields.phone.placeholder}
                                            />
                                        </div>
                                        <div>
                                            <Input
                                                label={content.form.fields.subject.label}
                                                name="subject"
                                                type="text"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                error={errors.subject}
                                                placeholder={content.form.fields.subject.placeholder}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <Textarea
                                                label={content.form.fields.message.label}
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                error={errors.message}
                                                placeholder={content.form.fields.message.placeholder}
                                                rows={6}
                                                required
                                            />
                                        </div>

                                        {/* Turnstile Captcha */}
                                        <div className="flex justify-center">
                                            <Turnstile
                                                sitekey={'0x4AAAAAACIBnMhBtiE_K88D'}
                                                onVerify={(token) => setTurnstileToken(token)}
                                            />
                                        </div>

                                        <div>
                                            <Button
                                                type="submit"
                                                variant="primary"
                                                size="lg"
                                                disabled={isSubmitting}
                                                className="w-full"
                                            >
                                                {isSubmitting ? content.form.submitting : content.form.submit}
                                            </Button>
                                        </div>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                                {content.info.title}
                            </h2>

                            <Card>
                                <CardContent className="p-6">
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                                {content.info.response.title}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-400">
                                                {content.info.response.description}
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                                {content.info.support.title}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-400">
                                                {content.info.support.description}
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                                {content.info.reports.title}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-400">
                                                {content.info.reports.description}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </LocalizedLayout>
    );
}