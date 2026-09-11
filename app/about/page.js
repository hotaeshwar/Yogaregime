import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Sparkles,
  Heart,
  Shield,
  Compass,
  Leaf,
  CheckCircle2,
} from "lucide-react";
import AnimatedButton from "@/components/AnimatedButton";
import { FadeIn, ImageReveal } from "@/components/ScrollReveal";
import TypewriterText from "@/components/TypewriterText";

export const metadata = {
  title: "About Harpreet Kaur | Certified Yoga Teacher | Yoga Regime",
  description:
    "Learn about Harpreet Kaur's 15-year journey, traditional foundations, Bandha integration, and teaching philosophy.",
};

export default function AboutPage() {
  const certifications = [
    {
      title: "Certified Yoga Teacher",
      issuer: "Traditional Teacher Training & Lineage",
      year: "Certified",
      desc: "Comprehensive training in classical Hatha alignment, Ashtanga sequencing, Bandhas, Mudras, and Pranayama.",
    },
    {
      title: "15 Years Dedicated Yoga Practice",
      issuer: "Traditional Lineage & Personal Study",
      year: "15+ Years",
      desc: "Lifelong immersion started through her mother, learning under revered traditional gurus and masters across India.",
    },
    {
      title: "Bandha & Movement Mechanics Specialist",
      issuer: "Anatomical & Biomechanical Studies",
      year: "Specialization",
      desc: "Deep focus on neuromuscular activation, Mula & Uddiyana Bandha integration, and spinal protection.",
    },
    {
      title: "Pranayama, Mudra & Shatkarma Guidance",
      issuer: "Traditional Yogic Cleansing & Breathwork",
      year: "Specialization",
      desc: "Ancient purification techniques and nervous system regulation adapted safely for modern practitioners.",
    },
  ];

  const values = [
    {
      icon: Compass,
      title: "Anatomical Alignment",
      desc: "Understanding why and how you move, honoring your individual skeletal structure and joint mechanics.",
    },
    {
      icon: Leaf,
      title: "Rooted in Tradition",
      desc: "Honoring classical yoga — Asana, Pranayama, Bandhas, Mudras, and Shatkarma — beyond mere physical fitness.",
    },
    {
      icon: Heart,
      title: "Ego-Free Practice",
      desc: "Yoga is not about chasing the most difficult pose; it is about confronting limitations and cultivating self-awareness.",
    },
    {
      icon: Shield,
      title: "Intelligent Progression",
      desc: "Safe, conscious movement mechanics that protect joints, build functional strength, and last a lifetime.",
    },
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-24">
      {/* 1. About Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 lg:mb-28">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ECE8DF]/80 border border-[#DFD9CC] text-xs font-semibold uppercase tracking-widest text-[#0E2229]">
              <Sparkles className="w-3.5 h-3.5 text-[#C89B58]" />
              <span>Meet Harpreet</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium text-[#0E2229] tracking-tight">
              Yoga Beyond <br />
              <TypewriterText
                words={[
                  "The Asana.",
                  "The Ordinary.",
                  "The Physical.",
                  "The Limits.",
                ]}
                typingSpeed={75}
                deletingSpeed={35}
                pauseTime={2200}
                className="italic font-light text-[#5C7267]"
                cursorClassName="bg-[#5C7267]"
              />
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-base sm:text-lg text-[#526063] font-light leading-relaxed">
              Traditional yoga practices, modern understanding, and intelligent movement.
            </p>
          </FadeIn>
        </div>

        {/* Large Editorial Portrait & Bio Grid with IMG_0222.png */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <ImageReveal>
              <div className="relative rounded-3xl p-3.5 sm:p-4 bg-white border border-[#DFD9CC] shadow-xl">
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
                <div className="mt-3 pt-2.5 border-t border-[#DFD9CC]/60 flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#ECE8DF] border border-[#DFD9CC] text-[11px] font-semibold text-[#0E2229]">
                    <Sparkles className="w-3 h-3 text-[#C89B58]" />
                    <span>Harpreet Kaur</span>
                  </span>
                  <span className="text-[11px] text-[#5C7267] font-medium">
                    Certified Yoga Teacher · 15 Yrs Practice
                  </span>
                </div>
              </div>
            </ImageReveal>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <FadeIn>
              <div className="space-y-3">
                <div className="text-xs font-semibold tracking-widest uppercase text-[#5C7267]">
                  My Journey
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#0E2229] font-medium">
                  A 15-Year Journey of Body, Breath & Self-Discovery
                </h2>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="space-y-4 text-base sm:text-lg text-[#1D2628] leading-relaxed font-light">
                <p>
                  Yoga has been a part of my life for the past 15 years. My journey began through my mother, a dedicated yoga practitioner, who first introduced me to the practice.
                </p>
                <p>
                  What began as an introduction gradually became a deeply personal journey that continues to shape the way I understand my body, mind and myself.
                </p>
                <p>
                  I am a registered teacher with Yoga Alliance USA, and my journey continues to evolve through learning from different teachers and gurus, practising and sharing what I learn.
                </p>
                <p>
                  At <strong className="font-semibold text-[#0E2229]">Yoga Regime</strong>, the focus is on understanding why and how you practise — rather than simply trying to replicate a pose.
                </p>
              </div>
            </FadeIn>

            {/* Quick Stats Badges */}
            <FadeIn delay={0.2}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 bg-white rounded-2xl border border-[#DFD9CC] text-center shadow-xs">
                  <div className="font-serif text-3xl font-medium text-[#0E2229]">
                    15+
                  </div>
                  <div className="text-xs text-[#5C7267] mt-0.5">
                    Years of Practice
                  </div>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-[#DFD9CC] text-center shadow-xs">
                  <div className="font-serif text-3xl font-medium text-[#0E2229]">
                    100%
                  </div>
                  <div className="text-xs text-[#5C7267] mt-0.5">
                    Certified Guidance
                  </div>
                </div>
                <div className="col-span-2 sm:col-span-1 p-4 bg-white rounded-2xl border border-[#DFD9CC] text-center shadow-xs">
                  <div className="font-serif text-3xl font-medium text-[#0E2229]">
                    10+
                  </div>
                  <div className="text-xs text-[#5C7267] mt-0.5">
                    Practice Disciplines
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. Teaching Philosophy & Mission Statement */}
      <section className="py-20 bg-white border-y border-[#DFD9CC] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <FadeIn>
                <div className="text-xs font-semibold tracking-widest uppercase text-[#5C7267]">
                  Philosophy & Perspective
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0E2229] font-medium leading-tight">
                  &ldquo;Yoga Is a Way of Life. The journey never really ends.&rdquo;
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-sm sm:text-base text-[#526063] leading-relaxed font-light">
                  For me, Yoga is not about achieving the most difficult pose. It is about developing a deeper understanding of yourself through practice — confronting your limitations and ego, learning to work with your mind, and continuing to grow.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="p-6 rounded-3xl bg-[#FAF8F5] border border-[#DFD9CC] space-y-3">
                  <div className="font-serif text-lg text-[#0E2229] font-medium">
                    The Yoga Regime Mission
                  </div>
                  <p className="text-xs text-[#526063] leading-relaxed">
                    To cultivate intelligent movement, deep breath awareness, and experiential mastery of Bandhas and traditional yogic practices for lasting physical and mental clarity.
                  </p>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-6">
              <ImageReveal>
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-[#DFD9CC] shadow-lg">
                  <Image
                    src="/images/IMG_0299-Recovered.png"
                    alt="Harpreet Kaur in grounded posture"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </ImageReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <FadeIn>
            <div className="text-xs font-semibold tracking-widest uppercase text-[#5C7267]">
              Guiding Principles
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#0E2229] font-medium tracking-tight">
              Core Teaching Principles
            </h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item, idx) => {
            const Icon = item.icon;
            return (
              <FadeIn
                key={idx}
                delay={0.1 * idx}
                className="p-6 rounded-3xl bg-white border border-[#DFD9CC] shadow-xs hover:border-[#C89B58] transition-colors space-y-3"
              >
                <div className="w-10 h-10 rounded-2xl bg-[#ECE8DF]/80 text-[#0E2229] flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#5C7267]" />
                </div>
                <h3 className="font-serif text-xl font-medium text-[#0E2229]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#526063] leading-relaxed font-light">
                  {item.desc}
                </p>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* 4. Credentials & Accreditations */}
      <section className="py-20 bg-[#FAF8F5] border-t border-[#DFD9CC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 space-y-3">
            <FadeIn>
              <div className="text-xs font-semibold tracking-widest uppercase text-[#5C7267]">
                Accreditations & Lineage
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-serif text-4xl sm:text-5xl text-[#0E2229] font-medium tracking-tight">
                Credentials & Experience
              </h2>
            </FadeIn>
          </div>

          <div className="space-y-4">
            {certifications.map((cert, idx) => (
              <FadeIn
                key={idx}
                delay={0.08 * idx}
                className="p-6 rounded-3xl bg-white border border-[#DFD9CC] flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:shadow-sm transition-shadow"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#C89B58]" />
                    <h3 className="font-serif text-xl font-medium text-[#0E2229]">
                      {cert.title}
                    </h3>
                  </div>
                  <div className="text-xs text-[#5C7267] font-medium">
                    {cert.issuer}
                  </div>
                  <p className="text-xs text-[#526063] leading-relaxed pt-1 font-light">
                    {cert.desc}
                  </p>
                </div>
                <div className="px-3.5 py-1.5 rounded-full bg-[#ECE8DF] text-[#0E2229] text-xs font-semibold self-start sm:self-center shrink-0">
                  {cert.year}
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4} className="mt-14 text-center">
            <AnimatedButton href="/booking" variant="primary" size="lg">
              Connect With Harpreet
            </AnimatedButton>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

