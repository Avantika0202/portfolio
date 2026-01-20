import { SectionHeading } from "./SectionHeading";
import { GraduationCap } from "lucide-react";

export function Education() {
  const education = [
    {
      degree: "Master of Business Administration (HA & HM)",
      institution: "Indian Institute of Management (IIM) Jammu / AIIMS Jammu",
      duration: "2024 – 2026",
      details: "Focusing on the intersection of strategic management and healthcare delivery systems."
    },
    {
      degree: "Bachelor of Business Administration (BBA)",
      institution: "PSIT College of Higher Education, Kanpur",
      duration: "2020 – 2023",
      details: "Specialized in General Management and Business Operations."
    }
  ];

  return (
    <section id="education" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeading title="Education" subtitle="Academic Background" />
        
        <div className="max-w-4xl space-y-12">
          {education.map((edu, idx) => (
            <div key={idx} className="relative pl-8 md:pl-0 border-l md:border-l-0 border-accent/30 md:grid md:grid-cols-[200px_1fr] gap-8">
              <div className="mb-4 md:mb-0 md:text-right md:pr-8 md:border-r border-accent/30 relative">
                <span className="text-sm font-bold text-accent tracking-wider uppercase block mb-1">
                  {edu.duration}
                </span>
                <div className="hidden md:block absolute top-1 -right-[5px] w-2.5 h-2.5 rounded-full bg-accent" />
              </div>
              
              <div className="relative">
                <div className="md:hidden absolute top-1 -left-[37px] w-2.5 h-2.5 rounded-full bg-accent" />
                <div className="flex items-center gap-3 mb-1">
                  <GraduationCap className="text-accent" size={24} />
                  <h3 className="font-serif text-2xl font-semibold text-primary">
                    {edu.degree}
                  </h3>
                </div>
                <h4 className="text-lg text-muted-foreground font-medium mb-3">
                  {edu.institution}
                </h4>
                <p className="text-muted-foreground font-body leading-relaxed">
                  {edu.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
