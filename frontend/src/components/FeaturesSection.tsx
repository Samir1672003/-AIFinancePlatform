import { motion } from "framer-motion";
import { Brain, TrendingUp, Shield, Zap, PieChart, BellRing } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description:
      "Deep learning models analyze thousands of data points to surface actionable financial insights in real-time.",
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description:
      "Forecast market trends, portfolio performance, and cash flows with 94%+ accuracy using proprietary models.",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description:
      "Automated risk scoring and hedging strategies that adapt to market volatility and protect your portfolio.",
  },
  {
    icon: Zap,
    title: "Smart Automation",
    description:
      "Automate recurring investments, rebalancing, and tax-loss harvesting with intelligent rule-based triggers.",
  },
  {
    icon: PieChart,
    title: "Portfolio Optimization",
    description:
      "AI continuously rebalances your portfolio across asset classes to maximize returns within your risk tolerance.",
  },
  {
    icon: BellRing,
    title: "Real-Time Alerts",
    description:
      "Get instant notifications on market movements, anomalies, and opportunities tailored to your strategy.",
  },
];

const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="relative py-20 sm:py-24 bg-background text-foreground overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-16"
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">
            Features
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Intelligence at Every Level
          </h2>

          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            From portfolio analysis to risk management, our AI handles the
            complexity so you don't have to.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl border border-border bg-card p-6 sm:p-7 transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 transition-colors group-hover:bg-primary/20">
                <feature.icon size={22} className="text-primary" />
              </div>

              <h3 className="text-lg font-semibold mb-2">
                {feature.title}
              </h3>

              <p className="text-sm sm:text-[15px] text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;