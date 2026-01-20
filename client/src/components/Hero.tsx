import { motion } from "framer-motion";
import avantikaPhoto from "@assets/Avantika_photo_1767461007699.jpg";
import { ArrowRight, Download, Linkedin, Mail, Github } from "lucide-react";

export function Hero() {
  return (
    <section id="about" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#f8faff]">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-primary font-semibold tracking-wide uppercase mb-4 text-sm">
              MBA GRADUATE - IIM
            </p>
            <h1 className="text-6xl md:text-7xl font-bold text-slate-900 mb-4 tracking-tight">
              Avantika Srivastava
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-slate-500 mb-8 tracking-tight">
              Strategic Business Leader & Innovator
            </h2>
            
            <p className="text-lg text-slate-600 max-w-xl mb-10 leading-relaxed font-normal">
              IIM graduate with a passion for driving business transformation through strategic thinking, data-driven decision making, and innovative problem-solving. Currently seeking opportunities to create meaningful impact in dynamic organizations.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a 
                href="#projects" 
                className="px-8 py-3.5 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 flex items-center gap-2"
              >
                View Portfolio <ArrowRight size={18} />
              </a>
              <a 
                href="#" 
                className="px-8 py-3.5 bg-white text-slate-700 font-bold rounded-xl border border-slate-200 hover:bg-slate-50 transition-all flex items-center gap-2"
              >
                <Download size={18} /> Download Resume
              </a>
            </div>

            <div className="flex items-center gap-4">
              {[
                { icon: Linkedin, href: "https://linkedin.com/in/avantika-srivastava" },
                { icon: Mail, href: "mailto:avantikform1@gmail.com" },
                { icon: Github, href: "#" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-12 h-12 flex items-center justify-center bg-white border border-slate-100 rounded-full text-slate-400 hover:text-primary hover:border-primary/20 transition-all shadow-sm"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative z-10 bg-white p-4 rounded-[2rem] shadow-2xl shadow-slate-200/50 w-full max-w-[320px]">
              <div className="aspect-[4/5] rounded-[1.5rem] overflow-hidden bg-slate-100 relative group">
                <img 
                  src={avantikaPhoto} 
                  alt="Avantika Srivastava" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500" />
              </div>
            </div>
            
            {/* Background Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
