import { pageMetadata } from '@/lib/seo';
import { services } from '@/data/services';
import { ServiceGrid } from '@/components/service-grid';
import { SectionHeading } from '@/components/section-heading';
import { ProcessTimeline } from '@/components/process-timeline';
import { CTASection } from '@/components/cta-section';
import { JsonLd } from '@/components/json-ld';
import { breadcrumbJsonLd } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Education Digital Services',
  description:
    'SEO, websites, advertising, creative, video, landing pages, lead nurturing and brand visibility for education organisations.',
  path: '/services',
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
        ])}
      />
      <section className="bg-night py-20 text-chalk">
        <div className="container-page">
          <p className="label text-brass">Services</p>
          <h1 className="display mt-4 max-w-3xl text-4xl sm:text-6xl">
            The specialist skills behind a clearer digital presence.
          </h1>
          <p className="mt-6 max-w-2xl leading-8 text-white/70">
            Use a single discipline, or connect several into one plan. Each service below includes
            deliverables, benefits and a path to talk.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container-page">
          <ServiceGrid items={services} />
        </div>
      </section>
      <section className="section bg-chalk">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <SectionHeading
            label="How an engagement usually starts"
            title="Begin with the decision you want to make easier."
            copy="We then choose the work that supports that answer—rather than selling a fixed package."
          />
          <ProcessTimeline
            steps={[
              { step: 'Frame', detail: 'Define the audience and the decision you want to support.' },
              { step: 'Prioritise', detail: 'Pick the digital opportunity with the most useful leverage.' },
              { step: 'Produce', detail: 'Design and build the assets or systems required.' },
              { step: 'Review', detail: 'Look at real use and refine.' },
            ]}
          />
        </div>
      </section>
      <CTASection label="Your next move" title="Tell us which part of the journey is working least well." />
    </>
  );
}
