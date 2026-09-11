"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./ScrollReveal";
import DisciplineModal from "./DisciplineModal";
import TypewriterText from "./TypewriterText";

export default function CoreApproach() {
  const [selectedItem, setSelectedItem] = useState(null);

  const cards = [
    {
      id: "asana",
      title: "Asana",
      subtitle: "Intelligent Physical Practice",
      desc: "Understand alignment, movement mechanics and intelligent physical practice.",
      fullDesc: "Asana at Yoga Regime is an exploration of intelligent physical alignment, conscious joint stability, and foundational biomechanics. Rather than blindly chasing extreme poses, you learn to honor your unique anatomical structure with precision and self-awareness.",
      benefits: [
        "Master biomechanical alignment and joint protection",
        "Develop functional strength, mobility, and balance",
        "Cultivate somatic connection with every movement",
        "Transform physical practice into moving meditation"
      ],
      image: "/images/yoga_img_4.png",
      number: "01",
    },
    {
      id: "pranayama",
      title: "Pranayama",
      subtitle: "Breath & Vital Energy",
      desc: "Develop awareness of the relationship between breath, movement and mind.",
      fullDesc: "Pranayama is the deliberate observation and regulation of vital life force (Prana). Through conscious breathing techniques, learn how breath directly governs the nervous system, quietens the active mind, and revitalizes energetic flow.",
      benefits: [
        "Calm the autonomic nervous system and soothe stress",
        "Deepen lung capacity and oxygen utilization",
        "Harmonize left and right brain hemispheres (Nadi Shodhana)",
        "Prepares the mind effortlessly for meditative stillness"
      ],
      image: "/images/yoga_img_1.png",
      number: "02",
    },
    {
      id: "bandhas",
      title: "Bandhas",
      subtitle: "Internal Energy Locks",
      desc: "Experience Bandhas through appropriate preparation, technique and integration.",
      fullDesc: "Bandhas are vital neuromuscular locks (Mula, Uddiyana, Jalandhara, and Maha Bandha) that stabilize the core, protect the spine, and channel internal prana upward. Learn them experientially rather than as mere abstract theory.",
      benefits: [
        "Protect the lower back and pelvic floor during deep postures",
        "Create sensation of internal lightness and buoyancy",
        "Direct subtle energy currents along the central axis",
        "Unlock seamless transitions and grounded equilibrium"
      ],
      image: "/images/yoga_img_5.png",
      number: "03",
    },
    {
      id: "mudra",
      title: "Mudra",
      subtitle: "Traditional Gestures",
      desc: "Explore traditional practices with awareness and appropriate guidance.",
      fullDesc: "Mudras are subtle energetic seals and gestures that balance the five elemental principles within the body. When practiced with mindful awareness, they deepen focus during breathwork and meditation.",
      benefits: [
        "Harmonize the five vital elements (Pancha Tattvas)",
        "Refine concentration and subtle perception",
        "Anchor the mind into tranquil contemplation",
        "Enhance the energetic efficacy of Pranayama"
      ],
      image: "/images/yoga_img_2.png",
      number: "04",
    },
    {
      id: "meditation",
      title: "Meditation",
      subtitle: "Inner Stillness & Mind",
      desc: "Develop greater awareness and connection with the mind.",
      fullDesc: "Meditation at Yoga Regime is an observational practice of witnessing thoughts without attachment or judgment. Learn how grounded stillness cultivates emotional clarity, self-compassion, and deep mental silence.",
      benefits: [
        "Quiet cognitive restlessness and continuous thought loops",
        "Cultivate emotional equanimity and witnessing presence",
        "Enhance mental clarity, intuition, and peace",
        "Sustain a lifelong daily practice of inner awareness"
      ],
      image: "/images/yoga_img_8.png",
      number: "05",
    },
    {
      id: "shatkarma",
      title: "Shatkarma",
      subtitle: "Yogic Cleansing",
      desc: "Learn about traditional yogic cleansing practices according to individual preparation and suitability.",
      fullDesc: "Traditional yogic purification practices designed to balance internal doshas, clear the respiratory and digestive channels, and prepare the physical vessel safely for deeper practices.",
      benefits: [
        "Purify respiratory passages and enhance natural breath capacity",
        "Support internal metabolic balance and vitality",
        "Sharpen sensory acuity and mental alertness",
        "Follow safe, personalized traditional guidance"
      ],
      image: "/images/yoga_img_9.png",
      number: "06",
    },
  ];

  return (
    <section id="core-approach" className="py-20 lg:py-28 bg-[#FAF8F5] relative border-t border-[#DFD9CC]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ECE8DF]/80 border border-[#DFD9CC] text-xs font-semibold tracking-widest uppercase text-[#5C7267]">
              <Sparkles className="w-3.5 h-3.5 text-[#C89B58]" />
              <span>The 6 Core Pillars</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#0E2229] tracking-tight">
              <span>Go Beyond </span>
              <TypewriterText
                words={[
                  "Asanas & Pranayama",
                  "The Surface Practice",
                  "Physical Postures",
                  "Mechanical Movement",
                ]}
                typingSpeed={70}
                deletingSpeed={35}
                pauseTime={2200}
                className="italic text-[#5C7267]"
                cursorClassName="bg-[#5C7267]"
              />
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-sm sm:text-base text-[#1D2628] font-normal leading-relaxed">
              A holistic, integrated path bridging classical yogic depth with conscious anatomical alignment.
            </p>
          </FadeIn>
        </div>

        {/* 6 Cards Grid */}
        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
        >
          {cards.map((item) => (
            <StaggerItem key={item.id}>
              <button
                type="button"
                onClick={() => setSelectedItem(item)}
                className="group w-full text-left relative flex flex-col h-full bg-white rounded-3xl p-4 sm:p-5 border border-[#DFD9CC] shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-[#C89B58] cursor-pointer"
              >
                {/* Slim Tag Row OUTSIDE of Image (Header of Card) */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10.5px] font-semibold tracking-wider uppercase bg-[#ECE8DF] text-[#0E2229] border border-[#DFD9CC]">
                    {item.number}
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10.5px] font-medium text-[#5C7267] bg-[#FAF8F5] border border-[#DFD9CC]">
                    {item.subtitle}
                  </span>
                </div>

                {/* Image Container - Exact 3:4 Portrait Aspect */}
                <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-2xl overflow-hidden bg-[#ECE8DF] mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center"
                  />
                </div>

                {/* Content - High Readability */}
                <div className="flex-1 flex flex-col justify-between space-y-4 pt-1">
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl font-medium text-[#0E2229] group-hover:text-[#A97A37] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#1D2628] leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  {/* Link indicator */}
                  <div className="pt-3 border-t border-[#DFD9CC]/60 flex items-center justify-between text-xs font-semibold text-[#0E2229] group-hover:text-[#A97A37] transition-colors">
                    <span>Explore Pillar</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1.5 text-[#C89B58]" />
                  </div>
                </div>
              </button>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Detail Modal */}
      <DisciplineModal
        item={selectedItem}
        isOpen={Boolean(selectedItem)}
        onClose={() => setSelectedItem(null)}
      />
    </section>
  );
}
