import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProject, projects } from '@/data/projects';
import { pageMetadata, breadcrumbJsonLd } from '@/lib/seo';
import { JsonLd } from '@/components/json-ld';
import { CaseStudy } from '@/components/case-study';

type Params = { project: string };

export function generateStaticParams() {
  return projects.map((item) => ({ project: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { project } = await params;
  const item = getProject(project);
  if (!item) return { title: 'Case study' };
  return pageMetadata({
    title: `${item.title} — sample case study`,
    description: item.description,
    path: `/our-work/${item.slug}`,
  });
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { project } = await params;
  const item = getProject(project);
  if (!item) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Our Work', path: '/our-work' },
          { name: item.title, path: `/our-work/${item.slug}` },
        ])}
      />
      <CaseStudy project={item} />
    </>
  );
}
