import Link from 'next/link';
import type { Industry } from '@/data/types';
import { Arrow } from './icons';

export function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <article className="industry-card flex h-full flex-col p-6">
      <h3 className="display text-2xl">{industry.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-mist">{industry.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {industry.needs.map((need) => (
          <span key={need} className="border border-line px-2.5 py-1 text-xs text-mist">
            {need}
          </span>
        ))}
      </div>
      <Link
        href="/contact"
        className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-moss hover:text-night"
      >
        Discuss this context <Arrow />
      </Link>
    </article>
  );
}
