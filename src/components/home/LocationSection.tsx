import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const LocationSection = () => {
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
            VISIT US
          </h2>
          <p className="text-muted-foreground mt-4">
            We'd love to welcome you to our church family
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-xl overflow-hidden shadow-lg"
          >
            <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-accent mx-auto mb-4" />
                <p className="text-foreground font-medium">Grace Community Church</p>
                <p className="text-muted-foreground text-sm mt-1">123 Faith Avenue, Graceville</p>
                <Button asChild variant="outline" className="mt-4">
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Get Directions
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Service Times & Contact */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-card rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-card-foreground">
                  Service Times
                </h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="font-medium">Sunday Services</span>
                  <span className="text-muted-foreground">9:00 AM & 11:00 AM</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="font-medium">Wednesday Bible Study</span>
                  <span className="text-muted-foreground">7:00 PM</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-medium">Friday Youth Night</span>
                  <span className="text-muted-foreground">6:30 PM</span>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-card-foreground">
                  Location
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Mutego, Gitaru Off Wangige Road
              </p>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-accent" />
                <a href="tel:+254799192029" className="text-accent hover:underline">
                  (+254) 799192029
                </a>
              </div>
            </div>

            <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
