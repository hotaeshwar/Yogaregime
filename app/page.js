import Hero from "@/components/Hero";
import IntroPhilosophy from "@/components/IntroPhilosophy";
import AboutPreview from "@/components/AboutPreview";
import CoreApproach from "@/components/CoreApproach";
import BandhaSection from "@/components/BandhaSection";
import MovementBreath from "@/components/MovementBreath";
import PracticeCards from "@/components/PracticeCards";
import PhilosophyClosing from "@/components/PhilosophyClosing";

export const metadata = {
  title: "Yoga Regime | Harpreet Kaur | Yoga Beyond the Asana",
  description:
    "Traditional yoga practices, modern understanding, and intelligent movement. Explore Asana, Pranayama, Bandhas, Mudras, and Meditation with Harpreet Kaur.",
};

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Intro / Philosophy */}
      <IntroPhilosophy />

      {/* 3. About Harpreet */}
      <AboutPreview />

      {/* 4. Core approach */}
      <CoreApproach />

      {/* 5. Strong Bandha section */}
      <BandhaSection />

      {/* 6. Movement + Breath */}
      <MovementBreath />

      {/* 7. Practice areas */}
      <PracticeCards />

      {/* 8. Philosophy / closing section */}
      <PhilosophyClosing />
    </>
  );
}

