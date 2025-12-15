import Link from 'next/link';
import { Container } from '@/components/site/container';
import { Logo } from '@/components/site/logo';

export function Footer() {
  return (
    <footer className="border-t border-border/60">
      <Container className="py-12 sm:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              A private intelligence layer over your digital life. Mac-native. Local-first.
            </p>
          </div>
          
          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold">Product</h3>
            <nav className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
              <Link href="/how-it-works" className="hover:text-foreground transition-colors">
                How it works
              </Link>
              <Link href="/use-cases" className="hover:text-foreground transition-colors">
                Use cases
              </Link>
              <Link href="/faq" className="hover:text-foreground transition-colors">
                FAQ
              </Link>
            </nav>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold">Legal</h3>
            <nav className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-foreground transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-foreground transition-colors">
                Terms
              </Link>
            </nav>
          </div>
          
          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold">Connect</h3>
            <nav className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
              <a
                href="mailto:hello@nexusnote.ai"
                className="hover:text-foreground transition-colors"
              >
                hello@nexusnote.ai
              </a>
              <a
                href="https://twitter.com/nexusnoteai"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                Twitter
              </a>
            </nav>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Nexus Note. All rights reserved.
          </div>
          <div className="text-xs text-muted-foreground">
            Built with privacy in mind.
          </div>
        </div>
      </Container>
    </footer>
  );
}
