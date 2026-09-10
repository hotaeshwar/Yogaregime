"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import {
  InstagramIcon,
  YoutubeIcon,
  TwitterIcon,
  LinkedinIcon,
} from "./SocialIcons";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#0B2A3A] text-white pt-20 pb-12 relative overflow-hidden">
      {/* Decorative ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D8C9B8]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#6E7F72]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-[#D8C9B8]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M12 3c-1.5 3-4 6-8 7 4 1 6.5 4 8 11 1.5-7 4-10 8-11-4-1-6.5-4-8-7z" />
                  <path d="M12 12c-2-3-5-4.5-9-4 3 2 4.5 5 5 9" />
                  <path d="M12 12c2-3 5-4.5 9-4-3 2-4.5 5-5 9" />
                </svg>
              </div>
              <div>
                <span className="font-serif text-2xl font-medium tracking-tight text-white block">
                  Serena Yoga
                </span>
                <span className="text-[9px] tracking-[0.28em] text-[#D8C9B8] uppercase font-medium">
                  Move · Breathe · Be
                </span>
              </div>
            </div>

            <p className="text-[#EAE7E1]/75 text-sm leading-relaxed max-w-sm">
              Cultivating harmony through mindful movement, conscious breath,
              and grounded stillness. Serving private clients, studios, and
              forward-thinking organizations globally.
            </p>

            {/* Social Icons */}
            <div className="pt-2">
              <div className="text-xs font-semibold tracking-wider uppercase text-[#D8C9B8] mb-3">
                Follow Me
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-[#EAE7E1] hover:text-[#D8C9B8] transition-all"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-[#EAE7E1] hover:text-[#D8C9B8] transition-all"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter / X"
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-[#EAE7E1] hover:text-[#D8C9B8] transition-all"
                >
                  <TwitterIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-[#EAE7E1] hover:text-[#D8C9B8] transition-all"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-lg text-white font-medium">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-[#EAE7E1]/70 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[#EAE7E1]/70 hover:text-white transition-colors"
                >
                  About Serena
                </Link>
              </li>
              <li>
                <Link
                  href="/classes"
                  className="text-[#EAE7E1]/70 hover:text-white transition-colors"
                >
                  Yoga Classes
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="text-[#EAE7E1]/70 hover:text-white transition-colors"
                >
                  Programs & Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/booking"
                  className="text-[#EAE7E1]/70 hover:text-white transition-colors"
                >
                  Book a Session
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#EAE7E1]/70 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Practices */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-lg text-white font-medium">
              Practices
            </h4>
            <ul className="space-y-2.5 text-sm text-[#EAE7E1]/70">
              <li>
                <Link
                  href="/classes#hatha-yoga"
                  className="hover:text-white transition-colors"
                >
                  Hatha Yoga
                </Link>
              </li>
              <li>
                <Link
                  href="/classes#vinyasa-yoga"
                  className="hover:text-white transition-colors"
                >
                  Vinyasa Flow
                </Link>
              </li>
              <li>
                <Link
                  href="/classes#meditation"
                  className="hover:text-white transition-colors"
                >
                  Mindfulness & Breath
                </Link>
              </li>
              <li>
                <Link
                  href="/classes#prenatal-yoga"
                  className="hover:text-white transition-colors"
                >
                  Prenatal Care
                </Link>
              </li>
              <li>
                <Link
                  href="/classes#yin-yoga"
                  className="hover:text-white transition-colors"
                >
                  Yin Yoga
                </Link>
              </li>
              <li>
                <Link
                  href="/classes#chair-yoga"
                  className="hover:text-white transition-colors"
                >
                  Chair Yoga
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter Subscription */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif text-lg text-white font-medium">
              Subscribe to Wellness Tips
            </h4>
            <p className="text-[#EAE7E1]/75 text-sm leading-relaxed">
              Receive weekly mindful breathing exercises, seasonal wellness
              journals, and early access to retreat bookings.
            </p>

            {subscribed ? (
              <div className="p-3.5 bg-white/10 border border-[#6E7F72] rounded-xl flex items-center gap-3 text-sm text-[#EAE7E1]">
                <CheckCircle2 className="w-5 h-5 text-[#D8C9B8] shrink-0" />
                <span>Thank you for subscribing! Check your inbox soon.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative flex items-center">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full pl-4 pr-12 py-3 bg-white/10 border border-white/15 rounded-full text-sm text-white placeholder-white/40 focus:border-[#D8C9B8] focus:bg-white/15 transition-all outline-none"
                  />
                  <button
                    type="submit"
                    aria-label="Submit newsletter"
                    className="absolute right-1.5 p-2 bg-[#D8C9B8] text-[#0B2A3A] rounded-full hover:bg-white transition-colors shadow-sm"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-[11px] text-[#EAE7E1]/50 pl-2">
                  No spam. Unsubscribe anytime with one click.
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EAE7E1]/60">
          <div>
            © {new Date().getFullYear()} Serena Yoga. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <span>·</span>
            <span className="font-serif italic text-white/70">
              A healthier you. A kinder world.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
