import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Globe, 
  Smartphone, 
  AppWindow, 
  Brain, 
  Zap, 
  Code2,
  ArrowRight 
} from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Your digital storefront that converts visitors into loyal customers with stunning design and blazing performance.",
    color: "from-blue-500 to-cyan-400",
    link: "/services#websites",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "iOS & Android apps users love. Native performance, beautiful interfaces, seamless experiences.",
    color: "from-purple-500 to-pink-400",
    link: "/services#mobile",
  },
  {
    icon: AppWindow,
    title: "Web Applications",
    description: "Scalable SaaS platforms built with modern architecture that grows with your business.",
    color: "from-orange-500 to-amber-400",
    link: "/services#webapps",
  },
  {
    icon: Brain,
    title: "AI Solutions",
    description: "Intelligent automation that saves hours. ML models, chatbots, and predictive analytics.",
    color: "from-emerald-500 to-teal-400",
    link: "/services#ai",
  },
  {
    icon: Zap,
    title: "Business Automation",
    description: "Workflows that run on autopilot. Eliminate repetitive tasks and focus on what matters.",
    color: "from-yellow-500 to-orange-400",
    link: "/services#automation",
  },
  {
    icon: Code2,
    title: "Custom Software",
    description: "Built exactly for your process. Tailored solutions that fit like a glove.",
    color: "from-indigo-500 to-violet-400",
    link: "/services#custom",
  },
];

export const ServicesSection = () => {
  return (
    <section className="section relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="container-wide relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            What We Build
          </span>
          <h2 className="heading-lg text-foreground mb-6">
            Solutions That Drive <span className="gradient-text">Real Growth</span>
          </h2>
          <p className="body-lg">
            From concept to deployment, we deliver end-to-end digital solutions 
            that transform your business and delight your users.
          </p>
        </AnimatedSection>

        {/* Services Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {services.map((service, index) => (
            <StaggerItem key={service.title}>
              <Link to={service.link}>
                <motion.div
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group h-full glass-card p-8 cursor-pointer"
                >
                  {/* Icon */}
                  <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} p-[1px] mb-6`}>
                    <div className="w-full h-full rounded-2xl bg-background/90 flex items-center justify-center group-hover:bg-background/70 transition-colors">
                      <service.icon className="w-6 h-6 text-foreground" />
                    </div>
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Link */}
                  <div className="flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn more
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </motion.div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
