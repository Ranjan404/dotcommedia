import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getService, services } from '@/data/services';
import { pageMetadata, breadcrumbJsonLd, serviceJsonLd } from '@/lib/seo';
import { JsonLd } from '@/components/json-ld';
import { ProcessTimeline } from '@/components/process-timeline';
import { FAQAccordion } from '@/components/faq-accordion';
import { CTAButton } from '@/components/cta-button';
import { ServiceGlyph } from '@/components/icons';
import { CTASection } from '@/components/cta-section';

type Params = { slug: string };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: 'Service' };
  return pageMetadata({
    title: service.title,
    description: service.short,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: service.title, path: `/services/${service.slug}` },
        ])}
      />
      <JsonLd
        data={serviceJsonLd({
          name: service.title,
          description: service.description,
          path: `/services/${service.slug}`,
        })}
      />
      <section className="bg-night py-20 text-chalk">
        <div className="container-page">
          <span className="flex h-12 w-12 items-center justify-center border border-white/20 text-brass">
            <ServiceGlyph name={service.icon} />
          </span>
          <h1 className="display mt-6 max-w-3xl text-4xl sm:text-6xl">{service.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">{service.description}</p>
          <div className="mt-8">
            <CTAButton href={`/contact?service=${service.slug}`} variant="light">
              {service.cta}
            </CTAButton>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="display text-3xl">The problem</h2>
            <p className="mt-4 leading-7 text-mist">{service.problem}</p>
          </div>
          <div>
            <h2 className="display text-3xl">The solution</h2>
            <p className="mt-4 leading-7 text-mist">{service.solution}</p>
          </div>
        </div>
      </section>
      <section className="section bg-chalk">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="display text-3xl">What we deliver</h2>
            <ul className="mt-6 grid gap-3">
              {service.deliverables.map((item) => (
                <li key={item} className="border-l-2 border-moss pl-4 text-mist">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="display text-3xl">Benefits</h2>
            <ul className="mt-6 grid gap-3">
              {service.benefits.map((item) => (
                <li key={item} className="border-l-2 border-brass pl-4 text-mist">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <h2 className="display text-3xl">Process</h2>
          <ProcessTimeline steps={service.process} />
        </div>
      </section>
      <section className="section bg-chalk">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <h2 className="display text-3xl">Questions</h2>
          <FAQAccordion items={service.faqs} />
        </div>
      </section>
      <CTASection
        label={service.title}
        title={service.cta}
        href={`/contact?service=${service.slug}`}
      />
    </>
  );
}
