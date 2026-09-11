"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";
import AnimatedButton from "./AnimatedButton";
import { FadeIn, ImageReveal } from "./ScrollReveal";
import TypewriterText from "./TypewriterText";

export default function AboutPreview() {
  return (
    <section
      id="about"
      className="py-20 lg:py-28 bg-[#FAF8F5] relative overflow-hidden border-t border-[#DFD9CC]/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait Photography with IMG_0222.png */}
          <div className="lg:col-span-5">
            <ImageReveal>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-3xl overflow-hidden bg-white border border-[#DFD9CC] shadow-xl p-3.5 sm:p-4">
                  <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-2xl overflow-hidden bg-[#ECE8DF]">
                    <Image
                      src="/images/IMG_0222.png"
                      alt="Harpreet Kaur - Certified Yoga Teacher, Yoga Regime"
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover object-top"
                    />
                  </div>

                  {/* Slim Tag OUTSIDE the image frame */}
                  <div className="mt-3 pt-2 border-t border-[#DFD9CC]/60 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#ECE8DF] border border-[#DFD9CC] text-[11px] font-semibold text-[#0E2229]">
                      <Sparkles className="w-3 h-3 text-[#C89B58]" />
                      <span>15 Years of Dedicated Practice</span>
                    </span>
                    <span className="text-[11px] text-[#5C7267] font-medium">
                      Certified Yoga Teacher
                    </span>
                  </div>
                </div>

                {/* Soft backdrop blur spot */}
                <div className="absolute -bottom-8 -left-8 w-44 h-44 bg-[#5C7267]/15 rounded-full blur-3xl -z-10 pointer-events-none" />
              </div>
            </ImageReveal>
          </div>

          {/* Right Column: Bio & Core Info */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <FadeIn>
              <div className="space-y-2.5">
                <div className="text-xs font-semibold tracking-widest uppercase text-[#5C7267]">
                  About Harpreet
                </div>
                <h2 className="font-serif text-4xl sm:text-5xl lg:text-5xl font-medium text-[#0E2229] tracking-tight">
                  <TypewriterText
                    words={[
                      "Meet Harpreet",
                      "15 Years Dedicated",
                      "Traditional Practice",
                      "Mindful Guidance",
                    ]}
                    typingSpeed={70}
                    deletingSpeed={35}
                    pauseTime={2200}
                    cursorClassName="bg-[#0E2229]"
                  />
                </h2>
                <div className="text-base sm:text-lg font-serif italic font-semibold text-[#A97A37] tracking-wide">
                  Certified Yoga Teacher | 15 Years of Yoga Practice
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="space-y-4 text-[#1D2628] text-base sm:text-lg leading-relaxed font-normal">
                <p>
                  Yoga has been a part of my life for the past 15 years. My journey
                  began through my mother, a dedicated yoga practitioner, who first
                  introduced me to the practice. What began as an introduction gradually
                  became a deeply personal journey that continues to shape the way I
                  understand my body, mind and myself.
                </p>
                <p>
                  My journey continues to evolve through learning from different teachers and gurus, practising and sharing what I learn.
                </p>
              </div>
            </FadeIn>

            {/* CTA Button */}
            <FadeIn delay={0.2}>
              <div className="pt-2">
                <AnimatedButton href="/about" variant="primary" size="md">
                  Read My Journey
                </AnimatedButton>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
