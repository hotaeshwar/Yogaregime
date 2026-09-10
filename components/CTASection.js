"use client";

import Image from "next/image";
import AnimatedButton from "./AnimatedButton";
import { FadeIn } from "./ScrollReveal";
import TypewriterText from "./TypewriterText";

export default function CTASection() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#0B2A3A] text-white overflow-hidden">
      {/* Background Zen Photography */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/zen_stones.jpg"
          alt="Balanced zen stones by water"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-25 mix-blend-luminosity scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A3A] via-[#0B2A3A]/85 to-[#0B2A3A]/70" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6 sm:space-y-8">
        <FadeIn>
          <div className="text-xs font-semibold tracking-widest uppercase text-[#D8C9B8]">
            Begin Today
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-tight">
            <TypewriterText
              words={[
                "Ready to Begin Your Journey?",
                "Step Onto Your Sacred Mat",
                "Awaken Your Inner Peace",
                "Your Transformation Awaits",
              ]}
              typingSpeed={70}
              deletingSpeed={35}
              pauseTime={2400}
              cursorClassName="bg-[#D8C9B8]"
            />
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="font-serif italic text-lg sm:text-2xl text-[#EAE7E1]/90 max-w-xl mx-auto font-light">
            Your practice. Your pace. Your transformation.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <AnimatedButton
              href="/booking"
              variant="secondary"
              size="lg"
              className="shadow-xl min-w-[200px]"
            >
              Book a Session
            </AnimatedButton>
            <AnimatedButton
              href="/classes"
              variant="outline"
              size="lg"
              className="border-white/30 text-[#0B2A3A] hover:text-white min-w-[200px]"
            >
              Browse Classes
            </AnimatedButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
