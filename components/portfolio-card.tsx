import Link from 'next/link';
import type { Project } from '@/data/types';
import { Arrow } from './icons';

function Art({ project }: { project: Project }) {
  const [a, b, c] = project.palette;
  return (
    <div className="relative h-56 overflow-hidden" style={{ background: b }}>
      <div className="art absolute inset-0">
        <div className="absolute left-6 top-8 h-28 w-24" style={{ background: a }} />
        <div className="absolute right-8 top-12 h-20 w-36" style={{ background: c }} />
        <div className="absolute bottom-6 left-10 h-16 w-2/3 bg-chalk/90 p-3">
          <div className="h-2 w-3/4 bg-line" />
          <div className="mt-2 h-2 w-1/2 bg-line" />
        </div>
      </div>
    </div>
  );
}

export function PortfolioCard({ project }: { project: Project }) {
  return (
    <article className="portfolio-card overflow-hidden border border-line bg-chalk">
      <Art project={project} />
      <div className="p-6">
        <p className="label">
          {project.category}
          {project.isSample ? ' · Sample concept' : ''}
        </p>
        <h3 className="display mt-2 text-2xl">{project.title}</h3>
        <p className="mt-2 text-sm text-mist">{project.industry}</p>
        <Link
          href={`/our-work/${project.slug}`}
          className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-moss hover:text-night"
        >
          View case study <Arrow />
        </Link>
      </div>
    </article>
  );
}

export function PortfolioGrid({ items }: { items: Project[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {items.map((project) => (
        <PortfolioCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
