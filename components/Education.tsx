import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, Award } from "lucide-react";
import data from "@/lib/data";

export default function Education() {
  return (
    <section className="py-12 sm:py-16 px-4" id="education">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">Education</h2>
        
        <div className="space-y-6">
          {data.education.map((item, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-4 sm:p-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                      <h3 className="text-lg sm:text-xl font-semibold">{item.degree}</h3>
                    </div>
                    <h4 className="text-base sm:text-lg text-muted-foreground">{item.school}</h4>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                      <p className="text-sm sm:text-base">{item.period}</p>
                    </div>
                    {item.gpa && (
                      <div className="flex items-center gap-2">
                        <Award className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500 flex-shrink-0" />
                        <p className="text-sm sm:text-base font-medium">CGPA: {item.gpa}</p>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {item.courses.map((course, i) => (
                      <span 
                        key={i} 
                        className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs sm:text-sm"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}