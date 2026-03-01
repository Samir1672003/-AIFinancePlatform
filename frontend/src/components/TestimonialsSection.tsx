import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "FinanceAI transformed how I manage my portfolio. The predictive models are incredibly accurate.",
    name: "Sarah Chen",
    role: "Portfolio Manager, Vertex Capital",
  },
  {
    quote:
      "We've seen a 40% improvement in risk-adjusted returns since integrating FinanceAI into our workflow.",
    name: "Marcus Williams",
    role: "CIO, Meridian Investments",
  },
  {
    quote:
      "The automation features alone saved our team 20 hours per week. It's like having a team of analysts.",
    name: "Priya Patel",
    role: "Head of Trading, NovaTech",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 sm:py-24 bg-background text-foreground">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-16"
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Trusted by Industry Leaders
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-6 sm:p-7 transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    size={16}
                    className="fill-primary text-primary"
                  />
                ))}
              </div>

              <p className="text-sm sm:text-base text-foreground leading-relaxed mb-6">
                "{t.quote}"
              </p>

              <div>
                <p className="font-semibold text-sm sm:text-base">
                  {t.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {t.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;