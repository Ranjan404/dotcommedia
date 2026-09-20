'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/data/site';
import { CTAButton } from './cta-button';

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
      {navLinks.map((link) => {
        const current = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className="nav-link"
            aria-current={current ? 'page' : undefined}
          >
            {link.label}
          </Link>
        );
      })}
      <CTAButton href="/contact">Let&apos;s Talk</CTAButton>
    </nav>
  );
}
