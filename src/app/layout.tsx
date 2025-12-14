import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Nexus Note - Your Private AI Intelligence Layer',
  description: 'A Mac-native, local-first personal AI system that acts as a private intelligence layer over your digital life.',
  keywords: ['AI', 'privacy', 'local-first', 'knowledge management', 'macOS', 'personal knowledge base'],
  authors: [{ name: 'Nexus Note Team' }],
  creator: 'Nexus Note',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nexusnote.ai',
    title: 'Nexus Note - Your Private AI Intelligence Layer',
    description: 'A Mac-native, local-first personal AI system that acts as a private intelligence layer over your digital life.',
    siteName: 'Nexus Note',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexus Note - Your Private AI Intelligence Layer',
    description: 'A Mac-native, local-first personal AI system that acts as a private intelligence layer over your digital life.',
    creator: '@nexusnote',
  },
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#050a12' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
