import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-background text-foreground">

      {/* Background Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px]" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-8"
          >
            <Sparkles size={14} className="text-primary" />
            <span className="text-sm text-muted-foreground">
              Powered by Advanced AI Models
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
          >
            Your Money{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Smarter
            </span>
            <br />
            Than Ever Before
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            AI-powered financial intelligence that analyzes, predicts,
            and optimizes your wealth — so you can make decisions
            with confidence.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="px-8 py-6 text-base font-semibold inline-flex items-center"
            >
              Start Free Trial
              <ArrowRight className="ml-2" size={18} />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-base"
            >
              Watch Demo
            </Button>
          </motion.div>

          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="mt-20 relative"
          >
            <div className="rounded-xl border border-border bg-card p-6 shadow-lg">
              <DashboardPreview />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const DashboardPreview = () => {
  return (
    <div className="grid grid-cols-3 gap-4">

      {[
        { label: "Portfolio Value", value: "$2.4M", change: "+12.5%" },
        { label: "AI Predictions", value: "94.2%", change: "Accuracy" },
        { label: "Savings Optimized", value: "$180K", change: "+$23K/mo" },
      ].map((item, i) => (
        <div
          key={i}
          className="rounded-lg bg-secondary/50 p-4 border border-border"
        >
          <p className="text-xs text-muted-foreground mb-1">
            {item.label}
          </p>
          <p className="text-2xl font-bold text-foreground">
            {item.value}
          </p>
          <p className="text-xs text-primary mt-1">
            {item.change}
          </p>
        </div>
      ))}

      {/* Mini Chart */}
      <div className="col-span-3 rounded-lg bg-secondary/30 p-4 border border-border h-32 flex items-end gap-1">
        {Array.from({ length: 24 }).map((_, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm bg-primary/40"
            style={{
              height: `${20 + Math.sin(i * 0.5) * 30 + Math.random() * 20}%`,
            }}
          />
        ))}
      </div>

    </div>
  );
};

export default HeroSection;