import { cn } from '@/lib/utils';
import './globals.css';
import { Poppins } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ThemeProvider from '@/components/reusables/theme-provider';
import React from 'react';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={cn(`${poppins.className}`)}>
        <ThemeProvider defaultTheme='system' storageKey='next-ui-theme'>
          <ToastContainer
            position='top-right'
            style={{ fontSize: '12px', width: 'auto' }}
            bodyStyle={{ height: '45px', paddingRight: '20px' }}
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
