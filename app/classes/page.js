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

const filters = ["All", "Beginner", "Intermediate", "All Levels"];

export default function ClassesPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedClass, setSelectedClass] = useState(null);

  const filteredClasses = classesData.filter((item) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "All Levels") return item.level === "All Levels";
    return item.level === activeFilter;
  });

  return (
    <div className="pt-28 sm:pt-36 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EAE7E1]/80 border border-[#D8C9B8] text-xs font-semibold uppercase tracking-widest text-[#0B2A3A]">
              <Sparkles className="w-3.5 h-3.5 text-[#6E7F72]" />
              <span>Studio & Online Offerings</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium text-[#0B2A3A] tracking-tight">
              <TypewriterText
                words={[
                  "Yoga Classes",
                  "Mindful Movement",
                  "Sacred Practices",
                  "Holistic Flows",
                ]}
                typingSpeed={75}
                deletingSpeed={35}
                pauseTime={2200}
                cursorClassName="bg-[#0B2A3A]"
              />
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-base sm:text-lg text-[#586771] font-light leading-relaxed">
              Discover practices designed for every body, every goal. Whether
              you seek deep restorative calm or dynamic cardiovascular vigor.
            </p>
          </FadeIn>

          {/* Animated Filter Pills */}
          <FadeIn delay={0.3} className="pt-4">
            <div className="inline-flex flex-wrap items-center justify-center p-1.5 bg-[#EAE7E1]/60 backdrop-blur-sm rounded-full border border-[#EAE7E1] gap-1">
              {filters.map((tab) => {
                const isCurrent = activeFilter === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveFilter(tab)}
                    className={`relative px-5 py-2 text-xs sm:text-sm font-medium rounded-full transition-colors duration-300 z-10 cursor-pointer ${
                      isCurrent
                        ? "text-white font-semibold"
                        : "text-[#243038] hover:text-[#0B2A3A]"
                    }`}
                  >
                    {isCurrent && (
                      <motion.span
                        layoutId="class-filter-pill"
                        className="absolute inset-0 bg-[#0B2A3A] rounded-full -z-10 shadow-sm"
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
                className="group flex flex-col bg-white rounded-3xl p-5 border border-[#EAE7E1] shadow-xs hover:shadow-xl hover:border-[#D8C9B8] transition-all duration-500 hover:-translate-y-1.5"
              >
                {/* Class Image */}
                <div className="relative aspect-[16/11] rounded-2xl overflow-hidden bg-[#EAE7E1] mb-5">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Badges */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase text-[#0B2A3A] border border-white/40">
                    {item.level}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-[#0B2A3A]/85 backdrop-blur-md text-white px-3 py-1 rounded-full text-[11px] font-medium flex items-center gap-1.5">
                    <Clock className="w-3 h-3" />
                    <span>{item.duration}</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#0B2A3A] group-hover:text-[#6E7F72] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#586771] leading-relaxed font-light line-clamp-3">
                      {item.shortDesc}
                    </p>
                  </div>

                  {/* Metadata Row */}
                  <div className="pt-3 border-t border-[#EAE7E1] flex items-center justify-between">
                    <span className="text-[11px] text-[#6E7F72] font-medium">
                      {item.intensity}
                    </span>
                    <button
                      onClick={() => setSelectedClass(item)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B2A3A] group-hover:text-[#6E7F72] transition-colors cursor-pointer"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Schedule & Props info banner */}
        <div className="mt-20 p-8 sm:p-10 rounded-3xl bg-[#EAE7E1]/50 border border-[#EAE7E1] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-serif text-2xl font-medium text-[#0B2A3A]">
              Need help deciding which style is best for you?
            </h3>
            <p className="text-xs sm:text-sm text-[#586771]">
              Book a complimentary 15-minute consultation with Serena to discuss
              your practice goals.
            </p>
          </div>
          <AnimatedButton href="/booking" variant="primary" size="md">
            Book Consultation
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
              className="fixed inset-0 bg-[#0B2A3A]/70 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              className="relative w-full max-w-2xl bg-[#F8F7F3] border border-[#EAE7E1] rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedClass(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-[#243038] shadow-sm transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header Image */}
              <div className="relative h-56 sm:h-64 w-full bg-[#0B2A3A] shrink-0">
                <Image
                  src={selectedClass.image}
                  alt={selectedClass.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A3A] via-[#0B2A3A]/40 to-transparent" />
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
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#6E7F72] mb-1">
                    About This Practice
                  </h4>
                  <p className="text-sm text-[#586771] leading-relaxed">
                    {selectedClass.fullDesc}
                  </p>
                </div>

                {/* Key Benefits */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#6E7F72] mb-3">
                    What You&apos;ll Experience
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedClass.benefits.map((b, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs text-[#243038]"
                      >
                        <CheckCircle className="w-4 h-4 text-[#6E7F72] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Schedule & Intensity */}
                <div className="p-4 rounded-2xl bg-white border border-[#EAE7E1] flex flex-wrap items-center justify-between gap-4 text-xs">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#6E7F72]" />
                    <div>
                      <span className="font-semibold block text-[#0B2A3A]">
                        Live Schedule
                      </span>
                      <span className="text-[#586771]">
                        {selectedClass.schedule}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#6E7F72]" />
                    <div>
                      <span className="font-semibold block text-[#0B2A3A]">
                        Duration & Intensity
                      </span>
                      <span className="text-[#586771]">
                        {selectedClass.duration} · {selectedClass.intensity}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    onClick={() => setSelectedClass(null)}
                    className="px-5 py-2.5 text-xs font-semibold text-[#586771] hover:text-[#0B2A3A] cursor-pointer"
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
                    Book This Class
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
