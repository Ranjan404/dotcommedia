import { pageMetadata, breadcrumbJsonLd } from '@/lib/seo';
import { JsonLd } from '@/components/json-ld';
import { ContactForm } from '@/components/contact-form';
import { ContactCard } from '@/components/contact-card';
import { contact, offices } from '@/data/site';
import { MailIcon, PhoneIcon, WhatsAppIcon } from '@/components/icons';
import { services } from '@/data/services';

export const metadata = pageMetadata({
  title: 'Contact',
  description: 'Contact DotComMedia in Delhi or Patna to discuss education websites, SEO, campaigns and creative work.',
  path: '/contact',
});

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const { service } = await searchParams;
  const defaultService = services.some((item) => item.slug === service) ? service : '';

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ])}
      />
      <section className="bg-night py-20 text-chalk">
        <div className="container-page">
          <p className="label text-brass">Contact</p>
          <h1 className="display mt-4 max-w-3xl text-4xl sm:text-6xl">
            Let&apos;s make the next digital move clearer.
          </h1>
          <p className="mt-6 max-w-xl leading-8 text-white/70">
            Share a little context. Use the form, or reach us by phone, WhatsApp or email.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="grid gap-4 content-start">
            <ContactCard
              label="Phone"
              href={contact.phoneHref}
              value={contact.phone}
              icon={<PhoneIcon />}
            />
            <ContactCard
              label="WhatsApp"
              href={contact.whatsapp}
              value="Message on WhatsApp"
              icon={<WhatsAppIcon />}
              external
            />
            {contact.emails.map((email) => (
              <ContactCard
                key={email.address}
                label={email.label}
                href={`mailto:${email.address}`}
                value={email.address}
                icon={<MailIcon />}
              />
            ))}
          </div>
          <ContactForm defaultService={defaultService ?? ''} />
        </div>
      </section>
      <section className="section bg-chalk">
        <div className="container-page">
          <h2 className="display text-3xl">Locations</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {offices.map((office) => (
              <article key={office.name} className="border border-line bg-paper p-6">
                <p className="label">{office.name}</p>
                <p className="mt-4 whitespace-pre-line text-sm leading-6 text-mist">{office.address}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
