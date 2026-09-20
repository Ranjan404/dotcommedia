import type { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { services } from '@/data/services';
import { site } from '@/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/our-work',
    '/industries',
    '/contact',
    '/faq',
    '/privacy-policy',
  ];

  const now = new Date();

  return [
    ...staticRoutes.map((path) => ({
      url: `${site.url}${path}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: path === '' ? 1 : 0.7,
    })),
    ...services.map((service) => ({
      url: `${site.url}/services/${service.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...projects.map((project) => ({
      url: `${site.url}/our-work/${project.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    })),
  ];
}
