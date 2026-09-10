"use client";

import Image from "next/image";
import { Award, Compass, Globe2 } from "lucide-react";
import AnimatedButton from "./AnimatedButton";
import { FadeIn, ImageReveal } from "./ScrollReveal";

export default function AboutPreview() {
  const highlights = [
    {
      icon: Award,
      title: "Certified Instructor",
      desc: "500-Hour RYT certified in Hatha, Vinyasa & Yin Yoga.",
    },
    {
      icon: Compass,
      title: "Personalized Guidance",
      desc: "Tailored adjustments adapted to your biomechanics.",
    },
    {
      icon: Globe2,
      title: "Online & In-Person Sessions",
      desc: "Flexible studio practice or live interactive streaming.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F8F7F3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait Photography */}
          <div className="lg:col-span-5">
            <ImageReveal>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-[2.5rem] overflow-hidden bg-white border border-[#EAE7E1] shadow-xl p-3 sm:p-4">
                  <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-[#EAE7E1]">
                    <Image
                      src="/images/serena_portrait.jpg"
                      alt="Serena - Certified Yoga Instructor with hands in namaste"
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover object-center transition-transform duration-700 hover:scale-105"
                    />
                  </div>

                  {/* Editorial handwritten style overlay text */}
                  <div className="absolute top-8 right-8 text-right bg-white/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/50 text-[11px] font-serif italic text-[#0B2A3A]">
                    More than Yoga, a way of life.
                  </div>
                </div>

                {/* Soft backdrop blur spot */}
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#6E7F72]/15 rounded-full blur-3xl -z-10 pointer-events-none" />
              </div>
            </ImageReveal>
          </div>

          {/* Right Column: Bio & Core Info */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <FadeIn>
              <div className="space-y-2">
                <div className="text-xs font-semibold tracking-widest uppercase text-[#6E7F72]">
                  About Me
                </div>
                <h2 className="font-serif text-4xl sm:text-5xl lg:text-5xl font-medium text-[#0B2A3A] tracking-tight">
                  Hi, I&apos;m Serena
                </h2>
                <div className="text-base sm:text-lg font-serif italic font-semibold text-[#0B2A3A] tracking-wide">
                  Yoga Instructor | Wellness Coach | Lifelong Learner
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="space-y-4 text-[#243038] text-base sm:text-lg leading-relaxed font-normal">
                <p>
                  <strong className="font-semibold text-[#0B2A3A]">Yoga transformed my life</strong> over eight years ago during a period
                  of intense burnout. What started as simple physical stretches
                  blossomed into a profound journey of healing, conscious
                  breathwork, and self-discovery.
                </p>
                <p>
                  Now, I dedicate my life to helping individuals cultivate
                  radiant physical strength, calm mental stillness, and genuine
                  emotional resilience. My classes blend classical yogic
                  philosophy with modern movement science to ensure your practice
                  is safe, empowering, and deeply restorative.
                </p>
              </div>
            </FadeIn>

            {/* Small Information Badges */}
            <FadeIn delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {highlights.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-white border border-[#EAE7E1] space-y-2 hover:border-[#D8C9B8] transition-colors"
                    >
                      <div className="w-8 h-8 rounded-full bg-[#EAE7E1]/80 text-[#0B2A3A] flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="text-xs font-semibold text-[#0B2A3A]">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-[#586771] leading-relaxed">
                        {item.desc}
                      </div>
                    </div>
                  );
                })}
              </div>
            </FadeIn>

            {/* CTA Button */}
            <FadeIn delay={0.3}>
              <div className="pt-2">
                <AnimatedButton href="/about" variant="primary" size="md">
                  My Journey
                </AnimatedButton>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
