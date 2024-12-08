import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { Brain } from "lucide-react";

interface ProjectProps {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
}

export default function ProjectCard({ slug, title, description, technologies }: ProjectProps) {
  return (
    <Link href={`/projects/${slug}`} className="block h-full">
      <Card className="h-full hover:shadow-lg transition-shadow duration-300">
        <CardContent className="p-4 sm:p-6">
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <Brain className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
            <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
          </div>
          <p className="text-sm sm:text-base mb-3 sm:mb-4 line-clamp-2">{description}</p>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {technologies.slice(0, 4).map((tech, index) => (
              <span key={index} className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs sm:text-sm">
                {tech}
              </span>
            ))}
            {technologies.length > 4 && (
              <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs sm:text-sm">
                +{technologies.length - 4} more
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}