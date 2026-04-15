"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ChevronLeftIcon from "@/components/icons/ChevronLeftIcon";
import ChevronRightIcon from "@/components/icons/ChevronRightIcon";
import AwardIcon from "@/components/icons/AwardIcon";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollTo = (index: number) => {
    if (containerRef.current) {
      const scrollLeft = containerRef.current.offsetWidth * index;
      containerRef.current.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? TESTIMONIALS.length - 1 : currentIndex - 1;
    scrollTo(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === TESTIMONIALS.length - 1 ? 0 : currentIndex + 1;
    scrollTo(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <Section id="testimonials" variant="cream">
      <Container>
        <SectionHeading
          title="What Couples Say"
          subtitle="Stories from the love stories we&apos;ve had the honor to capture"
        />

        <div className="relative mt-12">
          <button
            type="button"
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 min-w-[44px] min-h-[44px] flex items-center justify-center bg-white rounded-full shadow-md text-charcoal hover:text-rose-gold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-gold -ml-4 mobile:ml-0"
            aria-label="Previous testimonial"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>

          <div
            ref={containerRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-6 px-4 mobile:px-12"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            role="group"
            aria-label="Customer testimonials"
          >
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.article
                key={testimonial.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex-shrink-0 w-[85vw] mobile:w-[70vw] desktop:w-[400px] snap-center bg-white rounded-lg p-8 shadow-md border border-border"
              >
                {testimonial.award && (
                  <div className="flex items-center gap-2 text-rose-gold mb-4">
                    <AwardIcon className="w-5 h-5" />
                    <span className="font-sans text-sm">{testimonial.award}</span>
                  </div>
                )}
                <blockquote className="font-sans text-warm-gray leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="border-t border-border pt-4">
                  <p className="font-serif text-lg text-charcoal">{testimonial.names}</p>
                  <p className="font-sans text-sm text-taupe">{testimonial.location}</p>
                </div>
              </motion.article>
            ))}
          </div>

          <button
            type="button"
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 min-w-[44px] min-h-[44px] flex items-center justify-center bg-white rounded-full shadow-md text-charcoal hover:text-rose-gold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-gold -mr-4 mobile:mr-0"
            aria-label="Next testimonial"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-gold focus-visible:ring-offset-2 ${
                currentIndex === index ? "bg-rose-gold" : "bg-champagne"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}