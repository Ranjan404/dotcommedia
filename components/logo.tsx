import Link from 'next/link';

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-center gap-2.5" aria-label="DotComMedia home">
      <span className="grid h-8 w-8 grid-cols-2 grid-rows-2 gap-0.5" aria-hidden="true">
        <span className="bg-moss" />
        <span className="bg-brass" />
        <span className="bg-brass" />
        <span className="bg-moss" />
      </span>
      <span className={`text-[1.05rem] font-semibold tracking-tight ${light ? 'text-chalk' : 'text-night'}`}>
        DotComMedia
      </span>
    </Link>
  );
}
