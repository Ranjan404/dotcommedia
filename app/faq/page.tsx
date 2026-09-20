import { pageMetadata, breadcrumbJsonLd } from '@/lib/seo';
import { JsonLd } from '@/components/json-ld';
import { FAQAccordion } from '@/components/faq-accordion';
import { faqs } from '@/data/site';
import { CTASection } from '@/components/cta-section';

export const metadata = pageMetadata({
  title: 'FAQ',
  description: 'Answers about DotComMedia services, working style and how to start a project.',
  path: '/faq',
});

export default function FAQPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'FAQ', path: '/faq' },
        ])}
      />
      <section className="bg-night py-20 text-chalk">
        <div className="container-page">
          <p className="label text-brass">FAQ</p>
          <h1 className="display mt-4 text-4xl sm:text-6xl">Clear answers before the first call.</h1>
        </div>
      </section>
      <section className="section">
        <div className="container-page max-w-3xl">
          <FAQAccordion items={faqs} />
        </div>
      </section>
      <CTASection label="Still unsure" title="Send the brief as it stands. We can help shape the next question." />
    </>
  );
}
