'use client';

import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@/lib/redux';
import { setStore } from '@/lib/api/adminApi';

interface ReduxProviderProps {
  children: React.ReactNode;
}

// Set store reference for adminApi to access Redux state
setStore(store);

export function ReduxProvider({ children }: ReduxProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}