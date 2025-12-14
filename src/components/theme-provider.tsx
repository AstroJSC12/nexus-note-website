'use client';

import * as React from 'react';
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
  type Attribute,
} from 'next-themes';

type Props = Omit<ThemeProviderProps, 'attribute'> & {
  attribute?: Attribute;
};

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'nexus-note-theme',
  attribute = 'class',
  enableSystem = true,
  disableTransitionOnChange = true,
  ...props
}: Props) {
  return (
    <NextThemesProvider
      attribute={attribute}
      defaultTheme={defaultTheme}
      enableSystem={enableSystem}
      disableTransitionOnChange={disableTransitionOnChange}
      storageKey={storageKey}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
