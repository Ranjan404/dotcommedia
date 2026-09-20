import { pageMetadata, breadcrumbJsonLd } from '@/lib/seo';
import { JsonLd } from '@/components/json-ld';
import { industries } from '@/data/industries';
import { IndustryCard } from '@/components/industry-card';
import { CTASection } from '@/components/cta-section';

export const metadata = pageMetadata({
  title: 'Education Industries',
  description:
    'Digital systems for schools, colleges, universities, coaching institutes, EdTech companies and training businesses.',
  path: '/industries',
});

export default function IndustriesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Industries', path: '/industries' },
        ])}
      />
      <section className="bg-night py-20 text-chalk">
        <div className="container-page">
          <p className="label text-brass">Industries</p>
          <h1 className="display mt-4 max-w-4xl text-4xl sm:text-6xl">
            Different education models. The same need for clarity.
          </h1>
          <p className="mt-6 max-w-2xl leading-8 text-white/70">
            The channels change; the job does not. Help the right people understand the offer and take a next step.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container-page grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry) => (
            <IndustryCard key={industry.slug} industry={industry} />
          ))}
        </div>
      </section>
      <CTASection
        label="Your context"
        title="Describe the institution or product. We will suggest a practical first step."
      />
    </>
  );
}
