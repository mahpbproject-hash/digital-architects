import { motion } from "framer-motion";
import { 
  Shield, 
  Zap, 
  TrendingUp, 
  Clock, 
  DollarSign, 
  Users,
  Check
} from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";

const features = [
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Bank-level encryption, SOC 2 compliance, and continuous monitoring to keep your data safe.",
    highlight: "256-bit SSL",
  },
  {
    icon: Zap,
    title: "Lightning Fast Performance",
    description: "99.9% uptime guarantee with globally distributed infrastructure for blazing speed.",
    highlight: "99.9% Uptime",
  },
  {
    icon: TrendingUp,
    title: "Scalable Architecture",
    description: "Built to grow with your business—from startup to enterprise without rebuilding.",
    highlight: "Auto-scaling",
  },
  {
    icon: Clock,
    title: "Agile Delivery",
    description: "See progress every week with transparent sprints and continuous deployment.",
    highlight: "2-Week Sprints",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "No hidden costs, no surprises. Fixed-price projects or time & materials—your choice.",
    highlight: "No Hidden Fees",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Your success is our success. A dedicated team focused solely on your project.",
    highlight: "24/7 Support",
  },
];

export const WhyChooseUsSection = () => {
  return (
    <section className="section relative overflow-hidden bg-secondary/20">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Why Choose Us
          </span>
          <h2 className="heading-lg text-foreground mb-6">
            Built Different. <span className="gradient-text">Built Better.</span>
          </h2>
          <p className="body-lg">
            We don't just write code—we architect solutions that give your business 
            an unfair competitive advantage.
          </p>
        </AnimatedSection>

        {/* Bento Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
          {features.map((feature, index) => (
            <StaggerItem key={feature.title}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="relative h-full p-8 rounded-2xl border border-white/10 bg-card/30 backdrop-blur-sm overflow-hidden group"
              >
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  {/* Icon & Highlight */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-success bg-success/10 px-3 py-1 rounded-full">
                      <Check className="w-3 h-3" />
                      {feature.highlight}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
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
