"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin } from "lucide-react";
import {
  InstagramIcon,
  FacebookIcon,
} from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-[#0E2229] text-white pt-20 pb-12 relative overflow-hidden border-t border-[#DFD9CC]/20">
      {/* Decorative ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C89B58]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#5C7267]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3.5">
              {/* 60% bigger logo */}
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden bg-white border-2 border-[#C89B58]/40 flex items-center justify-center shrink-0 shadow-sm">
                <Image
                  src="/images/logo1.png"
                  alt="Yoga Regime Logo - Harpreet Kaur"
                  width={160}
                  height={160}
                  unoptimized
                  className="w-full h-full object-contain object-center"
                />
              </div>
              <div>
                <span className="font-serif text-2xl font-medium tracking-tight text-white block">
                  Yoga Regime
                </span>
                <span className="text-[9.5px] tracking-[0.26em] text-[#C89B58] uppercase font-semibold block mt-0.5">
                  Yoga Beyond the Asana
                </span>
                <span className="text-xs text-[#ECE8DF]/80 font-light">
                  Harpreet Kaur · Certified Yoga Teacher
                </span>
              </div>
            </div>

            <p className="text-[#ECE8DF]/80 text-sm leading-relaxed max-w-sm font-light">
              Traditional yoga practices, modern understanding, and intelligent movement. Explore Asana, Pranayama, Bandhas, Mudras, and deep self-awareness.
            </p>

            {/* Direct Contact Snapshot */}
            <div className="space-y-2 pt-1 text-xs text-[#ECE8DF]/80">
              <a
                href="tel:+919569663204"
                className="flex items-center gap-2 hover:text-[#C89B58] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C89B58]" />
                <span>+91 95696 63204</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C89B58]" />
                <span>Certified Yoga Teacher · 15 Years Practice</span>
              </div>
            </div>

            {/* Social Icons - Instagram & Facebook with Fluid Liquid Effect */}
            <div className="pt-2">
              <div className="text-xs font-semibold tracking-wider uppercase text-[#C89B58] mb-3">
                Connect With Harpreet
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/yoga_regime?stkn=NnZkaWZyeG43MHp1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram @yoga_regime"
                  className="liquid-btn group relative w-10 h-10 rounded-full bg-white/5 border border-white/15 hover:border-[#C89B58] flex items-center justify-center text-[#ECE8DF] transition-all duration-300 shadow-xs active:scale-95"
                >
                  {/* Secondary fluid wave */}
                  <span
                    aria-hidden="true"
                    className="liquid-wave-secondary bg-[#DFC08A]"
                  />
                  {/* Primary fluid wave */}
                  <span
                    aria-hidden="true"
                    className="liquid-wave bg-[#C89B58]"
                  />
                  {/* Specular sheen */}
                  <span aria-hidden="true" className="liquid-sheen" />
                  <span className="relative z-10 text-[#ECE8DF] group-hover:text-[#0E2229] transition-colors duration-300">
                    <InstagramIcon className="w-4 h-4" />
                  </span>
                </a>
                <a
                  href="https://www.facebook.com/share/1KMFfJpPbP/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Yoga Regime"
                  className="liquid-btn group relative w-10 h-10 rounded-full bg-white/5 border border-white/15 hover:border-[#C89B58] flex items-center justify-center text-[#ECE8DF] transition-all duration-300 shadow-xs active:scale-95"
                >
                  {/* Secondary fluid wave */}
                  <span
                    aria-hidden="true"
                    className="liquid-wave-secondary bg-[#DFC08A]"
                  />
                  {/* Primary fluid wave */}
                  <span
                    aria-hidden="true"
                    className="liquid-wave bg-[#C89B58]"
                  />
                  {/* Specular sheen */}
                  <span aria-hidden="true" className="liquid-sheen" />
                  <span className="relative z-10 text-[#ECE8DF] group-hover:text-[#0E2229] transition-colors duration-300">
                    <FacebookIcon className="w-4 h-4" />
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg text-white font-medium">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-[#ECE8DF]/75 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#philosophy"
                  className="text-[#ECE8DF]/75 hover:text-white transition-colors"
                >
                  Philosophy
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="text-[#ECE8DF]/75 hover:text-white transition-colors"
                >
                  Meet Harpreet
                </Link>
              </li>
              <li>
                <Link
                  href="/#core-approach"
                  className="text-[#ECE8DF]/75 hover:text-white transition-colors"
                >
                  Core Approach
                </Link>
              </li>
              <li>
                <Link
                  href="/#bandhas"
                  className="text-[#ECE8DF]/75 hover:text-white transition-colors"
                >
                  Bandha Integration
                </Link>
              </li>
              <li>
                <Link
                  href="/#practice-areas"
                  className="text-[#ECE8DF]/75 hover:text-white transition-colors"
                >
                  Practice Areas
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#ECE8DF]/75 hover:text-white transition-colors"
                >
                  Connect With Me
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Practice Areas */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif text-lg text-white font-medium">
              Explore Practice
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5 text-xs sm:text-sm text-[#ECE8DF]/75">
              <li>
                <Link href="/#practice-areas" className="hover:text-white transition-colors">
                  Hatha Yoga
                </Link>
              </li>
              <li>
                <Link href="/#practice-areas" className="hover:text-white transition-colors">
                  Ashtanga Yoga
                </Link>
              </li>
              <li>
                <Link href="/#practice-areas" className="hover:text-white transition-colors">
                  Vinyasa
                </Link>
              </li>
              <li>
                <Link href="/#practice-areas" className="hover:text-white transition-colors">
                  Pranayama
                </Link>
              </li>
              <li>
                <Link href="/#practice-areas" className="hover:text-white transition-colors">
                  Bandhas
                </Link>
              </li>
              <li>
                <Link href="/#practice-areas" className="hover:text-white transition-colors">
                  Mudra
                </Link>
              </li>
              <li>
                <Link href="/#practice-areas" className="hover:text-white transition-colors">
                  Meditation
                </Link>
              </li>
              <li>
                <Link href="/#practice-areas" className="hover:text-white transition-colors">
                  Shatkarma
                </Link>
              </li>
              <li>
                <Link href="/#practice-areas" className="hover:text-white transition-colors">
                  Pre & Post Natal
                </Link>
              </li>
              <li>
                <Link href="/#practice-areas" className="hover:text-white transition-colors">
                  Advanced Asana
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#ECE8DF]/60">
          <div>
            © {new Date().getFullYear()} Yoga Regime · Harpreet Kaur. All rights reserved.
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
              Yoga Beyond the Asana.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
