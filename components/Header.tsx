import { Button } from "@/components/ui/button";
import data from "@/lib/data";

export default function Header() {
  const { name, title, bio, socialLinks } = data.header;
  
  return (
    <section className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 md:p-8 text-center">
      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
        <div className="space-y-3 sm:space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">{name}</h1>
          <h2 className="text-xl sm:text-2xl text-muted-foreground">{title}</h2>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <Button 
                key={index} 
                variant="outline" 
                size={link.label === "Resume" ? "default" : "icon"} 
                className="transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href={link.url} target={link.target ?? "_self"} rel="noopener noreferrer" className="inline-flex items-center gap-2">
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  {link.label === "Resume" && "Resume"}
                </a>
              </Button>
            );
          })}
        </div>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed">{bio}</p>
      </div>
    </section>
  );
}