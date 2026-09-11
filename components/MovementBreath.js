"use client";

import Image from "next/image";
import { FadeIn, ImageReveal } from "./ScrollReveal";
import { Wind } from "lucide-react";
import TypewriterText from "./TypewriterText";

export default function MovementBreath() {
  return (
    <section
      id="movement"
      className="py-20 lg:py-28 bg-[#FAF8F5] relative overflow-hidden border-t border-[#DFD9CC]/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual with real image */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <ImageReveal>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-3xl p-3.5 sm:p-4 bg-white border border-[#DFD9CC] shadow-xl">
                  <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-2xl overflow-hidden bg-[#ECE8DF]">
                    <Image
                      src="/images/IMG_0267.png"
                      alt="Harpreet Kaur moving with mindful alignment and conscious breath"
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover object-center"
                    />
                  </div>

                  {/* Slim Tag OUTSIDE the image frame */}
                  <div className="mt-3 pt-2.5 border-t border-[#DFD9CC]/60 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#ECE8DF] border border-[#DFD9CC] text-[11px] font-semibold text-[#0E2229]">
                      <Wind className="w-3 h-3 text-[#5C7267]" />
                      <span>Breath & Movement</span>
                    </span>
                    <span className="text-[11px] text-[#5C7267] font-medium">
                      Mindful Awareness
                    </span>
                  </div>
                </div>

                {/* Soft backdrop spot */}
                <div className="absolute -top-6 -right-6 w-40 h-40 bg-[#5C7267]/15 rounded-full blur-3xl -z-10 pointer-events-none" />
              </div>
            </ImageReveal>
          </div>

          {/* Right Column: Copy & Insights */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 order-1 lg:order-2">
            <FadeIn>
              <div className="space-y-3">
                <div className="text-xs font-semibold tracking-widest uppercase text-[#5C7267]">
                  Movement + Breath
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#0E2229] tracking-tight leading-[1.15]">
                  Move With Awareness. <br />
                  <TypewriterText
                    words={[
                      "Breathe With Intention.",
                      "Flow With Presence.",
                      "Listen To Your Body.",
                      "Awaken Inner Vitality.",
                    ]}
                    typingSpeed={70}
                    deletingSpeed={35}
                    pauseTime={2200}
                    className="italic font-light text-[#A97A37]"
                    cursorClassName="bg-[#A97A37]"
                  />
                </h2>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="space-y-5 text-base sm:text-lg text-[#1D2628] leading-relaxed font-normal">
                <p>
                  Everybody is different. Instead of chasing the “perfect pose”,
                  learn to understand your own alignment, movement mechanics and
                  breathing.
                </p>
                <p>
                  Breath is an integral part of Yoga. Developing coordination
                  between breath and movement can help you become more aware of how
                  your breathing influences your physical and mental state.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
