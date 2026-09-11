"use client";

import Image from "next/image";
import { FadeIn, ImageReveal } from "./ScrollReveal";
import AnimatedButton from "./AnimatedButton";
import { Sparkles } from "lucide-react";
import TypewriterText from "./TypewriterText";

export default function PhilosophyClosing() {
  return (
    <section className="py-20 lg:py-28 bg-[#0E2229] text-white relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C89B58]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#5C7267]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual feature */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <ImageReveal>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-3xl p-3.5 sm:p-4 bg-white/10 border border-white/15 shadow-2xl backdrop-blur-sm">
                  <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-2xl overflow-hidden bg-[#071519]">
                    <Image
                      src="/images/IMG_0319.png"
                      alt="Harpreet Kaur in grounded stillness and devotion to Yoga"
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover object-center"
                    />
                  </div>

                  {/* Slim Emblem OUTSIDE the image frame */}
                  <div className="mt-3 pt-2.5 border-t border-white/10 text-center space-y-0.5">
                    <div className="font-serif text-base font-medium text-white">
                      Yoga Regime
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.22em] text-[#DFC08A] font-semibold">
                      Yoga Beyond the Asana
                    </div>
                  </div>
                </div>
              </div>
            </ImageReveal>
          </div>

          {/* Right Column: Copy */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 order-1 lg:order-2">
            <FadeIn>
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-[#C89B58]/40 text-xs font-semibold tracking-widest uppercase text-[#DFC08A]">
                  <Sparkles className="w-3.5 h-3.5 text-[#C89B58]" />
                  <span>The Living Practice</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-white tracking-tight leading-[1.15]">
                  <span>Yoga Is </span>
                  <TypewriterText
                    words={[
                      "A Way of Life.",
                      "A Lifelong Journey.",
                      "Inner Transformation.",
                      "Self-Realization.",
                    ]}
                    typingSpeed={70}
                    deletingSpeed={35}
                    pauseTime={2200}
                    className="italic font-light text-[#DFC08A]"
                    cursorClassName="bg-[#DFC08A]"
                  />
                </h2>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="space-y-5 text-base sm:text-lg text-[#ECE8DF] leading-relaxed font-normal">
                <p className="font-serif italic text-xl sm:text-2xl text-[#DFC08A]">
                  &ldquo;For me, Yoga is not about achieving the most difficult pose.&rdquo;
                </p>
                <p>
                  It is about developing a deeper understanding of yourself
                  through practice — confronting your limitations and ego,
                  learning to work with your mind, and continuing to grow.
                </p>
                <p>
                  The journey never really ends. There is always something
                  deeper to learn, experience and understand.
                </p>
              </div>
            </FadeIn>

            {/* Brand Signature */}
            <FadeIn delay={0.2}>
              <div className="p-6 rounded-3xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="font-serif text-2xl text-white font-medium">
                    Yoga Regime
                  </div>
                  <div className="text-xs uppercase tracking-[0.22em] text-[#C89B58] font-medium mt-0.5">
                    Yoga Beyond the Asana
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <AnimatedButton
                    href="/booking"
                    variant="primary"
                    size="md"
                    className="bg-[#C89B58] text-[#0E2229] hover:bg-white whitespace-nowrap"
                  >
                    Connect With Harpreet
                  </AnimatedButton>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
