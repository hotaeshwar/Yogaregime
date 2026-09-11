import { Suspense } from "react";
import Image from "next/image";
import { Sparkles, Calendar, Check, ShieldCheck, Heart } from "lucide-react";
import BookingFormClient from "./BookingFormClient";
import { FadeIn, ImageReveal } from "@/components/ScrollReveal";
import TypewriterText from "@/components/TypewriterText";

export const metadata = {
  title: "Connect & Book a Session | Yoga Regime | Harpreet Kaur",
  description:
    "Schedule your 1-on-1 private yoga mentorship, Bandha intensive, or practice consultation with Harpreet Kaur.",
};

export default function BookingPage() {
  const guarantees = [
    "Personalized alignment & biomechanics analysis",
    "Tailored preparation guidance delivered before practice",
    "Specialized Bandha and breathwork integration",
    "Safe, conscious, non-dogmatic learning environment",
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ECE8DF]/80 border border-[#DFD9CC] text-xs font-semibold uppercase tracking-widest text-[#0E2229]">
              <Calendar className="w-3.5 h-3.5 text-[#C89B58]" />
              <span>Reserve Your Space</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium text-[#0E2229] tracking-tight">
              <TypewriterText
                words={[
                  "Connect With Harpreet",
                  "Begin Your Practice",
                  "1-on-1 Mentorship",
                  "Deepen Your Bandhas",
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
              Take the next step in understanding your body and breath. Submit your details and Harpreet will confirm promptly.
            </p>
          </FadeIn>
        </div>

        {/* 2-Column Booking Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Booking Form Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#DFD9CC] shadow-sm">
            <Suspense
              fallback={
                <div className="py-12 text-center text-sm text-[#526063]">
                  Loading practice booking...
                </div>
              }
            >
              <BookingFormClient />
            </Suspense>
          </div>

          {/* Right Column: Editorial Visual & Booking Guarantees */}
          <div className="lg:col-span-5 space-y-8">
            <ImageReveal>
              <div className="relative rounded-3xl overflow-hidden border border-[#DFD9CC] shadow-md bg-[#ECE8DF]">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/IMG_0267.png"
                    alt="Harpreet Kaur practicing mindful movement"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 bg-[#FAF8F5] border-t border-[#DFD9CC] space-y-2">
                  <div className="font-serif italic text-lg text-[#0E2229]">
                    &ldquo;Yoga is a way of life. The journey never really ends.&rdquo;
                  </div>
                  <div className="text-xs text-[#5C7267] font-medium">
                    Harpreet Kaur · Certified Yoga Teacher
                  </div>
                </div>
              </div>
            </ImageReveal>

            {/* Booking Guarantees */}
            <FadeIn delay={0.2}>
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#DFD9CC] space-y-4">
                <div className="flex items-center gap-2.5 text-[#0E2229]">
                  <ShieldCheck className="w-5 h-5 text-[#C89B58]" />
                  <h3 className="font-serif text-xl font-medium">
                    The Yoga Regime Commitment
                  </h3>
                </div>

                <ul className="space-y-3 pt-1">
                  {guarantees.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs text-[#526063]"
                    >
                      <Check className="w-4 h-4 text-[#5C7267] shrink-0 mt-0.5" />
                      <span className="leading-relaxed font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Direct contact note */}
            <FadeIn delay={0.3}>
              <div className="p-5 rounded-2xl bg-[#ECE8DF]/60 border border-[#DFD9CC] text-xs text-[#526063] flex items-center gap-3">
                <Heart className="w-5 h-5 text-[#C89B58] shrink-0" />
                <span>
                  Prefer direct email or WhatsApp? Reach Harpreet at{" "}
                  <a
                    href="mailto:yogawithharpreet@gmail.com"
                    className="text-[#0E2229] font-semibold underline"
                  >
                    yogawithharpreet@gmail.com
                  </a>{" "}
                  or{" "}
                  <a
                    href="tel:+919569663204"
                    className="text-[#0E2229] font-semibold underline"
                  >
                    +91 95696 63204
                  </a>
                </span>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}
