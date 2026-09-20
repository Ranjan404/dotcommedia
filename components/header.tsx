'use client';

import { useEffect, useState } from 'react';
import { DesktopNav } from './desktop-nav';
import { MobileNav } from './mobile-nav';
import { Logo } from './logo';
import { MenuIcon } from './icons';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors ${
        scrolled ? 'border-line bg-paper/95 backdrop-blur-md' : 'border-transparent bg-paper'
      }`}
    >
      <div className="container-page flex items-center justify-between py-4">
        <Logo />
        <DesktopNav />
        <button
          type="button"
          className="p-2 lg:hidden"
          aria-label="Open navigation"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
        </button>
      </div>
      <MobileNav open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
