import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Calendar, MapPin, Clock, CalendarPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { supabase } from "@/integrations/supabase/client";

interface Event {
  id: string;
  title: string;
  description: string | null;
  event_date: string;
  event_time: string | null;
  end_time: string | null;
  location: string | null;
  image_url: string | null;
  is_featured: boolean | null;
}

const Events = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .gte("event_date", new Date().toISOString().split("T")[0])
        .order("event_date", { ascending: true });

      if (error) {
        console.error("Error fetching events:", error);
      } else {
        setEvents(data || []);
      }
      setIsLoading(false);
    };

    fetchEvents();
  }, []);

  const addToCalendar = (event: Event) => {
    const startDate = new Date(`${event.event_date}T${event.event_time || "09:00:00"}`);
    const endDate = event.end_time
      ? new Date(`${event.event_date}T${event.end_time}`)
      : new Date(startDate.getTime() + 2 * 60 * 60 * 1000);

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      event.title
    )}&dates=${startDate.toISOString().replace(/-|:|\.\d{3}/g, "")}/${endDate
      .toISOString()
      .replace(/-|:|\.\d{3}/g, "")}&details=${encodeURIComponent(
      event.description || ""
    )}&location=${encodeURIComponent(event.location || "Grace Community Church")}`;

    window.open(googleCalendarUrl, "_blank");
  };

  // Placeholder events when database is empty
  const placeholderEvents: Event[] = [
    {
      id: "1",
      title: "Sunday Worship Service",
      description: "Join us for our weekly worship service featuring inspiring music and an uplifting message.",
      event_date: new Date().toISOString().split("T")[0],
      event_time: "09:00:00",
      end_time: "11:00:00",
      location: "Main Sanctuary",
      image_url: null,
      is_featured: true,
    },
    {
      id: "2",
      title: "Wednesday Bible Study",
      description: "Dive deeper into God's Word with our midweek Bible study group.",
      event_date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
      event_time: "19:00:00",
      end_time: "20:30:00",
      location: "Fellowship Hall",
      image_url: null,
      is_featured: false,
    },
    {
      id: "3",
      title: "Youth Group Night",
      description: "Fun, faith-filled evening for teens with games, worship, and fellowship.",
      event_date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
      event_time: "18:30:00",
      end_time: "21:00:00",
      location: "Youth Center",
      image_url: null,
      is_featured: true,
    },
    {
      id: "4",
      title: "Community Outreach Day",
      description: "Serve our local community together through various volunteer opportunities.",
      event_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
      event_time: "10:00:00",
      end_time: "14:00:00",
      location: "Church Parking Lot",
      image_url: null,
      is_featured: false,
    },
  ];

  const displayEvents = events.length > 0 ? events : placeholderEvents;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary to-primary/90">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Upcoming Events
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Join us for worship, fellowship, and community. There's something for everyone!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-card rounded-xl overflow-hidden shadow-lg animate-pulse">
                  <div className="h-48 bg-muted" />
                  <div className="p-6 space-y-4">
                    <div className="h-6 bg-muted rounded w-3/4" />
                    <div className="h-4 bg-muted rounded w-full" />
                    <div className="h-4 bg-muted rounded w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="h-48 bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOFMwIDguMDYgMCAxOHM4LjA2IDE4IDE4IDE4IDE4LTguMDYgMTgtMTgiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAyIi8+PC9nPjwvc3ZnPg==')] opacity-50"></div>
                    <div className="text-center z-10">
                      <p className="text-5xl font-heading font-bold text-primary-foreground">
                        {format(new Date(event.event_date), "d")}
                      </p>
                      <p className="text-lg text-primary-foreground/80 uppercase tracking-wider">
                        {format(new Date(event.event_date), "MMM yyyy")}
                      </p>
                    </div>
                    {event.is_featured && (
                      <span className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-semibold text-card-foreground mb-3 group-hover:text-accent transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {event.description}
                    </p>
                    <div className="space-y-2 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-accent" />
                        <span>
                          {event.event_time
                            ? format(new Date(`2000-01-01T${event.event_time}`), "h:mm a")
                            : "TBA"}
                          {event.end_time &&
                            ` - ${format(new Date(`2000-01-01T${event.end_time}`), "h:mm a")}`}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-accent" />
                        <span>{event.location || "Church Campus"}</span>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      onClick={() => addToCalendar(event)}
                    >
                      <CalendarPlus className="w-4 h-4 mr-2" />
                      Add to Calendar
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Events;
