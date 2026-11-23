'use client';

import { useState, useEffect } from 'react';
import { AlertCircle, Wifi, WifiOff } from 'lucide-react';

export default function NetworkStatus() {
    const [isOnline, setIsOnline] = useState(true);
    const [apiStatus, setApiStatus] = useState<'checking' | 'online' | 'offline'>('checking');

    useEffect(() => {
        // Check network connectivity
        const updateOnlineStatus = () => setIsOnline(navigator.onLine);

        updateOnlineStatus();

        window.addEventListener('online', updateOnlineStatus);
        window.addEventListener('offline', updateOnlineStatus);

        return () => {
            window.removeEventListener('online', updateOnlineStatus);
            window.removeEventListener('offline', updateOnlineStatus);
        };
    }, []);

    useEffect(() => {
        // Check API connectivity
        const checkApiStatus = async () => {
            try {
                setApiStatus('checking');
                const response = await fetch('/api/health-check');
                setApiStatus(response.ok ? 'online' : 'offline');
            } catch (error) {
                console.error('API health check failed:', error);
                setApiStatus('offline');
            }
        };

        if (isOnline) {
            checkApiStatus();
            const interval = setInterval(checkApiStatus, 30000); // Check every 30 seconds
            return () => clearInterval(interval);
        } else {
            setApiStatus('offline');
        }
    }, [isOnline]);

    // Only show in development
    if (process.env.NODE_ENV === 'production') return null;

    return (
        <div className="fixed bottom-4 left-4 z-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border p-3 text-xs">
                <div className="flex items-center gap-2 mb-1">
                    {isOnline ? (
                        <Wifi className="h-3 w-3 text-green-500" />
                    ) : (
                        <WifiOff className="h-3 w-3 text-red-500" />
                    )}
                    <span className="font-medium">
                        Network: {isOnline ? 'Online' : 'Offline'}
                    </span>
                </div>

                <div className="flex items-center gap-2">
                    {apiStatus === 'checking' ? (
                        <div className="h-3 w-3 bg-yellow-500 rounded-full animate-pulse" />
                    ) : apiStatus === 'online' ? (
                        <div className="h-3 w-3 bg-green-500 rounded-full" />
                    ) : (
                        <AlertCircle className="h-3 w-3 text-red-500" />
                    )}
                    <span className="font-medium">
                        API: {apiStatus === 'checking' ? 'Checking...' : apiStatus}
                    </span>
                </div>

                <div className="text-gray-500 mt-1">
                    Host: {typeof window !== 'undefined' ? window.location.host : 'N/A'}
                </div>
            </div>
        </div>
    );
}