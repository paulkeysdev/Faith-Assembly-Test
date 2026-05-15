import { motion } from "framer-motion";
import { Play, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const newsItems = [
  {
    id: "1",
    title: "Sunday Service Highlights",
    description: "Watch the highlights from our powerful Sunday worship service.",
    thumbnail: "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=400&h=225&fit=crop",
    type: "video",
    duration: "45:00",
  },
  {
    id: "2",
    title: "Community Outreach Day",
    description: "See how our church family served the community this past weekend.",
    thumbnail: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&h=225&fit=crop",
    type: "video",
    duration: "12:30",
  },
  {
    id: "3",
    title: "Youth Ministry Update",
    description: "Exciting news from our growing youth ministry programs.",
    thumbnail: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=225&fit=crop",
    type: "video",
    duration: "08:15",
  },
];

const announcements = [
  {
    id: "1",
    title: "Together in Generosity",
    description: "Join us in our annual giving campaign to support missions worldwide.",
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=300&h=300&fit=crop",
    link: "/give",
  },
  {
    id: "2",
    title: "Family Discipleship Conference",
    description: "Register now for our upcoming family conference.",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=300&h=300&fit=crop",
    link: "/events",
  },
];

export const NewsSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            NEWS UPDATE
          </h2>
          <div className="flex justify-center gap-4 mt-6">
            <button className="px-6 py-2 text-sm font-medium text-accent border-b-2 border-accent">
              Announcements
            </button>
            <button className="px-6 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Recent Sermons
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Announcements Column */}
          <div className="lg:col-span-1 space-y-6">
            {announcements.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  to={item.link}
                  className="group flex gap-4 p-4 bg-card rounded-lg hover:shadow-lg transition-all"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded-lg shrink-0"
                  />
                  <div>
                    <h3 className="font-heading font-semibold text-card-foreground group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Videos Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {newsItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link to="/media" className="block">
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-3">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/30 transition-colors flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-accent/90 flex items-center justify-center">
                        <Play className="w-6 h-6 text-accent-foreground ml-1" />
                      </div>
                    </div>
                    <span className="absolute bottom-2 right-2 bg-primary/80 text-primary-foreground text-xs px-2 py-1 rounded">
                      {item.duration}
                    </span>
                  </div>
                  <h3 className="font-heading font-semibold text-foreground group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <Button asChild variant="outline">
            <Link to="/media">
              View All Media
              <ChevronRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
