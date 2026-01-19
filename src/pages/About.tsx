import { motion } from "framer-motion";
import { 
  Award,
  Target,
  Eye,
  Sparkles,
  Shield,
  Users,
  Globe,
  CheckCircle
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { CTASection } from "@/components/home/CTASection";

const values = [
  {
    icon: Award,
    title: "Quality Over Speed",
    description: "We never cut corners. Every line of code is crafted with care—but we're still fast.",
  },
  {
    icon: Eye,
    title: "Transparency Always",
    description: "No surprises, ever. You'll always know exactly where your project stands.",
  },
  {
    icon: Sparkles,
    title: "Innovation Mindset",
    description: "We stay ahead of trends so you can leverage the latest technologies.",
  },
  {
    icon: Target,
    title: "Client Success = Our Success",
    description: "Your growth is our metric. We're invested in your long-term success.",
  },
];

const certifications = [
  "AWS Partner",
  "Google Cloud Partner",
  "ISO 27001 Certified",
  "SOC 2 Compliant",
  "GDPR Compliant",
  "PCI DSS Compliant",
];

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "50+", label: "Team Members" },
  { value: "12", label: "Countries Served" },
  { value: "8+", label: "Years Experience" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/10 blur-[150px]"
          />
          
          <div className="container-wide relative z-10">
            <AnimatedSection className="text-center max-w-4xl mx-auto">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                About Us
              </span>
              <h1 className="heading-xl text-foreground mb-6">
                We Believe Technology Should{" "}
                <span className="gradient-text">Empower, Not Complicate</span>
              </h1>
              <p className="body-lg">
                Founded by engineers who were frustrated with sloppy software, we set out to 
                build a company that delivers what others promise. Today, we're the trusted 
                partner for 500+ businesses worldwide.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 border-y border-white/10 bg-secondary/20">
          <div className="container-wide">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-display font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="section">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection direction="left">
                <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                  Our Story
                </span>
                <h2 className="heading-lg text-foreground mb-6">
                  From Frustration to Innovation
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We started NexusLab because we saw too many businesses struggle with 
                    unreliable software partners. Missed deadlines, blown budgets, and 
                    products that didn't work—we knew there had to be a better way.
                  </p>
                  <p>
                    Our founding team brought together decades of experience from companies 
                    like Google, Meta, and Stripe. We combined that enterprise expertise with 
                    the agility and care of a boutique studio.
                  </p>
                  <p>
                    Today, we're a team of 50+ engineers, designers, and strategists united 
                    by a simple mission: build software that actually works and makes a 
                    real difference for our clients.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
                  <div className="relative glass-card p-8 rounded-3xl">
                    <div className="grid grid-cols-2 gap-4">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center"
                        >
                          <Users className="w-12 h-12 text-foreground/50" />
                        </div>
                      ))}
                    </div>
                    <p className="text-center text-sm text-muted-foreground mt-6">
                      Our global team of builders, designers, and strategists
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section bg-secondary/20">
          <div className="container-wide">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Our Values
              </span>
              <h2 className="heading-lg text-foreground">
                The Principles That <span className="gradient-text">Guide Us</span>
              </h2>
            </AnimatedSection>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
              {values.map((value) => (
                <StaggerItem key={value.title}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="h-full p-8 rounded-2xl border border-white/10 bg-card/30 backdrop-blur-sm"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Certifications */}
        <section className="section">
          <div className="container-wide">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Trust & Compliance
              </span>
              <h2 className="heading-lg text-foreground mb-6">
                Enterprise-Grade <span className="gradient-text">Security & Standards</span>
              </h2>
              <p className="body-md">
                We maintain the highest standards of security, compliance, and best practices 
                to ensure your data and business are protected.
              </p>
            </AnimatedSection>

            <div className="flex flex-wrap justify-center gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-card/30 backdrop-blur-sm"
                >
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span className="text-sm font-medium text-foreground">{cert}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Presence */}
        <section className="section bg-secondary/20">
          <div className="container-wide">
            <AnimatedSection className="text-center max-w-3xl mx-auto">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h2 className="heading-lg text-foreground mb-6">
                Global Presence, <span className="gradient-text">Local Expertise</span>
              </h2>
              <p className="body-lg mb-8">
                With teams across San Francisco, New York, London, and Bangalore, we combine 
                global perspective with local market understanding.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-muted-foreground">
                <span className="px-4 py-2 rounded-lg bg-card/50 border border-white/5">🇺🇸 San Francisco (HQ)</span>
                <span className="px-4 py-2 rounded-lg bg-card/50 border border-white/5">🇺🇸 New York</span>
                <span className="px-4 py-2 rounded-lg bg-card/50 border border-white/5">🇬🇧 London</span>
                <span className="px-4 py-2 rounded-lg bg-card/50 border border-white/5">🇮🇳 Bangalore</span>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
