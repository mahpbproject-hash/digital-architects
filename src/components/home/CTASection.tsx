import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Sparkles } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const CTASection = () => {
  return (
    <section className="section relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/30 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/20 blur-[150px]"
        />
      </div>

      <div className="container-wide relative z-10">
        <AnimatedSection>
          <div className="relative max-w-4xl mx-auto text-center">
            {/* Card */}
            <div className="relative p-12 md:p-16 rounded-3xl border border-white/10 bg-card/30 backdrop-blur-xl overflow-hidden">
              {/* Inner Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
              
              {/* Floating Particles */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute top-10 left-10 w-3 h-3 rounded-full bg-primary/50"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute bottom-10 right-10 w-2 h-2 rounded-full bg-accent/50"
              />
              <motion.div
                animate={{ x: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute top-1/2 right-20 w-2 h-2 rounded-full bg-primary/30"
              />

              <div className="relative z-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-8">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">
                    Free Strategy Session
                  </span>
                </div>

                <h2 className="heading-lg text-foreground mb-6">
                  Ready to Build Something{" "}
                  <span className="gradient-text">Amazing?</span>
                </h2>
                
                <p className="body-lg max-w-2xl mx-auto mb-10">
                  Let's discuss how we can transform your vision into a powerful digital 
                  solution. Book a free 30-minute strategy call—no sales pitch, just insights.
                </p>

                {/* CTA Button */}
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary text-lg px-10 py-5 animate-pulse-glow group"
                  >
                    Start Your Project
                    <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </Link>

                {/* Trust Note */}
                <p className="mt-8 text-sm text-muted-foreground">
                  ✓ Response within 2 hours &nbsp;&nbsp; ✓ Free project estimate &nbsp;&nbsp; ✓ No obligation
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
