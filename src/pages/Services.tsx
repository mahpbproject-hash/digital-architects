import { motion } from "framer-motion";
import { 
  Globe, 
  Smartphone, 
  AppWindow, 
  Brain, 
  Zap, 
  Code2,
  Check,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { CTASection } from "@/components/home/CTASection";

const services = [
  {
    id: "websites",
    icon: Globe,
    title: "Website Development",
    tagline: "Your website is your best salesperson. Make it count.",
    problem: "Most websites are slow, generic, and don't convert visitors into customers. You need a digital presence that builds trust instantly and drives measurable results.",
    solution: "We architect high-performance websites with stunning design, SEO optimization, and conversion-focused UX. Every element is crafted to turn visitors into loyal customers.",
    features: [
      "Custom design (no templates)",
      "Mobile-first responsive",
      "SEO optimized from day one",
      "3-second load time guarantee",
      "Analytics & tracking setup",
      "CMS integration",
      "Ongoing maintenance",
    ],
    idealFor: "Startups launching products, SMBs rebranding, enterprises needing portals",
    techStack: ["React", "Next.js", "Tailwind", "Headless CMS", "Vercel"],
    color: "from-blue-500 to-cyan-400",
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile App Development",
    tagline: "iOS & Android apps users actually love to use.",
    problem: "Building mobile apps is expensive and complex. Most apps fail because they're slow, buggy, or don't solve real user problems.",
    solution: "We build native and cross-platform mobile apps with buttery-smooth performance, intuitive UX, and the features your users actually need.",
    features: [
      "Native iOS & Android apps",
      "Cross-platform (React Native)",
      "Offline-first architecture",
      "Push notifications",
      "App Store optimization",
      "Analytics integration",
      "Continuous updates",
    ],
    idealFor: "Startups with mobile-first products, enterprises needing internal apps",
    techStack: ["React Native", "Swift", "Kotlin", "Firebase", "Expo"],
    color: "from-purple-500 to-pink-400",
  },
  {
    id: "webapps",
    icon: AppWindow,
    title: "Web Application Development",
    tagline: "Scalable SaaS platforms built for growth.",
    problem: "Building a web application that scales is hard. Many startups hit walls when their MVP can't handle growth.",
    solution: "We architect web applications with modern, scalable infrastructure from day one. Your platform will handle 10 users or 10 million without breaking a sweat.",
    features: [
      "Microservices architecture",
      "Real-time capabilities",
      "Role-based access control",
      "API-first design",
      "Multi-tenant support",
      "CI/CD pipelines",
      "99.9% uptime SLA",
    ],
    idealFor: "SaaS startups, enterprise applications, complex dashboards",
    techStack: ["React", "Node.js", "PostgreSQL", "Redis", "AWS/GCP"],
    color: "from-orange-500 to-amber-400",
  },
  {
    id: "ai",
    icon: Brain,
    title: "AI & Machine Learning Solutions",
    tagline: "Intelligent automation that saves hours every day.",
    problem: "AI seems complex and expensive. Most businesses don't know where to start or how to get real ROI from AI investments.",
    solution: "We make AI practical and accessible. From chatbots to predictive analytics, we implement AI solutions that deliver measurable business value.",
    features: [
      "Custom AI chatbots",
      "Predictive analytics",
      "Natural language processing",
      "Computer vision",
      "Recommendation engines",
      "Process automation",
      "Model training & optimization",
    ],
    idealFor: "Customer service automation, data analysis, content generation",
    techStack: ["Python", "TensorFlow", "OpenAI", "LangChain", "Vector DBs"],
    color: "from-emerald-500 to-teal-400",
  },
  {
    id: "automation",
    icon: Zap,
    title: "Business Automation",
    tagline: "Workflows that run on autopilot.",
    problem: "Your team wastes hours on repetitive tasks. Manual processes slow you down and increase errors.",
    solution: "We build custom automation workflows that eliminate repetitive work, reduce errors, and free your team to focus on high-value activities.",
    features: [
      "Workflow automation",
      "CRM integrations",
      "Email automation",
      "Data synchronization",
      "Reporting automation",
      "Invoice processing",
      "Custom integrations",
    ],
    idealFor: "Operations teams, sales teams, finance departments",
    techStack: ["Zapier", "Make", "n8n", "Custom APIs", "Webhooks"],
    color: "from-yellow-500 to-orange-400",
  },
  {
    id: "custom",
    icon: Code2,
    title: "Custom Software Development",
    tagline: "Built exactly for your unique process.",
    problem: "Off-the-shelf software doesn't fit your workflow. You need something built specifically for how your business operates.",
    solution: "We build custom software tailored to your exact requirements. No compromises, no workarounds—just a perfect fit for your business.",
    features: [
      "Requirements analysis",
      "Custom architecture",
      "Legacy system integration",
      "Data migration",
      "User training",
      "Documentation",
      "Long-term support",
    ],
    idealFor: "Unique business processes, legacy modernization, competitive advantages",
    techStack: ["Custom Stack", "Enterprise Integration", "Cloud Native"],
    color: "from-indigo-500 to-violet-400",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <motion.div
            className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-[100px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          
          <div className="container-wide relative z-10">
            <AnimatedSection className="text-center max-w-4xl mx-auto">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Our Services
              </span>
              <h1 className="heading-xl text-foreground mb-6">
                Full-Stack Digital Solutions{" "}
                <span className="gradient-text">That Deliver</span>
              </h1>
              <p className="body-lg">
                From websites to AI—we build the technology that powers your growth. 
                Every solution is crafted for performance, scalability, and results.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Services Detail */}
        <section className="pb-20">
          <div className="container-wide">
            <div className="space-y-24">
              {services.map((service, index) => (
                <AnimatedSection
                  key={service.id}
                  direction={index % 2 === 0 ? "left" : "right"}
                >
                  <div
                    id={service.id}
                    className="scroll-mt-32 grid lg:grid-cols-2 gap-12 items-center"
                  >
                    {/* Content */}
                    <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                      {/* Icon */}
                      <div className={`inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-[1px] mb-6`}>
                        <div className="w-full h-full rounded-2xl bg-background/90 flex items-center justify-center">
                          <service.icon className="w-8 h-8 text-foreground" />
                        </div>
                      </div>

                      <h2 className="heading-md text-foreground mb-2">{service.title}</h2>
                      <p className="text-xl text-primary font-medium mb-6">{service.tagline}</p>

                      <div className="space-y-6">
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">The Problem</h3>
                          <p className="text-muted-foreground">{service.problem}</p>
                        </div>

                        <div>
                          <h3 className="font-semibold text-foreground mb-2">Our Solution</h3>
                          <p className="text-muted-foreground">{service.solution}</p>
                        </div>

                        <div>
                          <h3 className="font-semibold text-foreground mb-3">What You Get</h3>
                          <div className="grid grid-cols-2 gap-2">
                            {service.features.map((feature) => (
                              <div key={feature} className="flex items-center gap-2 text-sm">
                                <Check className="w-4 h-4 text-success flex-shrink-0" />
                                <span className="text-muted-foreground">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 pt-4">
                          {service.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-xs font-medium rounded-full bg-secondary/50 text-muted-foreground border border-white/5"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <Link to="/contact">
                          <button className="btn-primary mt-4 group">
                            Discuss Your Project
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </button>
                        </Link>
                      </div>
                    </div>

                    {/* Visual */}
                    <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="relative aspect-square rounded-3xl overflow-hidden glass-card p-8"
                      >
                        {/* Gradient Background */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10`} />
                        
                        {/* Mock UI */}
                        <div className="relative h-full flex items-center justify-center">
                          <div className="w-full max-w-sm space-y-4">
                            <div className="h-8 w-32 rounded-lg bg-white/10" />
                            <div className="space-y-2">
                              <div className="h-4 w-full rounded bg-white/5" />
                              <div className="h-4 w-3/4 rounded bg-white/5" />
                              <div className="h-4 w-1/2 rounded bg-white/5" />
                            </div>
                            <div className="grid grid-cols-2 gap-4 pt-4">
                              <div className="h-24 rounded-xl bg-white/5 border border-white/10" />
                              <div className="h-24 rounded-xl bg-white/5 border border-white/10" />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
