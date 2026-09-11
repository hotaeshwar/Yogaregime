"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Sparkles } from "lucide-react";
import AnimatedButton from "./AnimatedButton";

export default function DisciplineModal({ item, isOpen, onClose }) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0E2229]/80 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", stiffness: 350, damping: 30 }}
          className="relative w-full max-w-2xl bg-[#FAF8F5] border border-[#DFD9CC] rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col my-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-white/90 hover:bg-white text-[#0E2229] shadow-md border border-[#DFD9CC] transition-all hover:scale-105 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Content Scrollable Area */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
            {/* Header with Image and Title */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              <div className="sm:col-span-5">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#ECE8DF] border border-[#DFD9CC] shadow-md">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    priority
                    sizes="(max-width: 640px) 100vw, 300px"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              <div className="sm:col-span-7 space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ECE8DF] border border-[#DFD9CC] text-[11px] font-semibold text-[#0E2229] uppercase tracking-wider">
                  <Sparkles className="w-3 h-3 text-[#C89B58]" />
                  <span>{item.subtitle || item.intensity || "Teaching Practice"}</span>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl font-medium text-[#0E2229] tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5C7267] font-medium italic">
                  Guided by Harpreet Kaur · 15 Years of Practice
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2 pt-2 border-t border-[#DFD9CC]/60">
              <h4 className="text-xs font-semibold tracking-wider uppercase text-[#5C7267]">
                Practice Insights & Alignment
              </h4>
              <p className="text-sm sm:text-base text-[#1D2628] leading-relaxed font-normal">
                {item.fullDesc || item.desc}
              </p>
            </div>

            {/* Experience / Key Elements */}
            {item.benefits && item.benefits.length > 0 && (
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-semibold tracking-wider uppercase text-[#5C7267]">
                  What You Experience
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {item.benefits.map((b, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#1D2628]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#C89B58] shrink-0 mt-0.5" />
                      <span className="leading-snug font-normal">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-[#DFD9CC] flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                onClick={onClose}
                className="text-xs font-semibold text-[#5C7267] hover:text-[#0E2229] transition-colors cursor-pointer order-2 sm:order-1 py-1 px-2"
              >
                Close Window
              </button>
              <AnimatedButton
                href={`/contact?subject=${encodeURIComponent(`Inquiry about ${item.title}`)}`}
                variant="primary"
                size="sm"
                className="w-full sm:w-auto order-1 sm:order-2"
              >
                Connect With Harpreet
              </AnimatedButton>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
