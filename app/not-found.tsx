import { CTAButton } from '@/components/cta-button';

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-page max-w-2xl">
        <p className="label">404</p>
        <h1 className="display mt-4 text-4xl sm:text-5xl">This page is not in the prospectus.</h1>
        <p className="mt-4 leading-7 text-mist">The address may have changed, or the page does not exist.</p>
        <div className="mt-8">
          <CTAButton href="/">Return home</CTAButton>
        </div>
      </div>
    </section>
  );
}
