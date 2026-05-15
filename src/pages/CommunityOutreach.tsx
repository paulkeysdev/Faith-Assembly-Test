import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Heart, Globe2, Users } from "lucide-react";

const CommunityOutreach = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary to-primary/90">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-primary-foreground mb-6">Community Outreach</h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Serving our neighbors with compassion and practical help in the name of Jesus.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 grid gap-12 lg:grid-cols-3">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-3xl bg-card p-8 shadow-xl">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
              <Heart className="w-7 h-7" />
            </div>
            <h2 className="font-heading text-2xl font-bold mb-4">Our Heart</h2>
            <p className="text-muted-foreground leading-7">
              We are committed to showing God's love through action, meeting needs, and building relationships in our city.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="rounded-3xl bg-card p-8 shadow-xl">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Globe2 className="w-7 h-7" />
            </div>
            <h2 className="font-heading text-2xl font-bold mb-4">Community Projects</h2>
            <ul className="space-y-3 text-muted-foreground leading-7">
              <li>• Food distributions</li>
              <li>• Neighborhood cleanups</li>
              <li>• Support for families in need</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="rounded-3xl bg-card p-8 shadow-xl">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-foreground/10 text-foreground">
              <Users className="w-7 h-7" />
            </div>
            <h2 className="font-heading text-2xl font-bold mb-4">Get Involved</h2>
            <p className="text-muted-foreground leading-7">
              You can partner with us through volunteering, donating, or simply praying for the people we serve.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-4xl font-bold mb-6 text-foreground">Community Outreach Highlights</h2>
            <div className="space-y-6 text-muted-foreground leading-7">
              <p>
                Our outreach ministry seeks to bring hope and practical help to those who need it most. We partner with local organizations and church members to meet real needs.
              </p>
              <p>
                From food support to youth mentorship, we strive to reflect Christ's love in every project and event.
              </p>
              <p>
                If you want to serve with us, we would love to connect and help you find a role that matches your gifts.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default CommunityOutreach;
