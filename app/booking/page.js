import { Suspense } from "react";
import Image from "next/image";
import { Sparkles, Calendar, Check, ShieldCheck, Heart } from "lucide-react";
import BookingFormClient from "./BookingFormClient";
import { FadeIn, ImageReveal } from "@/components/ScrollReveal";
import TypewriterText from "@/components/TypewriterText";

export const metadata = {
  title: "Book a Session | Serena Yoga",
  description:
    "Schedule your 1-on-1 private yoga session, group pass, or mindfulness consultation with Serena Sterling.",
};

export default function BookingPage() {
  const guarantees = [
    "No-hassle rescheduling up to 12 hours prior",
    "Tailored preparation guide delivered to your inbox",
    "Complimentary studio mats and organic props provided",
    "Safe, zero-judgment sanctuary for all experience levels",
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EAE7E1]/80 border border-[#D8C9B8] text-xs font-semibold uppercase tracking-widest text-[#0B2A3A]">
              <Calendar className="w-3.5 h-3.5 text-[#6E7F72]" />
              <span>Reserve Your Space</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium text-[#0B2A3A] tracking-tight">
              <TypewriterText
                words={[
                  "Book a Session",
                  "Reserve Your Mat",
                  "Begin Your Practice",
                  "Private Mentorship",
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
              Take the first step towards a healthier, happier you. Choose your
              preferred session and Serena will confirm details promptly.
            </p>
          </FadeIn>
        </div>

        {/* 2-Column Booking Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Booking Form Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#EAE7E1] shadow-sm">
            <Suspense
              fallback={
                <div className="py-12 text-center text-sm text-[#586771]">
                  Loading session booking...
                </div>
              }
            >
              <BookingFormClient />
            </Suspense>
          </div>

          {/* Right Column: Editorial Visual & Booking Guarantees */}
          <div className="lg:col-span-5 space-y-8">
            <ImageReveal>
              <div className="relative rounded-3xl overflow-hidden border border-[#EAE7E1] shadow-md bg-[#EAE7E1]">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/private_yoga.jpg"
                    alt="Serena adjusting student in private studio"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 bg-[#F8F7F3] border-t border-[#EAE7E1] space-y-2">
                  <div className="font-serif italic text-lg text-[#0B2A3A]">
                    &ldquo;A calm mind creates a stronger, happier you.&rdquo;
                  </div>
                  <div className="text-xs text-[#6E7F72] font-medium">
                    Personalized attention in every private & group session.
                  </div>
                </div>
              </div>
            </ImageReveal>

            {/* Booking Guarantees */}
            <FadeIn delay={0.2}>
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#EAE7E1] space-y-4">
                <div className="flex items-center gap-2.5 text-[#0B2A3A]">
                  <ShieldCheck className="w-5 h-5 text-[#6E7F72]" />
                  <h3 className="font-serif text-xl font-medium">
                    The Serena Yoga Commitment
                  </h3>
                </div>

                <ul className="space-y-3 pt-1">
                  {guarantees.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs text-[#586771]"
                    >
                      <Check className="w-4 h-4 text-[#6E7F72] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Direct contact note */}
            <FadeIn delay={0.3}>
              <div className="p-5 rounded-2xl bg-[#EAE7E1]/50 border border-[#EAE7E1] text-xs text-[#586771] flex items-center gap-3">
                <Heart className="w-5 h-5 text-[#6E7F72] shrink-0" />
                <span>
                  Have a question before booking? Feel free to email{" "}
                  <a
                    href="mailto:Himanshukhanegwal@gmail.com"
                    className="text-[#0B2A3A] font-semibold underline"
                  >
                    Himanshukhanegwal@gmail.com
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
