import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  Calendar,
  MessageSquare,
  Building2,
  Handshake,
  Headphones,
  Check
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";

const contactTypes = [
  { id: "sales", label: "Sales Inquiry", icon: MessageSquare },
  { id: "technical", label: "Technical Consultation", icon: Building2 },
  { id: "partnership", label: "Partnership", icon: Handshake },
  { id: "support", label: "Support", icon: Headphones },
];

const projectTypes = [
  "Website Development",
  "Mobile App Development",
  "Web Application",
  "AI & Machine Learning",
  "Business Automation",
  "Custom Software",
  "Not Sure Yet",
];

const budgetRanges = [
  "Under $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000+",
  "Not Sure Yet",
];

const Contact = () => {
  const [activeTab, setActiveTab] = useState("sales");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 2 business hours.",
    });
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <motion.div
            className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-[100px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          
          <div className="container-wide relative z-10">
            <AnimatedSection className="text-center max-w-4xl mx-auto">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Contact Us
              </span>
              <h1 className="heading-xl text-foreground mb-6">
                Let's Build Your{" "}
                <span className="gradient-text">Vision Together</span>
              </h1>
              <p className="body-lg">
                Book a free 30-minute strategy call. No sales pitch, just insights 
                and honest recommendations for your project.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Section */}
        <section className="pb-20">
          <div className="container-wide">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-2">
                <AnimatedSection direction="left">
                  <div className="glass-card p-8 rounded-2xl mb-8">
                    <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                      Get in Touch
                    </h2>
                    
                    <div className="space-y-6">
                      <a
                        href="mailto:hello@nexuslab.dev"
                        className="flex items-start gap-4 group"
                      >
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          <Mail className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                            Email Us
                          </div>
                          <div className="text-sm text-muted-foreground">
                            hello@nexuslab.dev
                          </div>
                        </div>
                      </a>

                      <a
                        href="tel:+15551234567"
                        className="flex items-start gap-4 group"
                      >
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          <Phone className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                            Call Us
                          </div>
                          <div className="text-sm text-muted-foreground">
                            +1 (555) 123-4567
                          </div>
                        </div>
                      </a>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium text-foreground">
                            Visit Us
                          </div>
                          <div className="text-sm text-muted-foreground">
                            123 Innovation Way<br />
                            San Francisco, CA 94105
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Clock className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium text-foreground">
                            Business Hours
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Mon - Fri: 9AM - 6PM PST<br />
                            24/7 Support for clients
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Book */}
                  <div className="glass-card p-8 rounded-2xl">
                    <div className="flex items-center gap-3 mb-4">
                      <Calendar className="w-5 h-5 text-primary" />
                      <h3 className="font-display font-semibold text-foreground">
                        Skip the Form
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Prefer to book directly? Schedule a call that works for you.
                    </p>
                    <button className="btn-secondary w-full justify-center">
                      Book via Calendly
                    </button>
                  </div>

                  {/* Response Promise */}
                  <div className="mt-8 space-y-3">
                    {[
                      "Response within 2 business hours",
                      "Free project estimate",
                      "No obligation",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-success" />
                        {item}
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3">
                <AnimatedSection direction="right">
                  <div className="glass-card p-8 rounded-2xl">
                    <Tabs value={activeTab} onValueChange={setActiveTab}>
                      <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-transparent h-auto p-0 mb-8">
                        {contactTypes.map((type) => (
                          <TabsTrigger
                            key={type.id}
                            value={type.id}
                            className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:border-primary/30 border border-white/10 rounded-xl py-3 px-4 text-sm"
                          >
                            <type.icon className="w-4 h-4 mr-2" />
                            {type.label}
                          </TabsTrigger>
                        ))}
                      </TabsList>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name & Email */}
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="name">Full Name *</Label>
                            <Input
                              id="name"
                              placeholder="John Smith"
                              required
                              className="bg-secondary/50 border-white/10"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Work Email *</Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="john@company.com"
                              required
                              className="bg-secondary/50 border-white/10"
                            />
                          </div>
                        </div>

                        {/* Company & Phone */}
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="company">Company Name</Label>
                            <Input
                              id="company"
                              placeholder="Acme Inc."
                              className="bg-secondary/50 border-white/10"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone (Optional)</Label>
                            <Input
                              id="phone"
                              type="tel"
                              placeholder="+1 (555) 123-4567"
                              className="bg-secondary/50 border-white/10"
                            />
                          </div>
                        </div>

                        {/* Project Type & Budget */}
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label>Project Type *</Label>
                            <Select required>
                              <SelectTrigger className="bg-secondary/50 border-white/10">
                                <SelectValue placeholder="Select project type" />
                              </SelectTrigger>
                              <SelectContent>
                                {projectTypes.map((type) => (
                                  <SelectItem key={type} value={type.toLowerCase().replace(/\s+/g, "-")}>
                                    {type}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label>Budget Range</Label>
                            <Select>
                              <SelectTrigger className="bg-secondary/50 border-white/10">
                                <SelectValue placeholder="Select budget range" />
                              </SelectTrigger>
                              <SelectContent>
                                {budgetRanges.map((range) => (
                                  <SelectItem key={range} value={range.toLowerCase().replace(/\s+/g, "-")}>
                                    {range}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        {/* Message */}
                        <div className="space-y-2">
                          <Label htmlFor="message">Tell Us About Your Project *</Label>
                          <Textarea
                            id="message"
                            placeholder="Describe your project, goals, and any specific requirements..."
                            rows={5}
                            required
                            className="bg-secondary/50 border-white/10 resize-none"
                          />
                        </div>

                        {/* Privacy Note */}
                        <p className="text-xs text-muted-foreground">
                          We respect your privacy. Your information is encrypted and never shared 
                          with third parties. By submitting, you agree to our Privacy Policy.
                        </p>

                        {/* Submit */}
                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="btn-primary w-full justify-center text-lg py-4 disabled:opacity-50"
                        >
                          {isSubmitting ? (
                            <span className="flex items-center gap-2">
                              <motion.span
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                              />
                              Sending...
                            </span>
                          ) : (
                            <>
                              Schedule My Strategy Call
                              <Send className="w-5 h-5" />
                            </>
                          )}
                        </motion.button>
                      </form>
                    </Tabs>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section (Placeholder) */}
        <section className="pb-20">
          <div className="container-wide">
            <AnimatedSection>
              <div className="glass-card p-2 rounded-2xl overflow-hidden">
                <div className="bg-secondary/50 rounded-xl h-64 md:h-96 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Interactive map coming soon
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
