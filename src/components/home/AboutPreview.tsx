import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const AboutPreview = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-2xl gradient-gold opacity-20 blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=900&q=80"
              alt="Faith Life Assembly congregation worshipping together"
              className="relative rounded-3xl shadow-elegant w-full h-[480px] object-cover"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-6 shadow-elegant border border-border max-w-xs hidden md:block">
              <p className="text-3xl font-heading font-bold text-accent">15+</p>
              <p className="text-sm text-muted-foreground">Years serving Nairobi with love and the Gospel.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">Welcome Home</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              A church where <span className="text-gradient-gold">faith grows</span> and lives are transformed.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Faith Life Assembly Church is a Spirit-filled, Bible-teaching community in Nairobi.
              Our mission is to raise believers grounded in faith, empowered by the Holy Spirit,
              and impactful in society — building a Christ-centered community that transforms lives
              locally and globally.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Bible-centered teaching every Sunday",
                "Vibrant worship and prayer ministries",
                "Discipleship for all ages — children, youth, adults",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                  <span className="text-foreground">{point}</span>
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="gradient-gold text-primary hover:opacity-90 shadow-gold">
              <Link to="/about">
                Learn More About Us <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
