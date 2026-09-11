import { Mail, Phone, MapPin, Clock, Sparkles } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { FadeIn, ImageReveal } from "@/components/ScrollReveal";
import {
  InstagramIcon,
  FacebookIcon,
} from "@/components/SocialIcons";
import TypewriterText from "@/components/TypewriterText";

export const metadata = {
  title: "Contact Harpreet Kaur | Yoga Regime",
  description:
    "Have a question or want to know more about yoga sessions, Bandhas, and workshops? Reach out to Harpreet Kaur.",
};

export default function ContactPage() {
  const contactDetails = [
    {
      icon: Mail,
      label: "Email",
      value: "yogawithharpreet@gmail.com",
      href: "mailto:yogawithharpreet@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone / WhatsApp",
      value: "+91 95696 63204",
      href: "tel:+919569663204",
    },
    {
      icon: MapPin,
      label: "Certification",
      value: "Certified Yoga Teacher (15 Years Practice)",
      href: "#",
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 24 Hours (Mon - Sat)",
      href: "#",
    },
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20 space-y-4">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ECE8DF]/80 border border-[#DFD9CC] text-xs font-semibold uppercase tracking-widest text-[#0E2229]">
              <Sparkles className="w-3.5 h-3.5 text-[#C89B58]" />
              <span>Reach Out</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium text-[#0E2229] tracking-tight">
              <TypewriterText
                words={[
                  "Connect With Me",
                  "Start Your Practice",
                  "Deepen Your Bandhas",
                  "Yoga Beyond The Asana",
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
              Have a question or want to explore private sessions, Bandha workshops, or traditional practice? I would love to connect with you.
            </p>
          </FadeIn>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Let's Connect & Details */}
          <div className="lg:col-span-5 space-y-8">
            <FadeIn className="space-y-4">
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#0E2229]">
                Let&apos;s Connect
              </h2>
              <p className="text-sm sm:text-base text-[#526063] font-light leading-relaxed">
                Whether you are beginning your journey or seeking to refine subtle alignment and energetic Bandhas, I am here to guide your path.
              </p>
            </FadeIn>

            {/* Contact Information List */}
            <div className="space-y-4">
              {contactDetails.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <FadeIn
                    key={idx}
                    delay={0.1 * idx}
                    className="p-5 rounded-2xl bg-white border border-[#DFD9CC] flex items-center gap-4 hover:border-[#C89B58] transition-colors shadow-xs"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#ECE8DF]/80 text-[#0E2229] flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-[#5C7267]" />
                    </div>
                    <div>
                      <div className="text-[11px] uppercase tracking-wider font-semibold text-[#5C7267]">
                        {item.label}
                      </div>
                      {item.href !== "#" ? (
                        <a
                          href={item.href}
                          className="text-sm font-medium text-[#0E2229] hover:text-[#A97A37] transition-colors break-all"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-sm font-medium text-[#0E2229]">
                          {item.value}
                        </div>
                      )}
                    </div>
                  </FadeIn>
                );
              })}
            </div>

            {/* Social Media Links with Fluid Liquid Effect */}
            <FadeIn delay={0.4} className="pt-2">
              <div className="text-xs uppercase tracking-wider font-semibold text-[#0E2229] mb-3">
                Follow On Social Media
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/yoga_regime?stkn=NnZkaWZyeG43MHp1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram @yoga_regime"
                  className="liquid-btn group relative w-12 h-12 rounded-2xl bg-white border border-[#DFD9CC] hover:border-[#0E2229] flex items-center justify-center text-[#0E2229] transition-all duration-300 shadow-xs active:scale-95"
                >
                  {/* Secondary fluid wave */}
                  <span
                    aria-hidden="true"
                    className="liquid-wave-secondary bg-[#183842]"
                  />
                  {/* Primary fluid wave */}
                  <span
                    aria-hidden="true"
                    className="liquid-wave bg-[#0E2229]"
                  />
                  {/* Specular sheen */}
                  <span aria-hidden="true" className="liquid-sheen" />
                  <span className="relative z-10 text-[#0E2229] group-hover:text-white transition-colors duration-300">
                    <InstagramIcon className="w-5 h-5" />
                  </span>
                </a>
                <a
                  href="https://www.facebook.com/share/1KMFfJpPbP/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Yoga Regime"
                  className="liquid-btn group relative w-12 h-12 rounded-2xl bg-white border border-[#DFD9CC] hover:border-[#0E2229] flex items-center justify-center text-[#0E2229] transition-all duration-300 shadow-xs active:scale-95"
                >
                  {/* Secondary fluid wave */}
                  <span
                    aria-hidden="true"
                    className="liquid-wave-secondary bg-[#183842]"
                  />
                  {/* Primary fluid wave */}
                  <span
                    aria-hidden="true"
                    className="liquid-wave bg-[#0E2229]"
                  />
                  {/* Specular sheen */}
                  <span aria-hidden="true" className="liquid-sheen" />
                  <span className="relative z-10 text-[#0E2229] group-hover:text-white transition-colors duration-300">
                    <FacebookIcon className="w-5 h-5" />
                  </span>
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#DFD9CC] shadow-sm">
            <ContactForm
              submitButtonText="Send Message"
              formTitle="Send a Direct Message"
              formSubtitle="Fill in your details and Harpreet will get back to you shortly."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

