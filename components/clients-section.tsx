'use client';

import { ScrollReveal } from './scroll-reveal';
import { clients } from '@/data/site';

export function ClientsSection() {
  return (
    <section className="section border-y border-line bg-chalk">
      <div className="container-page">
        <ScrollReveal>
          <div className="text-center">
            <p className="label">Our clients</p>
            <h2 className="display mt-3 text-3xl leading-tight sm:text-4xl">
              Trusted by leading education brands
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-mist">
              We work with schools, preschools and education networks that value clarity and craft in their digital presence.
            </p>
          </div>
        </ScrollReveal>

        {/* Marquee for md+ screens */}
        <div className="relative mt-12 hidden overflow-hidden md:block">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-chalk to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-chalk to-transparent" />
          <div className="clients-track">
            {[...clients, ...clients, ...clients, ...clients].map((client, i) => (
              <div
                key={`m-${client}-${i}`}
                className="mx-3 flex min-w-[240px] items-center justify-center rounded-xl border border-line bg-white px-8 py-7 shadow-sm transition-all hover:border-accent hover:shadow-lift"
              >
                <span className="display text-center text-xl text-night">{client}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Static grid for small screens */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:hidden">
          {clients.map((client) => (
            <ScrollReveal key={client}>
              <div className="flex items-center justify-center rounded-xl border border-line bg-white px-6 py-8 text-center transition-all hover:border-accent hover:shadow-lift">
                <span className="display text-xl text-night">{client}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}