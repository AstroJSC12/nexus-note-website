import Link from 'next/link';

export function Logo({ href = '/' }: { href?: string }) {
  return (
    <Link href={href} className="group inline-flex items-center gap-2">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-accent/15 ring-1 ring-accent/25">
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          aria-hidden="true"
          className="text-accent"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3.5c-.4 0-.8.15-1.1.4L4.1 8.3c-.4.3-.6.7-.6 1.2v5c0 .5.2.9.6 1.2l6.8 4.4c.6.4 1.4.4 2 0l6.8-4.4c.4-.3.6-.7.6-1.2v-5c0-.5-.2-.9-.6-1.2l-6.8-4.4c-.3-.25-.7-.4-1.1-.4Z"
          />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
          <circle cx="12" cy="7" r="1" fill="currentColor" />
          <circle cx="12" cy="17" r="1" fill="currentColor" />
          <circle cx="7.5" cy="9.5" r="1" fill="currentColor" />
          <circle cx="16.5" cy="9.5" r="1" fill="currentColor" />
          <circle cx="7.5" cy="14.5" r="1" fill="currentColor" />
          <circle cx="16.5" cy="14.5" r="1" fill="currentColor" />
          <line x1="12" y1="10.5" x2="12" y2="8" stroke="currentColor" strokeWidth="1" />
          <line x1="12" y1="13.5" x2="12" y2="16" stroke="currentColor" strokeWidth="1" />
          <line x1="10.7" y1="11.3" x2="8.3" y2="10" stroke="currentColor" strokeWidth="1" />
          <line x1="13.3" y1="11.3" x2="15.7" y2="10" stroke="currentColor" strokeWidth="1" />
          <line x1="10.7" y1="12.7" x2="8.3" y2="14" stroke="currentColor" strokeWidth="1" />
          <line x1="13.3" y1="12.7" x2="15.7" y2="14" stroke="currentColor" strokeWidth="1" />
        </svg>
      </span>
      <span className="text-sm font-semibold tracking-tight text-foreground">
        <span className="text-accent">Nexus</span>
        <span>Note</span>
      </span>
    </Link>
  );
}
