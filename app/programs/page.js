import Image from "next/image";
import Link from "next/link";
import { Sparkles, Check, Clock, Globe2, ShieldCheck, ArrowRight } from "lucide-react";
import { programsData } from "@/data/programs";
import AnimatedButton from "@/components/AnimatedButton";
import { FadeIn, ImageReveal } from "@/components/ScrollReveal";
import TypewriterText from "@/components/TypewriterText";

export const metadata = {
  title: "Specialized Programs & Memberships | Serena Yoga",
  description:
    "Explore signature yoga programs including 1-on-1 Private Mentorship, Virtual Studio Membership, Corporate Wellness, and Foundational Immersion.",
};

export default function ProgramsPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EAE7E1]/80 border border-[#D8C9B8] text-xs font-semibold uppercase tracking-widest text-[#0B2A3A]">
              <Sparkles className="w-3.5 h-3.5 text-[#6E7F72]" />
              <span>Tailored Curriculums</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium text-[#0B2A3A] tracking-tight">
              <TypewriterText
                words={[
                  "Signature Programs",
                  "Private Intensives",
                  "Corporate Wellness",
                  "Beginner Immersions",
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
              Structured pathways created to support personal evolution. From
              private one-on-one intensives to full-scale corporate wellness
              series.
            </p>
          </FadeIn>
        </div>

        {/* Program Cards Grid (2-column editorial luxury cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {programsData.map((program, idx) => (
            <FadeIn
              key={program.id}
              delay={0.1 * (idx % 2)}
              className="flex flex-col bg-white rounded-3xl overflow-hidden border border-[#EAE7E1] shadow-sm hover:shadow-xl hover:border-[#D8C9B8] transition-all duration-500 justify-between group"
            >
              <div>
                {/* Header Image */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#EAE7E1]">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1 rounded-full text-[11px] font-semibold text-[#0B2A3A] shadow-sm">
                    {program.badge}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-serif text-2xl sm:text-3xl font-medium drop-shadow-sm">
                      {program.title}
                    </h3>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Tagline & Pricing */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-[#EAE7E1]">
                    <div>
                      <div className="text-xs text-[#6E7F72] font-medium flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{program.duration}</span>
                        <span>·</span>
                        <span>{program.format}</span>
                      </div>
                    </div>
                    <div className="text-left sm:text-right">
                      <div className="font-serif text-3xl font-medium text-[#0B2A3A]">
                        {program.price}
                      </div>
                      <div className="text-[11px] text-[#586771]">
                        {program.billing}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#586771] leading-relaxed font-light">
                    {program.description}
                  </p>

                  {/* What's Included list */}
                  <div className="space-y-2.5 pt-1">
                    <div className="text-xs uppercase tracking-wider font-semibold text-[#0B2A3A]">
                      What&apos;s Included:
                    </div>
                    <ul className="space-y-2">
                      {program.includes.map((inc, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-xs text-[#243038]"
                        >
                          <Check className="w-4 h-4 text-[#6E7F72] shrink-0 mt-0.5" />
                          <span className="leading-normal font-light">{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ideal For note */}
                  <div className="p-3.5 rounded-2xl bg-[#F8F7F3] border border-[#EAE7E1] text-[11px] text-[#586771]">
                    <span className="font-semibold text-[#0B2A3A]">
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
                  Book Program
                </AnimatedButton>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Corporate / Custom Consultation CTA Banner */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-[#0B2A3A] text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#D8C9B8]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="space-y-3 text-center md:text-left relative z-10 max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D8C9B8]">
              Custom Packages
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-normal text-white">
              Looking for a bespoke retreat or corporate series?
            </h3>
            <p className="text-xs sm:text-sm text-[#EAE7E1]/80 leading-relaxed font-light">
              We curate custom multi-day wellness retreats, executive wellness
              coaching, and specialized studio workshops worldwide.
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
