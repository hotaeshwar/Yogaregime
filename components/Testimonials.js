"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";
import { FadeIn } from "./ScrollReveal";
import TypewriterText from "./TypewriterText";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  // Optional subtle autoplay every 7s
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonialsData[currentIndex];

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 40 : -40,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
      },
    },
    exit: (direction) => ({
      x: direction < 0 ? 40 : -40,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
      },
    }),
  };

  return (
    <section
      id="testimonials"
      className="py-24 sm:py-32 bg-[#FAF8F5] border-t border-[#DFD9CC] relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Header */}
        <div className="space-y-3 mb-12 sm:mb-16">
          <FadeIn>
            <div className="text-xs font-semibold tracking-widest uppercase text-[#5C7267]">
              Community Voices
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-serif text-4xl sm:text-5xl font-medium text-[#0E2229] tracking-tight">
              <TypewriterText
                words={[
                  "What My Students Say",
                  "Stories of Transformation",
                  "Words from the Heart",
                  "Journeys of Healing",
                ]}
                typingSpeed={70}
                deletingSpeed={35}
                pauseTime={2200}
                cursorClassName="bg-[#C89B58]"
              />
            </h2>
          </FadeIn>
        </div>

        {/* Testimonial Card Slider */}
        <div className="relative bg-white border border-[#DFD9CC] rounded-3xl p-8 sm:p-12 shadow-sm min-h-[320px] flex flex-col justify-between">
          <div className="absolute top-6 left-6 text-[#DFD9CC]/60 -z-0">
            <Quote className="w-12 h-12 stroke-[1]" />
          </div>

          <div className="relative z-10 my-auto">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="space-y-6"
              >
                {/* 5-Star Rating */}
                <div className="flex items-center justify-center gap-1">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#C89B58] text-[#C89B58]"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="font-serif text-xl sm:text-2xl text-[#1A333D] italic leading-relaxed max-w-2xl mx-auto">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>

                {/* Student Bio - Without Avatar Image */}
                <div className="flex flex-col items-center gap-1 pt-2">
                  <div className="font-serif text-lg font-semibold text-[#0E2229]">
                    {current.name}
                  </div>
                  <div className="text-xs text-[#5C7267] font-medium tracking-wide">
                    {current.role} · {current.service}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls: Arrows and Dots */}
          <div className="relative z-10 pt-8 mt-6 border-t border-[#DFD9CC]/80 flex items-center justify-between">
            {/* Prev Arrow */}
            <button
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-[#DFD9CC] bg-[#FAF8F5] hover:bg-[#0E2229] hover:text-[#FAF8F5] hover:border-[#0E2229] text-[#0E2229] flex items-center justify-center transition-all duration-300 active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentIndex
                      ? "w-8 bg-[#0E2229]"
                      : "w-2 bg-[#DFD9CC] hover:bg-[#C89B58]"
                  }`}
                />
              ))}
            </div>

            {/* Next Arrow */}
            <button
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border border-[#DFD9CC] bg-[#FAF8F5] hover:bg-[#0E2229] hover:text-[#FAF8F5] hover:border-[#0E2229] text-[#0E2229] flex items-center justify-center transition-all duration-300 active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
