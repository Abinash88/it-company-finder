'use client';

import PopupFormContext from '@/context/popup-form-context';
import { DEFAULT_SYSTEM_THEME, LOCAL_STORAGE_THEME_KEY } from '@/lib/constants';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import React from 'react';
import MAINMODAL from '../model-sheet';
import { MODAL_DATA } from '../model-sheet/modal-data';

interface ContextProps {
  children: React.ReactNode;
}

const ThemeProviderComp = ({ children }: ContextProps) => {
  const query = new QueryClient();

  return (
    <QueryClientProvider client={query}>
      <PopupFormContext>
        <ThemeProvider
          attribute='class'
          defaultTheme={DEFAULT_SYSTEM_THEME}
          storageKey={LOCAL_STORAGE_THEME_KEY}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <MAINMODAL MODAL_DATA={MODAL_DATA} />
      </PopupFormContext>
    </QueryClientProvider>
  );
};

export default ThemeProviderComp;
