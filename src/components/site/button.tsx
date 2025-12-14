import Link from 'next/link';
import * as React from 'react';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export function Button({
  className,
  variant = 'primary',
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50',
        variant === 'primary' &&
          'bg-accent text-white hover:bg-accent/90 shadow-sm shadow-accent/20',
        variant === 'secondary' &&
          'bg-surface text-foreground hover:bg-surface/80 border border-border',
        variant === 'ghost' && 'bg-transparent hover:bg-surface/60',
        className
      )}
      {...props}
    />
  );
}

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;

export function ButtonLink({
  href,
  children,
  className,
  variant = 'primary',
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        variant === 'primary' &&
          'bg-accent text-white hover:bg-accent/90 shadow-sm shadow-accent/20',
        variant === 'secondary' &&
          'bg-surface text-foreground hover:bg-surface/80 border border-border',
        variant === 'ghost' && 'bg-transparent hover:bg-surface/60',
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
