import { Layout } from "@/components/layout/Layout";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { QuickInfoSection } from "@/components/home/QuickInfoSection";
import { AboutPreview } from "@/components/home/AboutPreview";
import { PastorSection } from "@/components/home/PastorSection";
import { MinistriesSection } from "@/components/home/MinistriesSection";
import { LiveStreamCTA } from "@/components/home/LiveStreamCTA";
import { EventsCalendar } from "@/components/home/EventsCalendar";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { GivingPreview } from "@/components/home/GivingPreview";
import { NewsSection } from "@/components/home/NewsSection";
import { LocationSection } from "@/components/home/LocationSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";

const Index = () => {
  return (
    <Layout>
      <HeroCarousel />
      <QuickInfoSection />
      <AboutPreview />
      <PastorSection />
      <MinistriesSection />
      <LiveStreamCTA />
      <EventsCalendar />
      <TestimonialsSection />
      <GivingPreview />
      <NewsSection />
      <LocationSection />
      <NewsletterSection />
    </Layout>
  );
};

export default Index;
