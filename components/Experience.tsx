import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Briefcase } from "lucide-react";
import Link from 'next/link';
import data from "@/lib/data";

export default function Experience() {
  const { summary, highlights, yearsOfExperience, currentCompany } = data.generalExperience;

  return (
    <section className="py-12 sm:py-16 px-4 bg-white dark:bg-gray-800" id="experience">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold">Experience</h2>
          <Button variant="outline" asChild className="w-full sm:w-auto">
            <Link href="/experience" className="inline-flex items-center justify-center gap-2">
              View Full Experience
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span className="text-sm sm:text-base">{yearsOfExperience}+ Years of Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span className="text-sm sm:text-base">Currently at {currentCompany}</span>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-base sm:text-lg leading-relaxed">{summary}</p>
            <ul className="grid gap-3">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  </div>
                  <span className="text-sm sm:text-base leading-relaxed text-muted-foreground">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}