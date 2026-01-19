import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const logos = [
  { name: "TechCorp", id: 1 },
  { name: "InnovateLabs", id: 2 },
  { name: "FutureScale", id: 3 },
  { name: "DataFlow", id: 4 },
  { name: "CloudNine", id: 5 },
  { name: "NextGen", id: 6 },
  { name: "QuantumIO", id: 7 },
  { name: "SynapseAI", id: 8 },
];

const testimonials = [
  {
    quote: "NexusLab transformed our outdated platform into a modern, scalable solution that increased our conversion rate by 340%. Truly world-class work.",
    author: "Sarah Chen",
    role: "CTO, FinanceFlow",
    avatar: "SC",
  },
  {
    quote: "The team's attention to detail and technical expertise is unmatched. They delivered our MVP in half the expected time without compromising quality.",
    author: "Marcus Johnson",
    role: "Founder, HealthTrack",
    avatar: "MJ",
  },
  {
    quote: "Working with NexusLab feels like having an elite in-house team. They truly understand our business and consistently exceed expectations.",
    author: "Emily Rodriguez",
    role: "VP Product, RetailMax",
    avatar: "ER",
  },
];

export const SocialProofSection = () => {
  return (
    <section className="section relative overflow-hidden bg-secondary/20">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[150px]" />
      </div>

      <div className="container-wide relative z-10">
        {/* Client Logos */}
        <AnimatedSection className="mb-20">
          <p className="text-center text-sm text-muted-foreground uppercase tracking-wider mb-8">
            Trusted by industry leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {logos.map((logo, index) => (
              <motion.div
                key={logo.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="text-2xl font-display font-bold text-muted-foreground/40 hover:text-muted-foreground/70 transition-colors cursor-pointer"
              >
                {logo.name}
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Client Success Stories
          </span>
          <h2 className="heading-lg text-foreground">
            Hear From Those Who <span className="gradient-text">Partnered With Us</span>
          </h2>
        </AnimatedSection>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-2xl border border-white/10 bg-card/30 backdrop-blur-sm"
            >
              {/* Quote Mark */}
              <div className="absolute top-6 right-6 text-6xl font-serif text-primary/20">
                "
              </div>
              
              {/* Quote */}
              <p className="relative z-10 text-foreground leading-relaxed mb-8">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-sm font-semibold text-white">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
