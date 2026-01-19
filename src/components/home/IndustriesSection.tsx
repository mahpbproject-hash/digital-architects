import { motion } from "framer-motion";
import { 
  Building2, 
  Stethoscope, 
  ShoppingCart, 
  GraduationCap,
  Home,
  Factory,
  Rocket,
  Briefcase
} from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";

const industries = [
  { icon: Building2, name: "FinTech & Banking", description: "Secure, compliant financial solutions" },
  { icon: Stethoscope, name: "Healthcare & MedTech", description: "HIPAA-ready health platforms" },
  { icon: ShoppingCart, name: "E-commerce & Retail", description: "High-converting online stores" },
  { icon: GraduationCap, name: "Education & EdTech", description: "Engaging learning experiences" },
  { icon: Home, name: "Real Estate & PropTech", description: "Property management innovation" },
  { icon: Factory, name: "Manufacturing & Logistics", description: "Supply chain optimization" },
  { icon: Rocket, name: "SaaS & Tech Startups", description: "Rapid MVP to scale" },
  { icon: Briefcase, name: "Professional Services", description: "Streamlined operations" },
];

export const IndustriesSection = () => {
  return (
    <section className="section relative overflow-hidden">
      <div className="container-wide relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Industries We Serve
          </span>
          <h2 className="heading-lg text-foreground mb-6">
            Deep Expertise Across <span className="gradient-text">Every Sector</span>
          </h2>
          <p className="body-lg">
            We've delivered transformative solutions across diverse industries, 
            understanding the unique challenges and regulations of each.
          </p>
        </AnimatedSection>

        {/* Industries Grid */}
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4" staggerDelay={0.05}>
          {industries.map((industry, index) => (
            <StaggerItem key={industry.name}>
              <motion.div
                whileHover={{ y: -4, borderColor: "hsl(var(--primary) / 0.5)" }}
                transition={{ duration: 0.2 }}
                className="group relative p-6 rounded-2xl border border-white/10 bg-card/20 backdrop-blur-sm text-center cursor-pointer overflow-hidden"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                    <industry.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2 text-sm lg:text-base">
                    {industry.name}
                  </h3>
                  <p className="text-xs text-muted-foreground hidden lg:block">
                    {industry.description}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
