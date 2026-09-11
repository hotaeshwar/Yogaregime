"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { classesData } from "@/data/classes";
import { FadeIn, StaggerContainer, StaggerItem } from "./ScrollReveal";
import DisciplineModal from "./DisciplineModal";
import TypewriterText from "./TypewriterText";

export default function PracticeCards() {
  const practices = classesData;
  const [selectedPractice, setSelectedPractice] = useState(null);

  return (
    <section id="practice-areas" className="py-20 lg:py-28 bg-[#FAF8F5] border-t border-[#DFD9CC]/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ECE8DF]/80 border border-[#DFD9CC] text-xs font-semibold tracking-widest uppercase text-[#5C7267]">
              <Sparkles className="w-3.5 h-3.5 text-[#C89B58]" />
              <span>Practice Disciplines</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#0E2229] tracking-tight">
              <TypewriterText
                words={[
                  "Explore Your Practice",
                  "Classical Hatha & Ashtanga",
                  "Pranayama & Bandhas",
                  "Somatic Alignment",
                ]}
                typingSpeed={70}
                deletingSpeed={35}
                pauseTime={2200}
                cursorClassName="bg-[#0E2229]"
              />
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-sm sm:text-base text-[#1D2628] font-normal leading-relaxed">
              Rooted in traditional wisdom and guided by intelligent movement mechanics.
            </p>
          </FadeIn>
        </div>

        {/* 10 Cards Grid */}
        <StaggerContainer
          staggerDelay={0.08}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {practices.map((item) => (
            <StaggerItem key={item.id}>
              <button
                type="button"
                onClick={() => setSelectedPractice(item)}
                className="group w-full text-left relative flex flex-col h-full bg-white rounded-3xl p-4 sm:p-5 border border-[#DFD9CC] shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-[#C89B58] cursor-pointer"
              >
                {/* Image Container - Exact 3:4 Portrait Aspect */}
                <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-2xl overflow-hidden bg-[#ECE8DF] mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center"
                  />
                </div>

                {/* Content - High Contrast and Clear Readability */}
                <div className="flex-1 flex flex-col justify-between space-y-3 pt-1">
                  <div className="space-y-1.5">
                    <h3 className="font-serif text-xl font-medium text-[#0E2229] group-hover:text-[#A97A37] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#1D2628] leading-relaxed line-clamp-3 font-normal">
                      {item.shortDesc}
                    </p>
                  </div>

                  {/* Learn More link */}
                  <div className="pt-3 border-t border-[#DFD9CC]/60 flex items-center justify-between text-xs font-semibold text-[#0E2229] group-hover:text-[#A97A37] transition-colors">
                    <span>Explore Discipline</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1 text-[#C89B58]" />
                  </div>
                </div>
              </button>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Interactive Portfolio Detail Modal */}
      <DisciplineModal
        item={selectedPractice}
        isOpen={Boolean(selectedPractice)}
        onClose={() => setSelectedPractice(null)}
      />
    </section>
  );
}
