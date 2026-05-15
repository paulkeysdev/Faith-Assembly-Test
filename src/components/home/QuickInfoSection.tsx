import { motion } from "framer-motion";
import { Clock, MapPin, Phone, Radio } from "lucide-react";

const items = [
  {
    icon: Clock,
    title: "Service Times",
    lines: ["Sunday  10:00 AM – 1:00 PM", "Wed Prayer  5:00 – 6:00 PM"],
  },
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["Mutego, Gitaru", "Off Wangige Road, Nairobi"],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["(+254) 799 192 029", "faithassembly001@gmail.com"],
  },
  {
    icon: Radio,
    title: "Watch Live",
    lines: ["Sundays  10:00 AM EAT", "YouTube & Facebook Live"],
  },
];

export const QuickInfoSection = () => {
  return (
    <section className="relative z-20 -mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group bg-card rounded-2xl p-6 md:p-8 shadow-soft hover-lift border border-border"
            >
              <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth shadow-gold">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
              {item.lines.map((l) => (
                <p key={l} className="text-sm text-muted-foreground leading-relaxed">{l}</p>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
