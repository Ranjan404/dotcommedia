import type { Project } from '@/data/types';
import { CTAButton } from './cta-button';

export function CaseStudy({ project }: { project: Project }) {
  const [a, b, c] = project.palette;

  return (
    <>
      <section className="py-20 text-chalk" style={{ background: b }}>
        <div className="container-page">
          <p className="label text-brass">
            {project.industry} · {project.category}
            {project.isSample ? ' · Sample concept' : ''}
          </p>
          <h1 className="display mt-4 max-w-4xl text-4xl sm:text-6xl">{project.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">{project.description}</p>
        </div>
      </section>
      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <aside>
            <p className="label">Services used</p>
            <ul className="mt-4 grid gap-2">
              {project.services.map((item) => (
                <li key={item} className="border border-line bg-chalk px-4 py-3 text-sm font-semibold">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex h-40 overflow-hidden">
              <div className="flex-1" style={{ background: a }} />
              <div className="flex-1" style={{ background: b }} />
              <div className="flex-1" style={{ background: c }} />
            </div>
          </aside>
          <div className="grid gap-10">
            <div>
              <h2 className="display text-3xl">The challenge</h2>
              <p className="mt-4 leading-7 text-mist">{project.challenge}</p>
            </div>
            <div>
              <h2 className="display text-3xl">The direction</h2>
              <p className="mt-4 leading-7 text-mist">{project.solution}</p>
            </div>
            <div>
              <h2 className="display text-3xl">How we approached it</h2>
              <ul className="mt-4 grid gap-3">
                {project.approach.map((item) => (
                  <li key={item} className="border-l-2 border-moss pl-4 text-mist">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="display text-3xl">Outcomes</h2>
              <p className="mt-4 leading-7 text-mist">
                This is a sample case-study framework. Measurable results should be added only when
                a real project and verified data are available. No client names or performance claims
                here are real.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-night py-16 text-chalk">
        <div className="container-page flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <h2 className="display max-w-xl text-3xl">Have a similar brief?</h2>
          <CTAButton href="/contact" variant="light">
            Let&apos;s Talk
          </CTAButton>
        </div>
      </section>
    </>
  );
}
