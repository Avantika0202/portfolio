import { Target, TrendingUp, Briefcase, BarChart3, Rocket, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

export function CareerFocus() {
  const focuses = [
    { title: "Management Consulting", icon: Target },
    { title: "Strategy & Operations", icon: Briefcase },
    { title: "Data-Driven Decision Making", icon: BarChart3 },
    { title: "Process Transformation", icon: Rocket },
  ];

  return (
    <section className="py-16 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/3">
            <h3 className="font-serif text-3xl font-bold mb-2">Career Focus</h3>
            <div className="h-1 w-12 bg-accent mb-4" />
            <p className="text-white/80 font-body text-lg leading-relaxed">
              Seeking impactful leadership roles that leverage analytical rigor, strategic foresight, and operational excellence to drive organizational growth.
            </p>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {focuses.map((item, idx) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 bg-white/10 p-5 border border-white/10 backdrop-blur-sm hover:bg-white/15 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <item.icon size={20} />
                </div>
                <span className="font-medium text-white text-sm uppercase tracking-widest">
                  {item.title}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
