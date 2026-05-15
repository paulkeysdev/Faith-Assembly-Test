import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Play, Search, Download, Headphones } from "lucide-react";

const categories = ["All", "Faith", "Prayer", "Salvation", "Holy Spirit", "Leadership", "Family"];

const sermons = [
  { id: 1, title: "Walking By Faith, Not By Sight", speaker: "Pastor John Doe", date: "May 5, 2026", category: "Faith", thumbnail: "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=600&q=80", duration: "42 min" },
  { id: 2, title: "The Power of Prayer", speaker: "Pastor John Doe", date: "Apr 28, 2026", category: "Prayer", thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80", duration: "38 min" },
  { id: 3, title: "Salvation: A Free Gift", speaker: "Pastor Jane Smith", date: "Apr 21, 2026", category: "Salvation", thumbnail: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=600&q=80", duration: "45 min" },
  { id: 4, title: "Led By The Spirit", speaker: "Pastor John Doe", date: "Apr 14, 2026", category: "Holy Spirit", thumbnail: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=600&q=80", duration: "50 min" },
  { id: 5, title: "Building A Godly Home", speaker: "Pastor Jane Smith", date: "Apr 7, 2026", category: "Family", thumbnail: "https://images.unsplash.com/photo-1529390079861-591f5c7ab7f0?w=600&q=80", duration: "47 min" },
  { id: 6, title: "Servant Leadership", speaker: "Pastor John Doe", date: "Mar 31, 2026", category: "Leadership", thumbnail: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&q=80", duration: "41 min" },
];

const Sermons = () => {
  const [activeCat, setActiveCat] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = sermons.filter((s) => {
    const matchCat = activeCat === "All" || s.category === activeCat;
    const matchQ = s.title.toLowerCase().includes(query.toLowerCase()) || s.speaker.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQ;
  });

  return (
    <Layout>
      {/* Header */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 gradient-gold" />
        <div className="container mx-auto px-4 text-center relative">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">Sermon Library</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">Watch & Listen</h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
            Be encouraged, equipped and inspired by Spirit-filled messages from our pulpit.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-10 bg-card border-b border-border sticky top-20 z-30 shadow-soft">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search sermons or speakers..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveCat(c)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-smooth ${
                    activeCat === c
                      ? "gradient-gold text-primary shadow-gold"
                      : "bg-muted text-foreground hover:bg-muted/70"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filtered.length === 0 ? (
            <p className="text-center text-muted-foreground py-12">No sermons match your search.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((s, i) => (
                <motion.article
                  key={s.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-card rounded-2xl overflow-hidden border border-border hover-lift group"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img src={s.thumbnail} alt={s.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-smooth" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-smooth">
                      <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center shadow-gold">
                        <Play className="w-7 h-7 text-primary ml-1" />
                      </div>
                    </div>
                    <span className="absolute bottom-3 right-3 bg-primary/80 text-primary-foreground text-xs px-2 py-1 rounded">{s.duration}</span>
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-medium text-accent uppercase tracking-wider">{s.category}</span>
                    <h3 className="font-heading text-lg font-semibold text-foreground mt-2 mb-1">{s.title}</h3>
                    <p className="text-sm text-muted-foreground">{s.speaker} · {s.date}</p>
                    <div className="flex gap-2 mt-4">
                      <Button size="sm" variant="ghost" className="flex-1"><Headphones className="w-4 h-4 mr-1" />Listen</Button>
                      <Button size="sm" variant="ghost" className="flex-1"><Download className="w-4 h-4 mr-1" />Notes</Button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Sermons;
