import { motion } from "framer-motion";
import { Heart, BookOpen, Users, Play, Calendar, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  {
    icon: Heart,
    title: "Give Online",
    description: "Support our mission",
    href: "/give",
    color: "bg-accent",
  },
  {
    icon: BookOpen,
    title: "Daily Word",
    description: "Today's devotional",
    href: "/daily-word",
    color: "bg-primary",
  },
  {
    icon: Play,
    title: "Watch Live",
    description: "Stream services",
    href: "/media",
    color: "bg-accent",
  },
  {
    icon: Calendar,
    title: "Events",
    description: "What's happening",
    href: "/events",
    color: "bg-primary",
  },
  {
    icon: MessageSquare,
    title: "Prayer",
    description: "Submit a request",
    href: "/prayer",
    color: "bg-accent",
  },
  {
    icon: Users,
    title: "Connect",
    description: "Join a group",
    href: "/contact",
    color: "bg-primary",
  },
];

export const QuickLinks = () => {
  return (
    <section className="py-8 -mt-16 relative z-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {quickLinks.map((link, index) => (
            <motion.div
              key={link.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                to={link.href}
                className="group flex flex-col items-center p-6 bg-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 ${link.color} rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <link.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-card-foreground text-center">
                  {link.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {link.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
