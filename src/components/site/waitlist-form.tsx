'use client';

import * as React from 'react';
import { Button } from '@/components/site/button';
import { Input } from '@/components/site/input';

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function WaitlistForm({
  source = 'home',
}: {
  source?: string;
}) {
  const [email, setEmail] = React.useState('');
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = React.useState<string>('');

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage('');

    const trimmed = email.trim();
    if (!trimmed) {
      setStatus('error');
      setMessage('Please enter an email address.');
      return;
    }
    if (!isValidEmail(trimmed)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmed, source }),
      });

      const data = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'Something went wrong.');
      }

      setStatus('success');
      setMessage('You’re on the list. We’ll reach out when Nexus Note is ready.');
    } catch (err) {
      setStatus('error');
      setMessage(err instanceof Error ? err.message : 'Something went wrong.');
    }
  }

  return (
    <form onSubmit={onSubmit} className="w-full">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="flex-1">
          <Input
            type="text"
            inputMode="email"
            autoComplete="email"
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value.toLowerCase())}
            aria-label="Email address"
            disabled={status === 'loading' || status === 'success'}
          />
        </div>
        <Button
          type="submit"
          className="h-11"
          disabled={status === 'loading' || status === 'success'}
        >
          {status === 'loading' ? 'Submitting…' : status === 'success' ? 'Submitted' : 'Join waitlist'}
        </Button>
      </div>
      {message ? (
        <p
          className={
            status === 'success'
              ? 'mt-3 text-sm text-emerald-600 dark:text-emerald-400'
              : 'mt-3 text-sm text-rose-600 dark:text-rose-400'
          }
          role={status === 'error' ? 'alert' : undefined}
        >
          {message}
        </p>
      ) : (
        <p className="mt-3 text-sm text-muted-foreground">
          No spam. No tracking pixels. Just an email when it’s ready.
        </p>
      )}
    </form>
  );
}
