'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface AdminUser {
  id: string;
  username: string;
  email: string;
  role: string;
}

interface AdminContextType {
  user: AdminUser | null;
  isLoading: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
  token: string | null;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

const STORAGE_KEY = 'rakshaai_admin_auth';
const TOKEN_KEY = 'rakshaai_admin_token';

export function AdminProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing auth on mount
  useEffect(() => {
    const checkExistingAuth = () => {
      try {
        // Check if localStorage is available
        if (typeof window === 'undefined' || !window.localStorage) {
          setIsLoading(false);
          return;
        }

        const storedToken = localStorage.getItem(TOKEN_KEY);
        const storedUser = localStorage.getItem(STORAGE_KEY);
        
        if (storedToken && storedUser) {
          try {
            const userData = JSON.parse(storedUser);
            const authData = JSON.parse(storedToken);
            
            // Check if session is less than 24 hours old
            const sessionAge = Date.now() - authData.timestamp;
            const maxAge = 24 * 60 * 60 * 1000; // 24 hours

            if (sessionAge < maxAge && userData.user) {
              setUser(userData.user);
              setToken(userData.token);
            } else {
              localStorage.removeItem(TOKEN_KEY);
              localStorage.removeItem(STORAGE_KEY);
            }
          } catch (parseError) {
            console.error('Error parsing stored auth:', parseError);
            localStorage.removeItem(TOKEN_KEY);
            localStorage.removeItem(STORAGE_KEY);
          }
        }
      } catch (error) {
        console.error('Error checking existing auth:', error);
        // Safe cleanup
        try {
          if (typeof window !== 'undefined' && window.localStorage) {
            localStorage.removeItem(TOKEN_KEY);
            localStorage.removeItem(STORAGE_KEY);
          }
        } catch (cleanupError) {
          console.error('Error during auth cleanup:', cleanupError);
        }
      }
      setIsLoading(false);
    };

    checkExistingAuth();
  }, []);

  const login = async (username: string, password: string): Promise<boolean> => {
    setIsLoading(true);

    try {
      // Call the login API endpoint
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Login failed' }));
        console.error('Login error:', errorData);
        setIsLoading(false);
        return false;
      }

      const data = await response.json();

      if (data.success && data.token && data.user) {
        // Store token and user
        const authData = {
          user: data.user,
          token: data.token,
          timestamp: Date.now(),
        };

        localStorage.setItem(STORAGE_KEY, JSON.stringify(authData));
        localStorage.setItem(TOKEN_KEY, JSON.stringify({ 
          token: data.token, 
          timestamp: Date.now() 
        }));

        setUser(data.user);
        setToken(data.token);
        setIsLoading(false);
        return true;
      } else {
        setIsLoading(false);
        return false;
      }
    } catch (error) {
      console.error('Login error:', error);
      setIsLoading(false);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
    setToken(null);
  };

  const value: AdminContextType = {
    user,
    token,
    isLoading,
    login,
    logout,
    isAuthenticated: !!user && !!token
  };

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
}