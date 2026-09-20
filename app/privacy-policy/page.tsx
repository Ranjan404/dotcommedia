import { pageMetadata, breadcrumbJsonLd } from '@/lib/seo';
import { JsonLd } from '@/components/json-ld';
import { contact } from '@/data/site';

export const metadata = pageMetadata({
  title: 'Privacy Policy',
  description: 'Placeholder privacy policy for DotComMedia. Review with legal counsel before launch.',
  path: '/privacy-policy',
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Privacy Policy', path: '/privacy-policy' },
        ])}
      />
      <section className="section">
        <article className="container-page max-w-3xl">
          <p className="label">Privacy</p>
          <h1 className="display mt-4 text-4xl sm:text-5xl">Privacy, plainly stated.</h1>
          <p className="mt-6 rounded-none border border-brass/40 bg-chalk p-4 text-sm leading-6 text-mist">
            This is a placeholder policy. It should be reviewed and completed with the organisation&apos;s legal
            and operational requirements before public launch.
          </p>
          <div className="mt-10 grid gap-8 leading-7 text-mist">
            <section>
              <h2 className="display text-2xl text-night">Information you provide</h2>
              <p className="mt-3">
                If you contact us, we may receive the details you choose to submit, such as name, email, phone
                number, organisation and project notes. The on-site form currently stores nothing on a server.
              </p>
            </section>
            <section>
              <h2 className="display text-2xl text-night">How it should be used</h2>
              <p className="mt-3">
                Enquiry information should only be used to respond, to provide requested services, and to keep
                appropriate business records. It should not be sold.
              </p>
            </section>
            <section>
              <h2 className="display text-2xl text-night">Contact</h2>
              <p className="mt-3">
                For privacy questions, write to{' '}
                <a className="font-semibold text-moss" href={`mailto:${contact.emails[0].address}`}>
                  {contact.emails[0].address}
                </a>
                .
              </p>
            </section>
          </div>
        </article>
      </section>
    </>
  );
}
