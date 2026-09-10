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

  // Curtains and underlayer colors per variant with high contrast
  const variantStyles = {
    // Primary: Navy curtains parting on hover to reveal warm beige underlayer
    primary: {
      underlayer: "bg-[#D8C9B8]",
      curtain: "bg-[#0B2A3A]",
      textStyle: "text-white group-hover:text-[#0B2A3A]",
      borderColor: "border-[#0B2A3A]",
      shadow: "shadow-xs hover:shadow-md",
    },
    // Secondary: Beige curtains parting on hover to reveal deep navy underlayer
    secondary: {
      underlayer: "bg-[#0B2A3A]",
      curtain: "bg-[#D8C9B8]",
      textStyle: "text-[#0B2A3A] group-hover:text-white",
      borderColor: "border-[#D8C9B8]",
      shadow: "shadow-xs hover:shadow-md",
    },
    // Outline: Warm light curtains parting on hover to reveal deep navy underlayer with crisp white text
    outline: {
      underlayer: "bg-[#0B2A3A]",
      curtain: "bg-[#F8F7F3]",
      textStyle: "text-[#0B2A3A] group-hover:text-white",
      borderColor: "border-[#0B2A3A]",
      shadow: "shadow-xs hover:shadow-md",
    },
    // Sage: Sage curtains parting on hover to reveal deep navy
    sage: {
      underlayer: "bg-[#0B2A3A]",
      curtain: "bg-[#6E7F72]",
      textStyle: "text-white group-hover:text-white",
      borderColor: "border-[#6E7F72]",
      shadow: "shadow-xs hover:shadow-md",
    },
  };

  const currentVariant = variantStyles[variant] || variantStyles.primary;

  const content = (
    <span
      className={`relative z-10 flex items-center justify-center gap-1.5 sm:gap-2 font-medium whitespace-nowrap transition-colors duration-300 ${currentVariant.textStyle}`}
    >
      <span>{children}</span>
      {CustomIcon ? (
        <CustomIcon className={`${currentArrowSize} transition-transform duration-300 ease-out group-hover:translate-x-1 shrink-0`} />
      ) : showArrow ? (
        <ArrowRight className={`${currentArrowSize} transition-transform duration-300 ease-out group-hover:translate-x-1 shrink-0`} />
      ) : null}
    </span>
  );

  const baseClasses = `group relative inline-flex items-center justify-center rounded-full overflow-hidden border transition-all duration-400 ease-out select-none whitespace-nowrap shrink-0 active:scale-[0.98] ${
    currentVariant.underlayer
  } ${currentVariant.borderColor} ${currentVariant.shadow} ${
    sizeClasses[size]
  } ${disabled ? "opacity-60 pointer-events-none" : "cursor-pointer"} ${className}`;

  const curtains = (
    <>
      {/* Left split curtain */}
      <span
        className={`absolute inset-y-0 left-0 w-[50.5%] ${currentVariant.curtain} transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-x-full z-0`}
      />
      {/* Right split curtain */}
      <span
        className={`absolute inset-y-0 right-0 w-[50.5%] ${currentVariant.curtain} transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-full z-0`}
      />
    </>
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses} {...props}>
        {curtains}
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
      {curtains}
      {content}
    </button>
  );
}
