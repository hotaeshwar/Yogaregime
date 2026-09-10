"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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
      className="py-24 sm:py-32 bg-[#F8F7F3] border-t border-[#EAE7E1] relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Header */}
        <div className="space-y-3 mb-12 sm:mb-16">
          <FadeIn>
            <div className="text-xs font-semibold tracking-widest uppercase text-[#6E7F72]">
              Community Voices
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-serif text-4xl sm:text-5xl font-medium text-[#0B2A3A] tracking-tight">
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
                cursorClassName="bg-[#0B2A3A]"
              />
            </h2>
          </FadeIn>
        </div>

        {/* Testimonial Card Slider */}
        <div className="relative bg-white border border-[#EAE7E1] rounded-3xl p-8 sm:p-12 shadow-sm min-h-[320px] flex flex-col justify-between">
          <div className="absolute top-6 left-6 text-[#EAE7E1] -z-0">
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
                      className="w-4 h-4 fill-[#0B2A3A] text-[#0B2A3A]"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="font-serif text-xl sm:text-2xl text-[#243038] italic leading-relaxed max-w-2xl mx-auto">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>

                {/* Student Bio */}
                <div className="flex flex-col items-center gap-2 pt-2">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#D8C9B8] shadow-xs">
                    <Image
                      src={current.image}
                      alt={current.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-serif text-base font-semibold text-[#0B2A3A]">
                      {current.name}
                    </div>
                    <div className="text-xs text-[#6E7F72]">
                      {current.role} · {current.service}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls: Arrows and Dots */}
          <div className="relative z-10 pt-8 mt-6 border-t border-[#EAE7E1]/80 flex items-center justify-between">
            {/* Prev Arrow */}
            <button
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-[#EAE7E1] bg-[#F8F7F3] hover:bg-[#0B2A3A] hover:text-white hover:border-[#0B2A3A] text-[#0B2A3A] flex items-center justify-center transition-all duration-300 active:scale-95 cursor-pointer"
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
                      ? "w-8 bg-[#0B2A3A]"
                      : "w-2 bg-[#D8C9B8] hover:bg-[#6E7F72]"
                  }`}
                />
              ))}
            </div>

            {/* Next Arrow */}
            <button
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border border-[#EAE7E1] bg-[#F8F7F3] hover:bg-[#0B2A3A] hover:text-white hover:border-[#0B2A3A] text-[#0B2A3A] flex items-center justify-center transition-all duration-300 active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
