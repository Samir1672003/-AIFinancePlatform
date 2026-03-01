import { motion } from "framer-motion";

const stats = [
  { value: "$12B+", label: "Assets Managed" },
  { value: "50K+", label: "Active Users" },
  { value: "94.2%", label: "Prediction Accuracy" },
  { value: "< 50ms", label: "Response Time" },
];

const StatsSection = () => {
  return (
    <section className="py-16 sm:py-20 border-y border-border bg-secondary/30 text-foreground">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center"
            >
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;