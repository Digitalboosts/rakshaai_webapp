import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './reducers';
import type { RootState } from './types';

// Simple thunk middleware implementation
const thunkMiddleware = (store: any) => (next: any) => (action: any) => {
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState);
  }
  return next(action);
};

// Logger middleware for development
const loggerMiddleware = (store: any) => (next: any) => (action: any) => {
  if (process.env.NODE_ENV === 'development') {
    console.group('Redux Action:', action.type);
    console.log('Previous state:', store.getState());
    console.log('Action:', action);
  }
  
  const result = next(action);
  
  if (process.env.NODE_ENV === 'development') {
    console.log('Next state:', store.getState());
    console.groupEnd();
  }
  
  return result;
};

// Combine middleware
const middleware = [thunkMiddleware];

if (process.env.NODE_ENV === 'development') {
  middleware.push(loggerMiddleware);
}

// Redux DevTools Extension support
const composeEnhancers = 
  (typeof window !== 'undefined' && 
   (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && 
   process.env.NODE_ENV === 'development') 
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        name: 'RakshaAI Admin Panel',
        trace: true,
        traceLimit: 25,
      })
    : compose;

// Create store
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

// Store type
export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;

// Note: Auth state initialization from localStorage is handled in component-level useEffect
// to prevent hydration mismatches between server and client rendering

export default store;