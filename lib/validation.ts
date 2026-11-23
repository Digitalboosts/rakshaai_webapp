/**
 * Form validation utilities
 * Client-side validation helpers for forms
 */

export interface ValidationRule {
    required?: boolean | string;
    minLength?: { value: number; message: string };
    maxLength?: { value: number; message: string };
    pattern?: { value: RegExp; message: string };
    validate?: (value: string) => string | boolean;
}

export interface FormErrors {
    [key: string]: string | undefined;
}

/**
 * Validates an email address
 */
export function validateEmail(email: string): string | undefined {
    if (!email) return 'Email is required';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return 'Please enter a valid email address';
    }

    return undefined;
}

/**
 * Validates a required field
 */
export function validateRequired(value: string, fieldName: string): string | undefined {
    if (!value || value.trim().length === 0) {
        return `${fieldName} is required`;
    }
    return undefined;
}

/**
 * Validates minimum length
 */
export function validateMinLength(
    value: string,
    minLength: number,
    fieldName: string
): string | undefined {
    if (value.length < minLength) {
        return `${fieldName} must be at least ${minLength} characters`;
    }
    return undefined;
}

/**
 * Validates maximum length
 */
export function validateMaxLength(
    value: string,
    maxLength: number,
    fieldName: string
): string | undefined {
    if (value.length > maxLength) {
        return `${fieldName} must not exceed ${maxLength} characters`;
    }
    return undefined;
}

/**
 * Generic field validator based on rules
 */
export function validateField(value: string, rules: ValidationRule): string | undefined {
    // Required check
    if (rules.required) {
        const message = typeof rules.required === 'string' ? rules.required : 'This field is required';
        if (!value || value.trim().length === 0) {
            return message;
        }
    }

    // Skip other validations if field is empty and not required
    if (!value || value.trim().length === 0) {
        return undefined;
    }

    // Min length check
    if (rules.minLength && value.length < rules.minLength.value) {
        return rules.minLength.message;
    }

    // Max length check
    if (rules.maxLength && value.length > rules.maxLength.value) {
        return rules.maxLength.message;
    }

    // Pattern check
    if (rules.pattern && !rules.pattern.value.test(value)) {
        return rules.pattern.message;
    }

    // Custom validation
    if (rules.validate) {
        const result = rules.validate(value);
        if (typeof result === 'string') {
            return result;
        }
        if (result === false) {
            return 'Invalid value';
        }
    }

    return undefined;
}

/**
 * Validates entire form based on rules
 */
export function validateForm(
    formData: Record<string, string>,
    rules: Record<string, ValidationRule>
): FormErrors {
    const errors: FormErrors = {};

    Object.keys(rules).forEach((fieldName) => {
        const value = formData[fieldName] || '';
        const fieldRules = rules[fieldName];
        const error = validateField(value, fieldRules);

        if (error) {
            errors[fieldName] = error;
        }
    });

    return errors;
}

/**
 * Check if form has any errors
 */
export function hasErrors(errors: FormErrors): boolean {
    return Object.values(errors).some((error) => error !== undefined);
}
