import { SectionHeading } from "./SectionHeading";
import { Mail, Linkedin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <SectionHeading 
              title="Get in Touch" 
              subtitle="Contact" 
              className="text-white" 
            />
            <p className="font-body text-lg text-white/80 mb-8 max-w-md">
              I am currently open to opportunities where I can leverage my strategic thinking and analytical skills to drive organizational impact. Let's discuss how I can contribute to your team.
            </p>

            <div className="space-y-6">
              <a href="mailto:avantikform1@gmail.com" className="flex items-center space-x-4 text-white/90 hover:text-accent transition-colors">
                <div className="w-10 h-10 border border-white/20 flex items-center justify-center rounded-xl">
                  <Mail size={18} />
                </div>
                <span className="font-medium">avantikform1@gmail.com</span>
              </a>
              
              <a href="https://linkedin.com/in/avantika-srivastava" className="flex items-center space-x-4 text-white/90 hover:text-accent transition-colors">
                 <div className="w-10 h-10 border border-white/20 flex items-center justify-center rounded-xl">
                  <Linkedin size={18} />
                </div>
                <span className="font-medium">linkedin.com/in/avantika-srivastava</span>
              </a>

              <div className="flex items-center space-x-4 text-white/90">
                 <div className="w-10 h-10 border border-white/20 flex items-center justify-center rounded-xl">
                  <Phone size={18} />
                </div>
                <span className="font-medium">+91 83181 10818</span>
              </div>
            </div>
          </div>

          <div className="bg-white/5 p-8 border border-white/10 backdrop-blur-sm rounded-[2rem]">
            <h3 className="font-serif text-2xl mb-6 text-white">Send a Message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="First Name" className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-accent rounded-xl" />
                <Input placeholder="Last Name" className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-accent rounded-xl" />
              </div>
              <Input placeholder="Email Address" type="email" className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-accent rounded-xl" />
              <Input placeholder="Subject" className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-accent rounded-xl" />
              <Textarea placeholder="Your Message" className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-accent min-h-[120px] rounded-xl" />
              <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white font-medium uppercase tracking-wider rounded-xl h-12">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
