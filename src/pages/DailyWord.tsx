import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { BookOpen } from "lucide-react";
import { format } from "date-fns";
import { supabase } from "@/integrations/supabase/client";

const newTestamentBooks = [
  { name: "Matthew", chapters: 28 },
  { name: "Mark", chapters: 16 },
  { name: "Luke", chapters: 24 },
  { name: "John", chapters: 21 },
  { name: "Acts", chapters: 28 },
  { name: "Romans", chapters: 16 },
  { name: "1 Corinthians", chapters: 16 },
  { name: "2 Corinthians", chapters: 13 },
  { name: "Galatians", chapters: 6 },
  { name: "Ephesians", chapters: 6 },
  { name: "Philippians", chapters: 4 },
  { name: "Colossians", chapters: 4 },
  { name: "1 Thessalonians", chapters: 5 },
  { name: "2 Thessalonians", chapters: 3 },
  { name: "1 Timothy", chapters: 6 },
  { name: "2 Timothy", chapters: 4 },
  { name: "Titus", chapters: 3 },
  { name: "Philemon", chapters: 1 },
  { name: "Hebrews", chapters: 13 },
  { name: "James", chapters: 5 },
  { name: "1 Peter", chapters: 5 },
  { name: "2 Peter", chapters: 3 },
  { name: "1 John", chapters: 5 },
  { name: "2 John", chapters: 1 },
  { name: "3 John", chapters: 1 },
  { name: "Jude", chapters: 1 },
  { name: "Revelation", chapters: 22 },
];

const encouragingOldTestamentBooks = [
  { name: "Psalms", chapters: 150 },
  { name: "Proverbs", chapters: 31 },
  { name: "Isaiah", chapters: 66 },
  { name: "Jeremiah", chapters: 52 },
  { name: "Lamentations", chapters: 5 },
  { name: "Daniel", chapters: 12 },
  { name: "Hosea", chapters: 14 },
];

const getRandomBibleReference = () => {
  const useOldTestament = Math.random() < 0.1;
  const pool = useOldTestament ? encouragingOldTestamentBooks : newTestamentBooks;
  const book = pool[Math.floor(Math.random() * pool.length)];
  const chapter = Math.floor(Math.random() * book.chapters) + 1;
  return `${book.name} ${chapter}`;
};

const generateDevotionalContent = (reference: string, verseText: string) => {
  return `Today's scripture is ${reference}. As you meditate on these words, ask God to make them alive in your heart. Allow the truth of this passage to bring peace, strength, and hope into your day.`;
};

const DailyWord = () => {
  const [dailyWord, setDailyWord] = useState<any>(null);

  useEffect(() => {
    const mapToDailyWord = (raw: any) => {
      if (!raw) return null;
      return {
        title: raw.title || raw.heading || "Daily Word",
        scripture_reference: raw.scripture_reference || raw.scriptureReference || raw.reference || "",
        scripture_text: raw.scripture_text || raw.scriptureText || raw.text || "",
        devotional_content:
          raw.devotional_content || raw.devotionalContent || raw.content || raw.devotionalContent || "",
        author: raw.author || raw.writer || raw.translation || "",
        publish_date: raw.publish_date || raw.date || new Date().toISOString(),
      };
    };

    const fetchFromApi = async () => {
      const apiTemplate = import.meta.env.VITE_DAILY_WORD_API_URL || import.meta.env.VITE_BIBLE_API_URL;
      const apiKey = import.meta.env.VITE_DAILY_WORD_API_KEY || import.meta.env.VITE_BIBLE_API_KEY;
      if (!apiTemplate) return null;

      const randomReference = getRandomBibleReference();
      const apiUrl = apiTemplate.includes("{reference}")
        ? apiTemplate.replace("{reference}", encodeURIComponent(randomReference))
        : apiTemplate;

      try {
        const headers: Record<string, string> = {
          "Content-Type": "application/json",
        };
        if (apiKey) {
          headers["Authorization"] = `Bearer ${apiKey}`;
          headers["x-api-key"] = apiKey;
        }

        const response = await fetch(apiUrl, {
          method: "GET",
          headers,
        });
        if (!response.ok) throw new Error(`API request failed (${response.status})`);

        const payload = await response.json();

        if (payload && payload.text && payload.reference) {
          return mapToDailyWord({
            title: "Daily Scripture",
            reference: payload.reference,
            text: payload.text,
            devotionalContent: generateDevotionalContent(payload.reference, payload.text),
            translation: payload.translation_id || "Bible",
          });
        }

        let candidate: any = null;
        if (Array.isArray(payload) && payload.length > 0) {
          candidate = payload[Math.floor(Math.random() * payload.length)];
        } else if (Array.isArray(payload.data) && payload.data.length > 0) {
          candidate = payload.data[Math.floor(Math.random() * payload.data.length)];
        } else if (payload.data) {
          candidate = payload.data;
        } else {
          candidate = payload;
        }

        return mapToDailyWord(candidate);
      } catch (error) {
        console.error("DailyWord API fetch failed", error);
        return null;
      }
    };

    const fetchFromBibleApi = async () => {
      const randomReference = getRandomBibleReference();
      const bibleApiUrl = `https://bible-api.com/${encodeURIComponent(randomReference)}`;

      try {
        const response = await fetch(bibleApiUrl);
        if (!response.ok) throw new Error(`Bible API request failed (${response.status})`);

        const payload = await response.json();

        if (!payload || !payload.text) return null;

        return mapToDailyWord({
          title: "Daily Scripture",
          reference: payload.reference || randomReference,
          text: payload.text,
          devotionalContent: generateDevotionalContent(payload.reference || randomReference, payload.text),
          translation: payload.translation_id || "Bible",
        });
      } catch (error) {
        console.error("Bible API fetch failed", error);
        return null;
      }
    };

    const fetchFromSupabase = async () => {
      try {
        const { data: ids } = await supabase.from("daily_words").select("id");
        if (!ids || ids.length === 0) return null;

        const randomIndex = Math.floor(Math.random() * ids.length);
        const randomId = (ids[randomIndex] as any).id;

        const { data } = await supabase.from("daily_words").select("*").eq("id", randomId).single();
        return mapToDailyWord(data);
      } catch (error) {
        console.error("Supabase random daily word fetch failed", error);
        return null;
      }
    };

    const fetchDailyWord = async () => {
      let result = await fetchFromApi();
      if (!result) {
        result = await fetchFromSupabase();
      }
      if (!result) {
        result = await fetchFromBibleApi();
      }
      setDailyWord(result);
    };

    fetchDailyWord();
  }, []);

  const placeholder = {
    title: "Finding Peace in God's Presence",
    scripture_reference: "Philippians 4:6-7",
    scripture_text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.",
    devotional_content: "In our busy lives, it's easy to become overwhelmed by worry and anxiety. Yet God invites us to bring everything to Him in prayer. When we do, He promises a peace that goes beyond human understanding—a peace that protects our hearts and minds.\n\nToday, take a moment to pause. What worries are you carrying? Bring them to God with a thankful heart, trusting that He hears you and cares deeply about every detail of your life.",
    author: "Pastor Simon Muriuki",
    publish_date: new Date().toISOString(),
  };

  const content = dailyWord || placeholder;

  return (
    <Layout>
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary to-primary/90">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-primary-foreground mb-6">Daily Word</h1>
            <p className="text-xl text-primary-foreground/80">{format(new Date(), "EEEE, MMMM d, yyyy")}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-card rounded-2xl shadow-xl p-8 md:p-12">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-8 h-8 text-accent" />
            </div>
            <h2 className="font-heading text-3xl font-bold text-center mb-8">{content.title}</h2>
            <blockquote className="bg-muted/50 rounded-xl p-6 mb-8 border-l-4 border-accent">
              <p className="text-lg italic text-foreground mb-2">"{content.scripture_text}"</p>
              <cite className="text-accent font-medium">— {content.scripture_reference}</cite>
            </blockquote>
            <div className="prose prose-lg max-w-none text-muted-foreground whitespace-pre-line">{content.devotional_content}</div>
            {content.author && <p className="text-right text-muted-foreground mt-8 italic">— {content.author}</p>}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default DailyWord;
