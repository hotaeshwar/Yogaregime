"use client";

import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export default function TypewriterText({
  words = [
    "A Happier Tomorrow",
    "A Calmer Mind",
    "A Stronger Body",
    "A Mindful Life",
  ],
  typingSpeed = 70,
  deletingSpeed = 35,
  pauseTime = 2000,
  className = "",
  cursorClassName = "",
}) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Find the longest word to reserve exact space and prevent layout shifts
  const longestWord = words.reduce(
    (longest, current) => (current.length > longest.length ? current : longest),
    words[0] || ""
  );

  useEffect(() => {
    if (!isInView) {
      setCurrentText("");
      setIsDeleting(false);
      return;
    }

    const targetWord = words[currentWordIndex] || "";
    let timer;

    if (!isDeleting) {
      if (currentText.length < targetWord.length) {
        timer = setTimeout(() => {
          setCurrentText(targetWord.substring(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
    } else {
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(targetWord.substring(0, currentText.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timer);
  }, [
    isInView,
    currentText,
    isDeleting,
    currentWordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return (
    <span ref={containerRef} className={`relative inline-block ${className}`}>
      {/* Invisible placeholder reserving exact width and height */}
      <span
        aria-hidden="true"
        className="invisible select-none pointer-events-none opacity-0"
      >
        {longestWord}
      </span>

      {/* Visible typing text */}
      <span className="absolute inset-0 flex items-center">
        <span className="whitespace-nowrap">{currentText}</span>
        <span
          aria-hidden="true"
          className={`inline-block w-[2.5px] sm:w-[3px] h-[0.82em] ml-1 bg-[#6E7F72] rounded-full animate-pulse shrink-0 ${cursorClassName}`}
        />
      </span>
    </span>
  );
}
