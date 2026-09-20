import type { FAQ, NavLink, Office } from './types';

export const site = {
  name: 'DotComMedia',
  tagline: 'Digital Growth Built for Education',
  url: 'https://dotcommedia.in',
  description:
    'DotComMedia helps schools, colleges, universities, coaching institutes and EdTech companies grow through websites, SEO, advertising, creative and lead systems.',
  locale: 'en_IN',
} as const;

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Our Work', href: '/our-work' },
  { label: 'Industries', href: '/industries' },
  { label: 'Contact', href: '/contact' },
];

export const offices: Office[] = [
  {
    name: 'Corporate Office',
    address: 'AFE Part-2, Okhla, South Delhi,\nNew Delhi – 110025',
  },
  {
    name: 'Mailing Address',
    address: '403, Ganesh Narayan Apartment,\nInfront of Curis Hospital,\nSaguna More, Patna 801503',
  },
  {
    name: 'Be For Nation Trust Office',
    address: 'South Mandiri, Near Income Tax Crossing,\nPatna 800001, Bihar',
  },
];

export const contact = {
  phone: '+91 95044 23793',
  phoneHref: 'tel:+919504423793',
  whatsapp: 'https://wa.me/919504423793',
  emails: [
    { label: 'General', address: 'info@meritsearcholympiad.in' },
    { label: 'Support', address: 'support@meritsearcholympiad.in' },
    { label: 'Alternate', address: 'meritsearcholympiad@gmail.com' },
  ],
} as const;

export const faqs: FAQ[] = [
  {
    question: 'What services does DotComMedia provide?',
    answer:
      'We provide SEO, websites, paid advertising, social media, creative, video, landing pages, lead nurturing and digital brand visibility support for education organisations.',
  },
  {
    question: 'Who do you work with?',
    answer:
      'Our work is designed for schools, colleges, universities, coaching institutes, EdTech companies, online learning platforms and training providers.',
  },
  {
    question: 'Can you build education websites?',
    answer:
      'Yes. We design and develop institutional websites, programme pages and campaign landing pages with a focus on clarity, speed and accessibility.',
  },
  {
    question: 'Do you manage Google Ads and social advertising?',
    answer:
      'Yes. We can support search, display, video and paid-social campaign planning and optimisation. Results depend on market conditions, offer and follow-up, so we do not promise fixed lead volumes or ROI.',
  },
  {
    question: 'How do I start a project?',
    answer:
      'Share your goals, current website or campaigns, and timeline through the contact form, email, phone or WhatsApp. We use that context to decide the right next conversation.',
  },
  {
    question: 'Do you work with smaller institutions?',
    answer:
      'Yes. Scope is tailored to the size, stage and operational capacity of the organisation.',
  },
  {
    question: 'What is your pricing model?',
    answer:
      'Pricing depends on scope, deliverables and timeline. We provide a written proposal after understanding the brief. This site does not list rates because they vary by project.',
  },
];
