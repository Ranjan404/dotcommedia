import type { Project, ProjectCategory } from './types';

export const projectCategories: Array<ProjectCategory | 'All'> = [
  'All',
  'Website',
  'Campaign',
  'Search',
  'Creative',
];

export const projects: Project[] = [
  {
    slug: 'northstar-learning',
    title: 'Northstar Learning',
    industry: 'EdTech',
    category: 'Website',
    challenge: 'A multi-product learning offer was difficult to scan on first visit.',
    solution: 'A modular product story and learner-first paths from discovery to enquiry.',
    approach: [
      'Reorganised products by learner goal rather than internal teams.',
      'Designed a quieter visual system so programme choice stayed in front.',
      'Built campaign landing templates that reuse the same language.',
    ],
    services: ['Website Design', 'UX/UI', 'Landing Pages'],
    palette: ['#1a6a58', '#13232e', '#c3922e'],
    description:
      'Sample concept for an EdTech platform that needed a website to make a diverse product set feel coherent. Replace this entry with a real case study when project material is available.',
    featured: true,
    isSample: true,
  },
  {
    slug: 'the-academy-network',
    title: 'The Academy Network',
    industry: 'Coaching institute',
    category: 'Campaign',
    challenge: 'Paid and organic campaigns did not share a visual or narrative system.',
    solution: 'A flexible creative kit for social, video cuts and landing pages.',
    approach: [
      'Defined one campaign idea that could stretch across formats.',
      'Designed templates for ads, stories and counsellor follow-up.',
      'Aligned landing page hierarchy with the ad promise.',
    ],
    services: ['Creative Design', 'Social Advertising', 'Video'],
    palette: ['#2b4c7e', '#13232e', '#e4c27a'],
    description:
      'Sample concept for a coaching institute running simultaneous campaigns. This is not a real client and includes no performance claims.',
    featured: false,
    isSample: true,
  },
  {
    slug: 'campus-forward',
    title: 'Campus Forward',
    industry: 'Higher education',
    category: 'Search',
    challenge: 'Programme pages were hard to find through search and hard to compare on the site.',
    solution: 'A search-led content structure with stronger technical foundations.',
    approach: [
      'Mapped programme queries to a consistent page template.',
      'Resolved crawl and internal-linking issues.',
      'Wrote decision-stage content for faculties and campuses.',
    ],
    services: ['SEO', 'Content Strategy', 'Website'],
    palette: ['#8c3d2b', '#13232e', '#d7c4a3'],
    description:
      'Sample concept showing how a university site might be restructured around search intent. Outcomes should only be added when verified.',
    featured: false,
    isSample: true,
  },
  {
    slug: 'open-studio-courses',
    title: 'Open Studio Courses',
    industry: 'Online learning',
    category: 'Website',
    challenge: 'Course catalogues felt dense and the enrolment path was unclear on mobile.',
    solution: 'A catalogue layout with filters, clearer course cards and a shorter enquiry path.',
    approach: [
      'Designed course cards around outcomes, duration and who it is for.',
      'Reduced form fields on mobile.',
      'Created a reusable landing pattern for seasonal intakes.',
    ],
    services: ['Website Design', 'Landing Pages', 'Lead Automation'],
    palette: ['#3d5a40', '#1b2830', '#c9a66b'],
    description:
      'Sample concept for an online course catalogue. Demo only—replace with a real project when available.',
    featured: false,
    isSample: true,
  },
  {
    slug: 'ridgeway-school',
    title: 'Ridgeway School',
    industry: 'K–12 school',
    category: 'Creative',
    challenge: 'Admissions materials, the website and social posts used unrelated visual languages.',
    solution: 'A prospectus-inspired system for print, web and campus events.',
    approach: [
      'Drew a visual language from campus architecture rather than stock tropes.',
      'Built templates for open days, newsletters and paid ads.',
      'Applied the same system to key website templates.',
    ],
    services: ['Creative Design', 'Website', 'PR & Visibility'],
    palette: ['#355c7d', '#1f2a30', '#c3922e'],
    description:
      'Sample concept for a school admissions identity. Not a real school; no enrolment figures are claimed.',
    featured: false,
    isSample: true,
  },
  {
    slug: 'skillspan-institute',
    title: 'Skillspan Institute',
    industry: 'Professional training',
    category: 'Campaign',
    challenge: 'Campaigns promoted many courses at once, so the next step was unclear.',
    solution: 'Offer-led landing pages and a simpler paid-search structure.',
    approach: [
      'Grouped campaigns by career outcome rather than by internal course codes.',
      'Wrote landing pages with a single enquiry action.',
      'Planned follow-up sequences for counsellor teams.',
    ],
    services: ['Google Ads', 'Landing Pages', 'Lead Automation'],
    palette: ['#1e4d4a', '#13232e', '#d4b483'],
    description:
      'Sample concept for a professional training institute. Demo project only.',
    featured: false,
    isSample: true,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function featuredProject(): Project {
  return projects.find((project) => project.featured) ?? projects[0];
}

export function filterProjects(category: string | undefined): Project[] {
  if (!category || category === 'All') return projects;
  return projects.filter((project) => project.category === category);
}
