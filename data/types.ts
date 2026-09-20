export type ServiceIconName =
  | 'search'
  | 'social'
  | 'ads'
  | 'web'
  | 'video'
  | 'creative'
  | 'automation'
  | 'landing'
  | 'pr';

export type Service = {
  slug: string;
  title: string;
  icon: ServiceIconName;
  short: string;
  highlight: string;
  description: string;
  problem: string;
  solution: string;
  deliverables: string[];
  benefits: string[];
  process: { step: string; detail: string }[];
  faqs: { question: string; answer: string }[];
  cta: string;
};

export type ProjectCategory = 'Website' | 'Campaign' | 'Search' | 'Creative';

export type Project = {
  slug: string;
  title: string;
  industry: string;
  category: ProjectCategory;
  challenge: string;
  solution: string;
  approach: string[];
  services: string[];
  palette: [string, string, string];
  description: string;
  featured: boolean;
  isSample: true;
};

export type Industry = {
  title: string;
  slug: string;
  description: string;
  needs: string[];
};

export type FAQ = {
  question: string;
  answer: string;
};

export type Office = {
  name: string;
  address: string;
};

export type NavLink = {
  label: string;
  href: string;
};
