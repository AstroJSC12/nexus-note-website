import Link from 'next/link';

export function Logo({ href = '/' }: { href?: string }) {
  return (
    <Link href={href} className="group inline-flex items-center gap-2">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-accent/15 ring-1 ring-accent/25">
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          aria-hidden="true"
          className="text-accent"
        >
          <path
            fill="currentColor"
            d="M12 2.4c.2 0 .4.06.56.18l7 5a1 1 0 0 1 .44.82v6.42c0 .33-.16.64-.42.82l-7 5a1 1 0 0 1-1.16 0l-7-5a1 1 0 0 1-.42-.82V8.4a1 1 0 0 1 .44-.82l7-5c.16-.12.36-.18.56-.18Zm0 2.23L6 8.93v5.54l6 4.28 6-4.28V8.93l-6-4.3Zm0 3.14a1 1 0 0 1 1 1v1.2l2.2 1.26a1 1 0 1 1-1 1.73L13 11.86v2.54l2.2 1.26a1 1 0 1 1-1 1.73L13 16.26V17.5a1 1 0 1 1-2 0v-1.24l-1.2.69a1 1 0 1 1-1-1.73L11 14.4v-2.54l-1.2.69a1 1 0 1 1-1-1.73L11 9.98V8.77a1 1 0 0 1 1-1Z"
          />
        </svg>
      </span>
      <span className="text-sm font-semibold tracking-tight text-foreground">
        <span className="text-accent">Nexus</span>
        <span>Note</span>
      </span>
    </Link>
  );
}
