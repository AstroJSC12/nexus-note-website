import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/site/header';
import { Footer } from '@/components/site/footer';
import { ButtonLink } from '@/components/site/button';

export const metadata: Metadata = {
  title: '404 - Page Not Found - Nexus Note',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center px-4 sm:px-6">
        <div className="text-center max-w-md">
          <div className="text-8xl font-light text-accent/30">404</div>
          <h1 className="mt-6 text-2xl font-semibold tracking-tight sm:text-3xl">
            Page not found
          </h1>
          <p className="mt-4 text-muted-foreground leading-7">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <ButtonLink href="/">
              Go home
            </ButtonLink>
            <ButtonLink href="/faq" variant="secondary">
              View FAQ
            </ButtonLink>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
