import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "5 Daily Habits That Will Strengthen Your Walk With God",
    excerpt: "Small, consistent disciplines bear the deepest spiritual fruit. Here are five we recommend...",
    category: "Devotional",
    date: "May 12, 2026",
    image: "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=900&q=80",
  },
  {
    id: 2,
    title: "Why Community Is Non-Negotiable For The Christian",
    excerpt: "We weren't designed to grow alone. Discover why authentic Christian fellowship transforms us.",
    category: "Discipleship",
    date: "May 5, 2026",
    image: "https://images.unsplash.com/photo-1529390079861-591f5c7ab7f0?w=900&q=80",
  },
  {
    id: 3,
    title: "How To Pray When You Don't Know What To Say",
    excerpt: "The Spirit helps us in our weakness. A simple, freeing approach to honest prayer.",
    category: "Prayer",
    date: "Apr 28, 2026",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=900&q=80",
  },
  {
    id: 4,
    title: "Hearing God's Voice In A Noisy World",
    excerpt: "Practical, biblical principles to discern God's leading amidst the noise of modern life.",
    category: "Faith",
    date: "Apr 21, 2026",
    image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=900&q=80",
  },
];

const Blog = () => {
  return (
    <Layout>
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">Blog & Devotionals</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">Be Encouraged in the Word</h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
            Devotionals, teachings and stories to help you grow in your walk with Christ.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((p, i) => (
              <motion.article
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card rounded-2xl overflow-hidden border border-border hover-lift group"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-smooth" />
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span className="text-accent font-medium uppercase tracking-wider">{p.category}</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{p.date}</span>
                  </div>
                  <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-3 group-hover:text-accent transition-smooth">
                    {p.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">{p.excerpt}</p>
                  <Link to="/daily-word" className="inline-flex items-center gap-1 text-accent font-medium hover:underline">
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
