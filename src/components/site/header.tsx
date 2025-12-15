'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/site/container';
import { ButtonLink } from '@/components/site/button';
import { Logo } from '@/components/site/logo';

const navLinks = [
  { href: '/how-it-works', label: 'How it works' },
  { href: '/use-cases', label: 'Use cases' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/faq', label: 'FAQ' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container className="flex h-14 items-center justify-between">
        <Logo />
        
        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-2">
          {/* Desktop buttons */}
          <ButtonLink href="/#waitlist" variant="secondary" className="hidden md:inline-flex">
            Join waitlist
          </ButtonLink>
          <ButtonLink href="/#waitlist" className="hidden sm:inline-flex md:hidden">
            Join waitlist
          </ButtonLink>
          
          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:text-foreground hover:bg-surface/50 transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </Container>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur">
          <Container className="py-4">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-surface/50 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 pt-3 border-t border-border/60">
                <ButtonLink 
                  href="/#waitlist" 
                  className="w-full justify-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Join waitlist
                </ButtonLink>
              </div>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
