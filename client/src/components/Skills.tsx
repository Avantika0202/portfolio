import { SectionHeading } from "./SectionHeading";
import { CheckCircle2, Users, BarChart3, Building2, ClipboardCheck, BrainCircuit } from "lucide-react";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Talent Strategy",
    icon: Users,
    items: ["Talent Acquisition", "Onboarding Operations", "CTC Structuring", "Recruitment Analytics"]
  },
  {
    category: "Data Analytics",
    icon: BarChart3,
    items: ["Excel Forecasting", "Dashboard Creation", "ABC Analysis", "Critical Fractile Method"]
  },
  {
    category: "Strategic Planning",
    icon: BrainCircuit,
    items: ["Venture Planning", "Market Analysis", "Process Improvement", "Operational Efficiency"]
  },
  {
    category: "Healthcare Operations",
    icon: Building2,
    items: ["Hospital Administration", "Inventory Forecasting", "Resource Optimization", "CSSD Management"]
  }
];

export function Skills() {
  return (
    <section id="competencies" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Core Competencies" 
          subtitle="Expertise & Tools" 
          centered 
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-muted/30 p-8 border border-border hover:border-accent/50 transition-colors group rounded-[2rem]"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-border mb-6 group-hover:border-accent group-hover:text-accent transition-colors shadow-sm">
                <skill.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-4 text-primary">
                {skill.category}
              </h3>
              <ul className="space-y-3">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-start text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 mr-2 text-accent mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
