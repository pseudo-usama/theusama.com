import ProjectCard from '@/components/ProjectCard';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from 'next/link';
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { getBreadcrumbs } from "@/lib/breadcrumbs";
import data from "@/lib/data";

export const metadata = {
  title: 'Projects | Usama Iftikhar',
  description: 'Browse through my portfolio of machine learning and software development projects.',
};

export default function ProjectsPage() {
  const breadcrumbItems = getBreadcrumbs('/projects');

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container max-w-screen-2xl mx-auto px-4">
          <div className="h-14 flex items-center">
            <Breadcrumb items={breadcrumbItems} />
          </div>
        </div>
      </div>

      <div className="container max-w-6xl mx-auto px-4 py-8 sm:py-12 md:py-16">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">All Projects</h1>
          <Button variant="outline" asChild className="w-full sm:w-auto">
            <Link href="/#projects" className="inline-flex items-center justify-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.projects.map((project, index) => (
            <ProjectCard 
              key={index}
              slug={project.slug}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </main>
  );
}