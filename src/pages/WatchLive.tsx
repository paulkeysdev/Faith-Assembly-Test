import { useEffect, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Radio, MessageSquare, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Countdown to next Sunday 10:00 AM EAT
const getNextSunday = () => {
  const now = new Date();
  const next = new Date(now);
  const day = now.getDay();
  const daysUntil = (7 - day) % 7 || 7;
  next.setDate(now.getDate() + daysUntil);
  next.setHours(10, 0, 0, 0);
  return next;
};

const WatchLive = () => {
  const [target] = useState(getNextSunday());
  const [diff, setDiff] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const tick = () => {
      const ms = target.getTime() - Date.now();
      if (ms <= 0) return;
      const d = Math.floor(ms / 86400000);
      const h = Math.floor((ms / 3600000) % 24);
      const m = Math.floor((ms / 60000) % 60);
      const s = Math.floor((ms / 1000) % 60);
      setDiff({ d, h, m, s });
    };
    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, [target]);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
            </span>
            <Radio className="w-4 h-4" />
            <span className="text-sm font-medium">Live Stream</span>
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">Worship With Us, Live</h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
            Sundays at 10:00 AM EAT — wherever you are in the world.
          </p>
        </div>
      </section>

      {/* Player + Chat */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-elegant bg-black">
                <iframe
                  src="https://www.youtube.com/embed/live_stream?channel=UCfvCkUJqJqQF9rQHy8pCT4w"
                  title="Faith Life Assembly Church Live Stream"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <div className="mt-6 bg-card rounded-2xl p-6 border border-border">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-2">This Sunday's Service</h2>
                <p className="text-muted-foreground">
                  Join Pastor John Doe and the Faith Life Assembly family for a Spirit-filled time of
                  worship, prayer and the preached Word.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="bg-card rounded-2xl p-6 border border-border">
                <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3 flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> Service Starts In
                </p>
                <div className="grid grid-cols-4 gap-2 text-center">
                  {[
                    { l: "Days", v: diff.d },
                    { l: "Hrs", v: diff.h },
                    { l: "Min", v: diff.m },
                    { l: "Sec", v: diff.s },
                  ].map((b) => (
                    <div key={b.l} className="bg-primary text-primary-foreground rounded-lg py-3">
                      <p className="font-heading text-2xl font-bold">{String(b.v).padStart(2, "0")}</p>
                      <p className="text-xs opacity-70">{b.l}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 border border-border">
                <h3 className="font-heading font-semibold text-foreground mb-3">Live Chat</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Chat with our online congregation directly on YouTube.
                </p>
                <Button asChild className="w-full" variant="outline">
                  <a href="https://youtube.com/@faithlifeassemblychurch" target="_blank" rel="noreferrer">
                    Open YouTube Chat
                  </a>
                </Button>
              </div>

              <div className="bg-gradient-to-br from-primary to-secondary text-primary-foreground rounded-2xl p-6">
                <h3 className="font-heading font-semibold mb-2">Need Prayer?</h3>
                <p className="text-sm text-primary-foreground/80 mb-4">
                  Our prayer team is standing by for you.
                </p>
                <Button asChild className="w-full gradient-gold text-primary hover:opacity-90 shadow-gold">
                  <Link to="/prayer"><MessageSquare className="w-4 h-4 mr-2" /> Request Prayer</Link>
                </Button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Floating prayer button (mobile) */}
      <Link
        to="/prayer"
        className="lg:hidden fixed bottom-24 right-6 z-40 px-5 py-3 rounded-full gradient-gold text-primary font-semibold shadow-gold flex items-center gap-2"
      >
        <MessageSquare className="w-4 h-4" /> Need Prayer?
      </Link>
    </Layout>
  );
};

export default WatchLive;
