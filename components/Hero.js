"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Users, Award, Star, ShieldCheck } from "lucide-react";
import AnimatedButton from "./AnimatedButton";
import AnimatedCounter from "./AnimatedCounter";
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

  const stats = [
    {
      icon: Award,
      target: 8,
      decimals: 0,
      suffix: "+",
      label: "Years of Experience",
    },
    {
      icon: Users,
      target: 500,
      decimals: 0,
      suffix: "+",
      label: "Happy Students",
    },
    {
      icon: Star,
      target: 4.9,
      decimals: 1,
      suffix: "/5",
      label: "Average Rating",
    },
    {
      icon: ShieldCheck,
      target: 100,
      decimals: 0,
      suffix: "%",
      label: "Personalized Approach",
    },
  ];

  const typewriterPhrases = [
    "A Happier Tomorrow",
    "A Calmer Mind",
    "A Stronger Body",
    "A Mindful Life",
    "A Peaceful Heart",
  ];

  return (
    <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 overflow-hidden">
      {/* Subtle Background Glow Elements */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 bg-gradient-to-b from-[#EAE7E1]/40 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            {/* Pill Label */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EAE7E1]/70 border border-[#D8C9B8]/80 text-[#0B2A3A] text-xs font-semibold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#6E7F72]" />
                <span>Serena Yoga · Mindful Living</span>
              </div>
            </motion.div>

            {/* Main Headline with Typewriter Effect on Line 2 (No Layout Shift) */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#0B2A3A] leading-[1.08]">
                <span>A Healthier You</span>
                <br />
                {/* Min-height container prevents any layout shift during typing and backspacing */}
                <span className="block min-h-[1.15em]">
                  <TypewriterText
                    words={typewriterPhrases}
                    typingSpeed={80}
                    deletingSpeed={45}
                    pauseTime={2200}
                    className="italic font-light text-[#6E7F72]"
                    cursorClassName="bg-[#6E7F72]"
                  />
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[#586771] leading-relaxed max-w-lg font-light"
            >
              Yoga for a stronger body, a calmer mind and a more mindful life.
              Step onto your mat with personalized guidance crafted for your
              unique journey.
            </motion.p>

            {/* Actions: Sleek and Responsive for Mobile, Tablet, and Desktop */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 pt-2 max-w-md sm:max-w-none"
            >
              <AnimatedButton
                href="/booking"
                variant="primary"
                size="md"
                className="shadow-sm w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold tracking-wide"
              >
                Book a Session
              </AnimatedButton>
              <AnimatedButton
                href="/programs"
                variant="outline"
                size="md"
                className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold tracking-wide"
              >
                Explore Programs
              </AnimatedButton>
            </motion.div>

            {/* Minimalist Wellness Mantra */}
            <motion.div
              variants={itemVariants}
              className="pt-4 flex items-center gap-3 text-xs tracking-[0.25em] text-[#6E7F72] uppercase font-semibold"
            >
              <span>Stronger</span>
              <span className="text-[#D8C9B8]">·</span>
              <span>Calmer</span>
              <span className="text-[#D8C9B8]">·</span>
              <span>Kinder</span>
              <span className="text-[#D8C9B8]">·</span>
              <span>You</span>
            </motion.div>
          </div>

          {/* Right Column: Editorial Hero Photography */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-6 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Decorative Frame */}
              <div className="relative rounded-[2.5rem] p-3 sm:p-4 bg-white/70 border border-[#EAE7E1] shadow-2xl backdrop-blur-sm">
                <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-[2rem] overflow-hidden bg-[#EAE7E1]">
                  <Image
                    src="/images/hero_yoga.jpg"
                    alt="Yoga instructor meditating peacefully overlooking scenic mountains at sunrise"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center transform transition-transform duration-700 hover:scale-105"
                  />
                  {/* Subtle Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A3A]/40 via-transparent to-transparent pointer-events-none" />

                  {/* Floating badge inside image */}
                  <div className="absolute bottom-5 left-5 right-5 sm:right-auto bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/40 shadow-lg flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#0B2A3A] text-white flex items-center justify-center shrink-0">
                      <Sparkles className="w-4 h-4 text-[#D8C9B8]" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#0B2A3A]">
                        Daily Mindful Practice
                      </div>
                      <div className="text-[10px] text-[#6E7F72]">
                        Online & In-Studio Sessions
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative side accent */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#D8C9B8]/40 rounded-full blur-2xl -z-10 pointer-events-none" />
            </div>
          </motion.div>
        </motion.div>

        {/* Trust Statistics with Smooth Count-Up Animation (0 to Target on refresh & scroll) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-16 sm:mt-20 pt-10 border-t border-[#EAE7E1]"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3.5 group p-3 rounded-2xl hover:bg-white/60 transition-colors"
                >
                  <div className="w-11 h-11 rounded-2xl bg-[#EAE7E1]/80 text-[#0B2A3A] group-hover:bg-[#0B2A3A] group-hover:text-white transition-colors duration-300 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <div>
                    <div className="font-serif text-2xl sm:text-3xl font-medium text-[#0B2A3A] tracking-tight">
                      <AnimatedCounter
                        target={stat.target}
                        decimals={stat.decimals}
                        suffix={stat.suffix}
                        duration={1800}
                      />
                    </div>
                    <div className="text-xs sm:text-sm text-[#586771] font-light">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
