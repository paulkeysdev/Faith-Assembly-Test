import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Building2, Globe2, HandCoins } from "lucide-react";

const categories = [
  { icon: HandCoins, title: "Tithe", verse: "Malachi 3:10" },
  { icon: Heart, title: "Offering", verse: "2 Cor. 9:7" },
  { icon: Globe2, title: "Missions", verse: "Matthew 28:19" },
  { icon: Building2, title: "Building Fund", verse: "1 Chron. 29:9" },
];

export const GivingPreview = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">Give Generously</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Partner with us in <span className="text-gradient-gold">God's work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg italic">
            "Each of you should give what you have decided in your heart to give, not reluctantly
            or under compulsion, for God loves a cheerful giver." — 2 Corinthians 9:7
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-10 max-w-5xl mx-auto">
          {categories.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-2xl p-6 text-center border border-border hover-lift"
            >
              <div className="w-14 h-14 rounded-xl gradient-gold mx-auto mb-4 flex items-center justify-center shadow-gold">
                <c.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-1">{c.title}</h3>
              <p className="text-xs text-muted-foreground italic">{c.verse}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-4">M-Pesa  •  Card Payments  •  Bank Transfer</p>
          <Button asChild size="lg" className="gradient-gold text-primary hover:opacity-90 shadow-gold">
            <Link to="/give">Give Online</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
