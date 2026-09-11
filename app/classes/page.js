"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock,
  Sparkles,
  ArrowRight,
  CheckCircle,
  X,
  Calendar,
  Layers,
} from "lucide-react";
import { classesData } from "@/data/classes";
import AnimatedButton from "@/components/AnimatedButton";
import { FadeIn } from "@/components/ScrollReveal";
import TypewriterText from "@/components/TypewriterText";

const filters = ["All", "All Levels", "Intermediate / Advanced", "Specialized"];

export default function ClassesPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedClass, setSelectedClass] = useState(null);

  const filteredClasses = classesData.filter((item) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "All Levels") return item.level.includes("All Levels");
    if (activeFilter === "Intermediate / Advanced") return item.level.includes("Advanced") || item.level.includes("Intermediate");
    if (activeFilter === "Specialized") return item.level.includes("Specialized") || item.level.includes("Trimesters") || item.level.includes("Guided");
    return true;
  });

  return (
    <div className="pt-28 sm:pt-36 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ECE8DF]/80 border border-[#DFD9CC] text-xs font-semibold uppercase tracking-widest text-[#0E2229]">
              <Sparkles className="w-3.5 h-3.5 text-[#C89B58]" />
              <span>Authentic Practice Disciplines</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium text-[#0E2229] tracking-tight">
              <TypewriterText
                words={[
                  "Practice Disciplines",
                  "Intelligent Movement",
                  "Bandhas & Alignment",
                  "Traditional Yoga",
                ]}
                typingSpeed={75}
                deletingSpeed={35}
                pauseTime={2200}
                cursorClassName="bg-[#0E2229]"
              />
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-base sm:text-lg text-[#526063] font-light leading-relaxed">
              Explore practices taught with anatomical awareness and traditional depth by Harpreet Kaur.
            </p>
          </FadeIn>

          {/* Animated Filter Pills */}
          <FadeIn delay={0.3} className="pt-4">
            <div className="inline-flex flex-wrap items-center justify-center p-1.5 bg-[#ECE8DF]/60 backdrop-blur-sm rounded-full border border-[#DFD9CC] gap-1">
              {filters.map((tab) => {
                const isCurrent = activeFilter === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveFilter(tab)}
                    className={`relative px-5 py-2 text-xs sm:text-sm font-medium rounded-full transition-colors duration-300 z-10 cursor-pointer ${
                      isCurrent
                        ? "text-white font-semibold"
                        : "text-[#1D2628] hover:text-[#0E2229]"
                    }`}
                  >
                    {isCurrent && (
                      <motion.span
                        layoutId="class-filter-pill"
                        className="absolute inset-0 bg-[#0E2229] rounded-full -z-10 shadow-sm"
                        transition={{
                          type: "spring",
                          stiffness: 420,
                          damping: 32,
                        }}
                      />
                    )}
                    <span>{tab}</span>
                  </button>
                );
              })}
            </div>
          </FadeIn>
        </div>

        {/* Classes Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredClasses.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.4 }}
                className="group flex flex-col bg-white rounded-3xl p-5 border border-[#DFD9CC] shadow-xs hover:shadow-lg hover:border-[#C89B58] transition-all duration-300 hover:-translate-y-1"
              >
                {/* Class Image - Exact 3:4 Portrait Aspect */}
                <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-2xl overflow-hidden bg-[#ECE8DF] mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center"
                  />
                </div>

                {/* Body Content - High Contrast */}
                <div className="flex-1 flex flex-col justify-between space-y-4 pt-1">
                  <div className="space-y-1.5">
                    <h3 className="font-serif text-2xl font-medium text-[#0E2229] group-hover:text-[#A97A37] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#1D2628] leading-relaxed font-normal line-clamp-3">
                      {item.shortDesc}
                    </p>
                  </div>

                  {/* Metadata Row */}
                  <div className="pt-3 border-t border-[#DFD9CC] flex items-center justify-between">
                    <span className="text-[11px] text-[#5C7267] font-medium">
                      {item.intensity}
                    </span>
                    <button
                      onClick={() => setSelectedClass(item)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0E2229] group-hover:text-[#A97A37] transition-colors cursor-pointer"
                    >
                      <span>Explore Detail</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1 text-[#C89B58]" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Schedule & Consultation banner */}
        <div className="mt-20 p-8 sm:p-10 rounded-3xl bg-[#ECE8DF]/60 border border-[#DFD9CC] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-serif text-2xl font-medium text-[#0E2229]">
              Need personalized guidance on where to begin?
            </h3>
            <p className="text-xs sm:text-sm text-[#526063] font-light">
              Connect directly with Harpreet Kaur to discuss your practice goals, alignment, or Bandha integration.
            </p>
          </div>
          <AnimatedButton href="/booking" variant="primary" size="md">
            Connect With Harpreet
          </AnimatedButton>
        </div>
      </div>

      {/* Class Detail Modal */}
      <AnimatePresence>
        {selectedClass && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedClass(null)}
              className="fixed inset-0 bg-[#0E2229]/70 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              className="relative w-full max-w-2xl bg-[#FAF8F5] border border-[#DFD9CC] rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedClass(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-[#1D2628] shadow-sm transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header Image */}
              <div className="relative h-56 sm:h-64 w-full bg-[#0E2229] shrink-0">
                <Image
                  src={selectedClass.image}
                  alt={selectedClass.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E2229] via-[#0E2229]/40 to-transparent" />
                <div className="absolute bottom-5 left-6 right-6 text-white">
                  <span className="text-[10px] tracking-widest uppercase bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
                    {selectedClass.level}
                  </span>
                  <h3 className="font-serif text-3xl font-medium mt-2">
                    {selectedClass.title}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#5C7267] mb-1">
                    About This Discipline
                  </h4>
                  <p className="text-sm text-[#526063] leading-relaxed font-light">
                    {selectedClass.fullDesc}
                  </p>
                </div>

                {/* Key Benefits */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#5C7267] mb-3">
                    What You&apos;ll Experience
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedClass.benefits.map((b, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs text-[#1D2628]"
                      >
                        <CheckCircle className="w-4 h-4 text-[#5C7267] shrink-0 mt-0.5" />
                        <span className="font-light">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Schedule & Intensity */}
                <div className="p-4 rounded-2xl bg-white border border-[#DFD9CC] flex flex-wrap items-center justify-between gap-4 text-xs">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#5C7267]" />
                    <div>
                      <span className="font-semibold block text-[#0E2229]">
                        Session Format
                      </span>
                      <span className="text-[#526063]">
                        {selectedClass.schedule}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#5C7267]" />
                    <div>
                      <span className="font-semibold block text-[#0E2229]">
                        Duration & Intensity
                      </span>
                      <span className="text-[#526063]">
                        {selectedClass.duration} · {selectedClass.intensity}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    onClick={() => setSelectedClass(null)}
                    className="px-5 py-2.5 text-xs font-semibold text-[#526063] hover:text-[#0E2229] cursor-pointer"
                  >
                    Close
                  </button>
                  <AnimatedButton
                    href={`/booking?service=${encodeURIComponent(
                      selectedClass.title
                    )}`}
                    variant="primary"
                    size="md"
                  >
                    Inquire About This Practice
                  </AnimatedButton>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
