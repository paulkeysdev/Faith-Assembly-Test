import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Mary Wanjiku",
    role: "Member since 2019",
    quote:
      "Faith Life Assembly is more than a church — it's family. The teaching has grounded me, and the community has carried me through my hardest seasons.",
  },
  {
    name: "Samuel Otieno",
    role: "Youth Leader",
    quote:
      "I came searching for purpose and found Christ. Today I serve the youth I once needed. God is faithful — He truly transforms lives here.",
  },
  {
    name: "Grace Achieng",
    role: "Women's Fellowship",
    quote:
      "The Word is preached uncompromisingly and in love. My marriage, my parenting, my work life — every part of me has been refined by this ministry.",
  },
  {
    name: "Daniel Kamau",
    role: "Worship Team",
    quote:
      "Worship here isn't a performance, it's an encounter. I've grown closer to God leading songs alongside people who genuinely love Jesus.",
  },
];

export const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  const current = testimonials[index];

  return (
    <section className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">Testimonies</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Lives <span className="text-gradient-gold">transformed</span> by God's grace
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-card rounded-3xl p-8 md:p-14 shadow-elegant border border-border min-h-[280px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full text-center"
              >
                <Quote className="w-12 h-12 text-accent mx-auto mb-6" />
                <p className="text-lg md:text-xl text-foreground leading-relaxed italic mb-8">
                  "{current.quote}"
                </p>
                <p className="font-heading font-semibold text-foreground">{current.name}</p>
                <p className="text-sm text-muted-foreground">{current.role}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
              className="w-11 h-11 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
              aria-label="Previous testimony"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${i === index ? "w-8 bg-accent" : "w-2 bg-border"}`}
                  aria-label={`Go to testimony ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
              className="w-11 h-11 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
              aria-label="Next testimony"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
