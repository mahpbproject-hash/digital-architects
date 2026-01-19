import { motion } from "framer-motion";
import { 
  PhoneCall, 
  Lightbulb, 
  Palette, 
  Code, 
  TestTube, 
  Rocket,
  Headphones,
  Check
} from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTASection } from "@/components/home/CTASection";

const phases = [
  {
    number: "01",
    icon: PhoneCall,
    title: "Discovery",
    duration: "Week 1",
    description: "We dive deep into understanding your business, goals, and challenges.",
    outputs: ["Project roadmap", "Timeline & milestones", "Technical requirements"],
    activities: [
      "Kickoff call within 24 hours",
      "Deep-dive into your goals",
      "Competitor analysis",
      "Technical feasibility check",
    ],
    color: "from-blue-500 to-cyan-400",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Strategy & Architecture",
    duration: "Week 1-2",
    description: "We design the blueprint for your solution—both user experience and technical foundation.",
    outputs: ["Technical blueprint", "Wireframes", "Information architecture"],
    activities: [
      "User research & personas",
      "Information architecture",
      "Technology stack selection",
      "Database design",
    ],
    color: "from-purple-500 to-pink-400",
  },
  {
    number: "03",
    icon: Palette,
    title: "Design",
    duration: "Week 2-4",
    description: "We create stunning, brand-aligned designs that users will love.",
    outputs: ["Pixel-perfect designs", "Interactive prototypes", "Design system"],
    activities: [
      "Brand-aligned UI concepts",
      "High-fidelity mockups",
      "Interactive prototypes",
      "Accessibility compliance",
    ],
    color: "from-orange-500 to-amber-400",
  },
  {
    number: "04",
    icon: Code,
    title: "Development",
    duration: "Week 4-10",
    description: "Our engineers bring the designs to life with clean, scalable code.",
    outputs: ["Functional product", "API documentation", "Admin dashboard"],
    activities: [
      "Agile sprints (2-week cycles)",
      "Weekly progress demos",
      "Real-time collaboration",
      "Code reviews & best practices",
    ],
    color: "from-emerald-500 to-teal-400",
  },
  {
    number: "05",
    icon: TestTube,
    title: "Testing & QA",
    duration: "Week 10-11",
    description: "Rigorous testing ensures your product works flawlessly across all scenarios.",
    outputs: ["Bug-free product", "Test reports", "Performance metrics"],
    activities: [
      "Automated testing",
      "Manual QA across devices",
      "Performance optimization",
      "Security audits",
    ],
    color: "from-yellow-500 to-orange-400",
  },
  {
    number: "06",
    icon: Rocket,
    title: "Launch",
    duration: "Week 12",
    description: "We deploy your product and ensure a smooth, successful launch.",
    outputs: ["Live product! 🚀", "Training materials", "Launch checklist"],
    activities: [
      "Deployment to production",
      "DNS & hosting setup",
      "Analytics integration",
      "Team training",
    ],
    color: "from-red-500 to-rose-400",
  },
  {
    number: "07",
    icon: Headphones,
    title: "Growth & Support",
    duration: "Ongoing",
    description: "We continue to optimize, update, and support your product as it grows.",
    outputs: ["Continuous improvement", "Monthly reports", "Feature updates"],
    activities: [
      "24/7 monitoring",
      "Monthly optimization",
      "Feature updates",
      "Scalability planning",
    ],
    color: "from-indigo-500 to-violet-400",
  },
];

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <motion.div
            className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-accent/20 blur-[100px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          
          <div className="container-wide relative z-10">
            <AnimatedSection className="text-center max-w-4xl mx-auto">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Our Process
              </span>
              <h1 className="heading-xl text-foreground mb-6">
                From Idea to Launch in{" "}
                <span className="gradient-text">12 Weeks</span>
              </h1>
              <p className="body-lg">
                A proven, transparent process that takes the guesswork out of software development. 
                You'll always know exactly where we are and what's coming next.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="pb-20">
          <div className="container-wide">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent lg:-translate-x-1/2" />

              {/* Phases */}
              <div className="space-y-12">
                {phases.map((phase, index) => (
                  <motion.div
                    key={phase.number}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className={`relative flex flex-col lg:flex-row items-start gap-8 ${
                      index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline Node */}
                    <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

                    {/* Content Card */}
                    <div className={`ml-16 lg:ml-0 lg:w-[calc(50%-3rem)] ${index % 2 === 0 ? "lg:pr-8 lg:text-right" : "lg:pl-8"}`}>
                      <motion.div
                        whileHover={{ y: -4 }}
                        className="glass-card p-8"
                      >
                        {/* Header */}
                        <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? "lg:flex-row-reverse" : ""}`}>
                          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${phase.color} p-[1px] flex-shrink-0`}>
                            <div className="w-full h-full rounded-2xl bg-background/90 flex items-center justify-center">
                              <phase.icon className="w-6 h-6 text-foreground" />
                            </div>
                          </div>
                          <div>
                            <div className="text-sm text-primary font-medium">{phase.duration}</div>
                            <h3 className="font-display text-xl font-semibold text-foreground">
                              {phase.title}
                            </h3>
                          </div>
                        </div>

                        <p className={`text-muted-foreground mb-6 ${index % 2 === 0 ? "lg:text-right" : ""}`}>
                          {phase.description}
                        </p>

                        {/* Activities */}
                        <div className={`space-y-2 mb-6 ${index % 2 === 0 ? "lg:text-right" : ""}`}>
                          {phase.activities.map((activity) => (
                            <div
                              key={activity}
                              className={`flex items-center gap-2 text-sm ${
                                index % 2 === 0 ? "lg:flex-row-reverse" : ""
                              }`}
                            >
                              <Check className="w-4 h-4 text-success flex-shrink-0" />
                              <span className="text-muted-foreground">{activity}</span>
                            </div>
                          ))}
                        </div>

                        {/* Outputs */}
                        <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "lg:justify-end" : ""}`}>
                          {phase.outputs.map((output) => (
                            <span
                              key={output}
                              className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                            >
                              {output}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </div>

                    {/* Spacer for opposite side */}
                    <div className="hidden lg:block lg:w-[calc(50%-3rem)]" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
