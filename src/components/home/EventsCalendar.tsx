import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { format, addDays } from "date-fns";

const upcomingEvents = [
  {
    id: "1",
    title: "Sunday Worship Service",
    date: new Date(),
    time: "09:00 AM",
    type: "Weekly Service",
    isHighlighted: true,
  },
  {
    id: "2",
    title: "21 Days of Prayer and Fasting",
    date: addDays(new Date(), 2),
    endDate: addDays(new Date(), 23),
    time: "All Day",
    type: "Special Event",
    daysLeft: 18,
    isHighlighted: true,
  },
  {
    id: "3",
    title: "Youth Night",
    date: addDays(new Date(), 5),
    time: "6:30 PM",
    type: "Youth Ministry",
    isHighlighted: false,
  },
  {
    id: "4",
    title: "Bible Study",
    date: addDays(new Date(), 3),
    time: "7:00 PM",
    type: "Weekly Study",
    isHighlighted: false,
  },
];

export const EventsCalendar = () => {
  const currentMonth = format(new Date(), "MMMM, yyyy");

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left: Header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              UPCOMING EVENTS
            </h2>
            <p className="text-primary-foreground/70 mb-2">Current Month</p>
            <p className="text-2xl font-heading text-accent">{currentMonth}</p>
            <Button asChild variant="outline" className="mt-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/events">
                View Full Calendar
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>

          {/* Right: Events List */}
          <div className="lg:w-2/3 space-y-4">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-stretch rounded-lg overflow-hidden ${
                  event.isHighlighted ? 'bg-accent/20' : 'bg-primary-foreground/5'
                }`}
              >
                {/* Date Block */}
                <div className="w-20 md:w-24 bg-primary-foreground/10 flex flex-col items-center justify-center py-4 shrink-0">
                  <span className="text-2xl md:text-3xl font-bold">
                    {format(event.date, "dd")}
                  </span>
                  <span className="text-sm uppercase text-primary-foreground/70">
                    {format(event.date, "MMM")}
                  </span>
                </div>

                {/* Event Details */}
                <div className="flex-1 p-4 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs px-2 py-0.5 rounded bg-accent/30 text-accent">
                      {event.type}
                    </span>
                    {event.daysLeft && (
                      <span className="text-xs text-primary-foreground/60">
                        {event.daysLeft} Days Left
                      </span>
                    )}
                  </div>
                  <h3 className="font-heading text-lg font-semibold">{event.title}</h3>
                  <div className="flex items-center gap-4 mt-2 text-sm text-primary-foreground/70">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {event.time}
                    </span>
                    {event.endDate && (
                      <span>
                        Until {format(event.endDate, "MMM d")}
                      </span>
                    )}
                  </div>
                </div>

                {/* Action */}
                <div className="hidden md:flex items-center pr-4">
                  <Link 
                    to="/events" 
                    className="text-accent hover:text-accent/80 transition-colors text-sm font-medium"
                  >
                    Details →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
