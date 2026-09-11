"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import AnimatedButton from "./AnimatedButton";
import TypewriterText from "./TypewriterText";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative pt-32 sm:pt-36 lg:pt-42 pb-16 lg:pb-24 overflow-hidden">
      {/* Subtle Background Glow Elements */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 bg-gradient-to-b from-[#C89B58]/10 via-[#ECE8DF]/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center"
        >
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            {/* Slim Tag */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ECE8DF] border border-[#DFD9CC] text-[#0E2229] text-[11px] sm:text-xs font-semibold tracking-wider uppercase shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#C89B58]" />
                <span>Yoga Regime · Harpreet Kaur</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={itemVariants} className="space-y-3">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#0E2229] leading-[1.08]">
                YOGA BEYOND <br className="hidden sm:inline" />
                <TypewriterText
                  words={[
                    "THE ASANA.",
                    "THE ORDINARY.",
                    "THE PHYSICAL.",
                    "THE LIMITS.",
                  ]}
                  typingSpeed={75}
                  deletingSpeed={35}
                  pauseTime={2200}
                  className="italic font-light text-[#5C7267]"
                  cursorClassName="bg-[#5C7267]"
                />
              </h1>
              <p className="font-serif text-xl sm:text-2xl text-[#0E2229] font-normal tracking-wide italic">
                Traditional yoga practices, modern understanding, and intelligent movement.
              </p>
            </motion.div>

            {/* Supporting Text - High Readability */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[#1D2628] leading-relaxed max-w-xl font-normal"
            >
              Explore a deeper approach to Yoga through mindful movement, breath,
              Bandhas, traditional practices and greater awareness of the body and
              mind.
            </motion.p>

            {/* Actions */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 pt-2 max-w-md sm:max-w-none"
            >
              <AnimatedButton
                href="/#practice-areas"
                variant="primary"
                size="md"
                className="shadow-sm w-full sm:w-auto px-7 py-3.5 text-xs sm:text-sm font-semibold tracking-wide"
              >
                Explore Your Practice
              </AnimatedButton>
              <AnimatedButton
                href="/booking"
                variant="outline"
                size="md"
                className="w-full sm:w-auto px-7 py-3.5 text-xs sm:text-sm font-semibold tracking-wide"
              >
                Connect With Me
              </AnimatedButton>
            </motion.div>

            {/* Minimalist Wellness Mantra */}
            <motion.div
              variants={itemVariants}
              className="pt-2 flex items-center gap-3 text-xs tracking-[0.25em] text-[#5C7267] uppercase font-semibold"
            >
              <span>Mindful</span>
              <span className="text-[#C89B58]">·</span>
              <span>Aware</span>
              <span className="text-[#C89B58]">·</span>
              <span>Intelligent</span>
              <span className="text-[#C89B58]">·</span>
              <span>Grounded</span>
            </motion.div>
          </div>

          {/* Right Column: Hero Real Photography */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-6 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-lg">
              {/* Outer Frame with Exact 3:4 Portrait Framing */}
              <div className="relative rounded-3xl p-3.5 sm:p-4 bg-white border border-[#DFD9CC] shadow-xl">
                <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-2xl overflow-hidden bg-[#ECE8DF]">
                  <Image
                    src="/images/yoga_img_7.png"
                    alt="Harpreet Kaur practicing yoga with graceful balance and focus - Yoga Regime"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>

                {/* Slim Tag OUTSIDE the image frame */}
                <div className="mt-3 flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-[#DFD9CC]/60">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#ECE8DF] border border-[#DFD9CC] text-[11px] font-semibold text-[#0E2229]">
                    <Sparkles className="w-3 h-3 text-[#C89B58]" />
                    <span>Yoga Beyond the Asana</span>
                  </div>
                  <span className="text-[11px] text-[#5C7267] font-medium">
                    Harpreet Kaur · Certified Yoga Teacher
                  </span>
                </div>
              </div>

              {/* Decorative side accent */}
              <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-[#C89B58]/15 rounded-full blur-2xl -z-10 pointer-events-none" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
