import { Mail, Phone, MapPin, Clock, Sparkles } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { FadeIn, ImageReveal } from "@/components/ScrollReveal";
import {
  InstagramIcon,
  YoutubeIcon,
  FacebookIcon,
  LinkedinIcon,
} from "@/components/SocialIcons";
import TypewriterText from "@/components/TypewriterText";

export const metadata = {
  title: "Contact Serena | Get in Touch",
  description:
    "Have a question or want to know more about yoga classes and corporate wellness? Reach out to Serena Sterling.",
};

export default function ContactPage() {
  const contactDetails = [
    {
      icon: Mail,
      label: "Email",
      value: "Himanshukhanegwal@gmail.com",
      href: "mailto:Himanshukhanegwal@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 382-9014",
      href: "tel:+15553829014",
    },
    {
      icon: MapPin,
      label: "Studio Location",
      value: "Bengaluru, India · Global Online Studio",
      href: "#",
    },
    {
      icon: Clock,
      label: "Studio Hours",
      value: "Mon - Sat: 6:30 AM – 7:30 PM (IST)",
      href: "#",
    },
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20 space-y-4">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EAE7E1]/80 border border-[#D8C9B8] text-xs font-semibold uppercase tracking-widest text-[#0B2A3A]">
              <Sparkles className="w-3.5 h-3.5 text-[#6E7F72]" />
              <span>Reach Out</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium text-[#0B2A3A] tracking-tight">
              <TypewriterText
                words={[
                  "Get in Touch",
                  "Let's Connect",
                  "Say Hello",
                  "Start Your Practice",
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
              Have a question or want to know more about classes, private
              guidance, or corporate wellness? I would love to connect with you.
            </p>
          </FadeIn>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Let's Connect & Details */}
          <div className="lg:col-span-5 space-y-8">
            <FadeIn className="space-y-4">
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#0B2A3A]">
                Let&apos;s Connect
              </h2>
              <p className="text-sm sm:text-base text-[#586771] font-light leading-relaxed">
                Whether you are stepping onto the mat for the very first time or
                looking to deepen an established practice, I am here to assist
                every step of the way.
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
                    className="p-5 rounded-2xl bg-white border border-[#EAE7E1] flex items-center gap-4 hover:border-[#D8C9B8] transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#EAE7E1]/80 text-[#0B2A3A] flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] uppercase tracking-wider font-semibold text-[#6E7F72]">
                        {item.label}
                      </div>
                      {item.href !== "#" ? (
                        <a
                          href={item.href}
                          className="text-sm font-medium text-[#0B2A3A] hover:text-[#6E7F72] transition-colors break-all"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-sm font-medium text-[#0B2A3A]">
                          {item.value}
                        </div>
                      )}
                    </div>
                  </FadeIn>
                );
              })}
            </div>

            {/* Social Media Links */}
            <FadeIn delay={0.4} className="pt-2">
              <div className="text-xs uppercase tracking-wider font-semibold text-[#0B2A3A] mb-3">
                Follow On Social Media
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-11 h-11 rounded-2xl bg-white border border-[#EAE7E1] flex items-center justify-center text-[#0B2A3A] hover:bg-[#0B2A3A] hover:text-white transition-all shadow-xs"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-11 h-11 rounded-2xl bg-white border border-[#EAE7E1] flex items-center justify-center text-[#0B2A3A] hover:bg-[#0B2A3A] hover:text-white transition-all shadow-xs"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-11 h-11 rounded-2xl bg-white border border-[#EAE7E1] flex items-center justify-center text-[#0B2A3A] hover:bg-[#0B2A3A] hover:text-white transition-all shadow-xs"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-11 h-11 rounded-2xl bg-white border border-[#EAE7E1] flex items-center justify-center text-[#0B2A3A] hover:bg-[#0B2A3A] hover:text-white transition-all shadow-xs"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#EAE7E1] shadow-sm">
            <ContactForm
              submitButtonText="Send Message"
              formTitle="Send a Direct Message"
              formSubtitle="Fill in your contact information and Serena will get back to you shortly."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
