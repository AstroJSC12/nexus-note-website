import Link from 'next/link';
import { Container } from '@/components/site/container';
import { ButtonLink } from '@/components/site/button';
import { Logo } from '@/components/site/logo';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container className="flex h-14 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <Link href="/#how" className="hover:text-foreground transition-colors">
            How it works
          </Link>
          <Link href="/#use-cases" className="hover:text-foreground transition-colors">
            Use cases
          </Link>
          <Link href="/privacy" className="hover:text-foreground transition-colors">
            Privacy
          </Link>
          <Link href="/faq" className="hover:text-foreground transition-colors">
            FAQ
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <ButtonLink href="#waitlist" variant="secondary" className="hidden sm:inline-flex">
            Join waitlist
          </ButtonLink>
          <ButtonLink href="#waitlist">Request access</ButtonLink>
        </div>
      </Container>
    </header>
  );
}
