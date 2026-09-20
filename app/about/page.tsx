import { pageMetadata } from '@/lib/seo';
import { SectionHeading } from '@/components/section-heading';
import { CTASection } from '@/components/cta-section';
import { JsonLd } from '@/components/json-ld';
import { breadcrumbJsonLd } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'About',
  description:
    'DotComMedia is a digital studio for schools, colleges, universities, coaching institutes and EdTech companies.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }])} />
      <section className="border-b border-line py-20">
        <div className="container-page">
          <p className="label">About</p>
          <h1 className="display mt-4 max-w-4xl text-4xl sm:text-6xl">
            Education deserves digital work with intent behind it.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-mist">
            DotComMedia helps learning organisations connect their offer to the people looking for it—through
            considered strategy, useful design and practical digital execution.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <SectionHeading
            label="How we work"
            title="Clear thinking, then making."
          />
          <div className="grid gap-5 leading-7 text-mist">
            <p>
              Choosing a school, college, course or learning product is a high-consideration decision. A website,
              campaign or content system should respect that: it should make comparison easier, not louder.
            </p>
            <p>
              We bring design, technology, search, advertising and operational thinking into one brief so the
              public-facing work matches how admissions, counselling and marketing teams actually operate.
            </p>
            <p>
              We do not publish awards, headcount, revenue or client logos that we cannot verify. If a claim is
              not in the brief, it is not on this site.
            </p>
          </div>
        </div>
      </section>
      <section className="section bg-night text-chalk">
        <div className="container-page grid gap-6 md:grid-cols-3">
          {[
            ['Education first', 'We design around learners, parents, faculty and the staff who follow up enquiries.'],
            ['Strategy plus craft', 'Plans are only useful if they survive design, copy and engineering.'],
            ['Built to be maintained', 'Systems should still make sense after the launch week is over.'],
          ].map(([title, copy]) => (
            <article key={title} className="border border-white/10 p-7">
              <h2 className="display text-2xl">{title}</h2>
              <p className="mt-4 text-sm leading-6 text-white/70">{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <CTASection
        label="Work with us"
        title="Bring the right disciplines around the next education brief."
      />
    </>
  );
}
