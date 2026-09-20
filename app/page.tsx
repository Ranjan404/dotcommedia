import { Hero } from '@/components/hero';
import { SectionHeading } from '@/components/section-heading';
import { ServiceGrid } from '@/components/service-grid';
import { IndustryCard } from '@/components/industry-card';
import { ProcessTimeline } from '@/components/process-timeline';
import { PortfolioCard } from '@/components/portfolio-card';
import { FAQAccordion } from '@/components/faq-accordion';
import { CTASection } from '@/components/cta-section';
import { CTAButton } from '@/components/cta-button';
import { ScrollReveal } from '@/components/scroll-reveal';
import { services } from '@/data/services';
import { featuredProject, projects } from '@/data/projects';
import { industries } from '@/data/industries';
import { faqs } from '@/data/site';

const problems = [
  'Websites that look finished but do not help a parent or student decide.',
  'Search pages that miss the questions people actually type.',
  'Campaigns that send traffic into a confusing next step.',
  'Enquiry follow-up that depends on whoever saw the inbox first.',
];

const capabilities = [
  {
    title: 'A credible digital front door',
    copy: 'Websites and landing pages that present programmes clearly and earn trust on first visit.',
  },
  {
    title: 'A focused visibility plan',
    copy: 'Search, social and paid campaigns aimed at the moments when education decisions are made.',
  },
  {
    title: 'A usable enquiry path',
    copy: 'Forms, routing and follow-up designed so interest is not lost between channels.',
  },
];

const reasons = [
  {
    title: 'Education is the brief, not an afterthought',
    copy: 'Programme pages, campuses, intakes and counselling journeys shape the work—not generic marketing templates.',
  },
  {
    title: 'Strategy stays attached to making',
    copy: 'The same team that maps the journey also designs, writes and builds, so the plan does not dissolve in production.',
  },
  {
    title: 'No theatre, no invented results',
    copy: 'We do not promise rankings, admissions, ROI or lead volumes. We propose work that can be judged on craft and usefulness.',
  },
];

const process = [
  { step: 'Discover', detail: 'Understand the audience, offer, current site and operational constraints.' },
  { step: 'Plan', detail: 'Choose the smallest set of work that will make the next step clearer.' },
  { step: 'Build', detail: 'Design and produce the website, campaign or system with care.' },
  { step: 'Review', detail: 'Look at real behaviour, then refine what is actually used.' },
];

export default function HomePage() {
  const featured = featuredProject();
  const remaining = projects.filter((project) => project.slug !== featured.slug).slice(0, 3);

  return (
    <>
      <Hero />

      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            label="What we hold together"
            title="Websites, search, campaigns and follow-up as one system."
            copy="Education decisions are slow and high-stakes. DotComMedia connects the disciplines that usually sit in separate vendors."
          />
          <div className="grid gap-4">
            {capabilities.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 80}>
                <article className="border border-line bg-chalk p-6">
                  <h3 className="display text-2xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-mist">{item.copy}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-y border-line bg-chalk">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <SectionHeading
            label="The friction"
            title="A modern education offer still fails in ordinary digital places."
            copy="From first search to the enquiry form, each interaction either builds confidence or adds work for the family."
          />
          <ul className="grid gap-4">
            {problems.map((problem) => (
              <li key={problem} className="border-l-2 border-moss pl-4 leading-7 text-mist">
                {problem}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-night text-chalk">
        <div className="container-page">
          <SectionHeading
            light
            label="The response"
            title="Make the next step obvious."
            copy="We design for comparison, not noise: clearer programme information, more relevant visibility, and follow-up the team can actually run."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              'Find: show up for the searches and conversations that matter.',
              'Understand: explain programmes, campuses and outcomes without clutter.',
              'Act: give people one honest path to enquire, visit or apply.',
            ].map((item) => (
              <p key={item} className="border border-white/10 p-6 leading-7 text-white/75">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              label="Services"
              title="Nine disciplines, one education brief."
            />
            <CTAButton href="/services" variant="ghost">
              All services
            </CTAButton>
          </div>
          <div className="mt-10">
            <ServiceGrid items={services} />
          </div>
        </div>
      </section>

      <section className="section bg-chalk">
        <div className="container-page grid gap-10 lg:grid-cols-3">
          <SectionHeading
            label="Why DotComMedia"
            title="A specialist partner for learning organisations."
          />
          <div className="grid gap-6 lg:col-span-2">
            {reasons.map((item) => (
              <article key={item.title} className="border-t border-line pt-5">
                <h3 className="display text-2xl">{item.title}</h3>
                <p className="mt-3 leading-7 text-mist">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <SectionHeading
            label="Process"
            title="A practical sequence, not a ritual."
          />
          <ProcessTimeline steps={process} />
        </div>
      </section>

      <section className="section border-y border-line bg-chalk">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              label="Selected work"
              title="Sample directions, ready to replace with real projects."
              copy="Every case study is labelled as a sample concept. No invented clients or results."
            />
            <CTAButton href="/our-work" variant="ghost">
              See all work
            </CTAButton>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <div className="lg:col-span-2">
              <PortfolioCard project={featured} />
            </div>
            {remaining.map((project) => (
              <PortfolioCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <SectionHeading
            label="Industries"
            title="Built around how education organisations actually grow."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {industries.map((industry) => (
              <IndustryCard key={industry.slug} industry={industry} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-chalk">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <SectionHeading
            label="Questions"
            title="Clear answers before the first call."
          />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTASection
        label="Start a conversation"
        title="Tell us what needs to work better for the people you want to reach."
      />
    </>
  );
}
