import Link from 'next/link';
import { pageMetadata, breadcrumbJsonLd } from '@/lib/seo';
import { JsonLd } from '@/components/json-ld';
import { PortfolioGrid } from '@/components/portfolio-grid';
import { filterProjects, featuredProject, projectCategories } from '@/data/projects';
import { PortfolioCard } from '@/components/portfolio-card';
import { CTASection } from '@/components/cta-section';
import type { ProjectCategory } from '@/data/types';

export const metadata = pageMetadata({
  title: 'Our Work',
  description:
    'Sample portfolio concepts for education websites, campaigns, search and creative work. Structured for real case studies later.',
  path: '/our-work',
});

export default async function WorkPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const active = (projectCategories.includes(category as ProjectCategory) ? category : 'All') as
    | ProjectCategory
    | 'All';
  const items = filterProjects(active);
  const featured = featuredProject();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Our Work', path: '/our-work' },
        ])}
      />
      <section className="border-b border-line py-20">
        <div className="container-page">
          <p className="label">Our work</p>
          <h1 className="display mt-4 max-w-3xl text-4xl sm:text-6xl">
            Directions for education brands, shown as sample concepts.
          </h1>
          <p className="mt-6 max-w-2xl leading-8 text-mist">
            These projects are demo placeholders. Replace titles, copy and visuals with real case studies when
            they are ready. No results or client relationships are claimed here.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container-page">
          {active === 'All' ? (
            <div className="mb-10">
              <PortfolioCard project={featured} />
            </div>
          ) : null}
          <div className="mb-8 flex flex-wrap gap-2" role="navigation" aria-label="Project categories">
            {projectCategories.map((item) => {
              const href = item === 'All' ? '/our-work' : `/our-work?category=${item}`;
              const selected = active === item;
              return (
                <Link
                  key={item}
                  href={href}
                  className={`border px-3 py-2 text-sm font-semibold transition-colors ${
                    selected ? 'border-night bg-night text-chalk' : 'border-line bg-chalk hover:border-night'
                  }`}
                  aria-current={selected ? 'page' : undefined}
                >
                  {item}
                </Link>
              );
            })}
          </div>
          <PortfolioGrid items={items} />
        </div>
      </section>
      <CTASection label="A live brief" title="If you have a real project, we can replace these samples with yours." />
    </>
  );
}
