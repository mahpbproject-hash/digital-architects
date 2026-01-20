import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight, Play, Sparkles } from "lucide-react";
import { useTypewriter } from "@/hooks/useTypewriter";
import heroBg from "@/assets/hero-bg.jpg";

// Floating particle component
const FloatingParticle = ({ delay, duration, x, y, size }: { delay: number; duration: number; x: number; y: number; size: number }) => (
  <motion.div
    className="absolute rounded-full bg-primary/40"
    style={{ width: size, height: size, left: `${x}%`, top: `${y}%` }}
    animate={{
      y: [0, -30, 0],
      x: [0, 15, 0],
      opacity: [0.2, 0.8, 0.2],
      scale: [1, 1.2, 1],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

// Animated counter component
const AnimatedCounter = ({ value, label, delay }: { value: string; label: string; delay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="text-center group cursor-default"
    >
      <motion.div
        className="text-3xl sm:text-4xl font-display font-bold gradient-text mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: delay + 0.2 }}
      >
        {value}
      </motion.div>
      <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
        {label}
      </div>
    </motion.div>
  );
};

export const HeroSection = () => {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  
  const { text } = useTypewriter({
    words: [
      "Software That Actually Works",
      "Websites That Convert",
      "Apps Users Love",
      "AI That Automates",
    ],
    typingSpeed: 80,
    deletingSpeed: 40,
    delayBetweenWords: 2500,
  });

  // Generate random particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 4,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 2 + Math.random() * 4,
  }));

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
      </motion.div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <FloatingParticle key={particle.id} {...particle} />
        ))}
      </div>

      {/* Animated Glow Lines */}
      <motion.div
        className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        animate={{ opacity: [0.3, 0.8, 0.3], scaleX: [0.8, 1, 0.8] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"
        animate={{ opacity: [0.2, 0.6, 0.2], scaleX: [1, 0.9, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Floating Gradient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.35, 0.15],
          x: [0, -50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-accent/20 blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px]"
      />

      {/* Content */}
      <motion.div className="container-wide relative z-10 py-20" style={{ opacity }}>
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge with Pulse Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/40 bg-primary/10 backdrop-blur-md mb-8 relative"
          >
            {/* Animated Ring */}
            <motion.div
              className="absolute inset-0 rounded-full border border-primary/50"
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
            </motion.div>
            <span className="text-sm font-medium text-primary">
              Trusted by 500+ companies worldwide
            </span>
          </motion.div>

          {/* Main Heading with Typewriter */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="heading-xl text-foreground mb-6"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Transform Your Business With{" "}
            </motion.span>
            <br />
            <span className="gradient-text relative inline-block min-h-[1.2em]">
              {text}
              <motion.span
                className="inline-block w-[3px] h-[0.9em] bg-primary ml-1 align-middle"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </span>
          </motion.h1>

          {/* Subheading with Stagger Animation */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="body-lg max-w-3xl mx-auto mb-12"
          >
            From idea to scale—we build premium websites, mobile apps, and AI-powered
            automation that give you{" "}
            <motion.span
              className="text-primary font-semibold"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              unfair advantages
            </motion.span>{" "}
            in your market.
          </motion.p>

          {/* CTA Buttons with Hover Effects */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/contact">
              <motion.button
                className="btn-primary group text-lg px-8 py-4 relative overflow-hidden"
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(99, 102, 241, 0.4)" }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                  animate={{ translateX: ["100%", "-100%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  Book Free Strategy Call
                  <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </motion.button>
            </Link>
            <motion.button
              className="btn-secondary group text-lg px-8 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Play className="w-5 h-5" />
              </motion.div>
              See Our Work
            </motion.button>
          </motion.div>

          {/* Trust Indicators with Animated Counters */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-16 pt-16 border-t border-white/10 relative"
          >
            {/* Animated Border */}
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
              animate={{ scaleX: [0, 1], opacity: [0, 1] }}
              transition={{ duration: 1, delay: 0.8 }}
            />
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "500+", label: "Projects Delivered" },
                { value: "98%", label: "Client Retention" },
                { value: "50+", label: "Enterprise Clients" },
                { value: "24/7", label: "Support Available" },
              ].map((stat, index) => (
                <AnimatedCounter
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  delay={0.9 + index * 0.15}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Floating Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 80, rotateX: 10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.2, delay: 1, type: "spring", stiffness: 50 }}
          className="mt-20 relative perspective-1000"
        >
          <div className="relative mx-auto max-w-5xl">
            {/* Multi-Layer Glow Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-primary/30 via-accent/20 to-transparent blur-3xl"
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 blur-2xl rounded-3xl"
              animate={{ scale: [1, 1.02, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            {/* Dashboard Card with 3D Hover */}
            <motion.div
              className="relative glass-card p-2 rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.02, rotateX: 2, rotateY: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-transparent"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.3), transparent) border-box",
                }}
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              <div className="bg-secondary/50 rounded-xl aspect-[16/9] flex items-center justify-center overflow-hidden">
                {/* Simulated Dashboard UI */}
                <div className="w-full h-full p-6 flex flex-col gap-4">
                  {/* Top Bar */}
                  <motion.div
                    className="flex items-center justify-between"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.3 }}
                  >
                    <div className="flex items-center gap-4">
                      <motion.div
                        className="w-8 h-8 rounded-lg bg-primary/30"
                        animate={{ rotate: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <div className="h-3 w-32 rounded bg-white/10" />
                    </div>
                    <div className="flex gap-2">
                      <div className="h-8 w-20 rounded-lg bg-white/5" />
                      <motion.div
                        className="h-8 w-8 rounded-lg bg-primary/30"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    </div>
                  </motion.div>

                  {/* Content Grid */}
                  <div className="flex-1 grid grid-cols-3 gap-4 mt-4">
                    <div className="col-span-2 space-y-4">
                      {/* Stats Cards */}
                      <div className="grid grid-cols-3 gap-4">
                        {[1, 2, 3].map((i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ delay: 1.4 + i * 0.15 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="bg-card/50 rounded-xl p-4 border border-white/5 cursor-pointer"
                          >
                            <div className="h-2 w-12 rounded bg-muted-foreground/20 mb-2" />
                            <motion.div
                              className="h-6 w-16 rounded bg-primary/30"
                              animate={{ opacity: [0.5, 1, 0.5] }}
                              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                            />
                          </motion.div>
                        ))}
                      </div>
                      {/* Chart Area */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.8 }}
                        className="bg-card/50 rounded-xl p-4 border border-white/5 flex-1"
                      >
                        <div className="h-2 w-20 rounded bg-muted-foreground/20 mb-4" />
                        <div className="flex items-end gap-2 h-32">
                          {[40, 60, 45, 80, 55, 90, 70, 85].map((h, i) => (
                            <motion.div
                              key={i}
                              initial={{ height: 0 }}
                              animate={{ height: `${h}%` }}
                              transition={{ delay: 2 + i * 0.08, duration: 0.6, ease: "backOut" }}
                              whileHover={{ scaleY: 1.1 }}
                              className="flex-1 rounded-t bg-gradient-to-t from-primary/40 to-primary/80 cursor-pointer"
                            />
                          ))}
                        </div>
                      </motion.div>
                    </div>

                    {/* Sidebar */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.6 }}
                      className="space-y-4"
                    >
                      <div className="bg-card/50 rounded-xl p-4 border border-white/5">
                        <div className="h-2 w-16 rounded bg-muted-foreground/20 mb-4" />
                        <div className="space-y-3">
                          {[1, 2, 3, 4].map((i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 1.8 + i * 0.1 }}
                              className="flex items-center gap-3"
                            >
                              <motion.div
                                className="w-8 h-8 rounded-full bg-accent/20"
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                              />
                              <div className="flex-1">
                                <div className="h-2 w-full rounded bg-white/10 mb-1" />
                                <div className="h-2 w-2/3 rounded bg-white/5" />
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-3 rounded-full bg-primary"
            animate={{ y: [0, 8, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
        <span className="text-xs text-muted-foreground">Scroll to explore</span>
      </motion.div>
    </section>
  );
};
