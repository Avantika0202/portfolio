import { SectionHeading } from "./SectionHeading";
import { Award, Users, Mic2, FileCheck, Calendar, Star, Music, CheckCircle2 } from "lucide-react";

export function Leadership() {
  return (
    <section id="leadership" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
             <SectionHeading title="Leadership & Impact" subtitle="Positions of Responsibility" />
             <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="mt-1">
                    <div className="w-10 h-10 bg-white border border-border flex items-center justify-center text-accent shadow-sm">
                      <Star size={20} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-primary">Coordinator – Cultural Committee</h3>
                    <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">IIM Jammu</p>
                    <ul className="text-muted-foreground font-body text-sm leading-relaxed space-y-1">
                      <li className="flex items-start"><span className="mr-2 text-accent">•</span><span>Selected among the top 10 out of 300+ peers.</span></li>
                      <li className="flex items-start"><span className="mr-2 text-accent">•</span><span>Led planning and execution of annual cultural events.</span></li>
                      <li className="flex items-start"><span className="mr-2 text-accent">•</span><span>Prepared detailed budget sheets and time schedules.</span></li>
                      <li className="flex items-start"><span className="mr-2 text-accent">•</span><span>Coordinated with junior and current batches to streamline execution.</span></li>
                      <li className="flex items-start"><span className="mr-2 text-accent">•</span><span>Served as primary point of contact for event-related operations.</span></li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1">
                    <div className="w-10 h-10 bg-white border border-border flex items-center justify-center text-accent shadow-sm">
                      <Music size={20} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-primary">Member – Groove Dance Club</h3>
                    <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">IIM Jammu</p>
                    <ul className="text-muted-foreground font-body text-sm leading-relaxed space-y-1">
                      <li className="flex items-start"><span className="mr-2 text-accent">•</span><span>Organized and participated in campus dance events.</span></li>
                      <li className="flex items-start"><span className="mr-2 text-accent">•</span><span>Facilitated dance battles to increase student engagement.</span></li>
                      <li className="flex items-start"><span className="mr-2 text-accent">•</span><span>Collaborated with the Cultural Committee on integrated events.</span></li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1">
                    <div className="w-10 h-10 bg-white border border-border flex items-center justify-center text-accent shadow-sm">
                      <Calendar size={20} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-primary">Core Member – Event Management Team, Empyrean</h3>
                    <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">IIM Jammu</p>
                    <ul className="text-muted-foreground font-body text-sm leading-relaxed space-y-1">
                      <li className="flex items-start"><span className="mr-2 text-accent">•</span><span>Part of the core organizing team for a 3-day flagship cultural fest.</span></li>
                      <li className="flex items-start"><span className="mr-2 text-accent">•</span><span>Coordinated cross-functional teams for seamless event execution.</span></li>
                      <li className="flex items-start"><span className="mr-2 text-accent">•</span><span>Managed event scheduling, budgeting, and resource allocation.</span></li>
                      <li className="flex items-start"><span className="mr-2 text-accent">•</span><span>Supported execution of rap battles, competitions, and large-scale events.</span></li>
                    </ul>
                  </div>
                </div>
             </div>
          </div>

          <div className="bg-white p-8 border border-border h-full">
            <h3 className="font-serif text-2xl font-semibold text-primary mb-2">Certifications & Tools</h3>
            <p className="text-sm text-muted-foreground mb-6 italic">Each certification reflects applied capability, not just coursework</p>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-4 flex items-center">
                  <Award className="w-4 h-4 mr-2 text-accent" />
                  Key Certifications
                </h4>
                <div className="space-y-4">
                  {[
                    { title: "SQL for Beginners (MySQL) – Udemy (2023)", desc: "Built foundational database skills for HR and operational data analysis" },
                    { title: "What Is Business Analysis – LinkedIn Learning", desc: "Learned structured need-solution assessment frameworks" },
                    { title: "Excel Skills Job Simulation – JPMorgan Chase & Co.", desc: "Applied Excel techniques in business case simulations" },
                    { title: "Project Management Basics – Coursera", desc: "Strengthened planning, execution, and task coordination fundamentals" }
                  ].map((cert, i) => (
                    <div key={i} className="border-l-2 border-accent/20 pl-4 py-1">
                      <h5 className="text-sm font-semibold text-primary">{cert.title}</h5>
                      <p className="text-xs text-muted-foreground mt-1">{cert.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-4 flex items-center">
                  <Mic2 className="w-4 h-4 mr-2 text-accent" />
                  Applied Tools
                </h4>
                <div className="space-y-3">
                  <div className="bg-muted/50 p-3 border border-border">
                    <h5 className="text-xs font-bold text-primary uppercase mb-1 font-serif">Project Management Tracker – Google Sheets</h5>
                    <p className="text-xs text-muted-foreground leading-relaxed">Designed task trackers to improve project control and clarity</p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {["Advanced Excel", "Power BI", "SPSS", "HRMS Platforms", "Canva", "Google Workspace"].map(tool => (
                      <span key={tool} className="px-3 py-1 bg-muted text-primary text-[10px] font-bold uppercase tracking-wider border border-border">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
