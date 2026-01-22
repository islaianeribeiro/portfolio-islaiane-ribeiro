"use client";

import { useEffect, useState } from "react";

interface TypingTextProps {
  text: string;
  speed?: number;
}

export default function TypingText({
  text = "",
  speed = 100,
}: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    setDisplayedText("");
  }, [text]);

  useEffect(() => {
    if (!text) return;

    const timeout = setTimeout(() => {
      setDisplayedText((prev) => {
        const nextIndex = prev.length;
        if (nextIndex < text.length) {
          return prev + text[nextIndex];
        }
        return prev;
      });
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayedText, text, speed]);

  return (
    <p className="text-base md:text-lg font-medium">
      {displayedText}
      <span className="cursor text-accent">|</span>
    </p>
  );
}
