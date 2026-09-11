"use client";

import Image from "next/image";
import { FadeIn, ImageReveal } from "./ScrollReveal";
import { Sparkles } from "lucide-react";
import TypewriterText from "./TypewriterText";

export default function IntroPhilosophy() {
  return (
    <section
      id="philosophy"
      className="py-20 lg:py-28 bg-[#FAF8F5] relative overflow-hidden border-t border-[#DFD9CC]/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual feature */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <ImageReveal>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-3xl p-3.5 sm:p-4 bg-white border border-[#DFD9CC] shadow-xl">
                  <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-2xl overflow-hidden bg-[#ECE8DF]">
                    <Image
                      src="/images/yoga_img_1.png"
                      alt="Mindful Yoga philosophy and inner awareness with Harpreet Kaur"
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover object-center"
                    />
                  </div>

                  {/* Slim Tag OUTSIDE the image frame */}
                  <div className="mt-3 pt-2.5 border-t border-[#DFD9CC]/60 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#ECE8DF] border border-[#DFD9CC] text-[11px] font-semibold text-[#0E2229]">
                      <Sparkles className="w-3 h-3 text-[#C89B58]" />
                      <span>Yoga Regime</span>
                    </span>
                    <span className="text-[11px] text-[#5C7267] font-medium">
                      Intelligent Practice
                    </span>
                  </div>
                </div>

                {/* Soft backdrop blur spot */}
                <div className="absolute -top-8 -left-8 w-44 h-44 bg-[#C89B58]/15 rounded-full blur-3xl -z-10 pointer-events-none" />
              </div>
            </ImageReveal>
          </div>

          {/* Right Column: Copy */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 order-1 lg:order-2">
            <FadeIn>
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ECE8DF]/80 border border-[#DFD9CC] text-[11px] font-semibold tracking-widest uppercase text-[#5C7267]">
                  <Sparkles className="w-3 h-3 text-[#C89B58]" />
                  <span>The Philosophy</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#0E2229] tracking-tight leading-[1.15]">
                  <span>Yoga Is </span>
                  <TypewriterText
                    words={[
                      "More Than a Pose.",
                      "An Inner Journey.",
                      "A Path of Awareness.",
                      "Union of Body & Mind.",
                    ]}
                    typingSpeed={70}
                    deletingSpeed={35}
                    pauseTime={2200}
                    className="italic text-[#5C7267]"
                    cursorClassName="bg-[#5C7267]"
                  />
                </h2>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="space-y-5 text-base sm:text-lg text-[#1D2628] leading-relaxed font-normal">
                <p>
                  Yoga is not simply about moving from one Asana to another. It is a
                  lifelong practice of understanding your body, working with your
                  breath, observing your mind and gradually developing greater awareness.
                </p>
                <p className="p-5 rounded-2xl bg-white border border-[#DFD9CC] text-[#0E2229] font-normal border-l-4 border-l-[#C89B58] shadow-xs">
                  At Yoga Regime, the focus is on understanding <strong className="font-semibold text-[#0E2229]">why and how you practise</strong> — rather than simply trying to replicate a pose.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
