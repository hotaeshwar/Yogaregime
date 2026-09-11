import Image from "next/image";
import Link from "next/link";
import { Sparkles, Check, Clock, Globe2, ShieldCheck, ArrowRight } from "lucide-react";
import { programsData } from "@/data/programs";
import AnimatedButton from "@/components/AnimatedButton";
import { FadeIn, ImageReveal } from "@/components/ScrollReveal";
import TypewriterText from "@/components/TypewriterText";

export const metadata = {
  title: "Specialized Programs & Intensives | Yoga Regime | Harpreet Kaur",
  description:
    "Explore signature yoga programs including Bandha Mastery & Core Energy Immersion, 1-on-1 Personalized Mentorship, and Foundations to Flight.",
};

export default function ProgramsPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ECE8DF]/80 border border-[#DFD9CC] text-xs font-semibold uppercase tracking-widest text-[#0E2229]">
              <Sparkles className="w-3.5 h-3.5 text-[#C89B58]" />
              <span>Tailored Curriculums</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium text-[#0E2229] tracking-tight">
              <TypewriterText
                words={[
                  "Signature Programs",
                  "Bandha Intensives",
                  "Private Mentorship",
                  "Traditional Immersions",
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
              Structured pathways created to support physical and mental evolution. Guided personally by Harpreet Kaur.
            </p>
          </FadeIn>
        </div>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {programsData.map((program, idx) => (
            <FadeIn
              key={program.id}
              delay={0.1 * (idx % 2)}
              className="flex flex-col bg-white rounded-3xl overflow-hidden border border-[#DFD9CC] shadow-xs hover:shadow-lg hover:border-[#C89B58] transition-all duration-300 justify-between group p-4 sm:p-5"
            >
              <div>
                {/* Slim Tag Row OUTSIDE of Image (Header of Card) */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10.5px] font-semibold tracking-wider uppercase bg-[#ECE8DF] text-[#0E2229] border border-[#DFD9CC]">
                    {program.badge}
                  </span>
                  <span className="text-xs text-[#5C7267] font-medium flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#C89B58]" />
                    <span>{program.duration}</span>
                  </span>
                </div>

                {/* Header Image - Natural Aspect */}
                <div className="relative aspect-[3/4] sm:aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#ECE8DF] mb-5">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>

                {/* Card Content Body */}
                <div className="space-y-5">
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#0E2229]">
                    {program.title}
                  </h3>
                  {/* Tagline & Pricing */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-[#DFD9CC]">
                    <div>
                      <div className="text-xs text-[#5C7267] font-medium flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#C89B58]" />
                        <span>{program.duration}</span>
                        <span>·</span>
                        <span>{program.format}</span>
                      </div>
                    </div>
                    <div className="text-left sm:text-right">
                      <div className="font-serif text-3xl font-medium text-[#0E2229]">
                        {program.price}
                      </div>
                      <div className="text-[11px] text-[#526063]">
                        {program.billing}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#526063] leading-relaxed font-light">
                    {program.description}
                  </p>

                  {/* What's Included list */}
                  <div className="space-y-2.5 pt-1">
                    <div className="text-xs uppercase tracking-wider font-semibold text-[#0E2229]">
                      What&apos;s Included:
                    </div>
                    <ul className="space-y-2">
                      {program.includes.map((inc, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-xs text-[#1D2628]"
                        >
                          <Check className="w-4 h-4 text-[#5C7267] shrink-0 mt-0.5" />
                          <span className="leading-normal font-light">{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ideal For note */}
                  <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#DFD9CC] text-[11px] text-[#526063]">
                    <span className="font-semibold text-[#0E2229]">
                      Ideal For:{" "}
                    </span>
                    {program.idealFor}
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="p-6 sm:p-8 pt-0">
                <AnimatedButton
                  href={`/booking?service=${encodeURIComponent(program.title)}`}
                  variant="primary"
                  size="md"
                  className="w-full"
                >
                  Inquire / Enroll in Program
                </AnimatedButton>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Custom Workshop / Intensive CTA Banner */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-[#0E2229] text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C89B58]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="space-y-3 text-center md:text-left relative z-10 max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#DFC08A]">
              Personalized Intensives
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-normal text-white">
              Looking for a custom workshop or mentorship series?
            </h3>
            <p className="text-xs sm:text-sm text-[#ECE8DF]/80 leading-relaxed font-light">
              Harpreet curates bespoke Bandha intensives, posture refinement retreats, and teacher mentorship programs.
            </p>
          </div>
          <div className="relative z-10 shrink-0">
            <AnimatedButton href="/contact" variant="secondary" size="lg">
              Inquire Custom Program
            </AnimatedButton>
          </div>
        </div>
      </div>
    </div>
  );
}

