"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles, ArrowRight } from "lucide-react";
import AnimatedButton from "./AnimatedButton";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Classes", href: "/classes" },
  { name: "Programs", href: "/programs" },
  { name: "Testimonials", href: "/#testimonials" },
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
    if (pathname.startsWith("/classes")) return "/classes";
    if (pathname.startsWith("/programs")) return "/programs";
    if (pathname.startsWith("/contact")) return "/contact";
    return "";
  };

  const activeHref = getActiveHref();
  const currentHighlighted = hoveredPath !== null ? hoveredPath : activeHref;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          scrolled
            ? "bg-[#F8F7F3]/90 backdrop-blur-xl border-b border-[#EAE7E1]/80 py-2.5 sm:py-3 shadow-[0_4px_20px_-4px_rgba(11,42,58,0.06)]"
            : "bg-transparent py-4 sm:py-5 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo & Brand */}
            <Link
              href="/"
              className="group flex items-center gap-2 sm:gap-3 text-[#0B2A3A] focus:outline-none shrink-0"
            >
              {/* Lotus Icon Emblem */}
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#0B2A3A] text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-sm shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                >
                  <path d="M12 3c-1.5 3-4 6-8 7 4 1 6.5 4 8 11 1.5-7 4-10 8-11-4-1-6.5-4-8-7z" />
                  <path d="M12 12c-2-3-5-4.5-9-4 3 2 4.5 5 5 9" />
                  <path d="M12 12c2-3 5-4.5 9-4-3 2-4.5 5-5 9" />
                </svg>
              </div>

              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-2xl lg:text-[1.65rem] tracking-tight font-medium leading-none text-[#0B2A3A] whitespace-nowrap">
                  Serena Yoga
                </span>
                <span className="text-[7.5px] sm:text-[9px] tracking-[0.2em] sm:tracking-[0.26em] text-[#6E7F72] uppercase font-medium mt-0.5 sm:mt-1 whitespace-nowrap">
                  Move · Breathe · Be
                </span>
              </div>
            </Link>

            {/* Desktop Navigation with Sliding Pill */}
            <nav
              className="hidden lg:flex items-center p-1.5 bg-[#EAE7E1]/40 backdrop-blur-md rounded-full border border-[#EAE7E1]/60"
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
                        ? "text-white"
                        : "text-[#243038] hover:text-[#0B2A3A]"
                    }`}
                  >
                    {isCurrent && (
                      <motion.span
                        layoutId="nav-sliding-pill"
                        className="absolute inset-0 bg-[#0B2A3A] rounded-full -z-10 shadow-sm"
                        transition={{
                          type: "spring",
                          stiffness: 420,
                          damping: 32,
                        }}
                      />
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
                className="shadow-xs px-4.5 py-2 text-xs font-semibold uppercase tracking-wider whitespace-nowrap"
              >
                Book a Session
              </AnimatedButton>
            </div>

            {/* Mobile & Tablet Controls */}
            <div className="flex lg:hidden items-center gap-1.5 sm:gap-2.5 shrink-0">
              {/* Sleek CTA Button for Mobile/Tablet */}
              <AnimatedButton
                href="/booking"
                variant="primary"
                size="xs"
                className="px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-semibold shadow-xs whitespace-nowrap"
              >
                <span className="sm:hidden">Book Session</span>
                <span className="hidden sm:inline">Book a Session</span>
              </AnimatedButton>

              {/* Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="p-1.5 sm:p-2 rounded-full text-[#0B2A3A] hover:bg-[#EAE7E1]/60 transition-colors focus:outline-none shrink-0"
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
            className="fixed inset-0 z-40 bg-[#0B2A3A]/40 backdrop-blur-md lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-[#F8F7F3] shadow-2xl p-6 sm:p-8 flex flex-col justify-between border-l border-[#EAE7E1]"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-6 border-b border-[#EAE7E1]">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#0B2A3A] text-white flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-[#D8C9B8]" />
                    </div>
                    <div>
                      <div className="font-serif text-xl font-medium text-[#0B2A3A]">
                        Serena Yoga
                      </div>
                      <div className="text-[8px] tracking-[0.25em] text-[#6E7F72] uppercase font-medium">
                        Move · Breathe · Be
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Close menu"
                    className="p-2 rounded-full text-[#243038] hover:bg-[#EAE7E1]"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Staggered Navigation Links */}
                <nav className="mt-8 flex flex-col gap-2">
                  {navLinks.map((link, idx) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.08 * idx, duration: 0.35 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex items-center justify-between px-4 py-3.5 rounded-2xl text-base font-medium transition-all ${
                            isActive
                              ? "bg-[#0B2A3A] text-white font-semibold shadow-sm"
                              : "text-[#243038] hover:bg-[#EAE7E1]/70 hover:text-[#0B2A3A]"
                          }`}
                        >
                          <span>{link.name}</span>
                          <ArrowRight
                            className={`w-4 h-4 opacity-70 ${
                              isActive ? "text-[#D8C9B8]" : ""
                            }`}
                          />
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>
              </div>

              {/* Bottom CTA in drawer */}
              <div className="pt-6 border-t border-[#EAE7E1] space-y-3">
                <AnimatedButton
                  href="/booking"
                  onClick={() => setMobileMenuOpen(false)}
                  variant="primary"
                  size="md"
                  className="w-full py-3.5"
                >
                  Book a Session
                </AnimatedButton>
                <div className="text-center text-xs text-[#6E7F72]">
                  Private · Studio · Online Classes
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
