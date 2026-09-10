"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Mail } from "lucide-react";
import AnimatedButton from "./AnimatedButton";

export default function SuccessModal({
  isOpen,
  onClose,
  title = "Message Sent Successfully",
  message = "Thank you for reaching out. I'll get back to you shortly.",
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-x-hidden overflow-y-auto">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0B2A3A]/60 backdrop-blur-md transition-opacity"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.82, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 300,
            }}
            className="relative w-full max-w-md bg-[#F8F7F3] border border-[#EAE7E1] rounded-3xl p-8 sm:p-10 shadow-2xl z-10 text-center overflow-hidden"
          >
            {/* Ambient Background glow */}
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#D8C9B8]/30 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-[#6E7F72]/20 rounded-full blur-2xl pointer-events-none" />

            {/* Close 'X' button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full text-[#243038]/60 hover:text-[#0B2A3A] hover:bg-[#EAE7E1]/50 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Animated Envelope & Checkmark Rising Container */}
            <div className="relative w-28 h-28 mx-auto mb-6 flex items-center justify-center">
              {/* Envelope Body */}
              <motion.div
                initial={{ scale: 0.8, rotate: -6 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative w-24 h-18 bg-[#0B2A3A] rounded-xl shadow-lg flex items-center justify-center overflow-visible"
              >
                {/* Envelope Flap Animation */}
                <motion.div
                  initial={{ rotateX: 0 }}
                  animate={{ rotateX: 180 }}
                  transition={{ delay: 0.35, duration: 0.6, ease: "easeInOut" }}
                  style={{ transformOrigin: "top" }}
                  className="absolute top-0 left-0 right-0 h-9 bg-[#164057] rounded-t-xl border-b border-white/20 z-0"
                />

                {/* Letter / Checkmark Card that rises out */}
                <motion.div
                  initial={{ y: 0, opacity: 0 }}
                  animate={{ y: -26, opacity: 1 }}
                  transition={{
                    delay: 0.6,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="relative z-10 w-16 h-12 bg-white rounded-lg shadow-md border border-[#D8C9B8] flex items-center justify-center text-[#6E7F72]"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.9, type: "spring", stiffness: 350 }}
                    className="w-8 h-8 rounded-full bg-[#6E7F72] text-white flex items-center justify-center shadow-sm"
                  >
                    <Check className="w-5 h-5 stroke-[2.5]" />
                  </motion.div>
                </motion.div>

                {/* Envelope Front Pocket */}
                <div className="absolute inset-0 bg-[#0B2A3A] rounded-xl z-20 pointer-events-none flex items-center justify-center border-t border-white/10 [clip-path:polygon(0%_40%,50%_75%,100%_40%,100%_100%,0%_100%)]">
                  <Mail className="w-6 h-6 text-[#D8C9B8]/50 mt-3" />
                </div>
              </motion.div>
            </div>

            {/* Modal Content */}
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="font-serif text-2xl sm:text-3xl font-medium text-[#0B2A3A] mb-3"
            >
              {title}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.4 }}
              className="text-sm text-[#586771] leading-relaxed mb-8 max-w-sm mx-auto"
            >
              {message}
            </motion.p>

            {/* Done Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.4 }}
            >
              <AnimatedButton
                onClick={onClose}
                variant="primary"
                size="md"
                showArrow={false}
                className="w-full sm:w-auto min-w-[160px]"
              >
                Done
              </AnimatedButton>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
