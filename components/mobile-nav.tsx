'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { navLinks } from '@/data/site';
import { CloseIcon } from './icons';
import { Logo } from './logo';
import { CTAButton } from './cta-button';

export function MobileNav({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;

    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose();
    }

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      id="mobile-nav"
      className="fixed inset-0 z-50 bg-paper lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      <div className="container-page flex items-center justify-between py-4">
        <Logo />
        <button
          type="button"
          onClick={onClose}
          className="p-2"
          aria-label="Close navigation"
        >
          <CloseIcon />
        </button>
      </div>
      <nav className="container-page flex flex-col pt-4" aria-label="Mobile">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="border-b border-line py-4 text-lg font-semibold"
          >
            {link.label}
          </Link>
        ))}
        <div className="mt-6">
          <CTAButton href="/contact" className="w-full justify-center">
            Let&apos;s Talk
          </CTAButton>
        </div>
      </nav>
    </div>
  );
}
