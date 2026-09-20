import Link from 'next/link';
import { contact, navLinks } from '@/data/site';
import { services } from '@/data/services';
import { Logo } from './logo';
import { MailIcon, PhoneIcon, WhatsAppIcon } from './icons';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-night text-chalk">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-7 text-white/70">
            Digital systems for schools, colleges, universities, coaching institutes and learning platforms.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={contact.phoneHref}
              className="flex h-10 w-10 items-center justify-center border border-white/15 transition-colors hover:border-brass hover:text-brass"
              aria-label={`Call ${contact.phone}`}
            >
              <PhoneIcon className="h-4 w-4" />
            </a>
            <a
              href={contact.whatsapp}
              className="flex h-10 w-10 items-center justify-center border border-white/15 transition-colors hover:border-brass hover:text-brass"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${contact.emails[0].address}`}
              className="flex h-10 w-10 items-center justify-center border border-white/15 transition-colors hover:border-brass hover:text-brass"
              aria-label={`Email ${contact.emails[0].address}`}
            >
              <MailIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div>
          <p className="font-semibold">Navigate</p>
          <ul className="mt-4 grid gap-3 text-sm text-white/70">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/faq" className="transition-colors hover:text-white">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Services</p>
          <ul className="mt-4 grid gap-3 text-sm text-white/70">
            {services.slice(0, 6).map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`} className="transition-colors hover:text-white">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold">Contact</p>
          <ul className="mt-4 grid gap-3 text-sm text-white/70">
            <li>
              <a href={contact.phoneHref} className="transition-colors hover:text-white">
                {contact.phone}
              </a>
            </li>
            <li>
              <a href={contact.whatsapp} className="transition-colors hover:text-white">
                WhatsApp
              </a>
            </li>
            {contact.emails.map((email) => (
              <li key={email.address}>
                <a href={`mailto:${email.address}`} className="transition-colors hover:text-white">
                  {email.address}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-3 py-5 text-xs text-white/50 sm:flex-row sm:justify-between">
          <p>© {year} DotComMedia. All rights reserved.</p>
          <Link href="/privacy-policy" className="hover:text-white">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
