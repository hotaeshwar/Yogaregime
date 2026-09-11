"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AnimatedButton({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary", // "primary" | "secondary" | "outline" | "sage"
  size = "md", // "xs" | "sm" | "md" | "lg"
  showArrow = true,
  icon: CustomIcon,
  className = "",
  disabled = false,
  ...props
}) {
  const sizeClasses = {
    xs: "px-3 py-1.5 text-[11px] tracking-wide",
    sm: "px-3.5 sm:px-4.5 py-1.5 sm:py-2 text-xs tracking-wider",
    md: "px-5 sm:px-7 py-2.5 sm:py-3.5 text-xs sm:text-sm tracking-wide",
    lg: "px-7 sm:px-9 py-3 sm:py-4 text-sm sm:text-base tracking-wide",
  };

  const arrowSizes = {
    xs: "w-3 h-3",
    sm: "w-3.5 h-3.5",
    md: "w-4 h-4",
    lg: "w-4 h-4 sm:w-4.5 sm:h-4.5",
  };

  const currentArrowSize = arrowSizes[size] || "w-3.5 h-3.5";

  // Liquid colors and typography per variant with high contrast
  const variantStyles = {
    // Primary: Navy base with glowing warm gold fluid liquid filling upward
    primary: {
      baseBg: "bg-[#0E2229]",
      liquidWave: "bg-[#C89B58]",
      liquidWaveSecondary: "bg-[#DFC08A]",
      textStyle: "text-white group-hover:text-[#0E2229]",
      borderColor: "border-[#0E2229] hover:border-[#C89B58]",
      shadow: "shadow-sm hover:shadow-lg hover:shadow-[#C89B58]/20",
    },
    // Secondary: Warm beige base with deep navy fluid liquid surging upward
    secondary: {
      baseBg: "bg-[#D9CBBA]",
      liquidWave: "bg-[#0E2229]",
      liquidWaveSecondary: "bg-[#183842]",
      textStyle: "text-[#0E2229] group-hover:text-white",
      borderColor: "border-[#DFD9CC] hover:border-[#0E2229]",
      shadow: "shadow-sm hover:shadow-lg hover:shadow-[#0E2229]/20",
    },
    // Outline: Transparent / crisp border with navy liquid wave rising
    outline: {
      baseBg: "bg-transparent",
      liquidWave: "bg-[#0E2229]",
      liquidWaveSecondary: "bg-[#183842]",
      textStyle: "text-[#0E2229] group-hover:text-white",
      borderColor: "border-[#0E2229] hover:border-[#0E2229]",
      shadow: "shadow-xs hover:shadow-md",
    },
    // Sage: Sage base with warm golden fluid liquid filling
    sage: {
      baseBg: "bg-[#5C7267]",
      liquidWave: "bg-[#C89B58]",
      liquidWaveSecondary: "bg-[#DFC08A]",
      textStyle: "text-white group-hover:text-[#0E2229]",
      borderColor: "border-[#5C7267] hover:border-[#C89B58]",
      shadow: "shadow-sm hover:shadow-lg hover:shadow-[#5C7267]/20",
    },
  };

  const currentVariant = variantStyles[variant] || variantStyles.primary;

  const content = (
    <span
      className={`relative z-10 flex items-center justify-center gap-1.5 sm:gap-2 font-medium whitespace-nowrap transition-colors duration-300 ${currentVariant.textStyle}`}
    >
      <span>{children}</span>
      {CustomIcon ? (
        <CustomIcon
          className={`${currentArrowSize} transition-transform duration-300 ease-out group-hover:translate-x-1 shrink-0`}
        />
      ) : showArrow ? (
        <ArrowRight
          className={`${currentArrowSize} transition-transform duration-300 ease-out group-hover:translate-x-1 shrink-0`}
        />
      ) : null}
    </span>
  );

  const baseClasses = `liquid-btn group relative inline-flex items-center justify-center rounded-full overflow-hidden border transition-all duration-300 ease-out select-none whitespace-nowrap shrink-0 active:scale-[0.96] ${
    currentVariant.baseBg
  } ${currentVariant.borderColor} ${currentVariant.shadow} ${
    sizeClasses[size]
  } ${disabled ? "opacity-60 pointer-events-none" : "cursor-pointer"} ${className}`;

  const liquidEffect = (
    <>
      {/* Secondary fluid wave (depth layer) */}
      <span
        aria-hidden="true"
        className={`liquid-wave-secondary ${currentVariant.liquidWaveSecondary}`}
      />
      {/* Primary fluid wave (main liquid fill) */}
      <span
        aria-hidden="true"
        className={`liquid-wave ${currentVariant.liquidWave}`}
      />
      {/* Specular glossy sheen */}
      <span aria-hidden="true" className="liquid-sheen" />
    </>
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses} {...props}>
        {liquidEffect}
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      {...props}
    >
      {liquidEffect}
      {content}
    </button>
  );
}
