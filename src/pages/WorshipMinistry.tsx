import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Mic2, Music2, Users } from "lucide-react";

const WorshipMinistry = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary to-primary/90">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-primary-foreground mb-6">Worship Ministry</h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Join our worship team and help lead the church into meaningful praise and worship.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 grid gap-12 lg:grid-cols-3">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-3xl bg-card p-8 shadow-xl">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
              <Mic2 className="w-7 h-7" />
            </div>
            <h2 className="font-heading text-2xl font-bold mb-4">What We Do</h2>
            <p className="text-muted-foreground leading-7">
              We lead the church in worship through song, scripture, and heartfelt praise. Our team creates an environment where people can encounter God's presence.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="rounded-3xl bg-card p-8 shadow-xl">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Music2 className="w-7 h-7" />
            </div>
            <h2 className="font-heading text-2xl font-bold mb-4">Team Roles</h2>
            <ul className="space-y-3 text-muted-foreground leading-7">
              <li>• Vocalists and choir members</li>
              <li>• Instrumentalists (guitar, keyboard, percussion)</li>
              <li>• Sound, media, and stage support</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="rounded-3xl bg-card p-8 shadow-xl">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-foreground/10 text-foreground">
              <Users className="w-7 h-7" />
            </div>
            <h2 className="font-heading text-2xl font-bold mb-4">Join Us</h2>
            <p className="text-muted-foreground leading-7">
              Rehearsals take place weekly and all musical gifts are welcome. If you love worship and want to serve, we would love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-4xl font-bold mb-6 text-foreground">Worship Ministry Highlights</h2>
            <div className="space-y-6 text-muted-foreground leading-7">
              <p>
                Our worship ministry seeks to create a warm, authentic atmosphere where every person can connect with God through music. We believe worship is more than a moment; it is a movement of the heart.
              </p>
              <p>
                Whether you are a singer, instrumentalist, audio technician, or support volunteer, there is a place for you in the worship team. We grow together through rehearsal, prayer, and teamwork.
              </p>
              <p>
                Meeting times are designed to fit ministry life, and new team members are always welcomed with care and training.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default WorshipMinistry;
