import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Users, Sparkles, CalendarDays } from "lucide-react";

const YouthMinistry = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary to-primary/90">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-primary-foreground mb-6">Youth Ministry</h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Equipping the next generation to follow Christ with courage, community, and devotion.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 grid gap-12 lg:grid-cols-3">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-3xl bg-card p-8 shadow-xl">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
              <Users className="w-7 h-7" />
            </div>
            <h2 className="font-heading text-2xl font-bold mb-4">Youth Community</h2>
            <p className="text-muted-foreground leading-7">
              We create safe spaces for young people to build friendships, grow in faith, and serve others with excitement.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="rounded-3xl bg-card p-8 shadow-xl">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Sparkles className="w-7 h-7" />
            </div>
            <h2 className="font-heading text-2xl font-bold mb-4">Youth Events</h2>
            <ul className="space-y-3 text-muted-foreground leading-7">
              <li>• Friday youth nights</li>
              <li>• Weekend retreats</li>
              <li>• Mentorship groups</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="rounded-3xl bg-card p-8 shadow-xl">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-foreground/10 text-foreground">
              <CalendarDays className="w-7 h-7" />
            </div>
            <h2 className="font-heading text-2xl font-bold mb-4">Join Today</h2>
            <p className="text-muted-foreground leading-7">
              We welcome every young person who wants to explore faith, ask questions, and discover God's purpose for their life.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-4xl font-bold mb-6 text-foreground">What to Expect</h2>
            <div className="space-y-6 text-muted-foreground leading-7">
              <p>
                Our youth ministry focuses on spiritual growth, practical teaching, and uplifting fellowship. Through Bible study, worship, and service projects, teens are equipped to live out their faith.
              </p>
              <p>
                We believe that every young person has a role in God's story, and we invest in their gifts through discipleship, leadership training, and loving community.
              </p>
              <p>
                Contact our youth team to learn about upcoming events, volunteer opportunities, and how to get involved.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default YouthMinistry;
