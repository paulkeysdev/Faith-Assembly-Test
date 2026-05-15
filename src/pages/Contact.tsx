import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    toast({ title: "Message sent!", description: "We'll get back to you soon." });
    setIsLoading(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary to-primary/90">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-primary-foreground mb-6">Contact Us</h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">We'd love to hear from you!</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-3xl font-bold mb-8">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <a
                      href="https://www.google.com/maps?q=Mutego,+Gitaru+Off+Wangige+Road"
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      Mutego, Gitaru Off Wangige Road
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground">(+254) 799192029</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">faithassemblychurch@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 rounded-3xl overflow-hidden border border-primary-foreground/10">
                <iframe
                  title="Faith Life Assembly Church location"
                  src="https://www.google.com/maps?q=Mutego,+Gitaru+Off+Wangige+Road&output=embed"
                  className="w-full h-64 sm:h-80"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <form onSubmit={handleSubmit} className="bg-card rounded-2xl shadow-xl p-8 space-y-6">
                <Input placeholder="Your Name" required />
                <Input type="email" placeholder="Your Email" required />
                <Input placeholder="Subject" required />
                <Textarea placeholder="Your Message" rows={5} required />
                <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" disabled={isLoading}>
                  {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <><Send className="w-4 h-4 mr-2" />Send Message</>}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
