import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Play, Facebook, Youtube, Video } from "lucide-react";
import gallery01 from "@/Imgs/Gallery/01.jpeg";
import gallery02 from "@/Imgs/Gallery/02.jpeg";
import gallery03 from "@/Imgs/Gallery/03.jpeg";

const livestreamPlatforms = [
  {
    name: "YouTube",
    href: "https://youtube.com/@faithlifeassemblychurch?si=gbuTe9MA1An5lAvZ",
    embed: "https://www.youtube.com/embed/live_stream?channel=@faithlifeassemblychurch",
    icon: Youtube,
    bg: "bg-red-600",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100084026224123",
    embed: "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/profile.php?id=100084026224123&show_text=false&width=560",
    icon: Facebook,
    bg: "bg-blue-600",
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/@faith_assemblychurch",
    embed: "https://www.tiktok.com/embed/@faith_assemblychurch",
    icon: Video,
    bg: "bg-black",
  },
];

const galleryImages = [gallery01, gallery02, gallery03];

const Media = () => {
  const [activePlatform, setActivePlatform] = useState(livestreamPlatforms[0]);
  return (
    <Layout>
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary to-primary/90">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-primary-foreground mb-6">Media</h1>
            <p className="text-xl text-primary-foreground/80">Watch sermons and view photos from our services</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold mb-8">Live Stream</h2>
          <div className="grid gap-8 lg:grid-cols-[2fr_1fr] items-start mb-16">
            <div className="rounded-2xl overflow-hidden border border-primary-foreground/10 bg-black/5">
              <div className="flex items-center justify-between px-4 py-3 bg-primary/10">
                <div>
                  <p className="text-sm text-primary-foreground/70">Active Live Stream</p>
                  <p className="text-lg font-semibold text-primary-foreground">{activePlatform.name}</p>
                </div>
                <div className="text-primary-foreground/60 text-xs">Powered by {activePlatform.name}</div>
              </div>
              <div className="aspect-video bg-black">
                <iframe
                  src={activePlatform.embed}
                  title={`${activePlatform.name} live stream`}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                  sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                />
              </div>
              <div className="p-4 bg-muted">
                <p className="text-sm text-primary-foreground/80">
                  If the embed does not display, click the platform button to open the live stream directly.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-primary-foreground/10 bg-muted p-6">
              <h3 className="font-heading text-2xl font-semibold mb-4">Watch on</h3>
              <p className="text-primary-foreground/80 text-sm mb-6">
                Select a platform below to load the live stream preview or open the full service page.
              </p>
              <div className="grid gap-3">
                {livestreamPlatforms.map((platform) => (
                  <button
                    key={platform.name}
                    onClick={() => setActivePlatform(platform)}
                    className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-white transition hover:opacity-90 ${platform.bg} ${activePlatform.name === platform.name ? "ring-2 ring-offset-2 ring-accent" : ""}`}
                  >
                    <platform.icon className="w-5 h-5" />
                    <span>{platform.name}</span>
                  </button>
                ))}
              </div>
              <div className="mt-6 border-t border-primary-foreground/10 pt-4">
                <p className="text-sm text-primary-foreground/80 mb-2">Open directly:</p>
                <div className="grid gap-2">
                  {livestreamPlatforms.map((platform) => (
                    <a
                      key={platform.name}
                      href={platform.href}
                      target="_blank"
                      rel="noreferrer"
                      className="block rounded-2xl border border-primary-foreground/10 px-4 py-3 text-primary-foreground transition hover:bg-primary/10"
                    >
                      {platform.name} page
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <h2 className="font-heading text-3xl font-bold mb-8">Photo Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((src, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-xl bg-muted">
                <img src={src} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Media;
