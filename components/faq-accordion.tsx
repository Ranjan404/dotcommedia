'use client';

import { useId, useState } from 'react';
import type { FAQ } from '@/data/types';
import { ChevronDown } from './icons';

export function FAQAccordion({ items }: { items: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="divide-y divide-line border border-line bg-chalk">
      {items.map((item, index) => {
        const expanded = open === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;
        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                className="flex w-full items-center justify-between gap-4 p-5 text-left font-semibold"
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => setOpen(expanded ? null : index)}
              >
                <span>{item.question}</span>
                <ChevronDown className={`shrink-0 transition-transform ${expanded ? 'rotate-180' : ''}`} />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!expanded}
              className={expanded ? 'px-5 pb-5' : undefined}
            >
              {expanded ? <p className="text-sm leading-6 text-mist">{item.answer}</p> : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}
