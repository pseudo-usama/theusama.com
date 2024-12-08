import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Briefcase, Calendar, Clock, Building2 } from "lucide-react";
import Link from 'next/link';
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { getBreadcrumbs } from "@/lib/breadcrumbs";
import data from "@/lib/data";

export const metadata = {
  title: 'Experience | Usama Iftikhar',
  description: 'Professional experience and career history in machine learning and software development.',
};

export default function ExperiencePage() {
  const breadcrumbItems = getBreadcrumbs('/experience');

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container max-w-screen-2xl mx-auto px-4">
          <div className="h-14 flex items-center">
            <Breadcrumb items={breadcrumbItems} />
          </div>
        </div>
      </div>

      <div className="container max-w-3xl mx-auto px-4 py-8 sm:py-12 md:py-16">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">Work Experience</h1>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span className="text-sm sm:text-base">{data.generalExperience.yearsOfExperience}+ Years</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Building2 className="h-4 w-4" />
                <span className="text-sm sm:text-base">Currently at {data.generalExperience.currentCompany}</span>
              </div>
            </div>
          </div>
          <Button variant="outline" asChild className="w-full sm:w-auto">
            <Link href="/#experience" className="inline-flex items-center justify-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {data.experience.map((item, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-background to-muted/20"
            >
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="flex flex-col gap-4 mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary w-fit">
                    <Briefcase className="h-4 w-4" />
                    <span className="text-sm font-medium">{item.company}</span>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-2">{item.role}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <p className="text-sm">{item.period}</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">{item.description}</p>
                  
                  <div>
                    <h4 className="text-base font-semibold text-primary mb-3">Key Achievements</h4>
                    <div className="bg-muted/50 rounded-lg p-3 sm:p-4 group-hover:bg-muted/80 transition-colors duration-300">
                      <ul className="grid gap-2 sm:gap-3">
                        {item.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="mt-2">
                              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                            </div>
                            <span className="text-sm sm:text-base leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}