import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import LaunchImage from "@/Imgs/Theme/Launch.png";

const slides = [
  {
    id: 1,
    image: LaunchImage,
    preTitle: "Welcome to Faith Life Assembly",
    title: "Transforming Lives",
    highlight: "Through Faith",
    titleEnd: "And the Word of God",
    scripture: "Romans 12:2",
  },
  {
    id: 2,
    image: LaunchImage,
    preTitle: "Join Us This Sunday",
    title: "A Place Where",
    highlight: "Faith",
    titleEnd: "Grows & Lives Are Transformed",
    scripture: "Hebrews 10:25",
  },
  {
    id: 3,
    image: LaunchImage,
    preTitle: "Spirit-Filled. Bible-Centered.",
    title: "Encounter",
    highlight: "Jesus",
    titleEnd: "And Be Made New",
    scripture: "2 Corinthians 5:17",
  },
];

export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
      {/* Slides */}
      <AnimatePresence mode="wait">
        {slides.map(
          (slide, index) =>
            index === currentSlide && (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
              </motion.div>
            )
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl ml-auto mr-0 lg:mr-20 text-right"
            >
              <p className="text-accent font-medium text-lg mb-4 tracking-wide">
                {slides[currentSlide].preTitle}
              </p>
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
                {slides[currentSlide].title}
                <br />
                <span className="text-accent text-5xl md:text-7xl lg:text-8xl">
                  {slides[currentSlide].highlight}
                </span>
                <br />
                {slides[currentSlide].titleEnd}
              </h1>
              <p className="text-primary-foreground/70 text-lg mt-6 italic">
                — {slides[currentSlide].scripture}
              </p>
              <div className="flex flex-wrap justify-end gap-4 mt-10">
                <Button
                  asChild
                  size="lg"
                  className="gradient-gold text-primary hover:opacity-90 shadow-gold text-base px-8"
                >
                  <Link to="/watch-live">Watch Live</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-base px-8"
                >
                  <Link to="/contact">Visit Us</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8"
                >
                  <Link to="/give">Give Online</Link>
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 bottom-8 z-20 w-12 h-12 rounded-full bg-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-primary-foreground" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute left-20 md:left-24 bottom-8 z-20 w-12 h-12 rounded-full bg-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-primary-foreground" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all",
              index === currentSlide
                ? "bg-accent w-8"
                : "bg-primary-foreground/40 hover:bg-primary-foreground/60"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
