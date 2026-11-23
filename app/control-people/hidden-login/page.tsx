'use client';

import React, { useState, useEffect } from 'react';
import { useAuth, useAppDispatch } from '@/lib/redux/hooks';
import { login, showNotification, initializeAuth } from '@/lib/redux/actions';
import { PublicRouteGuard } from '@/components/AdminRouteGuard';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Eye, EyeOff, Shield } from 'lucide-react';

export default function SecureAccessPage() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [validationErrors, setValidationErrors] = useState<{
    username?: string;
    password?: string;
  }>({});
  const [hasMounted, setHasMounted] = useState(false);

  const { isLoading, error, isAuthenticated } = useAuth();
  const dispatch = useAppDispatch();
  const router = useRouter();

  // Initialize auth state from localStorage after component mounts
  useEffect(() => {
    dispatch(initializeAuth());
    setHasMounted(true);
  }, [dispatch]);

  // Navigate when authentication succeeds
  useEffect(() => {
    if (hasMounted && isAuthenticated) {
      router.push('/admin/dashboard');
    }
  }, [isAuthenticated, router, hasMounted]);

  const validateForm = () => {
    const errors: { username?: string; password?: string } = {};
    
    if (!credentials.username.trim()) {
      errors.username = 'Username is required';
    }
    
    if (!credentials.password) {
      errors.password = 'Password is required';
    } else if (credentials.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    dispatch(login(credentials.username, credentials.password));
  };

  const handleInputChange = (field: keyof typeof credentials) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCredentials(prev => ({
      ...prev,
      [field]: e.target.value
    }));
    
    // Clear validation error for this field
    if (validationErrors[field]) {
      setValidationErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
    }
  };

  return (
    <PublicRouteGuard>
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-md w-full space-y-6">
          {/* Header */}
          <div className="text-center">
            <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/20">
              <Shield className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h2 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">
              RakshaAI Management
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Authorized personnel only
            </p>
          </div>

          {/* Login Form */}
          <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <Input
                id="username"
                name="username"
                type="text"
                label="Username / Email"
                placeholder="Enter your username or email"
                value={credentials.username}
                onChange={handleInputChange('username')}
                error={validationErrors.username}
                required
                autoComplete="username"
                className="text-base"
              />

              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  label="Password"
                  placeholder="Enter your password"
                  value={credentials.password}
                  onChange={handleInputChange('password')}
                  error={validationErrors.password}
                  required
                  autoComplete="current-password"
                  className="text-base pr-12"
                />
                <button
                  type="button"
                  className="absolute right-3 top-9 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {error && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3">
                <p className="text-sm text-red-700 dark:text-red-300">{error}</p>
              </div>
            )}

            <Button
              type="submit"
              className="w-full text-base h-11"
              isLoading={isLoading}
              disabled={isLoading}
            >
              {isLoading ? 'Authenticating...' : 'Secure Access'}
            </Button>

            {/* Back to main site */}
            <div className="text-center">
              <Link 
                href="/" 
                className="text-sm text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
              >
                ← Back to RakshaAI
              </Link>
            </div>
          </form>
        </div>
      </div>
    </PublicRouteGuard>
  );
}