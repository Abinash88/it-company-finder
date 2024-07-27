'use client';

import useStorage from '@/Hooks/useStorage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { createContext, useContext, useEffect, useState } from 'react';

type Themes = 'system' | 'dark' | 'light';

interface ThemeProviderState {
  theme: Themes;
  setTheme: (theme: Themes) => void;
}

interface ContextProps {
  children: React.ReactNode;
  defaultTheme: 'system';
  storageKey: 'next-ui-theme';
}

const initialState: ThemeProviderState = {
  theme: 'system',
  setTheme: () => {},
};
const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

const ThemeProvider = ({
  children,
  defaultTheme = 'system',
  storageKey = 'next-ui-theme',
}: ContextProps) => {
  const storage = useStorage();
  const [theme, setTheme] = useState<Themes>(
    () => storage?.get<Themes>(storageKey) || defaultTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefer-color-scheme: dark)')
        ? 'dark'
        : 'light';
      root.classList.add(systemTheme);
      return;
    }
    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Themes): void => {
      storage?.set(storageKey, theme);
      setTheme(theme);
    },
  };
  const query = new QueryClient();

  return (
    <ThemeProviderContext.Provider value={value}>
      <QueryClientProvider client={query}>{children}</QueryClientProvider>
    </ThemeProviderContext.Provider>
  );
};

export default ThemeProvider;

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};
