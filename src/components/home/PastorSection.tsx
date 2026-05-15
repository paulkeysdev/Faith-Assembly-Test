import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Quote } from "lucide-react";

export const PastorSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-primary to-secondary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-elegant aspect-[4/5] max-w-md mx-auto">
              <img
                src="./src/Imgs/Leaders/Pastor Simon Muriuki.jpeg"
                alt="Senior Pastor of Faith Life Assembly Church"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 glass rounded-xl p-4">
                <p className="font-heading font-semibold text-lg">Pastor Simon Muriuki</p>
                <p className="text-sm text-primary-foreground/80">Senior Pastor</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">Meet Our Pastor</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
              A shepherd's heart, a Word-driven message.
            </h2>
            <Quote className="w-10 h-10 text-accent mb-4" />
            <p className="text-lg leading-relaxed text-primary-foreground/85 mb-6 italic">
              "Whether you are exploring faith for the first time, returning to God after a long
              journey, or growing deeper in Christ — there is a place for you here. Come as you are,
              be transformed by His love, and discover your calling."
            </p>
            <p className="text-primary-foreground/70 mb-8">
              — Pastor Simon Muriuki, Senior Pastor of Faith Life Assembly Church
            </p>
            <Button asChild size="lg" className="gradient-gold text-primary hover:opacity-90 shadow-gold">
              <Link to="/about#leadership">Meet Our Pastor</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
