"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Play,
  Sparkles,
  HeartPulse,
  Activity,
  Moon,
  Zap,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "./ScrollReveal";
import TypewriterText from "./TypewriterText";

export default function BenefitsSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const benefits = [
    {
      icon: HeartPulse,
      title: "Reduce Stress",
      desc: "Down-regulate the nervous system and clear mental noise.",
    },
    {
      icon: Activity,
      title: "Improve Flexibility",
      desc: "Safely unlock tight hips, shoulders, and release spinal tension.",
    },
    {
      icon: Moon,
      title: "Better Sleep",
      desc: "Restore circadian balance with evening restorative routines.",
    },
    {
      icon: Zap,
      title: "Increased Energy",
      desc: "Boost mitochondrial vitality and day-long sustainable stamina.",
    },
  ];

  return (
    <>
      <section className="relative py-24 sm:py-32 bg-[#0B2A3A] text-white overflow-hidden">
        {/* Full-width Photography Background with Opacity and Gradient */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/yoga_img_10.png"
            alt="Harpreet Kaur practicing yoga in nature"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-25 mix-blend-luminosity scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2A3A] via-[#0B2A3A]/85 to-[#0B2A3A]/60" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-8">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs uppercase tracking-widest text-[#D8C9B8] font-semibold">
                  <Sparkles className="w-3 h-3" />
                  <span>Holistic Well-being</span>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-tight">
                  <span>Small Steps.</span>
                  <br />
                  <TypewriterText
                    words={[
                      "Big Changes.",
                      "Lasting Calm.",
                      "True Vitality.",
                      "Daily Renewal.",
                    ]}
                    typingSpeed={80}
                    deletingSpeed={40}
                    pauseTime={2200}
                    className="italic text-[#D8C9B8]"
                    cursorClassName="bg-[#D8C9B8]"
                  />
                </h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-[#EAE7E1]/80 text-base sm:text-lg max-w-lg font-light leading-relaxed">
                  Yoga is not about perfection, it&apos;s about progress. Every
                  conscious breath and mindful stretch gradually reshapes the way
                  you experience daily life.
                </p>
              </FadeIn>

              {/* Watch My Story Interactive Play Button */}
              <FadeIn delay={0.3}>
                <div className="pt-2">
                  <button
                    onClick={() => setIsVideoModalOpen(true)}
                    className="group inline-flex items-center gap-4 text-white hover:text-[#D8C9B8] transition-colors focus:outline-none cursor-pointer"
                  >
                    <div className="relative w-14 h-14 rounded-full bg-[#D8C9B8] text-[#0B2A3A] flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg group-hover:bg-white">
                      <Play className="w-5 h-5 fill-current translate-x-0.5" />
                      {/* Pulse rings */}
                      <span className="absolute inset-0 rounded-full border border-[#D8C9B8]/60 animate-ping pointer-events-none opacity-40" />
                    </div>
                    <div className="text-left">
                      <div className="font-serif text-lg font-medium tracking-wide">
                        Watch My Story
                      </div>
                      <div className="text-xs text-[#EAE7E1]/60">
                        2 min reflection · Harpreet&apos;s journey
                      </div>
                    </div>
                  </button>
                </div>
              </FadeIn>
            </div>

            {/* Right Benefits Grid */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {benefits.map((benefit, idx) => {
                  const Icon = benefit.icon;
                  return (
                    <FadeIn
                      key={idx}
                      delay={0.15 + idx * 0.1}
                      className="p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/15 transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 rounded-2xl bg-white/10 text-[#D8C9B8] group-hover:bg-[#D8C9B8] group-hover:text-[#0B2A3A] transition-colors flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-serif text-xl font-medium text-white mb-1.5">
                        {benefit.title}
                      </h3>
                      <p className="text-xs text-[#EAE7E1]/70 leading-relaxed font-light">
                        {benefit.desc}
                      </p>
                    </FadeIn>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Video / Story Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsVideoModalOpen(false)}
              className="fixed inset-0 bg-[#0B2A3A]/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-3xl bg-[#0B2A3A] border border-white/20 rounded-3xl overflow-hidden shadow-2xl z-10"
            >
              <div className="p-4 sm:p-6 flex items-center justify-between border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#D8C9B8] text-[#0B2A3A] flex items-center justify-center">
                    <Play className="w-4 h-4 fill-current translate-x-0.5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-white font-medium">
                      Harpreet&apos;s Story · Living the Practice
                    </h4>
                    <p className="text-xs text-[#D8C9B8]">
                      A short meditation on living mindfully
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsVideoModalOpen(false)}
                  className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Video Player Preview Area */}
              <div className="relative aspect-video bg-black/80 flex flex-col items-center justify-center p-8 text-center">
                <Image
                  src="/images/yoga_img_7.png"
                  alt="Harpreet in mindful flow"
                  fill
                  className="object-cover opacity-40"
                />
                <div className="relative z-10 space-y-4 max-w-lg">
                  <div className="w-16 h-16 mx-auto rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white">
                    <Play className="w-7 h-7 fill-white translate-x-0.5" />
                  </div>
                  <blockquote className="font-serif text-xl sm:text-2xl text-white italic">
                    &ldquo;When you connect your breath with mindful presence,
                    you unlock a peace that no external chaos can
                    disturb.&rdquo;
                  </blockquote>
                  <p className="text-xs text-[#D8C9B8] uppercase tracking-widest font-semibold">
                    Harpreet Kaur · Certified Yoga Teacher
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
