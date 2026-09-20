import { CTAButton } from './cta-button';

export function CTASection({
  label,
  title,
  href = '/contact',
  action = "Let's Talk",
  dark = true,
}: {
  label: string;
  title: string;
  href?: string;
  action?: string;
  dark?: boolean;
}) {
  return (
    <section className={dark ? 'bg-night py-16 text-chalk' : 'bg-moss py-16 text-chalk'}>
      <div className="container-page flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <div>
          <p className="label text-brass">{label}</p>
          <h2 className="display mt-3 max-w-2xl text-3xl sm:text-4xl">{title}</h2>
        </div>
        <CTAButton href={href} variant="light">
          {action}
        </CTAButton>
      </div>
    </section>
  );
}
