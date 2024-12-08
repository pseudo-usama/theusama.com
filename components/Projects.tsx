import ProjectCard from './ProjectCard';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from 'next/link';
import data from "@/lib/data";

export default function Projects() {
  const featuredProjects = data.projects.slice(0, data.projectsConfig.featuredCount);

  return (
    <section className="py-12 sm:py-16 px-4 bg-white dark:bg-gray-800" id="projects">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold">Featured Projects</h2>
          <Button variant="outline" asChild className="w-full sm:w-auto">
            <Link href="/projects" className="inline-flex items-center justify-center gap-2">
              View All Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
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
    </section>
  );
}