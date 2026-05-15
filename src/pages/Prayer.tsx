import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Heart, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Prayer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isPrivate, setIsPrivate] = useState(true);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.currentTarget);
    
    const { error } = await supabase.from("prayer_requests").insert({
      name: formData.get("name") as string,
      email: formData.get("email") as string || null,
      phone: formData.get("phone") as string || null,
      request: formData.get("request") as string,
      is_private: isPrivate,
    });

    if (error) {
      toast({ title: "Error", description: "Please try again.", variant: "destructive" });
    } else {
      toast({ title: "Prayer request submitted", description: "Our team will be praying for you." });
      (e.target as HTMLFormElement).reset();
    }
    setIsLoading(false);
  };

  return (
    <Layout>
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary to-primary/90">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-primary-foreground mb-6">Prayer Requests</h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">Share your prayer needs with our community</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-card rounded-2xl shadow-xl p-8">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-accent" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-center mb-2">Submit a Prayer Request</h2>
            <p className="text-muted-foreground text-center mb-8">Our prayer team is here to support you</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input name="name" placeholder="Your Name" required />
              <Input name="email" type="email" placeholder="Email (optional)" />
              <Input name="phone" placeholder="Phone (optional)" />
              <Textarea name="request" placeholder="Share your prayer request..." rows={5} required />
              <div className="flex items-center space-x-2">
                <Checkbox id="private" checked={isPrivate} onCheckedChange={(checked) => setIsPrivate(checked as boolean)} />
                <label htmlFor="private" className="text-sm text-muted-foreground">Keep my request private (only visible to prayer team)</label>
              </div>
              <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" disabled={isLoading}>
                {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Submit Prayer Request"}
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Prayer;
