import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Smile, Sparkles, Users } from "lucide-react";

const ChildrensMinistry = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary to-primary/90">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-primary-foreground mb-6">Children's Ministry</h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Nurturing young hearts in a joyful, safe, and biblical learning environment.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 grid gap-12 lg:grid-cols-3">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-3xl bg-card p-8 shadow-xl">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
              <Smile className="w-7 h-7" />
            </div>
            <h2 className="font-heading text-2xl font-bold mb-4">Safe & Fun</h2>
            <p className="text-muted-foreground leading-7">
              Our children's ministry provides age-appropriate teaching, worship, and activities in a welcoming space.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="rounded-3xl bg-card p-8 shadow-xl">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Sparkles className="w-7 h-7" />
            </div>
            <h2 className="font-heading text-2xl font-bold mb-4">Biblical Teaching</h2>
            <p className="text-muted-foreground leading-7">
              Children learn Bible stories, worship, and prayer at a level they can understand and enjoy.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="rounded-3xl bg-card p-8 shadow-xl">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-foreground/10 text-foreground">
              <Users className="w-7 h-7" />
            </div>
            <h2 className="font-heading text-2xl font-bold mb-4">Family Support</h2>
            <p className="text-muted-foreground leading-7">
              We partner with parents to help children grow in faith, character, and community skills.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-4xl font-bold mb-6 text-foreground">Childrens Ministry Overview</h2>
            <div className="space-y-6 text-muted-foreground leading-7">
              <p>
                We are committed to creating a warm and inviting space where every child feels loved and learns about God's truth in a fun, memorable way.
              </p>
              <p>
                Our program includes worship, storytelling, crafts, and activities designed to help children encounter Jesus and grow in their faith.
              </p>
              <p>
                Parents can trust our caring team to provide a Christ-centered experience while children are engaged and encouraged.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ChildrensMinistry;
