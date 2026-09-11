"use client";

import Image from "next/image";
import { FadeIn, ImageReveal } from "./ScrollReveal";
import AnimatedButton from "./AnimatedButton";
import { Sparkles } from "lucide-react";
import TypewriterText from "./TypewriterText";

export default function BandhaSection() {
  return (
    <section
      id="bandhas"
      className="py-20 lg:py-28 bg-[#0E2229] text-white relative overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#C89B58]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#5C7267]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <FadeIn>
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-[#C89B58]/40 text-xs font-semibold tracking-widest uppercase text-[#DFC08A]">
                  <Sparkles className="w-3.5 h-3.5 text-[#C89B58]" />
                  <span>Core Teaching Specialty</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-[1.15]">
                  Experience Bandhas. <br />
                  <TypewriterText
                    words={[
                      "Don’t Just Learn About Them.",
                      "Unlock Internal Stability.",
                      "Channel Your Life Energy.",
                      "Master Core Alignment.",
                    ]}
                    typingSpeed={70}
                    deletingSpeed={35}
                    pauseTime={2200}
                    className="italic font-light text-[#C89B58]"
                    cursorClassName="bg-[#C89B58]"
                  />
                </h2>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="space-y-4 text-base sm:text-lg text-[#ECE8DF] leading-relaxed font-normal">
                <p>
                  Bandhas are one of the core areas of my teaching. Rather than
                  treating them as theoretical concepts, I encourage practitioners
                  to understand and experience them through appropriate preparation
                  and technique.
                </p>
                <p>
                  Learn how Bandhas can be integrated into your Asana practice to
                  develop greater awareness, control and depth.
                </p>
              </div>
            </FadeIn>

            {/* CTA Button */}
            <FadeIn delay={0.2}>
              <div className="pt-2">
                <AnimatedButton
                  href="/#practice-areas"
                  variant="primary"
                  size="md"
                  className="bg-[#C89B58] text-[#0E2229] hover:bg-white"
                >
                  Explore Bandhas
                </AnimatedButton>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Visual Feature */}
          <div className="lg:col-span-5">
            <ImageReveal>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-3xl p-3.5 sm:p-4 bg-white/10 border border-white/15 shadow-2xl backdrop-blur-sm">
                  <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-2xl overflow-hidden bg-[#071519]">
                    <Image
                      src="/images/IMG_0263.png"
                      alt="Harpreet Kaur demonstrating authentic Uddiyana Bandha abdominal lock"
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover object-center"
                    />
                  </div>

                  {/* Slim Bandha Breakdown Tag OUTSIDE the image frame */}
                  <div className="mt-3 pt-2.5 border-t border-white/10 space-y-1 text-center">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 border border-[#C89B58]/40 text-[10.5px] font-semibold text-[#DFC08A] uppercase tracking-wider">
                      Mula · Uddiyana · Jalandhara · Maha
                    </div>
                    <div className="text-[11px] text-[#ECE8DF]/90 font-light">
                      Integrated Somatic Neuromuscular Locks
                    </div>
                  </div>
                </div>
              </div>
            </ImageReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
