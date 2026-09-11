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
  typingSpeed = 65,
  deletingSpeed = 30,
  pauseTime = 2000,
  className = "",
  cursorClassName = "",
  showCursor = true,
}) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Normalize words
  const validWords = Array.isArray(words) && words.length > 0 ? words : [""];

  // Find longest word to preserve layout width
  const longestWord = validWords.reduce(
    (longest, current) => (current.length > longest.length ? current : longest),
    validWords[0] || ""
  );

  useEffect(() => {
    if (!isInView) {
      setCurrentText("");
      setIsDeleting(false);
      return;
    }

    const targetWord = validWords[currentWordIndex] || "";
    let timer;

    if (!isDeleting) {
      if (currentText.length < targetWord.length) {
        timer = setTimeout(() => {
          setCurrentText(targetWord.substring(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        // Finished typing word, wait before clearing
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
    } else {
      if (currentText.length > 0) {
        // Clearing / deleting character by character
        timer = setTimeout(() => {
          setCurrentText(targetWord.substring(0, currentText.length - 1));
        }, deletingSpeed);
      } else {
        // Cleared completely, switch to next word
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % validWords.length);
      }
    }

    return () => clearTimeout(timer);
  }, [
    isInView,
    currentText,
    isDeleting,
    currentWordIndex,
    validWords,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return (
    <span
      ref={containerRef}
      className={`relative inline-flex items-baseline max-w-full ${className}`}
      style={{ verticalAlign: "baseline" }}
    >
      {/* Invisible placeholder reserving exact layout space to prevent shifts */}
      <span
        aria-hidden="true"
        className="invisible select-none pointer-events-none opacity-0 h-auto"
      >
        {longestWord}
      </span>

      {/* Visible typing text positioned right over the reserved space */}
      <span className="absolute inset-0 flex items-center whitespace-nowrap overflow-visible">
        <span>{currentText || "\u00A0"}</span>
        {showCursor && (
          <span
            aria-hidden="true"
            className={`inline-block w-[2.5px] sm:w-[3px] h-[0.82em] ml-1 bg-current rounded-full animate-pulse shrink-0 ${cursorClassName}`}
          />
        )}
      </span>
    </span>
  );
}
