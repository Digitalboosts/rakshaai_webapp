'use client';

import { useState, useEffect } from 'react';
import { RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

interface MathCaptchaProps {
    onVerify: (token: string) => void;
    onError?: () => void;
    className?: string;
}

interface CaptchaChallenge {
    num1: number;
    num2: number;
    operation: '+' | '-' | '*';
    answer: number;
    token: string;
}

/**
 * MathCaptcha Component
 * Generates math questions to verify human users
 * Supports addition, subtraction, and multiplication
 */
export default function MathCaptcha({ onVerify, onError, className = '' }: MathCaptchaProps) {
    const [challenge, setChallenge] = useState<CaptchaChallenge | null>(null);
    const [userAnswer, setUserAnswer] = useState('');
    const [error, setError] = useState('');
    const [isVerified, setIsVerified] = useState(false);

    // Generate a new math challenge
    const generateChallenge = (): CaptchaChallenge => {
        const operations: Array<'+' | '-' | '*'> = ['+', '-', '*'];
        const operation = operations[Math.floor(Math.random() * operations.length)];

        let num1: number, num2: number, answer: number;

        switch (operation) {
            case '+':
                num1 = Math.floor(Math.random() * 50) + 1; // 1-50
                num2 = Math.floor(Math.random() * 50) + 1; // 1-50
                answer = num1 + num2;
                break;
            case '-':
                num1 = Math.floor(Math.random() * 50) + 20; // 20-69
                num2 = Math.floor(Math.random() * num1) + 1; // Ensure positive result
                answer = num1 - num2;
                break;
            case '*':
                num1 = Math.floor(Math.random() * 10) + 2; // 2-11
                num2 = Math.floor(Math.random() * 10) + 2; // 2-11
                answer = num1 * num2;
                break;
            default:
                num1 = 1;
                num2 = 1;
                answer = 2;
        }

        // Generate a unique token for this challenge
        const token = `captcha_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

        return { num1, num2, operation, answer, token };
    };

    // Initialize challenge on mount
    useEffect(() => {
        setChallenge(generateChallenge());
    }, []);

    // Handle refresh button
    const handleRefresh = () => {
        setChallenge(generateChallenge());
        setUserAnswer('');
        setError('');
        setIsVerified(false);
    };

    // Handle answer verification
    const handleVerify = () => {
        if (!challenge) return;

        const parsedAnswer = parseInt(userAnswer, 10);

        if (isNaN(parsedAnswer)) {
            setError('Please enter a valid number');
            onError?.();
            return;
        }

        if (parsedAnswer === challenge.answer) {
            setIsVerified(true);
            setError('');
            // Pass the token to parent for verification
            onVerify(challenge.token);
        } else {
            setError('Incorrect answer. Please try again.');
            onError?.();
            // Generate new challenge
            handleRefresh();
        }
    };

    // Handle Enter key press
    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleVerify();
        }
    };

    if (!challenge) {
        return (
            <div className={`flex items-center justify-center p-4 ${className}`}>
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-indigo-600"></div>
            </div>
        );
    }

    return (
        <div className={`glass rounded-xl p-4 border border-gray-200 dark:border-gray-700 ${className}`}>
            <div className="flex flex-col space-y-3">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Verify you&apos;re human
                    </h3>
                    <button
                        type="button"
                        onClick={handleRefresh}
                        disabled={isVerified}
                        className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-label="Refresh CAPTCHA"
                    >
                        <RefreshCw className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                    </button>
                </div>

                {/* Math Question */}
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-lg p-4">
                    <p className="text-center text-lg font-mono font-bold text-gray-800 dark:text-gray-200">
                        {challenge.num1} {challenge.operation} {challenge.num2} = ?
                    </p>
                </div>

                {/* Answer Input */}
                <div className="flex items-center gap-2">
                    <Input
                        type="number"
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Your answer"
                        disabled={isVerified}
                        className={`flex-1 ${isVerified ? 'bg-green-50 dark:bg-green-950/20 border-green-500' : ''}`}
                        aria-label="CAPTCHA answer"
                    />
                    {!isVerified && (
                        <Button
                            type="button"
                            onClick={handleVerify}
                            variant="primary"
                            size="sm"
                            disabled={!userAnswer.trim()}
                        >
                            Verify
                        </Button>
                    )}
                </div>

                {/* Status Messages */}
                {error && (
                    <p className="text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                        <span className="inline-block w-1 h-1 rounded-full bg-red-600"></span>
                        {error}
                    </p>
                )}
                {isVerified && (
                    <p className="text-sm text-green-600 dark:text-green-400 flex items-center gap-1">
                        <span className="inline-block w-1 h-1 rounded-full bg-green-600"></span>
                        ✓ Verified successfully!
                    </p>
                )}
            </div>
        </div>
    );
}
