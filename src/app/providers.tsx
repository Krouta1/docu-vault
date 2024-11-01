/*This page serves as one definer for all providers */

import { ReactNode } from 'react';
import { ConvexClientProvider } from '@/app/providers/ConvexClientProvider';
import { ThemeProvider } from '@/app/providers/ThemeProvider';

export function SiteProviders({ children }: { children: ReactNode }) {
  return (
    <>
      <ConvexClientProvider>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {' '}
          {children}{' '}
        </ThemeProvider>
      </ConvexClientProvider>
    </>
  );
}
