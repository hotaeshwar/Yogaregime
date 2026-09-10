"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { classesData } from "@/data/classes";
import { FadeIn, StaggerContainer, StaggerItem } from "./ScrollReveal";
import TypewriterText from "./TypewriterText";

export default function PracticeCards() {
  // 4 Featured practices
  const practices = classesData.filter((c) => c.featured);

  return (
    <section className="py-20 lg:py-28 bg-[#F8F7F3] border-t border-[#EAE7E1] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <FadeIn>
            <div className="text-xs font-semibold tracking-widest uppercase text-[#6E7F72]">
              Find Your Practice
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-serif text-4xl sm:text-5xl font-medium text-[#0B2A3A] tracking-tight">
              <TypewriterText
                words={[
                  "Explore Different Styles",
                  "Find Your Daily Flow",
                  "Strengthen Mind & Body",
                  "Cultivate Inner Stillness",
                ]}
                typingSpeed={70}
                deletingSpeed={35}
                pauseTime={2200}
                cursorClassName="bg-[#0B2A3A]"
              />
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-sm sm:text-base text-[#586771] font-light">
              Explore different styles and choose what feels right for your body
              and state of mind.
            </p>
          </FadeIn>
        </div>

        {/* 4 Cards Grid with subtle hover animations */}
        <StaggerContainer
          staggerDelay={0.12}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6"
        >
          {practices.map((item) => (
            <StaggerItem key={item.id}>
              <Link
                href={`/classes#${item.slug}`}
                className="group relative flex flex-col h-full bg-white rounded-3xl p-4 border border-[#EAE7E1] shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl hover:border-[#D8C9B8]"
              >
                {/* Image Container with Zoom Effect */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#EAE7E1] mb-5">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle level pill */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase text-[#0B2A3A] border border-white/40">
                    {item.level}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl font-medium text-[#0B2A3A] group-hover:text-[#6E7F72] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#586771] leading-relaxed line-clamp-3 font-light">
                      {item.shortDesc}
                    </p>
                  </div>

                  {/* Learn More link with moving arrow */}
                  <div className="pt-2 border-t border-[#EAE7E1]/60 flex items-center justify-between text-xs font-semibold text-[#0B2A3A] group-hover:text-[#6E7F72] transition-colors">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* View All Link */}
        <FadeIn delay={0.4} className="text-center mt-12">
          <Link
            href="/classes"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B2A3A] hover:text-[#6E7F72] transition-colors border-b border-[#0B2A3A] pb-0.5 hover:border-[#6E7F72]"
          >
            <span>View All Class Formats & Schedules</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
