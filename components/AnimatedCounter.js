"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function AnimatedCounter({
  target,
  duration = 2000,
  decimals = 0,
  prefix = "",
  suffix = "",
  className = "",
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  useEffect(() => {
    if (!isInView) {
      setDisplayValue(0);
      return;
    }

    let startTime = null;
    let animationFrameId = null;

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const updateCounter = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);

      const currentValue = easedProgress * target;
      setDisplayValue(currentValue);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCounter);
      } else {
        setDisplayValue(target);
      }
    };

    animationFrameId = requestAnimationFrame(updateCounter);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isInView, target, duration]);

  const formattedValue =
    decimals > 0
      ? displayValue.toFixed(decimals)
      : Math.floor(displayValue).toString();

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formattedValue}
      {suffix}
    </span>
  );
}
