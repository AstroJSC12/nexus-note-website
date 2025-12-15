import Link from 'next/link';
import Image from 'next/image';

export function Logo({ href = '/' }: { href?: string }) {
  return (
    <Link href={href} className="group inline-flex items-center gap-2">
      <Image
        src="/NexusNote_Icon.png"
        alt="Nexus Note"
        width={32}
        height={32}
        className="rounded-lg"
      />
      <span className="text-sm font-semibold tracking-tight text-foreground">
        <span className="text-accent">Nexus</span>
        <span>Note</span>
      </span>
    </Link>
  );
}
