import * as React from 'react';
import { cn } from '@/lib/utils';
import { Container } from '@/components/site/container';

export function Section({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <section className={cn('py-16 sm:py-20', className)} {...props}>
      <Container>{children}</Container>
    </section>
  );
}
