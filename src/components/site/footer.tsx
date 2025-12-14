import Link from 'next/link';
import { Container } from '@/components/site/container';
import { Logo } from '@/components/site/logo';

export function Footer() {
  return (
    <footer className="border-t border-border/60">
      <Container className="py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <Logo />
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="/faq" className="hover:text-foreground transition-colors">
              FAQ
            </Link>
            <a
              href="#"
              className="hover:text-foreground transition-colors"
              aria-disabled="true"
            >
              GitHub
            </a>
            <a
              href="mailto:hello@nexusnote.ai"
              className="hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
        <div className="mt-8 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Nexus Note. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
