import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Music2,
  Users,
  HeartHandshake,
  Baby,
  UserRound,
  Heart,
  BookOpen,
  Camera,
} from "lucide-react";

const ministries = [
  { title: "Worship Team", description: "Lead the congregation in Spirit-filled praise and worship.", icon: Music2, link: "/ministries/worship" },
  { title: "Youth Ministry", description: "Empowering the next generation to live boldly for Christ.", icon: Users, link: "/ministries/youth" },
  { title: "Children's Ministry", description: "Nurturing young hearts with Bible truth and joy.", icon: Baby, link: "/ministries/childrens" },
  { title: "Men Fellowship", description: "Building godly men of integrity, strength and purpose.", icon: UserRound, link: "/ministries/community-outreach" },
  { title: "Women Fellowship", description: "Equipping women to walk in their God-given calling.", icon: Heart, link: "/ministries/community-outreach" },
  { title: "Evangelism", description: "Sharing the Gospel and making disciples in our community.", icon: HeartHandshake, link: "/ministries/community-outreach" },
  { title: "Bible Study Groups", description: "Grow deeper in God's Word together through small groups.", icon: BookOpen, link: "/ministries/community-outreach" },
  { title: "Media Ministry", description: "Using technology and creativity to amplify the Gospel.", icon: Camera, link: "/ministries/community-outreach" },
];

export const MinistriesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">Get Involved</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">Our Ministries</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Discover the many ways you can serve, grow, and connect at Faith Life Assembly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {ministries.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                to={m.link}
                className="group block h-full bg-background rounded-2xl p-6 border border-border hover-lift relative overflow-hidden"
              >
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full gradient-gold opacity-0 group-hover:opacity-10 transition-smooth" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl gradient-navy flex items-center justify-center mb-5 group-hover:scale-110 transition-smooth shadow-soft">
                    <m.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{m.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{m.description}</p>
                  <span className="text-sm text-accent font-medium group-hover:underline">Learn More →</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
