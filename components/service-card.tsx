import Link from 'next/link';
import type { Service } from '@/data/types';
import { Arrow, ServiceGlyph } from './icons';

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="service-card group flex h-full flex-col p-6">
      <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-line text-moss transition-colors group-hover:border-moss group-hover:bg-moss group-hover:text-chalk">
        <ServiceGlyph name={service.icon} />
      </span>
      <h3 className="display mt-5 text-2xl">{service.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-mist">{service.short}</p>
      <p className="mt-4 text-sm font-semibold text-night">{service.highlight}</p>
      <ul className="mt-4 grid gap-1.5 text-sm text-mist">
        {service.deliverables.slice(0, 3).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-mist">{service.benefits[0]}</p>
      <Link
        href={`/services/${service.slug}`}
        className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-moss transition-colors hover:text-night"
      >
        {service.cta} <Arrow />
      </Link>
    </article>
  );
}

export function ServiceGrid({ items }: { items: Service[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((service) => (
        <ServiceCard key={service.slug} service={service} />
      ))}
    </div>
  );
}
