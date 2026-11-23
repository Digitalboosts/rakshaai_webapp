import { useState, useCallback, useRef, useEffect } from 'react';

interface TurnstileConfig {
  siteKey: string;
  theme?: 'light' | 'dark' | 'auto';
  size?: 'normal' | 'compact';
  retryInterval?: number;
  maxRetries?: number;
}

interface TurnstileState {
  token: string | null;
  isLoading: boolean;
  error: string | null;
  isVerified: boolean;
  retryCount: number;
  widgetId: string | null;
}

interface TurnstileActions {
  reset: () => void;
  retry: () => void;
  clearError: () => void;
  forceRefresh: () => void;
}

interface UseTurnstileReturn {
  state: TurnstileState;
  actions: TurnstileActions;
  handlers: {
    onVerify: (token: string) => void;
    onExpire: () => void;
    onError: (error?: string) => void;
    onLoad: (widgetId: string) => void;
  };
  config: {
    key: number;
    siteKey: string;
    theme: 'light' | 'dark' | 'auto';
    size: 'normal' | 'compact';
  };
}

const DEFAULT_CONFIG: Required<Omit<TurnstileConfig, 'siteKey'>> = {
  theme: 'auto',
  size: 'normal',
  retryInterval: 1000,
  maxRetries: 3,
};

const TURNSTILE_ERRORS = {
  NETWORK: 'Network error occurred. Please check your connection.',
  TIMEOUT: 'CAPTCHA timed out. Please try again.',
  INVALID: 'Invalid CAPTCHA response. Please try again.',
  EXPIRED: 'CAPTCHA expired. A new one will be loaded.',
  GENERIC: 'CAPTCHA verification failed. Please try again.',
  MAX_RETRIES: 'Maximum retry attempts reached. Please refresh the page.',
} as const;

export function useTurnstile(config: TurnstileConfig): UseTurnstileReturn {
  const mergedConfig = { ...DEFAULT_CONFIG, ...config };
  
  const [state, setState] = useState<TurnstileState>({
    token: null,
    isLoading: false,
    error: null,
    isVerified: false,
    retryCount: 0,
    widgetId: null,
  });

  const [widgetKey, setWidgetKey] = useState(0);
  const retryTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Clear any pending timeouts on unmount
  useEffect(() => {
    return () => {
      if (retryTimeoutRef.current) {
        clearTimeout(retryTimeoutRef.current);
      }
    };
  }, []);

  const updateState = useCallback((updates: Partial<TurnstileState>) => {
    setState(prev => ({ ...prev, ...updates }));
  }, []);

  const reset = useCallback(() => {
    if (retryTimeoutRef.current) {
      clearTimeout(retryTimeoutRef.current);
      retryTimeoutRef.current = null;
    }

    updateState({
      token: null,
      isLoading: false,
      error: null,
      isVerified: false,
      retryCount: 0,
      widgetId: null,
    });

    // Force widget re-render
    setWidgetKey(prev => prev + 1);
  }, [updateState]);

  const retry = useCallback(() => {
    if (state.retryCount >= mergedConfig.maxRetries) {
      updateState({ 
        error: TURNSTILE_ERRORS.MAX_RETRIES,
        isLoading: false 
      });
      return;
    }

    const backoffDelay = mergedConfig.retryInterval * Math.pow(2, state.retryCount);
    
    updateState({ 
      isLoading: true,
      error: null,
      retryCount: state.retryCount + 1 
    });

    retryTimeoutRef.current = setTimeout(() => {
      setWidgetKey(prev => prev + 1);
      updateState({ isLoading: false });
    }, backoffDelay);
  }, [state.retryCount, mergedConfig.maxRetries, mergedConfig.retryInterval, updateState]);

  const clearError = useCallback(() => {
    updateState({ error: null });
  }, [updateState]);

  const forceRefresh = useCallback(() => {
    reset();
  }, [reset]);

  const handleVerify = useCallback((token: string) => {
    updateState({
      token,
      isVerified: true,
      error: null,
      isLoading: false,
      retryCount: 0,
    });
  }, [updateState]);

  const handleExpire = useCallback(() => {
    updateState({
      token: null,
      isVerified: false,
      error: TURNSTILE_ERRORS.EXPIRED,
      isLoading: false,
    });

    // Auto-retry on expiration
    setTimeout(() => {
      setWidgetKey(prev => prev + 1);
      clearError();
    }, 500);
  }, [updateState, clearError]);

  const handleError = useCallback((error?: string) => {
    const errorMessage = error || TURNSTILE_ERRORS.GENERIC;
    
    updateState({
      token: null,
      isVerified: false,
      error: errorMessage,
      isLoading: false,
    });

    // Auto-retry on certain errors
    if (!error || error.includes('network') || error.includes('timeout')) {
      setTimeout(retry, 1000);
    }
  }, [updateState, retry]);

  const handleLoad = useCallback((widgetId: string) => {
    updateState({
      widgetId,
      isLoading: false,
      error: null,
    });
  }, [updateState]);

  return {
    state,
    actions: {
      reset,
      retry,
      clearError,
      forceRefresh,
    },
    handlers: {
      onVerify: handleVerify,
      onExpire: handleExpire,
      onError: handleError,
      onLoad: handleLoad,
    },
    config: {
      key: widgetKey,
      siteKey: mergedConfig.siteKey,
      theme: mergedConfig.theme,
      size: mergedConfig.size,
    },
  };
}