import { SectionHeading } from "./SectionHeading";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Inventory Analytics & Forecasting Dashboard",
    org: "AIIMS Jammu",
    description: "Developed a comprehensive inventory management system for consumable medicines and CSSD materials. Classified 500+ items using ABC-VED matrix analysis and established automated reorder points (ROL/ROQ) through data-driven forecasting in Excel.",
    tags: ["Operations", "Inventory Management", "Data Analytics", "Excel", "ABC-VED Analysis"],
    links: [
      { label: "Inventory Analysis (PDF)", href: "/attached_assets/CIS-1_HAHM24019_AVANTIKA_SRIVASTAVA_1767457830738.pdf" },
      { label: "CSSD Dashboard (PDF)", href: "/attached_assets/CIS-2_HAHM24019_AVANTIKA_SRIVASTAVA_1767457830738.pdf" }
    ]
  },
  {
    title: "Marriott Overbooking Analysis",
    org: "Service Operations Project",
    description: "Applied the Critical Fractile Method to determine optimal overbooking levels, balancing revenue maximization with customer satisfaction risks.",
    tags: ["Revenue Management", "Statistical Modeling", "Strategy"],
    links: [
      { label: "Analysis Report (PDF)", href: "/attached_assets/HAHM24019_AVANTIKA_SRIVASTAVA_SO_1767457830738.pdf" }
    ]
  },
  {
    title: "ElderNest Healthcare Venture",
    org: "Startup Pitch",
    description: "Conceptualized 'ElderNest', an integrated geriatric hospital and hospice service. Developed the business model, financial projections, and operational plan.",
    tags: ["Entrepreneurship", "Business Planning", "Geriatric Care"],
    links: [
      { label: "Pitch Deck (PDF)", href: "/attached_assets/HVP_PITCH_DECK_1767457830738.pdf" },
      { label: "Business Plan (DOCX)", href: "/attached_assets/HVP_Project_1767457830738.docx" }
    ]
  },
  {
    title: "PhonePe MSME Insurance Strategy",
    org: "Marketing Project",
    description: "Formulated a strategic brand evolution plan for MSME insurance products, focusing on trust-building and digital adoption in the B2B sector.",
    tags: ["Marketing Strategy", "B2B", "Product Positioning"],
    links: [
      { label: "Strategy Presentation (PDF)", href: "/attached_assets/pbm_project_1767457830738.pdf" }
    ]
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeading title="Key Projects" subtitle="Academic & Strategic Initiatives" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <Card key={idx} className="bg-background border border-border hover:shadow-lg transition-all duration-300 group rounded-[2rem] overflow-hidden h-full flex flex-col">
              <CardHeader>
                <div className="text-xs font-bold text-accent uppercase tracking-wider mb-2">
                  {project.org}
                </div>
                <CardTitle className="font-serif text-xl text-primary group-hover:text-accent transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <CardDescription className="text-muted-foreground font-body leading-relaxed mb-6">
                  {project.description}
                </CardDescription>
                
                {project.links && (
                  <div className="mb-6 space-y-2">
                    {project.links.map((link, lIdx) => (
                      <a 
                        key={lIdx}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-xs font-bold text-accent uppercase tracking-widest hover:text-primary transition-colors group/link"
                      >
                        <ExternalLink size={14} className="mr-2 group-hover/link:translate-x-1 transition-transform" />
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider px-2 py-1 bg-muted text-muted-foreground font-medium border border-border">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
