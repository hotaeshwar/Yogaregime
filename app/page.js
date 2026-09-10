import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import PracticeCards from "@/components/PracticeCards";
import BenefitsSection from "@/components/BenefitsSection";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Serena Yoga | Move · Breathe · Be | Certified Yoga Instructor",
  description:
    "Yoga for a stronger body, a calmer mind and a more mindful life. Explore Hatha, Vinyasa, Meditation, Prenatal and private yoga sessions with Serena.",
};

export default function Home() {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. About Section */}
      <AboutPreview />

      {/* 3. Find Your Practice */}
      <PracticeCards />

      {/* 4. Benefits Section */}
      <BenefitsSection />

      {/* 5. Testimonials */}
      <Testimonials />

      {/* 6. Final Call to Action */}
      <CTASection />
    </>
  );
}
