import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play, Radio } from "lucide-react";

export const LiveStreamCTA = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-primary text-primary-foreground">
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 gradient-hero" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
            </span>
            <Radio className="w-4 h-4" />
            <span className="text-sm font-medium">Live every Sunday  10:00 AM EAT</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-6xl font-bold mb-6"
          >
            Worship with us <span className="text-gradient-gold">from anywhere</span>
          </motion.h2>
          <p className="text-lg text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Can't make it in person? Join our online congregation on YouTube and Facebook
            and experience God's presence wherever you are.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="gradient-gold text-primary hover:opacity-90 shadow-gold">
              <Link to="/watch-live"><Play className="mr-2 w-5 h-5" /> Watch Live Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/sermons">Watch Previous Sermons</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
