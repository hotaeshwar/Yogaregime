import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Sparkles,
  Heart,
  Shield,
  Compass,
  Leaf,
} from "lucide-react";
import AnimatedButton from "@/components/AnimatedButton";
import { FadeIn, ImageReveal } from "@/components/ScrollReveal";

export const metadata = {
  title: "About Serena | Certified Yoga Instructor & Mindfulness Coach",
  description:
    "Learn about Serena's 8+ year journey, 500-hour certifications, teaching philosophy, wellness values, and commitment to accessible mindful living.",
};

export default function AboutPage() {
  const certifications = [
    {
      title: "500-Hour Master RYT",
      issuer: "Yoga Alliance International (Rishikesh, India)",
      year: "2018",
      desc: "Advanced training in classical Hatha alignment, Vinyasa sequencing, Pranayama, and Patanjali philosophy.",
    },
    {
      title: "Prenatal & Postnatal Specialist (RPYT)",
      issuer: "Holistic Birth & Movement Institute",
      year: "2020",
      desc: "Specialized anatomical adaptations, pelvic floor mechanics, and gentle trimester sequencing.",
    },
    {
      title: "Mindfulness & Somatic Meditation",
      issuer: "Mindfulness Center of California",
      year: "2021",
      desc: "Trauma-informed breathwork, nervous system regulation, and modern neurobiology of stress.",
    },
    {
      title: "Restorative & Yin Yoga Certified",
      issuer: "Pacific Yoga Academy",
      year: "2022",
      desc: "Myofascial release, meridian health, and restorative therapeutic prop application.",
    },
  ];

  const values = [
    {
      icon: Compass,
      title: "Anatomy-First Guidance",
      desc: "Every skeleton is unique. We never force shapes; we tailor postures to honor your skeletal geometry and joints.",
    },
    {
      icon: Leaf,
      title: "Conscious Simplicity",
      desc: "Wellness is not about complex choreography. True transformation comes from steady, sustainable daily rituals.",
    },
    {
      icon: Heart,
      title: "Radical Inclusivity",
      desc: "Yoga belongs to all bodies, ages, and backgrounds. No judgment, no competitive mindset, just pure presence.",
    },
    {
      icon: Shield,
      title: "Safety & Biomechanics",
      desc: "Rooted in evidence-based movement science to prevent injuries and protect joints for decades of longevity.",
    },
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-24">
      {/* 1. About Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 lg:mb-28">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EAE7E1]/80 border border-[#D8C9B8] text-xs font-semibold uppercase tracking-widest text-[#0B2A3A]">
              <Sparkles className="w-3.5 h-3.5 text-[#6E7F72]" />
              <span>Meet Your Instructor</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium text-[#0B2A3A] tracking-tight">
              Guided by Breath,
              <br />
              <span className="italic font-light text-[#6E7F72]">
                Rooted in Grace.
              </span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-base sm:text-lg text-[#586771] font-light leading-relaxed">
              Discover the philosophy, journey, and heart behind Serena Yoga—where
              ancient wisdom meets accessible, everyday mindful living.
            </p>
          </FadeIn>
        </div>

        {/* Large Editorial Portrait & Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <ImageReveal>
              <div className="relative rounded-[2.5rem] p-3.5 bg-white border border-[#EAE7E1] shadow-xl">
                <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden bg-[#EAE7E1]">
                  <Image
                    src="/images/serena_portrait.jpg"
                    alt="Serena in peaceful namaste posture"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover object-center"
                  />
                </div>
                {/* Float tag */}
                <div className="absolute bottom-8 left-8 right-8 bg-[#0B2A3A]/90 backdrop-blur-md p-4 rounded-2xl text-white text-center">
                  <div className="font-serif text-xl">Serena Sterling</div>
                  <div className="text-xs text-[#D8C9B8] tracking-widest uppercase">
                    E-RYT 500 · 8+ Years Dedicated Practice
                  </div>
                </div>
              </div>
            </ImageReveal>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <FadeIn>
              <div className="space-y-3">
                <div className="text-xs font-semibold tracking-widest uppercase text-[#6E7F72]">
                  The Journey
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#0B2A3A] font-medium">
                  From High-Stress Tech to Sacred Stillness
                </h2>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="space-y-4 text-base sm:text-lg text-[#243038] leading-relaxed font-normal">
                <p>
                  Before discovering the transformative power of yoga, I spent
                  several years navigating the intense demands of the corporate
                  world. Long hours at a desk, chronic lower back aches, and
                  unceasing mental chatter pushed me toward burnout.
                </p>
                <p>
                  My first authentic yoga class wasn&apos;t just exercise; it was the
                  first time in years that I heard the rhythm of my own breath.
                  That pivotal moment inspired a deep pilgrimage across Rishikesh
                  and Kerala, immersing myself under master yogis in Hatha,
                  Pranayama, and meditative stillness.
                </p>
                <p>
                  Over the past 8+ years, I have had the deep honor of guiding
                  more than 500 students—from absolute beginners seeking mobility
                  to corporate teams combating burnout. My mission is simple: to
                  offer you a sanctuary where you can slow down, reconnect, and
                  remember who you are.
                </p>
              </div>
            </FadeIn>

            {/* Quick Stats Badges */}
            <FadeIn delay={0.2}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 bg-white rounded-2xl border border-[#EAE7E1] text-center">
                  <div className="font-serif text-3xl font-medium text-[#0B2A3A]">
                    8+
                  </div>
                  <div className="text-xs text-[#6E7F72] mt-0.5">
                    Years Teaching
                  </div>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-[#EAE7E1] text-center">
                  <div className="font-serif text-3xl font-medium text-[#0B2A3A]">
                    500+
                  </div>
                  <div className="text-xs text-[#6E7F72] mt-0.5">
                    Students Guided
                  </div>
                </div>
                <div className="col-span-2 sm:col-span-1 p-4 bg-white rounded-2xl border border-[#EAE7E1] text-center">
                  <div className="font-serif text-3xl font-medium text-[#0B2A3A]">
                    1,200+
                  </div>
                  <div className="text-xs text-[#6E7F72] mt-0.5">
                    Hours Taught
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. Teaching Philosophy & Mission Statement */}
      <section className="py-20 bg-white border-y border-[#EAE7E1] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <FadeIn>
                <div className="text-xs font-semibold tracking-widest uppercase text-[#6E7F72]">
                  Teaching Philosophy
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0B2A3A] font-medium leading-tight">
                  &ldquo;Your body is not a problem to be solved. It is an
                  instrument to be played.&rdquo;
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-sm sm:text-base text-[#586771] leading-relaxed font-light">
                  I reject the dogmatic view that every student should fold into
                  the same textbook posture. In my studio, we prioritize how a
                  pose feels in your body over how it looks from the outside.
                  Breath is our compass, and mindful awareness is our anchor.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="p-6 rounded-3xl bg-[#F8F7F3] border border-[#EAE7E1] space-y-3">
                  <div className="font-serif text-lg text-[#0B2A3A] font-medium">
                    The Serena Yoga Mission
                  </div>
                  <p className="text-xs text-[#586771] leading-relaxed">
                    To make authentic yoga, somatic breathwork, and mental stillness
                    approachable, empowering, and life-enhancing for humans of
                    every age and ability.
                  </p>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-6">
              <ImageReveal>
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-[#EAE7E1] shadow-lg">
                  <Image
                    src="/images/private_yoga.jpg"
                    alt="Serena guiding student in gentle posture"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </ImageReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Wellness Values */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <FadeIn>
            <div className="text-xs font-semibold tracking-widest uppercase text-[#6E7F72]">
              Guiding Principles
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#0B2A3A] font-medium tracking-tight">
              My Core Wellness Values
            </h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item, idx) => {
            const Icon = item.icon;
            return (
              <FadeIn
                key={idx}
                delay={0.1 * idx}
                className="p-6 rounded-3xl bg-white border border-[#EAE7E1] shadow-xs hover:border-[#D8C9B8] transition-colors space-y-3"
              >
                <div className="w-10 h-10 rounded-2xl bg-[#EAE7E1]/80 text-[#0B2A3A] flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-medium text-[#0B2A3A]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#586771] leading-relaxed font-light">
                  {item.desc}
                </p>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* 4. Certifications & Credentials */}
      <section className="py-20 bg-[#F8F7F3] border-t border-[#EAE7E1]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 space-y-3">
            <FadeIn>
              <div className="text-xs font-semibold tracking-widest uppercase text-[#6E7F72]">
                Formal Training
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-serif text-4xl sm:text-5xl text-[#0B2A3A] font-medium tracking-tight">
                Certifications & Accreditations
              </h2>
            </FadeIn>
          </div>

          <div className="space-y-4">
            {certifications.map((cert, idx) => (
              <FadeIn
                key={idx}
                delay={0.08 * idx}
                className="p-6 rounded-3xl bg-white border border-[#EAE7E1] flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:shadow-sm transition-shadow"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#6E7F72]" />
                    <h3 className="font-serif text-xl font-medium text-[#0B2A3A]">
                      {cert.title}
                    </h3>
                  </div>
                  <div className="text-xs text-[#6E7F72] font-medium">
                    {cert.issuer}
                  </div>
                  <p className="text-xs text-[#586771] leading-relaxed pt-1">
                    {cert.desc}
                  </p>
                </div>
                <div className="px-3.5 py-1.5 rounded-full bg-[#EAE7E1] text-[#0B2A3A] text-xs font-semibold self-start sm:self-center shrink-0">
                  {cert.year}
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4} className="mt-14 text-center">
            <AnimatedButton href="/booking" variant="primary" size="lg">
              Book a Consultation with Serena
            </AnimatedButton>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
