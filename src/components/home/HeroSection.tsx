import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Play, Sparkles } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Floating Gradient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-[100px]"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent/20 blur-[100px]"
      />

      {/* Content */}
      <div className="container-wide relative z-10 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Trusted by 500+ companies worldwide
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="heading-xl text-foreground mb-6"
          >
            Transform Your Business With{" "}
            <span className="gradient-text">Software That Actually Works</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="body-lg max-w-3xl mx-auto mb-12"
          >
            From idea to scale—we build premium websites, mobile apps, and AI-powered 
            automation that give you unfair advantages in your market.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/contact">
              <button className="btn-primary group text-lg px-8 py-4">
                Book Free Strategy Call
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
            <button className="btn-secondary group text-lg px-8 py-4">
              <Play className="w-5 h-5" />
              See Our Work
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-16 pt-16 border-t border-white/10"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "500+", label: "Projects Delivered" },
                { value: "98%", label: "Client Retention" },
                { value: "50+", label: "Enterprise Clients" },
                { value: "24/7", label: "Support Available" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl sm:text-4xl font-display font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Floating Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 relative"
        >
          <div className="relative mx-auto max-w-5xl">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-accent/10 to-transparent blur-3xl" />
            
            {/* Dashboard Card */}
            <div className="relative glass-card p-2 rounded-2xl overflow-hidden">
              <div className="bg-secondary/50 rounded-xl aspect-[16/9] flex items-center justify-center">
                {/* Simulated Dashboard UI */}
                <div className="w-full h-full p-6 flex flex-col gap-4">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-lg bg-primary/20" />
                      <div className="h-3 w-32 rounded bg-white/10" />
                    </div>
                    <div className="flex gap-2">
                      <div className="h-8 w-20 rounded-lg bg-white/5" />
                      <div className="h-8 w-8 rounded-lg bg-primary/20" />
                    </div>
                  </div>
                  
                  {/* Content Grid */}
                  <div className="flex-1 grid grid-cols-3 gap-4 mt-4">
                    <div className="col-span-2 space-y-4">
                      {/* Stats Cards */}
                      <div className="grid grid-cols-3 gap-4">
                        {[1, 2, 3].map((i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1 + i * 0.1 }}
                            className="bg-card/50 rounded-xl p-4 border border-white/5"
                          >
                            <div className="h-2 w-12 rounded bg-muted-foreground/20 mb-2" />
                            <div className="h-6 w-16 rounded bg-primary/30" />
                          </motion.div>
                        ))}
                      </div>
                      {/* Chart Area */}
                      <div className="bg-card/50 rounded-xl p-4 border border-white/5 flex-1">
                        <div className="h-2 w-20 rounded bg-muted-foreground/20 mb-4" />
                        <div className="flex items-end gap-2 h-32">
                          {[40, 60, 45, 80, 55, 90, 70, 85].map((h, i) => (
                            <motion.div
                              key={i}
                              initial={{ height: 0 }}
                              animate={{ height: `${h}%` }}
                              transition={{ delay: 1.2 + i * 0.05, duration: 0.5 }}
                              className="flex-1 rounded-t bg-gradient-to-t from-primary/40 to-primary/80"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Sidebar */}
                    <div className="space-y-4">
                      <div className="bg-card/50 rounded-xl p-4 border border-white/5">
                        <div className="h-2 w-16 rounded bg-muted-foreground/20 mb-4" />
                        <div className="space-y-3">
                          {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-accent/20" />
                              <div className="flex-1">
                                <div className="h-2 w-full rounded bg-white/10 mb-1" />
                                <div className="h-2 w-2/3 rounded bg-white/5" />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
