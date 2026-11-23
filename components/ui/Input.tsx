import React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    helperText?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, label, error, helperText, id, required, ...props }, ref) => {
        const inputId = id || `input-${label?.toLowerCase().replace(/\s+/g, '-')}`;
        const errorId = `${inputId}-error`;
        const helperId = `${inputId}-helper`;

        return (
            <div className="w-full">
                {label && (
                    <label
                        htmlFor={inputId}
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                        {label}
                        {required && <span className="text-red-500 ml-1" aria-label="required">*</span>}
                    </label>
                )}
                <input
                    type={type}
                    className={cn(
                        'flex h-11 w-full rounded-xl border bg-white px-4 py-2 text-base transition-colors',
                        'placeholder:text-gray-400 dark:placeholder:text-gray-500',
                        'focus:outline-none focus:ring-2 focus:ring-offset-2',
                        'disabled:cursor-not-allowed disabled:opacity-50',
                        'dark:bg-gray-900',
                        error
                            ? 'border-red-500 focus:ring-red-500 dark:border-red-600'
                            : 'border-gray-300 dark:border-gray-700 focus:ring-indigo-500',
                        className
                    )}
                    ref={ref}
                    id={inputId}
                    aria-invalid={error ? 'true' : 'false'}
                    aria-describedby={error ? errorId : helperText ? helperId : undefined}
                    required={required}
                    {...props}
                />
                {error && (
                    <p
                        id={errorId}
                        className="mt-1.5 text-sm text-red-600 dark:text-red-400 flex items-center gap-1"
                        role="alert"
                    >
                        <svg
                            className="h-4 w-4 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                clipRule="evenodd"
                            />
                        </svg>
                        {error}
                    </p>
                )}
                {helperText && !error && (
                    <p id={helperId} className="mt-1.5 text-sm text-gray-500 dark:text-gray-400">
                        {helperText}
                    </p>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';

export { Input };
