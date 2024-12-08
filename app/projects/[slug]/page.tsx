import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { getProjectData, getAllProjectSlugs } from '@/lib/projects';
import { getBreadcrumbs } from '@/lib/breadcrumbs';
import { notFound } from 'next/navigation';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProjectData(params.slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | Usama Iftikhar`,
    description: project.description,
    keywords: [...project.technologies, 'Project', 'Portfolio', 'Usama Iftikhar'],
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectData(params.slug);

  if (!project) {
    notFound();
  }

  const breadcrumbItems = [
    ...getBreadcrumbs('/projects'),
    { title: project.title, href: `/projects/${params.slug}` }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-14 flex items-center">
            <Breadcrumb items={breadcrumbItems} />
          </div>
        </div>
      </div>

      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span key={index} className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm">
              {tech}
            </span>
          ))}
        </div>

        {project.githubUrl && (
          <Button variant="outline" size="lg" className="mb-8" asChild>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
              <Github className="h-5 w-5" />
              View on GitHub
            </a>
          </Button>
        )}

        <div className="prose dark:prose-invert max-w-none">
          {project.content.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
              <p className="mb-4">{section.content}</p>
              {section.bulletPoints && (
                <ul className="list-disc pl-6">
                  {section.bulletPoints.map((point, i) => (
                    <li key={i} className="mb-2">{point}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}