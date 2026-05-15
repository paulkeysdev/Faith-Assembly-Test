import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    try {
      const { error } = await supabase
        .from("newsletter_subscribers")
        .insert({ email, name: name || null });

      if (error) {
        if (error.code === "23505") {
          toast({
            title: "Already subscribed",
            description: "This email is already on our mailing list!",
          });
        } else {
          throw error;
        }
      } else {
        setIsSuccess(true);
        setEmail("");
        setName("");
        toast({
          title: "Successfully subscribed!",
          description: "Thank you for joining our newsletter.",
        });
      }
    } catch (error) {
      console.error("Newsletter signup error:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-accent" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Stay Connected
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            Subscribe to our newsletter for weekly devotionals, event updates, and community news.
          </p>

          {isSuccess ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex items-center justify-center gap-3 text-accent"
            >
              <CheckCircle className="w-6 h-6" />
              <span className="text-lg font-medium">You're subscribed!</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="flex-1 flex flex-col gap-3">
                <Input
                  type="text"
                  placeholder="Your name (optional)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:ring-accent"
                />
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:ring-accent"
                />
              </div>
              <Button
                type="submit"
                disabled={isLoading}
                className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 h-auto"
              >
                {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Subscribe"}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
