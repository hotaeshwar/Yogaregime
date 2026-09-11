"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import AnimatedButton from "./AnimatedButton";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Philosophy", href: "/#philosophy" },
  { name: "About", href: "/#about" },
  { name: "Core Approach", href: "/#core-approach" },
  { name: "Bandhas", href: "/#bandhas" },
  { name: "Practice Areas", href: "/#practice-areas" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when navigating
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  // Determine active nav item
  const getActiveHref = () => {
    if (pathname === "/") return "/";
    if (pathname.startsWith("/about")) return "/about";
    if (pathname.startsWith("/contact")) return "/contact";
    if (pathname.startsWith("/booking")) return "/booking";
    return "";
  };

  const activeHref = getActiveHref();
  const currentHighlighted = hoveredPath !== null ? hoveredPath : activeHref;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          scrolled
            ? "bg-[#FAF8F5]/95 backdrop-blur-xl border-b border-[#DFD9CC]/80 py-2 sm:py-2.5 shadow-[0_4px_25px_-4px_rgba(14,34,41,0.07)]"
            : "bg-transparent py-3.5 sm:py-4.5 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo & Brand - 60% bigger and properly visible */}
            <Link
              href="/"
              className="group flex items-center gap-3 sm:gap-3.5 text-[#0E2229] focus:outline-none shrink-0"
            >
              {/* 60% Bigger Logo with crisp frame */}
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden bg-white shadow-md border-2 border-[#C89B58]/40 transition-transform duration-300 group-hover:scale-105 shrink-0 flex items-center justify-center">
                <Image
                  src="/images/logo1.png"
                  alt="Yoga Regime Logo - Harpreet Kaur"
                  width={160}
                  height={160}
                  priority
                  unoptimized
                  className="w-full h-full object-contain object-center"
                />
              </div>

              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl lg:text-[1.75rem] tracking-tight font-medium leading-none text-[#0E2229] whitespace-nowrap">
                  Yoga Regime
                </span>
                <span className="text-[8px] sm:text-[9.5px] tracking-[0.24em] sm:tracking-[0.28em] text-[#5C7267] uppercase font-semibold mt-1 whitespace-nowrap">
                  Yoga Beyond the Asana
                </span>
              </div>
            </Link>

            {/* Desktop Navigation with Fluid Liquid Sliding Pill */}
            <nav
              className="hidden lg:flex items-center p-1.5 bg-[#ECE8DF]/70 backdrop-blur-md rounded-full border border-[#DFD9CC]/90 shadow-inner"
              onMouseLeave={() => setHoveredPath(null)}
            >
              {navLinks.map((link) => {
                const isCurrent = currentHighlighted === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onMouseEnter={() => setHoveredPath(link.href)}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full z-10 select-none ${
                      isCurrent
                        ? "text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]"
                        : "text-[#1D2628] hover:text-[#0E2229]"
                    }`}
                  >
                    {isCurrent && (
                      <motion.span
                        layoutId="nav-sliding-pill"
                        className="absolute inset-0 rounded-full -z-10 overflow-hidden bg-gradient-to-r from-[#0E2229] via-[#14323D] to-[#0E2229] border border-[#C89B58]/40 shadow-[0_4px_18px_-2px_rgba(14,34,41,0.4),0_0_12px_rgba(200,155,88,0.2)]"
                        transition={{
                          type: "spring",
                          stiffness: 340,
                          damping: 25,
                          mass: 0.85,
                        }}
                      >
                        {/* Top specular liquid gloss */}
                        <span
                          aria-hidden="true"
                          className="absolute inset-x-1 top-0 h-[48%] bg-gradient-to-b from-white/30 via-white/8 to-transparent rounded-t-full pointer-events-none"
                        />
                        {/* Internal fluid ambient ripple */}
                        <span
                          aria-hidden="true"
                          className="absolute -bottom-2 inset-x-2 h-3 bg-[#C89B58]/25 blur-sm rounded-full pointer-events-none"
                        />
                      </motion.span>
                    )}
                    <span>{link.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center gap-4 shrink-0">
              <AnimatedButton
                href="/booking"
                variant="primary"
                size="sm"
                className="shadow-xs px-5 py-2.5 text-xs font-semibold uppercase tracking-wider whitespace-nowrap"
              >
                Connect With Me
              </AnimatedButton>
            </div>

            {/* Mobile & Tablet Controls */}
            <div className="flex lg:hidden items-center gap-2 sm:gap-3 shrink-0">
              {/* Sleek CTA Button for Mobile/Tablet */}
              <AnimatedButton
                href="/booking"
                variant="primary"
                size="xs"
                className="px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-semibold shadow-xs whitespace-nowrap"
              >
                <span>Connect</span>
              </AnimatedButton>

              {/* Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="p-1.5 sm:p-2 rounded-full text-[#0E2229] hover:bg-[#ECE8DF]/70 transition-colors focus:outline-none shrink-0"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 rotate-90" />
                ) : (
                  <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-[#0E2229]/60 backdrop-blur-md lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-[#FAF8F5] shadow-2xl p-6 sm:p-8 flex flex-col justify-between border-l border-[#DFD9CC]"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-6 border-b border-[#DFD9CC]">
                  <div className="flex items-center gap-3">
                    <div className="relative w-11 h-11 rounded-full overflow-hidden bg-white border border-[#C89B58]/40 shadow-sm shrink-0 flex items-center justify-center">
                      <Image
                        src="/images/logo1.png"
                        alt="Yoga Regime Logo"
                        width={120}
                        height={120}
                        unoptimized
                        className="w-full h-full object-contain object-center"
                      />
                    </div>
                    <div>
                      <div className="font-serif text-lg sm:text-xl font-medium text-[#0E2229] leading-tight">
                        Yoga Regime
                      </div>
                      <div className="text-[7.5px] tracking-[0.24em] text-[#5C7267] uppercase font-semibold">
                        Yoga Beyond the Asana
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Close menu"
                    className="p-2 rounded-full text-[#1D2628] hover:bg-[#ECE8DF] transition-colors focus:outline-none"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Staggered Navigation Links without Contact */}
                <nav className="mt-6 flex flex-col gap-2">
                  {navLinks
                    .filter((link) => link.name !== "Contact" && link.href !== "/contact")
                    .map((link, idx) => {
                      const isActive = pathname === link.href;
                      return (
                        <motion.div
                          key={link.name}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.06 * idx, duration: 0.3 }}
                        >
                          <Link
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`flex items-center justify-between px-4 py-3.5 rounded-2xl text-base font-medium transition-all ${
                              isActive
                                ? "bg-[#0E2229] text-white font-semibold shadow-sm"
                                : "text-[#1D2628] hover:bg-[#ECE8DF]/70 hover:text-[#0E2229]"
                            }`}
                          >
                            <span>{link.name}</span>
                            <ArrowRight
                              className={`w-4 h-4 opacity-70 ${
                                isActive ? "text-[#C89B58]" : ""
                              }`}
                            />
                          </Link>
                        </motion.div>
                      );
                    })}
                </nav>
              </div>

              {/* Bottom CTA in drawer */}
              <div className="pt-6 border-t border-[#DFD9CC] space-y-3">
                <AnimatedButton
                  href="/booking"
                  onClick={() => setMobileMenuOpen(false)}
                  variant="primary"
                  size="md"
                  className="w-full py-3.5"
                >
                  Connect With Me
                </AnimatedButton>
                <div className="text-center text-xs text-[#5C7267]">
                  Harpreet Kaur · Certified Yoga Teacher
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
