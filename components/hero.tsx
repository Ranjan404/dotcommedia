import { CTAButton } from './cta-button';
import { CampusVisual } from './campus-visual';
import { AnimatedBackground } from './animated-background';

export function Hero() {
  return (
    <AnimatedBackground className="border-b border-line">
      <div className="container-page grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div>
          <p className="label">For schools, colleges and learning businesses</p>
          <h1 className="display mt-4 max-w-3xl text-4xl leading-[1.08] text-night sm:text-5xl lg:text-6xl">
            Digital growth built for education.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-mist">
            DotComMedia designs websites, search, advertising, creative and lead journeys as one
            system—so prospective learners can find you, understand the offer, and take a useful next step.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CTAButton href="/contact">Let&apos;s Talk</CTAButton>
            <CTAButton href="/our-work" variant="ghost">
              View Our Work
            </CTAButton>
          </div>
        </div>
        <CampusVisual />
      </div>
    </AnimatedBackground>
  );
}
